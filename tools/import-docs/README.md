# Documentation importer

Copies pages from open-licensed documentation into a stage as MDX, so trainees can read them
inside the closed network. Supported sources:

| Source                                         | License      | What we import                       |
| ---------------------------------------------- | ------------ | ------------------------------------ |
| [MDN](https://github.com/mdn/content)          | CC-BY-SA 2.5 | "Learn web development" core lessons |
| [Sass site](https://github.com/sass/sass-site) | MIT          | The "Sass Basics" guide              |

Every imported page ends with a `<SourceAttribution>` credit line, which the licenses require.
MDN's license is share-alike, so the imported pages stay under CC-BY-SA 2.5.

## Usage

Run outside the closed network (it downloads the sources):

```bash
tools/import-docs/fetch-sources.sh ../doc-sources
node tools/import-docs/import-docs.mjs tools/import-docs/stages/html-css.mjs ../doc-sources
```

Then check the result with `npm run build`, and commit the generated pages.

**Never edit imported pages by hand.** The category folders listed in the stage config are
wiped and rewritten on every import. To change what's imported, edit the stage config.

## What the importer changes

- MDN live examples become `<LiveExample>` components, so the result renders in our site.
- Links between imported pages point inside our site. Links to anything else become plain
  text, since they would be dead inside the network.
- Navigation, embedded external videos and third-party interactive embeds are removed.
- Images are copied next to the page.

## Adding pages for another stage

Copy `stages/html-css.mjs`, list the MDN lessons you want (folders under
`files/en-us/learn_web_development/core/` in the MDN repo), and run the importer with your config.
If the build fails on a page, the importer probably needs to learn a new MDN pattern - fix it
here rather than in the generated page.
