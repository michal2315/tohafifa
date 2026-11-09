---
title: "sass:math"
sidebar_position: 15
mdx:
  format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

> **Trainer note:** Mainly math.div().

:::info[Source]

Adapted from [sass:math](https://sass-lang.com/documentation/modules/math/) by the Sass team, Sass documentation, licensed under [MIT](https://github.com/sass/sass-site/blob/main/LICENSE). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

## Variables

:::tip

```scss
math.$e
```

The closest 64-bit floating point approximation of the [mathematical constant *e*](https://en.wikipedia.org/wiki/E_\(mathematical_constant\)).

**SCSS**

```scss
@use 'sass:math';

@debug math.$e; // 2.7182818285
```

:::

:::tip

```scss
math.$epsilon
```

The difference between 1 and the smallest 64-bit floating point number greater than 1 according to floating-point comparisons. Because of Sass numbers’ [10 digits of precision](https://sass-lang.com/documentation/values/numbers), in many cases this will appear to be 0.

:::

:::tip

```scss
math.$max-number
```

The maximum finite number that can be represented as a 64-bit floating point number.

**SCSS**

```scss
@use 'sass:math';

@debug math.$max-number; // 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```

:::

:::tip

```scss
math.$max-safe-integer
```

The maximum integer `n` such that both `n` and `n + 1` can be precisely represented as a 64-bit floating-point number.

**SCSS**

```scss
@use 'sass:math';

@debug math.$max-safe-integer; // 9007199254740991
```

:::

:::tip

```scss
math.$min-number
```

The smallest positive number that can be represented as a 64-bit floating point number. Because of Sass numbers’ [10 digits of precision](https://sass-lang.com/documentation/values/numbers), in many cases this will appear to be 0.

:::

:::tip

```scss
math.$min-safe-integer
```

The minimum integer `n` such that both `n` and `n - 1` can be precisely represented as a 64-bit floating-point number.

**SCSS**

```scss
@use 'sass:math';

@debug math.$min-safe-integer; // -9007199254740991
```

:::

:::tip

```scss
math.$pi
```

The closest 64-bit floating point approximation of the [mathematical constant *π*](https://en.wikipedia.org/wiki/Pi).

**SCSS**

```scss
@use 'sass:math';

@debug math.$pi; // 3.1415926536
```

:::

## Bounding Functions

:::tip

```scss
math.ceil($number)
ceil($number) //=> number
```

Rounds `$number` up to the next highest whole number.

**SCSS**

```scss
@use 'sass:math';

@debug math.ceil(4); // 4
@debug math.ceil(4.2); // 5
@debug math.ceil(4.9); // 5
```

:::

:::tip

```scss
math.clamp($min, $number, $max) //=> number
```

Restricts `$number` to the range between `$min` and `$max`. If `$number` is less than `$min` this returns `$min`, and if it’s greater than `$max` this returns `$max`.

`$min`, `$number`, and `$max` must have compatible units, or all be unitless.

**SCSS**

```scss
@use 'sass:math';

@debug math.clamp(-1, 0, 1); // 0
@debug math.clamp(1px, -1px, 10px); // 1px
@debug math.clamp(-1in, 1cm, 10mm); // 10mm
```

:::

:::tip

```scss
math.floor($number)
floor($number) //=> number
```

Rounds `$number` down to the next lowest whole number.

**SCSS**

```scss
@use 'sass:math';

@debug math.floor(4); // 4
@debug math.floor(4.2); // 4
@debug math.floor(4.9); // 4
```

:::

:::tip

```scss
math.max($number...)
max($number...) //=> number
```

Returns the highest of one or more numbers.

**SCSS**

```scss
@use 'sass:math';

@debug math.max(1px, 4px); // 4px

$widths: 50px, 30px, 100px;
@debug math.max($widths...); // 100px
```

:::

:::tip

```scss
math.min($number...)
min($number...) //=> number
```

Returns the lowest of one or more numbers.

**SCSS**

```scss
@use 'sass:math';

@debug math.min(1px, 4px); // 1px

$widths: 50px, 30px, 100px;
@debug math.min($widths...); // 30px
```

:::

:::tip

```scss
math.round($number)
round($number) //=> number
```

Rounds `$number` to the nearest whole number.

**SCSS**

```scss
@use 'sass:math';

@debug math.round(4); // 4
@debug math.round(4.2); // 4
@debug math.round(4.9); // 5
```

:::

## Distance Functions

:::tip

```scss
math.abs($number)
abs($number) //=> number
```

Returns the [absolute value](https://en.wikipedia.org/wiki/Absolute_value) of `$number`. If `$number` is negative, this returns `-$number`, and if `$number` is positive, it returns `$number` as-is.

**SCSS**

```scss
@use 'sass:math';

@debug math.abs(10px); // 10px
@debug math.abs(-10px); // 10px
```

:::

:::tip

```scss
math.hypot($number...) //=> number
```

Returns the length of the *n*\-dimensional [vector](https://en.wikipedia.org/wiki/Euclidean_vector) that has components equal to each `$number`. For example, for three numbers *a*, *b*, and *c*, this returns the square root of *a² + b² + c²*.

The numbers must either all have compatible units, or all be unitless. And since the numbers’ units may differ, the output takes the unit of the first number.

**SCSS**

```scss
@use 'sass:math';

@debug math.hypot(3, 4); // 5

$lengths: 1in, 10cm, 50px;
@debug math.hypot($lengths...); // 4.0952775683in
```

:::

## Exponential Functions

:::tip

```scss
math.log($number, $base: null) //=> number
```

Returns the [logarithm](https://en.wikipedia.org/wiki/Logarithm) of `$number` with respect to `$base`. If `$base` is `null`, the [natural log](https://en.wikipedia.org/wiki/Natural_logarithm) is calculated.

`$number` and `$base` must be unitless.

**SCSS**

```scss
@use 'sass:math';

@debug math.log(10); // 2.302585093
@debug math.log(10, 10); // 1
```

:::

:::tip

```scss
math.pow($base, $exponent) //=> number
```

Raises `$base` [to the power of](https://en.wikipedia.org/wiki/Exponentiation) `$exponent`.

`$base` and `$exponent` must be unitless.

**SCSS**

```scss
@use 'sass:math';

@debug math.pow(10, 2); // 100
@debug math.pow(100, math.div(1, 3)); // 4.6415888336
@debug math.pow(5, -2); // 0.04
```

:::

:::tip

```scss
math.sqrt($number) //=> number
```

Returns the [square root](https://en.wikipedia.org/wiki/Square_root) of `$number`.

`$number` must be unitless.

**SCSS**

```scss
@use 'sass:math';

@debug math.sqrt(100); // 10
@debug math.sqrt(math.div(1, 3)); // 0.5773502692
@debug math.sqrt(-1); // NaN
```

:::

## Trigonometric Functions

:::tip

```scss
math.cos($number) //=> number
```

Returns the [cosine](https://en.wikipedia.org/wiki/Trigonometric_functions#Right-angled_triangle_definitions) of `$number`.

`$number` must be an angle (its units must be compatible with `deg`) or unitless. If `$number` has no units, it is assumed to be in `rad`.

**SCSS**

```scss
@use 'sass:math';

@debug math.cos(100deg); // -0.1736481777
@debug math.cos(1rad); // 0.5403023059
@debug math.cos(1); // 0.5403023059
```

:::

:::tip

```scss
math.sin($number) //=> number
```

Returns the [sine](https://en.wikipedia.org/wiki/Trigonometric_functions#Right-angled_triangle_definitions) of `$number`.

`$number` must be an angle (its units must be compatible with `deg`) or unitless. If `$number` has no units, it is assumed to be in `rad`.

**SCSS**

```scss
@use 'sass:math';

@debug math.sin(100deg); // 0.984807753
@debug math.sin(1rad); // 0.8414709848
@debug math.sin(1); // 0.8414709848
```

:::

:::tip

```scss
math.tan($number) //=> number
```

Returns the [tangent](https://en.wikipedia.org/wiki/Trigonometric_functions#Right-angled_triangle_definitions) of `$number`.

`$number` must be an angle (its units must be compatible with `deg`) or unitless. If `$number` has no units, it is assumed to be in `rad`.

**SCSS**

```scss
@use 'sass:math';

@debug math.tan(100deg); // -5.6712818196
@debug math.tan(1rad); // 1.5574077247
@debug math.tan(1); // 1.5574077247
```

:::

:::tip

```scss
math.acos($number) //=> number
```

Returns the [arccosine](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions#Basic_properties) of `$number` in `deg`.

`$number` must be unitless.

**SCSS**

```scss
@use 'sass:math';

@debug math.acos(0.5); // 60deg
@debug math.acos(2); // NaNdeg
```

:::

:::tip

```scss
math.asin($number) //=> number
```

Returns the [arcsine](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions#Basic_properties) of `$number` in `deg`.

`$number` must be unitless.

**SCSS**

```scss
@use 'sass:math';

@debug math.asin(0.5); // 30deg
@debug math.asin(2); // NaNdeg
```

:::

:::tip

```scss
math.atan($number) //=> number
```

Returns the [arctangent](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions#Basic_properties) of `$number` in `deg`.

`$number` must be unitless.

**SCSS**

```scss
@use 'sass:math';

@debug math.atan(10); // 84.2894068625deg
```

:::

:::tip

```scss
math.atan2($y, $x) //=> number
```

Returns the [2-argument arctangent](https://en.wikipedia.org/wiki/Atan2) of `$y` and `$x` in `deg`.

`$y` and `$x` must have compatible units or be unitless.

### 💡 Fun fact:

`math.atan2($y, $x)` is distinct from `atan(math.div($y, $x))` because it preserves the quadrant of the point in question. For example, `math.atan2(1, -1)` corresponds to the point `(-1, 1)` and returns `135deg`. In contrast, `math.atan(math.div(1, -1))` and `math.atan(math.div(-1, 1))` resolve first to `atan(-1)`, so both return `-45deg`.

**SCSS**

```scss
@use 'sass:math';

@debug math.atan2(-1, 1); // 135deg
```

:::

## Unit Functions

:::tip

```scss
math.compatible($number1, $number2)
comparable($number1, $number2) //=> boolean
```

Returns whether `$number1` and `$number2` have compatible units.

If this returns `true`, `$number1` and `$number2` can safely be [added](https://sass-lang.com/documentation/operators/numeric), [subtracted](https://sass-lang.com/documentation/operators/numeric), and [compared](https://sass-lang.com/documentation/operators/relational). Otherwise, doing so will produce errors.

### ⚠️ Heads up!

The global name of this function is `compa**ra**ble`, but when it was added to the `sass:math` module the name was changed to `compa**ti**ble` to more clearly convey what the function does.

**SCSS**

```scss
@use 'sass:math';

@debug math.compatible(2px, 1px); // true
@debug math.compatible(100px, 3em); // false
@debug math.compatible(10cm, 3mm); // true
```

:::

:::tip

```scss
math.is-unitless($number)
unitless($number) //=> boolean
```

Returns whether `$number` has no units.

**SCSS**

```scss
@use 'sass:math';

@debug math.is-unitless(100); // true
@debug math.is-unitless(100px); // false
```

:::

:::tip

```scss
math.unit($number)
unit($number) //=> quoted string
```

Returns a string representation of `$number`’s units.

### ⚠️ Heads up!

This function is intended for debugging; its output format is not guaranteed to be consistent across Sass versions or implementations.

**SCSS**

```scss
@use 'sass:math';

@debug math.unit(100); // ""
@debug math.unit(100px); // "px"
@debug math.unit(5px * 10px); // "px*px"
@debug math.unit(math.div(5px, 1s)); // "px/s"
```

:::

## Other Functions

:::tip

```scss
math.div($number1, $number2) //=> number
```

Returns the result of dividing `$number1` by `$number2`.

Any units shared by both numbers will be canceled out. Units in `$number1` that aren’t in `$number2` will end up in the return value’s numerator, and units in `$number2` that aren’t in `$number1` will end up in its denominator.

### ⚠️ Heads up!

For backwards-compatibility purposes, this returns the *exact same result* as [the deprecated `/` operator](https://sass-lang.com/documentation/breaking-changes/slash-div), including concatenating two strings with a `/` character between them. However, this behavior will be removed eventually and shouldn’t be used in new stylesheets.

**SCSS**

```scss
@use 'sass:math';

@debug math.div(1, 2); // 0.5
@debug math.div(100px, 5px); // 20
@debug math.div(100px, 5); // 20px
@debug math.div(100px, 5s); // 20px/s
```

:::

:::tip

```scss
math.percentage($number)
percentage($number) //=> number
```

Converts a unitless `$number` (usually a decimal between 0 and 1) to a percentage.

### 💡 Fun fact:

This function is identical to `$number * 100%`.

**SCSS**

```scss
@use 'sass:math';

@debug math.percentage(0.2); // 20%
@debug math.percentage(math.div(100px, 50px)); // 200%
```

:::

:::tip

```scss
math.random($limit: null)
random($limit: null) //=> number
```

If `$limit` is `null`, returns a random decimal number between 0 and 1.

**SCSS**

```scss
@use 'sass:math';

@debug math.random(); // 0.2821251858
@debug math.random(); // 0.6221325814
```

* * *

If `$limit` is a number greater than or equal to 1, returns a random whole number between 1 and `$limit`.

### ⚠️ Heads up!

`random()` ignores units in `$limit`. [This behavior is deprecated](https://sass-lang.com/documentation/breaking-changes/function-units) and `random($limit)` will return a random integer with the same units as the `$limit` argument.

**SCSS**

```scss
@use 'sass:math';

@debug math.random(100px); // 42
```

**SCSS**

```scss
@use 'sass:math';

@debug math.random(10); // 4
@debug math.random(10000); // 5373
```

:::

:::warning

- Current Releases:
- [Dart Sass](https://sass-lang.com/dart-sass) [1.108.1](https://github.com/sass/dart-sass/releases/tag/1.108.1)
- [LibSass](https://sass-lang.com/libsass) ⚰
- [Ruby Sass](https://sass-lang.com/ruby-sass) ⚰
- [Implementation Guide](https://sass-lang.com/implementation)

:::
