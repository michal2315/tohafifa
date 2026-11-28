import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { usePersistentState } from '@site/src/hooks/usePersistentState';

import { CodeEditor } from './CodeEditor';
import { type PreviewResult, renderPreview } from './preview';
import styles from './styles.module.css';
import type { SandboxFiles, SandboxLanguage } from './types';

interface Code {
  html?: string;
  css?: string;
  scss?: string;
  js?: string;
}

export interface SandboxProps extends Code {
  /** Saves the trainee's code in the browser under this id. Must be unique across the site. */
  id?: string;
  title?: string;
  /** Height of the editor and the result, e.g. "30rem". */
  height?: string;
  /** Code for the "Show solution" button. Parts left out stay as they are. */
  solution?: Code;
}

interface SavedSandbox {
  /** The starting code the trainee began from - if the page's code changes, start over. */
  startedFrom: string;
  files: SandboxFiles;
}

interface Tab {
  key: keyof SandboxFiles;
  label: string;
  language: SandboxLanguage;
}

const PREVIEW_DELAY_MS = 300;

function toFiles({ html, css, scss, js }: Code): SandboxFiles {
  return { html: html ?? '', styles: scss ?? css, js };
}

/** The trainee's code: saved in the browser when the sandbox has an id. */
function useSandboxFiles(id: string | undefined, start: SandboxFiles) {
  const startedFrom = JSON.stringify(start);
  const [saved, setSaved] = usePersistentState<SavedSandbox | null>(`sandbox:${id}`, null);
  const [unsaved, setUnsaved] = useState(start);

  if (!id) return [unsaved, setUnsaved] as const;
  const files = saved?.startedFrom === startedFrom ? saved.files : start;
  const setFiles = (next: SandboxFiles) => setSaved({ startedFrom, files: next });
  return [files, setFiles] as const;
}

/** The result frame's content, updated shortly after the trainee stops typing. */
function usePreview(files: SandboxFiles, useScss: boolean): PreviewResult | undefined {
  const [preview, setPreview] = useState<PreviewResult>();

  useEffect(() => {
    let current = true;
    const timer = setTimeout(async () => {
      const result = await renderPreview(files, useScss);
      if (current) setPreview(result);
    }, PREVIEW_DELAY_MS);
    return () => {
      current = false;
      clearTimeout(timer);
    };
  }, [files, useScss]);

  return preview;
}

/**
 * A code editor next to a live result. Trainees edit HTML, CSS or SCSS (and JS) and see the
 * page update as they type.
 */
export default function Sandbox({
  id,
  title = 'Sandbox',
  height = '26rem',
  solution,
  ...code
}: SandboxProps) {
  const start = toFiles(code);
  const useScss = code.scss !== undefined;
  const [files, setFiles] = useSandboxFiles(id, start);
  const preview = usePreview(files, useScss);
  // Most exercises are about styling, so the styles tab opens first.
  const [activeTab, setActiveTab] = useState<keyof SandboxFiles>(
    start.styles !== undefined ? 'styles' : 'html',
  );
  const [expanded, setExpanded] = useState(false);

  const tabs: Tab[] = [
    { key: 'html', label: 'HTML', language: 'html' },
    ...(start.styles !== undefined
      ? [
          {
            key: 'styles',
            label: useScss ? 'SCSS' : 'CSS',
            language: useScss ? 'scss' : 'css',
          } as Tab,
        ]
      : []),
    ...(start.js !== undefined ? [{ key: 'js', label: 'JS', language: 'js' } as Tab] : []),
  ];

  // Full screen: Escape closes it, and the page behind it does not scroll.
  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setExpanded(false);
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [expanded]);

  const isChanged = JSON.stringify(files) !== JSON.stringify(start);
  const showSolution = () => {
    if (!solution) return;
    const solutionFiles = toFiles(solution);
    setFiles({
      html: solution.html ?? files.html,
      styles: solutionFiles.styles ?? files.styles,
      js: solution.js ?? files.js,
    });
  };

  return (
    <section
      className={clsx(styles.sandbox, expanded && styles.expanded)}
      style={expanded ? undefined : { height }}
      aria-label={title}
    >
      <header className={styles.toolbar}>
        <div className={styles.tabs} role="tablist" aria-label="Files">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={clsx(styles.tab, activeTab === tab.key && styles.tabActive)}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <span className={styles.title}>{title}</span>
        <div className={styles.actions}>
          {solution && (
            <button type="button" className={styles.action} onClick={showSolution}>
              Show solution
            </button>
          )}
          <button
            type="button"
            className={styles.action}
            onClick={() => setFiles(start)}
            disabled={!isChanged}
          >
            Reset
          </button>
          <button type="button" className={styles.action} onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Exit full screen' : 'Full screen'}
          </button>
        </div>
      </header>

      <div className={styles.panes}>
        <div className={styles.code}>
          {tabs.map((tab) => (
            <div
              key={tab.key}
              role="tabpanel"
              hidden={activeTab !== tab.key}
              className={styles.panel}
            >
              <CodeEditor
                label={`${tab.label} code`}
                language={tab.language}
                value={files[tab.key] ?? ''}
                onChange={(value) => setFiles({ ...files, [tab.key]: value })}
              />
            </div>
          ))}
        </div>

        <div className={styles.result}>
          <span className={styles.resultLabel}>Result</span>
          {preview?.error !== undefined ? (
            <pre className={styles.error}>{preview.error}</pre>
          ) : (
            // allow-scripts without allow-same-origin keeps the trainee's code away from the site.
            <iframe
              className={styles.frame}
              title={`${title} result`}
              sandbox="allow-scripts allow-modals"
              srcDoc={preview?.document ?? ''}
            />
          )}
        </div>
      </div>
    </section>
  );
}
