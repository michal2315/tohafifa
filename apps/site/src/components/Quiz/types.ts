/**
 * The shape of a quiz. Write a quiz as a data file next to its page:
 *
 *   // quiz.data.ts
 *   import { defineQuiz } from '@site/src/components/Quiz/types';
 *   export default defineQuiz({ id: 'html', title: 'HTML', questions: [...] });
 *
 * In all text fields, `backticks` render as inline code.
 */

export interface CodeSnippet {
  /** Any language the site highlights: html, css, scss, javascript, typescript, json... */
  language: string;
  code: string;
}

/** An answer option: plain text, or a code block (for "which fix is right?" questions). */
export type QuizOption = string | CodeSnippet;

interface QuestionBase {
  prompt: string;
  /** Code shown under the prompt. */
  code?: CodeSnippet;
  /** Shown after the question is answered, right or wrong. Say why, not just what. */
  explanation: string;
}

/** Pick one option. */
export interface ChoiceQuestion extends QuestionBase {
  type: 'choice';
  options: QuizOption[];
  /** Index of the correct option (0-based). */
  answer: number;
}

/** Pick every option that applies. */
export interface MultiChoiceQuestion extends QuestionBase {
  type: 'multi';
  options: QuizOption[];
  /** Indexes of all correct options (0-based). */
  answers: number[];
}

/** Click the line that has the bug. */
export interface FindBugQuestion extends QuestionBase {
  type: 'find-bug';
  code: CodeSnippet;
  /** The line with the bug (1-based, as shown next to the code). */
  bugLine: number;
}

/** Type the missing parts of the code. Mark each blank in the code with ___ (three underscores). */
export interface FillInQuestion extends QuestionBase {
  type: 'fill-in';
  code: CodeSnippet;
  /** Accepted answers for each blank, in order. Compared ignoring case, spaces and a trailing ";". */
  blanks: string[][];
}

export type Question = ChoiceQuestion | MultiChoiceQuestion | FindBugQuestion | FillInQuestion;
export type QuestionType = Question['type'];

export interface QuizDefinition {
  /** Unique across the site - results are saved under it. */
  id: string;
  title: string;
  /** Keep quizzes short: 3 to 6 questions. */
  questions: Question[];
}

/** What the trainee answered, per question type. */
export type QuizAnswer =
  | { type: 'choice'; selected: number }
  | { type: 'multi'; selected: number[] }
  | { type: 'find-bug'; line: number }
  | { type: 'fill-in'; values: string[] };

export const BLANK = '___';

export function countBlanks(code: string): number {
  return code.split(BLANK).length - 1;
}

/**
 * Checks a quiz for authoring mistakes and returns it unchanged. Mistakes fail the build
 * with a message pointing at the question, instead of showing a broken quiz to trainees.
 */
export function defineQuiz(quiz: QuizDefinition): QuizDefinition {
  quiz.questions.forEach((question, index) => {
    const fail = (problem: string) => {
      throw new Error(`Quiz "${quiz.id}", question ${index + 1}: ${problem}`);
    };
    const isOption = (i: number) =>
      'options' in question && Number.isInteger(i) && i >= 0 && i < question.options.length;

    switch (question.type) {
      case 'choice':
        if (!isOption(question.answer)) fail(`answer ${question.answer} is not an option index`);
        break;
      case 'multi':
        if (question.answers.length === 0) fail('answers is empty');
        question.answers.forEach((i) => isOption(i) || fail(`answer ${i} is not an option index`));
        break;
      case 'find-bug': {
        const lineCount = question.code.code.trimEnd().split('\n').length;
        if (question.bugLine < 1 || question.bugLine > lineCount) {
          fail(`bugLine ${question.bugLine} is outside the code (1-${lineCount})`);
        }
        break;
      }
      case 'fill-in': {
        const blankCount = countBlanks(question.code.code);
        if (blankCount === 0) fail(`the code has no ${BLANK} blanks`);
        if (blankCount !== question.blanks.length) {
          fail(`the code has ${blankCount} blanks but ${question.blanks.length} answers are given`);
        }
        break;
      }
    }
  });
  return quiz;
}
