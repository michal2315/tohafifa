import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import styles from './styles.module.css';

const RESOURCE_TYPE_LABELS = {
  article: 'Article',
  docs: 'Docs',
  video: 'Video',
  course: 'Course',
  interactive: 'Interactive',
  game: 'Game',
  quiz: 'Quiz',
  tool: 'Tool',
} as const;

type ResourceType = keyof typeof RESOURCE_TYPE_LABELS;

interface ResourceProps {
  type: ResourceType;
  title: string;
  href: string;
  /** Estimated time, e.g. "20 min". */
  time?: string;
  /** Mark nice-to-have resources so trainees know they can skip them. */
  optional?: boolean;
  /** A sentence about what to focus on in this resource. */
  children?: ReactNode;
}

/** A list of learning materials. Put <Resource> items inside. */
export function Resources({ children }: { children: ReactNode }) {
  return <ul className={styles.list}>{children}</ul>;
}

/** One learning material (article, docs page, video...). Use inside <Resources>. */
export function Resource({ type, title, href, time, optional = false, children }: ResourceProps) {
  return (
    <li className={clsx(styles.item, optional && styles.optional)}>
      <div className={styles.header}>
        <span className={clsx('badge', styles.type)}>{RESOURCE_TYPE_LABELS[type]}</span>
        <Link to={href} className={styles.title}>
          {title}
        </Link>
        {time && <span className={styles.time}>{time}</span>}
        {optional && <span className="badge badge--secondary">Optional</span>}
      </div>
      {children && <div className={styles.description}>{children}</div>}
    </li>
  );
}
