---
title: "Interpolation"
sidebar_position: 16
format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

:::info[Source]

Adapted from [Interpolation](https://sass-lang.com/documentation/interpolation/) by the Sass team, Sass documentation, licensed under [MIT](https://github.com/sass/sass-site/blob/main/LICENSE). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

Interpolation can be used almost anywhere in a Sass stylesheet to embed the result of a [SassScript expression](https://sass-lang.com/documentation/syntax/structure#expressions) into a chunk of CSS. Just wrap an expression in `#{}` in any of the following places:

- [Selectors in style rules](./02-style-rules.md)
- [Property names in declarations](https://sass-lang.com/documentation/style-rules/declarations#interpolation)
- [Custom property values](https://sass-lang.com/documentation/style-rules/declarations#custom-properties)
- [CSS at-rules](https://sass-lang.com/documentation/at-rules/css)
- [`@extend`s](./10-extend.md)
- [Plain CSS `@import`s](./07-import.md)
- [Quoted or unquoted strings](https://sass-lang.com/documentation/values/strings)
- [Special functions](https://sass-lang.com/documentation/syntax/special-functions)
- [Plain CSS function names](./09-function.md)
- [Loud comments](https://sass-lang.com/documentation/syntax/comments)

**SCSS**

```scss
@mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name} {
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0;
    #{$left-or-right}: 0;
  }
}

@include corner-icon("mail", top, left);
```

**CSS output**

```css
.icon-mail {
  background-image: url("/icons/mail.svg");
  position: absolute;
  top: 0;
  left: 0;
}
```

## In SassScript

Interpolation can be used in SassScript to inject SassScript into [unquoted strings](https://sass-lang.com/documentation/values/strings#unquoted). This is particularly useful when dynamically generating names (for example for animations), or when using [slash-separated values](https://sass-lang.com/documentation/operators/numeric#slash-separated-values). Note that interpolation in SassScript always returns an unquoted string.

**SCSS**

```scss
@mixin inline-animation($duration) {
  $name: inline-#{unique-id()};

  @keyframes #{$name} {
    @content;
  }

  animation-name: $name;
  animation-duration: $duration;
  animation-iteration-count: infinite;
}

.pulse {
  @include inline-animation(2s) {
    from { background-color: yellow }
    to { background-color: red }
  }
}
```

**CSS output**

```css
.pulse {
  animation-name: inline-uifpe6h;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
@keyframes inline-uifpe6h {
  from {
    background-color: yellow;
  }
  to {
    background-color: red;
  }
}
```

:::tip[Fun fact:]

Interpolation is useful for injecting values into strings, but other than that it’s rarely necessary in SassScript expressions. You definitely *don’t* need it to just use a variable in a property value. Instead of writing `color: #{$accent}`, you can just write `color: $accent`!

:::

:::warning[Heads up!]

It’s almost always a bad idea to use interpolation with numbers. Interpolation returns unquoted strings that can’t be used for any further math, and it avoids Sass’s built-in safeguards to ensure that units are used correctly.

Sass has powerful [unit arithmetic](https://sass-lang.com/documentation/values/numbers#units) that you can use instead. For example, instead of writing `#{$width}px`, write `$width * 1px`—or better yet, declare the `$width` variable in terms of `px` to begin with. That way if `$width` already has units, you’ll get a nice error message instead of compiling bogus CSS.

:::

## Quoted Strings

In most cases, interpolation injects the exact same text that would be used if the expression were used as a [property value](https://sass-lang.com/documentation/style-rules/declarations). But there is one exception: the quotation marks around quoted strings are removed (even if those quoted strings are in lists). This makes it possible to write quoted strings that contain syntax that’s not allowed in SassScript (like selectors) and interpolate them into style rules.

**SCSS**

```scss
.example {
  unquoted: #{"string"};
}
```

**CSS output**

```css
.example {
  unquoted: string;
}
```

:::warning[Heads up!]

While it’s tempting to use this feature to convert quoted strings to unquoted strings, it’s a lot clearer to use the [`string.unquote()` function](https://sass-lang.com/documentation/modules/string#unquote). Instead of `#{$string}`, write `string.unquote($string)`!

:::

:::warning

- Current Releases:
- [Dart Sass](https://sass-lang.com/dart-sass) [1.108.1](https://github.com/sass/dart-sass/releases/tag/1.108.1)
- [LibSass](https://sass-lang.com/libsass) ⚰
- [Ruby Sass](https://sass-lang.com/ruby-sass) ⚰
- [Implementation Guide](https://sass-lang.com/implementation)

:::
