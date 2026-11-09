---
title: "Using CSS custom properties (variables)"
sidebar_position: 3
mdx:
  format: md
tags: [required]
---

**Required reading**

> **Trainer note:** Needed for design tokens and dark mode.

:::info[Source]

Adapted from [Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) by Mozilla Contributors, MDN Web Docs, licensed under [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed. This adapted page is shared under the same license.

:::

**Custom properties** (sometimes referred to as **CSS variables** or **cascading variables**) are entities defined by CSS authors that represent specific values to be reused throughout a document. They are set using the [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property) at-rule or by [custom property syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/--*) (e.g., **`--primary-color: blue;`**). Custom properties are accessed using the CSS [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/var) function (e.g., **`color: var(--primary-color);`**).

Complex websites have very large amounts of CSS, and this often results in a lot of repeated CSS values. For example, it's common to see the same color used in hundreds of different places in stylesheets. Changing a color that's been duplicated in many places requires a search and replace across all rules and CSS files. Custom properties allow a value to be defined in one place, then referenced in multiple other places so that it's easier to work with. Another benefit is readability and semantics. For example, `--main-text-color` is easier to understand than the hexadecimal color `#00ff00`, especially if the color is used in different contexts.

Custom properties defined [using two dashes (`--`)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/--*) are subject to the [cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Introduction) and inherit their value from their parent. The [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property) at-rule allows more control over the custom property and lets you specify whether it inherits its value from a parent, what the initial value is, and the type constraints that should apply.

:::note

Variables do not work inside media queries and container queries. You can use the [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/var) function in any part of a value in any property on an element. You cannot use [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/var) for property names, selectors, or anything aside from property values, which means you can't use it in a media query or container query.

:::

## Declaring custom properties

In CSS, you can declare a custom property using two dashes as a prefix for the property name, or by using the [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property) at-rule. The following sections describe how to use these two methods.

### Using a prefix of two dashes (`--`)

A custom property prefixed with two dashes begins with `--`, followed by the property name (e.g., `--my-property`), and a property value that can be any [valid CSS value](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units). Like any other property, this is written inside a ruleset. The following example shows how to create a custom property `--main-bg-color` and uses a [`<named-color>`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color) value of `brown`:

```css
section {
  --main-bg-color: brown;
}
```

The selector given to the ruleset ([`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section) elements in the example above) defines the scope in which the custom property can be used. For this reason, a common practice is to define custom properties on the [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:root) pseudo-class, so that it can be referenced globally:

```css
:root {
  --main-bg-color: brown;
}
```

This doesn't always have to be the case: you maybe have a good reason for limiting the scope of your custom properties.

:::note

Custom property names are case sensitive — `--my-color` will be treated as a separate custom property to `--My-color`.

:::

### Using the `@property` at-rule

The [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property) at-rule allows you to be more expressive with the definition of a custom property with the ability to associate a type with the property, set default values, and control inheritance. The following example creates a custom property called `--logo-color` which expects a [`<color>`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value):

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

If you want to define or work with custom properties in JavaScript instead of directly in CSS, there is a corresponding API for this purpose. You can read about how this works in the [CSS Properties and Values API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API) page.

### Referencing custom properties with `var()`

Regardless of which method you choose to define a custom property, you use them by referencing the property in a [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/var) function in place of a standard property value:

```css
details {
  background-color: var(--main-bg-color);
}
```

## First steps with custom properties

Let's start with some HTML that we would like to apply some styles to. There is a `<div>` that acts as a container that includes some child elements, some with nested elements:

```html
<div class="container">
  <div class="one">
    <p>One</p>
  </div>
  <div class="two">
    <p>Two</p>
    <div class="three">
      <p>Three</p>
    </div>
  </div>
  <input class="four" placeholder="Four" />
  <textarea class="five">Five</textarea>
</div>
```

We will use the following CSS to style a few different elements based on their classes (some layout rules are not shown below so we can focus on colors). Depending on their classes, we're giving elements `teal` or `pink` background colors:

```css
/* Set fonts, borders and padding */
body,
textarea,
::placeholder {
  font-family: sans-serif;
  color: white;
}

div,
input,
textarea {
  border: 2px black solid;
  padding: 4px;
  margin: 4px;
}

.container {
  display: grid;
  gap: 10px;
}
```

```css
/* For each class, set some colors */
.one {
  background-color: teal;
}

.two {
  color: black;
  background-color: pink;
}

.three {
  color: white;
  background-color: teal;
}

.four {
  background-color: teal;
}

.five {
  background-color: teal;
}
```

This produces the following result:

:::note[Live result not available offline]

The original page shows the rendered result here. Paste the code above into the playground to see it.

:::

There's an opportunity to use custom properties to replace repetitive values across these rules. After defining `--main-bg-color` in the `.container` scope and referencing its value in multiple places, the updated styles look like this:

```css
/* Define --main-bg-color here */
.container {
  --main-bg-color: teal;
}

/* For each class, set some colors */
.one {
  background-color: var(--main-bg-color);
}

.two {
  color: black;
  background-color: pink;
}

.three {
  color: white;
  background-color: var(--main-bg-color);
}

.four {
  background-color: var(--main-bg-color);
}

.five {
  background-color: var(--main-bg-color);
}
```

## Using the :root pseudo-class

For some CSS declarations, it is possible to declare this higher in the cascade and let CSS inheritance solve this problem. For non-trivial projects, this is not always possible. By declaring a custom property on the [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:root) pseudo-class and using it where needed throughout the document, a CSS author can reduce the need for repetition:

```css
/* Define --main-bg-color here */
:root {
  --main-bg-color: teal;
}

/* For each class, set some colors */
.one,
.three,
.four,
.five {
  background-color: var(--main-bg-color);
}

.two {
  color: black;
  background-color: pink;
}
```

This leads to the same result as the previous example, yet allows for one canonical declaration of the desired property value (`--main-bg-color: teal;`), which is very useful if you want to change the value across the entire project later.

## Inheritance of custom properties

A custom property defined using two dashes `--` instead of `@property` always inherits the value of its parent. This is demonstrated in the following example:

```html
<div class="one">
  <p>One</p>
  <div class="two">
    <p>Two</p>
    <div class="three"><p>Three</p></div>
    <div class="four"><p>Four</p></div>
  </div>
</div>
```

```css
div {
  color: black;
  font-family: sans-serif;
  width: 75%;
  height: 80%;
  margin: 4px;
  border: 2px black solid;
  display: inline-block;
}

p {
  margin: 0;
}

.one {
  height: 250px;
}

.two {
  color: white;
  height: 80%;
}

.three {
  color: black;
  height: 40%;
}

.four {
  color: white;
  height: 40%;
}
```

```css
div {
  background-color: var(--box-color);
}

.two {
  --box-color: teal;
}

.three {
  --box-color: pink;
}
```

:::note[Live result not available offline]

The original page shows the rendered result here. Paste the code above into the playground to see it.

:::

The results of `var(--box-color)` depending on inheritance are as follows:

- `class="one"`: *invalid value*, which is the default value of a custom property defined in this way
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (inherited from its parent)

One aspect of custom properties that the examples above demonstrate is that they don't behave exactly like variables in other programming languages. The value is computed where it is needed, not stored and reused in other places of a stylesheet. For instance, you cannot set a property's value and expect to retrieve the value in a sibling's descendant's rule. The property is only set for the matching selector and its descendants.

### Using `@property` to control inheritance

The `@property` at-rule lets you explicitly state whether the property inherits or not. The following example creates a custom property using the `@property` at-rule. Inheritance is disabled, there's a [`<color>`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value) data type defined, and an initial value of `teal`.

The parent element sets `--box-color` to a value of `green` and uses `--box-color` as a value for its background color. The child element also uses `background-color: var(--box-color)`, and we would expect it to have the color `green` if inheritance was enabled (or if it was defined using the double dash syntax).

```html
<div class="parent">
  <p>Parent element</p>
  <div class="child">
    <p>Child element with inheritance disabled for --box-color.</p>
  </div>
</div>
```

```css
div {
  color: white;
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
```

```css
@property --box-color {
  syntax: "<color>";
  inherits: false;
  initial-value: teal;
}

.parent {
  --box-color: green;
  background-color: var(--box-color);
}

.child {
  width: 80%;
  height: 40%;
  background-color: var(--box-color);
}
```

Because `inherits: false;` is set in the at-rule, and a value for the `--box-color` property is not declared within the `.child` scope, the initial value of `teal` is used instead of `green` that would have been inherited from the parent:

:::note[Live result not available offline]

The original page shows the rendered result here. Paste the code above into the playground to see it.

:::

## Custom property fallback values

You can define fallback values for custom properties using the `var()` function, and the `initial-value` of the `@property` at-rule.

:::note

Fallback values aren't used to fix compatibility issues for when CSS custom properties are not supported, as the fallback value won't help in this case. Fallbacks cover the case where the browser supports CSS custom properties and is able to use a different value if the desired variable isn't defined yet or has an invalid value.

:::

### Defining fallbacks in the `var()` function

Using the [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/var) function, you can define multiple **fallback values** when the given variable is not yet defined; this can be useful when working with [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) and [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM).

The first argument to the function is the name of the custom property. The second argument to the function is an optional fallback value, which is used as the substitution value when the referenced custom property is invalid. The function accepts two parameters, assigning everything following the first comma as the second parameter. If the second parameter is invalid, the fallback will fail. For example:

```css
.one {
  /* Red if --my-var is not defined */
  color: var(--my-var, red);
}

.two {
  /* pink if --my-var and --my-background are not defined */
  color: var(--my-var, var(--my-background, pink));
}

.three {
  /* Invalid: "--my-background, pink" */
  color: var(--my-var, --my-background, pink);
}
```

Including a custom property as a fallback, as seen in the second example above (`var(--my-var, var(--my-background, pink))`), is the correct way to provide more than one fallback with `var()`. You should be aware of the performance impact of this method, however, as it takes more time to parse through the nested variables.

:::note

The syntax of the fallback, like that of custom properties, allows commas. For example, `var(--foo, red, blue)` defines a fallback of `red, blue` — anything between the first comma and the end of the function is considered a fallback value.

:::

### Fallbacks using the `@property` initial value

Aside from using `var()`, the `initial-value` defined in the `@property` at-rule can be used as a fallback mechanism. In fact, we've already seen this in the `@property` inheritance section.

The following example sets an initial value of `--box-color` to `teal` using the `@property` at-rule. In the ruleset following the at-rule, we want to set `--box-color` to `pink`, but there's a typo in the value name. The same is true for the third `<div>` where we've used `2rem` for the custom property that's expecting a valid [`<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value). Both `2rem` and `peenk` are invalid color values, so the initial value of `teal` is applied:

```css
@property --box-color {
  syntax: "<color>";
  initial-value: teal;
  inherits: false;
}

.one {
  --box-color: pink;
  background-color: var(--box-color);
}

.two {
  --box-color: peenk;
  background-color: var(--box-color);
}

.three {
  --box-color: 2rem;
  background-color: var(--box-color);
}
```

```css
div {
  color: white;
  font-family: sans-serif;
  width: 100px;
  height: 100px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}

.one {
  color: black;
}
```

```html
<div class="one">
  <p>One</p>
</div>
<div class="two">
  <p>Two.</p>
</div>
<div class="three">
  <p>Three.</p>
</div>
```

:::note[Live result not available offline]

The original page shows the rendered result here. Paste the code above into the playground to see it.

:::

## Invalid custom properties

Each CSS property can be assigned a defined [set of values](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units). If you try to assign a value to a property that is outside its set of valid values, it's considered *invalid*.

When the browser encounters an invalid value for a regular CSS property (for example, a value of `16px` for the [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color) property), it discards the declaration, and elements are assigned the values that they would have had if the declaration did not exist. In the following example, we see what happens when a regular CSS declaration is invalid; `color: 16px;` is discarded and the previous `color: blue` rule is applied instead:

```html
<p>This paragraph is initially black.</p>
```

```css
p {
  font-weight: bold;
  color: blue;
}

p {
  /* oops, not a valid color */
  color: 16px;
}
```

:::note[Live result not available offline]

The original page shows the rendered result here. Paste the code above into the playground to see it.

:::

However, when the values of custom properties are parsed, the browser doesn't yet know where they will be used, so it must consider nearly all values as *valid*. Unfortunately, these valid values can be used, via the `var()` functional notation, in a context where they might not make sense. Properties and custom variables can lead to invalid CSS statements, leading to the concept of *valid at computed time*.

When the browser encounters an invalid `var()` substitution, then the [initial](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) or [inherited](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Inheritance) value of the property is used. This example is just like the last one, except we use a custom property.

The browser substitutes the value of `--text-color` in place of `var(--text-color)`, but `16px` is not a valid property value for [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color). After substitution, the property doesn't make sense, so the browser handles this situation in two steps:

1. Check if the property [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color) is inheritable. It is, but this `<p>` doesn't have any parent with the `color` property set. So we move on to the next step.
2. Set the value to its **default initial value**, which is black.

```html
<p>This paragraph is initially black.</p>
```

```css
:root {
  --text-color: 16px;
}

p {
  font-weight: bold;
  color: blue;
}

p {
  color: var(--text-color);
}
```

:::note[Live result not available offline]

The original page shows the rendered result here. Paste the code above into the playground to see it.

:::

For such cases, the `@property` at-rule can prevent unexpected results by allowing you to define the initial value of the property:

```html
<p>This paragraph is initially black.</p>
```

```css
@property --text-color {
  syntax: "<color>";
  inherits: false;
  initial-value: teal;
}

:root {
  --text-color: 16px;
}

p {
  font-weight: bold;
  color: blue;
}

p {
  color: var(--text-color);
}
```

:::note[Live result not available offline]

The original page shows the rendered result here. Paste the code above into the playground to see it.

:::

## Values in JavaScript

To use the values of custom properties in JavaScript, it is just like standard properties.

```javascript
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## See also

- [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property) at-rule
- [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/var)
- [CSS custom properties for cascading variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables) module
- [Custom property syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/--*)
- [CSS Properties and Values API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API)
