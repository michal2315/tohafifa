/** Which documentation pages make up the HTML, CSS & SCSS stage. */
export default {
  stageDir: 'apps/site/docs/stages/02-html-css',

  /** Generated folders inside the stage, and their sidebar labels. */
  categories: {
    '01-html': 'HTML',
    '02-css': 'CSS',
    '03-layout': 'Layout',
    '04-scss': 'SCSS',
  },

  /** [output file in the stage, MDN source folder under learn_web_development/core] */
  mdnPages: [
    ['01-html/01-document-structure.mdx', 'structuring_content/structuring_documents'],
    ['01-html/02-images.mdx', 'structuring_content/html_images'],
    ['02-css/01-selectors.mdx', 'styling_basics/basic_selectors'],
    ['02-css/02-test-selectors.mdx', 'styling_basics/test_your_skills/selectors'],
    ['02-css/03-cascade.mdx', 'styling_basics/handling_conflicts'],
    ['02-css/04-test-cascade.mdx', 'styling_basics/test_your_skills/cascade'],
    ['02-css/05-box-model.mdx', 'styling_basics/box_model'],
    ['02-css/06-test-box-model.mdx', 'styling_basics/test_your_skills/box_model'],
    ['02-css/07-debugging-css.mdx', 'styling_basics/debugging_css'],
    ['03-layout/01-flexbox.mdx', 'css_layout/flexbox'],
    ['03-layout/02-test-flexbox.mdx', 'css_layout/test_your_skills/flexbox'],
    ['03-layout/03-grid.mdx', 'css_layout/grids'],
    ['03-layout/04-test-grid.mdx', 'css_layout/test_your_skills/grid'],
    ['03-layout/05-media-queries.mdx', 'css_layout/media_queries'],
    ['03-layout/06-test-responsive.mdx', 'css_layout/test_your_skills/responsive_design'],
  ],

  /** Output file for the "Sass Basics" guide, or null to skip it. */
  sassGuide: '04-scss/01-sass-basics.mdx',
};
