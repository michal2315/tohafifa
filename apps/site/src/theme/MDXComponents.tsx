import MDXComponents from '@theme-original/MDXComponents';

import * as HafifaComponents from '@site/src/components';

/**
 * Makes our components available in every .mdx file without importing them.
 * To add a component, export it from src/components/index.ts.
 */
export default {
  ...MDXComponents,
  ...HafifaComponents,
};
