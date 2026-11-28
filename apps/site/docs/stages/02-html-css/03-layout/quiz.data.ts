import { defineQuiz } from '@site/src/components/Quiz';

export default defineQuiz({
  id: 'html-css/layout',
  title: 'Layout',
  questions: [
    {
      type: 'choice',
      prompt: 'Which property centers the items vertically in this container?',
      code: {
        language: 'css',
        code: `.stack {
  display: flex;
  flex-direction: column;
  height: 400px;
}`,
      },
      options: ['`justify-content: center`', '`align-items: center`', '`vertical-align: middle`'],
      answer: 0,
      explanation:
        '`justify-content` aligns items along the main axis, and `align-items` along the cross axis. With `flex-direction: column` the main axis is vertical, so `justify-content` centers vertically. In a row, it is the other way around.',
    },
    {
      type: 'choice',
      prompt:
        'A stories row is a flex container with `overflow-x: auto`, but the story circles get squeezed instead of scrolling. What do you add to the items?',
      options: ['`flex-shrink: 0`', '`flex-grow: 0`', '`flex-wrap: nowrap`', '`flex-basis: auto`'],
      answer: 0,
      explanation:
        'Flex items shrink to fit their container by default (`flex-shrink: 1`). With `flex-shrink: 0` they keep their size, overflow the container, and the row scrolls. `flex-wrap` is set on the container, and `nowrap` is already the default.',
    },
    {
      type: 'fill-in',
      prompt: 'Make the gallery a grid with three equal columns.',
      code: {
        language: 'css',
        code: `.gallery {
  display: ___;
  grid-template-columns: ___;
  gap: 4px;
}`,
      },
      blanks: [['grid'], ['repeat(3, 1fr)', 'repeat(3,1fr)', '1fr 1fr 1fr']],
      explanation:
        'The `fr` unit is a fraction of the free space, so three `1fr` columns are equal. `repeat(3, 1fr)` is the same as `1fr 1fr 1fr`, and easier to change.',
    },
    {
      type: 'find-bug',
      prompt:
        'The suggestions sidebar should be hidden on mobile and shown on screens of 1000px and wider. Instead, it does the opposite. Find the bug.',
      code: {
        language: 'css',
        code: `.sidebar {
  display: none;
}

@media (max-width: 1000px) {
  .sidebar {
    display: block;
  }
}`,
      },
      bugLine: 5,
      explanation:
        '`max-width: 1000px` applies to screens up to 1000px - the small ones. Mobile-first CSS sets the mobile styles outside any media query, and adds the desktop styles in `@media (min-width: 1000px)`.',
    },
    {
      type: 'choice',
      prompt: 'Which is the better fit for a page layout with a header, a sidebar and a main area?',
      options: [
        'Grid, because it lays out rows and columns together',
        'Flexbox, because it lays out rows and columns together',
        'Either one - they do exactly the same thing',
      ],
      answer: 0,
      explanation:
        'Grid is two-dimensional: it controls rows and columns at the same time, which is what a page layout needs. Flexbox is one-dimensional - a single row or column - which makes it great for components like a toolbar or the buttons of a post.',
    },
  ],
});
