// Draws the pictures for "visual" questions, so trainers never make screenshots by hand.
//
// Usage: node render.mjs <quizzes-dir> [chrome-path]
//   reads  <quizzes-dir>/src/*.yaml
//   writes <quizzes-dir>/img/*.png
//
// A visual question has the HTML as `context`. Then either:
//   - `code` (SCSS) and picture options: the right picture is drawn from `code`,
//     every wrong one from its own `render` SCSS; or
//   - `image` and code options: the image is drawn from the right option's code.
// `:host` in the SCSS becomes the wrapper element around the HTML.
// `renderWidth` (px, default 320) sets the wrapper's width.

import yaml from 'js-yaml';
import * as sass from 'sass';
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.resolve(process.argv[2] || '.');
const CHROME = process.argv[3] || process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const jobs = [];
for (const f of fs.readdirSync(path.join(DIR, 'src')).filter((x) => x.endsWith('.yaml')).sort()) {
  const data = yaml.load(fs.readFileSync(path.join(DIR, 'src', f), 'utf8'));
  for (const q of data.questions || []) {
    if (q.type !== 'visual') continue;
    const html = q.context?.source || '';
    const width = q.renderWidth || 320;
    if (q.image) {
      const right = (q.options || []).find((o) => o.correct);
      if (right) jobs.push({ id: q.id, out: q.image, html, scss: right.code, width });
    } else {
      for (const o of q.options || []) jobs.push({ id: q.id, out: o.image, html, scss: o.correct ? q.code.source : o.render, width });
    }
  }
}
if (!jobs.length) { console.log('no visual questions'); process.exit(0); }

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 800, height: 600, deviceScaleFactor: 2 });
let failed = 0;
for (const j of jobs) {
  try {
    const css = sass.compileString(j.scss.replace(/:host\b/g, '.quiz-host')).css;
    await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>
      *, *::before, *::after { box-sizing: border-box; }
      body { margin: 0; padding: 12px; background: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #262626; }
      .quiz-host { display: block; width: ${j.width}px; outline: 1px dashed #c7c7c7; }
      ${css}
    </style></head><body><div class="quiz-host">${j.html}</div></body></html>`);
    const el = await page.$('body');
    const box = await page.evaluate(() => {
      const r = document.querySelector('.quiz-host').getBoundingClientRect();
      let right = r.right;
      let bottom = r.bottom;
      for (const e of document.querySelectorAll('.quiz-host *')) {
        const b = e.getBoundingClientRect();
        right = Math.max(right, b.right);
        bottom = Math.max(bottom, b.bottom);
      }
      return { w: Math.ceil(right + 12), h: Math.ceil(bottom + 12) };
    });
    const out = path.join(DIR, j.out);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await el.screenshot({ path: out, clip: { x: 0, y: 0, width: box.w, height: box.h } });
    console.log(`${j.id.padEnd(10)} ${j.out}`);
  } catch (e) {
    failed++;
    console.error(`${j.id}: ${j.out} failed: ${e.message.split('\n')[0]}`);
  }
}
await browser.close();
if (failed) process.exit(1);
