import{C as hf,M as xy,N as zC,P as zy,T as jT,_ as Wa,a as u,b as cf,c as l$2,d as Jc,i as g,k as tT,l as Aa,m as LT,n as ln,o as l,p as Ky,r as xt,s as l$1,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var F=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-async-components`]],features:[xy],decls:47,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`asynchronous-providers`],[1,`language-typescript`],[1,`info`],[`routerLink`,`/fundamentals/custom-providers`],[`appAnchor`,``,`id`,`injection`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/async-components.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){d&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Asynchronous providers`),cf(),Aa(5,`p`),bT(6,`Sometimes the application start should be delayed until one or more `),Aa(7,`strong`),bT(8,`asynchronous tasks`),cf(),bT(9,` complete. For example, you may not want to start accepting requests until the connection to the database has been established. Asynchronous providers let you do this.`),cf(),Aa(10,`p`),bT(11,`To create one, use `),Aa(12,`code`),bT(13,`async/await`),cf(),bT(14,` with the `),Aa(15,`code`),bT(16,`useFactory`),cf(),bT(17,` syntax. The factory returns a `),Aa(18,`code`),bT(19,`Promise`),cf(),bT(20,`, and the factory function can `),Aa(21,`code`),bT(22,`await`),cf(),bT(23,` asynchronous tasks. Nest awaits resolution of the promise before instantiating any class that depends on (injects) such a provider.`),cf(),Aa(24,`app-copy-button`)(25,`pre`)(26,`code`,4),bT(27,`
{
  provide: 'ASYNC_CONNECTION',
  useFactory: async () => {
    const connection = await createConnection(options);
    return connection;
  },
}
`),cf()()(),Aa(28,`blockquote`,5)(29,`strong`),bT(30,`Hint`),cf(),bT(31,` Learn more about the custom provider syntax in the `),Aa(32,`a`,6),bT(33,`custom providers`),cf(),bT(34,` chapter.
`),cf(),Aa(35,`h4`,7)(36,`span`),bT(37,`Injection`),cf()(),Aa(38,`p`),bT(39,`Asynchronous providers are injected into other components by their tokens, like any other provider. In the example above, you would use `),Aa(40,`code`),bT(41,`@Inject('ASYNC_CONNECTION')`),cf(),bT(42,`.`),cf()(),Aa(43,`a`,8),Wa(44,`i`,9),Aa(45,`span`),bT(46,`Edit on GitHub`),cf()()())},dependencies:[ln,Jc,Lt],encapsulation:2})}return a})();var L=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-circular-dependency`]],features:[xy],decls:158,vars:24,consts:[[`contentReference`,``],[`appf04d85b84ec669208c9ea056f0b13cc630aea98a`,``],[`app72b58cdb09dc8a747ad2851a47d6ab2a668e4d8e`,``],[`app379f28983bd7d3ce16686151bf3641aa49396b49`,``],[`app9a490ade7a0e68c2bde7cf3648caa82a710c791d`,``],[1,`content`],[1,`content-inner`],[`id`,`circular-dependency`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/issues/1181#issuecomment-430197191`],[`appAnchor`,``,`id`,`forward-reference`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/issues/5778`],[`appAnchor`,``,`id`,`moduleref-class-alternative`],[`routerLink`,`/fundamentals/module-ref`],[`appAnchor`,``,`id`,`module-forward-reference`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/circular-dependency.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){if(d&1&&(Aa(0,`div`,5,0)(2,`div`,6)(3,`h3`,7),bT(4,`Circular dependency`),cf(),Aa(5,`p`),bT(6,`A circular dependency occurs when two classes depend on each other. For example, class A needs class B, and class B also needs class A. Circular dependencies can arise in Nest between modules and between providers.`),cf(),Aa(7,`p`),bT(8,`Avoid circular dependencies where possible, but you can't always do so. In such cases, Nest lets you resolve circular dependencies between providers in two ways: with `),Aa(9,`strong`),bT(10,`forward referencing`),cf(),bT(11,`, or by using the `),Aa(12,`strong`),bT(13,`ModuleRef`),cf(),bT(14,` class to retrieve a provider instance from the DI container. This chapter describes both techniques, as well as how to resolve circular dependencies between modules.`),cf(),Aa(15,`blockquote`,8)(16,`strong`),bT(17,`Warning`),cf(),bT(18,` A circular dependency can also be caused by using "barrel files" (`),Aa(19,`code`),bT(20,`index.ts`),cf(),bT(21,` files) to group imports. Avoid barrel files for module and provider classes. In particular, don't use a barrel file to import files within the same directory as the barrel file, i.e., `),Aa(22,`code`),bT(23,`cats/cats.controller`),cf(),bT(24,` should not import `),Aa(25,`code`),bT(26,`cats`),cf(),bT(27,` to import the `),Aa(28,`code`),bT(29,`cats/cats.service`),cf(),bT(30,` file. For more details, see `),Aa(31,`a`,9),bT(32,`this GitHub issue on barrel files and circular dependencies`),cf(),bT(33,`.
`),cf(),Aa(34,`h4`,10)(35,`span`),bT(36,`Forward reference`),cf()(),Aa(37,`p`),bT(38,`A `),Aa(39,`strong`),bT(40,`forward reference`),cf(),bT(41,`, created with the `),Aa(42,`code`),bT(43,`forwardRef()`),cf(),bT(44,` utility function, lets Nest reference classes that aren't defined yet. For example, if `),Aa(45,`code`),bT(46,`CatsService`),cf(),bT(47,` and `),Aa(48,`code`),bT(49,`CommonService`),cf(),bT(50,` depend on each other, both sides of the relationship can use `),Aa(51,`code`),bT(52,`@Inject()`),cf(),bT(53,` and the `),Aa(54,`code`),bT(55,`forwardRef()`),cf(),bT(56,` utility to resolve the circular dependency. Otherwise, Nest won't instantiate them, because not all of the essential metadata will be available. Here's an example:`),cf(),Aa(57,`app-copy-button`,11)(58,`span`,12),bT(59),LT(60,`extension`),Wa(61,`app-tabs`,null,1),cf(),Aa(63,`pre`)(64,`code`,13),bT(65,`
@Injectable()
export class CatsService {
  constructor(
    @Inject(forwardRef(() => CommonService))
    private commonService: CommonService,
  ) {}
}
`),cf()(),Aa(66,`pre`)(67,`code`,13),bT(68,`
@Injectable()
@Dependencies(forwardRef(() => CommonService))
export class CatsService {
  constructor(commonService) {
    this.commonService = commonService;
  }
}
`),cf()()(),Aa(69,`blockquote`,14)(70,`strong`),bT(71,`Hint`),cf(),bT(72,` The `),Aa(73,`code`),bT(74,`forwardRef()`),cf(),bT(75,` function is imported from the `),Aa(76,`code`),bT(77,`@nestjs/common`),cf(),bT(78,` package.
`),cf(),Aa(79,`p`),bT(80,`That covers one side of the relationship. Now do the same with `),Aa(81,`code`),bT(82,`CommonService`),cf(),bT(83,`:`),cf(),Aa(84,`app-copy-button`,11)(85,`span`,12),bT(86),LT(87,`extension`),Wa(88,`app-tabs`,null,2),cf(),Aa(90,`pre`)(91,`code`,13),bT(92,`
@Injectable()
export class CommonService {
  constructor(
    @Inject(forwardRef(() => CatsService))
    private catsService: CatsService,
  ) {}
}
`),cf()(),Aa(93,`pre`)(94,`code`,13),bT(95,`
@Injectable()
@Dependencies(forwardRef(() => CatsService))
export class CommonService {
  constructor(catsService) {
    this.catsService = catsService;
  }
}
`),cf()()(),Aa(96,`blockquote`,8)(97,`strong`),bT(98,`Warning`),cf(),bT(99,` The order of instantiation is indeterminate. Make sure your code does not depend on which constructor is called first. Circular dependencies that depend on providers with `),Aa(100,`code`),bT(101,`Scope.REQUEST`),cf(),bT(102,` can lead to undefined dependencies. See `),Aa(103,`a`,15),bT(104,`this GitHub issue on request-scoped circular dependencies`),cf(),bT(105,` for more information.
`),cf(),Aa(106,`h4`,16)(107,`span`),bT(108,`ModuleRef class alternative`),cf()(),Aa(109,`p`),bT(110,`An alternative to `),Aa(111,`code`),bT(112,`forwardRef()`),cf(),bT(113,` is to refactor your code and use the `),Aa(114,`code`),bT(115,`ModuleRef`),cf(),bT(116,` class to retrieve a provider on one side of the (otherwise) circular relationship. Learn more about the `),Aa(117,`code`),bT(118,`ModuleRef`),cf(),bT(119,` utility class in the `),Aa(120,`a`,17),bT(121,`module reference`),cf(),bT(122,` chapter.`),cf(),Aa(123,`h4`,18)(124,`span`),bT(125,`Module forward reference`),cf()(),Aa(126,`p`),bT(127,`To resolve circular dependencies between modules, use the same `),Aa(128,`code`),bT(129,`forwardRef()`),cf(),bT(130,` utility function on both sides of the module association. For example:`),cf(),Aa(131,`app-copy-button`,11)(132,`span`,12),bT(133),LT(134,`extension`),Wa(135,`app-tabs`,null,3),cf(),Aa(137,`pre`)(138,`code`,13),bT(139,`
@Module({
  imports: [forwardRef(() => CatsModule)],
})
export class CommonModule {}
`),cf()()(),Aa(140,`p`),bT(141,`That covers one side of the relationship. Now do the same with `),Aa(142,`code`),bT(143,`CatsModule`),cf(),bT(144,`:`),cf(),Aa(145,`app-copy-button`,11)(146,`span`,12),bT(147),LT(148,`extension`),Wa(149,`app-tabs`,null,4),cf(),Aa(151,`pre`)(152,`code`,13),bT(153,`
@Module({
  imports: [forwardRef(() => CommonModule)],
})
export class CatsModule {}
`),cf()()()(),Aa(154,`a`,19),Wa(155,`i`,20),Aa(156,`span`),bT(157,`Edit on GitHub`),cf()()()),d&2){let x=tT(62),h=tT(89),y=tT(136),I=tT(150);zC(59),hf(` `,jT(60,12,`cats.service`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(20),hf(` `,jT(87,15,`common.service`,h.isJsActive),`
`),zC(4),zy(`hide`,h.isJsActive),zC(3),zy(`hide`,!h.isJsActive),zC(40),hf(` `,jT(134,18,`common.module`,y.isJsActive),`
`),zC(14),hf(` `,jT(148,21,`cats.module`,I.isJsActive),`
`)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return a})();var G=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-discovery-service`]],features:[xy],decls:140,vars:8,consts:[[`contentReference`,``],[`app0263a372f4773f9b3673472e092e5bc31c3923d9`,``],[1,`content`],[1,`content-inner`],[`id`,`discovery-service`],[`appAnchor`,``,`id`,`getting-started`],[1,`language-typescript`],[1,`with-heading`],[1,`filename`],[`appAnchor`,``,`id`,`discovering-providers-and-controllers`],[`appAnchor`,``,`id`,`extracting-metadata`],[`appAnchor`,``,`id`,`conclusion`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/discovery-service.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){if(d&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Discovery service`),cf(),Aa(5,`p`),bT(6,`The `),Aa(7,`code`),bT(8,`DiscoveryService`),cf(),bT(9,`, provided by the `),Aa(10,`code`),bT(11,`@nestjs/core`),cf(),bT(12,` package, lets you dynamically inspect and retrieve providers, controllers, and their metadata within a NestJS application. This is particularly useful when building plugins, decorators, or advanced features that rely on runtime introspection, and lets you build more flexible, modular architectures with automated, dynamic behavior.`),cf(),Aa(13,`h4`,5)(14,`span`),bT(15,`Getting started`),cf()(),Aa(16,`p`),bT(17,`Before using `),Aa(18,`code`),bT(19,`DiscoveryService`),cf(),bT(20,`, import the `),Aa(21,`code`),bT(22,`DiscoveryModule`),cf(),bT(23,` into the module where you intend to use it. This makes the service available for dependency injection:`),cf(),Aa(24,`app-copy-button`)(25,`pre`)(26,`code`,6),bT(27,`
import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { ExampleService } from './example.service.js';

@Module({
  imports: [DiscoveryModule],
  providers: [ExampleService],
})
export class ExampleModule {}
`),cf()()(),Aa(28,`p`),bT(29,`Once the module is set up, you can inject `),Aa(30,`code`),bT(31,`DiscoveryService`),cf(),bT(32,` into any provider that needs dynamic discovery:`),cf(),Aa(33,`app-copy-button`,7)(34,`span`,8),bT(35),LT(36,`extension`),Wa(37,`app-tabs`,null,1),cf(),Aa(39,`pre`)(40,`code`,6),bT(41,`
@Injectable()
export class ExampleService {
  constructor(private readonly discoveryService: DiscoveryService) {}
}
`),cf()(),Aa(42,`pre`)(43,`code`,6),bT(44,`
@Injectable()
@Dependencies(DiscoveryService)
export class ExampleService {
  constructor(discoveryService) {
    this.discoveryService = discoveryService;
  }
}
`),cf()()(),Aa(45,`h4`,9)(46,`span`),bT(47,`Discovering providers and controllers`),cf()(),Aa(48,`p`),bT(49,`A key capability of `),Aa(50,`code`),bT(51,`DiscoveryService`),cf(),bT(52,` is retrieving all registered providers in the application, which is useful for dynamically processing providers based on specific conditions. The following snippet retrieves all providers:`),cf(),Aa(53,`app-copy-button`)(54,`pre`)(55,`code`,6),bT(56,`
const providers = this.discoveryService.getProviders();
console.log(providers);
`),cf()()(),Aa(57,`p`),bT(58,`Each returned object is an `),Aa(59,`code`),bT(60,`InstanceWrapper`),cf(),bT(61,`, which holds information such as the provider's instance, token, and class (`),Aa(62,`code`),bT(63,`metatype`),cf(),bT(64,`). Similarly, to retrieve all registered controllers within the application, use:`),cf(),Aa(65,`app-copy-button`)(66,`pre`)(67,`code`,6),bT(68,`
const controllers = this.discoveryService.getControllers();
console.log(controllers);
`),cf()()(),Aa(69,`p`),bT(70,`This is useful when controllers need to be processed dynamically, e.g., for analytics tracking or automatic registration mechanisms.`),cf(),Aa(71,`p`),bT(72,`Both methods accept an optional options object. Pass an `),Aa(73,`code`),bT(74,`include`),cf(),bT(75,` array of module classes to limit discovery to those modules:`),cf(),Aa(76,`app-copy-button`)(77,`pre`)(78,`code`,6),bT(79,`
const providers = this.discoveryService.getProviders({
  include: [CatsModule],
});
`),cf()()(),Aa(80,`h4`,10)(81,`span`),bT(82,`Extracting metadata`),cf()(),Aa(83,`p`),bT(84,`Beyond discovering providers and controllers, `),Aa(85,`code`),bT(86,`DiscoveryService`),cf(),bT(87,` also retrieves metadata attached to these components. This is particularly valuable when working with custom decorators that store metadata at runtime.`),cf(),Aa(88,`p`),bT(89,`For example, consider a custom decorator used to tag providers with specific metadata:`),cf(),Aa(90,`app-copy-button`)(91,`pre`)(92,`code`,6),bT(93,`
import { DiscoveryService } from '@nestjs/core';

export const FeatureFlag = DiscoveryService.createDecorator();
`),cf()()(),Aa(94,`p`),bT(95,`Applying this decorator to a service stores metadata that can later be queried:`),cf(),Aa(96,`app-copy-button`)(97,`pre`)(98,`code`,6),bT(99,`
import { Injectable } from '@nestjs/common';
import { FeatureFlag } from './custom-metadata.decorator.js';

@Injectable()
@FeatureFlag('experimental')
export class CustomService {}
`),cf()()(),Aa(100,`p`),bT(101,`Once metadata is attached to providers this way, you can use `),Aa(102,`code`),bT(103,`DiscoveryService`),cf(),bT(104,` to filter providers based on the assigned metadata. The following snippet retrieves a provider tagged with a specific metadata value:`),cf(),Aa(105,`app-copy-button`)(106,`pre`)(107,`code`,6),bT(108,`
const providers = this.discoveryService.getProviders();

const [provider] = providers.filter(
  (item) =>
    this.discoveryService.getMetadataByDecorator(FeatureFlag, item) ===
    'experimental',
);

console.log(
  'Providers with the "experimental" feature flag metadata:',
  provider,
);
`),cf()()(),Aa(109,`p`),bT(110,`Decorators created with `),Aa(111,`code`),bT(112,`DiscoveryService.createDecorator()`),cf(),bT(113,` also register the classes they decorate, so you can retrieve only those classes by passing the decorator's `),Aa(114,`code`),bT(115,`KEY`),cf(),bT(116,` as the `),Aa(117,`code`),bT(118,`metadataKey`),cf(),bT(119,` option, instead of filtering all providers yourself:`),cf(),Aa(120,`app-copy-button`)(121,`pre`)(122,`code`,6),bT(123,`
const providers = this.discoveryService.getProviders({
  metadataKey: FeatureFlag.KEY,
});
`),cf()()(),Aa(124,`p`),bT(125,`The same decorator can also be applied to methods. To read method-level metadata, pass the method name as the third argument to `),Aa(126,`code`),bT(127,`getMetadataByDecorator()`),cf(),bT(128,`.`),cf(),Aa(129,`h4`,11)(130,`span`),bT(131,`Conclusion`),cf()(),Aa(132,`p`)(133,`code`),bT(134,`DiscoveryService`),cf(),bT(135,` enables runtime introspection in NestJS applications. By discovering providers, controllers, and their metadata dynamically, it serves as a building block for extensible frameworks, plugins, and automation-driven features, whether you need to scan and process providers, extract metadata for further processing, or build modular architectures.`),cf()(),Aa(136,`a`,12),Wa(137,`i`,13),Aa(138,`span`),bT(139,`Edit on GitHub`),cf()()()),d&2){let x=tT(38);zC(35),hf(` `,jT(36,5,`example.service`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return a})();var H=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-dependency-injection`]],features:[xy],decls:525,vars:36,consts:[[`contentReference`,``],[`app732f423d0f4c663366984e9cd45ca432d1a8d9c2`,``],[`app8f3f3e09d433209dbd47da7878f9996d09e1b265`,``],[`app12059bef3cb8ce087c7ac7f0a4ecbcfbf12f7859`,``],[`app56ce3ca01e3ccd9274e82b956d7790189b016de4`,``],[`app7c818fefd30a705b8bf06aa26abb752ca318c43f`,``],[`appad11ff26919bc4caaa4bc68f8ba258d86836ebcc`,``],[`app68cca9f6082288e8fff74a07ac22546c9c6ceb0e`,``],[1,`content`],[1,`content-inner`],[`id`,`custom-providers`],[`href`,`/providers#dependency-injection`],[`appAnchor`,``,`id`,`di-fundamentals`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Inversion_of_control`],[`routerLink`,`/providers`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`start`,`3`],[`href`,`/fundamentals/custom-providers#standard-providers`],[`appAnchor`,``,`id`,`standard-providers`],[`appAnchor`,``,`id`,`custom-providers-1`],[1,`info`],[`appAnchor`,``,`id`,`value-providers-usevalue`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.typescriptlang.org/docs/handbook/type-compatibility.html`],[`appAnchor`,``,`id`,`non-class-based-provider-tokens`],[`href`,`/fundamentals/custom-providers#di-fundamentals`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.typescriptlang.org/docs/handbook/enums.html`],[`appAnchor`,``,`id`,`interfaces-and-abstract-classes`],[`appAnchor`,``,`id`,`class-providers-useclass`],[`appAnchor`,``,`id`,`factory-providers-usefactory`],[`appAnchor`,``,`id`,`alias-providers-useexisting`],[`appAnchor`,``,`id`,`non-service-based-providers`],[`appAnchor`,``,`id`,`export-custom-provider`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/dependency-injection.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){if(d&1&&(Aa(0,`div`,8,0)(2,`div`,9)(3,`h3`,10),bT(4,`Custom providers`),cf(),Aa(5,`p`),bT(6,`Earlier chapters touched on various aspects of `),Aa(7,`strong`),bT(8,`dependency injection (DI)`),cf(),bT(9,` and how Nest uses it. One example is `),Aa(10,`a`,11),bT(11,`constructor-based`),cf(),bT(12,` dependency injection, which injects instances (often service providers) into classes. Dependency injection is built into the Nest core at a fundamental level. So far, we've explored only one main pattern. As your application grows more complex, you may need the full feature set of the DI system, so this chapter explores it in more detail.`),cf(),Aa(13,`h4`,12)(14,`span`),bT(15,`DI fundamentals`),cf()(),Aa(16,`p`),bT(17,`Dependency injection is an `),Aa(18,`a`,13),bT(19,`inversion of control (IoC)`),cf(),bT(20,` technique in which you delegate the instantiation of dependencies to the IoC container (in our case, the NestJS runtime system) instead of instantiating them imperatively in your own code. Let's examine what happens in this example from the `),Aa(21,`a`,14),bT(22,`Providers`),cf(),bT(23,` chapter.`),cf(),Aa(24,`p`),bT(25,`First, we define a provider. The `),Aa(26,`code`),bT(27,`@Injectable()`),cf(),bT(28,` decorator marks the `),Aa(29,`code`),bT(30,`CatsService`),cf(),bT(31,` class as a provider.`),cf(),Aa(32,`app-copy-button`,15)(33,`span`,16),bT(34),LT(35,`extension`),Wa(36,`app-tabs`,null,1),cf(),Aa(38,`pre`)(39,`code`,17),bT(40,`
import { Injectable } from '@nestjs/common';
import type { Cat } from './interfaces/cat.interface.js';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }
}
`),cf()(),Aa(41,`pre`)(42,`code`,17),bT(43,`
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  constructor() {
    this.cats = [];
  }

  findAll() {
    return this.cats;
  }
}
`),cf()()(),Aa(44,`p`),bT(45,`Then we request that Nest inject the provider into our controller class:`),cf(),Aa(46,`app-copy-button`,15)(47,`span`,16),bT(48),LT(49,`extension`),Wa(50,`app-tabs`,null,2),cf(),Aa(52,`pre`)(53,`code`,17),bT(54,`
import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service.js';
import type { Cat } from './interfaces/cat.interface.js';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
`),cf()(),Aa(55,`pre`)(56,`code`,17),bT(57,`
import { Controller, Get, Dependencies } from '@nestjs/common';
import { CatsService } from './cats.service.js';

@Controller('cats')
@Dependencies(CatsService)
export class CatsController {
  constructor(catsService) {
    this.catsService = catsService;
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }
}
`),cf()()(),Aa(58,`p`),bT(59,`Finally, we register the provider with the Nest IoC container:`),cf(),Aa(60,`app-copy-button`,15)(61,`span`,16),bT(62),LT(63,`extension`),Wa(64,`app-tabs`,null,3),cf(),Aa(66,`pre`)(67,`code`,17),bT(68,`
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller.js';
import { CatsService } from './cats/cats.service.js';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
`),cf()()(),Aa(69,`p`),bT(70,`Three key steps make this work:`),cf(),Aa(71,`ol`)(72,`li`),bT(73,`In `),Aa(74,`code`),bT(75,`cats.service.ts`),cf(),bT(76,`, the `),Aa(77,`code`),bT(78,`@Injectable()`),cf(),bT(79,` decorator declares `),Aa(80,`code`),bT(81,`CatsService`),cf(),bT(82,` as a class that the Nest IoC container can manage.`),cf(),Aa(83,`li`),bT(84,`In `),Aa(85,`code`),bT(86,`cats.controller.ts`),cf(),bT(87,`, `),Aa(88,`code`),bT(89,`CatsController`),cf(),bT(90,` declares a dependency on the `),Aa(91,`code`),bT(92,`CatsService`),cf(),bT(93,` token with constructor injection:`),cf()(),Aa(94,`app-copy-button`)(95,`pre`)(96,`code`,17),bT(97,`
  constructor(private catsService: CatsService)
`),cf()()(),Aa(98,`ol`,18)(99,`li`),bT(100,`In `),Aa(101,`code`),bT(102,`app.module.ts`),cf(),bT(103,`, we associate the token `),Aa(104,`code`),bT(105,`CatsService`),cf(),bT(106,` with the class `),Aa(107,`code`),bT(108,`CatsService`),cf(),bT(109,` from the `),Aa(110,`code`),bT(111,`cats.service.ts`),cf(),bT(112,` file. The `),Aa(113,`a`,19),bT(114,`Standard providers`),cf(),bT(115,` section below shows exactly how this association (also called `),Aa(116,`em`),bT(117,`registration`),cf(),bT(118,`) occurs.`),cf()(),Aa(119,`p`),bT(120,`When the Nest IoC container instantiates a `),Aa(121,`code`),bT(122,`CatsController`),cf(),bT(123,`, it first looks for any dependencies*. When it finds the `),Aa(124,`code`),bT(125,`CatsService`),cf(),bT(126,` dependency, it looks up the `),Aa(127,`code`),bT(128,`CatsService`),cf(),bT(129,` token, which returns the `),Aa(130,`code`),bT(131,`CatsService`),cf(),bT(132,` class, per the registration step (#3 above). Assuming `),Aa(133,`code`),bT(134,`SINGLETON`),cf(),bT(135,` scope (the default), Nest then either creates an instance of `),Aa(136,`code`),bT(137,`CatsService`),cf(),bT(138,`, caches it, and returns it, or, if an instance is already cached, returns the existing one.`),cf(),Aa(139,`p`),bT(140,`*This explanation is simplified to illustrate the point. In reality, analyzing the code for dependencies is a sophisticated process that happens during application bootstrapping. One key property is that dependency analysis (or "creating the dependency graph") is `),Aa(141,`strong`),bT(142,`transitive`),cf(),bT(143,`: in the example above, if `),Aa(144,`code`),bT(145,`CatsService`),cf(),bT(146,` itself had dependencies, those would be resolved too. The dependency graph ensures that dependencies are resolved in the correct order, essentially "bottom up". This mechanism relieves you from having to manage complex dependency graphs yourself.`),cf(),Aa(147,`p`),Wa(148,`app-banner-courses`),cf(),Aa(149,`h4`,20)(150,`span`),bT(151,`Standard providers`),cf()(),Aa(152,`p`),bT(153,`Let's take a closer look at the `),Aa(154,`code`),bT(155,`@Module()`),cf(),bT(156,` decorator. In `),Aa(157,`code`),bT(158,`app.module`),cf(),bT(159,`, we declare:`),cf(),Aa(160,`app-copy-button`)(161,`pre`)(162,`code`,17),bT(163,`
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
`),cf()()(),Aa(164,`p`),bT(165,`The `),Aa(166,`code`),bT(167,`providers`),cf(),bT(168,` property takes an array of providers. So far, we've supplied those providers as a list of class names. In fact, the syntax `),Aa(169,`code`),bT(170,`providers: [CatsService]`),cf(),bT(171,` is shorthand for the more complete syntax:`),cf(),Aa(172,`app-copy-button`)(173,`pre`)(174,`code`,17),bT(175,`
providers: [
  {
    provide: CatsService,
    useClass: CatsService,
  },
];
`),cf()()(),Aa(176,`p`),bT(177,`This explicit construction shows the registration process: it associates the token `),Aa(178,`code`),bT(179,`CatsService`),cf(),bT(180,` with the class `),Aa(181,`code`),bT(182,`CatsService`),cf(),bT(183,`. The shorthand notation is a convenience for the most common use case, where the token is used to request an instance of the class with the same name.`),cf(),Aa(184,`h4`,21)(185,`span`),bT(186,`Custom providers`),cf()(),Aa(187,`p`),bT(188,`Sometimes your requirements go beyond what `),Aa(189,`em`),bT(190,`standard providers`),cf(),bT(191,` offer. For example:`),cf(),Aa(192,`ul`)(193,`li`),bT(194,`You want to create a custom instance instead of having Nest instantiate (or return a cached instance of) a class.`),cf(),Aa(195,`li`),bT(196,`You want to reuse an existing class in a second dependency.`),cf(),Aa(197,`li`),bT(198,`You want to override a class with a mock version for testing.`),cf()(),Aa(199,`p`),bT(200,`Nest lets you define custom providers to handle these cases, and offers several ways to define them. The following sections walk through each one.`),cf(),Aa(201,`blockquote`,22)(202,`strong`),bT(203,`Hint`),cf(),bT(204,` If you run into problems with dependency resolution, set the `),Aa(205,`code`),bT(206,`NEST_DEBUG`),cf(),bT(207,` environment variable to get extra dependency resolution logs during startup.
`),cf(),Aa(208,`h4`,23)(209,`span`),bT(210,`Value providers: `),Aa(211,`code`),bT(212,`useValue`),cf()()(),Aa(213,`p`),bT(214,`The `),Aa(215,`code`),bT(216,`useValue`),cf(),bT(217,` syntax is useful for injecting a constant value, putting an external library into the Nest container, or replacing a real implementation with a mock object. For example, suppose you want Nest to use a mock `),Aa(218,`code`),bT(219,`CatsService`),cf(),bT(220,` for testing purposes:`),cf(),Aa(221,`app-copy-button`)(222,`pre`)(223,`code`,17),bT(224,`
import { CatsService } from './cats.service.js';

const mockCatsService = {
  /* mock implementation
  ...
  */
};

@Module({
  imports: [CatsModule],
  providers: [
    {
      provide: CatsService,
      useValue: mockCatsService,
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(225,`p`),bT(226,`In this example, the `),Aa(227,`code`),bT(228,`CatsService`),cf(),bT(229,` token resolves to the `),Aa(230,`code`),bT(231,`mockCatsService`),cf(),bT(232,` mock object. `),Aa(233,`code`),bT(234,`useValue`),cf(),bT(235,` requires a value, in this case a literal object that has the same interface as the `),Aa(236,`code`),bT(237,`CatsService`),cf(),bT(238,` class it replaces. Because of TypeScript's `),Aa(239,`a`,24),bT(240,`structural typing`),cf(),bT(241,`, you can use any object with a compatible interface, including a literal object or a class instance created with `),Aa(242,`code`),bT(243,`new`),cf(),bT(244,`.`),cf(),Aa(245,`h4`,25)(246,`span`),bT(247,`Non-class-based provider tokens`),cf()(),Aa(248,`p`),bT(249,`So far, we've used class names as our provider tokens (the value of the `),Aa(250,`code`),bT(251,`provide`),cf(),bT(252,` property in a provider listed in the `),Aa(253,`code`),bT(254,`providers`),cf(),bT(255,` array). This matches the standard pattern used with `),Aa(256,`a`,11),bT(257,`constructor-based injection`),cf(),bT(258,`, where the token is also a class name. (See `),Aa(259,`a`,26),bT(260,`DI fundamentals`),cf(),bT(261,` for a refresher on tokens.) Sometimes you need the flexibility to use strings or symbols as DI tokens. For example:`),cf(),Aa(262,`app-copy-button`)(263,`pre`)(264,`code`,17),bT(265,`
import { connection } from './connection.js';

@Module({
  providers: [
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(266,`p`),bT(267,`In this example, we associate a string-valued token (`),Aa(268,`code`),bT(269,`'CONNECTION'`),cf(),bT(270,`) with a pre-existing `),Aa(271,`code`),bT(272,`connection`),cf(),bT(273,` object imported from an external file.`),cf(),Aa(274,`blockquote`,27)(275,`strong`),bT(276,`Notice`),cf(),bT(277,` Besides strings, you can also use JavaScript `),Aa(278,`a`,28),bT(279,`symbols`),cf(),bT(280,` or TypeScript `),Aa(281,`a`,29),bT(282,`enums`),cf(),bT(283,` as token values.
`),cf(),Aa(284,`p`),bT(285,`The standard `),Aa(286,`a`,11),bT(287,`constructor-based injection`),cf(),bT(288,` pattern `),Aa(289,`strong`),bT(290,`requires`),cf(),bT(291,` the dependency to be declared with a class name. The `),Aa(292,`code`),bT(293,`'CONNECTION'`),cf(),bT(294,` custom provider, however, uses a string-valued token. To inject such a provider, use the `),Aa(295,`code`),bT(296,`@Inject()`),cf(),bT(297,` decorator, which takes a single argument: the token.`),cf(),Aa(298,`app-copy-button`,15)(299,`span`,16),Wa(300,`app-tabs`,null,4),cf(),Aa(302,`pre`)(303,`code`,17),bT(304,`
@Injectable()
export class CatsRepository {
  constructor(@Inject('CONNECTION') connection: Connection) {}
}
`),cf()(),Aa(305,`pre`)(306,`code`,17),bT(307,`
@Injectable()
@Dependencies('CONNECTION')
export class CatsRepository {
  constructor(connection) {}
}
`),cf()()(),Aa(308,`blockquote`,22)(309,`strong`),bT(310,`Hint`),cf(),bT(311,` The `),Aa(312,`code`),bT(313,`@Inject()`),cf(),bT(314,` decorator is imported from the `),Aa(315,`code`),bT(316,`@nestjs/common`),cf(),bT(317,` package.
`),cf(),Aa(318,`p`),bT(319,`The examples above use the string `),Aa(320,`code`),bT(321,`'CONNECTION'`),cf(),bT(322,` directly for illustration. For clean code organization, define tokens in a separate file, such as `),Aa(323,`code`),bT(324,`constants.ts`),cf(),bT(325,`, and import them where needed, as you would with symbols or enums.`),cf(),Aa(326,`h4`,30)(327,`span`),bT(328,`Interfaces and abstract classes`),cf()(),Aa(329,`p`),bT(330,`TypeScript types and interfaces are erased during compilation, so Nest can't reference them at runtime. An interface can describe the shape of a dependency, but it can't serve as a DI token by itself.`),cf(),Aa(331,`p`),bT(332,`Because Nest resolves providers by runtime tokens, use a string or `),Aa(333,`code`),bT(334,`Symbol`),cf(),bT(335,` token when registering a provider for an interface:`),cf(),Aa(336,`app-copy-button`)(337,`pre`)(338,`code`,17),bT(339,`
export interface LoggerService {
  log(message: string): void;
}

export const LOGGER_SERVICE = Symbol('LOGGER_SERVICE');

@Injectable()
export class PinoLoggerService implements LoggerService {
  log(message: string) {
    // implementation details
  }
}

@Module({
  providers: [
    {
      provide: LOGGER_SERVICE,
      useClass: PinoLoggerService,
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(340,`p`),bT(341,`To inject this provider, pass that token to the `),Aa(342,`code`),bT(343,`@Inject()`),cf(),bT(344,` decorator:`),cf(),Aa(345,`app-copy-button`)(346,`pre`)(347,`code`,17),bT(348,`
@Injectable()
export class CatsService {
  constructor(
    @Inject(LOGGER_SERVICE)
    private readonly logger: LoggerService,
  ) {}
}
`),cf()()(),Aa(349,`p`),bT(350,`Abstract classes, unlike interfaces, exist at runtime. You can use an abstract class as both the TypeScript contract and the DI token:`),cf(),Aa(351,`app-copy-button`)(352,`pre`)(353,`code`,17),bT(354,`
export abstract class LoggerService {
  abstract log(message: string): void;
}

@Injectable()
export class PinoLoggerService implements LoggerService {
  log(message: string) {
    // implementation details
  }
}

@Module({
  providers: [
    {
      provide: LoggerService,
      useClass: PinoLoggerService,
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(355,`p`),bT(356,`With an abstract class token, constructor-based injection uses the abstract class type directly and doesn't require `),Aa(357,`code`),bT(358,`@Inject()`),cf(),bT(359,`:`),cf(),Aa(360,`app-copy-button`)(361,`pre`)(362,`code`,17),bT(363,`
@Injectable()
export class CatsService {
  constructor(private readonly logger: LoggerService) {}
}
`),cf()()(),Aa(364,`p`),bT(365,`Use string or `),Aa(366,`code`),bT(367,`Symbol`),cf(),bT(368,` tokens when the runtime DI token should be decoupled from a class. `),Aa(369,`code`),bT(370,`Symbol`),cf(),bT(371,` tokens are especially useful for libraries and larger applications: each symbol has a unique runtime identity, which avoids the accidental collisions that can occur when unrelated providers use the same string token. When using a symbol token, export it from a shared file and reuse the same symbol instance wherever the provider is registered and injected. Use an abstract class when one artifact should act as both the contract and the runtime token, and you prefer simpler constructor injection. A plain interface remains a good choice when the type is used only for compile-time checking and no DI token is needed.`),cf(),Aa(372,`h4`,31)(373,`span`),bT(374,`Class providers: `),Aa(375,`code`),bT(376,`useClass`),cf()()(),Aa(377,`p`),bT(378,`The `),Aa(379,`code`),bT(380,`useClass`),cf(),bT(381,` syntax lets you dynamically determine the class that a token resolves to. For example, suppose we have an abstract (or default) `),Aa(382,`code`),bT(383,`ConfigService`),cf(),bT(384,` class, and we want Nest to provide a different implementation of the configuration service depending on the current environment. The following code implements this strategy:`),cf(),Aa(385,`app-copy-button`)(386,`pre`)(387,`code`,17),bT(388,`
const configServiceProvider = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService
      : ProductionConfigService,
};

@Module({
  providers: [configServiceProvider],
})
export class AppModule {}
`),cf()()(),Aa(389,`p`),bT(390,`Two details in this sample are worth noting. First, we define `),Aa(391,`code`),bT(392,`configServiceProvider`),cf(),bT(393,` as a literal object, then pass it in the module decorator's `),Aa(394,`code`),bT(395,`providers`),cf(),bT(396,` property. This is only code organization; it is functionally equivalent to the examples used so far in this chapter.`),cf(),Aa(397,`p`),bT(398,`Second, we use the `),Aa(399,`code`),bT(400,`ConfigService`),cf(),bT(401,` class name as the token. For any class that depends on `),Aa(402,`code`),bT(403,`ConfigService`),cf(),bT(404,`, Nest injects an instance of the provided class (`),Aa(405,`code`),bT(406,`DevelopmentConfigService`),cf(),bT(407,` or `),Aa(408,`code`),bT(409,`ProductionConfigService`),cf(),bT(410,`), overriding any default implementation that may have been declared elsewhere (e.g., a `),Aa(411,`code`),bT(412,`ConfigService`),cf(),bT(413,` declared with an `),Aa(414,`code`),bT(415,`@Injectable()`),cf(),bT(416,` decorator).`),cf(),Aa(417,`h4`,32)(418,`span`),bT(419,`Factory providers: `),Aa(420,`code`),bT(421,`useFactory`),cf()()(),Aa(422,`p`),bT(423,`The `),Aa(424,`code`),bT(425,`useFactory`),cf(),bT(426,` syntax lets you create providers `),Aa(427,`strong`),bT(428,`dynamically`),cf(),bT(429,`. The provider's value is whatever the factory function returns. The factory function can be as simple or as complex as needed. A simple factory may not depend on any other providers. A more complex factory can inject the providers it needs to compute its result. For the latter case, the factory provider syntax has a pair of related mechanisms:`),cf(),Aa(430,`ol`)(431,`li`),bT(432,`The factory function can accept (optional) arguments.`),cf(),Aa(433,`li`),bT(434,`The (optional) `),Aa(435,`code`),bT(436,`inject`),cf(),bT(437,` property accepts an array of providers that Nest resolves and passes as arguments to the factory function during instantiation. These providers can also be marked as optional. The two lists are correlated: Nest passes the instances from the `),Aa(438,`code`),bT(439,`inject`),cf(),bT(440,` list to the factory function as arguments, in the same order. The example below demonstrates this.`),cf()(),Aa(441,`app-copy-button`,15)(442,`span`,16),Wa(443,`app-tabs`,null,5),cf(),Aa(445,`pre`)(446,`code`,17),bT(447,`
const connectionProvider = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: MyOptionsProvider, optionalProvider?: string) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [MyOptionsProvider, { token: 'SomeOptionalProvider', optional: true }],
  //       \\______________/             \\__________________/
  //        This provider                The provider with this token
  //        is mandatory.                can resolve to \`undefined\`.
};

@Module({
  providers: [
    connectionProvider,
    MyOptionsProvider, // class-based provider
    // { provide: 'SomeOptionalProvider', useValue: 'anything' },
  ],
})
export class AppModule {}
`),cf()(),Aa(448,`pre`)(449,`code`,17),bT(450,`
const connectionProvider = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider, optionalProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [MyOptionsProvider, { token: 'SomeOptionalProvider', optional: true }],
  //       \\______________/            \\__________________/
  //        This provider               The provider with this token
  //        is mandatory.               can resolve to \`undefined\`.
};

@Module({
  providers: [
    connectionProvider,
    MyOptionsProvider, // class-based provider
    // { provide: 'SomeOptionalProvider', useValue: 'anything' },
  ],
})
export class AppModule {}
`),cf()()(),Aa(451,`h4`,33)(452,`span`),bT(453,`Alias providers: `),Aa(454,`code`),bT(455,`useExisting`),cf()()(),Aa(456,`p`),bT(457,`The `),Aa(458,`code`),bT(459,`useExisting`),cf(),bT(460,` syntax lets you create aliases for existing providers, which gives you two ways to access the same provider. In the example below, the (string-based) token `),Aa(461,`code`),bT(462,`'AliasedLoggerService'`),cf(),bT(463,` is an alias for the (class-based) token `),Aa(464,`code`),bT(465,`LoggerService`),cf(),bT(466,`. Assume we have two different dependencies, one on `),Aa(467,`code`),bT(468,`'AliasedLoggerService'`),cf(),bT(469,` and one on `),Aa(470,`code`),bT(471,`LoggerService`),cf(),bT(472,`. If both dependencies are specified with `),Aa(473,`code`),bT(474,`SINGLETON`),cf(),bT(475,` scope, they both resolve to the same instance.`),cf(),Aa(476,`app-copy-button`)(477,`pre`)(478,`code`,17),bT(479,`
@Injectable()
class LoggerService {
  /* implementation details */
}

const loggerAliasProvider = {
  provide: 'AliasedLoggerService',
  useExisting: LoggerService,
};

@Module({
  providers: [LoggerService, loggerAliasProvider],
})
export class AppModule {}
`),cf()()(),Aa(480,`h4`,34)(481,`span`),bT(482,`Non-service based providers`),cf()(),Aa(483,`p`),bT(484,`Providers often supply services, but they aren't limited to that. A provider can supply `),Aa(485,`strong`),bT(486,`any`),cf(),bT(487,` value. For example, a provider can supply a configuration object based on the current environment:`),cf(),Aa(488,`app-copy-button`)(489,`pre`)(490,`code`,17),bT(491,`
const configFactory = {
  provide: 'CONFIG',
  useFactory: () => {
    return process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
  },
};

@Module({
  providers: [configFactory],
})
export class AppModule {}
`),cf()()(),Aa(492,`h4`,35)(493,`span`),bT(494,`Export custom provider`),cf()(),Aa(495,`p`),bT(496,`Like any provider, a custom provider is scoped to its declaring module. To make it visible to other modules, you must export it, using either its token or the full provider object.`),cf(),Aa(497,`p`),bT(498,`The following example exports the provider by its token:`),cf(),Aa(499,`app-copy-button`,15)(500,`span`,16),Wa(501,`app-tabs`,null,6),cf(),Aa(503,`pre`)(504,`code`,17),bT(505,`
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION'],
})
export class AppModule {}
`),cf()(),Aa(506,`pre`)(507,`code`,17),bT(508,`
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION'],
})
export class AppModule {}
`),cf()()(),Aa(509,`p`),bT(510,`Alternatively, export the full provider object:`),cf(),Aa(511,`app-copy-button`,15)(512,`span`,16),Wa(513,`app-tabs`,null,7),cf(),Aa(515,`pre`)(516,`code`,17),bT(517,`
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  providers: [connectionFactory],
  exports: [connectionFactory],
})
export class AppModule {}
`),cf()(),Aa(518,`pre`)(519,`code`,17),bT(520,`
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  providers: [connectionFactory],
  exports: [connectionFactory],
})
export class AppModule {}
`),cf()()()(),Aa(521,`a`,36),Wa(522,`i`,37),Aa(523,`span`),bT(524,`Edit on GitHub`),cf()()()),d&2){let x=tT(37),h=tT(51),y=tT(65),I=tT(301),k=tT(444),M=tT(502),j=tT(514);zC(34),hf(` `,jT(35,27,`cats.service`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(7),hf(` `,jT(49,30,`cats.controller`,h.isJsActive),`
`),zC(4),zy(`hide`,h.isJsActive),zC(3),zy(`hide`,!h.isJsActive),zC(7),hf(` `,jT(63,33,`app.module`,y.isJsActive),`
`),zC(240),zy(`hide`,I.isJsActive),zC(3),zy(`hide`,!I.isJsActive),zC(140),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(55),zy(`hide`,M.isJsActive),zC(3),zy(`hide`,!M.isJsActive),zC(9),zy(`hide`,j.isJsActive),zC(3),zy(`hide`,!j.isJsActive)}},dependencies:[Jc,Lt,ln,u,l,g],encapsulation:2})}return a})();var B=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-dynamic-modules`]],features:[xy],decls:925,vars:32,consts:[[`contentReference`,``],[`app8cf357d69eaff40ff380696ab4e9f7462c3efac5`,``],[`app46495ef9dde62b3aac45cbdc39c5563280e22564`,``],[`app37a21e2053bf5a5808c28b34a4c1989f1349b083`,``],[`app080338da8aaced0cd34ddaadc216b9d60f7e77d6`,``],[1,`content`],[1,`content-inner`],[`id`,`dynamic-modules`],[`routerLink`,`/modules`],[`href`,`/modules#dynamic-modules`],[`appAnchor`,``,`id`,`introduction`],[`routerLink`,`/providers`],[`routerLink`,`/controllers`],[1,`language-typescript`],[`routerLink`,`/fundamentals/custom-providers`],[`appAnchor`,``,`id`,`dynamic-module-use-case`],[`appAnchor`,``,`id`,`dynamic-module-example`],[`href`,`#community-guidelines`],[1,`info`],[`appAnchor`,``,`id`,`module-configuration`],[`href`,`/fundamentals/custom-providers#non-service-based-providers`],[1,`with-heading`],[1,`filename`],[`href`,`/fundamentals/custom-providers#non-class-based-provider-tokens`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/25-dynamic-modules`],[`appAnchor`,``,`id`,`community-guidelines`],[`appAnchor`,``,`id`,`configurable-module-builder`],[`href`,`/application/configuration`],[`href`,`#custom-options-factory-class`],[`appAnchor`,``,`id`,`custom-method-key`],[`appAnchor`,``,`id`,`custom-options-factory-class`],[`appAnchor`,``,`id`,`extra-options`],[`appAnchor`,``,`id`,`extending-auto-generated-methods`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/dynamic-modules.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){if(d&1&&(Aa(0,`div`,5,0)(2,`div`,6)(3,`h3`,7),bT(4,`Dynamic modules`),cf(),Aa(5,`p`),bT(6,`The `),Aa(7,`a`,8),bT(8,`Modules chapter`),cf(),bT(9,` covers the basics of Nest modules and includes a brief introduction to `),Aa(10,`a`,9),bT(11,`dynamic modules`),cf(),bT(12,`. This chapter expands on the subject: what dynamic modules are, how to build them, and when to use them.`),cf(),Aa(13,`h4`,10)(14,`span`),bT(15,`Introduction`),cf()(),Aa(16,`p`),bT(17,`Most code examples in the `),Aa(18,`strong`),bT(19,`Overview`),cf(),bT(20,` section of the documentation use regular, or static, modules. Modules define groups of components, such as `),Aa(21,`a`,11),bT(22,`providers`),cf(),bT(23,` and `),Aa(24,`a`,12),bT(25,`controllers`),cf(),bT(26,`, that fit together as a modular part of an application. They provide an execution context, or scope, for these components. For example, providers defined in a module are visible to other members of the module without being exported. When a provider needs to be visible outside of a module, it is first exported from its host module, and then imported into its consuming module.`),cf(),Aa(27,`p`),bT(28,`Consider a familiar example. First, a `),Aa(29,`code`),bT(30,`UsersModule`),cf(),bT(31,` provides and exports a `),Aa(32,`code`),bT(33,`UsersService`),cf(),bT(34,`. `),Aa(35,`code`),bT(36,`UsersModule`),cf(),bT(37,` is the `),Aa(38,`strong`),bT(39,`host`),cf(),bT(40,` module for `),Aa(41,`code`),bT(42,`UsersService`),cf(),bT(43,`.`),cf(),Aa(44,`app-copy-button`)(45,`pre`)(46,`code`,13),bT(47,`
import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
`),cf()()(),Aa(48,`p`),bT(49,`Next, an `),Aa(50,`code`),bT(51,`AuthModule`),cf(),bT(52,` imports `),Aa(53,`code`),bT(54,`UsersModule`),cf(),bT(55,`, which makes `),Aa(56,`code`),bT(57,`UsersModule`),cf(),bT(58,`'s exported providers available inside `),Aa(59,`code`),bT(60,`AuthModule`),cf(),bT(61,`:`),cf(),Aa(62,`app-copy-button`)(63,`pre`)(64,`code`,13),bT(65,`
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  imports: [UsersModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
`),cf()()(),Aa(66,`p`),bT(67,`These constructs allow us to inject `),Aa(68,`code`),bT(69,`UsersService`),cf(),bT(70,` into, for example, the `),Aa(71,`code`),bT(72,`AuthService`),cf(),bT(73,` hosted in `),Aa(74,`code`),bT(75,`AuthModule`),cf(),bT(76,`:`),cf(),Aa(77,`app-copy-button`)(78,`pre`)(79,`code`,13),bT(80,`
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  /*
    Implementation that makes use of this.usersService
  */
}
`),cf()()(),Aa(81,`p`),bT(82,`We'll refer to this as `),Aa(83,`strong`),bT(84,`static`),cf(),bT(85,` module binding. All the information Nest needs to wire the modules together is declared in the host and consuming modules. Nest makes `),Aa(86,`code`),bT(87,`UsersService`),cf(),bT(88,` available inside `),Aa(89,`code`),bT(90,`AuthModule`),cf(),bT(91,` by:`),cf(),Aa(92,`ol`)(93,`li`),bT(94,`Instantiating `),Aa(95,`code`),bT(96,`UsersModule`),cf(),bT(97,`, including transitively importing the modules that `),Aa(98,`code`),bT(99,`UsersModule`),cf(),bT(100,` itself consumes, and transitively resolving any dependencies (see `),Aa(101,`a`,14),bT(102,`Custom providers`),cf(),bT(103,`).`),cf(),Aa(104,`li`),bT(105,`Instantiating `),Aa(106,`code`),bT(107,`AuthModule`),cf(),bT(108,`, and making `),Aa(109,`code`),bT(110,`UsersModule`),cf(),bT(111,`'s exported providers available to components in `),Aa(112,`code`),bT(113,`AuthModule`),cf(),bT(114,` (as if they had been declared in `),Aa(115,`code`),bT(116,`AuthModule`),cf(),bT(117,`).`),cf(),Aa(118,`li`),bT(119,`Injecting an instance of `),Aa(120,`code`),bT(121,`UsersService`),cf(),bT(122,` into `),Aa(123,`code`),bT(124,`AuthService`),cf(),bT(125,`.`),cf()(),Aa(126,`h4`,15)(127,`span`),bT(128,`Dynamic module use case`),cf()(),Aa(129,`p`),bT(130,`With static module binding, the consuming module has no way to `),Aa(131,`strong`),bT(132,`influence`),cf(),bT(133,` how the providers of the host module are configured. This matters for general-purpose modules that need to behave differently for each consumer, much like a "plugin" that requires some configuration before it can be used.`),cf(),Aa(134,`p`),bT(135,`As an example, consider a module that generates the public identifiers of your entities. Identifiers that start with a type prefix, such as `),Aa(136,`code`),bT(137,`usr_`),cf(),bT(138,` for users and `),Aa(139,`code`),bT(140,`ord_`),cf(),bT(141,` for orders, tell you at a glance what kind of entity they refer to. The generation logic is the same for every entity, and only the prefix differs. With static binding, an `),Aa(142,`code`),bT(143,`IdGeneratorModule`),cf(),bT(144,` could provide only one generator, configured one way for every module that imports it. What we need instead is for `),Aa(145,`code`),bT(146,`UsersModule`),cf(),bT(147,` and `),Aa(148,`code`),bT(149,`OrdersModule`),cf(),bT(150,` to each import the module with their own prefix.`),cf(),Aa(151,`p`),bT(152,`This is where `),Aa(153,`strong`),bT(154,`dynamic modules`),cf(),bT(155,` come into play. A dynamic module provides an API for importing one module into another and customizing the properties and behavior of that module at the time it is imported.`),cf(),Aa(156,`p`),Wa(157,`app-banner-observe`),cf(),Aa(158,`h4`,16)(159,`span`),bT(160,`Dynamic module example`),cf()(),Aa(161,`p`),bT(162,`It's helpful to start from how the module looks from the consuming module's perspective, and then work backwards. A static import leaves no room to pass a prefix:`),cf(),Aa(163,`app-copy-button`)(164,`pre`)(165,`code`,13),bT(166,`
import { Module } from '@nestjs/common';
import { IdGeneratorModule } from '../id-generator/id-generator.module.js';
import { UsersService } from './users.service.js';

@Module({
  imports: [IdGeneratorModule],
  providers: [UsersService],
})
export class UsersModule {}
`),cf()()(),Aa(167,`p`),bT(168,`A dynamic import, on the other hand, passes an options object. Compare the `),Aa(169,`code`),bT(170,`imports`),cf(),bT(171,` arrays of the two examples:`),cf(),Aa(172,`app-copy-button`)(173,`pre`)(174,`code`,13),bT(175,`
import { Module } from '@nestjs/common';
import { IdGeneratorModule } from '../id-generator/id-generator.module.js';
import { UsersService } from './users.service.js';

@Module({
  imports: [IdGeneratorModule.register({ prefix: 'usr' })],
  providers: [UsersService],
})
export class UsersModule {}
`),cf()()(),Aa(176,`p`),bT(177,`Let's look at the moving parts of the dynamic example:`),cf(),Aa(178,`ol`)(179,`li`)(180,`code`),bT(181,`IdGeneratorModule`),cf(),bT(182,` is a normal class, so it must have a `),Aa(183,`strong`),bT(184,`static method`),cf(),bT(185,` called `),Aa(186,`code`),bT(187,`register()`),cf(),bT(188,`. The method is static because it's called on the class, not on an `),Aa(189,`strong`),bT(190,`instance`),cf(),bT(191,` of the class. The method can have any name, but by convention it's called `),Aa(192,`code`),bT(193,`register()`),cf(),bT(194,`, `),Aa(195,`code`),bT(196,`forRoot()`),cf(),bT(197,`, or `),Aa(198,`code`),bT(199,`forFeature()`),cf(),bT(200,` (see `),Aa(201,`a`,17),bT(202,`Community guidelines`),cf(),bT(203,`).`),cf(),Aa(204,`li`),bT(205,`We define the `),Aa(206,`code`),bT(207,`register()`),cf(),bT(208,` method ourselves, so it can accept any arguments we like. Typically, as here, it accepts an options object.`),cf(),Aa(209,`li`),bT(210,`The value returned by `),Aa(211,`code`),bT(212,`register()`),cf(),bT(213,` appears in the `),Aa(214,`code`),bT(215,`imports`),cf(),bT(216,` array, alongside module classes, so it must be something Nest can treat as a module.`),cf()(),Aa(217,`p`),bT(218,`In fact, `),Aa(219,`code`),bT(220,`register()`),cf(),bT(221,` returns a `),Aa(222,`code`),bT(223,`DynamicModule`),cf(),bT(224,`. A dynamic module is a module created at runtime. It has exactly the same properties as the metadata of a static module, plus one additional property called `),Aa(225,`code`),bT(226,`module`),cf(),bT(227,`. Here's a sample static module declaration, for comparison:`),cf(),Aa(228,`app-copy-button`)(229,`pre`)(230,`code`,13),bT(231,`
@Module({
  imports: [DogsModule],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
`),cf()()(),Aa(232,`p`),bT(233,`A dynamic module is an object with the same properties, plus the `),Aa(234,`code`),bT(235,`module`),cf(),bT(236,` property, which references the module class itself.`),cf(),Aa(237,`blockquote`,18)(238,`strong`),bT(239,`Hint`),cf(),bT(240,` For a dynamic module, all properties of the module options object are optional `),Aa(241,`strong`),bT(242,`except`),cf(),Aa(243,`code`),bT(244,`module`),cf(),bT(245,`.
`),cf(),Aa(246,`p`),bT(247,`The job of the static `),Aa(248,`code`),bT(249,`register()`),cf(),bT(250,` method is therefore to return an object that implements the `),Aa(251,`code`),bT(252,`DynamicModule`),cf(),bT(253,` interface. Calling it provides a module to the `),Aa(254,`code`),bT(255,`imports`),cf(),bT(256,` array, much like listing a module class does in the static case. The difference is that the module's properties are specified programmatically instead of being fixed in the `),Aa(257,`code`),bT(258,`@Module()`),cf(),bT(259,` decorator.`),cf(),Aa(260,`p`),bT(261,`Two more details complete the picture:`),cf(),Aa(262,`ol`)(263,`li`),bT(264,`The `),Aa(265,`code`),bT(266,`imports`),cf(),bT(267,` array of the `),Aa(268,`code`),bT(269,`@Module()`),cf(),bT(270,` decorator accepts not only module classes (e.g., `),Aa(271,`code`),bT(272,`imports: [UsersModule]`),cf(),bT(273,`), but also the dynamic modules returned by static methods (e.g., `),Aa(274,`code`),bT(275,`imports: [IdGeneratorModule.register(...)]`),cf(),bT(276,`).`),cf(),Aa(277,`li`),bT(278,`A dynamic module can itself import other modules. If it depends on providers from other modules, list them in its optional `),Aa(279,`code`),bT(280,`imports`),cf(),bT(281,` property, exactly as you would in the `),Aa(282,`code`),bT(283,`@Module()`),cf(),bT(284,` decorator of a static module.`),cf()(),Aa(285,`p`),bT(286,`With this in mind, here's a first version of the dynamic `),Aa(287,`code`),bT(288,`IdGeneratorModule`),cf(),bT(289,`:`),cf(),Aa(290,`app-copy-button`)(291,`pre`)(292,`code`,13),bT(293,`
import { DynamicModule, Module } from '@nestjs/common';
import { IdGenerator } from './id-generator.js';

@Module({})
export class IdGeneratorModule {
  static register(): DynamicModule {
    return {
      module: IdGeneratorModule,
      providers: [IdGenerator],
      exports: [IdGenerator],
    };
  }
}
`),cf()()(),Aa(294,`p`),bT(295,`Calling `),Aa(296,`code`),bT(297,`IdGeneratorModule.register()`),cf(),bT(298,` returns a `),Aa(299,`code`),bT(300,`DynamicModule`),cf(),bT(301,` object whose properties are essentially the same as those that, until now, we've provided as metadata through the `),Aa(302,`code`),bT(303,`@Module()`),cf(),bT(304,` decorator.`),cf(),Aa(305,`blockquote`,18)(306,`strong`),bT(307,`Hint`),cf(),bT(308,` Import `),Aa(309,`code`),bT(310,`DynamicModule`),cf(),bT(311,` from `),Aa(312,`code`),bT(313,`@nestjs/common`),cf(),bT(314,`.
`),cf(),Aa(315,`p`),bT(316,`This module isn't configurable yet, though. Let's address that next.`),cf(),Aa(317,`h4`,19)(318,`span`),bT(319,`Module configuration`),cf()(),Aa(320,`p`),bT(321,`The consuming module passes the options to `),Aa(322,`code`),bT(323,`register()`),cf(),bT(324,`, as shown above. The question is how to get them to the component that needs them. `),Aa(325,`code`),bT(326,`IdGeneratorModule`),cf(),bT(327,` hosts and exports an injectable service, `),Aa(328,`code`),bT(329,`IdGenerator`),cf(),bT(330,`, and it's `),Aa(331,`code`),bT(332,`IdGenerator`),cf(),bT(333,` that needs the prefix. For now, the service hard-codes it:`),cf(),Aa(334,`app-copy-button`)(335,`pre`)(336,`code`,13),bT(337,`
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Injectable()
export class IdGenerator {
  generate(): string {
    const options = { prefix: 'usr' };
    return \`\${options.prefix}_\${randomUUID()}\`;
  }
}
`),cf()()(),Aa(338,`p`),bT(339,`Our remaining task is to pass the `),Aa(340,`code`),bT(341,`options`),cf(),bT(342,` object from the `),Aa(343,`code`),bT(344,`register()`),cf(),bT(345,` method to `),Aa(346,`code`),bT(347,`IdGenerator`),cf(),bT(348,`, and we'll use `),Aa(349,`em`),bT(350,`dependency injection`),cf(),bT(351,` to do it. This is the key point: `),Aa(352,`code`),bT(353,`IdGeneratorModule`),cf(),bT(354,` provides `),Aa(355,`code`),bT(356,`IdGenerator`),cf(),bT(357,`, and `),Aa(358,`code`),bT(359,`IdGenerator`),cf(),bT(360,` depends on an `),Aa(361,`code`),bT(362,`options`),cf(),bT(363,` object that is supplied only at runtime. So, at runtime, we first bind the `),Aa(364,`code`),bT(365,`options`),cf(),bT(366,` object to the Nest IoC container, and then let Nest inject it into `),Aa(367,`code`),bT(368,`IdGenerator`),cf(),bT(369,`. As the `),Aa(370,`strong`),bT(371,`Custom providers`),cf(),bT(372,` chapter explains, providers can `),Aa(373,`a`,20),bT(374,`be any value`),cf(),bT(375,`, not only services, so a plain `),Aa(376,`code`),bT(377,`options`),cf(),bT(378,` object works too.`),cf(),Aa(379,`p`),bT(380,`First, describe the options with an interface, and define an injection token for them. A token defined as a constant (or a `),Aa(381,`code`),bT(382,`Symbol`),cf(),bT(383,`) in a separate file can be imported wherever it's needed:`),cf(),Aa(384,`app-copy-button`,21)(385,`span`,22),bT(386),LT(387,`extension`),Wa(388,`app-tabs`,null,1),cf(),Aa(390,`pre`)(391,`code`,13),bT(392,`
export interface IdGeneratorModuleOptions {
  prefix: string;
}

export const ID_GENERATOR_OPTIONS = 'ID_GENERATOR_OPTIONS';
`),cf()()(),Aa(393,`p`),bT(394,`Next, bind the options object to the IoC container in the static `),Aa(395,`code`),bT(396,`register()`),cf(),bT(397,` method. We are constructing a module dynamically, and one of the properties of a module is its list of providers, so we define the options object as a provider. Pay attention to the `),Aa(398,`code`),bT(399,`providers`),cf(),bT(400,` array:`),cf(),Aa(401,`app-copy-button`)(402,`pre`)(403,`code`,13),bT(404,`
import { DynamicModule, Module } from '@nestjs/common';
import { IdGenerator } from './id-generator.js';
import {
  ID_GENERATOR_OPTIONS,
  IdGeneratorModuleOptions,
} from './id-generator.interfaces.js';

@Module({})
export class IdGeneratorModule {
  static register(options: IdGeneratorModuleOptions): DynamicModule {
    return {
      module: IdGeneratorModule,
      providers: [
        {
          provide: ID_GENERATOR_OPTIONS,
          useValue: options,
        },
        IdGenerator,
      ],
      exports: [IdGenerator],
    };
  }
}
`),cf()()(),Aa(405,`p`),bT(406,`Now inject the options into `),Aa(407,`code`),bT(408,`IdGenerator`),cf(),bT(409,`. A provider registered with a non-class token is injected with the `),Aa(410,`code`),bT(411,`@Inject()`),cf(),bT(412,` decorator, as described in `),Aa(413,`a`,23),bT(414,`Non-class-based provider tokens`),cf(),bT(415,`:`),cf(),Aa(416,`app-copy-button`)(417,`pre`)(418,`code`,13),bT(419,`
import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import {
  ID_GENERATOR_OPTIONS,
  type IdGeneratorModuleOptions,
} from './id-generator.interfaces.js';

@Injectable()
export class IdGenerator {
  constructor(
    @Inject(ID_GENERATOR_OPTIONS)
    private readonly options: IdGeneratorModuleOptions,
  ) {}

  generate(): string {
    return \`\${this.options.prefix}_\${randomUUID()}\`;
  }
}
`),cf()()(),Aa(420,`p`),bT(421,`With that in place, each consuming module configures its own generator:`),cf(),Aa(422,`app-copy-button`)(423,`pre`)(424,`code`,13),bT(425,`
@Module({
  imports: [IdGeneratorModule.register({ prefix: 'usr' })],
  providers: [UsersService],
})
export class UsersModule {}

@Module({
  imports: [IdGeneratorModule.register({ prefix: 'ord' })],
  providers: [OrdersService],
})
export class OrdersModule {}
`),cf()()(),Aa(426,`p`)(427,`code`),bT(428,`UsersService`),cf(),bT(429,` and `),Aa(430,`code`),bT(431,`OrdersService`),cf(),bT(432,` both inject `),Aa(433,`code`),bT(434,`IdGenerator`),cf(),bT(435,`, but each receives its own instance, configured by the module that imported it: user identifiers start with `),Aa(436,`code`),bT(437,`usr_`),cf(),bT(438,`, and order identifiers with `),Aa(439,`code`),bT(440,`ord_`),cf(),bT(441,`.`),cf(),Aa(442,`p`),bT(443,`A working example is available in the `),Aa(444,`a`,24),bT(445,`dynamic modules sample`),cf(),bT(446,` on GitHub.`),cf(),Aa(447,`h4`,25)(448,`span`),bT(449,`Community guidelines`),cf()(),Aa(450,`p`),bT(451,`You may have seen methods like `),Aa(452,`code`),bT(453,`forRoot()`),cf(),bT(454,`, `),Aa(455,`code`),bT(456,`register()`),cf(),bT(457,`, and `),Aa(458,`code`),bT(459,`forFeature()`),cf(),bT(460,` in some of the `),Aa(461,`code`),bT(462,`@nestjs/`),cf(),bT(463,` packages, and wondered how they differ. There is no hard rule, but the `),Aa(464,`code`),bT(465,`@nestjs/`),cf(),bT(466,` packages follow these guidelines:`),cf(),Aa(467,`ul`)(468,`li`)(469,`code`),bT(470,`register()`),cf(),bT(471,` configures a dynamic module for use only by the calling module, as our `),Aa(472,`code`),bT(473,`IdGeneratorModule`),cf(),bT(474,` does. For example, with `),Aa(475,`code`),bT(476,`@nestjs/http-client`),cf(),bT(477,`, `),Aa(478,`code`),bT(479),cf(),bT(480,` configures an HTTP client for the calling module. Another module can call `),Aa(481,`code`),bT(482),cf(),bT(483,` to get a differently configured client. You can do this in as many modules as you want.`),cf(),Aa(484,`li`)(485,`code`),bT(486,`forRoot()`),cf(),bT(487,` configures a dynamic module once and reuses that configuration in multiple places (possibly without the consumers being aware of it). This is why an application has one `),Aa(488,`code`),bT(489,`GraphQLModule.forRoot()`),cf(),bT(490,`, one `),Aa(491,`code`),bT(492,`TypeOrmModule.forRoot()`),cf(),bT(493,`, and so on.`),cf(),Aa(494,`li`)(495,`code`),bT(496,`forFeature()`),cf(),bT(497,` uses the configuration set up by `),Aa(498,`code`),bT(499,`forRoot()`),cf(),bT(500,`, but modifies some of it for the needs of the calling module (e.g., which repositories the module has access to, or the context a logger should use).`),cf()(),Aa(501,`p`),bT(502,`Each of these usually has an asynchronous counterpart, `),Aa(503,`code`),bT(504,`registerAsync()`),cf(),bT(505,`, `),Aa(506,`code`),bT(507,`forRootAsync()`),cf(),bT(508,`, and `),Aa(509,`code`),bT(510,`forFeatureAsync()`),cf(),bT(511,`, which means the same thing, but resolves the configuration through Nest's dependency injection.`),cf(),Aa(512,`h4`,26)(513,`span`),bT(514,`Configurable module builder`),cf()(),Aa(515,`p`),bT(516,`Manually creating highly configurable dynamic modules that also expose asynchronous methods (`),Aa(517,`code`),bT(518,`registerAsync()`),cf(),bT(519,`, `),Aa(520,`code`),bT(521,`forRootAsync()`),cf(),bT(522,`, etc.) is complicated, especially for newcomers. To simplify this, Nest provides the `),Aa(523,`code`),bT(524,`ConfigurableModuleBuilder`),cf(),bT(525,` class, which constructs a module "blueprint" in a few lines of code.`),cf(),Aa(526,`p`),bT(527,`As an example, let's convert the `),Aa(528,`code`),bT(529,`IdGeneratorModule`),cf(),bT(530,` above to use the `),Aa(531,`code`),bT(532,`ConfigurableModuleBuilder`),cf(),bT(533,`. It keeps the `),Aa(534,`code`),bT(535,`IdGeneratorModuleOptions`),cf(),bT(536,` interface, but the builder generates the injection token, so the `),Aa(537,`code`),bT(538,`ID_GENERATOR_OPTIONS`),cf(),bT(539,` constant is no longer needed.`),cf(),Aa(540,`p`),bT(541,`Create a new file alongside `),Aa(542,`code`),bT(543,`id-generator.module.ts`),cf(),bT(544,`, named `),Aa(545,`code`),bT(546,`id-generator.module-definition.ts`),cf(),bT(547,`, and use the `),Aa(548,`code`),bT(549,`ConfigurableModuleBuilder`),cf(),bT(550,` to construct the `),Aa(551,`code`),bT(552,`IdGeneratorModule`),cf(),bT(553,` definition:`),cf(),Aa(554,`app-copy-button`,21)(555,`span`,22),bT(556),LT(557,`extension`),Wa(558,`app-tabs`,null,2),cf(),Aa(560,`pre`)(561,`code`,13),bT(562,`
import { ConfigurableModuleBuilder } from '@nestjs/common';
import type { IdGeneratorModuleOptions } from './id-generator.interfaces.js';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IdGeneratorModuleOptions>().build();
`),cf()(),Aa(563,`pre`)(564,`code`,13),bT(565,`
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder().build();
`),cf()()(),Aa(566,`p`),bT(567,`Next, change `),Aa(568,`code`),bT(569,`id-generator.module.ts`),cf(),bT(570,` to extend the generated `),Aa(571,`code`),bT(572,`ConfigurableModuleClass`),cf(),bT(573,`:`),cf(),Aa(574,`app-copy-button`)(575,`pre`)(576,`code`,13),bT(577,`
import { Module } from '@nestjs/common';
import { IdGenerator } from './id-generator.js';
import { ConfigurableModuleClass } from './id-generator.module-definition.js';

@Module({
  providers: [IdGenerator],
  exports: [IdGenerator],
})
export class IdGeneratorModule extends ConfigurableModuleClass {}
`),cf()()(),Aa(578,`p`),bT(579,`As with any dynamic module, the metadata returned by the generated methods extends the metadata in the `),Aa(580,`code`),bT(581,`@Module()`),cf(),bT(582,` decorator, so `),Aa(583,`code`),bT(584,`IdGenerator`),cf(),bT(585,` is provided and exported alongside the generated options provider.`),cf(),Aa(586,`p`),bT(587,`Finally, update `),Aa(588,`code`),bT(589,`IdGenerator`),cf(),bT(590,` to inject the generated options provider instead of the `),Aa(591,`code`),bT(592,`ID_GENERATOR_OPTIONS`),cf(),bT(593,` token:`),cf(),Aa(594,`app-copy-button`)(595,`pre`)(596,`code`,13),bT(597,`
import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import type { IdGeneratorModuleOptions } from './id-generator.interfaces.js';
import { MODULE_OPTIONS_TOKEN } from './id-generator.module-definition.js';

@Injectable()
export class IdGenerator {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly options: IdGeneratorModuleOptions,
  ) {}

  generate(): string {
    return \`\${this.options.prefix}_\${randomUUID()}\`;
  }
}
`),cf()()(),Aa(598,`p`),bT(599,`Extending `),Aa(600,`code`),bT(601,`ConfigurableModuleClass`),cf(),bT(602,` gives `),Aa(603,`code`),bT(604,`IdGeneratorModule`),cf(),bT(605,` not only the `),Aa(606,`code`),bT(607,`register()`),cf(),bT(608,` method (as the manual implementation did), but also `),Aa(609,`code`),bT(610,`registerAsync()`),cf(),bT(611,`, which lets consumers configure the module asynchronously. For example, the following factory reads the prefix with the `),Aa(612,`code`),bT(613,`ConfigService`),cf(),bT(614,` from `),Aa(615,`a`,27)(616,`code`),bT(617,`@nestjs/config`),cf()(),bT(618,`:`),cf(),Aa(619,`app-copy-button`)(620,`pre`)(621,`code`,13),bT(622,`
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IdGeneratorModule } from '../id-generator/id-generator.module.js';
import { UsersService } from './users.service.js';

@Module({
  imports: [
    IdGeneratorModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        prefix: configService.getOrThrow<string>('USER_ID_PREFIX'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [UsersService],
})
export class UsersModule {}
`),cf()()(),Aa(623,`p`),bT(624,`The `),Aa(625,`code`),bT(626,`registerAsync()`),cf(),bT(627,` method takes an object with the following properties:`),cf(),Aa(628,`app-copy-button`)(629,`pre`)(630,`code`,13),bT(631,`
{
  /**
   * Modules whose exported providers the factory, class, or existing
   * provider depends on.
   */
  imports?: ModuleMetadata['imports'];
  /**
   * Function returning options (or a Promise resolving to options) to configure the
   * module.
   */
  useFactory?: (...args: any[]) => Promise<ModuleOptions> | ModuleOptions;
  /**
   * Dependencies that a Factory may inject.
   */
  inject?: FactoryProvider['inject'];
  /**
   * Injection token resolving to a class that will be instantiated as a provider.
   * The class must implement the corresponding interface.
   */
  useClass?: Type<
    ConfigurableModuleOptionsFactory<ModuleOptions, FactoryClassMethodKey>
  >;
  /**
   * Injection token resolving to an existing provider. The provider must implement
   * the corresponding interface.
   */
  useExisting?: Type<
    ConfigurableModuleOptionsFactory<ModuleOptions, FactoryClassMethodKey>
  >;
  /**
   * List of parent module's providers that will be filtered to only provide necessary
   * providers for the 'inject' array.
   */
  provideInjectionTokensFrom?: Provider[];
}
`),cf()()(),Aa(632,`p`),bT(633,`Let's go through these properties one by one:`),cf(),Aa(634,`ul`)(635,`li`)(636,`code`),bT(637,`imports`),cf(),bT(638,` - modules to import into the dynamic module, so that the factory, class, or existing provider can inject their exported providers. The example above imports `),Aa(639,`code`),bT(640,`ConfigModule`),cf(),bT(641,` to inject `),Aa(642,`code`),bT(643,`ConfigService`),cf(),bT(644,`.`),cf(),Aa(645,`li`)(646,`code`),bT(647,`useFactory`),cf(),bT(648,` - a function that returns the options object. It can be either synchronous or asynchronous. To inject dependencies into the factory function, use the `),Aa(649,`code`),bT(650,`inject`),cf(),bT(651,` property. The example above uses this variant.`),cf(),Aa(652,`li`)(653,`code`),bT(654,`inject`),cf(),bT(655,` - an array of dependencies to inject into the factory function. The order of the dependencies must match the order of the factory function's parameters.`),cf(),Aa(656,`li`)(657,`code`),bT(658,`useClass`),cf(),bT(659,` - a class to instantiate as a provider. The class must implement the corresponding interface, which by default means providing a `),Aa(660,`code`),bT(661,`create()`),cf(),bT(662,` method that returns the options object. See `),Aa(663,`a`,28),bT(664,`Custom options factory class`),cf(),bT(665,` below.`),cf(),Aa(666,`li`)(667,`code`),bT(668,`useExisting`),cf(),bT(669,` - a variant of `),Aa(670,`code`),bT(671,`useClass`),cf(),bT(672,` that reuses an existing provider instead of instructing Nest to create a new instance of the class. The provider must implement the same interface as a `),Aa(673,`code`),bT(674,`useClass`),cf(),bT(675,` class (and so must provide the `),Aa(676,`code`),bT(677,`create()`),cf(),bT(678,` method, unless you change the method name, as described in `),Aa(679,`a`,28),bT(680,`Custom options factory class`),cf(),bT(681,` below).`),cf(),Aa(682,`li`)(683,`code`),bT(684,`provideInjectionTokensFrom`),cf(),bT(685,` - used together with `),Aa(686,`code`),bT(687,`useFactory`),cf(),bT(688,` (or `),Aa(689,`code`),bT(690,`useExisting`),cf(),bT(691,`) and `),Aa(692,`code`),bT(693,`inject`),cf(),bT(694,`: a list of providers from which Nest picks the ones listed in `),Aa(695,`code`),bT(696,`inject`),cf(),bT(697,` and registers them in the dynamic module. This is useful when a module passes its own options on to a nested module that it configures asynchronously.`),cf()(),Aa(698,`p`),bT(699,`Always choose exactly one of `),Aa(700,`code`),bT(701,`useFactory`),cf(),bT(702,`, `),Aa(703,`code`),bT(704,`useClass`),cf(),bT(705,`, and `),Aa(706,`code`),bT(707,`useExisting`),cf(),bT(708,`, as they are mutually exclusive.`),cf(),Aa(709,`h4`,29)(710,`span`),bT(711,`Custom method key`),cf()(),Aa(712,`p`),bT(713,`By default, `),Aa(714,`code`),bT(715,`ConfigurableModuleClass`),cf(),bT(716,` provides the `),Aa(717,`code`),bT(718,`register()`),cf(),bT(719,` method and its `),Aa(720,`code`),bT(721,`registerAsync()`),cf(),bT(722,` counterpart. To use a different method name, use the `),Aa(723,`code`),bT(724,`ConfigurableModuleBuilder#setClassMethodName`),cf(),bT(725,` method. For example, if your module is meant to be configured once for the entire application, the `),Aa(726,`a`,17),bT(727,`community guidelines`),cf(),bT(728,` suggest `),Aa(729,`code`),bT(730,`forRoot()`),cf(),bT(731,`:`),cf(),Aa(732,`app-copy-button`,21)(733,`span`,22),bT(734),LT(735,`extension`),Wa(736,`app-tabs`,null,3),cf(),Aa(738,`pre`)(739,`code`,13),bT(740,`
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IdGeneratorModuleOptions>()
    .setClassMethodName('forRoot')
    .build();
`),cf()(),Aa(741,`pre`)(742,`code`,13),bT(743,`
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder().setClassMethodName('forRoot').build();
`),cf()()(),Aa(744,`p`),bT(745,`This instructs `),Aa(746,`code`),bT(747,`ConfigurableModuleBuilder`),cf(),bT(748,` to generate a class that exposes `),Aa(749,`code`),bT(750,`forRoot()`),cf(),bT(751,` and `),Aa(752,`code`),bT(753,`forRootAsync()`),cf(),bT(754,` instead:`),cf(),Aa(755,`app-copy-button`)(756,`pre`)(757,`code`,13),bT(758,`
@Module({
  imports: [
    IdGeneratorModule.forRoot({ prefix: 'id' }), // <-- note "forRoot" instead of "register"
    // or alternatively:
    // IdGeneratorModule.forRootAsync({
    //   useFactory: () => ({ prefix: 'id' }),
    //   inject: [...any extra dependencies...],
    // }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(759,`h4`,30)(760,`span`),bT(761,`Custom options factory class`),cf()(),Aa(762,`p`),bT(763,`Because the `),Aa(764,`code`),bT(765,`registerAsync()`),cf(),bT(766,` method (or `),Aa(767,`code`),bT(768,`forRootAsync()`),cf(),bT(769,`, or any other name, depending on the configuration) lets consumers pass a provider definition that resolves to the module options, a consumer can also supply a class that constructs the options object:`),cf(),Aa(770,`app-copy-button`)(771,`pre`)(772,`code`,13),bT(773,`
@Module({
  imports: [
    IdGeneratorModule.registerAsync({
      useClass: IdGeneratorConfigService,
    }),
  ],
})
export class UsersModule {}
`),cf()()(),Aa(774,`p`),bT(775,`By default, this class must provide a `),Aa(776,`code`),bT(777,`create()`),cf(),bT(778,` method that returns the module options. The `),Aa(779,`code`),bT(780,`ConfigurableModuleOptionsFactory`),cf(),bT(781,` interface, exported from `),Aa(782,`code`),bT(783,`@nestjs/common`),cf(),bT(784,`, describes this contract:`),cf(),Aa(785,`app-copy-button`)(786,`pre`)(787,`code`,13),bT(788,`
import { ConfigurableModuleOptionsFactory, Injectable } from '@nestjs/common';
import type { IdGeneratorModuleOptions } from '../id-generator/id-generator.interfaces.js';

@Injectable()
export class IdGeneratorConfigService
  implements ConfigurableModuleOptionsFactory<IdGeneratorModuleOptions, 'create'>
{
  create(): IdGeneratorModuleOptions {
    return { prefix: 'usr' };
  }
}
`),cf()()(),Aa(789,`p`),bT(790,`If your library follows a different naming convention, instruct `),Aa(791,`code`),bT(792,`ConfigurableModuleBuilder`),cf(),bT(793,` to expect a different method, for example, `),Aa(794,`code`),bT(795,`createIdGeneratorOptions`),cf(),bT(796,`, with the `),Aa(797,`code`),bT(798,`ConfigurableModuleBuilder#setFactoryMethodName`),cf(),bT(799,` method:`),cf(),Aa(800,`app-copy-button`,21)(801,`span`,22),bT(802),LT(803,`extension`),Wa(804,`app-tabs`,null,4),cf(),Aa(806,`pre`)(807,`code`,13),bT(808,`
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IdGeneratorModuleOptions>()
    .setFactoryMethodName('createIdGeneratorOptions')
    .build();
`),cf()(),Aa(809,`pre`)(810,`code`,13),bT(811,`
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder()
    .setFactoryMethodName('createIdGeneratorOptions')
    .build();
`),cf()()(),Aa(812,`p`),bT(813,`Now the `),Aa(814,`code`),bT(815,`IdGeneratorConfigService`),cf(),bT(816,` class must expose the `),Aa(817,`code`),bT(818,`createIdGeneratorOptions()`),cf(),bT(819,` method instead of `),Aa(820,`code`),bT(821,`create()`),cf(),bT(822,`:`),cf(),Aa(823,`app-copy-button`)(824,`pre`)(825,`code`,13),bT(826,`
@Module({
  imports: [
    IdGeneratorModule.registerAsync({
      useClass: IdGeneratorConfigService, // <-- this class must provide the "createIdGeneratorOptions" method
    }),
  ],
})
export class UsersModule {}
`),cf()()(),Aa(827,`h4`,31)(828,`span`),bT(829,`Extra options`),cf()(),Aa(830,`p`),bT(831,`In some cases, a module needs extra options that determine how it behaves, but that shouldn't be included in the `),Aa(832,`code`),bT(833,`MODULE_OPTIONS_TOKEN`),cf(),bT(834,` provider, because they are irrelevant to the providers registered within the module. A good example is an `),Aa(835,`code`),bT(836,`isGlobal`),cf(),bT(837,` flag: `),Aa(838,`code`),bT(839,`IdGenerator`),cf(),bT(840,` doesn't need to know whether its host module is registered as a global module.`),cf(),Aa(841,`p`),bT(842,`For such options, use the `),Aa(843,`code`),bT(844,`ConfigurableModuleBuilder#setExtras`),cf(),bT(845,` method:`),cf(),Aa(846,`app-copy-button`)(847,`pre`)(848,`code`,13),bT(849,`
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IdGeneratorModuleOptions>()
    .setExtras(
      {
        isGlobal: false,
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal,
      }),
    )
    .build();
`),cf()()(),Aa(850,`p`),bT(851,`The first argument passed to the `),Aa(852,`code`),bT(853,`setExtras`),cf(),bT(854,` method is an object with the default values of the extra properties. The second argument is a function that receives the auto-generated module definition (with `),Aa(855,`code`),bT(856,`providers`),cf(),bT(857,`, `),Aa(858,`code`),bT(859,`exports`),cf(),bT(860,`, etc.) and the `),Aa(861,`code`),bT(862,`extras`),cf(),bT(863,` object, which holds the extra properties (either specified by the consumer or the defaults). The function returns the modified module definition. In this example, the `),Aa(864,`code`),bT(865,`extras.isGlobal`),cf(),bT(866,` property is assigned to the `),Aa(867,`code`),bT(868,`global`),cf(),bT(869,` property of the module definition, which determines whether the module is global (see `),Aa(870,`a`,9),bT(871,`Dynamic modules`),cf(),bT(872,` in the Modules chapter).`),cf(),Aa(873,`p`),bT(874,`Now, when importing this module, consumers can pass the additional `),Aa(875,`code`),bT(876,`isGlobal`),cf(),bT(877,` flag. For example, an application that uses one prefix for all of its identifiers can register the module once, globally:`),cf(),Aa(878,`app-copy-button`)(879,`pre`)(880,`code`,13),bT(881,`
@Module({
  imports: [
    IdGeneratorModule.register({
      isGlobal: true,
      prefix: 'id',
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(882,`p`),bT(883,`However, since `),Aa(884,`code`),bT(885,`isGlobal`),cf(),bT(886,` is declared as an extra property, it isn't part of the options object provided by `),Aa(887,`code`),bT(888,`MODULE_OPTIONS_TOKEN`),cf(),bT(889,`:`),cf(),Aa(890,`app-copy-button`)(891,`pre`)(892,`code`,13),bT(893,`
@Injectable()
export class IdGenerator {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly options: IdGeneratorModuleOptions,
  ) {
    // "options" object will not have the "isGlobal" property
    // ...
  }
}
`),cf()()(),Aa(894,`h4`,32)(895,`span`),bT(896,`Extending auto-generated methods`),cf()(),Aa(897,`p`),bT(898,`The auto-generated static methods (`),Aa(899,`code`),bT(900,`register()`),cf(),bT(901,`, `),Aa(902,`code`),bT(903,`registerAsync()`),cf(),bT(904,`, etc.) can be extended if needed, as follows:`),cf(),Aa(905,`app-copy-button`)(906,`pre`)(907,`code`,13),bT(908,`
import { DynamicModule, Module } from '@nestjs/common';
import { IdGenerator } from './id-generator.js';
import {
  ASYNC_OPTIONS_TYPE,
  ConfigurableModuleClass,
  OPTIONS_TYPE,
} from './id-generator.module-definition.js';

@Module({
  providers: [IdGenerator],
  exports: [IdGenerator],
})
export class IdGeneratorModule extends ConfigurableModuleClass {
  static register(options: typeof OPTIONS_TYPE): DynamicModule {
    return {
      // your custom logic here
      ...super.register(options),
    };
  }

  static registerAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    return {
      // your custom logic here
      ...super.registerAsync(options),
    };
  }
}
`),cf()()(),Aa(909,`p`),bT(910,`Note the `),Aa(911,`code`),bT(912,`OPTIONS_TYPE`),cf(),bT(913,` and `),Aa(914,`code`),bT(915,`ASYNC_OPTIONS_TYPE`),cf(),bT(916,` types, which must be exported from the module definition file:`),cf(),Aa(917,`app-copy-button`)(918,`pre`)(919,`code`,13),bT(920,`
export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<IdGeneratorModuleOptions>().build();
`),cf()()()(),Aa(921,`a`,33),Wa(922,`i`,34),Aa(923,`span`),bT(924,`Edit on GitHub`),cf()()()),d&2){let x=tT(389),h=tT(559),y=tT(737),I=tT(805);zC(386),hf(` `,jT(387,20,`id-generator.interfaces`,x.isJsActive),`
`),zC(93),Ky(`HttpClientModule.register(`,`{`,` baseUrl: 'someUrl' `,`}`,`)`),zC(3),Ky(`HttpClientModule.register(`,`{`,` baseUrl: 'somewhere else' `,`}`,`)`),zC(74),hf(` `,jT(557,23,`id-generator.module-definition`,h.isJsActive),`
`),zC(4),zy(`hide`,h.isJsActive),zC(3),zy(`hide`,!h.isJsActive),zC(171),hf(` `,jT(735,26,`id-generator.module-definition`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(61),hf(` `,jT(803,29,`id-generator.module-definition`,I.isJsActive),`
`),zC(4),zy(`hide`,I.isJsActive),zC(3),zy(`hide`,!I.isJsActive)}},dependencies:[Jc,Lt,ln,l$1,u,g],encapsulation:2})}return a})();var U=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-lifecycle-events`]],features:[xy],decls:333,vars:12,consts:[[`contentReference`,``],[`appd614583fea109f86ac16959f10bc81861ea441d0`,``],[`app125341b241b2f9b7f4361df72678de46c321f8b2`,``],[`app585ff6bd7b3e212f967023ce6706cc6d31e143ef`,``],[1,`content`],[1,`content-inner`],[`id`,`lifecycle-events`],[`appAnchor`,``,`id`,`lifecycle-sequence`],[`src`,`/assets/lifecycle-events.png`,1,`illustrative-image`],[`appAnchor`,``,`id`,`lifecycle-events-1`],[`href`,`/fundamentals/lifecycle-events#application-shutdown`],[1,`warning`],[1,`info`],[`appAnchor`,``,`id`,`usage`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`asynchronous-initialization`],[`appAnchor`,``,`id`,`application-shutdown`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://kubernetes.io/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.heroku.com/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.libuv.org/en/v1.x/signal.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/process.html#process_signal_events`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/lifecycle-events.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){if(d&1&&(Aa(0,`div`,4,0)(2,`div`,5)(3,`h3`,6),bT(4,`Lifecycle Events`),cf(),Aa(5,`p`),bT(6,`A Nest application, as well as every application element, has a lifecycle managed by Nest. Nest provides `),Aa(7,`strong`),bT(8,`lifecycle hooks`),cf(),bT(9,` that give you visibility into key lifecycle events and let you act (run registered code on your modules, providers, or controllers) when they occur.`),cf(),Aa(10,`h4`,7)(11,`span`),bT(12,`Lifecycle sequence`),cf()(),Aa(13,`p`),bT(14,`The following diagram depicts the sequence of key application lifecycle events, from the time the application is bootstrapped until the Node.js process exits. The overall lifecycle divides into three phases: `),Aa(15,`strong`),bT(16,`initializing`),cf(),bT(17,`, `),Aa(18,`strong`),bT(19,`running`),cf(),bT(20,`, and `),Aa(21,`strong`),bT(22,`terminating`),cf(),bT(23,`. With this lifecycle in mind, you can plan for the appropriate initialization of modules and services, manage active connections, and gracefully shut down your application when it receives a termination signal.`),cf(),Aa(24,`figure`),Wa(25,`img`,8),cf(),Aa(26,`h4`,9)(27,`span`),bT(28,`Lifecycle events`),cf()(),Aa(29,`p`),bT(30,`Lifecycle events happen during application bootstrapping and shutdown. Nest calls registered lifecycle hook methods on modules, providers, and controllers at each of the following lifecycle events (`),Aa(31,`strong`),bT(32,`shutdown hooks`),cf(),bT(33,` must be enabled first, as described in `),Aa(34,`a`,10),bT(35,`Application shutdown`),cf(),bT(36,`). As shown in the diagram above, Nest also calls the appropriate underlying methods to begin and stop listening for connections.`),cf(),Aa(37,`p`),bT(38,`In the following table, `),Aa(39,`code`),bT(40,`onModuleInit()`),cf(),bT(41,` and `),Aa(42,`code`),bT(43,`onApplicationBootstrap()`),cf(),bT(44,` are triggered only when the application is initialized: when you call `),Aa(45,`code`),bT(46,`app.init()`),cf(),bT(47,` or `),Aa(48,`code`),bT(49,`app.listen()`),cf(),bT(50,` explicitly, or when you create a standalone application with `),Aa(51,`code`),bT(52,`NestFactory.createApplicationContext()`),cf(),bT(53,`, which initializes it for you.`),cf(),Aa(54,`p`),bT(55,`The `),Aa(56,`code`),bT(57,`onModuleDestroy()`),cf(),bT(58,`, `),Aa(59,`code`),bT(60,`beforeApplicationShutdown()`),cf(),bT(61,`, and `),Aa(62,`code`),bT(63,`onApplicationShutdown()`),cf(),bT(64,` hooks are triggered only when you call `),Aa(65,`code`),bT(66,`app.close()`),cf(),bT(67,` explicitly, or when the process receives a system signal (such as `),Aa(68,`code`),bT(69,`SIGTERM`),cf(),bT(70,`) and you have called `),Aa(71,`code`),bT(72,`enableShutdownHooks()`),cf(),bT(73,` at application bootstrap (see `),Aa(74,`a`,10),bT(75,`Application shutdown`),cf(),bT(76,` below).`),cf(),Aa(77,`table`)(78,`thead`)(79,`tr`)(80,`th`),bT(81,`Lifecycle hook method`),cf(),Aa(82,`th`),bT(83,`Lifecycle event triggering the hook method call`),cf()()(),Aa(84,`tbody`)(85,`tr`)(86,`td`)(87,`code`),bT(88,`onModuleInit()`),cf()(),Aa(89,`td`),bT(90,`Called once the host module's dependencies have been resolved.`),cf()(),Aa(91,`tr`)(92,`td`)(93,`code`),bT(94,`onApplicationBootstrap()`),cf()(),Aa(95,`td`),bT(96,`Called once all modules have been initialized, but before listening for connections.`),cf()(),Aa(97,`tr`)(98,`td`)(99,`code`),bT(100,`onModuleDestroy()`),cf(),bT(101,`*`),cf(),Aa(102,`td`),bT(103,`Called after a termination signal (e.g., `),Aa(104,`code`),bT(105,`SIGTERM`),cf(),bT(106,`) has been received.`),cf()(),Aa(107,`tr`)(108,`td`)(109,`code`),bT(110,`beforeApplicationShutdown()`),cf(),bT(111,`*`),cf(),Aa(112,`td`),bT(113,`Called after all `),Aa(114,`code`),bT(115,`onModuleDestroy()`),cf(),bT(116,` handlers have completed (Promises resolved or rejected);`),Wa(117,`br`),bT(118,`once complete (Promises resolved or rejected), all existing connections will be closed (`),Aa(119,`code`),bT(120,`app.close()`),cf(),bT(121,` called).`),cf()(),Aa(122,`tr`)(123,`td`)(124,`code`),bT(125,`onApplicationShutdown()`),cf(),bT(126,`*`),cf(),Aa(127,`td`),bT(128,`Called after connections close, as the last step of `),Aa(129,`code`),bT(130,`app.close()`),cf(),bT(131,`.`),cf()()()(),Aa(132,`p`),bT(133,`* For these events, if you're not calling `),Aa(134,`code`),bT(135,`app.close()`),cf(),bT(136,` explicitly, you must opt in to make them work with system signals such as `),Aa(137,`code`),bT(138,`SIGTERM`),cf(),bT(139,`. See `),Aa(140,`a`,10),bT(141,`Application shutdown`),cf(),bT(142,` below.`),cf(),Aa(143,`blockquote`,11)(144,`strong`),bT(145,`Warning`),cf(),bT(146,` The lifecycle hooks listed above are not triggered for `),Aa(147,`strong`),bT(148,`request-scoped`),cf(),bT(149,` classes. Request-scoped classes are not tied to the application lifecycle, and their lifespan is unpredictable. They are created exclusively for each request and garbage-collected after the response is sent.
`),cf(),Aa(150,`blockquote`,12)(151,`strong`),bT(152,`Hint`),cf(),bT(153,` Nest calls `),Aa(154,`code`),bT(155,`onModuleInit()`),cf(),bT(156,` and `),Aa(157,`code`),bT(158,`onApplicationBootstrap()`),cf(),bT(159,` module by module, ordered by each module's distance from the root module in the import graph: the most deeply imported modules (and global modules) go first, and the root module goes last. Each module's hooks are awaited before Nest moves on to the next module. The shutdown hooks run in the reverse order.
`),cf(),Aa(160,`h4`,13)(161,`span`),bT(162,`Usage`),cf()(),Aa(163,`p`),bT(164,`Each lifecycle hook is represented by an interface. Interfaces are technically optional because they do not exist after TypeScript compilation. Nonetheless, it's good practice to use them to benefit from strong typing and editor tooling. To register a lifecycle hook, implement the appropriate interface. For example, to register a method to be called during module initialization on a particular class (e.g., a controller, provider, or module), implement the `),Aa(165,`code`),bT(166,`OnModuleInit`),cf(),bT(167,` interface by supplying an `),Aa(168,`code`),bT(169,`onModuleInit()`),cf(),bT(170,` method:`),cf(),Aa(171,`app-copy-button`,14)(172,`span`,15),Wa(173,`app-tabs`,null,1),cf(),Aa(175,`pre`)(176,`code`,16),bT(177,`
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class UsersService implements OnModuleInit {
  onModuleInit() {
    console.log(\`The module has been initialized.\`);
  }
}
`),cf()(),Aa(178,`pre`)(179,`code`,16),bT(180,`
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  onModuleInit() {
    console.log(\`The module has been initialized.\`);
  }
}
`),cf()()(),Aa(181,`h4`,17)(182,`span`),bT(183,`Asynchronous initialization`),cf()(),Aa(184,`p`),bT(185,`Both the `),Aa(186,`code`),bT(187,`OnModuleInit`),cf(),bT(188,` and `),Aa(189,`code`),bT(190,`OnApplicationBootstrap`),cf(),bT(191,` hooks let you defer the application initialization process. Return a `),Aa(192,`code`),bT(193,`Promise`),cf(),bT(194,`, or mark the method as `),Aa(195,`code`),bT(196,`async`),cf(),bT(197,` and `),Aa(198,`code`),bT(199,`await`),cf(),bT(200,` the completion of an asynchronous operation in the method body.`),cf(),Aa(201,`app-copy-button`,14)(202,`span`,15),Wa(203,`app-tabs`,null,2),cf(),Aa(205,`pre`)(206,`code`,16),bT(207,`
async onModuleInit(): Promise<void> {
  await this.fetch();
}
`),cf()(),Aa(208,`pre`)(209,`code`,16),bT(210,`
async onModuleInit() {
  await this.fetch();
}
`),cf()()(),Aa(211,`h4`,18)(212,`span`),bT(213,`Application shutdown`),cf()(),Aa(214,`p`),bT(215,`The `),Aa(216,`code`),bT(217,`onModuleDestroy()`),cf(),bT(218,`, `),Aa(219,`code`),bT(220,`beforeApplicationShutdown()`),cf(),bT(221,`, and `),Aa(222,`code`),bT(223,`onApplicationShutdown()`),cf(),bT(224,` hooks are called in the terminating phase, in response to an explicit call to `),Aa(225,`code`),bT(226,`app.close()`),cf(),bT(227,` or, if you opted in, upon receipt of system signals such as `),Aa(228,`code`),bT(229,`SIGTERM`),cf(),bT(230,`. This feature is often used with `),Aa(231,`a`,19),bT(232,`Kubernetes`),cf(),bT(233,` to manage container lifecycles, with `),Aa(234,`a`,20),bT(235,`Heroku`),cf(),bT(236,` dynos, and with similar services.`),cf(),Aa(237,`p`),bT(238,`Shutdown hook listeners consume system resources, so they are disabled by default. To use shutdown hooks, you `),Aa(239,`strong`),bT(240,`must enable listeners`),cf(),bT(241,` by calling `),Aa(242,`code`),bT(243,`enableShutdownHooks()`),cf(),bT(244,`:`),cf(),Aa(245,`app-copy-button`)(246,`pre`)(247,`code`,16),bT(248,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(249,`blockquote`,11)(250,`strong`),bT(251,`Warning`),cf(),bT(252,` Due to inherent platform limitations, NestJS has limited support for application shutdown hooks on Windows. You can expect `),Aa(253,`code`),bT(254,`SIGINT`),cf(),bT(255,` to work, as well as `),Aa(256,`code`),bT(257,`SIGBREAK`),cf(),bT(258,` and, to some extent, `),Aa(259,`code`),bT(260,`SIGHUP`),cf(),bT(261,`. However, `),Aa(262,`code`),bT(263,`SIGTERM`),cf(),bT(264,` never works on Windows, because killing a process in the Task Manager is unconditional (there is no way for an application to detect or prevent it). To learn more about how `),Aa(265,`code`),bT(266,`SIGINT`),cf(),bT(267,`, `),Aa(268,`code`),bT(269,`SIGBREAK`),cf(),bT(270,`, and other signals are handled on Windows, see the `),Aa(271,`a`,21),bT(272,`libuv signal handling documentation`),cf(),bT(273,` and the Node.js documentation on `),Aa(274,`a`,22),bT(275,`signal events`),cf(),bT(276,`.
`),cf(),Aa(277,`blockquote`,12)(278,`strong`),bT(279,`Hint`),cf(),Aa(280,`code`),bT(281,`enableShutdownHooks()`),cf(),bT(282,` consumes memory by starting listeners. When you run multiple Nest apps in a single Node.js process (e.g., during parallel test runs), Node.js may warn about too many listeners. For this reason, shutdown hooks are not enabled by default. Keep this in mind when running multiple instances in a single Node.js process.
`),cf(),Aa(283,`p`),bT(284,`When the application receives a termination signal, it calls any registered `),Aa(285,`code`),bT(286,`onModuleDestroy()`),cf(),bT(287,`, `),Aa(288,`code`),bT(289,`beforeApplicationShutdown()`),cf(),bT(290,`, and `),Aa(291,`code`),bT(292,`onApplicationShutdown()`),cf(),bT(293,` methods, in that order. `),Aa(294,`code`),bT(295,`beforeApplicationShutdown()`),cf(),bT(296,` and `),Aa(297,`code`),bT(298,`onApplicationShutdown()`),cf(),bT(299,` receive the corresponding signal as their first parameter (`),Aa(300,`code`),bT(301,`onModuleDestroy()`),cf(),bT(302,` takes no arguments). If a registered method returns a promise, Nest doesn't continue the sequence until the promise is resolved or rejected.`),cf(),Aa(303,`app-copy-button`,14)(304,`span`,15),Wa(305,`app-tabs`,null,3),cf(),Aa(307,`pre`)(308,`code`,16),bT(309,`
@Injectable()
class UsersService implements OnApplicationShutdown {
  onApplicationShutdown(signal: string) {
    console.log(signal); // e.g., "SIGINT"
  }
}
`),cf()(),Aa(310,`pre`)(311,`code`,16),bT(312,`
@Injectable()
class UsersService {
  onApplicationShutdown(signal) {
    console.log(signal); // e.g., "SIGINT"
  }
}
`),cf()()(),Aa(313,`blockquote`,12)(314,`strong`),bT(315,`Hint`),cf(),bT(316,` Calling `),Aa(317,`code`),bT(318,`app.close()`),cf(),bT(319,` doesn't terminate the Node.js process. It only runs the shutdown sequence (the `),Aa(320,`code`),bT(321,`onModuleDestroy()`),cf(),bT(322,`, `),Aa(323,`code`),bT(324,`beforeApplicationShutdown()`),cf(),bT(325,`, and `),Aa(326,`code`),bT(327,`onApplicationShutdown()`),cf(),bT(328,` hooks, plus closing the underlying server). If there are active intervals, long-running background tasks, and so on, the process won't exit on its own.
`),cf()(),Aa(329,`a`,23),Wa(330,`i`,24),Aa(331,`span`),bT(332,`Edit on GitHub`),cf()()()),d&2){let x=tT(174),h=tT(204),y=tT(306);zC(175),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(27),zy(`hide`,h.isJsActive),zC(3),zy(`hide`,!h.isJsActive),zC(99),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive)}},dependencies:[Lt,ln,u],encapsulation:2})}return a})();var J=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-module-ref`]],features:[xy],decls:288,vars:58,consts:[[`contentReference`,``],[`appaf0f2da347f483513379dc009c1650bf11fd9524`,``],[`app37184b7304fb31902721405b0c1953f8e0bc7235`,``],[`app7a2b1609ce27f7806c9e6bfed2a46d63656b0bcd`,``],[`appe500afc3ab50894b27d126dbc5823b7f3899c066`,``],[`app21367c3a3ec15adb065b9f5aa3d101eaa981dcbc`,``],[`app0c9b8f06e604cfe7d452574da9856eed577b9177`,``],[`appb5ad0d11383d16d2bd10c36029bb9e334ad099b8`,``],[1,`content`],[1,`content-inner`],[`id`,`module-reference`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`retrieving-instances`],[1,`warning`],[`href`,`/fundamentals/module-ref#resolving-scoped-providers`],[`routerLink`,`/fundamentals/injection-scopes`],[`appAnchor`,``,`id`,`resolving-scoped-providers`],[`appAnchor`,``,`id`,`registering-request-provider`],[`appAnchor`,``,`id`,`getting-current-sub-tree`],[`href`,`/fundamentals/injection-scopes#request-provider`],[`appAnchor`,``,`id`,`instantiating-custom-classes-dynamically`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/module-reference.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){if(d&1&&(Aa(0,`div`,8,0)(2,`div`,9)(3,`h3`,10),bT(4,`Module reference`),cf(),Aa(5,`p`),bT(6,`Nest provides the `),Aa(7,`code`),bT(8,`ModuleRef`),cf(),bT(9,` class to navigate the internal list of providers and obtain a reference to any provider, using its injection token as a lookup key. `),Aa(10,`code`),bT(11,`ModuleRef`),cf(),bT(12,` also lets you dynamically instantiate both static and scoped providers. Inject `),Aa(13,`code`),bT(14,`ModuleRef`),cf(),bT(15,` into a class like any other dependency:`),cf(),Aa(16,`app-copy-button`,11)(17,`span`,12),bT(18),LT(19,`extension`),Wa(20,`app-tabs`,null,1),cf(),Aa(22,`pre`)(23,`code`,13),bT(24,`
@Injectable()
export class CatsService {
  constructor(private moduleRef: ModuleRef) {}
}
`),cf()(),Aa(25,`pre`)(26,`code`,13),bT(27,`
@Injectable()
@Dependencies(ModuleRef)
export class CatsService {
  constructor(moduleRef) {
    this.moduleRef = moduleRef;
  }
}
`),cf()()(),Aa(28,`blockquote`,14)(29,`strong`),bT(30,`Hint`),cf(),bT(31,` The `),Aa(32,`code`),bT(33,`ModuleRef`),cf(),bT(34,` class is imported from the `),Aa(35,`code`),bT(36,`@nestjs/core`),cf(),bT(37,` package.
`),cf(),Aa(38,`h4`,15)(39,`span`),bT(40,`Retrieving instances`),cf()(),Aa(41,`p`),bT(42,`The `),Aa(43,`code`),bT(44,`ModuleRef`),cf(),bT(45,` instance (hereafter referred to as the `),Aa(46,`strong`),bT(47,`module reference`),cf(),bT(48,`) has a `),Aa(49,`code`),bT(50,`get()`),cf(),bT(51,` method. By default, this method uses an injection token or class name to return a provider, controller, or injectable (e.g., a guard or interceptor) that was registered and instantiated in the `),Aa(52,`em`),bT(53,`current module`),cf(),bT(54,`. If the instance is not found, an exception is thrown.`),cf(),Aa(55,`app-copy-button`,11)(56,`span`,12),bT(57),LT(58,`extension`),Wa(59,`app-tabs`,null,2),cf(),Aa(61,`pre`)(62,`code`,13),bT(63,`
@Injectable()
export class CatsService implements OnModuleInit {
  private service: Service;
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.service = this.moduleRef.get(Service);
  }
}
`),cf()(),Aa(64,`pre`)(65,`code`,13),bT(66,`
@Injectable()
@Dependencies(ModuleRef)
export class CatsService {
  constructor(moduleRef) {
    this.moduleRef = moduleRef;
  }

  onModuleInit() {
    this.service = this.moduleRef.get(Service);
  }
}
`),cf()()(),Aa(67,`blockquote`,16)(68,`strong`),bT(69,`Warning`),cf(),bT(70,` You can't retrieve scoped providers (transient or request-scoped, including providers that are implicitly request-scoped through their dependencies) with the `),Aa(71,`code`),bT(72,`get()`),cf(),bT(73,` method. Instead, use the technique described in `),Aa(74,`a`,17),bT(75,`Resolving scoped providers`),cf(),bT(76,` below. Learn how to control scopes in the `),Aa(77,`a`,18),bT(78,`injection scopes`),cf(),bT(79,` chapter.
`),cf(),Aa(80,`p`),bT(81,`To retrieve a provider from the global context (for example, if the provider was registered in a different module), pass the `),Aa(82,`code`),bT(83),cf(),bT(84,` option as the second argument to `),Aa(85,`code`),bT(86,`get()`),cf(),bT(87,`.`),cf(),Aa(88,`app-copy-button`)(89,`pre`)(90,`code`,13),bT(91,`
this.moduleRef.get(Service, { strict: false });
`),cf()()(),Aa(92,`h4`,19)(93,`span`),bT(94,`Resolving scoped providers`),cf()(),Aa(95,`p`),bT(96,`To dynamically resolve a scoped provider (transient or request-scoped), use the `),Aa(97,`code`),bT(98,`resolve()`),cf(),bT(99,` method, passing the provider's injection token as an argument.`),cf(),Aa(100,`app-copy-button`,11)(101,`span`,12),bT(102),LT(103,`extension`),Wa(104,`app-tabs`,null,3),cf(),Aa(106,`pre`)(107,`code`,13),bT(108,`
@Injectable()
export class CatsService implements OnModuleInit {
  private transientService: TransientService;
  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    this.transientService = await this.moduleRef.resolve(TransientService);
  }
}
`),cf()(),Aa(109,`pre`)(110,`code`,13),bT(111,`
@Injectable()
@Dependencies(ModuleRef)
export class CatsService {
  constructor(moduleRef) {
    this.moduleRef = moduleRef;
  }

  async onModuleInit() {
    this.transientService = await this.moduleRef.resolve(TransientService);
  }
}
`),cf()()(),Aa(112,`p`),bT(113,`The `),Aa(114,`code`),bT(115,`resolve()`),cf(),bT(116,` method returns a unique instance of the provider from its own `),Aa(117,`strong`),bT(118,`DI container sub-tree`),cf(),bT(119,`. Each sub-tree has a unique `),Aa(120,`strong`),bT(121,`context identifier`),cf(),bT(122,`, so if you call this method more than once and compare the instance references, you'll see that they are not equal.`),cf(),Aa(123,`app-copy-button`,11)(124,`span`,12),bT(125),LT(126,`extension`),Wa(127,`app-tabs`,null,4),cf(),Aa(129,`pre`)(130,`code`,13),bT(131,`
@Injectable()
export class CatsService implements OnModuleInit {
  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    const transientServices = await Promise.all([
      this.moduleRef.resolve(TransientService),
      this.moduleRef.resolve(TransientService),
    ]);
    console.log(transientServices[0] === transientServices[1]); // false
  }
}
`),cf()(),Aa(132,`pre`)(133,`code`,13),bT(134,`
@Injectable()
@Dependencies(ModuleRef)
export class CatsService {
  constructor(moduleRef) {
    this.moduleRef = moduleRef;
  }

  async onModuleInit() {
    const transientServices = await Promise.all([
      this.moduleRef.resolve(TransientService),
      this.moduleRef.resolve(TransientService),
    ]);
    console.log(transientServices[0] === transientServices[1]); // false
  }
}
`),cf()()(),Aa(135,`p`),bT(136,`To get a single instance across multiple `),Aa(137,`code`),bT(138,`resolve()`),cf(),bT(139,` calls, and ensure they share the same generated DI container sub-tree, pass a context identifier to the `),Aa(140,`code`),bT(141,`resolve()`),cf(),bT(142,` method. Use the `),Aa(143,`code`),bT(144,`ContextIdFactory`),cf(),bT(145,` class to generate a context identifier: its `),Aa(146,`code`),bT(147,`create()`),cf(),bT(148,` method returns a new unique identifier.`),cf(),Aa(149,`app-copy-button`,11)(150,`span`,12),bT(151),LT(152,`extension`),Wa(153,`app-tabs`,null,5),cf(),Aa(155,`pre`)(156,`code`,13),bT(157,`
@Injectable()
export class CatsService implements OnModuleInit {
  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    const contextId = ContextIdFactory.create();
    const transientServices = await Promise.all([
      this.moduleRef.resolve(TransientService, contextId),
      this.moduleRef.resolve(TransientService, contextId),
    ]);
    console.log(transientServices[0] === transientServices[1]); // true
  }
}
`),cf()(),Aa(158,`pre`)(159,`code`,13),bT(160,`
@Injectable()
@Dependencies(ModuleRef)
export class CatsService {
  constructor(moduleRef) {
    this.moduleRef = moduleRef;
  }

  async onModuleInit() {
    const contextId = ContextIdFactory.create();
    const transientServices = await Promise.all([
      this.moduleRef.resolve(TransientService, contextId),
      this.moduleRef.resolve(TransientService, contextId),
    ]);
    console.log(transientServices[0] === transientServices[1]); // true
  }
}
`),cf()()(),Aa(161,`blockquote`,14)(162,`strong`),bT(163,`Hint`),cf(),bT(164,` The `),Aa(165,`code`),bT(166,`ContextIdFactory`),cf(),bT(167,` class is imported from the `),Aa(168,`code`),bT(169,`@nestjs/core`),cf(),bT(170,` package.
`),cf(),Aa(171,`h4`,20)(172,`span`),bT(173,`Registering `),Aa(174,`code`),bT(175,`REQUEST`),cf(),bT(176,` provider`),cf()(),Aa(177,`p`),bT(178,`Manually generated context identifiers (created with `),Aa(179,`code`),bT(180,`ContextIdFactory.create()`),cf(),bT(181,`) represent DI sub-trees in which the `),Aa(182,`code`),bT(183,`REQUEST`),cf(),bT(184,` provider is `),Aa(185,`code`),bT(186,`undefined`),cf(),bT(187,`, because these sub-trees are not instantiated and managed by the Nest dependency injection system.`),cf(),Aa(188,`p`),bT(189,`To register a custom `),Aa(190,`code`),bT(191,`REQUEST`),cf(),bT(192,` object for a manually created DI sub-tree, use the `),Aa(193,`code`),bT(194,`ModuleRef#registerRequestByContextId()`),cf(),bT(195,` method:`),cf(),Aa(196,`app-copy-button`)(197,`pre`)(198,`code`,13),bT(199,`
const contextId = ContextIdFactory.create();
this.moduleRef.registerRequestByContextId(/* YOUR_REQUEST_OBJECT */, contextId);
`),cf()()(),Aa(200,`h4`,21)(201,`span`),bT(202,`Getting current sub-tree`),cf()(),Aa(203,`p`),bT(204,`Occasionally, you may want to resolve an instance of a request-scoped provider within a `),Aa(205,`strong`),bT(206,`request context`),cf(),bT(207,`. Suppose `),Aa(208,`code`),bT(209,`CatsService`),cf(),bT(210,` is request-scoped, and you want to resolve the `),Aa(211,`code`),bT(212,`CatsRepository`),cf(),bT(213,` instance, which is also a request-scoped provider. To share the same DI container sub-tree, you must obtain the current context identifier instead of generating a new one (e.g., with the `),Aa(214,`code`),bT(215,`ContextIdFactory.create()`),cf(),bT(216,` function, as shown above). To obtain the current context identifier, start by injecting the request object with the `),Aa(217,`code`),bT(218,`@Inject()`),cf(),bT(219,` decorator:`),cf(),Aa(220,`app-copy-button`,11)(221,`span`,12),bT(222),LT(223,`extension`),Wa(224,`app-tabs`,null,6),cf(),Aa(226,`pre`)(227,`code`,13),bT(228,`
@Injectable()
export class CatsService {
  constructor(
    @Inject(REQUEST) private request: Record<string, unknown>,
  ) {}
}
`),cf()(),Aa(229,`pre`)(230,`code`,13),bT(231,`
@Injectable()
@Dependencies(REQUEST)
export class CatsService {
  constructor(request) {
    this.request = request;
  }
}
`),cf()()(),Aa(232,`blockquote`,14)(233,`strong`),bT(234,`Hint`),cf(),bT(235,` Learn more about the request provider in the `),Aa(236,`a`,22),bT(237,`Request provider`),cf(),bT(238,` section of the injection scopes chapter.
`),cf(),Aa(239,`p`),bT(240,`Now use the `),Aa(241,`code`),bT(242,`getByRequest()`),cf(),bT(243,` method of the `),Aa(244,`code`),bT(245,`ContextIdFactory`),cf(),bT(246,` class to get the context identifier associated with the request object, and pass it to the `),Aa(247,`code`),bT(248,`resolve()`),cf(),bT(249,` call:`),cf(),Aa(250,`app-copy-button`)(251,`pre`)(252,`code`,13),bT(253,`
const contextId = ContextIdFactory.getByRequest(this.request);
const catsRepository = await this.moduleRef.resolve(CatsRepository, contextId);
`),cf()()(),Aa(254,`h4`,23)(255,`span`),bT(256,`Instantiating custom classes dynamically`),cf()(),Aa(257,`p`),bT(258,`To dynamically instantiate a class that `),Aa(259,`strong`),bT(260,`wasn't previously registered`),cf(),bT(261,` as a `),Aa(262,`strong`),bT(263,`provider`),cf(),bT(264,`, use the module reference's `),Aa(265,`code`),bT(266,`create()`),cf(),bT(267,` method:`),cf(),Aa(268,`app-copy-button`,11)(269,`span`,12),bT(270),LT(271,`extension`),Wa(272,`app-tabs`,null,7),cf(),Aa(274,`pre`)(275,`code`,13),bT(276,`
@Injectable()
export class CatsService implements OnModuleInit {
  private catsFactory: CatsFactory;
  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    this.catsFactory = await this.moduleRef.create(CatsFactory);
  }
}
`),cf()(),Aa(277,`pre`)(278,`code`,13),bT(279,`
@Injectable()
@Dependencies(ModuleRef)
export class CatsService {
  constructor(moduleRef) {
    this.moduleRef = moduleRef;
  }

  async onModuleInit() {
    this.catsFactory = await this.moduleRef.create(CatsFactory);
  }
}
`),cf()()(),Aa(280,`p`),bT(281,`This technique lets you conditionally instantiate different classes outside of the framework container.`),cf(),Aa(282,`p`),Wa(283,`app-banner-observe`),cf()(),Aa(284,`a`,24),Wa(285,`i`,25),Aa(286,`span`),bT(287,`Edit on GitHub`),cf()()()),d&2){let x=tT(21),h=tT(60),y=tT(105),I=tT(128),k=tT(154),M=tT(225),j=tT(273);zC(18),hf(` `,jT(19,37,`cats.service`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(32),hf(` `,jT(58,40,`cats.service`,h.isJsActive),`
`),zC(4),zy(`hide`,h.isJsActive),zC(3),zy(`hide`,!h.isJsActive),zC(19),Ky(``,`{`,` strict: false `,`}`),zC(19),hf(` `,jT(103,43,`cats.service`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(16),hf(` `,jT(126,46,`cats.service`,I.isJsActive),`
`),zC(4),zy(`hide`,I.isJsActive),zC(3),zy(`hide`,!I.isJsActive),zC(19),hf(` `,jT(152,49,`cats.service`,k.isJsActive),`
`),zC(4),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(64),hf(` `,jT(223,52,`cats.service`,M.isJsActive),`
`),zC(4),zy(`hide`,M.isJsActive),zC(3),zy(`hide`,!M.isJsActive),zC(41),hf(` `,jT(271,55,`cats.service`,j.isJsActive),`
`),zC(4),zy(`hide`,j.isJsActive),zC(3),zy(`hide`,!j.isJsActive)}},dependencies:[ln,u,Lt,Jc,l$1,g],encapsulation:2})}return a})();var z=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-execution-context`]],features:[xy],decls:649,vars:72,consts:[[`contentReference`,``],[`app2d3c5e68579f22b1a77999d6ac3cc90d7483b5a8`,``],[`app0eaa523295672a6d50be7d6c96c38e30ff2dad69`,``],[`appab6ed7826133edb029b5157a5f58e34cc699440b`,``],[`app5aa06d5a198204f635edc361487201c445eb1d28`,``],[`app470df51f236edb4d82e9be09cf2f5be2a05f503c`,``],[`appaab889a6425d557c483dce4572d0e420b2dca00b`,``],[`appc22bd1165b8be7a3418097bb70aa52e7a62053ef`,``],[`appc19997e04899268a038c08f1c0d7a77e9855346a`,``],[`app46ba9ad974f623c0d4c60163691a1cbe1e7bcb3b`,``],[`appf01ccd5a66a5c7e847bc4db53958924b714f34f1`,``],[1,`content`],[1,`content-inner`],[`id`,`execution-context`],[`routerLink`,`/guards`],[`routerLink`,`/exception-filters`],[`routerLink`,`/interceptors`],[`appAnchor`,``,`id`,`argumentshost-class`],[`href`,`/exception-filters#arguments-host`],[`routerLink`,`/graphql/quick-start`],[`appAnchor`,``,`id`,`current-application-context`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`host-handler-arguments`],[`appAnchor`,``,`id`,`executioncontext-class`],[`href`,`/guards#execution-context`],[`href`,`/interceptors#execution-context`],[`appAnchor`,``,`id`,`reflection-and-metadata`],[1,`with-heading`],[1,`filename`],[1,`language-ts`],[`appAnchor`,``,`id`,`low-level-approach`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/execution-context.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){if(d&1&&(Aa(0,`div`,11,0)(2,`div`,12)(3,`h3`,13),bT(4,`Execution context`),cf(),Aa(5,`p`),bT(6,`Nest provides several utility classes that help you write applications that function across multiple application contexts (e.g., HTTP server-based, microservices, and WebSockets application contexts). These utilities provide information about the current execution context, which you can use to build generic `),Aa(7,`a`,14),bT(8,`guards`),cf(),bT(9,`, `),Aa(10,`a`,15),bT(11,`filters`),cf(),bT(12,`, and `),Aa(13,`a`,16),bT(14,`interceptors`),cf(),bT(15,` that work across a broad set of controllers, methods, and execution contexts.`),cf(),Aa(16,`p`),bT(17,`This chapter covers two such classes: `),Aa(18,`code`),bT(19,`ArgumentsHost`),cf(),bT(20,` and `),Aa(21,`code`),bT(22,`ExecutionContext`),cf(),bT(23,`.`),cf(),Aa(24,`h4`,17)(25,`span`),bT(26,`ArgumentsHost class`),cf()(),Aa(27,`p`),bT(28,`The `),Aa(29,`code`),bT(30,`ArgumentsHost`),cf(),bT(31,` class provides methods for retrieving the arguments being passed to a handler. It lets you choose the appropriate context (e.g., HTTP, RPC (microservice), or WebSockets) to retrieve the arguments from. The framework provides an instance of `),Aa(32,`code`),bT(33,`ArgumentsHost`),cf(),bT(34,`, typically referenced as a `),Aa(35,`code`),bT(36,`host`),cf(),bT(37,` parameter, in places where you may want to access it. For example, the `),Aa(38,`code`),bT(39,`catch()`),cf(),bT(40,` method of an `),Aa(41,`a`,18),bT(42,`exception filter`),cf(),bT(43,` is called with an `),Aa(44,`code`),bT(45,`ArgumentsHost`),cf(),bT(46,` instance.`),cf(),Aa(47,`p`)(48,`code`),bT(49,`ArgumentsHost`),cf(),bT(50,` acts as an abstraction over a handler's arguments. For example, in HTTP server applications (when `),Aa(51,`code`),bT(52,`@nestjs/platform-express`),cf(),bT(53,` is used), the `),Aa(54,`code`),bT(55,`host`),cf(),bT(56,` object encapsulates Express's `),Aa(57,`code`),bT(58,`[request, response, next]`),cf(),bT(59,` array, where `),Aa(60,`code`),bT(61,`request`),cf(),bT(62,` is the request object, `),Aa(63,`code`),bT(64,`response`),cf(),bT(65,` is the response object, and `),Aa(66,`code`),bT(67,`next`),cf(),bT(68,` is a function that controls the application's request-response cycle. For `),Aa(69,`a`,19),bT(70,`GraphQL`),cf(),bT(71,` applications, on the other hand, the `),Aa(72,`code`),bT(73,`host`),cf(),bT(74,` object contains the `),Aa(75,`code`),bT(76,`[root, args, context, info]`),cf(),bT(77,` array.`),cf(),Aa(78,`h4`,20)(79,`span`),bT(80,`Current application context`),cf()(),Aa(81,`p`),bT(82,`When you build generic `),Aa(83,`a`,14),bT(84,`guards`),cf(),bT(85,`, `),Aa(86,`a`,15),bT(87,`filters`),cf(),bT(88,`, and `),Aa(89,`a`,16),bT(90,`interceptors`),cf(),bT(91,` that are meant to run across multiple application contexts, you need a way to determine the type of application your method is currently running in. Use the `),Aa(92,`code`),bT(93,`getType()`),cf(),bT(94,` method of `),Aa(95,`code`),bT(96,`ArgumentsHost`),cf(),bT(97,` for this. It returns `),Aa(98,`code`),bT(99,`'http'`),cf(),bT(100,`, `),Aa(101,`code`),bT(102,`'rpc'`),cf(),bT(103,`, or `),Aa(104,`code`),bT(105,`'ws'`),cf(),bT(106,` out of the box, and packages such as `),Aa(107,`code`),bT(108,`@nestjs/graphql`),cf(),bT(109,` add their own types:`),cf(),Aa(110,`app-copy-button`)(111,`pre`)(112,`code`,21),bT(113,`
if (host.getType() === 'http') {
  // do something that is only important in the context of regular HTTP requests (REST)
} else if (host.getType() === 'rpc') {
  // do something that is only important in the context of microservice requests
} else if (host.getType<GqlContextType>() === 'graphql') {
  // do something that is only important in the context of GraphQL requests
}
`),cf()()(),Aa(114,`blockquote`,22)(115,`strong`),bT(116,`Hint`),cf(),bT(117,` The `),Aa(118,`code`),bT(119,`GqlContextType`),cf(),bT(120,` type is imported from the `),Aa(121,`code`),bT(122,`@nestjs/graphql`),cf(),bT(123,` package.
`),cf(),Aa(124,`p`),bT(125,`With the application type available, you can write more generic components, as shown below.`),cf(),Aa(126,`h4`,23)(127,`span`),bT(128,`Host handler arguments`),cf()(),Aa(129,`p`),bT(130,`One way to retrieve the array of arguments being passed to the handler is the host object's `),Aa(131,`code`),bT(132,`getArgs()`),cf(),bT(133,` method:`),cf(),Aa(134,`app-copy-button`)(135,`pre`)(136,`code`,21),bT(137,`
const [req, res, next] = host.getArgs();
`),cf()()(),Aa(138,`p`),bT(139,`You can pluck a particular argument by index using the `),Aa(140,`code`),bT(141,`getArgByIndex()`),cf(),bT(142,` method:`),cf(),Aa(143,`app-copy-button`)(144,`pre`)(145,`code`,21),bT(146,`
const request = host.getArgByIndex(0);
const response = host.getArgByIndex(1);
`),cf()()(),Aa(147,`p`),bT(148,`These examples retrieve the request and response objects by index, which is not typically recommended, because it couples the application to a particular execution context. Instead, you can make your code more robust and reusable by using one of the `),Aa(149,`code`),bT(150,`host`),cf(),bT(151,` object's utility methods to switch to the appropriate application context. The context switch utility methods are shown below.`),cf(),Aa(152,`app-copy-button`)(153,`pre`)(154,`code`,21),bT(155,`
/**
 * Switch context to RPC.
 */
switchToRpc(): RpcArgumentsHost;
/**
 * Switch context to HTTP.
 */
switchToHttp(): HttpArgumentsHost;
/**
 * Switch context to WebSockets.
 */
switchToWs(): WsArgumentsHost;
`),cf()()(),Aa(156,`p`),bT(157,`Let's rewrite the previous example using the `),Aa(158,`code`),bT(159,`switchToHttp()`),cf(),bT(160,` method. The `),Aa(161,`code`),bT(162,`host.switchToHttp()`),cf(),bT(163,` helper call returns an `),Aa(164,`code`),bT(165,`HttpArgumentsHost`),cf(),bT(166,` object that is appropriate for the HTTP application context. The `),Aa(167,`code`),bT(168,`HttpArgumentsHost`),cf(),bT(169,` object has two useful methods for extracting the desired objects. The example also passes Express types as type arguments, so the methods return natively typed Express objects:`),cf(),Aa(170,`app-copy-button`)(171,`pre`)(172,`code`,21),bT(173,`
const ctx = host.switchToHttp();
const request = ctx.getRequest<Request>();
const response = ctx.getResponse<Response>();
`),cf()()(),Aa(174,`p`),bT(175,`Similarly, `),Aa(176,`code`),bT(177,`WsArgumentsHost`),cf(),bT(178,` and `),Aa(179,`code`),bT(180,`RpcArgumentsHost`),cf(),bT(181,` have methods that return the appropriate objects in the WebSockets and microservices contexts. Here are the methods of `),Aa(182,`code`),bT(183,`WsArgumentsHost`),cf(),bT(184,`:`),cf(),Aa(185,`app-copy-button`)(186,`pre`)(187,`code`,21),bT(188,`
export interface WsArgumentsHost {
  /**
   * Returns the data object.
   */
  getData<T>(): T;
  /**
   * Returns the client object.
   */
  getClient<T>(): T;
}
`),cf()()(),Aa(189,`p`),bT(190,`And here are the methods of `),Aa(191,`code`),bT(192,`RpcArgumentsHost`),cf(),bT(193,`:`),cf(),Aa(194,`app-copy-button`)(195,`pre`)(196,`code`,21),bT(197,`
export interface RpcArgumentsHost {
  /**
   * Returns the data object.
   */
  getData<T>(): T;

  /**
   * Returns the context object.
   */
  getContext<T>(): T;
}
`),cf()()(),Aa(198,`h4`,24)(199,`span`),bT(200,`ExecutionContext class`),cf()(),Aa(201,`p`)(202,`code`),bT(203,`ExecutionContext`),cf(),bT(204,` extends `),Aa(205,`code`),bT(206,`ArgumentsHost`),cf(),bT(207,`, providing additional details about the current execution process. Like `),Aa(208,`code`),bT(209,`ArgumentsHost`),cf(),bT(210,`, Nest provides an instance of `),Aa(211,`code`),bT(212,`ExecutionContext`),cf(),bT(213,` in places where you may need it, such as the `),Aa(214,`code`),bT(215,`canActivate()`),cf(),bT(216,` method of a `),Aa(217,`a`,25),bT(218,`guard`),cf(),bT(219,` and the `),Aa(220,`code`),bT(221,`intercept()`),cf(),bT(222,` method of an `),Aa(223,`a`,26),bT(224,`interceptor`),cf(),bT(225,`. It provides the following methods:`),cf(),Aa(226,`app-copy-button`)(227,`pre`)(228,`code`,21),bT(229,`
export interface ExecutionContext extends ArgumentsHost {
  /**
   * Returns the type of the controller class which the current handler belongs to.
   */
  getClass<T>(): Type<T>;
  /**
   * Returns a reference to the handler (method) that will be invoked next in the
   * request pipeline.
   */
  getHandler(): Function;
}
`),cf()()(),Aa(230,`p`),bT(231,`The `),Aa(232,`code`),bT(233,`getHandler()`),cf(),bT(234,` method returns a reference to the handler about to be invoked. The `),Aa(235,`code`),bT(236,`getClass()`),cf(),bT(237,` method returns the type of the controller class that this handler belongs to. For example, in an HTTP context, if the currently processed request is a `),Aa(238,`code`),bT(239,`POST`),cf(),bT(240,` request bound to the `),Aa(241,`code`),bT(242,`create()`),cf(),bT(243,` method on `),Aa(244,`code`),bT(245,`CatsController`),cf(),bT(246,`, `),Aa(247,`code`),bT(248,`getHandler()`),cf(),bT(249,` returns a reference to the `),Aa(250,`code`),bT(251,`create()`),cf(),bT(252,` method, and `),Aa(253,`code`),bT(254,`getClass()`),cf(),bT(255,` returns the `),Aa(256,`code`),bT(257,`CatsController`),cf(),Aa(258,`strong`),bT(259,`class`),cf(),bT(260,` (not an instance).`),cf(),Aa(261,`app-copy-button`)(262,`pre`)(263,`code`,21),bT(264,`
const methodKey = ctx.getHandler().name; // "create"
const className = ctx.getClass().name; // "CatsController"
`),cf()()(),Aa(265,`p`),bT(266,`Access to both the current class and the handler method provides great flexibility. Most importantly, it lets you read, from within guards or interceptors, the metadata set by decorators created with `),Aa(267,`code`),bT(268,`Reflector#createDecorator`),cf(),bT(269,` or by the built-in `),Aa(270,`code`),bT(271,`@SetMetadata()`),cf(),bT(272,` decorator. The following sections cover this use case.`),cf(),Aa(273,`p`),Wa(274,`app-banner-enterprise`),cf(),Aa(275,`h4`,27)(276,`span`),bT(277,`Reflection and metadata`),cf()(),Aa(278,`p`),bT(279,`Nest lets you attach `),Aa(280,`strong`),bT(281,`custom metadata`),cf(),bT(282,` to route handlers through decorators created with the `),Aa(283,`code`),bT(284,`Reflector#createDecorator`),cf(),bT(285,` method, or with the built-in `),Aa(286,`code`),bT(287,`@SetMetadata()`),cf(),bT(288,` decorator. This section compares the two approaches and shows how to access the metadata from within a guard or interceptor.`),cf(),Aa(289,`p`),bT(290,`To create strongly typed decorators with `),Aa(291,`code`),bT(292,`Reflector#createDecorator`),cf(),bT(293,`, specify the type argument. For example, let's create a `),Aa(294,`code`),bT(295,`Roles`),cf(),bT(296,` decorator that takes an array of strings as an argument.`),cf(),Aa(297,`app-copy-button`,28)(298,`span`,29),bT(299),LT(300,`extension`),Wa(301,`app-tabs`,null,1),cf(),Aa(303,`pre`)(304,`code`,30),bT(305,`
import { Reflector } from '@nestjs/core';

export const Roles = Reflector.createDecorator<string[]>();
`),cf()()(),Aa(306,`p`),bT(307,`The `),Aa(308,`code`),bT(309,`Roles`),cf(),bT(310,` decorator here is a function that takes a single argument of type `),Aa(311,`code`),bT(312,`string[]`),cf(),bT(313,`.`),cf(),Aa(314,`p`),bT(315,`To use this decorator, annotate the handler with it:`),cf(),Aa(316,`app-copy-button`,28)(317,`span`,29),bT(318),LT(319,`extension`),Wa(320,`app-tabs`,null,2),cf(),Aa(322,`pre`)(323,`code`,21),bT(324,`
@Post()
@Roles(['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()(),Aa(325,`pre`)(326,`code`,21),bT(327,`
@Post()
@Roles(['admin'])
@Bind(Body())
async create(createCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()()(),Aa(328,`p`),bT(329,`This attaches the `),Aa(330,`code`),bT(331,`Roles`),cf(),bT(332,` decorator metadata to the `),Aa(333,`code`),bT(334,`create()`),cf(),bT(335,` method, indicating that only users with the `),Aa(336,`code`),bT(337,`admin`),cf(),bT(338,` role should be allowed to access this route.`),cf(),Aa(339,`p`),bT(340,`To access the route's role(s) (custom metadata), use the `),Aa(341,`code`),bT(342,`Reflector`),cf(),bT(343,` helper class again. `),Aa(344,`code`),bT(345,`Reflector`),cf(),bT(346,` can be injected into a class in the normal way:`),cf(),Aa(347,`app-copy-button`,28)(348,`span`,29),bT(349),LT(350,`extension`),Wa(351,`app-tabs`,null,3),cf(),Aa(353,`pre`)(354,`code`,21),bT(355,`
@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}
}
`),cf()(),Aa(356,`pre`)(357,`code`,21),bT(358,`
@Injectable()
@Dependencies(Reflector)
export class RolesGuard {
  constructor(reflector) {
    this.reflector = reflector;
  }
}
`),cf()()(),Aa(359,`blockquote`,22)(360,`strong`),bT(361,`Hint`),cf(),bT(362,` The `),Aa(363,`code`),bT(364,`Reflector`),cf(),bT(365,` class is imported from the `),Aa(366,`code`),bT(367,`@nestjs/core`),cf(),bT(368,` package.
`),cf(),Aa(369,`p`),bT(370,`Now, to read the handler metadata, use the `),Aa(371,`code`),bT(372,`get()`),cf(),bT(373,` method:`),cf(),Aa(374,`app-copy-button`)(375,`pre`)(376,`code`,21),bT(377,`
const roles = this.reflector.get(Roles, context.getHandler());
`),cf()()(),Aa(378,`p`),bT(379,`The `),Aa(380,`code`),bT(381,`Reflector#get`),cf(),bT(382,` method takes two arguments: a decorator reference and a `),Aa(383,`strong`),bT(384,`context`),cf(),bT(385,` (decorator target) to retrieve the metadata from. In this example, the specified `),Aa(386,`strong`),bT(387,`decorator`),cf(),bT(388,` is `),Aa(389,`code`),bT(390,`Roles`),cf(),bT(391,` (see the `),Aa(392,`code`),bT(393,`roles.decorator.ts`),cf(),bT(394,` file above). The context is provided by the call to `),Aa(395,`code`),bT(396,`context.getHandler()`),cf(),bT(397,`, which extracts the metadata for the currently processed route handler. Remember, `),Aa(398,`code`),bT(399,`getHandler()`),cf(),bT(400,` gives you a `),Aa(401,`strong`),bT(402,`reference`),cf(),bT(403,` to the route handler function.`),cf(),Aa(404,`p`),bT(405,`Alternatively, you can apply metadata at the controller level, so that it applies to all routes in the controller class.`),cf(),Aa(406,`app-copy-button`,28)(407,`span`,29),bT(408),LT(409,`extension`),Wa(410,`app-tabs`,null,4),cf(),Aa(412,`pre`)(413,`code`,21),bT(414,`
@Roles(['admin'])
@Controller('cats')
export class CatsController {}
`),cf()(),Aa(415,`pre`)(416,`code`,21),bT(417,`
@Roles(['admin'])
@Controller('cats')
export class CatsController {}
`),cf()()(),Aa(418,`p`),bT(419,`In this case, to extract controller metadata, pass `),Aa(420,`code`),bT(421,`context.getClass()`),cf(),bT(422,` as the second argument (to provide the controller class as the context for metadata extraction) instead of `),Aa(423,`code`),bT(424,`context.getHandler()`),cf(),bT(425,`:`),cf(),Aa(426,`app-copy-button`,28)(427,`span`,29),bT(428),LT(429,`extension`),Wa(430,`app-tabs`,null,5),cf(),Aa(432,`pre`)(433,`code`,21),bT(434,`
const roles = this.reflector.get(Roles, context.getClass());
`),cf()()(),Aa(435,`p`),bT(436,`Because metadata can be provided at multiple levels, you may need to extract and merge metadata from several contexts. The `),Aa(437,`code`),bT(438,`Reflector`),cf(),bT(439,` class provides two utility methods for this. They extract `),Aa(440,`strong`),bT(441,`both`),cf(),bT(442,` controller and method metadata at once, and combine them in different ways.`),cf(),Aa(443,`p`),bT(444,`Consider the following scenario, where you've supplied `),Aa(445,`code`),bT(446,`Roles`),cf(),bT(447,` metadata at both levels.`),cf(),Aa(448,`app-copy-button`,28)(449,`span`,29),bT(450),LT(451,`extension`),Wa(452,`app-tabs`,null,6),cf(),Aa(454,`pre`)(455,`code`,21),bT(456,`
@Roles(['user'])
@Controller('cats')
export class CatsController {
  @Post()
  @Roles(['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
`),cf()(),Aa(457,`pre`)(458,`code`,21),bT(459,`
@Roles(['user'])
@Controller('cats')
export class CatsController {
  @Post()
  @Roles(['admin'])
  @Bind(Body())
  async create(createCatDto) {
    this.catsService.create(createCatDto);
  }
}
`),cf()()(),Aa(460,`p`),bT(461,`If your intent is to specify `),Aa(462,`code`),bT(463,`'user'`),cf(),bT(464,` as the default role and override it selectively for certain methods, use the `),Aa(465,`code`),bT(466,`getAllAndOverride()`),cf(),bT(467,` method. It returns the first defined value, checking the targets in the order you pass them:`),cf(),Aa(468,`app-copy-button`)(469,`pre`)(470,`code`,21),bT(471,`
const roles = this.reflector.getAllAndOverride(Roles, [context.getHandler(), context.getClass()]);
`),cf()()(),Aa(472,`p`),bT(473,`A guard with this code, running in the context of the `),Aa(474,`code`),bT(475,`create()`),cf(),bT(476,` method with the metadata above, results in `),Aa(477,`code`),bT(478,`roles`),cf(),bT(479,` containing `),Aa(480,`code`),bT(481,`['admin']`),cf(),bT(482,`.`),cf(),Aa(483,`p`),bT(484,`To get the metadata from both levels and merge it (this method merges both arrays and objects), use the `),Aa(485,`code`),bT(486,`getAllAndMerge()`),cf(),bT(487,` method:`),cf(),Aa(488,`app-copy-button`)(489,`pre`)(490,`code`,21),bT(491,`
const roles = this.reflector.getAllAndMerge(Roles, [context.getHandler(), context.getClass()]);
`),cf()()(),Aa(492,`p`),bT(493,`This results in `),Aa(494,`code`),bT(495,`roles`),cf(),bT(496,` containing `),Aa(497,`code`),bT(498,`['admin', 'user']`),cf(),bT(499,` (values are concatenated in the order of the targets).`),cf(),Aa(500,`p`),bT(501,`For both of these methods, you pass the decorator reference (or metadata key) as the first argument, and an array of metadata target contexts (i.e., calls to the `),Aa(502,`code`),bT(503,`getHandler()`),cf(),bT(504,` and/or `),Aa(505,`code`),bT(506,`getClass()`),cf(),bT(507,` methods) as the second argument.`),cf(),Aa(508,`h4`,31)(509,`span`),bT(510,`Low-level approach`),cf()(),Aa(511,`p`),bT(512,`As mentioned earlier, instead of using `),Aa(513,`code`),bT(514,`Reflector#createDecorator`),cf(),bT(515,`, you can use the built-in `),Aa(516,`code`),bT(517,`@SetMetadata()`),cf(),bT(518,` decorator to attach metadata to a handler.`),cf(),Aa(519,`app-copy-button`,28)(520,`span`,29),bT(521),LT(522,`extension`),Wa(523,`app-tabs`,null,7),cf(),Aa(525,`pre`)(526,`code`,21),bT(527,`
@Post()
@SetMetadata('roles', ['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()(),Aa(528,`pre`)(529,`code`,21),bT(530,`
@Post()
@SetMetadata('roles', ['admin'])
@Bind(Body())
async create(createCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()()(),Aa(531,`blockquote`,22)(532,`strong`),bT(533,`Hint`),cf(),bT(534,` The `),Aa(535,`code`),bT(536,`@SetMetadata()`),cf(),bT(537,` decorator is imported from the `),Aa(538,`code`),bT(539,`@nestjs/common`),cf(),bT(540,` package.
`),cf(),Aa(541,`p`),bT(542,`The construction above attaches the `),Aa(543,`code`),bT(544,`roles`),cf(),bT(545,` metadata (`),Aa(546,`code`),bT(547,`roles`),cf(),bT(548,` is the metadata key and `),Aa(549,`code`),bT(550,`['admin']`),cf(),bT(551,` is the associated value) to the `),Aa(552,`code`),bT(553,`create()`),cf(),bT(554,` method. While this works, it's not good practice to use `),Aa(555,`code`),bT(556,`@SetMetadata()`),cf(),bT(557,` directly in your routes. Instead, create your own decorators, as shown below:`),cf(),Aa(558,`app-copy-button`,28)(559,`span`,29),bT(560),LT(561,`extension`),Wa(562,`app-tabs`,null,8),cf(),Aa(564,`pre`)(565,`code`,21),bT(566,`
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
`),cf()(),Aa(567,`pre`)(568,`code`,21),bT(569,`
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles) => SetMetadata('roles', roles);
`),cf()()(),Aa(570,`p`),bT(571,`This approach is cleaner and more readable, and resembles the `),Aa(572,`code`),bT(573,`Reflector#createDecorator`),cf(),bT(574,` approach. The difference is that with `),Aa(575,`code`),bT(576,`@SetMetadata()`),cf(),bT(577,` you have more control over the metadata key and value, and you can create decorators that take more than one argument.`),cf(),Aa(578,`p`),bT(579,`With the custom `),Aa(580,`code`),bT(581,`@Roles()`),cf(),bT(582,` decorator in place, you can use it to decorate the `),Aa(583,`code`),bT(584,`create()`),cf(),bT(585,` method.`),cf(),Aa(586,`app-copy-button`,28)(587,`span`,29),bT(588),LT(589,`extension`),Wa(590,`app-tabs`,null,9),cf(),Aa(592,`pre`)(593,`code`,21),bT(594,`
@Post()
@Roles('admin')
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()(),Aa(595,`pre`)(596,`code`,21),bT(597,`
@Post()
@Roles('admin')
@Bind(Body())
async create(createCatDto) {
  this.catsService.create(createCatDto);
}
`),cf()()(),Aa(598,`p`),bT(599,`To access the route's role(s) (custom metadata), use the `),Aa(600,`code`),bT(601,`Reflector`),cf(),bT(602,` helper class again:`),cf(),Aa(603,`app-copy-button`,28)(604,`span`,29),bT(605),LT(606,`extension`),Wa(607,`app-tabs`,null,10),cf(),Aa(609,`pre`)(610,`code`,21),bT(611,`
@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}
}
`),cf()(),Aa(612,`pre`)(613,`code`,21),bT(614,`
@Injectable()
@Dependencies(Reflector)
export class RolesGuard {
  constructor(reflector) {
    this.reflector = reflector;
  }
}
`),cf()()(),Aa(615,`blockquote`,22)(616,`strong`),bT(617,`Hint`),cf(),bT(618,` The `),Aa(619,`code`),bT(620,`Reflector`),cf(),bT(621,` class is imported from the `),Aa(622,`code`),bT(623,`@nestjs/core`),cf(),bT(624,` package.
`),cf(),Aa(625,`p`),bT(626,`Now, to read the handler metadata, use the `),Aa(627,`code`),bT(628,`get()`),cf(),bT(629,` method.`),cf(),Aa(630,`app-copy-button`)(631,`pre`)(632,`code`,21),bT(633,`
const roles = this.reflector.get<string[]>('roles', context.getHandler());
`),cf()()(),Aa(634,`p`),bT(635,`Here, instead of a decorator reference, you pass the metadata `),Aa(636,`strong`),bT(637,`key`),cf(),bT(638,` (in this case, `),Aa(639,`code`),bT(640,`'roles'`),cf(),bT(641,`) as the first argument. Everything else remains the same as in the `),Aa(642,`code`),bT(643,`Reflector#createDecorator`),cf(),bT(644,` example.`),cf()(),Aa(645,`a`,32),Wa(646,`i`,33),Aa(647,`span`),bT(648,`Edit on GitHub`),cf()()()),d&2){let x=tT(302),h=tT(321),y=tT(352),I=tT(411),k=tT(431),M=tT(453),j=tT(524),q=tT(563),D=tT(591),O=tT(608);zC(299),hf(` `,jT(300,42,`roles.decorator`,x.isJsActive),`
`),zC(19),hf(` `,jT(319,45,`cats.controller`,h.isJsActive),`
`),zC(4),zy(`hide`,h.isJsActive),zC(3),zy(`hide`,!h.isJsActive),zC(24),hf(` `,jT(350,48,`roles.guard`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(52),hf(` `,jT(409,51,`cats.controller`,I.isJsActive),`
`),zC(4),zy(`hide`,I.isJsActive),zC(3),zy(`hide`,!I.isJsActive),zC(13),hf(` `,jT(429,54,`roles.guard`,k.isJsActive),`
`),zC(22),hf(` `,jT(451,57,`cats.controller`,M.isJsActive),`
`),zC(4),zy(`hide`,M.isJsActive),zC(3),zy(`hide`,!M.isJsActive),zC(64),hf(` `,jT(522,60,`cats.controller`,j.isJsActive),`
`),zC(4),zy(`hide`,j.isJsActive),zC(3),zy(`hide`,!j.isJsActive),zC(32),hf(` `,jT(561,63,`roles.decorator`,q.isJsActive),`
`),zC(4),zy(`hide`,q.isJsActive),zC(3),zy(`hide`,!q.isJsActive),zC(21),hf(` `,jT(589,66,`cats.controller`,D.isJsActive),`
`),zC(4),zy(`hide`,D.isJsActive),zC(3),zy(`hide`,!D.isJsActive),zC(10),hf(` `,jT(606,69,`roles.guard`,O.isJsActive),`
`),zC(4),zy(`hide`,O.isJsActive),zC(3),zy(`hide`,!O.isJsActive)}},dependencies:[Jc,Lt,ln,l$2,u,g],encapsulation:2})}return a})();var W=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-platform-agnosticism`]],features:[xy],decls:43,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`platform-agnosticism`],[`appAnchor`,``,`id`,`build-once-use-everywhere`],[`routerLink`,`/microservices/basics`],[`routerLink`,`/websockets/gateways`],[`routerLink`,`/graphql/quick-start`],[`routerLink`,`/standalone-applications`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/platform-agnosticism.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){d&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Platform agnosticism`),cf(),Aa(5,`p`),bT(6,`Nest is a platform-agnostic framework. You can develop `),Aa(7,`strong`),bT(8,`reusable logical parts`),cf(),bT(9,` and use them across different types of applications. For example, most components can be reused without change across different underlying HTTP server frameworks (e.g., Express and Fastify), and even across different `),Aa(10,`em`),bT(11,`types`),cf(),bT(12,` of applications (e.g., HTTP servers, microservices with different transport layers, and WebSockets).`),cf(),Aa(13,`h4`,4)(14,`span`),bT(15,`Build once, use everywhere`),cf()(),Aa(16,`p`),bT(17,`The `),Aa(18,`strong`),bT(19,`Overview`),cf(),bT(20,` section of the documentation primarily shows coding techniques using HTTP server frameworks (e.g., apps providing a REST API or an MVC-style server-side rendered app). However, all those building blocks can be used on top of different transport layers (`),Aa(21,`a`,5),bT(22,`microservices`),cf(),bT(23,` or `),Aa(24,`a`,6),bT(25,`WebSockets`),cf(),bT(26,`).`),cf(),Aa(27,`p`),bT(28,`Nest also comes with a dedicated `),Aa(29,`a`,7),bT(30,`GraphQL`),cf(),bT(31,` module. You can use GraphQL as your API layer interchangeably with a REST API.`),cf(),Aa(32,`p`),bT(33,`In addition, the `),Aa(34,`a`,8),bT(35,`application context`),cf(),bT(36,` feature lets you build any kind of Node.js application on top of Nest, including cron jobs and CLI apps.`),cf(),Aa(37,`p`),bT(38,`Nest aims to be a full-fledged platform for Node.js apps that brings a higher level of modularity and reusability to your applications. Build once, use everywhere.`),cf()(),Aa(39,`a`,9),Wa(40,`i`,10),Aa(41,`span`),bT(42,`Edit on GitHub`),cf()()())},dependencies:[Lt,Jc],encapsulation:2})}return a})();var Q=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-provider-scopes`]],features:[xy],decls:438,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`injection-scopes`],[`appAnchor`,``,`id`,`provider-scope`],[1,`info`],[`appAnchor`,``,`id`,`usage`],[1,`language-typescript`],[`routerLink`,`/fundamentals/custom-providers`],[`href`,`/websockets/gateways#request-scoped-gateways`],[1,`warning`],[`href`,`/recipes/passport#request-scoped-strategies`],[`appAnchor`,``,`id`,`controller-scope`],[`appAnchor`,``,`id`,`scope-hierarchy`],[`appAnchor`,``,`id`,`request-provider`],[`routerLink`,`/graphql/quick-start`],[`appAnchor`,``,`id`,`inquirer-provider`],[`appAnchor`,``,`id`,`performance`],[`routerLink`,`/observability/overview`],[`href`,`/recipes/async-local-storage#nestjs-observe`],[`appAnchor`,``,`id`,`durable-providers`],[`href`,`/fundamentals/module-ref#resolving-scoped-providers`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/provider-scopes.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){d&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Injection scopes`),cf(),Aa(5,`p`),bT(6,`If you come from a different programming language background, you might be surprised to learn that in Nest, almost everything is shared across incoming requests: a connection pool to the database, singleton services with global state, and so on. Node.js doesn't follow the multi-threaded stateless request/response model, in which every request is processed by a separate thread. Using singleton instances is therefore fully `),Aa(7,`strong`),bT(8,`safe`),cf(),bT(9,` in Nest applications.`),cf(),Aa(10,`p`),bT(11,`However, there are edge cases where a request-based lifetime is the desired behavior, e.g., per-request caching in GraphQL applications, request tracking, and multi-tenancy. Injection scopes let you obtain the provider lifetime you need.`),cf(),Aa(12,`h4`,4)(13,`span`),bT(14,`Provider scope`),cf()(),Aa(15,`p`),bT(16,`A provider can have any of the following scopes:`),cf(),Aa(17,`table`)(18,`tr`)(19,`td`)(20,`code`),bT(21,`DEFAULT`),cf()(),Aa(22,`td`),bT(23,`A single instance of the provider is shared across the entire application. The instance lifetime is tied directly to the application lifecycle. Once the application has bootstrapped, all singleton providers have been instantiated. Singleton scope is the default.`),cf()(),Aa(24,`tr`)(25,`td`)(26,`code`),bT(27,`REQUEST`),cf()(),Aa(28,`td`),bT(29,`A new instance of the provider is created exclusively for each incoming `),Aa(30,`strong`),bT(31,`request`),cf(),bT(32,`. The instance is garbage-collected after the request has been processed.`),cf()(),Aa(33,`tr`)(34,`td`)(35,`code`),bT(36,`TRANSIENT`),cf()(),Aa(37,`td`),bT(38,`Transient providers are not shared across consumers. Each consumer that injects a transient provider receives a new, dedicated instance.`),cf()()(),Aa(39,`blockquote`,5)(40,`strong`),bT(41,`Hint`),cf(),bT(42,` Singleton scope is `),Aa(43,`strong`),bT(44,`recommended`),cf(),bT(45,` for most use cases. Sharing providers across consumers and across requests means that an instance can be cached, and its initialization occurs only once, during application startup.
`),cf(),Aa(46,`h4`,6)(47,`span`),bT(48,`Usage`),cf()(),Aa(49,`p`),bT(50,`Specify injection scope by passing the `),Aa(51,`code`),bT(52,`scope`),cf(),bT(53,` property to the `),Aa(54,`code`),bT(55,`@Injectable()`),cf(),bT(56,` decorator options object:`),cf(),Aa(57,`app-copy-button`)(58,`pre`)(59,`code`,7),bT(60,`
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class CatsService {}
`),cf()()(),Aa(61,`p`),bT(62,`Similarly, for `),Aa(63,`a`,8),bT(64,`custom providers`),cf(),bT(65,`, set the `),Aa(66,`code`),bT(67,`scope`),cf(),bT(68,` property in the long-hand form of the provider registration:`),cf(),Aa(69,`app-copy-button`)(70,`pre`)(71,`code`,7),bT(72,`
{
  provide: 'CACHE_MANAGER',
  useClass: CacheManager,
  scope: Scope.TRANSIENT,
}
`),cf()()(),Aa(73,`blockquote`,5)(74,`strong`),bT(75,`Hint`),cf(),bT(76,` Import the `),Aa(77,`code`),bT(78,`Scope`),cf(),bT(79,` enum from `),Aa(80,`code`),bT(81,`@nestjs/common`),cf(),bT(82,`.
`),cf(),Aa(83,`p`),bT(84,`Singleton scope is the default and doesn't need to be declared. If you want to declare a provider as singleton-scoped explicitly, use the `),Aa(85,`code`),bT(86,`Scope.DEFAULT`),cf(),bT(87,` value for the `),Aa(88,`code`),bT(89,`scope`),cf(),bT(90,` property.`),cf(),Aa(91,`blockquote`,5)(92,`strong`),bT(93,`Hint`),cf(),bT(94,` Starting with NestJS v12, WebSocket gateways support request-scoped providers. The scope is tied to the socket connection, not to a single message. See `),Aa(95,`a`,9),bT(96,`Request-scoped gateways`),cf(),bT(97,`.
`),cf(),Aa(98,`blockquote`,10)(99,`strong`),bT(100,`Notice`),cf(),bT(101,` Some providers must act as singletons and should not use request-scoped providers, like `),Aa(102,`a`,11)(103,`em`),bT(104,`Passport strategies`),cf()(),bT(105,` or `),Aa(106,`em`),bT(107,`Cron controllers`),cf(),bT(108,`.
`),cf(),Aa(109,`h4`,12)(110,`span`),bT(111,`Controller scope`),cf()(),Aa(112,`p`),bT(113,`Controllers can also have a scope, which applies to all route handlers declared in that controller. Like provider scope, the scope of a controller declares its lifetime. For a request-scoped controller, a new instance is created for each inbound request and garbage-collected once the request has been processed.`),cf(),Aa(114,`p`),bT(115,`Declare controller scope with the `),Aa(116,`code`),bT(117,`scope`),cf(),bT(118,` property of the `),Aa(119,`code`),bT(120,`ControllerOptions`),cf(),bT(121,` object:`),cf(),Aa(122,`app-copy-button`)(123,`pre`)(124,`code`,7),bT(125,`
@Controller({
  path: 'cats',
  scope: Scope.REQUEST,
})
export class CatsController {}
`),cf()()(),Aa(126,`h4`,13)(127,`span`),bT(128,`Scope hierarchy`),cf()(),Aa(129,`p`),bT(130,`The `),Aa(131,`code`),bT(132,`REQUEST`),cf(),bT(133,` scope bubbles up the injection chain. A controller that depends on a request-scoped provider is itself request-scoped.`),cf(),Aa(134,`p`),bT(135,`Consider the following dependency graph: `),Aa(136,`code`),bT(137,`CatsController <- CatsService <- CatsRepository`),cf(),bT(138,`. If `),Aa(139,`code`),bT(140,`CatsService`),cf(),bT(141,` is request-scoped (and the others are default singletons), `),Aa(142,`code`),bT(143,`CatsController`),cf(),bT(144,` becomes request-scoped, because it depends on the injected service. `),Aa(145,`code`),bT(146,`CatsRepository`),cf(),bT(147,`, which doesn't depend on `),Aa(148,`code`),bT(149,`CatsService`),cf(),bT(150,`, remains singleton-scoped.`),cf(),Aa(151,`p`),bT(152,`Transient-scoped dependencies don't follow that pattern. If a singleton-scoped `),Aa(153,`code`),bT(154,`DogsService`),cf(),bT(155,` injects a transient `),Aa(156,`code`),bT(157,`LoggerService`),cf(),bT(158,` provider, it receives a fresh instance of it. However, `),Aa(159,`code`),bT(160,`DogsService`),cf(),bT(161,` stays singleton-scoped, so injecting it anywhere does `),Aa(162,`em`),bT(163,`not`),cf(),bT(164,` resolve to a new instance of `),Aa(165,`code`),bT(166,`DogsService`),cf(),bT(167,`. If you want that behavior, explicitly mark `),Aa(168,`code`),bT(169,`DogsService`),cf(),bT(170,` as `),Aa(171,`code`),bT(172,`TRANSIENT`),cf(),bT(173,` as well.`),cf(),Aa(174,`p`),Wa(175,`app-banner-courses`),cf(),Aa(176,`h4`,14)(177,`span`),bT(178,`Request provider`),cf()(),Aa(179,`p`),bT(180,`In an HTTP server-based application (e.g., using `),Aa(181,`code`),bT(182,`@nestjs/platform-express`),cf(),bT(183,` or `),Aa(184,`code`),bT(185,`@nestjs/platform-fastify`),cf(),bT(186,`), you may want to access a reference to the original request object when using request-scoped providers. To do so, inject the `),Aa(187,`code`),bT(188,`REQUEST`),cf(),bT(189,` object.`),cf(),Aa(190,`p`),bT(191,`The `),Aa(192,`code`),bT(193,`REQUEST`),cf(),bT(194,` provider is inherently request-scoped, so you don't need to specify the `),Aa(195,`code`),bT(196,`REQUEST`),cf(),bT(197,` scope explicitly when using it (if you do, it is disregarded). Any provider that relies on a request-scoped provider automatically adopts request scope, and this behavior cannot be changed.`),cf(),Aa(198,`app-copy-button`)(199,`pre`)(200,`code`,7),bT(201,`
import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class CatsService {
  constructor(@Inject(REQUEST) private request: Request) {}
}
`),cf()()(),Aa(202,`p`),bT(203,`Because of underlying platform and protocol differences, you access the inbound request slightly differently in microservice or GraphQL applications. In `),Aa(204,`a`,15),bT(205,`GraphQL`),cf(),bT(206,` applications, inject `),Aa(207,`code`),bT(208,`CONTEXT`),cf(),bT(209,` instead of `),Aa(210,`code`),bT(211,`REQUEST`),cf(),bT(212,`:`),cf(),Aa(213,`app-copy-button`)(214,`pre`)(215,`code`,7),bT(216,`
import { Injectable, Scope, Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';

@Injectable({ scope: Scope.REQUEST })
export class CatsService {
  constructor(@Inject(CONTEXT) private context) {}
}
`),cf()()(),Aa(217,`p`),bT(218,`Then configure your `),Aa(219,`code`),bT(220,`context`),cf(),bT(221,` value (in the `),Aa(222,`code`),bT(223,`GraphQLModule`),cf(),bT(224,`) to contain `),Aa(225,`code`),bT(226,`request`),cf(),bT(227,` as a property.`),cf(),Aa(228,`h4`,16)(229,`span`),bT(230,`Inquirer provider`),cf()(),Aa(231,`p`),bT(232,`To get the class in which a provider was constructed, e.g., in logging or metrics providers, inject the `),Aa(233,`code`),bT(234,`INQUIRER`),cf(),bT(235,` token:`),cf(),Aa(236,`app-copy-button`)(237,`pre`)(238,`code`,7),bT(239,`
import { Inject, Injectable, Scope } from '@nestjs/common';
import { INQUIRER } from '@nestjs/core';

@Injectable({ scope: Scope.TRANSIENT })
export class HelloService {
  constructor(@Inject(INQUIRER) private parentClass: object) {}

  sayHello(message: string) {
    console.log(\`\${this.parentClass?.constructor?.name}: \${message}\`);
  }
}
`),cf()()(),Aa(240,`p`),bT(241,`Then use it as follows:`),cf(),Aa(242,`app-copy-button`)(243,`pre`)(244,`code`,7),bT(245,`
import { Injectable } from '@nestjs/common';
import { HelloService } from './hello.service.js';

@Injectable()
export class AppService {
  constructor(private helloService: HelloService) {}

  getRoot(): string {
    this.helloService.sayHello('My name is getRoot');

    return 'Hello world!';
  }
}
`),cf()()(),Aa(246,`p`),bT(247,`In the example above, when `),Aa(248,`code`),bT(249,`AppService#getRoot`),cf(),bT(250,` is called, `),Aa(251,`code`),bT(252,`"AppService: My name is getRoot"`),cf(),bT(253,` is logged to the console.`),cf(),Aa(254,`h4`,17)(255,`span`),bT(256,`Performance`),cf()(),Aa(257,`p`),bT(258,`Request-scoped providers affect application performance. Although Nest caches as much metadata as possible, it still has to create an instance of your class on each request, which slows down your average response time and overall benchmark results. Unless a provider must be request-scoped, we strongly recommend using the default singleton scope.`),cf(),Aa(259,`blockquote`,5)(260,`strong`),bT(261,`Hint`),cf(),bT(262,` A properly designed application that uses request-scoped providers should not see latency increase by more than ~5%.
`),cf(),Aa(263,`p`),bT(264,`Many providers are request-scoped only to read a value that belongs to the current request: the authenticated user, the tenant, or a locale. For that, a per-request store based on `),Aa(265,`code`),bT(266,`AsyncLocalStorage`),cf(),bT(267,` keeps every provider a singleton and works the same way in HTTP handlers, microservice message handlers, and queue jobs. If your application uses `),Aa(268,`a`,18),bT(269,`NestJS Observe`),cf(),bT(270,`, it already keeps such a store for every request, message, and job it instruments: write to it with `),Aa(271,`code`),bT(272,`TracerService.setAttribute()`),cf(),bT(273,` and read from anywhere downstream with `),Aa(274,`code`),bT(275,`getAttribute()`),cf(),bT(276,`, with no scope changes and no store of your own to maintain. See `),Aa(277,`a`,19),bT(278,`Async local storage`),cf(),bT(279,` for details and the alternatives.`),cf(),Aa(280,`h4`,20)(281,`span`),bT(282,`Durable providers`),cf()(),Aa(283,`p`),bT(284,`As mentioned in the previous section, request-scoped providers may increase latency, because having at least one request-scoped provider (injected into the controller instance, or deeper, into one of its providers) makes the controller request-scoped as well. The controller must then be recreated (instantiated) for each individual request and garbage-collected afterward. For, say, 30k requests in parallel, there are 30k ephemeral instances of the controller (and its request-scoped providers).`),cf(),Aa(285,`p`),bT(286,`If a common provider that most providers depend on (think of a database connection or a logger service) is request-scoped, all of those providers automatically become request-scoped as well. This can pose a challenge in `),Aa(287,`strong`),bT(288,`multi-tenant applications`),cf(),bT(289,`, especially those with a central request-scoped "data source" provider that reads headers or a token from the request object and, based on their values, retrieves the corresponding database connection or schema for that tenant.`),cf(),Aa(290,`p`),bT(291,`For instance, suppose your application is used by 10 different customers. Each customer has its `),Aa(292,`strong`),bT(293,`own dedicated data source`),cf(),bT(294,`, and you want to make sure customer A can never reach customer B's database. One way to achieve this is to declare a request-scoped "data source" provider that determines the "current customer" from the request object and retrieves the corresponding database. This approach turns your application into a multi-tenant application in a few minutes. Its major downside is that a large part of your application's components likely rely on the "data source" provider, so they implicitly become request-scoped, which degrades your application's performance.`),cf(),Aa(295,`p`),bT(296,`With only 10 customers, you could instead have 10 individual `),Aa(297,`a`,21),bT(298,`DI sub-trees`),cf(),bT(299,`, one per customer, rather than recreating each tree per request. If your providers don't rely on any property that's truly unique to each request (e.g., a request UUID), but on specific attributes that let you aggregate (classify) requests, there's no reason to `),Aa(300,`em`),bT(301,`recreate the DI sub-tree`),cf(),bT(302,` on every incoming request.`),cf(),Aa(303,`p`),bT(304,`This is where `),Aa(305,`strong`),bT(306,`durable providers`),cf(),bT(307,` come in.`),cf(),Aa(308,`p`),bT(309,`Before flagging providers as durable, you must register a `),Aa(310,`strong`),bT(311,`strategy`),cf(),bT(312,` that tells Nest what those "common request attributes" are, and provides the logic that groups requests, i.e., associates them with their corresponding DI sub-trees.`),cf(),Aa(313,`app-copy-button`)(314,`pre`)(315,`code`,7),bT(316,`
import {
  HostComponentInfo,
  ContextId,
  ContextIdFactory,
  ContextIdStrategy,
} from '@nestjs/core';
import type { Request } from 'express';

const tenants = new Map<string, ContextId>();

export class AggregateByTenantContextIdStrategy implements ContextIdStrategy {
  attach(contextId: ContextId, request: Request) {
    const tenantId = request.headers['x-tenant-id'] as string;
    let tenantSubTreeId: ContextId;

    if (tenants.has(tenantId)) {
      tenantSubTreeId = tenants.get(tenantId);
    } else {
      tenantSubTreeId = ContextIdFactory.create();
      tenants.set(tenantId, tenantSubTreeId);
    }

    // If tree is not durable, return the original "contextId" object
    return (info: HostComponentInfo) =>
      info.isTreeDurable ? tenantSubTreeId : contextId;
  }
}
`),cf()()(),Aa(317,`blockquote`,5)(318,`strong`),bT(319,`Hint`),cf(),bT(320,` Like request scope, durability bubbles up the injection chain. If A depends on B, which is flagged as `),Aa(321,`code`),bT(322,`durable`),cf(),bT(323,`, A implicitly becomes durable too, provided that all of A's other request-scoped dependencies are durable as well (and unless A is explicitly declared with `),Aa(324,`code`),bT(325,`Scope.REQUEST`),cf(),bT(326,` and `),Aa(327,`code`),bT(328,`durable: false`),cf(),bT(329,`).
`),cf(),Aa(330,`blockquote`,10)(331,`strong`),bT(332,`Warning`),cf(),bT(333,` This strategy is not ideal for applications with a large number of tenants.
`),cf(),Aa(334,`p`),bT(335,`The value returned from the `),Aa(336,`code`),bT(337,`attach`),cf(),bT(338,` method tells Nest which context identifier to use for a given host. In this case, we specify that `),Aa(339,`code`),bT(340,`tenantSubTreeId`),cf(),bT(341,` should be used instead of the original, auto-generated `),Aa(342,`code`),bT(343,`contextId`),cf(),bT(344,` object when the host component (e.g., a request-scoped controller) is flagged as durable (you'll learn how to mark providers as durable below). Also, in the example above, `),Aa(345,`strong`),bT(346,`no payload`),cf(),bT(347,` is registered (the payload being the `),Aa(348,`code`),bT(349,`REQUEST`),cf(),bT(350,`/`),Aa(351,`code`),bT(352,`CONTEXT`),cf(),bT(353,` provider that represents the "root", i.e., the parent of the sub-tree).`),cf(),Aa(354,`p`),bT(355,`To register the payload for a durable tree, use the following construction instead:`),cf(),Aa(356,`app-copy-button`)(357,`pre`)(358,`code`,7),bT(359,`
// The return of \`AggregateByTenantContextIdStrategy#attach\` method:
return {
  resolve: (info: HostComponentInfo) =>
    info.isTreeDurable ? tenantSubTreeId : contextId,
  payload: { tenantId },
};
`),cf()()(),Aa(360,`p`),bT(361,`Now, whenever you inject the `),Aa(362,`code`),bT(363,`REQUEST`),cf(),bT(364,` provider (or `),Aa(365,`code`),bT(366,`CONTEXT`),cf(),bT(367,` for GraphQL applications) with `),Aa(368,`code`),bT(369,`@Inject(REQUEST)`),cf(),bT(370,`/`),Aa(371,`code`),bT(372,`@Inject(CONTEXT)`),cf(),bT(373,`, the `),Aa(374,`code`),bT(375,`payload`),cf(),bT(376,` object is injected (consisting of a single property, `),Aa(377,`code`),bT(378,`tenantId`),cf(),bT(379,`, in this case).`),cf(),Aa(380,`p`),bT(381,`With this strategy in place, register it anywhere in your code (it applies globally), e.g., in the `),Aa(382,`code`),bT(383,`main.ts`),cf(),bT(384,` file:`),cf(),Aa(385,`app-copy-button`)(386,`pre`)(387,`code`,7),bT(388,`
ContextIdFactory.apply(new AggregateByTenantContextIdStrategy());
`),cf()()(),Aa(389,`blockquote`,5)(390,`strong`),bT(391,`Hint`),cf(),bT(392,` The `),Aa(393,`code`),bT(394,`ContextIdFactory`),cf(),bT(395,` class is imported from the `),Aa(396,`code`),bT(397,`@nestjs/core`),cf(),bT(398,` package.
`),cf(),Aa(399,`p`),bT(400,`As long as the registration occurs before any request hits your application, everything works as intended.`),cf(),Aa(401,`p`),bT(402,`Finally, to turn a regular provider into a durable provider, set the `),Aa(403,`code`),bT(404,`durable`),cf(),bT(405,` flag to `),Aa(406,`code`),bT(407,`true`),cf(),bT(408,` and change its scope to `),Aa(409,`code`),bT(410,`Scope.REQUEST`),cf(),bT(411,`. Nest reads the `),Aa(412,`code`),bT(413,`durable`),cf(),bT(414,` flag only on providers explicitly declared with `),Aa(415,`code`),bT(416,`Scope.REQUEST`),cf(),bT(417,`; a provider that is request-scoped only implicitly (through its dependencies) derives its durability from those dependencies, as described in the hint above.`),cf(),Aa(418,`app-copy-button`)(419,`pre`)(420,`code`,7),bT(421,`
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST, durable: true })
export class CatsService {}
`),cf()()(),Aa(422,`p`),bT(423,`Similarly, for `),Aa(424,`a`,8),bT(425,`custom providers`),cf(),bT(426,`, set the `),Aa(427,`code`),bT(428,`durable`),cf(),bT(429,` property in the long-hand form of the provider registration:`),cf(),Aa(430,`app-copy-button`)(431,`pre`)(432,`code`,7),bT(433,`
{
  provide: 'foobar',
  useFactory: () => { ... },
  scope: Scope.REQUEST,
  durable: true,
}
`),cf()()()(),Aa(434,`a`,22),Wa(435,`i`,23),Aa(436,`span`),bT(437,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln,Jc,l],encapsulation:2})}return a})();var Y=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-unit-testing`]],features:[xy],decls:613,vars:24,consts:[[`contentReference`,``],[`appee0b63f37f8822fae23fc67ec58794cc52f42b22`,``],[`appbbe3cc22f06ac3c2542a267188593ccc24e2a08d`,``],[`app413d5c10ae7e23468ff9be68e860fc7ca021d3fa`,``],[1,`content`],[1,`content-inner`],[`id`,`testing`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://vitest.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/visionmedia/supertest`],[1,`info`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`unit-testing`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`testing-utilities`],[`routerLink`,`/fundamentals/module-ref`],[1,`warning`],[`routerLink`,`/fundamentals/custom-providers`],[`href`,`/fundamentals/testing#end-to-end-testing`],[`appAnchor`,``,`id`,`auto-mocking`],[`appAnchor`,``,`id`,`end-to-end-testing`],[`href`,`/http/performance#node-adapter`],[1,`language-ts`],[`href`,`/http/performance#fastify-adapter`],[`routerLink`,`/fundamentals/dynamic-modules`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Fluent_interface`],[`href`,`/fundamentals/module-ref`],[`appAnchor`,``,`id`,`overriding-globally-registered-enhancers`],[`appAnchor`,``,`id`,`testing-request-scoped-instances`],[`routerLink`,`/fundamentals/injection-scopes`],[`href`,`/fundamentals/module-ref#resolving-scoped-providers`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/unit-testing.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){if(d&1&&(Aa(0,`div`,4,0)(2,`div`,5)(3,`h3`,6),bT(4,`Testing`),cf(),Aa(5,`p`),bT(6,`Automated testing is an essential part of any serious software development effort. Automation makes it easy to repeat individual tests or test suites quickly during development, which helps ensure that releases meet quality and performance goals. It increases coverage, gives developers a faster feedback loop, and ensures that tests run at critical points in the development lifecycle, such as source control check-in, feature integration, and version release.`),cf(),Aa(7,`p`),bT(8,`These tests span a variety of types, including unit tests, end-to-end (e2e) tests, and integration tests. While the benefits are clear, setting them up can be tedious. Nest promotes development best practices, including effective testing, and includes the following features to help developers and teams build and automate tests. Nest:`),cf(),Aa(9,`ul`)(10,`li`),bT(11,`automatically scaffolds default unit tests for components and e2e tests for applications`),cf(),Aa(12,`li`),bT(13,`provides default tooling (such as a test runner that builds an isolated module/application loader)`),cf(),Aa(14,`li`),bT(15,`provides integration with `),Aa(16,`a`,7),bT(17,`Vitest`),cf(),bT(18,` and `),Aa(19,`a`,8),bT(20,`Supertest`),cf(),bT(21,` while remaining agnostic to testing tools`),cf(),Aa(22,`li`),bT(23,`makes the Nest dependency injection system available in the testing environment, so you can mock components without extra setup`),cf()(),Aa(24,`p`),bT(25,`You can use any `),Aa(26,`strong`),bT(27,`testing framework`),cf(),bT(28,` you like, because Nest doesn't force any specific tooling. Replace the elements you need (such as the test runner), and you still benefit from Nest's ready-made testing facilities.`),cf(),Aa(29,`blockquote`,9)(30,`strong`),bT(31,`Hint`),cf(),bT(32,` Newly generated projects use Vitest by default. The testing APIs exposed by Nest don't depend on a specific runner, so the same patterns work with other tools as well.
`),cf(),Aa(33,`h4`,10)(34,`span`),bT(35,`Installation`),cf()(),Aa(36,`p`),bT(37,`To get started, install the required package:`),cf(),Aa(38,`pre`)(39,`code`,11),bT(40,`
$ npm i --save-dev @nestjs/testing
`),cf()(),Aa(41,`h4`,12)(42,`span`),bT(43,`Unit testing`),cf()(),Aa(44,`p`),bT(45,`The following example tests two classes, `),Aa(46,`code`),bT(47,`CatsController`),cf(),bT(48,` and `),Aa(49,`code`),bT(50,`CatsService`),cf(),bT(51,`, with `),Aa(52,`a`,7),bT(53,`Vitest`),cf(),bT(54,`. Vitest serves as the test runner and also provides assertion functions and test-double utilities for mocking, spying, and stubbing. This basic test instantiates the classes manually and checks that the controller and service fulfill their API contract.`),cf(),Aa(55,`app-copy-button`,13)(56,`span`,14),bT(57),LT(58,`extension`),Wa(59,`app-tabs`,null,1),cf(),Aa(61,`pre`)(62,`code`,15),bT(63,`
import { vi } from 'vitest';
import { CatsController } from './cats.controller.js';
import { CatsService } from './cats.service.js';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      vi.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
`),cf()(),Aa(64,`pre`)(65,`code`,15),bT(66,`
import { vi } from 'vitest';
import { CatsController } from './cats.controller.js';
import { CatsService } from './cats.service.js';

describe('CatsController', () => {
  let catsController;
  let catsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      vi.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
`),cf()()(),Aa(67,`blockquote`,9)(68,`strong`),bT(69,`Hint`),cf(),bT(70,` Keep your test files near the classes they test. Test files should have a `),Aa(71,`code`),bT(72,`.spec`),cf(),bT(73,` or `),Aa(74,`code`),bT(75,`.test`),cf(),bT(76,` suffix.
`),cf(),Aa(77,`p`),bT(78,`Because the sample above is trivial, it doesn't test anything Nest-specific. It doesn't even use dependency injection (it passes an instance of `),Aa(79,`code`),bT(80,`CatsService`),cf(),bT(81,` to `),Aa(82,`code`),bT(83,`catsController`),cf(),bT(84,` directly). This form of testing, where you manually instantiate the classes being tested, is often called `),Aa(85,`strong`),bT(86,`isolated testing`),cf(),bT(87,`, because it is independent of the framework. The following sections introduce more advanced capabilities that help you test applications that make more extensive use of Nest features.`),cf(),Aa(88,`h4`,16)(89,`span`),bT(90,`Testing utilities`),cf()(),Aa(91,`p`),bT(92,`The `),Aa(93,`code`),bT(94,`@nestjs/testing`),cf(),bT(95,` package provides a set of utilities for a more robust testing process. Let's rewrite the previous example using the built-in `),Aa(96,`code`),bT(97,`Test`),cf(),bT(98,` class:`),cf(),Aa(99,`app-copy-button`,13)(100,`span`,14),bT(101),LT(102,`extension`),Wa(103,`app-tabs`,null,2),cf(),Aa(105,`pre`)(106,`code`,15),bT(107,`
import { vi } from 'vitest';
import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller.js';
import { CatsService } from './cats.service.js';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [CatsController],
        providers: [CatsService],
      }).compile();

    catsService = moduleRef.get(CatsService);
    catsController = moduleRef.get(CatsController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      vi.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
`),cf()(),Aa(108,`pre`)(109,`code`,15),bT(110,`
import { vi } from 'vitest';
import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller.js';
import { CatsService } from './cats.service.js';

describe('CatsController', () => {
  let catsController;
  let catsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [CatsController],
        providers: [CatsService],
      }).compile();

    catsService = moduleRef.get(CatsService);
    catsController = moduleRef.get(CatsController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      vi.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
`),cf()()(),Aa(111,`p`),bT(112,`The `),Aa(113,`code`),bT(114,`Test`),cf(),bT(115,` class provides an application execution context that essentially mocks the full Nest runtime, but gives you hooks for managing class instances, including mocking and overriding. Its `),Aa(116,`code`),bT(117,`createTestingModule()`),cf(),bT(118,` method takes a module metadata object as its argument (the same object you pass to the `),Aa(119,`code`),bT(120,`@Module()`),cf(),bT(121,` decorator) and returns a `),Aa(122,`code`),bT(123,`TestingModuleBuilder`),cf(),bT(124,` instance, which in turn provides a few methods. For unit tests, the important one is `),Aa(125,`code`),bT(126,`compile()`),cf(),bT(127,`. It bootstraps a module with its dependencies (similar to the way an application is bootstrapped in the conventional `),Aa(128,`code`),bT(129,`main.ts`),cf(),bT(130,` file using `),Aa(131,`code`),bT(132,`NestFactory.create()`),cf(),bT(133,`), and returns a `),Aa(134,`code`),bT(135,`TestingModule`),cf(),bT(136,` that is ready for testing.`),cf(),Aa(137,`blockquote`,9)(138,`strong`),bT(139,`Hint`),cf(),bT(140,` The `),Aa(141,`code`),bT(142,`compile()`),cf(),bT(143,` method is `),Aa(144,`strong`),bT(145,`asynchronous`),cf(),bT(146,`, so you have to await it. Once the module is compiled, you can retrieve any `),Aa(147,`strong`),bT(148,`static`),cf(),bT(149,` instance it declares (controllers and providers) using the `),Aa(150,`code`),bT(151,`get()`),cf(),bT(152,` method.
`),cf(),Aa(153,`p`)(154,`code`),bT(155,`TestingModule`),cf(),bT(156,` exposes the same instance-resolution API as the `),Aa(157,`a`,17),bT(158,`module reference`),cf(),bT(159,` class, including the ability to dynamically resolve scoped providers (transient or request-scoped). Use the `),Aa(160,`code`),bT(161,`resolve()`),cf(),bT(162,` method for this (the `),Aa(163,`code`),bT(164,`get()`),cf(),bT(165,` method can only retrieve static instances).`),cf(),Aa(166,`app-copy-button`)(167,`pre`)(168,`code`,15),bT(169,`
const moduleRef = await Test.createTestingModule({
  controllers: [CatsController],
  providers: [CatsService],
}).compile();

catsService = await moduleRef.resolve(CatsService);
`),cf()()(),Aa(170,`blockquote`,18)(171,`strong`),bT(172,`Warning`),cf(),bT(173,` The `),Aa(174,`code`),bT(175,`resolve()`),cf(),bT(176,` method returns a unique instance of the provider from its own `),Aa(177,`strong`),bT(178,`DI container sub-tree`),cf(),bT(179,`. Each sub-tree has a unique context identifier. If you call this method more than once and compare the instance references, you'll see that they are not equal.
`),cf(),Aa(180,`blockquote`,9)(181,`strong`),bT(182,`Hint`),cf(),bT(183,` Learn more about its features in the `),Aa(184,`a`,17),bT(185,`module reference`),cf(),bT(186,` chapter.
`),cf(),Aa(187,`p`),bT(188,`Instead of using the production version of a provider, you can override it with a `),Aa(189,`a`,19),bT(190,`custom provider`),cf(),bT(191,` for testing purposes. For example, you can mock a database service instead of connecting to a live database. Overrides are covered in the `),Aa(192,`a`,20),bT(193,`end-to-end testing`),cf(),bT(194,` section, but they're available for unit tests as well.`),cf(),Aa(195,`p`),Wa(196,`app-banner-courses`),cf(),Aa(197,`h4`,21)(198,`span`),bT(199,`Auto mocking`),cf()(),Aa(200,`p`),bT(201,`Nest also lets you define a mock factory to apply to all of your missing dependencies. This is useful when a class has a large number of dependencies and mocking all of them would take a lot of time and setup. To use this feature, chain the `),Aa(202,`code`),bT(203,`useMocker()`),cf(),bT(204,` method onto `),Aa(205,`code`),bT(206,`createTestingModule()`),cf(),bT(207,`, passing a factory for your dependency mocks. The factory receives an optional token (any token that is valid for a Nest provider) and returns a mock implementation. The example below creates a specific mock for `),Aa(208,`code`),bT(209,`CatsService`),cf(),bT(210,` using `),Aa(211,`code`),bT(212,`vi.fn()`),cf(),bT(213,`.`),cf(),Aa(214,`app-copy-button`)(215,`pre`)(216,`code`,15),bT(217,`
import { vi } from 'vitest';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
    })
      .useMocker((token) => {
        const results = ['test1', 'test2'];
        if (token === CatsService) {
          return { findAll: vi.fn().mockResolvedValue(results) };
        }
      })
      .compile();

    controller = moduleRef.get(CatsController);
  });
});
`),cf()()(),Aa(218,`p`),bT(219,`You can retrieve these mocks from the testing container as you would custom providers, e.g., `),Aa(220,`code`),bT(221,`moduleRef.get(CatsService)`),cf(),bT(222,`.`),cf(),Aa(223,`blockquote`,9)(224,`strong`),bT(225,`Hint`),cf(),bT(226,` You can also pass a reusable mock factory helper directly to `),Aa(227,`code`),bT(228,`useMocker()`),cf(),bT(229,` when you want to share test doubles across suites.
`),cf(),Aa(230,`blockquote`,9)(231,`strong`),bT(232,`Hint`),cf(),Aa(233,`code`),bT(234,`REQUEST`),cf(),bT(235,` and `),Aa(236,`code`),bT(237,`INQUIRER`),cf(),bT(238,` providers cannot be auto-mocked, because they're already predefined in the context. However, you can `),Aa(239,`em`),bT(240,`overwrite`),cf(),bT(241,` them using the custom provider syntax or the `),Aa(242,`code`),bT(243,`overrideProvider()`),cf(),bT(244,` method.
`),cf(),Aa(245,`h4`,22)(246,`span`),bT(247,`End-to-end testing`),cf()(),Aa(248,`p`),bT(249,`Unlike unit testing, which focuses on individual modules and classes, end-to-end (e2e) testing covers the interaction of classes and modules at a more aggregate level, closer to the kind of interaction that end users have with the production system. As an application grows, it becomes hard to manually test the end-to-end behavior of each API endpoint. Automated end-to-end tests help ensure that the overall behavior of the system is correct and meets project requirements. E2e tests use a configuration similar to the one covered in `),Aa(250,`strong`),bT(251,`unit testing`),cf(),bT(252,`. In addition, Nest makes it easy to use the `),Aa(253,`a`,8),bT(254,`Supertest`),cf(),bT(255,` library to simulate HTTP requests.`),cf(),Aa(256,`app-copy-button`,13)(257,`span`,14),bT(258),LT(259,`extension`),Wa(260,`app-tabs`,null,3),cf(),Aa(262,`pre`)(263,`code`,15),bT(264,`
import request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModule } from '../../src/cats/cats.module.js';
import { CatsService } from '../../src/cats/cats.service.js';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  let catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(\`/GET cats\`, () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect({
        data: catsService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
`),cf()(),Aa(265,`pre`)(266,`code`,15),bT(267,`
import request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModule } from '../../src/cats/cats.module.js';
import { CatsService } from '../../src/cats/cats.service.js';

describe('Cats', () => {
  let app;
  let catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(\`/GET cats\`, () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect({
        data: catsService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
`),cf()()(),Aa(268,`blockquote`,9)(269,`strong`),bT(270,`Hint`),cf(),bT(271,` If your application runs on the `),Aa(272,`a`,23),bT(273,`Node adapter`),cf(),bT(274,`, pass a `),Aa(275,`code`),bT(276,`NodeAdapter`),cf(),bT(277,` instance to `),Aa(278,`code`),bT(279,`createNestApplication()`),cf(),bT(280,` as well. Without an adapter, the testing module creates an Express application, so the tests don't run on the adapter your application uses, and they fail if the `),Aa(281,`code`),bT(282,`@nestjs/platform-express`),cf(),bT(283,` package is not installed:
`),Aa(284,`app-copy-button`)(285,`pre`)(286,`code`,24),bT(287,`
app = moduleRef.createNestApplication<NestNodeApplication>(new NodeAdapter());
`),cf()()(),Aa(288,`p`),bT(289,`The Node adapter has the same `),Aa(290,`code`),bT(291,`app.inject()`),cf(),bT(292,` method as the Fastify adapter shown below, so the tests can send requests without a listening server.`),cf()(),Aa(293,`blockquote`,9)(294,`strong`),bT(295,`Hint`),cf(),bT(296,` If you use `),Aa(297,`a`,25),bT(298,`Fastify`),cf(),bT(299,` as your HTTP adapter, it requires a slightly different configuration and has built-in testing capabilities:
`),Aa(300,`app-copy-button`)(301,`pre`)(302,`code`,24),bT(303,`
let app: NestFastifyApplication;

beforeAll(async () => {
  app = moduleRef.createNestApplication<NestFastifyApplication>(
    new FastifyAdapter(),
  );

  await app.init();
  await app.getHttpAdapter().getInstance().ready();
});

it(\`/GET cats\`, () => {
  return app
    .inject({
      method: 'GET',
      url: '/cats',
    })
    .then((result) => {
      expect(result.statusCode).toEqual(200);
      expect(result.payload).toEqual(/* expectedPayload */);
    });
});

afterAll(async () => {
  await app.close();
});
`),cf()()()(),Aa(304,`p`),bT(305,`This example builds on the concepts described earlier. In addition to the `),Aa(306,`code`),bT(307,`compile()`),cf(),bT(308,` method, it uses the `),Aa(309,`code`),bT(310,`createNestApplication()`),cf(),bT(311,` method to instantiate a full Nest runtime environment.`),cf(),Aa(312,`p`),bT(313,`One caveat: when your application is compiled with the `),Aa(314,`code`),bT(315,`compile()`),cf(),bT(316,` method, `),Aa(317,`code`),bT(318,`HttpAdapterHost#httpAdapter`),cf(),bT(319,` is still undefined, because no HTTP adapter or server has been created during the compilation phase. If your test requires the `),Aa(320,`code`),bT(321,`httpAdapter`),cf(),bT(322,`, use the `),Aa(323,`code`),bT(324,`createNestApplication()`),cf(),bT(325,` method to create the application instance, or refactor your project to avoid this dependency while the dependency graph is initialized.`),cf(),Aa(326,`p`),bT(327,`Let's break down the example.`),cf(),Aa(328,`p`),bT(329,`The test saves a reference to the running app in the `),Aa(330,`code`),bT(331,`app`),cf(),bT(332,` variable, so it can use it to simulate HTTP requests.`),cf(),Aa(333,`p`),bT(334,`HTTP requests are simulated with the `),Aa(335,`code`),bT(336,`request()`),cf(),bT(337,` function from Supertest. To route these requests to the running Nest app, the test passes `),Aa(338,`code`),bT(339,`request()`),cf(),bT(340,` a reference to the HTTP listener that underlies Nest (which, in turn, may be provided by the Express platform). Hence the construction `),Aa(341,`code`),bT(342,`request(app.getHttpServer())`),cf(),bT(343,`. The call to `),Aa(344,`code`),bT(345,`request()`),cf(),bT(346,` returns a wrapped HTTP server, connected to the Nest app, which exposes methods to simulate an actual HTTP request. For example, `),Aa(347,`code`),bT(348,`request(...).get('/cats')`),cf(),bT(349,` initiates a request to the Nest app that is identical to an `),Aa(350,`strong`),bT(351,`actual`),cf(),Aa(352,`code`),bT(353,`GET /cats`),cf(),bT(354,` HTTP request coming in over the network.`),cf(),Aa(355,`p`),bT(356,`The example also provides an alternate (test-double) implementation of `),Aa(357,`code`),bT(358,`CatsService`),cf(),bT(359,` that returns a hard-coded value the test can check for. Use `),Aa(360,`code`),bT(361,`overrideProvider()`),cf(),bT(362,` to provide such an alternate implementation. Similarly, Nest provides the `),Aa(363,`code`),bT(364,`overrideModule()`),cf(),bT(365,`, `),Aa(366,`code`),bT(367,`overrideGuard()`),cf(),bT(368,`, `),Aa(369,`code`),bT(370,`overrideInterceptor()`),cf(),bT(371,`, `),Aa(372,`code`),bT(373,`overrideFilter()`),cf(),bT(374,`, and `),Aa(375,`code`),bT(376,`overridePipe()`),cf(),bT(377,` methods to override modules, guards, interceptors, filters, and pipes, respectively.`),cf(),Aa(378,`p`),bT(379,`Each of the override methods (except `),Aa(380,`code`),bT(381,`overrideModule()`),cf(),bT(382,`) returns an object with three methods that mirror those described for `),Aa(383,`a`,19),bT(384,`custom providers`),cf(),bT(385,`:`),cf(),Aa(386,`ul`)(387,`li`)(388,`code`),bT(389,`useClass`),cf(),bT(390,`: you supply a class that is instantiated to provide the instance that overrides the object (provider, guard, etc.).`),cf(),Aa(391,`li`)(392,`code`),bT(393,`useValue`),cf(),bT(394,`: you supply an instance that overrides the object.`),cf(),Aa(395,`li`)(396,`code`),bT(397,`useFactory`),cf(),bT(398,`: you supply an object with a `),Aa(399,`code`),bT(400,`factory`),cf(),bT(401,` function that returns an instance that overrides the object, and an optional `),Aa(402,`code`),bT(403,`inject`),cf(),bT(404,` array listing the providers to pass to that function.`),cf()(),Aa(405,`p`)(406,`code`),bT(407,`overrideModule()`),cf(),bT(408,`, on the other hand, returns an object with the `),Aa(409,`code`),bT(410,`useModule()`),cf(),bT(411,` method, which you use to supply a module that overrides the original module:`),cf(),Aa(412,`app-copy-button`)(413,`pre`)(414,`code`,15),bT(415,`
const moduleRef = await Test.createTestingModule({
  imports: [AppModule],
})
  .overrideModule(CatsModule)
  .useModule(AlternateCatsModule)
  .compile();
`),cf()()(),Aa(416,`p`),bT(417,`Modules are matched by `),Aa(418,`strong`),bT(419,`reference`),cf(),bT(420,`, so when overriding a `),Aa(421,`a`,26),bT(422,`dynamic module`),cf(),bT(423,`, pass `),Aa(424,`code`),bT(425,`overrideModule()`),cf(),bT(426,` the same object that represents the registered dynamic module in the application. Calling the module's factory method again produces a different object, and the override silently has no effect:`),cf(),Aa(427,`app-copy-button`)(428,`pre`)(429,`code`,15),bT(430,`
export const dynamicCatsModule = CatsModule.register({ folder: './cats' });

@Module({
  imports: [dynamicCatsModule],
})
export class AppModule {}
`),cf()()(),Aa(431,`app-copy-button`)(432,`pre`)(433,`code`,15),bT(434,`
const moduleRef = await Test.createTestingModule({
  imports: [AppModule],
})
  .overrideModule(dynamicCatsModule)
  .useModule(AlternateCatsModule)
  .compile();
`),cf()()(),Aa(435,`p`),bT(436,`Each of these methods, in turn, returns the `),Aa(437,`code`),bT(438,`TestingModuleBuilder`),cf(),bT(439,` instance, so you can chain them with other methods in the `),Aa(440,`a`,27),bT(441,`fluent style`),cf(),bT(442,`. Call `),Aa(443,`code`),bT(444,`compile()`),cf(),bT(445,` at the end of the chain to make Nest instantiate and initialize the module.`),cf(),Aa(446,`p`),bT(447,`You may also want to provide a custom logger when the tests run (for example, on a CI server). Use the `),Aa(448,`code`),bT(449,`setLogger()`),cf(),bT(450,` method and pass an object that fulfills the `),Aa(451,`code`),bT(452,`LoggerService`),cf(),bT(453,` interface to tell the `),Aa(454,`code`),bT(455,`TestingModuleBuilder`),cf(),bT(456,` how to log during tests (by default, only "error" logs are written to the console).`),cf(),Aa(457,`p`),bT(458,`The compiled module has several useful methods, as described in the following table:`),cf(),Aa(459,`table`)(460,`tr`)(461,`td`)(462,`code`),bT(463,`createNestApplication()`),cf()(),Aa(464,`td`),bT(465,` Creates and returns a Nest application (`),Aa(466,`code`),bT(467,`INestApplication`),cf(),bT(468,` instance) based on the given module. Note that you must manually initialize the application using the `),Aa(469,`code`),bT(470,`init()`),cf(),bT(471,` method. `),cf()(),Aa(472,`tr`)(473,`td`)(474,`code`),bT(475,`createNestMicroservice()`),cf()(),Aa(476,`td`),bT(477,` Creates and returns a Nest microservice (`),Aa(478,`code`),bT(479,`INestMicroservice`),cf(),bT(480,` instance) based on the given module. `),cf()(),Aa(481,`tr`)(482,`td`)(483,`code`),bT(484,`get()`),cf()(),Aa(485,`td`),bT(486,` Retrieves a static instance of a controller or provider (including guards, filters, etc.) available in the application context. Works like the same method of the `),Aa(487,`a`,28),bT(488,`module reference`),cf(),bT(489,` class. `),cf()(),Aa(490,`tr`)(491,`td`)(492,`code`),bT(493,`resolve()`),cf()(),Aa(494,`td`),bT(495,` Retrieves a dynamically created scoped instance (request or transient) of a controller or provider (including guards, filters, etc.) available in the application context. Works like the same method of the `),Aa(496,`a`,28),bT(497,`module reference`),cf(),bT(498,` class. `),cf()(),Aa(499,`tr`)(500,`td`)(501,`code`),bT(502,`select()`),cf()(),Aa(503,`td`),bT(504,` Navigates through the module's dependency graph; can be used to retrieve a specific instance from the selected module (used along with strict mode (`),Aa(505,`code`),bT(506,`strict: true`),cf(),bT(507,`) in the `),Aa(508,`code`),bT(509,`get()`),cf(),bT(510,` method). `),cf()()(),Aa(511,`blockquote`,9)(512,`strong`),bT(513,`Hint`),cf(),bT(514,` Keep your e2e test files inside the `),Aa(515,`code`),bT(516,`test`),cf(),bT(517,` directory. Test files should have an `),Aa(518,`code`),bT(519,`.e2e-spec`),cf(),bT(520,` suffix.
`),cf(),Aa(521,`h4`,29)(522,`span`),bT(523,`Overriding globally registered enhancers`),cf()(),Aa(524,`p`),bT(525,`If you have a globally registered guard (or pipe, interceptor, or filter), you need to take a few more steps to override that enhancer. To recap, the original registration looks like this:`),cf(),Aa(526,`app-copy-button`)(527,`pre`)(528,`code`,15),bT(529,`
providers: [
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
],
`),cf()()(),Aa(530,`p`),bT(531,`This registers the guard as a "multi" provider through the `),Aa(532,`code`),bT(533,`APP_*`),cf(),bT(534,` token. To be able to replace `),Aa(535,`code`),bT(536,`JwtAuthGuard`),cf(),bT(537,` here, the registration needs to use an existing provider in this slot:`),cf(),Aa(538,`app-copy-button`)(539,`pre`)(540,`code`,15),bT(541,`
providers: [
  {
    provide: APP_GUARD,
    useExisting: JwtAuthGuard,
    // ^^^^^^^^ notice the use of 'useExisting' instead of 'useClass'
  },
  JwtAuthGuard,
],
`),cf()()(),Aa(542,`blockquote`,9)(543,`strong`),bT(544,`Hint`),cf(),bT(545,` Change `),Aa(546,`code`),bT(547,`useClass`),cf(),bT(548,` to `),Aa(549,`code`),bT(550,`useExisting`),cf(),bT(551,` to reference a registered provider instead of having Nest instantiate it behind the token.
`),cf(),Aa(552,`p`)(553,`code`),bT(554,`JwtAuthGuard`),cf(),bT(555,` is now visible to Nest as a regular provider that can be overridden when creating the `),Aa(556,`code`),bT(557,`TestingModule`),cf(),bT(558,`:`),cf(),Aa(559,`app-copy-button`)(560,`pre`)(561,`code`,15),bT(562,`
const moduleRef = await Test.createTestingModule({
  imports: [AppModule],
})
  .overrideProvider(JwtAuthGuard)
  .useClass(MockAuthGuard)
  .compile();
`),cf()()(),Aa(563,`p`),bT(564,`All your tests now use `),Aa(565,`code`),bT(566,`MockAuthGuard`),cf(),bT(567,` on every request.`),cf(),Aa(568,`h4`,30)(569,`span`),bT(570,`Testing request-scoped instances`),cf()(),Aa(571,`p`)(572,`a`,31),bT(573,`Request-scoped`),cf(),bT(574,` providers are created uniquely for each incoming `),Aa(575,`strong`),bT(576,`request`),cf(),bT(577,`, and the instance is garbage-collected after the request has been processed. This poses a problem, because you can't access a dependency injection sub-tree generated specifically for a tested request.`),cf(),Aa(578,`p`),bT(579,`As shown in the sections above, the `),Aa(580,`code`),bT(581,`resolve()`),cf(),bT(582,` method retrieves a dynamically instantiated class. Also, as described in `),Aa(583,`a`,32),bT(584,`resolving scoped providers`),cf(),bT(585,`, you can pass a unique context identifier to control the lifecycle of a DI container sub-tree. You can combine the two in a testing context.`),cf(),Aa(586,`p`),bT(587,`The strategy is to generate a context identifier beforehand and force Nest to use this particular ID to create a sub-tree for all incoming requests. This way, you can retrieve the instances created for a tested request.`),cf(),Aa(588,`p`),bT(589,`To accomplish this, use `),Aa(590,`code`),bT(591,`vi.spyOn()`),cf(),bT(592,` on the `),Aa(593,`code`),bT(594,`ContextIdFactory`),cf(),bT(595,`:`),cf(),Aa(596,`app-copy-button`)(597,`pre`)(598,`code`,15),bT(599,`
const contextId = ContextIdFactory.create();
vi
  .spyOn(ContextIdFactory, 'getByRequest')
  .mockImplementation(() => contextId);
`),cf()()(),Aa(600,`p`),bT(601,`You can now use the `),Aa(602,`code`),bT(603,`contextId`),cf(),bT(604,` to access a single generated DI container sub-tree for any subsequent request.`),cf(),Aa(605,`app-copy-button`)(606,`pre`)(607,`code`,15),bT(608,`
catsService = await moduleRef.resolve(CatsService, contextId);
`),cf()()()(),Aa(609,`a`,33),Wa(610,`i`,34),Aa(611,`span`),bT(612,`Edit on GitHub`),cf()()()),d&2){let x=tT(60),h=tT(104),y=tT(261);zC(57),hf(` `,jT(58,15,`cats.controller.spec`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(37),hf(` `,jT(102,18,`cats.controller.spec`,h.isJsActive),`
`),zC(4),zy(`hide`,h.isJsActive),zC(3),zy(`hide`,!h.isJsActive),zC(150),hf(` `,jT(259,21,`cats.e2e-spec`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive)}},dependencies:[Lt,ln,u,Jc,l,g],encapsulation:2})}return a})();var K=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(u){return(l||(l=im(a)))(u||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-lazy-loading`]],features:[xy],decls:248,vars:8,consts:[[`contentReference`,``],[`appd5a53e24b2591c178e5c212e88602546a547f2ba`,``],[1,`content`],[1,`content-inner`],[`id`,`lazy-loading-modules`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://angular.dev/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://angular.dev/guide/ngmodules/lazy-loading#lazy-loading-basics`],[1,`warning`],[`routerLink`,`/fundamentals/lifecycle-events`],[`appAnchor`,``,`id`,`getting-started`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`language-bash`],[`routerLink`,`/fundamentals/module-ref`],[1,`language-json`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://webpack.js.org/guides/code-splitting/`],[`appAnchor`,``,`id`,`lazy-loading-controllers-gateways-and-resolvers`],[1,`error`],[`routerLink`,`/graphql/resolvers`],[`routerLink`,`/websockets/gateways`],[`appAnchor`,``,`id`,`common-use-cases`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/lazy-loading-modules.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,u){if(d&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Lazy loading modules`),cf(),Aa(5,`p`),bT(6,`By default, modules are eagerly loaded: as soon as the application loads, so do all the modules, whether or not they are immediately needed. This is fine for most applications, but it can become a bottleneck for apps and workers running in a `),Aa(7,`strong`),bT(8,`serverless environment`),cf(),bT(9,`, where startup latency ("cold start") is crucial.`),cf(),Aa(10,`p`),bT(11,`Lazy loading can decrease bootstrap time by loading only the modules required by a specific serverless function invocation. You can also load other modules asynchronously once the serverless function is "warm", to further speed up bootstrap time for subsequent calls (deferred module registration).`),cf(),Aa(12,`blockquote`,5)(13,`strong`),bT(14,`Hint`),cf(),bT(15,` If you're familiar with the `),Aa(16,`strong`)(17,`a`,6),bT(18,`Angular`),cf()(),bT(19,` framework, you might have seen the term "`),Aa(20,`a`,7),bT(21,`lazy-loading modules`),cf(),bT(22,`" before. This technique is `),Aa(23,`strong`),bT(24,`functionally different`),cf(),bT(25,` in Nest, so think of it as an entirely different feature that happens to share a similar name.
`),cf(),Aa(26,`blockquote`,8)(27,`strong`),bT(28,`Warning`),cf(),Aa(29,`a`,9),bT(30,`Lifecycle hook methods`),cf(),bT(31,` are not invoked in lazy loaded modules and services.
`),cf(),Aa(32,`h4`,10)(33,`span`),bT(34,`Getting started`),cf()(),Aa(35,`p`),bT(36,`To load modules on demand, Nest provides the `),Aa(37,`code`),bT(38,`LazyModuleLoader`),cf(),bT(39,` class, which you inject into a class like any other dependency:`),cf(),Aa(40,`app-copy-button`,11)(41,`span`,12),bT(42),LT(43,`extension`),Wa(44,`app-tabs`,null,1),cf(),Aa(46,`pre`)(47,`code`,13),bT(48,`
@Injectable()
export class CatsService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}
}
`),cf()(),Aa(49,`pre`)(50,`code`,13),bT(51,`
@Injectable()
@Dependencies(LazyModuleLoader)
export class CatsService {
  constructor(lazyModuleLoader) {
    this.lazyModuleLoader = lazyModuleLoader;
  }
}
`),cf()()(),Aa(52,`blockquote`,5)(53,`strong`),bT(54,`Hint`),cf(),bT(55,` The `),Aa(56,`code`),bT(57,`LazyModuleLoader`),cf(),bT(58,` class is imported from the `),Aa(59,`code`),bT(60,`@nestjs/core`),cf(),bT(61,` package.
`),cf(),Aa(62,`p`),bT(63,`Alternatively, you can obtain a reference to the `),Aa(64,`code`),bT(65,`LazyModuleLoader`),cf(),bT(66,` provider from within your application bootstrap file (`),Aa(67,`code`),bT(68,`main.ts`),cf(),bT(69,`):`),cf(),Aa(70,`app-copy-button`)(71,`pre`)(72,`code`,13),bT(73,`
// "app" represents a Nest application instance
const lazyModuleLoader = app.get(LazyModuleLoader);
`),cf()()(),Aa(74,`p`),bT(75,`With this in place, you can load any module using the following construction:`),cf(),Aa(76,`app-copy-button`)(77,`pre`)(78,`code`,13),bT(79,`
const { LazyModule } = await import('./lazy.module.js');
const moduleRef = await this.lazyModuleLoader.load(() => LazyModule);
`),cf()()(),Aa(80,`blockquote`,5)(81,`strong`),bT(82,`Hint`),cf(),bT(83,` Lazy loaded modules are `),Aa(84,`strong`),bT(85,`cached`),cf(),bT(86,` on the first `),Aa(87,`code`),bT(88,`LazyModuleLoader#load`),cf(),bT(89,` method invocation. Each subsequent attempt to load `),Aa(90,`code`),bT(91,`LazyModule`),cf(),bT(92,` is therefore `),Aa(93,`strong`),bT(94,`very fast`),cf(),bT(95,` and returns a cached instance instead of loading the module again.
`),Aa(96,`pre`)(97,`code`,14),bT(98,`
Load "LazyModule" attempt: 1
time: 2.379ms
Load "LazyModule" attempt: 2
time: 0.294ms
Load "LazyModule" attempt: 3
time: 0.303ms
`),cf()(),Aa(99,`p`),bT(100,`Also, lazy loaded modules share the same module graph as the modules eagerly loaded on application bootstrap, as well as any other lazy modules registered later in your app.`),cf()(),Aa(101,`p`),bT(102,`Here, `),Aa(103,`code`),bT(104,`lazy.module.ts`),cf(),bT(105,` is a TypeScript file that exports a `),Aa(106,`strong`),bT(107,`regular Nest module`),cf(),bT(108,` (no extra changes are required).`),cf(),Aa(109,`p`),bT(110,`The `),Aa(111,`code`),bT(112,`LazyModuleLoader#load`),cf(),bT(113,` method returns the `),Aa(114,`a`,15),bT(115,`module reference`),cf(),bT(116,` (of `),Aa(117,`code`),bT(118,`LazyModule`),cf(),bT(119,`), which lets you navigate the internal list of providers and obtain a reference to any provider, using its injection token as a lookup key.`),cf(),Aa(120,`blockquote`,5)(121,`strong`),bT(122,`Hint`),cf(),bT(123,` The `),Aa(124,`code`),bT(125,`load()`),cf(),bT(126,` method accepts an optional second argument, an options object. Set its `),Aa(127,`code`),bT(128,`logger`),cf(),bT(129,` property to `),Aa(130,`code`),bT(131,`false`),cf(),bT(132,` to suppress the logs Nest generates while loading the module.
`),cf(),Aa(133,`p`),bT(134,`For example, suppose we have a `),Aa(135,`code`),bT(136,`LazyModule`),cf(),bT(137,` with the following definition:`),cf(),Aa(138,`app-copy-button`)(139,`pre`)(140,`code`,13),bT(141,`
@Module({
  providers: [LazyService],
  exports: [LazyService],
})
export class LazyModule {}
`),cf()()(),Aa(142,`blockquote`,5)(143,`strong`),bT(144,`Hint`),cf(),bT(145,` Lazy loaded modules cannot be registered as `),Aa(146,`strong`),bT(147,`global modules`),cf(),bT(148,`, because they are registered lazily, on demand, after all the statically registered modules have been instantiated. Likewise, registered `),Aa(149,`strong`),bT(150,`global enhancers`),cf(),bT(151,` (guards, interceptors, etc.) `),Aa(152,`strong`),bT(153,`will not work`),cf(),bT(154,` properly either.
`),cf(),Aa(155,`p`),bT(156,`With this, we can obtain a reference to the `),Aa(157,`code`),bT(158,`LazyService`),cf(),bT(159,` provider:`),cf(),Aa(160,`app-copy-button`)(161,`pre`)(162,`code`,13),bT(163,`
const { LazyModule } = await import('./lazy.module.js');
const moduleRef = await this.lazyModuleLoader.load(() => LazyModule);

const { LazyService } = await import('./lazy.service.js');
const lazyService = moduleRef.get(LazyService);
`),cf()()(),Aa(164,`blockquote`,8)(165,`strong`),bT(166,`Warning`),cf(),bT(167,` If you use `),Aa(168,`strong`),bT(169,`webpack`),cf(),bT(170,`, update your `),Aa(171,`code`),bT(172,`tsconfig.json`),cf(),bT(173,` file: set `),Aa(174,`code`),bT(175,`compilerOptions.module`),cf(),bT(176,` to `),Aa(177,`code`),bT(178,`"esnext"`),cf(),bT(179,` and add the `),Aa(180,`code`),bT(181,`compilerOptions.moduleResolution`),cf(),bT(182,` property with `),Aa(183,`code`),bT(184,`"node"`),cf(),bT(185,` as its value:
`),Aa(186,`pre`)(187,`code`,16),bT(188,`
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "node",
    ...
  }
}
`),cf()(),Aa(189,`p`),bT(190,`With these options set, you can use webpack's `),Aa(191,`a`,17),bT(192,`code splitting`),cf(),bT(193,` feature.`),cf()(),Aa(194,`h4`,18)(195,`span`),bT(196,`Lazy loading controllers, gateways, and resolvers`),cf()(),Aa(197,`p`),bT(198,`Because controllers (or resolvers, in GraphQL applications) in Nest represent sets of routes, paths, or topics (or queries and mutations), you `),Aa(199,`strong`),bT(200,`cannot lazy load them`),cf(),bT(201,` using the `),Aa(202,`code`),bT(203,`LazyModuleLoader`),cf(),bT(204,` class.`),cf(),Aa(205,`blockquote`,19)(206,`strong`),bT(207,`Warning`),cf(),bT(208,` Controllers, `),Aa(209,`a`,20),bT(210,`resolvers`),cf(),bT(211,`, and `),Aa(212,`a`,21),bT(213,`gateways`),cf(),bT(214,` registered inside lazy loaded modules will not behave as expected. Similarly, you cannot register middleware (by implementing the `),Aa(215,`code`),bT(216,`NestModule`),cf(),bT(217,` interface's `),Aa(218,`code`),bT(219,`configure()`),cf(),bT(220,` method with the `),Aa(221,`code`),bT(222,`MiddlewareConsumer`),cf(),bT(223,`) on demand.
`),cf(),Aa(224,`p`),bT(225,`For example, suppose you're building a REST API (HTTP application) with Fastify under the hood (using the `),Aa(226,`code`),bT(227,`@nestjs/platform-fastify`),cf(),bT(228,` package). Fastify doesn't let you register routes after the application is ready and listening. So even if Nest analyzed the route mappings registered in the module's controllers, the lazy loaded routes would not be accessible, because there is no way to register them at runtime.`),cf(),Aa(229,`p`),bT(230,`Likewise, some transport strategies provided by the `),Aa(231,`code`),bT(232,`@nestjs/microservices`),cf(),bT(233,` package (including Kafka, gRPC, and RabbitMQ) must subscribe to specific topics or channels before the connection is established. Once your application starts listening to messages, the framework can't subscribe to new topics.`),cf(),Aa(234,`p`),bT(235,`Finally, the `),Aa(236,`code`),bT(237,`@nestjs/graphql`),cf(),bT(238,` package, with the code first approach enabled, generates the GraphQL schema on the fly based on metadata. This requires all classes to be loaded beforehand; otherwise, it can't create a valid schema.`),cf(),Aa(239,`h4`,22)(240,`span`),bT(241,`Common use-cases`),cf()(),Aa(242,`p`),bT(243,`Lazy loaded modules are most common when a worker, cron job, lambda or other serverless function, or webhook must trigger different services (different logic) based on its input arguments (route path, date, query parameters, etc.). Lazy loading modules makes less sense for monolithic applications, where startup time is largely irrelevant.`),cf()(),Aa(244,`a`,23),Wa(245,`i`,24),Aa(246,`span`),bT(247,`Edit on GitHub`),cf()()()),d&2){let x=tT(45);zC(42),hf(` `,jT(43,5,`cats.service`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return a})();var qt=[{path:`dynamic-modules`,component:B,data:{title:`Dynamic modules`}},{path:`dependency-injection`,redirectTo:`custom-providers`},{path:`custom-providers`,component:H,data:{title:`Custom providers`}},{path:`platform-agnosticism`,component:W,data:{title:`Platform agnosticism`}},{path:`async-components`,redirectTo:`async-providers`},{path:`async-providers`,component:F,data:{title:`Async providers`}},{path:`module-ref`,component:J,data:{title:`Module reference`}},{path:`lazy-loading-modules`,component:K,data:{title:`Lazy loading modules`}},{path:`unit-testing`,redirectTo:`testing`},{path:`e2e-testing`,redirectTo:`testing`},{path:`testing`,component:Y,data:{title:`Testing`}},{path:`injection-scopes`,component:Q,data:{title:`Injection scopes`}},{path:`execution-context`,component:z,data:{title:`Execution context`}},{path:`lifecycle-events`,component:U,data:{title:`Lifecycle events`}},{path:`circular-dependency`,component:L,data:{title:`Circular dependency`}},{path:`discovery-service`,component:G,data:{title:`Discovery service`}}];export{qt as FUNDAMENTALS_ROUTES};