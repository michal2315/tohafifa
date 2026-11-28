import clsx from 'clsx';
import React from 'react';

import { PAGE_KIND_IDS, PAGE_KINDS, pageKindClassName } from '@site/src/pageKinds/pageKinds';

import styles from './styles.module.css';

/** Explains the icons in the sidebar. */
export function PageKindLegend() {
  return (
    <ul className={styles.legend}>
      {PAGE_KIND_IDS.map((kind) => (
        <li key={kind} className={clsx(pageKindClassName(kind), styles.item)}>
          <span className="page-kind-icon" aria-hidden="true" />
          {PAGE_KINDS[kind]}
        </li>
      ))}
    </ul>
  );
}
