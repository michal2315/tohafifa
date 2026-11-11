# Sources and licenses: HTML & SCSS

Everything in this folder comes from openly licensed material. This file records where each item came from, which version was taken, and under what license, so it can be refreshed and audited later.

Imported on **2026-11-09**.

## Licenses at a glance

| Source | License | What it requires |
|---|---|---|
| web.dev (Google) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Credit the source and say what changed. Each page has a "Source" box that does this. |
| MDN Web Docs (Mozilla Contributors) | [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) | Credit the source, say what changed, and keep our adapted pages under the same license. |
| Sass documentation | MIT | Keep the copyright notice: see [LICENSES/sass-site-MIT.txt](LICENSES/sass-site-MIT.txt). |
| Flexbox Froggy, Grid Garden | MIT | Keep each game's `LICENSE` file (included). |
| CSS Diner | MPL 2.0 | Keep the `LICENSE` file (included). Changes we make to its own files must stay available under MPL 2.0. |
| Game fonts | SIL Open Font License / Apache 2.0 | License texts are in each game's `fonts/` folder. |

## Games

| Game | Upstream | Version taken | Changes for offline use |
|---|---|---|---|
| Flexbox Froggy | [thomaspark/flexboxfroggy](https://github.com/thomaspark/flexboxfroggy) | commit `9a6feab` (Jan 2026) | Removed Google ads, Google Analytics (replaced by an empty stub so the game code still runs) and the Codepip promotion block; Google Fonts stored locally; outbound links turned into plain text. Levels unchanged. |
| Grid Garden | [thomaspark/gridgarden](https://github.com/thomaspark/gridgarden) | commit `0e262f7` (Jan 2026) | Same as Flexbox Froggy. Levels unchanged. |
| CSS Diner | [flukeout/css-diner](https://github.com/flukeout/css-diner) | commit `566aaa0` (develop branch, last changed 2018) | Removed Google Analytics (stubbed) and the Twitter/Facebook/email share menu; Google Fonts stored locally; outbound links turned into plain text. Levels unchanged. |

All three were tested on 2026-11-09: they load and play with every request served locally, and no console errors.

**Not changed:** the win/end screens of Froggy and Grid Garden still mention Codepip's other games in text. These are clickable links only, and nothing loads from the internet.

## Reading pages

All pages were converted from the live sites (web.dev, developer.mozilla.org, sass-lang.com) on the import date. On every page:

- Images and short demo videos are stored locally next to the page (`img/<page>/`). One web.dev video (20 MB, in *Inheritance*) was over the size limit and is marked as not available.
- CodePen demos (web.dev) and live-result frames (MDN) cannot work offline. They are replaced with a note pointing trainees to the code on the page.
- web.dev self-assessment quizzes are kept, with answers hidden behind a "Show answer" toggle.
- Browser-compatibility tables, site navigation and podcast players are removed.
- Links between imported pages point to the local copy. All other links still point to the original website and won't open on the closed network.

### 1. Semantic HTML & accessibility

| Page | Level | Source | License |
|---|---|---|---|
| [Document structure](reading/01-semantic-html-and-accessibility/01-document-structure.md) | required | [web.dev](https://web.dev/learn/html/document-structure) | CC BY 4.0 |
| [Metadata](reading/01-semantic-html-and-accessibility/02-metadata.md) | skim | [web.dev](https://web.dev/learn/html/metadata) | CC BY 4.0 |
| [Semantic HTML](reading/01-semantic-html-and-accessibility/03-semantic-html.md) | required | [web.dev](https://web.dev/learn/html/semantic-html) | CC BY 4.0 |
| [Headings and sections](reading/01-semantic-html-and-accessibility/04-headings-and-sections.md) | required | [web.dev](https://web.dev/learn/html/headings-and-sections) | CC BY 4.0 |
| [Attributes](reading/01-semantic-html-and-accessibility/05-attributes.md) | skim | [web.dev](https://web.dev/learn/html/attributes) | CC BY 4.0 |
| [Text basics](reading/01-semantic-html-and-accessibility/06-text-basics.md) | skim | [web.dev](https://web.dev/learn/html/text-basics) | CC BY 4.0 |
| [Lists](reading/01-semantic-html-and-accessibility/07-lists.md) | skim | [web.dev](https://web.dev/learn/html/lists) | CC BY 4.0 |
| [Links](reading/01-semantic-html-and-accessibility/08-links.md) | skim | [web.dev](https://web.dev/learn/html/links) | CC BY 4.0 |
| [Navigation](reading/01-semantic-html-and-accessibility/09-navigation.md) | required | [web.dev](https://web.dev/learn/html/navigation) | CC BY 4.0 |
| [Images](reading/01-semantic-html-and-accessibility/10-images.md) | required | [web.dev](https://web.dev/learn/html/images) | CC BY 4.0 |
| [Forms](reading/01-semantic-html-and-accessibility/11-forms.md) | skim | [web.dev](https://web.dev/learn/html/forms) | CC BY 4.0 |
| [Focus](reading/01-semantic-html-and-accessibility/12-focus.md) | required | [web.dev](https://web.dev/learn/html/focus) | CC BY 4.0 |
| [HTML: A good basis for accessibility](reading/01-semantic-html-and-accessibility/13-mdn-html-accessibility.md) | required | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML) | CC BY-SA 2.5 |

### 2. CSS fundamentals & layout

| Page | Level | Source | License |
|---|---|---|---|
| [Box Model](reading/02-css-fundamentals-and-layout/01-box-model.md) | required | [web.dev](https://web.dev/learn/css/box-model) | CC BY 4.0 |
| [Selectors](reading/02-css-fundamentals-and-layout/02-selectors.md) | required | [web.dev](https://web.dev/learn/css/selectors) | CC BY 4.0 |
| [The cascade](reading/02-css-fundamentals-and-layout/03-the-cascade.md) | required | [web.dev](https://web.dev/learn/css/the-cascade) | CC BY 4.0 |
| [Specificity](reading/02-css-fundamentals-and-layout/04-specificity.md) | required | [web.dev](https://web.dev/learn/css/specificity) | CC BY 4.0 |
| [Inheritance](reading/02-css-fundamentals-and-layout/05-inheritance.md) | required | [web.dev](https://web.dev/learn/css/inheritance) | CC BY 4.0 |
| [Sizing Units](reading/02-css-fundamentals-and-layout/06-sizing.md) | required | [web.dev](https://web.dev/learn/css/sizing) | CC BY 4.0 |
| [Layout](reading/02-css-fundamentals-and-layout/07-layout.md) | required | [web.dev](https://web.dev/learn/css/layout) | CC BY 4.0 |
| [Flexbox](reading/02-css-fundamentals-and-layout/08-flexbox.md) | required | [web.dev](https://web.dev/learn/css/flexbox) | CC BY 4.0 |
| [Grid](reading/02-css-fundamentals-and-layout/09-grid.md) | required | [web.dev](https://web.dev/learn/css/grid) | CC BY 4.0 |
| [Spacing](reading/02-css-fundamentals-and-layout/10-spacing.md) | required | [web.dev](https://web.dev/learn/css/spacing) | CC BY 4.0 |
| [Pseudo-classes](reading/02-css-fundamentals-and-layout/11-pseudo-classes.md) | required | [web.dev](https://web.dev/learn/css/pseudo-classes) | CC BY 4.0 |
| [Pseudo-elements](reading/02-css-fundamentals-and-layout/12-pseudo-elements.md) | required | [web.dev](https://web.dev/learn/css/pseudo-elements) | CC BY 4.0 |
| [Z-index and stacking contexts](reading/02-css-fundamentals-and-layout/13-z-index.md) | required | [web.dev](https://web.dev/learn/css/z-index) | CC BY 4.0 |
| [Overflow](reading/02-css-fundamentals-and-layout/14-overflow.md) | required | [web.dev](https://web.dev/learn/css/overflow) | CC BY 4.0 |
| [Text and typography](reading/02-css-fundamentals-and-layout/15-typography.md) | required | [web.dev](https://web.dev/learn/css/typography) | CC BY 4.0 |
| [Color](reading/02-css-fundamentals-and-layout/16-color.md) | skim | [web.dev](https://web.dev/learn/css/color) | CC BY 4.0 |
| [Borders](reading/02-css-fundamentals-and-layout/17-borders.md) | skim | [web.dev](https://web.dev/learn/css/borders) | CC BY 4.0 |
| [Shadows](reading/02-css-fundamentals-and-layout/18-shadows.md) | skim | [web.dev](https://web.dev/learn/css/shadows) | CC BY 4.0 |
| [Backgrounds](reading/02-css-fundamentals-and-layout/19-backgrounds.md) | skim | [web.dev](https://web.dev/learn/css/backgrounds) | CC BY 4.0 |
| [Gradients](reading/02-css-fundamentals-and-layout/20-gradients.md) | skim | [web.dev](https://web.dev/learn/css/gradients) | CC BY 4.0 |
| [Transitions](reading/02-css-fundamentals-and-layout/21-transitions.md) | skim | [web.dev](https://web.dev/learn/css/transitions) | CC BY 4.0 |
| [Media queries](reading/02-css-fundamentals-and-layout/22-media-queries.md) | required | [web.dev](https://web.dev/learn/design/media-queries) | CC BY 4.0 |
| [Macro layouts](reading/02-css-fundamentals-and-layout/23-macro-layouts.md) | required | [web.dev](https://web.dev/learn/design/macro-layouts) | CC BY 4.0 |
| [Micro layouts](reading/02-css-fundamentals-and-layout/24-micro-layouts.md) | required | [web.dev](https://web.dev/learn/design/micro-layouts) | CC BY 4.0 |
| [Typography](reading/02-css-fundamentals-and-layout/25-responsive-typography.md) | required | [web.dev](https://web.dev/learn/design/typography) | CC BY 4.0 |
| [Responsive images](reading/02-css-fundamentals-and-layout/26-responsive-images.md) | skim | [web.dev](https://web.dev/learn/design/responsive-images) | CC BY 4.0 |
| [Theming](reading/02-css-fundamentals-and-layout/27-theming.md) | skim | [web.dev](https://web.dev/learn/design/theming) | CC BY 4.0 |
| [Interaction](reading/02-css-fundamentals-and-layout/28-interaction.md) | skim | [web.dev](https://web.dev/learn/design/interaction) | CC BY 4.0 |
| [Accessibility](reading/02-css-fundamentals-and-layout/29-responsive-accessibility.md) | skim | [web.dev](https://web.dev/learn/design/accessibility) | CC BY 4.0 |

### 3. Modern CSS

| Page | Level | Source | License |
|---|---|---|---|
| [Logical Properties](reading/03-modern-css/01-logical-properties.md) | required | [web.dev](https://web.dev/learn/css/logical-properties) | CC BY 4.0 |
| [Functions](reading/03-modern-css/02-functions.md) | required | [web.dev](https://web.dev/learn/css/functions) | CC BY 4.0 |
| [Using CSS custom properties (variables)](reading/03-modern-css/03-using-custom-properties.md) | required | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) | CC BY-SA 2.5 |
| [Using CSS nesting](reading/03-modern-css/04-css-nesting.md) | required | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/Using) | CC BY-SA 2.5 |
| [CSS container queries](reading/03-modern-css/05-container-queries.md) | required | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) | CC BY-SA 2.5 |
| [:has() CSS pseudo-class](reading/03-modern-css/06-has-selector.md) | required | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:has) | CC BY-SA 2.5 |
| [aspect-ratio CSS property](reading/03-modern-css/07-aspect-ratio.md) | required | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/aspect-ratio) | CC BY-SA 2.5 |
| [clamp() CSS function](reading/03-modern-css/08-clamp.md) | skim | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp) | CC BY-SA 2.5 |

### 4. SCSS

| Page | Level | Source | License |
|---|---|---|---|
| [Sass Basics](reading/04-scss/01-sass-basics.md) | required | [Sass documentation](https://sass-lang.com/guide/) | MIT |
| [Style Rules](reading/04-scss/02-style-rules.md) | required | [Sass documentation](https://sass-lang.com/documentation/style-rules/) | MIT |
| [Parent Selector](reading/04-scss/03-parent-selector.md) | required | [Sass documentation](https://sass-lang.com/documentation/style-rules/parent-selector/) | MIT |
| [Variables](reading/04-scss/04-variables.md) | required | [Sass documentation](https://sass-lang.com/documentation/variables/) | MIT |
| [@use](reading/04-scss/05-use.md) | required | [Sass documentation](https://sass-lang.com/documentation/at-rules/use/) | MIT |
| [@forward](reading/04-scss/06-forward.md) | required | [Sass documentation](https://sass-lang.com/documentation/at-rules/forward/) | MIT |
| [@import](reading/04-scss/07-import.md) | skim | [Sass documentation](https://sass-lang.com/documentation/at-rules/import/) | MIT |
| [@mixin and @include](reading/04-scss/08-mixin.md) | required | [Sass documentation](https://sass-lang.com/documentation/at-rules/mixin/) | MIT |
| [@function](reading/04-scss/09-function.md) | skim | [Sass documentation](https://sass-lang.com/documentation/at-rules/function/) | MIT |
| [@extend](reading/04-scss/10-extend.md) | skim | [Sass documentation](https://sass-lang.com/documentation/at-rules/extend/) | MIT |
| [@each](reading/04-scss/11-each.md) | required | [Sass documentation](https://sass-lang.com/documentation/at-rules/control/each/) | MIT |
| [Maps](reading/04-scss/12-maps.md) | required | [Sass documentation](https://sass-lang.com/documentation/values/maps/) | MIT |
| [@if and @else](reading/04-scss/13-if.md) | skim | [Sass documentation](https://sass-lang.com/documentation/at-rules/control/if/) | MIT |
| [sass:map](reading/04-scss/14-sass-map-module.md) | skim | [Sass documentation](https://sass-lang.com/documentation/modules/map/) | MIT |
| [sass:math](reading/04-scss/15-sass-math-module.md) | skim | [Sass documentation](https://sass-lang.com/documentation/modules/math/) | MIT |
| [Interpolation](reading/04-scss/16-interpolation.md) | skim | [Sass documentation](https://sass-lang.com/documentation/interpolation/) | MIT |

### 5. From design to code

| Page | Level | Source | License |
|---|---|---|---|
| [Color contrast](reading/05-design-to-code/01-color-contrast.md) | required | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) | CC BY-SA 2.5 |

## Videos

`videos.md` only links to YouTube. No video is downloaded or stored here.
