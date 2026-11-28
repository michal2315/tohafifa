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
  /** English subtitles in WebVTT format (.vtt), also a path on the media mount. */
  subtitles?: string;
}

/** A video served from the media mount. */
export function Video({ src, title, duration, poster, subtitles }: VideoProps) {
  const videoUrl = useMediaUrl(src);
  const posterUrl = useMediaUrl(poster ?? '');
  const subtitlesUrl = useMediaUrl(subtitles ?? '');

  return (
    <figure className={styles.video}>
      <video controls preload="metadata" src={videoUrl} poster={poster ? posterUrl : undefined}>
        {subtitles && (
          <track kind="subtitles" src={subtitlesUrl} srcLang="en" label="English" default />
        )}
        Your browser cannot play this video. <a href={videoUrl}>Download it instead</a>.
      </video>
      <figcaption className={styles.caption}>
        <span>{title}</span>
        {duration && <span className={styles.duration}>{duration}</span>}
      </figcaption>
    </figure>
  );
}
