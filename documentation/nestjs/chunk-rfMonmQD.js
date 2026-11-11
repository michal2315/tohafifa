import{C as hf,E as lf,M as xy,N as zC,T as jT,_ as Wa,a as u,b as cf,d as Jc,h as Ly,i as g,j as uf,k as tT,l as Aa,m as LT,n as ln$1,p as Ky,r as xt,s as l,t as Lt,v as Xy,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var j=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-cli-plugin`]],features:[xy],decls:313,vars:8,consts:[[`contentReference`,``],[`app2e419766a5e92955730abeba5443dc4344b4bff5`,``],[`appd38323166b9fb8679135fc1f613d29bc3c19a72c`,``],[1,`content`],[1,`content-inner`],[`id`,`cli-plugin`],[1,`warning`],[1,`info`],[`appAnchor`,``,`id`,`overview`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`comments-introspection`],[`appAnchor`,``,`id`,`using-the-cli-plugin`],[`routerLink`,`/cli/overview`],[1,`language-javascript`],[`appAnchor`,``,`id`,`swc-builder`],[`href`,`/recipes/swc#type-checking`],[1,`language-bash`],[`href`,`/recipes/swc#monorepo-and-cli-plugins`],[`appAnchor`,``,`id`,`integration-with-ts-jest-e2e-tests`],[1,`language-json`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/cli-plugin.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){if(o&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`CLI Plugin`),cf(),Aa(5,`blockquote`,6)(6,`strong`),bT(7,`Warning`),cf(),bT(8,` This chapter applies only to the code first approach.
`),cf(),Aa(9,`p`),bT(10,`TypeScript's metadata reflection system has several limitations that make it impossible to, for instance, determine which properties a class consists of, or whether a given property is optional or required. However, some of these constraints can be addressed at compile time. Nest provides a plugin that enhances the TypeScript compilation process to reduce the amount of boilerplate code required.`),cf(),Aa(11,`blockquote`,7)(12,`strong`),bT(13,`Hint`),cf(),bT(14,` This plugin is `),Aa(15,`strong`),bT(16,`opt-in`),cf(),bT(17,`. If you prefer, you can declare all decorators manually, or only specific decorators where you need them.
`),cf(),Aa(18,`h4`,8)(19,`span`),bT(20,`Overview`),cf()(),Aa(21,`p`),bT(22,`The GraphQL plugin automatically does the following:`),cf(),Aa(23,`ul`)(24,`li`),bT(25,`annotate all properties of input object, object type, and args classes with `),Aa(26,`code`),bT(27,`@Field`),cf(),bT(28,`, unless `),Aa(29,`code`),bT(30,`@HideField`),cf(),bT(31,` is used`),cf(),Aa(32,`li`),bT(33,`set the `),Aa(34,`code`),bT(35,`nullable`),cf(),bT(36,` property depending on the question mark (e.g., `),Aa(37,`code`),bT(38,`name?: string`),cf(),bT(39,` sets `),Aa(40,`code`),bT(41,`nullable: true`),cf(),bT(42,`)`),cf(),Aa(43,`li`),bT(44,`set the `),Aa(45,`code`),bT(46,`type`),cf(),bT(47,` property depending on the type (arrays are supported as well)`),cf(),Aa(48,`li`),bT(49,`generate descriptions for properties based on comments (if `),Aa(50,`code`),bT(51,`introspectComments`),cf(),bT(52,` is set to `),Aa(53,`code`),bT(54,`true`),cf(),bT(55,`)`),cf()(),Aa(56,`p`),bT(57,`Your filenames `),Aa(58,`strong`),bT(59,`must have`),cf(),bT(60,` one of the following suffixes to be analyzed by the plugin: `),Aa(61,`code`),bT(62,`['.input.ts', '.args.ts', '.entity.ts', '.model.ts']`),cf(),bT(63,` (e.g., `),Aa(64,`code`),bT(65,`author.entity.ts`),cf(),bT(66,`). If you use a different suffix, adjust the plugin's behavior with the `),Aa(67,`code`),bT(68,`typeFileNameSuffix`),cf(),bT(69,` option (see below).`),cf(),Aa(70,`p`),bT(71,`With what we've covered so far, you have to duplicate a lot of code to tell the package how your type should be declared in GraphQL. For example, you could define an `),Aa(72,`code`),bT(73,`Author`),cf(),bT(74,` class as follows:`),cf(),Aa(75,`app-copy-button`,9)(76,`span`,10),bT(77),LT(78,`extension`),Wa(79,`app-tabs`,null,1),cf(),Aa(81,`pre`)(82,`code`,11),bT(83,`
@ObjectType()
export class Author {
  @Field(type => ID)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Post])
  posts: Post[];
}
`),cf()()(),Aa(84,`p`),bT(85,`While this isn't a significant issue in medium-sized projects, it becomes verbose and hard to maintain once you have a large set of classes.`),cf(),Aa(86,`p`),bT(87,`With the GraphQL plugin enabled, the class definition above can be declared as follows:`),cf(),Aa(88,`app-copy-button`,9)(89,`span`,10),bT(90),LT(91,`extension`),Wa(92,`app-tabs`,null,2),cf(),Aa(94,`pre`)(95,`code`,11),bT(96,`
@ObjectType()
export class Author {
  @Field(type => ID)
  id: number;
  firstName?: string;
  lastName?: string;
  posts: Post[];
}
`),cf()()(),Aa(97,`p`),bT(98,`The plugin adds the appropriate decorators on the fly based on the `),Aa(99,`strong`),bT(100,`Abstract Syntax Tree`),cf(),bT(101,`, so you don't have to scatter `),Aa(102,`code`),bT(103,`@Field`),cf(),bT(104,` decorators throughout the code.`),cf(),Aa(105,`blockquote`,7)(106,`strong`),bT(107,`Hint`),cf(),bT(108,` The plugin automatically generates any missing GraphQL properties. If you need to override them, set them explicitly with `),Aa(109,`code`),bT(110,`@Field()`),cf(),bT(111,`.
`),cf(),Aa(112,`h4`,12)(113,`span`),bT(114,`Comments introspection`),cf()(),Aa(115,`p`),bT(116,`With the comments introspection feature enabled, the CLI plugin generates descriptions for fields based on comments.`),cf(),Aa(117,`p`),bT(118,`For example, consider a `),Aa(119,`code`),bT(120,`roles`),cf(),bT(121,` property:`),cf(),Aa(122,`app-copy-button`)(123,`pre`)(124,`code`,11),bT(125,`
/**
 * A list of user's roles
 */
@Field(() => [String], {
  description: \`A list of user's roles\`
})
roles: string[];
`),cf()()(),Aa(126,`p`),bT(127,`Here, you must duplicate the description. With `),Aa(128,`code`),bT(129,`introspectComments`),cf(),bT(130,` enabled, the CLI plugin extracts these comments and automatically provides descriptions for properties. The field above can then be declared as follows:`),cf(),Aa(131,`app-copy-button`)(132,`pre`)(133,`code`,11),bT(134,`
/**
 * A list of user's roles
 */
roles: string[];
`),cf()()(),Aa(135,`h4`,13)(136,`span`),bT(137,`Using the CLI plugin`),cf()(),Aa(138,`p`),bT(139,`To enable the plugin, open `),Aa(140,`code`),bT(141,`nest-cli.json`),cf(),bT(142,` (if you use the `),Aa(143,`a`,14),bT(144,`Nest CLI`),cf(),bT(145,`) and add the following `),Aa(146,`code`),bT(147,`plugins`),cf(),bT(148,` configuration:`),cf(),Aa(149,`pre`)(150,`code`,15),bT(151,`
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": ["@nestjs/graphql"]
  }
}
`),cf()(),Aa(152,`p`),bT(153,`Use the `),Aa(154,`code`),bT(155,`options`),cf(),bT(156,` property to customize the behavior of the plugin:`),cf(),Aa(157,`pre`)(158,`code`,15),bT(159,`
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": [
      {
        "name": "@nestjs/graphql",
        "options": {
          "typeFileNameSuffix": [".input.ts", ".args.ts"],
          "introspectComments": true
        }
      }
    ]
  }
}
`),cf()(),Aa(160,`p`),bT(161,`The `),Aa(162,`code`),bT(163,`options`),cf(),bT(164,` property accepts the following options:`),cf(),Aa(165,`app-copy-button`)(166,`pre`)(167,`code`,11),bT(168,`
export interface PluginOptions {
  typeFileNameSuffix?: string | string[];
  introspectComments?: boolean;
  esmCompatible?: boolean;
  debug?: boolean;
}
`),cf()()(),Aa(169,`table`)(170,`tr`)(171,`th`),bT(172,`Option`),cf(),Aa(173,`th`),bT(174,`Default`),cf(),Aa(175,`th`),bT(176,`Description`),cf()(),Aa(177,`tr`)(178,`td`)(179,`code`),bT(180,`typeFileNameSuffix`),cf()(),Aa(181,`td`)(182,`code`),bT(183,`['.input.ts', '.args.ts', '.entity.ts', '.model.ts']`),cf()(),Aa(184,`td`),bT(185,`Suffixes of the files that contain GraphQL types`),cf()(),Aa(186,`tr`)(187,`td`)(188,`code`),bT(189,`introspectComments`),cf()(),Aa(190,`td`)(191,`code`),bT(192,`false`),cf()(),Aa(193,`td`),bT(194,`If set to `),Aa(195,`code`),bT(196,`true`),cf(),bT(197,`, the plugin generates descriptions for properties based on comments`),cf()(),Aa(198,`tr`)(199,`td`)(200,`code`),bT(201,`esmCompatible`),cf()(),Aa(202,`td`),bT(203,`Inferred from each file's module format`),cf(),Aa(204,`td`),bT(205,`If set to `),Aa(206,`code`),bT(207,`true`),cf(),bT(208,`, the plugin emits ESM-compatible code (no `),Aa(209,`code`),bT(210,`require()`),cf(),bT(211,` calls, and output extensions appended to relative imports).`),cf()(),Aa(212,`tr`)(213,`td`)(214,`code`),bT(215,`debug`),cf()(),Aa(216,`td`)(217,`code`),bT(218,`false`),cf()(),Aa(219,`td`),bT(220,`If set to `),Aa(221,`code`),bT(222,`true`),cf(),bT(223,`, the plugin logs diagnostic messages (e.g., when it finds a type that isn't exported)`),cf()()(),Aa(224,`p`),bT(225,`If you don't use the CLI and have a custom `),Aa(226,`code`),bT(227,`webpack`),cf(),bT(228,` configuration instead, you can use this plugin in combination with `),Aa(229,`code`),bT(230,`ts-loader`),cf(),bT(231,`:`),cf(),Aa(232,`pre`)(233,`code`,15),bT(234,`
getCustomTransformers: (program) => ({
  before: [require('@nestjs/graphql/plugin').before({}, program)]
}),
`),cf()(),Aa(235,`h4`,16)(236,`span`),bT(237,`SWC builder`),cf()(),Aa(238,`p`),bT(239,`For standard (non-monorepo) setups, using CLI plugins with the SWC builder requires type checking to be enabled, as described in `),Aa(240,`a`,17),bT(241,`SWC type checking`),cf(),bT(242,`.`),cf(),Aa(243,`pre`)(244,`code`,18),bT(245,`
$ nest start -b swc --type-check
`),cf()(),Aa(246,`p`),bT(247,`For monorepo setups, follow the instructions in `),Aa(248,`a`,19),bT(249,`monorepo and CLI plugins`),cf(),bT(250,`.`),cf(),Aa(251,`pre`)(252,`code`,18),bT(253,`
$ npx ts-node src/generate-metadata.ts
# OR npx ts-node apps/{YOUR_APP}/src/generate-metadata.ts
`),cf()(),Aa(254,`p`),bT(255,`Then, load the serialized metadata file in the `),Aa(256,`code`),bT(257,`GraphQLModule`),cf(),bT(258,` configuration, as shown below:`),cf(),Aa(259,`app-copy-button`)(260,`pre`)(261,`code`,11),bT(262,`
import metadata from './metadata.js'; // <-- file auto-generated by the "PluginMetadataGenerator"

GraphQLModule.forRoot<...>({
  ..., // other options
  metadata,
}),
`),cf()()(),Aa(263,`h4`,20)(264,`span`),bT(265,`Integration with `),Aa(266,`code`),bT(267,`ts-jest`),cf(),bT(268,` (e2e tests)`),cf()(),Aa(269,`p`),bT(270,`When you run e2e tests with this plugin enabled, you may run into issues compiling the schema. For example, one of the most common errors is:`),cf(),Aa(271,`pre`)(272,`code`,21),bT(273,`
Object type <name> must define one or more fields.
`),cf()(),Aa(274,`p`),bT(275,`This happens because the `),Aa(276,`code`),bT(277,`jest`),cf(),bT(278,` configuration doesn't import the `),Aa(279,`code`),bT(280,`@nestjs/graphql/plugin`),cf(),bT(281,` plugin anywhere.`),cf(),Aa(282,`p`),bT(283,`To fix this, create the following file in your e2e tests directory:`),cf(),Aa(284,`pre`)(285,`code`,15),bT(286,`
const transformer = require('@nestjs/graphql/plugin');

module.exports.name = 'nestjs-graphql-transformer';
// you should change the version number anytime you change the configuration below - otherwise, jest will not detect changes
module.exports.version = 1;

module.exports.factory = (cs) => {
  return transformer.before(
    {
      // @nestjs/graphql/plugin options (can be empty)
    },
    cs.program, // "cs.tsCompiler.program" for older versions of Jest (<= v27)
  );
};
`),cf()(),Aa(287,`p`),bT(288,`With this in place, import the AST transformer in your `),Aa(289,`code`),bT(290,`jest`),cf(),bT(291,` configuration file. By default (in the starter application), the e2e test configuration file is located in the `),Aa(292,`code`),bT(293,`test`),cf(),bT(294,` folder and is named `),Aa(295,`code`),bT(296,`jest-e2e.json`),cf(),bT(297,`.`),cf(),Aa(298,`pre`)(299,`code`,21),bT(300,`
{
  ... // other configuration
  "globals": {
    "ts-jest": {
      "astTransformers": {
        "before": ["<path to the file created above>"]
      }
    }
  }
}
`),cf()(),Aa(301,`p`),bT(302,`If you use `),Aa(303,`code`),bT(304,`jest@^29`),cf(),bT(305,` or later, use the snippet below instead, as the previous approach is deprecated.`),cf(),Aa(306,`pre`)(307,`code`,21),bT(308,`
{
  ... // other configuration
  "transform": {
    "^.+\\\\.(t|j)s$": [
      "ts-jest",
      {
        "astTransformers": {
          "before": ["<path to the file created above>"]
        }
      }
    ]
  }
}
`),cf()()(),Aa(309,`a`,22),Wa(310,`i`,23),Aa(311,`span`),bT(312,`Edit on GitHub`),cf()()()),o&2){let q=tT(80),k=tT(93);zC(77),hf(` `,jT(78,2,`authors/models/author.model`,q.isJsActive),`
`),zC(13),hf(` `,jT(91,5,`authors/models/author.model`,k.isJsActive),`
`)}},dependencies:[Lt,ln$1,u,Jc,g],encapsulation:2})}return i})();var L=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-complexity`]],features:[xy],decls:118,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`complexity`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/slicknode/graphql-query-complexity`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`getting-started`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`field-level-complexity`],[`appAnchor`,``,`id`,`querymutation-level-complexity`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/complexity.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Complexity`),cf(),Aa(5,`blockquote`,4)(6,`strong`),bT(7,`Warning`),cf(),bT(8,` This chapter applies only to the code first approach.
`),cf(),Aa(9,`p`),bT(10,`Query complexity lets you define how complex certain fields are, and restrict queries with a `),Aa(11,`strong`),bT(12,`maximum complexity`),cf(),bT(13,`. The idea is to express the complexity of each field as a number. A common default is to give each field a complexity of `),Aa(14,`code`),bT(15,`1`),cf(),bT(16,`. You can also customize how the complexity of a GraphQL query is calculated with complexity estimators. A complexity estimator is a function that calculates the complexity of a field. You can add any number of estimators to the rule, and they run one after another. The first estimator that returns a numeric value determines the complexity of that field.`),cf(),Aa(17,`p`),bT(18,`The `),Aa(19,`code`),bT(20,`@nestjs/graphql`),cf(),bT(21,` package integrates with tools like `),Aa(22,`a`,5),bT(23,`graphql-query-complexity`),cf(),bT(24,`, which provides a solution based on cost analysis. With this library, you can reject queries that are too costly to execute.`),cf(),Aa(25,`h4`,6)(26,`span`),bT(27,`Installation`),cf()(),Aa(28,`p`),bT(29,`To begin, install the required dependency:`),cf(),Aa(30,`pre`)(31,`code`,7),bT(32,`
$ npm install --save graphql-query-complexity
`),cf()(),Aa(33,`h4`,8)(34,`span`),bT(35,`Getting started`),cf()(),Aa(36,`p`),bT(37,`Once the installation is complete, define the `),Aa(38,`code`),bT(39,`ComplexityPlugin`),cf(),bT(40,` class:`),cf(),Aa(41,`app-copy-button`)(42,`pre`)(43,`code`,9),bT(44,`
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { Plugin } from '@nestjs/apollo';
import {
  ApolloServerPlugin,
  BaseContext,
  GraphQLRequestListener,
} from '@apollo/server';
import { GraphQLError } from 'graphql';
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from 'graphql-query-complexity';

@Plugin()
export class ComplexityPlugin implements ApolloServerPlugin {
  constructor(private gqlSchemaHost: GraphQLSchemaHost) {}

  async requestDidStart(): Promise<GraphQLRequestListener<BaseContext>> {
    const maxComplexity = 20;
    const { schema } = this.gqlSchemaHost;

    return {
      async didResolveOperation({ request, document }) {
        const complexity = getComplexity({
          schema,
          operationName: request.operationName,
          query: document,
          variables: request.variables,
          estimators: [
            fieldExtensionsEstimator(),
            simpleEstimator({ defaultComplexity: 1 }),
          ],
        });
        if (complexity > maxComplexity) {
          throw new GraphQLError(
            \`Query is too complex: \${complexity}. Maximum allowed complexity: \${maxComplexity}\`,
          );
        }
        console.log('Query Complexity:', complexity);
      },
    };
  }
}
`),cf()()(),Aa(45,`p`),bT(46,`For demonstration purposes, the maximum allowed complexity is set to `),Aa(47,`code`),bT(48,`20`),cf(),bT(49,`. The example above uses two estimators, `),Aa(50,`code`),bT(51,`fieldExtensionsEstimator`),cf(),bT(52,` and `),Aa(53,`code`),bT(54,`simpleEstimator`),cf(),bT(55,`:`),cf(),Aa(56,`ul`)(57,`li`)(58,`code`),bT(59,`fieldExtensionsEstimator`),cf(),bT(60,`: extracts the complexity value defined for each field of your schema (through the field's `),Aa(61,`code`),bT(62,`extensions`),cf(),bT(63,`)`),cf(),Aa(64,`li`)(65,`code`),bT(66,`simpleEstimator`),cf(),bT(67,`: returns a fixed complexity for each field (used as the fallback for fields without a defined complexity)`),cf()(),Aa(68,`blockquote`,10)(69,`strong`),bT(70,`Hint`),cf(),bT(71,` Remember to add this class to the `),Aa(72,`code`),bT(73,`providers`),cf(),bT(74,` array of a module.
`),cf(),Aa(75,`h4`,11)(76,`span`),bT(77,`Field-level complexity`),cf()(),Aa(78,`p`),bT(79,`With this plugin in place, you can define the complexity of any field by specifying the `),Aa(80,`code`),bT(81,`complexity`),cf(),bT(82,` property in the options object passed to the `),Aa(83,`code`),bT(84,`@Field()`),cf(),bT(85,` decorator:`),cf(),Aa(86,`app-copy-button`)(87,`pre`)(88,`code`,9),bT(89,`
@Field({ complexity: 3 })
title: string;
`),cf()()(),Aa(90,`p`),bT(91,`Alternatively, you can define an estimator function:`),cf(),Aa(92,`app-copy-button`)(93,`pre`)(94,`code`,9),bT(95,`
@Field({ complexity: (options: ComplexityEstimatorArgs) => ... })
title: string;
`),cf()()(),Aa(96,`h4`,12)(97,`span`),bT(98,`Query/Mutation-level complexity`),cf()(),Aa(99,`p`),bT(100,`The `),Aa(101,`code`),bT(102,`@Query()`),cf(),bT(103,` and `),Aa(104,`code`),bT(105,`@Mutation()`),cf(),bT(106,` decorators also accept a `),Aa(107,`code`),bT(108,`complexity`),cf(),bT(109,` property in their options object:`),cf(),Aa(110,`app-copy-button`)(111,`pre`)(112,`code`,9),bT(113,`
@Query(() => [Item], {
  complexity: (options: ComplexityEstimatorArgs) =>
    options.args.count * options.childComplexity,
})
items(@Args('count') count: number) {
  return this.itemsService.getItems({ count });
}
`),cf()()()(),Aa(114,`a`,13),Wa(115,`i`,14),Aa(116,`span`),bT(117,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln$1],encapsulation:2})}return i})();var D=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-directives`]],features:[xy],decls:133,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`directives`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/queries/#directives`],[`appAnchor`,``,`id`,`custom-directives`],[1,`language-typescript`],[`appAnchor`,``,`id`,`code-first`],[1,`info`],[1,`warning`],[`appAnchor`,``,`id`,`schema-first`],[1,`language-graphql`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/directives.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Directives`),cf(),Aa(5,`p`),bT(6,`A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way the server desires (see `),Aa(7,`a`,4),bT(8,`directives`),cf(),bT(9,` in the GraphQL documentation). The GraphQL specification provides several default directives:`),cf(),Aa(10,`ul`)(11,`li`)(12,`code`),bT(13,`@include(if: Boolean)`),cf(),bT(14,`: include this field in the result only if the argument is `),Aa(15,`code`),bT(16,`true`),cf()(),Aa(17,`li`)(18,`code`),bT(19,`@skip(if: Boolean)`),cf(),bT(20,`: skip this field if the argument is `),Aa(21,`code`),bT(22,`true`),cf()(),Aa(23,`li`)(24,`code`),bT(25,`@deprecated(reason: String)`),cf(),bT(26,`: mark the field as deprecated, with a message`),cf()(),Aa(27,`p`),bT(28,`A directive is an identifier preceded by an `),Aa(29,`code`),bT(30,`@`),cf(),bT(31,` character, optionally followed by a list of named arguments. Directives can appear after almost any element in the GraphQL query and schema languages.`),cf(),Aa(32,`h4`,5)(33,`span`),bT(34,`Custom directives`),cf()(),Aa(35,`p`),bT(36,`To define what happens when Apollo or Mercurius encounters your directive, create a transformer function. This function uses the `),Aa(37,`code`),bT(38,`mapSchema`),cf(),bT(39,` function to iterate through locations in your schema (field definitions, type definitions, etc.) and apply the corresponding transformations.`),cf(),Aa(40,`app-copy-button`)(41,`pre`)(42,`code`,6),bT(43,`
import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';

export function upperDirectiveTransformer(
  schema: GraphQLSchema,
  directiveName: string,
) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const upperDirective = getDirective(
        schema,
        fieldConfig,
        directiveName,
      )?.[0];

      if (upperDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;

        // Replace the original resolver with a function that *first* calls
        // the original resolver, then converts its result to upper case
        fieldConfig.resolve = async function (source, args, context, info) {
          const result = await resolve(source, args, context, info);
          if (typeof result === 'string') {
            return result.toUpperCase();
          }
          return result;
        };
        return fieldConfig;
      }
    },
  });
}
`),cf()()(),Aa(44,`p`),bT(45,`Next, apply the `),Aa(46,`code`),bT(47,`upperDirectiveTransformer`),cf(),bT(48,` function in the `),Aa(49,`code`),bT(50,`GraphQLModule#forRoot()`),cf(),bT(51,` method using the `),Aa(52,`code`),bT(53,`transformSchema`),cf(),bT(54,` option:`),cf(),Aa(55,`app-copy-button`)(56,`pre`)(57,`code`,6),bT(58,`
GraphQLModule.forRoot({
  // ...
  transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
});
`),cf()()(),Aa(59,`p`),bT(60,`Once registered, the `),Aa(61,`code`),bT(62,`@upper`),cf(),bT(63,` directive can be used in your schema. How you apply the directive depends on the approach you use (code first or schema first).`),cf(),Aa(64,`h4`,7)(65,`span`),bT(66,`Code first`),cf()(),Aa(67,`p`),bT(68,`In the code first approach, use the `),Aa(69,`code`),bT(70,`@Directive()`),cf(),bT(71,` decorator to apply the directive:`),cf(),Aa(72,`app-copy-button`)(73,`pre`)(74,`code`,6),bT(75,`
@Directive('@upper')
@Field()
title: string;
`),cf()()(),Aa(76,`blockquote`,8)(77,`strong`),bT(78,`Hint`),cf(),bT(79,` The `),Aa(80,`code`),bT(81,`@Directive()`),cf(),bT(82,` decorator is exported from the `),Aa(83,`code`),bT(84,`@nestjs/graphql`),cf(),bT(85,` package.
`),cf(),Aa(86,`p`),bT(87,`Directives can be applied to fields, field resolvers, input and object types, as well as queries, mutations, and subscriptions. The following example applies a directive at the query handler level:`),cf(),Aa(88,`app-copy-button`)(89,`pre`)(90,`code`,6),bT(91,`
@Directive('@deprecated(reason: "This query will be removed in the next version")')
@Query(() => Author, { name: 'author' })
async getAuthor(@Args({ name: 'id', type: () => Int }) id: number) {
  return this.authorsService.findOneById(id);
}
`),cf()()(),Aa(92,`blockquote`,9)(93,`strong`),bT(94,`Warning`),cf(),bT(95,` Directives applied through the `),Aa(96,`code`),bT(97,`@Directive()`),cf(),bT(98,` decorator are not reflected in the generated schema definition file.
`),cf(),Aa(99,`p`),bT(100,`Lastly, declare the directives in the `),Aa(101,`code`),bT(102,`GraphQLModule`),cf(),bT(103,` configuration:`),cf(),Aa(104,`app-copy-button`)(105,`pre`)(106,`code`,6),bT(107,`
GraphQLModule.forRoot({
  // ...,
  transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
  buildSchemaOptions: {
    directives: [
      new GraphQLDirective({
        name: 'upper',
        locations: [DirectiveLocation.FIELD_DEFINITION],
      }),
    ],
  },
}),
`),cf()()(),Aa(108,`blockquote`,8)(109,`strong`),bT(110,`Hint`),cf(),bT(111,` Both `),Aa(112,`code`),bT(113,`GraphQLDirective`),cf(),bT(114,` and `),Aa(115,`code`),bT(116,`DirectiveLocation`),cf(),bT(117,` are exported from the `),Aa(118,`code`),bT(119,`graphql`),cf(),bT(120,` package.
`),cf(),Aa(121,`h4`,10)(122,`span`),bT(123,`Schema first`),cf()(),Aa(124,`p`),bT(125,`In the schema first approach, apply directives directly in SDL:`),cf(),Aa(126,`pre`)(127,`code`,11),bT(128,`
directive @upper on FIELD_DEFINITION

type Post {
  id: Int!
  title: String! @upper
  votes: Int
}
`),cf()()(),Aa(129,`a`,12),Wa(130,`i`,13),Aa(131,`span`),bT(132,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln$1],encapsulation:2})}return i})();var R=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-extensions`]],features:[xy],decls:75,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`extensions`],[1,`warning`],[`appAnchor`,``,`id`,`adding-custom-metadata`],[1,`language-typescript`],[`appAnchor`,``,`id`,`using-custom-metadata`],[`routerLink`,`/graphql/field-middleware`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/extensions.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Extensions`),cf(),Aa(5,`blockquote`,4)(6,`strong`),bT(7,`Warning`),cf(),bT(8,` This chapter applies only to the code first approach.
`),cf(),Aa(9,`p`),bT(10,`Extensions are an `),Aa(11,`strong`),bT(12,`advanced, low-level feature`),cf(),bT(13,` that lets you define arbitrary data in the types configuration. Attaching custom metadata to certain fields allows you to build more sophisticated, generic solutions. For example, with extensions, you can define the roles required to access particular fields. Your code can read these roles at runtime to determine whether the caller has sufficient permissions to retrieve a specific field.`),cf(),Aa(14,`h4`,5)(15,`span`),bT(16,`Adding custom metadata`),cf()(),Aa(17,`p`),bT(18,`To attach custom metadata to a field, use the `),Aa(19,`code`),bT(20,`@Extensions()`),cf(),bT(21,` decorator exported from the `),Aa(22,`code`),bT(23,`@nestjs/graphql`),cf(),bT(24,` package:`),cf(),Aa(25,`app-copy-button`)(26,`pre`)(27,`code`,6),bT(28,`
@Field()
@Extensions({ role: Role.ADMIN })
password: string;
`),cf()()(),Aa(29,`p`),bT(30,`In the example above, we assigned the value `),Aa(31,`code`),bT(32,`Role.ADMIN`),cf(),bT(33,` to the `),Aa(34,`code`),bT(35,`role`),cf(),bT(36,` metadata property. `),Aa(37,`code`),bT(38,`Role`),cf(),bT(39,` is a TypeScript enum that groups all the user roles available in our system.`),cf(),Aa(40,`p`),bT(41,`In addition to fields, you can use the `),Aa(42,`code`),bT(43,`@Extensions()`),cf(),bT(44,` decorator at the class level and at the method level (e.g., on a query handler).`),cf(),Aa(45,`h4`,7)(46,`span`),bT(47,`Using custom metadata`),cf()(),Aa(48,`p`),bT(49,`The logic that uses the custom metadata can be as complex as needed. For example, you can create an interceptor that stores or logs events per method invocation, or a `),Aa(50,`a`,8),bT(51,`field middleware`),cf(),bT(52,` that matches the roles required to retrieve a field against the caller's permissions (a field-level permissions system).`),cf(),Aa(53,`p`),bT(54,`For illustration purposes, let's define a `),Aa(55,`code`),bT(56,`checkRoleMiddleware`),cf(),bT(57,` that compares a user's role (hardcoded here) with the role required to access a target field:`),cf(),Aa(58,`app-copy-button`)(59,`pre`)(60,`code`,6),bT(61,`
export const checkRoleMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const info = ctx.info!;
  const { extensions } = info.parentType.getFields()[info.fieldName];

  /**
   * In a real-world application, the "userRole" variable
   * should represent the caller's (user) role (e.g., read from "ctx.context").
   */
  const userRole = Role.USER;
  if (userRole !== extensions.role) {
    // or "return null" to hide the value instead
    throw new ForbiddenException(
      \`User does not have sufficient permissions to access "\${info.fieldName}" field.\`,
    );
  }
  return next();
};
`),cf()()(),Aa(62,`p`),bT(63,`With this in place, register the middleware for the `),Aa(64,`code`),bT(65,`password`),cf(),bT(66,` field:`),cf(),Aa(67,`app-copy-button`)(68,`pre`)(69,`code`,6),bT(70,`
@Field({ middleware: [checkRoleMiddleware] })
@Extensions({ role: Role.ADMIN })
password: string;
`),cf()()()(),Aa(71,`a`,9),Wa(72,`i`,10),Aa(73,`span`),bT(74,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln$1,Jc],encapsulation:2})}return i})();var G=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-federation`]],features:[xy],decls:714,vars:2,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`federation`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://blog.apollographql.com/apollo-federation-f260cf525d21`],[1,`info`],[`appAnchor`,``,`id`,`federation-with-apollo`],[1,`language-bash`],[`appAnchor`,``,`id`,`schema-first`],[1,`language-graphql`],[1,`language-typescript`],[`appAnchor`,``,`id`,`code-first`],[1,`language-ts`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/31-graphql-federation-code-first/users-application`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/32-graphql-federation-schema-first/users-application`],[`appAnchor`,``,`id`,`federated-example-posts`],[`appAnchor`,``,`id`,`schema-first-1`],[`appAnchor`,``,`id`,`code-first-1`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/31-graphql-federation-code-first/posts-application`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/32-graphql-federation-schema-first/posts-application`],[`appAnchor`,``,`id`,`federated-example-gateway`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/31-graphql-federation-code-first/gateway`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/32-graphql-federation-schema-first/gateway`],[`appAnchor`,``,`id`,`federation-with-mercurius`],[`appAnchor`,``,`id`,`schema-first-2`],[`appAnchor`,``,`id`,`code-first-2`],[`appAnchor`,``,`id`,`federated-example-posts-1`],[`appAnchor`,``,`id`,`schema-first-3`],[`appAnchor`,``,`id`,`code-first-3`],[`appAnchor`,``,`id`,`federated-example-gateway-1`],[`id`,`federation-2`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/federation/federation-2/new-in-federation-2`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/federation/supported-subgraphs#javascript--typescript`],[`appAnchor`,``,`id`,`federated-example-users`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/federation/federation-2/new-in-federation-2#entities`],[`appAnchor`,``,`id`,`schema-first-4`],[`appAnchor`,``,`id`,`code-first-4`],[`appAnchor`,``,`id`,`federated-example-posts-2`],[`appAnchor`,``,`id`,`schema-first-5`],[`appAnchor`,``,`id`,`code-first-5`],[`appAnchor`,``,`id`,`hiding-operations-from-the-supergraph`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/federation.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Federation`),cf(),Aa(5,`p`),bT(6,`Federation lets you split a monolithic GraphQL server into independent microservices. It consists of two components: a gateway and one or more federated microservices. Each microservice holds part of the schema, and the gateway merges the schemas into a single schema that clients consume.`),cf(),Aa(7,`p`),bT(8,`As described in `),Aa(9,`a`,4),bT(10,`Apollo's introduction to federation`),cf(),bT(11,`, federation is designed around these core principles:`),cf(),Aa(12,`ul`)(13,`li`),bT(14,`Building a graph should be `),Aa(15,`strong`),bT(16,`declarative.`),cf(),bT(17,` With federation, you compose a graph declaratively from within your schema instead of writing imperative schema stitching code.`),cf(),Aa(18,`li`),bT(19,`Code should be separated by `),Aa(20,`strong`),bT(21,`concern`),cf(),bT(22,`, not by types. Often no single team controls every aspect of an important type like a User or Product, so the definition of these types should be distributed across teams and codebases, rather than centralized.`),cf(),Aa(23,`li`),bT(24,`The graph should be simple for clients to consume. Together, federated services can form a complete, product-focused graph that accurately reflects how it's being consumed on the client.`),cf(),Aa(25,`li`),bT(26,`It's just `),Aa(27,`strong`),bT(28,`GraphQL`),cf(),bT(29,`, using only spec-compliant features of the language. Any language, not just JavaScript, can implement federation.`),cf()(),Aa(30,`blockquote`,5)(31,`strong`),bT(32,`Hint`),cf(),bT(33,` Subgraphs built with `),Aa(34,`code`),bT(35,`ApolloFederationDriver`),cf(),bT(36,` or `),Aa(37,`code`),bT(38,`MercuriusFederationDriver`),cf(),bT(39,` support subscriptions (with the `),Aa(40,`code`),bT(41,`subscriptions`),cf(),bT(42,` option for Apollo, or `),Aa(43,`code`),bT(44,`subscription: true`),cf(),bT(45,` for Mercurius). The Apollo Gateway (`),Aa(46,`code`),bT(47,`ApolloGatewayDriver`),cf(),bT(48,`) does not forward subscriptions to subgraphs, so to expose them through a single federated endpoint, use a router that supports federated subscriptions, such as Apollo Router, or the Mercurius gateway (set `),Aa(49,`code`),bT(50,`subscription: true`),cf(),bT(51,` on the gateway and `),Aa(52,`code`),bT(53,`wsUrl`),cf(),bT(54,` for each service).
`),cf(),Aa(55,`p`),bT(56,`In the following sections, we'll set up a demo application that consists of a gateway and two federated endpoints: a Users service and a Posts service.`),cf(),Aa(57,`h4`,6)(58,`span`),bT(59,`Federation with Apollo`),cf()(),Aa(60,`p`),bT(61,`Start by installing the required dependencies:`),cf(),Aa(62,`pre`)(63,`code`,7),bT(64,`
$ npm install --save @apollo/subgraph
`),cf()(),Aa(65,`h4`,8)(66,`span`),bT(67,`Schema first`),cf()(),Aa(68,`p`),bT(69,`The Users service provides a simple schema. The `),Aa(70,`code`),bT(71,`@key`),cf(),bT(72,` directive tells the Apollo query planner that a particular instance of `),Aa(73,`code`),bT(74,`User`),cf(),bT(75,` can be fetched by its `),Aa(76,`code`),bT(77,`id`),cf(),bT(78,`. Also note that the schema extends the `),Aa(79,`code`),bT(80,`Query`),cf(),bT(81,` type.`),cf(),Aa(82,`pre`)(83,`code`,9),bT(84,`
type User @key(fields: "id") {
  id: ID!
  name: String!
}

extend type Query {
  getUser(id: ID!): User
}
`),cf()(),Aa(85,`p`),bT(86,`The resolver provides one additional method named `),Aa(87,`code`),bT(88,`resolveReference()`),cf(),bT(89,`. The Apollo gateway calls this method whenever a related resource requires a `),Aa(90,`code`),bT(91,`User`),cf(),bT(92,` instance. You'll see an example of this in the Posts service later. The method must be annotated with the `),Aa(93,`code`),bT(94,`@ResolveReference()`),cf(),bT(95,` decorator.`),cf(),Aa(96,`app-copy-button`)(97,`pre`)(98,`code`,10),bT(99,`
import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { UsersService } from './users.service.js';

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query()
  getUser(@Args('id') id: string) {
    return this.usersService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.usersService.findById(reference.id);
  }
}
`),cf()()(),Aa(100,`p`),bT(101,`Finally, wire everything up by registering the `),Aa(102,`code`),bT(103,`GraphQLModule`),cf(),bT(104,` with the `),Aa(105,`code`),bT(106,`ApolloFederationDriver`),cf(),bT(107,` driver in the configuration object:`),cf(),Aa(108,`app-copy-button`)(109,`pre`)(110,`code`,10),bT(111,`
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users.resolver.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
    }),
  ],
  providers: [UsersResolver],
})
export class AppModule {}
`),cf()()(),Aa(112,`h4`,11)(113,`span`),bT(114,`Code first`),cf()(),Aa(115,`p`),bT(116,`Start by adding some extra decorators to the `),Aa(117,`code`),bT(118,`User`),cf(),bT(119,` entity:`),cf(),Aa(120,`app-copy-button`)(121,`pre`)(122,`code`,12),bT(123,`
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
`),cf()()(),Aa(124,`p`),bT(125,`The resolver provides one additional method named `),Aa(126,`code`),bT(127,`resolveReference()`),cf(),bT(128,`. The Apollo gateway calls this method whenever a related resource requires a `),Aa(129,`code`),bT(130,`User`),cf(),bT(131,` instance. You'll see an example of this in the Posts service later. The method must be annotated with the `),Aa(132,`code`),bT(133,`@ResolveReference()`),cf(),bT(134,` decorator.`),cf(),Aa(135,`app-copy-button`)(136,`pre`)(137,`code`,12),bT(138,`
import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from './user.entity.js';
import { UsersService } from './users.service.js';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  getUser(@Args('id') id: number): User {
    return this.usersService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): User {
    return this.usersService.findById(reference.id);
  }
}
`),cf()()(),Aa(139,`p`),bT(140,`Finally, wire everything up by registering the `),Aa(141,`code`),bT(142,`GraphQLModule`),cf(),bT(143,` with the `),Aa(144,`code`),bT(145,`ApolloFederationDriver`),cf(),bT(146,` driver in the configuration object:`),cf(),Aa(147,`app-copy-button`)(148,`pre`)(149,`code`,10),bT(150,`
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users.resolver.js';
import { UsersService } from './users.service.js'; // Not included in this example

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class AppModule {}
`),cf()()(),Aa(151,`p`),bT(152,`Working examples are available for the `),Aa(153,`a`,13),bT(154,`code first`),cf(),bT(155,` and `),Aa(156,`a`,14),bT(157,`schema first`),cf(),bT(158,` approaches.`),cf(),Aa(159,`h4`,15)(160,`span`),bT(161,`Federated example: Posts`),cf()(),Aa(162,`p`),bT(163,`The Posts service serves aggregated posts through the `),Aa(164,`code`),bT(165,`getPosts`),cf(),bT(166,` query, and also extends the `),Aa(167,`code`),bT(168,`User`),cf(),bT(169,` type with a `),Aa(170,`code`),bT(171,`user.posts`),cf(),bT(172,` field.`),cf(),Aa(173,`h4`,16)(174,`span`),bT(175,`Schema first`),cf()(),Aa(176,`p`),bT(177,`The Posts service references the `),Aa(178,`code`),bT(179,`User`),cf(),bT(180,` type in its schema by marking it with the `),Aa(181,`code`),bT(182,`extend`),cf(),bT(183,` keyword. It also declares one additional field on the `),Aa(184,`code`),bT(185,`User`),cf(),bT(186,` type (`),Aa(187,`code`),bT(188,`posts`),cf(),bT(189,`). Note the `),Aa(190,`code`),bT(191,`@key`),cf(),bT(192,` directive, used to match `),Aa(193,`code`),bT(194,`User`),cf(),bT(195,` instances, and the `),Aa(196,`code`),bT(197,`@external`),cf(),bT(198,` directive, which indicates that the `),Aa(199,`code`),bT(200,`id`),cf(),bT(201,` field is managed elsewhere.`),cf(),Aa(202,`pre`)(203,`code`,9),bT(204,`
type Post @key(fields: "id") {
  id: ID!
  title: String!
  body: String!
  user: User
}

extend type User @key(fields: "id") {
  id: ID! @external
  posts: [Post]
}

extend type Query {
  getPosts: [Post]
}
`),cf()(),Aa(205,`p`),bT(206,`In the following example, the `),Aa(207,`code`),bT(208,`PostsResolver`),cf(),bT(209,` provides a `),Aa(210,`code`),bT(211,`getUser()`),cf(),bT(212,` method that returns a reference containing `),Aa(213,`code`),bT(214,`__typename`),cf(),bT(215,` plus any additional properties your application needs to resolve the reference, in this case `),Aa(216,`code`),bT(217,`id`),cf(),bT(218,`. The gateway uses `),Aa(219,`code`),bT(220,`__typename`),cf(),bT(221,` to pinpoint the microservice responsible for the `),Aa(222,`code`),bT(223,`User`),cf(),bT(224,` type and retrieve the corresponding instance. To resolve the reference, the gateway sends a request to the Users service described above, which executes its `),Aa(225,`code`),bT(226,`resolveReference()`),cf(),bT(227,` method.`),cf(),Aa(228,`app-copy-button`)(229,`pre`)(230,`code`,10),bT(231,`
import { Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { PostsService } from './posts.service.js';
import type { Post } from './posts.interfaces.js';

@Resolver('Post')
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query('getPosts')
  getPosts() {
    return this.postsService.findAll();
  }

  @ResolveField('user')
  getUser(@Parent() post: Post) {
    return { __typename: 'User', id: post.userId };
  }
}
`),cf()()(),Aa(232,`p`),bT(233,`Lastly, register the `),Aa(234,`code`),bT(235,`GraphQLModule`),cf(),bT(236,`, as in the Users service.`),cf(),Aa(237,`app-copy-button`)(238,`pre`)(239,`code`,10),bT(240,`
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsResolver } from './posts.resolver.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['**/*.graphql'],
    }),
  ],
  providers: [PostsResolver],
})
export class AppModule {}
`),cf()()(),Aa(241,`h4`,17)(242,`span`),bT(243,`Code first`),cf()(),Aa(244,`p`),bT(245,`First, declare a class representing the `),Aa(246,`code`),bT(247,`User`),cf(),bT(248,` entity. Although the entity itself lives in another service, this service uses it (and extends its definition). Note the `),Aa(249,`code`),bT(250,`@extends`),cf(),bT(251,` and `),Aa(252,`code`),bT(253,`@external`),cf(),bT(254,` directives.`),cf(),Aa(255,`app-copy-button`)(256,`pre`)(257,`code`,12),bT(258,`
import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post.entity.js';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: number;

  @Field(() => [Post])
  posts?: Post[];
}
`),cf()()(),Aa(259,`p`),bT(260,`Next, create the resolver for the extension of the `),Aa(261,`code`),bT(262,`User`),cf(),bT(263,` entity:`),cf(),Aa(264,`app-copy-button`)(265,`pre`)(266,`code`,12),bT(267,`
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service.js';
import { Post } from './post.entity.js';
import { User } from './user.entity.js';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField(() => [Post])
  public posts(@Parent() user: User): Post[] {
    return this.postsService.forAuthor(user.id);
  }
}
`),cf()()(),Aa(268,`p`),bT(269,`Then define the `),Aa(270,`code`),bT(271,`Post`),cf(),bT(272,` entity class:`),cf(),Aa(273,`app-copy-button`)(274,`pre`)(275,`code`,12),bT(276,`
import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity.js';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field(() => Int)
  authorId: number;

  @Field(() => User)
  user?: User;
}
`),cf()()(),Aa(277,`p`),bT(278,`And its resolver:`),cf(),Aa(279,`app-copy-button`)(280,`pre`)(281,`code`,12),bT(282,`
import { Query, Args, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service.js';
import { Post } from './post.entity.js';
import { User } from './user.entity.js';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => Post)
  findPost(@Args('id') id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query(() => [Post])
  getPosts(): Post[] {
    return this.postsService.all();
  }

  @ResolveField(() => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}
`),cf()()(),Aa(283,`p`),bT(284,`Finally, tie everything together in a module. Note the schema build options, which specify that `),Aa(285,`code`),bT(286,`User`),cf(),bT(287,` is an orphaned (external) type.`),cf(),Aa(288,`app-copy-button`)(289,`pre`)(290,`code`,12),bT(291,`
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { User } from './user.entity.js';
import { PostsResolver } from './posts.resolver.js';
import { UsersResolver } from './users.resolver.js';
import { PostsService } from './posts.service.js'; // Not included in this example

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [PostsResolver, UsersResolver, PostsService],
})
export class AppModule {}
`),cf()()(),Aa(292,`p`),bT(293,`Working examples are available for the `),Aa(294,`a`,18),bT(295,`code first`),cf(),bT(296,` and `),Aa(297,`a`,19),bT(298,`schema first`),cf(),bT(299,` approaches.`),cf(),Aa(300,`h4`,20)(301,`span`),bT(302,`Federated example: Gateway`),cf()(),Aa(303,`p`),bT(304,`Start by installing the required dependency:`),cf(),Aa(305,`pre`)(306,`code`,7),bT(307,`
$ npm install --save @apollo/gateway
`),cf()(),Aa(308,`p`),bT(309,`The gateway requires a list of endpoints, and it discovers the corresponding schemas automatically. Therefore, the gateway implementation is the same for both the code first and schema first approaches.`),cf(),Aa(310,`app-copy-button`)(311,`pre`)(312,`code`,10),bT(313,`
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        // ... Apollo Server options
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'users', url: 'http://user-service/graphql' },
            { name: 'posts', url: 'http://post-service/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(314,`p`),bT(315,`Working examples are available for the `),Aa(316,`a`,21),bT(317,`code first`),cf(),bT(318,` and `),Aa(319,`a`,22),bT(320,`schema first`),cf(),bT(321,` approaches.`),cf(),Aa(322,`h4`,23)(323,`span`),bT(324,`Federation with Mercurius`),cf()(),Aa(325,`p`),bT(326,`Start by installing the required dependencies:`),cf(),Aa(327,`pre`)(328,`code`,7),bT(329,`
$ npm install --save @apollo/subgraph @nestjs/mercurius
`),cf()(),Aa(330,`blockquote`,5)(331,`strong`),bT(332,`Note`),cf(),bT(333,` The `),Aa(334,`code`),bT(335,`@apollo/subgraph`),cf(),bT(336,` package is required to build a subgraph schema (the `),Aa(337,`code`),bT(338,`buildSubgraphSchema`),cf(),bT(339,` and `),Aa(340,`code`),bT(341,`printSubgraphSchema`),cf(),bT(342,` functions).
`),cf(),Aa(343,`h4`,24)(344,`span`),bT(345,`Schema first`),cf()(),Aa(346,`p`),bT(347,`The Users service provides a simple schema. The `),Aa(348,`code`),bT(349,`@key`),cf(),bT(350,` directive tells the Mercurius query planner that a particular instance of `),Aa(351,`code`),bT(352,`User`),cf(),bT(353,` can be fetched by its `),Aa(354,`code`),bT(355,`id`),cf(),bT(356,`. Also note that the schema extends the `),Aa(357,`code`),bT(358,`Query`),cf(),bT(359,` type.`),cf(),Aa(360,`pre`)(361,`code`,9),bT(362,`
type User @key(fields: "id") {
  id: ID!
  name: String!
}

extend type Query {
  getUser(id: ID!): User
}
`),cf()(),Aa(363,`p`),bT(364,`The resolver provides one additional method named `),Aa(365,`code`),bT(366,`resolveReference()`),cf(),bT(367,`. The Mercurius gateway calls this method whenever a related resource requires a `),Aa(368,`code`),bT(369,`User`),cf(),bT(370,` instance. You'll see an example of this in the Posts service later. The method must be annotated with the `),Aa(371,`code`),bT(372,`@ResolveReference()`),cf(),bT(373,` decorator.`),cf(),Aa(374,`app-copy-button`)(375,`pre`)(376,`code`,10),bT(377,`
import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { UsersService } from './users.service.js';

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query()
  getUser(@Args('id') id: string) {
    return this.usersService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.usersService.findById(reference.id);
  }
}
`),cf()()(),Aa(378,`p`),bT(379,`Finally, wire everything up by registering the `),Aa(380,`code`),bT(381,`GraphQLModule`),cf(),bT(382,` with the `),Aa(383,`code`),bT(384,`MercuriusFederationDriver`),cf(),bT(385,` driver in the configuration object:`),cf(),Aa(386,`app-copy-button`)(387,`pre`)(388,`code`,10),bT(389,`
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from '@nestjs/mercurius';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users.resolver.js';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      typePaths: ['**/*.graphql'],
    }),
  ],
  providers: [UsersResolver],
})
export class AppModule {}
`),cf()()(),Aa(390,`h4`,25)(391,`span`),bT(392,`Code first`),cf()(),Aa(393,`p`),bT(394,`Start by adding some extra decorators to the `),Aa(395,`code`),bT(396,`User`),cf(),bT(397,` entity:`),cf(),Aa(398,`app-copy-button`)(399,`pre`)(400,`code`,12),bT(401,`
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
`),cf()()(),Aa(402,`p`),bT(403,`The resolver provides one additional method named `),Aa(404,`code`),bT(405,`resolveReference()`),cf(),bT(406,`. The Mercurius gateway calls this method whenever a related resource requires a `),Aa(407,`code`),bT(408,`User`),cf(),bT(409,` instance. You'll see an example of this in the Posts service later. The method must be annotated with the `),Aa(410,`code`),bT(411,`@ResolveReference()`),cf(),bT(412,` decorator.`),cf(),Aa(413,`app-copy-button`)(414,`pre`)(415,`code`,12),bT(416,`
import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from './user.entity.js';
import { UsersService } from './users.service.js';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  getUser(@Args('id') id: number): User {
    return this.usersService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): User {
    return this.usersService.findById(reference.id);
  }
}
`),cf()()(),Aa(417,`p`),bT(418,`Finally, wire everything up by registering the `),Aa(419,`code`),bT(420,`GraphQLModule`),cf(),bT(421,` with the `),Aa(422,`code`),bT(423,`MercuriusFederationDriver`),cf(),bT(424,` driver in the configuration object:`),cf(),Aa(425,`app-copy-button`)(426,`pre`)(427,`code`,10),bT(428,`
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from '@nestjs/mercurius';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users.resolver.js';
import { UsersService } from './users.service.js'; // Not included in this example

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class AppModule {}
`),cf()()(),Aa(429,`h4`,26)(430,`span`),bT(431,`Federated example: Posts`),cf()(),Aa(432,`p`),bT(433,`The Posts service serves aggregated posts through the `),Aa(434,`code`),bT(435,`getPosts`),cf(),bT(436,` query, and also extends the `),Aa(437,`code`),bT(438,`User`),cf(),bT(439,` type with a `),Aa(440,`code`),bT(441,`user.posts`),cf(),bT(442,` field.`),cf(),Aa(443,`h4`,27)(444,`span`),bT(445,`Schema first`),cf()(),Aa(446,`p`),bT(447,`The Posts service references the `),Aa(448,`code`),bT(449,`User`),cf(),bT(450,` type in its schema by marking it with the `),Aa(451,`code`),bT(452,`extend`),cf(),bT(453,` keyword. It also declares one additional field on the `),Aa(454,`code`),bT(455,`User`),cf(),bT(456,` type (`),Aa(457,`code`),bT(458,`posts`),cf(),bT(459,`). Note the `),Aa(460,`code`),bT(461,`@key`),cf(),bT(462,` directive, used to match `),Aa(463,`code`),bT(464,`User`),cf(),bT(465,` instances, and the `),Aa(466,`code`),bT(467,`@external`),cf(),bT(468,` directive, which indicates that the `),Aa(469,`code`),bT(470,`id`),cf(),bT(471,` field is managed elsewhere.`),cf(),Aa(472,`pre`)(473,`code`,9),bT(474,`
type Post @key(fields: "id") {
  id: ID!
  title: String!
  body: String!
  user: User
}

extend type User @key(fields: "id") {
  id: ID! @external
  posts: [Post]
}

extend type Query {
  getPosts: [Post]
}
`),cf()(),Aa(475,`p`),bT(476,`In the following example, the `),Aa(477,`code`),bT(478,`PostsResolver`),cf(),bT(479,` provides a `),Aa(480,`code`),bT(481,`getUser()`),cf(),bT(482,` method that returns a reference containing `),Aa(483,`code`),bT(484,`__typename`),cf(),bT(485,` plus any additional properties your application needs to resolve the reference, in this case `),Aa(486,`code`),bT(487,`id`),cf(),bT(488,`. The gateway uses `),Aa(489,`code`),bT(490,`__typename`),cf(),bT(491,` to pinpoint the microservice responsible for the `),Aa(492,`code`),bT(493,`User`),cf(),bT(494,` type and retrieve the corresponding instance. To resolve the reference, the gateway sends a request to the Users service described above, which executes its `),Aa(495,`code`),bT(496,`resolveReference()`),cf(),bT(497,` method.`),cf(),Aa(498,`app-copy-button`)(499,`pre`)(500,`code`,10),bT(501,`
import { Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { PostsService } from './posts.service.js';
import type { Post } from './posts.interfaces.js';

@Resolver('Post')
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query('getPosts')
  getPosts() {
    return this.postsService.findAll();
  }

  @ResolveField('user')
  getUser(@Parent() post: Post) {
    return { __typename: 'User', id: post.userId };
  }
}
`),cf()()(),Aa(502,`p`),bT(503,`Lastly, register the `),Aa(504,`code`),bT(505,`GraphQLModule`),cf(),bT(506,`, as in the Users service.`),cf(),Aa(507,`app-copy-button`)(508,`pre`)(509,`code`,10),bT(510,`
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from '@nestjs/mercurius';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsResolver } from './posts.resolver.js';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      typePaths: ['**/*.graphql'],
    }),
  ],
  providers: [PostsResolver],
})
export class AppModule {}
`),cf()()(),Aa(511,`h4`,28)(512,`span`),bT(513,`Code first`),cf()(),Aa(514,`p`),bT(515,`First, declare a class representing the `),Aa(516,`code`),bT(517,`User`),cf(),bT(518,` entity. Although the entity itself lives in another service, this service uses it (and extends its definition). Note the `),Aa(519,`code`),bT(520,`@extends`),cf(),bT(521,` and `),Aa(522,`code`),bT(523,`@external`),cf(),bT(524,` directives.`),cf(),Aa(525,`app-copy-button`)(526,`pre`)(527,`code`,12),bT(528,`
import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post.entity.js';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: number;

  @Field(() => [Post])
  posts?: Post[];
}
`),cf()()(),Aa(529,`p`),bT(530,`Next, create the resolver for the extension of the `),Aa(531,`code`),bT(532,`User`),cf(),bT(533,` entity:`),cf(),Aa(534,`app-copy-button`)(535,`pre`)(536,`code`,12),bT(537,`
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service.js';
import { Post } from './post.entity.js';
import { User } from './user.entity.js';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField(() => [Post])
  public posts(@Parent() user: User): Post[] {
    return this.postsService.forAuthor(user.id);
  }
}
`),cf()()(),Aa(538,`p`),bT(539,`Then define the `),Aa(540,`code`),bT(541,`Post`),cf(),bT(542,` entity class:`),cf(),Aa(543,`app-copy-button`)(544,`pre`)(545,`code`,12),bT(546,`
import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity.js';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field(() => Int)
  authorId: number;

  @Field(() => User)
  user?: User;
}
`),cf()()(),Aa(547,`p`),bT(548,`And its resolver:`),cf(),Aa(549,`app-copy-button`)(550,`pre`)(551,`code`,12),bT(552,`
import { Query, Args, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service.js';
import { Post } from './post.entity.js';
import { User } from './user.entity.js';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => Post)
  findPost(@Args('id') id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query(() => [Post])
  getPosts(): Post[] {
    return this.postsService.all();
  }

  @ResolveField(() => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}
`),cf()()(),Aa(553,`p`),bT(554,`Finally, tie everything together in a module. Note the schema build options, which specify that `),Aa(555,`code`),bT(556,`User`),cf(),bT(557,` is an orphaned (external) type.`),cf(),Aa(558,`app-copy-button`)(559,`pre`)(560,`code`,12),bT(561,`
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from '@nestjs/mercurius';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { User } from './user.entity.js';
import { PostsResolver } from './posts.resolver.js';
import { UsersResolver } from './users.resolver.js';
import { PostsService } from './posts.service.js'; // Not included in this example

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [PostsResolver, UsersResolver, PostsService],
})
export class AppModule {}
`),cf()()(),Aa(562,`h4`,29)(563,`span`),bT(564,`Federated example: Gateway`),cf()(),Aa(565,`p`),bT(566,`Start by installing the required dependency:`),cf(),Aa(567,`pre`)(568,`code`,7),bT(569,`
$ npm install --save @mercuriusjs/gateway
`),cf()(),Aa(570,`p`),bT(571,`The gateway requires a list of endpoints, and it discovers the corresponding schemas automatically. Therefore, the gateway implementation is the same for both the code first and schema first approaches.`),cf(),Aa(572,`app-copy-button`)(573,`pre`)(574,`code`,10),bT(575,`
import {
  MercuriusGatewayDriver,
  MercuriusGatewayDriverConfig,
} from '@nestjs/mercurius';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusGatewayDriverConfig>({
      driver: MercuriusGatewayDriver,
      gateway: {
        services: [
          { name: 'users', url: 'http://user-service/graphql' },
          { name: 'posts', url: 'http://post-service/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(576,`h3`,30),bT(577,`Federation 2`),cf(),Aa(578,`p`),bT(579,`According to the `),Aa(580,`a`,31),bT(581,`Apollo docs`),cf(),bT(582,`, Federation 2 improves the developer experience of the original Apollo Federation (called Federation 1 in this section) and is backward compatible with most original supergraphs.`),cf(),Aa(583,`blockquote`,32)(584,`strong`),bT(585,`Warning`),cf(),bT(586,` Mercurius doesn't fully support Federation 2. See Apollo's list of `),Aa(587,`a`,33),bT(588,`subgraph libraries that support Federation 2`),cf(),bT(589,`.
`),cf(),Aa(590,`p`),bT(591,`In the following sections, we'll upgrade the previous example to Federation 2.`),cf(),Aa(592,`h4`,34)(593,`span`),bT(594,`Federated example: Users`),cf()(),Aa(595,`p`),bT(596,`In Federation 2, entities have no originating subgraph, so you no longer need to extend `),Aa(597,`code`),bT(598,`Query`),cf(),bT(599,`. For more details, see the `),Aa(600,`a`,35),bT(601,`entities topic`),cf(),bT(602,` in the Apollo Federation 2 docs.`),cf(),Aa(603,`h4`,36)(604,`span`),bT(605,`Schema first`),cf()(),Aa(606,`p`),bT(607,`Remove the `),Aa(608,`code`),bT(609,`extend`),cf(),bT(610,` keyword from the schema. To opt in to Federation 2, the schema must also import the federation directives it uses with the `),Aa(611,`code`),bT(612,`@link`),cf(),bT(613,` directive:`),cf(),Aa(614,`pre`)(615,`code`,9),bT(616,`
extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

type User @key(fields: "id") {
  id: ID!
  name: String!
}

type Query {
  getUser(id: ID!): User
}
`),cf()(),Aa(617,`h4`,37)(618,`span`),bT(619,`Code first`),cf()(),Aa(620,`p`),bT(621,`To use Federation 2, specify the federation version in the `),Aa(622,`code`),bT(623,`autoSchemaFile`),cf(),bT(624,` option. Nest then adds the `),Aa(625,`code`),bT(626,`@link`),cf(),bT(627,` directive to the generated schema for you.`),cf(),Aa(628,`app-copy-button`)(629,`pre`)(630,`code`,12),bT(631,`
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users.resolver.js';
import { UsersService } from './users.service.js'; // Not included in this example

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class AppModule {}
`),cf()()(),Aa(632,`h4`,38)(633,`span`),bT(634,`Federated example: Posts`),cf()(),Aa(635,`p`),bT(636,`For the same reason, you no longer need to extend `),Aa(637,`code`),bT(638,`User`),cf(),bT(639,` and `),Aa(640,`code`),bT(641,`Query`),cf(),bT(642,`.`),cf(),Aa(643,`h4`,39)(644,`span`),bT(645,`Schema first`),cf()(),Aa(646,`p`),bT(647,`Remove the `),Aa(648,`code`),bT(649,`extend`),cf(),bT(650,` keyword and the `),Aa(651,`code`),bT(652,`@external`),cf(),bT(653,` directive from the schema, and add the `),Aa(654,`code`),bT(655,`@link`),cf(),bT(656,` directive:`),cf(),Aa(657,`pre`)(658,`code`,9),bT(659,`
extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

type Post @key(fields: "id") {
  id: ID!
  title: String!
  body: String!
  user: User
}

type User @key(fields: "id") {
  id: ID!
  posts: [Post]
}

type Query {
  getPosts: [Post]
}
`),cf()(),Aa(660,`h4`,40)(661,`span`),bT(662,`Code first`),cf()(),Aa(663,`p`),bT(664,`Because the `),Aa(665,`code`),bT(666,`User`),cf(),bT(667,` entity is no longer extended, remove the `),Aa(668,`code`),bT(669,`@extends`),cf(),bT(670,` and `),Aa(671,`code`),bT(672,`@external`),cf(),bT(673,` directives from `),Aa(674,`code`),bT(675,`User`),cf(),bT(676,`:`),cf(),Aa(677,`app-copy-button`)(678,`pre`)(679,`code`,12),bT(680,`
import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post.entity.js';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: number;

  @Field(() => [Post])
  posts?: Post[];
}
`),cf()()(),Aa(681,`p`),bT(682,`As in the Users service, configure the `),Aa(683,`code`),bT(684,`GraphQLModule`),cf(),bT(685,` to use Federation 2:`),cf(),Aa(686,`app-copy-button`)(687,`pre`)(688,`code`,12),bT(689,`
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { User } from './user.entity.js';
import { PostsResolver } from './posts.resolver.js';
import { UsersResolver } from './users.resolver.js';
import { PostsService } from './posts.service.js'; // Not included in this example

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [PostsResolver, UsersResolver, PostsService],
})
export class AppModule {}
`),cf()()(),Aa(690,`h4`,41)(691,`span`),bT(692,`Hiding operations from the supergraph`),cf()(),Aa(693,`p`),bT(694,`To keep a query, mutation or field out of the public supergraph API while the subgraph still serves it, mark it with Federation 2's `),Aa(695,`code`),bT(696,`@inaccessible`),cf(),bT(697,` directive. With the code first approach, use the `),Aa(698,`code`),bT(699,`@Directive()`),cf(),bT(700,` decorator:`),cf(),Aa(701,`app-copy-button`)(702,`pre`)(703,`code`,10),bT(704,`
@Query(() => Int)
@Directive('@inaccessible')
internalStats() {
  return this.statsService.count();
}
`),cf()()(),Aa(705,`p`),bT(706,`The operation stays executable on the subgraph and is listed in its `),Aa(707,`code`),bT(708),cf(),bT(709,`, but composition leaves it out of the supergraph schema that clients see.`),cf()(),Aa(710,`a`,42),Wa(711,`i`,43),Aa(712,`span`),bT(713,`Edit on GitHub`),cf()()()),o&2&&(zC(708),Ky(`_service `,`{`,` sdl `,`}`))},dependencies:[Lt,ln$1],encapsulation:2})}return i})();var P=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-field-middleware`]],features:[xy],decls:190,vars:2,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`field-middleware`],[1,`warning`],[`appAnchor`,``,`id`,`getting-started`],[1,`language-typescript`],[1,`info`],[`routerLink`,`/graphql/extensions`],[`href`,`/graphql/extensions#using-custom-metadata`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/graphql/issues/2446`],[`href`,`/graphql/other-features#execute-enhancers-at-the-field-resolver-level`],[`appAnchor`,``,`id`,`applying-middleware-with-a-decorator`],[`appAnchor`,``,`id`,`global-field-middleware`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/field-middleware.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Field middleware`),cf(),Aa(5,`blockquote`,4)(6,`strong`),bT(7,`Warning`),cf(),bT(8,` This chapter applies only to the code first approach.
`),cf(),Aa(9,`p`),bT(10,`Field middleware lets you run arbitrary code `),Aa(11,`strong`),bT(12,`before or after`),cf(),bT(13,` a field is resolved. You can use field middleware to convert the result of a field, validate the arguments of a field, or check field-level roles (for example, the roles required to access the field the middleware function runs for).`),cf(),Aa(14,`p`),bT(15,`You can connect multiple middleware functions to a field. In this case, they are called sequentially along a chain, where each middleware decides whether to call the next one. The order of the functions in the `),Aa(16,`code`),bT(17,`middleware`),cf(),bT(18,` array matters. The first one is the outermost layer, so it runs first and finishes last (similar to the `),Aa(19,`code`),bT(20,`graphql-middleware`),cf(),bT(21,` package). The second one is the next layer in, so it runs second and finishes second to last.`),cf(),Aa(22,`h4`,5)(23,`span`),bT(24,`Getting started`),cf()(),Aa(25,`p`),bT(26,`Let's start by creating a simple middleware that logs a field value before it's sent back to the client:`),cf(),Aa(27,`app-copy-button`)(28,`pre`)(29,`code`,6),bT(30,`
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

const loggerMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next();
  console.log(value);
  return value;
};
`),cf()()(),Aa(31,`blockquote`,7)(32,`strong`),bT(33,`Hint`),cf(),Aa(34,`code`),bT(35,`MiddlewareContext`),cf(),bT(36,` is an object that consists of the same arguments that the GraphQL resolver function normally receives (`),Aa(37,`code`),bT(38),cf(),bT(39,`), while `),Aa(40,`code`),bT(41,`NextFn`),cf(),bT(42,` is a function that executes the next middleware in the stack (bound to this field) or the actual field resolver.
`),cf(),Aa(43,`blockquote`,4)(44,`strong`),bT(45,`Warning`),cf(),bT(46,` Field middleware functions can't inject dependencies or access Nest's DI container. They are designed to be lightweight and shouldn't perform potentially time-consuming operations (like retrieving data from the database). If you need to call external services or query a data source, do it in a guard or interceptor bound to a root query or mutation handler, and assign the result to the `),Aa(47,`code`),bT(48,`context`),cf(),bT(49,` object. You can then access it from within the field middleware (through the `),Aa(50,`code`),bT(51,`MiddlewareContext`),cf(),bT(52,` object).
`),cf(),Aa(53,`p`),bT(54,`Field middleware must match the `),Aa(55,`code`),bT(56,`FieldMiddleware`),cf(),bT(57,` interface. In the example above, we first call the `),Aa(58,`code`),bT(59,`next()`),cf(),bT(60,` function (which executes the actual field resolver and returns the field value), and then log this value to the terminal. The value returned from the middleware function replaces the field value (if the middleware returns `),Aa(61,`code`),bT(62,`undefined`),cf(),bT(63,`, the value from `),Aa(64,`code`),bT(65,`next()`),cf(),bT(66,` is used). Since we don't want to change anything, we return the original value.`),cf(),Aa(67,`p`),bT(68,`With this in place, register the middleware directly in the `),Aa(69,`code`),bT(70,`@Field()`),cf(),bT(71,` decorator:`),cf(),Aa(72,`app-copy-button`)(73,`pre`)(74,`code`,6),bT(75,`
@ObjectType()
export class Recipe {
  @Field({ middleware: [loggerMiddleware] })
  title: string;
}
`),cf()()(),Aa(76,`p`),bT(77,`Now, whenever you request the `),Aa(78,`code`),bT(79,`title`),cf(),bT(80,` field of the `),Aa(81,`code`),bT(82,`Recipe`),cf(),bT(83,` object type, the field's original value is logged to the console.`),cf(),Aa(84,`blockquote`,7)(85,`strong`),bT(86,`Hint`),cf(),bT(87,` To learn how to implement a field-level permissions system with the `),Aa(88,`a`,8),bT(89,`extensions`),cf(),bT(90,` feature, see `),Aa(91,`a`,9),bT(92,`using custom metadata`),cf(),bT(93,`.
`),cf(),Aa(94,`blockquote`,4)(95,`strong`),bT(96,`Warning`),cf(),bT(97,` Field middleware can be applied only to `),Aa(98,`code`),bT(99,`ObjectType`),cf(),bT(100,` classes. For more details, see `),Aa(101,`a`,10),bT(102,`this GitHub issue`),cf(),bT(103,`.
`),cf(),Aa(104,`p`),bT(105,`As mentioned above, you can control the field's value from within the middleware function. For demonstration purposes, let's uppercase a recipe's title (if present):`),cf(),Aa(106,`app-copy-button`)(107,`pre`)(108,`code`,6),bT(109,`
const value = await next();
return value?.toUpperCase();
`),cf()()(),Aa(110,`p`),bT(111,`In this case, every title is automatically uppercased when requested.`),cf(),Aa(112,`p`),bT(113,`Likewise, you can bind field middleware to a custom field resolver (a method annotated with the `),Aa(114,`code`),bT(115,`@ResolveField()`),cf(),bT(116,` decorator):`),cf(),Aa(117,`app-copy-button`)(118,`pre`)(119,`code`,6),bT(120,`
@ResolveField(() => String, { middleware: [loggerMiddleware] })
title() {
  return 'Placeholder';
}
`),cf()()(),Aa(121,`blockquote`,4)(122,`strong`),bT(123,`Warning`),cf(),bT(124,` If enhancers are enabled at the field resolver level (see `),Aa(125,`a`,11),bT(126,`executing enhancers at the field resolver level`),cf(),bT(127,`), field middleware functions run before any interceptors, guards, etc., `),Aa(128,`strong`),bT(129,`bound to the method`),cf(),bT(130,` (but after the root-level enhancers registered for query or mutation handlers).
`),cf(),Aa(131,`h4`,12)(132,`span`),bT(133,`Applying middleware with a decorator`),cf()(),Aa(134,`p`),bT(135,`Alternatively, apply field middleware with the `),Aa(136,`code`),bT(137,`@UseFieldMiddleware()`),cf(),bT(138,` decorator. It works on both fields and field resolvers, and can be placed above or below the `),Aa(139,`code`),bT(140,`@Field()`),cf(),bT(141,` or `),Aa(142,`code`),bT(143,`@ResolveField()`),cf(),bT(144,` decorator:`),cf(),Aa(145,`app-copy-button`)(146,`pre`)(147,`code`,6),bT(148,`
@ObjectType()
export class Recipe {
  @Field()
  @UseFieldMiddleware(loggerMiddleware)
  title: string;
}

@ResolveField(() => String)
@UseFieldMiddleware(loggerMiddleware)
description() {
  return 'Placeholder';
}
`),cf()()(),Aa(149,`p`),bT(150,`Because it's a separate decorator, you can combine it with others in a composed decorator:`),cf(),Aa(151,`app-copy-button`)(152,`pre`)(153,`code`,6),bT(154,`
export function Auth(...roles: Role[]) {
  return applyDecorators(
    Extensions({ roles }),
    UseFieldMiddleware(checkRoleMiddleware),
  );
}
`),cf()()(),Aa(155,`h4`,13)(156,`span`),bT(157,`Global field middleware`),cf()(),Aa(158,`p`),bT(159,`In addition to binding middleware directly to a specific field, you can register one or more middleware functions globally. Global middleware is automatically connected to all fields of your object types.`),cf(),Aa(160,`app-copy-button`)(161,`pre`)(162,`code`,6),bT(163,`
GraphQLModule.forRoot({
  autoSchemaFile: 'schema.gql',
  buildSchemaOptions: {
    fieldMiddleware: [loggerMiddleware],
  },
}),
`),cf()()(),Aa(164,`blockquote`,7)(165,`strong`),bT(166,`Hint`),cf(),bT(167,` Globally registered field middleware functions run `),Aa(168,`strong`),bT(169,`before`),cf(),bT(170,` locally registered ones. Local middleware passed through the `),Aa(171,`code`),bT(172,`middleware`),cf(),bT(173,` option of `),Aa(174,`code`),bT(175,`@Field()`),cf(),bT(176,` or `),Aa(177,`code`),bT(178,`@ResolveField()`),cf(),bT(179,` runs before middleware applied with `),Aa(180,`code`),bT(181,`@UseFieldMiddleware()`),cf(),bT(182,`, which runs in the order given (when the decorator is stacked, the lowest one runs first, as with `),Aa(183,`code`),bT(184,`@UseGuards()`),cf(),bT(185,`).
`),cf()(),Aa(186,`a`,14),Wa(187,`i`,15),Aa(188,`span`),bT(189,`Edit on GitHub`),cf()()()),o&2&&(zC(38),Ky(``,`{`,` source, args, context, info `,`}`))},dependencies:[Lt,ln$1,Jc],encapsulation:2})}return i})();var Q=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-guards-interceptors`]],features:[xy],decls:255,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`other-features`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/apollo-server/schema/directives/`],[`routerLink`,`/guards`],[`routerLink`,`/interceptors`],[`appAnchor`,``,`id`,`overview`],[`routerLink`,`/exception-filters`],[`routerLink`,`/pipes`],[`routerLink`,`/custom-decorators`],[1,`language-typescript`],[`appAnchor`,``,`id`,`execution-context`],[`routerLink`,`/fundamentals/execution-context`],[`appAnchor`,``,`id`,`exception-filters`],[1,`info`],[`appAnchor`,``,`id`,`custom-decorators`],[`appAnchor`,``,`id`,`execute-enhancers-at-the-field-resolver-level`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/graphql/issues/320#issuecomment-511193229`],[1,`warning`],[`appAnchor`,``,`id`,`creating-a-custom-driver`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/graphql/graphql-http`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/guards-interceptors.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Other features`),cf(),Aa(5,`p`),bT(6,`In the GraphQL world, there is a lot of debate about handling concerns like `),Aa(7,`strong`),bT(8,`authentication`),cf(),bT(9,` or the `),Aa(10,`strong`),bT(11,`side effects`),cf(),bT(12,` of operations. Some handle them inside the business logic, some use higher-order functions to enhance queries and mutations with authorization logic, and others use `),Aa(13,`a`,4),bT(14,`schema directives`),cf(),bT(15,`. There is no one-size-fits-all answer.`),cf(),Aa(16,`p`),bT(17,`Nest helps address these concerns with its cross-platform features, such as `),Aa(18,`a`,5),bT(19,`guards`),cf(),bT(20,` and `),Aa(21,`a`,6),bT(22,`interceptors`),cf(),bT(23,`. The goal is to reduce redundancy and provide tooling that helps you create well-structured, readable, and consistent applications.`),cf(),Aa(24,`h4`,7)(25,`span`),bT(26,`Overview`),cf()(),Aa(27,`p`),bT(28,`You can use standard `),Aa(29,`a`,5),bT(30,`guards`),cf(),bT(31,`, `),Aa(32,`a`,6),bT(33,`interceptors`),cf(),bT(34,`, `),Aa(35,`a`,8),bT(36,`filters`),cf(),bT(37,`, and `),Aa(38,`a`,9),bT(39,`pipes`),cf(),bT(40,` with GraphQL the same way as with any RESTful application. You can also create your own decorators with the `),Aa(41,`a`,10),bT(42,`custom decorators`),cf(),bT(43,` feature. Consider the following GraphQL query handler:`),cf(),Aa(44,`app-copy-button`)(45,`pre`)(46,`code`,11),bT(47,`
@Query('author')
@UseGuards(AuthGuard)
async getAuthor(@Args('id', ParseIntPipe) id: number) {
  return this.authorsService.findOneById(id);
}
`),cf()()(),Aa(48,`p`),bT(49,`GraphQL works with guards and pipes the same way as HTTP REST handlers do. This means you can move your authentication logic to a guard, and even reuse the same guard class across a REST and a GraphQL API. Interceptors work the same way across both types of applications:`),cf(),Aa(50,`app-copy-button`)(51,`pre`)(52,`code`,11),bT(53,`
@Mutation()
@UseInterceptors(EventsInterceptor)
async upvotePost(@Args('postId') postId: number) {
  return this.postsService.upvoteById({ id: postId });
}
`),cf()()(),Aa(54,`h4`,12)(55,`span`),bT(56,`Execution context`),cf()(),Aa(57,`p`),bT(58,`Since GraphQL receives a different type of data in the incoming request, the `),Aa(59,`a`,13),bT(60,`execution context`),cf(),bT(61,` that guards and interceptors receive differs between GraphQL and REST. GraphQL resolvers have a distinct set of arguments: `),Aa(62,`code`),bT(63,`root`),cf(),bT(64,`, `),Aa(65,`code`),bT(66,`args`),cf(),bT(67,`, `),Aa(68,`code`),bT(69,`context`),cf(),bT(70,`, and `),Aa(71,`code`),bT(72,`info`),cf(),bT(73,`. Therefore, guards and interceptors must transform the generic `),Aa(74,`code`),bT(75,`ExecutionContext`),cf(),bT(76,` into a `),Aa(77,`code`),bT(78,`GqlExecutionContext`),cf(),bT(79,`:`),cf(),Aa(80,`app-copy-button`)(81,`pre`)(82,`code`,11),bT(83,`
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    return true;
  }
}
`),cf()()(),Aa(84,`p`),bT(85,`The object returned by `),Aa(86,`code`),bT(87,`GqlExecutionContext.create()`),cf(),bT(88,` exposes a `),Aa(89,`strong`),bT(90,`get`),cf(),bT(91,` method for each GraphQL resolver argument (e.g., `),Aa(92,`code`),bT(93,`getArgs()`),cf(),bT(94,`, `),Aa(95,`code`),bT(96,`getContext()`),cf(),bT(97,`, etc.). Once you've transformed the context, you can pick out any GraphQL argument for the current request.`),cf(),Aa(98,`h4`,14)(99,`span`),bT(100,`Exception filters`),cf()(),Aa(101,`p`),bT(102,`Standard Nest `),Aa(103,`a`,8),bT(104,`exception filters`),cf(),bT(105,` are compatible with GraphQL applications as well. As with `),Aa(106,`code`),bT(107,`ExecutionContext`),cf(),bT(108,`, GraphQL apps should transform the `),Aa(109,`code`),bT(110,`ArgumentsHost`),cf(),bT(111,` object into a `),Aa(112,`code`),bT(113,`GqlArgumentsHost`),cf(),bT(114,` object:`),cf(),Aa(115,`app-copy-button`)(116,`pre`)(117,`code`,11),bT(118,`
@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    return exception;
  }
}
`),cf()()(),Aa(119,`blockquote`,15)(120,`strong`),bT(121,`Hint`),cf(),bT(122,` Both `),Aa(123,`code`),bT(124,`GqlExceptionFilter`),cf(),bT(125,` and `),Aa(126,`code`),bT(127,`GqlArgumentsHost`),cf(),bT(128,` are imported from the `),Aa(129,`code`),bT(130,`@nestjs/graphql`),cf(),bT(131,` package.
`),cf(),Aa(132,`p`),bT(133,`Unlike in the REST case, you don't use the native `),Aa(134,`code`),bT(135,`response`),cf(),bT(136,` object to generate a response.`),cf(),Aa(137,`h4`,16)(138,`span`),bT(139,`Custom decorators`),cf()(),Aa(140,`p`),bT(141,`As mentioned, the `),Aa(142,`a`,10),bT(143,`custom decorators`),cf(),bT(144,` feature works as expected with GraphQL resolvers:`),cf(),Aa(145,`app-copy-button`)(146,`pre`)(147,`code`,11),bT(148,`
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    GqlExecutionContext.create(ctx).getContext().user,
);
`),cf()()(),Aa(149,`p`),bT(150,`Use the `),Aa(151,`code`),bT(152,`@User()`),cf(),bT(153,` custom decorator as follows:`),cf(),Aa(154,`app-copy-button`)(155,`pre`)(156,`code`,11),bT(157,`
@Mutation()
async upvotePost(
  @User() user: UserEntity,
  @Args('postId') postId: number,
) {}
`),cf()()(),Aa(158,`blockquote`,15)(159,`strong`),bT(160,`Hint`),cf(),bT(161,` The example above assumes that the `),Aa(162,`code`),bT(163,`user`),cf(),bT(164,` object is assigned to the context of your GraphQL application.
`),cf(),Aa(165,`h4`,17)(166,`span`),bT(167,`Execute enhancers at the field resolver level`),cf()(),Aa(168,`p`),bT(169,`In the GraphQL context, Nest doesn't run `),Aa(170,`strong`),bT(171,`enhancers`),cf(),bT(172,` (the generic name for interceptors, guards, and filters) at the field level by default (see `),Aa(173,`a`,18),bT(174,`this GitHub issue`),cf(),bT(175,`): they only run for the top-level `),Aa(176,`code`),bT(177,`@Query()`),cf(),bT(178,`/`),Aa(179,`code`),bT(180,`@Mutation()`),cf(),bT(181,` method. To make Nest execute interceptors, guards, or filters for methods annotated with `),Aa(182,`code`),bT(183,`@ResolveField()`),cf(),bT(184,`, set the `),Aa(185,`code`),bT(186,`fieldResolverEnhancers`),cf(),bT(187,` option in `),Aa(188,`code`),bT(189,`GqlModuleOptions`),cf(),bT(190,`. Pass it a list of `),Aa(191,`code`),bT(192,`'interceptors'`),cf(),bT(193,`, `),Aa(194,`code`),bT(195,`'guards'`),cf(),bT(196,`, and/or `),Aa(197,`code`),bT(198,`'filters'`),cf(),bT(199,` as appropriate:`),cf(),Aa(200,`app-copy-button`)(201,`pre`)(202,`code`,11),bT(203,`
GraphQLModule.forRoot({
  fieldResolverEnhancers: ['interceptors']
}),
`),cf()()(),Aa(204,`blockquote`,19)(205,`strong`),bT(206,`Warning`),cf(),bT(207,` Enabling enhancers for field resolvers can cause performance issues when you return many records and your field resolver runs thousands of times. For this reason, when you enable `),Aa(208,`code`),bT(209,`fieldResolverEnhancers`),cf(),bT(210,`, skip the enhancers that aren't strictly necessary for your field resolvers. You can do this with the following helper function:
`),cf(),Aa(211,`app-copy-button`)(212,`pre`)(213,`code`,11),bT(214,`
export function isResolvingGraphQLField(context: ExecutionContext): boolean {
  if (context.getType<GqlContextType>() === 'graphql') {
    const gqlContext = GqlExecutionContext.create(context);
    const info = gqlContext.getInfo();
    const parentType = info.parentType.name;
    return parentType !== 'Query' && parentType !== 'Mutation';
  }
  return false;
}
`),cf()()(),Aa(215,`h4`,20)(216,`span`),bT(217,`Creating a custom driver`),cf()(),Aa(218,`p`),bT(219,`Nest provides two official drivers out of the box, `),Aa(220,`code`),bT(221,`@nestjs/apollo`),cf(),bT(222,` and `),Aa(223,`code`),bT(224,`@nestjs/mercurius`),cf(),bT(225,`, as well as an API for building new `),Aa(226,`strong`),bT(227,`custom drivers`),cf(),bT(228,`. With a custom driver, you can integrate any GraphQL library, or extend an existing integration with extra features.`),cf(),Aa(229,`p`),bT(230,`For example, to integrate the `),Aa(231,`a`,21)(232,`code`),bT(233,`graphql-http`),cf()(),bT(234,` package, you could create the following driver class. By the time `),Aa(235,`code`),bT(236,`start()`),cf(),bT(237,` is called, Nest has already generated the schema and passed it in the `),Aa(238,`code`),bT(239,`schema`),cf(),bT(240,` property of the options object:`),cf(),Aa(241,`app-copy-button`)(242,`pre`)(243,`code`,11),bT(244,`
import { AbstractGraphQLDriver, GqlModuleOptions } from '@nestjs/graphql';
import { createHandler } from 'graphql-http/lib/use/express';

class ExpressGraphQLDriver extends AbstractGraphQLDriver {
  async start(options: GqlModuleOptions<any>): Promise<void> {
    const { httpAdapter } = this.httpAdapterHost;
    httpAdapter.use('/graphql', createHandler({ schema: options.schema! }));
  }

  async stop() {}
}
`),cf()()(),Aa(245,`p`),bT(246,`And then use it as follows:`),cf(),Aa(247,`app-copy-button`)(248,`pre`)(249,`code`,11),bT(250,`
GraphQLModule.forRoot({
  driver: ExpressGraphQLDriver,
});
`),cf()()()(),Aa(251,`a`,22),Wa(252,`i`,23),Aa(253,`span`),bT(254,`Edit on GitHub`),cf()()())},dependencies:[Jc,Lt,ln$1],encapsulation:2})}return i})();var M=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-interfaces`]],features:[xy],decls:152,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`interfaces`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/schema/#interfaces`],[`appAnchor`,``,`id`,`code-first`],[1,`language-typescript`],[1,`warning`],[1,`language-graphql`],[1,`info`],[`appAnchor`,``,`id`,`interface-resolvers`],[`appAnchor`,``,`id`,`schema-first`],[`routerLink`,`/graphql/quick-start`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/interfaces.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Interfaces`),cf(),Aa(5,`p`),bT(6,`Like many type systems, GraphQL supports interfaces. An `),Aa(7,`strong`),bT(8,`interface`),cf(),bT(9,` is an abstract type that defines a set of fields that a type must include to implement the interface (see `),Aa(10,`a`,4),bT(11,`interfaces`),cf(),bT(12,` in the GraphQL documentation).`),cf(),Aa(13,`h4`,5)(14,`span`),bT(15,`Code first`),cf()(),Aa(16,`p`),bT(17,`In the code first approach, you define a GraphQL interface by creating an abstract class annotated with the `),Aa(18,`code`),bT(19,`@InterfaceType()`),cf(),bT(20,` decorator, exported from the `),Aa(21,`code`),bT(22,`@nestjs/graphql`),cf(),bT(23,` package.`),cf(),Aa(24,`app-copy-button`)(25,`pre`)(26,`code`,6),bT(27,`
import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Character {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
`),cf()()(),Aa(28,`blockquote`,7)(29,`strong`),bT(30,`Warning`),cf(),bT(31,` TypeScript interfaces cannot be used to define GraphQL interfaces.
`),cf(),Aa(32,`p`),bT(33,`This generates the following part of the GraphQL schema in SDL:`),cf(),Aa(34,`pre`)(35,`code`,8),bT(36,`
interface Character {
  id: ID!
  name: String!
}
`),cf()(),Aa(37,`p`),bT(38,`To implement the `),Aa(39,`code`),bT(40,`Character`),cf(),bT(41,` interface, use the `),Aa(42,`code`),bT(43,`implements`),cf(),bT(44,` key:`),cf(),Aa(45,`app-copy-button`)(46,`pre`)(47,`code`,6),bT(48,`
@ObjectType({
  implements: () => [Character],
})
export class Human implements Character {
  id: string;
  name: string;
}
`),cf()()(),Aa(49,`blockquote`,9)(50,`strong`),bT(51,`Hint`),cf(),bT(52,` The `),Aa(53,`code`),bT(54,`@ObjectType()`),cf(),bT(55,` decorator is exported from the `),Aa(56,`code`),bT(57,`@nestjs/graphql`),cf(),bT(58,` package.
`),cf(),Aa(59,`p`),bT(60,`The default `),Aa(61,`code`),bT(62,`resolveType()`),cf(),bT(63,` function generated by the library determines the type based on the value returned from the resolver method. This means that you must return class instances, not plain JavaScript object literals.`),cf(),Aa(64,`p`),bT(65,`To provide a custom `),Aa(66,`code`),bT(67,`resolveType()`),cf(),bT(68,` function, pass the `),Aa(69,`code`),bT(70,`resolveType`),cf(),bT(71,` property in the options object of the `),Aa(72,`code`),bT(73,`@InterfaceType()`),cf(),bT(74,` decorator:`),cf(),Aa(75,`app-copy-button`)(76,`pre`)(77,`code`,6),bT(78,`
@InterfaceType({
  resolveType(book) {
    if (book.colors) {
      return ColoringBook;
    }
    return TextBook;
  },
})
export abstract class Book {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;
}
`),cf()()(),Aa(79,`h4`,10)(80,`span`),bT(81,`Interface resolvers`),cf()(),Aa(82,`p`),bT(83,`So far, interfaces have only let you share field definitions with your objects. To also share the field resolver implementations, create a dedicated interface resolver:`),cf(),Aa(84,`app-copy-button`)(85,`pre`)(86,`code`,6),bT(87,`
import { Args, Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';

@Resolver((type) => Character) // Reminder: Character is an interface
export class CharacterInterfaceResolver {
  @ResolveField(() => [Character])
  friends(
    @Parent() character, // Resolved object that implements Character
    @Info() { parentType }, // Type of the object that implements Character
    @Args('search', { type: () => String }) searchTerm: string,
  ) {
    // Get character's friends
    return [];
  }
}
`),cf()()(),Aa(88,`p`),bT(89,`The `),Aa(90,`code`),bT(91,`friends`),cf(),bT(92,` field resolver is now registered automatically for all object types that implement the `),Aa(93,`code`),bT(94,`Character`),cf(),bT(95,` interface.`),cf(),Aa(96,`blockquote`,7)(97,`strong`),bT(98,`Warning`),cf(),bT(99,` This requires setting the `),Aa(100,`code`),bT(101,`inheritResolversFromInterfaces`),cf(),bT(102,` property to `),Aa(103,`code`),bT(104,`true`),cf(),bT(105,` in the `),Aa(106,`code`),bT(107,`GraphQLModule`),cf(),bT(108,` configuration.
`),cf(),Aa(109,`h4`,11)(110,`span`),bT(111,`Schema first`),cf()(),Aa(112,`p`),bT(113,`To define an interface in the schema first approach, create a GraphQL interface with SDL:`),cf(),Aa(114,`pre`)(115,`code`,8),bT(116,`
interface Character {
  id: ID!
  name: String!
}
`),cf()(),Aa(117,`p`),bT(118,`Then, you can use the typings generation feature (as shown in the `),Aa(119,`a`,12),bT(120,`GraphQL quick start`),cf(),bT(121,` chapter) to generate the corresponding TypeScript definitions:`),cf(),Aa(122,`app-copy-button`)(123,`pre`)(124,`code`,6),bT(125,`
export interface Character {
  id: string;
  name: string;
}
`),cf()()(),Aa(126,`p`),bT(127,`Interfaces require an extra `),Aa(128,`code`),bT(129,`__resolveType`),cf(),bT(130,` field in the resolver map to determine which type the interface resolves to. Create a `),Aa(131,`code`),bT(132,`CharactersResolver`),cf(),bT(133,` class and define the `),Aa(134,`code`),bT(135,`__resolveType`),cf(),bT(136,` method, which returns the name of the concrete type:`),cf(),Aa(137,`app-copy-button`)(138,`pre`)(139,`code`,6),bT(140,`
@Resolver('Character')
export class CharactersResolver {
  @ResolveField()
  __resolveType(value) {
    if ('age' in value) {
      return 'Person';
    }
    return null;
  }
}
`),cf()()(),Aa(141,`blockquote`,9)(142,`strong`),bT(143,`Hint`),cf(),bT(144,` All decorators are exported from the `),Aa(145,`code`),bT(146,`@nestjs/graphql`),cf(),bT(147,` package.
`),cf()(),Aa(148,`a`,13),Wa(149,`i`,14),Aa(150,`span`),bT(151,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln$1,Jc],encapsulation:2})}return i})();var U=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-mapped-types`]],features:[xy],decls:280,vars:2,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`mapped-types`],[1,`warning`],[`appAnchor`,``,`id`,`partial`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`pick`],[`appAnchor`,``,`id`,`omit`],[`appAnchor`,``,`id`,`intersection`],[`appAnchor`,``,`id`,`composition`],[`appAnchor`,``,`id`,`building-your-own`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/mapped-types.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Mapped types`),cf(),Aa(5,`blockquote`,4)(6,`strong`),bT(7,`Warning`),cf(),bT(8,` This chapter applies only to the code first approach.
`),cf(),Aa(9,`p`),bT(10,`As you build out features like CRUD (Create/Read/Update/Delete), it's often useful to construct variants of a base entity type. Nest provides several utility functions that perform type transformations to make this task more convenient.`),cf(),Aa(11,`h4`,5)(12,`span`),bT(13,`Partial`),cf()(),Aa(14,`p`),bT(15,`When building input validation types (also called Data Transfer Objects or DTOs), it's often useful to build `),Aa(16,`strong`),bT(17,`create`),cf(),bT(18,` and `),Aa(19,`strong`),bT(20,`update`),cf(),bT(21,` variations on the same type. For example, the `),Aa(22,`strong`),bT(23,`create`),cf(),bT(24,` variant may require all fields, while the `),Aa(25,`strong`),bT(26,`update`),cf(),bT(27,` variant may make all fields optional.`),cf(),Aa(28,`p`),bT(29,`Nest provides the `),Aa(30,`code`),bT(31,`PartialType()`),cf(),bT(32,` utility function to make this task easier and minimize boilerplate.`),cf(),Aa(33,`p`),bT(34,`The `),Aa(35,`code`),bT(36,`PartialType()`),cf(),bT(37,` function returns a type (class) with all the properties of the input type set to optional. For example, suppose we have a `),Aa(38,`strong`),bT(39,`create`),cf(),bT(40,` type as follows:`),cf(),Aa(41,`app-copy-button`)(42,`pre`)(43,`code`,6),bT(44,`
@InputType()
class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstName: string;
}
`),cf()()(),Aa(45,`p`),bT(46,`By default, all of these fields are required. To create a type with the same fields, but with each one optional, use `),Aa(47,`code`),bT(48,`PartialType()`),cf(),bT(49,` passing the class reference (`),Aa(50,`code`),bT(51,`CreateUserInput`),cf(),bT(52,`) as an argument:`),cf(),Aa(53,`app-copy-button`)(54,`pre`)(55,`code`,6),bT(56,`
@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {}
`),cf()()(),Aa(57,`blockquote`,7)(58,`strong`),bT(59,`Hint`),cf(),bT(60,` The `),Aa(61,`code`),bT(62,`PartialType()`),cf(),bT(63,` function is imported from the `),Aa(64,`code`),bT(65,`@nestjs/graphql`),cf(),bT(66,` package.
`),cf(),Aa(67,`p`),bT(68,`The `),Aa(69,`code`),bT(70,`PartialType()`),cf(),bT(71,` function takes an optional second argument: a reference to a decorator factory. Use it to change the decorator applied to the resulting (child) class. If you don't specify it, the child class effectively uses the same decorator as the `),Aa(72,`strong`),bT(73,`parent`),cf(),bT(74,` class (the class referenced in the first argument). In the example above, we extend `),Aa(75,`code`),bT(76,`CreateUserInput`),cf(),bT(77,`, which is annotated with the `),Aa(78,`code`),bT(79,`@InputType()`),cf(),bT(80,` decorator. Since we want `),Aa(81,`code`),bT(82,`UpdateUserInput`),cf(),bT(83,` to be treated as if it were also decorated with `),Aa(84,`code`),bT(85,`@InputType()`),cf(),bT(86,`, we didn't need to pass `),Aa(87,`code`),bT(88,`InputType`),cf(),bT(89,` as the second argument. If the parent and child types differ (e.g., the parent is decorated with `),Aa(90,`code`),bT(91,`@ObjectType()`),cf(),bT(92,`), pass `),Aa(93,`code`),bT(94,`InputType`),cf(),bT(95,` as the second argument:`),cf(),Aa(96,`app-copy-button`)(97,`pre`)(98,`code`,6),bT(99,`
@InputType()
export class UpdateUserInput extends PartialType(User, InputType) {}
`),cf()()(),Aa(100,`p`),bT(101,`Instead of a decorator factory, you can pass an options object as the second argument. It accepts the `),Aa(102,`code`),bT(103,`decorator`),cf(),bT(104,` property, `),Aa(105,`code`),bT(106,`omitDefaultValues`),cf(),bT(107,` (set to `),Aa(108,`code`),bT(109,`true`),cf(),bT(110,` to drop the default values inherited from the parent fields), and `),Aa(111,`code`),bT(112,`skipNullProperties`),cf(),bT(113,` (defaults to `),Aa(114,`code`),bT(115,`true`),cf(),bT(116,`; set it to `),Aa(117,`code`),bT(118,`false`),cf(),bT(119,` to skip validation only for `),Aa(120,`code`),bT(121,`undefined`),cf(),bT(122,` values, and still validate `),Aa(123,`code`),bT(124,`null`),cf(),bT(125,`).`),cf(),Aa(126,`h4`,8)(127,`span`),bT(128,`Pick`),cf()(),Aa(129,`p`),bT(130,`The `),Aa(131,`code`),bT(132,`PickType()`),cf(),bT(133,` function constructs a new type (class) by picking a set of properties from an input type. For example, suppose we start with a type like:`),cf(),Aa(134,`app-copy-button`)(135,`pre`)(136,`code`,6),bT(137,`
@InputType()
class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstName: string;
}
`),cf()()(),Aa(138,`p`),bT(139,`You can pick a set of properties from this class using the `),Aa(140,`code`),bT(141,`PickType()`),cf(),bT(142,` utility function:`),cf(),Aa(143,`app-copy-button`)(144,`pre`)(145,`code`,6),bT(146,`
@InputType()
export class UpdateEmailInput extends PickType(CreateUserInput, [
  'email',
] as const) {}
`),cf()()(),Aa(147,`blockquote`,7)(148,`strong`),bT(149,`Hint`),cf(),bT(150,` The `),Aa(151,`code`),bT(152,`PickType()`),cf(),bT(153,` function is imported from the `),Aa(154,`code`),bT(155,`@nestjs/graphql`),cf(),bT(156,` package.
`),cf(),Aa(157,`h4`,9)(158,`span`),bT(159,`Omit`),cf()(),Aa(160,`p`),bT(161,`The `),Aa(162,`code`),bT(163,`OmitType()`),cf(),bT(164,` function constructs a type by picking all properties from an input type and then removing a particular set of keys. For example, suppose we start with a type like:`),cf(),Aa(165,`app-copy-button`)(166,`pre`)(167,`code`,6),bT(168,`
@InputType()
class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstName: string;
}
`),cf()()(),Aa(169,`p`),bT(170,`You can generate a derived type that has every property `),Aa(171,`strong`),bT(172,`except`),cf(),Aa(173,`code`),bT(174,`email`),cf(),bT(175,`, as shown below. Here, the second argument to `),Aa(176,`code`),bT(177,`OmitType()`),cf(),bT(178,` is an array of property names.`),cf(),Aa(179,`app-copy-button`)(180,`pre`)(181,`code`,6),bT(182,`
@InputType()
export class UpdateUserInput extends OmitType(CreateUserInput, [
  'email',
] as const) {}
`),cf()()(),Aa(183,`blockquote`,7)(184,`strong`),bT(185,`Hint`),cf(),bT(186,` The `),Aa(187,`code`),bT(188,`OmitType()`),cf(),bT(189,` function is imported from the `),Aa(190,`code`),bT(191,`@nestjs/graphql`),cf(),bT(192,` package.
`),cf(),Aa(193,`h4`,10)(194,`span`),bT(195,`Intersection`),cf()(),Aa(196,`p`),bT(197,`The `),Aa(198,`code`),bT(199,`IntersectionType()`),cf(),bT(200,` function combines two types into one new type (class). For example, suppose we start with two types like:`),cf(),Aa(201,`app-copy-button`)(202,`pre`)(203,`code`,6),bT(204,`
@InputType()
class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class AdditionalUserInfo {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
`),cf()()(),Aa(205,`p`),bT(206,`You can generate a new type that combines all the properties of both types:`),cf(),Aa(207,`app-copy-button`)(208,`pre`)(209,`code`,6),bT(210,`
@InputType()
export class UpdateUserInput extends IntersectionType(
  CreateUserInput,
  AdditionalUserInfo,
) {}
`),cf()()(),Aa(211,`blockquote`,7)(212,`strong`),bT(213,`Hint`),cf(),bT(214,` The `),Aa(215,`code`),bT(216,`IntersectionType()`),cf(),bT(217,` function is imported from the `),Aa(218,`code`),bT(219,`@nestjs/graphql`),cf(),bT(220,` package.
`),cf(),Aa(221,`h4`,11)(222,`span`),bT(223,`Composition`),cf()(),Aa(224,`p`),bT(225,`The type mapping utility functions are composable. For example, the following produces a type (class) that has all the properties of the `),Aa(226,`code`),bT(227,`CreateUserInput`),cf(),bT(228,` type except `),Aa(229,`code`),bT(230,`email`),cf(),bT(231,`, with each of them set to optional:`),cf(),Aa(232,`app-copy-button`)(233,`pre`)(234,`code`,6),bT(235,`
@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['email'] as const),
) {}
`),cf()()(),Aa(236,`h4`,12)(237,`span`),bT(238,`Building your own`),cf()(),Aa(239,`p`),bT(240,`The built-in mapped types are built on the `),Aa(241,`code`),bT(242,`getFieldsAndDecoratorForType()`),cf(),bT(243,` function, which you can use to write your own. It returns the fields of a class annotated with `),Aa(244,`code`),bT(245,`@ObjectType()`),cf(),bT(246,`, `),Aa(247,`code`),bT(248,`@InputType()`),cf(),bT(249,`, `),Aa(250,`code`),bT(251,`@InterfaceType()`),cf(),bT(252,` or `),Aa(253,`code`),bT(254,`@ArgsType()`),cf(),bT(255,` (inherited fields included), along with the class decorator that matches its kind. For example, the following helper turns every field of a type into an optional list, which is handy for filter inputs:`),cf(),Aa(256,`app-copy-button`)(257,`pre`)(258,`code`,6),bT(259,`
import { Type } from '@nestjs/common';
import { Field, getFieldsAndDecoratorForType, InputType } from '@nestjs/graphql';

export function FilterType<T>(classRef: Type<T>) {
  const { fields } = getFieldsAndDecoratorForType(classRef);

  @InputType({ isAbstract: true })
  abstract class FilterInput {}

  for (const field of fields) {
    const type = field.typeFn();
    Field(() => [type], { nullable: true })(FilterInput.prototype, field.name);
  }
  return FilterInput as Type<{ [K in keyof T]?: T[K][] }>;
}

@InputType()
export class RecipeFilter extends FilterType(Recipe) {}
`),cf()()(),Aa(260,`blockquote`,4)(261,`strong`),bT(262,`Warning`),cf(),bT(263,` The returned field metadata is shared with the schema builder. Treat it as read-only, and pass copies of the options (e.g., `),Aa(264,`code`),bT(265),cf(),bT(266,`) to `),Aa(267,`code`),bT(268,`@Field()`),cf(),bT(269,`. A class without a GraphQL type decorator makes `),Aa(270,`code`),bT(271,`getFieldsAndDecoratorForType()`),cf(),bT(272,` throw an `),Aa(273,`code`),bT(274,`UnableToFindFieldsError`),cf(),bT(275,`.
`),cf()(),Aa(276,`a`,13),Wa(277,`i`,14),Aa(278,`span`),bT(279,`Edit on GitHub`),cf()()()),o&2&&(zC(265),Ky(``,`{`,` ...field.options `,`}`))},dependencies:[Lt,ln$1],encapsulation:2})}return i})();var N=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-mutations`]],features:[xy],decls:171,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`mutations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/queries/#mutations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/graphql-tools/generate-schema.html`],[`appAnchor`,``,`id`,`code-first`],[`routerLink`,`/graphql/resolvers`],[1,`language-typescript`],[1,`info`],[1,`language-graphql`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/schema/#input-types`],[`routerLink`,`/graphql/cli-plugin`],[`appAnchor`,``,`id`,`mutation-payload-query`],[`appAnchor`,``,`id`,`schema-first`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/mutations.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Mutations`),cf(),Aa(5,`p`),bT(6,`Most discussions of GraphQL focus on data fetching, but any complete data platform needs a way to modify server-side data as well. In REST, any request could cause side effects on the server, but best practice is not to modify data in `),Aa(7,`code`),bT(8,`GET`),cf(),bT(9,` requests. GraphQL is similar: technically, any query could be implemented to write data. However, as with REST, the convention is to send any operation that causes writes explicitly as a mutation (see `),Aa(10,`a`,4),bT(11,`Mutations`),cf(),bT(12,` in the GraphQL documentation).`),cf(),Aa(13,`p`),bT(14,`The official `),Aa(15,`a`,5),bT(16,`Apollo documentation`),cf(),bT(17,` uses an `),Aa(18,`code`),bT(19,`upvotePost()`),cf(),bT(20,` mutation example, which increments a post's `),Aa(21,`code`),bT(22,`votes`),cf(),bT(23,` property. To create an equivalent mutation in Nest, use the `),Aa(24,`code`),bT(25,`@Mutation()`),cf(),bT(26,` decorator.`),cf(),Aa(27,`h4`,6)(28,`span`),bT(29,`Code first`),cf()(),Aa(30,`p`),bT(31,`Add another method to the `),Aa(32,`code`),bT(33,`AuthorsResolver`),cf(),bT(34,` from the `),Aa(35,`a`,7),bT(36,`Resolvers`),cf(),bT(37,` chapter.`),cf(),Aa(38,`app-copy-button`)(39,`pre`)(40,`code`,8),bT(41,`
@Mutation(() => Post)
async upvotePost(@Args({ name: 'postId', type: () => Int }) postId: number) {
  return this.postsService.upvoteById({ id: postId });
}
`),cf()()(),Aa(42,`blockquote`,9)(43,`strong`),bT(44,`Hint`),cf(),bT(45,` All decorators (e.g., `),Aa(46,`code`),bT(47,`@Resolver`),cf(),bT(48,`, `),Aa(49,`code`),bT(50,`@ResolveField`),cf(),bT(51,`, `),Aa(52,`code`),bT(53,`@Args`),cf(),bT(54,`, etc.) are exported from the `),Aa(55,`code`),bT(56,`@nestjs/graphql`),cf(),bT(57,` package.
`),cf(),Aa(58,`p`),bT(59,`This generates the following part of the GraphQL schema in SDL:`),cf(),Aa(60,`pre`)(61,`code`,10),bT(62,`
type Mutation {
  upvotePost(postId: Int!): Post!
}
`),cf()(),Aa(63,`p`),bT(64,`The `),Aa(65,`code`),bT(66,`upvotePost()`),cf(),bT(67,` method takes `),Aa(68,`code`),bT(69,`postId`),cf(),bT(70,` (`),Aa(71,`code`),bT(72,`Int`),cf(),bT(73,`) as an argument and returns the updated `),Aa(74,`code`),bT(75,`Post`),cf(),bT(76,` entity. For the reasons explained in the `),Aa(77,`a`,7),bT(78,`Resolvers`),cf(),bT(79,` chapter, you have to set the expected type explicitly.`),cf(),Aa(80,`p`),bT(81,`If the mutation needs to take an object as an argument, create an `),Aa(82,`strong`),bT(83,`input type`),cf(),bT(84,`. An input type is a special kind of object type that can be passed in as an argument (see `),Aa(85,`a`,11),bT(86,`Input types`),cf(),bT(87,` in the GraphQL documentation). To declare an input type, use the `),Aa(88,`code`),bT(89,`@InputType()`),cf(),bT(90,` decorator.`),cf(),Aa(91,`app-copy-button`)(92,`pre`)(93,`code`,8),bT(94,`
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpvotePostInput {
  @Field()
  postId: number;
}
`),cf()()(),Aa(95,`blockquote`,9)(96,`strong`),bT(97,`Hint`),cf(),bT(98,` The `),Aa(99,`code`),bT(100,`@InputType()`),cf(),bT(101,` decorator takes an options object as an argument, so you can, for example, specify the input type's description. Due to the limitations of TypeScript's metadata reflection system, you must either use the `),Aa(102,`code`),bT(103,`@Field()`),cf(),bT(104,` decorator to indicate a type, or use the `),Aa(105,`a`,12),bT(106,`CLI plugin`),cf(),bT(107,`.
`),cf(),Aa(108,`p`),bT(109,`You can then use this type in the resolver class:`),cf(),Aa(110,`app-copy-button`)(111,`pre`)(112,`code`,8),bT(113,`
@Mutation(() => Post)
async upvotePost(
  @Args('upvotePostData') upvotePostData: UpvotePostInput,
) {}
`),cf()()(),Aa(114,`h4`,13)(115,`span`),bT(116,`Mutation payload query`),cf()(),Aa(117,`p`),bT(118,`A mutation payload can expose the root `),Aa(119,`code`),bT(120,`Query`),cf(),bT(121,` type, so clients can refetch any data after a mutation in a single round trip. In the code first approach, reference the generated root type by its name:`),cf(),Aa(122,`app-copy-button`)(123,`pre`)(124,`code`,8),bT(125,`
@ObjectType()
export class AddTodoPayload {
  @Field(() => Todo)
  todo: Todo;

  @Field(() => 'Query')
  query: object;
}

@Mutation(() => AddTodoPayload)
addTodo(@Args('title') title: string) {
  const todo = this.todosService.create(title);
  return { todo, query: {} };
}
`),cf()()(),Aa(126,`p`),bT(127,`Any value works as the `),Aa(128,`code`),bT(129,`query`),cf(),bT(130,` value (an empty object is enough), because the root query resolvers don't depend on their parent. In the schema first approach, declare `),Aa(131,`code`),bT(132,`query: Query!`),cf(),bT(133,` on the payload type in your SDL.`),cf(),Aa(134,`h4`,14)(135,`span`),bT(136,`Schema first`),cf()(),Aa(137,`p`),bT(138,`Extend the `),Aa(139,`code`),bT(140,`AuthorsResolver`),cf(),bT(141,` from the `),Aa(142,`a`,7),bT(143,`Resolvers`),cf(),bT(144,` chapter.`),cf(),Aa(145,`app-copy-button`)(146,`pre`)(147,`code`,8),bT(148,`
@Mutation()
async upvotePost(@Args('postId') postId: number) {
  return this.postsService.upvoteById({ id: postId });
}
`),cf()()(),Aa(149,`p`),bT(150,`This example assumes that the business logic (querying the post and incrementing its `),Aa(151,`code`),bT(152,`votes`),cf(),bT(153,` property) lives in the `),Aa(154,`code`),bT(155,`PostsService`),cf(),bT(156,`. That logic can be as simple or sophisticated as needed. The point of this example is to show how resolvers interact with other providers.`),cf(),Aa(157,`p`),bT(158,`The last step is to add the mutation to the existing type definitions.`),cf(),Aa(159,`pre`)(160,`code`,10),bT(161,`
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int!
  title: String
  votes: Int
}

type Query {
  author(id: Int!): Author
}

type Mutation {
  upvotePost(postId: Int!): Post
}
`),cf()(),Aa(162,`p`),bT(163,`The `),Aa(164,`code`),bT(165,`upvotePost(postId: Int!): Post`),cf(),bT(166,` mutation is now part of the application's GraphQL API.`),cf()(),Aa(167,`a`,15),Wa(168,`i`,16),Aa(169,`span`),bT(170,`Edit on GitHub`),cf()()())},dependencies:[Lt,Jc,ln$1],encapsulation:2})}return i})();var B=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-plugins`]],features:[xy],decls:106,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`plugins-with-apollo`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/apollo-server/integrations/plugins/`],[`appAnchor`,``,`id`,`custom-plugins`],[1,`language-typescript`],[`appAnchor`,``,`id`,`using-external-plugins`],[1,`info`],[`appAnchor`,``,`id`,`plugins-with-mercurius`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mercurius.dev/#/docs/plugins`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mercurius-js/mercurius-upload`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mercurius-js/cache`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/plugins.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Plugins with Apollo`),cf(),Aa(5,`p`),bT(6,`Plugins let you extend Apollo Server's core functionality by performing custom operations in response to certain events. These events correspond to individual phases of the GraphQL request lifecycle, and to the startup of Apollo Server itself (see `),Aa(7,`a`,4),bT(8,`plugins`),cf(),bT(9,` in the Apollo documentation). For example, a basic logging plugin might log the GraphQL query string of each request sent to Apollo Server.`),cf(),Aa(10,`h4`,5)(11,`span`),bT(12,`Custom plugins`),cf()(),Aa(13,`p`),bT(14,`To create a plugin, declare a class annotated with the `),Aa(15,`code`),bT(16,`@Plugin()`),cf(),bT(17,` decorator, exported from the `),Aa(18,`code`),bT(19,`@nestjs/apollo`),cf(),bT(20,` package. For better code autocompletion, also implement the `),Aa(21,`code`),bT(22,`ApolloServerPlugin`),cf(),bT(23,` interface from the `),Aa(24,`code`),bT(25,`@apollo/server`),cf(),bT(26,` package.`),cf(),Aa(27,`app-copy-button`)(28,`pre`)(29,`code`,6),bT(30,`
import { ApolloServerPlugin, GraphQLRequestListener } from '@apollo/server';
import { Plugin } from '@nestjs/apollo';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<GraphQLRequestListener<any>> {
    console.log('Request started');
    return {
      async willSendResponse() {
        console.log('Will send response');
      },
    };
  }
}
`),cf()()(),Aa(31,`p`),bT(32,`With this in place, register `),Aa(33,`code`),bT(34,`LoggingPlugin`),cf(),bT(35,` as a provider:`),cf(),Aa(36,`app-copy-button`)(37,`pre`)(38,`code`,6),bT(39,`
@Module({
  providers: [LoggingPlugin],
})
export class CommonModule {}
`),cf()()(),Aa(40,`p`),bT(41,`Nest automatically instantiates the plugin and applies it to Apollo Server.`),cf(),Aa(42,`h4`,7)(43,`span`),bT(44,`Using external plugins`),cf()(),Aa(45,`p`),bT(46,`Apollo Server provides several plugins out of the box. To use an existing plugin, import it and add it to the `),Aa(47,`code`),bT(48,`plugins`),cf(),bT(49,` array:`),cf(),Aa(50,`app-copy-button`)(51,`pre`)(52,`code`,6),bT(53,`
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';

GraphQLModule.forRoot({
  // ...
  plugins: [ApolloServerPluginCacheControl({ defaultMaxAge: 5 })],
}),
`),cf()()(),Aa(54,`blockquote`,8)(55,`strong`),bT(56,`Hint`),cf(),bT(57,` The `),Aa(58,`code`),bT(59,`ApolloServerPluginCacheControl`),cf(),bT(60,` plugin is exported from the `),Aa(61,`code`),bT(62,`@apollo/server/plugin/cacheControl`),cf(),bT(63,` entry point of the `),Aa(64,`code`),bT(65,`@apollo/server`),cf(),bT(66,` package.
`),cf(),Aa(67,`h4`,9)(68,`span`),bT(69,`Plugins with Mercurius`),cf()(),Aa(70,`p`),bT(71,`Some of the existing Mercurius-specific Fastify plugins must be loaded after the Mercurius plugin in the plugin tree (see `),Aa(72,`a`,10),bT(73,`plugins`),cf(),bT(74,` in the Mercurius documentation).`),cf(),Aa(75,`blockquote`,11)(76,`strong`),bT(77,`Warning`),cf(),Aa(78,`a`,12),bT(79,`mercurius-upload`),cf(),bT(80,` is an exception: register it in the main file.
`),cf(),Aa(81,`p`),bT(82,`For this, `),Aa(83,`code`),bT(84,`MercuriusDriver`),cf(),bT(85,` exposes an optional `),Aa(86,`code`),bT(87,`plugins`),cf(),bT(88,` configuration option. It takes an array of objects with two properties: `),Aa(89,`code`),bT(90,`plugin`),cf(),bT(91,` and its `),Aa(92,`code`),bT(93,`options`),cf(),bT(94,`. For example, registering the `),Aa(95,`a`,13),bT(96,`cache plugin`),cf(),bT(97,` looks like this:`),cf(),Aa(98,`app-copy-button`)(99,`pre`)(100,`code`,6),bT(101,`
GraphQLModule.forRoot({
  driver: MercuriusDriver,
  // ...
  plugins: [
    {
      plugin: cache,
      options: {
        ttl: 10,
        policy: {
          Query: {
            add: true
          }
        }
      },
    }
  ]
}),
`),cf()()()(),Aa(102,`a`,14),Wa(103,`i`,15),Aa(104,`span`),bT(105,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln$1],encapsulation:2})}return i})();var _=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵcmp=ef({type:i,selectors:[[`app-banner-courses-graphql-cf`]],decls:25,vars:0,consts:[[1,`banner`],[1,`fas`,`fa-check`],[`href`,`https://courses.nestjs.com/#graphql-bundle`,`target`,`_blank`,`title`,`Courses | NestJS - A node.js framework built on top of TypeScript`,1,`btn-more`]],template:function(o,l){o&1&&(uf(0,`div`,0)(1,`h2`),bT(2,`Learn the `),uf(3,`span`),bT(4,`right`),lf(),bT(5,` way!`),lf(),uf(6,`ul`)(7,`li`)(8,`span`),Ly(9,`i`,1),lf(),bT(10,` 20+ chapters `),lf(),uf(11,`li`)(12,`span`),Ly(13,`i`,1),lf(),bT(14,` GraphQL fundamentals `),lf(),uf(15,`li`)(16,`span`),Ly(17,`i`,1),lf(),bT(18,` Official certificate `),lf(),uf(19,`li`)(20,`span`),Ly(21,`i`,1),lf(),bT(22,` Deep-dive sessions `),lf()(),uf(23,`a`,2),bT(24,`Explore official GraphQL extensions`),lf()())},styles:[`.banner[_ngcontent-%COMP%]{background-color:#111;background-image:url(/assets/banners/courses-graphql-cf.jpg);background-position:center bottom}`]})}return i})();var H=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-quick-start`]],features:[xy],decls:852,vars:0,consts:[[`contentReference`,``],[`appcdd9ddef2c1e1f4ccf9db1c88a3bb4dcc672b306`,``],[`app09cf7a76e196b803629959dcdc7119ae5284324e`,``],[`app43fb26c8588ab6ec817d37666dbea4d23c411275`,``],[1,`content`],[1,`content-inner`],[`id`,`harnessing-the-power-of-typescript--graphql`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/blog/graphql-vs-rest`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.typescriptlang.org/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mercurius-js/mercurius`],[`href`,`/graphql/quick-start#third-party-integrations`],[`href`,`/graphql/other-features#creating-a-custom-driver`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/apollo-server/migration/`],[`appAnchor`,``,`id`,`overview`],[`appAnchor`,``,`id`,`getting-started-with-graphql--typescript`],[1,`info`],[`href`,`/graphql/quick-start#mercurius-integration`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/apollo-server/api/apollo-server`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mercurius-js/mercurius/blob/master/docs/api/options.md#plugin-options`],[`appAnchor`,``,`id`,`accessing-the-request-and-response-objects`],[`routerLink`,`/graphql/other-features`],[`appAnchor`,``,`id`,`graphql-ide`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/graphql/graphiql`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/23-graphql-code-first`],[`routerLink`,`/graphql/resolvers`],[`src`,`/assets/playground.png`,`alt`,``],[`appAnchor`,``,`id`,`enabling-and-disabling-graphiql`],[`appAnchor`,``,`id`,`configuring-graphiql`],[`appAnchor`,``,`id`,`subscriptions-in-the-ide`],[`routerLink`,`/graphql/subscriptions`],[`appAnchor`,``,`id`,`code-first`],[`appAnchor`,``,`id`,`example`],[`appAnchor`,``,`id`,`schema-first`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Abstract_syntax_tree`],[`appAnchor`,``,`id`,`apollo-sandbox`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/blog/announcement/platform/apollo-sandbox-an-open-graphql-ide-for-local-development/`],[`appAnchor`,``,`id`,`example-1`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/12-graphql-schema-first`],[`appAnchor`,``,`id`,`accessing-generated-schema`],[`appAnchor`,``,`id`,`async-configuration`],[`href`,`/fundamentals/custom-providers#factory-providers-usefactory`],[`appAnchor`,``,`id`,`mercurius-integration`],[`href`,`/http/performance#fastify-adapter`],[`appAnchor`,``,`id`,`multiple-endpoints`],[`appAnchor`,``,`id`,`third-party-integrations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/dotansimha/graphql-yoga`],[`appAnchor`,``,`id`,`example-2`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/33-graphql-mercurius`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/quick-start.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,4,0)(2,`div`,5)(3,`h2`,6),bT(4,`Harnessing the power of TypeScript & GraphQL`),cf(),Aa(5,`p`)(6,`a`,7),bT(7,`GraphQL`),cf(),bT(8,` is a query language for APIs and a runtime for fulfilling those queries with your existing data. It solves many problems typically found with REST APIs. For background, see this `),Aa(9,`a`,8),bT(10,`comparison of GraphQL and REST`),cf(),bT(11,`. Combined with `),Aa(12,`a`,9),bT(13,`TypeScript`),cf(),bT(14,`, GraphQL gives you better type safety for your queries and end-to-end typing.`),cf(),Aa(15,`p`),bT(16,`This chapter assumes a basic understanding of GraphQL and focuses on working with the built-in `),Aa(17,`code`),bT(18,`@nestjs/graphql`),cf(),bT(19,` module. The `),Aa(20,`code`),bT(21,`GraphQLModule`),cf(),bT(22,` can be configured to use `),Aa(23,`a`,10),bT(24,`Apollo`),cf(),bT(25,` Server (with the `),Aa(26,`code`),bT(27,`@nestjs/apollo`),cf(),bT(28,` driver) or `),Aa(29,`a`,11),bT(30,`Mercurius`),cf(),bT(31,` (with the `),Aa(32,`code`),bT(33,`@nestjs/mercurius`),cf(),bT(34,` driver). Nest provides official integrations for both packages (see also the `),Aa(35,`a`,12),bT(36,`third-party integrations`),cf(),bT(37,` below).`),cf(),Aa(38,`p`),bT(39,`You can also build your own driver (see `),Aa(40,`a`,13),bT(41,`Creating a custom driver`),cf(),bT(42,`).`),cf(),Aa(43,`h4`,14)(44,`span`),bT(45,`Installation`),cf()(),Aa(46,`p`),bT(47,`Start by installing the required packages:`),cf(),Aa(48,`pre`)(49,`code`,15),bT(50,`
# For Express and Apollo (default)
$ npm i @nestjs/graphql @nestjs/apollo @apollo/server @as-integrations/express5 graphql

# For Fastify and Apollo
# npm i @nestjs/graphql @nestjs/apollo @apollo/server @as-integrations/fastify graphql

# For Fastify and Mercurius
# npm i @nestjs/graphql @nestjs/mercurius graphql mercurius
`),cf()(),Aa(51,`blockquote`,16)(52,`strong`),bT(53,`Warning`),cf(),Aa(54,`code`),bT(55,`@nestjs/apollo`),cf(),bT(56,` v14 requires `),Aa(57,`strong`),bT(58,`Apollo Server v5`),cf(),bT(59,` (the `),Aa(60,`code`),bT(61,`@apollo/server`),cf(),bT(62,` package). If you are upgrading from an older Apollo Server version, see the `),Aa(63,`a`,17),bT(64,`Apollo Server migration guide`),cf(),bT(65,`.
`),cf(),Aa(66,`h4`,18)(67,`span`),bT(68,`Overview`),cf()(),Aa(69,`p`),bT(70,`Nest offers two ways of building GraphQL applications: `),Aa(71,`strong`),bT(72,`code first`),cf(),bT(73,` and `),Aa(74,`strong`),bT(75,`schema first`),cf(),bT(76,`. Choose the one that suits you best. Most chapters in this GraphQL section are divided into two parts: one for the `),Aa(77,`strong`),bT(78,`code first`),cf(),bT(79,` approach and one for the `),Aa(80,`strong`),bT(81,`schema first`),cf(),bT(82,` approach.`),cf(),Aa(83,`p`),bT(84,`In the `),Aa(85,`strong`),bT(86,`code first`),cf(),bT(87,` approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema. This approach suits you if you prefer to work exclusively in TypeScript and avoid switching between language syntaxes.`),cf(),Aa(88,`p`),bT(89,`In the `),Aa(90,`strong`),bT(91,`schema first`),cf(),bT(92,` approach, the source of truth is a set of GraphQL SDL (Schema Definition Language) files. SDL is a language-agnostic way to share schema files between platforms. Nest generates your TypeScript definitions (as classes or interfaces) from the GraphQL schemas, so you don't have to write redundant boilerplate code.`),cf(),Aa(93,`p`),Wa(94,`app-banner-courses-graphql-cf`),cf(),Aa(95,`h4`,19)(96,`span`),bT(97,`Getting started with GraphQL & TypeScript`),cf()(),Aa(98,`blockquote`,20)(99,`strong`),bT(100,`Hint`),cf(),bT(101,` The following chapters use the `),Aa(102,`code`),bT(103,`@nestjs/apollo`),cf(),bT(104,` package. To use Mercurius instead, see `),Aa(105,`a`,21),bT(106,`Mercurius integration`),cf(),bT(107,`.
`),cf(),Aa(108,`p`),bT(109,`Once the packages are installed, import the `),Aa(110,`code`),bT(111,`GraphQLModule`),cf(),bT(112,` and configure it with the `),Aa(113,`code`),bT(114,`forRoot()`),cf(),bT(115,` static method.`),cf(),Aa(116,`app-copy-button`,22)(117,`span`,23),Wa(118,`app-tabs`,null,1),cf(),Aa(120,`pre`)(121,`code`,24),bT(122,`
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(123,`blockquote`,20)(124,`strong`),bT(125,`Hint`),cf(),bT(126,` For the Mercurius integration, use `),Aa(127,`code`),bT(128,`MercuriusDriver`),cf(),bT(129,` and `),Aa(130,`code`),bT(131,`MercuriusDriverConfig`),cf(),bT(132,` instead. Both are exported from the `),Aa(133,`code`),bT(134,`@nestjs/mercurius`),cf(),bT(135,` package.
`),cf(),Aa(136,`p`),bT(137,`The `),Aa(138,`code`),bT(139,`forRoot()`),cf(),bT(140,` method takes an options object, which is passed through to the underlying driver instance (see the available settings for `),Aa(141,`a`,25),bT(142,`Apollo`),cf(),bT(143,` and `),Aa(144,`a`,26),bT(145,`Mercurius`),cf(),bT(146,`). For example, to disable the GraphQL IDE, pass the following options:`),cf(),Aa(147,`app-copy-button`,22)(148,`span`,23),Wa(149,`app-tabs`,null,2),cf(),Aa(151,`pre`)(152,`code`,24),bT(153,`
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: false,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(154,`blockquote`,16)(155,`strong`),bT(156,`Warning`),cf(),bT(157,` The `),Aa(158,`code`),bT(159,`graphql-playground`),cf(),bT(160,` IDE was removed in `),Aa(161,`code`),bT(162,`@nestjs/graphql`),cf(),bT(163,` v14. The `),Aa(164,`code`),bT(165,`playground`),cf(),bT(166,` option remains only as a `),Aa(167,`strong`),bT(168,`deprecated boolean alias for GraphiQL`),cf(),bT(169,`: `),Aa(170,`code`),bT(171,`playground: false`),cf(),bT(172,` disables the landing page and `),Aa(173,`code`),bT(174,`playground: true`),cf(),bT(175,` enables GraphiQL. Use `),Aa(176,`code`),bT(177,`graphiql`),cf(),bT(178,` in new code.
`),cf(),Aa(179,`p`),bT(180,`With the Apollo driver, these options are forwarded to the `),Aa(181,`code`),bT(182,`ApolloServer`),cf(),bT(183,` constructor.`),cf(),Aa(184,`h4`,27)(185,`span`),bT(186,`Accessing the request and response objects`),cf()(),Aa(187,`p`),bT(188,`The `),Aa(189,`code`),bT(190,`context`),cf(),bT(191,` option is a factory that builds the GraphQL execution context for each request. Use it to expose the underlying request and response objects to your resolvers:`),cf(),Aa(192,`app-copy-button`)(193,`pre`)(194,`code`,24),bT(195,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  context: ({ req, res }) => ({ req, res }),
}),
`),cf()()(),Aa(196,`p`),bT(197,`You can then read them in a resolver with the `),Aa(198,`code`),bT(199,`@Context()`),cf(),bT(200,` decorator:`),cf(),Aa(201,`app-copy-button`)(202,`pre`)(203,`code`,24),bT(204,`
@Query(() => String)
userAgent(@Context('req') req: Request): string {
  return req.headers['user-agent'] ?? '';
}
`),cf()()(),Aa(205,`blockquote`,20)(206,`strong`),bT(207,`Hint`),cf(),bT(208,` Guards, interceptors, and other enhancers running in the GraphQL context can reach the same object via `),Aa(209,`code`),bT(210,`GqlExecutionContext.create(context).getContext()`),cf(),bT(211,` (see `),Aa(212,`a`,28),bT(213,`Other features`),cf(),bT(214,`).
`),cf(),Aa(215,`h4`,29)(216,`span`),bT(217,`GraphQL IDE`),cf()(),Aa(218,`p`)(219,`a`,30),bT(220,`GraphiQL`),cf(),bT(221,` is the default graphical, interactive, in-browser GraphQL IDE. It is served on the same URL as the GraphQL server itself, so you need a basic GraphQL server configured and running to access it. To try it now, install and build the `),Aa(222,`a`,31),bT(223,`code first sample application`),cf(),bT(224,`. If you're following along with these code samples, GraphiQL becomes available once you've completed the steps in the `),Aa(225,`a`,32),bT(226,`Resolvers chapter`),cf(),bT(227,`.`),cf(),Aa(228,`p`),bT(229,`With your application running, open your browser and navigate to `),Aa(230,`code`),bT(231,`http://localhost:3000/graphql`),cf(),bT(232,` (host and port may vary depending on your configuration). You will see GraphiQL, as shown below.`),cf(),Aa(233,`figure`),Wa(234,`img`,33),cf(),Aa(235,`blockquote`,20)(236,`strong`),bT(237,`Note`),cf(),bT(238,` The `),Aa(239,`code`),bT(240,`@nestjs/mercurius`),cf(),bT(241,` integration uses `),Aa(242,`a`,30),bT(243,`GraphiQL`),cf(),bT(244,` as well.
`),cf(),Aa(245,`h5`,34)(246,`span`),bT(247,`Enabling and disabling GraphiQL`),cf()(),Aa(248,`p`),bT(249,`As of `),Aa(250,`code`),bT(251,`@nestjs/graphql`),cf(),bT(252,` v14, GraphiQL is the only built-in GraphQL IDE; the older `),Aa(253,`code`),bT(254,`graphql-playground`),cf(),bT(255,` has been removed. With the Apollo driver, GraphiQL is enabled automatically whenever `),Aa(256,`code`),bT(257,`NODE_ENV`),cf(),bT(258,` is not `),Aa(259,`code`),bT(260,`production`),cf(),bT(261,`. In development, it works without any configuration; in production, the landing page is disabled by default.`),cf(),Aa(262,`p`),bT(263,`To control it explicitly, use the `),Aa(264,`code`),bT(265,`graphiql`),cf(),bT(266,` option:`),cf(),Aa(267,`app-copy-button`)(268,`pre`)(269,`code`,24),bT(270,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  graphiql: true, // force it on, including in production
}),
`),cf()()(),Aa(271,`app-copy-button`)(272,`pre`)(273,`code`,24),bT(274,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  graphiql: false, // disable the landing page entirely
}),
`),cf()()(),Aa(275,`blockquote`,16)(276,`strong`),bT(277,`Warning`),cf(),bT(278,` The `),Aa(279,`code`),bT(280,`playground`),cf(),bT(281,` option still exists, but only as a `),Aa(282,`strong`),bT(283,`deprecated boolean alias`),cf(),bT(284,` for `),Aa(285,`code`),bT(286,`graphiql`),cf(),bT(287,`. If both are set, `),Aa(288,`code`),bT(289,`graphiql`),cf(),bT(290,` takes precedence. Migrate `),Aa(291,`code`),bT(292,`playground: false`),cf(),bT(293,` to `),Aa(294,`code`),bT(295,`graphiql: false`),cf(),bT(296,` and `),Aa(297,`code`),bT(298,`playground: true`),cf(),bT(299,` to `),Aa(300,`code`),bT(301,`graphiql: true`),cf(),bT(302,`.
`),cf(),Aa(303,`h5`,35)(304,`span`),bT(305,`Configuring GraphiQL`),cf()(),Aa(306,`p`),bT(307,`To enable GraphiQL and configure it at the same time, pass an object instead of a boolean:`),cf(),Aa(308,`app-copy-button`)(309,`pre`)(310,`code`,24),bT(311,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  graphiql: {
    url: '/graphql',
    headers: {
      authorization: 'Bearer <token>',
    },
    shouldPersistHeaders: true,
    isHeadersEditorEnabled: true,
    inputValueDeprecation: false,
  },
}),
`),cf()()(),Aa(312,`p`),bT(313,`The available options are:`),cf(),Aa(314,`table`)(315,`tr`)(316,`td`)(317,`code`),bT(318,`url`),cf()(),Aa(319,`td`),bT(320,`Endpoint the IDE sends operations to. Defaults to the driver's `),Aa(321,`code`),bT(322,`path`),cf(),bT(323,` option, so set it only when the IDE should target a different URL than the one it is served from.`),cf()(),Aa(324,`tr`)(325,`td`)(326,`code`),bT(327,`headers`),cf()(),Aa(328,`td`),bT(329,`Headers applied to every request, e.g., a preconfigured `),Aa(330,`code`),bT(331,`authorization`),cf(),bT(332,` header during development. If the headers editor is enabled and the user sets the same header, the user's value takes precedence.`),cf()(),Aa(333,`tr`)(334,`td`)(335,`code`),bT(336,`shouldPersistHeaders`),cf()(),Aa(337,`td`),bT(338,`Whether the contents of the headers editor are persisted in browser storage. Default: `),Aa(339,`code`),bT(340,`true`),cf(),bT(341,`.`),cf()(),Aa(342,`tr`)(343,`td`)(344,`code`),bT(345,`isHeadersEditorEnabled`),cf()(),Aa(346,`td`),bT(347,`Whether the headers editor is shown inside the editor tools. Set to `),Aa(348,`code`),bT(349,`false`),cf(),bT(350,` to prevent users from editing headers. Default: `),Aa(351,`code`),bT(352,`true`),cf(),bT(353,`.`),cf()(),Aa(354,`tr`)(355,`td`)(356,`code`),bT(357,`inputValueDeprecation`),cf()(),Aa(358,`td`),bT(359,`If `),Aa(360,`code`),bT(361,`true`),cf(),bT(362,`, schema documentation includes deprecated input fields and argument values, and introspection returns them. Default: `),Aa(363,`code`),bT(364,`false`),cf(),bT(365,`.`),cf()()(),Aa(366,`blockquote`,20)(367,`strong`),bT(368,`Hint`),cf(),bT(369,` Because GraphiQL is enabled by default outside production, a common setup is to leave the default in place and set `),Aa(370,`code`),bT(371,`graphiql: false`),cf(),bT(372,` only for publicly reachable non-production environments where the IDE should not be exposed.
`),cf(),Aa(373,`h5`,36)(374,`span`),bT(375,`Subscriptions in the IDE`),cf()(),Aa(376,`p`),bT(377,`If your application uses `),Aa(378,`a`,37),bT(379,`subscriptions`),cf(),bT(380,`, use `),Aa(381,`code`),bT(382,`graphql-ws`),cf(),bT(383,`. Support for `),Aa(384,`code`),bT(385,`subscriptions-transport-ws`),cf(),bT(386,` has been `),Aa(387,`strong`),bT(388,`removed`),cf(),bT(389,`: it is no longer accepted as a `),Aa(390,`code`),bT(391,`subscriptions`),cf(),bT(392,` key, and the package is no longer a dependency.`),cf(),Aa(393,`app-copy-button`)(394,`pre`)(395,`code`,24),bT(396,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  subscriptions: {
    'graphql-ws': true,
  },
}),
`),cf()()(),Aa(397,`p`),bT(398,`GraphiQL can then execute subscription operations against your server directly.`),cf(),Aa(399,`h4`,38)(400,`span`),bT(401,`Code first`),cf()(),Aa(402,`p`),bT(403,`In the `),Aa(404,`strong`),bT(405,`code first`),cf(),bT(406,` approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema.`),cf(),Aa(407,`p`),bT(408,`To use the code first approach, start by adding the `),Aa(409,`code`),bT(410,`autoSchemaFile`),cf(),bT(411,` property to the options object:`),cf(),Aa(412,`app-copy-button`)(413,`pre`)(414,`code`,24),bT(415,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
}),
`),cf()()(),Aa(416,`p`),bT(417,`The `),Aa(418,`code`),bT(419,`autoSchemaFile`),cf(),bT(420,` property value is the path where the automatically generated schema is written. Alternatively, the schema can be generated on the fly in memory. To do so, set the `),Aa(421,`code`),bT(422,`autoSchemaFile`),cf(),bT(423,` property to `),Aa(424,`code`),bT(425,`true`),cf(),bT(426,`:`),cf(),Aa(427,`app-copy-button`)(428,`pre`)(429,`code`,24),bT(430,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: true,
}),
`),cf()()(),Aa(431,`p`),bT(432,`By default, the types in the generated schema appear in the order they are defined in the included modules. To sort the schema lexicographically, set the `),Aa(433,`code`),bT(434,`sortSchema`),cf(),bT(435,` property to `),Aa(436,`code`),bT(437,`true`),cf(),bT(438,`:`),cf(),Aa(439,`app-copy-button`)(440,`pre`)(441,`code`,24),bT(442,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  sortSchema: true,
}),
`),cf()()(),Aa(443,`h4`,39)(444,`span`),bT(445,`Example`),cf()(),Aa(446,`p`),bT(447,`A fully working `),Aa(448,`a`,31),bT(449,`code first sample`),cf(),bT(450,` is available in the NestJS repository.`),cf(),Aa(451,`h4`,40)(452,`span`),bT(453,`Schema first`),cf()(),Aa(454,`p`),bT(455,`To use the schema first approach, start by adding a `),Aa(456,`code`),bT(457,`typePaths`),cf(),bT(458,` property to the options object. The `),Aa(459,`code`),bT(460,`typePaths`),cf(),bT(461,` property tells the `),Aa(462,`code`),bT(463,`GraphQLModule`),cf(),bT(464,` where to look for the GraphQL SDL schema definition files you'll write. These files are combined in memory, so you can split your schema into several files and keep them next to their resolvers.`),cf(),Aa(465,`app-copy-button`)(466,`pre`)(467,`code`,24),bT(468,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  typePaths: ['./**/*.graphql'],
}),
`),cf()()(),Aa(469,`p`),bT(470,`You will typically also need TypeScript definitions (classes and interfaces) that correspond to the GraphQL SDL types. Writing them by hand is redundant and tedious, and it leaves you without a single source of truth: every change to the SDL forces you to update the TypeScript definitions as well. To address this, the `),Aa(471,`code`),bT(472,`@nestjs/graphql`),cf(),bT(473,` package can `),Aa(474,`strong`),bT(475,`automatically generate`),cf(),bT(476,` TypeScript definitions from the abstract syntax tree (`),Aa(477,`a`,41),bT(478,`AST`),cf(),bT(479,`). To enable this feature, add the `),Aa(480,`code`),bT(481,`definitions`),cf(),bT(482,` property when configuring the `),Aa(483,`code`),bT(484,`GraphQLModule`),cf(),bT(485,`.`),cf(),Aa(486,`app-copy-button`)(487,`pre`)(488,`code`,24),bT(489,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
  },
}),
`),cf()()(),Aa(490,`p`),bT(491,`The `),Aa(492,`code`),bT(493,`path`),cf(),bT(494,` property of the `),Aa(495,`code`),bT(496,`definitions`),cf(),bT(497,` object specifies where to save the generated TypeScript output. By default, all generated TypeScript types are interfaces. To generate classes instead, set the `),Aa(498,`code`),bT(499,`outputAs`),cf(),bT(500,` property to `),Aa(501,`code`),bT(502,`'class'`),cf(),bT(503,`.`),cf(),Aa(504,`app-copy-button`)(505,`pre`)(506,`code`,24),bT(507,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class',
  },
}),
`),cf()()(),Aa(508,`p`),bT(509,`This approach generates the TypeScript definitions each time the application starts. Alternatively, you can write a script that generates them on demand. For example, create the following `),Aa(510,`code`),bT(511,`generate-typings.ts`),cf(),bT(512,` script:`),cf(),Aa(513,`app-copy-button`)(514,`pre`)(515,`code`,24),bT(516,`
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'node:path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
});
`),cf()()(),Aa(517,`p`),bT(518,`Now you can run this script on demand:`),cf(),Aa(519,`pre`)(520,`code`,15),bT(521,`
$ ts-node generate-typings
`),cf()(),Aa(522,`blockquote`,20)(523,`strong`),bT(524,`Hint`),cf(),bT(525,` You can compile the script beforehand (e.g., with `),Aa(526,`code`),bT(527,`tsc`),cf(),bT(528,`) and use `),Aa(529,`code`),bT(530,`node`),cf(),bT(531,` to execute it.
`),cf(),Aa(532,`p`),bT(533,`To enable watch mode for the script (regenerating the typings whenever a `),Aa(534,`code`),bT(535,`.graphql`),cf(),bT(536,` file changes), pass the `),Aa(537,`code`),bT(538,`watch`),cf(),bT(539,` option to the `),Aa(540,`code`),bT(541,`generate()`),cf(),bT(542,` method.`),cf(),Aa(543,`app-copy-button`)(544,`pre`)(545,`code`,24),bT(546,`
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: true,
});
`),cf()()(),Aa(547,`p`),bT(548,`To generate an additional `),Aa(549,`code`),bT(550,`__typename`),cf(),bT(551,` field for every object type, enable the `),Aa(552,`code`),bT(553,`emitTypenameField`),cf(),bT(554,` option:`),cf(),Aa(555,`app-copy-button`)(556,`pre`)(557,`code`,24),bT(558,`
definitionsFactory.generate({
  // ...
  emitTypenameField: true,
});
`),cf()()(),Aa(559,`p`),bT(560,`To generate resolvers (queries, mutations, subscriptions) as plain fields without arguments, enable the `),Aa(561,`code`),bT(562,`skipResolverArgs`),cf(),bT(563,` option:`),cf(),Aa(564,`app-copy-button`)(565,`pre`)(566,`code`,24),bT(567,`
definitionsFactory.generate({
  // ...
  skipResolverArgs: true,
});
`),cf()()(),Aa(568,`p`),bT(569,`To generate enums as TypeScript union types instead of regular TypeScript enums, set the `),Aa(570,`code`),bT(571,`enumsAsTypes`),cf(),bT(572,` option to `),Aa(573,`code`),bT(574,`true`),cf(),bT(575,`:`),cf(),Aa(576,`app-copy-button`)(577,`pre`)(578,`code`,24),bT(579,`
definitionsFactory.generate({
  // ...
  enumsAsTypes: true,
});
`),cf()()(),Aa(580,`h4`,42)(581,`span`),bT(582,`Apollo Sandbox`),cf()(),Aa(583,`p`),bT(584,`To use `),Aa(585,`a`,43),bT(586,`Apollo Sandbox`),cf(),bT(587,` instead of GraphiQL as a GraphQL IDE for local development, use the following configuration:`),cf(),Aa(588,`app-copy-button`)(589,`pre`)(590,`code`,24),bT(591,`
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(592,`h4`,44)(593,`span`),bT(594,`Example`),cf()(),Aa(595,`p`),bT(596,`A fully working `),Aa(597,`a`,45),bT(598,`schema first sample`),cf(),bT(599,` is available in the NestJS repository.`),cf(),Aa(600,`h4`,46)(601,`span`),bT(602,`Accessing generated schema`),cf()(),Aa(603,`p`),bT(604,`In some circumstances, you may want a reference to the generated schema object. For example, in end-to-end tests you can then run queries with the `),Aa(605,`code`),bT(606,`graphql`),cf(),bT(607,` package directly, without any HTTP listeners.`),cf(),Aa(608,`p`),bT(609,`You can access the generated schema (in either the code first or schema first approach) using the `),Aa(610,`code`),bT(611,`GraphQLSchemaHost`),cf(),bT(612,` class:`),cf(),Aa(613,`app-copy-button`)(614,`pre`)(615,`code`,24),bT(616,`
const { schema } = app.get(GraphQLSchemaHost);
`),cf()()(),Aa(617,`blockquote`,20)(618,`strong`),bT(619,`Hint`),cf(),bT(620,` You must call the `),Aa(621,`code`),bT(622,`GraphQLSchemaHost#schema`),cf(),bT(623,` getter after the application has been initialized (after the `),Aa(624,`code`),bT(625,`onModuleInit`),cf(),bT(626,` hook has been triggered by either the `),Aa(627,`code`),bT(628,`app.listen()`),cf(),bT(629,` or `),Aa(630,`code`),bT(631,`app.init()`),cf(),bT(632,` method).
`),cf(),Aa(633,`h4`,47)(634,`span`),bT(635,`Async configuration`),cf()(),Aa(636,`p`),bT(637,`When you need to pass module options asynchronously instead of statically, use the `),Aa(638,`code`),bT(639,`forRootAsync()`),cf(),bT(640,` method. As with most dynamic modules, Nest provides several techniques for async configuration.`),cf(),Aa(641,`p`),bT(642,`One technique is to use a factory function:`),cf(),Aa(643,`app-copy-button`)(644,`pre`)(645,`code`,24),bT(646,`
GraphQLModule.forRootAsync<ApolloDriverConfig>({
  driver: ApolloDriver,
  useFactory: () => ({
    typePaths: ['./**/*.graphql'],
  }),
}),
`),cf()()(),Aa(647,`p`),bT(648,`Like other `),Aa(649,`a`,48),bT(650,`factory providers`),cf(),bT(651,`, the factory function can be async and can inject dependencies through `),Aa(652,`code`),bT(653,`inject`),cf(),bT(654,`.`),cf(),Aa(655,`app-copy-button`)(656,`pre`)(657,`code`,24),bT(658,`
GraphQLModule.forRootAsync<ApolloDriverConfig>({
  driver: ApolloDriver,
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    typePaths: configService.get<string[]>('GRAPHQL_TYPE_PATHS'),
  }),
  inject: [ConfigService],
}),
`),cf()()(),Aa(659,`p`),bT(660,`Alternatively, you can configure the `),Aa(661,`code`),bT(662,`GraphQLModule`),cf(),bT(663,` using a class instead of a factory, as shown below:`),cf(),Aa(664,`app-copy-button`)(665,`pre`)(666,`code`,24),bT(667,`
GraphQLModule.forRootAsync<ApolloDriverConfig>({
  driver: ApolloDriver,
  useClass: GqlConfigService,
}),
`),cf()()(),Aa(668,`p`),bT(669,`The construction above instantiates `),Aa(670,`code`),bT(671,`GqlConfigService`),cf(),bT(672,` inside `),Aa(673,`code`),bT(674,`GraphQLModule`),cf(),bT(675,` and uses it to create the options object. `),Aa(676,`code`),bT(677,`GqlConfigService`),cf(),bT(678,` must implement the `),Aa(679,`code`),bT(680,`GqlOptionsFactory`),cf(),bT(681,` interface, as shown below. The `),Aa(682,`code`),bT(683,`GraphQLModule`),cf(),bT(684,` calls the `),Aa(685,`code`),bT(686,`createGqlOptions()`),cf(),bT(687,` method on the instantiated object of the supplied class.`),cf(),Aa(688,`app-copy-button`)(689,`pre`)(690,`code`,24),bT(691,`
@Injectable()
class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      typePaths: ['./**/*.graphql'],
    };
  }
}
`),cf()()(),Aa(692,`p`),bT(693,`To reuse an existing options provider instead of creating a private copy inside the `),Aa(694,`code`),bT(695,`GraphQLModule`),cf(),bT(696,`, use the `),Aa(697,`code`),bT(698,`useExisting`),cf(),bT(699,` syntax.`),cf(),Aa(700,`app-copy-button`)(701,`pre`)(702,`code`,24),bT(703,`
GraphQLModule.forRootAsync<ApolloDriverConfig>({
  driver: ApolloDriver,
  imports: [ConfigModule],
  useExisting: ConfigService,
}),
`),cf()()(),Aa(704,`h4`,49)(705,`span`),bT(706,`Mercurius integration`),cf()(),Aa(707,`p`),bT(708,`Instead of Apollo, `),Aa(709,`a`,50),bT(710,`Fastify`),cf(),bT(711,` users can use the `),Aa(712,`code`),bT(713,`@nestjs/mercurius`),cf(),bT(714,` driver.`),cf(),Aa(715,`app-copy-button`,22)(716,`span`,23),Wa(717,`app-tabs`,null,3),cf(),Aa(719,`pre`)(720,`code`,24),bT(721,`
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(722,`blockquote`,20)(723,`strong`),bT(724,`Hint`),cf(),bT(725,` Once the application is running, open your browser and navigate to `),Aa(726,`code`),bT(727,`http://localhost:3000/graphiql`),cf(),bT(728,` to see the `),Aa(729,`a`,30),bT(730,`GraphiQL IDE`),cf(),bT(731,`.
`),cf(),Aa(732,`p`),bT(733,`The `),Aa(734,`code`),bT(735,`forRoot()`),cf(),bT(736,` method takes an options object, which is passed through to the underlying driver instance. See the `),Aa(737,`a`,26),bT(738,`Mercurius plugin options`),cf(),bT(739,` for the available settings.`),cf(),Aa(740,`h4`,51)(741,`span`),bT(742,`Multiple endpoints`),cf()(),Aa(743,`p`),bT(744,`The `),Aa(745,`code`),bT(746,`@nestjs/graphql`),cf(),bT(747,` module can also serve multiple endpoints at once, and you decide which modules are included in which endpoint. By default, `),Aa(748,`code`),bT(749,`GraphQLModule`),cf(),bT(750,` searches for resolvers throughout the whole application. To limit this scan to a subset of modules, use the `),Aa(751,`code`),bT(752,`include`),cf(),bT(753,` property.`),cf(),Aa(754,`app-copy-button`)(755,`pre`)(756,`code`,24),bT(757,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  include: [CatsModule],
}),
`),cf()()(),Aa(758,`p`),bT(759,`In the `),Aa(760,`strong`),bT(761,`code first`),cf(),bT(762,` approach, the `),Aa(763,`code`),bT(764,`include`),cf(),bT(765,` option only determines which modules are scanned for resolvers. Types decorated with `),Aa(766,`code`),bT(767,`@ObjectType()`),cf(),bT(768,`, `),Aa(769,`code`),bT(770,`@InputType()`),cf(),bT(771,`, `),Aa(772,`code`),bT(773,`@InterfaceType()`),cf(),bT(774,`, `),Aa(775,`code`),bT(776,`@ArgsType()`),cf(),bT(777,`, or registered through `),Aa(778,`code`),bT(779,`registerEnumType()`),cf(),bT(780,` / `),Aa(781,`code`),bT(782,`createUnionType()`),cf(),bT(783,` still end up in every generated schema. To scope a type to a specific module, use the `),Aa(784,`code`),bT(785,`registerIn`),cf(),bT(786,` option:`),cf(),Aa(787,`app-copy-button`)(788,`pre`)(789,`code`,24),bT(790,`
@ObjectType({ registerIn: () => CatsModule })
export class Cat {
  @Field()
  name: string;
}
`),cf()()(),Aa(791,`p`),bT(792,`When a schema is built with `),Aa(793,`code`),bT(794,`include: [CatsModule]`),cf(),bT(795,`, only types assigned to `),Aa(796,`code`),bT(797,`CatsModule`),cf(),bT(798,` become part of it, and types assigned to other modules are left out. Types without `),Aa(799,`code`),bT(800,`registerIn`),cf(),bT(801,` keep the default behavior and are available in every schema that references them.`),cf(),Aa(802,`p`),bT(803,`The `),Aa(804,`code`),bT(805,`registerIn`),cf(),bT(806,` option is available on `),Aa(807,`code`),bT(808,`@InputType()`),cf(),bT(809,`, `),Aa(810,`code`),bT(811,`@InterfaceType()`),cf(),bT(812,`, and `),Aa(813,`code`),bT(814,`@ArgsType()`),cf(),bT(815,`, as well as `),Aa(816,`code`),bT(817,`registerEnumType()`),cf(),bT(818,` and `),Aa(819,`code`),bT(820,`createUnionType()`),cf(),bT(821,`:`),cf(),Aa(822,`app-copy-button`)(823,`pre`)(824,`code`,24),bT(825,`
@InputType({ registerIn: () => CatsModule })
export class CreateCatInput {
  @Field()
  name: string;
}

registerEnumType(CatBreed, {
  name: 'CatBreed',
  registerIn: () => CatsModule,
});

export const CatsUnion = createUnionType({
  name: 'CatsUnion',
  types: () => [Lion, Tiger] as const,
  registerIn: () => CatsModule,
});
`),cf()()(),Aa(826,`blockquote`,20)(827,`strong`),bT(828,`Hint`),cf(),bT(829,` You can pass either the module class itself or a factory function returning it. Prefer the factory form (`),Aa(830,`code`),bT(831,`() => CatsModule`),cf(),bT(832,`) whenever the type and the module reference each other: it defers module resolution and avoids errors caused by circular imports.
`),cf(),Aa(833,`h4`,52)(834,`span`),bT(835,`Third-party integrations`),cf()(),Aa(836,`ul`)(837,`li`)(838,`a`,53),bT(839,`GraphQL Yoga`),cf()()(),Aa(840,`h4`,54)(841,`span`),bT(842,`Example`),cf()(),Aa(843,`p`),bT(844,`A working `),Aa(845,`a`,55),bT(846,`Mercurius sample`),cf(),bT(847,` is available in the NestJS repository.`),cf()(),Aa(848,`a`,56),Wa(849,`i`,57),Aa(850,`span`),bT(851,`Edit on GitHub`),cf()()())},dependencies:[Lt,_,ln$1,u,Jc],encapsulation:2})}return i})();var O=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-resolvers-map`]],features:[xy],decls:1143,vars:42,consts:[[`contentReference`,``],[`app4e73b8a3d4d4be42048432279b81fd9f667aba62`,``],[`app583cad239d67bda1085507d386816106776a0f74`,``],[`app2ff79b7e456e18f23a9d36bea55bbe73a8ab7089`,``],[`appc6e532bce8e1008c2a75b4882d711eb90696c184`,``],[`app2368aa157ef23858585b96693c383a2cdf0843a6`,``],[`appb47725780be6119bec546d57b21e63eb263f9b6f`,``],[`appe3a0bcf561b3ea41a4df5f630fa97943e5b3a1c0`,``],[`app91c6a66b2d3a9c151e5132f971d637a64ffddbab`,``],[`appe17c0b87b73e7ca2082d281897d1f3dfdd6671ee`,``],[1,`content`],[1,`content-inner`],[`id`,`resolvers`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/`],[`appAnchor`,``,`id`,`code-first`],[`appAnchor`,``,`id`,`object-types`],[1,`language-graphql`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`routerLink`,`/graphql/cli-plugin`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/schema/`],[`routerLink`,`/graphql/scalars`],[`href`,`/graphql/quick-start#multiple-endpoints`],[`appAnchor`,``,`id`,`code-first-resolver`],[`href`,`/graphql/resolvers#module`],[1,`warning`],[`routerLink`,`/recipes/crud-generator`],[`appAnchor`,``,`id`,`query-type-names`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/queries/`],[`appAnchor`,``,`id`,`query-decorator-options`],[`appAnchor`,``,`id`,`args-decorator-options`],[`href`,`/controllers#route-parameters`],[`appAnchor`,``,`id`,`dedicated-arguments-class`],[`routerLink`,`/application/validation`],[`appAnchor`,``,`id`,`class-inheritance`],[`appAnchor`,``,`id`,`generics`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/pagination/#pagination-and-edges`],[`appAnchor`,``,`id`,`schema-first`],[`routerLink`,`/graphql/quick-start`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/schema/#type-language`],[`appAnchor`,``,`id`,`schema-first-resolver`],[`appAnchor`,``,`id`,`generating-types`],[`routerLink`,`/pipes`],[`appAnchor`,``,`id`,`graphql-argument-decorators`],[`appAnchor`,``,`id`,`module`],[`routerLink`,`/cli/overview`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/resolvers-map.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){if(o&1&&(Aa(0,`div`,10,0)(2,`div`,11)(3,`h3`,12),bT(4,`Resolvers`),cf(),Aa(5,`p`),bT(6,`Resolvers provide the instructions for turning a `),Aa(7,`a`,13),bT(8,`GraphQL`),cf(),bT(9,` operation (a query, mutation, or subscription) into data. They return data in the shape specified in the schema, either synchronously or as a promise that resolves to a result of that shape. Typically, you create a `),Aa(10,`strong`),bT(11,`resolver map`),cf(),bT(12,` manually. The `),Aa(13,`code`),bT(14,`@nestjs/graphql`),cf(),bT(15,` package, on the other hand, generates the resolver map automatically from the metadata provided by the decorators you use to annotate classes. To demonstrate how to create a GraphQL API with the package, we'll build a simple authors API.`),cf(),Aa(16,`h4`,14)(17,`span`),bT(18,`Code first`),cf()(),Aa(19,`p`),bT(20,`In the code first approach, you don't write the GraphQL schema in SDL by hand. Instead, you use TypeScript decorators to generate the SDL from TypeScript class definitions. The `),Aa(21,`code`),bT(22,`@nestjs/graphql`),cf(),bT(23,` package reads the metadata defined through the decorators and generates the schema for you.`),cf(),Aa(24,`h4`,15)(25,`span`),bT(26,`Object types`),cf()(),Aa(27,`p`),bT(28,`Most of the definitions in a GraphQL schema are `),Aa(29,`strong`),bT(30,`object types`),cf(),bT(31,`. Each object type you define should represent a domain object that an application client might need to interact with. For example, our sample API needs to fetch a list of authors and their posts, so we define an `),Aa(32,`code`),bT(33,`Author`),cf(),bT(34,` type and a `),Aa(35,`code`),bT(36,`Post`),cf(),bT(37,` type.`),cf(),Aa(38,`p`),bT(39,`With the schema first approach, you would define the `),Aa(40,`code`),bT(41,`Author`),cf(),bT(42,` type in SDL like this:`),cf(),Aa(43,`pre`)(44,`code`,16),bT(45,`
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post!]!
}
`),cf()(),Aa(46,`p`),bT(47,`With the code first approach, you define the schema with TypeScript classes and annotate their fields with TypeScript decorators. The equivalent of the above SDL in the code first approach is:`),cf(),Aa(48,`app-copy-button`,17)(49,`span`,18),bT(50),LT(51,`extension`),Wa(52,`app-tabs`,null,1),cf(),Aa(54,`pre`)(55,`code`,19),bT(56,`
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model.js';

@ObjectType()
export class Author {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Post])
  posts: Post[];
}
`),cf()()(),Aa(57,`blockquote`,20)(58,`strong`),bT(59,`Hint`),cf(),bT(60,` TypeScript's metadata reflection system has several limitations. For instance, it can't determine which properties a class consists of, or whether a given property is optional or required. Because of these limitations, you must either use the `),Aa(61,`code`),bT(62,`@Field()`),cf(),bT(63,` decorator in your schema definition classes to provide metadata about each field's GraphQL type and optionality, or use the `),Aa(64,`a`,21),bT(65,`CLI plugin`),cf(),bT(66,` to generate this metadata for you.
`),cf(),Aa(67,`p`),bT(68,`The `),Aa(69,`code`),bT(70,`Author`),cf(),bT(71,` object type, like any class, is made of a collection of fields, each declaring a type. A field's type corresponds to a `),Aa(72,`a`,22),bT(73,`GraphQL type`),cf(),bT(74,`, which can be either another object type or a scalar type. A GraphQL scalar type is a primitive (like `),Aa(75,`code`),bT(76,`ID`),cf(),bT(77,`, `),Aa(78,`code`),bT(79,`String`),cf(),bT(80,`, `),Aa(81,`code`),bT(82,`Boolean`),cf(),bT(83,`, or `),Aa(84,`code`),bT(85,`Int`),cf(),bT(86,`) that resolves to a single value.`),cf(),Aa(87,`blockquote`,20)(88,`strong`),bT(89,`Hint`),cf(),bT(90,` In addition to GraphQL's built-in scalar types, you can define `),Aa(91,`a`,23),bT(92,`custom scalar types`),cf(),bT(93,`.
`),cf(),Aa(94,`p`),bT(95,`The `),Aa(96,`code`),bT(97,`Author`),cf(),bT(98,` object type definition above causes Nest to `),Aa(99,`strong`),bT(100,`generate`),cf(),bT(101,` the SDL shown earlier:`),cf(),Aa(102,`pre`)(103,`code`,16),bT(104,`
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post!]!
}
`),cf()(),Aa(105,`p`),bT(106,`The `),Aa(107,`code`),bT(108,`@Field()`),cf(),bT(109,` decorator accepts an optional type function (e.g., `),Aa(110,`code`),bT(111,`type => Int`),cf(),bT(112,`), and optionally an options object.`),cf(),Aa(113,`p`),bT(114,`The type function is required when the mapping between the TypeScript type system and the GraphQL type system is ambiguous. Specifically, it is `),Aa(115,`strong`),bT(116,`not`),cf(),bT(117,` required for `),Aa(118,`code`),bT(119,`string`),cf(),bT(120,` and `),Aa(121,`code`),bT(122,`boolean`),cf(),bT(123,` types, but it `),Aa(124,`strong`),bT(125,`is`),cf(),bT(126,` required for `),Aa(127,`code`),bT(128,`number`),cf(),bT(129,`, which can map to either a GraphQL `),Aa(130,`code`),bT(131,`Int`),cf(),bT(132,` or `),Aa(133,`code`),bT(134,`Float`),cf(),bT(135,` (without a type function, `),Aa(136,`code`),bT(137,`number`),cf(),bT(138,` maps to `),Aa(139,`code`),bT(140,`Float`),cf(),bT(141,` by default). The type function returns the desired GraphQL type, as shown in the examples throughout these chapters.`),cf(),Aa(142,`p`),bT(143,`The options object can have any of the following key/value pairs:`),cf(),Aa(144,`ul`)(145,`li`)(146,`code`),bT(147,`nullable`),cf(),bT(148,`: whether the field is nullable (in `),Aa(149,`code`),bT(150,`@nestjs/graphql`),cf(),bT(151,`, each field is non-nullable by default); `),Aa(152,`code`),bT(153,`boolean`),cf()(),Aa(154,`li`)(155,`code`),bT(156,`description`),cf(),bT(157,`: the field description; `),Aa(158,`code`),bT(159,`string`),cf()(),Aa(160,`li`)(161,`code`),bT(162,`deprecationReason`),cf(),bT(163,`: marks the field as deprecated; `),Aa(164,`code`),bT(165,`string`),cf()()(),Aa(166,`p`),bT(167,`For example:`),cf(),Aa(168,`app-copy-button`)(169,`pre`)(170,`code`,19),bT(171,`
@Field({ description: \`Book title\`, deprecationReason: 'Not useful in v2 schema' })
title: string;
`),cf()()(),Aa(172,`blockquote`,20)(173,`strong`),bT(174,`Hint`),cf(),bT(175,` You can also add a description to, or deprecate, the whole object type: `),Aa(176,`code`),bT(177),cf(),bT(178,`. Likewise, if your application serves `),Aa(179,`a`,24),bT(180,`multiple GraphQL endpoints`),cf(),bT(181,`, you can scope a type to a specific module: `),Aa(182,`code`),bT(183),cf(),bT(184,`.
`),cf(),Aa(185,`p`),bT(186,`When the field is an array, you must indicate the array type in the `),Aa(187,`code`),bT(188,`@Field()`),cf(),bT(189,` decorator's type function, as shown below:`),cf(),Aa(190,`app-copy-button`)(191,`pre`)(192,`code`,19),bT(193,`
@Field(type => [Post])
posts: Post[];
`),cf()()(),Aa(194,`blockquote`,20)(195,`strong`),bT(196,`Hint`),cf(),bT(197,` Array bracket notation (`),Aa(198,`code`),bT(199,`[ ]`),cf(),bT(200,`) indicates the depth of the array. For example, `),Aa(201,`code`),bT(202,`[[Int]]`),cf(),bT(203,` represents an integer matrix.
`),cf(),Aa(204,`p`),bT(205,`To declare that an array's items (not the array itself) are nullable, set the `),Aa(206,`code`),bT(207,`nullable`),cf(),bT(208,` property to `),Aa(209,`code`),bT(210,`'items'`),cf(),bT(211,` as shown below:`),cf(),Aa(212,`app-copy-button`)(213,`pre`)(214,`code`,19),bT(215,`
@Field(type => [Post], { nullable: 'items' })
posts: Post[];
`),cf()()(),Aa(216,`blockquote`,20)(217,`strong`),bT(218,`Hint`),cf(),bT(219,` If both the array and its items are nullable, set `),Aa(220,`code`),bT(221,`nullable`),cf(),bT(222,` to `),Aa(223,`code`),bT(224,`'itemsAndList'`),cf(),bT(225,` instead.
`),cf(),Aa(226,`p`),bT(227,`With the `),Aa(228,`code`),bT(229,`Author`),cf(),bT(230,` object type in place, let's define the `),Aa(231,`code`),bT(232,`Post`),cf(),bT(233,` object type.`),cf(),Aa(234,`app-copy-button`,17)(235,`span`,18),bT(236),LT(237,`extension`),Wa(238,`app-tabs`,null,2),cf(),Aa(240,`pre`)(241,`code`,19),bT(242,`
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(type => Int)
  id: number;

  @Field()
  title: string;

  @Field(type => Int, { nullable: true })
  votes?: number;
}
`),cf()()(),Aa(243,`p`),bT(244,`The `),Aa(245,`code`),bT(246,`Post`),cf(),bT(247,` object type generates the following part of the GraphQL schema in SDL:`),cf(),Aa(248,`pre`)(249,`code`,16),bT(250,`
type Post {
  id: Int!
  title: String!
  votes: Int
}
`),cf()(),Aa(251,`h4`,25)(252,`span`),bT(253,`Code first resolver`),cf()(),Aa(254,`p`),bT(255,`At this point, we've defined the objects (type definitions) that can exist in our data graph, but clients don't yet have a way to interact with them. To address that, we need a resolver class. In the code first approach, a resolver class both defines resolver functions `),Aa(256,`strong`),bT(257,`and`),cf(),bT(258,` generates the `),Aa(259,`strong`),bT(260,`Query type`),cf(),bT(261,`. The example below shows how:`),cf(),Aa(262,`app-copy-button`,17)(263,`span`,18),bT(264),LT(265,`extension`),Wa(266,`app-tabs`,null,3),cf(),Aa(268,`pre`)(269,`code`,19),bT(270,`
@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(() => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
`),cf()()(),Aa(271,`blockquote`,20)(272,`strong`),bT(273,`Hint`),cf(),bT(274,` All decorators (e.g., `),Aa(275,`code`),bT(276,`@Resolver`),cf(),bT(277,`, `),Aa(278,`code`),bT(279,`@ResolveField`),cf(),bT(280,`, `),Aa(281,`code`),bT(282,`@Args`),cf(),bT(283,`, etc.) are exported from the `),Aa(284,`code`),bT(285,`@nestjs/graphql`),cf(),bT(286,` package.
`),cf(),Aa(287,`p`),bT(288,`You can define multiple resolver classes, and Nest combines them at run time. See the `),Aa(289,`a`,26),bT(290,`Module`),cf(),bT(291,` section below for more on code organization.`),cf(),Aa(292,`blockquote`,27)(293,`strong`),bT(294,`Note`),cf(),bT(295,` The logic inside the `),Aa(296,`code`),bT(297,`AuthorsService`),cf(),bT(298,` and `),Aa(299,`code`),bT(300,`PostsService`),cf(),bT(301,` classes can be as simple or sophisticated as needed. The point of this example is to show how to construct resolvers and how they interact with other providers.
`),cf(),Aa(302,`p`),bT(303,`The `),Aa(304,`code`),bT(305,`AuthorsResolver`),cf(),bT(306,` above defines one query resolver function and one field resolver function. To create a resolver, create a class with resolver functions as methods, and annotate the class with the `),Aa(307,`code`),bT(308,`@Resolver()`),cf(),bT(309,` decorator.`),cf(),Aa(310,`p`),bT(311,`The `),Aa(312,`code`),bT(313,`author()`),cf(),bT(314,` method is a query handler that returns the author object for the `),Aa(315,`code`),bT(316,`id`),cf(),bT(317,` sent in the request. To mark a method as a query handler, use the `),Aa(318,`code`),bT(319,`@Query()`),cf(),bT(320,` decorator.`),cf(),Aa(321,`p`),bT(322,`The argument passed to the `),Aa(323,`code`),bT(324,`@Resolver()`),cf(),bT(325,` decorator is optional, but it comes into play once your graph becomes non-trivial: it supplies the parent object used by field resolver functions as they traverse down an object graph.`),cf(),Aa(326,`p`),bT(327,`Because this class includes a `),Aa(328,`strong`),bT(329,`field resolver`),cf(),bT(330,` function (for the `),Aa(331,`code`),bT(332,`posts`),cf(),bT(333,` property of the `),Aa(334,`code`),bT(335,`Author`),cf(),bT(336,` object type), you `),Aa(337,`strong`),bT(338,`must`),cf(),bT(339,` pass the `),Aa(340,`code`),bT(341,`@Resolver()`),cf(),bT(342,` decorator a value that indicates the parent type (i.e., the corresponding `),Aa(343,`code`),bT(344,`ObjectType`),cf(),bT(345,` class) for all field resolvers defined within the class. A field resolver needs access to the parent object (the object that the field being resolved belongs to). Here, the field resolver populates an author's `),Aa(346,`code`),bT(347,`posts`),cf(),bT(348,` array by calling a service with the author's `),Aa(349,`code`),bT(350,`id`),cf(),bT(351,`, which is why the parent object must be identified in the `),Aa(352,`code`),bT(353,`@Resolver()`),cf(),bT(354,` decorator. The `),Aa(355,`code`),bT(356,`@Parent()`),cf(),bT(357,` method parameter decorator then extracts a reference to that parent object in the field resolver.`),cf(),Aa(358,`p`),bT(359,`You can define multiple `),Aa(360,`code`),bT(361,`@Query()`),cf(),bT(362,` resolver functions (both within this class and in other resolver classes). They are aggregated into a single `),Aa(363,`strong`),bT(364,`Query type`),cf(),bT(365,` definition in the generated SDL, along with the corresponding entries in the resolver map. This lets you define queries close to the models and services they use, and keep them well organized in modules.`),cf(),Aa(366,`blockquote`,20)(367,`strong`),bT(368,`Hint`),cf(),bT(369,` The Nest CLI provides a generator (schematic) that generates `),Aa(370,`strong`),bT(371,`all the boilerplate code`),cf(),bT(372,` for you. See the `),Aa(373,`a`,28),bT(374,`CRUD generator`),cf(),bT(375,` recipe for details.
`),cf(),Aa(376,`h4`,29)(377,`span`),bT(378,`Query type names`),cf()(),Aa(379,`p`),bT(380,`In the examples above, the `),Aa(381,`code`),bT(382,`@Query()`),cf(),bT(383,` decorator derives the GraphQL query name from the method name. For example, consider the following construction from the example above:`),cf(),Aa(384,`app-copy-button`)(385,`pre`)(386,`code`,19),bT(387,`
@Query(() => Author)
async author(@Args('id', { type: () => Int }) id: number) {
  return this.authorsService.findOneById(id);
}
`),cf()()(),Aa(388,`p`),bT(389,`This generates the following entry for the author query in the schema (the query uses the same name as the method):`),cf(),Aa(390,`pre`)(391,`code`,16),bT(392,`
type Query {
  author(id: Int!): Author!
}
`),cf()(),Aa(393,`blockquote`,20)(394,`strong`),bT(395,`Hint`),cf(),bT(396,` Learn more about `),Aa(397,`a`,30),bT(398,`GraphQL queries`),cf(),bT(399,`.
`),cf(),Aa(400,`p`),bT(401,`Conventionally, these names are decoupled. For example, you might name the query handler method `),Aa(402,`code`),bT(403,`getAuthor()`),cf(),bT(404,` but still expose the query as `),Aa(405,`code`),bT(406,`author`),cf(),bT(407,`. The same applies to field resolvers. To do this, pass the mapping names as arguments to the `),Aa(408,`code`),bT(409,`@Query()`),cf(),bT(410,` and `),Aa(411,`code`),bT(412,`@ResolveField()`),cf(),bT(413,` decorators, as shown below:`),cf(),Aa(414,`app-copy-button`,17)(415,`span`,18),bT(416),LT(417,`extension`),Wa(418,`app-tabs`,null,4),cf(),Aa(420,`pre`)(421,`code`,19),bT(422,`
@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
`),cf()()(),Aa(423,`p`),bT(424,`The `),Aa(425,`code`),bT(426,`getAuthor()`),cf(),bT(427,` handler method above generates the following part of the GraphQL schema in SDL:`),cf(),Aa(428,`pre`)(429,`code`,16),bT(430,`
type Query {
  author(id: Int!): Author!
}
`),cf()(),Aa(431,`h4`,31)(432,`span`),bT(433,`Query decorator options`),cf()(),Aa(434,`p`),bT(435,`The `),Aa(436,`code`),bT(437,`@Query()`),cf(),bT(438,` decorator's options object (where we pass `),Aa(439,`code`),bT(440),cf(),bT(441,` above) accepts a number of key/value pairs:`),cf(),Aa(442,`ul`)(443,`li`)(444,`code`),bT(445,`name`),cf(),bT(446,`: name of the query; a `),Aa(447,`code`),bT(448,`string`),cf()(),Aa(449,`li`)(450,`code`),bT(451,`description`),cf(),bT(452,`: a description used to generate GraphQL schema documentation (e.g., in GraphiQL); a `),Aa(453,`code`),bT(454,`string`),cf()(),Aa(455,`li`)(456,`code`),bT(457,`deprecationReason`),cf(),bT(458,`: marks the query as deprecated in the schema metadata (e.g., shown in GraphiQL); a `),Aa(459,`code`),bT(460,`string`),cf()(),Aa(461,`li`)(462,`code`),bT(463,`nullable`),cf(),bT(464,`: whether the query can return a null data response; `),Aa(465,`code`),bT(466,`boolean`),cf(),bT(467,`, `),Aa(468,`code`),bT(469,`'items'`),cf(),bT(470,`, or `),Aa(471,`code`),bT(472,`'itemsAndList'`),cf(),bT(473,` (see above for details of `),Aa(474,`code`),bT(475,`'items'`),cf(),bT(476,` and `),Aa(477,`code`),bT(478,`'itemsAndList'`),cf(),bT(479,`)`),cf()(),Aa(480,`h4`,32)(481,`span`),bT(482,`Args decorator options`),cf()(),Aa(483,`p`),bT(484,`Use the `),Aa(485,`code`),bT(486,`@Args()`),cf(),bT(487,` decorator to extract arguments from a request for use in the handler method. This works much like `),Aa(488,`a`,33),bT(489,`REST route parameter extraction`),cf(),bT(490,`.`),cf(),Aa(491,`p`),bT(492,`Usually, the `),Aa(493,`code`),bT(494,`@Args()`),cf(),bT(495,` decorator doesn't need an options object. For example, if an identifier is a string, the following construction is sufficient: it plucks the named field from the inbound GraphQL request for use as a method argument.`),cf(),Aa(496,`app-copy-button`)(497,`pre`)(498,`code`,19),bT(499,`
@Args('id') id: string
`),cf()()(),Aa(500,`p`),bT(501,`The `),Aa(502,`code`),bT(503,`getAuthor()`),cf(),bT(504,` method uses the `),Aa(505,`code`),bT(506,`number`),cf(),bT(507,` type, which presents a challenge: the TypeScript `),Aa(508,`code`),bT(509,`number`),cf(),bT(510,` type doesn't carry enough information about the expected GraphQL representation (e.g., `),Aa(511,`code`),bT(512,`Int`),cf(),bT(513,` vs. `),Aa(514,`code`),bT(515,`Float`),cf(),bT(516,`). You therefore have to pass the type reference `),Aa(517,`strong`),bT(518,`explicitly`),cf(),bT(519,`, in an options object passed as the second argument to the `),Aa(520,`code`),bT(521,`@Args()`),cf(),bT(522,` decorator:`),cf(),Aa(523,`app-copy-button`)(524,`pre`)(525,`code`,19),bT(526,`
@Query(() => Author, { name: 'author' })
async getAuthor(@Args('id', { type: () => Int }) id: number) {
  return this.authorsService.findOneById(id);
}
`),cf()()(),Aa(527,`p`),bT(528,`The options object accepts the following optional key/value pairs:`),cf(),Aa(529,`ul`)(530,`li`)(531,`code`),bT(532,`type`),cf(),bT(533,`: a function returning the GraphQL type`),cf(),Aa(534,`li`)(535,`code`),bT(536,`defaultValue`),cf(),bT(537,`: a default value; `),Aa(538,`code`),bT(539,`any`),cf()(),Aa(540,`li`)(541,`code`),bT(542,`description`),cf(),bT(543,`: description metadata; `),Aa(544,`code`),bT(545,`string`),cf()(),Aa(546,`li`)(547,`code`),bT(548,`deprecationReason`),cf(),bT(549,`: to deprecate a field and provide metadata describing why; `),Aa(550,`code`),bT(551,`string`),cf()(),Aa(552,`li`)(553,`code`),bT(554,`nullable`),cf(),bT(555,`: whether the field is nullable`),cf()(),Aa(556,`p`),bT(557,`Query handler methods can take multiple arguments. For example, to fetch an author by `),Aa(558,`code`),bT(559,`firstName`),cf(),bT(560,` and `),Aa(561,`code`),bT(562,`lastName`),cf(),bT(563,`, call `),Aa(564,`code`),bT(565,`@Args()`),cf(),bT(566,` twice:`),cf(),Aa(567,`app-copy-button`)(568,`pre`)(569,`code`,19),bT(570,`
getAuthor(
  @Args('firstName', { nullable: true }) firstName?: string,
  @Args('lastName', { defaultValue: '' }) lastName?: string,
) {}
`),cf()()(),Aa(571,`blockquote`,20)(572,`strong`),bT(573,`Hint`),cf(),bT(574,` For a GraphQL nullable field like `),Aa(575,`code`),bT(576,`firstName`),cf(),bT(577,`, you don't need to add `),Aa(578,`code`),bT(579,`null`),cf(),bT(580,` or `),Aa(581,`code`),bT(582,`undefined`),cf(),bT(583,` to the field's TypeScript type. Be aware, however, that a nullable field lets these values through to your resolver, so you need to guard against them there.
`),cf(),Aa(584,`h4`,34)(585,`span`),bT(586,`Dedicated arguments class`),cf()(),Aa(587,`p`),bT(588,`With inline `),Aa(589,`code`),bT(590,`@Args()`),cf(),bT(591,` calls, code like the example above quickly becomes bloated. Instead, you can create a dedicated `),Aa(592,`code`),bT(593,`GetAuthorArgs`),cf(),bT(594,` arguments class and access it in the handler method as follows:`),cf(),Aa(595,`app-copy-button`)(596,`pre`)(597,`code`,19),bT(598,`
@Args() args: GetAuthorArgs
`),cf()()(),Aa(599,`p`),bT(600,`Create the `),Aa(601,`code`),bT(602,`GetAuthorArgs`),cf(),bT(603,` class using `),Aa(604,`code`),bT(605,`@ArgsType()`),cf(),bT(606,` as shown below:`),cf(),Aa(607,`app-copy-button`,17)(608,`span`,18),bT(609),LT(610,`extension`),Wa(611,`app-tabs`,null,5),cf(),Aa(613,`pre`)(614,`code`,19),bT(615,`
import { MinLength } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorArgs {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ defaultValue: '' })
  @MinLength(3)
  lastName: string;
}
`),cf()()(),Aa(616,`blockquote`,20)(617,`strong`),bT(618,`Hint`),cf(),bT(619,` Again, due to the limitations of TypeScript's metadata reflection system, you must either use the `),Aa(620,`code`),bT(621,`@Field()`),cf(),bT(622,` decorator to indicate type and optionality, or use the `),Aa(623,`a`,21),bT(624,`CLI plugin`),cf(),bT(625,`. As before, you don't need to add `),Aa(626,`code`),bT(627,`null`),cf(),bT(628,` or `),Aa(629,`code`),bT(630,`undefined`),cf(),bT(631,` to the type of the nullable `),Aa(632,`code`),bT(633,`firstName`),cf(),bT(634,` field, but you do need to guard against these values in your resolvers.
`),cf(),Aa(635,`p`),bT(636,`This generates the following part of the GraphQL schema in SDL:`),cf(),Aa(637,`pre`)(638,`code`,16),bT(639,`
type Query {
  author(firstName: String, lastName: String! = ""): Author!
}
`),cf()(),Aa(640,`blockquote`,20)(641,`strong`),bT(642,`Hint`),cf(),bT(643,` Argument classes like `),Aa(644,`code`),bT(645,`GetAuthorArgs`),cf(),bT(646,` work well with the `),Aa(647,`code`),bT(648,`ValidationPipe`),cf(),bT(649,` (see `),Aa(650,`a`,35),bT(651,`Validation`),cf(),bT(652,`).
`),cf(),Aa(653,`h4`,36)(654,`span`),bT(655,`Class inheritance`),cf()(),Aa(656,`p`),bT(657,`You can use standard TypeScript class inheritance to create extensible base classes with generic utility features (fields and field properties, validations, etc.). For example, you may have a set of pagination-related arguments that always include the standard `),Aa(658,`code`),bT(659,`offset`),cf(),bT(660,` and `),Aa(661,`code`),bT(662,`limit`),cf(),bT(663,` fields, plus other type-specific index fields. You can set up a class hierarchy as shown below.`),cf(),Aa(664,`p`),bT(665,`Base `),Aa(666,`code`),bT(667,`@ArgsType()`),cf(),bT(668,` class:`),cf(),Aa(669,`app-copy-button`)(670,`pre`)(671,`code`,19),bT(672,`
@ArgsType()
class PaginationArgs {
  @Field(() => Int)
  offset: number = 0;

  @Field(() => Int)
  limit: number = 10;
}
`),cf()()(),Aa(673,`p`),bT(674,`Type-specific subclass of the base `),Aa(675,`code`),bT(676,`@ArgsType()`),cf(),bT(677,` class:`),cf(),Aa(678,`app-copy-button`)(679,`pre`)(680,`code`,19),bT(681,`
@ArgsType()
class GetAuthorArgs extends PaginationArgs {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ defaultValue: '' })
  @MinLength(3)
  lastName: string;
}
`),cf()()(),Aa(682,`p`),bT(683,`The same approach can be taken with `),Aa(684,`code`),bT(685,`@ObjectType()`),cf(),bT(686,` objects. Define generic properties on the base class:`),cf(),Aa(687,`app-copy-button`)(688,`pre`)(689,`code`,19),bT(690,`
@ObjectType()
class Character {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
`),cf()()(),Aa(691,`p`),bT(692,`Add type-specific properties on subclasses:`),cf(),Aa(693,`app-copy-button`)(694,`pre`)(695,`code`,19),bT(696,`
@ObjectType()
class Warrior extends Character {
  @Field()
  level: number;
}
`),cf()()(),Aa(697,`p`),bT(698,`You can use inheritance with resolvers as well, and combine it with TypeScript generics to keep type safety. For example, to create a base class with a generic `),Aa(699,`code`),bT(700,`findAll`),cf(),bT(701,` query, use a construction like this:`),cf(),Aa(702,`app-copy-button`)(703,`pre`)(704,`code`,19),bT(705,`
function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    @Query(() => [classRef], { name: \`findAll\${classRef.name}\` })
    async findAll(): Promise<T[]> {
      return [];
    }
  }
  return BaseResolverHost;
}
`),cf()()(),Aa(706,`p`),bT(707,`Note the following:`),cf(),Aa(708,`ul`)(709,`li`),bT(710,`An explicit return type (`),Aa(711,`code`),bT(712,`any`),cf(),bT(713,` above) is required; otherwise, TypeScript complains about the usage of a private class definition. We recommend defining an interface instead of using `),Aa(714,`code`),bT(715,`any`),cf(),bT(716,`.`),cf(),Aa(717,`li`)(718,`code`),bT(719,`Type`),cf(),bT(720,` is imported from the `),Aa(721,`code`),bT(722,`@nestjs/common`),cf(),bT(723,` package.`),cf(),Aa(724,`li`),bT(725,`The `),Aa(726,`code`),bT(727,`isAbstract: true`),cf(),bT(728,` property indicates that SDL (Schema Definition Language statements) shouldn't be generated for this class. You can set this property on other types as well to suppress SDL generation.`),cf()(),Aa(729,`p`),bT(730,`Here's how you could create a concrete subclass of `),Aa(731,`code`),bT(732,`BaseResolver`),cf(),bT(733,`:`),cf(),Aa(734,`app-copy-button`)(735,`pre`)(736,`code`,19),bT(737,`
@Resolver(() => Recipe)
export class RecipesResolver extends BaseResolver(Recipe) {
  constructor(private recipesService: RecipesService) {
    super();
  }
}
`),cf()()(),Aa(738,`p`),bT(739,`This construct would generate the following SDL:`),cf(),Aa(740,`pre`)(741,`code`,16),bT(742,`
type Query {
  findAllRecipe: [Recipe!]!
}
`),cf()(),Aa(743,`h4`,37)(744,`span`),bT(745,`Generics`),cf()(),Aa(746,`p`),bT(747,`We saw one use of generics above. Generics let you build reusable abstractions. For example, here's a cursor-based pagination implementation based on the `),Aa(748,`a`,38),bT(749,`GraphQL pagination guide`),cf(),bT(750,`:`),cf(),Aa(751,`app-copy-button`)(752,`pre`)(753,`code`,19),bT(754,`
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

interface IEdgeType<T> {
  cursor: string;
  node: T;
}

export interface IPaginatedType<T> {
  edges: IEdgeType<T>[];
  nodes: T[];
  totalCount: number;
  hasNextPage: boolean;
}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
  @ObjectType(\`\${classRef.name}Edge\`)
  abstract class EdgeType {
    @Field(() => String)
    cursor: string;

    @Field(() => classRef)
    node: T;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<T> {
    @Field(() => [EdgeType], { nullable: true })
    edges: EdgeType[];

    @Field(() => [classRef], { nullable: true })
    nodes: T[];

    @Field(() => Int)
    totalCount: number;

    @Field()
    hasNextPage: boolean;
  }
  return PaginatedType as Type<IPaginatedType<T>>;
}
`),cf()()(),Aa(755,`p`),bT(756,`With this base class defined, you can create specialized types that inherit its behavior. For example:`),cf(),Aa(757,`app-copy-button`)(758,`pre`)(759,`code`,19),bT(760,`
@ObjectType()
class PaginatedAuthor extends Paginated(Author) {}
`),cf()()(),Aa(761,`h4`,39)(762,`span`),bT(763,`Schema first`),cf()(),Aa(764,`p`),bT(765,`As mentioned in the `),Aa(766,`a`,40),bT(767,`Quick start`),cf(),bT(768,` chapter, in the schema first approach you start by manually defining schema types in SDL (see the `),Aa(769,`a`,41),bT(770,`GraphQL type language`),cf(),bT(771,`). Consider the following SDL type definitions.`),cf(),Aa(772,`blockquote`,20)(773,`strong`),bT(774,`Hint`),cf(),bT(775,` For convenience, this chapter keeps all of the SDL in one location (e.g., one `),Aa(776,`code`),bT(777,`.graphql`),cf(),bT(778,` file, as shown below). In practice, you may prefer a modular organization. For example, you can create individual SDL files with the type definitions for each domain entity, and keep them with the related services, resolver code, and Nest module class in a dedicated directory for that entity. Nest aggregates all the individual schema type definitions at run time.
`),cf(),Aa(779,`pre`)(780,`code`,16),bT(781,`
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int!
  title: String!
  votes: Int
}

type Query {
  author(id: Int!): Author
}
`),cf()(),Aa(782,`h4`,42)(783,`span`),bT(784,`Schema first resolver`),cf()(),Aa(785,`p`),bT(786,`The schema above exposes a single query: `),Aa(787,`code`),bT(788,`author(id: Int!): Author`),cf(),bT(789,`.`),cf(),Aa(790,`blockquote`,20)(791,`strong`),bT(792,`Hint`),cf(),bT(793,` Learn more about `),Aa(794,`a`,30),bT(795,`GraphQL queries`),cf(),bT(796,`.
`),cf(),Aa(797,`p`),bT(798,`Now create an `),Aa(799,`code`),bT(800,`AuthorsResolver`),cf(),bT(801,` class that resolves author queries:`),cf(),Aa(802,`app-copy-button`,17)(803,`span`,18),bT(804),LT(805,`extension`),Wa(806,`app-tabs`,null,6),cf(),Aa(808,`pre`)(809,`code`,19),bT(810,`
@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query()
  async author(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
`),cf()()(),Aa(811,`blockquote`,20)(812,`strong`),bT(813,`Hint`),cf(),bT(814,` All decorators (e.g., `),Aa(815,`code`),bT(816,`@Resolver`),cf(),bT(817,`, `),Aa(818,`code`),bT(819,`@ResolveField`),cf(),bT(820,`, `),Aa(821,`code`),bT(822,`@Args`),cf(),bT(823,`, etc.) are exported from the `),Aa(824,`code`),bT(825,`@nestjs/graphql`),cf(),bT(826,` package.
`),cf(),Aa(827,`blockquote`,27)(828,`strong`),bT(829,`Note`),cf(),bT(830,` The logic inside the `),Aa(831,`code`),bT(832,`AuthorsService`),cf(),bT(833,` and `),Aa(834,`code`),bT(835,`PostsService`),cf(),bT(836,` classes can be as simple or sophisticated as needed. The point of this example is to show how to construct resolvers and how they interact with other providers.
`),cf(),Aa(837,`p`),bT(838,`The `),Aa(839,`code`),bT(840,`@Resolver()`),cf(),bT(841,` decorator is required. It takes an optional string argument with the name of a type. This name is required whenever the class includes `),Aa(842,`code`),bT(843,`@ResolveField()`),cf(),bT(844,` decorators, to tell Nest which parent type the decorated methods are associated with (the `),Aa(845,`code`),bT(846,`Author`),cf(),bT(847,` type in this example). Alternatively, instead of applying `),Aa(848,`code`),bT(849,`@Resolver()`),cf(),bT(850,` to the class, you can apply it to each method:`),cf(),Aa(851,`app-copy-button`)(852,`pre`)(853,`code`,19),bT(854,`
@Resolver('Author')
@ResolveField()
async posts(@Parent() author) {
  const { id } = author;
  return this.postsService.findAll({ authorId: id });
}
`),cf()()(),Aa(855,`p`),bT(856,`In this case (`),Aa(857,`code`),bT(858,`@Resolver()`),cf(),bT(859,` at the method level), if a class has multiple `),Aa(860,`code`),bT(861,`@ResolveField()`),cf(),bT(862,` methods, you must add `),Aa(863,`code`),bT(864,`@Resolver()`),cf(),bT(865,` to each of them. This is not considered best practice, as it adds overhead.`),cf(),Aa(866,`blockquote`,20)(867,`strong`),bT(868,`Hint`),cf(),bT(869,` Any class name argument passed to `),Aa(870,`code`),bT(871,`@Resolver()`),cf(),Aa(872,`strong`),bT(873,`does not`),cf(),bT(874,` affect queries (`),Aa(875,`code`),bT(876,`@Query()`),cf(),bT(877,` decorator) or mutations (`),Aa(878,`code`),bT(879,`@Mutation()`),cf(),bT(880,` decorator).
`),cf(),Aa(881,`blockquote`,27)(882,`strong`),bT(883,`Warning`),cf(),bT(884,` Using the `),Aa(885,`code`),bT(886,`@Resolver`),cf(),bT(887,` decorator at the method level is not supported with the `),Aa(888,`strong`),bT(889,`code first`),cf(),bT(890,` approach.
`),cf(),Aa(891,`p`),bT(892,`In the examples above, the `),Aa(893,`code`),bT(894,`@Query()`),cf(),bT(895,` and `),Aa(896,`code`),bT(897,`@ResolveField()`),cf(),bT(898,` decorators are associated with GraphQL schema fields based on the method name. For example, consider the following construction from the example above:`),cf(),Aa(899,`app-copy-button`)(900,`pre`)(901,`code`,19),bT(902,`
@Query()
async author(@Args('id') id: number) {
  return this.authorsService.findOneById(id);
}
`),cf()()(),Aa(903,`p`),bT(904,`This generates the following entry for the author query in the schema (the query uses the same name as the method):`),cf(),Aa(905,`pre`)(906,`code`,16),bT(907,`
type Query {
  author(id: Int!): Author
}
`),cf()(),Aa(908,`p`),bT(909,`Conventionally, these names are decoupled, using names like `),Aa(910,`code`),bT(911,`getAuthor()`),cf(),bT(912,` or `),Aa(913,`code`),bT(914,`getPosts()`),cf(),bT(915,` for the resolver methods. To do this, pass the mapping name as an argument to the decorator, as shown below:`),cf(),Aa(916,`app-copy-button`,17)(917,`span`,18),bT(918),LT(919,`extension`),Wa(920,`app-tabs`,null,7),cf(),Aa(922,`pre`)(923,`code`,19),bT(924,`
@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query('author')
  async getAuthor(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField('posts')
  async getPosts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
`),cf()()(),Aa(925,`blockquote`,20)(926,`strong`),bT(927,`Hint`),cf(),bT(928,` The Nest CLI provides a generator (schematic) that generates `),Aa(929,`strong`),bT(930,`all the boilerplate code`),cf(),bT(931,` for you. See the `),Aa(932,`a`,28),bT(933,`CRUD generator`),cf(),bT(934,` recipe for details.
`),cf(),Aa(935,`h4`,43)(936,`span`),bT(937,`Generating types`),cf()(),Aa(938,`p`),bT(939,`If you use the schema first approach and have enabled typings generation (with `),Aa(940,`code`),bT(941,`outputAs: 'class'`),cf(),bT(942,`, as shown in the `),Aa(943,`a`,40),bT(944,`Quick start`),cf(),bT(945,` chapter), running the application generates the following file in the location you specified in the `),Aa(946,`code`),bT(947,`GraphQLModule.forRoot()`),cf(),bT(948,` method, e.g., `),Aa(949,`code`),bT(950,`src/graphql.ts`),cf(),bT(951,`:`),cf(),Aa(952,`app-copy-button`,17)(953,`span`,18),bT(954),LT(955,`extension`),Wa(956,`app-tabs`,null,8),cf(),Aa(958,`pre`)(959,`code`,19),bT(960,`
export class Author {
  id: number;
  firstName?: string;
  lastName?: string;
  posts?: Post[];
}
export class Post {
  id: number;
  title: string;
  votes?: number;
}

export abstract class IQuery {
  abstract author(id: number): Author | Promise<Author>;
}
`),cf()()(),Aa(961,`p`),bT(962,`Generating classes (instead of the default interfaces) lets you combine declarative validation `),Aa(963,`strong`),bT(964,`decorators`),cf(),bT(965,` with the schema first approach (see `),Aa(966,`a`,35),bT(967,`Validation`),cf(),bT(968,`). For example, you could add `),Aa(969,`code`),bT(970,`class-validator`),cf(),bT(971,` decorators to a generated `),Aa(972,`code`),bT(973,`CreatePostInput`),cf(),bT(974,` class, as shown below, to enforce minimum and maximum string lengths on the `),Aa(975,`code`),bT(976,`title`),cf(),bT(977,` field:`),cf(),Aa(978,`app-copy-button`)(979,`pre`)(980,`code`,19),bT(981,`
import { MinLength, MaxLength } from 'class-validator';

export class CreatePostInput {
  @MinLength(3)
  @MaxLength(50)
  title: string;
}
`),cf()()(),Aa(982,`blockquote`,27)(983,`strong`),bT(984,`Notice`),cf(),bT(985,` To enable automatic validation of your inputs (and parameters), use `),Aa(986,`code`),bT(987,`ValidationPipe`),cf(),bT(988,`. Learn more in the `),Aa(989,`a`,35),bT(990,`Validation`),cf(),bT(991,` and `),Aa(992,`a`,44),bT(993,`Pipes`),cf(),bT(994,` chapters.
`),cf(),Aa(995,`p`),bT(996,`However, decorators added directly to the generated file are `),Aa(997,`strong`),bT(998,`overwritten`),cf(),bT(999,` each time the file is regenerated. Instead, create a separate file and extend the generated class.`),cf(),Aa(1e3,`app-copy-button`)(1001,`pre`)(1002,`code`,19),bT(1003,`
import { MinLength, MaxLength } from 'class-validator';
import { Post } from '../../graphql.js';

export class CreatePostInput extends Post {
  @MinLength(3)
  @MaxLength(50)
  title: string;
}
`),cf()()(),Aa(1004,`h4`,45)(1005,`span`),bT(1006,`GraphQL argument decorators`),cf()(),Aa(1007,`p`),bT(1008,`You can access the standard GraphQL resolver arguments with dedicated decorators. The table below maps the Nest decorators to the plain Apollo parameters they represent.`),cf(),Aa(1009,`table`)(1010,`tbody`)(1011,`tr`)(1012,`td`)(1013,`code`),bT(1014,`@Root()`),cf(),bT(1015,` and `),Aa(1016,`code`),bT(1017,`@Parent()`),cf()(),Aa(1018,`td`)(1019,`code`),bT(1020,`root`),cf(),bT(1021,`/`),Aa(1022,`code`),bT(1023,`parent`),cf()()(),Aa(1024,`tr`)(1025,`td`)(1026,`code`),bT(1027,`@Context(param?: string)`),cf()(),Aa(1028,`td`)(1029,`code`),bT(1030,`context`),cf(),bT(1031,` / `),Aa(1032,`code`),bT(1033,`context[param]`),cf()()(),Aa(1034,`tr`)(1035,`td`)(1036,`code`),bT(1037,`@Info(param?: string)`),cf()(),Aa(1038,`td`)(1039,`code`),bT(1040,`info`),cf(),bT(1041,` / `),Aa(1042,`code`),bT(1043,`info[param]`),cf()()(),Aa(1044,`tr`)(1045,`td`)(1046,`code`),bT(1047,`@Args(param?: string)`),cf()(),Aa(1048,`td`)(1049,`code`),bT(1050,`args`),cf(),bT(1051,` / `),Aa(1052,`code`),bT(1053,`args[param]`),cf()()()()(),Aa(1054,`p`),bT(1055,`These arguments have the following meanings:`),cf(),Aa(1056,`ul`)(1057,`li`)(1058,`code`),bT(1059,`root`),cf(),bT(1060,`: an object that contains the result returned from the resolver on the parent field, or, in the case of a top-level `),Aa(1061,`code`),bT(1062,`Query`),cf(),bT(1063,` field, the `),Aa(1064,`code`),bT(1065,`rootValue`),cf(),bT(1066,` passed from the server configuration.`),cf(),Aa(1067,`li`)(1068,`code`),bT(1069,`context`),cf(),bT(1070,`: an object shared by all resolvers in a particular query; typically used to contain per-request state.`),cf(),Aa(1071,`li`)(1072,`code`),bT(1073,`info`),cf(),bT(1074,`: an object that contains information about the execution state of the query.`),cf(),Aa(1075,`li`)(1076,`code`),bT(1077,`args`),cf(),bT(1078,`: an object with the arguments passed into the field in the query.`),cf()(),Aa(1079,`p`),Wa(1080,`app-banner-observe`),cf(),Aa(1081,`h4`,46)(1082,`span`),bT(1083,`Module`),cf()(),Aa(1084,`p`),bT(1085,`With the steps above, we have declaratively specified all the information the `),Aa(1086,`code`),bT(1087,`GraphQLModule`),cf(),bT(1088,` needs to generate a resolver map. The `),Aa(1089,`code`),bT(1090,`GraphQLModule`),cf(),bT(1091,` uses reflection to introspect the metadata provided via the decorators, and transforms the classes into the correct resolver map automatically.`),cf(),Aa(1092,`p`),bT(1093,`The only other thing you need to do is `),Aa(1094,`strong`),bT(1095,`provide`),cf(),bT(1096,` the resolver class (`),Aa(1097,`code`),bT(1098,`AuthorsResolver`),cf(),bT(1099,`), i.e., list it as a provider in a module, and import that module (`),Aa(1100,`code`),bT(1101,`AuthorsModule`),cf(),bT(1102,`) somewhere so Nest can use it.`),cf(),Aa(1103,`p`),bT(1104,`For example, you can do this in an `),Aa(1105,`code`),bT(1106,`AuthorsModule`),cf(),bT(1107,`, which can also provide other services needed in this context. Be sure to import `),Aa(1108,`code`),bT(1109,`AuthorsModule`),cf(),bT(1110,` somewhere (e.g., in the root module, or in another module imported by the root module).`),cf(),Aa(1111,`app-copy-button`,17)(1112,`span`,18),bT(1113),LT(1114,`extension`),Wa(1115,`app-tabs`,null,9),cf(),Aa(1117,`pre`)(1118,`code`,19),bT(1119,`
@Module({
  imports: [PostsModule],
  providers: [AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}
`),cf()()(),Aa(1120,`blockquote`,20)(1121,`strong`),bT(1122,`Hint`),cf(),bT(1123,` It helps to organize your code by `),Aa(1124,`strong`),bT(1125,`domain model`),cf(),bT(1126,` (similar to the way you would organize entry points in a REST API). In this approach, keep your models (`),Aa(1127,`code`),bT(1128,`ObjectType`),cf(),bT(1129,` classes), resolvers, and services together within a Nest module representing the domain model, in a single folder per module. When you do this and use the `),Aa(1130,`a`,47),bT(1131,`Nest CLI`),cf(),bT(1132,` to generate each element, the CLI wires these parts together for you (placing files in the appropriate folders, adding entries to the `),Aa(1133,`code`),bT(1134,`providers`),cf(),bT(1135,` and `),Aa(1136,`code`),bT(1137,`imports`),cf(),bT(1138,` arrays, etc.).
`),cf()(),Aa(1139,`a`,48),Wa(1140,`i`,49),Aa(1141,`span`),bT(1142,`Edit on GitHub`),cf()()()),o&2){let q=tT(53),k=tT(239),$=tT(267),K=tT(419),Z=tT(612),X=tT(807),ee=tT(921),te=tT(957),ne=tT(1116);zC(50),hf(` `,jT(51,15,`authors/models/author.model`,q.isJsActive),`
`),zC(127),Ky(`@ObjectType(`,`{`,` description: 'Author model' `,`}`,`)`),zC(6),Ky(`@ObjectType(`,`{`,` registerIn: () => AuthorsModule `,`}`,`)`),zC(53),hf(` `,jT(237,18,`posts/models/post.model`,k.isJsActive),`
`),zC(28),hf(` `,jT(265,21,`authors/authors.resolver`,$.isJsActive),`
`),zC(152),hf(` `,jT(417,24,`authors/authors.resolver`,K.isJsActive),`
`),zC(24),Ky(``,`{`,`name: 'author'`,`}`),zC(169),hf(` `,jT(610,27,`authors/dto/get-author.args`,Z.isJsActive),`
`),zC(195),hf(` `,jT(805,30,`authors/authors.resolver`,X.isJsActive),`
`),zC(114),hf(` `,jT(919,33,`authors/authors.resolver`,ee.isJsActive),`
`),zC(36),hf(` `,jT(955,36,`graphql`,te.isJsActive),`
`),zC(159),hf(` `,jT(1114,39,`authors/authors.module`,ne.isJsActive),`
`)}},dependencies:[Lt,ln$1,u,Jc,l,g],encapsulation:2})}return i})();var W=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-scalars`]],features:[xy],decls:365,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`scalars`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/schema/#scalar-types`],[`appAnchor`,``,`id`,`code-first`],[1,`language-typescript`],[`appAnchor`,``,`id`,`override-a-default-scalar`],[`appAnchor`,``,`id`,`import-a-custom-scalar`],[1,`language-bash`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.npmjs.com/package/graphql-scalars`],[`appAnchor`,``,`id`,`create-a-custom-scalar`],[`appAnchor`,``,`id`,`schema-first`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/graphql-tools/scalars.html`],[1,`language-graphql`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/Microsoft/TypeScript/issues/12525#issuecomment-263166239`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/scalars.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Scalars`),cf(),Aa(5,`p`),bT(6,`A GraphQL object type has a name and fields, but at some point those fields have to resolve to some concrete data. Scalar types provide that data: they represent the leaves of the query (see `),Aa(7,`a`,4),bT(8,`scalar types`),cf(),bT(9,` in the GraphQL documentation). GraphQL includes the following built-in scalar types: `),Aa(10,`code`),bT(11,`Int`),cf(),bT(12,`, `),Aa(13,`code`),bT(14,`Float`),cf(),bT(15,`, `),Aa(16,`code`),bT(17,`String`),cf(),bT(18,`, `),Aa(19,`code`),bT(20,`Boolean`),cf(),bT(21,`, and `),Aa(22,`code`),bT(23,`ID`),cf(),bT(24,`. In addition to these, you may need to support custom atomic data types (e.g., `),Aa(25,`code`),bT(26,`Date`),cf(),bT(27,`).`),cf(),Aa(28,`h4`,5)(29,`span`),bT(30,`Code first`),cf()(),Aa(31,`p`),bT(32,`The code first approach ships with five scalars, three of which are aliases for the existing GraphQL types:`),cf(),Aa(33,`ul`)(34,`li`)(35,`code`),bT(36,`ID`),cf(),bT(37,` (alias for `),Aa(38,`code`),bT(39,`GraphQLID`),cf(),bT(40,`): a unique identifier, often used to refetch an object or as the key for a cache`),cf(),Aa(41,`li`)(42,`code`),bT(43,`Int`),cf(),bT(44,` (alias for `),Aa(45,`code`),bT(46,`GraphQLInt`),cf(),bT(47,`): a signed 32-bit integer`),cf(),Aa(48,`li`)(49,`code`),bT(50,`Float`),cf(),bT(51,` (alias for `),Aa(52,`code`),bT(53,`GraphQLFloat`),cf(),bT(54,`): a signed double-precision floating-point value`),cf(),Aa(55,`li`)(56,`code`),bT(57,`GraphQLISODateTime`),cf(),bT(58,`: a date-time string in UTC (used by default to represent the `),Aa(59,`code`),bT(60,`Date`),cf(),bT(61,` type)`),cf(),Aa(62,`li`)(63,`code`),bT(64,`GraphQLTimestamp`),cf(),bT(65,`: a signed integer that represents a date and time as the number of milliseconds since the start of the Unix epoch`),cf()(),Aa(66,`p`),bT(67,`By default, `),Aa(68,`code`),bT(69,`GraphQLISODateTime`),cf(),bT(70,` (e.g., `),Aa(71,`code`),bT(72,`2019-12-03T09:54:33Z`),cf(),bT(73,`) represents the `),Aa(74,`code`),bT(75,`Date`),cf(),bT(76,` type. To use `),Aa(77,`code`),bT(78,`GraphQLTimestamp`),cf(),bT(79,` instead, set the `),Aa(80,`code`),bT(81,`dateScalarMode`),cf(),bT(82,` property of the `),Aa(83,`code`),bT(84,`buildSchemaOptions`),cf(),bT(85,` object to `),Aa(86,`code`),bT(87,`'timestamp'`),cf(),bT(88,`:`),cf(),Aa(89,`app-copy-button`)(90,`pre`)(91,`code`,6),bT(92,`
GraphQLModule.forRoot({
  buildSchemaOptions: {
    dateScalarMode: 'timestamp',
  }
}),
`),cf()()(),Aa(93,`p`),bT(94,`Likewise, `),Aa(95,`code`),bT(96,`GraphQLFloat`),cf(),bT(97,` represents the `),Aa(98,`code`),bT(99,`number`),cf(),bT(100,` type by default. To use `),Aa(101,`code`),bT(102,`GraphQLInt`),cf(),bT(103,` instead, set the `),Aa(104,`code`),bT(105,`numberScalarMode`),cf(),bT(106,` property of the `),Aa(107,`code`),bT(108,`buildSchemaOptions`),cf(),bT(109,` object to `),Aa(110,`code`),bT(111,`'integer'`),cf(),bT(112,`:`),cf(),Aa(113,`app-copy-button`)(114,`pre`)(115,`code`,6),bT(116,`
GraphQLModule.forRoot({
  buildSchemaOptions: {
    numberScalarMode: 'integer',
  }
}),
`),cf()()(),Aa(117,`p`),bT(118,`You can also create custom scalars.`),cf(),Aa(119,`h4`,7)(120,`span`),bT(121,`Override a default scalar`),cf()(),Aa(122,`p`),bT(123,`To create a custom implementation of the `),Aa(124,`code`),bT(125,`Date`),cf(),bT(126,` scalar, create a new class:`),cf(),Aa(127,`app-copy-button`)(128,`pre`)(129,`code`,6),bT(130,`
import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  parseValue(value: unknown): Date {
    return new Date(value as number); // value from the client
  }

  serialize(value: unknown): number {
    return (value as Date).getTime(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date | null {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  }
}
`),cf()()(),Aa(131,`p`),bT(132,`With this in place, register `),Aa(133,`code`),bT(134,`DateScalar`),cf(),bT(135,` as a provider:`),cf(),Aa(136,`app-copy-button`)(137,`pre`)(138,`code`,6),bT(139,`
@Module({
  providers: [DateScalar],
})
export class CommonModule {}
`),cf()()(),Aa(140,`p`),bT(141,`Now you can use the `),Aa(142,`code`),bT(143,`Date`),cf(),bT(144,` type in your classes:`),cf(),Aa(145,`app-copy-button`)(146,`pre`)(147,`code`,6),bT(148,`
@Field()
creationDate: Date;
`),cf()()(),Aa(149,`h4`,8)(150,`span`),bT(151,`Import a custom scalar`),cf()(),Aa(152,`p`),bT(153,`To use a custom scalar, import it and register it as a resolver. For demonstration purposes, we'll use the `),Aa(154,`code`),bT(155,`graphql-type-json`),cf(),bT(156,` package, which defines a `),Aa(157,`code`),bT(158,`JSON`),cf(),bT(159,` GraphQL scalar type.`),cf(),Aa(160,`p`),bT(161,`Start by installing the package:`),cf(),Aa(162,`pre`)(163,`code`,9),bT(164,`
$ npm i --save graphql-type-json
`),cf()(),Aa(165,`p`),bT(166,`Once the package is installed, pass a custom resolver to the `),Aa(167,`code`),bT(168,`forRoot()`),cf(),bT(169,` method:`),cf(),Aa(170,`app-copy-button`)(171,`pre`)(172,`code`,6),bT(173,`
import GraphQLJSON from 'graphql-type-json';

@Module({
  imports: [
    GraphQLModule.forRoot({
      resolvers: { JSON: GraphQLJSON },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(174,`p`),bT(175,`Now you can use the `),Aa(176,`code`),bT(177,`JSON`),cf(),bT(178,` type in your classes:`),cf(),Aa(179,`app-copy-button`)(180,`pre`)(181,`code`,6),bT(182,`
@Field(() => GraphQLJSON)
info: JSON;
`),cf()()(),Aa(183,`p`),bT(184,`For a suite of ready-made scalars, see the `),Aa(185,`a`,10),bT(186,`graphql-scalars`),cf(),bT(187,` package.`),cf(),Aa(188,`h4`,11)(189,`span`),bT(190,`Create a custom scalar`),cf()(),Aa(191,`p`),bT(192,`To define a custom scalar, create a new `),Aa(193,`code`),bT(194,`GraphQLScalarType`),cf(),bT(195,` instance. The following example creates a custom `),Aa(196,`code`),bT(197,`UUID`),cf(),bT(198,` scalar:`),cf(),Aa(199,`app-copy-button`)(200,`pre`)(201,`code`,6),bT(202,`
import { GraphQLScalarType, Kind } from 'graphql';

const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function validate(uuid: unknown): string | never {
  if (typeof uuid !== 'string' || !regex.test(uuid)) {
    throw new Error('invalid uuid');
  }
  return uuid;
}

export const CustomUuidScalar = new GraphQLScalarType({
  name: 'UUID',
  description: 'A simple UUID parser',
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
  parseLiteral: (ast) =>
    validate(ast.kind === Kind.STRING ? ast.value : undefined),
});
`),cf()()(),Aa(203,`p`),bT(204,`Then pass a custom resolver to the `),Aa(205,`code`),bT(206,`forRoot()`),cf(),bT(207,` method:`),cf(),Aa(208,`app-copy-button`)(209,`pre`)(210,`code`,6),bT(211,`
@Module({
  imports: [
    GraphQLModule.forRoot({
      resolvers: { UUID: CustomUuidScalar },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(212,`p`),bT(213,`Now you can use the `),Aa(214,`code`),bT(215,`UUID`),cf(),bT(216,` type in your classes:`),cf(),Aa(217,`app-copy-button`)(218,`pre`)(219,`code`,6),bT(220,`
@Field(() => CustomUuidScalar)
uuid: string;
`),cf()()(),Aa(221,`h4`,12)(222,`span`),bT(223,`Schema first`),cf()(),Aa(224,`p`),bT(225,`To define a custom scalar (see `),Aa(226,`a`,13),bT(227,`custom scalars`),cf(),bT(228,` in the GraphQL Tools documentation), create a type definition and a dedicated resolver. As in the official documentation, we'll use the `),Aa(229,`code`),bT(230,`graphql-type-json`),cf(),bT(231,` package, which defines a `),Aa(232,`code`),bT(233,`JSON`),cf(),bT(234,` GraphQL scalar type.`),cf(),Aa(235,`p`),bT(236,`Start by installing the package:`),cf(),Aa(237,`pre`)(238,`code`,9),bT(239,`
$ npm i --save graphql-type-json
`),cf()(),Aa(240,`p`),bT(241,`Once the package is installed, pass a custom resolver to the `),Aa(242,`code`),bT(243,`forRoot()`),cf(),bT(244,` method:`),cf(),Aa(245,`app-copy-button`)(246,`pre`)(247,`code`,6),bT(248,`
import GraphQLJSON from 'graphql-type-json';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolvers: { JSON: GraphQLJSON },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(249,`p`),bT(250,`Now we can use the `),Aa(251,`code`),bT(252,`JSON`),cf(),bT(253,` scalar in our type definitions:`),cf(),Aa(254,`pre`)(255,`code`,14),bT(256,`
scalar JSON

type Foo {
  field: JSON
}
`),cf()(),Aa(257,`p`),bT(258,`Another way to define a scalar type is to create a class. Suppose you want to add a `),Aa(259,`code`),bT(260,`Date`),cf(),bT(261,` type to your schema:`),cf(),Aa(262,`app-copy-button`)(263,`pre`)(264,`code`,6),bT(265,`
import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date')
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  parseValue(value: unknown): Date {
    return new Date(value as number); // value from the client
  }

  serialize(value: unknown): number {
    return (value as Date).getTime(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date | null {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  }
}
`),cf()()(),Aa(266,`p`),bT(267,`With this in place, register `),Aa(268,`code`),bT(269,`DateScalar`),cf(),bT(270,` as a provider:`),cf(),Aa(271,`app-copy-button`)(272,`pre`)(273,`code`,6),bT(274,`
@Module({
  providers: [DateScalar],
})
export class CommonModule {}
`),cf()()(),Aa(275,`p`),bT(276,`Now you can use the `),Aa(277,`code`),bT(278,`Date`),cf(),bT(279,` scalar in your type definitions:`),cf(),Aa(280,`pre`)(281,`code`,14),bT(282,`
scalar Date
`),cf()(),Aa(283,`p`),bT(284,`By default, the generated TypeScript definition for every custom scalar is `),Aa(285,`code`),bT(286,`any`),cf(),bT(287,`, which isn't type-safe. You can configure how Nest generates typings for your custom scalars when you specify how to generate types:`),cf(),Aa(288,`app-copy-button`)(289,`pre`)(290,`code`,6),bT(291,`
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'node:path';

const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  defaultScalarType: 'unknown',
  customScalarTypeMapping: {
    DateTime: 'Date',
    BigNumber: '_BigNumber',
  },
  additionalHeader: "import _BigNumber from 'bignumber.js'",
});
`),cf()()(),Aa(292,`blockquote`,15)(293,`strong`),bT(294,`Hint`),cf(),bT(295,` Alternatively, you can use a type reference, for example, `),Aa(296,`code`),bT(297,`DateTime: Date`),cf(),bT(298,`. In this case, `),Aa(299,`code`),bT(300,`GraphQLDefinitionsFactory`),cf(),bT(301,` uses the `),Aa(302,`code`),bT(303,`name`),cf(),bT(304,` property of the specified type (`),Aa(305,`code`),bT(306,`Date.name`),cf(),bT(307,`) to generate the TypeScript definitions. For custom (non-built-in) types, you must also add an import statement.
`),cf(),Aa(308,`p`),bT(309,`Now, given the following GraphQL custom scalar types:`),cf(),Aa(310,`pre`)(311,`code`,14),bT(312,`
scalar DateTime
scalar BigNumber
scalar Payload
`),cf()(),Aa(313,`p`),bT(314,`Nest generates the following TypeScript definitions in `),Aa(315,`code`),bT(316,`src/graphql.ts`),cf(),bT(317,`:`),cf(),Aa(318,`app-copy-button`)(319,`pre`)(320,`code`,6),bT(321,`
import _BigNumber from 'bignumber.js';

export type DateTime = Date;
export type BigNumber = _BigNumber;
export type Payload = unknown;
`),cf()()(),Aa(322,`p`),bT(323,`Here, the `),Aa(324,`code`),bT(325,`customScalarTypeMapping`),cf(),bT(326,` property maps each custom scalar to the TypeScript type to declare for it. The `),Aa(327,`code`),bT(328,`additionalHeader`),cf(),bT(329,` property adds any imports these type definitions require. Lastly, setting `),Aa(330,`code`),bT(331,`defaultScalarType`),cf(),bT(332,` to `),Aa(333,`code`),bT(334,`'unknown'`),cf(),bT(335,` aliases any custom scalar not listed in `),Aa(336,`code`),bT(337,`customScalarTypeMapping`),cf(),bT(338,` to `),Aa(339,`code`),bT(340,`unknown`),cf(),bT(341,` instead of `),Aa(342,`code`),bT(343,`any`),cf(),bT(344,`, which `),Aa(345,`a`,16),bT(346,`TypeScript recommends`),cf(),bT(347,` since version 3.0 for added type safety.`),cf(),Aa(348,`blockquote`,15)(349,`strong`),bT(350,`Hint`),cf(),bT(351,` The example imports `),Aa(352,`code`),bT(353,`_BigNumber`),cf(),bT(354,` from `),Aa(355,`code`),bT(356,`bignumber.js`),cf(),bT(357,` under an alias to avoid `),Aa(358,`a`,17),bT(359,`circular type references`),cf(),bT(360,`.
`),cf()(),Aa(361,`a`,18),Wa(362,`i`,19),Aa(363,`span`),bT(364,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln$1],encapsulation:2})}return i})();var Y=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-schema-generator`]],features:[xy],decls:148,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`generating-sdl`],[1,`warning`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`usage`],[`appAnchor`,``,`id`,`federation`],[`routerLink`,`/graphql/federation`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/schema-generator.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Generating SDL`),cf(),Aa(5,`blockquote`,4)(6,`strong`),bT(7,`Warning`),cf(),bT(8,` This chapter applies only to the code first approach.
`),cf(),Aa(9,`p`),bT(10,`To generate a GraphQL SDL schema manually (i.e., without running an application, connecting to the database, hooking up resolvers, etc.), use the `),Aa(11,`code`),bT(12,`GraphQLSchemaBuilderModule`),cf(),bT(13,`:`),cf(),Aa(14,`app-copy-button`)(15,`pre`)(16,`code`,5),bT(17,`
async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([RecipesResolver]);
  console.log(printSchema(schema));
}
`),cf()()(),Aa(18,`blockquote`,6)(19,`strong`),bT(20,`Hint`),cf(),bT(21,` The `),Aa(22,`code`),bT(23,`GraphQLSchemaBuilderModule`),cf(),bT(24,` and `),Aa(25,`code`),bT(26,`GraphQLSchemaFactory`),cf(),bT(27,` are imported from the `),Aa(28,`code`),bT(29,`@nestjs/graphql`),cf(),bT(30,` package. The `),Aa(31,`code`),bT(32,`printSchema`),cf(),bT(33,` function is imported from the `),Aa(34,`code`),bT(35,`graphql`),cf(),bT(36,` package.
`),cf(),Aa(37,`h4`,7)(38,`span`),bT(39,`Usage`),cf()(),Aa(40,`p`),bT(41,`The `),Aa(42,`code`),bT(43,`gqlSchemaFactory.create()`),cf(),bT(44,` method takes an array of resolver class references. For example:`),cf(),Aa(45,`app-copy-button`)(46,`pre`)(47,`code`,5),bT(48,`
const schema = await gqlSchemaFactory.create([
  RecipesResolver,
  AuthorsResolver,
  PostsResolver,
]);
`),cf()()(),Aa(49,`p`),bT(50,`It also takes an optional second argument with an array of scalar classes:`),cf(),Aa(51,`app-copy-button`)(52,`pre`)(53,`code`,5),bT(54,`
const schema = await gqlSchemaFactory.create(
  [RecipesResolver, AuthorsResolver, PostsResolver],
  [DurationScalar, DateScalar],
);
`),cf()()(),Aa(55,`p`),bT(56,`Lastly, you can pass an options object (the same `),Aa(57,`code`),bT(58,`BuildSchemaOptions`),cf(),bT(59,` accepted by the `),Aa(60,`code`),bT(61,`buildSchemaOptions`),cf(),bT(62,` property of the `),Aa(63,`code`),bT(64,`GraphQLModule`),cf(),bT(65,` configuration):`),cf(),Aa(66,`app-copy-button`)(67,`pre`)(68,`code`,5),bT(69,`
const schema = await gqlSchemaFactory.create([RecipesResolver], {
  skipCheck: true,
  orphanedTypes: [],
});
`),cf()()(),Aa(70,`ul`)(71,`li`)(72,`code`),bT(73,`skipCheck`),cf(),bT(74,`: skip schema validation; boolean, defaults to `),Aa(75,`code`),bT(76,`false`),cf()(),Aa(77,`li`)(78,`code`),bT(79,`orphanedTypes`),cf(),bT(80,`: an array of classes to generate even though they aren't explicitly referenced (i.e., aren't part of the object graph). Normally, a class that is declared but not referenced anywhere in the graph is omitted.`),cf()(),Aa(81,`h4`,8)(82,`span`),bT(83,`Federation`),cf()(),Aa(84,`p`)(85,`code`),bT(86,`GraphQLSchemaFactory`),cf(),bT(87,` builds a plain GraphQL schema: it knows nothing about Apollo Federation. To get the SDL of a code first `),Aa(88,`a`,9),bT(89,`federated`),cf(),bT(90,` subgraph (for example, to pass it to `),Aa(91,`code`),bT(92,`rover subgraph check`),cf(),bT(93,` or `),Aa(94,`code`),bT(95,`rover supergraph compose`),cf(),bT(96,`), print it with `),Aa(97,`code`),bT(98,`printSubgraphSchema`),cf(),bT(99,` from `),Aa(100,`code`),bT(101,`@apollo/subgraph`),cf(),bT(102,` instead of `),Aa(103,`code`),bT(104,`printSchema`),cf(),bT(105,`, so that directives such as `),Aa(106,`code`),bT(107,`@key`),cf(),bT(108,`, `),Aa(109,`code`),bT(110,`@shareable`),cf(),bT(111,` or `),Aa(112,`code`),bT(113,`@external`),cf(),bT(114,` are kept:`),cf(),Aa(115,`app-copy-button`)(116,`pre`)(117,`code`,5),bT(118,`
import { printSubgraphSchema } from '@apollo/subgraph';

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([UsersResolver], {
    orphanedTypes: [User],
  });
  console.log(printSubgraphSchema(schema));
}
`),cf()()(),Aa(119,`p`),bT(120,`For Federation 2, the printed SDL must also link the federation specification, or it is treated as a Federation 1 subgraph. Prepend the `),Aa(121,`code`),bT(122,`@link`),cf(),bT(123,` yourself, importing every federation directive your types use:`),cf(),Aa(124,`app-copy-button`)(125,`pre`)(126,`code`,5),bT(127,`
const sdl = \`extend schema @link(url: "https://specs.apollo.dev/federation/v2.14", import: ["@key", "@shareable", "@external"])

\${printSubgraphSchema(schema)}\`;
`),cf()()(),Aa(128,`blockquote`,6)(129,`strong`),bT(130,`Hint`),cf(),bT(131,` Entity types that are only referenced through `),Aa(132,`code`),bT(133,`_entities`),cf(),bT(134,` (for example, `),Aa(135,`code`),bT(136,`@extends`),cf(),bT(137,` stubs resolved with `),Aa(138,`code`),bT(139,`@ResolveReference()`),cf(),bT(140,`) aren't reachable from the root types, so pass them in `),Aa(141,`code`),bT(142,`orphanedTypes`),cf(),bT(143,`. Otherwise, the schema is generated without them.
`),cf()(),Aa(144,`a`,10),Wa(145,`i`,11),Aa(146,`span`),bT(147,`Edit on GitHub`),cf()()())},dependencies:[ln$1,Lt],encapsulation:2})}return i})();var J=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-sharing-models`]],features:[xy],decls:53,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`sharing-models`],[1,`warning`],[`appAnchor`,``,`id`,`using-the-model-shim`],[1,`language-typescript`],[1,`info`],[`routerLink`,`/data/typeorm`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/typeorm/typeorm/blob/master/extra/typeorm-model-shim.js`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/sharing-models.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Sharing models`),cf(),Aa(5,`blockquote`,4)(6,`strong`),bT(7,`Warning`),cf(),bT(8,` This chapter applies only to the code first approach.
`),cf(),Aa(9,`p`),bT(10,`One of the biggest advantages of using TypeScript for the backend of your project is the ability to reuse the same models in a TypeScript-based frontend application through a common TypeScript package.`),cf(),Aa(11,`p`),bT(12,`However, models created with the code first approach are heavily annotated with GraphQL-related decorators. Those decorators are irrelevant in the frontend and hurt its performance.`),cf(),Aa(13,`h4`,5)(14,`span`),bT(15,`Using the model shim`),cf()(),Aa(16,`p`),bT(17,`To solve this issue, Nest provides a "shim" that replaces the original decorators with inert code. The `),Aa(18,`code`),bT(19,`@nestjs/graphql`),cf(),bT(20,` package exposes the shim through the `),Aa(21,`code`),bT(22,`browser`),cf(),bT(23,` export condition, so bundlers that resolve that condition for browser builds (e.g., webpack with a `),Aa(24,`code`),bT(25,`web`),cf(),bT(26,` target) pick it up automatically.`),cf(),Aa(27,`p`),bT(28,`If your bundler doesn't resolve the `),Aa(29,`code`),bT(30,`browser`),cf(),bT(31,` condition, configure an alias between the `),Aa(32,`code`),bT(33,`@nestjs/graphql`),cf(),bT(34,` package and the shim. For example, with webpack:`),cf(),Aa(35,`app-copy-button`)(36,`pre`)(37,`code`,6),bT(38,`
resolve: { // see: https://webpack.js.org/configuration/resolve/
  alias: {
      "@nestjs/graphql": path.resolve(__dirname, "../node_modules/@nestjs/graphql/dist/extra/graphql-model-shim")
  }
}
`),cf()()(),Aa(39,`blockquote`,7)(40,`strong`),bT(41,`Hint`),cf(),bT(42,` The `),Aa(43,`a`,8),bT(44,`TypeORM`),cf(),bT(45,` package provides a similar `),Aa(46,`a`,9),bT(47,`model shim`),cf(),bT(48,`.
`),cf()(),Aa(49,`a`,10),Wa(50,`i`,11),Aa(51,`span`),bT(52,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln$1,Jc],encapsulation:2})}return i})();var z=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-subscriptions`]],features:[xy],decls:729,vars:16,consts:[[`contentReference`,``],[`app0c752eef3a8eae0d2272e3c9476af781cc3531d0`,``],[`app465b84f4f393ed76b2d89be3bb145cece5d151f0`,``],[1,`content`],[1,`content-inner`],[`id`,`subscriptions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/react/data/subscriptions`],[`appAnchor`,``,`id`,`enable-subscriptions-with-apollo-driver`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/enisdenjo/graphql-ws`],[`href`,`/graphql/subscriptions#authentication-over-websockets`],[1,`language-bash`],[1,`language-typescript`],[1,`warning`],[`appAnchor`,``,`id`,`code-first`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/graphql-subscriptions/setup.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/apollographql/graphql-subscriptions#getting-started-with-your-first-subscription`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/apollographql/graphql-subscriptions#pubsub-implementations`],[1,`language-graphql`],[`appAnchor`,``,`id`,`publishing`],[1,`with-heading`],[1,`filename`],[`appAnchor`,``,`id`,`filtering-subscriptions`],[`appAnchor`,``,`id`,`mutating-subscription-payloads`],[`appAnchor`,``,`id`,`schema-first`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/blob/master/sample/12-graphql-schema-first`],[`appAnchor`,``,`id`,`pubsub`],[`routerLink`,`/fundamentals/custom-providers`],[`appAnchor`,``,`id`,`customize-subscriptions-server`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/websockets/ws`],[`appAnchor`,``,`id`,`authentication-over-websockets`],[`appAnchor`,``,`id`,`enable-subscriptions-with-mercurius-driver`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mercurius-js/mercurius/blob/master/docs/api/options.md#plugin-options`],[`appAnchor`,``,`id`,`code-first-1`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mercurius-js/mercurius/blob/master/docs/subscriptions.md#subscriptions-with-custom-pubsub`],[`appAnchor`,``,`id`,`publishing-1`],[`appAnchor`,``,`id`,`filtering-subscriptions-1`],[`appAnchor`,``,`id`,`schema-first-1`],[`appAnchor`,``,`id`,`pubsub-1`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mcollina/mqemitter`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mercurius-js/mercurius/blob/master/docs/subscriptions.md`],[`appAnchor`,``,`id`,`authentication-over-websockets-1`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/subscriptions.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){if(o&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`Subscriptions`),cf(),Aa(5,`p`),bT(6,`In addition to fetching data with queries and modifying data with mutations, the GraphQL spec supports a third operation type, called `),Aa(7,`code`),bT(8,`subscription`),cf(),bT(9,`. GraphQL subscriptions push data from the server to clients that choose to listen to real-time messages. Like queries, subscriptions specify a set of fields to be delivered to the client. Instead of immediately returning a single result, however, they open a channel, and the server sends a result to the client every time a particular event occurs.`),cf(),Aa(10,`p`),bT(11,`A common use case for subscriptions is notifying the client about particular events, such as the creation of a new object or updated fields (see `),Aa(12,`a`,6),bT(13,`Subscriptions`),cf(),bT(14,` in the Apollo documentation).`),cf(),Aa(15,`h4`,7)(16,`span`),bT(17,`Enable subscriptions with Apollo driver`),cf()(),Aa(18,`p`),bT(19,`Subscriptions are transported over WebSockets by the `),Aa(20,`a`,8),bT(21,`graphql-ws`),cf(),bT(22,` package. `),Aa(23,`code`),bT(24,`@nestjs/graphql`),cf(),bT(25,` already depends on it, but install it in your project as well if you import from it directly (e.g., the `),Aa(26,`code`),bT(27,`Context`),cf(),bT(28,` type used in `),Aa(29,`a`,9),bT(30,`Authentication over WebSockets`),cf(),bT(31,`):`),cf(),Aa(32,`pre`)(33,`code`,10),bT(34,`
$ npm i --save graphql-ws
`),cf()(),Aa(35,`p`),bT(36,`Then enable the transport:`),cf(),Aa(37,`app-copy-button`)(38,`pre`)(39,`code`,11),bT(40,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  subscriptions: {
    'graphql-ws': true,
  },
}),
`),cf()()(),Aa(41,`blockquote`,12)(42,`strong`),bT(43,`Warning`),cf(),bT(44,` Support for `),Aa(45,`code`),bT(46,`subscriptions-transport-ws`),cf(),bT(47,` was `),Aa(48,`strong`),bT(49,`removed`),cf(),bT(50,` in `),Aa(51,`code`),bT(52,`@nestjs/graphql`),cf(),bT(53,` v14. The package is no longer a dependency, and the `),Aa(54,`code`),bT(55,`'subscriptions-transport-ws'`),cf(),bT(56,` key is no longer accepted in the `),Aa(57,`code`),bT(58,`subscriptions`),cf(),bT(59,` options object. If you are upgrading, replace that key with `),Aa(60,`code`),bT(61,`'graphql-ws'`),cf(),bT(62,` and update your clients to the newer protocol. The two protocols are wire-incompatible, so clients still using `),Aa(63,`code`),bT(64,`subscriptions-transport-ws`),cf(),bT(65,` fail to connect. The `),Aa(66,`code`),bT(67,`onConnect`),cf(),bT(68,` callback signature differs as well: with `),Aa(69,`code`),bT(70,`graphql-ws`),cf(),bT(71,`, it receives the connection context, and extra context values belong in its `),Aa(72,`code`),bT(73,`extra`),cf(),bT(74,` field (see `),Aa(75,`a`,9),bT(76,`Authentication over WebSockets`),cf(),bT(77,` below).
`),cf(),Aa(78,`h4`,13)(79,`span`),bT(80,`Code first`),cf()(),Aa(81,`p`),bT(82,`To create a subscription with the code first approach, use the `),Aa(83,`code`),bT(84,`@Subscription()`),cf(),bT(85,` decorator (exported from the `),Aa(86,`code`),bT(87,`@nestjs/graphql`),cf(),bT(88,` package) and the `),Aa(89,`code`),bT(90,`PubSub`),cf(),bT(91,` class from the `),Aa(92,`code`),bT(93,`graphql-subscriptions`),cf(),bT(94,` package, which provides a simple `),Aa(95,`strong`),bT(96,`publish/subscribe API`),cf(),bT(97,`.`),cf(),Aa(98,`p`),bT(99,`The following subscription handler `),Aa(100,`strong`),bT(101,`subscribes`),cf(),bT(102,` to an event by calling `),Aa(103,`code`),bT(104,`PubSub#asyncIterableIterator`),cf(),bT(105,`. This method takes a single argument, the `),Aa(106,`code`),bT(107,`triggerName`),cf(),bT(108,`, which corresponds to an event topic name.`),cf(),Aa(109,`app-copy-button`)(110,`pre`)(111,`code`,11),bT(112,`
const pubSub = new PubSub();

@Resolver(() => Author)
export class AuthorResolver {
  // ...
  @Subscription(() => Comment)
  commentAdded() {
    return pubSub.asyncIterableIterator('commentAdded');
  }
}
`),cf()()(),Aa(113,`blockquote`,14)(114,`strong`),bT(115,`Hint`),cf(),bT(116,` All decorators are exported from the `),Aa(117,`code`),bT(118,`@nestjs/graphql`),cf(),bT(119,` package, while the `),Aa(120,`code`),bT(121,`PubSub`),cf(),bT(122,` class is exported from the `),Aa(123,`code`),bT(124,`graphql-subscriptions`),cf(),bT(125,` package (`),Aa(126,`code`),bT(127,`npm i graphql-subscriptions`),cf(),bT(128,`).
`),cf(),Aa(129,`blockquote`,12)(130,`strong`),bT(131,`Note`),cf(),Aa(132,`code`),bT(133,`PubSub`),cf(),bT(134,` is a class that exposes a simple `),Aa(135,`code`),bT(136,`publish`),cf(),bT(137,` and `),Aa(138,`code`),bT(139,`subscribe`),cf(),bT(140,` API. Learn more in the `),Aa(141,`a`,15),bT(142,`graphql-subscriptions setup guide`),cf(),bT(143,`. The Apollo docs warn that the `),Aa(144,`a`,16),bT(145,`default implementation`),cf(),bT(146,` is not suitable for production. Production apps should use a `),Aa(147,`code`),bT(148,`PubSub`),cf(),bT(149,` implementation backed by an external store (see the list of `),Aa(150,`a`,17),bT(151,`PubSub implementations`),cf(),bT(152,`).
`),cf(),Aa(153,`p`),bT(154,`This generates the following part of the GraphQL schema in SDL:`),cf(),Aa(155,`pre`)(156,`code`,18),bT(157,`
type Subscription {
  commentAdded: Comment!
}
`),cf()(),Aa(158,`p`),bT(159,`Subscriptions, by definition, return an object with a single top-level property whose key is the name of the subscription. This name is either inherited from the name of the subscription handler method (i.e., `),Aa(160,`code`),bT(161,`commentAdded`),cf(),bT(162,` above), or provided explicitly through the `),Aa(163,`code`),bT(164,`name`),cf(),bT(165,` option in the second argument to the `),Aa(166,`code`),bT(167,`@Subscription()`),cf(),bT(168,` decorator, as shown below.`),cf(),Aa(169,`app-copy-button`)(170,`pre`)(171,`code`,11),bT(172,`
@Subscription(() => Comment, {
  name: 'commentAdded',
})
subscribeToCommentAdded() {
  return pubSub.asyncIterableIterator('commentAdded');
}
`),cf()()(),Aa(173,`p`),bT(174,`This construct produces the same SDL as the previous code sample, but decouples the method name from the subscription name.`),cf(),Aa(175,`h4`,19)(176,`span`),bT(177,`Publishing`),cf()(),Aa(178,`p`),bT(179,`To publish the event, use the `),Aa(180,`code`),bT(181,`PubSub#publish`),cf(),bT(182,` method. It is often called within a mutation to trigger a client-side update when a part of the object graph has changed. For example:`),cf(),Aa(183,`app-copy-button`,20)(184,`span`,21),bT(185),LT(186,`extension`),Wa(187,`app-tabs`,null,1),cf(),Aa(189,`pre`)(190,`code`,11),bT(191,`
@Mutation(() => Comment)
async addComment(
  @Args('postId', { type: () => Int }) postId: number,
  @Args('comment', { type: () => CommentInput }) comment: CommentInput,
) {
  const newComment = this.commentsService.addComment({ id: postId, comment });
  pubSub.publish('commentAdded', { commentAdded: newComment });
  return newComment;
}
`),cf()()(),Aa(192,`p`),bT(193,`The `),Aa(194,`code`),bT(195,`PubSub#publish`),cf(),bT(196,` method takes a `),Aa(197,`code`),bT(198,`triggerName`),cf(),bT(199,` (again, think of it as an event topic name) as the first parameter, and an event payload as the second. As mentioned, a subscription, by definition, returns a value, and that value has a shape. Look again at the generated SDL for the `),Aa(200,`code`),bT(201,`commentAdded`),cf(),bT(202,` subscription:`),cf(),Aa(203,`pre`)(204,`code`,18),bT(205,`
type Subscription {
  commentAdded: Comment!
}
`),cf()(),Aa(206,`p`),bT(207,`This tells us that the subscription must return an object with a top-level property named `),Aa(208,`code`),bT(209,`commentAdded`),cf(),bT(210,` whose value is a `),Aa(211,`code`),bT(212,`Comment`),cf(),bT(213,` object. The shape of the event payload emitted by the `),Aa(214,`code`),bT(215,`PubSub#publish`),cf(),bT(216,` method must match the shape of the value the subscription is expected to return. In the example above, the `),Aa(217,`code`),bT(218),cf(),bT(219,` statement publishes a `),Aa(220,`code`),bT(221,`commentAdded`),cf(),bT(222,` event with the appropriately shaped payload. If the shapes don't match, the subscription fails when the event is resolved.`),cf(),Aa(223,`h4`,22)(224,`span`),bT(225,`Filtering subscriptions`),cf()(),Aa(226,`p`),bT(227,`To filter out specific events, set the `),Aa(228,`code`),bT(229,`filter`),cf(),bT(230,` property to a filter function. This function works like the callback passed to an array's `),Aa(231,`code`),bT(232,`filter()`),cf(),bT(233,` method. It takes two arguments: `),Aa(234,`code`),bT(235,`payload`),cf(),bT(236,`, containing the event payload (as sent by the event publisher), and `),Aa(237,`code`),bT(238,`variables`),cf(),bT(239,`, containing any arguments passed in with the subscription request. It returns a boolean that determines whether the event should be published to client listeners.`),cf(),Aa(240,`app-copy-button`)(241,`pre`)(242,`code`,11),bT(243,`
@Subscription(() => Comment, {
  filter: (payload, variables) =>
    payload.commentAdded.title === variables.title,
})
commentAdded(@Args('title') title: string) {
  return pubSub.asyncIterableIterator('commentAdded');
}
`),cf()()(),Aa(244,`h4`,23)(245,`span`),bT(246,`Mutating subscription payloads`),cf()(),Aa(247,`p`),bT(248,`To transform the published event payload, set the `),Aa(249,`code`),bT(250,`resolve`),cf(),bT(251,` property to a function. The function receives the event payload (as sent by the event publisher) and returns the appropriate value.`),cf(),Aa(252,`app-copy-button`)(253,`pre`)(254,`code`,11),bT(255,`
@Subscription(() => Comment, {
  resolve: value => value,
})
commentAdded() {
  return pubSub.asyncIterableIterator('commentAdded');
}
`),cf()()(),Aa(256,`blockquote`,12)(257,`strong`),bT(258,`Note`),cf(),bT(259,` If you use the `),Aa(260,`code`),bT(261,`resolve`),cf(),bT(262,` option, return the unwrapped payload (in our example, return the `),Aa(263,`code`),bT(264,`newComment`),cf(),bT(265,` object directly, not a `),Aa(266,`code`),bT(267),cf(),bT(268,` object).
`),cf(),Aa(269,`p`),bT(270,`To access injected providers (e.g., to validate the data with an external service), use the following construction.`),cf(),Aa(271,`app-copy-button`)(272,`pre`)(273,`code`,11),bT(274,`
@Subscription(() => Comment, {
  resolve(this: AuthorResolver, value) {
    // "this" refers to an instance of "AuthorResolver"
    return value;
  }
})
commentAdded() {
  return pubSub.asyncIterableIterator('commentAdded');
}
`),cf()()(),Aa(275,`p`),bT(276,`The same construction works with filters:`),cf(),Aa(277,`app-copy-button`)(278,`pre`)(279,`code`,11),bT(280,`
@Subscription(() => Comment, {
  filter(this: AuthorResolver, payload, variables) {
    // "this" refers to an instance of "AuthorResolver"
    return payload.commentAdded.title === variables.title;
  }
})
commentAdded() {
  return pubSub.asyncIterableIterator('commentAdded');
}
`),cf()()(),Aa(281,`h4`,24)(282,`span`),bT(283,`Schema first`),cf()(),Aa(284,`p`),bT(285,`To create an equivalent subscription in Nest, use the `),Aa(286,`code`),bT(287,`@Subscription()`),cf(),bT(288,` decorator.`),cf(),Aa(289,`app-copy-button`)(290,`pre`)(291,`code`,11),bT(292,`
const pubSub = new PubSub();

@Resolver('Author')
export class AuthorResolver {
  // ...
  @Subscription()
  commentAdded() {
    return pubSub.asyncIterableIterator('commentAdded');
  }
}
`),cf()()(),Aa(293,`p`),bT(294,`To filter out specific events based on context and arguments, set the `),Aa(295,`code`),bT(296,`filter`),cf(),bT(297,` property.`),cf(),Aa(298,`app-copy-button`)(299,`pre`)(300,`code`,11),bT(301,`
@Subscription('commentAdded', {
  filter: (payload, variables) =>
    payload.commentAdded.title === variables.title,
})
commentAdded() {
  return pubSub.asyncIterableIterator('commentAdded');
}
`),cf()()(),Aa(302,`p`),bT(303,`To transform the published payload, use a `),Aa(304,`code`),bT(305,`resolve`),cf(),bT(306,` function.`),cf(),Aa(307,`app-copy-button`)(308,`pre`)(309,`code`,11),bT(310,`
@Subscription('commentAdded', {
  resolve: value => value,
})
commentAdded() {
  return pubSub.asyncIterableIterator('commentAdded');
}
`),cf()()(),Aa(311,`p`),bT(312,`To access injected providers (e.g., to validate the data with an external service), use the following construction:`),cf(),Aa(313,`app-copy-button`)(314,`pre`)(315,`code`,11),bT(316,`
@Subscription('commentAdded', {
  resolve(this: AuthorResolver, value) {
    // "this" refers to an instance of "AuthorResolver"
    return value;
  }
})
commentAdded() {
  return pubSub.asyncIterableIterator('commentAdded');
}
`),cf()()(),Aa(317,`p`),bT(318,`The same construction works with filters:`),cf(),Aa(319,`app-copy-button`)(320,`pre`)(321,`code`,11),bT(322,`
@Subscription('commentAdded', {
  filter(this: AuthorResolver, payload, variables) {
    // "this" refers to an instance of "AuthorResolver"
    return payload.commentAdded.title === variables.title;
  }
})
commentAdded() {
  return pubSub.asyncIterableIterator('commentAdded');
}
`),cf()()(),Aa(323,`p`),bT(324,`The last step is to update the type definitions file.`),cf(),Aa(325,`pre`)(326,`code`,18),bT(327,`
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int!
  title: String
  votes: Int
}

type Query {
  author(id: Int!): Author
}

type Comment {
  id: String
  content: String
}

type Subscription {
  commentAdded(title: String!): Comment
}
`),cf()(),Aa(328,`p`),bT(329,`With this, we've created a single `),Aa(330,`code`),bT(331,`commentAdded(title: String!): Comment`),cf(),bT(332,` subscription. A full `),Aa(333,`a`,25),bT(334,`schema first sample`),cf(),bT(335,` is available in the NestJS repository.`),cf(),Aa(336,`h4`,26)(337,`span`),bT(338,`PubSub`),cf()(),Aa(339,`p`),bT(340,`The examples above instantiate a local `),Aa(341,`code`),bT(342,`PubSub`),cf(),bT(343,` instance. The preferred approach is to define `),Aa(344,`code`),bT(345,`PubSub`),cf(),bT(346,` as a `),Aa(347,`a`,27),bT(348,`provider`),cf(),bT(349,` and inject it through the constructor (using the `),Aa(350,`code`),bT(351,`@Inject()`),cf(),bT(352,` decorator), so that the same instance is reused across the whole application. For example, define a provider as follows, then inject `),Aa(353,`code`),bT(354,`'PUB_SUB'`),cf(),bT(355,` where needed.`),cf(),Aa(356,`app-copy-button`)(357,`pre`)(358,`code`,11),bT(359,`
{
  provide: 'PUB_SUB',
  useValue: new PubSub(),
}
`),cf()()(),Aa(360,`h4`,28)(361,`span`),bT(362,`Customize subscriptions server`),cf()(),Aa(363,`p`),bT(364,`To customize the subscriptions server (e.g., to change its path, which defaults to the GraphQL endpoint path), pass an options object for `),Aa(365,`code`),bT(366,`graphql-ws`),cf(),bT(367,` in the `),Aa(368,`code`),bT(369,`subscriptions`),cf(),bT(370,` property:`),cf(),Aa(371,`app-copy-button`)(372,`pre`)(373,`code`,11),bT(374,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  subscriptions: {
    'graphql-ws': {
      path: '/graphql',
    },
  },
});
`),cf()()(),Aa(375,`p`),bT(376,`To configure the underlying WebSocket server yourself (e.g., to enable `),Aa(377,`code`),bT(378,`perMessageDeflate`),cf(),bT(379,`, limit `),Aa(380,`code`),bT(381,`maxPayload`),cf(),bT(382,`, or add a `),Aa(383,`code`),bT(384,`verifyClient`),cf(),bT(385,` check), create a `),Aa(386,`a`,29)(387,`code`),bT(388,`ws`),cf()(),Aa(389,`code`),bT(390,`WebSocketServer`),cf(),bT(391,` and pass it as `),Aa(392,`code`),bT(393,`server`),cf(),bT(394,`:`),cf(),Aa(395,`app-copy-button`)(396,`pre`)(397,`code`,11),bT(398,`
import { WebSocketServer } from 'ws';

GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  subscriptions: {
    'graphql-ws': {
      server: new WebSocketServer({
        noServer: true,
        path: '/subscriptions',
        maxPayload: 1024 * 1024,
      }),
    },
  },
});
`),cf()()(),Aa(399,`ul`)(400,`li`),bT(401,`The server must be created with `),Aa(402,`code`),bT(403,`noServer: true`),cf(),bT(404,`: Nest routes the HTTP upgrade requests to it, and throws otherwise.`),cf(),Aa(405,`li`),bT(406,`If the server has a `),Aa(407,`code`),bT(408,`path`),cf(),bT(409,`, it takes precedence over `),Aa(410,`code`),bT(411,`graphql-ws.path`),cf(),bT(412,` and the GraphQL endpoint path.`),cf(),Aa(413,`li`),bT(414,`The server is handed over to `),Aa(415,`code`),bT(416,`graphql-ws`),cf(),bT(417,`, which replaces its `),Aa(418,`code`),bT(419,`handleProtocols`),cf(),bT(420,` option and, when the application shuts down, closes it and removes all of its listeners.`),cf(),Aa(421,`li`),bT(422,`Use a separate server for each `),Aa(423,`code`),bT(424,`GraphQLModule`),cf(),bT(425,`; one instance can't be shared between modules.`),cf()(),Aa(426,`blockquote`,14)(427,`strong`),bT(428,`Hint`),cf(),bT(429,` Only the `),Aa(430,`code`),bT(431,`ws`),cf(),bT(432,` implementation is supported. The Fastify and uWebSockets adapters of `),Aa(433,`code`),bT(434,`graphql-ws`),cf(),bT(435,` can't be plugged in this way.
`),cf(),Aa(436,`h4`,30)(437,`span`),bT(438,`Authentication over WebSockets`),cf()(),Aa(439,`p`),bT(440,`To check whether the user is authenticated, use the `),Aa(441,`code`),bT(442,`onConnect`),cf(),bT(443,` callback function, which you can specify in the `),Aa(444,`code`),bT(445,`subscriptions`),cf(),bT(446,` options.`),cf(),Aa(447,`p`),bT(448,`With `),Aa(449,`code`),bT(450,`graphql-ws`),cf(),bT(451,`, the `),Aa(452,`code`),bT(453,`onConnect`),cf(),bT(454,` callback receives the connection context, including `),Aa(455,`code`),bT(456,`connectionParams`),cf(),bT(457,`.`),cf(),Aa(458,`app-copy-button`)(459,`pre`)(460,`code`,11),bT(461,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  subscriptions: {
    'graphql-ws': {
      onConnect: (context: Context<any>) => {
        const { connectionParams, extra } = context;
        const authToken = connectionParams.authToken;
        if (!isValid(authToken)) {
          throw new Error('Token is not valid');
        }
        // when using graphql-ws, additional context values should be stored in the extra field
        extra.user = { user: {} };
      },
    },
  },
  context: ({ extra }) => {
    // you can now access your additional context value through the extra field
  },
});
`),cf()()(),Aa(462,`h4`,31)(463,`span`),bT(464,`Enable subscriptions with Mercurius driver`),cf()(),Aa(465,`p`),bT(466,`To enable subscriptions, set the `),Aa(467,`code`),bT(468,`subscription`),cf(),bT(469,` property to `),Aa(470,`code`),bT(471,`true`),cf(),bT(472,`.`),cf(),Aa(473,`app-copy-button`)(474,`pre`)(475,`code`,11),bT(476,`
GraphQLModule.forRoot<MercuriusDriverConfig>({
  driver: MercuriusDriver,
  subscription: true,
}),
`),cf()()(),Aa(477,`blockquote`,14)(478,`strong`),bT(479,`Hint`),cf(),bT(480,` You can also pass an options object to set up a custom emitter, validate incoming connections, etc. See the `),Aa(481,`code`),bT(482,`subscription`),cf(),bT(483,` option in the `),Aa(484,`a`,32),bT(485,`Mercurius plugin options`),cf(),bT(486,`.
`),cf(),Aa(487,`h4`,33)(488,`span`),bT(489,`Code first`),cf()(),Aa(490,`p`),bT(491,`To create a subscription with the code first approach, use the `),Aa(492,`code`),bT(493,`@Subscription()`),cf(),bT(494,` decorator (exported from the `),Aa(495,`code`),bT(496,`@nestjs/graphql`),cf(),bT(497,` package) and the `),Aa(498,`code`),bT(499,`PubSub`),cf(),bT(500,` class from the `),Aa(501,`code`),bT(502,`mercurius`),cf(),bT(503,` package, which provides a simple `),Aa(504,`strong`),bT(505,`publish/subscribe API`),cf(),bT(506,`.`),cf(),Aa(507,`p`),bT(508,`The following subscription handler `),Aa(509,`strong`),bT(510,`subscribes`),cf(),bT(511,` to an event by calling `),Aa(512,`code`),bT(513,`PubSub#subscribe`),cf(),bT(514,`. This method takes the topic name as its argument.`),cf(),Aa(515,`app-copy-button`)(516,`pre`)(517,`code`,11),bT(518,`
@Resolver(() => Author)
export class AuthorResolver {
  // ...
  @Subscription(() => Comment)
  commentAdded(@Context('pubsub') pubSub: PubSub) {
    return pubSub.subscribe('commentAdded');
  }
}
`),cf()()(),Aa(519,`blockquote`,14)(520,`strong`),bT(521,`Hint`),cf(),bT(522,` All decorators used in the example above are exported from the `),Aa(523,`code`),bT(524,`@nestjs/graphql`),cf(),bT(525,` package, while the `),Aa(526,`code`),bT(527,`PubSub`),cf(),bT(528,` class is exported from the `),Aa(529,`code`),bT(530,`mercurius`),cf(),bT(531,` package.
`),cf(),Aa(532,`blockquote`,12)(533,`strong`),bT(534,`Note`),cf(),Aa(535,`code`),bT(536,`PubSub`),cf(),bT(537,` is a class that exposes a simple `),Aa(538,`code`),bT(539,`publish`),cf(),bT(540,` and `),Aa(541,`code`),bT(542,`subscribe`),cf(),bT(543,` API. To register a custom `),Aa(544,`code`),bT(545,`PubSub`),cf(),bT(546,` class, see `),Aa(547,`a`,34),bT(548,`Subscriptions with custom PubSub`),cf(),bT(549,` in the Mercurius documentation.
`),cf(),Aa(550,`p`),bT(551,`This generates the following part of the GraphQL schema in SDL:`),cf(),Aa(552,`pre`)(553,`code`,18),bT(554,`
type Subscription {
  commentAdded: Comment!
}
`),cf()(),Aa(555,`p`),bT(556,`Subscriptions, by definition, return an object with a single top-level property whose key is the name of the subscription. This name is either inherited from the name of the subscription handler method (i.e., `),Aa(557,`code`),bT(558,`commentAdded`),cf(),bT(559,` above), or provided explicitly through the `),Aa(560,`code`),bT(561,`name`),cf(),bT(562,` option in the second argument to the `),Aa(563,`code`),bT(564,`@Subscription()`),cf(),bT(565,` decorator, as shown below.`),cf(),Aa(566,`app-copy-button`)(567,`pre`)(568,`code`,11),bT(569,`
@Subscription(() => Comment, {
  name: 'commentAdded',
})
subscribeToCommentAdded(@Context('pubsub') pubSub: PubSub) {
  return pubSub.subscribe('commentAdded');
}
`),cf()()(),Aa(570,`p`),bT(571,`This construct produces the same SDL as the previous code sample, but decouples the method name from the subscription name.`),cf(),Aa(572,`h4`,35)(573,`span`),bT(574,`Publishing`),cf()(),Aa(575,`p`),bT(576,`To publish the event, use the `),Aa(577,`code`),bT(578,`PubSub#publish`),cf(),bT(579,` method. It is often called within a mutation to trigger a client-side update when a part of the object graph has changed. For example:`),cf(),Aa(580,`app-copy-button`,20)(581,`span`,21),bT(582),LT(583,`extension`),Wa(584,`app-tabs`,null,2),cf(),Aa(586,`pre`)(587,`code`,11),bT(588,`
@Mutation(() => Comment)
async addComment(
  @Args('postId', { type: () => Int }) postId: number,
  @Args('comment', { type: () => CommentInput }) comment: CommentInput,
  @Context('pubsub') pubSub: PubSub,
) {
  const newComment = this.commentsService.addComment({ id: postId, comment });
  await pubSub.publish({
    topic: 'commentAdded',
    payload: {
      commentAdded: newComment
    }
  });
  return newComment;
}
`),cf()()(),Aa(589,`p`),bT(590,`As mentioned, a subscription, by definition, returns a value, and that value has a shape. Look again at the generated SDL for the `),Aa(591,`code`),bT(592,`commentAdded`),cf(),bT(593,` subscription:`),cf(),Aa(594,`pre`)(595,`code`,18),bT(596,`
type Subscription {
  commentAdded: Comment!
}
`),cf()(),Aa(597,`p`),bT(598,`This tells us that the subscription must return an object with a top-level property named `),Aa(599,`code`),bT(600,`commentAdded`),cf(),bT(601,` whose value is a `),Aa(602,`code`),bT(603,`Comment`),cf(),bT(604,` object. The shape of the event payload emitted by the `),Aa(605,`code`),bT(606,`PubSub#publish`),cf(),bT(607,` method must match the shape of the value the subscription is expected to return. In the example above, the `),Aa(608,`code`),bT(609),cf(),bT(610,` statement publishes a `),Aa(611,`code`),bT(612,`commentAdded`),cf(),bT(613,` event with the appropriately shaped payload. If the shapes don't match, the subscription fails when the event is resolved.`),cf(),Aa(614,`h4`,36)(615,`span`),bT(616,`Filtering subscriptions`),cf()(),Aa(617,`p`),bT(618,`To filter out specific events, set the `),Aa(619,`code`),bT(620,`filter`),cf(),bT(621,` property to a filter function. This function works like the callback passed to an array's `),Aa(622,`code`),bT(623,`filter()`),cf(),bT(624,` method. It takes two arguments: `),Aa(625,`code`),bT(626,`payload`),cf(),bT(627,`, containing the event payload (as sent by the event publisher), and `),Aa(628,`code`),bT(629,`variables`),cf(),bT(630,`, containing any arguments passed in with the subscription request. It returns a boolean that determines whether the event should be published to client listeners.`),cf(),Aa(631,`app-copy-button`)(632,`pre`)(633,`code`,11),bT(634,`
@Subscription(() => Comment, {
  filter: (payload, variables) =>
    payload.commentAdded.title === variables.title,
})
commentAdded(@Args('title') title: string, @Context('pubsub') pubSub: PubSub) {
  return pubSub.subscribe('commentAdded');
}
`),cf()()(),Aa(635,`p`),bT(636,`To access injected providers (e.g., to validate the data with an external service), use the following construction.`),cf(),Aa(637,`app-copy-button`)(638,`pre`)(639,`code`,11),bT(640,`
@Subscription(() => Comment, {
  filter(this: AuthorResolver, payload, variables) {
    // "this" refers to an instance of "AuthorResolver"
    return payload.commentAdded.title === variables.title;
  }
})
commentAdded(@Args('title') title: string, @Context('pubsub') pubSub: PubSub) {
  return pubSub.subscribe('commentAdded');
}
`),cf()()(),Aa(641,`h4`,37)(642,`span`),bT(643,`Schema first`),cf()(),Aa(644,`p`),bT(645,`To create an equivalent subscription in Nest, use the `),Aa(646,`code`),bT(647,`@Subscription()`),cf(),bT(648,` decorator.`),cf(),Aa(649,`app-copy-button`)(650,`pre`)(651,`code`,11),bT(652,`
@Resolver('Author')
export class AuthorResolver {
  // ...
  @Subscription()
  commentAdded(@Context('pubsub') pubSub: PubSub) {
    return pubSub.subscribe('commentAdded');
  }
}
`),cf()()(),Aa(653,`p`),bT(654,`To filter out specific events based on context and arguments, set the `),Aa(655,`code`),bT(656,`filter`),cf(),bT(657,` property.`),cf(),Aa(658,`app-copy-button`)(659,`pre`)(660,`code`,11),bT(661,`
@Subscription('commentAdded', {
  filter: (payload, variables) =>
    payload.commentAdded.title === variables.title,
})
commentAdded(@Context('pubsub') pubSub: PubSub) {
  return pubSub.subscribe('commentAdded');
}
`),cf()()(),Aa(662,`p`),bT(663,`To access injected providers (e.g., to validate the data with an external service), use the following construction:`),cf(),Aa(664,`app-copy-button`)(665,`pre`)(666,`code`,11),bT(667,`
@Subscription('commentAdded', {
  filter(this: AuthorResolver, payload, variables) {
    // "this" refers to an instance of "AuthorResolver"
    return payload.commentAdded.title === variables.title;
  }
})
commentAdded(@Context('pubsub') pubSub: PubSub) {
  return pubSub.subscribe('commentAdded');
}
`),cf()()(),Aa(668,`p`),bT(669,`The last step is to update the type definitions file.`),cf(),Aa(670,`pre`)(671,`code`,18),bT(672,`
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int!
  title: String
  votes: Int
}

type Query {
  author(id: Int!): Author
}

type Comment {
  id: String
  content: String
}

type Subscription {
  commentAdded(title: String!): Comment
}
`),cf()(),Aa(673,`p`),bT(674,`With this, we've created a single `),Aa(675,`code`),bT(676,`commentAdded(title: String!): Comment`),cf(),bT(677,` subscription.`),cf(),Aa(678,`h4`,38)(679,`span`),bT(680,`PubSub`),cf()(),Aa(681,`p`),bT(682,`The examples above use the default `),Aa(683,`code`),bT(684,`PubSub`),cf(),bT(685,` emitter (`),Aa(686,`a`,39),bT(687,`mqemitter`),cf(),bT(688,`). For production, the preferred approach is to use `),Aa(689,`code`),bT(690,`mqemitter-redis`),cf(),bT(691,`. Alternatively, you can provide a custom `),Aa(692,`code`),bT(693,`PubSub`),cf(),bT(694,` implementation (see `),Aa(695,`a`,40),bT(696,`Subscriptions`),cf(),bT(697,` in the Mercurius documentation).`),cf(),Aa(698,`app-copy-button`)(699,`pre`)(700,`code`,11),bT(701,`
import mqemitterRedis from 'mqemitter-redis';

GraphQLModule.forRoot<MercuriusDriverConfig>({
  driver: MercuriusDriver,
  subscription: {
    emitter: mqemitterRedis({
      port: 6579,
      host: '127.0.0.1',
    }),
  },
});
`),cf()()(),Aa(702,`h4`,41)(703,`span`),bT(704,`Authentication over WebSockets`),cf()(),Aa(705,`p`),bT(706,`To check whether the user is authenticated, use the `),Aa(707,`code`),bT(708,`verifyClient`),cf(),bT(709,` callback function, which you can specify in the `),Aa(710,`code`),bT(711,`subscription`),cf(),bT(712,` options.`),cf(),Aa(713,`p`),bT(714,`The `),Aa(715,`code`),bT(716,`verifyClient`),cf(),bT(717,` callback receives the `),Aa(718,`code`),bT(719,`info`),cf(),bT(720,` object as its first argument, which you can use to read the request's headers.`),cf(),Aa(721,`app-copy-button`)(722,`pre`)(723,`code`,11),bT(724,`
GraphQLModule.forRoot<MercuriusDriverConfig>({
  driver: MercuriusDriver,
  subscription: {
    verifyClient: (info, next) => {
      const authorization = info.req.headers?.authorization as string;
      if (!authorization?.startsWith('Bearer ')) {
        return next(false);
      }
      next(true);
    },
  }
}),
`),cf()()()(),Aa(725,`a`,42),Wa(726,`i`,43),Aa(727,`span`),bT(728,`Edit on GitHub`),cf()()()),o&2){let q=tT(188),k=tT(585);zC(185),hf(` `,jT(186,10,`posts/posts.resolver`,q.isJsActive),`
`),zC(33),Ky(`pubSub.publish('commentAdded', `,`{`,` commentAdded: newComment `,`}`,`)`),zC(49),Ky(``,`{`,` commentAdded: newComment `,`}`),zC(315),hf(` `,jT(583,13,`posts/posts.resolver`,k.isJsActive),`
`),zC(27),Xy(`pubSub.publish(`,`{`,` topic: 'commentAdded', payload: `,`{`,` commentAdded: newComment `,`}`,` `,`}`,`)`)}},dependencies:[Lt,ln$1,u,Jc,g],encapsulation:2})}return i})();var V=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(i)))(l||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-unions-enums`]],features:[xy],decls:272,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`unions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/schema/#union-types`],[`appAnchor`,``,`id`,`code-first`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/apollo-server/schema/unions-interfaces/#union-type`],[1,`language-typescript`],[1,`warning`],[1,`language-graphql`],[`appAnchor`,``,`id`,`schema-first`],[`routerLink`,`/graphql/quick-start`],[1,`info`],[`id`,`enums`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://graphql.org/learn/schema/#enumeration-types`],[`appAnchor`,``,`id`,`code-first-1`],[`appAnchor`,``,`id`,`schema-first-1`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.apollographql.com/docs/apollo-server/schema/scalars-enums/#internal-values`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/unions-and-enums.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,l){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Unions`),cf(),Aa(5,`p`),bT(6,`Union types are similar to interfaces, but they don't specify any common fields between the types (see `),Aa(7,`a`,4),bT(8,`union types`),cf(),bT(9,` in the GraphQL documentation). Unions are useful for returning disjoint data types from a single field.`),cf(),Aa(10,`h4`,5)(11,`span`),bT(12,`Code first`),cf()(),Aa(13,`p`),bT(14,`To define a GraphQL union type, first define the classes that make up the union. Following the `),Aa(15,`a`,6),bT(16,`union type example`),cf(),bT(17,` from the Apollo documentation, we'll create two classes. First, `),Aa(18,`code`),bT(19,`Book`),cf(),bT(20,`:`),cf(),Aa(21,`app-copy-button`)(22,`pre`)(23,`code`,7),bT(24,`
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  title: string;
}
`),cf()()(),Aa(25,`p`),bT(26,`And then `),Aa(27,`code`),bT(28,`Author`),cf(),bT(29,`:`),cf(),Aa(30,`app-copy-button`)(31,`pre`)(32,`code`,7),bT(33,`
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field()
  name: string;
}
`),cf()()(),Aa(34,`p`),bT(35,`With this in place, register the `),Aa(36,`code`),bT(37,`ResultUnion`),cf(),bT(38,` union using the `),Aa(39,`code`),bT(40,`createUnionType`),cf(),bT(41,` function exported from the `),Aa(42,`code`),bT(43,`@nestjs/graphql`),cf(),bT(44,` package:`),cf(),Aa(45,`app-copy-button`)(46,`pre`)(47,`code`,7),bT(48,`
export const ResultUnion = createUnionType({
  name: 'ResultUnion',
  types: () => [Author, Book] as const,
});
`),cf()()(),Aa(49,`blockquote`,8)(50,`strong`),bT(51,`Warning`),cf(),bT(52,` Add a const assertion (`),Aa(53,`code`),bT(54,`as const`),cf(),bT(55,`) to the array returned by the `),Aa(56,`code`),bT(57,`types`),cf(),bT(58,` property of the `),Aa(59,`code`),bT(60,`createUnionType`),cf(),bT(61,` function. Without it, TypeScript generates an incorrect declaration file at compile time, and using the union from another project fails with an error.
`),cf(),Aa(62,`p`),bT(63,`Now you can reference `),Aa(64,`code`),bT(65,`ResultUnion`),cf(),bT(66,` in a query:`),cf(),Aa(67,`app-copy-button`)(68,`pre`)(69,`code`,7),bT(70,`
@Query(() => [ResultUnion])
search(): Array<typeof ResultUnion> {
  return [new Author(), new Book()];
}
`),cf()()(),Aa(71,`p`),bT(72,`This generates the following part of the GraphQL schema in SDL:`),cf(),Aa(73,`pre`)(74,`code`,9),bT(75,`
type Author {
  name: String!
}

type Book {
  title: String!
}

union ResultUnion = Author | Book

type Query {
  search: [ResultUnion!]!
}
`),cf()(),Aa(76,`p`),bT(77,`The default `),Aa(78,`code`),bT(79,`resolveType()`),cf(),bT(80,` function generated by the library determines the type based on the value returned from the resolver method. This means that you must return class instances, not plain JavaScript object literals.`),cf(),Aa(81,`p`),bT(82,`To provide a custom `),Aa(83,`code`),bT(84,`resolveType()`),cf(),bT(85,` function, pass the `),Aa(86,`code`),bT(87,`resolveType`),cf(),bT(88,` property in the options object of the `),Aa(89,`code`),bT(90,`createUnionType()`),cf(),bT(91,` function:`),cf(),Aa(92,`app-copy-button`)(93,`pre`)(94,`code`,7),bT(95,`
export const ResultUnion = createUnionType({
  name: 'ResultUnion',
  types: () => [Author, Book] as const,
  resolveType(value) {
    if (value.name) {
      return Author;
    }
    if (value.title) {
      return Book;
    }
    return null;
  },
});
`),cf()()(),Aa(96,`h4`,10)(97,`span`),bT(98,`Schema first`),cf()(),Aa(99,`p`),bT(100,`To define a union in the schema first approach, create a GraphQL union with SDL:`),cf(),Aa(101,`pre`)(102,`code`,9),bT(103,`
type Author {
  name: String!
}

type Book {
  title: String!
}

union ResultUnion = Author | Book
`),cf()(),Aa(104,`p`),bT(105,`Then, you can use the typings generation feature (as shown in the `),Aa(106,`a`,11),bT(107,`GraphQL quick start`),cf(),bT(108,` chapter) to generate the corresponding TypeScript definitions:`),cf(),Aa(109,`app-copy-button`)(110,`pre`)(111,`code`,7),bT(112,`
export class Author {
  name: string;
}

export class Book {
  title: string;
}

export type ResultUnion = Author | Book;
`),cf()()(),Aa(113,`p`),bT(114,`Unions require an extra `),Aa(115,`code`),bT(116,`__resolveType`),cf(),bT(117,` field in the resolver map to determine which type the union resolves to. Create a `),Aa(118,`code`),bT(119,`ResultUnionResolver`),cf(),bT(120,` class and define the `),Aa(121,`code`),bT(122,`__resolveType`),cf(),bT(123,` method, which returns the name of the concrete type. Remember to register `),Aa(124,`code`),bT(125,`ResultUnionResolver`),cf(),bT(126,` as a provider in a module.`),cf(),Aa(127,`app-copy-button`)(128,`pre`)(129,`code`,7),bT(130,`
@Resolver('ResultUnion')
export class ResultUnionResolver {
  @ResolveField()
  __resolveType(value) {
    if (value.name) {
      return 'Author';
    }
    if (value.title) {
      return 'Book';
    }
    return null;
  }
}
`),cf()()(),Aa(131,`blockquote`,12)(132,`strong`),bT(133,`Hint`),cf(),bT(134,` All decorators are exported from the `),Aa(135,`code`),bT(136,`@nestjs/graphql`),cf(),bT(137,` package.
`),cf(),Aa(138,`h3`,13),bT(139,`Enums`),cf(),Aa(140,`p`),bT(141,`Enumeration types are a special kind of scalar restricted to a particular set of allowed values (see `),Aa(142,`a`,14),bT(143,`enumeration types`),cf(),bT(144,` in the GraphQL documentation). They allow you to:`),cf(),Aa(145,`ul`)(146,`li`),bT(147,`validate that any arguments of this type are one of the allowed values`),cf(),Aa(148,`li`),bT(149,`communicate through the type system that a field will always be one of a finite set of values`),cf()(),Aa(150,`h4`,15)(151,`span`),bT(152,`Code first`),cf()(),Aa(153,`p`),bT(154,`In the code first approach, you define a GraphQL enum type by creating a TypeScript enum:`),cf(),Aa(155,`app-copy-button`)(156,`pre`)(157,`code`,7),bT(158,`
export enum AllowedColor {
  RED,
  GREEN,
  BLUE,
}
`),cf()()(),Aa(159,`p`),bT(160,`With this in place, register the `),Aa(161,`code`),bT(162,`AllowedColor`),cf(),bT(163,` enum using the `),Aa(164,`code`),bT(165,`registerEnumType`),cf(),bT(166,` function exported from the `),Aa(167,`code`),bT(168,`@nestjs/graphql`),cf(),bT(169,` package:`),cf(),Aa(170,`app-copy-button`)(171,`pre`)(172,`code`,7),bT(173,`
registerEnumType(AllowedColor, {
  name: 'AllowedColor',
});
`),cf()()(),Aa(174,`p`),bT(175,`Now you can reference `),Aa(176,`code`),bT(177,`AllowedColor`),cf(),bT(178,` in your types:`),cf(),Aa(179,`app-copy-button`)(180,`pre`)(181,`code`,7),bT(182,`
@Field(type => AllowedColor)
favoriteColor: AllowedColor;
`),cf()()(),Aa(183,`p`),bT(184,`This generates the following part of the GraphQL schema in SDL:`),cf(),Aa(185,`pre`)(186,`code`,9),bT(187,`
enum AllowedColor {
  RED
  GREEN
  BLUE
}
`),cf()(),Aa(188,`p`),bT(189,`To provide a description for the enum, pass the `),Aa(190,`code`),bT(191,`description`),cf(),bT(192,` property to the `),Aa(193,`code`),bT(194,`registerEnumType()`),cf(),bT(195,` function:`),cf(),Aa(196,`app-copy-button`)(197,`pre`)(198,`code`,7),bT(199,`
registerEnumType(AllowedColor, {
  name: 'AllowedColor',
  description: 'The supported colors.',
});
`),cf()()(),Aa(200,`p`),bT(201,`To provide descriptions for the enum values, or to mark a value as deprecated, pass the `),Aa(202,`code`),bT(203,`valuesMap`),cf(),bT(204,` property:`),cf(),Aa(205,`app-copy-button`)(206,`pre`)(207,`code`,7),bT(208,`
registerEnumType(AllowedColor, {
  name: 'AllowedColor',
  description: 'The supported colors.',
  valuesMap: {
    RED: {
      description: 'The default color.',
    },
    BLUE: {
      deprecationReason: 'Too blue.',
    },
  },
});
`),cf()()(),Aa(209,`p`),bT(210,`This generates the following GraphQL schema in SDL:`),cf(),Aa(211,`pre`)(212,`code`,9),bT(213,`
"""
The supported colors.
"""
enum AllowedColor {
  """
  The default color.
  """
  RED
  GREEN
  BLUE @deprecated(reason: "Too blue.")
}
`),cf()(),Aa(214,`h4`,16)(215,`span`),bT(216,`Schema first`),cf()(),Aa(217,`p`),bT(218,`To define an enum in the schema first approach, create a GraphQL enum with SDL:`),cf(),Aa(219,`pre`)(220,`code`,9),bT(221,`
enum AllowedColor {
  RED
  GREEN
  BLUE
}
`),cf()(),Aa(222,`p`),bT(223,`Then you can use the typings generation feature (as shown in the `),Aa(224,`a`,11),bT(225,`GraphQL quick start`),cf(),bT(226,` chapter) to generate the corresponding TypeScript definitions:`),cf(),Aa(227,`app-copy-button`)(228,`pre`)(229,`code`,7),bT(230,`
export enum AllowedColor {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE"
}
`),cf()()(),Aa(231,`p`),bT(232,`Sometimes a backend uses a different internal value for an enum than the one exposed in the public API. In this example, the API contains `),Aa(233,`code`),bT(234,`RED`),cf(),bT(235,`, but resolvers use `),Aa(236,`code`),bT(237,`#f00`),cf(),bT(238,` instead (see `),Aa(239,`a`,17),bT(240,`internal values`),cf(),bT(241,` in the Apollo documentation). To accomplish this, declare a resolver object for the `),Aa(242,`code`),bT(243,`AllowedColor`),cf(),bT(244,` enum:`),cf(),Aa(245,`app-copy-button`)(246,`pre`)(247,`code`,7),bT(248,`
export const allowedColorResolver: Partial<Record<keyof typeof AllowedColor, any>> = {
  RED: '#f00',
};
`),cf()()(),Aa(249,`blockquote`,12)(250,`strong`),bT(251,`Hint`),cf(),bT(252,` All decorators are exported from the `),Aa(253,`code`),bT(254,`@nestjs/graphql`),cf(),bT(255,` package.
`),cf(),Aa(256,`p`),bT(257,`Then pass this resolver object in the `),Aa(258,`code`),bT(259,`resolvers`),cf(),bT(260,` property of the `),Aa(261,`code`),bT(262,`GraphQLModule#forRoot()`),cf(),bT(263,` method:`),cf(),Aa(264,`app-copy-button`)(265,`pre`)(266,`code`,7),bT(267,`
GraphQLModule.forRoot({
  resolvers: {
    AllowedColor: allowedColorResolver,
  },
});
`),cf()()()(),Aa(268,`a`,18),Wa(269,`i`,19),Aa(270,`span`),bT(271,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln$1,Jc],encapsulation:2})}return i})();var ln=[{path:`quick-start`,component:H,data:{title:`GraphQL + TypeScript`}},{path:`resolvers-map`,redirectTo:`resolvers`},{path:`resolvers`,component:O,data:{title:`GraphQL + TypeScript - Resolvers`}},{path:`mutations`,component:N,data:{title:`GraphQL + TypeScript - Mutations`}},{path:`scalars`,component:W,data:{title:`GraphQL + TypeScript - Scalars`}},{path:`subscriptions`,component:z,data:{title:`GraphQL + TypeScript - Subscriptions`}},{path:`guards-interceptors`,redirectTo:`other-features`},{path:`tooling`,redirectTo:`other-features`},{path:`other-features`,component:Q,data:{title:`GraphQL + TypeScript - Other features`}},{path:`federation`,component:G,data:{title:`GraphQL + TypeScript - Federation`}},{path:`directives`,component:D,data:{title:`GraphQL + TypeScript - Directives`}},{path:`field-middleware`,component:P,data:{title:`GraphQL + TypeScript - Field middleware`}},{path:`complexity`,component:L,data:{title:`GraphQL + TypeScript - Complexity`}},{path:`extensions`,component:R,data:{title:`GraphQL + TypeScript - Extensions`}},{path:`enums`,redirectTo:`unions-and-enums`},{path:`unions`,redirectTo:`unions-and-enums`},{path:`unions-and-enums`,component:V,data:{title:`GraphQL + TypeScript - Unions and Enums`}},{path:`plugins`,component:B,data:{title:`GraphQL + TypeScript - Plugins`}},{path:`interfaces`,component:M,data:{title:`GraphQL + TypeScript - Interfaces`}},{path:`sharing-models`,component:J,data:{title:`GraphQL + TypeScript - Sharing models`}},{path:`mapped-types`,component:U,data:{title:`GraphQL + TypeScript - Mapped types`}},{path:`cli-plugin`,component:j,data:{title:`GraphQL + TypeScript - CLI Plugin`}},{path:`generating-sdl`,component:Y,data:{title:`GraphQL + TypeScript - Generating SDL`}}];export{ln as GRAPHQL_ROUTES};