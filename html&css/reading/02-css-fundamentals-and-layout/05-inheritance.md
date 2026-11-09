---
title: "Inheritance"
sidebar_position: 5
format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Inheritance](https://web.dev/learn/css/inheritance) by the web.dev authors (Google), web.dev, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

Say you just wrote some CSS to make elements look like a button.

```html
<a href="http://example.com" class="my-button">I am a button link</a>
```

```css
.my-button {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  background: pink;
  font: inherit;
  text-align: center;
}
```

You then add a link element to an article of content, with a `class` value of `.my-button`. However there's an issue, the text is not the color that you expected it to be. How did this happen?

Some CSS properties inherit if you don't specify a value for them. In the case of this button, it **inherited** the `color` from this CSS:

```css
article a {
  color: maroon;
}
```

In this lesson you'll learn why that happens and how inheritance is a powerful feature to help you write less CSS.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/zYNGEbg`)

:::

## Inheritance flow

Take a look at how inheritance works, using this snippet of HTML:

```html
<html>
  <body>
    <article>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
  </body>
</html>
```

The root element (`<html>`) won't inherit anything because it's the first element in the document. Add some CSS on the HTML element, and it starts to cascade down the document.

```css
html {
  color: lightslategray;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/JjEKgBX`)

:::

The `color` property is inherited by default by other elements. The `html` element has `color: lightslategray`, therefore all elements that can inherit color will now have a color of `lightslategray`.

```css
body {
  font-size: 1.2em;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/VwPLrLP`)

:::

:::note

Because this demo sets the font size on the `body` element, the `html` element's font size is still the initial size set by the browser (the user agent stylesheet). The `article` and `p` elements inherit the font size declared for `body`, as inherentence only cascades downwards.

:::

```css
p {
  font-style: italic;
}
```

Only the `<p>` has italic text, because it's the deepest nested element. Inheritance only flows downwards, not back up to parent elements.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/JjEKgmK`)

:::

## Which properties are inherited by default?

Here is the entire list of properties that are inherited by default, taken from the W3 reference of all CSS properties:

- [azimuth](https://developer.mozilla.org/docs/Web/SVG/Attribute/azimuth)
- [border-collapse](https://developer.mozilla.org/docs/Web/CSS/border-collapse)
- [border-spacing](https://developer.mozilla.org/docs/Web/CSS/border-spacing)
- [caption-side](https://developer.mozilla.org/docs/Web/CSS/caption-side)
- [color](https://developer.mozilla.org/docs/Web/CSS/color)
- [cursor](https://developer.mozilla.org/docs/Web/CSS/cursor)
- [direction](https://developer.mozilla.org/docs/Web/CSS/direction)
- [empty-cells](https://developer.mozilla.org/docs/Web/CSS/empty-cells)
- [font-family](https://developer.mozilla.org/docs/Web/CSS/font-family)
- [font-size](https://developer.mozilla.org/docs/Web/CSS/font-size)
- [font-style](https://developer.mozilla.org/docs/Web/CSS/font-style)
- [font-variant](https://developer.mozilla.org/docs/Web/CSS/font-variant)
- [font-weight](https://developer.mozilla.org/docs/Web/CSS/font-weight)
- [font](https://developer.mozilla.org/docs/Web/CSS/font)
- [letter-spacing](https://developer.mozilla.org/docs/Web/CSS/letter-spacing)
- [line-height](https://developer.mozilla.org/docs/Web/CSS/line-height)
- [list-style-image](https://developer.mozilla.org/docs/Web/CSS/list-style-image)
- [list-style-position](https://developer.mozilla.org/docs/Web/CSS/list-style-position)
- [list-style-type](https://developer.mozilla.org/docs/Web/CSS/list-style-type)
- [list-style](https://developer.mozilla.org/docs/Web/CSS/list-style)
- [orphans](https://developer.mozilla.org/docs/Web/CSS/orphans)
- [quotes](https://developer.mozilla.org/docs/Web/CSS/quotes)
- [text-align](https://developer.mozilla.org/docs/Web/CSS/text-align)
- [text-indent](https://developer.mozilla.org/docs/Web/CSS/text-indent)
- [text-transform](https://developer.mozilla.org/docs/Web/CSS/text-transform)
- [visibility](https://developer.mozilla.org/docs/Web/CSS/visibility)
- [white-space](https://developer.mozilla.org/docs/Web/CSS/white-space)
- [widows](https://developer.mozilla.org/docs/Web/CSS/widows)
- [word-spacing](https://developer.mozilla.org/docs/Web/CSS/word-spacing)

Other CSS properties are not inherited by default.

## How inheritance works

Every HTML element has every CSS property defined by default with an initial value. An initial value is a property that's not inherited and shows up as a default if the cascade fails to calculate a value for that element.

*\[Video not available offline\]*

Properties that can be inherited cascade downwards, and child elements get a computed value which represents its parent's value. This means that if a parent has `font-weight` set to `bold`, all child elements will be bold, unless:

- The child element has set a `font-weight` that's a different value.
- The user agent stylesheet defines a `font-weight` for that element.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/xxgGPOZ`)

:::

## Explicitly inherit and control inheritance

Inheritance can affect elements in unexpected ways.

### The `inherit` keyword

You can make any property inherit its parent's computed value with the `inherit` keyword. A useful way to use this keyword is to create exceptions.

```css
strong {
  font-weight: 900;
}
```

This CSS snippet sets all `<strong>` elements to have a `font-weight` of `900`, instead of the default `bold` value, which would be the equivalent of `font-weight: 700`.

```css
.my-component {
  font-weight: 500;
}
```

The `.my-component` class sets `font-weight` to `500` instead. To make the `<strong>` elements inside `.my-component` also `font-weight: 500` add:

```css
.my-component strong {
  font-weight: inherit;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/eYgNedO`)

:::

Now, the `<strong>` elements inside `.my-component` have a `font-weight` of `500`.

You could explicitly set this value, but if you use `inherit` and the CSS of `.my-component` changes in the future, you can guarantee that your `<strong>` element automatically stays up to date with it.

### The `initial` keyword

Inheritance can cause problems with your elements and `initial` provides you with a powerful reset option.

You learned earlier that every property has a default value in CSS. The `initial` keyword sets a property back to that initial, default value.

```css
aside strong {
  font-weight: initial;
}
```

This snippet removes the bold weight from all `<strong>` elements inside an `<aside>` element and sets the weight to the initial value.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/OJWVORZ`)

:::

### The `unset` keyword

The `unset` property behaves differently if a property is inherited by default or not. If a property is inherited by default, the `unset` keyword is the same as `inherit`. If the property is not inherited by default, the `unset` keyword is equal to `initial`.

Remembering which CSS properties are inherited by default can be hard, `unset` can be helpful in that context. For example, `color` is inherited by default, but `margin` isn't, so you can write this:

```css
/* Global color styles for paragraph in authored CSS */
p {
  margin-top: 2em;
  color: goldenrod;
}

/* The p needs to be reset in asides, so you can use unset */
aside p {
  margin: unset;
  color: unset;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/JjEdpjw`)

:::

Now, the `margin` is removed and `color` reverts back to being the inherited computed value.

You can use the `unset` value with the `all` property, too. Going back to the previous example, what happens if the global `p` styles get an additional few properties? Only the rule that was set for `margin` and `color` applies.

```css
/* Global color styles for paragraph in authored CSS */
p {
    margin-top: 2em;
    color: goldenrod;
    padding: 2em;
    border: 1px solid;
}

/* Not all properties are accounted for anymore */
aside p {
    margin: unset;
    color: unset;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/bGgdLNB`)

:::

If you change the `aside p` rule to `all: unset` instead, it doesn't matter what global styles are applied to `p` in the future, they will always be unset.

```css
aside p {
    margin: unset;
    color: unset;
    all: unset;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/XWpbZbB`)

:::

### The `revert` keyword

As you learned in the lesson on [the cascade](./03-the-cascade.md), styles come from different origins: user agent base styles, user preference styles, and your authored styles. The `revert` keyword undoes styles that are set in the same origin that the `revert` keyword is used.

:::note[Interactive demo not available offline]

An embedded demo was here and is not available offline.

:::

This is useful when you've set a style, but don't want it to apply in some instances. While `inherit`, `initial`, and `unset` specify how to compute a style's value, `revert` only specifies that other styles you wrote don't apply.

```css
p {
  padding: 2em;
}

aside p {
  padding: revert;
}
```

This snippet gives `<p>` elements a padding, but when the `<p>` element is inside an `<aside>`, it doesn't specify a `padding` at all. Instead, it reverts to a user preference style (if one is set) or the user agent base styles.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/empMbZy`)

:::

### The `revert-layer` keyword

Cascade layers provide a useful way to organize and prioritize your styles, within the author origin of the cascade. The `revert-layer` keyword is similar to `revert`. While `revert` specifies that none of your author styles should be applied to a property, `revert-layer` only hides the styles for the current layer.

:::note[Interactive demo not available offline]

An embedded demo was here and is not available offline.

:::

If you use a third-party library, a useful pattern is to import the library into a layer, and add any overrides into a higher priority layer. You can remove an override using `revert-layer`, and your site will use the library's defaults instead.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/vELyddM`)

:::

If no other layers specify a value for the property, the property will behave like `revert`, and use a value from an earlier origin.

### Check your understanding

Test your knowledge of inheritance

## Check your understanding

**Question 1.**

Which of the following properties are inherited by default?

- `animation`
- `font-size`
- `color`
- `text-align`
- `line-height`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">font-size</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">color</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">text-align</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">line-height</code></strong>: 🎉</p></details>

**Question 2.**

Which value behaves like `inherit` unless there is nothing to inherit and then behaves like `initial`?

- `reset`
- `unset`
- `superset`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">unset</code></strong>: 🎉</p></details>

## Resources

- [MDN reference on computed values](https://developer.mozilla.org/docs/Web/CSS/computed_value)
- [An article on how inheritance can be useful in modular front-ends](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/)
