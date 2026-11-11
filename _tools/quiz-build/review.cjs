// Writes a human-readable review of the quiz bank (all questions, answers marked).
// Usage: node review.cjs <quizzes-dir> <output.md>
const fs = require('fs');
const path = require('path');
const [dir, out] = process.argv.slice(2);
const files = fs.readdirSync(dir).filter((f) => /^0.*\.json$/.test(f)).sort();
const mods = files.map((f) => JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8')));
const total = mods.reduce((s, m) => s + m.questions.length, 0);
const fence = '```';
const img = (p) => `![${p}](${path.relative(path.dirname(path.resolve(out)), path.resolve(dir, p)).split(path.sep).join('/')})`;
const block = (c, marked = []) => {
  const lines = c.source.replace(/\n$/, '').split('\n');
  const label = c.label ? `\n*${c.label}*\n` : '';
  if (!marked.length) return `${label}\n${fence}${c.lang}\n${lines.join('\n')}\n${fence}\n`;
  return `${label}\n${fence}\n${lines.map((l, i) => `${marked.includes(i + 1) ? '👉' : '  '} ${String(i + 1).padStart(2)}  ${l}`).join('\n')}\n${fence}\n`;
};

let o = `# Quiz bank review\n\nAll ${total} questions with the correct answers marked ✅. Your app shuffles the options, so the order here doesn't matter. ★ = in the placement quiz. Difficulty: 1 easy, 2 medium, 3 hard.\n\nFor spot-the-bug and find-all-bugs questions, the code has line numbers and the bug lines are marked with 👉. Order questions list the steps in the right order; the app shuffles them.\n\n---\n`;
for (const m of mods) {
  o += `\n## ${m.title} (${m.questions.length} questions)\n`;
  for (const q of m.questions) {
    o += `\n### ${q.id}${q.placement ? ' ★' : ''} · ${q.type} · ${q.topic} · difficulty ${q.difficulty}\n\n${q.prompt}\n`;
    if (q.context) o += block(q.context);
    if (q.image) o += `\n${img(q.image)}\n`;
    const bugs = q.type === 'spot-the-bug' ? [q.answer] : q.type === 'find-all-bugs' ? q.answer : [];
    if (q.code) o += block(q.code, bugs);
    if (q.options) {
      const lang = q.optionLang || q.code?.lang || '';
      o += '\n' + q.options.map((x) => {
        const mark = x.correct ? '✅ ' : '❌ ';
        if (x.image) return `- ${mark}${img(x.image)}`;
        if (x.code) return `- ${mark}\n\n${fence}${lang}\n${x.code.replace(/\n$/, '')}\n${fence}\n`;
        return `- ${x.correct ? '✅ ' : ''}${x.text}`;
      }).join('\n') + '\n';
    }
    if (q.type === 'spot-the-bug') o += `\n✅ Line ${q.answer}\n`;
    if (q.type === 'find-all-bugs') o += `\n✅ Lines ${q.answer.join(', ')}\n`;
    if (q.type === 'text') o += '\n✅ Accepted: ' + q.answer.accept.map((a) => '`' + a + '`').join(' · ') + '\n';
    if (q.type === 'order') o += '\n' + q.items.map((x, i) => `${i + 1}. ${x}`).join('\n') + '\n';
    if (q.type === 'match') o += '\n| | |\n|---|---|\n' + q.pairs.map((p) => `| ${p.left} | ${p.right} |`).join('\n') + '\n';
    o += `\n> **Explanation:** ${q.explanation}\n`;
  }
}
fs.writeFileSync(out, o);
console.log(`written ${total} questions to ${out}`);
