---
title: "@import"
sidebar_position: 7
format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

> **Trainer note:** Read only the deprecation warning at the top. We use @use, never @import.

:::info[Source]

Adapted from [@import](https://sass-lang.com/documentation/at-rules/import/) by the Sass team, Sass documentation, licensed under [MIT](https://github.com/sass/sass-site/blob/main/LICENSE). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

Sass extends CSS’s [`@import` rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) with the ability to import Sass and CSS stylesheets, providing access to [mixins](./08-mixin.md), [functions](./09-function.md), and [variables](./04-variables.md) and combining multiple stylesheets’ CSS together. Unlike plain CSS imports, which require the browser to make multiple HTTP requests as it renders your page, Sass imports are handled entirely during compilation.

Sass imports have the same syntax as CSS imports, except that they allow multiple imports to be separated by commas rather than requiring each one to have its own `@import`. Also, in the [indented syntax](https://sass-lang.com/documentation/syntax#the-indented-syntax), imported URLs aren’t required to have quotes.

:::warning[Heads up!]

As of Dart Sass 1.80.0, the `@import` rule is [deprecated](https://sass-lang.com/documentation/breaking-changes/import) and will be removed from the language in Dart Sass 3.0.0. Prefer the [`@use` rule](./05-use.md) instead.

####

What’s Wrong With `@import`?

The `@import` rule has a number of serious issues:

- `@import` makes all variables, mixins, and functions globally accessible. This makes it very difficult for people (or tools) to tell where anything is defined.

- Because everything’s global, libraries must add a prefix to all their members to avoid naming collisions.

- [`@extend` rules](./10-extend.md) are also global, which makes it difficult to predict which style rules will be extended.

- Each stylesheet is executed and its CSS emitted *every time* it’s `@import`ed, which increases compilation time and produces bloated output.

- There was no way to define private members or placeholder selectors that were inaccessible to downstream stylesheets.


The new module system and the `@use` rule address all these problems.

####

How Do I Migrate?

We’ve written a [migration tool](https://sass-lang.com/documentation/cli/migrator) that automatically converts most `@import`\-based code to `@use`\-based code in a flash. Just point it at your entrypoints and let it run!

:::

**SCSS**

```scss
// foundation/_code.scss
code {
  padding: .25em;
  line-height: 0;
}
```

```scss
// foundation/_lists.scss
ul, ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}
```

```scss
// style.scss
@import 'foundation/code', 'foundation/lists';
```

**CSS output**

```css
code {
  padding: .25em;
  line-height: 0;
}

ul, ol {
  text-align: left;
}
ul ul, ol ol {
  padding-bottom: 0;
  padding-left: 0;
}
```

When Sass imports a file, that file is evaluated as though its contents appeared directly in place of the `@import`. Any [mixins](./08-mixin.md), [functions](./09-function.md), and [variables](./04-variables.md) from the imported file are made available, and all its CSS is included at the exact point where the `@import` was written. What’s more, any mixins, functions, or variables that were defined before the `@import` (including from other `@import`s) are available in the imported stylesheet.

:::warning[Heads up!]

If the same stylesheet is imported more than once, it will be evaluated again each time. If it just defines functions and mixins, this usually isn’t a big deal, but if it contains style rules they’ll be compiled to CSS more than once.

:::

## Finding the File

It wouldn’t be any fun to write out absolute URLs for every stylesheet you import, so Sass’s algorithm for finding a file to import makes it a little easier. For starters, you don’t have to explicitly write out the extension of the file you want to import; `@import "variables"` will automatically load `variables.scss`, `variables.sass`, or `variables.css`.

:::warning[Heads up!]

To ensure that stylesheets work on every operating system, Sass imports files by *URL*, not by *file path*. This means you need to use forward slashes, not backslashes, even when you’re on Windows.

:::

### Load Paths

All Sass implementations allow users to provide *load paths*: paths on the filesystem that Sass will look in when resolving imports. For example, if you pass `node_modules/susy/sass` as a load path, you can use `@import "susy"` to load `node_modules/susy/sass/susy.scss`.

Imports will always be resolved relative to the current file first, though. Load paths will only be used if no relative file exists that matches the import. This ensures that you can’t accidentally mess up your relative imports when you add a new library.

:::tip[Fun fact:]

Unlike some other languages, Sass doesn’t require that you use `./` for relative imports. Relative imports are always available.

:::

### Partials

As a convention, Sass files that are only meant to be imported, not compiled on their own, begin with `_` (as in `_code.scss`). These are called *partials*, and they tell Sass tools not to try to compile those files on their own. You can leave off the `_` when importing a partial.

### Index Files

If you write an `_index.scss` or `_index.sass` in a folder, when the folder itself is imported that file will be loaded in its place.

**SCSS**

```scss
// foundation/_code.scss
code {
  padding: .25em;
  line-height: 0;
}
```

```scss
// foundation/_lists.scss
ul, ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}
```

```scss
// foundation/_index.scss
@import 'code', 'lists';
```

```scss
// style.scss
@import 'foundation';
```

**CSS output**

```css
code {
  padding: .25em;
  line-height: 0;
}

ul, ol {
  text-align: left;
}
ul ul, ol ol {
  padding-bottom: 0;
  padding-left: 0;
}
```

### Custom Importers

All Sass implementations provide a way to define custom importers, which control how `@import`s locate stylesheets:

- [Node Sass](https://npmjs.com/package/node-sass) and [Dart Sass on npm](https://npmjs.com/package/sass) provide an [`importer` option](https://github.com/sass/node-sass#importer--v200---experimental) as part of their JS API.

- [Dart Sass on pub](https://pub.dartlang.org/packages/sass) provides an abstract [`Importer` class](https://pub.dartlang.org/documentation/sass/latest/sass/Importer-class.html) that can be extended by a custom importer.

- [Ruby Sass](https://sass-lang.com/ruby-sass) provides an abstract [`Importers::Base` class](https://www.rubydoc.info/gems/sass/Sass/Importers/Base) that can be extended by a custom importer.


## Nesting

Imports are usually written at the top level of a stylesheet, but they don’t have to be. They can nested within [style rules](./02-style-rules.md) or [plain CSS at-rules](https://sass-lang.com/documentation/at-rules/css) as well. The imported CSS is nested in that context, which makes nested imports useful for scoping a chunk of CSS to a particular element or media query. Top-level [mixins](./08-mixin.md), [functions](./09-function.md), and [variables](./04-variables.md) defined in the nested import are only available in the nested context.

**SCSS**

```scss
// _theme.scss
pre, code {
  font-family: 'Source Code Pro', Helvetica, Arial;
  border-radius: 4px;
}
```

```scss
// style.scss
.theme-sample {
  @import "theme";
}
```

**CSS output**

```css
.theme-sample pre, .theme-sample code {
  font-family: 'Source Code Pro', Helvetica, Arial;
  border-radius: 4px;
}
```

:::tip[Fun fact:]

Nested imports are very useful for scoping third-party stylesheets, but if you’re the author of the stylesheet you’re importing, it’s usually a better idea to write your styles in a [mixin](./08-mixin.md) and include that mixin in the nested context. A mixin can be used in more flexible ways, and it’s clearer when looking at the imported stylesheet how it’s intended to be used.

:::

:::warning[Heads up!]

The CSS in nested imports is evaluated like a mixin, which means that any [parent selectors](./03-parent-selector.md) will refer to the selector in which the stylesheet is nested.

**SCSS**

```scss
// _theme.scss
ul li {
  $padding: 16px;
  padding-left: $padding;
  [dir=rtl] & {
    padding: {
      left: 0;
      right: $padding;
    }
  }
}
```

```scss
// style.scss
.theme-sample {
  @import "theme";
}
```

**CSS output**

```css
.theme-sample ul li {
  padding-left: 16px;
}
[dir=rtl] .theme-sample ul li {
  padding-left: 0;
  padding-right: 16px;
}
```

:::

## Importing CSS

In addition to importing `.sass` and `.scss` files, Sass can import plain old `.css` files. The only rule is that the import *must not* explicitly include the `.css` extension, because that’s used to indicate a plain CSS `@import`.

**SCSS**

```scss
// code.css
code {
  padding: .25em;
  line-height: 0;
}
```

```scss
// style.scss
@import 'code';
```

**CSS output**

```css
code {
  padding: .25em;
  line-height: 0;
}
```

CSS files imported by Sass don’t allow any special Sass features. In order to make sure authors don’t accidentally write Sass in their CSS, all Sass features that aren’t also valid CSS will produce errors. Otherwise, the CSS will be rendered as-is. It can even be [extended](./10-extend.md)!

## Plain CSS `@import`s

Because `@import` is also defined in CSS, Sass needs a way of compiling plain CSS `@import`s without trying to import the files at compile time. To accomplish this, and to ensure SCSS is as much of a superset of CSS as possible, Sass will compile any `@import`s with the following characteristics to plain CSS imports:

- Imports where the URL ends with `.css`.
- Imports where the URL begins `http://` or `https://`.
- Imports where the URL is written as a `url()`.
- Imports that have media queries.

**SCSS**

```scss
@import "theme.css";
@import "http://fonts.googleapis.com/css?family=Droid+Sans";
@import url(theme);
@import "landscape" screen and (orientation: landscape);
```

**CSS output**

```css
@import "theme.css";
@import "http://fonts.googleapis.com/css?family=Droid+Sans";
@import url(theme);
@import "landscape" screen and (orientation: landscape);
```

### Interpolation

Although Sass imports can’t use [interpolation](./16-interpolation.md) (to make sure it’s always possible to tell where [mixins](./08-mixin.md), [functions](./09-function.md), and [variables](./04-variables.md) come from), plain CSS imports can. This makes it possible to dynamically generate imports, for example based on mixin parameters.

**SCSS**

```scss
@mixin google-font($family) {
  @import url("http://fonts.googleapis.com/css?family=#{$family}");
}

@include google-font("Droid Sans");
```

**CSS output**

```css
@import url("http://fonts.googleapis.com/css?family=Droid Sans");
```

## Import and Modules

Sass’s [module system](./05-use.md) integrates seamlessly with `@import`, whether you’re importing a file that contains `@use` rules or loading a file that contains imports as a module. We want to make the transition from `@import` to `@use` as smooth as possible.

### Importing a Module-System File

When you import a file that contains `@use` rules, the importing file has access to all members (even private members) defined directly in that file, but *not* any members from modules that file has loaded. However, if that file contains [`@forward` rules](./06-forward.md), the importing file will have access to forwarded members. This means that you can import a library that was written to be used with the module system.

:::warning[Heads up!]

When a file with `@use` rules is imported, all the CSS transitively loaded by those is included in the resulting stylesheet, even if it’s already been included by another import. If you’re not careful, this can result in bloated CSS output!

:::

#### Import-Only Files

An API that makes sense for `@use` might not make sense for `@import`. For example, `@use` adds a namespace to all members by default so you can safely use short names, but `@import` doesn’t so you might need something longer. If you’re a library author, you may be concerned that if you update your library to use the new module system, your existing `@import`\-based users will break.

To make this easier, Sass also supports *import-only files*. If you name a file `<name>.import.scss`, it will only be loaded for imports, not for `@use`s. This way, you can retain compatibility for `@import` users while still providing a nice API for users of the new module system.

**SCSS**

```scss
// _reset.scss

// Module system users write `@include reset.list()`.
@mixin list() {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
```

```scss
// _reset.import.scss

// Legacy import users can keep writing `@include reset-list()`.
@forward "reset" as reset-*;
```

#### Configuring Modules Through Imports

You can [configure modules](./05-use.md) that are loaded through an `@import` by defining global variables prior the `@import` that first loads that module.

**SCSS**

```scss
// _library.scss
$color: blue !default;

a {
  color: $color;
}
```

```scss
// _library.import.scss
@forward 'library' as lib-*;
```

```scss
// style.sass
$lib-color: green;
@import "library";
```

**CSS output**

```css
a {
  color: green;
}
```

:::warning[Heads up!]

Modules are only loaded once, so if you change the configuration after you `@import` a module for the first time (even indirectly), the change will be ignored if you `@import` the module again.

:::

### Loading a Module That Contains Imports

When you use `@use` (or `@forward`) load a module that uses `@import`, that module will contain all the public members defined by the stylesheet you load *and* everything that stylesheet transitively imports. In other words, everything that’s imported is treated as though it were written in one big stylesheet.

This makes it easy to convert start using `@use` in a stylesheet even before all the libraries you depend on have converted to the new module system. Be aware, though, that if they do convert their APIs may well change!

## Differences From `@use`

The `@use` rule is intended to replace the old [`@import` rule](./07-import.md), but it’s intentionally designed to work differently. Here are some major differences between the two:

- `@use` only makes variables, functions, and mixins available within the scope of the current file. It never adds them to the global scope. This makes it easy to figure out where each name your Sass file references comes from, and means you can use shorter names without any risk of collision.

- `@use` only ever loads each file once. This ensures you don’t end up accidentally duplicating your dependencies’ CSS many times over.

- `@use` must appear at the beginning your file, and cannot be nested in style rules. Nested imports can be migrated to [mixin calls or `meta.load-css()`](https://sass-lang.com/documentation/breaking-changes/import/#nested-imports).

- Each `@use` rule can only have one URL.

- `@use` requires quotes around its URL, even when using the [indented syntax](https://sass-lang.com/documentation/syntax#the-indented-syntax).


:::warning

- Current Releases:
- [Dart Sass](https://sass-lang.com/dart-sass) [1.108.1](https://github.com/sass/dart-sass/releases/tag/1.108.1)
- [LibSass](https://sass-lang.com/libsass) ⚰
- [Ruby Sass](https://sass-lang.com/ruby-sass) ⚰
- [Implementation Guide](https://sass-lang.com/implementation)

:::
