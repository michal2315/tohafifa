---
title: "Interaction"
sidebar_position: 28
format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

:::info[Source]

Adapted from [Interaction](https://web.dev/learn/design/interaction) by the web.dev authors (Google), web.dev, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

Small screen devices like mobile phones often have touchscreens. Large screen devices like laptops and desktop computers often come with hardware like a mouse or a trackpad. It's tempting to equate small screens with touch and large screens with pointers.

But the reality is more nuanced. Some laptops have touchscreen capabilities. Users can interact with either a touchscreen or a trackpad or both. Likewise it's possible to use an external keyboard or mouse with a touchscreen device like a tablet.

Instead of trying to infer the input mechanism from screen size, use media features in CSS.

## Pointer

You can test for three possible values with the `pointer` media feature: `none`, `coarse`, and `fine`.

If a browser reports a `pointer` value of `none` the user might be using a keyboard to interact with your website.

If a browser reports a `pointer` value of `coarse` it means the primary input mechanism isn't very accurate. A finger on a touchscreen is a coarse pointer.

If a browser reports a `pointer` value of `fine` it means the primary input mechanism is capable of fine-grained control. A mouse or stylus is a fine pointer.

You can adjust the size of your interface elements to suit the `pointer` value. Try visiting [this demo website](https://gui-challenges.web.app/settings/dist/) in different kinds of devices to see how the interface adapts.

In this example, buttons are made larger for coarse pointers:

```css
button {
  padding: 0.5em 1em;
}
@media (pointer: coarse) {
  button {
    padding: 1em 2em;
  }
}
```

It's possible to also make elements smaller for fine pointers but be careful about doing this:

Don't

```css
@media (pointer: fine) {
  button {
    padding: 0.25em 0.5em;
  }
}
```

Even if someone has a primary input mechanism capable of fine-grained control, think twice before reducing the size of interactive elements. [Fitts's Law](https://en.wikipedia.org/wiki/Fitts's_law) still applies. A smaller target requires more concentration even with a fine pointer. A larger target area benefits everyone regardless of pointing device.

## Any pointer

The `pointer` media feature reports the fineness of the *primary* input mechanism. But many devices have more than one input mechanism. It's possible that someone is interacting with your website using both a touchscreen and a mouse at the same time.

The `any-pointer` differs from the `pointer` media feature in that it reports if any pointing device passes the test.

An `any-pointer` value of `none` means that no pointing device is available.

An `any-pointer` value of `coarse` means that at least one pointing device is not very accurate. But that might not be the primary input mechanism.

An `any-pointer` value of `fine` means that at least one pointing device is capable of fine-grained control. But again, this might not be the primary input mechanism.

Because the `any-pointer` media query will report a positive result if *any* of the input mechanisms pass the test, it's possible for a browser to report a result for `any-pointer: fine` and also report a result for `any-pointer: coarse`. In that case the order of your media queries matters. The last one will take precedence.

In this example, if the device has both a fine and a coarse input mechanism, the coarse styles are applied.

```css
@media (any-pointer: fine) {
  button {
    padding: 0.5em 1em;
  }
}
@media (any-pointer: coarse) {
  button {
    padding: 1em 2em;
  }
}
```

## Hover

The `hover` media feature reports on whether the primary input mechanism can hover over elements. This usually means there's some kind of cursor on the screen being controlled by a mouse or a trackpad.

Unlike the `pointer` media feature which differentiates between fine and coarse pointers, the `hover` media feature is binary. If the primary input device is capable of hovering over elements it will report a value of `hover`. Otherwise the value is `none`.

In this example, some supplementary icon is available on hover but only if the primary input device is capable of hovering over an element.

```css
button .extra {
  visibility: visible;
}
@media (hover: hover) {
  button .extra {
    visibility: hidden;
  }
  button:hover .extra {
    visibility: visible;
  }
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/VwMrYav`)

:::

If you use your mouse to hover over that button, the icon will appear. But if you use your keyboard to tab to the button, the icon remains invisible. When you use the keyboard, you're focusing rather than hovering. A desktop device with a mouse attached will report that the primary input mechanism is capable of hovering, which is true. But anyone using a keyboard while a mouse is attached won't get the benefit of the `:hover` styles. So it's a good idea to combine `:hover` and `:focus` styles to cover both interactions.

```transact
button .extra {
  visibility: visible;
}
@media (hover: hover) {
  button .extra {
    visibility: hidden;
  }
  button:is(:hover, :focus) .extra {
    visibility: visible;
  }
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/LYzOEZE`)

:::

Even if the primary input device is capable of hovering over elements, be careful about hiding information behind a hover interaction. The information becomes less discoverable. Don't use hover to hide important information or an important interface element.

## Any hover

The `hover` media query only reports on the *primary* input mechanism. Some devices have multiple input mechanisms: touchscreen, mouse, keyboard, trackpad.

Just as `any-pointer` reports on any of the input mechanisms, `any-hover` will be true if any of the available input mechanisms are capable of hovering over elements.

If you decided to reverse the logic in the previous example, you could make the hover styles the default and then remove them if `any-hover` has a value of `none`.

```css
button .extra {
  visibility: hidden;
}
button:hover .extra,
button:focus .extra {
  visibility: visible;
}
@media (any-hover: none) {
  button .extra {
    visibility: visible;
  }
}
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/Bawmyzd`)

:::

On a device that has no input mechanism capable of hovering, the extra icon is always visible.

## Virtual keyboards

People use cursors and fingers to explore interfaces but when it comes time to enter information, they need a keyboard. That's fine if there's a physical keyboard attached to their device, but if they're using a touchscreen device it's a little more complicated. These devices provide on-screen virtual keyboards.

### Input types

Unlike a physical keyboard, virtual keyboards can be tailored to match the expected input. If you provide information about the expected input, devices can serve up the most appropriate virtual keyboard.

[HTML5 input types](https://developer.mozilla.org/docs/Learn/Forms/HTML5_input_types) are a great way of describing your `input` elements. The `type` attribute accepts values such as `email`, `number`, `tel`, `url`, and more.

  ```html
  <label for="email">Email</label>
  <input type="email" id="email">
```

  ```html
  <label for="number">Number</label>
  <input type="number" id="number">
```

  ```html
  <label for="tel">Tel</label>
  <input type="tel" id="tel">
```

  ```html
  <label for="url">URL</label>
  <input type="url" id="url">
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/zYEPxBX`)

:::

<video controls="" style="max-width:100%"><source src="./img/28-interaction/xdbqHZ1fp2O8FpwXWQAH.mp4" type="video/mp4"></video>

### Input modes

[The `inputmode` attribute](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode) gives you fine-grained control over virtual keyboards. For example, whereas there's one `input` `type` with a value of `number`, you can use the `inputmode` attribute to differentiate between whole numbers and decimals.

If you're asking for a whole number, like somebody's age, use `inputmode="numeric"`.

```html
<label for="age">Age</label>
<input type="number" id="age" inputmode="numeric">
```

If you're asking for a number that includes decimal places, like a price, use `inputmode="decimal"`.

```html
<label for="price">Price</label>
<input type="number" id="price" inputmode="decimal">
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/mdBqyrO`)

:::

<video controls="" style="max-width:100%"><source src="./img/28-interaction/gr0tQXIZDgRNFcExwN8W.mp4" type="video/mp4"></video>

### Autocomplete

Nobody likes filling in forms. As a designer, you can improve the experience for your users by enabling them to automatically fill in form fields. [The `autocomplete` attribute](https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete) provides you with a host of options for improving contact forms, log-in forms, and checkout forms.

```html
<label for="name">Name</label>
<input type="text" id="name" autocomplete="name">
```

```html
<label for="country">Country</label>
<input type="text" id="country" autocomplete="country">
```

```html
<label for="email">Email</label>
<input type="email" id="email" autocomplete="email">
```

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/oNGogYX`)

:::

<video controls="" style="max-width:100%"><source src="./img/28-interaction/6CvIrXjmzMbXX4CNuzCe.mp4" type="video/mp4"></video>

These HTML attributes—`type`, `inputmode`, and `autocomplete`—are small additions to your form fields, but they can make a big difference to the user experience. By anticipating and responding to your user's device capabilities, you are empowering your users. For more in-depth information, there's a course dedicated to helping you [learn forms](https://web.dev/learn/forms).

Next up in this course, it's time to examine some [common interface patterns](https://web.dev/learn/design/ui-patterns).

### Check your understanding

Test your knowledge of interactions

## Check your understanding

**Question 1.**

Which feature should you use rather than trying to infer a user's input type from screen size?

- CSS media features
- Ask the user with JavaScript's `prompt()`
- CSS media type `handheld`

<details><summary>Show answer</summary><p><strong>CSS media features</strong>: Like <code translate="no" dir="ltr">@media (pointer: coarse)</code> or <code translate="no" dir="ltr">@media (-any-pointer: coarse)</code></p></details>

**Question 2.**

What is the difference between `@media (pointer)` and `@media (any-pointer)`?

- Any pointer includes things like your finger as a pointer.
- Pointers don't include things like a mouse.
- Any pointer will report true when additional, non-primary inputs, like a stylus, pass the test.

<details><summary>Show answer</summary><p><strong>Any pointer will report true when additional, non-primary inputs, like a stylus, pass the test.</strong>: <code translate="no" dir="ltr">any-pointer</code> queries all device input types for any match.</p></details>

**Question 3.**

Which input types show a more appropriate virtual keyboard for users?

- `type="url"`
- `type="tel"`
- `type="number"`
- `type="email"`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">type="url"</code></strong>: Keyboard will offer buttons to support typing URLs.</p></details>
