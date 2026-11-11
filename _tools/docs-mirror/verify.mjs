// Opens an offline copy (served by serve.mjs) with all internet access blocked
// and reports missing files and pages that render without content.
//   node verify.mjs <docs-dir> <port> [sample-size] [screenshot-dir]
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const [dir, port, sampleArg, shots] = process.argv.slice(2);
const { pages } = JSON.parse(fs.readFileSync(path.join(dir, 'mirror.json'), 'utf8'));
const n = +(sampleArg || 40);
const step = Math.max(1, Math.floor(pages.length / n));
const sample = pages.filter((_, i) => i % step === 0).slice(0, n);
const base = `http://localhost:${port}`;

const browser = await puppeteer.launch({ executablePath: process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 900 });
await page.setRequestInterception(true);
const external = new Map();
const missing = new Map();
const errors = new Set();
page.on('request', (r) => {
  const u = new URL(r.url());
  if (/^https?:$/.test(u.protocol) && u.host !== `localhost:${port}`) { external.set(u.host, (external.get(u.host) || 0) + 1); r.abort().catch(() => {}); }
  else r.continue().catch(() => {});
});
page.on('response', (r) => { if (r.status() >= 400) missing.set(new URL(r.url()).pathname, r.status()); });
page.on('pageerror', (e) => errors.add(e.message.split('\n')[0].slice(0, 160)));

const empty = [];
let i = 0;
for (const route of sample) {
  const fresh = i++ % 5 === 0;
  if (fresh) await page.goto(base + route, { waitUntil: 'networkidle2', timeout: 60000 }).catch((e) => errors.add(`goto ${route}: ${e.message}`));
  else {
    await page.evaluate((r) => { history.pushState(null, '', r); dispatchEvent(new PopStateEvent('popstate', { state: null })); }, route);
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 15000 }).catch(() => {});
  }
  const text = await page.evaluate(() => Math.max(0, ...[...document.querySelectorAll('main, article, .docs-viewer, .layout-content, .content, aio-doc-viewer')].map((e) => e.innerText.trim().length))).catch(() => 0);
  if (text < 200) empty.push(`${route} (${fresh ? 'direct' : 'in-app'} load, ${text} chars)`);
  if (shots && i <= 3) { fs.mkdirSync(shots, { recursive: true }); await page.screenshot({ path: path.join(shots, `${i}.png`) }); }
}
await browser.close();
console.log(JSON.stringify({ checked: sample.length, emptyPages: empty, missingFiles: Object.fromEntries([...missing].slice(0, 30)), missingCount: missing.size, blockedExternal: Object.fromEntries(external), jsErrors: [...errors].slice(0, 15) }, null, 2));
