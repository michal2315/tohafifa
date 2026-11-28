import React, { useMemo, useState } from 'react';

import { Sandbox } from '../Sandbox';
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
 * "Edit" turns it into a sandbox, so trainees can play with the example.
 */
export function LiveExample({ html, css = '', js = '', height = '200px' }: LiveExampleProps) {
  const [editing, setEditing] = useState(false);
  const document = useMemo(
    () =>
      `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head>` +
      `<body>${html}${js ? `<script>${js}</script>` : ''}</body></html>`,
    [html, css, js],
  );

  if (editing) {
    return (
      <Sandbox
        title="Example"
        html={html}
        css={css}
        js={js || undefined}
        height={`max(22rem, calc(${height} + 4rem))`}
      />
    );
  }

  return (
    <figure className={styles.example}>
      <figcaption className={styles.caption}>
        <span>Result</span>
        <button type="button" className={styles.edit} onClick={() => setEditing(true)}>
          Edit the code
        </button>
      </figcaption>
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
