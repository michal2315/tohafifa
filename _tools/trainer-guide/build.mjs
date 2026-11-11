// Builds the trainer guides (Word) from the reading pages, videos.md, the quiz banks and stages.mjs.
// Usage: node build.mjs [html|angular]   (default: both)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  AlignmentType, BorderStyle, Document, ExternalHyperlink, Footer, HeadingLevel, LevelFormat, Packer,
  PageNumber, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType,
} from 'docx';
import { stages } from './stages.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const WPM = 150;
const CODE_LPM = 30;
const SKIM = 0.4;

const FONT = 'Arial';
const MONO = 'Consolas';
const GREY = '666666';
const CODE_BG = 'f3f4f6';
const HEAD_BG = 'e5e7eb';
const PAGE_W = 11906;
const MARGIN = 1134;
const TEXT_W = PAGE_W - 2 * MARGIN;

const round5 = (m) => Math.max(5, Math.ceil(m / 5) * 5);
const fmt = (m) => (m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}`);

const frontTitle = (t) => (t.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] || (t.match(/^# (.*)$/m) || [])[1] || '';
const GENERIC = /^(check your understanding|try it|syntax|formal (definition|syntax)|description|examples?|summary|overview|introduction|what's next|see also|resources|read more|next steps?|watch|specifications|browser compatibility)\b/i;
const H3_GENERIC = /^(why use|related recipes|additional resources|outside examples|result|values|parameters|return value|.*heads up|example d)/i;
function scanPage(file) {
  const t = fs.readFileSync(file, 'utf8');
  const level = /^\*\*Required reading/m.test(t) ? 'Required' : /^\*\*Skim/m.test(t) ? 'Skim' : /^\*\*Optional/m.test(t) ? 'Optional' : 'Required';
  const note = ((t.match(/Trainer note:\*\*\s*(.*)/) || [])[1] || '').trim();
  const body = t.replace(/^---[\s\S]*?---/, '').replace(/:::info\[Source\][\s\S]*?:::/, '');
  const code = (body.match(/```[\s\S]*?```/g) || []).join('\n').split('\n').length;
  const prose = body.replace(/```[\s\S]*?```/g, '').replace(/<[^>]+>/g, '').replace(/\(http[^)]*\)/g, '');
  const words = (prose.match(/[A-Za-z][\w'-]*/g) || []).length;
  const h2 = (body.match(/^## (.*)$/gm) || []).map((h) => h.slice(3).replace(/\\/g, '').replace(/\.$/, '').trim()).filter((h) => !GENERIC.test(h));
  const full = words / WPM + code / CODE_LPM;
  return { title: frontTitle(t), level, note, h2, min: round5(level === 'Skim' ? full * SKIM : full) };
}

function scanStage(st) {
  const readingDir = path.join(ROOT, st.dir, 'reading');
  const modules = {};
  for (const mod of fs.readdirSync(readingDir).filter((d) => /^\d\d-/.test(d)).sort()) {
    const key = mod.slice(0, 2);
    modules[key] = fs.readdirSync(path.join(readingDir, mod)).filter((f) => f.endsWith('.md')).sort().map((f) => {
      const rel = `${mod}/${f}`;
      const p = scanPage(path.join(readingDir, mod, f));
      if (st.noTime?.includes(rel)) p.min = 0;
      const covers = st.covers?.[rel] || (p.h2.length ? p.h2.slice(0, 7).join(' · ') + (p.h2.length > 7 ? ' …' : '') : '');
      if (!covers) throw new Error(`no headings to describe ${rel}: add it to covers in stages.mjs`);
      return { ...p, rel, file: f, n: Number(f.slice(0, 2)), covers };
    });
  }
  const guideDir = path.join(ROOT, st.dir, 'guide');
  const guide = fs.existsSync(guideDir) ? fs.readdirSync(guideDir).filter((f) => f.endsWith('.md')).sort().map((f) => {
    const p = scanPage(path.join(guideDir, f));
    return { ...p, file: f, key: f.slice(0, 2), covers: p.h2.join(' · ') };
  }) : [];
  return { modules, guide };
}

function parseVideos(st) {
  const t = fs.readFileSync(path.join(ROOT, st.dir, 'videos.md'), 'utf8');
  const videos = [];
  for (const line of t.split(/\r?\n/)) {
    const m = line.match(/^\|\s*([^|]+?)\s*\|\s*\[([^\]]+)\]\(([^)]+)\),?\s*([^|]*?)\s*\|\s*(\d+)\s*min\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|$/);
    if (!m) continue;
    const [, module, title, url, author, len, covers, note] = m;
    const num = module.match(/^(\d+)\./);
    const key = num ? num[1] : st.videoModule?.[module] || module;
    videos.push({ module, key, title, url, author, min: Number(len), covers, note });
  }
  const optional = (t.split(/^## Optional.*$/m)[1] || '').trim().split(/\r?\n\s*\r?\n/).filter(Boolean);
  return { videos, optional };
}

const QUIZ_MIN = { single: 1, multiple: 1, predict: 1, fill: 1, text: 1, 'pick-the-fix': 1.5, 'spot-the-bug': 1.5, visual: 2, 'find-all-bugs': 2, order: 2, match: 2 };
function quizzes(st) {
  const dir = path.join(ROOT, st.dir, 'quizzes');
  const index = JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8'));
  const out = {};
  for (const q of index) {
    const raw = Object.entries(q.byType).reduce((s, [t, n]) => s + (QUIZ_MIN[t] || 1) * n, 0);
    const id = q.file.replace(/\.json$/, '');
    out[id] = { id, title: q.title, questions: q.questions, min: round5(raw + 5) };
  }
  if (fs.existsSync(path.join(dir, 'placement.json'))) {
    const p = JSON.parse(fs.readFileSync(path.join(dir, 'placement.json'), 'utf8'));
    const qs = p.modules.flatMap((m) => m.questions);
    const raw = qs.reduce((s, q) => s + (QUIZ_MIN[q.type] || 1), 0);
    out.placement = { id: 'placement', title: 'Placement quiz (day 1)', questions: qs.length, min: round5(raw) };
  }
  return out;
}

// ---------- docx helpers ----------
const inline = (s, base = {}) => {
  const runs = [];
  for (const part of String(s).split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/)) {
    if (!part) continue;
    if (/^`.*`$/.test(part)) runs.push(new TextRun({ ...base, text: part.slice(1, -1), font: MONO, shading: { type: ShadingType.CLEAR, fill: CODE_BG, color: 'auto' } }));
    else if (/^\*\*.*\*\*$/.test(part)) runs.push(new TextRun({ ...base, text: part.slice(2, -2), bold: true }));
    else if (/^\[.*\]\(.*\)$/.test(part)) {
      const [, text, url] = part.match(/^\[(.*)\]\((.*)\)$/);
      if (/^https?:/.test(url)) runs.push(new ExternalHyperlink({ link: url, children: [new TextRun({ ...base, text, color: '1155cc', underline: {} })] }));
      else runs.push(new TextRun({ ...base, text }));
    } else runs.push(new TextRun({ ...base, text: part }));
  }
  return runs;
};
const P = (s, opts = {}, base = {}) => new Paragraph({ ...opts, children: inline(s, base) });
const H = (level, text, opts = {}) => new Paragraph({ heading: level, ...opts, children: inline(text) });
const border = { style: BorderStyle.SINGLE, size: 4, color: 'cccccc' };
const borders = { top: border, bottom: border, left: border, right: border };
const cell = (content, width, { header = false, fill } = {}) => new TableCell({
  width: { size: width, type: WidthType.DXA },
  borders,
  margins: { top: 50, bottom: 50, left: 90, right: 90 },
  shading: header ? { type: ShadingType.CLEAR, fill: HEAD_BG, color: 'auto' } : fill ? { type: ShadingType.CLEAR, fill, color: 'auto' } : undefined,
  children: (Array.isArray(content) ? content : [content]).map((c) => (c instanceof Paragraph ? c : P(c, { spacing: { after: 0 } }, header ? { bold: true, size: 18 } : { size: 18 }))),
});
const table = (header, rows, widths, { totalRow } = {}) => new Table({
  width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
  columnWidths: widths,
  rows: [
    new TableRow({ tableHeader: true, cantSplit: true, children: header.map((h, i) => cell(h, widths[i], { header: true })) }),
    ...rows.map((r, ri) => new TableRow({ cantSplit: true, children: r.map((c, i) => cell(c, widths[i], { fill: totalRow && ri === rows.length - 1 ? 'f3f4f6' : undefined })) })),
  ],
});
const small = (s, extra = {}) => P(s, { spacing: { after: 0 } }, { size: 16, color: GREY, ...extra });
const bullet = (s) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, spacing: { after: 40 }, children: inline(s) });

// ---------- build one guide ----------
async function buildGuide(key) {
  const st = stages[key];
  const { modules, guide } = scanStage(st);
  const { videos, optional } = parseVideos(st);
  const quiz = quizzes(st);
  const vids = (k, item = {}) => videos.filter((v) => v.key === k && (!item.match || item.match.test(v.module)) && (!item.not || !item.not.test(v.module)));
  const req = (k) => (modules[k] || []).filter((p) => p.level === 'Required');
  const skim = (k) => (modules[k] || []).filter((p) => p.level !== 'Required');
  const sum = (a) => a.reduce((s, p) => s + p.min, 0);

  const usedQuizDay = {};
  const usedVideoDay = {};
  const describe = (it) => {
    if (it.reading) {
      const all = modules[it.reading] || [];
      const inRange = (p) => (it.from == null || p.n >= it.from) && (it.to == null || p.n <= it.to);
      const pages = all.filter((p) => p.level === 'Required' && inRange(p));
      const sk = all.filter((p) => p.level !== 'Required' && inRange(p));
      const range = it.from != null ? `, pages ${it.from}–${it.to}` : '';
      return {
        what: [`**Read** module ${st.modules[it.reading].name}${range}: ${pages.length} required page${pages.length === 1 ? '' : 's'}`, ...(sk.length ? [`+ ${sk.length} skim page${sk.length === 1 ? '' : 's'} (${fmt(sum(sk))}), ${quiz.placement ? "only if the placement quiz says so or there's time" : "for reference, or if there's time"}`] : [])],
        min: sum(pages),
      };
    }
    if (it.guide) {
      const g = guide.find((x) => x.key === it.guide);
      return { what: [`**Read** the guide: \`guide/${g.file}\`: ${g.title}`], min: g.min };
    }
    if (it.videos) {
      const vs = vids(it.videos, it);
      vs.forEach((v) => (usedVideoDay[v.url] ??= it.day));
      return { what: [`**Watch** ${vs.map((v) => v.title).join(' · ')}`], min: sum(vs) };
    }
    if (it.game) {
      const g = st.games[it.game];
      return { what: [`**Play** ${g.name}: ${g.levels}`], min: g.min };
    }
    if (it.quiz) {
      const q = quiz[it.quiz];
      if (!q) throw new Error(`no quiz ${it.quiz}`);
      usedQuizDay[it.quiz] ??= it.day;
      return { what: [`**Quiz** \`${q.id}\`: ${q.questions} questions${it.quiz === 'placement' ? ', score only: no answers or explanations' : ''}`], min: q.min };
    }
    if (it.task) return { what: [it.task], min: it.min };
    if (it.build) return { what: [`**Project:** ${it.build}`], min: null };
    throw new Error('unknown item ' + JSON.stringify(it));
  };

  const body = [];
  body.push(new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun(`${st.name} stage: trainer guide`)] }));
  st.intro.forEach((p) => body.push(P(p)));
  body.push(H(HeadingLevel.HEADING_2, 'How the times are estimated'));
  body.push(P(`Reading times are counted from each page: ${WPM} words a minute for text and ${CODE_LPM} lines a minute for code, rounded up to 5 minutes. A skim page counts as ${Math.round(SKIM * 100)}% of a full read. Videos use their real length. Quizzes allow about a minute a question (two for visual, match, order and find-all-bugs) and 5 minutes to read the explanations. Games are a typical first try. Slow readers need more, and a trainee who skims a module after the placement quiz needs less.`));
  body.push(P('This guide is generated from the repo by `_tools/trainer-guide`. When the reading, videos or quizzes change, run it again instead of editing this file.'));

  // ----- at a glance -----
  body.push(H(HeadingLevel.HEADING_1, 'The stage at a glance', { pageBreakBefore: true }));
  const glanceRows = [];
  let tReq = 0, tAll = 0, tVid = 0, tQ = 0, tPages = 0, tSkim = 0;
  for (const [k, m] of Object.entries(st.modules)) {
    const r = req(k), s = skim(k), v = vids(String(Number(k)));
    const qid = st.quizFor[k];
    const q = qid && quiz[qid];
    tReq += sum(r); tAll += sum(r) + sum(s); tVid += sum(v); tQ += q ? q.min : 0; tPages += r.length; tSkim += s.length;
    glanceRows.push([m.name, r.length || s.length ? `${r.length} + ${s.length}` : '–', r.length || s.length ? `${fmt(sum(r))} / ${fmt(sum(r) + sum(s))}` : '–', v.length ? `${v.length} · ${fmt(sum(v))}` : '–', q ? `${q.questions} q · ${fmt(q.min)}` : '–']);
  }
  glanceRows.push(['**Total**', `**${tPages} + ${tSkim}**`, `**${fmt(tReq)} / ${fmt(tAll)}**`, `**${fmt(tVid)}**`, `**${fmt(tQ)}**`]);
  body.push(table(['Module', 'Pages: required + skim', 'Reading: required / all', 'Videos', 'Quiz'], glanceRows, [3100, 1500, 2038, 1500, 1500], { totalRow: true }));
  const gamesMin = Object.values(st.games).reduce((s, g) => s + g.min, 0);
  const extra = [];
  if (guide.length) extra.push(`guide pages: ${fmt(sum(guide))}`);
  extra.push(`games: ${fmt(gamesMin)}`);
  const otherVids = videos.filter((v) => !st.modules[v.key.padStart(2, '0')]);
  if (otherVids.length) extra.push(`other videos (${otherVids.map((v) => v.module).filter((x, i, a) => a.indexOf(x) === i).join(', ')}): ${fmt(sum(otherVids))}`);
  const otherQuiz = Object.values(quiz).filter((q) => !Object.values(st.quizFor).includes(q.id));
  if (otherQuiz.length) extra.push(`other quizzes (${otherQuiz.map((q) => '`' + q.id + '`').join(', ')}): ${fmt(sum(otherQuiz))}`);
  body.push(P(`Not in the table: ${extra.join('; ')}.`, { spacing: { before: 120 } }));

  // ----- day by day -----
  body.push(H(HeadingLevel.HEADING_1, 'Day by day', { pageBreakBefore: true }));
  body.push(P(`${st.days} days. Each day lists the learning items and their estimated time. "Project" rows are open-ended: they fill the rest of the day.`));
  for (const d of st.schedule) {
    if (d.week) { body.push(H(HeadingLevel.HEADING_2, d.week)); continue; }
    const rows = d.items.map((it) => describe({ ...it, day: d.day }));
    const raw = rows.reduce((s, r) => s + (r.min || 0), 0);
    const total = raw ? round5(raw) : 0;
    body.push(H(HeadingLevel.HEADING_3, `Day ${d.day}: ${d.title}${total ? `   ·   about ${fmt(total)} of learning` : ''}`));
    body.push(table(['What', 'Time'], rows.map((r) => [r.what.map((w, i) => (i ? small(w) : P(w, { spacing: { after: 0 } }, { size: 18 }))), r.min == null ? 'rest of the day' : fmt(r.min)]), [TEXT_W - 1500, 1500]));
  }

  // ----- modules -----
  body.push(H(HeadingLevel.HEADING_1, 'Reading modules in detail', { pageBreakBefore: true }));
  body.push(P('Every page with its level, reading time and what it covers. Trainer notes from the page are in italics. Required pages are for everyone. Skim pages are for reference' + (quiz.placement ? ', or for trainees the placement quiz sends to the full module.' : '.')));
  for (const [k, m] of Object.entries(st.modules)) {
    const pages = modules[k] || [];
    const r = req(k), s = skim(k), v = vids(String(Number(k)));
    const qid = st.quizFor[k];
    const q = qid && quiz[qid];
    body.push(H(HeadingLevel.HEADING_2, m.name));
    const facts = [];
    if (pages.length) facts.push(`${r.length} required page${r.length === 1 ? '' : 's'} (${fmt(sum(r))})`, `${s.length} skim (${fmt(sum(s))})`);
    if (v.length) facts.push(`${v.length} video${v.length === 1 ? '' : 's'} (${fmt(sum(v))})`);
    if (q) facts.push(`quiz \`${q.id}\`: ${q.questions} questions (${fmt(q.min)})`);
    if (facts.length) body.push(P(facts.join('  ·  '), {}, { color: GREY }));
    if (m.extra) body.push(P(m.extra));
    if (pages.length) {
      const folder = pages[0].rel.split('/')[0];
      body.push(small(`Folder: \`${st.dir}/reading/${folder}\``));
      body.push(table(['#', 'Page', 'Level', 'Time', 'What it covers'], pages.map((p) => [
        String(p.n),
        [P(p.title, { spacing: { after: 0 } }, { size: 18, bold: p.level === 'Required' }), small(p.file)],
        p.level,
        p.min ? `${p.min} min` : '–',
        [P(p.covers, { spacing: { after: 0 } }, { size: 18 }), ...(p.note ? [small(p.note, { italics: true, color: '333333' })] : [])],
      ]), [450, 2700, 950, 750, TEXT_W - 4850]));
    }
    if (v.length) {
      body.push(H(HeadingLevel.HEADING_3, 'Videos'));
      body.push(videoTable(v));
    }
  }

  // ----- guide pages -----
  if (guide.length) {
    body.push(H(HeadingLevel.HEADING_1, 'Guide pages', { pageBreakBefore: true }));
    body.push(P(`Written for this project, in \`${st.dir}/guide\`. They connect the reading to what trainees build each week.`));
    body.push(table(['Page', 'Level', 'Time', 'What it covers', 'Day'], guide.map((g) => {
      const day = st.schedule.find((d) => d.items?.some((it) => it.guide === g.key));
      return [[P(g.title, { spacing: { after: 0 } }, { size: 18, bold: true }), small(g.file)], g.key === '05' ? 'Optional' : g.level, `${g.min} min`, g.covers, day ? String(day.day) : 'Teams that use it'];
    }), [2500, 950, 750, TEXT_W - 5000, 800]));
  }

  // ----- other videos -----
  if (otherVids.length) {
    body.push(H(HeadingLevel.HEADING_1, 'Other videos'));
    for (const name of [...new Set(otherVids.map((v) => v.module))]) {
      body.push(H(HeadingLevel.HEADING_3, name));
      body.push(videoTable(otherVids.filter((v) => v.module === name)));
    }
  }
  if (optional.length) {
    body.push(H(HeadingLevel.HEADING_2, 'Optional beginner course'));
    optional.forEach((p) => body.push(P(p.replace(/\r?\n/g, ' '))));
  }

  // ----- games -----
  body.push(H(HeadingLevel.HEADING_1, 'Games', { pageBreakBefore: true }));
  body.push(P(`All of them work offline, from \`${st.dir}/games\`. See the README there for how to open each one.`));
  body.push(table(['Game', 'What trainees practice', 'When', 'Levels and how to open', 'Time'], Object.entries(st.games).map(([id, g]) => {
    const day = st.schedule.find((d) => d.items?.some((it) => it.game === id));
    return [[P(g.name, { spacing: { after: 0 } }, { size: 18, bold: true }), small(day ? `Day ${day.day}` : '')], g.what, g.when, g.levels, fmt(g.min)];
  }), [1500, 3100, 1900, 2338, 800]));

  // ----- quizzes -----
  body.push(H(HeadingLevel.HEADING_1, 'Quizzes'));
  body.push(P(`The answer key with every explanation is \`${st.dir}/quizzes/answers.docx\`. Module quizzes show the explanation after each answer and allow retakes.${quiz.placement ? ' The placement quiz shows only the score per module, so the questions stay fresh for the next trainee.' : ''}`));
  body.push(table(['Quiz', 'Questions', 'Time', 'Day'], Object.values(quiz).map((q) => [`\`${q.id}\`  ${q.title}`, String(q.questions), fmt(q.min), usedQuizDay[q.id] ? String(usedQuizDay[q.id]) : '–']), [TEXT_W - 3300, 1100, 1200, 1000]));
  if (quiz.placement) {
    body.push(H(HeadingLevel.HEADING_3, 'Using the placement quiz'));
    body.push(P('Score each module separately:'));
    ['**80% or more**: the module becomes skim', '**50–79%**: required pages only', '**Under 50%**: the full module, skim pages too'].forEach((b) => body.push(bullet(b)));
  }

  const heading = (size, before, after, color) => ({ run: { font: FONT, size, bold: true, color }, paragraph: { spacing: { before, after }, keepNext: true } });
  const doc = new Document({
    creator: 'trainer-guide',
    title: `${st.name} stage: trainer guide`,
    styles: {
      default: {
        document: { run: { font: FONT, size: 20 }, paragraph: { spacing: { after: 100, line: 264 } } },
        title: heading(40, 0, 200, '1f2937'),
        heading1: heading(30, 360, 160, '1f3a8a'),
        heading2: heading(24, 280, 100, '1f2937'),
        heading3: heading(20, 220, 80, '1f2937'),
      },
    },
    numbering: { config: [{ reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }] },
    sections: [{
      properties: { page: { size: { width: PAGE_W, height: 16838 }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${st.name} trainer guide · page `, size: 16, color: GREY }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GREY })] })] }) },
      children: body,
    }],
  });
  const out = path.join(ROOT, st.out);
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log(`${st.name}: ${Object.values(modules).flat().length} pages, ${videos.length} videos, ${Object.keys(quiz).length} quizzes, reading ${fmt(tReq)} required / ${fmt(tAll)} all -> ${st.out}`);

  function videoTable(vs) {
    return table(['Video', 'Length', 'What it covers', 'Note'], vs.map((v) => [
      [P(`[${v.title}](${v.url})`, { spacing: { after: 0 } }, { size: 18 }), small(v.author)],
      `${v.min} min`, v.covers, v.note || '',
    ]), [3000, 800, 3100, TEXT_W - 6900]);
  }
}

const which = process.argv[2] ? [process.argv[2]] : Object.keys(stages);
for (const k of which) await buildGuide(k);
