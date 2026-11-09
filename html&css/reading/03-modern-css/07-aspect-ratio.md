---
title: "aspect-ratio CSS property"
sidebar_position: 7
mdx:
  format: md
tags: [required]
---

**Required reading**

> **Trainer note:** Square post images, round avatars.

:::info[Source]

Adapted from [aspect-ratio CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/aspect-ratio) by Mozilla Contributors, MDN Web Docs, licensed under [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed. This adapted page is shared under the same license.

:::

The **`aspect-ratio`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property allows you to define the desired width-to-height ratio of an element's box.

## Try it

```css
aspect-ratio: auto;
```

```css
aspect-ratio: 1 / 1;
```

```css
aspect-ratio: 16 / 9;
```

```css
aspect-ratio: 0.5;
```

## Syntax

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* fallback to 'auto' for replaced elements */
aspect-ratio: auto 3/4;
aspect-ratio: 9/6 auto;

/* Global values */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

### Values

This property is specified as one or both of the keyword `auto` or a `<ratio>`.

**`auto`**

> [Replaced elements](https://developer.mozilla.org/en-US/docs/Glossary/Replaced_elements) with an intrinsic aspect ratio use *that* aspect ratio, otherwise the box has no preferred aspect ratio. Size calculations involving intrinsic aspect ratio always work with the content box dimensions.

**[`<ratio>`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/ratio)**

> The box's preferred aspect ratio is the specified ratio of `width` / `height`. If `height` and the preceding slash character are omitted, `height` defaults to `1`. Size calculations involving preferred aspect ratio work with the dimensions of the box specified by `box-sizing`.

**`auto && <ratio>`**

> When both `auto` and a `<ratio>` are specified together, `auto` is used if the element is a replaced element with a natural aspect ratio, like an `<img>` element. Otherwise, the specified ratio of `width` / `height` is used as the preferred aspect ratio.

## Description

The `aspect-ratio` property defines a desired width-to-height ratio of an element's box. This means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio. The specified [aspect ratio](https://developer.mozilla.org/en-US/docs/Glossary/Aspect_ratio) is used in the calculation of auto sizes and some other layout functions.

At least one of the box's sizes needs to be automatic in order for `aspect-ratio` to have any effect. If neither the width nor height is an automatic size, then the provided aspect ratio has no effect on the box's preferred sizes.

This property is specified as one or both of the keyword auto or a `<ratio>`. If both are given, and the element is a [replaced element](https://developer.mozilla.org/en-US/docs/Glossary/Replaced_elements), such as [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img), then the given ratio is used until the content is loaded. After the content is loaded, the `auto` value is applied, so the intrinsic aspect ratio of the loaded content is used.

If the element is not a replaced element, then the given `ratio` is used.

## Formal definition

<table class="properties"><tbody><tr><th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value">Initial value</a></th><td><code>auto</code></td></tr><tr><th scope="row">Applies to</th><td>all elements except inline boxes and internal ruby or table boxes</td></tr><tr><th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Inheritance">Inherited</a></th><td>no</td></tr><tr><th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value">Computed value</a></th><td>as specified</td></tr><tr><th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Animatable_properties">Animation type</a></th><td>by computed value type</td></tr></tbody></table>

## Formal syntax

```
aspect-ratio =   auto     ||  <ratio>  <ratio> =   <number [0,∞]> [ / <number [0,∞]> ]?
```

This syntax reflects the latest standard as per [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/ "External link (opens in new tab)"), [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values-4/ "External link (opens in new tab)"). Not all browsers may have implemented every part. See Browser compatibility for support information.

## Examples

### Exploring aspect-ratio effects with fixed width

In this example, the width of the `<div>` elements has been set to `100px` and height to `auto`. Since the width value is fixed here, the `aspect-ratio` property affects only the height of the `<div>` elements to maintain the specified width-to-height ratio.

```html
<div>1/1</div>
<div>0.5</div>
<div>1</div>
<div>1/0.5</div>
<div>16/9</div>
```

```css
div {
  display: inline-flex;
  background-color: lime;
  justify-content: center;
}
```

```css
div {
  width: 100px;
  height: auto;
}
div:nth-child(1) {
  aspect-ratio: 1/1;
}
div:nth-child(2) {
  aspect-ratio: 0.5;
}
div:nth-child(3) {
  aspect-ratio: 1;
}
div:nth-child(4) {
  aspect-ratio: 1/0.5;
}
div:nth-child(5) {
  aspect-ratio: 16/9;
}
```

:::note[Live result not available offline]

The original page shows the rendered result here. Paste the code above into the playground to see it.

:::

### Fallback to natural aspect ratio

In this example we are using two `<img>` elements. The first element does not have its `src` attribute set to an image file.

```html
<img src="" /> <img src="plumeria.jpg" />
```

The following code sets `3/2` as the preferred aspect ratio and `auto` as a fallback.

```css
img {
  display: inline;
  width: 200px;
  border: 2px dashed red;
  background-color: lime;
  vertical-align: top;

  aspect-ratio: 3/2 auto;
}
```

Note how the first image without replaced content keeps the `3/2` aspect ratio, while the second image after the content is loaded uses the image's natural aspect ratio.

:::note[Live result not available offline]

The original page shows the rendered result here. Paste the code above into the playground to see it.

:::

## See also

- [Understanding aspect ratios](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Image aspect-ratio: preventing jank](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Designing an aspect ratio unit for CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/ "External link (opens in new tab)")
- [Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/ "External link (opens in new tab)")
