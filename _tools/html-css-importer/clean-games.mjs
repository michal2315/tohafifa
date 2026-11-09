// Prepares Flexbox Froggy, Grid Garden and CSS Diner for a closed network:
//  - removes ads, Google Analytics (replaced by a no-op stub so game code keeps working),
//    social share widgets and cross-promotion blocks
//  - downloads the Google Fonts they use (all SIL Open Font License) and serves them locally
//  - turns remaining outbound links in the page chrome into plain text
//
// Usage: node clean-games.mjs <games-source-dir> <output-dir>

import * as cheerio from 'cheerio';
import fs from 'node:fs';
import path from 'node:path';

const [SRC, OUT] = process.argv.slice(2).map((p) => path.resolve(p));
const GAMES = [
  { dir: 'flexboxfroggy', out: 'flexbox-froggy' },
  { dir: 'gridgarden', out: 'grid-garden' },
  { dir: 'css-diner', out: 'css-diner' },
];
const DROP_FILES = ['.git', 'CNAME', 'ads.txt', '_config.yml', '.github'];
const GA_STUB = '<script>/* analytics removed for offline use */ window.ga = window.ga || function () {};</script>';

async function vendorFonts(cssUrl, gameOut) {
  const css = await (await fetch(cssUrl)).text();
  const fontDir = path.join(gameOut, 'fonts');
  fs.mkdirSync(fontDir, { recursive: true });
  let local = css;
  for (const [, url] of css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)) {
    const name = url.split('/').slice(-3).join('-');
    fs.writeFileSync(path.join(fontDir, name), Buffer.from(await (await fetch(url)).arrayBuffer()));
    local = local.replace(url, `./${name}`);
  }
  return local;
}

for (const g of GAMES) {
  const src = path.join(SRC, g.dir);
  const out = path.join(OUT, g.out);
  fs.rmSync(out, { recursive: true, force: true });
  fs.cpSync(src, out, { recursive: true, filter: (p) => !DROP_FILES.includes(path.basename(p)) });

  const indexFile = path.join(out, 'index.html');
  const $ = cheerio.load(fs.readFileSync(indexFile, 'utf8'), { decodeEntities: false });
  const removed = [];

  // Ads
  $('meta[name="google-adsense-account"], ins.adsbygoogle, script[src*="googlesyndication"]').each((_, e) => { removed.push('ads'); $(e).remove(); });
  $('script').filter((_, s) => /adsbygoogle/.test($(s).html() || '')).remove();
  // Analytics -> stub
  $('script').filter((_, s) => /google-analytics\.com/.test($(s).html() || '')).each((_, s) => { removed.push('analytics'); $(s).replaceWith(GA_STUB); });
  // Cross-promotion and social sharing
  $('#share, .share-menu').each((_, e) => { removed.push('share/promo'); $(e).remove(); });
  $('#gridGarden, #flexboxFroggy').each((_, e) => { removed.push('promo'); $(e).closest('div').remove(); });
  // Fonts
  let fontCss = '';
  for (const link of $('link[href*="fonts.googleapis.com"]').toArray()) {
    fontCss += (await vendorFonts($(link).attr('href'), out)) + '\n';
    $(link).remove();
    removed.push('google fonts (vendored)');
  }
  if (fontCss) {
    fs.writeFileSync(path.join(out, 'fonts', 'fonts.css'), fontCss);
    $('head').prepend('<link rel="stylesheet" href="fonts/fonts.css">\n    ');
  }
  // Outbound links in the page chrome -> plain text (they cannot open on the closed network)
  $('body a[href^="http"], body a[href^="//"]').each((_, a) => { $(a).replaceWith(`<span>${$(a).html()}</span>`); });

  fs.writeFileSync(indexFile, $.html());
  console.log(`${g.out}: removed/changed -> ${[...new Set(removed)].join(', ')}`);
}
