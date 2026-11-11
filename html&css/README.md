# HTML & SCSS stage: resources

Material for the HTML & SCSS stage of the training. The stage ends with the Instagram feed page built from an XD design. Everything here works on the closed network: no file loads anything from the internet. The one exception is `videos.md`, which only links to YouTube.

## What's here

```
html&css/
├── reading/        67 reading pages (Markdown, ready for Docusaurus), grouped by module
├── games/          Flexbox Froggy, Grid Garden, CSS Diner: cleaned for offline use
├── quizzes/        77-question bank: placement quiz + one quiz per module (see quizzes/README.md)
├── videos.md       recommended videos and an optional beginner course (YouTube links, need internet)
├── LICENSES/       license texts that must travel with the material
└── SOURCES.md      where every item came from, its version and license
```

## Reading pages

| Folder | Module | Pages |
|---|---|---|
| `01-semantic-html-and-accessibility` | 1. Semantic HTML & accessibility | 13 |
| `02-css-fundamentals-and-layout` | 2. CSS fundamentals & layout (incl. responsive design) | 29 |
| `03-modern-css` | 3. Modern CSS | 8 |
| `04-scss` | 4. SCSS | 16 |
| `05-design-to-code` | 5. From design to code | 1 (+ the pages you write) |

Module 6 (company conventions) has no imported pages. You write those.

Each page starts with:
- a **level** line, **Required reading** or **Skim**, also set as a Docusaurus tag (`required` / `skim`)
- a **Trainer note** where relevant (e.g. "Then play Flexbox Froggy")
- a **Source** box with the attribution the licenses require. Don't remove it.

### Adding them to Docusaurus

1. Copy the module folders from `reading/` into your docs folder, e.g. `docs/html-scss/`.
2. Each folder has a `_category_.json` (sidebar label and order), and each page has `sidebar_position`, so the sidebar builds itself.
3. Most pages set `mdx: format: md` in their front matter, so Docusaurus parses them as plain Markdown, not MDX. This keeps code samples with `<` and `{` from breaking the build. The 11 pages with demo videos use MDX instead, so the video files get bundled into the build.
4. Callouts use Docusaurus admonitions (`:::note`, `:::warning`, `:::tip`, `:::info`).
5. `_import-report.json` is for tracking only. You don't need to copy it into the docs.

**Tested** on 2026-11-09 with a fresh Docusaurus 3.10.2 site: the build passes with no errors or warnings, all 67 pages render, and every image (104), video (26) and link between pages loads.

If your Docusaurus is version 2, tell Claude. The front matter and admonition titles need small changes.

## Games

Each game is a static website: serve its folder as-is (any static host, an nginx container on OpenShift, or Docusaurus's `static/` folder), then link to it from the relevant reading page.

| Game | Folder | When | Levels to assign |
|---|---|---|---|
| CSS Diner | `games/css-diner` | After *Selectors* (module 2) | 15–32 for everyone; 1–14 too if the placement quiz says so |
| Flexbox Froggy | `games/flexbox-froggy` | After *Flexbox* (module 2) | All 24 |
| Grid Garden | `games/grid-garden` | After *Grid* (module 2) | All 28. Levels 18–28 matter most for the feed layout. |

## Updating later

The tools that produced this folder are in [`../_tools/html-css-importer`](../_tools/html-css-importer). To refresh the pages or add new ones, edit `manifest.mjs` and run the importer again. Its README explains how.
