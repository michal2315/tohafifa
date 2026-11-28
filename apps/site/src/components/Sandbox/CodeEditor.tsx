import { indentWithTab } from '@codemirror/commands';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { sass } from '@codemirror/lang-sass';
import { type Extension } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import React, { useEffect, useRef } from 'react';

import styles from './styles.module.css';
import type { SandboxLanguage } from './types';

const LANGUAGES: Record<SandboxLanguage, () => Extension> = {
  html: () => html(),
  css: () => css(),
  scss: () => sass(),
  js: () => javascript(),
};

const theme = EditorView.theme({
  '&': { height: '100%', fontSize: '0.875rem' },
  '.cm-scroller': { fontFamily: 'var(--ifm-font-family-monospace)', lineHeight: '1.6' },
  '.cm-gutters': { background: 'transparent', border: 'none' },
});

interface CodeEditorProps {
  value: string;
  language: SandboxLanguage;
  onChange: (value: string) => void;
  label: string;
}

/** A CodeMirror editor. It only runs in the browser: the effect creates it after the first render. */
export function CodeEditor({ value, language, onChange, label }: CodeEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const initialValue = useRef(value);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const view = new EditorView({
      parent: containerRef.current!,
      doc: initialValue.current,
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        LANGUAGES[language](),
        theme,
        EditorView.contentAttributes.of({ 'aria-label': label }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) onChangeRef.current(update.state.doc.toString());
        }),
      ],
    });
    viewRef.current = view;
    return () => view.destroy();
  }, [language, label]);

  // Changes from outside the editor, like "Reset".
  useEffect(() => {
    const view = viewRef.current;
    if (view && view.state.doc.toString() !== value) {
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: value } });
    }
  }, [value]);

  return <div ref={containerRef} className={styles.editor} />;
}
