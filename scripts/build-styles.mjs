import { mkdir, readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { compile } from 'sass';

const root = resolve(import.meta.dirname, '..');
const components = resolve(root, 'src/components');
async function collect(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory()
    ? collect(resolve(dir, entry.name))
    : entry.name.endsWith('.scss') ? [resolve(dir, entry.name)] : []));
  return nested.flat().sort();
}
// Keep the original import order; omit the legacy aggregate and Leaflet's CSS import.
const files = (await collect(components)).filter(file =>
  !file.endsWith('style.scss') && !file.endsWith('colors-used.scss') &&
  !file.includes('_colors-component-library'));
files.unshift(resolve(components, '00-base/01-colors/colors-used.scss'));
const entry = resolve(root, '.styles-entry.scss');
await writeFile(entry, [
  '@import "normalize.css/normalize";',
  '@import "breakpoint-sass/stylesheets/breakpoint";',
  ...files.map(file => `@import "${relative(root, file).replaceAll('\\', '/')}";`),
  '.accordion-text[hidden], .tabs__tab[hidden] { display: none !important; }',
  '.tabs__link { font: inherit; cursor: pointer; }',
  '.button[aria-disabled="true"] { opacity: .5; pointer-events: none; }'
].join('\n'));
try {
  await mkdir(resolve(root, 'dist'), { recursive: true });
  const result = compile(entry, { loadPaths: [resolve(root, 'node_modules')], style: 'compressed', logger: { warn() {} } });
  let leaflet = await readFile(resolve(root, 'node_modules/leaflet/dist/leaflet.css'), 'utf8');
  for (const filename of ['layers.png', 'layers-2x.png', 'marker-icon.png']) {
    const bytes = await readFile(resolve(root, 'node_modules/leaflet/dist/images', filename));
    leaflet = leaflet.replaceAll('url(images/' + filename + ')', 'url(data:image/png;base64,' + bytes.toString('base64') + ')');
  }
  const fontImports = result.css.match(/@import"[^"]+";/g) ?? [];
  const css = result.css.replace(/@import"[^"]+";/g, '');
  await writeFile(resolve(root, 'dist/styles.css'), fontImports.join('\n') + '\n' + leaflet + '\n' + css);
} finally { await unlink(entry); }
