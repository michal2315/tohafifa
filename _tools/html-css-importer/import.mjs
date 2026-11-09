// Imports the curated reading pages (see manifest.mjs) from web.dev, MDN and
// sass-lang.com and converts them to Docusaurus-friendly Markdown with all
// images stored locally, so the result works on a closed network.
//
// Usage:  node import.mjs <output-dir>
//   e.g.  node import.mjs "../../html&css/reading"
//
// Fetched HTML is cached in ./.cache so re-runs are fast; delete it to refresh.

import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { modules } from './manifest.mjs';

const OUT = path.resolve(process.argv[2] || 'out');
const CACHE = path.resolve('.cache');
const MAX_VIDEO_BYTES = 15 * 1024 * 1024;
fs.mkdirSync(CACHE, { recursive: true });

const SITES = {
  webdev: {
    match: (u) => u.hostname === 'web.dev',
    name: 'web.dev',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    content: '.devsite-article-body',
    title: ($) => ($('meta[property="og:title"]').attr('content') || $('title').text()).split('|')[0].replace(/ /g, ' ').trim(),
    authors: () => 'the web.dev authors (Google)',
  },
  mdn: {
    match: (u) => u.hostname === 'developer.mozilla.org',
    name: 'MDN Web Docs',
    license: 'CC BY-SA 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/',
    content: '.reference-layout__body',
    title: ($) => $('main h1').first().text().trim() || $('title').text().split('-')[0].trim(),
    authors: () => 'Mozilla Contributors',
  },
  sass: {
    match: (u) => u.hostname === 'sass-lang.com',
    name: 'Sass documentation',
    license: 'MIT',
    licenseUrl: 'https://github.com/sass/sass-site/blob/main/LICENSE',
    content: '.sl-l-medium-holy-grail__main, .sl-l-large-holy-grail__main, main#main-content',
    title: ($) => $('main h1').first().text().trim() || $('title').text().split('|')[0].trim(),
    authors: () => 'the Sass team',
  },
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const siteOf = (url) => Object.entries(SITES).find(([, s]) => s.match(new URL(url)));
const slugOf = (url) => new URL(url).pathname.replace(/\/$/, '').split('/').pop().replace(/[^a-zA-Z0-9-]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
const normUrl = (u) => { const x = new URL(u); x.hash = ''; x.search = ''; return x.href.replace(/\/$/, ''); };

async function fetchCached(url, binary = false) {
  const key = crypto.createHash('sha1').update(url).digest('hex');
  const file = path.join(CACHE, key + (binary ? '.bin' : '.html'));
  if (fs.existsSync(file)) return binary ? fs.readFileSync(file) : fs.readFileSync(file, 'utf8');
  await sleep(300); // be polite
  // web.dev otherwise picks a language from the requester's location.
  const fetchUrl = !binary && new URL(url).hostname === 'web.dev' ? `${url}?hl=en` : url;
  const res = await fetch(fetchUrl, { redirect: 'follow', headers: { 'Accept-Language': 'en-US,en;q=0.9' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  if (binary) {
    const len = Number(res.headers.get('content-length') || 0);
    if (len > MAX_VIDEO_BYTES) throw new Error(`too large (${len} bytes) ${url}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(file, buf);
    return buf;
  }
  const text = await res.text();
  fs.writeFileSync(file, text);
  return text;
}

// ---------- build the map of imported pages, for local cross-links ----------
const localPages = new Map(); // normalized url -> { module dir, file }
for (const mod of modules) {
  mod.pages.forEach((p, i) => {
    p.file = `${String(i + 1).padStart(2, '0')}-${p.name || slugOf(p.url)}.md`;
    localPages.set(normUrl(p.url), { dir: mod.dir, file: p.file });
  });
}

// ---------- Markdown conversion ----------
function makeTurndown() {
  const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-', emDelimiter: '*' });
  td.use(gfm);
  td.keep(['video', 'source', 'details', 'summary', 'kbd', 'sub', 'sup']);

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
      const type = n.getAttribute('data-admonition');
      const title = n.getAttribute('data-title');
      return `\n\n:::${type}${title ? `[${title}]` : ''}\n\n${content.trim()}\n\n:::\n\n`;
    },
  });
  // Raw HTML blocks we generate ourselves (quiz answers, video).
  td.addRule('rawHtml', {
    filter: (n) => n.nodeName === 'DIV' && n.hasAttribute('data-raw'),
    replacement: (_c, n) => `\n\n${n.innerHTML.trim()}\n\n`,
  });
  return td;
}
const td = makeTurndown();

const langFrom = ($el) => {
  const attr = ($el.attr('syntax') || $el.attr('class') || '') + ' ' + ($el.find('code').attr('class') || '');
  const m = attr.match(/(?:language-|lang-|brush:\s*)([a-z0-9]+)/i) || (($el.attr('syntax') || '').match(/^([A-Za-z0-9]+)/));
  let lang = m ? m[1].toLowerCase() : '';
  if (lang === 'plain' || lang === 'text' || lang === 'notranslate') lang = '';
  if (lang === 'js') lang = 'javascript';
  return lang;
};

async function processImages($, root, pageUrl, imgDir, imgRel, report) {
  const items = root.find('img, video, source').toArray();
  for (const el of items) {
    const $el = $(el);
    const attr = $el.attr('src') ? 'src' : null;
    if (!attr) { if (el.tagName === 'video' && !$el.find('source').length) $el.remove(); continue; }
    const abs = new URL($el.attr(attr), pageUrl).href;
    if (/gstatic\.com\/devrel-devsite|\/lockup\.svg/.test(abs)) { $el.remove(); continue; }
    const base = path.basename(new URL(abs).pathname).replace(/[^a-zA-Z0-9._-]/g, '_') || 'file';
    try {
      const buf = await fetchCached(abs, true);
      fs.mkdirSync(imgDir, { recursive: true });
      fs.writeFileSync(path.join(imgDir, base), buf);
      $el.attr(attr, `${imgRel}/${base}`);
      $el.removeAttr('srcset').removeAttr('sizes').removeAttr('loading').removeAttr('decoding');
      report.assets++;
    } catch (e) {
      report.warnings.push(`asset skipped (${e.message})`);
      if (el.tagName === 'img') $el.replaceWith(`<em>[Image not available offline: ${$el.attr('alt') || base}]</em>`);
      else $el.closest('video').replaceWith('<em>[Video not available offline]</em>');
    }
  }
  // Videos become a marker that is turned into an MDX <video> with require(),
  // so Docusaurus bundles the file (it does not process src in raw HTML).
  root.find('video').each((_, v) => {
    const $v = $(v);
    const srcs = [$v.attr('src'), ...$v.find('source').toArray().map((s) => $(s).attr('src'))].filter((s) => s && s.startsWith('./'));
    const src = srcs.find((s) => s.endsWith('.mp4')) || srcs[0];
    if (!src) { $v.remove(); return; }
    report.videos++;
    $v.replaceWith(`<div data-raw="">@@VIDEO@@${src}@@</div>`);
  });
}

function rewriteLinks($, root, pageUrl, currentDir) {
  root.find('a[href]').each((_, a) => {
    const $a = $(a);
    const href = $a.attr('href');
    if (href.startsWith('#')) { $a.replaceWith($a.html()); return; } // in-page anchors: ids differ after conversion
    let abs;
    try { abs = new URL(href, pageUrl); } catch { return; }
    const local = localPages.get(normUrl(abs.href));
    if (local) {
      const rel = local.dir === currentDir ? `./${local.file}` : `../${local.dir}/${local.file}`;
      $a.attr('href', rel);
    } else {
      $a.attr('href', abs.href); // external: kept as reference, not reachable offline
    }
  });
}

function cleanCommon($, root) {
  root.find('script, style, noscript, button, template, devsite-feedback, devsite-thumb-rating, nav, .visuallyhidden, .devsite-article-meta, .devsite-page-rating').remove();
  root.find('[class*="browser-compat"], [class*="BrowserCompat"], .wd-browser-compat, devsite-content-footer').remove();
  root.find('audio').closest('p').remove();
  root.find('audio').remove();
  root.find('h1').first().remove();
  // Heading self-links
  root.find('h2 a, h3 a, h4 a, h5 a').each((_, a) => { const $a = $(a); if (!$a.text().trim()) $a.remove(); });
}

function convertWebdev($, root) {
  // Podcast link heading above the audio player
  root.find('h5').filter((_, h) => /podcast/i.test($(h).text())).remove();
  root.find('pre').each((_, p) => { const $p = $(p); $p.attr('data-lang', langFrom($p)); });
  root.find('aside').each((_, a) => {
    const $a = $(a);
    const cls = ($a.attr('class') || 'note').split(' ')[0];
    const type = { note: 'note', caution: 'warning', warning: 'warning', objective: 'info', 'key-point': 'tip', 'key-term': 'info', success: 'tip', important: 'warning', gotchas: 'warning' }[cls] || 'note';
    $a.find('b, strong').first().filter((_, b) => /^(note|caution|warning|key term|key point|important)\s*:?\s*$/i.test($(b).text().trim())).remove();
    $a.replaceWith(`<div data-admonition="${type}">${$a.html()}</div>`);
  });
  // CodePen demos cannot work offline: replace with a pointer.
  root.find('iframe').each((_, f) => {
    const $f = $(f);
    const src = $f.attr('src') || '';
    const m = src.match(/codepen\.io\/([^/]+)\/embed\/([^?]+)/);
    const holder = $f.closest('.wd-embed, figure').length ? $f.closest('.wd-embed, figure') : $f;
    const msg = m
      ? `<p>This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: <code>${m[1]}/${m[2]}</code>)</p>`
      : `<p>An embedded demo was here and is not available offline.</p>`;
    holder.replaceWith(`<div data-admonition="note" data-title="Interactive demo not available offline">${msg}</div>`);
  });
  // Self-assessment quizzes -> question, options, collapsible answer.
  root.find('.wd-assessment').each((_, a) => {
    const $a = $(a);
    let out = '<h2>Check your understanding</h2>';
    $a.find('devsite-multiple-choice').each((qi, q) => {
      const $q = $(q);
      const kids = $q.children('div').toArray();
      const question = $(kids[0]).html();
      const options = kids.slice(1).map((o) => ({ correct: $(o).is('[correct]'), text: $(o).children('div').eq(0).html(), why: $(o).children('div').eq(1).html() }));
      out += `<p><strong>Question ${qi + 1}.</strong></p>${question}<ul>${options.map((o) => `<li>${o.text}</li>`).join('')}</ul>`;
      const ans = options.filter((o) => o.correct).map((o) => `<p><strong>${o.text.trim()}</strong>: ${(o.why || '').trim()}</p>`).join('');
      out += `<div data-raw=""><details><summary>Show answer</summary>\n\n${ans}\n\n</details></div>`;
    });
    $a.replaceWith(out);
  });
  root.find('.wd-caption, figcaption').each((_, c) => { $(c).replaceWith(`<p><em>${$(c).html()}</em></p>`); });
}

function convertMdn($, root) {
  // MDN keeps the page introduction in the header, next to the h1.
  $('.reference-layout__header section.content-section').first().clone().prependTo(root);
  // Previous / Overview / Next link lists from the Learn area.
  root.find('ul').filter((_, ul) => {
    const items = $(ul).children('li').toArray().map((li) => $(li).text().trim());
    return items.length > 0 && items.length <= 3 && items.every((t) => /^(Previous|Next|Overview\b.*)$/i.test(t));
  }).remove();
  root.find('section.article-footer, section[aria-labelledby="browser_compatibility"], section[aria-labelledby="specifications"]').remove();
  root.find('interactive-example, .interactive-example, .bc-table, .bc-legend, .metadata, .baseline-indicator, [class*="baseline"]').remove();
  root.find('.example-header').remove();
  root.find('pre').each((_, p) => { const $p = $(p); $p.attr('data-lang', langFrom($p)); });
  root.find('iframe').each((_, f) => {
    $(f).replaceWith('<div data-admonition="note" data-title="Live result not available offline"><p>The original page shows the rendered result here. Paste the code above into the playground to see it.</p></div>');
  });
  root.find('.notecard').each((_, n) => {
    const $n = $(n);
    const cls = $n.attr('class') || '';
    const type = /warning/.test(cls) ? 'warning' : /deprecated/.test(cls) ? 'danger' : /callout/.test(cls) ? 'tip' : 'note';
    $n.find('strong').first().filter((_, s) => /^(note|warning|callout|deprecated)\s*:?\s*$/i.test($(s).text().trim())).remove();
    $n.replaceWith(`<div data-admonition="${type}">${$n.html()}</div>`);
  });
  root.find('dl').each((_, dl) => {
    // Definition lists -> bold term + paragraph (Markdown has no dl).
    const $dl = $(dl);
    let html = '';
    $dl.children().each((_, c) => { html += c.tagName === 'dt' ? `<p><strong>${$(c).html()}</strong></p>` : `<blockquote>${$(c).html()}</blockquote>`; });
    $dl.replaceWith(html);
  });
}

function convertSass($, root) {
  root.find('.sl-c-alert').each((_, a) => { $(a).replaceWith(`<div data-admonition="warning">${$(a).html()}</div>`); });
  root.find('.sl-c-callout, .sl-c-callout--fun-fact, .sl-c-callout--warning, .sl-c-callout--impl-status').each((_, a) => {
    const $a = $(a);
    if (/impl-status|compatibility/i.test($a.attr('class') || '') || /Compatibility/.test($a.find('h2,h3,dt').first().text())) { $a.remove(); return; }
    const type = /warning/.test($a.attr('class')) ? 'warning' : 'tip';
    const $h = $a.children('h2, h3, h4').first();
    const title = $h.text().replace(/[⚠️💡]/gu, '').trim();
    $h.remove();
    $a.replaceWith(`<div data-admonition="${type}"${title ? ` data-title="${title.replace(/"/g, '&quot;')}"` : ''}>${$a.html()}</div>`);
  });
  root.find('.impl-status, .sl-c-callout--impl-status, [class*="compatibility"]').remove();
  root.find('.code-example').each((_, ex) => {
    const $ex = $(ex);
    let html = '';
    $ex.find('.ui-tabs-panel').each((_, panel) => {
      const $p = $(panel);
      if ($p.hasClass('sass')) return; // indented syntax: we only teach SCSS
      const label = $p.hasClass('css') ? 'CSS output' : 'SCSS';
      html += `<p><strong>${label}</strong></p>`;
      $p.find('pre').each((_, pre) => { const lang = $p.hasClass('css') ? 'css' : 'scss'; html += `<pre data-lang="${lang}">${$(pre).html()}</pre>`; });
    });
    $ex.replaceWith(html);
  });
  root.find('pre:not([data-lang])').each((_, p) => { const $p = $(p); $p.attr('data-lang', langFrom($p)); });
  root.find('.sl-c-toc, .sl-l-medium-holy-grail__complementary, .sl-l-large-holy-grail__complementary, .sl-c-pagination, footer').remove();
}

// Pages are plain Markdown (mdx.format: md) unless they contain videos. Video
// pages must be MDX so the player can require() the file; their text is
// escaped so MDX does not read { } or < as code.
const MDX_ALLOWED_TAGS = /^<\/?(details|summary|p|strong|em|code|ul|ol|li|br|kbd|sub|sup|div|span|b|i|a)\b[^>]*>/;
function mdxEscape(md) {
  const out = [];
  let inFence = null;
  for (const line of md.split('\n')) {
    const fence = line.match(/^\s{0,3}(```|~~~~)/);
    if (fence) { inFence = inFence ? (fence[1] === inFence ? null : inFence) : fence[1]; out.push(line); continue; }
    if (inFence || line.startsWith('@@VIDEO@@')) { out.push(line); continue; }
    // Leave inline code spans untouched; escape everything else.
    out.push(line.split(/(`+[^`]*`+)/).map((seg, i) => {
      if (i % 2 === 1) return seg;
      let s = seg.replace(/[{}]/g, (c) => `\\${c}`);
      s = s.replace(/<br\s*>/g, '<br />');
      s = s.replace(/<!--/g, '\\<!--');
      s = s.replace(/<(?![/a-zA-Z])/g, '\\<');
      s = s.replace(/<\/?[a-zA-Z][^>]*>?/g, (m) => (MDX_ALLOWED_TAGS.test(m) ? m : `\\${m}`));
      return s;
    }).join(''));
  }
  return out.join('\n');
}
const videoJsx = (src) => `<video controls style={{maxWidth: '100%'}} src={require('${src}').default} />`;

function frontMatter(o) {
  const esc = (s) => JSON.stringify(s);
  return `---\ntitle: ${esc(o.title)}\nsidebar_position: ${o.position}\nmdx:\n  format: ${o.mdx ? 'mdx' : 'md'}\ntags: [${o.level}]\n---\n\n`;
}

async function importPage(mod, page, position, sources) {
  const [siteKey, site] = siteOf(page.url);
  const report = { url: page.url, assets: 0, videos: 0, warnings: [] };
  const html = await fetchCached(page.url);
  const $ = cheerio.load(html);
  const title = site.title($).replace(/\s+/g, ' ');
  const root = $(site.content).first();
  if (!root.length) throw new Error(`content selector not found on ${page.url}`);

  cleanCommon($, root);
  if (siteKey === 'webdev') convertWebdev($, root);
  if (siteKey === 'mdn') convertMdn($, root);
  if (siteKey === 'sass') convertSass($, root);

  const base = page.file.replace(/\.md$/, '');
  await processImages($, root, page.url, path.join(OUT, mod.dir, 'img', base), `./img/${base}`, report);
  rewriteLinks($, root, page.url, mod.dir);

  let md = td.turndown($.html(root));
  md = md
    .replace(/^(\s*)-   /gm, '$1- ')
    .replace(/^(\s*)(\d+)\.  /gm, '$1$2. ')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+$/gm, '')
    .trim();
  // Number repeated quiz headings so each section has a unique title.
  let quizNo = 0;
  const quizCount = (md.match(/^## Check your understanding$/gm) || []).length;
  if (quizCount > 1) md = md.replace(/^## Check your understanding$/gm, () => `## Check your understanding (${++quizNo})`);
  const isMdx = report.videos > 0;
  if (isMdx) md = mdxEscape(md).replace(/@@VIDEO@@(.+?)@@/g, (_, src) => videoJsx(src));

  const badge = page.level === 'required' ? '**Required reading**' : '**Skim**: read the headings and examples, come back when you need it.';
  const attribution = `:::info[Source]\n\nAdapted from [${title}](${page.url}) by ${site.authors()}, ${site.name}, licensed under [${site.license}](${site.licenseUrl}). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.${site.license.includes('SA') ? ' This adapted page is shared under the same license.' : ''}\n\n:::`;
  const note = page.note ? `\n\n> **Trainer note:** ${page.note}` : '';
  const out = `${frontMatter({ title, position, level: page.level, mdx: isMdx })}${badge}${note}\n\n${attribution}\n\n${md}\n`;

  fs.mkdirSync(path.join(OUT, mod.dir), { recursive: true });
  fs.writeFileSync(path.join(OUT, mod.dir, page.file), out);
  sources.push({ module: mod.label, file: `${mod.dir}/${page.file}`, title, url: page.url, site: site.name, license: site.license, level: page.level });
  return report;
}

// ---------- main ----------
const sources = [];
const reports = [];
for (const [mi, mod] of modules.entries()) {
  fs.mkdirSync(path.join(OUT, mod.dir), { recursive: true });
  fs.writeFileSync(path.join(OUT, mod.dir, '_category_.json'), JSON.stringify({ label: mod.label, position: mi + 1 }, null, 2) + '\n');
  for (const [pi, page] of mod.pages.entries()) {
    try {
      const r = await importPage(mod, page, pi + 1, sources);
      reports.push(r);
      console.log(`ok   ${mod.dir}/${page.file}  (${r.assets} assets${r.warnings.length ? `, ${r.warnings.length} warnings` : ''})`);
    } catch (e) {
      reports.push({ url: page.url, error: e.message });
      console.log(`FAIL ${page.url}: ${e.message}`);
    }
  }
}
fs.writeFileSync(path.join(OUT, '_import-report.json'), JSON.stringify({ importedAt: new Date().toISOString(), sources, reports }, null, 2));
const failed = reports.filter((r) => r.error).length;
console.log(`\n${sources.length} pages imported, ${failed} failed. Report: _import-report.json`);
