// Writes a human-readable review of the quiz bank (all questions, answers marked).
// Usage: node review.cjs <quizzes-dir> <output.md>
const fs = require('fs');
const [dir, out] = process.argv.slice(2);
const files = fs.readdirSync(dir).filter((f) => /^0.*\.json$/.test(f)).sort();
const mods = files.map((f) => JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8')));
const total = mods.reduce((s, m) => s + m.questions.length, 0);
const fence = '```';
const block = (c, numbered) => {
  const lines = c.source.replace(/\n$/, '').split('\n');
  const label = c.label ? `\n*${c.label}*\n` : '';
  if (!numbered) return `${label}\n${fence}${c.lang}\n${lines.join('\n')}\n${fence}\n`;
  return `${label}\n${fence}\n${lines.map((l, i) => `${i + 1 === numbered ? '👉' : '  '} ${String(i + 1).padStart(2)}  ${l}`).join('\n')}\n${fence}\n`;
};

let o = `# Quiz bank review\n\nAll ${total} questions with the correct answers marked ✅. Your app shuffles the options, so the order here doesn't matter. ★ = in the placement quiz. Difficulty: 1 easy, 2 medium, 3 hard.\n\nFor spot-the-bug questions, the code has line numbers and the bug line is marked with 👉.\n\n---\n`;
for (const m of mods) {
  o += `\n## ${m.title} (${m.questions.length} questions)\n`;
  for (const q of m.questions) {
    o += `\n### ${q.id}${q.placement ? ' ★' : ''} · ${q.type} · ${q.topic} · difficulty ${q.difficulty}\n\n${q.prompt}\n`;
    if (q.context) o += block(q.context);
    if (q.code) o += block(q.code, q.type === 'spot-the-bug' ? q.answer : 0);
    if (q.options) o += '\n' + q.options.map((x) => `- ${x.correct ? '✅ ' : ''}${x.text}`).join('\n') + '\n';
    if (q.type === 'spot-the-bug') o += `\n✅ Line ${q.answer}\n`;
    if (q.type === 'text') o += '\n✅ Accepted: ' + q.answer.accept.map((a) => '`' + a + '`').join(' · ') + '\n';
    o += `\n> **Explanation:** ${q.explanation}\n`;
  }
}
fs.writeFileSync(out, o);
console.log(`written ${total} questions to ${out}`);
