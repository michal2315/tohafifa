---
title: "sass:map"
sidebar_position: 14
mdx:
  format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

:::info[Source]

Adapted from [sass:map](https://sass-lang.com/documentation/modules/map/) by the Sass team, Sass documentation, licensed under [MIT](https://github.com/sass/sass-site/blob/main/LICENSE). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

:::tip[Fun fact:]

Sass libraries and design systems tend to share and override configurations that are represented as nested maps (maps that contain maps that contain maps).

To help you work with nested maps, some map functions support deep operations. For example, if you pass multiple keys to `map.get()`, it will follow those keys to find the desired nested map:

**SCSS**

```scss
@use "sass:map";

$config: (a: (b: (c: d)));
@debug map.get($config, a, b, c); // d
```

:::

:::tip

```scss
map.deep-merge($map1, $map2) //=> map
```

Identical to `map.merge()`, except that nested map values are *also* recursively merged.

**SCSS**

```scss
@use "sass:map";

$helvetica-light: (
  "weights": (
    "lightest": 100,
    "light": 300
  )
);
$helvetica-heavy: (
  "weights": (
    "medium": 500,
    "bold": 700
  )
);

@debug map.deep-merge($helvetica-light, $helvetica-heavy);
// (
//   "weights": (
//     "lightest": 100,
//     "light": 300,
//     "medium": 500,
//     "bold": 700
//   )
// )
@debug map.merge($helvetica-light, $helvetica-heavy);
// (
//   "weights": (
//     "medium: 500,
//     "bold": 700
//   )
// )
```

:::

:::tip

```scss
map.deep-remove($map, $key, $keys...) //=> map
```

If `$keys` is empty, returns a copy of `$map` without a value associated with `$key`.

**SCSS**

```scss
@use "sass:map";

$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.deep-remove($font-weights, "regular");
// ("medium": 500, "bold": 700)
```

* * *

If `$keys` is not empty, follows the set of keys including `$key` and excluding the last key in `$keys`, from left to right, to find the nested map targeted for updating.

Returns a copy of `$map` where the targeted map does not have a value associated with the last key in `$keys`.

**SCSS**

```scss
@use "sass:map";

$fonts: (
  "Helvetica": (
    "weights": (
      "regular": 400,
      "medium": 500,
      "bold": 700
    )
  )
);

@debug map.deep-remove($fonts, "Helvetica", "weights", "regular");
// (
//   "Helvetica": (
//     "weights: (
//       "medium": 500,
//       "bold": 700
//     )
//   )
// )
```

:::

:::tip

```scss
map.get($map, $key, $keys...)
map-get($map, $key, $keys...)
```

If `$keys` is empty, returns the value in `$map` associated with `$key`.

If `$map` doesn’t have a value associated with `$key`, returns [`null`](https://sass-lang.com/documentation/values/null).

**SCSS**

```scss
@use "sass:map";
$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.get($font-weights, "medium"); // 500
@debug map.get($font-weights, "extra-bold"); // null
```

* * *

If `$keys` is not empty, follows the set of keys including `$key` and excluding the last key in `$keys`, from left to right, to find the nested map targeted for searching.

Returns the value in the targeted map associated with the last key in `$keys`.

Returns [`null`](https://sass-lang.com/documentation/values/null) if the map does not have a value associated with the key, or if any key in `$keys` is missing from a map or references a value that is not a map.

**SCSS**

```scss
@use "sass:map";

$fonts: (
  "Helvetica": (
    "weights": (
      "regular": 400,
      "medium": 500,
      "bold": 700
    )
  )
);

@debug map.get($fonts, "Helvetica", "weights", "regular"); // 400
@debug map.get($fonts, "Helvetica", "colors"); // null
```

:::

:::tip

```scss
map.has-key($map, $key, $keys...)
map-has-key($map, $key, $keys...) //=> boolean
```

If `$keys` is empty, returns whether `$map` contains a value associated with `$key`.

**SCSS**

```scss
@use "sass:map";

$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.has-key($font-weights, "regular"); // true
@debug map.has-key($font-weights, "bolder"); // false
```

* * *

If `$keys` is not empty, follows the set of keys including `$key` and excluding the last key in `$keys`, from left to right, to find the nested map targeted for searching.

Returns true if the targeted map contains a value associated with the last key in `$keys`.

Returns false if it does not, or if any key in `$keys` is missing from a map or references a value that is not a map.

**SCSS**

```scss
@use "sass:map";

$fonts: (
  "Helvetica": (
    "weights": (
      "regular": 400,
      "medium": 500,
      "bold": 700
    )
  )
);

@debug map.has-key($fonts, "Helvetica", "weights", "regular"); // true
@debug map.has-key($fonts, "Helvetica", "colors"); // false
```

:::

:::tip

```scss
map.keys($map)
map-keys($map) //=> list
```

Returns a comma-separated list of all the keys in `$map`.

**SCSS**

```scss
@use "sass:map";

$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.keys($font-weights); // "regular", "medium", "bold"
```

:::

:::tip

```scss
map.merge($map1, $map2)
map-merge($map1, $map2)
map.merge($map1, $keys..., $map2)
map-merge($map1, $keys..., $map2) //=> map
```

### ⚠️ Heads up!

In practice, the actual arguments to `map.merge($map1, $keys..., $map2)` are passed as `map.merge($map1, $args...)`. They are described here as `$map1, $keys..., $map2` for explanation purposes only.

If no `$keys` are passed, returns a new map with all the keys and values from both `$map1` and `$map2`.

If both `$map1` and `$map2` have the same key, `$map2`’s value takes precedence.

All keys in the returned map that also appear in `$map1` have the same order as in `$map1`. New keys from `$map2` appear at the end of the map.

**SCSS**

```scss
@use "sass:map";

$light-weights: ("lightest": 100, "light": 300);
$heavy-weights: ("medium": 500, "bold": 700);

@debug map.merge($light-weights, $heavy-weights);
// ("lightest": 100, "light": 300, "medium": 500, "bold": 700)
```

* * *

If `$keys` is not empty, follows the `$keys` to find the nested map targeted for merging. If any key in `$keys` is missing from a map or references a value that is not a map, sets the value at that key to an empty map.

Returns a copy of `$map1` where the targeted map is replaced by a new map that contains all the keys and values from both the targeted map and `$map2`.

**SCSS**

```scss
@use "sass:map";

$fonts: (
  "Helvetica": (
    "weights": (
      "lightest": 100,
      "light": 300
    )
  )
);
$heavy-weights: ("medium": 500, "bold": 700);

@debug map.merge($fonts, "Helvetica", "weights", $heavy-weights);
// (
//   "Helvetica": (
//     "weights": (
//       "lightest": 100,
//       "light": 300,
//       "medium": 500,
//       "bold": 700
//     )
//   )
// )
```

:::

:::tip

```scss
map.remove($map, $keys...)
map-remove($map, $keys...) //=> map
```

Returns a copy of `$map` without any values associated with `$keys`.

If a key in `$keys` doesn’t have an associated value in `$map`, it’s ignored.

**SCSS**

```scss
@use "sass:map";

$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.remove($font-weights, "regular"); // ("medium": 500, "bold": 700)
@debug map.remove($font-weights, "regular", "bold"); // ("medium": 500)
@debug map.remove($font-weights, "bolder");
// ("regular": 400, "medium": 500, "bold": 700)
```

:::

:::tip

```scss
map.set($map, $key, $value)
map.set($map, $keys..., $key, $value) //=> map
```

### ⚠️ Heads up!

In practice, the actual arguments to `map.set($map, $keys..., $key, $value)` are passed as `map.set($map, $args...)`. They are described here as `$map, $keys..., $key, $value` for explanation purposes only.

If `$keys` are not passed, returns a copy of `$map` with the value at `$key` set to `$value`.

**SCSS**

```scss
@use "sass:map";

$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.set($font-weights, "regular", 300);
// ("regular": 300, "medium": 500, "bold": 700)
```

* * *

If `$keys` are passed, follows the `$keys` to find the nested map targeted for updating. If any key in `$keys` is missing from a map or references a value that is not a map, sets the value at that key to an empty map.

Returns a copy of `$map` with the targeted map’s value at `$key` set to `$value`.

**SCSS**

```scss
@use "sass:map";

$fonts: (
  "Helvetica": (
    "weights": (
      "regular": 400,
      "medium": 500,
      "bold": 700
    )
  )
);

@debug map.set($fonts, "Helvetica", "weights", "regular", 300);
// (
//   "Helvetica": (
//     "weights": (
//       "regular": 300,
//       "medium": 500,
//       "bold": 700
//     )
//   )
// )
```

:::

:::tip

```scss
map.values($map)
map-values($map) //=> list
```

Returns a comma-separated list of all the values in `$map`.

**SCSS**

```scss
@use "sass:map";

$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.values($font-weights); // 400, 500, 700
```

:::

:::warning

- Current Releases:
- [Dart Sass](https://sass-lang.com/dart-sass) [1.108.1](https://github.com/sass/dart-sass/releases/tag/1.108.1)
- [LibSass](https://sass-lang.com/libsass) ⚰
- [Ruby Sass](https://sass-lang.com/ruby-sass) ⚰
- [Implementation Guide](https://sass-lang.com/implementation)

:::
