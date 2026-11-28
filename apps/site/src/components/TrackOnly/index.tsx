import { describeTrack, matchesTrack, type TrackSelection } from '@hafifa/shared';
import React, { type ReactNode } from 'react';

import { useTracks } from '@site/src/tracks/TrackContext';

import styles from './styles.module.css';

type TrackOnlyProps = TrackSelection & { children: ReactNode };

/**
 * Content for a specific track only, e.g. <TrackOnly frontend="react">.
 * Hidden when the trainee picked a different track; shown with a label otherwise.
 */
export function TrackOnly({ children, ...requiredTrack }: TrackOnlyProps) {
  const { selection } = useTracks();
  if (!matchesTrack(requiredTrack, selection)) return null;

  return (
    <div className={styles.trackOnly}>
      <span className={styles.label}>{describeTrack(requiredTrack)} only</span>
      {children}
    </div>
  );
}
