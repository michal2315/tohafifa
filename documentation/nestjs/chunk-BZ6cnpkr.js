import{A as tv,C as hf,M as xy,N as zC,P as zy,S as ev,T as jT,_ as Wa,a as u,b as cf,c as l$2,d as Jc,f as Jy,i as g,k as tT,l as Aa,m as LT,n as ln,o as l$1,p as Ky,r as xt,s as l,t as Lt,v as Xy,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";import{t as f}from"./chunk-BfAzJNW5.js";var pe=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-configuration`]],features:[xy],decls:1328,vars:69,consts:[[`contentReference`,``],[`app136aa615d37e7e6704ed536be61bd2c1a119b748`,``],[`app5bfa1d386320159663e0b615ff0d608486475994`,``],[`app92a5a1a4008374b3c880a33f0178d3c9a53fefd8`,``],[`appbea0c68dcd54b89f998988f5bc7f0ec850e3b831`,``],[`app96dac74a550c19cf284764ef00f4bb8e4e944cfd`,``],[`app65870231586eb57c5f2a03d1f5b91e848c5e3900`,``],[`appf9cbe1b38416373a717d1dccd4f1efd3cbdd20eb`,``],[`app6602c94a3b7d5050e8a3b253932c085fe5ead63c`,``],[`app14d119ecd4b0b93d0ed177129cb502267b7d7802`,``],[`appb1fcef6ffc81c073efcef914f58941a8e74dd4d0`,``],[`app984e5863b5b57c3b72985ab1d1192fa6c2a052d0`,``],[`app3f2b500e838f82095a39be006dd9f59f64a53345`,``],[`app4ee565fc0a0daaa177b70c1ab57a1ad3ad573432`,``],[`app289e133da489c83b066aea8649ef99ae8a4ed292`,``],[1,`content`],[1,`content-inner`],[`id`,`configuration`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://12factor.net/config`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/motdotla/dotenv`],[1,`warning`],[`appAnchor`,``,`id`,`getting-started`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`language-json`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/dist/v20.18.1/docs/api/cli.html#--env-fileconfig`],[`appAnchor`,``,`id`,`custom-env-file-path`],[`appAnchor`,``,`id`,`disable-env-variables-loading`],[`appAnchor`,``,`id`,`native-env-support`],[`href`,`/application/configuration#expandable-variables`],[`appAnchor`,``,`id`,`use-module-globally`],[`href`,`/modules#global-modules`],[`appAnchor`,``,`id`,`custom-configuration-files`],[`href`,`/application/configuration#getting-started`],[1,`language-yaml`],[`href`,`/cli/monorepo#assets`],[`appAnchor`,``,`id`,`using-the-configservice`],[`href`,`/application/configuration#custom-configuration-files`],[`appAnchor`,``,`id`,`configuration-namespaces`],[`appAnchor`,``,`id`,`namespaced-configurations-in-modules`],[`appAnchor`,``,`id`,`cache-environment-variables`],[`appAnchor`,``,`id`,`partial-registration`],[`appAnchor`,``,`id`,`schema-validation`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://zod.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://valibot.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://arktype.io/`],[`appAnchor`,``,`id`,`custom-validate-function`],[`appAnchor`,``,`id`,`custom-getter-functions`],[`appAnchor`,``,`id`,`environment-variables-loaded-hook`],[`appAnchor`,``,`id`,`conditional-module-configuration`],[`appAnchor`,``,`id`,`expandable-variables`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/motdotla/dotenv-expand`],[`appAnchor`,``,`id`,`using-in-the-maints`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/configuration.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,15,0)(2,`div`,16)(3,`h3`,17),bT(4,`Configuration`),cf(),Aa(5,`p`),bT(6,`Applications often run in different `),Aa(7,`strong`),bT(8,`environments`),cf(),bT(9,`, and each environment needs its own configuration settings. For example, the local environment typically relies on database credentials that are valid only for the local database instance, while the production environment uses a separate set of credentials. Since configuration variables change between environments, best practice is to `),Aa(10,`a`,18),bT(11,`store configuration variables`),cf(),bT(12,` in the environment.`),cf(),Aa(13,`p`),bT(14,`Externally defined environment variables are visible inside Node.js through the `),Aa(15,`code`),bT(16,`process.env`),cf(),bT(17,` global. You could handle multiple environments by setting the environment variables separately in each one. This quickly gets unwieldy, especially in development and testing environments, where these values need to be easy to mock or change.`),cf(),Aa(18,`p`),bT(19,`In Node.js applications, it's common to represent each environment with a `),Aa(20,`code`),bT(21,`.env`),cf(),bT(22,` file that holds key-value pairs. Running an app in a different environment is then a matter of swapping in the correct `),Aa(23,`code`),bT(24,`.env`),cf(),bT(25,` file.`),cf(),Aa(26,`p`),bT(27,`A good way to apply this technique in Nest is to create a `),Aa(28,`code`),bT(29,`ConfigModule`),cf(),bT(30,` that exposes a `),Aa(31,`code`),bT(32,`ConfigService`),cf(),bT(33,`, which loads the appropriate `),Aa(34,`code`),bT(35,`.env`),cf(),bT(36,` file. You can write such a module yourself, but for convenience, Nest provides the `),Aa(37,`code`),bT(38,`@nestjs/config`),cf(),bT(39,` package. This chapter covers that package.`),cf(),Aa(40,`h4`,19)(41,`span`),bT(42,`Installation`),cf()(),Aa(43,`p`),bT(44,`To get started, install the required dependency:`),cf(),Aa(45,`pre`)(46,`code`,20),bT(47,`
$ npm i --save @nestjs/config
`),cf()(),Aa(48,`blockquote`,21)(49,`strong`),bT(50,`Hint`),cf(),bT(51,` The `),Aa(52,`code`),bT(53,`@nestjs/config`),cf(),bT(54,` package internally uses `),Aa(55,`a`,22),bT(56,`dotenv`),cf(),bT(57,`.
`),cf(),Aa(58,`blockquote`,23)(59,`strong`),bT(60,`Note`),cf(),Aa(61,`code`),bT(62,`@nestjs/config`),cf(),bT(63,` requires TypeScript 4.1 or later.
`),cf(),Aa(64,`h4`,24)(65,`span`),bT(66,`Getting started`),cf()(),Aa(67,`p`),bT(68,`Once the installation is complete, import the `),Aa(69,`code`),bT(70,`ConfigModule`),cf(),bT(71,`. Typically, you import it into the root `),Aa(72,`code`),bT(73,`AppModule`),cf(),bT(74,` and control its behavior with the `),Aa(75,`code`),bT(76,`.forRoot()`),cf(),bT(77,` static method. During this step, environment variable key/value pairs are parsed and resolved. Later, you'll see several options for accessing the `),Aa(78,`code`),bT(79,`ConfigService`),cf(),bT(80,` class of the `),Aa(81,`code`),bT(82,`ConfigModule`),cf(),bT(83,` in other feature modules.`),cf(),Aa(84,`app-copy-button`,25)(85,`span`,26),bT(86),LT(87,`extension`),Wa(88,`app-tabs`,null,1),cf(),Aa(90,`pre`)(91,`code`,27),bT(92,`
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
`),cf()()(),Aa(93,`p`),bT(94,`This code loads and parses a `),Aa(95,`code`),bT(96,`.env`),cf(),bT(97,` file from the default location (the directory the process is started from, typically the project root), merges the key/value pairs from the `),Aa(98,`code`),bT(99,`.env`),cf(),bT(100,` file with the environment variables assigned to `),Aa(101,`code`),bT(102,`process.env`),cf(),bT(103,`, and stores the result in a private structure that you can access through the `),Aa(104,`code`),bT(105,`ConfigService`),cf(),bT(106,`. The `),Aa(107,`code`),bT(108,`forRoot()`),cf(),bT(109,` method registers the `),Aa(110,`code`),bT(111,`ConfigService`),cf(),bT(112,` provider, which provides a `),Aa(113,`code`),bT(114,`get()`),cf(),bT(115,` method for reading these parsed and merged configuration variables. Since `),Aa(116,`code`),bT(117,`@nestjs/config`),cf(),bT(118,` relies on `),Aa(119,`a`,22),bT(120,`dotenv`),cf(),bT(121,`, it uses that package's rules for resolving conflicts in environment variable names. When a key exists both in the runtime environment (e.g., set through a shell export like `),Aa(122,`code`),bT(123,`export DATABASE_USER=test`),cf(),bT(124,`) and in a `),Aa(125,`code`),bT(126,`.env`),cf(),bT(127,` file, the runtime environment variable takes precedence. To let values from the `),Aa(128,`code`),bT(129,`.env`),cf(),bT(130,` file win instead, set the `),Aa(131,`code`),bT(132,`override`),cf(),bT(133,` option to `),Aa(134,`code`),bT(135,`true`),cf(),bT(136,`.`),cf(),Aa(137,`p`),bT(138,`A sample `),Aa(139,`code`),bT(140,`.env`),cf(),bT(141,` file looks like this:`),cf(),Aa(142,`pre`)(143,`code`,28),bT(144,`
DATABASE_USER=test
DATABASE_PASSWORD=test
`),cf()(),Aa(145,`p`),bT(146,`If you need some environment variables to be available before the `),Aa(147,`code`),bT(148,`ConfigModule`),cf(),bT(149,` is loaded and the Nest application is bootstrapped (for example, to pass the microservice configuration to the `),Aa(150,`code`),bT(151,`NestFactory#createMicroservice()`),cf(),bT(152,` method), use the `),Aa(153,`code`),bT(154,`--env-file`),cf(),bT(155,` option of the Nest CLI. It specifies the path to a `),Aa(156,`code`),bT(157,`.env`),cf(),bT(158,` file to load before the application starts. The CLI passes the file to the Node.js `),Aa(159,`code`),bT(160,`--env-file`),cf(),bT(161,` flag; see the `),Aa(162,`a`,29),bT(163,`Node.js documentation`),cf(),bT(164,` for details.`),cf(),Aa(165,`pre`)(166,`code`,20),bT(167,`
$ nest start --env-file .env
`),cf()(),Aa(168,`h4`,30)(169,`span`),bT(170,`Custom env file path`),cf()(),Aa(171,`p`),bT(172,`By default, the package looks for a `),Aa(173,`code`),bT(174,`.env`),cf(),bT(175,` file in the current working directory (typically the root directory of the application). To specify another path for the `),Aa(176,`code`),bT(177,`.env`),cf(),bT(178,` file, set the `),Aa(179,`code`),bT(180,`envFilePath`),cf(),bT(181,` property of the optional options object you pass to `),Aa(182,`code`),bT(183,`forRoot()`),cf(),bT(184,`, as follows:`),cf(),Aa(185,`app-copy-button`)(186,`pre`)(187,`code`,27),bT(188,`
ConfigModule.forRoot({
  envFilePath: '.development.env',
});
`),cf()()(),Aa(189,`p`),bT(190,`You can also specify multiple paths for `),Aa(191,`code`),bT(192,`.env`),cf(),bT(193,` files:`),cf(),Aa(194,`app-copy-button`)(195,`pre`)(196,`code`,27),bT(197,`
ConfigModule.forRoot({
  envFilePath: ['.env.development.local', '.env.development'],
});
`),cf()()(),Aa(198,`p`),bT(199,`If a variable is found in multiple files, the first one takes precedence.`),cf(),Aa(200,`h4`,31)(201,`span`),bT(202,`Disable env variables loading`),cf()(),Aa(203,`p`),bT(204,`If you don't want to load the `),Aa(205,`code`),bT(206,`.env`),cf(),bT(207,` file and only want to access environment variables from the runtime environment (e.g., set through shell exports like `),Aa(208,`code`),bT(209,`export DATABASE_USER=test`),cf(),bT(210,`), set the `),Aa(211,`code`),bT(212,`ignoreEnvFile`),cf(),bT(213,` property of the options object to `),Aa(214,`code`),bT(215,`true`),cf(),bT(216,`:`),cf(),Aa(217,`app-copy-button`)(218,`pre`)(219,`code`,27),bT(220,`
ConfigModule.forRoot({
  ignoreEnvFile: true,
});
`),cf()()(),Aa(221,`h4`,32)(222,`span`),bT(223,`Native `),Aa(224,`code`),bT(225,`.env`),cf(),bT(226,` support`),cf()(),Aa(227,`p`),bT(228,`Node.js can load a `),Aa(229,`code`),bT(230,`.env`),cf(),bT(231,` file by itself, with the `),Aa(232,`code`),bT(233,`--env-file`),cf(),bT(234,` flag (the `),Aa(235,`code`),bT(236,`nest start --env-file`),cf(),bT(237,` option shown above relies on it) or with the `),Aa(238,`code`),bT(239,`process.loadEnvFile()`),cf(),bT(240,` method. To let Node.js load the file and keep using `),Aa(241,`code`),bT(242,`ConfigModule`),cf(),bT(243,` for everything else, set `),Aa(244,`code`),bT(245,`ignoreEnvFile`),cf(),bT(246,` to `),Aa(247,`code`),bT(248,`true`),cf(),bT(249,` as shown above, so that the module reads only `),Aa(250,`code`),bT(251,`process.env`),cf(),bT(252,`:`),cf(),Aa(253,`pre`)(254,`code`,20),bT(255,`
$ node --env-file=.env dist/main.js
`),cf()(),Aa(256,`p`),bT(257,`Since the variables are already in `),Aa(258,`code`),bT(259,`process.env`),cf(),bT(260,` when `),Aa(261,`code`),bT(262,`forRoot()`),cf(),bT(263,` runs, validation, `),Aa(264,`code`),bT(265,`ConfigService#get()`),cf(),bT(266,`, and `),Aa(267,`code`),bT(268,`registerAs()`),cf(),bT(269,` factories work as usual. `),Aa(270,`code`),bT(271,`ConfigModule`),cf(),bT(272,` treats these variables as predefined, though, so they're validated only while `),Aa(273,`code`),bT(274,`validatePredefined`),cf(),bT(275,` keeps its default value of `),Aa(276,`code`),bT(277,`true`),cf(),bT(278,`. A variable that is already set in the runtime environment always wins over the file (there's no equivalent of the `),Aa(279,`code`),bT(280,`override`),cf(),bT(281,` option), and with several `),Aa(282,`code`),bT(283,`--env-file`),cf(),bT(284,` flags, the last file takes precedence, which is the opposite of `),Aa(285,`code`),bT(286,`envFilePath`),cf(),bT(287,`.`),cf(),Aa(288,`p`)(289,`code`),bT(290,`process.loadEnvFile()`),cf(),bT(291,` must run before `),Aa(292,`code`),bT(293,`AppModule`),cf(),bT(294,` is imported, because `),Aa(295,`code`),bT(296,`forRoot()`),cf(),bT(297,` reads `),Aa(298,`code`),bT(299,`process.env`),cf(),bT(300,` while the `),Aa(301,`code`),bT(302,`app.module`),cf(),bT(303,` file is being evaluated. A call in the body of `),Aa(304,`code`),bT(305,`main.ts`),cf(),bT(306,` comes too late, so put it in a separate file and import that file first:`),cf(),Aa(307,`app-copy-button`,25)(308,`span`,26),bT(309),LT(310,`extension`),Wa(311,`app-tabs`,null,2),cf(),Aa(313,`pre`)(314,`code`,27),bT(315,`
import './load-env.js'; // contains only process.loadEnvFile()
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
`),cf()()(),Aa(316,`p`),bT(317,`Alternatively, keep `),Aa(318,`code`),bT(319,`ConfigModule`),cf(),bT(320,` in charge of loading the files (`),Aa(321,`code`),bT(322,`envFilePath`),cf(),bT(323,`, `),Aa(324,`code`),bT(325,`override`),cf(),bT(326,`, and so on) and replace only the parser through the `),Aa(327,`code`),bT(328,`parser`),cf(),bT(329,` option. The parser receives the contents of each file as a `),Aa(330,`code`),bT(331,`Buffer`),cf(),bT(332,` and returns the key/value pairs (the default is `),Aa(333,`code`),bT(334,`dotenv.parse`),cf(),bT(335,`). Since `),Aa(336,`code`),bT(337,`util.parseEnv()`),cf(),bT(338,` accepts only a string, convert the buffer first:`),cf(),Aa(339,`app-copy-button`)(340,`pre`)(341,`code`,27),bT(342,`
import { parseEnv } from 'node:util';

ConfigModule.forRoot({
  parser: (buf) => parseEnv(buf.toString()),
});
`),cf()()(),Aa(343,`blockquote`,23)(344,`strong`),bT(345,`Warning`),cf(),bT(346,` The Node.js parser behind these APIs isn't fully compatible with dotenv. For example, a UTF-8 BOM ends up in the first key name, a quote inside a quoted value ends the value (`),Aa(347,`code`),bT(348,`'it's here'`),cf(),bT(349,` becomes `),Aa(350,`code`),bT(351,`it`),cf(),bT(352,`), and a value made only of spaces swallows the next line, so the variable defined there is lost. Its behavior has also changed across Node.js 20.x and 22.x minor releases. Node.js doesn't expand variables, and `),Aa(353,`code`),bT(354,`parseEnv()`),cf(),bT(355,` returns the keys sorted by name, so don't combine the `),Aa(356,`code`),bT(357,`parser`),cf(),bT(358,` option with `),Aa(359,`a`,33)(360,`code`),bT(361,`expandVariables`),cf()(),bT(362,`: a reference to a variable whose name sorts later resolves as if that variable weren't set.
`),cf(),Aa(363,`h4`,34)(364,`span`),bT(365,`Use module globally`),cf()(),Aa(366,`p`),bT(367,`To use `),Aa(368,`code`),bT(369,`ConfigModule`),cf(),bT(370,` in other modules, you need to import it (as with any Nest module). Alternatively, declare it as a `),Aa(371,`a`,35),bT(372,`global module`),cf(),bT(373,` by setting the `),Aa(374,`code`),bT(375,`isGlobal`),cf(),bT(376,` property of the options object to `),Aa(377,`code`),bT(378,`true`),cf(),bT(379,`, as shown below. In that case, once `),Aa(380,`code`),bT(381,`ConfigModule`),cf(),bT(382,` is loaded in the root module (e.g., `),Aa(383,`code`),bT(384,`AppModule`),cf(),bT(385,`), you don't need to import it in other modules.`),cf(),Aa(386,`app-copy-button`)(387,`pre`)(388,`code`,27),bT(389,`
ConfigModule.forRoot({
  isGlobal: true,
});
`),cf()()(),Aa(390,`h4`,36)(391,`span`),bT(392,`Custom configuration files`),cf()(),Aa(393,`p`),bT(394,`For more complex projects, you can use custom configuration files that return nested configuration objects. This lets you group related configuration settings by function (e.g., database-related settings) and store them in individual files, so you can manage them independently.`),cf(),Aa(395,`p`),bT(396,`A custom configuration file exports a factory function that returns a configuration object. The configuration object can be any arbitrarily nested plain JavaScript object. Inside the factory, the `),Aa(397,`code`),bT(398,`process.env`),cf(),bT(399,` object contains the fully resolved environment variable key/value pairs (with the `),Aa(400,`code`),bT(401,`.env`),cf(),bT(402,` file and externally defined variables resolved and merged as described in `),Aa(403,`a`,37),bT(404,`Getting started`),cf(),bT(405,`). Since you control the returned configuration object, you can add any logic you need to cast values to the appropriate type, set default values, and so on. For example:`),cf(),Aa(406,`app-copy-button`,25)(407,`span`,26),bT(408),LT(409,`extension`),Wa(410,`app-tabs`,null,3),cf(),Aa(412,`pre`)(413,`code`,27),bT(414,`
export default () => ({
  port: parseInt(process.env.PORT ?? '', 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT ?? '', 10) || 5432
  }
});
`),cf()()(),Aa(415,`p`),bT(416,`Load this file with the `),Aa(417,`code`),bT(418,`load`),cf(),bT(419,` property of the options object you pass to the `),Aa(420,`code`),bT(421,`ConfigModule.forRoot()`),cf(),bT(422,` method:`),cf(),Aa(423,`app-copy-button`)(424,`pre`)(425,`code`,27),bT(426,`
import configuration from './config/configuration.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(427,`blockquote`,21)(428,`strong`),bT(429,`Hint`),cf(),bT(430,` The value assigned to the `),Aa(431,`code`),bT(432,`load`),cf(),bT(433,` property is an array, so you can load multiple configuration files (e.g., `),Aa(434,`code`),bT(435,`load: [databaseConfig, authConfig]`),cf(),bT(436,`).
`),cf(),Aa(437,`p`),bT(438,`Custom configuration files also let you load configuration from other formats, such as YAML. Here is an example of a configuration in YAML format:`),cf(),Aa(439,`pre`)(440,`code`,38),bT(441,`
http:
  host: 'localhost'
  port: 8080

db:
  postgres:
    url: 'localhost'
    port: 5432
    database: 'yaml-db'

  sqlite:
    database: 'sqlite.db'
`),cf()(),Aa(442,`p`),bT(443,`To read and parse YAML files, you can use the `),Aa(444,`code`),bT(445,`js-yaml`),cf(),bT(446,` package:`),cf(),Aa(447,`pre`)(448,`code`,20),bT(449,`
$ npm i js-yaml
`),cf()(),Aa(450,`p`),bT(451,`Once the package is installed, use its `),Aa(452,`code`),bT(453,`load()`),cf(),bT(454,` function to read the YAML file created above:`),cf(),Aa(455,`app-copy-button`,25)(456,`span`,26),bT(457),LT(458,`extension`),Wa(459,`app-tabs`,null,4),cf(),Aa(461,`pre`)(462,`code`,27),bT(463,`
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { load } from 'js-yaml';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
  return load(
    readFileSync(join(import.meta.dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};
`),cf()()(),Aa(464,`blockquote`,23)(465,`strong`),bT(466,`Note`),cf(),bT(467,` The Nest CLI doesn't automatically copy your "assets" (non-TS files) to the `),Aa(468,`code`),bT(469,`dist`),cf(),bT(470,` folder during the build process. To make sure that your YAML files are copied, specify them in the `),Aa(471,`code`),bT(472,`compilerOptions#assets`),cf(),bT(473,` object in the `),Aa(474,`code`),bT(475,`nest-cli.json`),cf(),bT(476,` file. As an example, if the `),Aa(477,`code`),bT(478,`config`),cf(),bT(479,` folder is at the same level as the `),Aa(480,`code`),bT(481,`src`),cf(),bT(482,` folder, add `),Aa(483,`code`),bT(484,`compilerOptions#assets`),cf(),bT(485,` with the value `),Aa(486,`code`),bT(487),cf(),bT(488,`. See `),Aa(489,`a`,39),bT(490,`Assets`),cf(),bT(491,` for details.
`),cf(),Aa(492,`p`),bT(493,`Configuration files aren't validated automatically, even if you use the `),Aa(494,`code`),bT(495,`validationSchema`),cf(),bT(496,` option of the `),Aa(497,`code`),bT(498,`ConfigModule`),cf(),bT(499,` (it only applies to environment variables). If you need validation or want to apply transformations, handle them in the factory function, where you have full control over the configuration object.`),cf(),Aa(500,`p`),bT(501,`For example, to ensure that the port is within a certain range, add a validation step to the factory function:`),cf(),Aa(502,`app-copy-button`,25)(503,`span`,26),bT(504),LT(505,`extension`),Wa(506,`app-tabs`,null,5),cf(),Aa(508,`pre`)(509,`code`,27),bT(510,`
export default () => {
  const config = load(
    readFileSync(join(import.meta.dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;

  if (config.http.port < 1024 || config.http.port > 49151) {
    throw new Error('HTTP port must be between 1024 and 49151');
  }

  return config;
};
`),cf()()(),Aa(511,`p`),bT(512,`Now, if the port is outside the specified range, the application throws an error during startup.`),cf(),Aa(513,`p`),Wa(514,`app-banner-observe`),cf(),Aa(515,`h4`,40)(516,`span`),bT(517,`Using the `),Aa(518,`code`),bT(519,`ConfigService`),cf()()(),Aa(520,`p`),bT(521,`To access configuration values, first inject `),Aa(522,`code`),bT(523,`ConfigService`),cf(),bT(524,`. As with any provider, you need to import its containing module, the `),Aa(525,`code`),bT(526,`ConfigModule`),cf(),bT(527,`, into the module that uses it (unless you set the `),Aa(528,`code`),bT(529,`isGlobal`),cf(),bT(530,` property of the options object passed to `),Aa(531,`code`),bT(532,`ConfigModule.forRoot()`),cf(),bT(533,` to `),Aa(534,`code`),bT(535,`true`),cf(),bT(536,`). Import it into a feature module as shown below:`),cf(),Aa(537,`app-copy-button`,25)(538,`span`,26),bT(539),LT(540,`extension`),Wa(541,`app-tabs`,null,6),cf(),Aa(543,`pre`)(544,`code`,27),bT(545,`
@Module({
  imports: [ConfigModule],
  // ...
})
`),cf()()(),Aa(546,`p`),bT(547,`Then inject it through the constructor:`),cf(),Aa(548,`app-copy-button`)(549,`pre`)(550,`code`,27),bT(551,`
constructor(private configService: ConfigService) {}
`),cf()()(),Aa(552,`blockquote`,21)(553,`strong`),bT(554,`Hint`),cf(),bT(555,` Import `),Aa(556,`code`),bT(557,`ConfigService`),cf(),bT(558,` from the `),Aa(559,`code`),bT(560,`@nestjs/config`),cf(),bT(561,` package.
`),cf(),Aa(562,`p`),bT(563,`Then use it in your class:`),cf(),Aa(564,`app-copy-button`)(565,`pre`)(566,`code`,27),bT(567,`
// get an environment variable
const dbUser = this.configService.get<string>('DATABASE_USER');

// get a custom configuration value
const dbHost = this.configService.get<string>('database.host');
`),cf()()(),Aa(568,`p`),bT(569,`As shown above, use the `),Aa(570,`code`),bT(571,`configService.get()`),cf(),bT(572,` method to get a simple environment variable by passing the variable name. You can pass a type argument as a TypeScript type hint (e.g., `),Aa(573,`code`),bT(574,`get<string>(...)`),cf(),bT(575,`). The `),Aa(576,`code`),bT(577,`get()`),cf(),bT(578,` method can also traverse a nested custom configuration object (created with a `),Aa(579,`a`,41),bT(580,`custom configuration file`),cf(),bT(581,`), as shown in the second example.`),cf(),Aa(582,`p`),bT(583,`You can also get the whole nested custom configuration object using an interface as the type hint:`),cf(),Aa(584,`app-copy-button`)(585,`pre`)(586,`code`,27),bT(587,`
interface DatabaseConfig {
  host: string;
  port: number;
}

const dbConfig = this.configService.get<DatabaseConfig>('database');

// you can now use \`dbConfig.port\` and \`dbConfig.host\`
const port = dbConfig.port;
`),cf()()(),Aa(588,`p`),bT(589,`The `),Aa(590,`code`),bT(591,`get()`),cf(),bT(592,` method also takes an optional second argument that defines a default value, returned when the key doesn't exist:`),cf(),Aa(593,`app-copy-button`)(594,`pre`)(595,`code`,27),bT(596,`
// use "localhost" when "database.host" is not defined
const dbHost = this.configService.get<string>('database.host', 'localhost');
`),cf()()(),Aa(597,`p`),bT(598,`If a value is required, use the `),Aa(599,`code`),bT(600,`getOrThrow()`),cf(),bT(601,` method instead. It accepts the same arguments as `),Aa(602,`code`),bT(603,`get()`),cf(),bT(604,`, but throws an error if the resolved value is `),Aa(605,`code`),bT(606,`undefined`),cf(),bT(607,`, and its return type excludes `),Aa(608,`code`),bT(609,`undefined`),cf(),bT(610,`:`),cf(),Aa(611,`app-copy-button`)(612,`pre`)(613,`code`,27),bT(614,`
// throws if "DATABASE_USER" is not defined
const dbUser = this.configService.getOrThrow<string>('DATABASE_USER');
`),cf()()(),Aa(615,`p`)(616,`code`),bT(617,`ConfigService`),cf(),bT(618,` has two optional generics (type arguments). The first one helps prevent accessing a configuration property that doesn't exist:`),cf(),Aa(619,`app-copy-button`)(620,`pre`)(621,`code`,27),bT(622,`
interface EnvironmentVariables {
  PORT: number;
  TIMEOUT: string;
}

// somewhere in the code
constructor(private configService: ConfigService<EnvironmentVariables>) {
  const port = this.configService.get('PORT', { infer: true });

  // TypeScript Error: this is invalid as the URL property is not defined in EnvironmentVariables
  const url = this.configService.get('URL', { infer: true });
}
`),cf()()(),Aa(623,`p`),bT(624,`With the `),Aa(625,`code`),bT(626,`infer`),cf(),bT(627,` property set to `),Aa(628,`code`),bT(629,`true`),cf(),bT(630,`, the `),Aa(631,`code`),bT(632,`ConfigService#get`),cf(),bT(633,` method infers the property type from the interface. For example, `),Aa(634,`code`),bT(635,`port`),cf(),bT(636,` is typed as `),Aa(637,`code`),bT(638,`number`),cf(),bT(639,`, since `),Aa(640,`code`),bT(641,`PORT`),cf(),bT(642,` has a `),Aa(643,`code`),bT(644,`number`),cf(),bT(645,` type in the `),Aa(646,`code`),bT(647,`EnvironmentVariables`),cf(),bT(648,` interface (with the `),Aa(649,`code`),bT(650,`strictNullChecks`),cf(),bT(651,` compiler option enabled, the type is `),Aa(652,`code`),bT(653,`number | undefined`),cf(),bT(654,`).`),cf(),Aa(655,`p`),bT(656,`With the `),Aa(657,`code`),bT(658,`infer`),cf(),bT(659,` feature, you can also infer the type of a nested custom configuration object's property, even when using dot notation:`),cf(),Aa(660,`app-copy-button`)(661,`pre`)(662,`code`,27),bT(663,`
constructor(private configService: ConfigService<{ database: { host: string } }>) {
  const dbHost = this.configService.get('database.host', { infer: true })!;
  // typeof dbHost === "string"                                          |
  //                                                                     +--> non-null assertion operator
}
`),cf()()(),Aa(664,`p`),bT(665,`The second generic relies on the first one. It acts as a type assertion that removes the `),Aa(666,`code`),bT(667,`undefined`),cf(),bT(668,` type that the `),Aa(669,`code`),bT(670,`ConfigService`),cf(),bT(671,` methods can return when `),Aa(672,`code`),bT(673,`strictNullChecks`),cf(),bT(674,` is enabled. For instance:`),cf(),Aa(675,`app-copy-button`)(676,`pre`)(677,`code`,27),bT(678,`
// ...
constructor(private configService: ConfigService<{ PORT: number }, true>) {
  //                                                               ^^^^
  const port = this.configService.get('PORT', { infer: true });
  //    ^^^ The type of port is 'number', so you don't need TS type assertions
}
`),cf()()(),Aa(679,`blockquote`,21)(680,`strong`),bT(681,`Hint`),cf(),bT(682,` To make the `),Aa(683,`code`),bT(684,`ConfigService#get`),cf(),bT(685,` method ignore `),Aa(686,`code`),bT(687,`process.env`),cf(),bT(688,` variables and retrieve values only from custom configuration files (and from validated environment variables, if you use validation), set the `),Aa(689,`code`),bT(690,`skipProcessEnv`),cf(),bT(691,` option to `),Aa(692,`code`),bT(693,`true`),cf(),bT(694,` in the options object passed to `),Aa(695,`code`),bT(696,`ConfigModule.forRoot()`),cf(),bT(697,`.
`),cf(),Aa(698,`h4`,42)(699,`span`),bT(700,`Configuration namespaces`),cf()(),Aa(701,`p`),bT(702,`The `),Aa(703,`code`),bT(704,`ConfigModule`),cf(),bT(705,` lets you define and load multiple custom configuration files, as shown in `),Aa(706,`a`,41),bT(707,`Custom configuration files`),cf(),bT(708,` above. You can manage complex configuration hierarchies with nested configuration objects, as shown in that section. Alternatively, you can return a "namespaced" configuration object with the `),Aa(709,`code`),bT(710,`registerAs()`),cf(),bT(711,` function, as follows:`),cf(),Aa(712,`app-copy-button`,25)(713,`span`,26),bT(714),LT(715,`extension`),Wa(716,`app-tabs`,null,7),cf(),Aa(718,`pre`)(719,`code`,27),bT(720,`
export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 5432
}));
`),cf()()(),Aa(721,`p`),bT(722,`As with custom configuration files, inside your `),Aa(723,`code`),bT(724,`registerAs()`),cf(),bT(725,` factory function, the `),Aa(726,`code`),bT(727,`process.env`),cf(),bT(728,` object contains the fully resolved environment variable key/value pairs (with the `),Aa(729,`code`),bT(730,`.env`),cf(),bT(731,` file and externally defined variables resolved and merged as described in `),Aa(732,`a`,37),bT(733,`Getting started`),cf(),bT(734,`).`),cf(),Aa(735,`blockquote`,21)(736,`strong`),bT(737,`Hint`),cf(),bT(738,` The `),Aa(739,`code`),bT(740,`registerAs()`),cf(),bT(741,` function is exported from the `),Aa(742,`code`),bT(743,`@nestjs/config`),cf(),bT(744,` package.
`),cf(),Aa(745,`p`),bT(746,`Load a namespaced configuration with the `),Aa(747,`code`),bT(748,`load`),cf(),bT(749,` property of the `),Aa(750,`code`),bT(751,`forRoot()`),cf(),bT(752,` method's options object, in the same way you load a custom configuration file:`),cf(),Aa(753,`app-copy-button`)(754,`pre`)(755,`code`,27),bT(756,`
import databaseConfig from './config/database.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(757,`p`),bT(758,`To get the `),Aa(759,`code`),bT(760,`host`),cf(),bT(761,` value from the `),Aa(762,`code`),bT(763,`database`),cf(),bT(764,` namespace, use dot notation. Use `),Aa(765,`code`),bT(766,`'database'`),cf(),bT(767,` as the prefix of the property name. It corresponds to the name of the namespace (passed as the first argument to the `),Aa(768,`code`),bT(769,`registerAs()`),cf(),bT(770,` function):`),cf(),Aa(771,`app-copy-button`)(772,`pre`)(773,`code`,27),bT(774,`
const dbHost = this.configService.get<string>('database.host');
`),cf()()(),Aa(775,`p`),bT(776,`Alternatively, you can inject the `),Aa(777,`code`),bT(778,`database`),cf(),bT(779,` namespace directly, which gives you strong typing:`),cf(),Aa(780,`app-copy-button`)(781,`pre`)(782,`code`,27),bT(783,`
constructor(
  @Inject(databaseConfig.KEY)
  private dbConfig: ConfigType<typeof databaseConfig>,
) {}
`),cf()()(),Aa(784,`blockquote`,21)(785,`strong`),bT(786,`Hint`),cf(),bT(787,` The `),Aa(788,`code`),bT(789,`ConfigType`),cf(),bT(790,` type is exported from the `),Aa(791,`code`),bT(792,`@nestjs/config`),cf(),bT(793,` package.
`),cf(),Aa(794,`h4`,43)(795,`span`),bT(796,`Namespaced configurations in modules`),cf()(),Aa(797,`p`),bT(798,`To use a namespaced configuration as the configuration object of another module in your application, use the `),Aa(799,`code`),bT(800,`.asProvider()`),cf(),bT(801,` method of the configuration object. This method converts your namespaced configuration into a provider definition that you can pass to the `),Aa(802,`code`),bT(803,`forRootAsync()`),cf(),bT(804,` method (or equivalent) of the module you want to configure:`),cf(),Aa(805,`app-copy-button`)(806,`pre`)(807,`code`,27),bT(808,`
import databaseConfig from './config/database.config.js';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(databaseConfig.asProvider()),
  ],
})
`),cf()()(),Aa(809,`p`),bT(810,`To understand how the `),Aa(811,`code`),bT(812,`.asProvider()`),cf(),bT(813,` method works, look at its return value:`),cf(),Aa(814,`app-copy-button`)(815,`pre`)(816,`code`,27),bT(817,`
// Return value of the .asProvider() method
{
  imports: [ConfigModule.forFeature(databaseConfig)],
  useFactory: (configuration: ConfigType<typeof databaseConfig>) => configuration,
  inject: [databaseConfig.KEY]
}
`),cf()()(),Aa(818,`p`),bT(819,`This structure lets you plug namespaced configurations into other modules without writing repetitive boilerplate code, which keeps your application organized and modular.`),cf(),Aa(820,`h4`,44)(821,`span`),bT(822,`Cache environment variables`),cf()(),Aa(823,`p`),bT(824,`Accessing `),Aa(825,`code`),bT(826,`process.env`),cf(),bT(827,` can be slow. To improve the performance of the `),Aa(828,`code`),bT(829,`ConfigService#get`),cf(),bT(830,` method for variables stored in `),Aa(831,`code`),bT(832,`process.env`),cf(),bT(833,`, set the `),Aa(834,`code`),bT(835,`cache`),cf(),bT(836,` property of the options object passed to `),Aa(837,`code`),bT(838,`ConfigModule.forRoot()`),cf(),bT(839,`:`),cf(),Aa(840,`app-copy-button`)(841,`pre`)(842,`code`,27),bT(843,`
ConfigModule.forRoot({
  cache: true,
});
`),cf()()(),Aa(844,`h4`,45)(845,`span`),bT(846,`Partial registration`),cf()(),Aa(847,`p`),bT(848,`So far, we've processed configuration files in the root module (e.g., `),Aa(849,`code`),bT(850,`AppModule`),cf(),bT(851,`) with the `),Aa(852,`code`),bT(853,`forRoot()`),cf(),bT(854,` method. In a more complex project structure, you may have feature-specific configuration files located in several different directories. Rather than loading all these files in the root module, you can use a feature of the `),Aa(855,`code`),bT(856,`@nestjs/config`),cf(),bT(857,` package called `),Aa(858,`strong`),bT(859,`partial registration`),cf(),bT(860,`, which references only the configuration files associated with each feature module. Use the `),Aa(861,`code`),bT(862,`forFeature()`),cf(),bT(863,` static method within a feature module to perform partial registration, as follows:`),cf(),Aa(864,`app-copy-button`)(865,`pre`)(866,`code`,27),bT(867,`
import databaseConfig from './config/database.config.js';

@Module({
  imports: [ConfigModule.forFeature(databaseConfig)],
})
export class DatabaseModule {}
`),cf()()(),Aa(868,`blockquote`,23)(869,`strong`),bT(870,`Warning`),cf(),bT(871,` In some circumstances, you may need to access properties loaded through partial registration in the `),Aa(872,`code`),bT(873,`onModuleInit()`),cf(),bT(874,` hook rather than in a constructor. This is because the `),Aa(875,`code`),bT(876,`forFeature()`),cf(),bT(877,` method runs during module initialization, and the order of module initialization is indeterminate. If you access values loaded this way by another module in a constructor, the module that the configuration depends on may not have initialized yet. The `),Aa(878,`code`),bT(879,`onModuleInit()`),cf(),bT(880,` method runs only after all the modules it depends on have been initialized, so this technique is safe.
`),cf(),Aa(881,`h4`,46)(882,`span`),bT(883,`Schema validation`),cf()(),Aa(884,`p`),bT(885,`It's standard practice to throw an exception during application startup if required environment variables haven't been provided or don't meet certain validation rules. The `),Aa(886,`code`),bT(887,`@nestjs/config`),cf(),bT(888,` package supports two ways to do this:`),cf(),Aa(889,`ul`)(890,`li`),bT(891,`A `),Aa(892,`a`,47),bT(893,`Standard Schema`),cf(),bT(894,`-compatible schema passed through the `),Aa(895,`code`),bT(896,`validationSchema`),cf(),bT(897,` option. Any library that implements the specification works, such as `),Aa(898,`a`,48),bT(899,`Zod`),cf(),bT(900,`, `),Aa(901,`a`,49),bT(902,`Valibot`),cf(),bT(903,`, and `),Aa(904,`a`,50),bT(905,`ArkType`),cf(),bT(906,`.`),cf(),Aa(907,`li`),bT(908,`A custom `),Aa(909,`code`),bT(910,`validate()`),cf(),bT(911,` function that takes the environment variables as input.`),cf()(),Aa(912,`p`),bT(913,`Install the validation library of your choice. This example uses Zod:`),cf(),Aa(914,`pre`)(915,`code`,20),bT(916,`
$ npm install --save zod
`),cf()(),Aa(917,`p`),bT(918,`Now define a validation schema and pass it through the `),Aa(919,`code`),bT(920,`validationSchema`),cf(),bT(921,` property of the options object passed to `),Aa(922,`code`),bT(923,`forRoot()`),cf(),bT(924,`, as shown below:`),cf(),Aa(925,`app-copy-button`,25)(926,`span`,26),bT(927),LT(928,`extension`),Wa(929,`app-tabs`,null,8),cf(),Aa(931,`pre`)(932,`code`,27),bT(933,`
import { z } from 'zod';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: z.object({
        NODE_ENV: z
          .enum(['development', 'production', 'test', 'provision'])
          .default('development'),
        PORT: z.coerce.number().default(3000),
      }),
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(934,`p`),bT(935,`This schema sets default values for `),Aa(936,`code`),bT(937,`NODE_ENV`),cf(),bT(938,` and `),Aa(939,`code`),bT(940,`PORT`),cf(),bT(941,`, which are used if you don't provide these variables in the environment (`),Aa(942,`code`),bT(943,`.env`),cf(),bT(944,` file or process environment). To require a variable instead, leave it without a default. The validation step then throws an exception during bootstrap if the variable is missing.`),cf(),Aa(945,`p`),bT(946,`Environment variables always arrive as strings, which is why `),Aa(947,`code`),bT(948,`PORT`),cf(),bT(949,` uses `),Aa(950,`code`),bT(951,`z.coerce.number()`),cf(),bT(952,`. `),Aa(953,`code`),bT(954,`ConfigService`),cf(),bT(955,` serves the values returned by the schema, so coercions and transformations declared in the schema apply to the configuration your application reads. Variables that the schema doesn't declare remain available through `),Aa(956,`code`),bT(957,`ConfigService`),cf(),bT(958,` as well.`),cf(),Aa(959,`p`),bT(960,`By default, unknown environment variables (the many unrelated entries that `),Aa(961,`code`),bT(962,`process.env`),cf(),bT(963,` always carries, such as `),Aa(964,`code`),bT(965,`PATH`),cf(),bT(966,` and `),Aa(967,`code`),bT(968,`HOME`),cf(),bT(969,`) don't trigger a validation exception, and every failing variable is reported rather than only the first. Each validation error is formatted as `),Aa(970,`code`),bT(971,`PATH: message`),cf(),bT(972,`, and the errors are joined by newlines.`),cf(),Aa(973,`p`),bT(974,`You can forward library-specific options through the `),Aa(975,`code`),bT(976,`validationOptions`),cf(),bT(977,` key. Because the option is typed against the Standard Schema specification, library-specific settings go under `),Aa(978,`code`),bT(979,`libraryOptions`),cf(),bT(980,`:`),cf(),Aa(981,`app-copy-button`,25)(982,`span`,26),bT(983),LT(984,`extension`),Wa(985,`app-tabs`,null,9),cf(),Aa(987,`pre`)(988,`code`,27),bT(989,`
import { z } from 'zod';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: z.object({
        NODE_ENV: z
          .enum(['development', 'production', 'test', 'provision'])
          .default('development'),
        PORT: z.coerce.number().default(3000),
      }),
      validationOptions: {
        libraryOptions: {
          // options specific to your validation library
        },
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(990,`blockquote`,21)(991,`strong`),bT(992,`Hint`),cf(),bT(993,` Joi is still supported, but it requires `),Aa(994,`strong`),bT(995,`Joi v18 or later`),cf(),bT(996,`, which implements the Standard Schema specification. Pass `),Aa(997,`code`),bT(998),cf(),bT(999,` to `),Aa(1e3,`code`),bT(1001,`validationSchema`),cf(),bT(1002,` as before, and put Joi settings such as `),Aa(1003,`code`),bT(1004,`allowUnknown`),cf(),bT(1005,` and `),Aa(1006,`code`),bT(1007,`abortEarly`),cf(),bT(1008,` under `),Aa(1009,`code`),bT(1010,`validationOptions.libraryOptions`),cf(),bT(1011,`. For Joi schemas, `),Aa(1012,`code`),bT(1013,`@nestjs/config`),cf(),bT(1014,` keeps its historical defaults of `),Aa(1015,`code`),bT(1016,`allowUnknown: true`),cf(),bT(1017,` and `),Aa(1018,`code`),bT(1019,`abortEarly: false`),cf(),bT(1020,`, and merges the options you pass on top of them. For new projects, we recommend a modern Standard Schema library such as Zod instead.
`),cf(),Aa(1021,`blockquote`,21)(1022,`strong`),bT(1023,`Hint`),cf(),bT(1024,` To disable validation of predefined environment variables, set the `),Aa(1025,`code`),bT(1026,`validatePredefined`),cf(),bT(1027,` property to `),Aa(1028,`code`),bT(1029,`false`),cf(),bT(1030,` in the options object passed to `),Aa(1031,`code`),bT(1032,`forRoot()`),cf(),bT(1033,`. Predefined environment variables are process variables (`),Aa(1034,`code`),bT(1035,`process.env`),cf(),bT(1036,` variables) that were set before the module was imported. For example, if you start your application with `),Aa(1037,`code`),bT(1038,`PORT=3000 node main.js`),cf(),bT(1039,`, then `),Aa(1040,`code`),bT(1041,`PORT`),cf(),bT(1042,` is a predefined environment variable.
`),cf(),Aa(1043,`h4`,51)(1044,`span`),bT(1045,`Custom validate function`),cf()(),Aa(1046,`p`),bT(1047,`Alternatively, you can specify a `),Aa(1048,`strong`),bT(1049,`synchronous`),cf(),Aa(1050,`code`),bT(1051,`validate`),cf(),bT(1052,` function. It takes an object containing the environment variables (from the `),Aa(1053,`code`),bT(1054,`.env`),cf(),bT(1055,` file and the process) and returns an object containing the validated environment variables, so you can convert or modify them if needed. If the function throws an error, the application doesn't bootstrap.`),cf(),Aa(1056,`p`),bT(1057,`This example uses the `),Aa(1058,`code`),bT(1059,`class-transformer`),cf(),bT(1060,` and `),Aa(1061,`code`),bT(1062,`class-validator`),cf(),bT(1063,` packages. First, define:`),cf(),Aa(1064,`ul`)(1065,`li`),bT(1066,`a class with validation constraints,`),cf(),Aa(1067,`li`),bT(1068,`a validate function that makes use of the `),Aa(1069,`code`),bT(1070,`plainToInstance`),cf(),bT(1071,` and `),Aa(1072,`code`),bT(1073,`validateSync`),cf(),bT(1074,` functions.`),cf()(),Aa(1075,`app-copy-button`,25)(1076,`span`,26),bT(1077),LT(1078,`extension`),Wa(1079,`app-tabs`,null,10),cf(),Aa(1081,`pre`)(1082,`code`,27),bT(1083,`
import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, Max, Min, validateSync } from 'class-validator';

enum Environment {
  Development = "development",
  Production = "production",
  Test = "test",
  Provision = "provision",
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    EnvironmentVariables,
    config,
    { enableImplicitConversion: true },
  );
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
`),cf()()(),Aa(1084,`p`),bT(1085,`With this in place, pass the `),Aa(1086,`code`),bT(1087,`validate`),cf(),bT(1088,` function as a configuration option of the `),Aa(1089,`code`),bT(1090,`ConfigModule`),cf(),bT(1091,`:`),cf(),Aa(1092,`app-copy-button`,25)(1093,`span`,26),bT(1094),LT(1095,`extension`),Wa(1096,`app-tabs`,null,11),cf(),Aa(1098,`pre`)(1099,`code`,27),bT(1100,`
import { validate } from './env.validation.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(1101,`h4`,52)(1102,`span`),bT(1103,`Custom getter functions`),cf()(),Aa(1104,`p`)(1105,`code`),bT(1106,`ConfigService`),cf(),bT(1107,` defines a generic `),Aa(1108,`code`),bT(1109,`get()`),cf(),bT(1110,` method that retrieves a configuration value by key. You can also add getter functions for a more natural coding style:`),cf(),Aa(1111,`app-copy-button`,25)(1112,`span`,26),bT(1113),LT(1114,`extension`),Wa(1115,`app-tabs`,null,12),cf(),Aa(1117,`pre`)(1118,`code`,27),bT(1119,`
@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get isAuthEnabled(): boolean {
    return this.configService.get('AUTH_ENABLED') === 'true';
  }
}
`),cf()(),Aa(1120,`pre`)(1121,`code`,27),bT(1122,`
@Dependencies(ConfigService)
@Injectable()
export class ApiConfigService {
  constructor(configService) {
    this.configService = configService;
  }

  get isAuthEnabled() {
    return this.configService.get('AUTH_ENABLED') === 'true';
  }
}
`),cf()()(),Aa(1123,`blockquote`,21)(1124,`strong`),bT(1125,`Hint`),cf(),bT(1126,` This example assumes that `),Aa(1127,`code`),bT(1128,`AUTH_ENABLED`),cf(),bT(1129,` is a string. If your validation schema converts it to a boolean, `),Aa(1130,`code`),bT(1131,`get()`),cf(),bT(1132,` returns the converted value, so return `),Aa(1133,`code`),bT(1134,`this.configService.get<boolean>('AUTH_ENABLED')`),cf(),bT(1135,` directly instead of comparing it with `),Aa(1136,`code`),bT(1137,`'true'`),cf(),bT(1138,`.
`),cf(),Aa(1139,`p`),bT(1140,`Now you can use the getter function as follows:`),cf(),Aa(1141,`app-copy-button`,25)(1142,`span`,26),bT(1143),LT(1144,`extension`),Wa(1145,`app-tabs`,null,13),cf(),Aa(1147,`pre`)(1148,`code`,27),bT(1149,`
@Injectable()
export class AppService {
  constructor(apiConfigService: ApiConfigService) {
    if (apiConfigService.isAuthEnabled) {
      // Authentication is enabled
    }
  }
}
`),cf()(),Aa(1150,`pre`)(1151,`code`,27),bT(1152,`
@Dependencies(ApiConfigService)
@Injectable()
export class AppService {
  constructor(apiConfigService) {
    if (apiConfigService.isAuthEnabled) {
      // Authentication is enabled
    }
  }
}
`),cf()()(),Aa(1153,`h4`,53)(1154,`span`),bT(1155,`Environment variables loaded hook`),cf()(),Aa(1156,`p`),bT(1157,`If a module configuration depends on environment variables loaded from the `),Aa(1158,`code`),bT(1159,`.env`),cf(),bT(1160,` file, use the `),Aa(1161,`code`),bT(1162,`ConfigModule.envVariablesLoaded`),cf(),bT(1163,` hook to ensure that the file has been loaded before you read the `),Aa(1164,`code`),bT(1165,`process.env`),cf(),bT(1166,` object:`),cf(),Aa(1167,`app-copy-button`)(1168,`pre`)(1169,`code`,27),bT(1170,`
export async function getStorageModule() {
  await ConfigModule.envVariablesLoaded;
  return process.env.STORAGE === 'S3' ? S3StorageModule : DefaultStorageModule;
}
`),cf()()(),Aa(1171,`p`),bT(1172,`This construction guarantees that all configuration variables are loaded once the `),Aa(1173,`code`),bT(1174,`ConfigModule.envVariablesLoaded`),cf(),bT(1175,` promise resolves.`),cf(),Aa(1176,`h4`,54)(1177,`span`),bT(1178,`Conditional module configuration`),cf()(),Aa(1179,`p`),bT(1180,`Sometimes you may want to load a module conditionally and specify the condition in an environment variable. The `),Aa(1181,`code`),bT(1182,`@nestjs/config`),cf(),bT(1183,` package provides a `),Aa(1184,`code`),bT(1185,`ConditionalModule`),cf(),bT(1186,` for this purpose.`),cf(),Aa(1187,`app-copy-button`)(1188,`pre`)(1189,`code`,27),bT(1190,`
@Module({
  imports: [
    ConfigModule.forRoot(),
    ConditionalModule.registerWhen(FooModule, 'USE_FOO'),
  ],
})
export class AppModule {}
`),cf()()(),Aa(1191,`p`),bT(1192,`This module loads the `),Aa(1193,`code`),bT(1194,`FooModule`),cf(),bT(1195,` unless the `),Aa(1196,`code`),bT(1197,`USE_FOO`),cf(),bT(1198,` environment variable is set to `),Aa(1199,`code`),bT(1200,`false`),cf(),bT(1201,` (case-insensitive). If the variable isn't defined, `),Aa(1202,`code`),bT(1203,`FooModule`),cf(),bT(1204,` is loaded. You can also pass a custom condition: a function that receives the `),Aa(1205,`code`),bT(1206,`process.env`),cf(),bT(1207,` reference and returns a boolean:`),cf(),Aa(1208,`app-copy-button`)(1209,`pre`)(1210,`code`,27),bT(1211,`
@Module({
  imports: [
    ConfigModule.forRoot(),
    ConditionalModule.registerWhen(
      FooBarModule,
      (env: NodeJS.ProcessEnv) => !!env['foo'] && !!env['bar'],
    ),
  ],
})
export class AppModule {}
`),cf()()(),Aa(1212,`p`),bT(1213,`When you use the `),Aa(1214,`code`),bT(1215,`ConditionalModule`),cf(),bT(1216,`, make sure the `),Aa(1217,`code`),bT(1218,`ConfigModule`),cf(),bT(1219,` is also loaded in the application, so that the `),Aa(1220,`code`),bT(1221,`ConfigModule.envVariablesLoaded`),cf(),bT(1222,` hook resolves. If the hook doesn't resolve within 5 seconds (or within the timeout, in milliseconds, set through the `),Aa(1223,`code`),bT(1224,`timeout`),cf(),bT(1225,` property of the third `),Aa(1226,`code`),bT(1227,`options`),cf(),bT(1228,` argument of the `),Aa(1229,`code`),bT(1230,`registerWhen()`),cf(),bT(1231,` method), the `),Aa(1232,`code`),bT(1233,`ConditionalModule`),cf(),bT(1234,` throws an error and Nest aborts starting the application.`),cf(),Aa(1235,`h4`,55)(1236,`span`),bT(1237,`Expandable variables`),cf()(),Aa(1238,`p`),bT(1239,`The `),Aa(1240,`code`),bT(1241,`@nestjs/config`),cf(),bT(1242,` package supports environment variable expansion. With this technique, you can create nested environment variables, where one variable is referenced within the definition of another. For example:`),cf(),Aa(1243,`pre`)(1244,`code`,28),bT(1245,`
APP_URL=mywebsite.com
SUPPORT_EMAIL=support@\${APP_URL}
`),cf()(),Aa(1246,`p`),bT(1247,`With this construction, the variable `),Aa(1248,`code`),bT(1249,`SUPPORT_EMAIL`),cf(),bT(1250,` resolves to `),Aa(1251,`code`),bT(1252,`'support@mywebsite.com'`),cf(),bT(1253,`. The `),Aa(1254,`code`),bT(1255),cf(),bT(1256,` syntax triggers resolving the value of the variable `),Aa(1257,`code`),bT(1258,`APP_URL`),cf(),bT(1259,` inside the definition of `),Aa(1260,`code`),bT(1261,`SUPPORT_EMAIL`),cf(),bT(1262,`.`),cf(),Aa(1263,`blockquote`,21)(1264,`strong`),bT(1265,`Hint`),cf(),bT(1266,` For this feature, the `),Aa(1267,`code`),bT(1268,`@nestjs/config`),cf(),bT(1269,` package internally uses `),Aa(1270,`a`,56),bT(1271,`dotenv-expand`),cf(),bT(1272,`.
`),cf(),Aa(1273,`p`),bT(1274,`Enable environment variable expansion with the `),Aa(1275,`code`),bT(1276,`expandVariables`),cf(),bT(1277,` property of the options object passed to `),Aa(1278,`code`),bT(1279,`ConfigModule.forRoot()`),cf(),bT(1280,`, as shown below. Instead of `),Aa(1281,`code`),bT(1282,`true`),cf(),bT(1283,`, you can also pass an object with options for `),Aa(1284,`code`),bT(1285,`dotenv-expand`),cf(),bT(1286,`.`),cf(),Aa(1287,`app-copy-button`,25)(1288,`span`,26),bT(1289),LT(1290,`extension`),Wa(1291,`app-tabs`,null,14),cf(),Aa(1293,`pre`)(1294,`code`,27),bT(1295,`
@Module({
  imports: [
    ConfigModule.forRoot({
      // ...
      expandVariables: true,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(1296,`h4`,57)(1297,`span`),bT(1298,`Using in the `),Aa(1299,`code`),bT(1300,`main.ts`),cf()()(),Aa(1301,`p`),bT(1302,`Although the configuration is stored in a service, you can still use it in the `),Aa(1303,`code`),bT(1304,`main.ts`),cf(),bT(1305,` file, for example, to read variables such as the application port or the CORS host.`),cf(),Aa(1306,`p`),bT(1307,`To access it, use the `),Aa(1308,`code`),bT(1309,`app.get()`),cf(),bT(1310,` method with the service class:`),cf(),Aa(1311,`app-copy-button`)(1312,`pre`)(1313,`code`,27),bT(1314,`
const configService = app.get(ConfigService);
`),cf()()(),Aa(1315,`p`),bT(1316,`You can then use it as usual, by calling the `),Aa(1317,`code`),bT(1318,`get()`),cf(),bT(1319,` method with the configuration key:`),cf(),Aa(1320,`app-copy-button`)(1321,`pre`)(1322,`code`,27),bT(1323,`
const port = configService.get('PORT');
`),cf()()()(),Aa(1324,`a`,58),Wa(1325,`i`,59),Aa(1326,`span`),bT(1327,`Edit on GitHub`),cf()()()),c&2){let y=tT(89),k=tT(312),T=tT(411),j=tT(460),A=tT(507),I=tT(542),C=tT(717),R=tT(930),L=tT(986),q=tT(1080),B=tT(1097),M=tT(1116),P=tT(1146),F=tT(1292);zC(86),hf(` `,jT(87,27,`app.module`,y.isJsActive),`
`),zC(223),hf(` `,jT(310,30,`main`,k.isJsActive),`
`),zC(99),hf(` `,jT(409,33,`config/configuration`,T.isJsActive),`
`),zC(49),hf(` `,jT(458,36,`config/configuration`,j.isJsActive),`
`),zC(30),Ky(`"assets": [`,`{`,`"include": "../config/*.yaml", "outDir": "./dist/config"`,`}`,`]`),zC(17),hf(` `,jT(505,39,`config/configuration`,A.isJsActive),`
`),zC(35),hf(` `,jT(540,42,`feature.module`,I.isJsActive),`
`),zC(175),hf(` `,jT(715,45,`config/database.config`,C.isJsActive),`
`),zC(213),hf(` `,jT(928,48,`app.module`,R.isJsActive),`
`),zC(56),hf(` `,jT(984,51,`app.module`,L.isJsActive),`
`),zC(15),hf(`Joi.object(`,`{`,` ... })`),zC(79),hf(` `,jT(1078,54,`env.validation`,q.isJsActive),`
`),zC(17),hf(` `,jT(1095,57,`app.module`,B.isJsActive),`
`),zC(19),hf(` `,jT(1114,60,`api-config.service`,M.isJsActive),`
`),zC(4),zy(`hide`,M.isJsActive),zC(3),zy(`hide`,!M.isJsActive),zC(23),hf(` `,jT(1144,63,`app.service`,P.isJsActive),`
`),zC(4),zy(`hide`,P.isJsActive),zC(3),zy(`hide`,!P.isJsActive),zC(105),Ky(`$`,`{`,`...`,`}`),zC(34),hf(` `,jT(1290,66,`app.module`,F.isJsActive),`
`)}},dependencies:[Lt,ln,u,l,g],encapsulation:2})}return d})();var xe=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-events`]],features:[xy],decls:379,vars:6,consts:[[`contentReference`,``],[`app98762c1ff5380a77d63d0ba2e326d3d414620a2f`,``],[1,`content`],[1,`content-inner`],[`id`,`events`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.npmjs.com/package/@nestjs/event-emitter`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/EventEmitter2/EventEmitter2`],[`appAnchor`,``,`id`,`getting-started`],[1,`language-shell`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/modules#global-modules`],[`appAnchor`,``,`id`,`dispatching-events`],[1,`info`],[`appAnchor`,``,`id`,`listening-to-events`],[`routerLink`,`/fundamentals/injection-scopes`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/EventEmitter2/EventEmitter2#emitteronevent-listener-options-objectboolean`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/EventEmitter2/EventEmitter2#multi-level-wildcards`],[`appAnchor`,``,`id`,`listener-priority`],[`appAnchor`,``,`id`,`preventing-event-loss`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/30-event-emitter`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/events.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Events`),cf(),Aa(5,`p`),bT(6,`The `),Aa(7,`a`,5),bT(8,`Event Emitter`),cf(),bT(9,` package (`),Aa(10,`code`),bT(11,`@nestjs/event-emitter`),cf(),bT(12,`) provides an observer implementation that lets you subscribe to and listen for events that occur in your application. Events are a good way to decouple different parts of your application, since a single event can have multiple listeners that don't depend on each other.`),cf(),Aa(13,`p`)(14,`code`),bT(15,`EventEmitterModule`),cf(),bT(16,` internally uses the `),Aa(17,`a`,6),bT(18,`eventemitter2`),cf(),bT(19,` package.`),cf(),Aa(20,`h4`,7)(21,`span`),bT(22,`Getting started`),cf()(),Aa(23,`p`),bT(24,`First, install the required package:`),cf(),Aa(25,`pre`)(26,`code`,8),bT(27,`
$ npm i --save @nestjs/event-emitter
`),cf()(),Aa(28,`p`),bT(29,`Once the installation is complete, import the `),Aa(30,`code`),bT(31,`EventEmitterModule`),cf(),bT(32,` into the root `),Aa(33,`code`),bT(34,`AppModule`),cf(),bT(35,` and call its `),Aa(36,`code`),bT(37,`forRoot()`),cf(),bT(38,` static method, as shown below:`),cf(),Aa(39,`app-copy-button`,9)(40,`span`,10),bT(41),LT(42,`extension`),Wa(43,`app-tabs`,null,1),cf(),Aa(45,`pre`)(46,`code`,11),bT(47,`
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot()
  ],
})
export class AppModule {}
`),cf()()(),Aa(48,`p`),bT(49,`The `),Aa(50,`code`),bT(51,`.forRoot()`),cf(),bT(52,` call initializes the event emitter and registers any declarative event listeners that exist within your app. Registration happens in the `),Aa(53,`code`),bT(54,`onApplicationBootstrap`),cf(),bT(55,` lifecycle hook, which ensures that all modules have loaded and declared their event listeners. The module is registered as a `),Aa(56,`a`,12),bT(57,`global module`),cf(),bT(58,` by default, so you can inject the event emitter anywhere without importing `),Aa(59,`code`),bT(60,`EventEmitterModule`),cf(),bT(61,` again. To change this, set the `),Aa(62,`code`),bT(63,`global`),cf(),bT(64,` option to `),Aa(65,`code`),bT(66,`false`),cf(),bT(67,`.`),cf(),Aa(68,`p`),bT(69,`To configure the underlying `),Aa(70,`code`),bT(71,`EventEmitter2`),cf(),bT(72,` instance, pass a configuration object to the `),Aa(73,`code`),bT(74,`.forRoot()`),cf(),bT(75,` method, as follows:`),cf(),Aa(76,`app-copy-button`)(77,`pre`)(78,`code`,11),bT(79,`
EventEmitterModule.forRoot({
  // set this to \`true\` to use wildcards
  wildcard: false,
  // the delimiter used to segment namespaces
  delimiter: '.',
  // set this to \`true\` if you want to emit the newListener event
  newListener: false,
  // set this to \`true\` if you want to emit the removeListener event
  removeListener: false,
  // the maximum amount of listeners that can be assigned to an event
  maxListeners: 10,
  // show event name in memory leak message when more than maximum amount of listeners is assigned
  verboseMemoryLeak: false,
  // disable throwing uncaughtException if an error event is emitted and it has no listeners
  ignoreErrors: false,
});
`),cf()()(),Aa(80,`h4`,13)(81,`span`),bT(82,`Dispatching events`),cf()(),Aa(83,`p`),bT(84,`To dispatch (i.e., fire) an event, first inject `),Aa(85,`code`),bT(86,`EventEmitter2`),cf(),bT(87,` through the constructor:`),cf(),Aa(88,`app-copy-button`)(89,`pre`)(90,`code`,11),bT(91,`
constructor(private eventEmitter: EventEmitter2) {}
`),cf()()(),Aa(92,`blockquote`,14)(93,`strong`),bT(94,`Hint`),cf(),bT(95,` Import `),Aa(96,`code`),bT(97,`EventEmitter2`),cf(),bT(98,` from the `),Aa(99,`code`),bT(100,`@nestjs/event-emitter`),cf(),bT(101,` package.
`),cf(),Aa(102,`p`),bT(103,`Then use it in the class as follows:`),cf(),Aa(104,`app-copy-button`)(105,`pre`)(106,`code`,11),bT(107,`
this.eventEmitter.emit(
  'order.created',
  new OrderCreatedEvent({
    orderId: 1,
    payload: {},
  }),
);
`),cf()()(),Aa(108,`h4`,15)(109,`span`),bT(110,`Listening to events`),cf()(),Aa(111,`p`),bT(112,`To declare an event listener, decorate the method that handles the event with the `),Aa(113,`code`),bT(114,`@OnEvent()`),cf(),bT(115,` decorator, as follows:`),cf(),Aa(116,`app-copy-button`)(117,`pre`)(118,`code`,11),bT(119,`
@OnEvent('order.created')
handleOrderCreatedEvent(payload: OrderCreatedEvent) {
  // handle and process "OrderCreatedEvent" event
}
`),cf()()(),Aa(120,`blockquote`,14)(121,`strong`),bT(122,`Hint`),cf(),bT(123,` If an event listener belongs to a `),Aa(124,`a`,16),bT(125,`request-scoped`),cf(),bT(126,` provider, Nest creates a new instance of that provider for every event it handles. The event payload takes the place of the request object, so injecting `),Aa(127,`code`),bT(128,`REQUEST`),cf(),bT(129,` in that provider gives you the payload. If the payload you emit is the incoming request object itself (or carries its context ID), set the `),Aa(130,`code`),bT(131,`inheritRequestContextId`),cf(),bT(132,` option of `),Aa(133,`code`),bT(134,`forRoot()`),cf(),bT(135,` to `),Aa(136,`code`),bT(137,`true`),cf(),bT(138,` so that the listener reuses that request's DI sub-tree instead of creating a new one.
`),cf(),Aa(139,`p`),bT(140,`The first argument can be a `),Aa(141,`code`),bT(142,`string`),cf(),bT(143,` or a `),Aa(144,`code`),bT(145,`symbol`),cf(),bT(146,` for a simple event emitter, and a `),Aa(147,`code`),bT(148,`string | symbol | Array<string | symbol>`),cf(),bT(149,` for a wildcard emitter.`),cf(),Aa(150,`p`),bT(151,`The optional second argument is a listener options object:`),cf(),Aa(152,`app-copy-button`)(153,`pre`)(154,`code`,11),bT(155,`
export type OnEventOptions = OnOptions & {
  /**
   * If "true", prepends (instead of appends) the given listener to the array of listeners.
   *
   * @see https://github.com/EventEmitter2/EventEmitter2#emitterprependlistenerevent-listener-options
   *
   * @default false
   */
  prependListener?: boolean;

  /**
   * If "true", errors thrown by the onEvent callback are logged instead of rethrown. If "false", they are rethrown.
   *
   * @default true
   */
  suppressErrors?: boolean;

  /**
   * Registration priority. Higher values run first. Listeners that omit this option use \`0\`, so a positive priority runs before them and a negative one after them. Listeners with the same priority keep discovery order (reverse discovery order for \`prependListener: true\` listeners).
   *
   * @default 0
   */
  priority?: number;
};
`),cf()()(),Aa(156,`blockquote`,14)(157,`strong`),bT(158,`Hint`),cf(),bT(159,` To learn more about the `),Aa(160,`code`),bT(161,`OnOptions`),cf(),bT(162,` object, see the `),Aa(163,`a`,17)(164,`code`),bT(165,`eventemitter2`),cf(),bT(166,` documentation`),cf(),bT(167,`.
`),cf(),Aa(168,`p`),bT(169,`For example, the following listener runs asynchronously:`),cf(),Aa(170,`app-copy-button`)(171,`pre`)(172,`code`,11),bT(173,`
@OnEvent('order.created', { async: true })
handleOrderCreatedEvent(payload: OrderCreatedEvent) {
  // handle and process "OrderCreatedEvent" event
}
`),cf()()(),Aa(174,`p`),bT(175,`To use namespaces and wildcards, pass the `),Aa(176,`code`),bT(177,`wildcard`),cf(),bT(178,` option to the `),Aa(179,`code`),bT(180,`EventEmitterModule#forRoot()`),cf(),bT(181,` method. When namespaces and wildcards are enabled, events can be either delimiter-separated strings (`),Aa(182,`code`),bT(183,`foo.bar`),cf(),bT(184,`) or arrays (`),Aa(185,`code`),bT(186,`['foo', 'bar']`),cf(),bT(187,`). You can configure the delimiter with the `),Aa(188,`code`),bT(189,`delimiter`),cf(),bT(190,` option. With namespaces enabled, you can subscribe to events using a wildcard:`),cf(),Aa(191,`app-copy-button`)(192,`pre`)(193,`code`,11),bT(194,`
@OnEvent('order.*')
handleOrderEvents(payload: OrderCreatedEvent | OrderRemovedEvent | OrderUpdatedEvent) {
  // handle and process an event
}
`),cf()()(),Aa(195,`p`),bT(196,`A single wildcard matches exactly one segment. For example, `),Aa(197,`code`),bT(198,`order.*`),cf(),bT(199,` matches the events `),Aa(200,`code`),bT(201,`order.created`),cf(),bT(202,` and `),Aa(203,`code`),bT(204,`order.shipped`),cf(),bT(205,`, but not `),Aa(206,`code`),bT(207,`order.delayed.out_of_stock`),cf(),bT(208,`. To listen to such events, use the multi-level wildcard pattern (i.e., `),Aa(209,`code`),bT(210,`**`),cf(),bT(211,`), described in the `),Aa(212,`a`,18),bT(213,`EventEmitter2 documentation on multi-level wildcards`),cf(),bT(214,`.`),cf(),Aa(215,`p`),bT(216,`With this pattern, you can, for example, create an event listener that catches all events:`),cf(),Aa(217,`app-copy-button`)(218,`pre`)(219,`code`,11),bT(220,`
@OnEvent('**')
handleEverything(payload: any) {
  // handle and process an event
}
`),cf()()(),Aa(221,`blockquote`,14)(222,`strong`),bT(223,`Hint`),cf(),bT(224,` The `),Aa(225,`code`),bT(226,`EventEmitter2`),cf(),bT(227,` class provides several useful methods for interacting with events, such as `),Aa(228,`code`),bT(229,`waitFor()`),cf(),bT(230,` and `),Aa(231,`code`),bT(232,`onAny()`),cf(),bT(233,`. See the `),Aa(234,`a`,6),bT(235,`EventEmitter2 documentation`),cf(),bT(236,` for details.
`),cf(),Aa(237,`h4`,19)(238,`span`),bT(239,`Listener priority`),cf()(),Aa(240,`p`),bT(241,`Pass `),Aa(242,`code`),bT(243,`priority`),cf(),bT(244,` in the `),Aa(245,`code`),bT(246,`@OnEvent()`),cf(),bT(247,` options to choose the order in which listeners of the same event are called. Nest collects every `),Aa(248,`code`),bT(249,`@OnEvent`),cf(),bT(250,` listener, sorts them by priority (highest first), and only then registers them. Listeners that omit `),Aa(251,`code`),bT(252,`priority`),cf(),bT(253,` use `),Aa(254,`code`),bT(255,`0`),cf(),bT(256,`: a positive priority runs before them, and a negative one after them. `),Aa(257,`code`),bT(258,`Infinity`),cf(),bT(259,` and `),Aa(260,`code`),bT(261,`-Infinity`),cf(),bT(262,` are allowed, and `),Aa(263,`code`),bT(264,`NaN`),cf(),bT(265,` falls back to `),Aa(266,`code`),bT(267,`0`),cf(),bT(268,`.`),cf(),Aa(269,`app-copy-button`)(270,`pre`)(271,`code`,11),bT(272,`
@OnEvent('order.created', { priority: 10 })
checkInventory(payload: OrderCreatedEvent) {
  // runs first
}

@OnEvent('order.created')
notifyWarehouse(payload: OrderCreatedEvent) {
  // priority 0, runs after the check
}

@OnEvent('order.created', { priority: -5 })
recordAnalytics(payload: OrderCreatedEvent) {
  // runs last
}
`),cf()()(),Aa(273,`p`),bT(274,`Listeners with `),Aa(275,`code`),bT(276,`prependListener: true`),cf(),bT(277,` stay ahead of the other `),Aa(278,`code`),bT(279,`@OnEvent`),cf(),bT(280,` listeners, as they do without a priority. Nest orders each of those two groups by priority on its own, so a prepended listener still runs before an appended one that has a higher priority. Listeners with the same priority keep the order they have without one: discovery order for appended listeners, and reverse discovery order for prepended ones.`),cf(),Aa(281,`p`),bT(282,`Priority orders `),Aa(283,`code`),bT(284,`@OnEvent`),cf(),bT(285,` listeners of the same event name among themselves. It leaves listeners added directly on `),Aa(286,`code`),bT(287,`EventEmitter2`),cf(),bT(288,` in the position they were added. It also leaves a wildcard listener (`),Aa(289,`code`),bT(290,`order.*`),cf(),bT(291,`) and an exact one (`),Aa(292,`code`),bT(293,`order.created`),cf(),bT(294,`) in the order `),Aa(295,`a`,6),bT(296,`EventEmitter2`),cf(),bT(297,` calls them.`),cf(),Aa(298,`p`),bT(299,`Priority only holds for listeners that start their work synchronously when the event is emitted:`),cf(),Aa(300,`ul`)(301,`li`),bT(302,`Listeners registered with `),Aa(303,`code`),bT(304,`async: true`),cf(),bT(305,`, `),Aa(306,`code`),bT(307,`nextTick: true`),cf(),bT(308,`, or `),Aa(309,`code`),bT(310,`promisify: true`),cf(),bT(311,` are deferred, so they run after every synchronous listener, whatever their priority. For example, `),Aa(312,`code`),bT(313),cf(),bT(314,` still runs after `),Aa(315,`code`),bT(316,`notifyWarehouse()`),cf(),bT(317,` above.`),cf(),Aa(318,`li`),bT(319,`Listeners on `),Aa(320,`a`,16),bT(321,`request-scoped`),cf(),bT(322,` or durable providers resolve their instance before their body runs, so their body can start after lower-priority listeners. Priority does not hold for them.`),cf()(),Aa(323,`p`),bT(324,`Priority decides the order listeners are called in, not whether the next one runs. In every mode, including a plain `),Aa(325,`code`),bT(326,`emit()`),cf(),bT(327,`, a higher-priority listener that throws or rejects still leaves the listeners after it to run. A security check at a higher priority cannot rely on a thrown error to skip a later listener, such as `),Aa(328,`code`),bT(329,`notifyWarehouse()`),cf(),bT(330,` above.`),cf(),Aa(331,`h4`,20)(332,`span`),bT(333,`Preventing event loss`),cf()(),Aa(334,`p`),bT(335,`Events emitted before or during the `),Aa(336,`code`),bT(337,`onApplicationBootstrap`),cf(),bT(338,` lifecycle hook (for example, from constructors or `),Aa(339,`code`),bT(340,`onModuleInit()`),cf(),bT(341,` methods) may be missed, because the listeners might not be registered yet.`),cf(),Aa(342,`p`),bT(343,`To avoid this, use the `),Aa(344,`code`),bT(345,`waitUntilReady()`),cf(),bT(346,` method of `),Aa(347,`code`),bT(348,`EventEmitterReadinessWatcher`),cf(),bT(349,` (exported from `),Aa(350,`code`),bT(351,`@nestjs/event-emitter`),cf(),bT(352,`). It returns a promise that resolves once all listeners have been registered. Call it in the `),Aa(353,`code`),bT(354,`onApplicationBootstrap`),cf(),bT(355,` lifecycle hook of your provider before emitting events:`),cf(),Aa(356,`app-copy-button`)(357,`pre`)(358,`code`,11),bT(359,`
await this.eventEmitterReadinessWatcher.waitUntilReady();
this.eventEmitter.emit(
  'order.created',
  new OrderCreatedEvent({ orderId: 1, payload: {} }),
);
`),cf()()(),Aa(360,`blockquote`,14)(361,`strong`),bT(362,`Note`),cf(),bT(363,` This is only necessary for events emitted before the `),Aa(364,`code`),bT(365,`onApplicationBootstrap`),cf(),bT(366,` lifecycle hook completes.
`),cf(),Aa(367,`h4`,21)(368,`span`),bT(369,`Example`),cf()(),Aa(370,`p`),bT(371,`A working example is available in the `),Aa(372,`a`,22),bT(373,`event emitter sample`),cf(),bT(374,`.`),cf()(),Aa(375,`a`,23),Wa(376,`i`,24),Aa(377,`span`),bT(378,`Edit on GitHub`),cf()()()),c&2){let y=tT(44);zC(41),hf(` `,jT(42,3,`app.module`,y.isJsActive),`
`),zC(272),Ky(`@OnEvent('order.created', `,`{`,` priority: 10, async: true `,`}`,`)`)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return d})();var he=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-file-storage`]],features:[xy],decls:2e3,vars:80,consts:[[`contentReference`,``],[`app2f78efabb78c059d39d8b802c22754b051045665`,``],[`app4360995bd954ffb476f2553391f40e12e0f7aef4`,``],[`app3e638314532cf6304fe620ef6a8c74f37c54114e`,``],[`app1071b6ebb5504e531857de13481376f5ae730531`,``],[`appa15af710d1dff42dc01ebe686361ed2ae3fcd0d7`,``],[`appa2326ec77d87952cfb7a93906427063302aa9fd2`,``],[`appe0c14337dff0fb68c5c96fccfdc8b9c721de9480`,``],[`app2b96e92779f7c070187e0837ed137f7cfcfe3f9c`,``],[`app9a8036330d30df4556174dfe14414538e40dcc78`,``],[`appa4783c03ae5e4d778250ce3637877646341cd06e`,``],[`appcd50a3331bd37e550aa7b3679f1a0930977f1985`,``],[`app1678bd1196aac90f5ee94ea981a76f7410884351`,``],[`appc7344730c531f00cef506191b17195fc48d47c00`,``],[`app7b56a1c59acbd7b584d67a58a6618274651f1297`,``],[`app9dc606aeaf578808aa641dfb0d22380c7726ea91`,``],[`app8cdd725905f5d405186382a2accedada3c7dfdcf`,``],[`appa2d8ea137abe4bfd38bcee803f16200be5d54cb4`,``],[`appddfe251ef2c992e00304d6b630639f4db081325d`,``],[`app7875d00126ce2c8d62a5387042924138b3decae3`,``],[`app4f70756a362daff1129aed7df6b5a75cdd613b0f`,``],[1,`content`],[1,`content-inner`],[`id`,`file-storage`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`configure-the-disks`],[`href`,`/application/configuration#custom-configuration-files`],[`href`,`/application/file-storage#use-s3-or-r2-in-production`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/application/file-storage#upload-product-photos`],[`href`,`/application/file-storage#serve-signed-urls-in-development`],[1,`language-text`],[`appAnchor`,``,`id`,`upload-product-photos`],[`href`,`/application/file-storage#upload-straight-to-storage-from-the-mobile-app`],[`href`,`/application/file-storage#accept-csv-and-other-text-formats`],[1,`info`],[`appAnchor`,``,`id`,`accept-csv-and-other-text-formats`],[1,`warning`],[`appAnchor`,``,`id`,`keep-invoices-private`],[`routerLink`,`/security/authorization`],[`appAnchor`,``,`id`,`serve-signed-urls-in-development`],[`appAnchor`,``,`id`,`upload-straight-to-storage-from-the-mobile-app`],[`appAnchor`,``,`id`,`use-s3-or-r2-in-production`],[`appAnchor`,``,`id`,`try-it`],[`appAnchor`,``,`id`,`testing`],[`appAnchor`,``,`id`,`production-checklist`],[`appAnchor`,``,`id`,`reference`],[`appAnchor`,``,`id`,`module-options`],[`href`,`/application/file-storage#configure-the-disks`],[`appAnchor`,``,`id`,`disk-methods`],[`href`,`/application/file-storage#keep-invoices-private`],[`appAnchor`,``,`id`,`disks`],[`href`,`/application/file-storage#testing`],[`appAnchor`,``,`id`,`http-helpers`],[`appAnchor`,``,`id`,`errors`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/file-storage.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,21,0)(2,`div`,22)(3,`h3`,23),bT(4,`File storage`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/storage`),cf(),bT(8,` keeps files on named disks (a local folder, S3 or an S3-compatible store such as R2) behind one API, with public and signed URLs.`),cf(),Aa(9,`p`),bT(10,`An online store for cat food and supplies keeps three kinds of files. Product photos are uploaded by staff and shown to everyone. Invoices are PDF files that only the customer who paid should be able to download. And the warehouse team photographs products with the store's mobile app, which uploads large photos that shouldn't have to pass through the order API.`),cf(),Aa(11,`p`),bT(12,`In development, all of this should work from a folder on the laptop. In production, the files go to S3 or Cloudflare R2, because the API runs on several instances and none of them has a disk that lasts. The code that stores and serves files should be the same in both.`),cf(),Aa(13,`p`)(14,`code`),bT(15,`@nestjs/storage`),cf(),bT(16,` gives each place files live a name, a `),Aa(17,`strong`),bT(18,`disk`),cf(),bT(19,`, and one API for all of them: `),Aa(20,`code`),bT(21,`put()`),cf(),bT(22,`, `),Aa(23,`code`),bT(24,`get()`),cf(),bT(25,`, `),Aa(26,`code`),bT(27,`list()`),cf(),bT(28,`, `),Aa(29,`code`),bT(30,`delete()`),cf(),bT(31,`, public URLs and signed URLs. It ships a local disk, an S3 disk that works with AWS S3 and S3-compatible stores (Cloudflare R2, MinIO, Backblaze B2), and an in-memory disk for tests. It talks to S3 over `),Aa(32,`code`),bT(33,`fetch`),cf(),bT(34,`, with no AWS SDK, and depends only on `),Aa(35,`code`),bT(36,`@nestjs/common`),cf(),bT(37,` and `),Aa(38,`code`),bT(39,`@nestjs/core`),cf(),bT(40,`.`),cf(),Aa(41,`p`),bT(42,`It doesn't parse uploads. multer on Express and `),Aa(43,`code`),bT(44,`@nestjs/platform-fastify/multipart`),cf(),bT(45,` on Fastify keep doing that, with `),Aa(46,`code`),bT(47,`FileInterceptor()`),cf(),bT(48,` as usual. This package is where the files end up: it provides a storage engine that streams each upload straight onto a disk.`),cf(),Aa(49,`p`),bT(50,`In this tutorial, you'll:`),cf(),Aa(51,`ul`)(52,`li`),bT(53,`configure a public disk for photos and a private disk for everything else,`),cf(),Aa(54,`li`),bT(55,`stream photo uploads onto the photos disk, with the type and size checked before anything is written,`),cf(),Aa(56,`li`),bT(57,`store invoices privately and hand out download links that expire after five minutes,`),cf(),Aa(58,`li`),bT(59,`let the mobile app upload photos directly to storage, with a signed upload URL,`),cf(),Aa(60,`li`),bT(61,`switch from local disks to S3 or R2 with configuration alone,`),cf(),Aa(62,`li`),bT(63,`test all of it against in-memory disks.`),cf()(),Aa(64,`h4`,24)(65,`span`),bT(66,`Installation`),cf()(),Aa(67,`p`),bT(68,`To get started, install the required dependencies:`),cf(),Aa(69,`pre`)(70,`code`,25),bT(71,`
$ npm i --save @nestjs/storage @nestjs/config
`),cf()(),Aa(72,`h4`,26)(73,`span`),bT(74,`Configure the disks`),cf()(),Aa(75,`p`),bT(76,`The app needs two disks. `),Aa(77,`code`),bT(78,`photos`),cf(),bT(79,` holds product photos, which anyone may see, so it has a public URL. `),Aa(80,`code`),bT(81,`private`),cf(),bT(82,` holds invoices and uploads that haven't been checked yet, and is only reachable through signed URLs. Keeping public and private files on separate disks (separate buckets, in production) means a file never becomes public by accident.`),cf(),Aa(83,`p`),bT(84,`Start with the configuration, a `),Aa(85,`a`,27),bT(86,`custom configuration file`),cf(),bT(87,` for `),Aa(88,`code`),bT(89,`@nestjs/config`),cf(),bT(90,`. `),Aa(91,`code`),bT(92,`STORAGE_DRIVER`),cf(),bT(93,` will pick local disks or S3 `),Aa(94,`a`,28),bT(95,`in production`),cf(),bT(96,`; until then, everything is local:`),cf(),Aa(97,`app-copy-button`,29)(98,`span`,30),bT(99),LT(100,`extension`),Wa(101,`app-tabs`,null,1),cf(),Aa(103,`pre`)(104,`code`,31),bT(105,`
export default () => ({
  appUrl: process.env.APP_URL ?? 'http://localhost:3000',
  storage: {
    // 'local' in development, 's3' in production (AWS S3, Cloudflare R2, MinIO...)
    driver: process.env.STORAGE_DRIVER ?? 'local',
    root: process.env.STORAGE_ROOT ?? 'storage',
    signingKey: process.env.STORAGE_SIGNING_KEY,
    s3: {
      endpoint: process.env.S3_ENDPOINT,
      region: process.env.S3_REGION ?? 'auto',
      photosBucket: process.env.S3_PHOTOS_BUCKET ?? 'store-photos',
      privateBucket: process.env.S3_PRIVATE_BUCKET ?? 'store-private',
      photosUrl: process.env.PHOTOS_CDN_URL,
    },
  },
});
`),cf()()(),Aa(106,`p`),bT(107,`The disks are built from that configuration by a factory function:`),cf(),Aa(108,`app-copy-button`,29)(109,`span`,30),bT(110),LT(111,`extension`),Wa(112,`app-tabs`,null,2),cf(),Aa(114,`pre`)(115,`code`,31),bT(116,`
import { ConfigService } from '@nestjs/config';
import { LocalDisk, type StorageModuleOptions } from '@nestjs/storage';

export function createStorageOptions(config: ConfigService): StorageModuleOptions {
  const appUrl = config.getOrThrow<string>('appUrl');
  const root = config.getOrThrow<string>('storage.root');
  return {
    default: 'private',
    disks: {
      // Product photos: public, served by the app in development
      photos: new LocalDisk({ root: \`\${root}/photos\`, publicUrl: \`\${appUrl}/photos\` }),
      // Invoices and uploads in progress: only reachable through signed URLs
      private: new LocalDisk({
        root: \`\${root}/private\`,
        signedUrls: {
          baseUrl: \`\${appUrl}/files\`,
          keys: [config.getOrThrow<string>('storage.signingKey')],
        },
      }),
    },
  };
}
`),cf()()(),Aa(117,`p`),bT(118,`A `),Aa(119,`code`),bT(120,`LocalDisk`),cf(),bT(121,` keeps files in a directory, which it creates at startup. `),Aa(122,`code`),bT(123,`publicUrl`),cf(),bT(124,` is where the files can be fetched publicly: the photos disk's `),Aa(125,`code`),bT(126,`url(key)`),cf(),bT(127,` returns URLs under it. In development, the app itself will serve that path (see `),Aa(128,`a`,32),bT(129,`Upload product photos`),cf(),bT(130,`); in production, a CDN will.`),cf(),Aa(131,`p`),bT(132,`A local directory can't produce signed URLs the way S3 does, so the private disk signs its own: with `),Aa(133,`code`),bT(134,`signedUrls`),cf(),bT(135,`, its `),Aa(136,`code`),bT(137,`signedUrl()`),cf(),bT(138,` returns URLs under `),Aa(139,`code`),bT(140,`baseUrl`),cf(),bT(141,`, signed with HMAC-SHA256, which the app verifies and serves (see `),Aa(142,`a`,33),bT(143,`Serve signed URLs in development`),cf(),bT(144,`). `),Aa(145,`code`),bT(146,`keys`),cf(),bT(147,` takes one or more keys. The first signs, and all of them verify, so you can rotate a key by putting the new one first and removing the old one once the links it signed have expired. A key must have at least 32 characters.`),cf(),Aa(148,`p`),bT(149,`Register the module with `),Aa(150,`code`),bT(151,`forRootAsync()`),cf(),bT(152,`, so the factory can read `),Aa(153,`code`),bT(154,`ConfigService`),cf(),bT(155,`:`),cf(),Aa(156,`app-copy-button`,29)(157,`span`,30),bT(158),LT(159,`extension`),Wa(160,`app-tabs`,null,3),cf(),Aa(162,`pre`)(163,`code`,31),bT(164,`
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StorageModule } from '@nestjs/storage';
import configuration from './config/configuration.js';
import { createStorageOptions } from './storage/storage.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    StorageModule.forRootAsync({
      inject: [ConfigService],
      useFactory: createStorageOptions,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(165,`p`)(166,`code`),bT(167,`StorageModule`),cf(),bT(168,` is global. Services inject a disk in one of three ways:`),cf(),Aa(169,`table`)(170,`thead`)(171,`tr`)(172,`th`),bT(173,`Injection`),cf(),Aa(174,`th`),bT(175,`Gives you`),cf()()(),Aa(176,`tbody`)(177,`tr`)(178,`td`)(179,`code`),bT(180,`private readonly files: StorageDisk`),cf()(),Aa(181,`td`),bT(182,`The default disk, here `),Aa(183,`code`),bT(184,`private`),cf()()(),Aa(185,`tr`)(186,`td`)(187,`code`),bT(188,`@InjectDisk('photos') private readonly photos: StorageDisk`),cf()(),Aa(189,`td`),bT(190,`The disk called `),Aa(191,`code`),bT(192,`photos`),cf()()(),Aa(193,`tr`)(194,`td`)(195,`code`),bT(196,`private readonly storage: Storage`),cf()(),Aa(197,`td`),bT(198,`Every disk: `),Aa(199,`code`),bT(200,`storage.disk('photos')`),cf(),bT(201,`, for code that picks a disk at runtime`),cf()()()(),Aa(202,`p`),bT(203,`Configuration mistakes stop the application at startup. Without `),Aa(204,`code`),bT(205,`STORAGE_SIGNING_KEY`),cf(),bT(206,`, `),Aa(207,`code`),bT(208,`getOrThrow()`),cf(),bT(209,` reports the missing key; with a short one, the error says the signing key must have at least 32 characters. The same goes for a `),Aa(210,`code`),bT(211,`default`),cf(),bT(212,` that names no disk, and for a class that injects a disk name no configuration provides:`),cf(),Aa(213,`pre`)(214,`code`,34),bT(215,`
PhotosService injects the disk "photos" (@InjectDisk('photos')), but StorageModule has no disk by that name. Configured disks: private.
`),cf()(),Aa(216,`h4`,35)(217,`span`),bT(218,`Upload product photos`),cf()(),Aa(219,`p`),bT(220,`Photos may be JPEG, PNG or WebP images of up to 5 MiB. The rules are shared by the upload endpoint below and the `),Aa(221,`a`,36),bT(222,`mobile uploads`),cf(),bT(223,` further down:`),cf(),Aa(224,`app-copy-button`,29)(225,`span`,30),bT(226),LT(227,`extension`),Wa(228,`app-tabs`,null,4),cf(),Aa(230,`pre`)(231,`code`,31),bT(232,`
/** What a product photo may be, wherever it is uploaded from. */
export const PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const MAX_PHOTO_SIZE = 5 * 1024 * 1024; // 5 MiB
/** Every photo gets a new key, so browsers and the CDN may cache it forever. */
export const PHOTO_CACHE_CONTROL = 'public, max-age=31536000, immutable';
`),cf()()(),Aa(233,`p`),bT(234,`The upload endpoint uses `),Aa(235,`code`),bT(236,`FileInterceptor()`),cf(),bT(237,` from `),Aa(238,`code`),bT(239,`@nestjs/platform-express`),cf(),bT(240,`, as any upload does. The difference is the `),Aa(241,`code`),bT(242,`storage`),cf(),bT(243,` option: `),Aa(244,`code`),bT(245,`uploadToDisk()`),cf(),bT(246,` is a multer storage engine that streams the file onto a disk instead of into memory or a temp folder:`),cf(),Aa(247,`app-copy-button`,29)(248,`span`,30),bT(249),LT(250,`extension`),Wa(251,`app-tabs`,null,5),cf(),Aa(253,`pre`)(254,`code`,31),bT(255,`
import { BadRequestException, Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectDisk, serveFile, StorageDisk, uploadToDisk, type StoredUpload } from '@nestjs/storage';
import type { Request, Response } from 'express';
import { MAX_PHOTO_SIZE, PHOTO_CACHE_CONTROL, PHOTO_TYPES } from './photo-rules.js';
import { PhotosService } from './photos.service.js';

@Controller()
export class PhotosController {
  constructor(
    private readonly photosService: PhotosService,
    @InjectDisk('photos') private readonly photos: StorageDisk,
  ) {}

  @Post('products/:id/photo')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: uploadToDisk({ disk: 'photos', contentTypes: PHOTO_TYPES, cacheControl: PHOTO_CACHE_CONTROL }),
      limits: { fileSize: MAX_PHOTO_SIZE, files: 1 },
    }),
  )
  upload(@Param('id') id: string, @UploadedFile() file: StoredUpload | undefined) {
    if (!file) {
      throw new BadRequestException('Attach the image as the "photo" field');
    }
    return this.photosService.replace(id, file.key);
  }

  // Development only: in production a CDN serves the photos bucket at \`publicUrl\`
  @Get('photos/:file')
  serve(@Param('file') file: string, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return serveFile(this.photos, file, { req, res, disposition: 'inline' });
  }
}
`),cf()()(),Aa(256,`p`),bT(257,`By the time the handler runs, the photo is stored. `),Aa(258,`code`),bT(259,`uploadToDisk()`),cf(),bT(260,` has done three things on the way:`),cf(),Aa(261,`ul`)(262,`li`)(263,`strong`),bT(264,`It checked what the file is, not what the client says it is.`),cf(),bT(265,` A browser sends the type it guesses from the file name, and a script can send anything, so a file declared `),Aa(266,`code`),bT(267,`image/png`),cf(),bT(268,` may well be an HTML page or an SVG with a script in it. The engine reads the first bytes of the stream, detects the type from their signature (JPEG, PNG, GIF, WebP, AVIF, HEIC and PDF are built in; `),Aa(269,`a`,37),bT(270,`other formats`),cf(),bT(271,` take a detector of your own), and refuses anything not in `),Aa(272,`code`),bT(273,`contentTypes`),cf(),bT(274,` with a `),Aa(275,`code`),bT(276,`415`),cf(),bT(277,` before a byte is written. The stored content type is the detected one, never the client's.`),cf(),Aa(278,`li`)(279,`strong`),bT(280,`It enforced the size limit without leaving a partial file.`),cf(),bT(281,` multer stops reading at `),Aa(282,`code`),bT(283,`limits.fileSize`),cf(),bT(284,`. The engine then refuses to commit what it received: the request fails with `),Aa(285,`code`),bT(286,`413 File too large`),cf(),bT(287,`, nothing is stored, and no file is replaced.`),cf(),Aa(288,`li`)(289,`strong`),bT(290,`It picked the key.`),cf(),bT(291,` By default, a random UUID and the extension of the detected type, such as `),Aa(292,`code`),bT(293,`2f1c0d6e-….png`),cf(),bT(294,`. Unique keys matter: an upload never overwrites another, and a cached photo never goes stale.`),cf()(),Aa(295,`p`)(296,`code`),bT(297,`@UploadedFile()`),cf(),bT(298,` returns a `),Aa(299,`code`),bT(300,`StoredUpload`),cf(),bT(301,`: multer's usual fields (`),Aa(302,`code`),bT(303,`fieldname`),cf(),bT(304,`, `),Aa(305,`code`),bT(306,`originalname`),cf(),bT(307,`, `),Aa(308,`code`),bT(309,`mimetype`),cf(),bT(310,`, `),Aa(311,`code`),bT(312,`size`),cf(),bT(313,`) plus `),Aa(314,`code`),bT(315,`key`),cf(),bT(316,`, `),Aa(317,`code`),bT(318,`disk`),cf(),bT(319,`, `),Aa(320,`code`),bT(321,`contentType`),cf(),bT(322,` and `),Aa(323,`code`),bT(324,`etag`),cf(),bT(325,`. `),Aa(326,`code`),bT(327,`mimetype`),cf(),bT(328,` is still the client's claim; use `),Aa(329,`code`),bT(330,`contentType`),cf(),bT(331,`.`),cf(),Aa(332,`blockquote`,38)(333,`strong`),bT(334,`Hint`),cf(),Aa(335,`code`),bT(336,`ParseFilePipe`),cf(),bT(337,` and its validators run after the interceptor, when a streamed file is already stored, and `),Aa(338,`code`),bT(339,`FileTypeValidator`),cf(),bT(340,` needs the file in memory to check its bytes. With `),Aa(341,`code`),bT(342,`uploadToDisk()`),cf(),bT(343,`, check type and size in the engine, as above. On Fastify, import `),Aa(344,`code`),bT(345,`FileInterceptor`),cf(),bT(346,` from `),Aa(347,`code`),bT(348,`@nestjs/platform-fastify/multipart`),cf(),bT(349,` and register `),Aa(350,`code`),bT(351,`@fastify/multipart`),cf(),bT(352,`; `),Aa(353,`code`),bT(354,`uploadToDisk()`),cf(),bT(355,` works the same with both.
`),cf(),Aa(356,`p`),bT(357,`Products have this shape, and the application's `),Aa(358,`code`),bT(359,`ProductsService`),cf(),bT(360,` has `),Aa(361,`code`),bT(362,`findOne(id)`),cf(),bT(363,`, which throws `),Aa(364,`code`),bT(365,`NotFoundException`),cf(),bT(366,` for an unknown id, and `),Aa(367,`code`),bT(368,`setPhoto(id, key)`),cf(),bT(369,`:`),cf(),Aa(370,`app-copy-button`,29)(371,`span`,30),bT(372),LT(373,`extension`),Wa(374,`app-tabs`,null,6),cf(),Aa(376,`pre`)(377,`code`,31),bT(378,`
export interface Product {
  id: string;
  name: string;
  /** Price in cents */
  price: number;
  /** Where the photo lives on the \`photos\` disk */
  photoKey?: string;
}
`),cf()()(),Aa(379,`p`),bT(380,`The service records the new photo, and deletes the previous one:`),cf(),Aa(381,`app-copy-button`,29)(382,`span`,30),bT(383),LT(384,`extension`),Wa(385,`app-tabs`,null,7),cf(),Aa(387,`pre`)(388,`code`,31),bT(389,`
import { Injectable } from '@nestjs/common';
import { InjectDisk, StorageDisk } from '@nestjs/storage';
import { ProductsService } from './products.service.js';

@Injectable()
export class PhotosService {
  constructor(
    private readonly productsService: ProductsService,
    @InjectDisk('photos') private readonly photos: StorageDisk,
  ) {}

  async replace(productId: string, key: string): Promise<{ id: string; photoUrl: string }> {
    let previous: string | undefined;
    try {
      previous = this.productsService.findOne(productId).photoKey;
      this.productsService.setPhoto(productId, key);
    } catch (error) {
      // The upload is already stored: don't leave it behind for a product that doesn't exist
      await this.photos.delete(key);
      throw error;
    }
    if (previous) {
      await this.photos.delete(previous);
    }
    return { id: productId, photoUrl: this.photos.url(key) };
  }
}
`),cf()()(),Aa(390,`p`),bT(391,`The interceptor runs before the handler, so the file is stored even when the product turns out not to exist. The service deletes it in that case, which keeps a mistyped id from leaving orphans behind. `),Aa(392,`code`),bT(393,`url(key)`),cf(),bT(394,` builds the public URL from the disk's `),Aa(395,`code`),bT(396,`publicUrl`),cf(),bT(397,`.`),cf(),Aa(398,`p`),bT(399,`The `),Aa(400,`code`),bT(401,`GET photos/:file`),cf(),bT(402,` route serves photos in development. `),Aa(403,`code`),bT(404,`serveFile()`),cf(),bT(405,` streams a file from a disk as the response, with `),Aa(406,`code`),bT(407,`Content-Type`),cf(),bT(408,`, `),Aa(409,`code`),bT(410,`Content-Length`),cf(),bT(411,`, `),Aa(412,`code`),bT(413,`ETag`),cf(),bT(414,`, `),Aa(415,`code`),bT(416,`Last-Modified`),cf(),bT(417,`, the `),Aa(418,`code`),bT(419,`Cache-Control`),cf(),bT(420,` stored with the file (`),Aa(421,`code`),bT(422,`private`),cf(),bT(423,` when none is, so a shared cache never keeps a file that may be one user's), and `),Aa(424,`code`),bT(425,`X-Content-Type-Options: nosniff`),cf(),bT(426,`, so the browser never second-guesses the type. `),Aa(427,`code`),bT(428,`disposition: 'inline'`),cf(),bT(429,` lets the browser show the image; for types that could run script in your origin, such as HTML or SVG, `),Aa(430,`code`),bT(431,`serveFile()`),cf(),bT(432,` sends `),Aa(433,`code`),bT(434,`Content-Disposition: attachment`),cf(),bT(435,` regardless. It answers `),Aa(436,`code`),bT(437,`Range`),cf(),bT(438,` requests with `),Aa(439,`code`),bT(440,`206`),cf(),bT(441,`, `),Aa(442,`code`),bT(443,`If-None-Match`),cf(),bT(444,` with `),Aa(445,`code`),bT(446,`304`),cf(),bT(447,`, and a missing file with `),Aa(448,`code`),bT(449,`404`),cf(),bT(450,`.`),cf(),Aa(451,`p`),bT(452,`Register the feature module, and import `),Aa(453,`code`),bT(454,`ProductsModule`),cf(),bT(455,` in `),Aa(456,`code`),bT(457,`AppModule`),cf(),bT(458,`:`),cf(),Aa(459,`app-copy-button`,29)(460,`span`,30),bT(461),LT(462,`extension`),Wa(463,`app-tabs`,null,8),cf(),Aa(465,`pre`)(466,`code`,31),bT(467,`
import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller.js';
import { PhotosService } from './photos.service.js';
import { ProductsService } from './products.service.js';

@Module({
  controllers: [PhotosController],
  providers: [ProductsService, PhotosService],
})
export class ProductsModule {}
`),cf()()(),Aa(468,`h5`,39)(469,`span`),bT(470,`Accept CSV and other text formats`),cf()(),Aa(471,`p`),bT(472,`Built-in detection recognizes formats by the fixed bytes they start with. A CSV file has no such signature, so `),Aa(473,`code`),bT(474,`contentTypes: ['text/csv']`),cf(),bT(475,` on its own refuses every CSV with a `),Aa(476,`code`),bT(477,`415`),cf(),bT(478,`. For a format like that, pass `),Aa(479,`code`),bT(480,`detectContentType`),cf(),bT(481,`: a function that receives the start of the file and returns its type, or `),Aa(482,`code`),bT(483,`undefined`),cf(),bT(484,` when it doesn't recognize it.`),cf(),Aa(485,`p`),bT(486,`Staff update prices by uploading a spreadsheet export. The app recognizes one by its header row:`),cf(),Aa(487,`app-copy-button`,29)(488,`span`,30),bT(489),LT(490,`extension`),Wa(491,`app-tabs`,null,9),cf(),Aa(493,`pre`)(494,`code`,31),bT(495,`
/** The header row of a price list exported from the spreadsheet */
const PRICE_LIST_HEADER = 'sku,price';

/** Recognizes a price list by its first line. It doesn't check the rows. */
export function detectPriceList(bytes: Buffer): string | undefined {
  // Spreadsheet apps often start a UTF-8 export with a byte order mark: TextDecoder drops it
  const text = new TextDecoder().decode(bytes);
  const header = text.split(/\\r?\\n/, 1)[0];
  return header === PRICE_LIST_HEADER ? 'text/csv; charset=utf-8' : undefined;
}
`),cf()()(),Aa(496,`p`),bT(497,`The upload endpoint allows `),Aa(498,`code`),bT(499,`text/csv`),cf(),bT(500,` and passes the function to `),Aa(501,`code`),bT(502,`uploadToDisk()`),cf(),bT(503,`. Price lists go to the private disk, because nobody has checked their rows yet:`),cf(),Aa(504,`app-copy-button`,29)(505,`span`,30),bT(506),LT(507,`extension`),Wa(508,`app-tabs`,null,10),cf(),Aa(510,`pre`)(511,`code`,31),bT(512,`
@Post('products/price-lists')
@UseInterceptors(
  FileInterceptor('prices', {
    storage: uploadToDisk({
      disk: 'private',
      key: (file) => \`price-lists/\${randomUUID()}\${file.extension}\`,
      contentTypes: ['text/csv'],
      detectContentType: detectPriceList,
    }),
    limits: { fileSize: 1024 * 1024, files: 1 },
  }),
)
importPrices(@UploadedFile() file: StoredUpload | undefined) {
  if (!file) {
    throw new BadRequestException('Attach the price list as the "prices" field');
  }
  return this.priceListsService.import(file.key);
}
`),cf()()(),Aa(513,`ul`)(514,`li`)(515,`strong`),bT(516,`Built-in detection comes first.`),cf(),bT(517,` The function only runs when the file isn't one of the built-in formats. A PNG renamed to `),Aa(518,`code`),bT(519,`prices.csv`),cf(),bT(520,` is still detected as a PNG, and refused. Passing the exported `),Aa(521,`code`),bT(522,`detectContentType()`),cf(),bT(523,` helper as the option does nothing, because that's the check that already ran.`),cf(),Aa(524,`li`)(525,`strong`),bT(526,`It sees the start of the file.`),cf(),Aa(527,`code`),bT(528,`bytes`),cf(),bT(529,` holds the first 4 KiB, or the whole file when it's smaller. To change that, set `),Aa(530,`code`),bT(531,`contentTypeSampleBytes`),cf(),bT(532,` to a whole number from 1 byte to 64 KiB (it requires `),Aa(533,`code`),bT(534,`detectContentType`),cf(),bT(535,`). The second argument has `),Aa(536,`code`),bT(537,`originalname`),cf(),bT(538,` and `),Aa(539,`code`),bT(540,`mimetype`),cf(),bT(541,`, but they're the client's claims, so decide from the bytes.`),cf(),Aa(542,`li`)(543,`strong`),bT(544,`What it returns is checked against `),Aa(545,`code`),bT(546,`contentTypes`),cf(),bT(547,`.`),cf(),bT(548,` Types are compared without their parameters: `),Aa(549,`code`),bT(550,`text/csv`),cf(),bT(551,` in the list allows `),Aa(552,`code`),bT(553,`text/csv; charset=utf-8`),cf(),bT(554,`. When the function returns `),Aa(555,`code`),bT(556,`undefined`),cf(),bT(557,`, or a type that isn't in the list, the upload is refused with a `),Aa(558,`code`),bT(559,`415`),cf(),bT(560,` before a byte is written. Without `),Aa(561,`code`),bT(562,`contentTypes`),cf(),bT(563,`, any returned type is accepted, and an unrecognized file is stored as `),Aa(564,`code`),bT(565,`application/octet-stream`),cf(),bT(566,`.`),cf(),Aa(567,`li`)(568,`strong`),bT(569,`The returned type is the one the file is stored and served with.`),cf(),bT(570,` Include the charset for text formats. It also sets the extension: `),Aa(571,`code`),bT(572,`file.extension`),cf(),bT(573,` is `),Aa(574,`code`),bT(575,`.csv`),cf(),bT(576,` in `),Aa(577,`code`),bT(578,`key()`),cf(),bT(579,` above, and the default key ends with it too.`),cf(),Aa(580,`li`)(581,`strong`),bT(582,`It may be async.`),cf(),bT(583,` The engine waits for the promise while it holds the request, so it must settle quickly. Return `),Aa(584,`code`),bT(585,`undefined`),cf(),bT(586,` for a file you don't recognize rather than throwing: an error fails the upload as it would anywhere else in the request, so anything but an `),Aa(587,`code`),bT(588,`HttpException`),cf(),bT(589,` becomes a `),Aa(590,`code`),bT(591,`500`),cf(),bT(592,` instead of a `),Aa(593,`code`),bT(594,`415`),cf(),bT(595,`. So does returning anything but a string or `),Aa(596,`code`),bT(597,`undefined`),cf(),bT(598,`.`),cf()(),Aa(599,`blockquote`,40)(600,`strong`),bT(601,`Warning`),cf(),bT(602,` The function classifies the start of the file. It doesn't validate the file: a price list with the right header can hold anything after it. `),Aa(603,`code`),bT(604,`PriceListsService.import()`),cf(),bT(605,` must read the whole file, check every row, and delete `),Aa(606,`code`),bT(607,`file.key`),cf(),bT(608,` when it rejects the list, as with any check that runs after the interceptor.
`),cf(),Aa(609,`h4`,41)(610,`span`),bT(611,`Keep invoices private`),cf()(),Aa(612,`p`),bT(613,`An invoice is generated the first time a customer asks for it and stored on the private disk. A real app renders the PDF with a library or a rendering service; this stand-in is enough to follow the flow:`),cf(),Aa(614,`app-copy-button`,29)(615,`span`,30),bT(616),LT(617,`extension`),Wa(618,`app-tabs`,null,11),cf(),Aa(620,`pre`)(621,`code`,31),bT(622,`
import type { Order } from '../orders/order.interface.js';

const usd = (cents: number) => (cents / 100).toFixed(2);

/** A stand-in for a real PDF renderer (pdfkit, a headless browser, a rendering service). */
export function renderInvoice(order: Order): Buffer {
  const lines = order.items.map((item) => \`% \${item.quantity} x \${item.name}  \${usd(item.price)}\`);
  return Buffer.from(
    ['%PDF-1.7', \`% Invoice for \${order.id}\`, ...lines, \`% Total \${usd(order.total)} USD\`, '%%EOF', ''].join('\\n'),
  );
}
`),cf()()(),Aa(623,`p`),bT(624,`The service reads the order with the application's `),Aa(625,`code`),bT(626,`OrdersService`),cf(),bT(627,`, in which order `),Aa(628,`code`),bT(629,`ord_1000`),cf(),bT(630,` has been paid and `),Aa(631,`code`),bT(632,`ord_1001`),cf(),bT(633,` hasn't, stores the invoice once, and returns a signed link to it:`),cf(),Aa(634,`app-copy-button`,29)(635,`span`,30),bT(636),LT(637,`extension`),Wa(638,`app-tabs`,null,12),cf(),Aa(640,`pre`)(641,`code`,31),bT(642,`
import { ConflictException, Injectable } from '@nestjs/common';
import { StorageDisk } from '@nestjs/storage';
import { OrdersService } from '../orders/orders.service.js';
import { renderInvoice } from './render-invoice.js';

@Injectable()
export class InvoicesService {
  constructor(
    private readonly ordersService: OrdersService,
    // No name: the default disk, \`private\`
    private readonly storageDisk: StorageDisk,
  ) {}

  async downloadUrl(orderId: string) {
    const order = this.ordersService.findOne(orderId);
    if (order.status === 'pending') {
      throw new ConflictException(\`Order \${orderId} has not been paid yet\`);
    }
    const key = \`invoices/\${order.id}.pdf\`;
    if (!(await this.storageDisk.exists(key))) {
      await this.storageDisk.put(key, renderInvoice(order), {
        contentType: 'application/pdf',
        metadata: { orderId: order.id },
      });
    }
    const url = await this.storageDisk.signedUrl(key, {
      expiresIn: '5m',
      filename: \`invoice-\${order.id}.pdf\`,
    });
    return { url };
  }
}
`),cf()()(),Aa(643,`p`)(644,`code`),bT(645,`put()`),cf(),bT(646,` takes a `),Aa(647,`code`),bT(648,`Buffer`),cf(),bT(649,`, a string, a `),Aa(650,`code`),bT(651,`Uint8Array`),cf(),bT(652,`, a Node stream, a web `),Aa(653,`code`),bT(654,`ReadableStream`),cf(),bT(655,`, or any async iterable of bytes. On every disk, a write is atomic: a reader sees the old file or the new one, never half of one, and a write that fails leaves nothing behind. `),Aa(656,`code`),bT(657,`metadata`),cf(),bT(658,` stores your own string values with the file; `),Aa(659,`code`),bT(660,`stat()`),cf(),bT(661,` and `),Aa(662,`code`),bT(663,`get()`),cf(),bT(664,` return them.`),cf(),Aa(665,`p`),bT(666,`For `),Aa(667,`code`),bT(668,`LocalDisk`),cf(),bT(669,`, a failed filesystem write removes the temporary file and preserves any existing file. If writing makes no progress, or the persisted size differs from the bytes written, `),Aa(670,`code`),bT(671,`put()`),cf(),bT(672,` rejects with `),Aa(673,`code`),bT(674,`StorageError`),cf(),bT(675,`.`),cf(),Aa(676,`p`)(677,`code`),bT(678,`signedUrl()`),cf(),bT(679,` returns a link that works without any other credentials until it expires. `),Aa(680,`code`),bT(681,`expiresIn`),cf(),bT(682,` is a duration: `),Aa(683,`code`),bT(684,`'5m'`),cf(),bT(685,`, `),Aa(686,`code`),bT(687,`'1h'`),cf(),bT(688,`, or milliseconds, 15 minutes by default and at most 7 days, S3's limit. `),Aa(689,`code`),bT(690,`filename`),cf(),bT(691,` sets the name the browser saves the file under.`),cf(),Aa(692,`p`),bT(693,`The endpoint returns the link rather than the file, which lets a web page or the mobile app open it directly:`),cf(),Aa(694,`app-copy-button`,29)(695,`span`,30),bT(696),LT(697,`extension`),Wa(698,`app-tabs`,null,13),cf(),Aa(700,`pre`)(701,`code`,31),bT(702,`
import { Controller, Get, Param } from '@nestjs/common';
import { InvoicesService } from '../invoices/invoices.service.js';

@Controller('orders')
export class OrdersController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get(':id/invoice')
  invoice(@Param('id') id: string) {
    return this.invoicesService.downloadUrl(id);
  }
}
`),cf()()(),Aa(703,`p`),bT(704,`Register `),Aa(705,`code`),bT(706,`OrdersController`),cf(),bT(707,`, `),Aa(708,`code`),bT(709,`OrdersService`),cf(),bT(710,` and `),Aa(711,`code`),bT(712,`InvoicesService`),cf(),bT(713,` in an `),Aa(714,`code`),bT(715,`OrdersModule`),cf(),bT(716,`. In a real app, the endpoint also checks that the invoice belongs to the signed-in customer, for instance with a policy from the `),Aa(717,`a`,42),bT(718,`authorization`),cf(),bT(719,` tutorial. The link itself needs no check: whoever holds it may download that one file until it expires.`),cf(),Aa(720,`h4`,43)(721,`span`),bT(722,`Serve signed URLs in development`),cf()(),Aa(723,`p`),bT(724,`With a local disk, the signed link points at the app itself, `),Aa(725,`code`),bT(726,`http://localhost:3000/files?key=…&expires=…&signature=…`),cf(),bT(727,`, so the app needs a route that verifies and serves it:`),cf(),Aa(728,`app-copy-button`,29)(729,`span`,30),bT(730),LT(731,`extension`),Wa(732,`app-tabs`,null,14),cf(),Aa(734,`pre`)(735,`code`,31),bT(736,`
import { Controller, Get, Req, Res } from '@nestjs/common';
import { serveSignedUrl, StorageDisk } from '@nestjs/storage';
import type { Request, Response } from 'express';

/**
 * Serves the private disk's signed URLs when it is a local disk. With S3, the URLs point at
 * the bucket and this route answers 404.
 */
@Controller('files')
export class FilesController {
  constructor(private readonly storageDisk: StorageDisk) {}

  @Get()
  download(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return serveSignedUrl(this.storageDisk, { req, res });
  }
}
`),cf()()(),Aa(737,`p`)(738,`code`),bT(739,`serveSignedUrl()`),cf(),bT(740,` checks the signature, the expiry and the method, then answers like `),Aa(741,`code`),bT(742,`serveFile()`),cf(),bT(743,`, with the file name the link was signed with. The signature covers the route (`),Aa(744,`code`),bT(745,`baseUrl`),cf(),bT(746,`), the key, the expiry and the file name, so changing any of them is a `),Aa(747,`code`),bT(748,`403 Invalid signed URL`),cf(),bT(749,`, a link past its expiry is a `),Aa(750,`code`),bT(751,`403 The signed URL has expired`),cf(),bT(752,`, and a link issued for one disk's route is refused by another's, even when both use the same signing key. Download managers can resume a large file with `),Aa(753,`code`),bT(754,`Range`),cf(),bT(755,` requests.`),cf(),Aa(756,`p`),bT(757,`Register the controller in a `),Aa(758,`code`),bT(759,`FilesModule`),cf(),bT(760,`, and import it in `),Aa(761,`code`),bT(762,`AppModule`),cf(),bT(763,` along with the other features:`),cf(),Aa(764,`app-copy-button`,29)(765,`span`,30),bT(766),LT(767,`extension`),Wa(768,`app-tabs`,null,15),cf(),Aa(770,`pre`)(771,`code`,31),bT(772,`
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StorageModule } from '@nestjs/storage';
import configuration from './config/configuration.js';
import { FilesModule } from './files/files.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { ProductsModule } from './products/products.module.js';
import { createStorageOptions } from './storage/storage.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    StorageModule.forRootAsync({
      inject: [ConfigService],
      useFactory: createStorageOptions,
    }),
    ProductsModule,
    OrdersModule,
    FilesModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(773,`p`),bT(774,`The route stays in the app in production. There, the private disk is an S3 disk whose signed URLs point at the bucket, so `),Aa(775,`code`),bT(776,`serveSignedUrl()`),cf(),bT(777,` has nothing to serve and answers `),Aa(778,`code`),bT(779,`404`),cf(),bT(780,`.`),cf(),Aa(781,`h4`,44)(782,`span`),bT(783,`Upload straight to storage from the mobile app`),cf()(),Aa(784,`p`),bT(785,`The warehouse team photographs products with the mobile app. Photos are large, and phones are often on slow connections, so an upload through the API would hold a connection and a request for as long as it takes. Instead, the app asks the API for an upload URL, sends the photo straight to storage, and then tells the API it is done:`),cf(),Aa(786,`ol`)(787,`li`)(788,`code`),bT(789,`POST /products/:id/photo/uploads`),cf(),bT(790,` with the photo's type and size returns a signed upload URL.`),cf(),Aa(791,`li`),bT(792,`The app sends the photo to that URL with `),Aa(793,`code`),bT(794,`PUT`),cf(),bT(795,`.`),cf(),Aa(796,`li`)(797,`code`),bT(798,`PUT /products/:id/photo`),cf(),bT(799,` with the upload's key makes it the product's photo.`),cf()(),Aa(800,`p`),bT(801,`The upload goes to the private disk, under `),Aa(802,`code`),bT(803,`incoming/`),cf(),bT(804,`, because the API hasn't looked at it yet. Only after checking it does the API copy it to the photos disk:`),cf(),Aa(805,`app-copy-button`,29)(806,`span`,30),bT(807),LT(808,`extension`),Wa(809,`app-tabs`,null,16),cf(),Aa(811,`pre`)(812,`code`,31),bT(813,`
@Injectable()
export class PhotosService {
  constructor(
    private readonly productsService: ProductsService,
    @InjectDisk('photos') private readonly photos: StorageDisk,
    @InjectDisk('private') private readonly uploads: StorageDisk,
  ) {}

  // ...

  async createUpload(productId: string, contentType: string, size: number) {
    this.productsService.findOne(productId);
    if (!PHOTO_TYPES.includes(contentType)) {
      throw new UnsupportedMediaTypeException(\`A photo must be one of: \${PHOTO_TYPES.join(', ')}\`);
    }
    if (!Number.isSafeInteger(size) || size < 1 || size > MAX_PHOTO_SIZE) {
      throw new BadRequestException(\`size must be between 1 and \${MAX_PHOTO_SIZE} bytes\`);
    }
    // Private until checked; the product id in the key ties the upload to this product
    const key = \`incoming/\${productId}/\${randomUUID()}\`;
    const upload = await this.uploads.signedUpload(key, { contentType, contentLength: size, expiresIn: '10m' });
    return { key, ...upload };
  }

  async completeUpload(productId: string, key: string) {
    this.productsService.findOne(productId);
    // Only keys this endpoint handed out for this product: never copy an arbitrary private
    // file (an invoice) to the public photos disk.
    const prefix = \`incoming/\${productId}/\`;
    if (typeof key !== 'string' || !key.startsWith(prefix) || !/^[0-9a-f-]{36}$/.test(key.slice(prefix.length))) {
      throw new BadRequestException('Unknown upload');
    }
    const file = await this.uploads.stat(key).catch((error: unknown) => {
      if (error instanceof StorageFileNotFoundError) {
        throw new BadRequestException('Upload the file first');
      }
      throw error;
    });
    if (file.size > MAX_PHOTO_SIZE) {
      await this.uploads.delete(key);
      throw new PayloadTooLargeException('File too large');
    }
    // The client chose the Content-Type: check what the bytes are
    const head = await this.uploads.get(key, { range: { start: 0, end: 15 } });
    const type = detectContentType(await buffer(head.body));
    if (!type || !PHOTO_TYPES.includes(type)) {
      await this.uploads.delete(key);
      throw new UnsupportedMediaTypeException(\`A photo must be one of: \${PHOTO_TYPES.join(', ')}\`);
    }
    // Stream it from the private disk to the public one
    const photoKey = \`\${randomUUID()}\${EXTENSIONS[type]}\`;
    const { body } = await this.uploads.get(key);
    await this.photos.put(photoKey, body, {
      contentType: type,
      contentLength: file.size,
      cacheControl: PHOTO_CACHE_CONTROL,
    });
    await this.uploads.delete(key);
    return this.replace(productId, photoKey);
  }
}
`),cf()()(),Aa(814,`p`)(815,`code`),bT(816,`signedUpload()`),cf(),bT(817,` returns the URL, the method (`),Aa(818,`code`),bT(819,`PUT`),cf(),bT(820,`), the headers the client must send, and when the URL expires. The URL is signed for exactly the declared content type and size: a different `),Aa(821,`code`),bT(822,`Content-Type`),cf(),bT(823,`, or a body of another length, is refused by the storage (`),Aa(824,`code`),bT(825,`403`),cf(),bT(826,`), so the app can't send a 2 GB video where it announced a 2 MB photo.`),cf(),Aa(827,`p`),bT(828,`The declared type is still the client's claim. `),Aa(829,`code`),bT(830,`completeUpload()`),cf(),bT(831,` therefore treats the upload as untrusted:`),cf(),Aa(832,`ul`)(833,`li`)(834,`strong`),bT(835,`The key must be one it handed out for this product.`),cf(),bT(836,` Without that check, a client could submit `),Aa(837,`code`),bT(838,`invoices/ord_1000.pdf`),cf(),bT(839,` and have the API copy someone's invoice to the public photos disk.`),cf(),Aa(840,`li`)(841,`strong`),bT(842,`The size is checked again`),cf(),bT(843,` with `),Aa(844,`code`),bT(845,`stat()`),cf(),bT(846,`, which returns the file's metadata without its body.`),cf(),Aa(847,`li`)(848,`strong`),bT(849,`The bytes are checked`),cf(),bT(850,` by reading only the first 16, with a ranged `),Aa(851,`code`),bT(852,`get()`),cf(),bT(853,`, and passing them to `),Aa(854,`code`),bT(855,`detectContentType()`),cf(),bT(856,`, which recognizes JPEG, PNG, GIF, WebP, AVIF, HEIC and PDF.`),cf()(),Aa(857,`p`),bT(858,`Only then is the photo streamed from one disk to the other: `),Aa(859,`code`),bT(860,`get()`),cf(),bT(861,` returns the body as a Node stream, and `),Aa(862,`code`),bT(863,`put()`),cf(),bT(864,` accepts it, so the file never sits in memory whole. On S3, that is a download and an upload through the API instance, which is fine for photos; for very large files, you would process them where they are, for instance with a job.`),cf(),Aa(865,`p`),bT(866,`The two routes in the controller pass the request on:`),cf(),Aa(867,`app-copy-button`,29)(868,`span`,30),bT(869),LT(870,`extension`),Wa(871,`app-tabs`,null,17),cf(),Aa(873,`pre`)(874,`code`,31),bT(875,`
// The mobile app asks for an upload URL, sends the photo there, then submits its key
@Post('products/:id/photo/uploads')
createUpload(@Param('id') id: string, @Body() body: { contentType: string; size: number }) {
  return this.photosService.createUpload(id, body.contentType, body.size);
}

@Put('products/:id/photo')
completeUpload(@Param('id') id: string, @Body('key') key: string) {
  return this.photosService.completeUpload(id, key);
}
`),cf()()(),Aa(876,`p`),bT(877,`With a local disk, the upload URL points at the app again, so `),Aa(878,`code`),bT(879,`FilesController`),cf(),bT(880,` receives the `),Aa(881,`code`),bT(882,`PUT`),cf(),bT(883,` too. `),Aa(884,`code`),bT(885,`receiveSignedUpload()`),cf(),bT(886,` does what S3 does with a presigned URL: it checks the signature, the expiry, the content type and the length, and streams the body onto the disk:`),cf(),Aa(887,`app-copy-button`,29)(888,`span`,30),bT(889),LT(890,`extension`),Wa(891,`app-tabs`,null,18),cf(),Aa(893,`pre`)(894,`code`,31),bT(895,`
import { Controller, Get, Put, Req, Res } from '@nestjs/common';
import { receiveSignedUpload, serveSignedUrl, StorageDisk } from '@nestjs/storage';
import type { Request, Response } from 'express';

/**
 * Serves the private disk's signed URLs when it is a local disk. With S3, the URLs point at
 * the bucket and this route answers 404.
 */
@Controller('files')
export class FilesController {
  constructor(private readonly storageDisk: StorageDisk) {}

  @Get()
  download(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return serveSignedUrl(this.storageDisk, { req, res });
  }

  @Put()
  upload(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return receiveSignedUpload(this.storageDisk, { req, res });
  }
}
`),cf()()(),Aa(896,`blockquote`,38)(897,`strong`),bT(898,`Hint`),cf(),bT(899,` On Fastify, the upload's body must reach the handler unread. Fastify only parses JSON and plain text by default and answers other content types with `),Aa(900,`code`),bT(901,`415`),cf(),bT(902,`, so register a catch-all parser that leaves the body alone: `),Aa(903,`code`),bT(904,`app.getHttpAdapter().getInstance().addContentTypeParser('*', (req, payload, done) => done(null))`),cf(),bT(905,`.
`),cf(),Aa(906,`p`),bT(907,`Uploads that are never completed stay under `),Aa(908,`code`),bT(909,`incoming/`),cf(),bT(910,`. On S3, a lifecycle rule deletes them after a day (see the production checklist).`),cf(),Aa(911,`h4`,45)(912,`span`),bT(913,`Use S3 or R2 in production`),cf()(),Aa(914,`p`),bT(915,`In production, both disks become S3 disks. A local disk can't serve there: a container's file system is discarded when the task is replaced (a deploy, a scale-in, a failed node), taking the files with it, and other instances can't read them. Only the factory changes; every service, controller and signed URL keeps working:`),cf(),Aa(916,`app-copy-button`,29)(917,`span`,30),bT(918),LT(919,`extension`),Wa(920,`app-tabs`,null,19),cf(),Aa(922,`pre`)(923,`code`,31),bT(924,`
import { ConfigService } from '@nestjs/config';
import { LocalDisk, S3Disk, type StorageModuleOptions } from '@nestjs/storage';

export function createStorageOptions(config: ConfigService): StorageModuleOptions {
  if (config.get('storage.driver') === 's3') {
    const s3 = {
      endpoint: config.get<string>('storage.s3.endpoint'),
      region: config.getOrThrow<string>('storage.s3.region'),
    };
    return {
      default: 'private',
      disks: {
        photos: new S3Disk({
          ...s3,
          bucket: config.getOrThrow<string>('storage.s3.photosBucket'),
          publicUrl: config.getOrThrow<string>('storage.s3.photosUrl'),
        }),
        private: new S3Disk({
          ...s3,
          bucket: config.getOrThrow<string>('storage.s3.privateBucket'),
        }),
      },
    };
  }

  // ... the local disks from before
}
`),cf()()(),Aa(925,`p`)(926,`code`),bT(927,`S3Disk`),cf(),bT(928,` reads credentials from the standard `),Aa(929,`code`),bT(930,`AWS_ACCESS_KEY_ID`),cf(),bT(931,`, `),Aa(932,`code`),bT(933,`AWS_SECRET_ACCESS_KEY`),cf(),bT(934,` and `),Aa(935,`code`),bT(936,`AWS_SESSION_TOKEN`),cf(),bT(937,` variables, unless you pass `),Aa(938,`code`),bT(939,`credentials`),cf(),bT(940,`, either an object or a function that returns them (called before every request, for credentials that rotate). Without credentials, the app doesn't start. The same class covers several services:`),cf(),Aa(941,`table`)(942,`thead`)(943,`tr`)(944,`th`),bT(945,`Service`),cf(),Aa(946,`th`),bT(947,`Settings`),cf()()(),Aa(948,`tbody`)(949,`tr`)(950,`td`),bT(951,`AWS S3`),cf(),Aa(952,`td`)(953,`code`),bT(954,`region`),cf(),bT(955,`, such as `),Aa(956,`code`),bT(957,`eu-central-1`),cf(),bT(958,`. No `),Aa(959,`code`),bT(960,`endpoint`),cf()()(),Aa(961,`tr`)(962,`td`),bT(963,`Cloudflare R2`),cf(),Aa(964,`td`)(965,`code`),bT(966,`endpoint: 'https://<account id>.r2.cloudflarestorage.com'`),cf(),bT(967,`, `),Aa(968,`code`),bT(969,`region: 'auto'`),cf()()(),Aa(970,`tr`)(971,`td`),bT(972,`MinIO`),cf(),Aa(973,`td`)(974,`code`),bT(975,`endpoint: 'http://minio:9000'`),cf(),bT(976,`, `),Aa(977,`code`),bT(978,`forcePathStyle: true`),cf()()(),Aa(979,`tr`)(980,`td`),bT(981,`Backblaze B2`),cf(),Aa(982,`td`)(983,`code`),bT(984,`endpoint: 'https://s3.<region>.backblazeb2.com'`),cf(),bT(985,`, `),Aa(986,`code`),bT(987,`region`),cf()()(),Aa(988,`tr`)(989,`td`),bT(990,`Google Cloud Storage`),cf(),Aa(991,`td`)(992,`code`),bT(993,`endpoint: 'https://storage.googleapis.com'`),cf(),bT(994,`, HMAC keys as credentials, `),Aa(995,`code`),bT(996,`batchDelete: false`),cf()()()()(),Aa(997,`p`),bT(998,`With S3, `),Aa(999,`code`),bT(1e3,`signedUrl()`),cf(),bT(1001,` and `),Aa(1002,`code`),bT(1003,`signedUpload()`),cf(),bT(1004,` return presigned URLs, signed with the credentials, which the bucket verifies itself: the app's `),Aa(1005,`code`),bT(1006,`/files`),cf(),bT(1007,` route isn't involved. `),Aa(1008,`code`),bT(1009,`url()`),cf(),bT(1010,` returns URLs under `),Aa(1011,`code`),bT(1012,`publicUrl`),cf(),bT(1013,`, typically a CDN or R2's public bucket domain in front of the photos bucket.`),cf(),Aa(1014,`p`),bT(1015,`Uploads stream to S3 too. A file up to 8 MiB goes up in one request; a longer one, or a stream whose length isn't known, goes up as a multipart upload, four 8 MiB parts at a time, and is aborted if anything fails, so a failed upload never becomes a file. Requests that fail with a network error, a timeout, throttling (`),Aa(1016,`code`),bT(1017,`429`),cf(),bT(1018,`, `),Aa(1019,`code`),bT(1020,`SlowDown`),cf(),bT(1021,`) or a `),Aa(1022,`code`),bT(1023,`5xx`),cf(),bT(1024,` are retried with backoff, up to 3 attempts in all. `),Aa(1025,`code`),bT(1026,`multipart`),cf(),bT(1027,`, `),Aa(1028,`code`),bT(1029,`retry`),cf(),bT(1030,` and `),Aa(1031,`code`),bT(1032,`timeout`),cf(),bT(1033,` tune this per disk.`),cf(),Aa(1034,`blockquote`,38)(1035,`strong`),bT(1036,`Hint`),cf(),bT(1037,` Every S3 request is signed with Signature Version 4, implemented on `),Aa(1038,`code`),bT(1039,`node:crypto`),cf(),bT(1040,`. It is checked against the AWS Signature Version 4 test suite and the examples in the Amazon S3 API reference, so there is no AWS SDK to install.
`),cf(),Aa(1041,`h4`,46)(1042,`span`),bT(1043,`Try it`),cf()(),Aa(1044,`p`),bT(1045,`Start the app with a signing key, in a directory with a `),Aa(1046,`code`),bT(1047,`kibble.png`),cf(),bT(1048,`, a `),Aa(1049,`code`),bT(1050,`scratching-post.jpg`),cf(),bT(1051,` and a `),Aa(1052,`code`),bT(1053,`notes.txt`),cf(),bT(1054,`:`),cf(),Aa(1055,`pre`)(1056,`code`,25),bT(1057,`
$ export STORAGE_SIGNING_KEY=$(openssl rand -hex 32)
$ npm run start
`),cf()(),Aa(1058,`p`),bT(1059,`Upload a photo. Then try a text file declared as an image, which the app refuses without storing it:`),cf(),Aa(1060,`pre`)(1061,`code`,25),bT(1062,`
$ curl -F photo=@kibble.png localhost:3000/products/salmon-kibble-2kg/photo
{"id":"salmon-kibble-2kg","photoUrl":"http://localhost:3000/photos/b098be38-74b4-427a-8239-0ab3dc3a31d2.png"}

$ curl -F 'photo=@notes.txt;type=image/png' localhost:3000/products/salmon-kibble-2kg/photo
{"message":"File type not allowed. Allowed types: image/jpeg, image/png, image/webp","error":"Unsupported Media Type","statusCode":415}
`),cf()(),Aa(1063,`p`),bT(1064,`Fetch a photo's headers:`),cf(),Aa(1065,`pre`)(1066,`code`,25),bT(1067,`
$ PHOTO=$(curl -s -F photo=@kibble.png localhost:3000/products/salmon-kibble-2kg/photo | jq -r .photoUrl)
$ curl -sI "$PHOTO" | grep -iE '^(content-|cache-control|x-content)'
X-Content-Type-Options: nosniff
Cache-Control: public, max-age=31536000, immutable
Content-Type: image/png
Content-Disposition: inline; filename="fc54756b-b451-41a8-82c9-2b979f99849a.png"
Content-Length: 70
`),cf()(),Aa(1068,`p`),bT(1069,`Get a signed link to an invoice, download it, and try the same link for another order:`),cf(),Aa(1070,`pre`)(1071,`code`,25),bT(1072,`
$ curl localhost:3000/orders/ord_1000/invoice
{"url":"http://localhost:3000/files?key=invoices%2Ford_1000.pdf&expires=1790319338&disposition=attachment%3B+filename%3D%22invoice-ord_1000.pdf%22&signature=w1O_KuRThM1epUeyqpsbXNGfECkQ9605tZzNjVFMsy8"}

$ INVOICE=$(curl -s localhost:3000/orders/ord_1000/invoice | jq -r .url)
$ curl -sOJ "$INVOICE"
$ head -c 8 invoice-ord_1000.pdf
%PDF-1.7

$ curl "\${INVOICE/ord_1000/ord_1001}"
{"message":"Invalid signed URL","error":"Forbidden","statusCode":403}
`),cf()(),Aa(1073,`p`),bT(1074,`Finally, upload a photo the way the mobile app does. Ask for an upload URL, send the file there, and submit its key:`),cf(),Aa(1075,`pre`)(1076,`code`,25),bT(1077,`
$ curl -s localhost:3000/products/sisal-scratching-post/photo/uploads --json "{\\"contentType\\":\\"image/jpeg\\",\\"size\\":$(wc -c < scratching-post.jpg)}" | tee upload.json | jq
{
  "key": "incoming/sisal-scratching-post/7fe80da3-4710-4940-a904-4a1756280440",
  "url": "http://localhost:3000/files?key=incoming%2Fsisal-scratching-post%2F7fe80da3-4710-4940-a904-4a1756280440&expires=1790319638&method=PUT&type=image%2Fjpeg&length=2011&signature=vx-LwzqLUUeTQevHKTDjguRTM3c_FWOjCbik1Uo6Ojg",
  "method": "PUT",
  "headers": {
    "content-type": "image/jpeg"
  },
  "expiresAt": "2026-09-25T07:00:38.736Z"
}

$ curl -T scratching-post.jpg -H 'content-type: image/jpeg' "$(jq -r .url upload.json)"
{"key":"incoming/sisal-scratching-post/7fe80da3-4710-4940-a904-4a1756280440","size":2011,"contentType":"image/jpeg","etag":"\\"7db-65c4922577c58\\""}

$ curl -X PUT localhost:3000/products/sisal-scratching-post/photo --json "$(jq -c '{key}' upload.json)"
{"id":"sisal-scratching-post","photoUrl":"http://localhost:3000/photos/5329e44d-7a45-49a5-96eb-6ea0016da7eb.jpg"}
`),cf()(),Aa(1078,`p`),bT(1079,`The files are in `),Aa(1080,`code`),bT(1081,`storage/photos`),cf(),bT(1082,` and `),Aa(1083,`code`),bT(1084,`storage/private`),cf(),bT(1085,`, as plain files: `),Aa(1086,`code`),bT(1087,`storage/private/invoices/ord_1000.pdf`),cf(),bT(1088,` is the invoice. The `),Aa(1089,`code`),bT(1090,`.nest-storage`),cf(),bT(1091,` folder in each holds temporary files during writes, and the metadata that a file name can't carry.`),cf(),Aa(1092,`h4`,47)(1093,`span`),bT(1094,`Testing`),cf()(),Aa(1095,`p`)(1096,`code`),bT(1097,`InMemoryDisk`),cf(),bT(1098,` keeps files in memory and behaves like the other disks: the same key rules, ranges, listings, metadata and signed URLs. Like S3, it can hold both `),Aa(1099,`code`),bT(1100,`a`),cf(),bT(1101,` and `),Aa(1102,`code`),bT(1103,`a/b`),cf(),bT(1104,`, which a local disk refuses with `),Aa(1105,`code`),bT(1106,`StorageKeyConflictError`),cf(),bT(1107,`. In an end-to-end test, replace the disks by overriding `),Aa(1108,`code`),bT(1109,`STORAGE_MODULE_OPTIONS`),cf(),bT(1110,`, the options the factory would have returned:`),cf(),Aa(1111,`app-copy-button`,29)(1112,`span`,30),bT(1113),LT(1114,`extension`),Wa(1115,`app-tabs`,null,20),cf(),Aa(1117,`pre`)(1118,`code`,31),bT(1119,`
import type { INestApplication } from '@nestjs/common';
import { InMemoryDisk, STORAGE_MODULE_OPTIONS } from '@nestjs/storage';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module.js';

const PNG = Buffer.from('89504e470d0a1a0a0000000d49484452', 'hex');

describe('Product photos', () => {
  let app: INestApplication;
  const photos = new InMemoryDisk({ publicUrl: 'https://photos.example.com' });
  const files = new InMemoryDisk({
    signedUrls: { baseUrl: 'https://api.example.com/files', keys: ['test-signing-key-0123456789abcdef'] },
  });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(STORAGE_MODULE_OPTIONS)
      .useValue({ default: 'private', disks: { photos, private: files } })
      .compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(() => app.close());
  beforeEach(() => photos.clear());

  it('stores the photo and returns its public URL', async () => {
    const res = await request(app.getHttpServer())
      .post('/products/salmon-kibble-2kg/photo')
      .attach('photo', PNG, 'photo.png')
      .expect(201);

    const [key] = photos.keys();
    expect(res.body.photoUrl).toBe(\`https://photos.example.com/\${key}\`);
    expect(await photos.getBuffer(key)).toEqual(PNG);
  });

  it('refuses a file that is not an image', async () => {
    await request(app.getHttpServer())
      .post('/products/salmon-kibble-2kg/photo')
      .attach('photo', Buffer.from('<html></html>'), 'photo.png')
      .expect(415);

    expect(photos.keys()).toEqual([]);
  });
});
`),cf()()(),Aa(1120,`p`),bT(1121,`The overridden options replace the factory's result, so the test needs no signing key and touches no file system. `),Aa(1122,`code`),bT(1123,`keys()`),cf(),bT(1124,` lists what a disk holds and `),Aa(1125,`code`),bT(1126,`clear()`),cf(),bT(1127,` empties it. The upload goes through multer and `),Aa(1128,`code`),bT(1129,`uploadToDisk()`),cf(),bT(1130,` as in production; only the place the bytes land differs.`),cf(),Aa(1131,`p`),bT(1132,`To test what reaches a real file system, use a `),Aa(1133,`code`),bT(1134,`LocalDisk`),cf(),bT(1135,` on a temporary directory instead. For S3-specific behavior, such as presigned URLs or multipart uploads, point an `),Aa(1136,`code`),bT(1137,`S3Disk`),cf(),bT(1138,` at MinIO or another S3-compatible server running locally.`),cf(),Aa(1139,`h4`,48)(1140,`span`),bT(1141,`Production checklist`),cf()(),Aa(1142,`ul`)(1143,`li`)(1144,`strong`),bT(1145,`Keep public and private files in separate buckets.`),cf(),bT(1146,` Give the photos bucket public read access, or put a CDN in front of it and point `),Aa(1147,`code`),bT(1148,`publicUrl`),cf(),bT(1149,` at the CDN. Keep the private bucket fully private: invoices and uploads are only reachable through signed URLs. There is no per-file public flag, because new S3 buckets have object ACLs disabled, and a flag on one file is easy to get wrong.`),cf(),Aa(1150,`li`)(1151,`strong`),bT(1152,`Expire abandoned uploads.`),cf(),bT(1153,` Add a lifecycle rule to the private bucket that deletes objects under `),Aa(1154,`code`),bT(1155,`incoming/`),cf(),bT(1156,` after a day, and one that aborts incomplete multipart uploads after a day.`),cf(),Aa(1157,`li`)(1158,`strong`),bT(1159,`Allow direct uploads from browsers with CORS.`),cf(),bT(1160,` The mobile app doesn't need it, but a web page that sends a `),Aa(1161,`code`),bT(1162,`PUT`),cf(),bT(1163,` to a presigned URL does: allow `),Aa(1164,`code`),bT(1165,`PUT`),cf(),bT(1166,` from your site's origin, with the `),Aa(1167,`code`),bT(1168,`Content-Type`),cf(),bT(1169,` header.`),cf(),Aa(1170,`li`)(1171,`strong`),bT(1172,`Grant the app only what it uses.`),cf(),bT(1173,` An IAM policy with `),Aa(1174,`code`),bT(1175,`s3:GetObject`),cf(),bT(1176,`, `),Aa(1177,`code`),bT(1178,`s3:PutObject`),cf(),bT(1179,`, `),Aa(1180,`code`),bT(1181,`s3:DeleteObject`),cf(),bT(1182,` and `),Aa(1183,`code`),bT(1184,`s3:ListBucket`),cf(),bT(1185,` on the two buckets is enough. Keep `),Aa(1186,`code`),bT(1187,`s3:ListBucket`),cf(),bT(1188,`: without it, S3 answers a request for a missing file with `),Aa(1189,`code`),bT(1190,`403`),cf(),bT(1191,` instead of `),Aa(1192,`code`),bT(1193,`404`),cf(),bT(1194,`, and `),Aa(1195,`code`),bT(1196,`exists()`),cf(),bT(1197,` fails instead of returning `),Aa(1198,`code`),bT(1199,`false`),cf(),bT(1200,`. For short-lived credentials, pass a `),Aa(1201,`code`),bT(1202,`credentials`),cf(),bT(1203,` function that returns them.`),cf(),Aa(1204,`li`)(1205,`strong`),bT(1206,`Encrypt at rest.`),cf(),bT(1207,` S3 encrypts new objects by default; for a KMS key of your own, set `),Aa(1208,`code`),bT(1209,`serverSideEncryption: 'aws:kms'`),cf(),bT(1210,` and `),Aa(1211,`code`),bT(1212,`kmsKeyId`),cf(),bT(1213,` on the disk. R2 always encrypts.`),cf(),Aa(1214,`li`)(1215,`strong`),bT(1216,`Keep links short-lived.`),cf(),bT(1217,` Five minutes is plenty for a link a user clicks right away. A signed URL can't be revoked: it stays valid until it expires (or, on S3, until the credentials that signed it expire or lose access), so whoever it leaks to can use it until then.`),cf(),Aa(1218,`li`)(1219,`strong`),bT(1220,`Set a signing key per environment`),cf(),bT(1221,` for local disks (development and CI), from a secret, with at least 32 characters, and rotate it by putting the new key first in `),Aa(1222,`code`),bT(1223,`keys`),cf(),bT(1224,`.`),cf(),Aa(1225,`li`)(1226,`strong`),bT(1227,`Don't use a local disk in production.`),cf(),bT(1228,` Files written to a container's disk vanish when the task is replaced, and other instances can't read them. Use S3, R2 or another object store (see `),Aa(1229,`a`,28),bT(1230,`Use S3 or R2 in production`),cf(),bT(1231,`); local disks are for development and tests, and the module logs a warning at startup when it finds one with `),Aa(1232,`code`),bT(1233,`NODE_ENV=production`),cf(),bT(1234,`.`),cf(),Aa(1235,`li`)(1236,`strong`),bT(1237,`Treat every key built from user input with care.`),cf(),bT(1238,` Keys are validated on every disk (no `),Aa(1239,`code`),bT(1240,`..`),cf(),bT(1241,`, no absolute paths, no control characters), so user input can't escape a disk, but it can still name any file on it. Build keys from ids you control, as the upload endpoints above do.`),cf()(),Aa(1242,`h4`,49)(1243,`span`),bT(1244,`Reference`),cf()(),Aa(1245,`h5`,50)(1246,`span`),bT(1247,`Module options`),cf()(),Aa(1248,`p`)(1249,`code`),bT(1250,`StorageModule.forRoot()`),cf(),bT(1251,` takes these options, and a `),Aa(1252,`code`),bT(1253,`forRootAsync()`),cf(),bT(1254,` factory returns `),Aa(1255,`code`),bT(1256,`default`),cf(),bT(1257,` and disk instances. Disk classes, `),Aa(1258,`code`),bT(1259,`imports`),cf(),bT(1260,` and `),Aa(1261,`code`),bT(1262,`isGlobal`),cf(),bT(1263,` sit next to `),Aa(1264,`code`),bT(1265,`useFactory`),cf(),bT(1266,`, `),Aa(1267,`code`),bT(1268,`useClass`),cf(),bT(1269,` or `),Aa(1270,`code`),bT(1271,`useExisting`),cf(),bT(1272,`. The options are provided as `),Aa(1273,`code`),bT(1274,`STORAGE_MODULE_OPTIONS`),cf(),bT(1275,`.`),cf(),Aa(1276,`table`)(1277,`thead`)(1278,`tr`)(1279,`th`),bT(1280,`Option`),cf(),Aa(1281,`th`),bT(1282,`Default`),cf(),Aa(1283,`th`),bT(1284,`Description`),cf()()(),Aa(1285,`tbody`)(1286,`tr`)(1287,`td`)(1288,`code`),bT(1289,`disks`),cf()(),Aa(1290,`td`),bT(1291,`none (required)`),cf(),Aa(1292,`td`),bT(1293,`Disks by name: instances, or `),Aa(1294,`code`),bT(1295,`StorageDisk`),cf(),bT(1296,` classes that Nest instantiates, which can inject. See `),Aa(1297,`a`,51),bT(1298,`Configure the disks`),cf(),bT(1299,`.`),cf()(),Aa(1300,`tr`)(1301,`td`)(1302,`code`),bT(1303,`default`),cf()(),Aa(1304,`td`),bT(1305,`the only disk`),cf(),Aa(1306,`td`),bT(1307,`The disk that `),Aa(1308,`code`),bT(1309,`StorageDisk`),cf(),bT(1310,` and `),Aa(1311,`code`),bT(1312,`storage.disk()`),cf(),bT(1313,` resolve to. Required with more than one disk.`),cf()(),Aa(1314,`tr`)(1315,`td`)(1316,`code`),bT(1317,`imports`),cf()(),Aa(1318,`td`),bT(1319,`none`),cf(),Aa(1320,`td`),bT(1321,`Modules whose exports the disk classes inject.`),cf()(),Aa(1322,`tr`)(1323,`td`)(1324,`code`),bT(1325,`isGlobal`),cf()(),Aa(1326,`td`)(1327,`code`),bT(1328,`true`),cf()(),Aa(1329,`td`),bT(1330,`Registers `),Aa(1331,`code`),bT(1332,`Storage`),cf(),bT(1333,`, `),Aa(1334,`code`),bT(1335,`StorageDisk`),cf(),bT(1336,` and the named disks globally.`),cf()()()(),Aa(1337,`h5`,52)(1338,`span`),bT(1339,`Disk methods`),cf()(),Aa(1340,`p`),bT(1341,`Every disk has the same methods, key rules and errors. A key is a relative, `),Aa(1342,`code`),bT(1343,`/`),cf(),bT(1344,`-separated path of at most 1024 UTF-8 bytes, without empty, `),Aa(1345,`code`),bT(1346,`.`),cf(),bT(1347,` or `),Aa(1348,`code`),bT(1349,`..`),cf(),bT(1350,` segments, backslashes or control characters.`),cf(),Aa(1351,`table`)(1352,`thead`)(1353,`tr`)(1354,`th`),bT(1355,`Method`),cf(),Aa(1356,`th`),bT(1357,`Description`),cf()()(),Aa(1358,`tbody`)(1359,`tr`)(1360,`td`)(1361,`code`),bT(1362,`put(key, body, options)`),cf()(),Aa(1363,`td`),bT(1364,`Writes a file atomically. Options: `),Aa(1365,`code`),bT(1366,`contentType`),cf(),bT(1367,` (inferred from the extension by default), `),Aa(1368,`code`),bT(1369,`cacheControl`),cf(),bT(1370,`, `),Aa(1371,`code`),bT(1372,`contentDisposition`),cf(),bT(1373,`, `),Aa(1374,`code`),bT(1375,`metadata`),cf(),bT(1376,` (string values, 2 KB in total), `),Aa(1377,`code`),bT(1378,`contentLength`),cf(),bT(1379,`, `),Aa(1380,`code`),bT(1381,`signal`),cf(),bT(1382,`. Resolves to `),Aa(1383,`code`),bT(1384,`key`),cf(),bT(1385,`, `),Aa(1386,`code`),bT(1387,`size`),cf(),bT(1388,`, `),Aa(1389,`code`),bT(1390,`contentType`),cf(),bT(1391,` and `),Aa(1392,`code`),bT(1393,`etag`),cf(),bT(1394,`.`),cf()(),Aa(1395,`tr`)(1396,`td`)(1397,`code`),bT(1398,`get(key, options)`),cf()(),Aa(1399,`td`),bT(1400,`The file's metadata and its `),Aa(1401,`code`),bT(1402,`body`),cf(),bT(1403,` as a Node stream. `),Aa(1404,`code`),bT(1405,`range`),cf(),bT(1406,` takes `),Aa(1407,`code`),bT(1408,`start`),cf(),bT(1409,` and an inclusive `),Aa(1410,`code`),bT(1411,`end`),cf(),bT(1412,`, or `),Aa(1413,`code`),bT(1414,`suffix`),cf(),bT(1415,`.`),cf()(),Aa(1416,`tr`)(1417,`td`)(1418,`code`),bT(1419,`getBuffer(key)`),cf(),bT(1420,`, `),Aa(1421,`code`),bT(1422,`getText(key)`),cf()(),Aa(1423,`td`),bT(1424,`The whole file.`),cf()(),Aa(1425,`tr`)(1426,`td`)(1427,`code`),bT(1428,`stat(key)`),cf(),bT(1429,`, `),Aa(1430,`code`),bT(1431,`exists(key)`),cf()(),Aa(1432,`td`),bT(1433,`The metadata without the body, or whether the file exists.`),cf()(),Aa(1434,`tr`)(1435,`td`)(1436,`code`),bT(1437,`delete(keys)`),cf()(),Aa(1438,`td`),bT(1439,`One key or an array. Missing keys are ignored.`),cf()(),Aa(1440,`tr`)(1441,`td`)(1442,`code`),bT(1443,`list(options)`),cf(),bT(1444,`, `),Aa(1445,`code`),bT(1446,`listAll(options)`),cf()(),Aa(1447,`td`),bT(1448,`A page of `),Aa(1449,`code`),bT(1450,`key`),cf(),bT(1451,`, `),Aa(1452,`code`),bT(1453,`size`),cf(),bT(1454,`, `),Aa(1455,`code`),bT(1456,`lastModified`),cf(),bT(1457,` and `),Aa(1458,`code`),bT(1459,`etag`),cf(),bT(1460,` in UTF-8 byte order, with a `),Aa(1461,`code`),bT(1462,`cursor`),cf(),bT(1463,`. Options: `),Aa(1464,`code`),bT(1465,`prefix`),cf(),bT(1466,`, `),Aa(1467,`code`),bT(1468,`cursor`),cf(),bT(1469,`, `),Aa(1470,`code`),bT(1471,`limit`),cf(),bT(1472,` (up to 1000, the default). `),Aa(1473,`code`),bT(1474,`listAll()`),cf(),bT(1475,` iterates every page.`),cf()(),Aa(1476,`tr`)(1477,`td`)(1478,`code`),bT(1479,`copy(from, to)`),cf(),bT(1480,`, `),Aa(1481,`code`),bT(1482,`move(from, to)`),cf()(),Aa(1483,`td`),bT(1484,`Within the disk, metadata included.`),cf()(),Aa(1485,`tr`)(1486,`td`)(1487,`code`),bT(1488,`url(key)`),cf()(),Aa(1489,`td`),bT(1490,`The public URL under `),Aa(1491,`code`),bT(1492,`publicUrl`),cf(),bT(1493,`. Throws without one.`),cf()(),Aa(1494,`tr`)(1495,`td`)(1496,`code`),bT(1497,`signedUrl(key, options)`),cf()(),Aa(1498,`td`),bT(1499,`A download link. Options: `),Aa(1500,`code`),bT(1501,`expiresIn`),cf(),bT(1502,` (default 15 minutes, at most 7 days), `),Aa(1503,`code`),bT(1504,`filename`),cf(),bT(1505,`, `),Aa(1506,`code`),bT(1507,`disposition`),cf(),bT(1508,`. See `),Aa(1509,`a`,53),bT(1510,`Keep invoices private`),cf(),bT(1511,`.`),cf()(),Aa(1512,`tr`)(1513,`td`)(1514,`code`),bT(1515,`signedUpload(key, options)`),cf()(),Aa(1516,`td`)(1517,`code`),bT(1518,`url`),cf(),bT(1519,`, `),Aa(1520,`code`),bT(1521,`method`),cf(),bT(1522,` (`),Aa(1523,`code`),bT(1524,`PUT`),cf(),bT(1525,`), `),Aa(1526,`code`),bT(1527,`headers`),cf(),bT(1528,` and `),Aa(1529,`code`),bT(1530,`expiresAt`),cf(),bT(1531,` for a direct upload. Options: `),Aa(1532,`code`),bT(1533,`contentType`),cf(),bT(1534,` (required), `),Aa(1535,`code`),bT(1536,`contentLength`),cf(),bT(1537,`, `),Aa(1538,`code`),bT(1539,`expiresIn`),cf(),bT(1540,`. See `),Aa(1541,`a`,36),bT(1542,`Upload straight to storage from the mobile app`),cf(),bT(1543,`.`),cf()()()(),Aa(1544,`h5`,54)(1545,`span`),bT(1546,`Disks`),cf()(),Aa(1547,`table`)(1548,`thead`)(1549,`tr`)(1550,`th`),bT(1551,`Disk`),cf(),Aa(1552,`th`),bT(1553,`Options`),cf()()(),Aa(1554,`tbody`)(1555,`tr`)(1556,`td`)(1557,`code`),bT(1558,`LocalDisk`),cf()(),Aa(1559,`td`)(1560,`code`),bT(1561,`root`),cf(),bT(1562,` (required, created at startup), `),Aa(1563,`code`),bT(1564,`publicUrl`),cf(),bT(1565,`, `),Aa(1566,`code`),bT(1567,`signedUrls`),cf(),bT(1568,`. For development and tests. `),Aa(1569,`code`),bT(1570,`path(key)`),cf(),bT(1571,` returns a file's absolute path.`),cf()(),Aa(1572,`tr`)(1573,`td`)(1574,`code`),bT(1575,`S3Disk`),cf()(),Aa(1576,`td`)(1577,`code`),bT(1578,`bucket`),cf(),bT(1579,` (required), `),Aa(1580,`code`),bT(1581,`region`),cf(),bT(1582,`, `),Aa(1583,`code`),bT(1584,`endpoint`),cf(),bT(1585,`, `),Aa(1586,`code`),bT(1587,`forcePathStyle`),cf(),bT(1588,`, `),Aa(1589,`code`),bT(1590,`credentials`),cf(),bT(1591,`, `),Aa(1592,`code`),bT(1593,`prefix`),cf(),bT(1594,`, `),Aa(1595,`code`),bT(1596,`serverSideEncryption`),cf(),bT(1597,`, `),Aa(1598,`code`),bT(1599,`kmsKeyId`),cf(),bT(1600,`, `),Aa(1601,`code`),bT(1602,`multipart`),cf(),bT(1603,`, `),Aa(1604,`code`),bT(1605,`retry`),cf(),bT(1606,`, `),Aa(1607,`code`),bT(1608,`timeout`),cf(),bT(1609,`, `),Aa(1610,`code`),bT(1611,`batchDelete`),cf(),bT(1612,`, `),Aa(1613,`code`),bT(1614,`fetch`),cf(),bT(1615,`, `),Aa(1616,`code`),bT(1617,`publicUrl`),cf(),bT(1618,`. See `),Aa(1619,`a`,28),bT(1620,`Use S3 or R2 in production`),cf(),bT(1621,`.`),cf()(),Aa(1622,`tr`)(1623,`td`)(1624,`code`),bT(1625,`InMemoryDisk`),cf()(),Aa(1626,`td`)(1627,`code`),bT(1628,`publicUrl`),cf(),bT(1629,`, `),Aa(1630,`code`),bT(1631,`signedUrls`),cf(),bT(1632,`. For tests, with `),Aa(1633,`code`),bT(1634,`keys()`),cf(),bT(1635,` and `),Aa(1636,`code`),bT(1637,`clear()`),cf(),bT(1638,`. See `),Aa(1639,`a`,55),bT(1640,`Testing`),cf(),bT(1641,`.`),cf()()()(),Aa(1642,`p`)(1643,`code`),bT(1644,`signedUrls`),cf(),bT(1645,` takes `),Aa(1646,`code`),bT(1647,`baseUrl`),cf(),bT(1648,`, the route that serves the URLs, and `),Aa(1649,`code`),bT(1650,`keys`),cf(),bT(1651,`, signing keys of at least 32 characters. The first key signs, and all of them verify. `),Aa(1652,`code`),bT(1653,`S3Disk`),cf(),bT(1654,` defaults: `),Aa(1655,`code`),bT(1656,`region`),cf(),bT(1657,` from `),Aa(1658,`code`),bT(1659,`AWS_REGION`),cf(),bT(1660,`, then `),Aa(1661,`code`),bT(1662,`AWS_DEFAULT_REGION`),cf(),bT(1663,`, then `),Aa(1664,`code`),bT(1665,`us-east-1`),cf(),bT(1666,`; credentials from `),Aa(1667,`code`),bT(1668,`AWS_ACCESS_KEY_ID`),cf(),bT(1669,`, `),Aa(1670,`code`),bT(1671,`AWS_SECRET_ACCESS_KEY`),cf(),bT(1672,` and `),Aa(1673,`code`),bT(1674,`AWS_SESSION_TOKEN`),cf(),bT(1675,`; `),Aa(1676,`code`),bT(1677,`multipart`),cf(),bT(1678,` with a `),Aa(1679,`code`),bT(1680,`partSize`),cf(),bT(1681,` of 8 MiB and a `),Aa(1682,`code`),bT(1683,`concurrency`),cf(),bT(1684,` of 4; `),Aa(1685,`code`),bT(1686,`retry: 3`),cf(),bT(1687,`, with backoff from 100 ms doubling to 20 seconds; no `),Aa(1688,`code`),bT(1689,`timeout`),cf(),bT(1690,`; `),Aa(1691,`code`),bT(1692,`batchDelete: true`),cf(),bT(1693,`.`),cf(),Aa(1694,`h5`,56)(1695,`span`),bT(1696,`HTTP helpers`),cf()(),Aa(1697,`table`)(1698,`thead`)(1699,`tr`)(1700,`th`),bT(1701,`Helper`),cf(),Aa(1702,`th`),bT(1703,`Options`),cf(),Aa(1704,`th`),bT(1705,`Description`),cf()()(),Aa(1706,`tbody`)(1707,`tr`)(1708,`td`)(1709,`code`),bT(1710,`uploadToDisk(options)`),cf()(),Aa(1711,`td`)(1712,`code`),bT(1713,`disk`),cf(),bT(1714,` (a name or an instance, default the default disk), `),Aa(1715,`code`),bT(1716,`contentTypes`),cf(),bT(1717,`, `),Aa(1718,`code`),bT(1719,`detectContentType`),cf(),bT(1720,`, `),Aa(1721,`code`),bT(1722,`contentTypeSampleBytes`),cf(),bT(1723,` (default 4 KiB, from 1 byte to 64 KiB, requires `),Aa(1724,`code`),bT(1725,`detectContentType`),cf(),bT(1726,`), `),Aa(1727,`code`),bT(1728,`cacheControl`),cf(),bT(1729,`, `),Aa(1730,`code`),bT(1731,`key`),cf(),bT(1732,`, `),Aa(1733,`code`),bT(1734,`metadata`),cf()(),Aa(1735,`td`),bT(1736,`A storage engine for `),Aa(1737,`code`),bT(1738,`FileInterceptor()`),cf(),bT(1739,`. `),Aa(1740,`code`),bT(1741,`key`),cf(),bT(1742,` and `),Aa(1743,`code`),bT(1744,`metadata`),cf(),bT(1745,` are functions of the file and the request. `),Aa(1746,`code`),bT(1747,`detectContentType(bytes, file)`),cf(),bT(1748,` returns the type of a file the built-in detection doesn't recognize, or `),Aa(1749,`code`),bT(1750,`undefined`),cf(),bT(1751,`, and may return a promise. See `),Aa(1752,`a`,32),bT(1753,`Upload product photos`),cf(),bT(1754,` and `),Aa(1755,`a`,37),bT(1756,`Accept CSV and other text formats`),cf(),bT(1757,`.`),cf()(),Aa(1758,`tr`)(1759,`td`)(1760,`code`),bT(1761,`serveFile(disk, key, options)`),cf()(),Aa(1762,`td`)(1763,`code`),bT(1764,`res`),cf(),bT(1765,` (required), `),Aa(1766,`code`),bT(1767,`req`),cf(),bT(1768,`, `),Aa(1769,`code`),bT(1770,`disposition`),cf(),bT(1771,` (default `),Aa(1772,`code`),bT(1773,`attachment`),cf(),bT(1774,`), `),Aa(1775,`code`),bT(1776,`filename`),cf(),bT(1777,`, `),Aa(1778,`code`),bT(1779,`cacheControl`),cf()(),Aa(1780,`td`),bT(1781,`Streams a file as the response, with `),Aa(1782,`code`),bT(1783,`Range`),cf(),bT(1784,` and `),Aa(1785,`code`),bT(1786,`If-None-Match`),cf(),bT(1787,` support when given `),Aa(1788,`code`),bT(1789,`req`),cf(),bT(1790,`.`),cf()(),Aa(1791,`tr`)(1792,`td`)(1793,`code`),bT(1794,`serveSignedUrl(disk, options)`),cf()(),Aa(1795,`td`)(1796,`code`),bT(1797,`req`),cf(),bT(1798,`, `),Aa(1799,`code`),bT(1800,`res`),cf(),bT(1801,`, `),Aa(1802,`code`),bT(1803,`cacheControl`),cf()(),Aa(1804,`td`),bT(1805,`Verifies and serves an app-served signed download URL. See `),Aa(1806,`a`,33),bT(1807,`Serve signed URLs in development`),cf(),bT(1808,`.`),cf()(),Aa(1809,`tr`)(1810,`td`)(1811,`code`),bT(1812,`receiveSignedUpload(disk, options)`),cf()(),Aa(1813,`td`)(1814,`code`),bT(1815,`req`),cf(),bT(1816,`, `),Aa(1817,`code`),bT(1818,`res`),cf(),bT(1819,`, `),Aa(1820,`code`),bT(1821,`maxSize`),cf()(),Aa(1822,`td`),bT(1823,`Verifies an app-served signed upload URL and streams the `),Aa(1824,`code`),bT(1825,`PUT`),cf(),bT(1826,` body onto the disk. `),Aa(1827,`code`),bT(1828,`maxSize`),cf(),bT(1829,` limits uploads signed without a `),Aa(1830,`code`),bT(1831,`contentLength`),cf(),bT(1832,`.`),cf()(),Aa(1833,`tr`)(1834,`td`)(1835,`code`),bT(1836,`detectContentType(bytes)`),cf()(),Aa(1837,`td`),bT(1838,`none`),cf(),Aa(1839,`td`),bT(1840,`The type of a file from its first 16 bytes: JPEG, PNG, GIF, WebP, AVIF, HEIC or PDF, else `),Aa(1841,`code`),bT(1842,`undefined`),cf(),bT(1843,`. It's the built-in detection `),Aa(1844,`code`),bT(1845,`uploadToDisk()`),cf(),bT(1846,` runs, and knows nothing of the `),Aa(1847,`code`),bT(1848,`detectContentType`),cf(),bT(1849,` option.`),cf()()()(),Aa(1850,`h5`,57)(1851,`span`),bT(1852,`Errors`),cf()(),Aa(1853,`p`),bT(1854,`Every error extends `),Aa(1855,`code`),bT(1856,`StorageError`),cf(),bT(1857,`. Outside the HTTP helpers, they aren't `),Aa(1858,`code`),bT(1859,`HttpException`),cf(),bT(1860,`s, so map them in your own code where they mean something to your API.`),cf(),Aa(1861,`table`)(1862,`thead`)(1863,`tr`)(1864,`th`),bT(1865,`Error`),cf(),Aa(1866,`th`)(1867,`code`),bT(1868,`status`),cf()(),Aa(1869,`th`),bT(1870,`When`),cf()()(),Aa(1871,`tbody`)(1872,`tr`)(1873,`td`)(1874,`code`),bT(1875,`StorageFileNotFoundError`),cf()(),Aa(1876,`td`),bT(1877,`404`),cf(),Aa(1878,`td`)(1879,`code`),bT(1880,`get()`),cf(),bT(1881,`, `),Aa(1882,`code`),bT(1883,`stat()`),cf(),bT(1884,`, `),Aa(1885,`code`),bT(1886,`copy()`),cf(),bT(1887,` or `),Aa(1888,`code`),bT(1889,`move()`),cf(),bT(1890,` of a missing key. Has `),Aa(1891,`code`),bT(1892,`key`),cf(),bT(1893,`.`),cf()(),Aa(1894,`tr`)(1895,`td`)(1896,`code`),bT(1897,`StorageInvalidKeyError`),cf()(),Aa(1898,`td`),bT(1899,`400`),cf(),Aa(1900,`td`),bT(1901,`A key that breaks the key rules. Has `),Aa(1902,`code`),bT(1903,`reason`),cf(),bT(1904,`.`),cf()(),Aa(1905,`tr`)(1906,`td`)(1907,`code`),bT(1908,`StorageBodyLengthError`),cf()(),Aa(1909,`td`),bT(1910,`400`),cf(),Aa(1911,`td`),bT(1912,`The body didn't match `),Aa(1913,`code`),bT(1914,`contentLength`),cf(),bT(1915,`. Has `),Aa(1916,`code`),bT(1917,`expected`),cf(),bT(1918,` and `),Aa(1919,`code`),bT(1920,`received`),cf(),bT(1921,`.`),cf()(),Aa(1922,`tr`)(1923,`td`)(1924,`code`),bT(1925,`StorageRangeNotSatisfiableError`),cf()(),Aa(1926,`td`),bT(1927,`416`),cf(),Aa(1928,`td`),bT(1929,`A range that starts past the end of the file. Has `),Aa(1930,`code`),bT(1931,`size`),cf(),bT(1932,`.`),cf()(),Aa(1933,`tr`)(1934,`td`)(1935,`code`),bT(1936,`StorageKeyConflictError`),cf()(),Aa(1937,`td`),bT(1938,`409`),cf(),Aa(1939,`td`),bT(1940,`A local disk can't hold both `),Aa(1941,`code`),bT(1942,`a`),cf(),bT(1943,` and `),Aa(1944,`code`),bT(1945,`a/b`),cf(),bT(1946,`.`),cf()(),Aa(1947,`tr`)(1948,`td`)(1949,`code`),bT(1950,`StorageSignedUrlError`),cf()(),Aa(1951,`td`),bT(1952,`403`),cf(),Aa(1953,`td`),bT(1954,`A signed URL failed verification. `),Aa(1955,`code`),bT(1956,`reason`),cf(),bT(1957,` is `),Aa(1958,`code`),bT(1959,`missing`),cf(),bT(1960,`, `),Aa(1961,`code`),bT(1962,`invalid`),cf(),bT(1963,`, `),Aa(1964,`code`),bT(1965,`expired`),cf(),bT(1966,` or `),Aa(1967,`code`),bT(1968,`method`),cf(),bT(1969,`.`),cf()(),Aa(1970,`tr`)(1971,`td`)(1972,`code`),bT(1973,`StorageServiceError`),cf()(),Aa(1974,`td`),bT(1975,`none`),cf(),Aa(1976,`td`),bT(1977,`The object store refused or failed. Has `),Aa(1978,`code`),bT(1979,`code`),cf(),bT(1980,` (such as `),Aa(1981,`code`),bT(1982,`AccessDenied`),cf(),bT(1983,` or `),Aa(1984,`code`),bT(1985,`SlowDown`),cf(),bT(1986,`), `),Aa(1987,`code`),bT(1988,`upstreamStatus`),cf(),bT(1989,`, `),Aa(1990,`code`),bT(1991,`requestId`),cf(),bT(1992,` and `),Aa(1993,`code`),bT(1994,`operation`),cf(),bT(1995,`.`),cf()()()()(),Aa(1996,`a`,58),Wa(1997,`i`,59),Aa(1998,`span`),bT(1999,`Edit on GitHub`),cf()()()),c&2){let y=tT(102),k=tT(113),T=tT(161),j=tT(229),A=tT(252),I=tT(375),C=tT(386),R=tT(464),L=tT(492),q=tT(509),B=tT(619),M=tT(639),P=tT(699),F=tT(733),D=tT(769),N=tT(810),U=tT(872),z=tT(892),J=tT(921),G=tT(1116);zC(99),hf(` `,jT(100,20,`config/configuration`,y.isJsActive),`
`),zC(11),hf(` `,jT(111,23,`storage/storage.config`,k.isJsActive),`
`),zC(48),hf(` `,jT(159,26,`app.module`,T.isJsActive),`
`),zC(68),hf(` `,jT(227,29,`products/photo-rules`,j.isJsActive),`
`),zC(23),hf(` `,jT(250,32,`products/photos.controller`,A.isJsActive),`
`),zC(123),hf(` `,jT(373,35,`products/product`,I.isJsActive),`
`),zC(11),hf(` `,jT(384,38,`products/photos.service`,C.isJsActive),`
`),zC(78),hf(` `,jT(462,41,`products/products.module`,R.isJsActive),`
`),zC(28),hf(` `,jT(490,44,`products/price-list`,L.isJsActive),`
`),zC(17),hf(` `,jT(507,47,`products/price-lists.controller`,q.isJsActive),`
`),zC(110),hf(` `,jT(617,50,`invoices/render-invoice`,B.isJsActive),`
`),zC(20),hf(` `,jT(637,53,`invoices/invoices.service`,M.isJsActive),`
`),zC(60),hf(` `,jT(697,56,`orders/orders.controller`,P.isJsActive),`
`),zC(34),hf(` `,jT(731,59,`files/files.controller`,F.isJsActive),`
`),zC(36),hf(` `,jT(767,62,`app.module`,D.isJsActive),`
`),zC(41),hf(` `,jT(808,65,`products/photos.service`,N.isJsActive),`
`),zC(62),hf(` `,jT(870,68,`products/photos.controller`,U.isJsActive),`
`),zC(20),hf(` `,jT(890,71,`files/files.controller`,z.isJsActive),`
`),zC(29),hf(` `,jT(919,74,`storage/storage.config`,J.isJsActive),`
`),zC(195),hf(` `,jT(1114,77,`test/photos.e2e-spec`,G.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return d})();var ue=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-http-client`]],features:[xy],decls:1850,vars:68,consts:[[`contentReference`,``],[`app8728b01acf7b8856eaadfe8afb45e0330ae085fb`,``],[`app3b2319e3e2fb210aa41ffc61a377ad9614962e00`,``],[`app5c1489dbcf105bc58ff69c5751386fb0fdec229f`,``],[`appa19283c80f4e1228001ec3ced536f22a35ec3d75`,``],[`app03e652c06bf3e755116788ddcea59f833ed8b403`,``],[`appad38c7735075549bf8fac1ed1ce68651356153c7`,``],[`app89850a8ee22cf624a51f242f099f0aba8bcb7205`,``],[`app763e32cece88bf41f900fedfb26d71bd9df69c0b`,``],[`appa3e20199475b29514281bf4363fd30b8242c0b1b`,``],[`appf7701fd72bd2d7a2de23198db18c78b128df6192`,``],[`app929fa451d44d1a37a14934dc8d3099ed24a19af3`,``],[`app35017fb44ad5960f305e1b029aeb9b5a8d5945f7`,``],[`app5032bc1e538f2a2bc955ecc2fe5e3ba7fc7132e1`,``],[`appa3424b1471c8e92c7253c1c7b2172c6e6a01d121`,``],[`app06264af3f420129fa7bb701c83bd37e919c25d78`,``],[`app867939fc711c669af1d11e2270a17d868a60f8ab`,``],[`app030300a5f1f46faf1fb4d148637c9c6839a43683`,``],[1,`content`],[1,`content-inner`],[`id`,`http-client`],[`href`,`/application/http-client#working-with-rxjs`],[1,`info`],[`href`,`/application/http-client#migrating-from-nestjsaxios`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`getting-started`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`named-clients`],[`appAnchor`,``,`id`,`application-wide-defaults`],[`appAnchor`,``,`id`,`async-configuration`],[`href`,`/application/configuration#getting-started`],[`appAnchor`,``,`id`,`making-requests`],[`href`,`/application/http-client#interceptors`],[`href`,`/application/http-client#streaming-responses`],[`appAnchor`,``,`id`,`timeouts-and-cancellation`],[`href`,`/application/http-client#retries`],[`appAnchor`,``,`id`,`retries`],[1,`warning`],[`appAnchor`,``,`id`,`handling-errors`],[`href`,`/exception-filters#exceptions-logging`],[1,`language-text`],[`href`,`/exception-filters#binding-filters`],[`appAnchor`,``,`id`,`interceptors`],[`href`,`/observability/distributed-tracing#http-to-http`],[`appAnchor`,``,`id`,`streaming-responses`],[`href`,`/http/file-upload#streaming-files`],[`appAnchor`,``,`id`,`proxies-tls-and-redirects`],[`href`,`/application/http-client#security`],[`appAnchor`,``,`id`,`security`],[`href`,`/application/http-client#handling-errors`],[`appAnchor`,``,`id`,`testing`],[`appAnchor`,``,`id`,`working-with-rxjs`],[`appAnchor`,``,`id`,`migrating-from-nestjsaxios`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/http-client.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,18,0)(2,`div`,19)(3,`h3`,20),bT(4,`HTTP client`),cf(),Aa(5,`p`),bT(6,`Most applications call other services over HTTP. The `),Aa(7,`code`),bT(8,`@nestjs/http-client`),cf(),bT(9,` package provides a client for this, built on the `),Aa(10,`code`),bT(11,`fetch`),cf(),bT(12,` API that ships with Node.js. It adds what `),Aa(13,`code`),bT(14,`fetch`),cf(),bT(15,` leaves out: base URLs, default headers, JSON bodies, path and query parameters, typed responses, timeouts, retries, interceptors, and named clients. You configure it as a Nest module and inject it like any other provider.`),cf(),Aa(16,`p`),bT(17,`The package has no dependencies besides `),Aa(18,`code`),bT(19,`@nestjs/common`),cf(),bT(20,` and `),Aa(21,`code`),bT(22,`@nestjs/core`),cf(),bT(23,`. Every method returns a Promise, so you `),Aa(24,`code`),bT(25,`await`),cf(),bT(26,` requests and handle failures with `),Aa(27,`code`),bT(28,`try`),cf(),bT(29,`/`),Aa(30,`code`),bT(31,`catch`),cf(),bT(32,`. If you prefer Observables, see `),Aa(33,`a`,21),bT(34,`Working with RxJS`),cf(),bT(35,`.`),cf(),Aa(36,`blockquote`,22)(37,`strong`),bT(38,`Hint`),cf(),bT(39,` This package replaces the Axios-based `),Aa(40,`code`),bT(41,`HttpModule`),cf(),bT(42,` from `),Aa(43,`code`),bT(44,`@nestjs/axios`),cf(),bT(45,`, which this chapter used to describe. `),Aa(46,`code`),bT(47,`@nestjs/axios`),cf(),bT(48,` remains available. See `),Aa(49,`a`,23),bT(50,`Migrating from @nestjs/axios`),cf(),bT(51,` to switch.
`),cf(),Aa(52,`h4`,24)(53,`span`),bT(54,`Installation`),cf()(),Aa(55,`p`),bT(56,`To get started, install the package:`),cf(),Aa(57,`pre`)(58,`code`,25),bT(59,`
$ npm i --save @nestjs/http-client
`),cf()(),Aa(60,`h4`,26)(61,`span`),bT(62,`Getting started`),cf()(),Aa(63,`p`),bT(64,`Import `),Aa(65,`code`),bT(66,`HttpClientModule`),cf(),bT(67,` into the module that makes the requests, and register a client with the `),Aa(68,`code`),bT(69,`register()`),cf(),bT(70,` method:`),cf(),Aa(71,`app-copy-button`,27)(72,`span`,28),bT(73),LT(74,`extension`),Wa(75,`app-tabs`,null,1),cf(),Aa(77,`pre`)(78,`code`,29),bT(79,`
import { Module } from '@nestjs/common';
import { HttpClientModule } from '@nestjs/http-client';
import { CatsService } from './cats.service.js';

@Module({
  imports: [
    HttpClientModule.register({
      baseUrl: 'https://api.example.com/v1',
      timeout: '5s',
    }),
  ],
  providers: [CatsService],
})
export class CatsModule {}
`),cf()()(),Aa(80,`p`),bT(81,`Then inject the `),Aa(82,`code`),bT(83,`HttpClient`),cf(),bT(84,` class:`),cf(),Aa(85,`app-copy-button`,27)(86,`span`,28),bT(87),LT(88,`extension`),Wa(89,`app-tabs`,null,2),cf(),Aa(91,`pre`)(92,`code`,29),bT(93,`
import { Injectable } from '@nestjs/common';
import { HttpClient } from '@nestjs/http-client';
import type { Cat } from './interfaces/cat.interface.js';

@Injectable()
export class CatsService {
  constructor(private readonly http: HttpClient) {}

  async findAll(): Promise<Cat[]> {
    const { data } = await this.http.get<Cat[]>('/cats');
    return data;
  }
}
`),cf()()(),Aa(94,`p`),bT(95,`The request goes to `),Aa(96,`code`),bT(97,`https://api.example.com/v1/cats`),cf(),bT(98,`. A relative URL is appended to `),Aa(99,`code`),bT(100,`baseUrl`),cf(),bT(101,` with exactly one `),Aa(102,`code`),bT(103,`/`),cf(),bT(104,` between them, so the `),Aa(105,`code`),bT(106,`/v1`),cf(),bT(107,` prefix is kept (unlike `),Aa(108,`code`),bT(109,`new URL('/cats', base)`),cf(),bT(110,`, which would drop it). A client without a `),Aa(111,`code`),bT(112,`baseUrl`),cf(),bT(113,` requires absolute URLs.`),cf(),Aa(114,`p`),bT(115,`Like other `),Aa(116,`code`),bT(117,`register()`),cf(),bT(118,` methods, each call creates a client for the module that imports it. To make a client injectable in every module, set `),Aa(119,`code`),bT(120,`isGlobal: true`),cf(),bT(121,`.`),cf(),Aa(122,`h4`,30)(123,`span`),bT(124,`Named clients`),cf()(),Aa(125,`p`),bT(126,`An application usually talks to several upstream services, each with its own base URL, credentials, and timeouts. Give each client a `),Aa(127,`code`),bT(128,`name`),cf(),bT(129,`:`),cf(),Aa(130,`app-copy-button`,27)(131,`span`,28),bT(132),LT(133,`extension`),Wa(134,`app-tabs`,null,3),cf(),Aa(136,`pre`)(137,`code`,29),bT(138,`
@Module({
  imports: [
    HttpClientModule.register({
      name: 'github',
      baseUrl: 'https://api.github.com',
      headers: { accept: 'application/vnd.github+json' },
    }),
  ],
  providers: [ReposService],
})
export class ReposModule {}
`),cf()()(),Aa(139,`p`),bT(140,`and inject it with the `),Aa(141,`code`),bT(142,`@InjectHttpClient()`),cf(),bT(143,` decorator:`),cf(),Aa(144,`app-copy-button`,27)(145,`span`,28),bT(146),LT(147,`extension`),Wa(148,`app-tabs`,null,4),cf(),Aa(150,`pre`)(151,`code`,29),bT(152,`
@Injectable()
export class ReposService {
  constructor(@InjectHttpClient('github') private readonly github: HttpClient) {}
}
`),cf()()(),Aa(153,`p`),bT(154,`A client registered without a name is the default client, injected as `),Aa(155,`code`),bT(156,`HttpClient`),cf(),bT(157,`. The `),Aa(158,`code`),bT(159,`getHttpClientToken(name)`),cf(),bT(160,` function returns the injection token of a client, which is useful in tests and custom providers.`),cf(),Aa(161,`h4`,31)(162,`span`),bT(163,`Application-wide defaults`),cf()(),Aa(164,`p`),bT(165,`Settings that every client shares, such as a `),Aa(166,`code`),bT(167,`user-agent`),cf(),bT(168,` header, a timeout, a retry policy, or a logging interceptor, go into `),Aa(169,`code`),bT(170,`HttpClientModule.forRoot()`),cf(),bT(171,`. Import it once, in the root module. It is always global:`),cf(),Aa(172,`app-copy-button`,27)(173,`span`,28),bT(174),LT(175,`extension`),Wa(176,`app-tabs`,null,5),cf(),Aa(178,`pre`)(179,`code`,29),bT(180,`
@Module({
  imports: [
    HttpClientModule.forRoot({
      headers: { 'user-agent': 'cats-service/1.0' },
      timeout: '10s',
    }),
    CatsModule,
    ReposModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(181,`p`)(182,`code`),bT(183,`forRoot()`),cf(),bT(184,` doesn't register a client itself, and it doesn't take a `),Aa(185,`code`),bT(186,`baseUrl`),cf(),bT(187,`. Each client's own settings win over its defaults, with three exceptions: headers are merged (set a header to `),Aa(188,`code`),bT(189,`null`),cf(),bT(190,` in a client to remove a default), retry settings are merged field by field, and the `),Aa(191,`code`),bT(192,`forRoot()`),cf(),bT(193,` interceptors run before the client's own.`),cf(),Aa(194,`h4`,32)(195,`span`),bT(196,`Async configuration`),cf()(),Aa(197,`p`),bT(198,`To build a client's options from other providers, such as the `),Aa(199,`code`),bT(200,`ConfigService`),cf(),bT(201,` from the `),Aa(202,`a`,33),bT(203,`configuration`),cf(),bT(204,` chapter, use `),Aa(205,`code`),bT(206,`registerAsync()`),cf(),bT(207,`:`),cf(),Aa(208,`app-copy-button`,27)(209,`span`,28),bT(210),LT(211,`extension`),Wa(212,`app-tabs`,null,6),cf(),Aa(214,`pre`)(215,`code`,29),bT(216,`
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpClientModule, type Duration } from '@nestjs/http-client';
import { ReposService } from './repos.service.js';

@Module({
  imports: [
    HttpClientModule.registerAsync({
      name: 'github',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        baseUrl: config.getOrThrow<string>('GITHUB_API_URL'),
        headers: { authorization: \`Bearer \${config.getOrThrow<string>('GITHUB_TOKEN')}\` },
        timeout: config.get<Duration>('GITHUB_TIMEOUT', '5s'),
      }),
    }),
  ],
  providers: [ReposService],
})
export class ReposModule {}
`),cf()()(),Aa(217,`p`),bT(218,`The factory can be `),Aa(219,`code`),bT(220,`async`),cf(),bT(221,`. It returns the same options as `),Aa(222,`code`),bT(223,`register()`),cf(),bT(224,`, typed `),Aa(225,`code`),bT(226,`HttpClientFactoryOptions`),cf(),bT(227,`, except for `),Aa(228,`code`),bT(229,`name`),cf(),bT(230,`, `),Aa(231,`code`),bT(232,`isGlobal`),cf(),bT(233,`, `),Aa(234,`code`),bT(235,`imports`),cf(),bT(236,`, and interceptor classes: Nest needs those to build the module, before the factory runs, so they go next to `),Aa(237,`code`),bT(238,`useFactory`),cf(),bT(239,`. A factory that returns one of them stops the application at startup.`),cf(),Aa(240,`p`),bT(241,`Instead of a factory, you can pass a class that implements the `),Aa(242,`code`),bT(243,`HttpClientOptionsFactory`),cf(),bT(244,` interface. Nest instantiates it inside the client's module and calls its `),Aa(245,`code`),bT(246,`createHttpClientOptions()`),cf(),bT(247,` method:`),cf(),Aa(248,`app-copy-button`,27)(249,`span`,28),bT(250),LT(251,`extension`),Wa(252,`app-tabs`,null,7),cf(),Aa(254,`pre`)(255,`code`,29),bT(256,`
@Injectable()
export class GithubClientConfig implements HttpClientOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createHttpClientOptions(): HttpClientFactoryOptions {
    return { baseUrl: this.config.getOrThrow<string>('GITHUB_API_URL') };
  }
}
`),cf()()(),Aa(257,`app-copy-button`)(258,`pre`)(259,`code`,29),bT(260,`
HttpClientModule.registerAsync({
  name: 'github',
  imports: [ConfigModule],
  useClass: GithubClientConfig,
});
`),cf()()(),Aa(261,`p`),bT(262,`To reuse a provider that already exists instead of creating a private copy, pass `),Aa(263,`code`),bT(264,`useExisting: GithubClientConfig`),cf(),bT(265,`, with the module that exports it in `),Aa(266,`code`),bT(267,`imports`),cf(),bT(268,`. `),Aa(269,`code`),bT(270,`forRootAsync()`),cf(),bT(271,` works the same way. Its `),Aa(272,`code`),bT(273,`useClass`),cf(),bT(274,` or `),Aa(275,`code`),bT(276,`useExisting`),cf(),bT(277,` class implements `),Aa(278,`code`),bT(279,`HttpClientModuleOptionsFactory`),cf(),bT(280,`, with a `),Aa(281,`code`),bT(282,`createHttpClientModuleOptions()`),cf(),bT(283,` method.`),cf(),Aa(284,`h4`,34)(285,`span`),bT(286,`Making requests`),cf()(),Aa(287,`p`),bT(288,`A client has a method for each HTTP verb: `),Aa(289,`code`),bT(290,`get()`),cf(),bT(291,`, `),Aa(292,`code`),bT(293,`post()`),cf(),bT(294,`, `),Aa(295,`code`),bT(296,`put()`),cf(),bT(297,`, `),Aa(298,`code`),bT(299,`patch()`),cf(),bT(300,`, `),Aa(301,`code`),bT(302,`delete()`),cf(),bT(303,`, `),Aa(304,`code`),bT(305,`head()`),cf(),bT(306,`, and `),Aa(307,`code`),bT(308,`options()`),cf(),bT(309,`. Each one takes a URL and an optional options object, and resolves to an `),Aa(310,`code`),bT(311,`HttpResponse`),cf(),bT(312,`. The `),Aa(313,`code`),bT(314,`request()`),cf(),bT(315,` method takes the verb as the `),Aa(316,`code`),bT(317,`method`),cf(),bT(318,` option.`),cf(),Aa(319,`app-copy-button`,27)(320,`span`,28),bT(321),LT(322,`extension`),Wa(323,`app-tabs`,null,8),cf(),Aa(325,`pre`)(326,`code`,29),bT(327,`
@Injectable()
export class ReposService {
  constructor(@InjectHttpClient('github') private readonly github: HttpClient) {}

  async findAll(org: string): Promise<Repo[]> {
    const { data } = await this.github.get<Repo[]>('/orgs/:org/repos', {
      params: { org },
      query: { type: 'public', sort: 'updated', topic: ['nest', 'typescript'] },
    });
    return data;
  }

  async createIssue(owner: string, repo: string, issue: CreateIssueDto): Promise<Issue> {
    const { data } = await this.github.post<Issue>('/repos/:owner/:repo/issues', {
      params: { owner, repo },
      json: issue,
    });
    return data;
  }
}
`),cf()()(),Aa(328,`p`),bT(329,`The options mirror what a Nest controller reads from a request:`),cf(),Aa(330,`ul`)(331,`li`)(332,`code`),bT(333,`params`),cf(),bT(334,` fills the `),Aa(335,`code`),bT(336,`:name`),cf(),bT(337,` segments of the path, URI-encoded. A segment without a value throws, even when `),Aa(338,`code`),bT(339,`params`),cf(),bT(340,` is omitted, and so does a key that matches no segment, or a value that would move the request to another endpoint (an empty string, `),Aa(341,`code`),bT(342,`.`),cf(),bT(343,`, or `),Aa(344,`code`),bT(345,`..`),cf(),bT(346,`).`),cf(),Aa(347,`li`)(348,`code`),bT(349,`query`),cf(),bT(350,` is an object or a `),Aa(351,`code`),bT(352,`URLSearchParams`),cf(),bT(353,` instance, appended to any query already in the URL. Arrays repeat the key (`),Aa(354,`code`),bT(355,`topic=nest&topic=typescript`),cf(),bT(356,`), `),Aa(357,`code`),bT(358,`Date`),cf(),bT(359,` values become ISO strings, and `),Aa(360,`code`),bT(361,`null`),cf(),bT(362,` and `),Aa(363,`code`),bT(364,`undefined`),cf(),bT(365,` values are skipped. The first request above goes to `),Aa(366,`code`),bT(367,`https://api.github.com/orgs/nestjs/repos?type=public&sort=updated&topic=nest&topic=typescript`),cf(),bT(368,`.`),cf(),Aa(369,`li`)(370,`code`),bT(371,`json`),cf(),bT(372,` is serialized with `),Aa(373,`code`),bT(374,`JSON.stringify()`),cf(),bT(375,`, and sets the `),Aa(376,`code`),bT(377,`content-type: application/json`),cf(),bT(378,` header unless you set one.`),cf(),Aa(379,`li`)(380,`code`),bT(381,`body`),cf(),bT(382,` is passed to `),Aa(383,`code`),bT(384,`fetch`),cf(),bT(385,` as is: a string, `),Aa(386,`code`),bT(387,`Buffer`),cf(),bT(388,`, `),Aa(389,`code`),bT(390,`FormData`),cf(),bT(391,`, `),Aa(392,`code`),bT(393,`URLSearchParams`),cf(),bT(394,`, `),Aa(395,`code`),bT(396,`Blob`),cf(),bT(397,`, a web or Node.js stream, or an async iterable. Pass either `),Aa(398,`code`),bT(399,`json`),cf(),bT(400,` or `),Aa(401,`code`),bT(402,`body`),cf(),bT(403,`, not both. A `),Aa(404,`code`),bT(405,`GET`),cf(),bT(406,` or `),Aa(407,`code`),bT(408,`HEAD`),cf(),bT(409,` request with a body throws before anything is sent.`),cf(),Aa(410,`li`)(411,`code`),bT(412,`headers`),cf(),bT(413,` is merged over the client's headers. A `),Aa(414,`code`),bT(415,`null`),cf(),bT(416,` value removes a header.`),cf(),Aa(417,`li`)(418,`code`),bT(419,`timeout`),cf(),bT(420,`, `),Aa(421,`code`),bT(422,`retry`),cf(),bT(423,`, `),Aa(424,`code`),bT(425,`signal`),cf(),bT(426,`, `),Aa(427,`code`),bT(428,`throwOnHttpError`),cf(),bT(429,`, `),Aa(430,`code`),bT(431,`redirect`),cf(),bT(432,`, and `),Aa(433,`code`),bT(434,`dispatcher`),cf(),bT(435,` override the client's settings for one request, and are covered below.`),cf(),Aa(436,`li`)(437,`code`),bT(438,`context`),cf(),bT(439,` is a free-form object that `),Aa(440,`a`,35),bT(441,`interceptors`),cf(),bT(442,` can read.`),cf()(),Aa(443,`p`),bT(444,`The type argument, such as `),Aa(445,`code`),bT(446,`Repo[]`),cf(),bT(447,`, describes `),Aa(448,`code`),bT(449,`data`),cf(),bT(450,`. Nothing checks it at runtime, so validate responses from APIs you don't control. The `),Aa(451,`code`),bT(452,`responseType`),cf(),bT(453,` option controls how the body is read:`),cf(),Aa(454,`table`)(455,`thead`)(456,`tr`)(457,`th`)(458,`code`),bT(459,`responseType`),cf()(),Aa(460,`th`)(461,`code`),bT(462,`data`),cf()()()(),Aa(463,`tbody`)(464,`tr`)(465,`td`)(466,`code`),bT(467,`'auto'`),cf(),bT(468,` (default)`),cf(),Aa(469,`td`),bT(470,`Parsed JSON when the `),Aa(471,`code`),bT(472,`content-type`),cf(),bT(473,` is JSON (including `),Aa(474,`code`),bT(475,`+json`),cf(),bT(476,` types), otherwise a string. `),Aa(477,`code`),bT(478,`undefined`),cf(),bT(479,` when the body is empty, for `),Aa(480,`code`),bT(481,`204`),cf(),bT(482,` and `),Aa(483,`code`),bT(484,`205`),cf(),bT(485,` responses, and for `),Aa(486,`code`),bT(487,`HEAD`),cf(),bT(488,` requests. A `),Aa(489,`code`),bT(490,`304`),cf(),bT(491,` response throws by default, like any non-2xx; with `),Aa(492,`code`),bT(493,`throwOnHttpError: false`),cf(),bT(494,`, its `),Aa(495,`code`),bT(496,`data`),cf(),bT(497,` is `),Aa(498,`code`),bT(499,`undefined`),cf(),bT(500,`.`),cf()(),Aa(501,`tr`)(502,`td`)(503,`code`),bT(504,`'json'`),cf()(),Aa(505,`td`),bT(506,`Parsed JSON, whatever the content type.`),cf()(),Aa(507,`tr`)(508,`td`)(509,`code`),bT(510,`'text'`),cf()(),Aa(511,`td`),bT(512,`A string.`),cf()(),Aa(513,`tr`)(514,`td`)(515,`code`),bT(516,`'arrayBuffer'`),cf()(),Aa(517,`td`),bT(518,`An `),Aa(519,`code`),bT(520,`ArrayBuffer`),cf(),bT(521,`.`),cf()(),Aa(522,`tr`)(523,`td`)(524,`code`),bT(525,`'stream'`),cf()(),Aa(526,`td`),bT(527,`A Node.js `),Aa(528,`code`),bT(529,`Readable`),cf(),bT(530,`. See `),Aa(531,`a`,36),bT(532,`Streaming responses`),cf(),bT(533,`.`),cf()(),Aa(534,`tr`)(535,`td`)(536,`code`),bT(537,`'response'`),cf()(),Aa(538,`td`),bT(539,`The web `),Aa(540,`code`),bT(541,`Response`),cf(),bT(542,`, with its body unread.`),cf()()()(),Aa(543,`p`),bT(544,`The type of `),Aa(545,`code`),bT(546,`data`),cf(),bT(547,` follows `),Aa(548,`code`),bT(549,`responseType`),cf(),bT(550,`, so `),Aa(551,`code`),bT(552,`responseType: 'text'`),cf(),bT(553,` resolves to `),Aa(554,`code`),bT(555,`HttpResponse<string>`),cf(),bT(556,`. A successful response whose body isn't valid JSON, although it was expected to be, rejects with an `),Aa(557,`code`),bT(558,`HttpParseError`),cf(),bT(559,`. The response object has the following shape:`),cf(),Aa(560,`app-copy-button`)(561,`pre`)(562,`code`,29),bT(563,`
interface HttpResponse<T> {
  status: number;
  statusText: string;
  ok: boolean;
  headers: Headers; // a web Headers object: headers.get('etag')
  data: T;
  url: string; // the final URL, after redirects
  request: HttpRequest; // the request that was sent, after interceptors ran
}
`),cf()()(),Aa(564,`h4`,37)(565,`span`),bT(566,`Timeouts and cancellation`),cf()(),Aa(567,`p`)(568,`code`),bT(569,`fetch`),cf(),bT(570,` has no timeout of its own, apart from the 5-minute limits of undici, the HTTP client inside Node.js. Set a `),Aa(571,`code`),bT(572,`timeout`),cf(),bT(573,` on each client, either in milliseconds or as a duration string such as `),Aa(574,`code`),bT(575,`'500ms'`),cf(),bT(576,`, `),Aa(577,`code`),bT(578,`'5s'`),cf(),bT(579,`, or `),Aa(580,`code`),bT(581,`'2m'`),cf(),bT(582,`. An invalid value fails at startup, with an error that names the option. `),Aa(583,`code`),bT(584,`0`),cf(),bT(585,` means no timeout, which is the default.`),cf(),Aa(586,`p`),bT(587,`The timeout applies to `),Aa(588,`strong`),bT(589,`each attempt`),cf(),bT(590,`, not to the whole call. It covers the attempt's interceptors and reading the response body. For `),Aa(591,`code`),bT(592,`responseType: 'stream'`),cf(),bT(593,` and `),Aa(594,`code`),bT(595,`'response'`),cf(),bT(596,`, it stops once the headers arrive, so a long download isn't cut off. When it elapses, the attempt fails with an `),Aa(597,`code`),bT(598,`HttpTimeoutError`),cf(),bT(599,`, and the request is retried like after any other `),Aa(600,`a`,38),bT(601,`transient failure`),cf(),bT(602,`.`),cf(),Aa(603,`p`),bT(604,`To cancel a request, pass an `),Aa(605,`code`),bT(606,`AbortSignal`),cf(),bT(607,` as the `),Aa(608,`code`),bT(609,`signal`),cf(),bT(610,` option. It is combined with the timeout. A cancelled request rejects with the signal's `),Aa(611,`code`),bT(612,`reason`),cf(),bT(613,`, as `),Aa(614,`code`),bT(615,`fetch`),cf(),bT(616,` does, and is never retried, even while it waits between two attempts.`),cf(),Aa(617,`p`),bT(618,`Because of retries, a call can take up to `),Aa(619,`code`),bT(620,`attempts × timeout`),cf(),bT(621,`, plus the waits between attempts. To put a limit on the whole call, pass a deadline as the signal:`),cf(),Aa(622,`app-copy-button`)(623,`pre`)(624,`code`,29),bT(625,`
const { data } = await this.github.get<Repo>('/repos/:owner/:repo', {
  params: { owner, repo },
  signal: AbortSignal.timeout(10_000),
});
`),cf()()(),Aa(626,`p`),bT(627,`The deadline rejects with a `),Aa(628,`code`),bT(629,`DOMException`),cf(),bT(630,` named `),Aa(631,`code`),bT(632,`TimeoutError`),cf(),bT(633,`, which `),Aa(634,`code`),bT(635,`toHttpException()`),cf(),bT(636,` maps to `),Aa(637,`code`),bT(638,`504 Gateway Timeout`),cf(),bT(639,`, like an `),Aa(640,`code`),bT(641,`HttpTimeoutError`),cf(),bT(642,`. To combine it with another signal, use `),Aa(643,`code`),bT(644,`AbortSignal.any([signal, AbortSignal.timeout(10_000)])`),cf(),bT(645,`.`),cf(),Aa(646,`h4`,39)(647,`span`),bT(648,`Retries`),cf()(),Aa(649,`p`),bT(650,`Retries are `),Aa(651,`strong`),bT(652,`on by default`),cf(),bT(653,`. Without any configuration, a client makes up to 3 attempts for `),Aa(654,`code`),bT(655,`GET`),cf(),bT(656,`, `),Aa(657,`code`),bT(658,`HEAD`),cf(),bT(659,`, `),Aa(660,`code`),bT(661,`OPTIONS`),cf(),bT(662,`, `),Aa(663,`code`),bT(664,`PUT`),cf(),bT(665,`, and `),Aa(666,`code`),bT(667,`DELETE`),cf(),bT(668,`, the methods that HTTP defines as idempotent. It retries after:`),cf(),Aa(669,`ul`)(670,`li`),bT(671,`connection errors, such as a refused or reset connection (including a reset while the body is read),`),cf(),Aa(672,`li`),bT(673,`per-attempt timeouts,`),cf(),Aa(674,`li`)(675,`code`),bT(676,`408`),cf(),bT(677,`, `),Aa(678,`code`),bT(679,`429`),cf(),bT(680,`, `),Aa(681,`code`),bT(682,`500`),cf(),bT(683,`, `),Aa(684,`code`),bT(685,`502`),cf(),bT(686,`, `),Aa(687,`code`),bT(688,`503`),cf(),bT(689,`, and `),Aa(690,`code`),bT(691,`504`),cf(),bT(692,` responses.`),cf()(),Aa(693,`p`),bT(694,`Between attempts, the client waits with exponential backoff and full jitter: a random delay of up to 200 ms after the first attempt, up to 400 ms after the second, and so on, capped at 30 seconds. A `),Aa(695,`code`),bT(696,`Retry-After`),cf(),bT(697,` response header, in seconds or as an HTTP date, replaces the backoff. When it asks for more than the cap, the client doesn't wait at all, and returns (or throws) the `),Aa(698,`code`),bT(699,`429`),cf(),bT(700,` or `),Aa(701,`code`),bT(702,`503`),cf(),bT(703,` response right away. A request whose body is a stream is never retried, because the first attempt consumed it.`),cf(),Aa(704,`p`),bT(705,`The `),Aa(706,`code`),bT(707,`retry`),cf(),bT(708,` option takes a number of attempts, `),Aa(709,`code`),bT(710,`false`),cf(),bT(711,` for a single attempt, or an object:`),cf(),Aa(712,`app-copy-button`)(713,`pre`)(714,`code`,29),bT(715,`
HttpClientModule.register({
  name: 'github',
  baseUrl: 'https://api.github.com',
  retry: {
    attempts: 4, // in total, including the first request
    backoff: { delay: '500ms', factor: 2, maxDelay: '5s', jitter: 'full' },
    retryIf: (error, attempt) => !(error instanceof HttpNetworkError),
    methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'DELETE'],
    statusCodes: [408, 429, 500, 502, 503, 504],
  },
}),
`),cf()()(),Aa(716,`p`),bT(717,`Every field you omit keeps its default. `),Aa(718,`code`),bT(719,`backoff`),cf(),bT(720,` can also be a function that receives the number of the attempt that failed and its error, and returns a duration. `),Aa(721,`code`),bT(722,`jitter`),cf(),bT(723,` can be `),Aa(724,`code`),bT(725,`'full'`),cf(),bT(726,`, `),Aa(727,`code`),bT(728,`'equal'`),cf(),bT(729,` (at least half of the computed delay), or `),Aa(730,`code`),bT(731,`'none'`),cf(),bT(732,`. `),Aa(733,`code`),bT(734,`retryIf`),cf(),bT(735,` is only asked about failures the client would retry anyway, so it can narrow the defaults but not widen them; use `),Aa(736,`code`),bT(737,`methods`),cf(),bT(738,` and `),Aa(739,`code`),bT(740,`statusCodes`),cf(),bT(741,` for that. It receives the `),Aa(742,`code`),bT(743,`HttpResponseError`),cf(),bT(744,` (with its `),Aa(745,`code`),bT(746,`body`),cf(),bT(747,`), `),Aa(748,`code`),bT(749,`HttpTimeoutError`),cf(),bT(750,`, or `),Aa(751,`code`),bT(752,`HttpNetworkError`),cf(),bT(753,` of the attempt that failed.`),cf(),Aa(754,`p`),bT(755,`Retry settings are layered: `),Aa(756,`code`),bT(757,`forRoot()`),cf(),bT(758,`, then the client, then the request. Each layer overrides only the fields it sets, and a later layer can turn retries back on after an earlier `),Aa(759,`code`),bT(760,`false`),cf(),bT(761,`. `),Aa(762,`code`),bT(763,`methods`),cf(),bT(764,` and `),Aa(765,`code`),bT(766,`statusCodes`),cf(),bT(767,`, however, `),Aa(768,`strong`),bT(769,`replace`),cf(),bT(770,` the default lists instead of adding to them.`),cf(),Aa(771,`p`)(772,`code`),bT(773,`POST`),cf(),bT(774,` and `),Aa(775,`code`),bT(776,`PATCH`),cf(),bT(777,` aren't retried, because repeating them could, for example, charge a customer twice. When the upstream API supports idempotency keys, send one and opt in for that request:`),cf(),Aa(778,`app-copy-button`)(779,`pre`)(780,`code`,29),bT(781,`
const { data } = await this.payments.post<Charge>('/charges', {
  json: charge,
  headers: { 'idempotency-key': \`charge-\${order.id}\` },
  retry: { methods: ['POST'] },
});
`),cf()()(),Aa(782,`p`),bT(783,`The key identifies the operation, so every attempt sends the same one, and the upstream returns the original result instead of creating a second charge. Setting `),Aa(784,`code`),bT(785,`methods: ['POST']`),cf(),bT(786,` on the client instead would also stop `),Aa(787,`code`),bT(788,`GET`),cf(),bT(789,` retries, since the list replaces the default one.`),cf(),Aa(790,`blockquote`,40)(791,`strong`),bT(792,`Warning`),cf(),bT(793,` Retries multiply along a chain of services. If service A calls B, B calls C, and every hop makes 3 attempts, one failing request to C turns into 9 calls to C, which arrive exactly when C is already struggling. Retry at one layer only, usually the service that calls the external dependency, and set `),Aa(794,`code`),bT(795,`retry: false`),cf(),bT(796,` on clients that call your own services.
`),cf(),Aa(797,`h4`,41)(798,`span`),bT(799,`Handling errors`),cf()(),Aa(800,`p`),bT(801,`A request rejects with one of the following errors, all of which extend the `),Aa(802,`code`),bT(803,`HttpClientError`),cf(),bT(804,` class:`),cf(),Aa(805,`table`)(806,`thead`)(807,`tr`)(808,`th`),bT(809,`Error`),cf(),Aa(810,`th`),bT(811,`When`),cf(),Aa(812,`th`),bT(813,`Fields`),cf()()(),Aa(814,`tbody`)(815,`tr`)(816,`td`)(817,`code`),bT(818,`HttpResponseError`),cf()(),Aa(819,`td`),bT(820,`The upstream answered with a non-2xx status.`),cf(),Aa(821,`td`)(822,`code`),bT(823,`status`),cf(),bT(824,`, `),Aa(825,`code`),bT(826,`statusText`),cf(),bT(827,`, `),Aa(828,`code`),bT(829,`headers`),cf(),bT(830,`, `),Aa(831,`code`),bT(832,`body`),cf(),bT(833,` (parsed JSON, otherwise text), `),Aa(834,`code`),bT(835,`method`),cf(),bT(836,`, `),Aa(837,`code`),bT(838,`url`),cf()()(),Aa(839,`tr`)(840,`td`)(841,`code`),bT(842,`HttpTimeoutError`),cf()(),Aa(843,`td`),bT(844,`The `),Aa(845,`code`),bT(846,`timeout`),cf(),bT(847,` elapsed on the last attempt.`),cf(),Aa(848,`td`)(849,`code`),bT(850,`timeoutMs`),cf(),bT(851,`, `),Aa(852,`code`),bT(853,`method`),cf(),bT(854,`, `),Aa(855,`code`),bT(856,`url`),cf()()(),Aa(857,`tr`)(858,`td`)(859,`code`),bT(860,`HttpNetworkError`),cf()(),Aa(861,`td`),bT(862,`The connection failed: DNS, a refused or reset connection, TLS, or a redirect the client refused (to another origin, or with `),Aa(863,`code`),bT(864,`redirect: 'error'`),cf(),bT(865,`).`),cf(),Aa(866,`td`)(867,`code`),bT(868,`cause`),cf(),bT(869,` (for example, with `),Aa(870,`code`),bT(871,`cause.code`),cf(),bT(872,` set to `),Aa(873,`code`),bT(874,`ECONNREFUSED`),cf(),bT(875,`), `),Aa(876,`code`),bT(877,`method`),cf(),bT(878,`, `),Aa(879,`code`),bT(880,`url`),cf()()(),Aa(881,`tr`)(882,`td`)(883,`code`),bT(884,`HttpParseError`),cf()(),Aa(885,`td`),bT(886,`A successful response isn't valid JSON, although it was expected to be.`),cf(),Aa(887,`td`)(888,`code`),bT(889,`status`),cf(),bT(890,`, `),Aa(891,`code`),bT(892,`statusText`),cf(),bT(893,`, `),Aa(894,`code`),bT(895,`headers`),cf(),bT(896,`, `),Aa(897,`code`),bT(898,`body`),cf(),bT(899,` (the raw text), `),Aa(900,`code`),bT(901,`method`),cf(),bT(902,`, `),Aa(903,`code`),bT(904,`url`),cf()()()()(),Aa(905,`p`),bT(906,`A cancelled request rejects with the signal's reason, and errors thrown by interceptors propagate unchanged. A request the client refuses to send, such as one with an invalid `),Aa(907,`code`),bT(908,`params`),cf(),bT(909,` value, rejects with a `),Aa(910,`code`),bT(911,`TypeError`),cf(),bT(912,`. To receive non-2xx responses as values instead, set `),Aa(913,`code`),bT(914,`throwOnHttpError: false`),cf(),bT(915,` on the client or on a request, and check `),Aa(916,`code`),bT(917,`ok`),cf(),bT(918,` or `),Aa(919,`code`),bT(920,`status`),cf(),bT(921,` yourself.`),cf(),Aa(922,`p`),bT(923,`If one of these errors escapes a route handler, Nest answers `),Aa(924,`code`),bT(925,`500 Internal Server Error`),cf(),bT(926,`. For your API's callers, though, a failing upstream is usually a `),Aa(927,`code`),bT(928,`502 Bad Gateway`),cf(),bT(929,`, and one that doesn't answer in time is a `),Aa(930,`code`),bT(931,`504 Gateway Timeout`),cf(),bT(932,`. The `),Aa(933,`code`),bT(934,`toHttpException()`),cf(),bT(935,` function maps the errors accordingly:`),cf(),Aa(936,`table`)(937,`thead`)(938,`tr`)(939,`th`),bT(940,`Error`),cf(),Aa(941,`th`),bT(942,`Becomes`),cf()()(),Aa(943,`tbody`)(944,`tr`)(945,`td`)(946,`code`),bT(947,`HttpResponseError`),cf()(),Aa(948,`td`)(949,`code`),bT(950,`502 Bad Gateway`),cf(),bT(951,`, or the upstream status and body when the status is listed in `),Aa(952,`code`),bT(953,`forward`),cf()()(),Aa(954,`tr`)(955,`td`)(956,`code`),bT(957,`HttpTimeoutError`),cf(),bT(958,`, or the `),Aa(959,`code`),bT(960,`TimeoutError`),cf(),bT(961,` of an `),Aa(962,`code`),bT(963,`AbortSignal.timeout()`),cf(),bT(964,` deadline`),cf(),Aa(965,`td`)(966,`code`),bT(967,`504 Gateway Timeout`),cf()()(),Aa(968,`tr`)(969,`td`)(970,`code`),bT(971,`HttpNetworkError`),cf(),bT(972,`, `),Aa(973,`code`),bT(974,`HttpParseError`),cf()(),Aa(975,`td`)(976,`code`),bT(977,`502 Bad Gateway`),cf()()(),Aa(978,`tr`)(979,`td`),bT(980,`Anything else, including an `),Aa(981,`code`),bT(982,`HttpException`),cf()(),Aa(983,`td`),bT(984,`Returned unchanged, so Nest handles it as usual`),cf()()()(),Aa(985,`app-copy-button`,27)(986,`span`,28),bT(987),LT(988,`extension`),Wa(989,`app-tabs`,null,9),cf(),Aa(991,`pre`)(992,`code`,29),bT(993,`
async findOne(owner: string, repo: string): Promise<Repo> {
  try {
    const { data } = await this.github.get<Repo>('/repos/:owner/:repo', {
      params: { owner, repo },
    });
    return data;
  } catch (error) {
    if (error instanceof HttpResponseError && error.status === 404) {
      throw new NotFoundException(\`Repository \${owner}/\${repo} not found\`);
    }
    throw toHttpException(error);
  }
}
`),cf()()(),Aa(994,`p`),bT(995,`By default, the upstream body isn't passed on to the caller, since it may describe the upstream's internals. To pass selected statuses through with their body, such as a `),Aa(996,`code`),bT(997,`422`),cf(),bT(998,` whose body tells the caller what to fix, use `),Aa(999,`code`),bT(1e3,`toHttpException(error, options)`),cf(),bT(1001,` with `),Aa(1002,`code`),bT(1003,`forward`),cf(),bT(1004,` set to `),Aa(1005,`code`),bT(1006,`[422]`),cf(),bT(1007,`, or to `),Aa(1008,`code`),bT(1009,`true`),cf(),bT(1010,` for every status. The original error is kept as the exception's `),Aa(1011,`code`),bT(1012,`cause`),cf(),bT(1013,`.`),cf(),Aa(1014,`p`),bT(1015,`Nest's built-in exception filter `),Aa(1016,`a`,42),bT(1017,`doesn't log`),cf(),bT(1018,` an `),Aa(1019,`code`),bT(1020,`HttpException`),cf(),bT(1021,`, so a `),Aa(1022,`code`),bT(1023,`502`),cf(),bT(1024,` or `),Aa(1025,`code`),bT(1026,`504`),cf(),bT(1027,` would leave no trace. `),Aa(1028,`code`),bT(1029,`toHttpException()`),cf(),bT(1030,` therefore logs every failure that it turns into a `),Aa(1031,`code`),bT(1032,`5xx`),cf(),bT(1033,`, with the `),Aa(1034,`code`),bT(1035,`HttpClient`),cf(),bT(1036,` context:`),cf(),Aa(1037,`pre`)(1038,`code`,43),bT(1039,`
ERROR [HttpClient] GET https://api.github.com/repos/nestjs/nest failed with 503 Service Unavailable; answering 502 Bad Gateway
`),cf()(),Aa(1040,`p`),bT(1041,`Set the `),Aa(1042,`code`),bT(1043,`log`),cf(),bT(1044,` option to `),Aa(1045,`code`),bT(1046,`false`),cf(),bT(1047,` when something else, such as your own exception filter, already logs upstream failures.`),cf(),Aa(1048,`p`),bT(1049,`Instead of mapping errors in every service, you can let them leave the handler unchanged and map them in an `),Aa(1050,`a`,44),bT(1051,`exception filter`),cf(),bT(1052,`. This keeps call sites free of `),Aa(1053,`code`),bT(1054,`try`),cf(),bT(1055,`/`),Aa(1056,`code`),bT(1057,`catch`),cf(),bT(1058,`, and interceptors further out still see the original error:`),cf(),Aa(1059,`app-copy-button`,27)(1060,`span`,28),bT(1061),LT(1062,`extension`),Wa(1063,`app-tabs`,null,10),cf(),Aa(1065,`pre`)(1066,`code`,29),bT(1067,`
import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { HttpClientError, toHttpException } from '@nestjs/http-client';

@Catch(HttpClientError)
export class HttpClientErrorFilter extends BaseExceptionFilter {
  catch(error: HttpClientError, host: ArgumentsHost) {
    super.catch(toHttpException(error), host);
  }
}
`),cf()()(),Aa(1068,`p`),bT(1069,`An `),Aa(1070,`code`),bT(1071,`AbortSignal.timeout()`),cf(),bT(1072,` deadline isn't an `),Aa(1073,`code`),bT(1074,`HttpClientError`),cf(),bT(1075,`, so add `),Aa(1076,`code`),bT(1077,`DOMException`),cf(),bT(1078,` to `),Aa(1079,`code`),bT(1080,`@Catch()`),cf(),bT(1081,` if you use deadlines. `),Aa(1082,`code`),bT(1083,`toHttpException()`),cf(),bT(1084,` returns an `),Aa(1085,`code`),bT(1086,`HttpException`),cf(),bT(1087,`, so in a microservice or WebSocket handler, convert the errors to an `),Aa(1088,`code`),bT(1089,`RpcException`),cf(),bT(1090,` or `),Aa(1091,`code`),bT(1092,`WsException`),cf(),bT(1093,` yourself.`),cf(),Aa(1094,`blockquote`,22)(1095,`strong`),bT(1096,`Hint`),cf(),bT(1097,` Error messages and objects end up in logs, so the client keeps secrets out of them. A message never includes the response body, and the URL in it has its query values masked, as in `),Aa(1098,`code`),bT(1099,`GET https://api.example.com/users?email=***`),cf(),bT(1100,`. The `),Aa(1101,`code`),bT(1102,`url`),cf(),bT(1103,`, `),Aa(1104,`code`),bT(1105,`headers`),cf(),bT(1106,`, and `),Aa(1107,`code`),bT(1108,`body`),cf(),bT(1109,` fields are non-enumerable: your code can read them, but loggers and `),Aa(1110,`code`),bT(1111,`JSON.stringify()`),cf(),bT(1112,` leave them out.
`),cf(),Aa(1113,`h4`,45)(1114,`span`),bT(1115,`Interceptors`),cf()(),Aa(1116,`p`),bT(1117,`An interceptor wraps every request a client sends. It receives the request and a `),Aa(1118,`code`),bT(1119,`next`),cf(),bT(1120,` function that sends it, and returns the resulting web `),Aa(1121,`code`),bT(1122,`Response`),cf(),bT(1123,`. The simplest form is a function:`),cf(),Aa(1124,`app-copy-button`,27)(1125,`span`,28),bT(1126),LT(1127,`extension`),Wa(1128,`app-tabs`,null,11),cf(),Aa(1130,`pre`)(1131,`code`,29),bT(1132,`
import type { HttpClientInterceptorFn } from '@nestjs/http-client';

export function apiKeyInterceptor(apiKey: string): HttpClientInterceptorFn {
  return (request, next) => {
    request.headers.set('x-api-key', apiKey);
    return next(request);
  };
}
`),cf()()(),Aa(1133,`p`),bT(1134,`The `),Aa(1135,`code`),bT(1136,`HttpRequest`),cf(),bT(1137,` object holds the `),Aa(1138,`code`),bT(1139,`method`),cf(),bT(1140,`, the `),Aa(1141,`code`),bT(1142,`url`),cf(),bT(1143,` (a `),Aa(1144,`code`),bT(1145,`URL`),cf(),bT(1146,` instance), the `),Aa(1147,`code`),bT(1148,`headers`),cf(),bT(1149,` (a `),Aa(1150,`code`),bT(1151,`Headers`),cf(),bT(1152,` instance), the `),Aa(1153,`code`),bT(1154,`body`),cf(),bT(1155,`, the `),Aa(1156,`code`),bT(1157,`signal`),cf(),bT(1158,`, the `),Aa(1159,`code`),bT(1160,`attempt`),cf(),bT(1161,` number, and the request's `),Aa(1162,`code`),bT(1163,`context`),cf(),bT(1164,`. You can change it in place, or pass a modified copy to `),Aa(1165,`code`),bT(1166,`next()`),cf(),bT(1167,`. Interceptors see the response `),Aa(1168,`strong`),bT(1169,`before`),cf(),bT(1170,` the status check, so a `),Aa(1171,`code`),bT(1172,`4xx`),cf(),bT(1173,` or `),Aa(1174,`code`),bT(1175,`5xx`),cf(),bT(1176,` response reaches them too. An interceptor must return what `),Aa(1177,`code`),bT(1178,`next()`),cf(),bT(1179,` resolves to, or a `),Aa(1180,`code`),bT(1181,`Response`),cf(),bT(1182,` of its own.`),cf(),Aa(1183,`p`),bT(1184,`When an interceptor needs other providers, write it as a class that implements the `),Aa(1185,`code`),bT(1186,`HttpClientInterceptor`),cf(),bT(1187,` interface:`),cf(),Aa(1188,`app-copy-button`,27)(1189,`span`,28),bT(1190),LT(1191,`extension`),Wa(1192,`app-tabs`,null,12),cf(),Aa(1194,`pre`)(1195,`code`,29),bT(1196,`
import { Injectable } from '@nestjs/common';
import type { HttpClientInterceptor, HttpHandler, HttpRequest } from '@nestjs/http-client';
import { GithubTokenService } from './github-token.service.js';

@Injectable()
export class GithubAuthInterceptor implements HttpClientInterceptor {
  constructor(private readonly tokens: GithubTokenService) {}

  async intercept(request: HttpRequest, next: HttpHandler): Promise<Response> {
    request.headers.set('authorization', \`Bearer \${await this.tokens.getToken()}\`);
    return next(request);
  }
}
`),cf()()(),Aa(1197,`p`),bT(1198,`Pass interceptors in the `),Aa(1199,`code`),bT(1200,`interceptors`),cf(),bT(1201,` array of `),Aa(1202,`code`),bT(1203,`register()`),cf(),bT(1204,` or `),Aa(1205,`code`),bT(1206,`forRoot()`),cf(),bT(1207,`, or next to `),Aa(1208,`code`),bT(1209,`useFactory`),cf(),bT(1210,` in the async variants:`),cf(),Aa(1211,`app-copy-button`,27)(1212,`span`,28),bT(1213),LT(1214,`extension`),Wa(1215,`app-tabs`,null,13),cf(),Aa(1217,`pre`)(1218,`code`,29),bT(1219,`
@Module({
  imports: [
    HttpClientModule.register({
      name: 'github',
      baseUrl: 'https://api.github.com',
      interceptors: [GithubAuthInterceptor],
    }),
  ],
  providers: [GithubTokenService, GithubAuthInterceptor, ReposService],
})
export class ReposModule {}
`),cf()()(),Aa(1220,`p`),bT(1221,`Nest resolves interceptor classes when the application initializes, so an interceptor may even depend on a service that injects the same client. If the class is a provider anywhere in the application, as `),Aa(1222,`code`),bT(1223,`GithubAuthInterceptor`),cf(),bT(1224,` is above, that instance is used. Otherwise, Nest creates it inside the client's own module, which sees global providers and the modules you pass in the `),Aa(1225,`code`),bT(1226,`imports`),cf(),bT(1227,` option of `),Aa(1228,`code`),bT(1229,`register()`),cf(),bT(1230,`. An async factory may also return interceptors in its options, but only functions and instances, such as `),Aa(1231,`code`),bT(1232,`apiKeyInterceptor(config.getOrThrow('API_KEY'))`),cf(),bT(1233,`.`),cf(),Aa(1234,`p`),bT(1235,`Interceptors run in the order they are listed, the first one outermost, and the `),Aa(1236,`code`),bT(1237,`forRoot()`),cf(),bT(1238,` interceptors run before the client's own. They run `),Aa(1239,`strong`),bT(1240,`once per attempt`),cf(),bT(1241,`, so a retry gets a fresh token, and `),Aa(1242,`code`),bT(1243,`request.attempt`),cf(),bT(1244,` tells them which attempt it is. When an attempt fails, `),Aa(1245,`code`),bT(1246,`next()`),cf(),bT(1247,` rejects with an `),Aa(1248,`code`),bT(1249,`HttpNetworkError`),cf(),bT(1250,` or `),Aa(1251,`code`),bT(1252,`HttpTimeoutError`),cf(),bT(1253,`, or with the abort reason. This makes an interceptor a good place to log upstream traffic:`),cf(),Aa(1254,`app-copy-button`,27)(1255,`span`,28),bT(1256),LT(1257,`extension`),Wa(1258,`app-tabs`,null,14),cf(),Aa(1260,`pre`)(1261,`code`,29),bT(1262,`
import { Injectable, Logger } from '@nestjs/common';
import type { HttpClientInterceptor, HttpHandler, HttpRequest } from '@nestjs/http-client';

@Injectable()
export class HttpLoggingInterceptor implements HttpClientInterceptor {
  private readonly logger = new Logger('HttpClient');

  async intercept(request: HttpRequest, next: HttpHandler): Promise<Response> {
    const target = \`\${request.method} \${request.url.origin}\${request.url.pathname}\`;
    const start = performance.now();
    try {
      const response = await next(request);
      const ms = Math.round(performance.now() - start);
      this.logger.log(\`\${target} \${response.status} \${ms}ms (attempt \${request.attempt})\`);
      return response;
    } catch (error) {
      this.logger.warn(\`\${target} failed: \${(error as Error).name} (attempt \${request.attempt})\`);
      throw error;
    }
  }
}
`),cf()()(),Aa(1263,`p`),bT(1264,`Registered with `),Aa(1265,`code`),bT(1266,`HttpClientModule.forRoot()`),cf(),bT(1267,` and `),Aa(1268,`code`),bT(1269,`interceptors: [HttpLoggingInterceptor]`),cf(),bT(1270,`, it logs the requests of every client. It logs the path without the query string, which often carries personal data or keys.`),cf(),Aa(1271,`blockquote`,22)(1272,`strong`),bT(1273,`Hint`),cf(),bT(1274,` For tracing, you don't need an interceptor. `),Aa(1275,`a`,46),bT(1276,`NestJS Observe`),cf(),bT(1277,` records every outbound `),Aa(1278,`code`),bT(1279,`fetch`),cf(),bT(1280,` call as a span, and propagates the trace id to other Nest services.
`),cf(),Aa(1281,`h4`,47)(1282,`span`),bT(1283,`Streaming responses`),cf()(),Aa(1284,`p`),bT(1285,`To pass a large response through without buffering it in memory, set `),Aa(1286,`code`),bT(1287,`responseType: 'stream'`),cf(),bT(1288,`. The `),Aa(1289,`code`),bT(1290,`data`),cf(),bT(1291,` is a Node.js `),Aa(1292,`code`),bT(1293,`Readable`),cf(),bT(1294,`, which you can return from a route handler in a `),Aa(1295,`a`,48)(1296,`code`),bT(1297,`StreamableFile`),cf()(),bT(1298,`:`),cf(),Aa(1299,`app-copy-button`,27)(1300,`span`,28),bT(1301),LT(1302,`extension`),Wa(1303,`app-tabs`,null,15),cf(),Aa(1305,`pre`)(1306,`code`,29),bT(1307,`
@Get(':id/pdf')
async download(@Param('id') id: string): Promise<StreamableFile> {
  const { data, headers } = await this.billing.get('/invoices/:id/pdf', {
    params: { id },
    responseType: 'stream',
  });
  return new StreamableFile(data, {
    type: headers.get('content-type') ?? 'application/pdf',
  });
}
`),cf()()(),Aa(1308,`p`),bT(1309,`The timeout stops once the headers arrive, while cancelling the `),Aa(1310,`code`),bT(1311,`signal`),cf(),bT(1312,` still stops the download. A non-2xx response is read and thrown as an `),Aa(1313,`code`),bT(1314,`HttpResponseError`),cf(),bT(1315,`, as usual. Don't pass the upstream's `),Aa(1316,`code`),bT(1317,`content-length`),cf(),bT(1318,` header on as the `),Aa(1319,`code`),bT(1320,`length`),cf(),bT(1321,` option: `),Aa(1322,`code`),bT(1323,`fetch`),cf(),bT(1324,` decompresses gzip and brotli bodies, so the stream can be longer than the header says. For the web `),Aa(1325,`code`),bT(1326,`ReadableStream`),cf(),bT(1327,`, use `),Aa(1328,`code`),bT(1329,`responseType: 'response'`),cf(),bT(1330,` and read `),Aa(1331,`code`),bT(1332,`data.body`),cf(),bT(1333,`.`),cf(),Aa(1334,`h4`,49)(1335,`span`),bT(1336,`Proxies, TLS, and redirects`),cf()(),Aa(1337,`p`),bT(1338,`Node.js's `),Aa(1339,`code`),bT(1340,`fetch`),cf(),bT(1341,` runs on undici, whose default dispatcher keeps a pool of keep-alive connections, so the common case needs no configuration. To change the pool size, route through a proxy, or use custom TLS settings (a private CA, or client certificates), pass an undici dispatcher as the `),Aa(1342,`code`),bT(1343,`dispatcher`),cf(),bT(1344,` option:`),cf(),Aa(1345,`app-copy-button`,27)(1346,`span`,28),bT(1347),LT(1348,`extension`),Wa(1349,`app-tabs`,null,16),cf(),Aa(1351,`pre`)(1352,`code`,29),bT(1353,`
import { readFileSync } from 'node:fs';
import { Agent } from 'undici';

@Module({
  imports: [
    HttpClientModule.register({
      name: 'partner',
      baseUrl: 'https://partner.example.com',
      dispatcher: new Agent({
        connections: 20,
        connect: {
          ca: readFileSync('certs/partner-ca.pem'),
          cert: readFileSync('certs/client.pem'),
          key: readFileSync('certs/client-key.pem'),
        },
      }),
    }),
  ],
})
export class PartnerModule {}
`),cf()()(),Aa(1354,`p`),bT(1355,`For a proxy, pass `),Aa(1356,`code`),bT(1357,`new ProxyAgent('http://proxy.internal:3128')`),cf(),bT(1358,`. Node.js doesn't expose these classes from a built-in module, so install the `),Aa(1359,`code`),bT(1360,`undici`),cf(),bT(1361,` package yourself (`),Aa(1362,`code`),bT(1363,`@nestjs/http-client`),cf(),bT(1364,` doesn't depend on it), preferably with the major version that your Node.js release bundles. A Node.js `),Aa(1365,`code`),bT(1366,`http.Agent`),cf(),bT(1367,`, which Axios accepts as `),Aa(1368,`code`),bT(1369,`httpsAgent`),cf(),bT(1370,`, doesn't work with `),Aa(1371,`code`),bT(1372,`fetch`),cf(),bT(1373,`, and fails to compile. To route every client through the proxy from the `),Aa(1374,`code`),bT(1375,`HTTP_PROXY`),cf(),bT(1376,`, `),Aa(1377,`code`),bT(1378,`HTTPS_PROXY`),cf(),bT(1379,`, and `),Aa(1380,`code`),bT(1381,`NO_PROXY`),cf(),bT(1382,` environment variables instead, start Node.js with `),Aa(1383,`code`),bT(1384,`--use-env-proxy`),cf(),bT(1385,` (or set `),Aa(1386,`code`),bT(1387,`NODE_USE_ENV_PROXY=1`),cf(),bT(1388,`) on a release that supports it.`),cf(),Aa(1389,`p`),bT(1390,`The `),Aa(1391,`code`),bT(1392,`redirect`),cf(),bT(1393,` option controls how `),Aa(1394,`code`),bT(1395,`3xx`),cf(),bT(1396,` responses are handled. A client with a `),Aa(1397,`code`),bT(1398,`baseUrl`),cf(),bT(1399,` follows redirects on its own origin only, and fails one to another host with an `),Aa(1400,`code`),bT(1401,`HttpNetworkError`),cf(),bT(1402,`, since its headers carry that upstream's credentials (see `),Aa(1403,`a`,50),bT(1404,`Security`),cf(),bT(1405,`). A client without a `),Aa(1406,`code`),bT(1407,`baseUrl`),cf(),bT(1408,` lets `),Aa(1409,`code`),bT(1410,`fetch`),cf(),bT(1411,` follow redirects anywhere, dropping the `),Aa(1412,`code`),bT(1413,`authorization`),cf(),bT(1414,` and `),Aa(1415,`code`),bT(1416,`cookie`),cf(),bT(1417,` headers when the origin changes, but not others.`),cf(),Aa(1418,`p`),bT(1419,`Set `),Aa(1420,`code`),bT(1421,`redirect`),cf(),bT(1422,` to `),Aa(1423,`code`),bT(1424,`'follow'`),cf(),bT(1425,` to follow redirects anywhere with a `),Aa(1426,`code`),bT(1427,`baseUrl`),cf(),bT(1428,` too, for an API that intentionally redirects to another host, to `),Aa(1429,`code`),bT(1430,`'error'`),cf(),bT(1431,` to fail on every redirect, or to `),Aa(1432,`code`),bT(1433,`'manual'`),cf(),bT(1434,` to receive `),Aa(1435,`code`),bT(1436,`3xx`),cf(),bT(1437,` responses as they are. A `),Aa(1438,`code`),bT(1439,`3xx`),cf(),bT(1440,` response isn't a success, so combine `),Aa(1441,`code`),bT(1442,`'manual'`),cf(),bT(1443,` with `),Aa(1444,`code`),bT(1445,`throwOnHttpError: false`),cf(),bT(1446,` to read its `),Aa(1447,`code`),bT(1448,`location`),cf(),bT(1449,` header.`),cf(),Aa(1450,`h4`,51)(1451,`span`),bT(1452,`Security`),cf()(),Aa(1453,`p`),bT(1454,`The client guards against a few common mistakes:`),cf(),Aa(1455,`ul`)(1456,`li`)(1457,`strong`),bT(1458,`A client with a `),Aa(1459,`code`),bT(1460,`baseUrl`),cf(),bT(1461,` only sends requests to its origin.`),cf(),bT(1462,` An absolute URL on the same origin, such as a pagination link, works, but one on another host throws before anything is sent. A redirect to another host fails too, before the request is repeated there. The client's headers and interceptors carry that upstream's credentials, and a URL taken from user input or from an upstream response must not receive them. Use a client without a `),Aa(1463,`code`),bT(1464,`baseUrl`),cf(),bT(1465,` to call arbitrary hosts, or `),Aa(1466,`code`),bT(1467,`redirect: 'follow'`),cf(),bT(1468,` for an API that redirects to another host on purpose.`),cf(),Aa(1469,`li`)(1470,`strong`),bT(1471,`Path parameters are encoded.`),cf(),bT(1472,` Put request values in `),Aa(1473,`code`),bT(1474,`params`),cf(),bT(1475,` and `),Aa(1476,`code`),bT(1477,`query`),cf(),bT(1478,` instead of building the path with string interpolation. They are URI-encoded, and a `),Aa(1479,`code`),bT(1480,`params`),cf(),bT(1481,` value such as `),Aa(1482,`code`),bT(1483,`..`),cf(),bT(1484,` throws instead of moving the request to another endpoint.`),cf(),Aa(1485,`li`)(1486,`strong`),bT(1487,`Credentials in URLs are refused.`),cf(),bT(1488,` A `),Aa(1489,`code`),bT(1490,`baseUrl`),cf(),bT(1491,` or request URL such as `),Aa(1492,`code`),bT(1493,`https://user:pass@example.com`),cf(),bT(1494,` throws. Send credentials in the `),Aa(1495,`code`),bT(1496,`authorization`),cf(),bT(1497,` header instead. A header value with a line break throws, without quoting the value in the message.`),cf(),Aa(1498,`li`)(1499,`strong`),bT(1500,`Errors are safe to log`),cf(),bT(1501,`, as described in `),Aa(1502,`a`,52),bT(1503,`Handling errors`),cf(),bT(1504,`.`),cf()(),Aa(1505,`h4`,53)(1506,`span`),bT(1507,`Testing`),cf()(),Aa(1508,`p`),bT(1509,`A stub `),Aa(1510,`code`),bT(1511,`fetch`),cf(),bT(1512,` is the easiest way to test code that calls an external API. Pass it to `),Aa(1513,`code`),bT(1514,`HttpClientModule.forRoot()`),cf(),bT(1515,`, and every client uses it, while keeping its base URL, headers, retry policy, and interceptors. The stub only has to return a standard `),Aa(1516,`code`),bT(1517,`Response`),cf(),bT(1518,`:`),cf(),Aa(1519,`app-copy-button`,27)(1520,`span`,28),bT(1521),LT(1522,`extension`),Wa(1523,`app-tabs`,null,17),cf(),Aa(1525,`pre`)(1526,`code`,29),bT(1527,`
import { Test } from '@nestjs/testing';
import { HttpClientModule } from '@nestjs/http-client';
import { vi } from 'vitest';
import { ReposModule } from './repos.module.js';
import { ReposService } from './repos.service.js';

describe('ReposService', () => {
  const fetch = vi.fn<typeof globalThis.fetch>();
  let repos: ReposService;

  beforeEach(async () => {
    fetch.mockReset();
    const moduleRef = await Test.createTestingModule({
      imports: [HttpClientModule.forRoot({ fetch }), ReposModule],
    }).compile();
    await moduleRef.init();
    repos = moduleRef.get(ReposService);
  });

  it('lists the public repositories of an organization', async () => {
    fetch.mockResolvedValueOnce(Response.json([{ name: 'nest' }]));

    await expect(repos.findAll('nestjs')).resolves.toEqual([{ name: 'nest' }]);
    const [url] = fetch.mock.calls[0];
    expect(String(url)).toBe(
      'https://api.github.com/orgs/nestjs/repos?type=public&sort=updated&topic=nest&topic=typescript',
    );
  });

  it('retries a 503', async () => {
    fetch
      .mockResolvedValueOnce(new Response(null, { status: 503 }))
      .mockResolvedValueOnce(Response.json([]));

    await expect(repos.findAll('nestjs')).resolves.toEqual([]);
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});
`),cf()()(),Aa(1528,`p`),bT(1529,`Give every call its own `),Aa(1530,`code`),bT(1531,`Response`),cf(),bT(1532,`, as `),Aa(1533,`code`),bT(1534,`mockResolvedValueOnce()`),cf(),bT(1535,` does above: a response body can be read only once, so `),Aa(1536,`code`),bT(1537,`mockResolvedValue()`),cf(),bT(1538,` would hand an already-read response to a retry. A client that sets its own `),Aa(1539,`code`),bT(1540,`fetch`),cf(),bT(1541,` option keeps it, since a client's settings win over the `),Aa(1542,`code`),bT(1543,`forRoot()`),cf(),bT(1544,` defaults. A client without one calls `),Aa(1545,`code`),bT(1546,`globalThis.fetch`),cf(),bT(1547,` on every request, so `),Aa(1548,`code`),bT(1549,`vi.stubGlobal('fetch', stub)`),cf(),bT(1550,` works too.`),cf(),Aa(1551,`p`),bT(1552,`For an end-to-end test of an application that already calls `),Aa(1553,`code`),bT(1554,`forRoot()`),cf(),bT(1555,`, override its options instead. This replaces every `),Aa(1556,`code`),bT(1557,`forRoot()`),cf(),bT(1558,` option, except the interceptors passed directly to `),Aa(1559,`code`),bT(1560,`forRoot()`),cf(),bT(1561,` or next to `),Aa(1562,`code`),bT(1563,`useFactory`),cf(),bT(1564,`, which keep running:`),cf(),Aa(1565,`app-copy-button`)(1566,`pre`)(1567,`code`,29),bT(1568,`
const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
  .overrideProvider(HTTP_CLIENT_MODULE_OPTIONS)
  .useValue({ fetch })
  .compile();
`),cf()()(),Aa(1569,`p`),bT(1570,`To keep HTTP out of a test entirely, replace the client itself with `),Aa(1571,`code`),bT(1572,`overrideProvider(getHttpClientToken('github'))`),cf(),bT(1573,`. Outside of Nest, for example in a script, create a client with `),Aa(1574,`code`),bT(1575,`new HttpClient(options)`),cf(),bT(1576,`.`),cf(),Aa(1577,`h4`,54)(1578,`span`),bT(1579,`Working with RxJS`),cf()(),Aa(1580,`p`),bT(1581,`To compose a request with RxJS operators, wrap it in an Observable. `),Aa(1582,`code`),bT(1583,`defer()`),cf(),bT(1584,` starts the request when the Observable is subscribed to, while `),Aa(1585,`code`),bT(1586,`from()`),cf(),bT(1587,` starts it immediately:`),cf(),Aa(1588,`app-copy-button`)(1589,`pre`)(1590,`code`,29),bT(1591,`
import { defer } from 'rxjs';

const cats$ = defer(() => this.http.get<Cat[]>('/cats'));
`),cf()()(),Aa(1592,`p`),bT(1593,`Neither one cancels the request on unsubscribe. When you need that, for example with `),Aa(1594,`code`),bT(1595,`switchMap()`),cf(),bT(1596,`, connect unsubscription to an `),Aa(1597,`code`),bT(1598,`AbortController`),cf(),bT(1599,`:`),cf(),Aa(1600,`app-copy-button`)(1601,`pre`)(1602,`code`,29),bT(1603,`
import { Observable } from 'rxjs';

function fromRequest<T>(send: (signal: AbortSignal) => Promise<T>): Observable<T> {
  return new Observable<T>((subscriber) => {
    const controller = new AbortController();
    send(controller.signal).then(
      (value) => {
        subscriber.next(value);
        subscriber.complete();
      },
      (error) => subscriber.error(error),
    );
    return () => controller.abort();
  });
}

const cats$ = fromRequest((signal) => this.http.get<Cat[]>('/cats', { signal }));
`),cf()()(),Aa(1604,`h4`,55)(1605,`span`),bT(1606,`Migrating from `),Aa(1607,`code`),bT(1608,`@nestjs/axios`),cf()()(),Aa(1609,`p`),bT(1610,`The `),Aa(1611,`code`),bT(1612,`@nestjs/axios`),cf(),bT(1613,` package remains available, and both packages can be installed side by side while you migrate. The following table maps its features to `),Aa(1614,`code`),bT(1615,`@nestjs/http-client`),cf(),bT(1616,`:`),cf(),Aa(1617,`table`)(1618,`thead`)(1619,`tr`)(1620,`th`)(1621,`code`),bT(1622,`@nestjs/axios`),cf()(),Aa(1623,`th`)(1624,`code`),bT(1625,`@nestjs/http-client`),cf()()()(),Aa(1626,`tbody`)(1627,`tr`)(1628,`td`)(1629,`code`),bT(1630,`HttpModule.register()`),cf(),bT(1631,` with `),Aa(1632,`code`),bT(1633,`baseURL`),cf()(),Aa(1634,`td`)(1635,`code`),bT(1636,`HttpClientModule.register()`),cf(),bT(1637,` with `),Aa(1638,`code`),bT(1639,`baseUrl`),cf()()(),Aa(1640,`tr`)(1641,`td`)(1642,`code`),bT(1643,`HttpModule.registerAsync()`),cf()(),Aa(1644,`td`)(1645,`code`),bT(1646,`HttpClientModule.registerAsync()`),cf(),bT(1647,`, which also takes a `),Aa(1648,`code`),bT(1649,`name`),cf()()(),Aa(1650,`tr`)(1651,`td`)(1652,`code`),bT(1653,`HttpModuleOptionsFactory`),cf(),bT(1654,` with `),Aa(1655,`code`),bT(1656,`createHttpOptions()`),cf()(),Aa(1657,`td`)(1658,`code`),bT(1659,`HttpClientOptionsFactory`),cf(),bT(1660,` with `),Aa(1661,`code`),bT(1662,`createHttpClientOptions()`),cf()()(),Aa(1663,`tr`)(1664,`td`)(1665,`code`),bT(1666,`extraProviders`),cf(),bT(1667,` in `),Aa(1668,`code`),bT(1669,`registerAsync()`),cf()(),Aa(1670,`td`),bT(1671,`A module that exports the providers, passed in `),Aa(1672,`code`),bT(1673,`imports`),cf()()(),Aa(1674,`tr`)(1675,`td`),bT(1676,`One `),Aa(1677,`code`),bT(1678,`HttpService`),cf(),bT(1679,` per importing module`),cf(),Aa(1680,`td`),bT(1681,`Named clients, injected with `),Aa(1682,`code`),bT(1683,`@InjectHttpClient(name)`),cf()()(),Aa(1684,`tr`)(1685,`td`)(1686,`code`),bT(1687,`HttpService`),cf(),bT(1688,` methods, which return Observables`),cf(),Aa(1689,`td`)(1690,`code`),bT(1691,`HttpClient`),cf(),bT(1692,` methods, which return Promises`),cf()(),Aa(1693,`tr`)(1694,`td`)(1695,`code`),bT(1696,`firstValueFrom(this.httpService.get(url))`),cf()(),Aa(1697,`td`)(1698,`code`),bT(1699,`await this.http.get(url)`),cf()()(),Aa(1700,`tr`)(1701,`td`)(1702,`code`),bT(1703,`post(url, data)`),cf()(),Aa(1704,`td`)(1705,`code`),bT(1706,`post(url, options)`),cf(),bT(1707,`, with the data in `),Aa(1708,`code`),bT(1709,`json`),cf(),bT(1710,` (or `),Aa(1711,`code`),bT(1712,`body`),cf(),bT(1713,`)`),cf()(),Aa(1714,`tr`)(1715,`td`)(1716,`code`),bT(1717,`params`),cf(),bT(1718,` in the request config`),cf(),Aa(1719,`td`)(1720,`code`),bT(1721,`query`),cf(),bT(1722,`. Arrays repeat the key, where Axios writes `),Aa(1723,`code`),bT(1724,`key[]=`),cf(),bT(1725,`. In `),Aa(1726,`code`),bT(1727,`@nestjs/http-client`),cf(),bT(1728,`, `),Aa(1729,`code`),bT(1730,`params`),cf(),bT(1731,` fills `),Aa(1732,`code`),bT(1733,`:name`),cf(),bT(1734,` path segments, and throws for a key that matches none.`),cf()(),Aa(1735,`tr`)(1736,`td`)(1737,`code`),bT(1738,`response.headers['etag']`),cf()(),Aa(1739,`td`)(1740,`code`),bT(1741,`response.headers.get('etag')`),cf()()(),Aa(1742,`tr`)(1743,`td`)(1744,`code`),bT(1745,`AxiosError`),cf(),bT(1746,` with `),Aa(1747,`code`),bT(1748,`error.response?.status`),cf()(),Aa(1749,`td`)(1750,`code`),bT(1751,`HttpResponseError`),cf(),bT(1752,` with `),Aa(1753,`code`),bT(1754,`error.status`),cf(),bT(1755,` and `),Aa(1756,`code`),bT(1757,`error.body`),cf()()(),Aa(1758,`tr`)(1759,`td`)(1760,`code`),bT(1761,`error.code === 'ECONNABORTED'`),cf()(),Aa(1762,`td`)(1763,`code`),bT(1764,`HttpTimeoutError`),cf()()(),Aa(1765,`tr`)(1766,`td`)(1767,`code`),bT(1768,`validateStatus: () => true`),cf()(),Aa(1769,`td`)(1770,`code`),bT(1771,`throwOnHttpError: false`),cf()()(),Aa(1772,`tr`)(1773,`td`)(1774,`code`),bT(1775,`axiosRef`),cf(),bT(1776,` (the Axios instance)`),cf(),Aa(1777,`td`),bT(1778,`No underlying instance. Use the client's options, or pass a custom function as `),Aa(1779,`code`),bT(1780,`fetch`),cf(),bT(1781,`.`),cf()(),Aa(1782,`tr`)(1783,`td`)(1784,`code`),bT(1785,`axiosRef.interceptors.request.use()`),cf(),bT(1786,` and `),Aa(1787,`code`),bT(1788,`response.use()`),cf()(),Aa(1789,`td`)(1790,`code`),bT(1791,`interceptors`),cf(),bT(1792,`, with one function for both the request and the response`),cf()(),Aa(1793,`tr`)(1794,`td`)(1795,`code`),bT(1796,`httpsAgent`),cf(),bT(1797,` or `),Aa(1798,`code`),bT(1799,`proxy`),cf()(),Aa(1800,`td`)(1801,`code`),bT(1802,`dispatcher`),cf(),bT(1803,`, an undici `),Aa(1804,`code`),bT(1805,`Agent`),cf(),bT(1806,` or `),Aa(1807,`code`),bT(1808,`ProxyAgent`),cf()()(),Aa(1809,`tr`)(1810,`td`)(1811,`code`),bT(1812,`maxRedirects: 0`),cf()(),Aa(1813,`td`)(1814,`code`),bT(1815,`redirect: 'manual'`),cf()()(),Aa(1816,`tr`)(1817,`td`),bT(1818,`No retries, unless you add `),Aa(1819,`code`),bT(1820,`axios-retry`),cf()(),Aa(1821,`td`),bT(1822,`Retries on by default for idempotent methods. `),Aa(1823,`code`),bT(1824,`retry: false`),cf(),bT(1825,` restores the Axios behavior.`),cf()(),Aa(1826,`tr`)(1827,`td`)(1828,`code`),bT(1829,`timeout`),cf(),bT(1830,` for the whole request`),cf(),Aa(1831,`td`)(1832,`code`),bT(1833,`timeout`),cf(),bT(1834,` per attempt, also as a string such as `),Aa(1835,`code`),bT(1836,`'5s'`),cf()()(),Aa(1837,`tr`)(1838,`td`)(1839,`code`),bT(1840,`onUploadProgress`),cf(),bT(1841,`, `),Aa(1842,`code`),bT(1843,`onDownloadProgress`),cf()(),Aa(1844,`td`),bT(1845,`No equivalent. Count the bytes of a stream instead.`),cf()()()()(),Aa(1846,`a`,56),Wa(1847,`i`,57),Aa(1848,`span`),bT(1849,`Edit on GitHub`),cf()()()),c&2){let y=tT(76),k=tT(90),T=tT(135),j=tT(149),A=tT(177),I=tT(213),C=tT(253),R=tT(324),L=tT(990),q=tT(1064),B=tT(1129),M=tT(1193),P=tT(1216),F=tT(1259),D=tT(1304),N=tT(1350),U=tT(1524);zC(73),hf(` `,jT(74,17,`cats.module`,y.isJsActive),`
`),zC(14),hf(` `,jT(88,20,`cats.service`,k.isJsActive),`
`),zC(45),hf(` `,jT(133,23,`repos.module`,T.isJsActive),`
`),zC(14),hf(` `,jT(147,26,`repos.service`,j.isJsActive),`
`),zC(28),hf(` `,jT(175,29,`app.module`,A.isJsActive),`
`),zC(36),hf(` `,jT(211,32,`repos.module`,I.isJsActive),`
`),zC(40),hf(` `,jT(251,35,`github-client.config`,C.isJsActive),`
`),zC(71),hf(` `,jT(322,38,`repos.service`,R.isJsActive),`
`),zC(666),hf(` `,jT(988,41,`repos.service`,L.isJsActive),`
`),zC(74),hf(` `,jT(1062,44,`http-client-error.filter`,q.isJsActive),`
`),zC(65),hf(` `,jT(1127,47,`api-key.interceptor`,B.isJsActive),`
`),zC(64),hf(` `,jT(1191,50,`github-auth.interceptor`,M.isJsActive),`
`),zC(23),hf(` `,jT(1214,53,`repos.module`,P.isJsActive),`
`),zC(43),hf(` `,jT(1257,56,`http-logging.interceptor`,F.isJsActive),`
`),zC(45),hf(` `,jT(1302,59,`invoices.controller`,D.isJsActive),`
`),zC(46),hf(` `,jT(1348,62,`partner.module`,N.isJsActive),`
`),zC(174),hf(` `,jT(1522,65,`repos.service.spec`,U.isJsActive),`
`)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return d})();var Se=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-i18n`]],features:[xy],decls:2302,vars:158,consts:[[`contentReference`,``],[`appe5bd7cc0b2c66e8b2fa59e77f2122abba6d1f764`,``],[`app57bf8818544ca4c4870ecef1c3d4830257c0ef14`,``],[`app35c17dae38fefd4f28b3fb533cf7df3f47624887`,``],[`appd440de8e9523bfc9a1aea89a3ae9a28a87cdec4d`,``],[`appa300636b50e31ebfc36b1a44b234e702989daea8`,``],[`app7908b513d22b5997ac9f70d84d06f8e4d283ebd6`,``],[`appc9d8a274340bd8a3b74c8300017a7240d3e4eaad`,``],[`app90d512ac3b26cbed859bf75e412a42ecb21e84a5`,``],[`app2ec94ec5836177b59b1f0d7b54e8443eb6c3815c`,``],[`app8871b46cd2de4924fb1cce08107aabcf7292f085`,``],[`appe06163fccda56150b3f7f49ffde72742386d8070`,``],[`app890afdf0f81a81dc38ebd958f4cc21d8df73e55f`,``],[`app56e55818300d4f7ec0f83b2e7ec9d948f28f49fa`,``],[`appf40beed0232cb74a9bf9336b551d7a6c7f93c8c3`,``],[`appe95699e4bc5df0e45b279cf73650a8b9c35a9cc2`,``],[`app9077520117f69e8cbae2ccb182e7ab6a00f9a423`,``],[`app22ed3a49de4f8c684e01100972634bc37d2d4503`,``],[`app7c7cf921d05d3516b6bdb4746414257c28621a8f`,``],[`appa600ca400ae7299a067a08ecf22bca14e66563c1`,``],[`app31fcd67a7d7d08078162b9c83a05a2573cbf5c33`,``],[`app4540440b43921f7a6b6d7f0de0375f4b4efb64c4`,``],[`app5db6955d19d8859f705ae8e3a1984b02e049300d`,``],[`app940f090fa4183d3de37ee75b06526cb0899a73f2`,``],[`app74ff1d9d97261b894b236986f0c137b087cf6c6f`,``],[`app1cf6d505bdc0b4ba8d13f7b76e621a317761194e`,``],[`app7bcdfb9c7d8bc413ed91f05894ca466474b34b8b`,``],[`app390bacbfcde5f5e87eec3a67ae767d1bf910220e`,``],[`app5da512266e9f237184ab6c4e752e997bae5e3ae3`,``],[`app7c2c22466f5e65952768068582089efa7017e4ff`,``],[`appf987458676db6e61ff48bba48e4d679b75a23891`,``],[`app8baaaca81e6631ae8a40736483b9e9d04a86ead7`,``],[`appdf9439ecf9fd7b67f179a90f8d3472af4742186e`,``],[`app947f2f8a9bbd226e1f085fbd621ae29bf11d0d53`,``],[`app36fcf994f7c9c15d7c84279fc2ef228c6f266ea0`,``],[`appcfbca0b359a37fbeced0247d9e5716a9d410fc32`,``],[`app6a59a3da90ece4010e79bada2a841dde6396ecce`,``],[`app4f76d615e7b621bf77fd5028323897d06870a054`,``],[`appe12d4fc8b920ee028e09e896c307ffccf7bdf5ee`,``],[1,`content`],[1,`content-inner`],[`id`,`internationalization`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`add-catalogs-and-register-the-module`],[1,`language-text`],[`href`,`/application/i18n#translate-order-confirmations`],[1,`with-heading`],[1,`filename`],[1,`language-json`],[`href`,`/cli/monorepo#assets`],[1,`language-typescript`],[`href`,`/application/i18n#format-prices-and-dates`],[`href`,`/application/i18n#use-the-customers-saved-language`],[`appAnchor`,``,`id`,`translate-order-confirmations`],[`href`,`/application/i18n#use-icu-message-syntax`],[1,`info`],[`href`,`/application/i18n#localize-validation-messages`],[`appAnchor`,``,`id`,`localize-exceptions`],[`href`,`/exception-filters#binding-filters`],[`appAnchor`,``,`id`,`localize-validation-messages`],[`href`,`#with-zod`],[`href`,`/application/validation#using-the-built-in-validationpipe`],[`href`,`#try-it`],[`appAnchor`,``,`id`,`with-zod`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev/`],[`href`,`/application/validation#schema-based-validation`],[`appAnchor`,``,`id`,`localize-graphql-fields`],[`href`,`/graphql/quick-start#code-first`],[`href`,`/application/i18n#add-catalogs-and-register-the-module`],[1,`warning`],[`routerLink`,`/faq/global-prefix`],[`appAnchor`,``,`id`,`format-prices-and-dates`],[`appAnchor`,``,`id`,`use-the-customers-saved-language`],[`href`,`/application/mail#send-it-in-the-customers-language`],[`href`,`/security/authentication`],[`appAnchor`,``,`id`,`microservices-and-websocket-gateways`],[`appAnchor`,``,`id`,`handle-missing-keys-and-reload-catalogs`],[`href`,`/application/i18n#testing`],[`appAnchor`,``,`id`,`options-from-configuration`],[`href`,`/application/configuration`],[`appAnchor`,``,`id`,`a-custom-loader`],[`appAnchor`,``,`id`,`use-icu-message-syntax`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://formatjs.github.io/docs/intl-messageformat/`],[`appAnchor`,``,`id`,`try-it`],[`appAnchor`,``,`id`,`testing`],[`href`,`/fundamentals/testing#end-to-end-testing`],[`appAnchor`,``,`id`,`production-checklist`],[`href`,`/application/i18n#localize-graphql-fields`],[`appAnchor`,``,`id`,`reference`],[`appAnchor`,``,`id`,`module-options`],[`href`,`/application/i18n#options-from-configuration`],[`href`,`/application/i18n#handle-missing-keys-and-reload-catalogs`],[`appAnchor`,``,`id`,`locale-resolvers`],[`appAnchor`,``,`id`,`translation-api`],[`href`,`/application/i18n#localize-exceptions`],[`appAnchor`,``,`id`,`validation`],[`href`,`/application/i18n#with-zod`],[`appAnchor`,``,`id`,`errors`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/i18n.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,39,0)(2,`div`,40)(3,`h3`,41),bT(4,`Internationalization`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/i18n`),cf(),bT(8,` translates what a Nest application sends back (responses, errors, validation messages, GraphQL fields) into the language of each request.`),cf(),Aa(9,`p`),bT(10,`An online store for cat food and supplies sells to customers in the United States, Poland and Germany, and its order API should answer each of them in their own language. In this tutorial, you'll translate order confirmations (with correct Polish plurals), error messages, validation messages (from `),Aa(11,`code`),bT(12,`class-validator`),cf(),bT(13,`, or from Zod) and GraphQL fields. You'll also format prices and dates for each locale.`),cf(),Aa(14,`p`),bT(15,`The package resolves the locale once per request and keeps it in an `),Aa(16,`code`),bT(17,`AsyncLocalStorage`),cf(),bT(18,` store. Services, exceptions, pipes and GraphQL field resolvers translate without access to the request object, and every provider stays a singleton. It works the same on Express and Fastify, and for microservices and WebSocket gateways too.`),cf(),Aa(19,`h4`,42)(20,`span`),bT(21,`Installation`),cf()(),Aa(22,`p`),bT(23,`This tutorial extends the store's order API, which serves customers in English, Polish, and German. Orders are plain objects kept in memory. The example seeds order #1001: two bags of salmon kibble and three packs of clumping litter, $97.95 in total. It was placed on September 14, 2026 and has shipped since.`),cf(),Aa(24,`p`),bT(25,`Install the package:`),cf(),Aa(26,`pre`)(27,`code`,43),bT(28,`
$ npm i --save @nestjs/i18n
`),cf()(),Aa(29,`p`),bT(30,`The first section derives a type from a JSON file, so enable `),Aa(31,`code`),bT(32,`resolveJsonModule`),cf(),bT(33,` in your `),Aa(34,`code`),bT(35,`tsconfig.json`),cf(),bT(36,`.`),cf(),Aa(37,`h4`,44)(38,`span`),bT(39,`Add catalogs and register the module`),cf()(),Aa(40,`p`),bT(41,`Translations live in JSON files, one directory per locale. Each file becomes a namespace named after the file, so the `),Aa(42,`code`),bT(43,`notFound`),cf(),bT(44,` message in `),Aa(45,`code`),bT(46,`orders.json`),cf(),bT(47,` has the key `),Aa(48,`code`),bT(49,`orders.notFound`),cf(),bT(50,`.`),cf(),Aa(51,`pre`)(52,`code`,45),bT(53,`
src
\u251C\u2500\u2500 i18n
\u2502   \u251C\u2500\u2500 de
\u2502   \u2502   \u251C\u2500\u2500 orders.json
\u2502   \u2502   \u2514\u2500\u2500 validation.json
\u2502   \u251C\u2500\u2500 en
\u2502   \u2502   \u251C\u2500\u2500 orders.json
\u2502   \u2502   \u2514\u2500\u2500 validation.json
\u2502   \u251C\u2500\u2500 pl
\u2502   \u2502   \u251C\u2500\u2500 orders.json
\u2502   \u2502   \u2514\u2500\u2500 validation.json
\u2502   \u2514\u2500\u2500 translations.ts
\u251C\u2500\u2500 orders
\u2514\u2500\u2500 app.module.ts
`),cf()(),Aa(54,`p`),bT(55,`Here's the English catalog for orders. Words in curly braces are placeholders, filled from the arguments you pass when translating. `),Aa(56,`code`),bT(57,`items`),cf(),bT(58,` is a plural message, which `),Aa(59,`a`,46),bT(60,`Translate order confirmations`),cf(),bT(61,` explains.`),cf(),Aa(62,`app-copy-button`,47)(63,`span`,48),bT(64),LT(65,`extension`),Wa(66,`app-tabs`,null,1),cf(),Aa(68,`pre`)(69,`code`,49),bT(70,`
{
  "items": {
    "one": "{count} item",
    "other": "{count} items"
  },
  "confirmed": "Thank you! Order #{id} is confirmed: {items}.",
  "notFound": "Order #{id} was not found.",
  "invalidId": "The order number must be a whole number.",
  "unknownProduct": "Product {id} is not in our catalog.",
  "tooManyItems": {
    "one": "{path} must not exceed {count} item per product",
    "other": "{path} must not exceed {count} items per product"
  },
  "unsupportedCountry": "We only ship to the United States, Poland and Germany.",
  "status": {
    "pending": "Awaiting payment",
    "paid": "Paid",
    "shipped": "Shipped"
  }
}
`),cf()()(),Aa(71,`p`),bT(72,`The TypeScript compiler doesn't copy JSON files to `),Aa(73,`code`),bT(74,`dist`),cf(),bT(75,`. Add them to the `),Aa(76,`a`,50),bT(77,`assets`),cf(),bT(78,` in `),Aa(79,`code`),bT(80,`nest-cli.json`),cf(),bT(81,`:`),cf(),Aa(82,`pre`)(83,`code`,49),bT(84,`
{
  "compilerOptions": {
    "assets": ["i18n/**/*.json"],
    "watchAssets": true
  }
}
`),cf()(),Aa(85,`p`),bT(86,`Now register `),Aa(87,`code`),bT(88,`I18nModule`),cf(),bT(89,` in the root module:`),cf(),Aa(90,`app-copy-button`,47)(91,`span`,48),bT(92),LT(93,`extension`),Wa(94,`app-tabs`,null,2),cf(),Aa(96,`pre`)(97,`code`,51),bT(98,`
import { Module } from '@nestjs/common';
import {
  AcceptLanguageLocaleResolver,
  HeaderLocaleResolver,
  I18nModule,
  JsonI18nLoader,
  QueryLocaleResolver,
} from '@nestjs/i18n';
import { join } from 'node:path';
import { OrdersModule } from './orders/orders.module.js';

@Module({
  imports: [
    I18nModule.forRoot({
      defaultLocale: 'en',
      supportedLocales: ['en', 'pl', 'de'],
      fallbacks: { 'de-AT': 'de' },
      loader: new JsonI18nLoader({
        path: join(import.meta.dirname, 'i18n'),
      }),
      resolvers: [
        new QueryLocaleResolver('lang'),
        new HeaderLocaleResolver('x-lang'),
        new AcceptLanguageLocaleResolver(),
      ],
    }),
    OrdersModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(99,`p`),bT(100,`The module is global, and it mounts a middleware on every route that resolves the locale before guards, interceptors, pipes and handlers run. Resolution works like this:`),cf(),Aa(101,`ul`)(102,`li`)(103,`strong`),bT(104,`Resolvers run in order.`),cf(),bT(105,` Each returns one or more candidates, and the first candidate that matches a supported locale wins. Here, `),Aa(106,`code`),bT(107,`?lang=pl`),cf(),bT(108,` beats an `),Aa(109,`code`),bT(110,`x-lang`),cf(),bT(111,` header, which beats `),Aa(112,`code`),bT(113,`Accept-Language`),cf(),bT(114,`.`),cf(),Aa(115,`li`)(116,`strong`)(117,`code`),bT(118,`Accept-Language`),cf(),bT(119,` is parsed properly.`),cf(),bT(120,` Languages are ordered by their `),Aa(121,`code`),bT(122,`q`),cf(),bT(123,` values, and unsupported ones are skipped, so `),Aa(124,`code`),bT(125,`fr-CH, fr;q=0.9, de;q=0.8`),cf(),bT(126,` resolves to `),Aa(127,`code`),bT(128,`de`),cf(),bT(129,`.`),cf(),Aa(130,`li`)(131,`strong`),bT(132,`Regions match their base language.`),cf(),Aa(133,`code`),bT(134,`pl-PL`),cf(),bT(135,` resolves to `),Aa(136,`code`),bT(137,`pl`),cf(),bT(138,`. Nothing to configure.`),cf(),Aa(139,`li`)(140,`strong`)(141,`code`),bT(142,`fallbacks`),cf(),bT(143,` keeps a region as a locale of its own.`),cf(),Aa(144,`code`),bT(145,`de-AT`),cf(),bT(146,` resolves to `),Aa(147,`code`),bT(148,`de-AT`),cf(),bT(149,`, and its messages come from `),Aa(150,`code`),bT(151,`de`),cf(),bT(152,`. The locale matters when `),Aa(153,`a`,52),bT(154,`formatting prices and dates`),cf(),bT(155,`: Austrian customers get Austrian number formatting. A region that isn't listed, such as `),Aa(156,`code`),bT(157,`de-CH`),cf(),bT(158,`, resolves to plain `),Aa(159,`code`),bT(160,`de`),cf(),bT(161,`.`),cf(),Aa(162,`li`)(163,`strong`),bT(164,`Nothing matches, or there's no request at all`),cf(),bT(165,` (a cron job, a queue consumer): the `),Aa(166,`code`),bT(167,`defaultLocale`),cf(),bT(168,` is used.`),cf()(),Aa(169,`p`)(170,`code`),bT(171,`CookieLocaleResolver`),cf(),bT(172,` reads a cookie instead, `),Aa(173,`code`),bT(174,`lang`),cf(),bT(175,` by default, for a site that remembers the language a visitor picked. `),Aa(176,`a`,53),bT(177,`Use the customer's saved language`),cf(),bT(178,` adds a resolver of your own.`),cf(),Aa(179,`p`),bT(180,`Every response says which locale it was written in. The middleware sets `),Aa(181,`code`),bT(182,`Content-Language`),cf(),bT(183,` to the resolved locale and adds the headers the resolvers read to `),Aa(184,`code`),bT(185,`Vary`),cf(),bT(186,`, here `),Aa(187,`code`),bT(188,`Vary: x-lang, Accept-Language`),cf(),bT(189,`, so caches keep one copy per language. Set `),Aa(190,`code`),bT(191,`responseHeaders: false`),cf(),bT(192,` to turn this off.`),cf(),Aa(193,`p`)(194,`code`),bT(195,`supportedLocales`),cf(),bT(196,` is optional and defaults to the directories the loader finds. Pinning it means a stray directory never becomes a locale.`),cf(),Aa(197,`p`),bT(198,`Finally, give your keys a type. The English catalog is the source of truth, and a type-only import reads its shape at compile time without loading the file. The `),Aa(199,`code`),bT(200,`declare module`),cf(),bT(201,` block registers that shape with the package:`),cf(),Aa(202,`app-copy-button`,47)(203,`span`,48),bT(204),LT(205,`extension`),Wa(206,`app-tabs`,null,3),cf(),Aa(208,`pre`)(209,`code`,51),bT(210,`
import type orders from './en/orders.json';
import type validation from './en/validation.json';

export interface Translations {
  orders: typeof orders;
  validation: typeof validation;
}

declare module '@nestjs/i18n' {
  interface I18nTypes {
    translations: Translations;
  }
}
`),cf()()(),Aa(211,`p`),bT(212,`From now on, `),Aa(213,`code`),bT(214,`I18nService`),cf(),bT(215,` and the helper functions you'll use to localize exceptions and validation messages, `),Aa(216,`code`),bT(217,`t()`),cf(),bT(218,`, `),Aa(219,`code`),bT(220,`i18nValidationMessage()`),cf(),bT(221,` and `),Aa(222,`code`),bT(223,`i18nIssueMessage()`),cf(),bT(224,`, accept only keys that exist in the English catalog. A typo such as `),Aa(225,`code`),bT(226,`orders.notFund`),cf(),bT(227,` fails to compile, and so does `),Aa(228,`code`),bT(229,`orders.status`),cf(),bT(230,`, because it's a namespace and not a message. A provider that translates from catalogs of another shape, such as a library's, injects `),Aa(231,`code`),bT(232,`I18nService<OtherTranslations>`),cf(),bT(233,`, which checks keys against `),Aa(234,`code`),bT(235,`OtherTranslations`),cf(),bT(236,` instead.`),cf(),Aa(237,`h4`,54)(238,`span`),bT(239,`Translate order confirmations`),cf()(),Aa(240,`p`),bT(241,`When a customer places an order, the API confirms it with a message that includes the number of items. Inject `),Aa(242,`code`),bT(243,`I18nService`),cf(),bT(244,` into `),Aa(245,`code`),bT(246,`OrdersService`),cf(),bT(247,` and call `),Aa(248,`code`),bT(249,`t()`),cf(),bT(250,`:`),cf(),Aa(251,`app-copy-button`,47)(252,`span`,48),bT(253),LT(254,`extension`),Wa(255,`app-tabs`,null,4),cf(),Aa(257,`pre`)(258,`code`,51),bT(259,`
@Injectable()
export class OrdersService {
  // ...
  constructor(private readonly i18nService: I18nService) {}

  create(userId: number, dto: CreateOrderDto) {
    const order: Order = {
      id: this.nextId++,
      userId,
      items: dto.items,
      total: this.priceOf(dto.items),
      status: 'pending',
      createdAt: new Date(),
    };
    this.orders.push(order);

    return {
      id: order.id,
      message: this.i18nService.t('orders.confirmed', {
        args: { id: order.id, items: this.describeItems(order) },
      }),
    };
  }

  describeItems(order: Order): string {
    const count = order.items.reduce((sum, item) => sum + item.quantity, 0);
    return this.i18nService.t('orders.items', { args: { count } });
  }
  // ...
}
`),cf()()(),Aa(260,`p`),bT(261,`You don't pass a locale to `),Aa(262,`code`),bT(263,`t()`),cf(),bT(264,`. It reads the one resolved for the current request, even though `),Aa(265,`code`),bT(266,`OrdersService`),cf(),bT(267,` is a singleton that never sees the request. Set the `),Aa(268,`code`),bT(269,`locale`),cf(),bT(270,` option only to override it, for example when a background job emails a customer in the language saved on their profile. The option is matched the way a request locale is: `),Aa(271,`code`),bT(272,`pl-PL`),cf(),bT(273,` becomes `),Aa(274,`code`),bT(275,`pl`),cf(),bT(276,`, and a locale you don't support becomes the default locale, so an outdated profile value can't break the job.`),cf(),Aa(277,`p`),bT(278,`The controller has nothing locale-specific in it:`),cf(),Aa(279,`app-copy-button`,47)(280,`span`,48),bT(281),LT(282,`extension`),Wa(283,`app-tabs`,null,5),cf(),Aa(285,`pre`)(286,`code`,51),bT(287,`
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() dto: CreateOrderDto) {
    // The Authentication tutorial replaces the fixed customer with the signed-in user.
    return this.ordersService.create(1, dto);
  }
}
`),cf()()(),Aa(288,`p`),bT(289,`English and German have two plural forms. Polish has four, and which one a number takes depends on its last digits. A plural message is an object keyed by plural category:`),cf(),Aa(290,`app-copy-button`,47)(291,`span`,48),bT(292),LT(293,`extension`),Wa(294,`app-tabs`,null,6),cf(),Aa(296,`pre`)(297,`code`,49),bT(298,`
{
  "items": {
    "one": "{count} produkt",
    "few": "{count} produkty",
    "many": "{count} produkt\xF3w",
    "other": "{count} produktu"
  },
  "confirmed": "Dzi\u0119kujemy! Zam\xF3wienie #{id} zosta\u0142o przyj\u0119te: {items}.",
  "notFound": "Nie znaleziono zam\xF3wienia #{id}.",
  "invalidId": "Numer zam\xF3wienia musi by\u0107 liczb\u0105 ca\u0142kowit\u0105.",
  "unknownProduct": "Produktu {id} nie ma w naszym katalogu.",
  "tooManyItems": {
    "one": "{path}: mo\u017Cna zam\xF3wi\u0107 najwy\u017Cej {count} sztuk\u0119 jednego produktu",
    "few": "{path}: mo\u017Cna zam\xF3wi\u0107 najwy\u017Cej {count} sztuki jednego produktu",
    "many": "{path}: mo\u017Cna zam\xF3wi\u0107 najwy\u017Cej {count} sztuk jednego produktu",
    "other": "{path}: mo\u017Cna zam\xF3wi\u0107 najwy\u017Cej {count} sztuki jednego produktu"
  },
  "unsupportedCountry": "Wysy\u0142amy tylko do Stan\xF3w Zjednoczonych, Polski i Niemiec.",
  "status": {
    "pending": "Oczekuje na p\u0142atno\u015B\u0107",
    "paid": "Op\u0142acone",
    "shipped": "Wys\u0142ane"
  }
}
`),cf()()(),Aa(299,`p`),bT(300,`When the arguments include a numeric `),Aa(301,`code`),bT(302,`count`),cf(),bT(303,`, the service picks the form with `),Aa(304,`code`),bT(305,`Intl.PluralRules`),cf(),bT(306,` for the message's locale. If a category is missing, `),Aa(307,`code`),bT(308,`other`),cf(),bT(309,` is used. The German file mirrors the English one, with `),Aa(310,`code`),bT(311,`one`),cf(),bT(312,` and `),Aa(313,`code`),bT(314,`other`),cf(),bT(315,` forms only.`),cf(),Aa(316,`table`)(317,`thead`)(318,`tr`)(319,`th`),bT(320,`Items`),cf(),Aa(321,`th`),bT(322,`English`),cf(),Aa(323,`th`),bT(324,`Polish`),cf(),Aa(325,`th`),bT(326,`German`),cf()()(),Aa(327,`tbody`)(328,`tr`)(329,`td`),bT(330,`1`),cf(),Aa(331,`td`),bT(332,`1 item`),cf(),Aa(333,`td`),bT(334,`1 produkt`),cf(),Aa(335,`td`),bT(336,`1 Produkt`),cf()(),Aa(337,`tr`)(338,`td`),bT(339,`2`),cf(),Aa(340,`td`),bT(341,`2 items`),cf(),Aa(342,`td`),bT(343,`2 produkty`),cf(),Aa(344,`td`),bT(345,`2 Produkte`),cf()(),Aa(346,`tr`)(347,`td`),bT(348,`5`),cf(),Aa(349,`td`),bT(350,`5 items`),cf(),Aa(351,`td`),bT(352,`5 produktów`),cf(),Aa(353,`td`),bT(354,`5 Produkte`),cf()(),Aa(355,`tr`)(356,`td`),bT(357,`22`),cf(),Aa(358,`td`),bT(359,`22 items`),cf(),Aa(360,`td`),bT(361,`22 produkty`),cf(),Aa(362,`td`),bT(363,`22 Produkte`),cf()()()(),Aa(364,`p`),bT(365,`The confirmation is composed from two messages: the plural phrase is translated first and then inserted into the sentence. Placeholders can't nest, so this is how you combine them.`),cf(),Aa(366,`p`),bT(367,`A placeholder's name is made of letters, digits and underscores. A placeholder you pass no argument for stays in the text as written, and so does any other text in braces. To write a brace next to a name, double it: `),Aa(368,`code`),bT(369),cf(),bT(370,` prints `),Aa(371,`code`),bT(372),cf(),bT(373,`. For select, ordinals and exact matches, `),Aa(374,`a`,55),bT(375,`use ICU message syntax`),cf(),bT(376,`.`),cf(),Aa(377,`blockquote`,56)(378,`strong`),bT(379,`Hint`),cf(),bT(380,` Only the `),Aa(381,`code`),bT(382,`count`),cf(),bT(383,` argument selects a plural form, so name it `),Aa(384,`code`),bT(385,`count`),cf(),bT(386,` in every plural message you translate with `),Aa(387,`code`),bT(388,`t()`),cf(),bT(389,`. Thanks to the registered catalog type, `),Aa(390,`code`),bT(391,`t()`),cf(),bT(392,` doesn't compile without it for plural messages. Validation messages get a `),Aa(393,`code`),bT(394,`count`),cf(),bT(395,` automatically, as `),Aa(396,`a`,57),bT(397,`Localize validation messages`),cf(),bT(398,` shows.
`),cf(),Aa(399,`h4`,58)(400,`span`),bT(401,`Localize exceptions`),cf()(),Aa(402,`p`),bT(403,`A missing order should produce a 404 in the customer's language. Translate the message when you throw:`),cf(),Aa(404,`app-copy-button`,47)(405,`span`,48),bT(406),LT(407,`extension`),Wa(408,`app-tabs`,null,7),cf(),Aa(410,`pre`)(411,`code`,51),bT(412,`
findOne(id: number): Order {
  const order = this.orders.find((order) => order.id === id);
  if (!order) {
    throw new NotFoundException(this.i18nService.t('orders.notFound', { args: { id } }));
  }
  return order;
}
`),cf()()(),Aa(413,`p`),bT(414,`The exception carries the finished text, so there is nothing to configure: Nest's default exception filter, your own filters and GraphQL error formatting all receive the translated message. `),Aa(415,`code`),bT(416,`GET /orders/999`),cf(),bT(417,` with `),Aa(418,`code`),bT(419,`x-lang: pl`),cf(),bT(420,` returns:`),cf(),Aa(421,`pre`)(422,`code`,49),bT(423,`
{
  "message": "Nie znaleziono zam\xF3wienia #999.",
  "error": "Not Found",
  "statusCode": 404
}
`),cf()(),Aa(424,`p`),bT(425,`Code that has no `),Aa(426,`code`),bT(427,`I18nService`),cf(),bT(428,` at hand can use the `),Aa(429,`code`),bT(430,`t()`),cf(),bT(431,` function instead. It translates for the current request in the same way. Built-in pipes such as `),Aa(432,`code`),bT(433,`ParseIntPipe`),cf(),bT(434,` produce English messages, so give the pipe that parses order IDs an exception factory:`),cf(),Aa(435,`app-copy-button`,47)(436,`span`,48),bT(437),LT(438,`extension`),Wa(439,`app-tabs`,null,8),cf(),Aa(441,`pre`)(442,`code`,51),bT(443,`
const orderIdPipe = new ParseIntPipe({
  exceptionFactory: () => new BadRequestException(t('orders.invalidId')),
});

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  // ...

  @Get(':id')
  findOne(@Param('id', orderIdPipe) id: number) {
    return this.ordersService.getSummary(id);
  }
}
`),cf()()(),Aa(444,`p`),bT(445,`The pipe is created once, outside dependency injection, and still answers each request in its own language. You'll write `),Aa(446,`code`),bT(447,`getSummary()`),cf(),bT(448,` in `),Aa(449,`a`,52),bT(450,`Format prices and dates`),cf(),bT(451,`.`),cf(),Aa(452,`p`),bT(453,`If your API shapes errors with its own `),Aa(454,`a`,59),bT(455,`exception filter`),cf(),bT(456,`, for example as RFC 9457 problem details, the filter reads the translated message like any other:`),cf(),Aa(457,`app-copy-button`,47)(458,`span`,48),bT(459),LT(460,`extension`),Wa(461,`app-tabs`,null,9),cf(),Aa(463,`pre`)(464,`code`,51),bT(465,`
import {
  Catch,
  NotFoundException,
  type ArgumentsHost,
  type ExceptionFilter,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch(NotFoundException)
export class ProblemDetailsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: NotFoundException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const response = host.switchToHttp().getResponse();
    httpAdapter.setHeader(response, 'Content-Type', 'application/problem+json');
    httpAdapter.reply(
      response,
      { type: 'about:blank', title: 'Not Found', status: 404, detail: exception.message },
      404,
    );
  }
}
`),cf()()(),Aa(466,`p`),bT(467,`With the filter registered, the same request returns:`),cf(),Aa(468,`pre`)(469,`code`,49),bT(470,`
{
  "type": "about:blank",
  "title": "Not Found",
  "status": 404,
  "detail": "Nie znaleziono zam\xF3wienia #999."
}
`),cf()(),Aa(471,`h4`,60)(472,`span`),bT(473,`Localize validation messages`),cf()(),Aa(474,`p`),bT(475,`This step assumes your application validates request bodies with `),Aa(476,`code`),bT(477,`class-validator`),cf(),bT(478,`; if it validates with Zod or another Standard Schema library, read on to `),Aa(479,`a`,61),bT(480,`With Zod`),cf(),bT(481,`. `),Aa(482,`code`),bT(483,`I18nValidationPipe`),cf(),bT(484,` is a drop-in replacement for Nest's `),Aa(485,`a`,62)(486,`code`),bT(487,`ValidationPipe`),cf()(),bT(488,`: it accepts the same options and only translates the messages. Bind it where `),Aa(489,`code`),bT(490,`ValidationPipe`),cf(),bT(491,` was, here as an `),Aa(492,`code`),bT(493,`APP_PIPE`),cf(),bT(494,` provider of `),Aa(495,`code`),bT(496,`AppModule`),cf(),bT(497,`:`),cf(),Aa(498,`app-copy-button`,47)(499,`span`,48),bT(500),LT(501,`extension`),Wa(502,`app-tabs`,null,10),cf(),Aa(504,`pre`)(505,`code`,51),bT(506,`
providers: [
  {
    provide: APP_PIPE,
    useValue: new I18nValidationPipe({ whitelist: true, transform: true }),
  },
],
`),cf()()(),Aa(507,`p`),bT(508,`Start with the DTO for new orders. It uses `),Aa(509,`code`),bT(510,`class-validator`),cf(),bT(511,` decorators without any messages:`),cf(),Aa(512,`app-copy-button`,47)(513,`span`,48),bT(514),LT(515,`extension`),Wa(516,`app-tabs`,null,11),cf(),Aa(518,`pre`)(519,`code`,51),bT(520,`
import { i18nValidationMessage } from '@nestjs/i18n';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsInt, IsString, Max, Min, ValidateNested } from 'class-validator';

export class OrderItemDto {
  @IsString()
  productId: string;

  @IsInt()
  @Min(1)
  @Max(10, { message: i18nValidationMessage('orders.tooManyItems') })
  quantity: number;
}

export class CreateOrderDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
`),cf()()(),Aa(521,`p`),bT(522,`A constraint without a `),Aa(523,`code`),bT(524,`message`),cf(),bT(525,` is looked up in the `),Aa(526,`code`),bT(527,`validation`),cf(),bT(528,` namespace by constraint name: `),Aa(529,`code`),bT(530,`@IsInt()`),cf(),bT(531,` reads `),Aa(532,`code`),bT(533,`validation.isInt`),cf(),bT(534,`, and `),Aa(535,`code`),bT(536,`@Min()`),cf(),bT(537,` reads `),Aa(538,`code`),bT(539,`validation.min`),cf(),bT(540,`. `),Aa(541,`code`),bT(542,`i18nValidationMessage()`),cf(),bT(543,` points a single constraint at a key of your choice, here a store-specific message for the item limit. Messages you write as plain strings are left alone. A message can use these placeholders:`),cf(),Aa(544,`ul`)(545,`li`)(546,`code`),bT(547,`property`),cf(),bT(548,`: the field name, such as `),Aa(549,`code`),bT(550,`quantity`),cf(),bT(551,`.`),cf(),Aa(552,`li`)(553,`code`),bT(554,`path`),cf(),bT(555,`: the dotted path from the DTO, such as `),Aa(556,`code`),bT(557,`items.1.quantity`),cf(),bT(558,`. For a top-level field, it's the same as `),Aa(559,`code`),bT(560,`property`),cf(),bT(561,`.`),cf(),Aa(562,`li`)(563,`code`),bT(564,`value`),cf(),bT(565,`: the rejected value, when it's a string, number or boolean.`),cf(),Aa(566,`li`)(567,`code`),bT(568,`constraint1`),cf(),bT(569,`, `),Aa(570,`code`),bT(571,`constraint2`),cf(),bT(572,` and so on: the decorator's arguments. A list, such as the values `),Aa(573,`code`),bT(574,`@IsIn()`),cf(),bT(575,` accepts, reads `),Aa(576,`code`),bT(577,`US, PL, DE`),cf(),bT(578,`.`),cf(),Aa(579,`li`)(580,`code`),bT(581,`count`),cf(),bT(582,`: the first numeric argument, so a plural message agrees with it. `),Aa(583,`code`),bT(584,`@Max(10)`),cf(),bT(585,` selects the form for 10.`),cf()(),Aa(586,`p`),bT(587,`The item limit is a plural message (see the Polish catalog in `),Aa(588,`a`,46),bT(589,`Translate order confirmations`),cf(),bT(590,`), so `),Aa(591,`code`),bT(592,`@Max(10)`),cf(),bT(593,` reads "10 sztuk" in Polish. Here is the Polish `),Aa(594,`code`),bT(595,`validation`),cf(),bT(596,` catalog for the constraints this tutorial uses. `),Aa(597,`code`),bT(598,`minLength`),cf(),bT(599,` is a plural message too, so `),Aa(600,`code`),bT(601,`@MinLength(2)`),cf(),bT(602,` reads "2 znaki" and `),Aa(603,`code`),bT(604,`@MinLength(5)`),cf(),bT(605,` "5 znaków":`),cf(),Aa(606,`app-copy-button`,47)(607,`span`,48),bT(608),LT(609,`extension`),Wa(610,`app-tabs`,null,12),cf(),Aa(612,`pre`)(613,`code`,49),bT(614,`
{
  "isInt": "{path} musi by\u0107 liczb\u0105 ca\u0142kowit\u0105",
  "isString": "{path} musi by\u0107 tekstem",
  "min": "{path} musi wynosi\u0107 co najmniej {constraint1}",
  "arrayNotEmpty": "{path} musi zawiera\u0107 co najmniej jeden element",
  "minLength": {
    "one": "{path} musi mie\u0107 co najmniej {count} znak",
    "few": "{path} musi mie\u0107 co najmniej {count} znaki",
    "many": "{path} musi mie\u0107 co najmniej {count} znak\xF3w",
    "other": "{path} musi mie\u0107 co najmniej {count} znaku"
  },
  "matches": "{path} ma nieprawid\u0142owy format"
}
`),cf()()(),Aa(615,`p`),bT(616,`A constraint that has no translation keeps the `),Aa(617,`code`),bT(618,`class-validator`),cf(),bT(619,` message, so you can translate the constraints you use one at a time.`),cf(),Aa(620,`p`),bT(621,`For nested objects, Nest's `),Aa(622,`code`),bT(623,`ValidationPipe`),cf(),bT(624,` puts the parent path in front of each message. `),Aa(625,`code`),bT(626,`I18nValidationPipe`),cf(),bT(627,` leaves translated messages as they are, so each message decides for itself: `),Aa(628,`code`),bT(629,`path`),cf(),bT(630,` gives `),Aa(631,`code`),bT(632,`items.1.quantity`),cf(),bT(633,`, and `),Aa(634,`code`),bT(635,`property`),cf(),bT(636,` gives just `),Aa(637,`code`),bT(638,`quantity`),cf(),bT(639,`. Messages without a translation keep the prefix.`),cf(),Aa(640,`p`),bT(641,`Customers set a shipping address on an order. Its DTO relies on the `),Aa(642,`code`),bT(643,`minLength`),cf(),bT(644,` and `),Aa(645,`code`),bT(646,`matches`),cf(),bT(647,` entries of the catalog, and names a store-specific message for the country:`),cf(),Aa(648,`app-copy-button`,47)(649,`span`,48),bT(650),LT(651,`extension`),Wa(652,`app-tabs`,null,13),cf(),Aa(654,`pre`)(655,`code`,51),bT(656,`
import { i18nValidationMessage } from '@nestjs/i18n';
import { IsIn, Matches, MinLength } from 'class-validator';

export class ShippingAddressDto {
  @MinLength(2)
  recipient: string;

  @MinLength(2)
  city: string;

  @Matches(/^[0-9-]{5,6}$/)
  postalCode: string;

  @IsIn(['US', 'PL', 'DE'], { message: i18nValidationMessage('orders.unsupportedCountry') })
  country: 'US' | 'PL' | 'DE';
}
`),cf()()(),Aa(657,`app-copy-button`,47)(658,`span`,48),bT(659),LT(660,`extension`),Wa(661,`app-tabs`,null,14),cf(),Aa(663,`pre`)(664,`code`,51),bT(665,`
@Put(':id/shipping-address')
updateShippingAddress(
  @Param('id', orderIdPipe) id: number,
  @Body() address: ShippingAddressDto,
) {
  return this.ordersService.updateShippingAddress(id, address);
}
`),cf()()(),Aa(666,`p`),bT(667,`A German customer who sends a one-letter recipient, a four-digit postal code and `),Aa(668,`code`),bT(669,`AT`),cf(),bT(670,` as the country gets three translated messages back. The `),Aa(671,`a`,63),bT(672,`Try it`),cf(),bT(673,` section shows the response.`),cf(),Aa(674,`h5`,64)(675,`span`),bT(676,`With Zod`),cf()(),Aa(677,`p`),bT(678,`If your application validates with Zod, Valibot, ArkType or another `),Aa(679,`a`,65),bT(680,`Standard Schema`),cf(),bT(681,` library, bind `),Aa(682,`code`),bT(683,`I18nStandardSchemaValidationPipe`),cf(),bT(684,` instead of `),Aa(685,`code`),bT(686,`I18nValidationPipe`),cf(),bT(687,`. It's the drop-in replacement for Nest's `),Aa(688,`a`,66)(689,`code`),bT(690,`StandardSchemaValidationPipe`),cf()(),bT(691,`, and an application binds one of the two pipes, not both:`),cf(),Aa(692,`app-copy-button`,47)(693,`span`,48),bT(694),LT(695,`extension`),Wa(696,`app-tabs`,null,15),cf(),Aa(698,`pre`)(699,`code`,51),bT(700,`
providers: [{ provide: APP_PIPE, useValue: new I18nStandardSchemaValidationPipe() }],
`),cf()()(),Aa(701,`p`),bT(702,`Here are the same inputs as Zod schemas. Library messages are plain strings, so `),Aa(703,`code`),bT(704,`i18nIssueMessage()`),cf(),bT(705,` encodes a translation key in the message itself, which works with any Standard Schema library:`),cf(),Aa(706,`app-copy-button`,47)(707,`span`,48),bT(708),LT(709,`extension`),Wa(710,`app-tabs`,null,16),cf(),Aa(712,`pre`)(713,`code`,51),bT(714,`
import { i18nIssueMessage } from '@nestjs/i18n';
import { z } from 'zod';

export const orderItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().min(1).max(10, i18nIssueMessage('orders.tooManyItems')),
});

export const createOrderSchema = z.object({
  items: z.array(orderItemSchema).nonempty(),
});
export type CreateOrderDto = z.infer<typeof createOrderSchema>;

export const shippingAddressSchema = z.object({
  recipient: z.string().min(2),
  city: z.string().min(2),
  postalCode: z.string().regex(/^[0-9-]{5,6}$/),
  country: z.enum(['US', 'PL', 'DE'], i18nIssueMessage('orders.unsupportedCountry')),
});
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
`),cf()()(),Aa(715,`p`),bT(716,`The body parameters declare their schema instead of a class:`),cf(),Aa(717,`app-copy-button`,47)(718,`span`,48),bT(719),LT(720,`extension`),Wa(721,`app-tabs`,null,17),cf(),Aa(723,`pre`)(724,`code`,51),bT(725,`
import {
  createOrderSchema,
  shippingAddressSchema,
  type CreateOrderDto,
  type ShippingAddress,
} from './orders.schemas.js';
// ...
@Post()
create(@Body({ schema: createOrderSchema }) dto: CreateOrderDto) {
  // ...
}

@Put(':id/shipping-address')
updateShippingAddress(
  @Param('id', orderIdPipe) id: number,
  @Body({ schema: shippingAddressSchema }) address: ShippingAddress,
) {
  return this.ordersService.updateShippingAddress(id, address);
}
`),cf()()(),Aa(726,`p`),bT(727,`An issue without an explicit key is looked up by the code the library assigns, from the most specific key to the least:`),cf(),Aa(728,`ul`)(729,`li`)(730,`strong`),bT(731,`Format first.`),cf(),bT(732,` A failed regex reads `),Aa(733,`code`),bT(734,`validation.invalid_format.regex`),cf(),bT(735,`.`),cf(),Aa(736,`li`)(737,`strong`),bT(738,`Then the origin.`),cf(),bT(739,` Zod reports `),Aa(740,`code`),bT(741,`too_small`),cf(),bT(742,` for short strings, small numbers and short arrays alike, and says which in `),Aa(743,`code`),bT(744,`origin`),cf(),bT(745,`. A short string reads `),Aa(746,`code`),bT(747,`validation.too_small.string`),cf(),bT(748,`, so the catalog can talk about characters without getting numbers wrong.`),cf(),Aa(749,`li`)(750,`strong`),bT(751,`Then the code alone`),cf(),bT(752,`, such as `),Aa(753,`code`),bT(754,`validation.too_small`),cf(),bT(755,`.`),cf()(),Aa(756,`p`),bT(757,`Valibot's issue `),Aa(758,`code`),bT(759,`type`),cf(),bT(760,` works the same way. Messages can use the `),Aa(761,`code`),bT(762,`property`),cf(),bT(763,` and `),Aa(764,`code`),bT(765,`path`),cf(),bT(766,` placeholders as above, the library's own text as `),Aa(767,`code`),bT(768,`message`),cf(),bT(769,`, and the issue's parameters, such as `),Aa(770,`code`),bT(771,`minimum`),cf(),bT(772,` or `),Aa(773,`code`),bT(774,`expected`),cf(),bT(775,`. `),Aa(776,`code`),bT(777,`count`),cf(),bT(778,` holds the numeric `),Aa(779,`code`),bT(780,`minimum`),cf(),bT(781,` or `),Aa(782,`code`),bT(783,`maximum`),cf(),bT(784,`, so "2 znaki" and "5 znaków" both come out right, and so does `),Aa(785,`code`),bT(786,`orders.tooManyItems`),cf(),bT(787,` for `),Aa(788,`code`),bT(789,`.max(10)`),cf(),bT(790,`. Here is the Polish catalog again, with the issue-code entries in front of the constraint names:`),cf(),Aa(791,`app-copy-button`,47)(792,`span`,48),bT(793),LT(794,`extension`),Wa(795,`app-tabs`,null,18),cf(),Aa(797,`pre`)(798,`code`,49),bT(799,`
{
  "invalid_type": "{path} musi by\u0107 typu {expected}",
  "too_small": {
    "string": {
      "one": "{path} musi mie\u0107 co najmniej {count} znak",
      "few": "{path} musi mie\u0107 co najmniej {count} znaki",
      "many": "{path} musi mie\u0107 co najmniej {count} znak\xF3w",
      "other": "{path} musi mie\u0107 co najmniej {count} znaku"
    },
    "number": "{path} musi wynosi\u0107 co najmniej {minimum}",
    "array": "{path} musi zawiera\u0107 co najmniej jeden element"
  },
  "invalid_format": {
    "regex": "{path} ma nieprawid\u0142owy format"
  },
  "isInt": "{path} musi by\u0107 liczb\u0105 ca\u0142kowit\u0105",
  "isString": "{path} musi by\u0107 tekstem",
  "min": "{path} musi wynosi\u0107 co najmniej {constraint1}",
  "arrayNotEmpty": "{path} musi zawiera\u0107 co najmniej jeden element",
  "minLength": {
    "one": "{path} musi mie\u0107 co najmniej {count} znak",
    "few": "{path} musi mie\u0107 co najmniej {count} znaki",
    "many": "{path} musi mie\u0107 co najmniej {count} znak\xF3w",
    "other": "{path} musi mie\u0107 co najmniej {count} znaku"
  },
  "matches": "{path} ma nieprawid\u0142owy format"
}
`),cf()()(),Aa(800,`p`),bT(801,`With these entries, the invalid shipping address from the `),Aa(802,`a`,63),bT(803,`Try it`),cf(),bT(804,` section gets the same three German messages as with the class, and the invalid order reads:`),cf(),Aa(805,`pre`)(806,`code`,49),bT(807,`
{
  "message": [
    "items.0.quantity musi wynosi\u0107 co najmniej 1",
    "items.1.productId musi by\u0107 typu string",
    "items.1.quantity: mo\u017Cna zam\xF3wi\u0107 najwy\u017Cej 10 sztuk jednego produktu"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
`),cf()(),Aa(808,`p`),bT(809,`Issues without a translation keep Nest's usual format, the path followed by the library's message.`),cf(),Aa(810,`h4`,67)(811,`span`),bT(812,`Localize GraphQL fields`),cf()(),Aa(813,`p`),bT(814,`This step applies to an application that serves GraphQL with `),Aa(815,`code`),bT(816,`@nestjs/graphql`),cf(),bT(817,`. The mobile app reads orders over GraphQL, through the Apollo driver and a `),Aa(818,`a`,68),bT(819,`code first`),cf(),bT(820,` schema registered in `),Aa(821,`code`),bT(822,`AppModule`),cf(),bT(823,`:`),cf(),Aa(824,`app-copy-button`,47)(825,`span`,48),bT(826),LT(827,`extension`),Wa(828,`app-tabs`,null,19),cf(),Aa(830,`pre`)(831,`code`,51),bT(832,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: true,
}),
`),cf()()(),Aa(833,`p`),bT(834,`The object type exposes raw order data:`),cf(),Aa(835,`app-copy-button`,47)(836,`span`,48),bT(837),LT(838,`extension`),Wa(839,`app-tabs`,null,20),cf(),Aa(841,`pre`)(842,`code`,51),bT(843,`
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Order')
export class OrderModel {
  @Field(() => Int)
  id: number;

  @Field()
  status: string;

  @Field(() => Float)
  total: number;
}
`),cf()()(),Aa(844,`p`),bT(845,`Localized fields are computed by field resolvers, with the same `),Aa(846,`code`),bT(847,`I18nService`),cf(),bT(848,` the REST controller uses:`),cf(),Aa(849,`app-copy-button`,47)(850,`span`,48),bT(851),LT(852,`extension`),Wa(853,`app-tabs`,null,21),cf(),Aa(855,`pre`)(856,`code`,51),bT(857,`
import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { I18nService } from '@nestjs/i18n';
import type { Order } from './order.entity.js';
import { OrderModel } from './order.model.js';
import { OrdersService } from './orders.service.js';

@Resolver(() => OrderModel)
export class OrdersResolver {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly i18nService: I18nService,
  ) {}

  @Query(() => OrderModel)
  order(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.findOne(id);
  }

  @ResolveField(() => String)
  statusLabel(@Parent() order: Order) {
    return this.i18nService.t(\`orders.status.\${order.status}\`);
  }

  @ResolveField(() => String)
  items(@Parent() order: Order) {
    return this.ordersService.describeItems(order);
  }
}
`),cf()()(),Aa(858,`p`),bT(859,`The `),Aa(860,`code`),bT(861,`statusLabel`),cf(),bT(862,` key is a template literal built from the `),Aa(863,`code`),bT(864,`OrderStatus`),cf(),bT(865,` union, so the compiler still checks that every status has a label.`),cf(),Aa(866,`p`),bT(867,`On Express, Apollo is mounted after Nest's middleware, so the locale middleware from `),Aa(868,`a`,69),bT(869,`Add catalogs and register the module`),cf(),bT(870,` wraps every GraphQL operation. `),Aa(871,`code`),bT(872,`?lang`),cf(),bT(873,`, `),Aa(874,`code`),bT(875,`x-lang`),cf(),bT(876,` and `),Aa(877,`code`),bT(878,`Accept-Language`),cf(),bT(879,` work exactly as they do for REST, in resolvers, field resolvers and guards. The `),Aa(880,`code`),bT(881,`NotFoundException`),cf(),bT(882,` thrown by `),Aa(883,`code`),bT(884,`findOne()`),cf(),bT(885,` reaches the client translated, in `),Aa(886,`code`),bT(887,`errors[0].message`),cf(),bT(888,`.`),cf(),Aa(889,`blockquote`,70)(890,`strong`),bT(891,`Warning`),cf(),bT(892,` The locale middleware doesn't wrap subscriptions, which run over WebSockets, or a GraphQL driver that is mounted outside it. That includes the common case of a `),Aa(893,`a`,71),bT(894,`global prefix`),cf(),bT(895,`: Nest mounts the middleware under the prefix, while Apollo stays at `),Aa(896,`code`),bT(897,`/graphql`),cf(),bT(898,`, so set `),Aa(899,`code`),bT(900,`useGlobalPrefix: true`),cf(),bT(901,` on `),Aa(902,`code`),bT(903,`GraphQLModule`),cf(),bT(904,` when you use one. Where the middleware doesn't run, the package falls back to a global interceptor, which reads the locale from the request on the GraphQL context (for a subscription, the WebSocket handshake) and runs after guards. Field resolvers, including those of subscription events, are only covered if you set `),Aa(905,`code`),bT(906,`fieldResolverEnhancers: ['interceptors']`),cf(),bT(907,`, guards don't see the locale, and responses carry no `),Aa(908,`code`),bT(909,`Content-Language`),cf(),bT(910,`.
`),cf(),Aa(911,`h4`,72)(912,`span`),bT(913,`Format prices and dates`),cf()(),Aa(914,`p`),bT(915,`The order summary shows the status, the number of items, the total and the order date, formatted the way each customer expects:`),cf(),Aa(916,`app-copy-button`,47)(917,`span`,48),bT(918),LT(919,`extension`),Wa(920,`app-tabs`,null,22),cf(),Aa(922,`pre`)(923,`code`,51),bT(924,`
getSummary(id: number) {
  const order = this.findOne(id);
  return {
    id: order.id,
    status: this.i18nService.t(\`orders.status.\${order.status}\`),
    items: this.describeItems(order),
    total: this.i18nService.formatNumber(order.total, { style: 'currency', currency: 'USD' }),
    placedAt: this.i18nService.formatDate(order.createdAt, {
      dateStyle: 'long',
      timeZone: 'UTC',
    }),
  };
}
`),cf()()(),Aa(925,`p`)(926,`code`),bT(927,`formatNumber()`),cf(),bT(928,` and `),Aa(929,`code`),bT(930,`formatDate()`),cf(),bT(931,` wrap `),Aa(932,`code`),bT(933,`Intl.NumberFormat`),cf(),bT(934,` and `),Aa(935,`code`),bT(936,`Intl.DateTimeFormat`),cf(),bT(937,` with the request's locale. They take the usual `),Aa(938,`code`),bT(939,`Intl`),cf(),bT(940,` options, plus a `),Aa(941,`code`),bT(942,`locale`),cf(),bT(943,` option that overrides the current locale, as in `),Aa(944,`code`),bT(945,`t()`),cf(),bT(946,`. For order #1001:`),cf(),Aa(947,`table`)(948,`thead`)(949,`tr`)(950,`th`),bT(951,`Locale`),cf(),Aa(952,`th`)(953,`code`),bT(954,`total`),cf()(),Aa(955,`th`)(956,`code`),bT(957,`placedAt`),cf()()()(),Aa(958,`tbody`)(959,`tr`)(960,`td`)(961,`code`),bT(962,`en`),cf()(),Aa(963,`td`),bT(964,`$97.95`),cf(),Aa(965,`td`),bT(966,`September 14, 2026`),cf()(),Aa(967,`tr`)(968,`td`)(969,`code`),bT(970,`pl`),cf()(),Aa(971,`td`),bT(972,`97,95 USD`),cf(),Aa(973,`td`),bT(974,`14 września 2026`),cf()(),Aa(975,`tr`)(976,`td`)(977,`code`),bT(978,`de`),cf()(),Aa(979,`td`),bT(980,`97,95 $`),cf(),Aa(981,`td`),bT(982,`14. September 2026`),cf()(),Aa(983,`tr`)(984,`td`)(985,`code`),bT(986,`de-AT`),cf()(),Aa(987,`td`),bT(988,`$ 97,95`),cf(),Aa(989,`td`),bT(990,`14. September 2026`),cf()()()(),Aa(991,`p`)(992,`code`),bT(993,`de-AT`),cf(),bT(994,` gets Austrian formatting because the module registration listed it in `),Aa(995,`code`),bT(996,`fallbacks`),cf(),bT(997,`. Its messages still come from the German catalog.`),cf(),Aa(998,`p`),bT(999,`Two things the locale doesn't decide:`),cf(),Aa(1e3,`ul`)(1001,`li`)(1002,`strong`),bT(1003,`Currency.`),cf(),bT(1004,` The locale controls how an amount is written, not what it's worth. The store charges in US dollars, so every customer sees USD. Take the currency from the order or the store, never from the locale.`),cf(),Aa(1005,`li`)(1006,`strong`),bT(1007,`Time zone.`),cf(),bT(1008,` Without `),Aa(1009,`code`),bT(1010,`timeZone`),cf(),bT(1011,`, dates are formatted in the server's time zone, which can shift the day. Pass the customer's time zone if you store one, or format in UTC as here.`),cf()(),Aa(1012,`h4`,73)(1013,`span`),bT(1014,`Use the customer's saved language`),cf()(),Aa(1015,`p`),bT(1016,`Customers pick a language when they sign up, and the customer record keeps it in a `),Aa(1017,`code`),bT(1018,`locale`),cf(),bT(1019,` field, like the `),Aa(1020,`code`),bT(1021,`customers`),cf(),bT(1022,` table of the `),Aa(1023,`a`,74),bT(1024,`mail chapter`),cf(),bT(1025,`. Here, `),Aa(1026,`code`),bT(1027,`CustomersService`),cf(),bT(1028,` keeps customers in memory, as `),Aa(1029,`code`),bT(1030,`OrdersService`),cf(),bT(1031,` keeps orders. For a signed-in customer, that choice should beat `),Aa(1032,`code`),bT(1033,`Accept-Language`),cf(),bT(1034,`, which is only their browser's default. The guard of `),Aa(1035,`a`,75)(1036,`code`),bT(1037,`@nestjs/authentication`),cf()(),bT(1038,`, like a Passport guard, puts the signed-in user on `),Aa(1039,`code`),bT(1040,`request.user`),cf(),bT(1041,`.`),cf(),Aa(1042,`p`),bT(1043,`Resolvers run in the locale middleware, before guards, when nobody is signed in yet. A resolver that sets `),Aa(1044,`code`),bT(1045,`afterGuards`),cf(),bT(1046,` runs after guards instead, and receives the `),Aa(1047,`code`),bT(1048,`executionContext`),cf(),bT(1049,` of the call:`),cf(),Aa(1050,`app-copy-button`,47)(1051,`span`,48),bT(1052),LT(1053,`extension`),Wa(1054,`app-tabs`,null,23),cf(),Aa(1056,`pre`)(1057,`code`,51),bT(1058,`
import { Injectable } from '@nestjs/common';
import { LocaleResolver, type LocaleResolverInput } from '@nestjs/i18n';
import { CustomersService } from './customers.service.js';

@Injectable()
export class CustomerLocaleResolver extends LocaleResolver {
  // After guards, the authentication guard has put the signed-in user on the request
  readonly afterGuards = true;

  constructor(private readonly customersService: CustomersService) {
    super();
  }

  resolve({ executionContext }: LocaleResolverInput) {
    const request = executionContext?.switchToHttp().getRequest<{ user?: { id: number } }>();
    const user = request?.user;
    return user ? this.customersService.findOne(user.id)?.locale : undefined;
  }
}
`),cf()()(),Aa(1059,`p`),bT(1060,`Nest instantiates a resolver class, so it can inject providers. Put it into `),Aa(1061,`code`),bT(1062,`resolvers`),cf(),bT(1063,` at the rank it should have, and import the module that provides what it injects:`),cf(),Aa(1064,`app-copy-button`,47)(1065,`span`,48),bT(1066),LT(1067,`extension`),Wa(1068,`app-tabs`,null,24),cf(),Aa(1070,`pre`)(1071,`code`,51),bT(1072,`
I18nModule.forRoot({
  // ...
  resolvers: [
    new QueryLocaleResolver('lang'),
    new HeaderLocaleResolver('x-lang'),
    CustomerLocaleResolver,
    new AcceptLanguageLocaleResolver(),
  ],
  imports: [CustomersModule],
  // ...
}),
`),cf()()(),Aa(1073,`p`),bT(1074,`The order of the resolvers still decides:`),cf(),Aa(1075,`ul`)(1076,`li`)(1077,`strong`)(1078,`code`),bT(1079,`?lang`),cf(),bT(1080,` and `),Aa(1081,`code`),bT(1082,`x-lang`),cf(),bT(1083,` win.`),cf(),bT(1084,` They're a choice made for this request, by a language switcher link or an app setting. When one of them matches, the customer resolver doesn't run.`),cf(),Aa(1085,`li`)(1086,`strong`),bT(1087,`The saved language beats `),Aa(1088,`code`),bT(1089,`Accept-Language`),cf(),bT(1090,`.`),cf(),bT(1091,` Zofia saved Polish, so she reads Polish in any browser. Lukas saved `),Aa(1092,`code`),bT(1093,`de-AT`),cf(),bT(1094,`, which is matched like any candidate, so he gets Austrian formatting.`),cf(),Aa(1095,`li`)(1096,`strong`),bT(1097,`Anonymous customers, and customers without a supported saved language,`),cf(),bT(1098,` get what the resolvers below it find, here from `),Aa(1099,`code`),bT(1100,`Accept-Language`),cf(),bT(1101,`.`),cf()(),Aa(1102,`p`),bT(1103,`Guards see the locale that the resolvers before guards found, and so does the response to an error a guard throws, such as a 401. The handler, and everything after it, sees the customer's. The resolver runs once per request, also for a GraphQL operation with several root fields. Over GraphQL, the request is at `),Aa(1104,`code`),bT(1105,`GqlExecutionContext.create(executionContext).getContext().req`),cf(),bT(1106,`.`),cf(),Aa(1107,`blockquote`,56)(1108,`strong`),bT(1109,`Hint`),cf(),bT(1110,` A response to a signed-in customer now depends on who asks. Such responses are usually private anyway, but if a shared cache stores them, list the header that identifies the customer, such as `),Aa(1111,`code`),bT(1112,`Authorization`),cf(),bT(1113,`, in the resolver's `),Aa(1114,`code`),bT(1115,`varyHeaders`),cf(),bT(1116,`, and the middleware adds it to `),Aa(1117,`code`),bT(1118,`Vary`),cf(),bT(1119,`.
`),cf(),Aa(1120,`p`),bT(1121,`When customers change their language, answer them in the new one right away. `),Aa(1122,`code`),bT(1123,`I18nContext.setLocale()`),cf(),bT(1124,` changes the locale for the rest of the request, `),Aa(1125,`code`),bT(1126,`Content-Language`),cf(),bT(1127,` included:`),cf(),Aa(1128,`app-copy-button`,47)(1129,`span`,48),bT(1130),LT(1131,`extension`),Wa(1132,`app-tabs`,null,25),cf(),Aa(1134,`pre`)(1135,`code`,51),bT(1136,`
@Controller('customers')
export class CustomersController {
  constructor(
    private readonly customersService: CustomersService,
    private readonly i18nContext: I18nContext,
    private readonly i18nService: I18nService,
  ) {}

  @Put('me/locale')
  updateLocale(@Req() request: { user: { id: number } }, @Body('locale') locale: string) {
    const supported = this.i18nContext.setLocale(locale);
    if (!supported) {
      throw new BadRequestException(this.i18nService.t('customers.unsupportedLocale'));
    }

    this.customersService.updateLocale(request.user.id, supported);
    return { locale: supported, message: this.i18nService.t('customers.localeUpdated') };
  }
}
`),cf()()(),Aa(1137,`p`)(1138,`code`),bT(1139,`setLocale()`),cf(),bT(1140,` matches the locale the way resolution does and returns the match: `),Aa(1141,`code`),bT(1142,`de-DE`),cf(),bT(1143,` becomes `),Aa(1144,`code`),bT(1145,`de`),cf(),bT(1146,`. For a language the store doesn't write in, it returns `),Aa(1147,`code`),bT(1148,`undefined`),cf(),bT(1149,` and leaves the locale as it was, so the error is in the language the customer is reading. The two messages live in a new `),Aa(1150,`code`),bT(1151,`customers`),cf(),bT(1152,` catalog in each language, registered with `),Aa(1153,`code`),bT(1154,`customers: typeof customers`),cf(),bT(1155,` in `),Aa(1156,`code`),bT(1157,`Translations`),cf(),bT(1158,`:`),cf(),Aa(1159,`app-copy-button`,47)(1160,`span`,48),bT(1161),LT(1162,`extension`),Wa(1163,`app-tabs`,null,26),cf(),Aa(1165,`pre`)(1166,`code`,49),bT(1167,`
{
  "localeUpdated": "Erledigt! Ab jetzt schreiben wir Ihnen auf Deutsch.",
  "unsupportedLocale": "Wir schreiben nur auf Englisch, Polnisch und Deutsch."
}
`),cf()()(),Aa(1168,`h4`,76)(1169,`span`),bT(1170,`Microservices and WebSocket gateways`),cf()(),Aa(1171,`p`),bT(1172,`Message handlers and WebSocket gateways don't pass through the HTTP middleware. There, the module resolves the locale in a global interceptor, with the same resolvers, so services, exceptions and the `),Aa(1173,`code`),bT(1174,`t()`),cf(),bT(1175,` function work as they do for HTTP requests.`),cf(),Aa(1176,`p`),bT(1177,`A message has no headers or query string, but resolvers receive the `),Aa(1178,`code`),bT(1179,`executionContext`),cf(),bT(1180,`, so a resolver can read the locale a producer puts into the message itself. Add it to the `),Aa(1181,`code`),bT(1182,`resolvers`),cf(),bT(1183,` of the microservice's `),Aa(1184,`code`),bT(1185,`I18nModule`),cf(),bT(1186,`:`),cf(),Aa(1187,`app-copy-button`,47)(1188,`span`,48),bT(1189),LT(1190,`extension`),Wa(1191,`app-tabs`,null,27),cf(),Aa(1193,`pre`)(1194,`code`,51),bT(1195,`
import { LocaleResolver, type LocaleResolverInput } from '@nestjs/i18n';

export class MessageLocaleResolver extends LocaleResolver {
  resolve({ executionContext }: LocaleResolverInput) {
    if (executionContext?.getType() !== 'rpc') {
      return undefined;
    }
    return executionContext.switchToRpc().getData<{ locale?: string }>()?.locale;
  }
}
`),cf()()(),Aa(1196,`p`),bT(1197,`A resolver can read a message's transport metadata the same way, such as the headers of a NATS or Kafka message, from `),Aa(1198,`code`),bT(1199,`executionContext.switchToRpc().getContext()`),cf(),bT(1200,`.`),cf(),Aa(1201,`p`),bT(1202,`For a gateway, the built-in resolvers read the headers and query string of the connection's upgrade request. Socket.IO keeps that request as the handshake, and the resolvers find it there. The `),Aa(1203,`code`),bT(1204,`ws`),cf(),bT(1205,` library, behind `),Aa(1206,`code`),bT(1207,`WsAdapter`),cf(),bT(1208,` from `),Aa(1209,`code`),bT(1210,`@nestjs/platform-ws`),cf(),bT(1211,`, keeps nothing, so store the request on `),Aa(1212,`code`),bT(1213,`client.request`),cf(),bT(1214,` when a client connects (`),Aa(1215,`code`),bT(1216,`WsAuthenticator`),cf(),bT(1217,` of `),Aa(1218,`code`),bT(1219,`@nestjs/authentication`),cf(),bT(1220,` does the same):`),cf(),Aa(1221,`app-copy-button`,47)(1222,`span`,48),bT(1223),LT(1224,`extension`),Wa(1225,`app-tabs`,null,28),cf(),Aa(1227,`pre`)(1228,`code`,51),bT(1229,`
@WebSocketGateway({ path: '/orders/updates' })
export class OrderUpdatesGateway implements OnGatewayConnection {
  constructor(private readonly ordersService: OrdersService) {}

  handleConnection(client: WebSocket & { request?: IncomingMessage }, request: IncomingMessage) {
    // The ws library keeps no reference to the upgrade request, whose headers and query the resolvers read
    client.request = request;
  }

  @SubscribeMessage('orders.summary')
  summary(@MessageBody() id: number) {
    return { event: 'orders.summary', data: this.ordersService.getSummary(id) };
  }
}
`),cf()()(),Aa(1230,`p`),bT(1231,`A client that connects to `),Aa(1232,`code`),bT(1233,`/orders/updates?lang=de`),cf(),bT(1234,` reads German summaries. Interceptors run after guards, so on these paths guards see the default locale, and an error a guard throws is in the default locale. Pipes and handlers see the resolved one, and resolvers with `),Aa(1235,`code`),bT(1236,`afterGuards`),cf(),bT(1237,` need nothing extra: every resolver already runs after guards here.`),cf(),Aa(1238,`h4`,77)(1239,`span`),bT(1240,`Handle missing keys and reload catalogs`),cf()(),Aa(1241,`p`),bT(1242,`A missing translation should break the build in development and CI, and degrade quietly in production. Here's the final `),Aa(1243,`code`),bT(1244,`AppModule`),cf(),bT(1245,`:`),cf(),Aa(1246,`app-copy-button`,47)(1247,`span`,48),bT(1248),LT(1249,`extension`),Wa(1250,`app-tabs`,null,29),cf(),Aa(1252,`pre`)(1253,`code`,51),bT(1254,`
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import {
  AcceptLanguageLocaleResolver,
  HeaderLocaleResolver,
  I18nModule,
  I18nValidationPipe,
  JsonI18nLoader,
  QueryLocaleResolver,
} from '@nestjs/i18n';
import { join } from 'node:path';
import { CustomerLocaleResolver } from './customers/customer-locale.resolver.js';
import { CustomersModule } from './customers/customers.module.js';
import { OrdersModule } from './orders/orders.module.js';

const env = process.env.NODE_ENV ?? 'development';

@Module({
  imports: [
    I18nModule.forRoot({
      defaultLocale: 'en',
      supportedLocales: ['en', 'pl', 'de'],
      fallbacks: { 'de-AT': 'de' },
      loader: new JsonI18nLoader({
        path: join(import.meta.dirname, 'i18n'),
        watch: env === 'development',
      }),
      resolvers: [
        new QueryLocaleResolver('lang'),
        new HeaderLocaleResolver('x-lang'),
        CustomerLocaleResolver,
        new AcceptLanguageLocaleResolver(),
      ],
      imports: [CustomersModule],
      missingKey: env === 'production' ? 'fallback' : 'throw',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    CustomersModule,
    OrdersModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new I18nValidationPipe({ whitelist: true, transform: true }),
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(1255,`p`),bT(1256,`The `),Aa(1257,`code`),bT(1258,`missingKey`),cf(),bT(1259,` option decides what happens when a key isn't found for the requested locale:`),cf(),Aa(1260,`ul`)(1261,`li`)(1262,`strong`)(1263,`code`),bT(1264,`'throw'`),cf(),bT(1265,` outside production.`),cf(),Aa(1266,`code`),bT(1267,`t()`),cf(),bT(1268,` and `),Aa(1269,`code`),bT(1270,`translate()`),cf(),bT(1271,` throw an `),Aa(1272,`code`),bT(1273,`I18nMissingKeyError`),cf(),bT(1274,`, and the request fails with a 500. A Polish message that exists only in English fails too, because this policy never falls back to the default locale. Vitest sets `),Aa(1275,`code`),bT(1276,`NODE_ENV`),cf(),bT(1277,` to `),Aa(1278,`code`),bT(1279,`test`),cf(),bT(1280,`, so your test suite runs with this policy.`),cf(),Aa(1281,`li`)(1282,`strong`)(1283,`code`),bT(1284,`'fallback'`),cf(),bT(1285,` in production.`),cf(),bT(1286,` A missing Polish message is taken from the default locale, English, and a warning names the key and the locale, once per pair. A key that exists nowhere returns the key itself and logs a warning, once per key.`),cf()(),Aa(1287,`p`),bT(1288,`The `),Aa(1289,`code`),bT(1290,`de-AT`),cf(),bT(1291,` to `),Aa(1292,`code`),bT(1293,`de`),cf(),bT(1294,` fallback and region-to-base matching apply under every policy. Validation messages looked up by constraint name or issue code never throw either: a constraint or issue without a translation keeps the library's message. Keys you name with `),Aa(1295,`code`),bT(1296,`i18nValidationMessage()`),cf(),bT(1297,` or `),Aa(1298,`code`),bT(1299,`i18nIssueMessage()`),cf(),bT(1300,` follow the policy, like `),Aa(1301,`code`),bT(1302,`t()`),cf(),bT(1303,`. The other policies are `),Aa(1304,`code`),bT(1305,`'key'`),cf(),bT(1306,`, `),Aa(1307,`code`),bT(1308,`'empty'`),cf(),bT(1309,` and a function that receives the key and the locale.`),cf(),Aa(1310,`blockquote`,56)(1311,`strong`),bT(1312,`Hint`),cf(),bT(1313,` Fallback works per key. When messages are composed as in `),Aa(1314,`a`,46),bT(1315,`Translate order confirmations`),cf(),bT(1316,`, a Polish customer can receive an English sentence around a Polish plural. The warning tells you it happened; the catalog test in `),Aa(1317,`a`,78),bT(1318,`Testing`),cf(),bT(1319,` keeps it from shipping.
`),cf(),Aa(1320,`p`),bT(1321,`With `),Aa(1322,`code`),bT(1323,`watch: true`),cf(),bT(1324,`, the JSON loader watches the catalog directory and reloads it when a file changes, so translators can edit messages without restarting the app. Enable it in development only:`),cf(),Aa(1325,`ul`)(1326,`li`)(1327,`strong`),bT(1328,`Reloads are atomic.`),cf(),bT(1329,` The whole catalog is re-read and swapped in one step, so a request never sees a mix of old and new messages.`),cf(),Aa(1330,`li`)(1331,`strong`),bT(1332,`Broken files are ignored.`),cf(),bT(1333,` If a file fails to parse, the previous catalog stays in use, and the error is logged with the file path. The next valid save is picked up.`),cf(),Aa(1334,`li`)(1335,`strong`),bT(1336,`Watching stops on shutdown.`),cf(),bT(1337,` The watcher closes when the application closes. Call `),Aa(1338,`code`),bT(1339,`app.enableShutdownHooks()`),cf(),bT(1340,` in `),Aa(1341,`code`),bT(1342,`main.ts`),cf(),bT(1343,` to close it on termination signals as well.`),cf()(),Aa(1344,`p`),bT(1345,`With `),Aa(1346,`code`),bT(1347,`watchAssets`),cf(),bT(1348,` enabled in `),Aa(1349,`code`),bT(1350,`nest-cli.json`),cf(),bT(1351,`, the CLI copies edited catalogs to `),Aa(1352,`code`),bT(1353,`dist`),cf(),bT(1354,`, where the loader reads them.`),cf(),Aa(1355,`h5`,79)(1356,`span`),bT(1357,`Options from configuration`),cf()(),Aa(1358,`p`),bT(1359,`The tutorial reads `),Aa(1360,`code`),bT(1361,`process.env`),cf(),bT(1362,` directly, to stay short. In an application, load the environment through `),Aa(1363,`a`,80)(1364,`code`),bT(1365,`@nestjs/config`),cf()(),bT(1366,` with a validation schema, and register the module with `),Aa(1367,`code`),bT(1368,`forRootAsync()`),cf(),bT(1369,`. Its factory receives the injected `),Aa(1370,`code`),bT(1371,`ConfigService`),cf(),bT(1372,` and returns the options:`),cf(),Aa(1373,`app-copy-button`,47)(1374,`span`,48),bT(1375),LT(1376,`extension`),Wa(1377,`app-tabs`,null,30),cf(),Aa(1379,`pre`)(1380,`code`,51),bT(1381,`
I18nModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const env = configService.get<string>('NODE_ENV', 'development');
    return {
      defaultLocale: 'en',
      supportedLocales: ['en', 'pl', 'de'],
      fallbacks: { 'de-AT': 'de' },
      loader: new JsonI18nLoader({
        path: join(import.meta.dirname, 'i18n'),
        watch: env === 'development',
      }),
      missingKey: env === 'production' ? 'fallback' : 'throw',
    };
  },
  // The list has a class, which Nest instantiates, so it stays next to useFactory
  resolvers: [
    new QueryLocaleResolver('lang'),
    new HeaderLocaleResolver('x-lang'),
    CustomerLocaleResolver,
    new AcceptLanguageLocaleResolver(),
  ],
  imports: [CustomersModule],
}),
`),cf()()(),Aa(1382,`p`),bT(1383,`The factory can return loader, resolver and formatter instances, but not classes: Nest instantiates classes while it builds the module, before any factory runs. So `),Aa(1384,`code`),bT(1385,`resolvers`),cf(),bT(1386,`, which lists `),Aa(1387,`code`),bT(1388,`CustomerLocaleResolver`),cf(),bT(1389,`, stays at the top level with `),Aa(1390,`code`),bT(1391,`imports`),cf(),bT(1392,`. A factory that returns a class, or an option set in both places, fails at startup with a message that names the option.`),cf(),Aa(1393,`p`),bT(1394,`To keep the options in a class of their own, pass it as `),Aa(1395,`code`),bT(1396,`useClass`),cf(),bT(1397,`. It implements `),Aa(1398,`code`),bT(1399,`I18nOptionsFactory`),cf(),bT(1400,`, and Nest calls its `),Aa(1401,`code`),bT(1402,`createI18nOptions()`),cf(),bT(1403,` method:`),cf(),Aa(1404,`app-copy-button`,47)(1405,`span`,48),bT(1406),LT(1407,`extension`),Wa(1408,`app-tabs`,null,31),cf(),Aa(1410,`pre`)(1411,`code`,51),bT(1412,`
@Injectable()
export class I18nConfigService implements I18nOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createI18nOptions(): I18nModuleOptions {
    const env = this.configService.get<string>('NODE_ENV', 'development');
    return {
      defaultLocale: 'en',
      // ...
    };
  }
}
`),cf()()(),Aa(1413,`app-copy-button`,47)(1414,`span`,48),bT(1415),LT(1416,`extension`),Wa(1417,`app-tabs`,null,32),cf(),Aa(1419,`pre`)(1420,`code`,51),bT(1421,`
I18nModule.forRootAsync({
  useClass: I18nConfigService,
  resolvers: [
    // ...
  ],
  imports: [CustomersModule],
}),
`),cf()()(),Aa(1422,`p`),bT(1423,`The options the module ends up with are injectable with the `),Aa(1424,`code`),bT(1425,`I18N_MODULE_OPTIONS`),cf(),bT(1426,` token, for a provider of your own that depends on them.`),cf(),Aa(1427,`h5`,81)(1428,`span`),bT(1429,`A custom loader`),cf()(),Aa(1430,`p`),bT(1431,`Translators often work in a translation platform, which exports every catalog as one JSON document. A loader extends `),Aa(1432,`code`),bT(1433,`I18nLoader`),cf(),bT(1434,`: `),Aa(1435,`code`),bT(1436,`load()`),cf(),bT(1437,` returns the catalogs keyed by locale, and the optional `),Aa(1438,`code`),bT(1439,`watch()`),cf(),bT(1440,` passes new ones to a callback, for hot reload. This one fetches the export at startup, and again every five minutes:`),cf(),Aa(1441,`app-copy-button`,47)(1442,`span`,48),bT(1443),LT(1444,`extension`),Wa(1445,`app-tabs`,null,33),cf(),Aa(1447,`pre`)(1448,`code`,51),bT(1449,`
import { Logger } from '@nestjs/common';
import { I18nLoader, type I18nCatalogs } from '@nestjs/i18n';

/** Catalogs a translation platform exports as one JSON document, fetched again every \`interval\` ms. */
export class RemoteI18nLoader extends I18nLoader {
  private readonly logger = new Logger(RemoteI18nLoader.name);

  constructor(
    private readonly url: string,
    private readonly interval = 5 * 60_000,
  ) {
    super();
  }

  async load(): Promise<I18nCatalogs> {
    const response = await fetch(this.url, { signal: AbortSignal.timeout(10_000) });
    if (!response.ok) {
      throw new Error(\`GET \${this.url} answered \${response.status}\`);
    }
    return (await response.json()) as I18nCatalogs;
  }

  watch(onChange: (catalogs: I18nCatalogs) => void): () => void {
    const timer = setInterval(() => {
      this.load().then(onChange, (err: Error) =>
        this.logger.warn(\`Keeping the current catalogs: \${err.message}\`),
      );
    }, this.interval);
    // Polling alone doesn't keep the process alive
    timer.unref();
    return () => clearInterval(timer);
  }
}
`),cf()()(),Aa(1450,`p`),bT(1451,`Pass an instance as `),Aa(1452,`code`),bT(1453,`loader`),cf(),bT(1454,`. A failed fetch at startup fails the bootstrap, and a failed poll keeps the catalogs in use. The module calls `),Aa(1455,`code`),bT(1456,`watch()`),cf(),bT(1457,` when it initializes, and the function `),Aa(1458,`code`),bT(1459,`watch()`),cf(),bT(1460,` returns when it shuts down. New catalogs are checked like the first ones, and a set that doesn't fit, such as one without a catalog for the default locale, is logged and ignored. To read catalogs from your database, pass a loader class instead, which Nest instantiates with the repository it injects, and list the repository's module in `),Aa(1461,`code`),bT(1462,`imports`),cf(),bT(1463,`.`),cf(),Aa(1464,`h4`,82)(1465,`span`),bT(1466,`Use ICU message syntax`),cf()(),Aa(1467,`p`),bT(1468,`The built-in syntax has placeholders, and plural forms as catalog objects. Translation platforms such as Crowdin and Lokalise often export catalogs in ICU MessageFormat instead, which also has exact matches such as `),Aa(1469,`code`),bT(1470,`=0`),cf(),bT(1471,`, `),Aa(1472,`code`),bT(1473,`select`),cf(),bT(1474,` (for a message that depends on a value, such as a pet's species), and `),Aa(1475,`code`),bT(1476,`selectordinal`),cf(),bT(1477,` (1st, 2nd, 3rd). Here is the Polish `),Aa(1478,`code`),bT(1479,`items`),cf(),bT(1480,` message in ICU:`),cf(),Aa(1481,`pre`)(1482,`code`,49),bT(1483,`
{
  "items": "{count, plural, one {# produkt} few {# produkty} many {# produkt\xF3w} other {# produktu}}"
}
`),cf()(),Aa(1484,`p`),bT(1485,`The `),Aa(1486,`code`),bT(1487,`formatter`),cf(),bT(1488,` option plugs in another syntax. A formatter extends `),Aa(1489,`code`),bT(1490,`I18nMessageFormatter`),cf(),bT(1491,` and implements `),Aa(1492,`code`),bT(1493,`format()`),cf(),bT(1494,`, which receives the message, the arguments and the locale. This one hands the message to the `),Aa(1495,`a`,83)(1496,`code`),bT(1497,`intl-messageformat`),cf()(),bT(1498,` library, which your application installs:`),cf(),Aa(1499,`app-copy-button`,47)(1500,`span`,48),bT(1501),LT(1502,`extension`),Wa(1503,`app-tabs`,null,34),cf(),Aa(1505,`pre`)(1506,`code`,51),bT(1507,`
import { I18nMessageFormatter } from '@nestjs/i18n';
import { IntlMessageFormat } from 'intl-messageformat';

export class IcuMessageFormatter extends I18nMessageFormatter {
  // Parsing a message costs far more than formatting it, and the catalogs hold a fixed set
  private readonly compiled = new Map<string, IntlMessageFormat>();

  format(message: string, args: Record<string, unknown>, locale: string): string {
    const key = \`\${locale}\\u0000\${message}\`;
    let compiled = this.compiled.get(key);
    if (!compiled) {
      compiled = new IntlMessageFormat(message, locale, undefined, { ignoreTag: true });
      this.compiled.set(key, compiled);
    }
    return String(compiled.format<unknown>(args));
  }
}
`),cf()()(),Aa(1508,`p`)(1509,`code`),bT(1510,`ignoreTag`),cf(),bT(1511,` keeps `),Aa(1512,`code`),bT(1513,`<`),cf(),bT(1514,` and `),Aa(1515,`code`),bT(1516,`>`),cf(),bT(1517,` as text, where the library would otherwise read rich-text tags. Pass an instance, or a class that Nest instantiates, as `),Aa(1518,`code`),bT(1519,`formatter`),cf(),bT(1520,`:`),cf(),Aa(1521,`app-copy-button`,47)(1522,`span`,48),bT(1523),LT(1524,`extension`),Wa(1525,`app-tabs`,null,35),cf(),Aa(1527,`pre`)(1528,`code`,51),bT(1529,`
I18nModule.forRoot({
  // ...
  formatter: new IcuMessageFormatter(),
}),
`),cf()()(),Aa(1530,`p`),bT(1531,`With the formatter in place:`),cf(),Aa(1532,`ul`)(1533,`li`)(1534,`strong`),bT(1535,`The tutorial's catalogs work unchanged.`),cf(),bT(1536,` A placeholder is a simple ICU argument, and plural objects still work: the module picks the form, and the formatter formats it. Polish `),Aa(1537,`code`),bT(1538,`items`),cf(),bT(1539,` reads "5 produktów" as a plural object and as the ICU message above.`),cf(),Aa(1540,`li`)(1541,`strong`),bT(1542,`The locale is the request's.`),cf(),bT(1543,` A message that `),Aa(1544,`code`),bT(1545,`de-AT`),cf(),bT(1546,` reads from the German catalog is formatted for `),Aa(1547,`code`),bT(1548,`de-AT`),cf(),bT(1549,`, so a number argument with a currency style reads `),Aa(1550,`code`),bT(1551,`$ 97,95`),cf(),bT(1552,`. A message that fell back to the default locale is formatted for the default locale, whose grammar it's written in.`),cf(),Aa(1553,`li`)(1554,`strong`),bT(1555,`Keys stay checked, plural counts don't.`),cf(),bT(1556,` The compiler requires a numeric `),Aa(1557,`code`),bT(1558,`count`),cf(),bT(1559,` for a plural object, but an ICU plural is a string to it, so pass its argument yourself.`),cf()(),Aa(1560,`h4`,84)(1561,`span`),bT(1562,`Try it`),cf()(),Aa(1563,`p`),bT(1564,`Start the application and place an order with Polish in `),Aa(1565,`code`),bT(1566,`Accept-Language`),cf(),bT(1567,`:`),cf(),Aa(1568,`pre`)(1569,`code`,43),bT(1570,`
$ curl -X POST http://localhost:3000/orders \\
    -H 'Content-Type: application/json' \\
    -H 'Accept-Language: pl-PL,pl;q=0.9,en;q=0.8' \\
    -d '{"items":[{"productId":"salmon-kibble-2kg","quantity":2},{"productId":"sisal-scratching-post","quantity":3}]}'
{"id":1002,"message":"Dzi\u0119kujemy! Zam\xF3wienie #1002 zosta\u0142o przyj\u0119te: 5 produkt\xF3w."}
`),cf()(),Aa(1571,`p`),bT(1572,`The `),Aa(1573,`code`),bT(1574,`lang`),cf(),bT(1575,` query parameter wins over any header:`),cf(),Aa(1576,`pre`)(1577,`code`,43),bT(1578,`
$ curl -X POST 'http://localhost:3000/orders?lang=de' \\
    -H 'Content-Type: application/json' \\
    -d '{"items":[{"productId":"feather-wand","quantity":1}]}'
{"id":1003,"message":"Vielen Dank! Bestellung #1003 ist best\xE4tigt: 1 Produkt."}
`),cf()(),Aa(1579,`p`),bT(1580,`Read the summary of order #1001 as an Austrian customer:`),cf(),Aa(1581,`pre`)(1582,`code`,43),bT(1583,`
$ curl http://localhost:3000/orders/1001 -H 'Accept-Language: de-AT'
`),cf()(),Aa(1584,`pre`)(1585,`code`,49),bT(1586,`
{
  "id": 1001,
  "status": "Versandt",
  "items": "5 Produkte",
  "total": "$ 97,95",
  "placedAt": "14. September 2026"
}
`),cf()(),Aa(1587,`p`),bT(1588,`Ask for an order that doesn't exist, with the `),Aa(1589,`code`),bT(1590,`x-lang`),cf(),bT(1591,` header:`),cf(),Aa(1592,`pre`)(1593,`code`,43),bT(1594,`
$ curl http://localhost:3000/orders/999 -H 'x-lang: pl'
`),cf()(),Aa(1595,`pre`)(1596,`code`,49),bT(1597,`
{
  "message": "Nie znaleziono zam\xF3wienia #999.",
  "error": "Not Found",
  "statusCode": 404
}
`),cf()(),Aa(1598,`p`),bT(1599,`Send an invalid order:`),cf(),Aa(1600,`pre`)(1601,`code`,43),bT(1602,`
$ curl -X POST 'http://localhost:3000/orders?lang=pl' \\
    -H 'Content-Type: application/json' \\
    -d '{"items":[{"productId":"salmon-kibble-2kg","quantity":0},{"productId":42,"quantity":12}]}'
`),cf()(),Aa(1603,`pre`)(1604,`code`,49),bT(1605,`
{
  "message": [
    "items.0.quantity musi wynosi\u0107 co najmniej 1",
    "items.1.productId musi by\u0107 tekstem",
    "items.1.quantity: mo\u017Cna zam\xF3wi\u0107 najwy\u017Cej 10 sztuk jednego produktu"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
`),cf()(),Aa(1606,`p`),bT(1607,`Send an invalid shipping address:`),cf(),Aa(1608,`pre`)(1609,`code`,43),bT(1610,`
$ curl -X PUT http://localhost:3000/orders/1001/shipping-address \\
    -H 'Content-Type: application/json' \\
    -H 'Accept-Language: de' \\
    -d '{"recipient":"A","city":"Wien","postalCode":"1010","country":"AT"}'
`),cf()(),Aa(1611,`pre`)(1612,`code`,49),bT(1613,`
{
  "message": [
    "recipient muss mindestens 2 Zeichen lang sein",
    "postalCode hat ein ung\xFCltiges Format",
    "Wir liefern nur in die USA, nach Polen und nach Deutschland."
  ],
  "error": "Bad Request",
  "statusCode": 400
}
`),cf()(),Aa(1614,`p`),bT(1615,`Finally, query the order over GraphQL:`),cf(),Aa(1616,`pre`)(1617,`code`,43),bT(1618,`
$ curl -X POST 'http://localhost:3000/graphql?lang=pl' \\
    -H 'Content-Type: application/json' \\
    -d '{"query":"{ order(id: 1001) { id status statusLabel items } }"}'
`),cf()(),Aa(1619,`pre`)(1620,`code`,49),bT(1621,`
{
  "data": {
    "order": {
      "id": 1001,
      "status": "shipped",
      "statusLabel": "Wys\u0142ane",
      "items": "5 produkt\xF3w"
    }
  }
}
`),cf()(),Aa(1622,`blockquote`,56)(1623,`strong`),bT(1624,`Hint`),cf(),Aa(1625,`code`),bT(1626,`Intl`),cf(),bT(1627,` separates the amount and the currency with a no-break space (U+00A0) in `),Aa(1628,`code`),bT(1629,`97,95 USD`),cf(),bT(1630,`, `),Aa(1631,`code`),bT(1632,`97,95 $`),cf(),bT(1633,` and `),Aa(1634,`code`),bT(1635,`$ 97,95`),cf(),bT(1636,`. The responses above show a regular space. Keep that in mind when you compare formatted strings in tests.
`),cf(),Aa(1637,`h4`,85)(1638,`span`),bT(1639,`Testing`),cf()(),Aa(1640,`p`),bT(1641,`An `),Aa(1642,`a`,86),bT(1643,`end-to-end test`),cf(),bT(1644,` sets the language the same way a client does:`),cf(),Aa(1645,`app-copy-button`,47)(1646,`span`,48),bT(1647),LT(1648,`extension`),Wa(1649,`app-tabs`,null,36),cf(),Aa(1651,`pre`)(1652,`code`,51),bT(1653,`
import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module.js';

describe('Orders (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.listen(0, '127.0.0.1');
  });

  afterAll(() => app.close());

  it('confirms an order in the language of the request', async () => {
    const res = await request(app.getHttpServer())
      .post('/orders')
      .set('Accept-Language', 'pl-PL,pl;q=0.9')
      .send({ items: [{ productId: 'salmon-kibble-2kg', quantity: 5 }] })
      .expect(201);

    expect(res.body.message).toBe(
      'Dzi\u0119kujemy! Zam\xF3wienie #1002 zosta\u0142o przyj\u0119te: 5 produkt\xF3w.',
    );
  });

  it('localizes errors', async () => {
    const res = await request(app.getHttpServer())
      .get('/orders/999?lang=de')
      .expect(404);

    expect(res.body.message).toBe('Bestellung #999 wurde nicht gefunden.');
  });
});
`),cf()()(),Aa(1654,`p`),bT(1655,`Outside a request, `),Aa(1656,`code`),bT(1657,`I18nService`),cf(),bT(1658,` uses the default locale. To test a service in another language without HTTP, run the call inside `),Aa(1659,`code`),bT(1660,`I18nContext.run()`),cf(),bT(1661,`, which makes the locale current as a request would:`),cf(),Aa(1662,`app-copy-button`,47)(1663,`span`,48),bT(1664),LT(1665,`extension`),Wa(1666,`app-tabs`,null,37),cf(),Aa(1668,`pre`)(1669,`code`,51),bT(1670,`
import { I18nContext } from '@nestjs/i18n';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module.js';
import { OrdersService } from '../src/orders/orders.service.js';

describe('OrdersService', () => {
  let ordersService: OrdersService;
  let i18nContext: I18nContext;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    ordersService = moduleRef.get(OrdersService);
    i18nContext = moduleRef.get(I18nContext);
  });

  it.each([
    [1, '1 produkt'],
    [2, '2 produkty'],
    [5, '5 produkt\xF3w'],
    [22, '22 produkty'],
  ])('describes %i item(s) in Polish', (quantity, expected) => {
    const order = {
      ...ordersService.findOne(1001),
      items: [{ productId: 'salmon-kibble-2kg', quantity }],
    };
    expect(i18nContext.run('pl', () => ordersService.describeItems(order))).toBe(expected);
  });

  it('falls back to the default locale outside a request', () => {
    const order = ordersService.findOne(1001);
    expect(ordersService.describeItems(order)).toBe('5 items');
  });
});
`),cf()()(),Aa(1671,`p`),bT(1672,`To run the application with other catalogs, for example with a translation removed to test the missing-key policy, replace the loader on the testing module: `),Aa(1673,`code`),bT(1674,`overrideProvider(I18nLoader).useValue(new InMemoryI18nLoader(catalogs))`),cf(),bT(1675,`.`),cf(),Aa(1676,`p`),bT(1677,`The `),Aa(1678,`code`),bT(1679,`'throw'`),cf(),bT(1680,` policy catches missing keys on the paths your tests exercise. A catalog test catches the rest: every locale must have the same keys and placeholders as English, and every plural message must have the forms its language needs. `),Aa(1681,`code`),bT(1682,`Intl.PluralRules`),cf(),bT(1683,` knows which forms those are:`),cf(),Aa(1684,`app-copy-button`,47)(1685,`span`,48),bT(1686),LT(1687,`extension`),Wa(1688,`app-tabs`,null,38),cf(),Aa(1690,`pre`)(1691,`code`,51),bT(1692,`
import { JsonI18nLoader, type I18nCatalog } from '@nestjs/i18n';
import { join } from 'node:path';

type Message = string | Record<string, string>;

/** Flattens a catalog to [key, message] pairs; plural forms count as one message. */
function messages(tree: I18nCatalog, prefix = ''): [string, Message][] {
  return Object.entries(tree).flatMap(([name, value]): [string, Message][] =>
    typeof value === 'string' || 'other' in value
      ? [[prefix + name, value as Message]]
      : messages(value, \`\${prefix}\${name}.\`),
  );
}

const placeholders = (message: Message) =>
  [...new Set(JSON.stringify(message).match(/\\{\\w+\\}/g))].sort();

const loader = new JsonI18nLoader({ path: join(import.meta.dirname, '../src/i18n') });
const catalogs = await loader.load();
const english = new Map(messages(catalogs.en));

describe.each(Object.keys(catalogs))('the %s catalog', (lang) => {
  const translated = new Map(messages(catalogs[lang]));

  it('has the same keys and placeholders as the English one', () => {
    expect([...translated.keys()].sort()).toEqual([...english.keys()].sort());
    for (const [key, message] of translated) {
      expect(placeholders(message), key).toEqual(placeholders(english.get(key)!));
    }
  });

  it('has every plural form the language needs', () => {
    const forms = new Intl.PluralRules(lang).resolvedOptions().pluralCategories;
    for (const [key, message] of translated) {
      if (typeof message === 'object') {
        expect(Object.keys(message), key).toEqual(expect.arrayContaining(forms));
      }
    }
  });
});
`),cf()()(),Aa(1693,`p`),bT(1694,`Delete the `),Aa(1695,`code`),bT(1696,`many`),cf(),bT(1697,` form from the Polish `),Aa(1698,`code`),bT(1699,`items`),cf(),bT(1700,` message, and the second test fails with the list of forms Polish needs.`),cf(),Aa(1701,`h4`,87)(1702,`span`),bT(1703,`Production checklist`),cf()(),Aa(1704,`ul`)(1705,`li`)(1706,`strong`),bT(1707,`Ship the catalogs.`),cf(),bT(1708,` Check that `),Aa(1709,`code`),bT(1710,`dist/i18n`),cf(),bT(1711,` exists after `),Aa(1712,`code`),bT(1713,`nest build`),cf(),bT(1714,`. The loader reads the directory at startup, and a missing directory fails the bootstrap.`),cf(),Aa(1715,`li`)(1716,`strong`),bT(1717,`Use `),Aa(1718,`code`),bT(1719,`'fallback'`),cf(),bT(1720,` in production and `),Aa(1721,`code`),bT(1722,`'throw'`),cf(),bT(1723,` everywhere else`),cf(),bT(1724,`, and run the catalog test in CI. Watch production logs for fallback warnings.`),cf(),Aa(1725,`li`)(1726,`strong`),bT(1727,`Turn off `),Aa(1728,`code`),bT(1729,`watch`),cf(),bT(1730,` in production.`),cf(),bT(1731,` Hot reload is a development tool.`),cf(),Aa(1732,`li`)(1733,`strong`),bT(1734,`Pin `),Aa(1735,`code`),bT(1736,`supportedLocales`),cf(),bT(1737,`.`),cf(),bT(1738,` Otherwise every directory under `),Aa(1739,`code`),bT(1740,`i18n`),cf(),bT(1741,` becomes a locale, including one that appears while the app is running with `),Aa(1742,`code`),bT(1743,`watch`),cf(),bT(1744,` enabled.`),cf(),Aa(1745,`li`)(1746,`strong`),bT(1747,`Add formatting regions to `),Aa(1748,`code`),bT(1749,`fallbacks`),cf(),bT(1750,`.`),cf(),bT(1751,` A region resolves to its base language unless it's listed, and then it's formatted like the base language too.`),cf(),Aa(1752,`li`)(1753,`strong`),bT(1754,`Set the locale outside requests.`),cf(),bT(1755,` Cron jobs, queue consumers and outgoing emails have no request, so `),Aa(1756,`code`),bT(1757,`I18nService`),cf(),bT(1758,` falls back to the default locale there, and the `),Aa(1759,`code`),bT(1760,`t()`),cf(),bT(1761,` function returns the key. Save each customer's preferred locale, and run the work inside `),Aa(1762,`code`),bT(1763,`I18nContext.run()`),cf(),bT(1764,`.`),cf(),Aa(1765,`li`)(1766,`strong`),bT(1767,`Mind caches.`),cf(),bT(1768,` Responses to the same URL differ by `),Aa(1769,`code`),bT(1770,`Accept-Language`),cf(),bT(1771,` and `),Aa(1772,`code`),bT(1773,`x-lang`),cf(),bT(1774,`. The middleware lists both in `),Aa(1775,`code`),bT(1776,`Vary`),cf(),bT(1777,`; check that your cache or CDN honors it. The `),Aa(1778,`code`),bT(1779,`lang`),cf(),bT(1780,` query parameter is part of the URL, so it needs nothing extra.`),cf(),Aa(1781,`li`)(1782,`strong`),bT(1783,`Keep GraphQL under the global prefix.`),cf(),bT(1784,` With `),Aa(1785,`code`),bT(1786,`setGlobalPrefix()`),cf(),bT(1787,`, the locale middleware only covers routes under the prefix. Give `),Aa(1788,`code`),bT(1789,`GraphQLModule`),cf(),Aa(1790,`code`),bT(1791,`useGlobalPrefix: true`),cf(),bT(1792,`, or guards on resolvers stop seeing the locale (see `),Aa(1793,`a`,88),bT(1794,`Localize GraphQL fields`),cf(),bT(1795,`).`),cf(),Aa(1796,`li`)(1797,`strong`),bT(1798,`Escape messages that end up in HTML.`),cf(),bT(1799,` Arguments such as a customer's name are inserted as they are. That's right for JSON responses, but an HTML email must escape the message like any other text.`),cf(),Aa(1800,`li`)(1801,`strong`),bT(1802,`Keep numbers and dates in the locale's hands, and currency and time zone out of them.`),cf(),bT(1803,` See `),Aa(1804,`a`,52),bT(1805,`Format prices and dates`),cf(),bT(1806,`.`),cf()(),Aa(1807,`h4`,89)(1808,`span`),bT(1809,`Reference`),cf()(),Aa(1810,`h5`,90)(1811,`span`),bT(1812,`Module options`),cf()(),Aa(1813,`p`)(1814,`code`),bT(1815,`I18nModule.forRoot()`),cf(),bT(1816,` takes these options. `),Aa(1817,`code`),bT(1818,`forRootAsync()`),cf(),bT(1819,` takes the same values from its factory (`),Aa(1820,`code`),bT(1821,`useFactory`),cf(),bT(1822,` with `),Aa(1823,`code`),bT(1824,`inject`),cf(),bT(1825,`, or a `),Aa(1826,`code`),bT(1827,`useClass`),cf(),bT(1828,` or `),Aa(1829,`code`),bT(1830,`useExisting`),cf(),bT(1831,` class that implements `),Aa(1832,`code`),bT(1833,`I18nOptionsFactory`),cf(),bT(1834,`), while `),Aa(1835,`code`),bT(1836,`imports`),cf(),bT(1837,`, `),Aa(1838,`code`),bT(1839,`isGlobal`),cf(),bT(1840,` and loader, resolver or formatter classes stay at the top level. See `),Aa(1841,`a`,91),bT(1842,`Options from configuration`),cf(),bT(1843,`. The resolved options are injectable with the `),Aa(1844,`code`),bT(1845,`I18N_MODULE_OPTIONS`),cf(),bT(1846,` token.`),cf(),Aa(1847,`table`)(1848,`thead`)(1849,`tr`)(1850,`th`),bT(1851,`Option`),cf(),Aa(1852,`th`),bT(1853,`Default`),cf(),Aa(1854,`th`),bT(1855,`Description`),cf()()(),Aa(1856,`tbody`)(1857,`tr`)(1858,`td`)(1859,`code`),bT(1860,`loader`),cf()(),Aa(1861,`td`),bT(1862,`required`),cf(),Aa(1863,`td`),bT(1864,`Where catalogs come from: an `),Aa(1865,`code`),bT(1866,`I18nLoader`),cf(),bT(1867,` instance such as `),Aa(1868,`code`),bT(1869,`JsonI18nLoader`),cf(),bT(1870,`, or a loader class Nest instantiates. See `),Aa(1871,`a`,69),bT(1872,`Add catalogs and register the module`),cf(),bT(1873,`.`),cf()(),Aa(1874,`tr`)(1875,`td`)(1876,`code`),bT(1877,`resolvers`),cf()(),Aa(1878,`td`)(1879,`code`),bT(1880,`[new AcceptLanguageLocaleResolver()]`),cf()(),Aa(1881,`td`),bT(1882,`Locale resolvers, tried in order: instances, or classes Nest instantiates.`),cf()(),Aa(1883,`tr`)(1884,`td`)(1885,`code`),bT(1886,`formatter`),cf()(),Aa(1887,`td`),bT(1888,`the built-in syntax`),cf(),Aa(1889,`td`),bT(1890,`An `),Aa(1891,`code`),bT(1892,`I18nMessageFormatter`),cf(),bT(1893,` instance, or a class Nest instantiates, that turns messages into text. See `),Aa(1894,`a`,55),bT(1895,`Use ICU message syntax`),cf(),bT(1896,`.`),cf()(),Aa(1897,`tr`)(1898,`td`)(1899,`code`),bT(1900,`defaultLocale`),cf()(),Aa(1901,`td`)(1902,`code`),bT(1903,`'en'`),cf()(),Aa(1904,`td`),bT(1905,`Used when no resolver finds a supported locale, and outside requests.`),cf()(),Aa(1906,`tr`)(1907,`td`)(1908,`code`),bT(1909,`supportedLocales`),cf()(),Aa(1910,`td`),bT(1911,`the loaded locales`),cf(),Aa(1912,`td`),bT(1913,`The locales a request can get, as BCP 47 tags.`),cf()(),Aa(1914,`tr`)(1915,`td`)(1916,`code`),bT(1917,`fallbacks`),cf()(),Aa(1918,`td`),bT(1919,`none`),cf(),Aa(1920,`td`),bT(1921,`An object that maps a locale to the one its messages come from, such as `),Aa(1922,`code`),bT(1923,`'de-AT': 'de'`),cf(),bT(1924,`. Keys count as supported locales.`),cf()(),Aa(1925,`tr`)(1926,`td`)(1927,`code`),bT(1928,`missingKey`),cf()(),Aa(1929,`td`)(1930,`code`),bT(1931,`'fallback'`),cf()(),Aa(1932,`td`),bT(1933,`What a missing key returns: `),Aa(1934,`code`),bT(1935,`'fallback'`),cf(),bT(1936,`, `),Aa(1937,`code`),bT(1938,`'key'`),cf(),bT(1939,`, `),Aa(1940,`code`),bT(1941,`'empty'`),cf(),bT(1942,`, `),Aa(1943,`code`),bT(1944,`'throw'`),cf(),bT(1945,`, or a function that receives the key and the locale. See `),Aa(1946,`a`,92),bT(1947,`Handle missing keys and reload catalogs`),cf(),bT(1948,`.`),cf()(),Aa(1949,`tr`)(1950,`td`)(1951,`code`),bT(1952,`logMissingKeys`),cf()(),Aa(1953,`td`)(1954,`code`),bT(1955,`'once'`),cf()(),Aa(1956,`td`),bT(1957,`Warn about missing keys and default-locale fallbacks `),Aa(1958,`code`),bT(1959,`'once'`),cf(),bT(1960,` per key, `),Aa(1961,`code`),bT(1962,`'always'`),cf(),bT(1963,`, or `),Aa(1964,`code`),bT(1965,`'never'`),cf(),bT(1966,`.`),cf()(),Aa(1967,`tr`)(1968,`td`)(1969,`code`),bT(1970,`responseHeaders`),cf()(),Aa(1971,`td`)(1972,`code`),bT(1973,`true`),cf()(),Aa(1974,`td`),bT(1975,`Set `),Aa(1976,`code`),bT(1977,`Content-Language`),cf(),bT(1978,` and `),Aa(1979,`code`),bT(1980,`Vary`),cf(),bT(1981,` on HTTP responses.`),cf()(),Aa(1982,`tr`)(1983,`td`)(1984,`code`),bT(1985,`imports`),cf()(),Aa(1986,`td`),bT(1987,`none`),cf(),Aa(1988,`td`),bT(1989,`Modules whose exported providers loader, resolver and formatter classes inject.`),cf()(),Aa(1990,`tr`)(1991,`td`)(1992,`code`),bT(1993,`isGlobal`),cf()(),Aa(1994,`td`)(1995,`code`),bT(1996,`true`),cf()(),Aa(1997,`td`),bT(1998,`Register the module globally.`),cf()()()(),Aa(1999,`p`)(2e3,`code`),bT(2001,`JsonI18nLoader`),cf(),bT(2002,` takes `),Aa(2003,`code`),bT(2004,`path`),cf(),bT(2005,`, the directory with one subdirectory per locale, and `),Aa(2006,`code`),bT(2007,`watch`),cf(),bT(2008,` (default `),Aa(2009,`code`),bT(2010,`false`),cf(),bT(2011,`), which reloads catalogs when a file changes. `),Aa(2012,`code`),bT(2013,`InMemoryI18nLoader`),cf(),bT(2014,` takes the catalogs as an object keyed by locale.`),cf(),Aa(2015,`h5`,93)(2016,`span`),bT(2017,`Locale resolvers`),cf()(),Aa(2018,`table`)(2019,`thead`)(2020,`tr`)(2021,`th`),bT(2022,`Resolver`),cf(),Aa(2023,`th`),bT(2024,`Reads`),cf(),Aa(2025,`th`),bT(2026,`Default name`),cf()()(),Aa(2027,`tbody`)(2028,`tr`)(2029,`td`)(2030,`code`),bT(2031,`QueryLocaleResolver`),cf()(),Aa(2032,`td`),bT(2033,`a query parameter`),cf(),Aa(2034,`td`)(2035,`code`),bT(2036,`lang`),cf()()(),Aa(2037,`tr`)(2038,`td`)(2039,`code`),bT(2040,`HeaderLocaleResolver`),cf()(),Aa(2041,`td`),bT(2042,`a request header`),cf(),Aa(2043,`td`)(2044,`code`),bT(2045,`x-lang`),cf()()(),Aa(2046,`tr`)(2047,`td`)(2048,`code`),bT(2049,`AcceptLanguageLocaleResolver`),cf()(),Aa(2050,`td`)(2051,`code`),bT(2052,`Accept-Language`),cf(),bT(2053,`, ordered by `),Aa(2054,`code`),bT(2055,`q`),cf(),bT(2056,` values`),cf(),Aa(2057,`td`),bT(2058,`none`),cf()(),Aa(2059,`tr`)(2060,`td`)(2061,`code`),bT(2062,`CookieLocaleResolver`),cf()(),Aa(2063,`td`),bT(2064,`a cookie in the `),Aa(2065,`code`),bT(2066,`Cookie`),cf(),bT(2067,` header`),cf(),Aa(2068,`td`)(2069,`code`),bT(2070,`lang`),cf()()()()(),Aa(2071,`p`),bT(2072,`A custom resolver extends `),Aa(2073,`code`),bT(2074,`LocaleResolver`),cf(),bT(2075,` and implements `),Aa(2076,`code`),bT(2077,`resolve()`),cf(),bT(2078,`, which receives the request `),Aa(2079,`code`),bT(2080,`headers`),cf(),bT(2081,` and `),Aa(2082,`code`),bT(2083,`query`),cf(),bT(2084,`, and returns a candidate, a list of candidates, or nothing. It lists the headers it reads in `),Aa(2085,`code`),bT(2086,`varyHeaders`),cf(),bT(2087,`. With `),Aa(2088,`code`),bT(2089,`afterGuards`),cf(),bT(2090,` set, it runs after guards, keeping its rank, and receives the `),Aa(2091,`code`),bT(2092,`executionContext`),cf(),bT(2093,`, as every resolver does for microservices, WebSocket gateways and GraphQL subscriptions. See `),Aa(2094,`a`,53),bT(2095,`Use the customer's saved language`),cf(),bT(2096,`.`),cf(),Aa(2097,`h5`,94)(2098,`span`),bT(2099,`Translation API`),cf()(),Aa(2100,`ul`)(2101,`li`)(2102,`code`),bT(2103,`I18nService.t(key, options)`),cf(),bT(2104,`: translates for the current locale. `),Aa(2105,`code`),bT(2106,`options`),cf(),bT(2107,` takes `),Aa(2108,`code`),bT(2109,`args`),cf(),bT(2110,`, the placeholder values (a numeric `),Aa(2111,`code`),bT(2112,`count`),cf(),bT(2113,` selects the plural form), and `),Aa(2114,`code`),bT(2115,`locale`),cf(),bT(2116,`, an explicit locale. See `),Aa(2117,`a`,46),bT(2118,`Translate order confirmations`),cf(),bT(2119,`. `),Aa(2120,`code`),bT(2121,`I18nService<OtherTranslations>`),cf(),bT(2122,` checks keys against another catalog shape.`),cf(),Aa(2123,`li`)(2124,`code`),bT(2125,`I18nService.translate(key, options)`),cf(),bT(2126,`: the same with an unchecked key, for keys built at runtime.`),cf(),Aa(2127,`li`)(2128,`code`),bT(2129,`I18nService.exists(key, locale)`),cf(),bT(2130,`: whether a key has a message.`),cf(),Aa(2131,`li`)(2132,`code`),bT(2133,`I18nService.formatNumber(value, options)`),cf(),bT(2134,` and `),Aa(2135,`code`),bT(2136,`formatDate(value, options)`),cf(),bT(2137,`: `),Aa(2138,`code`),bT(2139,`Intl`),cf(),bT(2140,` formatting in the current locale, with the usual `),Aa(2141,`code`),bT(2142,`Intl`),cf(),bT(2143,` options plus `),Aa(2144,`code`),bT(2145,`locale`),cf(),bT(2146,`. See `),Aa(2147,`a`,52),bT(2148,`Format prices and dates`),cf(),bT(2149,`.`),cf(),Aa(2150,`li`)(2151,`code`),bT(2152,`I18nService.matchLocale(candidate)`),cf(),bT(2153,`: maps a locale, such as one saved on a profile, to a supported one, or `),Aa(2154,`code`),bT(2155,`undefined`),cf(),bT(2156,`.`),cf(),Aa(2157,`li`)(2158,`code`),bT(2159,`I18nService.defaultLocale`),cf(),bT(2160,` and `),Aa(2161,`code`),bT(2162,`supportedLocales`),cf(),bT(2163,`: the configured locales, for a language picker.`),cf(),Aa(2164,`li`)(2165,`code`),bT(2166,`I18nContext.locale`),cf(),bT(2167,` and `),Aa(2168,`code`),bT(2169,`I18nContext.run(locale, fn)`),cf(),bT(2170,`: read the current locale, or make one current for code outside a request.`),cf(),Aa(2171,`li`)(2172,`code`),bT(2173,`I18nContext.setLocale(locale)`),cf(),bT(2174,`: changes the locale for the rest of the request and returns the matched locale, or `),Aa(2175,`code`),bT(2176,`undefined`),cf(),bT(2177,` for an unsupported one, which changes nothing. It throws outside a request, and on microservices, WebSocket gateways and GraphQL subscriptions in guards, which run before the locale is resolved.`),cf(),Aa(2178,`li`)(2179,`code`),bT(2180,`@CurrentLocale()`),cf(),bT(2181,`: the current locale as a handler parameter.`),cf(),Aa(2182,`li`)(2183,`code`),bT(2184,`t(key, options)`),cf(),bT(2185,`: `),Aa(2186,`code`),bT(2187,`I18nService.t()`),cf(),bT(2188,` for code without dependency injection. Outside a request, it returns the key. See `),Aa(2189,`a`,95),bT(2190,`Localize exceptions`),cf(),bT(2191,`.`),cf()(),Aa(2192,`h5`,96)(2193,`span`),bT(2194,`Validation`),cf()(),Aa(2195,`table`)(2196,`thead`)(2197,`tr`)(2198,`th`),bT(2199,`Export`),cf(),Aa(2200,`th`),bT(2201,`Description`),cf()()(),Aa(2202,`tbody`)(2203,`tr`)(2204,`td`)(2205,`code`),bT(2206,`I18nValidationPipe`),cf()(),Aa(2207,`td`),bT(2208,`Takes the `),Aa(2209,`code`),bT(2210,`ValidationPipe`),cf(),bT(2211,` options, plus `),Aa(2212,`code`),bT(2213,`namespace`),cf(),bT(2214,` (default `),Aa(2215,`code`),bT(2216,`'validation'`),cf(),bT(2217,`) for constraint messages. See `),Aa(2218,`a`,57),bT(2219,`Localize validation messages`),cf(),bT(2220,`.`),cf()(),Aa(2221,`tr`)(2222,`td`)(2223,`code`),bT(2224,`I18nStandardSchemaValidationPipe`),cf()(),Aa(2225,`td`),bT(2226,`Takes the `),Aa(2227,`code`),bT(2228,`StandardSchemaValidationPipe`),cf(),bT(2229,` options, plus `),Aa(2230,`code`),bT(2231,`namespace`),cf(),bT(2232,` and `),Aa(2233,`code`),bT(2234,`issueKeys`),cf(),bT(2235,`, a function that returns extra candidate keys for an issue. See `),Aa(2236,`a`,97),bT(2237,`With Zod`),cf(),bT(2238,`.`),cf()(),Aa(2239,`tr`)(2240,`td`)(2241,`code`),bT(2242,`i18nValidationMessage(key, args)`),cf()(),Aa(2243,`td`),bT(2244,`Points a `),Aa(2245,`code`),bT(2246,`class-validator`),cf(),bT(2247,` constraint at a key.`),cf()(),Aa(2248,`tr`)(2249,`td`)(2250,`code`),bT(2251,`i18nIssueMessage(key, args)`),cf()(),Aa(2252,`td`),bT(2253,`Points a Standard Schema issue at a key.`),cf()(),Aa(2254,`tr`)(2255,`td`)(2256,`code`),bT(2257,`translateValidationErrors(errors, options)`),cf()(),Aa(2258,`td`),bT(2259,`Translates `),Aa(2260,`code`),bT(2261,`class-validator`),cf(),bT(2262,` errors, for pipes of your own.`),cf()(),Aa(2263,`tr`)(2264,`td`)(2265,`code`),bT(2266,`translateStandardSchemaIssues(issues, options)`),cf()(),Aa(2267,`td`),bT(2268,`Translates Standard Schema issues, for pipes of your own.`),cf()()()(),Aa(2269,`h5`,98)(2270,`span`),bT(2271,`Errors`),cf()(),Aa(2272,`table`)(2273,`thead`)(2274,`tr`)(2275,`th`),bT(2276,`Error`),cf(),Aa(2277,`th`),bT(2278,`When`),cf()()(),Aa(2279,`tbody`)(2280,`tr`)(2281,`td`)(2282,`code`),bT(2283,`I18nMissingKeyError`),cf()(),Aa(2284,`td`),bT(2285,`A key is missing under `),Aa(2286,`code`),bT(2287,`missingKey: 'throw'`),cf(),bT(2288,`. It carries `),Aa(2289,`code`),bT(2290,`key`),cf(),bT(2291,` and `),Aa(2292,`code`),bT(2293,`locale`),cf(),bT(2294,`, and isn't an `),Aa(2295,`code`),bT(2296,`HttpException`),cf(),bT(2297,`, so the request fails with a 500.`),cf()()()()(),Aa(2298,`a`,99),Wa(2299,`i`,100),Aa(2300,`span`),bT(2301,`Edit on GitHub`),cf()()()),c&2){let y=tT(67),k=tT(95),T=tT(207),j=tT(256),A=tT(284),I=tT(295),C=tT(409),R=tT(440),L=tT(462),q=tT(503),B=tT(517),M=tT(611),P=tT(653),F=tT(662),D=tT(697),N=tT(711),U=tT(722),z=tT(796),J=tT(829),G=tT(840),K=tT(854),Y=tT(921),Z=tT(1055),X=tT(1069),ee=tT(1133),te=tT(1164),ne=tT(1192),ie=tT(1226),ae=tT(1251),oe=tT(1378),re=tT(1409),le=tT(1418),se=tT(1446),we=tT(1504),ke=tT(1526),Te=tT(1650),je=tT(1667),Ae=tT(1689);zC(64),hf(` `,jT(65,44,`src/i18n/en/orders.json`,y.isJsActive),`
`),zC(28),hf(` `,jT(93,47,`app.module`,k.isJsActive),`
`),zC(112),hf(` `,jT(205,50,`i18n/translations`,T.isJsActive),`
`),zC(49),hf(` `,jT(254,53,`orders/orders.service`,j.isJsActive),`
`),zC(28),hf(` `,jT(282,56,`orders/orders.controller`,A.isJsActive),`
`),zC(11),hf(` `,jT(293,59,`src/i18n/pl/orders.json`,I.isJsActive),`
`),zC(77),Xy(``,`{`,``,`{`,`id`,`}`,``,`}`),zC(3),Ky(``,`{`,`id`,`}`),zC(34),hf(` `,jT(407,62,`orders/orders.service`,C.isJsActive),`
`),zC(31),hf(` `,jT(438,65,`orders/orders.controller`,R.isJsActive),`
`),zC(22),hf(` `,jT(460,68,`common/problem-details.filter`,L.isJsActive),`
`),zC(41),hf(` `,jT(501,71,`app.module`,q.isJsActive),`
`),zC(14),hf(` `,jT(515,74,`orders/dto/create-order.dto`,B.isJsActive),`
`),zC(94),hf(` `,jT(609,77,`src/i18n/pl/validation.json`,M.isJsActive),`
`),zC(42),hf(` `,jT(651,80,`orders/dto/shipping-address.dto`,P.isJsActive),`
`),zC(9),hf(` `,jT(660,83,`orders/orders.controller`,F.isJsActive),`
`),zC(35),hf(` `,jT(695,86,`app.module`,D.isJsActive),`
`),zC(14),hf(` `,jT(709,89,`orders/orders.schemas`,N.isJsActive),`
`),zC(11),hf(` `,jT(720,92,`orders/orders.controller`,U.isJsActive),`
`),zC(74),hf(` `,jT(794,95,`src/i18n/pl/validation.json`,z.isJsActive),`
`),zC(33),hf(` `,jT(827,98,`app.module`,J.isJsActive),`
`),zC(11),hf(` `,jT(838,101,`orders/order.model`,G.isJsActive),`
`),zC(14),hf(` `,jT(852,104,`orders/orders.resolver`,K.isJsActive),`
`),zC(67),hf(` `,jT(919,107,`orders/orders.service`,Y.isJsActive),`
`),zC(134),hf(` `,jT(1053,110,`customers/customer-locale.resolver`,Z.isJsActive),`
`),zC(14),hf(` `,jT(1067,113,`app.module`,X.isJsActive),`
`),zC(64),hf(` `,jT(1131,116,`customers/customers.controller`,ee.isJsActive),`
`),zC(31),hf(` `,jT(1162,119,`src/i18n/de/customers.json`,te.isJsActive),`
`),zC(28),hf(` `,jT(1190,122,`common/message-locale.resolver`,ne.isJsActive),`
`),zC(34),hf(` `,jT(1224,125,`orders/order-updates.gateway`,ie.isJsActive),`
`),zC(25),hf(` `,jT(1249,128,`app.module`,ae.isJsActive),`
`),zC(127),hf(` `,jT(1376,131,`app.module`,oe.isJsActive),`
`),zC(31),hf(` `,jT(1407,134,`i18n/i18n-config.service`,re.isJsActive),`
`),zC(9),hf(` `,jT(1416,137,`app.module`,le.isJsActive),`
`),zC(28),hf(` `,jT(1444,140,`i18n/remote-i18n.loader`,se.isJsActive),`
`),zC(58),hf(` `,jT(1502,143,`i18n/icu-message.formatter`,we.isJsActive),`
`),zC(22),hf(` `,jT(1524,146,`app.module`,ke.isJsActive),`
`),zC(124),hf(` `,jT(1648,149,`test/orders.e2e.spec`,Te.isJsActive),`
`),zC(17),hf(` `,jT(1665,152,`test/orders.service.spec`,je.isJsActive),`
`),zC(22),hf(` `,jT(1687,155,`test/catalogs.spec`,Ae.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return d})();var Ee=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-logger`]],features:[xy],decls:1328,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`logger`],[`href`,`#json-logging`],[`href`,`#structured-logging-params`],[`href`,`#correlating-logs-with-requests`],[`href`,`#logging-in-production`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/pinojs/pino`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/winstonjs/winston`],[`href`,`#use-external-logger`],[`appAnchor`,``,`id`,`basic-customization`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`json-logging`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mau.nestjs.com`],[1,`language-json`],[`href`,`#extend-built-in-logger`],[`appAnchor`,``,`id`,`structured-logging-params`],[1,`language-plaintext`],[`appAnchor`,``,`id`,`logging-in-production`],[`appAnchor`,``,`id`,`using-the-logger-for-application-logging`],[1,`language-bash`],[`href`,`application/logger#dependency-injection`],[`href`,`application/logger#injecting-a-custom-logger`],[`appAnchor`,``,`id`,`logs-with-timestamps`],[`appAnchor`,``,`id`,`custom-implementation`],[`appAnchor`,``,`id`,`extend-built-in-logger`],[`href`,`application/logger#using-the-logger-for-application-logging`],[`href`,`application/logger#custom-implementation`],[`appAnchor`,``,`id`,`dependency-injection`],[`routerLink`,`/standalone-applications`],[1,`warning`],[`href`,`#custom-implementation`],[`appAnchor`,``,`id`,`injecting-a-custom-logger`],[`routerLink`,`/fundamentals/injection-scopes`],[`appAnchor`,``,`id`,`correlating-logs-with-requests`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.observe.nestjs.com/`,`title`,`NestJS Observe`],[`href`,`/observability/sdk#trace-correlation`],[`href`,`/observability/sdk#logs`],[`href`,`/observability/manual-instrumentation#request-scoped-attributes`],[`routerLink`,`/recipes/async-local-storage`],[`appAnchor`,``,`id`,`use-external-logger`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/logger.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Logger`),cf(),Aa(5,`p`),bT(6,`Nest comes with a built-in logger that is used during application bootstrapping and in several other circumstances, such as displaying caught exceptions (i.e., system logging). This functionality is provided by the `),Aa(7,`code`),bT(8,`Logger`),cf(),bT(9,` class in the `),Aa(10,`code`),bT(11,`@nestjs/common`),cf(),bT(12,` package. You can fully control the behavior of the logging system, including any of the following:`),cf(),Aa(13,`ul`)(14,`li`),bT(15,`disable logging entirely`),cf(),Aa(16,`li`),bT(17,`specify the level of detail (e.g., display errors, warnings, debug information, etc.)`),cf(),Aa(18,`li`),bT(19,`configure the formatting of log messages (raw, JSON, colorized, etc.)`),cf(),Aa(20,`li`),bT(21,`override the timestamp in the default logger (e.g., use the ISO 8601 standard as the date format)`),cf(),Aa(22,`li`),bT(23,`completely override the default logger`),cf(),Aa(24,`li`),bT(25,`customize the default logger by extending it`),cf(),Aa(26,`li`),bT(27,`use dependency injection to simplify composing and testing your application`),cf()(),Aa(28,`p`),bT(29,`You can also use the built-in logger, or create your own custom implementation, to log your own application-level events and messages.`),cf(),Aa(30,`p`),bT(31,`The built-in logger is not only a development convenience. Combined with `),Aa(32,`a`,4),bT(33,`JSON output`),cf(),bT(34,`, `),Aa(35,`a`,5),bT(36,`structured logging params`),cf(),bT(37,`, and the trace id that `),Aa(38,`a`,6),bT(39,`NestJS Observe`),cf(),bT(40,` attaches to every line written during a request, it covers what most production applications need from a logger: one machine-readable record per line on stdout, queryable fields, log levels, and a way to tie each line back to the request that wrote it. Container platforms and log aggregators (CloudWatch, Cloud Logging, Datadog, Loki, Elasticsearch, and so on) ingest that output as-is, with no extra dependency in your application. The `),Aa(41,`a`,7),bT(42,`Logging in production`),cf(),bT(43,` section below shows the full setup.`),cf(),Aa(44,`p`),bT(45,`Reach for a dedicated library such as `),Aa(46,`a`,8),bT(47,`Pino`),cf(),bT(48,` or `),Aa(49,`a`,9),bT(50,`Winston`),cf(),bT(51,` when you need something the built-in logger deliberately leaves out: writing to files or other transports from inside the process, field redaction, or the last bit of throughput on very log-heavy services. See `),Aa(52,`a`,10),bT(53,`Use external logger`),cf(),bT(54,`.`),cf(),Aa(55,`h4`,11)(56,`span`),bT(57,`Basic customization`),cf()(),Aa(58,`p`),bT(59,`To disable logging, set the `),Aa(60,`code`),bT(61,`logger`),cf(),bT(62,` property to `),Aa(63,`code`),bT(64,`false`),cf(),bT(65,` in the (optional) Nest application options object, passed as the second argument to the `),Aa(66,`code`),bT(67,`NestFactory.create()`),cf(),bT(68,` method.`),cf(),Aa(69,`app-copy-button`)(70,`pre`)(71,`code`,12),bT(72,`
const app = await NestFactory.create(AppModule, {
  logger: false,
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(73,`p`),bT(74,`To enable specific log levels, set the `),Aa(75,`code`),bT(76,`logger`),cf(),bT(77,` property to an array of strings specifying the log levels to display, as follows:`),cf(),Aa(78,`app-copy-button`)(79,`pre`)(80,`code`,12),bT(81,`
const app = await NestFactory.create(AppModule, {
  logger: ['error', 'warn'],
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(82,`p`),bT(83,`Values in the array can be any combination of `),Aa(84,`code`),bT(85,`'log'`),cf(),bT(86,`, `),Aa(87,`code`),bT(88,`'fatal'`),cf(),bT(89,`, `),Aa(90,`code`),bT(91,`'error'`),cf(),bT(92,`, `),Aa(93,`code`),bT(94,`'warn'`),cf(),bT(95,`, `),Aa(96,`code`),bT(97,`'debug'`),cf(),bT(98,`, and `),Aa(99,`code`),bT(100,`'verbose'`),cf(),bT(101,`.`),cf(),Aa(102,`blockquote`,13)(103,`strong`),bT(104,`Hint`),cf(),bT(105,` Log levels cascade from the most severe level in the array: every level at least as severe as that one is enabled too. `),Aa(106,`code`),bT(107,`['log']`),cf(),bT(108,` therefore also enables `),Aa(109,`code`),bT(110,`'warn'`),cf(),bT(111,`, `),Aa(112,`code`),bT(113,`'error'`),cf(),bT(114,`, and `),Aa(115,`code`),bT(116,`'fatal'`),cf(),bT(117,`. Less severe levels are enabled only if they are listed, so `),Aa(118,`code`),bT(119,`['debug', 'error']`),cf(),bT(120,` enables `),Aa(121,`code`),bT(122,`'debug'`),cf(),bT(123,`, `),Aa(124,`code`),bT(125,`'error'`),cf(),bT(126,`, and `),Aa(127,`code`),bT(128,`'fatal'`),cf(),bT(129,`, but not `),Aa(130,`code`),bT(131,`'log'`),cf(),bT(132,` or `),Aa(133,`code`),bT(134,`'warn'`),cf(),bT(135,`.
`),cf(),Aa(136,`p`),bT(137,`To enable a level and everything more severe than it, build the array with `),Aa(138,`code`),bT(139,`filterLogLevels()`),cf(),bT(140,` instead of listing the levels by hand. It takes a string, which makes it a good fit for an environment variable:`),cf(),Aa(141,`app-copy-button`)(142,`pre`)(143,`code`,12),bT(144,`
import { filterLogLevels } from '@nestjs/common';

const app = await NestFactory.create(AppModule, {
  logger: filterLogLevels(process.env.LOG_LEVEL ?? '>=warn'), // ['warn', 'error', 'fatal']
});
`),cf()()(),Aa(145,`p`),bT(146,`Besides `),Aa(147,`code`),bT(148,`'>=warn'`),cf(),bT(149,`, it accepts `),Aa(150,`code`),bT(151,`'>warn'`),cf(),bT(152,` (more severe than `),Aa(153,`code`),bT(154,`warn`),cf(),bT(155,` only), a comma-separated list such as `),Aa(156,`code`),bT(157,`'log,error'`),cf(),bT(158,`, or a single level. An empty or unrecognized string returns all levels, and an unknown level after `),Aa(159,`code`),bT(160,`>`),cf(),bT(161,` or `),Aa(162,`code`),bT(163,`>=`),cf(),bT(164,` throws.`),cf(),Aa(165,`p`),bT(166,`To change the levels after the application has been created (for example, once your configuration has loaded), pass an array of levels to `),Aa(167,`code`),bT(168,`app.useLogger()`),cf(),bT(169,`. Nest hands it to the current logger's `),Aa(170,`code`),bT(171,`setLogLevels()`),cf(),bT(172,` method:`),cf(),Aa(173,`app-copy-button`)(174,`pre`)(175,`code`,12),bT(176,`
app.useLogger(['error', 'warn']);
`),cf()()(),Aa(177,`p`),bT(178,`To disable colorized output, pass a `),Aa(179,`code`),bT(180,`ConsoleLogger`),cf(),bT(181,` instance with the `),Aa(182,`code`),bT(183,`colors`),cf(),bT(184,` property set to `),Aa(185,`code`),bT(186,`false`),cf(),bT(187,` as the value of the `),Aa(188,`code`),bT(189,`logger`),cf(),bT(190,` property:`),cf(),Aa(191,`app-copy-button`)(192,`pre`)(193,`code`,12),bT(194,`
const app = await NestFactory.create(AppModule, {
  logger: new ConsoleLogger({
    colors: false,
  }),
});
`),cf()()(),Aa(195,`p`),bT(196,`Colors are also off by default when the `),Aa(197,`code`),bT(198,`NO_COLOR`),cf(),bT(199,` environment variable is set to any non-empty value.`),cf(),Aa(200,`p`),bT(201,`To configure a prefix for each log message, pass a `),Aa(202,`code`),bT(203,`ConsoleLogger`),cf(),bT(204,` instance with the `),Aa(205,`code`),bT(206,`prefix`),cf(),bT(207,` property set:`),cf(),Aa(208,`app-copy-button`)(209,`pre`)(210,`code`,12),bT(211,`
const app = await NestFactory.create(AppModule, {
  logger: new ConsoleLogger({
    prefix: 'MyApp', // Default is "Nest"
  }),
});
`),cf()()(),Aa(212,`p`),bT(213,`The following table lists all available options:`),cf(),Aa(214,`table`)(215,`thead`)(216,`tr`)(217,`th`),bT(218,`Option`),cf(),Aa(219,`th`),bT(220,`Description`),cf(),Aa(221,`th`),bT(222,`Default`),cf()()(),Aa(223,`tbody`)(224,`tr`)(225,`td`)(226,`code`),bT(227,`logLevels`),cf()(),Aa(228,`td`),bT(229,`Enabled log levels.`),cf(),Aa(230,`td`)(231,`code`),bT(232,`['log', 'fatal', 'error', 'warn', 'debug', 'verbose']`),cf()()(),Aa(233,`tr`)(234,`td`)(235,`code`),bT(236,`timestamp`),cf()(),Aa(237,`td`),bT(238,`If enabled, will print timestamp (time difference) between current and previous log message. Note: This option is not used when `),Aa(239,`code`),bT(240,`json`),cf(),bT(241,` is enabled.`),cf(),Aa(242,`td`)(243,`code`),bT(244,`false`),cf()()(),Aa(245,`tr`)(246,`td`)(247,`code`),bT(248,`prefix`),cf()(),Aa(249,`td`),bT(250,`A prefix to be used for each log message. Note: This option is not used when `),Aa(251,`code`),bT(252,`json`),cf(),bT(253,` is enabled.`),cf(),Aa(254,`td`)(255,`code`),bT(256,`Nest`),cf()()(),Aa(257,`tr`)(258,`td`)(259,`code`),bT(260,`json`),cf()(),Aa(261,`td`),bT(262,`If enabled, will print the log message in JSON format.`),cf(),Aa(263,`td`)(264,`code`),bT(265,`false`),cf()()(),Aa(266,`tr`)(267,`td`)(268,`code`),bT(269,`colors`),cf()(),Aa(270,`td`),bT(271,`If enabled, will print the log message in color.`),cf(),Aa(272,`td`)(273,`code`),bT(274,`true`),cf(),bT(275,` (`),Aa(276,`code`),bT(277,`false`),cf(),bT(278,` if `),Aa(279,`code`),bT(280,`json`),cf(),bT(281,` is enabled or `),Aa(282,`code`),bT(283,`NO_COLOR`),cf(),bT(284,` is set)`),cf()(),Aa(285,`tr`)(286,`td`)(287,`code`),bT(288,`context`),cf()(),Aa(289,`td`),bT(290,`The context of the logger.`),cf(),Aa(291,`td`)(292,`code`),bT(293,`undefined`),cf()()(),Aa(294,`tr`)(295,`td`)(296,`code`),bT(297,`forceConsole`),cf()(),Aa(298,`td`),bT(299,`If enabled, will use `),Aa(300,`code`),bT(301,`console.log`),cf(),bT(302,`/`),Aa(303,`code`),bT(304,`console.error`),cf(),bT(305,` instead of `),Aa(306,`code`),bT(307,`process.stdout.write`),cf(),bT(308,`/`),Aa(309,`code`),bT(310,`process.stderr.write`),cf(),bT(311,`. Useful in test environments, such as Jest, that buffer console calls.`),cf(),Aa(312,`td`)(313,`code`),bT(314,`false`),cf()()(),Aa(315,`tr`)(316,`td`)(317,`code`),bT(318,`compact`),cf()(),Aa(319,`td`),bT(320,`If enabled, will print the log message in a single line, even if it is an object with multiple properties. If set to a number, the most n inner elements are united on a single line as long as all properties fit into breakLength. Short array elements are also grouped together.`),cf(),Aa(321,`td`)(322,`code`),bT(323,`false`),cf(),bT(324,` (`),Aa(325,`code`),bT(326,`true`),cf(),bT(327,` if `),Aa(328,`code`),bT(329,`json`),cf(),bT(330,` is enabled)`),cf()(),Aa(331,`tr`)(332,`td`)(333,`code`),bT(334,`maxArrayLength`),cf()(),Aa(335,`td`),bT(336,`Specifies the maximum number of Array, TypedArray, Map, Set, WeakMap, and WeakSet elements to include when formatting. Set to null or Infinity to show all elements. Set to 0 or negative to show no elements. Ignored when `),Aa(337,`code`),bT(338,`json`),cf(),bT(339,` is enabled, colors are disabled, and `),Aa(340,`code`),bT(341,`compact`),cf(),bT(342,` is set to true as it produces a parseable JSON output.`),cf(),Aa(343,`td`)(344,`code`),bT(345,`100`),cf()()(),Aa(346,`tr`)(347,`td`)(348,`code`),bT(349,`maxStringLength`),cf()(),Aa(350,`td`),bT(351,`Specifies the maximum number of characters to include when formatting. Set to null or Infinity to show all elements. Set to 0 or negative to show no characters. Ignored when `),Aa(352,`code`),bT(353,`json`),cf(),bT(354,` is enabled, colors are disabled, and `),Aa(355,`code`),bT(356,`compact`),cf(),bT(357,` is set to true as it produces a parseable JSON output.`),cf(),Aa(358,`td`)(359,`code`),bT(360,`10000`),cf()()(),Aa(361,`tr`)(362,`td`)(363,`code`),bT(364,`sorted`),cf()(),Aa(365,`td`),bT(366,`If enabled, will sort keys while formatting objects. Can also be a custom sorting function. Ignored when `),Aa(367,`code`),bT(368,`json`),cf(),bT(369,` is enabled, colors are disabled, and `),Aa(370,`code`),bT(371,`compact`),cf(),bT(372,` is set to true as it produces a parseable JSON output.`),cf(),Aa(373,`td`)(374,`code`),bT(375,`false`),cf()()(),Aa(376,`tr`)(377,`td`)(378,`code`),bT(379,`depth`),cf()(),Aa(380,`td`),bT(381,`Specifies the number of times to recurse while formatting object. This is useful for inspecting large objects. To recurse up to the maximum call stack size pass Infinity or null. Ignored when `),Aa(382,`code`),bT(383,`json`),cf(),bT(384,` is enabled, colors are disabled, and `),Aa(385,`code`),bT(386,`compact`),cf(),bT(387,` is set to true as it produces a parseable JSON output.`),cf(),Aa(388,`td`)(389,`code`),bT(390,`5`),cf()()(),Aa(391,`tr`)(392,`td`)(393,`code`),bT(394,`showHidden`),cf()(),Aa(395,`td`),bT(396,`If true, object's non-enumerable symbols and properties are included in the formatted result. WeakMap and WeakSet entries are also included as well as user defined prototype properties`),cf(),Aa(397,`td`)(398,`code`),bT(399,`false`),cf()()(),Aa(400,`tr`)(401,`td`)(402,`code`),bT(403,`breakLength`),cf()(),Aa(404,`td`),bT(405,`The length at which input values are split across multiple lines. Set to Infinity to format the input as a single line (in combination with "compact" set to true). Ignored when `),Aa(406,`code`),bT(407,`json`),cf(),bT(408,` is enabled, colors are disabled, and `),Aa(409,`code`),bT(410,`compact`),cf(),bT(411,` is set to true as it produces a parseable JSON output.`),cf(),Aa(412,`td`)(413,`code`),bT(414,`Infinity`),cf(),bT(415,` when `),Aa(416,`code`),bT(417,`compact`),cf(),bT(418,` is enabled, or when colors are off and `),Aa(419,`code`),bT(420,`compact`),cf(),bT(421,` isn't explicitly `),Aa(422,`code`),bT(423,`false`),cf(),bT(424,`; `),Aa(425,`code`),bT(426,`80`),cf(),bT(427,` otherwise`),cf()()()(),Aa(428,`h4`,14)(429,`span`),bT(430,`JSON logging`),cf()(),Aa(431,`p`),bT(432,`JSON logging is essential for application observability and for integration with log management systems. To enable it, create a `),Aa(433,`code`),bT(434,`ConsoleLogger`),cf(),bT(435,` instance with its `),Aa(436,`code`),bT(437,`json`),cf(),bT(438,` property set to `),Aa(439,`code`),bT(440,`true`),cf(),bT(441,`, and pass it as the value of the `),Aa(442,`code`),bT(443,`logger`),cf(),bT(444,` property when creating the application instance:`),cf(),Aa(445,`app-copy-button`)(446,`pre`)(447,`code`,12),bT(448,`
const app = await NestFactory.create(AppModule, {
  logger: new ConsoleLogger({
    json: true,
  }),
});
`),cf()()(),Aa(449,`p`),bT(450,`This configuration outputs logs in a structured JSON format, which makes it easier to integrate with external systems such as log aggregators and cloud platforms. For example, platforms like `),Aa(451,`strong`),bT(452,`AWS ECS`),cf(),bT(453,` (Elastic Container Service) natively support JSON logs, enabling features like:`),cf(),Aa(454,`ul`)(455,`li`)(456,`strong`),bT(457,`Log filtering`),cf(),bT(458,`: narrow down logs based on fields like log level, timestamp, or custom metadata.`),cf(),Aa(459,`li`)(460,`strong`),bT(461,`Search and analysis`),cf(),bT(462,`: use query tools to analyze and track trends in your application's behavior.`),cf()(),Aa(463,`p`),bT(464,`If you're using `),Aa(465,`a`,15),bT(466,`NestJS Mau`),cf(),bT(467,`, JSON logging also lets you view logs in a well-organized, structured format, which is especially useful for debugging and performance monitoring.`),cf(),Aa(468,`blockquote`,13)(469,`strong`),bT(470,`Note`),cf(),bT(471,` When `),Aa(472,`code`),bT(473,`json`),cf(),bT(474,` is set to `),Aa(475,`code`),bT(476,`true`),cf(),bT(477,`, the `),Aa(478,`code`),bT(479,`ConsoleLogger`),cf(),bT(480,` defaults `),Aa(481,`code`),bT(482,`colors`),cf(),bT(483,` to `),Aa(484,`code`),bT(485,`false`),cf(),bT(486,` and `),Aa(487,`code`),bT(488,`compact`),cf(),bT(489,` to `),Aa(490,`code`),bT(491,`true`),cf(),bT(492,`. With those two values, each entry is serialized with `),Aa(493,`code`),bT(494,`JSON.stringify()`),cf(),bT(495,`, so the output is valid JSON, free of formatting artifacts. For development, you can explicitly set `),Aa(496,`code`),bT(497,`colors`),cf(),bT(498,` to `),Aa(499,`code`),bT(500,`true`),cf(),bT(501,` (or `),Aa(502,`code`),bT(503,`compact`),cf(),bT(504,` to `),Aa(505,`code`),bT(506,`false`),cf(),bT(507,`). Entries are then rendered with Node's `),Aa(508,`code`),bT(509,`util.inspect()`),cf(),bT(510,`, which is easier to read during local debugging but is no longer strict JSON.
`),cf(),Aa(511,`p`),bT(512,`When JSON logging is enabled, the log output looks like this (on a single line):`),cf(),Aa(513,`pre`)(514,`code`,16),bT(515,`
{
  "level": "log",
  "pid": 19096,
  "timestamp": 1607370779834,
  "message": "Starting Nest application...",
  "context": "NestFactory"
}
`),cf()(),Aa(516,`p`),bT(517,`Each entry has the following fields:`),cf(),Aa(518,`ul`)(519,`li`)(520,`code`),bT(521,`level`),cf(),bT(522,`: the log level.`),cf(),Aa(523,`li`)(524,`code`),bT(525,`pid`),cf(),bT(526,`: the process id.`),cf(),Aa(527,`li`)(528,`code`),bT(529,`timestamp`),cf(),bT(530,`: when the entry was written, in milliseconds since the Unix epoch. The `),Aa(531,`code`),bT(532,`timestamp`),cf(),bT(533,` and `),Aa(534,`code`),bT(535,`prefix`),cf(),bT(536,` options, and a `),Aa(537,`a`,17),bT(538,`custom timestamp format`),cf(),bT(539,`, apply to text output only.`),cf(),Aa(540,`li`)(541,`code`),bT(542,`message`),cf(),bT(543,`: the message, as passed to the logger.`),cf(),Aa(544,`li`)(545,`code`),bT(546,`context`),cf(),bT(547,`: the logger context, when there is one.`),cf(),Aa(548,`li`)(549,`code`),bT(550,`stack`),cf(),bT(551,`: the stack trace passed to `),Aa(552,`code`),bT(553,`error()`),cf(),bT(554,`, when there is one.`),cf(),Aa(555,`li`)(556,`code`),bT(557,`params`),cf(),bT(558,`: the `),Aa(559,`a`,5),bT(560,`structured logging params`),cf(),bT(561,`, when any were passed.`),cf()(),Aa(562,`p`),bT(563,`As in text mode, `),Aa(564,`code`),bT(565,`error`),cf(),bT(566,` entries are written to stderr and all other levels to stdout.`),cf(),Aa(567,`h4`,18)(568,`span`),bT(569,`Structured logging params`),cf()(),Aa(570,`p`),bT(571,`Log messages often need to carry metadata: a user id, a request duration, a correlation id. Starting with NestJS v12, plain objects passed `),Aa(572,`strong`),bT(573,`after`),cf(),bT(574,` the first message argument are treated as structured params and attached to the same log entry instead of being emitted as separate log records.`),cf(),Aa(575,`app-copy-button`)(576,`pre`)(577,`code`,12),bT(578,`
const logger = new Logger('UserService');
logger.log('User created', { userId: 1, email: 'foo@bar.com' });
`),cf()()(),Aa(579,`p`),bT(580,`In text mode, the params are appended inline to the same formatted line:`),cf(),Aa(581,`pre`)(582,`code`,19),bT(583,`
[Nest] 3785  - 02/26/2026, 10:04:41 AM     LOG [UserService] User created { userId: 1, email: 'foo@bar.com' }
`),cf()(),Aa(584,`p`),bT(585,`When several plain objects are passed, they are merged into a single set of params:`),cf(),Aa(586,`app-copy-button`)(587,`pre`)(588,`code`,12),bT(589,`
logger.log('Request handled', { method: 'GET' }, { path: '/api', duration: 42 });
`),cf()()(),Aa(590,`pre`)(591,`code`,19),bT(592,`
[Nest] 3785  - 02/26/2026, 10:04:41 AM     LOG [UserService] Request handled { method: 'GET', path: '/api', duration: 42 }
`),cf()(),Aa(593,`p`),bT(594,`In JSON mode, params are nested under a `),Aa(595,`code`),bT(596,`params`),cf(),bT(597,` key by default:`),cf(),Aa(598,`pre`)(599,`code`,16),bT(600,`
{
  "level": "log",
  "pid": 3785,
  "timestamp": 1772089691769,
  "message": "User created",
  "context": "UserService",
  "params": { "userId": 1, "email": "foo@bar.com" }
}
`),cf()(),Aa(601,`p`),bT(602,`To spread them into the root of the JSON object instead (which some log aggregators prefer), enable `),Aa(603,`code`),bT(604,`flattenParams`),cf(),bT(605,`:`),cf(),Aa(606,`app-copy-button`)(607,`pre`)(608,`code`,12),bT(609,`
new ConsoleLogger({ json: true, flattenParams: true });
`),cf()()(),Aa(610,`pre`)(611,`code`,16),bT(612,`
{
  "level": "log",
  "pid": 3785,
  "timestamp": 1772089691769,
  "message": "User created",
  "context": "UserService",
  "userId": 1,
  "email": "foo@bar.com"
}
`),cf()(),Aa(613,`p`),bT(614,`The relevant `),Aa(615,`code`),bT(616,`ConsoleLogger`),cf(),bT(617,` options are:`),cf(),Aa(618,`table`)(619,`thead`)(620,`tr`)(621,`th`),bT(622,`Option`),cf(),Aa(623,`th`),bT(624,`Description`),cf(),Aa(625,`th`),bT(626,`Default`),cf()()(),Aa(627,`tbody`)(628,`tr`)(629,`td`)(630,`code`),bT(631,`structuredParams`),cf()(),Aa(632,`td`),bT(633,`If enabled, plain objects logged after the message are attached to the same entry as params.`),cf(),Aa(634,`td`)(635,`code`),bT(636,`true`),cf()()(),Aa(637,`tr`)(638,`td`)(639,`code`),bT(640,`flattenParams`),cf()(),Aa(641,`td`),bT(642,`If enabled, params are spread into the root of the JSON record instead of nested under `),Aa(643,`code`),bT(644,`params`),cf(),bT(645,`. A param whose key the record already uses (such as `),Aa(646,`code`),bT(647,`message`),cf(),bT(648,` or `),Aa(649,`code`),bT(650,`level`),cf(),bT(651,`) is dropped. JSON mode only; requires `),Aa(652,`code`),bT(653,`structuredParams`),cf(),bT(654,`.`),cf(),Aa(655,`td`)(656,`code`),bT(657,`false`),cf()()()()(),Aa(658,`blockquote`,13)(659,`strong`),bT(660,`Hint`),cf(),bT(661,` Only `),Aa(662,`strong`),bT(663,`plain objects`),cf(),bT(664,` are treated as params. Arrays, strings, numbers, class instances, and `),Aa(665,`code`),bT(666,`null`),cf(),bT(667,` are still logged as separate messages (a string passed as the `),Aa(668,`em`),bT(669,`last`),cf(),bT(670,` argument is still treated as the context), and a plain object passed as the `),Aa(671,`em`),bT(672,`first`),cf(),bT(673,` argument is still treated as the message itself. Set `),Aa(674,`code`),bT(675,`structuredParams: false`),cf(),bT(676,` to restore the pre-v12 behavior.
`),cf(),Aa(677,`h4`,20)(678,`span`),bT(679,`Logging in production`),cf()(),Aa(680,`p`),bT(681,`Put together, JSON output and structured params give you production-grade logs from the built-in logger alone:`),cf(),Aa(682,`app-copy-button`)(683,`pre`)(684,`code`,12),bT(685,`
// main.ts
const app = await NestFactory.create(AppModule, {
  logger: new ConsoleLogger({
    json: true,
    logLevels: ['log', 'warn', 'error', 'fatal'],
  }),
});
`),cf()()(),Aa(686,`app-copy-button`)(687,`pre`)(688,`code`,12),bT(689,`
// orders.service.ts
@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  async capture(order: Order) {
    // ...
    this.logger.log('Payment captured', { orderId: order.id, amount: order.total });
  }
}
`),cf()()(),Aa(690,`p`),bT(691,`With `),Aa(692,`a`,6),bT(693,`NestJS Observe`),cf(),bT(694,` installed, each line written during a request also carries that request's trace id, without changing a single log call:`),cf(),Aa(695,`pre`)(696,`code`,16),bT(697,`
{"level":"log","pid":66803,"timestamp":1789978166281,"message":"Payment captured","context":"OrdersService","params":{"orderId":"ord_8f2a","amount":4200},"traceId":"0199a3f2-7c1e-7b40-9d2a-5e8f1c3b7a64"}
`),cf()(),Aa(698,`p`),bT(699,`That single line is filterable by level and context, queryable by `),Aa(700,`code`),bT(701,`orderId`),cf(),bT(702,`, and joinable to every other line from the same request, which is the job most teams install a third-party logger to do. Write logs to stdout like this and let the platform (Docker, Kubernetes, ECS, Cloud Run, and so on) collect and ship them. That keeps rotation, buffering, and delivery out of your application process.`),cf(),Aa(703,`blockquote`,13)(704,`strong`),bT(705,`Hint`),cf(),bT(706,` Set `),Aa(707,`code`),bT(708,`flattenParams: true`),cf(),bT(709,` if your aggregator indexes top-level fields only, so `),Aa(710,`code`),bT(711,`orderId`),cf(),bT(712,` becomes a root-level field instead of `),Aa(713,`code`),bT(714,`params.orderId`),cf(),bT(715,`.
`),cf(),Aa(716,`h4`,21)(717,`span`),bT(718,`Using the logger for application logging`),cf()(),Aa(719,`p`),bT(720,`You can combine several of the techniques above to provide consistent behavior and formatting across both Nest system logging and your own application event/message logging.`),cf(),Aa(721,`p`),bT(722,`A good practice is to instantiate the `),Aa(723,`code`),bT(724,`Logger`),cf(),bT(725,` class from `),Aa(726,`code`),bT(727,`@nestjs/common`),cf(),bT(728,` in each of your services, supplying the service name as the `),Aa(729,`code`),bT(730,`context`),cf(),bT(731,` argument of the `),Aa(732,`code`),bT(733,`Logger`),cf(),bT(734,` constructor:`),cf(),Aa(735,`app-copy-button`)(736,`pre`)(737,`code`,12),bT(738,`
import { Logger, Injectable } from '@nestjs/common';

@Injectable()
class MyService {
  private readonly logger = new Logger(MyService.name);

  doSomething() {
    this.logger.log('Doing something...');
  }
}
`),cf()()(),Aa(739,`p`),bT(740,`In the default logger implementation, `),Aa(741,`code`),bT(742,`context`),cf(),bT(743,` is printed in square brackets, like `),Aa(744,`code`),bT(745,`NestFactory`),cf(),bT(746,` in the example below:`),cf(),Aa(747,`pre`)(748,`code`,22),bT(749,`
[Nest] 19096  - 12/08/2019, 7:12:59 AM     LOG [NestFactory] Starting Nest application...
`),cf()(),Aa(750,`p`),bT(751,`If a message is expensive to build, pass a function that returns it instead. In the default text format, the built-in `),Aa(752,`code`),bT(753,`ConsoleLogger`),cf(),bT(754,` calls the function only when the level is enabled, so a disabled `),Aa(755,`code`),bT(756,`debug`),cf(),bT(757,` line costs nothing:`),cf(),Aa(758,`app-copy-button`)(759,`pre`)(760,`code`,12),bT(761,"\nthis.logger.debug(() => `Cache state: ${JSON.stringify(this.cache.dump())}`);\n"),cf()()(),Aa(762,`p`),bT(763,`If you supply a custom logger via `),Aa(764,`code`),bT(765,`app.useLogger()`),cf(),bT(766,`, Nest uses it internally, and calls made through `),Aa(767,`code`),bT(768,`Logger`),cf(),bT(769,` instances are delegated to it. Your code remains implementation agnostic, and you can substitute the default logger with your own by calling `),Aa(770,`code`),bT(771,`app.useLogger()`),cf(),bT(772,`.`),cf(),Aa(773,`p`),bT(774,`For example, if you follow the steps in the `),Aa(775,`a`,23),bT(776,`Dependency injection`),cf(),bT(777,` section below and call `),Aa(778,`code`),bT(779,`app.useLogger(app.get(MyLogger))`),cf(),bT(780,`, subsequent calls to `),Aa(781,`code`),bT(782,`this.logger.log()`),cf(),bT(783,` from `),Aa(784,`code`),bT(785,`MyService`),cf(),bT(786,` result in calls to the `),Aa(787,`code`),bT(788,`log()`),cf(),bT(789,` method of the `),Aa(790,`code`),bT(791,`MyLogger`),cf(),bT(792,` instance.`),cf(),Aa(793,`p`),bT(794,`This is suitable for most cases. If you need more customization (like adding and calling custom methods), see the `),Aa(795,`a`,24),bT(796,`Injecting a custom logger`),cf(),bT(797,` section.`),cf(),Aa(798,`h4`,25)(799,`span`),bT(800,`Logs with timestamps`),cf()(),Aa(801,`p`),bT(802,`To print a timestamp difference for every logged message, pass the optional `),Aa(803,`code`),bT(804,`timestamp: true`),cf(),bT(805,` setting when creating the logger instance:`),cf(),Aa(806,`app-copy-button`)(807,`pre`)(808,`code`,12),bT(809,`
import { Logger, Injectable } from '@nestjs/common';

@Injectable()
class MyService {
  private readonly logger = new Logger(MyService.name, { timestamp: true });

  doSomething() {
    this.logger.log('Doing something with timestamp here ->');
  }
}
`),cf()()(),Aa(810,`p`),bT(811,`This will produce output in the following format:`),cf(),Aa(812,`pre`)(813,`code`,22),bT(814,`
[Nest] 19096  - 04/19/2024, 7:12:59 AM     LOG [MyService] Doing something with timestamp here -> +5ms
`),cf()(),Aa(815,`p`),bT(816,`Note the `),Aa(817,`code`),bT(818,`+5ms`),cf(),bT(819,` at the end of the line. It is the time elapsed since the previous line written by any `),Aa(820,`code`),bT(821,`ConsoleLogger`),cf(),bT(822,` in the process, not only by this logger.`),cf(),Aa(823,`h4`,26)(824,`span`),bT(825,`Custom implementation`),cf()(),Aa(826,`p`),bT(827,`You can provide a custom logger implementation for Nest to use for system logging by setting the `),Aa(828,`code`),bT(829,`logger`),cf(),bT(830,` property to an object that fulfills the `),Aa(831,`code`),bT(832,`LoggerService`),cf(),bT(833,` interface. For example, you can tell Nest to use the global JavaScript `),Aa(834,`code`),bT(835,`console`),cf(),bT(836,` object (which implements the `),Aa(837,`code`),bT(838,`LoggerService`),cf(),bT(839,` interface), as follows:`),cf(),Aa(840,`app-copy-button`)(841,`pre`)(842,`code`,12),bT(843,`
const app = await NestFactory.create(AppModule, {
  logger: console,
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(844,`p`),bT(845,`To implement your own custom logger, implement each of the methods of the `),Aa(846,`code`),bT(847,`LoggerService`),cf(),bT(848,` interface, as shown below:`),cf(),Aa(849,`app-copy-button`)(850,`pre`)(851,`code`,12),bT(852,`
import { LoggerService, LogLevel, Injectable } from '@nestjs/common';

@Injectable()
export class MyLogger implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, ...optionalParams: any[]) {}

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {}

  /**
   * Set the enabled log levels. Called by \`app.useLogger()\`
   * when it's given an array of levels.
   */
  setLogLevels?(levels: LogLevel[]) {}
}
`),cf()()(),Aa(853,`p`),bT(854,`You can then supply an instance of `),Aa(855,`code`),bT(856,`MyLogger`),cf(),bT(857,` via the `),Aa(858,`code`),bT(859,`logger`),cf(),bT(860,` property of the Nest application options object:`),cf(),Aa(861,`app-copy-button`)(862,`pre`)(863,`code`,12),bT(864,`
const app = await NestFactory.create(AppModule, {
  logger: new MyLogger(),
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(865,`p`),bT(866,`This technique, while simple, doesn't use dependency injection for the `),Aa(867,`code`),bT(868,`MyLogger`),cf(),bT(869,` class. This can pose challenges, particularly for testing, and limits the reusability of `),Aa(870,`code`),bT(871,`MyLogger`),cf(),bT(872,`. For a better solution, see the `),Aa(873,`a`,23),bT(874,`Dependency injection`),cf(),bT(875,` section below.`),cf(),Aa(876,`h4`,27)(877,`span`),bT(878,`Extend built-in logger`),cf()(),Aa(879,`p`),bT(880,`Rather than writing a logger from scratch, you may be able to meet your needs by extending the built-in `),Aa(881,`code`),bT(882,`ConsoleLogger`),cf(),bT(883,` class and overriding selected behavior of the default implementation:`),cf(),Aa(884,`app-copy-button`)(885,`pre`)(886,`code`,12),bT(887,`
import { ConsoleLogger } from '@nestjs/common';

export class MyLogger extends ConsoleLogger {
  error(message: any, stack?: string, context?: string) {
    // add your tailored logic here
    super.error(...arguments);
  }
}
`),cf()()(),Aa(888,`p`),bT(889,`The same approach changes the timestamp format. For example, to print ISO 8601 timestamps instead of the locale-formatted date, override the protected `),Aa(890,`code`),bT(891,`getTimestamp()`),cf(),bT(892,` method:`),cf(),Aa(893,`app-copy-button`)(894,`pre`)(895,`code`,12),bT(896,`
import { ConsoleLogger } from '@nestjs/common';

export class IsoTimestampLogger extends ConsoleLogger {
  protected getTimestamp() {
    return new Date().toISOString();
  }
}
`),cf()()(),Aa(897,`pre`)(898,`code`,22),bT(899,`
[Nest] 19096  - 2026-09-28T06:46:17.869Z     LOG [NestFactory] Starting Nest application...
`),cf()(),Aa(900,`p`),bT(901,`This applies to text output only. With `),Aa(902,`a`,4),bT(903,`JSON logging`),cf(),bT(904,`, the `),Aa(905,`code`),bT(906,`timestamp`),cf(),bT(907,` field is always milliseconds since the Unix epoch.`),cf(),Aa(908,`p`),bT(909,`You can use such an extended logger in your feature modules as described in the `),Aa(910,`a`,28),bT(911,`Using the logger for application logging`),cf(),bT(912,` section above.`),cf(),Aa(913,`p`),bT(914,`You can tell Nest to use your extended logger for system logging by passing an instance of it via the `),Aa(915,`code`),bT(916,`logger`),cf(),bT(917,` property of the application options object (as shown in the `),Aa(918,`a`,29),bT(919,`Custom implementation`),cf(),bT(920,` section above), or by using the technique shown in the `),Aa(921,`a`,23),bT(922,`Dependency injection`),cf(),bT(923,` section below. If you do so, call `),Aa(924,`code`),bT(925,`super`),cf(),bT(926,`, as shown in the sample code above, to delegate the log method call to the parent (built-in) class so that Nest can rely on the built-in features it expects.`),cf(),Aa(927,`p`),Wa(928,`app-banner-courses`),cf(),Aa(929,`h4`,30)(930,`span`),bT(931,`Dependency injection`),cf()(),Aa(932,`p`),bT(933,`For more advanced logging functionality, take advantage of dependency injection. For example, you may want to inject a `),Aa(934,`code`),bT(935,`ConfigService`),cf(),bT(936,` into your logger to customize it, and in turn inject your custom logger into other controllers and/or providers. To enable dependency injection for your custom logger, create a class that implements `),Aa(937,`code`),bT(938,`LoggerService`),cf(),bT(939,` and register that class as a provider in a module. For example, you can:`),cf(),Aa(940,`ol`)(941,`li`),bT(942,`Define a `),Aa(943,`code`),bT(944,`MyLogger`),cf(),bT(945,` class that either extends the built-in `),Aa(946,`code`),bT(947,`ConsoleLogger`),cf(),bT(948,` or completely overrides it, as shown in the previous sections. Be sure to implement the `),Aa(949,`code`),bT(950,`LoggerService`),cf(),bT(951,` interface.`),cf(),Aa(952,`li`),bT(953,`Create a `),Aa(954,`code`),bT(955,`LoggerModule`),cf(),bT(956,` as shown below, and provide `),Aa(957,`code`),bT(958,`MyLogger`),cf(),bT(959,` from that module.`),cf()(),Aa(960,`app-copy-button`)(961,`pre`)(962,`code`,12),bT(963,`
import { Module } from '@nestjs/common';
import { MyLogger } from './my-logger.service.js';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
`),cf()()(),Aa(964,`p`),bT(965,`With this construct, your custom logger is available to any other module. Because your `),Aa(966,`code`),bT(967,`MyLogger`),cf(),bT(968,` class is part of a module, it can use dependency injection (for example, to inject a `),Aa(969,`code`),bT(970,`ConfigService`),cf(),bT(971,`). One more step is needed for Nest to use this custom logger for system logging (e.g., for bootstrapping and error handling).`),cf(),Aa(972,`p`),bT(973,`Because application instantiation (`),Aa(974,`code`),bT(975,`NestFactory.create()`),cf(),bT(976,`) happens outside the context of any module, it doesn't participate in the normal dependency injection phase of initialization. So you must ensure that at least one application module imports the `),Aa(977,`code`),bT(978,`LoggerModule`),cf(),bT(979,`, which triggers Nest to instantiate a singleton instance of the `),Aa(980,`code`),bT(981,`MyLogger`),cf(),bT(982,` class.`),cf(),Aa(983,`p`),bT(984,`You can then instruct Nest to use the same singleton instance of `),Aa(985,`code`),bT(986,`MyLogger`),cf(),bT(987,` with the following construction:`),cf(),Aa(988,`app-copy-button`)(989,`pre`)(990,`code`,12),bT(991,`
const app = await NestFactory.create(AppModule, {
  bufferLogs: true,
});
app.useLogger(app.get(MyLogger));
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(992,`blockquote`,13)(993,`strong`),bT(994,`Note`),cf(),bT(995,` In the example above, `),Aa(996,`code`),bT(997,`bufferLogs`),cf(),bT(998,` is set to `),Aa(999,`code`),bT(1e3,`true`),cf(),bT(1001,` so that all logs are held in a buffer until a custom logger (`),Aa(1002,`code`),bT(1003,`MyLogger`),cf(),bT(1004,` in this case) is attached. With `),Aa(1005,`code`),bT(1006,`autoFlushLogs`),cf(),bT(1007,` enabled (the default), Nest flushes the buffer on its own: an HTTP application (or microservice) flushes it when it starts listening in `),Aa(1008,`code`),bT(1009,`app.listen()`),cf(),bT(1010,`, and a standalone `),Aa(1011,`a`,31),bT(1012,`application context`),cf(),bT(1013,` flushes it when you call `),Aa(1014,`code`),bT(1015,`app.useLogger()`),cf(),bT(1016,`. If initialization fails, Nest flushes it right away. When Nest can't create a provider (for example, because its factory throws), it falls back to the original `),Aa(1017,`code`),bT(1018,`ConsoleLogger`),cf(),bT(1019,` to print the buffer and the error. When a lifecycle hook such as `),Aa(1020,`code`),bT(1021,`onModuleInit()`),cf(),bT(1022,` rejects, Nest prints the buffer through the logger you attached (or through the original one, if none is attached yet) but doesn't log the error: the call that started initialization, such as `),Aa(1023,`code`),bT(1024,`app.listen()`),cf(),bT(1025,`, rejects with it. Set `),Aa(1026,`code`),bT(1027,`autoFlushLogs`),cf(),bT(1028,` to `),Aa(1029,`code`),bT(1030,`false`),cf(),bT(1031,` to flush the buffer yourself with `),Aa(1032,`code`),bT(1033,`app.flushLogs()`),cf(),bT(1034,` (or the static `),Aa(1035,`code`),bT(1036,`Logger.flush()`),cf(),bT(1037,`).
`),cf(),Aa(1038,`p`),bT(1039,`Here, the `),Aa(1040,`code`),bT(1041,`get()`),cf(),bT(1042,` method of the `),Aa(1043,`code`),bT(1044,`NestApplication`),cf(),bT(1045,` instance retrieves the singleton instance of `),Aa(1046,`code`),bT(1047,`MyLogger`),cf(),bT(1048,`. This technique is essentially a way to "inject" a logger instance for use by Nest. The `),Aa(1049,`code`),bT(1050,`app.get()`),cf(),bT(1051,` call depends on that instance first being instantiated through a module import, as described above.`),cf(),Aa(1052,`p`),bT(1053,`You can also inject this `),Aa(1054,`code`),bT(1055,`MyLogger`),cf(),bT(1056,` provider into your feature classes, ensuring consistent logging behavior across both Nest system logging and application logging. See `),Aa(1057,`a`,28),bT(1058,`Using the logger for application logging`),cf(),bT(1059,` and `),Aa(1060,`a`,24),bT(1061,`Injecting a custom logger`),cf(),bT(1062,` below for more information.`),cf(),Aa(1063,`blockquote`,32)(1064,`strong`),bT(1065,`Warning`),cf(),bT(1066,` If a provider factory or a lifecycle hook calls `),Aa(1067,`code`),bT(1068,`process.exit()`),cf(),bT(1069,` itself (for example, after a failed connection check), or a startup step never settles (such as a connection that keeps retrying), nothing in the buffer is printed, not even when you stop the process with `),Aa(1070,`code`),bT(1071,`Ctrl+C`),cf(),bT(1072,`. Throw an error instead, so that initialization fails and Nest flushes the buffer.
`),cf(),Aa(1073,`p`),bT(1074,`When startup logs must always be visible, even if the process exits or stalls, don't buffer them: pass a logger instance as the `),Aa(1075,`code`),bT(1076,`logger`),cf(),bT(1077,` option of `),Aa(1078,`code`),bT(1079,`NestFactory.create()`),cf(),bT(1080,`, as shown in `),Aa(1081,`a`,33),bT(1082,`Custom implementation`),cf(),bT(1083,`, so that Nest hands each line to it as soon as it is logged. That instance is created outside the dependency injection system, so it can't inject providers such as `),Aa(1084,`code`),bT(1085,`ConfigService`),cf(),bT(1086,`.`),cf(),Aa(1087,`h4`,34)(1088,`span`),bT(1089,`Injecting a custom logger`),cf()(),Aa(1090,`p`),bT(1091,`To start, extend the built-in logger with code like the following. The `),Aa(1092,`code`),bT(1093,`scope`),cf(),bT(1094,` option, supplied as configuration metadata for the `),Aa(1095,`code`),bT(1096,`ConsoleLogger`),cf(),bT(1097,` subclass, specifies a `),Aa(1098,`a`,35),bT(1099,`transient`),cf(),bT(1100,` scope so that each consumer gets its own logger instance. This is important because each module sets a unique context on its logger via `),Aa(1101,`code`),bT(1102,`setContext()`),cf(),bT(1103,` — with a singleton, that call would overwrite the context across the entire app. In this example, we do not extend the individual `),Aa(1104,`code`),bT(1105,`ConsoleLogger`),cf(),bT(1106,` methods (like `),Aa(1107,`code`),bT(1108,`log()`),cf(),bT(1109,`, `),Aa(1110,`code`),bT(1111,`warn()`),cf(),bT(1112,`, etc.), though you may choose to do so.`),cf(),Aa(1113,`app-copy-button`)(1114,`pre`)(1115,`code`,12),bT(1116,`
import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends ConsoleLogger {
  customLog() {
    this.log('Please feed the cat!');
  }
}
`),cf()()(),Aa(1117,`p`),bT(1118,`Next, create a `),Aa(1119,`code`),bT(1120,`LoggerModule`),cf(),bT(1121,` with a construction like this:`),cf(),Aa(1122,`app-copy-button`)(1123,`pre`)(1124,`code`,12),bT(1125,`
import { Module } from '@nestjs/common';
import { MyLogger } from './my-logger.service.js';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
`),cf()()(),Aa(1126,`p`),bT(1127,`Next, import the `),Aa(1128,`code`),bT(1129,`LoggerModule`),cf(),bT(1130,` into your feature module. Because `),Aa(1131,`code`),bT(1132,`MyLogger`),cf(),bT(1133,` extends `),Aa(1134,`code`),bT(1135,`ConsoleLogger`),cf(),bT(1136,`, you can use its `),Aa(1137,`code`),bT(1138,`setContext()`),cf(),bT(1139,` method and start using the context-aware custom logger, like this:`),cf(),Aa(1140,`app-copy-button`)(1141,`pre`)(1142,`code`,12),bT(1143,`
import { Injectable } from '@nestjs/common';
import { MyLogger } from './my-logger.service.js';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(private myLogger: MyLogger) {
    // Due to transient scope, CatsService has its own unique instance of MyLogger,
    // so setting context here will not affect other instances in other services
    this.myLogger.setContext('CatsService');
  }

  findAll(): Cat[] {
    // You can call all the default methods
    this.myLogger.warn('About to return cats!');
    // And your custom methods
    this.myLogger.customLog();
    return this.cats;
  }
}
`),cf()()(),Aa(1144,`p`)(1145,`code`),bT(1146,`MyLogger`),cf(),bT(1147,` inherits the rest of the `),Aa(1148,`code`),bT(1149,`ConsoleLogger`),cf(),bT(1150,` API too: `),Aa(1151,`code`),bT(1152,`resetContext()`),cf(),bT(1153,` restores the context passed to the constructor, and `),Aa(1154,`code`),bT(1155,`isLevelEnabled('debug')`),cf(),bT(1156,` tells you whether a level is currently enabled, so you can skip preparing data for a line that would be discarded.`),cf(),Aa(1157,`p`),bT(1158,`Finally, instruct Nest to use an instance of the custom logger in your `),Aa(1159,`code`),bT(1160,`main.ts`),cf(),bT(1161,` file, as shown below. This example doesn't customize the logger behavior (by overriding `),Aa(1162,`code`),bT(1163,`ConsoleLogger`),cf(),bT(1164,` methods like `),Aa(1165,`code`),bT(1166,`log()`),cf(),bT(1167,`, `),Aa(1168,`code`),bT(1169,`warn()`),cf(),bT(1170,`, etc.), so this step isn't strictly needed here. It `),Aa(1171,`strong`),bT(1172,`is`),cf(),bT(1173,` needed if you add custom logic to those methods and want Nest to use the same implementation.`),cf(),Aa(1174,`app-copy-button`)(1175,`pre`)(1176,`code`,12),bT(1177,`
const app = await NestFactory.create(AppModule, {
  bufferLogs: true,
});
app.useLogger(new MyLogger());
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(1178,`blockquote`,13)(1179,`strong`),bT(1180,`Hint`),cf(),bT(1181,` Alternatively, instead of setting `),Aa(1182,`code`),bT(1183,`bufferLogs`),cf(),bT(1184,` to `),Aa(1185,`code`),bT(1186,`true`),cf(),bT(1187,`, you could temporarily disable the logger with the `),Aa(1188,`code`),bT(1189,`logger: false`),cf(),bT(1190,` option. Be aware that if you pass `),Aa(1191,`code`),bT(1192,`logger: false`),cf(),bT(1193,` to `),Aa(1194,`code`),bT(1195,`NestFactory.create()`),cf(),bT(1196,`, nothing is logged until you call `),Aa(1197,`code`),bT(1198,`useLogger()`),cf(),bT(1199,`, so you may miss important initialization errors. If you don't mind some initial messages being logged with the default logger, omit the `),Aa(1200,`code`),bT(1201,`logger: false`),cf(),bT(1202,` option.
`),cf(),Aa(1203,`h4`,36)(1204,`span`),bT(1205,`Correlating logs with requests`),cf()(),Aa(1206,`p`),bT(1207,`Centralizing logs solves storage, not investigation. Once every instance ships to the same place, the hard part becomes reconstructing a `),Aa(1208,`em`),bT(1209,`single`),cf(),bT(1210,` request out of thousands of interleaved lines. That is why so much production debugging is really the work of inventing a correlation id, threading it through every log call, and hoping nothing on the path forgot to pass it along.`),cf(),Aa(1211,`p`)(1212,`a`,37),bT(1213,`NestJS Observe`),cf(),bT(1214,` removes that bookkeeping. Turn on `),Aa(1215,`code`),bT(1216,`forwardLogs`),cf(),bT(1217,` and every line written through Nest's `),Aa(1218,`code`),bT(1219,`Logger`),cf(),bT(1220,` is captured with the trace it was written in already attached:`),cf(),Aa(1221,`app-copy-button`)(1222,`pre`)(1223,`code`,12),bT(1224,`
ObserveModule.forRoot({
  serviceId: 'orders-api',
  forwardLogs: true,
});
`),cf()()(),Aa(1225,`p`),bT(1226,`You keep calling `),Aa(1227,`code`),bT(1228,`this.logger.log()`),cf(),bT(1229,` with an `),Aa(1230,`code`),bT(1231,`orderId`),cf(),bT(1232,` param exactly as before: no correlation id to generate, no context object to thread through your service layer. On an execution page, the logs for that one request are then placed on the trace's own clock, each line sitting next to the span that was in flight when it was written, so "the retry warning fired `),Aa(1233,`em`),bT(1234,`before`),cf(),bT(1235,` the timeout, not after" is something you can see instead of infer from timestamps across three log streams.`),cf(),Aa(1236,`p`),bT(1237,`Structured logging params carry through as well, so `),Aa(1238,`code`),bT(1239,`orderId`),cf(),bT(1240,` stays a queryable field rather than being flattened into the message text. Log lines are also alertable in their own right, for example: "tell me when `),Aa(1241,`code`),bT(1242,`payment declined`),cf(),bT(1243,` appears more than 10 times in 15 minutes".`),cf(),Aa(1244,`p`),bT(1245,`If you would rather keep log content in your own aggregator, you do not have to forward anything. Even with `),Aa(1246,`code`),bT(1247,`forwardLogs`),cf(),bT(1248,` off, the SDK augments `),Aa(1249,`code`),bT(1250,`ConsoleLogger`),cf(),bT(1251,` so every line written during a request carries that request's trace id: at the end of the line in the default format (`),Aa(1252,`code`),bT(1253,` Trace ID: <id>`),cf(),bT(1254,`, after the message), and as a `),Aa(1255,`code`),bT(1256,`traceId`),cf(),bT(1257,` field with `),Aa(1258,`a`,4),bT(1259,`JSON logging`),cf(),bT(1260,` enabled:`),cf(),Aa(1261,`pre`)(1262,`code`,16),bT(1263,`
{"level":"log","pid":66803,"timestamp":1789978166281,"message":"Payment captured","context":"OrdersService","traceId":"0199a3f2-7c1e-7b40-9d2a-5e8f1c3b7a64"}
`),cf()(),Aa(1264,`p`),bT(1265,`That id is enough to jump from a line in your existing stack to the full trace in the dashboard. It is on by default and controlled by the `),Aa(1266,`code`),bT(1267,`attachTraceIdToLogs`),cf(),bT(1268,` option (see `),Aa(1269,`a`,38),bT(1270,`Trace correlation`),cf(),bT(1271,`). Lines written outside a request (during bootstrap, for example) are left as they are. The augmentation applies to Nest's built-in `),Aa(1272,`code`),bT(1273,`ConsoleLogger`),cf(),bT(1274,` only, so if you replace it with an `),Aa(1275,`a`,10),bT(1276,`external logger`),cf(),bT(1277,`, read the id yourself with `),Aa(1278,`code`),bT(1279,`TracerService.currentTraceId()`),cf(),bT(1280,`. See the `),Aa(1281,`a`,39),bT(1282,`SDK reference`),cf(),bT(1283,` for forwarding and its redaction settings.`),cf(),Aa(1284,`p`),bT(1285,`The trace id is not the only thing that lives for the length of a request. The SDK keeps an `),Aa(1286,`code`),bT(1287,`AsyncLocalStorage`),cf(),bT(1288,` store for every request, job, and message it instruments, and `),Aa(1289,`code`),bT(1290,`TracerService`),cf(),bT(1291,` exposes it through `),Aa(1292,`code`),bT(1293,`setAttribute()`),cf(),bT(1294,` and `),Aa(1295,`code`),bT(1296,`getAttribute()`),cf(),bT(1297,`. That is the natural place for the user or tenant a request is acting for, readable from anywhere downstream without threading it through every call. See `),Aa(1298,`a`,40),bT(1299,`Request-scoped attributes`),cf(),bT(1300,`, and the `),Aa(1301,`a`,41),bT(1302,`Async local storage`),cf(),bT(1303,` recipe for how it compares to a store you set up yourself.`),cf(),Aa(1304,`h4`,42)(1305,`span`),bT(1306,`Use external logger`),cf()(),Aa(1307,`p`),bT(1308,`As `),Aa(1309,`a`,7),bT(1310,`Logging in production`),cf(),bT(1311,` shows, the built-in logger already covers structured, centralized logging for most applications. Some requirements still call for a dedicated library such as `),Aa(1312,`a`,8),bT(1313,`Pino`),cf(),bT(1314,` or `),Aa(1315,`a`,9),bT(1316,`Winston`),cf(),bT(1317,`: multiple in-process transports (files, syslog, HTTP), redaction of sensitive fields, custom serializers, or the lowest possible overhead on services that log at very high volume. As with any standard Node.js application, you can take full advantage of such modules in Nest: implement the `),Aa(1318,`code`),bT(1319,`LoggerService`),cf(),bT(1320,` interface as described in `),Aa(1321,`a`,33),bT(1322,`Custom implementation`),cf(),bT(1323,`, or use a community integration.`),cf()(),Aa(1324,`a`,43),Wa(1325,`i`,44),Aa(1326,`span`),bT(1327,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln,l$1,Jc],encapsulation:2})}return d})();var fe=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-mail`]],features:[xy],decls:2944,vars:284,consts:[[`contentReference`,``],[`appae1cea95b576fe85cf3896b0781c3dbf7fe344bc`,``],[`app0cc0f959b075e4ac1c423ae3d75245f110b2c31d`,``],[`app871334b75b1647921a51106378ef9cd0accb7ce4`,``],[`app5e5a60b5fec2c37e455a1cf4c1fba09615b68e0b`,``],[`appb624f4af8480e3e8913e10c4ba7cca69c7036a5f`,``],[`app1e5972f73cf06fb8024e2760976054942948292d`,``],[`app9f381b7975c8b6a7237e92d6aeaaa16ee84e80a1`,``],[`appd35f15594ce2ce6c0ccd87ea6cc78daf221a8051`,``],[`app33a8ebd3c1abaff947eb8543110586b851816900`,``],[`appe24d139bcd4867106b502c5c4ff245fb454f3bf0`,``],[`appd74e02378ec11fcb581dcb6da259409307eadbf3`,``],[`app6cf1ed89b2e327b7e248323b67ecb589fa8a5495`,``],[`app0aa9abc09b9e309449026153fcb56d58ce53c340`,``],[`app333fa704f2104925db49e6363c603d74374aa1b8`,``],[`appd642d42d6c85b800378ba3e34f4d5db38cb3ee40`,``],[`appda04e165ad779c32bd1ea254380b017097a4129e`,``],[`appa816864d612f4548c91e1b3e387983e2c112acdd`,``],[`appb5c480f3b881fec7d05e7a109eeb4313da7b9ae0`,``],[`app5f771c5a0ee455bc09d77e740a1cc3860face095`,``],[`app2c8fe3436903fe282da44069a4bf2d0e8764d936`,``],[`appdf2703b69263de5dc8de9c386289cd8429f28f9a`,``],[`app49e382fe73cfe5f348a7234a3ba4e95ac77a9a02`,``],[`app27085cdf18ed8943d169e261bf2185e012bf4255`,``],[`app7039a8d5dbb5f6533471fcf5f573efd945917f65`,``],[`app8e3f4a61eb118f6b2f044eea1e304a70c9180d37`,``],[`app9de645844daf28effb5499cd412798ca862adbf1`,``],[`app1a2da1896b0db681ad3f33878ba7f9a50ee989b1`,``],[`appf62af683c0330c2701583de08bd78ba44b293b33`,``],[`app430dde8c7bc3c26b14c5493e3b7d1a6dbdc0e669`,``],[`appee2a5a0a165533671133917914b1f95384dacf26`,``],[`app46bddfd14c1e6ce33c3a207766684e2294c521a3`,``],[`app3e7eb1e82fccfea5c62a0770cdd2ef3c56e14651`,``],[`appb0348a386e694bef3439ac79cd60cc5c5dbccddf`,``],[1,`content`],[1,`content-inner`],[`id`,`mail`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`register-the-mail-module`],[`href`,`/application/mail#send-after-the-order-commits`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/application/mail#send-in-production`],[`href`,`/cli/monorepo#assets`],[1,`language-json`],[1,`info`],[`href`,`/application/configuration`],[`appAnchor`,``,`id`,`write-the-order-confirmation-mail`],[1,`language-html`],[`href`,`/application/mail#template-syntax`],[`href`,`/application/mail#use-another-template-engine`],[1,`language-text`],[`appAnchor`,``,`id`,`attach-the-invoice-and-preview-the-mail`],[1,`warning`],[`appAnchor`,``,`id`,`send-after-the-order-commits`],[`href`,`/application/mail#write-the-order-confirmation-mail`],[`routerLink`,`/reliability/outbox`],[`href`,`/data/drizzle`],[`href`,`/reliability/outbox#keep-messages-in-your-database`],[`appAnchor`,``,`id`,`send-in-production`],[`appAnchor`,``,`id`,`send-it-in-the-customers-language`],[`routerLink`,`/application/i18n`],[`appAnchor`,``,`id`,`use-another-template-engine`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mjml.io`],[`appAnchor`,``,`id`,`write-your-own-transport`],[`appAnchor`,``,`id`,`try-it`],[`href`,`/application/mail#send-it-in-the-customers-language`],[`appAnchor`,``,`id`,`testing`],[`appAnchor`,``,`id`,`production-checklist`],[`appAnchor`,``,`id`,`reference`],[`appAnchor`,``,`id`,`module-options`],[`appAnchor`,``,`id`,`template-engine`],[`appAnchor`,``,`id`,`template-syntax`],[`appAnchor`,``,`id`,`send-options`],[`href`,`/application/mail#attach-the-invoice-and-preview-the-mail`],[`appAnchor`,``,`id`,`transports`],[`href`,`/application/mail#testing`],[`appAnchor`,``,`id`,`events`],[`appAnchor`,``,`id`,`errors`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/mail.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,34,0)(2,`div`,35)(3,`h3`,36),bT(4,`Mail`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/mail`),cf(),bT(8,` sends email from a Nest application: mail classes rendered from escaped HTML templates, sent over SMTP or an email API, and read back in tests.`),cf(),Aa(9,`p`),bT(10,`When a customer places an order at an online store for cat food and supplies, they expect a confirmation email within a minute: the items, the total, a link to the order, and the invoice as a PDF. Sending that email well takes more than a call to an SMTP library:`),cf(),Aa(11,`ul`)(12,`li`)(13,`strong`),bT(14,`The HTML must be safe.`),cf(),bT(15,` A product name or a customer name ends up in the markup. Unescaped, a name like `),Aa(16,`code`),bT(17,`<script>`),cf(),bT(18,` or a stray `),Aa(19,`code`),bT(20,`&`),cf(),bT(21,` breaks the layout, or worse.`),cf(),Aa(22,`li`)(23,`strong`),bT(24,`The mail must survive failures.`),cf(),bT(25,` Mail servers greylist, rate-limit and go down. A send that fails inside the request either fails an order that already committed, or loses the email.`),cf(),Aa(26,`li`)(27,`strong`),bT(28,`Tests must see what was sent.`),cf(),bT(29,` A test for "the customer gets a confirmation with a link to the order" needs the rendered mail and its links, not a mocked method call.`),cf()(),Aa(30,`p`)(31,`code`),bT(32,`@nestjs/mail`),cf(),bT(33,` covers these. Mail classes are injectable providers that render a subject and a body from typed data, so they can inject your other providers, such as a repository or a PDF renderer. The body comes from an HTML template file, rendered by a small built-in engine that escapes every value it inserts, or by Handlebars or any other engine you plug in. Transports deliver the result: SMTP, written on `),Aa(34,`code`),bT(35,`node:net`),cf(),bT(36,` and `),Aa(37,`code`),bT(38,`node:tls`),cf(),bT(39,`, and Resend, Postmark, SendGrid and Amazon SES over their HTTP APIs. Tests swap the transport for an in-memory one and read the mails it received. The package has no dependencies beyond Nest itself.`),cf(),Aa(40,`p`),bT(41,`In this tutorial, you'll add order confirmation emails to the store's order API:`),cf(),Aa(42,`ul`)(43,`li`),bT(44,`Development writes every mail to an `),Aa(45,`code`),bT(46,`.eml`),cf(),bT(47,` file instead of sending it.`),cf(),Aa(48,`li`),bT(49,`The confirmation is a mail class that renders an HTML template, in a layout that every mail shares, with the invoice attached and the logo inline.`),cf(),Aa(50,`li`),bT(51,`A preview route shows the mail in a browser without sending it.`),cf(),Aa(52,`li`),bT(53,`Mail goes out after the order commits, through the outbox, with retries and dead letters.`),cf(),Aa(54,`li`),bT(55,`Production sends through SMTP or Resend, picked by an environment variable.`),cf()(),Aa(56,`h4`,37)(57,`span`),bT(58,`Installation`),cf()(),Aa(59,`p`),bT(60,`To get started, install the required dependency:`),cf(),Aa(61,`pre`)(62,`code`,38),bT(63,`
$ npm i --save @nestjs/mail
`),cf()(),Aa(64,`h4`,39)(65,`span`),bT(66,`Register the mail module`),cf()(),Aa(67,`p`),bT(68,`Register `),Aa(69,`code`),bT(70,`MailModule`),cf(),bT(71,` in the root module, next to `),Aa(72,`code`),bT(73,`DrizzleModule`),cf(),bT(74,`. The mail tutorial needs the database for the customers and their orders, and for the outbox's tables, through which the mail is `),Aa(75,`a`,40),bT(76,`sent after the order commits`),cf(),bT(77,`. In development, `),Aa(78,`code`),bT(79,`FileMailTransport`),cf(),bT(80,` writes each mail to a file in `),Aa(81,`code`),bT(82,`var/mail`),cf(),bT(83,` instead of sending it, and `),Aa(84,`code`),bT(85,`FileTemplateEngine`),cf(),bT(86,` renders the mail bodies from HTML files in `),Aa(87,`code`),bT(88,`mail/templates`),cf(),bT(89,`. The feature modules it imports are built in the following sections:`),cf(),Aa(90,`app-copy-button`,41)(91,`span`,42),bT(92),LT(93,`extension`),Wa(94,`app-tabs`,null,1),cf(),Aa(96,`pre`)(97,`code`,43),bT(98,`
import { Module } from '@nestjs/common';
import { DrizzleModule } from '@nestjs/drizzle';
import { FileMailTransport, FileTemplateEngine, MailModule } from '@nestjs/mail';
import { drizzle } from 'drizzle-orm/node-postgres';
import { join } from 'node:path';
import * as schema from './database/schema.js';
import { NotificationsModule } from './notifications/notifications.module.js';
import { OrdersModule } from './orders/orders.module.js';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      // A pg pool on DATABASE_URL: the customers and orders, and the outbox's tables
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL!, schema }),
    }),
    MailModule.forRoot({
      // Development: every mail becomes an .eml file in var/mail instead of leaving the machine
      transport: new FileMailTransport({ directory: 'var/mail' }),
      // Mail bodies are HTML files in mail/templates, wrapped in mail/templates/layout.html
      templates: new FileTemplateEngine({
        dir: join(import.meta.dirname, 'mail/templates'),
        layout: 'layout',
        // Development reads the files for every mail, so edits show up without a restart
        cache: process.env.NODE_ENV === 'production',
      }),
      from: 'Orders <orders@example.com>',
    }),
    OrdersModule,
    NotificationsModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(99,`ul`)(100,`li`)(101,`code`),bT(102,`transport`),cf(),bT(103,`: how mail leaves the application. Every transport extends the abstract `),Aa(104,`code`),bT(105,`MailTransport`),cf(),bT(106,` class, which is also its injection token, so tests replace it with `),Aa(107,`code`),bT(108,`overrideProvider(MailTransport)`),cf(),bT(109,`. `),Aa(110,`code`),bT(111,`FileMailTransport`),cf(),bT(112,` is for development: open the `),Aa(113,`code`),bT(114,`.eml`),cf(),bT(115,` files in any mail client to see exactly what would be sent. It writes to the local disk and reaches nobody, so `),Aa(116,`a`,44),bT(117,`in production`),cf(),bT(118,` the application switches to SMTP or Resend.`),cf(),Aa(119,`li`)(120,`code`),bT(121,`templates`),cf(),bT(122,`: renders the mails that name a template. `),Aa(123,`code`),bT(124,`FileTemplateEngine`),cf(),bT(125,` reads `),Aa(126,`code`),bT(127,`.html`),cf(),bT(128,` files from `),Aa(129,`code`),bT(130,`dir`),cf(),bT(131,`, and wraps every mail in the `),Aa(132,`code`),bT(133,`layout`),cf(),bT(134,` template, `),Aa(135,`code`),bT(136,`mail/templates/layout.html`),cf(),bT(137,`. A relative `),Aa(138,`code`),bT(139,`dir`),cf(),bT(140,` is resolved against the working directory; built from `),Aa(141,`code`),bT(142,`import.meta.dirname`),cf(),bT(143,`, it points next to the compiled `),Aa(144,`code`),bT(145,`app.module.js`),cf(),bT(146,`, wherever the application is started. Compiled templates are cached. With `),Aa(147,`code`),bT(148,`cache`),cf(),bT(149,` off, as here outside production, every mail reads the files again, so an edited template shows up in the next mail without a restart.`),cf(),Aa(150,`li`)(151,`code`),bT(152,`from`),cf(),bT(153,`: the default sender. A message can override it.`),cf()(),Aa(154,`p`),bT(155,`The TypeScript compiler doesn't copy HTML files to `),Aa(156,`code`),bT(157,`dist`),cf(),bT(158,`. Add the templates to the `),Aa(159,`a`,45),bT(160,`assets`),cf(),bT(161,` in `),Aa(162,`code`),bT(163,`nest-cli.json`),cf(),bT(164,`, so they land in `),Aa(165,`code`),bT(166,`dist/mail/templates`),cf(),bT(167,`, next to the compiled `),Aa(168,`code`),bT(169,`app.module.js`),cf(),bT(170,`:`),cf(),Aa(171,`pre`)(172,`code`,46),bT(173,`
{
  "compilerOptions": {
    "assets": ["mail/templates/**/*"],
    "watchAssets": true
  }
}
`),cf()(),Aa(174,`p`),bT(175,`With `),Aa(176,`code`),bT(177,`watchAssets`),cf(),bT(178,`, `),Aa(179,`code`),bT(180,`nest start --watch`),cf(),bT(181,` copies a template to `),Aa(182,`code`),bT(183,`dist`),cf(),bT(184,` whenever you save it.`),cf(),Aa(185,`blockquote`,47)(186,`strong`),bT(187,`Hint`),cf(),bT(188,` The tutorial reads `),Aa(189,`code`),bT(190,`process.env`),cf(),bT(191,` directly, to stay short. In an application, load the environment through `),Aa(192,`a`,48)(193,`code`),bT(194,`@nestjs/config`),cf()(),bT(195,` with a validation schema, so a missing `),Aa(196,`code`),bT(197,`DATABASE_URL`),cf(),bT(198,` or `),Aa(199,`code`),bT(200,`SMTP_URL`),cf(),bT(201,` stops the application at startup, and read the values from `),Aa(202,`code`),bT(203,`ConfigService`),cf(),bT(204,` in the factories.
`),cf(),Aa(205,`p`)(206,`code`),bT(207,`MailModule`),cf(),bT(208,` is global and provides `),Aa(209,`code`),bT(210,`Mailer`),cf(),bT(211,`, which sends mail, and `),Aa(212,`code`),bT(213,`MailEvents`),cf(),bT(214,`, which reports what was sent and what failed. A missing `),Aa(215,`code`),bT(216,`transport`),cf(),bT(217,` or an invalid `),Aa(218,`code`),bT(219,`from`),cf(),bT(220,` stops the application at startup, with a message that names the option.`),cf(),Aa(221,`h4`,49)(222,`span`),bT(223,`Write the order confirmation mail`),cf()(),Aa(224,`p`),bT(225,`The mail's body is an HTML template. Values go between double braces, and a block such as `),Aa(226,`code`),bT(227,`#each`),cf(),bT(228,` repeats its part of the template for every item of a list:`),cf(),Aa(229,`app-copy-button`,41)(230,`span`,42),bT(231),LT(232,`extension`),Wa(233,`app-tabs`,null,2),cf(),Aa(235,`pre`)(236,`code`,50),bT(237),cf()()(),Aa(238,`p`),bT(239,`Every mail is wrapped in the layout. It places the rendered mail with triple braces around `),Aa(240,`code`),bT(241,`body`),cf(),bT(242,`, and includes the signature, a partial that lives in `),Aa(243,`code`),bT(244,`mail/templates/partials/signature.html`),cf(),bT(245,`:`),cf(),Aa(246,`app-copy-button`,41)(247,`span`,42),bT(248),LT(249,`extension`),Wa(250,`app-tabs`,null,3),cf(),Aa(252,`pre`)(253,`code`,50),bT(254),cf()()(),Aa(255,`app-copy-button`,41)(256,`span`,42),bT(257),LT(258,`extension`),Wa(259,`app-tabs`,null,4),cf(),Aa(261,`pre`)(262,`code`,50),bT(263,`
<p>The customer care team</p>
`),cf()()(),Aa(264,`p`),bT(265,`A mail class implements `),Aa(266,`code`),bT(267,`Mailable<TData>`),cf(),bT(268,`. Its `),Aa(269,`code`),bT(270,`render()`),cf(),bT(271,` method gets the data and returns the subject, the template's name and its context, the values the template reads:`),cf(),Aa(272,`app-copy-button`,41)(273,`span`,42),bT(274),LT(275,`extension`),Wa(276,`app-tabs`,null,5),cf(),Aa(278,`pre`)(279,`code`,43),bT(280,`
import { Injectable } from '@nestjs/common';
import type { Mailable } from '@nestjs/mail';
import type { Customer } from '../customers/customers.repository.js';
import type { Order } from '../orders/order.js';

export interface OrderConfirmation {
  order: Order;
  customer: Customer;
}

const SHOP_URL = process.env.SHOP_URL ?? 'https://shop.example.com';

@Injectable()
export class OrderConfirmationMail implements Mailable<OrderConfirmation> {
  render({ order, customer }: OrderConfirmation) {
    const price = (cents: number) => \`$\${(cents / 100).toFixed(2)}\`;
    return {
      subject: \`Your order #\${order.number}\`,
      // mail/templates/order-confirmation.html, wrapped in the layout
      template: 'order-confirmation',
      // The values the template shows, ready to insert: prices formatted, the link built
      context: {
        customer,
        items: order.items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: price(item.price * item.quantity),
        })),
        total: price(order.total),
        orderUrl: \`\${SHOP_URL}/orders/\${order.id}\`,
      },
    };
  }
}
`),cf()()(),Aa(281,`p`),bT(282,`The template is logic-less. It has values, `),Aa(283,`code`),bT(284,`#if`),cf(),bT(285,`, `),Aa(286,`code`),bT(287,`#unless`),cf(),bT(288,` and `),Aa(289,`code`),bT(290,`#each`),cf(),bT(291,` blocks, partials and comments, but no helpers and no expressions: what needs code, such as formatting a price or building a link, happens in the mail class, in TypeScript, where it's typed and tested. The syntax is a subset of Handlebars (see `),Aa(292,`a`,51),bT(293,`Template syntax`),cf(),bT(294,`), so the templates move to `),Aa(295,`a`,52),bT(296,`another engine`),cf(),bT(297,` as they are.`),cf(),Aa(298,`p`),bT(299,`Double braces escape the value. A product named `),Aa(300,`code`),bT(301,`Feather wand toy <limited edition>`),cf(),bT(302,` becomes `),Aa(303,`code`),bT(304,`Feather wand toy &lt;limited edition&gt;`),cf(),bT(305,`, and the customer's name can't inject markup. Two rules make it hard to get wrong:`),cf(),Aa(306,`ul`)(307,`li`),bT(308,`Escaping protects element content and quoted attribute values, so those are the only places a double-braced value may go. A value inside a tag anywhere else is a compile error: `),Aa(309,`code`),bT(310,`href=`),cf(),bT(311,` followed directly by the value, or a value standing between attributes. Escaping can't protect either place (unquoted, a space in the value would start a new attribute). Quote attribute values, as the link above does.`),cf(),Aa(312,`li`),bT(313,`Triple braces insert a value as it is, for HTML you produced yourself. In this tutorial, only the layout's `),Aa(314,`code`),bT(315,`body`),cf(),bT(316,` needs them.`),cf()(),Aa(317,`p`),bT(318,`A missing value renders as nothing, as in Handlebars. Inside `),Aa(319,`code`),bT(320,`#each`),cf(),bT(321,`, `),Aa(322,`code`),bT(323,`this`),cf(),bT(324,` is the item, `),Aa(325,`code`),bT(326,`@index`),cf(),bT(327,`, `),Aa(328,`code`),bT(329,`@first`),cf(),bT(330,` and `),Aa(331,`code`),bT(332,`@last`),cf(),bT(333,` describe its position, and a name the item doesn't have is looked up in the template's context, so a row can show a value from outside the list. A template that doesn't compile fails the mail with a permanent `),Aa(334,`code`),bT(335,`MailTemplateError`),cf(),bT(336,`, which names the file and the position:`),cf(),Aa(337,`pre`)(338,`code`,53),bT(339),cf()(),Aa(340,`p`),bT(341,`There is no text template. The mailer derives the plain-text part from the HTML: paragraphs, table rows, and links as `),Aa(342,`code`),bT(343,`View your order (https://shop.example.com/orders/…)`),cf(),bT(344,`. Mail clients that don't show HTML, and spam filters, read that part. To write it yourself, add `),Aa(345,`code`),bT(346,`order-confirmation.txt`),cf(),bT(347,` next to the HTML: the engine renders it as the text part, with the same syntax, without escaping.`),cf(),Aa(348,`p`),bT(349,`Register the class as a provider, like any other injectable:`),cf(),Aa(350,`app-copy-button`,41)(351,`span`,42),bT(352),LT(353,`extension`),Wa(354,`app-tabs`,null,6),cf(),Aa(356,`pre`)(357,`code`,43),bT(358,`
import { Module } from '@nestjs/common';
import { OrderConfirmationMail } from './order-confirmation.mail.js';

@Module({
  providers: [OrderConfirmationMail],
})
export class NotificationsModule {}
`),cf()()(),Aa(359,`p`),bT(360,`Then send it when an order is placed. `),Aa(361,`code`),bT(362,`mailer.send()`),cf(),bT(363,` takes the mail class and the recipient, and the type of `),Aa(364,`code`),bT(365,`data`),cf(),bT(366,` comes from the class's `),Aa(367,`code`),bT(368,`render()`),cf(),bT(369,`:`),cf(),Aa(370,`app-copy-button`,41)(371,`span`,42),bT(372),LT(373,`extension`),Wa(374,`app-tabs`,null,7),cf(),Aa(376,`pre`)(377,`code`,43),bT(378,`
async placeOrder({ customerId, items }: PlaceOrderDto): Promise<Order> {
  const customer = await this.customersRepository.findById(customerId);
  if (!customer) {
    throw new BadRequestException(\`Unknown customer "\${customerId}"\`);
  }
  if (!items?.length) {
    throw new BadRequestException('An order needs at least one item');
  }

  const order = await this.db.transaction((tx) => this.insertOrder(tx, customerId, items));

  // After the commit: never inside the transaction, which would stay open, holding its
  // connection and locks, for as long as the mail server takes to answer
  await this.mailer.send(OrderConfirmationMail, {
    to: { name: customer.name, address: customer.email },
    data: { order, customer },
  });
  return order;
}
`),cf()()(),Aa(379,`p`),bT(380,`The recipient is an object with a `),Aa(381,`code`),bT(382,`name`),cf(),bT(383,` and an `),Aa(384,`code`),bT(385,`address`),cf(),bT(386,`, so a name with a comma or quotes stays one display name. A string works too, as in `),Aa(387,`code`),bT(388,`'Ada Lovelace <ada@example.com>'`),cf(),bT(389,`, but a string must hold exactly one address: a comma-separated list throws, so a name typed by a user can never add a recipient. Lists of recipients are arrays.`),cf(),Aa(390,`p`),bT(391,`Place an order and a file appears in `),Aa(392,`code`),bT(393,`var/mail`),cf(),bT(394,`. This works, but it sends the mail from the request, after the commit. `),Aa(395,`a`,40),bT(396,`Send after the order commits`),cf(),bT(397,` explains why that isn't good enough, and fixes it.`),cf(),Aa(398,`p`)(399,`strong`),bT(400,`Mails written inline.`),cf(),bT(401,` A mail small enough to write in TypeScript doesn't need a template file. `),Aa(402,`code`),bT(403,`render()`),cf(),bT(404,` returns `),Aa(405,`code`),bT(406,`html`),cf(),bT(407,` in place of `),Aa(408,`code`),bT(409,`template`),cf(),bT(410,` and `),Aa(411,`code`),bT(412,`context`),cf(),bT(413,`, built with the `),Aa(414,`code`),bT(415,`html`),cf(),bT(416,` tagged template:`),cf(),Aa(417,`app-copy-button`,41)(418,`span`,42),bT(419),LT(420,`extension`),Wa(421,`app-tabs`,null,8),cf(),Aa(423,`pre`)(424,`code`,43),bT(425,`
return {
  subject: \`Your order #\${order.number}\`,
  html: html\`
    <p>Hi \${customer.name},</p>
    <p>thank you for your order! We are packing it now.</p>
    <table>
      \${order.items.map(
        (item) => html\`
          <tr>
            <td>\${item.name}</td>
            <td>\${item.quantity}</td>
            <td>\${price(item.price * item.quantity)}</td>
          </tr>\`,
      )}
    </table>
    // ...
};
`),cf()()(),Aa(426,`p`)(427,`code`),bT(428,`html`),cf(),bT(429,` escapes every value you interpolate, by the same rules as a template: a value inside a tag must be in a quoted attribute value, or it throws. Nested `),Aa(430,`code`),bT(431,`html`),cf(),bT(432,` templates and arrays of them, like the table rows, are inserted as they are, and `),Aa(433,`code`),bT(434,`unsafeHtml()`),cf(),bT(435,` inserts HTML you produced yourself; the name is the warning. `),Aa(436,`code`),bT(437,`mailer.send()`),cf(),bT(438,` takes `),Aa(439,`code`),bT(440,`html`),cf(),bT(441,` too, for a message sent without a mail class.`),cf(),Aa(442,`h4`,54)(443,`span`),bT(444,`Attach the invoice and preview the mail`),cf()(),Aa(445,`p`),bT(446,`The invoice is a PDF, rendered by a small provider. It writes the PDF by hand with a built-in font, to keep the example free of dependencies. A real application uses a PDF library or a rendering service here. The mail only needs the bytes:`),cf(),Aa(447,`app-copy-button`,41)(448,`span`,42),bT(449),LT(450,`extension`),Wa(451,`app-tabs`,null,9),cf(),Aa(453,`pre`)(454,`code`,43),bT(455,"\n@Injectable()\nexport class InvoicePdf {\n  render(order: Order, customer: Customer): Buffer {\n    const money = (cents: number) => `$${(cents / 100).toFixed(2)}`;\n    const lines = [\n      `Invoice ${order.number}`,\n      `Date: ${order.placedAt.slice(0, 10)}`,\n      `Bill to: ${customer.name}`,\n      '',\n      ...order.items.map((item) => `${item.quantity} x ${item.name}  ${money(item.price * item.quantity)}`),\n      '',\n      `Total: ${money(order.total)}`,\n    ];\n    // ...\n  }\n}\n"),cf()()(),Aa(456,`p`)(457,`code`),bT(458,`render()`),cf(),bT(459,` returns attachments along with the template. The invoice is a regular attachment. The logo is an inline image: its `),Aa(460,`code`),bT(461,`cid`),cf(),bT(462,` makes it part of the HTML, which references it as `),Aa(463,`code`),bT(464,`cid:logo@example.com`),cf(),bT(465,`. The logo heads every mail, so the reference goes in the layout:`),cf(),Aa(466,`app-copy-button`,41)(467,`span`,42),bT(468),LT(469,`extension`),Wa(470,`app-tabs`,null,10),cf(),Aa(472,`pre`)(473,`code`,50),bT(474),cf()()(),Aa(475,`p`),bT(476,`The mail class attaches the logo and the invoice:`),cf(),Aa(477,`app-copy-button`,41)(478,`span`,42),bT(479),LT(480,`extension`),Wa(481,`app-tabs`,null,11),cf(),Aa(483,`pre`)(484,`code`,43),bT(485,`
const LOGO = join(import.meta.dirname, 'assets/logo.png');

@Injectable()
export class OrderConfirmationMail implements Mailable<OrderConfirmation> {
  constructor(private readonly invoicePdf: InvoicePdf) {}

  render({ order, customer }: OrderConfirmation) {
    // ...
    return {
      subject: \`Your order #\${order.number}\`,
      // mail/templates/order-confirmation.html, wrapped in the layout
      template: 'order-confirmation',
      // ...
      attachments: [
        // Inline: the layout's <img> references it by its cid
        { cid: 'logo@example.com', path: LOGO },
        { filename: \`invoice-\${order.number}.pdf\`, content: this.invoicePdf.render(order, customer) },
      ],
    };
  }
}
`),cf()()(),Aa(486,`p`),bT(487,`Every mail rendered in this layout attaches the logo the same way, or its header shows a broken image. The template gets one more line after the link, `),Aa(488,`code`),bT(489,`<p>Your invoice is attached.</p>`),cf(),bT(490,`.`),cf(),Aa(491,`p`),bT(492,`An attachment's content is a `),Aa(493,`code`),bT(494,`Buffer`),cf(),bT(495,`, a string, or a stream, or it's read from a local `),Aa(496,`code`),bT(497,`path`),cf(),bT(498,` when the mail is sent. The content type comes from the file name, and a non-ASCII file name is encoded so that every mail client shows it. The mailer arranges the parts the way mail clients expect: the logo sits next to the HTML, so a client that shows the text version doesn't list it as an attachment.`),cf(),Aa(499,`blockquote`,55)(500,`strong`),bT(501,`Warning`),cf(),bT(502,` Never build an attachment `),Aa(503,`code`),bT(504,`path`),cf(),bT(505,` from user input. The file at that path is attached, whatever it is. URLs are refused, not fetched.
`),cf(),Aa(506,`p`),bT(507,`While you work on the template, you don't want to place an order for every change. `),Aa(508,`code`),bT(509,`mailer.render()`),cf(),bT(510,` renders a mail class without sending it. A development-only route shows the result in the browser. With the template cache off, it shows an edited template on the next refresh:`),cf(),Aa(511,`app-copy-button`,41)(512,`span`,42),bT(513),LT(514,`extension`),Wa(515,`app-tabs`,null,12),cf(),Aa(517,`pre`)(518,`code`,43),bT(519,`
import { Controller, Get, Header } from '@nestjs/common';
import { Mailer } from '@nestjs/mail';
import { OrderConfirmationMail, type OrderConfirmation } from './order-confirmation.mail.js';

const SAMPLE: OrderConfirmation = {
  customer: {
    id: 'sample',
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    // ...
  },
  order: {
    id: '00000000-0000-4000-8000-000000000000',
    number: 1001,
    customerId: 'sample',
    items: [
      { productId: 'salmon-kibble-2kg', name: 'Salmon kibble, 2 kg', quantity: 2, price: 2499 },
      { productId: 'feather-wand', name: 'Feather wand toy', quantity: 1, price: 799 },
    ],
    total: 5797,
    placedAt: '2026-09-22T10:00:00.000Z',
  },
};

@Controller('dev/mail')
export class MailPreviewController {
  constructor(private readonly mailer: Mailer) {}

  /** Renders the mail with sample data, without sending it: GET /dev/mail/order-confirmation */
  @Get('order-confirmation')
  @Header('content-type', 'text/html; charset=utf-8')
  async orderConfirmation() {
    const message = await this.mailer.render(OrderConfirmationMail, { data: SAMPLE });

    // Browsers don't resolve cid: references; inline the images as data: URLs instead
    let body = message.html ?? '';
    for (const { cid, contentType, content } of message.attachments) {
      if (cid) {
        body = body.replaceAll(\`cid:\${cid}\`, \`data:\${contentType};base64,\${content.toString('base64')}\`);
      }
    }
    return body;
  }
}
`),cf()()(),Aa(520,`p`)(521,`code`),bT(522,`render()`),cf(),bT(523,` returns the finished `),Aa(524,`code`),bT(525,`MailMessage`),cf(),bT(526,`: the subject, the HTML and the derived text, the attachments, and `),Aa(527,`code`),bT(528,`toMime()`),cf(),bT(529,` for the raw message. Recipients are optional here. `),Aa(530,`code`),bT(531,`render()`),cf(),bT(532,` also takes a message written inline, such as a subject, a `),Aa(533,`code`),bT(534,`template`),cf(),bT(535,` and its `),Aa(536,`code`),bT(537,`context`),cf(),bT(538,`, to preview a template without a mail class. Register the controller only outside production:`),cf(),Aa(539,`app-copy-button`,41)(540,`span`,42),bT(541),LT(542,`extension`),Wa(543,`app-tabs`,null,13),cf(),Aa(545,`pre`)(546,`code`,43),bT(547,`
@Module({
  // The preview route renders mail with sample data; production doesn't need it
  controllers: process.env.NODE_ENV === 'production' ? [] : [MailPreviewController],
  providers: [OrderConfirmationMail, InvoicePdf],
})
export class NotificationsModule {}
`),cf()()(),Aa(548,`h4`,56)(549,`span`),bT(550,`Send after the order commits`),cf()(),Aa(551,`p`)(552,`a`,57),bT(553,`Write the order confirmation mail`),cf(),bT(554,` sends the mail from the request, after the order commits. Three things go wrong there:`),cf(),Aa(555,`ul`)(556,`li`)(557,`strong`),bT(558,`A crash between the commit and the send loses the mail.`),cf(),bT(559,` A deploy that restarts the process at the wrong moment leaves a paid order without a confirmation.`),cf(),Aa(560,`li`)(561,`strong`),bT(562,`A mail server outage fails a request that already succeeded.`),cf(),bT(563,` The order is saved, but the customer sees a 500 and may order again.`),cf(),Aa(564,`li`)(565,`strong`),bT(566,`The customer waits for the mail server.`),cf(),bT(567,` An SMTP exchange takes hundreds of milliseconds, and a slow server takes the request's time with it.`),cf()(),Aa(568,`p`),bT(569,`This is the dual-write problem from the `),Aa(570,`a`,58),bT(571,`outbox tutorial`),cf(),bT(572,`, and the outbox (`),Aa(573,`code`),bT(574,`@nestjs/outbox`),cf(),bT(575,`, installed and set up in that tutorial) fixes it. The order and an `),Aa(576,`code`),bT(577,`order.placed`),cf(),bT(578,` message commit in one transaction, and a relay hands the message to a handler that sends the mail. If the send fails, the relay retries it with backoff, and it moves messages that never succeed to the dead-letter table. The outbox keeps its messages in the application's PostgreSQL database, next to the orders, through its store, `),Aa(579,`code`),bT(580,`PostgresOutboxStore`),cf(),bT(581,` from `),Aa(582,`code`),bT(583,`@nestjs/outbox/postgres`),cf(),bT(584,`, on the database that `),Aa(585,`a`,59)(586,`code`),bT(587,`@nestjs/drizzle`),cf()(),bT(588,` registers. The store creates its tables, in a schema of their own, when the application starts; `),Aa(589,`a`,60),bT(590,`Keep messages in your database`),cf(),bT(591,` in the outbox tutorial covers them, and how to apply their migrations in production.`),cf(),Aa(592,`p`),bT(593,`This section shows the order transaction twice: first with Drizzle, which is the tutorial's path, and then, under "With TypeORM" at the end of the section, the same transaction for an application whose ORM is TypeORM. Take one of the two.`),cf(),Aa(594,`p`),bT(595,`Register `),Aa(596,`code`),bT(597,`OutboxModule`),cf(),bT(598,`, and the store as a provider of the root module: a factory that injects the Drizzle database and the `),Aa(599,`code`),bT(600,`OutboxStorage`),cf(),bT(601,` registry, which the store registers itself with. Without it, the outbox would keep its messages in memory, and lose them on restart:`),cf(),Aa(602,`app-copy-button`,41)(603,`span`,42),bT(604),LT(605,`extension`),Wa(606,`app-tabs`,null,14),cf(),Aa(608,`pre`)(609,`code`,43),bT(610,`
@Module({
  imports: [
    // ...
    OutboxModule.forRootAsync({
      useFactory: () => ({
        relay: { enabled: process.env.OUTBOX_RELAY !== 'off' },
        // A mail server that is down for a while doesn't lose the confirmation
        retry: { attempts: 10, backoff: { delay: '10s', maxDelay: '10m' } },
      }),
    }),
    // ...
  ],
  providers: [
    {
      // Messages and inbox records in your database, in a schema of their own (nest_outbox)
      provide: PostgresOutboxStore,
      inject: [getDrizzleToken(), OutboxStorage],
      useFactory: (db: Database, outboxStorage: OutboxStorage) =>
        new PostgresOutboxStore({ executor: fromDrizzle(db) }, outboxStorage),
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(611,`p`)(612,`code`),bT(613,`OrdersService`),cf(),bT(614,` adds the message instead of sending the mail, with Drizzle's `),Aa(615,`code`),bT(616,`tx`),cf(),bT(617,`, so the message commits or rolls back with the order:`),cf(),Aa(618,`app-copy-button`,41)(619,`span`,42),bT(620),LT(621,`extension`),Wa(622,`app-tabs`,null,15),cf(),Aa(624,`pre`)(625,`code`,43),bT(626,`
async placeOrder({ customerId, items }: PlaceOrderDto): Promise<Order> {
  if (!(await this.customersRepository.findById(customerId))) {
    throw new BadRequestException(\`Unknown customer "\${customerId}"\`);
  }
  if (!items?.length) {
    throw new BadRequestException('An order needs at least one item');
  }

  const order = await this.db.transaction(async (tx) => {
    const order = await this.insertOrder(tx, customerId, items);
    // Same transaction: the confirmation mail is queued only if the order commits
    await this.outbox.add(tx, { topic: 'order.placed', payload: order });
    return order;
  });

  this.outbox.notify(); // send now instead of at the next poll
  return order;
}
`),cf()()(),Aa(627,`p`),bT(628,`The handler sends the mail:`),cf(),Aa(629,`app-copy-button`,41)(630,`span`,42),bT(631),LT(632,`extension`),Wa(633,`app-tabs`,null,16),cf(),Aa(635,`pre`)(636,`code`,43),bT(637,`
import { Injectable } from '@nestjs/common';
import { MailError, Mailer } from '@nestjs/mail';
import { NonRetryableMessageError, OnOutboxMessage, type OutboxHandlerContext } from '@nestjs/outbox';
import { CustomersRepository } from '../customers/customers.repository.js';
import type { Order } from '../orders/order.js';
import { OrderConfirmationMail } from './order-confirmation.mail.js';

@Injectable()
export class OrderMailsHandler {
  constructor(
    private readonly mailer: Mailer,
    private readonly customersRepository: CustomersRepository,
  ) {}

  // Runs after the order committed. The inbox skips messages this consumer already handled.
  @OnOutboxMessage('order.placed', { consumer: 'order-confirmation-mail' })
  async sendConfirmation(order: Order, { message, signal }: OutboxHandlerContext) {
    const customer = await this.customersRepository.findById(order.customerId);
    if (!customer) {
      throw new NonRetryableMessageError(\`Customer \${order.customerId} not found\`);
    }

    try {
      await this.mailer.send(OrderConfirmationMail, {
        to: { name: customer.name, address: customer.email },
        data: { order, customer },
        // Over SMTP, a redelivery of this message keeps its Message-ID; Resend gets the
        // key as its Idempotency-Key and refuses the duplicate
        idempotencyKey: message.id,
        signal,
        // The outbox retries with its own backoff, and dead-letters what never succeeds
        retry: false,
      });
    } catch (error) {
      // A refused address or sender won't be accepted later: dead-letter it now
      if (error instanceof MailError && error.permanent) {
        throw new NonRetryableMessageError(error.message, { cause: error });
      }
      throw error;
    }
  }
}
`),cf()()(),Aa(638,`p`),bT(639,`Register the handler in `),Aa(640,`code`),bT(641,`NotificationsModule`),cf(),bT(642,`, which imports `),Aa(643,`code`),bT(644,`CustomersModule`),cf(),bT(645,` for the repository:`),cf(),Aa(646,`app-copy-button`,41)(647,`span`,42),bT(648),LT(649,`extension`),Wa(650,`app-tabs`,null,17),cf(),Aa(652,`pre`)(653,`code`,43),bT(654,`
@Module({
  imports: [CustomersModule],
  // The preview route renders mail with sample data; production doesn't need it
  controllers: process.env.NODE_ENV === 'production' ? [] : [MailPreviewController],
  providers: [OrderConfirmationMail, InvoicePdf, OrderMailsHandler],
})
export class NotificationsModule {}
`),cf()()(),Aa(655,`p`),bT(656,`Each option of the `),Aa(657,`code`),bT(658,`send()`),cf(),bT(659,` call has a job:`),cf(),Aa(660,`ul`)(661,`li`)(662,`strong`)(663,`code`),bT(664,`idempotencyKey`),cf(),bT(665,`.`),cf(),bT(666,` The outbox delivers at least once: a relay that crashes after sending, before recording it, sends again. The key identifies the mail across those deliveries. The `),Aa(667,`code`),bT(668,`Message-ID`),cf(),bT(669,` header is derived from it, so over SMTP a duplicate carries the same id, which Gmail and other receivers use to drop it. `),Aa(670,`code`),bT(671,`ResendTransport`),cf(),bT(672,` sends the key as Resend's `),Aa(673,`code`),bT(674,`Idempotency-Key`),cf(),bT(675,`, and Resend refuses the duplicate for 24 hours. Postmark, SendGrid and SES assign their own `),Aa(676,`code`),bT(677,`Message-ID`),cf(),bT(678,` and have no idempotency keys, so with them a redelivery can reach the customer twice.`),cf(),Aa(679,`li`)(680,`strong`)(681,`code`),bT(682,`signal`),cf(),bT(683,`.`),cf(),bT(684,` The relay aborts it when the handler outlives `),Aa(685,`code`),bT(686,`publishTimeout`),cf(),bT(687,`. The mailer stops the SMTP exchange or the HTTP request.`),cf(),Aa(688,`li`)(689,`strong`)(690,`code`),bT(691,`retry: false`),cf(),bT(692,`.`),cf(),bT(693,` The mailer retries transient failures three times by default, with backoff. Here the outbox already retries, over minutes instead of seconds, so the mailer makes one attempt per delivery. Retries at both layers would multiply.`),cf()(),Aa(694,`p`),bT(695,`Every error the package throws extends `),Aa(696,`code`),bT(697,`MailError`),cf(),bT(698,`, and its `),Aa(699,`code`),bT(700,`permanent`),cf(),bT(701,` flag says whether sending the same message again can succeed. A 4xx SMTP reply (greylisting, a full mailbox), a 429 from an HTTP provider, a timeout or a dropped connection is transient: the handler rethrows it, and the outbox retries. A 5xx reply, such as `),Aa(702,`code`),bT(703,`550 5.1.1 User unknown`),cf(),bT(704,`, is permanent: the handler throws `),Aa(705,`code`),bT(706,`NonRetryableMessageError`),cf(),bT(707,`, and the outbox dead-letters the message at once instead of trying ten more times.`),cf(),Aa(708,`p`),bT(709,`When SMTP refuses one of several recipients, the transaction is reset before the message is sent, so an error always means nobody received it, and the outbox's retry can't deliver twice. The one exception: the connection drops after the message was transmitted, before the server answers. The mailer can't know whether the server kept it, reports a transient error, and the retry sends it again, with the same `),Aa(710,`code`),bT(711,`Message-ID`),cf(),bT(712,`.`),cf(),Aa(713,`p`)(714,`strong`),bT(715,`With TypeORM.`),cf(),bT(716,` The same order transaction for an application whose ORM is TypeORM. Drizzle stays the tutorial's path: take this code instead of the Drizzle code above, not next to it. The outbox keeps its messages through the same store, on TypeORM's data source, as the outbox tutorial's `),Aa(717,`a`,60),bT(718,`Keep messages in your database`),cf(),bT(719,` shows. The example application keeps this version in `),Aa(720,`code`),bT(721,`src/typeorm`),cf(),bT(722,`, next to the tutorial's Drizzle code, with the customers, products and orders as entities.`),cf(),Aa(723,`p`)(724,`code`),bT(725,`TypeOrmModule`),cf(),bT(726,` takes the place of `),Aa(727,`code`),bT(728,`DrizzleModule`),cf(),bT(729,` in the root module, with the options the TypeORM CLI shares, and the store's factory injects its `),Aa(730,`code`),bT(731,`DataSource`),cf(),bT(732,`, through `),Aa(733,`code`),bT(734,`fromTypeOrm()`),cf(),bT(735,`:`),cf(),Aa(736,`app-copy-button`,41)(737,`span`,42),bT(738),LT(739,`extension`),Wa(740,`app-tabs`,null,18),cf(),Aa(742,`pre`)(743,`code`,43),bT(744,`
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // The entities and migrations the CLI uses; migrations run on deploy (\`migration:run\`)
      useFactory: () => ({ ...dataSourceOptions, url: process.env.DATABASE_URL }),
    }),
    // ...
    OutboxModule.forRootAsync({
      useFactory: () => ({
        relay: { enabled: process.env.OUTBOX_RELAY !== 'off' },
        // A mail server that is down for a while doesn't lose the confirmation
        retry: { attempts: 10, backoff: { delay: '10s', maxDelay: '10m' } },
      }),
    }),
    // ...
  ],
  providers: [
    {
      // Messages and inbox records in your database, in a schema of their own (nest_outbox)
      provide: PostgresOutboxStore,
      inject: [DataSource, OutboxStorage],
      useFactory: (dataSource: DataSource, outboxStorage: OutboxStorage) =>
        new PostgresOutboxStore({ executor: fromTypeOrm(dataSource) }, outboxStorage),
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(745,`p`)(746,`code`),bT(747,`OrdersService`),cf(),bT(748,` opens its transaction with the data source, and passes the transaction's entity manager to `),Aa(749,`code`),bT(750,`outbox.add()`),cf(),bT(751,`, next to its own writes. The outbox's type parameter is TypeORM's `),Aa(752,`code`),bT(753,`EntityManager`),cf(),bT(754,`:`),cf(),Aa(755,`app-copy-button`,41)(756,`span`,42),bT(757),LT(758,`extension`),Wa(759,`app-tabs`,null,19),cf(),Aa(761,`pre`)(762,`code`,43),bT(763,`
@Injectable()
export class OrdersService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly customersRepository: CustomersRepository,
    private readonly outbox: Outbox<EntityManager>,
  ) {}

  async placeOrder({ customerId, items }: PlaceOrderDto): Promise<Order> {
    // ... check the customer and the items, as in the Drizzle version

    const order = await this.dataSource.transaction(async (manager) => {
      const order = await this.insertOrder(manager, customerId, items);
      // The transaction's EntityManager: the confirmation mail is queued only if the order commits
      await this.outbox.add(manager, { topic: 'order.placed', payload: order });
      return order;
    });

    this.outbox.notify(); // send now instead of at the next poll
    return order;
  }

  private async insertOrder(manager: EntityManager, customerId: string, items: PlaceOrderDto['items']): Promise<Order> {
    const found = await manager.findBy(ProductEntity, { id: In(items.map((item) => item.productId)) });
    // ... price the lines and total them, as in the Drizzle version
    // The database numbers the order from its sequence: 1001, 1002, ...
    const { generatedMaps } = await manager.insert(OrderEntity, { id, customerId, items: lines, total, placedAt });
    const { number } = generatedMaps[0] as Pick<OrderEntity, 'number'>;
    return { id, number, customerId, items: lines, total, placedAt: placedAt.toISOString() };
  }
}
`),cf()()(),Aa(764,`p`)(765,`code`),bT(766,`OrderEntity`),cf(),bT(767,` declares `),Aa(768,`code`),bT(769,`number`),cf(),bT(770,` as an identity column (`),Aa(771,`code`),bT(772,`generated: 'identity'`),cf(),bT(773,`), so `),Aa(774,`code`),bT(775,`manager.insert()`),cf(),bT(776,` returns the number the database assigned in `),Aa(777,`code`),bT(778,`generatedMaps`),cf(),bT(779,`. An entity can't state where the sequence starts, so the example's seed migration restarts it at 1001, next to the customers and products it inserts. The handler and `),Aa(780,`code`),bT(781,`NotificationsModule`),cf(),bT(782,` stay as they are; `),Aa(783,`code`),bT(784,`CustomersRepository`),cf(),bT(785,` reads the customer with TypeORM, like the rest of the application.`),cf(),Aa(786,`h4`,61)(787,`span`),bT(788,`Send in production`),cf()(),Aa(789,`p`),bT(790,`Development writes files, to a local disk that a container loses when it's replaced; production needs a real transport. Pick it from the environment, so the same build runs everywhere:`),cf(),Aa(791,`app-copy-button`,41)(792,`span`,42),bT(793),LT(794,`extension`),Wa(795,`app-tabs`,null,20),cf(),Aa(797,`pre`)(798,`code`,43),bT(799,`
import { FileMailTransport, ResendTransport, SmtpTransport, type MailTransport } from '@nestjs/mail';
import { readFileSync } from 'node:fs';

/**
 * The transport for this environment: \`file\` in development (the default), \`smtp\` or
 * \`resend\` in production. Missing settings fail at startup, naming the variable.
 */
export function mailTransport(env: NodeJS.ProcessEnv = process.env): MailTransport {
  switch (env.MAIL_TRANSPORT ?? 'file') {
    case 'file':
      return new FileMailTransport({ directory: env.MAIL_DIRECTORY ?? 'var/mail' });
    case 'smtp':
      return new SmtpTransport({
        url: required(env, 'SMTP_URL'), // smtp://user:password@smtp.example.com:587
        pool: true,
        // A private CA, e.g. for a relay inside the company network
        ...(env.SMTP_CA_FILE && { tls: { ca: readFileSync(env.SMTP_CA_FILE) } }),
      });
    case 'resend':
      return new ResendTransport({ apiKey: required(env, 'RESEND_API_KEY') });
    default:
      throw new Error(\`MAIL_TRANSPORT must be "file", "smtp" or "resend" (got "\${env.MAIL_TRANSPORT}")\`);
  }
}

function required(env: NodeJS.ProcessEnv, name: string): string {
  const value = env[name];
  if (!value) {
    throw new Error(\`\${name} is required when MAIL_TRANSPORT is "\${env.MAIL_TRANSPORT}"\`);
  }
  return value;
}
`),cf()()(),Aa(800,`p`),bT(801,`Build the transport in `),Aa(802,`code`),bT(803,`forRootAsync()`),cf(),bT(804,`. The factory runs at startup, so a typo in `),Aa(805,`code`),bT(806,`MAIL_TRANSPORT`),cf(),bT(807,` or a missing `),Aa(808,`code`),bT(809,`SMTP_URL`),cf(),bT(810,` stops the application there instead of failing the first mail:`),cf(),Aa(811,`app-copy-button`,41)(812,`span`,42),bT(813),LT(814,`extension`),Wa(815,`app-tabs`,null,21),cf(),Aa(817,`pre`)(818,`code`,43),bT(819,`
MailModule.forRootAsync({
  // Runs at startup: a bad MAIL_TRANSPORT or a missing SMTP_URL stops the app there
  useFactory: () => ({
    transport: mailTransport(),
    templates: new FileTemplateEngine({
      dir: join(import.meta.dirname, 'mail/templates'),
      layout: 'layout',
      cache: process.env.NODE_ENV === 'production',
    }),
    from: process.env.MAIL_FROM ?? 'Orders <orders@example.com>',
  }),
}),
`),cf()()(),Aa(820,`p`)(821,`strong`),bT(822,`SMTP.`),cf(),Aa(823,`code`),bT(824,`SmtpTransport`),cf(),bT(825,` speaks SMTP itself, on `),Aa(826,`code`),bT(827,`node:net`),cf(),bT(828,` and `),Aa(829,`code`),bT(830,`node:tls`),cf(),bT(831,`:`),cf(),Aa(832,`ul`)(833,`li`)(834,`strong`),bT(835,`Encryption.`),cf(),bT(836,` On port 587 it upgrades with STARTTLS, and a server that doesn't offer STARTTLS is refused rather than sent to in plaintext. `),Aa(837,`code`),bT(838,`startTls: 'opportunistic'`),cf(),bT(839,`, the default for localhost, upgrades only when the server offers it, and `),Aa(840,`code`),bT(841,`'never'`),cf(),bT(842,` stays in plaintext, for a relay on a trusted network. On port 465 (`),Aa(843,`code`),bT(844,`smtps://`),cf(),bT(845,`) it uses TLS from the first byte. Certificates are verified against the host name; `),Aa(846,`code`),bT(847,`tls.ca`),cf(),bT(848,` adds a private CA. Credentials are never sent over an unencrypted connection, except to localhost.`),cf(),Aa(849,`li`)(850,`strong`),bT(851,`Authentication.`),cf(),bT(852,` It uses AUTH PLAIN or LOGIN, whichever the server offers, and `),Aa(853,`code`),bT(854,`authMethod`),cf(),bT(855,` forces one. For Gmail and Microsoft 365, pass an OAuth access token as `),Aa(856,`code`),bT(857,`accessToken`),cf(),bT(858,` in `),Aa(859,`code`),bT(860,`auth`),cf(),bT(861,` for XOAUTH2. OAuth access tokens expire, typically after an hour, so `),Aa(862,`code`),bT(863,`accessToken`),cf(),bT(864,` can also be a function that returns one, or a promise of one: it's called for every new connection, and can fetch a fresh token. `),Aa(865,`code`),bT(866,`name`),cf(),bT(867,` sets the name the transport introduces itself with in `),Aa(868,`code`),bT(869,`EHLO`),cf(),bT(870,`; the default is the machine's host name when it's fully qualified, else its IP address.`),cf(),Aa(871,`li`)(872,`strong`),bT(873,`Pooling.`),cf(),Aa(874,`code`),bT(875,`pool: true`),cf(),bT(876,` keeps up to five connections open and reuses them, instead of a TCP and TLS handshake per mail. An object sets the limits: `),Aa(877,`code`),bT(878,`maxConnections`),cf(),bT(879,` (default 5; further sends wait for a free connection), `),Aa(880,`code`),bT(881,`maxMessages`),cf(),bT(882,` (default 100, after which a connection is replaced) and `),Aa(883,`code`),bT(884,`idleTimeout`),cf(),bT(885,` (default `),Aa(886,`code`),bT(887,`'30s'`),cf(),bT(888,`, after which an idle connection is closed). Every connection says `),Aa(889,`code`),bT(890,`QUIT`),cf(),bT(891,` when the application shuts down.`),cf(),Aa(892,`li`)(893,`strong`),bT(894,`Replies.`),cf(),bT(895,` A 4xx reply is a transient `),Aa(896,`code`),bT(897,`MailSmtpError`),cf(),bT(898,`, a 5xx reply a permanent one. Both carry the reply `),Aa(899,`code`),bT(900,`code`),cf(),bT(901,`, the enhanced code (such as `),Aa(902,`code`),bT(903,`5.1.1`),cf(),bT(904,`) and the server's text.`),cf()(),Aa(905,`p`),bT(906,`To sign mail with DKIM when your SMTP server doesn't, add `),Aa(907,`code`),bT(908,`dkim`),cf(),bT(909,` with the domain (`),Aa(910,`code`),bT(911,`domainName`),cf(),bT(912,`), the selector (`),Aa(913,`code`),bT(914,`keySelector`),cf(),bT(915,`) and the private key (`),Aa(916,`code`),bT(917,`privateKey`),cf(),bT(918,`, PEM or a `),Aa(919,`code`),bT(920,`KeyObject`),cf(),bT(921,`). An RSA key signs with `),Aa(922,`code`),bT(923,`rsa-sha256`),cf(),bT(924,`, an Ed25519 key with `),Aa(925,`code`),bT(926,`ed25519-sha256`),cf(),bT(927,` (RFC 8463); not every receiver verifies Ed25519 signatures yet, and the transport signs with one key, so RSA is the safe choice unless you know your recipients' servers do. The signature covers From, Reply-To, To, Cc, Subject, Date, Message-ID and the MIME headers, plus the message's custom headers; `),Aa(928,`code`),bT(929,`dkim.headers`),cf(),bT(930,` replaces that list. From is always signed, and listed once more than it occurs in the message, so a second From added below the signature breaks it. HTTP providers sign with your verified domain themselves.`),cf(),Aa(931,`p`)(932,`strong`),bT(933,`HTTP providers.`),cf(),Aa(934,`code`),bT(935,`ResendTransport`),cf(),bT(936,`, `),Aa(937,`code`),bT(938,`PostmarkTransport`),cf(),bT(939,`, `),Aa(940,`code`),bT(941,`SendGridTransport`),cf(),bT(942,` and `),Aa(943,`code`),bT(944,`SesTransport`),cf(),bT(945,` call the providers' APIs with `),Aa(946,`code`),bT(947,`fetch`),cf(),bT(948,`, and need no SDK. The `),Aa(949,`code`),bT(950,`fetch`),cf(),bT(951,` option replaces the global one, to go through a proxy or to stub the API in a test. `),Aa(952,`code`),bT(953,`SesTransport`),cf(),bT(954,` signs its requests with AWS Signature Version 4, and accepts the AWS SDK's credential providers, such as instance roles, as `),Aa(955,`code`),bT(956,`credentials`),cf(),bT(957,`. Of the four, only Resend supports idempotency keys. Resend and SendGrid need at least one `),Aa(958,`code`),bT(959,`to`),cf(),bT(960,` recipient: a mail with only `),Aa(961,`code`),bT(962,`cc`),cf(),bT(963,` or `),Aa(964,`code`),bT(965,`bcc`),cf(),bT(966,` fails with `),Aa(967,`code`),bT(968,`MailMessageError`),cf(),bT(969,` before the request.`),cf(),Aa(970,`p`)(971,`strong`),bT(972,`Internationalized addresses.`),cf(),bT(973,` A domain with non-ASCII characters (`),Aa(974,`code`),bT(975,`zoë@kočka.example`),cf(),bT(976,`) is converted to its ASCII form (IDNA, `),Aa(977,`code`),bT(978,`xn--...`),cf(),bT(979,`) for every transport, so no server has to support it. A non-ASCII local part, before the `),Aa(980,`code`),bT(981,`@`),cf(),bT(982,`, can't be converted: over SMTP it needs the server's SMTPUTF8 extension. `),Aa(983,`code`),bT(984,`SmtpTransport`),cf(),bT(985,` uses SMTPUTF8 when the server offers it, and otherwise fails with a permanent `),Aa(986,`code`),bT(987,`MailConnectionError`),cf(),bT(988,` before sending anything: `),Aa(989,`code`),bT(990,`The SMTP server ... doesn't support SMTPUTF8, which an address with non-ASCII characters needs`),cf(),bT(991,`. The HTTP providers get the address as it is, and whether they accept it is up to the provider.`),cf(),Aa(992,`p`),bT(993,`Use `),Aa(994,`code`),bT(995,`app.enableShutdownHooks()`),cf(),bT(996,` in `),Aa(997,`code`),bT(998,`main.ts`),cf(),bT(999,`, so a deploy lets the relay finish the mails it is sending, and closes the SMTP pool afterwards.`),cf(),Aa(1e3,`h4`,62)(1001,`span`),bT(1002,`Send it in the customer's language`),cf()(),Aa(1003,`p`),bT(1004,`The store sells in English and Polish. Customers choose a language when they sign up, and the `),Aa(1005,`code`),bT(1006,`customers`),cf(),bT(1007,` table stores it in a `),Aa(1008,`code`),bT(1009,`locale`),cf(),bT(1010,` column: `),Aa(1011,`code`),bT(1012,`en`),cf(),bT(1013,` or `),Aa(1014,`code`),bT(1015,`pl`),cf(),bT(1016,`. The mailer hands the locale of each send to the template engine, which picks the template for it.`),cf(),Aa(1017,`p`),bT(1018,`Translate the template: add `),Aa(1019,`code`),bT(1020,`order-confirmation.pl.html`),cf(),bT(1021,` next to the English one.`),cf(),Aa(1022,`app-copy-button`,41)(1023,`span`,42),bT(1024),LT(1025,`extension`),Wa(1026,`app-tabs`,null,22),cf(),Aa(1028,`pre`)(1029,`code`,50),bT(1030),cf()()(),Aa(1031,`p`),bT(1032,`For the locale `),Aa(1033,`code`),bT(1034,`pl`),cf(),bT(1035,`, `),Aa(1036,`code`),bT(1037,`FileTemplateEngine`),cf(),bT(1038,` renders `),Aa(1039,`code`),bT(1040,`order-confirmation.pl.html`),cf(),bT(1041,`, and for any other locale, or none, `),Aa(1042,`code`),bT(1043,`order-confirmation.html`),cf(),bT(1044,`. A regional locale tries itself first, then its language: for `),Aa(1045,`code`),bT(1046,`pt-BR`),cf(),bT(1047,`, the engine looks for `),Aa(1048,`code`),bT(1049,`order-confirmation.pt-BR.html`),cf(),bT(1050,`, then `),Aa(1051,`code`),bT(1052,`order-confirmation.pt.html`),cf(),bT(1053,`. Partials and the layout are looked up the same way, so the layout stays shared, and the Polish signature is a partial of its own:`),cf(),Aa(1054,`app-copy-button`,41)(1055,`span`,42),bT(1056),LT(1057,`extension`),Wa(1058,`app-tabs`,null,23),cf(),Aa(1060,`pre`)(1061,`code`,50),bT(1062,`
<p>Zesp\xF3\u0142 obs\u0142ugi klienta</p>
`),cf()()(),Aa(1063,`p`),bT(1064,`A mail's copy is prose, so it's translated a file at a time: the translator sees the whole mail, and writes Polish sentences instead of filling in keys one by one. What the mail class computes still depends on the locale: the subject, the invoice's file name and the prices. They come from `),Aa(1065,`code`),bT(1066,`@nestjs/i18n`),cf(),bT(1067,`, which the `),Aa(1068,`a`,63),bT(1069,`internationalization chapter`),cf(),bT(1070,` covers in depth. Add a catalog for the mail, one per language:`),cf(),Aa(1071,`app-copy-button`,41)(1072,`span`,42),bT(1073),LT(1074,`extension`),Wa(1075,`app-tabs`,null,24),cf(),Aa(1077,`pre`)(1078,`code`,46),bT(1079,`
{
  "orderConfirmation": {
    "subject": "Your order #{number}",
    "invoiceFile": "invoice-{number}.pdf"
  }
}
`),cf()()(),Aa(1080,`app-copy-button`,41)(1081,`span`,42),bT(1082),LT(1083,`extension`),Wa(1084,`app-tabs`,null,25),cf(),Aa(1086,`pre`)(1087,`code`,46),bT(1088,`
{
  "orderConfirmation": {
    "subject": "Twoje zam\xF3wienie #{number}",
    "invoiceFile": "faktura-{number}.pdf"
  }
}
`),cf()()(),Aa(1089,`p`),bT(1090,`Register the catalogs' shape, so keys are checked at compile time, and register `),Aa(1091,`code`),bT(1092,`I18nModule`),cf(),bT(1093,` next to `),Aa(1094,`code`),bT(1095,`MailModule`),cf(),bT(1096,`:`),cf(),Aa(1097,`app-copy-button`,41)(1098,`span`,42),bT(1099),LT(1100,`extension`),Wa(1101,`app-tabs`,null,26),cf(),Aa(1103,`pre`)(1104,`code`,43),bT(1105,`
import type mail from './en/mail.json';

export interface Translations {
  mail: typeof mail;
}

declare module '@nestjs/i18n' {
  interface I18nTypes {
    translations: Translations;
  }
}
`),cf()()(),Aa(1106,`app-copy-button`,41)(1107,`span`,42),bT(1108),LT(1109,`extension`),Wa(1110,`app-tabs`,null,27),cf(),Aa(1112,`pre`)(1113,`code`,43),bT(1114,`
@Module({
  imports: [
    // ...
    I18nModule.forRoot({
      defaultLocale: 'en',
      supportedLocales: ['en', 'pl'],
      loader: new JsonI18nLoader({ path: join(import.meta.dirname, 'i18n') }),
    }),
    MailModule.forRootAsync({
      // ...
    }),
    // ...
  ],
})
export class AppModule {}
`),cf()()(),Aa(1115,`p`),bT(1116,`Add the catalogs to the assets in `),Aa(1117,`code`),bT(1118,`nest-cli.json`),cf(),bT(1119,` too (`),Aa(1120,`code`),bT(1121,`i18n/**/*.json`),cf(),bT(1122,`), as the internationalization chapter shows.`),cf(),Aa(1123,`p`),bT(1124,`The mail class is a provider, so it injects `),Aa(1125,`code`),bT(1126,`I18nService`),cf(),bT(1127,` next to the invoice renderer. `),Aa(1128,`code`),bT(1129,`render()`),cf(),bT(1130,` gets a second argument, the render context, whose `),Aa(1131,`code`),bT(1132,`locale`),cf(),bT(1133,` is the one passed to `),Aa(1134,`code`),bT(1135,`send()`),cf(),bT(1136,`, and the one the mailer hands to the template engine. Its `),Aa(1137,`code`),bT(1138,`to`),cf(),bT(1139,` holds the parsed recipients, and is empty for a preview rendered without them:`),cf(),Aa(1140,`app-copy-button`,41)(1141,`span`,42),bT(1142),LT(1143,`extension`),Wa(1144,`app-tabs`,null,28),cf(),Aa(1146,`pre`)(1147,`code`,43),bT(1148,`
type Key = keyof Translations['mail']['orderConfirmation'];

const SHOP_URL = process.env.SHOP_URL ?? 'https://shop.example.com';
const LOGO = join(import.meta.dirname, 'assets/logo.png');

@Injectable()
export class OrderConfirmationMail implements Mailable<OrderConfirmation> {
  constructor(
    private readonly i18nService: I18nService,
    private readonly invoicePdf: InvoicePdf,
  ) {}

  render({ order, customer }: OrderConfirmation, { locale }: MailRenderContext) {
    // Mail is sent outside the customer's request, so the locale is always passed explicitly
    const t = (key: Key, args?: Record<string, unknown>) =>
      this.i18nService.t(\`mail.orderConfirmation.\${key}\`, { locale, args });
    const price = (cents: number) =>
      this.i18nService.formatNumber(cents / 100, { locale, style: 'currency', currency: 'USD' });
    return {
      subject: t('subject', { number: order.number }),
      // order-confirmation.pl.html for Polish, else order-confirmation.html
      template: 'order-confirmation',
      // ...
      attachments: [
        // Inline: the layout's <img> references it by its cid
        { cid: 'logo@example.com', path: LOGO },
        { filename: t('invoiceFile', { number: order.number }), content: this.invoicePdf.render(order, customer) },
      ],
    };
  }
}
`),cf()()(),Aa(1149,`p`),bT(1150,`The context doesn't change: the same values fill either template. `),Aa(1151,`code`),bT(1152,`Key`),cf(),bT(1153,` is `),Aa(1154,`code`),bT(1155,`keyof Translations['mail']['orderConfirmation']`),cf(),bT(1156,`, so a misspelled key is a compile error. Prices are formatted for the locale: `),Aa(1157,`code`),bT(1158,`$25.98`),cf(),bT(1159,` in English, `),Aa(1160,`code`),bT(1161,`25,98 USD`),cf(),bT(1162,` in Polish. The invoice's file name comes from the catalog: `),Aa(1163,`code`),bT(1164,`invoice-1001.pdf`),cf(),bT(1165,` or `),Aa(1166,`code`),bT(1167,`faktura-1001.pdf`),cf(),bT(1168,`.`),cf(),Aa(1169,`blockquote`,55)(1170,`strong`),bT(1171,`Warning`),cf(),bT(1172,` Pass the locale explicitly. `),Aa(1173,`code`),bT(1174,`I18nService`),cf(),bT(1175,` falls back to the current request's locale, and mail is often sent outside the recipient's request: from an outbox handler, as here, or from a request made by someone else, such as an admin. That request's locale is the wrong one.
`),cf(),Aa(1176,`p`),bT(1177,`The outbox handler passes the customer's locale when sending:`),cf(),Aa(1178,`app-copy-button`,41)(1179,`span`,42),bT(1180),LT(1181,`extension`),Wa(1182,`app-tabs`,null,29),cf(),Aa(1184,`pre`)(1185,`code`,43),bT(1186,`
await this.mailer.send(OrderConfirmationMail, {
  to: { name: customer.name, address: customer.email },
  data: { order, customer },
  locale: customer.locale,
  // ...
});
`),cf()()(),Aa(1187,`p`),bT(1188,`A Polish subject or recipient name can't go into a mail header as it is: headers are ASCII. The mailer encodes non-ASCII header text as RFC 2047 encoded-words, such as `),Aa(1189,`code`),bT(1190,`=?UTF-8?Q?Twoje_zam=C3=B3wienie_=231001?=`),cf(),bT(1191,`, and the body as quoted-printable, so every server carries the message unchanged and mail clients show `),Aa(1192,`code`),bT(1193,`Twoje zamówienie #1001`),cf(),bT(1194,`.`),cf(),Aa(1195,`p`),bT(1196,`The preview takes the language from the query string, so both versions can be checked in a browser:`),cf(),Aa(1197,`app-copy-button`,41)(1198,`span`,42),bT(1199),LT(1200,`extension`),Wa(1201,`app-tabs`,null,30),cf(),Aa(1203,`pre`)(1204,`code`,43),bT(1205,`
/** Renders the mail with sample data, without sending it: GET /dev/mail/order-confirmation?locale=pl */
@Get('order-confirmation')
@Header('content-type', 'text/html; charset=utf-8')
async orderConfirmation(@Query('locale') locale = 'en') {
  const message = await this.mailer.render(OrderConfirmationMail, { data: SAMPLE, locale });
  // ...
}
`),cf()()(),Aa(1206,`h4`,64)(1207,`span`),bT(1208,`Use another template engine`),cf()(),Aa(1209,`p`)(1210,`code`),bT(1211,`FileTemplateEngine`),cf(),bT(1212,` implements `),Aa(1213,`code`),bT(1214,`MailTemplateEngine`),cf(),bT(1215,`, an abstract class with one method: `),Aa(1216,`code`),bT(1217,`render()`),cf(),bT(1218,` takes the template's name, the context and the locale, and returns the HTML, or an object with `),Aa(1219,`code`),bT(1220,`html`),cf(),bT(1221,` and `),Aa(1222,`code`),bT(1223,`text`),cf(),bT(1224,`, or a promise of either. Extend it to render with Handlebars, EJS or anything else. An engine for Handlebars templates in `),Aa(1225,`code`),bT(1226,`.hbs`),cf(),bT(1227,` files:`),cf(),Aa(1228,`app-copy-button`,41)(1229,`span`,42),bT(1230),LT(1231,`extension`),Wa(1232,`app-tabs`,null,31),cf(),Aa(1234,`pre`)(1235,`code`,43),bT(1236,`
import { MailTemplateEngine, MailTemplateError, type MailTemplateRenderOptions } from '@nestjs/mail';
import Handlebars from 'handlebars';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const TEMPLATES = join(import.meta.dirname, 'templates');

/** Renders order-confirmation.pl.hbs, else order-confirmation.hbs, with Handlebars. */
export class HandlebarsTemplateEngine extends MailTemplateEngine {
  private readonly templates = new Map<string, ReturnType<typeof Handlebars.compile> | undefined>();

  async render(name: string, context: object, { locale }: MailTemplateRenderOptions) {
    // Only a language code goes into a file name, never whatever the locale holds
    const localized = locale && /^[a-z]{2}$/.test(locale) ? [\`\${name}.\${locale}.hbs\`] : [];
    for (const file of [...localized, \`\${name}.hbs\`]) {
      const template = await this.load(file);
      if (template) {
        return template(context);
      }
    }
    throw new MailTemplateError(\`No template "\${name}" in \${TEMPLATES}\`, { template: name });
  }

  private async load(file: string) {
    if (!this.templates.has(file)) {
      const source = await readFile(join(TEMPLATES, file), 'utf8').catch(() => undefined);
      // compat: plain paths fall back to outer contexts, as in FileTemplateEngine
      this.templates.set(file, source === undefined ? undefined : Handlebars.compile(source, { compat: true }));
    }
    return this.templates.get(file);
  }
}
`),cf()()(),Aa(1237,`p`),bT(1238,`Pass it as `),Aa(1239,`code`),bT(1240,`templates`),cf(),bT(1241,` in place of `),Aa(1242,`code`),bT(1243,`FileTemplateEngine`),cf(),bT(1244,`: an instance, or the class, which Nest instantiates, so it can inject configuration or other providers. As with the transport, a class goes at the top level of `),Aa(1245,`code`),bT(1246,`forRootAsync()`),cf(),bT(1247,`, next to `),Aa(1248,`code`),bT(1249,`useFactory`),cf(),bT(1250,`, and the factory returns instances.`),cf(),Aa(1251,`p`),bT(1252,`The mailer sends the HTML as the engine returns it, so escaping is the engine's job: Handlebars escapes double-braced values, as `),Aa(1253,`code`),bT(1254,`FileTemplateEngine`),cf(),bT(1255,` does. `),Aa(1256,`code`),bT(1257,`compat: true`),cf(),bT(1258,` makes names inside `),Aa(1259,`code`),bT(1260,`#each`),cf(),bT(1261,` fall back to the outer context, so the templates of this tutorial render under Handlebars as they are. Handlebars doesn't know about the `),Aa(1262,`code`),bT(1263,`partials/`),cf(),bT(1264,` folder and the layout: register the partials with `),Aa(1265,`code`),bT(1266,`Handlebars.registerPartial()`),cf(),bT(1267,`, and render the layout around the mail yourself. For `),Aa(1268,`a`,65),bT(1269,`MJML`),cf(),bT(1270,`, convert the rendered MJML with `),Aa(1271,`code`),bT(1272,`mjml2html()`),cf(),bT(1273,` before returning the HTML. Throw `),Aa(1274,`code`),bT(1275,`MailTemplateError`),cf(),bT(1276,` for a template that is missing or broken: it's permanent, so the outbox dead-letters the mail instead of retrying it.`),cf(),Aa(1277,`h4`,66)(1278,`span`),bT(1279,`Write your own transport`),cf()(),Aa(1280,`p`),bT(1281,`For a provider the package doesn't ship a transport for, extend `),Aa(1282,`code`),bT(1283,`MailTransport`),cf(),bT(1284,`. Its `),Aa(1285,`code`),bT(1286,`send()`),cf(),bT(1287,` gets the finished message and resolves once the provider has accepted it. A transport for Mailgun, whose `),Aa(1288,`code`),bT(1289,`messages.mime`),cf(),bT(1290,` endpoint takes the message as MIME, the way `),Aa(1291,`code`),bT(1292,`SesTransport`),cf(),bT(1293,` sends it to SES:`),cf(),Aa(1294,`app-copy-button`,41)(1295,`span`,42),bT(1296),LT(1297,`extension`),Wa(1298,`app-tabs`,null,32),cf(),Aa(1300,`pre`)(1301,`code`,43),bT(1302,`
import {
  MailProviderError,
  MailTransport,
  type MailMessage,
  type MailTransportResult,
  type MailTransportSendOptions,
} from '@nestjs/mail';

export interface MailgunTransportOptions {
  domain: string;
  apiKey: string;
  /** \`https://api.eu.mailgun.net\` for a domain in the EU region. */
  baseUrl?: string;
}

/** Sends the finished MIME message through Mailgun's \`messages.mime\` endpoint. */
export class MailgunTransport extends MailTransport {
  readonly #apiKey: string;
  private readonly url: string;

  constructor({ domain, apiKey, baseUrl = 'https://api.mailgun.net' }: MailgunTransportOptions) {
    super();
    this.#apiKey = apiKey;
    this.url = \`\${baseUrl}/v3/\${encodeURIComponent(domain)}/messages.mime\`;
  }

  async send(message: MailMessage, { signal }: MailTransportSendOptions): Promise<MailTransportResult> {
    const form = new FormData();
    // The envelope names every recipient; the MIME message leaves Bcc out
    form.append('to', message.envelope.to.join(','));
    form.append('message', new Blob([new Uint8Array(message.toMime())]), 'message.eml');

    // An abort rejects with signal.reason; a network error is transient, so the mailer retries it
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { authorization: \`Basic \${Buffer.from(\`api:\${this.#apiKey}\`).toString('base64')}\` },
      body: form,
      signal: AbortSignal.any([signal, AbortSignal.timeout(30_000)]),
    });

    if (!response.ok) {
      const retryAfter = Number(response.headers.get('retry-after'));
      // Permanent for 4xx except 408, 409 and 429: those and 5xx are retried
      throw new MailProviderError({
        provider: 'mailgun',
        status: response.status,
        detail: await response.text(),
        ...(retryAfter > 0 && { retryAfterMs: retryAfter * 1_000 }),
      });
    }

    const { id } = (await response.json()) as { id?: string };
    return { accepted: message.envelope.to, providerMessageId: id };
  }
}
`),cf()()(),Aa(1303,`p`),bT(1304,`Pass an instance as `),Aa(1305,`code`),bT(1306,`transport`),cf(),bT(1307,`, as with the built-in transports. `),Aa(1308,`code`),bT(1309,`send(message, options)`),cf(),bT(1310,` gets:`),cf(),Aa(1311,`ul`)(1312,`li`)(1313,`strong`)(1314,`code`),bT(1315,`message`),cf(),bT(1316,`.`),cf(),bT(1317,` A `),Aa(1318,`code`),bT(1319,`MailMessage`),cf(),bT(1320,`, validated and frozen: `),Aa(1321,`code`),bT(1322,`from`),cf(),bT(1323,`, `),Aa(1324,`code`),bT(1325,`to`),cf(),bT(1326,`, `),Aa(1327,`code`),bT(1328,`cc`),cf(),bT(1329,`, `),Aa(1330,`code`),bT(1331,`bcc`),cf(),bT(1332,`, `),Aa(1333,`code`),bT(1334,`replyTo`),cf(),bT(1335,`, `),Aa(1336,`code`),bT(1337,`subject`),cf(),bT(1338,`, `),Aa(1339,`code`),bT(1340,`html`),cf(),bT(1341,`, `),Aa(1342,`code`),bT(1343,`text`),cf(),bT(1344,`, `),Aa(1345,`code`),bT(1346,`attachments`),cf(),bT(1347,`, `),Aa(1348,`code`),bT(1349,`headers`),cf(),bT(1350,` and `),Aa(1351,`code`),bT(1352,`messageId`),cf(),bT(1353,`. `),Aa(1354,`code`),bT(1355,`envelope`),cf(),bT(1356,` holds the SMTP envelope, with every recipient once, Bcc included, and `),Aa(1357,`code`),bT(1358,`toMime()`),cf(),bT(1359,` returns the message as MIME, without the Bcc header. It's the same object on every attempt.`),cf(),Aa(1360,`li`)(1361,`strong`)(1362,`code`),bT(1363,`signal`),cf(),bT(1364,`.`),cf(),bT(1365,` Aborts when the caller cancels the send, such as the outbox relay when a handler outlives its timeout. Stop the request, and reject with `),Aa(1366,`code`),bT(1367,`signal.reason`),cf(),bT(1368,`; the mailer doesn't retry an abort.`),cf(),Aa(1369,`li`)(1370,`strong`)(1371,`code`),bT(1372,`idempotencyKey`),cf(),bT(1373,`.`),cf(),bT(1374,` The caller's key, the same on every attempt and every redelivery. Send it to a provider that deduplicates requests, as `),Aa(1375,`code`),bT(1376,`ResendTransport`),cf(),bT(1377,` does; the `),Aa(1378,`code`),bT(1379,`Message-ID`),cf(),bT(1380,` is already derived from it.`),cf(),Aa(1381,`li`)(1382,`strong`)(1383,`code`),bT(1384,`attempt`),cf(),bT(1385,`.`),cf(),bT(1386,` 1 for the first attempt, 2 for the first retry.`),cf()(),Aa(1387,`p`),bT(1388,`It resolves to `),Aa(1389,`code`),bT(1390,`accepted`),cf(),bT(1391,`, the envelope recipients the provider took (all of them when left out), `),Aa(1392,`code`),bT(1393,`providerMessageId`),cf(),bT(1394,` and `),Aa(1395,`code`),bT(1396,`response`),cf(),bT(1397,`, which the mailer's `),Aa(1398,`code`),bT(1399,`send()`),cf(),bT(1400,` resolves to in turn.`),cf(),Aa(1401,`p`),bT(1402,`What it throws decides whether the mailer retries. Throw a `),Aa(1403,`code`),bT(1404,`MailError`),cf(),bT(1405,` whose `),Aa(1406,`code`),bT(1407,`permanent`),cf(),bT(1408,` says whether sending the same message again can succeed: `),Aa(1409,`code`),bT(1410,`MailProviderError`),cf(),bT(1411,` for an HTTP API's refusal, which is permanent for a 4xx status other than 408, 409 and 429 unless you pass `),Aa(1412,`code`),bT(1413,`permanent`),cf(),bT(1414,` yourself, `),Aa(1415,`code`),bT(1416,`MailConnectionError`),cf(),bT(1417,` and `),Aa(1418,`code`),bT(1419,`MailTimeoutError`),cf(),bT(1420,` for a failed or slow request. Any other error counts as transient, unless it has `),Aa(1421,`code`),bT(1422,`permanent: true`),cf(),bT(1423,` or a 4xx `),Aa(1424,`code`),bT(1425,`status`),cf(),bT(1426,`, so a network error from `),Aa(1427,`code`),bT(1428,`fetch`),cf(),bT(1429,` is retried. An error with `),Aa(1430,`code`),bT(1431,`retryAfterMs`),cf(),bT(1432,` makes the mailer wait at least that long before the next attempt, up to `),Aa(1433,`code`),bT(1434,`maxDelay`),cf(),bT(1435,`.`),cf(),Aa(1436,`p`),bT(1437,`A transport that holds connections or a client implements `),Aa(1438,`code`),bT(1439,`close()`),cf(),bT(1440,`, which runs on application shutdown, after the sends in flight have finished.`),cf(),Aa(1441,`h4`,67)(1442,`span`),bT(1443,`Try it`),cf()(),Aa(1444,`p`),bT(1445,`Apply the migrations, which also add two customers and four products:`),cf(),Aa(1446,`pre`)(1447,`code`,38),bT(1448,`
$ export DATABASE_URL=postgres://localhost:5432/store
$ npx drizzle-kit migrate
`),cf()(),Aa(1449,`p`),bT(1450,`Start the application with the defaults: the file transport, and the relay running. Place an order for Ada:`),cf(),Aa(1451,`pre`)(1452,`code`,38),bT(1453,`
$ curl -X POST localhost:3000/orders \\
    -H 'Content-Type: application/json' \\
    -d '{"customerId":"ada","items":[{"productId":"salmon-kibble-2kg","quantity":2},{"productId":"feather-wand","quantity":1}]}'
{"id":"fd2bfc1c-db5c-455c-8876-bf7331a1029c","number":1001,"customerId":"ada","items":[{"productId":"salmon-kibble-2kg","name":"Salmon kibble, 2 kg","quantity":2,"price":2499},{"productId":"feather-wand","name":"Feather wand toy","quantity":1,"price":799}],"total":5797,"placedAt":"2026-09-25T10:59:00.173Z"}
`),cf()(),Aa(1454,`p`),bT(1455,`The response comes back before any mail is sent. A moment later, the relay's handler renders the mail and the file transport writes it:`),cf(),Aa(1456,`pre`)(1457,`code`,38),bT(1458,`
[Nest] 37252  - 09/25/2026, 12:59:00 PM     LOG [FileMailTransport] "Your order #1001" to ada@example.com written to var/mail/2026-09-25T10-59-00-199Z--LtIZd5B_AiZek3-x8nOt88YfUYjgkZi-42ff80.eml
`),cf()(),Aa(1459,`p`),bT(1460,`The file is the message exactly as SMTP would transmit it. Its headers and text part:`),cf(),Aa(1461,`pre`)(1462,`code`,38),bT(1463,`
$ head -33 var/mail/*.eml
From: Orders <orders@example.com>
To: Ada Lovelace <ada@example.com>
Subject: Your order #1001
Date: Fri, 25 Sep 2026 10:59:00 +0000
Message-ID: <-LtIZd5B_AiZek3-x8nOt88YfUYjgkZi@example.com>
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="=_bTCd1MQ5LoxTNFNN0nLRwu8d"

--=_bTCd1MQ5LoxTNFNN0nLRwu8d
Content-Type: multipart/alternative; boundary="=_9HVDyVBGuLsAaijTpu4Y2_XU"

--=_9HVDyVBGuLsAaijTpu4Y2_XU
Content-Type: text/plain; charset=utf-8
Content-Transfer-Encoding: quoted-printable

Hi Ada Lovelace,

thank you for your order! We are packing it now.

Product Qty Price
Salmon kibble, 2 kg 2 $49.98
Feather wand toy 1 $7.99

Total: $57.97

View your order (https://shop.example.com/orders/fd2bfc1c-db5c-455c-8876-bf=
7331a1029c)

Your invoice is attached.

The customer care team
--=_9HVDyVBGuLsAaijTpu4Y2_XU
Content-Type: multipart/related; boundary="=_u7PgKDXrb-x3mIz35ZArIBAa"
`),cf()(),Aa(1464,`p`),bT(1465,`A few things to notice:`),cf(),Aa(1466,`ul`)(1467,`li`),bT(1468,`The `),Aa(1469,`code`),bT(1470,`Message-ID`),cf(),bT(1471,` is derived from the outbox message's id, not random. A redelivery would carry the same one.`),cf(),Aa(1472,`li`),bT(1473,`The text part was derived from the HTML, with the link written out.`),cf(),Aa(1474,`li`),bT(1475,`The body is quoted-printable, which keeps every line short enough for any mail server: the `),Aa(1476,`code`),bT(1477,`=`),cf(),bT(1478,` at the end of the link's first line joins it with the next.`),cf()(),Aa(1479,`p`),bT(1480,`The HTML, the logo and the invoice follow:`),cf(),Aa(1481,`pre`)(1482,`code`,38),bT(1483,`
$ grep -E '^Content-(Type|Disposition|ID):' var/mail/*.eml | tail -5
Content-Type: image/png; name="logo.png"
Content-Disposition: inline; filename="logo.png"
Content-ID: <logo@example.com>
Content-Type: application/pdf; name="invoice-1001.pdf"
Content-Disposition: attachment; filename="invoice-1001.pdf"
`),cf()(),Aa(1484,`p`),bT(1485,`Open the file in a mail client to see the rendered mail. To work on the template, open the preview in a browser instead. The response is the mail's HTML, the template in the layout, with the logo inlined as a `),Aa(1486,`code`),bT(1487,`data:`),cf(),bT(1488,` URL (shortened here):`),cf(),Aa(1489,`pre`)(1490,`code`,38),bT(1491,`
$ curl localhost:3000/dev/mail/order-confirmation
`),cf()(),Aa(1492,`pre`)(1493,`code`,50),bT(1494,`
<!DOCTYPE html>
<html>
<body>
<p><img src="data:image/png;base64,\u2026" alt="Logo" width="120" height="32"></p>
<p>Hi Ada Lovelace,</p>
<p>thank you for your order! We are packing it now.</p>
<table>
  <tr><th>Product</th><th>Qty</th><th>Price</th></tr>
  <tr>
    <td>Salmon kibble, 2 kg</td>
    <td>2</td>
    <td>$49.98</td>
  </tr>
  <tr>
    <td>Feather wand toy</td>
    <td>1</td>
    <td>$7.99</td>
  </tr>
</table>
<p><strong>Total: $57.97</strong></p>
<p><a href="https://shop.example.com/orders/00000000-0000-4000-8000-000000000000">View your order</a></p>
<p>Your invoice is attached.</p>

<p>The customer care team</p>
</body>
</html>
`),cf()(),Aa(1495,`p`),bT(1496,`Next, order a product that doesn't exist:`),cf(),Aa(1497,`pre`)(1498,`code`,38),bT(1499,`
$ curl -X POST localhost:3000/orders \\
    -H 'Content-Type: application/json' \\
    -d '{"customerId":"ada","items":[{"productId":"salmon-kibble-2kg","quantity":1},{"productId":"catnip-mouse","quantity":1}]}'
{"message":"Unknown product \\"catnip-mouse\\"","error":"Bad Request","statusCode":400}
`),cf()(),Aa(1500,`p`),bT(1501,`The transaction rolls back, the `),Aa(1502,`code`),bT(1503,`order.placed`),cf(),bT(1504,` message with it, and no mail is written.`),cf(),Aa(1505,`p`),bT(1506,`Finally, see `),Aa(1507,`a`,68),bT(1508,`the customer's language`),cf(),bT(1509,` at work. Place an order for Zofia, who chose Polish at sign-up:`),cf(),Aa(1510,`pre`)(1511,`code`,38),bT(1512,`
$ curl -X POST localhost:3000/orders \\
    -H 'Content-Type: application/json' \\
    -d '{"customerId":"zofia","items":[{"productId":"feather-wand","quantity":1}]}'
{"id":"7fa5ce1f-9ef3-49b0-8de9-a2d98056c299","number":1002,"customerId":"zofia","items":[{"productId":"feather-wand","name":"Feather wand toy","quantity":1,"price":799}],"total":799,"placedAt":"2026-09-25T10:59:00.424Z"}
`),cf()(),Aa(1513,`pre`)(1514,`code`,38),bT(1515,`
[Nest] 37252  - 09/25/2026, 12:59:00 PM     LOG [FileMailTransport] "Twoje zam\xF3wienie #1002" to zofia@example.com written to var/mail/2026-09-25T10-59-00-453Z-GnMdyKUxVa0FRBJ6wZ2k5snIWsdQmwC2-697a51.eml
`),cf()(),Aa(1516,`p`),bT(1517,`The body comes from `),Aa(1518,`code`),bT(1519,`order-confirmation.pl.html`),cf(),bT(1520,`. The Polish subject and Zofia's name reach the file as encoded-words, and her invoice is `),Aa(1521,`code`),bT(1522,`faktura-1002.pdf`),cf(),bT(1523,`:`),cf(),Aa(1524,`pre`)(1525,`code`,38),bT(1526,`
$ head -3 var/mail/2026-09-25T10-59-00-453Z-GnMdyKUxVa0FRBJ6wZ2k5snIWsdQmwC2-697a51.eml
From: Orders <orders@example.com>
To: =?UTF-8?Q?Zofia_W=C3=B3jcik?= <zofia@example.com>
Subject: =?UTF-8?Q?Twoje_zam=C3=B3wienie_=231002?=
`),cf()(),Aa(1527,`h4`,69)(1528,`span`),bT(1529,`Testing`),cf()(),Aa(1530,`p`),bT(1531,`Replace the transport with `),Aa(1532,`code`),bT(1533,`InMemoryMailTransport`),cf(),bT(1534,`. It keeps every mail it receives, and has helpers that find one and read it:`),cf(),Aa(1535,`app-copy-button`,41)(1536,`span`,42),bT(1537),LT(1538,`extension`),Wa(1539,`app-tabs`,null,33),cf(),Aa(1541,`pre`)(1542,`code`,43),bT(1543,`
import { PGlite } from '@electric-sql/pglite';
import { getDrizzleToken } from '@nestjs/drizzle';
import { InMemoryMailTransport, MailSmtpError, MailTransport } from '@nestjs/mail';
import { OutboxDeadLetters, OutboxRelay } from '@nestjs/outbox';
import { Test, type TestingModule } from '@nestjs/testing';
import { drizzle } from 'drizzle-orm/pglite';
import { migrate } from 'drizzle-orm/pglite/migrator';
import { fileURLToPath } from 'node:url';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { AppModule } from '../src/app.module.js';
import { OrderConfirmationMail } from '../src/notifications/order-confirmation.mail.js';
import { OrdersService } from '../src/orders/orders.service.js';

describe('Order confirmation mail', () => {
  const client = new PGlite(); // PostgreSQL in-process
  const mailbox = new InMemoryMailTransport();
  let moduleRef: TestingModule;
  let orders: OrdersService;
  let relay: OutboxRelay;

  beforeAll(async () => {
    const db = drizzle({ client });
    // Your migrations: the tables, and the seeded customers and products. The outbox's store
    // creates its own schema in init().
    await migrate(db, { migrationsFolder: fileURLToPath(new URL('../drizzle', import.meta.url)) });
    process.env.OUTBOX_RELAY = 'off'; // no poll loop: the test drives the relay
    moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(getDrizzleToken())
      .useValue(db) // the outbox's store runs on it too
      .overrideProvider(MailTransport)
      .useValue(mailbox)
      .compile();
    await moduleRef.init();
    orders = moduleRef.get(OrdersService);
    relay = moduleRef.get(OutboxRelay);
  });

  afterAll(async () => {
    await moduleRef.close();
    await client.close();
  });

  beforeEach(() => mailbox.clear());

  it('confirms the order with the invoice and a link to it', async () => {
    const order = await orders.placeOrder({ customerId: 'ada', items: [{ productId: 'salmon-kibble-2kg', quantity: 1 }] });
    mailbox.assertNotSent(); // nothing until the relay publishes the committed order

    await relay.runOnce();

    const mail = mailbox.assertSent({ to: 'ada@example.com', mail: OrderConfirmationMail });
    expect(mail.subject).toBe(\`Your order #\${order.number}\`);
    expect(mail.attachment(\`invoice-\${order.number}.pdf\`).contentType).toBe('application/pdf');
    expect(mail.link('/orders/').pathname).toBe(\`/orders/\${order.id}\`);
  });

  it('dead-letters a confirmation the mail server refuses', async () => {
    mailbox.failNext(new MailSmtpError('RCPT TO', { code: 550, text: 'User unknown' }));
    await orders.placeOrder({ customerId: 'ada', items: [{ productId: 'salmon-kibble-2kg', quantity: 1 }] });

    await relay.runOnce();

    mailbox.assertNotSent();
    const [deadLetter] = await moduleRef.get(OutboxDeadLetters).list();
    expect(deadLetter).toMatchObject({ topic: 'order.placed', reason: 'rejected' });
  });
});
`),cf()()(),Aa(1544,`ul`)(1545,`li`)(1546,`strong`),bT(1547,`Everything but the network is real.`),cf(),bT(1548,` The mail class renders its templates, with the catalogs and the invoice provider, the outbox and its inbox run, and the message is fully built, headers and attachments included. Only delivery is replaced.`),cf(),Aa(1549,`li`)(1550,`strong`),bT(1551,`The database is PostgreSQL, in-process.`),cf(),bT(1552,` PGlite (`),Aa(1553,`code`),bT(1554,`@electric-sql/pglite`),cf(),bT(1555,`, a dev dependency) runs your real migrations, and the test overrides the database `),Aa(1556,`code`),bT(1557,`DrizzleModule`),cf(),bT(1558,` registers (its token comes from `),Aa(1559,`code`),bT(1560,`getDrizzleToken()`),cf(),bT(1561,`) with it, so the repositories and the outbox store use it. There's no server to start, and each test file gets a fresh database.`),cf(),Aa(1562,`li`)(1563,`strong`)(1564,`code`),bT(1565,`assertSent()`),cf()(),bT(1566,` returns the most recent mail that matches, by recipient (`),Aa(1567,`code`),bT(1568,`to`),cf(),bT(1569,` matches to, cc and bcc), `),Aa(1570,`code`),bT(1571,`subject`),cf(),bT(1572,`, mail class or `),Aa(1573,`code`),bT(1574,`template`),cf(),bT(1575,`, or a predicate. When nothing matches, it throws an error that lists what was sent. `),Aa(1576,`code`),bT(1577,`assertNotSent()`),cf(),bT(1578,`, `),Aa(1579,`code`),bT(1580,`filter()`),cf(),bT(1581,`, `),Aa(1582,`code`),bT(1583,`find()`),cf(),bT(1584,` and `),Aa(1585,`code`),bT(1586,`mails`),cf(),bT(1587,` cover the rest. The helpers throw plain errors, so they work with any test runner.`),cf(),Aa(1588,`li`)(1589,`strong`)(1590,`code`),bT(1591,`link()`),cf()(),bT(1592,` returns the first link in the mail that contains a string or matches a regular expression, as a `),Aa(1593,`code`),bT(1594,`URL`),cf(),bT(1595,`. For a password reset or a magic link, that is the whole test: send the mail, then call `),Aa(1596,`code`),bT(1597,`mail.link('/reset-password').searchParams.get('token')`),cf(),bT(1598,` and follow the link. Entities are decoded, so the `),Aa(1599,`code`),bT(1600,`&amp;`),cf(),bT(1601,` that escaping writes in a query string is `),Aa(1602,`code`),bT(1603,`&`),cf(),bT(1604,` again.`),cf(),Aa(1605,`li`)(1606,`strong`)(1607,`code`),bT(1608,`failNext()`),cf()(),bT(1609,` makes the next send throw, here a permanent SMTP error, to test the error path.`),cf(),Aa(1610,`li`)(1611,`strong`)(1612,`code`),bT(1613,`raw`),cf()(),bT(1614,` is the message as MIME, and `),Aa(1615,`code`),bT(1616,`mailer.render()`),cf(),bT(1617,` renders a mail class or a template on its own, for unit tests of a template.`),cf()(),Aa(1618,`h4`,70)(1619,`span`),bT(1620,`Production checklist`),cf()(),Aa(1621,`ul`)(1622,`li`),bT(1623,`Configure SPF, DKIM and DMARC for the sending domain. HTTP providers sign with DKIM once the domain is verified with them; with SMTP, sign with the `),Aa(1624,`code`),bT(1625,`dkim`),cf(),bT(1626,` option or at the relay.`),cf(),Aa(1627,`li`),bT(1628,`Keep STARTTLS required, and certificate verification on. For a relay with a private CA, pass `),Aa(1629,`code`),bT(1630,`tls.ca`),cf(),bT(1631,` instead of turning verification off.`),cf(),Aa(1632,`li`),bT(1633,`Keep credentials in the environment or a secret store. Transports hold them in private fields, and error messages never contain them.`),cf(),Aa(1634,`li`),bT(1635,`Send transactional mail after commit, through the outbox, with `),Aa(1636,`code`),bT(1637,`retry: false`),cf(),bT(1638,` in the handler and the outbox's retry policy sized to how long your provider can be down.`),cf(),Aa(1639,`li`),bT(1640,`Pass `),Aa(1641,`code`),bT(1642,`idempotencyKey`),cf(),bT(1643,` for every mail sent from a handler that can run twice.`),cf(),Aa(1644,`li`),bT(1645,`Turn permanent mail errors into dead letters, and alert on `),Aa(1646,`code`),bT(1647,`dead-lettered`),cf(),bT(1648,` outbox events. A refused address usually means a typo at sign-up, or a mailbox that no longer exists.`),cf(),Aa(1649,`li`),bT(1650,`Watch `),Aa(1651,`code`),bT(1652,`MailEvents`),cf(),bT(1653,`, or the `),Aa(1654,`code`),bT(1655,`nestjs:mail:sent`),cf(),bT(1656,` and `),Aa(1657,`code`),bT(1658,`nestjs:mail:failed`),cf(),bT(1659,` diagnostics channels, for delivery failures and slow sends.`),cf(),Aa(1660,`li`),bT(1661,`Send through `),Aa(1662,`code`),bT(1663,`SmtpTransport`),cf(),bT(1664,` or an HTTP provider's transport in production. `),Aa(1665,`code`),bT(1666,`FileMailTransport`),cf(),bT(1667,` writes to the local disk, which a container loses when it restarts or is replaced, and `),Aa(1668,`code`),bT(1669,`LogMailTransport`),cf(),bT(1670,` only logs: both are for development, and `),Aa(1671,`code`),bT(1672,`InMemoryMailTransport`),cf(),bT(1673,` is for tests. The module warns at startup when one of them runs with `),Aa(1674,`code`),bT(1675,`NODE_ENV=production`),cf(),bT(1676,`.`),cf(),Aa(1677,`li`),bT(1678,`Keep the outbox's messages in the application's database, through `),Aa(1679,`code`),bT(1680,`PostgresOutboxStore`),cf(),bT(1681,` or another registered store, so a queued mail commits with its order and survives a restart. Without a store, the outbox refuses to start with `),Aa(1682,`code`),bT(1683,`NODE_ENV=production`),cf(),bT(1684,`, and so does the store while its migrations aren't applied: apply them on deploy, as `),Aa(1685,`a`,60),bT(1686,`the outbox tutorial`),cf(),bT(1687,` shows.`),cf(),Aa(1688,`li`),bT(1689,`Ship the templates to `),Aa(1690,`code`),bT(1691,`dist`),cf(),bT(1692,` with the CLI's assets, and keep the template cache on in production, which is the default: `),Aa(1693,`code`),bT(1694,`cache: false`),cf(),bT(1695,` rereads the files for every mail.`),cf(),Aa(1696,`li`),bT(1697,`Don't register development-only routes, such as the preview, in production.`),cf(),Aa(1698,`li`),bT(1699,`Use `),Aa(1700,`code`),bT(1701,`app.enableShutdownHooks()`),cf(),bT(1702,`, so a deploy waits for the mails in flight and closes SMTP connections.`),cf()(),Aa(1703,`h4`,71)(1704,`span`),bT(1705,`Reference`),cf()(),Aa(1706,`h5`,72)(1707,`span`),bT(1708,`Module options`),cf()(),Aa(1709,`p`)(1710,`code`),bT(1711,`MailModule.forRoot()`),cf(),bT(1712,` takes these options, and a `),Aa(1713,`code`),bT(1714,`forRootAsync()`),cf(),bT(1715,` factory returns them. With `),Aa(1716,`code`),bT(1717,`useClass`),cf(),bT(1718,` or `),Aa(1719,`code`),bT(1720,`useExisting`),cf(),bT(1721,` in place of `),Aa(1722,`code`),bT(1723,`useFactory`),cf(),bT(1724,`, the class implements `),Aa(1725,`code`),bT(1726,`MailOptionsFactory`),cf(),bT(1727,`, whose `),Aa(1728,`code`),bT(1729,`createMailOptions()`),cf(),bT(1730,` returns them. `),Aa(1731,`code`),bT(1732,`transport`),cf(),bT(1733,`, `),Aa(1734,`code`),bT(1735,`templates`),cf(),bT(1736,`, `),Aa(1737,`code`),bT(1738,`imports`),cf(),bT(1739,` and `),Aa(1740,`code`),bT(1741,`isGlobal`),cf(),bT(1742,` also sit next to `),Aa(1743,`code`),bT(1744,`useFactory`),cf(),bT(1745,`, `),Aa(1746,`code`),bT(1747,`useClass`),cf(),bT(1748,` or `),Aa(1749,`code`),bT(1750,`useExisting`),cf(),bT(1751,` in `),Aa(1752,`code`),bT(1753,`forRootAsync()`),cf(),bT(1754,`. The resolved options are provided under the `),Aa(1755,`code`),bT(1756,`MAIL_MODULE_OPTIONS`),cf(),bT(1757,` token.`),cf(),Aa(1758,`table`)(1759,`thead`)(1760,`tr`)(1761,`th`),bT(1762,`Option`),cf(),Aa(1763,`th`),bT(1764,`Type`),cf(),Aa(1765,`th`),bT(1766,`Default`),cf(),Aa(1767,`th`),bT(1768,`Description`),cf()()(),Aa(1769,`tbody`)(1770,`tr`)(1771,`td`)(1772,`code`),bT(1773,`transport`),cf()(),Aa(1774,`td`)(1775,`code`),bT(1776,`MailTransport`),cf(),bT(1777,` instance or class`),cf(),Aa(1778,`td`),bT(1779,`none (required)`),cf(),Aa(1780,`td`),bT(1781,`How mail leaves the application. A class is instantiated by Nest, so it can inject configuration. See `),Aa(1782,`a`,44),bT(1783,`Send in production`),cf(),bT(1784,`.`),cf()(),Aa(1785,`tr`)(1786,`td`)(1787,`code`),bT(1788,`templates`),cf()(),Aa(1789,`td`)(1790,`code`),bT(1791,`MailTemplateEngine`),cf(),bT(1792,` instance or class`),cf(),Aa(1793,`td`),bT(1794,`none`),cf(),Aa(1795,`td`),bT(1796,`Renders mail that names a `),Aa(1797,`code`),bT(1798,`template`),cf(),bT(1799,`: `),Aa(1800,`code`),bT(1801,`FileTemplateEngine`),cf(),bT(1802,`, or `),Aa(1803,`a`,52),bT(1804,`your own`),cf(),bT(1805,`. A class is instantiated by Nest. Without one, a mail with a template fails with `),Aa(1806,`code`),bT(1807,`MailTemplateError`),cf(),bT(1808,`.`),cf()(),Aa(1809,`tr`)(1810,`td`)(1811,`code`),bT(1812,`from`),cf()(),Aa(1813,`td`),bT(1814,`address`),cf(),Aa(1815,`td`),bT(1816,`none`),cf(),Aa(1817,`td`),bT(1818,`The default sender. A message without a sender fails with `),Aa(1819,`code`),bT(1820,`MailMessageError`),cf(),bT(1821,`.`),cf()(),Aa(1822,`tr`)(1823,`td`)(1824,`code`),bT(1825,`replyTo`),cf()(),Aa(1826,`td`),bT(1827,`address or array`),cf(),Aa(1828,`td`),bT(1829,`none`),cf(),Aa(1830,`td`),bT(1831,`The default Reply-To.`),cf()(),Aa(1832,`tr`)(1833,`td`)(1834,`code`),bT(1835,`headers`),cf()(),Aa(1836,`td`)(1837,`code`),bT(1838,`Record<string, string>`),cf()(),Aa(1839,`td`),bT(1840,`none`),cf(),Aa(1841,`td`),bT(1842,`Added to every message. A message's own headers win.`),cf()(),Aa(1843,`tr`)(1844,`td`)(1845,`code`),bT(1846,`retry`),cf()(),Aa(1847,`td`),bT(1848,`number, `),Aa(1849,`code`),bT(1850,`false`),cf(),bT(1851,` or retry options`),cf(),Aa(1852,`td`),bT(1853,`3 attempts`),cf(),Aa(1854,`td`),bT(1855,`Attempts per send, with backoff from `),Aa(1856,`code`),bT(1857,`1s`),cf(),bT(1858,` doubling to `),Aa(1859,`code`),bT(1860,`30s`),cf(),bT(1861,`, full jitter. `),Aa(1862,`code`),bT(1863,`false`),cf(),bT(1864,` makes one attempt. See `),Aa(1865,`a`,40),bT(1866,`Send after the order commits`),cf(),bT(1867,`.`),cf()(),Aa(1868,`tr`)(1869,`td`)(1870,`code`),bT(1871,`imports`),cf()(),Aa(1872,`td`),bT(1873,`modules`),cf(),Aa(1874,`td`),bT(1875,`none`),cf(),Aa(1876,`td`),bT(1877,`Modules whose exports a transport or template engine class injects.`),cf()(),Aa(1878,`tr`)(1879,`td`)(1880,`code`),bT(1881,`isGlobal`),cf()(),Aa(1882,`td`)(1883,`code`),bT(1884,`boolean`),cf()(),Aa(1885,`td`)(1886,`code`),bT(1887,`true`),cf()(),Aa(1888,`td`),bT(1889,`Registers `),Aa(1890,`code`),bT(1891,`Mailer`),cf(),bT(1892,`, `),Aa(1893,`code`),bT(1894,`MailEvents`),cf(),bT(1895,`, `),Aa(1896,`code`),bT(1897,`MailTransport`),cf(),bT(1898,` and `),Aa(1899,`code`),bT(1900,`MailTemplateEngine`),cf(),bT(1901,` globally.`),cf()()()(),Aa(1902,`p`),bT(1903,`The retry options are `),Aa(1904,`code`),bT(1905,`attempts`),cf(),bT(1906,` (total, including the first), `),Aa(1907,`code`),bT(1908,`backoff`),cf(),bT(1909,` (an object with `),Aa(1910,`code`),bT(1911,`delay`),cf(),bT(1912,`, `),Aa(1913,`code`),bT(1914,`factor`),cf(),bT(1915,`, `),Aa(1916,`code`),bT(1917,`maxDelay`),cf(),bT(1918,` and `),Aa(1919,`code`),bT(1920,`jitter`),cf(),bT(1921,`, or a function of the attempt) and `),Aa(1922,`code`),bT(1923,`retryIf`),cf(),bT(1924,` (can only narrow which transient errors are retried). When an HTTP provider answers with a `),Aa(1925,`code`),bT(1926,`Retry-After`),cf(),bT(1927,` header, typically with a 429 or a 503, the error keeps it as `),Aa(1928,`code`),bT(1929,`retryAfterMs`),cf(),bT(1930,`, and the mailer waits at least that long before the next attempt, up to `),Aa(1931,`code`),bT(1932,`maxDelay`),cf(),bT(1933,` (`),Aa(1934,`code`),bT(1935,`30s`),cf(),bT(1936,` with a backoff function). The `),Aa(1937,`code`),bT(1938,`signal`),cf(),bT(1939,` still ends the wait. SMTP replies have no `),Aa(1940,`code`),bT(1941,`Retry-After`),cf(),bT(1942,`, and an outbox handler with `),Aa(1943,`code`),bT(1944,`retry: false`),cf(),bT(1945,` leaves the wait to the outbox's backoff.`),cf(),Aa(1946,`h5`,73)(1947,`span`),bT(1948,`Template engine`),cf()(),Aa(1949,`p`)(1950,`code`),bT(1951,`FileTemplateEngine`),cf(),bT(1952,` takes:`),cf(),Aa(1953,`table`)(1954,`thead`)(1955,`tr`)(1956,`th`),bT(1957,`Option`),cf(),Aa(1958,`th`),bT(1959,`Type`),cf(),Aa(1960,`th`),bT(1961,`Default`),cf(),Aa(1962,`th`),bT(1963,`Description`),cf()()(),Aa(1964,`tbody`)(1965,`tr`)(1966,`td`)(1967,`code`),bT(1968,`dir`),cf()(),Aa(1969,`td`)(1970,`code`),bT(1971,`string`),cf()(),Aa(1972,`td`),bT(1973,`none (required)`),cf(),Aa(1974,`td`),bT(1975,`The directory of the templates, with partials in its `),Aa(1976,`code`),bT(1977,`partials/`),cf(),bT(1978,` folder. A relative path is resolved against the working directory.`),cf()(),Aa(1979,`tr`)(1980,`td`)(1981,`code`),bT(1982,`layout`),cf()(),Aa(1983,`td`)(1984,`code`),bT(1985,`string`),cf()(),Aa(1986,`td`),bT(1987,`none`),cf(),Aa(1988,`td`),bT(1989,`A template that wraps every mail's HTML, placing it with triple braces around `),Aa(1990,`code`),bT(1991,`body`),cf(),bT(1992,`. A `),Aa(1993,`code`),bT(1994,`.txt`),cf(),bT(1995,` version, if there is one, wraps the text.`),cf()(),Aa(1996,`tr`)(1997,`td`)(1998,`code`),bT(1999,`cache`),cf()(),Aa(2e3,`td`)(2001,`code`),bT(2002,`boolean`),cf()(),Aa(2003,`td`)(2004,`code`),bT(2005,`true`),cf()(),Aa(2006,`td`),bT(2007,`Keeps compiled templates, and which files exist, in memory. `),Aa(2008,`code`),bT(2009,`false`),cf(),bT(2010,` reads the files for every mail, to see edits in development.`),cf()()()(),Aa(2011,`p`)(2012,`code`),bT(2013,`template: 'order-confirmation'`),cf(),bT(2014,` with the locale `),Aa(2015,`code`),bT(2016,`pt-BR`),cf(),bT(2017,` renders the first file that exists of `),Aa(2018,`code`),bT(2019,`order-confirmation.pt-BR.html`),cf(),bT(2020,`, `),Aa(2021,`code`),bT(2022,`order-confirmation.pt.html`),cf(),bT(2023,` and `),Aa(2024,`code`),bT(2025,`order-confirmation.html`),cf(),bT(2026,`, and the first of the same names with `),Aa(2027,`code`),bT(2028,`.txt`),cf(),bT(2029,` as the text part, if any. Template names are letters, digits, `),Aa(2030,`code`),bT(2031,`-`),cf(),bT(2032,` and `),Aa(2033,`code`),bT(2034,`_`),cf(),bT(2035,`, in folders separated by `),Aa(2036,`code`),bT(2037,`/`),cf(),bT(2038,`. Other names, and locales that aren't language tags, fail with `),Aa(2039,`code`),bT(2040,`MailTemplateError`),cf(),bT(2041,`, so neither can reach a file outside `),Aa(2042,`code`),bT(2043,`dir`),cf(),bT(2044,`.`),cf(),Aa(2045,`h5`,74)(2046,`span`),bT(2047,`Template syntax`),cf()(),Aa(2048,`p`),bT(2049,`The syntax is a subset of Handlebars:`),cf(),Aa(2050,`table`)(2051,`tr`)(2052,`th`),bT(2053,`Syntax`),cf(),Aa(2054,`th`),bT(2055,`Renders`),cf()(),Aa(2056,`tr`)(2057,`td`)(2058,`code`),bT(2059),cf()(),Aa(2060,`td`),bT(2061,`The value, HTML-escaped. Paths use dots, and `),Aa(2062,`code`),bT(2063,`items.0`),cf(),bT(2064,` is an array's first item. A missing value renders as nothing. In a `),Aa(2065,`code`),bT(2066,`.txt`),cf(),bT(2067,` template, the value as it is.`),cf()(),Aa(2068,`tr`)(2069,`td`)(2070,`code`),bT(2071),cf()(),Aa(2072,`td`),bT(2073,`The value as it is, for HTML you produced yourself. HTML built with the `),Aa(2074,`code`),bT(2075,`html`),cf(),bT(2076,` tag is inserted as it is between double braces too.`),cf()(),Aa(2077,`tr`)(2078,`td`)(2079,`code`),bT(2080),cf()(),Aa(2081,`td`),bT(2082,`The first part when the value is truthy, else the `),Aa(2083,`code`),bT(2084,`else`),cf(),bT(2085,` part, which is optional. `),Aa(2086,`code`),bT(2087,`false`),cf(),bT(2088,`, `),Aa(2089,`code`),bT(2090,`0`),cf(),bT(2091,`, an empty string, an empty list and a missing value are falsy. `),Aa(2092,`code`),bT(2093),cf(),bT(2094,` chains another condition.`),cf()(),Aa(2095,`tr`)(2096,`td`)(2097,`code`),bT(2098),cf()(),Aa(2099,`td`),bT(2100,`The opposite of `),Aa(2101,`code`),bT(2102,`#if`),cf(),bT(2103,`, with an optional `),Aa(2104,`code`),bT(2105,`else`),cf(),bT(2106,` part.`),cf()(),Aa(2107,`tr`)(2108,`td`)(2109,`code`),bT(2110),cf()(),Aa(2111,`td`),bT(2112,`The first part once for every item of a list, or every value of an object; the `),Aa(2113,`code`),bT(2114,`else`),cf(),bT(2115,` part for an empty or missing list.`),cf()(),Aa(2116,`tr`)(2117,`td`)(2118,`code`),bT(2119,`this, @index, @first, @last, @key`),cf()(),Aa(2120,`td`),bT(2121,`Inside `),Aa(2122,`code`),bT(2123,`#each`),cf(),bT(2124,`: the item, its position from 0, whether it's the first or the last, and an object's key. A name the item doesn't have is looked up in the outer contexts.`),cf()(),Aa(2125,`tr`)(2126,`td`)(2127,`code`),bT(2128,`../number, @root.shop`),cf()(),Aa(2129,`td`),bT(2130,`The context outside the current `),Aa(2131,`code`),bT(2132,`#each`),cf(),bT(2133,`, and the template's context.`),cf()(),Aa(2134,`tr`)(2135,`td`)(2136,`code`),bT(2137),cf()(),Aa(2138,`td`),bT(2139,`The partial `),Aa(2140,`code`),bT(2141,`partials/signature.html`),cf(),bT(2142,` (`),Aa(2143,`code`),bT(2144,`.txt`),cf(),bT(2145,` in a text template), in the mail's locale, with the context where it's included.`),cf()(),Aa(2146,`tr`)(2147,`td`)(2148,`code`),bT(2149),cf()(),Aa(2150,`td`),bT(2151,`Comments, left out of the output. The second form may contain double braces.`),cf()(),Aa(2152,`tr`)(2153,`td`)(2154,`code`),bT(2155),cf()(),Aa(2156,`td`),bT(2157,`Literal double braces.`),cf()()(),Aa(2158,`p`),bT(2159,`There are no helpers and no expressions. Values are read from the context's own properties, never from a prototype, and functions aren't called. Anything else between double braces, a block that is never closed, and a double-braced value inside a tag but outside a quoted attribute value fail with `),Aa(2160,`code`),bT(2161,`MailTemplateError`),cf(),bT(2162,`, which has the `),Aa(2163,`code`),bT(2164,`file`),cf(),bT(2165,`, the `),Aa(2166,`code`),bT(2167,`line`),cf(),bT(2168,` and the `),Aa(2169,`code`),bT(2170,`column`),cf(),bT(2171,`.`),cf(),Aa(2172,`h5`,75)(2173,`span`),bT(2174,`Send options`),cf()(),Aa(2175,`p`)(2176,`code`),bT(2177,`mailer.send(MailClass, options)`),cf(),bT(2178,` and `),Aa(2179,`code`),bT(2180,`mailer.send(message)`),cf(),bT(2181,` take:`),cf(),Aa(2182,`table`)(2183,`thead`)(2184,`tr`)(2185,`th`),bT(2186,`Option`),cf(),Aa(2187,`th`),bT(2188,`Description`),cf()()(),Aa(2189,`tbody`)(2190,`tr`)(2191,`td`)(2192,`code`),bT(2193,`to`),cf(),bT(2194,`, `),Aa(2195,`code`),bT(2196,`cc`),cf(),bT(2197,`, `),Aa(2198,`code`),bT(2199,`bcc`),cf()(),Aa(2200,`td`),bT(2201,`One address or an array. An address is a string holding exactly one address, or an object with `),Aa(2202,`code`),bT(2203,`name`),cf(),bT(2204,` and `),Aa(2205,`code`),bT(2206,`address`),cf(),bT(2207,`. `),Aa(2208,`code`),bT(2209,`bcc`),cf(),bT(2210,` goes only into the SMTP envelope.`),cf()(),Aa(2211,`tr`)(2212,`td`)(2213,`code`),bT(2214,`data`),cf()(),Aa(2215,`td`),bT(2216,`The mail class's data, typed from its `),Aa(2217,`code`),bT(2218,`render()`),cf(),bT(2219,`.`),cf()(),Aa(2220,`tr`)(2221,`td`)(2222,`code`),bT(2223,`locale`),cf()(),Aa(2224,`td`),bT(2225,`Passed to `),Aa(2226,`code`),bT(2227,`render()`),cf(),bT(2228,` in the render context, and to the template engine, which picks the template for it. See `),Aa(2229,`a`,68),bT(2230,`Send it in the customer's language`),cf(),bT(2231,`.`),cf()(),Aa(2232,`tr`)(2233,`td`)(2234,`code`),bT(2235,`from`),cf(),bT(2236,`, `),Aa(2237,`code`),bT(2238,`replyTo`),cf()(),Aa(2239,`td`),bT(2240,`Override the module's defaults.`),cf()(),Aa(2241,`tr`)(2242,`td`)(2243,`code`),bT(2244,`subject`),cf(),bT(2245,`, `),Aa(2246,`code`),bT(2247,`html`),cf(),bT(2248,`, `),Aa(2249,`code`),bT(2250,`text`),cf()(),Aa(2251,`td`),bT(2252,`The content, for a message written inline. `),Aa(2253,`code`),bT(2254,`text`),cf(),bT(2255,` is derived from `),Aa(2256,`code`),bT(2257,`html`),cf(),bT(2258,` when omitted.`),cf()(),Aa(2259,`tr`)(2260,`td`)(2261,`code`),bT(2262,`template`),cf(),bT(2263,`, `),Aa(2264,`code`),bT(2265,`context`),cf()(),Aa(2266,`td`),bT(2267,`The template the body is rendered from, and the values it reads, in place of `),Aa(2268,`code`),bT(2269,`html`),cf(),bT(2270,` and `),Aa(2271,`code`),bT(2272,`text`),cf(),bT(2273,`. A mail class's `),Aa(2274,`code`),bT(2275,`render()`),cf(),bT(2276,` returns them the same way.`),cf()(),Aa(2277,`tr`)(2278,`td`)(2279,`code`),bT(2280,`attachments`),cf()(),Aa(2281,`td`),bT(2282,`Each has `),Aa(2283,`code`),bT(2284,`filename`),cf(),bT(2285,`, `),Aa(2286,`code`),bT(2287,`content`),cf(),bT(2288,` (a `),Aa(2289,`code`),bT(2290,`Buffer`),cf(),bT(2291,`, string or stream) or a local `),Aa(2292,`code`),bT(2293,`path`),cf(),bT(2294,`, and optionally `),Aa(2295,`code`),bT(2296,`contentType`),cf(),bT(2297,` and `),Aa(2298,`code`),bT(2299,`cid`),cf(),bT(2300,`. See `),Aa(2301,`a`,76),bT(2302,`Attach the invoice and preview the mail`),cf(),bT(2303,`.`),cf()(),Aa(2304,`tr`)(2305,`td`)(2306,`code`),bT(2307,`headers`),cf()(),Aa(2308,`td`),bT(2309,`Custom headers, such as `),Aa(2310,`code`),bT(2311,`List-Unsubscribe`),cf(),bT(2312,`.`),cf()(),Aa(2313,`tr`)(2314,`td`)(2315,`code`),bT(2316,`retry`),cf()(),Aa(2317,`td`),bT(2318,`Overrides the module's `),Aa(2319,`code`),bT(2320,`retry`),cf(),bT(2321,` for this send.`),cf()(),Aa(2322,`tr`)(2323,`td`)(2324,`code`),bT(2325,`signal`),cf()(),Aa(2326,`td`),bT(2327,`An `),Aa(2328,`code`),bT(2329,`AbortSignal`),cf(),bT(2330,` that stops the send and any wait between attempts.`),cf()(),Aa(2331,`tr`)(2332,`td`)(2333,`code`),bT(2334,`idempotencyKey`),cf()(),Aa(2335,`td`),bT(2336,`Identifies the mail across redeliveries. The `),Aa(2337,`code`),bT(2338,`Message-ID`),cf(),bT(2339,` is derived from it.`),cf()()()(),Aa(2340,`p`)(2341,`code`),bT(2342,`mailer.render(MailClass, options)`),cf(),bT(2343,` and `),Aa(2344,`code`),bT(2345,`mailer.render(message)`),cf(),bT(2346,` take the same without the delivery options, and resolve to the `),Aa(2347,`code`),bT(2348,`MailMessage`),cf(),bT(2349,`, which records its `),Aa(2350,`code`),bT(2351,`template`),cf(),bT(2352,` and `),Aa(2353,`code`),bT(2354,`locale`),cf(),bT(2355,`. `),Aa(2356,`code`),bT(2357,`send()`),cf(),bT(2358,` resolves to `),Aa(2359,`code`),bT(2360,`messageId`),cf(),bT(2361,`, `),Aa(2362,`code`),bT(2363,`providerMessageId`),cf(),bT(2364,` (when the provider has one), `),Aa(2365,`code`),bT(2366,`accepted`),cf(),bT(2367,` (the accepted envelope recipients), `),Aa(2368,`code`),bT(2369,`response`),cf(),bT(2370,` (the final SMTP reply) and `),Aa(2371,`code`),bT(2372,`attempts`),cf(),bT(2373,`.`),cf(),Aa(2374,`h5`,77)(2375,`span`),bT(2376,`Transports`),cf()(),Aa(2377,`table`)(2378,`thead`)(2379,`tr`)(2380,`th`),bT(2381,`Transport`),cf(),Aa(2382,`th`),bT(2383,`Options`),cf(),Aa(2384,`th`),bT(2385,`Idempotency key`),cf()()(),Aa(2386,`tbody`)(2387,`tr`)(2388,`td`)(2389,`code`),bT(2390,`SmtpTransport`),cf()(),Aa(2391,`td`)(2392,`code`),bT(2393,`url`),cf(),bT(2394,` or `),Aa(2395,`code`),bT(2396,`host`),cf(),bT(2397,`, `),Aa(2398,`code`),bT(2399,`port`),cf(),bT(2400,`, `),Aa(2401,`code`),bT(2402,`secure`),cf(),bT(2403,`, `),Aa(2404,`code`),bT(2405,`startTls`),cf(),bT(2406,` (`),Aa(2407,`code`),bT(2408,`required`),cf(),bT(2409,`, `),Aa(2410,`code`),bT(2411,`opportunistic`),cf(),bT(2412,` or `),Aa(2413,`code`),bT(2414,`never`),cf(),bT(2415,`; `),Aa(2416,`code`),bT(2417,`required`),cf(),bT(2418,` by default, `),Aa(2419,`code`),bT(2420,`opportunistic`),cf(),bT(2421,` for localhost), `),Aa(2422,`code`),bT(2423,`auth`),cf(),bT(2424,` (`),Aa(2425,`code`),bT(2426,`user`),cf(),bT(2427,` with `),Aa(2428,`code`),bT(2429,`pass`),cf(),bT(2430,` or `),Aa(2431,`code`),bT(2432,`accessToken`),cf(),bT(2433,`), `),Aa(2434,`code`),bT(2435,`authMethod`),cf(),bT(2436,` (`),Aa(2437,`code`),bT(2438,`PLAIN`),cf(),bT(2439,`, `),Aa(2440,`code`),bT(2441,`LOGIN`),cf(),bT(2442,` or `),Aa(2443,`code`),bT(2444,`XOAUTH2`),cf(),bT(2445,`), `),Aa(2446,`code`),bT(2447,`name`),cf(),bT(2448,`, `),Aa(2449,`code`),bT(2450,`tls`),cf(),bT(2451,`, `),Aa(2452,`code`),bT(2453,`pool`),cf(),bT(2454,`, `),Aa(2455,`code`),bT(2456,`timeouts`),cf(),bT(2457,`, `),Aa(2458,`code`),bT(2459,`dkim`),cf(),bT(2460,` (`),Aa(2461,`code`),bT(2462,`domainName`),cf(),bT(2463,`, `),Aa(2464,`code`),bT(2465,`keySelector`),cf(),bT(2466,`, `),Aa(2467,`code`),bT(2468,`privateKey`),cf(),bT(2469,`, `),Aa(2470,`code`),bT(2471,`headers`),cf(),bT(2472,`)`),cf(),Aa(2473,`td`),bT(2474,`derived `),Aa(2475,`code`),bT(2476,`Message-ID`),cf(),bT(2477,` only`),cf()(),Aa(2478,`tr`)(2479,`td`)(2480,`code`),bT(2481,`ResendTransport`),cf()(),Aa(2482,`td`)(2483,`code`),bT(2484,`apiKey`),cf(),bT(2485,`, `),Aa(2486,`code`),bT(2487,`baseUrl`),cf(),bT(2488,`, `),Aa(2489,`code`),bT(2490,`timeout`),cf(),bT(2491,`, `),Aa(2492,`code`),bT(2493,`fetch`),cf()(),Aa(2494,`td`)(2495,`code`),bT(2496,`Idempotency-Key`),cf(),bT(2497,`, 24 hours`),cf()(),Aa(2498,`tr`)(2499,`td`)(2500,`code`),bT(2501,`PostmarkTransport`),cf()(),Aa(2502,`td`)(2503,`code`),bT(2504,`serverToken`),cf(),bT(2505,`, `),Aa(2506,`code`),bT(2507,`messageStream`),cf(),bT(2508,` (default `),Aa(2509,`code`),bT(2510,`outbound`),cf(),bT(2511,`), `),Aa(2512,`code`),bT(2513,`baseUrl`),cf(),bT(2514,`, `),Aa(2515,`code`),bT(2516,`timeout`),cf(),bT(2517,`, `),Aa(2518,`code`),bT(2519,`fetch`),cf()(),Aa(2520,`td`),bT(2521,`none`),cf()(),Aa(2522,`tr`)(2523,`td`)(2524,`code`),bT(2525,`SendGridTransport`),cf()(),Aa(2526,`td`)(2527,`code`),bT(2528,`apiKey`),cf(),bT(2529,`, `),Aa(2530,`code`),bT(2531,`baseUrl`),cf(),bT(2532,`, `),Aa(2533,`code`),bT(2534,`timeout`),cf(),bT(2535,`, `),Aa(2536,`code`),bT(2537,`fetch`),cf()(),Aa(2538,`td`),bT(2539,`none`),cf()(),Aa(2540,`tr`)(2541,`td`)(2542,`code`),bT(2543,`SesTransport`),cf()(),Aa(2544,`td`)(2545,`code`),bT(2546,`region`),cf(),bT(2547,`, `),Aa(2548,`code`),bT(2549,`credentials`),cf(),bT(2550,`, `),Aa(2551,`code`),bT(2552,`configurationSetName`),cf(),bT(2553,`, `),Aa(2554,`code`),bT(2555,`endpoint`),cf(),bT(2556,`, `),Aa(2557,`code`),bT(2558,`timeout`),cf(),bT(2559,`, `),Aa(2560,`code`),bT(2561,`fetch`),cf()(),Aa(2562,`td`),bT(2563,`none`),cf()(),Aa(2564,`tr`)(2565,`td`)(2566,`code`),bT(2567,`FileMailTransport`),cf()(),Aa(2568,`td`)(2569,`code`),bT(2570,`directory`),cf(),bT(2571,`, `),Aa(2572,`code`),bT(2573,`log`),cf()(),Aa(2574,`td`),bT(2575,`development only`),cf()(),Aa(2576,`tr`)(2577,`td`)(2578,`code`),bT(2579,`LogMailTransport`),cf()(),Aa(2580,`td`)(2581,`code`),bT(2582,`body`),cf(),bT(2583,`, `),Aa(2584,`code`),bT(2585,`logger`),cf()(),Aa(2586,`td`),bT(2587,`development only`),cf()(),Aa(2588,`tr`)(2589,`td`)(2590,`code`),bT(2591,`InMemoryMailTransport`),cf()(),Aa(2592,`td`),bT(2593,`none`),cf(),Aa(2594,`td`),bT(2595,`tests only, see `),Aa(2596,`a`,78),bT(2597,`Testing`),cf()()()()(),Aa(2598,`p`)(2599,`code`),bT(2600,`InMemoryMailTransport.mails`),cf(),bT(2601,` lists every mail received, oldest first, as a `),Aa(2602,`code`),bT(2603,`SentMail`),cf(),bT(2604,`, which `),Aa(2605,`code`),bT(2606,`filter()`),cf(),bT(2607,`, `),Aa(2608,`code`),bT(2609,`find()`),cf(),bT(2610,` and `),Aa(2611,`code`),bT(2612,`assertSent()`),cf(),bT(2613,` return too. A `),Aa(2614,`code`),bT(2615,`SentMail`),cf(),bT(2616,` has the message's `),Aa(2617,`code`),bT(2618,`messageId`),cf(),bT(2619,`, `),Aa(2620,`code`),bT(2621,`from`),cf(),bT(2622,`, `),Aa(2623,`code`),bT(2624,`to`),cf(),bT(2625,`, `),Aa(2626,`code`),bT(2627,`cc`),cf(),bT(2628,`, `),Aa(2629,`code`),bT(2630,`bcc`),cf(),bT(2631,`, `),Aa(2632,`code`),bT(2633,`subject`),cf(),bT(2634,`, `),Aa(2635,`code`),bT(2636,`html`),cf(),bT(2637,`, `),Aa(2638,`code`),bT(2639,`text`),cf(),bT(2640,`, `),Aa(2641,`code`),bT(2642,`attachments`),cf(),bT(2643,`, `),Aa(2644,`code`),bT(2645,`headers`),cf(),bT(2646,`, `),Aa(2647,`code`),bT(2648,`mail`),cf(),bT(2649,` (the mail class), `),Aa(2650,`code`),bT(2651,`template`),cf(),bT(2652,` and `),Aa(2653,`code`),bT(2654,`locale`),cf(),bT(2655,`, plus `),Aa(2656,`code`),bT(2657,`sentAt`),cf(),bT(2658,` (when the transport received it), `),Aa(2659,`code`),bT(2660,`raw`),cf(),bT(2661,` (the MIME source), `),Aa(2662,`code`),bT(2663,`links`),cf(),bT(2664,` (every link, from the HTML, then the ones only the text part has), `),Aa(2665,`code`),bT(2666,`link()`),cf(),bT(2667,`, `),Aa(2668,`code`),bT(2669,`attachment()`),cf(),bT(2670,` and `),Aa(2671,`code`),bT(2672,`message`),cf(),bT(2673,`, the `),Aa(2674,`code`),bT(2675,`MailMessage`),cf(),bT(2676,` itself. `),Aa(2677,`code`),bT(2678,`clear()`),cf(),bT(2679,` forgets them all.`),cf(),Aa(2680,`p`),bT(2681,`With `),Aa(2682,`code`),bT(2683,`pool: true`),cf(),bT(2684,`, `),Aa(2685,`code`),bT(2686,`SmtpTransport`),cf(),bT(2687,` keeps up to 5 connections, sends up to 100 messages per connection, and closes a connection after 30 seconds idle; an object with `),Aa(2688,`code`),bT(2689,`maxConnections`),cf(),bT(2690,`, `),Aa(2691,`code`),bT(2692,`maxMessages`),cf(),bT(2693,` and `),Aa(2694,`code`),bT(2695,`idleTimeout`),cf(),bT(2696,` as `),Aa(2697,`code`),bT(2698,`pool`),cf(),bT(2699,` changes those limits. Its default timeouts are `),Aa(2700,`code`),bT(2701,`30s`),cf(),bT(2702,` to connect, `),Aa(2703,`code`),bT(2704,`30s`),cf(),bT(2705,` for the greeting, `),Aa(2706,`code`),bT(2707,`1m`),cf(),bT(2708,` per command and `),Aa(2709,`code`),bT(2710,`5m`),cf(),bT(2711,` for the data. HTTP providers time out after `),Aa(2712,`code`),bT(2713,`30s`),cf(),bT(2714,` per request.`),cf(),Aa(2715,`h5`,79)(2716,`span`),bT(2717,`Events`),cf()(),Aa(2718,`p`)(2719,`code`),bT(2720,`MailEvents.events$`),cf(),bT(2721,` emits one event per send, after its retries. Each event is also published on a `),Aa(2722,`code`),bT(2723,`node:diagnostics_channel`),cf(),bT(2724,` channel.`),cf(),Aa(2725,`table`)(2726,`thead`)(2727,`tr`)(2728,`th`),bT(2729,`Event type`),cf(),Aa(2730,`th`),bT(2731,`Channel`),cf(),Aa(2732,`th`),bT(2733,`When`),cf(),Aa(2734,`th`),bT(2735,`Payload`),cf()()(),Aa(2736,`tbody`)(2737,`tr`)(2738,`td`)(2739,`code`),bT(2740,`sent`),cf()(),Aa(2741,`td`)(2742,`code`),bT(2743,`nestjs:mail:sent`),cf()(),Aa(2744,`td`),bT(2745,`The transport accepted the message.`),cf(),Aa(2746,`td`)(2747,`code`),bT(2748,`messageId`),cf(),bT(2749,`, `),Aa(2750,`code`),bT(2751,`mail`),cf(),bT(2752,`, `),Aa(2753,`code`),bT(2754,`recipients`),cf(),bT(2755,`, `),Aa(2756,`code`),bT(2757,`subject`),cf(),bT(2758,`, `),Aa(2759,`code`),bT(2760,`transport`),cf(),bT(2761,`, `),Aa(2762,`code`),bT(2763,`attempts`),cf(),bT(2764,`, `),Aa(2765,`code`),bT(2766,`durationMs`),cf(),bT(2767,`, `),Aa(2768,`code`),bT(2769,`providerMessageId`),cf()()(),Aa(2770,`tr`)(2771,`td`)(2772,`code`),bT(2773,`failed`),cf()(),Aa(2774,`td`)(2775,`code`),bT(2776,`nestjs:mail:failed`),cf()(),Aa(2777,`td`),bT(2778,`The send failed after its retries, or its `),Aa(2779,`code`),bT(2780,`signal`),cf(),bT(2781,` aborted before the first attempt (`),Aa(2782,`code`),bT(2783,`attempts`),cf(),bT(2784,` is 0).`),cf(),Aa(2785,`td`),bT(2786,`The same fields without `),Aa(2787,`code`),bT(2788,`providerMessageId`),cf(),bT(2789,`, plus `),Aa(2790,`code`),bT(2791,`error`),cf(),bT(2792,` and `),Aa(2793,`code`),bT(2794,`permanent`),cf()()()()(),Aa(2795,`p`),bT(2796,`A message that fails validation throws before any event.`),cf(),Aa(2797,`h5`,80)(2798,`span`),bT(2799,`Errors`),cf()(),Aa(2800,`p`),bT(2801,`Every error extends `),Aa(2802,`code`),bT(2803,`MailError`),cf(),bT(2804,`, which has `),Aa(2805,`code`),bT(2806,`permanent`),cf(),bT(2807,` (whether sending the same message again can't succeed) and `),Aa(2808,`code`),bT(2809,`code`),cf(),bT(2810,` (the SMTP reply code or the provider's HTTP status). The mailer retries only errors that aren't permanent. See `),Aa(2811,`a`,40),bT(2812,`Send after the order commits`),cf(),bT(2813,`.`),cf(),Aa(2814,`table`)(2815,`thead`)(2816,`tr`)(2817,`th`),bT(2818,`Error`),cf(),Aa(2819,`th`),bT(2820,`When`),cf(),Aa(2821,`th`),bT(2822,`Permanent`),cf()()(),Aa(2823,`tbody`)(2824,`tr`)(2825,`td`)(2826,`code`),bT(2827,`MailMessageError`),cf()(),Aa(2828,`td`),bT(2829,`The message is invalid, before anything is sent. `),Aa(2830,`code`),bT(2831,`field`),cf(),bT(2832,` names the field, `),Aa(2833,`code`),bT(2834,`status`),cf(),bT(2835,` is 400.`),cf(),Aa(2836,`td`),bT(2837,`Yes`),cf()(),Aa(2838,`tr`)(2839,`td`)(2840,`code`),bT(2841,`MailConnectionError`),cf()(),Aa(2842,`td`),bT(2843,`DNS, a refused or reset connection, TLS or a certificate. `),Aa(2844,`code`),bT(2845,`cause`),cf(),bT(2846,` holds the socket error.`),cf(),Aa(2847,`td`),bT(2848,`No, except configuration problems such as a server without STARTTLS when it's required`),cf()(),Aa(2849,`tr`)(2850,`td`)(2851,`code`),bT(2852,`MailTimeoutError`),cf()(),Aa(2853,`td`),bT(2854,`A phase outlived its timeout. Has `),Aa(2855,`code`),bT(2856,`phase`),cf(),bT(2857,` and `),Aa(2858,`code`),bT(2859,`timeoutMs`),cf(),bT(2860,`.`),cf(),Aa(2861,`td`),bT(2862,`No`),cf()(),Aa(2863,`tr`)(2864,`td`)(2865,`code`),bT(2866,`MailSmtpError`),cf()(),Aa(2867,`td`),bT(2868,`An SMTP error reply. Has `),Aa(2869,`code`),bT(2870,`code`),cf(),bT(2871,`, `),Aa(2872,`code`),bT(2873,`enhancedCode`),cf(),bT(2874,`, `),Aa(2875,`code`),bT(2876,`command`),cf(),bT(2877,` and `),Aa(2878,`code`),bT(2879,`response`),cf(),bT(2880,`.`),cf(),Aa(2881,`td`),bT(2882,`For 5xx replies`),cf()(),Aa(2883,`tr`)(2884,`td`)(2885,`code`),bT(2886,`MailRecipientsRejectedError`),cf()(),Aa(2887,`td`),bT(2888,`The server refused one or more recipients, and nothing was sent. `),Aa(2889,`code`),bT(2890,`rejected`),cf(),bT(2891,` lists them. Extends `),Aa(2892,`code`),bT(2893,`MailSmtpError`),cf(),bT(2894,`.`),cf(),Aa(2895,`td`),bT(2896,`When any refusal is 5xx`),cf()(),Aa(2897,`tr`)(2898,`td`)(2899,`code`),bT(2900,`MailTemplateError`),cf()(),Aa(2901,`td`),bT(2902,`A template is missing or doesn't compile, or a mail names a template without a template engine. Has `),Aa(2903,`code`),bT(2904,`template`),cf(),bT(2905,`, and `),Aa(2906,`code`),bT(2907,`file`),cf(),bT(2908,`, `),Aa(2909,`code`),bT(2910,`line`),cf(),bT(2911,` and `),Aa(2912,`code`),bT(2913,`column`),cf(),bT(2914,` for a problem in a file.`),cf(),Aa(2915,`td`),bT(2916,`Yes`),cf()(),Aa(2917,`tr`)(2918,`td`)(2919,`code`),bT(2920,`MailProviderError`),cf()(),Aa(2921,`td`),bT(2922,`An HTTP provider refused the request. Has `),Aa(2923,`code`),bT(2924,`code`),cf(),bT(2925,` (the HTTP status), `),Aa(2926,`code`),bT(2927,`provider`),cf(),bT(2928,`, `),Aa(2929,`code`),bT(2930,`providerCode`),cf(),bT(2931,`, and `),Aa(2932,`code`),bT(2933,`retryAfterMs`),cf(),bT(2934,` when the response had a valid `),Aa(2935,`code`),bT(2936,`Retry-After`),cf(),bT(2937,`.`),cf(),Aa(2938,`td`),bT(2939,`For 4xx except 408, 409 and 429`),cf()()()()(),Aa(2940,`a`,81),Wa(2941,`i`,82),Aa(2942,`span`),bT(2943,`Edit on GitHub`),cf()()()),c&2){let y=tT(95),k=tT(234),T=tT(251),j=tT(260),A=tT(277),I=tT(355),C=tT(375),R=tT(422),L=tT(452),q=tT(471),B=tT(482),M=tT(516),P=tT(544),F=tT(607),D=tT(623),N=tT(634),U=tT(651),z=tT(741),J=tT(760),G=tT(796),K=tT(816),Y=tT(1027),Z=tT(1059),X=tT(1076),ee=tT(1085),te=tT(1102),ne=tT(1111),ie=tT(1145),ae=tT(1183),oe=tT(1202),re=tT(1233),le=tT(1299),se=tT(1540);zC(92),hf(` `,jT(93,185,`app.module`,y.isJsActive),`
`),zC(139),hf(` `,jT(232,188,`mail/templates/order-confirmation.html`,k.isJsActive),`
`),zC(6),tv([`
<p>Hi `,`{`,``,`{`,` customer.name `,`}`,``,`}`,`,</p>
<p>thank you for your order! We are packing it now.</p>
<table>
  <tr><th>Product</th><th>Qty</th><th>Price</th></tr>
  `,`{`,``,`{`,`#each items`,`}`,``,`}`,`
  <tr>
    <td>`,`{`,``,`{`,` name `,`}`,``,`}`,`</td>
    <td>`,`{`,``,`{`,` quantity `,`}`,``,`}`,`</td>
    <td>`,`{`,``,`{`,` price `,`}`,``,`}`,`</td>
  </tr>
  `,`{`,``,`{`,`/each`,`}`,``,`}`,`
</table>
<p><strong>Total: `,`{`,``,`{`,` total `,`}`,``,`}`,`</strong></p>
<p><a href="`,`{`,``,`{`,` orderUrl `,`}`,``,`}`,`">View your order</a></p>
`]),zC(11),hf(` `,jT(249,191,`mail/templates/layout.html`,T.isJsActive),`
`),zC(6),tv([`
<!DOCTYPE html>
<html>
<body>
`,`{`,``,`{`,``,`{`,` body `,`}`,``,`}`,``,`}`,`
`,`{`,``,`{`,`> signature`,`}`,``,`}`,`
</body>
</html>
`]),zC(3),hf(` `,jT(258,194,`mail/templates/partials/signature.html`,j.isJsActive),`
`),zC(17),hf(` `,jT(275,197,`notifications/order-confirmation.mail`,A.isJsActive),`
`),zC(65),ev(`
order-confirmation.html:5:3: `,`{`,``,`{`,`#each items`,`}`,``,`}`,` is never closed (expected `,`{`,``,`{`,`/each`,`}`,``,`}`,`)
`),zC(13),hf(` `,jT(353,200,`notifications/notifications.module`,I.isJsActive),`
`),zC(20),hf(` `,jT(373,203,`orders/orders.service`,C.isJsActive),`
`),zC(47),hf(` `,jT(420,206,`notifications/order-confirmation.mail`,R.isJsActive),`
`),zC(30),hf(` `,jT(450,209,`notifications/invoice-pdf`,L.isJsActive),`
`),zC(19),hf(` `,jT(469,212,`mail/templates/layout.html`,q.isJsActive),`
`),zC(6),tv([`
<!DOCTYPE html>
<html>
<body>
<p><img src="cid:logo@example.com" alt="Logo" width="120" height="32"></p>
`,`{`,``,`{`,``,`{`,` body `,`}`,``,`}`,``,`}`,`
`,`{`,``,`{`,`> signature`,`}`,``,`}`,`
</body>
</html>
`]),zC(5),hf(` `,jT(480,215,`notifications/order-confirmation.mail`,B.isJsActive),`
`),zC(34),hf(` `,jT(514,218,`notifications/mail-preview.controller`,M.isJsActive),`
`),zC(28),hf(` `,jT(542,221,`notifications/notifications.module`,P.isJsActive),`
`),zC(63),hf(` `,jT(605,224,`app.module`,F.isJsActive),`
`),zC(16),hf(` `,jT(621,227,`orders/orders.service`,D.isJsActive),`
`),zC(11),hf(` `,jT(632,230,`notifications/order-mails.handler`,N.isJsActive),`
`),zC(17),hf(` `,jT(649,233,`notifications/notifications.module`,U.isJsActive),`
`),zC(90),hf(` `,jT(739,236,`typeorm/app.module`,z.isJsActive),`
`),zC(19),hf(` `,jT(758,239,`typeorm/orders.service`,J.isJsActive),`
`),zC(36),hf(` `,jT(794,242,`mail-transport`,G.isJsActive),`
`),zC(20),hf(` `,jT(814,245,`app.module`,K.isJsActive),`
`),zC(211),hf(` `,jT(1025,248,`mail/templates/order-confirmation.pl.html`,Y.isJsActive),`
`),zC(6),tv([`
<p>Cze\u015B\u0107 `,`{`,``,`{`,` customer.name `,`}`,``,`}`,`,</p>
<p>dzi\u0119kujemy za zam\xF3wienie! W\u0142a\u015Bnie je pakujemy.</p>
<table>
  <tr><th>Produkt</th><th>Ilo\u015B\u0107</th><th>Cena</th></tr>
  `,`{`,``,`{`,`#each items`,`}`,``,`}`,`
  <tr>
    <td>`,`{`,``,`{`,` name `,`}`,``,`}`,`</td>
    <td>`,`{`,``,`{`,` quantity `,`}`,``,`}`,`</td>
    <td>`,`{`,``,`{`,` price `,`}`,``,`}`,`</td>
  </tr>
  `,`{`,``,`{`,`/each`,`}`,``,`}`,`
</table>
<p><strong>Razem: `,`{`,``,`{`,` total `,`}`,``,`}`,`</strong></p>
<p><a href="`,`{`,``,`{`,` orderUrl `,`}`,``,`}`,`">Zobacz zam\xF3wienie</a></p>
<p>Faktur\u0119 znajdziesz w za\u0142\u0105czniku.</p>
`]),zC(26),hf(` `,jT(1057,251,`mail/templates/partials/signature.pl.html`,Z.isJsActive),`
`),zC(17),hf(` `,jT(1074,254,`i18n/en/mail.json`,X.isJsActive),`
`),zC(9),hf(` `,jT(1083,257,`i18n/pl/mail.json`,ee.isJsActive),`
`),zC(17),hf(` `,jT(1100,260,`i18n/translations`,te.isJsActive),`
`),zC(9),hf(` `,jT(1109,263,`app.module`,ne.isJsActive),`
`),zC(34),hf(` `,jT(1143,266,`notifications/order-confirmation.mail`,ie.isJsActive),`
`),zC(38),hf(` `,jT(1181,269,`notifications/order-mails.handler`,ae.isJsActive),`
`),zC(19),hf(` `,jT(1200,272,`notifications/mail-preview.controller`,oe.isJsActive),`
`),zC(31),hf(` `,jT(1231,275,`mail/handlebars-template.engine`,re.isJsActive),`
`),zC(66),hf(` `,jT(1297,278,`mail/mailgun.transport`,le.isJsActive),`
`),zC(241),hf(` `,jT(1538,281,`test/order-confirmation.e2e-spec`,se.isJsActive),`
`),zC(522),Xy(``,`{`,``,`{`,` customer.name `,`}`,``,`}`),zC(12),Jy(``,`{`,``,`{`,``,`{`,` body `,`}`,``,`}`,``,`}`),zC(9),tv([``,`{`,``,`{`,`#if paid`,`}`,``,`}`,` … `,`{`,``,`{`,`else`,`}`,``,`}`,` … `,`{`,``,`{`,`/if`,`}`,``,`}`]),zC(13),Xy(``,`{`,``,`{`,`else if pending`,`}`,``,`}`),zC(5),ev(``,`{`,``,`{`,`#unless paid`,`}`,``,`}`,` … `,`{`,``,`{`,`/unless`,`}`,``,`}`),zC(12),tv([``,`{`,``,`{`,`#each items`,`}`,``,`}`,` … `,`{`,``,`{`,`else`,`}`,``,`}`,` … `,`{`,``,`{`,`/each`,`}`,``,`}`]),zC(27),Xy(``,`{`,``,`{`,`> signature`,`}`,``,`}`),zC(12),ev(``,`{`,``,`{`,`! note `,`}`,``,`}`,`, `,`{`,``,`{`,`!-- note --`,`}`,``,`}`),zC(6),Ky(`\\`,`{`,``,`{`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return d})();var ge=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-queues`]],features:[xy],decls:1835,vars:26,consts:[[`contentReference`,``],[`appf029a4d2ad37d665642800d62da3566b97aa6574`,``],[`appddeab2d6f949134f749539dc4fed5311f686defc`,``],[`appadd0e5c426a2263d8949c8abe1104f6f6ab3c293`,``],[`app5ce8a3976fb7b4ceb2e31f27d1673d6390caed29`,``],[`app247fc77b1d233fc6927446c7b302ea8a5880bb2e`,``],[`appe21f43a1be720122f19d7110601bcb1397b74c17`,``],[1,`content`],[1,`content-inner`],[`id`,`queues`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://redis.io/`],[`href`,`application/queues#producers`],[`href`,`application/queues#consumers`],[`href`,`application/queues#event-listeners`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/OptimalBits/bull/blob/master/REFERENCE.md`],[`appAnchor`,``,`id`,`bullmq-installation`],[1,`language-bash`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/guide/connections`],[`href`,`/application/queues#pluggable-backends`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/interfaces/v6.DefaultJobOptions.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/taskforcesh/bullmq/issues/1034`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/interfaces/v6.AdvancedRepeatOptions.html`],[`href`,`/application/queues#manual-registration`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/interfaces/v6.QueueOptions.html`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/guide/flows`],[`href`,`application/queues#job-options`],[`appAnchor`,``,`id`,`named-configurations`],[`appAnchor`,``,`id`,`pluggable-backends-postgresql`],[`appAnchor`,``,`id`,`producers`],[`routerLink`,`/providers`],[`appAnchor`,``,`id`,`job-options`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/interfaces/v6.BackoffOptions.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/guide/job-schedulers`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/types/v6.JobsOptions.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/interfaces/v6.BaseJobOptions.html`],[`appAnchor`,``,`id`,`consumers`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/classes/v6.Job.html`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/patterns/named-processor`],[`appAnchor`,``,`id`,`request-scoped-consumers`],[`href`,`/fundamentals/injection-scopes#provider-scope`],[`appAnchor`,``,`id`,`event-listeners`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/interfaces/v6.WorkerListener.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/interfaces/v6.QueueEventsListener.html`],[`appAnchor`,``,`id`,`queue-management`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/api/classes/v6.Queue.html`],[`appAnchor`,``,`id`,`observing-queues-in-production`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.observe.nestjs.com/`,`title`,`NestJS Observe`],[`routerLink`,`/observability/overview`],[`appAnchor`,``,`id`,`separate-processes`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.bullmq.io/guide/workers/sandboxed-processors`],[`appAnchor`,``,`id`,`async-configuration`],[`routerLink`,`/fundamentals/async-providers`],[`appAnchor`,``,`id`,`manual-registration`],[`appAnchor`,``,`id`,`bull-installation`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/OptimalBits/bull/blob/master/REFERENCE.md#queue`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/OptimalBits/bull/blob/master/REFERENCE.md#queueadd`],[`appAnchor`,``,`id`,`named-configurations-1`],[`appAnchor`,``,`id`,`producers-1`],[`appAnchor`,``,`id`,`named-jobs`],[`appAnchor`,``,`id`,`job-options-1`],[`appAnchor`,``,`id`,`consumers-1`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/OptimalBits/bull/blob/master/REFERENCE.md#job`],[`appAnchor`,``,`id`,`request-scoped-consumers-1`],[`appAnchor`,``,`id`,`event-listeners-1`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/OptimalBits/bull/blob/master/REFERENCE.md#events`],[`appAnchor`,``,`id`,`queue-management-1`],[`appAnchor`,``,`id`,`separate-processes-1`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/OptimalBits/bull#separate-processes`],[1,`language-ts`],[`appAnchor`,``,`id`,`async-configuration-1`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/26-queues`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/queues.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,7,0)(2,`div`,8)(3,`h3`,9),bT(4,`Queues`),cf(),Aa(5,`p`),bT(6,`Queues are a design pattern that helps you deal with common application scaling and performance challenges. Some examples of problems that queues can help you solve are:`),cf(),Aa(7,`ul`)(8,`li`),bT(9,`Smooth out processing peaks. For example, if users can initiate resource-intensive tasks at arbitrary times, you can add these tasks to a queue instead of performing them synchronously. Worker processes then pull tasks from the queue in a controlled manner. As the application grows, you can add queue consumers to scale up back-end task handling.`),cf(),Aa(10,`li`),bT(11,`Break up monolithic tasks that may otherwise block the Node.js event loop. For example, if a user request requires CPU-intensive work like audio transcoding, you can delegate this task to other processes, so user-facing processes remain responsive.`),cf(),Aa(12,`li`),bT(13,`Provide a reliable communication channel across services. For example, you can queue tasks (jobs) in one process or service and consume them in another. By listening for status events, any process or service can be notified of completion, errors, or other state changes in the job lifecycle. When queue producers or consumers fail, their state is preserved, and task handling can resume automatically when nodes restart.`),cf()(),Aa(14,`p`),bT(15,`Nest provides the `),Aa(16,`code`),bT(17,`@nestjs/bullmq`),cf(),bT(18,` package for BullMQ integration and the `),Aa(19,`code`),bT(20,`@nestjs/bull`),cf(),bT(21,` package for Bull integration. Both packages wrap their respective libraries, which are developed by the same team. Bull is in maintenance mode (the team only fixes bugs), while BullMQ is actively developed and offers a modern TypeScript implementation with a different set of features. If Bull meets your requirements, it remains a reliable, battle-tested choice.`),cf(),Aa(22,`p`),bT(23,`Both BullMQ and Bull use `),Aa(24,`a`,10),bT(25,`Redis`),cf(),bT(26,` to persist job data, so you need a running Redis instance. Because they are Redis-backed, your queue architecture can be fully distributed and platform-independent. For example, you can run some queue `),Aa(27,`a`,11),bT(28,`producers`),cf(),bT(29,`, `),Aa(30,`a`,12),bT(31,`consumers`),cf(),bT(32,`, and `),Aa(33,`a`,13),bT(34,`listeners`),cf(),bT(35,` in Nest on one or more nodes, and other producers, consumers, and listeners on other Node.js platforms on other network nodes.`),cf(),Aa(36,`p`),bT(37,`This chapter covers the `),Aa(38,`code`),bT(39,`@nestjs/bullmq`),cf(),bT(40,` and `),Aa(41,`code`),bT(42,`@nestjs/bull`),cf(),bT(43,` packages. For more background and implementation details, see the `),Aa(44,`a`,14),bT(45,`BullMQ documentation`),cf(),bT(46,` and the `),Aa(47,`a`,15),bT(48,`Bull reference`),cf(),bT(49,`.`),cf(),Aa(50,`h4`,16)(51,`span`),bT(52,`BullMQ installation`),cf()(),Aa(53,`p`),bT(54,`To begin using BullMQ, install the required dependencies.`),cf(),Aa(55,`pre`)(56,`code`,17),bT(57,`
$ npm install --save @nestjs/bullmq bullmq ioredis
`),cf()(),Aa(58,`p`),bT(59,`Once the installation process is complete, import the `),Aa(60,`code`),bT(61,`BullModule`),cf(),bT(62,` into the root `),Aa(63,`code`),bT(64,`AppModule`),cf(),bT(65,`.`),cf(),Aa(66,`app-copy-button`,18)(67,`span`,19),bT(68),LT(69,`extension`),Wa(70,`app-tabs`,null,1),cf(),Aa(72,`pre`)(73,`code`,20),bT(74,`
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(75,`p`),bT(76,`The `),Aa(77,`code`),bT(78,`forRoot()`),cf(),bT(79,` method registers a `),Aa(80,`code`),bT(81,`bullmq`),cf(),bT(82,` configuration object that all queues registered in the application use (unless specified otherwise). The following are a few of the configuration properties:`),cf(),Aa(83,`ul`)(84,`li`)(85,`code`),bT(86,`connection: ConnectionOptions`),cf(),bT(87,` - Options to configure the Redis connection. See `),Aa(88,`a`,21),bT(89,`Connections`),cf(),bT(90,` for more information.`),cf(),Aa(91,`li`)(92,`code`),bT(93,`backendFactory: BullMQBackendFactory`),cf(),bT(94,` - Factory function for pluggable backends (e.g., PostgreSQL). See `),Aa(95,`a`,22),bT(96,`Pluggable backends`),cf(),bT(97,` for more information.`),cf(),Aa(98,`li`)(99,`code`),bT(100,`prefix: string`),cf(),bT(101,` - Prefix for all queue keys (defaults to `),Aa(102,`code`),bT(103,`bull`),cf(),bT(104,`).`),cf(),Aa(105,`li`)(106,`code`),bT(107,`defaultJobOptions: DefaultJobOptions`),cf(),bT(108,` - Default settings for new jobs. See `),Aa(109,`a`,23),bT(110,`DefaultJobOptions`),cf(),bT(111,` for more information. These don't take effect for jobs added through a `),Aa(112,`code`),bT(113,`FlowProducer`),cf(),bT(114,`; see `),Aa(115,`a`,24),bT(116,`bullmq#1034`),cf(),bT(117,` for an explanation.`),cf(),Aa(118,`li`)(119,`code`),bT(120,`settings: AdvancedRepeatOptions`),cf(),bT(121,` - Advanced settings for repeatable jobs. These should usually not be changed. See `),Aa(122,`a`,25),bT(123,`AdvancedRepeatOptions`),cf(),bT(124,` for more information.`),cf(),Aa(125,`li`)(126,`code`),bT(127,`extraOptions`),cf(),bT(128,` - Extra options for module initialization. See `),Aa(129,`a`,26),bT(130,`Manual registration`),cf(),bT(131,`.`),cf()(),Aa(132,`p`),bT(133,`All options are optional. Apart from `),Aa(134,`code`),bT(135,`extraOptions`),cf(),bT(136,`, they are passed directly to the BullMQ `),Aa(137,`code`),bT(138,`Queue`),cf(),bT(139,` constructor. See the `),Aa(140,`a`,27),bT(141,`QueueOptions API reference`),cf(),bT(142,` for the complete list.`),cf(),Aa(143,`p`),bT(144,`To register a queue, import the `),Aa(145,`code`),bT(146,`BullModule.registerQueue()`),cf(),bT(147,` dynamic module, as follows:`),cf(),Aa(148,`app-copy-button`)(149,`pre`)(150,`code`,20),bT(151,`
BullModule.registerQueue({
  name: 'audio',
});
`),cf()()(),Aa(152,`blockquote`,28)(153,`strong`),bT(154,`Hint`),cf(),bT(155,` Create multiple queues by passing multiple configuration objects (as separate arguments) to the `),Aa(156,`code`),bT(157,`registerQueue()`),cf(),bT(158,` method.
`),cf(),Aa(159,`p`),bT(160,`The `),Aa(161,`code`),bT(162,`registerQueue()`),cf(),bT(163,` method instantiates and/or registers queues. Queues are shared across modules and processes that connect to the same underlying Redis database with the same credentials. Each queue is identified by its `),Aa(164,`code`),bT(165,`name`),cf(),bT(166,` property. The queue name serves both as an injection token (for injecting the queue into controllers and providers) and as an argument to decorators that associate consumer classes and listeners with queues.`),cf(),Aa(167,`p`),bT(168,`You can also override some of the preconfigured options for a specific queue, as follows:`),cf(),Aa(169,`app-copy-button`)(170,`pre`)(171,`code`,20),bT(172,`
BullModule.registerQueue({
  name: 'audio',
  connection: {
    port: 6380,
  },
});
`),cf()()(),Aa(173,`p`),bT(174,`BullMQ also supports parent-child relationships between jobs. This enables flows, where jobs are the nodes of trees of arbitrary depth. See `),Aa(175,`a`,29),bT(176,`Flows`),cf(),bT(177,` in the BullMQ documentation to learn more.`),cf(),Aa(178,`p`),bT(179,`To register a flow producer, use the `),Aa(180,`code`),bT(181,`registerFlowProducer()`),cf(),bT(182,` method:`),cf(),Aa(183,`app-copy-button`)(184,`pre`)(185,`code`,20),bT(186,`
BullModule.registerFlowProducer({
  name: 'flowProducerName',
});
`),cf()()(),Aa(187,`p`),bT(188,`Because jobs are persisted in Redis, each time a named queue is instantiated (e.g., when an app starts or restarts), it attempts to process any old jobs left over from a previous unfinished session.`),cf(),Aa(189,`p`),bT(190,`Each queue can have one or many producers, consumers, and listeners. Consumers retrieve jobs from the queue in a specific order: FIFO (the default), LIFO, or according to priorities. The `),Aa(191,`a`,30),bT(192,`job options`),cf(),bT(193,` section explains how to control the processing order.`),cf(),Aa(194,`p`),Wa(195,`app-banner-enterprise`),cf(),Aa(196,`h4`,31)(197,`span`),bT(198,`Named configurations`),cf()(),Aa(199,`p`),bT(200,`If your queues connect to multiple Redis instances, you can use a technique called `),Aa(201,`strong`),bT(202,`named configurations`),cf(),bT(203,`. This feature lets you register several configurations under specified keys, which you can then refer to in the queue options.`),cf(),Aa(204,`p`),bT(205,`For example, assuming you have an additional Redis instance (apart from the default one) used by a few queues in your application, you can register its configuration as follows:`),cf(),Aa(206,`app-copy-button`)(207,`pre`)(208,`code`,20),bT(209,`
BullModule.forRoot('alternative-config', {
  connection: {
    port: 6381,
  },
});
`),cf()()(),Aa(210,`p`),bT(211,`In the example above, `),Aa(212,`code`),bT(213,`'alternative-config'`),cf(),bT(214,` is a configuration key (it can be any string).`),cf(),Aa(215,`p`),bT(216,`You can now point to this configuration in the `),Aa(217,`code`),bT(218,`registerQueue()`),cf(),bT(219,` options object:`),cf(),Aa(220,`app-copy-button`)(221,`pre`)(222,`code`,20),bT(223,`
BullModule.registerQueue({
  configKey: 'alternative-config',
  name: 'video',
});
`),cf()()(),Aa(224,`h4`,32)(225,`span`),bT(226,`Pluggable backends (PostgreSQL)`),cf()(),Aa(227,`p`),bT(228,`BullMQ supports pluggable storage backends (such as PostgreSQL) through custom backend factories. The PostgreSQL backend needs the `),Aa(229,`code`),bT(230,`pg`),cf(),bT(231,` package (`),Aa(232,`code`),bT(233,`npm install --save pg`),cf(),bT(234,`) instead of `),Aa(235,`code`),bT(236,`ioredis`),cf(),bT(237,`. You can configure a `),Aa(238,`code`),bT(239,`backendFactory`),cf(),bT(240,` globally in `),Aa(241,`code`),bT(242,`BullModule.forRoot()`),cf(),bT(243,` or per-queue in `),Aa(244,`code`),bT(245,`BullModule.registerQueue()`),cf(),bT(246,`.`),cf(),Aa(247,`app-copy-button`,18)(248,`span`,19),bT(249),LT(250,`extension`),Wa(251,`app-tabs`,null,2),cf(),Aa(253,`pre`)(254,`code`,20),bT(255,`
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { createPostgresBackend } from 'bullmq';

@Module({
  imports: [
    BullModule.forRoot({
      backendFactory: createPostgresBackend,
      connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'password',
        database: 'mydb',
        migrate: true,
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(256,`p`)(257,`code`),bT(258,`migrate: true`),cf(),bT(259,` creates BullMQ's tables at startup, in a `),Aa(260,`code`),bT(261,`bullmq`),cf(),bT(262,` schema of their own. Without it, the application fails on a database that doesn't have them yet.`),cf(),Aa(263,`p`),bT(264,`The configured `),Aa(265,`code`),bT(266,`backendFactory`),cf(),bT(267,` is automatically propagated across all underlying BullMQ components (`),Aa(268,`code`),bT(269,`Queue`),cf(),bT(270,`, `),Aa(271,`code`),bT(272,`Worker`),cf(),bT(273,`, `),Aa(274,`code`),bT(275,`QueueEvents`),cf(),bT(276,`, and `),Aa(277,`code`),bT(278,`FlowProducer`),cf(),bT(279,`), including `),Aa(280,`code`),bT(281,`@Processor()`),cf(),bT(282,` and `),Aa(283,`code`),bT(284,`@QueueEventsListener()`),cf(),bT(285,` worker hosts.`),cf(),Aa(286,`h4`,33)(287,`span`),bT(288,`Producers`),cf()(),Aa(289,`p`),bT(290,`Job producers add jobs to queues. Producers are typically application services (Nest `),Aa(291,`a`,34),bT(292,`providers`),cf(),bT(293,`). To add jobs to a queue, first inject the queue into the service:`),cf(),Aa(294,`app-copy-button`)(295,`pre`)(296,`code`,20),bT(297,`
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class AudioService {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}
}
`),cf()()(),Aa(298,`blockquote`,28)(299,`strong`),bT(300,`Hint`),cf(),bT(301,` The `),Aa(302,`code`),bT(303,`@InjectQueue()`),cf(),bT(304,` decorator identifies the queue by its name, as provided in the `),Aa(305,`code`),bT(306,`registerQueue()`),cf(),bT(307,` method call (e.g., `),Aa(308,`code`),bT(309,`'audio'`),cf(),bT(310,`).
`),cf(),Aa(311,`p`),bT(312,`Now, add a job by calling the queue's `),Aa(313,`code`),bT(314,`add()`),cf(),bT(315,` method, passing a job name and a user-defined data object. Job data must be serializable, because jobs are stored in Redis. The shape of the data is arbitrary; use it to represent the semantics of your job. The name lets a `),Aa(316,`a`,12),bT(317,`consumer`),cf(),bT(318,` tell different kinds of jobs apart.`),cf(),Aa(319,`app-copy-button`)(320,`pre`)(321,`code`,20),bT(322,`
const job = await this.audioQueue.add('transcode', {
  foo: 'bar',
});
`),cf()()(),Aa(323,`h4`,35)(324,`span`),bT(325,`Job options`),cf()(),Aa(326,`p`),bT(327,`Jobs can have additional options associated with them. Pass an options object as the third argument of the `),Aa(328,`code`),bT(329,`Queue.add()`),cf(),bT(330,` method, after the job data. Some of the job options are:`),cf(),Aa(331,`ul`)(332,`li`)(333,`code`),bT(334,`priority`),cf(),bT(335,`: `),Aa(336,`code`),bT(337,`number`),cf(),bT(338,` - Priority value, from 0 to 2,097,151. `),Aa(339,`code`),bT(340,`0`),cf(),bT(341,` (the default) means no explicit priority; jobs without a priority are processed before prioritized jobs, and among prioritized jobs, lower numbers are processed first. Using priorities has a slight impact on performance, so use them only when required.`),cf(),Aa(342,`li`)(343,`code`),bT(344,`delay`),cf(),bT(345,`: `),Aa(346,`code`),bT(347,`number`),cf(),bT(348,` - Time (in milliseconds) to wait until this job can be processed. For accurate delays, workers and producers should have their clocks synchronized.`),cf(),Aa(349,`li`)(350,`code`),bT(351,`attempts`),cf(),bT(352,`: `),Aa(353,`code`),bT(354,`number`),cf(),bT(355,` - The total number of attempts to try the job until it completes (defaults to 1).`),cf(),Aa(356,`li`)(357,`code`),bT(358,`backoff`),cf(),bT(359,`: `),Aa(360,`code`),bT(361,`number | BackoffOptions`),cf(),bT(362,` - Backoff setting for automatic retries if the job fails. See `),Aa(363,`a`,36),bT(364,`BackoffOptions`),cf(),bT(365,`.`),cf(),Aa(366,`li`)(367,`code`),bT(368,`lifo`),cf(),bT(369,`: `),Aa(370,`code`),bT(371,`boolean`),cf(),bT(372,` - If `),Aa(373,`code`),bT(374,`true`),cf(),bT(375,`, adds the job to the right end of the queue instead of the left (default `),Aa(376,`code`),bT(377,`false`),cf(),bT(378,`).`),cf(),Aa(379,`li`)(380,`code`),bT(381,`jobId`),cf(),bT(382,`: `),Aa(383,`code`),bT(384,`string`),cf(),bT(385,` - Overrides the job ID. By default, the job ID is a unique integer. If you use this option, it's up to you to ensure the ID is unique. A job with an ID that already exists is not added.`),cf(),Aa(386,`li`)(387,`code`),bT(388,`removeOnComplete`),cf(),bT(389,`: `),Aa(390,`code`),bT(391,`boolean | number | KeepJobs`),cf(),bT(392,` - If `),Aa(393,`code`),bT(394,`true`),cf(),bT(395,`, removes the job when it successfully completes. A number specifies how many jobs to keep, and a `),Aa(396,`code`),bT(397,`KeepJobs`),cf(),bT(398,` object specifies a maximum age and/or count. By default, the job is kept in the completed set.`),cf(),Aa(399,`li`)(400,`code`),bT(401,`removeOnFail`),cf(),bT(402,`: `),Aa(403,`code`),bT(404,`boolean | number | KeepJobs`),cf(),bT(405,` - If `),Aa(406,`code`),bT(407,`true`),cf(),bT(408,`, removes the job when it fails after all attempts. A number or `),Aa(409,`code`),bT(410,`KeepJobs`),cf(),bT(411,` object works as for `),Aa(412,`code`),bT(413,`removeOnComplete`),cf(),bT(414,`. By default, the job is kept in the failed set.`),cf(),Aa(415,`li`)(416,`code`),bT(417,`stackTraceLimit`),cf(),bT(418,`: `),Aa(419,`code`),bT(420,`number`),cf(),bT(421,` - Limits the number of stack trace lines recorded for a failed job.`),cf()(),Aa(422,`blockquote`,28)(423,`strong`),bT(424,`Hint`),cf(),bT(425,` BullMQ no longer accepts a `),Aa(426,`code`),bT(427,`repeat`),cf(),bT(428,` option in `),Aa(429,`code`),bT(430,`Queue.add()`),cf(),bT(431,`. To run a job repeatedly (e.g., on a cron pattern), create a job scheduler with the `),Aa(432,`code`),bT(433,`Queue#upsertJobScheduler()`),cf(),bT(434,` method. See `),Aa(435,`a`,37),bT(436,`Job Schedulers`),cf(),bT(437,` in the BullMQ documentation.
`),cf(),Aa(438,`p`),bT(439,`Here are a few examples of customizing jobs with job options.`),cf(),Aa(440,`p`),bT(441,`To delay the start of a job, use the `),Aa(442,`code`),bT(443,`delay`),cf(),bT(444,` property.`),cf(),Aa(445,`app-copy-button`)(446,`pre`)(447,`code`,20),bT(448,`
const job = await this.audioQueue.add(
  'transcode',
  {
    foo: 'bar',
  },
  { delay: 3000 }, // 3 seconds delayed
);
`),cf()()(),Aa(449,`p`),bT(450,`To add a job to the right end of the queue (i.e., process it as `),Aa(451,`strong`),bT(452,`LIFO`),cf(),bT(453,`, Last In First Out), set the `),Aa(454,`code`),bT(455,`lifo`),cf(),bT(456,` property to `),Aa(457,`code`),bT(458,`true`),cf(),bT(459,`.`),cf(),Aa(460,`app-copy-button`)(461,`pre`)(462,`code`,20),bT(463,`
const job = await this.audioQueue.add(
  'transcode',
  {
    foo: 'bar',
  },
  { lifo: true },
);
`),cf()()(),Aa(464,`p`),bT(465,`To prioritize a job, use the `),Aa(466,`code`),bT(467,`priority`),cf(),bT(468,` property.`),cf(),Aa(469,`app-copy-button`)(470,`pre`)(471,`code`,20),bT(472,`
const job = await this.audioQueue.add(
  'transcode',
  {
    foo: 'bar',
  },
  { priority: 2 },
);
`),cf()()(),Aa(473,`p`),bT(474,`For the full list of options, see the `),Aa(475,`a`,38),bT(476,`JobsOptions`),cf(),bT(477,` and `),Aa(478,`a`,39),bT(479,`BaseJobOptions`),cf(),bT(480,` API references.`),cf(),Aa(481,`h4`,40)(482,`span`),bT(483,`Consumers`),cf()(),Aa(484,`p`),bT(485,`A consumer is a `),Aa(486,`strong`),bT(487,`class`),cf(),bT(488,` defining methods that process jobs added to the queue, listen for events on the queue, or both. Declare a consumer class using the `),Aa(489,`code`),bT(490,`@Processor()`),cf(),bT(491,` decorator as follows:`),cf(),Aa(492,`app-copy-button`)(493,`pre`)(494,`code`,20),bT(495,`
import { Processor } from '@nestjs/bullmq';

@Processor('audio')
export class AudioConsumer {}
`),cf()()(),Aa(496,`blockquote`,28)(497,`strong`),bT(498,`Hint`),cf(),bT(499,` Consumers must be registered as `),Aa(500,`code`),bT(501,`providers`),cf(),bT(502,` so the `),Aa(503,`code`),bT(504,`@nestjs/bullmq`),cf(),bT(505,` package can pick them up.
`),cf(),Aa(506,`p`),bT(507,`The decorator's string argument (e.g., `),Aa(508,`code`),bT(509,`'audio'`),cf(),bT(510,`) is the name of the queue to associate with the class. The consumer class must extend `),Aa(511,`code`),bT(512,`WorkerHost`),cf(),bT(513,` and implement its `),Aa(514,`code`),bT(515,`process()`),cf(),bT(516,` method:`),cf(),Aa(517,`app-copy-button`)(518,`pre`)(519,`code`,20),bT(520,`
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('audio')
export class AudioConsumer extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      await doSomething(job.data);
      progress += 1;
      await job.updateProgress(progress);
    }
    return {};
  }
}
`),cf()()(),Aa(521,`p`),bT(522,`The `),Aa(523,`code`),bT(524,`process()`),cf(),bT(525,` method is called whenever the worker is idle and there are jobs to process in the queue. It receives the `),Aa(526,`code`),bT(527,`job`),cf(),bT(528,` object as its only argument. The value it returns is stored in the job object and can be accessed later, for example, in a listener for the `),Aa(529,`code`),bT(530,`completed`),cf(),bT(531,` event.`),cf(),Aa(532,`p`)(533,`code`),bT(534,`Job`),cf(),bT(535,` objects have multiple methods that allow you to interact with their state. For example, the code above uses the `),Aa(536,`code`),bT(537,`updateProgress()`),cf(),bT(538,` method to update the job's progress. See the `),Aa(539,`a`,41),bT(540,`Job API reference`),cf(),bT(541,` for the complete list.`),cf(),Aa(542,`p`),bT(543,`In Bull, you could designate that a job handler method handles `),Aa(544,`strong`),bT(545,`only`),cf(),bT(546,` jobs of a certain type (jobs with a specific `),Aa(547,`code`),bT(548,`name`),cf(),bT(549,`) by passing that `),Aa(550,`code`),bT(551,`name`),cf(),bT(552,` to the `),Aa(553,`code`),bT(554,`@Process()`),cf(),bT(555,` decorator, as shown below.`),cf(),Aa(556,`blockquote`,42)(557,`strong`),bT(558,`Warning`),cf(),bT(559,` This doesn't work with BullMQ. Read on for the BullMQ approach.
`),cf(),Aa(560,`app-copy-button`)(561,`pre`)(562,`code`,20),bT(563,`
@Process('transcode')
async transcode(job: Job<unknown>) { ... }
`),cf()()(),Aa(564,`p`),bT(565,`BullMQ doesn't support this behavior, because it caused confusion. Instead, use a `),Aa(566,`code`),bT(567,`switch`),cf(),bT(568,` statement on the job name to call different services or logic for each kind of job:`),cf(),Aa(569,`app-copy-button`)(570,`pre`)(571,`code`,20),bT(572,`
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('audio')
export class AudioConsumer extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    switch (job.name) {
      case 'transcode': {
        let progress = 0;
        for (let i = 0; i < 100; i++) {
          await doSomething(job.data);
          progress += 1;
          await job.updateProgress(progress);
        }
        return {};
      }
      case 'concatenate': {
        await doSomeLogic2();
        break;
      }
    }
  }
}
`),cf()()(),Aa(573,`p`),bT(574,`This is covered in the `),Aa(575,`a`,43),bT(576,`named processor`),cf(),bT(577,` section of the BullMQ documentation.`),cf(),Aa(578,`h4`,44)(579,`span`),bT(580,`Request-scoped consumers`),cf()(),Aa(581,`p`),bT(582,`When a consumer is flagged as request-scoped (see `),Aa(583,`a`,45),bT(584,`injection scopes`),cf(),bT(585,`), a new instance of the class is created exclusively for each job. The instance is garbage-collected after the job completes.`),cf(),Aa(586,`app-copy-button`)(587,`pre`)(588,`code`,20),bT(589,`
@Processor({
  name: 'audio',
  scope: Scope.REQUEST,
})
`),cf()()(),Aa(590,`p`),bT(591,`Because request-scoped consumer classes are instantiated dynamically and scoped to a single job, you can inject the current job through the constructor using the `),Aa(592,`code`),bT(593,`JOB_REF`),cf(),bT(594,` token.`),cf(),Aa(595,`app-copy-button`)(596,`pre`)(597,`code`,20),bT(598,`
constructor(@Inject(JOB_REF) jobRef: Job) {
  console.log(jobRef);
}
`),cf()()(),Aa(599,`blockquote`,28)(600,`strong`),bT(601,`Hint`),cf(),bT(602,` The `),Aa(603,`code`),bT(604,`JOB_REF`),cf(),bT(605,` token is imported from the `),Aa(606,`code`),bT(607,`@nestjs/bullmq`),cf(),bT(608,` package.
`),cf(),Aa(609,`h4`,46)(610,`span`),bT(611,`Event listeners`),cf()(),Aa(612,`p`),bT(613,`BullMQ emits a set of events when queue and/or job state changes occur. You can subscribe to these events at the worker level using the `),Aa(614,`code`),bT(615,`@OnWorkerEvent(event)`),cf(),bT(616,` decorator, or at the queue level with a dedicated listener class and the `),Aa(617,`code`),bT(618,`@OnQueueEvent(event)`),cf(),bT(619,` decorator.`),cf(),Aa(620,`p`),bT(621,`Worker events must be declared within a `),Aa(622,`a`,12),bT(623,`consumer`),cf(),bT(624,` class (i.e., within a class decorated with the `),Aa(625,`code`),bT(626,`@Processor()`),cf(),bT(627,` decorator). To listen for an event, use the `),Aa(628,`code`),bT(629,`@OnWorkerEvent(event)`),cf(),bT(630,` decorator with the event you want to handle. For example, to listen to the event emitted when a job enters the active state in the `),Aa(631,`code`),bT(632,`audio`),cf(),bT(633,` queue, use the following construct:`),cf(),Aa(634,`app-copy-button`)(635,`pre`)(636,`code`,20),bT(637,`
import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('audio')
export class AudioConsumer extends WorkerHost {
  @OnWorkerEvent('active')
  onActive(job: Job) {
    console.log(
      \`Processing job \${job.id} of type \${job.name} with data \${job.data}...\`,
    );
  }

  // ...
}
`),cf()()(),Aa(638,`p`),bT(639,`The complete list of worker events and their arguments is available as the properties of the `),Aa(640,`a`,47),bT(641,`WorkerListener`),cf(),bT(642,` interface.`),cf(),Aa(643,`p`),bT(644,`Queue event listeners must use the `),Aa(645,`code`),bT(646,`@QueueEventsListener(queue)`),cf(),bT(647,` decorator and extend the `),Aa(648,`code`),bT(649,`QueueEventsHost`),cf(),bT(650,` class provided by `),Aa(651,`code`),bT(652,`@nestjs/bullmq`),cf(),bT(653,`. To listen for an event, use the `),Aa(654,`code`),bT(655,`@OnQueueEvent(event)`),cf(),bT(656,` decorator with the event you want to handle. For example, to listen to the event emitted when a job enters the active state in the `),Aa(657,`code`),bT(658,`audio`),cf(),bT(659,` queue, use the following construct:`),cf(),Aa(660,`app-copy-button`)(661,`pre`)(662,`code`,20),bT(663,`
import {
  QueueEventsHost,
  QueueEventsListener,
  OnQueueEvent,
} from '@nestjs/bullmq';

@QueueEventsListener('audio')
export class AudioEventsListener extends QueueEventsHost {
  @OnQueueEvent('active')
  onActive(job: { jobId: string; prev?: string }) {
    console.log(\`Processing job \${job.jobId}...\`);
  }

  // ...
}
`),cf()()(),Aa(664,`blockquote`,28)(665,`strong`),bT(666,`Hint`),cf(),bT(667,` Queue event listeners must be registered as `),Aa(668,`code`),bT(669,`providers`),cf(),bT(670,` so the `),Aa(671,`code`),bT(672,`@nestjs/bullmq`),cf(),bT(673,` package can pick them up.
`),cf(),Aa(674,`p`),bT(675,`The complete list of queue events and their arguments is available as the properties of the `),Aa(676,`a`,48),bT(677,`QueueEventsListener`),cf(),bT(678,` interface.`),cf(),Aa(679,`h4`,49)(680,`span`),bT(681,`Queue management`),cf()(),Aa(682,`p`),bT(683,`Queues have an API for management functions such as pausing and resuming, and retrieving the count of jobs in various states. See the `),Aa(684,`a`,50),bT(685,`Queue API reference`),cf(),bT(686,` for the full API. Invoke these methods directly on the `),Aa(687,`code`),bT(688,`Queue`),cf(),bT(689,` object, as shown in the pause and resume examples below.`),cf(),Aa(690,`p`),bT(691,`Pause a queue with the `),Aa(692,`code`),bT(693,`pause()`),cf(),bT(694,` method. A paused queue doesn't process new jobs until it's resumed, but jobs already being processed continue until they finish.`),cf(),Aa(695,`app-copy-button`)(696,`pre`)(697,`code`,20),bT(698,`
await audioQueue.pause();
`),cf()()(),Aa(699,`p`),bT(700,`To resume a paused queue, use the `),Aa(701,`code`),bT(702,`resume()`),cf(),bT(703,` method, as follows:`),cf(),Aa(704,`app-copy-button`)(705,`pre`)(706,`code`,20),bT(707,`
await audioQueue.resume();
`),cf()()(),Aa(708,`h4`,51)(709,`span`),bT(710,`Observing queues in production`),cf()(),Aa(711,`p`),bT(712,`Queues fail in ways that HTTP endpoints don't. A job doesn't return a status code to an impatient user. It retries quietly, three times, with backoff, and the only symptom is that something downstream never happened. The two questions that matter are therefore `),Aa(713,`em`),bT(714,`"is this queue keeping up?"`),cf(),bT(715,` and `),Aa(716,`em`),bT(717,`"did that job run at all?"`),cf(),bT(718,`, and the consumer's own logs can't answer either of them.`),cf(),Aa(719,`p`)(720,`a`,52),bT(721,`NestJS Observe`),cf(),bT(722,` instruments queue consumers automatically, the same way it instruments controllers: `),Aa(723,`code`),bT(724,`@Processor()`),cf(),bT(725,` classes and their handlers are recognized as jobs, so no manual span wiring is needed:`),cf(),Aa(726,`ul`)(727,`li`)(728,`strong`),bT(729,`Queue wait time is measured separately from execution time.`),cf(),bT(730,` A job that takes 200 ms to run but sat in the queue for four minutes is a capacity problem, not a slow handler. The two numbers are reported side by side, so you can tell which one you have.`),cf(),Aa(731,`li`)(732,`strong`),bT(733,`Attempts and failure reasons are recorded per run.`),cf(),bT(734,` You see that a job succeeded on attempt 3 rather than seeing only the success, which is usually the difference between "fine" and "quietly degrading".`),cf(),Aa(735,`li`)(736,`strong`),bT(737,`Silence is alertable.`),cf(),bT(738,` A `),Aa(739,`em`),bT(740,`job silence`),cf(),bT(741,` rule fires when a named job hasn't reported for longer than a tolerance you choose. That's how you find out that the nightly billing consumer stopped running on the night it stops, rather than at the end of the month.`),cf()(),Aa(742,`p`),bT(743,`Failed jobs carry the same error card as failed requests: the resolved stack trace with source lines, the logs written during the run, and the waterfall of what the job did before it threw. See the `),Aa(744,`a`,53),bT(745,`Observability`),cf(),bT(746,` chapter for setup.`),cf(),Aa(747,`h4`,54)(748,`span`),bT(749,`Separate processes`),cf()(),Aa(750,`p`),bT(751,`Job handlers can also run in a separate (forked) process (see `),Aa(752,`a`,55),bT(753,`Sandboxed processors`),cf(),bT(754,` in the BullMQ documentation). This has several advantages:`),cf(),Aa(755,`ul`)(756,`li`),bT(757,`The process is sandboxed, so if it crashes, the worker isn't affected.`),cf(),Aa(758,`li`),bT(759,`You can run blocking code without affecting the queue (jobs don't stall).`),cf(),Aa(760,`li`),bT(761,`Better utilization of multi-core CPUs.`),cf(),Aa(762,`li`),bT(763,`Fewer connections to Redis.`),cf()(),Aa(764,`app-copy-button`,18)(765,`span`,19),bT(766),LT(767,`extension`),Wa(768,`app-tabs`,null,3),cf(),Aa(770,`pre`)(771,`code`,20),bT(772,`
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { join } from 'node:path';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
      processors: [join(import.meta.dirname, 'processor.js')],
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(773,`blockquote`,42)(774,`strong`),bT(775,`Warning`),cf(),bT(776,` Because your function runs in a forked process, dependency injection (and the IoC container) isn't available. Your processor function must contain (or create) all instances of the external dependencies it needs.
`),cf(),Aa(777,`h4`,56)(778,`span`),bT(779,`Async configuration`),cf()(),Aa(780,`p`),bT(781,`You may want to pass `),Aa(782,`code`),bT(783,`bullmq`),cf(),bT(784,` options asynchronously instead of statically. In this case, use the `),Aa(785,`code`),bT(786,`forRootAsync()`),cf(),bT(787,` method, which provides several ways to handle async configuration. Likewise, to pass queue options asynchronously, use the `),Aa(788,`code`),bT(789,`registerQueueAsync()`),cf(),bT(790,` method.`),cf(),Aa(791,`p`),bT(792,`One approach is to use a factory function:`),cf(),Aa(793,`app-copy-button`)(794,`pre`)(795,`code`,20),bT(796,`
BullModule.forRootAsync({
  useFactory: () => ({
    connection: {
      host: 'localhost',
      port: 6379,
    },
  }),
});
`),cf()()(),Aa(797,`p`),bT(798,`The factory behaves like any other `),Aa(799,`a`,57),bT(800,`asynchronous provider`),cf(),bT(801,` (e.g., it can be `),Aa(802,`code`),bT(803,`async`),cf(),bT(804,` and can inject dependencies through `),Aa(805,`code`),bT(806,`inject`),cf(),bT(807,`).`),cf(),Aa(808,`app-copy-button`)(809,`pre`)(810,`code`,20),bT(811,`
BullModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    connection: {
      host: configService.get('QUEUE_HOST'),
      port: configService.get('QUEUE_PORT'),
    },
  }),
  inject: [ConfigService],
});
`),cf()()(),Aa(812,`p`),bT(813,`Alternatively, you can use the `),Aa(814,`code`),bT(815,`useClass`),cf(),bT(816,` syntax:`),cf(),Aa(817,`app-copy-button`)(818,`pre`)(819,`code`,20),bT(820,`
BullModule.forRootAsync({
  useClass: BullConfigService,
});
`),cf()()(),Aa(821,`p`),bT(822,`The construction above instantiates `),Aa(823,`code`),bT(824,`BullConfigService`),cf(),bT(825,` inside `),Aa(826,`code`),bT(827,`BullModule`),cf(),bT(828,` and uses it to provide an options object by calling `),Aa(829,`code`),bT(830,`createSharedConfiguration()`),cf(),bT(831,`. This means `),Aa(832,`code`),bT(833,`BullConfigService`),cf(),bT(834,` has to implement the `),Aa(835,`code`),bT(836,`SharedBullConfigurationFactory`),cf(),bT(837,` interface, as shown below:`),cf(),Aa(838,`app-copy-button`)(839,`pre`)(840,`code`,20),bT(841,`
@Injectable()
class BullConfigService implements SharedBullConfigurationFactory {
  createSharedConfiguration(): BullRootModuleOptions {
    return {
      connection: {
        host: 'localhost',
        port: 6379,
      },
    };
  }
}
`),cf()()(),Aa(842,`p`),bT(843,`To reuse a provider imported from a different module instead of creating `),Aa(844,`code`),bT(845,`BullConfigService`),cf(),bT(846,` inside `),Aa(847,`code`),bT(848,`BullModule`),cf(),bT(849,`, use the `),Aa(850,`code`),bT(851,`useExisting`),cf(),bT(852,` syntax.`),cf(),Aa(853,`app-copy-button`)(854,`pre`)(855,`code`,20),bT(856,`
BullModule.forRootAsync({
  imports: [ConfigModule],
  useExisting: ConfigService,
});
`),cf()()(),Aa(857,`p`),bT(858,`This construction works the same as `),Aa(859,`code`),bT(860,`useClass`),cf(),bT(861,` with one critical difference: `),Aa(862,`code`),bT(863,`BullModule`),cf(),bT(864,` looks up imported modules to reuse an existing `),Aa(865,`code`),bT(866,`ConfigService`),cf(),bT(867,` instead of instantiating a new one.`),cf(),Aa(868,`p`),bT(869,`Likewise, to pass queue options asynchronously, use the `),Aa(870,`code`),bT(871,`registerQueueAsync()`),cf(),bT(872,` method. Specify the `),Aa(873,`code`),bT(874,`name`),cf(),bT(875,` attribute outside the factory function.`),cf(),Aa(876,`app-copy-button`)(877,`pre`)(878,`code`,20),bT(879,`
BullModule.registerQueueAsync({
  name: 'audio',
  useFactory: () => ({
    connection: {
      host: 'localhost',
      port: 6379,
    },
  }),
});
`),cf()()(),Aa(880,`h4`,58)(881,`span`),bT(882,`Manual registration`),cf()(),Aa(883,`p`),bT(884,`By default, `),Aa(885,`code`),bT(886,`BullModule`),cf(),bT(887,` automatically registers BullMQ components (queues, processors, and event listener services) in the `),Aa(888,`code`),bT(889,`onModuleInit`),cf(),bT(890,` lifecycle hook. In some cases, this behavior isn't what you want. To prevent automatic registration, enable `),Aa(891,`code`),bT(892,`manualRegistration`),cf(),bT(893,` in `),Aa(894,`code`),bT(895,`BullModule`),cf(),bT(896,`:`),cf(),Aa(897,`app-copy-button`)(898,`pre`)(899,`code`,20),bT(900,`
BullModule.forRoot({
  extraOptions: {
    manualRegistration: true,
  },
});
`),cf()()(),Aa(901,`p`),bT(902,`To register these components manually, inject `),Aa(903,`code`),bT(904,`BullRegistrar`),cf(),bT(905,` and call its `),Aa(906,`code`),bT(907,`register()`),cf(),bT(908,` method, ideally within the `),Aa(909,`code`),bT(910,`onModuleInit()`),cf(),bT(911,` or `),Aa(912,`code`),bT(913,`onApplicationBootstrap()`),cf(),bT(914,` lifecycle hook.`),cf(),Aa(915,`app-copy-button`)(916,`pre`)(917,`code`,20),bT(918,`
import { Injectable, OnModuleInit } from '@nestjs/common';
import { BullRegistrar } from '@nestjs/bullmq';

@Injectable()
export class AudioService implements OnModuleInit {
  constructor(private bullRegistrar: BullRegistrar) {}

  onModuleInit() {
    if (yourConditionHere) {
      this.bullRegistrar.register();
    }
  }
}
`),cf()()(),Aa(919,`p`),bT(920,`Until you call `),Aa(921,`code`),bT(922,`BullRegistrar#register()`),cf(),bT(923,`, no BullMQ components work, which means no jobs are processed.`),cf(),Aa(924,`h4`,59)(925,`span`),bT(926,`Bull installation`),cf()(),Aa(927,`blockquote`,28)(928,`strong`),bT(929,`Note`),cf(),bT(930,` If you use BullMQ, skip this section and the ones that follow.
`),cf(),Aa(931,`p`),bT(932,`To begin using Bull, install the required dependencies.`),cf(),Aa(933,`pre`)(934,`code`,17),bT(935,`
$ npm install --save @nestjs/bull bull
`),cf()(),Aa(936,`p`),bT(937,`Once the installation process is complete, import the `),Aa(938,`code`),bT(939,`BullModule`),cf(),bT(940,` into the root `),Aa(941,`code`),bT(942,`AppModule`),cf(),bT(943,`.`),cf(),Aa(944,`app-copy-button`,18)(945,`span`,19),bT(946),LT(947,`extension`),Wa(948,`app-tabs`,null,4),cf(),Aa(950,`pre`)(951,`code`,20),bT(952,`
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(953,`p`),bT(954,`The `),Aa(955,`code`),bT(956,`forRoot()`),cf(),bT(957,` method registers a `),Aa(958,`code`),bT(959,`bull`),cf(),bT(960,` configuration object that all queues registered in the application use (unless specified otherwise). A configuration object consists of the following properties (all optional):`),cf(),Aa(961,`ul`)(962,`li`)(963,`code`),bT(964,`limiter: RateLimiter`),cf(),bT(965,` - Options to control the rate at which the queue's jobs are processed. See `),Aa(966,`a`,60),bT(967,`RateLimiter`),cf(),bT(968,` for more information.`),cf(),Aa(969,`li`)(970,`code`),bT(971,`redis: RedisOpts`),cf(),bT(972,` - Options to configure the Redis connection. See `),Aa(973,`a`,60),bT(974,`RedisOpts`),cf(),bT(975,` for more information.`),cf(),Aa(976,`li`)(977,`code`),bT(978,`prefix: string`),cf(),bT(979,` - Prefix for all queue keys.`),cf(),Aa(980,`li`)(981,`code`),bT(982,`defaultJobOptions: JobOpts`),cf(),bT(983,` - Options to control the default settings for new jobs. See `),Aa(984,`a`,61),bT(985,`JobOpts`),cf(),bT(986,` for more information.`),cf(),Aa(987,`li`)(988,`code`),bT(989,`settings: AdvancedSettings`),cf(),bT(990,` - Advanced queue configuration settings. These should usually not be changed. See `),Aa(991,`a`,60),bT(992,`AdvancedSettings`),cf(),bT(993,` for more information.`),cf()(),Aa(994,`p`),bT(995,`These options are passed directly to the Bull `),Aa(996,`code`),bT(997,`Queue`),cf(),bT(998,` constructor. See the `),Aa(999,`a`,60),bT(1e3,`Queue section of the Bull reference`),cf(),bT(1001,` for details.`),cf(),Aa(1002,`p`),bT(1003,`To register a queue, import the `),Aa(1004,`code`),bT(1005,`BullModule.registerQueue()`),cf(),bT(1006,` dynamic module, as follows:`),cf(),Aa(1007,`app-copy-button`)(1008,`pre`)(1009,`code`,20),bT(1010,`
BullModule.registerQueue({
  name: 'audio',
});
`),cf()()(),Aa(1011,`blockquote`,28)(1012,`strong`),bT(1013,`Hint`),cf(),bT(1014,` Create multiple queues by passing multiple configuration objects (as separate arguments) to the `),Aa(1015,`code`),bT(1016,`registerQueue()`),cf(),bT(1017,` method.
`),cf(),Aa(1018,`p`),bT(1019,`The `),Aa(1020,`code`),bT(1021,`registerQueue()`),cf(),bT(1022,` method instantiates and/or registers queues. Queues are shared across modules and processes that connect to the same underlying Redis database with the same credentials. Each queue is identified by its `),Aa(1023,`code`),bT(1024,`name`),cf(),bT(1025,` property. The queue name serves both as an injection token (for injecting the queue into controllers and providers) and as an argument to decorators that associate consumer classes and listeners with queues.`),cf(),Aa(1026,`p`),bT(1027,`You can also override some of the preconfigured options for a specific queue, as follows:`),cf(),Aa(1028,`app-copy-button`)(1029,`pre`)(1030,`code`,20),bT(1031,`
BullModule.registerQueue({
  name: 'audio',
  redis: {
    port: 6380,
  },
});
`),cf()()(),Aa(1032,`p`),bT(1033,`Because jobs are persisted in Redis, each time a named queue is instantiated (e.g., when an app starts or restarts), it attempts to process any old jobs left over from a previous unfinished session.`),cf(),Aa(1034,`p`),bT(1035,`Each queue can have one or many producers, consumers, and listeners. Consumers retrieve jobs from the queue in a specific order: FIFO (the default), LIFO, or according to priorities. The `),Aa(1036,`a`,30),bT(1037,`job options`),cf(),bT(1038,` section explains how to control the processing order.`),cf(),Aa(1039,`p`),Wa(1040,`app-banner-enterprise`),cf(),Aa(1041,`h4`,62)(1042,`span`),bT(1043,`Named configurations`),cf()(),Aa(1044,`p`),bT(1045,`If your queues connect to multiple Redis instances, you can use a technique called `),Aa(1046,`strong`),bT(1047,`named configurations`),cf(),bT(1048,`. This feature lets you register several configurations under specified keys, which you can then refer to in the queue options.`),cf(),Aa(1049,`p`),bT(1050,`For example, assuming you have an additional Redis instance (apart from the default one) used by a few queues in your application, you can register its configuration as follows:`),cf(),Aa(1051,`app-copy-button`)(1052,`pre`)(1053,`code`,20),bT(1054,`
BullModule.forRoot('alternative-config', {
  redis: {
    port: 6381,
  },
});
`),cf()()(),Aa(1055,`p`),bT(1056,`In the example above, `),Aa(1057,`code`),bT(1058,`'alternative-config'`),cf(),bT(1059,` is a configuration key (it can be any string).`),cf(),Aa(1060,`p`),bT(1061,`You can now point to this configuration in the `),Aa(1062,`code`),bT(1063,`registerQueue()`),cf(),bT(1064,` options object:`),cf(),Aa(1065,`app-copy-button`)(1066,`pre`)(1067,`code`,20),bT(1068,`
BullModule.registerQueue({
  configKey: 'alternative-config',
  name: 'video',
});
`),cf()()(),Aa(1069,`h4`,63)(1070,`span`),bT(1071,`Producers`),cf()(),Aa(1072,`p`),bT(1073,`Job producers add jobs to queues. Producers are typically application services (Nest `),Aa(1074,`a`,34),bT(1075,`providers`),cf(),bT(1076,`). To add jobs to a queue, first inject the queue into the service:`),cf(),Aa(1077,`app-copy-button`)(1078,`pre`)(1079,`code`,20),bT(1080,`
import { Injectable } from '@nestjs/common';
import type { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AudioService {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}
}
`),cf()()(),Aa(1081,`blockquote`,28)(1082,`strong`),bT(1083,`Hint`),cf(),bT(1084,` The `),Aa(1085,`code`),bT(1086,`@InjectQueue()`),cf(),bT(1087,` decorator identifies the queue by its name, as provided in the `),Aa(1088,`code`),bT(1089,`registerQueue()`),cf(),bT(1090,` method call (e.g., `),Aa(1091,`code`),bT(1092,`'audio'`),cf(),bT(1093,`).
`),cf(),Aa(1094,`p`),bT(1095,`Now, add a job by calling the queue's `),Aa(1096,`code`),bT(1097,`add()`),cf(),bT(1098,` method, passing a user-defined data object. Job data must be serializable, because jobs are stored in Redis. The shape of the data is arbitrary; use it to represent the semantics of your job.`),cf(),Aa(1099,`app-copy-button`)(1100,`pre`)(1101,`code`,20),bT(1102,`
const job = await this.audioQueue.add({
  foo: 'bar',
});
`),cf()()(),Aa(1103,`h4`,64)(1104,`span`),bT(1105,`Named jobs`),cf()(),Aa(1106,`p`),bT(1107,`Jobs can have names. This lets you create specialized `),Aa(1108,`a`,12),bT(1109,`consumers`),cf(),bT(1110,` that only process jobs with a given name.`),cf(),Aa(1111,`app-copy-button`)(1112,`pre`)(1113,`code`,20),bT(1114,`
const job = await this.audioQueue.add('transcode', {
  foo: 'bar',
});
`),cf()()(),Aa(1115,`blockquote`,42)(1116,`strong`),bT(1117,`Warning`),cf(),bT(1118,` When using named jobs, you must create a processor for each unique name added to a queue, or the queue reports that a processor for the given job is missing. See `),Aa(1119,`a`,12),bT(1120,`consumers`),cf(),bT(1121,` for more information on consuming named jobs.
`),cf(),Aa(1122,`h4`,65)(1123,`span`),bT(1124,`Job options`),cf()(),Aa(1125,`p`),bT(1126,`Jobs can have additional options associated with them. Pass an options object after the job data in the `),Aa(1127,`code`),bT(1128,`Queue.add()`),cf(),bT(1129,` method. The job options are:`),cf(),Aa(1130,`ul`)(1131,`li`)(1132,`code`),bT(1133,`priority`),cf(),bT(1134,`: `),Aa(1135,`code`),bT(1136,`number`),cf(),bT(1137,` - Optional priority value. Ranges from 1 (highest priority) to MAX_INT (lowest priority). Using priorities has a slight impact on performance, so use them with caution.`),cf(),Aa(1138,`li`)(1139,`code`),bT(1140,`delay`),cf(),bT(1141,`: `),Aa(1142,`code`),bT(1143,`number`),cf(),bT(1144,` - Time (in milliseconds) to wait until this job can be processed. For accurate delays, both server and clients should have their clocks synchronized.`),cf(),Aa(1145,`li`)(1146,`code`),bT(1147,`attempts`),cf(),bT(1148,`: `),Aa(1149,`code`),bT(1150,`number`),cf(),bT(1151,` - The total number of attempts to try the job until it completes.`),cf(),Aa(1152,`li`)(1153,`code`),bT(1154,`repeat`),cf(),bT(1155,`: `),Aa(1156,`code`),bT(1157,`RepeatOpts`),cf(),bT(1158,` - Repeats the job according to a cron specification. See `),Aa(1159,`a`,61),bT(1160,`RepeatOpts`),cf(),bT(1161,`.`),cf(),Aa(1162,`li`)(1163,`code`),bT(1164,`backoff`),cf(),bT(1165,`: `),Aa(1166,`code`),bT(1167,`number | BackoffOpts`),cf(),bT(1168,` - Backoff setting for automatic retries if the job fails. See `),Aa(1169,`a`,61),bT(1170,`BackoffOpts`),cf(),bT(1171,`.`),cf(),Aa(1172,`li`)(1173,`code`),bT(1174,`lifo`),cf(),bT(1175,`: `),Aa(1176,`code`),bT(1177,`boolean`),cf(),bT(1178,` - If `),Aa(1179,`code`),bT(1180,`true`),cf(),bT(1181,`, adds the job to the right end of the queue instead of the left (default `),Aa(1182,`code`),bT(1183,`false`),cf(),bT(1184,`).`),cf(),Aa(1185,`li`)(1186,`code`),bT(1187,`timeout`),cf(),bT(1188,`: `),Aa(1189,`code`),bT(1190,`number`),cf(),bT(1191,` - The number of milliseconds after which the job fails with a timeout error.`),cf(),Aa(1192,`li`)(1193,`code`),bT(1194,`jobId`),cf(),bT(1195,`: `),Aa(1196,`code`),bT(1197,`number | string`),cf(),bT(1198,` - Overrides the job ID. By default, the job ID is a unique integer. If you use this option, it's up to you to ensure the ID is unique. A job with an ID that already exists is not added.`),cf(),Aa(1199,`li`)(1200,`code`),bT(1201,`removeOnComplete`),cf(),bT(1202,`: `),Aa(1203,`code`),bT(1204,`boolean | number`),cf(),bT(1205,` - If `),Aa(1206,`code`),bT(1207,`true`),cf(),bT(1208,`, removes the job when it successfully completes. A number specifies how many jobs to keep. By default, the job is kept in the completed set.`),cf(),Aa(1209,`li`)(1210,`code`),bT(1211,`removeOnFail`),cf(),bT(1212,`: `),Aa(1213,`code`),bT(1214,`boolean | number`),cf(),bT(1215,` - If `),Aa(1216,`code`),bT(1217,`true`),cf(),bT(1218,`, removes the job when it fails after all attempts. A number specifies how many jobs to keep. By default, the job is kept in the failed set.`),cf(),Aa(1219,`li`)(1220,`code`),bT(1221,`stackTraceLimit`),cf(),bT(1222,`: `),Aa(1223,`code`),bT(1224,`number`),cf(),bT(1225,` - Limits the number of stack trace lines recorded for a failed job.`),cf()(),Aa(1226,`p`),bT(1227,`Here are a few examples of customizing jobs with job options.`),cf(),Aa(1228,`p`),bT(1229,`To delay the start of a job, use the `),Aa(1230,`code`),bT(1231,`delay`),cf(),bT(1232,` property.`),cf(),Aa(1233,`app-copy-button`)(1234,`pre`)(1235,`code`,20),bT(1236,`
const job = await this.audioQueue.add(
  {
    foo: 'bar',
  },
  { delay: 3000 }, // 3 seconds delayed
);
`),cf()()(),Aa(1237,`p`),bT(1238,`To add a job to the right end of the queue (i.e., process it as `),Aa(1239,`strong`),bT(1240,`LIFO`),cf(),bT(1241,`, Last In First Out), set the `),Aa(1242,`code`),bT(1243,`lifo`),cf(),bT(1244,` property to `),Aa(1245,`code`),bT(1246,`true`),cf(),bT(1247,`.`),cf(),Aa(1248,`app-copy-button`)(1249,`pre`)(1250,`code`,20),bT(1251,`
const job = await this.audioQueue.add(
  {
    foo: 'bar',
  },
  { lifo: true },
);
`),cf()()(),Aa(1252,`p`),bT(1253,`To prioritize a job, use the `),Aa(1254,`code`),bT(1255,`priority`),cf(),bT(1256,` property.`),cf(),Aa(1257,`app-copy-button`)(1258,`pre`)(1259,`code`,20),bT(1260,`
const job = await this.audioQueue.add(
  {
    foo: 'bar',
  },
  { priority: 2 },
);
`),cf()()(),Aa(1261,`h4`,66)(1262,`span`),bT(1263,`Consumers`),cf()(),Aa(1264,`p`),bT(1265,`A consumer is a `),Aa(1266,`strong`),bT(1267,`class`),cf(),bT(1268,` defining methods that process jobs added to the queue, listen for events on the queue, or both. Declare a consumer class using the `),Aa(1269,`code`),bT(1270,`@Processor()`),cf(),bT(1271,` decorator as follows:`),cf(),Aa(1272,`app-copy-button`)(1273,`pre`)(1274,`code`,20),bT(1275,`
import { Processor } from '@nestjs/bull';

@Processor('audio')
export class AudioConsumer {}
`),cf()()(),Aa(1276,`blockquote`,28)(1277,`strong`),bT(1278,`Hint`),cf(),bT(1279,` Consumers must be registered as `),Aa(1280,`code`),bT(1281,`providers`),cf(),bT(1282,` so the `),Aa(1283,`code`),bT(1284,`@nestjs/bull`),cf(),bT(1285,` package can pick them up.
`),cf(),Aa(1286,`p`),bT(1287,`The decorator's string argument (e.g., `),Aa(1288,`code`),bT(1289,`'audio'`),cf(),bT(1290,`) is the name of the queue to associate with the class methods.`),cf(),Aa(1291,`p`),bT(1292,`Within a consumer class, declare job handlers by decorating handler methods with the `),Aa(1293,`code`),bT(1294,`@Process()`),cf(),bT(1295,` decorator.`),cf(),Aa(1296,`app-copy-button`)(1297,`pre`)(1298,`code`,20),bT(1299,`
import { Processor, Process } from '@nestjs/bull';
import type { Job } from 'bull';

@Processor('audio')
export class AudioConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      await doSomething(job.data);
      progress += 1;
      await job.progress(progress);
    }
    return {};
  }
}
`),cf()()(),Aa(1300,`p`),bT(1301,`The decorated method (e.g., `),Aa(1302,`code`),bT(1303,`transcode()`),cf(),bT(1304,`) is called whenever the worker is idle and there are jobs to process in the queue. It receives the `),Aa(1305,`code`),bT(1306,`job`),cf(),bT(1307,` object as its only argument. The value it returns is stored in the job object and can be accessed later, for example, in a listener for the `),Aa(1308,`code`),bT(1309,`completed`),cf(),bT(1310,` event.`),cf(),Aa(1311,`p`)(1312,`code`),bT(1313,`Job`),cf(),bT(1314,` objects have multiple methods that allow you to interact with their state. For example, the code above uses the `),Aa(1315,`code`),bT(1316,`progress()`),cf(),bT(1317,` method to update the job's progress. See the `),Aa(1318,`a`,67),bT(1319,`Job section of the Bull reference`),cf(),bT(1320,` for the complete `),Aa(1321,`code`),bT(1322,`Job`),cf(),bT(1323,` API.`),cf(),Aa(1324,`p`),bT(1325,`You can designate that a job handler method handles `),Aa(1326,`strong`),bT(1327,`only`),cf(),bT(1328,` jobs of a certain type (jobs with a specific `),Aa(1329,`code`),bT(1330,`name`),cf(),bT(1331,`) by passing that `),Aa(1332,`code`),bT(1333,`name`),cf(),bT(1334,` to the `),Aa(1335,`code`),bT(1336,`@Process()`),cf(),bT(1337,` decorator, as shown below. A consumer class can have multiple `),Aa(1338,`code`),bT(1339,`@Process()`),cf(),bT(1340,` handlers, one for each job type (`),Aa(1341,`code`),bT(1342,`name`),cf(),bT(1343,`). When you use named jobs, make sure there is a handler for each name.`),cf(),Aa(1344,`app-copy-button`)(1345,`pre`)(1346,`code`,20),bT(1347,`
@Process('transcode')
async transcode(job: Job<unknown>) { ... }
`),cf()()(),Aa(1348,`blockquote`,42)(1349,`strong`),bT(1350,`Warning`),cf(),bT(1351,` When you define multiple consumers for the same queue, the `),Aa(1352,`code`),bT(1353,`concurrency`),cf(),bT(1354,` option in `),Aa(1355,`code`),bT(1356),cf(),bT(1357,` doesn't take effect. The minimum `),Aa(1358,`code`),bT(1359,`concurrency`),cf(),bT(1360,` matches the number of consumers defined. This applies even if the `),Aa(1361,`code`),bT(1362,`@Process()`),cf(),bT(1363,` handlers use different names to handle named jobs.
`),cf(),Aa(1364,`h4`,68)(1365,`span`),bT(1366,`Request-scoped consumers`),cf()(),Aa(1367,`p`),bT(1368,`When a consumer is flagged as request-scoped (see `),Aa(1369,`a`,45),bT(1370,`injection scopes`),cf(),bT(1371,`), a new instance of the class is created exclusively for each job. The instance is garbage-collected after the job completes.`),cf(),Aa(1372,`app-copy-button`)(1373,`pre`)(1374,`code`,20),bT(1375,`
@Processor({
  name: 'audio',
  scope: Scope.REQUEST,
})
`),cf()()(),Aa(1376,`p`),bT(1377,`Because request-scoped consumer classes are instantiated dynamically and scoped to a single job, you can inject the current job through the constructor using the `),Aa(1378,`code`),bT(1379,`JOB_REF`),cf(),bT(1380,` token.`),cf(),Aa(1381,`app-copy-button`)(1382,`pre`)(1383,`code`,20),bT(1384,`
constructor(@Inject(JOB_REF) jobRef: Job) {
  console.log(jobRef);
}
`),cf()()(),Aa(1385,`blockquote`,28)(1386,`strong`),bT(1387,`Hint`),cf(),bT(1388,` The `),Aa(1389,`code`),bT(1390,`JOB_REF`),cf(),bT(1391,` token is imported from the `),Aa(1392,`code`),bT(1393,`@nestjs/bull`),cf(),bT(1394,` package.
`),cf(),Aa(1395,`h4`,69)(1396,`span`),bT(1397,`Event listeners`),cf()(),Aa(1398,`p`),bT(1399,`Bull emits a set of events when queue and/or job state changes occur. The `),Aa(1400,`code`),bT(1401,`@nestjs/bull`),cf(),bT(1402,` package exports a set of decorators that let you subscribe to a core set of standard events.`),cf(),Aa(1403,`p`),bT(1404,`Event listeners must be declared within a `),Aa(1405,`a`,12),bT(1406,`consumer`),cf(),bT(1407,` class (i.e., within a class decorated with the `),Aa(1408,`code`),bT(1409,`@Processor()`),cf(),bT(1410,` decorator). To listen for an event, use one of the decorators in the table below to declare a handler for the event. For example, to listen to the event emitted when a job enters the active state in the `),Aa(1411,`code`),bT(1412,`audio`),cf(),bT(1413,` queue, use the following construct:`),cf(),Aa(1414,`app-copy-button`)(1415,`pre`)(1416,`code`,20),bT(1417,`
import { Processor, Process, OnQueueActive } from '@nestjs/bull';
import type { Job } from 'bull';

@Processor('audio')
export class AudioConsumer {

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      \`Processing job \${job.id} of type \${job.name} with data \${job.data}...\`,
    );
  }
  ...
`),cf()()(),Aa(1418,`p`),bT(1419,`Because Bull operates in a distributed (multi-node) environment, it defines the concept of event locality. Events may be triggered either entirely within a single process, or on shared queues from different processes. A `),Aa(1420,`strong`),bT(1421,`local`),cf(),bT(1422,` event is produced when an action or state change is triggered on a queue in the local process. In other words, when your event producers and consumers are local to a single process, all events happening on queues are local.`),cf(),Aa(1423,`p`),bT(1424,`When a queue is shared across multiple processes, `),Aa(1425,`strong`),bT(1426,`global`),cf(),bT(1427,` events come into play. For a listener in one process to receive an event notification triggered by another process, it must register for a global event.`),cf(),Aa(1428,`p`),bT(1429,`Event handlers are invoked whenever their corresponding event is emitted. Each handler is called with the signature shown in the table below, which provides access to information relevant to the event. One key difference between local and global event handler signatures is discussed below the table.`),cf(),Aa(1430,`table`)(1431,`tr`)(1432,`th`),bT(1433,`Local event listeners`),cf(),Aa(1434,`th`),bT(1435,`Global event listeners`),cf(),Aa(1436,`th`),bT(1437,`Handler method signature / When fired`),cf()(),Aa(1438,`tr`)(1439,`td`)(1440,`code`),bT(1441,`@OnQueueError()`),cf()(),Aa(1442,`td`)(1443,`code`),bT(1444,`@OnGlobalQueueError()`),cf()(),Aa(1445,`td`)(1446,`code`),bT(1447,`handler(error: Error)`),cf(),bT(1448,` - An error occurred. `),Aa(1449,`code`),bT(1450,`error`),cf(),bT(1451,` contains the triggering error.`),cf()(),Aa(1452,`tr`)(1453,`td`)(1454,`code`),bT(1455,`@OnQueueWaiting()`),cf()(),Aa(1456,`td`)(1457,`code`),bT(1458,`@OnGlobalQueueWaiting()`),cf()(),Aa(1459,`td`)(1460,`code`),bT(1461,`handler(jobId: number | string)`),cf(),bT(1462,` - A job is waiting to be processed as soon as a worker is idle. `),Aa(1463,`code`),bT(1464,`jobId`),cf(),bT(1465,` contains the ID of the job that has entered this state.`),cf()(),Aa(1466,`tr`)(1467,`td`)(1468,`code`),bT(1469,`@OnQueueActive()`),cf()(),Aa(1470,`td`)(1471,`code`),bT(1472,`@OnGlobalQueueActive()`),cf()(),Aa(1473,`td`)(1474,`code`),bT(1475,`handler(job: Job)`),cf(),bT(1476,` - Job `),Aa(1477,`code`),bT(1478,`job`),cf(),bT(1479,` has started.`),cf()(),Aa(1480,`tr`)(1481,`td`)(1482,`code`),bT(1483,`@OnQueueStalled()`),cf()(),Aa(1484,`td`)(1485,`code`),bT(1486,`@OnGlobalQueueStalled()`),cf()(),Aa(1487,`td`)(1488,`code`),bT(1489,`handler(job: Job)`),cf(),bT(1490,` - Job `),Aa(1491,`code`),bT(1492,`job`),cf(),bT(1493,` has been marked as stalled. This is useful for debugging job workers that crash or pause the event loop.`),cf()(),Aa(1494,`tr`)(1495,`td`)(1496,`code`),bT(1497,`@OnQueueProgress()`),cf()(),Aa(1498,`td`)(1499,`code`),bT(1500,`@OnGlobalQueueProgress()`),cf()(),Aa(1501,`td`)(1502,`code`),bT(1503,`handler(job: Job, progress: number)`),cf(),bT(1504,` - Job `),Aa(1505,`code`),bT(1506,`job`),cf(),bT(1507,`'s progress was updated to value `),Aa(1508,`code`),bT(1509,`progress`),cf(),bT(1510,`.`),cf()(),Aa(1511,`tr`)(1512,`td`)(1513,`code`),bT(1514,`@OnQueueCompleted()`),cf()(),Aa(1515,`td`)(1516,`code`),bT(1517,`@OnGlobalQueueCompleted()`),cf()(),Aa(1518,`td`)(1519,`code`),bT(1520,`handler(job: Job, result: any)`),cf(),bT(1521,` - Job `),Aa(1522,`code`),bT(1523,`job`),cf(),bT(1524,` successfully completed with a result `),Aa(1525,`code`),bT(1526,`result`),cf(),bT(1527,`.`),cf()(),Aa(1528,`tr`)(1529,`td`)(1530,`code`),bT(1531,`@OnQueueFailed()`),cf()(),Aa(1532,`td`)(1533,`code`),bT(1534,`@OnGlobalQueueFailed()`),cf()(),Aa(1535,`td`)(1536,`code`),bT(1537,`handler(job: Job, err: Error)`),cf(),bT(1538,` - Job `),Aa(1539,`code`),bT(1540,`job`),cf(),bT(1541,` failed with reason `),Aa(1542,`code`),bT(1543,`err`),cf(),bT(1544,`.`),cf()(),Aa(1545,`tr`)(1546,`td`)(1547,`code`),bT(1548,`@OnQueuePaused()`),cf()(),Aa(1549,`td`)(1550,`code`),bT(1551,`@OnGlobalQueuePaused()`),cf()(),Aa(1552,`td`)(1553,`code`),bT(1554,`handler()`),cf(),bT(1555,` - The queue has been paused.`),cf()(),Aa(1556,`tr`)(1557,`td`)(1558,`code`),bT(1559,`@OnQueueResumed()`),cf()(),Aa(1560,`td`)(1561,`code`),bT(1562,`@OnGlobalQueueResumed()`),cf()(),Aa(1563,`td`)(1564,`code`),bT(1565,`handler()`),cf(),bT(1566,` - The queue has been resumed.`),cf()(),Aa(1567,`tr`)(1568,`td`)(1569,`code`),bT(1570,`@OnQueueCleaned()`),cf()(),Aa(1571,`td`)(1572,`code`),bT(1573,`@OnGlobalQueueCleaned()`),cf()(),Aa(1574,`td`)(1575,`code`),bT(1576,`handler(jobs: Job[], type: string)`),cf(),bT(1577,` - Old jobs have been cleaned from the queue. `),Aa(1578,`code`),bT(1579,`jobs`),cf(),bT(1580,` is an array of cleaned jobs, and `),Aa(1581,`code`),bT(1582,`type`),cf(),bT(1583,` is the type of jobs cleaned.`),cf()(),Aa(1584,`tr`)(1585,`td`)(1586,`code`),bT(1587,`@OnQueueDrained()`),cf()(),Aa(1588,`td`)(1589,`code`),bT(1590,`@OnGlobalQueueDrained()`),cf()(),Aa(1591,`td`)(1592,`code`),bT(1593,`handler()`),cf(),bT(1594,` - Emitted whenever the queue has processed all the waiting jobs (even if some delayed jobs are not yet processed).`),cf()(),Aa(1595,`tr`)(1596,`td`)(1597,`code`),bT(1598,`@OnQueueRemoved()`),cf()(),Aa(1599,`td`)(1600,`code`),bT(1601,`@OnGlobalQueueRemoved()`),cf()(),Aa(1602,`td`)(1603,`code`),bT(1604,`handler(job: Job)`),cf(),bT(1605,` - Job `),Aa(1606,`code`),bT(1607,`job`),cf(),bT(1608,` was successfully removed.`),cf()()(),Aa(1609,`p`),bT(1610,`When listening for global events, the method signatures can differ slightly from their local counterparts. Specifically, any handler that receives a `),Aa(1611,`code`),bT(1612,`job`),cf(),bT(1613,` object in the local version receives a `),Aa(1614,`code`),bT(1615,`jobId`),cf(),bT(1616,` (`),Aa(1617,`code`),bT(1618,`number | string`),cf(),bT(1619,`) in the global version instead. To get a reference to the actual `),Aa(1620,`code`),bT(1621,`job`),cf(),bT(1622,` object in such a case, use the `),Aa(1623,`code`),bT(1624,`Queue#getJob()`),cf(),bT(1625,` method. This call returns a promise, so declare the handler `),Aa(1626,`code`),bT(1627,`async`),cf(),bT(1628,` and await it. For example:`),cf(),Aa(1629,`app-copy-button`)(1630,`pre`)(1631,`code`,20),bT(1632,`
@OnGlobalQueueCompleted()
async onGlobalCompleted(jobId: number, result: any) {
  const job = await this.immediateQueue.getJob(jobId);
  console.log('(Global) on completed: job ', job.id, ' -> result: ', result);
}
`),cf()()(),Aa(1633,`blockquote`,28)(1634,`strong`),bT(1635,`Hint`),cf(),bT(1636,` To access the `),Aa(1637,`code`),bT(1638,`Queue`),cf(),bT(1639,` object (to make a `),Aa(1640,`code`),bT(1641,`getJob()`),cf(),bT(1642,` call), you must inject it. The queue must also be registered in the module where you inject it.
`),cf(),Aa(1643,`p`),bT(1644,`In addition to the specific event listener decorators, you can use the generic `),Aa(1645,`code`),bT(1646,`@OnQueueEvent()`),cf(),bT(1647,` decorator in combination with either the `),Aa(1648,`code`),bT(1649,`BullQueueEvents`),cf(),bT(1650,` or `),Aa(1651,`code`),bT(1652,`BullQueueGlobalEvents`),cf(),bT(1653,` enum. See the `),Aa(1654,`a`,70),bT(1655,`Events section of the Bull reference`),cf(),bT(1656,` to learn more about events.`),cf(),Aa(1657,`h4`,71)(1658,`span`),bT(1659,`Queue management`),cf()(),Aa(1660,`p`),bT(1661,`Queues have an API for management functions such as pausing and resuming, and retrieving the count of jobs in various states. See the `),Aa(1662,`a`,60),bT(1663,`Queue section of the Bull reference`),cf(),bT(1664,` for the full API. Invoke these methods directly on the `),Aa(1665,`code`),bT(1666,`Queue`),cf(),bT(1667,` object, as shown in the pause and resume examples below.`),cf(),Aa(1668,`p`),bT(1669,`Pause a queue with the `),Aa(1670,`code`),bT(1671,`pause()`),cf(),bT(1672,` method. A paused queue doesn't process new jobs until it's resumed, but jobs already being processed continue until they finish.`),cf(),Aa(1673,`app-copy-button`)(1674,`pre`)(1675,`code`,20),bT(1676,`
await audioQueue.pause();
`),cf()()(),Aa(1677,`p`),bT(1678,`To resume a paused queue, use the `),Aa(1679,`code`),bT(1680,`resume()`),cf(),bT(1681,` method, as follows:`),cf(),Aa(1682,`app-copy-button`)(1683,`pre`)(1684,`code`,20),bT(1685,`
await audioQueue.resume();
`),cf()()(),Aa(1686,`h4`,72)(1687,`span`),bT(1688,`Separate processes`),cf()(),Aa(1689,`p`),bT(1690,`Job handlers can also run in a separate (forked) process (see `),Aa(1691,`a`,73),bT(1692,`Separate processes`),cf(),bT(1693,` in the Bull documentation). This has several advantages:`),cf(),Aa(1694,`ul`)(1695,`li`),bT(1696,`The process is sandboxed, so if it crashes, the worker isn't affected.`),cf(),Aa(1697,`li`),bT(1698,`You can run blocking code without affecting the queue (jobs don't stall).`),cf(),Aa(1699,`li`),bT(1700,`Better utilization of multi-core CPUs.`),cf(),Aa(1701,`li`),bT(1702,`Fewer connections to Redis.`),cf()(),Aa(1703,`app-copy-button`,18)(1704,`span`,19),bT(1705),LT(1706,`extension`),Wa(1707,`app-tabs`,null,5),cf(),Aa(1709,`pre`)(1710,`code`,74),bT(1711,`
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { join } from 'node:path';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
      processors: [join(import.meta.dirname, 'processor.js')],
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(1712,`p`),bT(1713,`Because your function runs in a forked process, dependency injection (and the IoC container) isn't available. Your processor function must contain (or create) all instances of the external dependencies it needs.`),cf(),Aa(1714,`app-copy-button`,18)(1715,`span`,19),bT(1716),LT(1717,`extension`),Wa(1718,`app-tabs`,null,6),cf(),Aa(1720,`pre`)(1721,`code`,74),bT(1722,`
import { Job, DoneCallback } from 'bull';

export default function (job: Job, cb: DoneCallback) {
  console.log(\`[\${process.pid}] \${JSON.stringify(job.data)}\`);
  cb(null, 'It works');
}
`),cf()()(),Aa(1723,`h4`,75)(1724,`span`),bT(1725,`Async configuration`),cf()(),Aa(1726,`p`),bT(1727,`You may want to pass `),Aa(1728,`code`),bT(1729,`bull`),cf(),bT(1730,` options asynchronously instead of statically. In this case, use the `),Aa(1731,`code`),bT(1732,`forRootAsync()`),cf(),bT(1733,` method, which provides several ways to handle async configuration.`),cf(),Aa(1734,`p`),bT(1735,`One approach is to use a factory function:`),cf(),Aa(1736,`app-copy-button`)(1737,`pre`)(1738,`code`,20),bT(1739,`
BullModule.forRootAsync({
  useFactory: () => ({
    redis: {
      host: 'localhost',
      port: 6379,
    },
  }),
});
`),cf()()(),Aa(1740,`p`),bT(1741,`The factory behaves like any other `),Aa(1742,`a`,57),bT(1743,`asynchronous provider`),cf(),bT(1744,` (e.g., it can be `),Aa(1745,`code`),bT(1746,`async`),cf(),bT(1747,` and can inject dependencies through `),Aa(1748,`code`),bT(1749,`inject`),cf(),bT(1750,`).`),cf(),Aa(1751,`app-copy-button`)(1752,`pre`)(1753,`code`,20),bT(1754,`
BullModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    redis: {
      host: configService.get('QUEUE_HOST'),
      port: configService.get('QUEUE_PORT'),
    },
  }),
  inject: [ConfigService],
});
`),cf()()(),Aa(1755,`p`),bT(1756,`Alternatively, you can use the `),Aa(1757,`code`),bT(1758,`useClass`),cf(),bT(1759,` syntax:`),cf(),Aa(1760,`app-copy-button`)(1761,`pre`)(1762,`code`,20),bT(1763,`
BullModule.forRootAsync({
  useClass: BullConfigService,
});
`),cf()()(),Aa(1764,`p`),bT(1765,`The construction above instantiates `),Aa(1766,`code`),bT(1767,`BullConfigService`),cf(),bT(1768,` inside `),Aa(1769,`code`),bT(1770,`BullModule`),cf(),bT(1771,` and uses it to provide an options object by calling `),Aa(1772,`code`),bT(1773,`createSharedConfiguration()`),cf(),bT(1774,`. This means `),Aa(1775,`code`),bT(1776,`BullConfigService`),cf(),bT(1777,` has to implement the `),Aa(1778,`code`),bT(1779,`SharedBullConfigurationFactory`),cf(),bT(1780,` interface, as shown below:`),cf(),Aa(1781,`app-copy-button`)(1782,`pre`)(1783,`code`,20),bT(1784,`
@Injectable()
class BullConfigService implements SharedBullConfigurationFactory {
  createSharedConfiguration(): BullRootModuleOptions {
    return {
      redis: {
        host: 'localhost',
        port: 6379,
      },
    };
  }
}
`),cf()()(),Aa(1785,`p`),bT(1786,`To reuse a provider imported from a different module instead of creating `),Aa(1787,`code`),bT(1788,`BullConfigService`),cf(),bT(1789,` inside `),Aa(1790,`code`),bT(1791,`BullModule`),cf(),bT(1792,`, use the `),Aa(1793,`code`),bT(1794,`useExisting`),cf(),bT(1795,` syntax.`),cf(),Aa(1796,`app-copy-button`)(1797,`pre`)(1798,`code`,20),bT(1799,`
BullModule.forRootAsync({
  imports: [ConfigModule],
  useExisting: ConfigService,
});
`),cf()()(),Aa(1800,`p`),bT(1801,`This construction works the same as `),Aa(1802,`code`),bT(1803,`useClass`),cf(),bT(1804,` with one critical difference: `),Aa(1805,`code`),bT(1806,`BullModule`),cf(),bT(1807,` looks up imported modules to reuse an existing `),Aa(1808,`code`),bT(1809,`ConfigService`),cf(),bT(1810,` instead of instantiating a new one.`),cf(),Aa(1811,`p`),bT(1812,`Likewise, to pass queue options asynchronously, use the `),Aa(1813,`code`),bT(1814,`registerQueueAsync()`),cf(),bT(1815,` method. Specify the `),Aa(1816,`code`),bT(1817,`name`),cf(),bT(1818,` attribute outside the factory function.`),cf(),Aa(1819,`app-copy-button`)(1820,`pre`)(1821,`code`,20),bT(1822,`
BullModule.registerQueueAsync({
  name: 'audio',
  useFactory: () => ({
    redis: {
      host: 'localhost',
      port: 6379,
    },
  }),
});
`),cf()()(),Aa(1823,`h4`,76)(1824,`span`),bT(1825,`Example`),cf()(),Aa(1826,`p`),bT(1827,`A working example is available in the `),Aa(1828,`a`,77),bT(1829,`26-queues sample`),cf(),bT(1830,`.`),cf()(),Aa(1831,`a`,78),Wa(1832,`i`,79),Aa(1833,`span`),bT(1834,`Edit on GitHub`),cf()()()),c&2){let y=tT(71),k=tT(252),T=tT(769),j=tT(949),A=tT(1708),I=tT(1719);zC(68),hf(` `,jT(69,8,`app.module`,y.isJsActive),`
`),zC(181),hf(` `,jT(250,11,`app.module`,k.isJsActive),`
`),zC(517),hf(` `,jT(767,14,`app.module`,T.isJsActive),`
`),zC(180),hf(` `,jT(947,17,`app.module`,j.isJsActive),`
`),zC(410),Ky(`@Process(`,`{`,` concurrency: 1 `,`}`,`)`),zC(349),hf(` `,jT(1706,20,`app.module`,A.isJsActive),`
`),zC(11),hf(` `,jT(1717,23,`processor`,I.isJsActive),`
`)}},dependencies:[Lt,ln,u,l$2,Jc,g],encapsulation:2})}return d})();var be=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-serialization`]],features:[xy],decls:477,vars:18,consts:[[`contentReference`,``],[`app35e7dcc1cbdd69eddff15f04e73c1a7f9d03c5f5`,``],[`app46950c938c80d6a71c027bc43bcbc700a34abffd`,``],[`appc04a61b2855bec630360bc176c6a1cbb71a09095`,``],[`app946df3e876c587dccf808a4111a8eba8925db021`,``],[1,`content`],[1,`content-inner`],[`id`,`serialization`],[`appAnchor`,``,`id`,`overview`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/typestack/class-transformer`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://zod.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://valibot.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://arktype.io/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev/`],[`href`,`#schema-based-serialization`],[1,`info`],[`href`,`/http/file-upload#streaming-files`],[`appAnchor`,``,`id`,`exclude-properties`],[1,`language-typescript`],[1,`warning`],[`href`,`#transform-plain-objects`],[1,`language-json`],[`href`,`/interceptors#binding-interceptors`],[`appAnchor`,``,`id`,`expose-properties`],[`appAnchor`,``,`id`,`transform`],[`appAnchor`,``,`id`,`pass-options`],[`appAnchor`,``,`id`,`transform-plain-objects`],[`appAnchor`,``,`id`,`schema-based-serialization`],[1,`with-heading`],[1,`filename`],[`appAnchor`,``,`id`,`transforming-responses-with-schemas`],[`appAnchor`,``,`id`,`binding-the-schema-serializer`],[`appAnchor`,``,`id`,`serialization-errors`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/36-valibot-serializer`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/21-serializer`],[`appAnchor`,``,`id`,`websockets-and-microservices`],[`appAnchor`,``,`id`,`learn-more`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/serialization.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,5,0)(2,`div`,6)(3,`h3`,7),bT(4,`Serialization`),cf(),Aa(5,`p`),bT(6,`Serialization happens before objects are returned in a network response. It is the right place to define rules for transforming and sanitizing the data sent to the client. For example, sensitive data such as passwords must always be excluded from the response, and some properties may need further transformation, such as returning only a subset of an entity's properties. Performing these transformations manually in every handler is tedious and error-prone, and makes it hard to be sure that every case is covered.`),cf(),Aa(7,`h4`,8)(8,`span`),bT(9,`Overview`),cf()(),Aa(10,`p`),bT(11,`Nest provides two built-in interceptors that apply these rules declaratively:`),cf(),Aa(12,`ul`)(13,`li`)(14,`p`)(15,`code`),bT(16,`ClassSerializerInterceptor`),cf(),bT(17,` uses the `),Aa(18,`a`,9),bT(19,`class-transformer`),cf(),bT(20,` package. It takes the value returned by a route handler and applies the `),Aa(21,`code`),bT(22,`instanceToPlain()`),cf(),bT(23,` function to it, which honors the `),Aa(24,`code`),bT(25,`class-transformer`),cf(),bT(26,` decorators declared on the entity or DTO class. The first part of this chapter covers this approach.`),cf()(),Aa(27,`li`)(28,`p`)(29,`code`),bT(30,`StandardSchemaSerializerInterceptor`),cf(),bT(31,` validates and transforms responses with a schema written in `),Aa(32,`a`,10),bT(33,`Zod`),cf(),bT(34,`, `),Aa(35,`a`,11),bT(36,`Valibot`),cf(),bT(37,`, `),Aa(38,`a`,12),bT(39,`ArkType`),cf(),bT(40,`, or any other `),Aa(41,`a`,13),bT(42,`Standard Schema`),cf(),bT(43,` compatible library. See `),Aa(44,`a`,14),bT(45,`Schema-based serialization`),cf(),bT(46,`.`),cf()()(),Aa(47,`blockquote`,15)(48,`strong`),bT(49,`Hint`),cf(),bT(50,` Neither interceptor serializes `),Aa(51,`a`,16),bT(52,`StreamableFile`),cf(),bT(53,` responses.
`),cf(),Aa(54,`h4`,17)(55,`span`),bT(56,`Exclude properties`),cf()(),Aa(57,`p`),bT(58,`Suppose you want to exclude the `),Aa(59,`code`),bT(60,`password`),cf(),bT(61,` property of a user entity from every response. Annotate the entity as follows:`),cf(),Aa(62,`app-copy-button`)(63,`pre`)(64,`code`,18),bT(65,`
import { Exclude } from 'class-transformer';

export class UserEntity {
  id: number;
  firstName: string;
  lastName: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
`),cf()()(),Aa(66,`p`),bT(67,`Now consider a controller with a route handler that returns an instance of this class:`),cf(),Aa(68,`app-copy-button`)(69,`pre`)(70,`code`,18),bT(71,`
@UseInterceptors(ClassSerializerInterceptor)
@Get()
findOne(): UserEntity {
  return new UserEntity({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    password: 'password',
  });
}
`),cf()()(),Aa(72,`blockquote`,19)(73,`strong`),bT(74,`Warning`),cf(),bT(75,` The handler must return an instance of the class. A plain JavaScript object, such as `),Aa(76,`code`),bT(77),cf(),bT(78,`, is not serialized correctly. To serialize plain objects, see `),Aa(79,`a`,20),bT(80,`Transform plain objects`),cf(),bT(81,`.
`),cf(),Aa(82,`blockquote`,15)(83,`strong`),bT(84,`Hint`),cf(),bT(85,` The `),Aa(86,`code`),bT(87,`ClassSerializerInterceptor`),cf(),bT(88,` is imported from `),Aa(89,`code`),bT(90,`@nestjs/common`),cf(),bT(91,`.
`),cf(),Aa(92,`p`),bT(93,`When this endpoint is requested, the client receives the following response:`),cf(),Aa(94,`pre`)(95,`code`,21),bT(96,`
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe"
}
`),cf()(),Aa(97,`p`),bT(98,`The interceptor can also be bound application-wide (see `),Aa(99,`a`,22),bT(100,`Binding interceptors`),cf(),bT(101,`). Together, the interceptor and the entity class declaration ensure that `),Aa(102,`strong`),bT(103,`every`),cf(),bT(104,` route handler that returns a `),Aa(105,`code`),bT(106,`UserEntity`),cf(),bT(107,` omits the `),Aa(108,`code`),bT(109,`password`),cf(),bT(110,` property, which enforces this rule in one place.`),cf(),Aa(111,`h4`,23)(112,`span`),bT(113,`Expose properties`),cf()(),Aa(114,`p`),bT(115,`Use the `),Aa(116,`code`),bT(117,`@Expose()`),cf(),bT(118,` decorator to provide alias names for properties, or to compute a property value with a function (similar to a `),Aa(119,`strong`),bT(120,`getter`),cf(),bT(121,`), as shown below.`),cf(),Aa(122,`app-copy-button`)(123,`pre`)(124,`code`,18),bT(125,`
@Expose()
get fullName(): string {
  return \`\${this.firstName} \${this.lastName}\`;
}
`),cf()()(),Aa(126,`h4`,24)(127,`span`),bT(128,`Transform`),cf()(),Aa(129,`p`),bT(130,`Use the `),Aa(131,`code`),bT(132,`@Transform()`),cf(),bT(133,` decorator for additional data transformation. For example, the following construct returns the `),Aa(134,`code`),bT(135,`name`),cf(),bT(136,` property of the `),Aa(137,`code`),bT(138,`RoleEntity`),cf(),bT(139,` instead of the whole object.`),cf(),Aa(140,`app-copy-button`)(141,`pre`)(142,`code`,18),bT(143,`
@Transform(({ value }) => value.name)
role: RoleEntity;
`),cf()()(),Aa(144,`h4`,25)(145,`span`),bT(146,`Pass options`),cf()(),Aa(147,`p`),bT(148,`To override the default behavior of the transformation functions, pass options to the `),Aa(149,`code`),bT(150,`@SerializeOptions()`),cf(),bT(151,` decorator.`),cf(),Aa(152,`app-copy-button`)(153,`pre`)(154,`code`,18),bT(155,`
@SerializeOptions({
  excludePrefixes: ['_'],
})
@Get()
findOne(): UserEntity {
  return new UserEntity();
}
`),cf()()(),Aa(156,`blockquote`,15)(157,`strong`),bT(158,`Hint`),cf(),bT(159,` The `),Aa(160,`code`),bT(161,`@SerializeOptions()`),cf(),bT(162,` decorator is imported from `),Aa(163,`code`),bT(164,`@nestjs/common`),cf(),bT(165,`.
`),cf(),Aa(166,`p`),bT(167,`Options passed to `),Aa(168,`code`),bT(169,`@SerializeOptions()`),cf(),bT(170,` are forwarded as the second argument of the underlying `),Aa(171,`code`),bT(172,`instanceToPlain()`),cf(),bT(173,` function. In this example, all properties that begin with the `),Aa(174,`code`),bT(175,`_`),cf(),bT(176,` prefix are excluded.`),cf(),Aa(177,`h4`,26)(178,`span`),bT(179,`Transform plain objects`),cf()(),Aa(180,`p`),bT(181,`The `),Aa(182,`code`),bT(183,`type`),cf(),bT(184,` option of `),Aa(185,`code`),bT(186,`@SerializeOptions()`),cf(),bT(187,` converts responses into instances of the specified class before they are serialized, so the class's `),Aa(188,`code`),bT(189,`class-transformer`),cf(),bT(190,` decorators apply even when the handler returns a plain object. This removes the need to instantiate the class or call `),Aa(191,`code`),bT(192,`plainToInstance()`),cf(),bT(193,` in every handler.`),cf(),Aa(194,`p`),bT(195,`In the example below, both conditional branches return plain JavaScript objects, which are converted into `),Aa(196,`code`),bT(197,`UserEntity`),cf(),bT(198,` instances with the relevant decorators applied:`),cf(),Aa(199,`app-copy-button`)(200,`pre`)(201,`code`,18),bT(202,`
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({ type: UserEntity })
@Get()
findOne(@Query('id', ParseIntPipe) id: number): UserEntity {
  if (id === 1) {
    return {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      password: 'password',
    };
  }

  return {
    id: 2,
    firstName: 'Kamil',
    lastName: 'Mysliwiec',
    password: 'password2',
  };
}
`),cf()()(),Aa(203,`blockquote`,15)(204,`strong`),bT(205,`Hint`),cf(),bT(206,` Declaring the handler's return type lets TypeScript check that the returned plain object matches the shape of the DTO or entity. The `),Aa(207,`code`),bT(208,`plainToInstance()`),cf(),bT(209,` function doesn't provide this type checking, so a mismatched object can go unnoticed.
`),cf(),Aa(210,`blockquote`,19)(211,`strong`),bT(212,`Warning`),cf(),bT(213,` The response is shaped by the `),Aa(214,`code`),bT(215,`type`),cf(),bT(216,` class, not by the class of the returned value. A value that isn't an instance of the `),Aa(217,`code`),bT(218,`type`),cf(),bT(219,` class, such as an instance of another entity, is converted like a plain object: the decorators of its own class, such as `),Aa(220,`code`),bT(221,`@Exclude()`),cf(),bT(222,`, are ignored, and properties that the `),Aa(223,`code`),bT(224,`type`),cf(),bT(225,` class doesn't declare are copied unchanged. To send only the properties of the `),Aa(226,`code`),bT(227,`type`),cf(),bT(228,` class, decorate each of them with `),Aa(229,`code`),bT(230,`@Expose()`),cf(),bT(231,` and add `),Aa(232,`code`),bT(233,`excludeExtraneousValues: true`),cf(),bT(234,` to the options of the same `),Aa(235,`code`),bT(236,`@SerializeOptions()`),cf(),bT(237,` decorator.
`),cf(),Aa(238,`h4`,27)(239,`span`),bT(240,`Schema-based serialization`),cf()(),Aa(241,`p`),bT(242,`The `),Aa(243,`code`),bT(244,`StandardSchemaSerializerInterceptor`),cf(),bT(245,` shapes responses with a schema instead of class decorators. The schema describes exactly what leaves the API: the interceptor runs the value returned by the route handler through the schema and sends the schema's output to the client. It accepts any schema that implements the `),Aa(246,`a`,13),bT(247,`Standard Schema`),cf(),bT(248,` specification. The examples in this section use Zod.`),cf(),Aa(249,`p`),bT(250,`Because `),Aa(251,`code`),bT(252,`z.object()`),cf(),bT(253,` strips properties the schema doesn't declare, a response schema is also an allowlist. The following schema guarantees that a user's `),Aa(254,`code`),bT(255,`password`),cf(),bT(256,` is never sent, even when the service returns the full database row:`),cf(),Aa(257,`app-copy-button`,28)(258,`span`,29),bT(259),LT(260,`extension`),Wa(261,`app-tabs`,null,1),cf(),Aa(263,`pre`)(264,`code`,18),bT(265,`
import { z } from 'zod';

export const userResponseSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
});

export type UserResponse = z.infer<typeof userResponseSchema>;
`),cf()()(),Aa(266,`p`),bT(267,`Bind the interceptor and select the schema with the `),Aa(268,`code`),bT(269,`schema`),cf(),bT(270,` option of the `),Aa(271,`code`),bT(272,`@SerializeOptions()`),cf(),bT(273,` decorator:`),cf(),Aa(274,`app-copy-button`,28)(275,`span`,29),bT(276),LT(277,`extension`),Wa(278,`app-tabs`,null,2),cf(),Aa(280,`pre`)(281,`code`,18),bT(282,`
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  SerializeOptions,
  StandardSchemaSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { userResponseSchema } from './user-response.schema.js';
import { UsersService } from './users.service.js';

@Controller('users')
@UseInterceptors(StandardSchemaSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @SerializeOptions({ schema: userResponseSchema })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Get()
  @SerializeOptions({ schema: userResponseSchema })
  findAll() {
    return this.usersService.findAll();
  }
}
`),cf()()(),Aa(283,`p`),bT(284,`The service returns user records that include a `),Aa(285,`code`),bT(286,`password`),cf(),bT(287,` property, but the client receives only the declared properties:`),cf(),Aa(288,`pre`)(289,`code`,21),bT(290,`
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe"
}
`),cf()(),Aa(291,`p`),bT(292,`When a handler returns an array, as `),Aa(293,`code`),bT(294,`findAll()`),cf(),bT(295,` does, the interceptor applies the schema to `),Aa(296,`strong`),bT(297,`each element`),cf(),bT(298,`. Pass the schema of a single item, not an array schema.`),cf(),Aa(299,`p`)(300,`code`),bT(301,`null`),cf(),bT(302,`, `),Aa(303,`code`),bT(304,`undefined`),cf(),bT(305,`, primitive values, and `),Aa(306,`code`),bT(307,`StreamableFile`),cf(),bT(308,` responses are sent unchanged, as are responses of handlers without a schema.`),cf(),Aa(309,`h4`,30)(310,`span`),bT(311,`Transforming responses with schemas`),cf()(),Aa(312,`p`),bT(313,`Schema transformations cover what `),Aa(314,`code`),bT(315,`@Expose()`),cf(),bT(316,` and `),Aa(317,`code`),bT(318,`@Transform()`),cf(),bT(319,` do for classes. The following schema adds a computed `),Aa(320,`code`),bT(321,`fullName`),cf(),bT(322,` property and replaces the nested `),Aa(323,`code`),bT(324,`role`),cf(),bT(325,` object with its name:`),cf(),Aa(326,`app-copy-button`,28)(327,`span`,29),bT(328),LT(329,`extension`),Wa(330,`app-tabs`,null,3),cf(),Aa(332,`pre`)(333,`code`,18),bT(334,`
import { z } from 'zod';

export const userResponseSchema = z
  .object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.object({ id: z.number(), name: z.string() }),
  })
  .transform((user) => ({
    id: user.id,
    fullName: \`\${user.firstName} \${user.lastName}\`,
    role: user.role.name,
  }));
`),cf()()(),Aa(335,`p`),bT(336,`For a user with the `),Aa(337,`code`),bT(338,`admin`),cf(),bT(339,` role, the client receives:`),cf(),Aa(340,`pre`)(341,`code`,21),bT(342,`
{
  "id": 1,
  "fullName": "John Doe",
  "role": "admin"
}
`),cf()(),Aa(343,`p`),bT(344,`The same schema written with Valibot uses `),Aa(345,`code`),bT(346,`v.pipe()`),cf(),bT(347,` and `),Aa(348,`code`),bT(349,`v.transform()`),cf(),bT(350,`:`),cf(),Aa(351,`app-copy-button`)(352,`pre`)(353,`code`,18),bT(354,`
import * as v from 'valibot';

export const userResponseSchema = v.pipe(
  v.object({
    id: v.number(),
    firstName: v.string(),
    lastName: v.string(),
    role: v.object({ id: v.number(), name: v.string() }),
  }),
  v.transform((user) => ({
    id: user.id,
    fullName: \`\${user.firstName} \${user.lastName}\`,
    role: user.role.name,
  })),
);
`),cf()()(),Aa(355,`h4`,31)(356,`span`),bT(357,`Binding the schema serializer`),cf()(),Aa(358,`p`)(359,`code`),bT(360,`@SerializeOptions()`),cf(),bT(361,` can decorate a controller class as well as a route handler. A schema set on the class applies to all of its handlers, and a schema set on a handler takes precedence:`),cf(),Aa(362,`app-copy-button`)(363,`pre`)(364,`code`,18),bT(365,`
@Controller('users')
@UseInterceptors(StandardSchemaSerializerInterceptor)
@SerializeOptions({ schema: userResponseSchema })
export class UsersController {}
`),cf()()(),Aa(366,`p`),bT(367,`To bind the interceptor application-wide, pass it the `),Aa(368,`code`),bT(369,`Reflector`),cf(),bT(370,` instance, which the interceptor uses to read the `),Aa(371,`code`),bT(372,`@SerializeOptions()`),cf(),bT(373,` metadata:`),cf(),Aa(374,`app-copy-button`,28)(375,`span`,29),bT(376),LT(377,`extension`),Wa(378,`app-tabs`,null,4),cf(),Aa(380,`pre`)(381,`code`,18),bT(382,`
const app = await NestFactory.create(AppModule);
app.useGlobalInterceptors(
  new StandardSchemaSerializerInterceptor(app.get(Reflector)),
);
`),cf()()(),Aa(383,`p`),bT(384,`Alternatively, register it with the `),Aa(385,`code`),bT(386,`APP_INTERCEPTOR`),cf(),bT(387,` token, as described in `),Aa(388,`a`,22),bT(389,`Binding interceptors`),cf(),bT(390,`, and Nest injects the `),Aa(391,`code`),bT(392,`Reflector`),cf(),bT(393,` for you. Handlers without a schema are not affected by the global interceptor.`),cf(),Aa(394,`p`),bT(395,`The interceptor constructor also accepts default options, which apply when neither the handler nor its controller sets a schema:`),cf(),Aa(396,`table`)(397,`tr`)(398,`td`)(399,`code`),bT(400,`schema`),cf()(),Aa(401,`td`),bT(402,`The default schema used when `),Aa(403,`code`),bT(404,`@SerializeOptions()`),cf(),bT(405,` doesn't provide one.`),cf()(),Aa(406,`tr`)(407,`td`)(408,`code`),bT(409,`validateOptions`),cf()(),Aa(410,`td`),bT(411,`Options forwarded to the schema's `),Aa(412,`code`),bT(413,`~standard.validate()`),cf(),bT(414,` method, for libraries that support them. A handler can override them with the `),Aa(415,`code`),bT(416,`validateOptions`),cf(),bT(417,` option of `),Aa(418,`code`),bT(419,`@SerializeOptions()`),cf(),bT(420,`.`),cf()()(),Aa(421,`h4`,32)(422,`span`),bT(423,`Serialization errors`),cf()(),Aa(424,`p`),bT(425,`A response that doesn't match its schema, such as a record with a missing or mistyped property, indicates a bug on the server, not a problem with the request. In that case, the interceptor throws an error that lists the schema's issues, and the client receives a `),Aa(426,`code`),bT(427,`500 Internal Server Error`),cf(),bT(428,` response instead of partially serialized data. The error message, including the issues, is logged by the default exception filter.`),cf(),Aa(429,`p`),bT(430,`A working example that uses Valibot is available `),Aa(431,`a`,33),bT(432,`here`),cf(),bT(433,`.`),cf(),Aa(434,`h4`,34)(435,`span`),bT(436,`Example`),cf()(),Aa(437,`p`),bT(438,`A working example of the `),Aa(439,`code`),bT(440,`ClassSerializerInterceptor`),cf(),bT(441,` is available `),Aa(442,`a`,35),bT(443,`here`),cf(),bT(444,`.`),cf(),Aa(445,`h4`,36)(446,`span`),bT(447,`WebSockets and Microservices`),cf()(),Aa(448,`p`),bT(449,`While this chapter shows examples using HTTP applications (e.g., Express or Fastify), both `),Aa(450,`code`),bT(451,`ClassSerializerInterceptor`),cf(),bT(452,` and `),Aa(453,`code`),bT(454,`StandardSchemaSerializerInterceptor`),cf(),bT(455,` work the same for WebSockets and microservices, regardless of the transport.`),cf(),Aa(456,`h4`,37)(457,`span`),bT(458,`Learn more`),cf()(),Aa(459,`p`),bT(460,`Read more about available decorators and options in the `),Aa(461,`a`,9),bT(462,`class-transformer`),cf(),bT(463,` repository. For schema libraries, see the `),Aa(464,`a`,10),bT(465,`Zod`),cf(),bT(466,`, `),Aa(467,`a`,11),bT(468,`Valibot`),cf(),bT(469,`, and `),Aa(470,`a`,12),bT(471,`ArkType`),cf(),bT(472,` documentation.`),cf()(),Aa(473,`a`,38),Wa(474,`i`,39),Aa(475,`span`),bT(476,`Edit on GitHub`),cf()()()),c&2){let y=tT(262),k=tT(279),T=tT(331),j=tT(379);zC(77),Ky(``,`{`,` user: new UserEntity() `,`}`),zC(182),hf(` `,jT(260,6,`user-response.schema`,y.isJsActive),`
`),zC(17),hf(` `,jT(277,9,`users.controller`,k.isJsActive),`
`),zC(52),hf(` `,jT(329,12,`user-response.schema`,T.isJsActive),`
`),zC(48),hf(` `,jT(377,15,`main`,j.isJsActive),`
`)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return d})();var ye=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-task-scheduling`]],features:[xy],decls:807,vars:4,consts:[[`contentReference`,``],[`app3077edcf178dc0968908f2b34cb49b5799b99959`,``],[1,`content`],[1,`content-inner`],[`id`,`task-scheduling`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Cron`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/kelektiv/node-cron`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`application/task-scheduling#declarative-cron-jobs`],[`href`,`application/task-scheduling#declarative-timeouts`],[`href`,`application/task-scheduling#declarative-intervals`],[1,`warning`],[`appAnchor`,``,`id`,`declarative-cron-jobs`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`http://crontab.org/`],[1,`language-javascript`],[1,`info`],[`href`,`http://momentjs.com/timezone/`],[`href`,`/application/task-scheduling#dynamic-schedule-module-api`],[`appAnchor`,``,`id`,`declarative-intervals`],[`href`,`application/task-scheduling#dynamic-intervals`],[`appAnchor`,``,`id`,`declarative-timeouts`],[`href`,`application/task-scheduling#dynamic-timeouts`],[`appAnchor`,``,`id`,`dynamic-schedule-module-api`],[`appAnchor`,``,`id`,`dynamic-cron-jobs`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://moment.github.io/luxon/`],[`appAnchor`,``,`id`,`dynamic-intervals`],[`appAnchor`,``,`id`,`dynamic-timeouts`],[`appAnchor`,``,`id`,`running-on-several-instances`],[`href`,`/reliability/locks`],[`routerLink`,`/reliability/locks`],[`appAnchor`,``,`id`,`knowing-a-cron-job-actually-ran`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.observe.nestjs.com/`,`title`,`NestJS Observe`],[`routerLink`,`/observability/manual-instrumentation`],[`routerLink`,`/observability/overview`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/27-scheduling`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/task-scheduling.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Task scheduling`),cf(),Aa(5,`p`),bT(6,`Task scheduling lets you run arbitrary code (methods or functions) at a fixed date and time, at recurring intervals, or once after a specified delay. In the Linux world, this is often handled at the OS level by tools like `),Aa(7,`a`,5),bT(8,`cron`),cf(),bT(9,`. For Node.js apps, several packages emulate cron-like functionality. Nest provides the `),Aa(10,`code`),bT(11,`@nestjs/schedule`),cf(),bT(12,` package, which integrates with the popular Node.js `),Aa(13,`a`,6),bT(14,`cron`),cf(),bT(15,` package. This chapter covers the `),Aa(16,`code`),bT(17,`@nestjs/schedule`),cf(),bT(18,` package.`),cf(),Aa(19,`h4`,7)(20,`span`),bT(21,`Installation`),cf()(),Aa(22,`p`),bT(23,`To begin using it, install the required dependencies.`),cf(),Aa(24,`pre`)(25,`code`,8),bT(26,`
$ npm install --save @nestjs/schedule
`),cf()(),Aa(27,`p`),bT(28,`To activate job scheduling, import the `),Aa(29,`code`),bT(30,`ScheduleModule`),cf(),bT(31,` into the root `),Aa(32,`code`),bT(33,`AppModule`),cf(),bT(34,` and call the `),Aa(35,`code`),bT(36,`forRoot()`),cf(),bT(37,` static method, as shown below:`),cf(),Aa(38,`app-copy-button`,9)(39,`span`,10),bT(40),LT(41,`extension`),Wa(42,`app-tabs`,null,1),cf(),Aa(44,`pre`)(45,`code`,11),bT(46,`
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
})
export class AppModule {}
`),cf()()(),Aa(47,`p`),bT(48,`The `),Aa(49,`code`),bT(50,`forRoot()`),cf(),bT(51,` call initializes the scheduler and registers any declarative `),Aa(52,`a`,12),bT(53,`cron jobs`),cf(),bT(54,`, `),Aa(55,`a`,13),bT(56,`timeouts`),cf(),bT(57,`, and `),Aa(58,`a`,14),bT(59,`intervals`),cf(),bT(60,` that exist within your app. The scheduled jobs start in the `),Aa(61,`code`),bT(62,`onApplicationBootstrap`),cf(),bT(63,` lifecycle hook, which ensures that all modules have loaded and declared their scheduled jobs.`),cf(),Aa(64,`blockquote`,15)(65,`strong`),bT(66,`Warning`),cf(),bT(67,` Call `),Aa(68,`code`),bT(69,`forRoot()`),cf(),bT(70,` in one module only. Each additional import registers every `),Aa(71,`code`),bT(72,`@Cron()`),cf(),bT(73,`, `),Aa(74,`code`),bT(75,`@Interval()`),cf(),bT(76,` and `),Aa(77,`code`),bT(78,`@Timeout()`),cf(),bT(79,` handler in your app again, so importing it in three modules makes each job run three times.
`),cf(),Aa(80,`h4`,16)(81,`span`),bT(82,`Declarative cron jobs`),cf()(),Aa(83,`p`),bT(84,`A cron job schedules an arbitrary function (method call) to run automatically. Cron jobs can run:`),cf(),Aa(85,`ul`)(86,`li`),bT(87,`Once, at a specified date and time.`),cf(),Aa(88,`li`),bT(89,`On a recurring basis. Recurring jobs can run at a specified instant within a specified interval (e.g., once per hour, once per week, once every 5 minutes).`),cf()(),Aa(90,`p`),bT(91,`Declare a cron job by applying the `),Aa(92,`code`),bT(93,`@Cron()`),cf(),bT(94,` decorator to the method that contains the code to execute, as follows:`),cf(),Aa(95,`app-copy-button`)(96,`pre`)(97,`code`,11),bT(98,`
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }
}
`),cf()()(),Aa(99,`p`),bT(100,`In this example, the `),Aa(101,`code`),bT(102,`handleCron()`),cf(),bT(103,` method is called each time the current second is `),Aa(104,`code`),bT(105,`45`),cf(),bT(106,`. In other words, the method runs once per minute, at the 45-second mark.`),cf(),Aa(107,`p`),bT(108,`The `),Aa(109,`code`),bT(110,`@Cron()`),cf(),bT(111,` decorator supports the following standard `),Aa(112,`a`,17),bT(113,`cron patterns`),cf(),bT(114,`:`),cf(),Aa(115,`ul`)(116,`li`),bT(117,`Asterisks (e.g., `),Aa(118,`code`),bT(119,`*`),cf(),bT(120,`)`),cf(),Aa(121,`li`),bT(122,`Ranges and lists (e.g., `),Aa(123,`code`),bT(124,`1-3,5`),cf(),bT(125,`)`),cf(),Aa(126,`li`),bT(127,`Steps (e.g., `),Aa(128,`code`),bT(129,`*/2`),cf(),bT(130,`)`),cf()(),Aa(131,`p`),bT(132,`In the example above, we passed `),Aa(133,`code`),bT(134,`45 * * * * *`),cf(),bT(135,` to the decorator. The following key shows how each position in the cron pattern string is interpreted:`),cf(),Aa(136,`pre`,18)(137,`code`,18),bT(138,`
* * * * * *
| | | | | |
| | | | | day of week
| | | | months
| | | day of month
| | hours
| minutes
seconds (optional)
`),cf()(),Aa(139,`p`),bT(140,`Some sample cron patterns are:`),cf(),Aa(141,`table`)(142,`tbody`)(143,`tr`)(144,`td`)(145,`code`),bT(146,`* * * * * *`),cf()(),Aa(147,`td`),bT(148,`every second`),cf()(),Aa(149,`tr`)(150,`td`)(151,`code`),bT(152,`45 * * * * *`),cf()(),Aa(153,`td`),bT(154,`every minute, on the 45th second`),cf()(),Aa(155,`tr`)(156,`td`)(157,`code`),bT(158,`0 10 * * * *`),cf()(),Aa(159,`td`),bT(160,`every hour, at the start of the 10th minute`),cf()(),Aa(161,`tr`)(162,`td`)(163,`code`),bT(164,`0 */30 9-17 * * *`),cf()(),Aa(165,`td`),bT(166,`every 30 minutes between 9am and 5pm`),cf()(),Aa(167,`tr`)(168,`td`)(169,`code`),bT(170,`0 30 11 * * 1-5`),cf()(),Aa(171,`td`),bT(172,`Monday to Friday at 11:30am`),cf()()()(),Aa(173,`p`),bT(174,`The `),Aa(175,`code`),bT(176,`@nestjs/schedule`),cf(),bT(177,` package provides the `),Aa(178,`code`),bT(179,`CronExpression`),cf(),bT(180,` enum with commonly used cron patterns. You can use this enum as follows:`),cf(),Aa(181,`app-copy-button`)(182,`pre`)(183,`code`,11),bT(184,`
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCron() {
    this.logger.debug('Called every 30 seconds');
  }
}
`),cf()()(),Aa(185,`p`),bT(186,`In this example, the `),Aa(187,`code`),bT(188,`handleCron()`),cf(),bT(189,` method is called every `),Aa(190,`code`),bT(191,`30`),cf(),bT(192,` seconds. Every method annotated with `),Aa(193,`code`),bT(194,`@Cron()`),cf(),bT(195,` is automatically wrapped in a `),Aa(196,`code`),bT(197,`try-catch`),cf(),bT(198,` block, so if an exception occurs, it's logged to the console.`),cf(),Aa(199,`p`),bT(200,`Alternatively, you can supply a JavaScript `),Aa(201,`code`),bT(202,`Date`),cf(),bT(203,` object to the `),Aa(204,`code`),bT(205,`@Cron()`),cf(),bT(206,` decorator. This causes the job to execute exactly once, at the specified date.`),cf(),Aa(207,`blockquote`,19)(208,`strong`),bT(209,`Hint`),cf(),bT(210,` Use JavaScript date arithmetic to schedule jobs relative to the current date. For example, `),Aa(211,`code`),bT(212,`@Cron(new Date(Date.now() + 10 * 1000))`),cf(),bT(213,` schedules a job to run 10 seconds after the app starts.
`),cf(),Aa(214,`p`),bT(215,`You can also supply additional options as the second parameter to the `),Aa(216,`code`),bT(217,`@Cron()`),cf(),bT(218,` decorator.`),cf(),Aa(219,`table`)(220,`tbody`)(221,`tr`)(222,`td`)(223,`code`),bT(224,`name`),cf()(),Aa(225,`td`),bT(226,` Lets you access and control a cron job after it's been declared. `),cf()(),Aa(227,`tr`)(228,`td`)(229,`code`),bT(230,`timeZone`),cf()(),Aa(231,`td`),bT(232,` Specifies the time zone for the execution. This modifies the actual time relative to your time zone. If the time zone is invalid, an error is thrown. You can check all available time zones on the `),Aa(233,`a`,20),bT(234,`Moment Timezone`),cf(),bT(235,` website. `),cf()(),Aa(236,`tr`)(237,`td`)(238,`code`),bT(239,`utcOffset`),cf()(),Aa(240,`td`),bT(241,` Specifies the offset of your time zone instead of using the `),Aa(242,`code`),bT(243,`timeZone`),cf(),bT(244,` option. Don't combine it with `),Aa(245,`code`),bT(246,`timeZone`),cf(),bT(247,`. `),cf()(),Aa(248,`tr`)(249,`td`)(250,`code`),bT(251,`waitForCompletion`),cf()(),Aa(252,`td`),bT(253,` If `),Aa(254,`code`),bT(255,`true`),cf(),bT(256,`, no additional instances of the cron job run until the current `),Aa(257,`code`),bT(258,`onTick`),cf(),bT(259,` callback completes. Any new scheduled executions that occur while the current cron job is running are skipped entirely. `),cf()(),Aa(260,`tr`)(261,`td`)(262,`code`),bT(263,`disabled`),cf()(),Aa(264,`td`),bT(265,` If `),Aa(266,`code`),bT(267,`true`),cf(),bT(268,`, the job is not executed at all (defaults to `),Aa(269,`code`),bT(270,`false`),cf(),bT(271,`). `),cf()()()(),Aa(272,`app-copy-button`)(273,`pre`)(274,`code`,11),bT(275,`
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotificationService {
  @Cron('* * 0 * * *', {
    name: 'notifications',
    timeZone: 'Europe/Paris',
  })
  triggerNotifications() {}
}
`),cf()()(),Aa(276,`p`),bT(277,`With the `),Aa(278,`a`,21),bT(279,`dynamic API`),cf(),bT(280,`, you can access and control a cron job after it's been declared, or create a cron job dynamically (with its cron pattern defined at runtime). To access a declarative cron job via the API, you must associate the job with a name by passing the `),Aa(281,`code`),bT(282,`name`),cf(),bT(283,` property in the options object (the decorator's optional second argument).`),cf(),Aa(284,`h4`,22)(285,`span`),bT(286,`Declarative intervals`),cf()(),Aa(287,`p`),bT(288,`To declare that a method should run at a specified (recurring) interval, prefix the method definition with the `),Aa(289,`code`),bT(290,`@Interval()`),cf(),bT(291,` decorator. Pass the interval value to the decorator as a number in milliseconds, as shown below:`),cf(),Aa(292,`app-copy-button`)(293,`pre`)(294,`code`,11),bT(295,`
@Interval(10000)
handleInterval() {
  this.logger.debug('Called every 10 seconds');
}
`),cf()()(),Aa(296,`blockquote`,19)(297,`strong`),bT(298,`Hint`),cf(),bT(299,` This mechanism uses the JavaScript `),Aa(300,`code`),bT(301,`setInterval()`),cf(),bT(302,` function under the hood. You can also use a cron job to schedule recurring jobs.
`),cf(),Aa(303,`p`),bT(304,`To control your declarative interval from outside the declaring class via the `),Aa(305,`a`,21),bT(306,`dynamic API`),cf(),bT(307,`, associate the interval with a name using the following construction:`),cf(),Aa(308,`app-copy-button`)(309,`pre`)(310,`code`,11),bT(311,`
@Interval('notifications', 2500)
handleInterval() {}
`),cf()()(),Aa(312,`p`),bT(313,`Every method annotated with `),Aa(314,`code`),bT(315,`@Interval()`),cf(),bT(316,` is automatically wrapped in a `),Aa(317,`code`),bT(318,`try-catch`),cf(),bT(319,` block, so if an exception occurs, it's logged to the console.`),cf(),Aa(320,`p`),bT(321,`The `),Aa(322,`a`,23),bT(323,`dynamic API`),cf(),bT(324,` also enables `),Aa(325,`strong`),bT(326,`creating`),cf(),bT(327,` dynamic intervals, where the interval's properties are defined at runtime, and `),Aa(328,`strong`),bT(329,`listing and deleting`),cf(),bT(330,` them.`),cf(),Aa(331,`p`),Wa(332,`app-banner-enterprise`),cf(),Aa(333,`h4`,24)(334,`span`),bT(335,`Declarative timeouts`),cf()(),Aa(336,`p`),bT(337,`To declare that a method should run once after a specified timeout, prefix the method definition with the `),Aa(338,`code`),bT(339,`@Timeout()`),cf(),bT(340,` decorator. Pass the time offset from application startup (in milliseconds) to the decorator, as shown below:`),cf(),Aa(341,`app-copy-button`)(342,`pre`)(343,`code`,11),bT(344,`
@Timeout(5000)
handleTimeout() {
  this.logger.debug('Called once after 5 seconds');
}
`),cf()()(),Aa(345,`blockquote`,19)(346,`strong`),bT(347,`Hint`),cf(),bT(348,` This mechanism uses the JavaScript `),Aa(349,`code`),bT(350,`setTimeout()`),cf(),bT(351,` function under the hood.
`),cf(),Aa(352,`p`),bT(353,`Every method annotated with `),Aa(354,`code`),bT(355,`@Timeout()`),cf(),bT(356,` is automatically wrapped in a `),Aa(357,`code`),bT(358,`try-catch`),cf(),bT(359,` block, so if an exception occurs, it's logged to the console.`),cf(),Aa(360,`p`),bT(361,`To control your declarative timeout from outside the declaring class via the `),Aa(362,`a`,21),bT(363,`dynamic API`),cf(),bT(364,`, associate the timeout with a name using the following construction:`),cf(),Aa(365,`app-copy-button`)(366,`pre`)(367,`code`,11),bT(368,`
@Timeout('notifications', 2500)
handleTimeout() {}
`),cf()()(),Aa(369,`p`),bT(370,`The `),Aa(371,`a`,25),bT(372,`dynamic API`),cf(),bT(373,` also enables `),Aa(374,`strong`),bT(375,`creating`),cf(),bT(376,` dynamic timeouts, where the timeout's properties are defined at runtime, and `),Aa(377,`strong`),bT(378,`listing and deleting`),cf(),bT(379,` them.`),cf(),Aa(380,`h4`,26)(381,`span`),bT(382,`Dynamic schedule module API`),cf()(),Aa(383,`p`),bT(384,`The `),Aa(385,`code`),bT(386,`@nestjs/schedule`),cf(),bT(387,` module provides a dynamic API for managing declarative `),Aa(388,`a`,12),bT(389,`cron jobs`),cf(),bT(390,`, `),Aa(391,`a`,13),bT(392,`timeouts`),cf(),bT(393,`, and `),Aa(394,`a`,14),bT(395,`intervals`),cf(),bT(396,`. The API also lets you create and manage `),Aa(397,`strong`),bT(398,`dynamic`),cf(),bT(399,` cron jobs, timeouts, and intervals, whose properties are defined at runtime.`),cf(),Aa(400,`h4`,27)(401,`span`),bT(402,`Dynamic cron jobs`),cf()(),Aa(403,`p`),bT(404,`Obtain a reference to a `),Aa(405,`code`),bT(406,`CronJob`),cf(),bT(407,` instance by name from anywhere in your code using the `),Aa(408,`code`),bT(409,`SchedulerRegistry`),cf(),bT(410,` API. First, inject `),Aa(411,`code`),bT(412,`SchedulerRegistry`),cf(),bT(413,` using standard constructor injection:`),cf(),Aa(414,`app-copy-button`)(415,`pre`)(416,`code`,11),bT(417,`
constructor(private schedulerRegistry: SchedulerRegistry) {}
`),cf()()(),Aa(418,`blockquote`,19)(419,`strong`),bT(420,`Hint`),cf(),bT(421,` Import the `),Aa(422,`code`),bT(423,`SchedulerRegistry`),cf(),bT(424,` from the `),Aa(425,`code`),bT(426,`@nestjs/schedule`),cf(),bT(427,` package.
`),cf(),Aa(428,`p`),bT(429,`Then use it in a class. Assume a cron job was created with the following declaration:`),cf(),Aa(430,`app-copy-button`)(431,`pre`)(432,`code`,11),bT(433,`
@Cron('* * 8 * * *', {
  name: 'notifications',
})
triggerNotifications() {}
`),cf()()(),Aa(434,`p`),bT(435,`Access this job using the following:`),cf(),Aa(436,`app-copy-button`)(437,`pre`)(438,`code`,11),bT(439,`
const job = this.schedulerRegistry.getCronJob('notifications');

job.stop();
console.log(job.lastDate());
`),cf()()(),Aa(440,`p`),bT(441,`The `),Aa(442,`code`),bT(443,`getCronJob()`),cf(),bT(444,` method returns the named cron job. The returned `),Aa(445,`code`),bT(446,`CronJob`),cf(),bT(447,` object has the following methods:`),cf(),Aa(448,`ul`)(449,`li`)(450,`code`),bT(451,`stop()`),cf(),bT(452,` - stops a job that is scheduled to run.`),cf(),Aa(453,`li`)(454,`code`),bT(455,`start()`),cf(),bT(456,` - restarts a job that has been stopped.`),cf(),Aa(457,`li`)(458,`code`),bT(459,`setTime(time: CronTime)`),cf(),bT(460,` - stops a job, sets a new time for it, and then starts it.`),cf(),Aa(461,`li`)(462,`code`),bT(463,`lastDate()`),cf(),bT(464,` - returns a JavaScript `),Aa(465,`code`),bT(466,`Date`),cf(),bT(467,` representing the last execution of the job, or `),Aa(468,`code`),bT(469,`null`),cf(),bT(470,` if it hasn't run yet.`),cf(),Aa(471,`li`)(472,`code`),bT(473,`nextDate()`),cf(),bT(474,` - returns a `),Aa(475,`code`),bT(476,`DateTime`),cf(),bT(477,` representation of the date when the next execution of the job is scheduled.`),cf(),Aa(478,`li`)(479,`code`),bT(480,`nextDates(count: number)`),cf(),bT(481,` - returns an array (of size `),Aa(482,`code`),bT(483,`count`),cf(),bT(484,`) of `),Aa(485,`code`),bT(486,`DateTime`),cf(),bT(487,` representations for the next set of dates that will trigger job execution. `),Aa(488,`code`),bT(489,`count`),cf(),bT(490,` defaults to 0, which returns an empty array.`),cf()(),Aa(491,`blockquote`,19)(492,`strong`),bT(493,`Hint`),cf(),bT(494,` Call `),Aa(495,`code`),bT(496,`toJSDate()`),cf(),bT(497,` on a `),Aa(498,`code`),bT(499,`DateTime`),cf(),bT(500,` object (a `),Aa(501,`a`,28),bT(502,`Luxon`),cf(),bT(503,` type) to convert it to the equivalent JavaScript `),Aa(504,`code`),bT(505,`Date`),cf(),bT(506,`.
`),cf(),Aa(507,`p`)(508,`strong`),bT(509,`Create`),cf(),bT(510,` a new cron job dynamically using the `),Aa(511,`code`),bT(512,`SchedulerRegistry#addCronJob`),cf(),bT(513,` method, as follows:`),cf(),Aa(514,`app-copy-button`)(515,`pre`)(516,`code`,11),bT(517,`
addCronJob(name: string, seconds: string) {
  const job = new CronJob(\`\${seconds} * * * * *\`, () => {
    this.logger.warn(\`time (\${seconds}) for job \${name} to run!\`);
  });

  this.schedulerRegistry.addCronJob(name, job);
  job.start();

  this.logger.warn(
    \`job \${name} added for each minute at \${seconds} seconds!\`,
  );
}
`),cf()()(),Aa(518,`p`),bT(519,`This code uses the `),Aa(520,`code`),bT(521,`CronJob`),cf(),bT(522,` class from the `),Aa(523,`code`),bT(524,`cron`),cf(),bT(525,` package to create the cron job. The `),Aa(526,`code`),bT(527,`CronJob`),cf(),bT(528,` constructor takes a cron pattern (like the `),Aa(529,`code`),bT(530,`@Cron()`),cf(),Aa(531,`a`,12),bT(532,`decorator`),cf(),bT(533,`) as its first argument, and a callback to execute when the cron timer fires as its second argument. The `),Aa(534,`code`),bT(535,`SchedulerRegistry#addCronJob`),cf(),bT(536,` method takes two arguments: a name for the `),Aa(537,`code`),bT(538,`CronJob`),cf(),bT(539,`, and the `),Aa(540,`code`),bT(541,`CronJob`),cf(),bT(542,` object itself.`),cf(),Aa(543,`blockquote`,15)(544,`strong`),bT(545,`Warning`),cf(),bT(546,` Remember to inject the `),Aa(547,`code`),bT(548,`SchedulerRegistry`),cf(),bT(549,` before accessing it. Import `),Aa(550,`code`),bT(551,`CronJob`),cf(),bT(552,` from the `),Aa(553,`code`),bT(554,`cron`),cf(),bT(555,` package.
`),cf(),Aa(556,`p`)(557,`strong`),bT(558,`Delete`),cf(),bT(559,` a named cron job using the `),Aa(560,`code`),bT(561,`SchedulerRegistry#deleteCronJob`),cf(),bT(562,` method, as follows:`),cf(),Aa(563,`app-copy-button`)(564,`pre`)(565,`code`,11),bT(566,`
deleteCron(name: string) {
  this.schedulerRegistry.deleteCronJob(name);
  this.logger.warn(\`job \${name} deleted!\`);
}
`),cf()()(),Aa(567,`p`)(568,`strong`),bT(569,`List`),cf(),bT(570,` all cron jobs using the `),Aa(571,`code`),bT(572,`SchedulerRegistry#getCronJobs`),cf(),bT(573,` method, as follows:`),cf(),Aa(574,`app-copy-button`)(575,`pre`)(576,`code`,11),bT(577,`
getCrons() {
  const jobs = this.schedulerRegistry.getCronJobs();
  jobs.forEach((value, key, map) => {
    let next;
    try {
      next = value.nextDate().toJSDate();
    } catch (e) {
      next = 'error: next fire date is in the past!';
    }
    this.logger.log(\`job: \${key} -> next: \${next}\`);
  });
}
`),cf()()(),Aa(578,`p`),bT(579,`The `),Aa(580,`code`),bT(581,`getCronJobs()`),cf(),bT(582,` method returns a `),Aa(583,`code`),bT(584,`Map`),cf(),bT(585,`. This code iterates over the map and calls the `),Aa(586,`code`),bT(587,`nextDate()`),cf(),bT(588,` method of each `),Aa(589,`code`),bT(590,`CronJob`),cf(),bT(591,`. In the `),Aa(592,`code`),bT(593,`CronJob`),cf(),bT(594,` API, `),Aa(595,`code`),bT(596,`nextDate()`),cf(),bT(597,` throws an exception if a job has already fired and has no future firing date.`),cf(),Aa(598,`h4`,29)(599,`span`),bT(600,`Dynamic intervals`),cf()(),Aa(601,`p`),bT(602,`Obtain a reference to an interval with the `),Aa(603,`code`),bT(604,`SchedulerRegistry#getInterval`),cf(),bT(605,` method. As above, inject `),Aa(606,`code`),bT(607,`SchedulerRegistry`),cf(),bT(608,` using standard constructor injection:`),cf(),Aa(609,`app-copy-button`)(610,`pre`)(611,`code`,11),bT(612,`
constructor(private schedulerRegistry: SchedulerRegistry) {}
`),cf()()(),Aa(613,`p`),bT(614,`Then use it as follows:`),cf(),Aa(615,`app-copy-button`)(616,`pre`)(617,`code`,11),bT(618,`
const interval = this.schedulerRegistry.getInterval('notifications');
clearInterval(interval);
`),cf()()(),Aa(619,`p`)(620,`strong`),bT(621,`Create`),cf(),bT(622,` a new interval dynamically using the `),Aa(623,`code`),bT(624,`SchedulerRegistry#addInterval`),cf(),bT(625,` method, as follows:`),cf(),Aa(626,`app-copy-button`)(627,`pre`)(628,`code`,11),bT(629,`
addInterval(name: string, milliseconds: number) {
  const callback = () => {
    this.logger.warn(\`Interval \${name} executing at time (\${milliseconds})!\`);
  };

  const interval = setInterval(callback, milliseconds);
  this.schedulerRegistry.addInterval(name, interval);
}
`),cf()()(),Aa(630,`p`),bT(631,`This code creates a standard JavaScript interval, then passes it to the `),Aa(632,`code`),bT(633,`SchedulerRegistry#addInterval`),cf(),bT(634,` method.
That method takes two arguments: a name for the interval, and the interval itself.`),cf(),Aa(635,`p`)(636,`strong`),bT(637,`Delete`),cf(),bT(638,` a named interval using the `),Aa(639,`code`),bT(640,`SchedulerRegistry#deleteInterval`),cf(),bT(641,` method, as follows:`),cf(),Aa(642,`app-copy-button`)(643,`pre`)(644,`code`,11),bT(645,`
deleteInterval(name: string) {
  this.schedulerRegistry.deleteInterval(name);
  this.logger.warn(\`Interval \${name} deleted!\`);
}
`),cf()()(),Aa(646,`p`)(647,`strong`),bT(648,`List`),cf(),bT(649,` the names of all intervals using the `),Aa(650,`code`),bT(651,`SchedulerRegistry#getIntervals`),cf(),bT(652,` method, as follows:`),cf(),Aa(653,`app-copy-button`)(654,`pre`)(655,`code`,11),bT(656,`
getIntervals() {
  const intervals = this.schedulerRegistry.getIntervals();
  intervals.forEach(key => this.logger.log(\`Interval: \${key}\`));
}
`),cf()()(),Aa(657,`h4`,30)(658,`span`),bT(659,`Dynamic timeouts`),cf()(),Aa(660,`p`),bT(661,`Obtain a reference to a timeout with the `),Aa(662,`code`),bT(663,`SchedulerRegistry#getTimeout`),cf(),bT(664,` method. As above, inject `),Aa(665,`code`),bT(666,`SchedulerRegistry`),cf(),bT(667,` using standard constructor injection:`),cf(),Aa(668,`app-copy-button`)(669,`pre`)(670,`code`,11),bT(671,`
constructor(private readonly schedulerRegistry: SchedulerRegistry) {}
`),cf()()(),Aa(672,`p`),bT(673,`Then use it as follows:`),cf(),Aa(674,`app-copy-button`)(675,`pre`)(676,`code`,11),bT(677,`
const timeout = this.schedulerRegistry.getTimeout('notifications');
clearTimeout(timeout);
`),cf()()(),Aa(678,`p`)(679,`strong`),bT(680,`Create`),cf(),bT(681,` a new timeout dynamically using the `),Aa(682,`code`),bT(683,`SchedulerRegistry#addTimeout`),cf(),bT(684,` method, as follows:`),cf(),Aa(685,`app-copy-button`)(686,`pre`)(687,`code`,11),bT(688,`
addTimeout(name: string, milliseconds: number) {
  const callback = () => {
    this.logger.warn(\`Timeout \${name} executing after (\${milliseconds})!\`);
  };

  const timeout = setTimeout(callback, milliseconds);
  this.schedulerRegistry.addTimeout(name, timeout);
}
`),cf()()(),Aa(689,`p`),bT(690,`This code creates a standard JavaScript timeout, then passes it to the `),Aa(691,`code`),bT(692,`SchedulerRegistry#addTimeout`),cf(),bT(693,` method.
That method takes two arguments: a name for the timeout, and the timeout itself.`),cf(),Aa(694,`p`)(695,`strong`),bT(696,`Delete`),cf(),bT(697,` a named timeout using the `),Aa(698,`code`),bT(699,`SchedulerRegistry#deleteTimeout`),cf(),bT(700,` method, as follows:`),cf(),Aa(701,`app-copy-button`)(702,`pre`)(703,`code`,11),bT(704,`
deleteTimeout(name: string) {
  this.schedulerRegistry.deleteTimeout(name);
  this.logger.warn(\`Timeout \${name} deleted!\`);
}
`),cf()()(),Aa(705,`p`)(706,`strong`),bT(707,`List`),cf(),bT(708,` the names of all timeouts using the `),Aa(709,`code`),bT(710,`SchedulerRegistry#getTimeouts`),cf(),bT(711,` method, as follows:`),cf(),Aa(712,`app-copy-button`)(713,`pre`)(714,`code`,11),bT(715,`
getTimeouts() {
  const timeouts = this.schedulerRegistry.getTimeouts();
  timeouts.forEach(key => this.logger.log(\`Timeout: \${key}\`));
}
`),cf()()(),Aa(716,`h4`,31)(717,`span`),bT(718,`Running on several instances`),cf()(),Aa(719,`p`),bT(720,`The scheduler runs every job in every process of your application. With three instances behind a load balancer, a job scheduled with `),Aa(721,`code`),bT(722,`@Cron('0 2 * * *')`),cf(),bT(723,` runs three times a night: three invoice exports, three batches of reminder emails.`),cf(),Aa(724,`p`),bT(725,`To run a job on one instance per tick, add `),Aa(726,`code`),bT(727,`@OnOneInstance()`),cf(),bT(728,` from `),Aa(729,`a`,32)(730,`code`),bT(731,`@nestjs/locks`),cf()(),bT(732,` next to its `),Aa(733,`code`),bT(734,`@Cron()`),cf(),bT(735,`, `),Aa(736,`code`),bT(737,`@Interval()`),cf(),bT(738,` or `),Aa(739,`code`),bT(740,`@Timeout()`),cf(),bT(741,` decorator:`),cf(),Aa(742,`app-copy-button`)(743,`pre`)(744,`code`,11),bT(745,`
import { Injectable } from '@nestjs/common';
import { OnOneInstance } from '@nestjs/locks';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class InvoicesJob {
  @Cron('0 2 * * *')
  @OnOneInstance({ key: 'invoices:nightly-export' })
  async exportInvoices() {
    // ...
  }
}
`),cf()()(),Aa(746,`p`),bT(747,`The instances coordinate through a lock store they share, such as your PostgreSQL database or Redis. The first instance to fire the job takes a lease on it and keeps renewing it while it's up, and the other instances skip their ticks instead of queuing them. If the owner stops, another instance takes the job over at its next tick. A job that can take longer than its interval also gets `),Aa(748,`code`),bT(749,`@WithoutOverlapping()`),cf(),bT(750,`, which skips a tick while the previous run is still going. `),Aa(751,`a`,33),bT(752,`Distributed locks`),cf(),bT(753,` shows how to register the module and the store.`),cf(),Aa(754,`h4`,34)(755,`span`),bT(756,`Knowing a cron job actually ran`),cf()(),Aa(757,`p`),bT(758,`A scheduled job that throws is a problem you will hear about. A scheduled job that silently `),Aa(759,`em`),bT(760,`stops being scheduled`),cf(),bT(761,` (the process crashed, the container was descheduled, a deploy shipped a `),Aa(762,`code`),bT(763,`@Cron()`),cf(),bT(764,` expression with a typo) is a problem nobody hears about until the report it generates is missing.`),cf(),Aa(765,`p`),bT(766,`This is the failure mode cron monitoring exists for, and `),Aa(767,`a`,35),bT(768,`NestJS Observe`),cf(),bT(769,` covers it without a third-party ping service or a heartbeat URL for the job to call on its way out. Scheduled runs are reported as `),Aa(770,`strong`),bT(771,`jobs`),cf(),bT(772,`, alongside queue consumers, each with its duration, outcome, and failure reason. A `),Aa(773,`strong`),bT(774,`job silence`),cf(),bT(775,` alert rule fires when a named job hasn't reported within a tolerance you set, anywhere from 2 minutes to 7 days: `),Aa(776,`em`),bT(777,`"alert me if `),Aa(778,`code`),bT(779,`daily-invoices`),cf(),bT(780,` has not reported in the last 26 hours"`),cf(),bT(781,`.`),cf(),Aa(782,`p`),bT(783,`Two details make this practical rather than noisy. A scope that has never reported anything doesn't fire, so you can add the rule before the job ships without being paged for something that isn't integrated yet. And rules carry a recurring mute schedule, so a job that legitimately doesn't run at weekends doesn't wake anyone on Saturday.`),cf(),Aa(784,`p`),bT(785,`A handler that needs to report its own progress can inject `),Aa(786,`code`),bT(787,`TracerService`),cf(),bT(788,` and record spans or custom metrics from inside the run. Metrics in particular aren't tied to a trace, so they can be reported from cron jobs and lifecycle hooks alike. See `),Aa(789,`a`,36),bT(790,`Manual instrumentation`),cf(),bT(791,` for that, and the `),Aa(792,`a`,37),bT(793,`Observability`),cf(),bT(794,` chapter for setup.`),cf(),Aa(795,`h4`,38)(796,`span`),bT(797,`Example`),cf()(),Aa(798,`p`),bT(799,`A working example is available in the `),Aa(800,`a`,39),bT(801,`27-scheduling sample`),cf(),bT(802,`.`),cf()(),Aa(803,`a`,40),Wa(804,`i`,41),Aa(805,`span`),bT(806,`Edit on GitHub`),cf()()()),c&2){let y=tT(43);zC(40),hf(` `,jT(41,1,`app.module`,y.isJsActive),`
`)}},dependencies:[Jc,Lt,ln,u,l$2,g],encapsulation:2})}return d})();var ve=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(d)))(p||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-validation`]],features:[xy],decls:1217,vars:32,consts:[[`contentReference`,``],[`app1c2e2d199e957b2a5937f24a054815a139f0ba48`,``],[`app8858ecb713487d43c9e38b3637940124bd123a7f`,``],[`appac45361c3bd2c4f4193d6268301083798c9e1adf`,``],[`app87088c24dd4358450892aa670aeb011aaa75221b`,``],[`appafe98d5bc6cbb9a6630b5ef72311651fc5ade1bd`,``],[`app626d8c2a2611d7c64ff6ea3e4b1dcc7a823f63c6`,``],[`app88e389c88b403b943f4b6797b05c414348a050c3`,``],[1,`content`],[1,`content-inner`],[`id`,`validation`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/typestack/class-validator`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://zod.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://valibot.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://arktype.io/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev/`],[`appAnchor`,``,`id`,`overview`],[`routerLink`,`/pipes`],[`href`,`#mapped-types`],[`appAnchor`,``,`id`,`using-the-built-in-validationpipe`],[1,`language-bash`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/typestack/class-transformer`],[1,`language-typescript`],[`appAnchor`,``,`id`,`auto-validation`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/typestack/class-validator#validation-decorators`],[1,`language-json`],[`appAnchor`,``,`id`,`disable-detailed-errors`],[`appAnchor`,``,`id`,`stripping-properties`],[`appAnchor`,``,`id`,`transform-payload-objects`],[1,`with-heading`],[1,`filename`],[`appAnchor`,``,`id`,`explicit-conversion`],[`appAnchor`,``,`id`,`mapped-types`],[1,`warning`],[`routerLink`,`/openapi/mapped-types`],[`routerLink`,`/graphql/mapped-types`],[`appAnchor`,``,`id`,`parsing-and-validating-arrays`],[`appAnchor`,``,`id`,`schema-based-validation`],[`routerLink`,`/websockets/gateways`],[`routerLink`,`/microservices/basics`],[`appAnchor`,``,`id`,`coercion-and-transformation`],[`appAnchor`,``,`id`,`unknown-properties`],[`appAnchor`,``,`id`,`deriving-schemas`],[`appAnchor`,``,`id`,`validating-custom-decorators`],[`routerLink`,`/custom-decorators`],[`appAnchor`,``,`id`,`schema-validation-options`],[`appAnchor`,``,`id`,`other-schema-libraries`],[`href`,`/openapi/introduction#standard-schema-zod-valibot`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/35-zod-validation`],[`appAnchor`,``,`id`,`websockets-and-microservices`],[`appAnchor`,``,`id`,`learn-more`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev/schema#what-schema-libraries-implement-the-spec`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/application/validation.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,8,0)(2,`div`,9)(3,`h3`,10),bT(4,`Validation`),cf(),Aa(5,`p`),bT(6,`Validate every piece of data a web application receives before acting on it. Nest provides several pipes that validate incoming requests automatically:`),cf(),Aa(7,`ul`)(8,`li`)(9,`code`),bT(10,`ValidationPipe`),cf(),bT(11,` validates classes decorated with `),Aa(12,`a`,11),bT(13,`class-validator`),cf(),bT(14,` rules.`),cf(),Aa(15,`li`)(16,`code`),bT(17,`StandardSchemaValidationPipe`),cf(),bT(18,` validates schemas written with `),Aa(19,`a`,12),bT(20,`Zod`),cf(),bT(21,`, `),Aa(22,`a`,13),bT(23,`Valibot`),cf(),bT(24,`, `),Aa(25,`a`,14),bT(26,`ArkType`),cf(),bT(27,`, or any other `),Aa(28,`a`,15),bT(29,`Standard Schema`),cf(),bT(30,` compatible library.`),cf(),Aa(31,`li`)(32,`code`),bT(33,`ParseIntPipe`),cf(),bT(34,`, `),Aa(35,`code`),bT(36,`ParseBoolPipe`),cf(),bT(37,`, `),Aa(38,`code`),bT(39,`ParseArrayPipe`),cf(),bT(40,`, and `),Aa(41,`code`),bT(42,`ParseUUIDPipe`),cf(),bT(43,` validate and convert individual values.`),cf()(),Aa(44,`h4`,16)(45,`span`),bT(46,`Overview`),cf()(),Aa(47,`p`),bT(48,`The `),Aa(49,`a`,17),bT(50,`Pipes`),cf(),bT(51,` chapter explains how pipes work and how to bind them to parameters, route handlers, controllers, or the whole application. This chapter builds on it and covers real-world use of the two validation pipes.`),cf(),Aa(52,`p`),bT(53,`The pipes differ in where the validation rules live:`),cf(),Aa(54,`ul`)(55,`li`),bT(56,`With `),Aa(57,`code`),bT(58,`ValidationPipe`),cf(),bT(59,`, rules are decorators on a `),Aa(60,`strong`),bT(61,`DTO class`),cf(),bT(62,`, and the class is also the parameter's TypeScript type. This approach integrates with the `),Aa(63,`a`,18),bT(64,`mapped types`),cf(),bT(65,` utilities and with the Swagger CLI plugin.`),cf(),Aa(66,`li`),bT(67,`With `),Aa(68,`code`),bT(69,`StandardSchemaValidationPipe`),cf(),bT(70,`, rules are a `),Aa(71,`strong`),bT(72,`schema object`),cf(),bT(73,`, and the parameter's TypeScript type is inferred from the schema. Schemas compose with the methods of their library, and no class or reflection metadata is involved.`),cf()(),Aa(74,`p`),bT(75,`Both pipes can be registered at the same time. `),Aa(76,`code`),bT(77,`ValidationPipe`),cf(),bT(78,` only validates parameters typed with a class, and `),Aa(79,`code`),bT(80,`StandardSchemaValidationPipe`),cf(),bT(81,` only validates parameters that declare a schema, so you can adopt schemas incrementally in an existing application.`),cf(),Aa(82,`h4`,19)(83,`span`),bT(84,`Using the built-in ValidationPipe`),cf()(),Aa(85,`p`),bT(86,`To begin using it, first install the required dependencies.`),cf(),Aa(87,`pre`)(88,`code`,20),bT(89,`
$ npm i --save class-validator class-transformer
`),cf()(),Aa(90,`blockquote`,21)(91,`strong`),bT(92,`Hint`),cf(),bT(93,` The `),Aa(94,`code`),bT(95,`ValidationPipe`),cf(),bT(96,` is exported from the `),Aa(97,`code`),bT(98,`@nestjs/common`),cf(),bT(99,` package.
`),cf(),Aa(100,`p`),bT(101,`Because this pipe uses the `),Aa(102,`a`,11)(103,`code`),bT(104,`class-validator`),cf()(),bT(105,` and `),Aa(106,`a`,22)(107,`code`),bT(108,`class-transformer`),cf()(),bT(109,` libraries, it supports many options. Pass them in a configuration object to the pipe's constructor. The pipe's own options are:`),cf(),Aa(110,`app-copy-button`)(111,`pre`)(112,`code`,23),bT(113,`
export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
  errorFormat?: 'list' | 'grouped';
  maxErrorMessagesLength?: number;
}
`),cf()()(),Aa(114,`p`),bT(115,`In addition to these, all `),Aa(116,`code`),bT(117,`class-validator`),cf(),bT(118,` options (inherited from the `),Aa(119,`code`),bT(120,`ValidatorOptions`),cf(),bT(121,` interface) are available:`),cf(),Aa(122,`table`)(123,`tr`)(124,`th`),bT(125,`Option`),cf(),Aa(126,`th`),bT(127,`Type`),cf(),Aa(128,`th`),bT(129,`Description`),cf()(),Aa(130,`tr`)(131,`td`)(132,`code`),bT(133,`enableDebugMessages`),cf()(),Aa(134,`td`)(135,`code`),bT(136,`boolean`),cf()(),Aa(137,`td`),bT(138,`If set to true, validator will print extra warning messages to the console when something is not right.`),cf()(),Aa(139,`tr`)(140,`td`)(141,`code`),bT(142,`skipUndefinedProperties`),cf()(),Aa(143,`td`)(144,`code`),bT(145,`boolean`),cf()(),Aa(146,`td`),bT(147,`If set to true then validator will skip validation of all properties that are undefined in the validating object.`),cf()(),Aa(148,`tr`)(149,`td`)(150,`code`),bT(151,`skipNullProperties`),cf()(),Aa(152,`td`)(153,`code`),bT(154,`boolean`),cf()(),Aa(155,`td`),bT(156,`If set to true then validator will skip validation of all properties that are null in the validating object.`),cf()(),Aa(157,`tr`)(158,`td`)(159,`code`),bT(160,`skipMissingProperties`),cf()(),Aa(161,`td`)(162,`code`),bT(163,`boolean`),cf()(),Aa(164,`td`),bT(165,`If set to true then validator will skip validation of all properties that are null or undefined in the validating object.`),cf()(),Aa(166,`tr`)(167,`td`)(168,`code`),bT(169,`whitelist`),cf()(),Aa(170,`td`)(171,`code`),bT(172,`boolean`),cf()(),Aa(173,`td`),bT(174,`If set to true, validator will strip validated (returned) object of any properties that do not use any validation decorators.`),cf()(),Aa(175,`tr`)(176,`td`)(177,`code`),bT(178,`forbidNonWhitelisted`),cf()(),Aa(179,`td`)(180,`code`),bT(181,`boolean`),cf()(),Aa(182,`td`),bT(183,`If set to true, instead of stripping non-whitelisted properties validator will throw an exception.`),cf()(),Aa(184,`tr`)(185,`td`)(186,`code`),bT(187,`forbidUnknownValues`),cf()(),Aa(188,`td`)(189,`code`),bT(190,`boolean`),cf()(),Aa(191,`td`),bT(192,`If set to true, attempts to validate unknown objects fail immediately.`),cf()(),Aa(193,`tr`)(194,`td`)(195,`code`),bT(196,`disableErrorMessages`),cf()(),Aa(197,`td`)(198,`code`),bT(199,`boolean`),cf()(),Aa(200,`td`),bT(201,`If set to true, validation errors will not be returned to the client.`),cf()(),Aa(202,`tr`)(203,`td`)(204,`code`),bT(205,`errorHttpStatusCode`),cf()(),Aa(206,`td`)(207,`code`),bT(208,`number`),cf()(),Aa(209,`td`),bT(210,`This setting allows you to specify which exception type will be used in case of an error. By default it throws `),Aa(211,`code`),bT(212,`BadRequestException`),cf(),bT(213,`.`),cf()(),Aa(214,`tr`)(215,`td`)(216,`code`),bT(217,`exceptionFactory`),cf()(),Aa(218,`td`)(219,`code`),bT(220,`Function`),cf()(),Aa(221,`td`),bT(222,`Takes an array of the validation errors and returns an exception object to be thrown.`),cf()(),Aa(223,`tr`)(224,`td`)(225,`code`),bT(226,`groups`),cf()(),Aa(227,`td`)(228,`code`),bT(229,`string[]`),cf()(),Aa(230,`td`),bT(231,`Groups to be used during validation of the object.`),cf()(),Aa(232,`tr`)(233,`td`)(234,`code`),bT(235,`always`),cf()(),Aa(236,`td`)(237,`code`),bT(238,`boolean`),cf()(),Aa(239,`td`),bT(240,`Set default for `),Aa(241,`code`),bT(242,`always`),cf(),bT(243,` option of decorators. Default can be overridden in decorator options.`),cf()(),Aa(244,`tr`)(245,`td`)(246,`code`),bT(247,`strictGroups`),cf()(),Aa(248,`td`)(249,`code`),bT(250,`boolean`),cf()(),Aa(251,`td`),bT(252,`If `),Aa(253,`code`),bT(254,`groups`),cf(),bT(255,` is not given or is empty, ignore decorators with at least one group.`),cf()(),Aa(256,`tr`)(257,`td`)(258,`code`),bT(259,`dismissDefaultMessages`),cf()(),Aa(260,`td`)(261,`code`),bT(262,`boolean`),cf()(),Aa(263,`td`),bT(264,`If set to true, the validation will not use default messages. Error message always will be `),Aa(265,`code`),bT(266,`undefined`),cf(),bT(267,` if its not explicitly set.`),cf()(),Aa(268,`tr`)(269,`td`)(270,`code`),bT(271,`validationError.target`),cf()(),Aa(272,`td`)(273,`code`),bT(274,`boolean`),cf()(),Aa(275,`td`),bT(276,`Indicates if target should be exposed in `),Aa(277,`code`),bT(278,`ValidationError`),cf(),bT(279,`. `),Aa(280,`code`),bT(281,`ValidationPipe`),cf(),bT(282,` sets it to `),Aa(283,`code`),bT(284,`false`),cf(),bT(285,` by default, so an `),Aa(286,`code`),bT(287,`exceptionFactory`),cf(),bT(288,` that reads `),Aa(289,`code`),bT(290,`error.target`),cf(),bT(291,` gets `),Aa(292,`code`),bT(293,`undefined`),cf(),bT(294,` unless this is set to `),Aa(295,`code`),bT(296,`true`),cf(),bT(297,`.`),cf()(),Aa(298,`tr`)(299,`td`)(300,`code`),bT(301,`validationError.value`),cf()(),Aa(302,`td`)(303,`code`),bT(304,`boolean`),cf()(),Aa(305,`td`),bT(306,`Indicates if validated value should be exposed in `),Aa(307,`code`),bT(308,`ValidationError`),cf(),bT(309,`.`),cf()(),Aa(310,`tr`)(311,`td`)(312,`code`),bT(313,`stopAtFirstError`),cf()(),Aa(314,`td`)(315,`code`),bT(316,`boolean`),cf()(),Aa(317,`td`),bT(318,`When set to true, validation of the given property will stop after encountering the first error. Defaults to false.`),cf()(),Aa(319,`tr`)(320,`td`)(321,`code`),bT(322,`errorFormat`),cf()(),Aa(323,`td`)(324,`code`),bT(325,`'list' | 'grouped'`),cf()(),Aa(326,`td`),bT(327,`Specifies the format of validation error messages. `),Aa(328,`code`),bT(329,`'list'`),cf(),bT(330,` (default) returns an array of error message strings. `),Aa(331,`code`),bT(332,`'grouped'`),cf(),bT(333,` returns an object with property paths as keys and arrays of unmodified error messages as values, preserving custom validation messages without prepending parent path prefixes.`),cf()(),Aa(334,`tr`)(335,`td`)(336,`code`),bT(337,`maxErrorMessagesLength`),cf()(),Aa(338,`td`)(339,`code`),bT(340,`number`),cf()(),Aa(341,`td`),bT(342,`Maximum total length, in characters, of the messages in an error response of the built-in exception factory. The errors past it are left out, and a last message says so. Set to `),Aa(343,`code`),bT(344,`Infinity`),cf(),bT(345,` to lift the limit. Defaults to `),Aa(346,`code`),bT(347,`1000000`),cf(),bT(348,`.`),cf()()(),Aa(349,`blockquote`,21)(350,`strong`),bT(351,`Notice`),cf(),bT(352,` Find more information about the `),Aa(353,`code`),bT(354,`class-validator`),cf(),bT(355,` package in its `),Aa(356,`a`,11),bT(357,`repository`),cf(),bT(358,`.
`),cf(),Aa(359,`h4`,24)(360,`span`),bT(361,`Auto-validation`),cf()(),Aa(362,`p`),bT(363,`Start by binding `),Aa(364,`code`),bT(365,`ValidationPipe`),cf(),bT(366,` at the application level, so that every endpoint is protected from receiving invalid data.`),cf(),Aa(367,`app-copy-button`)(368,`pre`)(369,`code`,23),bT(370,`
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(371,`p`),bT(372,`To test the pipe, create a basic endpoint:`),cf(),Aa(373,`app-copy-button`)(374,`pre`)(375,`code`,23),bT(376,`
@Post()
create(@Body() createUserDto: CreateUserDto) {
  return 'This action adds a new user';
}
`),cf()()(),Aa(377,`blockquote`,21)(378,`strong`),bT(379,`Hint`),cf(),bT(380,` TypeScript does not emit metadata for `),Aa(381,`strong`),bT(382,`generics or interfaces`),cf(),bT(383,`, so `),Aa(384,`code`),bT(385,`ValidationPipe`),cf(),bT(386,` cannot validate DTOs declared with them. Use concrete classes for your DTOs.
`),cf(),Aa(387,`blockquote`,21)(388,`strong`),bT(389,`Hint`),cf(),bT(390,` Don't import DTOs with a type-only import, because type-only imports are erased at runtime. Write `),Aa(391,`code`),bT(392),cf(),bT(393,` instead of `),Aa(394,`code`),bT(395),cf(),bT(396,`.
`),cf(),Aa(397,`p`),bT(398,`Next, add validation rules to the `),Aa(399,`code`),bT(400,`CreateUserDto`),cf(),bT(401,` with the decorators provided by the `),Aa(402,`code`),bT(403,`class-validator`),cf(),bT(404,` package (see the `),Aa(405,`a`,25),bT(406,`full list`),cf(),bT(407,`). Every route that uses `),Aa(408,`code`),bT(409,`CreateUserDto`),cf(),bT(410,` then enforces these rules.`),cf(),Aa(411,`app-copy-button`)(412,`pre`)(413,`code`,23),bT(414,`
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
`),cf()()(),Aa(415,`p`),bT(416,`With these rules in place, a request whose body contains an invalid `),Aa(417,`code`),bT(418,`email`),cf(),bT(419,` property receives a `),Aa(420,`code`),bT(421,`400 Bad Request`),cf(),bT(422,` response with the following body:`),cf(),Aa(423,`pre`)(424,`code`,26),bT(425,`
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": ["email must be an email"]
}
`),cf()(),Aa(426,`p`)(427,`code`),bT(428,`ValidationPipe`),cf(),bT(429,` validates other parts of the request as well. For example, to accept only numeric values for the `),Aa(430,`code`),bT(431,`:id`),cf(),bT(432,` path parameter, use the following construct:`),cf(),Aa(433,`app-copy-button`)(434,`pre`)(435,`code`,23),bT(436,`
@Get(':id')
findOne(@Param() params: FindOneParams) {
  return 'This action returns a user';
}
`),cf()()(),Aa(437,`p`),bT(438,`Like a DTO, `),Aa(439,`code`),bT(440,`FindOneParams`),cf(),bT(441,` is a class that defines validation rules with `),Aa(442,`code`),bT(443,`class-validator`),cf(),bT(444,`:`),cf(),Aa(445,`app-copy-button`)(446,`pre`)(447,`code`,23),bT(448,`
import { IsNumberString } from 'class-validator';

export class FindOneParams {
  @IsNumberString()
  id: string;
}
`),cf()()(),Aa(449,`h4`,27)(450,`span`),bT(451,`Disable detailed errors`),cf()(),Aa(452,`p`),bT(453,`Error messages explain what was wrong with a request, but some production environments prefer not to expose them. To disable detailed errors, pass an options object to the `),Aa(454,`code`),bT(455,`ValidationPipe`),cf(),bT(456,`:`),cf(),Aa(457,`app-copy-button`)(458,`pre`)(459,`code`,23),bT(460,`
app.useGlobalPipes(
  new ValidationPipe({
    disableErrorMessages: true,
  }),
);
`),cf()()(),Aa(461,`p`),bT(462,`As a result, the response body no longer contains detailed error messages.`),cf(),Aa(463,`h4`,28)(464,`span`),bT(465,`Stripping properties`),cf()(),Aa(466,`p`)(467,`code`),bT(468,`ValidationPipe`),cf(),bT(469,` can also filter out properties that the route handler should not receive. When you `),Aa(470,`strong`),bT(471,`whitelist`),cf(),bT(472,` the acceptable properties, any property not included in the whitelist is stripped from the resulting object. For example, if the handler expects `),Aa(473,`code`),bT(474,`email`),cf(),bT(475,` and `),Aa(476,`code`),bT(477,`password`),cf(),bT(478,`, but a request also includes an `),Aa(479,`code`),bT(480,`age`),cf(),bT(481,` property, `),Aa(482,`code`),bT(483,`age`),cf(),bT(484,` is removed from the resulting DTO. To enable this behavior, set `),Aa(485,`code`),bT(486,`whitelist`),cf(),bT(487,` to `),Aa(488,`code`),bT(489,`true`),cf(),bT(490,`.`),cf(),Aa(491,`app-copy-button`)(492,`pre`)(493,`code`,23),bT(494,`
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
  }),
);
`),cf()()(),Aa(495,`p`),bT(496,`With this option enabled, properties without any decorator in the validation class are removed.`),cf(),Aa(497,`p`),bT(498,`Alternatively, you can reject requests that contain non-whitelisted properties with an error response. To do so, set `),Aa(499,`code`),bT(500,`forbidNonWhitelisted`),cf(),bT(501,` to `),Aa(502,`code`),bT(503,`true`),cf(),bT(504,` in addition to `),Aa(505,`code`),bT(506,`whitelist`),cf(),bT(507,`.`),cf(),Aa(508,`p`),Wa(509,`app-banner-courses`),cf(),Aa(510,`h4`,29)(511,`span`),bT(512,`Transform payload objects`),cf()(),Aa(513,`p`),bT(514,`Payloads arrive over the network as plain JavaScript objects. `),Aa(515,`code`),bT(516,`ValidationPipe`),cf(),bT(517,` can transform them into instances of their DTO classes. To enable auto-transformation, set `),Aa(518,`code`),bT(519,`transform`),cf(),bT(520,` to `),Aa(521,`code`),bT(522,`true`),cf(),bT(523,`. You can do this at the method level:`),cf(),Aa(524,`app-copy-button`,30)(525,`span`,31),bT(526),LT(527,`extension`),Wa(528,`app-tabs`,null,1),cf(),Aa(530,`pre`)(531,`code`,23),bT(532,`
@Post()
@UsePipes(new ValidationPipe({ transform: true }))
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()()(),Aa(533,`p`),bT(534,`To enable this behavior globally, set the option on a global pipe:`),cf(),Aa(535,`app-copy-button`)(536,`pre`)(537,`code`,23),bT(538,`
app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
  }),
);
`),cf()()(),Aa(539,`p`),bT(540,`With auto-transformation enabled, `),Aa(541,`code`),bT(542,`ValidationPipe`),cf(),bT(543,` also converts primitive types. In the following example, the `),Aa(544,`code`),bT(545,`findOne()`),cf(),bT(546,` method takes the `),Aa(547,`code`),bT(548,`id`),cf(),bT(549,` path parameter as an argument:`),cf(),Aa(550,`app-copy-button`)(551,`pre`)(552,`code`,23),bT(553,`
@Get(':id')
findOne(@Param('id') id: number) {
  console.log(typeof id === 'number'); // true
  return 'This action returns a user';
}
`),cf()()(),Aa(554,`p`),bT(555,`Path parameters and query parameters always arrive as strings. Because the method signature declares `),Aa(556,`code`),bT(557,`id`),cf(),bT(558,` as a `),Aa(559,`code`),bT(560,`number`),cf(),bT(561,`, `),Aa(562,`code`),bT(563,`ValidationPipe`),cf(),bT(564,` converts the string identifier to a number.`),cf(),Aa(565,`h4`,32)(566,`span`),bT(567,`Explicit conversion`),cf()(),Aa(568,`p`),bT(569,`The previous section showed how `),Aa(570,`code`),bT(571,`ValidationPipe`),cf(),bT(572,` implicitly converts query and path parameters based on their declared types. That conversion requires auto-transformation to be enabled.`),cf(),Aa(573,`p`),bT(574,`With auto-transformation disabled, you can convert values explicitly with `),Aa(575,`code`),bT(576,`ParseIntPipe`),cf(),bT(577,` or `),Aa(578,`code`),bT(579,`ParseBoolPipe`),cf(),bT(580,`. There is no `),Aa(581,`code`),bT(582,`ParseStringPipe`),cf(),bT(583,`, because path and query parameters are already strings.`),cf(),Aa(584,`app-copy-button`)(585,`pre`)(586,`code`,23),bT(587,`
@Get(':id')
findOne(
  @Param('id', ParseIntPipe) id: number,
  @Query('sort', ParseBoolPipe) sort: boolean,
) {
  console.log(typeof id === 'number'); // true
  console.log(typeof sort === 'boolean'); // true
  return 'This action returns a user';
}
`),cf()()(),Aa(588,`blockquote`,21)(589,`strong`),bT(590,`Hint`),cf(),bT(591,` The `),Aa(592,`code`),bT(593,`ParseIntPipe`),cf(),bT(594,` and `),Aa(595,`code`),bT(596,`ParseBoolPipe`),cf(),bT(597,` are exported from the `),Aa(598,`code`),bT(599,`@nestjs/common`),cf(),bT(600,` package.
`),cf(),Aa(601,`h4`,33)(602,`span`),bT(603,`Mapped types`),cf()(),Aa(604,`p`),bT(605,`Features such as `),Aa(606,`strong`),bT(607,`CRUD`),cf(),bT(608,` (Create/Read/Update/Delete) often need several variants of a base type. Nest provides utility functions that perform these type transformations.`),cf(),Aa(609,`blockquote`,34)(610,`strong`),bT(611,`Warning`),cf(),bT(612,` If your application uses the `),Aa(613,`code`),bT(614,`@nestjs/swagger`),cf(),bT(615,` package, see `),Aa(616,`a`,35),bT(617,`this chapter`),cf(),bT(618,` for more information about mapped types. Likewise, if you use the `),Aa(619,`code`),bT(620,`@nestjs/graphql`),cf(),bT(621,` package, see `),Aa(622,`a`,36),bT(623,`this chapter`),cf(),bT(624,`. Both packages rely heavily on type metadata, so they export their own versions of these utilities. Importing them from `),Aa(625,`code`),bT(626,`@nestjs/mapped-types`),cf(),bT(627,` instead of `),Aa(628,`code`),bT(629,`@nestjs/swagger`),cf(),bT(630,` or `),Aa(631,`code`),bT(632,`@nestjs/graphql`),cf(),bT(633,` can cause undocumented side effects.
`),cf(),Aa(634,`p`),bT(635,`Input validation types (DTOs) often come in `),Aa(636,`strong`),bT(637,`create`),cf(),bT(638,` and `),Aa(639,`strong`),bT(640,`update`),cf(),bT(641,` variants of the same type: the `),Aa(642,`strong`),bT(643,`create`),cf(),bT(644,` variant requires all fields, while the `),Aa(645,`strong`),bT(646,`update`),cf(),bT(647,` variant makes them optional. The mapped types utilities derive such variants without repeating the property declarations or their validation decorators. Consider the following `),Aa(648,`strong`),bT(649,`create`),cf(),bT(650,` type:`),cf(),Aa(651,`app-copy-button`)(652,`pre`)(653,`code`,23),bT(654,`
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
`),cf()()(),Aa(655,`blockquote`,21)(656,`strong`),bT(657,`Hint`),cf(),Aa(658,`code`),bT(659,`PartialType()`),cf(),bT(660,`, `),Aa(661,`code`),bT(662,`PickType()`),cf(),bT(663,`, `),Aa(664,`code`),bT(665,`OmitType()`),cf(),bT(666,`, and `),Aa(667,`code`),bT(668,`IntersectionType()`),cf(),bT(669,` are imported from the `),Aa(670,`code`),bT(671,`@nestjs/mapped-types`),cf(),bT(672,` package.
`),cf(),Aa(673,`p`),bT(674,`The `),Aa(675,`code`),bT(676,`PartialType()`),cf(),bT(677,` function returns a type (class) with all the properties of the input type set to optional:`),cf(),Aa(678,`app-copy-button`)(679,`pre`)(680,`code`,23),bT(681,`
export class UpdateCatDto extends PartialType(CreateCatDto) {}
`),cf()()(),Aa(682,`p`),bT(683,`The `),Aa(684,`code`),bT(685,`PickType()`),cf(),bT(686,` function constructs a type from a subset of the input type's properties:`),cf(),Aa(687,`app-copy-button`)(688,`pre`)(689,`code`,23),bT(690,`
export class UpdateCatAgeDto extends PickType(CreateCatDto, ['age'] as const) {}
`),cf()()(),Aa(691,`p`),bT(692,`The `),Aa(693,`code`),bT(694,`OmitType()`),cf(),bT(695,` function constructs a type with every property of the input type `),Aa(696,`strong`),bT(697,`except`),cf(),bT(698,` the listed ones. The second argument is an array of property names:`),cf(),Aa(699,`app-copy-button`)(700,`pre`)(701,`code`,23),bT(702,`
export class UpdateCatDto extends OmitType(CreateCatDto, ['name'] as const) {}
`),cf()()(),Aa(703,`p`),bT(704,`The `),Aa(705,`code`),bT(706,`IntersectionType()`),cf(),bT(707,` function combines the properties of two types into one new type (class). For example, given an additional type:`),cf(),Aa(708,`app-copy-button`)(709,`pre`)(710,`code`,23),bT(711,`
export class AdditionalCatInfo {
  color: string;
}
`),cf()()(),Aa(712,`p`),bT(713,`The following type contains the properties of both:`),cf(),Aa(714,`app-copy-button`)(715,`pre`)(716,`code`,23),bT(717,`
export class UpdateCatDto extends IntersectionType(
  CreateCatDto,
  AdditionalCatInfo,
) {}
`),cf()()(),Aa(718,`p`),bT(719,`The type mapping utility functions are composable. For example, the following type has all of the properties of `),Aa(720,`code`),bT(721,`CreateCatDto`),cf(),bT(722,` except `),Aa(723,`code`),bT(724,`name`),cf(),bT(725,`, all set to optional:`),cf(),Aa(726,`app-copy-button`)(727,`pre`)(728,`code`,23),bT(729,`
export class UpdateCatDto extends PartialType(
  OmitType(CreateCatDto, ['name'] as const),
) {}
`),cf()()(),Aa(730,`h4`,37)(731,`span`),bT(732,`Parsing and validating arrays`),cf()(),Aa(733,`p`),bT(734,`TypeScript does not emit metadata for generic types such as arrays, so `),Aa(735,`code`),bT(736,`ValidationPipe`),cf(),bT(737,` cannot validate the elements of an array parameter. In the following code, the elements of `),Aa(738,`code`),bT(739,`createUserDtos`),cf(),bT(740,` are not validated:`),cf(),Aa(741,`app-copy-button`)(742,`pre`)(743,`code`,23),bT(744,`
@Post()
createBulk(@Body() createUserDtos: CreateUserDto[]) {
  return 'This action adds new users';
}
`),cf()()(),Aa(745,`p`),bT(746,`To validate the array, create a dedicated class with a property that wraps the array, or use the `),Aa(747,`code`),bT(748,`ParseArrayPipe`),cf(),bT(749,`:`),cf(),Aa(750,`app-copy-button`)(751,`pre`)(752,`code`,23),bT(753,`
@Post()
createBulk(
  @Body(new ParseArrayPipe({ items: CreateUserDto }))
  createUserDtos: CreateUserDto[],
) {
  return 'This action adds new users';
}
`),cf()()(),Aa(754,`p`)(755,`code`),bT(756,`ParseArrayPipe`),cf(),bT(757,` is also useful for parsing query parameters. Consider a `),Aa(758,`code`),bT(759,`findByIds()`),cf(),bT(760,` method that returns users based on identifiers passed in the query string:`),cf(),Aa(761,`app-copy-button`)(762,`pre`)(763,`code`,23),bT(764,`
@Get()
findByIds(
  @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
  ids: number[],
) {
  return 'This action returns users by ids';
}
`),cf()()(),Aa(765,`p`),bT(766,`This construction parses and validates the query parameters of a request such as the following:`),cf(),Aa(767,`pre`)(768,`code`,20),bT(769,`
GET /?ids=1,2,3
`),cf()(),Aa(770,`h4`,38)(771,`span`),bT(772,`Schema-based validation`),cf()(),Aa(773,`p`),bT(774,`The `),Aa(775,`code`),bT(776,`StandardSchemaValidationPipe`),cf(),bT(777,` validates values against schemas instead of decorated classes. It accepts any schema that implements the `),Aa(778,`a`,15),bT(779,`Standard Schema`),cf(),bT(780,` specification, which includes `),Aa(781,`a`,12),bT(782,`Zod`),cf(),bT(783,`, `),Aa(784,`a`,13),bT(785,`Valibot`),cf(),bT(786,`, and `),Aa(787,`a`,14),bT(788,`ArkType`),cf(),bT(789,`. The schema is the single source of truth for a payload: it validates the value at runtime, and its inferred type is the handler parameter's TypeScript type. The examples in this section use Zod.`),cf(),Aa(790,`pre`)(791,`code`,20),bT(792,`
$ npm i --save zod
`),cf()(),Aa(793,`p`),bT(794,`Define a schema and infer the DTO type from it:`),cf(),Aa(795,`app-copy-button`,30)(796,`span`,31),bT(797),LT(798,`extension`),Wa(799,`app-tabs`,null,2),cf(),Aa(801,`pre`)(802,`code`,23),bT(803,`
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  displayName: z.string().max(50).optional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
`),cf()()(),Aa(804,`p`),bT(805,`Next, bind the pipe at the application level:`),cf(),Aa(806,`app-copy-button`,30)(807,`span`,31),bT(808),LT(809,`extension`),Wa(810,`app-tabs`,null,3),cf(),Aa(812,`pre`)(813,`code`,23),bT(814,`
import { StandardSchemaValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new StandardSchemaValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(815,`p`),bT(816,`Then attach the schema to a parameter with the `),Aa(817,`code`),bT(818,`schema`),cf(),bT(819,` option of the parameter decorator:`),cf(),Aa(820,`app-copy-button`,30)(821,`span`,31),bT(822),LT(823,`extension`),Wa(824,`app-tabs`,null,4),cf(),Aa(826,`pre`)(827,`code`,23),bT(828,`
@Post()
create(@Body({ schema: createUserSchema }) createUserDto: CreateUserDto) {
  return this.usersService.create(createUserDto);
}
`),cf()()(),Aa(829,`p`),bT(830,`The pipe validates only the parameters that declare a schema and passes every other value through unchanged, so binding it globally is safe. If the request body doesn't match the schema, the application responds with `),Aa(831,`code`),bT(832,`400 Bad Request`),cf(),bT(833,`. Each message is prefixed with the path of the invalid property:`),cf(),Aa(834,`pre`)(835,`code`,26),bT(836,`
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": [
    "email: Invalid email address",
    "password: Too small: expected string to have >=8 characters"
  ]
}
`),cf()(),Aa(837,`p`),bT(838,`The `),Aa(839,`code`),bT(840,`schema`),cf(),bT(841,` option is supported by `),Aa(842,`code`),bT(843,`@Body()`),cf(),bT(844,`, `),Aa(845,`code`),bT(846,`@Query()`),cf(),bT(847,`, and `),Aa(848,`code`),bT(849,`@Param()`),cf(),bT(850,`, as well as by `),Aa(851,`code`),bT(852,`@MessageBody()`),cf(),bT(853,` in `),Aa(854,`a`,39),bT(855,`gateways`),cf(),bT(856,` and `),Aa(857,`code`),bT(858,`@Payload()`),cf(),bT(859,` in `),Aa(860,`a`,40),bT(861,`microservices`),cf(),bT(862,`. Pass it as the only argument to validate the whole object, or after a property name to validate a single value:`),cf(),Aa(863,`app-copy-button`)(864,`pre`)(865,`code`,23),bT(866,`
@Post('invitations')
invite(@Body('email', { schema: z.email() }) email: string) {
  return this.usersService.invite(email);
}
`),cf()()(),Aa(867,`h4`,41)(868,`span`),bT(869,`Coercion and transformation`),cf()(),Aa(870,`p`),bT(871,`Path parameters and query parameters always arrive as strings. Coercing schemas, such as `),Aa(872,`code`),bT(873,`z.coerce.number()`),cf(),bT(874,`, convert them before validating:`),cf(),Aa(875,`app-copy-button`)(876,`pre`)(877,`code`,23),bT(878,`
@Get(':id')
findOne(@Param('id', { schema: z.coerce.number().int().positive() }) id: number) {
  return this.usersService.findOne(id);
}
`),cf()()(),Aa(879,`p`),bT(880,`Schemas can also apply defaults and transformations. The following schema describes the query string of a paginated list:`),cf(),Aa(881,`app-copy-button`,30)(882,`span`,31),bT(883),LT(884,`extension`),Wa(885,`app-tabs`,null,5),cf(),Aa(887,`pre`)(888,`code`,23),bT(889,`
import { z } from 'zod';

export const listUsersQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().trim().optional(),
});

export type ListUsersQuery = z.infer<typeof listUsersQuerySchema>;
`),cf()()(),Aa(890,`app-copy-button`)(891,`pre`)(892,`code`,23),bT(893,`
@Get()
findAll(@Query({ schema: listUsersQuerySchema }) query: ListUsersQuery) {
  return this.usersService.findAll(query);
}
`),cf()()(),Aa(894,`p`),bT(895,`For the request `),Aa(896,`code`),bT(897,`GET /users?page=2&search=%20kamil%20`),cf(),bT(898,`, the handler receives `),Aa(899,`code`),bT(900,`page`),cf(),bT(901,` as the number `),Aa(902,`code`),bT(903,`2`),cf(),bT(904,`, `),Aa(905,`code`),bT(906,`limit`),cf(),bT(907,` as the default `),Aa(908,`code`),bT(909,`20`),cf(),bT(910,`, and `),Aa(911,`code`),bT(912,`search`),cf(),bT(913,` as the trimmed string `),Aa(914,`code`),bT(915,`'kamil'`),cf(),bT(916,`.`),cf(),Aa(917,`p`),bT(918,`By default, the pipe passes the schema's `),Aa(919,`strong`),bT(920,`output`),cf(),bT(921,` to the handler, so coercion, defaults, and transformations take effect. To validate the value but pass the original input through unchanged, set `),Aa(922,`code`),bT(923,`transform`),cf(),bT(924,` to `),Aa(925,`code`),bT(926,`false`),cf(),bT(927,`. In that case, type the parameter with the schema's input type (`),Aa(928,`code`),bT(929,`z.input<typeof schema>`),cf(),bT(930,` in Zod).`),cf(),Aa(931,`h4`,42)(932,`span`),bT(933,`Unknown properties`),cf()(),Aa(934,`p`),bT(935,`How a schema treats properties it doesn't declare is decided by the schema itself, not by the pipe. In Zod:`),cf(),Aa(936,`ul`)(937,`li`)(938,`code`),bT(939,`z.object()`),cf(),bT(940,` strips unknown properties, like the `),Aa(941,`code`),bT(942,`whitelist`),cf(),bT(943,` option of `),Aa(944,`code`),bT(945,`ValidationPipe`),cf(),bT(946,`.`),cf(),Aa(947,`li`)(948,`code`),bT(949,`z.strictObject()`),cf(),bT(950,` rejects them, like the `),Aa(951,`code`),bT(952,`forbidNonWhitelisted`),cf(),bT(953,` option. The error message is `),Aa(954,`code`),bT(955,`Unrecognized key: "age"`),cf(),bT(956,`.`),cf(),Aa(957,`li`)(958,`code`),bT(959,`z.looseObject()`),cf(),bT(960,` keeps them.`),cf()(),Aa(961,`h4`,43)(962,`span`),bT(963,`Deriving schemas`),cf()(),Aa(964,`p`),bT(965,`The `),Aa(966,`a`,18),bT(967,`mapped types`),cf(),bT(968,` utilities derive new DTO classes from existing ones. With schemas, the library's own methods serve the same purpose:`),cf(),Aa(969,`app-copy-button`,30)(970,`span`,31),bT(971),LT(972,`extension`),Wa(973,`app-tabs`,null,6),cf(),Aa(975,`pre`)(976,`code`,23),bT(977,`
import { z } from 'zod';
import { createUserSchema } from './create-user.dto.js';

// All properties optional, like PartialType()
export const updateUserSchema = createUserSchema.partial();

// Only the listed properties, like PickType()
export const changeEmailSchema = createUserSchema.pick({ email: true });

// Every property except the listed ones, like OmitType()
export const publicProfileSchema = createUserSchema.omit({ password: true });

// Additional properties, like IntersectionType()
export const createAdminSchema = createUserSchema.extend({
  role: z.enum(['admin', 'editor']),
});

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
`),cf()()(),Aa(978,`p`),bT(979,`Arrays need no special handling either. Wrap the item schema in `),Aa(980,`code`),bT(981,`z.array()`),cf(),bT(982,`, and every element is validated:`),cf(),Aa(983,`app-copy-button`)(984,`pre`)(985,`code`,23),bT(986,`
@Post('bulk')
createBulk(
  @Body({ schema: z.array(createUserSchema) }) createUserDtos: CreateUserDto[],
) {
  return this.usersService.createMany(createUserDtos);
}
`),cf()()(),Aa(987,`p`),bT(988,`A message for an invalid element is prefixed with its index, e.g., `),Aa(989,`code`),bT(990,`1.email: Invalid email address`),cf(),bT(991,`.`),cf(),Aa(992,`h4`,44)(993,`span`),bT(994,`Validating custom decorators`),cf()(),Aa(995,`p`),bT(996,`Parameter decorators created with `),Aa(997,`a`,45)(998,`code`),bT(999,`createParamDecorator()`),cf()(),bT(1e3,` accept the `),Aa(1001,`code`),bT(1002,`schema`),cf(),bT(1003,` option too. For example, the following decorator extracts a tenant identifier from a request header:`),cf(),Aa(1004,`app-copy-button`,30)(1005,`span`,31),bT(1006),LT(1007,`extension`),Wa(1008,`app-tabs`,null,7),cf(),Aa(1010,`pre`)(1011,`code`,23),bT(1012,`
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const TenantId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    ctx.switchToHttp().getRequest().headers['x-tenant-id'],
);
`),cf()()(),Aa(1013,`app-copy-button`)(1014,`pre`)(1015,`code`,23),bT(1016,`
@Get()
findAll(@TenantId({ schema: z.uuid() }) tenantId: string) {
  return this.projectsService.findAll(tenantId);
}
`),cf()()(),Aa(1017,`p`),bT(1018,`The pipe skips custom decorators unless you enable the `),Aa(1019,`code`),bT(1020,`validateCustomDecorators`),cf(),bT(1021,` option:`),cf(),Aa(1022,`app-copy-button`)(1023,`pre`)(1024,`code`,23),bT(1025,`
app.useGlobalPipes(
  new StandardSchemaValidationPipe({
    validateCustomDecorators: true,
  }),
);
`),cf()()(),Aa(1026,`h4`,46)(1027,`span`),bT(1028,`Schema validation options`),cf()(),Aa(1029,`p`),bT(1030,`The `),Aa(1031,`code`),bT(1032,`StandardSchemaValidationPipe`),cf(),bT(1033,` constructor accepts the following options:`),cf(),Aa(1034,`table`)(1035,`tr`)(1036,`th`),bT(1037,`Option`),cf(),Aa(1038,`th`),bT(1039,`Type`),cf(),Aa(1040,`th`),bT(1041,`Description`),cf()(),Aa(1042,`tr`)(1043,`td`)(1044,`code`),bT(1045,`transform`),cf()(),Aa(1046,`td`)(1047,`code`),bT(1048,`boolean`),cf()(),Aa(1049,`td`),bT(1050,`If `),Aa(1051,`code`),bT(1052,`true`),cf(),bT(1053,`, the handler receives the value produced by the schema. If `),Aa(1054,`code`),bT(1055,`false`),cf(),bT(1056,`, it receives the original input after successful validation. Default: `),Aa(1057,`code`),bT(1058,`true`),cf(),bT(1059,`.`),cf()(),Aa(1060,`tr`)(1061,`td`)(1062,`code`),bT(1063,`validateCustomDecorators`),cf()(),Aa(1064,`td`)(1065,`code`),bT(1066,`boolean`),cf()(),Aa(1067,`td`),bT(1068,`If `),Aa(1069,`code`),bT(1070,`true`),cf(),bT(1071,`, parameters of custom decorators created with `),Aa(1072,`code`),bT(1073,`createParamDecorator()`),cf(),bT(1074,` are validated as well. Default: `),Aa(1075,`code`),bT(1076,`false`),cf(),bT(1077,`.`),cf()(),Aa(1078,`tr`)(1079,`td`)(1080,`code`),bT(1081,`validateOptions`),cf()(),Aa(1082,`td`)(1083,`code`),bT(1084,`Record<string, unknown>`),cf()(),Aa(1085,`td`),bT(1086,`Options forwarded to the schema's `),Aa(1087,`code`),bT(1088,`~standard.validate()`),cf(),bT(1089,` method, for libraries that support them.`),cf()(),Aa(1090,`tr`)(1091,`td`)(1092,`code`),bT(1093,`errorHttpStatusCode`),cf()(),Aa(1094,`td`)(1095,`code`),bT(1096,`number`),cf()(),Aa(1097,`td`),bT(1098,`The HTTP status code of the exception thrown when validation fails. Default: `),Aa(1099,`code`),bT(1100,`400`),cf(),bT(1101,`.`),cf()(),Aa(1102,`tr`)(1103,`td`)(1104,`code`),bT(1105,`exceptionFactory`),cf()(),Aa(1106,`td`)(1107,`code`),bT(1108,`Function`),cf()(),Aa(1109,`td`),bT(1110,`Receives the array of validation issues and returns the exception to throw.`),cf()()(),Aa(1111,`p`),bT(1112,`Use `),Aa(1113,`code`),bT(1114,`exceptionFactory`),cf(),bT(1115,` to change the shape of the error response. Each issue has a `),Aa(1116,`code`),bT(1117,`message`),cf(),bT(1118,` and, for nested values, a `),Aa(1119,`code`),bT(1120,`path`),cf(),bT(1121,` whose segments are either property keys or objects with a `),Aa(1122,`code`),bT(1123,`key`),cf(),bT(1124,` property:`),cf(),Aa(1125,`app-copy-button`)(1126,`pre`)(1127,`code`,23),bT(1128,`
app.useGlobalPipes(
  new StandardSchemaValidationPipe({
    exceptionFactory: (issues) =>
      new UnprocessableEntityException({
        message: 'Validation failed',
        errors: issues.map((issue) => ({
          path: issue.path
            ?.map((segment) => (typeof segment === 'object' ? segment.key : segment))
            .join('.'),
          message: issue.message,
        })),
      }),
  }),
);
`),cf()()(),Aa(1129,`p`),bT(1130,`With this factory, an invalid request produces a `),Aa(1131,`code`),bT(1132,`422 Unprocessable Entity`),cf(),bT(1133,` response:`),cf(),Aa(1134,`pre`)(1135,`code`,26),bT(1136,`
{
  "message": "Validation failed",
  "errors": [
    { "path": "email", "message": "Invalid email address" },
    { "path": "password", "message": "Too small: expected string to have >=8 characters" }
  ]
}
`),cf()(),Aa(1137,`h4`,47)(1138,`span`),bT(1139,`Other schema libraries`),cf()(),Aa(1140,`p`),bT(1141,`Nothing in the pipe is specific to Zod. The same `),Aa(1142,`code`),bT(1143,`schema`),cf(),bT(1144,` option accepts a Valibot schema:`),cf(),Aa(1145,`app-copy-button`)(1146,`pre`)(1147,`code`,23),bT(1148,`
import * as v from 'valibot';

export const createUserSchema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8)),
});

export type CreateUserDto = v.InferOutput<typeof createUserSchema>;
`),cf()()(),Aa(1149,`p`),bT(1150,`Or an ArkType schema:`),cf(),Aa(1151,`app-copy-button`)(1152,`pre`)(1153,`code`,23),bT(1154,`
import { type } from 'arktype';

export const createUserSchema = type({
  email: 'string.email',
  password: 'string >= 8',
});

export type CreateUserDto = typeof createUserSchema.infer;
`),cf()()(),Aa(1155,`p`),bT(1156,`Error messages come from the library, so their wording differs between libraries.`),cf(),Aa(1157,`blockquote`,21)(1158,`strong`),bT(1159,`Hint`),cf(),bT(1160,` The same schemas can describe your API in the OpenAPI document. See `),Aa(1161,`a`,48),bT(1162,`Standard Schema (Zod, Valibot)`),cf(),bT(1163,` in the OpenAPI chapter.
`),cf(),Aa(1164,`p`),bT(1165,`A working example is available `),Aa(1166,`a`,49),bT(1167,`here`),cf(),bT(1168,`.`),cf(),Aa(1169,`h4`,50)(1170,`span`),bT(1171,`WebSockets and Microservices`),cf()(),Aa(1172,`p`),bT(1173,`While this chapter shows examples using HTTP applications (e.g., Express or Fastify), both `),Aa(1174,`code`),bT(1175,`ValidationPipe`),cf(),bT(1176,` and `),Aa(1177,`code`),bT(1178,`StandardSchemaValidationPipe`),cf(),bT(1179,` work the same for WebSockets and microservices, regardless of the transport. By default, both throw an HTTP exception when validation fails. To report errors in a way the transport understands, return a `),Aa(1180,`code`),bT(1181,`WsException`),cf(),bT(1182,` or an `),Aa(1183,`code`),bT(1184,`RpcException`),cf(),bT(1185,` from the `),Aa(1186,`code`),bT(1187,`exceptionFactory`),cf(),bT(1188,` option:`),cf(),Aa(1189,`app-copy-button`)(1190,`pre`)(1191,`code`,23),bT(1192,`
new StandardSchemaValidationPipe({
  exceptionFactory: (issues) =>
    new WsException(issues.map((issue) => issue.message)),
});
`),cf()()(),Aa(1193,`h4`,51)(1194,`span`),bT(1195,`Learn more`),cf()(),Aa(1196,`p`),bT(1197,`Read more about custom validators, error messages, and available decorators in the `),Aa(1198,`a`,11),bT(1199,`class-validator`),cf(),bT(1200,` repository. For schema libraries, see the `),Aa(1201,`a`,12),bT(1202,`Zod`),cf(),bT(1203,`, `),Aa(1204,`a`,13),bT(1205,`Valibot`),cf(),bT(1206,`, and `),Aa(1207,`a`,14),bT(1208,`ArkType`),cf(),bT(1209,` documentation, and the list of `),Aa(1210,`a`,52),bT(1211,`Standard Schema compatible libraries`),cf(),bT(1212,`.`),cf()(),Aa(1213,`a`,53),Wa(1214,`i`,54),Aa(1215,`span`),bT(1216,`Edit on GitHub`),cf()()()),c&2){let y=tT(529),k=tT(800),T=tT(811),j=tT(825),A=tT(886),I=tT(974),C=tT(1009);zC(392),Ky(`import `,`{`,` CreateUserDto `,`}`),zC(3),Ky(`import type `,`{`,` CreateUserDto `,`}`),zC(131),hf(` `,jT(527,11,`cats.controller`,y.isJsActive),`
`),zC(271),hf(` `,jT(798,14,`create-user.dto`,k.isJsActive),`
`),zC(11),hf(` `,jT(809,17,`main`,T.isJsActive),`
`),zC(14),hf(` `,jT(823,20,`users.controller`,j.isJsActive),`
`),zC(61),hf(` `,jT(884,23,`list-users-query.dto`,A.isJsActive),`
`),zC(88),hf(` `,jT(972,26,`update-user.dto`,I.isJsActive),`
`),zC(35),hf(` `,jT(1007,29,`tenant-id.decorator`,C.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,l$1,u,g],encapsulation:2})}return d})();var mn=[{path:`configuration`,component:pe,data:{title:`Configuration`}},{path:`validation`,component:ve,data:{title:`Validation`}},{path:`serialization`,component:be,data:{title:`Serialization`}},{path:`logger`,component:Ee,data:{title:`Logger`}},{path:`events`,component:xe,data:{title:`Events`}},{path:`task-scheduling`,component:ye,data:{title:`Task Scheduling`}},{path:`queues`,component:ge,data:{title:`Queues`}},{path:`http-client`,component:ue,data:{title:`HTTP client`}},{path:`file-storage`,component:he,data:{title:`File storage`}},{path:`i18n`,component:Se,data:{title:`Internationalization`}},{path:`mail`,component:fe,data:{title:`Mail`}},{path:`http-module`,redirectTo:f(`/application/http-client`)}];export{mn as APPLICATION_ROUTES};