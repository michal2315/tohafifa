---
title: "Pseudo-classes"
sidebar_position: 11
format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Pseudo-classes](https://web.dev/learn/css/pseudo-classes) by the web.dev authors (Google), web.dev, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

Say you've got an email sign up form, and you want the email form field to have a red border if it contains an invalid email address. How do you do that? You can use an `:invalid` CSS pseudo-class, which is one of many browser-provided pseudo-classes.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/QWdMGjE`)

:::

A pseudo-class lets you apply styles based on state changes and external factors. This means that your design can react to user input such as an invalid email address. These are covered in the [selectors](./02-selectors.md) module, and this module will take you through them in more detail.

Unlike pseudo-elements, which you can learn more about in the [previous module](./12-pseudo-elements.md), pseudo-*classes* hook onto specific *states* that an element might be in, rather than generally style parts of that element.

## Interactive states

The following pseudo-classes apply due to an interaction a user has with your page.

### `:hover`

If a user has a pointing device like a mouse or trackpad, and they place it over an element, you can hook on to that state with [`:hover`](https://developer.mozilla.org/docs/Web/CSS/:hover) to apply styles. This is a useful way to hint that an element can be interacted with.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/vYgJyNP`)

:::

### `:active`

This state is triggered when an element is actively being interacted with— such as a click—before click is released. If a pointing device like a mouse is used, this state is when the click starts and hasn't yet been released.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/YzNxpam`)

:::

### `:focus`, `:focus-within`, and `:focus-visible`

If an element can receive focus—like a `<button>`— you can react to that state with the [`:focus`](https://developer.mozilla.org/docs/Web/CSS/:focus) pseudo-class.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/WNREoyj`)

:::

You can also react if a child element of your element receives focus with [`:focus-within`](https://developer.mozilla.org/docs/Web/CSS/:focus-within).

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/mdRMOoV`)

:::

Focusable elements, like buttons, will show a focus ring when they are in focus—even when clicked. In this sort of situation, a developer will apply the following CSS:

```css
button:focus {
    outline: none;
}
```

This CSS removes the default browser focus ring when an element receives focus, which presents an accessibility issue for users who navigate a web page with a keyboard. If there is no focus style, they won't be able to keep track of where focus currently is when using the <kbd>tab</kbd> key. With [`:focus-visible`](https://developer.mozilla.org/docs/Web/CSS/:focus-visible) you can present a focus style when an element receives focus using the keyboard, while also using the `outline: none` rule to prevent it when a pointer device interacts with it.

```css
button:focus {
    outline: none;
}

button:focus-visible {
    outline: 1px solid black;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/qBRXRdW`)

:::

### `:target`

The [`:target`](https://developer.mozilla.org/docs/Web/CSS/:target) pseudo-class selects an element that has an `id` matching a URL fragment. Say you have the following HTML:

```html
<article id="content">
    <!-- ... -->
</article>
```

You can attach styles to that element when the URL contains `#content`.

```css
#content:target {
    background: yellow;
}
```

This is useful for highlighting areas that might have been specifically linked to, such as the main content on a website, using a skip link.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/KKavaqx`)

:::

## Historic states

### `:link`

The [`:link`](https://developer.mozilla.org/docs/Web/CSS/:link) pseudo-class can be applied to any `<a>` element that has a `href` value that **hasn't been** visited yet.

### `:visited`

You can style a link that's already been visited by the user using the [`:visited`](https://developer.mozilla.org/docs/Web/CSS/:visited) pseudo-class. This is the opposite state to `:link` but you have fewer CSS properties to use for [security reasons](https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector). You can only style `color`, `background-color`, `border-color`, `outline-color` and the color of SVG `fill` and `stroke`.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/OJWjmzM`)

:::

#### Order matters

If you define a `:visited` style, it can be overridden by a link pseudo-class with at least equal specificity. Because of this, it's recommended that you use the LVHA rule for styling links with pseudo-classes in a particular order: `:link`, `:visited`, `:hover`, `:active`.

```css
a:link {}
a:visited {}
a:hover {}
a:active {}
```

:::note

For security reasons, you can only change styles defined by a `:link` or unvisited state with the `:visited` pseudo-class, so making sure you define changeable styles first is important. Sticking to the LVHA rule will help with that.

:::

## Form states

The following pseudo-classes can select form elements, in the various states that these elements might be in during interaction with them.

### `:disabled` and `:enabled`

If a form element, such as a `<button>` is disabled by the browser, you can hook on to that state with the [`:disabled`](https://developer.mozilla.org/docs/Web/CSS/:disabled) pseudo-class. The [`:enabled`](https://developer.mozilla.org/docs/Web/CSS/:enabled) pseudo-class is available for the opposite state, though form elements are also `:enabled` by default, therefore you might not find yourself reaching for this pseudo-class.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/yLgogPG`)

:::

### `:checked` and `:indeterminate`

The [`:checked`](https://developer.mozilla.org/docs/Web/CSS/:checked) pseudo-class is available when a supporting form element, such as a checkbox or radio button is in a checked state.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/GRrvrxv`)

:::

The `:checked` state is a binary (true or false) state, but checkboxes do have an in-between state when they are neither checked or unchecked. This is known as the [`:indeterminate`](https://developer.mozilla.org/docs/Web/CSS/:indeterminate) state.

An example of this state is when you have a "select all" control that checks all checkboxes in a group. If the user was to then clear one of these checkboxes, the root checkbox would no longer represent "all" being checked, so should be put into an indeterminate state.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/NWdvdLB`)

:::

The `<progress>` element also has an indeterminate state that can be styled. A common use case is to give it a striped appearance to indicate it's unknown how much more is needed.

### `:placeholder-shown`

If a form field has a `placeholder` attribute and **no value**, the [`:placeholder-shown`](https://developer.mozilla.org/docs/Web/CSS/:placeholder-shown) pseudo-class can be used to attach styles to that state. As soon as there is content in the field, whether it has a `placeholder` or not, this state will no longer apply.

### Validation states

You can respond to HTML form validation with pseudo-classes such as [`:valid`](https://developer.mozilla.org/docs/Web/CSS/:valid), [`:invalid`](https://developer.mozilla.org/docs/Web/CSS/:invalid) and [`:in-range`](https://developer.mozilla.org/docs/Web/CSS/:in-range). The `:valid` and `:invalid` pseudo-classes are useful for contexts such as an email field that has a `pattern` that needs to be matched, for it to be a valid field. This valid value state can be shown to the user, helping them understand they can safely move to the next field.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/QWdMpaL`)

:::

The `:in-range` pseudo-class is available if an input has a `min` and `max`, such as a numeric input *and* the value is within those bounds.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/qBRXrpP`)

:::

With HTML forms, you can determine that a field is required with the `required` attribute. The [`:required`](https://developer.mozilla.org/docs/Web/CSS/:required) pseudo-class will be available for required fields. Fields that are not required can be selected with the [`:optional`](https://developer.mozilla.org/docs/Web/CSS/:optional) pseudo-class.

:::note

It's not a good idea to rely solely on color to signify state changes— especially red and green—because colorblind and low-vision users can struggle to see a state change, or even miss it completely. A good idea is to use color to support state changes, along with text changes and icon changes to visually signify change

:::

## Selecting elements by their index, order and occurrence

There is a group of pseudo-classes that select items based on where they are in the document.

### `:first-child` and `:last-child`

If you want to find the first or last item, you can use [`:first-child`](https://developer.mozilla.org/docs/Web/CSS/:first-child) and [`:last-child`](https://developer.mozilla.org/docs/Web/CSS/:last-child). These pseudo-classes will return either the first or last element in a group of sibling elements.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/YzNxZRO`)

:::

### `:only-child`

You can also select elements that have no siblings, with the [`:only-child`](https://developer.mozilla.org/docs/Web/CSS/:only-child) pseudo-class.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/dyNzvaj`)

:::

### `:first-of-type` and `:last-of-type`

You can select the [`:first-of-type`](https://developer.mozilla.org/docs/Web/CSS/:first-of-type) and [`:last-of-type`](https://developer.mozilla.org/docs/Web/CSS/:last-of-type) which at first, look like they do the same thing as `:first-child` and `:last-child`, but consider this HTML:

```html
<div class="my-parent">
    <p>A paragraph</p>
    <div>A div</div>
    <div>Another div</div>
</div>
```

And this CSS:

```css
.my-parent div:first-child {
    color: red;
}
```

No elements would be colored red because the first child is a paragraph and not a div. The `:first-of-type` pseudo-class is useful in this context.

```css
.my-parent div:first-of-type {
    color: red;
}
```

Even though the first `<div>` is the second child, it is still the first of type inside the `.my-parent` element, so with this rule, it will be colored red.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/poRreXE`)

:::

### `:nth-child()` and `:nth-of-type()`

You're not limited to first and last children and types either. The [`:nth-child()`](https://developer.mozilla.org/docs/Web/CSS/:nth-child) and [`:nth-of-type()`](https://developer.mozilla.org/docs/Web/CSS/:nth-of-type) pseudo-classes allow you to specify an element that is at a certain index. The indexing in CSS selectors starts at 1.

The `:nth-last-child()` and `:nth-last-of-type()` pseudo-classes count from the end, rather than the beginning.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/azvYrbg`)

:::

You can pass more than an index into these pseudo-classes too. If you wanted to select all even elements, you can use `:nth-child(even)`.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/wvgqdwv`)

:::

You can also create more complex selectors that find items at regularly spaced intervals, using [the An+B microsyntax](https://www.w3.org/TR/css-syntax-3/#anb-microsyntax).

```css
li:nth-child(3n+3) {
    background: yellow;
}
```

This selector selects every third item, starting at item 3. The `n` in this expression is the index, which starts at zero the 3 (`3n`) is how much you multiply that index by.

Say you have 7 `<li>` items. The first item that is selected is 3 because `3n+3` translates to `(3 * 0) + 3`. The next iteration would pick item 6 because `n` has now incremented to `1`, so `(3 * 1) + 3)`. This expression works for both `:nth-child()` and `:nth-of-type()`.

`:nth-child()` and `:nth-last-child()` also support an "of S" syntax that lets you filter the matches with a selector, similar to `:nth-of-type()`. `li:nth-of-type(even)` is equivalent to `:nth-child(even of li)`. While `:nth-of-type()` only lets you filter based on element type (like `li` or `p`), the "of S" syntax lets you filter on any selector.

:::note[Interactive demo not available offline]

An embedded demo was here and is not available offline.

:::

If you have a table, you may want to add stripes to every other row. While you can target every other row with`tr:nth-child(even)`, this doesn't work if you are filtering some rows out. If you implement filtering by applying the `hidden` attribute, you can add `of :not([hidden])` to the selector to pre-filter the hidden items out before selecting the even rows.

```css
tr:nth-child(even of :not([hidden])){
  background: lightgrey;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/KKBLGbd`)

:::

You can play around with this sort of selector on this [nth-child tester](https://css-tricks.com/examples/nth-child-tester/) or this [quantity selector tool](https://quantityqueries.com/).

### `:only-of-type`

Lastly, you can find the only element of a certain type in a group of siblings with [`:only-of-type`](https://developer.mozilla.org/docs/Web/CSS/:only-of-type). This is useful if you want to select lists with only one item, or if you want to find the only bold element in a paragraph.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/yLgobJb`)

:::

## Finding empty elements

It can sometimes be useful to identify completely empty elements, and there is a pseudo-class for that too.

### `:empty`

If an element has no children, the [`:empty`](https://developer.mozilla.org/docs/Web/CSS/:empty) pseudo-class applies to them. Children aren't just HTML elements or text nodes though: they can also be whitespace, which can be confusing when you're debugging the following HTML and wondering why it isn't working with `:empty`:

```html
<div>
</div>
```

The reason is that there's some whitespace between the opening and closing `<div>`, so `:empty` won't work.

The `:empty` pseudo-class can be useful if you have little control over the HTML and want to hide empty elements, such as a WYSIWYG content editor. Here, an editor has added a stray, empty paragraph.

```html
<article class="post">
 <p>Donec ullamcorper nulla non metus auctor fringilla.</p>
 <p></p>
 <p>Curabitur blandit tempus porttitor.</p>
</article>
```

With `:empty`, you can find that and hide it.

```css
.post :empty {
    display: none;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/VwPzbKg`)

:::

## Finding and excluding multiple elements

Some pseudo-classes help you to write more compact CSS.

### `:is()`

If you want to find all of the `h2`, `li` and `img` child elements in a `.post` element, you might think to write a selector list like this:

```css
.post h2,
.post li,
.post img {
    …
}
```

With the [`:is()`](https://developer.mozilla.org/docs/Web/CSS/:is) pseudo-class, you can write a more compact version:

```css
.post :is(h2, li, img) {
    /* ... */
}
```

The `:is` pseudo-class is not only more compact than a selector list but it is also more forgiving. In most cases, if there's an error or unsupported selector in a selector list, the entire selector list will no longer work. If there's an error in the passed selectors in an `:is` pseudo-class, it will ignore the invalid selector, but use those which are valid.

### `:not()`

You can also exclude items with the [`:not()`](https://developer.mozilla.org/docs/Web/CSS/:not) pseudo-class. For example, you can use it to style all links that don't have a `class` attribute.

```css
a:not([class]) {
    color: blue;
}
```

A `:not` pseudo-class can also help you to improve accessibility. For example, an `<img>` must have an `alt`, even if it's an empty value, so you could write a CSS rule that adds a thick red outline to invalid images:

```css
img:not([alt]) {
    outline: 10px red;
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/RNWMvwG`)

:::

### `:has()`

:::note[Interactive demo not available offline]

An embedded demo was here and is not available offline.

:::

What if you want to style elements based on what is contained inside of them? You can use the `:has()` pseudo-class to do that. For example, you might want to apply styles to buttons that include icons.

 ```css
 button:has(svg) {
  /* ... */
}
```

In its most basic configuration, like in the previous example, you can think of `:has()` as a parent selector. You can also use the matching parent selector combined with other selectors to target other elements.

```css
form:has(input:valid) label {
  font-weight: bold;
}

form:has(input:valid) label::after {
  content: "✅";
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/MYaVZMq`)

:::

In this example we are applying styles to the label element and the `label::after` pseudo-element when the form input has a `valid` pseudo-class.

The `:has()` pseudo-class cannot be nested inside of another `:has()`, but it can be combined with other pseudo-classes.

```css
:is(h1, h2, h3):has(a) {
   /* ... */
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/GgpxPVN`)

:::

The selector list is unforgiving, so if any selectors in the list are invalid, all style rules will be ignored.

```css
.my-element:has(img, ::before) {
  /* any styles here will be discarded since pseudo elements can't be included in the :has() selector list */
}
```

### Check your understanding

Test your knowledge of pseudo classes

## Check your understanding

**Question 1.**

Pseudo-classes act as if a class has been dynamically applied to an element, while pseudo-elements act on an element itself.

- True
- False

<details><summary>Show answer</summary><p><strong>True</strong>: Watch for the use of a single or double <code translate="no" dir="ltr">:</code> as a key distinguishing character in the selector</p></details>

**Question 2.**

Which of the following are a *functional* pseudo-class?

- `:is()`
- `:target`
- `:empty`
- `:not()`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">:is()</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">:not()</code></strong>: 🎉</p></details>

**Question 3.**

Which of the following pseudo-classes are due to a user-interaction?

- `:hover`
- `:press`
- `:squeeze`
- `:target`
- `:focus-within`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">:hover</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">:target</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">:focus-within</code></strong>: 🎉</p></details>

**Question 4.**

Which of the following are `<form>` state pseudo classes?

- `:enabled`
- `:fresh`
- `:indeterminate`
- `:checked`
- `:in-range`
- `:loading`
- `:valid`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">:enabled</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">:indeterminate</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">:checked</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">:in-range</code></strong>: 🎉</p><p><strong><code translate="no" dir="ltr">:valid</code></strong>: 🎉</p></details>
