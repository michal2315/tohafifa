import { usePrismTheme } from '@docusaurus/theme-common';
import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';
import React, { type ReactNode } from 'react';

import styles from './styles.module.css';
import { BLANK } from './types';

export type LineMark = 'selected' | 'correct' | 'wrong';

interface CodeViewProps {
  code: string;
  language: string;
  /** Makes lines clickable (find-the-bug questions). Lines are 1-based. */
  onLineClick?: (line: number) => void;
  lineMarks?: Record<number, LineMark>;
  /** Renders each ___ blank in the code (fill-in questions). */
  renderBlank?: (blankIndex: number) => ReactNode;
}

/** Syntax-highlighted code with line numbers, optional clickable lines and inline blanks. */
export function CodeView({
  code,
  language,
  onLineClick,
  lineMarks = {},
  renderBlank,
}: CodeViewProps) {
  const theme = usePrismTheme();
  let blankIndex = 0;

  /** Splits a token's text around ___ so each blank can be replaced by an input. */
  const renderTokenContent = (content: string): ReactNode => {
    if (!renderBlank || !content.includes(BLANK)) return content;
    return content
      .split(BLANK)
      .flatMap((text, i) =>
        i === 0
          ? [text]
          : [<React.Fragment key={i}>{renderBlank(blankIndex++)}</React.Fragment>, text],
      );
  };

  return (
    <Highlight code={code.trimEnd()} language={language} theme={theme}>
      {({ tokens, getLineProps, getTokenProps, style }) => (
        <pre className={styles.code} style={style}>
          {tokens.map((line, i) => {
            const lineNumber = i + 1;
            const mark = lineMarks[lineNumber];
            const content = (
              <>
                <span className={styles.lineNumber} aria-hidden="true">
                  {lineNumber}
                </span>
                <span className={styles.lineContent}>
                  {line.map((token, j) => {
                    const { children, ...tokenProps } = getTokenProps({ token });
                    return (
                      <span key={j} {...tokenProps}>
                        {typeof children === 'string' ? renderTokenContent(children) : children}
                      </span>
                    );
                  })}
                </span>
              </>
            );

            const lineProps = getLineProps({ line });
            const className = clsx(
              lineProps.className,
              styles.line,
              mark && styles[`line-${mark}`],
            );

            return onLineClick ? (
              <button
                key={i}
                type="button"
                className={clsx(className, styles.lineButton)}
                onClick={() => onLineClick(lineNumber)}
                aria-pressed={mark === 'selected'}
                aria-label={`Line ${lineNumber}`}
              >
                {content}
              </button>
            ) : (
              <div key={i} {...lineProps} className={className}>
                {content}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
