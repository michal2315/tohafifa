import React from 'react';

import { useMediaUrl } from '@site/src/hooks/useMediaUrl';

import styles from './styles.module.css';

interface VideoProps {
  /** Path on the media mount, e.g. "git/branching.mp4". */
  src: string;
  title: string;
  /** e.g. "12 min" */
  duration?: string;
  /** Optional preview image, also a path on the media mount. */
  poster?: string;
}

/** A video served from the media mount. */
export function Video({ src, title, duration, poster }: VideoProps) {
  const videoUrl = useMediaUrl(src);
  const posterUrl = useMediaUrl(poster ?? '');

  return (
    <figure className={styles.video}>
      <video controls preload="metadata" src={videoUrl} poster={poster ? posterUrl : undefined}>
        Your browser cannot play this video. <a href={videoUrl}>Download it instead</a>.
      </video>
      <figcaption className={styles.caption}>
        <span>{title}</span>
        {duration && <span className={styles.duration}>{duration}</span>}
      </figcaption>
    </figure>
  );
}
