import React from 'react';

import styles from './styles.module.css';

interface StageOverviewProps {
  /** Expected time to complete the stage, e.g. "1 week". */
  duration: string;
  /** What the trainee will be able to do at the end of the stage. */
  goals: string[];
  /** Who wrote this stage - the person to ask about the content. */
  owner?: string;
}

/** The box at the top of every stage's index page. */
export function StageOverview({ duration, goals, owner }: StageOverviewProps) {
  return (
    <section className={styles.overview}>
      <dl className={styles.meta}>
        <div>
          <dt>Duration</dt>
          <dd>{duration}</dd>
        </div>
        {owner && (
          <div>
            <dt>Content owner</dt>
            <dd>{owner}</dd>
          </div>
        )}
      </dl>
      <h3 className={styles.goalsTitle}>By the end of this stage you will be able to</h3>
      <ul className={styles.goals}>
        {goals.map((goal) => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>
    </section>
  );
}
