import type { Plugin } from '@docusaurus/types';

type ConfigureWebpackResult = ReturnType<NonNullable<Plugin['configureWebpack']>>;

/**
 * Development only: forwards /api requests from the Docusaurus dev server to the API,
 * so the site can call the API on the same origin, like it does in production.
 *
 * Docusaurus merges `devServer` from plugins into its dev server config, but webpack's types
 * don't declare it - hence the cast.
 */
export default function apiProxyPlugin(): Plugin {
  const devServer = {
    proxy: [{ context: ['/api'], target: process.env.API_URL ?? 'http://localhost:3001' }],
  };

  return {
    name: 'api-proxy',
    configureWebpack: () => ({ devServer }) as ConfigureWebpackResult,
  };
}
