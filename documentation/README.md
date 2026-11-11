# Offline documentation

Complete copies of the official documentation sites for the versions we teach. They look and work like the real sites, with navigation, code tabs and live demos, but need no internet.

| Folder | Site | Version | Pages |
|---|---|---|---|
| `angular` | angular.dev, including the full API reference, tutorials, CLI and error pages | Angular 20 | 1,330 |
| `ngrx` | ngrx.io: Store, Effects, Entity, DevTools, Router Store, Signals, API | NgRx 20 | 242 |
| `primeng` | primeng.org: every component with its live demos, theming, PassThrough | PrimeNG 20.4 | 135 |
| `nestjs` | docs.nestjs.com | NestJS 12 (latest; the site has no older versions) | 178 |

## How to open

You need Node.js (any version from 18 on). Nothing to install.

```bash
cd documentation
node serve.mjs angular
```

Then open the address it prints. Each site has its own port, so several can run at once:

| Docs | Address |
|---|---|
| angular | http://localhost:4201 |
| nestjs | http://localhost:4202 |
| ngrx | http://localhost:4203 |
| primeng | http://localhost:4204 |

To use another port: `node serve.mjs angular 8080`.

The sites must be opened through `serve.mjs`, not by double-clicking a file, because they are single-page apps that need every address to load the site.

## What doesn't work offline

- **Search.** The sites' search boxes rely on an online service and return nothing offline. Use the sidebar navigation instead.
- **angular.dev tutorials and Playground:** the text, steps and code of each step are there, but the live editor and preview run on StackBlitz's in-browser Node.js runtime, which downloads from the internet. Trainees can follow the steps in their own project instead.
- **Links that leave the site:** GitHub, StackBlitz, YouTube, "edit this page", newsletter forms.
- **Ads and analytics** (NestJS and NgRx have them) are simply missing.

## How the copies were made

Recorded on 2026-11-11 with `_tools/docs-mirror`: a script opens the site in headless Chrome, visits every page and saves every file the browser loads. A second pass downloads files that pages only load on demand, such as images further down a page or code for a tab not yet opened. Each copy was then checked with all internet access blocked.

To refresh a copy, for example after a new release:

```bash
cd _tools/docs-mirror
npm install
node mirror.mjs angular ../../documentation/angular
node sweep.mjs ../../documentation/angular
```

For NgRx, run `node ngrx-fill.mjs ../../documentation/ngrx` between the two. The NgRx site loads its pages through a service worker that the recorder can't see, so this downloads each page's content file directly. `verify.mjs` repeats the offline check.

## Licenses

| Docs | License |
|---|---|
| Angular | Text CC BY 4.0, code samples MIT, © Google LLC |
| NgRx | MIT, © Brandon Roberts, Mike Ryan, Victor Savkin, Rob Wormald |
| PrimeNG | MIT (community version), © PrimeTek |
| NestJS | MIT, © Kamil Myśliwiec |

Each site's fonts are copied into its `_ext/` folder (Google Fonts under the SIL Open Font License, Font Awesome Free under CC BY 4.0 / OFL / MIT).
