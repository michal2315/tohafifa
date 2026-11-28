import { describeTrack, matchesTrack, type TrackRequirement } from '@hafifa/shared';
import React, { type ReactNode } from 'react';

import { useTracks } from '@site/src/tracks/TrackContext';

import styles from './styles.module.css';

type TrackOnlyProps = TrackRequirement & { children: ReactNode };

/**
 * Content for a specific track only, e.g. <TrackOnly frontend="react">, or for several options
 * of a dimension, e.g. <TrackOnly team={['team-1', 'team-3']}>.
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
