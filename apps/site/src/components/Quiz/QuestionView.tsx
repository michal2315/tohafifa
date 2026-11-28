import clsx from 'clsx';
import React from 'react';

import { CodeView, type LineMark } from './CodeView';
import { getBlankResults } from './grading';
import { InlineText } from './InlineText';
import styles from './styles.module.css';
import type {
  ChoiceQuestion,
  FillInQuestion,
  FindBugQuestion,
  MultiChoiceQuestion,
  Question,
  QuizAnswer,
  QuizOption,
} from './types';

interface AnswerProps<Q extends Question> {
  question: Q;
  answer: QuizAnswer | undefined;
  onChange: (answer: QuizAnswer) => void;
  /** After checking, answers are locked and marked right or wrong. */
  checked: boolean;
}

function OptionContent({ option }: { option: QuizOption }) {
  return typeof option === 'string' ? (
    <InlineText text={option} />
  ) : (
    <CodeView code={option.code} language={option.language} />
  );
}

function Options({
  question,
  answer,
  onChange,
  checked,
}: AnswerProps<ChoiceQuestion | MultiChoiceQuestion>) {
  const isMulti = question.type === 'multi';
  const correct = isMulti ? question.answers : [question.answer];
  const selected =
    answer?.type === 'multi' ? answer.selected : answer?.type === 'choice' ? [answer.selected] : [];

  const toggle = (index: number) => {
    if (!isMulti) return onChange({ type: 'choice', selected: index });
    const next = selected.includes(index)
      ? selected.filter((i) => i !== index)
      : [...selected, index].sort();
    onChange({ type: 'multi', selected: next });
  };

  return (
    <div role={isMulti ? 'group' : 'radiogroup'} className={styles.options}>
      {question.options.map((option, index) => {
        const isSelected = selected.includes(index);
        const isCorrect = correct.includes(index);
        return (
          <button
            key={index}
            type="button"
            role={isMulti ? 'checkbox' : 'radio'}
            aria-checked={isSelected}
            disabled={checked}
            onClick={() => toggle(index)}
            className={clsx(
              styles.option,
              isSelected && styles.optionSelected,
              checked && isCorrect && styles.optionCorrect,
              checked && isSelected && !isCorrect && styles.optionWrong,
            )}
          >
            <span className={clsx(styles.optionMarker, isMulti && styles.optionMarkerSquare)} />
            <span className={styles.optionContent}>
              <OptionContent option={option} />
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FindBug({ question, answer, onChange, checked }: AnswerProps<FindBugQuestion>) {
  const selectedLine = answer?.type === 'find-bug' ? answer.line : undefined;
  const marks: Record<number, LineMark> = {};
  if (checked) {
    if (selectedLine !== undefined) marks[selectedLine] = 'wrong';
    marks[question.bugLine] = 'correct';
  } else if (selectedLine !== undefined) {
    marks[selectedLine] = 'selected';
  }

  return (
    <CodeView
      code={question.code.code}
      language={question.code.language}
      lineMarks={marks}
      onLineClick={checked ? undefined : (line) => onChange({ type: 'find-bug', line })}
    />
  );
}

function FillIn({ question, answer, onChange, checked }: AnswerProps<FillInQuestion>) {
  const values = answer?.type === 'fill-in' ? answer.values : question.blanks.map(() => '');
  const results = checked ? getBlankResults(question, values) : [];

  const setValue = (index: number, value: string) =>
    onChange({ type: 'fill-in', values: values.map((v, i) => (i === index ? value : v)) });

  return (
    <CodeView
      code={question.code.code}
      language={question.code.language}
      renderBlank={(index) => {
        const width = Math.max(4, ...question.blanks[index].map((a) => a.length)) + 1;
        return (
          <input
            className={clsx(
              styles.blank,
              checked && (results[index] ? styles.blankCorrect : styles.blankWrong),
            )}
            style={{ width: `${width}ch` }}
            value={values[index] ?? ''}
            onChange={(event) => setValue(index, event.target.value)}
            readOnly={checked}
            aria-label={`Blank ${index + 1}`}
            autoComplete="off"
            spellCheck={false}
          />
        );
      }}
    />
  );
}

/** The part of a question the trainee interacts with, by question type. */
export function QuestionAnswer(props: AnswerProps<Question>) {
  const { question } = props;
  switch (question.type) {
    case 'choice':
    case 'multi':
      return <Options {...props} question={question} />;
    case 'find-bug':
      return <FindBug {...props} question={question} />;
    case 'fill-in':
      return <FillIn {...props} question={question} />;
  }
}

/** Instructions under the prompt, so every question type explains itself. */
export const QUESTION_HINTS: Record<Question['type'], string> = {
  choice: 'Choose one answer.',
  multi: 'Choose all that apply.',
  'find-bug': 'Click the line with the bug.',
  'fill-in': 'Fill in the blanks.',
};

/** The correct answer as text, shown in the feedback when a fill-in answer was wrong. */
export function describeCorrectFillIn(question: FillInQuestion): string {
  return question.blanks.map((accepted) => `\`${accepted[0]}\``).join(', ');
}
