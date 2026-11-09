---
title: "@each"
sidebar_position: 11
format: md
tags: [required]
---

**Required reading**

> **Trainer note:** Looping over token maps.

:::info[Source]

Adapted from [@each](https://sass-lang.com/documentation/at-rules/control/each/) by the Sass team, Sass documentation, licensed under [MIT](https://github.com/sass/sass-site/blob/main/LICENSE). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

The `@each` rule makes it easy to emit styles or evaluate code for each element of a [list](https://sass-lang.com/documentation/values/lists) or each pair in a [map](./12-maps.md). It’s great for repetitive styles that only have a few variations between them. It’s usually written `@each <variable> in <expression> { ... }`, where the [expression](https://sass-lang.com/documentation/syntax/structure#expressions) returns a list. The block is evaluated for each element of the list in turn, which is assigned to the given variable name.

**SCSS**

```scss
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}
```

**CSS output**

```css
.icon-40px {
  font-size: 40px;
  height: 40px;
  width: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
  width: 50px;
}

.icon-80px {
  font-size: 80px;
  height: 80px;
  width: 80px;
}
```

## With Maps

You can also use `@each` to iterate over every key/value pair in a map by writing it `@each <variable>, <variable> in <expression> { ... }`. The key is assigned to the first variable name, and the element is assigned to the second.

**SCSS**

```scss
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}
```

**CSS output**

```css
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f112";
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f12e";
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f12f";
}
```

## Destructuring

If you have a list of lists, you can use `@each` to automatically assign variables to each of the values from the inner lists by writing it `@each <variable...> in <expression> { ... }`. This is known as *destructuring*, since the variables match the structure of the inner lists. Each variable name is assigned to the value at the corresponding position in the list, or [`null`](https://sass-lang.com/documentation/values/null) if the list doesn’t have enough values.

**SCSS**

```scss
$icons:
  "eye" "\f112" 12px,
  "start" "\f12e" 16px,
  "stop" "\f12f" 10px;

@each $name, $glyph, $size in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
    font-size: $size;
  }
}
```

**CSS output**

```css
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f112";
  font-size: 12px;
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f12e";
  font-size: 16px;
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "\f12f";
  font-size: 10px;
}
```

:::tip[Fun fact:]

Because `@each` supports destructuring and [maps count as lists of lists](./12-maps.md), `@each`’s map support works without needing special support for maps in particular.

:::

:::warning

- Current Releases:
- [Dart Sass](https://sass-lang.com/dart-sass) [1.108.1](https://github.com/sass/dart-sass/releases/tag/1.108.1)
- [LibSass](https://sass-lang.com/libsass) ⚰
- [Ruby Sass](https://sass-lang.com/ruby-sass) ⚰
- [Implementation Guide](https://sass-lang.com/implementation)

:::
