import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

/**
 * Base URL that videos and other media files are served from.
 * In production nginx serves the media mount under /media (see deploy/nginx.conf.template).
 * Locally, put files in static/media/ (git-ignored).
 */
const mediaBaseUrl = process.env.MEDIA_BASE_URL ?? '/media';

const config: Config = {
  title: 'Hafifa',
  tagline: 'Fullstack department training',
  favicon: 'img/favicon.svg',

  url: process.env.SITE_URL ?? 'http://localhost:4300',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: { onBrokenMarkdownLinks: 'throw' },
  },

  i18n: { defaultLocale: 'en', locales: ['en'] },

  customFields: { mediaBaseUrl },

  presets: [
    [
      'classic',
      {
        docs: {
          // The training is the whole site, so docs live at the root.
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      // Offline search: we run in a closed network, so no Algolia.
      '@easyops-cn/docusaurus-search-local',
      { hashed: true, docsRouteBasePath: '/', indexBlog: false },
    ],
  ],

  plugins: ['./plugins/api-proxy.ts'],

  themeConfig: {
    // One theme only: no light/dark switch.
    colorMode: { defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false },
    navbar: {
      title: 'Hafifa',
      logo: { alt: 'Hafifa', src: 'img/favicon.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'hafifa', position: 'left', label: 'Training' },
        { type: 'docSidebar', sidebarId: 'resources', position: 'left', label: 'Resources' },
        // Search is listed explicitly so that the profile stays right-most.
        { type: 'search', position: 'right' },
        { type: 'custom-profile', position: 'right' },
      ],
    },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
    },
    footer: {
      style: 'dark',
      links: [{ label: 'Writing content', to: '/authoring/getting-started' }],
      copyright: 'Fullstack department · Hafifa',
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: ['bash', 'json', 'sql', 'scss', 'yaml', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
