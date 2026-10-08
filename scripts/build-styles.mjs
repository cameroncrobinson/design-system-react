import { mkdir, readdir, writeFile, unlink } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { compile } from 'sass';

const root = resolve(import.meta.dirname, '..');
const components = resolve(root, 'styles');
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
  !file.includes('location-map') && !file.includes('_colors-component-library'));
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
  await writeFile(resolve(root, 'dist/styles.css'), result.css);
} finally { await unlink(entry); }
