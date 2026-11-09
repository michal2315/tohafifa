# HTML & SCSS resource importer

The scripts that produced `html&css/reading` and `html&css/games`. Run them **outside** the closed network (they download from the internet), then commit the output and bring it in.

| File | What it does |
|---|---|
| `manifest.mjs` | The curated reading list: which pages, which module, required/skim, trainer notes, file names. Edit this to add or remove pages. |
| `import.mjs` | Downloads each page in the manifest from web.dev / MDN / sass-lang.com, converts it to Docusaurus Markdown, stores images and short videos locally, adds the license attribution box, and links imported pages to each other. |
| `clean-games.mjs` | Takes fresh clones of the three games and removes ads, analytics and social widgets, stores their Google Fonts locally, and turns outbound links into plain text. |

Requires Node 18+.

> **Windows note:** run these from a short folder path (e.g. `C:\work\importer`). In deep folders, `node_modules` paths go past Windows' 260-character limit and Node fails with `ERR_MODULE_NOT_FOUND`. The `&` in `html&css` is fine.

## Refresh the reading pages

```bash
npm install
node import.mjs "<repo>/html&css/reading"
```

Downloaded pages are cached in `.cache/`. Delete it to fetch fresh copies. Check the console summary and `_import-report.json` for failed pages or skipped files (videos over 15 MB are skipped).

## Refresh the games

```bash
git clone --depth 1 https://github.com/thomaspark/flexboxfroggy.git src/flexboxfroggy
git clone --depth 1 https://github.com/thomaspark/gridgarden.git src/gridgarden
git clone --depth 1 -b develop https://github.com/flukeout/css-diner.git src/css-diner
node clean-games.mjs src "<repo>/html&css/games"
```

Then copy the font license files back into each game's `fonts/` folder (see `html&css/SOURCES.md`). Open each game, check the browser's network tab, and confirm that nothing loads from outside before you bring it in.
