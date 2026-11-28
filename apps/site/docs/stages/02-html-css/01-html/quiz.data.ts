import { defineQuiz } from '@site/src/components/Quiz';

export default defineQuiz({
  id: 'html-css/html',
  title: 'HTML',
  questions: [
    {
      type: 'choice',
      prompt: 'Which element should wrap the main navigation links of a site?',
      options: ['`<nav>`', '`<menu>`', '`<div class="nav">`', '`<header>`'],
      answer: 0,
      explanation:
        '`<nav>` marks a section of navigation links. A `<div>` looks the same on screen, but screen readers and search engines cannot tell it is navigation. A `<nav>` often sits inside the `<header>`, but the header itself is not the navigation.',
    },
    {
      type: 'multi',
      prompt: 'Which of these elements give meaning to the structure of a page?',
      options: ['`<main>`', '`<article>`', '`<div>`', '`<aside>`', '`<span>`'],
      answers: [0, 1, 3],
      explanation:
        '`<main>`, `<article>` and `<aside>` are semantic: each says what its content is. `<div>` and `<span>` are generic containers - use them only when no semantic element fits, for example as a wrapper for styling.',
    },
    {
      type: 'find-bug',
      prompt: 'This post card has an accessibility bug. Find it.',
      code: {
        language: 'html',
        code: `<article class="post">
  <header>
    <h2>Weekend hike</h2>
  </header>
  <img src="hike.jpg" />
  <p>Made it to the top!</p>
</article>`,
      },
      bugLine: 5,
      explanation:
        'The image has no `alt` attribute. Screen readers read the alt text instead of the image, and browsers show it when the image fails to load. Describe the image, e.g. `alt="View from the top of the mountain"`. For a purely decorative image, use an empty `alt=""`.',
    },
    {
      type: 'fill-in',
      prompt: 'Mark up the image and its caption so they are semantically linked.',
      code: {
        language: 'html',
        code: `<___>
  <img src="dinosaur.jpg" alt="The skull of a dinosaur skeleton" />
  <___>A T-Rex on display at the museum.</___>
</___>`,
      },
      blanks: [['figure'], ['figcaption'], ['figcaption'], ['figure']],
      explanation:
        '`<figure>` groups the image with its `<figcaption>`, so assistive technology knows the caption belongs to the image. A `<p>` under the image would only look like a caption.',
    },
    {
      type: 'choice',
      prompt: 'Why set the `width` and `height` attributes on an `<img>`?',
      options: [
        'So the browser can reserve space for the image before it loads, and the page does not jump',
        'To resize the image file so it downloads faster',
        'They are required - the image will not show without them',
        'To stop CSS from changing the size of the image',
      ],
      answer: 0,
      explanation:
        'With `width` and `height`, the browser knows the size of the image before downloading it, so the text around it does not move when it arrives. The attributes do not change the file, and CSS can still resize the image.',
    },
  ],
});
