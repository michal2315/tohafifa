import clsx from 'clsx';
import React, { type FormEvent, useState } from 'react';

import { usePersistentState } from '@site/src/hooks/usePersistentState';

import { CodeView } from './CodeView';
import { isAnswerComplete, isAnswerCorrect } from './grading';
import { InlineText } from './InlineText';
import { describeCorrectFillIn, QUESTION_HINTS, QuestionAnswer } from './QuestionView';
import styles from './styles.module.css';
import type { QuizAnswer, QuizDefinition } from './types';

export { defineQuiz } from './types';
export type { QuizDefinition } from './types';

/** Saved in the browser, so a trainee can leave and come back. */
interface QuizProgress {
  current: number;
  /** The checked answer per question; null until checked. */
  answers: (QuizAnswer | null)[];
  finished: boolean;
}

function startProgress(quiz: QuizDefinition): QuizProgress {
  return { current: 0, answers: quiz.questions.map(() => null), finished: false };
}

interface QuizProps {
  quiz: QuizDefinition;
}

/**
 * A short quiz: one question at a time, with an explanation after every answer.
 * The questions are data - see types.ts for the format.
 */
export function Quiz({ quiz }: QuizProps) {
  const [saved, setProgress] = usePersistentState<QuizProgress>(
    `quiz:${quiz.id}`,
    startProgress(quiz),
  );
  // Questions may change after a trainee started - start over instead of showing stale answers.
  const progress = saved.answers.length === quiz.questions.length ? saved : startProgress(quiz);
  const [draft, setDraft] = useState<QuizAnswer>();

  const { current, answers, finished } = progress;
  const question = quiz.questions[current];
  const checkedAnswer = answers[current];
  const checked = checkedAnswer !== null;
  const answer = checkedAnswer ?? draft;
  const isLast = current === quiz.questions.length - 1;
  const score = answers.filter((a, i) => a && isAnswerCorrect(quiz.questions[i], a)).length;

  const check = () => {
    if (!draft || !isAnswerComplete(question, draft)) return;
    setProgress({ ...progress, answers: answers.map((a, i) => (i === current ? draft : a)) });
    setDraft(undefined);
  };

  const next = () => {
    setProgress(isLast ? { ...progress, finished: true } : { ...progress, current: current + 1 });
  };

  const restart = () => {
    setDraft(undefined);
    setProgress(startProgress(quiz));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (checked) next();
    else check();
  };

  return (
    <section className={styles.quiz} aria-label={`Quiz: ${quiz.title}`}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Quiz</span>
        <h3 className={styles.title}>{quiz.title}</h3>
        <ol className={styles.steps} aria-label="Progress">
          {quiz.questions.map((q, i) => {
            const a = answers[i];
            return (
              <li
                key={i}
                className={clsx(
                  styles.step,
                  a && (isAnswerCorrect(q, a) ? styles.stepCorrect : styles.stepWrong),
                  !finished && i === current && styles.stepCurrent,
                )}
              >
                <span className={styles.srOnly}>Question {i + 1}</span>
              </li>
            );
          })}
        </ol>
      </header>

      {finished ? (
        <div className={styles.results}>
          <p className={styles.score}>
            {score} / {quiz.questions.length}
          </p>
          <p className={styles.scoreText}>
            {score === quiz.questions.length
              ? 'All correct.'
              : 'Review the explanations of the ones you missed, then try again.'}
          </p>
          <ol className={styles.summary}>
            {quiz.questions.map((q, i) => {
              const correct = isAnswerCorrect(q, answers[i]);
              return (
                <li key={i} className={correct ? styles.summaryCorrect : styles.summaryWrong}>
                  <span className={styles.summaryMark}>{correct ? '✓' : '✗'}</span>
                  <InlineText text={q.prompt} />
                </li>
              );
            })}
          </ol>
          <button type="button" className={styles.secondaryButton} onClick={restart}>
            Try again
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className={styles.body}>
          <p className={styles.counter}>
            Question {current + 1} of {quiz.questions.length}
          </p>
          <p className={styles.prompt}>
            <InlineText text={question.prompt} />
          </p>
          <p className={styles.hint}>{QUESTION_HINTS[question.type]}</p>

          {question.code && question.type !== 'find-bug' && question.type !== 'fill-in' && (
            <CodeView code={question.code.code} language={question.code.language} />
          )}

          <QuestionAnswer
            key={current}
            question={question}
            answer={answer}
            onChange={setDraft}
            checked={checked}
          />

          {checked && (
            <Feedback correct={isAnswerCorrect(question, checkedAnswer)}>
              {!isAnswerCorrect(question, checkedAnswer) && question.type === 'fill-in' && (
                <p>
                  Answer: <InlineText text={describeCorrectFillIn(question)} />
                </p>
              )}
              <p>
                <InlineText text={question.explanation} />
              </p>
            </Feedback>
          )}

          <div className={styles.actions}>
            {checked ? (
              <button type="submit" className={styles.primaryButton}>
                {isLast ? 'See results' : 'Next question'}
              </button>
            ) : (
              <button
                type="submit"
                className={styles.primaryButton}
                disabled={!isAnswerComplete(question, draft)}
              >
                Check
              </button>
            )}
          </div>
        </form>
      )}
    </section>
  );
}

function Feedback({ correct, children }: { correct: boolean; children: React.ReactNode }) {
  return (
    <div
      className={clsx(styles.feedback, correct ? styles.feedbackCorrect : styles.feedbackWrong)}
      role="status"
    >
      <p className={styles.verdict}>{correct ? 'Correct' : 'Not quite'}</p>
      {children}
    </div>
  );
}
