import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const rows = JSON.parse(fs.readFileSync(new URL('migration-map.json', root), 'utf8'));
for (const row of rows) { if (!fs.existsSync(new URL(row.implementation, root))) throw Error('Missing implementation: ' + row.source); }
const exports = fs.readFileSync(new URL('src/index.ts', root), 'utf8');
const paths = [...exports.matchAll(/from '(\.\/components\/[^']+)'/g)].map(match => match[1].replace(/\.js$/, ''));
for (const file of new Set(paths)) { if (!fs.existsSync(new URL('src/' + file + '.stories.tsx', root))) throw Error('Missing story: ' + file); }
console.log(rows.length + ' Twig templates mapped; ' + new Set(paths).size + ' components with colocated stories.');
