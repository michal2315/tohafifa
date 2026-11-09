---
title: "Responsive images"
sidebar_position: 26
mdx:
  format: mdx
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

:::info[Source]

Adapted from [Responsive images](https://web.dev/learn/design/responsive-images) by the web.dev authors (Google), web.dev, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes: converted to Markdown for offline use; interactive embeds, browser-compatibility tables and site navigation removed.

:::

Text on the web automatically wraps at the edge of the screen so that it doesn't overflow. Images, on the other hand, have an intrinsic size. If an image is wider than the screen, the image overflows and the user has to scroll horizontally to see all of it.

Fortunately, CSS gives you tools to stop this from happening.

## Constrain your images

In your style sheet, you can use [`max-inline-size`](https://developer.mozilla.org/docs/Web/CSS/max-inline-size) to declare that images can never be rendered at a size wider than their containing element.

```css
img {
  max-inline-size: 100%;
  block-size: auto;
}
```

:::note

You can use `max-width` instead of `max-inline-size` if you prefer, but we recommend getting into the habit of thinking in terms of [logical properties](https://web.dev/learn/design/internationalization#logical_properties).

:::

You can apply the same rule to other kinds of embedded content too, like videos and iframes.

```css
img,
video,
iframe {
  max-inline-size: 100%;
  block-size: auto;
}
```

With this rule in place, browsers automatically scale down images to fit on the screen.

![Two screenshots; the first shows an image expanding past the browser width; the second shows the same image constrained within the browser viewport.](./img/26-responsive-images/two-screenshots-first-s-fbd980b13ed58.png)

*Constraining your image lets users see all of it without scrolling.*

Adding a [`block-size`](https://developer.mozilla.org/docs/Web/CSS/block-size) value of `auto` means the browser preserves your images' aspect ratio as it resizes them.

Sometimes, an image's dimensions are set by a content management system (CMS) or other content delivery system. If your design calls for a different aspect ratio from the CMS's default, you can use the [`aspect-ratio`](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio) property to preserve your site's design:

```css
img {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: 2/1;
}
```

Unfortunately, this often means the browser has to squash or stretch the image to make it fit in the intended space.

![Profile of a happy-looking handsome dog with a ball in its mouth, but the image is squashed.](./img/26-responsive-images/profile-a-happy-looking-6886fa1061908.jpg)

*Changing the image's aspect ratio makes it appear squashed or stretched.*

To prevent squashing and stretching, use the [`object-fit`](https://developer.mozilla.org/docs/Web/CSS/object-fit) property.

An `object-fit` value of `contain` tells the browser to preserve the image's aspect ratio, leaving empty space around the image if needed.

```css
img {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: 2/1;
  object-fit: contain;
}
```

An `object-fit` value of `cover` tells the browser to preserve the image's aspect ratio, cropping the image if needed.

```css
img {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: 2/1;
  object-fit: cover;
}
```

![Profile of a happy-looking handsome dog with a ball in its mouth; there is extra space on either side of the image.](./img/26-responsive-images/profile-a-happy-looking-19f229b25e797.jpg) ![Profile of a happy-looking handsome dog with a ball in its mouth; the image has been cropped at the top and bottom.](./img/26-responsive-images/profile-a-happy-looking-9a3c6aedc16d2.jpg)

*The same image with two different values for \`object-fit\` applied. The first has an \`object-fit\` value of \`contain\`. The second has an \`object-fit\` value of \`cover\`.*

You can change the position of the image crop using the [object-position](https://developer.mozilla.org/docs/Web/CSS/object-position) property. This adjusts the focus of the crop, so you can make sure the most important part of the image is still visible.

```css
img {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: 2/1;
  object-fit: cover;
  object-position: top center;
}
```

![Profile of a happy-looking handsome dog with a ball in its mouth; the image has only been cropped at the bottom.](./img/26-responsive-images/profile-a-happy-looking-a9de08840e85f.jpg)

*You can set `object-position` to crop only one side of your image.*

## Deliver your images

Those CSS rules tell the browser how you'd like images to be rendered. You can also provide hints in your HTML about how the browser should handle those images.

### Hints for sizing

If you know your image's dimensions, always include `width` and `height` attributes. Even if the image is rendered at a different size because of your `max-inline-size` rule, the browser still knows the width to height ratio and can set aside the right amount of space. This prevents your other content from jumping around when the image loads.

```
<img
 src="image.png"
 alt="A description of the image."
 width="300"
 height="200"
>
```

<video controls style={{maxWidth: '100%'}} src={require('./img/26-responsive-images/WOQn6K6OQcoElRw0NCkZ.mp4').default} />

<video controls style={{maxWidth: '100%'}} src={require('./img/26-responsive-images/sFxDb36aEMvTPIyZHz1O.mp4').default} />

*The first video shows a layout without defined image dimensions. Notice how the text jumps when the images load. In the second video, image dimensions have been provided, so the browser leaves space for the image and text doesn't jump around when the image loads.*

### Hints for loading

Use the `loading` attribute to tell the browser whether to delay loading the image until it's in or near the viewport. For images below the fold, use a value of `lazy`. The browser won't load lazy images until the user has scrolled far down enough that the image is about to come into view. If the user never scrolls, the image never loads.

```gdscript
<img
 src="image.png"
 alt="A description of the image."
 width="300"
 height="200"
 loading="lazy"
>
```

<video controls style={{maxWidth: '100%'}} src={require('./img/26-responsive-images/jazsyaOjXfHS0g8yUijR.mp4').default} />

*Lazy loaded images wait to load until the user is about to scroll to them.*

For a hero image above the fold, don't use `loading`. If your site automatically applies the `loading="lazy"` attribute, you can usually set `loading` to the default value of `eager` to prevent images from being lazy loaded:

```gdscript
<img
 src="hero.jpg"
 alt="A description of the image."
 width="1200"
 height="800"
 loading="eager"
>
```

### Fetch Priority

For important images-such as the [LCP](https://web.dev/articles/lcp) image, you can further prioritize the loading using [Fetch Priority](https://web.dev/articles/fetch-priority) by setting the `fetchpriority` attribute to `high`:

```gdscript
<img
 src="hero.jpg"
 alt="A description of the image."
 width="1200"
 height="800"
 loading="eager"
 fetchpriority="high"
>
```

This tells the browser to fetch the image right away and at high priority, instead of waiting until the browser has finished its layout and would fetch images normally.

However, when you ask the browser to prioritize downloading one resource, like an image, the browser must de-prioritize another resource such as a script or a font file. Only set `fetchpriority="high"` on an image if it's truly vital.

### Hints for preloading

It's best to avoid preloading whenever possible by including all images in the initial HTML file. However, some images may be unavailable, such as images added by JavaScript or a CSS background image.

You can use preloading to get the browser to fetch these important images ahead of time. For really important images, you can combine this preloading with the `fetchpriority` attribute:

```html
<link rel="preload" href="hero.jpg" as="image" fetchpriority="high">
```

Again, use these attributes sparingly to avoid overriding the browser's prioritization heuristics too often. Overusing them can cause performance degradation.

Some browsers support [preloading responsive images](https://web.dev/articles/preload-responsive-images) based on srcset, using the `imagesrcset` and `imagesizes` attributes. For example:

```html
<link rel="preload" imagesrcset="hero_sm.jpg 1x hero_med.jpg 2x hero_lg.jpg 3x" as="image" fetchpriority="high">
```

By excluding the `href` fallback, you can make sure browsers without `srcset` support still preload the correct image.

You can't preload images in different formats based on browser support of certain formats. Attempting this can result in extra downloads that waste users' data.

## Responsive images with `srcset`

Thanks to that `max-inline-size: 100%` declaration, your images can't break out of their containers. However, if a user has a small screen and a low-bandwidth network, making them download the same size images as users with larger screens wastes data.

To fix this issue, add multiple versions of the same image at different sizes, and use the [`srcset`](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-srcset) attribute to tell the browser these sizes exist and when to use them.

### Width descriptor

You can define a `srcset` using a comma-separated list of values. Each value is the URL of an image, followed by a space, followed by some metadata about the image, called a *descriptor*.

In this example, the metadata describes the width of each image using the `w` unit. One `w` is the width of one pixel.

```gdscript
<img
 src="small-image.png"
 alt="A description of the image."
 width="300"
 height="200"
 loading="lazy"
 decoding="async"
 srcset="small-image.png 300w,
  medium-image.png 600w,
  large-image.png 1200w"
>
```

The `srcset` attribute complements the `src` attribute instead of replacing it. You still need to have a valid `src` attribute, but the browser can replace its value with one of the options listed in the `srcset`. To save bandwidth, the browser only downloads the larger image if they're needed.

### Sizes

If you're using the width descriptor, you must also use the [`sizes`](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-sizes) attribute to give the browser more information. This tells the browser what size you expect the image to be displayed at under different conditions. Those conditions are specified in a media query.

The `sizes` attribute takes a comma-separated list of media queries and image widths.

:::note

It feels strange to have CSS media queries inside an HTML element. It spoils the separation of presentation and structure. But it's the only way to provide the necessary sizing information quickly enough to be effective.

:::

```gdscript
<img
 src="small-image.png"
 alt="A description of the image."
 width="300"
 height="200"
 loading="lazy"
 decoding="async"
 srcset="small-image.png 300w,
  medium-image.png 600w,
  large-image.png 1200w"
 sizes="(min-width: 66em) 33vw,
  (min-width: 44em) 50vw,
  100vw"
>
```

In this example, you're telling the browser that in a viewport with a width over `66em`, it should display the image no wider than one third of the screen (inside a three-column layout, for example).

For viewport widths between `44em` and `66em`, display the image at half the width of the screen (as in a two-column layout).

For anything narrower than `44em`, display the image at the full width of the screen.

This means that the biggest image won't necessarily be used for the widest screen. A wide browser window that can display a multi-column layout uses an image that fits in one column, which might be smaller than an image used for a single-column layout on a narrower screen.

:::note[Interactive demo not available offline]

This lesson has an interactive CodePen demo here. CodePen is not reachable from our network. Use the code on this page in the playground instead. (Pen id for reference: `web-dot-dev/XWerLJm`)

:::

<video controls style={{maxWidth: '100%'}} src={require('./img/26-responsive-images/MkUAq5XQyjlUXLvkT4jL.mp4').default} />

*Use size descriptors to change how your page is laid out on different screen sizes.*

### Pixel density descriptor

You can also use descriptors to provide an alternate version of images to show on high-density displays, to keep images looking sharp at the higher resolutions they provide.

![Two versions of the same image of a happy-looking handsome dog with a ball in its mouth, one image looking crisp and the other looking fuzzy.](./img/26-responsive-images/two-versions-the-same-im-f13b154ee2cc8.png)

*Images with lower pixel densities can look fuzzy.*

Use the density descriptor to describe the pixel density of the image in relation to the image in the `src` attribute. The density descriptor is a number followed by the letter x, as in `1x` or `2x`.

```gdscript
<img
 src="small-image.png"
 alt="A description of the image."
 width="300"
 height="200"
 loading="lazy"
 decoding="async"
 srcset="small-image.png 1x,
  medium-image.png 2x,
  large-image.png 3x"
>
```

If `small-image.png` is 300 by 200 pixels in size, and `medium-image.png` is 600 by 400 pixels, then `medium-image.png` can have `2x` after it in the `srcset` list.

You don't have to use whole numbers. If another version of the image is 450 by 300 pixels in size, you can describe it with `1.5x`.

:::note

You can use *either* width descriptors *or* density descriptors, but not both together.

:::

## Presentational images

Images in HTML are content. That's why you include the `alt` attribute with a description of the image for screen readers and search engines.

If you embed an image that's decorative, without any meaningful content, you can use an empty `alt` attribute.

```
<img
 src="flourish.png"
 alt=""
 width="400"
 height="50"
>
```

You must always include the `alt` attribute, even if it's empty. An empty `alt` attribute tells a screen reader that the image is presentational. A missing `alt` attribute doesn't provide that information.

Ideally, presentational or decorative images are included with CSS instead of HTML. HTML is for structure. CSS is for presentation.

:::note

**Tip:** Learn how to create [accessible images](https://web.dev/learn/accessibility/images).

:::

## Background images

Use the `background-image` property in CSS to load presentational images.

```css
element {
  background-image: url(flourish.png);
}
```

You can specify multiple image candidates using the [`image-set`](https://developer.mozilla.org/docs/Web/CSS/image/image-set\(\)) function for `background-image`.

The `image-set` function in CSS works a lot like the `srcset` attribute in HTML. Provide a list of images with a pixel density descriptor for each one.

```css
element {
  background-image: image-set(
    small-image.png 1x,
    medium-image.png 2x,
    large-image.png 3x
  );
}
```

The browser chooses the most appropriate image for the device's pixel density.

There are many factors to consider when you're adding images to your site, including:

- Reserving the right space for each image.
- Figuring out how many sizes you need.
- Deciding whether the image is content or decorative.

It's worth spending the time to get your images right. Poor image strategies can annoy and frustrate your users. A good image strategy makes your site feel snappy and sharp, regardless of the user's device or network connection.

There's one more HTML element in your toolkit to give you more control over your images: [the `picture` element](https://web.dev/learn/design/picture-element).

### Check your understanding

Test your knowledge of images.

## Check your understanding

**Question 1.**

Styles must be added for images to fit within the viewport.

- True
- False

<details><summary>Show answer</summary><p><strong>True</strong>: Images without containment will be as large as their natural size.</p></details>

**Question 2.**

When an image's height and width have been forced into an unnatural aspect ratio, which styles can help adjust how the image fits into these proportions?

- `object-fit`
- `image-fit`
- `fit-image`
- `aspect-ratio`

<details><summary>Show answer</summary><p><strong><code translate="no" dir="ltr">object-fit</code></strong>: Specify how the image fits with keywords like <code translate="no" dir="ltr">contain</code> and <code translate="no" dir="ltr">cover</code>.</p></details>

**Question 3.**

Putting `height` and `width` on your images prevents CSS from being able to style it differently.

- True
- False

<details><summary>Show answer</summary><p><strong>False</strong>: CSS has a large amount of dynamic options for sizing images, even if height and width are inline on the tag.</p></details>

**Question 4.**

The `srcset` attribute doesn't \_\_\_\_\_\_\_ the `src` attribute, it \_\_\_\_\_\_\_ it.

- complement, replaces
- replace, complements

<details><summary>Show answer</summary><p><strong>replace, complements</strong>: It provides additional options for the browser to choose from, if it's capable.</p></details>

**Question 5.**

Missing `alt` on an image is the same as an empty `alt`.

- True
- False

<details><summary>Show answer</summary><p><strong>False</strong>: Missing <code translate="no" dir="ltr">alt</code> signals nothing to a screen reader.</p></details>
