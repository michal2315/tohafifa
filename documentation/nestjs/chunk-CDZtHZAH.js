import{C as hf,M as xy,N as zC,T as jT,_ as Wa,a as u,b as cf,d as Jc,i as g,k as tT,l as Aa,m as LT,n as ln,p as Ky,r as xt,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var q=(()=>{class l extends xt{static ɵfac=(()=>{let m;return function(x){return(m||(m=im(l)))(x||l)}})();static ɵcmp=ef({type:l,selectors:[[`app-mcp-overview`]],features:[xy],decls:456,vars:8,consts:[[`contentReference`,``],[`app7ac27848345dc2d93c9a57a722febbc40187c082`,``],[`app071444d8197218b3431e0f569818a22f79dd2ef1`,``],[1,`content`],[1,`content-inner`],[`id`,`model-context-protocol-mcp`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://modelcontextprotocol.io`],[`routerLink`,`/mcp/primitives`],[`href`,`/mcp/primitives#resources`],[`href`,`/mcp/primitives#prompts`],[`href`,`/mcp/primitives#guards-interceptors-pipes-and-filters`],[`href`,`/mcp/primitives#authorization`],[`href`,`/mcp/transports#over-stdio`],[`routerLink`,`/mcp/testing`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev`],[`appAnchor`,``,`id`,`register-the-module`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`routerLink`,`/mcp/transports`],[`appAnchor`,``,`id`,`how-a-call-is-served`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/modelcontextprotocol/typescript-sdk`],[`appAnchor`,``,`id`,`async-configuration`],[`appAnchor`,``,`id`,`module-options`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/mcp/tree/master/sample`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/mcp/overview.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(p,x){if(p&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`Model Context Protocol (MCP)`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/mcp`),cf(),bT(8,` turns a Nest application into a Model Context Protocol (MCP) server, whose tools, resources and prompts are methods of your providers.`),cf(),Aa(9,`p`),bT(10,`The online store for cat food and supplies answers a lot of email: "where is my order?", "can I change the delivery address?", "is the salmon kibble back in stock?". The support team works in an AI assistant (Claude, ChatGPT, an agent in their help desk), and the assistant can only answer when it can see what the order API sees.`),cf(),Aa(11,`p`),bT(12,`The `),Aa(13,`a`,6),bT(14,`Model Context Protocol`),cf(),bT(15,` (MCP) is how an assistant reaches an application. The application runs an `),Aa(16,`strong`),bT(17,`MCP server`),cf(),bT(18,`, and exposes three kinds of things to the assistant, the `),Aa(19,`strong`),bT(20,`MCP client`),cf(),bT(21,`:`),cf(),Aa(22,`ul`)(23,`li`)(24,`strong`),bT(25,`Tools`),cf(),bT(26,`, actions the model calls with arguments: look up an order, change its address.`),cf(),Aa(27,`li`)(28,`strong`),bT(29,`Resources`),cf(),bT(30,`, data the client reads by URI: the catalog, one order.`),cf(),Aa(31,`li`)(32,`strong`),bT(33,`Prompts`),cf(),bT(34,`, templates the user picks: "draft a reply about this order".`),cf()(),Aa(35,`p`)(36,`code`),bT(37,`@nestjs/mcp`),cf(),bT(38,` turns methods of your providers into tools, resources and prompts with a decorator each. They run through the guards, interceptors, pipes and exception filters your routes use, and the server is served from the Nest application you already have: over Streamable HTTP for remote assistants, and over stdio for one that launches it as a local process.`),cf(),Aa(39,`p`),bT(40,`In this tutorial, you'll give the store's order API an MCP server:`),cf(),Aa(41,`ul`)(42,`li`)(43,`a`,7),bT(44,`Tools`),cf(),bT(45,` to find an order and to change its delivery address, with schemas the model sees and the server validates.`),cf(),Aa(46,`li`),bT(47,`The catalog as a `),Aa(48,`a`,8),bT(49,`resource`),cf(),bT(50,`, and each order as a resource template.`),cf(),Aa(51,`li`),bT(52,`A `),Aa(53,`a`,9),bT(54,`prompt`),cf(),bT(55,` for drafting a reply.`),cf(),Aa(56,`li`),bT(57,`A `),Aa(58,`a`,10),bT(59,`guard`),cf(),bT(60,` that lets only the support team change orders, and an interceptor that logs each call.`),cf(),Aa(61,`li`)(62,`a`,11),bT(63,`OAuth 2.1`),cf(),bT(64,` on the HTTP endpoint, with the store's identity provider, and a scope for changing orders.`),cf(),Aa(65,`li`),bT(66,`The same server over `),Aa(67,`a`,12),bT(68,`stdio`),cf(),bT(69,`, and `),Aa(70,`a`,13),bT(71,`tests`),cf(),bT(72,` that call it in memory.`),cf()(),Aa(73,`h4`,14)(74,`span`),bT(75,`Installation`),cf()(),Aa(76,`p`),bT(77,`Install the package, the MCP TypeScript SDK it builds on, and Zod, for the schemas:`),cf(),Aa(78,`pre`)(79,`code`,15),bT(80,`
$ npm i --save @nestjs/mcp @modelcontextprotocol/server zod
`),cf()(),Aa(81,`blockquote`,16)(82,`strong`),bT(83,`Hint`),cf(),bT(84,` The schemas can come from any `),Aa(85,`a`,17),bT(86,`Standard Schema`),cf(),bT(87,` library that produces JSON Schema: Zod 4.2 or later and ArkType as they are, Valibot through `),Aa(88,`code`),bT(89,`toStandardJsonSchema()`),cf(),bT(90,` from `),Aa(91,`code`),bT(92,`@valibot/to-json-schema`),cf(),bT(93,`, and a JSON Schema document you already have through `),Aa(94,`code`),bT(95,`fromJsonSchema()`),cf(),bT(96,` from `),Aa(97,`code`),bT(98,`@modelcontextprotocol/server`),cf(),bT(99,`. Zod 3 schemas are refused at startup: the SDK cannot turn them into JSON Schema.
`),cf(),Aa(100,`h4`,18)(101,`span`),bT(102,`Register the module`),cf()(),Aa(103,`p`),bT(104,`Import `),Aa(105,`code`),bT(106,`McpModule`),cf(),bT(107,` in the root module. `),Aa(108,`code`),bT(109,`name`),cf(),bT(110,` and `),Aa(111,`code`),bT(112,`version`),cf(),bT(113,` identify the server to clients; `),Aa(114,`code`),bT(115,`instructions`),cf(),bT(116,` tells the model how to use it:`),cf(),Aa(117,`app-copy-button`,19)(118,`span`,20),bT(119),LT(120,`extension`),Wa(121,`app-tabs`,null,1),cf(),Aa(123,`pre`)(124,`code`,21),bT(125,`
import { Module } from '@nestjs/common';
import { McpModule } from '@nestjs/mcp';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    McpModule.forRoot({
      name: 'cat-store',
      version: '1.0.0',
      instructions: 'Look orders up with find-order before changing them.',
    }),
    OrdersModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(126,`p`),bT(127,`The module looks for tools, resources and prompts on every provider of the application, at startup. `),Aa(128,`code`),bT(129,`include: [OrdersModule]`),cf(),bT(130,` limits the search to the modules you list.`),cf(),Aa(131,`p`),bT(132,`Start the application as usual:`),cf(),Aa(133,`app-copy-button`,19)(134,`span`,20),bT(135),LT(136,`extension`),Wa(137,`app-tabs`,null,2),cf(),Aa(139,`pre`)(140,`code`,21),bT(141,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
`),cf()()(),Aa(142,`p`),bT(143,`The MCP endpoint is served at `),Aa(144,`code`),bT(145,`http://localhost:3000/mcp`),cf(),bT(146,`, next to the application's own routes. The same module can also be served over stdio, to an assistant that launches the application as a local process: see `),Aa(147,`a`,22),bT(148,`Transports`),cf(),bT(149,`.`),cf(),Aa(150,`h4`,23)(151,`span`),bT(152,`How a call is served`),cf()(),Aa(153,`p`),bT(154,`When the application starts, the module looks through its providers for methods decorated with `),Aa(155,`code`),bT(156,`@Tool()`),cf(),bT(157,`, `),Aa(158,`code`),bT(159,`@Resource()`),cf(),bT(160,`, `),Aa(161,`code`),bT(162,`@ResourceTemplate()`),cf(),bT(163,` and `),Aa(164,`code`),bT(165,`@Prompt()`),cf(),bT(166,`. It turns each schema into JSON Schema once, and fails at startup on what would otherwise only break later: two tools with one name, a tool name outside the MCP naming rules, a request-scoped provider, `),Aa(167,`code`),bT(168,`scopes`),cf(),bT(169,` without `),Aa(170,`code`),bT(171,`auth`),cf(),bT(172,`.`),cf(),Aa(173,`p`),bT(174,`Each HTTP request to the endpoint is then served on its own. The module builds an MCP server for it from what it found at startup, the `),Aa(175,`a`,24),bT(176,`MCP TypeScript SDK`),cf(),bT(177,` speaks the protocol, and a call goes through these steps:`),cf(),Aa(178,`ol`)(179,`li`),bT(180,`With `),Aa(181,`code`),bT(182,`auth`),cf(),bT(183,`, the access token is verified, and the call's scopes are checked.`),cf(),Aa(184,`li`),bT(185,`The SDK validates the arguments against the schema. Arguments it refuses never reach your method: the model is told what's wrong, and can try again.`),cf(),Aa(186,`li`),bT(187,`Your guards run, then your interceptors and pipes, as around a route handler.`),cf(),Aa(188,`li`),bT(189,`The method runs, with the arguments and the call's context.`),cf(),Aa(190,`li`),bT(191,`What it returns becomes the MCP result. What it throws goes through your exception filters, and becomes an error the client understands.`),cf()(),Aa(192,`p`),bT(193,`Nothing is kept between requests, so the server runs on as many instances as you like, behind any load balancer. Over stdio, one server serves the connection for as long as the process lives.`),cf(),Aa(194,`h4`,25)(195,`span`),bT(196,`Async configuration`),cf()(),Aa(197,`p`)(198,`code`),bT(199,`forRootAsync()`),cf(),bT(200,` takes the options from a factory, a `),Aa(201,`code`),bT(202,`useClass`),cf(),bT(203,` or a `),Aa(204,`code`),bT(205,`useExisting`),cf(),bT(206,` provider. `),Aa(207,`code`),bT(208,`path`),cf(),bT(209,`, `),Aa(210,`code`),bT(211,`endpointVersion`),cf(),bT(212,`, `),Aa(213,`code`),bT(214,`decorators`),cf(),bT(215,` and `),Aa(216,`code`),bT(217,`imports`),cf(),bT(218,` stay at the top level, because the module's routes are known when it is defined; a verifier from the factory is an instance:`),cf(),Aa(219,`app-copy-button`)(220,`pre`)(221,`code`,21),bT(222,`
McpModule.forRootAsync({
  imports: [ConfigModule, AuthModule],
  inject: [ConfigService, IdentityProviderTokenVerifier],
  useFactory: (config: ConfigService, verifier: IdentityProviderTokenVerifier) => ({
    name: 'cat-store',
    version: config.get('VERSION'),
    auth: {
      verifier,
      resource: config.get('MCP_RESOURCE'),
      authorizationServers: [config.get('IDENTITY_PROVIDER_URL')],
    },
  }),
}),
`),cf()()(),Aa(223,`h4`,26)(224,`span`),bT(225,`Module options`),cf()(),Aa(226,`table`)(227,`thead`)(228,`tr`)(229,`th`),bT(230,`Option`),cf(),Aa(231,`th`),bT(232,`Default`),cf(),Aa(233,`th`),bT(234,`Description`),cf()()(),Aa(235,`tbody`)(236,`tr`)(237,`td`)(238,`code`),bT(239,`name`),cf(),bT(240,`, `),Aa(241,`code`),bT(242,`version`),cf()(),Wa(243,`td`),Aa(244,`td`),bT(245,`Required. The server's identity, sent to clients`),cf()(),Aa(246,`tr`)(247,`td`)(248,`code`),bT(249,`title`),cf(),bT(250,`, `),Aa(251,`code`),bT(252,`description`),cf(),bT(253,`, `),Aa(254,`code`),bT(255,`websiteUrl`),cf(),bT(256,`, `),Aa(257,`code`),bT(258,`icons`),cf()(),Wa(259,`td`),Aa(260,`td`),bT(261,`More of it, for clients to show`),cf()(),Aa(262,`tr`)(263,`td`)(264,`code`),bT(265,`instructions`),cf()(),Wa(266,`td`),Aa(267,`td`),bT(268,`How the model should use the server`),cf()(),Aa(269,`tr`)(270,`td`)(271,`code`),bT(272,`include`),cf()(),Aa(273,`td`),bT(274,`every module`),cf(),Aa(275,`td`),bT(276,`The modules whose providers are searched for tools, resources and prompts`),cf()(),Aa(277,`tr`)(278,`td`)(279,`code`),bT(280,`path`),cf()(),Aa(281,`td`)(282,`code`),bT(283,`'mcp'`),cf()(),Aa(284,`td`),bT(285,`The HTTP endpoint's route. `),Aa(286,`code`),bT(287,`false`),cf(),bT(288,` for none. Top level of `),Aa(289,`code`),bT(290,`forRootAsync()`),cf()()(),Aa(291,`tr`)(292,`td`)(293,`code`),bT(294,`endpointVersion`),cf()(),Wa(295,`td`),Aa(296,`td`),bT(297,`The endpoint's version, with versioning enabled. Top level of `),Aa(298,`code`),bT(299,`forRootAsync()`),cf()()(),Aa(300,`tr`)(301,`td`)(302,`code`),bT(303,`decorators`),cf()(),Aa(304,`td`)(305,`code`),bT(306,`[]`),cf()(),Aa(307,`td`),bT(308,`Class decorators applied to the endpoint's controller. Top level of `),Aa(309,`code`),bT(310,`forRootAsync()`),cf()()(),Aa(311,`tr`)(312,`td`)(313,`code`),bT(314,`imports`),cf()(),Aa(315,`td`)(316,`code`),bT(317,`[]`),cf()(),Aa(318,`td`),bT(319,`Modules whose exports a `),Aa(320,`code`),bT(321,`verifier`),cf(),bT(322,` class injects. Top level of `),Aa(323,`code`),bT(324,`forRootAsync()`),cf()()(),Aa(325,`tr`)(326,`td`)(327,`code`),bT(328,`http.legacy`),cf()(),Aa(329,`td`)(330,`code`),bT(331,`'stateless'`),cf()(),Aa(332,`td`)(333,`code`),bT(334,`'reject'`),cf(),bT(335,` serves the 2026-07-28 revision only`),cf()(),Aa(336,`tr`)(337,`td`)(338,`code`),bT(339,`http.responseMode`),cf()(),Aa(340,`td`)(341,`code`),bT(342,`'auto'`),cf()(),Aa(343,`td`)(344,`code`),bT(345,`'json'`),cf(),bT(346,` or `),Aa(347,`code`),bT(348,`'sse'`),cf(),bT(349,` pin the response shape of 2026-07-28 requests`),cf()(),Aa(350,`tr`)(351,`td`)(352,`code`),bT(353,`http.allowedOrigins`),cf()(),Aa(354,`td`)(355,`code`),bT(356,`localhost`),cf(),bT(357,`, `),Aa(358,`code`),bT(359,`127.0.0.1`),cf(),bT(360,`, `),Aa(361,`code`),bT(362,`[::1]`),cf()(),Aa(363,`td`),bT(364,`The hostnames a request's `),Aa(365,`code`),bT(366,`Origin`),cf(),bT(367,` header may name; requests without one pass. A list replaces the default, `),Aa(368,`code`),bT(369,`false`),cf(),bT(370,` turns the check off`),cf()(),Aa(371,`tr`)(372,`td`)(373,`code`),bT(374,`http.allowedHosts`),cf()(),Aa(375,`td`),bT(376,`not checked`),cf(),Aa(377,`td`),bT(378,`The hostnames the `),Aa(379,`code`),bT(380,`Host`),cf(),bT(381,` header must name`),cf()(),Aa(382,`tr`)(383,`td`)(384,`code`),bT(385,`http.maxRequestBodySize`),cf()(),Aa(386,`td`),bT(387,`4 MiB`),cf(),Aa(388,`td`),bT(389,`For bodies the platform did not parse`),cf()(),Aa(390,`tr`)(391,`td`)(392,`code`),bT(393,`auth.verifier`),cf()(),Wa(394,`td`),Aa(395,`td`),bT(396,`A class or an instance with `),Aa(397,`code`),bT(398,`verifyAccessToken(token)`),cf()()(),Aa(399,`tr`)(400,`td`)(401,`code`),bT(402,`auth.resource`),cf()(),Wa(403,`td`),Aa(404,`td`),bT(405,`The server's canonical URL, and the audience of its tokens`),cf()(),Aa(406,`tr`)(407,`td`)(408,`code`),bT(409,`auth.authorizationServers`),cf()(),Wa(410,`td`),Aa(411,`td`),bT(412,`The issuers whose tokens are accepted`),cf()(),Aa(413,`tr`)(414,`td`)(415,`code`),bT(416,`auth.scopesSupported`),cf(),bT(417,`, `),Aa(418,`code`),bT(419,`auth.requiredScopes`),cf()(),Wa(420,`td`),Aa(421,`td`),bT(422,`Scopes advertised, and scopes every request needs`),cf()(),Aa(423,`tr`)(424,`td`)(425,`code`),bT(426,`auth.resourceName`),cf(),bT(427,`, `),Aa(428,`code`),bT(429,`auth.resourceDocumentation`),cf()(),Wa(430,`td`),Aa(431,`td`),bT(432,`More protected resource metadata`),cf()(),Aa(433,`tr`)(434,`td`)(435,`code`),bT(436,`stdio.legacy`),cf()(),Aa(437,`td`)(438,`code`),bT(439,`'serve'`),cf()(),Aa(440,`td`)(441,`code`),bT(442,`'reject'`),cf(),bT(443,` refuses connections that open with the 2025 handshake`),cf()()()(),Aa(444,`h4`,27)(445,`span`),bT(446,`Example`),cf()(),Aa(447,`p`),bT(448,`A working example is available `),Aa(449,`a`,28),bT(450,`here`),cf(),bT(451,`.`),cf()(),Aa(452,`a`,29),Wa(453,`i`,30),Aa(454,`span`),bT(455,`Edit on GitHub`),cf()()()),p&2){let y=tT(122),w=tT(138);zC(119),hf(` `,jT(120,2,`app.module`,y.isJsActive),`
`),zC(16),hf(` `,jT(136,5,`main`,w.isJsActive),`
`)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return l})();var _=(()=>{class l extends xt{static ɵfac=(()=>{let m;return function(x){return(m||(m=im(l)))(x||l)}})();static ɵcmp=ef({type:l,selectors:[[`app-mcp-primitives`]],features:[xy],decls:869,vars:64,consts:[[`contentReference`,``],[`app0b11e6bcb5fb7bca3df164753ec4cfbfb2e27f3a`,``],[`appb43d2c1ffc7b7de4a16b30b3db583bec9e60003f`,``],[`appcf6939d3d81ae062cf20b789a1c35b6bcd0cd2ba`,``],[`appec52bd21f92d9b3ffb5c8d63b26216c3c046a578`,``],[`app1ee5af2047dfebdf717518168c432f96696ad321`,``],[`appd127880f95c877d51b7cc987a69ce1c7606d3bee`,``],[`app20625833c642e2274cc748e04884f6156c0b38dd`,``],[`appa24cc78c0751c5f2c45abfe369245a5495aed936`,``],[`appcef2b75ff6b7ecaa4ac460b8f1595aa1816a8709`,``],[`app51374d609f238b5504e3e1f6fdd982064de90569`,``],[`appc209b0fefd7e301a59f1d8992126fd58c731bad0`,``],[`appb0173ac1c7ad3eeb85eeaf2992544dcd6e2fcb6d`,``],[`app44599d2cd03a9f349de6eb9f7188cc14de85141b`,``],[1,`content`],[1,`content-inner`],[`id`,`primitives`],[`appAnchor`,``,`id`,`tools`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/mcp/primitives#the-call-context`],[1,`info`],[`appAnchor`,``,`id`,`resources`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://datatracker.ietf.org/doc/html/rfc6570`],[`appAnchor`,``,`id`,`prompts`],[`appAnchor`,``,`id`,`try-it`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://modelcontextprotocol.io/docs/tools/inspector`],[1,`language-bash`],[`appAnchor`,``,`id`,`the-call-context`],[`href`,`/mcp/primitives#authorization`],[1,`warning`],[`appAnchor`,``,`id`,`guards-interceptors-pipes-and-filters`],[`appAnchor`,``,`id`,`errors`],[`appAnchor`,``,`id`,`authorization`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://datatracker.ietf.org/doc/html/rfc9728`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://datatracker.ietf.org/doc/html/rfc7662`],[`appAnchor`,``,`id`,`decorators`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/mcp/primitives.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(p,x){if(p&1&&(Aa(0,`div`,14,0)(2,`div`,15)(3,`h3`,16),bT(4,`Primitives`),cf(),Aa(5,`p`),bT(6,`An MCP server exposes three primitives: `),Aa(7,`strong`),bT(8,`tools`),cf(),bT(9,`, actions the model calls, `),Aa(10,`strong`),bT(11,`resources`),cf(),bT(12,`, data the client reads, and `),Aa(13,`strong`),bT(14,`prompts`),cf(),bT(15,`, templates the user picks. Each is a method of one of your providers, with a decorator, and runs through the same guards, interceptors, pipes and exception filters as your routes.`),cf(),Aa(16,`h4`,17)(17,`span`),bT(18,`Tools`),cf()(),Aa(19,`p`),bT(20,`A tool is a method decorated with `),Aa(21,`code`),bT(22,`@Tool()`),cf(),bT(23,`. `),Aa(24,`code`),bT(25,`inputSchema`),cf(),bT(26,` describes its arguments: the SDK advertises it to the client as JSON Schema, and validates every call against it before the method runs. `),Aa(27,`code`),bT(28,`.describe()`),cf(),bT(29,` texts reach the model, which reads them to fill the arguments in:`),cf(),Aa(30,`app-copy-button`,18)(31,`span`,19),bT(32),LT(33,`extension`),Wa(34,`app-tabs`,null,1),cf(),Aa(36,`pre`)(37,`code`,20),bT(38,`
import { Injectable, NotFoundException } from '@nestjs/common';
import { Tool, type McpContext } from '@nestjs/mcp';
import * as z from 'zod';
import { OrdersService } from './orders.service';

@Injectable()
export class OrdersTools {
  constructor(private readonly orders: OrdersService) {}

  @Tool({
    name: 'find-order',
    description:
      'Find an order by its id, or the latest orders of a customer by email',
    inputSchema: z.object({
      orderId: z.string().optional().describe('The order id, such as ord_123'),
      email: z.email().optional().describe("The customer's email address"),
    }),
    annotations: { readOnlyHint: true },
  })
  async find({ orderId, email }: { orderId?: string; email?: string }) {
    const orders = orderId
      ? [await this.orders.findById(orderId)]
      : await this.orders.latestFor(email!);
    if (orders.length === 0 || !orders[0]) {
      throw new NotFoundException('No such order');
    }
    return orders;
  }

  @Tool({
    name: 'change-address',
    description:
      'Change the delivery address of an order that has not shipped yet',
    inputSchema: z.object({ orderId: z.string(), address: z.string().min(10) }),
    outputSchema: z.object({
      orderId: z.string(),
      address: z.string(),
      status: z.string(),
    }),
  })
  async changeAddress(
    { orderId, address }: { orderId: string; address: string },
    ctx: McpContext,
  ) {
    const order = await this.orders.changeAddress(
      orderId,
      address,
      ctx.authInfo?.clientId,
    );
    return { orderId: order.id, address: order.address, status: order.status };
  }
}
`),cf()()(),Aa(39,`p`),bT(40,`Register the class as a provider, as any other:`),cf(),Aa(41,`app-copy-button`,18)(42,`span`,19),bT(43),LT(44,`extension`),Wa(45,`app-tabs`,null,2),cf(),Aa(47,`pre`)(48,`code`,20),bT(49,`
@Module({
  providers: [OrdersService, OrdersTools],
})
export class OrdersModule {}
`),cf()()(),Aa(50,`p`),bT(51,`The method is called with the validated arguments and the call's `),Aa(52,`a`,21),bT(53,`context`),cf(),bT(54,`. What it returns becomes the tool's result:`),cf(),Aa(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),bT(59,`The method returns`),cf(),Aa(60,`th`),bT(61,`The client gets`),cf()()(),Aa(62,`tbody`)(63,`tr`)(64,`td`),bT(65,`A string`),cf(),Aa(66,`td`),bT(67,`One text block`),cf()(),Aa(68,`tr`)(69,`td`),bT(70,`Another value, with an `),Aa(71,`code`),bT(72,`outputSchema`),cf()(),Aa(73,`td`),bT(74,`The value as `),Aa(75,`code`),bT(76,`structuredContent`),cf(),bT(77,` (validated against the schema), and as a JSON text block`),cf()(),Aa(78,`tr`)(79,`td`),bT(80,`Another value, without one`),cf(),Aa(81,`td`),bT(82,`A JSON text block`),cf()(),Aa(83,`tr`)(84,`td`),bT(85,`A `),Aa(86,`code`),bT(87,`CallToolResult`),cf(),bT(88,` (`),Aa(89,`code`),bT(90),cf(),bT(91,`)`),cf(),Aa(92,`td`),bT(93,`It, as it is, for images, audio, embedded resources and links`),cf()(),Aa(94,`tr`)(95,`td`)(96,`code`),bT(97,`undefined`),cf()(),Aa(98,`td`),bT(99,`An empty result`),cf()()()(),Aa(100,`p`),bT(101,`The name defaults to the method's (`),Aa(102,`code`),bT(103,`find`),cf(),bT(104,`); tool names have 1 to 128 characters out of `),Aa(105,`code`),bT(106,`A-Z a-z 0-9 _ - .`),cf(),bT(107,`, and two tools with one name fail at startup. `),Aa(108,`code`),bT(109,`annotations`),cf(),bT(110,` are hints for the client, such as `),Aa(111,`code`),bT(112,`readOnlyHint: true`),cf(),bT(113,`, which lets it run the tool without asking the user first.`),cf(),Aa(114,`p`),bT(115,`To return something other than text, such as a picture the model should look at, return a `),Aa(116,`code`),bT(117,`CallToolResult`),cf(),bT(118,` (from `),Aa(119,`code`),bT(120,`@modelcontextprotocol/server`),cf(),bT(121,`) yourself:`),cf(),Aa(122,`app-copy-button`,18)(123,`span`,19),bT(124),LT(125,`extension`),Wa(126,`app-tabs`,null,3),cf(),Aa(128,`pre`)(129,`code`,20),bT(130,`
@Tool({
  name: 'product-photo',
  description:
    'Show the photo of a product, to compare it with what the customer describes',
  inputSchema: z.object({
    sku: z.string().describe('The product SKU, such as SKU-1042'),
  }),
  annotations: { readOnlyHint: true },
})
async photo({ sku }: { sku: string }): Promise<CallToolResult> {
  const photo = await this.catalog.photo(sku);
  return {
    content: [
      {
        type: 'image',
        data: photo.toString('base64'),
        mimeType: 'image/jpeg',
      },
    ],
  };
}
`),cf()()(),Aa(131,`blockquote`,22)(132,`strong`),bT(133,`Hint`),cf(),bT(134,` The model picks a tool by its name and description, and fills the arguments in from their `),Aa(135,`code`),bT(136,`.describe()`),cf(),bT(137,` texts, so write them for the model: what the tool does and when to use it, what each argument means, with an example value. Say when a tool changes something.
`),cf(),Aa(138,`h4`,23)(139,`span`),bT(140,`Resources`),cf()(),Aa(141,`p`),bT(142,`A resource is data the client reads, and shows the user or hands the model. `),Aa(143,`code`),bT(144,`@Resource()`),cf(),bT(145,` serves a fixed URI, `),Aa(146,`code`),bT(147,`@ResourceTemplate()`),cf(),bT(148,` every URI that matches an `),Aa(149,`a`,24),bT(150,`RFC 6570`),cf(),bT(151,` template, whose variables the method receives:`),cf(),Aa(152,`app-copy-button`,18)(153,`span`,19),bT(154),LT(155,`extension`),Wa(156,`app-tabs`,null,4),cf(),Aa(158,`pre`)(159,`code`,20),bT(160,`
@Resource({
  uri: 'catalog://products',
  description: 'Every product and its stock',
  mimeType: 'application/json',
})
catalog() {
  return this.catalog.all();
}

@ResourceTemplate({
  uriTemplate: 'orders://{orderId}',
  description: 'One order',
  mimeType: 'application/json',
})
async order({ orderId }: { orderId: string }) {
  const order = await this.orders.findById(orderId);
  if (!order) {
    throw new NotFoundException();
  }
  return order;
}
`),cf()()(),Aa(161,`p`),bT(162,`A string is sent as text of the `),Aa(163,`code`),bT(164,`mimeType`),cf(),bT(165,`, a `),Aa(166,`code`),bT(167,`Uint8Array`),cf(),bT(168,` or `),Aa(169,`code`),bT(170,`Buffer`),cf(),bT(171,` as a binary blob, a `),Aa(172,`code`),bT(173,`ReadResourceResult`),cf(),bT(174,` (`),Aa(175,`code`),bT(176),cf(),bT(177,`) as it is, and anything else as JSON. A `),Aa(178,`code`),bT(179,`NotFoundException`),cf(),bT(180,` is answered with the spec's resource-not-found error.`),cf(),Aa(181,`p`),bT(182,`Resources suit content the client loads into the conversation as it is: the catalog, an order, the return policy. Clients decide when to read them, often when the user attaches one. To let the model look something up, with arguments, give it a tool.`),cf(),Aa(183,`h4`,25)(184,`span`),bT(185,`Prompts`),cf()(),Aa(186,`p`),bT(187,`A prompt is a message template the user picks in the client. Its arguments are a schema too, and the client asks the user for each one:`),cf(),Aa(188,`app-copy-button`,18)(189,`span`,19),bT(190),LT(191,`extension`),Wa(192,`app-tabs`,null,5),cf(),Aa(194,`pre`)(195,`code`,20),bT(196,`
@Prompt({
  name: 'draft-reply',
  description: 'Draft a reply to a customer about an order',
  argsSchema: z.object({
    orderId: z.string().describe('The order the customer wrote about'),
    tone: z.enum(['formal', 'friendly']).describe('How the reply sounds'),
  }),
})
async draftReply({
  orderId,
  tone,
}: {
  orderId: string;
  tone: 'formal' | 'friendly';
}) {
  const order = await this.orders.findById(orderId);
  return \`Draft a \${tone} reply to the customer of order \${orderId}. The order: \${JSON.stringify(order)}\`;
}
`),cf()()(),Aa(197,`p`),bT(198,`A string is one user message; an array of messages, or a `),Aa(199,`code`),bT(200,`GetPromptResult`),cf(),bT(201,` (`),Aa(202,`code`),bT(203),cf(),bT(204,`), is sent as it is.`),cf(),Aa(205,`p`),bT(206,`A prompt can also open the conversation with more than one message. This one attaches the order as an embedded resource, then asks the question:`),cf(),Aa(207,`app-copy-button`,18)(208,`span`,19),bT(209),LT(210,`extension`),Wa(211,`app-tabs`,null,6),cf(),Aa(213,`pre`)(214,`code`,20),bT(215,`
@Prompt({
  name: 'review-complaint',
  description: 'Review a complaint about an order',
  argsSchema: z.object({
    orderId: z.string().describe('The order the complaint is about'),
  }),
})
async reviewComplaint({
  orderId,
}: {
  orderId: string;
}): Promise<PromptMessage[]> {
  const order = await this.orders.findById(orderId);
  return [
    {
      role: 'user',
      content: {
        type: 'resource',
        resource: {
          uri: \`orders://\${orderId}\`,
          mimeType: 'application/json',
          text: JSON.stringify(order),
        },
      },
    },
    {
      role: 'user',
      content: {
        type: 'text',
        text: 'Is the complaint about this order justified? Answer in two sentences.',
      },
    },
  ];
}
`),cf()()(),Aa(216,`p`)(217,`code`),bT(218,`PromptMessage`),cf(),bT(219,` is a type from `),Aa(220,`code`),bT(221,`@modelcontextprotocol/server`),cf(),bT(222,`.`),cf(),Aa(223,`h4`,26)(224,`span`),bT(225,`Try it`),cf()(),Aa(226,`p`),bT(227,`Start the application, and the endpoint is at `),Aa(228,`code`),bT(229,`http://localhost:3000/mcp`),cf(),bT(230,`. The `),Aa(231,`a`,27),bT(232,`MCP Inspector`),cf(),bT(233,` lists and calls everything the server exposes:`),cf(),Aa(234,`pre`)(235,`code`,28),bT(236,`
$ npx @modelcontextprotocol/inspector
`),cf()(),Aa(237,`p`),bT(238,`Choose `),Aa(239,`strong`),bT(240,`Streamable HTTP`),cf(),bT(241,`, enter the URL, and `),Aa(242,`strong`),bT(243,`Connect`),cf(),bT(244,`. Assistants that connect to remote MCP servers take the same URL.`),cf(),Aa(245,`h4`,29)(246,`span`),bT(247,`The call context`),cf()(),Aa(248,`p`),bT(249,`The second argument of every MCP method is an `),Aa(250,`code`),bT(251,`McpContext`),cf(),bT(252,`:`),cf(),Aa(253,`table`)(254,`thead`)(255,`tr`)(256,`th`),bT(257,`Property`),cf(),Aa(258,`th`),bT(259,`What it is`),cf()()(),Aa(260,`tbody`)(261,`tr`)(262,`td`)(263,`code`),bT(264,`kind`),cf(),bT(265,`, `),Aa(266,`code`),bT(267,`name`),cf(),bT(268,`, `),Aa(269,`code`),bT(270,`uri`),cf()(),Aa(271,`td`)(272,`code`),bT(273,`'tool'`),cf(),bT(274,`, `),Aa(275,`code`),bT(276,`'resource'`),cf(),bT(277,` or `),Aa(278,`code`),bT(279,`'prompt'`),cf(),bT(280,`; the tool's or prompt's name, or the resource's; the URI being read`),cf()(),Aa(281,`tr`)(282,`td`)(283,`code`),bT(284,`authInfo`),cf()(),Aa(285,`td`),bT(286,`The verified access token, with `),Aa(287,`a`,30),bT(288,`authorization`),cf(),bT(289,`: `),Aa(290,`code`),bT(291,`clientId`),cf(),bT(292,`, `),Aa(293,`code`),bT(294,`scopes`),cf(),bT(295,`, `),Aa(296,`code`),bT(297,`expiresAt`),cf(),bT(298,`, `),Aa(299,`code`),bT(300,`extra`),cf()()(),Aa(301,`tr`)(302,`td`)(303,`code`),bT(304,`request`),cf()(),Aa(305,`td`),bT(306,`The HTTP platform's request (Express, Fastify, the Node adapter), with its headers and whatever middleware set on it; for the in-memory test client, a plain `),Aa(307,`code`),bT(308),cf(),bT(309,` object; `),Aa(310,`code`),bT(311,`undefined`),cf(),bT(312,` over stdio`),cf()(),Aa(313,`tr`)(314,`td`)(315,`code`),bT(316,`requestInfo`),cf()(),Aa(317,`td`),bT(318,`The web-standard `),Aa(319,`code`),bT(320,`Request`),cf(),bT(321,` the SDK served`),cf()(),Aa(322,`tr`)(323,`td`)(324,`code`),bT(325,`transport`),cf(),bT(326,`, `),Aa(327,`code`),bT(328,`era`),cf()(),Aa(329,`td`)(330,`code`),bT(331,`'http'`),cf(),bT(332,` or `),Aa(333,`code`),bT(334,`'stdio'`),cf(),bT(335,`; `),Aa(336,`code`),bT(337,`'modern'`),cf(),bT(338,` (protocol revision 2026-07-28) or `),Aa(339,`code`),bT(340,`'legacy'`),cf(),bT(341,` (the 2025 revisions)`),cf()(),Aa(342,`tr`)(343,`td`)(344,`code`),bT(345,`signal`),cf()(),Aa(346,`td`),bT(347,`An `),Aa(348,`code`),bT(349,`AbortSignal`),cf(),bT(350,`, aborted when the client cancels the call or goes away: pass it on to `),Aa(351,`code`),bT(352,`fetch()`),cf(),bT(353,` and your database`),cf()(),Aa(354,`tr`)(355,`td`)(356,`code`),bT(357,`reportProgress(progress, total?, message?)`),cf()(),Aa(358,`td`),bT(359,`Sends a progress notification, when the client asked for them`),cf()(),Aa(360,`tr`)(361,`td`)(362,`code`),bT(363,`server`),cf()(),Aa(364,`td`),bT(365,`The SDK's own request context, for the rest (`),Aa(366,`code`),bT(367,`mcpReq.envelope`),cf(),bT(368,`, `),Aa(369,`code`),bT(370,`mcpReq.inputResponses`),cf(),bT(371,`)`),cf()()()(),Aa(372,`app-copy-button`)(373,`pre`)(374,`code`,20),bT(375,`
@Tool({
  name: 'export-orders',
  description: 'Export a month of orders as CSV',
})
async export(_input: unknown, ctx: McpContext) {
  const pages = await this.orders.pages();
  for (let page = 0; page < pages; page++) {
    ctx.signal.throwIfAborted();
    await this.orders.exportPage(page, { signal: ctx.signal });
    await ctx.reportProgress(page + 1, pages);
  }
  return 'Exported';
}
`),cf()()(),Aa(376,`p`)(377,`strong`),bT(378,`Asking the user.`),cf(),bT(379,` A tool that needs the user's confirmation, or a missing value, returns `),Aa(380,`code`),bT(381,`inputRequired()`),cf(),bT(382,` from `),Aa(383,`code`),bT(384,`@modelcontextprotocol/server`),cf(),bT(385,`: the client asks the user, and calls the tool again with the answer, which `),Aa(386,`code`),bT(387,`acceptedContent()`),cf(),bT(388,` reads and validates:`),cf(),Aa(389,`app-copy-button`)(390,`pre`)(391,`code`,20),bT(392,`
@Tool({
  name: 'cancel-order',
  description: 'Cancel an order',
  inputSchema: z.object({ orderId: z.string() }),
})
cancel({ orderId }: { orderId: string }, ctx: McpContext) {
  const Confirmation = z.object({ confirm: z.boolean() });
  const answer = acceptedContent(
    ctx.server.mcpReq.inputResponses,
    'confirm',
    Confirmation,
  );
  if (!answer) {
    return inputRequired({
      inputRequests: {
        confirm: inputRequired.elicit({
          message: \`Cancel order \${orderId}?\`,
          requestedSchema: Confirmation,
        }),
      },
    });
  }
  return answer.confirm ? this.orders.cancel(orderId) : 'Kept the order';
}
`),cf()()(),Aa(393,`blockquote`,31)(394,`strong`),bT(395,`Warning`),cf(),bT(396,` Over HTTP, this works with clients of the 2026-07-28 revision. A client of a 2025 revision is asked through a request from the server, which needs a session, and the endpoint keeps none: the call ends with a tool error. Over stdio, both work.
`),cf(),Aa(397,`h4`,32)(398,`span`),bT(399,`Guards, interceptors, pipes and filters`),cf()(),Aa(400,`p`),bT(401,`Every call runs through Nest's enhancers, bound on the class, on the method or globally, as for a route. The execution context's type is `),Aa(402,`code`),bT(403,`'mcp'`),cf(),bT(404,`, and `),Aa(405,`code`),bT(406,`McpExecutionContext`),cf(),bT(407,` reads the call, as `),Aa(408,`code`),bT(409,`GqlExecutionContext`),cf(),bT(410,` does for a GraphQL resolver. Only the support team may change an order:`),cf(),Aa(411,`app-copy-button`,18)(412,`span`,19),bT(413),LT(414,`extension`),Wa(415,`app-tabs`,null,7),cf(),Aa(417,`pre`)(418,`code`,20),bT(419,`
import {
  Injectable,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common';
import { McpExecutionContext } from '@nestjs/mcp';

@Injectable()
export class SupportTeamGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const mcp = McpExecutionContext.create(context);
    return mcp.getAuthInfo()?.extra?.team === 'support';
  }
}
`),cf()()(),Aa(420,`app-copy-button`,18)(421,`span`,19),bT(422),LT(423,`extension`),Wa(424,`app-tabs`,null,8),cf(),Aa(426,`pre`)(427,`code`,20),bT(428,`
@Tool({ name: 'change-address', ... })
@UseGuards(SupportTeamGuard)
async changeAddress(...) {}
`),cf()()(),Aa(429,`p`)(430,`code`),bT(431,`McpExecutionContext.create(context)`),cf(),bT(432,` has `),Aa(433,`code`),bT(434,`getInput()`),cf(),bT(435,` (the arguments), `),Aa(436,`code`),bT(437,`getContext()`),cf(),bT(438,` (the `),Aa(439,`code`),bT(440,`McpContext`),cf(),bT(441,`), `),Aa(442,`code`),bT(443,`getKind()`),cf(),bT(444,`, `),Aa(445,`code`),bT(446,`getName()`),cf(),bT(447,`, `),Aa(448,`code`),bT(449,`getRequest()`),cf(),bT(450,` and `),Aa(451,`code`),bT(452,`getAuthInfo()`),cf(),bT(453,`. Interceptors see the method's return value before it becomes the result, and can time, log or transform it. Pipes see the input as the call's `),Aa(454,`code`),bT(455,`body`),cf(),bT(456,`, so a global `),Aa(457,`code`),bT(458),cf(),bT(459,` validates a DTO class you type the input with, as it does for a route. Custom parameter decorators made with `),Aa(460,`code`),bT(461,`createParamDecorator()`),cf(),bT(462,` work after the input and the context, as on GraphQL resolvers: `),Aa(463,`code`),bT(464,`add(input, ctx, @CurrentUser() user)`),cf(),bT(465,`.`),cf(),Aa(466,`p`),bT(467,`Interceptors work the same way. This one logs how long each call takes, with its kind and name:`),cf(),Aa(468,`app-copy-button`,18)(469,`span`,19),bT(470),LT(471,`extension`),Wa(472,`app-tabs`,null,9),cf(),Aa(474,`pre`)(475,`code`,20),bT(476,`
import {
  Injectable,
  Logger,
  type CallHandler,
  type ExecutionContext,
  type NestInterceptor,
} from '@nestjs/common';
import { McpExecutionContext } from '@nestjs/mcp';
import { tap, type Observable } from 'rxjs';

@Injectable()
export class CallLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('MCP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const mcp = McpExecutionContext.create(context);
    const started = performance.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(
            \`\${mcp.getKind()} \${mcp.getName()} took \${Math.round(performance.now() - started)} ms\`,
          ),
        ),
      );
  }
}
`),cf()()(),Aa(477,`p`)(478,`code`),bT(479,`@UseInterceptors(CallLoggingInterceptor)`),cf(),bT(480,` on the `),Aa(481,`code`),bT(482,`OrdersTools`),cf(),bT(483,` class logs every tool, resource and prompt of the class.`),cf(),Aa(484,`blockquote`,31)(485,`strong`),bT(486,`Warning`),cf(),bT(487,` Global guards, interceptors and filters (`),Aa(488,`code`),bT(489,`app.useGlobalGuards()`),cf(),bT(490,`, `),Aa(491,`code`),bT(492,`APP_GUARD`),cf(),bT(493,`) run on MCP calls too, as they do on GraphQL resolvers, and on the HTTP request that carries them. An enhancer written for HTTP routes that reads `),Aa(494,`code`),bT(495,`context.switchToHttp().getRequest()`),cf(),bT(496,` should check `),Aa(497,`code`),bT(498,`context.getType() === 'http'`),cf(),bT(499,` first.
`),cf(),Aa(500,`h4`,33)(501,`span`),bT(502,`Errors`),cf()(),Aa(503,`p`),bT(504,`What a tool throws becomes a result with `),Aa(505,`code`),bT(506,`isError: true`),cf(),bT(507,`, which the model reads and can recover from: the message of an `),Aa(508,`code`),bT(509,`HttpException`),cf(),bT(510,` (a `),Aa(511,`code`),bT(512,`BadRequestException('The address has no postcode')`),cf(),bT(513,`), and `),Aa(514,`code`),bT(515,`Internal server error`),cf(),bT(516,` for any other error, which Nest's exception handler logs and whose message never reaches the client. Resources and prompts answer with JSON-RPC errors: a `),Aa(517,`code`),bT(518,`NotFoundException`),cf(),bT(519,` as resource-not-found, a `),Aa(520,`code`),bT(521,`BadRequestException`),cf(),bT(522,` as invalid params, another `),Aa(523,`code`),bT(524,`HttpException`),cf(),bT(525,` as an internal error carrying its message and status. An exception filter can answer instead: what it returns is the result, and a `),Aa(526,`code`),bT(527,`ProtocolError`),cf(),bT(528,` (from `),Aa(529,`code`),bT(530,`@modelcontextprotocol/server`),cf(),bT(531,`) it throws is the JSON-RPC error.`),cf(),Aa(532,`app-copy-button`)(533,`pre`)(534,`code`,20),bT(535,`
@Catch(PaymentProviderError)
export class PaymentProviderFilter implements ExceptionFilter {
  catch(exception: PaymentProviderError, host: ArgumentsHost) {
    if (host.getType<McpContextType>() !== 'mcp') {
      throw exception;
    }
    return {
      content: [
        {
          type: 'text',
          text: 'Payments are down; try again in a few minutes.',
        },
      ],
      isError: true,
    };
  }
}
`),cf()()(),Aa(536,`h4`,34)(537,`span`),bT(538,`Authorization`),cf()(),Aa(539,`p`),bT(540,`The order API's MCP server answers questions about customers, so it requires a signed-in user. In MCP, the server is an OAuth 2.1 `),Aa(541,`strong`),bT(542,`resource server`),cf(),bT(543,`: the client gets an access token from the store's identity provider (Auth0, Keycloak, Entra ID, WorkOS, your own), and sends it with every request. The server verifies it, and never issues tokens. Configure `),Aa(544,`code`),bT(545,`auth`),cf(),bT(546,`:`),cf(),Aa(547,`app-copy-button`,18)(548,`span`,19),bT(549),LT(550,`extension`),Wa(551,`app-tabs`,null,10),cf(),Aa(553,`pre`)(554,`code`,20),bT(555,`
McpModule.forRoot({
  name: 'cat-store',
  version: '1.0.0',
  auth: {
    verifier: IdentityProviderTokenVerifier,
    resource: 'https://api.catstore.example/mcp',
    authorizationServers: ['https://auth.catstore.example'],
    scopesSupported: ['orders:read'],
  },
}),
`),cf()()(),Aa(556,`ul`)(557,`li`)(558,`code`),bT(559,`resource`),cf(),bT(560,` is the canonical URL of the MCP server. Clients ask the identity provider for a token for it, and the server accepts only tokens issued for it (their audience), as the spec requires.`),cf(),Aa(561,`li`)(562,`code`),bT(563,`authorizationServers`),cf(),bT(564,` are the issuers whose tokens it accepts. The module serves them, with `),Aa(565,`code`),bT(566,`scopesSupported`),cf(),bT(567,`, as the `),Aa(568,`a`,35),bT(569,`protected resource metadata`),cf(),bT(570,` (RFC 9728) at `),Aa(571,`code`),bT(572,`/.well-known/oauth-protected-resource/mcp`),cf(),bT(573,`, where clients discover how to sign in.`),cf(),Aa(574,`li`),bT(575,`A request without a valid token gets 401 with a `),Aa(576,`code`),bT(577,`WWW-Authenticate: Bearer`),cf(),bT(578,` challenge that points at the metadata. That challenge is what starts the client's sign-in.`),cf()(),Aa(579,`p`),bT(580,`The `),Aa(581,`strong`),bT(582,`verifier`),cf(),bT(583,` decides which tokens are valid. It's a class of yours with `),Aa(584,`code`),bT(585,`verifyAccessToken(token)`),cf(),bT(586,`, which returns the token's `),Aa(587,`code`),bT(588,`AuthInfo`),cf(),bT(589,`, or `),Aa(590,`code`),bT(591,`null`),cf(),bT(592,` to refuse it. Nest instantiates it, so it injects what it needs. For JWT access tokens, `),Aa(593,`code`),bT(594,`JwtVerifier`),cf(),bT(595,` from `),Aa(596,`code`),bT(597,`@nestjs/authentication`),cf(),bT(598,` checks the signature against the identity provider's keys, the issuer, the audience and the expiry:`),cf(),Aa(599,`app-copy-button`,18)(600,`span`,19),bT(601),LT(602,`extension`),Wa(603,`app-tabs`,null,11),cf(),Aa(605,`pre`)(606,`code`,20),bT(607,`
import { Injectable } from '@nestjs/common';
import { JwtVerifier } from '@nestjs/authentication';
import type { McpTokenVerifier } from '@nestjs/mcp';
import type { AuthInfo } from '@modelcontextprotocol/server';

const RESOURCE = 'https://api.catstore.example/mcp';

@Injectable()
export class IdentityProviderTokenVerifier implements McpTokenVerifier {
  private readonly jwt = new JwtVerifier({
    jwks: 'https://auth.catstore.example/.well-known/jwks.json',
    issuer: 'https://auth.catstore.example',
    audience: RESOURCE,
    type: 'at+jwt',
  });

  async verifyAccessToken(token: string): Promise<AuthInfo> {
    // A bad signature, an expired token or another audience throws a JwtError: answered with 401.
    const claims = await this.jwt.verify(token);
    return {
      token,
      clientId: String(claims.client_id ?? claims.sub),
      scopes: typeof claims.scope === 'string' ? claims.scope.split(' ') : [],
      expiresAt: claims.exp,
      resource: new URL(RESOURCE),
      extra: { team: claims.team },
    };
  }
}
`),cf()()(),Aa(608,`p`),bT(609,`An error with `),Aa(610,`code`),bT(611,`status: 401`),cf(),bT(612,` (`),Aa(613,`code`),bT(614,`JwtError`),cf(),bT(615,`, `),Aa(616,`code`),bT(617,`UnauthorizedException`),cf(),bT(618,`) refuses the token; any other error (the keys could not be fetched) is answered with 500. Opaque tokens go through your identity provider's introspection endpoint instead, behind the same method.`),cf(),Aa(619,`p`),bT(620,`For opaque tokens, the verifier asks the identity provider's introspection endpoint (`),Aa(621,`a`,36),bT(622,`RFC 7662`),cf(),bT(623,`) instead:`),cf(),Aa(624,`app-copy-button`,18)(625,`span`,19),bT(626),LT(627,`extension`),Wa(628,`app-tabs`,null,12),cf(),Aa(630,`pre`)(631,`code`,20),bT(632,`
import { Injectable } from '@nestjs/common';
import type { McpTokenVerifier } from '@nestjs/mcp';
import type { AuthInfo } from '@modelcontextprotocol/server';

const RESOURCE = 'https://api.catstore.example/mcp';

@Injectable()
export class IntrospectionTokenVerifier implements McpTokenVerifier {
  async verifyAccessToken(token: string): Promise<AuthInfo | null> {
    const credentials = btoa(
      \`\${process.env.INTROSPECTION_CLIENT_ID}:\${process.env.INTROSPECTION_CLIENT_SECRET}\`,
    );
    const response = await fetch(
      'https://auth.catstore.example/oauth/introspect',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          authorization: \`Basic \${credentials}\`,
        },
        body: new URLSearchParams({ token }),
      },
    );
    if (!response.ok) {
      // No verdict on the token: answered with 500.
      throw new Error(\`Token introspection failed with \${response.status}\`);
    }
    const claims = (await response.json()) as {
      active: boolean;
      aud?: string | string[];
      client_id: string;
      scope?: string;
      exp: number;
    };
    if (!claims.active || ![claims.aud].flat().includes(RESOURCE)) {
      return null; // Answered with 401.
    }
    return {
      token,
      clientId: claims.client_id,
      scopes: claims.scope ? claims.scope.split(' ') : [],
      expiresAt: claims.exp,
      resource: new URL(RESOURCE),
    };
  }
}
`),cf()()(),Aa(633,`p`),bT(634,`Whichever verifier you write, the module checks two things in what it returns: `),Aa(635,`code`),bT(636,`resource`),cf(),bT(637,` must be the `),Aa(638,`code`),bT(639,`auth.resource`),cf(),bT(640,` URL, and `),Aa(641,`code`),bT(642,`expiresAt`),cf(),bT(643,` must be set and in the future. A token that fails either is refused with 401.`),cf(),Aa(644,`p`)(645,`strong`),bT(646,`Scopes.`),cf(),Aa(647,`code`),bT(648,`scopes`),cf(),bT(649,` on a tool, a resource or a prompt names what the token must carry for it. A call without them is answered, before the method runs, with 403 and the missing scopes in the challenge, and the client asks the user to grant them (step-up authorization). `),Aa(650,`code`),bT(651,`requiredScopes`),cf(),bT(652,` in `),Aa(653,`code`),bT(654,`auth`),cf(),bT(655,` requires scopes on every request:`),cf(),Aa(656,`app-copy-button`)(657,`pre`)(658,`code`,20),bT(659,`
@Tool({ name: 'change-address', ..., scopes: ['orders:write'] })
`),cf()()(),Aa(660,`p`),bT(661,`Declaring `),Aa(662,`code`),bT(663,`scopes`),cf(),bT(664,` without `),Aa(665,`code`),bT(666,`auth`),cf(),bT(667,` fails at startup, because nothing would check them. The token is `),Aa(668,`code`),bT(669,`ctx.authInfo`),cf(),bT(670,` in methods, and `),Aa(671,`code`),bT(672,`McpExecutionContext.create(context).getAuthInfo()`),cf(),bT(673,` in guards, for decisions scopes don't express.`),cf(),Aa(674,`p`)(675,`strong`),bT(676,`With `),Aa(677,`code`),bT(678,`@nestjs/authentication`),cf(),bT(679,` and `),Aa(680,`code`),bT(681,`@nestjs/authorization`),cf(),bT(682,`.`),cf(),bT(683,` Their global guards run on every MCP call. The authentication guard authenticates the call with your providers, from the HTTP request it arrived in: a `),Aa(684,`code`),bT(685,`JwtBearerProvider`),cf(),bT(686,` that accepts the identity provider's tokens accepts the MCP client's. `),Aa(687,`code`),bT(688,`@CurrentUser()`),cf(),bT(689,` and `),Aa(690,`code`),bT(691,`AuthenticationContext`),cf(),bT(692,` then work in tools, and `),Aa(693,`code`),bT(694,`@Can()`),cf(),bT(695,` policies decide each call:`),cf(),Aa(696,`app-copy-button`,18)(697,`span`,19),bT(698),LT(699,`extension`),Wa(700,`app-tabs`,null,13),cf(),Aa(702,`pre`)(703,`code`,20),bT(704,`
@Tool({
  name: 'refund',
  description: 'Refund an order',
  inputSchema: z.object({ orderId: z.string() }),
})
@Can(OrderPolicy, 'refund')
refund(
  { orderId }: { orderId: string },
  ctx: McpContext,
  @CurrentUser() agent: Agent,
) {
  return this.orders.refund(orderId, agent);
}
`),cf()()(),Aa(705,`p`),bT(706,`Exempt the endpoint's route from the authentication guard with `),Aa(707,`code`),bT(708,`decorators: [Public()]`),cf(),bT(709,`, and let `),Aa(710,`code`),bT(711,`auth`),cf(),bT(712,` answer its unauthenticated requests: the guard's own challenge doesn't point MCP clients at the metadata. A refusal on a call is a tool error, `),Aa(713,`code`),bT(714,`Unauthorized`),cf(),bT(715,` or `),Aa(716,`code`),bT(717,`Forbidden`),cf(),bT(718,`, and a tool that declares no `),Aa(719,`code`),bT(720,`@Can()`),cf(),bT(721,` is denied, as a route is. Over stdio there is no request, so a call is anonymous unless a provider of your own authenticates it from the environment.`),cf(),Aa(722,`blockquote`,22)(723,`strong`),bT(724,`Hint`),cf(),bT(725,` This needs `),Aa(726,`code`),bT(727,`@nestjs/authentication`),cf(),bT(728,` 0.1.3 and `),Aa(729,`code`),bT(730,`@nestjs/authorization`),cf(),bT(731,` 0.1.1 or later, the first versions that know MCP calls (context type `),Aa(732,`code`),bT(733,`'mcp'`),cf(),bT(734,`). With earlier ones, the global guard finds no credentials on a call: mark the providers of your tools `),Aa(735,`code`),bT(736,`@Public()`),cf(),bT(737,`.
`),cf(),Aa(738,`h4`,37)(739,`span`),bT(740,`Decorators`),cf()(),Aa(741,`table`)(742,`thead`)(743,`tr`)(744,`th`),bT(745,`Decorator`),cf(),Aa(746,`th`),bT(747,`Options`),cf(),Aa(748,`th`),bT(749,`The method is called with`),cf()()(),Aa(750,`tbody`)(751,`tr`)(752,`td`)(753,`code`),bT(754,`@Tool()`),cf()(),Aa(755,`td`)(756,`code`),bT(757,`name`),cf(),bT(758,`, `),Aa(759,`code`),bT(760,`title`),cf(),bT(761,`, `),Aa(762,`code`),bT(763,`description`),cf(),bT(764,`, `),Aa(765,`code`),bT(766,`inputSchema`),cf(),bT(767,`, `),Aa(768,`code`),bT(769,`outputSchema`),cf(),bT(770,`, `),Aa(771,`code`),bT(772,`annotations`),cf(),bT(773,`, `),Aa(774,`code`),bT(775,`icons`),cf(),bT(776,`, `),Aa(777,`code`),bT(778,`_meta`),cf(),bT(779,`, `),Aa(780,`code`),bT(781,`scopes`),cf()(),Aa(782,`td`),bT(783,`The validated arguments, the context`),cf()(),Aa(784,`tr`)(785,`td`)(786,`code`),bT(787,`@Resource()`),cf()(),Aa(788,`td`)(789,`code`),bT(790,`uri`),cf(),bT(791,`, `),Aa(792,`code`),bT(793,`name`),cf(),bT(794,`, `),Aa(795,`code`),bT(796,`title`),cf(),bT(797,`, `),Aa(798,`code`),bT(799,`description`),cf(),bT(800,`, `),Aa(801,`code`),bT(802,`mimeType`),cf(),bT(803,`, `),Aa(804,`code`),bT(805,`size`),cf(),bT(806,`, `),Aa(807,`code`),bT(808,`annotations`),cf(),bT(809,`, `),Aa(810,`code`),bT(811,`icons`),cf(),bT(812,`, `),Aa(813,`code`),bT(814,`_meta`),cf(),bT(815,`, `),Aa(816,`code`),bT(817,`cacheHint`),cf(),bT(818,`, `),Aa(819,`code`),bT(820,`scopes`),cf()(),Aa(821,`td`)(822,`code`),bT(823),cf(),bT(824,`, the context (`),Aa(825,`code`),bT(826,`ctx.uri`),cf(),bT(827,`)`),cf()(),Aa(828,`tr`)(829,`td`)(830,`code`),bT(831,`@ResourceTemplate()`),cf()(),Aa(832,`td`)(833,`code`),bT(834,`uriTemplate`),cf(),bT(835,`, and the same`),cf(),Aa(836,`td`),bT(837,`The template's variables, the context`),cf()(),Aa(838,`tr`)(839,`td`)(840,`code`),bT(841,`@Prompt()`),cf()(),Aa(842,`td`)(843,`code`),bT(844,`name`),cf(),bT(845,`, `),Aa(846,`code`),bT(847,`title`),cf(),bT(848,`, `),Aa(849,`code`),bT(850,`description`),cf(),bT(851,`, `),Aa(852,`code`),bT(853,`argsSchema`),cf(),bT(854,`, `),Aa(855,`code`),bT(856,`icons`),cf(),bT(857,`, `),Aa(858,`code`),bT(859,`_meta`),cf(),bT(860,`, `),Aa(861,`code`),bT(862,`scopes`),cf()(),Aa(863,`td`),bT(864,`The validated arguments, the context`),cf()()()()(),Aa(865,`a`,38),Wa(866,`i`,39),Aa(867,`span`),bT(868,`Edit on GitHub`),cf()()()),p&2){let y=tT(35),w=tT(46),T=tT(127),k=tT(157),A=tT(193),I=tT(212),M=tT(416),P=tT(425),R=tT(473),j=tT(552),J=tT(604),z=tT(629),D=tT(701);zC(32),hf(` `,jT(33,25,`orders/orders.tools`,y.isJsActive),`
`),zC(11),hf(` `,jT(44,28,`orders/orders.module`,w.isJsActive),`
`),zC(47),Ky(``,`{`,` content, structuredContent?, isError? `,`}`),zC(34),hf(` `,jT(125,31,`orders/orders.tools`,T.isJsActive),`
`),zC(30),hf(` `,jT(155,34,`orders/orders.tools`,k.isJsActive),`
`),zC(22),Ky(``,`{`,` contents: [...] `,`}`),zC(14),hf(` `,jT(191,37,`orders/orders.tools`,A.isJsActive),`
`),zC(13),Ky(``,`{`,` messages: [...] `,`}`),zC(6),hf(` `,jT(210,40,`orders/orders.tools`,I.isJsActive),`
`),zC(99),Ky(``,`{`,` method, url, headers `,`}`),zC(105),hf(` `,jT(414,43,`orders/support-team.guard`,M.isJsActive),`
`),zC(9),hf(` `,jT(423,46,`orders/orders.tools`,P.isJsActive),`
`),zC(36),Ky(`ValidationPipe(`,`{`,` transform: true `,`}`,`)`),zC(12),hf(` `,jT(471,49,`orders/call-logging.interceptor`,R.isJsActive),`
`),zC(79),hf(` `,jT(550,52,`app.module`,j.isJsActive),`
`),zC(52),hf(` `,jT(602,55,`auth/identity-provider-token.verifier`,J.isJsActive),`
`),zC(25),hf(` `,jT(627,58,`auth/introspection-token.verifier`,z.isJsActive),`
`),zC(72),hf(` `,jT(699,61,`orders/orders.tools`,D.isJsActive),`
`),zC(125),Ky(``,`{`,``,`}`)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return l})();var B=(()=>{class l extends xt{static ɵfac=(()=>{let m;return function(x){return(m||(m=im(l)))(x||l)}})();static ɵcmp=ef({type:l,selectors:[[`app-mcp-transports`]],features:[xy],decls:311,vars:38,consts:[[`contentReference`,``],[`app1b6583278242f9e4591e8c26b3fc6a9fabfd5014`,``],[`app16f8710c513888313308c50d50e8494e68e3d6ef`,``],[`app2ac8c07c4f0bbcf9c7c0b7c600935df87be28375`,``],[`app8b9c055c2655f468165c3ae86f01ee7bcb55bccf`,``],[`app6c308200ceddfb5dba186da13af9deeb4cae0f0b`,``],[1,`content`],[1,`content-inner`],[`id`,`transports`],[`appAnchor`,``,`id`,`the-http-endpoint`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`over-stdio`],[1,`language-json`],[`appAnchor`,``,`id`,`nestjs-observe`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://observe.nestjs.com`],[`appAnchor`,``,`id`,`production-checklist`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/mcp/transports.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(p,x){if(p&1&&(Aa(0,`div`,6,0)(2,`div`,7)(3,`h3`,8),bT(4,`Transports`),cf(),Aa(5,`p`),bT(6,`The server is served over two transports: Streamable HTTP, from the Nest application you already have, for assistants that connect over the network, and stdio, from a standalone application context, for an assistant that launches the server as a local process. Both serve the same tools, resources and prompts.`),cf(),Aa(7,`h4`,9)(8,`span`),bT(9,`The HTTP endpoint`),cf()(),Aa(10,`p`),bT(11,`The endpoint is a controller the module adds, at `),Aa(12,`code`),bT(13,`path`),cf(),bT(14,` (default `),Aa(15,`code`),bT(16,`'mcp'`),cf(),bT(17,`): the global prefix, versioning, middleware, CORS and HTTP guards apply to it as to any route, so with `),Aa(18,`code`),bT(19,`app.setGlobalPrefix('api')`),cf(),bT(20,` it's at `),Aa(21,`code`),bT(22,`/api/mcp`),cf(),bT(23,`, and `),Aa(24,`code`),bT(25),cf(),bT(26,` keeps it at `),Aa(27,`code`),bT(28,`/mcp`),cf(),bT(29,`. `),Aa(30,`code`),bT(31,`endpointVersion`),cf(),bT(32,` sets its version when versioning is on (`),Aa(33,`code`),bT(34,`VERSION_NEUTRAL`),cf(),bT(35,` keeps it at `),Aa(36,`code`),bT(37,`/mcp`),cf(),bT(38,` despite a `),Aa(39,`code`),bT(40,`defaultVersion`),cf(),bT(41,`), and `),Aa(42,`code`),bT(43,`decorators`),cf(),bT(44,` applies class decorators to it, such as `),Aa(45,`code`),bT(46,`[Public()]`),cf(),bT(47,` to exempt it from a global authentication guard, or `),Aa(48,`code`),bT(49,`[UseGuards(ApiKeyGuard)]`),cf(),bT(50,`.`),cf(),Aa(51,`p`),bT(52,`A server that only your own agents call, rather than users through an assistant, can do without OAuth. A guard on the endpoint's route checks an API key instead, which clients that connect to remote servers let you send as a request header:`),cf(),Aa(53,`app-copy-button`,10)(54,`span`,11),bT(55),LT(56,`extension`),Wa(57,`app-tabs`,null,1),cf(),Aa(59,`pre`)(60,`code`,12),bT(61,`
import {
  Injectable,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    return request.headers['x-api-key'] === process.env.MCP_API_KEY;
  }
}
`),cf()()(),Aa(62,`app-copy-button`,10)(63,`span`,11),bT(64),LT(65,`extension`),Wa(66,`app-tabs`,null,2),cf(),Aa(68,`pre`)(69,`code`,12),bT(70,`
McpModule.forRoot({
  name: 'cat-store',
  version: '1.0.0',
  decorators: [UseGuards(ApiKeyGuard)],
}),
`),cf()()(),Aa(71,`p`),bT(72,`A request without the key gets 403 before any MCP message is read.`),cf(),Aa(73,`p`),bT(74,`It serves every request statelessly: each request gets a server instance of its own, and nothing is kept between requests. Several instances of the application behind a load balancer need no session affinity and share nothing. Clients of the 2026-07-28 protocol revision and of the 2025 ones are served on the same endpoint; `),Aa(75,`code`),bT(76),cf(),bT(77,` makes it 2026-07-28 only.`),cf(),Aa(78,`p`),bT(79,`A 2026-07-28 request is answered with a JSON body, or with a stream of server-sent events when the method sends something before its result, such as progress notifications. `),Aa(80,`code`),bT(81),cf(),bT(82,` never streams, and drops progress notifications; `),Aa(83,`code`),bT(84,`'sse'`),cf(),bT(85,` always streams.`),cf(),Aa(86,`p`),bT(87,`A few settings matter in production:`),cf(),Aa(88,`ul`)(89,`li`)(90,`strong`),bT(91,`Pages from other sites.`),cf(),bT(92,` The endpoint checks the `),Aa(93,`code`),bT(94,`Origin`),cf(),bT(95,` header: a request from a web page on another site, made by a user's browser, gets 403. A request without an `),Aa(96,`code`),bT(97,`Origin`),cf(),bT(98,` header passes, so assistants, CLIs and hosted connectors, which aren't browsers and send none, are unaffected. By default, only pages on `),Aa(99,`code`),bT(100,`localhost`),cf(),bT(101,`, `),Aa(102,`code`),bT(103,`127.0.0.1`),cf(),bT(104,` and `),Aa(105,`code`),bT(106,`[::1]`),cf(),bT(107,` are let through. To serve a browser-based client, list its hostname, `),Aa(108,`code`),bT(109),cf(),bT(110,` (the list replaces the default), or turn the check off with `),Aa(111,`code`),bT(112,`allowedOrigins: false`),cf(),bT(113,`.`),cf(),Aa(114,`li`)(115,`strong`),bT(116,`DNS rebinding.`),cf(),bT(117,` A server bound to `),Aa(118,`code`),bT(119,`localhost`),cf(),bT(120,` can also be reached by a page whose own domain resolves to `),Aa(121,`code`),bT(122,`127.0.0.1`),cf(),bT(123,`: its requests name that domain as their `),Aa(124,`code`),bT(125,`Host`),cf(),bT(126,`. Name the hosts the server answers to, `),Aa(127,`code`),bT(128),cf(),bT(129,`, and requests with another `),Aa(130,`code`),bT(131,`Host`),cf(),bT(132,` header get 403. The `),Aa(133,`code`),bT(134,`Host`),cf(),bT(135,` header isn't checked unless you set `),Aa(136,`code`),bT(137,`allowedHosts`),cf(),bT(138,`.`),cf(),Aa(139,`li`)(140,`strong`),bT(141,`Body size.`),cf(),bT(142,` Tool arguments arrive in the request body, which your platform's body parser reads first: Express's default limit is 100 KB. Raise it with `),Aa(143,`code`),bT(144),cf(),bT(145,`.`),cf(),Aa(146,`li`)(147,`strong`),bT(148,`CORS.`),cf(),bT(149,` A browser-based client on another origin needs it listed in both places: in `),Aa(150,`code`),bT(151,`allowedOrigins`),cf(),bT(152,`, by hostname, and in your CORS configuration, which also allows the `),Aa(153,`code`),bT(154,`Authorization`),cf(),bT(155,`, `),Aa(156,`code`),bT(157,`Content-Type`),cf(),bT(158,`, `),Aa(159,`code`),bT(160,`Mcp-Protocol-Version`),cf(),bT(161,`, `),Aa(162,`code`),bT(163,`Mcp-Method`),cf(),bT(164,` and `),Aa(165,`code`),bT(166,`Mcp-Name`),cf(),bT(167,` request headers and exposes `),Aa(168,`code`),bT(169,`WWW-Authenticate`),cf(),bT(170,`: `),Aa(171,`code`),bT(172),cf(),bT(173,`.`),cf()(),Aa(174,`p`),bT(175,`For a support dashboard at `),Aa(176,`code`),bT(177,`https://support.catstore.example`),cf(),bT(178,` that calls the server from the browser, with larger tool arguments than Express allows by default:`),cf(),Aa(179,`app-copy-button`,10)(180,`span`,11),bT(181),LT(182,`extension`),Wa(183,`app-tabs`,null,3),cf(),Aa(185,`pre`)(186,`code`,12),bT(187,`
McpModule.forRoot({
  name: 'cat-store',
  version: '1.0.0',
  http: { allowedOrigins: ['support.catstore.example'] },
}),
`),cf()()(),Aa(188,`app-copy-button`,10)(189,`span`,11),bT(190),LT(191,`extension`),Wa(192,`app-tabs`,null,4),cf(),Aa(194,`pre`)(195,`code`,12),bT(196,`
const app = await NestFactory.create<NestExpressApplication>(AppModule);
app.useBodyParser('json', { limit: '4mb' });
app.enableCors({
  origin: ['https://support.catstore.example'],
  allowedHeaders: [
    'Authorization',
    'Content-Type',
    'Mcp-Protocol-Version',
    'Mcp-Method',
    'Mcp-Name',
  ],
  exposedHeaders: ['WWW-Authenticate'],
});
await app.listen(3000);
`),cf()()(),Aa(197,`h4`,13)(198,`span`),bT(199,`Over stdio`),cf()(),Aa(200,`p`),bT(201,`An assistant on the user's machine (Claude Desktop, Claude Code, an IDE) can launch the server as a local process, and talk to it over its stdin and stdout. Serve the same module from a standalone application context:`),cf(),Aa(202,`app-copy-button`,10)(203,`span`,11),bT(204),LT(205,`extension`),Wa(206,`app-tabs`,null,5),cf(),Aa(208,`pre`)(209,`code`,12),bT(210,`
import { NestFactory } from '@nestjs/core';
import { McpStdioLogger, McpStdioServer } from '@nestjs/mcp';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: new McpStdioLogger(),
  });
  await app.get(McpStdioServer).listen();
  await app.close();
}
bootstrap();
`),cf()()(),Aa(211,`p`),bT(212,`stdout carries the protocol, and Nest's default logger writes to it: `),Aa(213,`code`),bT(214,`McpStdioLogger`),cf(),bT(215,` writes every level to stderr, which clients show as the server's log. `),Aa(216,`code`),bT(217,`listen()`),cf(),bT(218,` resolves when the client closes stdin, and `),Aa(219,`code`),bT(220,`app.close()`),cf(),bT(221,` then lets the process exit. Over stdio, the spec takes credentials from the environment, not from OAuth, so `),Aa(222,`code`),bT(223,`scopes`),cf(),bT(224,` aren't checked there; guards still run. Set `),Aa(225,`code`),bT(226,`path: false`),cf(),bT(227,` in an application that serves stdio only.`),cf(),Aa(228,`p`),bT(229,`The client starts the process from a command. Desktop assistants and IDEs take it in a configuration like this one, here with an environment variable for the server:`),cf(),Aa(230,`pre`)(231,`code`,14),bT(232,`
{
  "mcpServers": {
    "cat-store": {
      "command": "node",
      "args": ["/path/to/cat-store/dist/stdio.js"],
      "env": { "CAT_STORE_API_KEY": "..." }
    }
  }
}
`),cf()(),Aa(233,`p`),bT(234,`The process belongs to one user, on their machine, for as long as the client runs it. There is no OAuth there: what the server needs, such as an API key, comes from the environment the client passes, and your providers read it from `),Aa(235,`code`),bT(236,`process.env`),cf(),bT(237,`. Clients of both protocol eras are served; `),Aa(238,`code`),bT(239),cf(),bT(240,` refuses a connection that opens with the 2025 handshake.`),cf(),Aa(241,`p`),bT(242,`One build can serve both transports: `),Aa(243,`code`),bT(244,`main.ts`),cf(),bT(245,` starts the HTTP application, and clients that launch the server run `),Aa(246,`code`),bT(247,`stdio.ts`),cf(),bT(248,`.`),cf(),Aa(249,`h4`,15)(250,`span`),bT(251,`NestJS Observe`),cf()(),Aa(252,`p`),bT(253,`With `),Aa(254,`a`,16),bT(255,`NestJS Observe`),cf(),bT(256,` (`),Aa(257,`code`),bT(258,`@nestjs/observe`),cf(),bT(259,`) in the application, every MCP call names its operation, `),Aa(260,`code`),bT(261,`tools/call find-order`),cf(),bT(262,` or `),Aa(263,`code`),bT(264),cf(),bT(265,`, instead of all of them being `),Aa(266,`code`),bT(267,`POST /mcp`),cf(),bT(268,`. There is nothing to configure.`),cf(),Aa(269,`h4`,17)(270,`span`),bT(271,`Production checklist`),cf()(),Aa(272,`ul`)(273,`li`)(274,`code`),bT(275,`auth`),cf(),bT(276,` configured on a server reachable from the network, with `),Aa(277,`code`),bT(278,`resource`),cf(),bT(279,` its public URL.`),cf(),Aa(280,`li`)(281,`code`),bT(282,`allowedHosts`),cf(),bT(283,` on a server bound to `),Aa(284,`code`),bT(285,`localhost`),cf(),bT(286,`.`),cf(),Aa(287,`li`),bT(288,`The browser-based clients that call the server, if any, in `),Aa(289,`code`),bT(290,`allowedOrigins`),cf(),bT(291,` and in your CORS origins: by default, only pages on localhost get through.`),cf(),Aa(292,`li`),bT(293,`The body parser's limit above your largest tool arguments.`),cf(),Aa(294,`li`),bT(295,`Tool descriptions and `),Aa(296,`code`),bT(297,`.describe()`),cf(),bT(298,` texts written for the model: they're all it knows about your tools.`),cf(),Aa(299,`li`)(300,`code`),bT(301,`annotations.readOnlyHint`),cf(),bT(302,` on the tools that change nothing, so clients don't ask the user before each call.`),cf(),Aa(303,`li`)(304,`code`),bT(305,`McpStdioLogger`),cf(),bT(306,` in the stdio entry point: anything else written to stdout breaks the protocol.`),cf()()(),Aa(307,`a`,18),Wa(308,`i`,19),Aa(309,`span`),bT(310,`Edit on GitHub`),cf()()()),p&2){let y=tT(58),w=tT(67),T=tT(184),k=tT(193),A=tT(207);zC(25),Ky(`app.setGlobalPrefix('api', `,`{`,` exclude: ['mcp'] `,`}`,`)`),zC(30),hf(` `,jT(56,23,`api-key.guard`,y.isJsActive),`
`),zC(9),hf(` `,jT(65,26,`app.module`,w.isJsActive),`
`),zC(12),Ky(`http: `,`{`,` legacy: 'reject' `,`}`),zC(5),Ky(`http: `,`{`,` responseMode: 'json' `,`}`),zC(28),Ky(`http: `,`{`,` allowedOrigins: ['support.catstore.example'] `,`}`),zC(19),Ky(`http: `,`{`,` allowedHosts: ['localhost', '127.0.0.1', '[::1]'] `,`}`),zC(16),Ky(`app.useBodyParser('json', `,`{`,` limit: '4mb' `,`}`,`)`),zC(28),Ky(`app.enableCors(`,`{`,` origin: ['https://support.catstore.example'], exposedHeaders: ['WWW-Authenticate'] `,`}`,`)`),zC(9),hf(` `,jT(182,29,`app.module`,T.isJsActive),`
`),zC(9),hf(` `,jT(191,32,`main`,k.isJsActive),`
`),zC(14),hf(` `,jT(205,35,`stdio`,A.isJsActive),`
`),zC(35),Ky(`stdio: `,`{`,` legacy: 'reject' `,`}`),zC(25),Ky(`resources/read orders://`,`{`,`orderId`,`}`)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return l})();var H=(()=>{class l extends xt{static ɵfac=(()=>{let m;return function(x){return(m||(m=im(l)))(x||l)}})();static ɵcmp=ef({type:l,selectors:[[`app-mcp-testing`]],features:[xy],decls:225,vars:42,consts:[[`contentReference`,``],[`app7b24b21a2fa150b4ec883a6fe22b29e7998a35f7`,``],[`app53e8467e6455ae0f44d2dd749d5a1ffd5b61901b`,``],[`app735f4ee99d246d99b49301c2ab8b2351be7cf996`,``],[`appad851fb42a4b2c2658bdd9cb1070f711d3194145`,``],[`app5a7beaa1c493d5511185c4f67f596df5e3f4d2af`,``],[`appd412d4e189910c0c29baff90d58bc42852e45596`,``],[`app59b144a80ab18f8fa260a813e1fec709ecefe012`,``],[`app398ae759ba2e47d0bba783238a01ee64658cbb10`,``],[`app5d575f4e4146555fff7b03009862aaa1301e89fc`,``],[`app90617bbde95afe7bb915894e81c764a00de8ac18`,``],[1,`content`],[1,`content-inner`],[`id`,`testing`],[`appAnchor`,``,`id`,`unit-tests`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`the-in-memory-client`],[1,`language-bash`],[`appAnchor`,``,`id`,`results-and-errors`],[`appAnchor`,``,`id`,`tokens-and-scopes`],[`appAnchor`,``,`id`,`headers-and-protocol-revisions`],[1,`info`],[`appAnchor`,``,`id`,`every-primitive-at-once`],[`appAnchor`,``,`id`,`over-http`],[`appAnchor`,``,`id`,`the-stdio-entry-point`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/mcp/testing.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(p,x){if(p&1&&(Aa(0,`div`,11,0)(2,`div`,12)(3,`h3`,13),bT(4,`Testing`),cf(),Aa(5,`p`),bT(6,`Tools, resources and prompts are methods of providers, so their logic is tested like any provider's: call the method. What MCP adds around it, the schemas, guards, scopes and the shape of the results, is tested through a real MCP client, which `),Aa(7,`code`),bT(8,`@nestjs/mcp/testing`),cf(),bT(9,` connects to the application in memory.`),cf(),Aa(10,`h4`,14)(11,`span`),bT(12,`Unit tests`),cf()(),Aa(13,`p`),bT(14,`A unit test calls the method with the arguments and the context it needs:`),cf(),Aa(15,`app-copy-button`,15)(16,`span`,16),bT(17),LT(18,`extension`),Wa(19,`app-tabs`,null,1),cf(),Aa(21,`pre`)(22,`code`,17),bT(23,`
import type { McpContext } from '@nestjs/mcp';
import { OrdersService } from './orders.service';
import { OrdersTools } from './orders.tools';

describe('OrdersTools', () => {
  it('changes the delivery address', async () => {
    const orders = {
      changeAddress: vi
        .fn()
        .mockResolvedValue({
          id: 'ord_123',
          address: '12 Whisker Lane, Leeds',
          status: 'pending',
        }),
    };
    const tools = new OrdersTools(orders as unknown as OrdersService);
    const ctx = { authInfo: { clientId: 'support-desk' } } as McpContext;

    const result = await tools.changeAddress(
      { orderId: 'ord_123', address: '12 Whisker Lane, Leeds' },
      ctx,
    );

    expect(result).toEqual({
      orderId: 'ord_123',
      address: '12 Whisker Lane, Leeds',
      status: 'pending',
    });
    expect(orders.changeAddress).toHaveBeenCalledWith(
      'ord_123',
      '12 Whisker Lane, Leeds',
      'support-desk',
    );
  });
});
`),cf()()(),Aa(24,`p`),bT(25,`A direct call skips everything the module adds: the arguments aren't validated, guards and interceptors don't run, and the return value isn't turned into an MCP result. The client tests those.`),cf(),Aa(26,`h4`,18)(27,`span`),bT(28,`The in-memory client`),cf()(),Aa(29,`p`)(30,`code`),bT(31,`connectMcpClient()`),cf(),bT(32,` connects a client of the official MCP SDK to the application, through the same handler as the HTTP endpoint: the token check, the schemas, and every guard, interceptor, pipe and filter. It starts no HTTP server. The client comes from `),Aa(33,`code`),bT(34,`@modelcontextprotocol/client`),cf(),bT(35,`, a dev dependency:`),cf(),Aa(36,`pre`)(37,`code`,19),bT(38,`
$ npm i --save-dev @modelcontextprotocol/client
`),cf()(),Aa(39,`p`),bT(40,`The order API requires a token, so the tests replace its verifier with one that knows a few test tokens:`),cf(),Aa(41,`app-copy-button`,15)(42,`span`,16),bT(43),LT(44,`extension`),Wa(45,`app-tabs`,null,2),cf(),Aa(47,`pre`)(48,`code`,17),bT(49,`
import type { McpTokenVerifier } from '@nestjs/mcp';
import type { AuthInfo } from '@modelcontextprotocol/server';

const TOKENS: Record<
  string,
  { clientId: string; scopes: string[]; team?: string }
> = {
  'support-token': {
    clientId: 'support-desk',
    scopes: ['orders:read', 'orders:write'],
    team: 'support',
  },
  'warehouse-token': {
    clientId: 'warehouse',
    scopes: ['orders:read', 'orders:write'],
    team: 'warehouse',
  },
  'reader-token': { clientId: 'reporting', scopes: ['orders:read'] },
};

export class TestTokenVerifier implements McpTokenVerifier {
  async verifyAccessToken(token: string): Promise<AuthInfo | null> {
    const found = TOKENS[token];
    if (!found) {
      return null;
    }
    return {
      token,
      clientId: found.clientId,
      scopes: found.scopes,
      expiresAt: Math.floor(Date.now() / 1000) + 3600,
      resource: new URL('https://api.catstore.example/mcp'),
      extra: { team: found.team },
    };
  }
}
`),cf()()(),Aa(50,`p`),bT(51,`Like a real token, a test token needs an `),Aa(52,`code`),bT(53,`expiresAt`),cf(),bT(54,` in the future and the server's `),Aa(55,`code`),bT(56,`resource`),cf(),bT(57,`. The tests override the verifier class, and connect with a token:`),cf(),Aa(58,`app-copy-button`,15)(59,`span`,16),bT(60),LT(61,`extension`),Wa(62,`app-tabs`,null,3),cf(),Aa(64,`pre`)(65,`code`,17),bT(66,`
import { Test, type TestingModule } from '@nestjs/testing';
import type { Client } from '@modelcontextprotocol/client';
import { connectMcpClient } from '@nestjs/mcp/testing';
import { AppModule } from '../src/app.module';
import { IdentityProviderTokenVerifier } from '../src/auth/identity-provider-token.verifier';
import { TestTokenVerifier } from './test-token.verifier';

describe('cat-store MCP server', () => {
  let moduleRef: TestingModule;
  let client: Client;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(IdentityProviderTokenVerifier)
      .useClass(TestTokenVerifier)
      .compile();
    client = await connectMcpClient(moduleRef, { token: 'support-token' });
  });

  afterAll(async () => {
    await client.close();
    await moduleRef.close();
  });

  it('lists the tools', async () => {
    const { tools } = await client.listTools();
    expect(tools.map((tool) => tool.name)).toEqual(
      expect.arrayContaining(['find-order', 'change-address']),
    );
  });

  it('finds an order', async () => {
    const result = await client.callTool({
      name: 'find-order',
      arguments: { orderId: 'ord_123' },
    });
    expect(result.isError).toBeFalsy();
    expect(result.content).toEqual([
      { type: 'text', text: expect.stringContaining('ord_123') },
    ]);
  });
});
`),cf()()(),Aa(67,`p`),bT(68,`The client is the SDK's own `),Aa(69,`code`),bT(70,`Client`),cf(),bT(71,`: `),Aa(72,`code`),bT(73,`listTools()`),cf(),bT(74,`, `),Aa(75,`code`),bT(76,`callTool()`),cf(),bT(77,`, `),Aa(78,`code`),bT(79,`readResource()`),cf(),bT(80,`, `),Aa(81,`code`),bT(82,`getPrompt()`),cf(),bT(83,` and the rest are what an assistant calls.`),cf(),Aa(84,`h4`,20)(85,`span`),bT(86,`Results and errors`),cf()(),Aa(87,`p`),bT(88,`What goes wrong in a tool is a result the model reads, not an exception in the test. `),Aa(89,`code`),bT(90,`isError`),cf(),bT(91,` and the text say what the model was told:`),cf(),Aa(92,`app-copy-button`,15)(93,`span`,16),bT(94),LT(95,`extension`),Wa(96,`app-tabs`,null,4),cf(),Aa(98,`pre`)(99,`code`,17),bT(100,`
it('tells the model about arguments the schema refuses', async () => {
  const result = await client.callTool({
    name: 'change-address',
    arguments: { orderId: 'ord_123', address: 'Leeds' },
  });
  expect(result.isError).toBe(true);
  expect(result.content).toEqual([
    { type: 'text', text: expect.stringContaining('Input validation error') },
  ]);
});

it('returns structured content, as the output schema describes it', async () => {
  const result = await client.callTool({
    name: 'change-address',
    arguments: { orderId: 'ord_123', address: '12 Whisker Lane, Leeds' },
  });
  expect(result.structuredContent).toEqual({
    orderId: 'ord_123',
    address: '12 Whisker Lane, Leeds',
    status: 'pending',
  });
});

it('answers a guard refusal with a tool error', async () => {
  const warehouse = await connectMcpClient(moduleRef, {
    token: 'warehouse-token',
  });
  try {
    const result = await warehouse.callTool({
      name: 'change-address',
      arguments: { orderId: 'ord_123', address: '12 Whisker Lane, Leeds' },
    });
    expect(result).toMatchObject({
      isError: true,
      content: [{ type: 'text', text: 'Forbidden resource' }],
    });
  } finally {
    await warehouse.close();
  }
});
`),cf()()(),Aa(101,`p`),bT(102,`Resources and prompts answer with JSON-RPC errors instead, which the client throws:`),cf(),Aa(103,`app-copy-button`,15)(104,`span`,16),bT(105),LT(106,`extension`),Wa(107,`app-tabs`,null,5),cf(),Aa(109,`pre`)(110,`code`,17),bT(111,`
it('reads an order', async () => {
  const { contents } = await client.readResource({ uri: 'orders://ord_123' });
  expect(JSON.parse((contents[0] as { text: string }).text)).toMatchObject({
    id: 'ord_123',
  });
});

it('knows no order that does not exist', async () => {
  await expect(
    client.readResource({ uri: 'orders://ord_404' }),
  ).rejects.toThrow();
});

it('drafts a reply', async () => {
  const { messages } = await client.getPrompt({
    name: 'draft-reply',
    arguments: { orderId: 'ord_123', tone: 'friendly' },
  });
  expect(messages[0].content).toMatchObject({
    type: 'text',
    text: expect.stringContaining('friendly'),
  });
});
`),cf()()(),Aa(112,`h4`,21)(113,`span`),bT(114,`Tokens and scopes`),cf()(),Aa(115,`p`),bT(116,`Connect a client for each token a test needs. A call without the scopes its tool declares fails before the method runs, with the error that tells a real client to ask the user for more access. A client without a token can't connect at all:`),cf(),Aa(117,`app-copy-button`,15)(118,`span`,16),bT(119),LT(120,`extension`),Wa(121,`app-tabs`,null,6),cf(),Aa(123,`pre`)(124,`code`,17),bT(125,`
import {
  InsufficientScopeError,
  SdkHttpError,
} from '@modelcontextprotocol/client';

it('asks for orders:write to change an address', async () => {
  const reader = await connectMcpClient(moduleRef, { token: 'reader-token' });
  try {
    const error = await reader
      .callTool({
        name: 'change-address',
        arguments: { orderId: 'ord_123', address: '12 Whisker Lane, Leeds' },
      })
      .catch((e: unknown) => e);
    expect(error).toBeInstanceOf(InsufficientScopeError);
    expect(error).toMatchObject({ requiredScope: 'orders:write' });
  } finally {
    await reader.close();
  }
});

it('refuses a client without a token', async () => {
  await expect(connectMcpClient(moduleRef)).rejects.toBeInstanceOf(
    SdkHttpError,
  );
});
`),cf()()(),Aa(126,`h4`,22)(127,`span`),bT(128,`Headers and protocol revisions`),cf()(),Aa(129,`p`)(130,`code`),bT(131,`headers`),cf(),bT(132,` sends request headers with every request, which guards read from `),Aa(133,`code`),bT(134,`ctx.request.headers`),cf(),bT(135,`, in lowercase. `),Aa(136,`code`),bT(137,`era: 'legacy'`),cf(),bT(138,` connects as a client of the 2025 protocol revisions, to check that the server works for both:`),cf(),Aa(139,`app-copy-button`,15)(140,`span`,16),bT(141),LT(142,`extension`),Wa(143,`app-tabs`,null,7),cf(),Aa(145,`pre`)(146,`code`,17),bT(147,`
it('serves clients of the 2025 revisions', async () => {
  const legacy = await connectMcpClient(moduleRef, {
    token: 'support-token',
    era: 'legacy',
  });
  try {
    expect(legacy.getProtocolEra()).toBe('legacy');
    expect(
      (
        await legacy.callTool({
          name: 'find-order',
          arguments: { orderId: 'ord_123' },
        })
      ).isError,
    ).toBeFalsy();
  } finally {
    await legacy.close();
  }
});
`),cf()()(),Aa(148,`blockquote`,23)(149,`strong`),bT(150,`Hint`),cf(),bT(151,` The in-memory client starts where the endpoint's route ends: middleware, and guards given in the module's `),Aa(152,`code`),bT(153,`decorators`),cf(),bT(154,`, don't run, and `),Aa(155,`code`),bT(156,`ctx.request`),cf(),bT(157,` is a plain `),Aa(158,`code`),bT(159),cf(),bT(160,` object. Test what happens on the route over HTTP.
`),cf(),Aa(161,`h4`,24)(162,`span`),bT(163,`Every primitive at once`),cf()(),Aa(164,`p`)(165,`code`),bT(166,`McpRegistry`),cf(),bT(167,` holds what the module found at startup. A test can hold every tool to rules of your own, such as a description the model can work with:`),cf(),Aa(168,`app-copy-button`,15)(169,`span`,16),bT(170),LT(171,`extension`),Wa(172,`app-tabs`,null,8),cf(),Aa(174,`pre`)(175,`code`,17),bT(176,`
import { McpRegistry } from '@nestjs/mcp';

it('describes every tool for the model', () => {
  for (const tool of moduleRef.get(McpRegistry).tools) {
    expect(
      tool.options.description?.length,
      \`\${tool.name} needs a description\`,
    ).toBeGreaterThan(20);
  }
});
`),cf()()(),Aa(177,`p`),bT(178,`The registry is filled when the application initializes, which `),Aa(179,`code`),bT(180,`connectMcpClient()`),cf(),bT(181,` does; without it, call `),Aa(182,`code`),bT(183,`moduleRef.init()`),cf(),bT(184,` first.`),cf(),Aa(185,`h4`,25)(186,`span`),bT(187,`Over HTTP`),cf()(),Aa(188,`p`),bT(189,`The route itself, the global prefix, middleware, CORS and the `),Aa(190,`code`),bT(191,`Origin`),cf(),bT(192,` check, is tested over a socket. Start the application on a free port, and send requests to it:`),cf(),Aa(193,`app-copy-button`,15)(194,`span`,16),bT(195),LT(196,`extension`),Wa(197,`app-tabs`,null,9),cf(),Aa(199,`pre`)(200,`code`,17),bT(201,`
import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('MCP endpoint', () => {
  let app: INestApplication;
  let url: URL;

  const listTools = (headers: Record<string, string> = {}) =>
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json, text/event-stream',
        ...headers,
      },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list' }),
    });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.listen(0);
    url = new URL('/mcp', await app.getUrl());
  });

  afterAll(() => app.close());

  it('points a client without a token at the metadata', async () => {
    const response = await listTools();
    expect(response.status).toBe(401);
    expect(response.headers.get('www-authenticate')).toContain(
      'resource_metadata=',
    );
  });

  it('refuses a page from another site', async () => {
    const response = await listTools({ origin: 'https://elsewhere.example' });
    expect(response.status).toBe(403);
  });
});
`),cf()()(),Aa(202,`h4`,26)(203,`span`),bT(204,`The stdio entry point`),cf()(),Aa(205,`p`),bT(206,`To test `),Aa(207,`code`),bT(208,`stdio.ts`),cf(),bT(209,` the way a client launches it, build the application, and start it with the SDK's stdio transport:`),cf(),Aa(210,`app-copy-button`,15)(211,`span`,16),bT(212),LT(213,`extension`),Wa(214,`app-tabs`,null,10),cf(),Aa(216,`pre`)(217,`code`,17),bT(218,`
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';

it('serves the tools over stdio', async () => {
  const client = new Client({ name: 'stdio-e2e', version: '1.0.0' });
  await client.connect(
    new StdioClientTransport({
      command: process.execPath,
      args: ['dist/stdio.js'],
    }),
  );
  try {
    const { tools } = await client.listTools();
    expect(tools.map((tool) => tool.name)).toContain('find-order');
  } finally {
    await client.close();
  }
});
`),cf()()(),Aa(219,`p`),bT(220,`Closing the client closes the process's stdin, and the application shuts down, as it does when the assistant quits.`),cf()(),Aa(221,`a`,27),Wa(222,`i`,28),Aa(223,`span`),bT(224,`Edit on GitHub`),cf()()()),p&2){let y=tT(20),w=tT(46),T=tT(63),k=tT(97),A=tT(108),I=tT(122),M=tT(144),P=tT(173),R=tT(198),j=tT(215);zC(17),hf(` `,jT(18,12,`orders/orders.tools.spec`,y.isJsActive),`
`),zC(26),hf(` `,jT(44,15,`test/test-token.verifier`,w.isJsActive),`
`),zC(17),hf(` `,jT(61,18,`test/orders.e2e-spec`,T.isJsActive),`
`),zC(34),hf(` `,jT(95,21,`test/orders.e2e-spec`,k.isJsActive),`
`),zC(11),hf(` `,jT(106,24,`test/orders.e2e-spec`,A.isJsActive),`
`),zC(14),hf(` `,jT(120,27,`test/orders.e2e-spec`,I.isJsActive),`
`),zC(22),hf(` `,jT(142,30,`test/orders.e2e-spec`,M.isJsActive),`
`),zC(18),Ky(``,`{`,` method, url, headers `,`}`),zC(11),hf(` `,jT(171,33,`test/orders.e2e-spec`,P.isJsActive),`
`),zC(25),hf(` `,jT(196,36,`test/mcp-endpoint.e2e-spec`,R.isJsActive),`
`),zC(17),hf(` `,jT(213,39,`test/stdio.e2e-spec`,j.isJsActive),`
`)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return l})();var N=(()=>{class l extends xt{static ɵfac=(()=>{let m;return function(x){return(m||(m=im(l)))(x||l)}})();static ɵcmp=ef({type:l,selectors:[[`app-mcp-migration`]],features:[xy],decls:491,vars:28,consts:[[`contentReference`,``],[`appd9d5f601a8f04aede506591d024485e2943ad620`,``],[`apped54a5f1abbb48e9f8d0ff91d7b91bf57dad072e`,``],[`app21b8f475a346dc0c2c0f19b06cf2d0ec586054a3`,``],[`app186a68f9221dc6cf666f2e28c826722d40fedf5d`,``],[1,`content`],[1,`content-inner`],[`id`,`migration`],[`appAnchor`,``,`id`,`packages`],[1,`language-bash`],[`appAnchor`,``,`id`,`the-module`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/mcp/transports#over-stdio`],[`appAnchor`,``,`id`,`tools-resources-and-prompts`],[`href`,`/mcp/primitives#the-call-context`],[`appAnchor`,``,`id`,`guards-and-errors`],[`appAnchor`,``,`id`,`authorization`],[`href`,`/mcp/primitives#authorization`],[`appAnchor`,``,`id`,`whats-not-there`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/mcp/migration.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(p,x){if(p&1&&(Aa(0,`div`,5,0)(2,`div`,6)(3,`h3`,7),bT(4,`Migration`),cf(),Aa(5,`p`),bT(6,`An MCP server built with the community package `),Aa(7,`code`),bT(8,`@rekog/mcp-nest`),cf(),bT(9,` moves to `),Aa(10,`code`),bT(11,`@nestjs/mcp`),cf(),bT(12,` with mostly mechanical changes: the decorators keep their names, and tools, resources and prompts stay methods of your classes. This page maps both of its APIs, the `),Aa(13,`code`),bT(14,`McpModule.forRoot()`),cf(),bT(15,` one of its 1.x releases and the `),Aa(16,`code`),bT(17,`McpStrategy`),cf(),bT(18,` one of 2.x, to `),Aa(19,`code`),bT(20,`@nestjs/mcp`),cf(),bT(21,`.`),cf(),Aa(22,`h4`,8)(23,`span`),bT(24,`Packages`),cf()(),Aa(25,`p`)(26,`code`),bT(27,`@nestjs/mcp`),cf(),bT(28,` is built on version 2 of the MCP TypeScript SDK, `),Aa(29,`code`),bT(30,`@modelcontextprotocol/server`),cf(),bT(31,`. Replace the packages:`),cf(),Aa(32,`pre`)(33,`code`,9),bT(34,`
$ npm uninstall @rekog/mcp-nest @modelcontextprotocol/sdk
$ npm i --save @nestjs/mcp @modelcontextprotocol/server zod
`),cf()(),Aa(35,`p`),bT(36,`From 2.x, also uninstall `),Aa(37,`code`),bT(38,`@modelcontextprotocol/core`),cf(),bT(39,` and `),Aa(40,`code`),bT(41,`@modelcontextprotocol/node`),cf(),bT(42,`, `),Aa(43,`code`),bT(44,`@rekog/mcp-nest-auth`),cf(),bT(45,` if you used its authorization server, and `),Aa(46,`code`),bT(47,`@nestjs/microservices`),cf(),bT(48,` if nothing else in the application uses it. Types you imported from `),Aa(49,`code`),bT(50,`@modelcontextprotocol/sdk`),cf(),bT(51,`, such as `),Aa(52,`code`),bT(53,`CallToolResult`),cf(),bT(54,`, come from `),Aa(55,`code`),bT(56,`@modelcontextprotocol/server`),cf(),bT(57,`.`),cf(),Aa(58,`h4`,10)(59,`span`),bT(60,`The module`),cf()(),Aa(61,`p`),bT(62,`From 1.x, `),Aa(63,`code`),bT(64,`McpModule.forRoot()`),cf(),bT(65,` stays, with fewer options:`),cf(),Aa(66,`app-copy-button`,11)(67,`span`,12),bT(68),LT(69,`extension`),Wa(70,`app-tabs`,null,1),cf(),Aa(72,`pre`)(73,`code`,13),bT(74,`
// Before, with @rekog/mcp-nest 1.x
McpModule.forRoot({
  name: 'cat-store',
  version: '1.0.0',
  transport: [McpTransportType.STREAMABLE_HTTP],
  mcpEndpoint: 'mcp-operations',
  guards: [ApiKeyGuard],
}),

// After
McpModule.forRoot({
  name: 'cat-store',
  version: '1.0.0',
  path: 'mcp-operations',
  decorators: [UseGuards(ApiKeyGuard)],
}),
`),cf()()(),Aa(75,`table`)(76,`thead`)(77,`tr`)(78,`th`)(79,`code`),bT(80,`@rekog/mcp-nest`),cf(),bT(81,` 1.x`),cf(),Aa(82,`th`)(83,`code`),bT(84,`@nestjs/mcp`),cf()()()(),Aa(85,`tbody`)(86,`tr`)(87,`td`)(88,`code`),bT(89,`name`),cf(),bT(90,`, `),Aa(91,`code`),bT(92,`version`),cf()(),Aa(93,`td`),bT(94,`The same`),cf()(),Aa(95,`tr`)(96,`td`)(97,`code`),bT(98,`transport`),cf()(),Aa(99,`td`),bT(100,`Streamable HTTP is served unless `),Aa(101,`code`),bT(102,`path: false`),cf(),bT(103,`; stdio is served by `),Aa(104,`code`),bT(105,`McpStdioServer`),cf(),bT(106,` (see `),Aa(107,`a`,14),bT(108,`Transports`),cf(),bT(109,`)`),cf()(),Aa(110,`tr`)(111,`td`)(112,`code`),bT(113,`mcpEndpoint`),cf(),bT(114,`, `),Aa(115,`code`),bT(116,`apiPrefix`),cf()(),Aa(117,`td`)(118,`code`),bT(119,`path`),cf(),bT(120,`, under the application's global prefix`),cf()(),Aa(121,`tr`)(122,`td`)(123,`code`),bT(124,`guards`),cf()(),Aa(125,`td`)(126,`code`),bT(127,`decorators: [UseGuards(...)]`),cf()()(),Aa(128,`tr`)(129,`td`)(130,`code`),bT(131,`streamableHttp`),cf()(),Aa(132,`td`),bT(133,`Nothing to set: every request is served on its own, and `),Aa(134,`code`),bT(135,`http.responseMode`),cf(),bT(136,` shapes the answers to 2026-07-28 requests`),cf()(),Aa(137,`tr`)(138,`td`)(139,`code`),bT(140,`forRootAsync()`),cf()(),Aa(141,`td`)(142,`code`),bT(143,`forRootAsync()`),cf(),bT(144,`, with `),Aa(145,`code`),bT(146,`path`),cf(),bT(147,`, `),Aa(148,`code`),bT(149,`decorators`),cf(),bT(150,` and `),Aa(151,`code`),bT(152,`imports`),cf(),bT(153,` at its top level`),cf()(),Aa(154,`tr`)(155,`td`)(156,`code`),bT(157,`forFeature()`),cf()(),Aa(158,`td`),bT(159,`One MCP server per application`),cf()()()(),Aa(160,`p`),bT(161,`From 2.x, the strategy and its bootstrap code go away. `),Aa(162,`code`),bT(163,`McpModule.forRoot()`),cf(),bT(164,` takes the strategy's `),Aa(165,`code`),bT(166,`name`),cf(),bT(167,` and `),Aa(168,`code`),bT(169,`version`),cf(),bT(170,`, and the endpoint is a route of the application, served by `),Aa(171,`code`),bT(172,`app.listen()`),cf(),bT(173,`:`),cf(),Aa(174,`app-copy-button`,11)(175,`span`,12),bT(176),LT(177,`extension`),Wa(178,`app-tabs`,null,2),cf(),Aa(180,`pre`)(181,`code`,13),bT(182,`
// Before, with @rekog/mcp-nest 2.x
const app = await NestFactory.create(AppModule);
mcp.setHttpAdapter(app.getHttpAdapter());
app.connectMicroservice({ strategy: mcp });
await app.startAllMicroservices();
await app.listen(3000);

// After
const app = await NestFactory.create(AppModule);
await app.listen(3000);
`),cf()()(),Aa(183,`p`)(184,`code`),bT(185,`@McpController()`),cf(),bT(186,` classes become ordinary `),Aa(187,`code`),bT(188,`@Injectable()`),cf(),bT(189,` providers, listed in a module's `),Aa(190,`code`),bT(191,`providers`),cf(),bT(192,` instead of its `),Aa(193,`code`),bT(194,`controllers`),cf(),bT(195,`, and the `),Aa(196,`code`),bT(197,`MCP_STRATEGY`),cf(),bT(198,` provider goes. A stdio server that `),Aa(199,`code`),bT(200,`NestFactory.createMicroservice()`),cf(),bT(201,` started is served from an application context with `),Aa(202,`code`),bT(203,`McpStdioServer`),cf(),bT(204,` instead, as `),Aa(205,`a`,14),bT(206,`Transports`),cf(),bT(207,` shows.`),cf(),Aa(208,`h4`,15)(209,`span`),bT(210,`Tools, resources and prompts`),cf()(),Aa(211,`p`),bT(212,`The decorators keep their names and most of their options. The method's arguments change:`),cf(),Aa(213,`app-copy-button`,11)(214,`span`,12),bT(215),LT(216,`extension`),Wa(217,`app-tabs`,null,3),cf(),Aa(219,`pre`)(220,`code`,13),bT(221,`
// Before, with @rekog/mcp-nest 1.x
@Tool({
  name: 'greeting-tool',
  description: 'Returns a greeting with progress updates',
  parameters: z.object({ name: z.string().default('World') }),
})
async sayHello({ name }, context: Context, request: Request) {
  await context.reportProgress({ progress: 50, total: 100 });
  return \`Hello, \${name}, from \${request.headers['user-agent']}!\`;
}

// After
@Tool({
  name: 'greeting-tool',
  description: 'Returns a greeting with progress updates',
  inputSchema: z.object({ name: z.string().default('World') }),
})
async sayHello({ name }: { name: string }, ctx: McpContext<Request>) {
  await ctx.reportProgress(50, 100);
  return \`Hello, \${name}, from \${ctx.request?.headers['user-agent']}!\`;
}
`),cf()()(),Aa(222,`table`)(223,`thead`)(224,`tr`)(225,`th`)(226,`code`),bT(227,`@rekog/mcp-nest`),cf()(),Aa(228,`th`)(229,`code`),bT(230,`@nestjs/mcp`),cf()()()(),Aa(231,`tbody`)(232,`tr`)(233,`td`)(234,`code`),bT(235,`parameters`),cf()(),Aa(236,`td`)(237,`code`),bT(238,`inputSchema`),cf(),bT(239,` on a tool, `),Aa(240,`code`),bT(241,`argsSchema`),cf(),bT(242,` on a prompt`),cf()(),Aa(243,`tr`)(244,`td`)(245,`code`),bT(246,`outputSchema`),cf(),bT(247,`, `),Aa(248,`code`),bT(249,`annotations`),cf()(),Aa(250,`td`),bT(251,`The same`),cf()(),Aa(252,`tr`)(253,`td`)(254,`code`),bT(255,`(args, context, request)`),cf(),bT(256,` in 1.x, `),Aa(257,`code`),bT(258,`@Payload()`),cf(),bT(259,` and `),Aa(260,`code`),bT(261,`@Ctx()`),cf(),bT(262,` in 2.x`),cf(),Aa(263,`td`)(264,`code`),bT(265,`(input, ctx)`),cf(),bT(266,`: the request is `),Aa(267,`code`),bT(268,`ctx.request`),cf(),bT(269,`, the verified token `),Aa(270,`code`),bT(271,`ctx.authInfo`),cf()()(),Aa(272,`tr`)(273,`td`)(274,`code`),bT(275),cf()(),Aa(276,`td`)(277,`code`),bT(278,`ctx.reportProgress(progress, total)`),cf()()(),Aa(279,`tr`)(280,`td`)(281,`code`),bT(282,`context.mcpServer.server.elicitInput()`),cf()(),Aa(283,`td`),bT(284,`Return `),Aa(285,`code`),bT(286,`inputRequired()`),cf(),bT(287,`: see `),Aa(288,`a`,16),bT(289,`asking the user`),cf()()(),Aa(290,`tr`)(291,`td`),bT(292,`A resource's `),Aa(293,`code`),bT(294),cf()(),Aa(295,`td`)(296,`code`),bT(297,`ctx.uri`),cf(),bT(298,`. A resource template's method receives its variables as the input`),cf()(),Aa(299,`tr`)(300,`td`)(301,`code`),bT(302),cf(),bT(303,`, `),Aa(304,`code`),bT(305),cf(),bT(306,` and `),Aa(307,`code`),bT(308),cf(),bT(309,` results`),cf(),Aa(310,`td`),bT(311,`Returned as they are, or return the value itself and let the module build the result`),cf()(),Aa(312,`tr`)(313,`td`)(314,`code`),bT(315),cf()(),Aa(316,`td`),bT(317,`A singleton provider: read what belongs to the call from `),Aa(318,`code`),bT(319,`ctx`),cf()()(),Aa(320,`tr`)(321,`td`)(322,`code`),bT(323,`McpRegistryService.registerTool()`),cf(),bT(324,`, `),Aa(325,`code`),bT(326,`strategy.registerTool()`),cf()(),Aa(327,`td`),bT(328,`Not supported: declare tools with decorators`),cf()()()(),Aa(329,`p`),bT(330,`A resource template, for example:`),cf(),Aa(331,`app-copy-button`,11)(332,`span`,12),bT(333),LT(334,`extension`),Wa(335,`app-tabs`,null,4),cf(),Aa(337,`pre`)(338,`code`,13),bT(339,`
// Before, with @rekog/mcp-nest 1.x
@ResourceTemplate({
  name: 'user-language',
  description: "Get a specific user's preferred language",
  mimeType: 'application/json',
  uriTemplate: 'mcp://users/{name}',
})
getUserLanguage({ uri, name }) {
  return {
    contents: [
      {
        uri,
        mimeType: 'application/json',
        text: JSON.stringify({ name, language: this.languages.of(name) }),
      },
    ],
  };
}

// After
@ResourceTemplate({
  name: 'user-language',
  description: "Get a specific user's preferred language",
  mimeType: 'application/json',
  uriTemplate: 'mcp://users/{name}',
})
getUserLanguage({ name }: { name: string }) {
  return { name, language: this.languages.of(name) };
}
`),cf()()(),Aa(340,`p`),bT(341,`A request-scoped provider fails at startup with `),Aa(342,`code`),bT(343,`@nestjs/mcp`),cf(),bT(344,`: every request is served by the same singleton instances, and what differs between calls, the request, the token and the client, is in `),Aa(345,`code`),bT(346,`ctx`),cf(),bT(347,`.`),cf(),Aa(348,`h4`,17)(349,`span`),bT(350,`Guards and errors`),cf()(),Aa(351,`p`),bT(352,`Guards, interceptors, pipes and filters keep working, with `),Aa(353,`code`),bT(354,`McpExecutionContext.create(context)`),cf(),bT(355,` in place of `),Aa(356,`code`),bT(357,`context.switchToRpc().getContext<McpContext>()`),cf(),bT(358,`. The context's type is `),Aa(359,`code`),bT(360,`'mcp'`),cf(),bT(361,`, not `),Aa(362,`code`),bT(363,`'rpc'`),cf(),bT(364,`.`),cf(),Aa(365,`p`),bT(366,`A tool's errors still reach the model as tool results. An `),Aa(367,`code`),bT(368,`HttpException`),cf(),bT(369,` carries its message to the client, where 2.x needed an `),Aa(370,`code`),bT(371,`RpcException`),cf(),bT(372,`; any other error is answered with `),Aa(373,`code`),bT(374,`Internal server error`),cf(),bT(375,`.`),cf(),Aa(376,`app-copy-button`)(377,`pre`)(378,`code`,13),bT(379,`
// Before, with @rekog/mcp-nest 2.x
throw new RpcException('The address has no postcode');

// After
throw new BadRequestException('The address has no postcode');
`),cf()()(),Aa(380,`h4`,18)(381,`span`),bT(382,`Authorization`),cf()(),Aa(383,`p`)(384,`code`),bT(385,`@nestjs/mcp`),cf(),bT(386,` is a resource server, as the MCP spec asks of a server: the tokens come from an identity provider, and the module verifies them (see `),Aa(387,`a`,19),bT(388,`Authorization`),cf(),bT(389,`).`),cf(),Aa(390,`table`)(391,`thead`)(392,`tr`)(393,`th`)(394,`code`),bT(395,`@rekog/mcp-nest`),cf()(),Aa(396,`th`)(397,`code`),bT(398,`@nestjs/mcp`),cf()()()(),Aa(399,`tbody`)(400,`tr`)(401,`td`)(402,`code`),bT(403,`McpAuthModule`),cf(),bT(404,`, the built-in authorization server`),cf(),Aa(405,`td`),bT(406,`An identity provider (Auth0, Keycloak, Entra ID, WorkOS, your own) that issues the tokens, and `),Aa(407,`code`),bT(408,`auth`),cf(),bT(409,` pointing at it`),cf()(),Aa(410,`tr`)(411,`td`)(412,`code`),bT(413,`McpAuthJwtGuard`),cf(),bT(414,` in `),Aa(415,`code`),bT(416,`guards`),cf()(),Aa(417,`td`)(418,`code`),bT(419,`auth.verifier`),cf()()(),Aa(420,`tr`)(421,`td`)(422,`code`),bT(423,`@ToolScopes(['orders:write'])`),cf()(),Aa(424,`td`)(425,`code`),bT(426,`scopes: ['orders:write']`),cf(),bT(427,` on the decorator. Scoped tools stay listed to every client`),cf()(),Aa(428,`tr`)(429,`td`)(430,`code`),bT(431,`@ToolRoles(['admin'])`),cf()(),Aa(432,`td`),bT(433,`A guard, or a `),Aa(434,`code`),bT(435,`@Can()`),cf(),bT(436,` policy with `),Aa(437,`code`),bT(438,`@nestjs/authorization`),cf()()(),Aa(439,`tr`)(440,`td`)(441,`code`),bT(442,`@PublicTool()`),cf(),bT(443,`, `),Aa(444,`code`),bT(445,`allowUnauthenticatedAccess`),cf()(),Aa(446,`td`),bT(447,`Not supported: with `),Aa(448,`code`),bT(449,`auth`),cf(),bT(450,`, every request needs a token`),cf()(),Aa(451,`tr`)(452,`td`)(453,`code`),bT(454,`ctx.getUser()`),cf(),bT(455,` in 2.x`),cf(),Aa(456,`td`)(457,`code`),bT(458,`ctx.authInfo`),cf(),bT(459,`, or `),Aa(460,`code`),bT(461,`@CurrentUser()`),cf(),bT(462,` with `),Aa(463,`code`),bT(464,`@nestjs/authentication`),cf()()()()(),Aa(465,`h4`,20)(466,`span`),bT(467,`What's not there`),cf()(),Aa(468,`ul`)(469,`li`)(470,`strong`),bT(471,`The HTTP+SSE transport`),cf(),bT(472,` of the 2024-11-05 protocol revision isn't served. Clients connect over Streamable HTTP, the transport current clients use.`),cf(),Aa(473,`li`)(474,`strong`),bT(475,`Sessions`),cf(),bT(476,` aren't kept: every HTTP request is served on its own, which is what lets the server run on many instances. A 2025 client can't be asked for input mid-call over HTTP; the call ends with a tool error.`),cf(),Aa(477,`li`)(478,`strong`),bT(479,`Registering tools at runtime`),cf(),bT(480,`, `),Aa(481,`strong`),bT(482,`several MCP servers in one application`),cf(),bT(483,` and `),Aa(484,`strong`),bT(485,`request-scoped providers`),cf(),bT(486,` aren't supported in this version.`),cf()()(),Aa(487,`a`,21),Wa(488,`i`,22),Aa(489,`span`),bT(490,`Edit on GitHub`),cf()()()),p&2){let y=tT(71),w=tT(179),T=tT(218),k=tT(336);zC(68),hf(` `,jT(69,16,`app.module`,y.isJsActive),`
`),zC(108),hf(` `,jT(177,19,`main`,w.isJsActive),`
`),zC(39),hf(` `,jT(216,22,`greeting.tool`,T.isJsActive),`
`),zC(60),Ky(`context.reportProgress(`,`{`,` progress, total `,`}`,`)`),zC(19),Ky(`(`,`{`,` uri `,`}`,`)`),zC(8),Ky(``,`{`,` content `,`}`),zC(3),Ky(``,`{`,` contents `,`}`),zC(3),Ky(``,`{`,` messages `,`}`),zC(7),Ky(`@Injectable(`,`{`,` scope: Scope.REQUEST `,`}`,`)`),zC(18),hf(` `,jT(334,25,`greeting.resource`,k.isJsActive),`
`)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return l})();var Te=[{path:``,redirectTo:`overview`,pathMatch:`full`},{path:`overview`,component:q,data:{title:`MCP - Overview`}},{path:`primitives`,component:_,data:{title:`MCP - Primitives`}},{path:`transports`,component:B,data:{title:`MCP - Transports`}},{path:`testing`,component:H,data:{title:`MCP - Testing`}},{path:`migration`,component:N,data:{title:`MCP - Migration`}}];export{Te as MCP_ROUTES};