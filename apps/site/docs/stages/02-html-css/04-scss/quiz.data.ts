import { defineQuiz } from '@site/src/components/Quiz';

export default defineQuiz({
  id: 'html-css/scss',
  title: 'SCSS',
  questions: [
    {
      type: 'choice',
      prompt: 'Which CSS selector does the nested rule compile to?',
      code: {
        language: 'scss',
        code: `.button {
  color: white;

  &:hover {
    color: black;
  }
}`,
      },
      options: ['`.button:hover`', '`.button :hover`', '`:hover .button`'],
      answer: 0,
      explanation:
        '`&` is replaced by the parent selector, exactly as it is, so `&:hover` becomes `.button:hover`. Without the `&`, Sass would add a space and produce `.button :hover`, which matches hovered elements inside the button.',
    },
    {
      type: 'fill-in',
      prompt: 'Declare the variable used by the button.',
      code: {
        language: 'scss',
        code: `___: #4f46e5;

.button {
  background: $primary;
}`,
      },
      blanks: [['$primary']],
      explanation:
        'Sass variables start with `$`. Their values are written into the compiled CSS, so changing a color in one place changes it everywhere it is used.',
    },
    {
      type: 'find-bug',
      prompt: 'This does not compile: Sass says the variable is undefined. Find the line to fix.',
      code: {
        language: 'scss',
        code: `// _colors.scss
$brand: #e1306c;

// styles.scss
@use 'colors';

.like {
  color: $brand;
}`,
      },
      bugLine: 8,
      explanation:
        'Members of a module loaded with `@use` are namespaced by the file name: write `colors.$brand`. The namespace makes it clear where every variable comes from, even with many partials.',
    },
    {
      type: 'choice',
      prompt: 'Why is the file called `_colors.scss`, with an underscore?',
      options: [
        'It marks a partial: Sass does not compile it to its own CSS file',
        'It makes the variables in it private',
        'Sass requires an underscore in every file name',
      ],
      answer: 0,
      explanation:
        'A leading underscore marks a partial - a piece of SCSS meant to be loaded by other files with `@use`, not compiled on its own. You leave the underscore out when loading it: `@use "colors"`.',
    },
    {
      type: 'choice',
      prompt: 'Which feature defines a reusable group of declarations that can take arguments?',
      options: ['`@mixin`', '`@extend`', '`@use`', 'A placeholder selector (`%name`)'],
      answer: 0,
      explanation:
        'A `@mixin` is included with `@include` and can take arguments, like a function that outputs declarations. `@extend` and placeholder selectors share the styles of another selector, but cannot take arguments.',
    },
  ],
});
