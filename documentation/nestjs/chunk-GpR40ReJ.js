import{C as hf,E as lf,M as xy,N as zC,T as jT,_ as Wa,a as u,b as cf,c as l,d as Jc,g as Qy,h as Ly,i as g,j as uf,k as tT,l as Aa,m as LT,n as ln,r as xt,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var P=(()=>{class a extends xt{static ɵfac=(()=>{let r;return function(s){return(r||(r=im(a)))(s||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-cli-plugin`]],features:[xy],decls:612,vars:2,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`cli-plugin`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.typescriptlang.org/docs/handbook/decorators.html`],[1,`info`],[`appAnchor`,``,`id`,`overview`],[1,`language-typescript`],[`href`,`/openapi/cli-plugin#using-the-cli-plugin`],[`routerLink`,`/openapi/mapped-types`],[`appAnchor`,``,`id`,`comments-introspection`],[1,`language-ts`],[`appAnchor`,``,`id`,`using-the-cli-plugin`],[`routerLink`,`/cli/overview`],[1,`language-javascript`],[`appAnchor`,``,`id`,`swc-builder`],[`href`,`/recipes/swc#type-checking`],[1,`language-bash`],[`href`,`/recipes/swc#monorepo-and-cli-plugins`],[`appAnchor`,``,`id`,`integration-with-ts-jest-e2e-tests`],[1,`language-json`],[`appAnchor`,``,`id`,`troubleshooting-jest-e2e-tests`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/openapi/cli-plugin.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,s){d&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`CLI Plugin`),cf(),Aa(5,`p`)(6,`a`,4),bT(7,`TypeScript`),cf(),bT(8,`'s metadata reflection system has several limitations. For instance, it can't determine which properties a class consists of, or whether a given property is optional or required. However, some of these constraints can be addressed at compile time. Nest provides a plugin that enhances the TypeScript compilation process to reduce the amount of boilerplate code required.`),cf(),Aa(9,`blockquote`,5)(10,`strong`),bT(11,`Hint`),cf(),bT(12,` This plugin is `),Aa(13,`strong`),bT(14,`opt-in`),cf(),bT(15,`. If you prefer, you can declare all decorators manually, or only specific decorators where you need them.
`),cf(),Aa(16,`h4`,6)(17,`span`),bT(18,`Overview`),cf()(),Aa(19,`p`),bT(20,`The Swagger plugin automatically:`),cf(),Aa(21,`ul`)(22,`li`),bT(23,`annotates all DTO properties with `),Aa(24,`code`),bT(25,`@ApiProperty()`),cf(),bT(26,`, unless `),Aa(27,`code`),bT(28,`@ApiHideProperty()`),cf(),bT(29,` is used`),cf(),Aa(30,`li`),bT(31,`sets the `),Aa(32,`code`),bT(33,`required`),cf(),bT(34,` property depending on the question mark (e.g., `),Aa(35,`code`),bT(36,`name?: string`),cf(),bT(37,` sets `),Aa(38,`code`),bT(39,`required: false`),cf(),bT(40,`)`),cf(),Aa(41,`li`),bT(42,`sets the `),Aa(43,`code`),bT(44,`type`),cf(),bT(45,` or `),Aa(46,`code`),bT(47,`enum`),cf(),bT(48,` property depending on the type (arrays are supported as well)`),cf(),Aa(49,`li`),bT(50,`sets the `),Aa(51,`code`),bT(52,`default`),cf(),bT(53,` property based on the assigned default value`),cf(),Aa(54,`li`),bT(55,`sets several validation rules based on `),Aa(56,`code`),bT(57,`class-validator`),cf(),bT(58,` decorators (if `),Aa(59,`code`),bT(60,`classValidatorShim`),cf(),bT(61,` is set to `),Aa(62,`code`),bT(63,`true`),cf(),bT(64,`)`),cf(),Aa(65,`li`),bT(66,`adds a response decorator to every endpoint with a proper status and `),Aa(67,`code`),bT(68,`type`),cf(),bT(69,` (response model)`),cf(),Aa(70,`li`),bT(71,`generates descriptions for properties and endpoints based on comments (if `),Aa(72,`code`),bT(73,`introspectComments`),cf(),bT(74,` is set to `),Aa(75,`code`),bT(76,`true`),cf(),bT(77,`)`),cf(),Aa(78,`li`),bT(79,`generates example values for properties based on comments (if `),Aa(80,`code`),bT(81,`introspectComments`),cf(),bT(82,` is set to `),Aa(83,`code`),bT(84,`true`),cf(),bT(85,`)`),cf()(),Aa(86,`p`),bT(87,`For the plugin to analyze a DTO file, its filename `),Aa(88,`strong`),bT(89,`must have`),cf(),bT(90,` one of the following suffixes: `),Aa(91,`code`),bT(92,`['.dto.ts', '.entity.ts']`),cf(),bT(93,` (e.g., `),Aa(94,`code`),bT(95,`create-user.dto.ts`),cf(),bT(96,`).`),cf(),Aa(97,`p`),bT(98,`If you use a different suffix, adjust the plugin's behavior with the `),Aa(99,`code`),bT(100,`dtoFileNameSuffix`),cf(),bT(101,` option (see below).`),cf(),Aa(102,`p`),bT(103,`Without the plugin, providing an interactive experience with the Swagger UI means duplicating a lot of code to tell the package how your models/components should be declared in the specification. For example, you could define a simple `),Aa(104,`code`),bT(105,`CreateUserDto`),cf(),bT(106,` class as follows:`),cf(),Aa(107,`app-copy-button`)(108,`pre`)(109,`code`,7),bT(110,`
export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ enum: RoleEnum, default: [], isArray: true })
  roles: RoleEnum[] = [];

  @ApiProperty({ required: false, default: true })
  isEnabled?: boolean = true;
}
`),cf()()(),Aa(111,`p`),bT(112,`While not a significant issue in medium-sized projects, this becomes verbose and hard to maintain once you have a large set of classes.`),cf(),Aa(113,`p`),bT(114,`With the `),Aa(115,`a`,8),bT(116,`Swagger plugin enabled`),cf(),bT(117,`, you can declare the class above without any decorators:`),cf(),Aa(118,`app-copy-button`)(119,`pre`)(120,`code`,7),bT(121,`
export class CreateUserDto {
  email: string;
  password: string;
  roles: RoleEnum[] = [];
  isEnabled?: boolean = true;
}
`),cf()()(),Aa(122,`blockquote`,5)(123,`strong`),bT(124,`Note`),cf(),bT(125,` The Swagger plugin derives the `),Aa(126,`code`),bT(127,`@ApiProperty()`),cf(),bT(128,` annotations from the TypeScript types and `),Aa(129,`code`),bT(130,`class-validator`),cf(),bT(131,` decorators, which describe your API in the generated Swagger UI documentation. Runtime validation, however, is still handled by the `),Aa(132,`code`),bT(133,`class-validator`),cf(),bT(134,` decorators, so you must keep using validators like `),Aa(135,`code`),bT(136,`IsEmail()`),cf(),bT(137,`, `),Aa(138,`code`),bT(139,`IsNumber()`),cf(),bT(140,`, etc.
`),cf(),Aa(141,`p`),bT(142,`In other words, if you rely on automatic annotations for the documentation and still want runtime validation, you still need the `),Aa(143,`code`),bT(144,`class-validator`),cf(),bT(145,` decorators.`),cf(),Aa(146,`blockquote`,5)(147,`strong`),bT(148,`Hint`),cf(),bT(149,` When you use `),Aa(150,`a`,9),bT(151,`mapped type utilities`),cf(),bT(152,` (like `),Aa(153,`code`),bT(154,`PartialType`),cf(),bT(155,`) in DTOs, import them from `),Aa(156,`code`),bT(157,`@nestjs/swagger`),cf(),bT(158,` instead of `),Aa(159,`code`),bT(160,`@nestjs/mapped-types`),cf(),bT(161,` so that the plugin picks up the schema.
`),cf(),Aa(162,`p`),bT(163,`The plugin adds the appropriate decorators on the fly, based on the `),Aa(164,`strong`),bT(165,`Abstract Syntax Tree`),cf(),bT(166,`, so you don't have to scatter `),Aa(167,`code`),bT(168,`@ApiProperty()`),cf(),bT(169,` decorators throughout the code.`),cf(),Aa(170,`blockquote`,5)(171,`strong`),bT(172,`Hint`),cf(),bT(173,` The plugin generates any missing Swagger properties. To override one, set it explicitly via `),Aa(174,`code`),bT(175,`@ApiProperty()`),cf(),bT(176,`.
`),cf(),Aa(177,`h4`,10)(178,`span`),bT(179,`Comments introspection`),cf()(),Aa(180,`p`),bT(181,`With the comments introspection feature enabled, the CLI plugin generates descriptions and example values for properties based on comments.`),cf(),Aa(182,`p`),bT(183,`For example, consider a `),Aa(184,`code`),bT(185,`roles`),cf(),bT(186,` property:`),cf(),Aa(187,`app-copy-button`)(188,`pre`)(189,`code`,7),bT(190,`
/**
 * A list of user's roles
 * @example ['admin']
 */
@ApiProperty({
  description: \`A list of user's roles\`,
  example: ['admin'],
})
roles: RoleEnum[] = [];
`),cf()()(),Aa(191,`p`),bT(192,`You must duplicate both the description and the example values. With `),Aa(193,`code`),bT(194,`introspectComments`),cf(),bT(195,` enabled, the CLI plugin extracts these comments and provides descriptions (and examples, if defined) for properties automatically. The property above can then be declared as follows:`),cf(),Aa(196,`app-copy-button`)(197,`pre`)(198,`code`,7),bT(199,`
/**
 * A list of user's roles
 * @example ['admin']
 */
roles: RoleEnum[] = [];
`),cf()()(),Aa(200,`p`),bT(201,`The `),Aa(202,`code`),bT(203,`dtoKeyOfComment`),cf(),bT(204,` and `),Aa(205,`code`),bT(206,`controllerKeyOfComment`),cf(),bT(207,` plugin options customize how the plugin assigns comment values to the `),Aa(208,`code`),bT(209,`ApiProperty`),cf(),bT(210,` and `),Aa(211,`code`),bT(212,`ApiOperation`),cf(),bT(213,` decorators, respectively. See the example below:`),cf(),Aa(214,`app-copy-button`)(215,`pre`)(216,`code`,7),bT(217,`
export class SomeController {
  /**
   * Create some resource
   */
  @Post()
  create() {}
}
`),cf()()(),Aa(218,`p`),bT(219,`This is equivalent to the following:`),cf(),Aa(220,`app-copy-button`)(221,`pre`)(222,`code`,7),bT(223,`
@ApiOperation({ summary: "Create some resource" })
`),cf()()(),Aa(224,`blockquote`,5)(225,`strong`),bT(226,`Hint`),cf(),bT(227,` For models, the same logic applies, but with the `),Aa(228,`code`),bT(229,`ApiProperty`),cf(),bT(230,` decorator instead.
`),cf(),Aa(231,`p`),bT(232,`For controllers, you can provide not only a summary but also a description (remarks), tags (such as `),Aa(233,`code`),bT(234,`@deprecated`),cf(),bT(235,`), and response examples, like this:`),cf(),Aa(236,`app-copy-button`)(237,`pre`)(238,`code`,11),bT(239,`
/**
 * Create a new cat
 *
 * @remarks This operation allows you to create a new cat.
 *
 * @deprecated
 * @throws {500} Something went wrong.
 * @throws {400} Bad Request.
 */
@Post()
async create(): Promise<Cat> {}
`),cf()()(),Aa(240,`p`),bT(241,`As of `),Aa(242,`code`),bT(243,`@nestjs/swagger`),cf(),bT(244,` v12, the plugin (with `),Aa(245,`code`),bT(246,`introspectComments`),cf(),bT(247,` enabled) picks up `),Aa(248,`code`),bT(249,`@param`),cf(),bT(250,` tags as well, so route parameter descriptions can come from the same doc comment:`),cf(),Aa(251,`app-copy-button`)(252,`pre`)(253,`code`,11),bT(254,`
/**
 * List cats
 *
 * @param breed Filter results by breed
 * @param limit Maximum number of results to return
 */
@Get()
findAll(@Query('breed') breed?: string, @Query('limit') limit?: number) {}
`),cf()()(),Aa(255,`p`),bT(256,`The plugin adds a `),Aa(257,`code`),bT(258,`description`),cf(),bT(259,` to the `),Aa(260,`code`),bT(261,`@ApiQuery()`),cf(),bT(262,` it already generates for optional `),Aa(263,`code`),bT(264,`@Query()`),cf(),bT(265,` parameters, generates `),Aa(266,`code`),bT(267),cf(),bT(268,` for documented required query parameters, and generates `),Aa(269,`code`),bT(270),cf(),bT(271,` for documented `),Aa(272,`code`),bT(273,`@Param()`),cf(),bT(274,` parameters.`),cf(),Aa(275,`p`),bT(276,`Descriptions are matched by the `),Aa(277,`strong`),bT(278,`variable name`),cf(),bT(279,`, which is what `),Aa(280,`code`),bT(281,`@param`),cf(),bT(282,` documents. So `),Aa(283,`code`),bT(284,`@Query('order_by') orderBy: string`),cf(),bT(285,` is documented as `),Aa(286,`code`),bT(287,`@param orderBy ...`),cf(),bT(288,`, not `),Aa(289,`code`),bT(290,`@param order_by ...`),cf(),bT(291,`. Explicit `),Aa(292,`code`),bT(293,`@ApiQuery()`),cf(),bT(294,` / `),Aa(295,`code`),bT(296,`@ApiParam()`),cf(),bT(297,` decorators always take precedence and are never overwritten.`),cf(),Aa(298,`h4`,12)(299,`span`),bT(300,`Using the CLI plugin`),cf()(),Aa(301,`p`),bT(302,`To enable the plugin, open `),Aa(303,`code`),bT(304,`nest-cli.json`),cf(),bT(305,` (if you use `),Aa(306,`a`,13),bT(307,`Nest CLI`),cf(),bT(308,`) and add the following `),Aa(309,`code`),bT(310,`plugins`),cf(),bT(311,` configuration:`),cf(),Aa(312,`pre`)(313,`code`,14),bT(314,`
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": ["@nestjs/swagger"]
  }
}
`),cf()(),Aa(315,`p`),bT(316,`Use the `),Aa(317,`code`),bT(318,`options`),cf(),bT(319,` property to customize the behavior of the plugin:`),cf(),Aa(320,`pre`)(321,`code`,14),bT(322,`
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": [
      {
        "name": "@nestjs/swagger",
        "options": {
          "classValidatorShim": false,
          "introspectComments": true,
          "skipAutoHttpCode": true
        }
      }
    ]
  }
}
`),cf()(),Aa(323,`p`),bT(324,`The `),Aa(325,`code`),bT(326,`options`),cf(),bT(327,` property accepts the following options (among others):`),cf(),Aa(328,`app-copy-button`)(329,`pre`)(330,`code`,7),bT(331,`
export interface PluginOptions {
  dtoFileNameSuffix?: string | string[];
  controllerFileNameSuffix?: string | string[];
  classValidatorShim?: boolean;
  classTransformerShim?: boolean | 'exclusive';
  dtoKeyOfComment?: string;
  controllerKeyOfComment?: string;
  introspectComments?: boolean;
  skipAutoHttpCode?: boolean;
  skipDefaultValues?: boolean;
  autoFillEnumName?: boolean;
  esmCompatible?: boolean;
}
`),cf()()(),Aa(332,`table`)(333,`tr`)(334,`th`),bT(335,`Option`),cf(),Aa(336,`th`),bT(337,`Default`),cf(),Aa(338,`th`),bT(339,`Description`),cf()(),Aa(340,`tr`)(341,`td`)(342,`code`),bT(343,`dtoFileNameSuffix`),cf()(),Aa(344,`td`)(345,`code`),bT(346,`['.dto.ts', '.entity.ts']`),cf()(),Aa(347,`td`),bT(348,`DTO (Data Transfer Object) files suffix`),cf()(),Aa(349,`tr`)(350,`td`)(351,`code`),bT(352,`controllerFileNameSuffix`),cf()(),Aa(353,`td`)(354,`code`),bT(355,`['.controller.ts']`),cf()(),Aa(356,`td`),bT(357,`Controller files suffix`),cf()(),Aa(358,`tr`)(359,`td`)(360,`code`),bT(361,`classValidatorShim`),cf()(),Aa(362,`td`)(363,`code`),bT(364,`true`),cf()(),Aa(365,`td`),bT(366,`If set to `),Aa(367,`code`),bT(368,`true`),cf(),bT(369,`, the plugin reuses `),Aa(370,`code`),bT(371,`class-validator`),cf(),bT(372,` validation decorators (e.g., `),Aa(373,`code`),bT(374,`@Max(10)`),cf(),bT(375,` adds `),Aa(376,`code`),bT(377,`max: 10`),cf(),bT(378,` to the schema definition)`),cf()(),Aa(379,`tr`)(380,`td`)(381,`code`),bT(382,`classTransformerShim`),cf()(),Aa(383,`td`)(384,`code`),bT(385,`false`),cf()(),Aa(386,`td`),bT(387,`If set to `),Aa(388,`code`),bT(389,`true`),cf(),bT(390,`, the plugin skips properties decorated with `),Aa(391,`code`),bT(392,`class-transformer`),cf(),bT(393,`'s `),Aa(394,`code`),bT(395,`@Exclude()`),cf(),bT(396,`. If set to `),Aa(397,`code`),bT(398,`'exclusive'`),cf(),bT(399,`, it documents only properties decorated with `),Aa(400,`code`),bT(401,`@Expose()`),cf(),bT(402,` or `),Aa(403,`code`),bT(404,`@ApiProperty()`),cf()()(),Aa(405,`tr`)(406,`td`)(407,`code`),bT(408,`dtoKeyOfComment`),cf()(),Aa(409,`td`)(410,`code`),bT(411,`'description'`),cf()(),Aa(412,`td`),bT(413,`The property key to set the comment text to on `),Aa(414,`code`),bT(415,`ApiProperty`),cf(),bT(416,`.`),cf()(),Aa(417,`tr`)(418,`td`)(419,`code`),bT(420,`controllerKeyOfComment`),cf()(),Aa(421,`td`)(422,`code`),bT(423,`'summary'`),cf()(),Aa(424,`td`),bT(425,`The property key to set the comment text to on `),Aa(426,`code`),bT(427,`ApiOperation`),cf(),bT(428,`.`),cf()(),Aa(429,`tr`)(430,`td`)(431,`code`),bT(432,`introspectComments`),cf()(),Aa(433,`td`)(434,`code`),bT(435,`false`),cf()(),Aa(436,`td`),bT(437,`If set to `),Aa(438,`code`),bT(439,`true`),cf(),bT(440,`, the plugin generates descriptions and example values for properties based on comments`),cf()(),Aa(441,`tr`)(442,`td`)(443,`code`),bT(444,`skipAutoHttpCode`),cf()(),Aa(445,`td`)(446,`code`),bT(447,`false`),cf()(),Aa(448,`td`),bT(449,`Disables the automatic addition of `),Aa(450,`code`),bT(451,`@HttpCode()`),cf(),bT(452,` in controllers`),cf()(),Aa(453,`tr`)(454,`td`)(455,`code`),bT(456,`skipDefaultValues`),cf()(),Aa(457,`td`)(458,`code`),bT(459,`false`),cf()(),Aa(460,`td`),bT(461,`If set to `),Aa(462,`code`),bT(463,`true`),cf(),bT(464,`, the plugin doesn't set the `),Aa(465,`code`),bT(466,`default`),cf(),bT(467,` property from property initializers`),cf()(),Aa(468,`tr`)(469,`td`)(470,`code`),bT(471,`autoFillEnumName`),cf()(),Aa(472,`td`)(473,`code`),bT(474,`false`),cf()(),Aa(475,`td`),bT(476,`If set to `),Aa(477,`code`),bT(478,`true`),cf(),bT(479,`, the plugin sets `),Aa(480,`code`),bT(481,`enumName`),cf(),bT(482,` to the name of the enum type for enum properties that don't declare one`),cf()(),Aa(483,`tr`)(484,`td`)(485,`code`),bT(486,`esmCompatible`),cf()(),Aa(487,`td`),bT(488,`Detected per file`),cf(),Aa(489,`td`),bT(490,`Makes the generated code compatible with ESM (`),Aa(491,`code`),bT(492,`{ "type": "module" }`),cf(),bT(493,`). When omitted, the plugin detects whether each file is emitted as ESM from your compiler options and `),Aa(494,`code`),bT(495,`package.json`),cf()()()(),Aa(496,`p`),bT(497,`Delete the `),Aa(498,`code`),bT(499,`/dist`),cf(),bT(500,` folder and rebuild your application whenever you update plugin options.`),cf(),Aa(501,`p`),bT(502,`If you don't use the CLI but have a custom `),Aa(503,`code`),bT(504,`webpack`),cf(),bT(505,` configuration instead, you can use this plugin in combination with `),Aa(506,`code`),bT(507,`ts-loader`),cf(),bT(508,`:`),cf(),Aa(509,`pre`)(510,`code`,14),bT(511,`
getCustomTransformers: (program: any) => ({
  before: [require('@nestjs/swagger/plugin').before({}, program)]
}),
`),cf()(),Aa(512,`h4`,15)(513,`span`),bT(514,`SWC builder`),cf()(),Aa(515,`p`),bT(516,`For standard (non-monorepo) setups, using CLI plugins with the SWC builder requires type checking to be enabled, as described in the `),Aa(517,`a`,16),bT(518,`SWC recipe`),cf(),bT(519,`.`),cf(),Aa(520,`pre`)(521,`code`,17),bT(522,`
$ nest start -b swc --type-check
`),cf()(),Aa(523,`p`),bT(524,`For monorepo setups, follow the `),Aa(525,`a`,18),bT(526,`monorepo and CLI plugins`),cf(),bT(527,` instructions to create a `),Aa(528,`code`),bT(529,`generate-metadata.ts`),cf(),bT(530,` file, and then run it:`),cf(),Aa(531,`pre`)(532,`code`,17),bT(533,`
$ npx ts-node src/generate-metadata.ts
# OR npx ts-node apps/{YOUR_APP}/src/generate-metadata.ts
`),cf()(),Aa(534,`p`),bT(535,`Then load the serialized metadata file with the `),Aa(536,`code`),bT(537,`SwaggerModule#loadPluginMetadata()`),cf(),bT(538,` method, as shown below:`),cf(),Aa(539,`app-copy-button`)(540,`pre`)(541,`code`,7),bT(542,`
import metadata from './metadata.js'; // <-- file auto-generated by the "PluginMetadataGenerator"

await SwaggerModule.loadPluginMetadata(metadata); // <-- here
const document = SwaggerModule.createDocument(app, config);
`),cf()()(),Aa(543,`h4`,19)(544,`span`),bT(545,`Integration with `),Aa(546,`code`),bT(547,`ts-jest`),cf(),bT(548,` (e2e tests)`),cf()(),Aa(549,`p`),bT(550,`To run e2e tests, `),Aa(551,`code`),bT(552,`ts-jest`),cf(),bT(553,` compiles your source code files on the fly, in memory. This means it doesn't use the Nest CLI compiler, and it doesn't apply any plugins or perform AST transformations.`),cf(),Aa(554,`p`),bT(555,`To enable the plugin, create the following file in your e2e tests directory:`),cf(),Aa(556,`pre`)(557,`code`,14),bT(558,`
const transformer = require('@nestjs/swagger/plugin');

module.exports.name = 'nestjs-swagger-transformer';
// you should change the version number anytime you change the configuration below - otherwise, jest will not detect changes
module.exports.version = 1;

module.exports.factory = (cs) => {
  return transformer.before(
    {
      // @nestjs/swagger/plugin options (can be empty)
    },
    cs.program, // "cs.tsCompiler.program" for older versions of Jest (<= v27)
  );
};
`),cf()(),Aa(559,`p`),bT(560,`With this in place, import the AST transformer in your `),Aa(561,`code`),bT(562,`jest`),cf(),bT(563,` configuration file. By default (in the starter application), the e2e test configuration file is located in the `),Aa(564,`code`),bT(565,`test`),cf(),bT(566,` folder and is named `),Aa(567,`code`),bT(568,`jest-e2e.json`),cf(),bT(569,`.`),cf(),Aa(570,`p`),bT(571,`If you use `),Aa(572,`code`),bT(573,`jest@<29`),cf(),bT(574,`, use the snippet below:`),cf(),Aa(575,`pre`)(576,`code`,20),bT(577,`
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
`),cf()(),Aa(578,`p`),bT(579,`If you use `),Aa(580,`code`),bT(581,`jest@^29`),cf(),bT(582,`, use the snippet below instead, because the previous approach is deprecated:`),cf(),Aa(583,`pre`)(584,`code`,20),bT(585,`
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
`),cf()(),Aa(586,`h4`,21)(587,`span`),bT(588,`Troubleshooting `),Aa(589,`code`),bT(590,`jest`),cf(),bT(591,` (e2e tests)`),cf()(),Aa(592,`p`),bT(593,`If `),Aa(594,`code`),bT(595,`jest`),cf(),bT(596,` doesn't seem to pick up your configuration changes, Jest may have `),Aa(597,`strong`),bT(598,`cached`),cf(),bT(599,` the build result. To apply the new configuration, clear Jest's cache directory by running the following command in your NestJS project folder:`),cf(),Aa(600,`pre`)(601,`code`,17),bT(602,`
$ npx jest --clearCache
`),cf()(),Aa(603,`p`),bT(604,`If the automatic cache clearance fails, remove the cache folder manually with the following commands:`),cf(),Aa(605,`pre`)(606,`code`,17),bT(607,`
# Find jest cache directory (usually /tmp/jest_rs)
# by running the following command in your NestJS project root
$ npx jest --showConfig | grep cache
# ex result:
#   "cache": true,
#   "cacheDirectory": "/tmp/jest_rs"

# Remove or empty the Jest cache directory
$ rm -rf  <cacheDirectory value>
# ex:
# rm -rf /tmp/jest_rs
`),cf()()(),Aa(608,`a`,22),Wa(609,`i`,23),Aa(610,`span`),bT(611,`Edit on GitHub`),cf()()()),d&2&&(zC(267),hf(`@ApiQuery(`,`{`,` name, description })`),zC(3),hf(`@ApiParam(`,`{`,` name, description })`))},dependencies:[Lt,ln,Jc],encapsulation:2})}return a})();var I=(()=>{class a extends xt{static ɵfac=(()=>{let r;return function(s){return(r||(r=im(a)))(s||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-decorators`]],features:[xy],decls:205,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`decorators`],[`href`,`/openapi/operations#responses`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/openapi/decorators.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,s){d&1&&(uf(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Decorators`),lf(),uf(5,`p`),bT(6,`All OpenAPI decorators have an `),uf(7,`code`),bT(8,`Api`),lf(),bT(9,` prefix to distinguish them from the core decorators. The table below lists the exported decorators, along with the level at which each one can be applied.`),lf(),uf(10,`table`),Ly(11,`thead`),uf(12,`tbody`)(13,`tr`)(14,`td`)(15,`code`),bT(16,`@ApiBasicAuth()`),lf()(),uf(17,`td`),bT(18,`Method / Controller`),lf()(),uf(19,`tr`)(20,`td`)(21,`code`),bT(22,`@ApiBearerAuth()`),lf()(),uf(23,`td`),bT(24,`Method / Controller`),lf()(),uf(25,`tr`)(26,`td`)(27,`code`),bT(28,`@ApiBody()`),lf()(),uf(29,`td`),bT(30,`Method`),lf()(),uf(31,`tr`)(32,`td`)(33,`code`),bT(34,`@ApiConsumes()`),lf()(),uf(35,`td`),bT(36,`Method / Controller`),lf()(),uf(37,`tr`)(38,`td`)(39,`code`),bT(40,`@ApiCookieAuth()`),lf()(),uf(41,`td`),bT(42,`Method / Controller`),lf()(),uf(43,`tr`)(44,`td`)(45,`code`),bT(46,`@ApiExcludeController()`),lf()(),uf(47,`td`),bT(48,`Controller`),lf()(),uf(49,`tr`)(50,`td`)(51,`code`),bT(52,`@ApiExcludeEndpoint()`),lf()(),uf(53,`td`),bT(54,`Method`),lf()(),uf(55,`tr`)(56,`td`)(57,`code`),bT(58,`@ApiDefaultGetter()`),lf()(),uf(59,`td`),bT(60,`Method`),lf()(),uf(61,`tr`)(62,`td`)(63,`code`),bT(64,`@ApiExtension()`),lf()(),uf(65,`td`),bT(66,`Method / Controller`),lf()(),uf(67,`tr`)(68,`td`)(69,`code`),bT(70,`@ApiExtraModels()`),lf()(),uf(71,`td`),bT(72,`Method / Controller / Model`),lf()(),uf(73,`tr`)(74,`td`)(75,`code`),bT(76,`@ApiHeader()`),lf()(),uf(77,`td`),bT(78,`Method / Controller`),lf()(),uf(79,`tr`)(80,`td`)(81,`code`),bT(82,`@ApiHeaders()`),lf()(),uf(83,`td`),bT(84,`Method / Controller`),lf()(),uf(85,`tr`)(86,`td`)(87,`code`),bT(88,`@ApiHideProperty()`),lf()(),uf(89,`td`),bT(90,`Model`),lf()(),uf(91,`tr`)(92,`td`)(93,`code`),bT(94,`@ApiIncludeEndpoint()`),lf()(),uf(95,`td`),bT(96,`Method`),lf()(),uf(97,`tr`)(98,`td`)(99,`code`),bT(100,`@ApiLink()`),lf()(),uf(101,`td`),bT(102,`Method`),lf()(),uf(103,`tr`)(104,`td`)(105,`code`),bT(106,`@ApiOAuth2()`),lf()(),uf(107,`td`),bT(108,`Method / Controller`),lf()(),uf(109,`tr`)(110,`td`)(111,`code`),bT(112,`@ApiOperation()`),lf()(),uf(113,`td`),bT(114,`Method`),lf()(),uf(115,`tr`)(116,`td`)(117,`code`),bT(118,`@ApiParam()`),lf()(),uf(119,`td`),bT(120,`Method / Controller`),lf()(),uf(121,`tr`)(122,`td`)(123,`code`),bT(124,`@ApiProduces()`),lf()(),uf(125,`td`),bT(126,`Method / Controller`),lf()(),uf(127,`tr`)(128,`td`)(129,`code`),bT(130,`@ApiSchema()`),lf()(),uf(131,`td`),bT(132,`Model`),lf()(),uf(133,`tr`)(134,`td`)(135,`code`),bT(136,`@ApiProperty()`),lf()(),uf(137,`td`),bT(138,`Model`),lf()(),uf(139,`tr`)(140,`td`)(141,`code`),bT(142,`@ApiPropertyOptional()`),lf()(),uf(143,`td`),bT(144,`Model`),lf()(),uf(145,`tr`)(146,`td`)(147,`code`),bT(148,`@ApiQuery()`),lf()(),uf(149,`td`),bT(150,`Method / Controller`),lf()(),uf(151,`tr`)(152,`td`)(153,`code`),bT(154,`@ApiResponse()`),lf()(),uf(155,`td`),bT(156,`Method / Controller`),lf()(),uf(157,`tr`)(158,`td`)(159,`code`),bT(160,`@ApiResponseProperty()`),lf()(),uf(161,`td`),bT(162,`Model`),lf()(),uf(163,`tr`)(164,`td`)(165,`code`),bT(166,`@ApiSecurity()`),lf()(),uf(167,`td`),bT(168,`Method / Controller`),lf()(),uf(169,`tr`)(170,`td`)(171,`code`),bT(172,`@ApiTags()`),lf()(),uf(173,`td`),bT(174,`Method / Controller`),lf()(),uf(175,`tr`)(176,`td`)(177,`code`),bT(178,`@ApiCallbacks()`),lf()(),uf(179,`td`),bT(180,`Method / Controller`),lf()(),uf(181,`tr`)(182,`td`)(183,`code`),bT(184,`@ApiWebhook()`),lf()(),uf(185,`td`),bT(186,`Method`),lf()()()(),uf(187,`p`),bT(188,`The shorthand response decorators (e.g., `),uf(189,`code`),bT(190,`@ApiOkResponse()`),lf(),bT(191,` and `),uf(192,`code`),bT(193,`@ApiNotFoundResponse()`),lf(),bT(194,`, listed in the `),uf(195,`a`,4),bT(196,`operations`),lf(),bT(197,` chapter) can be applied at the same levels as `),uf(198,`code`),bT(199,`@ApiResponse()`),lf(),bT(200,`.`),lf()(),uf(201,`a`,5),Ly(202,`i`,6),uf(203,`span`),bT(204,`Edit on GitHub`),lf()()())},encapsulation:2})}return a})();var k=(()=>{class a extends xt{static ɵfac=(()=>{let r;return function(s){return(r||(r=im(a)))(s||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-introduction`]],features:[xy],decls:423,vars:20,consts:[[`contentReference`,``],[`appcca273e97cedb24224e920028d0e9592d1bf6825`,``],[`appccacd4c4c3104d581fb61a154fe04a739d1f30bf`,``],[`appd0b770b798a1761aba26a4b22862088c9a4af89b`,``],[`app04ab956ccbae2584a78c297ddc8faff7790c2bd6`,``],[`app71cb15e212ebdbaf93961527c17714a5b68f7fe6`,``],[1,`content`],[1,`content-inner`],[`id`,`introduction`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://swagger.io/specification/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/swagger`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[1,`warning`],[`appAnchor`,``,`id`,`bootstrap`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://swagger.io/specification/#openapi-document`],[`href`,`/openapi/introduction#document-options`],[`href`,`/openapi/introduction#setup-options`],[`src`,`/assets/swagger1.png`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP`],[`routerLink`,`/security/helmet`],[`href`,`/security/helmet#swagger-ui-and-graphql-ides`],[`appAnchor`,``,`id`,`document-options`],[1,`language-TypeScript`],[`appAnchor`,``,`id`,`standard-schema-zod-valibot`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev/`],[`href`,`/controllers#request-object`],[`appAnchor`,``,`id`,`libraries-that-need-no-configuration`],[`appAnchor`,``,`id`,`supplying-a-converter`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/samchungy/zod-openapi`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/fabian-hiller/valibot/tree/main/packages/to-json-schema`],[`appAnchor`,``,`id`,`supporting-several-libraries-at-once`],[`appAnchor`,``,`id`,`setup-options`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/11-swagger`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/openapi/introduction.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,s){if(d&1&&(Aa(0,`div`,6,0)(2,`div`,7)(3,`h3`,8),bT(4,`Introduction`),cf(),Aa(5,`p`),bT(6,`The `),Aa(7,`a`,9),bT(8,`OpenAPI`),cf(),bT(9,` specification is a language-agnostic definition format for describing RESTful APIs. Nest provides a dedicated `),Aa(10,`a`,10),bT(11,`module`),cf(),bT(12,` that generates such a specification from decorators in your code.`),cf(),Aa(13,`h4`,11)(14,`span`),bT(15,`Installation`),cf()(),Aa(16,`p`),bT(17,`To begin, install the required dependency:`),cf(),Aa(18,`pre`)(19,`code`,12),bT(20,`
$ npm install --save @nestjs/swagger
`),cf()(),Aa(21,`blockquote`,13)(22,`strong`),bT(23,`Warning`),cf(),bT(24,` If you use Fastify, also install `),Aa(25,`code`),bT(26,`@fastify/static`),cf(),bT(27,`:
`),Aa(28,`pre`)(29,`code`,12),bT(30,`
$ npm install --save @fastify/static
`),cf()()(),Aa(31,`h4`,14)(32,`span`),bT(33,`Bootstrap`),cf()(),Aa(34,`p`),bT(35,`Once the installation is complete, open the `),Aa(36,`code`),bT(37,`main.ts`),cf(),bT(38,` file and initialize Swagger using the `),Aa(39,`code`),bT(40,`SwaggerModule`),cf(),bT(41,` class:`),cf(),Aa(42,`app-copy-button`,15)(43,`span`,16),bT(44),LT(45,`extension`),Wa(46,`app-tabs`,null,1),cf(),Aa(48,`pre`)(49,`code`,17),bT(50,`
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(51,`blockquote`,18)(52,`strong`),bT(53,`Hint`),cf(),bT(54,` Wrapping `),Aa(55,`code`),bT(56,`SwaggerModule.createDocument()`),cf(),bT(57,` in a factory function defers document generation until the document is first requested, which saves initialization time. The resulting document is a serializable object that conforms to the `),Aa(58,`a`,19),bT(59,`OpenAPI Document`),cf(),bT(60,` specification. Instead of serving it over HTTP, you can also save it as a JSON or YAML file and use it elsewhere.
`),cf(),Aa(61,`blockquote`,13)(62,`strong`),bT(63,`Warning`),cf(),bT(64,` If you call `),Aa(65,`code`),bT(66,`createDocument()`),cf(),bT(67,` eagerly (rather than in a factory function, as shown above), make sure `),Aa(68,`code`),bT(69,`app.enableVersioning()`),cf(),bT(70,` runs first. Otherwise, the generated `),Aa(71,`code`),bT(72,`paths`),cf(),bT(73,` are missing the version prefix. The factory pattern is unaffected, because the document isn't built until it is first requested.
`),cf(),Aa(74,`p`)(75,`code`),bT(76,`DocumentBuilder`),cf(),bT(77,` structures a base document that conforms to the OpenAPI Specification. Its methods let you set properties such as the title, description, and version. To create a full document (with all HTTP routes defined), use the `),Aa(78,`code`),bT(79,`createDocument()`),cf(),bT(80,` method of the `),Aa(81,`code`),bT(82,`SwaggerModule`),cf(),bT(83,` class. It takes two arguments: an application instance and the base document configuration returned by `),Aa(84,`code`),bT(85,`DocumentBuilder#build()`),cf(),bT(86,`. An optional third argument, of type `),Aa(87,`code`),bT(88,`SwaggerDocumentOptions`),cf(),bT(89,`, is covered in the `),Aa(90,`a`,20),bT(91,`document options`),cf(),bT(92,` section.`),cf(),Aa(93,`p`),bT(94,`Next, call the `),Aa(95,`code`),bT(96,`setup()`),cf(),bT(97,` method. It accepts:`),cf(),Aa(98,`ol`)(99,`li`),bT(100,`The path to mount the Swagger UI on`),cf(),Aa(101,`li`),bT(102,`An application instance`),cf(),Aa(103,`li`),bT(104,`The document object, or a factory function that returns it (as above)`),cf(),Aa(105,`li`),bT(106,`An optional configuration object (see `),Aa(107,`a`,21),bT(108,`setup options`),cf(),bT(109,`)`),cf()(),Aa(110,`p`),bT(111,`Now run the following command to start the HTTP server:`),cf(),Aa(112,`pre`)(113,`code`,12),bT(114,`
$ npm run start
`),cf()(),Aa(115,`p`),bT(116,`While the application is running, open your browser and navigate to `),Aa(117,`code`),bT(118,`http://localhost:3000/api`),cf(),bT(119,`. You should see the Swagger UI.`),cf(),Aa(120,`figure`),Wa(121,`img`,22),cf(),Aa(122,`p`),bT(123,`The `),Aa(124,`code`),bT(125,`SwaggerModule`),cf(),bT(126,` automatically reflects all of your endpoints.`),cf(),Aa(127,`blockquote`,18)(128,`strong`),bT(129,`Hint`),cf(),bT(130,` To generate and download a Swagger JSON file, navigate to `),Aa(131,`code`),bT(132,`http://localhost:3000/api-json`),cf(),bT(133,` (assuming that your Swagger documentation is available under `),Aa(134,`code`),bT(135,`http://localhost:3000/api`),cf(),bT(136,`).
You can also expose it on a route of your choice with the `),Aa(137,`code`),bT(138,`jsonDocumentUrl`),cf(),bT(139,` option of the `),Aa(140,`code`),bT(141,`setup()`),cf(),bT(142,` method:
`),Aa(143,`app-copy-button`)(144,`pre`)(145,`code`,17),bT(146,`
SwaggerModule.setup('swagger', app, documentFactory, {
  jsonDocumentUrl: 'swagger/json',
});
`),cf()()(),Aa(147,`p`),bT(148,`This exposes it at `),Aa(149,`code`),bT(150,`http://localhost:3000/swagger/json`),cf(),bT(151,`.`),cf()(),Aa(152,`blockquote`,18)(153,`strong`),bT(154,`Hint`),cf(),bT(155,` Swagger UI works with the default `),Aa(156,`a`,23),bT(157,`Content Security Policy`),cf(),bT(158,` of Nest's built-in `),Aa(159,`a`,24),bT(160,`security headers`),cf(),bT(161,`. If you add scripts through `),Aa(162,`code`),bT(163,`customJs`),cf(),bT(164,`/`),Aa(165,`code`),bT(166,`customJsStr`),cf(),bT(167,`, or serve Swagger UI over plain HTTP outside local development, see `),Aa(168,`a`,25),bT(169,`Swagger UI and GraphQL IDEs`),cf(),bT(170,` for the directives to adjust.
`),cf(),Aa(171,`blockquote`,13)(172,`strong`),bT(173,`Warning`),cf(),bT(174,` When you register `),Aa(175,`code`),bT(176,`helmet`),cf(),bT(177,` directly with Fastify instead, its `),Aa(178,`a`,23),bT(179,`CSP`),cf(),bT(180,` can block the Swagger UI. To resolve this conflict, configure the CSP as shown below:
`),Aa(181,`app-copy-button`)(182,`pre`)(183,`code`,17),bT(184,`
app.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [\`'self'\`],
      styleSrc: [\`'self'\`, \`'unsafe-inline'\`],
      imgSrc: [\`'self'\`, 'data:', 'validator.swagger.io'],
      scriptSrc: [\`'self'\`, \`https:\`, \`'unsafe-inline'\`],
    },
  },
});

// If you are not going to use CSP at all, you can use this:
app.register(helmet, {
  contentSecurityPolicy: false,
});
`),cf()()()(),Aa(185,`h4`,26)(186,`span`),bT(187,`Document options`),cf()(),Aa(188,`p`),bT(189,`When creating a document, you can pass extra options to fine-tune the library's behavior. These options are of type `),Aa(190,`code`),bT(191,`SwaggerDocumentOptions`),cf(),bT(192,`:`),cf(),Aa(193,`pre`)(194,`code`,27),bT(195,`
export interface SwaggerDocumentOptions {
  /**
   * List of modules to include in the specification
   */
  include?: Function[];

  /**
   * Additional, extra models that should be inspected and included in the specification
   */
  extraModels?: Function[];

  /**
   * If \`true\`, swagger will ignore the global prefix set through \`setGlobalPrefix()\` method
   */
  ignoreGlobalPrefix?: boolean;

  /**
   * If \`true\`, swagger will also load routes from the modules imported by \`include\` modules
   */
  deepScanRoutes?: boolean;

  /**
   * Custom operationIdFactory that will be used to generate the \`operationId\`
   * based on the \`controllerKey\`, \`methodKey\`, and version.
   * @default () => controllerKey_methodKey_version
   */
  operationIdFactory?: OperationIdFactory;

  /**
   * Custom linkNameFactory that will be used to generate the name of links
   * in the \`links\` field of responses
   *
   * @see [Link objects](https://swagger.io/docs/specification/links/)
   *
   * @default () => \`\${controllerKey}_\${methodKey}_from_\${fieldKey}\`
   */
  linkNameFactory?: (
    controllerKey: string,
    methodKey: string,
    fieldKey: string
  ) => string;

  /*
   * Generate tags automatically based on the controller name.
   * If \`false\`, you must use the \`@ApiTags()\` decorator to define tags.
   * Otherwise, the controller name without the suffix \`Controller\` will be used.
   * @default true
   */
  autoTagControllers?: boolean;

  /**
   * If \`true\`, swagger will only include routes that are decorated with the \`@ApiIncludeEndpoint()\` decorator
   * @default false
   */
  onlyIncludeDecoratedEndpoints?: boolean;

  /**
   * If \`true\`, \`default\` values that are non-plain objects at runtime
   * (e.g., \`new Date()\` or class instances) are omitted from the document,
   * so the document doesn't change on every restart.
   * @default false
   */
  excludeDynamicDefaults?: boolean;

  /**
   * If set, \`example\` and \`examples\` values on component schemas are
   * truncated once their nested object/array depth exceeds this number.
   * Per-property \`@ApiProperty({ exampleMaxDepth })\` overrides it.
   * @default undefined
   */
  exampleMaxDepth?: number;

  /**
   * Converts Standard Schema instances passed to route parameter decorators
   * into OpenAPI schemas (see "Standard Schema (Zod, Valibot)" below).
   */
  standardSchemaConverter?: StandardSchemaConverter;
}
`),cf()(),Aa(196,`p`),bT(197,`For example, to generate operation names like `),Aa(198,`code`),bT(199,`createUser`),cf(),bT(200,` instead of `),Aa(201,`code`),bT(202,`UsersController_createUser`),cf(),bT(203,`, set the following:`),cf(),Aa(204,`pre`)(205,`code`,27),bT(206,`
const options: SwaggerDocumentOptions =  {
  operationIdFactory: (
    controllerKey: string,
    methodKey: string
  ) => methodKey
};
const documentFactory = () => SwaggerModule.createDocument(app, config, options);
`),cf()(),Aa(207,`h4`,28)(208,`span`),bT(209,`Standard Schema (Zod, Valibot)`),cf()(),Aa(210,`p`),bT(211,`Nest route parameter decorators accept a `),Aa(212,`a`,29),bT(213,`Standard Schema`),cf(),bT(214,` compatible schema through their `),Aa(215,`code`),bT(216,`schema`),cf(),bT(217,` option (see the `),Aa(218,`a`,30),bT(219,`controllers`),cf(),bT(220,` chapter):`),cf(),Aa(221,`app-copy-button`,15)(222,`span`,16),bT(223),LT(224,`extension`),Wa(225,`app-tabs`,null,2),cf(),Aa(227,`pre`)(228,`code`,17),bT(229,`
import { Body, Controller, Post } from '@nestjs/common';
import { z } from 'zod';

const createCatSchema = z.object({
  name: z.string(),
  age: z.number().int().positive(),
  breed: z.string(),
});
type CreateCatDto = z.infer<typeof createCatSchema>;

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body({ schema: createCatSchema }) createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
}
`),cf()()(),Aa(230,`p`),bT(231,`The Swagger module picks up these schemas and turns them into request bodies and parameters in the generated document.`),cf(),Aa(232,`h5`,31)(233,`span`),bT(234,`Libraries that need no configuration`),cf()(),Aa(235,`p`),bT(236,`If your validation library implements the `),Aa(237,`strong`),bT(238,`Standard JSON Schema`),cf(),bT(239,` extension (that is, its schemas expose `),Aa(240,`code`),bT(241,`~standard.jsonSchema`),cf(),bT(242,`), Nest converts the schemas itself, and there is nothing to configure. Zod 4.2 and later implements this extension, for example. Nest requests the `),Aa(243,`code`),bT(244,`openapi-3.0`),cf(),bT(245,` target and uses the `),Aa(246,`code`),bT(247,`input`),cf(),bT(248,` or `),Aa(249,`code`),bT(250,`output`),cf(),bT(251,` variant, depending on whether the schema describes a request or a response.`),cf(),Aa(252,`h5`,32)(253,`span`),bT(254,`Supplying a converter`),cf()(),Aa(255,`p`),bT(256,`For libraries that don't expose that extension (or when you want to control the conversion yourself), provide a `),Aa(257,`code`),bT(258,`standardSchemaConverter`),cf(),bT(259,` in `),Aa(260,`code`),bT(261,`SwaggerDocumentOptions`),cf(),bT(262,`. It receives the raw schema and the `),Aa(263,`code`),bT(264,`schemaType`),cf(),bT(265,` being generated, and returns the converted OpenAPI schema:`),cf(),Aa(266,`app-copy-button`)(267,`pre`)(268,`code`,17),bT(269,`
standardSchemaConverter?: (
  schema: unknown,
  options: { schemaType: 'input' | 'output' },
) => { schema: unknown; components?: Record<string, any> } | undefined;
`),cf()()(),Aa(270,`p`),bT(271,`Nest calls the converter before trying the native conversion. Returning `),Aa(272,`code`),bT(273,`undefined`),cf(),bT(274,` tells Nest that the converter doesn't handle this schema, so Nest falls back to the native conversion described above. This makes it safe to support several libraries from one converter.`),cf(),Aa(275,`p`),bT(276,`For `),Aa(277,`strong`),bT(278,`Zod`),cf(),bT(279,`, you can use `),Aa(280,`a`,33),bT(281,`zod-openapi`),cf(),bT(282,`:`),cf(),Aa(283,`pre`)(284,`code`,12),bT(285,`
$ npm i --save-dev zod-openapi
`),cf()(),Aa(286,`app-copy-button`,15)(287,`span`,16),bT(288),LT(289,`extension`),Wa(290,`app-tabs`,null,3),cf(),Aa(292,`pre`)(293,`code`,17),bT(294,`
import { SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { createSchema } from 'zod-openapi';

const documentOptions: SwaggerDocumentOptions = {
  standardSchemaConverter: (schema, { schemaType }) => {
    const converted = createSchema(schema as never, {
      io: schemaType,
      openapiVersion: '3.0.0',
    });
    return { schema: converted.schema, components: converted.components };
  },
};

const documentFactory = () =>
  SwaggerModule.createDocument(app, config, documentOptions);
`),cf()()(),Aa(295,`p`),bT(296,`For `),Aa(297,`strong`),bT(298,`Valibot`),cf(),bT(299,`, use `),Aa(300,`a`,34),bT(301,`@valibot/to-json-schema`),cf(),bT(302,`:`),cf(),Aa(303,`pre`)(304,`code`,12),bT(305,`
$ npm i --save-dev @valibot/to-json-schema
`),cf()(),Aa(306,`app-copy-button`,15)(307,`span`,16),bT(308),LT(309,`extension`),Wa(310,`app-tabs`,null,4),cf(),Aa(312,`pre`)(313,`code`,17),bT(314,`
import { SwaggerDocumentOptions } from '@nestjs/swagger';
import { toJsonSchema } from '@valibot/to-json-schema';

const documentOptions: SwaggerDocumentOptions = {
  standardSchemaConverter: (schema, { schemaType }) => ({
    schema: toJsonSchema(schema as never, {
      target: 'openapi-3.0',
      typeMode: schemaType,
    }),
  }),
};
`),cf()()(),Aa(315,`p`),bT(316,`The two converters differ in one respect. `),Aa(317,`code`),bT(318,`createSchema()`),cf(),bT(319,` can hoist reusable definitions, so its result carries a `),Aa(320,`code`),bT(321,`components`),cf(),bT(322,` map, which you pass through and Nest merges into the document's shared components. `),Aa(323,`code`),bT(324,`toJsonSchema()`),cf(),bT(325,` returns a single self-contained schema, so the Valibot converter omits `),Aa(326,`code`),bT(327,`components`),cf(),bT(328,`.`),cf(),Aa(329,`h5`,35)(330,`span`),bT(331,`Supporting several libraries at once`),cf()(),Aa(332,`p`),bT(333,`Because the converter receives the schema as `),Aa(334,`code`),bT(335,`unknown`),cf(),bT(336,`, you can branch on the schema's vendor and support more than one library in the same application. Every Standard Schema exposes its vendor at `),Aa(337,`code`),bT(338,`~standard.vendor`),cf(),bT(339,`:`),cf(),Aa(340,`app-copy-button`,15)(341,`span`,16),bT(342),LT(343,`extension`),Wa(344,`app-tabs`,null,5),cf(),Aa(346,`pre`)(347,`code`,17),bT(348,`
import { SwaggerDocumentOptions } from '@nestjs/swagger';
import { toJsonSchema } from '@valibot/to-json-schema';
import { createSchema } from 'zod-openapi';

function hasVendor(schema: unknown, vendor: string) {
  return (
    !!schema &&
    typeof schema === 'object' &&
    (schema as { '~standard'?: { vendor?: string } })['~standard']?.vendor ===
      vendor
  );
}

const documentOptions: SwaggerDocumentOptions = {
  standardSchemaConverter: (schema, { schemaType }) => {
    if (hasVendor(schema, 'zod')) {
      const converted = createSchema(schema as never, {
        io: schemaType,
        openapiVersion: '3.0.0',
      });
      return { schema: converted.schema, components: converted.components };
    }

    if (hasVendor(schema, 'valibot')) {
      return {
        schema: toJsonSchema(schema as never, {
          target: 'openapi-3.0',
          typeMode: schemaType,
        }),
      };
    }

    // Not handled here - let Nest fall back to native conversion
    return undefined;
  },
};
`),cf()()(),Aa(349,`blockquote`,13)(350,`strong`),bT(351,`Warning`),cf(),bT(352,` Always narrow by vendor before calling a library-specific converter. Passing a Valibot schema to `),Aa(353,`code`),bT(354,`createSchema()`),cf(),bT(355,` (or the reverse) throws at document generation time instead of failing gracefully.
`),cf(),Aa(356,`blockquote`,18)(357,`strong`),bT(358,`Hint`),cf(),Aa(359,`code`),bT(360,`schemaType`),cf(),bT(361,` matters when your schema performs transformations: the `),Aa(362,`code`),bT(363,`input`),cf(),bT(364,` shape is what clients send, and the `),Aa(365,`code`),bT(366,`output`),cf(),bT(367,` shape is what your handler receives after parsing. Nest requests the variant that fits the position being documented, so pass the value straight through to your converter instead of hardcoding one.
`),cf(),Aa(368,`h4`,36)(369,`span`),bT(370,`Setup options`),cf()(),Aa(371,`p`),bT(372,`You can configure Swagger UI by passing an options object that implements the `),Aa(373,`code`),bT(374,`SwaggerCustomOptions`),cf(),bT(375,` interface as the fourth argument of the `),Aa(376,`code`),bT(377,`SwaggerModule#setup()`),cf(),bT(378,` method.`),cf(),Aa(379,`pre`)(380,`code`,27),bT(381,`
export interface SwaggerCustomOptions {
  /**
   * If \`true\`, Swagger resources paths will be prefixed by the global prefix set through \`setGlobalPrefix()\`.
   * Default: \`false\`.
   * @see /faq/global-prefix
   */
  useGlobalPrefix?: boolean;

  /**
   * If \`false\`, the Swagger UI will not be served. Only API definitions (JSON and YAML)
   * will be accessible (on \`/{path}-json\` and \`/{path}-yaml\`). To fully disable both the Swagger UI and API definitions, use \`raw: false\`.
   * Default: \`true\`.
   * @deprecated Use \`ui\` instead.
   */
  swaggerUiEnabled?: boolean;

  /**
   * If \`false\`, the Swagger UI will not be served. Only API definitions (JSON and YAML)
   * will be accessible (on \`/{path}-json\` and \`/{path}-yaml\`). To fully disable both the Swagger UI and API definitions, use \`raw: false\`.
   * Default: \`true\`.
   */
  ui?: boolean;

  /**
   * If \`true\`, raw definitions for all formats will be served.
   * Alternatively, you can pass an array to specify the formats to be served, e.g., \`raw: ['json']\` to serve only JSON definitions.
   * If set to \`false\` or an empty array, no definitions (JSON or YAML) will be served.
   * Use this option to control the availability of Swagger-related endpoints.
   * Default: \`true\`.
   */
  raw?: boolean | Array<'json' | 'yaml'>;

  /**
   * Url point the API definition to load in Swagger UI.
   */
  swaggerUrl?: string;

  /**
   * Path of the JSON API definition to serve.
   * Default: \`<path>-json\`.
   */
  jsonDocumentUrl?: string;

  /**
   * Path of the YAML API definition to serve.
   * Default: \`<path>-yaml\`.
   */
  yamlDocumentUrl?: string;

  /**
   * Hook allowing to alter the OpenAPI document before being served.
   * It's called after the document is generated and before it is served as JSON & YAML.
   * The hook can return either a plain \`OpenAPIObject\` or a \`Promise<OpenAPIObject>\`.
   */
  patchDocumentOnRequest?: <TRequest = any, TResponse = any>(
    req: TRequest,
    res: TResponse,
    document: OpenAPIObject
  ) => OpenAPIObject | Promise<OpenAPIObject>;

  /**
   * If \`true\`, the selector of OpenAPI definitions is displayed in the Swagger UI interface.
   * Default: \`false\`.
   */
  explorer?: boolean;

  /**
   * Additional Swagger UI options
   */
  swaggerOptions?: SwaggerUiOptions;

  /**
   * Custom CSS styles to inject in Swagger UI page.
   */
  customCss?: string;

  /**
   * URL(s) of a custom CSS stylesheet to load in Swagger UI page.
   */
  customCssUrl?: string | string[];

  /**
   * URL(s) of custom JavaScript files to load in Swagger UI page.
   */
  customJs?: string | string[];

  /**
   * Custom JavaScript scripts to load in Swagger UI page.
   */
  customJsStr?: string | string[];

  /**
   * Custom favicon for Swagger UI page.
   */
  customfavIcon?: string;

  /**
   * Custom title for Swagger UI page.
   */
  customSiteTitle?: string;

  /**
   * File system path (ex: ./node_modules/swagger-ui-dist) containing static Swagger UI assets.
   */
  customSwaggerUiPath?: string;

  /**
   * @deprecated This property has no effect.
   */
  validatorUrl?: string;

  /**
   * @deprecated This property has no effect.
   */
  url?: string;

  /**
   * @deprecated This property has no effect.
   */
  urls?: Record<'url' | 'name', string>[];
}
`),cf()(),Aa(382,`blockquote`,18)(383,`strong`),bT(384,`Hint`),cf(),Aa(385,`code`),bT(386,`ui`),cf(),bT(387,` and `),Aa(388,`code`),bT(389,`raw`),cf(),bT(390,` are independent options. Disabling the Swagger UI (`),Aa(391,`code`),bT(392,`ui: false`),cf(),bT(393,`) doesn't disable the API definitions (JSON/YAML). Conversely, disabling the API definitions (`),Aa(394,`code`),bT(395,`raw: []`),cf(),bT(396,`) doesn't disable the Swagger UI.
`),Aa(397,`p`),bT(398,`For example, the following configuration disables the Swagger UI but keeps the JSON API definition available:`),cf(),Aa(399,`app-copy-button`)(400,`pre`)(401,`code`,17),bT(402,`
const options: SwaggerCustomOptions = {
  ui: false, // Swagger UI is disabled
  raw: ['json'], // JSON API definition is still accessible (YAML is disabled)
};
SwaggerModule.setup('api', app, documentFactory, options);
`),cf()()(),Aa(403,`p`),bT(404,`In this case, `),Aa(405,`code`),bT(406,`http://localhost:3000/api-json`),cf(),bT(407,` is still accessible, but `),Aa(408,`code`),bT(409,`http://localhost:3000/api`),cf(),bT(410,` (the Swagger UI) is not.`),cf()(),Aa(411,`h4`,37)(412,`span`),bT(413,`Example`),cf()(),Aa(414,`p`),bT(415,`A working example is available in the `),Aa(416,`a`,38),bT(417,`Nest repository`),cf(),bT(418,`.`),cf()(),Aa(419,`a`,39),Wa(420,`i`,40),Aa(421,`span`),bT(422,`Edit on GitHub`),cf()()()),d&2){let R=tT(47),U=tT(226),N=tT(291),q=tT(311),H=tT(345);zC(44),hf(` `,jT(45,5,`main`,R.isJsActive),`
`),zC(179),hf(` `,jT(224,8,`cats.controller`,U.isJsActive),`
`),zC(65),hf(` `,jT(289,11,`main`,N.isJsActive),`
`),zC(20),hf(` `,jT(309,14,`main`,q.isJsActive),`
`),zC(34),hf(` `,jT(343,17,`main`,H.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return a})();var O=(()=>{class a extends xt{static ɵfac=(()=>{let r;return function(s){return(r||(r=im(a)))(s||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-mapped-types`]],features:[xy],decls:180,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`mapped-types`],[`appAnchor`,``,`id`,`partial`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`pick`],[`appAnchor`,``,`id`,`omit`],[`appAnchor`,``,`id`,`intersection`],[`appAnchor`,``,`id`,`composition`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/openapi/mapped-types.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,s){d&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Mapped types`),cf(),Aa(5,`p`),bT(6,`As you build out features like `),Aa(7,`strong`),bT(8,`CRUD`),cf(),bT(9,` (Create/Read/Update/Delete), it's often useful to construct variants of a base entity type. Nest provides several utility functions that perform type transformations to make this task more convenient.`),cf(),Aa(10,`h4`,4)(11,`span`),bT(12,`Partial`),cf()(),Aa(13,`p`),bT(14,`When building input validation types (also called DTOs), it's often useful to build `),Aa(15,`strong`),bT(16,`create`),cf(),bT(17,` and `),Aa(18,`strong`),bT(19,`update`),cf(),bT(20,` variations on the same type. For example, the `),Aa(21,`strong`),bT(22,`create`),cf(),bT(23,` variant may require all fields, while the `),Aa(24,`strong`),bT(25,`update`),cf(),bT(26,` variant may make all fields optional.`),cf(),Aa(27,`p`),bT(28,`Nest provides the `),Aa(29,`code`),bT(30,`PartialType()`),cf(),bT(31,` utility function to make this task easier and minimize boilerplate.`),cf(),Aa(32,`p`),bT(33,`The `),Aa(34,`code`),bT(35,`PartialType()`),cf(),bT(36,` function returns a type (class) with all the properties of the input type set to optional. For example, suppose you have a `),Aa(37,`strong`),bT(38,`create`),cf(),bT(39,` type as follows:`),cf(),Aa(40,`app-copy-button`)(41,`pre`)(42,`code`,5),bT(43,`
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
`),cf()()(),Aa(44,`p`),bT(45,`By default, all of these fields are required. To create a type with the same fields, but with each one optional, use `),Aa(46,`code`),bT(47,`PartialType()`),cf(),bT(48,` and pass the class reference (`),Aa(49,`code`),bT(50,`CreateCatDto`),cf(),bT(51,`) as an argument:`),cf(),Aa(52,`app-copy-button`)(53,`pre`)(54,`code`,5),bT(55,`
export class UpdateCatDto extends PartialType(CreateCatDto) {}
`),cf()()(),Aa(56,`blockquote`,6)(57,`strong`),bT(58,`Hint`),cf(),bT(59,` The `),Aa(60,`code`),bT(61,`PartialType()`),cf(),bT(62,` function is imported from the `),Aa(63,`code`),bT(64,`@nestjs/swagger`),cf(),bT(65,` package.
`),cf(),Aa(66,`h4`,7)(67,`span`),bT(68,`Pick`),cf()(),Aa(69,`p`),bT(70,`The `),Aa(71,`code`),bT(72,`PickType()`),cf(),bT(73,` function constructs a new type (class) by picking a set of properties from an input type. For example, suppose you start with a type like:`),cf(),Aa(74,`app-copy-button`)(75,`pre`)(76,`code`,5),bT(77,`
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
`),cf()()(),Aa(78,`p`),bT(79,`You can pick a set of properties from this class using the `),Aa(80,`code`),bT(81,`PickType()`),cf(),bT(82,` utility function:`),cf(),Aa(83,`app-copy-button`)(84,`pre`)(85,`code`,5),bT(86,`
export class UpdateCatAgeDto extends PickType(CreateCatDto, ['age'] as const) {}
`),cf()()(),Aa(87,`blockquote`,6)(88,`strong`),bT(89,`Hint`),cf(),bT(90,` The `),Aa(91,`code`),bT(92,`PickType()`),cf(),bT(93,` function is imported from the `),Aa(94,`code`),bT(95,`@nestjs/swagger`),cf(),bT(96,` package.
`),cf(),Aa(97,`h4`,8)(98,`span`),bT(99,`Omit`),cf()(),Aa(100,`p`),bT(101,`The `),Aa(102,`code`),bT(103,`OmitType()`),cf(),bT(104,` function constructs a type by picking all properties from an input type and then removing a particular set of keys. For example, suppose you start with a type like:`),cf(),Aa(105,`app-copy-button`)(106,`pre`)(107,`code`,5),bT(108,`
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
`),cf()()(),Aa(109,`p`),bT(110,`You can generate a derived type that has every property `),Aa(111,`strong`),bT(112,`except`),cf(),Aa(113,`code`),bT(114,`name`),cf(),bT(115,`, as shown below. In this construct, the second argument to `),Aa(116,`code`),bT(117,`OmitType()`),cf(),bT(118,` is an array of property names.`),cf(),Aa(119,`app-copy-button`)(120,`pre`)(121,`code`,5),bT(122,`
export class UpdateCatDto extends OmitType(CreateCatDto, ['name'] as const) {}
`),cf()()(),Aa(123,`blockquote`,6)(124,`strong`),bT(125,`Hint`),cf(),bT(126,` The `),Aa(127,`code`),bT(128,`OmitType()`),cf(),bT(129,` function is imported from the `),Aa(130,`code`),bT(131,`@nestjs/swagger`),cf(),bT(132,` package.
`),cf(),Aa(133,`h4`,9)(134,`span`),bT(135,`Intersection`),cf()(),Aa(136,`p`),bT(137,`The `),Aa(138,`code`),bT(139,`IntersectionType()`),cf(),bT(140,` function combines two or more types into one new type (class). For example, suppose you start with two types like:`),cf(),Aa(141,`app-copy-button`)(142,`pre`)(143,`code`,5),bT(144,`
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  breed: string;
}

export class AdditionalCatInfo {
  @ApiProperty()
  color: string;
}
`),cf()()(),Aa(145,`p`),bT(146,`You can generate a new type that combines all properties of both types:`),cf(),Aa(147,`app-copy-button`)(148,`pre`)(149,`code`,5),bT(150,`
export class UpdateCatDto extends IntersectionType(
  CreateCatDto,
  AdditionalCatInfo,
) {}
`),cf()()(),Aa(151,`blockquote`,6)(152,`strong`),bT(153,`Hint`),cf(),bT(154,` The `),Aa(155,`code`),bT(156,`IntersectionType()`),cf(),bT(157,` function is imported from the `),Aa(158,`code`),bT(159,`@nestjs/swagger`),cf(),bT(160,` package.
`),cf(),Aa(161,`h4`,10)(162,`span`),bT(163,`Composition`),cf()(),Aa(164,`p`),bT(165,`The type mapping utility functions are composable. For example, the following produces a type (class) that has all of the properties of the `),Aa(166,`code`),bT(167,`CreateCatDto`),cf(),bT(168,` type except for `),Aa(169,`code`),bT(170,`name`),cf(),bT(171,`, with those properties set to optional:`),cf(),Aa(172,`app-copy-button`)(173,`pre`)(174,`code`,5),bT(175,`
export class UpdateCatDto extends PartialType(
  OmitType(CreateCatDto, ['name'] as const),
) {}
`),cf()()()(),Aa(176,`a`,11),Wa(177,`i`,12),Aa(178,`span`),bT(179,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln],encapsulation:2})}return a})();var M=(()=>{class a extends xt{static ɵfac=(()=>{let r;return function(s){return(r||(r=im(a)))(s||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-openapi-operations`]],features:[xy],decls:469,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`operations`],[`appAnchor`,``,`id`,`tags`],[1,`language-typescript`],[1,`warning`],[`appAnchor`,``,`id`,`headers`],[`appAnchor`,``,`id`,`responses`],[`src`,`/assets/swagger-response-type.png`],[`appAnchor`,``,`id`,`file-upload`],[`routerLink`,`/http/file-upload`],[`appAnchor`,``,`id`,`extensions`],[`appAnchor`,``,`id`,`advanced-generic-apiresponse`],[`href`,`/openapi/types-and-parameters#raw-definitions`],[1,`language-ts`],[`href`,`/openapi/types-and-parameters#extra-models`],[1,`language-json`],[1,`info`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/openapi/operations.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,s){d&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Operations`),cf(),Aa(5,`p`),bT(6,`In OpenAPI terms, paths are the endpoints (resources) that your API exposes, such as `),Aa(7,`code`),bT(8,`/users`),cf(),bT(9,` or `),Aa(10,`code`),bT(11,`/reports/summary`),cf(),bT(12,`. Operations are the HTTP methods used to manipulate these paths, such as `),Aa(13,`code`),bT(14,`GET`),cf(),bT(15,`, `),Aa(16,`code`),bT(17,`POST`),cf(),bT(18,`, or `),Aa(19,`code`),bT(20,`DELETE`),cf(),bT(21,`.`),cf(),Aa(22,`h4`,4)(23,`span`),bT(24,`Tags`),cf()(),Aa(25,`p`),bT(26,`To attach a controller to a specific tag, use the `),Aa(27,`code`),bT(28,`@ApiTags(...tags)`),cf(),bT(29,` decorator:`),cf(),Aa(30,`app-copy-button`)(31,`pre`)(32,`code`,5),bT(33,`
@ApiTags('cats')
@Controller('cats')
export class CatsController {}
`),cf()()(),Aa(34,`p`),bT(35,`OpenAPI 3.2 extends the Tag Object so that tags can be organized into a hierarchy and annotated with a hint about how they should be presented. To declare these relationships, define the tags up front with `),Aa(36,`code`),bT(37,`DocumentBuilder`),cf(),bT(38,` and pass the `),Aa(39,`code`),bT(40,`parent`),cf(),bT(41,` and `),Aa(42,`code`),bT(43,`kind`),cf(),bT(44,` options to `),Aa(45,`code`),bT(46,`addTag()`),cf(),bT(47,`:`),cf(),Aa(48,`app-copy-button`)(49,`pre`)(50,`code`,5),bT(51,`
const config = new DocumentBuilder()
  .setOpenAPIVersion('3.2.0')
  .addTag('Animals', 'Everything about animals', undefined, { kind: 'nav' })
  .addTag('Cats', 'Cat operations', undefined, { parent: 'Animals' })
  .addTag('Dogs', 'Dog operations', undefined, { parent: 'Animals' })
  .build();
`),cf()()(),Aa(52,`p`),bT(53,`The `),Aa(54,`code`),bT(55,`parent`),cf(),bT(56,` option references another tag by name. The `),Aa(57,`code`),bT(58,`kind`),cf(),bT(59,` option is a free-form, machine-readable string that hints at how the tag should be used, commonly `),Aa(60,`code`),bT(61,`nav`),cf(),bT(62,`, `),Aa(63,`code`),bT(64,`badge`),cf(),bT(65,`, or `),Aa(66,`code`),bT(67,`audience`),cf(),bT(68,`. The same options object also accepts a `),Aa(69,`code`),bT(70,`summary`),cf(),bT(71,`, another OpenAPI 3.2 Tag Object field.`),cf(),Aa(72,`blockquote`,6)(73,`strong`),bT(74,`Warning`),cf(),bT(75,` The `),Aa(76,`code`),bT(77,`parent`),cf(),bT(78,` and `),Aa(79,`code`),bT(80,`kind`),cf(),bT(81,` fields belong to the OpenAPI 3.2 Tag Object. You must call `),Aa(82,`code`),bT(83,`setOpenAPIVersion('3.2.0')`),cf(),bT(84,`. Otherwise, the generated document still declares `),Aa(85,`code`),bT(86,`openapi: 3.0.0`),cf(),bT(87,`, and strict validators reject these fields. Hierarchy fields can only be defined through `),Aa(88,`code`),bT(89,`DocumentBuilder.addTag()`),cf(),bT(90,`. The `),Aa(91,`code`),bT(92,`@ApiTags()`),cf(),bT(93,` decorator ignores them and logs a warning.
`),cf(),Aa(94,`h4`,7)(95,`span`),bT(96,`Headers`),cf()(),Aa(97,`p`),bT(98,`To define custom headers that are expected as part of the request, use `),Aa(99,`code`),bT(100,`@ApiHeader()`),cf(),bT(101,`:`),cf(),Aa(102,`app-copy-button`)(103,`pre`)(104,`code`,5),bT(105,`
@ApiHeader({
  name: 'X-MyHeader',
  description: 'Custom header',
})
@Controller('cats')
export class CatsController {}
`),cf()()(),Aa(106,`h4`,8)(107,`span`),bT(108,`Responses`),cf()(),Aa(109,`p`),bT(110,`To define a custom HTTP response, use the `),Aa(111,`code`),bT(112,`@ApiResponse()`),cf(),bT(113,` decorator:`),cf(),Aa(114,`app-copy-button`)(115,`pre`)(116,`code`,5),bT(117,`
@Post()
@ApiResponse({ status: 201, description: 'The record has been successfully created.'})
@ApiResponse({ status: 403, description: 'Forbidden.'})
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()()(),Aa(118,`p`),bT(119,`Nest provides a set of shorthand `),Aa(120,`strong`),bT(121,`API response`),cf(),bT(122,` decorators built on top of `),Aa(123,`code`),bT(124,`@ApiResponse()`),cf(),bT(125,`, one for each common status code. They include:`),cf(),Aa(126,`ul`)(127,`li`)(128,`code`),bT(129,`@ApiOkResponse()`),cf()(),Aa(130,`li`)(131,`code`),bT(132,`@ApiCreatedResponse()`),cf()(),Aa(133,`li`)(134,`code`),bT(135,`@ApiAcceptedResponse()`),cf()(),Aa(136,`li`)(137,`code`),bT(138,`@ApiNoContentResponse()`),cf()(),Aa(139,`li`)(140,`code`),bT(141,`@ApiMovedPermanentlyResponse()`),cf()(),Aa(142,`li`)(143,`code`),bT(144,`@ApiFoundResponse()`),cf()(),Aa(145,`li`)(146,`code`),bT(147,`@ApiBadRequestResponse()`),cf()(),Aa(148,`li`)(149,`code`),bT(150,`@ApiUnauthorizedResponse()`),cf()(),Aa(151,`li`)(152,`code`),bT(153,`@ApiNotFoundResponse()`),cf()(),Aa(154,`li`)(155,`code`),bT(156,`@ApiForbiddenResponse()`),cf()(),Aa(157,`li`)(158,`code`),bT(159,`@ApiMethodNotAllowedResponse()`),cf()(),Aa(160,`li`)(161,`code`),bT(162,`@ApiNotAcceptableResponse()`),cf()(),Aa(163,`li`)(164,`code`),bT(165,`@ApiRequestTimeoutResponse()`),cf()(),Aa(166,`li`)(167,`code`),bT(168,`@ApiConflictResponse()`),cf()(),Aa(169,`li`)(170,`code`),bT(171,`@ApiPreconditionFailedResponse()`),cf()(),Aa(172,`li`)(173,`code`),bT(174,`@ApiTooManyRequestsResponse()`),cf()(),Aa(175,`li`)(176,`code`),bT(177,`@ApiGoneResponse()`),cf()(),Aa(178,`li`)(179,`code`),bT(180,`@ApiPayloadTooLargeResponse()`),cf()(),Aa(181,`li`)(182,`code`),bT(183,`@ApiUnsupportedMediaTypeResponse()`),cf()(),Aa(184,`li`)(185,`code`),bT(186,`@ApiUnprocessableEntityResponse()`),cf()(),Aa(187,`li`)(188,`code`),bT(189,`@ApiInternalServerErrorResponse()`),cf()(),Aa(190,`li`)(191,`code`),bT(192,`@ApiNotImplementedResponse()`),cf()(),Aa(193,`li`)(194,`code`),bT(195,`@ApiBadGatewayResponse()`),cf()(),Aa(196,`li`)(197,`code`),bT(198,`@ApiServiceUnavailableResponse()`),cf()(),Aa(199,`li`)(200,`code`),bT(201,`@ApiGatewayTimeoutResponse()`),cf()(),Aa(202,`li`)(203,`code`),bT(204,`@ApiDefaultResponse()`),cf()()(),Aa(205,`app-copy-button`)(206,`pre`)(207,`code`,5),bT(208,`
@Post()
@ApiCreatedResponse({ description: 'The record has been successfully created.'})
@ApiForbiddenResponse({ description: 'Forbidden.'})
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()()(),Aa(209,`p`),bT(210,`To specify a return model for a request, create a class and annotate all of its properties with the `),Aa(211,`code`),bT(212,`@ApiProperty()`),cf(),bT(213,` decorator:`),cf(),Aa(214,`app-copy-button`)(215,`pre`)(216,`code`,5),bT(217,`
export class Cat {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
`),cf()()(),Aa(218,`p`),bT(219,`You can then use the `),Aa(220,`code`),bT(221,`Cat`),cf(),bT(222,` model with the `),Aa(223,`code`),bT(224,`type`),cf(),bT(225,` property of the response decorator:`),cf(),Aa(226,`app-copy-button`)(227,`pre`)(228,`code`,5),bT(229,`
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Cat,
  })
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }
}
`),cf()()(),Aa(230,`p`),bT(231,`Open the browser and verify the generated `),Aa(232,`code`),bT(233,`Cat`),cf(),bT(234,` model:`),cf(),Aa(235,`figure`),Wa(236,`img`,9),cf(),Aa(237,`p`),bT(238,`Instead of defining responses for each endpoint or controller individually, you can define a global response for all endpoints using the `),Aa(239,`code`),bT(240,`DocumentBuilder`),cf(),bT(241,` class. This is useful for responses that every endpoint in your application can return (e.g., errors like `),Aa(242,`code`),bT(243,`401 Unauthorized`),cf(),bT(244,` or `),Aa(245,`code`),bT(246,`500 Internal Server Error`),cf(),bT(247,`).`),cf(),Aa(248,`app-copy-button`)(249,`pre`)(250,`code`,5),bT(251,`
const config = new DocumentBuilder()
  .addGlobalResponse({
    status: 500,
    description: 'Internal server error',
  })
  // other configurations
  .build();
`),cf()()(),Aa(252,`h4`,10)(253,`span`),bT(254,`File upload`),cf()(),Aa(255,`p`),bT(256,`To document file upload for a specific method, use the `),Aa(257,`code`),bT(258,`@ApiBody()`),cf(),bT(259,` decorator together with `),Aa(260,`code`),bT(261,`@ApiConsumes()`),cf(),bT(262,`. Here's a full example using the `),Aa(263,`a`,11),bT(264,`file upload`),cf(),bT(265,` technique:`),cf(),Aa(266,`app-copy-button`)(267,`pre`)(268,`code`,5),bT(269,`
@UseInterceptors(FileInterceptor('file'))
@ApiConsumes('multipart/form-data')
@ApiBody({
  description: 'List of cats',
  type: FileUploadDto,
})
uploadFile(@UploadedFile() file: Express.Multer.File) {}
`),cf()()(),Aa(270,`p`),bT(271,`Where `),Aa(272,`code`),bT(273,`FileUploadDto`),cf(),bT(274,` is defined as follows:`),cf(),Aa(275,`app-copy-button`)(276,`pre`)(277,`code`,5),bT(278,`
class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
`),cf()()(),Aa(279,`p`),bT(280,`To handle multiple file uploads, define `),Aa(281,`code`),bT(282,`FilesUploadDto`),cf(),bT(283,` as follows:`),cf(),Aa(284,`app-copy-button`)(285,`pre`)(286,`code`,5),bT(287,`
class FilesUploadDto {
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  files: any[];
}
`),cf()()(),Aa(288,`h4`,12)(289,`span`),bT(290,`Extensions`),cf()(),Aa(291,`p`),bT(292,`To add an extension to an operation, use the `),Aa(293,`code`),bT(294,`@ApiExtension()`),cf(),bT(295,` decorator. The extension name must be prefixed with `),Aa(296,`code`),bT(297,`x-`),cf(),bT(298,` (otherwise, the decorator throws an error).`),cf(),Aa(299,`app-copy-button`)(300,`pre`)(301,`code`,5),bT(302,`
@ApiExtension('x-foo', { hello: 'world' })
`),cf()()(),Aa(303,`h4`,13)(304,`span`),bT(305,`Advanced: Generic `),Aa(306,`code`),bT(307,`ApiResponse`),cf()()(),Aa(308,`p`),bT(309,`With `),Aa(310,`a`,14),bT(311,`raw definitions`),cf(),bT(312,`, you can define a generic schema for Swagger UI. Assume you have the following DTO:`),cf(),Aa(313,`app-copy-button`)(314,`pre`)(315,`code`,15),bT(316,`
export class PaginatedDto<TData> {
  @ApiProperty()
  total: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;

  results: TData[];
}
`),cf()()(),Aa(317,`p`),bT(318,`We skip decorating `),Aa(319,`code`),bT(320,`results`),cf(),bT(321,`, because we'll provide a raw definition for it later. Now, define another DTO, for example `),Aa(322,`code`),bT(323,`CatDto`),cf(),bT(324,`, as follows:`),cf(),Aa(325,`app-copy-button`)(326,`pre`)(327,`code`,15),bT(328,`
export class CatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
`),cf()()(),Aa(329,`p`),bT(330,`With this in place, you can define a `),Aa(331,`code`),bT(332,`PaginatedDto<CatDto>`),cf(),bT(333,` response:`),cf(),Aa(334,`app-copy-button`)(335,`pre`)(336,`code`,15),bT(337,`
@ApiOkResponse({
  schema: {
    allOf: [
      { $ref: getSchemaPath(PaginatedDto) },
      {
        properties: {
          results: {
            type: 'array',
            items: { $ref: getSchemaPath(CatDto) },
          },
        },
      },
    ],
  },
})
async findAll(): Promise<PaginatedDto<CatDto>> {}
`),cf()()(),Aa(338,`p`),bT(339,`In this example, the response combines `),Aa(340,`code`),bT(341,`PaginatedDto`),cf(),bT(342,` (through `),Aa(343,`code`),bT(344,`allOf`),cf(),bT(345,`) with a `),Aa(346,`code`),bT(347,`results`),cf(),bT(348,` property of type `),Aa(349,`code`),bT(350,`Array<CatDto>`),cf(),bT(351,`.`),cf(),Aa(352,`ul`)(353,`li`)(354,`code`),bT(355,`getSchemaPath()`),cf(),bT(356,` returns the OpenAPI schema path of a given model within the OpenAPI document.`),cf(),Aa(357,`li`)(358,`code`),bT(359,`allOf`),cf(),bT(360,` is an OAS 3 keyword that covers various inheritance-related use cases.`),cf()(),Aa(361,`p`),bT(362,`Lastly, because no controller references `),Aa(363,`code`),bT(364,`PaginatedDto`),cf(),bT(365,` directly, the `),Aa(366,`code`),bT(367,`SwaggerModule`),cf(),bT(368,` can't generate a corresponding model definition yet. In this case, you must add it as an `),Aa(369,`a`,16),bT(370,`extra model`),cf(),bT(371,`. For example, use the `),Aa(372,`code`),bT(373,`@ApiExtraModels()`),cf(),bT(374,` decorator at the controller level:`),cf(),Aa(375,`app-copy-button`)(376,`pre`)(377,`code`,15),bT(378,`
@Controller('cats')
@ApiExtraModels(PaginatedDto)
export class CatsController {}
`),cf()()(),Aa(379,`p`),bT(380,`If you run Swagger now, the generated `),Aa(381,`code`),bT(382,`swagger.json`),cf(),bT(383,` for this endpoint defines the following response:`),cf(),Aa(384,`pre`)(385,`code`,17),bT(386,`
"responses": {
  "200": {
    "description": "",
    "content": {
      "application/json": {
        "schema": {
          "allOf": [
            {
              "$ref": "#/components/schemas/PaginatedDto"
            },
            {
              "properties": {
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CatDto"
                  }
                }
              }
            }
          ]
        }
      }
    }
  }
}
`),cf()(),Aa(387,`p`),bT(388,`To make it reusable, create a custom decorator for `),Aa(389,`code`),bT(390,`PaginatedDto`),cf(),bT(391,`:`),cf(),Aa(392,`app-copy-button`)(393,`pre`)(394,`code`,15),bT(395,`
export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(PaginatedDto, model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedDto) },
          {
            properties: {
              results: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};
`),cf()()(),Aa(396,`blockquote`,18)(397,`strong`),bT(398,`Hint`),cf(),bT(399,` The `),Aa(400,`code`),bT(401,`Type<any>`),cf(),bT(402,` interface and the `),Aa(403,`code`),bT(404,`applyDecorators()`),cf(),bT(405,` function are imported from the `),Aa(406,`code`),bT(407,`@nestjs/common`),cf(),bT(408,` package.
`),cf(),Aa(409,`p`),bT(410,`To ensure that the `),Aa(411,`code`),bT(412,`SwaggerModule`),cf(),bT(413,` generates a definition for the model, the decorator registers it as an extra model with `),Aa(414,`code`),bT(415,`ApiExtraModels()`),cf(),bT(416,`, just as we did earlier for `),Aa(417,`code`),bT(418,`PaginatedDto`),cf(),bT(419,` in the controller.`),cf(),Aa(420,`p`),bT(421,`With this in place, you can use the custom `),Aa(422,`code`),bT(423,`@ApiPaginatedResponse()`),cf(),bT(424,` decorator on your endpoint:`),cf(),Aa(425,`app-copy-button`)(426,`pre`)(427,`code`,15),bT(428,`
@ApiPaginatedResponse(CatDto)
async findAll(): Promise<PaginatedDto<CatDto>> {}
`),cf()()(),Aa(429,`p`),bT(430,`For client generation tools, this approach makes it ambiguous how `),Aa(431,`code`),bT(432,`PaginatedDto<TModel>`),cf(),bT(433,` should be generated for the client. The following snippet is an example of a client generator result for the `),Aa(434,`code`),bT(435,`GET /`),cf(),bT(436,` endpoint above:`),cf(),Aa(437,`app-copy-button`)(438,`pre`)(439,`code`,5),bT(440,`
// Angular
findAll(): Observable<{ total: number, limit: number, offset: number, results: CatDto[] }>
`),cf()()(),Aa(441,`p`),bT(442,`The `),Aa(443,`strong`),bT(444,`return type`),cf(),bT(445,` here is ambiguous. To work around this issue, add a `),Aa(446,`code`),bT(447,`title`),cf(),bT(448,` property to the `),Aa(449,`code`),bT(450,`schema`),cf(),bT(451,` in `),Aa(452,`code`),bT(453,`ApiPaginatedResponse`),cf(),bT(454,`:`),cf(),Aa(455,`app-copy-button`)(456,`pre`)(457,`code`,5),bT(458,`
export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        title: \`PaginatedResponseOf\${model.name}\`,
        allOf: [
          // ...
        ],
      },
    }),
  );
};
`),cf()()(),Aa(459,`p`),bT(460,`The client generator's result now becomes:`),cf(),Aa(461,`app-copy-button`)(462,`pre`)(463,`code`,15),bT(464,`
// Angular
findAll(): Observable<PaginatedResponseOfCatDto>
`),cf()()()(),Aa(465,`a`,19),Wa(466,`i`,20),Aa(467,`span`),bT(468,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln,Jc],encapsulation:2})}return a})();var j=(()=>{class a extends xt{static ɵfac=(()=>{let r;return function(s){return(r||(r=im(a)))(s||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-openapi-other-features`]],features:[xy],decls:141,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`other-features`],[`appAnchor`,``,`id`,`global-prefix`],[1,`language-typescript`],[`appAnchor`,``,`id`,`global-parameters`],[`appAnchor`,``,`id`,`global-responses`],[`appAnchor`,``,`id`,`multiple-specifications`],[1,`language-bash`],[`src`,`/assets/swagger-cats.png`],[`src`,`/assets/swagger-dogs.png`],[`appAnchor`,``,`id`,`dropdown-in-the-explorer-bar`],[1,`info`],[`href`,`/openapi/introduction#setup-options`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/openapi/other-features.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,s){d&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Other features`),cf(),Aa(5,`p`),bT(6,`This page covers other features of the Swagger module that you may find useful.`),cf(),Aa(7,`h4`,4)(8,`span`),bT(9,`Global prefix`),cf()(),Aa(10,`p`),bT(11,`To ignore the global prefix set through `),Aa(12,`code`),bT(13,`setGlobalPrefix()`),cf(),bT(14,`, use the `),Aa(15,`code`),bT(16,`ignoreGlobalPrefix`),cf(),bT(17,` option:`),cf(),Aa(18,`app-copy-button`)(19,`pre`)(20,`code`,5),bT(21,`
const document = SwaggerModule.createDocument(app, options, {
  ignoreGlobalPrefix: true,
});
`),cf()()(),Aa(22,`h4`,6)(23,`span`),bT(24,`Global parameters`),cf()(),Aa(25,`p`),bT(26,`To define parameters for all routes, use `),Aa(27,`code`),bT(28,`DocumentBuilder`),cf(),bT(29,`:`),cf(),Aa(30,`app-copy-button`)(31,`pre`)(32,`code`,5),bT(33,`
const config = new DocumentBuilder()
  .addGlobalParameters({
    name: 'tenantId',
    in: 'header',
  })
  // other configurations
  .build();
`),cf()()(),Aa(34,`h4`,7)(35,`span`),bT(36,`Global responses`),cf()(),Aa(37,`p`),bT(38,`To define global responses for all routes, use `),Aa(39,`code`),bT(40,`DocumentBuilder`),cf(),bT(41,`. This is useful for setting up consistent responses across all endpoints in your application, such as error codes like `),Aa(42,`code`),bT(43,`401 Unauthorized`),cf(),bT(44,` or `),Aa(45,`code`),bT(46,`500 Internal Server Error`),cf(),bT(47,`.`),cf(),Aa(48,`app-copy-button`)(49,`pre`)(50,`code`,5),bT(51,`
const config = new DocumentBuilder()
  .addGlobalResponse({
    status: 500,
    description: 'Internal server error',
  })
  // other configurations
  .build();
`),cf()()(),Aa(52,`h4`,8)(53,`span`),bT(54,`Multiple specifications`),cf()(),Aa(55,`p`),bT(56,`The `),Aa(57,`code`),bT(58,`SwaggerModule`),cf(),bT(59,` supports multiple specifications. In other words, you can serve different documentation, with different UIs, on different endpoints.`),cf(),Aa(60,`p`),bT(61,`To support multiple specifications, your application must be written with a modular approach. The `),Aa(62,`code`),bT(63,`createDocument()`),cf(),bT(64,` method takes a third argument, `),Aa(65,`code`),bT(66,`extraOptions`),cf(),bT(67,`, which is an object with an `),Aa(68,`code`),bT(69,`include`),cf(),bT(70,` property. The `),Aa(71,`code`),bT(72,`include`),cf(),bT(73,` property takes an array of modules.`),cf(),Aa(74,`p`),bT(75,`Set up support for multiple specifications as shown below:`),cf(),Aa(76,`app-copy-button`)(77,`pre`)(78,`code`,5),bT(79,`
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { CatsModule } from './cats/cats.module.js';
import { DogsModule } from './dogs/dogs.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * createDocument(application, configurationOptions, extraOptions);
   *
   * createDocument method takes an optional 3rd argument "extraOptions"
   * which is an object with "include" property where you can pass an Array
   * of Modules that you want to include in that Swagger Specification
   * E.g: CatsModule and DogsModule will have two separate Swagger Specifications which
   * will be exposed on two different SwaggerUI with two different endpoints.
   */

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const catDocumentFactory = () =>
    SwaggerModule.createDocument(app, options, {
      include: [CatsModule],
    });
  SwaggerModule.setup('api/cats', app, catDocumentFactory);

  const secondOptions = new DocumentBuilder()
    .setTitle('Dogs example')
    .setDescription('The dogs API description')
    .setVersion('1.0')
    .addTag('dogs')
    .build();

  const dogDocumentFactory = () =>
    SwaggerModule.createDocument(app, secondOptions, {
      include: [DogsModule],
    });
  SwaggerModule.setup('api/dogs', app, dogDocumentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(80,`p`),bT(81,`Now start your server with the following command:`),cf(),Aa(82,`pre`)(83,`code`,9),bT(84,`
$ npm run start
`),cf()(),Aa(85,`p`),bT(86,`Navigate to `),Aa(87,`code`),bT(88,`http://localhost:3000/api/cats`),cf(),bT(89,` to see the Swagger UI for cats:`),cf(),Aa(90,`figure`),Wa(91,`img`,10),cf(),Aa(92,`p`),bT(93,`In turn, `),Aa(94,`code`),bT(95,`http://localhost:3000/api/dogs`),cf(),bT(96,` will expose the Swagger UI for dogs:`),cf(),Aa(97,`figure`),Wa(98,`img`,11),cf(),Aa(99,`h4`,12)(100,`span`),bT(101,`Dropdown in the explorer bar`),cf()(),Aa(102,`p`),bT(103,`To list multiple specifications in the dropdown menu of the explorer bar, set `),Aa(104,`code`),bT(105,`explorer: true`),cf(),bT(106,` and configure `),Aa(107,`code`),bT(108,`swaggerOptions.urls`),cf(),bT(109,` in your `),Aa(110,`code`),bT(111,`SwaggerCustomOptions`),cf(),bT(112,`.`),cf(),Aa(113,`blockquote`,13)(114,`strong`),bT(115,`Hint`),cf(),bT(116,` Make sure that `),Aa(117,`code`),bT(118,`swaggerOptions.urls`),cf(),bT(119,` points to the JSON format of your Swagger documents. To specify the JSON document's path, use the `),Aa(120,`code`),bT(121,`jsonDocumentUrl`),cf(),bT(122,` option of `),Aa(123,`code`),bT(124,`SwaggerCustomOptions`),cf(),bT(125,`. For more options, see `),Aa(126,`a`,14),bT(127,`setup options`),cf(),bT(128,`.
`),cf(),Aa(129,`p`),bT(130,`Here's how to select multiple specifications from a dropdown in the explorer bar:`),cf(),Aa(131,`app-copy-button`)(132,`pre`)(133,`code`,5),bT(134,`
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { CatsModule } from './cats/cats.module.js';
import { DogsModule } from './dogs/dogs.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Main API options
  const options = new DocumentBuilder()
    .setTitle('Multiple Specifications Example')
    .setDescription('Description for multiple specifications')
    .setVersion('1.0')
    .build();

  // Create main API document
  const document = SwaggerModule.createDocument(app, options);

  // Setup main API Swagger UI with dropdown support
  SwaggerModule.setup('api', app, document, {
    explorer: true,
    swaggerOptions: {
      urls: [
        {
          name: '1. API',
          url: 'api/swagger.json',
        },
        {
          name: '2. Cats API',
          url: 'api/cats/swagger.json',
        },
        {
          name: '3. Dogs API',
          url: 'api/dogs/swagger.json',
        },
      ],
    },
    jsonDocumentUrl: '/api/swagger.json',
  });

  // Cats API options
  const catOptions = new DocumentBuilder()
    .setTitle('Cats Example')
    .setDescription('Description for the Cats API')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  // Create Cats API document
  const catDocument = SwaggerModule.createDocument(app, catOptions, {
    include: [CatsModule],
  });

  // Setup Cats API Swagger UI
  SwaggerModule.setup('api/cats', app, catDocument, {
    jsonDocumentUrl: '/api/cats/swagger.json',
  });

  // Dogs API options
  const dogOptions = new DocumentBuilder()
    .setTitle('Dogs Example')
    .setDescription('Description for the Dogs API')
    .setVersion('1.0')
    .addTag('dogs')
    .build();

  // Create Dogs API document
  const dogDocument = SwaggerModule.createDocument(app, dogOptions, {
    include: [DogsModule],
  });

  // Setup Dogs API Swagger UI
  SwaggerModule.setup('api/dogs', app, dogDocument, {
    jsonDocumentUrl: '/api/dogs/swagger.json',
  });

  await app.listen(process.env.PORT ?? 3000);
}

await bootstrap();
`),cf()()(),Aa(135,`p`),bT(136,`This example sets up a main API along with separate specifications for cats and dogs, each accessible from the dropdown in the explorer bar.`),cf()(),Aa(137,`a`,15),Wa(138,`i`,16),Aa(139,`span`),bT(140,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln],encapsulation:2})}return a})();var F=(()=>{class a extends xt{static ɵfac=(()=>{let r;return function(s){return(r||(r=im(a)))(s||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-openapi-security`]],features:[xy],decls:119,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`security`],[1,`language-typescript`],[`appAnchor`,``,`id`,`basic-authentication`],[`appAnchor`,``,`id`,`bearer-authentication`],[`appAnchor`,``,`id`,`oauth2-authentication`],[`appAnchor`,``,`id`,`cookie-authentication`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/openapi/security.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,s){d&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Security`),cf(),Aa(5,`p`),bT(6,`To define which security mechanisms a specific operation uses, apply the `),Aa(7,`code`),bT(8,`@ApiSecurity()`),cf(),bT(9,` decorator:`),cf(),Aa(10,`app-copy-button`)(11,`pre`)(12,`code`,4),bT(13,`
@ApiSecurity('basic')
@Controller('cats')
export class CatsController {}
`),cf()()(),Aa(14,`p`),bT(15,`Before you run your application, add the security definition to your base document using `),Aa(16,`code`),bT(17,`DocumentBuilder`),cf(),bT(18,`:`),cf(),Aa(19,`app-copy-button`)(20,`pre`)(21,`code`,4),bT(22,`
const options = new DocumentBuilder().addSecurity('basic', {
  type: 'http',
  scheme: 'basic',
});
`),cf()()(),Aa(23,`p`),bT(24,`The most popular authentication techniques (e.g., `),Aa(25,`code`),bT(26,`basic`),cf(),bT(27,` and `),Aa(28,`code`),bT(29,`bearer`),cf(),bT(30,`) are built in, so you don't have to define their security mechanisms manually as shown above.`),cf(),Aa(31,`h4`,5)(32,`span`),bT(33,`Basic authentication`),cf()(),Aa(34,`p`),bT(35,`To enable basic authentication, use `),Aa(36,`code`),bT(37,`@ApiBasicAuth()`),cf(),bT(38,`:`),cf(),Aa(39,`app-copy-button`)(40,`pre`)(41,`code`,4),bT(42,`
@ApiBasicAuth()
@Controller('cats')
export class CatsController {}
`),cf()()(),Aa(43,`p`),bT(44,`Before you run your application, add the security definition to your base document using `),Aa(45,`code`),bT(46,`DocumentBuilder`),cf(),bT(47,`:`),cf(),Aa(48,`app-copy-button`)(49,`pre`)(50,`code`,4),bT(51,`
const options = new DocumentBuilder().addBasicAuth();
`),cf()()(),Aa(52,`h4`,6)(53,`span`),bT(54,`Bearer authentication`),cf()(),Aa(55,`p`),bT(56,`To enable bearer authentication, use `),Aa(57,`code`),bT(58,`@ApiBearerAuth()`),cf(),bT(59,`:`),cf(),Aa(60,`app-copy-button`)(61,`pre`)(62,`code`,4),bT(63,`
@ApiBearerAuth()
@Controller('cats')
export class CatsController {}
`),cf()()(),Aa(64,`p`),bT(65,`Before you run your application, add the security definition to your base document using `),Aa(66,`code`),bT(67,`DocumentBuilder`),cf(),bT(68,`:`),cf(),Aa(69,`app-copy-button`)(70,`pre`)(71,`code`,4),bT(72,`
const options = new DocumentBuilder().addBearerAuth();
`),cf()()(),Aa(73,`h4`,7)(74,`span`),bT(75,`OAuth2 authentication`),cf()(),Aa(76,`p`),bT(77,`To enable OAuth2, use `),Aa(78,`code`),bT(79,`@ApiOAuth2()`),cf(),bT(80,`:`),cf(),Aa(81,`app-copy-button`)(82,`pre`)(83,`code`,4),bT(84,`
@ApiOAuth2(['pets:write'])
@Controller('cats')
export class CatsController {}
`),cf()()(),Aa(85,`p`),bT(86,`Before you run your application, add the security definition to your base document using `),Aa(87,`code`),bT(88,`DocumentBuilder`),cf(),bT(89,`:`),cf(),Aa(90,`app-copy-button`)(91,`pre`)(92,`code`,4),bT(93,`
const options = new DocumentBuilder().addOAuth2();
`),cf()()(),Aa(94,`h4`,8)(95,`span`),bT(96,`Cookie authentication`),cf()(),Aa(97,`p`),bT(98,`To enable cookie authentication, use `),Aa(99,`code`),bT(100,`@ApiCookieAuth()`),cf(),bT(101,`:`),cf(),Aa(102,`app-copy-button`)(103,`pre`)(104,`code`,4),bT(105,`
@ApiCookieAuth()
@Controller('cats')
export class CatsController {}
`),cf()()(),Aa(106,`p`),bT(107,`Before you run your application, add the security definition to your base document using `),Aa(108,`code`),bT(109,`DocumentBuilder`),cf(),bT(110,`:`),cf(),Aa(111,`app-copy-button`)(112,`pre`)(113,`code`,4),bT(114,`
const options = new DocumentBuilder().addCookieAuth('optional-session-id');
`),cf()()()(),Aa(115,`a`,9),Wa(116,`i`,10),Aa(117,`span`),bT(118,`Edit on GitHub`),cf()()())},dependencies:[ln,Lt],encapsulation:2})}return a})();var B=(()=>{class a extends xt{static ɵfac=(()=>{let r;return function(s){return(r||(r=im(a)))(s||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-openapi-types-parameters`]],features:[xy],decls:487,vars:1,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`types-and-parameters`],[1,`language-typescript`],[1,`info`],[`src`,`/assets/swagger-dto.png`],[`routerLink`,`/openapi/cli-plugin`],[`src`,`/assets/swagger-dto2.png`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://swagger.io/specification/#schemaObject`],[`appAnchor`,``,`id`,`arrays`],[`appAnchor`,``,`id`,`circular-dependencies`],[`appAnchor`,``,`id`,`generics-and-interfaces`],[`appAnchor`,``,`id`,`enums`],[`src`,`/assets/enum_query.gif`],[`src`,`/assets/enum_query_array.gif`],[`appAnchor`,``,`id`,`enums-schema`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://swagger.io/docs/specification/data-models/enums/`],[1,`language-yaml`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/RicoSuter/NSwag`],[`appAnchor`,``,`id`,`property-value-examples`],[`appAnchor`,``,`id`,`raw-definitions`],[`appAnchor`,``,`id`,`extra-models`],[`appAnchor`,``,`id`,`oneof-anyof-allof`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/`],[`appAnchor`,``,`id`,`schema-name-and-description`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/openapi/types-and-parameters.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,s){d&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Types and parameters`),cf(),Aa(5,`p`),bT(6,`The `),Aa(7,`code`),bT(8,`SwaggerModule`),cf(),bT(9,` searches for all `),Aa(10,`code`),bT(11,`@Body()`),cf(),bT(12,`, `),Aa(13,`code`),bT(14,`@Query()`),cf(),bT(15,`, `),Aa(16,`code`),bT(17,`@Param()`),cf(),bT(18,`, and `),Aa(19,`code`),bT(20,`@Headers()`),cf(),bT(21,` decorators in route handlers to generate the API document. It also uses reflection to create the corresponding model definitions. Consider the following code:`),cf(),Aa(22,`app-copy-button`)(23,`pre`)(24,`code`,4),bT(25,`
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()()(),Aa(26,`blockquote`,5)(27,`strong`),bT(28,`Hint`),cf(),bT(29,` To set the body definition explicitly, use the `),Aa(30,`code`),bT(31,`@ApiBody()`),cf(),bT(32,` decorator (imported from the `),Aa(33,`code`),bT(34,`@nestjs/swagger`),cf(),bT(35,` package).
`),cf(),Aa(36,`p`),bT(37,`Based on the `),Aa(38,`code`),bT(39,`CreateCatDto`),cf(),bT(40,`, Swagger UI shows the following model definition:`),cf(),Aa(41,`figure`),Wa(42,`img`,6),cf(),Aa(43,`p`),bT(44,`The definition is empty, even though the class declares a few properties. To make the class properties visible to the `),Aa(45,`code`),bT(46,`SwaggerModule`),cf(),bT(47,`, either annotate them with the `),Aa(48,`code`),bT(49,`@ApiProperty()`),cf(),bT(50,` decorator or use the `),Aa(51,`a`,7),bT(52,`CLI plugin`),cf(),bT(53,`, which does this automatically:`),cf(),Aa(54,`app-copy-button`)(55,`pre`)(56,`code`,4),bT(57,`
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
`),cf()()(),Aa(58,`blockquote`,5)(59,`strong`),bT(60,`Hint`),cf(),bT(61,` Instead of manually annotating each property, consider using the `),Aa(62,`a`,7),bT(63,`Swagger plugin`),cf(),bT(64,`, which adds these annotations for you.
`),cf(),Aa(65,`p`),bT(66,`Open the browser and verify the generated `),Aa(67,`code`),bT(68,`CreateCatDto`),cf(),bT(69,` model:`),cf(),Aa(70,`figure`),Wa(71,`img`,8),cf(),Aa(72,`p`),bT(73,`The `),Aa(74,`code`),bT(75,`@ApiProperty()`),cf(),bT(76,` decorator also lets you set various `),Aa(77,`a`,9),bT(78,`Schema Object`),cf(),bT(79,` properties:`),cf(),Aa(80,`app-copy-button`)(81,`pre`)(82,`code`,4),bT(83,`
@ApiProperty({
  description: 'The age of a cat',
  minimum: 1,
  default: 1,
})
age: number;
`),cf()()(),Aa(84,`blockquote`,5)(85,`strong`),bT(86,`Hint`),cf(),bT(87,` Instead of explicitly typing `),Aa(88,`code`),bT(89),cf(),bT(90,`, you can use the `),Aa(91,`code`),bT(92,`@ApiPropertyOptional()`),cf(),bT(93,` shorthand decorator.
`),cf(),Aa(94,`p`),bT(95,`To set the type of the property explicitly, use the `),Aa(96,`code`),bT(97,`type`),cf(),bT(98,` key:`),cf(),Aa(99,`app-copy-button`)(100,`pre`)(101,`code`,4),bT(102,`
@ApiProperty({
  type: Number,
})
age: number;
`),cf()()(),Aa(103,`h4`,10)(104,`span`),bT(105,`Arrays`),cf()(),Aa(106,`p`),bT(107,`When the property is an array, you must indicate the array type manually, as shown below:`),cf(),Aa(108,`app-copy-button`)(109,`pre`)(110,`code`,4),bT(111,`
@ApiProperty({ type: [String] })
names: string[];
`),cf()()(),Aa(112,`blockquote`,5)(113,`strong`),bT(114,`Hint`),cf(),bT(115,` Consider using the `),Aa(116,`a`,7),bT(117,`Swagger plugin`),cf(),bT(118,`, which detects arrays automatically.
`),cf(),Aa(119,`p`),bT(120,`Either pass the type as the first element of an array (as shown above) or set the `),Aa(121,`code`),bT(122,`isArray`),cf(),bT(123,` property to `),Aa(124,`code`),bT(125,`true`),cf(),bT(126,`.`),cf(),Aa(127,`p`),Wa(128,`app-banner-enterprise`),cf(),Aa(129,`h4`,11)(130,`span`),bT(131,`Circular dependencies`),cf()(),Aa(132,`p`),bT(133,`When you have circular dependencies between classes, use a lazy function to provide the `),Aa(134,`code`),bT(135,`SwaggerModule`),cf(),bT(136,` with type information:`),cf(),Aa(137,`app-copy-button`)(138,`pre`)(139,`code`,4),bT(140,`
@ApiProperty({ type: () => Node })
node: Node;
`),cf()()(),Aa(141,`blockquote`,5)(142,`strong`),bT(143,`Hint`),cf(),bT(144,` Consider using the `),Aa(145,`a`,7),bT(146,`Swagger plugin`),cf(),bT(147,`, which detects circular dependencies automatically.
`),cf(),Aa(148,`h4`,12)(149,`span`),bT(150,`Generics and interfaces`),cf()(),Aa(151,`p`),bT(152,`TypeScript doesn't store metadata about generics or interfaces, so when you use them in your DTOs, the `),Aa(153,`code`),bT(154,`SwaggerModule`),cf(),bT(155,` may not be able to generate model definitions correctly at runtime. For instance, the Swagger module can't correctly inspect the following code:`),cf(),Aa(156,`app-copy-button`)(157,`pre`)(158,`code`,4),bT(159,`
createBulk(@Body() usersDto: CreateUserDto[])
`),cf()()(),Aa(160,`p`),bT(161,`To overcome this limitation, set the type explicitly:`),cf(),Aa(162,`app-copy-button`)(163,`pre`)(164,`code`,4),bT(165,`
@ApiBody({ type: [CreateUserDto] })
createBulk(@Body() usersDto: CreateUserDto[])
`),cf()()(),Aa(166,`h4`,13)(167,`span`),bT(168,`Enums`),cf()(),Aa(169,`p`),bT(170,`To identify an `),Aa(171,`code`),bT(172,`enum`),cf(),bT(173,`, set the `),Aa(174,`code`),bT(175,`enum`),cf(),bT(176,` property of `),Aa(177,`code`),bT(178,`@ApiProperty()`),cf(),bT(179,` to an array of values:`),cf(),Aa(180,`app-copy-button`)(181,`pre`)(182,`code`,4),bT(183,`
@ApiProperty({ enum: ['Admin', 'Moderator', 'User']})
role: UserRole;
`),cf()()(),Aa(184,`p`),bT(185,`Alternatively, define an actual TypeScript enum as follows:`),cf(),Aa(186,`app-copy-button`)(187,`pre`)(188,`code`,4),bT(189,`
export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}
`),cf()()(),Aa(190,`p`),bT(191,`You can then use the enum directly with the `),Aa(192,`code`),bT(193,`@Query()`),cf(),bT(194,` parameter decorator, in combination with the `),Aa(195,`code`),bT(196,`@ApiQuery()`),cf(),bT(197,` decorator:`),cf(),Aa(198,`app-copy-button`)(199,`pre`)(200,`code`,4),bT(201,`
@ApiQuery({ name: 'role', enum: UserRole })
async filterByRole(@Query('role') role: UserRole = UserRole.User) {}
`),cf()()(),Aa(202,`figure`),Wa(203,`img`,14),cf(),Aa(204,`p`),bT(205,`With `),Aa(206,`code`),bT(207,`isArray`),cf(),bT(208,` set to `),Aa(209,`code`),bT(210,`true`),cf(),bT(211,`, the `),Aa(212,`code`),bT(213,`enum`),cf(),bT(214,` values can be selected in a `),Aa(215,`strong`),bT(216,`multi-select`),cf(),bT(217,`:`),cf(),Aa(218,`figure`),Wa(219,`img`,15),cf(),Aa(220,`h4`,16)(221,`span`),bT(222,`Enums schema`),cf()(),Aa(223,`p`),bT(224,`By default, the `),Aa(225,`code`),bT(226,`enum`),cf(),bT(227,` property adds a raw `),Aa(228,`a`,17),bT(229,`enum`),cf(),bT(230,` definition to the `),Aa(231,`code`),bT(232,`parameter`),cf(),bT(233,`:`),cf(),Aa(234,`pre`)(235,`code`,18),bT(236,`
- breed:
    type: 'string'
    enum:
      - Persian
      - Tabby
      - Siamese
`),cf()(),Aa(237,`p`),bT(238,`This specification works for most cases. However, if you use a tool that takes the specification as `),Aa(239,`strong`),bT(240,`input`),cf(),bT(241,` and generates `),Aa(242,`strong`),bT(243,`client-side`),cf(),bT(244,` code, the generated code may contain duplicated `),Aa(245,`code`),bT(246,`enums`),cf(),bT(247,`. Consider the following code snippet:`),cf(),Aa(248,`app-copy-button`)(249,`pre`)(250,`code`,4),bT(251,`
// generated client-side code
export class CatDetail {
  breed: CatDetailEnum;
}

export class CatInformation {
  breed: CatInformationEnum;
}

export enum CatDetailEnum {
  Persian = 'Persian',
  Tabby = 'Tabby',
  Siamese = 'Siamese',
}

export enum CatInformationEnum {
  Persian = 'Persian',
  Tabby = 'Tabby',
  Siamese = 'Siamese',
}
`),cf()()(),Aa(252,`blockquote`,5)(253,`strong`),bT(254,`Hint`),cf(),bT(255,` The above snippet is generated using a tool called `),Aa(256,`a`,19),bT(257,`NSwag`),cf(),bT(258,`.
`),cf(),Aa(259,`p`),bT(260,`The result contains two identical `),Aa(261,`code`),bT(262,`enums`),cf(),bT(263,`. To address this issue, pass an `),Aa(264,`code`),bT(265,`enumName`),cf(),bT(266,` along with the `),Aa(267,`code`),bT(268,`enum`),cf(),bT(269,` property in your decorator:`),cf(),Aa(270,`app-copy-button`)(271,`pre`)(272,`code`,4),bT(273,`
export class CatDetail {
  @ApiProperty({ enum: CatBreed, enumName: 'CatBreed' })
  breed: CatBreed;
}
`),cf()()(),Aa(274,`p`),bT(275,`The `),Aa(276,`code`),bT(277,`enumName`),cf(),bT(278,` property makes `),Aa(279,`code`),bT(280,`@nestjs/swagger`),cf(),bT(281,` turn `),Aa(282,`code`),bT(283,`CatBreed`),cf(),bT(284,` into its own `),Aa(285,`code`),bT(286,`schema`),cf(),bT(287,`, which makes the `),Aa(288,`code`),bT(289,`CatBreed`),cf(),bT(290,` enum reusable. The specification looks like the following:`),cf(),Aa(291,`pre`)(292,`code`,18),bT(293,`
CatDetail:
  type: 'object'
  properties:
    ...
    - breed:
        schema:
          $ref: '#/components/schemas/CatBreed'
CatBreed:
  type: string
  enum:
    - Persian
    - Tabby
    - Siamese
`),cf()(),Aa(294,`blockquote`,5)(295,`strong`),bT(296,`Hint`),cf(),bT(297,` The `),Aa(298,`code`),bT(299,`@ApiQuery()`),cf(),bT(300,` and `),Aa(301,`code`),bT(302,`@ApiParam()`),cf(),bT(303,` decorators also accept `),Aa(304,`code`),bT(305,`enumName`),cf(),bT(306,` alongside `),Aa(307,`code`),bT(308,`enum`),cf(),bT(309,`.
`),cf(),Aa(310,`h4`,20)(311,`span`),bT(312,`Property value examples`),cf()(),Aa(313,`p`),bT(314,`To set a single example for a property, use the `),Aa(315,`code`),bT(316,`example`),cf(),bT(317,` key:`),cf(),Aa(318,`app-copy-button`)(319,`pre`)(320,`code`,4),bT(321,`
@ApiProperty({
  example: 'persian',
})
breed: string;
`),cf()()(),Aa(322,`p`),bT(323,`To provide multiple examples, use the `),Aa(324,`code`),bT(325,`examples`),cf(),bT(326,` key and pass an object structured like this:`),cf(),Aa(327,`app-copy-button`)(328,`pre`)(329,`code`,4),bT(330,`
@ApiProperty({
  examples: {
    Persian: { value: 'persian' },
    Tabby: { value: 'tabby' },
    Siamese: { value: 'siamese' },
    'Scottish Fold': { value: 'scottish_fold' },
  },
})
breed: string;
`),cf()()(),Aa(331,`h4`,21)(332,`span`),bT(333,`Raw definitions`),cf()(),Aa(334,`p`),bT(335,`In certain cases, such as deeply nested arrays or matrices, you may need to define your type manually:`),cf(),Aa(336,`app-copy-button`)(337,`pre`)(338,`code`,4),bT(339,`
@ApiProperty({
  type: 'array',
  items: {
    type: 'array',
    items: {
      type: 'number',
    },
  },
})
coords: number[][];
`),cf()()(),Aa(340,`p`),bT(341,`You can also specify raw object schemas:`),cf(),Aa(342,`app-copy-button`)(343,`pre`)(344,`code`,4),bT(345,`
@ApiProperty({
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Error'
    },
    status: {
      type: 'number',
      example: 400
    }
  },
  required: ['name', 'status']
})
rawDefinition: Record<string, any>;
`),cf()()(),Aa(346,`p`),bT(347,`To manually define input/output content in controller classes, use the `),Aa(348,`code`),bT(349,`schema`),cf(),bT(350,` property:`),cf(),Aa(351,`app-copy-button`)(352,`pre`)(353,`code`,4),bT(354,`
@ApiBody({
  schema: {
    type: 'array',
    items: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
  },
})
async create(@Body() coords: number[][]) {}
`),cf()()(),Aa(355,`h4`,22)(356,`span`),bT(357,`Extra models`),cf()(),Aa(358,`p`),bT(359,`To define additional models that your controllers don't reference directly but the Swagger module should inspect, use the `),Aa(360,`code`),bT(361,`@ApiExtraModels()`),cf(),bT(362,` decorator:`),cf(),Aa(363,`app-copy-button`)(364,`pre`)(365,`code`,4),bT(366,`
@ApiExtraModels(ExtraModel)
export class CreateCatDto {}
`),cf()()(),Aa(367,`blockquote`,5)(368,`strong`),bT(369,`Hint`),cf(),bT(370,` You only need to use `),Aa(371,`code`),bT(372,`@ApiExtraModels()`),cf(),bT(373,` once for a specific model class.
`),cf(),Aa(374,`p`),bT(375,`Alternatively, pass an options object with the `),Aa(376,`code`),bT(377,`extraModels`),cf(),bT(378,` property to the `),Aa(379,`code`),bT(380,`SwaggerModule.createDocument()`),cf(),bT(381,` method:`),cf(),Aa(382,`app-copy-button`)(383,`pre`)(384,`code`,4),bT(385,`
const documentFactory = () =>
  SwaggerModule.createDocument(app, options, {
    extraModels: [ExtraModel],
  });
`),cf()()(),Aa(386,`p`),bT(387,`To get a reference (`),Aa(388,`code`),bT(389,`$ref`),cf(),bT(390,`) to your model, use the `),Aa(391,`code`),bT(392,`getSchemaPath(ExtraModel)`),cf(),bT(393,` function:`),cf(),Aa(394,`app-copy-button`)(395,`pre`)(396,`code`,4),bT(397,`
'application/vnd.api+json': {
   schema: { $ref: getSchemaPath(ExtraModel) },
},
`),cf()()(),Aa(398,`h4`,23)(399,`span`),bT(400,`oneOf, anyOf, allOf`),cf()(),Aa(401,`p`),bT(402,`To combine schemas, use the `),Aa(403,`code`),bT(404,`oneOf`),cf(),bT(405,`, `),Aa(406,`code`),bT(407,`anyOf`),cf(),bT(408,`, or `),Aa(409,`code`),bT(410,`allOf`),cf(),bT(411,` keywords (see `),Aa(412,`a`,24),bT(413,`oneOf, anyOf, allOf, not`),cf(),bT(414,` in the Swagger documentation):`),cf(),Aa(415,`app-copy-button`)(416,`pre`)(417,`code`,4),bT(418,`
@ApiProperty({
  oneOf: [
    { $ref: getSchemaPath(Cat) },
    { $ref: getSchemaPath(Dog) },
  ],
})
pet: Cat | Dog;
`),cf()()(),Aa(419,`p`),bT(420,`To define a polymorphic array (i.e., an array whose members span multiple schemas), use a raw definition (see above) to define your type by hand:`),cf(),Aa(421,`app-copy-button`)(422,`pre`)(423,`code`,4),bT(424,`
type Pet = Cat | Dog;

@ApiProperty({
  type: 'array',
  items: {
    oneOf: [
      { $ref: getSchemaPath(Cat) },
      { $ref: getSchemaPath(Dog) },
    ],
  },
})
pets: Pet[];
`),cf()()(),Aa(425,`blockquote`,5)(426,`strong`),bT(427,`Hint`),cf(),bT(428,` The `),Aa(429,`code`),bT(430,`getSchemaPath()`),cf(),bT(431,` function is imported from `),Aa(432,`code`),bT(433,`@nestjs/swagger`),cf(),bT(434,`.
`),cf(),Aa(435,`p`),bT(436,`Both `),Aa(437,`code`),bT(438,`Cat`),cf(),bT(439,` and `),Aa(440,`code`),bT(441,`Dog`),cf(),bT(442,` must be defined as extra models with the `),Aa(443,`code`),bT(444,`@ApiExtraModels()`),cf(),bT(445,` decorator (at the class level).`),cf(),Aa(446,`h4`,25)(447,`span`),bT(448,`Schema name and description`),cf()(),Aa(449,`p`),bT(450,`The name of the generated schema is based on the name of the original model class (for example, the `),Aa(451,`code`),bT(452,`CreateCatDto`),cf(),bT(453,` model generates a `),Aa(454,`code`),bT(455,`CreateCatDto`),cf(),bT(456,` schema). To change the schema name, use the `),Aa(457,`code`),bT(458,`@ApiSchema()`),cf(),bT(459,` decorator:`),cf(),Aa(460,`app-copy-button`)(461,`pre`)(462,`code`,4),bT(463,`
@ApiSchema({ name: 'CreateCatRequest' })
class CreateCatDto {}
`),cf()()(),Aa(464,`p`),bT(465,`The model above is translated into the `),Aa(466,`code`),bT(467,`CreateCatRequest`),cf(),bT(468,` schema.`),cf(),Aa(469,`p`),bT(470,`By default, the generated schema has no description. To add one, use the `),Aa(471,`code`),bT(472,`description`),cf(),bT(473,` attribute:`),cf(),Aa(474,`app-copy-button`)(475,`pre`)(476,`code`,4),bT(477,`
@ApiSchema({ description: 'Description of the CreateCatDto schema' })
class CreateCatDto {}
`),cf()()(),Aa(478,`p`),bT(479,`The description is then included in the schema:`),cf(),Aa(480,`pre`)(481,`code`,18),bT(482,`
schemas:
  CreateCatDto:
    type: object
    description: Description of the CreateCatDto schema
`),cf()()(),Aa(483,`a`,26),Wa(484,`i`,27),Aa(485,`span`),bT(486,`Edit on GitHub`),cf()()()),d&2&&(zC(89),Qy(`@ApiProperty({ required: false })`))},dependencies:[ln,Jc,Lt,l],encapsulation:2})}return a})();var Me=[{path:`introduction`,component:k,data:{title:`OpenAPI (Swagger)`}},{path:`types-and-parameters`,component:B,data:{title:`Types and Parameters - OpenAPI`}},{path:`operations`,component:M,data:{title:`Operations - OpenAPI`}},{path:`security`,component:F,data:{title:`Security - OpenAPI`}},{path:`decorators`,component:I,data:{title:`Decorators - OpenAPI`}},{path:`mapped-types`,component:O,data:{title:`Mapped Types - OpenAPI`}},{path:`cli-plugin`,component:P,data:{title:`CLI Plugin - OpenAPI`}},{path:`other-features`,component:j,data:{title:`Other features - OpenAPI`}}];export{Me as OPENAPI_ROUTES};