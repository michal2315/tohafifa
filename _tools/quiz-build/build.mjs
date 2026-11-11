// Validates the quiz bank (YAML, easy for trainers to edit) and compiles it to
// JSON files that the Docusaurus quiz component imports.
//
// Usage: node build.mjs <quizzes-dir>
//   reads  <quizzes-dir>/src/*.yaml
//   writes <quizzes-dir>/<module>.json, <quizzes-dir>/placement.json, <quizzes-dir>/index.json

import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.resolve(process.argv[2] || '.');
const SRC = path.join(DIR, 'src');
const READING = path.resolve(DIR, '..', 'reading');

const TYPES = ['single', 'multiple', 'predict', 'spot-the-bug', 'text', 'order', 'match', 'fill', 'pick-the-fix', 'visual', 'find-all-bugs'];
const CHOICE_TYPES = ['single', 'multiple', 'predict', 'fill', 'pick-the-fix', 'visual'];
const ANSWER_TYPES = ['spot-the-bug', 'text', 'find-all-bugs'];
const BLANK = '___';
const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

// Reference implementation of text-answer matching. The quiz component should
// use the same rules (copied into the README).
export function normalizeTextAnswer(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/["']/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/\s*([:;,>+~(){}=])\s*/g, '$1')
    .replace(/;+$/, '');
}

// Team conventions every code sample must follow, so trainees only ever see
// code written our way. A question whose point is a convention violation
// (the conventions quiz) sets `lint: false`.
const STYLE_RULES = [
  [/\/\*|(^|\s)\/\//m, 'has a comment'],
  [/\b\d+(\.\d+)?(vh|vw)\b/, 'uses vh/vw (only allowed at the top level of the app)'],
  [/\b(rgba?|hsla?)\(|:\s*(white|black|gray|grey|red|blue|green|transparent)\b/, 'uses a color that is not hex'],
  [/#[0-9a-fA-F]{3,8}\b/, null],
  [/^\s*(html|body|h[1-6]|p|a|span|div|img|button|input|ul|li)\s*[,{]/m, 'styles a tag instead of a class'],
  [/[.#$@-][a-z]+[A-Z]/, 'has a name that is not kebab-case'],
  [/^[.#a-z*[][^\n]*\{/m, 'has a rule outside :host'],
];
const HTML_RULES = [
  [/<!--/, 'has a comment'],
  [/<(html|body|head|h[1-6]|p|article|section|nav|header|footer|main|aside|style)(?![\w-])/, 'uses a tag we do not use'],
  [/\b(class|id|for)="[^"]*[A-Z]/, 'has a name that is not kebab-case'],
];
const TS_RULES = [
  [/\/\*|(^|[^:])\/\//m, 'has a comment'],
  [/@(Input|Output)\(/, 'uses the @Input/@Output decorators instead of input()/output()'],
  [/@NgModule\(/, 'uses an NgModule'],
];
function lintCode(at, k, c) {
  if (['ts', 'typescript', 'js', 'json', 'text', 'shell'].includes(c.lang)) {
    if (['ts', 'typescript', 'js'].includes(c.lang)) for (const [re, msg] of TS_RULES) if (re.test(c.source)) err(at, `${k} ${msg}`);
    return;
  }
  const isHtml = c.lang === 'html';
  for (const [re, msg] of isHtml ? HTML_RULES : STYLE_RULES) {
    if (!msg) {
      const bad = (c.source.match(/#[0-9a-fA-F]{3,8}\b/g) || []).filter((h) => !/^#[0-9a-f]{6}([0-9a-f]{2})?$/.test(h));
      if (bad.length) err(at, `${k}: colors must be lowercase 6- or 8-digit hex (found ${bad.join(', ')})`);
    } else if (re.test(c.source)) err(at, `${k} ${msg}`);
  }
  if (!isHtml && /\{/.test(c.source.replace(/@(mixin|function)[^{]*\{[\s\S]*?\n\}/g, '')) && !/:host\s*\{/.test(c.source)) err(at, `${k}: component styles must be wrapped in :host { }`);
}

function validateQuestion(q, file, ids) {
  const at = `${file} ${q.id || '(no id)'}`;
  const isChoice = CHOICE_TYPES.includes(q.type);
  for (const k of ['id', 'type', 'topic', 'difficulty', 'prompt', 'explanation']) if (q[k] === undefined) err(at, `missing "${k}"`);
  if (ANSWER_TYPES.includes(q.type) && q.answer === undefined) err(at, 'missing "answer"');
  if (!ANSWER_TYPES.includes(q.type) && q.answer !== undefined && !isChoice) err(at, `${q.type} doesn't use "answer"`);
  if (ids.has(q.id)) err(at, 'duplicate id'); ids.add(q.id);
  if (!TYPES.includes(q.type)) err(at, `unknown type "${q.type}"`);
  if (![1, 2, 3].includes(q.difficulty)) err(at, 'difficulty must be 1, 2 or 3');
  if (typeof q.placement !== 'boolean') err(at, 'placement must be true or false');
  for (const k of ['code', 'context']) {
    const c = q[k];
    if (c && (!c.lang || !c.source)) err(at, `${k} needs lang and source`);
    if (c && Object.keys(c).some((x) => !['lang', 'label', 'source'].includes(x))) err(at, `${k} has unknown fields (only lang, label, source)`);
  }
  if (q.context && !q.code && !(q.type === 'visual' && q.image)) err(at, 'context is shown next to code, so code is required');
  if (q.lint !== undefined && typeof q.lint !== 'boolean') err(at, 'lint must be true or false');
  if (q.lint !== false) for (const k of ['code', 'context']) if (q[k]?.source) lintCode(at, k, q[k]);
  delete q.lint;
  if (q.reference && !fs.existsSync(path.join(READING, q.reference))) err(at, `reference not found: ${q.reference}`);

  if (isChoice) {
    // Each option says whether it is correct; the app shuffles them freely.
    // Options are text, except pick-the-fix (code) and visual (image or code).
    const opts = Array.isArray(q.options) ? q.options : [];
    if (opts.length < 2) err(at, 'needs at least 2 options');
    if (q.answer !== undefined) err(at, 'choice questions mark answers with "correct" on each option, not an "answer" field');
    let kind = 'text';
    if (q.type === 'pick-the-fix') kind = 'code';
    if (q.type === 'visual') kind = q.image ? 'code' : 'image';
    const allowed = { text: ['text'], code: ['code'], image: ['image', 'render'] }[kind];
    for (const o of opts) {
      const name = o.text || o.image || (o.code || '').split('\n')[0];
      if (typeof o[kind] !== 'string' || !o[kind].trim()) err(at, `every option needs "${kind}"`);
      if (typeof o.correct !== 'boolean') err(at, `option "${name}" needs "correct: true" or "correct: false"`);
      if (Object.keys(o).some((k) => ![...allowed, 'correct'].includes(k))) err(at, `option "${name}" has unknown fields (only ${allowed.join(', ')} and correct)`);
      if (kind === 'image' && !o.correct && !o.render) err(at, `option "${name}": a wrong picture needs "render" (the SCSS it is drawn from)`);
      if (kind === 'image' && o.correct && o.render) err(at, `option "${name}": the right picture is drawn from "code", so it has no "render"`);
      if (kind === 'image' && !fs.existsSync(path.join(DIR, o.image))) err(at, `image not found: ${o.image} (run render.mjs first)`);
      const optLang = q.optionLang || q.code?.lang;
      if (kind === 'code' && q.lint !== false && o.code) lintCode(at, 'option', { lang: optLang, source: o.code });
      if (kind === 'image' && q.lint !== false && o.render) lintCode(at, 'render', { lang: 'scss', source: o.render });
    }
    const texts = opts.map((o) => o[kind]);
    if (new Set(texts).size !== texts.length) err(at, 'two options are the same');
    const nCorrect = opts.filter((o) => o.correct === true).length;
    if (q.type === 'multiple' && nCorrect < 1) err(at, 'multiple: at least one option must be correct');
    if (q.type !== 'multiple' && nCorrect !== 1) err(at, `${q.type}: exactly one option must be correct (found ${nCorrect})`);
    if (['predict', 'fill', 'pick-the-fix'].includes(q.type) && !q.code) err(at, `${q.type} needs code`);
    if (q.type === 'fill' && q.code && q.code.source.split(BLANK).length !== 2) err(at, `fill: code must contain the blank ${BLANK} exactly once`);
    if (q.type === 'visual') {
      if (q.context?.lang !== 'html') err(at, 'visual needs the HTML as context');
      if (q.image && !fs.existsSync(path.join(DIR, q.image))) err(at, `image not found: ${q.image} (run render.mjs first)`);
      if (q.image && !q.optionLang) err(at, 'visual with an image needs "optionLang" for the code options');
      if (!q.image && q.code?.lang !== 'scss') err(at, 'visual without an image needs the SCSS as code');
    }
  }
  if (q.type === 'spot-the-bug' || q.type === 'find-all-bugs') {
    if (!q.code) err(at, `${q.type} needs code`);
    const lines = q.code ? q.code.source.replace(/\n$/, '').split('\n').length : 0;
    const answers = q.type === 'spot-the-bug' ? [q.answer] : q.answer;
    if (q.type === 'find-all-bugs' && (!Array.isArray(answers) || answers.length < 2)) err(at, 'find-all-bugs: answer must be a list of at least 2 line numbers');
    for (const a of Array.isArray(answers) ? answers : []) if (!Number.isInteger(a) || a < 1 || a > lines) err(at, `answer must be a line number 1-${lines} (found ${a})`);
    if (Array.isArray(answers) && new Set(answers).size !== answers.length) err(at, 'the same line is listed twice');
    if (q.type === 'find-all-bugs' && Array.isArray(q.answer)) q.answer.sort((a, b) => a - b);
  }
  if (q.type === 'order') {
    const items = Array.isArray(q.items) ? q.items : [];
    if (items.length < 3) err(at, 'order: items must list at least 3 steps, in the right order');
    if (items.some((x) => typeof x !== 'string' || !x.trim())) err(at, 'order: every item must be text');
    if (new Set(items).size !== items.length) err(at, 'order: two items are the same');
    if (q.options) err(at, 'order uses "items", not "options"');
  }
  if (q.type === 'match') {
    const pairs = Array.isArray(q.pairs) ? q.pairs : [];
    if (pairs.length < 3) err(at, 'match: needs at least 3 pairs');
    for (const p of pairs) if (typeof p.left !== 'string' || typeof p.right !== 'string' || Object.keys(p).length !== 2) err(at, 'match: every pair is { left, right }');
    for (const side of ['left', 'right']) if (new Set(pairs.map((p) => p[side])).size !== pairs.length) err(at, `match: two pairs have the same ${side}`);
    if (q.options) err(at, 'match uses "pairs", not "options"');
  }
  if (q.type === 'text') {
    if (!q.answer || !Array.isArray(q.answer.accept) || !q.answer.accept.length) err(at, 'text: answer.accept must be a non-empty list');
  }
}

const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.yaml')).sort();
const ids = new Set();
const index = [];
const placement = [];
for (const f of files) {
  const data = yaml.load(fs.readFileSync(path.join(SRC, f), 'utf8'));
  for (const k of ['module', 'title', 'questions']) if (!data[k]) err(f, `missing "${k}"`);
  (data.questions || []).forEach((q) => validateQuestion(q, f, ids));
  const qs = data.questions || [];
  // Pre-normalize accepted text answers so the component can compare directly.
  for (const q of qs) if (q.type === 'text') q.answer.normalized = q.answer.accept.map(normalizeTextAnswer);
  // "render" is only the source the pictures are drawn from (render.mjs), not shown to trainees.
  for (const q of qs) if (q.type === 'visual') for (const o of q.options || []) delete o.render;
  const name = f.replace(/\.yaml$/, '');
  fs.writeFileSync(path.join(DIR, `${name}.json`), JSON.stringify(data, null, 2) + '\n');
  const p = qs.filter((q) => q.placement);
  if (p.length) placement.push({ module: data.module, title: data.title, questions: p });
  index.push({ module: data.module, title: data.title, file: `${name}.json`, questions: qs.length, placement: p.length,
    byType: qs.reduce((m, q) => ({ ...m, [q.type]: (m[q.type] || 0) + 1 }), {}) });
}
if (placement.length) fs.writeFileSync(path.join(DIR, 'placement.json'), JSON.stringify({
  title: 'HTML & SCSS placement quiz',
  scoring: { skim: 0.8, requiredOnly: 0.5, note: '>= 80% per module: module becomes skim. 50-79%: required pages only. < 50%: full module.' },
  modules: placement,
}, null, 2) + '\n');
fs.writeFileSync(path.join(DIR, 'index.json'), JSON.stringify(index, null, 2) + '\n');

for (const m of index) console.log(`${m.file.padEnd(42)} ${String(m.questions).padStart(3)} questions, ${m.placement} placement  ${JSON.stringify(m.byType)}`);
console.log(`total: ${index.reduce((s, m) => s + m.questions, 0)} questions, ${index.reduce((s, m) => s + m.placement, 0)} in placement quiz`);
if (errors.length) { console.error(`\n${errors.length} problem(s):\n- ` + errors.join('\n- ')); process.exit(1); }
console.log('validation: OK');
