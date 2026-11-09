---
title: "Parent Selector"
sidebar_position: 3
format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Parent Selector](https://sass-lang.com/documentation/style-rules/parent-selector/) by the Sass team, Sass documentation, licensed under [MIT](https://github.com/sass/sass-site/blob/main/LICENSE). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

The parent selector, `&`, is a special selector invented by Sass that’s used in [nested selectors](./02-style-rules.md) to refer to the outer selector. It makes it possible to re-use the outer selector in more complex ways, like adding a [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) or adding a selector *before* the parent.

When a parent selector is used in an inner selector, it’s replaced with the corresponding outer selector. This happens instead of the normal nesting behavior.

**SCSS**

```scss
.alert {
  // The parent selector can be used to add pseudo-classes to the outer
  // selector.
  &:hover {
    font-weight: bold;
  }

  // It can also be used to style the outer selector in a certain context, such
  // as a body set to use a right-to-left language.
  [dir=rtl] & {
    margin-left: 0;
    margin-right: 10px;
  }

  // You can even use it as an argument to pseudo-class selectors.
  :not(&) {
    opacity: 0.8;
  }
}
```

**CSS output**

```css
.alert:hover {
  font-weight: bold;
}
[dir=rtl] .alert {
  margin-left: 0;
  margin-right: 10px;
}
:not(.alert) {
  opacity: 0.8;
}
```

:::warning[Heads up!]

Because the parent selector could be replaced by a type selector like `h1`, it’s only allowed at the beginning of compound selectors where a type selector would also be allowed. For example, `span&` is not allowed.

We’re looking into loosening this restriction, though. If you’d like to help make that happen, check out [this GitHub issue](https://github.com/sass/sass/issues/1425).

:::

## Adding Suffixes

You can also use the parent selector to add extra suffixes to the outer selector. This is particularly useful when using a methodology like [BEM](http://getbem.com/) that uses highly structured class names. As long as the outer selector ends with an alphanumeric name (like class, ID, and element selectors), you can use the parent selector to append additional text.

**SCSS**

```scss
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```

**CSS output**

```css
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;
}
.accordion__copy {
  display: none;
  padding: 1rem 1.5rem 2rem 1.5rem;
  color: gray;
  line-height: 1.6;
  font-size: 14px;
  font-weight: 500;
}
.accordion__copy--open {
  display: block;
}
```

## Without Nesting

Just like in plain CSS, you can also use the parent selector outside of a nested rule. In this case, it’s emitted as plain CSS to be handled by the browser, which will interpret it as the [scoping root](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Nesting_selector#using_outside_nested_rule).

:::warning[Heads up!]

You can’t add a suffix to parent selectors that aren’t nested, because there’s nothing to apply the suffix to.

:::

**SCSS**

```scss
& {
  background-color: blue;
}
```

**CSS output**

```css
& {
  background-color: blue;
}
```

## In SassScript

The parent selector can also be used within SassScript. It’s a special expression that returns the current parent selector in the same format used by [selector functions](https://sass-lang.com/documentation/modules/selector#selector-values): a comma-separated list (the selector list) that contains space-separated lists (the complex selectors) that contain unquoted strings (the compound selectors).

**SCSS**

```scss
.main aside:hover,
.sidebar p {
  parent-selector: &;
  // => ((unquote(".main") unquote("aside:hover")),
  //     (unquote(".sidebar") unquote("p")))
}
```

**CSS output**

```css
.main aside:hover,
.sidebar p {
  parent-selector: .main aside:hover, .sidebar p;
}
```

If the `&` expression is used outside any style rules, it returns `null`. Since `null` is [falsey](./13-if.md), this means you can easily use it to determine whether a mixin is being called in a style rule or not.

**SCSS**

```scss
@mixin app-background($color) {
  #{if(sass(&): '&.app-background'; else: '.app-background')} {
    background-color: $color;
    color: rgba(#fff, 0.75);
  }
}

@include app-background(#036);

.sidebar {
  @include app-background(#c6538c);
}
```

**CSS output**

```css
.app-background {
  background-color: #036;
  color: rgba(255, 255, 255, 0.75);
}

.sidebar.app-background {
  background-color: #c6538c;
  color: rgba(255, 255, 255, 0.75);
}
```

### Advanced Nesting

You can use `&` as a normal SassScript expression, which means you can pass it to functions or include it in interpolation—even in other selectors! Using it in combination with [selector functions](https://sass-lang.com/documentation/modules/selector#selector-values) and the [`@at-root` rule](https://sass-lang.com/documentation/at-rules/at-root) allows you to nest selectors in very powerful ways.

For example, suppose you want to write a selector that matches the outer selector *and* an element selector. You could write a mixin like this one that uses the [`selector.unify()` function](https://sass-lang.com/documentation/modules/selector#unify) to combine `&` with a user’s selector.

**SCSS**

```scss
@use "sass:selector";

@mixin unify-parent($child) {
  @at-root #{selector.unify(&, $child)} {
    @content;
  }
}

.wrapper .field {
  @include unify-parent("input") {
    /* ... */
  }
  @include unify-parent("select") {
    /* ... */
  }
}
```

**CSS output**

```css
.wrapper input.field {
  /* ... */
}

.wrapper select.field {
  /* ... */
}
```

:::warning[Heads up!]

When Sass is nesting selectors, it doesn’t know what interpolation was used to generate them. This means it will automatically add the outer selector to the inner selector *even if* you used `&` as a SassScript expression. That’s why you need to explicitly use the [`@at-root` rule](https://sass-lang.com/documentation/at-rules/at-root) to tell Sass not to include the outer selector.

:::

:::warning

- Current Releases:
- [Dart Sass](https://sass-lang.com/dart-sass) [1.108.1](https://github.com/sass/dart-sass/releases/tag/1.108.1)
- [LibSass](https://sass-lang.com/libsass) ⚰
- [Ruby Sass](https://sass-lang.com/ruby-sass) ⚰
- [Implementation Guide](https://sass-lang.com/implementation)

:::
