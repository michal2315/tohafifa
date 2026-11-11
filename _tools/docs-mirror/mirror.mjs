// Records an offline copy of a single-page documentation site.
// It opens the site's client-only shell in headless Chrome, navigates the
// Angular router to every page and saves every file the browser downloads.
//
//   node mirror.mjs <site> <out-dir>
//
// Sites are configured in SITES below. Pages come from the sitemap, plus every
// same-site link found on visited pages (breadth-first), so sites without a
// sitemap are covered too.

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const SITES = {
  angular: { origin: 'https://v20.angular.dev', shell: 'index.csr.html', sitemap: true, start: ['/'] },
  primeng: { origin: 'https://v20.primeng.org', shell: 'index.csr.html', sitemap: false, start: ['/', '/installation', '/theming/styled', '/passthrough', '/icons'] },
  nestjs: { origin: 'https://docs.nestjs.com', shell: 'index.csr.html', sitemap: true, start: ['/'] },
  rxviz: { origin: 'https://rx-viz.vercel.app', shell: 'index.html', sitemap: false, fullLoad: true, start: ['/', '/examples/basic-interval', '/examples/random-error', '/examples/chess-game', '/examples/higher-order-observable', '/examples/grouped-fibonacci', '/examples/today-is', '/examples/input-element', '/examples/mouse-move', '/examples/pause-and-resume', '/examples/custom-operator', '/examples/custom'] },
  ngrx: { origin: 'https://v20.ngrx.io', shell: 'index.html', sitemap: false, start: ['/', '/docs', '/guide/store', '/guide/effects', '/guide/entity', '/guide/store-devtools', '/guide/router-store', '/guide/signals', '/guide/operators', '/guide/component-store', '/guide/eslint-plugin', '/guide/data', '/guide/component', '/guide/schematics', '/api'] },
};
const EXT_ALLOW = /^(fonts\.googleapis\.com|fonts\.gstatic\.com|use\.fontawesome\.com|cdn\.jsdelivr\.net|unpkg\.com|cdnjs\.cloudflare\.com|primefaces\.org|www\.primefaces\.org|primeng\.org|raw\.githubusercontent\.com)$/;
const blocked = new Map();
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const TABS = +(process.env.TABS || 4);
const LIMIT = +(process.env.LIMIT || 5000);

const [siteName, outArg] = process.argv.slice(2);
const site = SITES[siteName];
if (!site) throw new Error(`unknown site, use one of: ${Object.keys(SITES).join(', ')}`);
const OUT = path.resolve(outArg);
const ORIGIN = new URL(site.origin);
fs.mkdirSync(OUT, { recursive: true });

const saved = new Map();
const extHosts = new Map();
const noExt = new Set();
const failed = [];

function fileFor(u) {
  let p = decodeURIComponent(u.pathname);
  if (u.host !== ORIGIN.host) p = `/_ext/${u.host}${p}`;
  if (p.endsWith('/')) p += 'index.html';
  return path.join(OUT, ...p.split('/').filter(Boolean).map((s) => s.replace(/[<>:"|?*]/g, '_')));
}

async function onResponse(res) {
  const req = res.request();
  if (req.method() !== 'GET') return;
  let u;
  try { u = new URL(res.url()); } catch { return; }
  if (!/^https?:$/.test(u.protocol)) return;
  if (u.host !== ORIGIN.host) {
    if (!EXT_ALLOW.test(u.host)) return;
    extHosts.set(u.host, (extHosts.get(u.host) || 0) + 1);
  }
  const status = res.status();
  if (status >= 300 && status < 400) return;
  if (status !== 200) { failed.push(`${status} ${u.href}`); return; }
  if (u.host === ORIGIN.host && req.resourceType() === 'document') {
    if (!site.fullLoad) return;
    const p = u.pathname.replace(/\/$/, '');
    const file = path.join(OUT, ...p.split('/').filter(Boolean), 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, await res.buffer());
    saved.set(file, u.href);
    return;
  }
  if (u.host === ORIGIN.host && !path.extname(u.pathname) && !u.pathname.endsWith('/')) noExt.add(u.pathname);
  const file = fileFor(u);
  if (saved.has(file)) return;
  try {
    let buf = await res.buffer().catch(() => Buffer.alloc(0));
    if (!buf.length) { const r = await fetch(u.href); if (r.ok) buf = Buffer.from(await r.arrayBuffer()); }
    if (!buf.length) return;
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, buf);
    saved.set(file, u.href);
  } catch { /* body unavailable (e.g. preflight or evicted) */ }
}

async function sitemapRoutes() {
  const xml = await (await fetch(`${site.origin}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1].trim()).pathname);
}

const norm = (p) => (p.length > 1 ? p.replace(/\/$/, '') : p);
const queue = [];
const seen = new Set();
const enqueue = (p) => { p = norm(p); if (!seen.has(p) && seen.size < LIMIT) { seen.add(p); queue.push(p); } };
site.start.forEach(enqueue);
if (site.sitemap) (await sitemapRoutes()).forEach(enqueue);
console.log(`${siteName}: ${queue.length} pages to start with`);

// Shell (client-only entry point) and a few well-known files.
for (const f of [site.shell, 'favicon.ico', 'manifest.webmanifest', 'robots.txt']) {
  const r = await fetch(`${site.origin}/${f}`);
  if (r.ok) { fs.writeFileSync(path.join(OUT, f), Buffer.from(await r.arrayBuffer())); saved.set(path.join(OUT, f), `${site.origin}/${f}`); }
}

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox', '--disable-gpu'] });
let done = 0;
async function worker(id) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.setRequestInterception(true);
  page.on('request', (r) => {
    let host = '';
    try { host = new URL(r.url()).host; } catch { /* data: etc. */ }
    if (host && host !== ORIGIN.host && !EXT_ALLOW.test(host)) { blocked.set(host, (blocked.get(host) || 0) + 1); r.abort().catch(() => {}); }
    else r.continue().catch(() => {});
  });
  page.on('response', (r) => { onResponse(r).catch(() => {}); });
  page.on('dialog', (d) => d.dismiss().catch(() => {}));
  const openShell = async () => {
    for (let attempt = 1; attempt <= 10; attempt++) {
      try { await page.goto(`${site.origin}/${site.shell}`, { waitUntil: 'networkidle2', timeout: 90000 }); return; }
      catch (e) { console.log(`  tab ${id}: shell load failed (${e.message.split('\n')[0]}), retry ${attempt}`); await new Promise((r) => setTimeout(r, 15000 * attempt)); }
    }
    throw new Error('shell would not load');
  };
  const retried = new Set();
  await openShell();
  while (queue.length) {
    const route = queue.shift();
    try {
      if (site.fullLoad) await page.goto(site.origin + route, { waitUntil: 'networkidle2', timeout: 60000 });
      else await page.evaluate((r) => { history.pushState(null, '', r); dispatchEvent(new PopStateEvent('popstate', { state: null })); scrollTo(0, document.body.scrollHeight); }, route);
      await page.waitForNetworkIdle({ idleTime: 600, timeout: 20000 }).catch(() => {});
      const links = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => { try { const u = new URL(a.href, location.href); return u.host === location.host ? u.pathname : null; } catch { return null; } }).filter(Boolean));
      links.filter((l) => !path.extname(l) && !l.startsWith('/_') && !l.startsWith('/assets/')).forEach(enqueue);
    } catch (e) {
      if (!retried.has(route)) { retried.add(route); queue.push(route); }
      else failed.push(`nav ${route}: ${e.message.split('\n')[0]}`);
      await openShell();
    }
    if (++done % 50 === 0) console.log(`  ${done} pages, ${queue.length} queued, ${saved.size} files`);
  }
  await page.close();
}
await Promise.all(Array.from({ length: TABS }, (_, i) => worker(i)));
await browser.close();

// Code chunks that are only loaded on interaction (search dialog, playground…):
// find chunk references in the saved JavaScript and download the missing ones.
let added;
do {
  added = 0;
  for (const [file, href] of [...saved]) {
    if (!file.endsWith('.js') || !href.startsWith(site.origin)) continue;
    const src = fs.readFileSync(file, 'utf8');
    for (const m of src.matchAll(/["'`]\.?\/?((?:chunk|[a-z0-9-]+)[-.][A-Za-z0-9_-]{6,}\.js)["'`]/g)) {
      const u = new URL(m[1], href);
      const f = fileFor(u);
      if (saved.has(f) || fs.existsSync(f)) continue;
      const r = await fetch(u);
      if (!r.ok || /text\/html/.test(r.headers.get('content-type') || '')) continue;
      fs.mkdirSync(path.dirname(f), { recursive: true });
      fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()));
      saved.set(f, u.href);
      added++;
    }
  }
  if (added) console.log(`  +${added} lazy chunks`);
} while (added);

// Point absolute URLs at the local copy.
const hosts = [ORIGIN.host, ...extHosts.keys()];
for (const [file] of saved) {
  if (!/\.(html|js|mjs|css|json|webmanifest)$/.test(file)) continue;
  let s = fs.readFileSync(file, 'utf8');
  const before = s;
  for (const h of hosts) {
    const local = h === ORIGIN.host ? '' : `/_ext/${h}`;
    s = s.split(`https://${h}/`).join(`${local}/`).split(`//${h}/`).join(`${local}/`);
  }
  if (s !== before) fs.writeFileSync(file, s);
}

fs.writeFileSync(path.join(OUT, 'mirror.json'), JSON.stringify({ site: siteName, origin: site.origin, fallback: site.shell, recordedAt: new Date().toISOString(), pages: [...seen].sort() }, null, 2));
fs.writeFileSync(path.join(OUT, '..', `${siteName}-mirror-report.json`), JSON.stringify({ files: saved.size, pages: seen.size, extHosts: Object.fromEntries(extHosts), blockedHosts: Object.fromEntries(blocked), extensionlessRequests: [...noExt], failed }, null, 2));
console.log(`${siteName}: ${seen.size} pages, ${saved.size} files, ${failed.length} failed requests, external hosts: ${[...extHosts.keys()].join(', ') || 'none'}`);
