// MDN fills its examples with "Veggie Ipsum" - lists of vegetable names. It reads as nonsense, so
// the importer swaps it for plain English filler. Only the words change: tags inside a sentence
// (like the <span> a selector example highlights) stay on the same word position.
//
// Each pair is [MDN text, our text], and both must have the same number of words and punctuation
// marks in the same places. Longer texts come first, so they win over texts they start with.
const FILLER = [
  [
    'Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.',
    'The text itself is only filler so that each part of the page has enough content to show you how its layout behaves.',
  ],
  [
    'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
    'This paragraph is filler, and its only job is to take up some space so you can see the layout.',
  ],
  [
    'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.',
    'Look at the code of each example to understand why the content looks the way it does on the rendered page.',
  ],
  [
    'Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.',
    'Resize the browser window to see how the layout of this example page changes at different widths of the screen.',
  ],
  [
    'Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.',
    'This third paragraph is filler too and is only here to add more length.',
  ],
  [
    'Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.',
    'On a narrow screen all the content is shown in a single column.',
  ],
  [
    'Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.',
    'On a wider screen the content is split into more than one column.',
  ],
  [
    'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.',
    'The navigation also changes from a list to a single row of links.',
  ],
  [
    'Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.',
    'This is all done with media queries and no extra HTML.',
  ],
  [
    'Celery potato scallion desert raisin horseradish spinach carrot soko.',
    'The words of this filler text do not matter.',
  ],
  // The same sentence, cut short in one example.
  [
    'Celery potato scallion desert raisin horseradish spinach',
    'Each sentence here is just more filler',
  ],
  // A list of items in a flexbox exercise.
  [
    'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth',
    'Photos Videos Stories Reels Messages Profile Settings Saved posts Explore Search',
  ],
  ['Gumbo beet greens corn soko endive gumbo gourd.', 'Here is a second filler paragraph of text.'],
  ['Dandelion cucumber earthnut pea peanut soko zucchini.', 'The words in it do not matter.'],
  ['Veggies!', 'Welcome!'],
];

/** Whole snippets replaced as they are: the credit for the vegetable text links to its generator. */
const SNIPPETS = [
  [
    /<p>\s*All these veggies are brought to you by the\s*<a href="https:\/\/veggieipsum\.com\/">Veggie Ipsum generator<\/a>\.\s*<\/p>/g,
    '<p>Related links go here.</p>',
  ],
  // The media queries example has a sidebar of vegetable recipe links.
  [/External vegetable-based links/g, 'Related links'],
  [/<a\s+href="https:\/\/www\.thekitchn\.com\/[^"]*">\s*How to cook broccoli/g, '<a href="#">Help'],
  [
    /<a\s+href="https:\/\/www\.bbcgoodfood\.com\/glossary\/[^"]*">\s*Swiss Chard/g,
    '<a href="#">About',
  ],
  [
    /<a\s+href="https:\/\/www\.bbcgoodfood\.com\/recipes\/[^"]*">\s*Christmas Parsnip Recipes/g,
    '<a href="#">Contact',
  ],
];

const tokenize = (text) => text.match(/[\p{L}'-]+|[^\s\p{L}'-]/gu);
const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const RULES = FILLER.map(([from, to]) => {
  const fromTokens = tokenize(from);
  const toTokens = tokenize(to);
  if (fromTokens.length !== toTokens.length) {
    throw new Error(
      `filler.mjs: "${to}" has ${toTokens.length} words and marks, "${from}" has ${fromTokens.length}`,
    );
  }
  // Between words: whitespace and inline tags, captured so they are kept.
  const pattern = fromTokens.map(escapeRegExp).join('((?:\\s|<[^>]+>)*)');
  return { regex: new RegExp(`(?<![\\p{L}])${pattern}(?![\\p{L}])`, 'gu'), toTokens };
});

/** Replaces MDN's vegetable filler text with plain English filler. */
export function replaceFillerText(text) {
  for (const [regex, replacement] of SNIPPETS) text = text.replace(regex, replacement);
  for (const { regex, toTokens } of RULES) {
    text = text.replace(regex, (...match) => {
      const separators = match.slice(1, toTokens.length);
      return toTokens.map((token, i) => token + (separators[i] ?? '')).join('');
    });
  }
  return text;
}
