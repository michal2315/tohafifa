import { useLocation } from '@docusaurus/router';
import React from 'react';

import { usePersistentState } from '@site/src/hooks/usePersistentState';

import styles from './styles.module.css';

interface ChecklistProps {
  items: string[];
  title?: string;
  /** Only needed when a page has more than one checklist. */
  id?: string;
}

/** A list of checkboxes the trainee can tick. Progress is remembered per page. */
export function Checklist({ items, title, id = 'default' }: ChecklistProps) {
  const { pathname } = useLocation();
  const [checked, setChecked] = usePersistentState<string[]>(`checklist:${pathname}:${id}`, []);

  const toggle = (item: string) => {
    setChecked(checked.includes(item) ? checked.filter((i) => i !== item) : [...checked, item]);
  };

  const doneCount = items.filter((item) => checked.includes(item)).length;

  return (
    <div className={styles.checklist}>
      <div className={styles.header}>
        {title && <strong>{title}</strong>}
        <span className={styles.progress}>
          {doneCount}/{items.length}
        </span>
      </div>
      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item}>
            <label className={styles.item}>
              <input
                type="checkbox"
                checked={checked.includes(item)}
                onChange={() => toggle(item)}
              />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
