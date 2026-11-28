import Details from '@theme/Details';
import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import styles from './styles.module.css';

const DIFFICULTY_BADGES = {
  easy: 'badge--success',
  medium: 'badge--warning',
  hard: 'badge--danger',
} as const;

interface ExerciseProps {
  title: string;
  difficulty?: keyof typeof DIFFICULTY_BADGES;
  /** The task description. Can contain <Hint> and <Solution>. */
  children: ReactNode;
}

/** A small practice task inside a stage (not part of the Instagram project). */
export function Exercise({ title, difficulty, children }: ExerciseProps) {
  return (
    <section className={styles.exercise}>
      <header className={styles.header}>
        <span className={styles.label}>Exercise</span>
        <h4 className={styles.title}>{title}</h4>
        {difficulty && (
          <span className={clsx('badge', DIFFICULTY_BADGES[difficulty])}>{difficulty}</span>
        )}
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  );
}

/** A collapsed hint inside an <Exercise>. */
export function Hint({ children }: { children: ReactNode }) {
  return <Details summary={<summary>Hint</summary>}>{children}</Details>;
}

/** A collapsed solution inside an <Exercise>. */
export function Solution({ children }: { children: ReactNode }) {
  return (
    <Details summary={<summary>Solution (try it yourself first!)</summary>}>{children}</Details>
  );
}
