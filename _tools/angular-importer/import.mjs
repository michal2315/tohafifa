// Imports the curated Angular-stage reading pages (see manifest.mjs) and
// converts them to Docusaurus Markdown with all images stored locally, so the
// result works on a closed network.
//
//   Angular  -> rendered pages from v20.angular.dev
//   NgRx     -> Markdown sources from ngrx/platform (20.1.x), code examples inlined
//   RxJS     -> Markdown sources from ReactiveX/rxjs (7.x)
//   Learn RxJS -> Markdown sources from btroncone/learn-rxjs
//
// Usage:  node import.mjs <output-dir>      e.g. node import.mjs "../../angular/reading"
// Downloads are cached in ./.cache; delete it to refresh.

import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { modules } from './manifest.mjs';

const OUT = path.resolve(process.argv[2] || 'out');
const CACHE = path.resolve('.cache');
fs.mkdirSync(CACHE, { recursive: true });

const RAW = {
  ngrx: 'https://raw.githubusercontent.com/ngrx/platform/20.1.x/projects/www',
  rx: 'https://raw.githubusercontent.com/ReactiveX/rxjs/7.x/docs_app',
  lrx: 'https://raw.githubusercontent.com/btroncone/learn-rxjs/master',
};

const SOURCES = {
  ng: {
    name: 'angular.dev (v20)',
    authors: 'the Angular team (Google)',
    license: 'CC BY 4.0 (text), MIT (code samples)',
    licenseUrl: 'https://angular.dev/license',
    publicUrl: (p) => `https://v20.angular.dev/${p}`,
  },
  ngrx: {
    name: 'NgRx documentation (v20)',
    authors: 'the NgRx team and contributors',
    license: 'MIT',
    licenseUrl: 'https://github.com/ngrx/platform/blob/main/LICENSE',
    publicUrl: (p) => `https://v20.ngrx.io/guide/${p.replace(/\/index$/, '')}`,
    rawUrl: (p) => `${RAW.ngrx}/src/app/pages/guide/${p}.md`,
  },
  rx: {
    name: 'RxJS documentation (v7)',
    authors: 'the RxJS team and contributors',
    license: 'Apache 2.0',
    licenseUrl: 'https://github.com/ReactiveX/rxjs/blob/7.x/LICENSE.txt',
    publicUrl: (p) => `https://rxjs.dev/guide/${p}`,
    rawUrl: (p) => `${RAW.rx}/content/guide/${p}.md`,
  },
  lrx: {
    name: 'Learn RxJS',
    authors: 'Brian Troncone and contributors',
    license: 'MIT',
    licenseUrl: 'https://github.com/btroncone/learn-rxjs/blob/master/LICENSE',
    publicUrl: (p) => `https://www.learnrxjs.io/learn-rxjs/${p}`,
    rawUrl: (p) => `${RAW.lrx}/${p}.md`,
  },
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const parseSrc = (src) => { const i = src.indexOf(':'); return [src.slice(0, i), src.slice(i + 1)]; };
const slugOf = (p) => p.replace(/\/index$/, '').split('/').pop().replace(/[^a-zA-Z0-9-]+/g, '-').toLowerCase();
const normUrl = (u) => { const x = new URL(u); x.hash = ''; x.search = ''; return x.href.replace(/\/$/, '').replace(/\.md$/, ''); };

async function fetchCached(url, binary = false) {
  const key = crypto.createHash('sha1').update(url).digest('hex');
  const file = path.join(CACHE, key + (binary ? '.bin' : '.txt'));
  if (fs.existsSync(file)) return binary ? fs.readFileSync(file) : fs.readFileSync(file, 'utf8');
  await sleep(250);
  const res = await fetch(url, { headers: { 'Accept-Language': 'en-US,en;q=0.9' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  if (binary) { const buf = Buffer.from(await res.arrayBuffer()); fs.writeFileSync(file, buf); return buf; }
  const text = await res.text();
  fs.writeFileSync(file, text);
  return text;
}

// ---------- map of imported pages, for local cross-links ----------
const localPages = new Map(); // normalized public url (and raw url) -> { dir, file }
for (const mod of modules) {
  mod.pages.forEach((p, i) => {
    const [kind, rel] = parseSrc(p.src);
    p.kind = kind; p.rel = rel;
    p.file = `${String(i + 1).padStart(2, '0')}-${p.name || slugOf(rel)}.md`;
    p.url = SOURCES[kind].publicUrl(rel);
    const target = { dir: mod.dir, file: p.file };
    localPages.set(normUrl(p.url), target);
    if (SOURCES[kind].rawUrl) localPages.set(normUrl(SOURCES[kind].rawUrl(rel)), target);
  });
}
const localLink = (absUrl, currentDir) => {
  const t = localPages.get(normUrl(absUrl));
  if (!t) return null;
  const hash = new URL(absUrl).hash;
  return (t.dir === currentDir ? `./${t.file}` : `../${t.dir}/${t.file}`) + hash;
};

async function saveAsset(absUrl, imgDir, imgRel, report, nameHint) {
  const base = (nameHint || path.basename(new URL(absUrl).pathname)).replace(/[^a-zA-Z0-9._-]/g, '_') || 'file';
  const buf = await fetchCached(absUrl, true);
  if (/^\s*<(!doctype html|html)/i.test(buf.subarray(0, 200).toString())) throw new Error(`not an image (got an HTML page): ${absUrl}`);
  fs.mkdirSync(imgDir, { recursive: true });
  fs.writeFileSync(path.join(imgDir, base), buf);
  report.assets++;
  return `${imgRel}/${base}`;
}

// ---------- Angular (rendered HTML) ----------
const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-', emDelimiter: '*' });
td.use(gfm);
td.addRule('fencedWithLang', {
  filter: (n) => n.nodeName === 'PRE',
  replacement: (_c, n) => {
    const lang = n.getAttribute('data-lang') || '';
    const code = n.textContent.replace(/\n+$/, '');
    const fence = code.includes('```') ? '~~~~' : '```';
    return `\n\n${fence}${lang}\n${code}\n${fence}\n\n`;
  },
});
td.addRule('admonition', {
  filter: (n) => n.nodeName === 'DIV' && n.getAttribute('data-admonition'),
  replacement: (content, n) => {
    const title = n.getAttribute('data-title');
    return `\n\n:::${n.getAttribute('data-admonition')}${title ? `[${title}]` : ''}\n\n${content.trim()}\n\n:::\n\n`;
  },
});

const guessLang = (code, header) => {
  const h = (header || '').toLowerCase();
  const first = code.split('\n')[0].trim();
  const hint = (h || first).match(/\.(ts|html|scss|css|json|js|sh)\b/);
  if (hint) return { ts: 'ts', html: 'html', scss: 'scss', css: 'css', json: 'json', js: 'js', sh: 'shell' }[hint[1]];
  if (/^(ng |npm |npx |yarn |git )/.test(first)) return 'shell';
  if (/^<[a-zA-Z@!]|^@(if|for|switch|defer)\b|^\{\{/.test(first)) return 'html';
  if (/^[.#:a-z-]+[^{]*\{\s*$/.test(first) && !/=>|function|class |import /.test(code)) return 'css';
  return 'ts';
};

async function convertAngular(page, mod, report) {
  const html = await fetchCached(page.url);
  const $ = cheerio.load(html);
  const root = $('.docs-viewer').first();
  if (!root.length) throw new Error('content (.docs-viewer) not found');
  const title = root.find('.docs-page-title h1, h1').first().text().trim();
  if (!title || /^Home\b/.test($('title').text())) throw new Error('page did not render (no title)');
  const base = page.file.replace(/\.md$/, '');
  const imgDir = path.join(OUT, mod.dir, 'img', base);
  const imgRel = `./img/${base}`;

  root.find('docs-breadcrumb, .docs-breadcrumb, .docs-page-title, .docs-github-links, docs-table-of-contents, script, style, button, docs-icon').remove();
  root.find('.docs-decorative-header-container').remove();
  root.find('a.docs-anchor').each((_, a) => { $(a).replaceWith($(a).html()); });

  // Mermaid diagrams are pre-rendered as inline SVG: keep them as SVG files.
  let svgNo = 0;
  for (const svg of root.find('svg.flowchart, svg[id^="mermaid"], svg[aria-roledescription]').toArray()) {
    const $svg = $(svg);
    if (!$svg.attr('xmlns')) $svg.attr('xmlns', 'http://www.w3.org/2000/svg');
    const name = `diagram-${++svgNo}.svg`;
    fs.mkdirSync(imgDir, { recursive: true });
    fs.writeFileSync(path.join(imgDir, name), $.html($svg));
    report.assets++;
    ($svg.parent().is('.docs-viewer') ? $svg : $svg.closest('div, pre, figure').length ? $svg.closest('div, pre, figure') : $svg).replaceWith(`<p><img src="${imgRel}/${name}" alt="Diagram"></p>`);
  }
  root.find('svg').remove();

  // Code blocks (Shiki): one line per .line span.
  root.find('.docs-code').each((_, c) => {
    const $c = $(c);
    const header = $c.find('.docs-code-header, [class*="header"]').first().text().trim();
    const lines = $c.find('pre .line').toArray().map((l) => $(l).text());
    const code = lines.length ? lines.join('\n') : $c.find('pre').text();
    const lang = guessLang(code, header);
    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    $c.replaceWith(`${header ? `<p><strong>${esc(header)}</strong></p>` : ''}<pre data-lang="${lang}">${esc(code)}</pre>`);
  });
  root.find('pre.shiki').each((_, p) => {
    const $p = $(p);
    const code = $p.find('.line').toArray().map((l) => $(l).text()).join('\n') || $p.text();
    $p.replaceWith(`<pre data-lang="${guessLang(code)}">${code.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</pre>`);
  });

  const alertType = (cls) => (/critical/.test(cls) ? 'danger' : /important|warning/.test(cls) ? 'warning' : /tip|helpful/.test(cls) ? 'tip' : 'note');
  root.find('.docs-alert').each((_, a) => {
    const $a = $(a);
    $a.find('strong').first().filter((_, s) => /^(tip|note|important|critical|helpful|warning|question|summary|todo)\s*:?$/i.test($(s).text().trim())).remove();
    $a.replaceWith(`<div data-admonition="${alertType($a.attr('class'))}">${$a.html()}</div>`);
  });
  root.find('.docs-callout').each((_, a) => {
    const $a = $(a);
    const $h = $a.children('h2, h3, h4').first();
    const title = $h.text().trim();
    $h.remove();
    $a.replaceWith(`<div data-admonition="${alertType($a.attr('class'))}"${title ? ` data-title="${title.replace(/"/g, '&quot;')}"` : ''}>${$a.html()}</div>`);
  });
  root.find('.docs-pill-row').each((_, r) => {
    const items = $(r).find('a').toArray().map((a) => `<li><a href="${$(a).attr('href')}">${$(a).text().trim()}</a></li>`).join('');
    $(r).replaceWith(`<p><strong>Read next:</strong></p><ul>${items}</ul>`);
  });
  root.find('docs-card, .docs-card').each((_, c) => {
    const $c = $(c);
    const href = $c.attr('href') || $c.find('a').attr('href');
    const t = $c.find('h2, h3, [class*="title"]').first().text().trim() || $c.attr('title') || '';
    $c.replaceWith(`<p>${href ? `<a href="${href}">${t || href}</a>` : t}${$c.find('p').first().length ? ': ' + $c.find('p').first().html() : ''}</p>`);
  });

  for (const img of root.find('img').toArray()) {
    const $img = $(img);
    const src = $img.attr('src') || '';
    if (src.startsWith('./img/')) continue;
    try { $img.attr('src', await saveAsset(new URL(src, 'https://v20.angular.dev/').href, imgDir, imgRel, report)); }
    catch (e) { report.warnings.push(`image skipped: ${e.message}`); $img.replaceWith(`<em>[Image not available offline: ${$img.attr('alt') || src}]</em>`); }
  }
  root.find('a[href]').each((_, a) => {
    const $a = $(a);
    let abs;
    try { abs = new URL($a.attr('href'), 'https://v20.angular.dev/').href; } catch { return; }
    $a.attr('href', localLink(abs, mod.dir) || abs);
  });

  const unknown = new Set(root.find('*').toArray().map((e) => e.tagName).filter((t) => t.includes('-')));
  if (unknown.size) report.warnings.push(`custom elements left: ${[...unknown].join(', ')}`);
  return { title, md: td.turndown($.html(root)) };
}

// ---------- Markdown sources (NgRx, RxJS, Learn RxJS) ----------
const extLang = (p) => ({ ts: 'ts', html: 'html', scss: 'scss', css: 'css', json: 'json', js: 'js' })[path.extname(p).slice(1)] || '';

async function localizeMdImages(md, page, mod, report, resolveImg) {
  const base = page.file.replace(/\.md$/, '');
  const imgDir = path.join(OUT, mod.dir, 'img', base);
  const imgRel = `./img/${base}`;
  const urls = new Set();
  md.replace(/!\[[^\]]*\]\(([^)\s]+)[^)]*\)/g, (_, u) => urls.add(u));
  md.replace(/<img[^>]*src="([^"]+)"/g, (_, u) => urls.add(u));
  for (const u of urls) {
    try {
      const local = await saveAsset(resolveImg(u), imgDir, imgRel, report);
      md = md.split(`(${u}`).join(`(${local}`).split(`src="${u}"`).join(`src="${local}"`);
    } catch (e) {
      report.warnings.push(`image skipped: ${e.message}`);
      md = md.replace(new RegExp(`!\\[([^\\]]*)\\]\\(${u.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^)]*\\)`, 'g'), '*[Image not available offline: $1]*');
    }
  }
  // Raw <img> tags: make them Markdown so Docusaurus bundles them.
  md = md.replace(/<img[^>]*src="([^"]+)"[^>]*?(?:alt="([^"]*)")?[^>]*\/?>/g, (_, src, alt) => `![${alt || ''}](${src})`);
  return md;
}

function rewriteMdLinks(md, page, mod, toAbs) {
  return md.replace(/(?<!!)\[([^\]]*)\]\(([^)\s]+)\)/g, (all, text, href) => {
    if (href.startsWith('#') || href.startsWith('./img/')) return all;
    let abs;
    try { abs = toAbs(href); } catch { return all; }
    return `[${text}](${localLink(abs, mod.dir) || abs})`;
  });
}

async function convertNgrx(page, mod, report) {
  let md = await fetchCached(SOURCES.ngrx.rawUrl(page.rel));
  const examples = [];
  md.replace(/<ngrx-code-example([^>]*)path="([^"]+)"[^>]*>\s*<\/ngrx-code-example>/g, (_, _a, p) => examples.push(p));
  const files = {};
  for (const p of examples) {
    try { files[p] = await fetchCached(`${RAW.ngrx}/src/app/examples/${p}`); } catch (e) { report.warnings.push(`example missing: ${p}`); }
  }
  md = md
    .replace(/<ngrx-code-example([^>]*?)path="([^"]+)"[^>]*>\s*<\/ngrx-code-example>/g, (_, attrs, p) => {
      const header = (attrs.match(/header="([^"]+)"/) || [])[1] || p.split('/').pop();
      if (!files[p]) return `*Code example \`${p}\` not available offline.*`;
      return `**${header}**\n\n\`\`\`${extLang(p)}\n${files[p].replace(/\n+$/, '')}\n\`\`\``;
    })
    .replace(/<ngrx-code-example([^>]*)>\s*/g, (_, attrs) => { const h = (attrs.match(/header="([^"]+)"/) || [])[1]; return h ? `**${h}**\n\n` : ''; })
    .replace(/\s*<\/ngrx-code-example>/g, '')
    .replace(/<\/?ngrx-code-tabs[^>]*>/g, '')
    .replace(/<ngrx-docs-alert type="([a-z]+)">\s*/g, (_, t) => `:::${{ help: 'tip', inform: 'info', error: 'warning' }[t] || 'note'}\n\n`)
    .replace(/\s*<\/ngrx-docs-alert>/g, '\n\n:::')
    .replace(/<ngrx-docs-stackblitz[^>]*><\/ngrx-docs-stackblitz>/g, (m) => (/embedded/.test(m) ? ':::note[Live example not available offline]\n\nThe original page embeds a StackBlitz demo here. The full code is on this page.\n\n:::' : 'StackBlitz starter project'))
    .replace(/<ngrx-[a-z-]+[^>]*>[\s\S]*?<\/ngrx-[a-z-]+>/g, '')
    .replace(/<ngrx-[a-z-]+[^>]*\/?>/g, '');
  const title = (md.match(/^#\s+(.+)$/m) || [])[1] || page.rel;
  md = md.replace(/^#\s+.+\n/m, '');
  md = await localizeMdImages(md, page, mod, report, (u) => (/^https?:/.test(u) ? u : `${RAW.ngrx}/public/${u.replace(/^\//, '')}`));
  md = rewriteMdLinks(md, page, mod, (h) => (/^https?:/.test(h) ? h : new URL(h.replace(/^\//, ''), 'https://v20.ngrx.io/').href));
  return { title: title.trim(), md };
}

async function convertRx(page, mod, report) {
  let md = await fetchCached(SOURCES.rx.rawUrl(page.rel));
  md = md.replace(/<span class="informal">([\s\S]*?)<\/span>/g, '*$1*');
  const title = (md.match(/^#\s+(.+)$/m) || [])[1] || page.rel;
  md = md.replace(/^#\s+.+\n/m, '');
  md = await localizeMdImages(md, page, mod, report, (u) => (/^https?:/.test(u) ? u : `${RAW.rx}/src/${u.replace(/^\//, '')}`));
  md = rewriteMdLinks(md, page, mod, (h) => (/^https?:/.test(h) ? h : new URL(h.replace(/^\.?\//, ''), 'https://rxjs.dev/').href));
  return { title: title.trim(), md };
}

async function convertLrx(page, mod, report) {
  let md = await fetchCached(SOURCES.lrx.rawUrl(page.rel));
  const title = (md.match(/^#\s+(.+)$/m) || [])[1] || page.rel;
  md = md.replace(/^#\s+.+\n/m, '');
  const rawBase = SOURCES.lrx.rawUrl(page.rel);
  md = await localizeMdImages(md, page, mod, report, (u) => new URL(u, rawBase).href);
  md = rewriteMdLinks(md, page, mod, (h) => {
    if (/^https?:/.test(h)) return h;
    const abs = new URL(h, rawBase).href; // relative .md link inside the repo
    const rel = abs.replace(`${RAW.lrx}/`, '').replace(/\.md(#.*)?$/, '$1');
    return localPages.has(normUrl(abs)) ? abs : SOURCES.lrx.publicUrl(rel);
  });
  return { title: title.replace(/`/g, '').trim(), md };
}

function frontMatter(o) {
  return `---\ntitle: ${JSON.stringify(o.title)}\nsidebar_position: ${o.position}\nmdx:\n  format: md\ntags: [${o.level}]\n---\n\n`;
}

async function importPage(mod, page, position, sources) {
  const report = { src: page.src, assets: 0, warnings: [] };
  const conv = { ng: convertAngular, ngrx: convertNgrx, rx: convertRx, lrx: convertLrx }[page.kind];
  const { title, md: raw } = await conv(page, mod, report);
  const site = SOURCES[page.kind];
  const md = raw
    .replace(/^(\s*)-   /gm, '$1- ')
    .replace(/^(\s*)(\d+)\.  /gm, '$1$2. ')
    .replace(/^(#+ .*?)<a id="([^"]+)"><\/a>(.*)$/gm, '$1$3 {#$2}')
    .replace(/^(#+ )(.*)$/gm, (_, h, t) => h + t.split('`').map((part, i) => (i % 2 ? part : part.replace(/(\w+<[\w, ]+>)/g, '`$1`'))).join('`'))
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+$/gm, '')
    .trim();
  const badge = page.level === 'required' ? '**Required reading**' : '**Skim**: read the headings and examples, come back when you need it.';
  const attribution = `:::info[Source]\n\nAdapted from [${title}](${page.url}) by ${site.authors}, ${site.name}, licensed under [${site.license}](${site.licenseUrl}). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.\n\n:::`;
  const note = page.note ? `\n\n> **Trainer note:** ${page.note}` : '';
  fs.mkdirSync(path.join(OUT, mod.dir), { recursive: true });
  fs.writeFileSync(path.join(OUT, mod.dir, page.file), `${frontMatter({ title, position, level: page.level })}${badge}${note}\n\n${attribution}\n\n${md}\n`);
  sources.push({ module: mod.label, file: `${mod.dir}/${page.file}`, title, url: page.url, site: site.name, license: site.license, level: page.level });
  return report;
}

const sources = [];
const reports = [];
for (const [mi, mod] of modules.entries()) {
  fs.mkdirSync(path.join(OUT, mod.dir), { recursive: true });
  fs.writeFileSync(path.join(OUT, mod.dir, '_category_.json'), JSON.stringify({ label: mod.label, position: mi + 1 }, null, 2) + '\n');
  for (const [pi, page] of mod.pages.entries()) {
    try {
      const r = await importPage(mod, page, pi + 1, sources);
      reports.push(r);
      console.log(`ok   ${mod.dir}/${page.file}  (${r.assets} assets)${r.warnings.length ? '  ! ' + r.warnings.join(' | ') : ''}`);
    } catch (e) {
      reports.push({ src: page.src, error: e.message });
      console.log(`FAIL ${page.src}: ${e.message}`);
    }
  }
}
fs.writeFileSync(path.join(OUT, '_import-report.json'), JSON.stringify({ importedAt: new Date().toISOString(), sources, reports }, null, 2));
console.log(`\n${sources.length} pages imported, ${reports.filter((r) => r.error).length} failed.`);
