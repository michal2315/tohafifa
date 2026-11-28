import React, { useMemo } from 'react';

import styles from './styles.module.css';

interface LiveExampleProps {
  html: string;
  css?: string;
  js?: string;
  /** Height of the result frame, e.g. "220px". */
  height?: string;
}

/**
 * Shows what a piece of HTML/CSS/JS renders to, in an isolated frame, so example styles
 * can't leak into the page. The code itself is shown separately, in normal code blocks.
 */
export function LiveExample({ html, css = '', js = '', height = '200px' }: LiveExampleProps) {
  const document = useMemo(
    () =>
      `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head>` +
      `<body>${html}${js ? `<script>${js}</script>` : ''}</body></html>`,
    [html, css, js],
  );

  return (
    <figure className={styles.example}>
      <figcaption className={styles.caption}>Result</figcaption>
      {/* allow-scripts without allow-same-origin keeps example code away from the site. */}
      <iframe
        className={styles.frame}
        title="Example result"
        sandbox="allow-scripts"
        srcDoc={document}
        style={{ height }}
        loading="lazy"
      />
    </figure>
  );
}
