import type { SandboxFiles } from './types';

/** The page shown in the result frame. */
export function buildPreview(html: string, css: string, js = ''): string {
  return (
    `<!doctype html><html><head><meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width, initial-scale=1">` +
    `<style>${css}</style></head><body>${html}` +
    (js ? `<script>${js.replace(/<\/script/gi, '<\\/script')}</script>` : '') +
    `</body></html>`
  );
}

export type PreviewResult = { document: string; error?: undefined } | { error: string };

/** Compiles SCSS in the browser. The compiler is big, so it loads only when a sandbox needs it. */
async function compileScss(scss: string): Promise<string> {
  const sass = await import('sass');
  return sass.compileString(scss).css;
}

export async function renderPreview(files: SandboxFiles, useScss: boolean): Promise<PreviewResult> {
  try {
    const css = useScss ? await compileScss(files.styles ?? '') : (files.styles ?? '');
    return { document: buildPreview(files.html, css, files.js) };
  } catch (error) {
    // Sass errors include the line and a code excerpt - exactly what the trainee needs.
    return { error: error instanceof Error ? error.message : String(error) };
  }
}
