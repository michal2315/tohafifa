import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const ABSOLUTE_URL = /^(https?:)?\/\//;

/**
 * Turns a path on the media mount (e.g. "git/intro.mp4") into a full URL.
 * Absolute URLs and root paths ("/img/x.png") are returned unchanged.
 */
export function useMediaUrl(path: string): string {
  const { siteConfig } = useDocusaurusContext();
  if (ABSOLUTE_URL.test(path) || path.startsWith('/')) return path;

  const baseUrl = String(siteConfig.customFields?.mediaBaseUrl ?? '/media').replace(/\/$/, '');
  return `${baseUrl}/${path}`;
}
