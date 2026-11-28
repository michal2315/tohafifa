import React, { type ReactNode } from 'react';

import styles from './styles.module.css';

interface MilestoneProps {
  /** What gets added to the Instagram project in this stage. */
  title: string;
  /** The spec: what to build and the acceptance criteria. */
  children: ReactNode;
}

/**
 * The Instagram project milestone at the end of a stage.
 * Every stage has exactly one; finishing it means opening an MR for code review.
 */
export function Milestone({ title, children }: MilestoneProps) {
  return (
    <section className={styles.milestone}>
      <header className={styles.header}>
        <span className={styles.label}>Instagram project milestone</span>
        <h3 className={styles.title}>{title}</h3>
      </header>
      <div className={styles.body}>{children}</div>
      <footer className={styles.footer}>
        <strong>Done?</strong> Open a merge request in your project in the training repo and assign
        your trainer for code review. Move on to the next stage once it is approved.
      </footer>
    </section>
  );
}
