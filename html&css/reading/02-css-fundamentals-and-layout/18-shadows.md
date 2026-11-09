---
title: "Shadows"
sidebar_position: 18
mdx:
  format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

:::info[Source]

Adapted from [Shadows](https://web.dev/learn/css/shadows) by the web.dev authors (Google), web.dev, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

Say you've been sent a design to build and in that design there's a picture of a t-shirt, cut out, with a drop shadow. The designer tells you that the product image is dynamic and can be updated via the content management system, so the drop shadow needs to be dynamic too. Instead of a t-shirt, the image could be a visor or shorts, or any other item. How do you do that with CSS?

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/wvgrMrR`)

:::

CSS has the [`box-shadow`](https://developer.mozilla.org/docs/Web/CSS/box-shadow) and [`text-shadow`](https://developer.mozilla.org/docs/Web/CSS/text-shadow) properties, but the picture isn't text, so you can't use `text-shadow`. If you use `box-shadow`, the shadow is on the surrounding box, *not* around the t-shirt.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/YzNrwae`)

:::

Luckily, there is another option: the [`drop-shadow()`](https://developer.mozilla.org/docs/Web/CSS/filter-function/drop-shadow\(\)) filter. This enables you to do exactly what the designer asked for. There are plenty of options when it comes to shadows in CSS, each designed for a different use case.

## Box shadow

The `box-shadow` property is for adding shadows to the box of an HTML element. It works on block elements and inline elements.

```css
.my-element {
    box-shadow: 5px 5px 20px 5px #000;
}
```

The order of values for `box-shadow` are as follows:

1. **Horizontal offset**: a positive number pushes it out from the left and a negative number will push it out from the right.
2. **Vertical offset**: a positive number pushes it down from the top, and a negative number will push it up from the bottom.
3. **Blur radius**: a larger number produces a more blurred shadow, whereas a small number produces a sharper shadow.
4. **Spread radius** (optional): a larger number increases the size of the shadow and a smaller number decreases it, making it the same size as the **blur radius** if it's set to 0.
5. **Color**: [Any valid color value](./16-color.md). If this isn't defined, the computed text color will be used.

To make a box shadow an inner shadow, rather than the default outer shadow, add an `inset` keyword **before** the other properties.

```css
/* Outer shadow */
.my-element {
    box-shadow: 5px 5px 20px 5px #000;
}

/* Inner shadow */
.my-element {
    box-shadow: inset 5px 5px 20px 5px #000;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/rNjGevp`)

:::

### Multiple shadows

You can add as many shadows as you like with `box-shadow`. Add a comma separated collection of value sets to achieve this:

```css
.my-element {
  box-shadow: 5px 5px 20px 5px darkslateblue, -5px -5px 20px 5px dodgerblue,
    inset 0px 0px 10px 2px darkslategray, inset 0px 0px 20px 10px steelblue;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/abpLNXR`)

:::

### Properties affecting box-shadow

Adding a `border-radius` to your box will also affect the shape of the box shadow. This is because CSS is creating a shadow based on the shape of the box as if light is pointing at it.

```css
.my-element {
  box-shadow: 0px 0px 20px 5px darkslateblue;
  border-radius: 25px;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/RwKLaXN`)

:::

If your box with `box-shadow` is in a container that has `overflow: hidden`, the shadow **won't** break out of that overflow either.

```html
<div class="my-parent">
  <div class="my-shadow">My shadow is hidden by my parent.</div>
</div>
```

```css
.my-parent,
.my-shadow {
  width: 250px;
  height: 250px;
}

.my-shadow {
  box-shadow: 0px 0px 20px 5px darkslateblue;
}

.my-parent {
  overflow: hidden;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/BapwzyQ`)

:::

## Text shadow

The `text-shadow` property is very similar to the `box-shadow` property. It only works on text nodes.

```css
.my-element {
  text-shadow: 3px 3px 3px hotpink;
}
```

The values for `text-shadow` are the same as `box-shadow` and in the same order. The only difference is that `text-shadow` has no `spread` value and no `inset` keyword.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/vYgeKqm`)

:::

When you add a `box-shadow` it is clipped to the shape of your box, but `text-shadow` has no clipping. This means that if your text is fully or semi transparent, the shadow is visible through it.

```css
.my-element {
  text-shadow: 3px 3px 3px gold;
  color: rgb(0 0 0 / 70%);
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/LYxzRpb`)

:::

### Multiple shadows

You can add as many shadows as you like with `text-shadow`, just as with `box-shadow`. Add a comma separated collection of value sets, and you can create some really cool text effects, such as 3D text.

```css
.my-element {
  text-shadow: 1px 1px 0px white,
    2px 2px 0px firebrick;
  color: darkslategray;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/RwKLGaL`)

:::

## Drop shadow

To achieve a drop shadow that follows any potential curves of an image, use the CSS `drop-shadow` filter. This shadow is applied to an alpha mask which makes it very useful for adding a shadow to a cutout image, as in the case in the intro of this module.

```css
.my-image {
  filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 30%))
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/eYgGdvm`)

:::

:::info

We cover CSS [filters](https://web.dev/learn/css/filters) in another module, but in short, filters allow you to apply multiple graphical effects to the pixels of an element.

:::

The `drop-shadow` filter has the same values as `box-shadow` **but** the `inset` keyword and `spread` value are not allowed. You can add as many shadows as you like, by adding multiple instances of `drop-shadow` values to the `filter` property. Each shadow will use the last shadow as a positioning reference point.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/vYgeXmW`)

:::

### Check your understanding

Test your knowledge of shadows

## Check your understanding

**Question 1.**

Which shadow value below is unique to `box-shadow`?

- Horizontal offset
- Vertical offset
- Blur radius
- Spread radius
- Color
- `inset`

<details><summary>Show answer</summary><p><strong>Spread radius</strong>: 🎉</p></details>

**Question 2.**

Only 13 box shadows allowed on an element at once.

- True
- False

<details><summary>Show answer</summary><p><strong>False</strong>: Add as many multiple box shadows as you need.</p></details>
