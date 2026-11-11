import{C as hf,E as lf,M as xy,N as zC,P as zy,T as jT,_ as Wa,a as u,b as cf,d as Jc,h as Ly,i as g,j as uf,k as tT,l as Aa,m as LT,n as ln,p as Ky,r as xt,t as Lt,v as Xy,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";import{n as g$1,t as f}from"./chunk-BfAzJNW5.js";var K=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-cqrs`]],features:[xy],decls:1112,vars:90,consts:[[`contentReference`,``],[`app615fbaf04f54af48c127a4c525fabe93b900fb77`,``],[`appf3c73f3ccc20693bc4a89b59b9b324fa3518dc75`,``],[`appb2fb0f288e1f37b3f859206c000be1a0c01047d1`,``],[`app5cfcdd1a644ae15f406e50f069c81701176024c1`,``],[`app075f6805abd4cc3cdb272d63b435758ea092c1a2`,``],[`app8cf474ab34489c654cf5194f2b926b3c33ea0d3f`,``],[`app19d33c476f07d983c03ed0ca3c902964961382b6`,``],[`app2802d248e8c6c130c668e5929acb451c24dfe576`,``],[`app7b50b1fcfb5cf23c5526ed9aabee52dffc53523f`,``],[`appd036bbf710f310e486431759aaaca869c0f55e61`,``],[`app864afb4dfa29a76db962481517c19c811a2435cd`,``],[`app728ad7392a56a97d1762090c30b9b6d11681173f`,``],[`appd0f12371ebb55fbde09c2b5ff48682290acc12bf`,``],[1,`content`],[1,`content-inner`],[`id`,`cqrs`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Create,_read,_update_and_delete`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/cqrs`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[1,`language-typescript`],[`appAnchor`,``,`id`,`commands`],[1,`with-heading`],[1,`filename`],[1,`info`],[`appAnchor`,``,`id`,`queries`],[`appAnchor`,``,`id`,`events`],[`appAnchor`,``,`id`,`flexible-aggregate-roots`],[`appAnchor`,``,`id`,`manual-event-publishing`],[`routerLink`,`/exception-filters`],[`href`,`/recipes/cqrs#sagas`],[`routerLink`,`/websockets/gateways`],[`routerLink`,`/http/server-sent-events`],[`appAnchor`,``,`id`,`sagas`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/ReactiveX/rxjs`],[`href`,`/recipes/cqrs#durable-sagas`],[`appAnchor`,``,`id`,`durable-sagas`],[`routerLink`,`/reliability/workflows`],[`href`,`/reliability/workflows#keep-workflows-in-your-database`],[`href`,`/reliability/workflows#with-cqrs`],[`appAnchor`,``,`id`,`unhandled-exceptions`],[`appAnchor`,``,`id`,`subscribing-to-all-events`],[`appAnchor`,``,`id`,`request-scoping`],[`routerLink`,`/fundamentals/injection-scopes`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/kamilmysliwiec/nest-cqrs-example`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/cqrs.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,14,0)(2,`div`,15)(3,`h3`,16),bT(4,`CQRS`),cf(),Aa(5,`p`),bT(6,`The flow of simple `),Aa(7,`a`,17),bT(8,`CRUD`),cf(),bT(9,` (Create, Read, Update and Delete) applications can be described as follows:`),cf(),Aa(10,`ol`)(11,`li`),bT(12,`The controllers layer handles HTTP requests and delegates tasks to the services layer.`),cf(),Aa(13,`li`),bT(14,`The services layer is where most of the business logic lives.`),cf(),Aa(15,`li`),bT(16,`Services use repositories or DAOs to change and persist entities.`),cf(),Aa(17,`li`),bT(18,`Entities act as containers for values, with setters and getters.`),cf()(),Aa(19,`p`),bT(20,`While this pattern is usually sufficient for small and medium-sized applications, it may not be the best choice for larger, more complex ones. In such cases, the `),Aa(21,`strong`),bT(22,`CQRS`),cf(),bT(23,` (Command and Query Responsibility Segregation) model may be more appropriate and scalable, depending on the application's requirements. Benefits of this model include:`),cf(),Aa(24,`ul`)(25,`li`)(26,`strong`),bT(27,`Separation of concerns`),cf(),bT(28,`. Read and write operations are handled by separate models.`),cf(),Aa(29,`li`)(30,`strong`),bT(31,`Scalability`),cf(),bT(32,`. Read and write operations can be scaled independently.`),cf(),Aa(33,`li`)(34,`strong`),bT(35,`Flexibility`),cf(),bT(36,`. Reads and writes can use different data stores.`),cf(),Aa(37,`li`)(38,`strong`),bT(39,`Performance`),cf(),bT(40,`. Each data store can be optimized for its workload (reads or writes).`),cf()(),Aa(41,`p`),bT(42,`To support this model, Nest provides a lightweight `),Aa(43,`a`,18),bT(44,`CQRS module`),cf(),bT(45,`. This chapter describes how to use it.`),cf(),Aa(46,`h4`,19)(47,`span`),bT(48,`Installation`),cf()(),Aa(49,`p`),bT(50,`First, install the required package:`),cf(),Aa(51,`pre`)(52,`code`,20),bT(53,`
$ npm install --save @nestjs/cqrs
`),cf()(),Aa(54,`p`),bT(55,`Once the installation is complete, open the root module of your application (usually `),Aa(56,`code`),bT(57,`AppModule`),cf(),bT(58,`) and import `),Aa(59,`code`),bT(60,`CqrsModule.forRoot()`),cf(),bT(61,`:`),cf(),Aa(62,`app-copy-button`)(63,`pre`)(64,`code`,21),bT(65,`
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule.forRoot()],
})
export class AppModule {}
`),cf()()(),Aa(66,`p`)(67,`code`),bT(68,`forRoot()`),cf(),bT(69,` accepts an optional configuration object. To provide the options asynchronously (e.g., from a configuration service), use `),Aa(70,`code`),bT(71,`CqrsModule.forRootAsync()`),cf(),bT(72,` instead. The following options are available:`),cf(),Aa(73,`table`)(74,`thead`)(75,`tr`)(76,`th`),bT(77,`Attribute`),cf(),Aa(78,`th`),bT(79,`Description`),cf(),Aa(80,`th`),bT(81,`Default`),cf()()(),Aa(82,`tbody`)(83,`tr`)(84,`td`)(85,`code`),bT(86,`commandPublisher`),cf()(),Aa(87,`td`),bT(88,`The publisher responsible for dispatching commands to the system.`),cf(),Aa(89,`td`)(90,`code`),bT(91,`DefaultCommandPubSub`),cf()()(),Aa(92,`tr`)(93,`td`)(94,`code`),bT(95,`eventPublisher`),cf()(),Aa(96,`td`),bT(97,`The publisher used to publish events, allowing them to be broadcasted or processed.`),cf(),Aa(98,`td`)(99,`code`),bT(100,`DefaultPubSub`),cf()()(),Aa(101,`tr`)(102,`td`)(103,`code`),bT(104,`queryPublisher`),cf()(),Aa(105,`td`),bT(106,`The publisher used for publishing queries, which can trigger data retrieval operations.`),cf(),Aa(107,`td`)(108,`code`),bT(109,`DefaultQueryPubSub`),cf()()(),Aa(110,`tr`)(111,`td`)(112,`code`),bT(113,`unhandledExceptionPublisher`),cf()(),Aa(114,`td`),bT(115,`The publisher used to publish unhandled exceptions to the `),Aa(116,`code`),bT(117,`UnhandledExceptionBus`),cf(),bT(118,`.`),cf(),Aa(119,`td`)(120,`code`),bT(121,`DefaultUnhandledExceptionPubSub`),cf()()(),Aa(122,`tr`)(123,`td`)(124,`code`),bT(125,`eventIdProvider`),cf()(),Aa(126,`td`),bT(127,`Service that retrieves unique event IDs from event instances.`),cf(),Aa(128,`td`)(129,`code`),bT(130,`DefaultEventIdProvider`),cf()()(),Aa(131,`tr`)(132,`td`)(133,`code`),bT(134,`rethrowUnhandled`),cf()(),Aa(135,`td`),bT(136,`Whether exceptions thrown by event handlers and sagas are rethrown instead of being published to the `),Aa(137,`code`),bT(138,`UnhandledExceptionBus`),cf(),bT(139,`.`),cf(),Aa(140,`td`)(141,`code`),bT(142,`false`),cf()()()()(),Aa(143,`h4`,22)(144,`span`),bT(145,`Commands`),cf()(),Aa(146,`p`),bT(147,`Commands change the application state. They should be task-based rather than data-centric. When a command is dispatched, it is handled by a corresponding `),Aa(148,`strong`),bT(149,`command handler`),cf(),bT(150,`, which is responsible for updating the application state.`),cf(),Aa(151,`app-copy-button`,23)(152,`span`,24),bT(153),LT(154,`extension`),Wa(155,`app-tabs`,null,1),cf(),Aa(157,`pre`)(158,`code`,21),bT(159,`
@Injectable()
export class HeroesGameService {
  constructor(private commandBus: CommandBus) {}

  async killDragon(heroId: string, killDragonDto: KillDragonDto) {
    return this.commandBus.execute(
      new KillDragonCommand(heroId, killDragonDto.dragonId)
    );
  }
}
`),cf()(),Aa(160,`pre`)(161,`code`,21),bT(162,`
@Injectable()
@Dependencies(CommandBus)
export class HeroesGameService {
  constructor(commandBus) {
    this.commandBus = commandBus;
  }

  async killDragon(heroId, killDragonDto) {
    return this.commandBus.execute(
      new KillDragonCommand(heroId, killDragonDto.dragonId)
    );
  }
}
`),cf()()(),Aa(163,`p`),bT(164,`The code above instantiates the `),Aa(165,`code`),bT(166,`KillDragonCommand`),cf(),bT(167,` class and passes it to the `),Aa(168,`code`),bT(169,`execute()`),cf(),bT(170,` method of the `),Aa(171,`code`),bT(172,`CommandBus`),cf(),bT(173,`. Here is the command class:`),cf(),Aa(174,`app-copy-button`,23)(175,`span`,24),bT(176),LT(177,`extension`),Wa(178,`app-tabs`,null,2),cf(),Aa(180,`pre`)(181,`code`,21),bT(182,`
export class KillDragonCommand extends Command<{
  actionId: string // This type represents the command execution result
}> {
  constructor(
    public readonly heroId: string,
    public readonly dragonId: string,
  ) {
    super();
  }
}
`),cf()(),Aa(183,`pre`)(184,`code`,21),bT(185,`
export class KillDragonCommand extends Command {
  constructor(heroId, dragonId) {
    super();
    this.heroId = heroId;
    this.dragonId = dragonId;
  }
}
`),cf()()(),Aa(186,`p`),bT(187,`The `),Aa(188,`code`),bT(189,`KillDragonCommand`),cf(),bT(190,` class extends the `),Aa(191,`code`),bT(192,`Command`),cf(),bT(193,` class, a utility class exported from the `),Aa(194,`code`),bT(195,`@nestjs/cqrs`),cf(),bT(196,` package that lets you define the command's return type. In this case, the return type is an object with an `),Aa(197,`code`),bT(198,`actionId`),cf(),bT(199,` property. Whenever the `),Aa(200,`code`),bT(201,`KillDragonCommand`),cf(),bT(202,` command is dispatched, the return type of the `),Aa(203,`code`),bT(204,`CommandBus#execute()`),cf(),bT(205,` method is inferred as `),Aa(206,`code`),bT(207),cf(),bT(208,`. This is useful when the command handler returns data to the caller.`),cf(),Aa(209,`blockquote`,25)(210,`strong`),bT(211,`Hint`),cf(),bT(212,` Extending the `),Aa(213,`code`),bT(214,`Command`),cf(),bT(215,` class is optional. You only need it to define the command's return type.
`),cf(),Aa(216,`p`),bT(217,`The `),Aa(218,`code`),bT(219,`CommandBus`),cf(),bT(220,` represents a `),Aa(221,`strong`),bT(222,`stream`),cf(),bT(223,` of commands. It dispatches commands to the appropriate handlers. The `),Aa(224,`code`),bT(225,`execute()`),cf(),bT(226,` method returns a promise that resolves to the value returned by the handler.`),cf(),Aa(227,`p`),bT(228,`Let's create a handler for the `),Aa(229,`code`),bT(230,`KillDragonCommand`),cf(),bT(231,` command.`),cf(),Aa(232,`app-copy-button`,23)(233,`span`,24),bT(234),LT(235,`extension`),Wa(236,`app-tabs`,null,3),cf(),Aa(238,`pre`)(239,`code`,21),bT(240,`
@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(private repository: HeroesRepository) {}

  async execute(command: KillDragonCommand) {
    const { heroId, dragonId } = command;
    const hero = this.repository.findOneById(+heroId);

    hero.killEnemy(dragonId);
    await this.repository.persist(hero);

    // "ICommandHandler<KillDragonCommand>" forces you to return a value that matches the command's return type
    return {
      actionId: crypto.randomUUID(), // This value will be returned to the caller
    }
  }
}
`),cf()(),Aa(241,`pre`)(242,`code`,21),bT(243,`
@CommandHandler(KillDragonCommand)
@Dependencies(HeroesRepository)
export class KillDragonHandler {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(command) {
    const { heroId, dragonId } = command;
    const hero = this.repository.findOneById(+heroId);

    hero.killEnemy(dragonId);
    await this.repository.persist(hero);

    // "ICommandHandler<KillDragonCommand>" forces you to return a value that matches the command's return type
    return {
      actionId: crypto.randomUUID(), // This value will be returned to the caller
    }
  }
}
`),cf()()(),Aa(244,`p`),bT(245,`This handler retrieves the `),Aa(246,`code`),bT(247,`Hero`),cf(),bT(248,` entity from the repository, calls its `),Aa(249,`code`),bT(250,`killEnemy()`),cf(),bT(251,` method, and then persists the changes. The `),Aa(252,`code`),bT(253,`KillDragonHandler`),cf(),bT(254,` class implements the `),Aa(255,`code`),bT(256,`ICommandHandler`),cf(),bT(257,` interface, which requires an `),Aa(258,`code`),bT(259,`execute()`),cf(),bT(260,` method. The `),Aa(261,`code`),bT(262,`execute()`),cf(),bT(263,` method receives the command object as an argument.`),cf(),Aa(264,`p`)(265,`code`),bT(266,`ICommandHandler<KillDragonCommand>`),cf(),bT(267,` requires `),Aa(268,`code`),bT(269,`execute()`),cf(),bT(270,` to return a value that matches the command's return type (here, an object with an `),Aa(271,`code`),bT(272,`actionId`),cf(),bT(273,` property). This only applies to commands that extend the `),Aa(274,`code`),bT(275,`Command`),cf(),bT(276,` class. For other commands, the return type isn't constrained.`),cf(),Aa(277,`p`),bT(278,`Finally, register the `),Aa(279,`code`),bT(280,`KillDragonHandler`),cf(),bT(281,` as a provider in a module:`),cf(),Aa(282,`app-copy-button`)(283,`pre`)(284,`code`,21),bT(285,`
providers: [KillDragonHandler];
`),cf()()(),Aa(286,`h4`,26)(287,`span`),bT(288,`Queries`),cf()(),Aa(289,`p`),bT(290,`Queries retrieve data from the application state. They should be data-centric rather than task-based. When a query is dispatched, it is handled by a corresponding `),Aa(291,`strong`),bT(292,`query handler`),cf(),bT(293,`, which is responsible for retrieving the data.`),cf(),Aa(294,`p`),bT(295,`The `),Aa(296,`code`),bT(297,`QueryBus`),cf(),bT(298,` follows the same pattern as the `),Aa(299,`code`),bT(300,`CommandBus`),cf(),bT(301,`. Query handlers implement the `),Aa(302,`code`),bT(303,`IQueryHandler`),cf(),bT(304,` interface and are annotated with the `),Aa(305,`code`),bT(306,`@QueryHandler()`),cf(),bT(307,` decorator. Start with the query class:`),cf(),Aa(308,`app-copy-button`)(309,`pre`)(310,`code`,21),bT(311,`
export class GetHeroQuery extends Query<Hero> {
  constructor(public readonly heroId: string) {
    super();
  }
}
`),cf()()(),Aa(312,`p`),bT(313,`Like the `),Aa(314,`code`),bT(315,`Command`),cf(),bT(316,` class, the `),Aa(317,`code`),bT(318,`Query`),cf(),bT(319,` class is a utility class exported from the `),Aa(320,`code`),bT(321,`@nestjs/cqrs`),cf(),bT(322,` package that lets you define the query's return type. In this case, the return type is a `),Aa(323,`code`),bT(324,`Hero`),cf(),bT(325,` object. Whenever the `),Aa(326,`code`),bT(327,`GetHeroQuery`),cf(),bT(328,` query is dispatched, the return type of the `),Aa(329,`code`),bT(330,`QueryBus#execute()`),cf(),bT(331,` method is inferred as `),Aa(332,`code`),bT(333,`Promise<Hero>`),cf(),bT(334,`.`),cf(),Aa(335,`p`),bT(336,`To retrieve the hero, create a query handler:`),cf(),Aa(337,`app-copy-button`,23)(338,`span`,24),bT(339),LT(340,`extension`),Wa(341,`app-tabs`,null,4),cf(),Aa(343,`pre`)(344,`code`,21),bT(345,`
@QueryHandler(GetHeroQuery)
export class GetHeroHandler implements IQueryHandler<GetHeroQuery> {
  constructor(private repository: HeroesRepository) {}

  async execute(query: GetHeroQuery) {
    return this.repository.findOneById(query.heroId);
  }
}
`),cf()(),Aa(346,`pre`)(347,`code`,21),bT(348,`
@QueryHandler(GetHeroQuery)
@Dependencies(HeroesRepository)
export class GetHeroHandler {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(query) {
    return this.repository.findOneById(query.heroId);
  }
}
`),cf()()(),Aa(349,`p`),bT(350,`The `),Aa(351,`code`),bT(352,`GetHeroHandler`),cf(),bT(353,` class implements the `),Aa(354,`code`),bT(355,`IQueryHandler`),cf(),bT(356,` interface, which requires an `),Aa(357,`code`),bT(358,`execute()`),cf(),bT(359,` method. The `),Aa(360,`code`),bT(361,`execute()`),cf(),bT(362,` method receives the query object as an argument and must return data that matches the query's return type (in this case, a `),Aa(363,`code`),bT(364,`Hero`),cf(),bT(365,` object).`),cf(),Aa(366,`p`),bT(367,`Finally, register the `),Aa(368,`code`),bT(369,`GetHeroHandler`),cf(),bT(370,` as a provider in a module:`),cf(),Aa(371,`app-copy-button`)(372,`pre`)(373,`code`,21),bT(374,`
providers: [GetHeroHandler];
`),cf()()(),Aa(375,`p`),bT(376,`To dispatch the query, use the `),Aa(377,`code`),bT(378,`QueryBus`),cf(),bT(379,`:`),cf(),Aa(380,`app-copy-button`)(381,`pre`)(382,`code`,21),bT(383,`
const hero = await this.queryBus.execute(new GetHeroQuery(heroId)); // "hero" will be auto-inferred as "Hero" type
`),cf()()(),Aa(384,`h4`,27)(385,`span`),bT(386,`Events`),cf()(),Aa(387,`p`),bT(388,`Events notify other parts of the application about changes in the application state. They are dispatched by `),Aa(389,`strong`),bT(390,`models`),cf(),bT(391,` or directly through the `),Aa(392,`code`),bT(393,`EventBus`),cf(),bT(394,`. When an event is dispatched, it is handled by the corresponding `),Aa(395,`strong`),bT(396,`event handlers`),cf(),bT(397,`, which can, for example, update the read model.`),cf(),Aa(398,`p`),bT(399,`For demonstration purposes, let's create an event class:`),cf(),Aa(400,`app-copy-button`,23)(401,`span`,24),bT(402),LT(403,`extension`),Wa(404,`app-tabs`,null,5),cf(),Aa(406,`pre`)(407,`code`,21),bT(408,`
export class HeroKilledDragonEvent {
  constructor(
    public readonly heroId: string,
    public readonly dragonId: string,
  ) {}
}
`),cf()(),Aa(409,`pre`)(410,`code`,21),bT(411,`
export class HeroKilledDragonEvent {
  constructor(heroId, dragonId) {
    this.heroId = heroId;
    this.dragonId = dragonId;
  }
}
`),cf()()(),Aa(412,`p`),bT(413,`While you can dispatch events directly with the `),Aa(414,`code`),bT(415,`EventBus.publish()`),cf(),bT(416,` method, you can also dispatch them from the model. Let's update the `),Aa(417,`code`),bT(418,`Hero`),cf(),bT(419,` model to dispatch the `),Aa(420,`code`),bT(421,`HeroKilledDragonEvent`),cf(),bT(422,` event when the `),Aa(423,`code`),bT(424,`killEnemy()`),cf(),bT(425,` method is called.`),cf(),Aa(426,`app-copy-button`,23)(427,`span`,24),bT(428),LT(429,`extension`),Wa(430,`app-tabs`,null,6),cf(),Aa(432,`pre`)(433,`code`,21),bT(434,`
export class Hero extends AggregateRoot {
  constructor(private id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // Business logic
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }
}
`),cf()(),Aa(435,`pre`)(436,`code`,21),bT(437,`
export class Hero extends AggregateRoot {
  constructor(id) {
    super();
    this.id = id;
  }

  killEnemy(enemyId) {
    // Business logic
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }
}
`),cf()()(),Aa(438,`p`),bT(439,`The `),Aa(440,`code`),bT(441,`apply()`),cf(),bT(442,` method dispatches events. It accepts an event object as an argument. However, the model isn't aware of the `),Aa(443,`code`),bT(444,`EventBus`),cf(),bT(445,`, so you need to connect the two. The `),Aa(446,`code`),bT(447,`EventPublisher`),cf(),bT(448,` class does that:`),cf(),Aa(449,`app-copy-button`,23)(450,`span`,24),bT(451),LT(452,`extension`),Wa(453,`app-tabs`,null,7),cf(),Aa(455,`pre`)(456,`code`,21),bT(457,`
@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(
    private repository: HeroesRepository,
    private publisher: EventPublisher,
  ) {}

  async execute(command: KillDragonCommand) {
    const { heroId, dragonId } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+heroId),
    );
    hero.killEnemy(dragonId);
    hero.commit();

    return {
      actionId: crypto.randomUUID(),
    };
  }
}
`),cf()(),Aa(458,`pre`)(459,`code`,21),bT(460,`
@CommandHandler(KillDragonCommand)
@Dependencies(HeroesRepository, EventPublisher)
export class KillDragonHandler {
  constructor(repository, publisher) {
    this.repository = repository;
    this.publisher = publisher;
  }

  async execute(command) {
    const { heroId, dragonId } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+heroId),
    );
    hero.killEnemy(dragonId);
    hero.commit();

    return {
      actionId: crypto.randomUUID(),
    };
  }
}
`),cf()()(),Aa(461,`p`),bT(462,`The `),Aa(463,`code`),bT(464,`EventPublisher#mergeObjectContext`),cf(),bT(465,` method merges the event publisher into the provided object. This object must implement the `),Aa(466,`code`),bT(467,`IAggregateRoot`),cf(),bT(468,` interface (or extend the `),Aa(469,`code`),bT(470,`AggregateRoot`),cf(),bT(471,` class). Once merged, the object can publish events to the event stream.`),cf(),Aa(472,`p`),bT(473,`Events applied with `),Aa(474,`code`),bT(475,`apply()`),cf(),bT(476,` are queued until you call the model's `),Aa(477,`code`),bT(478,`commit()`),cf(),bT(479,` method, which dispatches all outstanding events. To dispatch events as soon as they are applied, set the `),Aa(480,`code`),bT(481,`autoCommit`),cf(),bT(482,` property to `),Aa(483,`code`),bT(484,`true`),cf(),bT(485,`:`),cf(),Aa(486,`app-copy-button`)(487,`pre`)(488,`code`,21),bT(489,`
export class Hero extends AggregateRoot {
  constructor(private id: string) {
    super();
    this.autoCommit = true;
  }
}
`),cf()()(),Aa(490,`p`),bT(491,`To merge the event publisher into a class rather than into an existing object, use the `),Aa(492,`code`),bT(493,`EventPublisher#mergeClassContext`),cf(),bT(494,` method:`),cf(),Aa(495,`app-copy-button`)(496,`pre`)(497,`code`,21),bT(498,`
const HeroModel = this.publisher.mergeClassContext(Hero);
const hero = new HeroModel('id'); // <-- HeroModel is a class
`),cf()()(),Aa(499,`p`),bT(500,`Every instance of the `),Aa(501,`code`),bT(502,`HeroModel`),cf(),bT(503,` class can now publish events without calling the `),Aa(504,`code`),bT(505,`mergeObjectContext()`),cf(),bT(506,` method.`),cf(),Aa(507,`p`),bT(508,`As of `),Aa(509,`code`),bT(510,`@nestjs/cqrs`),cf(),bT(511,` 12.1, a model's `),Aa(512,`code`),bT(513,`commit()`),cf(),bT(514,`, `),Aa(515,`code`),bT(516,`publish()`),cf(),bT(517,` and `),Aa(518,`code`),bT(519,`publishAll()`),cf(),bT(520,` return what the event bus returns, which is whatever the event publisher returns. The default in-memory publisher returns nothing, as it doesn't wait for the event handlers. With an asynchronous publisher, such as one that writes to a message broker, `),Aa(521,`code`),bT(522,`await hero.commit()`),cf(),bT(523,` waits for it and throws when it fails.`),cf(),Aa(524,`p`),bT(525,`All three also accept a dispatcher context, which the event publisher receives in place of the model. A command handler can pass its transaction this way, for a publisher that writes through it:`),cf(),Aa(526,`app-copy-button`)(527,`pre`)(528,`code`,21),bT(529,`
await hero.commit({ transaction: tx });
`),cf()()(),Aa(530,`p`)(531,`code`),bT(532,`commit()`),cf(),bT(533,` clears the model's events as soon as it hands them to the event bus, without waiting for the publisher, so calling it again never publishes the same events twice. If an awaited `),Aa(534,`code`),bT(535,`commit()`),cf(),bT(536,` fails, roll back and run the command again with a freshly loaded model.`),cf(),Aa(537,`h4`,28)(538,`span`),bT(539,`Flexible Aggregate Roots`),cf()(),Aa(540,`p`),bT(541,`The `),Aa(542,`code`),bT(543,`AggregateRoot`),cf(),bT(544,` class is a base class that you can extend to add event-driven capabilities to your domain models. However, this approach requires domain entities to extend `),Aa(545,`code`),bT(546,`AggregateRoot`),cf(),bT(547,` directly, which can be a limitation if your application already has an established entity inheritance hierarchy (e.g., a base `),Aa(548,`code`),bT(549,`Entity`),cf(),bT(550,` class or domain-specific base classes such as `),Aa(551,`code`),bT(552,`Monster`),cf(),bT(553,` or `),Aa(554,`code`),bT(555,`Vehicle`),cf(),bT(556,`).`),cf(),Aa(557,`p`),bT(558,`For more flexibility, the `),Aa(559,`code`),bT(560,`@nestjs/cqrs`),cf(),bT(561,` package supports three approaches to implementing aggregate roots:`),cf(),Aa(562,`p`)(563,`strong`),bT(564,`Approach 1: Traditional (Class Inheritance)`),cf()(),Aa(565,`p`),bT(566,`This is the standard approach shown in the previous examples. It works well for simple scenarios and greenfield projects.`),cf(),Aa(567,`app-copy-button`)(568,`pre`)(569,`code`,21),bT(570,`
export class Hero extends AggregateRoot {
  constructor(private id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }
}
`),cf()()(),Aa(571,`p`)(572,`strong`),bT(573,`Approach 2: Mixin (For existing hierarchies)`),cf()(),Aa(574,`p`),bT(575,`If you already have a base class and can't extend `),Aa(576,`code`),bT(577,`AggregateRoot`),cf(),bT(578,` directly, use the `),Aa(579,`code`),bT(580,`WithAggregateRoot<EventBase, TBase>()`),cf(),bT(581,` mixin function. It applies aggregate root behavior to any existing base class.`),cf(),Aa(582,`app-copy-button`,23)(583,`span`,24),bT(584),LT(585,`extension`),Wa(586,`app-tabs`,null,8),cf(),Aa(588,`pre`)(589,`code`,21),bT(590,`
abstract class Monster {
  constructor(protected readonly id: string) {}
  abstract roar(): void;
}

export class Dragon extends WithAggregateRoot(Monster) {
  roar(): void {
    console.log('Roarrrr!');
  }

  die(): void {
    this.roar();
    this.apply(new DragonDiedEvent(this.id)); // Provided by the mixin
  }
}
`),cf()(),Aa(591,`pre`)(592,`code`,21),bT(593,`
class Monster {
  constructor(id) {
    this.id = id;
  }
}

export class Dragon extends WithAggregateRoot(Monster) {
  roar() {
    console.log('Roarrrr!');
  }

  die() {
    this.roar();
    this.apply(new DragonDiedEvent(this.id));
  }
}
`),cf()()(),Aa(594,`p`)(595,`strong`),bT(596,`Approach 3: Custom Implementation`),cf()(),Aa(597,`p`),bT(598,`For maximum control, or to keep your domain layer completely framework-agnostic, implement the `),Aa(599,`code`),bT(600,`IAggregateRoot`),cf(),bT(601,` interface directly:`),cf(),Aa(602,`app-copy-button`)(603,`pre`)(604,`code`,21),bT(605,`
export class CustomEntity implements IAggregateRoot {
  autoCommit = false;
  private events: IEvent[] = [];

  getUncommittedEvents() {
    return this.events;
  }

  publish(event: IEvent, dispatcherContext?: unknown) {
    // custom logic
  }

  publishAll(events: IEvent[], dispatcherContext?: unknown) {
    // custom logic
  }

  commit(dispatcherContext?: unknown) {
    // custom logic, such as:
    // return this.publishAll(this.events.splice(0), dispatcherContext);
  }

  uncommit() {
    // custom logic
  }

  apply(event: IEvent) {
    this.events.push(event);
  }

  loadFromHistory(history: IEvent[]) {
    // custom logic
  }
}
`),cf()()(),Aa(606,`p`),bT(607,`All three approaches work with `),Aa(608,`code`),bT(609,`EventPublisher`),cf(),bT(610,`, which accepts any object that implements the `),Aa(611,`code`),bT(612,`IAggregateRoot`),cf(),bT(613,` interface. As of `),Aa(614,`code`),bT(615,`@nestjs/cqrs`),cf(),bT(616,` 12.1, `),Aa(617,`code`),bT(618,`mergeObjectContext()`),cf(),bT(619,` and `),Aa(620,`code`),bT(621,`mergeClassContext()`),cf(),bT(622,` give the model `),Aa(623,`code`),bT(624,`publish()`),cf(),bT(625,` and `),Aa(626,`code`),bT(627,`publishAll()`),cf(),bT(628,` methods that pass a dispatcher context on to the event bus and return its result. A custom `),Aa(629,`code`),bT(630,`commit()`),cf(),bT(631,` supports the dispatcher context by passing it on to `),Aa(632,`code`),bT(633,`publishAll()`),cf(),bT(634,`. The parameters are optional: an implementation without them, whose methods return nothing, still satisfies the interface.`),cf(),Aa(635,`h4`,29)(636,`span`),bT(637,`Manual event publishing`),cf()(),Aa(638,`p`),bT(639,`To publish an event without going through a model, call the `),Aa(640,`code`),bT(641,`EventBus#publish()`),cf(),bT(642,` method directly:`),cf(),Aa(643,`app-copy-button`)(644,`pre`)(645,`code`,21),bT(646,`
this.eventBus.publish(new HeroKilledDragonEvent(heroId, dragonId));
`),cf()()(),Aa(647,`blockquote`,25)(648,`strong`),bT(649,`Hint`),cf(),bT(650,` The `),Aa(651,`code`),bT(652,`EventBus`),cf(),bT(653,` is an injectable class.
`),cf(),Aa(654,`p`),bT(655,`Each event can have multiple `),Aa(656,`strong`),bT(657,`event handlers`),cf(),bT(658,`.`),cf(),Aa(659,`app-copy-button`,23)(660,`span`,24),bT(661),LT(662,`extension`),Wa(663,`app-tabs`,null,9),cf(),Aa(665,`pre`)(666,`code`,21),bT(667,`
@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {
  constructor(private repository: HeroesRepository) {}

  handle(event: HeroKilledDragonEvent) {
    // Business logic
  }
}
`),cf()()(),Aa(668,`blockquote`,25)(669,`strong`),bT(670,`Hint`),cf(),bT(671,` Event handlers run outside the traditional HTTP request context:
`),Aa(672,`ul`)(673,`li`),bT(674,`Errors thrown in command handlers can still be caught by the built-in `),Aa(675,`a`,30),bT(676,`exception filters`),cf(),bT(677,`.`),cf(),Aa(678,`li`),bT(679,`Errors thrown in event handlers can't be caught by exception filters, so you have to handle them yourself: with a `),Aa(680,`code`),bT(681,`try/catch`),cf(),bT(682,` block, with a `),Aa(683,`a`,31),bT(684,`saga`),cf(),bT(685,` that triggers a compensating event, or with another approach of your choice.`),cf(),Aa(686,`li`),bT(687,`The value returned by a command handler can still be sent back to the client in the HTTP response.`),cf(),Aa(688,`li`),bT(689,`Event handlers can't send HTTP responses. To send information to the client, use `),Aa(690,`a`,32),bT(691,`WebSockets`),cf(),bT(692,`, `),Aa(693,`a`,33),bT(694,`server-sent events`),cf(),bT(695,`, or another mechanism.`),cf()()(),Aa(696,`p`),bT(697,`As with commands and queries, register the `),Aa(698,`code`),bT(699,`HeroKilledDragonHandler`),cf(),bT(700,` as a provider in a module:`),cf(),Aa(701,`app-copy-button`)(702,`pre`)(703,`code`,21),bT(704,`
providers: [HeroKilledDragonHandler];
`),cf()()(),Aa(705,`h4`,34)(706,`span`),bT(707,`Sagas`),cf()(),Aa(708,`p`),bT(709,`A saga is a long-running process that listens to events and may trigger new commands. Sagas are typically used to manage complex workflows. For example, when a user signs up, a saga may listen to the `),Aa(710,`code`),bT(711,`UserRegisteredEvent`),cf(),bT(712,` and send the user a welcome email.`),cf(),Aa(713,`p`),bT(714,`A single saga may listen for 1..* events. With the `),Aa(715,`a`,35),bT(716,`RxJS`),cf(),bT(717,` library, you can filter, map, fork, and merge event streams to build sophisticated workflows. Each saga returns an `),Aa(718,`code`),bT(719,`Observable`),cf(),bT(720,` that emits command instances. Each emitted command is then dispatched `),Aa(721,`strong`),bT(722,`asynchronously`),cf(),bT(723,` by the `),Aa(724,`code`),bT(725,`CommandBus`),cf(),bT(726,`.`),cf(),Aa(727,`blockquote`,25)(728,`strong`),bT(729,`Hint`),cf(),bT(730,` Sagas run in memory. For processes that must survive restarts, see `),Aa(731,`a`,36),bT(732,`Durable sagas`),cf(),bT(733,`.
`),cf(),Aa(734,`p`),bT(735,`Let's create a saga that listens to the `),Aa(736,`code`),bT(737,`HeroKilledDragonEvent`),cf(),bT(738,` and dispatches the `),Aa(739,`code`),bT(740,`DropAncientItemCommand`),cf(),bT(741,` command.`),cf(),Aa(742,`app-copy-button`,23)(743,`span`,24),bT(744),LT(745,`extension`),Wa(746,`app-tabs`,null,10),cf(),Aa(748,`pre`)(749,`code`,21),bT(750,`
@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(HeroKilledDragonEvent),
      map((event) => new DropAncientItemCommand(event.heroId, fakeItemID)),
    );
  }
}
`),cf()(),Aa(751,`pre`)(752,`code`,21),bT(753,`
@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = (events$) => {
    return events$.pipe(
      ofType(HeroKilledDragonEvent),
      map((event) => new DropAncientItemCommand(event.heroId, fakeItemID)),
    );
  }
}
`),cf()()(),Aa(754,`blockquote`,25)(755,`strong`),bT(756,`Hint`),cf(),bT(757,` The `),Aa(758,`code`),bT(759,`ofType`),cf(),bT(760,` operator and the `),Aa(761,`code`),bT(762,`@Saga()`),cf(),bT(763,` decorator are exported from the `),Aa(764,`code`),bT(765,`@nestjs/cqrs`),cf(),bT(766,` package.
`),cf(),Aa(767,`p`),bT(768,`The `),Aa(769,`code`),bT(770,`@Saga()`),cf(),bT(771,` decorator marks the property as a saga. The `),Aa(772,`code`),bT(773,`events$`),cf(),bT(774,` argument is an `),Aa(775,`code`),bT(776,`Observable`),cf(),bT(777,` stream of all events. The `),Aa(778,`code`),bT(779,`ofType`),cf(),bT(780,` operator filters the stream by the specified event type, and the `),Aa(781,`code`),bT(782,`map`),cf(),bT(783,` operator maps each event to a new command instance.`),cf(),Aa(784,`p`),bT(785,`In this example, each `),Aa(786,`code`),bT(787,`HeroKilledDragonEvent`),cf(),bT(788,` is mapped to a `),Aa(789,`code`),bT(790,`DropAncientItemCommand`),cf(),bT(791,` command, which the `),Aa(792,`code`),bT(793,`CommandBus`),cf(),bT(794,` then dispatches automatically.`),cf(),Aa(795,`p`),bT(796,`As with query, command, and event handlers, register the `),Aa(797,`code`),bT(798,`HeroesGameSagas`),cf(),bT(799,` as a provider in a module:`),cf(),Aa(800,`app-copy-button`)(801,`pre`)(802,`code`,21),bT(803,`
providers: [HeroesGameSagas];
`),cf()()(),Aa(804,`h4`,37)(805,`span`),bT(806,`Durable sagas`),cf()(),Aa(807,`p`),bT(808,`Sagas and event handlers run in memory. If the process stops between an event and the command a saga dispatches, the command is never dispatched. A saga that combines several events, such as one that waits for the payment after an order and gives up after an hour, loses the events it has seen on a restart. An event published just before the transaction behind it rolls back still reaches them.`),cf(),Aa(809,`p`),bT(810,`When a process must survive restarts and deploys, let the events start and signal a `),Aa(811,`a`,38),bT(812,`durable workflow`),cf(),bT(813,` instead. The `),Aa(814,`code`),bT(815,`@nestjs/workflows/cqrs`),cf(),bT(816,` entry point maps events to workflows, so your code keeps executing commands and publishing events:`),cf(),Aa(817,`pre`)(818,`code`,20),bT(819,`
$ npm i --save @nestjs/workflows
`),cf()(),Aa(820,`app-copy-button`,23)(821,`span`,24),bT(822),LT(823,`extension`),Wa(824,`app-tabs`,null,11),cf(),Aa(826,`pre`)(827,`code`,21),bT(828,`
import { CqrsModule } from '@nestjs/cqrs';
import { WorkflowsModule } from '@nestjs/workflows';
import { WorkflowsCqrsModule } from '@nestjs/workflows/cqrs';

@Module({
  imports: [CqrsModule.forRoot(), WorkflowsModule.forRoot(), WorkflowsCqrsModule],
  providers: [PlaceOrderHandler, OrderFulfilmentWorkflow],
})
export class AppModule {}
`),cf()()(),Aa(829,`p`),bT(830,`Until you register a store, `),Aa(831,`code`),bT(832,`WorkflowsModule`),cf(),bT(833,` keeps the workflows in memory. On PostgreSQL or MySQL, register the package's `),Aa(834,`code`),bT(835,`PostgresWorkflowStore`),cf(),bT(836,` or `),Aa(837,`code`),bT(838,`MySqlWorkflowStore`),cf(),bT(839,` as a provider, on the database client you already use, as `),Aa(840,`a`,39),bT(841,`Keep workflows in your database`),cf(),bT(842,` shows: the workflows then live in your database, and their starts and signals can join your transactions.`),cf(),Aa(843,`p`)(844,`code`),bT(845,`@StartOn()`),cf(),bT(846,` starts the workflow when an event is published, and `),Aa(847,`code`),bT(848,`@SignalOn()`),cf(),bT(849,` wakes the instance that waits for another one:`),cf(),Aa(850,`app-copy-button`,23)(851,`span`,24),bT(852),LT(853,`extension`),Wa(854,`app-tabs`,null,12),cf(),Aa(856,`pre`)(857,`code`,21),bT(858,`
@Workflow('order-fulfilment')
@StartOn(OrderPlacedEvent, {
  id: (event) => \`order-\${event.order.id}\`,
  input: (event) => event.order,
})
@SignalOn(OrderDeliveredEvent, {
  signal: shipmentDelivered,
  key: (event) => event.delivery.reference,
})
export class OrderFulfilmentWorkflow implements WorkflowRunner<Order, FulfilmentResult> {
  constructor(private readonly commandBus: CommandBus) {}

  async run(ctx: WorkflowContext, order: Order): Promise<FulfilmentResult> {
    const charge = await ctx.step('charge-payment', ({ idempotencyKey }) =>
      this.commandBus.execute(new ChargePaymentCommand(order, idempotencyKey)),
    );

    const delivery = await ctx.waitForSignal('await-delivery', shipmentDelivered, {
      key: order.id,
      timeout: '3d',
    });
    // ...
  }
}
`),cf()()(),Aa(859,`p`),bT(860,`The command handler passes its transaction as the second argument of `),Aa(861,`code`),bT(862,`publish()`),cf(),bT(863,`, CQRS's dispatcher context. The workflow is then created in that transaction, so it exists if and only if the order was saved:`),cf(),Aa(864,`app-copy-button`,23)(865,`span`,24),bT(866),LT(867,`extension`),Wa(868,`app-tabs`,null,13),cf(),Aa(870,`pre`)(871,`code`,21),bT(872,`
return this.db.transaction(async (tx) => {
  await tx.insert(orders).values(order);
  await this.eventBus.publish(new OrderPlacedEvent(order), { transaction: tx });
  return order;
});
`),cf()()(),Aa(873,`p`),bT(874,`An aggregate's events go the same way. As of `),Aa(875,`code`),bT(876,`@nestjs/cqrs`),cf(),bT(877,` 12.1, pass the transaction to the aggregate's `),Aa(878,`code`),bT(879,`commit()`),cf(),bT(880,` in the same callback, and await it: it resolves once the workflows are started and signalled.`),cf(),Aa(881,`app-copy-button`)(882,`pre`)(883,`code`,21),bT(884,`
await order.commit({ transaction: tx });
`),cf()()(),Aa(885,`p`),bT(886,`The workflow's state lives in your database, so it outlives restarts and deploys. A completed step never runs again, and a step the process died in runs again with the same idempotency key, which the command hands to the payment provider. A repeated event finds the instance the first one started. Your event handlers and sagas still receive every event, after the workflows. See `),Aa(887,`a`,40),bT(888,`Durable workflows with CQRS`),cf(),bT(889,` for the guarantees of each way of publishing, and aggregates.`),cf(),Aa(890,`h4`,41)(891,`span`),bT(892,`Unhandled exceptions`),cf()(),Aa(893,`p`),bT(894,`Event handlers are executed asynchronously, so they must always handle exceptions properly to prevent the application from entering an inconsistent state. If an exception isn't handled, the `),Aa(895,`code`),bT(896,`EventBus`),cf(),bT(897,` logs it, creates an `),Aa(898,`code`),bT(899,`UnhandledExceptionInfo`),cf(),bT(900,` object, and pushes it to the `),Aa(901,`code`),bT(902,`UnhandledExceptionBus`),cf(),bT(903,` stream. The same applies to exceptions thrown by sagas and by command handlers executing commands that sagas dispatched. The `),Aa(904,`code`),bT(905,`UnhandledExceptionBus`),cf(),bT(906,` is an `),Aa(907,`code`),bT(908,`Observable`),cf(),bT(909,` that you can subscribe to in order to process unhandled exceptions. If the `),Aa(910,`code`),bT(911,`rethrowUnhandled`),cf(),bT(912,` option is set to `),Aa(913,`code`),bT(914,`true`),cf(),bT(915,`, these exceptions are rethrown instead of being published to the `),Aa(916,`code`),bT(917,`UnhandledExceptionBus`),cf(),bT(918,`.`),cf(),Aa(919,`app-copy-button`)(920,`pre`)(921,`code`,21),bT(922,`
private destroy$ = new Subject<void>();

constructor(private unhandledExceptionsBus: UnhandledExceptionBus) {
  this.unhandledExceptionsBus
    .pipe(takeUntil(this.destroy$))
    .subscribe((exceptionInfo) => {
      // Handle exception here
      // e.g. send it to external service, terminate process, or publish a new event
    });
}

onModuleDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
`),cf()()(),Aa(923,`p`),bT(924,`To handle only specific exception types, use the `),Aa(925,`code`),bT(926,`UnhandledExceptionBus.ofType()`),cf(),bT(927,` operator, which filters exceptions with `),Aa(928,`code`),bT(929,`instanceof`),cf(),bT(930,`:`),cf(),Aa(931,`app-copy-button`)(932,`pre`)(933,`code`,21),bT(934,`
this.unhandledExceptionsBus
  .pipe(
    takeUntil(this.destroy$),
    UnhandledExceptionBus.ofType(TransactionNotAllowedException),
  )
  .subscribe((exceptionInfo) => {
    // Handle exception here
  });
`),cf()()(),Aa(935,`p`),bT(936,`Here, only exceptions that are instances of `),Aa(937,`code`),bT(938,`TransactionNotAllowedException`),cf(),bT(939,` reach the subscriber.`),cf(),Aa(940,`p`),bT(941,`The `),Aa(942,`code`),bT(943,`UnhandledExceptionInfo`),cf(),bT(944,` object contains the following properties:`),cf(),Aa(945,`app-copy-button`)(946,`pre`)(947,`code`,21),bT(948,`
export interface UnhandledExceptionInfo<
  Cause = IEvent | ICommand,
  Exception = any,
> {
  /**
   * The exception that was thrown.
   */
  exception: Exception;
  /**
   * The cause of the exception (event or command reference).
   */
  cause: Cause;
}
`),cf()()(),Aa(949,`h4`,42)(950,`span`),bT(951,`Subscribing to all events`),cf()(),Aa(952,`p`)(953,`code`),bT(954,`CommandBus`),cf(),bT(955,`, `),Aa(956,`code`),bT(957,`QueryBus`),cf(),bT(958,`, and `),Aa(959,`code`),bT(960,`EventBus`),cf(),bT(961,` are all `),Aa(962,`strong`),bT(963,`Observables`),cf(),bT(964,`. This means you can subscribe to the entire stream and, for example, process all events: log them to the console or save them to an event store.`),cf(),Aa(965,`app-copy-button`)(966,`pre`)(967,`code`,21),bT(968,`
private destroy$ = new Subject<void>();

constructor(private eventBus: EventBus) {
  this.eventBus
    .pipe(takeUntil(this.destroy$))
    .subscribe((event) => {
      // Save events to database
    });
}

onModuleDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
`),cf()()(),Aa(969,`h4`,43)(970,`span`),bT(971,`Request-scoping`),cf()(),Aa(972,`p`),bT(973,`If you're coming from other programming languages, you may be surprised that in Nest, most things are shared across incoming requests: a connection pool to the database, singleton services with global state, and more. Node.js doesn't follow the request/response multi-threaded stateless model, in which each request is processed by a separate thread. As a result, using singleton instances is `),Aa(974,`strong`),bT(975,`safe`),cf(),bT(976,` for your applications.`),cf(),Aa(977,`p`),bT(978,`However, there are edge cases where a request-based lifetime for a handler is desirable, such as per-request caching in GraphQL applications, request tracking, or multi-tenancy. See the `),Aa(979,`a`,44),bT(980,`injection scopes`),cf(),bT(981,` chapter to learn how to control scopes.`),cf(),Aa(982,`p`),bT(983,`Using request-scoped providers alongside CQRS can be complex because the `),Aa(984,`code`),bT(985,`CommandBus`),cf(),bT(986,`, `),Aa(987,`code`),bT(988,`QueryBus`),cf(),bT(989,`, and `),Aa(990,`code`),bT(991,`EventBus`),cf(),bT(992,` are singletons. The `),Aa(993,`code`),bT(994,`@nestjs/cqrs`),cf(),bT(995,` package handles this by automatically creating a new instance of a request-scoped handler for each processed command, query, or event.`),cf(),Aa(996,`p`),bT(997,`To make a handler request-scoped, either:`),cf(),Aa(998,`ol`)(999,`li`),bT(1e3,`Depend on a request-scoped provider.`),cf(),Aa(1001,`li`),bT(1002,`Explicitly set its scope to `),Aa(1003,`code`),bT(1004,`REQUEST`),cf(),bT(1005,` in the `),Aa(1006,`code`),bT(1007,`@CommandHandler()`),cf(),bT(1008,`, `),Aa(1009,`code`),bT(1010,`@QueryHandler()`),cf(),bT(1011,`, or `),Aa(1012,`code`),bT(1013,`@EventsHandler()`),cf(),bT(1014,` decorator, as shown:`),cf()(),Aa(1015,`app-copy-button`)(1016,`pre`)(1017,`code`,21),bT(1018,`
@CommandHandler(KillDragonCommand, {
  scope: Scope.REQUEST,
})
export class KillDragonHandler {
  // Implementation here
}
`),cf()()(),Aa(1019,`p`),bT(1020,`To inject the request payload into a request-scoped provider, use the `),Aa(1021,`code`),bT(1022,`@Inject(REQUEST)`),cf(),bT(1023,` decorator (`),Aa(1024,`code`),bT(1025,`REQUEST`),cf(),bT(1026,` is exported from `),Aa(1027,`code`),bT(1028,`@nestjs/core`),cf(),bT(1029,`). In CQRS, however, the request payload depends on the context: it could be an HTTP request, a scheduled job, or any other operation that triggers a command.`),cf(),Aa(1030,`p`),bT(1031,`The payload must be an instance of `),Aa(1032,`code`),bT(1033,`AsyncContext`),cf(),bT(1034,` (exported from `),Aa(1035,`code`),bT(1036,`@nestjs/cqrs`),cf(),bT(1037,`) or of a class that extends it. It acts as the request context and holds data that is accessible throughout the request lifecycle.`),cf(),Aa(1038,`app-copy-button`)(1039,`pre`)(1040,`code`,21),bT(1041,`
import { AsyncContext } from '@nestjs/cqrs';

export class MyRequest extends AsyncContext {
  constructor(public readonly user: User) {
    super();
  }
}
`),cf()()(),Aa(1042,`p`),bT(1043,`When executing a command, pass the custom request context as the second argument to the `),Aa(1044,`code`),bT(1045,`CommandBus#execute()`),cf(),bT(1046,` method:`),cf(),Aa(1047,`app-copy-button`)(1048,`pre`)(1049,`code`,21),bT(1050,`
const myRequest = new MyRequest(user);
await this.commandBus.execute(
  new KillDragonCommand(heroId, killDragonDto.dragonId),
  myRequest,
);
`),cf()()(),Aa(1051,`p`),bT(1052,`This makes the `),Aa(1053,`code`),bT(1054,`MyRequest`),cf(),bT(1055,` instance available as the `),Aa(1056,`code`),bT(1057,`REQUEST`),cf(),bT(1058,` provider to the corresponding handler:`),cf(),Aa(1059,`app-copy-button`)(1060,`pre`)(1061,`code`,21),bT(1062,`
@CommandHandler(KillDragonCommand, {
  scope: Scope.REQUEST,
})
export class KillDragonHandler {
  constructor(
    @Inject(REQUEST) private request: MyRequest, // Inject the request context
  ) {}

  // Handler implementation here
}
`),cf()()(),Aa(1063,`p`),bT(1064,`Queries work the same way:`),cf(),Aa(1065,`app-copy-button`)(1066,`pre`)(1067,`code`,21),bT(1068,`
const myRequest = new MyRequest(user);
const hero = await this.queryBus.execute(new GetHeroQuery(heroId), myRequest);
`),cf()()(),Aa(1069,`p`),bT(1070,`And in the query handler:`),cf(),Aa(1071,`app-copy-button`)(1072,`pre`)(1073,`code`,21),bT(1074,`
@QueryHandler(GetHeroQuery, {
  scope: Scope.REQUEST,
})
export class GetHeroHandler {
  constructor(
    @Inject(REQUEST) private request: MyRequest, // Inject the request context
  ) {}

  // Handler implementation here
}
`),cf()()(),Aa(1075,`p`),bT(1076,`For events, you can pass the request context to `),Aa(1077,`code`),bT(1078,`EventBus#publish()`),cf(),bT(1079,`, but this is less common. Instead, use `),Aa(1080,`code`),bT(1081,`EventPublisher`),cf(),bT(1082,` to merge the request context into a model:`),cf(),Aa(1083,`app-copy-button`)(1084,`pre`)(1085,`code`,21),bT(1086,`
const hero = this.publisher.mergeObjectContext(
  await this.repository.findOneById(+heroId),
  this.request, // Inject the request context here
);
`),cf()()(),Aa(1087,`p`),bT(1088,`Request-scoped event handlers that handle these events have access to the request context.`),cf(),Aa(1089,`p`),bT(1090,`Sagas are always singletons because they manage long-running processes (registering a saga in a non-singleton provider throws an exception). However, you can retrieve the request context from event objects:`),cf(),Aa(1091,`app-copy-button`)(1092,`pre`)(1093,`code`,21),bT(1094,`
@Saga()
dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
  return events$.pipe(
    ofType(HeroKilledDragonEvent),
    map((event) => {
      const request = AsyncContext.of(event); // Retrieve the request context
      const command = new DropAncientItemCommand(event.heroId, fakeItemID);

      AsyncContext.merge(request, command); // Merge the request context into the command
      return command;
    }),
  );
}
`),cf()()(),Aa(1095,`p`),bT(1096,`Alternatively, call the `),Aa(1097,`code`),bT(1098,`request.attachTo(command)`),cf(),bT(1099,` method to attach the request context to the command.`),cf(),Aa(1100,`h4`,45)(1101,`span`),bT(1102,`Example`),cf()(),Aa(1103,`p`),bT(1104,`A working example is available in the `),Aa(1105,`a`,46),bT(1106,`nest-cqrs-example repository`),cf(),bT(1107,`.`),cf()(),Aa(1108,`a`,47),Wa(1109,`i`,48),Aa(1110,`span`),bT(1111,`Edit on GitHub`),cf()()()),c&2){let v=tT(156),w=tT(179),k=tT(237),I=tT(342),C=tT(405),T=tT(431),q=tT(454),P=tT(587),B=tT(664),N=tT(747),U=tT(825),D=tT(855),J=tT(869);zC(153),hf(` `,jT(154,51,`heroes-game.service`,v.isJsActive),`
`),zC(4),zy(`hide`,v.isJsActive),zC(3),zy(`hide`,!v.isJsActive),zC(16),hf(` `,jT(177,54,`kill-dragon.command`,w.isJsActive),`
`),zC(4),zy(`hide`,w.isJsActive),zC(3),zy(`hide`,!w.isJsActive),zC(24),Ky(`Promise<`,`{`,` actionId: string `,`}`,`>`),zC(27),hf(` `,jT(235,57,`kill-dragon.handler`,k.isJsActive),`
`),zC(4),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(98),hf(` `,jT(340,60,`get-hero.handler`,I.isJsActive),`
`),zC(4),zy(`hide`,I.isJsActive),zC(3),zy(`hide`,!I.isJsActive),zC(56),hf(` `,jT(403,63,`hero-killed-dragon.event`,C.isJsActive),`
`),zC(4),zy(`hide`,C.isJsActive),zC(3),zy(`hide`,!C.isJsActive),zC(19),hf(` `,jT(429,66,`hero.model`,T.isJsActive),`
`),zC(4),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive),zC(16),hf(` `,jT(452,69,`kill-dragon.handler`,q.isJsActive),`
`),zC(4),zy(`hide`,q.isJsActive),zC(3),zy(`hide`,!q.isJsActive),zC(126),hf(` `,jT(585,72,`dragon.model`,P.isJsActive),`
`),zC(4),zy(`hide`,P.isJsActive),zC(3),zy(`hide`,!P.isJsActive),zC(70),hf(` `,jT(662,75,`hero-killed-dragon.handler`,B.isJsActive),`
`),zC(83),hf(` `,jT(745,78,`heroes-game.saga`,N.isJsActive),`
`),zC(4),zy(`hide`,N.isJsActive),zC(3),zy(`hide`,!N.isJsActive),zC(71),hf(` `,jT(823,81,`app.module`,U.isJsActive),`
`),zC(30),hf(` `,jT(853,84,`order-fulfilment.workflow`,D.isJsActive),`
`),zC(14),hf(` `,jT(867,87,`place-order.handler`,J.isJsActive),`
`)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return d})();var Y=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-crud-generator`]],features:[xy],decls:132,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`crud-generator-typescript-only`],[`appAnchor`,``,`id`,`introduction`],[`routerLink`,`/cli/overview`],[1,`info`],[`appAnchor`,``,`id`,`generating-a-new-resource`],[1,`language-shell`],[1,`language-typescript`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/crud-generator.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`CRUD generator (TypeScript only)`),cf(),Aa(5,`p`),bT(6,`Over the lifespan of a project, building new features often means adding new resources to the application. Each new resource typically requires the same set of repetitive operations.`),cf(),Aa(7,`h4`,4)(8,`span`),bT(9,`Introduction`),cf()(),Aa(10,`p`),bT(11,`Consider a real-world scenario in which you need to expose CRUD endpoints for two entities, `),Aa(12,`strong`),bT(13,`User`),cf(),bT(14,` and `),Aa(15,`strong`),bT(16,`Product`),cf(),bT(17,`. Following best practices, you would have to perform several operations for each entity:`),cf(),Aa(18,`ul`)(19,`li`),bT(20,`Generate a module (`),Aa(21,`code`),bT(22,`nest g mo`),cf(),bT(23,`) to keep code organized and establish clear boundaries (grouping related components)`),cf(),Aa(24,`li`),bT(25,`Generate a controller (`),Aa(26,`code`),bT(27,`nest g co`),cf(),bT(28,`) to define CRUD routes (or queries/mutations for GraphQL applications)`),cf(),Aa(29,`li`),bT(30,`Generate a service (`),Aa(31,`code`),bT(32,`nest g s`),cf(),bT(33,`) to implement and isolate business logic`),cf(),Aa(34,`li`),bT(35,`Generate an entity class/interface to represent the resource data shape`),cf(),Aa(36,`li`),bT(37,`Generate Data Transfer Objects (or inputs for GraphQL applications) to define how the data will be sent over the network`),cf()(),Aa(38,`p`),bT(39,`To speed up this repetitive process, the `),Aa(40,`a`,5),bT(41,`Nest CLI`),cf(),bT(42,` provides a generator (schematic) that generates all of this boilerplate code automatically.`),cf(),Aa(43,`blockquote`,6)(44,`strong`),bT(45,`Note`),cf(),bT(46,` The schematic supports generating `),Aa(47,`strong`),bT(48,`HTTP`),cf(),bT(49,` controllers, `),Aa(50,`strong`),bT(51,`Microservice`),cf(),bT(52,` controllers, `),Aa(53,`strong`),bT(54,`GraphQL`),cf(),bT(55,` resolvers (both code first and schema first), and `),Aa(56,`strong`),bT(57,`WebSocket`),cf(),bT(58,` Gateways.
`),cf(),Aa(59,`h4`,7)(60,`span`),bT(61,`Generating a new resource`),cf()(),Aa(62,`p`),bT(63,`To create a new resource, run the following command in the root directory of your project:`),cf(),Aa(64,`pre`)(65,`code`,8),bT(66,`
$ nest g resource
`),cf()(),Aa(67,`p`),bT(68,`The `),Aa(69,`code`),bT(70,`nest g resource`),cf(),bT(71,` command generates not only the NestJS building blocks (module, service, and controller classes), but also an entity class, DTO classes, and the test (`),Aa(72,`code`),bT(73,`.spec`),cf(),bT(74,`) files.`),cf(),Aa(75,`p`),bT(76,`Here's the generated controller file (for a REST API):`),cf(),Aa(77,`app-copy-button`)(78,`pre`)(79,`code`,9),bT(80,`
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
`),cf()()(),Aa(81,`p`),bT(82,`The command also creates placeholders for all the CRUD endpoints: routes for REST APIs, queries and mutations for GraphQL, and message handlers for both microservices and WebSocket gateways.`),cf(),Aa(83,`blockquote`,6)(84,`strong`),bT(85,`Note`),cf(),bT(86,` Generated service classes are `),Aa(87,`strong`),bT(88,`not`),cf(),bT(89,` tied to any specific `),Aa(90,`strong`),bT(91,`ORM (or data source)`),cf(),bT(92,`, which makes the generator generic enough to meet the needs of any project. By default, all methods contain placeholders that you can populate with the data sources specific to your project.
`),cf(),Aa(93,`p`),bT(94,`Likewise, to generate resolvers for a GraphQL application, select `),Aa(95,`code`),bT(96,`GraphQL (code first)`),cf(),bT(97,` (or `),Aa(98,`code`),bT(99,`GraphQL (schema first)`),cf(),bT(100,`) as your transport layer.`),cf(),Aa(101,`p`),bT(102,`In this case, Nest generates a resolver class instead of a REST API controller:`),cf(),Aa(103,`pre`)(104,`code`,8),bT(105,`
$ nest g resource users

> ? What transport layer do you use? GraphQL (code first)
> ? Would you like to generate CRUD entry points? Yes
> CREATE src/users/users.module.ts (224 bytes)
> CREATE src/users/users.resolver.spec.ts (525 bytes)
> CREATE src/users/users.resolver.ts (1109 bytes)
> CREATE src/users/users.service.spec.ts (453 bytes)
> CREATE src/users/users.service.ts (625 bytes)
> CREATE src/users/dto/create-user.input.ts (195 bytes)
> CREATE src/users/dto/update-user.input.ts (281 bytes)
> CREATE src/users/entities/user.entity.ts (187 bytes)
> UPDATE src/app.module.ts (312 bytes)
`),cf()(),Aa(106,`blockquote`,6)(107,`strong`),bT(108,`Hint`),cf(),bT(109,` To skip generating test files, pass the `),Aa(110,`code`),bT(111,`--no-spec`),cf(),bT(112,` flag, as follows: `),Aa(113,`code`),bT(114,`nest g resource users --no-spec`),cf(),bT(115,`.
`),cf(),Aa(116,`p`),bT(117,`As shown below, the command not only creates all the boilerplate mutations and queries, but also wires everything together, using the `),Aa(118,`code`),bT(119,`UsersService`),cf(),bT(120,`, the `),Aa(121,`code`),bT(122,`User`),cf(),bT(123,` entity, and the DTOs.`),cf(),Aa(124,`app-copy-button`)(125,`pre`)(126,`code`,9),bT(127,`
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service.js';
import { User } from './entities/user.entity.js';
import { CreateUserInput } from './dto/create-user.input.js';
import { UpdateUserInput } from './dto/update-user.input.js';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
`),cf()()()(),Aa(128,`a`,10),Wa(129,`i`,11),Aa(130,`span`),bT(131,`Edit on GitHub`),cf()()())},dependencies:[Lt,Jc,ln],encapsulation:2})}return d})();var V=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-hot-reload`]],features:[xy],decls:305,vars:4,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`hot-reload`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/webpack/webpack`],[1,`warning`],[`id`,`with-cli`],[`routerLink`,`/cli/overview`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[1,`info`],[`appAnchor`,``,`id`,`configuration`],[1,`language-typescript`],[`appAnchor`,``,`id`,`hot-module-replacement`],[1,`language-json`],[`id`,`without-cli`],[`appAnchor`,``,`id`,`installation-1`],[`appAnchor`,``,`id`,`configuration-1`],[`appAnchor`,``,`id`,`hot-module-replacement-1`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/08-webpack`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/hot-reload.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Hot Reload`),cf(),Aa(5,`p`)(6,`strong`),bT(7,`TypeScript compilation`),cf(),bT(8,` has the biggest impact on your application's bootstrapping time. With `),Aa(9,`a`,4),bT(10,`webpack`),cf(),bT(11,` HMR (Hot-Module Replacement), you don't need to recompile the entire project each time a change occurs. This significantly decreases the time it takes to instantiate your application and makes iterative development much faster.`),cf(),Aa(12,`blockquote`,5)(13,`strong`),bT(14,`Warning`),cf(),Aa(15,`code`),bT(16,`webpack`),cf(),bT(17,` doesn't automatically copy your assets (e.g., `),Aa(18,`code`),bT(19,`graphql`),cf(),bT(20,` files) to the `),Aa(21,`code`),bT(22,`dist`),cf(),bT(23,` folder. Similarly, `),Aa(24,`code`),bT(25,`webpack`),cf(),bT(26,` isn't compatible with static glob paths (e.g., the `),Aa(27,`code`),bT(28,`entities`),cf(),bT(29,` property in `),Aa(30,`code`),bT(31,`TypeOrmModule`),cf(),bT(32,`).
`),cf(),Aa(33,`blockquote`,5)(34,`strong`),bT(35,`Warning`),cf(),bT(36,` As of NestJS v12, the webpack builder is `),Aa(37,`strong`),bT(38,`deprecated`),cf(),bT(39,` and Rspack is the default bundler for monorepos. This recipe targets webpack-based CommonJS projects, which is why the examples below use `),Aa(40,`code`),bT(41,`module.hot`),cf(),bT(42,` and a plain `),Aa(43,`code`),bT(44,`bootstrap()`),cf(),bT(45,` call rather than the ESM top-level `),Aa(46,`code`),bT(47,`await`),cf(),bT(48,` used elsewhere in these docs. For new projects, prefer `),Aa(49,`code`),bT(50,`--builder rspack`),cf(),bT(51,`.
`),cf(),Aa(52,`h3`,6),bT(53,`With CLI`),cf(),Aa(54,`p`),bT(55,`If you use the `),Aa(56,`a`,7),bT(57,`Nest CLI`),cf(),bT(58,`, the configuration process is straightforward. The CLI wraps `),Aa(59,`code`),bT(60,`webpack`),cf(),bT(61,`, which lets you use the `),Aa(62,`code`),bT(63,`HotModuleReplacementPlugin`),cf(),bT(64,`.`),cf(),Aa(65,`h4`,8)(66,`span`),bT(67,`Installation`),cf()(),Aa(68,`p`),bT(69,`First, install the required packages:`),cf(),Aa(70,`pre`)(71,`code`,9),bT(72,`
$ npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack
`),cf()(),Aa(73,`blockquote`,10)(74,`strong`),bT(75,`Hint`),cf(),bT(76,` If you use `),Aa(77,`strong`),bT(78,`Yarn Berry`),cf(),bT(79,` (not classic Yarn), install the `),Aa(80,`code`),bT(81,`webpack-pnp-externals`),cf(),bT(82,` package instead of `),Aa(83,`code`),bT(84,`webpack-node-externals`),cf(),bT(85,`.
`),cf(),Aa(86,`h4`,11)(87,`span`),bT(88,`Configuration`),cf()(),Aa(89,`p`),bT(90,`Once the installation is complete, create a `),Aa(91,`code`),bT(92,`webpack-hmr.config.js`),cf(),bT(93,` file in the root directory of your application:`),cf(),Aa(94,`app-copy-button`)(95,`pre`)(96,`code`,12),bT(97,`
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\\.js$/, /\\.d\\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename, autoRestart: false }),
    ],
  };
};
`),cf()()(),Aa(98,`blockquote`,10)(99,`strong`),bT(100,`Hint`),cf(),bT(101,` With `),Aa(102,`strong`),bT(103,`Yarn Berry`),cf(),bT(104,` (not classic Yarn), instead of using `),Aa(105,`code`),bT(106,`nodeExternals`),cf(),bT(107,` in the `),Aa(108,`code`),bT(109,`externals`),cf(),bT(110,` configuration property, use `),Aa(111,`code`),bT(112,`WebpackPnpExternals`),cf(),bT(113,` from the `),Aa(114,`code`),bT(115,`webpack-pnp-externals`),cf(),bT(116,` package: `),Aa(117,`code`),bT(118),cf(),bT(119,`.
`),cf(),Aa(120,`p`),bT(121,`This function takes the original object containing the default webpack configuration as its first argument, and a reference to the underlying `),Aa(122,`code`),bT(123,`webpack`),cf(),bT(124,` package used by the Nest CLI as its second argument. It returns a modified webpack configuration with the `),Aa(125,`code`),bT(126,`HotModuleReplacementPlugin`),cf(),bT(127,`, `),Aa(128,`code`),bT(129,`WatchIgnorePlugin`),cf(),bT(130,`, and `),Aa(131,`code`),bT(132,`RunScriptWebpackPlugin`),cf(),bT(133,` plugins.`),cf(),Aa(134,`h4`,13)(135,`span`),bT(136,`Hot-Module Replacement`),cf()(),Aa(137,`p`),bT(138,`To enable `),Aa(139,`strong`),bT(140,`HMR`),cf(),bT(141,`, open the application entry file (`),Aa(142,`code`),bT(143,`main.ts`),cf(),bT(144,`) and add the following webpack-related instructions:`),cf(),Aa(145,`app-copy-button`)(146,`pre`)(147,`code`,12),bT(148,`
declare const module: any;

async function bootstrap() {
  if (module.hot?.data?.closePromise) {
    // wait for the previous application instance to fully shut down
    await module.hot.data.closePromise;
  }

  const app = await NestFactory.create(AppModule, {
    forceCloseConnections: !!module.hot,
  });
  await app.listen(process.env.PORT ?? 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose((data: any) => {
      data.closePromise = app.close();
    });
  }
}
bootstrap();
`),cf()()(),Aa(149,`blockquote`,10)(150,`strong`),bT(151,`Hint`),cf(),Aa(152,`code`),bT(153,`app.close()`),cf(),bT(154,` is asynchronous, but webpack does not await the `),Aa(155,`code`),bT(156,`dispose()`),cf(),bT(157,` callback. Stashing the returned promise on `),Aa(158,`code`),bT(159,`module.hot.data`),cf(),bT(160,` lets the next application instance await it before binding to the port again, which (together with `),Aa(161,`code`),bT(162,`forceCloseConnections`),cf(),bT(163,`) prevents `),Aa(164,`code`),bT(165,`EADDRINUSE`),cf(),bT(166,` errors on reload.
`),cf(),Aa(167,`p`),bT(168,`To simplify the execution process, add a script to your `),Aa(169,`code`),bT(170,`package.json`),cf(),bT(171,` file:`),cf(),Aa(172,`pre`)(173,`code`,14),bT(174,`
"start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch"
`),cf()(),Aa(175,`p`),bT(176,`Then run the following command:`),cf(),Aa(177,`pre`)(178,`code`,9),bT(179,`
$ npm run start:dev
`),cf()(),Aa(180,`h3`,15),bT(181,`Without CLI`),cf(),Aa(182,`p`),bT(183,`If you don't use the `),Aa(184,`a`,7),bT(185,`Nest CLI`),cf(),bT(186,`, the configuration is slightly more complex and requires more manual steps.`),cf(),Aa(187,`h4`,16)(188,`span`),bT(189,`Installation`),cf()(),Aa(190,`p`),bT(191,`First, install the required packages:`),cf(),Aa(192,`pre`)(193,`code`,9),bT(194,`
$ npm i --save-dev webpack webpack-cli webpack-node-externals ts-loader run-script-webpack-plugin
`),cf()(),Aa(195,`blockquote`,10)(196,`strong`),bT(197,`Hint`),cf(),bT(198,` If you use `),Aa(199,`strong`),bT(200,`Yarn Berry`),cf(),bT(201,` (not classic Yarn), install the `),Aa(202,`code`),bT(203,`webpack-pnp-externals`),cf(),bT(204,` package instead of `),Aa(205,`code`),bT(206,`webpack-node-externals`),cf(),bT(207,`.
`),cf(),Aa(208,`h4`,17)(209,`span`),bT(210,`Configuration`),cf()(),Aa(211,`p`),bT(212,`Once the installation is complete, create a `),Aa(213,`code`),bT(214,`webpack.config.js`),cf(),bT(215,` file in the root directory of your application:`),cf(),Aa(216,`app-copy-button`)(217,`pre`)(218,`code`,12),bT(219,`
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = {
  entry: ['webpack/hot/poll?100', './src/main.ts'],
  target: 'node',
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new RunScriptWebpackPlugin({ name: 'server.js', autoRestart: false })],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
};
`),cf()()(),Aa(220,`blockquote`,10)(221,`strong`),bT(222,`Hint`),cf(),bT(223,` With `),Aa(224,`strong`),bT(225,`Yarn Berry`),cf(),bT(226,` (not classic Yarn), instead of using `),Aa(227,`code`),bT(228,`nodeExternals`),cf(),bT(229,` in the `),Aa(230,`code`),bT(231,`externals`),cf(),bT(232,` configuration property, use `),Aa(233,`code`),bT(234,`WebpackPnpExternals`),cf(),bT(235,` from the `),Aa(236,`code`),bT(237,`webpack-pnp-externals`),cf(),bT(238,` package: `),Aa(239,`code`),bT(240),cf(),bT(241,`.
`),cf(),Aa(242,`p`),bT(243,`This configuration tells webpack a few essential things about your application: the location of the entry file, the directory that holds the `),Aa(244,`strong`),bT(245,`compiled`),cf(),bT(246,` files, and the loader used to compile source files. You can generally use this file as-is, even if you don't fully understand all of the options.`),cf(),Aa(247,`h4`,18)(248,`span`),bT(249,`Hot-Module Replacement`),cf()(),Aa(250,`p`),bT(251,`To enable `),Aa(252,`strong`),bT(253,`HMR`),cf(),bT(254,`, open the application entry file (`),Aa(255,`code`),bT(256,`main.ts`),cf(),bT(257,`) and add the following webpack-related instructions:`),cf(),Aa(258,`app-copy-button`)(259,`pre`)(260,`code`,12),bT(261,`
declare const module: any;

async function bootstrap() {
  if (module.hot?.data?.closePromise) {
    // wait for the previous application instance to fully shut down
    await module.hot.data.closePromise;
  }

  const app = await NestFactory.create(AppModule, {
    forceCloseConnections: !!module.hot,
  });
  await app.listen(process.env.PORT ?? 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose((data: any) => {
      data.closePromise = app.close();
    });
  }
}
bootstrap();
`),cf()()(),Aa(262,`blockquote`,10)(263,`strong`),bT(264,`Hint`),cf(),Aa(265,`code`),bT(266,`app.close()`),cf(),bT(267,` is asynchronous, but webpack does not await the `),Aa(268,`code`),bT(269,`dispose()`),cf(),bT(270,` callback. Stashing the returned promise on `),Aa(271,`code`),bT(272,`module.hot.data`),cf(),bT(273,` lets the next application instance await it before binding to the port again, which (together with `),Aa(274,`code`),bT(275,`forceCloseConnections`),cf(),bT(276,`) prevents `),Aa(277,`code`),bT(278,`EADDRINUSE`),cf(),bT(279,` errors on reload.
`),cf(),Aa(280,`p`),bT(281,`To simplify the execution process, add a script to your `),Aa(282,`code`),bT(283,`package.json`),cf(),bT(284,` file:`),cf(),Aa(285,`pre`)(286,`code`,14),bT(287,`
"start:dev": "webpack --config webpack.config.js --watch"
`),cf()(),Aa(288,`p`),bT(289,`Then run the following command:`),cf(),Aa(290,`pre`)(291,`code`,9),bT(292,`
$ npm run start:dev
`),cf()(),Aa(293,`h4`,19)(294,`span`),bT(295,`Example`),cf()(),Aa(296,`p`),bT(297,`A working example is available in the `),Aa(298,`a`,20),bT(299,`webpack sample`),cf(),bT(300,` on GitHub.`),cf()(),Aa(301,`a`,21),Wa(302,`i`,22),Aa(303,`span`),bT(304,`Edit on GitHub`),cf()()()),c&2&&(zC(118),Ky(`WebpackPnpExternals(`,`{`,` exclude: ['webpack/hot/poll?100'] `,`}`,`)`),zC(122),Ky(`WebpackPnpExternals(`,`{`,` exclude: ['webpack/hot/poll?100'] `,`}`,`)`))},dependencies:[Jc,Lt,ln],encapsulation:2})}return d})();var X=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-repl`]],features:[xy],decls:217,vars:8,consts:[[`contentReference`,``],[`appd34c2784856136a56a06d662db5cbceed694d10c`,``],[1,`content`],[1,`content-inner`],[`id`,`read-eval-print-loop-repl`],[`appAnchor`,``,`id`,`usage`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`language-bash`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/repl.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/repl.html#replstartoptions`],[`src`,`/assets/repl.gif`,`alt`,`REPL example`],[`appAnchor`,``,`id`,`native-functions`],[1,`language-text`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions`],[`appAnchor`,``,`id`,`watch-mode`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/repl.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Read-Eval-Print-Loop (REPL)`),cf(),Aa(5,`p`),bT(6,`A REPL is an interactive environment that takes single user inputs, executes them, and returns the result to the user. The REPL feature lets you inspect your dependency graph and call methods on your providers (and controllers) directly from your terminal.`),cf(),Aa(7,`h4`,5)(8,`span`),bT(9,`Usage`),cf()(),Aa(10,`p`),bT(11,`To run your NestJS application in REPL mode, create a new `),Aa(12,`code`),bT(13,`repl.ts`),cf(),bT(14,` file (alongside the existing `),Aa(15,`code`),bT(16,`main.ts`),cf(),bT(17,` file) and add the following code:`),cf(),Aa(18,`app-copy-button`,6)(19,`span`,7),bT(20),LT(21,`extension`),Wa(22,`app-tabs`,null,1),cf(),Aa(24,`pre`)(25,`code`,8),bT(26,`
import { repl } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  await repl(AppModule);
}
await bootstrap();
`),cf()(),Aa(27,`pre`)(28,`code`,8),bT(29,`
import { repl } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  await repl(AppModule);
}
await bootstrap();
`),cf()()(),Aa(30,`p`),bT(31,`Then start the REPL from your terminal with the following command:`),cf(),Aa(32,`pre`)(33,`code`,9),bT(34,`
$ npm run start -- --entryFile repl
`),cf()(),Aa(35,`blockquote`,10)(36,`strong`),bT(37,`Hint`),cf(),bT(38,` The `),Aa(39,`code`),bT(40,`repl()`),cf(),bT(41,` function returns a promise that resolves to a `),Aa(42,`a`,11),bT(43,`Node.js REPL server`),cf(),bT(44,` object. You can pass `),Aa(45,`a`,12),bT(46,`Node.js REPL options`),cf(),bT(47,` as its second argument.
`),cf(),Aa(48,`p`),bT(49,`Once it's running, you should see the following messages in your console:`),cf(),Aa(50,`pre`)(51,`code`,9),bT(52,`
LOG [NestFactory] Starting Nest application...
LOG [InstanceLoader] AppModule dependencies initialized
LOG REPL initialized
`),cf()(),Aa(53,`p`),bT(54,`You can now interact with your dependency graph. For instance, you can retrieve the `),Aa(55,`code`),bT(56,`AppService`),cf(),bT(57,` instance (this example uses the starter project) and call its `),Aa(58,`code`),bT(59,`getHello()`),cf(),bT(60,` method:`),cf(),Aa(61,`app-copy-button`)(62,`pre`)(63,`code`,8),bT(64,`
> get(AppService).getHello()
'Hello World!'
`),cf()()(),Aa(65,`p`),bT(66,`You can execute any JavaScript code from your terminal. For example, you can assign the `),Aa(67,`code`),bT(68,`AppController`),cf(),bT(69,` instance to a local variable and use `),Aa(70,`code`),bT(71,`await`),cf(),bT(72,` to call an asynchronous method:`),cf(),Aa(73,`app-copy-button`)(74,`pre`)(75,`code`,8),bT(76,`
> appController = get(AppController)
AppController { appService: AppService {} }
> await appController.getHello()
'Hello World!'
`),cf()()(),Aa(77,`p`),bT(78,`To display all public methods available on a given provider or controller, use the `),Aa(79,`code`),bT(80,`methods()`),cf(),bT(81,` function, as follows:`),cf(),Aa(82,`app-copy-button`)(83,`pre`)(84,`code`,8),bT(85,`
> methods(AppController)

Methods:
 \u25FB getHello
`),cf()()(),Aa(86,`p`),bT(87,`To print all registered modules as a list, together with their controllers and providers, use `),Aa(88,`code`),bT(89,`debug()`),cf(),bT(90,`:`),cf(),Aa(91,`app-copy-button`)(92,`pre`)(93,`code`,8),bT(94,`
> debug()

AppModule:
 - controllers:
  \u25FB AppController
 - providers:
  \u25FB AppService
`),cf()()(),Aa(95,`p`),bT(96,`Here's a quick demo:`),cf(),Aa(97,`figure`),Wa(98,`img`,13),cf(),Aa(99,`p`),bT(100,`The following section describes the built-in native functions in more detail.`),cf(),Aa(101,`h4`,14)(102,`span`),bT(103,`Native functions`),cf()(),Aa(104,`p`),bT(105,`The built-in NestJS REPL comes with a few native functions that are globally available when you start the REPL. Call `),Aa(106,`code`),bT(107,`help()`),cf(),bT(108,` to list them.`),cf(),Aa(109,`p`),bT(110,`If you don't remember the signature (i.e., the expected parameters and return type) of a function, use `),Aa(111,`code`),bT(112,`<function_name>.help`),cf(),bT(113,`. For instance:`),cf(),Aa(114,`pre`)(115,`code`,15),bT(116,`
> $.help
Retrieves an instance of either injectable or controller, otherwise, throws exception.
Interface: $(token: InjectionToken) => any
`),cf()(),Aa(117,`blockquote`,10)(118,`strong`),bT(119,`Hint`),cf(),bT(120,` These function interfaces are written in `),Aa(121,`a`,16),bT(122,`TypeScript function type expression syntax`),cf(),bT(123,`.
`),cf(),Aa(124,`table`)(125,`thead`)(126,`tr`)(127,`th`),bT(128,`Function`),cf(),Aa(129,`th`),bT(130,`Description`),cf(),Aa(131,`th`),bT(132,`Signature`),cf()()(),Aa(133,`tbody`)(134,`tr`)(135,`td`)(136,`code`),bT(137,`debug`),cf()(),Aa(138,`td`),bT(139,`Prints all registered modules as a list, together with their controllers and providers. Pass a module (e.g., `),Aa(140,`code`),bT(141,`debug(MyModule)`),cf(),bT(142,`) to print only that module's components.`),cf(),Aa(143,`td`)(144,`code`),bT(145,`debug(moduleCls?: ClassRef | string) => void`),cf()()(),Aa(146,`tr`)(147,`td`)(148,`code`),bT(149,`get`),cf(),bT(150,` or `),Aa(151,`code`),bT(152,`$`),cf()(),Aa(153,`td`),bT(154,`Retrieves an instance of a provider or controller; throws an exception if it can't be found.`),cf(),Aa(155,`td`)(156,`code`),bT(157,`get(token: InjectionToken) => any`),cf()()(),Aa(158,`tr`)(159,`td`)(160,`code`),bT(161,`help`),cf()(),Aa(162,`td`),bT(163,`Displays all available REPL native functions.`),cf(),Aa(164,`td`)(165,`code`),bT(166,`help() => void`),cf()()(),Aa(167,`tr`)(168,`td`)(169,`code`),bT(170,`methods`),cf()(),Aa(171,`td`),bT(172,`Displays all public methods available on a given provider or controller.`),cf(),Aa(173,`td`)(174,`code`),bT(175,`methods(token: ClassRef | string) => void`),cf()()(),Aa(176,`tr`)(177,`td`)(178,`code`),bT(179,`resolve`),cf()(),Aa(180,`td`),bT(181,`Resolves a transient or request-scoped instance of a provider or controller; throws an exception if it can't be found.`),cf(),Aa(182,`td`)(183,`code`),bT(184,`resolve(token: InjectionToken, contextId: any) => Promise<any>`),cf()()(),Aa(185,`tr`)(186,`td`)(187,`code`),bT(188,`select`),cf()(),Aa(189,`td`),bT(190,`Navigates through the modules tree, for example, to pull out a specific instance from the selected module.`),cf(),Aa(191,`td`)(192,`code`),bT(193,`select(token: DynamicModule | ClassRef) => INestApplicationContext`),cf()()()()(),Aa(194,`h4`,17)(195,`span`),bT(196,`Watch mode`),cf()(),Aa(197,`p`),bT(198,`During development, it's useful to run the REPL in watch mode so that code changes are reflected automatically:`),cf(),Aa(199,`pre`)(200,`code`,9),bT(201,`
$ npm run start -- --watch --entryFile repl
`),cf()(),Aa(202,`p`),bT(203,`The downside is that the REPL's command history is discarded after each reload. To preserve it, modify your `),Aa(204,`code`),bT(205,`bootstrap()`),cf(),bT(206,` function as follows:`),cf(),Aa(207,`app-copy-button`)(208,`pre`)(209,`code`,8),bT(210,`
async function bootstrap() {
  const replServer = await repl(AppModule);
  replServer.setupHistory(".nestjs_repl_history", (err) => {
    if (err) {
      console.error(err);
    }
  });
}
`),cf()()(),Aa(211,`p`),bT(212,`The history is now preserved between runs and reloads.`),cf()(),Aa(213,`a`,18),Wa(214,`i`,19),Aa(215,`span`),bT(216,`Edit on GitHub`),cf()()()),c&2){let v=tT(23);zC(20),hf(` `,jT(21,5,`repl`,v.isJsActive),`
`),zC(4),zy(`hide`,v.isJsActive),zC(3),zy(`hide`,!v.isJsActive)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return d})();var Z=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-serve-static`]],features:[xy],decls:99,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`serve-static`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.npmjs.com/package/@nestjs/serve-static`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`bootstrap`],[1,`language-typescript`],[`appAnchor`,``,`id`,`configuration`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/serve-static`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/serve-static/blob/master/lib/interfaces/serve-static-options.interface.ts`],[1,`warning`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/24-serve-static`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/serve-static.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Serve Static`),cf(),Aa(5,`p`),bT(6,`To serve static content, such as a single-page application (SPA), use the `),Aa(7,`code`),bT(8,`ServeStaticModule`),cf(),bT(9,` from the `),Aa(10,`a`,4)(11,`code`),bT(12,`@nestjs/serve-static`),cf()(),bT(13,` package.`),cf(),Aa(14,`h4`,5)(15,`span`),bT(16,`Installation`),cf()(),Aa(17,`p`),bT(18,`First, install the required package:`),cf(),Aa(19,`pre`)(20,`code`,6),bT(21,`
$ npm install --save @nestjs/serve-static
`),cf()(),Aa(22,`h4`,7)(23,`span`),bT(24,`Bootstrap`),cf()(),Aa(25,`p`),bT(26,`Once the installation is complete, import the `),Aa(27,`code`),bT(28,`ServeStaticModule`),cf(),bT(29,` into the root `),Aa(30,`code`),bT(31,`AppModule`),cf(),bT(32,` and configure it by passing a configuration object to the `),Aa(33,`code`),bT(34,`forRoot()`),cf(),bT(35,` method:`),cf(),Aa(36,`app-copy-button`)(37,`pre`)(38,`code`,8),bT(39,`
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(import.meta.dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
`),cf()()(),Aa(40,`p`),bT(41,`With this in place, build the static website and place its content in the location specified by the `),Aa(42,`code`),bT(43,`rootPath`),cf(),bT(44,` property.`),cf(),Aa(45,`h4`,9)(46,`span`),bT(47,`Configuration`),cf()(),Aa(48,`p`),bT(49,`The `),Aa(50,`a`,10)(51,`code`),bT(52,`ServeStaticModule`),cf()(),bT(53,` accepts a variety of options to customize its behavior. For example, you can set the path at which the static app is rendered, exclude specific paths, or enable or disable the `),Aa(54,`code`),bT(55,`Cache-Control`),cf(),bT(56,` response header. See the `),Aa(57,`a`,11)(58,`code`),bT(59,`ServeStaticModuleOptions`),cf(),bT(60,` interface`),cf(),bT(61,` for the full list of options.`),cf(),Aa(62,`blockquote`,12)(63,`strong`),bT(64,`Notice`),cf(),bT(65,` By default, `),Aa(66,`code`),bT(67,`renderPath`),cf(),bT(68,` matches all paths, and the module responds with the `),Aa(69,`code`),bT(70,`index.html`),cf(),bT(71,` file. This enables client-side routing for your SPA, while routes declared in your controllers are still handled by the server. You can change this behavior by combining the `),Aa(72,`code`),bT(73,`serveRoot`),cf(),bT(74,` and `),Aa(75,`code`),bT(76,`renderPath`),cf(),bT(77,` options with the other options. With the Fastify adapter, set `),Aa(78,`code`),bT(79,`serveStaticOptions.fallthrough`),cf(),bT(80,` to `),Aa(81,`code`),bT(82,`true`),cf(),bT(83,` to mimic the Express fallthrough behavior, i.e., to send `),Aa(84,`code`),bT(85,`index.html`),cf(),bT(86,` instead of a 404 error for routes that don't exist.
`),cf(),Aa(87,`h4`,13)(88,`span`),bT(89,`Example`),cf()(),Aa(90,`p`),bT(91,`A working example is available in the `),Aa(92,`a`,14),bT(93,`serve-static sample`),cf(),bT(94,` on GitHub.`),cf()(),Aa(95,`a`,15),Wa(96,`i`,16),Aa(97,`span`),bT(98,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln],encapsulation:2})}return d})();var ee=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-nextjs`]],features:[xy],decls:762,vars:78,consts:[[`contentReference`,``],[`app514243bbdb294af99c926518fc20c4e5d44f0b0a`,``],[`app789a4a43375c57ca6aa7b48f03cefa7a190e701c`,``],[`appbf0119b24e3d89e38ad23fa65e15f5dd7fb042a4`,``],[`app0eb16bd7ea8226e3892adf45f61abd4ef782c526`,``],[`app3a3ed1b8bfc36397111c52682668e11206a9c1bc`,``],[`appa7e68d824234b757f25735352a5454c200bb957e`,``],[`appab8f65b68c683a1b6d75c63ffa0a5d1c16e7a787`,``],[`appd89a1d67075d6333b476eb80a98123f2f2642428`,``],[`appeb134ccc9ba3058631eb80ce506dd18343e3e60d`,``],[`app8780b2aaca2f94a71ebcac860ef628f654ddeea9`,``],[`app6be346f8e31da801136552cd05a39ac82403223b`,``],[`appb0639443603cb86b95c66300f92635a766268434`,``],[`app9f76de2bca632338d70620c38fed7c4dcb56fbb5`,``],[`app1ee48c3c50249478b6efa9ca95bbdff09e4b5266`,``],[`appb09443d2890b69c2fc4a1c46bd461a3258d7febf`,``],[`app6c5911bd303ffdcbfd59eeda2d4af65a2f72f20f`,``],[`appf4d3b9375d01f662a92ad37e77f9bb16403531da`,``],[`appd127530cf90b2e820f21bc0a4bd2f2eab5d2155b`,``],[1,`content`],[1,`content-inner`],[`id`,`nextjs`],[`href`,`/recipes/nextjs#migrate-a-nextjs-backend-to-nest`],[`appAnchor`,``,`id`,`project-layout`],[1,`language-bash`],[1,`with-heading`],[1,`filename`],[1,`language-json`],[1,`language-typescript`],[`appAnchor`,``,`id`,`send-api-to-nest`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites`],[`routerLink`,`/security/cors`],[1,`warning`],[`routerLink`,`/http/webhooks`],[`routerLink`,`/http/server-sent-events`],[`routerLink`,`/websockets/gateways`],[`href`,`/security/rate-limiting`],[`appAnchor`,``,`id`,`share-schemas-between-the-apps`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev/`],[`href`,`/application/validation#schema-based-validation`],[`appAnchor`,``,`id`,`sign-users-in`],[`href`,`/security/authentication`],[`appAnchor`,``,`id`,`call-nest-from-the-nextjs-server`],[`appAnchor`,``,`id`,`migrate-a-nextjs-backend-to-nest`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nextjs.org/docs/app/guides/backend-for-frontend`],[`appAnchor`,``,`id`,`why-it-can-be-simpler`],[`routerLink`,`/security/authentication`],[`appAnchor`,``,`id`,`what-goes-where`],[`routerLink`,`/controllers`],[`routerLink`,`/providers`],[`href`,`/security/authorization`],[`href`,`/http/webhooks`],[`href`,`/application/task-scheduling`],[`routerLink`,`/application/queues`],[`href`,`/application/mail`],[`appAnchor`,``,`id`,`move-one-route`],[`href`,`/recipes/express-migration#keep-what-would-change-without-an-error`],[`appAnchor`,``,`id`,`move-queries-out-of-pages`],[`appAnchor`,``,`id`,`deployment`],[`routerLink`,`/deployment`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://vercel.com/docs/frameworks/backend/nestjs`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/nextjs.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,19,0)(2,`div`,20)(3,`h3`,21),bT(4,`Next.js`),cf(),Aa(5,`p`),bT(6,`A Next.js application can use Nest as its backend: one repository, one origin for the browser, and request schemas shared by both applications.`),cf(),Aa(7,`p`),bT(8,`Route handlers and Server Actions are enough for a small backend. As it grows, with background jobs, webhooks, a public API, a mobile client or a team of its own, it needs the structure that Nest gives it: modules, dependency injection, guards, and validation on every route. Next.js keeps rendering, and Nest takes over everything behind it:`),cf(),Aa(9,`table`)(10,`thead`)(11,`tr`)(12,`th`),bT(13,`Next.js`),cf(),Aa(14,`th`),bT(15,`Nest`),cf()()(),Aa(16,`tbody`)(17,`tr`)(18,`td`),bT(19,`Pages, layouts and Server Components`),cf(),Aa(20,`td`),bT(21,`The API, and the business rules behind it`),cf()(),Aa(22,`tr`)(23,`td`),bT(24,`Forms, and the state of the browser`),cf(),Aa(25,`td`),bT(26,`Validating what the forms send`),cf()(),Aa(27,`tr`)(28,`td`),bT(29,`Fetching data to render it`),cf(),Aa(30,`td`),bT(31,`The database, and every other data source`),cf()(),Aa(32,`tr`),Wa(33,`td`),Aa(34,`td`),bT(35,`Sign-in, permissions, webhooks, queues, scheduled jobs`),cf()(),Aa(36,`tr`),Wa(37,`td`),Aa(38,`td`),bT(39,`Other clients, such as a mobile app`),cf()()()(),Aa(40,`p`),bT(41,`This page sets up a Nest application next to a Next.js one, and then moves a backend from one to the other:`),cf(),Aa(42,`ul`)(43,`li`),bT(44,`Both live in one repository, as npm workspaces.`),cf(),Aa(45,`li`),bT(46,`The browser calls `),Aa(47,`code`),bT(48,`/api`),cf(),bT(49,` on the Next.js origin, and Next.js passes the request on to Nest, so cookies work without CORS.`),cf(),Aa(50,`li`),bT(51,`Zod schemas in a shared package validate a form in the browser and the same request in Nest.`),cf(),Aa(52,`li`),bT(53,`The route handlers you already have keep answering, and `),Aa(54,`a`,22),bT(55,`move to Nest`),cf(),bT(56,` one at a time.`),cf()(),Aa(57,`h4`,23)(58,`span`),bT(59,`Project layout`),cf()(),Aa(60,`pre`)(61,`code`,24),bT(62,`
acme/
\u251C\u2500\u2500 apps/
\u2502   \u251C\u2500\u2500 api/          # Nest
\u2502   \u2514\u2500\u2500 web/          # Next.js
\u251C\u2500\u2500 packages/
\u2502   \u2514\u2500\u2500 contracts/    # schemas and types both apps use
\u2514\u2500\u2500 package.json
`),cf()(),Aa(63,`p`),bT(64,`The root `),Aa(65,`code`),bT(66,`package.json`),cf(),bT(67,` declares the workspaces:`),cf(),Aa(68,`app-copy-button`,25)(69,`span`,26),bT(70),LT(71,`extension`),Wa(72,`app-tabs`,null,1),cf(),Aa(74,`pre`)(75,`code`,27),bT(76,`
{
  "name": "acme",
  "private": true,
  "workspaces": ["apps/*", "packages/*"]
}
`),cf()()(),Aa(77,`p`),bT(78,`Create both applications without installing their packages, then install everything once, from the root:`),cf(),Aa(79,`pre`)(80,`code`,24),bT(81,`
$ npx @nestjs/cli new api --directory apps/api --skip-git --skip-install --package-manager npm
$ npx create-next-app@latest apps/web --yes --src-dir --disable-git --skip-install
$ npm install
`),cf()(),Aa(82,`p`)(83,`code`),bT(84,`--skip-git`),cf(),bT(85,` also leaves the Nest application without a `),Aa(86,`code`),bT(87,`.gitignore`),cf(),bT(88,`, so add one at the root of the repository:`),cf(),Aa(89,`pre`)(90,`code`,24),bT(91,`
node_modules
dist
.env
`),cf()(),Aa(92,`p`),bT(93,`The Next.js development server takes port `),Aa(94,`code`),bT(95,`3000`),cf(),bT(96,`, so give Nest another one in `),Aa(97,`code`),bT(98,`apps/api/src/main.ts`),cf(),bT(99,`, and put its routes under `),Aa(100,`code`),bT(101,`/api`),cf(),bT(102,`, the path the browser will call:`),cf(),Aa(103,`app-copy-button`,25)(104,`span`,26),bT(105),LT(106,`extension`),Wa(107,`app-tabs`,null,2),cf(),Aa(109,`pre`)(110,`code`,28),bT(111,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3001);
}

await bootstrap();
`),cf()()(),Aa(112,`h4`,29)(113,`span`),bT(114,`Send `),Aa(115,`code`),bT(116,`/api`),cf(),bT(117,` to Nest`),cf()(),Aa(118,`p`),bT(119,`Next.js `),Aa(120,`a`,30),bT(121,`rewrites`),cf(),bT(122,` pass a request on to another server and return its response, without the browser seeing a redirect. In `),Aa(123,`code`),bT(124,`apps/web/next.config.ts`),cf(),bT(125,`, send every `),Aa(126,`code`),bT(127,`/api`),cf(),bT(128,` request that the Next.js app doesn't answer itself to Nest:`),cf(),Aa(129,`app-copy-button`,25)(130,`span`,26),bT(131),LT(132,`extension`),Wa(133,`app-tabs`,null,3),cf(),Aa(135,`pre`)(136,`code`,28),bT(137,`
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: \`\${process.env.API_URL}/api/:path*\`,
        },
      ],
    };
  },
};

export default nextConfig;
`),cf()()(),Aa(138,`p`),bT(139,`The browser talks to one origin, the Next.js one. A cookie that Nest sets, such as a session, is stored for that origin and sent back with every request to it, so it reaches Nest and Next.js alike, and Nest needs no `),Aa(140,`a`,31),bT(141,`CORS`),cf(),bT(142,` configuration.`),cf(),Aa(143,`p`)(144,`code`),bT(145,`fallback`),cf(),bT(146,` rewrites run after Next.js has checked all of its pages and route handlers, dynamic ones included. So an existing route handler, such as `),Aa(147,`code`),bT(148,`src/app/api/orders/[id]/route.ts`),cf(),bT(149,`, keeps answering its requests, and only the rest reach Nest. An `),Aa(150,`code`),bT(151,`/api`),cf(),bT(152,` path that neither app has gets Nest's `),Aa(153,`code`),bT(154,`404`),cf(),bT(155,` response. An `),Aa(156,`code`),bT(157,`afterFiles`),cf(),bT(158,` rewrite would run before dynamic routes, and pass that route handler's requests to Nest.`),cf(),Aa(159,`p`),bT(160,`Set `),Aa(161,`code`),bT(162,`API_URL`),cf(),bT(163,` for development in `),Aa(164,`code`),bT(165,`apps/web/.env.development`),cf(),bT(166,`:`),cf(),Aa(167,`pre`)(168,`code`,24),bT(169,`
API_URL=http://localhost:3001
`),cf()(),Aa(170,`blockquote`,32)(171,`strong`),bT(172,`Warning`),cf(),bT(173,` Next.js reads `),Aa(174,`code`),bT(175,`rewrites()`),cf(),bT(176,` when it builds the application, so `),Aa(177,`code`),bT(178,`API_URL`),cf(),bT(179,` must also be set for `),Aa(180,`code`),bT(181,`next build`),cf(),bT(182,`: a different value when the application starts doesn't change where its rewrites go.
`),cf(),Aa(183,`p`),bT(184,`Everything an API does goes through the rewrite untouched: cookies, raw request bodies for `),Aa(185,`a`,33),bT(186,`webhook`),cf(),bT(187,` signatures, `),Aa(188,`a`,34),bT(189,`server-sent events`),cf(),bT(190,` as they're written, and `),Aa(191,`a`,35),bT(192,`WebSockets`),cf(),bT(193,` with the `),Aa(194,`code`),bT(195,`ws`),cf(),bT(196,` adapter. Two limits fail badly, with a `),Aa(197,`code`),bT(198,`500`),cf(),bT(199,` and no useful error: a request body over 10 MB, and a response that takes more than 30 seconds to start, such as a call to a language model. Raise them with two experimental options of Next.js:`),cf(),Aa(200,`app-copy-button`,25)(201,`span`,26),bT(202),LT(203,`extension`),Wa(204,`app-tabs`,null,4),cf(),Aa(206,`pre`)(207,`code`,28),bT(208,`
const nextConfig: NextConfig = {
  experimental: {
    proxyClientMaxBodySize: '100mb',
    proxyTimeout: 120_000,
  },
  // ...
};
`),cf()()(),Aa(209,`p`),bT(210,`Nest also sees the Next.js server as the client, so `),Aa(211,`code`),bT(212,`req.ip`),cf(),bT(213,` is its address, and anything that limits requests per IP address, such as `),Aa(214,`a`,36)(215,`code`),bT(216,`@nestjs/throttler`),cf()(),bT(217,`, treats all your visitors as one. Next.js doesn't add `),Aa(218,`code`),bT(219,`X-Forwarded-For`),cf(),bT(220,` itself, but it passes on the one set by a load balancer in front of it. If you have one, call `),Aa(221,`code`),bT(222,`app.set('trust proxy', 1)`),cf(),bT(223,` on the `),Aa(224,`code`),bT(225,`NestExpressApplication`),cf(),bT(226,`. Without one, leave it off, or a visitor can claim any address.`),cf(),Aa(227,`h4`,37)(228,`span`),bT(229,`Share schemas between the apps`),cf()(),Aa(230,`p`),bT(231,`Nest validates a request body against any `),Aa(232,`a`,38),bT(233,`Standard Schema`),cf(),bT(234,` schema, such as a Zod one (see `),Aa(235,`a`,39),bT(236,`Schema-based validation`),cf(),bT(237,`). Put the schemas in a package of their own, `),Aa(238,`code`),bT(239,`packages/contracts`),cf(),bT(240,`, and the Next.js app validates its forms with the very schema that Nest checks the request against, and both use the types inferred from it.`),cf(),Aa(241,`app-copy-button`,25)(242,`span`,26),bT(243),LT(244,`extension`),Wa(245,`app-tabs`,null,5),cf(),Aa(247,`pre`)(248,`code`,27),bT(249,`
{
  "name": "@acme/contracts",
  "private": true,
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js"
    }
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  },
  "dependencies": {
    "zod": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^6.0.0"
  }
}
`),cf()()(),Aa(250,`app-copy-button`,25)(251,`span`,26),bT(252),LT(253,`extension`),Wa(254,`app-tabs`,null,6),cf(),Aa(256,`pre`)(257,`code`,27),bT(258,`
{
  "compilerOptions": {
    "module": "nodenext",
    "target": "es2023",
    "declaration": true,
    "outDir": "dist",
    "rootDir": "src",
    "strict": true
  },
  "include": ["src"]
}
`),cf()()(),Aa(259,`app-copy-button`,25)(260,`span`,26),bT(261),LT(262,`extension`),Wa(263,`app-tabs`,null,7),cf(),Aa(265,`pre`)(266,`code`,28),bT(267,`
import { z } from 'zod';

export const createOrderSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().min(1).max(20),
});
export type CreateOrderInput = z.infer<typeof createOrderSchema>;

export const orderSchema = createOrderSchema.extend({
  id: z.string(),
  status: z.enum(['pending', 'paid', 'shipped']),
});
export type Order = z.infer<typeof orderSchema>;
`),cf()()(),Aa(268,`p`),bT(269,`The package is compiled, so that both applications import plain JavaScript and its type declarations. Add it to both applications, and build it (`),Aa(270,`code`),bT(271,`npm run dev -w @acme/contracts`),cf(),bT(272,` rebuilds it on every change):`),cf(),Aa(273,`pre`)(274,`code`,24),bT(275,`
$ npm install
$ npm i --save @acme/contracts -w api -w web
$ npm run build -w @acme/contracts
`),cf()(),Aa(276,`p`),bT(277,`In Nest, bind the `),Aa(278,`code`),bT(279,`StandardSchemaValidationPipe`),cf(),bT(280,` and pass the schema to `),Aa(281,`code`),bT(282,`@Body()`),cf(),bT(283,`:`),cf(),Aa(284,`app-copy-button`,25)(285,`span`,26),bT(286),LT(287,`extension`),Wa(288,`app-tabs`,null,8),cf(),Aa(290,`pre`)(291,`code`,28),bT(292,`
import { StandardSchemaValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new StandardSchemaValidationPipe());
  await app.listen(process.env.PORT ?? 3001);
}

await bootstrap();
`),cf()()(),Aa(293,`app-copy-button`,25)(294,`span`,26),bT(295),LT(296,`extension`),Wa(297,`app-tabs`,null,9),cf(),Aa(299,`pre`)(300,`code`,28),bT(301,`
import { Body, Controller, Get, Post } from '@nestjs/common';
import { createOrderSchema, type CreateOrderInput, type Order } from '@acme/contracts';
import { OrdersService } from './orders.service.js';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Post()
  create(@Body({ schema: createOrderSchema }) input: CreateOrderInput): Promise<Order> {
    return this.ordersService.create(input);
  }
}
`),cf()()(),Aa(302,`p`),bT(303,`In Next.js, a form checks its input with the same schema before it sends anything:`),cf(),Aa(304,`app-copy-button`)(305,`pre`)(306,`code`,28),bT(307,`
const input = createOrderSchema.safeParse({
  productId: formData.get('productId'),
  quantity: Number(formData.get('quantity')),
});
if (!input.success) {
  setError(input.error.issues[0].message);
  return;
}
await fetch('/api/orders', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(input.data),
});
`),cf()()(),Aa(308,`p`),bT(309,`A request that doesn't come from your form, from a script or an older version of the app, is still checked, by Nest:`),cf(),Aa(310,`pre`)(311,`code`,27),bT(312,`
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": [
    "productId: Too small: expected string to have >=1 characters",
    "quantity: Too big: expected number to be <=20"
  ]
}
`),cf()(),Aa(313,`p`),bT(314,`To run everything with one command, add `),Aa(315,`code`),bT(316,`concurrently`),cf(),bT(317,` to the root, and two scripts to its `),Aa(318,`code`),bT(319,`package.json`),cf(),bT(320,`. The shared package has to be built before the applications that import it:`),cf(),Aa(321,`pre`)(322,`code`,24),bT(323,`
$ npm i --save-dev concurrently
`),cf()(),Aa(324,`app-copy-button`,25)(325,`span`,26),bT(326),LT(327,`extension`),Wa(328,`app-tabs`,null,10),cf(),Aa(330,`pre`)(331,`code`,27),bT(332,`
{
  "scripts": {
    "dev": "npm run build -w @acme/contracts && concurrently -n contracts,api,web \\"npm run dev -w @acme/contracts\\" \\"npm run start:dev -w api\\" \\"npm run dev -w web\\"",
    "build": "npm run build -w @acme/contracts && npm run build -w api && npm run build -w web"
  }
}
`),cf()()(),Aa(333,`h4`,40)(334,`span`),bT(335,`Sign users in`),cf()(),Aa(336,`p`),bT(337,`Sign-in belongs to Nest, since the API is what it protects. `),Aa(338,`a`,41)(339,`code`),bT(340,`@nestjs/authentication`),cf()(),bT(341,` keeps the session in an `),Aa(342,`code`),bT(343,`HttpOnly`),cf(),bT(344,` cookie, and a form signs in by posting to `),Aa(345,`code`),bT(346,`/api/auth/sign-in`),cf(),bT(347,` through the rewrite, like any other request from the browser. That chapter builds it, and one setting is specific to running behind Next.js.`),cf(),Aa(348,`p`),bT(349,`The module ignores a session cookie on a `),Aa(350,`code`),bT(351,`POST`),cf(),bT(352,` from another origin, and refuses sign-ins from one, to stop cross-site request forgery. Behind a rewrite, Nest's own host is `),Aa(353,`code`),bT(354,`localhost:3001`),cf(),bT(355,` while the browser's `),Aa(356,`code`),bT(357,`Origin`),cf(),bT(358,` is `),Aa(359,`code`),bT(360,`http://localhost:3000`),cf(),bT(361,`. Browsers that send `),Aa(362,`code`),bT(363,`Sec-Fetch-Site`),cf(),bT(364,` pass anyway, but a client that sends only `),Aa(365,`code`),bT(366,`Origin`),cf(),bT(367,` gets a `),Aa(368,`code`),bT(369,`403`),cf(),bT(370,`. So name the Next.js origin as trusted:`),cf(),Aa(371,`app-copy-button`,25)(372,`span`,26),bT(373),LT(374,`extension`),Wa(375,`app-tabs`,null,11),cf(),Aa(377,`pre`)(378,`code`,28),bT(379,`
AuthenticationModule.forRoot({
  session: {
    absoluteTtl: '14d',
    idleTtl: '3d',
    trustedOrigins: [process.env.WEB_ORIGIN ?? 'http://localhost:3000'],
  },
}),
`),cf()()(),Aa(380,`p`),bT(381,`Requests from any other origin are still refused.`),cf(),Aa(382,`h4`,42)(383,`span`),bT(384,`Call Nest from the Next.js server`),cf()(),Aa(385,`p`),bT(386,`Server Components and Server Actions run on the Next.js server, so they call Nest directly, without the rewrite. The browser's cookies don't go with those requests unless you forward them, so put that in one helper:`),cf(),Aa(387,`app-copy-button`,25)(388,`span`,26),bT(389),LT(390,`extension`),Wa(391,`app-tabs`,null,12),cf(),Aa(393,`pre`)(394,`code`,28),bT(395,`
import { cookies } from 'next/headers';

/** Calls Nest from the Next.js server, on behalf of the browser that made the request. */
export async function api(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  headers.set('cookie', (await cookies()).toString());
  return fetch(\`\${process.env.API_URL}/api\${path}\`, { ...init, headers });
}
`),cf()()(),Aa(396,`app-copy-button`,25)(397,`span`,26),bT(398),LT(399,`extension`),Wa(400,`app-tabs`,null,13),cf(),Aa(402,`pre`)(403,`code`,28),bT(404,`
import { redirect } from 'next/navigation';
import type { Order } from '@acme/contracts';
import { api } from '@/lib/api';

export default async function OrdersPage() {
  const response = await api('/orders');
  if (response.status === 401) {
    redirect('/sign-in');
  }
  const orders: Order[] = await response.json();
  return (
    <ul>
      {orders.map((order) => (
        <li key={order.id}>
          {order.productId} \xD7 {order.quantity} ({order.status})
        </li>
      ))}
    </ul>
  );
}
`),cf()()(),Aa(405,`blockquote`,32)(406,`strong`),bT(407,`Warning`),cf(),bT(408,` A page that fetches without reading cookies may be rendered during `),Aa(409,`code`),bT(410,`next build`),cf(),bT(411,`, so Nest has to be reachable from the build, or it fails with `),Aa(412,`code`),bT(413,`fetch failed`),cf(),bT(414,`.
`),cf(),Aa(415,`h4`,43)(416,`span`),bT(417,`Migrate a Next.js backend to Nest`),cf()(),Aa(418,`p`),bT(419,`Next.js's own `),Aa(420,`a`,44),bT(421,`backend guide`),cf(),bT(422,` says that its backend capabilities "are not a full backend replacement". A Next.js backend works well until it has to be one, and past that point a separate backend can be the simpler of the two.`),cf(),Aa(423,`h5`,45)(424,`span`),bT(425,`Why it can be simpler`),cf()(),Aa(426,`p`),bT(427,`It isn't less code. The same four endpoints (list, create, read and cancel an order, for a signed-in user) came to about the same number of lines in route handlers as in a Nest controller and service. What changes is what you have to remember:`),cf(),Aa(428,`table`),Wa(429,`thead`),Aa(430,`tbody`)(431,`tr`)(432,`td`),bT(433,`Checking the session`),cf(),Aa(434,`td`),bT(435,`In every handler, four times here. A handler that forgets is public`),cf(),Aa(436,`td`),bT(437,`Once, in a `),Aa(438,`a`,46),bT(439,`global guard`),cf(),bT(440,`. A new route answers `),Aa(441,`code`),bT(442,`401`),cf(),bT(443,` until you mark it `),Aa(444,`code`),bT(445,`@Public()`),cf()()(),Aa(446,`tr`)(447,`td`),bT(448,`Validating a body`),cf(),Aa(449,`td`),bT(450,`Each handler parses it and builds its own `),Aa(451,`code`),bT(452,`400`),cf()(),Aa(453,`td`)(454,`code`),bT(455),cf(),bT(456,`, and the handler only runs with valid input`),cf()(),Aa(457,`tr`)(458,`td`),bT(459,`A missing record`),cf(),Aa(460,`td`),bT(461,`Each handler builds its own `),Aa(462,`code`),bT(463,`404`),cf(),bT(464,`, and a helper can't end the request for it`),cf(),Aa(465,`td`)(466,`code`),bT(467,`throw new NotFoundException()`),cf(),bT(468,` from anywhere, such as a service`),cf()(),Aa(469,`tr`)(470,`td`),bT(471,`Testing the logic`),cf(),Aa(472,`td`),bT(473,`Handlers read `),Aa(474,`code`),bT(475,`cookies()`),cf(),bT(476,`, which throws `),Aa(477,`code`),bT(478,`was called outside a request scope`),cf(),bT(479,`, so a test has to mock `),Aa(480,`code`),bT(481,`next/headers`),cf()(),Aa(482,`td`),bT(483,`A service is a class: `),Aa(484,`code`),bT(485,`new OrdersService()`),cf(),bT(486,`, with no HTTP and no mocks of the framework`),cf()(),Aa(487,`tr`)(488,`td`),bT(489,`Finding an endpoint`),cf(),Aa(490,`td`),bT(491,`One file per path, with the path in the folder names`),cf(),Aa(492,`td`),bT(493,`One controller per resource`),cf()(),Aa(494,`tr`)(495,`td`),bT(496,`Scheduled jobs`),cf(),Aa(497,`td`),bT(498,`Nothing built in, so a platform has to call a URL`),cf(),Aa(499,`td`)(500,`code`),bT(501,`@Cron()`),cf(),bT(502,`, in the same process as the rest of the application`),cf()(),Aa(503,`tr`)(504,`td`),bT(505,`WebSockets`),cf(),Aa(506,`td`),bT(507,`Won't work where handlers are deployed as lambda functions, says the same guide`),cf(),Aa(508,`td`)(509,`a`,35),bT(510,`Gateways`),cf()()()()(),Aa(511,`p`),bT(512,`Here's one of those four endpoints in both. As a route handler:`),cf(),Aa(513,`app-copy-button`,25)(514,`span`,26),bT(515),LT(516,`extension`),Wa(517,`app-tabs`,null,14),cf(),Aa(519,`pre`)(520,`code`,28),bT(521,`
import { NextResponse } from 'next/server';
import { db, getSession } from '@/lib/backend';

export async function POST(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const order = db.find(id);
  if (!order || order.userId !== session.userId) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }
  order.status = 'cancelled';
  return NextResponse.json(order);
}
`),cf()()(),Aa(522,`p`),bT(523,`The other handlers repeat its first lines. In Nest, the guard has already checked the session, and the service holds the rule, where the other methods can reuse it and a test can reach it:`),cf(),Aa(524,`app-copy-button`,25)(525,`span`,26),bT(526),LT(527,`extension`),Wa(528,`app-tabs`,null,15),cf(),Aa(530,`pre`)(531,`code`,28),bT(532,`
@Post(':id/cancel')
@HttpCode(200)
cancel(@CurrentUser() user: User, @Param('id') id: string) {
  return this.ordersService.cancel(user.id, id);
}
`),cf()()(),Aa(533,`app-copy-button`,25)(534,`span`,26),bT(535),LT(536,`extension`),Wa(537,`app-tabs`,null,16),cf(),Aa(539,`pre`)(540,`code`,28),bT(541,`
findOne(userId: string, id: string) {
  const order = this.rows.get(id);
  if (!order || order.userId !== userId) {
    throw new NotFoundException();
  }
  return order;
}

cancel(userId: string, id: string) {
  const order = this.findOne(userId, id);
  order.status = 'cancelled';
  return order;
}
`),cf()()(),Aa(542,`app-copy-button`,25)(543,`span`,26),bT(544),LT(545,`extension`),Wa(546,`app-tabs`,null,17),cf(),Aa(548,`pre`)(549,`code`,28),bT(550,`
it("doesn't let another user cancel an order", () => {
  const orders = new OrdersService();
  const { id } = orders.create('u1', { productId: 'kibble', quantity: 1 });
  expect(() => orders.cancel('u2', id)).toThrow(NotFoundException);
});
`),cf()()(),Aa(551,`p`),bT(552,`You can get part of the way with helpers: a `),Aa(553,`code`),bT(554,`withSession()`),cf(),bT(555,` wrapper, then one for validation, then one that turns errors into responses. That's a reasonable step, and it's also writing your own guards, pipes and exception filters.`),cf(),Aa(556,`p`),bT(557,`It does cost something. There's a second application to deploy, a rewrite to configure, and a network hop between a Server Component and its data. If your backend is a few handlers with one client and no background work, stay on route handlers.`),cf(),Aa(558,`h5`,47)(559,`span`),bT(560,`What goes where`),cf()(),Aa(561,`p`),bT(562,`Write new endpoints in Nest, and move the existing ones when you next change them. Each piece of a Next.js backend has a place to go:`),cf(),Aa(563,`table`)(564,`thead`)(565,`tr`)(566,`th`),bT(567,`In Next.js`),cf(),Aa(568,`th`),bT(569,`In Nest`),cf()()(),Aa(570,`tbody`)(571,`tr`)(572,`td`),bT(573,`A route handler`),cf(),Aa(574,`td`),bT(575,`A `),Aa(576,`a`,48),bT(577,`controller`),cf(),bT(578,` method`),cf()(),Aa(579,`tr`)(580,`td`),bT(581,`A database query in a Server Component or a Server Action`),cf(),Aa(582,`td`),bT(583,`A `),Aa(584,`a`,49),bT(585,`service`),cf(),bT(586,` behind an endpoint, called through `),Aa(587,`code`),bT(588,`api()`),cf()()(),Aa(589,`tr`)(590,`td`)(591,`code`),bT(592,`getSession()`),cf(),bT(593,` at the top of every handler`),cf(),Aa(594,`td`),bT(595,`The global guard of `),Aa(596,`a`,41)(597,`code`),bT(598,`@nestjs/authentication`),cf()(),bT(599,`, and `),Aa(600,`code`),bT(601,`@CurrentUser()`),cf()()(),Aa(602,`tr`)(603,`td`),bT(604,`Checking `),Aa(605,`code`),bT(606,`request.json()`),cf(),bT(607,` by hand`),cf(),Aa(608,`td`)(609,`code`),bT(610),cf()()(),Aa(611,`tr`)(612,`td`),bT(613,`Role checks inside handlers`),cf(),Aa(614,`td`)(615,`a`,50)(616,`code`),bT(617,`@nestjs/authorization`),cf()()()(),Aa(618,`tr`)(619,`td`),bT(620,`A webhook route handler that reads `),Aa(621,`code`),bT(622,`request.text()`),cf()(),Aa(623,`td`)(624,`code`),bT(625,`@VerifyWebhook()`),cf(),bT(626,` from `),Aa(627,`a`,51)(628,`code`),bT(629,`@nestjs/webhooks`),cf()()()(),Aa(630,`tr`)(631,`td`),bT(632,`A cron route called by the platform`),cf(),Aa(633,`td`)(634,`code`),bT(635,`@Cron()`),cf(),bT(636,` from `),Aa(637,`a`,52)(638,`code`),bT(639,`@nestjs/schedule`),cf()()()(),Aa(640,`tr`)(641,`td`),bT(642,`Work started with `),Aa(643,`code`),bT(644,`after()`),cf(),bT(645,`, such as sending email`),cf(),Aa(646,`td`),bT(647,`A `),Aa(648,`a`,53),bT(649,`queue`),cf(),bT(650,`, and `),Aa(651,`a`,54)(652,`code`),bT(653,`@nestjs/mail`),cf()()()()()(),Aa(654,`h5`,55)(655,`span`),bT(656,`Move one route`),cf()(),Aa(657,`p`),bT(658,`Write the endpoint in Nest under the same path, and delete the route handler. The URL doesn't change, so neither does any client. Because route handlers come before the rewrite, both can be in the code until you delete the route handler.`),cf(),Aa(659,`p`),bT(660,`Then check what a client can see:`),cf(),Aa(661,`ul`)(662,`li`)(663,`strong`),bT(664,`The status code.`),cf(),Aa(665,`code`),bT(666,`NextResponse.json()`),cf(),bT(667,` answers `),Aa(668,`code`),bT(669,`200`),cf(),bT(670,` on a `),Aa(671,`code`),bT(672,`POST`),cf(),bT(673,`, and a Nest `),Aa(674,`code`),bT(675,`POST`),cf(),bT(676,` answers `),Aa(677,`code`),bT(678,`201`),cf(),bT(679,` unless you add `),Aa(680,`code`),bT(681,`@HttpCode(200)`),cf(),bT(682,`.`),cf(),Aa(683,`li`)(684,`strong`),bT(685,`The shape of an error`),cf(),bT(686,`, which is now `),Aa(687,`code`),bT(688),cf(),bT(689,`. A `),Aa(690,`a`,56),bT(691,`global exception filter`),cf(),bT(692,` keeps the old shape if clients depend on it.`),cf(),Aa(693,`li`)(694,`strong`),bT(695,`Dynamic segments.`),cf(),Aa(696,`code`),bT(697,`[id]`),cf(),bT(698,` becomes `),Aa(699,`code`),bT(700,`:id`),cf(),bT(701,`, and a catch-all `),Aa(702,`code`),bT(703,`[...path]`),cf(),bT(704,` becomes `),Aa(705,`code`),bT(706,`*path`),cf(),bT(707,`, whose `),Aa(708,`code`),bT(709,`@Param('path')`),cf(),bT(710,` is an array of segments.`),cf()(),Aa(711,`h5`,57)(712,`span`),bT(713,`Move queries out of pages`),cf()(),Aa(714,`p`),bT(715,`A Server Component or a Server Action that queries the database directly makes a request instead, and the query moves to a Nest service:`),cf(),Aa(716,`app-copy-button`,25)(717,`span`,26),bT(718),LT(719,`extension`),Wa(720,`app-tabs`,null,18),cf(),Aa(722,`pre`)(723,`code`,28),bT(724,`
'use server';

import { revalidatePath } from 'next/cache';
import { createOrderSchema } from '@acme/contracts';
import { api } from '@/lib/api';

export async function placeOrder(formData: FormData) {
  const input = createOrderSchema.parse({
    productId: formData.get('productId'),
    quantity: Number(formData.get('quantity')),
  });
  const response = await api('/orders', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    throw new Error('The order was refused.');
  }
  revalidatePath('/orders');
}
`),cf()()(),Aa(725,`p`),bT(726,`When nothing in `),Aa(727,`code`),bT(728,`apps/web`),cf(),bT(729,` imports the database client any more, remove it from the Next.js application, so that a page can't go around the API.`),cf(),Aa(730,`h4`,58)(731,`span`),bT(732,`Deployment`),cf()(),Aa(733,`p`),bT(734,`The two applications deploy separately. Whatever the platform, the order is the same: build `),Aa(735,`code`),bT(736,`@acme/contracts`),cf(),bT(737,`, then the applications, with `),Aa(738,`code`),bT(739,`API_URL`),cf(),bT(740,` set for `),Aa(741,`code`),bT(742,`next build`),cf(),bT(743,`.`),cf(),Aa(744,`p`),bT(745,`Nest runs anywhere Node.js does (see `),Aa(746,`a`,59),bT(747,`Deployment`),cf(),bT(748,`). If you deploy the Next.js application on Vercel, set `),Aa(749,`code`),bT(750,`API_URL`),cf(),bT(751,` in its environment to Nest's address. Vercel can `),Aa(752,`a`,60),bT(753,`deploy Nest`),cf(),bT(754,` too, as a project of its own. Other clients, such as a mobile app, call Nest's address directly, and need a `),Aa(755,`a`,31),bT(756,`CORS`),cf(),bT(757,` configuration only if they run in a browser on another origin.`),cf()(),Aa(758,`a`,61),Wa(759,`i`,62),Aa(760,`span`),bT(761,`Edit on GitHub`),cf()()()),c&2){let v=tT(73),w=tT(108),k=tT(134),I=tT(205),C=tT(246),T=tT(255),q=tT(264),P=tT(289),B=tT(298),N=tT(329),U=tT(376),D=tT(392),J=tT(401),O=tT(518),F=tT(529),H=tT(538),W=tT(547),G=tT(721);zC(70),hf(` `,jT(71,24,`package.json`,v.isJsActive),`
`),zC(35),hf(` `,jT(106,27,`apps/api/src/main`,w.isJsActive),`
`),zC(26),hf(` `,jT(132,30,`apps/web/next.config`,k.isJsActive),`
`),zC(71),hf(` `,jT(203,33,`apps/web/next.config`,I.isJsActive),`
`),zC(41),hf(` `,jT(244,36,`packages/contracts/package.json`,C.isJsActive),`
`),zC(9),hf(` `,jT(253,39,`packages/contracts/tsconfig.json`,T.isJsActive),`
`),zC(9),hf(` `,jT(262,42,`packages/contracts/src/index`,q.isJsActive),`
`),zC(25),hf(` `,jT(287,45,`apps/api/src/main`,P.isJsActive),`
`),zC(9),hf(` `,jT(296,48,`apps/api/src/orders/orders.controller`,B.isJsActive),`
`),zC(31),hf(` `,jT(327,51,`package.json`,N.isJsActive),`
`),zC(47),hf(` `,jT(374,54,`apps/api/src/app.module`,U.isJsActive),`
`),zC(16),hf(` `,jT(390,57,`apps/web/src/lib/api`,D.isJsActive),`
`),zC(9),hf(` `,jT(399,60,`apps/web/src/app/orders/page.tsx`,J.isJsActive),`
`),zC(57),Ky(`@Body(`,`{`,` schema `,`}`,`)`),zC(60),hf(` `,jT(516,63,`apps/web/src/app/api/orders/[id]/cancel/route.ts`,O.isJsActive),`
`),zC(11),hf(` `,jT(527,66,`apps/api/src/orders/orders.controller`,F.isJsActive),`
`),zC(9),hf(` `,jT(536,69,`apps/api/src/orders/orders.service`,H.isJsActive),`
`),zC(9),hf(` `,jT(545,72,`apps/api/src/orders/orders.service.spec`,W.isJsActive),`
`),zC(66),Ky(`@Body(`,`{`,` schema `,`}`,`)`),zC(78),Ky(``,`{`,` statusCode, message, error `,`}`),zC(30),hf(` `,jT(719,75,`apps/web/src/app/orders/actions`,G.isJsActive),`
`)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return d})();var te=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-router-module`]],features:[xy],decls:88,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`router-module`],[1,`info`],[`href`,`/controllers#routing`],[`routerLink`,`/faq/global-prefix`],[`routerLink`,`/http/versioning`],[1,`language-typescript`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/router-module.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Router module`),cf(),Aa(5,`blockquote`,4)(6,`strong`),bT(7,`Hint`),cf(),bT(8,` This chapter is only relevant to HTTP-based applications.
`),cf(),Aa(9,`p`),bT(10,`In an HTTP application (e.g., a REST API), the route path for a handler is determined by concatenating the (optional) prefix declared for the controller (inside the `),Aa(11,`code`),bT(12,`@Controller()`),cf(),bT(13,` decorator) and any path specified in the method's decorator (e.g., `),Aa(14,`code`),bT(15,`@Get('users')`),cf(),bT(16,`). You can learn more about this in the `),Aa(17,`a`,5),bT(18,`routing`),cf(),bT(19,` section of the controllers chapter. Additionally, you can define a `),Aa(20,`a`,6),bT(21,`global prefix`),cf(),bT(22,` for all routes registered in your application, or enable `),Aa(23,`a`,7),bT(24,`versioning`),cf(),bT(25,`.`),cf(),Aa(26,`p`),bT(27,`In some cases, it's useful to define a prefix at the module level, which then applies to all controllers registered inside that module. For example, imagine a REST application that exposes several endpoints used by a specific part of your application called "Dashboard". Instead of repeating the `),Aa(28,`code`),bT(29,`/dashboard`),cf(),bT(30,` prefix in each controller, you can use the `),Aa(31,`code`),bT(32,`RouterModule`),cf(),bT(33,`, as follows:`),cf(),Aa(34,`app-copy-button`)(35,`pre`)(36,`code`,8),bT(37,`
@Module({
  imports: [
    DashboardModule,
    RouterModule.register([
      {
        path: 'dashboard',
        module: DashboardModule,
      },
    ]),
  ],
})
export class AppModule {}
`),cf()()(),Aa(38,`blockquote`,4)(39,`strong`),bT(40,`Hint`),cf(),bT(41,` The `),Aa(42,`code`),bT(43,`RouterModule`),cf(),bT(44,` class is exported from the `),Aa(45,`code`),bT(46,`@nestjs/core`),cf(),bT(47,` package.
`),cf(),Aa(48,`p`),bT(49,`You can also define hierarchical structures, in which each module has `),Aa(50,`code`),bT(51,`children`),cf(),bT(52,` modules. The child modules inherit their parent's prefix. In the following example, the `),Aa(53,`code`),bT(54,`AdminModule`),cf(),bT(55,` is registered as the parent module of `),Aa(56,`code`),bT(57,`DashboardModule`),cf(),bT(58,` and `),Aa(59,`code`),bT(60,`MetricsModule`),cf(),bT(61,`:`),cf(),Aa(62,`app-copy-button`)(63,`pre`)(64,`code`,8),bT(65,`
@Module({
  imports: [
    AdminModule,
    DashboardModule,
    MetricsModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
        children: [
          {
            path: 'dashboard',
            module: DashboardModule,
          },
          {
            path: 'metrics',
            module: MetricsModule,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
`),cf()()(),Aa(66,`blockquote`,4)(67,`strong`),bT(68,`Hint`),cf(),bT(69,` Use this feature carefully, as overusing it can make code difficult to maintain over time.
`),cf(),Aa(70,`p`),bT(71,`In the example above, every controller registered inside the `),Aa(72,`code`),bT(73,`DashboardModule`),cf(),bT(74,` gets an extra `),Aa(75,`code`),bT(76,`/admin/dashboard`),cf(),bT(77,` prefix, because the module concatenates paths recursively from top to bottom, parent to children. Likewise, every controller defined inside the `),Aa(78,`code`),bT(79,`MetricsModule`),cf(),bT(80,` gets the additional module-level prefix `),Aa(81,`code`),bT(82,`/admin/metrics`),cf(),bT(83,`.`),cf()(),Aa(84,`a`,9),Wa(85,`i`,10),Aa(86,`span`),bT(87,`Edit on GitHub`),cf()()())},dependencies:[Jc,ln],encapsulation:2})}return d})();var ne=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-supabase`]],features:[xy],decls:922,vars:92,consts:[[`contentReference`,``],[`app5c17f47da79ad121ad6f75c0c6ec626dcd08a129`,``],[`app9a6dd5fefeb9e8d62b76f0120613506cd4ef2e21`,``],[`appd5ae523eab5385c0f1a869af0df4582565c99b85`,``],[`appb8d5846159a5cf77fcde6ca14e2e4a11afa8d764`,``],[`appf0eb6d2089e1b233698b847dba6b46956f5d08e2`,``],[`app329f2f627320ef524616622988719bfe593a6ffe`,``],[`app5f8b35937be27993cbb1e7788ed76c85bbac5a38`,``],[`app4461d03654d754df782715c7ca50d17e12dd360c`,``],[`app54ba8b439055fabbfd3c7111494d8620204757a2`,``],[`app89bf155b38e9cb69d4a47a834ab943e3cec3da07`,``],[`appe14cb1a4c256fe9eafc0c7a4958ce1fedd3a4f14`,``],[`app57fc3e0841467babbad7fd332f90a4f2358706be`,``],[`appacdfa675f037dcc6dbc552bafc3f8d427aa5716c`,``],[`appa3f87465b56bff27ddcc9d2aba9b250e9668e709`,``],[`app0c06073fc09f334599ff2f1b0f753f1aa7200817`,``],[`appb3190f3ac056bf36157b647218bb9c9343965de0`,``],[`appef542e2274ef619bec4f1a630dfe0340a93b5ef9`,``],[`appe432617cd3b785d9559a1c01bff65624ed93b0c2`,``],[`app021fe488fdc4d98cc0d8ea7b503977f820e3dba4`,``],[`appd92d2c78f27471619f9ac885f0f0ce8e02bb9a99`,``],[`app717e910bed3b55a7028da4b21e8ad35e867db21f`,``],[`app9092ac232a51ffebab254347ea54f24b891e1bae`,``],[1,`content`],[1,`content-inner`],[`id`,`supabase`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://supabase.com/docs/guides/functions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://supabase.com/docs/guides/functions/limits`],[`href`,`/recipes/supabase#the-finished-module`],[`appAnchor`,``,`id`,`create-the-projects`],[1,`language-bash`],[1,`warning`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://supabase.com/docs/guides/api/api-keys`],[`href`,`/application/configuration`],[1,`language-typescript`],[`appAnchor`,``,`id`,`define-a-table`],[1,`language-sql`],[`appAnchor`,``,`id`,`verify-supabase-tokens`],[`href`,`/security/authentication`],[1,`with-heading`],[1,`filename`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://supabase.com/docs/guides/auth/signing-keys`],[`appAnchor`,``,`id`,`call-nest-from-the-browser`],[`routerLink`,`/security/cors`],[`appAnchor`,``,`id`,`query-as-the-user-or-as-the-server`],[`appAnchor`,``,`id`,`query-postgres-directly`],[`href`,`/data/drizzle`],[`routerLink`,`/data/overview`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://supabase.com/docs/guides/database/connecting-to-postgres`],[`appAnchor`,``,`id`,`protect-an-admin-api`],[`href`,`/security/authorization`],[`appAnchor`,``,`id`,`receive-stripe-webhooks`],[`href`,`/http/webhooks`],[`href`,`/recipes/supabase#deployment`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.stripe.com/stripe-cli`],[`appAnchor`,``,`id`,`run-scheduled-jobs`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://supabase.com/docs/guides/cron`],[`appAnchor`,``,`id`,`with-nestjsschedule-and-nestjslocks`],[`href`,`/application/task-scheduling`],[`href`,`/reliability/locks`],[`href`,`/reliability/locks#keep-locks-in-your-database`],[`appAnchor`,``,`id`,`with-bullmq`],[`routerLink`,`/application/queues`],[`appAnchor`,``,`id`,`hand-out-file-uploads`],[`appAnchor`,``,`id`,`test-against-the-local-stack`],[`appAnchor`,``,`id`,`move-an-edge-function-to-nest`],[`appAnchor`,``,`id`,`the-finished-module`],[`appAnchor`,``,`id`,`deployment`],[`routerLink`,`/deployment`],[`href`,`/recipes/supabase#query-postgres-directly`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://supabase.com/docs/guides/database/connection-management`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/supabase.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,23,0)(2,`div`,24)(3,`h3`,25),bT(4,`Supabase`),cf(),Aa(5,`p`),bT(6,`Supabase gives an application a Postgres database, sign-in, file storage and an API that the browser can call directly, which covers a lot without a backend. What it leaves out is the work that needs a secret, a retry or a clock: Stripe webhooks, scheduled jobs, queues, an admin API. Nest takes on that work next to Supabase, on the same database and for the same users.`),cf(),Aa(7,`table`)(8,`thead`)(9,`tr`)(10,`th`),bT(11,`Stays in Supabase`),cf(),Aa(12,`th`),bT(13,`Goes in Nest`),cf()()(),Aa(14,`tbody`)(15,`tr`)(16,`td`),bT(17,`Sign-up, sign-in and password resets`),cf(),Aa(18,`td`),bT(19,`Checking who is calling, and what they may do`),cf()(),Aa(20,`tr`)(21,`td`),bT(22,`Postgres, its migrations and row level security`),cf(),Aa(23,`td`),bT(24,`Business rules, and queries that span many tables`),cf()(),Aa(25,`tr`)(26,`td`),bT(27,`Browser reads and writes that row level security covers`),cf(),Aa(28,`td`),bT(29,`Anything that needs a secret: payments, email, other APIs`),cf()(),Aa(30,`tr`)(31,`td`),bT(32,`Storage and Realtime`),cf(),Aa(33,`td`),bT(34,`Stripe webhooks, scheduled jobs, queues and an admin API`),cf()()()(),Aa(35,`p`),bT(36,`The browser keeps calling Supabase directly for what row level security covers, and calls Nest with the same access token for the rest.`),cf(),Aa(37,`p`),bT(38,`If a short function or two is all you need, `),Aa(39,`a`,26),bT(40,`Edge Functions`),cf(),bT(41,` may be enough, with no server to run. They have `),Aa(42,`a`,27),bT(43,`limits on CPU time and duration`),cf(),bT(44,` and nowhere to run a queue's worker, so Nest fits better once you have jobs, queues or many routes that share code.`),cf(),Aa(45,`p`),bT(46,`This recipe builds such an application on the local Supabase stack, so that you can run each step as you read. `),Aa(47,`a`,28),bT(48,`The finished module`),cf(),bT(49,` shows how the pieces are wired together.`),cf(),Aa(50,`h4`,29)(51,`span`),bT(52,`Create the projects`),cf()(),Aa(53,`p`),bT(54,`The local stack needs Docker.`),cf(),Aa(55,`pre`)(56,`code`,30),bT(57,`
$ npx @nestjs/cli new my-api
$ cd my-api
$ npx supabase init
$ npx supabase start
`),cf()(),Aa(58,`p`)(59,`code`),bT(60,`npx supabase status -o env`),cf(),bT(61,` prints the stack's URLs and keys. Put `),Aa(62,`code`),bT(63,`API_URL`),cf(),bT(64,`, `),Aa(65,`code`),bT(66,`PUBLISHABLE_KEY`),cf(),bT(67,`, `),Aa(68,`code`),bT(69,`SECRET_KEY`),cf(),bT(70,` and `),Aa(71,`code`),bT(72,`DB_URL`),cf(),bT(73,` in `),Aa(74,`code`),bT(75,`.env`),cf(),bT(76,`, under the names this recipe reads:`),cf(),Aa(77,`pre`)(78,`code`,30),bT(79,`
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
SUPABASE_SECRET_KEY=sb_secret_...
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres
`),cf()(),Aa(80,`blockquote`,31)(81,`strong`),bT(82,`Warning`),cf(),bT(83,` The secret key bypasses row level security. It belongs on the server only, and never in anything you ship to a browser or a mobile app.
`),cf(),Aa(84,`blockquote`,32)(85,`strong`),bT(86,`Hint`),cf(),bT(87,` A hosted project has the same keys in its dashboard. Supabase is `),Aa(88,`a`,33),bT(89,`deprecating`),cf(),bT(90,` the older `),Aa(91,`code`),bT(92,`anon`),cf(),bT(93,` and `),Aa(94,`code`),bT(95,`service_role`),cf(),bT(96,` keys by the end of 2026, so use these two.
`),cf(),Aa(97,`p`),bT(98,`Load `),Aa(99,`code`),bT(100,`.env`),cf(),bT(101,` with `),Aa(102,`a`,34)(103,`code`),bT(104,`@nestjs/config`),cf()(),bT(105,`:`),cf(),Aa(106,`pre`)(107,`code`,30),bT(108,`
$ npm i --save @nestjs/config
`),cf()(),Aa(109,`app-copy-button`)(110,`pre`)(111,`code`,35),bT(112,`
@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
`),cf()()(),Aa(113,`p`),bT(114,`Keep it first in `),Aa(115,`code`),bT(116,`imports`),cf(),bT(117,`, as the modules you'll add after it read `),Aa(118,`code`),bT(119,`process.env`),cf(),bT(120,` as they're declared. A module declared in another file reads it earlier, when the file is imported, so use `),Aa(121,`code`),bT(122,`forRootAsync()`),cf(),bT(123,` for what you register there.`),cf(),Aa(124,`h4`,36)(125,`span`),bT(126,`Define a table`),cf()(),Aa(127,`p`),bT(128,`The schema stays in Supabase's migrations:`),cf(),Aa(129,`pre`)(130,`code`,30),bT(131,`
$ npx supabase migration new notes
`),cf()(),Aa(132,`p`),bT(133,`Write the table in the file this creates under `),Aa(134,`code`),bT(135,`supabase/migrations`),cf(),bT(136,`, with a policy that lets users reach only their own rows. `),Aa(137,`code`),bT(138,`auth.uid()`),cf(),bT(139,` is the user the request's access token belongs to:`),cf(),Aa(140,`pre`)(141,`code`,37),bT(142,`
create table public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  body text not null
);

alter table public.notes enable row level security;

create policy "Users manage their own notes" on public.notes
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
`),cf()(),Aa(143,`p`),bT(144,`Apply it to the local database:`),cf(),Aa(145,`pre`)(146,`code`,30),bT(147,`
$ npx supabase db reset
`),cf()(),Aa(148,`blockquote`,31)(149,`strong`),bT(150,`Warning`),cf(),bT(151,` Supabase's API serves the tables in the `),Aa(152,`code`),bT(153,`public`),cf(),bT(154,` schema to anyone with the publishable key, and that key is in your browser code. Enable row level security on every table you create there, including those only Nest uses. With it enabled and no policy, the key reads nothing.
`),cf(),Aa(155,`h4`,38)(156,`span`),bT(157,`Verify Supabase tokens`),cf()(),Aa(158,`p`),bT(159,`Supabase Auth signs an access token for each signed-in user, and publishes the public keys that verify it. `),Aa(160,`a`,39)(161,`code`),bT(162,`@nestjs/authentication`),cf()(),bT(163,` can verify tokens from another issuer, so Nest needs no secret from Supabase to know who is calling:`),cf(),Aa(164,`pre`)(165,`code`,30),bT(166,`
$ npm i --save @nestjs/authentication
`),cf()(),Aa(167,`app-copy-button`,40)(168,`span`,41),bT(169),LT(170,`extension`),Wa(171,`app-tabs`,null,1),cf(),Aa(173,`pre`)(174,`code`,35),bT(175,`
import { Injectable } from '@nestjs/common';
import { AuthenticationRegistry, JwtBearerProvider, type JwtClaims } from '@nestjs/authentication';

export interface SupabaseUser {
  id: string;
  email?: string;
  role?: string;
}

@Injectable()
export class SupabaseAuth extends JwtBearerProvider<SupabaseUser> {
  constructor(registry: AuthenticationRegistry) {
    super({
      jwks: \`\${process.env.SUPABASE_URL}/auth/v1/.well-known/jwks.json\`,
      issuer: \`\${process.env.SUPABASE_URL}/auth/v1\`,
      audience: 'authenticated',
    });
    registry.registerProvider(this);
  }

  validate(claims: JwtClaims) {
    if (!claims.sub) {
      return null;
    }
    const { email, app_metadata } = claims as JwtClaims & {
      email?: string;
      app_metadata?: { role?: string };
    };
    return { id: claims.sub, email, role: app_metadata?.role };
  }
}
`),cf()()(),Aa(176,`p`),bT(177,`The role comes from `),Aa(178,`code`),bT(179,`app_metadata`),cf(),bT(180,`, which only your server can change. A signed-in user can change their own `),Aa(181,`code`),bT(182,`user_metadata`),cf(),bT(183,` with `),Aa(184,`code`),bT(185,`supabase.auth.updateUser()`),cf(),bT(186,`, so never base a decision on it.`),cf(),Aa(187,`p`),bT(188,`Register the module and the provider:`),cf(),Aa(189,`app-copy-button`)(190,`pre`)(191,`code`,35),bT(192,`
@Module({
  imports: [AuthenticationModule.forRoot({})],
  providers: [SupabaseAuth],
})
export class AppModule {}
`),cf()()(),Aa(193,`p`),bT(194,`The module registers a global guard, so every route now answers `),Aa(195,`code`),bT(196,`401 Unauthorized`),cf(),bT(197,` without a valid token, including one with a bad signature, another issuer or audience, or an expired one. Mark a route that stays open with `),Aa(198,`code`),bT(199,`@Public()`),cf(),bT(200,`, and read the user with `),Aa(201,`code`),bT(202,`@CurrentUser()`),cf(),bT(203,`:`),cf(),Aa(204,`app-copy-button`,40)(205,`span`,41),bT(206),LT(207,`extension`),Wa(208,`app-tabs`,null,2),cf(),Aa(210,`pre`)(211,`code`,35),bT(212,`
import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from '@nestjs/authentication';
import type { SupabaseUser } from '../supabase/supabase-auth.js';

@Controller('me')
export class MeController {
  @Get()
  me(@CurrentUser() user: SupabaseUser) {
    return user;
  }
}
`),cf()()(),Aa(213,`blockquote`,32)(214,`strong`),bT(215,`Hint`),cf(),bT(216,` A project still on the legacy JWT secret signs tokens with it and publishes no keys. Pass `),Aa(217,`code`),bT(218,`key: process.env.SUPABASE_JWT_SECRET`),cf(),bT(219,` instead of `),Aa(220,`code`),bT(221,`jwks`),cf(),bT(222,`, until you `),Aa(223,`a`,42),bT(224,`migrate to signing keys`),cf(),bT(225,`.
`),cf(),Aa(226,`h4`,43)(227,`span`),bT(228,`Call Nest from the browser`),cf()(),Aa(229,`p`),bT(230,`The browser sends the access token that Supabase gave it. `),Aa(231,`code`),bT(232,`getSession()`),cf(),bT(233,` refreshes the token when it has expired:`),cf(),Aa(234,`app-copy-button`)(235,`pre`)(236,`code`,35),bT(237,`
const { data: { session } } = await supabase.auth.getSession();

const response = await fetch(\`\${API_URL}/me\`, {
  headers: { Authorization: \`Bearer \${session.access_token}\` },
});
`),cf()()(),Aa(238,`p`),bT(239,`If the browser calls Nest on another origin, `),Aa(240,`a`,44),bT(241,`allow that origin`),cf(),bT(242,` when the application starts:`),cf(),Aa(243,`app-copy-button`,40)(244,`span`,41),bT(245),LT(246,`extension`),Wa(247,`app-tabs`,null,3),cf(),Aa(249,`pre`)(250,`code`,35),bT(251,`
app.enableCors({ origin: process.env.WEB_ORIGIN });
`),cf()()(),Aa(252,`h4`,45)(253,`span`),bT(254,`Query as the user, or as the server`),cf()(),Aa(255,`p`)(256,`code`),bT(257,`@supabase/supabase-js`),cf(),bT(258,` is a client for your database's REST API. Generate types from your schema, so that a query on a table or a column that doesn't exist fails to compile, and run this again after each migration:`),cf(),Aa(259,`pre`)(260,`code`,30),bT(261,`
$ npm i --save @supabase/supabase-js
$ npx supabase gen types typescript --local > src/supabase/database.types.ts
`),cf()(),Aa(262,`p`),bT(263,`Create one client for the server, and one per request for the user. A client holds no database connection, so that's cheap:`),cf(),Aa(264,`app-copy-button`,40)(265,`span`,41),bT(266),LT(267,`extension`),Wa(268,`app-tabs`,null,4),cf(),Aa(270,`pre`)(271,`code`,35),bT(272,`
import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types.js';

const options = { auth: { persistSession: false, autoRefreshToken: false } };

@Injectable()
export class SupabaseService {
  /** Bypasses row level security. Only for what the server does on its own. */
  readonly admin = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    options,
  );

  /** Queries as the user who sent the token, so row level security applies. */
  forUser(token: string) {
    return createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
      ...options,
      accessToken: async () => token,
    });
  }
}
`),cf()()(),Aa(273,`p`),bT(274,`A small decorator reads the token that the guard has already verified:`),cf(),Aa(275,`app-copy-button`,40)(276,`span`,41),bT(277),LT(278,`extension`),Wa(279,`app-tabs`,null,5),cf(),Aa(281,`pre`)(282,`code`,35),bT(283,`
import { createParamDecorator, type ExecutionContext } from '@nestjs/common';

export const AccessToken = createParamDecorator((_: unknown, context: ExecutionContext) => {
  const { authorization } = context.switchToHttp().getRequest().headers;
  return authorization?.replace(/^Bearer /i, '');
});
`),cf()()(),Aa(284,`p`),bT(285,`Prefer `),Aa(286,`code`),bT(287,`forUser()`),cf(),bT(288,` in a route that acts for a user. Your policies keep applying, so a query that forgets a filter still returns only that user's rows, and an insert for someone else is refused:`),cf(),Aa(289,`app-copy-button`,40)(290,`span`,41),bT(291),LT(292,`extension`),Wa(293,`app-tabs`,null,6),cf(),Aa(295,`pre`)(296,`code`,35),bT(297,`
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CurrentUser } from '@nestjs/authentication';
import { AccessToken } from '../supabase/access-token.decorator.js';
import type { SupabaseUser } from '../supabase/supabase-auth.js';
import { SupabaseService } from '../supabase/supabase.service.js';

@Controller('notes')
export class NotesController {
  constructor(private readonly supabase: SupabaseService) {}

  @Get()
  async findAll(@AccessToken() token: string) {
    const { data, error } = await this.supabase.forUser(token).from('notes').select('body');
    if (error) {
      throw error;
    }
    return data;
  }

  @Post()
  async create(
    @AccessToken() token: string,
    @CurrentUser() user: SupabaseUser,
    @Body('body') body: string,
  ) {
    const { error } = await this.supabase.forUser(token).from('notes').insert({ user_id: user.id, body });
    if (error) {
      throw error;
    }
  }
}
`),cf()()(),Aa(298,`p`),bT(299,`Use `),Aa(300,`code`),bT(301,`admin`),cf(),bT(302,` for what the server does on its own behalf, where no user is involved, as in a job or a webhook.`),cf(),Aa(303,`h4`,46)(304,`span`),bT(305,`Query Postgres directly`),cf()(),Aa(306,`p`),bT(307,`For transactions and for queries that the REST API can't express, connect to the database with `),Aa(308,`a`,47)(309,`code`),bT(310,`@nestjs/drizzle`),cf()(),bT(311,` or another `),Aa(312,`a`,48),bT(313,`database integration`),cf(),bT(314,`. The webhooks and jobs below use this connection too:`),cf(),Aa(315,`pre`)(316,`code`,30),bT(317,`
$ npm i --save @nestjs/drizzle drizzle-orm pg
`),cf()(),Aa(318,`app-copy-button`)(319,`pre`)(320,`code`,35),bT(321,`
DrizzleModule.forRoot({ drizzle, connection: process.env.DATABASE_URL! }),
`),cf()()(),Aa(322,`p`),bT(323,`Locally, `),Aa(324,`code`),bT(325,`DATABASE_URL`),cf(),bT(326,` is the stack's `),Aa(327,`code`),bT(328,`DB_URL`),cf(),bT(329,`. On a hosted project, Nest is a persistent backend, so use the `),Aa(330,`a`,49),bT(331,`direct connection string`),cf(),bT(332,`, or the shared pooler in session mode if your host only has IPv4. The pooler's transaction mode doesn't support prepared statements, nor the `),Aa(333,`code`),bT(334,`LISTEN`),cf(),bT(335,` that BullMQ's PostgreSQL backend uses.`),cf(),Aa(336,`p`),bT(337,`Supabase's migrations stay the source of truth, so the Drizzle schema only describes the tables to query:`),cf(),Aa(338,`app-copy-button`,40)(339,`span`,41),bT(340),LT(341,`extension`),Wa(342,`app-tabs`,null,7),cf(),Aa(344,`pre`)(345,`code`,35),bT(346,`
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const notes = pgTable('notes', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  body: text('body').notNull(),
});
`),cf()()(),Aa(347,`blockquote`,31)(348,`strong`),bT(349,`Warning`),cf(),bT(350,` Row level security doesn't protect these queries. The `),Aa(351,`code`),bT(352,`postgres`),cf(),bT(353,` role bypasses it, so a query with no filter returns every user's rows, and each query has to check the owner itself.
`),cf(),Aa(354,`p`),bT(355,`To keep your policies on a direct query instead, run it in a transaction as the `),Aa(356,`code`),bT(357,`authenticated`),cf(),bT(358,` role, with the claims that `),Aa(359,`code`),bT(360,`auth.uid()`),cf(),bT(361,` reads:`),cf(),Aa(362,`app-copy-button`,40)(363,`span`,41),bT(364),LT(365,`extension`),Wa(366,`app-tabs`,null,8),cf(),Aa(368,`pre`)(369,`code`,35),bT(370,`
import { Injectable } from '@nestjs/common';
import type { JwtClaims } from '@nestjs/authentication';
import { InjectDrizzle } from '@nestjs/drizzle';
import { sql } from 'drizzle-orm';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';

type Transaction = Parameters<Parameters<NodePgDatabase['transaction']>[0]>[0];

@Injectable()
export class RowLevelSecurity {
  constructor(@InjectDrizzle() private readonly db: NodePgDatabase) {}

  asUser<T>(claims: JwtClaims, work: (tx: Transaction) => Promise<T>): Promise<T> {
    return this.db.transaction(async (tx) => {
      await tx.execute(sql\`
        select set_config('request.jwt.claims', \${JSON.stringify(claims)}, true),
               set_config('role', 'authenticated', true)
      \`);
      return work(tx);
    });
  }
}
`),cf()()(),Aa(371,`p`),bT(372,`Both settings end with the transaction, so they never reach the next query on that connection. Here's each way side by side, with `),Aa(373,`code`),bT(374,`@CurrentSession()`),cf(),bT(375,` giving a route the verified claims:`),cf(),Aa(376,`app-copy-button`,40)(377,`span`,41),bT(378),LT(379,`extension`),Wa(380,`app-tabs`,null,9),cf(),Aa(382,`pre`)(383,`code`,35),bT(384,`
import { Injectable } from '@nestjs/common';
import type { JwtClaims } from '@nestjs/authentication';
import { InjectDrizzle } from '@nestjs/drizzle';
import { eq } from 'drizzle-orm';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { RowLevelSecurity } from '../database/row-level-security.js';
import { notes } from '../database/schema.js';
import type { SupabaseUser } from '../supabase/supabase-auth.js';

@Injectable()
export class NotesRepository {
  constructor(
    @InjectDrizzle() private readonly db: NodePgDatabase,
    private readonly rls: RowLevelSecurity,
  ) {}

  /** Checks the owner itself. */
  findAll(user: SupabaseUser) {
    return this.db.select({ body: notes.body }).from(notes).where(eq(notes.userId, user.id));
  }

  /** Leaves the owner to the table's policy. */
  findAllAsUser(claims: JwtClaims) {
    return this.rls.asUser(claims, (tx) => tx.select({ body: notes.body }).from(notes));
  }
}
`),cf()()(),Aa(385,`h4`,50)(386,`span`),bT(387,`Protect an admin API`),cf()(),Aa(388,`p`),bT(389,`An admin API is what the browser can't do itself, as it needs the secret key. Keep a user's role in `),Aa(390,`code`),bT(391,`app_metadata`),cf(),bT(392,`, which `),Aa(393,`code`),bT(394,`SupabaseAuth`),cf(),bT(395,` already reads, and set it from the server:`),cf(),Aa(396,`app-copy-button`)(397,`pre`)(398,`code`,35),bT(399,`
await supabase.admin.auth.admin.updateUserById(userId, {
  app_metadata: { role: 'admin' },
});
`),cf()()(),Aa(400,`p`),bT(401,`The role is in the user's next token, so someone already signed in gets it when their token refreshes, within an hour by default.`),cf(),Aa(402,`p`),bT(403,`Check it with `),Aa(404,`a`,51)(405,`code`),bT(406,`@nestjs/authorization`),cf()(),bT(407,`:`),cf(),Aa(408,`pre`)(409,`code`,30),bT(410,`
$ npm i --save @nestjs/authorization
`),cf()(),Aa(411,`app-copy-button`,40)(412,`span`,41),bT(413),LT(414,`extension`),Wa(415,`app-tabs`,null,10),cf(),Aa(417,`pre`)(418,`code`,35),bT(419,`
import { Policy } from '@nestjs/authorization';
import type { SupabaseUser } from '../supabase/supabase-auth.js';

@Policy()
export class AdminPolicy {
  manage(user: SupabaseUser | null) {
    return user?.role === 'admin';
  }
}
`),cf()()(),Aa(420,`app-copy-button`,40)(421,`span`,41),bT(422),LT(423,`extension`),Wa(424,`app-tabs`,null,11),cf(),Aa(426,`pre`)(427,`code`,35),bT(428,`
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthorizationGuard, Can } from '@nestjs/authorization';
import { SupabaseService } from '../supabase/supabase.service.js';
import { AdminPolicy } from './admin.policy.js';

@UseGuards(AuthorizationGuard)
@Can(AdminPolicy, 'manage')
@Controller('admin/users')
export class AdminUsersController {
  constructor(private readonly supabase: SupabaseService) {}

  @Get()
  async findAll() {
    const { data, error } = await this.supabase.admin.auth.admin.listUsers();
    if (error) {
      throw error;
    }
    return data.users.map(({ id, email }) => ({ id, email }));
  }
}
`),cf()()(),Aa(429,`p`),bT(430,`Register the module with `),Aa(431,`code`),bT(432),cf(),bT(433,`, and `),Aa(434,`code`),bT(435,`AdminPolicy`),cf(),bT(436,` in `),Aa(437,`code`),bT(438,`providers`),cf(),bT(439,`. Its global guard is on by default and denies every route that has no `),Aa(440,`code`),bT(441,`@Can()`),cf(),bT(442,`, which would also close the routes above. A guest gets `),Aa(443,`code`),bT(444,`401`),cf(),bT(445,`, a user without the role `),Aa(446,`code`),bT(447,`403`),cf(),bT(448,`.`),cf(),Aa(449,`h4`,52)(450,`span`),bT(451,`Receive Stripe webhooks`),cf()(),Aa(452,`p`)(453,`a`,53)(454,`code`),bT(455,`@nestjs/webhooks`),cf()(),bT(456,` verifies a webhook's signature and remembers which events it has processed. It keeps its state in your database, through `),Aa(457,`code`),bT(458,`@nestjs/outbox`),cf(),bT(459,`, in schemas of their own. Supabase's API doesn't serve those schemas, so they stay private:`),cf(),Aa(460,`pre`)(461,`code`,30),bT(462,`
$ npm i --save @nestjs/webhooks @nestjs/outbox
`),cf()(),Aa(463,`p`),bT(464,`The signature covers the exact bytes that Stripe sent, so create the application with `),Aa(465,`code`),bT(466,`rawBody`),cf(),bT(467,`:`),cf(),Aa(468,`app-copy-button`,40)(469,`span`,41),bT(470),LT(471,`extension`),Wa(472,`app-tabs`,null,12),cf(),Aa(474,`pre`)(475,`code`,35),bT(476,`
const app = await NestFactory.create(AppModule, { rawBody: true });
`),cf()()(),Aa(477,`p`),bT(478,`Name the sender in the module's `),Aa(479,`code`),bT(480,`receivers`),cf(),bT(481,`, with the signing secret from the Stripe dashboard or from `),Aa(482,`code`),bT(483,`stripe listen`),cf(),bT(484,`. This application only receives webhooks, so it needs neither of the background workers:`),cf(),Aa(485,`app-copy-button`)(486,`pre`)(487,`code`,35),bT(488,`
OutboxModule.forRoot({ relay: { enabled: false } }),
WebhooksModule.forRoot({
  worker: { enabled: false },
  receivers: {
    stripe: { scheme: 'stripe', secret: process.env.STRIPE_WEBHOOK_SECRET! },
  },
}),
`),cf()()(),Aa(489,`p`),bT(490,`Register the two stores in `),Aa(491,`code`),bT(492,`providers`),cf(),bT(493,`. `),Aa(494,`code`),bT(495,`migrate: true`),cf(),bT(496,` creates their schemas at startup, which suits development (see `),Aa(497,`a`,54),bT(498,`Deployment`),cf(),bT(499,` for production):`),cf(),Aa(500,`app-copy-button`)(501,`pre`)(502,`code`,35),bT(503,`
{
  provide: PostgresOutboxStore,
  inject: [getDrizzleToken(), OutboxStorage],
  useFactory: (db: NodePgDatabase, storage: OutboxStorage) =>
    new PostgresOutboxStore({ executor: fromDrizzle(db), migrate: true }, storage),
},
{
  provide: PostgresWebhookStore,
  inject: [getDrizzleToken(), WebhooksStorage],
  useFactory: (db: NodePgDatabase, storage: WebhooksStorage) =>
    new PostgresWebhookStore({ executor: fromDrizzle(db), migrate: true }, storage),
},
`),cf()()(),Aa(504,`p`),bT(505,`Add a table for what the webhook changes. Only Nest reads it, and the policy-less row level security keeps it from the browser. Add it to a new migration:`),cf(),Aa(506,`pre`)(507,`code`,37),bT(508,`
create table public.subscriptions (
  stripe_customer text primary key,
  active boolean not null,
  expires_at timestamptz
);

alter table public.subscriptions enable row level security;
`),cf()(),Aa(509,`app-copy-button`,40)(510,`span`,41),bT(511),LT(512,`extension`),Wa(513,`app-tabs`,null,13),cf(),Aa(515,`pre`)(516,`code`,35),bT(517,`
import { boolean, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const subscriptions = pgTable('subscriptions', {
  stripeCustomer: text('stripe_customer').primaryKey(),
  active: boolean('active').notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: true }),
});
`),cf()()(),Aa(518,`p`),bT(519,`The route is `),Aa(520,`code`),bT(521,`@Public()`),cf(),bT(522,`, as the signature is what authenticates it, and an invalid one gets `),Aa(523,`code`),bT(524,`401`),cf(),bT(525,`. `),Aa(526,`code`),bT(527,`processInTransaction()`),cf(),bT(528,` records the event's id in the same transaction as your change, so a redelivery changes nothing:`),cf(),Aa(529,`app-copy-button`,40)(530,`span`,41),bT(531),LT(532,`extension`),Wa(533,`app-tabs`,null,14),cf(),Aa(535,`pre`)(536,`code`,35),bT(537,`
import { Controller, HttpCode, Post } from '@nestjs/common';
import { Public } from '@nestjs/authentication';
import { InjectDrizzle } from '@nestjs/drizzle';
import { IncomingWebhook, VerifyWebhook } from '@nestjs/webhooks';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { subscriptions } from '../database/schema.js';

interface StripeEvent {
  id: string;
  type: string;
  data: { object: { customer: string; status: string; cancel_at: number | null } };
}

@Public()
@Controller('webhooks/stripe')
export class StripeWebhooksController {
  constructor(@InjectDrizzle() private readonly db: NodePgDatabase) {}

  @Post()
  @HttpCode(200)
  @VerifyWebhook('stripe')
  async receive(@IncomingWebhook() webhook: IncomingWebhook<StripeEvent>) {
    const { type, data } = webhook.payload;
    if (type !== 'customer.subscription.updated') {
      return;
    }
    const { customer, status, cancel_at } = data.object;
    const values = {
      active: status === 'active',
      expiresAt: cancel_at ? new Date(cancel_at * 1000) : null,
    };
    await this.db.transaction(async (tx) =>
      webhook.processInTransaction(tx, async () => {
        await tx
          .insert(subscriptions)
          .values({ stripeCustomer: customer, ...values })
          .onConflictDoUpdate({ target: subscriptions.stripeCustomer, set: values });
      }),
    );
  }
}
`),cf()()(),Aa(538,`p`),bT(539,`To try it, forward events to your application with the `),Aa(540,`a`,55),bT(541,`Stripe CLI`),cf(),bT(542,`, which prints the signing secret to put in `),Aa(543,`code`),bT(544,`STRIPE_WEBHOOK_SECRET`),cf(),bT(545,`:`),cf(),Aa(546,`pre`)(547,`code`,30),bT(548,`
$ stripe listen --forward-to localhost:3000/webhooks/stripe
$ stripe trigger customer.subscription.updated
`),cf()(),Aa(549,`h4`,56)(550,`span`),bT(551,`Run scheduled jobs`),cf()(),Aa(552,`p`),bT(553,`There are two ways to run a job in Nest. Both work on any number of instances, and each run happens on one of them:`),cf(),Aa(554,`table`),Wa(555,`thead`),Aa(556,`tbody`)(557,`tr`)(558,`td`)(559,`strong`),bT(560,`Where it runs`),cf()(),Aa(561,`td`),bT(562,`In the instance that holds the lease`),cf(),Aa(563,`td`),bT(564,`In a worker that picks it up`),cf()(),Aa(565,`tr`)(566,`td`)(567,`strong`),bT(568,`If a run fails`),cf()(),Aa(569,`td`),bT(570,`It waits for the next tick`),cf(),Aa(571,`td`),bT(572,`It retries, with a backoff`),cf()(),Aa(573,`tr`)(574,`td`)(575,`strong`),bT(576,`If every instance is down`),cf()(),Aa(577,`td`),bT(578,`The tick is missed`),cf(),Aa(579,`td`),bT(580,`The job waits in the queue`),cf()(),Aa(581,`tr`)(582,`td`)(583,`strong`),bT(584,`What it adds to Postgres`),cf()(),Aa(585,`td`),bT(586,`One table`),cf(),Aa(587,`td`),bT(588,`A schema of its own`),cf()(),Aa(589,`tr`)(590,`td`)(591,`strong`),bT(592,`What else it does`),cf()(),Aa(593,`td`),bT(594,`Nothing else`),cf(),Aa(595,`td`),bT(596,`Jobs enqueued from your code, priorities and flows`),cf()(),Aa(597,`tr`)(598,`td`)(599,`strong`),bT(600,`Choose it for`),cf()(),Aa(601,`td`),bT(602,`A job that's safe to skip, as the next tick catches up`),cf(),Aa(603,`td`),bT(604,`A job that mustn't be lost, or runs for long`),cf()()()(),Aa(605,`p`),bT(606,`Both can call the same code:`),cf(),Aa(607,`app-copy-button`,40)(608,`span`,41),bT(609),LT(610,`extension`),Wa(611,`app-tabs`,null,15),cf(),Aa(613,`pre`)(614,`code`,35),bT(615,`
import { Injectable } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { and, eq, lt } from 'drizzle-orm';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { subscriptions } from '../database/schema.js';

@Injectable()
export class SubscriptionsService {
  constructor(@InjectDrizzle() private readonly db: NodePgDatabase) {}

  /** Catches a subscription whose cancellation event never arrived. */
  async expireOverdue() {
    await this.db
      .update(subscriptions)
      .set({ active: false })
      .where(and(eq(subscriptions.active, true), lt(subscriptions.expiresAt, new Date())));
  }
}
`),cf()()(),Aa(616,`blockquote`,32)(617,`strong`),bT(618,`Hint`),cf(),Aa(619,`a`,57),bT(620,`Supabase Cron`),cf(),bT(621,` schedules SQL inside Postgres, with no application involved. It's a good fit for a job that's only SQL, such as deleting old rows.
`),cf(),Aa(622,`h5`,58)(623,`span`),bT(624,`With `),Aa(625,`code`),bT(626,`@nestjs/schedule`),cf(),bT(627,` and `),Aa(628,`code`),bT(629,`@nestjs/locks`),cf()()(),Aa(630,`p`)(631,`a`,59)(632,`code`),bT(633,`@nestjs/schedule`),cf()(),bT(634,` runs a job inside the application, next to the code it calls. On its own, it runs the job on every instance. `),Aa(635,`a`,60)(636,`code`),bT(637,`@nestjs/locks`),cf()(),bT(638,` adds `),Aa(639,`code`),bT(640,`@OnOneInstance()`),cf(),bT(641,`: the first instance to fire takes a lease and runs every tick while it's up, and the others skip them. When it stops, another takes over, about a second after a clean shutdown and within 30 seconds after a crash:`),cf(),Aa(642,`pre`)(643,`code`,30),bT(644,`
$ npm i --save @nestjs/schedule @nestjs/locks
`),cf()(),Aa(645,`app-copy-button`,40)(646,`span`,41),bT(647),LT(648,`extension`),Wa(649,`app-tabs`,null,16),cf(),Aa(651,`pre`)(652,`code`,35),bT(653,`
import { Injectable } from '@nestjs/common';
import { OnOneInstance } from '@nestjs/locks';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SubscriptionsService } from './subscriptions.service.js';

@Injectable()
export class ExpireSubscriptionsJob {
  constructor(private readonly subscriptions: SubscriptionsService) {}

  @Cron(CronExpression.EVERY_HOUR)
  @OnOneInstance({ key: 'subscriptions:expire' })
  async run() {
    await this.subscriptions.expireOverdue();
  }
}
`),cf()()(),Aa(654,`app-copy-button`)(655,`pre`)(656,`code`,35),bT(657,`
ScheduleModule.forRoot(),
LocksModule.forRoot(),
`),cf()()(),Aa(658,`p`),bT(659,`The lease has to live somewhere that all instances share, and in production the application refuses to start with only the default in-memory store. Keep it in your database, with a table in a new migration:`),cf(),Aa(660,`pre`)(661,`code`,37),bT(662,`
create table public.locks (
  key text primary key,
  owner text,
  fencing_token bigint not null,
  expires_at timestamptz not null
);

alter table public.locks enable row level security;

create sequence public.locks_fencing_token_seq;
`),cf()(),Aa(663,`p`),bT(664,`Then copy the Drizzle table and `),Aa(665,`code`),bT(666,`DrizzleLockStore`),cf(),bT(667,` from `),Aa(668,`a`,61),bT(669,`Keep locks in your database`),cf(),bT(670,`, and add the store to `),Aa(671,`code`),bT(672,`providers`),cf(),bT(673,`.`),cf(),Aa(674,`h5`,62)(675,`span`),bT(676,`With BullMQ`),cf()(),Aa(677,`p`)(678,`a`,63),bT(679,`BullMQ`),cf(),bT(680,` keeps jobs in a queue, with retries and a backoff. It usually runs on Redis, and it also has a PostgreSQL backend, so on Supabase it can use the database you already have:`),cf(),Aa(681,`pre`)(682,`code`,30),bT(683,`
$ npm i --save @nestjs/bullmq bullmq
`),cf()(),Aa(684,`app-copy-button`)(685,`pre`)(686,`code`,35),bT(687,`
BullModule.forRoot({
  backendFactory: createPostgresBackend,
  connection: { connectionString: process.env.DATABASE_URL!, migrate: true },
}),
BullModule.registerQueue({ name: 'billing' }),
`),cf()()(),Aa(688,`p`)(689,`code`),bT(690,`migrate: true`),cf(),bT(691,` creates the `),Aa(692,`code`),bT(693,`bullmq`),cf(),bT(694,` schema at startup, which Supabase's API doesn't serve. The migration takes an advisory lock, so several instances starting together apply it once.`),cf(),Aa(695,`blockquote`,32)(696,`strong`),bT(697,`Hint`),cf(),bT(698,` To use Redis, install `),Aa(699,`code`),bT(700,`ioredis`),cf(),bT(701,` and replace those options with `),Aa(702,`code`),bT(703),cf(),bT(704,`. Nothing else changes.
`),cf(),Aa(705,`p`),bT(706,`A job scheduler creates the job on each tick. The id makes it one schedule, however many instances declare it:`),cf(),Aa(707,`app-copy-button`,40)(708,`span`,41),bT(709),LT(710,`extension`),Wa(711,`app-tabs`,null,17),cf(),Aa(713,`pre`)(714,`code`,35),bT(715,`
import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, type OnApplicationBootstrap } from '@nestjs/common';
import type { Queue } from 'bullmq';

@Injectable()
export class BillingScheduler implements OnApplicationBootstrap {
  constructor(@InjectQueue('billing') private readonly billing: Queue) {}

  async onApplicationBootstrap() {
    await this.billing.upsertJobScheduler(
      'expire-subscriptions',
      { pattern: '0 * * * *' },
      {
        name: 'expire-subscriptions',
        opts: { attempts: 3, backoff: { type: 'exponential', delay: 1000 } },
      },
    );
  }
}
`),cf()()(),Aa(716,`p`),bT(717,`The processor runs it, on whichever instance is free:`),cf(),Aa(718,`app-copy-button`,40)(719,`span`,41),bT(720),LT(721,`extension`),Wa(722,`app-tabs`,null,18),cf(),Aa(724,`pre`)(725,`code`,35),bT(726,`
import { Processor, WorkerHost } from '@nestjs/bullmq';
import type { Job } from 'bullmq';
import { SubscriptionsService } from './subscriptions.service.js';

@Processor('billing')
export class BillingProcessor extends WorkerHost {
  constructor(private readonly subscriptions: SubscriptionsService) {
    super();
  }

  async process(job: Job) {
    if (job.name === 'expire-subscriptions') {
      await this.subscriptions.expireOverdue();
    }
  }
}
`),cf()()(),Aa(727,`p`),bT(728,`The same queue takes jobs from your own code, such as a route that shouldn't wait for an email. Inject it with `),Aa(729,`code`),bT(730,`@InjectQueue('billing')`),cf(),bT(731,`, and add a case for the job to the processor:`),cf(),Aa(732,`app-copy-button`)(733,`pre`)(734,`code`,35),bT(735,`
await this.billing.add('send-invoice', { customer }, {
  attempts: 3,
  backoff: { type: 'exponential', delay: 1000 },
});
`),cf()()(),Aa(736,`h4`,64)(737,`span`),bT(738,`Hand out file uploads`),cf()(),Aa(739,`p`),bT(740,`A browser can upload to Supabase Storage directly, under policies on the `),Aa(741,`code`),bT(742,`storage.objects`),cf(),bT(743,` table. When the decision belongs on the server, such as a quota or a paid plan, keep the bucket private and let Nest sign each upload. Create the bucket in a migration:`),cf(),Aa(744,`pre`)(745,`code`,37),bT(746,`
insert into storage.buckets (id, name, public) values ('uploads', 'uploads', false);
`),cf()(),Aa(747,`app-copy-button`,40)(748,`span`,41),bT(749),LT(750,`extension`),Wa(751,`app-tabs`,null,19),cf(),Aa(753,`pre`)(754,`code`,35),bT(755,`
import { randomUUID } from 'node:crypto';
import { Controller, Post } from '@nestjs/common';
import { CurrentUser } from '@nestjs/authentication';
import type { SupabaseUser } from '../supabase/supabase-auth.js';
import { SupabaseService } from '../supabase/supabase.service.js';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly supabase: SupabaseService) {}

  @Post()
  async create(@CurrentUser() user: SupabaseUser) {
    const path = \`\${user.id}/\${randomUUID()}\`;
    const { data, error } = await this.supabase.admin.storage.from('uploads').createSignedUploadUrl(path);
    if (error) {
      throw error;
    }
    return { path: data.path, token: data.token };
  }
}
`),cf()()(),Aa(756,`p`),bT(757,`The browser then uploads straight to Supabase, so the file never passes through your application:`),cf(),Aa(758,`app-copy-button`)(759,`pre`)(760,`code`,35),bT(761,`
await supabase.storage.from('uploads').uploadToSignedUrl(path, token, file);
`),cf()()(),Aa(762,`p`),bT(763,`To hand a file back, `),Aa(764,`code`),bT(765,`createSignedUrl(path, 60)`),cf(),bT(766,` on the admin client makes a link that works for 60 seconds.`),cf(),Aa(767,`h4`,65)(768,`span`),bT(769,`Test against the local stack`),cf()(),Aa(770,`p`),bT(771,`An end-to-end test can use real tokens and your real policies, as the stack gives you both. Put it in `),Aa(772,`code`),bT(773,`test/`),cf(),bT(774,`, and run `),Aa(775,`code`),bT(776,`npx supabase start`),cf(),bT(777,` and `),Aa(778,`code`),bT(779,`npx supabase db reset`),cf(),bT(780,` before it:`),cf(),Aa(781,`app-copy-button`,40)(782,`span`,41),bT(783),LT(784,`extension`),Wa(785,`app-tabs`,null,20),cf(),Aa(787,`pre`)(788,`code`,35),bT(789,`
import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'node:crypto';
import request from 'supertest';
import { AppModule } from '../src/app.module.js';
import { SupabaseService } from '../src/supabase/supabase.service.js';

describe('Notes', () => {
  let app: INestApplication;

  const signUp = async () => {
    const client = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data, error } = await client.auth.signUp({
      email: \`\${randomUUID()}@example.test\`,
      password: randomUUID(),
    });
    if (error) {
      throw error;
    }
    return { id: data.user!.id, token: data.session!.access_token };
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(() => app.close());

  it('shows a user only their own notes', async () => {
    const [alice, bob] = [await signUp(), await signUp()];
    await app.get(SupabaseService).admin.from('notes').insert([
      { user_id: alice.id, body: 'from alice' },
      { user_id: bob.id, body: 'from bob' },
    ]);

    const { body } = await request(app.getHttpServer())
      .get('/notes')
      .set('Authorization', \`Bearer \${alice.token}\`)
      .expect(200);

    expect(body).toEqual([{ body: 'from alice' }]);
  });
});
`),cf()()(),Aa(790,`h4`,66)(791,`span`),bT(792,`Move an Edge Function to Nest`),cf()(),Aa(793,`p`),bT(794,`Most of a function has a direct counterpart, and you can move them one at a time, as both use the same tokens and database:`),cf(),Aa(795,`table`)(796,`thead`)(797,`tr`)(798,`th`),bT(799,`In an Edge Function`),cf(),Aa(800,`th`),bT(801,`In Nest`),cf()()(),Aa(802,`tbody`)(803,`tr`)(804,`td`),bT(805,`Reading the `),Aa(806,`code`),bT(807,`Authorization`),cf(),bT(808,` header and calling `),Aa(809,`code`),bT(810,`supabase.auth.getUser()`),cf()(),Aa(811,`td`)(812,`code`),bT(813,`SupabaseAuth`),cf(),bT(814,` and `),Aa(815,`code`),bT(816,`@CurrentUser()`),cf()()(),Aa(817,`tr`)(818,`td`),bT(819,`A client created with the caller's header`),cf(),Aa(820,`td`)(821,`code`),bT(822,`SupabaseService.forUser()`),cf()()(),Aa(823,`tr`)(824,`td`),bT(825,`A client created with the secret key`),cf(),Aa(826,`td`)(827,`code`),bT(828,`SupabaseService.admin`),cf()()(),Aa(829,`tr`)(830,`td`),bT(831,`Verifying Stripe's signature by hand`),cf(),Aa(832,`td`)(833,`code`),bT(834,`@VerifyWebhook('stripe')`),cf()()(),Aa(835,`tr`)(836,`td`)(837,`code`),bT(838,`pg_cron`),cf(),bT(839,` calling the function over HTTP`),cf(),Aa(840,`td`)(841,`code`),bT(842,`@Cron()`),cf(),bT(843,`, or a BullMQ job scheduler`),cf()(),Aa(844,`tr`)(845,`td`)(846,`code`),bT(847,`supabase secrets set`),cf()(),Aa(848,`td`),bT(849,`Your host's environment variables`),cf()(),Aa(850,`tr`)(851,`td`)(852,`code`),bT(853,`supabase.functions.invoke('name')`),cf(),bT(854,` in the browser`),cf(),Aa(855,`td`)(856,`code`),bT(857,`fetch()`),cf(),bT(858,` with the access token`),cf()()()(),Aa(859,`h4`,67)(860,`span`),bT(861,`The finished module`),cf()(),Aa(862,`p`),bT(863,`Here's everything above wired together, with both ways of running a job, of which you'll keep one:`),cf(),Aa(864,`app-copy-button`,40)(865,`span`,41),bT(866),LT(867,`extension`),Wa(868,`app-tabs`,null,21),cf(),Aa(870,`pre`)(871,`code`,35),bT(872,`
import { Module } from '@nestjs/common';
import { AuthenticationModule } from '@nestjs/authentication';
import { AuthorizationModule } from '@nestjs/authorization';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule } from '@nestjs/config';
import { DrizzleModule, getDrizzleToken } from '@nestjs/drizzle';
import { LocksModule } from '@nestjs/locks';
import { OutboxModule, OutboxStorage } from '@nestjs/outbox';
import { PostgresOutboxStore } from '@nestjs/outbox/postgres';
import { ScheduleModule } from '@nestjs/schedule';
import { WebhooksModule, WebhooksStorage } from '@nestjs/webhooks';
import { fromDrizzle, PostgresWebhookStore } from '@nestjs/webhooks/postgres';
import { createPostgresBackend } from 'bullmq';
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { AdminUsersController } from './admin/admin-users.controller.js';
import { AdminPolicy } from './admin/admin.policy.js';
import { BillingProcessor } from './billing/billing.processor.js';
import { BillingScheduler } from './billing/billing.scheduler.js';
import { ExpireSubscriptionsJob } from './billing/expire-subscriptions.job.js';
import { StripeWebhooksController } from './billing/stripe-webhooks.controller.js';
import { SubscriptionsService } from './billing/subscriptions.service.js';
import { DrizzleLockStore } from './database/drizzle-lock.store.js';
import { RowLevelSecurity } from './database/row-level-security.js';
import { MeController } from './me/me.controller.js';
import { NotesController } from './notes/notes.controller.js';
import { NotesRepository } from './notes/notes.repository.js';
import { SupabaseAuth } from './supabase/supabase-auth.js';
import { SupabaseService } from './supabase/supabase.service.js';
import { UploadsController } from './uploads/uploads.controller.js';

@Module({
  imports: [
    ConfigModule.forRoot(), // first, as the lines below read process.env
    AuthenticationModule.forRoot({}),
    AuthorizationModule.forRoot({ globalGuard: false }),
    DrizzleModule.forRoot({ drizzle, connection: process.env.DATABASE_URL! }),
    OutboxModule.forRoot({ relay: { enabled: false } }),
    WebhooksModule.forRoot({
      worker: { enabled: false },
      receivers: {
        stripe: { scheme: 'stripe', secret: process.env.STRIPE_WEBHOOK_SECRET! },
      },
    }),
    // Jobs with @nestjs/schedule and @nestjs/locks
    ScheduleModule.forRoot(),
    LocksModule.forRoot(),
    // Jobs with BullMQ
    BullModule.forRoot({
      backendFactory: createPostgresBackend,
      connection: { connectionString: process.env.DATABASE_URL!, migrate: true },
    }),
    BullModule.registerQueue({ name: 'billing' }),
  ],
  controllers: [
    MeController,
    NotesController,
    AdminUsersController,
    StripeWebhooksController,
    UploadsController,
  ],
  providers: [
    SupabaseAuth,
    SupabaseService,
    RowLevelSecurity,
    NotesRepository,
    AdminPolicy,
    SubscriptionsService,
    {
      provide: PostgresOutboxStore,
      inject: [getDrizzleToken(), OutboxStorage],
      useFactory: (db: NodePgDatabase, storage: OutboxStorage) =>
        new PostgresOutboxStore({ executor: fromDrizzle(db), migrate: true }, storage),
    },
    {
      provide: PostgresWebhookStore,
      inject: [getDrizzleToken(), WebhooksStorage],
      useFactory: (db: NodePgDatabase, storage: WebhooksStorage) =>
        new PostgresWebhookStore({ executor: fromDrizzle(db), migrate: true }, storage),
    },
    // Jobs with @nestjs/schedule and @nestjs/locks
    ExpireSubscriptionsJob,
    DrizzleLockStore,
    // Jobs with BullMQ
    BillingScheduler,
    BillingProcessor,
  ],
})
export class AppModule {}
`),cf()()(),Aa(873,`app-copy-button`,40)(874,`span`,41),bT(875),LT(876,`extension`),Wa(877,`app-tabs`,null,22),cf(),Aa(879,`pre`)(880,`code`,35),bT(881,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });
  app.enableCors({ origin: process.env.WEB_ORIGIN });
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(882,`p`)(883,`code`),bT(884,`enableShutdownHooks()`),cf(),bT(885,` lets a running job finish and passes its lease on when a deploy stops an instance.`),cf(),Aa(886,`h4`,68)(887,`span`),bT(888,`Deployment`),cf()(),Aa(889,`p`),bT(890,`Nest deploys separately from Supabase, on anything that runs Node.js (see `),Aa(891,`a`,69),bT(892,`Deployment`),cf(),bT(893,`). Host it close to your database's region, as every query crosses that distance.`),cf(),Aa(894,`p`),bT(895,`Apply your migrations to the hosted project:`),cf(),Aa(896,`pre`)(897,`code`,30),bT(898,`
$ npx supabase link --project-ref your-project-ref
$ npx supabase db push
`),cf()(),Aa(899,`p`),bT(900,`Set the same environment variables on your host, with the hosted project's values and the connection string from `),Aa(901,`a`,70),bT(902,`Query Postgres directly`),cf(),bT(903,`. Each instance opens its own connections, for Drizzle and for BullMQ, so count them against your project's `),Aa(904,`a`,71),bT(905,`connection limit`),cf(),bT(906,`.`),cf(),Aa(907,`p`),bT(908,`The webhook stores shouldn't change a schema while a new version boots, in the middle of a rolling deploy. Remove `),Aa(909,`code`),bT(910,`migrate: true`),cf(),bT(911,` from those two, and apply their migrations as a step before the new version starts, with `),Aa(912,`code`),bT(913,`DATABASE_URL`),cf(),bT(914,` set. BullMQ's can stay, as it runs in one transaction under an advisory lock:`),cf(),Aa(915,`pre`)(916,`code`,30),bT(917,`
$ npx @nestjs/webhooks migrate
$ npx @nestjs/outbox migrate
`),cf()()(),Aa(918,`a`,72),Wa(919,`i`,73),Aa(920,`span`),bT(921,`Edit on GitHub`),cf()()()),c&2){let v=tT(172),w=tT(209),k=tT(248),I=tT(269),C=tT(280),T=tT(294),q=tT(343),P=tT(367),B=tT(381),N=tT(416),U=tT(425),D=tT(473),J=tT(514),O=tT(534),F=tT(612),H=tT(650),W=tT(712),G=tT(723),pe=tT(752),ue=tT(786),he=tT(869),xe=tT(878);zC(169),hf(` `,jT(170,26,`supabase/supabase-auth`,v.isJsActive),`
`),zC(37),hf(` `,jT(207,29,`me/me.controller`,w.isJsActive),`
`),zC(39),hf(` `,jT(246,32,`main`,k.isJsActive),`
`),zC(21),hf(` `,jT(267,35,`supabase/supabase.service`,I.isJsActive),`
`),zC(11),hf(` `,jT(278,38,`supabase/access-token.decorator`,C.isJsActive),`
`),zC(14),hf(` `,jT(292,41,`notes/notes.controller`,T.isJsActive),`
`),zC(49),hf(` `,jT(341,44,`database/schema`,q.isJsActive),`
`),zC(24),hf(` `,jT(365,47,`database/row-level-security`,P.isJsActive),`
`),zC(14),hf(` `,jT(379,50,`notes/notes.repository`,B.isJsActive),`
`),zC(35),hf(` `,jT(414,53,`admin/admin.policy`,N.isJsActive),`
`),zC(9),hf(` `,jT(423,56,`admin/admin-users.controller`,U.isJsActive),`
`),zC(10),Ky(`AuthorizationModule.forRoot(`,`{`,` globalGuard: false `,`}`,`)`),zC(38),hf(` `,jT(471,59,`main`,D.isJsActive),`
`),zC(41),hf(` `,jT(512,62,`database/schema`,J.isJsActive),`
`),zC(20),hf(` `,jT(532,65,`billing/stripe-webhooks.controller`,O.isJsActive),`
`),zC(78),hf(` `,jT(610,68,`billing/subscriptions.service`,F.isJsActive),`
`),zC(38),hf(` `,jT(648,71,`billing/expire-subscriptions.job`,H.isJsActive),`
`),zC(56),Ky(`connection: `,`{`,` host, port `,`}`),zC(6),hf(` `,jT(710,74,`billing/billing.scheduler`,W.isJsActive),`
`),zC(11),hf(` `,jT(721,77,`billing/billing.processor`,G.isJsActive),`
`),zC(29),hf(` `,jT(750,80,`uploads/uploads.controller`,pe.isJsActive),`
`),zC(34),hf(` `,jT(784,83,`notes.e2e-spec`,ue.isJsActive),`
`),zC(83),hf(` `,jT(867,86,`app.module`,he.isJsActive),`
`),zC(9),hf(` `,jT(876,89,`main`,xe.isJsActive),`
`)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return d})();var ie=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-fastify-migration`]],features:[xy],decls:609,vars:42,consts:[[`contentReference`,``],[`appe3a7d6df29d1d59bd35db741b18c860c9e7d6bdb`,``],[`app036532361e6257fc37e8302af71d533c646fe05a`,``],[`app608bd25da0264c8f12908728e3a6c07b2133992b`,``],[`appf079abfd6b64613767954633a889bd0ddc8acf7e`,``],[`app5079e5175f5e77e8b3cbd5618f650171bcc2afc1`,``],[`appa83149861a0077a6a936ef9228d808839609cc1c`,``],[1,`content`],[1,`content-inner`],[`id`,`migrating-from-fastify`],[`appAnchor`,``,`id`,`choose-an-approach`],[`href`,`/recipes/fastify-migration#give-it-to-a-coding-agent`],[`appAnchor`,``,`id`,`one-route-at-a-time`],[`appAnchor`,``,`id`,`requirements`],[1,`language-bash`],[`appAnchor`,``,`id`,`run-nest-on-the-fastify-app`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`routerLink`,`/exception-filters`],[`appAnchor`,``,`id`,`move-a-route`],[`routerLink`,`/guards`],[`href`,`/recipes/fastify-migration#keep-what-would-change-without-an-error`],[`appAnchor`,``,`id`,`finish-the-migration`],[`appAnchor`,``,`id`,`all-at-once`],[`appAnchor`,``,`id`,`pin-the-api-with-tests`],[`appAnchor`,``,`id`,`translate-the-application`],[`href`,`/http/performance#fastify-adapter`],[`routerLink`,`/controllers`],[`routerLink`,`/modules`],[`href`,`/fundamentals/custom-providers#value-providers-usevalue`],[`appAnchor`,``,`id`,`keep-what-would-change-without-an-error`],[`href`,`/application/validation#schema-based-validation`],[`appAnchor`,``,`id`,`switch-over`],[`appAnchor`,``,`id`,`give-it-to-a-coding-agent`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/fastify-migration.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,7,0)(2,`div`,8)(3,`h3`,9),bT(4,`Migrating from Fastify`),cf(),Aa(5,`p`),bT(6,`A Fastify application can move to Nest and stay on Fastify: your plugins keep working, and routes move one at a time or all at once.`),cf(),Aa(7,`p`),bT(8,`Nest runs on Fastify through the `),Aa(9,`code`),bT(10,`FastifyAdapter`),cf(),bT(11,`, so this isn't a change of server. The router, the plugins, the JSON schemas and the serialization stay the same, including how paths match, how query strings parse and how large a body may be. What you add is the structure around them: modules, dependency injection, and guards and pipes in place of hooks registered route by route.`),cf(),Aa(12,`h4`,10)(13,`span`),bT(14,`Choose an approach`),cf()(),Aa(15,`table`)(16,`thead`)(17,`tr`)(18,`th`),bT(19,`Question`),cf(),Aa(20,`th`),bT(21,`One route at a time`),cf(),Aa(22,`th`),bT(23,`All at once`),cf()()(),Aa(24,`tbody`)(25,`tr`)(26,`td`),bT(27,`How does it work?`),cf(),Aa(28,`td`),bT(29,`Nest runs on your Fastify instance, and routes move to it one by one`),cf(),Aa(30,`td`),bT(31,`A new Nest application replaces the Fastify app in one release`),cf()(),Aa(32,`tr`)(33,`td`),bT(34,`What gets deployed?`),cf(),Aa(35,`td`),bT(36,`Each moved route, on its own`),cf(),Aa(37,`td`),bT(38,`Everything, once`),cf()(),Aa(39,`tr`)(40,`td`),bT(41,`What happens to feature work?`),cf(),Aa(42,`td`),bT(43,`It continues, and new endpoints go into Nest`),cf(),Aa(44,`td`),bT(45,`It waits, or gets written twice, until the switch`),cf()(),Aa(46,`tr`)(47,`td`),bT(48,`How do you go back?`),cf(),Aa(49,`td`),bT(50,`Restore one route`),cf(),Aa(51,`td`),bT(52,`Deploy the last Fastify release`),cf()(),Aa(53,`tr`)(54,`td`),bT(55,`Which Fastify version?`),cf(),Aa(56,`td`),bT(57,`Fastify 5, so upgrade first`),cf(),Aa(58,`td`),bT(59,`Any, since the Fastify app isn't touched`),cf()(),Aa(60,`tr`)(61,`td`),bT(62,`What about existing plugins?`),cf(),Aa(63,`td`),bT(64,`They keep running, for Nest's routes too`),cf(),Aa(65,`td`),bT(66,`You register them again on the Nest application`),cf()(),Aa(67,`tr`)(68,`td`),bT(69,`How long are there two styles in the code?`),cf(),Aa(70,`td`),bT(71,`Until the last route moves`),cf(),Aa(72,`td`),bT(73,`Never`),cf()()()(),Aa(74,`p`),bT(75,`Move one route at a time when the application is large, when several people work on it, or when it can't wait. Move it all at once when it's small enough to review as one change and you can pin what it does with tests. That also suits a `),Aa(76,`a`,11),bT(77,`coding agent`),cf(),bT(78,`.`),cf(),Aa(79,`h4`,12)(80,`span`),bT(81,`One route at a time`),cf()(),Aa(82,`p`),bT(83,`The Fastify app keeps its routes, plugins and error handler, new endpoints are written in Nest, and existing ones move over when you next change them. Both answer on the same port, so clients don't notice, and every step can be deployed on its own.`),cf(),Aa(84,`h5`,13)(85,`span`),bT(86,`Requirements`),cf()(),Aa(87,`ul`)(88,`li`)(89,`strong`),bT(90,`Fastify 5.`),cf(),bT(91,` Nest's `),Aa(92,`code`),bT(93,`FastifyAdapter`),cf(),bT(94,` registers plugins that require it, so a Fastify 4 instance fails as soon as Nest starts. Upgrade the app first.`),cf(),Aa(95,`li`)(96,`strong`),bT(97,`TypeScript.`),cf(),bT(98,` The Nest code on this page is TypeScript. If the Fastify app is written in JavaScript, its files can stay as they are: TypeScript's `),Aa(99,`code`),bT(100,`allowJs`),cf(),bT(101,` option compiles them with the rest.`),cf()(),Aa(102,`p`),bT(103,`Install Nest next to Fastify:`),cf(),Aa(104,`pre`)(105,`code`,14),bT(106,`
$ npm i --save @nestjs/core @nestjs/common @nestjs/platform-fastify reflect-metadata rxjs
`),cf()(),Aa(107,`h5`,15)(108,`span`),bT(109,`Run Nest on the Fastify app`),cf()(),Aa(110,`p`),bT(111,`Nest normally creates its own Fastify instance. Give it yours instead. Stop the app from listening, and have a function return it. Nest sets the instance's own error and not-found handlers, so two things have to change:`),cf(),Aa(112,`ul`)(113,`li`),bT(114,`Move `),Aa(115,`code`),bT(116,`setErrorHandler()`),cf(),bT(117,` into a plugin that holds your routes. It keeps handling their errors, and Fastify won't warn about it being overridden.`),cf(),Aa(118,`li`),bT(119,`Remove `),Aa(120,`code`),bT(121,`setNotFoundHandler()`),cf(),bT(122,`. Nest refuses to start with `),Aa(123,`code`),bT(124,`Not found handler already set`),cf(),bT(125,`, and it answers unknown routes itself.`),cf()(),Aa(126,`app-copy-button`,16)(127,`span`,17),bT(128),LT(129,`extension`),Wa(130,`app-tabs`,null,1),cf(),Aa(132,`pre`)(133,`code`,18),bT(134,`
export async function buildLegacyApp() {
  const app = Fastify();
  await app.register(helmet);
  await app.register(auth); // decorates the instance and the request
  app.addHook('onRequest', async (request, reply) => {
    reply.header('x-request-id', request.headers['x-request-id'] ?? 'generated');
  });
  await app.register(async (legacy) => {
    legacy.setErrorHandler(errorHandler);
    await legacy.register(ordersRoutes, { prefix: '/api/orders' });
    await legacy.register(miscRoutes, { prefix: '/api' });
  });
  // await app.listen({ port: 3000 }); <- Nest listens from now on
  return app;
}
`),cf()()(),Aa(135,`p`),bT(136,`Then pass it to the `),Aa(137,`code`),bT(138,`FastifyAdapter`),cf(),bT(139,`, and let Nest listen:`),cf(),Aa(140,`app-copy-button`,16)(141,`span`,17),bT(142),LT(143,`extension`),Wa(144,`app-tabs`,null,2),cf(),Aa(146,`pre`)(147,`code`,18),bT(148,`
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';
import { buildLegacyApp } from './legacy/app.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(await buildLegacyApp()),
  );
  await app.listen(process.env.PORT ?? 3000);
}

await bootstrap();
`),cf()()(),Aa(149,`p`),bT(150,`Both now serve requests from one Fastify instance:`),cf(),Aa(151,`ul`)(152,`li`),bT(153,`The Fastify routes answer as they did before, and their errors reach their own error handler.`),cf(),Aa(154,`li`),bT(155,`Plugins and hooks registered on the root instance apply to Nest's routes too, so `),Aa(156,`code`),bT(157,`helmet`),cf(),bT(158,` and the `),Aa(159,`code`),bT(160,`onRequest`),cf(),bT(161,` hook above run for them, and `),Aa(162,`code`),bT(163,`request.jwtVerify()`),cf(),bT(164,` works inside a Nest guard.`),cf(),Aa(165,`li`),bT(166,`Hooks registered inside an encapsulated plugin stay inside it, as they always do, so they don't run for Nest's routes.`),cf(),Aa(167,`li`),bT(168,`Errors in Nest's routes go through its `),Aa(169,`a`,19),bT(170,`exception filters`),cf(),bT(171,`, and a request for a route neither has gets Nest's `),Aa(172,`code`),bT(173,`404`),cf(),bT(174,` response.`),cf()(),Aa(175,`h5`,20)(176,`span`),bT(177,`Move a route`),cf()(),Aa(178,`p`),bT(179,`Write the route in Nest, and delete it from Fastify in the same change. Fastify's router refuses duplicates, so with both in the code the application stops at startup with `),Aa(180,`code`),bT(181,`Method 'GET' already declared for route`),cf(),bT(182,`. A plugin you already use can back a `),Aa(183,`a`,21),bT(184,`guard`),cf(),bT(185,`, and `),Aa(186,`code`),bT(187,`@RouteSchema()`),cf(),bT(188,` takes the JSON schema the route already has:`),cf(),Aa(189,`app-copy-button`,16)(190,`span`,17),bT(191),LT(192,`extension`),Wa(193,`app-tabs`,null,3),cf(),Aa(195,`pre`)(196,`code`,18),bT(197,`
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private readonly users: UsersRepository) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    try {
      const { sub } = await request.jwtVerify();
      request.user = await this.users.find(sub);
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
`),cf()()(),Aa(198,`app-copy-button`,16)(199,`span`,17),bT(200),LT(201,`extension`),Wa(202,`app-tabs`,null,4),cf(),Aa(204,`pre`)(205,`code`,18),bT(206,`
@Controller('api')
export class MeController {
  @Get('me')
  @UseGuards(AuthenticatedGuard)
  @RouteSchema({
    response: {
      200: {
        type: 'object',
        properties: { id: { type: 'string' }, email: { type: 'string' } },
      },
    },
  })
  me(@Req() request: { user: User }) {
    return request.user;
  }
}
`),cf()()(),Aa(207,`p`),bT(208,`Read `),Aa(209,`a`,22),bT(210,`Keep what would change without an error`),cf(),bT(211,` as you go. It applies to every moved route, and the response schema above is there because of it.`),cf(),Aa(212,`h5`,23)(213,`span`),bT(214,`Finish the migration`),cf()(),Aa(215,`p`),bT(216,`When the Fastify routes are gone, register the plugins on the Nest application with `),Aa(217,`code`),bT(218,`app.register()`),cf(),bT(219,`, turn the error handler into an `),Aa(220,`a`,19),bT(221,`exception filter`),cf(),bT(222,`, delete the `),Aa(223,`code`),bT(224,`legacy`),cf(),bT(225,` folder, and create the application with `),Aa(226,`code`),bT(227,`new FastifyAdapter()`),cf(),bT(228,`.`),cf(),Aa(229,`h4`,24)(230,`span`),bT(231,`All at once`),cf()(),Aa(232,`p`),bT(233,`A new Nest application replaces the Fastify app in one release. Until then the Fastify app stays as it is, and it's the reference for what the new application must do. Stay on the `),Aa(234,`code`),bT(235,`FastifyAdapter`),cf(),bT(236,` for the migration, even if you plan to change adapters later: that keeps the router, query parsing, body limits and path syntax as they are, so fewer things can change at once.`),cf(),Aa(237,`h5`,25)(238,`span`),bT(239,`Pin the API with tests`),cf()(),Aa(240,`p`),bT(241,`Write tests that know only URLs, so that the same tests run against both applications. Go through every plugin and route, and cover each route's status code, body and important headers, for failures as well as successes. Check that fields a response schema removes stay removed:`),cf(),Aa(242,`app-copy-button`)(243,`pre`)(244,`code`,18),bT(245,`
import assert from 'node:assert/strict';
import { test } from 'node:test';

const BASE = process.env.BASE_URL ?? 'http://localhost:3000';

test('the response schema hides internal fields', async () => {
  const res = await fetch(\`\${BASE}/api/me\`, {
    headers: { authorization: \`Bearer \${token}\` },
  });
  assert.deepEqual(await res.json(), { id: 'u2', email: 'bob@example.com' });
});

test('authentication comes before validation', async () => {
  const res = await fetch(\`\${BASE}/api/orders\`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ total: -1 }),
  });
  assert.equal(res.status, 401);
});
`),cf()()(),Aa(246,`p`),bT(247,`Run them against the Fastify app until they all pass, before writing any Nest code:`),cf(),Aa(248,`pre`)(249,`code`,14),bT(250,`
$ BASE_URL=http://localhost:3000 node --test test/contract.test.mjs
`),cf()(),Aa(251,`h5`,26)(252,`span`),bT(253,`Translate the application`),cf()(),Aa(254,`p`),bT(255,`Create the Nest application with `),Aa(256,`code`),bT(257,`nest new`),cf(),bT(258,` next to the Fastify one, `),Aa(259,`a`,27),bT(260,`switch it to the `),Aa(261,`code`),bT(262,`FastifyAdapter`),cf()(),bT(263,`, and move each routes plugin to a controller:`),cf(),Aa(264,`table`)(265,`thead`)(266,`tr`)(267,`th`),bT(268,`Fastify`),cf(),Aa(269,`th`),bT(270,`Nest`),cf()()(),Aa(271,`tbody`)(272,`tr`)(273,`td`)(274,`code`),bT(275),cf()(),Aa(276,`td`),bT(277,`A `),Aa(278,`a`,28),bT(279,`controller`),cf(),bT(280,`, `),Aa(281,`code`),bT(282,`@Controller('api/orders')`),cf(),bT(283,`, in a `),Aa(284,`a`,29),bT(285,`module`),cf()()(),Aa(286,`tr`)(287,`td`)(288,`code`),bT(289,`app.get('/:id', handler)`),cf()(),Aa(290,`td`)(291,`code`),bT(292,`@Get(':id')`),cf(),bT(293,` on a method`),cf()(),Aa(294,`tr`)(295,`td`)(296,`code`),bT(297,`request.params`),cf(),bT(298,`, `),Aa(299,`code`),bT(300,`request.query`),cf(),bT(301,`, `),Aa(302,`code`),bT(303,`request.body`),cf()(),Aa(304,`td`)(305,`code`),bT(306,`@Param()`),cf(),bT(307,`, `),Aa(308,`code`),bT(309,`@Query()`),cf(),bT(310,`, `),Aa(311,`code`),bT(312,`@Body()`),cf()()(),Aa(313,`tr`)(314,`td`)(315,`code`),bT(316),cf()(),Aa(317,`td`)(318,`code`),bT(319,`@RouteSchema()`),cf(),bT(320,` from `),Aa(321,`code`),bT(322,`@nestjs/platform-fastify`),cf(),bT(323,`, with the same JSON schemas`),cf()(),Aa(324,`tr`)(325,`td`)(326,`code`),bT(327,`onRequest: app.authenticate`),cf()(),Aa(328,`td`),bT(329,`A `),Aa(330,`a`,21),bT(331,`guard`),cf()()(),Aa(332,`tr`)(333,`td`)(334,`code`),bT(335,`preHandler: app.requireRole('admin')`),cf()(),Aa(336,`td`),bT(337,`Metadata on the route, read by a guard`),cf()(),Aa(338,`tr`)(339,`td`),bT(340,`A decorator such as `),Aa(341,`code`),bT(342,`request.jwtVerify()`),cf()(),Aa(343,`td`),bT(344,`The same call on `),Aa(345,`code`),bT(346,`@Req()`),cf(),bT(347,`, with the plugin registered`),cf()(),Aa(348,`tr`)(349,`td`)(350,`code`),bT(351,`reply.code(201).send(x)`),cf()(),Aa(352,`td`)(353,`code`),bT(354,`return x`),cf(),bT(355,`, with `),Aa(356,`code`),bT(357,`@HttpCode()`),cf(),bT(358,` when the status isn't the default`),cf()(),Aa(359,`tr`)(360,`td`)(361,`code`),bT(362,`reply.code(204).send()`),cf()(),Aa(363,`td`)(364,`code`),bT(365,`@HttpCode(204)`),cf(),bT(366,`, and return nothing`),cf()(),Aa(367,`tr`)(368,`td`)(369,`code`),bT(370,`reply.redirect(url, 301)`),cf()(),Aa(371,`td`)(372,`code`),bT(373,`@Redirect(url, 301)`),cf()()(),Aa(374,`tr`)(375,`td`)(376,`code`),bT(377,`reply.setCookie()`),cf()(),Aa(378,`td`)(379,`code`),bT(380),cf(),bT(381,`, then `),Aa(382,`code`),bT(383,`reply.setCookie()`),cf(),bT(384,` and `),Aa(385,`code`),bT(386,`return`),cf(),bT(387,` as usual`),cf()(),Aa(388,`tr`)(389,`td`)(390,`code`),bT(391,`reply.type('application/json')`),cf()(),Aa(392,`td`)(393,`code`),bT(394,`@Header('content-type', 'application/json')`),cf()()(),Aa(395,`tr`)(396,`td`)(397,`code`),bT(398,`reply.send(stream)`),cf()(),Aa(399,`td`)(400,`code`),bT(401),cf()()(),Aa(402,`tr`)(403,`td`)(404,`code`),bT(405,`await request.file()`),cf()(),Aa(406,`td`),bT(407,`The same call on `),Aa(408,`code`),bT(409,`@Req()`),cf(),bT(410,`, with `),Aa(411,`code`),bT(412,`@fastify/multipart`),cf(),bT(413,` registered`),cf()(),Aa(414,`tr`)(415,`td`)(416,`code`),bT(417,`app.register(plugin, options)`),cf()(),Aa(418,`td`)(419,`code`),bT(420,`app.register(plugin, options)`),cf()()(),Aa(421,`tr`)(422,`td`)(423,`code`),bT(424,`app.addHook('onRequest', fn)`),cf()(),Aa(425,`td`)(426,`code`),bT(427,`app.getHttpAdapter().getInstance().addHook('onRequest', fn)`),cf()()(),Aa(428,`tr`)(429,`td`)(430,`code`),bT(431,`setErrorHandler()`),cf(),bT(432,` and `),Aa(433,`code`),bT(434,`setNotFoundHandler()`),cf()(),Aa(435,`td`),bT(436,`One global `),Aa(437,`a`,19),bT(438,`exception filter`),cf()()(),Aa(439,`tr`)(440,`td`),bT(441,`A plugin that decorates the instance with a database pool`),cf(),Aa(442,`td`),bT(443,`A `),Aa(444,`a`,30),bT(445,`provider`),cf()()()()(),Aa(446,`p`),bT(447,`Route paths stay as they are, since the same router reads them: `),Aa(448,`code`),bT(449,`search/:term?`),cf(),bT(450,`, `),Aa(451,`code`),bT(452,`items/:id(^\\\\d+$)`),cf(),bT(453,`, and `),Aa(454,`code`),bT(455,`assets/*`),cf(),bT(456,`, with `),Aa(457,`code`),bT(458,`@Param('*')`),cf(),bT(459,`.`),cf(),Aa(460,`h5`,31)(461,`span`),bT(462,`Keep what would change without an error`),cf()(),Aa(463,`p`),bT(464,`Two of these expose data without any error at all, so check them first:`),cf(),Aa(465,`table`)(466,`thead`)(467,`tr`)(468,`th`),bT(469,`In Fastify`),cf(),Aa(470,`th`),bT(471,`In a Nest application`),cf(),Aa(472,`th`),bT(473,`To keep the old behavior`),cf()()(),Aa(474,`tbody`)(475,`tr`)(476,`td`),bT(477,`A response schema removes every field it doesn't list, so handlers can return whole records`),cf(),Aa(478,`td`),bT(479,`Without the schema, every field is sent, `),Aa(480,`code`),bT(481,`passwordHash`),cf(),bT(482,` included`),cf(),Aa(483,`td`)(484,`code`),bT(485),cf(),bT(486,` on each route that had one`),cf()(),Aa(487,`tr`)(488,`td`),bT(489,`A `),Aa(490,`code`),bT(491,`POST`),cf(),bT(492,` answers `),Aa(493,`code`),bT(494,`200`),cf(),bT(495,`, and `),Aa(496,`code`),bT(497),cf(),bT(498,` applies`),cf(),Aa(499,`td`),bT(500,`A `),Aa(501,`code`),bT(502,`POST`),cf(),bT(503,` answers `),Aa(504,`code`),bT(505,`201`),cf(),bT(506,`, so a schema keyed on `),Aa(507,`code`),bT(508,`200`),cf(),bT(509,` no longer applies, and the fields come back too`),cf(),Aa(510,`td`)(511,`code`),bT(512,`@HttpCode(200)`),cf(),bT(513,`, or key the schema on `),Aa(514,`code`),bT(515,`201`),cf()()(),Aa(516,`tr`)(517,`td`),bT(518,`Authentication in `),Aa(519,`code`),bT(520,`onRequest`),cf(),bT(521,` runs before validation, so an invalid request with no token gets a `),Aa(522,`code`),bT(523,`401`),cf()(),Aa(524,`td`)(525,`code`),bT(526),cf(),bT(527,` validates before any guard, so that request gets a validation error`),cf(),Aa(528,`td`),bT(529,`Validate with a `),Aa(530,`a`,32),bT(531,`pipe`),cf(),bT(532,`, `),Aa(533,`code`),bT(534),cf(),bT(535,`, which runs after guards, on routes where it matters`),cf()(),Aa(536,`tr`)(537,`td`),bT(538,`Errors have the shape your handler gives them`),cf(),Aa(539,`td`)(540,`code`),bT(541),cf()(),Aa(542,`td`),bT(543,`A global exception filter`),cf()(),Aa(544,`tr`)(545,`td`),bT(546,`A validation error reaches your handler with `),Aa(547,`code`),bT(548,`err.validation`),cf()(),Aa(549,`td`),bT(550,`It reaches the filter the same way, with `),Aa(551,`code`),bT(552,`exception.validation`),cf()(),Aa(553,`td`),bT(554,`The same filter`),cf()(),Aa(555,`tr`)(556,`td`),bT(557,`An unknown route gets your not-found handler`),cf(),Aa(558,`td`)(559,`code`),bT(560,`NotFoundException`),cf(),bT(561,`, with Nest's body`),cf(),Aa(562,`td`),bT(563,`The same filter`),cf()()()(),Aa(564,`p`),bT(565,`The filter must keep your error shape for every error, including the ones Nest and Fastify raise themselves. Body errors such as malformed JSON and a body over the limit arrive as an `),Aa(566,`code`),bT(567,`HttpException`),cf(),bT(568,`:`),cf(),Aa(569,`app-copy-button`,16)(570,`span`,17),bT(571),LT(572,`extension`),Wa(573,`app-tabs`,null,5),cf(),Aa(575,`pre`)(576,`code`,18),bT(577,`
@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const request = http.getRequest<FastifyRequest>();
    const reply = http.getResponse<FastifyReply>();
    const send = (status: number, code: string, message: string) =>
      reply.code(status).send({ error: { code, message } });

    if (exception instanceof ApiError) {
      return send(exception.status, exception.code, exception.message);
    }
    if (exception instanceof NotFoundException) {
      return send(404, 'NOT_FOUND', \`No route for \${request.method} \${request.url}\`);
    }
    if (exception?.validation) {
      return send(422, 'INVALID_INPUT', exception.message);
    }
    const status =
      exception instanceof HttpException ? exception.getStatus() : exception?.statusCode;
    if (status === 400) {
      return send(400, 'BAD_REQUEST', 'Malformed request');
    }
    if (status && status < 500) {
      return send(status, exception.code ?? 'ERROR', exception.message);
    }
    return send(500, 'INTERNAL', 'Something went wrong');
  }
}
`),cf()()(),Aa(578,`app-copy-button`,16)(579,`span`,17),bT(580),LT(581,`extension`),Wa(582,`app-tabs`,null,6),cf(),Aa(584,`pre`)(585,`code`,18),bT(586,`
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.register(helmet);
  await app.register(cors, { origin: 'https://shop.example.com', credentials: true });
  await app.register(cookie);
  await app.register(multipart, { limits: { fileSize: 1024 * 1024 } });
  await app.register(fastifyStatic, {
    root: join(import.meta.dirname, '..', 'public'),
    prefix: '/static/',
  });
  await app.register(jwt, { secret: process.env.JWT_SECRET });
  app.getHttpAdapter().getInstance().addHook('onRequest', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.header('x-request-id', request.headers['x-request-id'] ?? 'generated');
  });
  app.useGlobalFilters(new ApiExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}

await bootstrap();
`),cf()()(),Aa(587,`h5`,33)(588,`span`),bT(589,`Switch over`),cf()(),Aa(590,`p`),bT(591,`Run the same tests against the Nest application, and fix the application rather than the tests:`),cf(),Aa(592,`pre`)(593,`code`,14),bT(594,`
$ BASE_URL=http://localhost:3001 node --test test/contract.test.mjs
`),cf()(),Aa(595,`p`),bT(596,`When they pass, deploy it in place of the Fastify app, and keep the last Fastify release deployable until the new one has served real traffic.`),cf(),Aa(597,`h4`,34)(598,`span`),bT(599,`Give it to a coding agent`),cf()(),Aa(600,`p`),bT(601,`Either approach works with a coding agent, and all at once is the better fit when the application is small enough to review in one change. Point the agent at this page and hold it to the tests, so that it can't declare success on code that merely compiles:`),cf(),Aa(602,`pre`)(603,`code`,14),bT(604,`
Migrate this Fastify application to NestJS all at once, on the FastifyAdapter,
following /recipes/fastify-migration.md.

1. Before changing anything, write black-box HTTP tests that cover every
   route: status codes, bodies and important headers, failures included.
   Assert that fields a response schema removes stay removed.
   Run them against the Fastify app until they all pass.
2. Build the Nest application next to it, using the page's translation table.
3. Check every row of "Keep what would change without an error".
4. Run the same tests against the Nest application. Don't edit a test to
   make it pass. If behavior has to change, stop and tell me.
`),cf()()(),Aa(605,`a`,35),Wa(606,`i`,36),Aa(607,`span`),bT(608,`Edit on GitHub`),cf()()()),c&2){let v=tT(131),w=tT(145),k=tT(194),I=tT(203),C=tT(574),T=tT(583);zC(128),hf(` `,jT(129,24,`legacy/app`,v.isJsActive),`
`),zC(14),hf(` `,jT(143,27,`main`,w.isJsActive),`
`),zC(49),hf(` `,jT(192,30,`authenticated.guard`,k.isJsActive),`
`),zC(9),hf(` `,jT(201,33,`me.controller`,I.isJsActive),`
`),zC(75),Ky(`app.register(routes, `,`{`,` prefix `,`}`,`)`),zC(41),Ky(`schema: `,`{`,` querystring, body, response `,`}`),zC(64),Ky(`@Res(`,`{`,` passthrough: true `,`}`,`) reply`),zC(21),Ky(`new StreamableFile(stream, `,`{`,` type `,`}`,`)`),zC(84),Ky(`@RouteSchema(`,`{`,` response `,`}`,`)`),zC(12),Ky(`response: `,`{`,` 200: schema `,`}`),zC(29),Ky(`@RouteSchema(`,`{`,` body `,`}`,`)`),zC(8),Ky(`@Body(`,`{`,` schema `,`}`,`)`),zC(7),Ky(``,`{`,` statusCode, message, error `,`}`),zC(30),hf(` `,jT(572,36,`common/api-exception.filter`,C.isJsActive),`
`),zC(9),hf(` `,jT(581,39,`main`,T.isJsActive),`
`)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return d})();var ae=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-nest-commander`]],features:[xy],decls:224,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`nest-commander`],[`routerLink`,`/standalone-applications`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nest-commander.jaymcdoniel.dev`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/jmcdo29/nest-commander/issues/new/choose`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`a-command-file`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.typescriptlang.org/docs/handbook/decorators.html`],[`appAnchor`,``,`id`,`running-the-command`],[1,`language-ts`],[`appAnchor`,``,`id`,`testing`],[`appAnchor`,``,`id`,`putting-it-all-together`],[`appAnchor`,``,`id`,`more-information`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/nest-commander.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Nest Commander`),cf(),Aa(5,`p`),bT(6,`Expanding on the `),Aa(7,`a`,4),bT(8,`standalone applications`),cf(),bT(9,` chapter, the `),Aa(10,`a`,5),bT(11,`nest-commander`),cf(),bT(12,` package lets you write command-line applications with a structure similar to a typical Nest application.`),cf(),Aa(13,`blockquote`,6)(14,`strong`),bT(15,`Note`),cf(),Aa(16,`code`),bT(17,`nest-commander`),cf(),bT(18,` is a third-party package and is not managed by the NestJS core team. Please report any issues with the library in the `),Aa(19,`a`,7),bT(20,`nest-commander repository`),cf(),bT(21,`.
`),cf(),Aa(22,`h4`,8)(23,`span`),bT(24,`Installation`),cf()(),Aa(25,`p`),bT(26,`First, install the package:`),cf(),Aa(27,`pre`)(28,`code`,9),bT(29,`
$ npm i nest-commander
`),cf()(),Aa(30,`h4`,10)(31,`span`),bT(32,`A Command file`),cf()(),Aa(33,`p`)(34,`code`),bT(35,`nest-commander`),cf(),bT(36,` lets you write command-line applications with `),Aa(37,`a`,11),bT(38,`decorators`),cf(),bT(39,`: the `),Aa(40,`code`),bT(41,`@Command()`),cf(),bT(42,` decorator for classes and the `),Aa(43,`code`),bT(44,`@Option()`),cf(),bT(45,` decorator for methods of those classes. Every command class should extend the `),Aa(46,`code`),bT(47,`CommandRunner`),cf(),bT(48,` abstract class and be decorated with the `),Aa(49,`code`),bT(50,`@Command()`),cf(),bT(51,` decorator.`),cf(),Aa(52,`p`),bT(53,`Nest treats every command as an `),Aa(54,`code`),bT(55,`@Injectable()`),cf(),bT(56,`, so dependency injection works as usual. The `),Aa(57,`code`),bT(58,`CommandRunner`),cf(),bT(59,` abstract class ensures that every command has a `),Aa(60,`code`),bT(61,`run()`),cf(),bT(62,` method that returns a `),Aa(63,`code`),bT(64,`Promise<void>`),cf(),bT(65,` and takes the parameters `),Aa(66,`code`),bT(67,`string[], Record<string, any>`),cf(),bT(68,`. The `),Aa(69,`code`),bT(70,`run()`),cf(),bT(71,` method is where your command's logic starts. Its first argument is an array of all parameters that didn't match an option flag, in case you need to work with multiple parameters. In the second argument, the options object, the property names match the `),Aa(72,`code`),bT(73,`name`),cf(),bT(74,` property given to the `),Aa(75,`code`),bT(76,`@Option()`),cf(),bT(77,` decorators, and their values are the return values of the corresponding option handlers. For better type safety, you can also create an interface for your options.`),cf(),Aa(78,`h4`,12)(79,`span`),bT(80,`Running the Command`),cf()(),Aa(81,`p`),bT(82,`In a NestJS application, you use the `),Aa(83,`code`),bT(84,`NestFactory`),cf(),bT(85,` to create a server and run it with `),Aa(86,`code`),bT(87,`listen()`),cf(),bT(88,`. Similarly, the `),Aa(89,`code`),bT(90,`nest-commander`),cf(),bT(91,` package exposes an API to run your command-line application: import the `),Aa(92,`code`),bT(93,`CommandFactory`),cf(),bT(94,`, call its static `),Aa(95,`code`),bT(96,`run()`),cf(),bT(97,` method, and pass in the root module of your application:`),cf(),Aa(98,`app-copy-button`)(99,`pre`)(100,`code`,13),bT(101,`
import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module.js';

async function bootstrap() {
  await CommandFactory.run(AppModule);
}

await bootstrap();
`),cf()()(),Aa(102,`p`),bT(103,`By default, Nest's logger is disabled when using the `),Aa(104,`code`),bT(105,`CommandFactory`),cf(),bT(106,`. To enable it, pass a logger as the second argument to the `),Aa(107,`code`),bT(108,`run()`),cf(),bT(109,` method. You can provide either a custom NestJS logger or an array of the log levels you want to keep. For example, pass `),Aa(110,`code`),bT(111,`['error']`),cf(),bT(112,` to print only Nest's error logs.`),cf(),Aa(113,`app-copy-button`)(114,`pre`)(115,`code`,13),bT(116,`
import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module.js';
import { LogService } from './log.service.js';

async function bootstrap() {
  await CommandFactory.run(AppModule, new LogService());

  // or, if you only want to print Nest's warnings and errors
  await CommandFactory.run(AppModule, ['warn', 'error']);
}

await bootstrap();
`),cf()()(),Aa(117,`p`),bT(118,`Under the hood, `),Aa(119,`code`),bT(120,`CommandFactory`),cf(),bT(121,` calls `),Aa(122,`code`),bT(123,`NestFactory`),cf(),bT(124,` for you and calls `),Aa(125,`code`),bT(126,`app.close()`),cf(),bT(127,` when the command finishes, so you don't need to worry about memory leaks. To add error handling, wrap the `),Aa(128,`code`),bT(129,`run()`),cf(),bT(130,` call in a `),Aa(131,`code`),bT(132,`try/catch`),cf(),bT(133,` block, or chain a `),Aa(134,`code`),bT(135,`.catch()`),cf(),bT(136,` call to the `),Aa(137,`code`),bT(138,`bootstrap()`),cf(),bT(139,` call.`),cf(),Aa(140,`h4`,14)(141,`span`),bT(142,`Testing`),cf()(),Aa(143,`p`)(144,`code`),bT(145,`nest-commander`),cf(),bT(146,` provides testing utilities that fit in with the rest of the NestJS ecosystem. Instead of using the `),Aa(147,`code`),bT(148,`CommandFactory`),cf(),bT(149,` to build the command in test mode, use the `),Aa(150,`code`),bT(151,`CommandTestFactory`),cf(),bT(152,` from the `),Aa(153,`code`),bT(154,`nest-commander-testing`),cf(),bT(155,` package and pass in your module metadata, similarly to how `),Aa(156,`code`),bT(157,`Test.createTestingModule()`),cf(),bT(158,` from `),Aa(159,`code`),bT(160,`@nestjs/testing`),cf(),bT(161,` works. In fact, it uses `),Aa(162,`code`),bT(163,`@nestjs/testing`),cf(),bT(164,` under the hood. You can still chain `),Aa(165,`code`),bT(166,`overrideProvider()`),cf(),bT(167,` calls before calling `),Aa(168,`code`),bT(169,`compile()`),cf(),bT(170,` to swap out providers in the test.`),cf(),Aa(171,`h4`,15)(172,`span`),bT(173,`Putting it all together`),cf()(),Aa(174,`p`),bT(175,`The following class defines a CLI command that can take the subcommand `),Aa(176,`code`),bT(177,`basic`),cf(),bT(178,` or be called directly. It supports the `),Aa(179,`code`),bT(180,`-n`),cf(),bT(181,`, `),Aa(182,`code`),bT(183,`-s`),cf(),bT(184,`, and `),Aa(185,`code`),bT(186,`-b`),cf(),bT(187,` flags (along with their long forms), with a custom parser for each option. The `),Aa(188,`code`),bT(189,`--help`),cf(),bT(190,` flag is also supported, as is customary with commander.`),cf(),Aa(191,`app-copy-button`)(192,`pre`)(193,`code`,13),bT(194,`
import { Command, CommandRunner, Option } from 'nest-commander';
import { LogService } from './log.service.js';

interface BasicCommandOptions {
  string?: string;
  boolean?: boolean;
  number?: number;
}

@Command({ name: 'basic', description: 'A parameter parse' })
export class BasicCommand extends CommandRunner {
  constructor(private readonly logService: LogService) {
    super();
  }

  async run(
    passedParam: string[],
    options?: BasicCommandOptions,
  ): Promise<void> {
    if (options?.boolean !== undefined && options?.boolean !== null) {
      this.runWithBoolean(passedParam, options.boolean);
    } else if (options?.number) {
      this.runWithNumber(passedParam, options.number);
    } else if (options?.string) {
      this.runWithString(passedParam, options.string);
    } else {
      this.runWithNone(passedParam);
    }
  }

  @Option({
    flags: '-n, --number [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }

  @Option({
    flags: '-s, --string [string]',
    description: 'A string return',
  })
  parseString(val: string): string {
    return val;
  }

  @Option({
    flags: '-b, --boolean [boolean]',
    description: 'A boolean parser',
  })
  parseBoolean(val: string): boolean {
    return JSON.parse(val);
  }

  runWithString(param: string[], option: string): void {
    this.logService.log({ param, string: option });
  }

  runWithNumber(param: string[], option: number): void {
    this.logService.log({ param, number: option });
  }

  runWithBoolean(param: string[], option: boolean): void {
    this.logService.log({ param, boolean: option });
  }

  runWithNone(param: string[]): void {
    this.logService.log({ param });
  }
}
`),cf()()(),Aa(195,`p`),bT(196,`Make sure the command class is added to a module:`),cf(),Aa(197,`app-copy-button`)(198,`pre`)(199,`code`,13),bT(200,`
@Module({
  providers: [LogService, BasicCommand],
})
export class AppModule {}
`),cf()()(),Aa(201,`p`),bT(202,`Then, to run the CLI, add the following to your `),Aa(203,`code`),bT(204,`main.ts`),cf(),bT(205,` file:`),cf(),Aa(206,`app-copy-button`)(207,`pre`)(208,`code`,13),bT(209,`
async function bootstrap() {
  await CommandFactory.run(AppModule);
}

await bootstrap();
`),cf()()(),Aa(210,`p`),bT(211,`You now have a command-line application.`),cf(),Aa(212,`h4`,16)(213,`span`),bT(214,`More Information`),cf()(),Aa(215,`p`),bT(216,`Visit the `),Aa(217,`a`,5),bT(218,`nest-commander docs site`),cf(),bT(219,` for more information, examples, and API documentation.`),cf()(),Aa(220,`a`,17),Wa(221,`i`,18),Aa(222,`span`),bT(223,`Edit on GitHub`),cf()()())},dependencies:[Jc,Lt,ln],encapsulation:2})}return d})();var re=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-async-local-storage`]],features:[xy],decls:436,vars:44,consts:[[`contentReference`,``],[`app5c1a462a9a70d945872fda964e28e4c71c493988`,``],[`app6c0a7b2bd1dffdcad68b96455abb1d4bc556a84f`,``],[`app4562dbfdc5f4c9281422ff5435e12160b56bcad3`,``],[`appae23f81f7e1ea918b066a22ec8dc9781cc3e64e6`,``],[`appa065e8f0ed45a7732cfa55b3b9702eadea144eef`,``],[`appde5d4ff9bc7eea4fd25f7e1c329853ef27602b4b`,``],[`app70d1650fa41f8af5610b636a9db360e6fb2f37fc`,``],[`appf7dfa0a9fed986835339f4ecace5343c9d39f88b`,``],[1,`content`],[1,`content-inner`],[`id`,`async-local-storage`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/async_context.html#class-asynclocalstorage`],[`routerLink`,`/observability/overview`],[`href`,`/recipes/async-local-storage#nestjs-observe`],[`appAnchor`,``,`id`,`custom-implementation`],[1,`info`],[`href`,`/recipes/async-local-storage#nestjs-cls`],[1,`with-heading`],[1,`filename`],[1,`language-ts`],[`start`,`2`],[1,`language-typescript`],[`start`,`3`],[`start`,`4`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/God_object`],[`id`,`nestjs-observe`],[`routerLink`,`/observability/manual-instrumentation`],[`appAnchor`,``,`id`,`setup`],[`routerLink`,`/observability/sdk`],[1,`language-bash`],[`appAnchor`,``,`id`,`reading-and-writing-the-store`],[`appAnchor`,``,`id`,`typing-the-store`],[`appAnchor`,``,`id`,`beyond-http`],[`id`,`nestjs-cls`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/Papooch/nestjs-cls`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.npmjs.com/package/nestjs-cls#proxy-providers`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/Papooch/nestjs-cls/issues`],[`appAnchor`,``,`id`,`installation`],[`appAnchor`,``,`id`,`usage`],[`href`,`/recipes/async-local-storage#custom-implementation`],[`appAnchor`,``,`id`,`testing`],[`appAnchor`,``,`id`,`more-information`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/async-local-storage.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,9,0)(2,`div`,10)(3,`h3`,11),bT(4,`Async Local Storage`),cf(),Aa(5,`p`)(6,`code`),bT(7,`AsyncLocalStorage`),cf(),bT(8,` is a `),Aa(9,`a`,12),bT(10,`Node.js API`),cf(),bT(11,` (based on the `),Aa(12,`code`),bT(13,`async_hooks`),cf(),bT(14,` API) that provides an alternative way of propagating local state through the application without explicitly passing it as a function parameter. It's similar to thread-local storage in other languages.`),cf(),Aa(15,`p`),bT(16,`The main idea of Async Local Storage is that you can `),Aa(17,`em`),bT(18,`wrap`),cf(),bT(19,` a function call with the `),Aa(20,`code`),bT(21,`AsyncLocalStorage#run`),cf(),bT(22,` call. All code invoked within the wrapped call gets access to the same `),Aa(23,`code`),bT(24,`store`),cf(),bT(25,`, which is unique to each call chain.`),cf(),Aa(26,`p`),bT(27,`In the context of NestJS, this means that if you find a place within the request's lifecycle to wrap the rest of the request's code, you can access and modify state visible only to that request. This can serve as an alternative to REQUEST-scoped providers, avoiding some of their limitations.`),cf(),Aa(28,`p`),bT(29,`Alternatively, you can use ALS to propagate context for only a part of the system (e.g., the `),Aa(30,`em`),bT(31,`transaction`),cf(),bT(32,` object) without passing it around explicitly across services, which can increase isolation and encapsulation.`),cf(),Aa(33,`p`),bT(34,`If your application is instrumented with `),Aa(35,`a`,13),bT(36,`NestJS Observe`),cf(),bT(37,`, you already have a request-scoped store and don't need to build one. See the `),Aa(38,`a`,14),bT(39,`NestJS Observe`),cf(),bT(40,` section below.`),cf(),Aa(41,`h4`,15)(42,`span`),bT(43,`Custom implementation`),cf()(),Aa(44,`p`),bT(45,`The NestJS core framework doesn't provide a built-in abstraction for `),Aa(46,`code`),bT(47,`AsyncLocalStorage`),cf(),bT(48,`, so let's walk through how to implement it yourself for the simplest HTTP case, to get a better understanding of the whole concept:`),cf(),Aa(49,`blockquote`,16)(50,`strong`),bT(51,`Hint`),cf(),bT(52,` For ready-made solutions, see the `),Aa(53,`a`,14)(54,`code`),bT(55,`@nestjs/observe`),cf()(),bT(56,` and `),Aa(57,`a`,17)(58,`code`),bT(59,`nestjs-cls`),cf()(),bT(60,` sections below.
`),cf(),Aa(61,`ol`)(62,`li`),bT(63,`First, create a new instance of `),Aa(64,`code`),bT(65,`AsyncLocalStorage`),cf(),bT(66,` in a shared source file. Since we're using NestJS, let's also turn it into a module with a custom provider.`),cf()(),Aa(67,`app-copy-button`,18)(68,`span`,19),bT(69),LT(70,`extension`),Wa(71,`app-tabs`,null,1),cf(),Aa(73,`pre`)(74,`code`,20),bT(75,`
@Module({
  providers: [
    {
      provide: AsyncLocalStorage,
      useValue: new AsyncLocalStorage(),
    },
  ],
  exports: [AsyncLocalStorage],
})
export class AlsModule {}
`),cf()()(),Aa(76,`blockquote`,16)(77,`strong`),bT(78,`Hint`),cf(),Aa(79,`code`),bT(80,`AsyncLocalStorage`),cf(),bT(81,` is imported from `),Aa(82,`code`),bT(83,`node:async_hooks`),cf(),bT(84,`.
`),cf(),Aa(85,`ol`,21)(86,`li`),bT(87,`We're only concerned with HTTP, so let's use a middleware to wrap the `),Aa(88,`code`),bT(89,`next`),cf(),bT(90,` function with `),Aa(91,`code`),bT(92,`AsyncLocalStorage#run`),cf(),bT(93,`. Since middleware is the first thing a request hits, this makes the `),Aa(94,`code`),bT(95,`store`),cf(),bT(96,` available in all enhancers and the rest of the system.`),cf()(),Aa(97,`app-copy-button`,18)(98,`span`,19),bT(99),LT(100,`extension`),Wa(101,`app-tabs`,null,2),cf(),Aa(103,`pre`)(104,`code`,22),bT(105,`
@Module({
  imports: [AlsModule],
  providers: [CatsService],
  controllers: [CatsController],
})
export class AppModule implements NestModule {
  constructor(
    // inject the AsyncLocalStorage in the module constructor,
    private readonly als: AsyncLocalStorage
  ) {}

  configure(consumer: MiddlewareConsumer) {
    // bind the middleware,
    consumer
      .apply((req, res, next) => {
        // populate the store with some default values
        // based on the request,
        const store = {
          userId: req.headers['x-user-id'],
        };
        // and pass the "next" function as callback
        // to the "als.run" method together with the store.
        this.als.run(store, () => next());
      })
      .forRoutes('*path');
  }
}
`),cf()(),Aa(106,`pre`)(107,`code`,22),bT(108,`
@Module({
  imports: [AlsModule],
  providers: [CatsService],
  controllers: [CatsController],
})
@Dependencies(AsyncLocalStorage)
export class AppModule {
  constructor(als) {
    // inject the AsyncLocalStorage in the module constructor,
    this.als = als;
  }

  configure(consumer) {
    // bind the middleware,
    consumer
      .apply((req, res, next) => {
        // populate the store with some default values
        // based on the request,
        const store = {
          userId: req.headers['x-user-id'],
        };
        // and pass the "next" function as callback
        // to the "als.run" method together with the store.
        this.als.run(store, () => next());
      })
      .forRoutes('*path');
  }
}
`),cf()()(),Aa(109,`ol`,23)(110,`li`),bT(111,`Now you can access the local store instance anywhere within the lifecycle of a request.`),cf()(),Aa(112,`app-copy-button`,18)(113,`span`,19),bT(114),LT(115,`extension`),Wa(116,`app-tabs`,null,3),cf(),Aa(118,`pre`)(119,`code`,22),bT(120,`
@Injectable()
export class CatsService {
  constructor(
    // We can inject the provided ALS instance.
    private readonly als: AsyncLocalStorage,
    private readonly catsRepository: CatsRepository,
  ) {}

  getCatForUser() {
    // The "getStore" method will always return the
    // store instance associated with the given request.
    const userId = this.als.getStore()["userId"] as number;
    return this.catsRepository.getForUser(userId);
  }
}
`),cf()(),Aa(121,`pre`)(122,`code`,22),bT(123,`
@Injectable()
@Dependencies(AsyncLocalStorage, CatsRepository)
export class CatsService {
  constructor(als, catsRepository) {
    // We can inject the provided ALS instance.
    this.als = als;
    this.catsRepository = catsRepository;
  }

  getCatForUser() {
    // The "getStore" method will always return the
    // store instance associated with the given request.
    const userId = this.als.getStore()["userId"];
    return this.catsRepository.getForUser(userId);
  }
}
`),cf()()(),Aa(124,`ol`,24)(125,`li`),bT(126,`You now have a way to share request-related state without injecting the whole `),Aa(127,`code`),bT(128,`REQUEST`),cf(),bT(129,` object.`),cf()(),Aa(130,`blockquote`,25)(131,`strong`),bT(132,`Warning`),cf(),bT(133,` While this technique is useful for many use cases, it inherently obscures the code flow (by creating implicit context), so use it responsibly, and especially avoid creating contextual "`),Aa(134,`a`,26),bT(135,`God objects`),cf(),bT(136,`".
`),cf(),Aa(137,`h3`,27),bT(138,`NestJS Observe`),cf(),Aa(139,`p`),bT(140,`If you run `),Aa(141,`a`,13),bT(142,`NestJS Observe`),cf(),bT(143,`, the `),Aa(144,`code`),bT(145,`@nestjs/observe`),cf(),bT(146,` SDK already maintains an `),Aa(147,`code`),bT(148,`AsyncLocalStorage`),cf(),bT(149,` store for every request, job, and message it instruments. This store carries the trace context through your call stack. `),Aa(150,`code`),bT(151,`TracerService`),cf(),bT(152,` exposes it, so request-scoped state is something you read and write rather than something you set up: there's no module to write, no middleware to mount, and nothing to re-wire per transport.`),cf(),Aa(153,`blockquote`,16)(154,`strong`),bT(155,`Hint`),cf(),bT(156,` This is the same `),Aa(157,`code`),bT(158,`TracerService`),cf(),bT(159,` documented in `),Aa(160,`a`,28),bT(161,`Manual instrumentation`),cf(),bT(162,`. This section covers only its async local storage side; spans, handled errors, and custom metrics are described there.
`),cf(),Aa(163,`h4`,29)(164,`span`),bT(165,`Setup`),cf()(),Aa(166,`p`),bT(167,`No setup is needed beyond the standard SDK integration described in `),Aa(168,`a`,30),bT(169,`Observability → SDK`),cf(),bT(170,`: install the package, import `),Aa(171,`code`),bT(172,`ObserveModule.forRoot()`),cf(),bT(173,`, and pass `),Aa(174,`code`),bT(175,`ObserveInstrument`),cf(),bT(176,` to `),Aa(177,`code`),bT(178,`NestFactory.create()`),cf(),bT(179,`.`),cf(),Aa(180,`pre`)(181,`code`,31),bT(182,`
$ npm i @nestjs/observe
`),cf()(),Aa(183,`p`)(184,`code`),bT(185,`ObserveModule`),cf(),bT(186,` exports `),Aa(187,`code`),bT(188,`TracerService`),cf(),bT(189,`, so you can inject it anywhere in your application:`),cf(),Aa(190,`app-copy-button`,18)(191,`span`,19),bT(192),LT(193,`extension`),Wa(194,`app-tabs`,null,4),cf(),Aa(196,`pre`)(197,`code`,20),bT(198,`
import { Injectable } from '@nestjs/common';
import { TracerService } from '@nestjs/observe';

@Injectable()
export class CatsService {
  constructor(private readonly tracerService: TracerService) {}
}
`),cf()()(),Aa(199,`h4`,32)(200,`span`),bT(201,`Reading and writing the store`),cf()(),Aa(202,`p`)(203,`code`),bT(204,`setAttribute(key, value)`),cf(),bT(205,` writes to the current context store, and `),Aa(206,`code`),bT(207,`getAttribute(key)`),cf(),bT(208,` reads the value back from anywhere downstream on the same request (a different service, a guard, or an interceptor) without threading it through every function signature:`),cf(),Aa(209,`app-copy-button`,18)(210,`span`,19),bT(211),LT(212,`extension`),Wa(213,`app-tabs`,null,5),cf(),Aa(215,`pre`)(216,`code`,20),bT(217,`
@Get()
findAll(@Req() req: Request) {
  this.tracerService.setAttribute('userId', req.headers['x-user-id']);
  return this.catsService.getCatForUser();
}
`),cf()()(),Aa(218,`app-copy-button`,18)(219,`span`,19),bT(220),LT(221,`extension`),Wa(222,`app-tabs`,null,6),cf(),Aa(224,`pre`)(225,`code`,20),bT(226,`
@Injectable()
export class CatsService {
  constructor(
    private readonly tracerService: TracerService,
    private readonly catsRepository: CatsRepository,
  ) {}

  getCatForUser() {
    const userId = this.tracerService.getAttribute('userId');
    return this.catsRepository.getForUser(userId);
  }
}
`),cf()()(),Aa(227,`p`)(228,`code`),bT(229,`getAttribute()`),cf(),bT(230,` returns `),Aa(231,`code`),bT(232,`undefined`),cf(),bT(233,` for a key that was never set. Both methods throw when called outside a traced context, since there's no store to read from or write to. If a value may legitimately be read before any request exists, guard the call accordingly.`),cf(),Aa(234,`h4`,33)(235,`span`),bT(236,`Typing the store`),cf()(),Aa(237,`p`),bT(238,`Pass the shape of your store as the first type argument of `),Aa(239,`code`),bT(240,`TracerService`),cf(),bT(241,` to have keys and values type-checked, including nested paths:`),cf(),Aa(242,`app-copy-button`)(243,`pre`)(244,`code`,20),bT(245,`
interface RequestStore {
  userId: number;
  flags: { betaCheckout: boolean };
}

@Injectable()
export class CatsService {
  constructor(private readonly tracerService: TracerService<RequestStore>) {}

  enableBeta() {
    this.tracerService.setAttribute('flags.betaCheckout', true);
  }
}
`),cf()()(),Aa(246,`h4`,34)(247,`span`),bT(248,`Beyond HTTP`),cf()(),Aa(249,`p`),bT(250,`Because the store is created by the instrumentation rather than by a middleware, it exists wherever the SDK traces an operation: HTTP and GraphQL requests, gRPC and `),Aa(251,`code`),bT(252,`@nestjs/microservices`),cf(),bT(253,` messages, and background work such as BullMQ consumers and cron runs. The pattern above is identical in all of them. This is the practical difference from a hand-rolled, middleware-based implementation, which only covers HTTP.`),cf(),Aa(254,`p`),bT(255,`The store also holds the current trace ID, so it doubles as the correlation key for logs and downstream services. `),Aa(256,`code`),bT(257,`currentTraceId()`),cf(),bT(258,` returns it. Unlike `),Aa(259,`code`),bT(260,`getAttribute()`),cf(),bT(261,`, it returns `),Aa(262,`code`),bT(263,`null`),cf(),bT(264,` outside a traced context instead of throwing:`),cf(),Aa(265,`app-copy-button`)(266,`pre`)(267,`code`,20),bT(268,`
const traceId = this.tracerService.currentTraceId();
`),cf()()(),Aa(269,`blockquote`,16)(270,`strong`),bT(271,`Hint`),cf(),Aa(272,`code`),bT(273,`ObserveModule`),cf(),bT(274,` also exports the underlying `),Aa(275,`code`),bT(276,`AsyncLocalStorage`),cf(),bT(277,` instance. `),Aa(278,`code`),bT(279,`setAttribute()`),cf(),bT(280,` and `),Aa(281,`code`),bT(282,`getAttribute()`),cf(),bT(283,` are the supported way to access the store; inject the instance directly only if you need something they don't expose.
`),cf(),Aa(284,`h3`,35),bT(285,`NestJS CLS`),cf(),Aa(286,`p`),bT(287,`The `),Aa(288,`a`,36),bT(289,`nestjs-cls`),cf(),bT(290,` package provides several developer experience improvements over plain `),Aa(291,`code`),bT(292,`AsyncLocalStorage`),cf(),bT(293,` (`),Aa(294,`code`),bT(295,`CLS`),cf(),bT(296,` is an abbreviation of `),Aa(297,`em`),bT(298,`continuation-local storage`),cf(),bT(299,`). It abstracts the implementation into a `),Aa(300,`code`),bT(301,`ClsModule`),cf(),bT(302,` that offers various ways of initializing the `),Aa(303,`code`),bT(304,`store`),cf(),bT(305,` for different transports (not only HTTP), as well as strong typing support.`),cf(),Aa(306,`p`),bT(307,`You can then access the store with an injectable `),Aa(308,`code`),bT(309,`ClsService`),cf(),bT(310,`, or abstract it away from the business logic entirely by using `),Aa(311,`a`,37),bT(312,`Proxy Providers`),cf(),bT(313,`.`),cf(),Aa(314,`blockquote`,16)(315,`strong`),bT(316,`Note`),cf(),Aa(317,`code`),bT(318,`nestjs-cls`),cf(),bT(319,` is a third-party package and is not managed by the NestJS core team. Please report any issues with the library in the `),Aa(320,`a`,38),bT(321,`nestjs-cls repository`),cf(),bT(322,`.
`),cf(),Aa(323,`h4`,39)(324,`span`),bT(325,`Installation`),cf()(),Aa(326,`p`),bT(327,`Apart from peer dependencies on the `),Aa(328,`code`),bT(329,`@nestjs`),cf(),bT(330,` packages, it uses only built-in Node.js APIs. Install it like any other package:`),cf(),Aa(331,`pre`)(332,`code`,31),bT(333,`
$ npm i nestjs-cls
`),cf()(),Aa(334,`h4`,40)(335,`span`),bT(336,`Usage`),cf()(),Aa(337,`p`),bT(338,`You can implement functionality similar to the `),Aa(339,`a`,41),bT(340,`custom implementation`),cf(),bT(341,` above using `),Aa(342,`code`),bT(343,`nestjs-cls`),cf(),bT(344,`, as follows:`),cf(),Aa(345,`ol`)(346,`li`),bT(347,`Import the `),Aa(348,`code`),bT(349,`ClsModule`),cf(),bT(350,` in the root module.`),cf()(),Aa(351,`app-copy-button`,18)(352,`span`,19),bT(353),LT(354,`extension`),Wa(355,`app-tabs`,null,7),cf(),Aa(357,`pre`)(358,`code`,20),bT(359,`
@Module({
  imports: [
    // Register the ClsModule,
    ClsModule.forRoot({
      middleware: {
        // automatically mount the
        // ClsMiddleware for all routes
        mount: true,
        // and use the setup method to
        // provide default store values.
        setup: (cls, req) => {
          cls.set('userId', req.headers['x-user-id']);
        },
      },
    }),
  ],
  providers: [CatsService],
  controllers: [CatsController],
})
export class AppModule {}
`),cf()()(),Aa(360,`ol`,21)(361,`li`),bT(362,`Then use the `),Aa(363,`code`),bT(364,`ClsService`),cf(),bT(365,` to access the store values.`),cf()(),Aa(366,`app-copy-button`,18)(367,`span`,19),bT(368),LT(369,`extension`),Wa(370,`app-tabs`,null,8),cf(),Aa(372,`pre`)(373,`code`,22),bT(374,`
@Injectable()
export class CatsService {
  constructor(
    // We can inject the provided ClsService instance,
    private readonly cls: ClsService,
    private readonly catsRepository: CatsRepository,
  ) {}

  getCatForUser() {
    // and use the "get" method to retrieve any stored value.
    const userId = this.cls.get('userId');
    return this.catsRepository.getForUser(userId);
  }
}
`),cf()(),Aa(375,`pre`)(376,`code`,22),bT(377,`
@Injectable()
@Dependencies(ClsService, CatsRepository)
export class CatsService {
  constructor(cls, catsRepository) {
    // We can inject the provided ClsService instance,
    this.cls = cls;
    this.catsRepository = catsRepository;
  }

  getCatForUser() {
    // and use the "get" method to retrieve any stored value.
    const userId = this.cls.get('userId');
    return this.catsRepository.getForUser(userId);
  }
}
`),cf()()(),Aa(378,`ol`,23)(379,`li`),bT(380,`To get strong typing of the store values managed by the `),Aa(381,`code`),bT(382,`ClsService`),cf(),bT(383,` (and auto-suggestions for the string keys), use the optional type parameter `),Aa(384,`code`),bT(385,`ClsService<MyClsStore>`),cf(),bT(386,` when injecting it.`),cf()(),Aa(387,`app-copy-button`)(388,`pre`)(389,`code`,20),bT(390,`
export interface MyClsStore extends ClsStore {
  userId: number;
}
`),cf()()(),Aa(391,`blockquote`,16)(392,`strong`),bT(393,`Hint`),cf(),bT(394,` You can also let the package automatically generate a request ID and access it later with `),Aa(395,`code`),bT(396,`cls.getId()`),cf(),bT(397,`, or get the whole request object using `),Aa(398,`code`),bT(399,`cls.get(CLS_REQ)`),cf(),bT(400,`.
`),cf(),Aa(401,`h4`,42)(402,`span`),bT(403,`Testing`),cf()(),Aa(404,`p`),bT(405,`Since the `),Aa(406,`code`),bT(407,`ClsService`),cf(),bT(408,` is just another injectable provider, you can mock it out entirely in unit tests.`),cf(),Aa(409,`p`),bT(410,`However, in certain integration tests, you might still want to use the real `),Aa(411,`code`),bT(412,`ClsService`),cf(),bT(413,` implementation. In that case, wrap the context-aware piece of code with a call to `),Aa(414,`code`),bT(415,`ClsService#run`),cf(),bT(416,` or `),Aa(417,`code`),bT(418,`ClsService#runWith`),cf(),bT(419,`:`),cf(),Aa(420,`app-copy-button`)(421,`pre`)(422,`code`,20),bT(423,`
describe('CatsService', () => {
  let service: CatsService
  let cls: ClsService
  const mockCatsRepository = createMock<CatsRepository>()

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      // Set up most of the testing module as we normally would.
      providers: [
        CatsService,
        {
          provide: CatsRepository,
          useValue: mockCatsRepository,
        }
      ],
      imports: [
        // Import the static version of ClsModule which only provides
        // the ClsService, but does not set up the store in any way.
        ClsModule
      ],
    }).compile()

    service = module.get(CatsService)

    // Also retrieve the ClsService for later use.
    cls = module.get(ClsService)
  })

  describe('getCatForUser', () => {
    it('retrieves cat based on user id', async () => {
      const expectedUserId = 42
      mockCatsRepository.getForUser.mockImplementationOnce(
        (id) => ({ userId: id })
      )

      // Wrap the test call in the \`runWith\` method
      // in which we can pass hand-crafted store values.
      const cat = await cls.runWith(
        { userId: expectedUserId },
        () => service.getCatForUser()
      )

      expect(cat.userId).toEqual(expectedUserId)
    })
  })
})
`),cf()()(),Aa(424,`h4`,43)(425,`span`),bT(426,`More information`),cf()(),Aa(427,`p`),bT(428,`Visit the `),Aa(429,`a`,36),bT(430,`nestjs-cls GitHub page`),cf(),bT(431,` for the full API documentation and more code examples.`),cf()(),Aa(432,`a`,44),Wa(433,`i`,45),Aa(434,`span`),bT(435,`Edit on GitHub`),cf()()()),c&2){let v=tT(72),w=tT(102),k=tT(117),I=tT(195),C=tT(214),T=tT(223),q=tT(356),P=tT(371);zC(69),hf(` `,jT(70,20,`als.module`,v.isJsActive),`
`),zC(30),hf(` `,jT(100,23,`app.module`,w.isJsActive),`
`),zC(4),zy(`hide`,w.isJsActive),zC(3),zy(`hide`,!w.isJsActive),zC(8),hf(` `,jT(115,26,`cats.service`,k.isJsActive),`
`),zC(4),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(71),hf(` `,jT(193,29,`cats.service`,I.isJsActive),`
`),zC(19),hf(` `,jT(212,32,`cats.controller`,C.isJsActive),`
`),zC(9),hf(` `,jT(221,35,`cats.service`,T.isJsActive),`
`),zC(133),hf(` `,jT(354,38,`app.module`,q.isJsActive),`
`),zC(15),hf(` `,jT(369,41,`cats.service`,P.isJsActive),`
`),zC(4),zy(`hide`,P.isJsActive),zC(3),zy(`hide`,!P.isJsActive)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return d})();var oe=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-swc`]],features:[xy],decls:469,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`swc`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://swc.rs/`],[1,`info`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`getting-started`],[`href`,`/recipes/swc#monorepo`],[1,`language-json`],[`appAnchor`,``,`id`,`type-checking`],[`appAnchor`,``,`id`,`cli-plugins-swc`],[`appAnchor`,``,`id`,`swc-configuration`],[`appAnchor`,``,`id`,`monorepo`],[1,`language-js`],[`appAnchor`,``,`id`,`monorepo-and-cli-plugins`],[1,`language-ts`],[`appAnchor`,``,`id`,`common-pitfalls`],[1,`language-typescript`],[`routerLink`,`/fundamentals/circular-dependency`],[`id`,`jest--swc`],[`href`,`/recipes/swc#monorepo-and-cli-plugins`],[`id`,`vitest`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://vitest.dev/`],[`appAnchor`,``,`id`,`installation-1`],[`appAnchor`,``,`id`,`configuration`],[`id`,`path-aliases`],[`appAnchor`,``,`id`,`update-imports-in-e2e-tests`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/TrilonIO/nest-vitest`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/swc.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`SWC`),cf(),Aa(5,`p`)(6,`a`,4),bT(7,`SWC`),cf(),bT(8,` (Speedy Web Compiler) is an extensible Rust-based platform that can be used for both compilation and bundling. Using SWC with the Nest CLI is a straightforward way to significantly speed up your development process.`),cf(),Aa(9,`blockquote`,5)(10,`strong`),bT(11,`Hint`),cf(),bT(12,` SWC is approximately `),Aa(13,`strong`),bT(14,`20 times faster`),cf(),bT(15,` than the default TypeScript compiler.
`),cf(),Aa(16,`h4`,6)(17,`span`),bT(18,`Installation`),cf()(),Aa(19,`p`),bT(20,`To get started, first install a few packages:`),cf(),Aa(21,`pre`)(22,`code`,7),bT(23,`
$ npm i --save-dev @swc/cli @swc/core
`),cf()(),Aa(24,`h4`,8)(25,`span`),bT(26,`Getting started`),cf()(),Aa(27,`p`),bT(28,`Once the installation is complete, you can use the `),Aa(29,`code`),bT(30,`swc`),cf(),bT(31,` builder with the Nest CLI, as follows:`),cf(),Aa(32,`pre`)(33,`code`,7),bT(34,`
$ nest start -b swc
# OR nest start --builder swc
`),cf()(),Aa(35,`blockquote`,5)(36,`strong`),bT(37,`Hint`),cf(),bT(38,` If your repository is a monorepo, see the `),Aa(39,`a`,9),bT(40,`Monorepo`),cf(),bT(41,` section.
`),cf(),Aa(42,`p`),bT(43,`Instead of passing the `),Aa(44,`code`),bT(45,`-b`),cf(),bT(46,` flag, you can set the `),Aa(47,`code`),bT(48,`compilerOptions.builder`),cf(),bT(49,` property to `),Aa(50,`code`),bT(51,`"swc"`),cf(),bT(52,` in your `),Aa(53,`code`),bT(54,`nest-cli.json`),cf(),bT(55,` file:`),cf(),Aa(56,`pre`)(57,`code`,10),bT(58,`
{
  "compilerOptions": {
    "builder": "swc"
  }
}
`),cf()(),Aa(59,`p`),bT(60,`To customize the builder's behavior, pass an object containing two attributes, `),Aa(61,`code`),bT(62,`type`),cf(),bT(63,` (`),Aa(64,`code`),bT(65,`"swc"`),cf(),bT(66,`) and `),Aa(67,`code`),bT(68,`options`),cf(),bT(69,`, as follows:`),cf(),Aa(70,`pre`)(71,`code`,10),bT(72,`
{
  "compilerOptions": {
    "builder": {
      "type": "swc",
      "options": {
        "swcrcPath": "infrastructure/.swcrc",
      }
    }
  }
}
`),cf()(),Aa(73,`p`),bT(74,`For example, to make SWC compile `),Aa(75,`code`),bT(76,`.jsx`),cf(),bT(77,` and `),Aa(78,`code`),bT(79,`.tsx`),cf(),bT(80,` files, use the following configuration:`),cf(),Aa(81,`pre`)(82,`code`,10),bT(83,`
{
  "compilerOptions": {
    "builder": {
      "type": "swc",
      "options": { "extensions": [".ts", ".tsx", ".js", ".jsx"] }
    },
  }
}
`),cf()(),Aa(84,`p`),bT(85,`To run the application in watch mode, use the following command:`),cf(),Aa(86,`pre`)(87,`code`,7),bT(88,`
$ nest start -b swc -w
# OR nest start --builder swc --watch
`),cf()(),Aa(89,`h4`,11)(90,`span`),bT(91,`Type checking`),cf()(),Aa(92,`p`),bT(93,`Unlike the default TypeScript compiler, SWC doesn't perform any type checking itself. To turn type checking on, use the `),Aa(94,`code`),bT(95,`--type-check`),cf(),bT(96,` flag:`),cf(),Aa(97,`pre`)(98,`code`,7),bT(99,`
$ nest start -b swc --type-check
`),cf()(),Aa(100,`p`),bT(101,`This command instructs the Nest CLI to run `),Aa(102,`code`),bT(103,`tsc`),cf(),bT(104,` in `),Aa(105,`code`),bT(106,`noEmit`),cf(),bT(107,` mode alongside SWC, which performs type checking asynchronously. Instead of passing the `),Aa(108,`code`),bT(109,`--type-check`),cf(),bT(110,` flag, you can also set the `),Aa(111,`code`),bT(112,`compilerOptions.typeCheck`),cf(),bT(113,` property to `),Aa(114,`code`),bT(115,`true`),cf(),bT(116,` in your `),Aa(117,`code`),bT(118,`nest-cli.json`),cf(),bT(119,` file:`),cf(),Aa(120,`pre`)(121,`code`,10),bT(122,`
{
  "compilerOptions": {
    "builder": "swc",
    "typeCheck": true
  }
}
`),cf()(),Aa(123,`h4`,12)(124,`span`),bT(125,`CLI Plugins (SWC)`),cf()(),Aa(126,`p`),bT(127,`The `),Aa(128,`code`),bT(129,`--type-check`),cf(),bT(130,` flag automatically executes `),Aa(131,`strong`),bT(132,`NestJS CLI plugins`),cf(),bT(133,` and produces a serialized metadata file, which the application can then load at runtime.`),cf(),Aa(134,`h4`,13)(135,`span`),bT(136,`SWC configuration`),cf()(),Aa(137,`p`),bT(138,`The SWC builder is preconfigured to match the requirements of NestJS applications. However, you can customize the configuration by creating a `),Aa(139,`code`),bT(140,`.swcrc`),cf(),bT(141,` file in the root directory and adjusting the options as needed:`),cf(),Aa(142,`pre`)(143,`code`,10),bT(144,`
{
  "$schema": "https://swc.rs/schema.json",
  "sourceMaps": true,
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "decorators": true,
      "dynamicImport": true
    },
    "baseUrl": "./"
  },
  "minify": false
}
`),cf()(),Aa(145,`blockquote`,5)(146,`strong`),bT(147,`Hint`),cf(),bT(148,` The SWC builder emits the same module format as the TypeScript compiler would: ES modules when your `),Aa(149,`code`),bT(150,`package.json`),cf(),bT(151,` file sets `),Aa(152,`code`),bT(153,`"type": "module"`),cf(),bT(154,` (the default for new projects), and CommonJS otherwise. A `),Aa(155,`code`),bT(156,`module`),cf(),bT(157,` setting in `),Aa(158,`code`),bT(159,`.swcrc`),cf(),bT(160,` overrides this.
`),cf(),Aa(161,`h4`,14)(162,`span`),bT(163,`Monorepo`),cf()(),Aa(164,`blockquote`,5)(165,`strong`),bT(166,`Hint`),cf(),bT(167,` As of NestJS v12, monorepos use the Rspack builder by default, which already compiles your code with SWC (through Rspack's built-in `),Aa(168,`code`),bT(169,`swc-loader`),cf(),bT(170,`). The following setup applies only if you use the deprecated webpack builder.
`),cf(),Aa(171,`p`),bT(172,`If your repository is a monorepo, then instead of using the `),Aa(173,`code`),bT(174,`swc`),cf(),bT(175,` builder, you have to configure `),Aa(176,`code`),bT(177,`webpack`),cf(),bT(178,` to use `),Aa(179,`code`),bT(180,`swc-loader`),cf(),bT(181,`.`),cf(),Aa(182,`p`),bT(183,`First, install the required package:`),cf(),Aa(184,`pre`)(185,`code`,7),bT(186,`
$ npm i --save-dev swc-loader
`),cf()(),Aa(187,`p`),bT(188,`Once the installation is complete, create a `),Aa(189,`code`),bT(190,`webpack.config.js`),cf(),bT(191,` file in the root directory of your application with the following content:`),cf(),Aa(192,`pre`)(193,`code`,15),bT(194,`
const swcDefaultConfig = require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory().swcOptions;

module.exports = {
  module: {
    rules: [
      {
        test: /\\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: swcDefaultConfig,
        },
      },
    ],
  },
};
`),cf()(),Aa(195,`h4`,16)(196,`span`),bT(197,`Monorepo and CLI plugins`),cf()(),Aa(198,`p`),bT(199,`If you use CLI plugins, `),Aa(200,`code`),bT(201,`swc-loader`),cf(),bT(202,` doesn't load them automatically. Instead, you have to create a separate file that loads them manually. To do so, create a `),Aa(203,`code`),bT(204,`generate-metadata.ts`),cf(),bT(205,` file next to the `),Aa(206,`code`),bT(207,`main.ts`),cf(),bT(208,` file with the following content:`),cf(),Aa(209,`app-copy-button`)(210,`pre`)(211,`code`,17),bT(212,`
import { PluginMetadataGenerator } from '@nestjs/cli/lib/compiler/plugins/plugin-metadata-generator.js';
import { ReadonlyVisitor } from '@nestjs/swagger/plugin';

const generator = new PluginMetadataGenerator();
generator.generate({
  visitors: [new ReadonlyVisitor({ introspectComments: true, pathToSource: import.meta.dirname })],
  outputDir: import.meta.dirname,
  watch: true,
  tsconfigPath: 'apps/<name>/tsconfig.app.json',
});
`),cf()()(),Aa(213,`blockquote`,5)(214,`strong`),bT(215,`Hint`),cf(),bT(216,` This example uses the `),Aa(217,`code`),bT(218,`@nestjs/swagger`),cf(),bT(219,` plugin, but you can use any plugin of your choice.
`),cf(),Aa(220,`p`),bT(221,`The `),Aa(222,`code`),bT(223,`generate()`),cf(),bT(224,` method accepts the following options:`),cf(),Aa(225,`table`),Wa(226,`thead`),Aa(227,`tbody`)(228,`tr`)(229,`td`)(230,`code`),bT(231,`watch`),cf()(),Aa(232,`td`),bT(233,`Whether to watch the project for changes.`),cf()(),Aa(234,`tr`)(235,`td`)(236,`code`),bT(237,`tsconfigPath`),cf()(),Aa(238,`td`),bT(239,`Path to the `),Aa(240,`code`),bT(241,`tsconfig.json`),cf(),bT(242,` file. Relative to the current working directory (`),Aa(243,`code`),bT(244,`process.cwd()`),cf(),bT(245,`).`),cf()(),Aa(246,`tr`)(247,`td`)(248,`code`),bT(249,`outputDir`),cf()(),Aa(250,`td`),bT(251,`Path to the directory where the metadata file is saved.`),cf()(),Aa(252,`tr`)(253,`td`)(254,`code`),bT(255,`visitors`),cf()(),Aa(256,`td`),bT(257,`An array of visitors used to generate metadata.`),cf()(),Aa(258,`tr`)(259,`td`)(260,`code`),bT(261,`filename`),cf()(),Aa(262,`td`),bT(263,`The name of the metadata file. Defaults to `),Aa(264,`code`),bT(265,`metadata.ts`),cf(),bT(266,`.`),cf()(),Aa(267,`tr`)(268,`td`)(269,`code`),bT(270,`printDiagnostics`),cf()(),Aa(271,`td`),bT(272,`Whether to print diagnostics to the console. Defaults to `),Aa(273,`code`),bT(274,`true`),cf(),bT(275,`.`),cf()()()(),Aa(276,`p`),bT(277,`Finally, run the `),Aa(278,`code`),bT(279,`generate-metadata`),cf(),bT(280,` script in a separate terminal window with the following command:`),cf(),Aa(281,`pre`)(282,`code`,7),bT(283,`
$ npx ts-node src/generate-metadata.ts
# OR npx ts-node apps/{YOUR_APP}/src/generate-metadata.ts
`),cf()(),Aa(284,`h4`,18)(285,`span`),bT(286,`Common pitfalls`),cf()(),Aa(287,`p`),bT(288,`If you use TypeORM, MikroORM, or any other ORM in your application, you may run into circular import issues. SWC doesn't handle `),Aa(289,`strong`),bT(290,`circular imports`),cf(),bT(291,` well, so use the following workaround:`),cf(),Aa(292,`app-copy-button`)(293,`pre`)(294,`code`,19),bT(295,`
@Entity()
export class User {
  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Relation<Profile>; // <--- see "Relation<>" type here instead of just "Profile"
}
`),cf()()(),Aa(296,`blockquote`,5)(297,`strong`),bT(298,`Hint`),cf(),bT(299,` The `),Aa(300,`code`),bT(301,`Relation`),cf(),bT(302,` type is exported from the `),Aa(303,`code`),bT(304,`typeorm`),cf(),bT(305,` package.
`),cf(),Aa(306,`p`),bT(307,`This prevents the property's type from being saved in the property metadata of the transpiled code, which avoids circular dependency issues.`),cf(),Aa(308,`p`),bT(309,`If your ORM does not provide a similar workaround, you can define the wrapper type yourself:`),cf(),Aa(310,`app-copy-button`)(311,`pre`)(312,`code`,19),bT(313,`
/**
 * Wrapper type used to circumvent ESM modules circular dependency issue
 * caused by reflection metadata saving the type of the property.
 */
export type WrapperType<T> = T; // WrapperType === Relation
`),cf()()(),Aa(314,`p`),bT(315,`For all `),Aa(316,`a`,20),bT(317,`circular dependency injections`),cf(),bT(318,` in your project, you also need to use the custom wrapper type described above:`),cf(),Aa(319,`app-copy-button`)(320,`pre`)(321,`code`,19),bT(322,`
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => ProfileService))
    private readonly profileService: WrapperType<ProfileService>,
  ) {}
}
`),cf()()(),Aa(323,`h3`,21),bT(324,`Jest + SWC`),cf(),Aa(325,`p`),bT(326,`To use SWC with Jest (the default test runner for CommonJS projects), install the following packages:`),cf(),Aa(327,`pre`)(328,`code`,7),bT(329,`
$ npm i --save-dev jest @swc/core @swc/jest
`),cf()(),Aa(330,`p`),bT(331,`Once the installation is complete, update your `),Aa(332,`code`),bT(333,`package.json`),cf(),bT(334,` or `),Aa(335,`code`),bT(336,`jest.config.js`),cf(),bT(337,` file (depending on your configuration) with the following content:`),cf(),Aa(338,`pre`)(339,`code`,10),bT(340,`
{
  "jest": {
    "transform": {
      "^.+\\\\.(t|j)s?$": ["@swc/jest"]
    }
  }
}
`),cf()(),Aa(341,`p`),bT(342,`Additionally, add the `),Aa(343,`code`),bT(344,`legacyDecorator`),cf(),bT(345,` and `),Aa(346,`code`),bT(347,`decoratorMetadata`),cf(),Aa(348,`code`),bT(349,`transform`),cf(),bT(350,` properties to your `),Aa(351,`code`),bT(352,`.swcrc`),cf(),bT(353,` file:`),cf(),Aa(354,`pre`)(355,`code`,10),bT(356,`
{
  "$schema": "https://swc.rs/schema.json",
  "sourceMaps": true,
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "decorators": true,
      "dynamicImport": true
    },
    "transform": {
      "legacyDecorator": true,
      "decoratorMetadata": true
    },
    "baseUrl": "./"
  },
  "minify": false
}
`),cf()(),Aa(357,`p`),bT(358,`If you use NestJS CLI plugins in your project, you have to run `),Aa(359,`code`),bT(360,`PluginMetadataGenerator`),cf(),bT(361,` manually. See the `),Aa(362,`a`,22),bT(363,`Monorepo and CLI plugins`),cf(),bT(364,` section to learn more.`),cf(),Aa(365,`h3`,23),bT(366,`Vitest`),cf(),Aa(367,`p`)(368,`a`,24),bT(369,`Vitest`),cf(),bT(370,` is a fast, lightweight test runner designed to work with Vite. New NestJS projects that use ES modules (the default) are already set up with Vitest. This section shows how to configure Vitest to build your test files with SWC.`),cf(),Aa(371,`h4`,25)(372,`span`),bT(373,`Installation`),cf()(),Aa(374,`p`),bT(375,`To get started, first install the required packages:`),cf(),Aa(376,`pre`)(377,`code`,7),bT(378,`
$ npm i --save-dev vitest unplugin-swc @swc/core @vitest/coverage-v8
`),cf()(),Aa(379,`h4`,26)(380,`span`),bT(381,`Configuration`),cf()(),Aa(382,`p`),bT(383,`Create a `),Aa(384,`code`),bT(385,`vitest.config.ts`),cf(),bT(386,` file in the root directory of your application with the following content:`),cf(),Aa(387,`app-copy-button`)(388,`pre`)(389,`code`,17),bT(390,`
import { resolve } from 'node:path';
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  plugins: [
    // This is required to build the test files with SWC
    swc.vite({
      // Explicitly set the module type to avoid inheriting this value from a \`.swcrc\` config file
      module: { type: 'es6' },
    }),
  ],
  resolve: {
    alias: {
      // Ensure Vitest correctly resolves TypeScript path aliases
      'src': resolve(import.meta.dirname, './src'),
    },
  },
});
`),cf()()(),Aa(391,`p`),bT(392,`This configuration file sets up the Vitest environment, root directory, and SWC plugin. You should also create a separate configuration file for e2e tests (e.g., `),Aa(393,`code`),bT(394,`vitest.config.e2e.ts`),cf(),bT(395,`), with an additional `),Aa(396,`code`),bT(397,`include`),cf(),bT(398,` field that specifies the glob pattern for the test files:`),cf(),Aa(399,`app-copy-button`)(400,`pre`)(401,`code`,17),bT(402,`
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: './',
  },
  plugins: [swc.vite()],
});
`),cf()()(),Aa(403,`p`),bT(404,`Additionally, you can set the `),Aa(405,`code`),bT(406,`alias`),cf(),bT(407,` options to support TypeScript paths in your tests:`),cf(),Aa(408,`app-copy-button`)(409,`pre`)(410,`code`,17),bT(411,`
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    alias: {
      '@src': './src',
      '@test': './test',
    },
    root: './',
  },
  resolve: {
    alias: {
      '@src': './src',
      '@test': './test',
    },
  },
  plugins: [swc.vite()],
});
`),cf()()(),Aa(412,`h3`,27),bT(413,`Path aliases`),cf(),Aa(414,`p`),bT(415,`Vitest doesn't automatically resolve TypeScript path aliases such as `),Aa(416,`code`),bT(417,`src/`),cf(),bT(418,`, which can lead to dependency resolution errors during testing. To fix this, add the following `),Aa(419,`code`),bT(420,`resolve.alias`),cf(),bT(421,` configuration to your `),Aa(422,`code`),bT(423,`vitest.config.ts`),cf(),bT(424,` file:`),cf(),Aa(425,`app-copy-button`)(426,`pre`)(427,`code`,17),bT(428,`
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      'src': resolve(import.meta.dirname, './src'),
    },
  },
});
`),cf()()(),Aa(429,`p`),bT(430,`This ensures that Vitest correctly resolves module imports, preventing errors related to missing dependencies.`),cf(),Aa(431,`h4`,28)(432,`span`),bT(433,`Update imports in E2E tests`),cf()(),Aa(434,`p`),bT(435,`Change any E2E test imports that use `),Aa(436,`code`),bT(437,`import * as request from 'supertest'`),cf(),bT(438,` to `),Aa(439,`code`),bT(440,`import request from 'supertest'`),cf(),bT(441,`. `),Aa(442,`code`),bT(443,`supertest`),cf(),bT(444,` is a CommonJS module that exports a function, and in an ES module setup like Vitest's, a namespace import isn't callable, so you need the default import.`),cf(),Aa(445,`p`),bT(446,`Lastly, update the test scripts in your `),Aa(447,`code`),bT(448,`package.json`),cf(),bT(449,` file:`),cf(),Aa(450,`pre`)(451,`code`,10),bT(452,`
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:cov": "vitest run --coverage",
    "test:debug": "vitest --inspect-brk --no-file-parallelism",
    "test:e2e": "vitest run --config ./vitest.config.e2e.ts"
  }
}
`),cf()(),Aa(453,`p`),bT(454,`These scripts run the tests, watch for changes, generate code coverage reports, and start a debugging session. The `),Aa(455,`code`),bT(456,`test:e2e`),cf(),bT(457,` script runs the E2E tests with the dedicated configuration file.`),cf(),Aa(458,`blockquote`,5)(459,`strong`),bT(460,`Hint`),cf(),bT(461,` A working example is available in the `),Aa(462,`a`,29),bT(463,`nest-vitest repository`),cf(),bT(464,`.
`),cf()(),Aa(465,`a`,30),Wa(466,`i`,31),Aa(467,`span`),bT(468,`Edit on GitHub`),cf()()())},dependencies:[Lt,ln,Jc],encapsulation:2})}return d})();var se=(()=>{class d{static ɵfac=function(c){return new(c||d)};static ɵcmp=ef({type:d,selectors:[[`app-banner-courses-auth`]],decls:25,vars:0,consts:[[1,`banner`],[1,`fas`,`fa-check`],[`href`,`https://courses.nestjs.com/#authentication`,`target`,`_blank`,`title`,`Courses | NestJS - A node.js framework built on top of TypeScript`,1,`btn-more`]],template:function(c,u){c&1&&(uf(0,`div`,0)(1,`h2`),bT(2,`Learn the `),uf(3,`span`),bT(4,`right`),lf(),bT(5,` way!`),lf(),uf(6,`ul`)(7,`li`)(8,`span`),Ly(9,`i`,1),lf(),bT(10,` 19 chapters `),lf(),uf(11,`li`)(12,`span`),Ly(13,`i`,1),lf(),bT(14,` Authn & Authz `),lf(),uf(15,`li`)(16,`span`),Ly(17,`i`,1),lf(),bT(18,` Official certificate `),lf(),uf(19,`li`)(20,`span`),Ly(21,`i`,1),lf(),bT(22,` Deep-dive sessions `),lf()(),uf(23,`a`,2),bT(24,`Purchase the Authentication course`),lf()())},styles:[`.banner[_ngcontent-%COMP%]{background-color:#111;background-image:url(/assets/banners/courses-auth.jpg);background-position:center bottom}`]})}return d})();var le=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-passport`]],features:[xy],decls:1275,vars:122,consts:[[`contentReference`,``],[`appd22689eb501cde9d28a1a4efd82d34e10658edd6`,``],[`app5cfba7c35414cb3de3c43793c52178269ce687c3`,``],[`app2847e2675cc03cf74f4e8c93a7fe9c72907fd4bb`,``],[`app4830194c8ae0ae34ca4a16eaa232f471c2cbcd7a`,``],[`appee6a80d2a4aab421dfec1947c64c70f118f037b4`,``],[`appc91dfb008d89f6809e37c802870ae1f46d98e5a7`,``],[`app55128bac5f36290bdf4a8cd436338d44568950a3`,``],[`appf815cda46dc5e2408bdc76046f989a01a8f26b4e`,``],[`appba36dd417af55dd0102deb6a66d9b5451966223f`,``],[`app7f9152e2e70dd0103e4030430a3b255bafd79cba`,``],[`appea24945daa78708ed12fd89a56eb8834cec77d6c`,``],[`app8f0884c1cdb0511727bc47c2fc4edb1a93110433`,``],[`app09243a3b7c8a027cabf9b63839a51c4eaf9b9dbc`,``],[`app822d5078158cbdd97fcf101ff147c56ce6256188`,``],[`app08221d8bc1c96999a55c068b65c9974adcf27f82`,``],[`app7eaea0275ef35cab78615f2d544a429140c52818`,``],[1,`content`],[1,`content-inner`],[`id`,`passport-authentication`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/jaredhanson/passport`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://jwt.io/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/expressjs/session`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`http://www.passportjs.org/`],[`appAnchor`,``,`id`,`authentication-requirements`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://tools.ietf.org/html/rfc6750`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/jaredhanson/passport-local`],[1,`language-bash`],[1,`warning`],[`appAnchor`,``,`id`,`implementing-passport-strategies`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/kelektiv/node.bcrypt.js#readme`],[`appAnchor`,``,`id`,`implementing-passport-local`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`http://www.passportjs.org/docs/configure/`],[`routerLink`,`/exception-filters`],[`appAnchor`,``,`id`,`built-in-passport-guards`],[`routerLink`,`/guards`],[`appAnchor`,``,`id`,`login-route`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://curl.se/`],[`appAnchor`,``,`id`,`logout-route`],[`appAnchor`,``,`id`,`jwt-functionality`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/jwt`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/jwt/blob/master/README.md`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/auth0/node-jsonwebtoken#usage`],[`appAnchor`,``,`id`,`implementing-passport-jwt`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mikenicholson/passport-jwt`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mikenicholson/passport-jwt#configure-strategy`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mikenicholson/passport-jwt#extracting-the-jwt-from-the-request`],[`appAnchor`,``,`id`,`implement-protected-route-and-jwt-strategy-guards`],[`appAnchor`,``,`id`,`extending-guards`],[`appAnchor`,``,`id`,`enable-authentication-globally`],[`href`,`/guards#binding-guards`],[`href`,`/guards#putting-it-all-together`],[`appAnchor`,``,`id`,`request-scoped-strategies`],[`routerLink`,`/fundamentals/injection-scopes`],[`routerLink`,`/fundamentals/module-ref`],[`href`,`/fundamentals/module-ref#getting-current-sub-tree`],[`appAnchor`,``,`id`,`customize-passport`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`http://www.passportjs.org/docs/oauth/`],[`appAnchor`,``,`id`,`named-strategies`],[`appAnchor`,``,`id`,`graphql`],[`routerLink`,`/graphql/quick-start`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/passport.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,17,0)(2,`div`,18)(3,`h3`,19),bT(4,`Passport (authentication)`),cf(),Aa(5,`p`)(6,`a`,20),bT(7,`Passport`),cf(),bT(8,` is the most popular Node.js authentication library, well known in the community and used in many production applications. You can integrate it with a `),Aa(9,`strong`),bT(10,`Nest`),cf(),bT(11,` application using the `),Aa(12,`code`),bT(13,`@nestjs/passport`),cf(),bT(14,` module. At a high level, Passport executes a series of steps to:`),cf(),Aa(15,`ul`)(16,`li`),bT(17,`Authenticate a user by verifying their "credentials" (such as username/password, JSON Web Token (`),Aa(18,`a`,21),bT(19,`JWT`),cf(),bT(20,`), or identity token from an Identity Provider)`),cf(),Aa(21,`li`),bT(22,`Manage authenticated state (by issuing a portable token, such as a JWT, or creating an `),Aa(23,`a`,22),bT(24,`Express session`),cf(),bT(25,`)`),cf(),Aa(26,`li`),bT(27,`Attach information about the authenticated user to the `),Aa(28,`code`),bT(29,`Request`),cf(),bT(30,` object for further use in route handlers`),cf()(),Aa(31,`p`),bT(32,`Passport has a rich ecosystem of `),Aa(33,`a`,23),bT(34,`strategies`),cf(),bT(35,` that implement various authentication mechanisms. While simple in concept, the set of Passport strategies to choose from is large and varied. Passport abstracts these varied steps into a standard pattern, and the `),Aa(36,`code`),bT(37,`@nestjs/passport`),cf(),bT(38,` module wraps this pattern in familiar Nest constructs.`),cf(),Aa(39,`p`),bT(40,`In this chapter, we'll implement a complete end-to-end authentication solution for a RESTful API server using these modules. You can follow the steps in this chapter to build the complete example, and apply the same concepts to implement any Passport strategy and customize your authentication scheme.`),cf(),Aa(41,`h4`,24)(42,`span`),bT(43,`Authentication requirements`),cf()(),Aa(44,`p`),bT(45,`For this use case, clients start by authenticating with a username and password. Once authenticated, the server issues a JWT that the client can send as a `),Aa(46,`a`,25),bT(47,`bearer token in an authorization header`),cf(),bT(48,` on subsequent requests to prove authentication. We'll also create a protected route that is accessible only to requests that contain a valid JWT.`),cf(),Aa(49,`p`),bT(50,`We'll start with the first requirement: authenticating a user. We'll then extend that by issuing a JWT. Finally, we'll create a protected route that checks for a valid JWT on the request.`),cf(),Aa(51,`p`),bT(52,`First, install the required packages. Passport provides a strategy called `),Aa(53,`a`,26),bT(54,`passport-local`),cf(),bT(55,` that implements a username/password authentication mechanism, which suits this part of our use case.`),cf(),Aa(56,`pre`)(57,`code`,27),bT(58,`
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local
`),cf()(),Aa(59,`blockquote`,28)(60,`strong`),bT(61,`Notice`),cf(),bT(62,` For `),Aa(63,`strong`),bT(64,`any`),cf(),bT(65,` Passport strategy you choose, you always need the `),Aa(66,`code`),bT(67,`@nestjs/passport`),cf(),bT(68,` and `),Aa(69,`code`),bT(70,`passport`),cf(),bT(71,` packages. You also need the strategy-specific package (e.g., `),Aa(72,`code`),bT(73,`passport-jwt`),cf(),bT(74,` or `),Aa(75,`code`),bT(76,`passport-local`),cf(),bT(77,`) that implements the authentication strategy you are building. You can also install the type definitions for the strategy, as shown above with `),Aa(78,`code`),bT(79,`@types/passport-local`),cf(),bT(80,`, to get type checking and editor assistance while writing TypeScript code.
`),cf(),Aa(81,`h4`,29)(82,`span`),bT(83,`Implementing Passport strategies`),cf()(),Aa(84,`p`),bT(85,`We're now ready to implement the authentication feature. We'll start with an overview of the process used for `),Aa(86,`strong`),bT(87,`any`),cf(),bT(88,` Passport strategy. It's helpful to think of Passport as a mini framework in itself. It abstracts the authentication process into a few basic steps that you customize based on the strategy you're implementing. It's like a framework because you configure it by supplying customization parameters (as plain JSON objects) and custom code in the form of callback functions, which Passport calls at the appropriate time. The `),Aa(89,`code`),bT(90,`@nestjs/passport`),cf(),bT(91,` module wraps this framework in a Nest-style package, so that it integrates naturally into a Nest application. We'll use `),Aa(92,`code`),bT(93,`@nestjs/passport`),cf(),bT(94,` below, but first, let's consider how `),Aa(95,`strong`),bT(96,`vanilla Passport`),cf(),bT(97,` works.`),cf(),Aa(98,`p`),bT(99,`In vanilla Passport, you configure a strategy by providing two things:`),cf(),Aa(100,`ol`)(101,`li`),bT(102,`A set of options that are specific to that strategy. For example, in a JWT strategy, you might provide a secret to sign tokens.`),cf(),Aa(103,`li`),bT(104,`A "verify callback", which is where you tell Passport how to interact with your user store (where you manage user accounts). Here, you verify whether a user exists (and/or create a new user), and whether their credentials are valid. Passport expects this callback to return a full user if the validation succeeds, or `),Aa(105,`code`),bT(106,`null`),cf(),bT(107,` if it fails (failure means either that the user is not found or, in the case of passport-local, that the password does not match).`),cf()(),Aa(108,`p`),bT(109,`With `),Aa(110,`code`),bT(111,`@nestjs/passport`),cf(),bT(112,`, you configure a Passport strategy by extending the `),Aa(113,`code`),bT(114,`PassportStrategy`),cf(),bT(115,` class. You pass the strategy options (item 1 above) by calling `),Aa(116,`code`),bT(117,`super()`),cf(),bT(118,` in your subclass's constructor, optionally with an options object. You provide the verify callback (item 2 above) by implementing a `),Aa(119,`code`),bT(120,`validate()`),cf(),bT(121,` method in your subclass.`),cf(),Aa(122,`p`),bT(123,`We'll start by generating an `),Aa(124,`code`),bT(125,`AuthModule`),cf(),bT(126,` and in it, an `),Aa(127,`code`),bT(128,`AuthService`),cf(),bT(129,`:`),cf(),Aa(130,`pre`)(131,`code`,27),bT(132,`
$ nest g module auth
$ nest g service auth
`),cf()(),Aa(133,`p`),bT(134,`The `),Aa(135,`code`),bT(136,`AuthService`),cf(),bT(137,` will rely on a `),Aa(138,`code`),bT(139,`UsersService`),cf(),bT(140,` that encapsulates user operations, so generate that module and service now as well:`),cf(),Aa(141,`pre`)(142,`code`,27),bT(143,`
$ nest g module users
$ nest g service users
`),cf()(),Aa(144,`p`),bT(145,`Replace the default contents of these generated files as shown below. In this sample app, `),Aa(146,`code`),bT(147,`UsersService`),cf(),bT(148,` keeps a hard-coded, in-memory list of users and exposes a `),Aa(149,`code`),bT(150,`findOne()`),cf(),bT(151,` method that looks up a user by username. In a real application, this is where you build your user model and persistence layer with your library of choice (e.g., TypeORM, Sequelize, Mongoose).`),cf(),Aa(152,`app-copy-button`,30)(153,`span`,31),bT(154),LT(155,`extension`),Wa(156,`app-tabs`,null,1),cf(),Aa(158,`pre`)(159,`code`,32),bT(160,`
import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
`),cf()(),Aa(161,`pre`)(162,`code`,32),bT(163,`
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username) {
    return this.users.find(user => user.username === username);
  }
}
`),cf()()(),Aa(164,`p`),bT(165,`In the `),Aa(166,`code`),bT(167,`UsersModule`),cf(),bT(168,`, the only change needed is to add the `),Aa(169,`code`),bT(170,`UsersService`),cf(),bT(171,` to the `),Aa(172,`code`),bT(173,`exports`),cf(),bT(174,` array of the `),Aa(175,`code`),bT(176,`@Module()`),cf(),bT(177,` decorator, so that it's visible outside this module (we'll use it in our `),Aa(178,`code`),bT(179,`AuthService`),cf(),bT(180,` shortly).`),cf(),Aa(181,`app-copy-button`,30)(182,`span`,31),bT(183),LT(184,`extension`),Wa(185,`app-tabs`,null,2),cf(),Aa(187,`pre`)(188,`code`,32),bT(189,`
import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
`),cf()(),Aa(190,`pre`)(191,`code`,32),bT(192,`
import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
`),cf()()(),Aa(193,`p`),bT(194,`Our `),Aa(195,`code`),bT(196,`AuthService`),cf(),bT(197,` retrieves a user and verifies the password. We create a `),Aa(198,`code`),bT(199,`validateUser()`),cf(),bT(200,` method for this purpose. In the code below, we use object rest syntax to strip the `),Aa(201,`code`),bT(202,`password`),cf(),bT(203,` property from the user object before returning it. Our Passport local strategy will call the `),Aa(204,`code`),bT(205,`validateUser()`),cf(),bT(206,` method in a moment.`),cf(),Aa(207,`app-copy-button`,30)(208,`span`,31),bT(209),LT(210,`extension`),Wa(211,`app-tabs`,null,3),cf(),Aa(213,`pre`)(214,`code`,32),bT(215,`
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
`),cf()(),Aa(216,`pre`)(217,`code`,32),bT(218,`
import { Injectable, Dependencies } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';

@Injectable()
@Dependencies(UsersService)
export class AuthService {
  constructor(usersService) {
    this.usersService = usersService;
  }

  async validateUser(username, pass) {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
`),cf()()(),Aa(219,`blockquote`,28)(220,`strong`),bT(221,`Warning`),cf(),bT(222,` In a real application, never store a password in plain text. Instead, use a library like `),Aa(223,`a`,33),bT(224,`bcrypt`),cf(),bT(225,` with a salted one-way hash algorithm. With that approach, you store only hashed passwords and compare the stored hash to a hashed version of the `),Aa(226,`strong`),bT(227,`incoming`),cf(),bT(228,` password, so user passwords are never stored or exposed in plain text. To keep our sample app simple, we violate that rule and use plain text. `),Aa(229,`strong`),bT(230,`Don't do this in your real app.`),cf()(),Aa(231,`p`),bT(232,`Now, update the `),Aa(233,`code`),bT(234,`AuthModule`),cf(),bT(235,` to import the `),Aa(236,`code`),bT(237,`UsersModule`),cf(),bT(238,`.`),cf(),Aa(239,`app-copy-button`,30)(240,`span`,31),bT(241),LT(242,`extension`),Wa(243,`app-tabs`,null,4),cf(),Aa(245,`pre`)(246,`code`,32),bT(247,`
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  imports: [UsersModule],
  providers: [AuthService],
})
export class AuthModule {}
`),cf()(),Aa(248,`pre`)(249,`code`,32),bT(250,`
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  imports: [UsersModule],
  providers: [AuthService],
})
export class AuthModule {}
`),cf()()(),Aa(251,`h4`,34)(252,`span`),bT(253,`Implementing Passport local`),cf()(),Aa(254,`p`),bT(255,`Now we can implement our Passport `),Aa(256,`strong`),bT(257,`local authentication strategy`),cf(),bT(258,`. Create a file called `),Aa(259,`code`),bT(260,`local.strategy.ts`),cf(),bT(261,` in the `),Aa(262,`code`),bT(263,`auth`),cf(),bT(264,` folder and add the following code:`),cf(),Aa(265,`app-copy-button`,30)(266,`span`,31),bT(267),LT(268,`extension`),Wa(269,`app-tabs`,null,5),cf(),Aa(271,`pre`)(272,`code`,32),bT(273,`
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
`),cf()(),Aa(274,`pre`)(275,`code`,32),bT(276,`
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Dependencies } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Injectable()
@Dependencies(AuthService)
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(authService) {
    super();
    this.authService = authService;
  }

  async validate(username, password) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
`),cf()()(),Aa(277,`p`),bT(278,`We've followed the recipe described earlier for all Passport strategies. Our use of passport-local needs no configuration options, so the constructor calls `),Aa(279,`code`),bT(280,`super()`),cf(),bT(281,` without an options object.`),cf(),Aa(282,`blockquote`,35)(283,`strong`),bT(284,`Hint`),cf(),bT(285,` You can pass an options object in the call to `),Aa(286,`code`),bT(287,`super()`),cf(),bT(288,` to customize the behavior of the Passport strategy. In this example, the passport-local strategy by default expects properties called `),Aa(289,`code`),bT(290,`username`),cf(),bT(291,` and `),Aa(292,`code`),bT(293,`password`),cf(),bT(294,` in the request body. Pass an options object to specify different property names, for example: `),Aa(295,`code`),bT(296),cf(),bT(297,`. See the `),Aa(298,`a`,36),bT(299,`Passport documentation`),cf(),bT(300,` for more information.
`),cf(),Aa(301,`p`),bT(302,`We've also implemented the `),Aa(303,`code`),bT(304,`validate()`),cf(),bT(305,` method. For each strategy, Passport calls the verify function (implemented with the `),Aa(306,`code`),bT(307,`validate()`),cf(),bT(308,` method in `),Aa(309,`code`),bT(310,`@nestjs/passport`),cf(),bT(311,`) with a strategy-specific set of parameters. For the local strategy, Passport expects a `),Aa(312,`code`),bT(313,`validate()`),cf(),bT(314,` method with the following signature: `),Aa(315,`code`),bT(316,`validate(username: string, password: string): any`),cf(),bT(317,`.`),cf(),Aa(318,`p`),bT(319,`Most of the validation work is done in our `),Aa(320,`code`),bT(321,`AuthService`),cf(),bT(322,` (with the help of our `),Aa(323,`code`),bT(324,`UsersService`),cf(),bT(325,`), so this method is short. The `),Aa(326,`code`),bT(327,`validate()`),cf(),bT(328,` method for `),Aa(329,`strong`),bT(330,`any`),cf(),bT(331,` Passport strategy follows a similar pattern, varying only in how credentials are represented. If a user is found and the credentials are valid, the method returns the user so that Passport can complete its tasks (e.g., creating the `),Aa(332,`code`),bT(333,`user`),cf(),bT(334,` property on the `),Aa(335,`code`),bT(336,`Request`),cf(),bT(337,` object), and the request handling pipeline can continue. If not, it throws an exception and lets our `),Aa(338,`a`,37),bT(339,`exceptions layer`),cf(),bT(340,` handle it.`),cf(),Aa(341,`p`),bT(342,`Typically, the only significant difference in the `),Aa(343,`code`),bT(344,`validate()`),cf(),bT(345,` method for each strategy is `),Aa(346,`strong`),bT(347,`how`),cf(),bT(348,` you determine whether a user exists and is valid. For example, in a JWT strategy, depending on requirements, we may check whether the `),Aa(349,`code`),bT(350,`userId`),cf(),bT(351,` carried in the decoded token matches a record in our user database, or appears in a list of revoked tokens. This pattern of subclassing and implementing strategy-specific validation is consistent and extensible.`),cf(),Aa(352,`p`),bT(353,`Next, configure the `),Aa(354,`code`),bT(355,`AuthModule`),cf(),bT(356,` to use the Passport features we just defined. Update `),Aa(357,`code`),bT(358,`auth.module.ts`),cf(),bT(359,` to look like this:`),cf(),Aa(360,`app-copy-button`,30)(361,`span`,31),bT(362),LT(363,`extension`),Wa(364,`app-tabs`,null,6),cf(),Aa(366,`pre`)(367,`code`,32),bT(368,`
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { UsersModule } from '../users/users.module.js';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy.js';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
`),cf()(),Aa(369,`pre`)(370,`code`,32),bT(371,`
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { UsersModule } from '../users/users.module.js';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy.js';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
`),cf()()(),Aa(372,`h4`,38)(373,`span`),bT(374,`Built-in Passport Guards`),cf()(),Aa(375,`p`),bT(376,`The `),Aa(377,`a`,39),bT(378,`Guards`),cf(),bT(379,` chapter describes the primary function of guards: to determine whether a request will be handled by the route handler. That remains true, and we'll use that standard capability soon. However, the `),Aa(380,`code`),bT(381,`@nestjs/passport`),cf(),bT(382,` module also introduces a new wrinkle that may be confusing at first, so let's discuss it now. From an authentication perspective, your app can be in one of two states:`),cf(),Aa(383,`ol`)(384,`li`),bT(385,`the user/client is `),Aa(386,`strong`),bT(387,`not`),cf(),bT(388,` logged in (is not authenticated)`),cf(),Aa(389,`li`),bT(390,`the user/client `),Aa(391,`strong`),bT(392,`is`),cf(),bT(393,` logged in (is authenticated)`),cf()(),Aa(394,`p`),bT(395,`In the first case (user is not logged in), we need to perform two distinct functions:`),cf(),Aa(396,`ul`)(397,`li`)(398,`p`),bT(399,`Restrict the routes an unauthenticated user can access (i.e., deny access to restricted routes). We'll use guards in their familiar capacity to handle this function, by placing a guard on the protected routes. This guard checks for the presence of a valid JWT, so we'll build it later, once we are issuing JWTs.`),cf()(),Aa(400,`li`)(401,`p`),bT(402,`Initiate the `),Aa(403,`strong`),bT(404,`authentication step`),cf(),bT(405,` itself when a previously unauthenticated user attempts to log in. This is the step where we'll `),Aa(406,`strong`),bT(407,`issue`),cf(),bT(408,` a JWT to a valid user. The client needs to `),Aa(409,`code`),bT(410,`POST`),cf(),bT(411,` username/password credentials to initiate authentication, so we'll set up a `),Aa(412,`code`),bT(413,`POST /auth/login`),cf(),bT(414,` route to handle that. The remaining question is how to invoke the passport-local strategy in that route.`),cf()()(),Aa(415,`p`),bT(416,`The answer is another, slightly different type of guard. The `),Aa(417,`code`),bT(418,`@nestjs/passport`),cf(),bT(419,` module provides a built-in guard that invokes the Passport strategy and kicks off the steps described above (retrieving credentials, running the verify function, creating the `),Aa(420,`code`),bT(421,`user`),cf(),bT(422,` property, etc.).`),cf(),Aa(423,`p`),bT(424,`The second case (a logged-in user) relies on the standard type of guard discussed above to allow access to protected routes.`),cf(),Aa(425,`p`),Wa(426,`app-banner-courses-auth`),cf(),Aa(427,`h4`,40)(428,`span`),bT(429,`Login route`),cf()(),Aa(430,`p`),bT(431,`With the strategy in place, we can now implement a bare-bones `),Aa(432,`code`),bT(433,`/auth/login`),cf(),bT(434,` route and apply the built-in guard to initiate the passport-local flow.`),cf(),Aa(435,`p`),bT(436,`Open the `),Aa(437,`code`),bT(438,`app.controller.ts`),cf(),bT(439,` file and replace its contents with the following:`),cf(),Aa(440,`app-copy-button`,30)(441,`span`,31),bT(442),LT(443,`extension`),Wa(444,`app-tabs`,null,7),cf(),Aa(446,`pre`)(447,`code`,32),bT(448,`
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req: any) {
    return req.user;
  }
}
`),cf()(),Aa(449,`pre`)(450,`code`,32),bT(451,`
import { Controller, Bind, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @Bind(Request())
  async login(req) {
    return req.user;
  }
}
`),cf()()(),Aa(452,`p`)(453,`code`),bT(454,`AuthGuard('local')`),cf(),bT(455,` creates a guard that invokes the Passport strategy registered under the name `),Aa(456,`code`),bT(457,`'local'`),cf(),bT(458,`. When we extended the passport-local strategy, `),Aa(459,`code`),bT(460,`@nestjs/passport`),cf(),bT(461,` registered our `),Aa(462,`code`),bT(463,`LocalStrategy`),cf(),bT(464,` with Passport under that default name, which comes from the `),Aa(465,`code`),bT(466,`passport-local`),cf(),bT(467,` package. The name tells the guard which strategy to invoke when the app has multiple Passport strategies. We only have one strategy so far, but we'll add a second one shortly.`),cf(),Aa(468,`p`),bT(469,`To test the route, we'll have `),Aa(470,`code`),bT(471,`/auth/login`),cf(),bT(472,` return the user for now. This also demonstrates another feature: the guard takes the value returned from the `),Aa(473,`code`),bT(474,`validate()`),cf(),bT(475,` method and assigns it to the `),Aa(476,`code`),bT(477,`Request`),cf(),bT(478,` object as `),Aa(479,`code`),bT(480,`req.user`),cf(),bT(481,`. Later, we'll replace this with code that creates and returns a JWT.`),cf(),Aa(482,`p`),bT(483,`Since these are API routes, we'll test them using the widely available `),Aa(484,`a`,41),bT(485,`cURL`),cf(),bT(486,` command-line tool. You can test with any of the `),Aa(487,`code`),bT(488,`user`),cf(),bT(489,` objects hard-coded in the `),Aa(490,`code`),bT(491,`UsersService`),cf(),bT(492,`.`),cf(),Aa(493,`pre`)(494,`code`,27),bT(495,`
$ # POST to /auth/login
$ curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
$ # result -> {"userId":1,"username":"john"}
`),cf()(),Aa(496,`p`),bT(497,`While this works, passing the strategy name directly to `),Aa(498,`code`),bT(499,`AuthGuard()`),cf(),bT(500,` introduces magic strings in the codebase. Instead, we recommend creating your own class, as shown below:`),cf(),Aa(501,`app-copy-button`,30)(502,`span`,31),bT(503),LT(504,`extension`),Wa(505,`app-tabs`,null,8),cf(),Aa(507,`pre`)(508,`code`,32),bT(509,`
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
`),cf()()(),Aa(510,`p`),bT(511,`Now, update the `),Aa(512,`code`),bT(513,`/auth/login`),cf(),bT(514,` route handler to use the `),Aa(515,`code`),bT(516,`LocalAuthGuard`),cf(),bT(517,` instead:`),cf(),Aa(518,`app-copy-button`)(519,`pre`)(520,`code`,32),bT(521,`
@UseGuards(LocalAuthGuard)
@Post('auth/login')
async login(@Request() req: any) {
  return req.user;
}
`),cf()()(),Aa(522,`h4`,42)(523,`span`),bT(524,`Logout route`),cf()(),Aa(525,`p`),bT(526,`To log out, you can create an additional route that invokes `),Aa(527,`code`),bT(528,`req.logout()`),cf(),bT(529,` to clear the user's session. This approach is typical for session-based authentication, but it does not apply to JWTs. It requires Passport's session support (`),Aa(530,`code`),bT(531,`express-session`),cf(),bT(532,` together with the `),Aa(533,`code`),bT(534,`passport.initialize()`),cf(),bT(535,` and `),Aa(536,`code`),bT(537,`passport.session()`),cf(),bT(538,` middleware), which this recipe doesn't set up. Since Passport 0.6, `),Aa(539,`code`),bT(540,`req.logout()`),cf(),bT(541,` is asynchronous and requires a callback, so wrap it in a promise:`),cf(),Aa(542,`app-copy-button`)(543,`pre`)(544,`code`,32),bT(545,`
@UseGuards(LocalAuthGuard)
@Post('auth/logout')
async logout(@Request() req: any) {
  await new Promise<void>((resolve, reject) =>
    req.logout((err: any) => (err ? reject(err) : resolve())),
  );
}
`),cf()()(),Aa(546,`h4`,43)(547,`span`),bT(548,`JWT functionality`),cf()(),Aa(549,`p`),bT(550,`We're ready to move on to the JWT portion of our auth system. Let's review and refine our requirements:`),cf(),Aa(551,`ul`)(552,`li`),bT(553,`Allow users to authenticate with username/password, returning a JWT for use in subsequent calls to protected API endpoints. We're well on our way to meeting this requirement. To complete it, we need to write the code that issues a JWT.`),cf(),Aa(554,`li`),bT(555,`Create API routes that are protected based on the presence of a valid JWT as a bearer token.`),cf()(),Aa(556,`p`),bT(557,`Install a couple more packages to support the JWT requirements:`),cf(),Aa(558,`pre`)(559,`code`,27),bT(560,`
$ npm install --save @nestjs/jwt passport-jwt
$ npm install --save-dev @types/passport-jwt
`),cf()(),Aa(561,`p`),bT(562,`The `),Aa(563,`a`,44)(564,`code`),bT(565,`@nestjs/jwt`),cf()(),bT(566,` package is a utility package that helps with JWT manipulation. The `),Aa(567,`code`),bT(568,`passport-jwt`),cf(),bT(569,` package is the Passport package that implements the JWT strategy, and `),Aa(570,`code`),bT(571,`@types/passport-jwt`),cf(),bT(572,` provides its TypeScript type definitions.`),cf(),Aa(573,`p`),bT(574,`Let's take a closer look at how a `),Aa(575,`code`),bT(576,`POST /auth/login`),cf(),bT(577,` request is handled. We've decorated the route with the `),Aa(578,`code`),bT(579,`LocalAuthGuard`),cf(),bT(580,`, which invokes the passport-local strategy. This means that:`),cf(),Aa(581,`ol`)(582,`li`),bT(583,`The route handler `),Aa(584,`strong`),bT(585,`will only be invoked if the user has been validated`),cf()(),Aa(586,`li`),bT(587,`The `),Aa(588,`code`),bT(589,`req`),cf(),bT(590,` parameter will contain a `),Aa(591,`code`),bT(592,`user`),cf(),bT(593,` property (populated by Passport during the passport-local authentication flow)`),cf()(),Aa(594,`p`),bT(595,`With this in mind, we can now generate a real JWT and return it from this route. To keep our services cleanly modularized, we'll generate the JWT in the `),Aa(596,`code`),bT(597,`AuthService`),cf(),bT(598,`. Open the `),Aa(599,`code`),bT(600,`auth.service.ts`),cf(),bT(601,` file in the `),Aa(602,`code`),bT(603,`auth`),cf(),bT(604,` folder, inject the `),Aa(605,`code`),bT(606,`JwtService`),cf(),bT(607,`, and add the `),Aa(608,`code`),bT(609,`login()`),cf(),bT(610,` method, as shown:`),cf(),Aa(611,`app-copy-button`,30)(612,`span`,31),bT(613),LT(614,`extension`),Wa(615,`app-tabs`,null,9),cf(),Aa(617,`pre`)(618,`code`,32),bT(619,`
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
`),cf()(),Aa(620,`pre`)(621,`code`,32),bT(622,`
import { Injectable, Dependencies } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';

@Dependencies(UsersService, JwtService)
@Injectable()
export class AuthService {
  constructor(usersService, jwtService) {
    this.usersService = usersService;
    this.jwtService = jwtService;
  }

  async validateUser(username, pass) {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
`),cf()()(),Aa(623,`p`),bT(624,`The `),Aa(625,`code`),bT(626,`JwtService`),cf(),bT(627,` from `),Aa(628,`code`),bT(629,`@nestjs/jwt`),cf(),bT(630,` supplies a `),Aa(631,`code`),bT(632,`sign()`),cf(),bT(633,` method that generates our JWT from a subset of the `),Aa(634,`code`),bT(635,`user`),cf(),bT(636,` object properties. We return the token as a simple object with a single `),Aa(637,`code`),bT(638,`access_token`),cf(),bT(639,` property. We use the `),Aa(640,`code`),bT(641,`sub`),cf(),bT(642,` claim to hold our `),Aa(643,`code`),bT(644,`userId`),cf(),bT(645,` value, to be consistent with JWT standards.`),cf(),Aa(646,`p`),bT(647,`Next, update the `),Aa(648,`code`),bT(649,`AuthModule`),cf(),bT(650,` to import the new dependencies and configure the `),Aa(651,`code`),bT(652,`JwtModule`),cf(),bT(653,`.`),cf(),Aa(654,`p`),bT(655,`First, create `),Aa(656,`code`),bT(657,`constants.ts`),cf(),bT(658,` in the `),Aa(659,`code`),bT(660,`auth`),cf(),bT(661,` folder and add the following code:`),cf(),Aa(662,`app-copy-button`,30)(663,`span`,31),bT(664),LT(665,`extension`),Wa(666,`app-tabs`,null,10),cf(),Aa(668,`pre`)(669,`code`,32),bT(670,`
export const jwtConstants = {
  secret: 'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};
`),cf()(),Aa(671,`pre`)(672,`code`,32),bT(673,`
export const jwtConstants = {
  secret: 'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};
`),cf()()(),Aa(674,`p`),bT(675,`We'll use this to share our key between the JWT signing and verifying steps.`),cf(),Aa(676,`blockquote`,28)(677,`strong`),bT(678,`Warning`),cf(),Aa(679,`strong`),bT(680,`Do not expose this key publicly`),cf(),bT(681,`. We've done so here to make it clear what the code is doing, but in a production system `),Aa(682,`strong`),bT(683,`you must protect this key`),cf(),bT(684,` using appropriate measures, such as a secrets vault, an environment variable, or a configuration service.
`),cf(),Aa(685,`p`),bT(686,`Now, open `),Aa(687,`code`),bT(688,`auth.module.ts`),cf(),bT(689,` in the `),Aa(690,`code`),bT(691,`auth`),cf(),bT(692,` folder and update it to look like this:`),cf(),Aa(693,`app-copy-button`,30)(694,`span`,31),bT(695),LT(696,`extension`),Wa(697,`app-tabs`,null,11),cf(),Aa(699,`pre`)(700,`code`,32),bT(701,`
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LocalStrategy } from './local.strategy.js';
import { UsersModule } from '../users/users.module.js';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants.js';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
`),cf()(),Aa(702,`pre`)(703,`code`,32),bT(704,`
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LocalStrategy } from './local.strategy.js';
import { UsersModule } from '../users/users.module.js';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants.js';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
`),cf()()(),Aa(705,`p`),bT(706,`We configure the `),Aa(707,`code`),bT(708,`JwtModule`),cf(),bT(709,` using `),Aa(710,`code`),bT(711,`register()`),cf(),bT(712,`, passing in a configuration object. See the `),Aa(713,`a`,45)(714,`code`),bT(715,`@nestjs/jwt`),cf(),bT(716,` README`),cf(),bT(717,` for more on the Nest `),Aa(718,`code`),bT(719,`JwtModule`),cf(),bT(720,`, and the `),Aa(721,`a`,46)(722,`code`),bT(723,`jsonwebtoken`),cf(),bT(724,` usage documentation`),cf(),bT(725,` for details on the available configuration options.`),cf(),Aa(726,`p`),bT(727,`Now we can update the `),Aa(728,`code`),bT(729,`/auth/login`),cf(),bT(730,` route to return a JWT.`),cf(),Aa(731,`app-copy-button`,30)(732,`span`,31),bT(733),LT(734,`extension`),Wa(735,`app-tabs`,null,12),cf(),Aa(737,`pre`)(738,`code`,32),bT(739,`
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard.js';
import { AuthService } from './auth/auth.service.js';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
`),cf()(),Aa(740,`pre`)(741,`code`,32),bT(742,`
import { Controller, Dependencies, Bind, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard.js';
import { AuthService } from './auth/auth.service.js';

@Dependencies(AuthService)
@Controller()
export class AppController {
  constructor(authService) {
    this.authService = authService;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @Bind(Request())
  async login(req) {
    return this.authService.login(req.user);
  }
}
`),cf()()(),Aa(743,`p`),bT(744,`Test the routes using cURL again. You can use any of the `),Aa(745,`code`),bT(746,`user`),cf(),bT(747,` objects hard-coded in the `),Aa(748,`code`),bT(749,`UsersService`),cf(),bT(750,`.`),cf(),Aa(751,`pre`)(752,`code`,27),bT(753,`
$ # POST to /auth/login
$ curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
$ # Note: above JWT truncated
`),cf()(),Aa(754,`h4`,47)(755,`span`),bT(756,`Implementing Passport JWT`),cf()(),Aa(757,`p`),bT(758,`We can now address our final requirement: protecting endpoints by requiring a valid JWT on the request. Passport helps here too, with the `),Aa(759,`a`,48),bT(760,`passport-jwt`),cf(),bT(761,` strategy for securing RESTful endpoints with JSON Web Tokens. Start by creating a file called `),Aa(762,`code`),bT(763,`jwt.strategy.ts`),cf(),bT(764,` in the `),Aa(765,`code`),bT(766,`auth`),cf(),bT(767,` folder and add the following code:`),cf(),Aa(768,`app-copy-button`,30)(769,`span`,31),bT(770),LT(771,`extension`),Wa(772,`app-tabs`,null,13),cf(),Aa(774,`pre`)(775,`code`,32),bT(776,`
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants.js';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
`),cf()(),Aa(777,`pre`)(778,`code`,32),bT(779,`
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants.js';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload) {
    return { userId: payload.sub, username: payload.username };
  }
}
`),cf()()(),Aa(780,`p`),bT(781,`With our `),Aa(782,`code`),bT(783,`JwtStrategy`),cf(),bT(784,`, we've followed the same recipe described earlier for all Passport strategies. This strategy requires some initialization, so we pass an options object in the `),Aa(785,`code`),bT(786,`super()`),cf(),bT(787,` call. See the `),Aa(788,`a`,49),bT(789,`passport-jwt strategy options`),cf(),bT(790,` for the full list. In our case, these options are:`),cf(),Aa(791,`ul`)(792,`li`)(793,`code`),bT(794,`jwtFromRequest`),cf(),bT(795,`: supplies the method by which the JWT is extracted from the `),Aa(796,`code`),bT(797,`Request`),cf(),bT(798,`. We use the standard approach of supplying a bearer token in the `),Aa(799,`code`),bT(800,`Authorization`),cf(),bT(801,` header of our API requests. See `),Aa(802,`a`,50),bT(803,`extracting the JWT from the request`),cf(),bT(804,` for other options.`),cf(),Aa(805,`li`)(806,`code`),bT(807,`ignoreExpiration`),cf(),bT(808,`: to be explicit, we set the default `),Aa(809,`code`),bT(810,`false`),cf(),bT(811,` value, which delegates the responsibility of ensuring that a JWT has not expired to the Passport module. If our route receives an expired JWT, the request is denied with a `),Aa(812,`code`),bT(813,`401 Unauthorized`),cf(),bT(814,` response.`),cf(),Aa(815,`li`)(816,`code`),bT(817,`secretOrKey`),cf(),bT(818,`: we use the expedient option of supplying a symmetric secret for signing the token. Other options, such as a PEM-encoded public key, may be more appropriate for production apps (see the `),Aa(819,`a`,49),bT(820,`passport-jwt strategy options`),cf(),bT(821,` for more information). In any case, as cautioned earlier, `),Aa(822,`strong`),bT(823,`do not expose this secret publicly`),cf(),bT(824,`.`),cf()(),Aa(825,`p`),bT(826,`The `),Aa(827,`code`),bT(828,`validate()`),cf(),bT(829,` method deserves some discussion. For the JWT strategy, Passport first verifies the JWT's signature and decodes the JSON. It then invokes our `),Aa(830,`code`),bT(831,`validate()`),cf(),bT(832,` method, passing the decoded JSON as its single parameter. Based on the way JWT signing works, `),Aa(833,`strong`),bT(834,`we're guaranteed to receive a valid token`),cf(),bT(835,` that we previously signed and issued to a valid user.`),cf(),Aa(836,`p`),bT(837,`As a result, our `),Aa(838,`code`),bT(839,`validate()`),cf(),bT(840,` callback is trivial: it returns an object containing the `),Aa(841,`code`),bT(842,`userId`),cf(),bT(843,` and `),Aa(844,`code`),bT(845,`username`),cf(),bT(846,` properties. Recall that the value returned from `),Aa(847,`code`),bT(848,`validate()`),cf(),bT(849,` becomes the `),Aa(850,`code`),bT(851,`user`),cf(),bT(852,` property of the `),Aa(853,`code`),bT(854,`Request`),cf(),bT(855,` object.`),cf(),Aa(856,`p`),bT(857,`You can also return an array, where the first value becomes the `),Aa(858,`code`),bT(859,`user`),cf(),bT(860,` object and the second value becomes the `),Aa(861,`code`),bT(862,`authInfo`),cf(),bT(863,` object (`),Aa(864,`code`),bT(865,`req.authInfo`),cf(),bT(866,`).`),cf(),Aa(867,`p`),bT(868,`This approach also leaves room ('hooks', as it were) to inject other business logic into the process. For example, we could do a database lookup in our `),Aa(869,`code`),bT(870,`validate()`),cf(),bT(871,` method to extract more information about the user, resulting in a more enriched `),Aa(872,`code`),bT(873,`user`),cf(),bT(874,` object being available in our `),Aa(875,`code`),bT(876,`Request`),cf(),bT(877,`. This is also the place we may decide to do further token validation, such as looking up the `),Aa(878,`code`),bT(879,`userId`),cf(),bT(880,` in a list of revoked tokens, enabling us to perform token revocation. The model we've implemented here in our sample code is a fast, "stateless JWT" model, where each API call is immediately authorized based on the presence of a valid JWT, and a small bit of information about the requester (its `),Aa(881,`code`),bT(882,`userId`),cf(),bT(883,` and `),Aa(884,`code`),bT(885,`username`),cf(),bT(886,`) is available in our Request pipeline.`),cf(),Aa(887,`p`),bT(888,`Add the new `),Aa(889,`code`),bT(890,`JwtStrategy`),cf(),bT(891,` as a provider in the `),Aa(892,`code`),bT(893,`AuthModule`),cf(),bT(894,`:`),cf(),Aa(895,`app-copy-button`,30)(896,`span`,31),bT(897),LT(898,`extension`),Wa(899,`app-tabs`,null,14),cf(),Aa(901,`pre`)(902,`code`,32),bT(903,`
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LocalStrategy } from './local.strategy.js';
import { JwtStrategy } from './jwt.strategy.js';
import { UsersModule } from '../users/users.module.js';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants.js';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
`),cf()(),Aa(904,`pre`)(905,`code`,32),bT(906,`
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LocalStrategy } from './local.strategy.js';
import { JwtStrategy } from './jwt.strategy.js';
import { UsersModule } from '../users/users.module.js';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants.js';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
`),cf()()(),Aa(907,`p`),bT(908,`By importing the same secret used when we signed the JWT, we ensure that the `),Aa(909,`strong`),bT(910,`verify`),cf(),bT(911,` phase performed by Passport and the `),Aa(912,`strong`),bT(913,`sign`),cf(),bT(914,` phase performed in our `),Aa(915,`code`),bT(916,`AuthService`),cf(),bT(917,` use a common secret.`),cf(),Aa(918,`p`),bT(919,`Finally, we define the `),Aa(920,`code`),bT(921,`JwtAuthGuard`),cf(),bT(922,` class which extends the built-in `),Aa(923,`code`),bT(924,`AuthGuard`),cf(),bT(925,`:`),cf(),Aa(926,`app-copy-button`,30)(927,`span`,31),bT(928),LT(929,`extension`),Wa(930,`app-tabs`,null,15),cf(),Aa(932,`pre`)(933,`code`,32),bT(934,`
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
`),cf()()(),Aa(935,`h4`,51)(936,`span`),bT(937,`Implement protected route and JWT strategy guards`),cf()(),Aa(938,`p`),bT(939,`We can now implement our protected route and its associated guard.`),cf(),Aa(940,`p`),bT(941,`Open the `),Aa(942,`code`),bT(943,`app.controller.ts`),cf(),bT(944,` file and update it as shown below:`),cf(),Aa(945,`app-copy-button`,30)(946,`span`,31),bT(947),LT(948,`extension`),Wa(949,`app-tabs`,null,16),cf(),Aa(951,`pre`)(952,`code`,32),bT(953,`
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard.js';
import { LocalAuthGuard } from './auth/local-auth.guard.js';
import { AuthService } from './auth/auth.service.js';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
`),cf()(),Aa(954,`pre`)(955,`code`,32),bT(956,`
import { Controller, Dependencies, Bind, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard.js';
import { LocalAuthGuard } from './auth/local-auth.guard.js';
import { AuthService } from './auth/auth.service.js';

@Dependencies(AuthService)
@Controller()
export class AppController {
  constructor(authService) {
    this.authService = authService;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @Bind(Request())
  async login(req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @Bind(Request())
  getProfile(req) {
    return req.user;
  }
}
`),cf()()(),Aa(957,`p`),bT(958,`Once again, we're applying an `),Aa(959,`code`),bT(960,`AuthGuard`),cf(),bT(961,`, this time one that invokes the strategy registered under the passport-jwt default name, `),Aa(962,`code`),bT(963,`jwt`),cf(),bT(964,`. When our `),Aa(965,`code`),bT(966,`GET /profile`),cf(),bT(967,` route is hit, the guard invokes our custom-configured passport-jwt strategy, validates the JWT, and assigns the `),Aa(968,`code`),bT(969,`user`),cf(),bT(970,` property to the `),Aa(971,`code`),bT(972,`Request`),cf(),bT(973,` object.`),cf(),Aa(974,`p`),bT(975,`Ensure the app is running, and test the routes using cURL.`),cf(),Aa(976,`pre`)(977,`code`,27),bT(978,`
$ # GET /profile
$ curl http://localhost:3000/profile
$ # result -> {"message":"Unauthorized","statusCode":401}

$ # POST /auth/login
$ curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm... }

$ # GET /profile using access_token returned from previous step as bearer code
$ curl http://localhost:3000/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
$ # result -> {"userId":1,"username":"john"}
`),cf()(),Aa(979,`p`),bT(980,`In the `),Aa(981,`code`),bT(982,`AuthModule`),cf(),bT(983,`, we configured the JWT to expire after 60 seconds. This is likely too short for a real application, and the details of token expiration and refresh are beyond the scope of this article. We chose it to demonstrate an important quality of JWTs and the passport-jwt strategy: if you wait 60 seconds after authenticating before sending a `),Aa(984,`code`),bT(985,`GET /profile`),cf(),bT(986,` request, you'll receive a `),Aa(987,`code`),bT(988,`401 Unauthorized`),cf(),bT(989,` response. Passport checks the JWT's expiration time automatically, so your application doesn't have to.`),cf(),Aa(990,`p`),bT(991,`This completes our JWT authentication implementation. JavaScript clients (such as Angular, React, or Vue apps) and other clients can now authenticate and communicate securely with our API server.`),cf(),Aa(992,`h4`,52)(993,`span`),bT(994,`Extending guards`),cf()(),Aa(995,`p`),bT(996,`In most cases, using a provided `),Aa(997,`code`),bT(998,`AuthGuard`),cf(),bT(999,` class is sufficient. However, you may want to extend the default error handling or authentication logic. To do so, extend the built-in class and override its methods in a subclass.`),cf(),Aa(1e3,`app-copy-button`)(1001,`pre`)(1002,`code`,32),bT(1003,`
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
`),cf()()(),Aa(1004,`p`),bT(1005,`In addition to extending the default error handling and authentication logic, you can have authentication go through a chain of strategies. The first strategy to succeed, redirect, or error halts the chain. Authentication failures proceed through each strategy in series, and authentication fails only if all strategies fail.`),cf(),Aa(1006,`app-copy-button`)(1007,`pre`)(1008,`code`,32),bT(1009,`
export class JwtAuthGuard extends AuthGuard(['strategy_jwt_1', 'strategy_jwt_2', '...']) { ... }
`),cf()()(),Aa(1010,`h4`,53)(1011,`span`),bT(1012,`Enable authentication globally`),cf()(),Aa(1013,`p`),bT(1014,`If most of your endpoints should be protected by default, you can register the authentication guard as a `),Aa(1015,`a`,54),bT(1016,`global guard`),cf(),bT(1017,`. Instead of using the `),Aa(1018,`code`),bT(1019,`@UseGuards()`),cf(),bT(1020,` decorator on each controller, you then flag the routes that should be public.`),cf(),Aa(1021,`p`),bT(1022,`First, register the `),Aa(1023,`code`),bT(1024,`JwtAuthGuard`),cf(),bT(1025,` as a global guard using the following construction (in any module):`),cf(),Aa(1026,`app-copy-button`)(1027,`pre`)(1028,`code`,32),bT(1029,`
providers: [
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
],
`),cf()()(),Aa(1030,`p`),bT(1031,`With this in place, Nest will automatically bind `),Aa(1032,`code`),bT(1033,`JwtAuthGuard`),cf(),bT(1034,` to all endpoints.`),cf(),Aa(1035,`p`),bT(1036,`Next, provide a mechanism for declaring routes as public. For this, create a custom decorator using the `),Aa(1037,`code`),bT(1038,`SetMetadata`),cf(),bT(1039,` decorator factory function.`),cf(),Aa(1040,`app-copy-button`)(1041,`pre`)(1042,`code`,32),bT(1043,`
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
`),cf()()(),Aa(1044,`p`),bT(1045,`The file above exports two constants: our metadata key, named `),Aa(1046,`code`),bT(1047,`IS_PUBLIC_KEY`),cf(),bT(1048,`, and the new decorator itself, named `),Aa(1049,`code`),bT(1050,`Public`),cf(),bT(1051,` (you can name it `),Aa(1052,`code`),bT(1053,`SkipAuth`),cf(),bT(1054,`, `),Aa(1055,`code`),bT(1056,`AllowAnon`),cf(),bT(1057,`, or whatever fits your project).`),cf(),Aa(1058,`p`),bT(1059,`With the custom `),Aa(1060,`code`),bT(1061,`@Public()`),cf(),bT(1062,` decorator in place, you can use it to decorate any method, as follows:`),cf(),Aa(1063,`app-copy-button`)(1064,`pre`)(1065,`code`,32),bT(1066,`
@Public()
@Get()
findAll() {
  return [];
}
`),cf()()(),Aa(1067,`p`),bT(1068,`Lastly, the `),Aa(1069,`code`),bT(1070,`JwtAuthGuard`),cf(),bT(1071,` needs to return `),Aa(1072,`code`),bT(1073,`true`),cf(),bT(1074,` when the `),Aa(1075,`code`),bT(1076,`"isPublic"`),cf(),bT(1077,` metadata is found. For this, use the `),Aa(1078,`code`),bT(1079,`Reflector`),cf(),bT(1080,` class (see `),Aa(1081,`a`,55),bT(1082,`putting it all together`),cf(),bT(1083,` in the Guards chapter).`),cf(),Aa(1084,`app-copy-button`)(1085,`pre`)(1086,`code`,32),bT(1087,`
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }
}
`),cf()()(),Aa(1088,`h4`,56)(1089,`span`),bT(1090,`Request-scoped strategies`),cf()(),Aa(1091,`p`),bT(1092,`The Passport API is based on registering strategies with the global instance of the library. Therefore, strategies are not designed to have request-dependent options or to be dynamically instantiated per request (see `),Aa(1093,`a`,57),bT(1094,`injection scopes`),cf(),bT(1095,` to learn more about request-scoped providers). If you configure your strategy to be request-scoped, Nest never instantiates it, since it's not tied to any specific route, and there is no way to determine which "request-scoped" strategies should run for a given request.`),cf(),Aa(1096,`p`),bT(1097,`However, you can dynamically resolve request-scoped providers within the strategy. For this, use the `),Aa(1098,`a`,58),bT(1099,`module reference`),cf(),bT(1100,` feature.`),cf(),Aa(1101,`p`),bT(1102,`First, open the `),Aa(1103,`code`),bT(1104,`local.strategy.ts`),cf(),bT(1105,` file and inject the `),Aa(1106,`code`),bT(1107,`ModuleRef`),cf(),bT(1108,` in the usual way:`),cf(),Aa(1109,`app-copy-button`)(1110,`pre`)(1111,`code`,32),bT(1112,`
constructor(private moduleRef: ModuleRef) {
  super({
    passReqToCallback: true,
  });
}
`),cf()()(),Aa(1113,`blockquote`,35)(1114,`strong`),bT(1115,`Hint`),cf(),bT(1116,` The `),Aa(1117,`code`),bT(1118,`ModuleRef`),cf(),bT(1119,` class is imported from the `),Aa(1120,`code`),bT(1121,`@nestjs/core`),cf(),bT(1122,` package.
`),cf(),Aa(1123,`p`),bT(1124,`Be sure to set the `),Aa(1125,`code`),bT(1126,`passReqToCallback`),cf(),bT(1127,` configuration property to `),Aa(1128,`code`),bT(1129,`true`),cf(),bT(1130,`, as shown above.`),cf(),Aa(1131,`p`),bT(1132,`In the next step, the request instance is used to obtain the current context identifier, instead of generating a new one (see `),Aa(1133,`a`,59),bT(1134,`getting the current sub-tree`),cf(),bT(1135,` to learn more about the request context).`),cf(),Aa(1136,`p`),bT(1137,`Now, inside the `),Aa(1138,`code`),bT(1139,`validate()`),cf(),bT(1140,` method of the `),Aa(1141,`code`),bT(1142,`LocalStrategy`),cf(),bT(1143,` class, use the `),Aa(1144,`code`),bT(1145,`getByRequest()`),cf(),bT(1146,` method of the `),Aa(1147,`code`),bT(1148,`ContextIdFactory`),cf(),bT(1149,` class to create a context id based on the request object, and pass this to the `),Aa(1150,`code`),bT(1151,`resolve()`),cf(),bT(1152,` call:`),cf(),Aa(1153,`app-copy-button`)(1154,`pre`)(1155,`code`,32),bT(1156,`
async validate(
  request: Request,
  username: string,
  password: string,
) {
  const contextId = ContextIdFactory.getByRequest(request);
  // "AuthService" is a request-scoped provider
  const authService = await this.moduleRef.resolve(AuthService, contextId);
  ...
}
`),cf()()(),Aa(1157,`p`),bT(1158,`In the example above, the `),Aa(1159,`code`),bT(1160,`resolve()`),cf(),bT(1161,` method asynchronously returns the request-scoped instance of the `),Aa(1162,`code`),bT(1163,`AuthService`),cf(),bT(1164,` provider (assuming that `),Aa(1165,`code`),bT(1166,`AuthService`),cf(),bT(1167,` is marked as a request-scoped provider).`),cf(),Aa(1168,`h4`,60)(1169,`span`),bT(1170,`Customize Passport`),cf()(),Aa(1171,`p`),bT(1172,`To customize how the guards call Passport, pass options to the `),Aa(1173,`code`),bT(1174,`PassportModule.register()`),cf(),bT(1175,` method. Apart from `),Aa(1176,`code`),bT(1177,`defaultStrategy`),cf(),bT(1178,` and `),Aa(1179,`code`),bT(1180,`property`),cf(),bT(1181,`, which `),Aa(1182,`code`),bT(1183,`@nestjs/passport`),cf(),bT(1184,` uses itself, these options are passed to Passport's `),Aa(1185,`code`),bT(1186,`authenticate()`),cf(),bT(1187,` call, so the available options depend on the strategy being implemented. For example:`),cf(),Aa(1188,`app-copy-button`)(1189,`pre`)(1190,`code`,32),bT(1191,`
PassportModule.register({ session: true });
`),cf()()(),Aa(1192,`p`),bT(1193,`You can also configure a strategy by passing an options object to `),Aa(1194,`code`),bT(1195,`super()`),cf(),bT(1196,` in its constructor. For example, for the local strategy:`),cf(),Aa(1197,`app-copy-button`)(1198,`pre`)(1199,`code`,32),bT(1200,`
constructor(private authService: AuthService) {
  super({
    usernameField: 'email',
    passwordField: 'password',
  });
}
`),cf()()(),Aa(1201,`p`),bT(1202,`See the official `),Aa(1203,`a`,61),bT(1204,`Passport website`),cf(),bT(1205,` for the available property names.`),cf(),Aa(1206,`h4`,62)(1207,`span`),bT(1208,`Named strategies`),cf()(),Aa(1209,`p`),bT(1210,`When implementing a strategy, you can name it by passing a second argument to the `),Aa(1211,`code`),bT(1212,`PassportStrategy()`),cf(),bT(1213,` function. Otherwise, each strategy uses its default name (e.g., `),Aa(1214,`code`),bT(1215,`'jwt'`),cf(),bT(1216,` for the JWT strategy):`),cf(),Aa(1217,`app-copy-button`)(1218,`pre`)(1219,`code`,32),bT(1220,`
export class JwtStrategy extends PassportStrategy(Strategy, 'myjwt')
`),cf()()(),Aa(1221,`p`),bT(1222,`You then refer to it with a decorator like `),Aa(1223,`code`),bT(1224,`@UseGuards(AuthGuard('myjwt'))`),cf(),bT(1225,`.`),cf(),Aa(1226,`h4`,63)(1227,`span`),bT(1228,`GraphQL`),cf()(),Aa(1229,`p`),bT(1230,`To use an `),Aa(1231,`code`),bT(1232,`AuthGuard`),cf(),bT(1233,` with `),Aa(1234,`a`,64),bT(1235,`GraphQL`),cf(),bT(1236,`, extend the built-in `),Aa(1237,`code`),bT(1238,`AuthGuard`),cf(),bT(1239,` class and override the `),Aa(1240,`code`),bT(1241,`getRequest()`),cf(),bT(1242,` method.`),cf(),Aa(1243,`app-copy-button`)(1244,`pre`)(1245,`code`,32),bT(1246,`
@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
`),cf()()(),Aa(1247,`p`),bT(1248,`To get the currently authenticated user in your GraphQL resolver, define a `),Aa(1249,`code`),bT(1250,`@CurrentUser()`),cf(),bT(1251,` decorator:`),cf(),Aa(1252,`app-copy-button`)(1253,`pre`)(1254,`code`,32),bT(1255,`
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);
`),cf()()(),Aa(1256,`p`),bT(1257,`To use the decorator in your resolver, include it as a parameter of your query or mutation:`),cf(),Aa(1258,`app-copy-button`)(1259,`pre`)(1260,`code`,32),bT(1261,`
@Query(() => User)
@UseGuards(GqlAuthGuard)
whoAmI(@CurrentUser() user: User) {
  return this.usersService.findById(user.id);
}
`),cf()()(),Aa(1262,`p`),bT(1263,`For the passport-local strategy, you also need to add the GraphQL context's arguments to the request body so that Passport can access them for validation. Otherwise, you'll get an `),Aa(1264,`code`),bT(1265,`Unauthorized`),cf(),bT(1266,` error.`),cf(),Aa(1267,`app-copy-button`)(1268,`pre`)(1269,`code`,32),bT(1270,`
@Injectable()
export class GqlLocalAuthGuard extends AuthGuard('local') {
  getRequest(context: ExecutionContext) {
    const gqlExecutionContext = GqlExecutionContext.create(context);
    const gqlContext = gqlExecutionContext.getContext();
    const gqlArgs = gqlExecutionContext.getArgs();

    gqlContext.req.body = { ...gqlContext.req.body, ...gqlArgs };
    return gqlContext.req;
  }
}
`),cf()()()(),Aa(1271,`a`,65),Wa(1272,`i`,66),Aa(1273,`span`),bT(1274,`Edit on GitHub`),cf()()()),c&2){let v=tT(157),w=tT(186),k=tT(212),I=tT(244),C=tT(270),T=tT(365),q=tT(445),P=tT(506),B=tT(616),N=tT(667),U=tT(698),D=tT(736),J=tT(773),O=tT(900),F=tT(931),H=tT(950);zC(154),hf(` `,jT(155,74,`users/users.service`,v.isJsActive),`
`),zC(4),zy(`hide`,v.isJsActive),zC(3),zy(`hide`,!v.isJsActive),zC(22),hf(` `,jT(184,77,`users/users.module`,w.isJsActive),`
`),zC(4),zy(`hide`,w.isJsActive),zC(3),zy(`hide`,!w.isJsActive),zC(19),hf(` `,jT(210,80,`auth/auth.service`,k.isJsActive),`
`),zC(4),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(25),hf(` `,jT(242,83,`auth/auth.module`,I.isJsActive),`
`),zC(4),zy(`hide`,I.isJsActive),zC(3),zy(`hide`,!I.isJsActive),zC(19),hf(` `,jT(268,86,`auth/local.strategy`,C.isJsActive),`
`),zC(4),zy(`hide`,C.isJsActive),zC(3),zy(`hide`,!C.isJsActive),zC(22),Ky(`super(`,`{`,` usernameField: 'email' `,`}`,`)`),zC(66),hf(` `,jT(363,89,`auth/auth.module`,T.isJsActive),`
`),zC(4),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive),zC(73),hf(` `,jT(443,92,`app.controller`,q.isJsActive),`
`),zC(4),zy(`hide`,q.isJsActive),zC(3),zy(`hide`,!q.isJsActive),zC(54),hf(` `,jT(504,95,`auth/local-auth.guard`,P.isJsActive),`
`),zC(110),hf(` `,jT(614,98,`auth/auth.service`,B.isJsActive),`
`),zC(4),zy(`hide`,B.isJsActive),zC(3),zy(`hide`,!B.isJsActive),zC(44),hf(` `,jT(665,101,`auth/constants`,N.isJsActive),`
`),zC(4),zy(`hide`,N.isJsActive),zC(3),zy(`hide`,!N.isJsActive),zC(24),hf(` `,jT(696,104,`auth/auth.module`,U.isJsActive),`
`),zC(4),zy(`hide`,U.isJsActive),zC(3),zy(`hide`,!U.isJsActive),zC(31),hf(` `,jT(734,107,`app.controller`,D.isJsActive),`
`),zC(4),zy(`hide`,D.isJsActive),zC(3),zy(`hide`,!D.isJsActive),zC(30),hf(` `,jT(771,110,`auth/jwt.strategy`,J.isJsActive),`
`),zC(4),zy(`hide`,J.isJsActive),zC(3),zy(`hide`,!J.isJsActive),zC(120),hf(` `,jT(898,113,`auth/auth.module`,O.isJsActive),`
`),zC(4),zy(`hide`,O.isJsActive),zC(3),zy(`hide`,!O.isJsActive),zC(24),hf(` `,jT(929,116,`auth/jwt-auth.guard`,F.isJsActive),`
`),zC(19),hf(` `,jT(948,119,`app.controller`,H.isJsActive),`
`),zC(4),zy(`hide`,H.isJsActive),zC(3),zy(`hide`,!H.isJsActive)}},dependencies:[Lt,ln,u,se,Jc,g],encapsulation:2})}return d})();var de=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-socket-activation`]],features:[xy],decls:219,vars:8,consts:[[`contentReference`,``],[`appa62aed6fe75647b6fae895146de568a351abf7e6`,``],[`appf8d43db585d0336a05fabc97f67bd6be68e91df8`,``],[1,`content`],[1,`content-inner`],[`id`,`socket-activation`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://systemd.io/`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/net.html#serverlistenhandle-backlog-callback`],[`appAnchor`,``,`id`,`systemd-units`],[1,`language-bash`],[1,`warning`],[`appAnchor`,``,`id`,`bootstrap`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`exiting-when-idle`],[`href`,`/fundamentals/lifecycle-events#application-shutdown`],[`appAnchor`,``,`id`,`things-to-keep-in-mind`],[`routerLink`,`/application/task-scheduling`],[`routerLink`,`/fundamentals/async-providers`],[`routerLink`,`/faq/serverless`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/module.html#module-compile-cache`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/socket-activation.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`Socket activation`),cf(),Aa(5,`p`),bT(6,`With socket activation, the service manager opens the listening socket for your application. `),Aa(7,`a`,6),bT(8,`systemd`),cf(),bT(9,` listens on the port, starts the application when the first connection arrives, and hands the socket over to it. Connections that arrive while the application starts or restarts wait in the kernel's queue instead of being refused.`),cf(),Aa(10,`p`),bT(11,`This is useful for services that are called rarely, such as internal tools, admin panels, or the many services of a development or staging machine. If the application also exits after some time without requests, such a service holds no memory while nobody uses it. The cost is a cold start: the first request after a pause waits until Node.js loads the application and Nest bootstraps it.`),cf(),Aa(12,`blockquote`,7)(13,`strong`),bT(14,`Hint`),cf(),bT(15,` Listening on a socket passed by the service manager is a feature of Node.js's `),Aa(16,`a`,8)(17,`code`),bT(18,`server.listen()`),cf()(),bT(19,`. It is not supported on Windows.
`),cf(),Aa(20,`h4`,9)(21,`span`),bT(22,`systemd units`),cf()(),Aa(23,`p`),bT(24,`Create a socket unit, for example `),Aa(25,`code`),bT(26,`/etc/systemd/system/my-app.socket`),cf(),bT(27,`:`),cf(),Aa(28,`pre`)(29,`code`,10),bT(30,`
[Socket]
ListenStream=3000

[Install]
WantedBy=sockets.target
`),cf()(),Aa(31,`p`),bT(32,`Next to it, create a service unit with the same name, `),Aa(33,`code`),bT(34,`/etc/systemd/system/my-app.service`),cf(),bT(35,`:`),cf(),Aa(36,`pre`)(37,`code`,10),bT(38,`
[Service]
WorkingDirectory=/srv/my-app
ExecStart=/usr/bin/node dist/main.js
Restart=on-failure
`),cf()(),Aa(39,`p`),bT(40,`Then enable the socket only. systemd starts `),Aa(41,`code`),bT(42,`my-app.service`),cf(),bT(43,` on the first connection:`),cf(),Aa(44,`pre`)(45,`code`,10),bT(46,`
$ sudo systemctl daemon-reload
$ sudo systemctl enable --now my-app.socket
`),cf()(),Aa(47,`blockquote`,11)(48,`strong`),bT(49,`Warning`),cf(),bT(50,` Start `),Aa(51,`code`),bT(52,`node`),cf(),bT(53,` directly in `),Aa(54,`code`),bT(55,`ExecStart`),cf(),bT(56,`. systemd passes the socket as file descriptor `),Aa(57,`code`),bT(58,`3`),cf(),bT(59,` and sets the `),Aa(60,`code`),bT(61,`LISTEN_FDS`),cf(),bT(62,` and `),Aa(63,`code`),bT(64,`LISTEN_PID`),cf(),bT(65,` environment variables, where `),Aa(66,`code`),bT(67,`LISTEN_PID`),cf(),bT(68,` is the ID of the process it started. With `),Aa(69,`code`),bT(70,`npm start`),cf(),bT(71,`, `),Aa(72,`code`),bT(73,`nest start`),cf(),bT(74,`, or a shell script in between, `),Aa(75,`code`),bT(76,`LISTEN_PID`),cf(),bT(77,` doesn't match your application's process. The bootstrap below then falls back to listening on the port, which fails with `),Aa(78,`code`),bT(79,`EADDRINUSE`),cf(),bT(80,` because systemd already holds it.
`),cf(),Aa(81,`blockquote`,7)(82,`strong`),bT(83,`Hint`),cf(),bT(84,` To try it without unit files, run `),Aa(85,`code`),bT(86,`systemd-socket-activate --listen=3000 node dist/main.js`),cf(),bT(87,`. It passes the socket the same way, but starts the application only once. It also doesn't forward variables such as `),Aa(88,`code`),bT(89,`NODE_ENV`),cf(),bT(90,` unless you name them with `),Aa(91,`code`),bT(92,`--setenv=NODE_ENV`),cf(),bT(93,`.
`),cf(),Aa(94,`h4`,12)(95,`span`),bT(96,`Bootstrap`),cf()(),Aa(97,`p`),bT(98,`In your `),Aa(99,`code`),bT(100,`main.ts`),cf(),bT(101,` file, listen on the passed socket when the application was started this way, and on a port otherwise:`),cf(),Aa(102,`app-copy-button`,13)(103,`span`,14),bT(104),LT(105,`extension`),Wa(106,`app-tabs`,null,1),cf(),Aa(108,`pre`)(109,`code`,15),bT(110,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();

  // Set by systemd when it passes the listening socket to this process
  const activated =
    process.env.LISTEN_FDS === '1' &&
    process.env.LISTEN_PID === String(process.pid);

  if (activated) {
    await app.listen({ fd: 3 } as any);
  } else {
    await app.listen(process.env.PORT ?? 3000);
  }
}

await bootstrap();
`),cf()()(),Aa(111,`p`),bT(112,`The Express and Node adapters pass the options object to Node.js's `),Aa(113,`code`),bT(114,`server.listen()`),cf(),bT(115,` as is, but their `),Aa(116,`code`),bT(117,`listen()`),cf(),bT(118,` typings accept only a port, hence the cast. The Fastify adapter accepts `),Aa(119,`code`),bT(120,`fd`),cf(),bT(121,` in its typed listen options:`),cf(),Aa(122,`app-copy-button`)(123,`pre`)(124,`code`,15),bT(125,`
const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter(),
);
// ...
await app.listen({ fd: 3 });
`),cf()()(),Aa(126,`h4`,16)(127,`span`),bT(128,`Exiting when idle`),cf()(),Aa(129,`p`),bT(130,`systemd doesn't stop the application on its own. To free its memory, let the application exit after some time without requests, and systemd starts it again on the next connection. The following helper counts in-flight requests on the underlying HTTP server, so it works with every adapter and also sees requests that never reach a route handler:`),cf(),Aa(131,`app-copy-button`,13)(132,`span`,14),bT(133),LT(134,`extension`),Wa(135,`app-tabs`,null,2),cf(),Aa(137,`pre`)(138,`code`,15),bT(139,`
import type { INestApplication } from '@nestjs/common';
import type { Server } from 'node:http';

export function exitWhenIdle(app: INestApplication, idleMs: number) {
  const server: Server = app.getHttpServer();
  let inFlight = 0;
  let timer: NodeJS.Timeout | undefined;

  const scheduleExit = () => {
    timer = setTimeout(async () => {
      await app.close();
      process.exit(0);
    }, idleMs);
  };

  server.on('request', (req, res) => {
    inFlight++;
    clearTimeout(timer);
    res.once('close', () => {
      if (--inFlight === 0) {
        scheduleExit();
      }
    });
  });
  scheduleExit();
}
`),cf()()(),Aa(140,`p`),bT(141,`Call it once the application listens on the passed socket:`),cf(),Aa(142,`app-copy-button`)(143,`pre`)(144,`code`,15),bT(145,`
if (activated) {
  await app.listen({ fd: 3 } as any);
  exitWhenIdle(app, 5 * 60_000); // Exit after 5 minutes without requests
}
`),cf()()(),Aa(146,`p`)(147,`code`),bT(148,`app.close()`),cf(),bT(149,` runs the same `),Aa(150,`a`,17),bT(151,`shutdown hooks`),cf(),bT(152,` as `),Aa(153,`code`),bT(154,`enableShutdownHooks()`),cf(),bT(155,` does when systemd stops the service with `),Aa(156,`code`),bT(157,`SIGTERM`),cf(),bT(158,`. Exit code `),Aa(159,`code`),bT(160,`0`),cf(),bT(161,` tells systemd that the service stopped cleanly, so `),Aa(162,`code`),bT(163,`Restart=on-failure`),cf(),bT(164,` doesn't start it again. systemd keeps its own copy of the socket open, so a connection that arrives while the application exits waits for the next start.`),cf(),Aa(165,`p`),bT(166,`The helper counts HTTP requests only. A server-sent events stream counts until the client disconnects, but an open WebSocket connection doesn't. If your application uses WebSockets, also count the sockets of the server's `),Aa(167,`code`),bT(168,`upgrade`),cf(),bT(169,` event until they close.`),cf(),Aa(170,`h4`,18)(171,`span`),bT(172,`Things to keep in mind`),cf()(),Aa(173,`ul`)(174,`li`),bT(175,`Use `),Aa(176,`code`),bT(177,`Restart=on-failure`),cf(),bT(178,`, not `),Aa(179,`code`),bT(180,`Restart=always`),cf(),bT(181,`. With `),Aa(182,`code`),bT(183,`always`),cf(),bT(184,`, systemd starts the application again right after it exits on idle.`),cf(),Aa(185,`li`),bT(186,`Health checks and uptime monitors that send requests to the application start it and keep it running.`),cf(),Aa(187,`li`),bT(188,`Scheduled jobs (see `),Aa(189,`a`,19),bT(190,`Task scheduling`),cf(),bT(191,`) and queue consumers don't run while the application is stopped. Run them in a process that stays up.`),cf(),Aa(192,`li`),bT(193,`The first request after a pause waits for the whole bootstrap, including database connections opened by `),Aa(194,`a`,20),bT(195,`async providers`),cf(),bT(196,`. The `),Aa(197,`a`,21),bT(198,`Serverless`),cf(),bT(199,` chapter shows ways to shorten it. Node.js can also reuse its `),Aa(200,`a`,22),bT(201,`compile cache`),cf(),bT(202,` between starts: add `),Aa(203,`code`),bT(204,`Environment=NODE_COMPILE_CACHE=/var/cache/my-app`),cf(),bT(205,` and `),Aa(206,`code`),bT(207,`CacheDirectory=my-app`),cf(),bT(208,` to the service unit. Node.js writes the cache when the process exits, and a process killed by `),Aa(209,`code`),bT(210,`SIGTERM`),cf(),bT(211,` without `),Aa(212,`code`),bT(213,`enableShutdownHooks()`),cf(),bT(214,` doesn't write it.`),cf()()(),Aa(215,`a`,23),Wa(216,`i`,24),Aa(217,`span`),bT(218,`Edit on GitHub`),cf()()()),c&2){let v=tT(107),w=tT(136);zC(104),hf(` `,jT(105,2,`main`,v.isJsActive),`
`),zC(29),hf(` `,jT(134,5,`exit-when-idle`,w.isJsActive),`
`)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return d})();var me=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(u){return(m||(m=im(d)))(u||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-express-migration`]],features:[xy],decls:899,vars:66,consts:[[`contentReference`,``],[`appf705ec44ae057fa71519edfcddbbdfce94339af0`,``],[`appcdc19179977da0b1284ba7e335f90c1595495904`,``],[`app64866b05c95f27bd8bde1d0acc84adf96e4cb11b`,``],[`appa0c9188d311e6c4f9a780b04fd58efa84bbd17fe`,``],[`app269afbd8524f2ca5570ad5df7d10091abd0fd55a`,``],[`app3a007a96735aafbaf8886c81e5c0e7ec0e35f4c5`,``],[`app3df8966fab1ed78461fc6739ff1997c7943b71a3`,``],[`app82ca95af2d9ac334ecb31f0d71f03d34081a3d11`,``],[`app42c7541659dad98485ba0933a43b48d204405eb4`,``],[`appb42bbeb8b50fca050c7ec5574ebd03bfde608770`,``],[`app1bbd467c9f465faebb278f255c9ee7df78f24ccd`,``],[1,`content`],[1,`content-inner`],[`id`,`migrating-from-express`],[`appAnchor`,``,`id`,`choose-an-approach`],[`href`,`/recipes/express-migration#give-it-to-a-coding-agent`],[`appAnchor`,``,`id`,`one-route-at-a-time`],[`appAnchor`,``,`id`,`requirements`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://expressjs.com/en/guide/migrating-5.html`],[`href`,`/migration-guide#esm-packages`],[1,`language-bash`],[`appAnchor`,``,`id`,`run-nest-on-the-express-app`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`warning`],[`routerLink`,`/exception-filters`],[`routerLink`,`/middleware`],[`routerLink`,`/guards`],[`routerLink`,`/interceptors`],[`routerLink`,`/pipes`],[1,`info`],[`routerLink`,`/faq/global-prefix`],[`appAnchor`,``,`id`,`move-a-route`],[`href`,`/fundamentals/testing#end-to-end-testing`],[`appAnchor`,``,`id`,`share-code-between-the-two`],[`href`,`/fundamentals/custom-providers#value-providers-usevalue`],[`appAnchor`,``,`id`,`finish-the-migration`],[`appAnchor`,``,`id`,`all-at-once`],[`appAnchor`,``,`id`,`pin-the-api-with-tests`],[`appAnchor`,``,`id`,`translate-the-application`],[`routerLink`,`/controllers`],[`routerLink`,`/modules`],[`routerLink`,`/application/validation`],[`routerLink`,`/custom-decorators`],[`appAnchor`,``,`id`,`keep-what-would-change-without-an-error`],[`appAnchor`,``,`id`,`switch-over`],[`appAnchor`,``,`id`,`give-it-to-a-coding-agent`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/express-migration.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,12,0)(2,`div`,13)(3,`h3`,14),bT(4,`Migrating from Express`),cf(),Aa(5,`p`),bT(6,`An Express application can move to Nest one route at a time, with both serving requests, or all at once, in a single release. This page covers both.`),cf(),Aa(7,`h4`,15)(8,`span`),bT(9,`Choose an approach`),cf()(),Aa(10,`table`)(11,`thead`)(12,`tr`)(13,`th`),bT(14,`Question`),cf(),Aa(15,`th`),bT(16,`One route at a time`),cf(),Aa(17,`th`),bT(18,`All at once`),cf()()(),Aa(19,`tbody`)(20,`tr`)(21,`td`),bT(22,`How does it work?`),cf(),Aa(23,`td`),bT(24,`Nest runs on your Express app, and routes move to it one by one`),cf(),Aa(25,`td`),bT(26,`A new Nest application replaces the Express app in one release`),cf()(),Aa(27,`tr`)(28,`td`),bT(29,`What gets deployed?`),cf(),Aa(30,`td`),bT(31,`Each moved route, on its own`),cf(),Aa(32,`td`),bT(33,`Everything, once`),cf()(),Aa(34,`tr`)(35,`td`),bT(36,`What happens to feature work?`),cf(),Aa(37,`td`),bT(38,`It continues, and new endpoints go into Nest`),cf(),Aa(39,`td`),bT(40,`It waits, or gets written twice, until the switch`),cf()(),Aa(41,`tr`)(42,`td`),bT(43,`How do you go back?`),cf(),Aa(44,`td`),bT(45,`Restore one route`),cf(),Aa(46,`td`),bT(47,`Deploy the last Express release`),cf()(),Aa(48,`tr`)(49,`td`),bT(50,`Which Express version?`),cf(),Aa(51,`td`),bT(52,`Express 5, so upgrade first`),cf(),Aa(53,`td`),bT(54,`Any, since the Express app isn't touched`),cf()(),Aa(55,`tr`)(56,`td`),bT(57,`What about existing middleware?`),cf(),Aa(58,`td`),bT(59,`It keeps running, for Nest's routes too`),cf(),Aa(60,`td`),bT(61,`It moves to Nest with everything else`),cf()(),Aa(62,`tr`)(63,`td`),bT(64,`How long are there two styles in the code?`),cf(),Aa(65,`td`),bT(66,`Until the last route moves`),cf(),Aa(67,`td`),bT(68,`Never`),cf()()()(),Aa(69,`p`),bT(70,`Move one route at a time when the application is large, when several people work on it, or when it can't wait. Move it all at once when it's small enough to review as one change and you can pin what it does with tests. That also suits a `),Aa(71,`a`,16),bT(72,`coding agent`),cf(),bT(73,`, which can translate a whole application in one go, but can't tell on its own what must stay the same.`),cf(),Aa(74,`h4`,17)(75,`span`),bT(76,`One route at a time`),cf()(),Aa(77,`p`),bT(78,`The Express app keeps its routes, middleware and error handler, new endpoints are written in Nest, and existing ones move over when you next change them. Both answer on the same port, behind the same middleware, so clients, sessions and authentication don't notice, and every step can be deployed on its own.`),cf(),Aa(79,`h5`,18)(80,`span`),bT(81,`Requirements`),cf()(),Aa(82,`ul`)(83,`li`)(84,`strong`),bT(85,`Express 5.`),cf(),bT(86,` Nest's Express adapter drives an Express 5 application, and an Express 4 one fails as soon as Nest starts. Upgrade the app first, with Express's `),Aa(87,`a`,19),bT(88,`migration guide`),cf(),bT(89,` and its codemod, `),Aa(90,`code`),bT(91,`npx @expressjs/codemod upgrade`),cf(),bT(92,`.`),cf(),Aa(93,`li`)(94,`strong`),bT(95,`TypeScript.`),cf(),bT(96,` The Nest code on this page is TypeScript. If the Express app is written in JavaScript, its files can stay as they are: TypeScript's `),Aa(97,`code`),bT(98,`allowJs`),cf(),bT(99,` option compiles them with the rest.`),cf()(),Aa(100,`p`),bT(101,`A CommonJS app can stay CommonJS. Nest's packages are ESM, which a CommonJS application loads on the Node.js versions listed in the `),Aa(102,`a`,20),bT(103,`migration guide`),cf(),bT(104,`.`),cf(),Aa(105,`p`),bT(106,`Install Nest next to Express:`),cf(),Aa(107,`pre`)(108,`code`,21),bT(109,`
$ npm i --save @nestjs/core @nestjs/common @nestjs/platform-express reflect-metadata rxjs
`),cf()(),Aa(110,`h5`,22)(111,`span`),bT(112,`Run Nest on the Express app`),cf()(),Aa(113,`p`),bT(114,`Nest normally creates its own Express app. Give it yours instead. Stop the Express app from listening, and export a function that builds it, so that tests can build their own:`),cf(),Aa(115,`app-copy-button`,23)(116,`span`,24),bT(117),LT(118,`extension`),Wa(119,`app-tabs`,null,1),cf(),Aa(121,`pre`)(122,`code`,25),bT(123,`
import express from 'express';
import { authenticate } from './auth.js';
import { errorHandler } from './errors.js';
import { ordersRouter } from './orders.router.js';

export function createLegacyApp() {
  const app = express();
  app.use(express.json());
  app.use(authenticate); // sets req.user
  app.use('/orders', ordersRouter);
  app.use(errorHandler);
  // app.listen(3000); <- Nest listens from now on
  return app;
}
`),cf()()(),Aa(124,`p`),bT(125,`Then pass it to the `),Aa(126,`code`),bT(127,`ExpressAdapter`),cf(),bT(128,`, and let Nest listen:`),cf(),Aa(129,`app-copy-button`,23)(130,`span`,24),bT(131),LT(132,`extension`),Wa(133,`app-tabs`,null,2),cf(),Aa(135,`pre`)(136,`code`,25),bT(137,`
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module.js';
import { createLegacyApp } from './legacy/app.js';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(createLegacyApp()),
  );
  await app.listen(process.env.PORT ?? 3000);
}

await bootstrap();
`),cf()()(),Aa(138,`p`),bT(139,`Express runs its middleware and routes in the order they were added. Everything the Express app added comes first. Nest adds its routes when the application starts, in `),Aa(140,`code`),bT(141,`listen()`),cf(),bT(142,` or `),Aa(143,`code`),bT(144,`init()`),cf(),bT(145,`, and then a handler that answers the requests no route matched with a `),Aa(146,`code`),bT(147,`404`),cf(),bT(148,`. So:`),cf(),Aa(149,`ul`)(150,`li`),bT(151,`The Express routes answer as they did before.`),cf(),Aa(152,`li`),bT(153,`Nest's routes answer the requests the Express routes don't.`),cf(),Aa(154,`li`),bT(155,`Nest's routes see what the Express middleware put on the request, such as `),Aa(156,`code`),bT(157,`req.user`),cf(),bT(158,`, and the body its parsers read.`),cf(),Aa(159,`li`),bT(160,`A request for a route neither has gets Nest's `),Aa(161,`code`),bT(162,`404`),cf(),bT(163,` response.`),cf()(),Aa(164,`blockquote`,26)(165,`strong`),bT(166,`Warning`),cf(),bT(167,` Remove a catch-all `),Aa(168,`code`),bT(169,`404`),cf(),bT(170,` handler, such as `),Aa(171,`code`),bT(172,`app.use((req, res) => res.status(404).send())`),cf(),bT(173,`, from the Express app. It comes before Nest's routes, so it answers their requests too, and Nest's handler answers unknown routes in its place. Keep the error handler: an Express error handler only receives the errors of the middleware and routes added before it, so it keeps handling the Express routes' errors, while Nest's `),Aa(174,`a`,27),bT(175,`exception filters`),cf(),bT(176,` handle the errors of Nest's.
`),cf(),Aa(177,`p`),bT(178,`Which part of the application runs for which routes:`),cf(),Aa(179,`table`)(180,`thead`)(181,`tr`)(182,`th`),bT(183,`Part`),cf(),Aa(184,`th`),bT(185,`Express routes`),cf(),Aa(186,`th`),bT(187,`Nest routes`),cf()()(),Aa(188,`tbody`)(189,`tr`)(190,`td`),bT(191,`Middleware added to the Express app (body parsers, sessions, authentication)`),cf(),Aa(192,`td`),bT(193,`Yes`),cf(),Aa(194,`td`),bT(195,`Yes`),cf()(),Aa(196,`tr`)(197,`td`),bT(198,`The Express app's error handler`),cf(),Aa(199,`td`),bT(200,`Yes`),cf(),Aa(201,`td`),bT(202,`No`),cf()(),Aa(203,`tr`)(204,`td`),bT(205,`Middleware added through Nest: `),Aa(206,`a`,28)(207,`code`),bT(208,`MiddlewareConsumer`),cf()(),bT(209,`, `),Aa(210,`code`),bT(211,`app.use()`),cf(),bT(212,`, `),Aa(213,`code`),bT(214,`app.enableCors()`),cf()(),Aa(215,`td`),bT(216,`No`),cf(),Aa(217,`td`),bT(218,`Yes`),cf()(),Aa(219,`tr`)(220,`td`)(221,`a`,29),bT(222,`Guards`),cf(),bT(223,`, `),Aa(224,`a`,30),bT(225,`interceptors`),cf(),bT(226,`, `),Aa(227,`a`,31),bT(228,`pipes`),cf(),bT(229,` and `),Aa(230,`a`,27),bT(231,`exception filters`),cf()(),Aa(232,`td`),bT(233,`No`),cf(),Aa(234,`td`),bT(235,`Yes`),cf()()()(),Aa(236,`p`),bT(237,`The middleware the Express app already runs is in front of Nest's routes as well, so a `),Aa(238,`a`,29),bT(239,`guard`),cf(),bT(240,` can check the user that the existing authentication middleware put on the request:`),cf(),Aa(241,`app-copy-button`,23)(242,`span`,24),bT(243),LT(244,`extension`),Wa(245,`app-tabs`,null,3),cf(),Aa(247,`pre`)(248,`code`,25),bT(249,`
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return Boolean(request.user);
  }
}
`),cf()()(),Aa(250,`blockquote`,32)(251,`strong`),bT(252,`Hint`),cf(),bT(253,` With a `),Aa(254,`a`,33),bT(255,`global prefix`),cf(),bT(256,`, Nest's `),Aa(257,`code`),bT(258,`404`),cf(),bT(259,` handler answers only the paths under the prefix. A path outside it that no Express route matches gets Express's default `),Aa(260,`code`),bT(261,`404`),cf(),bT(262,` page.
`),cf(),Aa(263,`h5`,34)(264,`span`),bT(265,`Move a route`),cf()(),Aa(266,`p`),bT(267,`Write new endpoints in Nest. To move an existing one, write it as a Nest route and delete it from the Express router. Because the Express routes come first, a Nest route with the same method and path doesn't answer until the Express one is gone, so both can be in the code until you're ready to switch:`),cf(),Aa(268,`app-copy-button`,23)(269,`span`,24),bT(270),LT(271,`extension`),Wa(272,`app-tabs`,null,4),cf(),Aa(274,`pre`)(275,`code`,25),bT(276,`
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../authenticated.guard.js';
import { OrdersService } from './orders.service.js';

@Controller('orders')
@UseGuards(AuthenticatedGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }
}
`),cf()()(),Aa(277,`app-copy-button`,23)(278,`span`,24),bT(279),LT(280,`extension`),Wa(281,`app-tabs`,null,5),cf(),Aa(283,`pre`)(284,`code`,25),bT(285,`
import express from 'express';
import { getOrder, listOrders } from './orders.handlers.js';

export const ordersRouter = express.Router();

ordersRouter.get('/', listOrders);
// ordersRouter.get('/:id', getOrder); <- deleted: Nest answers GET /orders/:id
`),cf()()(),Aa(286,`p`)(287,`code`),bT(288,`GET /orders`),cf(),bT(289,` is still answered by Express, and `),Aa(290,`code`),bT(291,`GET /orders/:id`),cf(),bT(292,` falls through the Express router to Nest.`),cf(),Aa(293,`p`)(294,`a`,35),bT(295,`End-to-end tests`),cf(),bT(296,` cover both kinds of route when the test application is built on the Express app too. Pass the adapter to `),Aa(297,`code`),bT(298,`createNestApplication()`),cf(),bT(299,`, and the same test checks a route before and after it moves:`),cf(),Aa(300,`app-copy-button`,23)(301,`span`,24),bT(302),LT(303,`extension`),Wa(304,`app-tabs`,null,6),cf(),Aa(306,`pre`)(307,`code`,25),bT(308,`
import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ExpressAdapter } from '@nestjs/platform-express';
import request from 'supertest';
import { AppModule } from '../src/app.module.js';
import { createLegacyApp } from '../src/legacy/app.js';

describe('Orders', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication(new ExpressAdapter(createLegacyApp()));
    await app.init();
  });

  it('lists orders (Express)', () => {
    return request(app.getHttpServer()).get('/orders').expect(200);
  });

  it('returns one order (Nest)', () => {
    return request(app.getHttpServer())
      .get('/orders/ord_1001')
      .set('Authorization', 'Bearer test-token')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
`),cf()()(),Aa(309,`h5`,36)(310,`span`),bT(311,`Share code between the two`),cf()(),Aa(312,`p`),bT(313,`The Express app already has objects that Nest code needs, such as a database pool, repositories, or a mailer. Register them as `),Aa(314,`a`,37),bT(315,`value providers`),cf(),bT(316,`, so that Nest injects the same instances the Express code uses:`),cf(),Aa(317,`app-copy-button`,23)(318,`span`,24),bT(319),LT(320,`extension`),Wa(321,`app-tabs`,null,7),cf(),Aa(323,`pre`)(324,`code`,25),bT(325,`
import { Global, Module } from '@nestjs/common';
import { OrdersRepository, ordersRepository } from './orders.repository.js';

@Global()
@Module({
  providers: [{ provide: OrdersRepository, useValue: ordersRepository }],
  exports: [OrdersRepository],
})
export class LegacyModule {}
`),cf()()(),Aa(326,`p`),bT(327,`Import `),Aa(328,`code`),bT(329,`LegacyModule`),cf(),bT(330,` once in `),Aa(331,`code`),bT(332,`AppModule`),cf(),bT(333,`, and any provider can inject `),Aa(334,`code`),bT(335,`OrdersRepository`),cf(),bT(336,` by its class.`),cf(),Aa(337,`p`),bT(338,`It works the other way too. Once `),Aa(339,`code`),bT(340,`NestFactory.create()`),cf(),bT(341,` returns, `),Aa(342,`code`),bT(343,`app.get()`),cf(),bT(344,` returns any provider, so a route that stays in Express can call logic that has already moved into a Nest service. Add the route before `),Aa(345,`code`),bT(346,`listen()`),cf(),bT(347,`, and it comes before Nest's routes like the rest of the Express app:`),cf(),Aa(348,`app-copy-button`,23)(349,`span`,24),bT(350),LT(351,`extension`),Wa(352,`app-tabs`,null,8),cf(),Aa(354,`pre`)(355,`code`,25),bT(356,`
const legacyApp = createLegacyApp();
const app = await NestFactory.create(AppModule, new ExpressAdapter(legacyApp));
legacyApp.use('/reports', reportsRouter(app.get(ReportsService)));
await app.listen(process.env.PORT ?? 3000);
`),cf()()(),Aa(357,`h5`,38)(358,`span`),bT(359,`Finish the migration`),cf()(),Aa(360,`p`),bT(361,`When the Express routers are empty, move what's left of the Express app into Nest: middleware into `),Aa(362,`a`,28),bT(363,`Nest middleware`),cf(),bT(364,` or `),Aa(365,`code`),bT(366,`app.use()`),cf(),bT(367,`, and the error handler into an `),Aa(368,`a`,27),bT(369,`exception filter`),cf(),bT(370,`. Then delete the `),Aa(371,`code`),bT(372,`legacy`),cf(),bT(373,` folder, and create the application without an adapter argument:`),cf(),Aa(374,`app-copy-button`)(375,`pre`)(376,`code`,25),bT(377,`
const app = await NestFactory.create(AppModule);
`),cf()()(),Aa(378,`h4`,39)(379,`span`),bT(380,`All at once`),cf()(),Aa(381,`p`),bT(382,`A new Nest application replaces the Express app in one release. Until then the Express app stays as it is, on whichever version of Express it runs, and it's the reference for what the new application must do.`),cf(),Aa(383,`p`),bT(384,`Most of the risk isn't in the translation, because a wrong translation usually fails loudly. It's in what changes without an error: a status code, the shape of an error response, how a query string is parsed. So the migration starts with tests that notice those changes.`),cf(),Aa(385,`h5`,40)(386,`span`),bT(387,`Pin the API with tests`),cf()(),Aa(388,`p`),bT(389,`Write tests that know only URLs, so that the same tests run against both applications. Go through every router and `),Aa(390,`code`),bT(391,`app.use()`),cf(),bT(392,` call, and cover each route's status code, body and important headers, for failures as well as successes:`),cf(),Aa(393,`app-copy-button`)(394,`pre`)(395,`code`,25),bT(396,`
import assert from 'node:assert/strict';
import { test } from 'node:test';

const BASE = process.env.BASE_URL ?? 'http://localhost:3000';

test('creating an order answers 200', async () => {
  const res = await fetch(\`\${BASE}/api/orders\`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: \`Bearer \${token}\` },
    body: JSON.stringify({ total: 10 }),
  });
  assert.equal(res.status, 200);
  assert.equal((await res.json()).status, 'pending');
});

test('errors keep their shape', async () => {
  const res = await fetch(\`\${BASE}/api/orders/nope\`, {
    headers: { authorization: \`Bearer \${token}\` },
  });
  assert.equal(res.status, 404);
  assert.deepEqual(await res.json(), {
    error: { code: 'ORDER_NOT_FOUND', message: 'Order nope not found' },
  });
});
`),cf()()(),Aa(397,`p`),bT(398,`Run them against the Express app until they all pass, before writing any Nest code:`),cf(),Aa(399,`pre`)(400,`code`,21),bT(401,`
$ BASE_URL=http://localhost:3000 node --test test/contract.test.mjs
`),cf()(),Aa(402,`h5`,41)(403,`span`),bT(404,`Translate the application`),cf()(),Aa(405,`p`),bT(406,`Create the Nest application with `),Aa(407,`code`),bT(408,`nest new`),cf(),bT(409,` next to the Express one, and move each router to a controller:`),cf(),Aa(410,`table`)(411,`thead`)(412,`tr`)(413,`th`),bT(414,`Express`),cf(),Aa(415,`th`),bT(416,`Nest`),cf()()(),Aa(417,`tbody`)(418,`tr`)(419,`td`)(420,`code`),bT(421,`express.Router()`),cf(),bT(422,` for a resource`),cf(),Aa(423,`td`),bT(424,`A `),Aa(425,`a`,42),bT(426,`controller`),cf(),bT(427,` in a `),Aa(428,`a`,43),bT(429,`module`),cf(),bT(430,` (`),Aa(431,`code`),bT(432,`nest generate resource`),cf(),bT(433,`)`),cf()(),Aa(434,`tr`)(435,`td`)(436,`code`),bT(437,`router.get('/:id', handler)`),cf()(),Aa(438,`td`)(439,`code`),bT(440,`@Get(':id')`),cf(),bT(441,` on a method`),cf()(),Aa(442,`tr`)(443,`td`)(444,`code`),bT(445,`req.params`),cf(),bT(446,`, `),Aa(447,`code`),bT(448,`req.query`),cf(),bT(449,`, `),Aa(450,`code`),bT(451,`req.body`),cf()(),Aa(452,`td`)(453,`code`),bT(454,`@Param()`),cf(),bT(455,`, `),Aa(456,`code`),bT(457,`@Query()`),cf(),bT(458,`, `),Aa(459,`code`),bT(460,`@Body()`),cf()()(),Aa(461,`tr`)(462,`td`),bT(463,`Validating `),Aa(464,`code`),bT(465,`req.body`),cf(),bT(466,` by hand`),cf(),Aa(467,`td`),bT(468,`A `),Aa(469,`a`,44),bT(470,`schema or a DTO`),cf(),bT(471,`, or keep the check if the tests pin its status and message`),cf()(),Aa(472,`tr`)(473,`td`),bT(474,`Authentication middleware that sets `),Aa(475,`code`),bT(476,`req.user`),cf()(),Aa(477,`td`),bT(478,`A `),Aa(479,`a`,29),bT(480,`guard`),cf(),bT(481,` that sets it, and a `),Aa(482,`a`,45),bT(483,`custom decorator`),cf(),bT(484,` that reads it`),cf()(),Aa(485,`tr`)(486,`td`)(487,`code`),bT(488,`requireRole('admin')`),cf()(),Aa(489,`td`),bT(490,`Metadata on the route, read by a guard`),cf()(),Aa(491,`tr`)(492,`td`)(493,`code`),bT(494,`router.param('id', load)`),cf()(),Aa(495,`td`),bT(496,`A `),Aa(497,`a`,31),bT(498,`pipe`),cf(),bT(499,`: `),Aa(500,`code`),bT(501,`@Param('id', OrderByIdPipe)`),cf(),bT(502,`. Guards run before pipes, so authentication still comes first`),cf()(),Aa(503,`tr`)(504,`td`)(505,`code`),bT(506,`res.json(x)`),cf()(),Aa(507,`td`)(508,`code`),bT(509,`return x`),cf(),bT(510,`, with `),Aa(511,`code`),bT(512,`@HttpCode()`),cf(),bT(513,` when the status isn't the default`),cf()(),Aa(514,`tr`)(515,`td`)(516,`code`),bT(517,`res.status(204).end()`),cf()(),Aa(518,`td`)(519,`code`),bT(520,`@HttpCode(204)`),cf(),bT(521,`, and return nothing`),cf()(),Aa(522,`tr`)(523,`td`)(524,`code`),bT(525,`res.redirect(301, url)`),cf()(),Aa(526,`td`)(527,`code`),bT(528,`@Redirect(url, 301)`),cf()()(),Aa(529,`tr`)(530,`td`)(531,`code`),bT(532,`res.cookie()`),cf()(),Aa(533,`td`)(534,`code`),bT(535),cf(),bT(536,`, then `),Aa(537,`code`),bT(538,`res.cookie()`),cf(),bT(539,` and `),Aa(540,`code`),bT(541,`return`),cf(),bT(542,` as usual`),cf()(),Aa(543,`tr`)(544,`td`)(545,`code`),bT(546,`res.type()`),cf(),bT(547,`, `),Aa(548,`code`),bT(549,`res.attachment()`),cf()(),Aa(550,`td`)(551,`code`),bT(552,`@Header()`),cf()()(),Aa(553,`tr`)(554,`td`)(555,`code`),bT(556,`res.write()`),cf()(),Aa(557,`td`)(558,`code`),bT(559,`@Res() res`),cf(),bT(560,`, then write to it as in Express`),cf()(),Aa(561,`tr`)(562,`td`)(563,`code`),bT(564,`next(err)`),cf()(),Aa(565,`td`)(566,`code`),bT(567,`throw err`),cf(),bT(568,`, handled by an `),Aa(569,`a`,27),bT(570,`exception filter`),cf()()(),Aa(571,`tr`)(572,`td`),bT(573,`The error handler and catch-all `),Aa(574,`code`),bT(575,`404`),cf()(),Aa(576,`td`),bT(577,`One global exception filter`),cf()(),Aa(578,`tr`)(579,`td`)(580,`code`),bT(581,`app.use(helmet())`),cf()(),Aa(582,`td`)(583,`code`),bT(584,`app.use(helmet())`),cf()()(),Aa(585,`tr`)(586,`td`)(587,`code`),bT(588,`app.use(cors(options))`),cf()(),Aa(589,`td`)(590,`code`),bT(591,`app.enableCors(options)`),cf()()(),Aa(592,`tr`)(593,`td`)(594,`code`),bT(595,`express.static(dir)`),cf()(),Aa(596,`td`)(597,`code`),bT(598),cf()()(),Aa(599,`tr`)(600,`td`)(601,`code`),bT(602,`multer(options).single('file')`),cf()(),Aa(603,`td`)(604,`code`),bT(605,`@UseInterceptors(FileInterceptor('file', options))`),cf(),bT(606,` and `),Aa(607,`code`),bT(608,`@UploadedFile()`),cf()()(),Aa(609,`tr`)(610,`td`),bT(611,`Modules holding a database pool or a mailer`),cf(),Aa(612,`td`)(613,`a`,37),bT(614,`Value providers`),cf(),bT(615,`, at first, then services`),cf()()()(),Aa(616,`p`),bT(617,`A router with authentication, a role check and a parameter handler becomes:`),cf(),Aa(618,`app-copy-button`,23)(619,`span`,24),bT(620),LT(621,`extension`),Wa(622,`app-tabs`,null,9),cf(),Aa(624,`pre`)(625,`code`,25),bT(626,`
@Controller('api/orders')
@UseGuards(AuthGuard, RoleGuard)
export class OrdersController {
  @Post()
  @HttpCode(200) // Express answered 200, and a client depends on it
  create(@CurrentUser() user: User, @Body() body?: CreateOrderBody) {
    const { total, tags } = body ?? {};
    if (typeof total !== 'number' || total <= 0) {
      throw new ApiError(422, 'INVALID_TOTAL', 'total must be a positive number');
    }
    return createOrder(user.id, total, tags);
  }

  @Get('summary') // Declared before ':orderId', which would match it too
  @Role('admin')
  summary() {
    return { total: orders.size };
  }

  @Get(':orderId')
  findOne(@CurrentUser() user: User, @Param('orderId', OrderByIdPipe) order: Order) {
    if (user.role !== 'admin' && order.userId !== user.id) {
      throw new ApiError(403, 'FORBIDDEN', 'Not your order');
    }
    return order;
  }
}
`),cf()()(),Aa(627,`h5`,46)(628,`span`),bT(629,`Keep what would change without an error`),cf()(),Aa(630,`p`),bT(631,`These are the differences that compile, start and look right, and that your tests have to catch:`),cf(),Aa(632,`table`)(633,`thead`)(634,`tr`)(635,`th`),bT(636,`In Express`),cf(),Aa(637,`th`),bT(638,`In a Nest application`),cf(),Aa(639,`th`),bT(640,`To keep the old behavior`),cf()()(),Aa(641,`tbody`)(642,`tr`)(643,`td`)(644,`code`),bT(645,`res.json()`),cf(),bT(646,` answers `),Aa(647,`code`),bT(648,`200`),cf(),bT(649,`, on a `),Aa(650,`code`),bT(651,`POST`),cf(),bT(652,` too`),cf(),Aa(653,`td`),bT(654,`A `),Aa(655,`code`),bT(656,`POST`),cf(),bT(657,` handler answers `),Aa(658,`code`),bT(659,`201`),cf()(),Aa(660,`td`)(661,`code`),bT(662,`@HttpCode(200)`),cf()()(),Aa(663,`tr`)(664,`td`),bT(665,`Errors have the shape your handler gives them`),cf(),Aa(666,`td`)(667,`code`),bT(668),cf()(),Aa(669,`td`),bT(670,`A global exception filter`),cf()(),Aa(671,`tr`)(672,`td`),bT(673,`An unknown route gets your `),Aa(674,`code`),bT(675,`404`),cf()(),Aa(676,`td`)(677,`code`),bT(678,`NotFoundException`),cf(),bT(679,`, with Nest's body`),cf(),Aa(680,`td`),bT(681,`The same filter`),cf()(),Aa(682,`tr`)(683,`td`),bT(684,`Malformed JSON reaches your handler as `),Aa(685,`code`),bT(686,`entity.parse.failed`),cf()(),Aa(687,`td`)(688,`code`),bT(689,`BadRequestException`),cf(),bT(690,`, which a malformed URL such as `),Aa(691,`code`),bT(692,`/orders/%FF`),cf(),bT(693,` also raises`),cf(),Aa(694,`td`),bT(695,`The same filter`),cf()(),Aa(696,`tr`)(697,`td`),bT(698,`A JSON body over 100 kB reaches your handler as `),Aa(699,`code`),bT(700,`entity.too.large`),cf()(),Aa(701,`td`),bT(702,`An `),Aa(703,`code`),bT(704,`HttpException`),cf(),bT(705,` with status `),Aa(706,`code`),bT(707,`413`),cf()(),Aa(708,`td`),bT(709,`The same filter`),cf()(),Aa(710,`tr`)(711,`td`),bT(712,`A multer error reaches your handler as `),Aa(713,`code`),bT(714,`MulterError`),cf()(),Aa(715,`td`)(716,`code`),bT(717,`FileInterceptor`),cf(),bT(718,` raises `),Aa(719,`code`),bT(720,`PayloadTooLargeException`),cf(),bT(721,` for a size error, and a `),Aa(722,`code`),bT(723,`400`),cf(),bT(724,` for most others`),cf(),Aa(725,`td`),bT(726,`The same filter, or run multer yourself`),cf()(),Aa(727,`tr`)(728,`td`),bT(729,`Only the body formats you added a parser for are read`),cf(),Aa(730,`td`),bT(731,`JSON and URL-encoded bodies are both read`),cf(),Aa(732,`td`)(733,`code`),bT(734,`bodyParser: false`),cf(),bT(735,` in `),Aa(736,`code`),bT(737,`NestFactory.create()`),cf(),bT(738,`, then `),Aa(739,`code`),bT(740,`app.use(express.json())`),cf()()(),Aa(741,`tr`)(742,`td`)(743,`code`),bT(744,`router.use(authenticate)`),cf(),bT(745,` also answers for paths with no route under it`),cf(),Aa(746,`td`),bT(747,`A guard runs only on routes that exist, so those paths get a `),Aa(748,`code`),bT(749,`404`),cf()(),Aa(750,`td`),bT(751,`Keep it as a middleware, with `),Aa(752,`code`),bT(753),cf(),bT(754,`, if clients can tell`),cf()(),Aa(755,`tr`)(756,`td`)(757,`code`),bT(758,`router.param()`),cf(),bT(759,` runs before a route's own middleware, so a missing record is a `),Aa(760,`code`),bT(761,`404`),cf(),bT(762,` for anyone`),cf(),Aa(763,`td`),bT(764,`Every guard runs before any pipe, so `),Aa(765,`code`),bT(766,`requireRole`),cf(),bT(767,` answers first, with a `),Aa(768,`code`),bT(769,`403`),cf()(),Aa(770,`td`),bT(771,`Check the role in the handler, after the pipe, if clients can tell`),cf()(),Aa(772,`tr`)(773,`td`),bT(774,`On Express 4, `),Aa(775,`code`),bT(776,`?min[total]=10`),cf(),bT(777,` is `),Aa(778,`code`),bT(779),cf()(),Aa(780,`td`),bT(781,`Express 5's parser gives `),Aa(782,`code`),bT(783),cf()(),Aa(784,`td`)(785,`code`),bT(786,`app.set('query parser', 'extended')`),cf()()(),Aa(787,`tr`)(788,`td`),bT(789,`On Express 4, a request with no body has `),Aa(790,`code`),bT(791,`req.body`),cf(),bT(792,` as `),Aa(793,`code`),bT(794),cf()(),Aa(795,`td`)(796,`code`),bT(797,`@Body()`),cf(),bT(798,` is `),Aa(799,`code`),bT(800,`undefined`),cf(),bT(801,`, so destructuring it throws`),cf(),Aa(802,`td`)(803,`code`),bT(804),cf()()(),Aa(805,`tr`)(806,`td`)(807,`code`),bT(808,`res.json('1.2.3')`),cf(),bT(809,` sends a JSON string`),cf(),Aa(810,`td`),bT(811,`Returning a string sends `),Aa(812,`code`),bT(813,`text/html`),cf()(),Aa(814,`td`)(815,`code`),bT(816,`@Res() res`),cf(),bT(817,`, then `),Aa(818,`code`),bT(819,`res.json('1.2.3')`),cf()()()()(),Aa(820,`p`),bT(821,`Route paths have to change too, but those fail loudly: `),Aa(822,`code`),bT(823,`/search/:term?`),cf(),bT(824,` stops the application at startup, and needs `),Aa(825,`code`),bT(826),cf(),bT(827,`. A wildcard needs a name, `),Aa(828,`code`),bT(829,`assets/*path`),cf(),bT(830,`, and `),Aa(831,`code`),bT(832,`@Param('path')`),cf(),bT(833,` gives its segments as an array. `),Aa(834,`code`),bT(835,`assets/*path`),cf(),bT(836,` doesn't match `),Aa(837,`code`),bT(838,`/assets/`),cf(),bT(839,` with nothing after it, so use `),Aa(840,`code`),bT(841),cf(),bT(842,` if Express 4 answered that path.`),cf(),Aa(843,`p`),bT(844,`Coming from Express 4 also brings Express 5's own small changes, which tests that compare exact bytes will find: `),Aa(845,`code`),bT(846,`charset=utf-8`),cf(),bT(847,` where static files said `),Aa(848,`code`),bT(849,`UTF-8`),cf(),bT(850,`, and a different body on redirects. No client should depend on those, so accept them rather than pinning old versions of Express's libraries to reproduce them.`),cf(),Aa(851,`p`),bT(852,`The filter and `),Aa(853,`code`),bT(854,`main.ts`),cf(),bT(855,` hold most of it. They must keep your error shape for every error, including the ones Nest raises itself, so check which of them your tests expect. This filter, for example, reports any `),Aa(856,`code`),bT(857,`BadRequestException`),cf(),bT(858,` as malformed JSON:`),cf(),Aa(859,`app-copy-button`,23)(860,`span`,24),bT(861),LT(862,`extension`),Wa(863,`app-tabs`,null,10),cf(),Aa(865,`pre`)(866,`code`,25),bT(867,`
@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const request = http.getRequest<Request>();
    const response = http.getResponse<Response>();
    const send = (status: number, code: string, message: string) =>
      response.status(status).json({ error: { code, message } });

    if (exception instanceof ApiError) {
      return send(exception.status, exception.code, exception.message);
    }
    if (exception instanceof NotFoundException) {
      return send(404, 'NOT_FOUND', \`No route for \${request.method} \${request.path}\`);
    }
    if (exception instanceof BadRequestException) {
      return send(400, 'BAD_JSON', 'Malformed JSON');
    }
    if (exception instanceof PayloadTooLargeException) {
      return send(413, 'FILE_TOO_LARGE', 'File too large');
    }
    if (exception instanceof HttpException) {
      return send(exception.getStatus(), 'ERROR', exception.message);
    }
    console.error(exception);
    return send(500, 'INTERNAL', 'Something went wrong');
  }
}
`),cf()()(),Aa(868,`app-copy-button`,23)(869,`span`,24),bT(870),LT(871,`extension`),Wa(872,`app-tabs`,null,11),cf(),Aa(874,`pre`)(875,`code`,25),bT(876,`
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('query parser', 'extended');
  app.use(helmet());
  app.enableCors({ origin: 'https://shop.example.com', credentials: true });
  app.useStaticAssets(join(import.meta.dirname, '..', 'public'), { prefix: '/static' });
  app.useGlobalFilters(new ApiExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}

await bootstrap();
`),cf()()(),Aa(877,`h5`,47)(878,`span`),bT(879,`Switch over`),cf()(),Aa(880,`p`),bT(881,`Run the same tests against the Nest application, and fix the application rather than the tests:`),cf(),Aa(882,`pre`)(883,`code`,21),bT(884,`
$ BASE_URL=http://localhost:3001 node --test test/contract.test.mjs
`),cf()(),Aa(885,`p`),bT(886,`When they pass, deploy it in place of the Express app, and keep the last Express release deployable until the new one has served real traffic.`),cf(),Aa(887,`h4`,48)(888,`span`),bT(889,`Give it to a coding agent`),cf()(),Aa(890,`p`),bT(891,`Either approach works with a coding agent, and all at once is the better fit when the application is small enough to review in one change. Point the agent at this page and hold it to the tests, so that it can't declare success on code that merely compiles:`),cf(),Aa(892,`pre`)(893,`code`,21),bT(894,`
Migrate this Express application to NestJS all at once, following
/recipes/express-migration.md.

1. Before changing anything, write black-box HTTP tests that cover every
   route: status codes, bodies and important headers, failures included.
   Run them against the Express app until they all pass.
2. Build the Nest application next to it, using the page's translation table.
3. Check every row of "Keep what would change without an error".
4. Run the same tests against the Nest application. Don't edit a test to
   make it pass. If behavior has to change, stop and tell me.
`),cf()()(),Aa(895,`a`,49),Wa(896,`i`,50),Aa(897,`span`),bT(898,`Edit on GitHub`),cf()()()),c&2){let v=tT(120),w=tT(134),k=tT(246),I=tT(273),C=tT(282),T=tT(305),q=tT(322),P=tT(353),B=tT(623),N=tT(864),U=tT(873);zC(117),hf(` `,jT(118,33,`legacy/app`,v.isJsActive),`
`),zC(14),hf(` `,jT(132,36,`main`,w.isJsActive),`
`),zC(112),hf(` `,jT(244,39,`authenticated.guard`,k.isJsActive),`
`),zC(27),hf(` `,jT(271,42,`orders/orders.controller`,I.isJsActive),`
`),zC(9),hf(` `,jT(280,45,`legacy/orders.router`,C.isJsActive),`
`),zC(23),hf(` `,jT(303,48,`test/orders.e2e-spec`,T.isJsActive),`
`),zC(17),hf(` `,jT(320,51,`legacy/legacy.module`,q.isJsActive),`
`),zC(31),hf(` `,jT(351,54,`main`,P.isJsActive),`
`),zC(185),Ky(`@Res(`,`{`,` passthrough: true `,`}`,`) res`),zC(63),Ky(`app.useStaticAssets(dir, `,`{`,` prefix `,`}`,`)`),zC(22),hf(` `,jT(621,57,`orders/orders.controller`,B.isJsActive),`
`),zC(48),Ky(``,`{`,` statusCode, message, error `,`}`),zC(85),Ky(`consumer.apply(authenticate).forRoutes('api/orders/`,`{`,`*path`,`}`,`')`),zC(26),Xy(``,`{`,` min: `,`{`,` total: '10' `,`}`,` `,`}`),zC(4),Ky(``,`{`,` 'min[total]': '10' `,`}`),zC(11),Ky(``,`{`,``,`}`),zC(10),Ky(`body ?? `,`{`,``,`}`),zC(22),Ky(`search`,`{`,`/:term`,`}`),zC(15),Ky(`assets/`,`{`,`*path`,`}`),zC(20),hf(` `,jT(862,60,`common/api-exception.filter`,N.isJsActive),`
`),zC(9),hf(` `,jT(871,63,`main`,U.isJsActive),`
`)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return d})();var gn=[{path:`mikroorm`,redirectTo:f(`/data/mikroorm`)},{path:`cqrs`,component:K,data:{title:`CQRS`}},{path:`swagger`,redirectTo:`/openapi/introduction`},{path:`prisma`,redirectTo:g$1(`/data/prisma`,{"getting-started":`/data/prisma#installation`,"create-your-nestjs-project":`/data/prisma#installation`,"set-up-prisma":`/data/prisma#installation`,"set-the-generator-output-path":`/data/prisma#set-the-generator-output-path`,"configure-the-module-format":`/data/prisma#configure-the-module-format`,"set-the-database-connection":`/data/prisma#set-the-database-connection`,"create-two-database-tables-with-prisma-migrate":`/data/prisma#models-and-migrations`,"install-and-generate-prisma-client":`/data/prisma#generate-prisma-client`,"use-prisma-client-in-your-nestjs-services":`/data/prisma#prismaservice`,"implement-your-rest-api-routes-in-the-main-app-controller":`/data/prisma#querying-from-services`,get:`/data/prisma#querying-from-services`,post:`/data/prisma#querying-from-services`,put:`/data/prisma#querying-from-services`,delete:`/data/prisma#querying-from-services`,summary:`/data/prisma#example`})},{path:`sentry`,redirectTo:`/observability/error-monitoring`},{path:`terminus`,redirectTo:f(`/reliability/terminus`)},{path:`crud-utilities`,redirectTo:`/recipes/crud-generator`},{path:`crud`,redirectTo:`/recipes/crud-generator`},{path:`crud-generator`,component:Y,data:{title:`CRUD generator`}},{path:`hot-reload`,component:V,data:{title:`Hot reload`}},{path:`serve-static`,component:Z,data:{title:`Serve static`}},{path:`nextjs`,component:ee,data:{title:`Next.js`}},{path:`router-module`,component:te,data:{title:`Router module`}},{path:`fastify-migration`,component:ie,data:{title:`Migrating from Fastify`}},{path:`supabase`,component:ne,data:{title:`Supabase`}},{path:`nest-commander`,component:ae,data:{title:`Nest Commander`}},{path:`async-local-storage`,component:re,data:{title:`Async Local Storage`}},{path:`repl`,component:X,data:{title:`REPL`}},{path:`swc`,component:oe,data:{title:`SWC (fast compiler)`}},{path:`passport`,component:le,data:{title:`passport`}},{path:`socket-activation`,component:de,data:{title:`Socket activation`}},{path:`express-migration`,component:me,data:{title:`Migrating from Express`}}];export{gn as RECIPES_ROUTES};