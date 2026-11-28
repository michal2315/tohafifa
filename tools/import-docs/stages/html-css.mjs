/** Which documentation pages make up the HTML, CSS & SCSS stage. See ../README.md for the options. */
const mdn = (output, from) => ({ output, source: 'mdn', from });

export default {
  stageDir: 'apps/site/docs/stages/02-html-css',

  /** Generated folders inside the stage, and their sidebar labels. */
  categories: {
    '01-html': 'HTML',
    '02-css': 'CSS',
    '03-layout': 'Layout',
    '04-scss': 'SCSS',
  },

  pages: [
    // `from` is the MDN lesson folder under learn_web_development/core.
    mdn('01-html/01-document-structure.mdx', 'structuring_content/structuring_documents'),
    mdn('01-html/02-images.mdx', 'structuring_content/html_images'),
    mdn('02-css/01-selectors.mdx', 'styling_basics/basic_selectors'),
    mdn('02-css/02-test-selectors.mdx', 'styling_basics/test_your_skills/selectors'),
    mdn('02-css/03-cascade.mdx', 'styling_basics/handling_conflicts'),
    mdn('02-css/04-test-cascade.mdx', 'styling_basics/test_your_skills/cascade'),
    mdn('02-css/05-box-model.mdx', 'styling_basics/box_model'),
    mdn('02-css/06-test-box-model.mdx', 'styling_basics/test_your_skills/box_model'),
    mdn('02-css/07-debugging-css.mdx', 'styling_basics/debugging_css'),
    mdn('03-layout/01-flexbox.mdx', 'css_layout/flexbox'),
    mdn('03-layout/02-test-flexbox.mdx', 'css_layout/test_your_skills/flexbox'),
    mdn('03-layout/03-grid.mdx', 'css_layout/grids'),
    mdn('03-layout/04-test-grid.mdx', 'css_layout/test_your_skills/grid'),
    mdn('03-layout/05-media-queries.mdx', 'css_layout/media_queries'),
    mdn('03-layout/06-test-responsive.mdx', 'css_layout/test_your_skills/responsive_design'),
    { output: '04-scss/01-sass-basics.mdx', source: 'sass' },
  ],
};
