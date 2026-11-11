// Writes the answer key of a quiz bank as a Word file: every question, the answers marked, and the explanation.
// Usage: node answers.mjs <quizzes-dir> [output.docx]   (default: <quizzes-dir>/answers.docx)
import fs from 'node:fs';
import path from 'node:path';
import {
  AlignmentType, BorderStyle, Document, HeadingLevel, ImageRun, LevelFormat, Packer, PageBreak,
  Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType, Footer, PageNumber,
} from 'docx';

const [dir, outArg] = process.argv.slice(2);
if (!dir) { console.error('usage: node answers.mjs <quizzes-dir> [output.docx]'); process.exit(1); }
const out = outArg || path.join(dir, 'answers.docx');
const files = fs.readdirSync(dir).filter((f) => /^0.*\.json$/.test(f)).sort();
const mods = files.map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
const total = mods.reduce((s, m) => s + m.questions.length, 0);
const hasPlacement = mods.some((m) => m.questions.some((q) => q.placement));
const bank = { 'html&css': 'HTML & SCSS', angular: 'Angular', tavor: 'Tavor' }[path.basename(path.dirname(path.resolve(dir)))]
  || path.basename(path.dirname(path.resolve(dir)));

const FONT = 'Arial';
const MONO = 'Consolas';
const GREEN = '1a7f37';
const RED = 'b42318';
const GREY = '666666';
const CODE_BG = 'f3f4f6';
const BUG_BG = 'fde2e1';
const NOTE_BG = 'eef4ff';
const PAGE_W = 11906;
const MARGIN = 1134;
const TEXT_W = PAGE_W - 2 * MARGIN;

const inline = (s, base = {}) => {
  const runs = [];
  for (const part of String(s).split(/(`[^`]+`|\*\*[^*]+\*\*)/)) {
    if (!part) continue;
    if (part.startsWith('`') && part.endsWith('`')) runs.push(new TextRun({ ...base, text: part.slice(1, -1), font: MONO, shading: { type: ShadingType.CLEAR, fill: CODE_BG, color: 'auto' } }));
    else if (part.startsWith('**') && part.endsWith('**')) runs.push(new TextRun({ ...base, text: part.slice(2, -2), bold: true }));
    else runs.push(new TextRun({ ...base, text: part }));
  }
  return runs;
};
const paras = (s, opts = {}) => String(s).trim().split(/\n\s*\n/).map((p) => new Paragraph({ ...opts, children: inline(p.replace(/\n/g, ' ')) }));

const codeBlock = (c, marked = [], { numbered = marked.length > 0 } = {}) => {
  const out = [];
  if (c.label) out.push(new Paragraph({ spacing: { before: 120, after: 40 }, keepNext: true, children: [new TextRun({ text: c.label, italics: true, color: GREY, size: 18 })] }));
  const lines = c.source.replace(/\n$/, '').split('\n');
  lines.forEach((l, i) => {
    const bug = marked.includes(i + 1);
    const children = [];
    if (numbered) children.push(new TextRun({ text: `${bug ? '►' : ' '}${String(i + 1).padStart(3)}  `, font: MONO, size: 17, color: bug ? RED : GREY, bold: bug }));
    children.push(new TextRun({ text: l || ' ', font: MONO, size: 17, bold: bug, color: bug ? RED : undefined }));
    out.push(new Paragraph({
      spacing: { before: 0, after: 0, line: 240 },
      keepLines: true,
      keepNext: i < lines.length - 1 && lines.length <= 30,
      shading: { type: ShadingType.CLEAR, fill: bug ? BUG_BG : CODE_BG, color: 'auto' },
      indent: { left: 113, right: 113 },
      children,
    }));
  });
  out.push(new Paragraph({ spacing: { before: 0, after: 80 }, children: [] }));
  return out;
};

const pngSize = (file) => {
  const b = fs.readFileSync(file);
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20), data: b };
};
const image = (rel, maxW = 300) => {
  const { w, h, data } = pngSize(path.resolve(dir, rel));
  const dw = Math.min(maxW, w / 2);
  return new ImageRun({ type: 'png', data, transformation: { width: Math.round(dw), height: Math.round((h * dw) / w) } });
};

const mark = (ok) => new TextRun({ text: ok ? '✓ ' : '✗ ', bold: true, color: ok ? GREEN : RED });

const cellBorder = { style: BorderStyle.SINGLE, size: 4, color: 'cccccc' };
const borders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };
const table = (rows, widths, header) => new Table({
  width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
  columnWidths: widths,
  rows: [header, ...rows].filter(Boolean).map((cells, r) => new TableRow({
    tableHeader: header && r === 0,
    cantSplit: true,
    children: cells.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      borders,
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      shading: header && r === 0 ? { type: ShadingType.CLEAR, fill: 'e5e7eb', color: 'auto' } : undefined,
      children: [new Paragraph({ children: inline(c, header && r === 0 ? { bold: true } : {}) })],
    })),
  })),
});

const note = (label, text, fill = NOTE_BG) => String(text).trim().split(/\n\s*\n/).map((p, i) => new Paragraph({
  spacing: { before: i ? 0 : 120, after: 0 },
  keepLines: true,
  shading: { type: ShadingType.CLEAR, fill, color: 'auto' },
  border: { left: { style: BorderStyle.SINGLE, size: 18, color: '4a72c4', space: 6 } },
  indent: { left: 170, right: 113 },
  children: [...(i === 0 ? [new TextRun({ text: `${label} `, bold: true })] : []), ...inline(p.replace(/\n/g, ' '))],
}));

const typeName = {
  single: 'Single choice', multiple: 'Multiple choice', predict: 'Predict the output', fill: 'Fill the gap',
  'pick-the-fix': 'Pick the fix', visual: 'Visual', 'spot-the-bug': 'Spot the bug', 'find-all-bugs': 'Find all bugs',
  order: 'Order', match: 'Match', text: 'Short answer',
};

const body = [];
body.push(new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun(`${bank} quizzes: answer key`)] }));
body.push(new Paragraph({ children: [new TextRun({ text: 'For trainers only. ', bold: true, color: RED }), new TextRun("Don't share this file with trainees or publish it to Docusaurus.")] }));
body.push(...paras(`All ${total} questions with the right answers marked ✓ and the explanation trainees see after answering. The app shuffles the options, so the order here doesn't matter.${hasPlacement ? ' ★ marks questions that are also in the placement quiz: during placement, trainees see only their score, so don\'t go over these answers before the placement quiz.' : ''} Difficulty: 1 easy, 2 medium, 3 hard.`));
body.push(...paras('In spot-the-bug and find-all-bugs questions the code has line numbers, and the bug lines are red and marked ►. Order questions list the steps in the right order. Each row of a match table is a correct pair.'));
body.push(...paras('This file is generated from the quiz YAML by `_tools/quiz-build/answers.mjs`. Don\'t edit it by hand: change the YAML, then run the script again.'));
body.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('Quizzes in this file')] }));
body.push(table(mods.map((m) => [m.title, String(m.questions.length)]), [TEXT_W - 1800, 1800], ['Quiz', 'Questions']));

for (const m of mods) {
  body.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun(`${m.title} (${m.questions.length} questions)`)] }));
  for (const q of m.questions) {
    body.push(new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun(`${q.id}${q.placement ? ' ★' : ''}`), new TextRun({ text: `   ${typeName[q.type] || q.type} · ${q.topic} · difficulty ${q.difficulty}`, bold: false, size: 18, color: GREY })],
    }));
    body.push(...paras(q.prompt, { keepNext: true }));
    if (q.context) body.push(...codeBlock(q.context));
    if (q.image) body.push(new Paragraph({ children: [image(q.image)] }));
    const bugs = q.type === 'spot-the-bug' ? [q.answer] : q.type === 'find-all-bugs' ? q.answer : [];
    if (q.code) body.push(...codeBlock(q.code, bugs, { numbered: bugs.length > 0 }));

    if (q.options) {
      const lang = q.optionLang || q.code?.lang || '';
      for (const x of q.options) {
        if (x.image) {
          body.push(new Paragraph({ spacing: { before: 120 }, keepNext: true, children: [mark(x.correct), new TextRun({ text: x.correct ? 'Right picture' : 'Wrong picture', bold: x.correct, color: x.correct ? GREEN : GREY })] }));
          body.push(new Paragraph({ indent: { left: 360 }, children: [image(x.image, 220)] }));
        } else if (x.code) {
          body.push(new Paragraph({ spacing: { before: 120, after: 40 }, keepNext: true, children: [mark(x.correct), new TextRun({ text: x.correct ? 'The fix' : 'Wrong', bold: x.correct, color: x.correct ? GREEN : GREY })] }));
          body.push(...codeBlock({ lang, source: x.code }));
        } else {
          body.push(new Paragraph({
            numbering: { reference: 'opts', level: 0 },
            children: [mark(x.correct), ...inline(x.text, x.correct ? { bold: true } : { color: '333333' })],
          }));
        }
      }
    }
    if (q.type === 'spot-the-bug') body.push(new Paragraph({ spacing: { before: 60 }, keepNext: true, children: [mark(true), new TextRun({ text: `Line ${q.answer}`, bold: true, color: GREEN })] }));
    if (q.type === 'find-all-bugs') body.push(new Paragraph({ spacing: { before: 60 }, keepNext: true, children: [mark(true), new TextRun({ text: `Lines ${q.answer.join(', ')}`, bold: true, color: GREEN })] }));
    if (q.type === 'text') body.push(new Paragraph({ spacing: { before: 60 }, keepNext: true, children: [mark(true), new TextRun({ text: 'Accepted: ', bold: true, color: GREEN }), ...q.answer.accept.flatMap((a, i) => [...(i ? [new TextRun('  ·  ')] : []), ...inline('`' + a + '`')])] }));
    if (q.type === 'order') q.items.forEach((x, i) => body.push(new Paragraph({ numbering: { reference: `order-${q.id}`, level: 0 }, children: inline(x) })));
    if (q.type === 'match') body.push(table(q.pairs.map((p) => [p.left, p.right]), [Math.round(TEXT_W * 0.42), TEXT_W - Math.round(TEXT_W * 0.42)]));

    body.push(...note('Explanation:', q.explanation));
    if (q.reference) body.push(...note('Read:', `\`${q.reference}\``));
    body.push(new Paragraph({ spacing: { before: 0, after: 120 }, children: [] }));
  }
}

const heading = (size, before, after, color) => ({ run: { font: FONT, size, bold: true, color }, paragraph: { spacing: { before, after }, keepNext: true } });
const doc = new Document({
  creator: 'quiz-build',
  title: `${bank} quizzes: answer key`,
  styles: {
    default: {
      document: { run: { font: FONT, size: 20 }, paragraph: { spacing: { after: 80, line: 264 } } },
      title: heading(40, 0, 200, '1f2937'),
      heading1: heading(30, 0, 160, '1f3a8a'),
      heading2: heading(22, 280, 80, '1f2937'),
    },
  },
  numbering: {
    config: [
      { reference: 'opts', levels: [{ level: 0, format: LevelFormat.NONE, text: '', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 0 } } } }] },
      ...mods.flatMap((m) => m.questions.filter((q) => q.type === 'order').map((q) => ({
        reference: `order-${q.id}`,
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
      }))),
    ],
  },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: 16838 }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${bank} answer key · for trainers only · page `, size: 16, color: GREY }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GREY })] })] }),
    },
    children: body,
  }],
});

fs.writeFileSync(out, await Packer.toBuffer(doc));
console.log(`written ${total} questions to ${out}`);
