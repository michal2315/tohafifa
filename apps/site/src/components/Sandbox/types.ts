export type SandboxLanguage = 'html' | 'css' | 'scss' | 'js';

/** The code in a sandbox. Leave a part out to hide its tab. */
export interface SandboxFiles {
  html: string;
  /** CSS, or SCSS when the sandbox uses SCSS. */
  styles?: string;
  js?: string;
}
