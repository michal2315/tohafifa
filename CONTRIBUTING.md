# Contributing

Many people work on this repo: content writers from every team and developers working on the app.
These conventions keep it easy to read and change.

## Workflow

1. Branch from `main`.
2. Make your change.
3. Run `npm run check`. It must pass.
4. Open a merge request. Content MRs are reviewed by the stage owner, and code MRs by an app
   maintainer.

## Content

See **Writing content** in the site itself (`apps/site/docs/authoring/`).

- Keep the stage structure: overview, learn, practice, milestone.
- Use the existing components instead of custom HTML. If something is missing, add a component
  rather than one-off markup.
- Never commit videos or other large files. They go on the media mount.

## Code

- **TypeScript everywhere**, with `strict` mode on. Avoid `any`.
- **One component per folder**: `src/components/Name/index.tsx` plus `styles.module.css`. Export
  it from `src/components/index.ts` and document it in `docs/authoring/03-components.mdx`.
- **Props are an interface** named `<Name>Props`, with a short comment on any prop that isn't
  obvious.
- **Styles** use CSS modules and Infima variables (`var(--ifm-...)`), never hard-coded colors, so the
  look stays consistent.
- **Theme overrides** (`src/theme/`) wrap the original component rather than copying it, and
  stay as small as possible, so Docusaurus upgrades stay easy.
- **Browser-only APIs** (`window`, `localStorage`) must not run during pre-rendering. Use
  `usePersistentState` for anything saved in the browser.
- **Configuration lives in one place.** For example, tracks and stages are defined only in
  `packages/shared`.
- Comments explain _why_, not _what_.

Formatting (Prettier) and linting (ESLint) are enforced, so don't argue style in reviews.
