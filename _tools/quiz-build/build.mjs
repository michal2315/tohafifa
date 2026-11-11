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

const TYPES = ['single', 'multiple', 'predict', 'spot-the-bug', 'text'];
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
  [/<(html|body|head|h[1-6]|p|article|section|nav|header|footer|main|aside|style)\b/, 'uses a tag we do not use'],
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
  const isChoice = ['single', 'multiple', 'predict'].includes(q.type);
  for (const k of ['id', 'type', 'topic', 'difficulty', 'prompt', 'explanation']) if (q[k] === undefined) err(at, `missing "${k}"`);
  if (!isChoice && q.answer === undefined) err(at, 'missing "answer"');
  if (ids.has(q.id)) err(at, 'duplicate id'); ids.add(q.id);
  if (!TYPES.includes(q.type)) err(at, `unknown type "${q.type}"`);
  if (![1, 2, 3].includes(q.difficulty)) err(at, 'difficulty must be 1, 2 or 3');
  if (typeof q.placement !== 'boolean') err(at, 'placement must be true or false');
  for (const k of ['code', 'context']) {
    const c = q[k];
    if (c && (!c.lang || !c.source)) err(at, `${k} needs lang and source`);
    if (c && Object.keys(c).some((x) => !['lang', 'label', 'source'].includes(x))) err(at, `${k} has unknown fields (only lang, label, source)`);
  }
  if (q.context && !q.code) err(at, 'context is shown next to code, so code is required');
  if (q.lint !== undefined && typeof q.lint !== 'boolean') err(at, 'lint must be true or false');
  if (q.lint !== false) for (const k of ['code', 'context']) if (q[k]?.source) lintCode(at, k, q[k]);
  delete q.lint;
  if (q.reference && !fs.existsSync(path.join(READING, q.reference))) err(at, `reference not found: ${q.reference}`);

  if (isChoice) {
    // Each option says whether it is correct; the app shuffles them freely.
    const opts = Array.isArray(q.options) ? q.options : [];
    if (opts.length < 2) err(at, 'needs at least 2 options');
    if (q.answer !== undefined) err(at, 'choice questions mark answers with "correct" on each option, not an "answer" field');
    for (const o of opts) {
      if (typeof o.text !== 'string' || !o.text.trim()) err(at, 'every option needs "text"');
      if (typeof o.correct !== 'boolean') err(at, `option "${o.text}" needs "correct: true" or "correct: false"`);
      if (Object.keys(o).some((k) => !['text', 'correct'].includes(k))) err(at, `option "${o.text}" has unknown fields (only text and correct)`);
    }
    const texts = opts.map((o) => o.text);
    if (new Set(texts).size !== texts.length) err(at, 'two options have the same text');
    const nCorrect = opts.filter((o) => o.correct === true).length;
    if (q.type === 'multiple' && nCorrect < 1) err(at, 'multiple: at least one option must be correct');
    if (q.type !== 'multiple' && nCorrect !== 1) err(at, `${q.type}: exactly one option must be correct (found ${nCorrect})`);
    if (q.type === 'predict' && !q.code) err(at, 'predict needs code');
  }
  if (q.type === 'spot-the-bug') {
    if (!q.code) err(at, 'spot-the-bug needs code');
    const lines = q.code ? q.code.source.replace(/\n$/, '').split('\n').length : 0;
    if (!Number.isInteger(q.answer) || q.answer < 1 || q.answer > lines) err(at, `answer must be a line number 1-${lines}`);
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
