# Trainer guide builder

Builds the Word trainer guides:

- `html&css/trainer-guide.docx`
- `angular/trainer-guide.docx`

Each guide has a day-by-day plan, every reading page with its level, reading time and what it covers, the videos, the games and the quizzes.

```bash
cd _tools/trainer-guide
npm install
node build.mjs            # both guides
node build.mjs html       # or one of them: html, angular
```

Run it again whenever the reading pages, `videos.md` or the quizzes change. Most of the content comes from the repo:

| What | From |
|---|---|
| Page titles, levels, trainer notes | Each reading page: front matter, the level line, `> **Trainer note:**` |
| What a page covers | The page's `##` headings (or `###` when there are fewer than two useful `##`) |
| Reading time | Word and code-line counts: 150 words and 30 code lines a minute, skim pages at 40%, rounded up to 5 minutes |
| Videos | The tables in `videos.md` |
| Quizzes | `quizzes/index.json` and `placement.json`: about a minute a question |

Everything else is in `stages.mjs`: the schedule, the games with their times, and hand-written descriptions for pages whose headings don't say what they cover. The build stops with a message if a page has no useful headings and no description.
