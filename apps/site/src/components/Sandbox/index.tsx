import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { lazy, Suspense } from 'react';

import type { SandboxProps } from './Sandbox';
import styles from './styles.module.css';

export type { SandboxProps } from './Sandbox';

// The editor is big, so it loads only on pages that show a sandbox, and only in the browser.
const SandboxImplementation = lazy(() => import('./Sandbox'));

/** A code editor next to a live result. See Sandbox.tsx for the props. */
export function Sandbox(props: SandboxProps) {
  const placeholder = (
    <div className={styles.sandbox} style={{ height: props.height ?? '26rem' }} aria-busy="true" />
  );

  return (
    <BrowserOnly fallback={placeholder}>
      {() => (
        <Suspense fallback={placeholder}>
          <SandboxImplementation {...props} />
        </Suspense>
      )}
    </BrowserOnly>
  );
}
