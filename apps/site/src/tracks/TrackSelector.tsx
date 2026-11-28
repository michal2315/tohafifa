import {
  getTrackOptionLabel,
  getTrackOptions,
  TRACK_DIMENSIONS,
  TRACKS,
  type TrackDimension,
} from '@hafifa/shared';
import React from 'react';

import { useTracks } from './TrackContext';
import styles from './TrackSelector.module.css';

/** A dropdown per track dimension (frontend, database...). Shown in the profile menu. */
export function TrackSelector() {
  const { selection, setSelection } = useTracks();

  const handleChange = (dimension: TrackDimension, option: string) => {
    setSelection({ ...selection, [dimension]: option || undefined });
  };

  return (
    <div className={styles.selector}>
      {TRACK_DIMENSIONS.map((dimension) => (
        <label key={dimension} className={styles.field}>
          <span className={styles.label}>{TRACKS[dimension].label}</span>
          <select
            className={styles.select}
            value={selection[dimension] ?? ''}
            onChange={(event) => handleChange(dimension, event.target.value)}
          >
            <option value="">All</option>
            {getTrackOptions(dimension).map((option) => (
              <option key={option} value={option}>
                {getTrackOptionLabel(dimension, option)}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
