# HTML & SCSS stage: videos

Eighteen videos that go with the reading, in the order trainees meet the topics, and one optional beginner course. They repeat the reading in a different format, so a trainee can watch one before or after the matching module.

These are links to YouTube and need internet access.

## Topic videos

| Module | Video | Length | What it covers | Note |
|---|---|---|---|---|
| 1. Semantic HTML | [Semantic HTML](https://youtu.be/YOsMJQfwqow), Kevin Powell | 10 min | Which elements to use for which content, and why | From the beginner course below |
| 1. Semantic HTML | [Why & when to use semantic HTML elements over divs](https://youtu.be/bOUhq46fd5g), ByteGrad | 12 min | What a page built only from divs costs you | |
| 1. Accessibility | [The only accessibility video you will ever need](https://youtu.be/2oiBKSjOOFE), Web Dev Simplified | 38 min | Screen readers, ARIA, keyboard navigation, contrast | The longest one here. Worth it before `13-mdn-html-accessibility` |
| 1. Focus | [Quick guide to CSS focus states](https://youtu.be/apdD69J4bEc), Kevin Powell | 7 min | `:focus` vs `:focus-visible`, and styling focus well | Goes with `12-focus` |
| 2. Box model | [box-sizing: border-box explained](https://youtu.be/WlGQdgy-M6w), Kevin Powell | 5 min | Why `border-box` makes sizes predictable | From 2019, still current |
| 2. The cascade | [CSS specificity explained](https://youtu.be/c0kfcP_nD9E), Kevin Powell | 13 min | How specificity is calculated and why a rule loses | From 2018, still current |
| 2. Flexbox | [Learn flexbox the easy way](https://youtu.be/u044iM9xsWU), Kevin Powell | 34 min | The whole of flexbox, step by step | Then play Flexbox Froggy (`games/`) |
| 2. Grid | [Learn CSS Grid: a 13-minute deep dive](https://youtu.be/EiNiSFIPIQE), Slaying The Dragon | 14 min | Tracks, `fr`, gaps, areas and placing items | Then play Grid Garden (`games/`) |
| 2. Layout | [Flexbox or grid: how to decide?](https://youtu.be/3elGSZSWTbM), Kevin Powell | 19 min | Choosing between flexbox and grid for real layouts | Goes with `23-macro-layouts` and `24-micro-layouts` |
| 2. Responsive design | [A practical guide to responsive web design](https://youtu.be/x4u1yp3Msao), Kevin Powell | 23 min | Mobile first, flexible layouts, using fewer breakpoints | |
| 3. Functions | [min(), max() and clamp() are CSS magic!](https://youtu.be/U9VF-4euyRo), Kevin Powell | 18 min | Fluid sizes and type without media queries | Goes with `02-functions` and `08-clamp` |
| 3. `:has()` | [The new CSS pseudo-classes explained: :is() :where() :has()](https://youtu.be/3ncFpP8GP4g), Kevin Powell | 14 min | Grouping selectors, zero-specificity `:where()`, and selecting a parent with `:has()` | |
| 3. Nesting | [Getting started with CSS nesting](https://youtu.be/h4Xp1QgNkhU), Kevin Powell | 21 min | Native CSS nesting and how it differs from SCSS nesting | From December 2025 |
| 3. Container queries | [Learn how to use media queries & container queries](https://youtu.be/2rlWBZ17Wes), Kevin Powell | 35 min | Media queries vs container queries, and when to use each | |
| 3. Custom properties | [CSS variables: an introduction to CSS custom properties](https://youtu.be/PHO6TBq_auI), Kevin Powell | 12 min | Declaring, using and overriding custom properties | From 2017, still current |
| 3. Cascade layers | [A look at CSS cascade layers](https://youtu.be/NDNRGW-_1EE), Kevin Powell | 18 min | `@layer` and how layers change which rule wins | Comes back in the Angular stage: PrimeNG can put its styles in a layer |
| 4. SCSS | [Sass in 100 seconds](https://youtu.be/akDIJa0AP5c), Fireship | 3 min | What Sass adds to CSS, very quickly | Watch first |
| 4. SCSS | [Stop using @import with Sass: @use and @forward explained](https://youtu.be/CR-a8upNjJ0), Kevin Powell | 13 min | The module system: `@use`, namespaces and `@forward` | Goes with `05-use`, `06-forward` and `07-import` |

Total: about 5 hours 10 minutes.

## Optional: beginner course

**[HTML & CSS for Absolute Beginners](https://www.youtube.com/playlist?list=PL4-IK0AVhVjOJs_UjdQeyEZ_cmEV3uJvx)**, Kevin Powell: 50 short lessons, about 5½ hours, from 2025.

It starts from zero: what HTML is, the first page, headings, lists, links and images, then CSS basics, the box model, specificity, DevTools, a flexbox navigation, a two-column layout and media queries.

It's below the level of our modules, so it isn't required. Give it to trainees who start with no HTML at all, before module 1. The course writes plain CSS with element selectors. Our conventions use classes only, so tell them not to copy that part.
