import React from 'react';

import styles from './styles.module.css';

/** Where imported documentation comes from, and the license that lets us copy it. */
const SOURCES = {
  mdn: {
    name: 'MDN Web Docs',
    authors: 'Mozilla Contributors',
    license: 'CC-BY-SA 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/',
    // CC-BY-SA is share-alike: our adapted version is under the same license.
    note: 'This adapted version is available under the same license.',
  },
  sass: {
    name: 'the Sass documentation',
    authors: 'the Sass team',
    license: 'MIT',
    licenseUrl: 'https://github.com/sass/sass-site/blob/main/LICENSE',
    note: '',
  },
  angular: {
    name: 'the Angular documentation',
    authors: 'Google LLC',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    note: 'Code examples are under the MIT License.',
  },
  ngrx: {
    name: 'the NgRx documentation',
    authors: 'the NgRx team',
    license: 'MIT',
    licenseUrl: 'https://github.com/ngrx/platform/blob/main/LICENSE',
    note: '',
  },
  rxjs: {
    name: 'the RxJS documentation',
    authors: 'the RxJS team',
    license: 'Apache 2.0',
    licenseUrl: 'https://github.com/ReactiveX/rxjs/blob/master/LICENSE.txt',
    note: '',
  },
  'react-atomic-design': {
    name: 'the react-atomic-design repository',
    authors: 'Danilo Woznica and contributors',
    license: 'MIT',
    licenseUrl: 'https://github.com/danilowoz/react-atomic-design#license',
    note: '',
  },
} as const;

interface SourceAttributionProps {
  source: keyof typeof SOURCES;
  /** Title of the original page. */
  title: string;
  /** URL of the original page. */
  url: string;
}

/** Credit line at the bottom of every imported page. Required by the source licenses. */
export function SourceAttribution({ source, title, url }: SourceAttributionProps) {
  const { name, authors, license, licenseUrl, note } = SOURCES[source];

  return (
    <footer className={styles.attribution}>
      Adapted from <a href={url}>{title}</a> on {name} by {authors}, licensed under{' '}
      <a href={licenseUrl}>{license}</a>. {note}
    </footer>
  );
}
