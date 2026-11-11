import{A as tv,D as oC,M as xy,N as zC,_ as Wa,b as cf,d as Jc,l as Aa,n as ln,r as xt,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var S=(()=>{class o extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(o)))(l||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-devtools-overview`]],features:[xy],decls:395,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`overview`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://devtools.nestjs.com`],[1,`language-typescript`],[1,`language-bash`],[`src`,`/assets/devtools/modules-graph.png`],[`src`,`/assets/devtools/classes-graph.png`],[`src`,`/assets/devtools/node-popup.png`],[`src`,`/assets/devtools/subtree-view.png`],[`width`,`1000`,`height`,`565`,`src`,oC`https://www.youtube.com/embed/bW8V-ssfnvM`,`title`,`YouTube video player`,`frameBorder`,`0`,`allow`,`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,`allowFullScreen`,``],[`appAnchor`,``,`id`,`debugging-cannot-resolve-dependency-errors`],[`src`,`/assets/devtools/drag-and-drop.png`],[`src`,`/assets/devtools/partial-graph-modules-view.png`],[`src`,`/assets/devtools/partial-graph-classes-view.png`],[`appAnchor`,``,`id`,`routes-explorer`],[`src`,`/assets/devtools/routes.png`],[`appAnchor`,``,`id`,`playground`],[`src`,`/assets/devtools/sandbox.png`],[`src`,`/assets/devtools/sandbox-table.png`],[`width`,`1000`,`height`,`565`,`src`,oC`https://www.youtube.com/embed/liSxEN_VXKM`,`title`,`YouTube video player`,`frameBorder`,`0`,`allow`,`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,`allowFullScreen`,``],[`appAnchor`,``,`id`,`bootstrap-performance-analyzer`],[`src`,`/assets/devtools/bootstrap-performance.png`],[`appAnchor`,``,`id`,`audit`],[`src`,`/assets/devtools/audit.png`],[`href`,`/fundamentals/injection-scopes#durable-providers`],[`appAnchor`,``,`id`,`preview-static-files`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/devtools/overview.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(a,l){a&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Overview`),cf(),Aa(5,`blockquote`,4)(6,`strong`),bT(7,`Hint`),cf(),bT(8,` This chapter covers the Nest Devtools integration with the Nest framework. If you are looking for the Devtools application, visit the `),Aa(9,`a`,5),bT(10,`Devtools`),cf(),bT(11,` website.
`),cf(),Aa(12,`p`),bT(13,`Nest Devtools gives you an interactive, always up-to-date view of your application's internals: modules, providers, controllers, and the routes and events that tie them together. Instead of piecing that picture together from imports and constructor signatures, you get a live graph you can search, filter, and click through. This chapter walks you through connecting your local application to Devtools for the first time.`),cf(),Aa(14,`p`),bT(15,`Getting started takes less than five minutes. Open your `),Aa(16,`code`),bT(17,`main.ts`),cf(),bT(18,` file and set the `),Aa(19,`code`),bT(20,`snapshot`),cf(),bT(21,` attribute to `),Aa(22,`code`),bT(23,`true`),cf(),bT(24,` in the application options object:`),cf(),Aa(25,`app-copy-button`)(26,`pre`)(27,`code`,6),bT(28,`
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  await app.listen(3000);
}
`),cf()()(),Aa(29,`p`),bT(30,`This tells Nest to collect the metadata Devtools needs to reconstruct and visualize your application's dependency graph.`),cf(),Aa(31,`p`),bT(32,`Next, install the Devtools integration package:`),cf(),Aa(33,`pre`)(34,`code`,7),bT(35,`
$ npm i @nestjs/devtools-integration
`),cf()(),Aa(36,`p`),bT(37,`With the package installed, open `),Aa(38,`code`),bT(39,`app.module.ts`),cf(),bT(40,` and import `),Aa(41,`code`),bT(42,`DevtoolsModule`),cf(),bT(43,`:`),cf(),Aa(44,`app-copy-button`)(45,`pre`)(46,`code`,6),bT(47,`
@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
`),cf()()(),Aa(48,`blockquote`,4)(49,`strong`),bT(50,`Note`),cf(),bT(51,` We check `),Aa(52,`code`),bT(53,`NODE_ENV`),cf(),bT(54,` here because `),Aa(55,`code`),bT(56,`DevtoolsModule`),cf(),bT(57,` should never run in production.
`),cf(),Aa(58,`p`),bT(59,`The `),Aa(60,`code`),bT(61,`http`),cf(),bT(62,` flag controls whether `),Aa(63,`code`),bT(64,`DevtoolsModule`),cf(),bT(65,` starts its introspection server at all. With the flag disabled, the module doesn't expose anything, which is the safety net you want if this configuration accidentally makes it past a review. The runtime overhead is negligible: with `),Aa(66,`code`),bT(67,`snapshot`),cf(),bT(68,` enabled, Nest collects the graph metadata once, while the application bootstraps, so your application's regular request handling is unaffected.`),cf(),Aa(69,`p`),bT(70,`Once `),Aa(71,`code`),bT(72,`DevtoolsModule`),cf(),bT(73,` is imported and your application is running (`),Aa(74,`code`),bT(75,`npm run start:dev`),cf(),bT(76,`), open `),Aa(77,`a`,5),bT(78,`Devtools`),cf(),bT(79,` to see your introspected graph.`),cf(),Aa(80,`figure`),Wa(81,`img`,8),cf(),Aa(82,`blockquote`,4)(83,`strong`),bT(84,`Hint`),cf(),bT(85,` Every module connects to `),Aa(86,`code`),bT(87,`InternalCoreModule`),cf(),bT(88,`, a global module that Nest always imports into the root module. Because it's registered globally, Nest draws an edge between it and every other module in your application. To declutter the view, select the `),Aa(89,`strong`),bT(90,`Hide global modules`),cf(),bT(91,` checkbox in the sidebar.
`),cf(),Aa(92,`p`),bT(93,`Under the hood, `),Aa(94,`code`),bT(95,`DevtoolsModule`),cf(),bT(96,` starts a lightweight HTTP server (on port 8000 by default) that the dashboard uses to introspect your application in real time. No extra configuration is required. If port 8000 is taken, pass a different one with the `),Aa(97,`code`),bT(98,`port`),cf(),bT(99,` option of `),Aa(100,`code`),bT(101,`DevtoolsModule.register()`),cf(),bT(102,`.`),cf(),Aa(103,`p`),bT(104,`To confirm everything is wired up correctly, switch the graph view to "Classes". You should see something like this:`),cf(),Aa(105,`figure`),Wa(106,`img`,9),cf(),Aa(107,`p`),bT(108,`Click any node to open a popup with a `),Aa(109,`strong`),bT(110,`"Focus"`),cf(),bT(111,` button that isolates it on the graph, or use the search bar in the sidebar to jump to a specific node.`),cf(),Aa(112,`blockquote`,4)(113,`strong`),bT(114,`Hint`),cf(),bT(115,` Clicking `),Aa(116,`strong`),bT(117,`Inspect`),cf(),bT(118,` takes you to the `),Aa(119,`code`),bT(120,`/debug`),cf(),bT(121,` page with that node preselected, which is useful for digging into a specific provider or controller.
`),cf(),Aa(122,`figure`),Wa(123,`img`,10),cf(),Aa(124,`blockquote`,4)(125,`strong`),bT(126,`Hint`),cf(),bT(127,` Need a snapshot for docs or a pull request? Click `),Aa(128,`strong`),bT(129,`Export as PNG`),cf(),bT(130,` in the bottom-right corner of the graph.
`),cf(),Aa(131,`p`),bT(132,`The sidebar controls let you narrow down edge proximity, which helps you zoom in on a specific branch of your application:`),cf(),Aa(133,`figure`),Wa(134,`img`,11),cf(),Aa(135,`p`),bT(136,`This is a great way to onboard `),Aa(137,`strong`),bT(138,`new team members`),cf(),bT(139,` by showing them exactly how the application fits together. It's equally useful when you extract a module (say, `),Aa(140,`code`),bT(141,`TasksModule`),cf(),bT(142,`) along with all of its dependencies before splitting a large application into smaller services.`),cf(),Aa(143,`p`),bT(144,`Everything in Graph Explorer stays in sync with your running application: refresh, and any change you've made to your modules or providers is reflected instantly. There's no build step or separate documentation to keep up to date; the graph `),Aa(145,`strong`),bT(146,`is`),cf(),bT(147,` the documentation.`),cf(),Aa(148,`p`),bT(149,`See `),Aa(150,`strong`),bT(151,`Graph Explorer`),cf(),bT(152,` in action:`),cf(),Aa(153,`figure`),Wa(154,`iframe`,12),cf(),Aa(155,`h4`,13)(156,`span`),bT(157,`Debugging "Cannot resolve dependency" errors`),cf()(),Aa(158,`blockquote`,4)(159,`strong`),bT(160,`Note`),cf(),bT(161,` Available for `),Aa(162,`code`),bT(163,`@nestjs/core`),cf(),bT(164,` 9.3.10 and above.
`),cf(),Aa(165,`p`),bT(166,`If you've worked with Nest for a while, you've probably run into the `),Aa(167,`strong`),bT(168,`"Cannot resolve dependency"`),cf(),bT(169,` error. It's often the first error a new team member sees, and on a large application it can be hard to track down: the stack trace tells you what's missing, but not why, or where in a deeply nested provider chain the wiring broke. Devtools turns this from a guessing game into a quick, visual diagnosis.`),cf(),Aa(170,`p`),bT(171,`Start by updating the `),Aa(172,`code`),bT(173,`bootstrap()`),cf(),bT(174,` call in `),Aa(175,`code`),bT(176,`main.ts`),cf(),bT(177,`:`),cf(),Aa(178,`app-copy-button`)(179,`pre`)(180,`code`,6),bT(181,`
bootstrap().catch((err) => {
  writeFileSync('graph.json', PartialGraphHost.toString() ?? '');
  process.exit(1);
});
`),cf()()(),Aa(182,`blockquote`,4)(183,`strong`),bT(184,`Hint`),cf(),Aa(185,`code`),bT(186,`PartialGraphHost`),cf(),bT(187,` is exported from `),Aa(188,`code`),bT(189,`@nestjs/core`),cf(),bT(190,`, and `),Aa(191,`code`),bT(192,`writeFileSync`),cf(),bT(193,` from `),Aa(194,`code`),bT(195,`node:fs`),cf(),bT(196,`.
`),cf(),Aa(197,`p`),bT(198,`You also need to set `),Aa(199,`code`),bT(200,`abortOnError`),cf(),bT(201,` to `),Aa(202,`code`),bT(203,`false`),cf(),bT(204,`:`),cf(),Aa(205,`app-copy-button`)(206,`pre`)(207,`code`,6),bT(208,`
const app = await NestFactory.create(AppModule, {
  snapshot: true,
  abortOnError: false, // <--- THIS
});
`),cf()()(),Aa(209,`p`),bT(210,`From now on, whenever your application fails to bootstrap with a `),Aa(211,`strong`),bT(212,`"Cannot resolve dependency"`),cf(),bT(213,` error, it writes a `),Aa(214,`code`),bT(215,`graph.json`),cf(),bT(216,` file (a partial graph) to your project root. Drag and drop the file into Devtools (switch from "Interactive" to "Preview" mode first) to see exactly where things went wrong:`),cf(),Aa(217,`figure`),Wa(218,`img`,14),cf(),Aa(219,`p`),bT(220,`Once uploaded, you'll see the graph along with a dialog summarizing what happened:`),cf(),Aa(221,`figure`),Wa(222,`img`,15),cf(),Aa(223,`p`),bT(224,`The highlighted `),Aa(225,`code`),bT(226,`TasksModule`),cf(),bT(227,` is the one to look into, and the dialog gives you pointers on how to fix it.`),cf(),Aa(228,`p`),bT(229,`Switching to the "Classes" view tells the full story:`),cf(),Aa(230,`figure`),Wa(231,`img`,16),cf(),Aa(232,`p`),bT(233,`The graph makes it clear: `),Aa(234,`code`),bT(235,`DiagnosticsService`),cf(),bT(236,`, which `),Aa(237,`code`),bT(238,`TasksService`),cf(),bT(239,` depends on, isn't available in the `),Aa(240,`code`),bT(241,`TasksModule`),cf(),bT(242,` context. The fix is to import `),Aa(243,`code`),bT(244,`DiagnosticsModule`),cf(),bT(245,` into `),Aa(246,`code`),bT(247,`TasksModule`),cf(),bT(248,`.`),cf(),Aa(249,`p`),bT(250,`What would otherwise be a slow process of manually tracing imports across several files, hoping you didn't miss one, turns into a couple of clicks. It's a small workflow change, but it adds up quickly on a codebase with dozens of modules.`),cf(),Aa(251,`h4`,17)(252,`span`),bT(253,`Routes explorer`),cf()(),Aa(254,`p`),bT(255,`The `),Aa(256,`strong`),bT(257,`Routes explorer`),cf(),bT(258,` page shows every entrypoint your application registers:`),cf(),Aa(259,`figure`),Wa(260,`img`,18),cf(),Aa(261,`blockquote`,4)(262,`strong`),bT(263,`Hint`),cf(),bT(264,` This page isn't limited to HTTP routes. It also covers WebSockets, gRPC, GraphQL resolvers, and more.
`),cf(),Aa(265,`p`),bT(266,`Entrypoints are grouped by their host controllers, and you can use the search bar to jump to the one you're after.`),cf(),Aa(267,`p`),bT(268,`Click any entrypoint to reveal `),Aa(269,`strong`),bT(270,`a flow graph`),cf(),bT(271,` of its full execution path: every guard, interceptor, and pipe bound to that route. It's the fastest way to understand how a request travels through your application, or to find out why a specific guard, interceptor, or pipe isn't running when you expect it to.`),cf(),Aa(272,`p`),bT(273,`This view pays off most on applications that have grown organically, where the same guard might be applied at the controller level in one place and per route in another. Instead of reading through decorators scattered across the codebase, you get the actual, resolved execution order for that route.`),cf(),Aa(274,`h4`,19)(275,`span`),bT(276,`Playground`),cf()(),Aa(277,`p`),bT(278,`To run code against your application without redeploying, open the `),Aa(279,`strong`),bT(280,`Playground`),cf(),bT(281,` page:`),cf(),Aa(282,`figure`),Wa(283,`img`,20),cf(),Aa(284,`p`),bT(285,`The Playground lets you test and debug endpoints `),Aa(286,`strong`),bT(287,`in real time`),cf(),bT(288,`, so you can track down issues without reaching for a separate HTTP client. You can bypass the authentication layer entirely, skipping the extra login step or a dedicated test account. For event-driven applications, you can trigger events directly from the Playground to see exactly how your application responds.`),cf(),Aa(289,`p`),bT(290,`Anything your code logs is streamed to the Playground's console, so you always know what's happening under the hood.`),cf(),Aa(291,`p`),bT(292,`Run code `),Aa(293,`strong`),bT(294,`on the fly`),cf(),bT(295,` and see the results instantly, with no rebuilds and no server restarts.`),cf(),Aa(296,`blockquote`,4)(297,`strong`),bT(298,`Hint`),cf(),bT(299,` Playground requests are authenticated with a sandbox session token. `),Aa(300,`code`),bT(301,`DevtoolsModule`),cf(),bT(302,` generates a new token each time the application starts and prints it to the console (`),Aa(303,`code`),bT(304,`Sandbox session token: ...`),cf(),bT(305,`). Provide this token to Devtools to run code in the Playground.
`),cf(),Aa(306,`figure`),Wa(307,`img`,21),cf(),Aa(308,`blockquote`,4)(309,`strong`),bT(310,`Hint`),cf(),bT(311,` Use `),Aa(312,`code`),bT(313,`console.table()`),cf(),bT(314,` (or `),Aa(315,`code`),bT(316,`table()`),cf(),bT(317,`) to pretty-print an array of objects.
`),cf(),Aa(318,`p`),bT(319,`See the `),Aa(320,`strong`),bT(321,`Playground`),cf(),bT(322,` in action:`),cf(),Aa(323,`figure`),Wa(324,`iframe`,22),cf(),Aa(325,`h4`,23)(326,`span`),bT(327,`Bootstrap performance analyzer`),cf()(),Aa(328,`p`),bT(329,`To find out what's slowing down your application's startup, open the `),Aa(330,`strong`),bT(331,`Bootstrap performance`),cf(),bT(332,` page. It lists every class node (controllers, providers, enhancers, and more) along with its instantiation time:`),cf(),Aa(333,`figure`),Wa(334,`img`,24),cf(),Aa(335,`p`),bT(336,`It's the quickest way to spot the slowest parts of your bootstrap process. This matters most when startup time is on the critical path, such as in serverless environments where every millisecond counts.`),cf(),Aa(337,`p`),bT(338,`Slow bootstraps usually have a few common causes: heavy synchronous work inside a constructor, a provider awaiting a slow external call in `),Aa(339,`code`),bT(340,`onModuleInit`),cf(),bT(341,`, or a module instantiating far more dependencies than it needs. Sorted by instantiation time, this page makes those outliers obvious at a glance, without sprinkling `),Aa(342,`code`),bT(343,`console.time()`),cf(),bT(344,` calls throughout your codebase.`),cf(),Aa(345,`h4`,25)(346,`span`),bT(347,`Audit`),cf()(),Aa(348,`p`),bT(349,`Devtools automatically analyzes your serialized graph and surfaces errors, warnings, and hints that deserve your attention. You'll find them on the `),Aa(350,`strong`),bT(351,`Audit`),cf(),bT(352,` page:`),cf(),Aa(353,`figure`),Wa(354,`img`,26),cf(),Aa(355,`blockquote`,4)(356,`strong`),bT(357,`Hint`),cf(),bT(358,` The screenshot above shows only a sample of the available audit rules.
`),cf(),Aa(359,`p`),bT(360,`Think of it as a linter for your application's architecture: a fast way to catch issues before they catch you. Some of the built-in rules flag problems you'd otherwise discover the hard way: a controller carrying far more routes than its neighbors, a module pulling in an unusually large number of dependencies, a provider named `),Aa(361,`code`),bT(362,`SomethingGuard`),cf(),bT(363,` that was never registered as a guard, or a request-scoped provider that's a strong candidate for `),Aa(364,`a`,27),bT(365,`durable providers`),cf(),bT(366,`. Your test suite won't catch any of these, but they are exactly the kind of thing that slows a codebase down over time.`),cf(),Aa(367,`h4`,28)(368,`span`),bT(369,`Preview static files`),cf()(),Aa(370,`p`),bT(371,`To save a serialized graph to a file, use the following code:`),cf(),Aa(372,`app-copy-button`)(373,`pre`)(374,`code`,6),bT(375,`
await app.listen(3000); // OR await app.init()
writeFileSync('./graph.json', app.get(SerializedGraph).toString());
`),cf()()(),Aa(376,`blockquote`,4)(377,`strong`),bT(378,`Hint`),cf(),Aa(379,`code`),bT(380,`SerializedGraph`),cf(),bT(381,` is exported from `),Aa(382,`code`),bT(383,`@nestjs/core`),cf(),bT(384,`.
`),cf(),Aa(385,`p`),bT(386,`Then drag and drop (or upload) the file:`),cf(),Aa(387,`figure`),Wa(388,`img`,14),cf(),Aa(389,`p`),bT(390,`This is useful when you want to share a graph with a coworker, attach it to a bug report, or analyze it offline, without running your application.`),cf()(),Aa(391,`a`,29),Wa(392,`i`,30),Aa(393,`span`),bT(394,`Edit on GitHub`),cf()()())},dependencies:[ln,Lt],encapsulation:2})}return o})();var y=(()=>{class o extends xt{static ɵfac=(()=>{let r;return function(l){return(r||(r=im(o)))(l||o)}})();static ɵcmp=ef({type:o,selectors:[[`app-devtools-ci-cd`]],features:[xy],decls:307,vars:12,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`cicd-integration`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://devtools.nestjs.com`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://devtools.nestjs.com/settings`],[`width`,`1000`,`height`,`565`,`src`,oC`https://www.youtube.com/embed/r5RXcBrnEQ8`,`title`,`YouTube video player`,`frameBorder`,`0`,`allow`,`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,`allowFullScreen`,``],[`appAnchor`,``,`id`,`publishing-graphs`],[`routerLink`,`/devtools/overview`],[1,`language-typescript`],[`src`,`/assets/devtools/graph-published-terminal.png`],[`src`,`/assets/devtools/project.png`],[`appAnchor`,``,`id`,`reports`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://devtools.nestjs.com/organizations`],[`src`,`/assets/devtools/report.png`],[`appAnchor`,``,`id`,`build-preview`],[`src`,`/assets/devtools/nodes-selection.png`],[`appAnchor`,``,`id`,`integrations-github-actions`],[1,`language-yaml`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://devtools.nestjs.com/settings/manage-api-keys`],[`src`,`/assets/devtools/integrate-github-app.png`],[`src`,`/assets/devtools/actions-preview.png`],[`appAnchor`,``,`id`,`integrations-gitlab-pipelines`],[`appAnchor`,``,`id`,`other-cicd-tools`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://bitbucket.org/product/features/pipelines`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://circleci.com/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://circleci.com/docs/variables/#built-in-environment-variables`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://support.atlassian.com/bitbucket-cloud/docs/variables-and-secrets/`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/devtools/ci-cd.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(a,l){a&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`CI/CD integration`),cf(),Aa(5,`blockquote`,4)(6,`strong`),bT(7,`Hint`),cf(),bT(8,` This chapter covers the Nest Devtools integration with the Nest framework. If you are looking for the Devtools application, visit the `),Aa(9,`a`,5),bT(10,`Devtools`),cf(),bT(11,` website. CI/CD integration is available on the `),Aa(12,`strong`)(13,`a`,6),bT(14,`Enterprise`),cf()(),bT(15,` plan.
`),cf(),Aa(16,`p`),bT(17,`Local usage is great for exploring your application as you build it, but the real payoff comes when Devtools becomes part of your delivery pipeline. CI/CD integration publishes a snapshot of your application's graph on every build. You get a running history of how your architecture evolves and, more importantly, an automatic report on every pull request that shows exactly what changed structurally. It's the difference between hoping a refactor didn't break anything and knowing it didn't.`),cf(),Aa(18,`p`),bT(19,`See why teams rely on CI/CD integration to catch architectural drift before it ships:`),cf(),Aa(20,`figure`),Wa(21,`iframe`,7),cf(),Aa(22,`h4`,8)(23,`span`),bT(24,`Publishing graphs`),cf()(),Aa(25,`p`),bT(26,`First, wire up the application bootstrap file (`),Aa(27,`code`),bT(28,`main.ts`),cf(),bT(29,`) to use the `),Aa(30,`code`),bT(31,`GraphPublisher`),cf(),bT(32,` class, exported from `),Aa(33,`code`),bT(34,`@nestjs/devtools-integration`),cf(),bT(35,` (see the `),Aa(36,`a`,9),bT(37,`Devtools overview`),cf(),bT(38,` if you haven't installed it yet):`),cf(),Aa(39,`app-copy-button`)(40,`pre`)(41,`code`,10),bT(42,`
async function bootstrap() {
  const shouldPublishGraph = process.env.PUBLISH_GRAPH === 'true';

  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    preview: shouldPublishGraph,
  });

  if (shouldPublishGraph) {
    await app.init();

    const publishOptions = { ... } // NOTE: this options object will vary depending on the CI/CD provider you're using
    const graphPublisher = new GraphPublisher(app);
    await graphPublisher.publish(publishOptions);

    await app.close();
  } else {
    await app.listen(3000);
  }
}
`),cf()()(),Aa(43,`p`),bT(44,`Here, `),Aa(45,`code`),bT(46,`GraphPublisher`),cf(),bT(47,` pushes your serialized graph to the centralized registry. `),Aa(48,`code`),bT(49,`PUBLISH_GRAPH`),cf(),bT(50,` is a custom environment variable that distinguishes a CI/CD publish run from a regular application bootstrap. Setting `),Aa(51,`code`),bT(52,`preview`),cf(),bT(53,` to `),Aa(54,`code`),bT(55,`true`),cf(),bT(56,` bootstraps the application in preview mode, which means the constructors and lifecycle hooks of your controllers, enhancers, and providers don't execute. This isn't `),Aa(57,`strong`),bT(58,`required`),cf(),bT(59,`, but it keeps CI runs fast and simple (no database connection needed, for example).`),cf(),Aa(60,`p`),bT(61,`The shape of `),Aa(62,`code`),bT(63,`publishOptions`),cf(),bT(64,` depends on your CI/CD provider. The sections below cover the most popular ones. If your provider isn't listed, the underlying fields are the same everywhere, so you can adapt the configuration in minutes.`),cf(),Aa(65,`p`),bT(66,`Once your graph publishes successfully, you'll see output like this in your workflow logs:`),cf(),Aa(67,`figure`),Wa(68,`img`,11),cf(),Aa(69,`p`),bT(70,`Every published graph shows up as a new entry on the project's page:`),cf(),Aa(71,`figure`),Wa(72,`img`,12),cf(),Aa(73,`h4`,13)(74,`span`),bT(75,`Reports`),cf()(),Aa(76,`p`),bT(77,`Devtools generates a report for every build, `),Aa(78,`strong`),bT(79,`as long as`),cf(),bT(80,` a matching snapshot already exists in the registry. If you open a pull request against `),Aa(81,`code`),bT(82,`master`),cf(),bT(83,` and a graph for `),Aa(84,`code`),bT(85,`master`),cf(),bT(86,` was already published, Devtools detects the differences and builds a report automatically. Otherwise, there's nothing to compare against yet.`),cf(),Aa(87,`p`),bT(88,`Find your reports on the project's page (see `),Aa(89,`a`,14),bT(90,`organizations`),cf(),bT(91,`).`),cf(),Aa(92,`figure`),Wa(93,`img`,15),cf(),Aa(94,`p`),bT(95,`This is where Devtools really earns its keep: catching changes that slip past code review. Say someone quietly changes the scope of a `),Aa(96,`strong`),bT(97,`deeply nested provider`),cf(),bT(98,`. That's easy to miss in a diff, and impossible to miss in a report. Remove a guard from an endpoint, and it shows up as an affected change immediately. If integration or e2e tests didn't cover that route, you might not have noticed until it was too late. Devtools catches it at review time instead.`),cf(),Aa(99,`p`),bT(100,`The same goes for `),Aa(101,`strong`),bT(102,`large codebases`),cf(),bT(103,`: make a module global, and you immediately see how many new edges landed on the graph, usually a strong signal that something needs a second look.`),cf(),Aa(104,`p`),bT(105,`Reports are also a great artifact to link in your pull request description. Instead of asking a reviewer to trust that "this only touches the billing module," you can point them at the exact set of nodes and edges that changed, turning an architectural claim into something they can verify in seconds.`),cf(),Aa(106,`h4`,16)(107,`span`),bT(108,`Build preview`),cf()(),Aa(109,`p`),bT(110,`You can replay every published graph: click `),Aa(111,`strong`),bT(112,`Preview`),cf(),bT(113,` to see exactly how it looked at that point in time. When a report is available, differences are highlighted directly on the graph:`),cf(),Aa(114,`ul`)(115,`li`),bT(116,`green nodes represent added elements`),cf(),Aa(117,`li`),bT(118,`light white nodes represent updated elements`),cf(),Aa(119,`li`),bT(120,`red nodes represent deleted elements`),cf()(),Aa(121,`p`),bT(122,`Here's what that looks like:`),cf(),Aa(123,`figure`),Wa(124,`img`,17),cf(),Aa(125,`p`),bT(126,`Being able to rewind and compare graphs makes troubleshooting straightforward, with no more guessing what changed and when. Set things up so that every pull request (or even every commit) gets its own snapshot in the registry, and you'll always have a clear trail to follow. Think of Devtools as version control that understands how Nest assembles your application, and can `),Aa(127,`strong`),bT(128,`show you`),cf(),bT(129,` the difference instead of just describing it.`),cf(),Aa(130,`h4`,18)(131,`span`),bT(132,`Integrations: GitHub Actions`),cf()(),Aa(133,`p`),bT(134,`Create a new workflow file in `),Aa(135,`code`),bT(136,`.github/workflows`),cf(),bT(137,` (for example, `),Aa(138,`code`),bT(139,`publish-graph.yml`),cf(),bT(140,`) with the following content:`),cf(),Aa(141,`pre`)(142,`code`,19),bT(143),cf()(),Aa(144,`blockquote`,4)(145,`strong`),bT(146,`Hint`),cf(),bT(147,` For better security, store `),Aa(148,`code`),bT(149,`DEVTOOLS_API_KEY`),cf(),bT(150,` as a GitHub secret instead of hardcoding it. See `),Aa(151,`a`,20),bT(152,`Creating secrets for a repository`),cf(),bT(153,`.
`),cf(),Aa(154,`p`),bT(155,`This workflow runs on every pull request and on direct pushes to `),Aa(156,`code`),bT(157,`master`),cf(),bT(158,`. Adapt it to your project's needs; the one requirement is to provide the environment variables that `),Aa(159,`code`),bT(160,`GraphPublisher`),cf(),bT(161,` relies on.`),cf(),Aa(162,`p`),bT(163,`Before the workflow can run, fill in the one remaining variable: `),Aa(164,`code`),bT(165,`DEVTOOLS_API_KEY`),cf(),bT(166,`. Generate a dedicated API key for your project on the `),Aa(167,`strong`)(168,`a`,21),bT(169,`API keys page`),cf()(),bT(170,`.`),cf(),Aa(171,`p`),bT(172,`Finally, go back to `),Aa(173,`code`),bT(174,`main.ts`),cf(),bT(175,` and fill in the `),Aa(176,`code`),bT(177,`publishOptions`),cf(),bT(178,` object we left empty earlier:`),cf(),Aa(179,`app-copy-button`)(180,`pre`)(181,`code`,10),bT(182,`
const publishOptions = {
  apiKey: process.env.DEVTOOLS_API_KEY,
  repository: process.env.REPOSITORY_NAME,
  owner: process.env.GITHUB_REPOSITORY_OWNER,
  sha: process.env.COMMIT_SHA,
  target: process.env.TARGET_SHA,
  trigger: process.env.GITHUB_BASE_REF ? 'pull' : 'push',
  branch: process.env.BRANCH_NAME,
};
`),cf()()(),Aa(183,`p`),bT(184,`For the smoothest experience, we also recommend installing the `),Aa(185,`strong`),bT(186,`GitHub application`),cf(),bT(187,` for your project by clicking "Integrate GitHub app" (see below). It's optional, but well worth it.`),cf(),Aa(188,`figure`),Wa(189,`img`,22),cf(),Aa(190,`p`),bT(191,`With the app installed, you see the status of your preview and report generation right inside the pull request:`),cf(),Aa(192,`figure`),Wa(193,`img`,23),cf(),Aa(194,`h4`,24)(195,`span`),bT(196,`Integrations: Gitlab Pipelines`),cf()(),Aa(197,`p`),bT(198,`Create a `),Aa(199,`code`),bT(200,`.gitlab-ci.yml`),cf(),bT(201,` file in your project root with the following definition:`),cf(),Aa(202,`pre`)(203,`code`,19),bT(204,`
image: node:22

stages:
  - build

cache:
  key:
    files:
      - package-lock.json
  paths:
    - node_modules/

workflow:
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      when: always
    - if: $CI_COMMIT_BRANCH == "master" && $CI_PIPELINE_SOURCE == "push"
      when: always
    - when: never

install_dependencies:
  stage: build
  script:
    - npm ci

publish_graph:
  stage: build
  needs:
    - install_dependencies
  script: npm run start
  variables:
    PUBLISH_GRAPH: 'true'
    DEVTOOLS_API_KEY: 'CHANGE_THIS_TO_YOUR_API_KEY'
`),cf()(),Aa(205,`blockquote`,4)(206,`strong`),bT(207,`Hint`),cf(),bT(208,` As with GitHub, we recommend storing `),Aa(209,`code`),bT(210,`DEVTOOLS_API_KEY`),cf(),bT(211,` as a CI/CD secret instead of committing it.
`),cf(),Aa(212,`p`),bT(213,`This pipeline runs on every merge request and on direct pushes to `),Aa(214,`code`),bT(215,`master`),cf(),bT(216,`. Adjust it to fit your project, but make sure the environment variables that `),Aa(217,`code`),bT(218,`GraphPublisher`),cf(),bT(219,` needs are always present.`),cf(),Aa(220,`p`),bT(221,`One variable in this definition still needs a real value: `),Aa(222,`code`),bT(223,`DEVTOOLS_API_KEY`),cf(),bT(224,`. Generate a dedicated API key for your project on the `),Aa(225,`strong`)(226,`a`,21),bT(227,`API keys page`),cf()(),bT(228,`.`),cf(),Aa(229,`p`),bT(230,`Finally, go back to `),Aa(231,`code`),bT(232,`main.ts`),cf(),bT(233,` and fill in the `),Aa(234,`code`),bT(235,`publishOptions`),cf(),bT(236,` object we left empty earlier:`),cf(),Aa(237,`app-copy-button`)(238,`pre`)(239,`code`,10),bT(240,`
const publishOptions = {
  apiKey: process.env.DEVTOOLS_API_KEY,
  repository: process.env.CI_PROJECT_NAME,
  owner: process.env.CI_PROJECT_ROOT_NAMESPACE,
  sha: process.env.CI_COMMIT_SHA,
  target: process.env.CI_MERGE_REQUEST_DIFF_BASE_SHA,
  trigger: process.env.CI_MERGE_REQUEST_DIFF_BASE_SHA ? 'pull' : 'push',
  branch:
    process.env.CI_COMMIT_BRANCH ??
    process.env.CI_MERGE_REQUEST_SOURCE_BRANCH_NAME,
};
`),cf()()(),Aa(241,`h4`,25)(242,`span`),bT(243,`Other CI/CD tools`),cf()(),Aa(244,`p`),bT(245,`The integration doesn't depend on GitHub or GitLab. All `),Aa(246,`code`),bT(247,`GraphPublisher`),cf(),bT(248,` needs is a handful of values that describe the current build (what triggered it, which commit, which branch), so it works with any provider, including `),Aa(249,`a`,26),bT(250,`Bitbucket Pipelines`),cf(),bT(251,`, `),Aa(252,`a`,27),bT(253,`CircleCI`),cf(),bT(254,`, and more.`),cf(),Aa(255,`p`),bT(256,`Here's the full `),Aa(257,`code`),bT(258,`publishOptions`),cf(),bT(259,` shape and what each field represents, so you can wire up any pipeline:`),cf(),Aa(260,`app-copy-button`)(261,`pre`)(262,`code`,10),bT(263,`
const publishOptions = {
  apiKey: process.env.DEVTOOLS_API_KEY, // This is your Nest Devtools API key
  repository: '?', // This is your repository name, for example, "my-api-repository"
  owner: '?', // This is your organization/team name, for example, "nestjs" OR in case of personal projects - your username
  sha: '?', // This represents the "current" commit SHA that triggered the workflow/pipeline
  target: '?', // This represents the "target" commit SHA (e.g., the last commit SHA of the "master" branch)
  // New build will be compared to the "target" build to generate a report
  // NOTE: Some CI/CD tools don't provide you with this information so instead, you can use the "targetBranch" property.
  // NOTE: In this case, the "target" commit SHA will be automatically resolved to the last commit SHA of the "targetBranch" stored in the database.
  // targetBranch: "master",
  trigger: isPr ? 'pull' : 'push', // Depending on whether the pipeline is triggered by a pull request or a regular push commit, you should set "pull" or "push"
  branch: '?', // This is the current branch name, for example, "develop" OR "feat/my-new-feature"
};
`),cf()()(),Aa(264,`p`),bT(265,`Most of these values are available in your CI/CD provider's built-in environment variables. See the `),Aa(266,`a`,28),bT(267,`CircleCI built-in environment variables`),cf(),bT(268,` and `),Aa(269,`a`,29),bT(270,`Bitbucket variables and secrets`),cf(),bT(271,` references as a starting point.`),cf(),Aa(272,`p`),bT(273,`For your pipeline triggers, we recommend the following setup:`),cf(),Aa(274,`ul`)(275,`li`)(276,`code`),bT(277,`push`),cf(),bT(278,`: only for branches that represent a deployment environment, e.g., `),Aa(279,`code`),bT(280,`master`),cf(),bT(281,`, `),Aa(282,`code`),bT(283,`main`),cf(),bT(284,`, `),Aa(285,`code`),bT(286,`staging`),cf(),bT(287,`, or `),Aa(288,`code`),bT(289,`production`),cf(),bT(290,`.`),cf(),Aa(291,`li`)(292,`code`),bT(293,`pull request`),cf(),bT(294,`: always, or at least when the `),Aa(295,`strong`),bT(296,`target branch`),cf(),bT(297,` is a deployment environment (see above).`),cf()(),Aa(298,`p`),bT(299,`This combination keeps your registry populated with a snapshot of every deployable state of `),Aa(300,`code`),bT(301,`master`),cf(),bT(302,`, while still generating a report on every pull request that targets it. That pairing is what makes reports useful in the first place.`),cf()(),Aa(303,`a`,30),Wa(304,`i`,31),Aa(305,`span`),bT(306,`Edit on GitHub`),cf()()()),a&2&&(zC(143),tv([`
name: Devtools

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - '*'

jobs:
  publish:
    if: github.actor != 'dependabot[bot]'
    name: Publish graph
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Setup Environment (PR)
        if: `,"${{",` github.event_name == 'pull_request' `,`}}`,`
        shell: bash
        run: |
          echo "COMMIT_SHA=`,"${{",` github.event.pull_request.head.sha `,`}}`,`" >>\\\${GITHUB_ENV}
      - name: Setup Environment (Push)
        if: `,"${{",` github.event_name == 'push' `,`}}`,`
        shell: bash
        run: |
          echo "COMMIT_SHA=\\\${GITHUB_SHA}" >> \\\${GITHUB_ENV}
      - name: Publish
        run: PUBLISH_GRAPH=true npm run start
        env:
          DEVTOOLS_API_KEY: CHANGE_THIS_TO_YOUR_API_KEY
          REPOSITORY_NAME: `,"${{",` github.event.repository.name `,`}}`,`
          BRANCH_NAME: `,"${{",` github.head_ref || github.ref_name `,`}}`,`
          TARGET_SHA: `,"${{",` github.event.pull_request.base.sha `,`}}`,`
`]))},dependencies:[Jc,Lt,ln],encapsulation:2})}return o})();var P=[{path:`overview`,component:S,data:{title:`Devtools - Overview`}},{path:`ci-cd-integration`,component:y,data:{title:`Devtools - CI/CD integration`}}];export{P as DEVTOOLS_ROUTES};