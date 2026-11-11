// Second pass over a recorded copy: finds images and other files that the saved
// pages reference but the browser never loaded (lazy images, hidden tabs) and
// downloads them from the live site.
//   node sweep.mjs <docs-dir>
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve(process.argv[2]);
const { origin } = JSON.parse(fs.readFileSync(path.join(dir, 'mirror.json'), 'utf8'));
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const RE = /["'(`=\s](\/?(?:generated\/images|assets|images|img|static|demo|showcase)\/[^"'()`\s\\<>{}$]+?\.(?:png|jpe?g|gif|svg|webp|avif|ico|mp4|webm|woff2?|ttf|json|md))["')`\s?#]/g;

let repaired = 0;
for (const file of walk(dir)) {
  if (fs.statSync(file).size) continue;
  const rel = path.relative(dir, file).split(path.sep).join('/');
  const url = rel.startsWith('_ext/') ? `https://${rel.slice(5)}` : `${origin}/${rel}`;
  const r = await fetch(url);
  if (r.ok) { fs.writeFileSync(file, Buffer.from(await r.arrayBuffer())); repaired++; }
  else console.log(`  could not repair ${rel} (${r.status})`);
}
if (repaired) console.log(`${path.basename(dir)}: ${repaired} empty files repaired`);

let chunks = 0;
for (const file of walk(dir)) {
  if (!/(^|[\\/])(runtime|webpack)[.-][^\\/]*\.js$/.test(file)) continue;
  const src = fs.readFileSync(file, 'utf8');
  for (const m of src.matchAll(/"?([A-Za-z0-9_-]+)"?:"([0-9a-f]{16,20})"/g)) {
    const name = `${m[1]}.${m[2]}.js`;
    const target = path.join(path.dirname(file), name);
    if (fs.existsSync(target) && fs.statSync(target).size) continue;
    const rel = path.relative(dir, target).split(path.sep).join('/');
    const r = await fetch(`${origin}/${rel}`);
    if (!r.ok || /text\/html/.test(r.headers.get('content-type') || '')) continue;
    fs.writeFileSync(target, Buffer.from(await r.arrayBuffer()));
    chunks++;
  }
}
if (chunks) console.log(`${path.basename(dir)}: ${chunks} webpack chunks added`);

let added = 0;
const tried = new Set();
for (let round = 0; round < 3; round++) {
  let found = 0;
  for (const file of walk(dir)) {
    if (!/\.(html|js|mjs|css|json)$/.test(file) || file.includes(`${path.sep}_ext${path.sep}`)) continue;
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(RE)) {
      const rel = m[1].replace(/^\//, '');
      if (tried.has(rel)) continue;
      tried.add(rel);
      const target = path.join(dir, ...rel.split('/'));
      if (fs.existsSync(target)) continue;
      try {
        const r = await fetch(`${origin}/${rel}`);
        const type = r.headers.get('content-type') || '';
        if (!r.ok || (/text\/html/.test(type) && !rel.endsWith('.html'))) continue;
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, Buffer.from(await r.arrayBuffer()));
        added++; found++;
      } catch { /* skip */ }
    }
  }
  if (!found) break;
}
console.log(`${path.basename(dir)}: ${added} referenced files added`);

const extDir = path.join(dir, '_ext');
const hosts = [new URL(origin).host, ...(fs.existsSync(extDir) ? fs.readdirSync(extDir) : [])];
let rewritten = 0;
for (const file of walk(dir)) {
  const isText = /\.(html|js|mjs|css|json|webmanifest)$/.test(file) || (file.includes(`${path.sep}fonts.googleapis.com${path.sep}`));
  if (!isText) continue;
  let s = fs.readFileSync(file, 'utf8');
  const before = s;
  for (const h of hosts) {
    const local = h === new URL(origin).host ? '' : `/_ext/${h}`;
    s = s.split(`https://${h}/`).join(`${local}/`).split(`http://${h}/`).join(`${local}/`);
  }
  if (s !== before) { fs.writeFileSync(file, s); rewritten++; }
}
console.log(`${path.basename(dir)}: absolute URLs pointed at the local copy in ${rewritten} files`);
