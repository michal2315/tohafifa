# Documentation importer

Copies pages from open-licensed documentation into a stage as MDX, so trainees can read them
inside the closed network. Supported sources:

| Source (`source:` in a config) | From                                                                       | License                       |
| ------------------------------ | -------------------------------------------------------------------------- | ----------------------------- |
| `mdn`                          | [MDN](https://github.com/mdn/content) "Learn web development" core lessons | CC-BY-SA 2.5                  |
| `sass`                         | [Sass site](https://github.com/sass/sass-site) "Sass Basics" guide         | MIT                           |
| `angular`                      | [Angular docs](https://github.com/angular/angular) (`adev/src/content`)    | CC BY 4.0 (code examples MIT) |
| `angular-tutorial`             | Steps of the Angular "Learn Angular" tutorial, as one practice page        | CC BY 4.0 (code examples MIT) |
| `ngrx`                         | [NgRx docs](https://github.com/ngrx/platform) (`projects/www`)             | MIT                           |
| `rxjs`                         | [RxJS guide](https://github.com/ReactiveX/rxjs) (`apps/rxjs.dev`)          | Apache 2.0                    |
| `github-readme`                | A README from a GitHub repository (e.g. react-atomic-design, MIT)          | The repository's license      |

Every imported page ends with a `<SourceAttribution>` credit line, which the licenses require.
MDN's license is share-alike, so the imported pages stay under CC-BY-SA 2.5. **Before adding a
source, check its license allows copying and changing the text**, and add it to
`apps/site/src/components/SourceAttribution`.

## Usage

Run outside the closed network (it downloads the sources):

```bash
tools/import-docs/fetch-sources.sh ../doc-sources
node tools/import-docs/import-docs.mjs tools/import-docs/stages/html-css.mjs ../doc-sources
node tools/import-docs/import-docs.mjs tools/import-docs/stages/frontend.mjs ../doc-sources
```

Then check the result with `npm run build`, and commit the generated pages.

**Never edit imported pages by hand.** Generated pages are overwritten on every import, and
generated pages that are no longer in the config are deleted. To change what's imported, edit
the stage config. Hand-written pages next to them (quizzes, videos, games) are never touched -
the importer recognizes its own pages by the "Imported by tools/import-docs" comment in them.

Generated pages have numbered file names (`01-components.mdx`), and hand-written ones don't
(`quiz.mdx`). `.prettierignore` relies on this to leave generated pages unformatted.

## Stage configs

A stage config (in `stages/`) lists the pages of a stage:

```js
export default {
  stageDir: 'apps/site/docs/stages/08-frontend',
  // Folders the importer creates, with their sidebar labels.
  categories: { 'angular/01-basics': 'Angular basics' },
  pages: [
    {
      output: 'angular/01-basics/02-templates.mdx', // path in the stage
      source: 'angular',
      from: 'introduction/essentials/templates', // which page of the source (see sources/*.mjs)
      dropSections: ['Next Step'],
    },
  ],
};
```

Options every page can have:

| Option         | What it does                                                                                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`        | Replaces the page title                                                                                                                                               |
| `sidebarLabel` | A shorter title for the sidebar                                                                                                                                       |
| `position`     | `sidebar_position` of the page                                                                                                                                        |
| `kind`         | The page kind (`reading`, `practice`...), if the source's default is wrong                                                                                            |
| `track`        | Shows the page only for these tracks, e.g. `{ team: ['team-1'] }`                                                                                                     |
| `sections`     | Keep only the intro and these `##` sections, to keep the page short                                                                                                   |
| `dropSections` | Remove these `##` sections                                                                                                                                            |
| `replace`      | `[from, to]` pairs applied to the source first: exact text, or a RegExp. Use for typo fixes and for sentences about things we don't have (online editors, StackBlitz) |

Each source has its own options too (like `from`), documented at the top of `sources/<source>.mjs`.

The importer warns when something didn't match - a section or replacement that's not in the
source (anymore), an image or example file that's missing, or a docs-site tag it doesn't know.
Fix those in the config or the adapter rather than in the generated page.

## What the importer changes

- MDN live examples become `<LiveExample>` components, so the result renders in our site.
- The docs sites' own tags (Angular's `<docs-code>`, NgRx's `<ngrx-code-example>`...) become
  Markdown: code blocks with a title, and admonitions for notes and warnings.
- Links between imported pages point inside our site. Links to anything else become plain
  text, since they would be dead inside the network.
- Navigation, embedded external videos and third-party interactive embeds are removed.
- Images are copied next to the page, into `img/<page name>/`.

## Adding a source

Write an adapter in `sources/` and add it to `SOURCES` in `import-docs.mjs`. An adapter is an
object with:

- `attribution`: its key in `<SourceAttribution>`, and `sourceName` for the generated comment;
- `convert(page, ctx)`: returns `{ title, kind, body, url }`, where `body` is the page's MDX;
- optionally `linkKey(page)`: how other pages of the same source link to this one, so those
  links can stay inside our site.

`ctx` gives the adapter `srcRoot`, `select(markdown)` (applies the page's `sections`, `replace`...
options), `linkTo(key)`, `copyImage(path)` and `warn(message)`. The helpers in `lib/` do most of
the work for Markdown sources - see `sources/rxjs.mjs` for a short example. Also download the
source in `fetch-sources.sh`.
