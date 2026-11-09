---
title: "Overflow"
sidebar_position: 14
mdx:
  format: mdx
tags: [required]
---

**Required reading**

> **Trainer note:** Relevant for the horizontally scrolling stories strip.

:::info[Source]

Adapted from [Overflow](https://web.dev/learn/css/overflow) by the web.dev authors (Google), web.dev, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

When content extends beyond its parent, there are many options for how you can handle it. You can scroll to add additional space, clip the overflowing edges, indicate the cut-off with an ellipsis, and so much more. Overflow is especially important to consider when developing for phone applications and multiple screen sizes.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/LYjEjWZ`)

:::

There are two different clipping options in CSS; `text-overflow` will help with individual lines of text, and the `overflow` properties will help control overflow in the box model.

## Single line overflow with `text-overflow`

Use the [`text-overflow`](https://developer.mozilla.org/docs/Web/CSS/text-overflow) property on any element that contains text node(s), for example a paragraph, `<p>`. It specifies how the text appears when it doesn't fit in the available space of the element. All viewable HTML text on a page is in [text nodes](https://developer.mozilla.org/docs/Web/API/Text). To use `text-overflow` you need a single unwrapped line of text, so you must also set `overflow` to `hidden` and have a `white-space` value that prevents wrapping.

```css
p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/rNwQXyN`)

:::

## Using overflow properties

Overflow properties are set on an element to control what happens when its children need more space than it has available. This can be intentional, like in an interactive map like Google Maps, where a user pans around a large image clipped to a specific size. It can also be unintentional like in a chat application where the user types a lengthy message that doesn't fit in the text bubble.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/KKvwvXE`)

:::

You can think of the overflow in two parts. The parent element has a firmly constrained space that won't change. You can think of this as a window. The child elements are content that want more space from the parent. You can think of this as what you are looking through the window at. Managing overflow will help guide how the window frames this content.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/xxrmxOm`)

:::

### Scrolling on the vertical and horizontal axis

The `overflow-y` property controls physical overflow along the vertical axis of the device viewport, therefore scrolling up and down.

The `overflow-x` property controls overflow along the horizontal axis of the device viewport, therefore scrolling left and right.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/YzQdzoG`)

:::

### Logical properties for scroll direction

The [`overflow-inline`](https://developer.mozilla.org/docs/Web/CSS/overflow-inline) and [`overflow-block`](https://developer.mozilla.org/docs/Web/CSS/overflow-block) properties set the overflow based on the document direction and writing mode.

### The `overflow` shorthand

The [`overflow`](https://developer.mozilla.org/docs/Web/CSS/overflow) shorthand sets both `overflow-x` and `overflow-y` styles in one line:

```css
overflow: hidden scroll;
```

If two keywords are specified, the first applies to `overflow-x` and the second to `overflow-y`. Otherwise, both `overflow-x` and `overflow-y` use the same value.

#### Values

Take a closer look at the [values and keywords](https://developer.mozilla.org/docs/Web/CSS/overflow#values) available for the `overflow` properties.

`overflow: visible` (default)

Without setting the property, `overflow: visible` is the default value for the web. This ensures that content is never unintentionally hidden and follows the core tenets of "never hide content" or "safe layouts of precise layouts".

`overflow: hidden`

With `overflow: hidden` content is clipped in the specified direction, and no scrollbars are provided to show it.

`overflow: scroll`

`overflow: scroll` enables scrollbars to allow users to scroll through content. Even if content isn't overflowing, scrollbars will be present. This is a great way to reduce future layout shift if a container may be scrollable in the future based, for example, on resize, and visually prepare the user for scrollable areas.

`overflow: clip`

Like `overflow: hidden`, the content with `overflow: clip` is clipped to the element's padding box. The difference between `clip` and `hidden` is that the `clip` keyword also forbids all scrolling, including programmatic scrolling.

`overflow: auto`

Finally, the value most commonly used, `overflow: auto`. This respects the user's preferences and shows scrollbars if needed, but hides them by default, and gives responsibility for scrolling to the user and browser.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/gORZaaa`)

:::

:::note

Using the `overflow` property with a value other than `visible` creates a [block formatting context](https://developer.mozilla.org/docs/Web/Guide/CSS/Block_formatting_context).

:::

## Scrolling and overflow

Many of these `overflow` behaviors introduce a scrollbar, but there's a few specific scroll behaviors and properties that can help you control scrolling on your overflow container.

### Scrolling and accessibility

It's important to make sure that the scrollable area can accept focus so that a keyboard user can tab to the box, then use the arrow keys to scroll.

To allow a scrolling box to accept focus add `tabindex="0"`, a name with the [`aria-labelledby`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute, and an appropriate `role` attribute. For example:

```html
<div tabindex="0" role="region" aria-labelledby="id-of-descriptive-text">
    content
</div>
```

CSS can then be used to indicate that the box has focus, using the `outline` property to give a visual clue that it will now be scrollable.

In [Using CSS to Enforce Accessibility](https://adrianroselli.com/2021/06/using-css-to-enforce-accessibility.html) Adrian Roselli demonstrates how CSS can help prevent accessibility regressions. For example, to only turn on scrolling and add the focus indicator if the correct attributes are used. The following rules will only make the box scrollable if it has a `tabindex`, `aria-labelledby`, and `role` attribute.

```css
[role][aria-labelledby][tabindex] {
  overflow: auto;
}

[role][aria-labelledby][tabindex]:focus {
  outline: .1em solid blue;
}
```

### Scrollbar positioning within the box model

Scrollbars take up space within the padding box and can compete for space if `inline` and not `overlaid`. The [box model module](./01-box-model.md) expands more on this potential source of layout shift.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/BaReoEV`)

:::

### root-scroller versus implicit-scroller

You may notice that some scrollers have a pull-to-refresh behavior and other special behaviors, especially when developing for mobile and hybrid applications. This scroll behavior happens on the root scroller. There is only ever one root scroller on a page. By default, the [documentElement](https://developer.mozilla.org/docs/Web/API/Document/documentElement) is the page's root scroller, however, by changing which element is the root scroller, the special behaviors can be applied to scrollers other than the documentElement, we call this new scroller the implicit root scroller.

To create a root scroller, you can use something called *scroller promotion* by positioning a container as fixed, ensuring it covers the entire viewport and is z-index on top with a scroller. Experience a root scroller versus a nested implicit scroller [here](https://cdpn.io/web-dot-dev/debug/dyzPzwz).

<video controls style={{maxWidth: '100%'}} src={require('./img/14-overflow/sn1cOusFy18gRkZroAET.mp4').default} />

*The video shows a root scroller with bounce behavior and new styling features,
compared to scrolling an implicit scroller with no enhanced scroll behavior.*

### Styling your scrollbar

You can style your scrollbar to incorporate it into your site's design. `scrollbar-color` sets the color for the scrollbar's thumb and gutter.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/JoYLQgZ`)

:::

To change the width of the scrollbar, use `scrollbar-width`. You can't set this to an arbitrary length, but you can specify that you want a `thin` scrollbar or `none`.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/vENRqoP`)

:::

### scroll-behavior

`scroll-behavior` lets you opt into browser-controlled scrolling to elements. This lets you specify how in-page navigation like `.scrollTo()` or links are handled.

This is especially useful when used with [prefers-reduced-motion](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-motion) to specify scroll behavior based on user preference.

```css
@media (prefers-reduced-motion: no-preference) {
  .scroll-view {
    scroll-behavior: auto;
  }
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/oNwJgae`)

:::

### overscroll-behavior

If you've ever reached the end of a modal overlay, then continued scrolling and had the page behind the overlay move, this is the scroll chaining, or bubbling up to the parent scroll container. The [`overscroll-behavior`](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior) property lets you prevent overflow scrolling leaking into a parent container (called scroll chaining).

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/powqJQe`)

:::

## Scroll snapping

:::note[Interactive demo not available offline]

An embedded demo was here and is not available offline.

:::

Scrolling generally is smooth, allowing you to position the content within the [scrollport](https://developer.mozilla.org/docs/Glossary/Scroll_container#scrollport) wherever you want. For some designs, like image galleries or content that emulates pages or slides, you may want to make the content snap to the scrollport.

### Setting up the scroll container

To enable scroll snapping, add the `scroll-snap-type` to the scroll container. You'll first define which axis the scroll snapping will happen on. This can be a logical property (`block` or `inline`), a physical property (`x` or `y`), or `both`.

You can also define how strict scroll snapping should be. The default strictness is `proximity`, which means that the scroll container will try to snap if possible. You can also set the strictness to `mandatory` to make sure that the scroll container will always snap.

```css
.scroll-container {
    scroll-snap-type: block mandatory;
}
```

:::note

When using `mandatory` scroll snapping strictness, it is possible to create inaccessible content between snap positions. Carefully test your content on a variety of screen sizes to make sure things stay accessible.

:::

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/vENRqwb`)

:::

Scroll snapping aligns an element within the full bounds of the scroll container, but what happens if part of the scroll container is not visible? For example, you might have a fixed header overlaying part of the scroll container. To help align the snapped elements to the visible portion of the scroll container, you can set `scroll-padding`.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/PwPRrvM`)

:::

### Controlling the snappable elements

To make an element snappable, set the `scroll-snap-align` property to `start`, `end` or `center`. If the scroll snap direction is `both`, you can set two values. This sets whether an edge of the element will align with the scrollport's edge, or if it will be centered.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/wBKmLLB`)

:::

You can adjust the spacing around the edges of the snapped element with `scroll-margin`:

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/pvjLXXN`)

:::

`scroll-margin` also is used to set the padding when scrolling to an element:

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/azvYggq`)

:::

To make the scrolling more sticky, you can add `scroll-snap-stop: always` to an item in a scroll container. It does not prevent you from scrolling past multiple items in a single scroll. If you end a scrolling motion in a way that the scroll would continue with inertia, the scroll will end at the next snap position, instead of continuing past.

### Check your understanding

## Check your understanding

**Question 1.**

Text overflow and element overflow are the same?

- true
- false

<details><summary>Show answer</summary><p><strong>false</strong>: Text overflow is generally about inline overflow, where element overflow is about block overflow.</p></details>

**Question 2.**

The `overflow` property accepts 2 keywords, the first keyword is for which axis?

- horizontal
- vertical

<details><summary>Show answer</summary><p><strong>horizontal</strong>: 🎉</p></details>

**Question 3.**

Which space in the box model do scrollbars consume when showing and inline?

- content box
- padding box
- border box
- margin box

<details><summary>Show answer</summary><p><strong>padding box</strong>: Scrollbars in <code translate="no" dir="ltr">overlay</code> mode will overlap the padding, and when in <code translate="no" dir="ltr">inline</code> mode will add to the padding.</p></details>

**Question 4.**

To trap extra momentum from scrolling in a nested implicit scroller, which property would you use?

- `scroll-behavior`
- `scroll-hint`
- `overscroll-behavior`
- `scroll-padding`
- `overscroll-effect`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">overscroll-behavior</code></strong>: Setting this property to <code translate="no" dir="ltr">contain</code> will trap scrolling.</p></details>

**Question 5.**

What value declares that a scroll container must stop at a snapped element if possible?

- `required`
- `mandatory`
- `0px`
- `proximity`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">mandatory</code></strong>: Correct!</p></details>

**Question 6.**

What are valid values for `scrollbar-width`?

- `5px`
- `thin`
- `medium`
- `none`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">thin</code></strong>: Correct!</p><p><strong><code translate="no" dir="ltr">none</code></strong>: Correct!</p></details>

## Resources

[Overflow And Data Loss In CSS from Smashing Magazine](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
