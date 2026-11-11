import{C as hf,M as xy,N as zC,P as zy,T as jT,_ as Wa,a as u,b as cf,d as Jc,i as g,k as tT,l as Aa,m as LT,n as ln,p as Ky,r as xt,s as l,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var j=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-cloudflare-workers`]],features:[xy],decls:166,vars:4,consts:[[`contentReference`,``],[`app8238f506e4d988409a7a91c274a99e0ee8ebc11e`,``],[1,`content`],[1,`content-inner`],[`id`,`cloudflare-workers`],[`appAnchor`,``,`id`,`when-to-use-which`],[`routerLink`,`/application/queues`],[`routerLink`,`/application/task-scheduling`],[`routerLink`,`/websockets/gateways`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://developers.cloudflare.com/workers/platform/limits/`],[`appAnchor`,``,`id`,`use-both`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`routerLink`,`/deployment`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://developers.cloudflare.com/containers/`],[`appAnchor`,``,`id`,`can-nest-run-on-a-worker`],[`routerLink`,`/fundamentals/lifecycle-events`],[`routerLink`,`/microservices/basics`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/cloudflare-workers.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){if(o&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Cloudflare Workers`),cf(),Aa(5,`p`),bT(6,`Cloudflare Workers and Nest solve different problems, and many systems use both. Workers run small functions across Cloudflare's network, close to each user, with no server to keep running. Nest organizes a backend, usually a long-running Node.js process. This page helps you choose.`),cf(),Aa(7,`h4`,5)(8,`span`),bT(9,`When to use which`),cf()(),Aa(10,`table`)(11,`thead`)(12,`tr`)(13,`th`),bT(14,`What you're building`),cf(),Aa(15,`th`),bT(16,`Better fit`),cf(),Aa(17,`th`),bT(18,`Why`),cf()()(),Aa(19,`tbody`)(20,`tr`)(21,`td`),bT(22,`Logic in front of a site or an API: redirects, A/B tests, rewriting headers, checking a token`),cf(),Aa(23,`td`),bT(24,`Workers`),cf(),Aa(25,`td`),bT(26,`It runs close to every user, before a request reaches your origin`),cf()(),Aa(27,`tr`)(28,`td`),bT(29,`A small API with a few routes, and traffic that comes in spikes or barely at all`),cf(),Aa(30,`td`),bT(31,`Workers`),cf(),Aa(32,`td`),bT(33,`It costs nothing while idle, and there's no server to run`),cf()(),Aa(34,`tr`)(35,`td`),bT(36,`A backend with many modules, or several developers working on it`),cf(),Aa(37,`td`),bT(38,`Nest`),cf(),Aa(39,`td`),bT(40,`Modules, dependency injection, guards and pipes give it one structure, and services are easy to test`),cf()(),Aa(41,`tr`)(42,`td`),bT(43,`A relational database with transactions and a connection pool`),cf(),Aa(44,`td`),bT(45,`Nest`),cf(),Aa(46,`td`),bT(47,`A long-running process keeps its pool. A Worker reaches a database through Hyperdrive or D1`),cf()(),Aa(48,`tr`)(49,`td`),bT(50,`Background jobs that run for minutes, or queue consumers`),cf(),Aa(51,`td`),bT(52,`Nest`),cf(),Aa(53,`td`)(54,`a`,6),bT(55,`Queues`),cf(),bT(56,` and `),Aa(57,`a`,7),bT(58,`scheduled jobs`),cf(),bT(59,` run in your process. Workers have Queues, Cron Triggers and Workflows, which are Cloudflare's own`),cf()(),Aa(60,`tr`)(61,`td`),bT(62,`Heavy CPU or memory work, or native Node.js modules`),cf(),Aa(63,`td`),bT(64,`Nest`),cf(),Aa(65,`td`),bT(66,`A Worker's isolate has limits, listed below`),cf()(),Aa(67,`tr`)(68,`td`),bT(69,`WebSockets with many rooms`),cf(),Aa(70,`td`),bT(71,`Either`),cf(),Aa(72,`td`),bT(73,`Nest has `),Aa(74,`a`,8),bT(75,`gateways`),cf(),bT(76,`, and Workers have Durable Objects`),cf()(),Aa(77,`tr`)(78,`td`),bT(79,`Something that has to run on another cloud, or on your own servers`),cf(),Aa(80,`td`),bT(81,`Nest`),cf(),Aa(82,`td`),bT(83,`It runs anywhere Node.js does, while Worker bindings such as KV and D1 tie the code to Cloudflare`),cf()()()(),Aa(84,`p`),bT(85,`Cloudflare `),Aa(86,`a`,9),bT(87,`lists its limits`),cf(),bT(88,`, which may change. At the time of writing, an isolate gets 128 MB of memory and one second to start, and a request gets 30 seconds of CPU time by default, up to 5 minutes on a paid plan.`),cf(),Aa(89,`h4`,10)(90,`span`),bT(91,`Use both`),cf()(),Aa(92,`p`),bT(93,`A Worker can sit in front of a Nest application: it answers what it can at the edge, and passes the rest on. Cookies, headers and bodies go through unchanged:`),cf(),Aa(94,`app-copy-button`,11)(95,`span`,12),bT(96),LT(97,`extension`),Wa(98,`app-tabs`,null,1),cf(),Aa(100,`pre`)(101,`code`,13),bT(102,`
interface Env {
  API_ORIGIN: string;
}

export default {
  fetch(request: Request, env: Env) {
    const { pathname, search } = new URL(request.url);
    if (pathname.startsWith('/api/')) {
      return fetch(\`\${env.API_ORIGIN}\${pathname}\${search}\`, request);
    }
    return new Response(\`Hello from \${request.cf?.colo ?? 'the edge'}\`);
  },
};
`),cf()()(),Aa(103,`p`),bT(104,`Nest then runs on any Node.js host (see `),Aa(105,`a`,14),bT(106,`Deployment`),cf(),bT(107,`), including `),Aa(108,`a`,15),bT(109,`Cloudflare Containers`),cf(),bT(110,`, which run a container image alongside your Workers.`),cf(),Aa(111,`h4`,16)(112,`span`),bT(113,`Can Nest run on a Worker?`),cf()(),Aa(114,`p`),bT(115,`It can, but Nest doesn't officially support it, and it's rarely the best of both. Workers implement `),Aa(116,`code`),bT(117,`node:http`),cf(),bT(118,`, so the Express adapter starts in `),Aa(119,`code`),bT(120,`workerd`),cf(),bT(121,`. An application with a controller and a provider comes to about 500 KB gzipped. What to expect:`),cf(),Aa(122,`ul`)(123,`li`)(124,`strong`),bT(125,`Dependency injection needs `),Aa(126,`code`),bT(127,`@Inject()`),cf(),bT(128,`.`),cf(),bT(129,` Workers bundle with esbuild, which doesn't emit decorator metadata, so a dependency needs its token named, as with `),Aa(130,`code`),bT(131,`constructor(@Inject(TodosService) todos: TodosService)`),cf(),bT(132,`.`),cf(),Aa(133,`li`)(134,`strong`),bT(135,`Optional packages have to be aliased.`),cf(),bT(136,` Nest loads packages such as `),Aa(137,`code`),bT(138,`class-validator`),cf(),bT(139,` and `),Aa(140,`code`),bT(141,`@nestjs/microservices`),cf(),bT(142,` only if they're installed, and the bundler tries to resolve them anyway.`),cf(),Aa(143,`li`)(144,`strong`),bT(145,`The application bootstraps in every new isolate`),cf(),bT(146,`, and that time counts against the startup limit. State in memory isn't shared between isolates.`),cf(),Aa(147,`li`)(148,`strong`),bT(149,`Some features aren't available`),cf(),bT(150,`, such as `),Aa(151,`a`,8),bT(152,`WebSocket gateways`),cf(),bT(153,`, `),Aa(154,`a`,17),bT(155,`shutdown hooks`),cf(),bT(156,` and TCP `),Aa(157,`a`,18),bT(158,`microservice transports`),cf(),bT(159,`.`),cf()(),Aa(160,`p`),bT(161,`If you want Workers for most of the backend, a framework written for them is a better fit. If you want Nest, run it where it gets a long-running process, and put a Worker in front.`),cf()(),Aa(162,`a`,19),Wa(163,`i`,20),Aa(164,`span`),bT(165,`Edit on GitHub`),cf()()()),o&2){let f=tT(99);zC(96),hf(` `,jT(97,1,`worker`,f.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return i})();var T=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-errors`]],features:[xy],decls:238,vars:2,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`common-errors`],[`appAnchor`,``,`id`,`cannot-resolve-dependency-error`],[1,`info`],[`href`,`/devtools/overview#debugging-cannot-resolve-dependency-errors`],[1,`language-bash`],[`href`,`/fundamentals/custom-providers#di-fundamentals`],[`href`,`/faq/common-errors#circular-dependency-error`],[`routerLink`,`/fundamentals/custom-providers`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export`],[1,`language-text`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://classic.yarnpkg.com/blog/2018/02/15/nohoist`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://pnpm.io/package_json#dependenciesmetainjected`],[`appAnchor`,``,`id`,`circular-dependency-error`],[`routerLink`,`/fundamentals/circular-dependency`],[`appAnchor`,``,`id`,`debugging-dependency-errors`],[`src`,`/assets/injector_logs.png`],[`appAnchor`,``,`id`,`file-change-detected-loops-endlessly`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://devblogs.microsoft.com/typescript/announcing-typescript-4-9/#file-watching-now-uses-file-system-events`],[1,`language-json`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.typescriptlang.org/tsconfig#watch-watchFile`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/errors.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Common errors`),cf(),Aa(5,`p`),bT(6,`While learning and working with NestJS, you may run into the errors described on this page.`),cf(),Aa(7,`h4`,4)(8,`span`),bT(9,`"Cannot resolve dependency" error`),cf()(),Aa(10,`blockquote`,5)(11,`strong`),bT(12,`Hint`),cf(),Aa(13,`a`,6),bT(14,`NestJS Devtools`),cf(),bT(15,` can help you resolve the "Cannot resolve dependency" error.
`),cf(),Aa(16,`p`),bT(17,`The most common error message says that Nest can't resolve the dependencies of a provider. It usually looks like this:`),cf(),Aa(18,`pre`)(19,`code`,7),bT(20,`
Nest can't resolve dependencies of the <provider> (?). Please make sure that the argument <unknown_token> at index [<index>] is available in the <module> module.

Potential solutions:
- Is <module> a valid NestJS module?
- If <unknown_token> is a provider, is it part of the current <module>?
- If <unknown_token> is exported from a separate @Module, is that module imported within <module>?
  @Module({
    imports: [ /* the Module containing <unknown_token> */ ]
  })

For more common dependency resolution issues, see: /faq/common-errors
`),cf()(),Aa(21,`p`),bT(22,`The most common cause is that `),Aa(23,`code`),bT(24,`<unknown_token>`),cf(),bT(25,` is not available in `),Aa(26,`code`),bT(27,`<module>`),cf(),bT(28,`: it is neither listed in the module's `),Aa(29,`code`),bT(30,`providers`),cf(),bT(31,` array nor exported by one of the modules in its `),Aa(32,`code`),bT(33,`imports`),cf(),bT(34,` array. Make sure the provider is registered and follows `),Aa(35,`a`,8),bT(36,`standard NestJS provider practices`),cf(),bT(37,`.`),cf(),Aa(38,`p`),bT(39,`Another common mistake is putting a provider in a module's `),Aa(40,`code`),bT(41,`imports`),cf(),bT(42,` array. If the class is decorated with `),Aa(43,`code`),bT(44,`@Injectable()`),cf(),bT(45,`, Nest detects this at startup and throws an error stating that the class cannot appear in the "imports" array; move it to the `),Aa(46,`code`),bT(47,`providers`),cf(),bT(48,` array instead.`),cf(),Aa(49,`p`),bT(50,`When you run into this error, open the module named in the error message and review its `),Aa(51,`code`),bT(52,`providers`),cf(),bT(53,`. For each provider in the `),Aa(54,`code`),bT(55,`providers`),cf(),bT(56,` array, make sure the module has access to all of its dependencies. Providers are often duplicated in a feature module and the root module, which makes Nest try to instantiate the provider twice. In most cases, you should remove the duplicate and add the module that contains the `),Aa(57,`code`),bT(58,`<provider>`),cf(),bT(59,` to the root module's `),Aa(60,`code`),bT(61,`imports`),cf(),bT(62,` array instead.`),cf(),Aa(63,`p`),bT(64,`Also make sure you didn't inject a provider into itself: self-injection is not allowed in NestJS. When this happens, `),Aa(65,`code`),bT(66,`<unknown_token>`),cf(),bT(67,` is usually equal to `),Aa(68,`code`),bT(69,`<provider>`),cf(),bT(70,`.`),cf(),Aa(71,`p`),bT(72,`If the dependency at the reported index resolves to `),Aa(73,`code`),bT(74,`undefined`),cf(),bT(75,` or `),Aa(76,`code`),bT(77,`Object`),cf(),bT(78,` at runtime, the error message omits the token name, refers to the `),Aa(79,`strong`),bT(80,`current`),cf(),bT(81,` module, and lists a different set of potential solutions:`),cf(),Aa(82,`pre`)(83,`code`,7),bT(84,`
Nest can't resolve dependencies of the <provider> (?). Please make sure that the argument at index [<index>] is available in the current module.

Potential solutions:
- The dependency at index [<index>] appears to be undefined at runtime
- This commonly occurs when using 'import type' instead of 'import' for injectable classes
...
`),cf()(),Aa(85,`p`),bT(86,`This usually has one of the following causes:`),cf(),Aa(87,`ol`)(88,`li`)(89,`strong`),bT(90,`A circular file import.`),cf(),bT(91,` Unlike the `),Aa(92,`a`,9),bT(93,`circular dependency`),cf(),bT(94,` described below, the providers don't depend on each other in their constructors; two files end up importing each other. For example, a module file declares a token and imports a provider, and the provider imports that token constant from the module file. If you use barrel files, make sure your barrel imports don't create such circular imports.`),cf(),Aa(95,`li`)(96,`strong`),bT(97,`Injecting by a type or an interface.`),cf(),bT(98,` Types and interfaces don't exist at runtime, so Nest can't use them as injection tokens. Inject the class reference instead, or use a custom token with the `),Aa(99,`code`),bT(100,`@Inject()`),cf(),bT(101,` decorator (see `),Aa(102,`a`,10),bT(103,`custom providers`),cf(),bT(104,`).`),cf(),Aa(105,`li`)(106,`strong`),bT(107,`Type-only imports.`),cf(),bT(108,` For class-based providers, import the concrete class instead of only its type with the `),Aa(109,`a`,11)(110,`code`),bT(111,`import type ...`),cf()(),bT(112,` syntax.`),cf()(),Aa(113,`p`),Wa(114,`app-banner-observe`),cf(),Aa(115,`p`),bT(116,`In a `),Aa(117,`strong`),bT(118,`monorepo setup`),cf(),bT(119,`, you may see the same error for the core `),Aa(120,`code`),bT(121,`ModuleRef`),cf(),bT(122,` provider as the `),Aa(123,`code`),bT(124,`<unknown_token>`),cf(),bT(125,`:`),cf(),Aa(126,`pre`)(127,`code`,7),bT(128,`
Nest can't resolve dependencies of the <provider> (?).
Please make sure that the argument ModuleRef at index [<index>] is available in the <module> module.
...
`),cf()(),Aa(129,`p`),bT(130,`This usually happens when your project loads two copies of the `),Aa(131,`code`),bT(132,`@nestjs/core`),cf(),bT(133,` package, like this:`),cf(),Aa(134,`pre`)(135,`code`,12),bT(136,`
.
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 apps
\u2502   \u2514\u2500\u2500 api
\u2502       \u2514\u2500\u2500 node_modules
\u2502           \u2514\u2500\u2500 @nestjs/bull
\u2502               \u2514\u2500\u2500 node_modules
\u2502                   \u2514\u2500\u2500 @nestjs/core
\u2514\u2500\u2500 node_modules
    \u251C\u2500\u2500 (other packages)
    \u2514\u2500\u2500 @nestjs/core
`),cf()(),Aa(137,`p`),bT(138,`Solutions:`),cf(),Aa(139,`ul`)(140,`li`),bT(141,`For `),Aa(142,`strong`),bT(143,`Yarn`),cf(),bT(144,` workspaces, use the `),Aa(145,`a`,13),bT(146,`nohoist feature`),cf(),bT(147,` to prevent hoisting the `),Aa(148,`code`),bT(149,`@nestjs/core`),cf(),bT(150,` package.`),cf(),Aa(151,`li`),bT(152,`For `),Aa(153,`strong`),bT(154,`pnpm`),cf(),bT(155,` workspaces, declare `),Aa(156,`code`),bT(157,`@nestjs/core`),cf(),bT(158,` as a peer dependency in your other module, and set `),Aa(159,`code`),bT(160),cf(),bT(161,` in the package.json of the app that imports the module. See `),Aa(162,`a`,14),bT(163,`dependenciesMeta.injected`),cf(),bT(164,` in the pnpm documentation.`),cf()(),Aa(165,`h4`,15)(166,`span`),bT(167,`"Circular dependency" error`),cf()(),Aa(168,`p`),bT(169,`Occasionally, you'll find it difficult to avoid `),Aa(170,`a`,16),bT(171,`circular dependencies`),cf(),bT(172,` in your application, and you'll need to help Nest resolve them. Errors caused by circular dependencies look like this:`),cf(),Aa(173,`pre`)(174,`code`,7),bT(175,`
Nest cannot create the <module> instance.
The module at index [<index>] of the <module> "imports" array is undefined.

Potential causes:
- A circular dependency between modules. Use forwardRef() to avoid it. Read more: /fundamentals/circular-dependency
- The module at index [<index>] is of type "undefined". Check your import statements and the type of the module.

Scope [<module_import_chain>]
# example chain AppModule -> FooModule
`),cf()(),Aa(176,`p`),bT(177,`Circular dependencies can arise from providers that depend on each other, or from TypeScript files that depend on each other for constants (e.g., a module file exports a constant that a service file imports). In the latter case, move the constants to a separate file. In the former case, follow the `),Aa(178,`a`,16),bT(179,`circular dependency`),cf(),bT(180,` guide and make sure that both the modules `),Aa(181,`strong`),bT(182,`and`),cf(),bT(183,` the providers are wrapped with `),Aa(184,`code`),bT(185,`forwardRef()`),cf(),bT(186,`.`),cf(),Aa(187,`h4`,17)(188,`span`),bT(189,`Debugging dependency errors`),cf()(),Aa(190,`p`),bT(191,`Besides verifying your dependencies manually, you can set the `),Aa(192,`code`),bT(193,`NEST_DEBUG`),cf(),bT(194,` environment variable to any non-empty string to get extra logging while Nest resolves the application's dependencies.`),cf(),Aa(195,`figure`),Wa(196,`img`,18),cf(),Aa(197,`p`),bT(198,`In the image above, the string in yellow is the host class of the dependency being injected, the string in blue is the name (or injection token) of the injected dependency, and the string in purple is the module in which Nest searches for the dependency. With this output, you can usually trace the dependency resolution and find out why injection fails.`),cf(),Aa(199,`h4`,19)(200,`span`),bT(201,`"File change detected" loops endlessly`),cf()(),Aa(202,`p`),bT(203,`Windows users on TypeScript 4.9 or later may encounter this problem. When you run your application in watch mode (e.g., `),Aa(204,`code`),bT(205,`npm run start:dev`),cf(),bT(206,`), you see an endless loop of the following log messages:`),cf(),Aa(207,`pre`)(208,`code`,7),bT(209,`
XX:XX:XX AM - File change detected. Starting incremental compilation...
XX:XX:XX AM - Found 0 errors. Watching for file changes.
`),cf()(),Aa(210,`p`),bT(211,`When you start your application in watch mode with the Nest CLI, it runs the TypeScript compiler in watch mode (the equivalent of `),Aa(212,`code`),bT(213,`tsc --watch`),cf(),bT(214,`). TypeScript 4.9 introduced a `),Aa(215,`a`,20),bT(216,`new strategy`),cf(),bT(217,` for detecting file changes, which is the likely cause of this problem.
To fix it, add the following setting to your `),Aa(218,`code`),bT(219,`tsconfig.json`),cf(),bT(220,` file, after the `),Aa(221,`code`),bT(222,`"compilerOptions"`),cf(),bT(223,` option:`),cf(),Aa(224,`pre`)(225,`code`,21),bT(226,`
  "watchOptions": {
    "watchFile": "fixedPollingInterval"
  }
`),cf()(),Aa(227,`p`),bT(228,`This tells TypeScript to poll for file changes instead of using file system events (the default since 4.9), which can cause issues on some machines.
To learn more, see the `),Aa(229,`a`,22)(230,`code`),bT(231,`watchFile`),cf(),bT(232,` option`),cf(),bT(233,` in the TypeScript documentation.`),cf()(),Aa(234,`a`,23),Wa(235,`i`,24),Aa(236,`span`),bT(237,`Edit on GitHub`),cf()()()),o&2&&(zC(160),Ky(`"dependenciesMeta": `,`{`,`"other-module-name": `,`{`,`"injected": true }}`))},dependencies:[Lt,Jc,l],encapsulation:2})}return i})();var N=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-global-prefix`]],features:[xy],decls:108,vars:1,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`global-prefix`],[1,`language-typescript`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/pillarjs/path-to-regexp#parameters`],[`appAnchor`,``,`id`,`excluded-routes-and-unmatched-requests`],[`routerLink`,`/http/versioning`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/global-prefix.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Global prefix`),cf(),Aa(5,`p`),bT(6,`To set a prefix for `),Aa(7,`strong`),bT(8,`every route`),cf(),bT(9,` registered in an HTTP application, call the `),Aa(10,`code`),bT(11,`setGlobalPrefix()`),cf(),bT(12,` method on the `),Aa(13,`code`),bT(14,`INestApplication`),cf(),bT(15,` instance.`),cf(),Aa(16,`app-copy-button`)(17,`pre`)(18,`code`,4),bT(19,`
const app = await NestFactory.create(AppModule);
app.setGlobalPrefix('v1');
`),cf()()(),Aa(20,`p`),bT(21,`To exclude routes from the global prefix, use the `),Aa(22,`code`),bT(23,`exclude`),cf(),bT(24,` option:`),cf(),Aa(25,`app-copy-button`)(26,`pre`)(27,`code`,4),bT(28,`
app.setGlobalPrefix('v1', {
  exclude: [{ path: 'health', method: RequestMethod.GET }],
});
`),cf()()(),Aa(29,`p`),bT(30,`Alternatively, you can specify a route as a string, which excludes it for every request method:`),cf(),Aa(31,`app-copy-button`)(32,`pre`)(33,`code`,4),bT(34,`
app.setGlobalPrefix('v1', { exclude: ['cats'] });
`),cf()()(),Aa(35,`blockquote`,5)(36,`strong`),bT(37,`Hint`),cf(),bT(38,` The `),Aa(39,`code`),bT(40,`path`),cf(),bT(41,` property supports wildcard parameters through the `),Aa(42,`a`,6),bT(43,`path-to-regexp`),cf(),bT(44,` package. Bare wildcard asterisks (`),Aa(45,`code`),bT(46,`*`),cf(),bT(47,`) are deprecated; use parameters (`),Aa(48,`code`),bT(49,`:param`),cf(),bT(50,`) or named wildcards (`),Aa(51,`code`),bT(52,`*splat`),cf(),bT(53,`) instead. A named wildcard requires at least one extra segment, so `),Aa(54,`code`),bT(55,`health/*splat`),cf(),bT(56,` excludes `),Aa(57,`code`),bT(58,`/health/status`),cf(),bT(59,` but not `),Aa(60,`code`),bT(61,`/health`),cf(),bT(62,` itself. To exclude both, wrap the wildcard in braces: `),Aa(63,`code`),bT(64),cf(),bT(65,`.
`),cf(),Aa(66,`h4`,7)(67,`span`),bT(68,`Excluded routes and unmatched requests`),cf()(),Aa(69,`p`),bT(70,`Excluded routes are registered outside the prefix, but Nest still handles requests to them that don't match a handler. For example, with `),Aa(71,`code`),bT(72,`exclude: ['health']`),cf(),bT(73,` and only a `),Aa(74,`code`),bT(75,`GET /health`),cf(),bT(76,` handler, a `),Aa(77,`code`),bT(78,`POST /health`),cf(),bT(79,` request goes through your exception filters and gets Nest's standard `),Aa(80,`code`),bT(81,`404`),cf(),bT(82,` response.`),cf(),Aa(83,`p`),bT(84,`With the Express adapter, a request to a path that is neither under the prefix nor excluded never reaches Nest: Express answers it with its default `),Aa(85,`code`),bT(86,`404`),cf(),bT(87,` page. The Fastify adapter passes every unmatched request to Nest.`),cf(),Aa(88,`blockquote`,5)(89,`strong`),bT(90,`Hint`),cf(),bT(91,` With `),Aa(92,`a`,8),bT(93,`URI versioning`),cf(),bT(94,` enabled, exclusions are matched without the version segment, and an excluded route keeps it. For example, `),Aa(95,`code`),bT(96,`exclude: ['health']`),cf(),bT(97,` with `),Aa(98,`code`),bT(99,`defaultVersion: '1'`),cf(),bT(100,` serves the route at `),Aa(101,`code`),bT(102,`/v1/health`),cf(),bT(103,`.
`),cf()(),Aa(104,`a`,9),Wa(105,`i`,10),Aa(106,`span`),bT(107,`Edit on GitHub`),cf()()()),o&2&&(zC(64),hf(`health/`,`{`,`*splat}`))},dependencies:[ln],encapsulation:2})}return i})();var F=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-http-adapter`]],features:[xy],decls:133,vars:4,consts:[[`contentReference`,``],[`app1c82115d753e12df245cf8cf6b7cb90ade09c051`,``],[`app20c1a7a684c57e2de06d1df1281c07fe26f06f04`,``],[1,`content`],[1,`content-inner`],[`id`,`http-adapter`],[`appAnchor`,``,`id`,`outside-application-context-strategy`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`as-injectable`],[1,`info`],[`appAnchor`,``,`id`,`listening-event`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/http-adapter.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){if(o&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`HTTP adapter`),cf(),Aa(5,`p`),bT(6,`Occasionally, you may need to access the underlying HTTP server, either from within the Nest application context or from outside of it.`),cf(),Aa(7,`p`),bT(8,`Every native (platform-specific) HTTP server or library instance (e.g., Express or Fastify) is wrapped in an `),Aa(9,`strong`),bT(10,`adapter`),cf(),bT(11,`. The adapter is registered as a globally available provider, so you can retrieve it from the application context or inject it into other providers.`),cf(),Aa(12,`h4`,6)(13,`span`),bT(14,`Outside application context strategy`),cf()(),Aa(15,`p`),bT(16,`To get a reference to the `),Aa(17,`code`),bT(18,`HttpAdapter`),cf(),bT(19,` from outside of the application context, call the `),Aa(20,`code`),bT(21,`getHttpAdapter()`),cf(),bT(22,` method:`),cf(),Aa(23,`app-copy-button`,7)(24,`span`,8),Wa(25,`app-tabs`,null,1),cf(),Aa(27,`pre`)(28,`code`,9),bT(29,`
const app = await NestFactory.create(AppModule);
const httpAdapter = app.getHttpAdapter();
`),cf()()(),Aa(30,`h4`,10)(31,`span`),bT(32,`As injectable`),cf()(),Aa(33,`p`),bT(34,`To get a reference to the `),Aa(35,`code`),bT(36,`HttpAdapterHost`),cf(),bT(37,` from within the application context, inject it like any other provider (e.g., using constructor injection):`),cf(),Aa(38,`app-copy-button`,7)(39,`span`,8),Wa(40,`app-tabs`,null,2),cf(),Aa(42,`pre`)(43,`code`,9),bT(44,`
export class CatsService {
  constructor(private adapterHost: HttpAdapterHost) {}
}
`),cf()(),Aa(45,`pre`)(46,`code`,9),bT(47,`
@Dependencies(HttpAdapterHost)
export class CatsService {
  constructor(adapterHost) {
    this.adapterHost = adapterHost;
  }
}
`),cf()()(),Aa(48,`blockquote`,11)(49,`strong`),bT(50,`Hint`),cf(),bT(51,` The `),Aa(52,`code`),bT(53,`HttpAdapterHost`),cf(),bT(54,` is imported from the `),Aa(55,`code`),bT(56,`@nestjs/core`),cf(),bT(57,` package.
`),cf(),Aa(58,`p`),bT(59,`The `),Aa(60,`code`),bT(61,`HttpAdapterHost`),cf(),bT(62,` is `),Aa(63,`strong`),bT(64,`not`),cf(),bT(65,` an actual `),Aa(66,`code`),bT(67,`HttpAdapter`),cf(),bT(68,`. To get the actual `),Aa(69,`code`),bT(70,`HttpAdapter`),cf(),bT(71,` instance, read its `),Aa(72,`code`),bT(73,`httpAdapter`),cf(),bT(74,` property:`),cf(),Aa(75,`app-copy-button`)(76,`pre`)(77,`code`,9),bT(78,`
const adapterHost = app.get(HttpAdapterHost);
const httpAdapter = adapterHost.httpAdapter;
`),cf()()(),Aa(79,`p`),bT(80,`The `),Aa(81,`code`),bT(82,`httpAdapter`),cf(),bT(83,` is the HTTP adapter instance that wraps the underlying framework. It is an instance of `),Aa(84,`code`),bT(85,`ExpressAdapter`),cf(),bT(86,`, `),Aa(87,`code`),bT(88,`FastifyAdapter`),cf(),bT(89,`, or `),Aa(90,`code`),bT(91,`NodeAdapter`),cf(),bT(92,` (all of them extend `),Aa(93,`code`),bT(94,`AbstractHttpAdapter`),cf(),bT(95,`).`),cf(),Aa(96,`p`),bT(97,`The adapter object exposes several methods for interacting with the HTTP server. To access the library instance (e.g., the Express instance) directly, call the `),Aa(98,`code`),bT(99,`getInstance()`),cf(),bT(100,` method:`),cf(),Aa(101,`app-copy-button`)(102,`pre`)(103,`code`,9),bT(104,`
const instance = httpAdapter.getInstance();
`),cf()()(),Aa(105,`h4`,12)(106,`span`),bT(107,`Listening event`),cf()(),Aa(108,`p`),bT(109,`To run code when the server starts listening for incoming requests, subscribe to the `),Aa(110,`code`),bT(111,`listen$`),cf(),bT(112,` stream:`),cf(),Aa(113,`app-copy-button`)(114,`pre`)(115,`code`,9),bT(116,`
this.httpAdapterHost.listen$.subscribe(() =>
  console.log('HTTP server is listening'),
);
`),cf()()(),Aa(117,`p`),bT(118,`The `),Aa(119,`code`),bT(120,`HttpAdapterHost`),cf(),bT(121,` also exposes a `),Aa(122,`code`),bT(123,`listening`),cf(),bT(124,` boolean property that indicates whether the server is currently listening:`),cf(),Aa(125,`app-copy-button`)(126,`pre`)(127,`code`,9),bT(128,`
if (this.httpAdapterHost.listening) {
  console.log('HTTP server is listening');
}
`),cf()()()(),Aa(129,`a`,13),Wa(130,`i`,14),Aa(131,`span`),bT(132,`Edit on GitHub`),cf()()()),o&2){let f=tT(41);zC(42),zy(`hide`,f.isJsActive),zC(3),zy(`hide`,!f.isJsActive)}},dependencies:[Lt,ln,u],encapsulation:2})}return i})();var P=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-hybrid-application`]],features:[xy],decls:173,vars:4,consts:[[`contentReference`,``],[`app73c33f2fe41da9177e2edf8a9dffb7b4aa86ac1b`,``],[1,`content`],[1,`content-inner`],[`id`,`hybrid-application`],[1,`language-typescript`],[1,`info`],[1,`warning`],[`routerLink`,`/microservices/custom-transport`],[1,`with-heading`],[1,`filename`],[`appAnchor`,``,`id`,`sharing-configuration`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/hybrid-application.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){if(o&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Hybrid application`),cf(),Aa(5,`p`),bT(6,`A hybrid application listens for requests from two or more different sources. It can combine an HTTP server with a microservice listener, or combine several different microservice listeners. The `),Aa(7,`code`),bT(8,`createMicroservice()`),cf(),bT(9,` method doesn't support multiple servers, so in this case you create and start each microservice manually. To do this, connect `),Aa(10,`code`),bT(11,`INestMicroservice`),cf(),bT(12,` instances to the `),Aa(13,`code`),bT(14,`INestApplication`),cf(),bT(15,` instance with the `),Aa(16,`code`),bT(17,`connectMicroservice()`),cf(),bT(18,` method.`),cf(),Aa(19,`app-copy-button`)(20,`pre`)(21,`code`,5),bT(22,`
const app = await NestFactory.create(AppModule);
const microservice = app.connectMicroservice<MicroserviceOptions>({
  transport: Transport.TCP,
});

await app.startAllMicroservices();
await app.listen(3001);
`),cf()()(),Aa(23,`blockquote`,6)(24,`strong`),bT(25,`Hint`),cf(),bT(26,` The `),Aa(27,`code`),bT(28,`app.listen(port)`),cf(),bT(29,` method starts an HTTP server on the specified port. If your application doesn't handle HTTP requests, use the `),Aa(30,`code`),bT(31,`app.init()`),cf(),bT(32,` method instead.
`),cf(),Aa(33,`blockquote`,7)(34,`strong`),bT(35,`Notice`),cf(),bT(36,` The order of these calls matters. With `),Aa(37,`code`),bT(38,`await app.startAllMicroservices()`),cf(),bT(39,` first (as above), the microservices begin consuming messages `),Aa(40,`strong`),bT(41,`before`),cf(),bT(42,` the application's lifecycle hooks (such as `),Aa(43,`code`),bT(44,`onModuleInit`),cf(),bT(45,` and `),Aa(46,`code`),bT(47,`onApplicationBootstrap`),cf(),bT(48,`) have completed. Call `),Aa(49,`code`),bT(50,`app.listen()`),cf(),bT(51,` (or `),Aa(52,`code`),bT(53,`app.init()`),cf(),bT(54,`) before `),Aa(55,`code`),bT(56,`startAllMicroservices()`),cf(),bT(57,` if your handlers must not receive messages until every module has fully initialized.
`),cf(),Aa(58,`p`),bT(59,`To connect multiple microservice instances, call `),Aa(60,`code`),bT(61,`connectMicroservice()`),cf(),bT(62,` once for each microservice:`),cf(),Aa(63,`app-copy-button`)(64,`pre`)(65,`code`,5),bT(66,`
const app = await NestFactory.create(AppModule);
// microservice #1
const microserviceTcp = app.connectMicroservice<MicroserviceOptions>({
  transport: Transport.TCP,
  options: {
    port: 3002,
  },
});
// microservice #2
const microserviceRedis = app.connectMicroservice<MicroserviceOptions>({
  transport: Transport.REDIS,
  options: {
    host: 'localhost',
    port: 6379,
  },
});

await app.startAllMicroservices();
await app.listen(3001);
`),cf()()(),Aa(67,`p`),bT(68,`In a hybrid application with multiple microservices, you can bind `),Aa(69,`code`),bT(70,`@MessagePattern()`),cf(),bT(71,` to a single transport strategy (for example, NATS) by passing a second argument that identifies the transport. For the built-in strategies, this is a value of the `),Aa(72,`code`),bT(73,`Transport`),cf(),bT(74,` enum; for a `),Aa(75,`a`,8),bT(76,`custom transporter`),cf(),bT(77,`, it is the `),Aa(78,`code`),bT(79,`transportId`),cf(),bT(80,` symbol of its server class.`),cf(),Aa(81,`app-copy-button`,9)(82,`span`,10),Wa(83,`app-tabs`,null,1),cf(),Aa(85,`pre`)(86,`code`,5),bT(87,`
@MessagePattern('time.us.*', Transport.NATS)
getDate(@Payload() data: number[], @Ctx() context: NatsContext) {
  console.log(\`Subject: \${context.getSubject()}\`); // e.g. "time.us.east"
  return new Date().toLocaleTimeString(...);
}
@MessagePattern({ cmd: 'time.us' }, Transport.TCP)
getTCPDate(@Payload() data: number[]) {
  return new Date().toLocaleTimeString(...);
}
@MessagePattern('topic.time.us', XYZServer.Transport) // XYZServer is a custom transporter
getXYZDate(@Payload() data: number[]) {
  return new Date().toLocaleTimeString(...);
}
`),cf()(),Aa(88,`pre`)(89,`code`,5),bT(90,`
@Bind(Payload(), Ctx())
@MessagePattern('time.us.*', Transport.NATS)
getDate(data, context) {
  console.log(\`Subject: \${context.getSubject()}\`); // e.g. "time.us.east"
  return new Date().toLocaleTimeString(...);
}
@Bind(Payload(), Ctx())
@MessagePattern({ cmd: 'time.us' }, Transport.TCP)
getTCPDate(data, context) {
  return new Date().toLocaleTimeString(...);
}

@Bind(Payload())
@MessagePattern('topic.time.us', XYZServer.Transport)
getXYZDate(data) {
  return new Date().toLocaleTimeString(...);
}
`),cf()()(),Aa(91,`blockquote`,6)(92,`strong`),bT(93,`Hint`),cf(),Aa(94,`code`),bT(95,`@Payload()`),cf(),bT(96,`, `),Aa(97,`code`),bT(98,`@Ctx()`),cf(),bT(99,`, `),Aa(100,`code`),bT(101,`Transport`),cf(),bT(102,` and `),Aa(103,`code`),bT(104,`NatsContext`),cf(),bT(105,` are imported from `),Aa(106,`code`),bT(107,`@nestjs/microservices`),cf(),bT(108,`. `),Aa(109,`code`),bT(110,`XYZServer.Transport`),cf(),bT(111,` here stands for the `),Aa(112,`code`),bT(113,`transportId`),cf(),bT(114,` symbol exposed by the custom transporter.
`),cf(),Aa(115,`h4`,11)(116,`span`),bT(117,`Sharing configuration`),cf()(),Aa(118,`p`),bT(119,`By default, connected microservices don't inherit the global pipes, interceptors, guards, and filters configured for the main (HTTP-based) application. This applies both to enhancers registered with the `),Aa(120,`code`),bT(121,`useGlobal*()`),cf(),bT(122,` methods and to those registered as providers with the `),Aa(123,`code`),bT(124,`APP_PIPE`),cf(),bT(125,`, `),Aa(126,`code`),bT(127,`APP_INTERCEPTOR`),cf(),bT(128,`, `),Aa(129,`code`),bT(130,`APP_GUARD`),cf(),bT(131,`, and `),Aa(132,`code`),bT(133,`APP_FILTER`),cf(),bT(134,` tokens.
To inherit this configuration, set the `),Aa(135,`code`),bT(136,`inheritAppConfig`),cf(),bT(137,` property in the options object passed as the second argument of `),Aa(138,`code`),bT(139,`connectMicroservice()`),cf(),bT(140,`:`),cf(),Aa(141,`app-copy-button`)(142,`pre`)(143,`code`,5),bT(144,`
const microservice = app.connectMicroservice<MicroserviceOptions>(
  {
    transport: Transport.TCP,
  },
  { inheritAppConfig: true },
);
`),cf()()(),Aa(145,`blockquote`,6)(146,`strong`),bT(147,`Hint`),cf(),bT(148,` A connected microservice registers its message handlers as soon as `),Aa(149,`code`),bT(150,`connectMicroservice()`),cf(),bT(151,` is called. When you use `),Aa(152,`code`),bT(153,`inheritAppConfig`),cf(),bT(154,`, call `),Aa(155,`code`),bT(156,`app.useGlobalPipes()`),cf(),bT(157,`, `),Aa(158,`code`),bT(159,`app.useGlobalGuards()`),cf(),bT(160,`, and the other `),Aa(161,`code`),bT(162,`useGlobal*()`),cf(),bT(163,` methods `),Aa(164,`strong`),bT(165,`before`),cf(),Aa(166,`code`),bT(167,`connectMicroservice()`),cf(),bT(168,`, otherwise the enhancers they register won't apply to the microservice's handlers.
`),cf()(),Aa(169,`a`,12),Wa(170,`i`,13),Aa(171,`span`),bT(172,`Edit on GitHub`),cf()()()),o&2){let f=tT(84);zC(85),zy(`hide`,f.isJsActive),zC(3),zy(`hide`,!f.isJsActive)}},dependencies:[Jc,ln,u,Lt],encapsulation:2})}return i})();var H=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-keep-alive-connections`]],features:[xy],decls:54,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`keep-alive-connections`],[1,`info`],[`appAnchor`,``,`id`,`usage`],[1,`language-typescript`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/keep-alive-connections.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Keep alive connections`),cf(),Aa(5,`p`),bT(6,`By default, the NestJS HTTP adapters wait until responses have finished before closing the application. Sometimes this behavior is unwanted or unexpected: some requests use `),Aa(7,`code`),bT(8,`Connection: Keep-Alive`),cf(),bT(9,` headers and keep their connections open for a long time.`),cf(),Aa(10,`p`),bT(11,`If you want your application to always exit without waiting for these connections to end, enable the `),Aa(12,`code`),bT(13,`forceCloseConnections`),cf(),bT(14,` option when creating your NestJS application.`),cf(),Aa(15,`blockquote`,4)(16,`strong`),bT(17,`Hint`),cf(),bT(18,` Most users don't need this option. The typical symptom that you do is an application that doesn't exit when you expect it to, usually with `),Aa(19,`code`),bT(20,`app.enableShutdownHooks()`),cf(),bT(21,` enabled, and most often during development when running with `),Aa(22,`code`),bT(23,`--watch`),cf(),bT(24,`.
`),cf(),Aa(25,`h4`,5)(26,`span`),bT(27,`Usage`),cf()(),Aa(28,`p`),bT(29,`In your `),Aa(30,`code`),bT(31,`main.ts`),cf(),bT(32,` file, enable the option when creating your NestJS application:`),cf(),Aa(33,`app-copy-button`)(34,`pre`)(35,`code`,6),bT(36,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    forceCloseConnections: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}

await bootstrap();
`),cf()()(),Aa(37,`blockquote`,4)(38,`strong`),bT(39,`Note`),cf(),bT(40,` The Express, Fastify, and Node adapters all implement the `),Aa(41,`code`),bT(42,`forceCloseConnections`),cf(),bT(43,` application option. With Fastify, this requires NestJS v12.1 or later. In earlier versions, pass Fastify's own `),Aa(44,`code`),bT(45,`forceCloseConnections`),cf(),bT(46,` server option to the `),Aa(47,`code`),bT(48,`FastifyAdapter`),cf(),bT(49,` constructor instead.
`),cf()(),Aa(50,`a`,7),Wa(51,`i`,8),Aa(52,`span`),bT(53,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln],encapsulation:2})}return i})();var q=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-multiple-servers`]],features:[xy],decls:80,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`https`],[1,`language-typescript`],[`appAnchor`,``,`id`,`multiple-simultaneous-servers`],[1,`info`],[1,`warning`],[`routerLink`,`/graphql/subscriptions`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/multiple-servers.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`HTTPS`),cf(),Aa(5,`p`),bT(6,`To create an application that uses the HTTPS protocol, set the `),Aa(7,`code`),bT(8,`httpsOptions`),cf(),bT(9,` property in the options object passed to the `),Aa(10,`code`),bT(11,`NestFactory.create()`),cf(),bT(12,` method:`),cf(),Aa(13,`app-copy-button`)(14,`pre`)(15,`code`,4),bT(16,`
const httpsOptions = {
  key: fs.readFileSync('./secrets/private-key.pem'),
  cert: fs.readFileSync('./secrets/public-certificate.pem'),
};
const app = await NestFactory.create(AppModule, {
  httpsOptions,
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(17,`p`),bT(18,`If you use the `),Aa(19,`code`),bT(20,`FastifyAdapter`),cf(),bT(21,`, create the application as follows:`),cf(),Aa(22,`app-copy-button`)(23,`pre`)(24,`code`,4),bT(25,`
const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter({ https: httpsOptions }),
);
`),cf()()(),Aa(26,`h4`,5)(27,`span`),bT(28,`Multiple simultaneous servers`),cf()(),Aa(29,`p`),bT(30,`The following recipe shows how to create a Nest application that listens on multiple ports simultaneously (for example, on an HTTP port and an HTTPS port):`),cf(),Aa(31,`app-copy-button`)(32,`pre`)(33,`code`,4),bT(34,`
const httpsOptions = {
  key: fs.readFileSync('./secrets/private-key.pem'),
  cert: fs.readFileSync('./secrets/public-certificate.pem'),
};

const server = express();
const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
await app.init();

const httpServer = http.createServer(server).listen(3000);
const httpsServer = https.createServer(httpsOptions, server).listen(443);
`),cf()()(),Aa(35,`p`),bT(36,`Because we created the servers ourselves with `),Aa(37,`code`),bT(38,`http.createServer()`),cf(),bT(39,` and `),Aa(40,`code`),bT(41,`https.createServer()`),cf(),bT(42,`, Nest doesn't close them when you call `),Aa(43,`code`),bT(44,`app.close()`),cf(),bT(45,` or when the process receives a termination signal. You need to close them yourself, for example with a provider that implements the `),Aa(46,`code`),bT(47,`OnApplicationShutdown`),cf(),bT(48,` hook:`),cf(),Aa(49,`app-copy-button`)(50,`pre`)(51,`code`,4),bT(52,`
@Injectable()
export class ShutdownObserver implements OnApplicationShutdown {
  private httpServers: http.Server[] = [];

  public addHttpServer(server: http.Server): void {
    this.httpServers.push(server);
  }

  public async onApplicationShutdown(): Promise<void> {
    await Promise.all(
      this.httpServers.map(
        (server) =>
          new Promise((resolve, reject) => {
            server.close((error) => {
              if (error) {
                reject(error);
              } else {
                resolve(null);
              }
            });
          }),
      ),
    );
  }
}

const shutdownObserver = app.get(ShutdownObserver);
shutdownObserver.addHttpServer(httpServer);
shutdownObserver.addHttpServer(httpsServer);
`),cf()()(),Aa(53,`blockquote`,6)(54,`strong`),bT(55,`Hint`),cf(),bT(56,` The `),Aa(57,`code`),bT(58,`ExpressAdapter`),cf(),bT(59,` is imported from the `),Aa(60,`code`),bT(61,`@nestjs/platform-express`),cf(),bT(62,` package. The `),Aa(63,`code`),bT(64,`http`),cf(),bT(65,` and `),Aa(66,`code`),bT(67,`https`),cf(),bT(68,` modules are built into Node.js.
`),cf(),Aa(69,`blockquote`,7)(70,`strong`),bT(71,`Warning`),cf(),bT(72,` This recipe does not work with `),Aa(73,`a`,8),bT(74,`GraphQL subscriptions`),cf(),bT(75,`.
`),cf()(),Aa(76,`a`,9),Wa(77,`i`,10),Aa(78,`span`),bT(79,`Edit on GitHub`),cf()()())},dependencies:[ln,Lt,Jc],encapsulation:2})}return i})();var M=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-nest-vs-fastify-express-hono`]],features:[xy],decls:435,vars:4,consts:[[`contentReference`,``],[`app2c999da5793e0d4745ef3ad6de01e176f9228dac`,``],[1,`content`],[1,`content-inner`],[`id`,`nest-vs-fastify-express-and-hono`],[`appAnchor`,``,`id`,`when-to-use-which`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://enterprise.nestjs.com`],[`href`,`/cli/usages#one-file-projects`],[`routerLink`,`/microservices/basics`],[`routerLink`,`/faq/cloudflare-workers`],[`routerLink`,`/recipes/nextjs`],[`routerLink`,`/recipes/express-migration`],[`href`,`/faq/nest-vs-fastify-express-hono#performance`],[`appAnchor`,``,`id`,`what-comes-with-each`],[`routerLink`,`/modules`],[`routerLink`,`/application/validation`],[`href`,`/security/authentication`],[`routerLink`,`/guards`],[`href`,`/openapi/introduction`],[`routerLink`,`/websockets/gateways`],[`href`,`/application/queues`],[`href`,`/microservices/basics`],[`routerLink`,`/http/streaming-responses`],[`href`,`/fundamentals/testing`],[`appAnchor`,``,`id`,`how-small-a-nest-application-can-be`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`performance`],[`href`,`/http/performance#node-adapter`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/pull/18063#reproducing-the-benchmark`],[`appAnchor`,``,`id`,`moving-to-nest-later`],[`routerLink`,`/recipes/fastify-migration`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/nest-vs-fastify-express-hono.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){if(o&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Nest vs Fastify, Express and Hono`),cf(),Aa(5,`p`),bT(6,`Fastify, Express and Hono route requests to your handlers, and you choose or write what goes around them. Nest organizes the whole backend, with modules, dependency injection, guards, pipes and first-party packages, and it runs on top of Express, Fastify or Node's own `),Aa(7,`code`),bT(8,`node:http`),cf(),bT(9,`. So Nest doesn't replace Fastify or Express: they can be what it runs on. This page helps you choose.`),cf(),Aa(10,`h4`,5)(11,`span`),bT(12,`When to use which`),cf()(),Aa(13,`table`)(14,`thead`)(15,`tr`)(16,`th`),bT(17,`What you're building`),cf(),Aa(18,`th`),bT(19,`Better fit`),cf(),Aa(20,`th`),bT(21,`Why`),cf()()(),Aa(22,`tbody`)(23,`tr`)(24,`td`),bT(25,`A backend that will grow: more modules, more developers, a database, background jobs`),cf(),Aa(26,`td`),bT(27,`Nest`),cf(),Aa(28,`td`),bT(29,`Modules, dependency injection, guards and pipes give it one structure, and services are easy to test`),cf()(),Aa(30,`tr`)(31,`td`),bT(32,`An enterprise-grade system, with many teams and a long-lived codebase`),cf(),Aa(33,`td`),bT(34,`Nest`),cf(),Aa(35,`td`),bT(36,`Every team works in the same structure, and the core team offers `),Aa(37,`a`,6),bT(38,`enterprise support`),cf()()(),Aa(39,`tr`)(40,`td`),bT(41,`A small API with authentication, validation and a database`),cf(),Aa(42,`td`),bT(43,`Nest or Fastify`),cf(),Aa(44,`td`)(45,`code`),bT(46,`nest new --minimal`),cf(),bT(47,` starts from `),Aa(48,`a`,7),bT(49,`one file`),cf(),bT(50,`, and first-party packages add the rest. Fastify does the same with plugins and less code around each route`),cf()(),Aa(51,`tr`)(52,`td`),bT(53,`Microservices over Kafka, RabbitMQ, NATS or gRPC`),cf(),Aa(54,`td`),bT(55,`Nest`),cf(),Aa(56,`td`),bT(57,`The `),Aa(58,`a`,8),bT(59,`transports`),cf(),bT(60,` are first-party and share one programming model`),cf()(),Aa(61,`tr`)(62,`td`),bT(63,`A service that will stay a few routes, such as a proxy or a webhook receiver`),cf(),Aa(64,`td`),bT(65,`Fastify or Hono`),cf(),Aa(66,`td`),bT(67,`There's nothing to organize`),cf()(),Aa(68,`tr`)(69,`td`),bT(70,`An API on Cloudflare Workers or another edge runtime`),cf(),Aa(71,`td`),bT(72,`Hono`),cf(),Aa(73,`td`),bT(74,`It's built on Web Standards and runs there natively. See `),Aa(75,`a`,9),bT(76,`Cloudflare Workers`),cf()()(),Aa(77,`tr`)(78,`td`),bT(79,`A Next.js frontend sharing route types with its API, with no code generation`),cf(),Aa(80,`td`),bT(81,`Hono`),cf(),Aa(82,`td`),bT(83,`Its RPC client infers types from the routes. With Nest, `),Aa(84,`a`,10),bT(85,`a shared package`),cf(),bT(86,` holds the schemas and types instead`),cf()(),Aa(87,`tr`)(88,`td`),bT(89,`An Express application that already works`),cf(),Aa(90,`td`),bT(91,`Express, or Nest one route at a time`),cf(),Aa(92,`td`)(93,`a`,11),bT(94,`Migrating from Express`),cf(),bT(95,` runs both side by side`),cf()(),Aa(96,`tr`)(97,`td`),bT(98,`The highest request rate on routes that do very little`),cf(),Aa(99,`td`),bT(100,`Fastify`),cf(),Aa(101,`td`),bT(102,`It's a few percent ahead of Nest. See `),Aa(103,`a`,12),bT(104,`Performance`),cf()()()()(),Aa(105,`h4`,13)(106,`span`),bT(107,`What comes with each`),cf()(),Aa(108,`table`),Wa(109,`thead`),Aa(110,`tbody`)(111,`tr`)(112,`td`),bT(113,`Modules and dependency injection`),cf(),Aa(114,`td`)(115,`a`,14),bT(116,`Built in`),cf()(),Aa(117,`td`),bT(118,`Encapsulated plugins, no container`),cf(),Aa(119,`td`),bT(120,`You design it`),cf(),Aa(121,`td`),bT(122,`You design it`),cf()(),Aa(123,`tr`)(124,`td`),bT(125,`Request validation`),cf(),Aa(126,`td`)(127,`a`,15),bT(128,`Built-in pipes`),cf(),bT(129,`, with classes or any Standard Schema library`),cf(),Aa(130,`td`),bT(131,`JSON Schema on each route, built in`),cf(),Aa(132,`td`),bT(133,`Add a library`),cf(),Aa(134,`td`)(135,`code`),bT(136,`@hono/zod-validator`),cf(),bT(137,` or similar`),cf()(),Aa(138,`tr`)(139,`td`),bT(140,`Authentication`),cf(),Aa(141,`td`)(142,`a`,16)(143,`code`),bT(144,`@nestjs/authentication`),cf()(),bT(145,` and `),Aa(146,`a`,17),bT(147,`guards`),cf()(),Aa(148,`td`)(149,`code`),bT(150,`@fastify/jwt`),cf(),bT(151,` and other plugins`),cf(),Aa(152,`td`),bT(153,`Passport or your own middleware`),cf(),Aa(154,`td`)(155,`code`),bT(156,`hono/jwt`),cf(),bT(157,` and other middleware`),cf()(),Aa(158,`tr`)(159,`td`),bT(160,`OpenAPI`),cf(),Aa(161,`td`)(162,`a`,18)(163,`code`),bT(164,`@nestjs/swagger`),cf()()(),Aa(165,`td`)(166,`code`),bT(167,`@fastify/swagger`),cf()(),Aa(168,`td`),bT(169,`Add a library`),cf(),Aa(170,`td`)(171,`code`),bT(172,`@hono/zod-openapi`),cf()()(),Aa(173,`tr`)(174,`td`),bT(175,`WebSockets`),cf(),Aa(176,`td`)(177,`a`,19),bT(178,`Gateways`),cf(),bT(179,`, with Socket.IO or `),Aa(180,`code`),bT(181,`ws`),cf()(),Aa(182,`td`)(183,`code`),bT(184,`@fastify/websocket`),cf()(),Aa(185,`td`),bT(186,`Add a library`),cf(),Aa(187,`td`),bT(188,`Runtime helpers such as `),Aa(189,`code`),bT(190,`@hono/node-ws`),cf()()(),Aa(191,`tr`)(192,`td`),bT(193,`Background jobs`),cf(),Aa(194,`td`)(195,`a`,20)(196,`code`),bT(197,`@nestjs/bullmq`),cf()()(),Aa(198,`td`),bT(199,`Add a library`),cf(),Aa(200,`td`),bT(201,`Add a library`),cf(),Aa(202,`td`),bT(203,`Add a library`),cf()(),Aa(204,`tr`)(205,`td`),bT(206,`Microservice transports`),cf(),Aa(207,`td`)(208,`a`,21)(209,`code`),bT(210,`@nestjs/microservices`),cf()()(),Aa(211,`td`),bT(212,`Add a library`),cf(),Aa(213,`td`),bT(214,`Add a library`),cf(),Aa(215,`td`),bT(216,`Add a library`),cf()(),Aa(217,`tr`)(218,`td`),bT(219,`Streaming`),cf(),Aa(220,`td`)(221,`a`,22),bT(222,`Return a `),Aa(223,`code`),bT(224,`Response`),cf(),bT(225,` or a stream`),cf()(),Aa(226,`td`),bT(227,`Send a stream from a handler`),cf(),Aa(228,`td`),bT(229,`Write to the response`),cf(),Aa(230,`td`)(231,`code`),bT(232,`streamSSE`),cf(),bT(233,` and other helpers`),cf()(),Aa(234,`tr`)(235,`td`),bT(236,`Testing`),cf(),Aa(237,`td`)(238,`a`,23)(239,`code`),bT(240,`@nestjs/testing`),cf()(),bT(241,`, which can replace providers`),cf(),Aa(242,`td`)(243,`code`),bT(244,`fastify.inject()`),cf()(),Aa(245,`td`),bT(246,`Add Supertest`),cf(),Aa(247,`td`)(248,`code`),bT(249,`app.request()`),cf()()(),Aa(250,`tr`)(251,`td`),bT(252,`Types shared with a frontend`),cf(),Aa(253,`td`)(254,`a`,10),bT(255,`A shared package`),cf()(),Aa(256,`td`),bT(257,`Add a library`),cf(),Aa(258,`td`),bT(259,`Add a library`),cf(),Aa(260,`td`),bT(261,`RPC client built in`),cf()()()(),Aa(262,`h4`,24)(263,`span`),bT(264,`How small a Nest application can be`),cf()(),Aa(265,`p`)(266,`code`),bT(267,`nest new my-api --minimal`),cf(),bT(268,` generates an application whose code is one file, `),Aa(269,`code`),bT(270,`src/main.ts`),cf(),bT(271,`:`),cf(),Aa(272,`app-copy-button`,25)(273,`span`,26),bT(274),LT(275,`extension`),Wa(276,`app-tabs`,null,1),cf(),Aa(278,`pre`)(279,`code`,27),bT(280,`
import { Controller, Get, Injectable, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Injectable()
class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Controller()
class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Module({
  controllers: [AppController],
  providers: [AppService],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(281,`p`),bT(282,`It stays the same application as it grows. `),Aa(283,`code`),bT(284,`nest g resource users`),cf(),bT(285,` adds a module, and when `),Aa(286,`code`),bT(287,`src/main.ts`),cf(),bT(288,` gets long, you move the root module to its own file. See `),Aa(289,`a`,7),bT(290,`One-file projects`),cf(),bT(291,`.`),cf(),Aa(292,`p`),bT(293,`Fastify, Express and Hono start with fewer lines, which stays an advantage while the application stays small. As it grows, where authentication lives, how its parts share services, and how tests replace dependencies become yours to design. Nest decides those up front.`),cf(),Aa(294,`h4`,28)(295,`span`),bT(296,`Performance`),cf()(),Aa(297,`p`),bT(298,`Requests per second on `),Aa(299,`code`),bT(300,`GET /`),cf(),bT(301,`, with each server answering `),Aa(302,`code`),bT(303,`Hello world!`),cf(),bT(304,`, using `),Aa(305,`code`),bT(306,`wrk -t4 -c100`),cf(),bT(307,` for 8 seconds after a 3-second warm-up, on Node.js 24.20. Each number is the median of 3 rounds:`),cf(),Aa(308,`table`)(309,`thead`)(310,`tr`)(311,`th`),bT(312,`Server`),cf(),Aa(313,`th`)(314,`code`),bT(315,`GET /`),cf()()()(),Aa(316,`tbody`)(317,`tr`)(318,`td`),bT(319,`Fastify`),cf(),Aa(320,`td`),bT(321,`57.1k`),cf()(),Aa(322,`tr`)(323,`td`),bT(324,`Nest on Node`),cf(),Aa(325,`td`),bT(326,`55.6k`),cf()(),Aa(327,`tr`)(328,`td`),bT(329,`Hono on Node`),cf(),Aa(330,`td`),bT(331,`53.1k`),cf()(),Aa(332,`tr`)(333,`td`),bT(334,`Nest on Fastify`),cf(),Aa(335,`td`),bT(336,`52.6k`),cf()(),Aa(337,`tr`)(338,`td`),bT(339,`Express`),cf(),Aa(340,`td`),bT(341,`37.0k`),cf()(),Aa(342,`tr`)(343,`td`),bT(344,`Nest on Express`),cf(),Aa(345,`td`),bT(346,`37.0k`),cf()()()(),Aa(347,`p`),bT(348,`So with the `),Aa(349,`a`,29)(350,`code`),bT(351,`NodeAdapter`),cf()(),bT(352,`, Nest handled about 3% fewer requests per second than plain Fastify, about 5% more than Hono on Node, and about 50% more than plain Express.`),cf(),Aa(353,`p`),bT(354,`A separate round on an M1 Pro, with a route parameter and a JSON body:`),cf(),Aa(355,`table`)(356,`thead`)(357,`tr`)(358,`th`),bT(359,`Server`),cf(),Aa(360,`th`)(361,`code`),bT(362,`GET /users/:id`),cf()(),Aa(363,`th`)(364,`code`),bT(365,`POST /echo`),cf(),bT(366,` (JSON)`),cf()()(),Aa(367,`tbody`)(368,`tr`)(369,`td`),bT(370,`Express`),cf(),Aa(371,`td`),bT(372,`35.6k`),cf(),Aa(373,`td`),bT(374,`30.1k`),cf()(),Aa(375,`tr`)(376,`td`),bT(377,`Fastify`),cf(),Aa(378,`td`),bT(379,`54.0k`),cf(),Aa(380,`td`),bT(381,`43.5k`),cf()(),Aa(382,`tr`)(383,`td`),bT(384,`Nest on Express`),cf(),Aa(385,`td`),bT(386,`34.5k`),cf(),Aa(387,`td`),bT(388,`28.2k`),cf()(),Aa(389,`tr`)(390,`td`),bT(391,`Nest on Fastify`),cf(),Aa(392,`td`),bT(393,`48.4k`),cf(),Aa(394,`td`),bT(395,`40.2k`),cf()(),Aa(396,`tr`)(397,`td`),bT(398,`Nest on Node`),cf(),Aa(399,`td`),bT(400,`51.0k`),cf(),Aa(401,`td`),bT(402,`42.4k`),cf()()()(),Aa(403,`p`),bT(404,`Here Nest on Node came within 3-6% of plain Fastify and stayed 41-43% ahead of plain Express.`),cf(),Aa(405,`p`),bT(406,`To run these yourself, follow the steps in `),Aa(407,`a`,30),bT(408,`nestjs/nest#18063`),cf(),bT(409,`, which also have the servers for Hono, Koa, Elysia and AdonisJS. Other machines give different gaps, and Hono's number covers only Node, not the other runtimes it runs on.`),cf(),Aa(410,`p`),bT(411,`These routes do almost no work. A route that queries a database or calls other services spends most of its time waiting for them, so for most applications these differences won't decide the choice.`),cf(),Aa(412,`h4`,31)(413,`span`),bT(414,`Moving to Nest later`),cf()(),Aa(415,`p`),bT(416,`The choice doesn't have to be final:`),cf(),Aa(417,`ul`)(418,`li`),bT(419,`From Fastify, Nest runs on the same server through the `),Aa(420,`code`),bT(421,`FastifyAdapter`),cf(),bT(422,`, and your plugins keep working. See `),Aa(423,`a`,32),bT(424,`Migrating from Fastify`),cf(),bT(425,`.`),cf(),Aa(426,`li`),bT(427,`From Express, routes move one at a time with both serving requests, or all at once. See `),Aa(428,`a`,11),bT(429,`Migrating from Express`),cf(),bT(430,`.`),cf()()(),Aa(431,`a`,33),Wa(432,`i`,34),Aa(433,`span`),bT(434,`Edit on GitHub`),cf()()()),o&2){let f=tT(277);zC(274),hf(` `,jT(275,1,`src/main`,f.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return i})();var I=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-raw-body`]],features:[xy],decls:163,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`raw-body`],[1,`warning`],[`appAnchor`,``,`id`,`use-with-express`],[1,`language-typescript`],[`appAnchor`,``,`id`,`registering-a-different-parser`],[`appAnchor`,``,`id`,`body-parser-size-limit`],[`appAnchor`,``,`id`,`use-with-fastify`],[`appAnchor`,``,`id`,`registering-a-different-parser-1`],[`appAnchor`,``,`id`,`body-parser-size-limit-1`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/raw-body.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Raw body`),cf(),Aa(5,`p`),bT(6,`One of the most common reasons to access the raw request body is webhook signature verification. Verifying a webhook signature usually requires the unparsed request body to calculate an HMAC hash.`),cf(),Aa(7,`blockquote`,4)(8,`strong`),bT(9,`Warning`),cf(),bT(10,` This feature works only if the built-in global body parser middleware is enabled, i.e., you must not pass `),Aa(11,`code`),bT(12,`bodyParser: false`),cf(),bT(13,` when creating the application.
`),cf(),Aa(14,`h4`,5)(15,`span`),bT(16,`Use with Express`),cf()(),Aa(17,`p`),bT(18,`First, enable the option when creating your Nest Express application:`),cf(),Aa(19,`app-copy-button`)(20,`pre`)(21,`code`,6),bT(22,`
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module.js';

// in the "bootstrap" function
const app = await NestFactory.create<NestExpressApplication>(AppModule, {
  rawBody: true,
});
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(23,`p`),bT(24,`To access the raw request body in a controller, type the request with the `),Aa(25,`code`),bT(26,`RawBodyRequest`),cf(),bT(27,` convenience interface, which exposes a `),Aa(28,`code`),bT(29,`rawBody`),cf(),bT(30,` field:`),cf(),Aa(31,`app-copy-button`)(32,`pre`)(33,`code`,6),bT(34,`
import { Controller, Post, type RawBodyRequest, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats')
class CatsController {
  @Post()
  create(@Req() req: RawBodyRequest<Request>) {
    const raw = req.rawBody; // returns a \`Buffer\`.
  }
}
`),cf()()(),Aa(35,`h4`,7)(36,`span`),bT(37,`Registering a different parser`),cf()(),Aa(38,`p`),bT(39,`By default, only the `),Aa(40,`code`),bT(41,`json`),cf(),bT(42,` and `),Aa(43,`code`),bT(44,`urlencoded`),cf(),bT(45,` parsers are registered. To use a different parser, register it explicitly.`),cf(),Aa(46,`p`),bT(47,`For example, to register a `),Aa(48,`code`),bT(49,`text`),cf(),bT(50,` parser:`),cf(),Aa(51,`app-copy-button`)(52,`pre`)(53,`code`,6),bT(54,`
app.useBodyParser('text');
`),cf()()(),Aa(55,`blockquote`,4)(56,`strong`),bT(57,`Warning`),cf(),bT(58,` Make sure you pass the correct application type to the `),Aa(59,`code`),bT(60,`NestFactory.create()`),cf(),bT(61,` call. For Express applications, the correct type is `),Aa(62,`code`),bT(63,`NestExpressApplication`),cf(),bT(64,`; otherwise, the `),Aa(65,`code`),bT(66,`useBodyParser()`),cf(),bT(67,` method won't be found.
`),cf(),Aa(68,`h4`,8)(69,`span`),bT(70,`Body parser size limit`),cf()(),Aa(71,`p`),bT(72,`If your application needs to parse bodies larger than the Express default of `),Aa(73,`code`),bT(74,`100kb`),cf(),bT(75,`, raise the limit:`),cf(),Aa(76,`app-copy-button`)(77,`pre`)(78,`code`,6),bT(79,`
app.useBodyParser('json', { limit: '10mb' });
`),cf()()(),Aa(80,`p`),bT(81,`The `),Aa(82,`code`),bT(83,`useBodyParser()`),cf(),bT(84,` method respects the `),Aa(85,`code`),bT(86,`rawBody`),cf(),bT(87,` option passed in the application options.`),cf(),Aa(88,`h4`,9)(89,`span`),bT(90,`Use with Fastify`),cf()(),Aa(91,`p`),bT(92,`First, enable the option when creating your Nest Fastify application:`),cf(),Aa(93,`app-copy-button`)(94,`pre`)(95,`code`,6),bT(96,`
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';

// in the "bootstrap" function
const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter(),
  {
    rawBody: true,
  },
);
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(97,`p`),bT(98,`To access the raw request body in a controller, type the request with the `),Aa(99,`code`),bT(100,`RawBodyRequest`),cf(),bT(101,` convenience interface, which exposes a `),Aa(102,`code`),bT(103,`rawBody`),cf(),bT(104,` field:`),cf(),Aa(105,`app-copy-button`)(106,`pre`)(107,`code`,6),bT(108,`
import { Controller, Post, type RawBodyRequest, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';

@Controller('cats')
class CatsController {
  @Post()
  create(@Req() req: RawBodyRequest<FastifyRequest>) {
    const raw = req.rawBody; // returns a \`Buffer\`.
  }
}
`),cf()()(),Aa(109,`h4`,10)(110,`span`),bT(111,`Registering a different parser`),cf()(),Aa(112,`p`),bT(113,`By default, only the `),Aa(114,`code`),bT(115,`application/json`),cf(),bT(116,` and `),Aa(117,`code`),bT(118,`application/x-www-form-urlencoded`),cf(),bT(119,` parsers are registered. To use a different parser, register it explicitly.`),cf(),Aa(120,`p`),bT(121,`For example, to register a `),Aa(122,`code`),bT(123,`text/plain`),cf(),bT(124,` parser:`),cf(),Aa(125,`app-copy-button`)(126,`pre`)(127,`code`,6),bT(128,`
app.useBodyParser('text/plain');
`),cf()()(),Aa(129,`blockquote`,4)(130,`strong`),bT(131,`Warning`),cf(),bT(132,` Make sure you pass the correct application type to the `),Aa(133,`code`),bT(134,`NestFactory.create()`),cf(),bT(135,` call. For Fastify applications, the correct type is `),Aa(136,`code`),bT(137,`NestFastifyApplication`),cf(),bT(138,`; otherwise, the `),Aa(139,`code`),bT(140,`useBodyParser()`),cf(),bT(141,` method won't be found.
`),cf(),Aa(142,`h4`,11)(143,`span`),bT(144,`Body parser size limit`),cf()(),Aa(145,`p`),bT(146,`If your application needs to parse bodies larger than the Fastify default of 1 MiB, raise the limit:`),cf(),Aa(147,`app-copy-button`)(148,`pre`)(149,`code`,6),bT(150,`
const bodyLimit = 10_485_760; // 10MiB
app.useBodyParser('application/json', { bodyLimit });
`),cf()()(),Aa(151,`p`),bT(152,`The `),Aa(153,`code`),bT(154,`useBodyParser()`),cf(),bT(155,` method respects the `),Aa(156,`code`),bT(157,`rawBody`),cf(),bT(158,` option passed in the application options.`),cf()(),Aa(159,`a`,12),Wa(160,`i`,13),Aa(161,`span`),bT(162,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln],encapsulation:2})}return i})();var R=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-request-lifecycle`]],features:[xy],decls:183,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`request-lifecycle`],[`appAnchor`,``,`id`,`middleware`],[`routerLink`,`/middleware`],[`appAnchor`,``,`id`,`guards`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`interceptors`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/ReactiveX/rxjs`],[`appAnchor`,``,`id`,`pipes`],[`appAnchor`,``,`id`,`filters`],[`href`,`/middleware#error-handling`],[`appAnchor`,``,`id`,`summary`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/request-lifecycle.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Request lifecycle`),cf(),Aa(5,`p`),bT(6,`Nest applications handle requests and produce responses in a sequence called the `),Aa(7,`strong`),bT(8,`request lifecycle`),cf(),bT(9,`. With middleware, pipes, guards, and interceptors in play, it can be challenging to track down where a particular piece of code runs during the request lifecycle, especially when global, controller-level, and route-level components are combined. In general, a request flows through middleware, then guards, then interceptors, then pipes, and finally back through interceptors on the return path (as the response is generated).`),cf(),Aa(10,`h4`,4)(11,`span`),bT(12,`Middleware`),cf()(),Aa(13,`p`),bT(14,`Middleware runs in a specific sequence. First, Nest runs globally bound middleware (such as middleware bound with `),Aa(15,`code`),bT(16,`app.use()`),cf(),bT(17,`), and then it runs `),Aa(18,`a`,5),bT(19,`module-bound middleware`),cf(),bT(20,`, which is matched by path. Middleware runs sequentially in the order it is bound, just like middleware in Express. For middleware bound in different modules, middleware from global modules (decorated with `),Aa(21,`code`),bT(22,`@Global()`),cf(),bT(23,`) runs first, then middleware bound in the root module, followed by middleware from the other modules, ordered by their distance from the root module in the import graph.`),cf(),Aa(24,`h4`,6)(25,`span`),bT(26,`Guards`),cf()(),Aa(27,`p`),bT(28,`Guard execution starts with global guards, proceeds to controller guards, and ends with route guards. As with middleware, guards run in the order in which they are bound. For example:`),cf(),Aa(29,`app-copy-button`)(30,`pre`)(31,`code`,7),bT(32,`
@UseGuards(Guard1, Guard2)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @UseGuards(Guard3)
  @Get()
  getCats(): Cats[] {
    return this.catsService.getCats();
  }
}
`),cf()()(),Aa(33,`p`)(34,`code`),bT(35,`Guard1`),cf(),bT(36,` will execute before `),Aa(37,`code`),bT(38,`Guard2`),cf(),bT(39,` and both will execute before `),Aa(40,`code`),bT(41,`Guard3`),cf(),bT(42,`.`),cf(),Aa(43,`blockquote`,8)(44,`strong`),bT(45,`Hint`),cf(),bT(46,` "Global", "controller", and "route" refer to where the guard (or other component) is bound. A component registered with `),Aa(47,`code`),bT(48,`app.useGlobalGuards()`),cf(),bT(49,` (or a similar method), or provided through a module with the `),Aa(50,`code`),bT(51,`APP_GUARD`),cf(),bT(52,` token (or a similar token), is globally bound. Otherwise, it is bound to a controller if the decorator precedes a controller class, or to a route if the decorator precedes a route handler.
`),cf(),Aa(53,`h4`,9)(54,`span`),bT(55,`Interceptors`),cf()(),Aa(56,`p`),bT(57,`Interceptors mostly follow the same pattern as guards, with one difference: because interceptors return `),Aa(58,`a`,10),bT(59,`RxJS Observables`),cf(),bT(60,`, the observables are resolved in a first-in, last-out manner. Inbound requests go through the standard global, controller, route order, but the response side (i.e., after the route handler returns) is resolved from route to controller to global. Also, any errors thrown by pipes, controllers, or services can be read in an interceptor's `),Aa(61,`code`),bT(62,`catchError`),cf(),bT(63,` operator.`),cf(),Aa(64,`h4`,11)(65,`span`),bT(66,`Pipes`),cf()(),Aa(67,`p`),bT(68,`Pipes follow the standard global, controller, route sequence, and pipes passed to `),Aa(69,`code`),bT(70,`@UsePipes()`),cf(),bT(71,` run first in, first out. However, at the route parameter level, when several parameters have pipes, the pipes process the last parameter first and the first parameter last. This also applies to route-level and controller-level pipes. For example, consider the following controller:`),cf(),Aa(72,`app-copy-button`)(73,`pre`)(74,`code`,7),bT(75,`
@UsePipes(GeneralValidationPipe)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @UsePipes(RouteSpecificPipe)
  @Patch(':id')
  updateCat(
    @Body() body: UpdateCatDTO,
    @Param() params: UpdateCatParams,
    @Query() query: UpdateCatQuery,
  ) {
    return this.catsService.updateCat(body, params, query);
  }
}
`),cf()()(),Aa(76,`p`),bT(77,`Here, the `),Aa(78,`code`),bT(79,`GeneralValidationPipe`),cf(),bT(80,` runs for the `),Aa(81,`code`),bT(82,`query`),cf(),bT(83,`, then the `),Aa(84,`code`),bT(85,`params`),cf(),bT(86,`, and then the `),Aa(87,`code`),bT(88,`body`),cf(),bT(89,` objects before moving on to the `),Aa(90,`code`),bT(91,`RouteSpecificPipe`),cf(),bT(92,`, which follows the same order. Any parameter-specific pipes would run (again, from the last parameter to the first) after the controller-level and route-level pipes.`),cf(),Aa(93,`h4`,12)(94,`span`),bT(95,`Filters`),cf()(),Aa(96,`p`),bT(97,`Filters are the only component that don't resolve global first. Instead, filters resolve from the lowest level possible: Nest checks route-bound filters first, then controller-level filters, and finally global filters. Exceptions can't be passed from filter to filter; if a route-level filter catches the exception, a controller-level or global filter can't catch the same exception. To achieve a similar effect, use inheritance between the filters.`),cf(),Aa(98,`blockquote`,8)(99,`strong`),bT(100,`Hint`),cf(),bT(101,` Filters run only when an uncaught exception occurs during request processing. Exceptions you catch yourself (e.g., with `),Aa(102,`code`),bT(103,`try/catch`),cf(),bT(104,`) don't trigger exception filters. As soon as an uncaught exception is encountered, the rest of the lifecycle is skipped and the request goes straight to the filter. Exceptions thrown from `),Aa(105,`a`,13),bT(106,`middleware`),cf(),bT(107,` are handled by the exceptions layer as well, but only `),Aa(108,`strong`),bT(109,`global`),cf(),bT(110,` exception filters apply, because middleware runs before a route handler is selected.
`),cf(),Aa(111,`h4`,14)(112,`span`),bT(113,`Summary`),cf()(),Aa(114,`p`),bT(115,`In general, the request lifecycle looks like this:`),cf(),Aa(116,`ol`)(117,`li`),bT(118,`Incoming request`),cf(),Aa(119,`li`),bT(120,`Middleware`),Aa(121,`ul`)(122,`li`),bT(123,`2.1. Globally bound middleware`),cf(),Aa(124,`li`),bT(125,`2.2. Module bound middleware`),cf()()(),Aa(126,`li`),bT(127,`Guards`),Aa(128,`ul`)(129,`li`),bT(130,`3.1 Global guards`),cf(),Aa(131,`li`),bT(132,`3.2 Controller guards`),cf(),Aa(133,`li`),bT(134,`3.3 Route guards`),cf()()(),Aa(135,`li`),bT(136,`Interceptors (pre-controller)`),Aa(137,`ul`)(138,`li`),bT(139,`4.1 Global interceptors`),cf(),Aa(140,`li`),bT(141,`4.2 Controller interceptors`),cf(),Aa(142,`li`),bT(143,`4.3 Route interceptors`),cf()()(),Aa(144,`li`),bT(145,`Pipes`),Aa(146,`ul`)(147,`li`),bT(148,`5.1 Global pipes`),cf(),Aa(149,`li`),bT(150,`5.2 Controller pipes`),cf(),Aa(151,`li`),bT(152,`5.3 Route pipes`),cf(),Aa(153,`li`),bT(154,`5.4 Route parameter pipes`),cf()()(),Aa(155,`li`),bT(156,`Controller (method handler)`),cf(),Aa(157,`li`),bT(158,`Service (if exists)`),cf(),Aa(159,`li`),bT(160,`Interceptors (post-request)`),Aa(161,`ul`)(162,`li`),bT(163,`8.1 Route interceptors`),cf(),Aa(164,`li`),bT(165,`8.2 Controller interceptors`),cf(),Aa(166,`li`),bT(167,`8.3 Global interceptors`),cf()()(),Aa(168,`li`),bT(169,`Exception filters`),Aa(170,`ul`)(171,`li`),bT(172,`9.1 Route filters`),cf(),Aa(173,`li`),bT(174,`9.2 Controller filters`),cf(),Aa(175,`li`),bT(176,`9.3 Global filters`),cf()()(),Aa(177,`li`),bT(178,`Server response`),cf()()(),Aa(179,`a`,15),Wa(180,`i`,16),Aa(181,`span`),bT(182,`Edit on GitHub`),cf()()())},dependencies:[Lt,Jc,ln],encapsulation:2})}return i})();var B=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-serverless`]],features:[xy],decls:441,vars:4,consts:[[`contentReference`,``],[`app4c9800de6cddd9d7ad25762b5349f08e9e38e711`,``],[1,`content`],[1,`content-inner`],[`id`,`serverless`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Serverless_computing`],[1,`info`],[`appAnchor`,``,`id`,`cold-start`],[`routerLink`,`/standalone-applications`],[`appAnchor`,``,`id`,`benchmarks`],[1,`language-typescript`],[`routerLink`,`/cli/overview`],[1,`language-javascript`],[`appAnchor`,``,`id`,`runtime-optimizations`],[`routerLink`,`/fundamentals/async-providers`],[`routerLink`,`/fundamentals/lazy-loading-modules`],[`appAnchor`,``,`id`,`example-integration`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.serverless.com/`],[1,`language-bash`],[1,`language-yaml`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.serverless.com/framework/docs/`],[`href`,`/cli/monorepo#monorepo-mode`],[1,`warning`],[1,`language-json`],[`appAnchor`,``,`id`,`using-standalone-application-feature`],[1,`with-heading`],[1,`filename`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/serverless.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){if(o&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Serverless`),cf(),Aa(5,`p`),bT(6,`Serverless computing is a cloud computing execution model in which the cloud provider allocates machine resources on demand, managing the servers on behalf of its customers. When an app is not in use, no computing resources are allocated to it. Pricing is based on the actual amount of resources the application consumes (`),Aa(7,`a`,5),bT(8,`source`),cf(),bT(9,`).`),cf(),Aa(10,`p`),bT(11,`With a `),Aa(12,`strong`),bT(13,`serverless architecture`),cf(),bT(14,`, you focus on the individual functions in your application code. Services such as AWS Lambda, Google Cloud Functions, and Microsoft Azure Functions manage the physical hardware, the virtual machine operating system, and the web server software.`),cf(),Aa(15,`blockquote`,6)(16,`strong`),bT(17,`Hint`),cf(),bT(18,` This chapter doesn't cover the pros and cons of serverless functions, nor does it dive into the specifics of any cloud provider.
`),cf(),Aa(19,`h4`,7)(20,`span`),bT(21,`Cold start`),cf()(),Aa(22,`p`),bT(23,`A cold start is the first time your code runs in a while. Depending on your cloud provider, it may span several operations, from downloading the code and bootstrapping the runtime to running your code.
This process adds `),Aa(24,`strong`),bT(25,`significant latency`),cf(),bT(26,`, depending on several factors such as the language and the number of packages your application requires.`),cf(),Aa(27,`p`),bT(28,`Some of these factors are beyond your control, but there's still a lot you can do on your side to keep the cold start as short as possible.`),cf(),Aa(29,`p`),bT(30,`While Nest is a fully-fledged framework designed for complex enterprise applications, it is also `),Aa(31,`strong`),bT(32,`suitable for much "simpler" applications`),cf(),bT(33,` (or scripts). For example, with the `),Aa(34,`a`,8),bT(35,`standalone applications`),cf(),bT(36,` feature, you can use Nest's DI system in simple workers, CRON jobs, CLIs, or serverless functions.`),cf(),Aa(37,`h4`,9)(38,`span`),bT(39,`Benchmarks`),cf()(),Aa(40,`p`),bT(41,`To better understand the cost of using Nest or other well-known libraries (like `),Aa(42,`code`),bT(43,`express`),cf(),bT(44,`) in serverless functions, let's compare how much time the Node.js runtime needs to run the following scripts:`),cf(),Aa(45,`app-copy-button`)(46,`pre`)(47,`code`,10),bT(48,`
// #1 Express
import express from 'express';

async function bootstrap() {
  const app = express();
  app.get('/', (req, res) => res.send('Hello world!'));
  await new Promise<void>((resolve) => app.listen(3000, resolve));
}
await bootstrap();

// #2 Nest (with @nestjs/platform-express)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['error'] });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();

// #3 Nest as a Standalone application (no HTTP server)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { AppService } from './app.service.js';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['error'],
  });
  console.log(app.get(AppService).getHello());
}
await bootstrap();

// #4 Raw Node.js script
async function bootstrap() {
  console.log('Hello world!');
}
await bootstrap();
`),cf()()(),Aa(49,`p`),bT(50,`For all these scripts, we used the `),Aa(51,`code`),bT(52,`tsc`),cf(),bT(53,` (TypeScript) compiler, so the code remains unbundled (`),Aa(54,`code`),bT(55,`webpack`),cf(),bT(56,` isn't used).`),cf(),Aa(57,`table`),Wa(58,`thead`),Aa(59,`tbody`)(60,`tr`)(61,`td`),bT(62,`Express`),cf(),Aa(63,`td`),bT(64,`0.0079s (7.9ms)`),cf()(),Aa(65,`tr`)(66,`td`),bT(67,`Nest with `),Aa(68,`code`),bT(69,`@nestjs/platform-express`),cf()(),Aa(70,`td`),bT(71,`0.1974s (197.4ms)`),cf()(),Aa(72,`tr`)(73,`td`),bT(74,`Nest (standalone application)`),cf(),Aa(75,`td`),bT(76,`0.1117s (111.7ms)`),cf()(),Aa(77,`tr`)(78,`td`),bT(79,`Raw Node.js script`),cf(),Aa(80,`td`),bT(81,`0.0071s (7.1ms)`),cf()()()(),Aa(82,`blockquote`,6)(83,`strong`),bT(84,`Note`),cf(),bT(85,` Machine: MacBook Pro Mid 2014, 2.5 GHz Quad-Core Intel Core i7, 16 GB 1600 MHz DDR3, SSD.
`),cf(),Aa(86,`p`),bT(87,`Now, let's repeat all benchmarks, this time using `),Aa(88,`code`),bT(89,`webpack`),cf(),bT(90,` to bundle the application into a single executable JavaScript file (if you have the `),Aa(91,`a`,11),bT(92,`Nest CLI`),cf(),bT(93,` installed, run `),Aa(94,`code`),bT(95,`nest build --webpack`),cf(),bT(96,`).
Instead of the default `),Aa(97,`code`),bT(98,`webpack`),cf(),bT(99,` configuration that the Nest CLI ships with, we'll bundle all dependencies (`),Aa(100,`code`),bT(101,`node_modules`),cf(),bT(102,`) together, as follows:`),cf(),Aa(103,`pre`)(104,`code`,12),bT(105,`
module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices',
    '@nestjs/microservices/microservices-module',
    '@nestjs/microservices/microservices-module.js',
    '@nestjs/websockets/socket-module',
    '@nestjs/websockets/socket-module.js',
    'class-validator',
    'class-transformer',
    'class-transformer/storage',
  ];

  return {
    ...options,
    externals: [],
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
  };
};
`),cf()(),Aa(106,`blockquote`,6)(107,`strong`),bT(108,`Hint`),cf(),bT(109,` To make the Nest CLI use this configuration, create a `),Aa(110,`code`),bT(111,`webpack.config.js`),cf(),bT(112,` file in the root directory of your project.
`),cf(),Aa(113,`p`),bT(114,`With this configuration, we got the following results:`),cf(),Aa(115,`table`),Wa(116,`thead`),Aa(117,`tbody`)(118,`tr`)(119,`td`),bT(120,`Express`),cf(),Aa(121,`td`),bT(122,`0.0068s (6.8ms)`),cf()(),Aa(123,`tr`)(124,`td`),bT(125,`Nest with `),Aa(126,`code`),bT(127,`@nestjs/platform-express`),cf()(),Aa(128,`td`),bT(129,`0.0815s (81.5ms)`),cf()(),Aa(130,`tr`)(131,`td`),bT(132,`Nest (standalone application)`),cf(),Aa(133,`td`),bT(134,`0.0319s (31.9ms)`),cf()(),Aa(135,`tr`)(136,`td`),bT(137,`Raw Node.js script`),cf(),Aa(138,`td`),bT(139,`0.0066s (6.6ms)`),cf()()()(),Aa(140,`blockquote`,6)(141,`strong`),bT(142,`Note`),cf(),bT(143,` Machine: MacBook Pro Mid 2014, 2.5 GHz Quad-Core Intel Core i7, 16 GB 1600 MHz DDR3, SSD.
`),cf(),Aa(144,`blockquote`,6)(145,`strong`),bT(146,`Hint`),cf(),bT(147,` You can optimize it even further with additional code minification and optimization techniques (e.g., using `),Aa(148,`code`),bT(149,`webpack`),cf(),bT(150,` plugins).
`),cf(),Aa(151,`p`),bT(152,`The way you compile your code (and whether you bundle it) has a significant impact on the overall startup time. With `),Aa(153,`code`),bT(154,`webpack`),cf(),bT(155,`, you can get the bootstrap time of a standalone Nest application (a starter project with one module, controller, and service) down to ~32ms on average, and down to ~81.5ms for a regular HTTP, Express-based NestJS app.`),cf(),Aa(156,`p`),bT(157,`For a more complex Nest application, for example, one with 10 resources generated with the `),Aa(158,`code`),bT(159,`$ nest g resource`),cf(),bT(160,` schematic (10 modules, 10 controllers, 10 services, 20 DTO classes, and 50 HTTP endpoints, plus `),Aa(161,`code`),bT(162,`AppModule`),cf(),bT(163,`), the overall startup on the same machine takes approximately 0.1298s (129.8ms). Running a monolithic application as a serverless function rarely makes sense anyway, so treat this benchmark as an example of how the bootstrap time may increase as your application grows.`),cf(),Aa(164,`h4`,13)(165,`span`),bT(166,`Runtime optimizations`),cf()(),Aa(167,`p`),bT(168,`So far, we've covered compile-time optimizations. These are unrelated to the way you define providers and load Nest modules in your application, which plays an essential role as your application grows.`),cf(),Aa(169,`p`),bT(170,`For example, imagine a database connection defined as an `),Aa(171,`a`,14),bT(172,`asynchronous provider`),cf(),bT(173,`. Async providers are designed to delay the application start until one or more asynchronous tasks complete.
If your serverless function needs 2s on average to connect to the database on bootstrap, your endpoint needs at least two extra seconds to send a response on a cold start, because it must wait until the connection is established.`),cf(),Aa(174,`p`),bT(175,`In a `),Aa(176,`strong`),bT(177,`serverless environment`),cf(),bT(178,`, where bootstrap time matters, you structure your providers somewhat differently.
For example, if you use Redis for caching only in certain scenarios, you probably shouldn't define the Redis connection as an async provider: it would slow down bootstrap even for function invocations that don't need it.`),cf(),Aa(179,`p`),bT(180,`You can also lazy load entire modules with the `),Aa(181,`code`),bT(182,`LazyModuleLoader`),cf(),bT(183,` class, as described in the `),Aa(184,`a`,15),bT(185,`lazy-loading modules`),cf(),bT(186,` chapter. Caching is a good example here too.
Imagine that your application has a `),Aa(187,`code`),bT(188,`CacheModule`),cf(),bT(189,` that connects to Redis and exports a `),Aa(190,`code`),bT(191,`CacheService`),cf(),bT(192,` for interacting with the Redis storage. If not every function invocation needs it,
you can load it lazily, on demand. This way, all invocations that don't require caching get a faster startup time on a cold start.`),cf(),Aa(193,`app-copy-button`)(194,`pre`)(195,`code`,10),bT(196,`
if (request.method === RequestMethod[RequestMethod.GET]) {
  const { CacheModule } = await import('./cache.module.js');
  const moduleRef = await this.lazyModuleLoader.load(() => CacheModule);

  const { CacheService } = await import('./cache.service.js');
  const cacheService = moduleRef.get(CacheService);

  return cacheService.get(ENDPOINT_KEY);
}
`),cf()()(),Aa(197,`p`),bT(198,`Another example is a webhook or worker that performs different operations depending on specific conditions (e.g., input arguments).
In this case, you can add a condition inside your route handler that lazily loads the appropriate module for the specific function invocation, and load every other module lazily as well.`),cf(),Aa(199,`app-copy-button`)(200,`pre`)(201,`code`,10),bT(202,`
if (workerType === WorkerType.A) {
  const { WorkerAModule } = await import('./worker-a.module.js');
  const moduleRef = await this.lazyModuleLoader.load(() => WorkerAModule);
  // ...
} else if (workerType === WorkerType.B) {
  const { WorkerBModule } = await import('./worker-b.module.js');
  const moduleRef = await this.lazyModuleLoader.load(() => WorkerBModule);
  // ...
}
`),cf()()(),Aa(203,`h4`,16)(204,`span`),bT(205,`Example integration`),cf()(),Aa(206,`p`),bT(207,`What your application's entry file (typically `),Aa(208,`code`),bT(209,`main.ts`),cf(),bT(210,`) should look like `),Aa(211,`strong`),bT(212,`depends on several factors`),cf(),bT(213,`, so `),Aa(214,`strong`),bT(215,`there's no single template`),cf(),bT(216,` that works for every scenario.
For example, the initialization file required to spin up your serverless function varies by cloud provider (AWS, Azure, GCP, etc.).
Also, your application's code looks different depending on whether you want to run a typical HTTP application with multiple routes/endpoints or provide a single route (or execute a specific portion of code).
For example, for the endpoint-per-function approach, you could use `),Aa(217,`code`),bT(218,`NestFactory.createApplicationContext()`),cf(),bT(219,` instead of booting the HTTP server, setting up middleware, etc.`),cf(),Aa(220,`p`),bT(221,`For illustration purposes, we'll integrate Nest (using `),Aa(222,`code`),bT(223,`@nestjs/platform-express`),cf(),bT(224,`, and therefore spinning up the whole, fully functional HTTP router)
with the `),Aa(225,`a`,17),bT(226,`Serverless`),cf(),bT(227,` framework (in this case, targeting AWS Lambda). As mentioned earlier, your code will differ depending on the cloud provider you choose, among many other factors.`),cf(),Aa(228,`p`),bT(229,`First, install the required packages:`),cf(),Aa(230,`pre`)(231,`code`,18),bT(232,`
$ npm i @codegenie/serverless-express
$ npm i -D @types/aws-lambda serverless-offline
`),cf()(),Aa(233,`blockquote`,6)(234,`strong`),bT(235,`Hint`),cf(),bT(236,` To speed up development cycles, we install the `),Aa(237,`code`),bT(238,`serverless-offline`),cf(),bT(239,` plugin, which emulates AWS Lambda and API Gateway locally.
`),cf(),Aa(240,`p`),bT(241,`Once the installation is complete, create the `),Aa(242,`code`),bT(243,`serverless.yml`),cf(),bT(244,` file to configure the Serverless framework:`),cf(),Aa(245,`pre`)(246,`code`,19),bT(247,`
service: serverless-example

plugins:
  - serverless-offline

provider:
  name: aws
  runtime: nodejs22.x

functions:
  main:
    handler: dist/main.handler
    events:
      - http:
          method: ANY
          path: /
      - http:
          method: ANY
          path: '{proxy+}'
`),cf()(),Aa(248,`blockquote`,6)(249,`strong`),bT(250,`Hint`),cf(),bT(251,` To learn more about the Serverless framework, visit the `),Aa(252,`a`,20),bT(253,`official documentation`),cf(),bT(254,`.
`),cf(),Aa(255,`p`),bT(256,`With this in place, open the `),Aa(257,`code`),bT(258,`main.ts`),cf(),bT(259,` file and update the bootstrap code with the required boilerplate:`),cf(),Aa(260,`app-copy-button`)(261,`pre`)(262,`code`,10),bT(263,`
import { NestFactory } from '@nestjs/core';
import { configure } from '@codegenie/serverless-express';
import type { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module.js';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return configure({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
`),cf()()(),Aa(264,`blockquote`,6)(265,`strong`),bT(266,`Hint`),cf(),bT(267,` To create multiple serverless functions that share common modules, we recommend using the `),Aa(268,`a`,21),bT(269,`CLI monorepo mode`),cf(),bT(270,`.
`),cf(),Aa(271,`blockquote`,22)(272,`strong`),bT(273,`Warning`),cf(),bT(274,` If you use the `),Aa(275,`code`),bT(276,`@nestjs/swagger`),cf(),bT(277,` package, serving the Swagger UI from a serverless function requires one extra step. Behind API Gateway, the request's `),Aa(278,`code`),bT(279,`originalUrl`),cf(),bT(280,` may lack the trailing slash Swagger UI expects, which causes an endless redirect loop. Register a middleware that restores it `),Aa(281,`strong`),bT(282,`before`),cf(),bT(283,` calling `),Aa(284,`code`),bT(285,`SwaggerModule.setup()`),cf(),bT(286,`:
`),Aa(287,`app-copy-button`)(288,`pre`)(289,`code`,10),bT(290,`
app.use((req, res, next) => {
  if (req.originalUrl === '/swagger') {
    req.originalUrl = '/swagger/';
  }
  next();
});
`),cf()()()(),Aa(291,`p`),bT(292,`Next, make sure the `),Aa(293,`code`),bT(294,`esModuleInterop`),cf(),bT(295,` option is enabled in your `),Aa(296,`code`),bT(297,`tsconfig.json`),cf(),bT(298,` file so that the `),Aa(299,`code`),bT(300,`@codegenie/serverless-express`),cf(),bT(301,` package loads properly (projects generated with `),Aa(302,`code`),bT(303,`nest new`),cf(),bT(304,` enable it by default).`),cf(),Aa(305,`pre`)(306,`code`,23),bT(307,`
{
  "compilerOptions": {
    ...
    "esModuleInterop": true
  }
}
`),cf()(),Aa(308,`p`),bT(309,`Now build the application (with `),Aa(310,`code`),bT(311,`nest build`),cf(),bT(312,` or `),Aa(313,`code`),bT(314,`tsc`),cf(),bT(315,`) and use the `),Aa(316,`code`),bT(317,`serverless`),cf(),bT(318,` CLI to start the Lambda function locally:`),cf(),Aa(319,`pre`)(320,`code`,18),bT(321,`
$ npm run build
$ npx serverless offline
`),cf()(),Aa(322,`p`),bT(323,`Once the application is running, open your browser and navigate to `),Aa(324,`code`),bT(325,`http://localhost:3000/dev/[ANY_ROUTE]`),cf(),bT(326,`, where `),Aa(327,`code`),bT(328,`[ANY_ROUTE]`),cf(),bT(329,` is any endpoint registered in your application.`),cf(),Aa(330,`p`),bT(331,`The sections above show that bundling your app with `),Aa(332,`code`),bT(333,`webpack`),cf(),bT(334,` can have a significant impact on the overall bootstrap time.
To make it work with this example, the bundle must expose the exported `),Aa(335,`code`),bT(336,`handler`),cf(),bT(337,` function. Starting with `),Aa(338,`code`),bT(339,`@nestjs/cli`),cf(),bT(340,` v12.0.8, the default `),Aa(341,`code`),bT(342,`webpack`),cf(),bT(343,` configuration does this by setting `),Aa(344,`code`),bT(345,`output.library.type`),cf(),bT(346,` to `),Aa(347,`code`),bT(348,`commonjs2`),cf(),bT(349,`, as long as your `),Aa(350,`code`),bT(351,`webpack.config.js`),cf(),bT(352,` keeps `),Aa(353,`code`),bT(354,`...options.output`),cf(),bT(355,` when it overrides `),Aa(356,`code`),bT(357,`output`),cf(),bT(358,`.
With older versions of the CLI, or with a configuration that doesn't extend `),Aa(359,`code`),bT(360,`options.output`),cf(),bT(361,`, add a few more settings to your `),Aa(362,`code`),bT(363,`webpack.config.js`),cf(),bT(364,` file. In particular, set the `),Aa(365,`code`),bT(366,`output.libraryTarget`),cf(),bT(367,` property to `),Aa(368,`code`),bT(369,`commonjs2`),cf(),bT(370,`.`),cf(),Aa(371,`pre`)(372,`code`,12),bT(373,`
return {
  ...options,
  externals: [],
  output: {
    ...options.output,
    libraryTarget: 'commonjs2',
  },
  // ... the rest of the configuration
};
`),cf()(),Aa(374,`p`),bT(375,`With this in place, run `),Aa(376,`code`),bT(377,`$ nest build --webpack`),cf(),bT(378,` to compile your function's code (and then `),Aa(379,`code`),bT(380,`$ npx serverless offline`),cf(),bT(381,` to test it).`),cf(),Aa(382,`p`),bT(383,`We also recommend (but `),Aa(384,`strong`),bT(385,`don't require`),cf(),bT(386,`, as it slows down the build) installing the `),Aa(387,`code`),bT(388,`terser-webpack-plugin`),cf(),bT(389,` package and overriding its configuration to keep class names intact when minifying your production build. Otherwise, `),Aa(390,`code`),bT(391,`class-validator`),cf(),bT(392,` may behave incorrectly in your application.`),cf(),Aa(393,`pre`)(394,`code`,12),bT(395,`
const TerserPlugin = require('terser-webpack-plugin');

return {
  ...options,
  externals: [],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
        },
      }),
    ],
  },
  output: {
    ...options.output,
    libraryTarget: 'commonjs2',
  },
  // ... the rest of the configuration
};
`),cf()(),Aa(396,`h4`,24)(397,`span`),bT(398,`Using standalone application feature`),cf()(),Aa(399,`p`),bT(400,`Alternatively, if you want to keep your function lightweight and don't need any HTTP-related features (routing, but also guards, interceptors, pipes, etc.),
use `),Aa(401,`code`),bT(402,`NestFactory.createApplicationContext()`),cf(),bT(403,` (as mentioned earlier) instead of running the entire HTTP server (and `),Aa(404,`code`),bT(405,`express`),cf(),bT(406,` under the hood):`),cf(),Aa(407,`app-copy-button`,25)(408,`span`,26),bT(409),LT(410,`extension`),Wa(411,`app-tabs`,null,1),cf(),Aa(413,`pre`)(414,`code`,10),bT(415,`
import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module.js';
import { AppService } from './app.service.js';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const appService = appContext.get(AppService);

  return {
    body: appService.getHello(),
    statusCode: HttpStatus.OK,
  };
};
`),cf()()(),Aa(416,`blockquote`,6)(417,`strong`),bT(418,`Hint`),cf(),Aa(419,`code`),bT(420,`NestFactory.createApplicationContext()`),cf(),bT(421,` doesn't wrap controller methods with enhancers (guards, interceptors, etc.). If you need enhancers, use the `),Aa(422,`code`),bT(423,`NestFactory.create()`),cf(),bT(424,` method.
`),cf(),Aa(425,`p`),bT(426,`You could also pass the `),Aa(427,`code`),bT(428,`event`),cf(),bT(429,` object to a provider, such as an `),Aa(430,`code`),bT(431,`EventsService`),cf(),bT(432,`, that processes it and returns a corresponding value (depending on the input and your business logic).`),cf(),Aa(433,`app-copy-button`)(434,`pre`)(435,`code`,10),bT(436,`
export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const eventsService = appContext.get(EventsService);
  return eventsService.process(event);
};
`),cf()()()(),Aa(437,`a`,27),Wa(438,`i`,28),Aa(439,`span`),bT(440,`Edit on GitHub`),cf()()()),o&2){let f=tT(412);zC(409),hf(` `,jT(410,1,`main`,f.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return i})();var D=(()=>{class i extends xt{static ɵfac=(()=>{let r;return function(a){return(r||(r=im(i)))(a||i)}})();static ɵcmp=ef({type:i,selectors:[[`app-versions`]],features:[xy],decls:260,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`version-compatibility`],[`appAnchor`,``,`id`,`compatibility-table`],[`routerLink`,`/migration-guide`],[`appAnchor`,``,`id`,`moving-between-major-versions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`/v11/migration-guide`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`/v10/migration-guide`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`/v9/migration-guide`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`/v8/migration-guide`],[`href`,`/cli/usages#nest-upgrade`],[1,`language-bash`],[1,`info`],[`appAnchor`,``,`id`,`older-major-versions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`/v11`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`/v10`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/versions.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(o,a){o&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Version compatibility`),cf(),Aa(5,`p`),bT(6,`This page lists the Node.js and RxJS versions that each major version of Nest works with, and explains how to move a project from one major version to the next.`),cf(),Aa(7,`p`),bT(8,`To check which version a project uses, run `),Aa(9,`code`),bT(10,`nest info`),cf(),bT(11,` in its root directory, or look at the `),Aa(12,`code`),bT(13,`@nestjs/core`),cf(),bT(14,` version in `),Aa(15,`code`),bT(16,`package.json`),cf(),bT(17,`.`),cf(),Aa(18,`h4`,4)(19,`span`),bT(20,`Compatibility table`),cf()(),Aa(21,`table`)(22,`thead`)(23,`tr`)(24,`th`),bT(25,`Nest`),cf(),Aa(26,`th`),bT(27,`Node.js`),cf(),Aa(28,`th`),bT(29,`RxJS`),cf(),Aa(30,`th`),bT(31,`Released`),cf()()(),Aa(32,`tbody`)(33,`tr`)(34,`td`),bT(35,`12.x`),cf(),Aa(36,`td`),bT(37,`v20.19+, or v22.12+ on the 22.x line`),cf(),Aa(38,`td`),bT(39,`7.1+`),cf(),Aa(40,`td`),bT(41,`August 2026`),cf()(),Aa(42,`tr`)(43,`td`),bT(44,`11.x`),cf(),Aa(45,`td`),bT(46,`v20+`),cf(),Aa(47,`td`),bT(48,`7.1+`),cf(),Aa(49,`td`),bT(50,`January 2025`),cf()(),Aa(51,`tr`)(52,`td`),bT(53,`10.x`),cf(),Aa(54,`td`),bT(55,`v16+`),cf(),Aa(56,`td`),bT(57,`7.1+`),cf(),Aa(58,`td`),bT(59,`June 2023`),cf()(),Aa(60,`tr`)(61,`td`),bT(62,`9.x`),cf(),Aa(63,`td`),bT(64,`v12+, except v13`),cf(),Aa(65,`td`),bT(66,`7.1+`),cf(),Aa(67,`td`),bT(68,`July 2022`),cf()(),Aa(69,`tr`)(70,`td`),bT(71,`8.x`),cf(),Aa(72,`td`),bT(73,`v10.13+, except v13`),cf(),Aa(74,`td`),bT(75,`7.1+`),cf(),Aa(76,`td`),bT(77,`July 2021`),cf()()()(),Aa(78,`p`),bT(79,`The `),Aa(80,`strong`),bT(81,`Node.js`),cf(),bT(82,` column shows the version that the documentation of each major version asks for to run an application. In Nest 12, the CLI's generators (`),Aa(83,`code`),bT(84,`nest new`),cf(),bT(85,`, `),Aa(86,`code`),bT(87,`nest generate`),cf(),bT(88,`, and `),Aa(89,`code`),bT(90,`nest upgrade`),cf(),bT(91,`) need a newer release than that. See Node.js requirements in the `),Aa(92,`a`,5),bT(93,`migration guide`),cf(),bT(94,` for details.`),cf(),Aa(95,`p`),bT(96,`The `),Aa(97,`strong`),bT(98,`RxJS`),cf(),bT(99,` column shows the `),Aa(100,`code`),bT(101,`rxjs`),cf(),bT(102,` peer dependency range of `),Aa(103,`code`),bT(104,`@nestjs/core`),cf(),bT(105,` and `),Aa(106,`code`),bT(107,`@nestjs/common`),cf(),bT(108,`, which is `),Aa(109,`code`),bT(110,`^7.1.0`),cf(),bT(111,` in all of these versions.`),cf(),Aa(112,`p`),bT(113,`Companion packages, such as `),Aa(114,`code`),bT(115,`@nestjs/config`),cf(),bT(116,` or `),Aa(117,`code`),bT(118,`@nestjs/swagger`),cf(),bT(119,`, follow their own release lines. Use a release whose `),Aa(120,`code`),bT(121,`peerDependencies`),cf(),bT(122,` accept the major version of `),Aa(123,`code`),bT(124,`@nestjs/core`),cf(),bT(125,` and `),Aa(126,`code`),bT(127,`@nestjs/common`),cf(),bT(128,` that your project is on.`),cf(),Aa(129,`h4`,6)(130,`span`),bT(131,`Moving between major versions`),cf()(),Aa(132,`p`),bT(133,`Each migration guide covers a single step, from one major version to the next. This site always shows the guide for the latest step. The guides for earlier steps remain in the archived documentation of the version they upgrade to:`),cf(),Aa(134,`table`)(135,`thead`)(136,`tr`)(137,`th`),bT(138,`From`),cf(),Aa(139,`th`),bT(140,`To`),cf(),Aa(141,`th`),bT(142,`Migration guide`),cf()()(),Aa(143,`tbody`)(144,`tr`)(145,`td`),bT(146,`v11`),cf(),Aa(147,`td`),bT(148,`v12`),cf(),Aa(149,`td`)(150,`a`,5),bT(151,`Migration guide`),cf()()(),Aa(152,`tr`)(153,`td`),bT(154,`v10`),cf(),Aa(155,`td`),bT(156,`v11`),cf(),Aa(157,`td`)(158,`a`,7),bT(159,`docs.nestjs.com/v11/migration-guide`),cf()()(),Aa(160,`tr`)(161,`td`),bT(162,`v9`),cf(),Aa(163,`td`),bT(164,`v10`),cf(),Aa(165,`td`)(166,`a`,8),bT(167,`docs.nestjs.com/v10/migration-guide`),cf()()(),Aa(168,`tr`)(169,`td`),bT(170,`v8`),cf(),Aa(171,`td`),bT(172,`v9`),cf(),Aa(173,`td`)(174,`a`,9),bT(175,`docs.nestjs.com/v9/migration-guide`),cf()()(),Aa(176,`tr`)(177,`td`),bT(178,`v7`),cf(),Aa(179,`td`),bT(180,`v8`),cf(),Aa(181,`td`)(182,`a`,10),bT(183,`docs.nestjs.com/v8/migration-guide`),cf()()()()(),Aa(184,`p`),bT(185,`Because each guide only describes the changes between two adjacent major versions, upgrade a project that is several versions behind `),Aa(186,`strong`),bT(187,`one major version at a time`),cf(),bT(188,`. Follow the guides in order, and make sure the application builds and its tests pass before you start the next step. Before each step, check that your Node.js version matches the target row of the table above.`),cf(),Aa(189,`p`),bT(190,`For the step from v11 to v12, the CLI provides the `),Aa(191,`code`),bT(192,`nest upgrade`),cf(),bT(193,` command, which updates your packages and applies the mechanical parts of the migration. See `),Aa(194,`a`,11),bT(195,`nest upgrade`),cf(),bT(196,` for details. The command doesn't run on a project older than v11, so bring such a project to v11 first.`),cf(),Aa(197,`p`),bT(198,`For the earlier steps, update the packages yourself. The framework packages (`),Aa(199,`code`),bT(200,`@nestjs/core`),cf(),bT(201,`, `),Aa(202,`code`),bT(203,`@nestjs/common`),cf(),bT(204,`, `),Aa(205,`code`),bT(206,`@nestjs/testing`),cf(),bT(207,`, and the `),Aa(208,`code`),bT(209,`@nestjs/platform-*`),cf(),bT(210,`, `),Aa(211,`code`),bT(212,`@nestjs/microservices`),cf(),bT(213,`, and `),Aa(214,`code`),bT(215,`@nestjs/websockets`),cf(),bT(216,` packages you use), as well as `),Aa(217,`code`),bT(218,`@nestjs/cli`),cf(),bT(219,` and `),Aa(220,`code`),bT(221,`@nestjs/schematics`),cf(),bT(222,`, share the major version number of Nest. Move them to the target major version in a single command, so that npm resolves their peer dependencies together. npm keeps each package in the `),Aa(223,`code`),bT(224,`package.json`),cf(),bT(225,` section it is already in. For example, from v10 to v11:`),cf(),Aa(226,`pre`)(227,`code`,12),bT(228,`
$ npm i @nestjs/core@11 @nestjs/common@11 @nestjs/platform-express@11 @nestjs/testing@11 @nestjs/cli@11 @nestjs/schematics@11
`),cf()(),Aa(229,`blockquote`,13)(230,`strong`),bT(231,`Hint`),cf(),bT(232,` If another package in your project, such as `),Aa(233,`code`),bT(234,`@nestjs/config`),cf(),bT(235,` or `),Aa(236,`code`),bT(237,`@nestjs/swagger`),cf(),bT(238,`, doesn't accept the target major version in its `),Aa(239,`code`),bT(240,`peerDependencies`),cf(),bT(241,`, npm reports a peer dependency conflict for it. Add that package to the same command, at a release that accepts the target major version. To see what a release accepts, run `),Aa(242,`code`),bT(243,`npm view <package>@<version> peerDependencies`),cf(),bT(244,`.
`),cf(),Aa(245,`h4`,14)(246,`span`),bT(247,`Older major versions`),cf()(),Aa(248,`p`),bT(249,`The documentation for previous major versions, back to v4, remains available under their own paths, for example `),Aa(250,`a`,15),bT(251,`docs.nestjs.com/v11`),cf(),bT(252,` or `),Aa(253,`a`,16),bT(254,`docs.nestjs.com/v10`),cf(),bT(255,`.`),cf()(),Aa(256,`a`,17),Wa(257,`i`,18),Aa(258,`span`),bT(259,`Edit on GitHub`),cf()()())},dependencies:[Lt,Jc],encapsulation:2})}return i})();var ot=[{path:`global-prefix`,component:N,data:{title:`Global prefix - FAQ`}},{path:`hybrid-application`,component:P,data:{title:`Hybrid application - FAQ`}},{path:`multiple-servers`,component:q,data:{title:`HTTPS & Multiple Servers - FAQ`}},{path:`http-adapter`,component:F,data:{title:`HTTP adapter - FAQ`}},{path:`keep-alive-connections`,component:H,data:{title:`Keep-Alive connections - FAQ`}},{path:`raw-body`,component:I,data:{title:`Raw Body`}},{path:`request-lifecycle`,component:R,data:{title:`Request lifecycle - FAQ`}},{path:`common-errors`,component:T,data:{title:`Common errors - FAQ`}},{path:`nest-vs-fastify-express-hono`,component:M,data:{title:`Nest vs Fastify, Express and Hono - FAQ`}},{path:`cloudflare-workers`,component:j,data:{title:`Cloudflare Workers - FAQ`}},{path:`serverless`,component:B,data:{title:`Serverless - FAQ`}},{path:`versions`,component:D,data:{title:`Version compatibility - FAQ`}}];export{ot as FAQ_ROUTES};