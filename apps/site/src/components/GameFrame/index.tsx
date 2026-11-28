import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';

import styles from './styles.module.css';

interface GameFrameProps {
  /** Path of the game under static/, e.g. "/games/flexbox-froggy/index.html". */
  src: string;
  title: string;
  /** Credit line required by the game's license, e.g. "Thomas Park, MIT license". */
  credit: string;
}

/** Embeds one of the self-hosted games (static/games/) in the page. */
export function GameFrame({ src, title, credit }: GameFrameProps) {
  const url = useBaseUrl(src);

  return (
    <figure className={styles.game}>
      <iframe className={styles.frame} title={title} src={url} />
      <figcaption className={styles.caption}>
        <span>
          {title} by {credit}
        </span>
        <a href={url} target="_blank" rel="noreferrer">
          Open in a new tab
        </a>
      </figcaption>
    </figure>
  );
}
