import { defineQuiz } from '@site/src/components/Quiz';

export default defineQuiz({
  id: 'html-css/css',
  title: 'CSS',
  questions: [
    {
      type: 'choice',
      prompt: 'What color is the paragraph?',
      code: {
        language: 'css',
        code: `/* <p id="intro" class="lead">Hello</p> */

#intro {
  color: blue;
}

.lead {
  color: red;
}

p {
  color: green;
}`,
      },
      options: ['Blue', 'Red', 'Green'],
      answer: 0,
      explanation:
        'Specificity decides before source order does: an ID selector beats a class selector, which beats a type selector. The order of the rules only matters when the selectors have the same specificity.',
    },
    {
      type: 'choice',
      prompt: 'With the standard box model, how wide is this box on the page?',
      code: {
        language: 'css',
        code: `.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}`,
      },
      options: ['200px', '240px', '250px', '270px'],
      answer: 2,
      explanation:
        'In the standard box model, `width` is the content only. Padding and border are added on both sides: 200 + 20 + 20 + 5 + 5 = 250px. Margin is space outside the box, so it is not part of its width. With `box-sizing: border-box`, the box would be exactly 200px.',
    },
    {
      type: 'find-bug',
      prompt: 'The card has no border in the browser. Find the line that causes it.',
      code: {
        language: 'css',
        code: `.card {
  padding: 16px
  border: 1px solid #ddd;
  border-radius: 8px;
}`,
      },
      bugLine: 2,
      explanation:
        'The semicolon after `16px` is missing, so the browser reads `16px border: 1px solid #ddd` as one invalid value for `padding` and drops the whole declaration - both the padding and the border. The DevTools Styles panel shows such declarations crossed out.',
    },
    {
      type: 'fill-in',
      prompt: 'Write a selector that matches only `<img>` elements with the class `avatar`.',
      code: {
        language: 'css',
        code: `___ {
  border-radius: 50%;
}`,
      },
      blanks: [['img.avatar']],
      explanation:
        'A type selector followed by a class selector, with no space between them, matches elements that are both. With a space (`img .avatar`) it would match elements with the class `avatar` inside an `<img>` - which never happens.',
    },
    {
      type: 'multi',
      prompt: 'Which of these properties are inherited by child elements by default?',
      options: ['`color`', '`font-family`', '`border`', '`margin`'],
      answers: [0, 1],
      explanation:
        'Text properties like `color` and `font-family` are inherited, so you can set them once on `body`. Box properties like `border`, `margin` and `padding` are not - otherwise every child would get its own border.',
    },
  ],
});
