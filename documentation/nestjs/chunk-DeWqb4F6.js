import{C as hf,M as xy,N as zC,P as zy,T as jT,_ as Wa,a as u,b as cf,d as Jc,f as Jy,i as g,k as tT,l as Aa,m as LT,n as ln,p as Ky,r as xt,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var N=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-compression`]],features:[xy],decls:117,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`compression`],[`appAnchor`,``,`id`,`use-with-express-default`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/compression`],[1,`language-bash`],[1,`language-typescript`],[`appAnchor`,``,`id`,`use-with-fastify`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/fastify/fastify-compress`],[1,`warning`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/compression.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Compression`),cf(),Aa(5,`p`),bT(6,`Compression can significantly reduce the size of the response body, which makes a web app faster to load.`),cf(),Aa(7,`p`),bT(8,`For `),Aa(9,`strong`),bT(10,`high-traffic`),cf(),bT(11,` websites in production, we strongly recommend offloading compression from the application server, typically to a reverse proxy (e.g., Nginx). In that case, don't use compression middleware.`),cf(),Aa(12,`h4`,4)(13,`span`),bT(14,`Use with Express (default)`),cf()(),Aa(15,`p`),bT(16,`Use the `),Aa(17,`a`,5),bT(18,`compression`),cf(),bT(19,` middleware package to enable response compression. It supports the gzip, deflate, and Brotli encodings, and picks one based on the request's `),Aa(20,`code`),bT(21,`Accept-Encoding`),cf(),bT(22,` header.`),cf(),Aa(23,`p`),bT(24,`First, install the required packages:`),cf(),Aa(25,`pre`)(26,`code`,6),bT(27,`
$ npm i --save compression
$ npm i --save-dev @types/compression
`),cf()(),Aa(28,`p`),bT(29,`Once the installation is complete, apply the compression middleware globally:`),cf(),Aa(30,`app-copy-button`)(31,`pre`)(32,`code`,7),bT(33,`
import compression from 'compression';
// somewhere in your initialization file
app.use(compression());
`),cf()()(),Aa(34,`h4`,8)(35,`span`),bT(36,`Use with Fastify`),cf()(),Aa(37,`p`),bT(38,`If you use the `),Aa(39,`code`),bT(40,`FastifyAdapter`),cf(),bT(41,`, use the `),Aa(42,`a`,9),bT(43,`@fastify/compress`),cf(),bT(44,` plugin instead:`),cf(),Aa(45,`pre`)(46,`code`,6),bT(47,`
$ npm i --save @fastify/compress
`),cf()(),Aa(48,`p`),bT(49,`Once the installation is complete, register the `),Aa(50,`code`),bT(51,`@fastify/compress`),cf(),bT(52,` plugin. It compresses all eligible responses by default.`),cf(),Aa(53,`blockquote`,10)(54,`strong`),bT(55,`Warning`),cf(),bT(56,` Make sure you pass the `),Aa(57,`code`),bT(58,`NestFastifyApplication`),cf(),bT(59,` type when creating the application. Otherwise, the `),Aa(60,`code`),bT(61,`register()`),cf(),bT(62,` method isn't available to apply the plugin.
`),cf(),Aa(63,`app-copy-button`)(64,`pre`)(65,`code`,7),bT(66,`
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import compression from '@fastify/compress';

// inside bootstrap()
const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
await app.register(compression);
`),cf()()(),Aa(67,`p`),bT(68,`By default, `),Aa(69,`code`),bT(70,`@fastify/compress`),cf(),bT(71,` uses the first encoding the client accepts, in this order of preference: `),Aa(72,`code`),bT(73,`zstd`),cf(),bT(74,` (on Node.js versions that support it), `),Aa(75,`code`),bT(76,`br`),cf(),bT(77,` (Brotli), `),Aa(78,`code`),bT(79,`gzip`),cf(),bT(80,`, and `),Aa(81,`code`),bT(82,`deflate`),cf(),bT(83,`. Brotli achieves a high compression ratio, but higher quality levels are slow. The plugin sets the Brotli quality (`),Aa(84,`code`),bT(85,`BROTLI_PARAM_QUALITY`),cf(),bT(86,`) to 4 by default instead of zlib's default of 11. You can set it anywhere from 0 (fastest) to 11 (smallest output), trading compression time against response size. Tune this value for your workload. The following example sets the quality explicitly:`),cf(),Aa(87,`app-copy-button`)(88,`pre`)(89,`code`,7),bT(90,`
import { constants } from 'node:zlib';
// somewhere in your initialization file
await app.register(compression, { brotliOptions: { params: { [constants.BROTLI_PARAM_QUALITY]: 4 } } });
`),cf()()(),Aa(91,`p`),bT(92,`Alternatively, you can restrict `),Aa(93,`code`),bT(94,`@fastify/compress`),cf(),bT(95,` to gzip and deflate. Responses may be larger, but they are compressed faster.`),cf(),Aa(96,`p`),bT(97,`To specify the encodings, pass the `),Aa(98,`code`),bT(99,`encodings`),cf(),bT(100,` option in the second argument to `),Aa(101,`code`),bT(102,`app.register()`),cf(),bT(103,`:`),cf(),Aa(104,`app-copy-button`)(105,`pre`)(106,`code`,7),bT(107,`
await app.register(compression, { encodings: ['gzip', 'deflate'] });
`),cf()()(),Aa(108,`p`),bT(109,`This configuration tells `),Aa(110,`code`),bT(111,`@fastify/compress`),cf(),bT(112,` to use only the gzip and deflate encodings, preferring gzip when the client supports both.`),cf()(),Aa(113,`a`,11),Wa(114,`i`,12),Aa(115,`span`),bT(116,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln],encapsulation:2})}return o})();var _=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-cookies-docs`]],features:[xy],decls:1020,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`cookies`],[`href`,`#using-cookie-parser-or-fastifycookie`],[`appAnchor`,``,`id`,`reading-cookies`],[1,`language-typescript`],[1,`info`],[`routerLink`,`/pipes`],[1,`warning`],[`href`,`#signing-cookies`],[`appAnchor`,``,`id`,`setting-and-clearing-cookies`],[`routerLink`,`/faq/http-adapter`],[`href`,`/controllers#library-specific-approach`],[`appAnchor`,``,`id`,`signing-cookies`],[`href`,`/application/configuration#schema-validation`],[`appAnchor`,``,`id`,`rotating-secrets`],[`appAnchor`,``,`id`,`signature-format`],[`appAnchor`,``,`id`,`invalid-names-and-attributes`],[`appAnchor`,``,`id`,`using-cookie-parser-or-fastifycookie`],[`appAnchor`,``,`id`,`express-cookie-parser`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/cookie-parser`],[1,`language-shell`],[`appAnchor`,``,`id`,`fastify-fastifycookie`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/fastify/fastify-cookie#sending`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/cookies.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Cookies`),cf(),Aa(5,`p`),bT(6,`An `),Aa(7,`strong`),bT(8,`HTTP cookie`),cf(),bT(9,` is a small piece of data that the user's browser stores. Cookies were designed as a reliable mechanism for websites to remember stateful information. When the user visits the website again, the browser automatically sends the cookie with the request.`),cf(),Aa(10,`p`),bT(11,`Starting with NestJS v12.1, Nest supports cookies out of the box. The same API works on every HTTP adapter (Express, Fastify, or your own adapter extending `),Aa(12,`code`),bT(13,`AbstractHttpAdapter`),cf(),bT(14,`), and no extra package is needed:`),cf(),Aa(15,`ul`)(16,`li`),bT(17,`the `),Aa(18,`code`),bT(19,`@Cookies()`),cf(),bT(20,` and `),Aa(21,`code`),bT(22,`@SignedCookies()`),cf(),bT(23,` parameter decorators read the cookies sent with the request`),cf(),Aa(24,`li`),bT(25,`the HTTP adapter's `),Aa(26,`code`),bT(27,`setCookie()`),cf(),bT(28,` and `),Aa(29,`code`),bT(30,`clearCookie()`),cf(),bT(31,` methods write `),Aa(32,`code`),bT(33,`Set-Cookie`),cf(),bT(34,` response headers`),cf(),Aa(35,`li`),bT(36,`the `),Aa(37,`code`),bT(38,`cookies`),cf(),bT(39,` application option enables signed cookies, with support for rotating secrets`),cf()(),Aa(40,`p`),bT(41,`Applications that already use `),Aa(42,`code`),bT(43,`cookie-parser`),cf(),bT(44,` or `),Aa(45,`code`),bT(46,`@fastify/cookie`),cf(),bT(47,` keep working unchanged. See `),Aa(48,`a`,4),bT(49,`Using cookie-parser or @fastify/cookie`),cf(),bT(50,` to learn how the two approaches interact.`),cf(),Aa(51,`h4`,5)(52,`span`),bT(53,`Reading cookies`),cf()(),Aa(54,`p`),bT(55,`Use the `),Aa(56,`code`),bT(57,`@Cookies()`),cf(),bT(58,` decorator to extract cookies from the incoming request. Pass a cookie name to extract a single cookie, or omit it to get all cookies as an object keyed by cookie name.`),cf(),Aa(59,`app-copy-button`)(60,`pre`)(61,`code`,6),bT(62,`
import { Controller, Cookies, Get } from '@nestjs/common';

@Controller('preferences')
export class PreferencesController {
  @Get()
  findAll(@Cookies() cookies: Record<string, string>) {
    return cookies;
  }

  @Get('theme')
  findTheme(@Cookies('theme') theme?: string) {
    return theme ?? 'light';
  }
}
`),cf()()(),Aa(63,`blockquote`,7)(64,`strong`),bT(65,`Hint`),cf(),bT(66,` Import the `),Aa(67,`code`),bT(68,`@Cookies()`),cf(),bT(69,` decorator from the `),Aa(70,`code`),bT(71,`@nestjs/common`),cf(),bT(72,` package.
`),cf(),Aa(73,`p`),bT(74,`A named cookie that was not sent resolves to `),Aa(75,`code`),bT(76,`undefined`),cf(),bT(77,`. Nest parses the `),Aa(78,`code`),bT(79,`Cookie`),cf(),bT(80,` header only when a parameter asks for cookies, and at most once per request. Values are percent-decoded, and when the same name appears more than once, the first occurrence wins (browsers send the cookie with the most specific path first).`),cf(),Aa(81,`p`),bT(82,`As with `),Aa(83,`code`),bT(84,`@Query()`),cf(),bT(85,` or `),Aa(86,`code`),bT(87,`@Param()`),cf(),bT(88,`, you can pass `),Aa(89,`a`,8),bT(90,`pipes`),cf(),bT(91,` after the cookie name:`),cf(),Aa(92,`app-copy-button`)(93,`pre`)(94,`code`,6),bT(95,`
@Get('cart')
findCart(@Cookies('cartSize', ParseIntPipe) cartSize: number) {
  return { cartSize };
}
`),cf()()(),Aa(96,`p`),bT(97,`With this in place, a `),Aa(98,`code`),bT(99,`cartSize=abc`),cf(),bT(100,` cookie results in a `),Aa(101,`code`),bT(102,`400 Bad Request`),cf(),bT(103,` response, and so does a missing cookie, unless you enable the pipe's `),Aa(104,`code`),bT(105,`optional`),cf(),bT(106,` option.`),cf(),Aa(107,`blockquote`,7)(108,`strong`),bT(109,`Hint`),cf(),bT(110,` Pipes receive cookie parameters with the `),Aa(111,`code`),bT(112,`type`),cf(),bT(113,` property of `),Aa(114,`code`),bT(115,`ArgumentMetadata`),cf(),bT(116,` set to `),Aa(117,`code`),bT(118,`'custom'`),cf(),bT(119,`. As a result, a global `),Aa(120,`code`),bT(121,`ValidationPipe`),cf(),bT(122,` skips them unless you enable its `),Aa(123,`code`),bT(124,`validateCustomDecorators`),cf(),bT(125,` option.
`),cf(),Aa(126,`blockquote`,9)(127,`strong`),bT(128,`Warning`),cf(),Aa(129,`code`),bT(130,`@Cookies()`),cf(),bT(131,` does not verify signatures. Its values come straight from the client and may have been tampered with, so read any value you need to trust with `),Aa(132,`code`),bT(133,`@SignedCookies()`),cf(),bT(134,` instead (see `),Aa(135,`a`,10),bT(136,`Signing cookies`),cf(),bT(137,`).
`),cf(),Aa(138,`h4`,11)(139,`span`),bT(140,`Setting and clearing cookies`),cf()(),Aa(141,`p`),bT(142,`Cookies are written through the HTTP adapter, which exposes two methods for this purpose:`),cf(),Aa(143,`ul`)(144,`li`)(145,`code`),bT(146,`setCookie(response, name, value, options?)`),cf(),bT(147,` appends a `),Aa(148,`code`),bT(149,`Set-Cookie`),cf(),bT(150,` header to the response`),cf(),Aa(151,`li`)(152,`code`),bT(153,`clearCookie(response, name, options?)`),cf(),bT(154,` appends a `),Aa(155,`code`),bT(156,`Set-Cookie`),cf(),bT(157,` header that expires the cookie immediately`),cf()(),Aa(158,`p`),bT(159,`Both methods take the native response object as their first argument. In a route handler, inject the `),Aa(160,`code`),bT(161,`HttpAdapterHost`),cf(),bT(162,` (see `),Aa(163,`a`,12),bT(164,`HTTP adapter`),cf(),bT(165,`) and get hold of the response object with the `),Aa(166,`code`),bT(167,`@Res()`),cf(),bT(168,` decorator, with its `),Aa(169,`code`),bT(170,`passthrough`),cf(),bT(171,` option enabled:`),cf(),Aa(172,`app-copy-button`)(173,`pre`)(174,`code`,6),bT(175,`
import { Body, Controller, Delete, Put, Res } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly adapterHost: HttpAdapterHost) {}

  @Put('theme')
  setTheme(
    @Body('theme') theme: string,
    @Res({ passthrough: true }) res: unknown,
  ) {
    this.adapterHost.httpAdapter.setCookie(res, 'theme', theme, {
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365, // one year, in seconds
    });
  }

  @Delete('theme')
  resetTheme(@Res({ passthrough: true }) res: unknown) {
    this.adapterHost.httpAdapter.clearCookie(res, 'theme');
  }
}
`),cf()()(),Aa(176,`blockquote`,9)(177,`strong`),bT(178,`Warning`),cf(),bT(179,` To leave the response handling logic to the framework, set the `),Aa(180,`code`),bT(181,`passthrough`),cf(),bT(182,` option to `),Aa(183,`code`),bT(184,`true`),cf(),bT(185,`, as shown above. See the `),Aa(186,`a`,13),bT(187,`library-specific approach`),cf(),bT(188,` section of the Controllers chapter for details.
`),cf(),Aa(189,`p`),bT(190,`The controller never needs to know the type of the response object: `),Aa(191,`code`),bT(192,`setCookie()`),cf(),bT(193,` accepts whatever the underlying platform provides (an Express `),Aa(194,`code`),bT(195,`Response`),cf(),bT(196,`, a `),Aa(197,`code`),bT(198,`FastifyReply`),cf(),bT(199,`, and so on), which keeps the code platform-agnostic. Each call appends its own `),Aa(200,`code`),bT(201,`Set-Cookie`),cf(),bT(202,` header, so all the cookies set while handling a request are sent, on every platform. Because these methods only need the response object, you can also call them from a guard or an interceptor, using `),Aa(203,`code`),bT(204,`context.switchToHttp().getResponse()`),cf(),bT(205,`.`),cf(),Aa(206,`blockquote`,7)(207,`strong`),bT(208,`Hint`),cf(),Aa(209,`code`),bT(210,`setCookie()`),cf(),bT(211,` and `),Aa(212,`code`),bT(213,`clearCookie()`),cf(),bT(214,` are optional members of the `),Aa(215,`code`),bT(216,`HttpServer`),cf(),bT(217,` interface. `),Aa(218,`code`),bT(219,`AbstractHttpAdapter`),cf(),bT(220,` implements them once, on top of its `),Aa(221,`code`),bT(222,`appendHeader()`),cf(),bT(223,` method, so every adapter that extends it (including `),Aa(224,`code`),bT(225,`ExpressAdapter`),cf(),bT(226,` and `),Aa(227,`code`),bT(228,`FastifyAdapter`),cf(),bT(229,`) supports them.
`),cf(),Aa(230,`p`),bT(231,`The cookie value must be a string. It is always percent-encoded with `),Aa(232,`code`),bT(233,`encodeURIComponent()`),cf(),bT(234,` (and decoded again by `),Aa(235,`code`),bT(236,`@Cookies()`),cf(),bT(237,`), so any string is safe to store. Convert other types yourself, for example with `),Aa(238,`code`),bT(239,`JSON.stringify()`),cf(),bT(240,`.`),cf(),Aa(241,`p`),bT(242,`The `),Aa(243,`code`),bT(244,`options`),cf(),bT(245,` argument (the `),Aa(246,`code`),bT(247,`CookieSerializeOptions`),cf(),bT(248,` interface, exported from `),Aa(249,`code`),bT(250,`@nestjs/common`),cf(),bT(251,`) accepts the following attributes:`),cf(),Aa(252,`table`)(253,`thead`)(254,`tr`)(255,`th`),bT(256,`Option`),cf(),Aa(257,`th`),bT(258,`Description`),cf(),Aa(259,`th`),bT(260,`Default`),cf()()(),Aa(261,`tbody`)(262,`tr`)(263,`td`)(264,`code`),bT(265,`path`),cf()(),Aa(266,`td`)(267,`code`),bT(268,`Path`),cf(),bT(269,` attribute.`),cf(),Aa(270,`td`)(271,`code`),bT(272,`'/'`),cf()()(),Aa(273,`tr`)(274,`td`)(275,`code`),bT(276,`domain`),cf()(),Aa(277,`td`)(278,`code`),bT(279,`Domain`),cf(),bT(280,` attribute. Must be a valid host name, optionally with a leading dot. When omitted, the cookie is host-only.`),cf(),Aa(281,`td`),bT(282,`not set`),cf()(),Aa(283,`tr`)(284,`td`)(285,`code`),bT(286,`maxAge`),cf()(),Aa(287,`td`)(288,`code`),bT(289,`Max-Age`),cf(),bT(290,` attribute, in `),Aa(291,`strong`),bT(292,`seconds`),cf(),bT(293,`. Must be an integer.`),cf(),Aa(294,`td`),bT(295,`not set`),cf()(),Aa(296,`tr`)(297,`td`)(298,`code`),bT(299,`expires`),cf()(),Aa(300,`td`)(301,`code`),bT(302,`Expires`),cf(),bT(303,` attribute, as a `),Aa(304,`code`),bT(305,`Date`),cf(),bT(306,`. Browsers give precedence to `),Aa(307,`code`),bT(308,`maxAge`),cf(),bT(309,` when both are set.`),cf(),Aa(310,`td`),bT(311,`not set`),cf()(),Aa(312,`tr`)(313,`td`)(314,`code`),bT(315,`httpOnly`),cf()(),Aa(316,`td`)(317,`code`),bT(318,`HttpOnly`),cf(),bT(319,` attribute. Hides the cookie from client-side JavaScript.`),cf(),Aa(320,`td`)(321,`code`),bT(322,`false`),cf()()(),Aa(323,`tr`)(324,`td`)(325,`code`),bT(326,`secure`),cf()(),Aa(327,`td`)(328,`code`),bT(329,`Secure`),cf(),bT(330,` attribute. The browser only sends the cookie over HTTPS.`),cf(),Aa(331,`td`)(332,`code`),bT(333,`false`),cf()()(),Aa(334,`tr`)(335,`td`)(336,`code`),bT(337,`sameSite`),cf()(),Aa(338,`td`)(339,`code`),bT(340,`SameSite`),cf(),bT(341,` attribute: `),Aa(342,`code`),bT(343,`'strict'`),cf(),bT(344,`, `),Aa(345,`code`),bT(346,`'lax'`),cf(),bT(347,` or `),Aa(348,`code`),bT(349,`'none'`),cf(),bT(350,`. `),Aa(351,`code`),bT(352,`'none'`),cf(),bT(353,` requires `),Aa(354,`code`),bT(355,`secure: true`),cf(),bT(356,`.`),cf(),Aa(357,`td`),bT(358,`not set`),cf()(),Aa(359,`tr`)(360,`td`)(361,`code`),bT(362,`partitioned`),cf()(),Aa(363,`td`)(364,`code`),bT(365,`Partitioned`),cf(),bT(366,` attribute (CHIPS). Requires `),Aa(367,`code`),bT(368,`secure: true`),cf(),bT(369,`.`),cf(),Aa(370,`td`)(371,`code`),bT(372,`false`),cf()()(),Aa(373,`tr`)(374,`td`)(375,`code`),bT(376,`priority`),cf()(),Aa(377,`td`)(378,`code`),bT(379,`Priority`),cf(),bT(380,` attribute (non-standard, honored by Chromium): `),Aa(381,`code`),bT(382,`'low'`),cf(),bT(383,`, `),Aa(384,`code`),bT(385,`'medium'`),cf(),bT(386,` or `),Aa(387,`code`),bT(388,`'high'`),cf(),bT(389,`.`),cf(),Aa(390,`td`),bT(391,`not set`),cf()(),Aa(392,`tr`)(393,`td`)(394,`code`),bT(395,`signed`),cf()(),Aa(396,`td`),bT(397,`Signs the value with the first configured secret. See `),Aa(398,`a`,10),bT(399,`Signing cookies`),cf(),bT(400,`.`),cf(),Aa(401,`td`)(402,`code`),bT(403,`false`),cf()()()()(),Aa(404,`p`),bT(405,`Apart from `),Aa(406,`code`),bT(407,`path`),cf(),bT(408,`, no attribute has a default value, `),Aa(409,`code`),bT(410,`httpOnly`),cf(),bT(411,` included, which matches the behavior of Express and `),Aa(412,`code`),bT(413,`@fastify/cookie`),cf(),bT(414,`. For cookies that carry credentials or session identifiers, set `),Aa(415,`code`),bT(416,`httpOnly`),cf(),bT(417,`, `),Aa(418,`code`),bT(419,`secure`),cf(),bT(420,` and `),Aa(421,`code`),bT(422,`sameSite`),cf(),bT(423,` explicitly.`),cf(),Aa(424,`blockquote`,9)(425,`strong`),bT(426,`Warning`),cf(),Aa(427,`code`),bT(428,`maxAge`),cf(),bT(429,` is expressed in `),Aa(430,`strong`),bT(431,`seconds`),cf(),bT(432,`, as in RFC 6265 and `),Aa(433,`code`),bT(434,`@fastify/cookie`),cf(),bT(435,`. Express' `),Aa(436,`code`),bT(437,`res.cookie()`),cf(),bT(438,` method takes `),Aa(439,`code`),bT(440,`maxAge`),cf(),bT(441,` in `),Aa(442,`strong`),bT(443,`milliseconds`),cf(),bT(444,`, so a value carried over from it unchanged makes the cookie live 1000 times longer. For one day, pass `),Aa(445,`code`),bT(446,`60 * 60 * 24`),cf(),bT(447,`.
`),cf(),Aa(448,`p`)(449,`code`),bT(450,`clearCookie()`),cf(),bT(451,` writes an empty cookie with `),Aa(452,`code`),bT(453,`Max-Age=0`),cf(),bT(454,` and an `),Aa(455,`code`),bT(456,`Expires`),cf(),bT(457,` date in the past. Browsers only remove a cookie when the `),Aa(458,`code`),bT(459,`path`),cf(),bT(460,` and `),Aa(461,`code`),bT(462,`domain`),cf(),bT(463,` match the ones it was set with, so pass the same values to both methods. Since `),Aa(464,`code`),bT(465,`path`),cf(),bT(466,` defaults to `),Aa(467,`code`),bT(468,`/`),cf(),bT(469,` in both of them, `),Aa(470,`code`),bT(471,`clearCookie(res, 'theme')`),cf(),bT(472,` clears a cookie set with `),Aa(473,`code`),bT(474,`setCookie(res, 'theme', value)`),cf(),bT(475,`. The `),Aa(476,`code`),bT(477,`maxAge`),cf(),bT(478,`, `),Aa(479,`code`),bT(480,`expires`),cf(),bT(481,` and `),Aa(482,`code`),bT(483,`signed`),cf(),bT(484,` options are ignored by `),Aa(485,`code`),bT(486,`clearCookie()`),cf(),bT(487,`.`),cf(),Aa(488,`h4`,14)(489,`span`),bT(490,`Signing cookies`),cf()(),Aa(491,`p`),bT(492,`A signed cookie carries an HMAC signature next to its value, which lets the server detect whether the client tampered with it. To enable signing, pass a secret through the `),Aa(493,`code`),bT(494,`cookies`),cf(),bT(495,` option of the `),Aa(496,`code`),bT(497,`NestFactory.create()`),cf(),bT(498,` method:`),cf(),Aa(499,`app-copy-button`)(500,`pre`)(501,`code`,6),bT(502,`
// main.ts
const app = await NestFactory.create(AppModule, {
  cookies: {
    secret: process.env.COOKIE_SECRET,
  },
});
`),cf()()(),Aa(503,`p`),bT(504,`Then, set cookies with the `),Aa(505,`code`),bT(506,`signed`),cf(),bT(507,` option and read them back with the `),Aa(508,`code`),bT(509,`@SignedCookies()`),cf(),bT(510,` decorator:`),cf(),Aa(511,`app-copy-button`)(512,`pre`)(513,`code`,6),bT(514,`
import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  SignedCookies,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly adapterHost: HttpAdapterHost,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: unknown,
  ) {
    const user = await this.authService.signIn(signInDto);
    this.adapterHost.httpAdapter.setCookie(res, 'uid', String(user.id), {
      signed: true,
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60, // one hour, in seconds
    });
  }

  @Get('profile')
  getProfile(@SignedCookies('uid') userId?: string) {
    if (!userId) {
      throw new UnauthorizedException();
    }
    return this.authService.findProfile(userId);
  }

  @Post('logout')
  signOut(@Res({ passthrough: true }) res: unknown) {
    this.adapterHost.httpAdapter.clearCookie(res, 'uid');
  }
}
`),cf()()(),Aa(515,`blockquote`,7)(516,`strong`),bT(517,`Hint`),cf(),bT(518,` Import the `),Aa(519,`code`),bT(520,`@SignedCookies()`),cf(),bT(521,` decorator from the `),Aa(522,`code`),bT(523,`@nestjs/common`),cf(),bT(524,` package.
`),cf(),Aa(525,`p`)(526,`code`),bT(527,`@SignedCookies('uid')`),cf(),bT(528,` resolves to the original, unsigned value when the signature verifies. When the cookie is missing, is not signed, was tampered with, or was signed with a secret that is not configured, it resolves to `),Aa(529,`code`),bT(530,`undefined`),cf(),bT(531,`. Called without a name, `),Aa(532,`code`),bT(533,`@SignedCookies()`),cf(),bT(534,` returns an object that contains only the cookies whose signature verifies. Like `),Aa(535,`code`),bT(536,`@Cookies()`),cf(),bT(537,`, it accepts pipes after the cookie name.`),cf(),Aa(538,`p`),bT(539,`Signing fails loudly when no secret is configured: `),Aa(540,`code`),bT(541,`setCookie()`),cf(),bT(542,` with the `),Aa(543,`code`),bT(544,`signed`),cf(),bT(545,` option throws an error, and so does resolving a `),Aa(546,`code`),bT(547,`@SignedCookies()`),cf(),bT(548,` parameter (unless `),Aa(549,`code`),bT(550,`cookie-parser`),cf(),bT(551,` provides signed cookies, see `),Aa(552,`a`,4),bT(553,`below`),cf(),bT(554,`), which results in a `),Aa(555,`code`),bT(556,`500 Internal Server Error`),cf(),bT(557,` response instead of every signed cookie silently reading as `),Aa(558,`code`),bT(559,`undefined`),cf(),bT(560,`. An empty secret (an empty string, an empty array, or an array with an empty entry) throws when the application is created.`),cf(),Aa(561,`blockquote`,9)(562,`strong`),bT(563,`Warning`),cf(),bT(564,` A `),Aa(565,`code`),bT(566,`secret`),cf(),bT(567,` that is `),Aa(568,`code`),bT(569,`undefined`),cf(),bT(570,`, for example because an environment variable is not set, counts as no secret at all. The application starts, and the error only surfaces when a request sets or reads a signed cookie. Validate your configuration at startup, for example as described in the `),Aa(571,`a`,15),bT(572,`Configuration`),cf(),bT(573,` chapter.
`),cf(),Aa(574,`blockquote`,9)(575,`strong`),bT(576,`Warning`),cf(),bT(577,` Signing protects the integrity of a cookie, not its confidentiality: the value is stored in plain text, and the client can read it. Do not store sensitive data in a signed cookie. Also note that, as with the `),Aa(578,`code`),bT(579,`cookie-signature`),cf(),bT(580,` package, the cookie name is not part of the signed data, so a value signed for one cookie also verifies when the client sends it under another name.
`),cf(),Aa(581,`h5`,16)(582,`span`),bT(583,`Rotating secrets`),cf()(),Aa(584,`p`),bT(585,`To replace a secret without invalidating the cookies signed with it, pass an array of secrets. Nest signs new cookies with the first secret and verifies incoming cookies against all of them:`),cf(),Aa(586,`app-copy-button`)(587,`pre`)(588,`code`,6),bT(589,`
// main.ts
const app = await NestFactory.create(AppModule, {
  cookies: {
    // Signs with the first secret, verifies with all of them.
    secret: ['current-secret', 'previous-secret'],
  },
});
`),cf()()(),Aa(590,`p`),bT(591,`To rotate, add the new secret at the beginning of the array, and remove the previous one once every cookie signed with it has expired. Signatures are compared in constant time, and against every secret, so the response time does not reveal which secret matched.`),cf(),Aa(592,`h5`,17)(593,`span`),bT(594,`Signature format`),cf()(),Aa(595,`p`),bT(596,`Nest signs cookies in the format of the `),Aa(597,`code`),bT(598,`cookie-signature`),cf(),bT(599,` package, which `),Aa(600,`code`),bT(601,`cookie-parser`),cf(),bT(602,` and `),Aa(603,`code`),bT(604,`express-session`),cf(),bT(605,` use as well: the `),Aa(606,`code`),bT(607,`s:`),cf(),bT(608,` prefix, followed by the value, a dot, and the HMAC-SHA256 digest of the value in base64, without padding. As a result:`),cf(),Aa(609,`ul`)(610,`li`),bT(611,`cookies signed with the same secret by Express (the `),Aa(612,`code`),bT(613,`signed`),cf(),bT(614,` option of `),Aa(615,`code`),bT(616,`res.cookie()`),cf(),bT(617,`), `),Aa(618,`code`),bT(619,`cookie-parser`),cf(),bT(620,` or `),Aa(621,`code`),bT(622,`express-session`),cf(),bT(623,` keep verifying after you move to the built-in API, and `),Aa(624,`code`),bT(625,`cookie-parser`),cf(),bT(626,` can verify cookies signed by Nest`),cf(),Aa(627,`li`),bT(628,`values signed by `),Aa(629,`code`),bT(630,`@fastify/cookie`),cf(),bT(631,`, which omits the `),Aa(632,`code`),bT(633,`s:`),cf(),bT(634,` prefix, verify as well. The opposite direction does not work: the `),Aa(635,`code`),bT(636,`unsignCookie()`),cf(),bT(637,` method of `),Aa(638,`code`),bT(639,`@fastify/cookie`),cf(),bT(640,` cannot verify cookies signed by Nest, because of the `),Aa(641,`code`),bT(642,`s:`),cf(),bT(643,` prefix`),cf()(),Aa(644,`h4`,18)(645,`span`),bT(646,`Invalid names and attributes`),cf()(),Aa(647,`p`)(648,`code`),bT(649,`setCookie()`),cf(),bT(650,` and `),Aa(651,`code`),bT(652,`clearCookie()`),cf(),bT(653,` reject invalid input instead of escaping it, so neither a cookie name nor an attribute can inject additional attributes or headers through `),Aa(654,`code`),bT(655,`;`),cf(),bT(656,`, CR or LF characters. They throw a `),Aa(657,`code`),bT(658,`TypeError`),cf(),bT(659,` when:`),cf(),Aa(660,`ul`)(661,`li`),bT(662,`the name is not a valid RFC 7230 token (for example, it contains spaces, `),Aa(663,`code`),bT(664,`;`),cf(),bT(665,`, `),Aa(666,`code`),bT(667,`=`),cf(),bT(668,` or control characters)`),cf(),Aa(669,`li`)(670,`code`),bT(671,`path`),cf(),bT(672,` contains a `),Aa(673,`code`),bT(674,`;`),cf(),bT(675,`, or a character outside printable ASCII`),cf(),Aa(676,`li`)(677,`code`),bT(678,`domain`),cf(),bT(679,` is not a valid host name (a leading dot is allowed)`),cf(),Aa(680,`li`)(681,`code`),bT(682,`maxAge`),cf(),bT(683,` is not an integer, or `),Aa(684,`code`),bT(685,`expires`),cf(),bT(686,` is not a valid `),Aa(687,`code`),bT(688,`Date`),cf()(),Aa(689,`li`)(690,`code`),bT(691,`sameSite`),cf(),bT(692,` or `),Aa(693,`code`),bT(694,`priority`),cf(),bT(695,` is not one of the allowed values`),cf(),Aa(696,`li`)(697,`code`),bT(698,`sameSite`),cf(),bT(699,` is `),Aa(700,`code`),bT(701,`'none'`),cf(),bT(702,`, or `),Aa(703,`code`),bT(704,`partitioned`),cf(),bT(705,` is `),Aa(706,`code`),bT(707,`true`),cf(),bT(708,`, while `),Aa(709,`code`),bT(710,`secure`),cf(),bT(711,` is not `),Aa(712,`code`),bT(713,`true`),cf(),bT(714,`. Browsers silently drop such cookies, so Nest reports the mistake instead`),cf(),Aa(715,`li`),bT(716,`the value is not a string`),cf()(),Aa(717,`p`),bT(718,`The content of the value is never rejected: since it is percent-encoded, a `),Aa(719,`code`),bT(720,`;`),cf(),bT(721,`, CR or LF in a value becomes `),Aa(722,`code`),bT(723,`%3B`),cf(),bT(724,`, `),Aa(725,`code`),bT(726,`%0D`),cf(),bT(727,` or `),Aa(728,`code`),bT(729,`%0A`),cf(),bT(730,`.`),cf(),Aa(731,`p`),bT(732,`These errors are not HTTP exceptions, so when one is thrown from a route handler, the client receives a `),Aa(733,`code`),bT(734,`500 Internal Server Error`),cf(),bT(735,` response. If a cookie name or an attribute comes from user input, validate it before calling `),Aa(736,`code`),bT(737,`setCookie()`),cf(),bT(738,`.`),cf(),Aa(739,`blockquote`,7)(740,`strong`),bT(741,`Hint`),cf(),bT(742,` Nest does not enforce the rules of the `),Aa(743,`code`),bT(744,`__Host-`),cf(),bT(745,` and `),Aa(746,`code`),bT(747,`__Secure-`),cf(),bT(748,` cookie name prefixes. If you use them, set the attributes they require yourself: `),Aa(749,`code`),bT(750,`secure: true`),cf(),bT(751,` for both, plus `),Aa(752,`code`),bT(753,`path: '/'`),cf(),bT(754,` and no `),Aa(755,`code`),bT(756,`domain`),cf(),bT(757,` for `),Aa(758,`code`),bT(759,`__Host-`),cf(),bT(760,`.
`),cf(),Aa(761,`h4`,19)(762,`span`),bT(763,`Using cookie-parser or @fastify/cookie`),cf()(),Aa(764,`p`),bT(765,`Before the built-in support was available, reading cookies required the `),Aa(766,`code`),bT(767,`cookie-parser`),cf(),bT(768,` middleware (Express) or the `),Aa(769,`code`),bT(770,`@fastify/cookie`),cf(),bT(771,` plugin (Fastify). Applications that use them keep working, and the built-in decorators cooperate with them:`),cf(),Aa(772,`ul`)(773,`li`)(774,`code`),bT(775,`@Cookies()`),cf(),bT(776,` returns `),Aa(777,`code`),bT(778,`req.cookies`),cf(),bT(779,` as is whenever a middleware or plugin has populated it, and only parses the `),Aa(780,`code`),bT(781,`Cookie`),cf(),bT(782,` header itself otherwise. The behavior of that package therefore carries over. For example, `),Aa(783,`code`),bT(784,`cookie-parser`),cf(),bT(785,` moves signed cookies from `),Aa(786,`code`),bT(787,`req.cookies`),cf(),bT(788,` to `),Aa(789,`code`),bT(790,`req.signedCookies`),cf(),bT(791,` when it is given a secret, and turns `),Aa(792,`code`),bT(793,`j:`),cf(),bT(794,`-prefixed JSON cookies into objects.`),cf(),Aa(795,`li`),bT(796,`When the `),Aa(797,`code`),bT(798,`cookies.secret`),cf(),bT(799,` application option is set, `),Aa(800,`code`),bT(801,`@SignedCookies()`),cf(),bT(802,` always verifies the raw `),Aa(803,`code`),bT(804,`Cookie`),cf(),bT(805,` header against the Nest secrets, and ignores `),Aa(806,`code`),bT(807,`req.signedCookies`),cf(),bT(808,`. Configure the same secret (or secrets) as your middleware, so that the cookies it signed keep verifying.`),cf(),Aa(809,`li`),bT(810,`Without the `),Aa(811,`code`),bT(812,`cookies.secret`),cf(),bT(813,` option, `),Aa(814,`code`),bT(815,`@SignedCookies()`),cf(),bT(816,` falls back to the `),Aa(817,`code`),bT(818,`req.signedCookies`),cf(),bT(819,` object populated by `),Aa(820,`code`),bT(821,`cookie-parser`),cf(),bT(822,` (when it is given a secret), and treats the cookies it marked as invalid as missing. `),Aa(823,`code`),bT(824,`@fastify/cookie`),cf(),bT(825,` does not populate `),Aa(826,`code`),bT(827,`req.signedCookies`),cf(),bT(828,`, so on Fastify, `),Aa(829,`code`),bT(830,`@SignedCookies()`),cf(),bT(831,` requires the `),Aa(832,`code`),bT(833,`cookies.secret`),cf(),bT(834,` option.`),cf()(),Aa(835,`p`),bT(836,`Nest never assigns `),Aa(837,`code`),bT(838,`req.cookies`),cf(),bT(839,` itself. If you remove `),Aa(840,`code`),bT(841,`cookie-parser`),cf(),bT(842,` or `),Aa(843,`code`),bT(844,`@fastify/cookie`),cf(),bT(845,`, replace any code that reads `),Aa(846,`code`),bT(847,`request.cookies`),cf(),bT(848,` (or calls `),Aa(849,`code`),bT(850,`reply.setCookie()`),cf(),bT(851,`) with the built-in decorators and adapter methods. Likewise, if your application defines its own `),Aa(852,`code`),bT(853,`@Cookies()`),cf(),bT(854,` decorator with `),Aa(855,`code`),bT(856,`createParamDecorator()`),cf(),bT(857,`, you can replace it with the built-in one. When you replace `),Aa(858,`code`),bT(859,`res.cookie()`),cf(),bT(860,` calls with `),Aa(861,`code`),bT(862,`setCookie()`),cf(),bT(863,`, remember to convert `),Aa(864,`code`),bT(865,`maxAge`),cf(),bT(866,` from milliseconds to seconds.`),cf(),Aa(867,`h5`,20)(868,`span`),bT(869,`Express (cookie-parser)`),cf()(),Aa(870,`p`),bT(871,`First, install the `),Aa(872,`a`,21),bT(873,`cookie-parser`),cf(),bT(874,` package (and its types, for TypeScript users):`),cf(),Aa(875,`pre`)(876,`code`,22),bT(877,`
$ npm i cookie-parser
$ npm i -D @types/cookie-parser
`),cf()(),Aa(878,`p`),bT(879,`Once the installation is complete, apply the `),Aa(880,`code`),bT(881,`cookie-parser`),cf(),bT(882,` middleware globally (for example, in your `),Aa(883,`code`),bT(884,`main.ts`),cf(),bT(885,` file):`),cf(),Aa(886,`app-copy-button`)(887,`pre`)(888,`code`,6),bT(889,`
import cookieParser from 'cookie-parser';
// somewhere in your initialization file
app.use(cookieParser('my-secret'));
`),cf()()(),Aa(890,`p`),bT(891,`The first argument is an optional secret (or an array of secrets) used to verify signed cookies. The middleware parses the `),Aa(892,`code`),bT(893,`Cookie`),cf(),bT(894,` header and exposes the cookies as `),Aa(895,`code`),bT(896,`req.cookies`),cf(),bT(897,` and, if a secret was provided, the verified signed cookies as `),Aa(898,`code`),bT(899,`req.signedCookies`),cf(),bT(900,` (a signed cookie that fails verification has the value `),Aa(901,`code`),bT(902,`false`),cf(),bT(903,`). See the `),Aa(904,`a`,21),bT(905,`cookie-parser repository`),cf(),bT(906,` for the other options.`),cf(),Aa(907,`p`),bT(908,`With this in place, you can read cookies with the `),Aa(909,`code`),bT(910,`@Cookies()`),cf(),bT(911,` and `),Aa(912,`code`),bT(913,`@SignedCookies()`),cf(),bT(914,` decorators, or from the request object:`),cf(),Aa(915,`app-copy-button`)(916,`pre`)(917,`code`,6),bT(918,`
@Get()
findAll(@Req() request: Request) {
  console.log(request.cookies); // or "request.cookies['cookieKey']"
  // or console.log(request.signedCookies);
}
`),cf()()(),Aa(919,`p`),bT(920,`To attach a cookie to an outgoing response, use the adapter's `),Aa(921,`code`),bT(922,`setCookie()`),cf(),bT(923,` method or the `),Aa(924,`code`),bT(925,`Response#cookie()`),cf(),bT(926,` method:`),cf(),Aa(927,`app-copy-button`)(928,`pre`)(929,`code`,6),bT(930,`
@Get()
findAll(@Res({ passthrough: true }) response: Response) {
  response.cookie('key', 'value');
}
`),cf()()(),Aa(931,`blockquote`,7)(932,`strong`),bT(933,`Hint`),cf(),bT(934,` Import the `),Aa(935,`code`),bT(936,`@Req()`),cf(),bT(937,` and `),Aa(938,`code`),bT(939,`@Res()`),cf(),bT(940,` decorators from the `),Aa(941,`code`),bT(942,`@nestjs/common`),cf(),bT(943,` package, and `),Aa(944,`code`),bT(945,`Request`),cf(),bT(946,` and `),Aa(947,`code`),bT(948,`Response`),cf(),bT(949,` from the `),Aa(950,`code`),bT(951,`express`),cf(),bT(952,` package.
`),cf(),Aa(953,`h5`,23)(954,`span`),bT(955,`Fastify (@fastify/cookie)`),cf()(),Aa(956,`p`),bT(957,`First, install the required package:`),cf(),Aa(958,`pre`)(959,`code`,22),bT(960,`
$ npm i @fastify/cookie
`),cf()(),Aa(961,`p`),bT(962,`Once the installation is complete, register the `),Aa(963,`code`),bT(964,`@fastify/cookie`),cf(),bT(965,` plugin:`),cf(),Aa(966,`app-copy-button`)(967,`pre`)(968,`code`,6),bT(969,`
import fastifyCookie from '@fastify/cookie';

// somewhere in your initialization file
const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
await app.register(fastifyCookie, {
  secret: 'my-secret', // for cookies signature
});
`),cf()()(),Aa(970,`p`),bT(971,`With this in place, you can read cookies with the `),Aa(972,`code`),bT(973,`@Cookies()`),cf(),bT(974,` decorator, or from the request object:`),cf(),Aa(975,`app-copy-button`)(976,`pre`)(977,`code`,6),bT(978,`
@Get()
findAll(@Req() request: FastifyRequest) {
  console.log(request.cookies); // or "request.cookies['cookieKey']"
}
`),cf()()(),Aa(979,`p`),bT(980,`To attach a cookie to an outgoing response, use the adapter's `),Aa(981,`code`),bT(982,`setCookie()`),cf(),bT(983,` method or the `),Aa(984,`code`),bT(985,`FastifyReply#setCookie()`),cf(),bT(986,` method (see the `),Aa(987,`a`,24),bT(988,`@fastify/cookie documentation on sending cookies`),cf(),bT(989,`):`),cf(),Aa(990,`app-copy-button`)(991,`pre`)(992,`code`,6),bT(993,`
@Get()
findAll(@Res({ passthrough: true }) response: FastifyReply) {
  response.setCookie('key', 'value');
}
`),cf()()(),Aa(994,`blockquote`,7)(995,`strong`),bT(996,`Hint`),cf(),bT(997,` Import the `),Aa(998,`code`),bT(999,`@Req()`),cf(),bT(1e3,` and `),Aa(1001,`code`),bT(1002,`@Res()`),cf(),bT(1003,` decorators from the `),Aa(1004,`code`),bT(1005,`@nestjs/common`),cf(),bT(1006,` package, and `),Aa(1007,`code`),bT(1008,`FastifyRequest`),cf(),bT(1009,` and `),Aa(1010,`code`),bT(1011,`FastifyReply`),cf(),bT(1012,` from the `),Aa(1013,`code`),bT(1014,`fastify`),cf(),bT(1015,` package.
`),cf()(),Aa(1016,`a`,25),Wa(1017,`i`,26),Aa(1018,`span`),bT(1019,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln,Jc],encapsulation:2})}return o})();var W=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-file-upload`]],features:[xy],decls:1541,vars:18,consts:[[`contentReference`,``],[`app835af25e30af2e88643ccd54ddc40f4c891ae357`,``],[`app0737188deab08e92bfbd4544cc545e107c3ba2f0`,``],[`app6228abc45a9e1300f527692c8092c3d6a5c6371b`,``],[`app84482560fd2fc32b05b6203c79b7f7a6cf4d6b24`,``],[`appd39d210ebafc04cfe2c38c26ad34235f095fc5b2`,``],[1,`content`],[1,`content-inner`],[`id`,`file-upload-and-streaming`],[`href`,`#streaming-files`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/multer`],[1,`warning`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/fastify/fastify-multipart`],[`href`,`/http/file-upload#fastify`],[1,`language-shell`],[`appAnchor`,``,`id`,`basic-example`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/multer#multeropts`],[`appAnchor`,``,`id`,`file-validation`],[`routerLink`,`/pipes`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.ibm.com/support/pages/what-magic-number`],[`appAnchor`,``,`id`,`array-of-files`],[`appAnchor`,``,`id`,`validating-an-array-of-files`],[`appAnchor`,``,`id`,`multiple-files`],[`appAnchor`,``,`id`,`any-files`],[`appAnchor`,``,`id`,`no-files`],[`appAnchor`,``,`id`,`default-options`],[`appAnchor`,``,`id`,`async-configuration`],[`href`,`/fundamentals/custom-providers#factory-providers-usefactory`],[`appAnchor`,``,`id`,`memory-usage-and-storage`],[`appAnchor`,``,`id`,`file-size-limit`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/multer#limits`],[`appAnchor`,``,`id`,`field-name-limits`],[`appAnchor`,``,`id`,`disk-storage`],[`href`,`/http/file-upload#default-options`],[`href`,`/http/file-upload#async-configuration`],[`appAnchor`,``,`id`,`sending-files-to-external-storage`],[`href`,`/application/file-storage`],[`href`,`/application/file-storage#upload-product-photos`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/multer/blob/main/StorageEngine.md`],[`href`,`/http/file-upload#streaming-uploads`],[`appAnchor`,``,`id`,`fastify`],[`href`,`/http/performance#fastify-adapter`],[1,`language-bash`],[`appAnchor`,``,`id`,`storage`],[`appAnchor`,``,`id`,`limits`],[`appAnchor`,``,`id`,`plugin-registration`],[`routerLink`,`/fundamentals/lazy-loading-modules`],[`appAnchor`,``,`id`,`streaming-uploads`],[`appAnchor`,``,`id`,`differences-from-multer`],[`href`,`/http/file-upload#limits`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/29-file-upload`],[`appAnchor`,``,`id`,`streaming-files`],[`routerLink`,`/interceptors`],[`routerLink`,`/http/streaming-responses`],[`appAnchor`,``,`id`,`streamable-file-class`],[`routerLink`,`/application/serialization`],[`appAnchor`,``,`id`,`response-headers`],[`href`,`/controllers#response-headers`],[`appAnchor`,``,`id`,`stream-errors`],[`routerLink`,`/exception-filters`],[`appAnchor`,``,`id`,`cross-platform-support`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/file-upload.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,6,0)(2,`div`,7)(3,`h3`,8),bT(4,`File upload and streaming`),cf(),Aa(5,`p`),bT(6,`This chapter covers files in both directions: receiving files that clients upload, and `),Aa(7,`a`,9),bT(8,`streaming files`),cf(),bT(9,` back to clients.`),cf(),Aa(10,`p`),bT(11,`To handle file uploads, Nest provides a built-in module based on the `),Aa(12,`a`,10),bT(13,`multer`),cf(),bT(14,` middleware package for Express. Multer handles data posted in the `),Aa(15,`code`),bT(16,`multipart/form-data`),cf(),bT(17,` format, which is primarily used to upload files with an HTTP `),Aa(18,`code`),bT(19,`POST`),cf(),bT(20,` request. The module is fully configurable, so you can adjust its behavior to your application's requirements.`),cf(),Aa(21,`blockquote`,11)(22,`strong`),bT(23,`Warning`),cf(),bT(24,` Multer cannot process data that is not in the `),Aa(25,`code`),bT(26,`multipart/form-data`),cf(),bT(27,` format.
`),cf(),Aa(28,`blockquote`,12)(29,`strong`),bT(30,`Hint`),cf(),bT(31,` If your application runs on the `),Aa(32,`code`),bT(33,`FastifyAdapter`),cf(),bT(34,`, the same interceptors are available from the `),Aa(35,`code`),bT(36,`@nestjs/platform-fastify`),cf(),bT(37,` package, backed by `),Aa(38,`a`,13),bT(39,`@fastify/multipart`),cf(),bT(40,` instead of Multer, and the decorators and pipes described in this chapter work unchanged. Only the import path changes - see the `),Aa(41,`a`,14),bT(42,`Fastify`),cf(),bT(43,` section below.
`),cf(),Aa(44,`blockquote`,12)(45,`strong`),bT(46,`Hint`),cf(),bT(47,` If your application runs on the `),Aa(48,`code`),bT(49,`NodeAdapter`),cf(),bT(50,`, import the interceptors and `),Aa(51,`code`),bT(52,`MulterModule`),cf(),bT(53,` from `),Aa(54,`code`),bT(55,`@nestjs/platform-node`),cf(),bT(56,` instead of `),Aa(57,`code`),bT(58,`@nestjs/platform-express`),cf(),bT(59,`. They are the same Multer-based interceptors, so everything in this chapter applies unchanged.
`),cf(),Aa(60,`p`),bT(61,`For type safety, install the Multer type definitions:`),cf(),Aa(62,`pre`)(63,`code`,15),bT(64,`
$ npm i -D @types/multer
`),cf()(),Aa(65,`p`),bT(66,`With this package installed, you can use the `),Aa(67,`code`),bT(68,`Express.Multer.File`),cf(),bT(69,` type (import the `),Aa(70,`code`),bT(71,`Express`),cf(),bT(72,` namespace with `),Aa(73,`code`),bT(74),cf(),bT(75,`).`),cf(),Aa(76,`h4`,16)(77,`span`),bT(78,`Basic example`),cf()(),Aa(79,`p`),bT(80,`To upload a single file, bind the `),Aa(81,`code`),bT(82,`FileInterceptor()`),cf(),bT(83,` interceptor to the route handler and extract the file from the request with the `),Aa(84,`code`),bT(85,`@UploadedFile()`),cf(),bT(86,` decorator.`),cf(),Aa(87,`app-copy-button`,17)(88,`span`,18),Wa(89,`app-tabs`,null,1),cf(),Aa(91,`pre`)(92,`code`,19),bT(93,`
@Post('upload')
@UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
}
`),cf()(),Aa(94,`pre`)(95,`code`,19),bT(96,`
@Post('upload')
@UseInterceptors(FileInterceptor('file'))
@Bind(UploadedFile())
uploadFile(file) {
  console.log(file);
}
`),cf()()(),Aa(97,`blockquote`,12)(98,`strong`),bT(99,`Hint`),cf(),bT(100,` The `),Aa(101,`code`),bT(102,`FileInterceptor()`),cf(),bT(103,` decorator is exported from the `),Aa(104,`code`),bT(105,`@nestjs/platform-express`),cf(),bT(106,` package. The `),Aa(107,`code`),bT(108,`@UploadedFile()`),cf(),bT(109,` decorator is exported from `),Aa(110,`code`),bT(111,`@nestjs/common`),cf(),bT(112,`.
`),cf(),Aa(113,`p`),bT(114,`The `),Aa(115,`code`),bT(116,`FileInterceptor()`),cf(),bT(117,` decorator takes two arguments:`),cf(),Aa(118,`ul`)(119,`li`)(120,`code`),bT(121,`fieldName`),cf(),bT(122,`: the name of the HTML form field that holds the file`),cf(),Aa(123,`li`)(124,`code`),bT(125,`options`),cf(),bT(126,`: an optional object of type `),Aa(127,`code`),bT(128,`MulterOptions`),cf(),bT(129,`. This is the same object the Multer constructor accepts (see the `),Aa(130,`a`,20),bT(131,`Multer options`),cf(),bT(132,`).`),cf()(),Aa(133,`blockquote`,11)(134,`strong`),bT(135,`Warning`),cf(),Aa(136,`code`),bT(137,`FileInterceptor()`),cf(),bT(138,` may not be compatible with third party cloud providers like Google Firebase or others.
`),cf(),Aa(139,`h4`,21)(140,`span`),bT(141,`File validation`),cf()(),Aa(142,`p`),bT(143,`You will often want to validate incoming file metadata, such as the file size or MIME type. To do so, create a `),Aa(144,`a`,22),bT(145,`pipe`),cf(),bT(146,` and bind it to the parameter decorated with `),Aa(147,`code`),bT(148,`@UploadedFile()`),cf(),bT(149,`. The following example implements a basic file size validation pipe:`),cf(),Aa(150,`app-copy-button`)(151,`pre`)(152,`code`,19),bT(153,`
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // "value" is an object containing the file's attributes and metadata
    const oneKb = 1000;
    return value.size < oneKb;
  }
}
`),cf()()(),Aa(154,`p`),bT(155,`Use it together with the `),Aa(156,`code`),bT(157,`FileInterceptor`),cf(),bT(158,` as follows:`),cf(),Aa(159,`app-copy-button`)(160,`pre`)(161,`code`,19),bT(162,`
@Post('file')
@UseInterceptors(FileInterceptor('file'))
uploadFileAndValidate(@UploadedFile(
  new FileSizeValidationPipe(),
  // other pipes can be added here
) file: Express.Multer.File, ) {
  return file;
}
`),cf()()(),Aa(163,`p`),bT(164,`For common cases, Nest provides a built-in pipe, `),Aa(165,`code`),bT(166,`ParseFilePipe`),cf(),bT(167,`, which also standardizes how new file validations are added:`),cf(),Aa(168,`app-copy-button`)(169,`pre`)(170,`code`,19),bT(171,`
@Post('file')
uploadFileAndPassValidation(
  @Body() body: SampleDto,
  @UploadedFile(
    new ParseFilePipe({
      validators: [
        // ... Set of file validator instances here
      ]
    })
  )
  file: Express.Multer.File,
) {
  return {
    body,
    file: file.buffer.toString(),
  };
}
`),cf()()(),Aa(172,`p`)(173,`code`),bT(174,`ParseFilePipe`),cf(),bT(175,` requires an array of file validators to execute. The validator interface is described below. The pipe also accepts two `),Aa(176,`strong`),bT(177,`optional`),cf(),bT(178,` options:`),cf(),Aa(179,`table`)(180,`tr`)(181,`td`)(182,`code`),bT(183,`errorHttpStatusCode`),cf()(),Aa(184,`td`),bT(185,`The HTTP status code to be thrown in case `),Aa(186,`b`),bT(187,`any`),cf(),bT(188,` validator fails. Default is `),Aa(189,`code`),bT(190,`400`),cf(),bT(191,` (BAD REQUEST)`),cf()(),Aa(192,`tr`)(193,`td`)(194,`code`),bT(195,`exceptionFactory`),cf()(),Aa(196,`td`),bT(197,`A factory which receives the error message and returns an error.`),cf()()(),Aa(198,`p`),bT(199,`Validators used by this pipe are either built-in implementations or your own subclasses of the abstract `),Aa(200,`code`),bT(201,`FileValidator`),cf(),bT(202,` class:`),cf(),Aa(203,`app-copy-button`)(204,`pre`)(205,`code`,19),bT(206,`
export abstract class FileValidator<TValidationOptions = Record<string, any>> {
  constructor(protected readonly validationOptions: TValidationOptions) {}

  /**
   * Indicates if this file should be considered valid, according to the options passed in the constructor.
   * @param file the file from the request object
   */
  abstract isValid(file?: any): boolean | Promise<boolean>;

  /**
   * Builds an error message in case the validation fails.
   * @param file the file from the request object
   */
  abstract buildErrorMessage(file: any): string;
}
`),cf()()(),Aa(207,`blockquote`,12)(208,`strong`),bT(209,`Hint`),cf(),bT(210,` The `),Aa(211,`code`),bT(212,`isValid()`),cf(),bT(213,` method can be asynchronous. For type safety, type the `),Aa(214,`code`),bT(215,`file`),cf(),bT(216,` parameter as `),Aa(217,`code`),bT(218,`Express.Multer.File`),cf(),bT(219,` when you use Express (the default HTTP adapter).
`),cf(),Aa(220,`p`),bT(221,`A `),Aa(222,`code`),bT(223,`FileValidator`),cf(),bT(224,` receives the file object and validates it according to the options passed to its constructor. Nest provides two built-in implementations:`),cf(),Aa(225,`ul`)(226,`li`)(227,`code`),bT(228,`MaxFileSizeValidator`),cf(),bT(229,` checks that the file's size is less than the provided value, in bytes.`),cf(),Aa(230,`li`)(231,`code`),bT(232,`FileTypeValidator`),cf(),bT(233,` checks that the file's MIME type matches the given string or regular expression. By default, it determines the MIME type from the file content's `),Aa(234,`a`,23),bT(235,`magic number`),cf(),bT(236,`.`),cf()(),Aa(237,`p`),bT(238,`The following snippet uses both validators with `),Aa(239,`code`),bT(240,`ParseFilePipe`),cf(),bT(241,`:`),cf(),Aa(242,`app-copy-button`)(243,`pre`)(244,`code`,19),bT(245,`
@UploadedFile(
  new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 1000 }),
      new FileTypeValidator({ fileType: 'image/jpeg' }),
    ],
  }),
)
file: Express.Multer.File,
`),cf()()(),Aa(246,`blockquote`,12)(247,`strong`),bT(248,`Hint`),cf(),bT(249,` If the list of validators grows long, define the array in a separate file and import it as a named constant, such as `),Aa(250,`code`),bT(251,`fileValidators`),cf(),bT(252,`.
`),cf(),Aa(253,`p`),bT(254,`Alternatively, compose the validators with the `),Aa(255,`code`),bT(256,`ParseFilePipeBuilder`),cf(),bT(257,` class. The builder instantiates each validator for you, so you pass only their options:`),cf(),Aa(258,`app-copy-button`)(259,`pre`)(260,`code`,19),bT(261,`
@UploadedFile(
  new ParseFilePipeBuilder()
    .addFileTypeValidator({
      fileType: 'jpeg',
    })
    .addMaxSizeValidator({
      maxSize: 1000
    })
    .build({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
    }),
)
file: Express.Multer.File,
`),cf()()(),Aa(262,`blockquote`,12)(263,`strong`),bT(264,`Hint`),cf(),bT(265,` A file is required by default. To make it optional, pass `),Aa(266,`code`),bT(267,`fileIsRequired: false`),cf(),bT(268,` in the options of the `),Aa(269,`code`),bT(270,`build()`),cf(),bT(271,` method (next to `),Aa(272,`code`),bT(273,`errorHttpStatusCode`),cf(),bT(274,`).
`),cf(),Aa(275,`h4`,24)(276,`span`),bT(277,`Array of files`),cf()(),Aa(278,`p`),bT(279,`To upload an array of files identified by a single field name, use the `),Aa(280,`code`),bT(281,`FilesInterceptor()`),cf(),bT(282,` decorator (note the plural `),Aa(283,`strong`),bT(284,`Files`),cf(),bT(285,` in its name). It takes three arguments:`),cf(),Aa(286,`ul`)(287,`li`)(288,`code`),bT(289,`fieldName`),cf(),bT(290,`: as described above`),cf(),Aa(291,`li`)(292,`code`),bT(293,`maxCount`),cf(),bT(294,`: an optional maximum number of files to accept`),cf(),Aa(295,`li`)(296,`code`),bT(297,`options`),cf(),bT(298,`: an optional `),Aa(299,`code`),bT(300,`MulterOptions`),cf(),bT(301,` object, as described above`),cf()(),Aa(302,`p`),bT(303,`When using `),Aa(304,`code`),bT(305,`FilesInterceptor()`),cf(),bT(306,`, extract files from the `),Aa(307,`code`),bT(308,`request`),cf(),bT(309,` with the `),Aa(310,`code`),bT(311,`@UploadedFiles()`),cf(),bT(312,` decorator.`),cf(),Aa(313,`app-copy-button`,17)(314,`span`,18),Wa(315,`app-tabs`,null,2),cf(),Aa(317,`pre`)(318,`code`,19),bT(319,`
@Post('upload')
@UseInterceptors(FilesInterceptor('files'))
uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
  console.log(files);
}
`),cf()(),Aa(320,`pre`)(321,`code`,19),bT(322,`
@Post('upload')
@UseInterceptors(FilesInterceptor('files'))
@Bind(UploadedFiles())
uploadFile(files) {
  console.log(files);
}
`),cf()()(),Aa(323,`blockquote`,12)(324,`strong`),bT(325,`Hint`),cf(),bT(326,` The `),Aa(327,`code`),bT(328,`FilesInterceptor()`),cf(),bT(329,` decorator is exported from the `),Aa(330,`code`),bT(331,`@nestjs/platform-express`),cf(),bT(332,` package. The `),Aa(333,`code`),bT(334,`@UploadedFiles()`),cf(),bT(335,` decorator is exported from `),Aa(336,`code`),bT(337,`@nestjs/common`),cf(),bT(338,`.
`),cf(),Aa(339,`h4`,25)(340,`span`),bT(341,`Validating an array of files`),cf()(),Aa(342,`p`),bT(343,`To validate an array of uploaded files, pass a pipe built with `),Aa(344,`code`),bT(345,`ParseFilePipeBuilder`),cf(),bT(346,` to the `),Aa(347,`code`),bT(348,`@UploadedFiles()`),cf(),bT(349,` decorator. The registered validators run against each file in the array.`),cf(),Aa(350,`app-copy-button`,17)(351,`span`,18),Wa(352,`app-tabs`,null,3),cf(),Aa(354,`pre`)(355,`code`,19),bT(356,`
@Post('upload')
@UseInterceptors(FilesInterceptor('files', 5))
uploadFiles(
  @UploadedFiles(
    new ParseFilePipeBuilder()
      .addFileTypeValidator({
        fileType: /^image\\/(jpeg|png|gif)$/,
      })
      .addMaxSizeValidator({ maxSize: 5242880 })
      .build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
  )
  files: Array<Express.Multer.File>,
) {
  console.log(files);
}
`),cf()()(),Aa(357,`h4`,26)(358,`span`),bT(359,`Multiple files`),cf()(),Aa(360,`p`),bT(361,`To upload multiple files under different field names, use the `),Aa(362,`code`),bT(363,`FileFieldsInterceptor()`),cf(),bT(364,` decorator. It takes two arguments:`),cf(),Aa(365,`ul`)(366,`li`)(367,`code`),bT(368,`uploadedFields`),cf(),bT(369,`: an array of objects, each with a required `),Aa(370,`code`),bT(371,`name`),cf(),bT(372,` property (the field name) and an optional `),Aa(373,`code`),bT(374,`maxCount`),cf(),bT(375,` property`),cf(),Aa(376,`li`)(377,`code`),bT(378,`options`),cf(),bT(379,`: an optional `),Aa(380,`code`),bT(381,`MulterOptions`),cf(),bT(382,` object, as described above`),cf()(),Aa(383,`p`),bT(384,`When using `),Aa(385,`code`),bT(386,`FileFieldsInterceptor()`),cf(),bT(387,`, extract files from the `),Aa(388,`code`),bT(389,`request`),cf(),bT(390,` with the `),Aa(391,`code`),bT(392,`@UploadedFiles()`),cf(),bT(393,` decorator.`),cf(),Aa(394,`app-copy-button`,17)(395,`span`,18),Wa(396,`app-tabs`,null,4),cf(),Aa(398,`pre`)(399,`code`,19),bT(400,`
@Post('upload')
@UseInterceptors(FileFieldsInterceptor([
  { name: 'avatar', maxCount: 1 },
  { name: 'background', maxCount: 1 },
]))
uploadFile(@UploadedFiles() files: { avatar?: Express.Multer.File[], background?: Express.Multer.File[] }) {
  console.log(files);
}
`),cf()(),Aa(401,`pre`)(402,`code`,19),bT(403,`
@Post('upload')
@Bind(UploadedFiles())
@UseInterceptors(FileFieldsInterceptor([
  { name: 'avatar', maxCount: 1 },
  { name: 'background', maxCount: 1 },
]))
uploadFile(files) {
  console.log(files);
}
`),cf()()(),Aa(404,`h4`,27)(405,`span`),bT(406,`Any files`),cf()(),Aa(407,`p`),bT(408,`To accept files under any field names, use the `),Aa(409,`code`),bT(410,`AnyFilesInterceptor()`),cf(),bT(411,` decorator. It accepts an optional `),Aa(412,`code`),bT(413,`options`),cf(),bT(414,` object, as described above.`),cf(),Aa(415,`p`),bT(416,`When using `),Aa(417,`code`),bT(418,`AnyFilesInterceptor()`),cf(),bT(419,`, extract files from the `),Aa(420,`code`),bT(421,`request`),cf(),bT(422,` with the `),Aa(423,`code`),bT(424,`@UploadedFiles()`),cf(),bT(425,` decorator.`),cf(),Aa(426,`app-copy-button`,17)(427,`span`,18),Wa(428,`app-tabs`,null,5),cf(),Aa(430,`pre`)(431,`code`,19),bT(432,`
@Post('upload')
@UseInterceptors(AnyFilesInterceptor())
uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
  console.log(files);
}
`),cf()(),Aa(433,`pre`)(434,`code`,19),bT(435,`
@Post('upload')
@Bind(UploadedFiles())
@UseInterceptors(AnyFilesInterceptor())
uploadFile(files) {
  console.log(files);
}
`),cf()()(),Aa(436,`h4`,28)(437,`span`),bT(438,`No files`),cf()(),Aa(439,`p`),bT(440,`To accept `),Aa(441,`code`),bT(442,`multipart/form-data`),cf(),bT(443,` without allowing file uploads, use the `),Aa(444,`code`),bT(445,`NoFilesInterceptor`),cf(),bT(446,`. It sets the multipart fields as properties of the request body. A request that contains files is rejected with a `),Aa(447,`code`),bT(448,`BadRequestException`),cf(),bT(449,`.`),cf(),Aa(450,`app-copy-button`)(451,`pre`)(452,`code`,19),bT(453,`
@Post('upload')
@UseInterceptors(NoFilesInterceptor())
handleMultiPartData(@Body() body) {
  console.log(body)
}
`),cf()()(),Aa(454,`h4`,29)(455,`span`),bT(456,`Default options`),cf()(),Aa(457,`p`),bT(458,`You can pass Multer options to each file interceptor, as described above. To set default options instead, call the static `),Aa(459,`code`),bT(460,`register()`),cf(),bT(461,` method when you import the `),Aa(462,`code`),bT(463,`MulterModule`),cf(),bT(464,`. It accepts all `),Aa(465,`a`,20),bT(466,`Multer options`),cf(),bT(467,`.`),cf(),Aa(468,`app-copy-button`)(469,`pre`)(470,`code`,19),bT(471,`
MulterModule.register({
  dest: './upload',
});
`),cf()()(),Aa(472,`blockquote`,12)(473,`strong`),bT(474,`Hint`),cf(),bT(475,` The `),Aa(476,`code`),bT(477,`MulterModule`),cf(),bT(478,` class is exported from the `),Aa(479,`code`),bT(480,`@nestjs/platform-express`),cf(),bT(481,` package.
`),cf(),Aa(482,`p`),bT(483,`Options passed to a file interceptor take precedence over these defaults. Starting with NestJS v12.0.4, the two `),Aa(484,`code`),bT(485,`limits`),cf(),bT(486,` objects are merged key by key, so a route that sets only `),Aa(487,`code`),bT(488,`limits.fileSize`),cf(),bT(489,` keeps a default such as `),Aa(490,`code`),bT(491,`limits.files`),cf(),bT(492,`. If one of them is a function, the interceptor's `),Aa(493,`code`),bT(494,`limits`),cf(),bT(495,` replaces the default one entirely.`),cf(),Aa(496,`h4`,30)(497,`span`),bT(498,`Async configuration`),cf()(),Aa(499,`p`),bT(500,`To set `),Aa(501,`code`),bT(502,`MulterModule`),cf(),bT(503,` options asynchronously instead of statically, use the `),Aa(504,`code`),bT(505,`registerAsync()`),cf(),bT(506,` method. As with most dynamic modules, it supports several techniques for async configuration.`),cf(),Aa(507,`p`),bT(508,`One technique is to use a factory function:`),cf(),Aa(509,`app-copy-button`)(510,`pre`)(511,`code`,19),bT(512,`
MulterModule.registerAsync({
  useFactory: () => ({
    dest: './upload',
  }),
});
`),cf()()(),Aa(513,`p`),bT(514,`Like other `),Aa(515,`a`,31),bT(516,`factory providers`),cf(),bT(517,`, the factory function can be `),Aa(518,`code`),bT(519,`async`),cf(),bT(520,` and can inject dependencies through `),Aa(521,`code`),bT(522,`inject`),cf(),bT(523,`.`),cf(),Aa(524,`app-copy-button`)(525,`pre`)(526,`code`,19),bT(527,`
MulterModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    dest: configService.get<string>('MULTER_DEST'),
  }),
  inject: [ConfigService],
});
`),cf()()(),Aa(528,`p`),bT(529,`Alternatively, you can configure the `),Aa(530,`code`),bT(531,`MulterModule`),cf(),bT(532,` using a class instead of a factory, as shown below:`),cf(),Aa(533,`app-copy-button`)(534,`pre`)(535,`code`,19),bT(536,`
MulterModule.registerAsync({
  useClass: MulterConfigService,
});
`),cf()()(),Aa(537,`p`),bT(538,`The construction above instantiates `),Aa(539,`code`),bT(540,`MulterConfigService`),cf(),bT(541,` inside `),Aa(542,`code`),bT(543,`MulterModule`),cf(),bT(544,` and calls its `),Aa(545,`code`),bT(546,`createMulterOptions()`),cf(),bT(547,` method to obtain the options object. For this to work, `),Aa(548,`code`),bT(549,`MulterConfigService`),cf(),bT(550,` must implement the `),Aa(551,`code`),bT(552,`MulterOptionsFactory`),cf(),bT(553,` interface:`),cf(),Aa(554,`app-copy-button`)(555,`pre`)(556,`code`,19),bT(557,`
@Injectable()
class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      dest: './upload',
    };
  }
}
`),cf()()(),Aa(558,`p`),bT(559,`If you want to reuse an existing options provider instead of creating a private copy inside the `),Aa(560,`code`),bT(561,`MulterModule`),cf(),bT(562,`, use the `),Aa(563,`code`),bT(564,`useExisting`),cf(),bT(565,` syntax.`),cf(),Aa(566,`app-copy-button`)(567,`pre`)(568,`code`,19),bT(569,`
MulterModule.registerAsync({
  imports: [ConfigModule],
  useExisting: ConfigService,
});
`),cf()()(),Aa(570,`p`),bT(571,`You can also pass `),Aa(572,`code`),bT(573,`extraProviders`),cf(),bT(574,` to the `),Aa(575,`code`),bT(576,`registerAsync()`),cf(),bT(577,` method. These providers are merged with the module's providers.`),cf(),Aa(578,`app-copy-button`)(579,`pre`)(580,`code`,19),bT(581,`
MulterModule.registerAsync({
  imports: [ConfigModule],
  useClass: ConfigService,
  extraProviders: [MyAdditionalProvider],
});
`),cf()()(),Aa(582,`p`),bT(583,`This is useful when the factory function or the class constructor needs additional dependencies.`),cf(),Aa(584,`h4`,32)(585,`span`),bT(586,`Memory usage and storage`),cf()(),Aa(587,`p`),bT(588,`By default, Multer uses its in-memory storage engine (`),Aa(589,`code`),bT(590,`memoryStorage()`),cf(),bT(591,`): every uploaded file is read completely into memory and exposed as a `),Aa(592,`code`),bT(593,`Buffer`),cf(),bT(594,` on `),Aa(595,`code`),bT(596,`file.buffer`),cf(),bT(597,` before your route handler runs. This is convenient for small files (avatars or CSV imports), but each in-flight upload occupies as much memory as its size, so large files or many concurrent uploads can quickly exhaust the memory of your process.`),cf(),Aa(598,`blockquote`,11)(599,`strong`),bT(600,`Warning`),cf(),bT(601,` Multer does not limit the size of uploaded files by default. When you keep files in memory, always set `),Aa(602,`code`),bT(603,`limits.fileSize`),cf(),bT(604,`.
`),cf(),Aa(605,`h5`,33)(606,`span`),bT(607,`File size limit`),cf()(),Aa(608,`p`),bT(609,`Use the `),Aa(610,`code`),bT(611,`limits`),cf(),bT(612,` option to reject files that are too large. When a limit is exceeded, Nest responds with a `),Aa(613,`code`),bT(614,`413 File too large`),cf(),bT(615,` error (for `),Aa(616,`code`),bT(617,`fileSize`),cf(),bT(618,`) or `),Aa(619,`code`),bT(620,`400 Bad Request`),cf(),bT(621,` (for other limits, such as `),Aa(622,`code`),bT(623,`files`),cf(),bT(624,`) and the route handler is not called.`),cf(),Aa(625,`app-copy-button`)(626,`pre`)(627,`code`,19),bT(628,`
@Post('upload')
@UseInterceptors(
  FileInterceptor('file', {
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  }),
)
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file.size);
}
`),cf()()(),Aa(629,`blockquote`,12)(630,`strong`),bT(631,`Hint`),cf(),bT(632,` Unlike `),Aa(633,`code`),bT(634,`MaxFileSizeValidator`),cf(),bT(635,`, which runs after the whole file has been received, `),Aa(636,`code`),bT(637,`limits.fileSize`),cf(),bT(638,` makes Multer stop storing the file and reject the request as soon as the limit is reached, so oversized files never fully reach memory or disk. See the `),Aa(639,`a`,34),bT(640,`Multer limits`),cf(),bT(641,` for the full list of options.
`),cf(),Aa(642,`h5`,35)(643,`span`),bT(644,`Field name limits`),cf()(),Aa(645,`p`),bT(646,`Field names such as `),Aa(647,`code`),bT(648,`user[address][city]`),cf(),bT(649,` or `),Aa(650,`code`),bT(651,`tags[2]`),cf(),bT(652,` build nested objects and arrays in the request body. Two limits bound them: `),Aa(653,`code`),bT(654,`fieldNestingDepth`),cf(),bT(655,`, the number of nesting levels (`),Aa(656,`code`),bT(657,`a[b][c]`),cf(),bT(658,` has 2), and `),Aa(659,`code`),bT(660,`fieldArrayIndexLimit`),cf(),bT(661,`, the highest array index (`),Aa(662,`code`),bT(663,`tags[2]`),cf(),bT(664,` uses index 2). A request that exceeds either one is rejected with a `),Aa(665,`code`),bT(666,`400 Bad Request`),cf(),bT(667,` response. Starting with NestJS v12.2, they default to 32 and 1000 respectively (Multer leaves them unlimited), so that a single request cannot build an arbitrarily deep body or a huge array. Set a limit to `),Aa(668,`code`),bT(669,`Infinity`),cf(),bT(670,` to lift it.`),cf(),Aa(671,`h5`,36)(672,`span`),bT(673,`Disk storage`),cf()(),Aa(674,`p`),bT(675,`To keep memory usage constant regardless of file size, write uploads to disk with the `),Aa(676,`code`),bT(677,`diskStorage()`),cf(),bT(678,` engine. Multer then streams each file to disk as it arrives, and the file object exposes `),Aa(679,`code`),bT(680,`destination`),cf(),bT(681,`, `),Aa(682,`code`),bT(683,`filename`),cf(),bT(684,` and `),Aa(685,`code`),bT(686,`path`),cf(),bT(687,` instead of `),Aa(688,`code`),bT(689,`buffer`),cf(),bT(690,`.`),cf(),Aa(691,`app-copy-button`)(692,`pre`)(693,`code`,19),bT(694,`
import { extname } from 'node:path';
import { randomUUID } from 'node:crypto';
import { diskStorage } from 'multer';

@Post('upload')
@UseInterceptors(
  FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, \`\${randomUUID()}\${extname(file.originalname)}\`);
      },
    }),
    limits: { fileSize: 1024 * 1024 * 1024 }, // 1 GB
  }),
)
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file.path);
}
`),cf()()(),Aa(695,`blockquote`,12)(696,`strong`),bT(697,`Hint`),cf(),bT(698,` The `),Aa(699,`code`),bT(700,`diskStorage()`),cf(),bT(701,` and `),Aa(702,`code`),bT(703,`memoryStorage()`),cf(),bT(704,` functions are exported from the `),Aa(705,`code`),bT(706,`multer`),cf(),bT(707,` package. As a shorthand, pass `),Aa(708,`code`),bT(709,`dest: './uploads'`),cf(),bT(710,` to store files on disk under random names. If you pass a `),Aa(711,`code`),bT(712,`destination`),cf(),bT(713,` function instead of a string, you are responsible for creating the directory.
`),cf(),Aa(714,`p`),bT(715,`To apply the same storage and limits to every file interceptor in a module, set them as `),Aa(716,`a`,37),bT(717,`default options`),cf(),bT(718,` or with `),Aa(719,`a`,38),bT(720,`async configuration`),cf(),bT(721,`.`),cf(),Aa(722,`p`),bT(723,`Files stored on disk are not removed automatically once your route handler has run. Delete them (for example with `),Aa(724,`code`),bT(725,`unlink()`),cf(),bT(726,` from `),Aa(727,`code`),bT(728,`fs/promises`),cf(),bT(729,`) once you have processed them, including when processing fails. Starting with NestJS v12.2, if a pipe rejects the request (for example, because `),Aa(730,`code`),bT(731,`ParseFilePipe`),cf(),bT(732,` validation fails), the route handler does not run, and the stored files are removed once the error response has been sent.`),cf(),Aa(733,`h5`,39)(734,`span`),bT(735,`Sending files to external storage`),cf()(),Aa(736,`p`),bT(737,`To store uploads in S3, Cloudflare R2 or another external store without buffering them in memory or writing a temporary file, use a storage engine that streams each file to its destination as it arrives. The `),Aa(738,`a`,40)(739,`code`),bT(740,`@nestjs/storage`),cf()(),bT(741,` package provides one, `),Aa(742,`code`),bT(743,`uploadToDisk()`),cf(),bT(744,`, which you pass as the `),Aa(745,`code`),bT(746,`storage`),cf(),bT(747,` option of `),Aa(748,`code`),bT(749,`FileInterceptor()`),cf(),bT(750,`. See `),Aa(751,`a`,41),bT(752,`Upload product photos`),cf(),bT(753,`. Any other Multer `),Aa(754,`a`,42),bT(755,`storage engine`),cf(),bT(756,` works the same way.`),cf(),Aa(757,`blockquote`,12)(758,`strong`),bT(759,`Hint`),cf(),bT(760,` On the `),Aa(761,`code`),bT(762,`FastifyAdapter`),cf(),bT(763,`, you can also receive the file as a stream inside the route handler with `),Aa(764,`code`),bT(765,`FileStreamInterceptor()`),cf(),bT(766,`. See `),Aa(767,`a`,43),bT(768,`Streaming uploads`),cf(),bT(769,`.
`),cf(),Aa(770,`h4`,44)(771,`span`),bT(772,`Fastify`),cf()(),Aa(773,`p`),bT(774,`Starting with NestJS v12.1, applications running on the `),Aa(775,`code`),bT(776,`FastifyAdapter`),cf(),bT(777,` (see `),Aa(778,`a`,45),bT(779,`Fastify adapter`),cf(),bT(780,`) can handle file uploads with the same API, backed by the `),Aa(781,`a`,13),bT(782,`@fastify/multipart`),cf(),bT(783,` plugin instead of Multer. The interceptors described in this chapter take the same arguments and options, populate the request in the same way, and fail with the same error responses, while `),Aa(784,`code`),bT(785,`@UploadedFile()`),cf(),bT(786,`, `),Aa(787,`code`),bT(788,`@UploadedFiles()`),cf(),bT(789,`, `),Aa(790,`code`),bT(791,`ParseFilePipe`),cf(),bT(792,`, `),Aa(793,`code`),bT(794,`ParseFilePipeBuilder`),cf(),bT(795,` and the built-in file validators work unchanged.`),cf(),Aa(796,`p`),bT(797,`First, install the plugin:`),cf(),Aa(798,`pre`)(799,`code`,46),bT(800,`
$ npm i @fastify/multipart
`),cf()(),Aa(801,`p`),bT(802,`There is no need to register it: the `),Aa(803,`code`),bT(804,`FastifyAdapter`),cf(),bT(805,` registers the plugin automatically as soon as your application uses one of the upload interceptors (in applications that don't, it is not registered at all). If the package is not installed, the application fails to start with an error naming it.`),cf(),Aa(806,`p`),bT(807,`Next, import the interceptors from `),Aa(808,`code`),bT(809,`@nestjs/platform-fastify/multipart`),cf(),bT(810,` instead of `),Aa(811,`code`),bT(812,`@nestjs/platform-express`),cf(),bT(813,`. The rest of the controller stays the same, except that files are typed as `),Aa(814,`code`),bT(815,`UploadedMultipartFile`),cf(),bT(816,`:`),cf(),Aa(817,`app-copy-button`)(818,`pre`)(819,`code`,19),bT(820,`
import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileInterceptor,
  type UploadedMultipartFile,
} from '@nestjs/platform-fastify/multipart';

@Controller('files')
export class FilesController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/png' }),
        ],
      }),
    )
    file: UploadedMultipartFile,
  ) {
    console.log(file);
  }
}
`),cf()()(),Aa(821,`blockquote`,12)(822,`strong`),bT(823,`Hint`),cf(),bT(824,` Everything exported from `),Aa(825,`code`),bT(826,`@nestjs/platform-fastify/multipart`),cf(),bT(827,` is also re-exported from the `),Aa(828,`code`),bT(829,`@nestjs/platform-fastify`),cf(),bT(830,` package root. The interceptors only work with the `),Aa(831,`code`),bT(832,`FastifyAdapter`),cf(),bT(833,`: with the `),Aa(834,`code`),bT(835,`ExpressAdapter`),cf(),bT(836,`, the application fails to start, so keep importing them from `),Aa(837,`code`),bT(838,`@nestjs/platform-express`),cf(),bT(839,` there.
`),cf(),Aa(840,`p`),bT(841,`The table below maps the Express API to its Fastify counterpart:`),cf(),Aa(842,`table`)(843,`thead`)(844,`tr`)(845,`th`)(846,`code`),bT(847,`@nestjs/platform-express`),cf()(),Aa(848,`th`)(849,`code`),bT(850,`@nestjs/platform-fastify/multipart`),cf()()()(),Aa(851,`tbody`)(852,`tr`)(853,`td`)(854,`code`),bT(855,`FileInterceptor()`),cf(),bT(856,`, `),Aa(857,`code`),bT(858,`FilesInterceptor()`),cf(),bT(859,`, `),Aa(860,`code`),bT(861,`FileFieldsInterceptor()`),cf(),bT(862,`, `),Aa(863,`code`),bT(864,`AnyFilesInterceptor()`),cf(),bT(865,`, `),Aa(866,`code`),bT(867,`NoFilesInterceptor()`),cf()(),Aa(868,`td`),bT(869,`Same names, arguments and options`),cf()(),Aa(870,`tr`)(871,`td`)(872,`code`),bT(873,`MulterOptions`),cf()(),Aa(874,`td`)(875,`code`),bT(876,`MultipartOptions`),cf()()(),Aa(877,`tr`)(878,`td`)(879,`code`),bT(880,`MulterModule`),cf(),bT(881,`, `),Aa(882,`code`),bT(883,`MulterOptionsFactory`),cf(),bT(884,`, `),Aa(885,`code`),bT(886,`createMulterOptions()`),cf()(),Aa(887,`td`)(888,`code`),bT(889,`MultipartModule`),cf(),bT(890,`, `),Aa(891,`code`),bT(892,`MultipartOptionsFactory`),cf(),bT(893,`, `),Aa(894,`code`),bT(895,`createMultipartOptions()`),cf()()(),Aa(896,`tr`)(897,`td`)(898,`code`),bT(899,`Express.Multer.File`),cf()(),Aa(900,`td`)(901,`code`),bT(902,`UploadedMultipartFile`),cf()()(),Aa(903,`tr`)(904,`td`)(905,`code`),bT(906,`memoryStorage()`),cf(),bT(907,` and `),Aa(908,`code`),bT(909,`diskStorage()`),cf(),bT(910,` from the `),Aa(911,`code`),bT(912,`multer`),cf(),bT(913,` package`),cf(),Aa(914,`td`)(915,`code`),bT(916,`memoryStorage()`),cf(),bT(917,` and `),Aa(918,`code`),bT(919,`diskStorage()`),cf()()(),Aa(920,`tr`)(921,`td`),bT(922,`-`),cf(),Aa(923,`td`)(924,`code`),bT(925,`FileStreamInterceptor()`),cf(),bT(926,` (see `),Aa(927,`a`,43),bT(928,`Streaming uploads`),cf(),bT(929,`)`),cf()()()(),Aa(930,`p`),bT(931,`The interceptor options are the ones Multer accepts: `),Aa(932,`code`),bT(933,`dest`),cf(),bT(934,`, `),Aa(935,`code`),bT(936,`storage`),cf(),bT(937,`, `),Aa(938,`code`),bT(939,`limits`),cf(),bT(940,` (an object, or a function that receives the request and returns one), `),Aa(941,`code`),bT(942,`fileFilter`),cf(),bT(943,`, `),Aa(944,`code`),bT(945,`preservePath`),cf(),bT(946,` and `),Aa(947,`code`),bT(948,`defParamCharset`),cf(),bT(949,`. Uploaded files are exposed as `),Aa(950,`code`),bT(951,`req.file`),cf(),bT(952,` or `),Aa(953,`code`),bT(954,`req.files`),cf(),bT(955,` and text fields as `),Aa(956,`code`),bT(957,`req.body`),cf(),bT(958,`, exactly as with Multer. `),Aa(959,`code`),bT(960,`UploadedMultipartFile`),cf(),bT(961,` has the same shape as `),Aa(962,`code`),bT(963,`Express.Multer.File`),cf(),bT(964,`, so you don't need the `),Aa(965,`code`),bT(966,`@types/multer`),cf(),bT(967,` package.`),cf(),Aa(968,`p`)(969,`code`),bT(970,`MultipartModule`),cf(),bT(971,` sets default options for the upload interceptors of the module that imports it, just like `),Aa(972,`code`),bT(973,`MulterModule`),cf(),bT(974,`. Its `),Aa(975,`code`),bT(976,`registerAsync()`),cf(),bT(977,` method accepts `),Aa(978,`code`),bT(979,`useFactory`),cf(),bT(980,` (with `),Aa(981,`code`),bT(982,`imports`),cf(),bT(983,` and `),Aa(984,`code`),bT(985,`inject`),cf(),bT(986,`), `),Aa(987,`code`),bT(988,`useClass`),cf(),bT(989,` and `),Aa(990,`code`),bT(991,`useExisting`),cf(),bT(992,`.`),cf(),Aa(993,`app-copy-button`)(994,`pre`)(995,`code`,19),bT(996,`
MultipartModule.register({
  dest: './upload',
});
`),cf()()(),Aa(997,`h5`,47)(998,`span`),bT(999,`Storage`),cf()(),Aa(1e3,`p`),bT(1001,`As with Multer, files are kept in memory (in `),Aa(1002,`code`),bT(1003,`file.buffer`),cf(),bT(1004,`) unless you set the `),Aa(1005,`code`),bT(1006,`dest`),cf(),bT(1007,` or `),Aa(1008,`code`),bT(1009,`storage`),cf(),bT(1010,` option. `),Aa(1011,`code`),bT(1012,`dest`),cf(),bT(1013,` writes each file to the given folder under a random name, and the `),Aa(1014,`code`),bT(1015,`diskStorage()`),cf(),bT(1016,` function lets you choose the folder and the file name. Disk storage sets `),Aa(1017,`code`),bT(1018,`destination`),cf(),bT(1019,`, `),Aa(1020,`code`),bT(1021,`filename`),cf(),bT(1022,` and `),Aa(1023,`code`),bT(1024,`path`),cf(),bT(1025,` on the file instead of `),Aa(1026,`code`),bT(1027,`buffer`),cf(),bT(1028,`.`),cf(),Aa(1029,`app-copy-button`)(1030,`pre`)(1031,`code`,19),bT(1032,`
import {
  diskStorage,
  FileInterceptor,
  type UploadedMultipartFile,
} from '@nestjs/platform-fastify/multipart';

@Post('upload')
@UseInterceptors(
  FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) =>
        callback(null, \`\${Date.now()}-\${file.originalname}\`),
    }),
  }),
)
uploadFile(@UploadedFile() file: UploadedMultipartFile) {
  console.log(file.path);
}
`),cf()()(),Aa(1033,`p`),bT(1034,`Storage engines follow Multer's storage engine contract (`),Aa(1035,`code`),bT(1036,`_handleFile()`),cf(),bT(1037,` and `),Aa(1038,`code`),bT(1039,`_removeFile()`),cf(),bT(1040,`), so Multer's own `),Aa(1041,`code`),bT(1042,`multer.diskStorage()`),cf(),bT(1043,` and third-party Multer storage engines can be passed as `),Aa(1044,`code`),bT(1045,`storage`),cf(),bT(1046,` unchanged.`),cf(),Aa(1047,`h5`,48)(1048,`span`),bT(1049,`Limits`),cf()(),Aa(1050,`p`)(1051,`code`),bT(1052,`@fastify/multipart`),cf(),bT(1053,` applies stricter defaults than Multer. Unless configured otherwise, the maximum file size (`),Aa(1054,`code`),bT(1055,`fileSize`),cf(),bT(1056,`) is the Fastify `),Aa(1057,`code`),bT(1058,`bodyLimit`),cf(),bT(1059,` (1 MiB by default) and the maximum number of parts (`),Aa(1060,`code`),bT(1061,`parts`),cf(),bT(1062,`) is 1000, whereas Multer limits neither. Larger files are rejected with a `),Aa(1063,`code`),bT(1064,`413 File too large`),cf(),bT(1065,` response. You can raise these limits:`),cf(),Aa(1066,`ul`)(1067,`li`),bT(1068,`for a single route, with the `),Aa(1069,`code`),bT(1070,`limits`),cf(),bT(1071,` option of the interceptor`),cf(),Aa(1072,`li`),bT(1073,`for a module, with `),Aa(1074,`code`),bT(1075,`MultipartModule.register()`),cf(),bT(1076,` or `),Aa(1077,`code`),bT(1078,`registerAsync()`),cf()(),Aa(1079,`li`),bT(1080,`for the whole application, with the `),Aa(1081,`code`),bT(1082,`multipart`),cf(),bT(1083,` option of the `),Aa(1084,`code`),bT(1085,`FastifyAdapter`),cf(),bT(1086,`, which passes options to the plugin itself:`),cf()(),Aa(1087,`app-copy-button`)(1088,`pre`)(1089,`code`,19),bT(1090,`
const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter({
    multipart: { limits: { fileSize: 10 * 1024 * 1024 } },
  }),
);
`),cf()()(),Aa(1091,`p`),bT(1092,`Limits set on a route are merged over the ones set with `),Aa(1093,`code`),bT(1094,`MultipartModule`),cf(),bT(1095,` key by key, and both are merged over the application-wide ones. The only exception is `),Aa(1096,`code`),bT(1097,`fieldNameSize`),cf(),bT(1098,`, which the interceptors don't read from the plugin options - set it on the route or with `),Aa(1099,`code`),bT(1100,`MultipartModule`),cf(),bT(1101,`.`),cf(),Aa(1102,`h5`,49)(1103,`span`),bT(1104,`Plugin registration`),cf()(),Aa(1105,`p`),bT(1106,`The `),Aa(1107,`code`),bT(1108,`multipart`),cf(),bT(1109,` option of the `),Aa(1110,`code`),bT(1111,`FastifyAdapter`),cf(),bT(1112,` controls how the `),Aa(1113,`code`),bT(1114,`@fastify/multipart`),cf(),bT(1115,` plugin is registered:`),cf(),Aa(1116,`ul`)(1117,`li`),bT(1118,`not set (default): the adapter registers the plugin when an upload interceptor is used, unless it has been registered already`),cf(),Aa(1119,`li`),bT(1120,`an options object (`),Aa(1121,`code`),bT(1122,`FastifyMultipartOptions`),cf(),bT(1123,`, e.g., `),Aa(1124,`code`),bT(1125,`limits`),cf(),bT(1126,`): the adapter registers the plugin with these options when the application initializes`),cf(),Aa(1127,`li`)(1128,`code`),bT(1129,`true`),cf(),bT(1130,`: same as above, with the plugin's default options`),cf(),Aa(1131,`li`)(1132,`code`),bT(1133,`false`),cf(),bT(1134,`: the adapter never registers the plugin, for applications that register it themselves or parse multipart requests with another library (the upload interceptors still require `),Aa(1135,`code`),bT(1136,`@fastify/multipart`),cf(),bT(1137,`, and the application fails to start if it is not registered)`),cf()(),Aa(1138,`p`),bT(1139,`Set the option to `),Aa(1140,`code`),bT(1141,`true`),cf(),bT(1142,` (or pass an options object) when an upload interceptor is instantiated outside the dependency injection system, for example `),Aa(1143,`code`),bT(1144,`new (FileInterceptor('file'))()`),cf(),bT(1145,` passed to `),Aa(1146,`code`),bT(1147,`app.useGlobalInterceptors()`),cf(),bT(1148,`, as it doesn't trigger the automatic registration. The same applies when upload interceptors are only used in `),Aa(1149,`a`,50),bT(1150,`lazy-loaded modules`),cf(),bT(1151,` that are loaded after the application has started, since plugins can no longer be registered at that point.`),cf(),Aa(1152,`p`),bT(1153,`If you prefer to register the plugin yourself, pass it to `),Aa(1154,`code`),bT(1155,`app.register()`),cf(),bT(1156,`, either before or after `),Aa(1157,`code`),bT(1158,`app.init()`),cf(),bT(1159,`. The adapter takes this registration over, so the plugin is registered only once, and your options take precedence over the ones passed through the `),Aa(1160,`code`),bT(1161,`multipart`),cf(),bT(1162,` option:`),cf(),Aa(1163,`app-copy-button`)(1164,`pre`)(1165,`code`,19),bT(1166,`
import multipart from '@fastify/multipart';

const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter(),
);
await app.register(multipart, { limits: { fileSize: 10 * 1024 * 1024 } });
`),cf()()(),Aa(1167,`blockquote`,11)(1168,`strong`),bT(1169,`Warning`),cf(),bT(1170,` Registering `),Aa(1171,`code`),bT(1172,`@fastify/multipart`),cf(),bT(1173,` directly on the Fastify instance (`),Aa(1174,`code`),bT(1175,`app.getHttpAdapter().getInstance().register(multipart)`),cf(),bT(1176,`), or passing a dynamic `),Aa(1177,`code`),bT(1178,`import()`),cf(),bT(1179,` of it to `),Aa(1180,`code`),bT(1181,`app.register()`),cf(),bT(1182,`, only works before `),Aa(1183,`code`),bT(1184,`app.init()`),cf(),bT(1185,` (which `),Aa(1186,`code`),bT(1187,`app.listen()`),cf(),bT(1188,` calls for you). After that, the adapter has already registered the plugin for your upload interceptors, and Fastify fails with an `),Aa(1189,`code`),bT(1190,`FST_ERR_DEC_ALREADY_PRESENT`),cf(),bT(1191,` error. Use `),Aa(1192,`code`),bT(1193,`app.register(multipart)`),cf(),bT(1194,` or the `),Aa(1195,`code`),bT(1196,`multipart`),cf(),bT(1197,` option instead, or set the option to `),Aa(1198,`code`),bT(1199,`false`),cf(),bT(1200,` to manage the plugin yourself.
`),cf(),Aa(1201,`h5`,51)(1202,`span`),bT(1203,`Streaming uploads`),cf()(),Aa(1204,`p`),bT(1205,`The interceptors described so far store every file (in memory or on disk) before the route handler runs. To process a file as it arrives instead, for example to pipe a large upload to its final destination, use `),Aa(1206,`code`),bT(1207,`FileStreamInterceptor()`),cf(),bT(1208,`, which is available on Fastify only. It takes the name of the field that holds the file and an optional options object (the same as for the other interceptors, except `),Aa(1209,`code`),bT(1210,`dest`),cf(),bT(1211,` and `),Aa(1212,`code`),bT(1213,`storage`),cf(),bT(1214,`), and hands the route handler a file with a `),Aa(1215,`code`),bT(1216,`stream`),cf(),bT(1217,` property in place of `),Aa(1218,`code`),bT(1219,`buffer`),cf(),bT(1220,`:`),cf(),Aa(1221,`app-copy-button`)(1222,`pre`)(1223,`code`,19),bT(1224,`
import { randomUUID } from 'node:crypto';
import { createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import {
  FileStreamInterceptor,
  MultipartFileStream,
} from '@nestjs/platform-fastify/multipart';

@Post('upload')
@UseInterceptors(
  FileStreamInterceptor('file', { limits: { fileSize: 1024 * 1024 * 1024 } }),
)
async uploadFile(@UploadedFile() file: MultipartFileStream, @Body() body) {
  const path = join('uploads', randomUUID());
  await pipeline(file.stream, createWriteStream(path));
  return { originalname: file.originalname, path, body };
}
`),cf()()(),Aa(1225,`p`),bT(1226,`Since the file is never buffered, a few rules apply:`),cf(),Aa(1227,`ul`)(1228,`li`),bT(1229,`Text fields must precede the file in the form. The ones sent before it are available in `),Aa(1230,`code`),bT(1231,`req.body`),cf(),bT(1232,` (`),Aa(1233,`code`),bT(1234,`@Body()`),cf(),bT(1235,`), while the parts that follow the file are not parsed.`),cf(),Aa(1236,`li`),bT(1237,`Only one file is accepted, in the given field. A file in any other field fails the request with a `),Aa(1238,`code`),bT(1239,`400 Unexpected file field`),cf(),bT(1240,` response.`),cf(),Aa(1241,`li`),bT(1242,`The file size is not known up front, so `),Aa(1243,`code`),bT(1244,`MaxFileSizeValidator`),cf(),bT(1245,` doesn't apply, and neither does the magic number check of `),Aa(1246,`code`),bT(1247,`FileTypeValidator`),cf(),bT(1248,` (set its `),Aa(1249,`code`),bT(1250,`skipMagicNumbersValidation`),cf(),bT(1251,` option to `),Aa(1252,`code`),bT(1253,`true`),cf(),bT(1254,` to compare the client-provided mime type only). The `),Aa(1255,`code`),bT(1256,`fileSize`),cf(),bT(1257,` limit is still enforced: once it is exceeded, the stream errors with a `),Aa(1258,`code`),bT(1259,`PayloadTooLargeException`),cf(),bT(1260,`.`),cf(),Aa(1261,`li`),bT(1262,`Whatever the route handler leaves unread is discarded before the response is sent, so that the client can finish uploading. When the handler returns a `),Aa(1263,`code`),bT(1264,`StreamableFile`),cf(),bT(1265,` (which may be the upload itself), the rest of the upload is discarded once the response has been sent instead. For this reason, a handler that responds with a `),Aa(1266,`code`),bT(1267,`StreamableFile`),cf(),bT(1268,` of something other than the upload should read the upload first - otherwise, a client that is still uploading over a connection that is not kept alive may fail with an `),Aa(1269,`code`),bT(1270,`EPIPE`),cf(),bT(1271,` or `),Aa(1272,`code`),bT(1273,`ECONNRESET`),cf(),bT(1274,` error.`),cf()(),Aa(1275,`h5`,52)(1276,`span`),bT(1277,`Differences from Multer`),cf()(),Aa(1278,`p`),bT(1279,`Besides the `),Aa(1280,`a`,53),bT(1281,`default limits`),cf(),bT(1282,`, the Fastify interceptors differ from Multer in the following ways:`),cf(),Aa(1283,`ul`)(1284,`li`),bT(1285,`A text field of exactly `),Aa(1286,`code`),bT(1287,`fieldSize`),cf(),bT(1288,` bytes is accepted, while Multer rejects it.`),cf(),Aa(1289,`li`),bT(1290,`Field names that could pollute a prototype (`),Aa(1291,`code`),bT(1292,`constructor`),cf(),bT(1293,`, or names with a `),Aa(1294,`code`),bT(1295,`__proto__`),cf(),bT(1296,`, `),Aa(1297,`code`),bT(1298,`constructor`),cf(),bT(1299,` or `),Aa(1300,`code`),bT(1301,`prototype`),cf(),bT(1302,` segment, such as `),Aa(1303,`code`),bT(1304,`user[constructor]`),cf(),bT(1305,`) fail the request with a `),Aa(1306,`code`),bT(1307,`400 Invalid field name`),cf(),bT(1308,` response. Multer accepts them.`),cf(),Aa(1309,`li`),bT(1310,`Text fields sent with a `),Aa(1311,`code`),bT(1312,`Content-Type: application/json`),cf(),bT(1313,` header arrive parsed, and invalid JSON fails the request with a `),Aa(1314,`code`),bT(1315,`400`),cf(),bT(1316,` response (a `),Aa(1317,`code`),bT(1318,`@fastify/multipart`),cf(),bT(1319,` feature). Malformed part header lines are ignored, whereas Multer fails the request with a `),Aa(1320,`code`),bT(1321,`400`),cf(),bT(1322,` response.`),cf(),Aa(1323,`li`)(1324,`code`),bT(1325,`fileFilter`),cf(),bT(1326,` functions and storage engines receive the Fastify request instead of the Express one.`),cf(),Aa(1327,`li`),bT(1328,`The `),Aa(1329,`code`),bT(1330,`attachFieldsToBody`),cf(),bT(1331,` plugin option is not supported, as it consumes the request body before the interceptors run.`),cf(),Aa(1332,`li`),bT(1333,`Multer's `),Aa(1334,`code`),bT(1335,`highWaterMark`),cf(),bT(1336,`, `),Aa(1337,`code`),bT(1338,`fileHwm`),cf(),bT(1339,`, `),Aa(1340,`code`),bT(1341,`defCharset`),cf(),bT(1342,` and `),Aa(1343,`code`),bT(1344,`streamHandler`),cf(),bT(1345,` options are not supported by the interceptors.`),cf()(),Aa(1346,`h4`,54)(1347,`span`),bT(1348,`Example`),cf()(),Aa(1349,`p`),bT(1350,`A working example of file uploads is available `),Aa(1351,`a`,55),bT(1352,`here`),cf(),bT(1353,`.`),cf(),Aa(1354,`h4`,56)(1355,`span`),bT(1356,`Streaming files`),cf()(),Aa(1357,`p`),bT(1358,`To send a file from a route handler, you could pipe a stream into the response object:`),cf(),Aa(1359,`app-copy-button`)(1360,`pre`)(1361,`code`,19),bT(1362,`
@Controller('file')
export class FileController {
  @Get()
  getFile(@Res() res: Response) {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    file.pipe(res);
  }
}
`),cf()()(),Aa(1363,`p`),bT(1364,`With this approach, the handler takes over the response, so post-controller `),Aa(1365,`a`,57),bT(1366,`interceptor`),cf(),bT(1367,` logic no longer runs. Instead, return a `),Aa(1368,`code`),bT(1369,`StreamableFile`),cf(),bT(1370,` instance, and Nest pipes it into the response for you. For content that isn't a file, such as the tokens of an LLM, see `),Aa(1371,`a`,58),bT(1372,`Streaming responses`),cf(),bT(1373,`.`),cf(),Aa(1374,`blockquote`,12)(1375,`strong`),bT(1376,`Note`),cf(),bT(1377,` Streaming files applies to `),Aa(1378,`strong`),bT(1379,`HTTP applications`),cf(),bT(1380,`. The examples below do not apply to GraphQL or microservice applications.
`),cf(),Aa(1381,`h5`,59)(1382,`span`),bT(1383,`Streamable file class`),cf()(),Aa(1384,`p`),bT(1385,`A `),Aa(1386,`code`),bT(1387,`StreamableFile`),cf(),bT(1388,` holds the content to be sent. Its constructor accepts either a `),Aa(1389,`code`),bT(1390,`Readable`),cf(),bT(1391,` stream or a `),Aa(1392,`code`),bT(1393,`Uint8Array`),cf(),bT(1394,` (including a `),Aa(1395,`code`),bT(1396,`Buffer`),cf(),bT(1397,`). The following example returns the `),Aa(1398,`code`),bT(1399,`package.json`),cf(),bT(1400,` file instead of a JSON response. The same approach works for images, documents, and any other file type:`),cf(),Aa(1401,`app-copy-button`)(1402,`pre`)(1403,`code`,19),bT(1404,`
import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';

@Controller('file')
export class FileController {
  @Get()
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    return new StreamableFile(file);
  }
}
`),cf()()(),Aa(1405,`blockquote`,12)(1406,`strong`),bT(1407,`Hint`),cf(),bT(1408,` The `),Aa(1409,`code`),bT(1410,`StreamableFile`),cf(),bT(1411,` class is exported from the `),Aa(1412,`code`),bT(1413,`@nestjs/common`),cf(),bT(1414,` package.
`),cf(),Aa(1415,`p`),bT(1416,`Neither the `),Aa(1417,`code`),bT(1418,`ClassSerializerInterceptor`),cf(),bT(1419,` nor the `),Aa(1420,`code`),bT(1421,`StandardSchemaSerializerInterceptor`),cf(),Aa(1422,`a`,60),bT(1423,`serializes`),cf(),Aa(1424,`code`),bT(1425,`StreamableFile`),cf(),bT(1426,` responses.`),cf(),Aa(1427,`h5`,61)(1428,`span`),bT(1429,`Response headers`),cf()(),Aa(1430,`p`),bT(1431,`By default, the `),Aa(1432,`code`),bT(1433,`Content-Type`),cf(),bT(1434,` response header is `),Aa(1435,`code`),bT(1436,`application/octet-stream`),cf(),bT(1437,`. To change it, and to set the `),Aa(1438,`code`),bT(1439,`Content-Disposition`),cf(),bT(1440,` and `),Aa(1441,`code`),bT(1442,`Content-Length`),cf(),bT(1443,` headers, pass the `),Aa(1444,`code`),bT(1445,`type`),cf(),bT(1446,`, `),Aa(1447,`code`),bT(1448,`disposition`),cf(),bT(1449,`, and `),Aa(1450,`code`),bT(1451,`length`),cf(),bT(1452,` options to the `),Aa(1453,`code`),bT(1454,`StreamableFile`),cf(),bT(1455,` constructor:`),cf(),Aa(1456,`app-copy-button`)(1457,`pre`)(1458,`code`,19),bT(1459,`
@Get()
getFile(): StreamableFile {
  const file = createReadStream(join(process.cwd(), 'package.json'));
  return new StreamableFile(file, {
    type: 'application/json',
    disposition: 'attachment; filename="package.json"',
  });
}
`),cf()()(),Aa(1460,`p`),bT(1461,`When the content is a `),Aa(1462,`code`),bT(1463,`Uint8Array`),cf(),bT(1464,`, `),Aa(1465,`code`),bT(1466,`length`),cf(),bT(1467,` defaults to its size. For streams, set `),Aa(1468,`code`),bT(1469,`length`),cf(),bT(1470,` yourself if you know the size in advance.`),cf(),Aa(1471,`p`),bT(1472,`Headers with static values can also be set with the `),Aa(1473,`a`,62)(1474,`code`),bT(1475,`@Header()`),cf()(),bT(1476,` decorator:`),cf(),Aa(1477,`app-copy-button`)(1478,`pre`)(1479,`code`,19),bT(1480,`
@Get()
@Header('Content-Type', 'application/json')
@Header('Content-Disposition', 'attachment; filename="package.json"')
getFile(): StreamableFile {
  const file = createReadStream(join(process.cwd(), 'package.json'));
  return new StreamableFile(file);
}
`),cf()()(),Aa(1481,`p`),bT(1482,`To compute headers at runtime, inject the response object with `),Aa(1483,`code`),bT(1484,`passthrough`),cf(),bT(1485,` enabled, so that Nest still sends the returned `),Aa(1486,`code`),bT(1487,`StreamableFile`),cf(),bT(1488,`:`),cf(),Aa(1489,`app-copy-button`)(1490,`pre`)(1491,`code`,19),bT(1492,`
import type { Response } from 'express';

@Get()
getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
  const file = createReadStream(join(process.cwd(), 'package.json'));
  res.set({
    'Content-Type': 'application/json',
    'Content-Disposition': 'attachment; filename="package.json"',
  });
  return new StreamableFile(file);
}
`),cf()()(),Aa(1493,`h5`,63)(1494,`span`),bT(1495,`Stream errors`),cf()(),Aa(1496,`p`),bT(1497,`With the Express adapter, if the stream emits an error before any data has been sent, the client receives a `),Aa(1498,`code`),bT(1499,`400 Bad Request`),cf(),bT(1500,` response, and the error is logged. Starting with NestJS v12.2, the response body no longer contains the error message, which may include the path of the file. If data has already been sent, the response is ended. To customize this behavior, pass a handler to the `),Aa(1501,`code`),bT(1502,`setErrorHandler()`),cf(),bT(1503,` method:`),cf(),Aa(1504,`app-copy-button`)(1505,`pre`)(1506,`code`,19),bT(1507,`
@Get()
getReport(): StreamableFile {
  const file = createReadStream(join(process.cwd(), 'report.pdf'));
  return new StreamableFile(file).setErrorHandler((err, res) => {
    if (res.headersSent) {
      res.end();
      return;
    }
    res.statusCode = 404;
    res.send('Report not found');
  });
}
`),cf()()(),Aa(1508,`p`),bT(1509,`The `),Aa(1510,`code`),bT(1511,`setErrorLogger()`),cf(),bT(1512,` method replaces the function that logs errors: those the default error handler answers, and those the response stream emits while the file is being written to it.`),cf(),Aa(1513,`blockquote`,12)(1514,`strong`),bT(1515,`Note`),cf(),bT(1516,` The error handler and the error logger apply to the Express and Node adapters. With the Fastify adapter, a stream error is handled by the `),Aa(1517,`a`,64),bT(1518,`exceptions layer`),cf(),bT(1519,`, so by default the client receives a `),Aa(1520,`code`),bT(1521,`500 Internal Server Error`),cf(),bT(1522,` response.
`),cf(),Aa(1523,`h5`,65)(1524,`span`),bT(1525,`Cross-platform support`),cf()(),Aa(1526,`p`),bT(1527,`Fastify can send streams without `),Aa(1528,`code`),bT(1529,`stream.pipe(res)`),cf(),bT(1530,`, so with Fastify the `),Aa(1531,`code`),bT(1532,`StreamableFile`),cf(),bT(1533,` class is not strictly required. However, Nest supports `),Aa(1534,`code`),bT(1535,`StreamableFile`),cf(),bT(1536,` on both platforms, so code that returns it works unchanged if you switch between Express and Fastify.`),cf()(),Aa(1537,`a`,66),Wa(1538,`i`,67),Aa(1539,`span`),bT(1540,`Edit on GitHub`),cf()()()),c&2){let y=tT(90),v=tT(316),g=tT(397),k=tT(429);zC(74),Ky(`import `,`{`,` Express `,`}`,` from 'express'`),zC(17),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(223),zy(`hide`,v.isJsActive),zC(3),zy(`hide`,!v.isJsActive),zC(78),zy(`hide`,g.isJsActive),zC(3),zy(`hide`,!g.isJsActive),zC(29),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive)}},dependencies:[Jc,Lt,ln,u],encapsulation:2})}return o})();var D=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-mvc`]],features:[xy],decls:314,vars:44,consts:[[`contentReference`,``],[`app0eb353fe6cd4906be395660d1b71b41e27ab1ad4`,``],[`app6102b74ec09dab36554e1cc3fd768d8f7c7df365`,``],[`app666b3d89fdadce0ad2a47734431d5cc35fd9db2e`,``],[`app7ad191403cbbc855edcfab4462a620a98b32d03f`,``],[`appbc3c01bf2c4ada16c1af29ea4c3d3ec88e1e9082`,``],[`app4868ca39f24d83ee35d8421b7bd92989896fb865`,``],[1,`content`],[1,`content-inner`],[`id`,`model-view-controller`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/express`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest-cli`],[1,`language-bash`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://expressjs.com/en/guide/using-template-engines.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/pillarjs/hbs#readme`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`href`,`/http/performance#node-adapter`],[`href`,`/http/mvc#dynamic-template-rendering`],[`appAnchor`,``,`id`,`template-rendering`],[1,`language-html`],[`appAnchor`,``,`id`,`adding-a-layout`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://expressjs.com/en/5x/api.html#app.locals`],[1,`file-tree`],[1,`item`],[1,`children`],[`appAnchor`,``,`id`,`dynamic-template-rendering`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://expressjs.com/en/api.html`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/15-mvc`],[`appAnchor`,``,`id`,`fastify`],[`routerLink`,`/http/performance`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/fastify/fastify`],[`appAnchor`,``,`id`,`example-1`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/17-mvc-fastify`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/mvc.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,7,0)(2,`div`,8)(3,`h3`,9),bT(4,`Model-View-Controller`),cf(),Aa(5,`p`),bT(6,`By default, Nest uses the `),Aa(7,`a`,10),bT(8,`Express`),cf(),bT(9,` library under the hood. As a result, every technique for using the MVC (Model-View-Controller) pattern in Express applies to Nest as well.`),cf(),Aa(10,`p`),bT(11,`First, scaffold a new Nest application using the `),Aa(12,`a`,11),bT(13,`CLI`),cf(),bT(14,` tool:`),cf(),Aa(15,`pre`)(16,`code`,12),bT(17,`
$ npm i -g @nestjs/cli
$ nest new project
`),cf()(),Aa(18,`p`),bT(19,`To create an MVC app, you also need a `),Aa(20,`a`,13),bT(21,`template engine`),cf(),bT(22,` to render HTML views:`),cf(),Aa(23,`pre`)(24,`code`,12),bT(25,`
$ npm install --save hbs
`),cf()(),Aa(26,`p`),bT(27,`This example uses the `),Aa(28,`code`),bT(29,`hbs`),cf(),bT(30,` (`),Aa(31,`a`,14),bT(32,`Handlebars`),cf(),bT(33,`) engine, but you can use whichever engine fits your requirements. Once the installation process is complete, configure the Express instance using the following code:`),cf(),Aa(34,`app-copy-button`,15)(35,`span`,16),bT(36),LT(37,`extension`),Wa(38,`app-tabs`,null,1),cf(),Aa(40,`pre`)(41,`code`,17),bT(42,`
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(import.meta.dirname, '..', 'public'));
  app.setBaseViewsDir(join(import.meta.dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()(),Aa(43,`pre`)(44,`code`,17),bT(45,`
import { NestFactory } from '@nestjs/core';
import { join } from 'node:path';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
  );

  app.useStaticAssets(join(import.meta.dirname, '..', 'public'));
  app.setBaseViewsDir(join(import.meta.dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(46,`p`),bT(47,`This tells Express that the `),Aa(48,`code`),bT(49,`public`),cf(),bT(50,` directory stores static assets, the `),Aa(51,`code`),bT(52,`views`),cf(),bT(53,` directory contains templates, and the `),Aa(54,`code`),bT(55,`hbs`),cf(),bT(56,` template engine renders HTML output.`),cf(),Aa(57,`blockquote`,18)(58,`strong`),bT(59,`Hint`),cf(),bT(60,` The same calls work with the `),Aa(61,`code`),bT(62,`NodeAdapter`),cf(),bT(63,`: create the application with `),Aa(64,`code`),bT(65,`new NodeAdapter()`),cf(),bT(66,` and the `),Aa(67,`code`),bT(68,`NestNodeApplication`),cf(),bT(69,` type instead (see `),Aa(70,`a`,19),bT(71,`Node adapter`),cf(),bT(72,`). The Node adapter supports the `),Aa(73,`code`),bT(74,`@Render()`),cf(),bT(75,` decorator, but not the `),Aa(76,`code`),bT(77,`res.render()`),cf(),bT(78,` method used in `),Aa(79,`a`,20),bT(80,`Dynamic template rendering`),cf(),bT(81,` below.
`),cf(),Aa(82,`h4`,21)(83,`span`),bT(84,`Template rendering`),cf()(),Aa(85,`p`),bT(86,`Now, create a `),Aa(87,`code`),bT(88,`views`),cf(),bT(89,` directory with an `),Aa(90,`code`),bT(91,`index.hbs`),cf(),bT(92,` template inside it. The template prints a `),Aa(93,`code`),bT(94,`message`),cf(),bT(95,` passed from the controller:`),cf(),Aa(96,`pre`)(97,`code`,22),bT(98),cf()(),Aa(99,`p`),bT(100,`Next, open the `),Aa(101,`code`),bT(102,`app.controller`),cf(),bT(103,` file and replace its contents with the following code:`),cf(),Aa(104,`app-copy-button`,15)(105,`span`,16),bT(106),LT(107,`extension`),Wa(108,`app-tabs`,null,2),cf(),Aa(110,`pre`)(111,`code`,17),bT(112,`
import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
`),cf()()(),Aa(113,`p`),bT(114,`This code specifies the template to use in the `),Aa(115,`code`),bT(116,`@Render()`),cf(),bT(117,` decorator, and the return value of the route handler method is passed to the template for rendering. The return value is an object with a `),Aa(118,`code`),bT(119,`message`),cf(),bT(120,` property, matching the `),Aa(121,`code`),bT(122,`message`),cf(),bT(123,` placeholder in the template.`),cf(),Aa(124,`p`),bT(125,`While the application is running, open your browser and navigate to `),Aa(126,`code`),bT(127,`http://localhost:3000`),cf(),bT(128,`. You should see the `),Aa(129,`code`),bT(130,`Hello world!`),cf(),bT(131,` message.`),cf(),Aa(132,`h4`,23)(133,`span`),bT(134,`Adding a layout`),cf()(),Aa(135,`p`),bT(136,`The `),Aa(137,`code`),bT(138,`hbs`),cf(),bT(139,` engine supports layouts: shared wrapper templates that individual views are rendered into. To use one, set the `),Aa(140,`code`),bT(141,`layout`),cf(),bT(142,` local variable with the `),Aa(143,`code`),bT(144,`setLocal()`),cf(),bT(145,` method (Nest's wrapper around Express's `),Aa(146,`a`,24),bT(147,`app.locals`),cf(),bT(148,`). Modify the previous code as follows:`),cf(),Aa(149,`app-copy-button`,15)(150,`span`,16),bT(151),LT(152,`extension`),Wa(153,`app-tabs`,null,3),cf(),Aa(155,`pre`)(156,`code`,17),bT(157,`
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.setLocal('layout', 'layouts/app');
  app.useStaticAssets(join(import.meta.dirname, '..', 'public'));
  app.setBaseViewsDir(join(import.meta.dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()(),Aa(158,`pre`)(159,`code`,17),bT(160,`
import { NestFactory } from '@nestjs/core';
import { join } from 'node:path';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
  );

  app.setLocal('layout', 'layouts/app');
  app.useStaticAssets(join(import.meta.dirname, '..', 'public'));
  app.setBaseViewsDir(join(import.meta.dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(161,`p`),bT(162,`Next, create a `),Aa(163,`code`),bT(164,`layouts`),cf(),bT(165,` folder inside `),Aa(166,`code`),bT(167,`views`),cf(),bT(168,` and add an `),Aa(169,`code`),bT(170,`app.hbs`),cf(),bT(171,` file with the following content:`),cf(),Aa(172,`pre`)(173,`code`,22),bT(174),cf()(),Aa(175,`p`),bT(176,`Then, update the `),Aa(177,`code`),bT(178,`index.hbs`),cf(),bT(179,` file to:`),cf(),Aa(180,`pre`)(181,`code`,22),bT(182),cf()(),Aa(183,`p`),bT(184,`The resulting file structure looks as follows:`),cf(),Aa(185,`div`,25)(186,`div`,26),bT(187,`views`),cf(),Aa(188,`div`,27)(189,`div`,26),bT(190,`layouts`),cf(),Aa(191,`div`,27)(192,`div`,26),bT(193,`app.hbs`),cf()(),Aa(194,`div`,26),bT(195,`index.hbs`),cf()()(),Aa(196,`h4`,28)(197,`span`),bT(198,`Dynamic template rendering`),cf()(),Aa(199,`p`),bT(200,`If the application logic must dynamically decide which template to render, use the `),Aa(201,`code`),bT(202,`@Res()`),cf(),bT(203,` decorator and supply the view name in the route handler, rather than in the `),Aa(204,`code`),bT(205,`@Render()`),cf(),bT(206,` decorator:`),cf(),Aa(207,`blockquote`,18)(208,`strong`),bT(209,`Hint`),cf(),bT(210,` When Nest detects the `),Aa(211,`code`),bT(212,`@Res()`),cf(),bT(213,` decorator, it injects the library-specific `),Aa(214,`code`),bT(215,`response`),cf(),bT(216,` object, which you can use to render the template dynamically. See the `),Aa(217,`a`,29),bT(218,`Express API reference`),cf(),bT(219,` to learn more about the `),Aa(220,`code`),bT(221,`response`),cf(),bT(222,` object.
`),cf(),Aa(223,`app-copy-button`,15)(224,`span`,16),bT(225),LT(226,`extension`),Wa(227,`app-tabs`,null,4),cf(),Aa(229,`pre`)(230,`code`,17),bT(231,`
import { Get, Controller, Res, Render } from '@nestjs/common';
import type { Response } from 'express';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render(
      this.appService.getViewName(),
      { message: 'Hello world!' },
    );
  }
}
`),cf()()(),Aa(232,`h4`,30)(233,`span`),bT(234,`Example`),cf()(),Aa(235,`p`),bT(236,`A working example is available in the `),Aa(237,`a`,31),bT(238,`15-mvc sample`),cf(),bT(239,`.`),cf(),Aa(240,`h4`,32)(241,`span`),bT(242,`Fastify`),cf()(),Aa(243,`p`),bT(244,`As mentioned in the `),Aa(245,`a`,33),bT(246,`HTTP adapters`),cf(),bT(247,` chapter, you can use any compatible HTTP provider with Nest. One such library is `),Aa(248,`a`,34),bT(249,`Fastify`),cf(),bT(250,`. To create an MVC application with Fastify, install the following packages:`),cf(),Aa(251,`pre`)(252,`code`,12),bT(253,`
$ npm i --save @fastify/static @fastify/view handlebars
`),cf()(),Aa(254,`p`),bT(255,`The next steps follow almost the same process as with Express, with minor platform-specific differences. Once the installation process is complete, open the `),Aa(256,`code`),bT(257,`main.ts`),cf(),bT(258,` file and update its contents:`),cf(),Aa(259,`app-copy-button`,15)(260,`span`,16),bT(261),LT(262,`extension`),Wa(263,`app-tabs`,null,5),cf(),Aa(265,`pre`)(266,`code`,17),bT(267,`
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';
import { join } from 'node:path';
import Handlebars from 'handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useStaticAssets({
    root: join(import.meta.dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: Handlebars,
    },
    templates: join(import.meta.dirname, '..', 'views'),
  });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()(),Aa(268,`pre`)(269,`code`,17),bT(270,`
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';
import { join } from 'node:path';
import Handlebars from 'handlebars';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  app.useStaticAssets({
    root: join(import.meta.dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: Handlebars,
    },
    templates: join(import.meta.dirname, '..', 'views'),
  });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(271,`p`),bT(272,`The Fastify API has a few differences, but the end result of these method calls is the same. One notable difference is that with Fastify, the template name you pass to the `),Aa(273,`code`),bT(274,`@Render()`),cf(),bT(275,` decorator must include the file extension:`),cf(),Aa(276,`app-copy-button`,15)(277,`span`,16),bT(278),LT(279,`extension`),Wa(280,`app-tabs`,null,6),cf(),Aa(282,`pre`)(283,`code`,17),bT(284,`
import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index.hbs')
  root() {
    return { message: 'Hello world!' };
  }
}
`),cf()()(),Aa(285,`p`),bT(286,`Alternatively, you can use the `),Aa(287,`code`),bT(288,`@Res()`),cf(),bT(289,` decorator to inject the response directly and specify the view you want to render, as shown below:`),cf(),Aa(290,`app-copy-button`)(291,`pre`)(292,`code`,17),bT(293,`
import { Get, Res } from '@nestjs/common';
import type { FastifyReply } from 'fastify';

@Get()
root(@Res() res: FastifyReply) {
  return res.view('index.hbs', { message: 'Hello world!' });
}
`),cf()()(),Aa(294,`p`),bT(295,`While the application is running, open your browser and navigate to `),Aa(296,`code`),bT(297,`http://localhost:3000`),cf(),bT(298,`. You should see the `),Aa(299,`code`),bT(300,`Hello world!`),cf(),bT(301,` message.`),cf(),Aa(302,`h4`,35)(303,`span`),bT(304,`Example`),cf()(),Aa(305,`p`),bT(306,`A working example is available in the `),Aa(307,`a`,36),bT(308,`17-mvc-fastify sample`),cf(),bT(309,`.`),cf()(),Aa(310,`a`,37),Wa(311,`i`,38),Aa(312,`span`),bT(313,`Edit on GitHub`),cf()()()),c&2){let y=tT(39),v=tT(109),g=tT(154),k=tT(228),T=tT(264),P=tT(281);zC(36),hf(` `,jT(37,26,`main`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(55),hf(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>App</title>
  </head>
  <body>
    `,`{{ message }}`,`
  </body>
</html>
`),zC(8),hf(` `,jT(107,29,`app.controller`,v.isJsActive),`
`),zC(45),hf(` `,jT(152,32,`main`,g.isJsActive),`
`),zC(4),zy(`hide`,g.isJsActive),zC(3),zy(`hide`,!g.isJsActive),zC(16),Jy(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>App</title>
  </head>
  <body>
    `,`{`,``,`{`,``,`{`,`body`,`}`,``,`}`,``,`}`,`
  </body>
</html>
`),zC(8),hf(`
`,`{{ message }}`,`
`),zC(43),hf(` `,jT(226,35,`app.controller`,k.isJsActive),`
`),zC(36),hf(` `,jT(262,38,`main`,T.isJsActive),`
`),zC(4),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive),zC(10),hf(` `,jT(279,41,`app.controller`,P.isJsActive),`
`)}},dependencies:[ln,u,Lt,Jc,g],encapsulation:2})}return o})();var z=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-performance`]],features:[xy],decls:935,vars:20,consts:[[`contentReference`,``],[`appe66ff97e8e96e7ac3cd72afe17ef75bf0dea344c`,``],[`app8c34d3509f5304927866665acf99b02239a511c8`,``],[`app31f52c567cbb2882670320635d1ed4d13039810b`,``],[`app9db1dd02fb1b1012c975c8d6b4932be48bc60acb`,``],[1,`content`],[1,`content-inner`],[`id`,`http-adapters`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://expressjs.com/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://fastify.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/http.html`],[1,`info`],[`appAnchor`,``,`id`,`choosing-an-adapter`],[`href`,`/http/performance#performance`],[`href`,`/http/performance#node-adapter`],[`href`,`/http/performance#route-constraints`],[`href`,`/http/performance#express-compatibility`],[`appAnchor`,``,`id`,`performance`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/pull/18063#reproducing-the-benchmark`],[`appAnchor`,``,`id`,`node-adapter`],[1,`language-bash`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/fastify/light-my-request`],[`appAnchor`,``,`id`,`express-compatibility`],[`routerLink`,`/http/compression`],[`routerLink`,`/http/session`],[`href`,`/http/performance#node-adapter-options`],[`href`,`/http/performance#body-parsers`],[`href`,`/http/mvc`],[`appAnchor`,``,`id`,`node-adapter-options`],[`href`,`/controllers#sub-domain-routing`],[1,`warning`],[`appAnchor`,``,`id`,`body-parsers`],[`routerLink`,`/faq/raw-body`],[`href`,`/faq/raw-body#body-parser-size-limit`],[`appAnchor`,``,`id`,`static-assets-and-views`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.npmjs.com/package/serve-static`],[`routerLink`,`/http/mvc`],[`appAnchor`,``,`id`,`other-packages`],[`routerLink`,`/http/file-upload`],[`appAnchor`,``,`id`,`fastify-adapter`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/fastify/fastify`],[`appAnchor`,``,`id`,`installation`],[`appAnchor`,``,`id`,`adapter`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://fastify.dev/docs/latest/Guides/Getting-Started/#your-first-server`],[`appAnchor`,``,`id`,`platform-specific-packages`],[`appAnchor`,``,`id`,`redirect-response`],[`appAnchor`,``,`id`,`fastify-options`],[`appAnchor`,``,`id`,`middleware`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://fastify.dev/docs/latest/Reference/Middleware/`],[`appAnchor`,``,`id`,`route-config`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://fastify.dev/docs/latest/Reference/Routes/#config`],[`appAnchor`,``,`id`,`route-constraints`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://fastify.dev/docs/latest/Reference/Routes/#constraints`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/10-fastify`],[`appAnchor`,``,`id`,`express-adapter`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/performance.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,5,0)(2,`div`,6)(3,`h3`,7),bT(4,`HTTP adapters`),cf(),Aa(5,`p`),bT(6,`Nest doesn't talk to an HTTP server directly. It goes through an `),Aa(7,`strong`),bT(8,`HTTP adapter`),cf(),bT(9,`, whose primary job is to proxy middleware and handlers to the appropriate library-specific implementations. This makes Nest framework independent: your controllers, providers, guards, pipes, and filters run unchanged on each of the adapters below, and you can migrate from one to another.`),cf(),Aa(10,`table`)(11,`thead`)(12,`tr`)(13,`th`),bT(14,`Adapter`),cf(),Aa(15,`th`),bT(16,`Package`),cf(),Aa(17,`th`),bT(18,`Built on`),cf()()(),Aa(19,`tbody`)(20,`tr`)(21,`td`)(22,`code`),bT(23,`ExpressAdapter`),cf()(),Aa(24,`td`)(25,`code`),bT(26,`@nestjs/platform-express`),cf()(),Aa(27,`td`)(28,`a`,8),bT(29,`Express`),cf(),bT(30,` (the default)`),cf()(),Aa(31,`tr`)(32,`td`)(33,`code`),bT(34,`FastifyAdapter`),cf()(),Aa(35,`td`)(36,`code`),bT(37,`@nestjs/platform-fastify`),cf()(),Aa(38,`td`)(39,`a`,9),bT(40,`Fastify`),cf()()(),Aa(41,`tr`)(42,`td`)(43,`code`),bT(44,`NodeAdapter`),cf()(),Aa(45,`td`)(46,`code`),bT(47,`@nestjs/platform-node`),cf()(),Aa(48,`td`),bT(49,`The `),Aa(50,`a`,10)(51,`code`),bT(52,`node:http`),cf()(),bT(53,` module of Node.js`),cf()()()(),Aa(54,`blockquote`,11)(55,`strong`),bT(56,`Hint`),cf(),bT(57,` A framework adapter can only be implemented for a library that provides request/response pipeline processing similar to Express.
`),cf(),Aa(58,`h4`,12)(59,`span`),bT(60,`Choosing an adapter`),cf()(),Aa(61,`p`),bT(62,`Starting with NestJS v12.3, we recommend the `),Aa(63,`code`),bT(64,`NodeAdapter`),cf(),bT(65,`. It is the fastest of the three (see `),Aa(66,`a`,13),bT(67,`Performance`),cf(),bT(68,`), and its request and response objects come with the Express-style helpers, so most Express middleware, and most code written for the Express adapter, work with it unchanged. Nest still uses Express when you don't pass an adapter, so you need to opt in, as shown in `),Aa(69,`a`,14),bT(70,`Node adapter`),cf(),bT(71,`. In NestJS v13, the `),Aa(72,`code`),bT(73,`NodeAdapter`),cf(),bT(74,` will become the default.`),cf(),Aa(75,`p`),bT(76,`Choose the `),Aa(77,`code`),bT(78,`FastifyAdapter`),cf(),bT(79,` to use Fastify plugins and features such as `),Aa(80,`a`,15),bT(81,`route constraints`),cf(),bT(82,`. Stay on the `),Aa(83,`code`),bT(84,`ExpressAdapter`),cf(),bT(85,` if your application relies on Express APIs that the Node adapter doesn't implement (see `),Aa(86,`a`,16),bT(87,`Express compatibility`),cf(),bT(88,`), or on a package that supports only Express.`),cf(),Aa(89,`h4`,17)(90,`span`),bT(91,`Performance`),cf()(),Aa(92,`p`),bT(93,`In our benchmarks (`),Aa(94,`code`),bT(95,`wrk`),cf(),bT(96,` with 100 connections on Node.js 24, against a plain `),Aa(97,`code`),bT(98,`GET`),cf(),bT(99,` route, a `),Aa(100,`code`),bT(101,`GET`),cf(),bT(102,` route with a parameter, and a `),Aa(103,`code`),bT(104,`POST`),cf(),bT(105,` route with a JSON body), Nest handled about 50% more requests per second on the `),Aa(106,`code`),bT(107,`NodeAdapter`),cf(),bT(108,` than on the `),Aa(109,`code`),bT(110,`ExpressAdapter`),cf(),bT(111,`, and about 5% more than on the `),Aa(112,`code`),bT(113,`FastifyAdapter`),cf(),bT(114,`. To run the same benchmark on your machine, follow the steps in `),Aa(115,`a`,18),bT(116,`nestjs/nest#18063`),cf(),bT(117,`.`),cf(),Aa(118,`p`),bT(119,`Keep in mind that the adapter handles only a small part of each request. A route that queries a database or calls other services spends most of its time waiting for them, so the choice of adapter matters most for lightweight routes at high request rates.`),cf(),Aa(120,`h4`,19)(121,`span`),bT(122,`Node adapter`),cf()(),Aa(123,`p`),bT(124,`The `),Aa(125,`code`),bT(126,`NodeAdapter`),cf(),bT(127,` runs Nest directly on the `),Aa(128,`code`),bT(129,`node:http`),cf(),bT(130,` module, with no other framework in between. First, install the required package:`),cf(),Aa(131,`pre`)(132,`code`,20),bT(133,`
$ npm i --save @nestjs/platform-node
`),cf()(),Aa(134,`p`),bT(135,`Then pass a `),Aa(136,`code`),bT(137,`NodeAdapter`),cf(),bT(138,` instance to `),Aa(139,`code`),bT(140,`NestFactory.create()`),cf(),bT(141,`:`),cf(),Aa(142,`app-copy-button`,21)(143,`span`,22),bT(144),LT(145,`extension`),Wa(146,`app-tabs`,null,1),cf(),Aa(148,`pre`)(149,`code`,23),bT(150,`
import { NestFactory } from '@nestjs/core';
import { NestNodeApplication, NodeAdapter } from '@nestjs/platform-node';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestNodeApplication>(
    AppModule,
    new NodeAdapter(),
  );
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(151,`p`),bT(152,`The `),Aa(153,`code`),bT(154,`NestNodeApplication`),cf(),bT(155,` type gives you the platform-specific methods of the application object: `),Aa(156,`code`),bT(157,`useBodyParser()`),cf(),bT(158,`, `),Aa(159,`code`),bT(160,`useStaticAssets()`),cf(),bT(161,`, `),Aa(162,`code`),bT(163,`setViewEngine()`),cf(),bT(164,`, `),Aa(165,`code`),bT(166,`setBaseViewsDir()`),cf(),bT(167,`, `),Aa(168,`code`),bT(169,`setLocal()`),cf(),bT(170,`, and `),Aa(171,`code`),bT(172,`inject()`),cf(),bT(173,`.`),cf(),Aa(174,`p`),bT(175,`Pass a `),Aa(176,`code`),bT(177,`NodeAdapter`),cf(),bT(178,` instance to `),Aa(179,`code`),bT(180,`createNestApplication()`),cf(),bT(181,` in your end-to-end tests as well. Without one, the testing module creates an Express application, so the tests don't run on the adapter your application uses, and they fail if the `),Aa(182,`code`),bT(183,`@nestjs/platform-express`),cf(),bT(184,` package is not installed:`),cf(),Aa(185,`app-copy-button`)(186,`pre`)(187,`code`,23),bT(188,`
app = moduleRef.createNestApplication<NestNodeApplication>(new NodeAdapter());
`),cf()()(),Aa(189,`p`),bT(190,`As with the Fastify adapter, `),Aa(191,`code`),bT(192,`app.inject()`),cf(),bT(193,` sends a fake request to the application with `),Aa(194,`a`,24),bT(195,`light-my-request`),cf(),bT(196,`, so a test doesn't need a listening server, only `),Aa(197,`code`),bT(198,`app.init()`),cf(),bT(199,`:`),cf(),Aa(200,`app-copy-button`)(201,`pre`)(202,`code`,23),bT(203,`
const result = await app.inject({ method: 'GET', url: '/cats' });
expect(result.statusCode).toEqual(200);
`),cf()()(),Aa(204,`h5`,25)(205,`span`),bT(206,`Express compatibility`),cf()(),Aa(207,`p`),bT(208,`Requests and responses are instances of `),Aa(209,`code`),bT(210,`NodeRequest`),cf(),bT(211,` and `),Aa(212,`code`),bT(213,`NodeResponse`),cf(),bT(214,` (exported from `),Aa(215,`code`),bT(216,`@nestjs/platform-node`),cf(),bT(217,`). They extend Node's `),Aa(218,`code`),bT(219,`IncomingMessage`),cf(),bT(220,` and `),Aa(221,`code`),bT(222,`ServerResponse`),cf(),bT(223,` with the Express-style properties and methods that middleware, exception filters, and `),Aa(224,`code`),bT(225,`@Res()`),cf(),bT(226,` handlers usually rely on, such as `),Aa(227,`code`),bT(228,`req.get()`),cf(),bT(229,`, `),Aa(230,`code`),bT(231,`req.is()`),cf(),bT(232,`, `),Aa(233,`code`),bT(234,`req.route`),cf(),bT(235,`, `),Aa(236,`code`),bT(237,`req.ip`),cf(),bT(238,`, `),Aa(239,`code`),bT(240,`req.ips`),cf(),bT(241,`, `),Aa(242,`code`),bT(243,`req.hostname`),cf(),bT(244,`, `),Aa(245,`code`),bT(246,`res.status()`),cf(),bT(247,`, `),Aa(248,`code`),bT(249,`res.send()`),cf(),bT(250,`, `),Aa(251,`code`),bT(252,`res.json()`),cf(),bT(253,`, `),Aa(254,`code`),bT(255,`res.set()`),cf(),bT(256,`, `),Aa(257,`code`),bT(258,`res.type()`),cf(),bT(259,`, `),Aa(260,`code`),bT(261,`res.cookie()`),cf(),bT(262,`, `),Aa(263,`code`),bT(264,`res.redirect()`),cf(),bT(265,`, `),Aa(266,`code`),bT(267,`res.sendFile()`),cf(),bT(268,`, and `),Aa(269,`code`),bT(270,`res.locals`),cf(),bT(271,`. Middleware runs in an Express-style stack and uses the same `),Aa(272,`code`),bT(273,`(req, res, next)`),cf(),bT(274,` signature.`),cf(),Aa(275,`p`),bT(276,`Popular Express middleware packages, such as `),Aa(277,`code`),bT(278,`helmet`),cf(),bT(279,`, `),Aa(280,`code`),bT(281,`compression`),cf(),bT(282,`, `),Aa(283,`code`),bT(284,`cookie-parser`),cf(),bT(285,`, `),Aa(286,`code`),bT(287,`express-session`),cf(),bT(288,`, `),Aa(289,`code`),bT(290,`express-rate-limit`),cf(),bT(291,`, `),Aa(292,`code`),bT(293,`csrf-csrf`),cf(),bT(294,`, `),Aa(295,`code`),bT(296,`morgan`),cf(),bT(297,`, and `),Aa(298,`code`),bT(299,`passport`),cf(),bT(300,` (along with the `),Aa(301,`code`),bT(302,`@nestjs/passport`),cf(),bT(303,` guards), work as they do with the Express adapter. When a chapter of this documentation shows separate instructions for Express and Fastify (for example, `),Aa(304,`a`,26),bT(305,`Compression`),cf(),bT(306,` or `),Aa(307,`a`,27),bT(308,`Session`),cf(),bT(309,`), follow the Express ones.`),cf(),Aa(310,`p`),bT(311,`The Node adapter deliberately differs from Express in a few places:`),cf(),Aa(312,`ul`)(313,`li`),bT(314,`Routes are matched by specificity, as with Fastify, rather than in the order they were registered.`),cf(),Aa(315,`li`),bT(316,`Paths are matched case-sensitively, for routes, middleware, and `),Aa(317,`code`),bT(318,`exclude()`),cf(),bT(319,` alike, as with Fastify.`),cf(),Aa(320,`li`),bT(321,`A string returned from a route handler is sent as `),Aa(322,`code`),bT(323,`text/plain`),cf(),bT(324,`, not `),Aa(325,`code`),bT(326,`text/html`),cf(),bT(327,`.`),cf(),Aa(328,`li`)(329,`code`),bT(330,`req.path`),cf(),bT(331,` is the decoded path that the router matched, so a middleware that checks it sees the same path as the routes.`),cf(),Aa(332,`li`),bT(333,`The adapter adds no `),Aa(334,`code`),bT(335,`ETag`),cf(),bT(336,` header, and a conditional request (`),Aa(337,`code`),bT(338,`If-None-Match`),cf(),bT(339,`, `),Aa(340,`code`),bT(341,`If-Modified-Since`),cf(),bT(342,`) gets the full response rather than a `),Aa(343,`code`),bT(344,`304 Not Modified`),cf(),bT(345,`, as with Fastify, even if the handler sets `),Aa(346,`code`),bT(347,`ETag`),cf(),bT(348,` or `),Aa(349,`code`),bT(350,`Last-Modified`),cf(),bT(351,` itself. `),Aa(352,`code`),bT(353,`res.sendFile()`),cf(),bT(354,` and `),Aa(355,`code`),bT(356,`useStaticAssets()`),cf(),bT(357,` still send an `),Aa(358,`code`),bT(359,`ETag`),cf(),bT(360,` and answer with `),Aa(361,`code`),bT(362,`304`),cf(),bT(363,`.`),cf(),Aa(364,`li`),bT(365,`A route parameter longer than 100 characters doesn't match (see `),Aa(366,`a`,28),bT(367,`Node adapter options`),cf(),bT(368,`).`),cf(),Aa(369,`li`),bT(370,`A JSON body with `),Aa(371,`code`),bT(372,`__proto__`),cf(),bT(373,` or `),Aa(374,`code`),bT(375,`constructor.prototype`),cf(),bT(376,` keys is rejected (see `),Aa(377,`a`,29),bT(378,`Body parsers`),cf(),bT(379,`).`),cf()(),Aa(380,`p`),bT(381,`Some Express APIs are not available: `),Aa(382,`code`),bT(383,`res.render()`),cf(),bT(384,` (use the `),Aa(385,`a`,30)(386,`code`),bT(387,`@Render()`),cf()(),bT(388,` decorator instead), `),Aa(389,`code`),bT(390,`res.download()`),cf(),bT(391,`, `),Aa(392,`code`),bT(393,`res.format()`),cf(),bT(394,`, `),Aa(395,`code`),bT(396,`res.attachment()`),cf(),bT(397,`, `),Aa(398,`code`),bT(399,`res.contentType()`),cf(),bT(400,` (use `),Aa(401,`code`),bT(402,`res.type()`),cf(),bT(403,` instead), `),Aa(404,`code`),bT(405,`res.jsonp()`),cf(),bT(406,`, `),Aa(407,`code`),bT(408,`res.links()`),cf(),bT(409,`, `),Aa(410,`code`),bT(411,`res.location()`),cf(),bT(412,` (use `),Aa(413,`code`),bT(414,`res.set('Location', url)`),cf(),bT(415,` instead), `),Aa(416,`code`),bT(417,`res.vary()`),cf(),bT(418,`, `),Aa(419,`code`),bT(420,`req.accepts()`),cf(),bT(421,` and its variants, `),Aa(422,`code`),bT(423,`req.fresh`),cf(),bT(424,` and `),Aa(425,`code`),bT(426,`req.stale`),cf(),bT(427,`, `),Aa(428,`code`),bT(429,`req.host`),cf(),bT(430,`, `),Aa(431,`code`),bT(432,`req.range()`),cf(),bT(433,`, `),Aa(434,`code`),bT(435,`req.subdomains`),cf(),bT(436,`, `),Aa(437,`code`),bT(438,`req.xhr`),cf(),bT(439,`, mounting an Express application with `),Aa(440,`code`),bT(441,`app.use()`),cf(),bT(442,`, and Express settings, for which the adapter takes `),Aa(443,`a`,28),bT(444,`options`),cf(),bT(445,` instead (`),Aa(446,`code`),bT(447,`trustProxy`),cf(),bT(448,` for the `),Aa(449,`code`),bT(450,`trust proxy`),cf(),bT(451,` setting, for example).`),cf(),Aa(452,`h5`,31)(453,`span`),bT(454,`Node adapter options`),cf()(),Aa(455,`p`),bT(456,`As with Fastify, route parameters are capped at 100 characters. A request whose parameter is longer falls through to another matching route, if there is one (a wildcard route, for example), and gets a `),Aa(457,`code`),bT(458,`414 URI Too Long`),cf(),bT(459,` response otherwise. To change the limit, pass the `),Aa(460,`code`),bT(461,`maxParamLength`),cf(),bT(462,` option to the `),Aa(463,`code`),bT(464,`NodeAdapter`),cf(),bT(465,` constructor:`),cf(),Aa(466,`app-copy-button`)(467,`pre`)(468,`code`,23),bT(469,`
new NodeAdapter({ maxParamLength: 500 });
`),cf()()(),Aa(470,`p`),bT(471,`Behind a reverse proxy or a load balancer, connections come from the proxy, so `),Aa(472,`code`),bT(473,`req.ip`),cf(),bT(474,` is the proxy's address, and `),Aa(475,`code`),bT(476,`req.protocol`),cf(),bT(477,` is `),Aa(478,`code`),bT(479,`'http'`),cf(),bT(480,` when the proxy terminates TLS. To read the client's address, protocol, and host from the `),Aa(481,`code`),bT(482,`X-Forwarded-For`),cf(),bT(483,`, `),Aa(484,`code`),bT(485,`X-Forwarded-Proto`),cf(),bT(486,`, and `),Aa(487,`code`),bT(488,`X-Forwarded-Host`),cf(),bT(489,` headers that a trusted proxy sets, pass the `),Aa(490,`code`),bT(491,`trustProxy`),cf(),bT(492,` option. As with Fastify, it takes `),Aa(493,`code`),bT(494,`true`),cf(),bT(495,` to trust every proxy, the addresses or subnets of your proxies (such as `),Aa(496,`code`),bT(497,`'loopback'`),cf(),bT(498,` or `),Aa(499,`code`),bT(500,`'10.0.0.0/8'`),cf(),bT(501,`, comma-separated or in an array), or a function that takes an address and its hop count and returns whether to trust it:`),cf(),Aa(502,`app-copy-button`)(503,`pre`)(504,`code`,23),bT(505,`
new NodeAdapter({ trustProxy: 'loopback' });
`),cf()()(),Aa(506,`p`)(507,`code`),bT(508,`req.ip`),cf(),bT(509,`, `),Aa(510,`code`),bT(511,`req.ips`),cf(),bT(512,`, `),Aa(513,`code`),bT(514,`req.protocol`),cf(),bT(515,`, `),Aa(516,`code`),bT(517,`req.secure`),cf(),bT(518,`, and `),Aa(519,`code`),bT(520,`req.hostname`),cf(),bT(521,` then work as they do with Express, and so does `),Aa(522,`a`,32),bT(523,`sub-domain routing`),cf(),bT(524,`. Unlike the Express setting, the option takes no hop count: as with Fastify, a number trusts no proxy, since it cannot tell a proxy from a client that sends its own `),Aa(525,`code`),bT(526,`X-Forwarded-For`),cf(),bT(527,` header.`),cf(),Aa(528,`blockquote`,33)(529,`strong`),bT(530,`Warning`),cf(),bT(531,` Trust only the proxies in front of your application. A client that can reach the application directly can send any `),Aa(532,`code`),bT(533,`X-Forwarded-*`),cf(),bT(534,` header.
`),cf(),Aa(535,`p`),bT(536,`By default, query strings are parsed into flat keys, as with Express and Fastify: `),Aa(537,`code`),bT(538,`?filter[where][name]=John`),cf(),bT(539,` gives a `),Aa(540,`code`),bT(541,`filter[where][name]`),cf(),bT(542,` key. To parse nested objects and arrays, pass the `),Aa(543,`code`),bT(544,`querystringParser`),cf(),bT(545,` option, as with Fastify. It is called with the query string, without the leading `),Aa(546,`code`),bT(547,`?`),cf(),bT(548,` (and with an empty string when the URL has none):`),cf(),Aa(549,`app-copy-button`)(550,`pre`)(551,`code`,23),bT(552,`
import qs from 'qs';

new NodeAdapter({ querystringParser: (str) => qs.parse(str) });
`),cf()()(),Aa(553,`h5`,34)(554,`span`),bT(555,`Body parsers`),cf()(),Aa(556,`p`),bT(557,`The Node adapter comes with its own `),Aa(558,`code`),bT(559,`json`),cf(),bT(560,`, `),Aa(561,`code`),bT(562,`urlencoded`),cf(),bT(563,`, `),Aa(564,`code`),bT(565,`text`),cf(),bT(566,`, and `),Aa(567,`code`),bT(568,`raw`),cf(),bT(569,` body parsers, so it doesn't depend on the `),Aa(570,`code`),bT(571,`body-parser`),cf(),bT(572,` package. They take the same options as their `),Aa(573,`code`),bT(574,`body-parser`),cf(),bT(575,` counterparts, such as `),Aa(576,`code`),bT(577,`limit`),cf(),bT(578,`, `),Aa(579,`code`),bT(580,`inflate`),cf(),bT(581,`, `),Aa(582,`code`),bT(583,`strict`),cf(),bT(584,`, and `),Aa(585,`code`),bT(586,`type`),cf(),bT(587,`. As with Express, Nest registers the `),Aa(588,`code`),bT(589,`json`),cf(),bT(590,` and `),Aa(591,`code`),bT(592,`urlencoded`),cf(),bT(593,` parsers by default, and the `),Aa(594,`code`),bT(595,`rawBody`),cf(),bT(596,` option and the `),Aa(597,`code`),bT(598,`useBodyParser()`),cf(),bT(599,` method work as described in `),Aa(600,`a`,35),bT(601,`Raw body`),cf(),bT(602,`.`),cf(),Aa(603,`p`),bT(604,`The default body size limit is `),Aa(605,`code`),bT(606,`100kb`),cf(),bT(607,`, as with Express, while the Fastify adapter inherits Fastify's default of 1 MiB. A larger body is rejected with a `),Aa(608,`code`),bT(609,`413 Payload Too Large`),cf(),bT(610,` response. To raise the limit, see `),Aa(611,`a`,36),bT(612,`Body parser size limit`),cf(),bT(613,`.`),cf(),Aa(614,`p`),bT(615,`Like Fastify, the `),Aa(616,`code`),bT(617,`json`),cf(),bT(618,` parser rejects a body that tries to inject prototype properties: a body with a `),Aa(619,`code`),bT(620,`__proto__`),cf(),bT(621,` or `),Aa(622,`code`),bT(623,`constructor.prototype`),cf(),bT(624,` key gets a `),Aa(625,`code`),bT(626,`400 Bad Request`),cf(),bT(627,` response. To drop these keys instead, or to keep them (the `),Aa(628,`code`),bT(629,`body-parser`),cf(),bT(630,` behavior), set the `),Aa(631,`code`),bT(632,`onProtoPoisoning`),cf(),bT(633,` and `),Aa(634,`code`),bT(635,`onConstructorPoisoning`),cf(),bT(636,` options to `),Aa(637,`code`),bT(638,`'remove'`),cf(),bT(639,` or `),Aa(640,`code`),bT(641,`'ignore'`),cf(),bT(642,`. The `),Aa(643,`code`),bT(644,`urlencoded`),cf(),bT(645,` parser takes the same options.`),cf(),Aa(646,`app-copy-button`)(647,`pre`)(648,`code`,23),bT(649,`
app.useBodyParser('json', { onProtoPoisoning: 'remove' });
`),cf()()(),Aa(650,`h5`,37)(651,`span`),bT(652,`Static assets and views`),cf()(),Aa(653,`p`)(654,`code`),bT(655,`useStaticAssets()`),cf(),bT(656,` serves a directory with the `),Aa(657,`a`,38),bT(658,`serve-static`),cf(),bT(659,` package. It takes the options of that package, plus a `),Aa(660,`code`),bT(661,`prefix`),cf(),bT(662,`, as with Express. `),Aa(663,`code`),bT(664,`setViewEngine()`),cf(),bT(665,` accepts either the name of an engine, as with Express (see `),Aa(666,`a`,39),bT(667,`Model-View-Controller`),cf(),bT(668,`), or the options object of `),Aa(669,`code`),bT(670,`@fastify/view`),cf(),bT(671,`, with the engine and the `),Aa(672,`code`),bT(673,`templates`),cf(),bT(674,` directory.`),cf(),Aa(675,`h5`,40)(676,`span`),bT(677,`Other packages`),cf()(),Aa(678,`ul`)(679,`li`)(680,`strong`),bT(681,`File upload:`),cf(),bT(682,` import `),Aa(683,`code`),bT(684,`FileInterceptor()`),cf(),bT(685,`, the other upload interceptors, and `),Aa(686,`code`),bT(687,`MulterModule`),cf(),bT(688,` from `),Aa(689,`code`),bT(690,`@nestjs/platform-node`),cf(),bT(691,` instead of `),Aa(692,`code`),bT(693,`@nestjs/platform-express`),cf(),bT(694,`. They are the same Multer-based interceptors, so the rest of the `),Aa(695,`a`,41),bT(696,`File upload`),cf(),bT(697,` chapter applies unchanged.`),cf(),Aa(698,`li`)(699,`strong`),bT(700,`Serving a single-page application:`),cf(),bT(701,` the `),Aa(702,`code`),bT(703,`@nestjs/serve-static`),cf(),bT(704,` package (v12.1.1 or later) serves the files through the adapter, so it doesn't need the `),Aa(705,`code`),bT(706,`express`),cf(),bT(707,` package. Its fallback route for client-side paths requires `),Aa(708,`code`),bT(709,`@nestjs/platform-node`),cf(),bT(710,` v12.3.1 or later.`),cf(),Aa(711,`li`)(712,`strong`),bT(713,`GraphQL:`),cf(),bT(714,` use the `),Aa(715,`code`),bT(716,`@nestjs/apollo`),cf(),bT(717,` driver (v14.1.1 or later), as with Express. The `),Aa(718,`code`),bT(719,`@nestjs/mercurius`),cf(),bT(720,` driver requires the Fastify adapter.`),cf()(),Aa(721,`h4`,42)(722,`span`),bT(723,`Fastify adapter`),cf()(),Aa(724,`p`)(725,`a`,43),bT(726,`Fastify`),cf(),bT(727,` is a good alternative framework for Nest because it solves design issues in a similar way to Express. It comes with its own ecosystem of plugins. To use Fastify, choose the built-in `),Aa(728,`code`),bT(729,`FastifyAdapter`),cf(),bT(730,`, as shown below.`),cf(),Aa(731,`h5`,44)(732,`span`),bT(733,`Installation`),cf()(),Aa(734,`p`),bT(735,`First, install the required package:`),cf(),Aa(736,`pre`)(737,`code`,20),bT(738,`
$ npm i --save @nestjs/platform-fastify
`),cf()(),Aa(739,`h5`,45)(740,`span`),bT(741,`Adapter`),cf()(),Aa(742,`p`),bT(743,`Once the Fastify platform is installed, you can use the `),Aa(744,`code`),bT(745,`FastifyAdapter`),cf(),bT(746,`.`),cf(),Aa(747,`app-copy-button`,21)(748,`span`,22),bT(749),LT(750,`extension`),Wa(751,`app-tabs`,null,2),cf(),Aa(753,`pre`)(754,`code`,23),bT(755,`
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(756,`p`),bT(757,`By default, Fastify listens only on the `),Aa(758,`code`),bT(759,`localhost`),cf(),bT(760,` interface (see the `),Aa(761,`a`,46),bT(762,`Fastify getting started guide`),cf(),bT(763,`). To accept connections on other hosts, specify `),Aa(764,`code`),bT(765,`'0.0.0.0'`),cf(),bT(766,` in the `),Aa(767,`code`),bT(768,`listen()`),cf(),bT(769,` call:`),cf(),Aa(770,`app-copy-button`)(771,`pre`)(772,`code`,23),bT(773,`
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(3000, '0.0.0.0');
}
`),cf()()(),Aa(774,`h5`,47)(775,`span`),bT(776,`Platform specific packages`),cf()(),Aa(777,`p`),bT(778,`When you use the `),Aa(779,`code`),bT(780,`FastifyAdapter`),cf(),bT(781,`, Nest uses Fastify as the `),Aa(782,`strong`),bT(783,`HTTP provider`),cf(),bT(784,`. This means that recipes that rely on Express may not work. Use Fastify-equivalent packages instead.`),cf(),Aa(785,`h5`,48)(786,`span`),bT(787,`Redirect response`),cf()(),Aa(788,`p`),bT(789,`Fastify handles redirect responses slightly differently than Express. To redirect with Fastify, set the status code with `),Aa(790,`code`),bT(791,`status()`),cf(),bT(792,`, then call `),Aa(793,`code`),bT(794,`redirect()`),cf(),bT(795,` with the URL:`),cf(),Aa(796,`app-copy-button`)(797,`pre`)(798,`code`,23),bT(799,`
@Get()
index(@Res() res) {
  res.status(302).redirect('/login');
}
`),cf()()(),Aa(800,`h5`,49)(801,`span`),bT(802,`Fastify options`),cf()(),Aa(803,`p`),bT(804,`You can pass options to the Fastify instance through the `),Aa(805,`code`),bT(806,`FastifyAdapter`),cf(),bT(807,` constructor. For example:`),cf(),Aa(808,`app-copy-button`)(809,`pre`)(810,`code`,23),bT(811,`
new FastifyAdapter({ logger: true });
`),cf()()(),Aa(812,`h5`,50)(813,`span`),bT(814,`Middleware`),cf()(),Aa(815,`p`),bT(816,`Middleware functions receive the raw `),Aa(817,`code`),bT(818,`req`),cf(),bT(819,` and `),Aa(820,`code`),bT(821,`res`),cf(),bT(822,` objects instead of Fastify's wrappers. This is how the `),Aa(823,`code`),bT(824,`@fastify/middie`),cf(),bT(825,` package, which Nest uses under the hood, works. See the `),Aa(826,`a`,51),bT(827,`Fastify middleware documentation`),cf(),bT(828,` for more information.`),cf(),Aa(829,`app-copy-button`,21)(830,`span`,22),bT(831),LT(832,`extension`),Wa(833,`app-tabs`,null,3),cf(),Aa(835,`pre`)(836,`code`,23),bT(837,`
import { Injectable, NestMiddleware } from '@nestjs/common';
import type { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest['raw'], res: FastifyReply['raw'], next: () => void) {
    console.log('Request...');
    next();
  }
}
`),cf()(),Aa(838,`pre`)(839,`code`,23),bT(840,`
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware {
  use(req, res, next) {
    console.log('Request...');
    next();
  }
}
`),cf()()(),Aa(841,`h5`,52)(842,`span`),bT(843,`Route Config`),cf()(),Aa(844,`p`),bT(845,`Use the `),Aa(846,`code`),bT(847,`@RouteConfig()`),cf(),bT(848,` decorator to apply Fastify's `),Aa(849,`a`,53),bT(850,`route config`),cf(),bT(851,` feature.`),cf(),Aa(852,`app-copy-button`)(853,`pre`)(854,`code`,23),bT(855,`
@RouteConfig({ output: 'hello world' })
@Get()
index(@Req() req) {
  return req.routeConfig.output;
}
`),cf()()(),Aa(856,`h5`,54)(857,`span`),bT(858,`Route Constraints`),cf()(),Aa(859,`p`),bT(860,`Use the `),Aa(861,`code`),bT(862,`@RouteConstraints()`),cf(),bT(863,` decorator to apply Fastify's `),Aa(864,`a`,55),bT(865,`route constraints`),cf(),bT(866,` feature.`),cf(),Aa(867,`app-copy-button`)(868,`pre`)(869,`code`,23),bT(870,`
@RouteConstraints({ version: '1.2.x' })
newFeature() {
  return 'This works only for version >= 1.2.x';
}
`),cf()()(),Aa(871,`blockquote`,11)(872,`strong`),bT(873,`Hint`),cf(),Aa(874,`code`),bT(875,`@RouteConfig()`),cf(),bT(876,` and `),Aa(877,`code`),bT(878,`@RouteConstraints()`),cf(),bT(879,` are imported from `),Aa(880,`code`),bT(881,`@nestjs/platform-fastify`),cf(),bT(882,`.
`),cf(),Aa(883,`h5`,56)(884,`span`),bT(885,`Example`),cf()(),Aa(886,`p`),bT(887,`A working example is available in the `),Aa(888,`a`,57),bT(889,`nestjs/nest repository`),cf(),bT(890,`.`),cf(),Aa(891,`h4`,58)(892,`span`),bT(893,`Express adapter`),cf()(),Aa(894,`p`)(895,`a`,8),bT(896,`Express`),cf(),bT(897,` is widely used, well known, and has an enormous set of compatible middleware. Nest uses the `),Aa(898,`code`),bT(899,`ExpressAdapter`),cf(),bT(900,` from the `),Aa(901,`code`),bT(902,`@nestjs/platform-express`),cf(),bT(903,` package when you don't pass an adapter to `),Aa(904,`code`),bT(905,`NestFactory.create()`),cf(),bT(906,`, so no setup is required. To access the Express-specific methods of the application object, pass the `),Aa(907,`code`),bT(908,`NestExpressApplication`),cf(),bT(909,` type:`),cf(),Aa(910,`app-copy-button`)(911,`pre`)(912,`code`,23),bT(913,`
const app = await NestFactory.create<NestExpressApplication>(AppModule);
`),cf()()(),Aa(914,`p`),bT(915,`To keep your application on Express once the `),Aa(916,`code`),bT(917,`NodeAdapter`),cf(),bT(918,` becomes the default, pass an `),Aa(919,`code`),bT(920,`ExpressAdapter`),cf(),bT(921,` instance explicitly:`),cf(),Aa(922,`app-copy-button`,21)(923,`span`,22),bT(924),LT(925,`extension`),Wa(926,`app-tabs`,null,4),cf(),Aa(928,`pre`)(929,`code`,23),bT(930,`
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()()(),Aa(931,`a`,59),Wa(932,`i`,60),Aa(933,`span`),bT(934,`Edit on GitHub`),cf()()()),c&2){let y=tT(147),v=tT(752),g=tT(834),k=tT(927);zC(144),hf(` `,jT(145,8,`main`,y.isJsActive),`
`),zC(605),hf(` `,jT(750,11,`main`,v.isJsActive),`
`),zC(82),hf(` `,jT(832,14,`logger.middleware`,g.isJsActive),`
`),zC(4),zy(`hide`,g.isJsActive),zC(3),zy(`hide`,!g.isJsActive),zC(86),hf(` `,jT(925,17,`main`,k.isJsActive),`
`)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return o})();var H=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-sse`]],features:[xy],decls:395,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`server-sent-events`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events`],[`appAnchor`,``,`id`,`usage`],[1,`language-typescript`],[1,`info`],[1,`warning`],[`href`,`/http/server-sent-events#client-disconnection`],[`routerLink`,`/http/streaming-responses`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://developer.mozilla.org/en-US/docs/Web/API/EventSource`],[1,`language-javascript`],[`appAnchor`,``,`id`,`status-code-and-headers`],[`appAnchor`,``,`id`,`client-disconnection`],[`appAnchor`,``,`id`,`signal-lifetime`],[`appAnchor`,``,`id`,`slow-clients`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/28-sse`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/server-sent-events.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Server-Sent Events`),cf(),Aa(5,`p`),bT(6,`Server-Sent Events (SSE) is a server push technology that enables a client to receive automatic updates from a server over an HTTP connection. Each notification is sent as a block of text terminated by a pair of newlines (see `),Aa(7,`a`,4),bT(8,`Server-sent events on MDN`),cf(),bT(9,` to learn more).`),cf(),Aa(10,`h4`,5)(11,`span`),bT(12,`Usage`),cf()(),Aa(13,`p`),bT(14,`To enable Server-Sent Events on a route (a route registered within a `),Aa(15,`strong`),bT(16,`controller class`),cf(),bT(17,`), annotate the route handler with the `),Aa(18,`code`),bT(19,`@Sse()`),cf(),bT(20,` decorator.`),cf(),Aa(21,`app-copy-button`)(22,`pre`)(23,`code`,6),bT(24,`
@Sse('sse')
sse(): Observable<MessageEvent> {
  return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
}
`),cf()()(),Aa(25,`blockquote`,7)(26,`strong`),bT(27,`Hint`),cf(),bT(28,` The `),Aa(29,`code`),bT(30,`@Sse()`),cf(),bT(31,` decorator and the `),Aa(32,`code`),bT(33,`MessageEvent`),cf(),bT(34,` interface are imported from the `),Aa(35,`code`),bT(36,`@nestjs/common`),cf(),bT(37,` package, while `),Aa(38,`code`),bT(39,`Observable`),cf(),bT(40,`, `),Aa(41,`code`),bT(42,`interval`),cf(),bT(43,`, and `),Aa(44,`code`),bT(45,`map`),cf(),bT(46,` are imported from the `),Aa(47,`code`),bT(48,`rxjs`),cf(),bT(49,` package.
`),cf(),Aa(50,`blockquote`,8)(51,`strong`),bT(52,`Warning`),cf(),bT(53,` Server-Sent Events routes must return an `),Aa(54,`code`),bT(55,`Observable`),cf(),bT(56,` stream (or a `),Aa(57,`code`),bT(58,`Promise`),cf(),bT(59,` that resolves to one, as shown `),Aa(60,`a`,9),bT(61,`below`),cf(),bT(62,`). To stream from an async generator, a `),Aa(63,`code`),bT(64,`ReadableStream`),cf(),bT(65,`, or a web `),Aa(66,`code`),bT(67,`Response`),cf(),bT(68,` instead, return it from a regular route: see `),Aa(69,`a`,10),bT(70,`Streaming responses`),cf(),bT(71,`.
`),cf(),Aa(72,`p`),bT(73,`In the example above, we defined a route named `),Aa(74,`code`),bT(75,`sse`),cf(),bT(76,` that propagates real-time updates. Clients can listen to these events using the `),Aa(77,`a`,11),bT(78,`EventSource API`),cf(),bT(79,`.`),cf(),Aa(80,`p`),bT(81,`The `),Aa(82,`code`),bT(83,`sse()`),cf(),bT(84,` method returns an `),Aa(85,`code`),bT(86,`Observable`),cf(),bT(87,` that emits multiple `),Aa(88,`code`),bT(89,`MessageEvent`),cf(),bT(90,` objects (in this example, a new `),Aa(91,`code`),bT(92,`MessageEvent`),cf(),bT(93,` every second). Each `),Aa(94,`code`),bT(95,`MessageEvent`),cf(),bT(96,` object should respect the following interface to match the specification:`),cf(),Aa(97,`app-copy-button`)(98,`pre`)(99,`code`,6),bT(100,`
export interface MessageEvent {
  data?: string | object;
  id?: string;
  type?: string;
  retry?: number;
  comment?: string;
}
`),cf()()(),Aa(101,`p`),bT(102,`Object `),Aa(103,`code`),bT(104,`data`),cf(),bT(105,` is serialized to JSON. The `),Aa(106,`code`),bT(107,`type`),cf(),bT(108,` property is sent as the SSE `),Aa(109,`code`),bT(110,`event`),cf(),bT(111,` field, and `),Aa(112,`code`),bT(113,`comment`),cf(),bT(114,` is sent as a comment line, which `),Aa(115,`code`),bT(116,`EventSource`),cf(),bT(117,` clients ignore (useful, for example, as a keep-alive). If you don't set `),Aa(118,`code`),bT(119,`id`),cf(),bT(120,`, Nest assigns an incrementing ID to each event.`),cf(),Aa(121,`p`),bT(122,`With this in place, you can create an instance of the `),Aa(123,`code`),bT(124,`EventSource`),cf(),bT(125,` class in your client-side application, passing the `),Aa(126,`code`),bT(127,`/sse`),cf(),bT(128,` route (which matches the path passed to the `),Aa(129,`code`),bT(130,`@Sse()`),cf(),bT(131,` decorator above) as a constructor argument.`),cf(),Aa(132,`p`),bT(133,`An `),Aa(134,`code`),bT(135,`EventSource`),cf(),bT(136,` instance opens a persistent connection to an HTTP server, which sends events in `),Aa(137,`code`),bT(138,`text/event-stream`),cf(),bT(139,` format. The connection remains open until it's closed by calling `),Aa(140,`code`),bT(141,`EventSource.close()`),cf(),bT(142,`.`),cf(),Aa(143,`p`),bT(144,`Once the connection is open, incoming messages from the server are delivered to your code in the form of events. If the incoming message has an `),Aa(145,`code`),bT(146,`event`),cf(),bT(147,` field, the triggered event has the same name as the field value. If no `),Aa(148,`code`),bT(149,`event`),cf(),bT(150,` field is present, a generic `),Aa(151,`code`),bT(152,`message`),cf(),bT(153,` event is fired (see the `),Aa(154,`a`,11),bT(155,`EventSource documentation on MDN`),cf(),bT(156,`).`),cf(),Aa(157,`pre`)(158,`code`,12),bT(159,`
const eventSource = new EventSource('/sse');
eventSource.onmessage = ({ data }) => {
  console.log('New message', JSON.parse(data));
};
`),cf()(),Aa(160,`h4`,13)(161,`span`),bT(162,`Status code and headers`),cf()(),Aa(163,`p`),bT(164,`An `),Aa(165,`code`),bT(166,`@Sse()`),cf(),bT(167,` route sends the headers set with the `),Aa(168,`code`),bT(169,`@Header()`),cf(),bT(170,` decorator. Starting with NestJS v12.1.3, it also sends the status code that its handler or an interceptor sets on the response before the stream starts, and, on Fastify, the headers they set (Express already sent those). To set them in the handler, inject the response with the `),Aa(171,`code`),bT(172,`@Res()`),cf(),bT(173,` decorator and its `),Aa(174,`code`),bT(175,`passthrough`),cf(),bT(176,` option enabled:`),cf(),Aa(177,`app-copy-button`)(178,`pre`)(179,`code`,6),bT(180,`
@Sse('sse')
sse(@Res({ passthrough: true }) res: Response): Observable<MessageEvent> {
  res.status(202);
  res.header('x-version', '1.0.0');
  return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
}
`),cf()()(),Aa(181,`blockquote`,7)(182,`strong`),bT(183,`Hint`),cf(),Aa(184,`code`),bT(185,`Res`),cf(),bT(186,` is imported from the `),Aa(187,`code`),bT(188,`@nestjs/common`),cf(),bT(189,` package, and the `),Aa(190,`code`),bT(191,`Response`),cf(),bT(192,` type from the `),Aa(193,`code`),bT(194,`express`),cf(),bT(195,` package. On Fastify, use the `),Aa(196,`code`),bT(197,`FastifyReply`),cf(),bT(198,` type from the `),Aa(199,`code`),bT(200,`fastify`),cf(),bT(201,` package.
`),cf(),Aa(202,`h4`,14)(203,`span`),bT(204,`Client disconnection`),cf()(),Aa(205,`p`),bT(206,`When a client closes the SSE connection (e.g., with `),Aa(207,`code`),bT(208,`eventSource.close()`),cf(),bT(209,`), Nest automatically unsubscribes from the returned `),Aa(210,`code`),bT(211,`Observable`),cf(),bT(212,`. This stops the event stream and cleans up any associated resources, including the interval timer in the example above.`),cf(),Aa(213,`p`),bT(214,`To run custom teardown logic when a client disconnects, use the `),Aa(215,`code`),bT(216,`finalize`),cf(),bT(217,` operator:`),cf(),Aa(218,`app-copy-button`)(219,`pre`)(220,`code`,6),bT(221,`
@Sse('sse')
sse(): Observable<MessageEvent> {
  return interval(1000).pipe(
    map((_) => ({ data: { hello: 'world' } })),
    finalize(() => console.log('Client disconnected')),
  );
}
`),cf()()(),Aa(222,`blockquote`,7)(223,`strong`),bT(224,`Hint`),cf(),bT(225,` The `),Aa(226,`code`),bT(227,`finalize`),cf(),bT(228,` operator (imported from `),Aa(229,`code`),bT(230,`rxjs`),cf(),bT(231,`) executes its callback whenever the `),Aa(232,`code`),bT(233,`Observable`),cf(),bT(234,` terminates: by completion, error, or unsubscription (which includes client disconnection). This makes it the right place to release external resources, such as database cursors or file handles, tied to the stream.
`),cf(),Aa(235,`p`),bT(236,`An `),Aa(237,`code`),bT(238,`@Sse()`),cf(),bT(239,` handler can be asynchronous, returning a `),Aa(240,`code`),bT(241,`Promise<Observable>`),cf(),bT(242,` rather than an `),Aa(243,`code`),bT(244,`Observable`),cf(),bT(245,` directly. This is common when the stream needs expensive setup before the first event can be produced, such as opening a database cursor, acquiring a model session, or authorizing against a downstream service.`),cf(),Aa(246,`app-copy-button`)(247,`pre`)(248,`code`,6),bT(249,`
@Sse('stream')
async stream(): Promise<Observable<MessageEvent>> {
  const session = await createSession();

  return new Observable(subscriber => {
    // ...produce events from \`session\`
  });
}
`),cf()()(),Aa(250,`p`),bT(251,`This leaves a gap. If the client disconnects `),Aa(252,`strong`),bT(253,`while the promise is still resolving`),cf(),bT(254,`, Nest never subscribes to the returned `),Aa(255,`code`),bT(256,`Observable`),cf(),bT(257,`, because it doesn't start a producer whose consumer has already gone away. That's the right behavior for the stream, but it means the `),Aa(258,`code`),bT(259,`Observable`),cf(),bT(260,`'s teardown logic never runs, and anything allocated during setup (the `),Aa(261,`code`),bT(262,`session`),cf(),bT(263,` above) leaks.`),cf(),Aa(264,`p`),bT(265,`To close that gap, inject the request's `),Aa(266,`code`),bT(267,`AbortSignal`),cf(),bT(268,` with the `),Aa(269,`code`),bT(270,`@SseSignal()`),cf(),bT(271,` decorator:`),cf(),Aa(272,`app-copy-button`)(273,`pre`)(274,`code`,6),bT(275,`
import { MessageEvent, Sse, SseSignal } from '@nestjs/common';
import { EMPTY, Observable } from 'rxjs';

@Sse('stream')
async stream(@SseSignal() signal: AbortSignal): Promise<Observable<MessageEvent>> {
  const session = await createSession();

  if (signal.aborted) {
    // The client disconnected during setup. The Observable below will never be
    // subscribed, so release the resource here.
    await session.close();
    return EMPTY;
  }

  return new Observable(subscriber => {
    const stream = session.start();
    stream.on('data', data => subscriber.next({ data }));

    return () => {
      stream.stop();
      session.close();
    };
  });
}
`),cf()()(),Aa(276,`h4`,15)(277,`span`),bT(278,`Signal lifetime`),cf()(),Aa(279,`p`),bT(280,`The signal represents the lifetime of the `),Aa(281,`strong`),bT(282,`SSE response`),cf(),bT(283,`, not only the connection. It's aborted once the stream terminates for any reason:`),cf(),Aa(284,`ul`)(285,`li`),bT(286,`the client disconnected;`),cf(),Aa(287,`li`),bT(288,`the `),Aa(289,`code`),bT(290,`Observable`),cf(),bT(291,` completed;`),cf(),Aa(292,`li`),bT(293,`the `),Aa(294,`code`),bT(295,`Observable`),cf(),bT(296,` errored.`),cf()(),Aa(297,`p`),bT(298,`This makes the signal a single cleanup hook for the whole request. Instead of duplicating teardown across an `),Aa(299,`code`),bT(300,`abort`),cf(),bT(301,` listener and the `),Aa(302,`code`),bT(303,`Observable`),cf(),bT(304,`'s own teardown function, you can wire resources to the signal once and have them released on every exit path:`),cf(),Aa(305,`app-copy-button`)(306,`pre`)(307,`code`,6),bT(308,`
@Sse('stream')
async stream(@SseSignal() signal: AbortSignal): Promise<Observable<MessageEvent>> {
  // The signal aborts when the response ends, so the fetch is canceled whether
  // the client disconnected or the stream simply finished.
  const upstream = await fetch(UPSTREAM_URL, { signal });

  return new Observable(subscriber => {
    // ...
  });
}
`),cf()()(),Aa(309,`p`),bT(310,`Because the signal also aborts on normal completion, `),Aa(311,`code`),bT(312,`signal.aborted`),cf(),bT(313,` is only meaningful as a "did the client go away?" check `),Aa(314,`strong`),bT(315,`during setup`),cf(),bT(316,`, before the `),Aa(317,`code`),bT(318,`Observable`),cf(),bT(319,` is returned. At that point, the stream can't have completed yet, so an aborted signal unambiguously means the client disconnected.`),cf(),Aa(320,`blockquote`,8)(321,`strong`),bT(322,`Notice`),cf(),bT(323,` Cleanup wired to the `),Aa(324,`code`),bT(325,`abort`),cf(),bT(326,` event may run alongside the `),Aa(327,`code`),bT(328,`Observable`),cf(),bT(329,`'s teardown function, so make it idempotent.
`),cf(),Aa(330,`p`),bT(331,`Inside a producer, you can also use the signal to end the stream when the client leaves:`),cf(),Aa(332,`app-copy-button`)(333,`pre`)(334,`code`,6),bT(335,`
return new Observable<MessageEvent>(subscriber => {
  const timer = setInterval(() => subscriber.next({ data: 'tick' }), 1000);
  const onAbort = () => subscriber.complete();

  signal.addEventListener('abort', onAbort, { once: true });

  return () => {
    clearInterval(timer);
    signal.removeEventListener('abort', onAbort);
  };
});
`),cf()()(),Aa(336,`blockquote`,7)(337,`strong`),bT(338,`Hint`),cf(),Aa(339,`code`),bT(340,`@SseSignal()`),cf(),bT(341,` is only populated on `),Aa(342,`code`),bT(343,`@Sse()`),cf(),bT(344,` routes; on any other route handler, it resolves to `),Aa(345,`code`),bT(346,`undefined`),cf(),bT(347,`. It works the same way on the Express and Fastify platforms.
`),cf(),Aa(348,`h4`,16)(349,`span`),bT(350,`Slow clients`),cf()(),Aa(351,`p`),bT(352,`An `),Aa(353,`code`),bT(354,`Observable`),cf(),bT(355,` can't be paused, so events wait in memory for a client that isn't reading them. Once more than 4 million characters of event data (`),Aa(356,`code`),bT(357,`data`),cf(),bT(358,` plus `),Aa(359,`code`),bT(360,`comment`),cf(),bT(361,`) are waiting for a client whose stream is backed up, Nest logs a warning and drops the connection as if the client had disconnected, which also unsubscribes from the `),Aa(362,`code`),bT(363,`Observable`),cf(),bT(364,`. An `),Aa(365,`code`),bT(366,`EventSource`),cf(),bT(367,` then reconnects, sending the ID of the last event it received.`),cf(),Aa(368,`p`),bT(369,`For a route that streams bulk data faster than its clients read, raise the limit with the `),Aa(370,`code`),bT(371,`maxPendingDataLength`),cf(),bT(372,` option, or set it to `),Aa(373,`code`),bT(374,`0`),cf(),bT(375,` or `),Aa(376,`code`),bT(377,`Infinity`),cf(),bT(378,` to lift it:`),cf(),Aa(379,`app-copy-button`)(380,`pre`)(381,`code`,6),bT(382,`
@Sse('logs', { maxPendingDataLength: 64 * 1024 * 1024 })
logs(): Observable<MessageEvent> {
  // ...
}
`),cf()()(),Aa(383,`h4`,17)(384,`span`),bT(385,`Example`),cf()(),Aa(386,`p`),bT(387,`A working example is available in the `),Aa(388,`a`,18),bT(389,`28-sse sample`),cf(),bT(390,`.`),cf()(),Aa(391,`a`,19),Wa(392,`i`,20),Aa(393,`span`),bT(394,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln],encapsulation:2})}return o})();var B=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-sessions`]],features:[xy],decls:206,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`session`],[`routerLink`,`/http/mvc`],[`appAnchor`,``,`id`,`use-with-express-default`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/session`],[1,`language-shell`],[1,`language-typescript`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/session#saveuninitialized`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/session#options`],[1,`info`],[`appAnchor`,``,`id`,`use-with-fastify`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/fastify/fastify-secure-session`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/fastify/fastify-secure-session#using-keys-with-key-rotation`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/sessions.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Session`),cf(),Aa(5,`p`)(6,`strong`),bT(7,`HTTP sessions`),cf(),bT(8,` store information about the user across multiple requests, which is particularly useful for `),Aa(9,`a`,4),bT(10,`MVC`),cf(),bT(11,` applications.`),cf(),Aa(12,`h4`,5)(13,`span`),bT(14,`Use with Express (default)`),cf()(),Aa(15,`p`),bT(16,`First, install the `),Aa(17,`a`,6),bT(18,`express-session`),cf(),bT(19,` package (and its types, for TypeScript users):`),cf(),Aa(20,`pre`)(21,`code`,7),bT(22,`
$ npm i express-session
$ npm i -D @types/express-session
`),cf()(),Aa(23,`p`),bT(24,`Once the installation is complete, apply the `),Aa(25,`code`),bT(26,`express-session`),cf(),bT(27,` middleware as global middleware (for example, in your `),Aa(28,`code`),bT(29,`main.ts`),cf(),bT(30,` file):`),cf(),Aa(31,`app-copy-button`)(32,`pre`)(33,`code`,8),bT(34,`
import session from 'express-session';
// somewhere in your initialization file
app.use(
  session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
  }),
);
`),cf()()(),Aa(35,`blockquote`,9)(36,`strong`),bT(37,`Notice`),cf(),bT(38,` The default server-side session storage is purposely not designed for a production environment. It leaks memory under most conditions, does not scale past a single process, and is meant for debugging and development. Read more in the `),Aa(39,`a`,6),bT(40,`express-session repository`),cf(),bT(41,`.
`),cf(),Aa(42,`p`),bT(43,`The `),Aa(44,`code`),bT(45,`secret`),cf(),bT(46,` is used to sign the session ID cookie. It can be either a string (a single secret) or an array of secrets. If you provide an array, only the first element is used to sign the session ID cookie, while all elements are considered when verifying the signature in requests. The secret should not be easily guessed; a random set of characters works best.`),cf(),Aa(47,`p`),bT(48,`Enabling the `),Aa(49,`code`),bT(50,`resave`),cf(),bT(51,` option forces the session to be saved back to the session store, even if the session was never modified during the request. The default value is `),Aa(52,`code`),bT(53,`true`),cf(),bT(54,`, but relying on the default is deprecated because the default will change in the future.`),cf(),Aa(55,`p`),bT(56,`Likewise, enabling the `),Aa(57,`code`),bT(58,`saveUninitialized`),cf(),bT(59,` option forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing `),Aa(60,`code`),bT(61,`false`),cf(),bT(62,` is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie. Choosing `),Aa(63,`code`),bT(64,`false`),cf(),bT(65,` also helps with race conditions where a client makes multiple parallel requests without a session (see the `),Aa(66,`a`,10)(67,`code`),bT(68,`saveUninitialized`),cf(),bT(69,` documentation`),cf(),bT(70,`).`),cf(),Aa(71,`p`),bT(72,`The `),Aa(73,`code`),bT(74,`session`),cf(),bT(75,` middleware accepts several other options. Read more about them in the `),Aa(76,`a`,11),bT(77,`express-session API documentation`),cf(),bT(78,`.`),cf(),Aa(79,`blockquote`,12)(80,`strong`),bT(81,`Hint`),cf(),bT(82,` The `),Aa(83,`code`),bT(84,`cookie.secure: true`),cf(),bT(85,` option is recommended. However, it requires an HTTPS-enabled website, because secure cookies are only sent over HTTPS. If `),Aa(86,`code`),bT(87,`secure`),cf(),bT(88,` is set and you access your site over HTTP, the cookie is not set. If your Node.js server runs behind a proxy and you use `),Aa(89,`code`),bT(90,`secure: true`),cf(),bT(91,`, you need to set `),Aa(92,`code`),bT(93,`"trust proxy"`),cf(),bT(94,` in Express.
`),cf(),Aa(95,`p`),bT(96,`With this in place, you can set and read session values from within route handlers, as follows:`),cf(),Aa(97,`app-copy-button`)(98,`pre`)(99,`code`,8),bT(100,`
@Get()
findAll(@Req() request: Request) {
  request.session.visits = request.session.visits ? request.session.visits + 1 : 1;
}
`),cf()()(),Aa(101,`blockquote`,12)(102,`strong`),bT(103,`Hint`),cf(),bT(104,` The `),Aa(105,`code`),bT(106,`@Req()`),cf(),bT(107,` decorator is imported from the `),Aa(108,`code`),bT(109,`@nestjs/common`),cf(),bT(110,` package, while `),Aa(111,`code`),bT(112,`Request`),cf(),bT(113,` is imported from the `),Aa(114,`code`),bT(115,`express`),cf(),bT(116,` package.
`),cf(),Aa(117,`p`),bT(118,`Alternatively, you can use the `),Aa(119,`code`),bT(120,`@Session()`),cf(),bT(121,` decorator to extract a session object from the request, as follows:`),cf(),Aa(122,`app-copy-button`)(123,`pre`)(124,`code`,8),bT(125,`
@Get()
findAll(@Session() session: Record<string, any>) {
  session.visits = session.visits ? session.visits + 1 : 1;
}
`),cf()()(),Aa(126,`blockquote`,12)(127,`strong`),bT(128,`Hint`),cf(),bT(129,` The `),Aa(130,`code`),bT(131,`@Session()`),cf(),bT(132,` decorator is imported from the `),Aa(133,`code`),bT(134,`@nestjs/common`),cf(),bT(135,` package.
`),cf(),Aa(136,`h4`,13)(137,`span`),bT(138,`Use with Fastify`),cf()(),Aa(139,`p`),bT(140,`First, install the required package:`),cf(),Aa(141,`pre`)(142,`code`,7),bT(143,`
$ npm i @fastify/secure-session
`),cf()(),Aa(144,`p`),bT(145,`Once the installation is complete, register the `),Aa(146,`code`),bT(147,`@fastify/secure-session`),cf(),bT(148,` plugin:`),cf(),Aa(149,`app-copy-button`)(150,`pre`)(151,`code`,8),bT(152,`
import secureSession from '@fastify/secure-session';

// somewhere in your initialization file
const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter(),
);
await app.register(secureSession, {
  secret: 'averylogphrasebiggerthanthirtytwochars',
  salt: 'mq9hDxBVDbspDR6n',
});
`),cf()()(),Aa(153,`blockquote`,12)(154,`strong`),bT(155,`Hint`),cf(),bT(156,` You can also `),Aa(157,`a`,14),bT(158,`pregenerate a key`),cf(),bT(159,` or use `),Aa(160,`a`,15),bT(161,`key rotation`),cf(),bT(162,`.
`),cf(),Aa(163,`p`),bT(164,`Read more about the available options in the `),Aa(165,`a`,14),bT(166,`@fastify/secure-session repository`),cf(),bT(167,`.`),cf(),Aa(168,`p`),bT(169,`With this in place, you can set and read session values from within route handlers, as follows:`),cf(),Aa(170,`app-copy-button`)(171,`pre`)(172,`code`,8),bT(173,`
@Get()
findAll(@Req() request: FastifyRequest) {
  const visits = request.session.get('visits');
  request.session.set('visits', visits ? visits + 1 : 1);
}
`),cf()()(),Aa(174,`p`),bT(175,`Alternatively, you can use the `),Aa(176,`code`),bT(177,`@Session()`),cf(),bT(178,` decorator to extract a session object from the request, as follows:`),cf(),Aa(179,`app-copy-button`)(180,`pre`)(181,`code`,8),bT(182,`
@Get()
findAll(@Session() session: secureSession.Session) {
  const visits = session.get('visits');
  session.set('visits', visits ? visits + 1 : 1);
}
`),cf()()(),Aa(183,`blockquote`,12)(184,`strong`),bT(185,`Hint`),cf(),bT(186,` The `),Aa(187,`code`),bT(188,`@Session()`),cf(),bT(189,` decorator is imported from the `),Aa(190,`code`),bT(191,`@nestjs/common`),cf(),bT(192,` package, while `),Aa(193,`code`),bT(194,`secureSession.Session`),cf(),bT(195,` comes from the `),Aa(196,`code`),bT(197,`@fastify/secure-session`),cf(),bT(198,` package (import statement: `),Aa(199,`code`),bT(200,`import * as secureSession from '@fastify/secure-session'`),cf(),bT(201,`).
`),cf()(),Aa(202,`a`,16),Wa(203,`i`,17),Aa(204,`span`),bT(205,`Edit on GitHub`),cf()()())},dependencies:[Jc,Lt,ln],encapsulation:2})}return o})();var L=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-streaming-responses`]],features:[xy],decls:488,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`streaming-responses`],[1,`info`],[`appAnchor`,``,`id`,`returning-a-stream`],[1,`language-typescript`],[`href`,`/http/streaming-responses#client-disconnection`],[`appAnchor`,``,`id`,`what-a-stream-can-yield`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://ndjson.org`],[`appAnchor`,``,`id`,`status-and-headers`],[`appAnchor`,``,`id`,`errors`],[`routerLink`,`/exception-filters`],[`appAnchor`,``,`id`,`client-disconnection`],[1,`warning`],[`appAnchor`,``,`id`,`slow-clients`],[`routerLink`,`/http/compression`],[`appAnchor`,``,`id`,`head-requests`],[`appAnchor`,``,`id`,`interceptors`],[`routerLink`,`/interceptors`],[`routerLink`,`/application/serialization`],[`appAnchor`,``,`id`,`handlers-that-use-res`],[`appAnchor`,``,`id`,`choosing-how-to-stream`],[`href`,`/http/server-sent-events`],[`href`,`/http/file-upload#streaming-files`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/streaming-responses.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Streaming responses`),cf(),Aa(5,`p`),bT(6,`A route handler can return a web-standard `),Aa(7,`code`),bT(8,`Response`),cf(),bT(9,`, a `),Aa(10,`code`),bT(11,`ReadableStream`),cf(),bT(12,`, or an async iterable such as an async generator. Nest sends it as it is produced, with backpressure, and stops it when the client goes away. It works the same on the Express, Fastify, and Node adapters.`),cf(),Aa(13,`p`),bT(14,`Use it for answers that take a while to produce or are too large to hold in memory: the tokens of an LLM, a request proxied to another API, a large export.`),cf(),Aa(15,`blockquote`,4)(16,`strong`),bT(17,`Hint`),cf(),bT(18,` This needs `),Aa(19,`code`),bT(20,`@nestjs/core`),cf(),bT(21,` 12.4.0 or later. On older versions, most of these values are answered with an empty JSON object and a 200.
`),cf(),Aa(22,`h4`,5)(23,`span`),bT(24,`Returning a stream`),cf()(),Aa(25,`p`),bT(26,`The shortest way to stream is an async generator. Each value it yields is sent as soon as the client can take it:`),cf(),Aa(27,`app-copy-button`)(28,`pre`)(29,`code`,6),bT(30,`
@Get('story')
async *story() {
  for await (const token of this.llm.stream('Tell me a story')) {
    yield token;
  }
}
`),cf()()(),Aa(31,`p`),bT(32,`If you already have a `),Aa(33,`code`),bT(34,`Response`),cf(),bT(35,`, return it. The AI SDK's `),Aa(36,`code`),bT(37,`toTextStreamResponse()`),cf(),bT(38,` returns one, and `),Aa(39,`code`),bT(40,`fetch()`),cf(),bT(41,` resolves to one, as a promise or an `),Aa(42,`code`),bT(43,`Observable`),cf(),bT(44,` of one works too. To stop the model call when the client leaves, see `),Aa(45,`a`,7),bT(46,`Client disconnection`),cf(),bT(47,`:`),cf(),Aa(48,`app-copy-button`)(49,`pre`)(50,`code`,6),bT(51,`
@Post('chat')
chat(@Body() { messages }: ChatDto) {
  return streamText({ model, messages }).toTextStreamResponse();
}

@Get('quotes')
quotes() {
  return fetch('https://quotes.example.com/latest');
}
`),cf()()(),Aa(52,`p`),bT(53,`A `),Aa(54,`code`),bT(55,`ReadableStream`),cf(),bT(56,` gives you the most control, as it knows at once when the client has left (see `),Aa(57,`a`,7),bT(58,`Client disconnection`),cf(),bT(59,`):`),cf(),Aa(60,`app-copy-button`)(61,`pre`)(62,`code`,6),bT(63,`
@Get('ticker')
ticker() {
  let timer: NodeJS.Timeout;
  return new ReadableStream({
    start(controller) {
      timer = setInterval(() => controller.enqueue(\`\${Date.now()}\\n\`), 1000);
    },
    cancel() {
      clearInterval(timer);
    },
  });
}
`),cf()()(),Aa(64,`blockquote`,4)(65,`strong`),bT(66,`Hint`),cf(),Aa(67,`code`),bT(68,`Response`),cf(),bT(69,` and `),Aa(70,`code`),bT(71,`ReadableStream`),cf(),bT(72,` are globals of Node.js, so there is nothing to import.
`),cf(),Aa(73,`p`),bT(74,`Any other object with a `),Aa(75,`code`),bT(76,`Symbol.asyncIterator`),cf(),bT(77,` method counts as well, a Node.js `),Aa(78,`code`),bT(79,`Readable`),cf(),bT(80,` among them. Arrays, `),Aa(81,`code`),bT(82,`Set`),cf(),bT(83,`s, and other sync iterables are still serialized as JSON. A thenable that also has that method, such as a Mongoose query, is awaited as usual.`),cf(),Aa(84,`h4`,8)(85,`span`),bT(86,`What a stream can yield`),cf()(),Aa(87,`p`),bT(88,`Each chunk is sent according to its type:`),cf(),Aa(89,`table`)(90,`thead`)(91,`tr`)(92,`th`),bT(93,`Chunk`),cf(),Aa(94,`th`),bT(95,`Sent as`),cf(),Aa(96,`th`),bT(97,`Default `),Aa(98,`code`),bT(99,`Content-Type`),cf()()()(),Aa(100,`tbody`)(101,`tr`)(102,`td`),bT(103,`String`),cf(),Aa(104,`td`),bT(105,`UTF-8 text`),cf(),Aa(106,`td`)(107,`code`),bT(108,`text/plain; charset=utf-8`),cf()()(),Aa(109,`tr`)(110,`td`)(111,`code`),bT(112,`Uint8Array`),cf(),bT(113,`, `),Aa(114,`code`),bT(115,`Buffer`),cf(),bT(116,`, other binary data`),cf(),Aa(117,`td`),bT(118,`The bytes as they are`),cf(),Aa(119,`td`)(120,`code`),bT(121,`application/octet-stream`),cf()()(),Aa(122,`tr`)(123,`td`),bT(124,`Anything else`),cf(),Aa(125,`td`),bT(126,`A line of JSON (`),Aa(127,`a`,9),bT(128,`NDJSON`),cf(),bT(129,`)`),cf(),Aa(130,`td`)(131,`code`),bT(132,`application/x-ndjson`),cf()()()()(),Aa(133,`p`),bT(134,`The first chunk decides the default `),Aa(135,`code`),bT(136,`Content-Type`),cf(),bT(137,`. Set your own with `),Aa(138,`code`),bT(139,`@Header()`),cf(),bT(140,`, which takes precedence:`),cf(),Aa(141,`app-copy-button`)(142,`pre`)(143,`code`,6),bT(144,`
@Get('events')
@Header('Content-Type', 'text/event-stream')
async *events() {
  yield 'data: hello\\n\\n';
}
`),cf()()(),Aa(145,`p`),bT(146,`An `),Aa(147,`code`),bT(148,`undefined`),cf(),bT(149,` chunk sends nothing, and a chunk that `),Aa(150,`code`),bT(151,`JSON.stringify()`),cf(),bT(152,` rejects, such as a `),Aa(153,`code`),bT(154,`BigInt`),cf(),bT(155,`, fails the stream.`),cf(),Aa(156,`h4`,10)(157,`span`),bT(158,`Status and headers`),cf()(),Aa(159,`p`),bT(160,`With a generator or a `),Aa(161,`code`),bT(162,`ReadableStream`),cf(),bT(163,`, `),Aa(164,`code`),bT(165,`@HttpCode()`),cf(),bT(166,` and `),Aa(167,`code`),bT(168,`@Header()`),cf(),bT(169,` apply as on any other route. That includes the default status of `),Aa(170,`code`),bT(171,`POST`),cf(),bT(172,`, which is 201: add `),Aa(173,`code`),bT(174,`@HttpCode(200)`),cf(),bT(175,` if your clients expect a 200.`),cf(),Aa(176,`p`),bT(177,`A `),Aa(178,`code`),bT(179,`Response`),cf(),bT(180,` is the whole answer, so its status and headers take precedence over those set before it, by `),Aa(181,`code`),bT(182,`@HttpCode()`),cf(),bT(183,`, `),Aa(184,`code`),bT(185,`@Header()`),cf(),bT(186,`, a guard, or a middleware. Headers it doesn't set stay in place, such as CORS headers, and its `),Aa(187,`code`),bT(188,`Set-Cookie`),cf(),bT(189,` values are added to the ones already there. A `),Aa(190,`code`),bT(191,`Response`),cf(),bT(192,` without a `),Aa(193,`code`),bT(194,`Content-Type`),cf(),bT(195,` is sent as `),Aa(196,`code`),bT(197,`application/octet-stream`),cf(),bT(198,`, unless a `),Aa(199,`code`),bT(200,`@Header()`),cf(),bT(201,` or a middleware has set another. A `),Aa(202,`code`),bT(203,`Response`),cf(),bT(204,` always has a status, 200 unless you set one, so `),Aa(205,`code`),bT(206,`@HttpCode()`),cf(),bT(207,` has no effect on it.`),cf(),Aa(208,`app-copy-button`)(209,`pre`)(210,`code`,6),bT(211,`
@Post('jobs')
createJob() {
  // A 202, not the 201 of POST. CORS headers set earlier are kept.
  return new Response(this.jobs.progress(), {
    status: 202,
    headers: { 'Content-Type': 'application/x-ndjson' },
  });
}
`),cf()()(),Aa(212,`p`),bT(213,`A `),Aa(214,`code`),bT(215,`Response`),cf(),bT(216,` with a `),Aa(217,`code`),bT(218,`null`),cf(),bT(219,` body, such as a 204 or what `),Aa(220,`code`),bT(221,`Response.redirect()`),cf(),bT(222,` makes, is sent with its status and headers and no body.`),cf(),Aa(223,`p`)(224,`code`),bT(225,`fetch()`),cf(),bT(226,` decodes the body of the response it returns, but leaves its `),Aa(227,`code`),bT(228,`Content-Encoding`),cf(),bT(229,` and `),Aa(230,`code`),bT(231,`Content-Length`),cf(),bT(232,` headers in place, along with those describing its connection, such as `),Aa(233,`code`),bT(234,`Keep-Alive`),cf(),bT(235,`. Nest drops these from a `),Aa(236,`code`),bT(237,`Response`),cf(),bT(238,` that comes from `),Aa(239,`code`),bT(240,`fetch()`),cf(),bT(241,`, so that you can return it as it is. A `),Aa(242,`code`),bT(243,`Response`),cf(),bT(244,` you build from one, as with `),Aa(245,`code`),bT(246,`new Response(upstream.body, upstream)`),cf(),bT(247,`, is sent with the headers you gave it, so leave those out yourself.`),cf(),Aa(248,`h4`,11)(249,`span`),bT(250,`Errors`),cf()(),Aa(251,`p`),bT(252,`The headers wait for the first chunk, because no exception filter can answer once they are sent. So an error before the first chunk is like any other error in a route handler: it goes through the `),Aa(253,`a`,12),bT(254,`exception filters`),cf(),bT(255,`, and the client gets a proper error response.`),cf(),Aa(256,`app-copy-button`)(257,`pre`)(258,`code`,6),bT(259,`
@Get('story')
async *story() {
  // Answered with a 404
  const story = await this.findStory();
  if (!story) {
    throw new NotFoundException();
  }
  yield* story.chapters;
}
`),cf()()(),Aa(260,`p`),bT(261,`To send the headers before the first chunk is ready, for example so that a client knows the connection is open, yield an empty string first. From then on, errors can no longer reach the exception filters.`),cf(),Aa(262,`p`),bT(263,`Once the headers are sent, an error is logged, and the connection is closed abruptly rather than ended, so that a truncated answer cannot be mistaken for a complete one: `),Aa(264,`code`),bT(265,`fetch()`),cf(),bT(266,` rejects while reading the body, and `),Aa(267,`code`),bT(268,`curl`),cf(),bT(269,` reports an error. If your clients need to know what went wrong, make that part of what you stream, and catch the error yourself in the generator.`),cf(),Aa(270,`p`),bT(271,`A body that has been read already (with `),Aa(272,`code`),bT(273,`await response.text()`),cf(),bT(274,`, for example) or that is locked can't be sent, so it fails with a 500 instead of sending nothing. An async generator can't tell: one that has run to its end simply sends nothing.`),cf(),Aa(275,`h4`,13)(276,`span`),bT(277,`Client disconnection`),cf()(),Aa(278,`p`),bT(279,`When the client goes away, also before the first chunk, Nest stops the stream, so that a paid LLM call doesn't run on for nobody:`),cf(),Aa(280,`ul`)(281,`li`),bT(282,`a `),Aa(283,`code`),bT(284,`ReadableStream`),cf(),bT(285,`, or the body of a `),Aa(286,`code`),bT(287,`Response`),cf(),bT(288,`, is cancelled, which calls its `),Aa(289,`code`),bT(290,`cancel()`),cf(),bT(291,` at once;`),cf(),Aa(292,`li`),bT(293,`a Node.js `),Aa(294,`code`),bT(295,`Readable`),cf(),bT(296,` is destroyed;`),cf(),Aa(297,`li`),bT(298,`an async generator's `),Aa(299,`code`),bT(300,`return()`),cf(),bT(301,` is called, which runs its `),Aa(302,`code`),bT(303,`finally`),cf(),bT(304,` blocks.`),cf()(),Aa(305,`app-copy-button`)(306,`pre`)(307,`code`,6),bT(308,`
@Get('story')
async *story() {
  const llm = await this.llm.connect();
  try {
    for await (const token of llm.stream('Tell me a story')) {
      yield token;
    }
  } finally {
    await llm.close();
  }
}
`),cf()()(),Aa(309,`blockquote`,14)(310,`strong`),bT(311,`Warning`),cf(),bT(312,` JavaScript queues `),Aa(313,`code`),bT(314,`return()`),cf(),bT(315,` until an async generator's next `),Aa(316,`code`),bT(317,`yield`),cf(),bT(318,`, so a generator waiting in an `),Aa(319,`code`),bT(320,`await`),cf(),bT(321,` stops only once that `),Aa(322,`code`),bT(323,`await`),cf(),bT(324,` settles. If an upstream can go quiet for a long time, use a `),Aa(325,`code`),bT(326,`ReadableStream`),cf(),bT(327,`, whose `),Aa(328,`code`),bT(329,`cancel()`),cf(),bT(330,` runs immediately.
`),cf(),Aa(331,`p`),bT(332,`Stopping a stream doesn't always stop what feeds it. Cancelling the `),Aa(333,`code`),bT(334,`Response`),cf(),bT(335,` of the AI SDK's `),Aa(336,`code`),bT(337,`toTextStreamResponse()`),cf(),bT(338,`, for one, leaves the model call running to its end, and to its bill, unless its `),Aa(339,`code`),bT(340,`abortSignal`),cf(),bT(341,` is aborted. To stop the call when the client leaves, abort it from `),Aa(342,`code`),bT(343,`cancel()`),cf(),bT(344,`:`),cf(),Aa(345,`app-copy-button`)(346,`pre`)(347,`code`,6),bT(348,`
@Post('chat')
chat(@Body() { messages }: ChatDto) {
  const abort = new AbortController();
  const answer = streamText({ model, messages, abortSignal: abort.signal });
  const reader = answer.textStream.getReader();
  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
    cancel() {
      abort.abort();
    },
  });
}
`),cf()()(),Aa(349,`p`),bT(350,`Check this for any `),Aa(351,`code`),bT(352,`Response`),cf(),bT(353,` a library gives you.`),cf(),Aa(354,`h4`,15)(355,`span`),bT(356,`Slow clients`),cf()(),Aa(357,`p`),bT(358,`The next chunk is read only when the client can take it, so a client that reads slowly slows the producer down instead of filling the server's memory. An async generator simply stays paused at its `),Aa(359,`code`),bT(360,`yield`),cf(),bT(361,`, and a `),Aa(362,`code`),bT(363,`ReadableStream`),cf(),bT(364,`'s `),Aa(365,`code`),bT(366,`pull()`),cf(),bT(367,` isn't called.`),cf(),Aa(368,`p`),bT(369,`Something between Nest and the client can still hold chunks back. The `),Aa(370,`a`,16),bT(371,`compression`),cf(),bT(372,` middleware and proxies such as nginx buffer the response: for nginx, set the `),Aa(373,`code`),bT(374,`X-Accel-Buffering: no`),cf(),bT(375,` header.`),cf(),Aa(376,`h4`,17)(377,`span`),bT(378,`HEAD requests`),cf()(),Aa(379,`p`),bT(380,`A `),Aa(381,`code`),bT(382,`HEAD`),cf(),bT(383,` request doesn't read the stream: a generator doesn't even start, and a `),Aa(384,`code`),bT(385,`ReadableStream`),cf(),bT(386,` is cancelled. The status and headers are sent as usual, but as the first chunk is never read, a route that relies on the default `),Aa(387,`code`),bT(388,`Content-Type`),cf(),bT(389,` answers `),Aa(390,`code`),bT(391,`application/octet-stream`),cf(),bT(392,`. Set it with `),Aa(393,`code`),bT(394,`@Header()`),cf(),bT(395,` if it matters.`),cf(),Aa(396,`h4`,18)(397,`span`),bT(398,`Interceptors`),cf()(),Aa(399,`p`),bT(400,`An `),Aa(401,`a`,19),bT(402,`interceptor`),cf(),bT(403,` sees the stream as a single value, which reaches it before streaming starts. So its `),Aa(404,`code`),bT(405,`finalize()`),cf(),bT(406,` and `),Aa(407,`code`),bT(408,`timeout()`),cf(),bT(409,` are over before the stream is, and interceptors don't see the chunks.`),cf(),Aa(410,`p`),bT(411,`A stream can't be sent as part of something else. If an interceptor wraps or serializes it, as a global one that puts every result under a `),Aa(412,`code`),bT(413,`data`),cf(),bT(414,` key does, Nest sends the handler's stream as it is, and other routes keep their wrapper. An interceptor can still:`),cf(),Aa(415,`ul`)(416,`li`),bT(417,`pass it on, as with `),Aa(418,`code`),bT(419,`tap()`),cf(),bT(420,`;`),cf(),Aa(421,`li`),bT(422,`replace it with another stream, for example one that reads the first and changes each chunk;`),cf(),Aa(423,`li`),bT(424,`read it and return a value of its own, which Nest then sends instead.`),cf()(),Aa(425,`p`),bT(426,`Neither the `),Aa(427,`code`),bT(428,`ClassSerializerInterceptor`),cf(),bT(429,` nor the `),Aa(430,`code`),bT(431,`StandardSchemaSerializerInterceptor`),cf(),Aa(432,`a`,20),bT(433,`serializes`),cf(),bT(434,` these values.`),cf(),Aa(435,`h4`,21)(436,`span`),bT(437,`Handlers that use @Res()`),cf()(),Aa(438,`p`),bT(439,`A handler that injects the response with `),Aa(440,`code`),bT(441,`@Res()`),cf(),bT(442,` sends it itself, so Nest ignores what it returns, and a generator never starts. With the `),Aa(443,`code`),bT(444,`passthrough`),cf(),bT(445,` option of `),Aa(446,`code`),bT(447,`@Res()`),cf(),bT(448,`, the returned stream is sent as usual.`),cf(),Aa(449,`h4`,22)(450,`span`),bT(451,`Choosing how to stream`),cf()(),Aa(452,`ul`)(453,`li`)(454,`strong`),bT(455,`A stream`),cf(),bT(456,`, as described here, for anything produced over time, in any format, read with `),Aa(457,`code`),bT(458,`fetch()`),cf(),bT(459,`.`),cf(),Aa(460,`li`)(461,`a`,23)(462,`strong`)(463,`code`),bT(464,`@Sse()`),cf()()(),bT(465,` for events sent to an `),Aa(466,`code`),bT(467,`EventSource`),cf(),bT(468,` from an `),Aa(469,`code`),bT(470,`Observable`),cf(),bT(471,`, with event ids and the reconnection they allow.`),cf(),Aa(472,`li`)(473,`a`,24)(474,`strong`)(475,`code`),bT(476,`StreamableFile`),cf()()(),bT(477,` for files, with their `),Aa(478,`code`),bT(479,`Content-Disposition`),cf(),bT(480,` and `),Aa(481,`code`),bT(482,`Content-Length`),cf(),bT(483,`.`),cf()()(),Aa(484,`a`,25),Wa(485,`i`,26),Aa(486,`span`),bT(487,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln],encapsulation:2})}return o})();var U=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-versioning`]],features:[xy],decls:485,vars:56,consts:[[`contentReference`,``],[`appd9a01b6029583065ef4437b992b2629596ba3f42`,``],[`app6a346b1c7edf0defe3bc7364100876c7cb760f2f`,``],[`app91f595e0120af7c548f766db98786cbe92009784`,``],[`app2e96dd2dead88ae3fa0589e017fa327bb63f9b58`,``],[`appf7c0b82b2702a1a722eb0290f1c87d8dce235e20`,``],[`appbdfc3a5b34aa60b1e7c5a2caabbd4896d4e35a26`,``],[`appbef105d20da36b922449263aa0df8e8b10ce63c7`,``],[`app3e2307d5cda78e6bb5b681e0efef601dcd3302ef`,``],[`app15aaa632a4e6839a7a18cb158daeb073c59bc763`,``],[`appcf58891be8b3068a6bba252bb5ac4b4d5341165f`,``],[1,`content`],[1,`content-inner`],[`id`,`versioning`],[1,`info`],[`href`,`http/versioning#uri-versioning-type`],[`href`,`http/versioning#header-versioning-type`],[`href`,`http/versioning#media-type-versioning-type`],[`href`,`http/versioning#custom-versioning-type`],[`appAnchor`,``,`id`,`uri-versioning-type`],[1,`warning`],[`href`,`faq/global-prefix`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`header-versioning-type`],[`appAnchor`,``,`id`,`media-type-versioning-type`],[`appAnchor`,``,`id`,`custom-versioning-type`],[`href`,`/http/versioning#version-neutral`],[`href`,`/http/versioning#global-default-version`],[`appAnchor`,``,`id`,`usage`],[`appAnchor`,``,`id`,`controller-versions`],[`appAnchor`,``,`id`,`route-versions`],[`appAnchor`,``,`id`,`multiple-versions`],[`appAnchor`,``,`id`,`version-neutral`],[`appAnchor`,``,`id`,`global-default-version`],[`appAnchor`,``,`id`,`middleware-versioning`],[`routerLink`,`/middleware`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/versioning.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,11,0)(2,`div`,12)(3,`h3`,13),bT(4,`Versioning`),cf(),Aa(5,`blockquote`,14)(6,`strong`),bT(7,`Hint`),cf(),bT(8,` This chapter applies only to HTTP-based applications.
`),cf(),Aa(9,`p`),bT(10,`Versioning lets you run `),Aa(11,`strong`),bT(12,`different versions`),cf(),bT(13,` of your controllers or individual routes within the same application. Applications change frequently, and you often need to introduce breaking changes while still supporting the previous version of the application.`),cf(),Aa(14,`p`),bT(15,`Nest supports four types of versioning:`),cf(),Aa(16,`table`)(17,`tr`)(18,`td`)(19,`a`,15)(20,`code`),bT(21,`URI Versioning`),cf()()(),Aa(22,`td`),bT(23,`The version is passed within the URI of the request (default)`),cf()(),Aa(24,`tr`)(25,`td`)(26,`a`,16)(27,`code`),bT(28,`Header Versioning`),cf()()(),Aa(29,`td`),bT(30,`A custom request header specifies the version`),cf()(),Aa(31,`tr`)(32,`td`)(33,`a`,17)(34,`code`),bT(35,`Media Type Versioning`),cf()()(),Aa(36,`td`),bT(37,`The `),Aa(38,`code`),bT(39,`Accept`),cf(),bT(40,` header of the request specifies the version`),cf()(),Aa(41,`tr`)(42,`td`)(43,`a`,18)(44,`code`),bT(45,`Custom Versioning`),cf()()(),Aa(46,`td`),bT(47,`Any aspect of the request may specify the version(s). You provide a custom function that extracts the version(s).`),cf()()(),Aa(48,`h4`,19)(49,`span`),bT(50,`URI Versioning Type`),cf()(),Aa(51,`p`),bT(52,`URI Versioning uses the version passed within the URI of the request, such as `),Aa(53,`code`),bT(54,`https://example.com/v1/route`),cf(),bT(55,` and `),Aa(56,`code`),bT(57,`https://example.com/v2/route`),cf(),bT(58,`.`),cf(),Aa(59,`blockquote`,20)(60,`strong`),bT(61,`Notice`),cf(),bT(62,` With URI Versioning, the version is automatically added to the URI after the `),Aa(63,`a`,21),bT(64,`global path prefix`),cf(),bT(65,` (if one exists) and before any controller or route paths.
`),cf(),Aa(66,`p`),bT(67,`To enable URI Versioning for your application, do the following:`),cf(),Aa(68,`app-copy-button`,22)(69,`span`,23),bT(70),LT(71,`extension`),Wa(72,`app-tabs`,null,1),cf(),Aa(74,`pre`)(75,`code`,24),bT(76,`
const app = await NestFactory.create(AppModule);
// or "app.enableVersioning()"
app.enableVersioning({
  type: VersioningType.URI,
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(77,`blockquote`,20)(78,`strong`),bT(79,`Notice`),cf(),bT(80,` By default, the version in the URI is automatically prefixed with `),Aa(81,`code`),bT(82,`v`),cf(),bT(83,`. To change the prefix, set the `),Aa(84,`code`),bT(85,`prefix`),cf(),bT(86,` key to your desired value, or set it to `),Aa(87,`code`),bT(88,`false`),cf(),bT(89,` to disable it.
`),cf(),Aa(90,`blockquote`,14)(91,`strong`),bT(92,`Hint`),cf(),bT(93,` The `),Aa(94,`code`),bT(95,`VersioningType`),cf(),bT(96,` enum is available to use for the `),Aa(97,`code`),bT(98,`type`),cf(),bT(99,` property and is imported from the `),Aa(100,`code`),bT(101,`@nestjs/common`),cf(),bT(102,` package.
`),cf(),Aa(103,`h4`,25)(104,`span`),bT(105,`Header Versioning Type`),cf()(),Aa(106,`p`),bT(107,`Header Versioning uses a custom, user-specified request header whose value specifies the version to use for the request.`),cf(),Aa(108,`p`),bT(109,`To enable `),Aa(110,`strong`),bT(111,`Header Versioning`),cf(),bT(112,` for your application, do the following:`),cf(),Aa(113,`app-copy-button`,22)(114,`span`,23),bT(115),LT(116,`extension`),Wa(117,`app-tabs`,null,2),cf(),Aa(119,`pre`)(120,`code`,24),bT(121,`
const app = await NestFactory.create(AppModule);
app.enableVersioning({
  type: VersioningType.HEADER,
  header: 'Custom-Header',
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(122,`p`),bT(123,`The `),Aa(124,`code`),bT(125,`header`),cf(),bT(126,` property is the name of the header that contains the version of the request.`),cf(),Aa(127,`blockquote`,14)(128,`strong`),bT(129,`Hint`),cf(),bT(130,` The `),Aa(131,`code`),bT(132,`VersioningType`),cf(),bT(133,` enum is available to use for the `),Aa(134,`code`),bT(135,`type`),cf(),bT(136,` property and is imported from the `),Aa(137,`code`),bT(138,`@nestjs/common`),cf(),bT(139,` package.
`),cf(),Aa(140,`h4`,26)(141,`span`),bT(142,`Media Type Versioning Type`),cf()(),Aa(143,`p`),bT(144,`Media Type Versioning uses the `),Aa(145,`code`),bT(146,`Accept`),cf(),bT(147,` header of the request to specify the version.`),cf(),Aa(148,`p`),bT(149,`Within the `),Aa(150,`code`),bT(151,`Accept`),cf(),bT(152,` header, the version is separated from the media type with a semicolon (`),Aa(153,`code`),bT(154,`;`),cf(),bT(155,`), followed by a key-value pair that represents the version to use for the request, such as `),Aa(156,`code`),bT(157,`Accept: application/json;v=2`),cf(),bT(158,`. The key is treated as a prefix for the version, so the `),Aa(159,`code`),bT(160,`key`),cf(),bT(161,` property must include both the key and the separator.`),cf(),Aa(162,`p`),bT(163,`To enable `),Aa(164,`strong`),bT(165,`Media Type Versioning`),cf(),bT(166,` for your application, do the following:`),cf(),Aa(167,`app-copy-button`,22)(168,`span`,23),bT(169),LT(170,`extension`),Wa(171,`app-tabs`,null,3),cf(),Aa(173,`pre`)(174,`code`,24),bT(175,`
const app = await NestFactory.create(AppModule);
app.enableVersioning({
  type: VersioningType.MEDIA_TYPE,
  key: 'v=',
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(176,`p`),bT(177,`The `),Aa(178,`code`),bT(179,`key`),cf(),bT(180,` property is the key and separator of the key-value pair that contains the version. For `),Aa(181,`code`),bT(182,`Accept: application/json;v=2`),cf(),bT(183,`, set the `),Aa(184,`code`),bT(185,`key`),cf(),bT(186,` property to `),Aa(187,`code`),bT(188,`v=`),cf(),bT(189,`.`),cf(),Aa(190,`blockquote`,14)(191,`strong`),bT(192,`Hint`),cf(),bT(193,` The `),Aa(194,`code`),bT(195,`VersioningType`),cf(),bT(196,` enum is available to use for the `),Aa(197,`code`),bT(198,`type`),cf(),bT(199,` property and is imported from the `),Aa(200,`code`),bT(201,`@nestjs/common`),cf(),bT(202,` package.
`),cf(),Aa(203,`h4`,27)(204,`span`),bT(205,`Custom Versioning Type`),cf()(),Aa(206,`p`),bT(207,`Custom Versioning uses any aspect of the request to specify the version (or versions). Nest analyzes the incoming request with an `),Aa(208,`code`),bT(209,`extractor`),cf(),bT(210,` function that returns a string or an array of strings.`),cf(),Aa(211,`p`),bT(212,`If the requester provides multiple versions, the extractor function can return an array of strings sorted from the highest version to the lowest. Versions are matched to routes in order from highest to lowest.`),cf(),Aa(213,`p`),bT(214,`If the `),Aa(215,`code`),bT(216,`extractor`),cf(),bT(217,` returns an empty string or array, no versioned route is matched, so a request to one receives a `),Aa(218,`code`),bT(219,`404`),cf(),bT(220,` response status. `),Aa(221,`a`,28)(222,`code`),bT(223,`VERSION_NEUTRAL`),cf()(),bT(224,` routes still match, as do routes that do not specify a version when no `),Aa(225,`a`,29),bT(226,`global default version`),cf(),bT(227,` is set.`),cf(),Aa(228,`p`),bT(229,`For example, if an incoming request specifies that it supports versions `),Aa(230,`code`),bT(231,`1`),cf(),bT(232,`, `),Aa(233,`code`),bT(234,`2`),cf(),bT(235,`, and `),Aa(236,`code`),bT(237,`3`),cf(),bT(238,`, the `),Aa(239,`code`),bT(240,`extractor`),cf(),Aa(241,`strong`),bT(242,`must`),cf(),bT(243,` return `),Aa(244,`code`),bT(245,`['3', '2', '1']`),cf(),bT(246,`. This ensures that the highest possible route version is selected first.`),cf(),Aa(247,`p`),bT(248,`If versions `),Aa(249,`code`),bT(250,`['3', '2', '1']`),cf(),bT(251,` are extracted, but routes exist only for versions `),Aa(252,`code`),bT(253,`2`),cf(),bT(254,` and `),Aa(255,`code`),bT(256,`1`),cf(),bT(257,`, the route that matches version `),Aa(258,`code`),bT(259,`2`),cf(),bT(260,` is selected (version `),Aa(261,`code`),bT(262,`3`),cf(),bT(263,` is ignored).`),cf(),Aa(264,`blockquote`,20)(265,`strong`),bT(266,`Notice`),cf(),bT(267,` With the Express adapter, make your `),Aa(268,`code`),bT(269,`extractor`),cf(),bT(270,` return a single version (a string, or an array with one element). Selecting the highest matching version from a multi-element array `),Aa(271,`strong`),bT(272,`does not reliably work`),cf(),bT(273,` in Express due to design limitations of the adapter. If you need that behavior, use the Fastify adapter, which supports both single-version and highest-matching-version selection.
`),cf(),Aa(274,`p`),bT(275,`To enable `),Aa(276,`strong`),bT(277,`Custom Versioning`),cf(),bT(278,` for your application, create an `),Aa(279,`code`),bT(280,`extractor`),cf(),bT(281,` function and pass it to `),Aa(282,`code`),bT(283,`enableVersioning()`),cf(),bT(284,`:`),cf(),Aa(285,`app-copy-button`,22)(286,`span`,23),bT(287),LT(288,`extension`),Wa(289,`app-tabs`,null,4),cf(),Aa(291,`pre`)(292,`code`,24),bT(293,`
// Example extractor that pulls out a list of versions from a custom header and turns it into a sorted array.
// This example uses Fastify, but Express requests can be processed in a similar way.
const extractor = (request: FastifyRequest): string | string[] =>
  [request.headers['custom-versioning-field'] ?? '']
     .flatMap(v => v.split(','))
     .filter(v => !!v)
     .sort()
     .reverse()

const app = await NestFactory.create(AppModule);
app.enableVersioning({
  type: VersioningType.CUSTOM,
  extractor,
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(294,`h4`,30)(295,`span`),bT(296,`Usage`),cf()(),Aa(297,`p`),bT(298,`Versioning lets you version controllers and individual routes, and also lets certain resources opt out of versioning. Usage is the same regardless of the versioning type your application uses.`),cf(),Aa(299,`blockquote`,20)(300,`strong`),bT(301,`Notice`),cf(),bT(302,` If versioning is enabled for the application but a controller or route does not specify a version (and no `),Aa(303,`a`,29),bT(304,`global default version`),cf(),bT(305,` is set), that controller or route behaves like a `),Aa(306,`a`,28)(307,`code`),bT(308,`VERSION_NEUTRAL`),cf()(),bT(309,` one. With URI Versioning, it is served only at its path without a version (`),Aa(310,`code`),bT(311,`/cats`),cf(),bT(312,`, while `),Aa(313,`code`),bT(314,`/v1/cats`),cf(),bT(315,` receives a `),Aa(316,`code`),bT(317,`404`),cf(),bT(318,` response status). With the other versioning types, it is served whatever version the request contains, or none. A request containing a version that has no corresponding controller or route receives a `),Aa(319,`code`),bT(320,`404`),cf(),bT(321,` response status, as does a request without a version when only versioned controllers or routes match its path.
`),cf(),Aa(322,`h4`,31)(323,`span`),bT(324,`Controller versions`),cf()(),Aa(325,`p`),bT(326,`A version can be applied to a controller, setting the version for all routes within that controller.`),cf(),Aa(327,`p`),bT(328,`To add a version to a controller, do the following:`),cf(),Aa(329,`app-copy-button`,22)(330,`span`,23),bT(331),LT(332,`extension`),Wa(333,`app-tabs`,null,5),cf(),Aa(335,`pre`)(336,`code`,24),bT(337,`
@Controller({
  version: '1',
})
export class CatsControllerV1 {
  @Get('cats')
  findAll(): string {
    return 'This action returns all cats for version 1';
  }
}
`),cf()(),Aa(338,`pre`)(339,`code`,24),bT(340,`
@Controller({
  version: '1',
})
export class CatsControllerV1 {
  @Get('cats')
  findAll() {
    return 'This action returns all cats for version 1';
  }
}
`),cf()()(),Aa(341,`h4`,32)(342,`span`),bT(343,`Route versions`),cf()(),Aa(344,`p`),bT(345,`A version can be applied to an individual route. This version overrides any other version that would affect the route, such as the controller version.`),cf(),Aa(346,`p`),bT(347,`To add a version to an individual route, do the following:`),cf(),Aa(348,`app-copy-button`,22)(349,`span`,23),bT(350),LT(351,`extension`),Wa(352,`app-tabs`,null,6),cf(),Aa(354,`pre`)(355,`code`,24),bT(356,`
import { Controller, Get, Version } from '@nestjs/common';

@Controller()
export class CatsController {
  @Version('1')
  @Get('cats')
  findAllV1(): string {
    return 'This action returns all cats for version 1';
  }

  @Version('2')
  @Get('cats')
  findAllV2(): string {
    return 'This action returns all cats for version 2';
  }
}
`),cf()(),Aa(357,`pre`)(358,`code`,24),bT(359,`
import { Controller, Get, Version } from '@nestjs/common';

@Controller()
export class CatsController {
  @Version('1')
  @Get('cats')
  findAllV1() {
    return 'This action returns all cats for version 1';
  }

  @Version('2')
  @Get('cats')
  findAllV2() {
    return 'This action returns all cats for version 2';
  }
}
`),cf()()(),Aa(360,`h4`,33)(361,`span`),bT(362,`Multiple versions`),cf()(),Aa(363,`p`),bT(364,`Multiple versions can be applied to a controller or route. To use multiple versions, set the version to an array:`),cf(),Aa(365,`app-copy-button`,22)(366,`span`,23),bT(367),LT(368,`extension`),Wa(369,`app-tabs`,null,7),cf(),Aa(371,`pre`)(372,`code`,24),bT(373,`
@Controller({
  version: ['1', '2'],
})
export class CatsController {
  @Get('cats')
  findAll(): string {
    return 'This action returns all cats for version 1 or 2';
  }
}
`),cf()(),Aa(374,`pre`)(375,`code`,24),bT(376,`
@Controller({
  version: ['1', '2'],
})
export class CatsController {
  @Get('cats')
  findAll() {
    return 'This action returns all cats for version 1 or 2';
  }
}
`),cf()()(),Aa(377,`h4`,34)(378,`span`),bT(379,`Version "Neutral"`),cf()(),Aa(380,`p`),bT(381,`Some controllers or routes behave the same regardless of the version. To accommodate this, set the version to the `),Aa(382,`code`),bT(383,`VERSION_NEUTRAL`),cf(),bT(384,` symbol.`),cf(),Aa(385,`p`),bT(386,`An incoming request is mapped to a `),Aa(387,`code`),bT(388,`VERSION_NEUTRAL`),cf(),bT(389,` controller or route regardless of the version specified, including when the request contains no version at all.`),cf(),Aa(390,`blockquote`,20)(391,`strong`),bT(392,`Notice`),cf(),bT(393,` With URI Versioning, a `),Aa(394,`code`),bT(395,`VERSION_NEUTRAL`),cf(),bT(396,` resource does not have the version in its URI.
`),cf(),Aa(397,`p`),bT(398,`To add a version-neutral controller or route, do the following:`),cf(),Aa(399,`app-copy-button`,22)(400,`span`,23),bT(401),LT(402,`extension`),Wa(403,`app-tabs`,null,8),cf(),Aa(405,`pre`)(406,`code`,24),bT(407,`
import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  version: VERSION_NEUTRAL,
})
export class CatsController {
  @Get('cats')
  findAll(): string {
    return 'This action returns all cats regardless of version';
  }
}
`),cf()(),Aa(408,`pre`)(409,`code`,24),bT(410,`
import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  version: VERSION_NEUTRAL,
})
export class CatsController {
  @Get('cats')
  findAll() {
    return 'This action returns all cats regardless of version';
  }
}
`),cf()()(),Aa(411,`blockquote`,20)(412,`strong`),bT(413,`Notice`),cf(),bT(414,` Register a version-neutral controller or route, or one that does not specify a version when no `),Aa(415,`a`,29),bT(416,`global default version`),cf(),bT(417,` is set, after any versioned controllers or routes that share its path: list it later in the module's `),Aa(418,`code`),bT(419,`controllers`),cf(),bT(420,` array, declare it below them in the same controller, or put it in a module registered after theirs. A module's own controllers are registered before those of the modules it imports, and imported modules in the order of the `),Aa(421,`code`),bT(422,`imports`),cf(),bT(423,` array. With the Express adapter and any versioning type other than URI Versioning, routes that share a path are tried in registration order, so a version-neutral route registered first also receives the requests meant for the versioned ones.
`),cf(),Aa(424,`h4`,35)(425,`span`),bT(426,`Global default version`),cf()(),Aa(427,`p`),bT(428,`If you don't want to provide a version for each controller or individual route, or you want a specific version to act as the default for every controller or route that doesn't specify one, set the `),Aa(429,`code`),bT(430,`defaultVersion`),cf(),bT(431,` as follows:`),cf(),Aa(432,`app-copy-button`,22)(433,`span`,23),bT(434),LT(435,`extension`),Wa(436,`app-tabs`,null,9),cf(),Aa(438,`pre`)(439,`code`,24),bT(440,`
app.enableVersioning({
  // ...
  defaultVersion: '1',
  // or: defaultVersion: ['1', '2'],
  // or: defaultVersion: VERSION_NEUTRAL,
});
`),cf()()(),Aa(441,`h4`,36)(442,`span`),bT(443,`Middleware versioning`),cf()(),Aa(444,`p`)(445,`a`,37),bT(446,`Middleware`),cf(),bT(447,` can also use versioning metadata to target a specific route version. To do so, set the `),Aa(448,`code`),bT(449,`version`),cf(),bT(450,` property in the route object passed to the `),Aa(451,`code`),bT(452,`MiddlewareConsumer.forRoutes()`),cf(),bT(453,` method:`),cf(),Aa(454,`app-copy-button`,22)(455,`span`,23),bT(456),LT(457,`extension`),Wa(458,`app-tabs`,null,10),cf(),Aa(460,`pre`)(461,`code`,24),bT(462,`
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware.js';
import { CatsModule } from './cats/cats.module.js';
import { CatsController } from './cats/cats.controller.js';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET, version: '2' });
  }
}
`),cf()()(),Aa(463,`p`),bT(464,`With URI Versioning, the code above applies the `),Aa(465,`code`),bT(466,`LoggerMiddleware`),cf(),bT(467,` only to version `),Aa(468,`code`),bT(469,`'2'`),cf(),bT(470,` of the `),Aa(471,`code`),bT(472,`/cats`),cf(),bT(473,` endpoint, since each version is served at its own path.`),cf(),Aa(474,`blockquote`,20)(475,`strong`),bT(476,`Notice`),cf(),bT(477,` With Header, Media Type or Custom Versioning, all versions of an endpoint share one path, so the middleware runs for the requests to every version of `),Aa(478,`code`),bT(479,`/cats`),cf(),bT(480,`. To run code for a single version with these versioning types, use a guard or an interceptor on that version's controller or route handler instead.
`),cf()(),Aa(481,`a`,38),Wa(482,`i`,39),Aa(483,`span`),bT(484,`Edit on GitHub`),cf()()()),c&2){let y=tT(73),v=tT(118),g=tT(172),k=tT(290),T=tT(334),P=tT(353),O=tT(370),F=tT(404),R=tT(437),M=tT(459);zC(70),hf(` `,jT(71,26,`main`,y.isJsActive),`
`),zC(45),hf(` `,jT(116,29,`main`,v.isJsActive),`
`),zC(54),hf(` `,jT(170,32,`main`,g.isJsActive),`
`),zC(118),hf(` `,jT(288,35,`main`,k.isJsActive),`
`),zC(44),hf(` `,jT(332,38,`cats.controller`,T.isJsActive),`
`),zC(4),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive),zC(12),hf(` `,jT(351,41,`cats.controller`,P.isJsActive),`
`),zC(4),zy(`hide`,P.isJsActive),zC(3),zy(`hide`,!P.isJsActive),zC(10),hf(` `,jT(368,44,`cats.controller`,O.isJsActive),`
`),zC(4),zy(`hide`,O.isJsActive),zC(3),zy(`hide`,!O.isJsActive),zC(27),hf(` `,jT(402,47,`cats.controller`,F.isJsActive),`
`),zC(4),zy(`hide`,F.isJsActive),zC(3),zy(`hide`,!F.isJsActive),zC(26),hf(` `,jT(435,50,`main`,R.isJsActive),`
`),zC(22),hf(` `,jT(457,53,`app.module`,M.isJsActive),`
`)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return o})();var V=(()=>{class o extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(o)))(p||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-webhooks`]],features:[xy],decls:4195,vars:132,consts:[[`contentReference`,``],[`app64cd258522f5b0fbc842e012a377d8f3f7c24417`,``],[`appbfc92dfa4c3a3042b6795207fb50e7fb5a3d8b28`,``],[`app060576d0f315998e66bf1cd2d052eb0c12a73c53`,``],[`app67c1c2677aa624a86e5488fa0fe7cabba5c5feb0`,``],[`appc34e106eeb201a4c96731c3d5569cfb1080abe52`,``],[`appf48ebe3668482ddf0a309747335abce833ee786c`,``],[`app1187995c8e56952294781f631877088cfa531a8e`,``],[`app53233c90a5542477b2d9432aa1be636f64ce0c1d`,``],[`app6681fb5a8b47eee6e2631317757a8e74a85627de`,``],[`app078c0596b1f8bd36089635877dfd1383cd5a01a9`,``],[`app41e672bbf016866aa8679905db2930fd578791f6`,``],[`appf0d45045f330e2177350e25bd2ba2f79b107d627`,``],[`app69c02253d2388a334c9de2de7149811c48b5fbd2`,``],[`appdd0a4428a66b5902b42c0752fde9c23888ca2e0e`,``],[`app92404a4aafcb97435bf1309deeb2353767c4333e`,``],[`app3b7458f770bbe9af41f901187bf3adddcd7cb8bb`,``],[`app0267d5cef36db14a3140d81732a68b1c23a7804d`,``],[`appe7f63ce6de6e73d77e325c85884d2238223fd855`,``],[`appd7485be75ecbdd2e08fd4942569761945043beb4`,``],[`appc14e8dcdbca1915809538b536ddc93306faa3b12`,``],[`appca5a7b45b96bc2be3a0c6d97132e5d67f4b0d775`,``],[`app0beea51d8a4e345fcd239a5a795c2bc5d9cb9676`,``],[`appd024d141cd19e9241267a70071bd62b5e2823290`,``],[`appaa88a1b73d9771a093c39742a93ae864835168d5`,``],[`app3716c45ee7ee0e6966ad67bdd450f8bbb25edf28`,``],[`app22264acf9a75039cfb56c5c1b0ed70582f1bac47`,``],[`appd920e933e53c317afde97426e26b43c8c52bfa64`,``],[`app7709ae344175a6ca7c02016d0f799f114d0951b3`,``],[`app64bcb2ce2bafc51b20b52dbd7f5a7f5ef87f8abd`,``],[`app3cd23923e301909e8c1c014e491b6bca5c5769cc`,``],[`app730537dd4f466c612eb16d9d828e42346770736b`,``],[`app247e43639f2279582b8b8d576e348aa41f8b5b88`,``],[`appe67b8953f1cdacd4da315d70f39fc7862f5bf6a2`,``],[1,`content`],[1,`content-inner`],[`id`,`webhooks`],[`routerLink`,`/reliability/outbox`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.standardwebhooks.com`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team`],[`href`,`/data/drizzle`],[`href`,`/http/webhooks#keep-webhooks-in-your-database`],[`appAnchor`,``,`id`,`keep-webhooks-in-your-database`],[1,`warning`],[`href`,`/reliability/outbox#keep-messages-in-your-database`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/http/webhooks#register-the-modules`],[`href`,`/http/webhooks#send-ordershipped-and-ordercancelled-after-the-commit`],[`href`,`/http/webhooks#the-store-contract`],[`appAnchor`,``,`id`,`register-the-modules`],[`href`,`/http/webhooks#retries-the-delivery-log-and-replay`],[1,`info`],[`href`,`/application/configuration`],[`appAnchor`,``,`id`,`let-partners-subscribe`],[`href`,`/http/webhooks#installation`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev/`],[`routerLink`,`/application/validation`],[`appAnchor`,``,`id`,`send-ordershipped-and-ordercancelled-after-the-commit`],[`href`,`/http/webhooks#receive-the-carriers-stripe-like-webhooks`],[1,`language-http`],[`href`,`/http/webhooks#rotate-secrets`],[`href`,`/reliability/outbox#publish-to-the-analytics-microservice`],[`appAnchor`,``,`id`,`retries-the-delivery-log-and-replay`],[`appAnchor`,``,`id`,`receive-the-payment-providers-webhooks`],[`href`,`/faq/raw-body#body-parser-size-limit`],[`appAnchor`,``,`id`,`receive-the-carriers-stripe-like-webhooks`],[`href`,`/http/webhooks#receive-the-payment-providers-webhooks`],[`href`,`/http/webhooks#other-senders`],[`appAnchor`,``,`id`,`other-senders`],[`appAnchor`,``,`id`,`rotate-secrets`],[`href`,`/http/webhooks#let-partners-subscribe`],[`appAnchor`,``,`id`,`try-it`],[1,`language-json`],[`appAnchor`,``,`id`,`testing`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://pglite.dev`],[`href`,`/fundamentals/testing#end-to-end-testing`],[`appAnchor`,``,`id`,`delivery-guarantees`],[`appAnchor`,``,`id`,`production-checklist`],[`href`,`/application/task-scheduling#declarative-cron-jobs`],[`appAnchor`,``,`id`,`the-store-contract`],[`appAnchor`,``,`id`,`reference`],[`appAnchor`,``,`id`,`module-options`],[`appAnchor`,``,`id`,`postgresql-and-mysql-stores`],[`appAnchor`,``,`id`,`services-and-decorators`],[`appAnchor`,``,`id`,`transports`],[`href`,`/http/webhooks#testing`],[`appAnchor`,``,`id`,`events`],[`appAnchor`,``,`id`,`errors`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/http/webhooks.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,34,0)(2,`div`,35)(3,`h3`,36),bT(4,`Webhooks`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/webhooks`),cf(),bT(8,` sends signed, retried webhooks to your partners after the transaction commits, and verifies the webhooks you receive on their raw body.`),cf(),Aa(9,`p`),bT(10,`An online store for cat food and supplies sells to cat shelters and resellers that buy in bulk, through its API. Northside Pet Supplies, a reseller, places an order and wants to know when it ships and when it's cancelled, without polling: a webhook to its warehouse system. The store receives webhooks too: the payment provider reports payments, and the carrier reports shipments. Both directions look simple, and both go wrong in the same ways:`),cf(),Aa(11,`ul`)(12,`li`)(13,`strong`),bT(14,`Sending.`),cf(),bT(15,` A `),Aa(16,`code`),bT(17,`fetch()`),cf(),bT(18,` after the order commits is lost when the process dies in between, and sent for a transaction that then rolls back. A retry sends the same event twice without telling the partner so. Every partner writes its own verifier for a homemade signature. A partner that is down for an hour is hammered, a dead endpoint is never turned off, and nobody can answer "did you send it?". And the URL the partner typed is a server-side request forgery waiting to happen: `),Aa(19,`code`),bT(20,`https://169.254.169.254/`),cf(),bT(21,` answers with the cloud credentials.`),cf(),Aa(22,`li`)(23,`strong`),bT(24,`Receiving.`),cf(),bT(25,` The signature is checked on a body the framework parsed and serialized again (a stray space breaks it, and a tampered body can pass), compared with `),Aa(26,`code`),bT(27,`===`),cf(),bT(28,` instead of in constant time, with no timestamp window, and a redelivered event runs the handler twice: an order marked paid twice, or shipped twice.`),cf()(),Aa(29,`p`)(30,`code`),bT(31,`@nestjs/webhooks`),cf(),bT(32,` makes both directions one thing to configure. Outgoing webhooks travel through the `),Aa(33,`a`,37),bT(34,`outbox`),cf(),bT(35,`: `),Aa(36,`code`),bT(37,`webhooks.dispatch()`),cf(),bT(38,` adds the message in the same transaction as the order, and after the commit a worker fans it out to the partner's endpoints, signs each request the way `),Aa(39,`a`,38),bT(40,`Standard Webhooks`),cf(),bT(41,` specifies, retries with backoff for about two days, keeps a log of every attempt, and replays on request. Incoming webhooks are one decorator, `),Aa(42,`code`),bT(43,`@VerifyWebhook()`),cf(),bT(44,`, which checks the signature on the raw body and skips redeliveries.`),cf(),Aa(45,`p`),bT(46,`In this tutorial, you'll add webhooks to the store's order API, on PostgreSQL with Drizzle:`),cf(),Aa(47,`ul`)(48,`li`),bT(49,`Partners subscribe to `),Aa(50,`code`),bT(51,`order.shipped`),cf(),bT(52,` and `),Aa(53,`code`),bT(54,`order.cancelled`),cf(),bT(55,` through the API, and see their secret once.`),cf(),Aa(56,`li`),bT(57,`The API sends the webhooks after the commit, signed, and retries them while a partner is down.`),cf(),Aa(58,`li`),bT(59,`Partners read their delivery log, and ask for a replay.`),cf(),Aa(60,`li`),bT(61,`The API receives the payment provider's payment webhooks (Standard Webhooks) and the carrier's shipment webhooks (Stripe's scheme), verified on the raw body and processed exactly once.`),cf(),Aa(62,`li`),bT(63,`Secrets rotate without a gap, and a URL that points inside the store's network is refused.`),cf()(),Aa(64,`h4`,39)(65,`span`),bT(66,`Installation`),cf()(),Aa(67,`p`),bT(68,`To get started, install the required dependency:`),cf(),Aa(69,`pre`)(70,`code`,40),bT(71,`
$ npm i --save @nestjs/webhooks
`),cf()(),Aa(72,`p`),bT(73,`The tutorial runs on PostgreSQL, through `),Aa(74,`a`,41),bT(75,`Drizzle ORM`),cf(),bT(76,` and `),Aa(77,`a`,42)(78,`code`),bT(79,`@nestjs/drizzle`),cf()(),bT(80,` with the `),Aa(81,`code`),bT(82,`pg`),cf(),bT(83,` driver: the endpoints and the delivery log live in the database the orders live in, on a database server that outlives any instance of the application. Using TypeORM, or MySQL? Follow the tutorial, and see "With TypeORM" and "With MySQL" in `),Aa(84,`a`,43),bT(85,`Keep webhooks in your database`),cf(),bT(86,` for what changes.`),cf(),Aa(87,`p`),bT(88,`Outgoing webhooks are outbox messages, and incoming ones are deduplicated with the outbox's inbox, so the application runs the outbox too (`),Aa(89,`code`),bT(90,`@nestjs/outbox`),cf(),bT(91,`, installed and set up in `),Aa(92,`a`,37),bT(93,`the outbox tutorial`),cf(),bT(94,`).`),cf(),Aa(95,`p`),bT(96,`The example application, the online store's order API, keeps its catalog, the partners that call it, and their orders in three tables of its own, which the later sections read and write. They're the example's data, not something webhooks need: the webhooks' and the outbox's tables belong to their stores, which create them, as `),Aa(97,`a`,43),bT(98,`Keep webhooks in your database`),cf(),bT(99,` shows.`),cf(),Aa(100,`p`)(101,`code`),bT(102,`products`),cf(),bT(103,` is the catalog:`),cf(),Aa(104,`table`)(105,`thead`)(106,`tr`)(107,`th`),bT(108,`Column`),cf(),Aa(109,`th`),bT(110,`Type`),cf(),Aa(111,`th`),bT(112,`Notes`),cf()()(),Aa(113,`tbody`)(114,`tr`)(115,`td`)(116,`code`),bT(117,`id`),cf()(),Aa(118,`td`)(119,`code`),bT(120,`text`),cf()(),Aa(121,`td`),bT(122,`Primary key, such as `),Aa(123,`code`),bT(124,`salmon-kibble-2kg`),cf()()(),Aa(125,`tr`)(126,`td`)(127,`code`),bT(128,`name`),cf()(),Aa(129,`td`)(130,`code`),bT(131,`text`),cf()(),Aa(132,`td`),bT(133,`The display name, such as `),Aa(134,`code`),bT(135,`Salmon kibble, 2 kg`),cf()()(),Aa(136,`tr`)(137,`td`)(138,`code`),bT(139,`price`),cf()(),Aa(140,`td`)(141,`code`),bT(142,`integer`),cf()(),Aa(143,`td`),bT(144,`In cents`),cf()()()(),Aa(145,`p`)(146,`code`),bT(147,`partners`),cf(),bT(148,` holds the cat shelters and resellers that buy in bulk over the API, and receive its webhooks:`),cf(),Aa(149,`table`)(150,`thead`)(151,`tr`)(152,`th`),bT(153,`Column`),cf(),Aa(154,`th`),bT(155,`Type`),cf(),Aa(156,`th`),bT(157,`Notes`),cf()()(),Aa(158,`tbody`)(159,`tr`)(160,`td`)(161,`code`),bT(162,`id`),cf()(),Aa(163,`td`)(164,`code`),bT(165,`text`),cf()(),Aa(166,`td`),bT(167,`Primary key, such as `),Aa(168,`code`),bT(169,`northside`),cf()()(),Aa(170,`tr`)(171,`td`)(172,`code`),bT(173,`name`),cf()(),Aa(174,`td`)(175,`code`),bT(176,`text`),cf()(),Aa(177,`td`),bT(178,`The display name, such as `),Aa(179,`code`),bT(180,`Northside Pet Supplies`),cf()()(),Aa(181,`tr`)(182,`td`)(183,`code`),bT(184,`api_key_hash`),cf()(),Aa(185,`td`)(186,`code`),bT(187,`text`),cf()(),Aa(188,`td`),bT(189,`The SHA-256 of the partner's API key, in hex. Unique`),cf()()()(),Aa(190,`p`)(191,`code`),bT(192,`orders`),cf(),bT(193,` holds the partners' orders, whose `),Aa(194,`code`),bT(195,`status`),cf(),bT(196,` goes from `),Aa(197,`code`),bT(198,`placed`),cf(),bT(199,` to `),Aa(200,`code`),bT(201,`paid`),cf(),bT(202,` and `),Aa(203,`code`),bT(204,`shipped`),cf(),bT(205,`, or to `),Aa(206,`code`),bT(207,`cancelled`),cf(),bT(208,`:`),cf(),Aa(209,`table`)(210,`thead`)(211,`tr`)(212,`th`),bT(213,`Column`),cf(),Aa(214,`th`),bT(215,`Type`),cf(),Aa(216,`th`),bT(217,`Notes`),cf()()(),Aa(218,`tbody`)(219,`tr`)(220,`td`)(221,`code`),bT(222,`id`),cf()(),Aa(223,`td`)(224,`code`),bT(225,`text`),cf()(),Aa(226,`td`),bT(227,`Primary key`),cf()(),Aa(228,`tr`)(229,`td`)(230,`code`),bT(231,`partner_id`),cf()(),Aa(232,`td`)(233,`code`),bT(234,`text`),cf()(),Aa(235,`td`),bT(236,`References `),Aa(237,`code`),bT(238,`partners.id`),cf()()(),Aa(239,`tr`)(240,`td`)(241,`code`),bT(242,`items`),cf()(),Aa(243,`td`)(244,`code`),bT(245,`jsonb`),cf()(),Aa(246,`td`),bT(247,`The order's lines, as a JSON array: each line's `),Aa(248,`code`),bT(249,`productId`),cf(),bT(250,`, `),Aa(251,`code`),bT(252,`quantity`),cf(),bT(253,` and unit `),Aa(254,`code`),bT(255,`price`),cf(),bT(256,` (in cents)`),cf()(),Aa(257,`tr`)(258,`td`)(259,`code`),bT(260,`total`),cf()(),Aa(261,`td`)(262,`code`),bT(263,`integer`),cf()(),Aa(264,`td`),bT(265,`In cents`),cf()(),Aa(266,`tr`)(267,`td`)(268,`code`),bT(269,`status`),cf()(),Aa(270,`td`)(271,`code`),bT(272,`text`),cf()(),Aa(273,`td`)(274,`code`),bT(275,`placed`),cf(),bT(276,`, `),Aa(277,`code`),bT(278,`paid`),cf(),bT(279,`, `),Aa(280,`code`),bT(281,`shipped`),cf(),bT(282,` or `),Aa(283,`code`),bT(284,`cancelled`),cf()()(),Aa(285,`tr`)(286,`td`)(287,`code`),bT(288,`payment_id`),cf()(),Aa(289,`td`)(290,`code`),bT(291,`text`),cf()(),Aa(292,`td`),bT(293,`Nullable: set when the order is paid`),cf()(),Aa(294,`tr`)(295,`td`)(296,`code`),bT(297,`tracking_number`),cf()(),Aa(298,`td`)(299,`code`),bT(300,`text`),cf()(),Aa(301,`td`),bT(302,`Nullable: set when the order is shipped`),cf()()()(),Aa(303,`p`),bT(304,`The other columns aren't nullable.`),cf(),Aa(305,`p`),bT(306,`The catalog has two products, `),Aa(307,`code`),bT(308,`salmon-kibble-2kg`),cf(),bT(309,` at 2499 cents and `),Aa(310,`code`),bT(311,`clumping-litter-10l`),cf(),bT(312,` at 1599 cents, and the two partners have sample API keys (issue real ones from your partner onboarding):`),cf(),Aa(313,`table`)(314,`thead`)(315,`tr`)(316,`th`),bT(317,`Partner`),cf(),Aa(318,`th`)(319,`code`),bT(320,`id`),cf()(),Aa(321,`th`),bT(322,`API key`),cf()()(),Aa(323,`tbody`)(324,`tr`)(325,`td`),bT(326,`Northside Pet Supplies, a reseller`),cf(),Aa(327,`td`)(328,`code`),bT(329,`northside`),cf()(),Aa(330,`td`)(331,`code`),bT(332,`partner_northside_7c1d2e`),cf()()(),Aa(333,`tr`)(334,`td`),bT(335,`Riverside Cat Shelter`),cf(),Aa(336,`td`)(337,`code`),bT(338,`riverside`),cf()(),Aa(339,`td`)(340,`code`),bT(341,`partner_riverside_91ab44`),cf()()()()(),Aa(342,`h4`,44)(343,`span`),bT(344,`Keep webhooks in your database`),cf()(),Aa(345,`p`),bT(346,`There's nothing to create for webhooks, or for the outbox they travel through: no tables, entities or Prisma models. Register their two stores, and each creates its own schema, `),Aa(347,`code`),bT(348,`nest_webhooks`),cf(),bT(349,` and `),Aa(350,`code`),bT(351,`nest_outbox`),cf(),bT(352,`, and migrates it: at startup in development and in tests, and in production with `),Aa(353,`code`),bT(354,`npx @nestjs/webhooks migrate`),cf(),bT(355,` and `),Aa(356,`code`),bT(357,`npx @nestjs/outbox migrate`),cf(),bT(358,`, or with their `),Aa(359,`code`),bT(360,`migrationSql()`),cf(),bT(361,` in your own migrations.`),cf(),Aa(362,`p`),bT(363,`The package keeps the endpoints, with their secrets, the messages it dispatched, their deliveries and the log of every attempt in a `),Aa(364,`strong`),bT(365,`store`),cf(),bT(366,`, which it reads through two contracts, `),Aa(367,`code`),bT(368,`WebhookEndpointStore`),cf(),bT(369,` and `),Aa(370,`code`),bT(371,`WebhookDeliveryStore`),cf(),bT(372,`. Until you register one, the module keeps them in memory: fine for a first run, but a restart loses every pending delivery, and two instances don't share them.`),cf(),Aa(373,`blockquote`,45)(374,`strong`),bT(375,`Warning`),cf(),bT(376,` With `),Aa(377,`code`),bT(378,`NODE_ENV=production`),cf(),bT(379,` and no store registered, startup fails, unless you set `),Aa(380,`code`),bT(381,`allowInMemoryStorage: true`),cf(),bT(382,`.
`),cf(),Aa(383,`p`),bT(384,`On PostgreSQL, register the package's store, `),Aa(385,`code`),bT(386,`PostgresWebhookStore`),cf(),bT(387,` from `),Aa(388,`code`),bT(389,`@nestjs/webhooks/postgres`),cf(),bT(390,`. The outbox needs one too, for the messages that carry dispatched webhooks out of your transaction and for the inbox that deduplicates incoming ones: `),Aa(391,`code`),bT(392,`PostgresOutboxStore`),cf(),bT(393,` from `),Aa(394,`code`),bT(395,`@nestjs/outbox/postgres`),cf(),bT(396,`, as in `),Aa(397,`a`,46),bT(398,`the outbox tutorial`),cf(),bT(399,`. Both run their SQL through the database client your application already has, and keep their tables in schemas of their own. They're ordinary providers, registered once, in the root module, next to `),Aa(400,`code`),bT(401,`WebhooksModule`),cf(),bT(402,` and `),Aa(403,`code`),bT(404,`OutboxModule`),cf(),bT(405,`: all four are application-wide. `),Aa(406,`code`),bT(407,`AppModule`),cf(),bT(408,` creates each with a factory that injects the Drizzle database and its package's storage registry, which the store registers itself with:`),cf(),Aa(409,`app-copy-button`,47)(410,`span`,48),bT(411),LT(412,`extension`),Wa(413,`app-tabs`,null,1),cf(),Aa(415,`pre`)(416,`code`,49),bT(417,`
{
  // Outbox messages and the inbox, in your database, in a schema of their own (nest_outbox)
  provide: PostgresOutboxStore,
  inject: [getDrizzleToken(), OutboxStorage],
  useFactory: (db: Database, outboxStorage: OutboxStorage) =>
    new PostgresOutboxStore({ executor: fromDrizzle(db) }, outboxStorage),
},
{
  // Endpoints, deliveries and their log, in your database, in a schema of their own (nest_webhooks)
  provide: PostgresWebhookStore,
  inject: [getDrizzleToken(), WebhooksStorage],
  useFactory: (db: Database, webhooksStorage: WebhooksStorage) =>
    new PostgresWebhookStore({ executor: fromDrizzle(db) }, webhooksStorage),
},
`),cf()()(),Aa(418,`p`)(419,`code`),bT(420,`fromDrizzle(db)`),cf(),bT(421,` is the stores' `),Aa(422,`strong`),bT(423,`executor`),cf(),bT(424,`: it runs their statements through your Drizzle database, whichever driver it uses, such as `),Aa(425,`code`),bT(426,`pg`),cf(),bT(427,` or PGlite. `),Aa(428,`code`),bT(429,`fromPg(pool)`),cf(),bT(430,`, `),Aa(431,`code`),bT(432,`fromTypeOrm(dataSource)`),cf(),bT(433,`, `),Aa(434,`code`),bT(435,`fromPrisma(prisma)`),cf(),bT(436,` and `),Aa(437,`code`),bT(438,`fromKysely(db)`),cf(),bT(439,` do the same for a node-postgres pool, TypeORM, Prisma and Kysely. `),Aa(440,`code`),bT(441,`@nestjs/webhooks/postgres`),cf(),bT(442,` and `),Aa(443,`code`),bT(444,`@nestjs/outbox/postgres`),cf(),bT(445,` both export them, so `),Aa(446,`code`),bT(447,`AppModule`),cf(),bT(448,` imports `),Aa(449,`code`),bT(450,`fromDrizzle`),cf(),bT(451,` once, for both stores. At startup, each module logs the store it uses.`),cf(),Aa(452,`p`)(453,`strong`),bT(454,`The schema.`),cf(),bT(455,` The webhook store keeps its tables in a schema of its own, `),Aa(456,`code`),bT(457,`nest_webhooks`),cf(),bT(458,` (the `),Aa(459,`code`),bT(460,`schema`),cf(),bT(461,` option names another). On MySQL, which has no schemas, they're tables of the connection's database, with the schema's name as their prefix: `),Aa(462,`code`),bT(463,`nest_webhooks_endpoints`),cf(),bT(464,` and so on.`),cf(),Aa(465,`table`)(466,`thead`)(467,`tr`)(468,`th`),bT(469,`Table`),cf(),Aa(470,`th`),bT(471,`What it holds`),cf()()(),Aa(472,`tbody`)(473,`tr`)(474,`td`)(475,`code`),bT(476,`nest_webhooks.endpoints`),cf()(),Aa(477,`td`),bT(478,`The partners' endpoints: URL, event types, tenant, and secrets`),cf()(),Aa(479,`tr`)(480,`td`)(481,`code`),bT(482,`nest_webhooks.messages`),cf()(),Aa(483,`td`),bT(484,`What was dispatched, byte for byte`),cf()(),Aa(485,`tr`)(486,`td`)(487,`code`),bT(488,`nest_webhooks.deliveries`),cf()(),Aa(489,`td`),bT(490,`One per message and endpoint, with its status, attempts and lease`),cf()(),Aa(491,`tr`)(492,`td`)(493,`code`),bT(494,`nest_webhooks.delivery_attempts`),cf()(),Aa(495,`td`),bT(496,`The log: every attempt, with the status code, the response and how long it took`),cf()(),Aa(497,`tr`)(498,`td`)(499,`code`),bT(500,`nest_webhooks.migrations`),cf()(),Aa(501,`td`),bT(502,`The versions of the store's schema applied`),cf()()()(),Aa(503,`p`),bT(504,`The outbox's store keeps its messages, dead letters and inbox in `),Aa(505,`code`),bT(506,`nest_outbox`),cf(),bT(507,` (`),Aa(508,`code`),bT(509,`nest_outbox_messages`),cf(),bT(510,` and so on, on MySQL), as in `),Aa(511,`a`,46),bT(512,`the outbox tutorial`),cf(),bT(513,`. They belong to the stores: your migrations don't create them, and your own tables can't collide with them. A few choices in there matter to the package:`),cf(),Aa(514,`ul`)(515,`li`),bT(516,`An endpoint's secrets are a JSON array, newest first: during a rotation, the old secret stays for the overlap, with an expiry. With `),Aa(517,`code`),bT(518,`encryption`),cf(),bT(519,` configured (see `),Aa(520,`a`,50),bT(521,`Register the modules`),cf(),bT(522,`), what is stored is sealed.`),cf(),Aa(523,`li`),bT(524,`A message's `),Aa(525,`code`),bT(526,`body`),cf(),bT(527,` is `),Aa(528,`code`),bT(529,`text`),cf(),bT(530,`, not `),Aa(531,`code`),bT(532,`jsonb`),cf(),bT(533,`. It is the exact JSON that was signed and sent, and `),Aa(534,`code`),bT(535,`jsonb`),cf(),bT(536,` would reformat it: a partner storing the request and its signature could no longer verify a replay.`),cf(),Aa(537,`li`),bT(538,`A delivery is unique per message and endpoint. The fan-out that creates deliveries runs after the commit, inside the outbox, so it can run twice; the unique key makes the second run insert nothing.`),cf(),Aa(539,`li`),bT(540,`No foreign key from a delivery to its endpoint: a deleted endpoint's log stays. Attempts go with their delivery.`),cf(),Aa(541,`li`),bT(542,`Times are epoch milliseconds (`),Aa(543,`code`),bT(544,`bigint`),cf(),bT(545,`), from the package's clock, never the database's.`),cf()(),Aa(546,`p`)(547,`strong`),bT(548,`Migrations.`),cf(),bT(549,` The packages ship their schemas as versioned migrations, and the stores apply them themselves. With the `),Aa(550,`code`),bT(551,`migrate`),cf(),bT(552,` option, each applies the ones its schema hasn't had yet at startup, before the relay and the worker run, in one transaction that holds an advisory lock: of several instances that start together, one migrates, and the others find nothing left to do. `),Aa(553,`code`),bT(554,`migrate`),cf(),bT(555,` defaults to `),Aa(556,`code`),bT(557,`true`),cf(),bT(558,`, except with `),Aa(559,`code`),bT(560,`NODE_ENV=production`),cf(),bT(561,`. So in development and in tests, the stores create their schemas on the first start, and your migrations only create your own tables.`),cf(),Aa(562,`p`),bT(563,`In production, apply the migrations before the new version of your application starts, as you apply your own, so that no instance changes a schema while it boots: in the middle of a rolling deploy, that would lock busy tables, and a least-privilege database user can't do it anyway. The packages' command lines do it from your deploy step, next to `),Aa(564,`code`),bT(565,`npx drizzle-kit migrate`),cf(),bT(566,`. They read the database from `),Aa(567,`code`),bT(568,`DATABASE_URL`),cf(),bT(569,`, or from `),Aa(570,`code`),bT(571,`--url`),cf(),bT(572,`, and need `),Aa(573,`code`),bT(574,`pg`),cf(),bT(575,` installed:`),cf(),Aa(576,`pre`)(577,`code`,40),bT(578,`
$ npx @nestjs/webhooks status
Schema "nest_webhooks" is at version 0; this version of @nestjs/webhooks needs version 1.
$ npx @nestjs/webhooks migrate
Migrated schema "nest_webhooks" to version 1 (applied 1).
$ npx @nestjs/outbox migrate
Migrated schema "nest_outbox" to version 1 (applied 1).
`),cf()(),Aa(579,`p`)(580,`code`),bT(581,`status`),cf(),bT(582,` exits with 1 while the schema is behind, which makes it a check for CI. To apply the migrations with your own migration tool instead, take their SQL from `),Aa(583,`code`),bT(584,`npx @nestjs/webhooks sql`),cf(),bT(585,` and `),Aa(586,`code`),bT(587,`npx @nestjs/outbox sql`),cf(),bT(588,`, or from `),Aa(589,`code`),bT(590,`PostgresWebhookStore.migrationSql()`),cf(),bT(591,` and `),Aa(592,`code`),bT(593,`PostgresOutboxStore.migrationSql()`),cf(),bT(594,` in code: the statements of every migration, with the bookkeeping that records the version. Run each in one transaction, as TypeORM's and Drizzle's migrators do. With TypeORM, that's a migration of your own, next to the ones it generates for your entities:`),cf(),Aa(595,`app-copy-button`,47)(596,`span`,48),bT(597),LT(598,`extension`),Wa(599,`app-tabs`,null,2),cf(),Aa(601,`pre`)(602,`code`,49),bT(603,`
import { PostgresOutboxStore } from '@nestjs/outbox/postgres';
import { PostgresWebhookStore } from '@nestjs/webhooks/postgres';
import type { MigrationInterface, QueryRunner } from 'typeorm';

export class WebhookStores1790801311590 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(PostgresOutboxStore.migrationSql());
    await queryRunner.query(PostgresWebhookStore.migrationSql());
  }

  async down(): Promise<void> {
    throw new Error('The webhook and outbox stores have no down migrations.');
  }
}
`),cf()()(),Aa(604,`p`),bT(605,`With drizzle-kit, create a custom migration per store, and fill the file each creates with its SQL, a `),Aa(606,`code`),bT(607,`--> statement-breakpoint`),cf(),bT(608,` line between the statements: Drizzle's migrator then runs them one at a time, which PGlite requires. In code, `),Aa(609,`code`),bT(610,`migrationSql()`),cf(),bT(611,` with `),Aa(612,`code`),bT(613,`statementBreakpoints: true`),cf(),bT(614,` returns the same.`),cf(),Aa(615,`pre`)(616,`code`,40),bT(617,`
$ npx drizzle-kit generate --custom --name=outbox
$ npx @nestjs/outbox sql --statement-breakpoints > drizzle/20261103120000_outbox/migration.sql
$ npx drizzle-kit generate --custom --name=webhooks
$ npx @nestjs/webhooks sql --statement-breakpoints > drizzle/20261103120100_webhooks/migration.sql
`),cf()(),Aa(618,`p`),bT(619,`On MySQL, the stores' `),Aa(620,`code`),bT(621,`migrationStatements()`),cf(),bT(622,` return the statements one per string, and a TypeORM migration runs them one per call:`),cf(),Aa(623,`app-copy-button`,47)(624,`span`,48),bT(625),LT(626,`extension`),Wa(627,`app-tabs`,null,3),cf(),Aa(629,`pre`)(630,`code`,49),bT(631,`
for (const statement of [...MySqlOutboxStore.migrationStatements(), ...MySqlWebhookStore.migrationStatements()]) {
  await queryRunner.query(statement);
}
`),cf()()(),Aa(632,`p`),bT(633,`With `),Aa(634,`code`),bT(635,`migrate`),cf(),bT(636,` off, a store whose schema is behind fails the startup with a `),Aa(637,`code`),bT(638,`WebhookSchemaError`),cf(),bT(639,` (the outbox's store, with an `),Aa(640,`code`),bT(641,`OutboxSchemaError`),cf(),bT(642,`) that names these three ways, and fails every call the same way until the schema catches up, which it notices without a restart. During a rolling deploy, the previous version of your application keeps running on a schema that the new one migrated. There are no down migrations.`),cf(),Aa(643,`p`)(644,`strong`),bT(645,`Transactions.`),cf(),bT(646,` No method of the webhook store takes your transaction. `),Aa(647,`code`),bT(648,`webhooks.dispatch(tx, ...)`),cf(),bT(649,` adds the message to the outbox in your transaction, through the outbox's store, and `),Aa(650,`code`),bT(651,`webhook.processInTransaction(tx, ...)`),cf(),bT(652,` records an incoming webhook in the outbox's inbox the same way; the fan-out after the commit, the worker and everything else run on the stores' own connections. With Drizzle, `),Aa(653,`code`),bT(654,`tx`),cf(),bT(655,` is what `),Aa(656,`code`),bT(657,`db.transaction()`),cf(),bT(658,` hands its callback, as the next sections show. The outbox's store refuses the database itself, whose statements would commit on their own, with an `),Aa(659,`code`),bT(660,`OutboxTransactionRequiredError`),cf(),bT(661,` that says what to pass. With the other executors, pass a node-postgres client after `),Aa(662,`code`),bT(663,`BEGIN`),cf(),bT(664,` (not the pool), TypeORM's `),Aa(665,`code`),bT(666,`EntityManager`),cf(),bT(667,` from `),Aa(668,`code`),bT(669,`dataSource.transaction()`),cf(),bT(670,`, Prisma's interactive transaction client, or a Kysely transaction.`),cf(),Aa(671,`p`)(672,`strong`),bT(673,`Isolation.`),cf(),bT(674,` The stores rely on READ COMMITTED, PostgreSQL's default isolation level: their statements race each other, and under a stricter level they would fail with serialization errors. At startup, each checks the database's `),Aa(675,`code`),bT(676,`default_transaction_isolation`),cf(),bT(677,`, and fails if it's stricter. Your own transactions may run at any level. Under REPEATABLE READ or SERIALIZABLE, though, a copy of an incoming webhook that `),Aa(678,`code`),bT(679,`processInTransaction()`),cf(),bT(680,` handles in your transaction, racing the first one's commit, fails with PostgreSQL's serialization error instead of being skipped as a duplicate: the sender gets an error, and its retry finds the webhook recorded.`),cf(),Aa(681,`p`)(682,`strong`),bT(683,`With TypeORM.`),cf(),Aa(684,`code`),bT(685,`TypeOrmModule`),cf(),bT(686,` takes the place of `),Aa(687,`code`),bT(688,`DrizzleModule`),cf(),bT(689,` in `),Aa(690,`code`),bT(691,`AppModule`),cf(),bT(692,`, and both stores run on the `),Aa(693,`code`),bT(694,`DataSource`),cf(),bT(695,` it provides, through `),Aa(696,`code`),bT(697,`fromTypeOrm()`),cf(),bT(698,`:`),cf(),Aa(699,`app-copy-button`,47)(700,`span`,48),bT(701),LT(702,`extension`),Wa(703,`app-tabs`,null,4),cf(),Aa(705,`pre`)(706,`code`,49),bT(707,`
{
  // Outbox messages and the inbox, in your database, in a schema of their own (nest_outbox)
  provide: PostgresOutboxStore,
  inject: [DataSource, OutboxStorage],
  useFactory: (dataSource: DataSource, outboxStorage: OutboxStorage) =>
    new PostgresOutboxStore({ executor: fromTypeOrm(dataSource) }, outboxStorage),
},
{
  // Endpoints, deliveries and their log, in your database, in a schema of their own (nest_webhooks)
  provide: PostgresWebhookStore,
  inject: [DataSource, WebhooksStorage],
  useFactory: (dataSource: DataSource, webhooksStorage: WebhooksStorage) =>
    new PostgresWebhookStore({ executor: fromTypeOrm(dataSource) }, webhooksStorage),
},
`),cf()()(),Aa(708,`p`),bT(709,`Where the tutorial passes Drizzle's `),Aa(710,`code`),bT(711,`tx`),cf(),bT(712,` to `),Aa(713,`code`),bT(714,`dispatch()`),cf(),bT(715,` and `),Aa(716,`code`),bT(717,`processInTransaction()`),cf(),bT(718,`, pass the `),Aa(719,`code`),bT(720,`EntityManager`),cf(),bT(721,` that `),Aa(722,`code`),bT(723,`dataSource.transaction()`),cf(),bT(724,` hands its callback, and inject `),Aa(725,`code`),bT(726,`Webhooks<EntityManager>`),cf(),bT(727,`. The outbox's store refuses `),Aa(728,`code`),bT(729,`dataSource.manager`),cf(),bT(730,`, whose writes would commit on their own. This is the order service's `),Aa(731,`code`),bT(732,`cancelOrder()`),cf(),bT(733,`, from `),Aa(734,`a`,51),bT(735,`Send order.shipped and order.cancelled after the commit`),cf(),bT(736,`, with TypeORM:`),cf(),Aa(737,`app-copy-button`,47)(738,`span`,48),bT(739),LT(740,`extension`),Wa(741,`app-tabs`,null,5),cf(),Aa(743,`pre`)(744,`code`,49),bT(745,`
const order = await this.dataSource.transaction(async (manager) => {
  const row = await manager.findOne(OrderEntity, { where: { id, partnerId: partner.id }, lock: { mode: 'pessimistic_write' } });
  if (!row) {
    throw new NotFoundException(\`Order \${id} not found\`);
  }
  if (row.status === 'shipped' || row.status === 'cancelled') {
    throw new ConflictException(\`Order \${id} is \${row.status}\`);
  }
  await manager.update(OrderEntity, id, { status: 'cancelled' });

  // The transaction's EntityManager: the webhook is sent only if the cancellation commits.
  const data: OrderCancelled = { orderId: id, reason };
  await this.webhooks.dispatch(manager, { type: 'order.cancelled', tenant: row.partnerId, data });
  return { ...row, status: 'cancelled' as const };
});
`),cf()()(),Aa(746,`p`),bT(747,`Your entities and their migrations stay as they are: `),Aa(748,`code`),bT(749,`migration:generate`),cf(),bT(750,` compares only your entities with the database, and leaves the stores' schemas alone.`),cf(),Aa(751,`p`)(752,`strong`),bT(753,`With MySQL.`),cf(),bT(754,` On MySQL 8.4 or 9.x, import the stores and the executor from `),Aa(755,`code`),bT(756,`@nestjs/outbox/mysql`),cf(),bT(757,` and `),Aa(758,`code`),bT(759,`@nestjs/webhooks/mysql`),cf(),bT(760,` instead. The providers are the same, with `),Aa(761,`code`),bT(762,`MySqlOutboxStore`),cf(),bT(763,` and `),Aa(764,`code`),bT(765,`MySqlWebhookStore`),cf(),bT(766,`, on a Drizzle database of `),Aa(767,`code`),bT(768,`drizzle-orm/mysql2`),cf(),bT(769,`:`),cf(),Aa(770,`app-copy-button`,47)(771,`span`,48),bT(772),LT(773,`extension`),Wa(774,`app-tabs`,null,6),cf(),Aa(776,`pre`)(777,`code`,49),bT(778,`
import { MySqlOutboxStore } from '@nestjs/outbox/mysql';
import { fromDrizzle, MySqlWebhookStore } from '@nestjs/webhooks/mysql';
import { drizzle } from 'drizzle-orm/mysql2';
// ...
DrizzleModule.forRootAsync({
  // Drizzle on MySQL: a mysql2 pool on DATABASE_URL (mysql://), whose database holds the stores' tables too
  useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL! }),
}),
// ...
{
  // Outbox messages and the inbox, in your database, in tables of their own (nest_outbox_*)
  provide: MySqlOutboxStore,
  inject: [getDrizzleToken(), OutboxStorage],
  useFactory: (db: Database, outboxStorage: OutboxStorage) =>
    new MySqlOutboxStore({ executor: fromDrizzle(db) }, outboxStorage),
},
{
  // Endpoints, deliveries and their log, in your database, in tables of their own (nest_webhooks_*)
  provide: MySqlWebhookStore,
  inject: [getDrizzleToken(), WebhooksStorage],
  useFactory: (db: Database, webhooksStorage: WebhooksStorage) =>
    new MySqlWebhookStore({ executor: fromDrizzle(db) }, webhooksStorage),
},
`),cf()()(),Aa(779,`p`),bT(780,`With the other clients, the executor is `),Aa(781,`code`),bT(782,`fromMysql2(pool)`),cf(),bT(783,` for a `),Aa(784,`code`),bT(785,`mysql2/promise`),cf(),bT(786,` pool, `),Aa(787,`code`),bT(788,`fromTypeOrm(dataSource)`),cf(),bT(789,` for a `),Aa(790,`code`),bT(791,`DataSource`),cf(),bT(792,` of type `),Aa(793,`code`),bT(794,`mysql`),cf(),bT(795,`, `),Aa(796,`code`),bT(797,`fromPrisma(prisma)`),cf(),bT(798,` for Prisma through `),Aa(799,`code`),bT(800,`@prisma/adapter-mariadb`),cf(),bT(801,`, or `),Aa(802,`code`),bT(803,`fromKysely(db)`),cf(),bT(804,` for Kysely's `),Aa(805,`code`),bT(806,`MysqlDialect`),cf(),bT(807,`. What differs from PostgreSQL:`),cf(),Aa(808,`ul`)(809,`li`)(810,`strong`),bT(811,`Tables, not a schema.`),cf(),bT(812,` MySQL has no schemas inside a database, so the stores keep their tables in the connection's database, the one in the URL's path, next to yours, and `),Aa(813,`code`),bT(814,`schema`),cf(),bT(815,` becomes their prefix: `),Aa(816,`code`),bT(817,`nest_webhooks_endpoints`),cf(),bT(818,`, `),Aa(819,`code`),bT(820,`nest_webhooks_deliveries`),cf(),bT(821,` and so on, and `),Aa(822,`code`),bT(823,`nest_outbox_messages`),cf(),bT(824,` for the outbox. It takes lowercase letters, digits and underscores, at most 40 characters.`),cf(),Aa(825,`li`)(826,`strong`),bT(827,`Your transactions.`),cf(),Aa(828,`code`),bT(829,`dispatch()`),cf(),bT(830,` and `),Aa(831,`code`),bT(832,`processInTransaction()`),cf(),bT(833,` work at REPEATABLE READ, MySQL's default, as at READ COMMITTED: there's nothing to configure, and the stores don't check the database's default. When MySQL breaks a deadlock in your transaction (error 1213), it rolls the whole transaction back, and the client's error reaches your code: run the transaction again. The stores run their own transactions again themselves. With `),Aa(834,`code`),bT(835,`processInTransaction()`),cf(),bT(836,`, that can happen when copies of one webhook arrive at once and the first one's transaction rolls back: the sender gets an error, and its retry goes through.`),cf(),Aa(837,`li`)(838,`strong`),bT(839,`Keys are bounded.`),cf(),bT(840,` Ids and tenants are indexed columns: at most 255 characters, 256 for a tenant, which the package's own ids and its limit on `),Aa(841,`code`),bT(842,`tenant`),cf(),bT(843,` stay within. An incoming webhook's id goes into the inbox's key, of at most 255 characters too, and the verifier refuses a longer id on every database, with a 401, before the handler runs.`),cf(),Aa(844,`li`)(845,`strong`),bT(846,`Migrations aren't one transaction.`),cf(),bT(847,` MySQL commits each DDL statement on its own, so `),Aa(848,`code`),bT(849,`migrate`),cf(),bT(850,` applies the statements one at a time, under a lock (`),Aa(851,`code`),bT(852,`GET_LOCK()`),cf(),bT(853,`), and a run that failed resumes at the statement it stopped at. Your own tool must send one statement per call too, as the TypeORM migration in `),Aa(854,`strong`),bT(855,`Migrations`),cf(),bT(856,` above does. The command lines take a `),Aa(857,`code`),bT(858,`mysql://`),cf(),bT(859,` URL, and `),Aa(860,`code`),bT(861,`sql --dialect mysql`),cf(),bT(862,` prints MySQL's SQL: add `),Aa(863,`code`),bT(864,`--statement-breakpoints`),cf(),bT(865,` for a drizzle-kit custom migration, since its MySQL migrator sends one statement per breakpoint.`),cf(),Aa(866,`li`)(867,`strong`),bT(868,`The server.`),cf(),bT(869,` The stores check it at startup, and refuse MariaDB, a connection without a database, and a `),Aa(870,`code`),bT(871,`sql_mode`),cf(),bT(872,` that isn't strict (MySQL's default is). Keep `),Aa(873,`code`),bT(874,`NO_BACKSLASH_ESCAPES`),cf(),bT(875,` out of it too.`),cf()(),Aa(876,`p`),bT(877,`For another database, write a store of your own: `),Aa(878,`a`,52),bT(879,`The store contract`),cf(),bT(880,` says what it must do.`),cf(),Aa(881,`h4`,53)(882,`span`),bT(883,`Register the modules`),cf()(),Aa(884,`p`),bT(885,`Register `),Aa(886,`code`),bT(887,`OutboxModule`),cf(),bT(888,` and `),Aa(889,`code`),bT(890,`WebhooksModule`),cf(),bT(891,` in the root module, next to `),Aa(892,`code`),bT(893,`DrizzleModule`),cf(),bT(894,`, which registers the Drizzle database, with both stores in its `),Aa(895,`code`),bT(896,`providers`),cf(),bT(897,`. The feature modules are built in the next sections:`),cf(),Aa(898,`app-copy-button`,47)(899,`span`,48),bT(900),LT(901,`extension`),Wa(902,`app-tabs`,null,7),cf(),Aa(904,`pre`)(905,`code`,49),bT(906,`
import { Module } from '@nestjs/common';
import { DrizzleModule, getDrizzleToken } from '@nestjs/drizzle';
import { OutboxModule, OutboxStorage } from '@nestjs/outbox';
import { PostgresOutboxStore } from '@nestjs/outbox/postgres';
import { WebhooksModule, WebhooksStorage } from '@nestjs/webhooks';
import { fromDrizzle, PostgresWebhookStore } from '@nestjs/webhooks/postgres';
import { drizzle } from 'drizzle-orm/node-postgres';
import type { Database } from './database/drizzle.js';
import * as schema from './database/schema.js';
import { OrdersModule } from './orders/orders.module.js';
import { PartnerWebhooksModule } from './partner-webhooks/partner-webhooks.module.js';

@Module({
  imports: [
    // A pg pool on DATABASE_URL, closed in onApplicationShutdown(), after the relay and the
    // worker drained. The services inject it with @InjectDrizzle(), the stores' factories too.
    DrizzleModule.forRootAsync({
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL!, schema }),
    }),
    // Outgoing webhooks travel through the outbox: dispatched in the order's transaction,
    // handed to the webhooks worker after the commit.
    OutboxModule.forRootAsync({
      useFactory: () => ({
        relay: { enabled: process.env.OUTBOX_RELAY !== 'off', pollInterval: '1s' },
      }),
    }),
    WebhooksModule.forRootAsync({
      useFactory: () => ({
        // The types partners may subscribe to; dispatch() refuses any other.
        eventTypes: ['order.shipped', 'order.cancelled'],
        // Ten attempts: 5s, 20s, 80s, ... capped at a day, about two days in all.
        retry: { attempts: 10, backoff: { delay: '5s', factor: 4, maxDelay: '1d' } },
        // An endpoint that fails every attempt for five days is switched off.
        disableEndpointAfter: '5d',
        delivery: {
          timeout: '15s',
          // Development only: deliver over http:// and to this machine. Without it, only
          // public https:// endpoints are accepted.
          allowHttp: process.env.WEBHOOKS_ALLOW_LOCAL === '1',
          allowPrivateNetworks: process.env.WEBHOOKS_ALLOW_LOCAL === '1',
        },
        worker: { enabled: process.env.WEBHOOKS_WORKER !== 'off', pollInterval: '1s' },
        // Endpoint secrets at rest: the first key encrypts, every key decrypts.
        encryption: process.env.WEBHOOKS_ENCRYPTION_KEYS
          ? { keys: process.env.WEBHOOKS_ENCRYPTION_KEYS.split(',').map((key) => key.trim()) }
          : undefined,
      }),
    }),
    OrdersModule,
    PartnerWebhooksModule,
  ],
  providers: [
    {
      // Outbox messages and the inbox, in your database, in a schema of their own (nest_outbox)
      provide: PostgresOutboxStore,
      inject: [getDrizzleToken(), OutboxStorage],
      useFactory: (db: Database, outboxStorage: OutboxStorage) =>
        new PostgresOutboxStore({ executor: fromDrizzle(db) }, outboxStorage),
    },
    {
      // Endpoints, deliveries and their log, in your database, in a schema of their own (nest_webhooks)
      provide: PostgresWebhookStore,
      inject: [getDrizzleToken(), WebhooksStorage],
      useFactory: (db: Database, webhooksStorage: WebhooksStorage) =>
        new PostgresWebhookStore({ executor: fromDrizzle(db) }, webhooksStorage),
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(907,`p`)(908,`code`),bT(909,`WebhooksModule`),cf(),bT(910,` needs the outbox: `),Aa(911,`code`),bT(912,`dispatch()`),cf(),bT(913,` is an `),Aa(914,`code`),bT(915,`Outbox.add()`),cf(),bT(916,`, and the fan-out that turns a committed message into deliveries is an outbox handler. Without `),Aa(917,`code`),bT(918,`OutboxModule`),cf(),bT(919,`, startup fails and says so. The outbox's `),Aa(920,`code`),bT(921,`relay`),cf(),bT(922,` hands committed messages to the fan-out, polling every second, and `),Aa(923,`code`),bT(924,`OUTBOX_RELAY=off`),cf(),bT(925,` turns it off. The rest of the options, resolved when the application starts:`),cf(),Aa(926,`ul`)(927,`li`)(928,`code`),bT(929,`eventTypes`),cf(),bT(930,`: the message types this application sends. `),Aa(931,`code`),bT(932,`dispatch()`),cf(),bT(933,` refuses any other, and so does an endpoint that tries to subscribe to one, with the known types in the message.`),cf(),Aa(934,`li`)(935,`code`),bT(936,`retry`),cf(),bT(937,`: the vocabulary shared with the outbox, the HTTP client and resilience. Ten attempts, and a backoff that starts at 5 seconds, grows fourfold and is capped at a day, with jitter: what the Standard Webhooks spec recommends, "a retry schedule spanning multiple days".`),cf(),Aa(938,`li`)(939,`code`),bT(940,`disableEndpointAfter`),cf(),bT(941,`: an endpoint that has failed every attempt for five days without a single success is switched off, and its owner is told (see `),Aa(942,`a`,54),bT(943,`Retries, the delivery log and replay`),cf(),bT(944,`).`),cf(),Aa(945,`li`)(946,`code`),bT(947,`delivery`),cf(),bT(948,`: one attempt has 15 seconds for DNS, the connection, TLS, the request and the response. `),Aa(949,`code`),bT(950,`allowHttp`),cf(),bT(951,` and `),Aa(952,`code`),bT(953,`allowPrivateNetworks`),cf(),bT(954,` are off by default: only public `),Aa(955,`code`),bT(956,`https://`),cf(),bT(957,` endpoints are accepted. `),Aa(958,`code`),bT(959,`WEBHOOKS_ALLOW_LOCAL=1`),cf(),bT(960,` turns them on in development, where the partner's receiver runs on this machine. Cloud metadata addresses stay blocked even then.`),cf(),Aa(961,`li`)(962,`code`),bT(963,`worker`),cf(),bT(964,`: the background deliverer, one per process. `),Aa(965,`code`),bT(966,`WEBHOOKS_WORKER=off`),cf(),bT(967,` turns it off in instances that only serve the API.`),cf(),Aa(968,`li`)(969,`code`),bT(970,`encryption`),cf(),bT(971,`: endpoint secrets sealed at rest, with the family's shape: the first key encrypts, every key decrypts. Optional, from `),Aa(972,`code`),bT(973,`WEBHOOKS_ENCRYPTION_KEYS`),cf(),bT(974,`.`),cf()(),Aa(975,`blockquote`,55)(976,`strong`),bT(977,`Hint`),cf(),bT(978,` The tutorial reads `),Aa(979,`code`),bT(980,`process.env`),cf(),bT(981,` directly, to stay short. In an application, load the environment through `),Aa(982,`a`,56)(983,`code`),bT(984,`@nestjs/config`),cf()(),bT(985,` with a validation schema, so a missing variable stops the application at startup rather than at the first request, and read the values from `),Aa(986,`code`),bT(987,`ConfigService`),cf(),bT(988,` (`),Aa(989,`code`),bT(990,`inject: [ConfigService]`),cf(),bT(991,` in the factories).
`),cf(),Aa(992,`p`),bT(993,`Durations are milliseconds or strings such as `),Aa(994,`code`),bT(995,`'15s'`),cf(),bT(996,` and `),Aa(997,`code`),bT(998,`'5d'`),cf(),bT(999,`. Both modules are global: `),Aa(1e3,`code`),bT(1001,`Webhooks`),cf(),bT(1002,`, `),Aa(1003,`code`),bT(1004,`WebhookEndpoints`),cf(),bT(1005,`, `),Aa(1006,`code`),bT(1007,`WebhookDeliveries`),cf(),bT(1008,`, `),Aa(1009,`code`),bT(1010,`WebhooksEvents`),cf(),bT(1011,` and `),Aa(1012,`code`),bT(1013,`WebhooksStorage`),cf(),bT(1014,` can be injected anywhere. `),Aa(1015,`code`),bT(1016,`main.ts`),cf(),bT(1017,` binds the validation pipe for the partner API's DTOs (see the next section), and enables the shutdown hooks, so a deploy lets the relay and the worker finish their in-flight work:`),cf(),Aa(1018,`app-copy-button`,47)(1019,`span`,48),bT(1020),LT(1021,`extension`),Wa(1022,`app-tabs`,null,8),cf(),Aa(1024,`pre`)(1025,`code`,49),bT(1026,`
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // The partner API's DTOs; whitelist: properties without a decorator are dropped.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // On SIGTERM the outbox relay and the webhook worker finish what they started.
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(1027,`p`),bT(1028,`At startup, both modules log the store they use, and on the first start, the stores log the schemas they created:`),cf(),Aa(1029,`pre`)(1030,`code`,40),bT(1031,`
[Nest] 55905  - 09/30/2026, 6:52:36 PM     LOG [OutboxModule] OutboxStorage: PostgresOutboxStore
[Nest] 55905  - 09/30/2026, 6:52:36 PM     LOG [WebhooksModule] WebhooksStorage: PostgresWebhookStore
[Nest] 55905  - 09/30/2026, 6:52:36 PM     LOG [OutboxModule] PostgresOutboxStore: migrated schema "nest_outbox" to version 1.
[Nest] 55905  - 09/30/2026, 6:52:36 PM     LOG [WebhooksModule] PostgresWebhookStore: migrated schema "nest_webhooks" to version 1.
`),cf()(),Aa(1032,`h4`,57)(1033,`span`),bT(1034,`Let partners subscribe`),cf()(),Aa(1035,`p`),bT(1036,`Shelters and resellers call the partner API with an API key: the example's two partners, Northside Pet Supplies (a reseller) and Riverside Cat Shelter, have the sample keys in `),Aa(1037,`a`,58),bT(1038,`Installation`),cf(),bT(1039,`. `),Aa(1040,`code`),bT(1041,`PartnerGuard`),cf(),bT(1042,` looks the key's hash up and sets the partner on the request, and `),Aa(1043,`code`),bT(1044,`@CurrentPartner()`),cf(),bT(1045,` reads it:`),cf(),Aa(1046,`app-copy-button`,47)(1047,`span`,48),bT(1048),LT(1049,`extension`),Wa(1050,`app-tabs`,null,9),cf(),Aa(1052,`pre`)(1053,`code`,49),bT(1054,`
import {
  createParamDecorator,
  Injectable,
  UnauthorizedException,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { eq } from 'drizzle-orm';
import { createHash } from 'node:crypto';
import type { Database } from '../database/drizzle.js';
import { partners } from '../database/schema.js';

export interface Partner {
  id: string;
  name: string;
}

/** Authenticates a partner by its API key: \`Authorization: Bearer <key>\`. */
@Injectable()
export class PartnerGuard implements CanActivate {
  constructor(@InjectDrizzle() private readonly db: Database) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<{ headers: Record<string, string>; partner?: Partner }>();
    const key = /^Bearer (\\S+)$/.exec(request.headers.authorization ?? '')?.[1];
    if (!key) {
      throw new UnauthorizedException();
    }
    const hash = createHash('sha256').update(key).digest('hex');
    const [partner] = await this.db
      .select({ id: partners.id, name: partners.name })
      .from(partners)
      .where(eq(partners.apiKeyHash, hash));
    if (!partner) {
      throw new UnauthorizedException();
    }
    request.partner = partner;
    return true;
  }
}

/** The partner \`PartnerGuard\` authenticated. */
export const CurrentPartner = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => context.switchToHttp().getRequest<{ partner: Partner }>().partner,
);
`),cf()()(),Aa(1055,`p`),bT(1056,`A subscription is a URL, the event types to receive, and a description; an update sends only what changes. The DTOs check the shape, and leave the URL and the types to the package, which knows what it accepts. Request bodies are validated with whatever the application already uses: every DTO on this page comes twice, as a class with `),Aa(1057,`code`),bT(1058,`class-validator`),cf(),bT(1059,` decorators and as a Zod schema, so pick the style you have and skip the other listing:`),cf(),Aa(1060,`app-copy-button`,47)(1061,`span`,48),bT(1062),LT(1063,`extension`),Wa(1064,`app-tabs`,null,10),cf(),Aa(1066,`pre`)(1067,`code`,49),bT(1068,`
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

/** Body of \`POST /partner/webhook-endpoints\`. The package checks the URL and the types themselves. */
export class CreateEndpointDto {
  @IsString()
  url: string;

  /** \`order.shipped\`, \`order.cancelled\`, or \`*\` for both. */
  @IsArray()
  @IsString({ each: true })
  eventTypes: string[];

  @IsOptional()
  @IsString()
  description?: string;
}

/** Body of \`PATCH /partner/webhook-endpoints/:id\`: only what is sent changes. */
export class UpdateEndpointDto {
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  eventTypes?: string[];

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsBoolean()
  enabled?: boolean;
}
`),cf()()(),Aa(1069,`p`),bT(1070,`The same rules as Zod schemas, whose inferred types replace the classes. Nest 12.1 validates any `),Aa(1071,`a`,59),bT(1072,`Standard Schema`),cf(),bT(1073,` object, from Zod, Valibot or ArkType, through `),Aa(1074,`code`),bT(1075,`StandardSchemaValidationPipe`),cf(),bT(1076,`:`),cf(),Aa(1077,`app-copy-button`,47)(1078,`span`,48),bT(1079),LT(1080,`extension`),Wa(1081,`app-tabs`,null,11),cf(),Aa(1083,`pre`)(1084,`code`,49),bT(1085,`
import { z } from 'zod';

/** Body of \`POST /partner/webhook-endpoints\`. The package checks the URL and the types themselves. */
export const createEndpointSchema = z.object({
  url: z.string(),
  /** \`order.shipped\`, \`order.cancelled\`, or \`*\` for both. */
  eventTypes: z.array(z.string()),
  description: z.string().optional(),
});
export type CreateEndpointDto = z.infer<typeof createEndpointSchema>;

/** Body of \`PATCH /partner/webhook-endpoints/:id\`: only what is sent changes. */
export const updateEndpointSchema = z.object({
  url: z.string().optional(),
  eventTypes: z.array(z.string()).optional(),
  description: z.string().nullable().optional(),
  enabled: z.boolean().optional(),
});
export type UpdateEndpointDto = z.infer<typeof updateEndpointSchema>;
`),cf()()(),Aa(1086,`p`),bT(1087,`The subscription API is a controller over `),Aa(1088,`code`),bT(1089,`WebhookEndpoints`),cf(),bT(1090,`. Every call passes the partner's id as the `),Aa(1091,`strong`),bT(1092,`tenant`),cf(),bT(1093,`: an endpoint is created for that tenant, listed for that tenant, and another partner's endpoint id behaves as if it didn't exist:`),cf(),Aa(1094,`app-copy-button`,47)(1095,`span`,48),bT(1096),LT(1097,`extension`),Wa(1098,`app-tabs`,null,12),cf(),Aa(1100,`pre`)(1101,`code`,49),bT(1102,`
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { WebhookEndpoints } from '@nestjs/webhooks';
import { CurrentPartner, PartnerGuard, type Partner } from '../partners/partner.guard.js';
import { CreateEndpointDto, UpdateEndpointDto } from './webhook-endpoints.dto.js';

/** A partner's subscriptions. Every call is scoped to the partner: another partner's endpoint is a 404. */
@Controller('partner/webhook-endpoints')
@UseGuards(PartnerGuard)
export class WebhookEndpointsController {
  constructor(private readonly webhookEndpoints: WebhookEndpoints) {}

  /** Returns the endpoint and its secret. The secret is shown this once. */
  @Post()
  create(@CurrentPartner() partner: Partner, @Body() dto: CreateEndpointDto) {
    return this.webhookEndpoints.create({
      url: dto.url,
      eventTypes: dto.eventTypes,
      description: dto.description ?? null,
      tenant: partner.id,
    });
  }

  @Get()
  list(@CurrentPartner() partner: Partner) {
    return this.webhookEndpoints.list({ tenant: partner.id });
  }

  @Get(':id')
  async get(@CurrentPartner() partner: Partner, @Param('id') id: string) {
    const endpoint = await this.webhookEndpoints.get(id, { tenant: partner.id });
    if (!endpoint) {
      throw new NotFoundException(\`Webhook endpoint \${id} not found\`);
    }
    return endpoint;
  }

  @Patch(':id')
  update(@CurrentPartner() partner: Partner, @Param('id') id: string, @Body() dto: UpdateEndpointDto) {
    return this.webhookEndpoints.update(id, dto, { tenant: partner.id });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@CurrentPartner() partner: Partner, @Param('id') id: string) {
    await this.webhookEndpoints.delete(id, { tenant: partner.id });
  }

  /** A new secret. The old one keeps signing for 24 hours, so the partner can switch without a gap. */
  @Post(':id/rotate-secret')
  @HttpCode(HttpStatus.OK)
  async rotateSecret(@CurrentPartner() partner: Partner, @Param('id') id: string) {
    return { secret: await this.webhookEndpoints.rotateSecret(id, { tenant: partner.id }) };
  }
}
`),cf()()(),Aa(1103,`p`),bT(1104,`With the Zod schemas, the body parameters declare their schema instead of a class:`),cf(),Aa(1105,`app-copy-button`,47)(1106,`span`,48),bT(1107),LT(1108,`extension`),Wa(1109,`app-tabs`,null,13),cf(),Aa(1111,`pre`)(1112,`code`,49),bT(1113,`
import { createEndpointSchema, updateEndpointSchema, type CreateEndpointDto, type UpdateEndpointDto } from './webhook-endpoints.schemas.js';
// ...
@Post()
create(@CurrentPartner() partner: Partner, @Body({ schema: createEndpointSchema }) dto: CreateEndpointDto) {
  // ...
}

@Patch(':id')
update(@CurrentPartner() partner: Partner, @Param('id') id: string, @Body({ schema: updateEndpointSchema }) dto: UpdateEndpointDto) {
  // ...
}
`),cf()()(),Aa(1114,`blockquote`,55)(1115,`strong`),bT(1116,`Hint`),cf(),bT(1117,` The DTOs are enforced only by a validation pipe: bind `),Aa(1118,`code`),bT(1119,`ValidationPipe`),cf(),bT(1120,` globally, with `),Aa(1121,`code`),bT(1122,`useGlobalPipes()`),cf(),bT(1123,` in `),Aa(1124,`code`),bT(1125,`main.ts`),cf(),bT(1126,` as `),Aa(1127,`a`,50),bT(1128,`Register the modules`),cf(),bT(1129,` does (`),Aa(1130,`code`),bT(1131,`whitelist`),cf(),bT(1132,` drops properties without a decorator), or as an `),Aa(1133,`code`),bT(1134,`APP_PIPE`),cf(),bT(1135,` provider. With the Zod schemas, bind `),Aa(1136,`code`),bT(1137,`StandardSchemaValidationPipe`),cf(),bT(1138,` the same way instead: an application uses one or the other. The `),Aa(1139,`a`,60),bT(1140,`validation`),cf(),bT(1141,` page has the options of each.
`),cf(),Aa(1142,`p`)(1143,`code`),bT(1144,`create()`),cf(),bT(1145,` returns the endpoint with its `),Aa(1146,`code`),bT(1147,`secret`),cf(),bT(1148,`, a Standard Webhooks `),Aa(1149,`code`),bT(1150,`whsec_…`),cf(),bT(1151,` of 32 random bytes, generated here. This API shows it this once: `),Aa(1152,`code`),bT(1153,`list()`),cf(),bT(1154,` and `),Aa(1155,`code`),bT(1156,`get()`),cf(),bT(1157,` never include it, and a partner that lost it rotates. The package keeps the secret, sealed when `),Aa(1158,`code`),bT(1159,`encryption`),cf(),bT(1160,` is set, because it signs with it, and `),Aa(1161,`code`),bT(1162,`getSecret()`),cf(),bT(1163,` reads the current one back, for a "reveal" button behind a fresh sign-in if your API offers one. Endpoints moved from Svix or another Standard Webhooks sender keep their secrets: a migration script passes the partner's existing `),Aa(1164,`code`),bT(1165,`whsec_…`),cf(),bT(1166,` as the `),Aa(1167,`code`),bT(1168,`secret`),cf(),bT(1169,` of `),Aa(1170,`code`),bT(1171,`create()`),cf(),bT(1172,`, so the partner's verifier keeps working, and `),Aa(1173,`code`),bT(1174,`rotateSecret()`),cf(),bT(1175,` takes a given `),Aa(1176,`code`),bT(1177,`secret`),cf(),bT(1178,` the same way. The package checks what the partner submits and throws an `),Aa(1179,`code`),bT(1180,`InvalidWebhookEndpointError`),cf(),bT(1181,` with a 400 status: a URL that isn't `),Aa(1182,`code`),bT(1183,`https://`),cf(),bT(1184,` (or `),Aa(1185,`code`),bT(1186,`http://`),cf(),bT(1187,` with `),Aa(1188,`code`),bT(1189,`allowHttp`),cf(),bT(1190,`), that carries credentials, or whose host is a blocked address, such as `),Aa(1191,`code`),bT(1192,`https://169.254.169.254/latest/meta-data/`),cf(),bT(1193,` or `),Aa(1194,`code`),bT(1195,`https://localhost/`),cf(),bT(1196,`; an event type that isn't in `),Aa(1197,`code`),bT(1198,`eventTypes`),cf(),bT(1199,`. A partner's mistakes come back as 400s, and another partner's ids as 404s, through one filter:`),cf(),Aa(1200,`app-copy-button`,47)(1201,`span`,48),bT(1202),LT(1203,`extension`),Wa(1204,`app-tabs`,null,14),cf(),Aa(1206,`pre`)(1207,`code`,49),bT(1208,`
import { Catch, HttpException, type ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { WebhooksError } from '@nestjs/webhooks';

/**
 * The package's errors carry an HTTP status (400 for an endpoint it refuses, 404 for another
 * partner's endpoint or delivery); this answers with it and the error's message.
 */
@Catch(WebhooksError)
export class WebhooksErrorFilter extends BaseExceptionFilter {
  override catch(error: WebhooksError, host: ArgumentsHost) {
    const status = (error as { status?: number }).status;
    super.catch(status ? new HttpException(error.message, status, { cause: error }) : error, host);
  }
}
`),cf()()(),Aa(1209,`app-copy-button`,47)(1210,`span`,48),bT(1211),LT(1212,`extension`),Wa(1213,`app-tabs`,null,15),cf(),Aa(1215,`pre`)(1216,`code`,49),bT(1217,`
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { WebhookDeliveriesController } from './webhook-deliveries.controller.js';
import { WebhookEndpointsController } from './webhook-endpoints.controller.js';
import { WebhooksErrorFilter } from './webhooks-error.filter.js';

@Module({
  controllers: [WebhookEndpointsController, WebhookDeliveriesController],
  // Turns the package's errors (a refused URL, another partner's endpoint) into 4xx responses.
  providers: [{ provide: APP_FILTER, useClass: WebhooksErrorFilter }],
})
export class PartnerWebhooksModule {}
`),cf()()(),Aa(1218,`p`),bT(1219,`The delivery log's controller, added to this module `),Aa(1220,`a`,54),bT(1221,`later`),cf(),bT(1222,`, gives the partner the other half: what was sent to their endpoints.`),cf(),Aa(1223,`h4`,61)(1224,`span`),bT(1225,`Send order.shipped and order.cancelled after the commit`),cf()(),Aa(1226,`p`)(1227,`code`),bT(1228,`Webhooks.dispatch()`),cf(),bT(1229,` takes your transaction handle first, like `),Aa(1230,`code`),bT(1231,`Outbox.add()`),cf(),bT(1232,`: with Drizzle, the `),Aa(1233,`code`),bT(1234,`tx`),cf(),bT(1235,` that `),Aa(1236,`code`),bT(1237,`db.transaction()`),cf(),bT(1238,` passes its callback, whose type the service gives `),Aa(1239,`code`),bT(1240,`Webhooks<Transaction>`),cf(),bT(1241,`. Cancelling an order updates it and dispatches `),Aa(1242,`code`),bT(1243,`order.cancelled`),cf(),bT(1244,` on the same `),Aa(1245,`code`),bT(1246,`tx`),cf(),bT(1247,`; shipping it (which the carrier triggers, in `),Aa(1248,`a`,62),bT(1249,`Receive the carrier's Stripe-like webhooks`),cf(),bT(1250,`) updates it and dispatches `),Aa(1251,`code`),bT(1252,`order.shipped`),cf(),bT(1253,`. `),Aa(1254,`code`),bT(1255,`tenant`),cf(),bT(1256,` is the partner that placed the order, so only that partner's endpoints receive it:`),cf(),Aa(1257,`app-copy-button`,47)(1258,`span`,48),bT(1259),LT(1260,`extension`),Wa(1261,`app-tabs`,null,16),cf(),Aa(1263,`pre`)(1264,`code`,49),bT(1265,`
@Injectable()
export class OrdersService {
  constructor(
    @InjectDrizzle() private readonly db: Database,
    private readonly webhooks: Webhooks<Transaction>,
  ) {}

  // ...

  /** Cancels an order that hasn't shipped, and tells the partner in the same transaction. */
  async cancelOrder(partner: Partner, id: string, reason: string): Promise<Order> {
    const order = await this.db.transaction(async (tx) => {
      const [row] = await tx
        .select()
        .from(orders)
        .where(and(eq(orders.id, id), eq(orders.partnerId, partner.id)))
        .for('update');
      if (!row) {
        throw new NotFoundException(\`Order \${id} not found\`);
      }
      if (row.status === 'shipped' || row.status === 'cancelled') {
        throw new ConflictException(\`Order \${id} is \${row.status}\`);
      }
      await tx.update(orders).set({ status: 'cancelled' }).where(eq(orders.id, id));

      // Drizzle's tx: the webhook is sent only if the cancellation commits, and only to the
      // partner's own endpoints (the tenant).
      const data: OrderCancelled = { orderId: id, reason };
      await this.webhooks.dispatch(tx, { type: 'order.cancelled', tenant: row.partnerId, data });
      return { ...row, status: 'cancelled' as const };
    });

    this.webhooks.notify(); // deliver now instead of at the next poll
    return order;
  }

  // ...

  /** The carrier picked the order up: marks it shipped and tells the partner, in one transaction (the carrier's webhook). */
  async markShipped(tx: Transaction, orderId: string, trackingNumber: string): Promise<Order> {
    const [row] = await tx.select().from(orders).where(eq(orders.id, orderId)).for('update');
    if (!row) {
      throw new NotFoundException(\`Order \${orderId} not found\`);
    }
    if (row.status !== 'paid') {
      throw new ConflictException(\`Order \${orderId} is \${row.status}, not paid\`);
    }
    await tx.update(orders).set({ status: 'shipped', trackingNumber }).where(eq(orders.id, orderId));

    const data: OrderShipped = { orderId, trackingNumber };
    await this.webhooks.dispatch(tx, { type: 'order.shipped', tenant: row.partnerId, data });
    return { ...row, status: 'shipped', trackingNumber };
  }
}
`),cf()()(),Aa(1266,`p`),bT(1267,`Nothing leaves the process inside the transaction. If it rolls back, the message never existed. If it commits, the outbox relay picks the message up (`),Aa(1268,`code`),bT(1269,`notify()`),cf(),bT(1270,` asks it to do so now instead of at its next poll) and hands it to the package's fan-out, which creates one delivery per enabled endpoint of the tenant that subscribed to the type. The worker then signs and sends each. This is what Northside's server receives, on every attempt of the delivery, with the same `),Aa(1271,`code`),bT(1272,`webhook-id`),cf(),bT(1273,` and the exact body that was serialized at `),Aa(1274,`code`),bT(1275,`dispatch()`),cf(),bT(1276,`:`),cf(),Aa(1277,`pre`)(1278,`code`,63),bT(1279,`
POST /store/webhooks HTTP/1.1
content-type: application/json
user-agent: NestJS-Webhooks/1.0
webhook-id: msg_01a0f33b898e7341950339801ec3319a
webhook-timestamp: 1790787160
webhook-signature: v1,<base64 HMAC-SHA256 of "msg_01a0f33b898e7341950339801ec3319a.1790787160.{the body}">

{"type":"order.shipped","timestamp":"2026-09-30T16:52:40.462Z","data":{"orderId":"1067d04c-0617-44ac-9a29-67297867329e","trackingNumber":"TRK-4471-0001"}}
`),cf()(),Aa(1280,`p`),bT(1281,`The signature is keyed with the endpoint's secret, so the partner can verify it with any Standard Webhooks library. Or with this package: Northside's receiver is a Nest application of its own, with its own root module, that only receives, with `),Aa(1282,`code`),bT(1283,`outgoing: false`),cf(),bT(1284,`, and `),Aa(1285,`code`),bT(1286,`@VerifyWebhook('store')`),cf(),bT(1287,` on its route. `),Aa(1288,`code`),bT(1289,`STORE_WEBHOOK_SECRET`),cf(),bT(1290,` takes a comma-separated list, because the store's `),Aa(1291,`a`,64),bT(1292,`rotation`),cf(),bT(1293,` signs with two secrets for a day:`),cf(),Aa(1294,`app-copy-button`,47)(1295,`span`,48),bT(1296),LT(1297,`extension`),Wa(1298,`app-tabs`,null,17),cf(),Aa(1300,`pre`)(1301,`code`,49),bT(1302,`
import { Module } from '@nestjs/common';
import { OutboxModule } from '@nestjs/outbox';
import { WebhooksModule } from '@nestjs/webhooks';
import { StoreWebhooksController } from './store-webhooks.controller.js';

/**
 * Northside's side: a service that only receives. \`outgoing: false\` leaves out the
 * endpoints, deliveries and worker. The outbox's inbox deduplicates redeliveries by
 * webhook-id; in memory here, on the partner's own database in production (the outbox's
 * store, as in the outbox tutorial's analytics service).
 */
@Module({
  imports: [
    OutboxModule.forRoot({ relay: { enabled: false } }),
    WebhooksModule.forRootAsync({
      outgoing: false,
      useFactory: () => {
        const secrets = process.env.STORE_WEBHOOK_SECRET;
        if (!secrets) {
          throw new Error('Set STORE_WEBHOOK_SECRET to the secret the store gave this endpoint');
        }
        return {
          receivers: {
            // Every listed secret is tried: keep the old one next to the new one while the store rotates.
            store: { scheme: 'standard', secret: secrets.split(',') },
          },
        };
      },
    }),
  ],
  controllers: [StoreWebhooksController],
})
export class AppModule {}
`),cf()()(),Aa(1303,`app-copy-button`,47)(1304,`span`,48),bT(1305),LT(1306,`extension`),Wa(1307,`app-tabs`,null,18),cf(),Aa(1309,`pre`)(1310,`code`,49),bT(1311,`
import { Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { IncomingWebhook, VerifyWebhook } from '@nestjs/webhooks';

/** What the store sends: the Standard Webhooks payload, \`type\`, \`timestamp\` and \`data\`. */
export type StoreEvent =
  | { type: 'order.shipped'; timestamp: string; data: { orderId: string; trackingNumber: string } }
  | { type: 'order.cancelled'; timestamp: string; data: { orderId: string; reason: string } };

@Controller('store')
export class StoreWebhooksController {
  private readonly logger = new Logger(StoreWebhooksController.name);

  @Post('webhooks')
  @HttpCode(HttpStatus.NO_CONTENT)
  @VerifyWebhook('store')
  receive(@IncomingWebhook() webhook: IncomingWebhook<StoreEvent>) {
    const event = webhook.payload;
    if (event.type === 'order.shipped') {
      this.logger.log(\`Order \${event.data.orderId} shipped, tracking \${event.data.trackingNumber} (\${webhook.id})\`);
    } else {
      this.logger.log(\`Order \${event.data.orderId} cancelled: \${event.data.reason} (\${webhook.id})\`);
    }
  }
}
`),cf()()(),Aa(1312,`app-copy-button`,47)(1313,`span`,48),bT(1314),LT(1315,`extension`),Wa(1316,`app-tabs`,null,19),cf(),Aa(1318,`pre`)(1319,`code`,49),bT(1320,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  // rawBody: the signature is checked on the bytes the store signed, not on a re-serialized body.
  const app = await NestFactory.create(AppModule, { rawBody: true });
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 4100);
}
await bootstrap();
`),cf()()(),Aa(1321,`p`),bT(1322,`The partner's `),Aa(1323,`code`),bT(1324,`OutboxModule`),cf(),bT(1325,` provides the inbox that `),Aa(1326,`code`),bT(1327,`@VerifyWebhook()`),cf(),bT(1328,` deduplicates with. It runs in memory here; a real partner registers the outbox's store on its own database, `),Aa(1329,`code`),bT(1330,`PostgresOutboxStore`),cf(),bT(1331,` on PostgreSQL, as the analytics service does in `),Aa(1332,`a`,65),bT(1333,`the outbox tutorial`),cf(),bT(1334,`.`),cf(),Aa(1335,`h4`,66)(1336,`span`),bT(1337,`Retries, the delivery log and replay`),cf()(),Aa(1338,`p`),bT(1339,`A 2xx from the partner is a success. Anything else is a failed attempt: a 5xx, a 4xx, a 3xx (redirects are never followed), a timeout, a refused connection. The worker retries after the backoff, honors a `),Aa(1340,`code`),bT(1341,`Retry-After`),cf(),bT(1342,` header in seconds or as an HTTP date (up to the backoff's cap, a day; any other value is ignored), and on a 429, 502, 503 or 504 pauses that endpoint until then, five seconds without a header: its other deliveries wait without an attempt, so a partner asking for a breather gets one probe, not one per batch, while the other partners' deliveries go on. Three answers end a delivery early: a 410 Gone, which also disables the endpoint (`),Aa(1343,`code`),bT(1344,`gone`),cf(),bT(1345,`); a destination the transport refuses (the subscription checks, run again at every send, because DNS changes); and `),Aa(1346,`code`),bT(1347,`retry.retryIf`),cf(),bT(1348,` saying no. After the last attempt, the delivery is `),Aa(1349,`code`),bT(1350,`failed`),cf(),bT(1351,` with the reason `),Aa(1352,`code`),bT(1353,`exhausted`),cf(),bT(1354,`.`),cf(),Aa(1355,`p`),bT(1356,`An endpoint that fails every attempt for `),Aa(1357,`code`),bT(1358,`disableEndpointAfter`),cf(),bT(1359,` is disabled with the reason `),Aa(1360,`code`),bT(1361,`failing`),cf(),bT(1362,`, and `),Aa(1363,`code`),bT(1364,`WebhooksEvents`),cf(),bT(1365,` emits `),Aa(1366,`code`),bT(1367,`endpoint-disabled`),cf(),bT(1368,`: tell the partner. A success at any point resets the clock. A disabled endpoint, whether by the worker or by the partner (`),Aa(1369,`code`),bT(1370,`enabled: false`),cf(),bT(1371,` in the subscription `),Aa(1372,`code`),bT(1373,`update()`),cf(),bT(1374,`), gets no delivery for anything dispatched while it stays disabled: the fan-out skips it, and nothing creates those deliveries later. A replay doesn't either, because it re-sends deliveries that exist. What does exist are the deliveries that were pending when the endpoint was disabled: they fail with the reason `),Aa(1375,`code`),bT(1376,`endpoint-disabled`),cf(),bT(1377,` when their turn comes, and after re-enabling, the partner can ask for those again, as the failed deliveries they are. Re-enabling forgets the failures, and the endpoint receives what is dispatched from then on.`),cf(),Aa(1378,`p`),bT(1379,`Every attempt is logged: the status code, the duration, the first 4 KB of the response body, the error. The partner reads its own log, and asks for a delivery to be sent again, one or every failed one since an outage began. The bulk retry takes an endpoint and the start of the outage, both optional:`),cf(),Aa(1380,`app-copy-button`,47)(1381,`span`,48),bT(1382),LT(1383,`extension`),Wa(1384,`app-tabs`,null,20),cf(),Aa(1386,`pre`)(1387,`code`,49),bT(1388,`
import { IsISO8601, IsOptional, IsString } from 'class-validator';

/** Body of \`POST /partner/webhook-deliveries/retry\`: every failed delivery since an outage began. */
export class RetryDeliveriesDto {
  /** One endpoint's, or every endpoint's. */
  @IsOptional()
  @IsString()
  endpointId?: string;

  /** Deliveries created at or after this time (ISO 8601): the start of the outage. */
  @IsOptional()
  @IsISO8601()
  since?: string;
}
`),cf()()(),Aa(1389,`app-copy-button`,47)(1390,`span`,48),bT(1391),LT(1392,`extension`),Wa(1393,`app-tabs`,null,21),cf(),Aa(1395,`pre`)(1396,`code`,49),bT(1397,`
import { z } from 'zod';

/** Body of \`POST /partner/webhook-deliveries/retry\`: every failed delivery since an outage began. */
export const retryDeliveriesSchema = z.object({
  /** One endpoint's, or every endpoint's. */
  endpointId: z.string().optional(),
  /** Deliveries created at or after this time (ISO 8601): the start of the outage. */
  since: z.iso.datetime().optional(),
});
export type RetryDeliveriesDto = z.infer<typeof retryDeliveriesSchema>;
`),cf()()(),Aa(1398,`app-copy-button`,47)(1399,`span`,48),bT(1400),LT(1401,`extension`),Wa(1402,`app-tabs`,null,22),cf(),Aa(1404,`pre`)(1405,`code`,49),bT(1406,`
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { WebhookDeliveries, type WebhookDeliveryStatus } from '@nestjs/webhooks';
import { CurrentPartner, PartnerGuard, type Partner } from '../partners/partner.guard.js';
import { RetryDeliveriesDto } from './webhook-deliveries.dto.js';

/** A partner's delivery log: what was sent, how each attempt went, and a way to ask for it again. */
@Controller('partner/webhook-deliveries')
@UseGuards(PartnerGuard)
export class WebhookDeliveriesController {
  constructor(private readonly webhookDeliveries: WebhookDeliveries) {}

  /** Newest first. */
  @Get()
  list(
    @CurrentPartner() partner: Partner,
    @Query('endpointId') endpointId?: string,
    @Query('status') status?: WebhookDeliveryStatus,
    @Query('type') type?: string,
  ) {
    return this.webhookDeliveries.list({ tenant: partner.id, endpointId, status, type });
  }

  /** The delivery, the message that was sent, and every attempt: status code, duration, the start of the response. */
  @Get(':id')
  async get(@CurrentPartner() partner: Partner, @Param('id') id: string) {
    const delivery = await this.webhookDeliveries.get(id, { tenant: partner.id });
    if (!delivery) {
      throw new NotFoundException(\`Webhook delivery \${id} not found\`);
    }
    return delivery;
  }

  /** Sends one delivery again, now, with the same webhook-id: a replay of a lost webhook, or a retry of a failed one. */
  @Post(':id/retry')
  @HttpCode(HttpStatus.OK)
  async retry(@CurrentPartner() partner: Partner, @Param('id') id: string) {
    return { retried: await this.webhookDeliveries.retry(id, { tenant: partner.id }) };
  }

  /** Retries every failed delivery, of one endpoint or all, since an outage began. */
  @Post('retry')
  @HttpCode(HttpStatus.OK)
  async retryFailed(@CurrentPartner() partner: Partner, @Body() dto: RetryDeliveriesDto) {
    const since = dto.since === undefined ? undefined : new Date(dto.since);
    const retried = await this.webhookDeliveries.retry(
      { endpointId: dto.endpointId, status: 'failed', since },
      { tenant: partner.id },
    );
    return { retried };
  }
}
`),cf()()(),Aa(1407,`p`),bT(1408,`With the Zod schema:`),cf(),Aa(1409,`app-copy-button`,47)(1410,`span`,48),bT(1411),LT(1412,`extension`),Wa(1413,`app-tabs`,null,23),cf(),Aa(1415,`pre`)(1416,`code`,49),bT(1417,`
import { retryDeliveriesSchema, type RetryDeliveriesDto } from './webhook-deliveries.schemas.js';
// ...
@Post('retry')
@HttpCode(HttpStatus.OK)
async retryFailed(@CurrentPartner() partner: Partner, @Body({ schema: retryDeliveriesSchema }) dto: RetryDeliveriesDto) {
  // ...
}
`),cf()()(),Aa(1418,`p`),bT(1419,`A retry starts a new round: `),Aa(1420,`code`),bT(1421,`attempts`),cf(),bT(1422,` back to 0, sent now, with the same `),Aa(1423,`code`),bT(1424,`webhook-id`),cf(),bT(1425,` and the same body. The log of the earlier rounds stays. Because the id is the same, a partner whose inbox kept it answers 2xx without running its handler, so a replay is safe for a delivered webhook too: Northside can ask for the last hour again after losing its own database, and get only what it hasn't processed.`),cf(),Aa(1426,`p`),bT(1427,`Operators get the same through `),Aa(1428,`code`),bT(1429,`WebhookDeliveries`),cf(),bT(1430,` without a tenant: `),Aa(1431,`code`),bT(1432,`stats()`),cf(),bT(1433,` (pending, due, leased and failed counts, and `),Aa(1434,`code`),bT(1435,`lagMs`),cf(),bT(1436,`, how long the most overdue delivery has waited, the number to alert on), `),Aa(1437,`code`),bT(1438,`retry()`),cf(),bT(1439,` across tenants, and `),Aa(1440,`code`),bT(1441,`prune('30d')`),cf(),bT(1442,`, which nothing calls for you. `),Aa(1443,`code`),bT(1444,`WebhooksEvents.events$`),cf(),bT(1445,` emits `),Aa(1446,`code`),bT(1447,`delivered`),cf(),bT(1448,`, `),Aa(1449,`code`),bT(1450,`retry-scheduled`),cf(),bT(1451,`, `),Aa(1452,`code`),bT(1453,`delivery-failed`),cf(),bT(1454,`, `),Aa(1455,`code`),bT(1456,`endpoint-disabled`),cf(),bT(1457,` and `),Aa(1458,`code`),bT(1459,`destination-blocked`),cf(),bT(1460,`, each also on a `),Aa(1461,`code`),bT(1462,`node:diagnostics_channel`),cf(),bT(1463,` channel named `),Aa(1464,`code`),bT(1465,`nestjs:webhooks:<event>`),cf(),bT(1466,`.`),cf(),Aa(1467,`h4`,67)(1468,`span`),bT(1469,`Receive the payment provider's webhooks`),cf()(),Aa(1470,`p`),bT(1471,`The payment provider tells the store that a payment went through with a Standard Webhooks request. Verifying it needs the body exactly as the provider signed it, so the application is created with `),Aa(1472,`code`),bT(1473,`rawBody: true`),cf(),bT(1474,`. That works on Express and on Fastify:`),cf(),Aa(1475,`app-copy-button`,47)(1476,`span`,48),bT(1477),LT(1478,`extension`),Wa(1479,`app-tabs`,null,24),cf(),Aa(1481,`pre`)(1482,`code`,49),bT(1483,`
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  // rawBody: incoming webhooks are verified on the bytes that were signed, not on a re-serialized body.
  const app = await NestFactory.create(AppModule, { rawBody: true });
  // The partner API's DTOs; whitelist: properties without a decorator are dropped.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // On SIGTERM the outbox relay and the webhook worker finish what they started.
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(1484,`p`),bT(1485,`The sender goes into the module's `),Aa(1486,`code`),bT(1487,`receivers`),cf(),bT(1488,`, by the name the route will use. The payment provider's secret is the one it shows in its dashboard:`),cf(),Aa(1489,`app-copy-button`,47)(1490,`span`,48),bT(1491),LT(1492,`extension`),Wa(1493,`app-tabs`,null,25),cf(),Aa(1495,`pre`)(1496,`code`,49),bT(1497,`
// The senders whose webhooks this API accepts, by the name @VerifyWebhook() uses.
receivers: {
  // The payment provider follows Standard Webhooks: webhook-id, webhook-timestamp, webhook-signature.
  payments: { scheme: 'standard', secret: process.env.PAYMENTS_WEBHOOK_SECRET! },
  // The carrier copied Stripe's scheme under its own header: Carrier-Signature: t=...,v1=...
  carrier: { scheme: 'stripe', header: 'Carrier-Signature', secret: process.env.CARRIER_WEBHOOK_SECRET! },
},
`),cf()()(),Aa(1498,`p`)(1499,`code`),bT(1500,`@VerifyWebhook('payments')`),cf(),bT(1501,` on the route verifies the request before the handler runs, and `),Aa(1502,`code`),bT(1503,`@IncomingWebhook()`),cf(),bT(1504,` gives what was verified: the sender's `),Aa(1505,`code`),bT(1506,`id`),cf(),bT(1507,` for the webhook, the signed `),Aa(1508,`code`),bT(1509,`timestamp`),cf(),bT(1510,`, the `),Aa(1511,`code`),bT(1512,`payload`),cf(),bT(1513,` parsed from the signed bytes, and `),Aa(1514,`code`),bT(1515,`processInTransaction()`),cf(),bT(1516,`:`),cf(),Aa(1517,`app-copy-button`,47)(1518,`span`,48),bT(1519),LT(1520,`extension`),Wa(1521,`app-tabs`,null,26),cf(),Aa(1523,`pre`)(1524,`code`,49),bT(1525,`
import { Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { IncomingWebhook, VerifyWebhook } from '@nestjs/webhooks';
import type { Database } from '../database/drizzle.js';
import { OrdersService } from '../orders/orders.service.js';

/** The payment provider's payload: the Standard Webhooks shape, \`type\`, \`timestamp\` and \`data\`. */
export interface PaymentProviderEvent {
  type: 'payment.succeeded' | 'payment.failed';
  timestamp: string;
  data: { paymentId: string; orderId: string; amount: number };
}

@Controller('webhooks/payments')
export class PaymentProviderWebhooksController {
  private readonly logger = new Logger(PaymentProviderWebhooksController.name);

  constructor(
    @InjectDrizzle() private readonly db: Database,
    private readonly ordersService: OrdersService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @VerifyWebhook('payments')
  async receive(@IncomingWebhook() webhook: IncomingWebhook<PaymentProviderEvent>) {
    const { type, data } = webhook.payload;
    if (type !== 'payment.succeeded') {
      this.logger.log(\`Ignoring \${type} for order \${data.orderId}\`);
      return;
    }
    // Exactly once: the webhook's id is recorded in the same transaction as the order's new
    // status, so a redelivery, even one racing this request on another instance, changes nothing.
    const result = await this.db.transaction(async (tx) =>
      webhook.processInTransaction(tx, () => this.ordersService.markPaid(tx, data.orderId, data.paymentId, data.amount)),
    );
    if (!result.duplicate) {
      this.logger.log(\`Order \${data.orderId} paid: \${data.paymentId}, \${data.amount} cents\`);
    }
  }
}
`),cf()()(),Aa(1526,`app-copy-button`,47)(1527,`span`,48),bT(1528),LT(1529,`extension`),Wa(1530,`app-tabs`,null,27),cf(),Aa(1532,`pre`)(1533,`code`,49),bT(1534,`
/** The payment provider confirmed the payment. Runs inside the receiver's transaction. */
async markPaid(tx: Transaction, orderId: string, paymentId: string, amount: number): Promise<Order> {
  const [row] = await tx.select().from(orders).where(eq(orders.id, orderId)).for('update');
  if (!row) {
    throw new NotFoundException(\`Order \${orderId} not found\`);
  }
  if (row.status !== 'placed') {
    throw new ConflictException(\`Order \${orderId} is \${row.status}\`);
  }
  if (amount !== row.total) {
    throw new ConflictException(\`Payment \${paymentId} is for \${amount}, and order \${orderId} totals \${row.total}\`);
  }
  await tx.update(orders).set({ status: 'paid', paymentId }).where(eq(orders.id, orderId));
  return { ...row, status: 'paid', paymentId };
}
`),cf()()(),Aa(1535,`app-copy-button`,47)(1536,`span`,48),bT(1537),LT(1538,`extension`),Wa(1539,`app-tabs`,null,28),cf(),Aa(1541,`pre`)(1542,`code`,49),bT(1543,`
import { Module } from '@nestjs/common';
import { OrdersModule } from '../orders/orders.module.js';
import { CarrierWebhooksController } from './carrier-webhooks.controller.js';
import { PaymentProviderWebhooksController } from './payment-provider-webhooks.controller.js';

/** The webhooks the store receives: the payment provider's payments and the carrier's shipments. */
@Module({
  imports: [OrdersModule],
  controllers: [PaymentProviderWebhooksController, CarrierWebhooksController],
})
export class ProviderWebhooksModule {}
`),cf()()(),Aa(1544,`p`),bT(1545,`What the decorator checks, in order: the three `),Aa(1546,`code`),bT(1547,`webhook-`),cf(),bT(1548,` headers are present and well formed, with a `),Aa(1549,`code`),bT(1550,`webhook-id`),cf(),bT(1551,` of at most 255 characters, counted in code points; one `),Aa(1552,`code`),bT(1553,`v1,`),cf(),bT(1554,` signature in `),Aa(1555,`code`),bT(1556,`webhook-signature`),cf(),bT(1557,` matches the HMAC of `),Aa(1558,`code`),bT(1559,`id.timestamp.body`),cf(),bT(1560,` with one of the configured secrets (compared in constant time; several secrets can be listed while the payment provider rotates); the signed timestamp is within 5 minutes of now, in either direction; the body is JSON. A request that fails gets a 401 with a generic message. The reason never goes to the sender; it goes to the `),Aa(1561,`code`),bT(1562,`verification-failed`),cf(),bT(1563,` event, with the receiver's name. A signed body that isn't JSON gets a 400 from the framework's body parser before the decorator sees it, so no event is emitted for it. The same holds for a body over the body parser's size limit (100 kB on Express and 1 MiB on Fastify by default): it gets a 413 before the decorator runs, and no event is emitted. If the payment provider sends larger bodies, raise the limit with `),Aa(1564,`code`),bT(1565,`useBodyParser()`),cf(),bT(1566,`, as described in `),Aa(1567,`a`,68),bT(1568,`Raw body`),cf(),bT(1569,`.`),cf(),Aa(1570,`p`),bT(1571,`Then comes deduplication. The payment provider retries until it gets a 2xx, so a timeout after the handler succeeded makes it send the same `),Aa(1572,`code`),bT(1573,`webhook-id`),cf(),bT(1574,` again. The receiver keeps an inbox of the ids it processed (the outbox's inbox, consumer `),Aa(1575,`code`),bT(1576,`webhooks:payments`),cf(),bT(1577,`): a known id is answered with an empty 200 without running the handler, and an id is recorded only after the handler succeeded, so a handler that threw is run again on the payment provider's retry. Two copies arriving together at one instance run the handler once; two instances receiving them at the same moment could both run it, which is what the next paragraph is for.`),cf(),Aa(1578,`p`)(1579,`code`),bT(1580,`markPaid()`),cf(),bT(1581,` moves money-related state, so the controller goes one step further with `),Aa(1582,`code`),bT(1583,`processInTransaction()`),cf(),bT(1584,`: the webhook's id is recorded `),Aa(1585,`em`),bT(1586,`through the order's transaction`),cf(),bT(1587,`, and `),Aa(1588,`code`),bT(1589,`markPaid()`),cf(),bT(1590,` runs only if it is new. The record and the new status commit together. A redelivery after a crash between the handler and the inbox write, or one racing this request on another instance, finds the id and changes nothing; it resolves with `),Aa(1591,`code`),bT(1592,`duplicate`),cf(),bT(1593,` set, which the controller uses to log only once. And when `),Aa(1594,`code`),bT(1595,`markPaid()`),cf(),bT(1596,` throws, a payment for the wrong amount, say, the transaction rolls back, the record with it, the sender gets the 409, and its retry gets another chance once the order is fixed.`),cf(),Aa(1597,`p`),bT(1598,`For development, a small script signs a request the way the payment provider (and, in the next section, the carrier) would, with `),Aa(1599,`code`),bT(1600,`signWebhook()`),cf(),bT(1601,` from `),Aa(1602,`code`),bT(1603,`@nestjs/webhooks/testing`),cf(),bT(1604,`:`),cf(),Aa(1605,`app-copy-button`,47)(1606,`span`,48),bT(1607),LT(1608,`extension`),Wa(1609,`app-tabs`,null,29),cf(),Aa(1611,`pre`)(1612,`code`,49),bT(1613,`
/**
 * Sends the signed request the payment provider or the carrier would send, for trying the API by hand:
 *
 *   npx tsx scripts/send-webhook.ts payments payment.succeeded '{"paymentId":"pay_1","orderId":"...","amount":4998}'
 *   npx tsx scripts/send-webhook.ts carrier shipment.shipped '{"orderId":"...","trackingNumber":"TRK-0001"}'
 *
 * Signs with PAYMENTS_WEBHOOK_SECRET or CARRIER_WEBHOOK_SECRET, the secrets the API was
 * started with, and posts to API_URL (default http://localhost:3000). WEBHOOK_ID sends a
 * redelivery with a given id; TAMPER=1 changes a byte of the body after signing it.
 */
import { signWebhook } from '@nestjs/webhooks/testing';
import { randomUUID } from 'node:crypto';

const [sender, type, json = '{}'] = process.argv.slice(2);
if (sender !== 'payments' && sender !== 'carrier') {
  console.error('usage: send-webhook.ts <payments|carrier> <type> <data as JSON>');
  process.exit(2);
}
const data: unknown = JSON.parse(json);
const id = process.env.WEBHOOK_ID;

function secret(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(\`Set \${name}\`);
  }
  return value;
}

const signed =
  sender === 'payments'
    ? signWebhook({
        scheme: 'standard',
        secret: secret('PAYMENTS_WEBHOOK_SECRET'),
        id,
        payload: { type, timestamp: new Date().toISOString(), data },
      })
    : signWebhook({
        scheme: 'stripe',
        header: 'Carrier-Signature',
        secret: secret('CARRIER_WEBHOOK_SECRET'),
        payload: { id: id ?? \`evt_\${randomUUID().replaceAll('-', '')}\`, type, data },
      });

const body = process.env.TAMPER ? \`\${signed.body.slice(0, -1)} }\` : signed.body;
const response = await fetch(\`\${process.env.API_URL ?? 'http://localhost:3000'}/webhooks/\${sender}\`, {
  method: 'POST',
  headers: signed.headers,
  body,
});
console.log(\`\${response.status} \${await response.text()}\`);
`),cf()()(),Aa(1614,`h4`,69)(1615,`span`),bT(1616,`Receive the carrier's Stripe-like webhooks`),cf()(),Aa(1617,`p`),bT(1618,`The carrier copied Stripe's scheme: a `),Aa(1619,`code`),bT(1620,`Carrier-Signature: t=…,v1=…`),cf(),bT(1621,` header, the hex HMAC-SHA256 of `),Aa(1622,`code`),bT(1623,`t.body`),cf(),bT(1624,` keyed with the secret's text, and the event's id inside the payload. The receiver in the `),Aa(1625,`a`,70)(1626,`code`),bT(1627,`receivers`),cf(),bT(1628,` option`),cf(),bT(1629,` says so: `),Aa(1630,`code`),bT(1631,`scheme: 'stripe'`),cf(),bT(1632,` with the `),Aa(1633,`code`),bT(1634,`header`),cf(),bT(1635,` name. Stripe's own webhooks are the same receiver without `),Aa(1636,`code`),bT(1637,`header`),cf(),bT(1638,`. GitHub's, and senders with a scheme of their own, are in `),Aa(1639,`a`,71),bT(1640,`Other senders`),cf(),bT(1641,`.`),cf(),Aa(1642,`p`),bT(1643,`The handler is the interesting part. Marking the order shipped and telling the partner happen in one transaction: the order's new status, the partner's `),Aa(1644,`code`),bT(1645,`order.shipped`),cf(),bT(1646,` message (through the outbox) and this webhook's inbox record commit together, or none of them does:`),cf(),Aa(1647,`app-copy-button`,47)(1648,`span`,48),bT(1649),LT(1650,`extension`),Wa(1651,`app-tabs`,null,30),cf(),Aa(1653,`pre`)(1654,`code`,49),bT(1655,`
import { Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { IncomingWebhook, VerifyWebhook, Webhooks } from '@nestjs/webhooks';
import type { Database } from '../database/drizzle.js';
import { OrdersService } from '../orders/orders.service.js';

/** The carrier's payload, Stripe-like: the event's \`id\` is in the body, which is what the signature covers. */
export interface CarrierEvent {
  id: string;
  type: 'shipment.shipped' | 'shipment.delivered';
  data: { orderId: string; trackingNumber: string };
}

@Controller('webhooks/carrier')
export class CarrierWebhooksController {
  private readonly logger = new Logger(CarrierWebhooksController.name);

  constructor(
    @InjectDrizzle() private readonly db: Database,
    private readonly ordersService: OrdersService,
    private readonly webhooks: Webhooks,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @VerifyWebhook('carrier')
  async receive(@IncomingWebhook() webhook: IncomingWebhook<CarrierEvent>) {
    const { type, data } = webhook.payload;
    if (type !== 'shipment.shipped') {
      this.logger.log(\`Ignoring \${type} for order \${data.orderId}\`);
      return;
    }
    // One transaction: the order's status, the partner's order.shipped webhook (through the
    // outbox) and this webhook's inbox record commit together, or not at all.
    const result = await this.db.transaction(async (tx) =>
      webhook.processInTransaction(tx, () => this.ordersService.markShipped(tx, data.orderId, data.trackingNumber)),
    );
    if (result.duplicate) {
      return;
    }
    this.webhooks.notify(); // deliver order.shipped now instead of at the next poll
    this.logger.log(\`Order \${data.orderId} shipped, tracking \${data.trackingNumber}\`);
  }
}
`),cf()()(),Aa(1656,`p`)(1657,`code`),bT(1658,`markShipped()`),cf(),bT(1659,` is the method from `),Aa(1660,`a`,51),bT(1661,`Send order.shipped and order.cancelled after the commit`),cf(),bT(1662,`. The deduplication id is the event's `),Aa(1663,`code`),bT(1664,`id`),cf(),bT(1665,` from the signed payload, not a header, because that is what Stripe's scheme signs. A `),Aa(1666,`code`),bT(1667,`shipment.shipped`),cf(),bT(1668,` event for an order that isn't paid yet is refused with a 409, and nothing is recorded: when the carrier retries it after the payment arrived, the same event id is processed.`),cf(),Aa(1669,`h4`,72)(1670,`span`),bT(1671,`Other senders`),cf()(),Aa(1672,`p`),bT(1673,`GitHub's webhooks take `),Aa(1674,`code`),bT(1675,`scheme: 'github'`),cf(),bT(1676,`: `),Aa(1677,`code`),bT(1678,`X-Hub-Signature-256`),cf(),bT(1679,`, the hex HMAC-SHA256 of the body keyed with the secret's text.`),cf(),Aa(1680,`blockquote`,45)(1681,`strong`),bT(1682,`Warning`),cf(),bT(1683,` GitHub signs neither a timestamp nor an id. A captured request verifies forever, and deduplication keys by default on the `),Aa(1684,`code`),bT(1685,`X-GitHub-Delivery`),cf(),bT(1686,` header, which isn't signed: the same request replayed with a new value in that header runs the handler again.
`),cf(),Aa(1687,`p`),bT(1688,`Key the deduplication on the signed body instead, with the receiver's `),Aa(1689,`code`),bT(1690,`id`),cf(),bT(1691,` option. The payload is parsed from the bytes that were signed, so a replay has the same id as the original, and the inbox skips it:`),cf(),Aa(1692,`app-copy-button`)(1693,`pre`)(1694,`code`,49),bT(1695,`
receivers: {
  github: {
    scheme: 'github',
    secret: process.env.GITHUB_WEBHOOK_SECRET!,
    // The signed body, not the unsigned X-GitHub-Delivery header: a replayed request has a known id.
    id: (payload) => createHash('sha256').update(JSON.stringify(payload)).digest('hex'),
  },
},
`),cf()()(),Aa(1696,`p`),bT(1697,`The inbox remembers an id until `),Aa(1698,`code`),bT(1699,`OutboxInbox.prune()`),cf(),bT(1700,` removes it, so for GitHub its window is also how long a replay is caught: keep it long. Replayed after that, a request verifies and runs; accepting GitHub's webhooks only from the addresses it publishes (`),Aa(1701,`code`),bT(1702,`hooks`),cf(),bT(1703,` in `),Aa(1704,`code`),bT(1705,`https://api.github.com/meta`),cf(),bT(1706,`) narrows who can send one.`),cf(),Aa(1707,`p`),bT(1708,`A sender with a scheme of its own is a class extending `),Aa(1709,`code`),bT(1710,`WebhookSignatureScheme`),cf(),bT(1711,`. Say the store also sells through a marketplace, which signs the URL it posts to followed by the body, and puts the event's id in the body:`),cf(),Aa(1712,`app-copy-button`,47)(1713,`span`,48),bT(1714),LT(1715,`extension`),Wa(1716,`app-tabs`,null,31),cf(),Aa(1718,`pre`)(1719,`code`,49),bT(1720,`
import { WebhookSignatureScheme, type WebhookSignatureCheck, type WebhookSignedRequest } from '@nestjs/webhooks';
import { createHmac } from 'node:crypto';

/**
 * The marketplace's scheme: \`X-Marketplace-Signature\` is the base64 HMAC-SHA256 of the URL it
 * posts to followed by the body, keyed with the secret's text, and the event's id is in the body.
 * A scheme sees the request's headers and raw body, so the URL comes in through the constructor:
 * the one registered in the marketplace's dashboard.
 */
export class MarketplaceScheme extends WebhookSignatureScheme {
  constructor(private readonly url: string) {
    super();
  }

  verify({ headers, rawBody }: WebhookSignedRequest, keys: readonly Buffer[]): WebhookSignatureCheck {
    const signature = headers['x-marketplace-signature'];
    if (signature === undefined) {
      return { valid: false, reason: 'missing-header', detail: 'no x-marketplace-signature header' };
    }
    if (typeof signature !== 'string') {
      return { valid: false, reason: 'malformed-header', detail: 'x-marketplace-signature is repeated' };
    }

    const candidates = [Buffer.from(signature, 'base64')];
    for (const key of keys) {
      const expected = createHmac('sha256', key).update(this.url).update(rawBody).digest();
      // In constant time, never with ===.
      if (WebhookSignatureScheme.matches(expected, candidates)) {
        return { valid: true };
      }
    }
    return { valid: false, reason: 'invalid-signature', detail: 'no signature matches a configured secret' };
  }

  /** The deduplication id: the event's, from the signed body. */
  override idFromPayload(payload: unknown): string | undefined {
    const id = (payload as { eventId?: unknown } | null)?.eventId;
    return typeof id === 'string' ? id : undefined;
  }
}
`),cf()()(),Aa(1721,`ul`)(1722,`li`)(1723,`code`),bT(1724,`verify(request, keys)`),cf(),bT(1725,` gets the request's `),Aa(1726,`code`),bT(1727,`headers`),cf(),bT(1728,` (lower-case names) and its `),Aa(1729,`code`),bT(1730,`rawBody`),cf(),bT(1731,`, as received, and one key per configured secret. It returns `),Aa(1732,`code`),bT(1733,`valid: true`),cf(),bT(1734,`, with the sender's `),Aa(1735,`code`),bT(1736,`id`),cf(),bT(1737,` when a header carries one and the signed `),Aa(1738,`code`),bT(1739,`timestamp`),cf(),bT(1740,` in epoch seconds when the scheme signs one (the receiver's `),Aa(1741,`code`),bT(1742,`tolerance`),cf(),bT(1743,` then applies), or `),Aa(1744,`code`),bT(1745,`valid: false`),cf(),bT(1746,` with a `),Aa(1747,`code`),bT(1748,`reason`),cf(),bT(1749,` for the `),Aa(1750,`code`),bT(1751,`verification-failed`),cf(),bT(1752,` event and a `),Aa(1753,`code`),bT(1754,`detail`),cf(),bT(1755,`. It runs synchronously, before the body is parsed as JSON.`),cf(),Aa(1756,`li`)(1757,`code`),bT(1758,`WebhookSignatureScheme.matches(expected, candidates)`),cf(),bT(1759,` compares in constant time. Never compare signatures with `),Aa(1760,`code`),bT(1761,`===`),cf(),bT(1762,`.`),cf(),Aa(1763,`li`)(1764,`code`),bT(1765,`idFromPayload(payload, headers)`),cf(),bT(1766,` gives the deduplication id when no header carries one, from the parsed body, as the built-in Stripe scheme does with the event's `),Aa(1767,`code`),bT(1768,`id`),cf(),bT(1769,`. An id longer than 255 characters, from either, is refused with `),Aa(1770,`code`),bT(1771,`malformed-header`),cf(),bT(1772,`.`),cf(),Aa(1773,`li`)(1774,`code`),bT(1775,`key(secret)`),cf(),bT(1776,` turns each configured secret into the key `),Aa(1777,`code`),bT(1778,`verify()`),cf(),bT(1779,` receives, once, at startup, where a malformed secret stops the application. The default takes the secret's text and refuses an empty one or one with surrounding whitespace. Override it for an encoded secret, as the `),Aa(1780,`code`),bT(1781,`standard`),cf(),bT(1782,` scheme does for `),Aa(1783,`code`),bT(1784,`whsec_…`),cf(),bT(1785,`.`),cf()(),Aa(1786,`p`),bT(1787,`The receiver takes an instance:`),cf(),Aa(1788,`app-copy-button`)(1789,`pre`)(1790,`code`,49),bT(1791,`
receivers: {
  marketplace: {
    scheme: new MarketplaceScheme('https://api.store.example.com/webhooks/marketplace'),
    secret: process.env.MARKETPLACE_WEBHOOK_SECRET!,
  },
},
`),cf()()(),Aa(1792,`h4`,73)(1793,`span`),bT(1794,`Rotate secrets`),cf()(),Aa(1795,`p`),bT(1796,`A secret leaks, or a partner's policy says a year is enough. `),Aa(1797,`code`),bT(1798,`POST /partner/webhook-endpoints/:id/rotate-secret`),cf(),bT(1799,` (see `),Aa(1800,`a`,74),bT(1801,`Let partners subscribe`),cf(),bT(1802,`) returns a new secret, and the old one keeps signing next to it for `),Aa(1803,`code`),bT(1804,`secretRotationOverlap`),cf(),bT(1805,`, 24 hours: every delivery carries two `),Aa(1806,`code`),bT(1807,`v1,`),cf(),bT(1808,` signatures, and a Standard Webhooks verifier accepts any one that matches. The partner adds the new secret to its list, deploys, removes the old one, on its own schedule. After the overlap, only the new secret signs. `),Aa(1809,`code`),bT(1810,`rotateSecret()`),cf(),bT(1811,` with `),Aa(1812,`code`),bT(1813,`overlap: 0`),cf(),bT(1814,` retires the old one at once, for a leaked secret.`),cf(),Aa(1815,`p`),bT(1816,`Set `),Aa(1817,`code`),bT(1818,`WEBHOOKS_ENCRYPTION_KEYS`),cf(),bT(1819,` to seal the secrets at rest, `),Aa(1820,`code`),bT(1821,`openssl rand -base64 32`),cf(),bT(1822,` for each key, newest first. Endpoints created before are still read (their secrets are plaintext) and sealed at their next rotation.`),cf(),Aa(1823,`h4`,75)(1824,`span`),bT(1825,`Try it`),cf()(),Aa(1826,`p`),bT(1827,`Create the database, and apply your migrations to it, which create the order API's tables and rows from `),Aa(1828,`a`,58),bT(1829,`Installation`),cf(),bT(1830,`:`),cf(),Aa(1831,`pre`)(1832,`code`,40),bT(1833,`
$ psql postgres://localhost:5432/postgres -c 'CREATE DATABASE store'
`),cf()(),Aa(1834,`p`),bT(1835,`Export the secrets the payment provider and the carrier share with the store (invented here), allow deliveries to this machine, and start the API on port 3000:`),cf(),Aa(1836,`pre`)(1837,`code`,40),bT(1838,`
$ export PAYMENTS_WEBHOOK_SECRET=whsec_$(openssl rand -base64 32)
$ export CARRIER_WEBHOOK_SECRET=carrier_test_$(openssl rand -hex 6)
$ export WEBHOOKS_ALLOW_LOCAL=1
`),cf()(),Aa(1839,`pre`)(1840,`code`,40),bT(1841,`
[Nest] 55905  - 09/30/2026, 6:52:36 PM     LOG [OutboxModule] OutboxStorage: PostgresOutboxStore
[Nest] 55905  - 09/30/2026, 6:52:36 PM     LOG [WebhooksModule] WebhooksStorage: PostgresWebhookStore
[Nest] 55905  - 09/30/2026, 6:52:36 PM     LOG [OutboxModule] PostgresOutboxStore: migrated schema "nest_outbox" to version 1.
[Nest] 55905  - 09/30/2026, 6:52:36 PM     LOG [WebhooksModule] PostgresWebhookStore: migrated schema "nest_webhooks" to version 1.
[Nest] 55905  - 09/30/2026, 6:52:36 PM     LOG [NestApplication] Nest application successfully started +2ms
`),cf()(),Aa(1842,`p`),bT(1843,`Your migrations created the order API's tables, and the stores their schemas, next to them. Northside subscribes, with its API key, to both events at a receiver it will run on port 4100. The response carries the secret, this once:`),cf(),Aa(1844,`pre`)(1845,`code`,40),bT(1846,`
$ curl -s -X POST localhost:3000/partner/webhook-endpoints \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"url":"http://127.0.0.1:4100/store/webhooks","eventTypes":["order.shipped","order.cancelled"],"description":"Warehouse system"}'
{"id":"ep_01a0f33b79e27154b8fd089a10f3e48e","tenant":"northside","url":"http://127.0.0.1:4100/store/webhooks","eventTypes":["order.shipped","order.cancelled"],"description":"Warehouse system","enabled":true,"disabledReason":null,"failingSince":null,"createdAt":1790787156450,"updatedAt":1790787156450,"secret":"whsec_yKaIEKkc0ZpOWofM8Fx1Wc5yxdffKSsP1jolLCynqug="}
$ curl -s localhost:3000/partner/webhook-endpoints -H 'Authorization: Bearer partner_northside_7c1d2e'
[{"id":"ep_01a0f33b79e27154b8fd089a10f3e48e","tenant":"northside","url":"http://127.0.0.1:4100/store/webhooks","eventTypes":["order.shipped","order.cancelled"],"description":"Warehouse system","enabled":true,"disabledReason":null,"failingSince":null,"createdAt":1790787156450,"updatedAt":1790787156450}]
`),cf()(),Aa(1847,`blockquote`,55)(1848,`strong`),bT(1849,`Hint`),cf(),Aa(1850,`code`),bT(1851,`--json`),cf(),bT(1852,` needs curl 7.82 or later.
`),cf(),Aa(1853,`p`),bT(1854,`The URL of a cloud metadata service is refused before anything is stored, and so is an event type the API doesn't send. Riverside Cat Shelter, the other partner, gets a 404 for Northside's endpoint:`),cf(),Aa(1855,`pre`)(1856,`code`,40),bT(1857,`
$ curl -s -X POST localhost:3000/partner/webhook-endpoints \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"url":"https://169.254.169.254/latest/meta-data/","eventTypes":["*"]}'
{"statusCode":400,"message":"Invalid webhook URL: 169.254.169.254 is link-local (cloud metadata)"}
$ curl -s -X POST localhost:3000/partner/webhook-endpoints \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"url":"https://hooks.northside.example.com/store","eventTypes":["order.paid"]}'
{"statusCode":400,"message":"Unknown message type \\"order.paid\\". Known: order.shipped, order.cancelled"}
$ curl -s -o /dev/null -w '%{http_code}' localhost:3000/partner/webhook-endpoints/ep_01a0f33b79e27154b8fd089a10f3e48e \\
    -H 'Authorization: Bearer partner_riverside_91ab44'
404
`),cf()(),Aa(1858,`p`),bT(1859,`Start Northside's receiver, `),Aa(1860,`code`),bT(1861,`partner-service/main.ts`),cf(),bT(1862,`, on port 4100, with the secret it was given in its environment:`),cf(),Aa(1863,`pre`)(1864,`code`,40),bT(1865,`
STORE_WEBHOOK_SECRET=whsec_yKaIEKkc0ZpOWofM8Fx1Wc5yxdffKSsP1jolLCynqug=
`),cf()(),Aa(1866,`p`),bT(1867,`Now place an order, and let the payment provider pay for it and the carrier ship it. The script signs the requests they would send, with the secrets exported above:`),cf(),Aa(1868,`pre`)(1869,`code`,40),bT(1870,`
$ curl -s -X POST localhost:3000/orders \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"items":[{"productId":"salmon-kibble-2kg","quantity":2}]}'
{"id":"1067d04c-0617-44ac-9a29-67297867329e","partnerId":"northside","items":[{"productId":"salmon-kibble-2kg","quantity":2,"price":2499}],"total":4998,"status":"placed","paymentId":null,"trackingNumber":null}
$ npx tsx scripts/send-webhook.ts payments payment.succeeded \\
    '{"paymentId":"pay_8f21c","orderId":"1067d04c-0617-44ac-9a29-67297867329e","amount":4998}'
200
$ npx tsx scripts/send-webhook.ts carrier shipment.shipped \\
    '{"orderId":"1067d04c-0617-44ac-9a29-67297867329e","trackingNumber":"TRK-4471-0001"}'
200
$ curl -s localhost:3000/orders/1067d04c-0617-44ac-9a29-67297867329e -H 'Authorization: Bearer partner_northside_7c1d2e'
{"id":"1067d04c-0617-44ac-9a29-67297867329e","partnerId":"northside","items":[{"price":2499,"quantity":2,"productId":"salmon-kibble-2kg"}],"total":4998,"status":"shipped","paymentId":"pay_8f21c","trackingNumber":"TRK-4471-0001"}
`),cf()(),Aa(1871,`p`),bT(1872,`The API's log shows both webhooks processed, and Northside's log shows `),Aa(1873,`code`),bT(1874,`order.shipped`),cf(),bT(1875,` arriving right after the carrier's, with its `),Aa(1876,`code`),bT(1877,`webhook-id`),cf(),bT(1878,`:`),cf(),Aa(1879,`pre`)(1880,`code`,40),bT(1881,`
[Nest] 55905  - 09/30/2026, 6:52:39 PM     LOG [PaymentProviderWebhooksController] Order 1067d04c-0617-44ac-9a29-67297867329e paid: pay_8f21c, 4998 cents
[Nest] 55905  - 09/30/2026, 6:52:40 PM     LOG [CarrierWebhooksController] Order 1067d04c-0617-44ac-9a29-67297867329e shipped, tracking TRK-4471-0001
`),cf()(),Aa(1882,`pre`)(1883,`code`,40),bT(1884,`
[Nest] 56040  - 09/30/2026, 6:52:40 PM     LOG [StoreWebhooksController] Order 1067d04c-0617-44ac-9a29-67297867329e shipped, tracking TRK-4471-0001 (msg_01a0f33b898e7341950339801ec3319a)
`),cf()(),Aa(1885,`p`),bT(1886,`Northside's delivery log has the delivery, and its details have the message and the one attempt, with the partner's status code and how long it took:`),cf(),Aa(1887,`pre`)(1888,`code`,40),bT(1889,`
$ curl -s localhost:3000/partner/webhook-deliveries -H 'Authorization: Bearer partner_northside_7c1d2e'
[{"id":"dlv_01a0f33b89ac720aa76e2c3da97f3c14","messageId":"msg_01a0f33b898e7341950339801ec3319a","endpointId":"ep_01a0f33b79e27154b8fd089a10f3e48e","tenant":"northside","type":"order.shipped","status":"succeeded","attempts":1,"nextAttemptAt":null,"lastAttemptAt":1790787160533,"lastStatusCode":204,"lastError":null,"failureReason":null,"createdAt":1790787160462,"completedAt":1790787160544}]
$ curl -s localhost:3000/partner/webhook-deliveries/dlv_01a0f33b89ac720aa76e2c3da97f3c14 -H 'Authorization: Bearer partner_northside_7c1d2e'
`),cf()(),Aa(1890,`pre`)(1891,`code`,76),bT(1892,`
{
  "id": "dlv_01a0f33b89ac720aa76e2c3da97f3c14",
  "messageId": "msg_01a0f33b898e7341950339801ec3319a",
  "endpointId": "ep_01a0f33b79e27154b8fd089a10f3e48e",
  "tenant": "northside",
  "type": "order.shipped",
  "status": "succeeded",
  "attempts": 1,
  "nextAttemptAt": null,
  "lastAttemptAt": 1790787160533,
  "lastStatusCode": 204,
  "lastError": null,
  "failureReason": null,
  "createdAt": 1790787160462,
  "completedAt": 1790787160544,
  "message": {
    "id": "msg_01a0f33b898e7341950339801ec3319a",
    "type": "order.shipped",
    "tenant": "northside",
    "body": "{\\"type\\":\\"order.shipped\\",\\"timestamp\\":\\"2026-09-30T16:52:40.462Z\\",\\"data\\":{\\"orderId\\":\\"1067d04c-0617-44ac-9a29-67297867329e\\",\\"trackingNumber\\":\\"TRK-4471-0001\\"}}",
    "createdAt": 1790787160462
  },
  "history": [
    { "deliveryId": "dlv_01a0f33b89ac720aa76e2c3da97f3c14", "attempt": 1, "at": 1790787160533, "durationMs": 11, "statusCode": 204, "response": "", "error": null }
  ]
}
`),cf()(),Aa(1893,`p`),bT(1894,`Stop Northside's receiver with `),Aa(1895,`code`),bT(1896,`Ctrl+C`),cf(),bT(1897,`, then place an order and cancel it. The delivery fails to connect, the API logs the wait before the next attempt, and the partner's log shows the delivery pending with its error:`),cf(),Aa(1898,`pre`)(1899,`code`,40),bT(1900,`
$ curl -s -X POST localhost:3000/orders \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"items":[{"productId":"clumping-litter-10l","quantity":1}]}'
{"id":"d6a36832-6b83-40f6-960b-0c6aa905ae18","partnerId":"northside","items":[{"productId":"clumping-litter-10l","quantity":1,"price":1599}],"total":1599,"status":"placed","paymentId":null,"trackingNumber":null}
$ curl -s -X POST localhost:3000/orders/d6a36832-6b83-40f6-960b-0c6aa905ae18/cancel \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"reason":"out of stock"}'
{"id":"d6a36832-6b83-40f6-960b-0c6aa905ae18","partnerId":"northside","items":[{"price":1599,"quantity":1,"productId":"clumping-litter-10l"}],"total":1599,"status":"cancelled","paymentId":null,"trackingNumber":null}
$ curl -s 'localhost:3000/partner/webhook-deliveries?status=pending' -H 'Authorization: Bearer partner_northside_7c1d2e'
[{"id":"dlv_01a0f33b8f51724da606406a85418fab","messageId":"msg_01a0f33b8f367090b44d3de36eed8f13","endpointId":"ep_01a0f33b79e27154b8fd089a10f3e48e","tenant":"northside","type":"order.cancelled","status":"pending","attempts":1,"nextAttemptAt":1790787164580,"lastAttemptAt":1790787161969,"lastStatusCode":null,"lastError":"Error: connect ECONNREFUSED 127.0.0.1:4100","failureReason":null,"createdAt":1790787161910,"completedAt":null}]
`),cf()(),Aa(1901,`pre`)(1902,`code`,40),bT(1903,`
[Nest] 55905  - 09/30/2026, 6:52:42 PM    WARN [WebhookWorker] Retrying webhook delivery dlv_01a0f33b8f51724da606406a85418fab (order.cancelled) in 2609ms (attempt 1 of 10 failed): Error: connect ECONNREFUSED 127.0.0.1:4100
`),cf()(),Aa(1904,`p`),bT(1905,`Start the receiver again. The retry goes through, and the log keeps both attempts:`),cf(),Aa(1906,`pre`)(1907,`code`,40),bT(1908,`
[Nest] 56304  - 09/30/2026, 6:52:45 PM     LOG [StoreWebhooksController] Order d6a36832-6b83-40f6-960b-0c6aa905ae18 cancelled: out of stock (msg_01a0f33b8f367090b44d3de36eed8f13)
`),cf()(),Aa(1909,`pre`)(1910,`code`,40),bT(1911,`
$ curl -s localhost:3000/partner/webhook-deliveries/dlv_01a0f33b8f51724da606406a85418fab -H 'Authorization: Bearer partner_northside_7c1d2e'
`),cf()(),Aa(1912,`pre`)(1913,`code`,76),bT(1914,`
{
  "id": "dlv_01a0f33b8f51724da606406a85418fab",
  "type": "order.cancelled",
  "status": "succeeded",
  "attempts": 2,
  "lastStatusCode": 204,
  "history": [
    { "attempt": 1, "at": 1790787161969, "durationMs": 2, "statusCode": null, "response": null, "error": "Error: connect ECONNREFUSED 127.0.0.1:4100" },
    { "attempt": 2, "at": 1790787165060, "durationMs": 11, "statusCode": 204, "response": "", "error": null }
  ]
}
`),cf()(),Aa(1915,`p`),bT(1916,`Northside asks for that delivery again. It is sent with the same `),Aa(1917,`code`),bT(1918,`webhook-id`),cf(),bT(1919,`, the receiver's inbox recognizes it and answers 204 without running the handler (nothing new in its log), and the delivery log shows a new round:`),cf(),Aa(1920,`pre`)(1921,`code`,40),bT(1922,`
$ curl -s -X POST localhost:3000/partner/webhook-deliveries/dlv_01a0f33b8f51724da606406a85418fab/retry \\
    -H 'Authorization: Bearer partner_northside_7c1d2e'
{"retried":1}
$ curl -s localhost:3000/partner/webhook-deliveries/dlv_01a0f33b8f51724da606406a85418fab -H 'Authorization: Bearer partner_northside_7c1d2e'
`),cf()(),Aa(1923,`pre`)(1924,`code`,76),bT(1925,`
{
  "status": "succeeded",
  "attempts": 1,
  "history": [
    { "attempt": 1, "at": 1790787161969, "statusCode": null, "error": "Error: connect ECONNREFUSED 127.0.0.1:4100" },
    { "attempt": 2, "at": 1790787165060, "statusCode": 204, "error": null },
    { "attempt": 1, "at": 1790787166185, "statusCode": 204, "error": null }
  ]
}
`),cf()(),Aa(1926,`p`),bT(1927,`Now the payment provider's side. A redelivery with the same `),Aa(1928,`code`),bT(1929,`webhook-id`),cf(),bT(1930,` (a lost 200, so the provider retried) is answered but not processed again: the API logs one payment. A tampered body and a wrong secret are refused, without a reason:`),cf(),Aa(1931,`pre`)(1932,`code`,40),bT(1933,`
$ curl -s -X POST localhost:3000/orders \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"items":[{"productId":"salmon-kibble-2kg","quantity":1}]}'
{"id":"d7dbe1ab-c408-4688-9e9e-2925ed2025a3","partnerId":"northside","items":[{"productId":"salmon-kibble-2kg","quantity":1,"price":2499}],"total":2499,"status":"placed","paymentId":null,"trackingNumber":null}
$ WEBHOOK_ID=msg_2c9e4f1a npx tsx scripts/send-webhook.ts payments payment.succeeded \\
    '{"paymentId":"pay_9d0a2","orderId":"d7dbe1ab-c408-4688-9e9e-2925ed2025a3","amount":2499}'
200
$ WEBHOOK_ID=msg_2c9e4f1a npx tsx scripts/send-webhook.ts payments payment.succeeded \\
    '{"paymentId":"pay_9d0a2","orderId":"d7dbe1ab-c408-4688-9e9e-2925ed2025a3","amount":2499}'
200
$ TAMPER=1 npx tsx scripts/send-webhook.ts payments payment.succeeded \\
    '{"paymentId":"pay_9d0a2","orderId":"d7dbe1ab-c408-4688-9e9e-2925ed2025a3","amount":2499}'
401 {"message":"Webhook signature verification failed","error":"Unauthorized","statusCode":401}
$ PAYMENTS_WEBHOOK_SECRET=whsec_$(openssl rand -base64 32) npx tsx scripts/send-webhook.ts payments payment.succeeded \\
    '{"paymentId":"pay_9d0a2","orderId":"d7dbe1ab-c408-4688-9e9e-2925ed2025a3","amount":2499}'
401 {"message":"Webhook signature verification failed","error":"Unauthorized","statusCode":401}
`),cf()(),Aa(1934,`pre`)(1935,`code`,40),bT(1936,`
[Nest] 55905  - 09/30/2026, 6:52:48 PM     LOG [PaymentProviderWebhooksController] Order d7dbe1ab-c408-4688-9e9e-2925ed2025a3 paid: pay_9d0a2, 2499 cents
`),cf()(),Aa(1937,`p`),bT(1938,`Finally, rotate the endpoint's secret. The receiver still runs with the old one, and the next delivery verifies anyway: it carries both signatures. Then restart the receiver with the new secret listed first and the old one behind it, as a partner would deploy it, and place and cancel another order: that delivery verifies too:`),cf(),Aa(1939,`pre`)(1940,`code`,40),bT(1941,`
$ curl -s -X POST localhost:3000/partner/webhook-endpoints/ep_01a0f33b79e27154b8fd089a10f3e48e/rotate-secret \\
    -H 'Authorization: Bearer partner_northside_7c1d2e'
{"secret":"whsec_BUPv/LlKhv9qDH7udP3gsGPquuj4WaopeP8fxyouWOk="}
$ curl -s -X POST localhost:3000/orders/d7dbe1ab-c408-4688-9e9e-2925ed2025a3/cancel \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"reason":"customer changed their mind"}'
{"id":"d7dbe1ab-c408-4688-9e9e-2925ed2025a3","partnerId":"northside","items":[{"price":2499,"quantity":1,"productId":"salmon-kibble-2kg"}],"total":2499,"status":"cancelled","paymentId":"pay_9d0a2","trackingNumber":null}
`),cf()(),Aa(1942,`pre`)(1943,`code`,40),bT(1944,`
[Nest] 56304  - 09/30/2026, 6:52:50 PM     LOG [StoreWebhooksController] Order d7dbe1ab-c408-4688-9e9e-2925ed2025a3 cancelled: customer changed their mind (msg_01a0f33bb022712e8e440b7adef8208f)
`),cf()(),Aa(1945,`pre`)(1946,`code`,40),bT(1947,`
STORE_WEBHOOK_SECRET=whsec_BUPv/LlKhv9qDH7udP3gsGPquuj4WaopeP8fxyouWOk=,whsec_yKaIEKkc0ZpOWofM8Fx1Wc5yxdffKSsP1jolLCynqug=
`),cf()(),Aa(1948,`pre`)(1949,`code`,40),bT(1950,`
$ curl -s -X POST localhost:3000/orders \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"items":[{"productId":"clumping-litter-10l","quantity":2}]}'
{"id":"d203fd6f-7396-489b-9d20-775cd8a6ca4e","partnerId":"northside","items":[{"productId":"clumping-litter-10l","quantity":2,"price":1599}],"total":3198,"status":"placed","paymentId":null,"trackingNumber":null}
$ curl -s -X POST localhost:3000/orders/d203fd6f-7396-489b-9d20-775cd8a6ca4e/cancel \\
    -H 'Authorization: Bearer partner_northside_7c1d2e' \\
    --json '{"reason":"ordered twice"}'
{"id":"d203fd6f-7396-489b-9d20-775cd8a6ca4e","partnerId":"northside","items":[{"price":1599,"quantity":2,"productId":"clumping-litter-10l"}],"total":3198,"status":"cancelled","paymentId":null,"trackingNumber":null}
`),cf()(),Aa(1951,`pre`)(1952,`code`,40),bT(1953,`
[Nest] 56624  - 09/30/2026, 6:52:52 PM     LOG [StoreWebhooksController] Order d203fd6f-7396-489b-9d20-775cd8a6ca4e cancelled: ordered twice (msg_01a0f33bb8ad7249a0fa069361100c49)
`),cf()(),Aa(1954,`p`),bT(1955,`The deliveries are rows in your database, in the store's schema:`),cf(),Aa(1956,`pre`)(1957,`code`,40),bT(1958,`
$ psql "$DATABASE_URL" -c "SELECT type, status, attempts, last_status_code FROM nest_webhooks.deliveries ORDER BY created_at"
      type       |  status   | attempts | last_status_code
-----------------+-----------+----------+------------------
 order.shipped   | succeeded |        1 |              204
 order.cancelled | succeeded |        1 |              204
 order.cancelled | succeeded |        1 |              204
 order.cancelled | succeeded |        1 |              204
(4 rows)
`),cf()(),Aa(1959,`h4`,77)(1960,`span`),bT(1961,`Testing`),cf()(),Aa(1962,`p`),bT(1963,`In an e2e test, run PostgreSQL in-process with `),Aa(1964,`a`,78),bT(1965,`PGlite`),cf(),bT(1966,` and your real migrations, turn the relay and the worker off, replace the transport with the one that records requests, and sign the providers' requests with `),Aa(1967,`code`),bT(1968,`signWebhook()`),cf(),bT(1969,`. Override the database `),Aa(1970,`code`),bT(1971,`DrizzleModule`),cf(),bT(1972,` registers (`),Aa(1973,`code`),bT(1974,`getDrizzleToken()`),cf(),bT(1975,` returns its token) with one on PGlite: the stores follow, because their factories inject it, and create their schemas there when the application starts:`),cf(),Aa(1976,`app-copy-button`,47)(1977,`span`,48),bT(1978),LT(1979,`extension`),Wa(1980,`app-tabs`,null,32),cf(),Aa(1982,`pre`)(1983,`code`,49),bT(1984,`
import { PGlite } from '@electric-sql/pglite';
import type { INestApplication } from '@nestjs/common';
import { getDrizzleToken } from '@nestjs/drizzle';
import { OutboxRelay } from '@nestjs/outbox';
import { Test } from '@nestjs/testing';
import { InMemoryWebhookTransport, WebhookEndpoints, WebhookTransport, WebhookWorker } from '@nestjs/webhooks';
import { signWebhook } from '@nestjs/webhooks/testing';
import { drizzle } from 'drizzle-orm/pglite';
import { migrate } from 'drizzle-orm/pglite/migrator';
import { fileURLToPath } from 'node:url';
import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { AppModule } from '../src/app.module.js';
import * as schema from '../src/database/schema.js';
import { OrdersService } from '../src/orders/orders.service.js';

const PAYMENTS_SECRET = \`whsec_\${Buffer.alloc(32, 1).toString('base64')}\`;
const CARRIER_SECRET = 'carrier_test_secret';

describe('Order webhooks', () => {
  const client = new PGlite(); // PostgreSQL, in-process
  const db = drizzle({ client });
  const transport = new InMemoryWebhookTransport(); // records requests instead of sending them
  const partner = { id: 'northside', name: 'Northside Pet Supplies' };
  let app: INestApplication;
  let relay: OutboxRelay;
  let worker: WebhookWorker;
  let endpoint: { id: string; secret: string };

  beforeAll(async () => {
    // The real migrations: the order tables. The stores create their schemas when the app starts.
    await migrate(db, { migrationsFolder: fileURLToPath(new URL('../drizzle', import.meta.url)) });
    process.env.PAYMENTS_WEBHOOK_SECRET = PAYMENTS_SECRET;
    process.env.CARRIER_WEBHOOK_SECRET = CARRIER_SECRET;
    process.env.OUTBOX_RELAY = 'off'; // no poll loops: the test drives the relay and the worker
    process.env.WEBHOOKS_WORKER = 'off';
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(getDrizzleToken())
      .useValue(db) // the stores' factories inject it too
      .overrideProvider(WebhookTransport)
      .useValue(transport)
      .compile();
    app = moduleRef.createNestApplication({ rawBody: true });
    await app.init();
    relay = app.get(OutboxRelay);
    worker = app.get(WebhookWorker);
    endpoint = await app.get(WebhookEndpoints).create({ url: 'https://hooks.northside.example.com/store', eventTypes: ['*'], tenant: partner.id });
  });

  afterAll(async () => {
    await app.close();
    await client.close();
  });

  /** Publishes committed messages (the fan-out), then runs one worker batch. */
  const deliver = async () => {
    await relay.runOnce();
    return worker.runOnce();
  };
  const shipment = (orderId: string, id = 'evt_1') =>
    signWebhook({
      scheme: 'stripe',
      header: 'Carrier-Signature',
      secret: CARRIER_SECRET,
      payload: { id, type: 'shipment.shipped', data: { orderId, trackingNumber: 'TRK-1' } },
    });

  it("sends order.shipped to the partner once the carrier's webhook commits", async () => {
    const order = await app.get(OrdersService).placeOrder(partner, { items: [{ productId: 'salmon-kibble-2kg', quantity: 1 }] });
    const paid = signWebhook({
      scheme: 'standard',
      secret: PAYMENTS_SECRET,
      payload: { type: 'payment.succeeded', data: { paymentId: 'pay_1', orderId: order.id, amount: order.total } },
    });
    await request(app.getHttpServer()).post('/webhooks/payments').set(paid.headers).send(paid.body).expect(200);
    const shipped = shipment(order.id);
    await request(app.getHttpServer()).post('/webhooks/carrier').set(shipped.headers).send(shipped.body).expect(200);
    expect(transport.sent).toEqual([]); // nothing until the outbox relays the commit

    expect(await deliver()).toMatchObject({ delivered: 1 });

    const sent = transport.single({ type: 'order.shipped', endpointId: endpoint.id });
    expect(sent.data).toEqual({ orderId: order.id, trackingNumber: 'TRK-1' });
    expect(sent.isSignedWith(endpoint.secret)).toBe(true);
  });

  it('processes a redelivered shipment webhook once', async () => {
    const [order] = await db.select().from(schema.orders);
    const shipped = shipment(order!.id);
    await request(app.getHttpServer()).post('/webhooks/carrier').set(shipped.headers).send(shipped.body).expect(200, '');
    expect(await deliver()).toMatchObject({ claimed: 0 });
    expect(transport.sent).toHaveLength(1);
  });

  it('refuses a webhook whose body was altered', async () => {
    const shipped = shipment('order-x', 'evt_2');
    await request(app.getHttpServer())
      .post('/webhooks/carrier')
      .set(shipped.headers)
      .send(shipped.body.replace('TRK-1', 'TRK-2'))
      .expect(401);
    expect(await deliver()).toMatchObject({ claimed: 0 });
  });
});
`),cf()()(),Aa(1985,`ul`)(1986,`li`),bT(1987,`The outbox, both stores, the migrations, the fan-out, the signing and the verification are real. Only the network is replaced: `),Aa(1988,`code`),bT(1989,`InMemoryWebhookTransport`),cf(),bT(1990,` answers 200 and keeps every request, and `),Aa(1991,`code`),bT(1992,`respondWith(503)`),cf(),bT(1993,` or a function simulates a partner that is down, slow or picky.`),cf(),Aa(1994,`li`)(1995,`code`),bT(1996,`deliver()`),cf(),bT(1997,` is the whole pipeline after the commit: `),Aa(1998,`code`),bT(1999,`relay.runOnce()`),cf(),bT(2e3,` publishes the committed messages (the fan-out creates the deliveries), `),Aa(2001,`code`),bT(2002,`worker.runOnce()`),cf(),bT(2003,` claims one batch and sends it.`),cf(),Aa(2004,`li`)(2005,`code`),bT(2006,`SentWebhook.isSignedWith(secret)`),cf(),bT(2007,` verifies the `),Aa(2008,`code`),bT(2009,`v1`),cf(),bT(2010,` signature with an endpoint's secret, and `),Aa(2011,`code`),bT(2012,`data`),cf(),bT(2013,` is the body's `),Aa(2014,`code`),bT(2015,`data`),cf(),bT(2016,`, so a test asserts on what the partner would have verified and read.`),cf(),Aa(2017,`li`)(2018,`code`),bT(2019,`signWebhook()`),cf(),bT(2020,` produces the body and headers the payment provider, Stripe or GitHub would send. Reuse its `),Aa(2021,`code`),bT(2022,`id`),cf(),bT(2023,` for a redelivery, move `),Aa(2024,`code`),bT(2025,`timestamp`),cf(),bT(2026,` to test the tolerance, change a byte of the body for a tampered request.`),cf(),Aa(2027,`li`),bT(2028,`For behavior that depends on time, such as backoff, leases and the rotation overlap, move `),Aa(2029,`code`),bT(2030,`Date.now()`),cf(),bT(2031,` forward with `),Aa(2032,`code`),bT(2033,`vi.spyOn(Date, 'now')`),cf(),bT(2034,`. The worker and the stores take the time from it, and real timers keep running for sockets.`),cf(),Aa(2035,`li`),bT(2036,`The example's `),Aa(2037,`code`),bT(2038,`tutorial.e2e-spec.ts`),cf(),bT(2039,` runs every section of this page over real HTTP, on PGlite and on a PostgreSQL server: the API delivers to the partner's receiver through the default transport, with the outage, the replay, the redeliveries and the rotation. Its `),Aa(2040,`code`),bT(2041,`zod.e2e-spec.ts`),cf(),bT(2042,` boots the same app with the Zod variants of the DTOs and `),Aa(2043,`code`),bT(2044,`StandardSchemaValidationPipe`),cf(),bT(2045,`. Its store tests run the stores through Drizzle on PGlite, PostgreSQL and MySQL, and through TypeORM on PostgreSQL: the contract suites, a dispatch that commits and rolls back with the order, and the schemas in production.`),cf()(),Aa(2046,`p`),bT(2047,`See `),Aa(2048,`a`,79),bT(2049,`End-to-end testing`),cf(),bT(2050,` for more about the testing setup.`),cf(),Aa(2051,`h4`,80)(2052,`span`),bT(2053,`Delivery guarantees`),cf()(),Aa(2054,`p`),bT(2055,`Outgoing webhooks are delivered `),Aa(2056,`strong`),bT(2057,`at least once`),cf(),bT(2058,`; the receiver deduplicates by `),Aa(2059,`code`),bT(2060,`webhook-id`),cf(),bT(2061,`.`),cf(),Aa(2062,`table`)(2063,`thead`)(2064,`tr`)(2065,`th`),bT(2066,`Situation`),cf(),Aa(2067,`th`),bT(2068,`Outcome`),cf()()(),Aa(2069,`tbody`)(2070,`tr`)(2071,`td`),bT(2072,`The order's transaction rolls back`),cf(),Aa(2073,`td`),bT(2074,`The message never existed and nothing is sent`),cf()(),Aa(2075,`tr`)(2076,`td`),bT(2077,`The order's transaction commits`),cf(),Aa(2078,`td`),bT(2079,`One delivery per subscribed endpoint of the tenant, eventually delivered or failed with its attempt log`),cf()(),Aa(2080,`tr`)(2081,`td`),bT(2082,`The outbox redelivers the message (a relay crashed after the fan-out)`),cf(),Aa(2083,`td`),bT(2084,`The fan-out is idempotent: one delivery per message and endpoint`),cf()(),Aa(2085,`tr`)(2086,`td`),bT(2087,`The endpoint was created after the message, or is disabled`),cf(),Aa(2088,`td`),bT(2089,`It doesn't receive it, and a replay doesn't bring it back`),cf()(),Aa(2090,`tr`)(2091,`td`),bT(2092,`A worker dies after claiming`),cf(),Aa(2093,`td`),bT(2094,`Sent by another worker once the lease expires (`),Aa(2095,`code`),bT(2096,`worker.lease`),cf(),bT(2097,`, 1 minute)`),cf()(),Aa(2098,`tr`)(2099,`td`),bT(2100,`A worker dies after sending, before recording`),cf(),Aa(2101,`td`)(2102,`strong`),bT(2103,`Sent twice`),cf(),bT(2104,`, with the same `),Aa(2105,`code`),bT(2106,`webhook-id`),cf(),bT(2107,`, once the lease expires`),cf()(),Aa(2108,`tr`)(2109,`td`),bT(2110,`Two workers, same delivery`),cf(),Aa(2111,`td`),bT(2112,`A claim is exclusive for the lease, and every later write is fenced by it`),cf()(),Aa(2113,`tr`)(2114,`td`),bT(2115,`The partner answers 2xx`),cf(),Aa(2116,`td`),bT(2117,`Delivered`),cf()(),Aa(2118,`tr`)(2119,`td`),bT(2120,`It answers anything else, or nothing`),cf(),Aa(2121,`td`),bT(2122,`Retried with backoff, `),Aa(2123,`code`),bT(2124,`Retry-After`),cf(),bT(2125,` honored; 429, 502, 503 and 504 pace the endpoint`),cf()(),Aa(2126,`tr`)(2127,`td`),bT(2128,`It answers 410 Gone`),cf(),Aa(2129,`td`),bT(2130,`Failed (`),Aa(2131,`code`),bT(2132,`rejected`),cf(),bT(2133,`), and the endpoint is disabled (`),Aa(2134,`code`),bT(2135,`gone`),cf(),bT(2136,`)`),cf()(),Aa(2137,`tr`)(2138,`td`),bT(2139,`Every attempt fails for `),Aa(2140,`code`),bT(2141,`disableEndpointAfter`),cf()(),Aa(2142,`td`),bT(2143,`The endpoint is disabled (`),Aa(2144,`code`),bT(2145,`failing`),cf(),bT(2146,`), once`),cf()(),Aa(2147,`tr`)(2148,`td`),bT(2149,`A partner asks for a replay`),cf(),Aa(2150,`td`),bT(2151,`A new round with the same `),Aa(2152,`code`),bT(2153,`webhook-id`),cf(),bT(2154,`, so its inbox skips it`),cf()()()(),Aa(2155,`p`),bT(2156,`Deliveries have `),Aa(2157,`strong`),bT(2158,`no order`),cf(),bT(2159,`. A worker sends one endpoint's deliveries one at a time, most overdue first, but a failed attempt waits out its backoff while later messages go out, several workers send to the same endpoint at once, and a replay sends an old message now. Two updates of one order can reach the partner in either order. Receivers cope as they do with duplicates: the body's `),Aa(2160,`code`),bT(2161,`timestamp`),cf(),bT(2162,` is when the message was dispatched (`),Aa(2163,`code`),bT(2164,`webhook-timestamp`),cf(),bT(2165,` is when this attempt was signed), so a handler can ignore an event older than the state it already holds, or treat the webhook as a signal and read the current state from the API.`),cf(),Aa(2166,`p`),bT(2167,`Incoming webhooks run their handler `),Aa(2168,`strong`),bT(2169,`once per webhook id and receiver in the common case`),cf(),bT(2170,` with the default inbox (again after a crash between the handler and the inbox write, or when two copies race on two instances), and their `),Aa(2171,`code`),bT(2172,`processInTransaction()`),cf(),bT(2173,` work `),Aa(2174,`strong`),bT(2175,`exactly once`),cf(),bT(2176,`.`),cf(),Aa(2177,`h4`,81)(2178,`span`),bT(2179,`Production checklist`),cf()(),Aa(2180,`ul`)(2181,`li`),bT(2182,`Keep the endpoints and the deliveries in your application's database, on a database server: register `),Aa(2183,`code`),bT(2184,`PostgresWebhookStore`),cf(),bT(2185,`, or `),Aa(2186,`code`),bT(2187,`MySqlWebhookStore`),cf(),bT(2188,`, and the outbox's store next to it (`),Aa(2189,`a`,43),bT(2190,`Keep webhooks in your database`),cf(),bT(2191,`). The production guard refuses to start in memory; `),Aa(2192,`code`),bT(2193,`allowInMemoryStorage`),cf(),bT(2194,` is for a process whose pending deliveries you can afford to lose.`),cf(),Aa(2195,`li`),bT(2196,`Apply both stores' migrations before a new version starts, with `),Aa(2197,`code`),bT(2198,`npx @nestjs/webhooks migrate`),cf(),bT(2199,` and `),Aa(2200,`code`),bT(2201,`npx @nestjs/outbox migrate`),cf(),bT(2202,` or your migration tool, and check them in CI with `),Aa(2203,`code`),bT(2204,`status`),cf(),bT(2205,`. With `),Aa(2206,`code`),bT(2207,`NODE_ENV=production`),cf(),bT(2208,`, the stores don't migrate at startup: a schema that's behind fails it instead.`),cf(),Aa(2209,`li`),bT(2210,`On PostgreSQL, keep the database's default isolation at READ COMMITTED: the stores refuse a stricter one. On MySQL, run a transaction again when MySQL breaks a deadlock in it (error 1213): it rolled back, with the messages it dispatched and the webhooks it recorded.`),cf(),Aa(2211,`li`),bT(2212,`Leave `),Aa(2213,`code`),bT(2214,`delivery.allowHttp`),cf(),bT(2215,` and `),Aa(2216,`code`),bT(2217,`delivery.allowPrivateNetworks`),cf(),bT(2218,` off. A partner's URL is untrusted input, and the transport resolves it itself and pins the address it checked. Use `),Aa(2219,`code`),bT(2220,`allowedAddresses`),cf(),bT(2221,` for the one private range you really deliver to, and alert on `),Aa(2222,`code`),bT(2223,`destination-blocked`),cf(),bT(2224,` events: a customer pointing a webhook at your metadata service is worth a look.`),cf(),Aa(2225,`li`),bT(2226,`Run the worker in a few instances (`),Aa(2227,`code`),bT(2228,`WEBHOOKS_WORKER`),cf(),bT(2229,`), not in every API pod: each claim is a short transaction, and the leases keep them from sending the same delivery twice.`),cf(),Aa(2230,`li`),bT(2231,`Alert on `),Aa(2232,`code`),bT(2233,`lagMs`),cf(),bT(2234,` and `),Aa(2235,`code`),bT(2236,`failed`),cf(),bT(2237,` from `),Aa(2238,`code`),bT(2239,`deliveries.stats()`),cf(),bT(2240,`, and on `),Aa(2241,`code`),bT(2242,`endpoint-disabled`),cf(),bT(2243,`: tell the partner, by email, that their endpoint was switched off and why.`),cf(),Aa(2244,`li`),bT(2245,`Version the payloads. A partner keeps its handler for years, and `),Aa(2246,`code`),bT(2247,`retry()`),cf(),bT(2248,` re-sends the body as it was dispatched. Add fields to a type's `),Aa(2249,`code`),bT(2250,`data`),cf(),bT(2251,`, never rename or remove one. For a breaking change, add a new type, `),Aa(2252,`code`),bT(2253,`order.shipped.v2`),cf(),bT(2254,` in `),Aa(2255,`code`),bT(2256,`eventTypes`),cf(),bT(2257,`, and dispatch both in the same transaction (`),Aa(2258,`code`),bT(2259,`dispatch()`),cf(),bT(2260,` takes an array) while partners move their subscriptions over; an endpoint subscribed to `),Aa(2261,`code`),bT(2262,`*`),cf(),bT(2263,` gets both. Then stop dispatching the old type. Replays of older messages still carry the old shape until the log is pruned.`),cf(),Aa(2264,`li`),bT(2265,`Give partners the delivery log and the replay. It answers "did you send it?" before they open a ticket.`),cf(),Aa(2266,`li`),bT(2267,`Rotate secrets with the overlap, never with `),Aa(2268,`code`),bT(2269,`overlap: 0`),cf(),bT(2270,` unless a secret leaked, and seal them at rest with `),Aa(2271,`code`),bT(2272,`WEBHOOKS_ENCRYPTION_KEYS`),cf(),bT(2273,`. Keep the keys in a secret manager.`),cf(),Aa(2274,`li`),bT(2275,`Prune the log. `),Aa(2276,`code`),bT(2277,`deliveries.prune('30d')`),cf(),bT(2278,` from a `),Aa(2279,`a`,82),bT(2280,`cron job`),cf(),bT(2281,`; nothing schedules it for you.`),cf(),Aa(2282,`li`),bT(2283,`For incoming webhooks, keep `),Aa(2284,`code`),bT(2285,`rawBody: true`),cf(),bT(2286,`, and keep the receivers' secrets in the environment. List the old and the new secret while a provider rotates.`),cf(),Aa(2287,`li`),bT(2288,`Keep provider handlers short and idempotent in their own right (a status check inside the transaction), even with `),Aa(2289,`code`),bT(2290,`processInTransaction()`),cf(),bT(2291,`: the inbox protects against a redelivery, the check against a provider that sends two different events for one fact.`),cf(),Aa(2292,`li`),bT(2293,`Prune the inbox with `),Aa(2294,`code`),bT(2295,`OutboxInbox.prune()`),cf(),bT(2296,` on a window longer than any provider's retry schedule (Stripe retries for three days, GitHub doesn't retry at all). For GitHub, that window is also how long a replayed request is caught, with the deduplication keyed on the body (`),Aa(2297,`a`,71),bT(2298,`Other senders`),cf(),bT(2299,`).`),cf(),Aa(2300,`li`),bT(2301,`Call `),Aa(2302,`code`),bT(2303,`app.enableShutdownHooks()`),cf(),bT(2304,`, so a deploy lets attempts in flight finish and releases the rest.`),cf(),Aa(2305,`li`),bT(2306,`For a store of your own, run the contract suites with `),Aa(2307,`code`),bT(2308,`concurrent: true`),cf(),bT(2309,` in CI, against the database version you run in production.`),cf()(),Aa(2310,`h4`,83)(2311,`span`),bT(2312,`The store contract`),cf()(),Aa(2313,`p`)(2314,`code`),bT(2315,`PostgresWebhookStore`),cf(),bT(2316,` and `),Aa(2317,`code`),bT(2318,`MySqlWebhookStore`),cf(),bT(2319,` implement both of the package's contracts, `),Aa(2320,`code`),bT(2321,`WebhookEndpointStore`),cf(),bT(2322,` and `),Aa(2323,`code`),bT(2324,`WebhookDeliveryStore`),cf(),bT(2325,`. For another database, implement them in a provider of your own. The JSDoc of each method in the two interfaces states its rule, and the race it prevents.`),cf(),Aa(2326,`p`)(2327,`strong`),bT(2328,`Registration.`),cf(),bT(2329,` The store is an ordinary singleton provider that calls `),Aa(2330,`code`),bT(2331,`registerSource()`),cf(),bT(2332,` on the injectable `),Aa(2333,`code`),bT(2334,`WebhooksStorage`),cf(),bT(2335,` in its constructor, naming the contracts it implements: `),Aa(2336,`code`),bT(2337,`endpoints`),cf(),bT(2338,`, `),Aa(2339,`code`),bT(2340,`deliveries`),cf(),bT(2341,`, or both from one class. The registry checks the shape at once, refuses a second registration unless it passes `),Aa(2342,`code`),bT(2343,`replace: true`),cf(),bT(2344,`, and locks when `),Aa(2345,`code`),bT(2346,`WebhooksModule`),cf(),bT(2347,` initializes, logging the store in use. With nothing registered, the module uses `),Aa(2348,`code`),bT(2349,`InMemoryWebhookStore`),cf(),bT(2350,`, which loses the endpoints and the pending deliveries on restart and can't share them between instances. With `),Aa(2351,`code`),bT(2352,`NODE_ENV=production`),cf(),bT(2353,`, startup fails instead, unless `),Aa(2354,`code`),bT(2355,`allowInMemoryStorage: true`),cf(),bT(2356,` accepts that.`),cf(),Aa(2357,`p`)(2358,`strong`),bT(2359,`No transaction handle.`),cf(),bT(2360,` Unlike the outbox's `),Aa(2361,`code`),bT(2362,`add()`),cf(),bT(2363,`, no method here takes your transaction: the outbox carries the message out of your transaction, and the webhook store runs on its own connections.`),cf(),Aa(2364,`p`)(2365,`strong`),bT(2366,`The methods.`),cf(),bT(2367,` The ones marked atomic are one conditional statement or one transaction with a row lock, never a read followed by a write; they are the ones the contract suites race.`),cf(),Aa(2368,`table`)(2369,`thead`)(2370,`tr`)(2371,`th`),bT(2372,`Method`),cf(),Aa(2373,`th`),bT(2374,`What it does`),cf(),Aa(2375,`th`),bT(2376,`Atomic`),cf()()(),Aa(2377,`tbody`)(2378,`tr`)(2379,`td`)(2380,`code`),bT(2381,`createEndpoint`),cf(),bT(2382,`, `),Aa(2383,`code`),bT(2384,`getEndpoint`),cf(),bT(2385,`, `),Aa(2386,`code`),bT(2387,`listEndpoints`),cf(),bT(2388,`, `),Aa(2389,`code`),bT(2390,`updateEndpoint`),cf(),bT(2391,`, `),Aa(2392,`code`),bT(2393,`deleteEndpoint`),cf()(),Aa(2394,`td`),bT(2395,`An endpoint's lifecycle; `),Aa(2396,`code`),bT(2397,`list`),cf(),bT(2398,` newest first, by tenant`),cf(),Aa(2399,`td`),bT(2400,`No`),cf()(),Aa(2401,`tr`)(2402,`td`)(2403,`code`),bT(2404,`findSubscribedEndpoints(tenant, type)`),cf()(),Aa(2405,`td`),bT(2406,`The enabled endpoints of exactly this tenant subscribed to the type (or `),Aa(2407,`code`),bT(2408,`*`),cf(),bT(2409,`): the fan-out's query`),cf(),Aa(2410,`td`),bT(2411,`No, but the suite checks it never returns another tenant's`),cf()(),Aa(2412,`tr`)(2413,`td`)(2414,`code`),bT(2415,`addEndpointSecret(id, secret, expireOthersAt, now)`),cf()(),Aa(2416,`td`),bT(2417,`The rotation: the new secret first, the others expiring`),cf(),Aa(2418,`td`),bT(2419,`Yes: the row is locked, so two rotations both land`),cf()(),Aa(2420,`tr`)(2421,`td`)(2422,`code`),bT(2423,`recordEndpointFailure(id, failure)`),cf()(),Aa(2424,`td`),bT(2425,`Sets `),Aa(2426,`code`),bT(2427,`failingSince`),cf(),bT(2428,` on the first failure; disables the endpoint once it has been failing long enough, and says so once`),cf(),Aa(2429,`td`),bT(2430,`Yes: the row is locked`),cf()(),Aa(2431,`tr`)(2432,`td`)(2433,`code`),bT(2434,`recordEndpointSuccess(id)`),cf()(),Aa(2435,`td`),bT(2436,`Clears `),Aa(2437,`code`),bT(2438,`failingSince`),cf()(),Aa(2439,`td`),bT(2440,`No`),cf()(),Aa(2441,`tr`)(2442,`td`)(2443,`code`),bT(2444,`createDeliveries(message, deliveries)`),cf()(),Aa(2445,`td`),bT(2446,`The fan-out: the message unless it exists, each delivery unless its `),Aa(2447,`code`),bT(2448,`(messageId, endpointId)`),cf(),bT(2449,` exists`),cf(),Aa(2450,`td`),bT(2451,`Yes: a unique key on the pair, such as PostgreSQL's `),Aa(2452,`code`),bT(2453,`ON CONFLICT DO NOTHING`),cf(),bT(2454,` on it`),cf()(),Aa(2455,`tr`)(2456,`td`)(2457,`code`),bT(2458,`claimDeliveries(request)`),cf()(),Aa(2459,`td`),bT(2460,`Leases due deliveries, most overdue first, with their message`),cf(),Aa(2461,`td`),bT(2462,`Yes: `),Aa(2463,`code`),bT(2464,`FOR UPDATE SKIP LOCKED`),cf(),bT(2465,`, then the lease`),cf()(),Aa(2466,`tr`)(2467,`td`)(2468,`code`),bT(2469,`recordDeliveryAttempt(id, owner, update)`),cf()(),Aa(2470,`td`),bT(2471,`The attempt's outcome and log row, if `),Aa(2472,`code`),bT(2473,`owner`),cf(),bT(2474,` still holds the lease`),cf(),Aa(2475,`td`),bT(2476,`Yes: fenced by the lease owner`),cf()(),Aa(2477,`tr`)(2478,`td`)(2479,`code`),bT(2480,`releaseDeliveries(ids, owner, nextAttemptAt)`),cf()(),Aa(2481,`td`),bT(2482,`Gives leases back, postponing when asked`),cf(),Aa(2483,`td`),bT(2484,`Yes: fenced`),cf()(),Aa(2485,`tr`)(2486,`td`)(2487,`code`),bT(2488,`getDelivery`),cf(),bT(2489,`, `),Aa(2490,`code`),bT(2491,`getMessage`),cf(),bT(2492,`, `),Aa(2493,`code`),bT(2494,`listDeliveries`),cf(),bT(2495,`, `),Aa(2496,`code`),bT(2497,`listDeliveryAttempts`),cf(),bT(2498,`, `),Aa(2499,`code`),bT(2500,`deliveryStats`),cf()(),Aa(2501,`td`),bT(2502,`Reads; `),Aa(2503,`code`),bT(2504,`list`),cf(),bT(2505,` newest first, by tenant, endpoint, message, status and type`),cf(),Aa(2506,`td`),bT(2507,`No`),cf()(),Aa(2508,`tr`)(2509,`td`)(2510,`code`),bT(2511,`retryDeliveries(filter, now)`),cf()(),Aa(2512,`td`),bT(2513,`A new round for the matches that aren't leased`),cf(),Aa(2514,`td`),bT(2515,`Yes: one `),Aa(2516,`code`),bT(2517,`UPDATE`),cf(),bT(2518,` with the lease in its `),Aa(2519,`code`),bT(2520,`WHERE`),cf()()(),Aa(2521,`tr`)(2522,`td`)(2523,`code`),bT(2524,`pruneDeliveries(before)`),cf()(),Aa(2525,`td`),bT(2526,`Finished deliveries older than `),Aa(2527,`code`),bT(2528,`before`),cf(),bT(2529,`, their logs, and the messages left without deliveries`),cf(),Aa(2530,`td`),bT(2531,`No, but never a pending delivery`),cf()()()(),Aa(2532,`p`)(2533,`strong`),bT(2534,`Test it`),cf(),bT(2535,` with `),Aa(2536,`code`),bT(2537,`webhookEndpointStoreContract()`),cf(),bT(2538,` and `),Aa(2539,`code`),bT(2540,`webhookDeliveryStoreContract()`),cf(),bT(2541,` from `),Aa(2542,`code`),bT(2543,`@nestjs/webhooks/testing`),cf(),bT(2544,`. Each case gets a store on empty tables from the function you pass. The tutorial's tests run both suites against `),Aa(2545,`code`),bT(2546,`PostgresWebhookStore`),cf(),bT(2547,` through Drizzle, as you would against yours:`),cf(),Aa(2548,`app-copy-button`,47)(2549,`span`,48),bT(2550),LT(2551,`extension`),Wa(2552,`app-tabs`,null,33),cf(),Aa(2554,`pre`)(2555,`code`,49),bT(2556,`
/** A store on emptied tables, built the way Nest builds it: with the database and a registry. */
async function freshStore(db: Database) {
  await db.execute(sql.raw(\`TRUNCATE \${STORE_TABLES.join(', ')} RESTART IDENTITY\`));
  return { store: new PostgresWebhookStore({ executor: fromDrizzle(db) }, new WebhooksStorage()) };
}

// ...

// The concurrency cases run too; with one connection, PGlite runs them one statement at a time.
describe('the endpoint contract', () => {
  for (const c of webhookEndpointStoreContract(() => freshStore(db), { concurrent: true })) {
    it(c.name, c.run);
  }
});
describe('the delivery contract', () => {
  for (const c of webhookDeliveryStoreContract(() => freshStore(db), { concurrent: true })) {
    it(c.name, c.run);
  }
});
`),cf()()(),Aa(2557,`p`),bT(2558,`With `),Aa(2559,`code`),bT(2560,`concurrent: true`),cf(),bT(2561,`, the suites race rotations and failures on one endpoint, workers claiming side by side, fan-outs of one message, a stale worker against a takeover, and a retry against a claim. On PGlite, with one connection, they pass serialized: run them on a server too, through a pool of several connections, where a store without the right locks fails them. The package's own tests run the suites against a hand-written Drizzle store, as the proof that a store written against the interfaces passes them.`),cf(),Aa(2562,`h4`,84)(2563,`span`),bT(2564,`Reference`),cf()(),Aa(2565,`h5`,85)(2566,`span`),bT(2567,`Module options`),cf()(),Aa(2568,`p`)(2569,`code`),bT(2570,`WebhooksModule.forRoot()`),cf(),bT(2571,` takes these options. `),Aa(2572,`code`),bT(2573,`forRootAsync()`),cf(),bT(2574,` takes `),Aa(2575,`code`),bT(2576,`outgoing`),cf(),bT(2577,`, `),Aa(2578,`code`),bT(2579,`transport`),cf(),bT(2580,` (as a class), `),Aa(2581,`code`),bT(2582,`imports`),cf(),bT(2583,` and `),Aa(2584,`code`),bT(2585,`isGlobal`),cf(),bT(2586,` at the top level, next to `),Aa(2587,`code`),bT(2588,`useFactory`),cf(),bT(2589,`, `),Aa(2590,`code`),bT(2591,`useClass`),cf(),bT(2592,` or `),Aa(2593,`code`),bT(2594,`useExisting`),cf(),bT(2595,`, and the factory returns the rest. See `),Aa(2596,`a`,50),bT(2597,`Register the modules`),cf(),bT(2598,`.`),cf(),Aa(2599,`table`)(2600,`thead`)(2601,`tr`)(2602,`th`),bT(2603,`Option`),cf(),Aa(2604,`th`),bT(2605,`Default`),cf(),Aa(2606,`th`),bT(2607,`Description`),cf()()(),Aa(2608,`tbody`)(2609,`tr`)(2610,`td`)(2611,`code`),bT(2612,`eventTypes`),cf()(),Aa(2613,`td`),bT(2614,`any type`),cf(),Aa(2615,`td`),bT(2616,`The message types this application sends. `),Aa(2617,`code`),bT(2618,`dispatch()`),cf(),bT(2619,` and new endpoints accept only these (endpoints also accept `),Aa(2620,`code`),bT(2621,`*`),cf(),bT(2622,`).`),cf()(),Aa(2623,`tr`)(2624,`td`)(2625,`code`),bT(2626,`retry`),cf()(),Aa(2627,`td`),bT(2628,`10 attempts`),cf(),Aa(2629,`td`)(2630,`code`),bT(2631,`attempts`),cf(),bT(2632,` (including the first), `),Aa(2633,`code`),bT(2634,`backoff`),cf(),bT(2635,` and `),Aa(2636,`code`),bT(2637,`retryIf(error, attempt, delivery)`),cf(),bT(2638,`. A number sets `),Aa(2639,`code`),bT(2640,`attempts`),cf(),bT(2641,`, and `),Aa(2642,`code`),bT(2643,`false`),cf(),bT(2644,` means a single attempt.`),cf()(),Aa(2645,`tr`)(2646,`td`)(2647,`code`),bT(2648,`retry.backoff`),cf()(),Aa(2649,`td`),bT(2650,`see description`),cf(),Aa(2651,`td`)(2652,`code`),bT(2653,`delay`),cf(),bT(2654,` (`),Aa(2655,`code`),bT(2656,`'5s'`),cf(),bT(2657,`), `),Aa(2658,`code`),bT(2659,`factor`),cf(),bT(2660,` (4), `),Aa(2661,`code`),bT(2662,`maxDelay`),cf(),bT(2663,` (`),Aa(2664,`code`),bT(2665,`'1d'`),cf(),bT(2666,`, also the cap for `),Aa(2667,`code`),bT(2668,`Retry-After`),cf(),bT(2669,`), `),Aa(2670,`code`),bT(2671,`jitter`),cf(),bT(2672,`: `),Aa(2673,`code`),bT(2674,`'equal'`),cf(),bT(2675,`, `),Aa(2676,`code`),bT(2677,`'full'`),cf(),bT(2678,` or `),Aa(2679,`code`),bT(2680,`'none'`),cf(),bT(2681,` (`),Aa(2682,`code`),bT(2683,`'equal'`),cf(),bT(2684,`). Or a function of the attempt, the error and the delivery that returns a duration.`),cf()(),Aa(2685,`tr`)(2686,`td`)(2687,`code`),bT(2688,`disableEndpointAfter`),cf()(),Aa(2689,`td`)(2690,`code`),bT(2691,`'5d'`),cf()(),Aa(2692,`td`),bT(2693,`Disables an endpoint that has failed every attempt for this long without a success. `),Aa(2694,`code`),bT(2695,`false`),cf(),bT(2696,` never disables one.`),cf()(),Aa(2697,`tr`)(2698,`td`)(2699,`code`),bT(2700,`secretRotationOverlap`),cf()(),Aa(2701,`td`)(2702,`code`),bT(2703,`'24h'`),cf()(),Aa(2704,`td`),bT(2705,`How long a rotated-out secret keeps signing next to the new one.`),cf()(),Aa(2706,`tr`)(2707,`td`)(2708,`code`),bT(2709,`delivery.timeout`),cf()(),Aa(2710,`td`)(2711,`code`),bT(2712,`'15s'`),cf()(),Aa(2713,`td`),bT(2714,`One attempt: DNS, connection, TLS, request and response. Shorter than `),Aa(2715,`code`),bT(2716,`worker.lease`),cf(),bT(2717,`.`),cf()(),Aa(2718,`tr`)(2719,`td`)(2720,`code`),bT(2721,`delivery.allowHttp`),cf()(),Aa(2722,`td`)(2723,`code`),bT(2724,`false`),cf()(),Aa(2725,`td`),bT(2726,`Accepts `),Aa(2727,`code`),bT(2728,`http://`),cf(),bT(2729,` endpoint URLs. For development.`),cf()(),Aa(2730,`tr`)(2731,`td`)(2732,`code`),bT(2733,`delivery.allowPrivateNetworks`),cf()(),Aa(2734,`td`)(2735,`code`),bT(2736,`false`),cf()(),Aa(2737,`td`),bT(2738,`Delivers to loopback, private, shared-address and unique-local ranges. For development. Link-local and cloud metadata addresses stay blocked.`),cf()(),Aa(2739,`tr`)(2740,`td`)(2741,`code`),bT(2742,`delivery.allowedAddresses`),cf()(),Aa(2743,`td`),bT(2744,`none`),cf(),Aa(2745,`td`),bT(2746,`CIDR ranges, such as `),Aa(2747,`code`),bT(2748,`10.20.0.0/16`),cf(),bT(2749,`, delivered to although they'd be blocked.`),cf()(),Aa(2750,`tr`)(2751,`td`)(2752,`code`),bT(2753,`delivery.maxResponseSize`),cf()(),Aa(2754,`td`),bT(2755,`4096`),cf(),Aa(2756,`td`),bT(2757,`Bytes of the response body read and kept in the log.`),cf()(),Aa(2758,`tr`)(2759,`td`)(2760,`code`),bT(2761,`delivery.userAgent`),cf()(),Aa(2762,`td`)(2763,`code`),bT(2764,`NestJS-Webhooks/1.0`),cf()(),Aa(2765,`td`),bT(2766,`The `),Aa(2767,`code`),bT(2768,`User-Agent`),cf(),bT(2769,` header.`),cf()(),Aa(2770,`tr`)(2771,`td`)(2772,`code`),bT(2773,`worker.enabled`),cf()(),Aa(2774,`td`)(2775,`code`),bT(2776,`true`),cf()(),Aa(2777,`td`),bT(2778,`Delivers in this process. `),Aa(2779,`code`),bT(2780,`false`),cf(),bT(2781,` in instances that only dispatch.`),cf()(),Aa(2782,`tr`)(2783,`td`)(2784,`code`),bT(2785,`worker.pollInterval`),cf()(),Aa(2786,`td`)(2787,`code`),bT(2788,`'1s'`),cf()(),Aa(2789,`td`),bT(2790,`The wait between polls when idle. `),Aa(2791,`code`),bT(2792,`notify()`),cf(),bT(2793,` polls at once.`),cf()(),Aa(2794,`tr`)(2795,`td`)(2796,`code`),bT(2797,`worker.batchSize`),cf()(),Aa(2798,`td`),bT(2799,`50`),cf(),Aa(2800,`td`),bT(2801,`Deliveries claimed per poll.`),cf()(),Aa(2802,`tr`)(2803,`td`)(2804,`code`),bT(2805,`worker.concurrency`),cf()(),Aa(2806,`td`),bT(2807,`10`),cf(),Aa(2808,`td`),bT(2809,`Endpoints delivered to in parallel. One endpoint's deliveries go one at a time.`),cf()(),Aa(2810,`tr`)(2811,`td`)(2812,`code`),bT(2813,`worker.lease`),cf()(),Aa(2814,`td`)(2815,`code`),bT(2816,`'1m'`),cf()(),Aa(2817,`td`),bT(2818,`How long a claim is exclusive. Longer than `),Aa(2819,`code`),bT(2820,`delivery.timeout`),cf(),bT(2821,`.`),cf()(),Aa(2822,`tr`)(2823,`td`)(2824,`code`),bT(2825,`encryption`),cf()(),Aa(2826,`td`),bT(2827,`off`),cf(),Aa(2828,`td`),bT(2829,`Seals endpoint secrets at rest. `),Aa(2830,`code`),bT(2831,`keys`),cf(),bT(2832,` lists 32-byte `),Aa(2833,`code`),bT(2834,`Buffer`),cf(),bT(2835,`s or strings of at least 32 characters, newest first: the first key encrypts, every key decrypts.`),cf()(),Aa(2836,`tr`)(2837,`td`)(2838,`code`),bT(2839,`receivers`),cf()(),Aa(2840,`td`),bT(2841,`none`),cf(),Aa(2842,`td`),bT(2843,`The senders whose webhooks this application accepts, by the name `),Aa(2844,`code`),bT(2845,`@VerifyWebhook()`),cf(),bT(2846,` uses (see the next table).`),cf()(),Aa(2847,`tr`)(2848,`td`)(2849,`code`),bT(2850,`transport`),cf()(),Aa(2851,`td`)(2852,`code`),bT(2853,`HttpWebhookTransport`),cf()(),Aa(2854,`td`),bT(2855,`A `),Aa(2856,`code`),bT(2857,`WebhookTransport`),cf(),bT(2858,` class at the top level, or an instance from the async factory.`),cf()(),Aa(2859,`tr`)(2860,`td`)(2861,`code`),bT(2862,`allowInMemoryStorage`),cf()(),Aa(2863,`td`)(2864,`code`),bT(2865,`false`),cf()(),Aa(2866,`td`),bT(2867,`Lets a production application start without registered stores.`),cf()(),Aa(2868,`tr`)(2869,`td`)(2870,`code`),bT(2871,`outgoing`),cf()(),Aa(2872,`td`)(2873,`code`),bT(2874,`true`),cf()(),Aa(2875,`td`),bT(2876,`Top level only. `),Aa(2877,`code`),bT(2878,`false`),cf(),bT(2879,` in a service that only receives webhooks: no endpoints, deliveries, worker or stores.`),cf()(),Aa(2880,`tr`)(2881,`td`)(2882,`code`),bT(2883,`imports`),cf()(),Aa(2884,`td`),bT(2885,`none`),cf(),Aa(2886,`td`),bT(2887,`Top level only. Modules whose exports a transport class injects.`),cf()(),Aa(2888,`tr`)(2889,`td`)(2890,`code`),bT(2891,`isGlobal`),cf()(),Aa(2892,`td`)(2893,`code`),bT(2894,`true`),cf()(),Aa(2895,`td`),bT(2896,`Top level only. Registers the module globally.`),cf()()()(),Aa(2897,`p`),bT(2898,`Durations are milliseconds or strings such as `),Aa(2899,`code`),bT(2900,`'15s'`),cf(),bT(2901,`, `),Aa(2902,`code`),bT(2903,`'24h'`),cf(),bT(2904,` or `),Aa(2905,`code`),bT(2906,`'5d'`),cf(),bT(2907,`. The options' injection token is `),Aa(2908,`code`),bT(2909,`WEBHOOKS_MODULE_OPTIONS`),cf(),bT(2910,`.`),cf(),Aa(2911,`p`),bT(2912,`Each entry of `),Aa(2913,`code`),bT(2914,`receivers`),cf(),bT(2915,` takes these options (see `),Aa(2916,`a`,70),bT(2917,`Receive the payment provider's webhooks`),cf(),bT(2918,` and `),Aa(2919,`a`,62),bT(2920,`Receive the carrier's Stripe-like webhooks`),cf(),bT(2921,`):`),cf(),Aa(2922,`table`)(2923,`thead`)(2924,`tr`)(2925,`th`),bT(2926,`Option`),cf(),Aa(2927,`th`),bT(2928,`Applies to`),cf(),Aa(2929,`th`),bT(2930,`Default`),cf(),Aa(2931,`th`),bT(2932,`Description`),cf()()(),Aa(2933,`tbody`)(2934,`tr`)(2935,`td`)(2936,`code`),bT(2937,`scheme`),cf()(),Aa(2938,`td`),bT(2939,`all`),cf(),Aa(2940,`td`),bT(2941,`required`),cf(),Aa(2942,`td`)(2943,`code`),bT(2944,`'standard'`),cf(),bT(2945,`, `),Aa(2946,`code`),bT(2947,`'stripe'`),cf(),bT(2948,`, `),Aa(2949,`code`),bT(2950,`'github'`),cf(),bT(2951,`, or an instance of a class extending `),Aa(2952,`code`),bT(2953,`WebhookSignatureScheme`),cf()()(),Aa(2954,`tr`)(2955,`td`)(2956,`code`),bT(2957,`secret`),cf()(),Aa(2958,`td`),bT(2959,`all`),cf(),Aa(2960,`td`),bT(2961,`required`),cf(),Aa(2962,`td`),bT(2963,`One secret, or an array while the sender rotates. Every one is tried.`),cf()(),Aa(2964,`tr`)(2965,`td`)(2966,`code`),bT(2967,`tolerance`),cf()(),Aa(2968,`td`)(2969,`code`),bT(2970,`standard`),cf(),bT(2971,`, `),Aa(2972,`code`),bT(2973,`stripe`),cf(),bT(2974,`, custom`),cf(),Aa(2975,`td`)(2976,`code`),bT(2977,`'5m'`),cf()(),Aa(2978,`td`),bT(2979,`The largest accepted distance between the signed timestamp and now, in either direction`),cf()(),Aa(2980,`tr`)(2981,`td`)(2982,`code`),bT(2983,`header`),cf()(),Aa(2984,`td`)(2985,`code`),bT(2986,`stripe`),cf()(),Aa(2987,`td`)(2988,`code`),bT(2989,`'stripe-signature'`),cf()(),Aa(2990,`td`),bT(2991,`The signature header, for senders that copied Stripe's scheme`),cf()(),Aa(2992,`tr`)(2993,`td`)(2994,`code`),bT(2995,`id`),cf()(),Aa(2996,`td`)(2997,`code`),bT(2998,`stripe`),cf(),bT(2999,`, `),Aa(3e3,`code`),bT(3001,`github`),cf()(),Aa(3002,`td`),bT(3003,`the payload's `),Aa(3004,`code`),bT(3005,`id`),cf(),bT(3006,`; the `),Aa(3007,`code`),bT(3008,`X-GitHub-Delivery`),cf(),bT(3009,` header, which isn't signed (see `),Aa(3010,`a`,71),bT(3011,`Other senders`),cf(),bT(3012,`)`),cf(),Aa(3013,`td`),bT(3014,`A function of the payload and the headers that returns the deduplication id, of at most 255 characters`),cf()(),Aa(3015,`tr`)(3016,`td`)(3017,`code`),bT(3018,`dedupe`),cf()(),Aa(3019,`td`),bT(3020,`all`),cf(),Aa(3021,`td`)(3022,`code`),bT(3023,`true`),cf()(),Aa(3024,`td`),bT(3025,`Skips a webhook id this receiver already processed`),cf()(),Aa(3026,`tr`)(3027,`td`)(3028,`code`),bT(3029,`consumer`),cf()(),Aa(3030,`td`),bT(3031,`all`),cf(),Aa(3032,`td`)(3033,`code`),bT(3034,`webhooks:<name>`),cf()(),Aa(3035,`td`),bT(3036,`The inbox consumer name. Keep it stable. At most 255 characters, the default included: a longer one fails the startup with a `),Aa(3037,`code`),bT(3038,`TypeError`),cf()()()()(),Aa(3039,`h5`,86)(3040,`span`),bT(3041,`PostgreSQL and MySQL stores`),cf()(),Aa(3042,`p`)(3043,`code`),bT(3044,`new PostgresWebhookStore(options, webhooksStorage)`),cf(),bT(3045,`, from `),Aa(3046,`code`),bT(3047,`@nestjs/webhooks/postgres`),cf(),bT(3048,`, and `),Aa(3049,`code`),bT(3050,`new MySqlWebhookStore(options, webhooksStorage)`),cf(),bT(3051,`, from `),Aa(3052,`code`),bT(3053,`@nestjs/webhooks/mysql`),cf(),bT(3054,`, take these options. The outbox's `),Aa(3055,`code`),bT(3056,`PostgresOutboxStore`),cf(),bT(3057,` and `),Aa(3058,`code`),bT(3059,`MySqlOutboxStore`),cf(),bT(3060,` take the same, with `),Aa(3061,`code`),bT(3062,`'nest_outbox'`),cf(),bT(3063,` as the default `),Aa(3064,`code`),bT(3065,`schema`),cf(),bT(3066,`:`),cf(),Aa(3067,`table`)(3068,`thead`)(3069,`tr`)(3070,`th`),bT(3071,`Option`),cf(),Aa(3072,`th`),bT(3073,`Default`),cf(),Aa(3074,`th`),bT(3075,`Meaning`),cf()()(),Aa(3076,`tbody`)(3077,`tr`)(3078,`td`)(3079,`code`),bT(3080,`executor`),cf()(),Aa(3081,`td`),bT(3082,`Required`),cf(),Aa(3083,`td`),bT(3084,`How the store reaches the database: `),Aa(3085,`code`),bT(3086,`fromDrizzle(db)`),cf(),bT(3087,`, `),Aa(3088,`code`),bT(3089,`fromTypeOrm(dataSource)`),cf(),bT(3090,`, `),Aa(3091,`code`),bT(3092,`fromPrisma(prisma, options)`),cf(),bT(3093,`, `),Aa(3094,`code`),bT(3095,`fromKysely(db)`),cf(),bT(3096,`, and `),Aa(3097,`code`),bT(3098,`fromPg(pool)`),cf(),bT(3099,` on PostgreSQL or `),Aa(3100,`code`),bT(3101,`fromMysql2(pool)`),cf(),bT(3102,` on MySQL, imported from the store's own subpath: the other dialect's executor doesn't compile`),cf()(),Aa(3103,`tr`)(3104,`td`)(3105,`code`),bT(3106,`schema`),cf()(),Aa(3107,`td`)(3108,`code`),bT(3109,`'nest_webhooks'`),cf()(),Aa(3110,`td`),bT(3111,`On PostgreSQL, the schema of its tables, which its first migration creates: letters, digits and underscores, not starting with a digit, at most 63 characters. On MySQL, the prefix of its tables in the connection's database (`),Aa(3112,`code`),bT(3113,`nest_webhooks_endpoints`),cf(),bT(3114,`...): lowercase letters, digits and underscores, not starting with a digit, at most 40 characters`),cf()(),Aa(3115,`tr`)(3116,`td`)(3117,`code`),bT(3118,`migrate`),cf()(),Aa(3119,`td`)(3120,`code`),bT(3121,`true`),cf(),bT(3122,`, except with `),Aa(3123,`code`),bT(3124,`NODE_ENV=production`),cf()(),Aa(3125,`td`),bT(3126,`Apply the pending migrations when the application starts. With `),Aa(3127,`code`),bT(3128,`false`),cf(),bT(3129,`, startup fails with a `),Aa(3130,`code`),bT(3131,`WebhookSchemaError`),cf(),bT(3132,` while the schema is behind`),cf()()()(),Aa(3133,`p`),bT(3134,`Each executor takes your database client, and its own kind of transaction object, which `),Aa(3135,`code`),bT(3136,`dispatch()`),cf(),bT(3137,` and `),Aa(3138,`code`),bT(3139,`processInTransaction()`),cf(),bT(3140,` then take:`),cf(),Aa(3141,`table`)(3142,`thead`)(3143,`tr`)(3144,`th`),bT(3145,`Executor`),cf(),Aa(3146,`th`),bT(3147,`Takes`),cf(),Aa(3148,`th`),bT(3149,`Transaction object`),cf()()(),Aa(3150,`tbody`)(3151,`tr`)(3152,`td`)(3153,`code`),bT(3154,`fromDrizzle(db)`),cf()(),Aa(3155,`td`),bT(3156,`A Drizzle database: on PostgreSQL, whichever its driver; on MySQL, `),Aa(3157,`code`),bT(3158,`drizzle-orm/mysql2`),cf(),bT(3159,`'s`),cf(),Aa(3160,`td`),bT(3161,`The `),Aa(3162,`code`),bT(3163,`tx`),cf(),bT(3164,` that `),Aa(3165,`code`),bT(3166,`db.transaction()`),cf(),bT(3167,` hands its callback`),cf()(),Aa(3168,`tr`)(3169,`td`)(3170,`code`),bT(3171,`fromTypeOrm(dataSource)`),cf()(),Aa(3172,`td`),bT(3173,`A `),Aa(3174,`code`),bT(3175,`DataSource`),cf(),bT(3176,` of type `),Aa(3177,`code`),bT(3178,`postgres`),cf(),bT(3179,` or `),Aa(3180,`code`),bT(3181,`mysql`),cf()(),Aa(3182,`td`),bT(3183,`The `),Aa(3184,`code`),bT(3185,`EntityManager`),cf(),bT(3186,` that `),Aa(3187,`code`),bT(3188,`dataSource.transaction()`),cf(),bT(3189,` hands its callback, or a `),Aa(3190,`code`),bT(3191,`QueryRunner`),cf(),bT(3192,` after `),Aa(3193,`code`),bT(3194,`startTransaction()`),cf()()(),Aa(3195,`tr`)(3196,`td`)(3197,`code`),bT(3198,`fromPg(pool)`),cf()(),Aa(3199,`td`),bT(3200,`A node-postgres `),Aa(3201,`code`),bT(3202,`Pool`),cf(),bT(3203,`, on PostgreSQL`),cf(),Aa(3204,`td`),bT(3205,`A client from `),Aa(3206,`code`),bT(3207,`pool.connect()`),cf(),bT(3208,`, after `),Aa(3209,`code`),bT(3210,`BEGIN`),cf()()(),Aa(3211,`tr`)(3212,`td`)(3213,`code`),bT(3214,`fromMysql2(pool)`),cf()(),Aa(3215,`td`),bT(3216,`A `),Aa(3217,`code`),bT(3218,`mysql2/promise`),cf(),bT(3219,` pool, on MySQL`),cf(),Aa(3220,`td`),bT(3221,`A connection from `),Aa(3222,`code`),bT(3223,`pool.getConnection()`),cf(),bT(3224,`, after `),Aa(3225,`code`),bT(3226,`beginTransaction()`),cf()()(),Aa(3227,`tr`)(3228,`td`)(3229,`code`),bT(3230,`fromPrisma(prisma, options)`),cf()(),Aa(3231,`td`),bT(3232,`A Prisma client, through a driver adapter such as `),Aa(3233,`code`),bT(3234,`@prisma/adapter-pg`),cf(),bT(3235,`, or `),Aa(3236,`code`),bT(3237,`@prisma/adapter-mariadb`),cf(),bT(3238,` on MySQL. `),Aa(3239,`code`),bT(3240,`maxWait`),cf(),bT(3241,` (default `),Aa(3242,`code`),bT(3243,`'10s'`),cf(),bT(3244,`) and `),Aa(3245,`code`),bT(3246,`timeout`),cf(),bT(3247,` (default `),Aa(3248,`code`),bT(3249,`'1m'`),cf(),bT(3250,`) limit the stores' own transactions`),cf(),Aa(3251,`td`),bT(3252,`The transaction client that `),Aa(3253,`code`),bT(3254,`prisma.$transaction()`),cf(),bT(3255,` hands its callback`),cf()(),Aa(3256,`tr`)(3257,`td`)(3258,`code`),bT(3259,`fromKysely(db)`),cf()(),Aa(3260,`td`),bT(3261,`A `),Aa(3262,`code`),bT(3263,`Kysely`),cf(),bT(3264,` instance with a PostgreSQL or MySQL dialect`),cf(),Aa(3265,`td`),bT(3266,`The transaction that `),Aa(3267,`code`),bT(3268,`db.transaction().execute()`),cf(),bT(3269,` hands its callback`),cf()()()(),Aa(3270,`p`),bT(3271,`The store's `),Aa(3272,`code`),bT(3273,`migrate()`),cf(),bT(3274,` method applies the pending migrations at once, whatever the `),Aa(3275,`code`),bT(3276,`migrate`),cf(),bT(3277,` option says, and resolves with the versions it applied. `),Aa(3278,`code`),bT(3279,`PostgresWebhookStore.migrationSql()`),cf(),bT(3280,` and `),Aa(3281,`code`),bT(3282,`MySqlWebhookStore.migrationSql()`),cf(),bT(3283,` return their SQL, with the bookkeeping. Their options are the `),Aa(3284,`code`),bT(3285,`schema`),cf(),bT(3286,`, the versions to go `),Aa(3287,`code`),bT(3288,`from`),cf(),bT(3289,` (default `),Aa(3290,`code`),bT(3291,`0`),cf(),bT(3292,`, a new database) and `),Aa(3293,`code`),bT(3294,`to`),cf(),bT(3295,` (default: the one the package needs), and `),Aa(3296,`code`),bT(3297,`statementBreakpoints`),cf(),bT(3298,`, which puts drizzle-kit's `),Aa(3299,`code`),bT(3300,`--> statement-breakpoint`),cf(),bT(3301,` between the statements. On PostgreSQL, from version 0, the SQL starts with `),Aa(3302,`code`),bT(3303,`CREATE SCHEMA IF NOT EXISTS`),cf(),bT(3304,`, which needs the CREATE privilege on the database: leave it out if someone created the schema for you. `),Aa(3305,`code`),bT(3306,`MySqlWebhookStore.migrationStatements()`),cf(),bT(3307,` returns MySQL's statements one per string, to run in order, each once. `),Aa(3308,`code`),bT(3309,`schemaVersion`),cf(),bT(3310,` is the version the package needs. A schema's own version is the highest applied in its `),Aa(3311,`code`),bT(3312,`migrations`),cf(),bT(3313,` table.`),cf(),Aa(3314,`p`),bT(3315,`The command line, `),Aa(3316,`code`),bT(3317,`npx @nestjs/webhooks`),cf(),bT(3318,`, takes `),Aa(3319,`code`),bT(3320,`--url`),cf(),bT(3321,` (default `),Aa(3322,`code`),bT(3323,`DATABASE_URL`),cf(),bT(3324,`), whose scheme picks the store: `),Aa(3325,`code`),bT(3326,`postgres://`),cf(),bT(3327,` or `),Aa(3328,`code`),bT(3329,`postgresql://`),cf(),bT(3330,` for `),Aa(3331,`code`),bT(3332,`PostgresWebhookStore`),cf(),bT(3333,`'s schema, `),Aa(3334,`code`),bT(3335,`mysql://`),cf(),bT(3336,` for `),Aa(3337,`code`),bT(3338,`MySqlWebhookStore`),cf(),bT(3339,`'s tables. It takes `),Aa(3340,`code`),bT(3341,`--schema`),cf(),bT(3342,` too (default `),Aa(3343,`code`),bT(3344,`nest_webhooks`),cf(),bT(3345,`). `),Aa(3346,`code`),bT(3347,`npx @nestjs/outbox`),cf(),bT(3348,` does the same for the outbox's stores:`),cf(),Aa(3349,`table`)(3350,`thead`)(3351,`tr`)(3352,`th`),bT(3353,`Command`),cf(),Aa(3354,`th`),bT(3355,`What it does`),cf()()(),Aa(3356,`tbody`)(3357,`tr`)(3358,`td`)(3359,`code`),bT(3360,`migrate`),cf()(),Aa(3361,`td`),bT(3362,`Applies the pending migrations, as `),Aa(3363,`code`),bT(3364,`migrate: true`),cf(),bT(3365,` does at startup. Needs `),Aa(3366,`code`),bT(3367,`pg`),cf(),bT(3368,` or `),Aa(3369,`code`),bT(3370,`mysql2`),cf(),bT(3371,` installed`),cf()(),Aa(3372,`tr`)(3373,`td`)(3374,`code`),bT(3375,`status`),cf()(),Aa(3376,`td`),bT(3377,`Prints the schema's version and the one the package needs, and exits with 1 while the schema is behind`),cf()(),Aa(3378,`tr`)(3379,`td`)(3380,`code`),bT(3381,`sql`),cf()(),Aa(3382,`td`),bT(3383,`Prints the SQL of `),Aa(3384,`code`),bT(3385,`migrationSql()`),cf(),bT(3386,`, from `),Aa(3387,`code`),bT(3388,`--from`),cf(),bT(3389,` to `),Aa(3390,`code`),bT(3391,`--to`),cf(),bT(3392,`, without a database: PostgreSQL's, or MySQL's with `),Aa(3393,`code`),bT(3394,`--dialect mysql`),cf(),bT(3395,`. `),Aa(3396,`code`),bT(3397,`--statement-breakpoints`),cf(),bT(3398,` separates the statements for drizzle-kit`),cf()()()(),Aa(3399,`h5`,87)(3400,`span`),bT(3401,`Services and decorators`),cf()(),Aa(3402,`ul`)(3403,`li`)(3404,`code`),bT(3405,`Webhooks`),cf(),bT(3406,`: `),Aa(3407,`code`),bT(3408,`dispatch(tx, message)`),cf(),bT(3409,` takes one message or an array, with `),Aa(3410,`code`),bT(3411,`type`),cf(),bT(3412,`, `),Aa(3413,`code`),bT(3414,`data`),cf(),bT(3415,`, `),Aa(3416,`code`),bT(3417,`tenant`),cf(),bT(3418,` and an optional `),Aa(3419,`code`),bT(3420,`id`),cf(),bT(3421,`, and throws a `),Aa(3422,`code`),bT(3423,`TypeError`),cf(),bT(3424,` for an unknown type, data that isn't JSON-serializable or an invalid id. `),Aa(3425,`code`),bT(3426,`notify()`),cf(),bT(3427,` runs the relay now.`),cf(),Aa(3428,`li`)(3429,`code`),bT(3430,`WebhookEndpoints`),cf(),bT(3431,`: `),Aa(3432,`code`),bT(3433,`create(input)`),cf(),bT(3434,`, `),Aa(3435,`code`),bT(3436,`list(query)`),cf(),bT(3437,`, `),Aa(3438,`code`),bT(3439,`get(id, scope)`),cf(),bT(3440,`, `),Aa(3441,`code`),bT(3442,`update(id, changes, scope)`),cf(),bT(3443,`, `),Aa(3444,`code`),bT(3445,`delete(id, scope)`),cf(),bT(3446,`, `),Aa(3447,`code`),bT(3448,`getSecret(id, scope)`),cf(),bT(3449,` and `),Aa(3450,`code`),bT(3451,`rotateSecret(id, options)`),cf(),bT(3452,`, where `),Aa(3453,`code`),bT(3454,`options`),cf(),bT(3455,` takes `),Aa(3456,`code`),bT(3457,`tenant`),cf(),bT(3458,`, `),Aa(3459,`code`),bT(3460,`overlap`),cf(),bT(3461,` and `),Aa(3462,`code`),bT(3463,`secret`),cf(),bT(3464,`. `),Aa(3465,`code`),bT(3466,`create()`),cf(),bT(3467,` takes a `),Aa(3468,`code`),bT(3469,`secret`),cf(),bT(3470,` too, an existing `),Aa(3471,`code`),bT(3472,`whsec_…`),cf(),bT(3473,` used instead of a generated one. See `),Aa(3474,`a`,74),bT(3475,`Let partners subscribe`),cf(),bT(3476,`.`),cf(),Aa(3477,`li`)(3478,`code`),bT(3479,`WebhookDeliveries`),cf(),bT(3480,`: `),Aa(3481,`code`),bT(3482,`list(query)`),cf(),bT(3483,`, `),Aa(3484,`code`),bT(3485,`get(id, scope)`),cf(),bT(3486,`, `),Aa(3487,`code`),bT(3488,`retry(idOrFilter, scope)`),cf(),bT(3489,`, `),Aa(3490,`code`),bT(3491,`stats()`),cf(),bT(3492,` and `),Aa(3493,`code`),bT(3494,`prune(olderThan)`),cf(),bT(3495,`. See `),Aa(3496,`a`,54),bT(3497,`Retries, the delivery log and replay`),cf(),bT(3498,`.`),cf(),Aa(3499,`li`)(3500,`code`),bT(3501,`WebhookWorker`),cf(),bT(3502,`: the deliverer, started when the application boots unless `),Aa(3503,`code`),bT(3504,`worker.enabled`),cf(),bT(3505,` is `),Aa(3506,`code`),bT(3507,`false`),cf(),bT(3508,`. `),Aa(3509,`code`),bT(3510,`start()`),cf(),bT(3511,`; `),Aa(3512,`code`),bT(3513,`stop()`),cf(),bT(3514,`, which stops claiming, waits for the attempts in flight and releases the deliveries it hasn't started; `),Aa(3515,`code`),bT(3516,`running`),cf(),bT(3517,`; `),Aa(3518,`code`),bT(3519,`notify()`),cf(),bT(3520,`, which polls now instead of at the next tick; `),Aa(3521,`code`),bT(3522,`runOnce()`),cf(),bT(3523,`, which claims one batch and delivers it, resolving to how many it `),Aa(3524,`code`),bT(3525,`claimed`),cf(),bT(3526,`, `),Aa(3527,`code`),bT(3528,`delivered`),cf(),bT(3529,`, `),Aa(3530,`code`),bT(3531,`retried`),cf(),bT(3532,`, `),Aa(3533,`code`),bT(3534,`failed`),cf(),bT(3535,` and `),Aa(3536,`code`),bT(3537,`released`),cf(),bT(3538,`, and on how many it lost the lease (`),Aa(3539,`code`),bT(3540,`leaseLost`),cf(),bT(3541,`), and which works with the worker stopped, as the tests drive it; `),Aa(3542,`code`),bT(3543,`stats()`),cf(),bT(3544,`, the same as `),Aa(3545,`code`),bT(3546,`WebhookDeliveries.stats()`),cf(),bT(3547,`.`),cf(),Aa(3548,`li`)(3549,`code`),bT(3550,`WEBHOOKS_OUTBOX_TOPIC`),cf(),bT(3551,`: the outbox topic that dispatched messages travel on, `),Aa(3552,`code`),bT(3553,`'nestjs.webhooks.message'`),cf(),bT(3554,`, to the package's `),Aa(3555,`code`),bT(3556,`@OnOutboxMessage()`),cf(),bT(3557,` handler, the fan-out. An outbox whose `),Aa(3558,`code`),bT(3559,`route`),cf(),bT(3560,` picks among several transports sends this topic to `),Aa(3561,`code`),bT(3562,`local`),cf(),bT(3563,`.`),cf(),Aa(3564,`li`)(3565,`code`),bT(3566,`WebhookVerifier`),cf(),bT(3567,`: `),Aa(3568,`code`),bT(3569,`verify(receiver, request)`),cf(),bT(3570,` checks a request that didn't arrive on an HTTP route, such as one stored in a queue, from its `),Aa(3571,`code`),bT(3572,`headers`),cf(),bT(3573,` and `),Aa(3574,`code`),bT(3575,`rawBody`),cf(),bT(3576,`.`),cf(),Aa(3577,`li`)(3578,`code`),bT(3579,`@VerifyWebhook(receiver)`),cf(),bT(3580,` verifies and deduplicates, on a method or a controller. `),Aa(3581,`code`),bT(3582,`@IncomingWebhook()`),cf(),bT(3583,` injects the verified webhook: `),Aa(3584,`code`),bT(3585,`receiver`),cf(),bT(3586,`, `),Aa(3587,`code`),bT(3588,`id`),cf(),bT(3589,`, `),Aa(3590,`code`),bT(3591,`timestamp`),cf(),bT(3592,`, `),Aa(3593,`code`),bT(3594,`payload`),cf(),bT(3595,`, `),Aa(3596,`code`),bT(3597,`rawBody`),cf(),bT(3598,` and `),Aa(3599,`code`),bT(3600,`processInTransaction()`),cf(),bT(3601,`. `),Aa(3602,`code`),bT(3603,`@WebhookPayload()`),cf(),bT(3604,` injects the payload alone, and takes pipes like `),Aa(3605,`code`),bT(3606,`@Body()`),cf(),bT(3607,`.`),cf()(),Aa(3608,`h5`,88)(3609,`span`),bT(3610,`Transports`),cf()(),Aa(3611,`p`),bT(3612,`The worker sends through the `),Aa(3613,`code`),bT(3614,`WebhookTransport`),cf(),bT(3615,` provider. The default, `),Aa(3616,`code`),bT(3617,`HttpWebhookTransport`),cf(),bT(3618,`, is built from the `),Aa(3619,`code`),bT(3620,`delivery`),cf(),bT(3621,` options: one `),Aa(3622,`code`),bT(3623,`POST`),cf(),bT(3624,` per attempt over `),Aa(3625,`code`),bT(3626,`node:http`),cf(),bT(3627,` and `),Aa(3628,`code`),bT(3629,`node:https`),cf(),bT(3630,`, the host resolved once and every address it resolves to checked, the socket pinned to the checked address, redirects never followed, no proxy from the environment. Its constructor takes two options that `),Aa(3631,`code`),bT(3632,`delivery`),cf(),bT(3633,` doesn't:`),cf(),Aa(3634,`ul`)(3635,`li`)(3636,`code`),bT(3637,`ca`),cf(),bT(3638,`: certificate authorities to trust besides Node's own, for endpoints behind a private CA. They are added to Node's trust store, so public endpoints keep verifying.`),cf(),Aa(3639,`li`)(3640,`code`),bT(3641,`lookup`),cf(),bT(3642,`: resolves a host name to every address it has, each an `),Aa(3643,`code`),bT(3644,`address`),cf(),bT(3645,` and its `),Aa(3646,`code`),bT(3647,`family`),cf(),bT(3648,` (4 or 6), in place of the system resolver. Every address it returns is still checked, and the connection goes to the first.`),cf()(),Aa(3649,`p`),bT(3650,`To use them, pass an instance as `),Aa(3651,`code`),bT(3652,`transport`),cf(),bT(3653,`, with the same `),Aa(3654,`code`),bT(3655,`allowHttp`),cf(),bT(3656,`, `),Aa(3657,`code`),bT(3658,`allowPrivateNetworks`),cf(),bT(3659,` and `),Aa(3660,`code`),bT(3661,`allowedAddresses`),cf(),bT(3662,` as `),Aa(3663,`code`),bT(3664,`delivery`),cf(),bT(3665,`: `),Aa(3666,`code`),bT(3667,`delivery`),cf(),bT(3668,` still decides which URLs `),Aa(3669,`code`),bT(3670,`WebhookEndpoints`),cf(),bT(3671,` accepts, and the transport what it connects to.`),cf(),Aa(3672,`app-copy-button`)(3673,`pre`)(3674,`code`,49),bT(3675,`
WebhooksModule.forRoot({
  delivery: { allowedAddresses: ['10.20.0.0/16'] },
  transport: new HttpWebhookTransport({
    allowedAddresses: ['10.20.0.0/16'],
    ca: readFileSync('/etc/ssl/partners-ca.pem'),
  }),
}),
`),cf()()(),Aa(3676,`p`),bT(3677,`A transport of your own extends `),Aa(3678,`code`),bT(3679,`WebhookTransport`),cf(),bT(3680,` and implements `),Aa(3681,`code`),bT(3682,`send(request, options)`),cf(),bT(3683,`, where `),Aa(3684,`code`),bT(3685,`options`),cf(),bT(3686,` has the attempt's `),Aa(3687,`code`),bT(3688,`signal`),cf(),bT(3689,` and its `),Aa(3690,`code`),bT(3691,`attempt`),cf(),bT(3692,` number. The request carries the `),Aa(3693,`code`),bT(3694,`url`),cf(),bT(3695,`, the signed `),Aa(3696,`code`),bT(3697,`headers`),cf(),bT(3698,` and the `),Aa(3699,`code`),bT(3700,`body`),cf(),bT(3701,`, and the ids of its endpoint, delivery and message. Resolve with the response's `),Aa(3702,`code`),bT(3703,`statusCode`),cf(),bT(3704,`, `),Aa(3705,`code`),bT(3706,`headers`),cf(),bT(3707,` and the start of its `),Aa(3708,`code`),bT(3709,`body`),cf(),bT(3710,`, whatever the status, and throw only when there is no response; stop when `),Aa(3711,`code`),bT(3712,`signal`),cf(),bT(3713,` aborts, after `),Aa(3714,`code`),bT(3715,`delivery.timeout`),cf(),bT(3716,`. `),Aa(3717,`code`),bT(3718,`NonRetryableWebhookError`),cf(),bT(3719,` and `),Aa(3720,`code`),bT(3721,`WebhookDestinationBlockedError`),cf(),bT(3722,` fail the delivery without a retry; any other error is retried. Pass the class as `),Aa(3723,`code`),bT(3724,`transport`),cf(),bT(3725,` at the top level of `),Aa(3726,`code`),bT(3727,`forRoot()`),cf(),bT(3728,` or `),Aa(3729,`code`),bT(3730,`forRootAsync()`),cf(),bT(3731,`, where Nest instantiates it (`),Aa(3732,`code`),bT(3733,`imports`),cf(),bT(3734,` for the modules it injects from), or an instance. It replaces the SSRF guard with whatever it does itself: sending through an egress proxy that enforces one, such as Smokescreen, is a reason to write one; wrapping `),Aa(3735,`code`),bT(3736,`HttpWebhookTransport`),cf(),bT(3737,` keeps the guard.`),cf(),Aa(3738,`p`),bT(3739,`For tests, `),Aa(3740,`code`),bT(3741,`InMemoryWebhookTransport`),cf(),bT(3742,` records instead of sending, without network or address checks (see `),Aa(3743,`a`,89),bT(3744,`Testing`),cf(),bT(3745,`):`),cf(),Aa(3746,`ul`)(3747,`li`)(3748,`code`),bT(3749,`sent`),cf(),bT(3750,`: every request, oldest first, as `),Aa(3751,`code`),bT(3752,`SentWebhook`),cf(),bT(3753,`s. `),Aa(3754,`code`),bT(3755,`clear()`),cf(),bT(3756,` empties it.`),cf(),Aa(3757,`li`)(3758,`code`),bT(3759,`respondWith(answer)`),cf(),bT(3760,`: how the endpoint answers from now on, 200 until then. A status (`),Aa(3761,`code`),bT(3762,`503`),cf(),bT(3763,`), a response (`),Aa(3764,`code`),bT(3765,`statusCode`),cf(),bT(3766,`, `),Aa(3767,`code`),bT(3768,`headers`),cf(),bT(3769,` such as `),Aa(3770,`code`),bT(3771,`retry-after`),cf(),bT(3772,`, `),Aa(3773,`code`),bT(3774,`body`),cf(),bT(3775,`), or a function of the request and the attempt number that returns either and throws to simulate no response.`),cf(),Aa(3776,`li`)(3777,`code`),bT(3778,`filter(query)`),cf(),bT(3779,` and `),Aa(3780,`code`),bT(3781,`single(query)`),cf(),bT(3782,`: the requests matching `),Aa(3783,`code`),bT(3784,`type`),cf(),bT(3785,`, `),Aa(3786,`code`),bT(3787,`url`),cf(),bT(3788,` (a string or a `),Aa(3789,`code`),bT(3790,`RegExp`),cf(),bT(3791,`), `),Aa(3792,`code`),bT(3793,`endpointId`),cf(),bT(3794,` and `),Aa(3795,`code`),bT(3796,`messageId`),cf(),bT(3797,`, or a function of the `),Aa(3798,`code`),bT(3799,`SentWebhook`),cf(),bT(3800,`. `),Aa(3801,`code`),bT(3802,`single()`),cf(),bT(3803,` throws, listing what was sent, unless exactly one matches.`),cf()(),Aa(3804,`p`),bT(3805,`A `),Aa(3806,`code`),bT(3807,`SentWebhook`),cf(),bT(3808,` has the `),Aa(3809,`code`),bT(3810,`request`),cf(),bT(3811,`, the `),Aa(3812,`code`),bT(3813,`attempt`),cf(),bT(3814,` number within its round, `),Aa(3815,`code`),bT(3816,`sentAt`),cf(),bT(3817,`, the request's `),Aa(3818,`code`),bT(3819,`url`),cf(),bT(3820,`, `),Aa(3821,`code`),bT(3822,`type`),cf(),bT(3823,`, `),Aa(3824,`code`),bT(3825,`messageId`),cf(),bT(3826,`, `),Aa(3827,`code`),bT(3828,`endpointId`),cf(),bT(3829,`, `),Aa(3830,`code`),bT(3831,`deliveryId`),cf(),bT(3832,`, `),Aa(3833,`code`),bT(3834,`headers`),cf(),bT(3835,` and `),Aa(3836,`code`),bT(3837,`body`),cf(),bT(3838,`, `),Aa(3839,`code`),bT(3840,`data`),cf(),bT(3841,` (the body's `),Aa(3842,`code`),bT(3843,`data`),cf(),bT(3844,`, parsed), and `),Aa(3845,`code`),bT(3846,`isSignedWith(secret)`),cf(),bT(3847,`, which checks a `),Aa(3848,`code`),bT(3849,`v1`),cf(),bT(3850,` signature against an endpoint's secret.`),cf(),Aa(3851,`h5`,90)(3852,`span`),bT(3853,`Events`),cf()(),Aa(3854,`p`)(3855,`code`),bT(3856,`WebhooksEvents.events$`),cf(),bT(3857,` emits every event, and each is also published on the diagnostics channel `),Aa(3858,`code`),bT(3859,`nestjs:webhooks:<type>`),cf(),bT(3860,`.`),cf(),Aa(3861,`table`)(3862,`thead`)(3863,`tr`)(3864,`th`),bT(3865,`Type`),cf(),Aa(3866,`th`),bT(3867,`Payload type`),cf(),Aa(3868,`th`),bT(3869,`Fields besides `),Aa(3870,`code`),bT(3871,`type`),cf()()()(),Aa(3872,`tbody`)(3873,`tr`)(3874,`td`)(3875,`code`),bT(3876,`delivered`),cf()(),Aa(3877,`td`)(3878,`code`),bT(3879,`WebhooksDeliveredEvent`),cf()(),Aa(3880,`td`)(3881,`code`),bT(3882,`delivery`),cf(),bT(3883,`, `),Aa(3884,`code`),bT(3885,`statusCode`),cf(),bT(3886,`, `),Aa(3887,`code`),bT(3888,`attempt`),cf(),bT(3889,`, `),Aa(3890,`code`),bT(3891,`durationMs`),cf()()(),Aa(3892,`tr`)(3893,`td`)(3894,`code`),bT(3895,`retry-scheduled`),cf()(),Aa(3896,`td`)(3897,`code`),bT(3898,`WebhooksRetryScheduledEvent`),cf()(),Aa(3899,`td`)(3900,`code`),bT(3901,`delivery`),cf(),bT(3902,`, `),Aa(3903,`code`),bT(3904,`error`),cf(),bT(3905,`, `),Aa(3906,`code`),bT(3907,`statusCode`),cf(),bT(3908,` (`),Aa(3909,`code`),bT(3910,`null`),cf(),bT(3911,` without a response), `),Aa(3912,`code`),bT(3913,`attempt`),cf(),bT(3914,`, `),Aa(3915,`code`),bT(3916,`delayMs`),cf()()(),Aa(3917,`tr`)(3918,`td`)(3919,`code`),bT(3920,`delivery-failed`),cf()(),Aa(3921,`td`)(3922,`code`),bT(3923,`WebhooksDeliveryFailedEvent`),cf()(),Aa(3924,`td`)(3925,`code`),bT(3926,`delivery`),cf(),bT(3927,`, `),Aa(3928,`code`),bT(3929,`error`),cf(),bT(3930,`, `),Aa(3931,`code`),bT(3932,`statusCode`),cf(),bT(3933,`, `),Aa(3934,`code`),bT(3935,`attempt`),cf(),bT(3936,`, `),Aa(3937,`code`),bT(3938,`reason`),cf()()(),Aa(3939,`tr`)(3940,`td`)(3941,`code`),bT(3942,`endpoint-disabled`),cf()(),Aa(3943,`td`)(3944,`code`),bT(3945,`WebhooksEndpointDisabledEvent`),cf()(),Aa(3946,`td`)(3947,`code`),bT(3948,`endpointId`),cf(),bT(3949,`, `),Aa(3950,`code`),bT(3951,`tenant`),cf(),bT(3952,`, `),Aa(3953,`code`),bT(3954,`reason`),cf(),bT(3955,` (`),Aa(3956,`code`),bT(3957,`'failing'`),cf(),bT(3958,` or `),Aa(3959,`code`),bT(3960,`'gone'`),cf(),bT(3961,`)`),cf()(),Aa(3962,`tr`)(3963,`td`)(3964,`code`),bT(3965,`destination-blocked`),cf()(),Aa(3966,`td`)(3967,`code`),bT(3968,`WebhooksDestinationBlockedEvent`),cf()(),Aa(3969,`td`)(3970,`code`),bT(3971,`endpointId`),cf(),bT(3972,`, `),Aa(3973,`code`),bT(3974,`tenant`),cf(),bT(3975,`, `),Aa(3976,`code`),bT(3977,`reason`),cf(),bT(3978,`, `),Aa(3979,`code`),bT(3980,`address`),cf()()(),Aa(3981,`tr`)(3982,`td`)(3983,`code`),bT(3984,`verification-failed`),cf()(),Aa(3985,`td`)(3986,`code`),bT(3987,`WebhooksVerificationFailedEvent`),cf()(),Aa(3988,`td`)(3989,`code`),bT(3990,`receiver`),cf(),bT(3991,`, `),Aa(3992,`code`),bT(3993,`reason`),cf()()()()(),Aa(3994,`p`),bT(3995,`A failed delivery's `),Aa(3996,`code`),bT(3997,`reason`),cf(),bT(3998,` is `),Aa(3999,`code`),bT(4e3,`exhausted`),cf(),bT(4001,`, `),Aa(4002,`code`),bT(4003,`rejected`),cf(),bT(4004,` (410 Gone, a blocked destination, `),Aa(4005,`code`),bT(4006,`NonRetryableWebhookError`),cf(),bT(4007,` or `),Aa(4008,`code`),bT(4009,`retryIf`),cf(),bT(4010,`), `),Aa(4011,`code`),bT(4012,`endpoint-disabled`),cf(),bT(4013,` or `),Aa(4014,`code`),bT(4015,`endpoint-deleted`),cf(),bT(4016,`. A verification failure's `),Aa(4017,`code`),bT(4018,`reason`),cf(),bT(4019,` is `),Aa(4020,`code`),bT(4021,`missing-header`),cf(),bT(4022,`, `),Aa(4023,`code`),bT(4024,`malformed-header`),cf(),bT(4025,` (a webhook id longer than 255 characters too), `),Aa(4026,`code`),bT(4027,`invalid-signature`),cf(),bT(4028,`, `),Aa(4029,`code`),bT(4030,`timestamp-out-of-tolerance`),cf(),bT(4031,` or `),Aa(4032,`code`),bT(4033,`invalid-payload`),cf(),bT(4034,`. `),Aa(4035,`code`),bT(4036,`WebhooksEvent`),cf(),bT(4037,` is the union of all payload types.`),cf(),Aa(4038,`h5`,91)(4039,`span`),bT(4040,`Errors`),cf()(),Aa(4041,`p`),bT(4042,`Every error except `),Aa(4043,`code`),bT(4044,`NonRetryableWebhookError`),cf(),bT(4045,` extends `),Aa(4046,`code`),bT(4047,`WebhooksError`),cf(),bT(4048,`. The ones with a `),Aa(4049,`code`),bT(4050,`status`),cf(),bT(4051,` are meant for the partner API's exception filter, as in `),Aa(4052,`a`,74),bT(4053,`Let partners subscribe`),cf(),bT(4054,`.`),cf(),Aa(4055,`table`)(4056,`thead`)(4057,`tr`)(4058,`th`),bT(4059,`Error`),cf(),Aa(4060,`th`),bT(4061,`Status`),cf(),Aa(4062,`th`),bT(4063,`Thrown when`),cf()()(),Aa(4064,`tbody`)(4065,`tr`)(4066,`td`)(4067,`code`),bT(4068,`InvalidWebhookEndpointError`),cf()(),Aa(4069,`td`),bT(4070,`400`),cf(),Aa(4071,`td`),bT(4072,`An endpoint's URL, event types or secret are refused. `),Aa(4073,`code`),bT(4074,`field`),cf(),bT(4075,` names which one.`),cf()(),Aa(4076,`tr`)(4077,`td`)(4078,`code`),bT(4079,`WebhookEndpointNotFoundError`),cf()(),Aa(4080,`td`),bT(4081,`404`),cf(),Aa(4082,`td`),bT(4083,`The endpoint doesn't exist, or belongs to another tenant`),cf()(),Aa(4084,`tr`)(4085,`td`)(4086,`code`),bT(4087,`WebhookDeliveryNotFoundError`),cf()(),Aa(4088,`td`),bT(4089,`404`),cf(),Aa(4090,`td`),bT(4091,`The delivery doesn't exist, or belongs to another tenant`),cf()(),Aa(4092,`tr`)(4093,`td`)(4094,`code`),bT(4095,`WebhookVerificationError`),cf()(),Aa(4096,`td`),bT(4097,`401, or 400 for `),Aa(4098,`code`),bT(4099,`invalid-payload`),cf()(),Aa(4100,`td`)(4101,`code`),bT(4102,`WebhookVerifier.verify()`),cf(),bT(4103,` refuses a request. It has the `),Aa(4104,`code`),bT(4105,`receiver`),cf(),bT(4106,` and the `),Aa(4107,`code`),bT(4108,`reason`),cf(),bT(4109,`.`),cf()(),Aa(4110,`tr`)(4111,`td`)(4112,`code`),bT(4113,`WebhookDestinationBlockedError`),cf()(),Aa(4114,`td`),bT(4115,`none`),cf(),Aa(4116,`td`),bT(4117,`The endpoint's URL is, or resolves to, a blocked address. The delivery fails without a retry.`),cf()(),Aa(4118,`tr`)(4119,`td`)(4120,`code`),bT(4121,`WebhookResponseError`),cf()(),Aa(4122,`td`),bT(4123,`none`),cf(),Aa(4124,`td`),bT(4125,`The endpoint answered outside 2xx. It has the `),Aa(4126,`code`),bT(4127,`statusCode`),cf(),bT(4128,`, and `),Aa(4129,`code`),bT(4130,`retryAfterMs`),cf(),bT(4131,` from a `),Aa(4132,`code`),bT(4133,`Retry-After`),cf(),bT(4134,` header.`),cf()(),Aa(4135,`tr`)(4136,`td`)(4137,`code`),bT(4138,`WebhookDeliveryTimeoutError`),cf()(),Aa(4139,`td`),bT(4140,`none`),cf(),Aa(4141,`td`),bT(4142,`No response within `),Aa(4143,`code`),bT(4144,`delivery.timeout`),cf()()(),Aa(4145,`tr`)(4146,`td`)(4147,`code`),bT(4148,`NonRetryableWebhookError`),cf()(),Aa(4149,`td`),bT(4150,`none`),cf(),Aa(4151,`td`),bT(4152,`A custom transport throws it to fail a delivery without a retry`),cf()(),Aa(4153,`tr`)(4154,`td`)(4155,`code`),bT(4156,`WebhookSchemaError`),cf()(),Aa(4157,`td`),bT(4158,`none`),cf(),Aa(4159,`td`),bT(4160,`A store's schema is behind the package's migrations while `),Aa(4161,`code`),bT(4162,`migrate`),cf(),bT(4163,` is off, or applying them failed (`),Aa(4164,`code`),bT(4165,`cause`),cf(),bT(4166,`): startup and every call fail until it's fixed. It has the `),Aa(4167,`code`),bT(4168,`schema`),cf(),bT(4169,`, its `),Aa(4170,`code`),bT(4171,`version`),cf(),bT(4172,` and the `),Aa(4173,`code`),bT(4174,`requiredVersion`),cf(),bT(4175,`. From `),Aa(4176,`code`),bT(4177,`@nestjs/webhooks/postgres`),cf(),bT(4178,` and `),Aa(4179,`code`),bT(4180,`@nestjs/webhooks/mysql`),cf()()()()(),Aa(4181,`p`)(4182,`code`),bT(4183,`@VerifyWebhook()`),cf(),bT(4184,` answers a refused request with a 401 (a 400 for a signed body that isn't JSON) and a generic message, and the reason goes to the `),Aa(4185,`code`),bT(4186,`verification-failed`),cf(),bT(4187,` event. A request whose body wasn't kept raw gets a 415 if it isn't JSON or a form, and a 500 that logs the missing `),Aa(4188,`code`),bT(4189,`rawBody: true`),cf(),bT(4190,` otherwise.`),cf()(),Aa(4191,`a`,92),Wa(4192,`i`,93),Aa(4193,`span`),bT(4194,`Edit on GitHub`),cf()()()),c&2){let y=tT(414),v=tT(600),g=tT(628),k=tT(704),T=tT(742),P=tT(775),O=tT(903),F=tT(1023),R=tT(1051),M=tT(1065),G=tT(1082),J=tT(1099),$=tT(1110),K=tT(1205),Q=tT(1214),Y=tT(1262),X=tT(1299),Z=tT(1308),ee=tT(1317),te=tT(1385),ne=tT(1394),ie=tT(1403),re=tT(1414),ae=tT(1480),oe=tT(1494),se=tT(1522),le=tT(1531),de=tT(1540),me=tT(1610),ce=tT(1652),pe=tT(1717),he=tT(1981),xe=tT(2553);zC(411),hf(` `,jT(412,33,`app.module`,y.isJsActive),`
`),zC(186),hf(` `,jT(598,36,`typeorm/migrations/1790801311590-WebhookStores`,v.isJsActive),`
`),zC(28),hf(` `,jT(626,39,`typeorm/mysql-migrations/1790801311590-WebhookStores`,g.isJsActive),`
`),zC(76),hf(` `,jT(702,42,`typeorm/app.module`,k.isJsActive),`
`),zC(38),hf(` `,jT(740,45,`typeorm/orders.service`,T.isJsActive),`
`),zC(33),hf(` `,jT(773,48,`mysql/app.module`,P.isJsActive),`
`),zC(128),hf(` `,jT(901,51,`app.module`,O.isJsActive),`
`),zC(120),hf(` `,jT(1021,54,`main`,F.isJsActive),`
`),zC(28),hf(` `,jT(1049,57,`partners/partner.guard`,R.isJsActive),`
`),zC(14),hf(` `,jT(1063,60,`partner-webhooks/webhook-endpoints.dto`,M.isJsActive),`
`),zC(17),hf(` `,jT(1080,63,`partner-webhooks/webhook-endpoints.schemas`,G.isJsActive),`
`),zC(17),hf(` `,jT(1097,66,`partner-webhooks/webhook-endpoints.controller`,J.isJsActive),`
`),zC(11),hf(` `,jT(1108,69,`partner-webhooks/webhook-endpoints.controller`,$.isJsActive),`
`),zC(95),hf(` `,jT(1203,72,`partner-webhooks/webhooks-error.filter`,K.isJsActive),`
`),zC(9),hf(` `,jT(1212,75,`partner-webhooks/partner-webhooks.module`,Q.isJsActive),`
`),zC(48),hf(` `,jT(1260,78,`orders/orders.service`,Y.isJsActive),`
`),zC(37),hf(` `,jT(1297,81,`partner-service/app.module`,X.isJsActive),`
`),zC(9),hf(` `,jT(1306,84,`partner-service/store-webhooks.controller`,Z.isJsActive),`
`),zC(9),hf(` `,jT(1315,87,`partner-service/main`,ee.isJsActive),`
`),zC(68),hf(` `,jT(1383,90,`partner-webhooks/webhook-deliveries.dto`,te.isJsActive),`
`),zC(9),hf(` `,jT(1392,93,`partner-webhooks/webhook-deliveries.schemas`,ne.isJsActive),`
`),zC(9),hf(` `,jT(1401,96,`partner-webhooks/webhook-deliveries.controller`,ie.isJsActive),`
`),zC(11),hf(` `,jT(1412,99,`partner-webhooks/webhook-deliveries.controller`,re.isJsActive),`
`),zC(66),hf(` `,jT(1478,102,`main`,ae.isJsActive),`
`),zC(14),hf(` `,jT(1492,105,`app.module`,oe.isJsActive),`
`),zC(28),hf(` `,jT(1520,108,`provider-webhooks/payment-provider-webhooks.controller`,se.isJsActive),`
`),zC(9),hf(` `,jT(1529,111,`orders/orders.service`,le.isJsActive),`
`),zC(9),hf(` `,jT(1538,114,`provider-webhooks/provider-webhooks.module`,de.isJsActive),`
`),zC(70),hf(` `,jT(1608,117,`scripts/send-webhook`,me.isJsActive),`
`),zC(42),hf(` `,jT(1650,120,`provider-webhooks/carrier-webhooks.controller`,ce.isJsActive),`
`),zC(65),hf(` `,jT(1715,123,`provider-webhooks/marketplace.scheme`,pe.isJsActive),`
`),zC(264),hf(` `,jT(1979,126,`test/webhooks.e2e-spec`,he.isJsActive),`
`),zC(572),hf(` `,jT(2551,129,`test/drizzle-webhook.store.e2e-spec`,xe.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return o})();var Tt=[{path:`versioning`,component:U,data:{title:`Versioning`}},{path:`cookies`,component:_,data:{title:`Cookies`}},{path:`session`,component:B,data:{title:`Session`}},{path:`file-upload`,component:W,data:{title:`File upload and streaming`}},{path:`compression`,component:N,data:{title:`Compression`}},{path:`streaming-responses`,component:L,data:{title:`Streaming responses`}},{path:`server-sent-events`,component:H,data:{title:`Server-Sent Events`}},{path:`mvc`,component:D,data:{title:`MVC`}},{path:`performance`,component:z,data:{title:`HTTP adapters`}},{path:`webhooks`,component:V,data:{title:`Webhooks`}}];export{Tt as HTTP_ROUTES};