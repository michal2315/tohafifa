import { countBlanks, type FillInQuestion, type Question, type QuizAnswer } from './types';

/** Fill-in answers are compared ignoring case, extra spaces and a trailing semicolon. */
function normalize(value: string): string {
  return value.trim().replace(/;$/, '').replace(/\s+/g, ' ').toLowerCase();
}

function isBlankCorrect(question: FillInQuestion, blankIndex: number, value: string): boolean {
  return question.blanks[blankIndex].some((accepted) => normalize(accepted) === normalize(value));
}

/** Whether the trainee has answered enough to check (e.g. every blank is filled in). */
export function isAnswerComplete(
  question: Question,
  answer: QuizAnswer | null | undefined,
): boolean {
  if (!answer) return false;
  if (answer.type === 'multi') return answer.selected.length > 0;
  if (answer.type === 'fill-in' && question.type === 'fill-in') {
    return (
      answer.values.length === countBlanks(question.code.code) &&
      answer.values.every((value) => value.trim() !== '')
    );
  }
  return true;
}

export function isAnswerCorrect(
  question: Question,
  answer: QuizAnswer | null | undefined,
): boolean {
  if (!answer || answer.type !== question.type) return false;

  switch (question.type) {
    case 'choice':
      return answer.type === 'choice' && answer.selected === question.answer;
    case 'multi': {
      if (answer.type !== 'multi') return false;
      const selected = new Set(answer.selected);
      return (
        selected.size === question.answers.length && question.answers.every((i) => selected.has(i))
      );
    }
    case 'find-bug':
      return answer.type === 'find-bug' && answer.line === question.bugLine;
    case 'fill-in':
      return (
        answer.type === 'fill-in' &&
        answer.values.every((value, i) => isBlankCorrect(question, i, value))
      );
  }
}

/** Per-blank correctness, to mark each blank after checking. */
export function getBlankResults(question: FillInQuestion, values: string[]): boolean[] {
  return question.blanks.map((_, i) => isBlankCorrect(question, i, values[i] ?? ''));
}
