// The NgRx docs app loads each page from generated/docs/<page>.json (through a
// service worker, so the recorder misses most of them). Download them all
// directly, plus the navigation and search data.
//   node ngrx-fill.mjs <ngrx-dir>
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve(process.argv[2]);
const { origin, pages } = JSON.parse(fs.readFileSync(path.join(dir, 'mirror.json'), 'utf8'));
const files = ['generated/navigation.json', 'generated/docs/index.json', 'generated/docs/app/search-data.json'];
for (const p of pages) if (p !== '/') files.push(`generated/docs${p}.json`);
let ok = 0;
const missing = [];
for (const f of files) {
  const target = path.join(dir, ...f.split('/'));
  if (fs.existsSync(target) && fs.statSync(target).size) { ok++; continue; }
  const r = await fetch(`${origin}/${f}`);
  const type = r.headers.get('content-type') || '';
  if (!r.ok || !/json/.test(type)) { missing.push(`${r.status} ${f}`); continue; }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, Buffer.from(await r.arrayBuffer()));
  ok++;
}
const sw = path.join(dir, 'ngsw-worker.js');
if (fs.existsSync(sw)) fs.renameSync(sw, path.join(dir, 'ngsw-worker.disabled.js'));
console.log(`ngrx: ${ok}/${files.length} content files present; not available: ${missing.length}`);
if (missing.length) console.log(missing.slice(0, 30).join('\n'));
