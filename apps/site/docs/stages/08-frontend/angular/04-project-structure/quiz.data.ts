import { defineQuiz } from '@site/src/components/Quiz';

export default defineQuiz({
  id: 'frontend/angular-project-structure',
  title: 'Project structure',
  questions: [
    {
      type: 'choice',
      prompt:
        'Following the Angular style guide, what is the file name for the `PostCard` component?',
      options: ['`post-card.ts`', '`PostCard.ts`', '`post_card.ts`', '`postCard.ts`'],
      answer: 0,
      explanation:
        'The style guide separates words in file names with hyphens, and matches the file name to the identifier inside it. The template and styles use the same name: `post-card.html`, `post-card.scss`.',
    },
    {
      type: 'choice',
      prompt: 'Which structure does the style guide recommend?',
      options: [
        {
          language: 'text',
          code: `src/app/
  feed/
  profile/
  upload/`,
        },
        {
          language: 'text',
          code: `src/app/
  components/
  services/
  directives/`,
        },
      ],
      answer: 0,
      explanation:
        'Organize by feature: everything about the feed is in one folder, so you find, change and delete it together. Folders by type of code spread one feature across the whole project, and grow without limit as the app grows.',
    },
    {
      type: 'find-bug',
      prompt: 'One file in this feature folder does not follow the naming rules. Which one?',
      code: {
        language: 'text',
        code: `src/app/feed/feed.ts
src/app/feed/feed.html
src/app/feed/feed.scss
src/app/feed/feed-tests.ts`,
      },
      bugLine: 4,
      explanation:
        "A file's tests have the same name, with `.spec` at the end: `feed.spec.ts`. The test runner looks for `.spec.ts` files, and the matching name shows which file is tested.",
    },
    {
      type: 'multi',
      prompt: 'Which of these does the style guide recommend?',
      options: [
        'Use the `inject()` function rather than constructor parameters',
        'Use `protected` for members only the template uses',
        'Use `[class]` and `[style]` bindings rather than `ngClass` and `ngStyle`',
        'Put complex logic in the template, so the component class stays short',
      ],
      answers: [0, 1, 2],
      explanation:
        'All three are in the guide: `inject()` is easier to read and works with type inference; `protected` keeps template-only members out of the public API; and plain class and style bindings are simpler and faster. Complex logic belongs in the class (for example in a `computed`), where it can be read and tested.',
    },
  ],
});
