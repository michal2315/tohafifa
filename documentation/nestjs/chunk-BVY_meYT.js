import{C as hf,M as xy,N as zC,P as zy,T as jT,_ as Wa,a as u,b as cf,c as l$2,d as Jc,i as g,k as tT,l as Aa,m as LT,n as ln,o as l,r as xt,s as l$1,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";import{t as a}from"./chunk-BlfYaby4.js";import{n as g$1}from"./chunk-BfAzJNW5.js";var N=(()=>{class m extends xt{static ɵfac=(()=>{let d;return function(u){return(d||(d=im(m)))(u||m)}})();static ɵcmp=ef({type:m,selectors:[[`app-drizzle`]],features:[xy],decls:807,vars:52,consts:[[`contentReference`,``],[`appd56ef8fcd5debf94799cc6e1b0d4f482d77492f9`,``],[`appc1a49252ef9e9dcd1d488ff92848f22b010bf855`,``],[`appdbb87ede61053348212722f5a838ad469a87271a`,``],[`app2ee548a35bb74322f313362e05413e305065cc9a`,``],[`appf57754e85d22e2a2e1dd4eab5fa7b70c423e5a1f`,``],[`appa3bb836b9df152724ffe40ce0b1fc47a2c5cbb20`,``],[`appe70f6d8ae33e9592fae14d38ce8d939a86d9979f`,``],[`app4a46c817cc4d3d663b5b06ffafb704401b362819`,``],[`appf809b8bdafaee03b3a7b85337cf15f7523b03199`,``],[`appe6cd8c6df3baa19042fbaabc2a728226a2f61ea2`,``],[`app05db77322e0e83ab14f9ca12849805e82dabcd28`,``],[1,`content`],[1,`content-inner`],[`id`,`drizzle`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.postgresql.org/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/connect-overview`],[1,`language-bash`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/upgrade-v1`],[`appAnchor`,``,`id`,`schema`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/sql-schema-declaration`],[`appAnchor`,``,`id`,`registering-the-database`],[`href`,`/fundamentals/lifecycle-events#application-shutdown`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/read-replicas`],[1,`warning`],[`appAnchor`,``,`id`,`queries`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/select`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/insert`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/update`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/delete`],[`appAnchor`,``,`id`,`relations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/rqb-v2`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/relations-v2`],[`appAnchor`,``,`id`,`drizzle-transactions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Database_transaction`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/transactions`],[`href`,`/recipes/async-local-storage#nestjs-cls`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://papooch.github.io/nestjs-cls/plugins/available-plugins/transactional/drizzle-orm-adapter`],[`appAnchor`,``,`id`,`custom-repositories`],[`routerLink`,`/fundamentals/custom-providers`],[`appAnchor`,``,`id`,`migrations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/migrations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team/docs/kit-overview`],[`appAnchor`,``,`id`,`multiple-databases`],[`appAnchor`,``,`id`,`testing`],[`href`,`/data/drizzle#custom-repositories`],[`appAnchor`,``,`id`,`async-configuration`],[`routerLink`,`/fundamentals/async-providers`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/data/drizzle.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,12,0)(2,`div`,13)(3,`h3`,14),bT(4,`Drizzle`),cf(),Aa(5,`p`),bT(6,`As an alternative to TypeORM, you can use `),Aa(7,`a`,15),bT(8,`Drizzle ORM`),cf(),bT(9,` with the `),Aa(10,`code`),bT(11,`@nestjs/drizzle`),cf(),bT(12,` package. Drizzle is a lightweight, TypeScript-first ORM. You declare tables with plain functions and write queries with a SQL-like query builder (or the relational query API for nested reads), and Drizzle infers every result type from the schema. There are no entity classes, decorators, or code generation steps.`),cf(),Aa(13,`p`),bT(14,`To get started, install the required dependencies. This chapter uses `),Aa(15,`a`,16),bT(16,`PostgreSQL`),cf(),bT(17,` with the `),Aa(18,`code`),bT(19,`node-postgres`),cf(),bT(20,` driver, but Drizzle supports many other databases, including MySQL, SQLite, and Microsoft SQL Server, as well as serverless databases such as Neon, Turso, and Cloudflare D1. The steps in this chapter are the same for every database Drizzle supports: install the driver for your database, and import `),Aa(21,`code`),bT(22,`drizzle()`),cf(),bT(23,` from the matching `),Aa(24,`a`,17),bT(25,`entry point`),cf(),bT(26,` (e.g., `),Aa(27,`code`),bT(28,`drizzle-orm/mysql2`),cf(),bT(29,` or `),Aa(30,`code`),bT(31,`drizzle-orm/libsql`),cf(),bT(32,`) instead of `),Aa(33,`code`),bT(34,`drizzle-orm/node-postgres`),cf(),bT(35,`.`),cf(),Aa(36,`pre`)(37,`code`,18),bT(38,`
$ npm install --save @nestjs/drizzle drizzle-orm@rc pg
$ npm install --save-dev drizzle-kit@rc @types/pg
`),cf()(),Aa(39,`blockquote`,19)(40,`strong`),bT(41,`Hint`),cf(),bT(42,` This chapter uses Drizzle ORM v1, currently published under the `),Aa(43,`code`),bT(44,`rc`),cf(),bT(45,` tag. The Drizzle documentation is written for this version. `),Aa(46,`code`),bT(47,`@nestjs/drizzle`),cf(),bT(48,` also supports Drizzle v0.35 and later. With v0.x, only relations and relational queries work differently from this chapter (see `),Aa(49,`a`,20),bT(50,`Upgrading to v1`),cf(),bT(51,`).
`),cf(),Aa(52,`h4`,21)(53,`span`),bT(54,`Schema`),cf()(),Aa(55,`p`),bT(56,`With Drizzle, you write the database schema in TypeScript. You declare each table with a function such as `),Aa(57,`code`),bT(58,`pgTable()`),cf(),bT(59,` and export it from a schema file. Let's define the `),Aa(60,`code`),bT(61,`users`),cf(),bT(62,` table:`),cf(),Aa(63,`app-copy-button`,22)(64,`span`,23),bT(65),LT(66,`extension`),Wa(67,`app-tabs`,null,1),cf(),Aa(69,`pre`)(70,`code`,24),bT(71,`
import { boolean, integer, pgTable, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  isActive: boolean('is_active').notNull().default(true),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
`),cf()()(),Aa(72,`p`),bT(73,`The `),Aa(74,`code`),bT(75,`$inferSelect`),cf(),bT(76,` and `),Aa(77,`code`),bT(78,`$inferInsert`),cf(),bT(79,` helpers derive the row types from the table definition, so there's no separate model class to keep in sync with the schema. For the available column types, see `),Aa(80,`a`,25),bT(81,`Schema declaration`),cf(),bT(82,` in the Drizzle documentation.`),cf(),Aa(83,`h4`,26)(84,`span`),bT(85,`Registering the database`),cf()(),Aa(86,`p`),bT(87,`Once the dependencies are installed and the schema is defined, import the `),Aa(88,`code`),bT(89,`DrizzleModule`),cf(),bT(90,` into the root `),Aa(91,`code`),bT(92,`AppModule`),cf(),bT(93,`:`),cf(),Aa(94,`app-copy-button`,22)(95,`span`,23),bT(96),LT(97,`extension`),Wa(98,`app-tabs`,null,2),cf(),Aa(100,`pre`)(101,`code`,24),bT(102,`
import { Module } from '@nestjs/common';
import { DrizzleModule } from '@nestjs/drizzle';
import { drizzle } from 'drizzle-orm/node-postgres';

@Module({
  imports: [
    DrizzleModule.forRoot({
      drizzle,
      connection: process.env.DATABASE_URL!,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(103,`p`),bT(104,`The `),Aa(105,`code`),bT(106,`drizzle`),cf(),bT(107,` option takes the `),Aa(108,`code`),bT(109,`drizzle()`),cf(),bT(110,` function of your driver. `),Aa(111,`code`),bT(112,`DrizzleModule`),cf(),bT(113,` calls it with the `),Aa(114,`code`),bT(115,`connection`),cf(),bT(116,` and the other Drizzle options once for each application instance. Every application, including each one your e2e tests create, therefore gets its own connection pool, which is closed when that application shuts down. Because you pass the function, every driver Drizzle supports works the same way, and TypeScript checks `),Aa(117,`code`),bT(118,`connection`),cf(),bT(119,` and the other options against that driver's `),Aa(120,`code`),bT(121,`drizzle()`),cf(),bT(122,` signature.`),cf(),Aa(123,`p`),bT(124,`The `),Aa(125,`code`),bT(126,`forRoot()`),cf(),bT(127,` method supports the following options:`),cf(),Aa(128,`table`)(129,`tr`)(130,`td`)(131,`code`),bT(132,`drizzle`),cf()(),Aa(133,`td`),bT(134,`The `),Aa(135,`code`),bT(136,`drizzle()`),cf(),bT(137,` function of your driver, e.g., the one exported by `),Aa(138,`code`),bT(139,`drizzle-orm/node-postgres`),cf()()(),Aa(140,`tr`)(141,`td`)(142,`code`),bT(143,`connection`),cf()(),Aa(144,`td`),bT(145,`A connection string, or the driver's connection options (e.g., a `),Aa(146,`code`),bT(147,`pg`),cf(),bT(148,` pool configuration)`),cf()(),Aa(149,`tr`)(150,`td`)(151,`code`),bT(152,`db`),cf()(),Aa(153,`td`),bT(154,`A database instance that you created, used instead of `),Aa(155,`code`),bT(156,`drizzle`),cf(),bT(157,` and `),Aa(158,`code`),bT(159,`connection`),cf(),bT(160,` (see below)`),cf()(),Aa(161,`tr`)(162,`td`)(163,`code`),bT(164,`autoCloseConnection`),cf()(),Aa(165,`td`),bT(166,`If `),Aa(167,`code`),bT(168,`true`),cf(),bT(169,`, the database's client (`),Aa(170,`code`),bT(171,`db.$client`),cf(),bT(172,`) is closed when the application shuts down (default: `),Aa(173,`code`),bT(174,`true`),cf(),bT(175,`)`),cf()()(),Aa(176,`p`),bT(177,`Other options, such as `),Aa(178,`code`),bT(179,`relations`),cf(),bT(180,`, `),Aa(181,`code`),bT(182,`logger`),cf(),bT(183,`, or `),Aa(184,`code`),bT(185,`casing`),cf(),bT(186,`, are passed to `),Aa(187,`code`),bT(188,`drizzle()`),cf(),bT(189,` as well.`),cf(),Aa(190,`blockquote`,19)(191,`strong`),bT(192,`Hint`),cf(),bT(193,` Like the options of any module, the `),Aa(194,`code`),bT(195,`forRoot()`),cf(),bT(196,` options are evaluated when the `),Aa(197,`code`),bT(198,`AppModule`),cf(),bT(199,` file is imported, so `),Aa(200,`code`),bT(201,`process.env.DATABASE_URL`),cf(),bT(202,` must already be set at that point (e.g., by starting Node.js with the `),Aa(203,`code`),bT(204,`--env-file=.env`),cf(),bT(205,` flag). To read the connection string through `),Aa(206,`code`),bT(207,`ConfigService`),cf(),bT(208,` instead, use `),Aa(209,`code`),bT(210,`forRootAsync()`),cf(),bT(211,`, described in the "Async configuration" section below.
`),cf(),Aa(212,`blockquote`,19)(213,`strong`),bT(214,`Hint`),cf(),bT(215,` The client is closed when you call `),Aa(216,`code`),bT(217,`app.close()`),cf(),bT(218,`, or when the process receives a termination signal if `),Aa(219,`a`,27),bT(220,`shutdown hooks`),cf(),bT(221,` are enabled. Pool-based clients (e.g., `),Aa(222,`code`),bT(223,`node-postgres`),cf(),bT(224,`, `),Aa(225,`code`),bT(226,`postgres.js`),cf(),bT(227,`, `),Aa(228,`code`),bT(229,`mysql2`),cf(),bT(230,`) are closed with `),Aa(231,`code`),bT(232,`end()`),cf(),bT(233,`, and others (e.g., `),Aa(234,`code`),bT(235,`better-sqlite3`),cf(),bT(236,`, `),Aa(237,`code`),bT(238,`libsql`),cf(),bT(239,`, PGlite) with `),Aa(240,`code`),bT(241,`close()`),cf(),bT(242,`. For a database created with Drizzle's `),Aa(243,`a`,28)(244,`code`),bT(245,`withReplicas()`),cf()(),bT(246,` function, the clients of the primary and all replica databases are closed (with Drizzle v0.44.6 and later; earlier versions don't expose the replicas, so only the primary's client is closed). A client registered under several names is closed only once.
`),cf(),Aa(247,`p`),bT(248,`Once the module is registered, you can inject the database anywhere in the project (without importing any modules) with the `),Aa(249,`code`),bT(250,`@InjectDrizzle()`),cf(),bT(251,` decorator. For example:`),cf(),Aa(252,`app-copy-button`,22)(253,`span`,23),bT(254),LT(255,`extension`),Wa(256,`app-tabs`,null,3),cf(),Aa(258,`pre`)(259,`code`,24),bT(260,`
import { Injectable } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class AppService {
  constructor(
    @InjectDrizzle()
    private readonly db: NodePgDatabase,
  ) {}
}
`),cf()(),Aa(261,`pre`)(262,`code`,24),bT(263,`
import { Injectable, Dependencies } from '@nestjs/common';
import { getDrizzleToken } from '@nestjs/drizzle';

@Injectable()
@Dependencies(getDrizzleToken())
export class AppService {
  constructor(db) {
    this.db = db;
  }
}
`),cf()()(),Aa(264,`p`),bT(265,`To register a database that you create yourself, e.g., one that routes reads to replicas with Drizzle's `),Aa(266,`code`),bT(267,`withReplicas()`),cf(),bT(268,` function, pass it as `),Aa(269,`code`),bT(270,`db`),cf(),bT(271,` instead. Create it in a `),Aa(272,`code`),bT(273,`forRootAsync()`),cf(),bT(274,` factory, which runs once for each application:`),cf(),Aa(275,`app-copy-button`,22)(276,`span`,23),bT(277),LT(278,`extension`),Wa(279,`app-tabs`,null,4),cf(),Aa(281,`pre`)(282,`code`,24),bT(283,`
import { Module } from '@nestjs/common';
import { DrizzleModule } from '@nestjs/drizzle';
import { drizzle } from 'drizzle-orm/node-postgres';
import { withReplicas } from 'drizzle-orm/pg-core';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      useFactory: () => ({
        db: withReplicas(drizzle(process.env.DATABASE_URL!), [
          drizzle(process.env.REPLICA_DATABASE_URL!),
        ]),
      }),
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(284,`blockquote`,29)(285,`strong`),bT(286,`Warning`),cf(),bT(287,` You can also pass a `),Aa(288,`code`),bT(289,`db`),cf(),bT(290,` instance to `),Aa(291,`code`),bT(292,`forRoot()`),cf(),bT(293,`, e.g., one exported by a `),Aa(294,`code`),bT(295,`db`),cf(),bT(296,` file that your seed scripts import too. Such an instance is created once, when its file is first imported. Every application created from `),Aa(297,`code`),bT(298,`AppModule`),cf(),bT(299,` shares it, and the first application to shut down closes it, which breaks e2e test suites that create a new application for each test. In that case, set `),Aa(300,`code`),bT(301,`autoCloseConnection`),cf(),bT(302,` to `),Aa(303,`code`),bT(304,`false`),cf(),bT(305,` and close the client yourself.
`),cf(),Aa(306,`h4`,30)(307,`span`),bT(308,`Queries`),cf()(),Aa(309,`p`),bT(310,`Unlike the TypeORM integration, Drizzle has no `),Aa(311,`code`),bT(312,`forFeature()`),cf(),bT(313,` step. Drizzle tables are plain objects that you import wherever you build queries, and the database is registered globally, so any provider can inject it. Let's implement the `),Aa(314,`code`),bT(315,`UsersService`),cf(),bT(316,`:`),cf(),Aa(317,`app-copy-button`,22)(318,`span`,23),bT(319),LT(320,`extension`),Wa(321,`app-tabs`,null,5),cf(),Aa(323,`pre`)(324,`code`,24),bT(325,`
import { Injectable } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { eq } from 'drizzle-orm';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { users, type NewUser, type User } from '../db/schema.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectDrizzle()
    private readonly db: NodePgDatabase,
  ) {}

  findAll(): Promise<User[]> {
    return this.db.select().from(users);
  }

  async findOne(id: number): Promise<User | undefined> {
    const [user] = await this.db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async create(user: NewUser): Promise<User> {
    const [createdUser] = await this.db.insert(users).values(user).returning();
    return createdUser;
  }

  async remove(id: number): Promise<void> {
    await this.db.delete(users).where(eq(users.id, id));
  }
}
`),cf()(),Aa(326,`pre`)(327,`code`,24),bT(328,`
import { Injectable, Dependencies } from '@nestjs/common';
import { getDrizzleToken } from '@nestjs/drizzle';
import { eq } from 'drizzle-orm';
import { users } from '../db/schema.js';

@Injectable()
@Dependencies(getDrizzleToken())
export class UsersService {
  constructor(db) {
    this.db = db;
  }

  findAll() {
    return this.db.select().from(users);
  }

  async findOne(id) {
    const [user] = await this.db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async create(user) {
    const [createdUser] = await this.db.insert(users).values(user).returning();
    return createdUser;
  }

  async remove(id) {
    await this.db.delete(users).where(eq(users.id, id));
  }
}
`),cf()()(),Aa(329,`p`),bT(330,`A Drizzle query runs when it's awaited (or returned from an `),Aa(331,`code`),bT(332,`async`),cf(),bT(333,` function), and its result type is inferred from the columns it selects. The Drizzle documentation covers `),Aa(334,`a`,31),bT(335,`selecting`),cf(),bT(336,`, `),Aa(337,`a`,32),bT(338,`inserting`),cf(),bT(339,`, `),Aa(340,`a`,33),bT(341,`updating`),cf(),bT(342,`, and `),Aa(343,`a`,34),bT(344,`deleting`),cf(),bT(345,` rows in detail.`),cf(),Aa(346,`h4`,35)(347,`span`),bT(348,`Relations`),cf()(),Aa(349,`p`),bT(350,`Relations are associations between two or more tables, based on common fields, usually primary and foreign keys. Drizzle's `),Aa(351,`a`,36),bT(352,`relational queries`),cf(),bT(353,` use them to fetch nested data, such as users together with their photos, without writing joins by hand.`),cf(),Aa(354,`p`),bT(355,`Let's add a `),Aa(356,`code`),bT(357,`photos`),cf(),bT(358,` table whose `),Aa(359,`code`),bT(360,`userId`),cf(),bT(361,` column references the `),Aa(362,`code`),bT(363,`users`),cf(),bT(364,` table:`),cf(),Aa(365,`app-copy-button`,22)(366,`span`,23),bT(367),LT(368,`extension`),Wa(369,`app-tabs`,null,6),cf(),Aa(371,`pre`)(372,`code`,24),bT(373,`
export const photos = pgTable('photos', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  url: text().notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
});
`),cf()()(),Aa(374,`p`),bT(375,`You declare the relations for the whole schema at once, with the `),Aa(376,`code`),bT(377,`defineRelations()`),cf(),bT(378,` function. For example, each user can have many photos, and each photo belongs to one user:`),cf(),Aa(379,`app-copy-button`,22)(380,`span`,23),bT(381),LT(382,`extension`),Wa(383,`app-tabs`,null,7),cf(),Aa(385,`pre`)(386,`code`,24),bT(387,`
import { defineRelations } from 'drizzle-orm';
import * as schema from './schema.js';

export const relations = defineRelations(schema, (r) => ({
  users: {
    photos: r.many.photos(),
  },
  photos: {
    user: r.one.users({
      from: r.photos.userId,
      to: r.users.id,
    }),
  },
}));
`),cf()()(),Aa(388,`p`),bT(389,`To make the relations available to relational queries, pass them to `),Aa(390,`code`),bT(391,`drizzle()`),cf(),bT(392,` with the `),Aa(393,`code`),bT(394,`relations`),cf(),bT(395,` option:`),cf(),Aa(396,`app-copy-button`)(397,`pre`)(398,`code`,24),bT(399,`
DrizzleModule.forRoot({
  drizzle,
  connection: process.env.DATABASE_URL!,
  relations,
}),
`),cf()()(),Aa(400,`p`),bT(401,`The database type now depends on the relations, so declare it once and reuse it wherever you inject the database:`),cf(),Aa(402,`app-copy-button`,22)(403,`span`,23),bT(404),LT(405,`extension`),Wa(406,`app-tabs`,null,8),cf(),Aa(408,`pre`)(409,`code`,24),bT(410,`
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import type { relations } from './relations.js';

export type Database = NodePgDatabase<typeof relations>;
`),cf()()(),Aa(411,`p`),bT(412,`With that in place, the `),Aa(413,`code`),bT(414,`db.query`),cf(),bT(415,` API is fully typed:`),cf(),Aa(416,`app-copy-button`,22)(417,`span`,23),bT(418),LT(419,`extension`),Wa(420,`app-tabs`,null,9),cf(),Aa(422,`pre`)(423,`code`,24),bT(424,`
@Injectable()
export class UsersService {
  constructor(
    @InjectDrizzle()
    private readonly db: Database,
  ) {}

  findOneWithPhotos(id: number) {
    return this.db.query.users.findFirst({
      where: { id },
      with: { photos: true },
    });
  }
}
`),cf()()(),Aa(425,`blockquote`,19)(426,`strong`),bT(427,`Hint`),cf(),bT(428,` Relations only drive relational queries. Foreign key constraints come from `),Aa(429,`code`),bT(430,`references()`),cf(),bT(431,` in the table definition. To learn more, see `),Aa(432,`a`,37),bT(433,`Relations`),cf(),bT(434,` in the Drizzle documentation.
`),cf(),Aa(435,`h4`,38)(436,`span`),bT(437,`Drizzle Transactions`),cf()(),Aa(438,`p`),bT(439,`A database transaction is a unit of work that the database management system treats as a whole, independently of other transactions: either all of its changes are applied, or none of them are. To learn more, see `),Aa(440,`a`,39),bT(441,`Database transaction`),cf(),bT(442,` on Wikipedia.`),cf(),Aa(443,`p`),bT(444,`To start a `),Aa(445,`a`,40),bT(446,`Drizzle transaction`),cf(),bT(447,`, call the `),Aa(448,`code`),bT(449,`transaction()`),cf(),bT(450,` method of the injected database. The callback receives a transaction object (`),Aa(451,`code`),bT(452,`tx`),cf(),bT(453,`) that exposes the same query API as the database:`),cf(),Aa(454,`app-copy-button`)(455,`pre`)(456,`code`,24),bT(457,`
async deactivate(id: number) {
  await this.db.transaction(async (tx) => {
    await tx.update(users).set({ isActive: false }).where(eq(users.id, id));
    await tx.delete(photos).where(eq(photos.userId, id));
  });
}
`),cf()()(),Aa(458,`p`),bT(459,`If the callback throws or calls `),Aa(460,`code`),bT(461,`tx.rollback()`),cf(),bT(462,`, the transaction is rolled back and `),Aa(463,`code`),bT(464,`transaction()`),cf(),bT(465,` rejects with the error. Otherwise, the transaction is committed, and `),Aa(466,`code`),bT(467,`transaction()`),cf(),bT(468,` resolves with the value the callback returned. Queries that belong to the transaction must run through `),Aa(469,`code`),bT(470,`tx`),cf(),bT(471,`, not through the injected database.`),cf(),Aa(472,`blockquote`,19)(473,`strong`),bT(474,`Hint`),cf(),bT(475,` To run code from several providers in one transaction without passing `),Aa(476,`code`),bT(477,`tx`),cf(),bT(478,` around, propagate the transaction with `),Aa(479,`code`),bT(480,`AsyncLocalStorage`),cf(),bT(481,`. The `),Aa(482,`a`,41)(483,`code`),bT(484,`nestjs-cls`),cf()(),bT(485,` package provides a transactional plugin with a `),Aa(486,`a`,42),bT(487,`Drizzle adapter`),cf(),bT(488,` that does this.
`),cf(),Aa(489,`h4`,43)(490,`span`),bT(491,`Custom repositories`),cf()(),Aa(492,`p`),bT(493,`Drizzle has no repository layer: you build queries from the injected database and the table definitions. To keep the queries for a table in one place, and to make the classes that use them easy to unit test, you can write a repository yourself as a regular provider:`),cf(),Aa(494,`app-copy-button`,22)(495,`span`,23),bT(496),LT(497,`extension`),Wa(498,`app-tabs`,null,10),cf(),Aa(500,`pre`)(501,`code`,24),bT(502,`
import { Injectable } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { eq } from 'drizzle-orm';
import type { Database } from '../db/database.js';
import { users, type User } from '../db/schema.js';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectDrizzle()
    private readonly db: Database,
  ) {}

  findActive(): Promise<User[]> {
    return this.db.select().from(users).where(eq(users.isActive, true));
  }

  async deactivate(id: number): Promise<void> {
    await this.db.update(users).set({ isActive: false }).where(eq(users.id, id));
  }
}
`),cf()()(),Aa(503,`p`),bT(504,`Register `),Aa(505,`code`),bT(506,`UsersRepository`),cf(),bT(507,` in the `),Aa(508,`code`),bT(509,`providers`),cf(),bT(510,` array of `),Aa(511,`code`),bT(512,`UsersModule`),cf(),bT(513,`, and inject it into `),Aa(514,`code`),bT(515,`UsersService`),cf(),bT(516,` instead of the database. In unit tests, replace it with a `),Aa(517,`a`,44),bT(518,`custom provider`),cf(),bT(519,` whose `),Aa(520,`code`),bT(521,`useValue`),cf(),bT(522,` is an object implementing the methods your service calls, such as `),Aa(523,`code`),bT(524,`findActive()`),cf(),bT(525,`.`),cf(),Aa(526,`blockquote`,29)(527,`strong`),bT(528,`Warning`),cf(),bT(529,` Repository methods query the injected database, not a transaction's `),Aa(530,`code`),bT(531,`tx`),cf(),bT(532,`. With a connection pool, they run on a different connection than a transaction started elsewhere with `),Aa(533,`code`),bT(534,`db.transaction()`),cf(),bT(535,`, so they aren't part of it. To run them in a transaction, accept `),Aa(536,`code`),bT(537,`tx`),cf(),bT(538,` as a parameter, or propagate the transaction with `),Aa(539,`code`),bT(540,`nestjs-cls`),cf(),bT(541,` as described above.
`),cf(),Aa(542,`h4`,45)(543,`span`),bT(544,`Migrations`),cf()(),Aa(545,`p`)(546,`a`,46),bT(547,`Migrations`),cf(),bT(548,` incrementally update the database schema to keep it in sync with the application's data model, while preserving the existing data. To generate and run migrations, Drizzle provides a dedicated CLI, `),Aa(549,`a`,47),bT(550,`Drizzle Kit`),cf(),bT(551,`, which reads its settings from a `),Aa(552,`code`),bT(553,`drizzle.config.ts`),cf(),bT(554,` file in the root directory of your project:`),cf(),Aa(555,`app-copy-button`,22)(556,`span`,23),bT(557),LT(558,`extension`),Wa(559,`app-tabs`,null,11),cf(),Aa(561,`pre`)(562,`code`,24),bT(563,`
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
`),cf()()(),Aa(564,`p`),bT(565,`With that file in place, `),Aa(566,`code`),bT(567,`npx drizzle-kit generate`),cf(),bT(568,` creates SQL migration files from your schema changes, and `),Aa(569,`code`),bT(570,`npx drizzle-kit migrate`),cf(),bT(571,` applies them to the database.`),cf(),Aa(572,`p`),bT(573,`Drizzle Kit runs outside your Nest application, so migrations can't use dependency injection or other Nest-specific features. Drizzle Kit loads the `),Aa(574,`code`),bT(575,`.env`),cf(),bT(576,` file from the directory you run it in, so `),Aa(577,`code`),bT(578,`process.env.DATABASE_URL`),cf(),bT(579,` is available in `),Aa(580,`code`),bT(581,`drizzle.config.ts`),cf(),bT(582,` without `),Aa(583,`code`),bT(584,`ConfigModule`),cf(),bT(585,`. Variables already set in the environment take precedence over the file.`),cf(),Aa(586,`p`),bT(587,`To apply pending migrations when the application starts instead, create the database in a `),Aa(588,`code`),bT(589,`forRootAsync()`),cf(),bT(590,` factory and apply them there. The factory can be `),Aa(591,`code`),bT(592,`async`),cf(),bT(593,`, and Nest doesn't create the providers that inject the database until it resolves:`),cf(),Aa(594,`app-copy-button`)(595,`pre`)(596,`code`,24),bT(597,`
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

DrizzleModule.forRootAsync({
  useFactory: async () => {
    const db = drizzle(process.env.DATABASE_URL!, { relations });
    await migrate(db, { migrationsFolder: './drizzle' });
    return { db };
  },
}),
`),cf()()(),Aa(598,`blockquote`,29)(599,`strong`),bT(600,`Warning`),cf(),bT(601,` When several instances of your application start at the same time, each of them tries to apply the migrations. In such deployments, run `),Aa(602,`code`),bT(603,`drizzle-kit migrate`),cf(),bT(604,` as a separate step of your release process instead.
`),cf(),Aa(605,`p`),Wa(606,`app-banner-courses`),cf(),Aa(607,`h4`,48)(608,`span`),bT(609,`Multiple databases`),cf()(),Aa(610,`p`),bT(611,`Some projects require multiple database connections, and the `),Aa(612,`code`),bT(613,`DrizzleModule`),cf(),bT(614,` supports this as well. Register each database with its own `),Aa(615,`code`),bT(616,`DrizzleModule`),cf(),bT(617,` import. In this case, every database except one must have a name:`),cf(),Aa(618,`app-copy-button`)(619,`pre`)(620,`code`,24),bT(621,`
@Module({
  imports: [
    DrizzleModule.forRoot({
      drizzle,
      connection: process.env.DATABASE_URL!,
      relations,
    }),
    DrizzleModule.forRoot({
      name: 'analytics',
      drizzle,
      connection: process.env.ANALYTICS_DATABASE_URL!,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(622,`blockquote`,29)(623,`strong`),bT(624,`Notice`),cf(),bT(625,` A database registered without a `),Aa(626,`code`),bT(627,`name`),cf(),bT(628,` is named `),Aa(629,`code`),bT(630,`default`),cf(),bT(631,`. Don't register multiple databases without a name, or with the same name: they would share one injection token, and only one of them would be injected.
`),cf(),Aa(632,`p`),bT(633,`The databases don't have to share a driver: `),Aa(634,`code`),bT(635,`analytics`),cf(),bT(636,` could just as well be a SQLite file opened with the `),Aa(637,`code`),bT(638,`drizzle()`),cf(),bT(639,` function from `),Aa(640,`code`),bT(641,`drizzle-orm/better-sqlite3`),cf(),bT(642,`. To inject a database other than the default one, pass its name to the `),Aa(643,`code`),bT(644,`@InjectDrizzle()`),cf(),bT(645,` decorator:`),cf(),Aa(646,`app-copy-button`)(647,`pre`)(648,`code`,24),bT(649,`
@Injectable()
export class ReportsService {
  constructor(
    @InjectDrizzle('analytics')
    private readonly analyticsDb: NodePgDatabase,
  ) {}
}
`),cf()()(),Aa(650,`p`),bT(651,`You can also inject any database into a factory provider with the `),Aa(652,`code`),bT(653,`getDrizzleToken()`),cf(),bT(654,` function, which returns the injection token of the database with the given name:`),cf(),Aa(655,`app-copy-button`)(656,`pre`)(657,`code`,24),bT(658,`
@Module({
  providers: [
    {
      provide: ReportsService,
      useFactory: (analyticsDb: NodePgDatabase) => {
        return new ReportsService(analyticsDb);
      },
      inject: [getDrizzleToken('analytics')],
    },
  ],
})
export class ReportsModule {}
`),cf()()(),Aa(659,`h4`,49)(660,`span`),bT(661,`Testing`),cf()(),Aa(662,`p`),bT(663,`When unit testing an application, you usually want to avoid connecting to a database, to keep test suites independent and fast. However, your classes depend on the database injected with `),Aa(664,`code`),bT(665,`@InjectDrizzle()`),cf(),bT(666,`. To solve this, replace the database with a mock, using a `),Aa(667,`a`,44),bT(668,`custom provider`),cf(),bT(669,`. The `),Aa(670,`code`),bT(671,`getDrizzleToken()`),cf(),bT(672,` function returns the injection token of the default database (or of the database whose name you pass):`),cf(),Aa(673,`app-copy-button`)(674,`pre`)(675,`code`,24),bT(676,`
@Module({
  providers: [
    UsersService,
    {
      provide: getDrizzleToken(),
      useValue: mockDb,
    },
  ],
})
export class UsersModule {}
`),cf()()(),Aa(677,`p`),bT(678,`Nest now injects the `),Aa(679,`code`),bT(680,`mockDb`),cf(),bT(681,` object wherever a class requests the database with the `),Aa(682,`code`),bT(683,`@InjectDrizzle()`),cf(),bT(684,` decorator. Drizzle's query builder is chainable (e.g., `),Aa(685,`code`),bT(686,`select().from().where()`),cf(),bT(687,`), so a mock has to implement every method in the chain your code calls. For anything beyond simple queries, either move the queries into `),Aa(688,`a`,50),bT(689,`custom repositories`),cf(),bT(690,` and mock those, or run these tests against a real database.`),cf(),Aa(691,`h4`,51)(692,`span`),bT(693,`Async configuration`),cf()(),Aa(694,`p`),bT(695,`To pass the `),Aa(696,`code`),bT(697,`DrizzleModule`),cf(),bT(698,` options asynchronously instead of statically, use the `),Aa(699,`code`),bT(700,`forRootAsync()`),cf(),bT(701,` method. It supports several ways to provide the options.`),cf(),Aa(702,`p`),bT(703,`One approach is a factory function. The factory behaves like any other `),Aa(704,`a`,52),bT(705,`asynchronous provider`),cf(),bT(706,`: it can be `),Aa(707,`code`),bT(708,`async`),cf(),bT(709,`, and it can inject dependencies through `),Aa(710,`code`),bT(711,`inject`),cf(),bT(712,`. It returns the same options as `),Aa(713,`code`),bT(714,`forRoot()`),cf(),bT(715,` (except `),Aa(716,`code`),bT(717,`name`),cf(),bT(718,`), either `),Aa(719,`code`),bT(720,`drizzle`),cf(),bT(721,` and `),Aa(722,`code`),bT(723,`connection`),cf(),bT(724,` or a `),Aa(725,`code`),bT(726,`db`),cf(),bT(727,` instance:`),cf(),Aa(728,`app-copy-button`)(729,`pre`)(730,`code`,24),bT(731,`
DrizzleModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    drizzle,
    connection: configService.getOrThrow<string>('DATABASE_URL'),
    relations,
  }),
  inject: [ConfigService],
});
`),cf()()(),Aa(732,`p`),bT(733,`Alternatively, you can use the `),Aa(734,`code`),bT(735,`useClass`),cf(),bT(736,` syntax:`),cf(),Aa(737,`app-copy-button`)(738,`pre`)(739,`code`,24),bT(740,`
DrizzleModule.forRootAsync({
  imports: [ConfigModule],
  useClass: DrizzleConfigService,
});
`),cf()()(),Aa(741,`p`),bT(742,`With this construction, `),Aa(743,`code`),bT(744,`DrizzleModule`),cf(),bT(745,` instantiates `),Aa(746,`code`),bT(747,`DrizzleConfigService`),cf(),bT(748,`, resolving its dependencies from the modules in `),Aa(749,`code`),bT(750,`imports`),cf(),bT(751,`, and calls its `),Aa(752,`code`),bT(753,`createDrizzleOptions()`),cf(),bT(754,` method to get the options. `),Aa(755,`code`),bT(756,`DrizzleConfigService`),cf(),bT(757,` must therefore implement the `),Aa(758,`code`),bT(759,`DrizzleOptionsFactory`),cf(),bT(760,` interface:`),cf(),Aa(761,`app-copy-button`)(762,`pre`)(763,`code`,24),bT(764,`
@Injectable()
class DrizzleConfigService implements DrizzleOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createDrizzleOptions(): DrizzleModuleFactoryOptions {
    return {
      drizzle,
      connection: this.configService.getOrThrow<string>('DATABASE_URL'),
      relations,
    };
  }
}
`),cf()()(),Aa(765,`blockquote`,19)(766,`strong`),bT(767,`Hint`),cf(),Aa(768,`code`),bT(769,`createDrizzleOptions()`),cf(),bT(770,` receives the name of the database being registered (`),Aa(771,`code`),bT(772,`undefined`),cf(),bT(773,` for the default one), so a single class can configure several databases.
`),cf(),Aa(774,`p`),bT(775,`To reuse a provider from another module instead of instantiating `),Aa(776,`code`),bT(777,`DrizzleConfigService`),cf(),bT(778,` inside `),Aa(779,`code`),bT(780,`DrizzleModule`),cf(),bT(781,`, use the `),Aa(782,`code`),bT(783,`useExisting`),cf(),bT(784,` syntax:`),cf(),Aa(785,`app-copy-button`)(786,`pre`)(787,`code`,24),bT(788,`
DrizzleModule.forRootAsync({
  imports: [DatabaseConfigModule],
  useExisting: DrizzleConfigService,
});
`),cf()()(),Aa(789,`p`),bT(790,`This works like `),Aa(791,`code`),bT(792,`useClass`),cf(),bT(793,`, with one critical difference: `),Aa(794,`code`),bT(795,`DrizzleModule`),cf(),bT(796,` reuses the `),Aa(797,`code`),bT(798,`DrizzleConfigService`),cf(),bT(799,` instance exported by an imported module (here, `),Aa(800,`code`),bT(801,`DatabaseConfigModule`),cf(),bT(802,`) instead of creating a new one.`),cf()(),Aa(803,`a`,53),Wa(804,`i`,54),Aa(805,`span`),bT(806,`Edit on GitHub`),cf()()()),c&2){let w=tT(68),y=tT(99),k=tT(257),j=tT(280),T=tT(322),v=tT(370),A=tT(384),z=tT(407),R=tT(421),q=tT(499),O=tT(560);zC(65),hf(` `,jT(66,19,`db/schema`,w.isJsActive),`
`),zC(31),hf(` `,jT(97,22,`app.module`,y.isJsActive),`
`),zC(158),hf(` `,jT(255,25,`app.service`,k.isJsActive),`
`),zC(4),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(16),hf(` `,jT(278,28,`app.module`,j.isJsActive),`
`),zC(42),hf(` `,jT(320,31,`users.service`,T.isJsActive),`
`),zC(4),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive),zC(41),hf(` `,jT(368,34,`db/schema`,v.isJsActive),`
`),zC(14),hf(` `,jT(382,37,`db/relations`,A.isJsActive),`
`),zC(23),hf(` `,jT(405,40,`db/database`,z.isJsActive),`
`),zC(14),hf(` `,jT(419,43,`users.service`,R.isJsActive),`
`),zC(78),hf(` `,jT(497,46,`users.repository`,q.isJsActive),`
`),zC(61),hf(` `,jT(558,49,`drizzle.config`,O.isJsActive),`
`)}},dependencies:[Jc,ln,u,Lt,l,g],encapsulation:2})}return m})();var F=(()=>{class m extends xt{static ɵfac=(()=>{let d;return function(u){return(d||(d=im(m)))(u||m)}})();static ɵcmp=ef({type:m,selectors:[[`app-caching`]],features:[xy],decls:564,vars:8,consts:[[`contentReference`,``],[`app63f39823b5ca2a77f83db6a6646b64105effc2e6`,``],[`appb405006237d755e130f197f37a2ffee63b8b8a6e`,``],[1,`content`],[1,`content-inner`],[`id`,`caching`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://keyv.org/docs/`],[`href`,`/data/caching#using-alternative-cache-stores`],[`appAnchor`,``,`id`,`in-memory-cache`],[1,`language-typescript`],[`appAnchor`,``,`id`,`interacting-with-the-cache-store`],[1,`info`],[1,`warning`],[`appAnchor`,``,`id`,`auto-caching-responses`],[`routerLink`,`/graphql/quick-start`],[`href`,`/interceptors#response-mapping`],[`appAnchor`,``,`id`,`time-to-live-ttl`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Time_to_live`],[`appAnchor`,``,`id`,`use-module-globally`],[`href`,`/modules#global-modules`],[`appAnchor`,``,`id`,`global-cache-overrides`],[`href`,`/data/caching#time-to-live-ttl`],[`appAnchor`,``,`id`,`websockets-and-microservices`],[1,`with-heading`],[1,`filename`],[`appAnchor`,``,`id`,`adjust-tracking`],[`appAnchor`,``,`id`,`using-alternative-cache-stores`],[`appAnchor`,``,`id`,`async-configuration`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/20-cache`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/data/caching.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`Caching`),cf(),Aa(5,`p`),bT(6,`Caching is a straightforward and effective `),Aa(7,`strong`),bT(8,`technique`),cf(),bT(9,` for improving your application's performance. A cache acts as a temporary storage layer that provides quick access to frequently used data, so you don't have to fetch or compute the same information repeatedly. The result is faster response times and better overall efficiency.`),cf(),Aa(10,`h4`,6)(11,`span`),bT(12,`Installation`),cf()(),Aa(13,`p`),bT(14,`To get started with caching in Nest, install the `),Aa(15,`code`),bT(16,`@nestjs/cache-manager`),cf(),bT(17,` package along with the `),Aa(18,`code`),bT(19,`cache-manager`),cf(),bT(20,` package:`),cf(),Aa(21,`pre`)(22,`code`,7),bT(23,`
$ npm install @nestjs/cache-manager cache-manager
`),cf()(),Aa(24,`p`),bT(25,`By default, everything is stored in memory. Because `),Aa(26,`code`),bT(27,`cache-manager`),cf(),bT(28,` uses `),Aa(29,`a`,8),bT(30,`Keyv`),cf(),bT(31,` under the hood, you can switch to a different storage solution, such as Redis, by installing the appropriate package. See `),Aa(32,`a`,9),bT(33,`Using alternative Cache stores`),cf(),bT(34,` below.`),cf(),Aa(35,`h4`,10)(36,`span`),bT(37,`In-memory cache`),cf()(),Aa(38,`p`),bT(39,`To enable caching in your application, import the `),Aa(40,`code`),bT(41,`CacheModule`),cf(),bT(42,` and configure it using the `),Aa(43,`code`),bT(44,`register()`),cf(),bT(45,` method:`),cf(),Aa(46,`app-copy-button`)(47,`pre`)(48,`code`,11),bT(49,`
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller.js';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
})
export class AppModule {}
`),cf()()(),Aa(50,`p`),bT(51,`This setup initializes in-memory caching with the default settings, so you can start caching data immediately.`),cf(),Aa(52,`h4`,12)(53,`span`),bT(54,`Interacting with the Cache store`),cf()(),Aa(55,`p`),bT(56,`To interact with the cache manager instance, inject it into your class using the `),Aa(57,`code`),bT(58,`CACHE_MANAGER`),cf(),bT(59,` token, as follows:`),cf(),Aa(60,`app-copy-button`)(61,`pre`)(62,`code`,11),bT(63,`
constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
`),cf()()(),Aa(64,`blockquote`,13)(65,`strong`),bT(66,`Hint`),cf(),bT(67,` The `),Aa(68,`code`),bT(69,`Cache`),cf(),bT(70,` class and the `),Aa(71,`code`),bT(72,`CACHE_MANAGER`),cf(),bT(73,` token are both imported from the `),Aa(74,`code`),bT(75,`@nestjs/cache-manager`),cf(),bT(76,` package.
`),cf(),Aa(77,`p`),bT(78,`Use the `),Aa(79,`code`),bT(80,`get()`),cf(),bT(81,` method of the `),Aa(82,`code`),bT(83,`Cache`),cf(),bT(84,` instance (from the `),Aa(85,`code`),bT(86,`cache-manager`),cf(),bT(87,` package) to retrieve items from the cache. If the item doesn't exist in the cache, `),Aa(88,`code`),bT(89,`get()`),cf(),bT(90,` returns `),Aa(91,`code`),bT(92,`undefined`),cf(),bT(93,` (`),Aa(94,`code`),bT(95,`cache-manager`),cf(),bT(96,` v6 returned `),Aa(97,`code`),bT(98,`null`),cf(),bT(99,` instead). Treat both as a cache miss when migrating.`),cf(),Aa(100,`app-copy-button`)(101,`pre`)(102,`code`,11),bT(103,`
const value = await this.cacheManager.get('key');
`),cf()()(),Aa(104,`p`),bT(105,`To add an item to the cache, use the `),Aa(106,`code`),bT(107,`set()`),cf(),bT(108,` method:`),cf(),Aa(109,`app-copy-button`)(110,`pre`)(111,`code`,11),bT(112,`
await this.cacheManager.set('key', 'value');
`),cf()()(),Aa(113,`blockquote`,14)(114,`strong`),bT(115,`Note`),cf(),bT(116,` The default in-memory store keeps a reference to the value instead of a copy: `),Aa(117,`code`),bT(118,`get()`),cf(),bT(119,` returns the same object that was passed to `),Aa(120,`code`),bT(121,`set()`),cf(),bT(122,`, so changing that object afterwards also changes the cached entry. Treat cached values as read-only, or copy a value before changing it. The Keyv stores in `),Aa(123,`a`,9),bT(124,`Using alternative Cache stores`),cf(),bT(125,` serialize values to JSON instead, so class instances come back as plain objects and `),Aa(126,`code`),bT(127,`Date`),cf(),bT(128,` objects come back as strings.
`),cf(),Aa(129,`p`),bT(130,`You can specify a TTL (expiration time in milliseconds) for a specific key, as follows:`),cf(),Aa(131,`app-copy-button`)(132,`pre`)(133,`code`,11),bT(134,`
await this.cacheManager.set('key', 'value', 1000);
`),cf()()(),Aa(135,`p`),bT(136,`Here, the cache item expires after one second.`),cf(),Aa(137,`p`),bT(138,`To store an item that never expires, pass a TTL of `),Aa(139,`code`),bT(140,`0`),cf(),bT(141,`:`),cf(),Aa(142,`app-copy-button`)(143,`pre`)(144,`code`,11),bT(145,`
await this.cacheManager.set('key', 'value', 0);
`),cf()()(),Aa(146,`p`),bT(147,`To remove an item from the cache, use the `),Aa(148,`code`),bT(149,`del()`),cf(),bT(150,` method:`),cf(),Aa(151,`app-copy-button`)(152,`pre`)(153,`code`,11),bT(154,`
await this.cacheManager.del('key');
`),cf()()(),Aa(155,`p`),bT(156,`To clear the entire cache, use the `),Aa(157,`code`),bT(158,`clear()`),cf(),bT(159,` method:`),cf(),Aa(160,`app-copy-button`)(161,`pre`)(162,`code`,11),bT(163,`
await this.cacheManager.clear();
`),cf()()(),Aa(164,`h4`,15)(165,`span`),bT(166,`Auto-caching responses`),cf()(),Aa(167,`blockquote`,14)(168,`strong`),bT(169,`Warning`),cf(),bT(170,` In `),Aa(171,`a`,16),bT(172,`GraphQL`),cf(),bT(173,` applications, interceptors are executed separately for each field resolver. As a result, `),Aa(174,`code`),bT(175,`CacheModule`),cf(),bT(176,` (which uses interceptors to cache responses) doesn't work properly there.
`),cf(),Aa(177,`p`),bT(178,`To cache responses automatically, bind the `),Aa(179,`code`),bT(180,`CacheInterceptor`),cf(),bT(181,` where you want to cache data:`),cf(),Aa(182,`app-copy-button`)(183,`pre`)(184,`code`,11),bT(185,`
@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  @Get()
  findAll(): string[] {
    return [];
  }
}
`),cf()()(),Aa(186,`blockquote`,14)(187,`strong`),bT(188,`Warning`),cf(),bT(189,` By default, only `),Aa(190,`code`),bT(191,`GET`),cf(),bT(192,` endpoints are cached (an explicit `),Aa(193,`code`),bT(194,`@CacheKey()`),cf(),bT(195,` on a route handler bypasses this check). Also, HTTP routes that inject the native response object (`),Aa(196,`code`),bT(197,`@Res()`),cf(),bT(198,`) can't use the `),Aa(199,`code`),bT(200,`CacheInterceptor`),cf(),bT(201,`. See `),Aa(202,`a`,17),bT(203,`response mapping`),cf(),bT(204,` for more details.
`),cf(),Aa(205,`p`),bT(206,`To reduce boilerplate, you can bind `),Aa(207,`code`),bT(208,`CacheInterceptor`),cf(),bT(209,` to all endpoints globally:`),cf(),Aa(210,`app-copy-button`)(211,`pre`)(212,`code`,11),bT(213,`
import { Module } from '@nestjs/common';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { AppController } from './app.controller.js';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(214,`h4`,18)(215,`span`),bT(216,`Time-to-live (TTL)`),cf()(),Aa(217,`p`),bT(218,`By default, `),Aa(219,`code`),bT(220,`ttl`),cf(),bT(221,` isn't set, so cache entries never expire (the same as setting it to `),Aa(222,`code`),bT(223,`0`),cf(),bT(224,`). To specify a custom `),Aa(225,`a`,19),bT(226,`TTL`),cf(),bT(227,`, pass the `),Aa(228,`code`),bT(229,`ttl`),cf(),bT(230,` option to the `),Aa(231,`code`),bT(232,`register()`),cf(),bT(233,` method:`),cf(),Aa(234,`app-copy-button`)(235,`pre`)(236,`code`,11),bT(237,`
CacheModule.register({
  ttl: 5000, // milliseconds
});
`),cf()()(),Aa(238,`h4`,20)(239,`span`),bT(240,`Use module globally`),cf()(),Aa(241,`p`),bT(242,`To use `),Aa(243,`code`),bT(244,`CacheModule`),cf(),bT(245,` in other modules, you need to import it (as with any Nest module). Alternatively, declare it as a `),Aa(246,`a`,21),bT(247,`global module`),cf(),bT(248,` by setting the `),Aa(249,`code`),bT(250,`isGlobal`),cf(),bT(251,` property of the options object to `),Aa(252,`code`),bT(253,`true`),cf(),bT(254,`, as shown below. In that case, once `),Aa(255,`code`),bT(256,`CacheModule`),cf(),bT(257,` is loaded in the root module (e.g., `),Aa(258,`code`),bT(259,`AppModule`),cf(),bT(260,`), you don't need to import it in other modules.`),cf(),Aa(261,`app-copy-button`)(262,`pre`)(263,`code`,11),bT(264,`
CacheModule.register({
  isGlobal: true,
});
`),cf()()(),Aa(265,`h4`,22)(266,`span`),bT(267,`Global cache overrides`),cf()(),Aa(268,`p`),bT(269,`When the `),Aa(270,`code`),bT(271,`CacheInterceptor`),cf(),bT(272,` is bound globally, cache entries are stored under a key that is generated automatically from the request URL. You can override certain cache settings (`),Aa(273,`code`),bT(274,`@CacheKey()`),cf(),bT(275,` and `),Aa(276,`code`),bT(277,`@CacheTTL()`),cf(),bT(278,`) on a per-method basis to customize the caching strategy for individual controller methods. This is most relevant when using `),Aa(279,`a`,9),bT(280,`different cache stores`),cf(),bT(281,`.`),cf(),Aa(282,`p`),bT(283,`You can also apply the `),Aa(284,`code`),bT(285,`@CacheTTL()`),cf(),bT(286,` decorator to a controller to set the TTL for all of its routes. When both controller-level and method-level TTL settings are defined, the method-level setting takes priority.`),cf(),Aa(287,`app-copy-button`)(288,`pre`)(289,`code`,11),bT(290,`
@Controller()
@CacheTTL(5000)
export class AppController {
  @CacheKey('custom_key')
  @CacheTTL(2000)
  findAll(): string[] {
    return [];
  }
}
`),cf()()(),Aa(291,`blockquote`,13)(292,`strong`),bT(293,`Hint`),cf(),bT(294,` The `),Aa(295,`code`),bT(296,`@CacheKey()`),cf(),bT(297,` and `),Aa(298,`code`),bT(299,`@CacheTTL()`),cf(),bT(300,` decorators are imported from the `),Aa(301,`code`),bT(302,`@nestjs/cache-manager`),cf(),bT(303,` package.
`),cf(),Aa(304,`p`),bT(305,`You can use the `),Aa(306,`code`),bT(307,`@CacheKey()`),cf(),bT(308,` decorator with or without a corresponding `),Aa(309,`code`),bT(310,`@CacheTTL()`),cf(),bT(311,` decorator, and vice versa, to override only the key or only the TTL. Settings that aren't overridden with a decorator use the defaults registered with the module (see `),Aa(312,`a`,23),bT(313,`Time-to-live (TTL)`),cf(),bT(314,`).`),cf(),Aa(315,`h4`,24)(316,`span`),bT(317,`WebSockets and Microservices`),cf()(),Aa(318,`p`),bT(319,`You can also apply the `),Aa(320,`code`),bT(321,`CacheInterceptor`),cf(),bT(322,` to WebSocket subscribers and microservice patterns (regardless of the transport used).`),cf(),Aa(323,`app-copy-button`,25)(324,`span`,26),Wa(325,`app-tabs`,null,1),cf(),Aa(327,`pre`)(328,`code`,11),bT(329,`
@CacheKey('events')
@UseInterceptors(CacheInterceptor)
@SubscribeMessage('events')
handleEvent(client: Client, data: string[]): string[] {
  return [];
}
`),cf()(),Aa(330,`pre`)(331,`code`,11),bT(332,`
@CacheKey('events')
@UseInterceptors(CacheInterceptor)
@SubscribeMessage('events')
handleEvent(client, data) {
  return [];
}
`),cf()()(),Aa(333,`p`),bT(334,`In these contexts, the `),Aa(335,`code`),bT(336,`@CacheKey()`),cf(),bT(337,` decorator is required: it specifies the key used to store and retrieve the cached data. Without it, responses aren't cached. Also, keep in mind that you `),Aa(338,`strong`),bT(339,`shouldn't cache everything`),cf(),bT(340,`. Never cache actions that perform business operations rather than only querying data.`),cf(),Aa(341,`p`),bT(342,`You can also specify a cache expiration time (TTL) with the `),Aa(343,`code`),bT(344,`@CacheTTL()`),cf(),bT(345,` decorator, which overrides the default TTL:`),cf(),Aa(346,`app-copy-button`,25)(347,`span`,26),Wa(348,`app-tabs`,null,2),cf(),Aa(350,`pre`)(351,`code`,11),bT(352,`
@CacheKey('events')
@CacheTTL(1000)
@UseInterceptors(CacheInterceptor)
@SubscribeMessage('events')
handleEvent(client: Client, data: string[]): string[] {
  return [];
}
`),cf()(),Aa(353,`pre`)(354,`code`,11),bT(355,`
@CacheKey('events')
@CacheTTL(1000)
@UseInterceptors(CacheInterceptor)
@SubscribeMessage('events')
handleEvent(client, data) {
  return [];
}
`),cf()()(),Aa(356,`blockquote`,13)(357,`strong`),bT(358,`Hint`),cf(),bT(359,` In HTTP applications, the `),Aa(360,`code`),bT(361,`@CacheTTL()`),cf(),bT(362,` decorator works with or without a corresponding `),Aa(363,`code`),bT(364,`@CacheKey()`),cf(),bT(365,` decorator. In WebSocket and microservice contexts, it has no effect without `),Aa(366,`code`),bT(367,`@CacheKey()`),cf(),bT(368,`, because nothing is cached without a key.
`),cf(),Aa(369,`h4`,27)(370,`span`),bT(371,`Adjust tracking`),cf()(),Aa(372,`p`),bT(373,`By default, Nest uses the request URL (in HTTP apps) or the cache key set through the `),Aa(374,`code`),bT(375,`@CacheKey()`),cf(),bT(376,` decorator (in WebSocket and microservice apps) to associate cache records with your endpoints. Sometimes you might want to track records based on other factors, for example, HTTP headers (e.g., `),Aa(377,`code`),bT(378,`Authorization`),cf(),bT(379,` to correctly identify `),Aa(380,`code`),bT(381,`profile`),cf(),bT(382,` endpoints).`),cf(),Aa(383,`p`),bT(384,`To do that, create a subclass of `),Aa(385,`code`),bT(386,`CacheInterceptor`),cf(),bT(387,` and override the `),Aa(388,`code`),bT(389,`trackBy()`),cf(),bT(390,` method:`),cf(),Aa(391,`app-copy-button`)(392,`pre`)(393,`code`,11),bT(394,`
@Injectable()
class HttpCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    return 'key';
  }
}
`),cf()()(),Aa(395,`h4`,28)(396,`span`),bT(397,`Using alternative Cache stores`),cf()(),Aa(398,`p`),bT(399,`To switch to a different cache store, first install the appropriate package. For example, to use Redis, install the `),Aa(400,`code`),bT(401,`@keyv/redis`),cf(),bT(402,` package. The example below also uses the in-memory store from the `),Aa(403,`code`),bT(404,`cacheable`),cf(),bT(405,` package:`),cf(),Aa(406,`pre`)(407,`code`,7),bT(408,`
$ npm install @keyv/redis cacheable
`),cf()(),Aa(409,`p`),bT(410,`With this in place, you can register the `),Aa(411,`code`),bT(412,`CacheModule`),cf(),bT(413,` with multiple stores, as shown below:`),cf(),Aa(414,`app-copy-button`)(415,`pre`)(416,`code`,11),bT(417,`
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller.js';
import { createKeyv } from '@keyv/redis';
import { Keyv } from 'keyv';
import { KeyvCacheableMemory } from 'cacheable';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => {
        const redisStore = createKeyv('redis://localhost:6379');
        redisStore.on('error', (err) => console.error('Redis error:', err));

        return {
          stores: [
            new Keyv({
              store: new KeyvCacheableMemory({ ttl: 60000, lruSize: 5000 }),
            }),
            redisStore,
          ],
        };
      },
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
`),cf()()(),Aa(418,`p`),bT(419,`This example registers two stores: `),Aa(420,`code`),bT(421,`CacheableMemory`),cf(),bT(422,` and a Redis store. `),Aa(423,`code`),bT(424,`CacheableMemory`),cf(),bT(425,` is an in-memory store created with the `),Aa(426,`code`),bT(427,`KeyvCacheableMemory`),cf(),bT(428,` storage adapter, while the Redis store is created with the `),Aa(429,`code`),bT(430,`createKeyv()`),cf(),bT(431,` helper from `),Aa(432,`code`),bT(433,`@keyv/redis`),cf(),bT(434,`. The `),Aa(435,`code`),bT(436,`stores`),cf(),bT(437,` array specifies the stores you want to use. The first store in the array is the default store, and the rest are fallback stores.`),cf(),Aa(438,`blockquote`,14)(439,`strong`),bT(440,`Warning`),cf(),bT(441,` Always attach an `),Aa(442,`code`),bT(443,`'error'`),cf(),bT(444,` listener to the Redis store, as shown above. When the Redis connection drops, the store emits an `),Aa(445,`code`),bT(446,`'error'`),cf(),bT(447,` event, and Keyv throws if nothing listens for it, which can crash your application.
`),cf(),Aa(448,`p`),bT(449,`See the `),Aa(450,`a`,8),bT(451,`Keyv documentation`),cf(),bT(452,` for more information on the available stores.`),cf(),Aa(453,`h4`,29)(454,`span`),bT(455,`Async configuration`),cf()(),Aa(456,`p`),bT(457,`You may want to pass module options asynchronously instead of statically at compile time. In this case, use the `),Aa(458,`code`),bT(459,`registerAsync()`),cf(),bT(460,` method, which provides several ways to handle async configuration.`),cf(),Aa(461,`p`),bT(462,`One approach is to use a factory function:`),cf(),Aa(463,`app-copy-button`)(464,`pre`)(465,`code`,11),bT(466,`
CacheModule.registerAsync({
  useFactory: () => ({
    ttl: 5000,
  }),
});
`),cf()()(),Aa(467,`p`),bT(468,`The factory behaves like all other asynchronous module factories: it can be `),Aa(469,`code`),bT(470,`async`),cf(),bT(471,` and can inject dependencies through `),Aa(472,`code`),bT(473,`inject`),cf(),bT(474,`.`),cf(),Aa(475,`app-copy-button`)(476,`pre`)(477,`code`,11),bT(478,`
CacheModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    ttl: configService.get('CACHE_TTL'),
  }),
  inject: [ConfigService],
});
`),cf()()(),Aa(479,`p`),bT(480,`Alternatively, you can use the `),Aa(481,`code`),bT(482,`useClass`),cf(),bT(483,` syntax:`),cf(),Aa(484,`app-copy-button`)(485,`pre`)(486,`code`,11),bT(487,`
CacheModule.registerAsync({
  useClass: CacheConfigService,
});
`),cf()()(),Aa(488,`p`),bT(489,`This construction instantiates `),Aa(490,`code`),bT(491,`CacheConfigService`),cf(),bT(492,` inside `),Aa(493,`code`),bT(494,`CacheModule`),cf(),bT(495,` and uses it to get the options object. `),Aa(496,`code`),bT(497,`CacheConfigService`),cf(),bT(498,` has to implement the `),Aa(499,`code`),bT(500,`CacheOptionsFactory`),cf(),bT(501,` interface to provide the configuration options:`),cf(),Aa(502,`app-copy-button`)(503,`pre`)(504,`code`,11),bT(505,`
@Injectable()
class CacheConfigService implements CacheOptionsFactory {
  createCacheOptions(): CacheModuleOptions {
    return {
      ttl: 5000,
    };
  }
}
`),cf()()(),Aa(506,`p`),bT(507,`To use an existing configuration provider imported from a different module, use the `),Aa(508,`code`),bT(509,`useExisting`),cf(),bT(510,` syntax:`),cf(),Aa(511,`app-copy-button`)(512,`pre`)(513,`code`,11),bT(514,`
CacheModule.registerAsync({
  imports: [ConfigModule],
  useExisting: ConfigService,
});
`),cf()()(),Aa(515,`p`),bT(516,`This works the same as `),Aa(517,`code`),bT(518,`useClass`),cf(),bT(519,`, with one critical difference: `),Aa(520,`code`),bT(521,`CacheModule`),cf(),bT(522,` looks up imported modules to reuse an already-created `),Aa(523,`code`),bT(524,`ConfigService`),cf(),bT(525,` instead of instantiating its own.`),cf(),Aa(526,`blockquote`,13)(527,`strong`),bT(528,`Hint`),cf(),Aa(529,`code`),bT(530,`CacheModule#register`),cf(),bT(531,`, `),Aa(532,`code`),bT(533,`CacheModule#registerAsync`),cf(),bT(534,`, and `),Aa(535,`code`),bT(536,`CacheOptionsFactory`),cf(),bT(537,` accept an optional generic (type argument) that narrows down store-specific configuration options, making them type-safe.
`),cf(),Aa(538,`p`),bT(539,`You can also pass `),Aa(540,`code`),bT(541,`extraProviders`),cf(),bT(542,` to the `),Aa(543,`code`),bT(544,`registerAsync()`),cf(),bT(545,` method. These providers are merged with the module's providers:`),cf(),Aa(546,`app-copy-button`)(547,`pre`)(548,`code`,11),bT(549,`
CacheModule.registerAsync({
  imports: [ConfigModule],
  useClass: ConfigService,
  extraProviders: [MyAdditionalProvider],
});
`),cf()()(),Aa(550,`p`),bT(551,`This is useful when you want to provide additional dependencies to the factory function or the class constructor.`),cf(),Aa(552,`h4`,30)(553,`span`),bT(554,`Example`),cf()(),Aa(555,`p`),bT(556,`A working example is available in the `),Aa(557,`a`,31),bT(558,`cache sample`),cf(),bT(559,`.`),cf()(),Aa(560,`a`,32),Wa(561,`i`,33),Aa(562,`span`),bT(563,`Edit on GitHub`),cf()()()),c&2){let w=tT(326),y=tT(349);zC(327),zy(`hide`,w.isJsActive),zC(3),zy(`hide`,!w.isJsActive),zC(20),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive)}},dependencies:[Lt,ln,Jc,u],encapsulation:2})}return m})();var B=(()=>{class m extends xt{static ɵfac=(()=>{let d;return function(u){return(d||(d=im(m)))(u||m)}})();static ɵcmp=ef({type:m,selectors:[[`app-mikroorm`]],features:[xy],decls:992,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`mikroorm`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mikro-orm/nestjs`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/upgrading-v6-to-v7`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/quick-start#installation`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/configuration`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/folder-based-discovery`],[`href`,`/fundamentals/injection-scopes`],[`href`,`/data/mikroorm#multiple-databases`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/quick-start#setting-up-the-commandline-tool`],[`appAnchor`,``,`id`,`repositories`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/repositories`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/defining-entities`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/unit-of-work`],[`appAnchor`,``,`id`,`using-custom-repositories`],[`appAnchor`,``,`id`,`load-entities-automatically`],[`routerLink`,`/cli/monorepo`],[`appAnchor`,``,`id`,`request-context`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/identity-map`],[`href`,`/data/mikroorm#request-scoped-handlers-in-queues`],[`routerLink`,`/fundamentals/injection-scopes`],[1,`warning`],[`href`,`/fundamentals/injection-scopes#performance`],[`appAnchor`,``,`id`,`request-scoped-handlers-in-queues`],[`routerLink`,`/application/queues`],[`routerLink`,`/application/task-scheduling`],[`appAnchor`,``,`id`,`transactions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/transactions`],[`appAnchor`,``,`id`,`serialization`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mikro-orm.io/docs/serializing`],[`href`,`/application/serialization`],[`appAnchor`,``,`id`,`multiple-databases`],[`appAnchor`,``,`id`,`testing`],[`routerLink`,`/fundamentals/custom-providers`],[`appAnchor`,``,`id`,`async-configuration`],[`href`,`/fundamentals/custom-providers#factory-providers-usefactory`],[`appAnchor`,``,`id`,`application-shutdown`],[`href`,`/fundamentals/lifecycle-events#application-shutdown`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mikro-orm/nestjs-realworld-example-app`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mikro-orm/nestjs-example-app`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/data/mikroorm.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`MikroORM`),cf(),Aa(5,`p`)(6,`a`,4),bT(7,`MikroORM`),cf(),bT(8,` is a TypeScript ORM for Node.js based on the Data Mapper, Unit of Work, and Identity Map patterns. It supports MongoDB, MySQL, MariaDB, PostgreSQL, SQLite, Microsoft SQL Server, and Oracle. The `),Aa(9,`code`),bT(10,`@mikro-orm/nestjs`),cf(),bT(11,` package integrates it with Nest: it registers the ORM and its `),Aa(12,`code`),bT(13,`EntityManager`),cf(),bT(14,` as providers, provides repository injection, creates a request context for every HTTP request, and closes the database connection when the application shuts down.`),cf(),Aa(15,`p`),bT(16,`This chapter covers the Nest-specific parts of the integration. See the `),Aa(17,`a`,5),bT(18,`MikroORM documentation`),cf(),bT(19,` for complete coverage of the ORM itself.`),cf(),Aa(20,`blockquote`,6)(21,`strong`),bT(22,`Note`),cf(),Aa(23,`code`),bT(24,`@mikro-orm/nestjs`),cf(),bT(25,` is a third-party package and is not managed by the NestJS core team. Report any issues with the library in the `),Aa(26,`a`,7),bT(27,`mikro-orm/nestjs repository`),cf(),bT(28,`.
`),cf(),Aa(29,`blockquote`,6)(30,`strong`),bT(31,`Hint`),cf(),bT(32,` This chapter targets MikroORM v7 and `),Aa(33,`code`),bT(34,`@mikro-orm/nestjs`),cf(),bT(35,` v7. If you're upgrading from MikroORM v6, see the `),Aa(36,`a`,8),bT(37,`MikroORM v6 to v7 upgrading guide`),cf(),bT(38,`.
`),cf(),Aa(39,`h4`,9)(40,`span`),bT(41,`Installation`),cf()(),Aa(42,`p`),bT(43,`Install the Nest module together with MikroORM, its decorators package, and the driver for your database. This chapter uses SQLite:`),cf(),Aa(44,`pre`)(45,`code`,10),bT(46,`
$ npm i @mikro-orm/nestjs @mikro-orm/core @mikro-orm/decorators @mikro-orm/sqlite
`),cf()(),Aa(47,`p`),bT(48,`MikroORM provides a driver package for each supported database, such as `),Aa(49,`code`),bT(50,`@mikro-orm/postgresql`),cf(),bT(51,`, `),Aa(52,`code`),bT(53,`@mikro-orm/mysql`),cf(),bT(54,`, and `),Aa(55,`code`),bT(56,`@mikro-orm/mongodb`),cf(),bT(57,`. See the `),Aa(58,`a`,11),bT(59,`MikroORM quick start guide`),cf(),bT(60,` for the full list.`),cf(),Aa(61,`blockquote`,6)(62,`strong`),bT(63,`Hint`),cf(),bT(64,` Since MikroORM v7, decorators are no longer exported from `),Aa(65,`code`),bT(66,`@mikro-orm/core`),cf(),bT(67,`. Nest projects use legacy (experimental) decorators, so import decorators such as `),Aa(68,`code`),bT(69,`@Entity()`),cf(),bT(70,` and `),Aa(71,`code`),bT(72,`@Property()`),cf(),bT(73,` from `),Aa(74,`code`),bT(75,`@mikro-orm/decorators/legacy`),cf(),bT(76,`. Import `),Aa(77,`code`),bT(78,`EntityManager`),cf(),bT(79,`, `),Aa(80,`code`),bT(81,`EntityRepository`),cf(),bT(82,`, and `),Aa(83,`code`),bT(84,`MikroORM`),cf(),bT(85,` from your driver package (e.g., `),Aa(86,`code`),bT(87,`@mikro-orm/sqlite`),cf(),bT(88,`), and other types (e.g., the `),Aa(89,`code`),bT(90,`EntityRepositoryType`),cf(),bT(91,` symbol) from `),Aa(92,`code`),bT(93,`@mikro-orm/core`),cf(),bT(94,`. The snippets in this chapter include the relevant import statements.
`),cf(),Aa(95,`p`),bT(96,`Once the installation is complete, import the `),Aa(97,`code`),bT(98,`MikroOrmModule`),cf(),bT(99,` into the root `),Aa(100,`code`),bT(101,`AppModule`),cf(),bT(102,`:`),cf(),Aa(103,`app-copy-button`)(104,`pre`)(105,`code`,12),bT(106,`
// app.module.ts
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { SqliteDriver } from '@mikro-orm/sqlite';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      driver: SqliteDriver,
      dbName: 'my-db-name.sqlite3',
      entities: ['./dist/**/*.entity.js'],
      entitiesTs: ['./src/**/*.entity.ts'],
      metadataProvider: ReflectMetadataProvider,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(107,`p`),bT(108,`The `),Aa(109,`code`),bT(110,`forRoot()`),cf(),bT(111,` method accepts the same configuration object as `),Aa(112,`code`),bT(113,`MikroORM.init()`),cf(),bT(114,`. See the `),Aa(115,`a`,13),bT(116,`MikroORM configuration documentation`),cf(),bT(117,` for the complete list of options. The `),Aa(118,`code`),bT(119,`entities`),cf(),bT(120,` and `),Aa(121,`code`),bT(122,`entitiesTs`),cf(),bT(123,` glob patterns tell MikroORM where to find your entity files: it uses `),Aa(124,`code`),bT(125,`entitiesTs`),cf(),bT(126,` when it runs from TypeScript sources and `),Aa(127,`code`),bT(128,`entities`),cf(),bT(129,` when it runs from compiled JavaScript (see `),Aa(130,`a`,14),bT(131,`folder-based discovery`),cf(),bT(132,`).`),cf(),Aa(133,`blockquote`,6)(134,`strong`),bT(135,`Hint`),cf(),bT(136,` Since MikroORM v7, `),Aa(137,`code`),bT(138,`ReflectMetadataProvider`),cf(),bT(139,` is no longer the default metadata provider. Set it explicitly, as shown above, to let MikroORM infer property types from the metadata that TypeScript emits for legacy decorators.
`),cf(),Aa(140,`p`),bT(141,`In addition, `),Aa(142,`code`),bT(143,`forRoot()`),cf(),bT(144,` supports the following Nest-specific options, all described later in this chapter:`),cf(),Aa(145,`table`)(146,`tr`)(147,`td`)(148,`code`),bT(149,`autoLoadEntities`),cf()(),Aa(150,`td`),bT(151,`If `),Aa(152,`code`),bT(153,`true`),cf(),bT(154,`, entities registered through `),Aa(155,`code`),bT(156,`forFeature()`),cf(),bT(157,` are added to the configuration automatically (default: `),Aa(158,`code`),bT(159,`false`),cf(),bT(160,`)`),cf()(),Aa(161,`tr`)(162,`td`)(163,`code`),bT(164,`registerRequestContext`),cf()(),Aa(165,`td`),bT(166,`If `),Aa(167,`code`),bT(168,`true`),cf(),bT(169,`, registers a middleware that creates a request context for every HTTP request (default: `),Aa(170,`code`),bT(171,`true`),cf(),bT(172,`)`),cf()(),Aa(173,`tr`)(174,`td`)(175,`code`),bT(176,`forRoutesPath`),cf()(),Aa(177,`td`),bT(178,`The route path that the request context middleware applies to (default: all routes)`),cf()(),Aa(179,`tr`)(180,`td`)(181,`code`),bT(182,`scope`),cf()(),Aa(183,`td`),bT(184,`The `),Aa(185,`a`,15),bT(186,`injection scope`),cf(),bT(187,` of the `),Aa(188,`code`),bT(189,`EntityManager`),cf(),bT(190,` provider (default: `),Aa(191,`code`),bT(192,`Scope.DEFAULT`),cf(),bT(193,`)`),cf()(),Aa(194,`tr`)(195,`td`)(196,`code`),bT(197,`contextName`),cf()(),Aa(198,`td`),bT(199,`The name of the connection, required when you connect to `),Aa(200,`a`,16),bT(201,`multiple databases`),cf()()()(),Aa(202,`p`),bT(203,`Alternatively, you can keep your configuration in a separate `),Aa(204,`code`),bT(205,`mikro-orm.config.ts`),cf(),bT(206,` file, which the `),Aa(207,`a`,17),bT(208,`MikroORM CLI`),cf(),bT(209,` uses as well. The `),Aa(210,`code`),bT(211,`defineConfig()`),cf(),bT(212,` helper exported by your driver package sets the `),Aa(213,`code`),bT(214,`driver`),cf(),bT(215,` option for you:`),cf(),Aa(216,`app-copy-button`)(217,`pre`)(218,`code`,12),bT(219,`
// mikro-orm.config.ts
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { defineConfig } from '@mikro-orm/sqlite';

export default defineConfig({
  dbName: 'my-db-name.sqlite3',
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  metadataProvider: ReflectMetadataProvider,
});
`),cf()()(),Aa(220,`p`),bT(221,`Then pass the configuration to `),Aa(222,`code`),bT(223,`forRoot()`),cf(),bT(224,`. Since MikroORM v7, `),Aa(225,`code`),bT(226,`forRoot()`),cf(),bT(227,` no longer accepts an empty argument list, so you must pass the configuration explicitly:`),cf(),Aa(228,`app-copy-button`)(229,`pre`)(230,`code`,12),bT(231,`
// app.module.ts
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './mikro-orm.config.js';

@Module({
  imports: [MikroOrmModule.forRoot(config)],
})
export class AppModule {}
`),cf()()(),Aa(232,`p`),bT(233,`Afterward, the `),Aa(234,`code`),bT(235,`MikroORM`),cf(),bT(236,` and `),Aa(237,`code`),bT(238,`EntityManager`),cf(),bT(239,` objects are available for injection across the entire project, without importing any module elsewhere:`),cf(),Aa(240,`app-copy-button`)(241,`pre`)(242,`code`,12),bT(243,`
import { Injectable } from '@nestjs/common';
import { EntityManager, MikroORM } from '@mikro-orm/sqlite';

@Injectable()
export class AppService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
  ) {}
}
`),cf()()(),Aa(244,`blockquote`,6)(245,`strong`),bT(246,`Note`),cf(),bT(247,` Import `),Aa(248,`code`),bT(249,`EntityManager`),cf(),bT(250,` and `),Aa(251,`code`),bT(252,`MikroORM`),cf(),bT(253,` from the `),Aa(254,`code`),bT(255,`@mikro-orm/<driver>`),cf(),bT(256,` package, where `),Aa(257,`code`),bT(258,`<driver>`),cf(),bT(259,` is `),Aa(260,`code`),bT(261,`sqlite`),cf(),bT(262,`, `),Aa(263,`code`),bT(264,`postgresql`),cf(),bT(265,`, `),Aa(266,`code`),bT(267,`mysql`),cf(),bT(268,`, or whichever driver you use, to get the driver-specific API. If you have `),Aa(269,`code`),bT(270,`@mikro-orm/sql`),cf(),bT(271,` installed as a dependency, you can also import the `),Aa(272,`code`),bT(273,`EntityManager`),cf(),bT(274,` from there. The generic classes exported by `),Aa(275,`code`),bT(276,`@mikro-orm/core`),cf(),bT(277,` are registered as injection tokens as well.
`),cf(),Aa(278,`h4`,18)(279,`span`),bT(280,`Repositories`),cf()(),Aa(281,`p`),bT(282,`MikroORM supports the repository design pattern, so each entity has its own repository. See the `),Aa(283,`a`,19),bT(284,`MikroORM repositories documentation`),cf(),bT(285,` for details. To continue the example, define a `),Aa(286,`code`),bT(287,`Photo`),cf(),bT(288,` entity:`),cf(),Aa(289,`app-copy-button`)(290,`pre`)(291,`code`,12),bT(292,`
// photo/photo.entity.ts
import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity()
export class Photo {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;
}
`),cf()()(),Aa(293,`blockquote`,6)(294,`strong`),bT(295,`Hint`),cf(),bT(296,` Besides decorators, MikroORM can define entities with the `),Aa(297,`code`),bT(298,`defineEntity()`),cf(),bT(299,` helper or the `),Aa(300,`code`),bT(301,`EntitySchema`),cf(),bT(302,` class. Learn more in the `),Aa(303,`a`,20),bT(304,`MikroORM defining entities guide`),cf(),bT(305,`.
`),cf(),Aa(306,`p`),bT(307,`To define which repositories are registered in the current scope, use the `),Aa(308,`code`),bT(309,`forFeature()`),cf(),bT(310,` method:`),cf(),Aa(311,`app-copy-button`)(312,`pre`)(313,`code`,12),bT(314,`
// photo/photo.module.ts
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Photo } from './photo.entity.js';
import { PhotoService } from './photo.service.js';
import { PhotoController } from './photo.controller.js';

@Module({
  imports: [MikroOrmModule.forFeature([Photo])],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}
`),cf()()(),Aa(315,`blockquote`,6)(316,`strong`),bT(317,`Note`),cf(),bT(318,` Don't register your base entities via `),Aa(319,`code`),bT(320,`forFeature()`),cf(),bT(321,`, as there are no repositories for them. Base entities do, however, need to be part of the ORM configuration (e.g., the `),Aa(322,`code`),bT(323,`entities`),cf(),bT(324,` option of `),Aa(325,`code`),bT(326,`forRoot()`),cf(),bT(327,`).
`),cf(),Aa(328,`p`),bT(329,`Then import the `),Aa(330,`code`),bT(331,`PhotoModule`),cf(),bT(332,` into the root `),Aa(333,`code`),bT(334,`AppModule`),cf(),bT(335,`:`),cf(),Aa(336,`app-copy-button`)(337,`pre`)(338,`code`,12),bT(339,`
// app.module.ts
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './mikro-orm.config.js';
import { PhotoModule } from './photo/photo.module.js';

@Module({
  imports: [MikroOrmModule.forRoot(config), PhotoModule],
})
export class AppModule {}
`),cf()()(),Aa(340,`p`),bT(341,`You can now inject the `),Aa(342,`code`),bT(343,`Photo`),cf(),bT(344,` repository into the `),Aa(345,`code`),bT(346,`PhotoService`),cf(),bT(347,` using the `),Aa(348,`code`),bT(349,`@InjectRepository()`),cf(),bT(350,` decorator:`),cf(),Aa(351,`app-copy-button`)(352,`pre`)(353,`code`,12),bT(354,`
// photo/photo.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/sqlite';
import { Photo } from './photo.entity.js';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: EntityRepository<Photo>,
    private readonly em: EntityManager,
  ) {}

  findAll(): Promise<Photo[]> {
    return this.photoRepository.findAll();
  }

  findOne(id: number): Promise<Photo | null> {
    return this.photoRepository.findOne({ id });
  }

  async create(name: string): Promise<Photo> {
    const photo = this.photoRepository.create({ name });
    await this.em.flush();
    return photo;
  }

  async remove(id: number): Promise<void> {
    const photo = await this.photoRepository.findOneOrFail({ id });
    await this.em.remove(photo).flush();
  }
}
`),cf()()(),Aa(355,`p`),bT(356,`Repositories don't have `),Aa(357,`code`),bT(358,`persist()`),cf(),bT(359,` or `),Aa(360,`code`),bT(361,`flush()`),cf(),bT(362,` methods, so write operations go through the `),Aa(363,`code`),bT(364,`EntityManager`),cf(),bT(365,`, which implements the `),Aa(366,`a`,21),bT(367,`Unit of Work`),cf(),bT(368,` pattern. The repository's `),Aa(369,`code`),bT(370,`create()`),cf(),bT(371,` method marks the new entity for persistence, and `),Aa(372,`code`),bT(373,`em.flush()`),cf(),bT(374,` writes all pending changes to the database in a single transaction.`),cf(),Aa(375,`h4`,22)(376,`span`),bT(377,`Using custom repositories`),cf()(),Aa(378,`p`),bT(379,`To add your own query methods, extend `),Aa(380,`code`),bT(381,`EntityRepository`),cf(),bT(382,` and point the entity to your class through the `),Aa(383,`code`),bT(384,`repository`),cf(),bT(385,` option:`),cf(),Aa(386,`app-copy-button`)(387,`pre`)(388,`code`,12),bT(389,`
// author/author.entity.ts
import { EntityRepositoryType } from '@mikro-orm/core';
import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';
import { AuthorRepository } from './author.repository.js';

@Entity({ repository: () => AuthorRepository })
export class Author {
  // enables type inference in \`em.getRepository()\`
  [EntityRepositoryType]?: AuthorRepository;

  @PrimaryKey()
  id: number;

  @Property()
  name: string;
}
`),cf()()(),Aa(390,`app-copy-button`)(391,`pre`)(392,`code`,12),bT(393,`
// author/author.repository.ts
import { EntityRepository } from '@mikro-orm/sqlite';
import { Author } from './author.entity.js';

export class AuthorRepository extends EntityRepository<Author> {
  findByName(name: string): Promise<Author | null> {
    return this.findOne({ name });
  }
}
`),cf()()(),Aa(394,`p`),bT(395,`When you pass the `),Aa(396,`code`),bT(397,`Author`),cf(),bT(398,` entity to `),Aa(399,`code`),bT(400,`forFeature()`),cf(),bT(401,`, the module also registers the custom repository class itself as a provider. You can therefore inject it by its class, without the `),Aa(402,`code`),bT(403,`@InjectRepository()`),cf(),bT(404,` decorator:`),cf(),Aa(405,`app-copy-button`)(406,`pre`)(407,`code`,12),bT(408,`
@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}
}
`),cf()()(),Aa(409,`h4`,23)(410,`span`),bT(411,`Load entities automatically`),cf()(),Aa(412,`p`),bT(413,`Manually adding entities to the `),Aa(414,`code`),bT(415,`entities`),cf(),bT(416,` array of the configuration can be tedious. In addition, referencing entities from the root module breaks application domain boundaries and leaks implementation details to other parts of the application. Glob paths solve this issue, but they don't work when you bundle your application (e.g., in a `),Aa(417,`a`,24),bT(418,`monorepo`),cf(),bT(419,`): MikroORM looks up the matching files at runtime, and a bundle doesn't contain them as separate files.`),cf(),Aa(420,`p`),bT(421,`As an alternative, you can load entities automatically by setting the `),Aa(422,`code`),bT(423,`autoLoadEntities`),cf(),bT(424,` property of the configuration object (passed into the `),Aa(425,`code`),bT(426,`forRoot()`),cf(),bT(427,` method) to `),Aa(428,`code`),bT(429,`true`),cf(),bT(430,`, as shown below:`),cf(),Aa(431,`app-copy-button`)(432,`pre`)(433,`code`,12),bT(434,`
// app.module.ts
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { SqliteDriver } from '@mikro-orm/sqlite';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      driver: SqliteDriver,
      dbName: 'my-db-name.sqlite3',
      metadataProvider: ReflectMetadataProvider,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(435,`p`),bT(436,`With this option enabled, every entity registered through the `),Aa(437,`code`),bT(438,`forFeature()`),cf(),bT(439,` method is automatically added to the `),Aa(440,`code`),bT(441,`entities`),cf(),bT(442,` array of the configuration object.`),cf(),Aa(443,`blockquote`,6)(444,`strong`),bT(445,`Note`),cf(),bT(446,` Entities that aren't registered through the `),Aa(447,`code`),bT(448,`forFeature()`),cf(),bT(449,` method, but are only referenced from an entity (via a relationship), won't be included by the `),Aa(450,`code`),bT(451,`autoLoadEntities`),cf(),bT(452,` setting.
`),cf(),Aa(453,`blockquote`,6)(454,`strong`),bT(455,`Note`),cf(),Aa(456,`code`),bT(457,`autoLoadEntities`),cf(),bT(458,` has no effect on the MikroORM CLI, which still needs a CLI config with the full list of entities. You can use globs there, however, as the CLI doesn't run your bundle.
`),cf(),Aa(459,`h4`,25)(460,`span`),bT(461,`Request context`),cf()(),Aa(462,`p`),bT(463,`MikroORM keeps loaded entities in an `),Aa(464,`a`,26),bT(465,`identity map`),cf(),bT(466,`, which must not be shared between concurrent requests. Each request needs its own fork of the `),Aa(467,`code`),bT(468,`EntityManager`),cf(),bT(469,`, with a clean identity map. The `),Aa(470,`code`),bT(471,`MikroOrmModule`),cf(),bT(472,` handles this for you: it registers a middleware for all routes that runs each HTTP request inside a `),Aa(473,`code`),bT(474,`RequestContext`),cf(),bT(475,`. Within that context, the global `),Aa(476,`code`),bT(477,`EntityManager`),cf(),bT(478,` that you inject (and every repository that depends on it) transparently delegates to the request's fork.`),cf(),Aa(479,`p`),bT(480,`Outside of a request context, MikroORM refuses to use the global `),Aa(481,`code`),bT(482,`EntityManager`),cf(),bT(483,` for operations that depend on the identity map, such as `),Aa(484,`code`),bT(485,`find()`),cf(),bT(486,` or `),Aa(487,`code`),bT(488,`flush()`),cf(),bT(489,`, and throws a `),Aa(490,`code`),bT(491,`ValidationError`),cf(),bT(492,`. The `),Aa(493,`a`,27),bT(494,`next section`),cf(),bT(495,` shows how to create a context for code that doesn't run as part of an HTTP request.`),cf(),Aa(496,`p`),bT(497,`To apply the middleware to a subset of routes only, set the `),Aa(498,`code`),bT(499,`forRoutesPath`),cf(),bT(500,` option. To disable it, set `),Aa(501,`code`),bT(502,`registerRequestContext`),cf(),bT(503,` to `),Aa(504,`code`),bT(505,`false`),cf(),bT(506,`. For example, instead of using the middleware, you can let Nest create an `),Aa(507,`code`),bT(508,`EntityManager`),cf(),bT(509,` fork for every request by making the `),Aa(510,`code`),bT(511,`EntityManager`),cf(),bT(512,` provider `),Aa(513,`a`,28),bT(514,`request-scoped`),cf(),bT(515,`:`),cf(),Aa(516,`app-copy-button`)(517,`pre`)(518,`code`,12),bT(519,`
// app.module.ts
import { Module, Scope } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './mikro-orm.config.js';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      ...config,
      registerRequestContext: false,
      scope: Scope.REQUEST,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(520,`blockquote`,29)(521,`strong`),bT(522,`Warning`),cf(),bT(523,` With `),Aa(524,`code`),bT(525,`scope: Scope.REQUEST`),cf(),bT(526,`, every provider that depends on the `),Aa(527,`code`),bT(528,`EntityManager`),cf(),bT(529,` (including repositories) becomes request-scoped as well. This affects performance, as described in the `),Aa(530,`a`,30),bT(531,`injection scopes chapter`),cf(),bT(532,`.
`),cf(),Aa(533,`h4`,31)(534,`span`),bT(535,`Request scoped handlers in queues`),cf()(),Aa(536,`p`),bT(537,`Middleware only runs for HTTP requests. Code outside of that flow, such as `),Aa(538,`a`,32),bT(539,`queue`),cf(),bT(540,` consumers and `),Aa(541,`a`,33),bT(542,`scheduled tasks`),cf(),bT(543,`, has no request context, so you need to create one yourself.`),cf(),Aa(544,`p`),bT(545,`For these methods, use the `),Aa(546,`code`),bT(547,`@CreateRequestContext()`),cf(),bT(548,` decorator. It forks the `),Aa(549,`code`),bT(550,`EntityManager`),cf(),bT(551,` and runs the decorated `),Aa(552,`code`),bT(553,`async`),cf(),bT(554,` method inside a new context. The decorator looks up the `),Aa(555,`code`),bT(556,`EntityManager`),cf(),bT(557,` through the `),Aa(558,`code`),bT(559,`orm`),cf(),bT(560,` property (a `),Aa(561,`code`),bT(562,`MikroORM`),cf(),bT(563,` instance) or the `),Aa(564,`code`),bT(565,`em`),cf(),bT(566,` property (an `),Aa(567,`code`),bT(568,`EntityManager`),cf(),bT(569,`) of the class, so inject one of them under that name:`),cf(),Aa(570,`app-copy-button`)(571,`pre`)(572,`code`,12),bT(573,`
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CreateRequestContext } from '@mikro-orm/decorators/legacy';
import { MikroORM } from '@mikro-orm/sqlite';
import { Photo } from './photo.entity.js';

@Injectable()
export class PhotoStatsService {
  private readonly logger = new Logger(PhotoStatsService.name);

  constructor(private readonly orm: MikroORM) {}

  @Cron(CronExpression.EVERY_HOUR)
  @CreateRequestContext()
  async logPhotoCount() {
    // runs in a separate context, with its own identity map
    const count = await this.orm.em.count(Photo);
    this.logger.log(\`Found \${count} photos\`);
  }
}
`),cf()()(),Aa(574,`blockquote`,29)(575,`strong`),bT(576,`Warning`),cf(),bT(577,` Place `),Aa(578,`code`),bT(579,`@CreateRequestContext()`),cf(),bT(580,` directly above the method, below other method decorators such as `),Aa(581,`code`),bT(582,`@Cron()`),cf(),bT(583,`. The decorator replaces the method with a wrapper. Decorators listed above it attach their metadata to that wrapper, but decorators listed below it attach their metadata to the original method, which Nest never sees (in this example, the cron job wouldn't be registered).
`),cf(),Aa(584,`blockquote`,6)(585,`strong`),bT(586,`Note`),cf(),bT(587,` As the name suggests, this decorator always creates a new context, as opposed to its alternative `),Aa(588,`code`),bT(589,`@EnsureRequestContext()`),cf(),bT(590,`, which creates one only if the method isn't already running inside another context. Before MikroORM v6, `),Aa(591,`code`),bT(592,`@CreateRequestContext()`),cf(),bT(593,` was called `),Aa(594,`code`),bT(595,`@UseRequestContext()`),cf(),bT(596,`, and before v7, it was exported from `),Aa(597,`code`),bT(598,`@mikro-orm/core`),cf(),bT(599,`.
`),cf(),Aa(600,`h4`,34)(601,`span`),bT(602,`Transactions`),cf()(),Aa(603,`p`),bT(604,`MikroORM queues all write operations until you call `),Aa(605,`code`),bT(606,`em.flush()`),cf(),bT(607,`, which then wraps them in a single transaction. To control the transaction boundaries yourself, for example, to flush several times or to combine the changes with other queries, use the `),Aa(608,`code`),bT(609,`em.transactional()`),cf(),bT(610,` method:`),cf(),Aa(611,`app-copy-button`)(612,`pre`)(613,`code`,12),bT(614,`
import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/sqlite';
import { Photo } from './photo.entity.js';

@Injectable()
export class PhotoService {
  constructor(private readonly em: EntityManager) {}

  async createMany(names: string[]): Promise<void> {
    await this.em.transactional(async (em) => {
      for (const name of names) {
        em.create(Photo, { name });
      }
    });
  }
}
`),cf()()(),Aa(615,`p`),bT(616,`The callback receives a forked `),Aa(617,`code`),bT(618,`EntityManager`),cf(),bT(619,` that runs inside the transaction. When the callback completes, MikroORM flushes the fork and commits the transaction. If the callback throws, MikroORM rolls the transaction back and rethrows the error.`),cf(),Aa(620,`p`),bT(621,`Alternatively, use the `),Aa(622,`code`),bT(623,`@Transactional()`),cf(),bT(624,` decorator, which wraps the decorated `),Aa(625,`code`),bT(626,`async`),cf(),bT(627,` method in `),Aa(628,`code`),bT(629,`em.transactional()`),cf(),bT(630,`:`),cf(),Aa(631,`app-copy-button`)(632,`pre`)(633,`code`,12),bT(634,`
import { Injectable } from '@nestjs/common';
import { Transactional } from '@mikro-orm/decorators/legacy';
import { EntityManager } from '@mikro-orm/sqlite';
import { Photo } from './photo.entity.js';

@Injectable()
export class PhotoService {
  constructor(private readonly em: EntityManager) {}

  @Transactional()
  async createMany(names: string[]): Promise<void> {
    for (const name of names) {
      this.em.create(Photo, { name });
    }
  }
}
`),cf()()(),Aa(635,`p`),bT(636,`Like `),Aa(637,`code`),bT(638,`@CreateRequestContext()`),cf(),bT(639,`, the decorator finds the `),Aa(640,`code`),bT(641,`EntityManager`),cf(),bT(642,` through the `),Aa(643,`code`),bT(644,`em`),cf(),bT(645,` or `),Aa(646,`code`),bT(647,`orm`),cf(),bT(648,` property of the class, and falls back to the current context if the class has neither. When called inside another transaction, `),Aa(649,`code`),bT(650,`em.transactional()`),cf(),bT(651,` starts a nested transaction (a savepoint), while `),Aa(652,`code`),bT(653,`@Transactional()`),cf(),bT(654,` joins the existing transaction by default. See the `),Aa(655,`a`,35),bT(656,`MikroORM transactions documentation`),cf(),bT(657,` for propagation options, isolation levels, and locking.`),cf(),Aa(658,`h4`,36)(659,`span`),bT(660,`Serialization`),cf()(),Aa(661,`p`),bT(662,`MikroORM entities have a `),Aa(663,`code`),bT(664,`toJSON()`),cf(),bT(665,` method that applies MikroORM's `),Aa(666,`a`,37),bT(667,`serialization rules`),cf(),bT(668,`: it omits hidden properties, applies custom property serializers, and serializes populated relations as nested objects and unpopulated relations as their primary keys. When a route handler returns an entity, Nest converts it to JSON, so these rules apply automatically.`),cf(),Aa(669,`blockquote`,29)(670,`strong`),bT(671,`Warning`),cf(),bT(672,` Don't use `),Aa(673,`a`,38),bT(674,`Nest's built-in serializer`),cf(),bT(675,` (the `),Aa(676,`code`),bT(677,`ClassSerializerInterceptor`),cf(),bT(678,`) with MikroORM entities. It relies on `),Aa(679,`code`),bT(680,`class-transformer`),cf(),bT(681,`, which doesn't understand the wrappers that MikroORM uses for relations: it serializes the internal structure of a `),Aa(682,`code`),bT(683,`Reference`),cf(),bT(684,`, and traversing a `),Aa(685,`code`),bT(686,`Collection`),cf(),bT(687,` leads to infinite recursion (a "Maximum call stack size exceeded" error).
`),cf(),Aa(688,`p`),bT(689,`Instead, configure serialization on the entity with MikroORM's options:`),cf(),Aa(690,`app-copy-button`)(691,`pre`)(692,`code`,12),bT(693,`
// book/book.entity.ts
import { type Rel } from '@mikro-orm/core';
import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';
import { Author } from '../author/author.entity.js';

@Entity()
export class Book {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property({ hidden: true }) // Equivalent of class-transformer's \`@Exclude()\`
  hiddenField: number = Date.now();

  @Property({ persist: false }) // Similar to class-transformer's \`@Expose()\`. Only exists in memory, but is serialized.
  count?: number;

  @ManyToOne(() => Author, {
    serializer: (author: Author) => author.name,
    serializedName: 'authorName',
  }) // Equivalent of class-transformer's \`@Transform()\`
  author: Rel<Author>;
}
`),cf()()(),Aa(694,`blockquote`,6)(695,`strong`),bT(696,`Hint`),cf(),bT(697,` When entities reference each other, wrap the relation's type in `),Aa(698,`code`),bT(699,`Rel<T>`),cf(),bT(700,` (or use `),Aa(701,`code`),bT(702,`Ref<T>`),cf(),bT(703,`) from `),Aa(704,`code`),bT(705,`@mikro-orm/core`),cf(),bT(706,`, and pass the target entity to the relation decorator, as shown above. Otherwise, TypeScript emits decorator metadata that references the related class directly. In ESM projects, the circular imports between entity files then fail at startup with a `),Aa(707,`code`),bT(708,`ReferenceError`),cf(),bT(709,` (e.g., "Cannot access 'Author' before initialization").
`),cf(),Aa(710,`p`),bT(711,`To control serialization for a single route handler, convert the entity explicitly with the `),Aa(712,`code`),bT(713,`serialize()`),cf(),bT(714,` function, which is exported by your driver package and by `),Aa(715,`code`),bT(716,`@mikro-orm/core`),cf(),bT(717,`. It accepts options such as `),Aa(718,`code`),bT(719,`populate`),cf(),bT(720,`, `),Aa(721,`code`),bT(722,`exclude`),cf(),bT(723,`, `),Aa(724,`code`),bT(725,`fields`),cf(),bT(726,`, and `),Aa(727,`code`),bT(728,`groups`),cf(),bT(729,`:`),cf(),Aa(730,`app-copy-button`)(731,`pre`)(732,`code`,12),bT(733,`
@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  const book = await this.em.findOneOrFail(Book, { id }, { populate: ['author'] });
  return serialize(book, { fields: ['title', 'author'] }); // { title: '...', authorName: '...' }
}
`),cf()()(),Aa(734,`p`),bT(735,`To get a plain object with the default rules applied, call `),Aa(736,`code`),bT(737,`wrap(entity).toObject()`),cf(),bT(738,`.`),cf(),Aa(739,`h4`,39)(740,`span`),bT(741,`Multiple databases`),cf()(),Aa(742,`p`),bT(743,`To connect to multiple databases, call `),Aa(744,`code`),bT(745,`MikroOrmModule.forRoot()`),cf(),bT(746,` once per database, and give each connection a unique `),Aa(747,`code`),bT(748,`contextName`),cf(),bT(749,`. In this setup, set `),Aa(750,`code`),bT(751,`registerRequestContext`),cf(),bT(752,` to `),Aa(753,`code`),bT(754,`false`),cf(),bT(755,` on every connection, because the default middleware only works with a single, unnamed connection. Instead, import `),Aa(756,`code`),bT(757,`MikroOrmModule.forMiddleware()`),cf(),bT(758,` once. Its middleware creates a request context that covers all connections:`),cf(),Aa(759,`app-copy-button`)(760,`pre`)(761,`code`,12),bT(762,`
// app.module.ts
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { SqliteDriver } from '@mikro-orm/sqlite';
import { Album } from './album/album.entity.js';
import { Photo } from './photo/photo.entity.js';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      contextName: 'photos',
      registerRequestContext: false,
      driver: SqliteDriver,
      dbName: 'photos.sqlite3',
      entities: [Photo],
      metadataProvider: ReflectMetadataProvider,
    }),
    MikroOrmModule.forRoot({
      contextName: 'albums',
      registerRequestContext: false,
      driver: SqliteDriver,
      dbName: 'albums.sqlite3',
      entities: [Album],
      metadataProvider: ReflectMetadataProvider,
    }),
    MikroOrmModule.forMiddleware(),
  ],
})
export class AppModule {}
`),cf()()(),Aa(763,`blockquote`,29)(764,`strong`),bT(765,`Notice`),cf(),bT(766,` If you use `),Aa(767,`code`),bT(768,`MikroOrmModule.forRootAsync()`),cf(),bT(769,`, set the `),Aa(770,`code`),bT(771,`contextName`),cf(),bT(772,` next to `),Aa(773,`code`),bT(774,`useFactory`),cf(),bT(775,`, not inside the options object that the factory returns.
`),cf(),Aa(776,`p`),bT(777,`With this setup, pass the context name to the `),Aa(778,`code`),bT(779,`forFeature()`),cf(),bT(780,` method and the `),Aa(781,`code`),bT(782,`@InjectRepository()`),cf(),bT(783,` decorator:`),cf(),Aa(784,`app-copy-button`)(785,`pre`)(786,`code`,12),bT(787,`
// album/album.module.ts
@Module({
  imports: [MikroOrmModule.forFeature([Album], 'albums')],
  providers: [AlbumService],
})
export class AlbumModule {}
`),cf()()(),Aa(788,`p`),bT(789,`To inject the `),Aa(790,`code`),bT(791,`MikroORM`),cf(),bT(792,` or `),Aa(793,`code`),bT(794,`EntityManager`),cf(),bT(795,` of a specific connection, use the `),Aa(796,`code`),bT(797,`@InjectMikroORM()`),cf(),bT(798,` and `),Aa(799,`code`),bT(800,`@InjectEntityManager()`),cf(),bT(801,` decorators:`),cf(),Aa(802,`app-copy-button`)(803,`pre`)(804,`code`,12),bT(805,`
// album/album.service.ts
import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectMikroORM, InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/sqlite';
import { Album } from './album.entity.js';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album, 'albums')
    private readonly albumRepository: EntityRepository<Album>,
    @InjectEntityManager('albums')
    private readonly em: EntityManager,
    @InjectMikroORM('albums')
    private readonly orm: MikroORM,
  ) {}
}
`),cf()()(),Aa(806,`p`),bT(807,`To inject all registered `),Aa(808,`code`),bT(809,`MikroORM`),cf(),bT(810,` instances as an array, use the `),Aa(811,`code`),bT(812,`@InjectMikroORMs()`),cf(),bT(813,` decorator.`),cf(),Aa(814,`h4`,40)(815,`span`),bT(816,`Testing`),cf()(),Aa(817,`p`),bT(818,`When unit testing an application, you usually want to avoid a database connection, which keeps test suites independent and fast. However, your classes might depend on repositories and the `),Aa(819,`code`),bT(820,`EntityManager`),cf(),bT(821,`. To resolve these classes, provide mock implementations using `),Aa(822,`a`,41),bT(823,`custom providers`),cf(),bT(824,`.`),cf(),Aa(825,`p`),bT(826,`The `),Aa(827,`code`),bT(828,`@mikro-orm/nestjs`),cf(),bT(829,` package exposes a `),Aa(830,`code`),bT(831,`getRepositoryToken()`),cf(),bT(832,` function that returns a prepared injection token based on a given entity (e.g., `),Aa(833,`code`),bT(834,`'PhotoRepository'`),cf(),bT(835,` for the `),Aa(836,`code`),bT(837,`Photo`),cf(),bT(838,` entity), allowing you to mock the repository. For a custom repository, use its class as the token:`),cf(),Aa(839,`app-copy-button`)(840,`pre`)(841,`code`,12),bT(842,`
import { Module } from '@nestjs/common';
import { getRepositoryToken } from '@mikro-orm/nestjs';
import { EntityManager } from '@mikro-orm/sqlite';
import { Photo } from './photo.entity.js';
import { PhotoService } from './photo.service.js';

@Module({
  providers: [
    PhotoService,
    {
      // or, for a custom repository: \`provide: PhotoRepository\`
      provide: getRepositoryToken(Photo),
      useValue: mockedRepository,
    },
    {
      provide: EntityManager,
      useValue: mockedEntityManager,
    },
  ],
})
export class PhotoModule {}
`),cf()()(),Aa(843,`p`),bT(844,`Now the `),Aa(845,`code`),bT(846,`mockedRepository`),cf(),bT(847,` object is injected wherever a class in this module asks for the `),Aa(848,`code`),bT(849,`Photo`),cf(),bT(850,` repository using the `),Aa(851,`code`),bT(852,`@InjectRepository(Photo)`),cf(),bT(853,` decorator. For `),Aa(854,`a`,16),bT(855,`multiple databases`),cf(),bT(856,`, pass the context name as the second argument, e.g., `),Aa(857,`code`),bT(858,`getRepositoryToken(Album, 'albums')`),cf(),bT(859,`.`),cf(),Aa(860,`h4`,42)(861,`span`),bT(862,`Async configuration`),cf()(),Aa(863,`p`),bT(864,`When you need to pass module options asynchronously instead of statically, use the `),Aa(865,`code`),bT(866,`forRootAsync()`),cf(),bT(867,` method. As with most dynamic modules, Nest provides several techniques for async configuration.`),cf(),Aa(868,`p`),bT(869,`One technique is to use a factory function. Like other `),Aa(870,`a`,43),bT(871,`factory providers`),cf(),bT(872,`, the factory function can be `),Aa(873,`code`),bT(874,`async`),cf(),bT(875,` and can inject dependencies through `),Aa(876,`code`),bT(877,`inject`),cf(),bT(878,`:`),cf(),Aa(879,`app-copy-button`)(880,`pre`)(881,`code`,12),bT(882,`
MikroOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    dbName: configService.getOrThrow<string>('DB_NAME'),
    autoLoadEntities: true,
    metadataProvider: ReflectMetadataProvider,
  }),
  inject: [ConfigService],
  driver: SqliteDriver,
});
`),cf()()(),Aa(883,`blockquote`,29)(884,`strong`),bT(885,`Warning`),cf(),bT(886,` Set the `),Aa(887,`code`),bT(888,`driver`),cf(),bT(889,` option next to `),Aa(890,`code`),bT(891,`useFactory`),cf(),bT(892,`, as shown above. The module needs to know the driver before it calls the factory, to register the driver-specific `),Aa(893,`code`),bT(894,`EntityManager`),cf(),bT(895,` and `),Aa(896,`code`),bT(897,`MikroORM`),cf(),bT(898,` classes as injection tokens. Without it, injecting the `),Aa(899,`code`),bT(900,`EntityManager`),cf(),bT(901,` from your driver package fails with a dependency resolution error.
`),cf(),Aa(902,`p`),bT(903,`Alternatively, you can configure the `),Aa(904,`code`),bT(905,`MikroOrmModule`),cf(),bT(906,` using a class instead of a factory, as shown below:`),cf(),Aa(907,`app-copy-button`)(908,`pre`)(909,`code`,12),bT(910,`
MikroOrmModule.forRootAsync({
  useClass: MikroOrmConfigService,
  driver: SqliteDriver,
});
`),cf()()(),Aa(911,`p`),bT(912,`The construction above instantiates `),Aa(913,`code`),bT(914,`MikroOrmConfigService`),cf(),bT(915,` inside `),Aa(916,`code`),bT(917,`MikroOrmModule`),cf(),bT(918,`, using it to create the required options object. In this example, the `),Aa(919,`code`),bT(920,`MikroOrmConfigService`),cf(),bT(921,` has to implement the `),Aa(922,`code`),bT(923,`MikroOrmOptionsFactory`),cf(),bT(924,` interface, as shown below. The `),Aa(925,`code`),bT(926,`MikroOrmModule`),cf(),bT(927,` calls the `),Aa(928,`code`),bT(929,`createMikroOrmOptions()`),cf(),bT(930,` method on the instantiated object of the supplied class.`),cf(),Aa(931,`app-copy-button`)(932,`pre`)(933,`code`,12),bT(934,`
import { Injectable } from '@nestjs/common';
import { MikroOrmModuleOptions, MikroOrmOptionsFactory } from '@mikro-orm/nestjs';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';

@Injectable()
export class MikroOrmConfigService implements MikroOrmOptionsFactory {
  createMikroOrmOptions(): MikroOrmModuleOptions {
    return {
      dbName: 'my-db-name.sqlite3',
      autoLoadEntities: true,
      metadataProvider: ReflectMetadataProvider,
    };
  }
}
`),cf()()(),Aa(935,`p`),bT(936,`To reuse an existing options provider instead of creating a private copy inside the `),Aa(937,`code`),bT(938,`MikroOrmModule`),cf(),bT(939,`, use the `),Aa(940,`code`),bT(941,`useExisting`),cf(),bT(942,` syntax. The provider must implement the `),Aa(943,`code`),bT(944,`MikroOrmOptionsFactory`),cf(),bT(945,` interface, and a module listed in `),Aa(946,`code`),bT(947,`imports`),cf(),bT(948,` must export it:`),cf(),Aa(949,`app-copy-button`)(950,`pre`)(951,`code`,12),bT(952,`
MikroOrmModule.forRootAsync({
  imports: [DatabaseConfigModule],
  useExisting: MikroOrmConfigService,
  driver: SqliteDriver,
});
`),cf()()(),Aa(953,`h4`,44)(954,`span`),bT(955,`Application shutdown`),cf()(),Aa(956,`p`),bT(957,`The `),Aa(958,`code`),bT(959,`MikroOrmModule`),cf(),bT(960,` closes the ORM and its database connection in the `),Aa(961,`code`),bT(962,`onApplicationShutdown()`),cf(),bT(963,` lifecycle hook, which Nest calls when you call `),Aa(964,`code`),bT(965,`app.close()`),cf(),bT(966,`. By default, however, Nest doesn't listen for process termination signals such as `),Aa(967,`code`),bT(968,`SIGTERM`),cf(),bT(969,`, so the connection isn't closed when the process is terminated. To close it in that case too, enable `),Aa(970,`a`,45),bT(971,`shutdown hooks`),cf(),bT(972,`:`),cf(),Aa(973,`app-copy-button`)(974,`pre`)(975,`code`,12),bT(976,`
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(977,`h4`,46)(978,`span`),bT(979,`Example`),cf()(),Aa(980,`p`),bT(981,`For complete applications that use NestJS with MikroORM, see the `),Aa(982,`a`,47),bT(983,`nestjs-realworld-example-app`),cf(),bT(984,` and `),Aa(985,`a`,48),bT(986,`nestjs-example-app`),cf(),bT(987,` repositories.`),cf()(),Aa(988,`a`,49),Wa(989,`i`,50),Aa(990,`span`),bT(991,`Edit on GitHub`),cf()()())},dependencies:[Lt,Jc,ln],encapsulation:2})}return m})();var H=(()=>{class m extends xt{static ɵfac=(()=>{let d;return function(u){return(d||(d=im(m)))(u||m)}})();static ɵcmp=ef({type:m,selectors:[[`app-mongo`]],features:[xy],decls:864,vars:64,consts:[[`contentReference`,``],[`appc67a0ac738e4b0d55f4886c27d1c767fa411e292`,``],[`app80f306971c762b2b3d70ba63317b3b0481150e03`,``],[`appbd2e8c446b43ce5a1b84a00dfd245d5b0f21ca67`,``],[`app382bd769465e77b34f2d6a6f1abcef20b255203b`,``],[`appa94295d2e6cc74c4f9f6d355bc9ff6fc93162655`,``],[`app34f8fd2c95ad51207fa5e50745ff51b55f19b3cd`,``],[`app4811f8c4407fe8e8ebf2929e898b6dd747e80893`,``],[`app50a9ee2e61b7b080a6785f32d3076ba09abb2b0a`,``],[`app7be049734f92e4fe2e837ce9811db6e299e33ed9`,``],[`appbdb2ea7f47c60b8147d24d7e965bd273e6f32799`,``],[`app32f891810cd24c3f35c5548b55a5eb453366b847`,``],[`app0a62c2cdbfe7cca111773c67bd30bbd20de5fc2d`,``],[`app458a5c3bc513e96413075bde2d21ca210b10b9c7`,``],[`appad0864ef7b71eecf162ddfc52511baa1f254e94c`,``],[1,`content`],[1,`content-inner`],[`id`,`mongo`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.mongodb.com/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/typeorm/typeorm`],[`routerLink`,`/data/typeorm`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com`],[1,`language-bash`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/connections.html`],[`appAnchor`,``,`id`,`model-injection`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/guide.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/models.html`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/guide.html#options`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/schematypes.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/schematypes.html#schematype-options`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/populate.html#doc-not-found`],[`appAnchor`,``,`id`,`connection`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/api.html#Connection`],[`appAnchor`,``,`id`,`sessions`],[`appAnchor`,``,`id`,`multiple-databases`],[1,`warning`],[`appAnchor`,``,`id`,`hooks-middleware`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/middleware.html`],[`href`,`/fundamentals/custom-providers#factory-providers-usefactory`],[`appAnchor`,``,`id`,`plugins`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/plugins.html`],[`appAnchor`,``,`id`,`discriminators`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/discriminators.html`],[`appAnchor`,``,`id`,`testing`],[`href`,`/fundamentals/custom-providers#di-fundamentals`],[`routerLink`,`/fundamentals/custom-providers`],[`appAnchor`,``,`id`,`async-configuration`],[`appAnchor`,``,`id`,`connection-events`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/docs/connections.html#connection-events`],[`appAnchor`,``,`id`,`subdocuments`],[`appAnchor`,``,`id`,`virtuals`],[1,`language-ts`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/06-mongoose`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/data/mongo.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,15,0)(2,`div`,16)(3,`h3`,17),bT(4,`Mongo`),cf(),Aa(5,`p`),bT(6,`Nest supports two methods for integrating with the `),Aa(7,`a`,18),bT(8,`MongoDB`),cf(),bT(9,` database. You can either use the `),Aa(10,`a`,19),bT(11,`TypeORM`),cf(),bT(12,` module described in the `),Aa(13,`a`,20),bT(14,`TypeORM chapter`),cf(),bT(15,`, which has a connector for MongoDB, or use `),Aa(16,`a`,21),bT(17,`Mongoose`),cf(),bT(18,`, the most popular MongoDB object modeling tool. This chapter describes the latter, using the dedicated `),Aa(19,`code`),bT(20,`@nestjs/mongoose`),cf(),bT(21,` package.`),cf(),Aa(22,`p`),bT(23,`Start by installing the required dependencies:`),cf(),Aa(24,`pre`)(25,`code`,22),bT(26,`
$ npm i @nestjs/mongoose mongoose
`),cf()(),Aa(27,`p`),bT(28,`Once the installation process is complete, import the `),Aa(29,`code`),bT(30,`MongooseModule`),cf(),bT(31,` into the root `),Aa(32,`code`),bT(33,`AppModule`),cf(),bT(34,`:`),cf(),Aa(35,`app-copy-button`,23)(36,`span`,24),bT(37),LT(38,`extension`),Wa(39,`app-tabs`,null,1),cf(),Aa(41,`pre`)(42,`code`,25),bT(43,`
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
`),cf()()(),Aa(44,`p`),bT(45,`The `),Aa(46,`code`),bT(47,`forRoot()`),cf(),bT(48,` method accepts the same configuration object as `),Aa(49,`code`),bT(50,`mongoose.connect()`),cf(),bT(51,` from the Mongoose package, as described in the `),Aa(52,`a`,26),bT(53,`Mongoose connections guide`),cf(),bT(54,`.`),cf(),Aa(55,`h4`,27)(56,`span`),bT(57,`Model injection`),cf()(),Aa(58,`p`),bT(59,`With Mongoose, everything is derived from a `),Aa(60,`a`,28),bT(61,`Schema`),cf(),bT(62,`. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Schemas are used to define `),Aa(63,`a`,29),bT(64,`Models`),cf(),bT(65,`. Models are responsible for creating and reading documents from the underlying MongoDB database.`),cf(),Aa(66,`p`),bT(67,`You can create schemas with NestJS decorators, or manually with Mongoose itself. Using decorators to create schemas greatly reduces boilerplate and improves overall code readability.`),cf(),Aa(68,`p`),bT(69,`Let's define the `),Aa(70,`code`),bT(71,`CatSchema`),cf(),bT(72,`:`),cf(),Aa(73,`app-copy-button`,23)(74,`span`,24),bT(75),LT(76,`extension`),Wa(77,`app-tabs`,null,2),cf(),Aa(79,`pre`)(80,`code`,25),bT(81,`
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
`),cf()()(),Aa(82,`blockquote`,30)(83,`strong`),bT(84,`Hint`),cf(),bT(85,` You can also generate a raw schema definition using the `),Aa(86,`code`),bT(87,`DefinitionsFactory`),cf(),bT(88,` class (from the `),Aa(89,`code`),bT(90,`@nestjs/mongoose`),cf(),bT(91,` package). This allows you to manually modify the schema definition generated from the metadata you provided, which is useful for edge cases where it may be hard to represent everything with decorators.
`),cf(),Aa(92,`p`),bT(93,`The `),Aa(94,`code`),bT(95,`@Schema()`),cf(),bT(96,` decorator marks a class as a schema definition. It maps the `),Aa(97,`code`),bT(98,`Cat`),cf(),bT(99,` class to a MongoDB collection of the same name, but with an additional "s" at the end, so the final collection name is `),Aa(100,`code`),bT(101,`cats`),cf(),bT(102,`. This decorator accepts a single optional argument, a schema options object. Think of it as the object you would normally pass as the second argument of the `),Aa(103,`code`),bT(104,`mongoose.Schema`),cf(),bT(105,` class constructor (e.g., `),Aa(106,`code`),bT(107,`new mongoose.Schema(_, options)`),cf(),bT(108,`). To learn more about the available schema options, see the `),Aa(109,`a`,31),bT(110,`Mongoose schema options`),cf(),bT(111,` documentation.`),cf(),Aa(112,`p`),bT(113,`The `),Aa(114,`code`),bT(115,`@Prop()`),cf(),bT(116,` decorator defines a property in the document. For example, the schema definition above defines three properties: `),Aa(117,`code`),bT(118,`name`),cf(),bT(119,`, `),Aa(120,`code`),bT(121,`age`),cf(),bT(122,`, and `),Aa(123,`code`),bT(124,`breed`),cf(),bT(125,`. The `),Aa(126,`a`,32),bT(127,`schema types`),cf(),bT(128,` for these properties are automatically inferred thanks to TypeScript metadata (and reflection) capabilities. However, in more complex scenarios in which types cannot be implicitly reflected (for example, arrays or nested object structures), you must indicate the types explicitly, as follows:`),cf(),Aa(129,`app-copy-button`)(130,`pre`)(131,`code`,25),bT(132,`
@Prop([String])
tags: string[];
`),cf()()(),Aa(133,`p`),bT(134,`Alternatively, the `),Aa(135,`code`),bT(136,`@Prop()`),cf(),bT(137,` decorator accepts an options object argument (read more about the `),Aa(138,`a`,33),bT(139,`available schema type options`),cf(),bT(140,`). With it, you can indicate whether a property is required, specify a default value, or mark it as immutable. For example:`),cf(),Aa(141,`app-copy-button`)(142,`pre`)(143,`code`,25),bT(144,`
@Prop({ required: true })
name: string;
`),cf()()(),Aa(145,`p`),bT(146,`To specify a relation to another model (for populating later), use the `),Aa(147,`code`),bT(148,`@Prop()`),cf(),bT(149,` decorator as well. For example, if `),Aa(150,`code`),bT(151,`Cat`),cf(),bT(152,` has an `),Aa(153,`code`),bT(154,`Owner`),cf(),bT(155,` that is stored in a different collection called `),Aa(156,`code`),bT(157,`owners`),cf(),bT(158,`, the property should have `),Aa(159,`code`),bT(160,`type`),cf(),bT(161,` and `),Aa(162,`code`),bT(163,`ref`),cf(),bT(164,` options:`),cf(),Aa(165,`app-copy-button`)(166,`pre`)(167,`code`,25),bT(168,`
import mongoose from 'mongoose';
import { Owner } from '../owners/schemas/owner.schema.js';

// inside the class definition
@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
owner: Owner;
`),cf()()(),Aa(169,`p`),bT(170,`If there are multiple owners, your property configuration should look as follows:`),cf(),Aa(171,`app-copy-button`)(172,`pre`)(173,`code`,25),bT(174,`
@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }] })
owners: Owner[];
`),cf()()(),Aa(175,`p`),bT(176,`If you don't intend to always populate a reference to another collection, consider using `),Aa(177,`code`),bT(178,`mongoose.Types.ObjectId`),cf(),bT(179,` as the type instead:`),cf(),Aa(180,`app-copy-button`)(181,`pre`)(182,`code`,25),bT(183,`
@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
// This ensures the field is not confused with a populated reference
owner: mongoose.Types.ObjectId;
`),cf()()(),Aa(184,`p`),bT(185,`Then, when you need to selectively populate it later, use a repository function that specifies the correct type:`),cf(),Aa(186,`app-copy-button`)(187,`pre`)(188,`code`,25),bT(189,`
import { Owner } from './schemas/owner.schema.js';

// e.g. inside a service or repository
async findAllPopulated() {
  return this.catModel.find().populate<{ owner: Owner }>("owner");
}
`),cf()()(),Aa(190,`blockquote`,30)(191,`strong`),bT(192,`Hint`),cf(),bT(193,` If there is no foreign document to populate, the type could be `),Aa(194,`code`),bT(195,`Owner | null`),cf(),bT(196,`, depending on your `),Aa(197,`a`,34),bT(198,`Mongoose configuration`),cf(),bT(199,`. Alternatively, it might throw an error, in which case the type is `),Aa(200,`code`),bT(201,`Owner`),cf(),bT(202,`.
`),cf(),Aa(203,`p`),bT(204,`Finally, you can also pass a `),Aa(205,`strong`),bT(206,`raw`),cf(),bT(207,` schema definition to the decorator. This is useful when, for example, a property represents a nested object that is not defined as a class. For this, use the `),Aa(208,`code`),bT(209,`raw()`),cf(),bT(210,` function from the `),Aa(211,`code`),bT(212,`@nestjs/mongoose`),cf(),bT(213,` package, as follows:`),cf(),Aa(214,`app-copy-button`)(215,`pre`)(216,`code`,25),bT(217,`
@Prop(raw({
  firstName: { type: String },
  lastName: { type: String }
}))
details: Record<string, any>;
`),cf()()(),Aa(218,`p`),bT(219,`Alternatively, if you prefer `),Aa(220,`strong`),bT(221,`not using decorators`),cf(),bT(222,`, you can define a schema manually. For example:`),cf(),Aa(223,`app-copy-button`)(224,`pre`)(225,`code`,25),bT(226,`
export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
`),cf()()(),Aa(227,`p`),bT(228,`The `),Aa(229,`code`),bT(230,`cat.schema`),cf(),bT(231,` file resides in a `),Aa(232,`code`),bT(233,`schemas`),cf(),bT(234,` folder in the `),Aa(235,`code`),bT(236,`cats`),cf(),bT(237,` directory, where the `),Aa(238,`code`),bT(239,`CatsModule`),cf(),bT(240,` is also defined. While you can store schema files wherever you prefer, we recommend storing them near their related `),Aa(241,`strong`),bT(242,`domain`),cf(),bT(243,` objects, in the appropriate module directory.`),cf(),Aa(244,`p`),bT(245,`Let's look at the `),Aa(246,`code`),bT(247,`CatsModule`),cf(),bT(248,`:`),cf(),Aa(249,`app-copy-button`,23)(250,`span`,24),bT(251),LT(252,`extension`),Wa(253,`app-tabs`,null,3),cf(),Aa(255,`pre`)(256,`code`,25),bT(257,`
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller.js';
import { CatsService } from './cats.service.js';
import { Cat, CatSchema } from './schemas/cat.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
`),cf()()(),Aa(258,`p`),bT(259,`The `),Aa(260,`code`),bT(261,`MongooseModule`),cf(),bT(262,` provides the `),Aa(263,`code`),bT(264,`forFeature()`),cf(),bT(265,` method to configure the module, including defining which models should be registered in the current scope. To use the models in another module as well, add `),Aa(266,`code`),bT(267,`MongooseModule`),cf(),bT(268,` to the `),Aa(269,`code`),bT(270,`exports`),cf(),bT(271,` array of `),Aa(272,`code`),bT(273,`CatsModule`),cf(),bT(274,` and import `),Aa(275,`code`),bT(276,`CatsModule`),cf(),bT(277,` in the other module.`),cf(),Aa(278,`p`),bT(279,`Once you've registered the schema, you can inject a `),Aa(280,`code`),bT(281,`Cat`),cf(),bT(282,` model into the `),Aa(283,`code`),bT(284,`CatsService`),cf(),bT(285,` using the `),Aa(286,`code`),bT(287,`@InjectModel()`),cf(),bT(288,` decorator:`),cf(),Aa(289,`app-copy-button`,23)(290,`span`,24),bT(291),LT(292,`extension`),Wa(293,`app-tabs`,null,4),cf(),Aa(295,`pre`)(296,`code`,25),bT(297,`
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema.js';
import { CreateCatDto } from './dto/create-cat.dto.js';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
`),cf()(),Aa(298,`pre`)(299,`code`,25),bT(300,`
import { Model } from 'mongoose';
import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema.js';

@Injectable()
@Dependencies(getModelToken(Cat.name))
export class CatsService {
  constructor(catModel) {
    this.catModel = catModel;
  }

  async create(createCatDto) {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll() {
    return this.catModel.find().exec();
  }
}
`),cf()()(),Aa(301,`h4`,35)(302,`span`),bT(303,`Connection`),cf()(),Aa(304,`p`),bT(305,`At times, you may need to access the native `),Aa(306,`a`,36),bT(307,`Mongoose Connection`),cf(),bT(308,` object, for example, to make native API calls on it. Inject the Mongoose connection with the `),Aa(309,`code`),bT(310,`@InjectConnection()`),cf(),bT(311,` decorator as follows:`),cf(),Aa(312,`app-copy-button`)(313,`pre`)(314,`code`,25),bT(315,`
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectConnection() private connection: Connection) {}
}
`),cf()()(),Aa(316,`h4`,37)(317,`span`),bT(318,`Sessions`),cf()(),Aa(319,`p`),bT(320,`To start a session with Mongoose, inject the database connection using `),Aa(321,`code`),bT(322,`@InjectConnection()`),cf(),bT(323,` rather than calling `),Aa(324,`code`),bT(325,`mongoose.startSession()`),cf(),bT(326,` directly. This integrates with the Nest dependency injection system and ensures the session is started on the connection that Nest manages.`),cf(),Aa(327,`p`),bT(328,`Here's an example of how to start a session:`),cf(),Aa(329,`app-copy-button`)(330,`pre`)(331,`code`,25),bT(332,`
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async startTransaction() {
    const session = await this.connection.startSession();
    session.startTransaction();
    // Your transaction logic here
  }
}
`),cf()()(),Aa(333,`p`),bT(334,`In this example, `),Aa(335,`code`),bT(336,`@InjectConnection()`),cf(),bT(337,` injects the Mongoose connection into the service. You can then call `),Aa(338,`code`),bT(339,`connection.startSession()`),cf(),bT(340,` to begin a new session and use it to manage database transactions, ensuring atomic operations across multiple queries. After starting the transaction, remember to commit or abort it based on your logic, and end the session when you're done.`),cf(),Aa(341,`h4`,38)(342,`span`),bT(343,`Multiple databases`),cf()(),Aa(344,`p`),bT(345,`Some projects require multiple database connections, which this module also supports. To work with multiple connections, first create the connections. In this case, naming the connections is `),Aa(346,`strong`),bT(347,`mandatory`),cf(),bT(348,`.`),cf(),Aa(349,`app-copy-button`,23)(350,`span`,24),bT(351),LT(352,`extension`),Wa(353,`app-tabs`,null,5),cf(),Aa(355,`pre`)(356,`code`,25),bT(357,`
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionName: 'cats',
    }),
    MongooseModule.forRoot('mongodb://localhost/users', {
      connectionName: 'users',
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(358,`blockquote`,39)(359,`strong`),bT(360,`Notice`),cf(),bT(361,` Don't create multiple connections without a name or with the same name, otherwise they will override each other.
`),cf(),Aa(362,`p`),bT(363,`With this setup, you have to tell the `),Aa(364,`code`),bT(365,`MongooseModule.forFeature()`),cf(),bT(366,` method which connection to use:`),cf(),Aa(367,`app-copy-button`)(368,`pre`)(369,`code`,25),bT(370,`
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'cats'),
  ],
})
export class CatsModule {}
`),cf()()(),Aa(371,`p`),bT(372,`You can also inject the `),Aa(373,`code`),bT(374,`Connection`),cf(),bT(375,` object for a given connection:`),cf(),Aa(376,`app-copy-button`)(377,`pre`)(378,`code`,25),bT(379,`
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectConnection('cats') private connection: Connection) {}
}
`),cf()()(),Aa(380,`p`),bT(381,`To inject a given `),Aa(382,`code`),bT(383,`Connection`),cf(),bT(384,` into a custom provider (for example, a factory provider), use the `),Aa(385,`code`),bT(386,`getConnectionToken()`),cf(),bT(387,` function, passing the name of the connection as an argument:`),cf(),Aa(388,`app-copy-button`)(389,`pre`)(390,`code`,25),bT(391,`
{
  provide: CatsService,
  useFactory: (catsConnection: Connection) => {
    return new CatsService(catsConnection);
  },
  inject: [getConnectionToken('cats')],
}
`),cf()()(),Aa(392,`p`),bT(393,`To inject a model from a named connection, pass the connection name as the second argument to the `),Aa(394,`code`),bT(395,`@InjectModel()`),cf(),bT(396,` decorator:`),cf(),Aa(397,`app-copy-button`,23)(398,`span`,24),bT(399),LT(400,`extension`),Wa(401,`app-tabs`,null,6),cf(),Aa(403,`pre`)(404,`code`,25),bT(405,`
@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name, 'cats') private catModel: Model<Cat>) {}
}
`),cf()(),Aa(406,`pre`)(407,`code`,25),bT(408,`
@Injectable()
@Dependencies(getModelToken(Cat.name, 'cats'))
export class CatsService {
  constructor(catModel) {
    this.catModel = catModel;
  }
}
`),cf()()(),Aa(409,`h4`,40)(410,`span`),bT(411,`Hooks (middleware)`),cf()(),Aa(412,`p`),bT(413,`Middleware (also called pre and post hooks) are functions that are passed control during the execution of asynchronous functions. Middleware is specified at the schema level and is useful for writing plugins (see the `),Aa(414,`a`,41),bT(415,`Mongoose middleware documentation`),cf(),bT(416,`). Calling `),Aa(417,`code`),bT(418,`pre()`),cf(),bT(419,` or `),Aa(420,`code`),bT(421,`post()`),cf(),bT(422,` after compiling a model does not work in Mongoose. To register a hook `),Aa(423,`strong`),bT(424,`before`),cf(),bT(425,` model registration, use the `),Aa(426,`code`),bT(427,`forFeatureAsync()`),cf(),bT(428,` method of the `),Aa(429,`code`),bT(430,`MongooseModule`),cf(),bT(431,` along with a factory provider (i.e., `),Aa(432,`code`),bT(433,`useFactory`),cf(),bT(434,`). With this technique, you can access a schema object, then use its `),Aa(435,`code`),bT(436,`pre()`),cf(),bT(437,` or `),Aa(438,`code`),bT(439,`post()`),cf(),bT(440,` method to register a hook on that schema. For example:`),cf(),Aa(441,`app-copy-button`)(442,`pre`)(443,`code`,25),bT(444,`
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Cat.name,
        useFactory: () => {
          const schema = CatSchema;
          schema.pre('save', function () {
            console.log('Hello from pre save');
          });
          return schema;
        },
      },
    ]),
  ],
})
export class AppModule {}
`),cf()()(),Aa(445,`p`),bT(446,`Like other `),Aa(447,`a`,42),bT(448,`factory providers`),cf(),bT(449,`, the factory function can be `),Aa(450,`code`),bT(451,`async`),cf(),bT(452,` and can inject dependencies through `),Aa(453,`code`),bT(454,`inject`),cf(),bT(455,`.`),cf(),Aa(456,`app-copy-button`)(457,`pre`)(458,`code`,25),bT(459,`
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Cat.name,
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
          const schema = CatSchema;
          schema.pre('save', function() {
            console.log(
              \`\${configService.get('APP_NAME')}: Hello from pre save\`,
            );
          });
          return schema;
        },
        inject: [ConfigService],
      },
    ]),
  ],
})
export class AppModule {}
`),cf()()(),Aa(460,`h4`,43)(461,`span`),bT(462,`Plugins`),cf()(),Aa(463,`p`),bT(464,`To register a `),Aa(465,`a`,44),bT(466,`plugin`),cf(),bT(467,` for a given schema, use the `),Aa(468,`code`),bT(469,`forFeatureAsync()`),cf(),bT(470,` method:`),cf(),Aa(471,`app-copy-button`)(472,`pre`)(473,`code`,25),bT(474,`
import autopopulate from 'mongoose-autopopulate';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Cat.name,
        useFactory: () => {
          const schema = CatSchema;
          schema.plugin(autopopulate);
          return schema;
        },
      },
    ]),
  ],
})
export class AppModule {}
`),cf()()(),Aa(475,`p`),bT(476,`To register a plugin for all schemas at once, call the `),Aa(477,`code`),bT(478,`.plugin()`),cf(),bT(479,` method of the `),Aa(480,`code`),bT(481,`Connection`),cf(),bT(482,` object. You must access the connection before models are created; to do this, use the `),Aa(483,`code`),bT(484,`connectionFactory`),cf(),bT(485,` option:`),cf(),Aa(486,`app-copy-button`,23)(487,`span`,24),bT(488),LT(489,`extension`),Wa(490,`app-tabs`,null,7),cf(),Aa(492,`pre`)(493,`code`,25),bT(494,`
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import autopopulate from 'mongoose-autopopulate';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionFactory: (connection) => {
        connection.plugin(autopopulate);
        return connection;
      }
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(495,`h4`,45)(496,`span`),bT(497,`Discriminators`),cf()(),Aa(498,`p`)(499,`a`,46),bT(500,`Discriminators`),cf(),bT(501,` are a schema inheritance mechanism. They enable you to have multiple models with overlapping schemas on top of the same underlying MongoDB collection.`),cf(),Aa(502,`p`),bT(503,`Suppose you want to track different types of events in a single collection. Every event has a timestamp.`),cf(),Aa(504,`app-copy-button`,23)(505,`span`,24),bT(506),LT(507,`extension`),Wa(508,`app-tabs`,null,8),cf(),Aa(510,`pre`)(511,`code`,25),bT(512,`
@Schema({ discriminatorKey: 'kind' })
export class Event {
  @Prop({
    type: String,
    required: true,
    enum: [ClickedLinkEvent.name, SignUpEvent.name],
  })
  kind: string;

  @Prop({ type: Date, required: true })
  time: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
`),cf()()(),Aa(513,`blockquote`,30)(514,`strong`),bT(515,`Hint`),cf(),bT(516,` Mongoose tells discriminator models apart by the "discriminator key", which is `),Aa(517,`code`),bT(518,`__t`),cf(),bT(519,` by default. Mongoose adds a String path called `),Aa(520,`code`),bT(521,`__t`),cf(),bT(522,` to your schemas and uses it to track which discriminator a document is an instance of.
You may also use the `),Aa(523,`code`),bT(524,`discriminatorKey`),cf(),bT(525,` option to define the path for discrimination.
`),cf(),Aa(526,`p`)(527,`code`),bT(528,`SignUpEvent`),cf(),bT(529,` and `),Aa(530,`code`),bT(531,`ClickedLinkEvent`),cf(),bT(532,` instances will be stored in the same collection as generic events.`),cf(),Aa(533,`p`),bT(534,`Now, let's define the `),Aa(535,`code`),bT(536,`ClickedLinkEvent`),cf(),bT(537,` class, as follows:`),cf(),Aa(538,`app-copy-button`,23)(539,`span`,24),bT(540),LT(541,`extension`),Wa(542,`app-tabs`,null,9),cf(),Aa(544,`pre`)(545,`code`,25),bT(546,`
@Schema()
export class ClickedLinkEvent {
  kind: string;
  time: Date;

  @Prop({ type: String, required: true })
  url: string;
}

export const ClickedLinkEventSchema = SchemaFactory.createForClass(ClickedLinkEvent);
`),cf()()(),Aa(547,`p`),bT(548,`And `),Aa(549,`code`),bT(550,`SignUpEvent`),cf(),bT(551,` class:`),cf(),Aa(552,`app-copy-button`,23)(553,`span`,24),bT(554),LT(555,`extension`),Wa(556,`app-tabs`,null,10),cf(),Aa(558,`pre`)(559,`code`,25),bT(560,`
@Schema()
export class SignUpEvent {
  kind: string;
  time: Date;

  @Prop({ type: String, required: true })
  user: string;
}

export const SignUpEventSchema = SchemaFactory.createForClass(SignUpEvent);
`),cf()()(),Aa(561,`p`),bT(562,`With this in place, use the `),Aa(563,`code`),bT(564,`discriminators`),cf(),bT(565,` option to register discriminators for a given schema. It works with both `),Aa(566,`code`),bT(567,`MongooseModule.forFeature()`),cf(),bT(568,` and `),Aa(569,`code`),bT(570,`MongooseModule.forFeatureAsync()`),cf(),bT(571,`:`),cf(),Aa(572,`app-copy-button`,23)(573,`span`,24),bT(574),LT(575,`extension`),Wa(576,`app-tabs`,null,11),cf(),Aa(578,`pre`)(579,`code`,25),bT(580,`
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
        discriminators: [
          { name: ClickedLinkEvent.name, schema: ClickedLinkEventSchema },
          { name: SignUpEvent.name, schema: SignUpEventSchema },
        ],
      },
    ]),
  ]
})
export class EventsModule {}
`),cf()()(),Aa(581,`h4`,47)(582,`span`),bT(583,`Testing`),cf()(),Aa(584,`p`),bT(585,`When unit testing an application, you usually want to avoid any database connection, which keeps test suites simpler to set up and faster to execute. However, your classes might depend on models that are pulled from the connection instance. To resolve these classes, create mock models.`),cf(),Aa(586,`p`),bT(587,`To make this easier, the `),Aa(588,`code`),bT(589,`@nestjs/mongoose`),cf(),bT(590,` package exposes a `),Aa(591,`code`),bT(592,`getModelToken()`),cf(),bT(593,` function that returns a prepared `),Aa(594,`a`,48),bT(595,`injection token`),cf(),bT(596,` based on a model name. Using this token, you can provide a mock implementation using any of the standard `),Aa(597,`a`,49),bT(598,`custom provider`),cf(),bT(599,` techniques, including `),Aa(600,`code`),bT(601,`useClass`),cf(),bT(602,`, `),Aa(603,`code`),bT(604,`useValue`),cf(),bT(605,`, and `),Aa(606,`code`),bT(607,`useFactory`),cf(),bT(608,`. For example:`),cf(),Aa(609,`app-copy-button`)(610,`pre`)(611,`code`,25),bT(612,`
@Module({
  providers: [
    CatsService,
    {
      provide: getModelToken(Cat.name),
      useValue: catModel,
    },
  ],
})
export class CatsModule {}
`),cf()()(),Aa(613,`p`),bT(614,`In this example, a hardcoded `),Aa(615,`code`),bT(616,`catModel`),cf(),bT(617,` (object instance) is provided whenever any consumer injects a `),Aa(618,`code`),bT(619,`Model<Cat>`),cf(),bT(620,` using the `),Aa(621,`code`),bT(622,`@InjectModel()`),cf(),bT(623,` decorator.`),cf(),Aa(624,`p`),Wa(625,`app-banner-courses`),cf(),Aa(626,`h4`,50)(627,`span`),bT(628,`Async configuration`),cf()(),Aa(629,`p`),bT(630,`When you need to pass module options asynchronously instead of statically, use the `),Aa(631,`code`),bT(632,`forRootAsync()`),cf(),bT(633,` method. As with most dynamic modules, Nest provides several techniques for async configuration.`),cf(),Aa(634,`p`),bT(635,`One technique is to use a factory function:`),cf(),Aa(636,`app-copy-button`)(637,`pre`)(638,`code`,25),bT(639,`
MongooseModule.forRootAsync({
  useFactory: () => ({
    uri: 'mongodb://localhost/nest',
  }),
});
`),cf()()(),Aa(640,`p`),bT(641,`Like other `),Aa(642,`a`,42),bT(643,`factory providers`),cf(),bT(644,`, the factory function can be `),Aa(645,`code`),bT(646,`async`),cf(),bT(647,` and can inject dependencies through `),Aa(648,`code`),bT(649,`inject`),cf(),bT(650,`.`),cf(),Aa(651,`app-copy-button`)(652,`pre`)(653,`code`,25),bT(654,`
MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URI'),
  }),
  inject: [ConfigService],
});
`),cf()()(),Aa(655,`p`),bT(656,`Alternatively, you can configure the `),Aa(657,`code`),bT(658,`MongooseModule`),cf(),bT(659,` using a class instead of a factory, as shown below:`),cf(),Aa(660,`app-copy-button`)(661,`pre`)(662,`code`,25),bT(663,`
MongooseModule.forRootAsync({
  useClass: MongooseConfigService,
});
`),cf()()(),Aa(664,`p`),bT(665,`The construction above instantiates `),Aa(666,`code`),bT(667,`MongooseConfigService`),cf(),bT(668,` inside `),Aa(669,`code`),bT(670,`MongooseModule`),cf(),bT(671,`, using it to create the required options object. In this example, the `),Aa(672,`code`),bT(673,`MongooseConfigService`),cf(),bT(674,` has to implement the `),Aa(675,`code`),bT(676,`MongooseOptionsFactory`),cf(),bT(677,` interface, as shown below. The `),Aa(678,`code`),bT(679,`MongooseModule`),cf(),bT(680,` calls the `),Aa(681,`code`),bT(682,`createMongooseOptions()`),cf(),bT(683,` method on the instantiated object of the supplied class.`),cf(),Aa(684,`app-copy-button`)(685,`pre`)(686,`code`,25),bT(687,`
@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb://localhost/nest',
    };
  }
}
`),cf()()(),Aa(688,`p`),bT(689,`To reuse an existing options provider instead of creating a private copy inside the `),Aa(690,`code`),bT(691,`MongooseModule`),cf(),bT(692,`, use the `),Aa(693,`code`),bT(694,`useExisting`),cf(),bT(695,` syntax. The provider must implement the `),Aa(696,`code`),bT(697,`MongooseOptionsFactory`),cf(),bT(698,` interface:`),cf(),Aa(699,`app-copy-button`)(700,`pre`)(701,`code`,25),bT(702,`
MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useExisting: ConfigService,
});
`),cf()()(),Aa(703,`h4`,51)(704,`span`),bT(705,`Connection events`),cf()(),Aa(706,`p`),bT(707,`You can listen to Mongoose `),Aa(708,`a`,52),bT(709,`connection events`),cf(),bT(710,` using the `),Aa(711,`code`),bT(712,`onConnectionCreate`),cf(),bT(713,` configuration option. Nest calls this function with each connection as soon as the connection is created, before it opens, so you can register listeners for the `),Aa(714,`code`),bT(715,`connected`),cf(),bT(716,`, `),Aa(717,`code`),bT(718,`open`),cf(),bT(719,`, `),Aa(720,`code`),bT(721,`disconnected`),cf(),bT(722,`, `),Aa(723,`code`),bT(724,`reconnected`),cf(),bT(725,`, and `),Aa(726,`code`),bT(727,`disconnecting`),cf(),bT(728,` events, as demonstrated below:`),cf(),Aa(729,`app-copy-button`)(730,`pre`)(731,`code`,25),bT(732,`
MongooseModule.forRoot('mongodb://localhost/test', {
  onConnectionCreate: (connection: Connection) => {
    connection.on('connected', () => console.log('connected'));
    connection.on('open', () => console.log('open'));
    connection.on('disconnected', () => console.log('disconnected'));
    connection.on('reconnected', () => console.log('reconnected'));
    connection.on('disconnecting', () => console.log('disconnecting'));

    return connection;
  },
}),
`),cf()()(),Aa(733,`p`),bT(734,`This code snippet establishes a connection to a MongoDB database at `),Aa(735,`code`),bT(736,`mongodb://localhost/test`),cf(),bT(737,`. The `),Aa(738,`code`),bT(739,`onConnectionCreate`),cf(),bT(740,` option sets up event listeners for monitoring the connection's status:`),cf(),Aa(741,`ul`)(742,`li`)(743,`code`),bT(744,`connected`),cf(),bT(745,`: Triggered when the connection is successfully established.`),cf(),Aa(746,`li`)(747,`code`),bT(748,`open`),cf(),bT(749,`: Fires when the connection is fully opened and ready for operations.`),cf(),Aa(750,`li`)(751,`code`),bT(752,`disconnected`),cf(),bT(753,`: Called when the connection is lost.`),cf(),Aa(754,`li`)(755,`code`),bT(756,`reconnected`),cf(),bT(757,`: Invoked when the connection is re-established after being disconnected.`),cf(),Aa(758,`li`)(759,`code`),bT(760,`disconnecting`),cf(),bT(761,`: Occurs when the connection is in the process of closing.`),cf()(),Aa(762,`p`),bT(763,`You can also use the `),Aa(764,`code`),bT(765,`onConnectionCreate`),cf(),bT(766,` property in async configurations created with `),Aa(767,`code`),bT(768,`MongooseModule.forRootAsync()`),cf(),bT(769,`:`),cf(),Aa(770,`app-copy-button`)(771,`pre`)(772,`code`,25),bT(773,`
MongooseModule.forRootAsync({
  useFactory: () => ({
    uri: 'mongodb://localhost/test',
    onConnectionCreate: (connection: Connection) => {
      // Register event listeners here
      return connection;
    },
  }),
}),
`),cf()()(),Aa(774,`h4`,53)(775,`span`),bT(776,`Subdocuments`),cf()(),Aa(777,`p`),bT(778,`To nest subdocuments within a parent document, define your schemas as follows:`),cf(),Aa(779,`app-copy-button`,23)(780,`span`,24),bT(781),LT(782,`extension`),Wa(783,`app-tabs`,null,12),cf(),Aa(785,`pre`)(786,`code`,25),bT(787,`
@Schema()
export class Name {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export const NameSchema = SchemaFactory.createForClass(Name);
`),cf()()(),Aa(788,`p`),bT(789,`And then reference the subdocument in the parent schema:`),cf(),Aa(790,`app-copy-button`,23)(791,`span`,24),bT(792),LT(793,`extension`),Wa(794,`app-tabs`,null,13),cf(),Aa(796,`pre`)(797,`code`,25),bT(798,`
@Schema()
export class Person {
  @Prop(NameSchema)
  name: Name;
}

export const PersonSchema = SchemaFactory.createForClass(Person);

export type PersonDocumentOverride = {
  name: Types.Subdocument<Types.ObjectId> & Name;
};

export type PersonDocument = HydratedDocument<Person, PersonDocumentOverride>;
`),cf()()(),Aa(799,`p`),bT(800,`To include multiple subdocuments, use an array of subdocuments. Make sure to override the type of the property accordingly:`),cf(),Aa(801,`app-copy-button`,23)(802,`span`,24),bT(803),LT(804,`extension`),Wa(805,`app-tabs`,null,14),cf(),Aa(807,`pre`)(808,`code`,25),bT(809,`
@Schema()
export class Person {
  @Prop([NameSchema])
  name: Name[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);

export type PersonDocumentOverride = {
  name: Types.DocumentArray<Name>;
};

export type PersonDocument = HydratedDocument<Person, PersonDocumentOverride>;
`),cf()()(),Aa(810,`h4`,54)(811,`span`),bT(812,`Virtuals`),cf()(),Aa(813,`p`),bT(814,`In Mongoose, a `),Aa(815,`strong`),bT(816,`virtual`),cf(),bT(817,` is a property that exists on a document but is not persisted to MongoDB. Instead, it is computed dynamically whenever it's accessed. Virtuals are typically used for derived or computed values, like combining fields (e.g., creating a `),Aa(818,`code`),bT(819,`fullName`),cf(),bT(820,` property by concatenating `),Aa(821,`code`),bT(822,`firstName`),cf(),bT(823,` and `),Aa(824,`code`),bT(825,`lastName`),cf(),bT(826,`), or for creating properties that rely on existing data in the document.`),cf(),Aa(827,`app-copy-button`)(828,`pre`)(829,`code`,55),bT(830,`
class Person {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Virtual({
    get: function (this: Person) {
      return \`\${this.firstName} \${this.lastName}\`;
    },
  })
  fullName: string;
}
`),cf()()(),Aa(831,`blockquote`,30)(832,`strong`),bT(833,`Hint`),cf(),bT(834,` The `),Aa(835,`code`),bT(836,`@Virtual()`),cf(),bT(837,` decorator is imported from the `),Aa(838,`code`),bT(839,`@nestjs/mongoose`),cf(),bT(840,` package.
`),cf(),Aa(841,`p`),bT(842,`In this example, the `),Aa(843,`code`),bT(844,`fullName`),cf(),bT(845,` virtual is derived from `),Aa(846,`code`),bT(847,`firstName`),cf(),bT(848,` and `),Aa(849,`code`),bT(850,`lastName`),cf(),bT(851,`. Even though it behaves like a normal property when accessed, it's never saved to the MongoDB document.`),cf(),Aa(852,`h4`,56)(853,`span`),bT(854,`Example`),cf()(),Aa(855,`p`),bT(856,`A working example is available in the `),Aa(857,`a`,57),bT(858,`nestjs/nest repository`),cf(),bT(859,`.`),cf()(),Aa(860,`a`,58),Wa(861,`i`,59),Aa(862,`span`),bT(863,`Edit on GitHub`),cf()()()),c&2){let w=tT(40),y=tT(78),k=tT(254),j=tT(294),T=tT(354),v=tT(402),A=tT(491),z=tT(509),R=tT(543),q=tT(557),O=tT(577),K=tT(784),G=tT(795),$=tT(806);zC(37),hf(` `,jT(38,22,`app.module`,w.isJsActive),`
`),zC(38),hf(` `,jT(76,25,`schemas/cat.schema`,y.isJsActive),`
`),zC(176),hf(` `,jT(252,28,`cats.module`,k.isJsActive),`
`),zC(40),hf(` `,jT(292,31,`cats.service`,j.isJsActive),`
`),zC(4),zy(`hide`,j.isJsActive),zC(3),zy(`hide`,!j.isJsActive),zC(53),hf(` `,jT(352,34,`app.module`,T.isJsActive),`
`),zC(48),hf(` `,jT(400,37,`cats.service`,v.isJsActive),`
`),zC(4),zy(`hide`,v.isJsActive),zC(3),zy(`hide`,!v.isJsActive),zC(82),hf(` `,jT(489,40,`app.module`,A.isJsActive),`
`),zC(18),hf(` `,jT(507,43,`event.schema`,z.isJsActive),`
`),zC(34),hf(` `,jT(541,46,`click-link-event.schema`,R.isJsActive),`
`),zC(14),hf(` `,jT(555,49,`sign-up-event.schema`,q.isJsActive),`
`),zC(20),hf(` `,jT(575,52,`event.module`,O.isJsActive),`
`),zC(207),hf(` `,jT(782,55,`name.schema`,K.isJsActive),`
`),zC(11),hf(` `,jT(793,58,`person.schema`,G.isJsActive),`
`),zC(11),hf(` `,jT(804,61,`person.schema`,$.isJsActive),`
`)}},dependencies:[Jc,ln,u,Lt,l,g],encapsulation:2})}return m})();var W=(()=>{class m extends xt{static ɵfac=(()=>{let d;return function(u){return(d||(d=im(m)))(u||m)}})();static ɵcmp=ef({type:m,selectors:[[`app-data-overview`]],features:[xy],decls:93,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`overview`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://expressjs.com/en/guide/database-integration.html`],[`routerLink`,`/providers`],[`routerLink`,`/data/typeorm`],[`routerLink`,`/data/drizzle`],[`routerLink`,`/data/mongodb`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mongoosejs.com/`],[`routerLink`,`/data/prisma`],[`routerLink`,`/data/mikroorm`],[`routerLink`,`/data/sequelize`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://dev.to/nestjs/build-a-nestjs-module-for-knex-js-or-other-resource-based-libraries-in-5-minutes-12an`],[`routerLink`,`/data/caching`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/data/overview.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Overview`),cf(),Aa(5,`p`),bT(6,`Nest is database-agnostic, so you can integrate it with any SQL or NoSQL database. At the most basic level, connecting Nest to a database means loading the appropriate Node.js driver for that database, just as you would with `),Aa(7,`a`,4),bT(8,`Express`),cf(),bT(9,` or Fastify, and making the client available to the rest of the application through a `),Aa(10,`a`,5),bT(11,`provider`),cf(),bT(12,`.`),cf(),Aa(13,`p`),bT(14,`Most applications work at a higher level of abstraction, with an ORM or a query builder. The chapters in this category cover the following integrations:`),cf(),Aa(15,`ul`)(16,`li`)(17,`strong`)(18,`a`,6),bT(19,`TypeORM`),cf()(),bT(20,` (`),Aa(21,`code`),bT(22,`@nestjs/typeorm`),cf(),bT(23,`): an ORM with decorator-based entities and the repository pattern. It supports most SQL databases, as well as MongoDB.`),cf(),Aa(24,`li`)(25,`strong`)(26,`a`,7),bT(27,`Drizzle`),cf()(),bT(28,` (`),Aa(29,`code`),bT(30,`@nestjs/drizzle`),cf(),bT(31,`): a lightweight, TypeScript-first ORM. You declare tables with plain functions and write queries with a SQL-like query builder, and Drizzle infers every result type from the schema.`),cf(),Aa(32,`li`)(33,`strong`)(34,`a`,8),bT(35,`MongoDB`),cf()(),bT(36,` (`),Aa(37,`code`),bT(38,`@nestjs/mongoose`),cf(),bT(39,`): `),Aa(40,`a`,9),bT(41,`Mongoose`),cf(),bT(42,` schemas and models for MongoDB.`),cf(),Aa(43,`li`)(44,`strong`)(45,`a`,10),bT(46,`Prisma`),cf()(),bT(47,`: an ORM that generates a type-safe client from a schema file. It has no Nest-specific package: you expose the generated client through a provider.`),cf(),Aa(48,`li`)(49,`strong`)(50,`a`,11),bT(51,`MikroORM`),cf()(),bT(52,` (`),Aa(53,`code`),bT(54,`@mikro-orm/nestjs`),cf(),bT(55,`, maintained by the MikroORM team): an ORM based on the Data Mapper, Unit of Work, and Identity Map patterns.`),cf(),Aa(56,`li`)(57,`strong`)(58,`a`,12),bT(59,`Sequelize`),cf()(),bT(60,` (`),Aa(61,`code`),bT(62,`@nestjs/sequelize`),cf(),bT(63,`): a promise-based ORM for SQL databases. With the `),Aa(64,`code`),bT(65,`sequelize-typescript`),cf(),bT(66,` package, you declare models with decorators.`),cf()(),Aa(67,`p`),bT(68,`The Nest team maintains the `),Aa(69,`code`),bT(70,`@nestjs/typeorm`),cf(),bT(71,`, `),Aa(72,`code`),bT(73,`@nestjs/drizzle`),cf(),bT(74,`, `),Aa(75,`code`),bT(76,`@nestjs/mongoose`),cf(),bT(77,`, and `),Aa(78,`code`),bT(79,`@nestjs/sequelize`),cf(),bT(80,` packages. They add Nest-specific features, such as repository or model injection, testability, and asynchronous configuration.`),cf(),Aa(81,`p`),bT(82,`You can also use any other library directly. For example, see how to `),Aa(83,`a`,13),bT(84,`build a Nest module for Knex.js`),cf(),bT(85,`. To cache query results, see `),Aa(86,`a`,14),bT(87,`Caching`),cf(),bT(88,`.`),cf()(),Aa(89,`a`,15),Wa(90,`i`,16),Aa(91,`span`),bT(92,`Edit on GitHub`),cf()()())},dependencies:[Jc],encapsulation:2})}return m})();var Q=(()=>{class m extends xt{static ɵfac=(()=>{let d;return function(u){return(d||(d=im(m)))(u||m)}})();static ɵcmp=ef({type:m,selectors:[[`app-prisma`]],features:[xy],decls:880,vars:0,consts:[[`contentReference`,``],[1,`content`],[1,`content-inner`],[`id`,`prisma`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/prisma/prisma`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://knexjs.org/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://sequelize.org/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/orm/reference/supported-databases`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/orm/more/comparisons/prisma-and-typeorm#type-safety`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://sqlite.org/`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/prisma-postgres`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-postgres`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/guides/migrate-from-typeorm`],[`appAnchor`,``,`id`,`installation`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/orm/tools/prisma-cli`],[1,`language-bash`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/motdotla/dotenv`],[`appAnchor`,``,`id`,`set-the-generator-output-path`],[1,`language-groovy`],[`appAnchor`,``,`id`,`configure-the-module-format`],[`appAnchor`,``,`id`,`set-the-database-connection`],[`routerLink`,`/application/configuration`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/orm/reference/connection-urls`],[`appAnchor`,``,`id`,`models-and-migrations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/orm/prisma-migrate/getting-started`],[1,`language-sql`],[`appAnchor`,``,`id`,`generate-prisma-client`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/orm/prisma-client/queries/crud`],[`appAnchor`,``,`id`,`prismaservice`],[`href`,`#connection-lifecycle`],[`appAnchor`,``,`id`,`connection-lifecycle`],[`href`,`/fundamentals/lifecycle-events#application-shutdown`],[`appAnchor`,``,`id`,`prismamodule`],[`href`,`/modules#global-modules`],[`appAnchor`,``,`id`,`querying-from-services`],[`routerLink`,`/application/validation`],[`appAnchor`,``,`id`,`transactions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/docs/orm/prisma-client/queries/transactions`],[`href`,`/recipes/async-local-storage#nestjs-cls`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://papooch.github.io/nestjs-cls/plugins/available-plugins/transactional/prisma-adapter`],[`appAnchor`,``,`id`,`testing`],[`routerLink`,`/fundamentals/custom-providers`],[`routerLink`,`/fundamentals/testing`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/prisma/prisma-examples/tree/b53fad046a6d55f0090ddce9fd17ec3f9b95cab3/orm/nest`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/prisma/prisma-examples/tree/b53fad046a6d55f0090ddce9fd17ec3f9b95cab3/orm/nest-graphql`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/prisma/prisma-examples/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.prisma.io/nestjs`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/data/prisma.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){c&1&&(Aa(0,`div`,1,0)(2,`div`,2)(3,`h3`,3),bT(4,`Prisma`),cf(),Aa(5,`p`)(6,`a`,4),bT(7,`Prisma`),cf(),bT(8,` is an `),Aa(9,`a`,5),bT(10,`open-source`),cf(),bT(11,` ORM for Node.js and TypeScript. You can use it as an `),Aa(12,`strong`),bT(13,`alternative`),cf(),bT(14,` to writing plain SQL or to other database access tools, such as SQL query builders (like `),Aa(15,`a`,6),bT(16,`knex.js`),cf(),bT(17,`) or other ORMs (like `),Aa(18,`a`,7),bT(19,`TypeORM`),cf(),bT(20,` and `),Aa(21,`a`,8),bT(22,`Sequelize`),cf(),bT(23,`). Prisma supports PostgreSQL, MySQL, SQL Server, SQLite, CockroachDB, and MongoDB (see `),Aa(24,`a`,9),bT(25,`supported databases`),cf(),bT(26,`). This chapter uses Prisma ORM 7, which works with the SQL databases; MongoDB projects stay on Prisma ORM 6 for now.`),cf(),Aa(27,`p`),bT(28,`While you can use Prisma with plain JavaScript, it embraces TypeScript and provides a level of type safety that goes beyond the guarantees of other ORMs in the TypeScript ecosystem. See the `),Aa(29,`a`,10),bT(30,`comparison of the type safety guarantees of Prisma and TypeORM`),cf(),bT(31,` for details.`),cf(),Aa(32,`p`),bT(33,`Prisma has no Nest-specific package. Instead, you generate a type-safe client (Prisma Client) from your Prisma schema, wrap it in a provider, and inject that provider wherever you need database access. This chapter sets up that integration with a `),Aa(34,`a`,11),bT(35,`SQLite`),cf(),bT(36,` database, which needs no database server, and notes the differences for PostgreSQL, MySQL, and SQL Server along the way.`),cf(),Aa(37,`blockquote`,12)(38,`strong`),bT(39,`Note`),cf(),bT(40,` For an overview of how Prisma works, follow the `),Aa(41,`a`,13),bT(42,`Quickstart`),cf(),bT(43,` or read the `),Aa(44,`a`,14),bT(45,`Introduction`),cf(),bT(46,` in the `),Aa(47,`a`,15),bT(48,`Prisma documentation`),cf(),bT(49,`. To add Prisma to a project that already has a database, follow the guide for `),Aa(50,`a`,16),bT(51,`adding Prisma to an existing project`),cf(),bT(52,`. If you are migrating from TypeORM, read `),Aa(53,`a`,17),bT(54,`Migrating from TypeORM to Prisma`),cf(),bT(55,`.
`),cf(),Aa(56,`h4`,18)(57,`span`),bT(58,`Installation`),cf()(),Aa(59,`p`),bT(60,`Install the `),Aa(61,`a`,19),bT(62,`Prisma CLI`),cf(),bT(63,` and `),Aa(64,`code`),bT(65,`dotenv`),cf(),bT(66,` as development dependencies, then install Prisma Client and the driver adapter for your database. For SQLite, the `),Aa(67,`code`),bT(68,`@prisma/adapter-better-sqlite3`),cf(),bT(69,` adapter also installs the `),Aa(70,`code`),bT(71,`better-sqlite3`),cf(),bT(72,` driver:`),cf(),Aa(73,`pre`)(74,`code`,20),bT(75,`
$ npm install prisma@7 dotenv --save-dev
$ npm install @prisma/client@7 @prisma/adapter-better-sqlite3
`),cf()(),Aa(76,`blockquote`,21)(77,`strong`),bT(78,`Warning`),cf(),bT(79,` Install Prisma ORM 7 explicitly, as shown above. At the time of writing, the `),Aa(80,`code`),bT(81,`latest`),cf(),bT(82,` tag of the `),Aa(83,`code`),bT(84,`prisma`),cf(),bT(85,` package on npm points to a Prisma 8 pre-release, which is a different CLI that doesn't provide the `),Aa(86,`code`),bT(87,`prisma migrate`),cf(),bT(88,` and `),Aa(89,`code`),bT(90,`prisma generate`),cf(),bT(91,` commands used in this chapter. Keep `),Aa(92,`code`),bT(93,`prisma`),cf(),bT(94,` and `),Aa(95,`code`),bT(96,`@prisma/client`),cf(),bT(97,` on the same major version.
`),cf(),Aa(98,`details`)(99,`summary`),bT(100,`Expand if you're using PostgreSQL, MySQL, SQL Server, or Azure SQL`),cf(),Aa(101,`p`),bT(102,`Install the adapter for your database instead of `),Aa(103,`code`),bT(104,`@prisma/adapter-better-sqlite3`),cf(),bT(105,`. Each adapter package includes its database driver.`),cf(),Aa(106,`ul`)(107,`li`),bT(108,`For PostgreSQL:`),cf()(),Aa(109,`pre`)(110,`code`,20),bT(111,`
$ npm install @prisma/adapter-pg
`),cf()(),Aa(112,`ul`)(113,`li`),bT(114,`For MySQL (and MariaDB):`),cf()(),Aa(115,`pre`)(116,`code`,20),bT(117,`
$ npm install @prisma/adapter-mariadb
`),cf()(),Aa(118,`ul`)(119,`li`),bT(120,`For SQL Server and Azure SQL:`),cf()(),Aa(121,`pre`)(122,`code`,20),bT(123,`
$ npm install @prisma/adapter-mssql
`),cf()()(),Aa(124,`p`),bT(125,`Next, create the initial Prisma setup with the `),Aa(126,`code`),bT(127,`init`),cf(),bT(128,` command. Prefix Prisma CLI commands with `),Aa(129,`code`),bT(130,`npx`),cf(),bT(131,` so that they run the version installed in your project:`),cf(),Aa(132,`pre`)(133,`code`,20),bT(134,`
$ npx prisma init --datasource-provider sqlite --output ../src/generated/prisma
`),cf()(),Aa(135,`p`),bT(136,`This command creates the following files:`),cf(),Aa(137,`ul`)(138,`li`)(139,`code`),bT(140,`prisma/schema.prisma`),cf(),bT(141,`: Contains your database schema, including the data source provider and the Prisma Client generator`),cf(),Aa(142,`li`)(143,`code`),bT(144,`prisma7.config.ts`),cf(),bT(145,`: The Prisma configuration file, created in the project root. It sets the location of the schema and migrations, and reads the database connection URL from the `),Aa(146,`code`),bT(147,`DATABASE_URL`),cf(),bT(148,` environment variable. Prisma ORM releases before 7.10 name this file `),Aa(149,`code`),bT(150,`prisma.config.ts`),cf(),bT(151,`, which Prisma still recognizes.`),cf(),Aa(152,`li`)(153,`code`),bT(154,`.env`),cf(),bT(155,`: A `),Aa(156,`a`,22),bT(157,`dotenv`),cf(),bT(158,` file that stores the database connection URL in the `),Aa(159,`code`),bT(160,`DATABASE_URL`),cf(),bT(161,` environment variable`),cf()(),Aa(162,`p`),bT(163,`It also adds `),Aa(164,`code`),bT(165,`.env`),cf(),bT(166,` and the generated client directory to your `),Aa(167,`code`),bT(168,`.gitignore`),cf(),bT(169,` file.`),cf(),Aa(170,`h4`,23)(171,`span`),bT(172,`Set the generator output path`),cf()(),Aa(173,`p`),bT(174,`Prisma Client is generated into the directory set by the `),Aa(175,`code`),bT(176,`output`),cf(),bT(177,` field of the `),Aa(178,`code`),bT(179,`generator`),cf(),bT(180,` block, relative to the schema file. The `),Aa(181,`code`),bT(182,`--output`),cf(),bT(183,` option above places the client inside `),Aa(184,`code`),bT(185,`src`),cf(),bT(186,`, so that it's compiled along with the rest of your application. Without the option, `),Aa(187,`code`),bT(188,`prisma init`),cf(),bT(189,` sets the path to `),Aa(190,`code`),bT(191,`../generated/prisma`),cf(),bT(192,`, which is outside of `),Aa(193,`code`),bT(194,`src`),cf(),bT(195,`. You can also set the path directly in your Prisma schema:`),cf(),Aa(196,`pre`)(197,`code`,24),bT(198,`
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}
`),cf()(),Aa(199,`p`),bT(200,`Because the generated client is excluded from version control, run `),Aa(201,`code`),bT(202,`npx prisma generate`),cf(),bT(203,` before you build the application in a fresh checkout or in CI.`),cf(),Aa(204,`h4`,25)(205,`span`),bT(206,`Configure the module format`),cf()(),Aa(207,`p`),bT(208,`Prisma infers the module format of the generated client from your `),Aa(209,`code`),bT(210,`tsconfig.json`),cf(),bT(211,` file. A NestJS project that uses ES modules (the default for new projects) gets an ES module client, so it needs no extra configuration.`),cf(),Aa(212,`p`),bT(213,`If your project uses CommonJS, set `),Aa(214,`code`),bT(215,`moduleFormat`),cf(),bT(216,` in the generator to `),Aa(217,`code`),bT(218,`cjs`),cf(),bT(219,`:`),cf(),Aa(220,`pre`)(221,`code`,24),bT(222,`
generator client {
  provider     = "prisma-client"
  output       = "../src/generated/prisma"
  moduleFormat = "cjs"
}
`),cf()(),Aa(223,`blockquote`,12)(224,`strong`),bT(225,`Note`),cf(),bT(226,` The generated ESM client relies on `),Aa(227,`code`),bT(228,`import.meta`),cf(),bT(229,`, which isn't available in CommonJS. Releases before Prisma ORM 7.10 generate an ES module whenever `),Aa(230,`code`),bT(231,`tsconfig.json`),cf(),bT(232,` sets `),Aa(233,`code`),bT(234,`module`),cf(),bT(235,` to `),Aa(236,`code`),bT(237,`nodenext`),cf(),bT(238,`, even in a CommonJS project, so set `),Aa(239,`code`),bT(240,`moduleFormat`),cf(),bT(241,` explicitly rather than relying on the inference.
`),cf(),Aa(242,`h4`,26)(243,`span`),bT(244,`Set the database connection`),cf()(),Aa(245,`p`),bT(246,`The `),Aa(247,`code`),bT(248,`datasource`),cf(),bT(249,` block in your `),Aa(250,`code`),bT(251,`schema.prisma`),cf(),bT(252,` file defines which database you use. With the `),Aa(253,`code`),bT(254,`--datasource-provider sqlite`),cf(),bT(255,` option, `),Aa(256,`code`),bT(257,`prisma init`),cf(),bT(258,` sets its `),Aa(259,`code`),bT(260,`provider`),cf(),bT(261,` field to `),Aa(262,`code`),bT(263,`sqlite`),cf(),bT(264,` (the default is `),Aa(265,`code`),bT(266,`postgresql`),cf(),bT(267,`):`),cf(),Aa(268,`pre`)(269,`code`,24),bT(270,`
datasource db {
  provider = "sqlite"
}
`),cf()(),Aa(271,`p`),bT(272,`The connection URL itself isn't part of the schema: the Prisma configuration file reads it from the `),Aa(273,`code`),bT(274,`DATABASE_URL`),cf(),bT(275,` environment variable, which `),Aa(276,`code`),bT(277,`prisma init`),cf(),bT(278,` sets in `),Aa(279,`code`),bT(280,`.env`),cf(),bT(281,`:`),cf(),Aa(282,`pre`)(283,`code`,20),bT(284,`
DATABASE_URL="file:./dev.db"
`),cf()(),Aa(285,`p`),bT(286,`A SQLite database is a plain file, so instead of a `),Aa(287,`em`),bT(288,`host`),cf(),bT(289,` and `),Aa(290,`em`),bT(291,`port`),cf(),bT(292,`, the connection URL points to a local file, in this case `),Aa(293,`code`),bT(294,`dev.db`),cf(),bT(295,` in the project root. Prisma creates the file when you run the first migration.`),cf(),Aa(296,`p`),bT(297,`The Prisma CLI loads `),Aa(298,`code`),bT(299,`.env`),cf(),bT(300,` through the `),Aa(301,`code`),bT(302,`dotenv/config`),cf(),bT(303,` import at the top of the Prisma configuration file. Your NestJS application doesn't load `),Aa(304,`code`),bT(305,`.env`),cf(),bT(306,` automatically, though. Install the `),Aa(307,`code`),bT(308,`@nestjs/config`),cf(),bT(309,` package and register the `),Aa(310,`a`,27)(311,`code`),bT(312,`ConfigModule`),cf()(),bT(313,` globally in your `),Aa(314,`code`),bT(315,`AppModule`),cf(),bT(316,`, so that `),Aa(317,`code`),bT(318,`PrismaService`),cf(),bT(319,` can read `),Aa(320,`code`),bT(321,`DATABASE_URL`),cf(),bT(322,` through `),Aa(323,`code`),bT(324,`ConfigService`),cf(),bT(325,`:`),cf(),Aa(326,`pre`)(327,`code`,20),bT(328,`
$ npm install @nestjs/config
`),cf()(),Aa(329,`app-copy-button`)(330,`pre`)(331,`code`,28),bT(332,`
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
`),cf()()(),Aa(333,`details`)(334,`summary`),bT(335,`Expand if you're using PostgreSQL, MySQL, SQL Server, or Azure SQL`),cf(),Aa(336,`p`),bT(337,`With PostgreSQL, MySQL, and SQL Server, the connection URL points to the `),Aa(338,`em`),bT(339,`database server`),cf(),bT(340,`. Pass the matching provider to `),Aa(341,`code`),bT(342,`prisma init`),cf(),bT(343,` (e.g., `),Aa(344,`code`),bT(345,`--datasource-provider postgresql`),cf(),bT(346,`), or change the `),Aa(347,`code`),bT(348,`provider`),cf(),bT(349,` field of the `),Aa(350,`code`),bT(351,`datasource`),cf(),bT(352,` block, and set `),Aa(353,`code`),bT(354,`DATABASE_URL`),cf(),bT(355,` in `),Aa(356,`code`),bT(357,`.env`),cf(),bT(358,`. See the `),Aa(359,`a`,29),bT(360,`connection URL reference`),cf(),bT(361,` for the required format.`),cf(),Aa(362,`p`)(363,`strong`),bT(364,`PostgreSQL`),cf()(),Aa(365,`pre`)(366,`code`,24),bT(367,`
datasource db {
  provider = "postgresql"
}
`),cf()(),Aa(368,`pre`)(369,`code`,20),bT(370,`
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
`),cf()(),Aa(371,`p`),bT(372,`Replace the uppercase placeholders with your database credentials. If you're unsure what to provide for the `),Aa(373,`code`),bT(374,`SCHEMA`),cf(),bT(375,` placeholder, it's most likely the default value `),Aa(376,`code`),bT(377,`public`),cf(),bT(378,`. If you don't have a PostgreSQL server yet, run `),Aa(379,`code`),bT(380,`npx prisma dev`),cf(),bT(381,` to start a local Prisma Postgres database in your terminal.`),cf(),Aa(382,`p`)(383,`strong`),bT(384,`MySQL`),cf()(),Aa(385,`pre`)(386,`code`,24),bT(387,`
datasource db {
  provider = "mysql"
}
`),cf()(),Aa(388,`pre`)(389,`code`,20),bT(390,`
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
`),cf()(),Aa(391,`p`),bT(392,`Replace the uppercase placeholders with your database credentials.`),cf(),Aa(393,`p`)(394,`strong`),bT(395,`Microsoft SQL Server / Azure SQL Server`),cf()(),Aa(396,`pre`)(397,`code`,24),bT(398,`
datasource db {
  provider = "sqlserver"
}
`),cf()(),Aa(399,`pre`)(400,`code`,20),bT(401,`
DATABASE_URL="sqlserver://HOST:PORT;database=DATABASE;user=USER;password=PASSWORD;encrypt=true"
`),cf()(),Aa(402,`p`),bT(403,`Replace the uppercase placeholders with your database credentials. If you're unsure what to provide for the `),Aa(404,`code`),bT(405,`encrypt`),cf(),bT(406,` option, it's most likely the default value `),Aa(407,`code`),bT(408,`true`),cf(),bT(409,`.`),cf()(),Aa(410,`h4`,30)(411,`span`),bT(412,`Models and migrations`),cf()(),Aa(413,`p`)(414,`a`,31),bT(415,`Prisma Migrate`),cf(),bT(416,` generates SQL migration files from the declarative data model in your Prisma schema. These migration files are fully customizable, so you can configure additional features of the underlying database or include additional commands (e.g., for seeding).`),cf(),Aa(417,`p`),bT(418,`This chapter uses two models. Add them to your `),Aa(419,`code`),bT(420,`schema.prisma`),cf(),bT(421,` file:`),cf(),Aa(422,`pre`)(423,`code`,24),bT(424,`
model User {
  id    Int     @default(autoincrement()) @id
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int      @default(autoincrement()) @id
  title     String
  content   String?
  published Boolean? @default(false)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  Int?
}
`),cf()(),Aa(425,`p`),bT(426,`Then generate the first migration and run it against the database:`),cf(),Aa(427,`pre`)(428,`code`,20),bT(429,`
$ npx prisma migrate dev --name init
`),cf()(),Aa(430,`p`),bT(431,`The `),Aa(432,`code`),bT(433,`prisma migrate dev`),cf(),bT(434,` command generates SQL files and runs them against the database directly. Because the database doesn't exist yet, it also creates the `),Aa(435,`code`),bT(436,`dev.db`),cf(),bT(437,` file. The migration files are created in the `),Aa(438,`code`),bT(439,`prisma`),cf(),bT(440,` directory:`),cf(),Aa(441,`pre`)(442,`code`,20),bT(443,`
$ tree prisma
prisma
\u251C\u2500\u2500 migrations
\u2502   \u251C\u2500\u2500 20201207100915_init
\u2502   \u2502   \u2514\u2500\u2500 migration.sql
\u2502   \u2514\u2500\u2500 migration_lock.toml
\u2514\u2500\u2500 schema.prisma
`),cf()(),Aa(444,`details`)(445,`summary`),bT(446,`Expand to view the generated SQL statements`),cf(),Aa(447,`p`),bT(448,`The following tables were created in your SQLite database:`),cf(),Aa(449,`pre`)(450,`code`,32),bT(451,`
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" INTEGER,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
`),cf()()(),Aa(452,`h4`,33)(453,`span`),bT(454,`Generate Prisma Client`),cf()(),Aa(455,`p`),bT(456,`Prisma Client is a type-safe database client that's `),Aa(457,`em`),bT(458,`generated`),cf(),bT(459,` from your Prisma schema. This approach lets Prisma Client expose `),Aa(460,`a`,34),bT(461,`CRUD`),cf(),bT(462,` operations that are `),Aa(463,`em`),bT(464,`tailored`),cf(),bT(465,` specifically to your models. Generate the client and its types with the `),Aa(466,`code`),bT(467,`generate`),cf(),bT(468,` command:`),cf(),Aa(469,`pre`)(470,`code`,20),bT(471,`
$ npx prisma generate
`),cf()(),Aa(472,`p`)(473,`code`),bT(474,`prisma migrate dev`),cf(),bT(475,` doesn't run this command for you. Whenever you change your schema, rerun `),Aa(476,`code`),bT(477,`prisma generate`),cf(),bT(478,` to keep the client and its types in sync.`),cf(),Aa(479,`p`),bT(480,`The generated `),Aa(481,`code`),bT(482,`client.ts`),cf(),bT(483,` file is the entry point of the client. It exports the `),Aa(484,`code`),bT(485,`PrismaClient`),cf(),bT(486,` class, a type for each model (e.g., `),Aa(487,`code`),bT(488,`User`),cf(),bT(489,` and `),Aa(490,`code`),bT(491,`Post`),cf(),bT(492,`), and the `),Aa(493,`code`),bT(494,`Prisma`),cf(),bT(495,` namespace, which contains the input types for queries (e.g., `),Aa(496,`code`),bT(497,`Prisma.UserCreateInput`),cf(),bT(498,`). Like any other relative import in an ESM project, import it with a `),Aa(499,`code`),bT(500,`.js`),cf(),bT(501,` extension (`),Aa(502,`code`),bT(503,`./generated/prisma/client.js`),cf(),bT(504,`).`),cf(),Aa(505,`h4`,35)(506,`span`),bT(507,`PrismaService`),cf()(),Aa(508,`p`),bT(509,`In a NestJS application, you expose Prisma Client through a provider. Create a `),Aa(510,`code`),bT(511,`PrismaService`),cf(),bT(512,` class that extends `),Aa(513,`code`),bT(514,`PrismaClient`),cf(),bT(515,`, so that the service has the full Prisma Client API, and pass the driver adapter for your database to the `),Aa(516,`code`),bT(517,`PrismaClient`),cf(),bT(518,` constructor. Prisma ORM 7 requires a driver adapter (or a Prisma Accelerate URL) to create a client.`),cf(),Aa(519,`p`),bT(520,`Create a `),Aa(521,`code`),bT(522,`prisma.service.ts`),cf(),bT(523,` file in the `),Aa(524,`code`),bT(525,`src/prisma`),cf(),bT(526,` directory:`),cf(),Aa(527,`app-copy-button`)(528,`pre`)(529,`code`,28),bT(530,`
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../generated/prisma/client.js';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(configService: ConfigService) {
    const adapter = new PrismaBetterSqlite3({
      url: configService.getOrThrow<string>('DATABASE_URL'),
    });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
`),cf()()(),Aa(531,`p`),bT(532,`The constructor reads `),Aa(533,`code`),bT(534,`DATABASE_URL`),cf(),bT(535,` through `),Aa(536,`code`),bT(537,`ConfigService`),cf(),bT(538,` before it calls `),Aa(539,`code`),bT(540,`super()`),cf(),bT(541,`. The `),Aa(542,`code`),bT(543,`getOrThrow()`),cf(),bT(544,` method throws an error if the variable isn't set, so a missing connection URL stops the application at startup. The `),Aa(545,`code`),bT(546,`onModuleInit()`),cf(),bT(547,` and `),Aa(548,`code`),bT(549,`onModuleDestroy()`),cf(),bT(550,` hooks manage the connection, as described in `),Aa(551,`a`,36),bT(552,`Connection lifecycle`),cf(),bT(553,`.`),cf(),Aa(554,`blockquote`,12)(555,`strong`),bT(556,`Hint`),cf(),bT(557,` If you don't use `),Aa(558,`code`),bT(559,`@nestjs/config`),cf(),bT(560,`, start Node.js with the `),Aa(561,`code`),bT(562,`--env-file=.env`),cf(),bT(563,` flag and read `),Aa(564,`code`),bT(565,`process.env.DATABASE_URL`),cf(),bT(566,` in the constructor instead.
`),cf(),Aa(567,`details`)(568,`summary`),bT(569,`Expand if you're using PostgreSQL, MySQL, SQL Server, or Azure SQL`),cf(),Aa(570,`p`),bT(571,`Replace `),Aa(572,`code`),bT(573,`PrismaBetterSqlite3`),cf(),bT(574,` with the adapter class for your database (`),Aa(575,`code`),bT(576,`PrismaPg`),cf(),bT(577,`, `),Aa(578,`code`),bT(579,`PrismaMariaDb`),cf(),bT(580,`, or `),Aa(581,`code`),bT(582,`PrismaMssql`),cf(),bT(583,`), and pass it the connection settings its driver expects. Each of these adapters also accepts a connection string. For example, with PostgreSQL:`),cf(),Aa(584,`app-copy-button`)(585,`pre`)(586,`code`,28),bT(587,`
import { PrismaPg } from '@prisma/adapter-pg';

// inside the PrismaService constructor
const adapter = new PrismaPg({
  connectionString: configService.getOrThrow<string>('DATABASE_URL'),
});
super({ adapter });
`),cf()()()(),Aa(588,`h4`,37)(589,`span`),bT(590,`Connection lifecycle`),cf()(),Aa(591,`p`),bT(592,`Prisma Client connects lazily, when it sends the first query. Calling `),Aa(593,`code`),bT(594,`$connect()`),cf(),bT(595,` in the `),Aa(596,`code`),bT(597,`onModuleInit()`),cf(),bT(598,` hook connects during application bootstrap instead, so a misconfigured connection fails at startup rather than on the first request.`),cf(),Aa(599,`p`),bT(600,`Calling `),Aa(601,`code`),bT(602,`$disconnect()`),cf(),bT(603,` in the `),Aa(604,`code`),bT(605,`onModuleDestroy()`),cf(),bT(606,` hook closes the connection when the application shuts down. It also disposes of the driver adapter, which closes the underlying driver connection (for example, it ends the connection pool that `),Aa(607,`code`),bT(608,`PrismaPg`),cf(),bT(609,` creates). Nest calls `),Aa(610,`code`),bT(611,`onModuleDestroy()`),cf(),bT(612,` when you call `),Aa(613,`code`),bT(614,`app.close()`),cf(),bT(615,`. To also call it when the process receives a termination signal, such as `),Aa(616,`code`),bT(617,`SIGTERM`),cf(),bT(618,`, enable shutdown hooks in your `),Aa(619,`code`),bT(620,`main.ts`),cf(),bT(621,` file:`),cf(),Aa(622,`app-copy-button`)(623,`pre`)(624,`code`,28),bT(625,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(626,`p`),bT(627,`See `),Aa(628,`a`,38),bT(629,`Application shutdown`),cf(),bT(630,` to learn more about shutdown hooks.`),cf(),Aa(631,`blockquote`,12)(632,`strong`),bT(633,`Hint`),cf(),bT(634,` Prisma ORM 7 doesn't support the `),Aa(635,`code`),bT(636,`beforeExit`),cf(),bT(637,` event (`),Aa(638,`code`),bT(639,`$on('beforeExit', ...)`),cf(),bT(640,`) that older Prisma integrations used to close the application. Use the Nest lifecycle hooks shown above instead.
`),cf(),Aa(641,`h4`,39)(642,`span`),bT(643,`PrismaModule`),cf()(),Aa(644,`p`),bT(645,`Register `),Aa(646,`code`),bT(647,`PrismaService`),cf(),bT(648,` in a dedicated module that exports it. Create a `),Aa(649,`code`),bT(650,`prisma.module.ts`),cf(),bT(651,` file next to the service:`),cf(),Aa(652,`app-copy-button`)(653,`pre`)(654,`code`,28),bT(655,`
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
`),cf()()(),Aa(656,`p`),bT(657,`Import `),Aa(658,`code`),bT(659,`PrismaModule`),cf(),bT(660,` into every module that needs database access. Providers are singletons by default, so all importing modules share the same `),Aa(661,`code`),bT(662,`PrismaService`),cf(),bT(663,` instance and its connection.`),cf(),Aa(664,`blockquote`,12)(665,`strong`),bT(666,`Hint`),cf(),bT(667,` If most of your modules need database access, you can decorate `),Aa(668,`code`),bT(669,`PrismaModule`),cf(),bT(670,` with `),Aa(671,`code`),bT(672,`@Global()`),cf(),bT(673,` and import it only once, in your root module. See `),Aa(674,`a`,40),bT(675,`Global modules`),cf(),bT(676,` for the trade-offs.
`),cf(),Aa(677,`h4`,41)(678,`span`),bT(679,`Querying from services`),cf()(),Aa(680,`p`),bT(681,`With `),Aa(682,`code`),bT(683,`PrismaModule`),cf(),bT(684,` in place, inject `),Aa(685,`code`),bT(686,`PrismaService`),cf(),bT(687,` into your providers and query the database through its model properties, such as `),Aa(688,`code`),bT(689,`this.prisma.user`),cf(),bT(690,`. The following `),Aa(691,`code`),bT(692,`UsersService`),cf(),bT(693,` wraps the CRUD queries for the `),Aa(694,`code`),bT(695,`User`),cf(),bT(696,` model:`),cf(),Aa(697,`app-copy-button`)(698,`pre`)(699,`code`,28),bT(700,`
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma, User } from '../generated/prisma/client.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async user(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({ where });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({ skip, take, cursor, where, orderBy });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({ data, where });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }
}
`),cf()()(),Aa(701,`p`),bT(702,`The service uses the generated types for its parameters and return values, so you don't need to write separate interfaces for your models. In a real-world application, the service is also the place for your business logic. For example, a `),Aa(703,`code`),bT(704,`UsersService`),cf(),bT(705,` could have an `),Aa(706,`code`),bT(707,`updatePassword()`),cf(),bT(708,` method responsible for updating a user's password.`),cf(),Aa(709,`p`),bT(710,`A controller then exposes the service through route handlers:`),cf(),Aa(711,`app-copy-button`)(712,`pre`)(713,`code`,28),bT(714,`
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { User as UserModel } from '../generated/prisma/client.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Query('search') search?: string): Promise<UserModel[]> {
    return this.usersService.users({
      where: search
        ? {
            OR: [
              { name: { contains: search } },
              { email: { contains: search } },
            ],
          }
        : undefined,
      orderBy: { id: 'asc' },
    });
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserModel | null> {
    return this.usersService.user({ id });
  }

  @Post()
  async create(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.usersService.createUser(userData);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
    return this.usersService.deleteUser({ id });
  }
}
`),cf()()(),Aa(715,`blockquote`,12)(716,`strong`),bT(717,`Hint`),cf(),bT(718,` The generated types exist only at compile time, so the `),Aa(719,`code`),bT(720,`ValidationPipe`),cf(),bT(721,` can't use them to validate request payloads. To validate a request body, declare a DTO class, as described in `),Aa(722,`a`,42),bT(723,`Validation`),cf(),bT(724,`.
`),cf(),Aa(725,`p`),bT(726,`Finally, register the controller and the service in a `),Aa(727,`code`),bT(728,`UsersModule`),cf(),bT(729,` that imports `),Aa(730,`code`),bT(731,`PrismaModule`),cf(),bT(732,`, and import `),Aa(733,`code`),bT(734,`UsersModule`),cf(),bT(735,` into your `),Aa(736,`code`),bT(737,`AppModule`),cf(),bT(738,`:`),cf(),Aa(739,`app-copy-button`)(740,`pre`)(741,`code`,28),bT(742,`
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
`),cf()()(),Aa(743,`h4`,43)(744,`span`),bT(745,`Transactions`),cf()(),Aa(746,`p`),bT(747,`Prisma Client offers several ways to run queries in a transaction (see `),Aa(748,`a`,44),bT(749,`Transactions and batch queries`),cf(),bT(750,`):`),cf(),Aa(751,`ul`)(752,`li`)(753,`strong`),bT(754,`Nested writes`),cf(),bT(755,`, which create or update a record together with related records in a single query, run in a transaction automatically.`),cf(),Aa(756,`li`)(757,`strong`),bT(758,`Sequential operations`),cf(),bT(759,`: pass an array of queries to `),Aa(760,`code`),bT(761,`$transaction()`),cf(),bT(762,`. Prisma runs them in order, in a single transaction, and resolves to an array with their results.`),cf(),Aa(763,`li`)(764,`strong`),bT(765,`Interactive transactions`),cf(),bT(766,`: pass an async function to `),Aa(767,`code`),bT(768,`$transaction()`),cf(),bT(769,`. Prisma commits the transaction when the function resolves and rolls it back when it throws.`),cf()(),Aa(770,`p`),bT(771,`The following methods show the last two forms in the `),Aa(772,`code`),bT(773,`UsersService`),cf(),bT(774,`:`),cf(),Aa(775,`app-copy-button`)(776,`pre`)(777,`code`,28),bT(778,`
async publishedPosts(skip: number, take: number) {
  const [posts, total] = await this.prisma.$transaction([
    this.prisma.post.findMany({ where: { published: true }, skip, take }),
    this.prisma.post.count({ where: { published: true } }),
  ]);
  return { posts, total };
}

async deleteUserWithPosts(id: number): Promise<User> {
  return this.prisma.$transaction(async (tx) => {
    await tx.post.deleteMany({ where: { authorId: id } });
    return tx.user.delete({ where: { id } });
  });
}
`),cf()()(),Aa(779,`p`),bT(780,`Inside an interactive transaction, send every query through the transaction client (`),Aa(781,`code`),bT(782,`tx`),cf(),bT(783,`) that Prisma passes to the function. Queries sent through `),Aa(784,`code`),bT(785,`this.prisma`),cf(),bT(786,` run outside the transaction. Both forms of `),Aa(787,`code`),bT(788,`$transaction()`),cf(),bT(789,` accept an options object as the second argument, with the `),Aa(790,`code`),bT(791,`maxWait`),cf(),bT(792,`, `),Aa(793,`code`),bT(794,`timeout`),cf(),bT(795,`, and `),Aa(796,`code`),bT(797,`isolationLevel`),cf(),bT(798,` properties.`),cf(),Aa(799,`p`),bT(800,`Passing `),Aa(801,`code`),bT(802,`tx`),cf(),bT(803,` through every method that takes part in a transaction couples your services to one another. To declare transaction boundaries with a decorator instead, use the transactional plugin of the `),Aa(804,`a`,45)(805,`code`),bT(806,`nestjs-cls`),cf()(),bT(807,` package with its `),Aa(808,`a`,46),bT(809,`Prisma adapter`),cf(),bT(810,` (`),Aa(811,`code`),bT(812,`@nestjs-cls/transactional-adapter-prisma`),cf(),bT(813,`). It keeps the active transaction client in async local storage and provides a `),Aa(814,`code`),bT(815,`@Transactional()`),cf(),bT(816,` decorator and an injectable `),Aa(817,`code`),bT(818,`TransactionHost`),cf(),bT(819,`.`),cf(),Aa(820,`h4`,47)(821,`span`),bT(822,`Testing`),cf()(),Aa(823,`p`),bT(824,`When you unit test a provider that depends on `),Aa(825,`code`),bT(826,`PrismaService`),cf(),bT(827,`, you usually want to avoid a database connection. Because `),Aa(828,`code`),bT(829,`PrismaService`),cf(),bT(830,` is a regular class provider, you can replace it with a mock using the class itself as the injection token and any of the standard `),Aa(831,`a`,48),bT(832,`custom provider`),cf(),bT(833,` techniques, such as `),Aa(834,`code`),bT(835,`useValue`),cf(),bT(836,`:`),cf(),Aa(837,`app-copy-button`)(838,`pre`)(839,`code`,28),bT(840,`
import { Test } from '@nestjs/testing';
import { vi } from 'vitest';
import { PrismaService } from '../prisma/prisma.service.js';
import { UsersService } from './users.service.js';

describe('UsersService', () => {
  let usersService: UsersService;
  const prismaMock = {
    user: {
      findUnique: vi.fn(),
    },
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    usersService = moduleRef.get(UsersService);
  });

  it('returns a user by id', async () => {
    const user = { id: 1, email: 'alice@prisma.io', name: 'Alice' };
    prismaMock.user.findUnique.mockResolvedValue(user);

    expect(await usersService.user({ id: 1 })).toEqual(user);
    expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });
});
`),cf()()(),Aa(841,`p`),bT(842,`The mock replaces `),Aa(843,`code`),bT(844,`PrismaService`),cf(),bT(845,` entirely, so its `),Aa(846,`code`),bT(847,`onModuleInit()`),cf(),bT(848,` hook doesn't run and the test never opens a database connection. When you test a module that imports `),Aa(849,`code`),bT(850,`PrismaModule`),cf(),bT(851,`, replace the provider with `),Aa(852,`code`),bT(853,`overrideProvider(PrismaService)`),cf(),bT(854,` instead. See `),Aa(855,`a`,49),bT(856,`Testing`),cf(),bT(857,` for more testing utilities.`),cf(),Aa(858,`h4`,50)(859,`span`),bT(860,`Example`),cf()(),Aa(861,`p`),bT(862,`Ready-to-run example projects for `),Aa(863,`a`,51),bT(864,`REST`),cf(),bT(865,` and `),Aa(866,`a`,52),bT(867,`GraphQL`),cf(),bT(868,` are available in the `),Aa(869,`a`,53)(870,`code`),bT(871,`prisma-examples`),cf()(),bT(872,` repository. For more resources, see `),Aa(873,`a`,54),bT(874,`NestJS & Prisma`),cf(),bT(875,` on the Prisma website.`),cf()(),Aa(876,`a`,55),Wa(877,`i`,56),Aa(878,`span`),bT(879,`Edit on GitHub`),cf()()())},dependencies:[Jc,Lt,ln],encapsulation:2})}return m})();var J=(()=>{class m extends xt{static ɵfac=(()=>{let d;return function(u){return(d||(d=im(m)))(u||m)}})();static ɵcmp=ef({type:m,selectors:[[`app-sequelize`]],features:[xy],decls:637,vars:48,consts:[[`contentReference`,``],[`appb93ba94e90fd84a65c30acaeb434aeda590b2a91`,``],[`app0aca471adef27fb55f33d700fdd9630574c38963`,``],[`appd223805fbd99a6a45d086d5610bd3285d8f18cd4`,``],[`app0a843822485a6837367b4c23f4dfbb9264401884`,``],[`app64af744a2bca6b9ec85cff5c57dfc6ec6848ae96`,``],[`app4586cb67da9d02aaa09fe21e343e4f7a2b7a0135`,``],[`appbdfe3d6a9ecf7f26fb84ffdef6d4e477a17309a7`,``],[`app58f9853a29d790174b9b027ef5b0d5a06794596a`,``],[`app6d6f14e0ebe9ebc5b1a98dbb400433e15fa4e42a`,``],[`app8abb9ff67e97b8a2a377a77a540e734ee1cc65ae`,``],[1,`content`],[1,`content-inner`],[`id`,`sequelize`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://sequelize.org/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/RobinBuschmann/sequelize-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.mysql.com/`],[1,`language-bash`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database`],[`appAnchor`,``,`id`,`models`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/RobinBuschmann/sequelize-typescript#column`],[1,`warning`],[`appAnchor`,``,`id`,`relations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/RobinBuschmann/sequelize-typescript#model-association`],[`appAnchor`,``,`id`,`auto-load-models`],[`appAnchor`,``,`id`,`sequelize-transactions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Database_transaction`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://sequelize.org/docs/v6/other-topics/transactions/`],[`appAnchor`,``,`id`,`migrations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://sequelize.org/docs/v6/other-topics/migrations/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli`],[`appAnchor`,``,`id`,`multiple-databases`],[`appAnchor`,``,`id`,`testing`],[`routerLink`,`/fundamentals/custom-providers`],[`appAnchor`,``,`id`,`async-configuration`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`/fundamentals/async-providers`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/07-sequelize`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/data/sequelize.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,11,0)(2,`div`,12)(3,`h3`,13),bT(4,`Sequelize`),cf(),Aa(5,`p`),bT(6,`The `),Aa(7,`code`),bT(8,`@nestjs/sequelize`),cf(),bT(9,` package integrates the `),Aa(10,`a`,14),bT(11,`Sequelize`),cf(),bT(12,` ORM with Nest. It also uses the `),Aa(13,`a`,15),bT(14,`sequelize-typescript`),cf(),bT(15,` package, which provides decorators to define models declaratively.`),cf(),Aa(16,`p`),bT(17,`To begin using it, we first install the required dependencies. In this chapter, we'll demonstrate using the popular `),Aa(18,`a`,16),bT(19,`MySQL`),cf(),bT(20,` Relational DBMS, but Sequelize provides support for many relational databases, such as PostgreSQL, MySQL, Microsoft SQL Server, SQLite, and MariaDB. The procedure we walk through in this chapter will be the same for any database supported by Sequelize. You'll simply need to install the associated client API libraries for your selected database.`),cf(),Aa(21,`pre`)(22,`code`,17),bT(23,`
$ npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
$ npm install --save-dev @types/sequelize
`),cf()(),Aa(24,`p`),bT(25,`Once the installation process is complete, we can import the `),Aa(26,`code`),bT(27,`SequelizeModule`),cf(),bT(28,` into the root `),Aa(29,`code`),bT(30,`AppModule`),cf(),bT(31,`.`),cf(),Aa(32,`app-copy-button`,18)(33,`span`,19),bT(34),LT(35,`extension`),Wa(36,`app-tabs`,null,1),cf(),Aa(38,`pre`)(39,`code`,20),bT(40,`
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      models: [],
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(41,`p`),bT(42,`The `),Aa(43,`code`),bT(44,`forRoot()`),cf(),bT(45,` method supports all the configuration properties exposed by the Sequelize constructor (`),Aa(46,`a`,21),bT(47,`read more`),cf(),bT(48,`). In addition, there are several extra configuration properties described below.`),cf(),Aa(49,`table`)(50,`tr`)(51,`td`)(52,`code`),bT(53,`retryAttempts`),cf()(),Aa(54,`td`),bT(55,`Number of attempts to connect to the database (default: `),Aa(56,`code`),bT(57,`10`),cf(),bT(58,`)`),cf()(),Aa(59,`tr`)(60,`td`)(61,`code`),bT(62,`retryDelay`),cf()(),Aa(63,`td`),bT(64,`Delay between connection retry attempts (ms) (default: `),Aa(65,`code`),bT(66,`3000`),cf(),bT(67,`)`),cf()(),Aa(68,`tr`)(69,`td`)(70,`code`),bT(71,`autoLoadModels`),cf()(),Aa(72,`td`),bT(73,`If `),Aa(74,`code`),bT(75,`true`),cf(),bT(76,`, models will be loaded automatically (default: `),Aa(77,`code`),bT(78,`false`),cf(),bT(79,`)`),cf()(),Aa(80,`tr`)(81,`td`)(82,`code`),bT(83,`autoCloseConnection`),cf()(),Aa(84,`td`),bT(85,`If `),Aa(86,`code`),bT(87,`true`),cf(),bT(88,`, the connection is closed when the application shuts down (default: `),Aa(89,`code`),bT(90,`true`),cf(),bT(91,`)`),cf()(),Aa(92,`tr`)(93,`td`)(94,`code`),bT(95,`synchronize`),cf()(),Aa(96,`td`),bT(97,`If `),Aa(98,`code`),bT(99,`true`),cf(),bT(100,`, automatically loaded models will be synchronized (default: `),Aa(101,`code`),bT(102,`true`),cf(),bT(103,`)`),cf()()(),Aa(104,`p`),bT(105,`Once this is done, the `),Aa(106,`code`),bT(107,`Sequelize`),cf(),bT(108,` object will be available to inject across the entire project (without needing to import any modules), for example:`),cf(),Aa(109,`app-copy-button`,18)(110,`span`,19),bT(111),LT(112,`extension`),Wa(113,`app-tabs`,null,2),cf(),Aa(115,`pre`)(116,`code`,20),bT(117,`
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {}
}
`),cf()(),Aa(118,`pre`)(119,`code`,20),bT(120,`
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Dependencies(Sequelize)
@Injectable()
export class AppService {
  constructor(sequelize) {
    this.sequelize = sequelize;
  }
}
`),cf()()(),Aa(121,`h4`,22)(122,`span`),bT(123,`Models`),cf()(),Aa(124,`p`),bT(125,`Sequelize implements the Active Record pattern. With this pattern, you use model classes directly to interact with the database. To continue the example, we need at least one model. Let's define the `),Aa(126,`code`),bT(127,`User`),cf(),bT(128,` model.`),cf(),Aa(129,`app-copy-button`,18)(130,`span`,19),bT(131),LT(132,`extension`),Wa(133,`app-tabs`,null,3),cf(),Aa(135,`pre`)(136,`code`,20),bT(137,`
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
`),cf()()(),Aa(138,`blockquote`,23)(139,`strong`),bT(140,`Hint`),cf(),bT(141,` Learn more about the available decorators `),Aa(142,`a`,24),bT(143,`here`),cf(),bT(144,`.
`),cf(),Aa(145,`p`),bT(146,`The `),Aa(147,`code`),bT(148,`User`),cf(),bT(149,` model file sits in the `),Aa(150,`code`),bT(151,`users`),cf(),bT(152,` directory. This directory contains all files related to the `),Aa(153,`code`),bT(154,`UsersModule`),cf(),bT(155,`. You can decide where to keep your model files, however, we recommend creating them near their `),Aa(156,`strong`),bT(157,`domain`),cf(),bT(158,`, in the corresponding module directory.`),cf(),Aa(159,`p`),bT(160,`To begin using the `),Aa(161,`code`),bT(162,`User`),cf(),bT(163,` model, we need to let Sequelize know about it by inserting it into the `),Aa(164,`code`),bT(165,`models`),cf(),bT(166,` array in the module `),Aa(167,`code`),bT(168,`forRoot()`),cf(),bT(169,` method options:`),cf(),Aa(170,`app-copy-button`,18)(171,`span`,19),bT(172),LT(173,`extension`),Wa(174,`app-tabs`,null,4),cf(),Aa(176,`pre`)(177,`code`,20),bT(178,`
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model.js';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      models: [User],
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(179,`p`),bT(180,`Next, let's look at the `),Aa(181,`code`),bT(182,`UsersModule`),cf(),bT(183,`:`),cf(),Aa(184,`app-copy-button`,18)(185,`span`,19),bT(186),LT(187,`extension`),Wa(188,`app-tabs`,null,5),cf(),Aa(190,`pre`)(191,`code`,20),bT(192,`
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model.js';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
`),cf()()(),Aa(193,`p`),bT(194,`This module uses the `),Aa(195,`code`),bT(196,`forFeature()`),cf(),bT(197,` method to define which models are registered in the current scope. With that in place, we can inject the `),Aa(198,`code`),bT(199,`UserModel`),cf(),bT(200,` into the `),Aa(201,`code`),bT(202,`UsersService`),cf(),bT(203,` using the `),Aa(204,`code`),bT(205,`@InjectModel()`),cf(),bT(206,` decorator:`),cf(),Aa(207,`app-copy-button`,18)(208,`span`,19),bT(209),LT(210,`extension`),Wa(211,`app-tabs`,null,6),cf(),Aa(213,`pre`)(214,`code`,20),bT(215,`
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
`),cf()(),Aa(216,`pre`)(217,`code`,20),bT(218,`
import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/sequelize';
import { User } from './user.model.js';

@Injectable()
@Dependencies(getModelToken(User))
export class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async findAll() {
    return this.userModel.findAll();
  }

  findOne(id) {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
`),cf()()(),Aa(219,`blockquote`,25)(220,`strong`),bT(221,`Notice`),cf(),bT(222,` Don't forget to import the `),Aa(223,`code`),bT(224,`UsersModule`),cf(),bT(225,` into the root `),Aa(226,`code`),bT(227,`AppModule`),cf(),bT(228,`.
`),cf(),Aa(229,`p`),bT(230,`If you want to use the model outside of the module which imports `),Aa(231,`code`),bT(232,`SequelizeModule.forFeature`),cf(),bT(233,`, you'll need to re-export the providers generated by it.
You can do this by exporting the whole module, like this:`),cf(),Aa(234,`app-copy-button`,18)(235,`span`,19),bT(236),LT(237,`extension`),Wa(238,`app-tabs`,null,7),cf(),Aa(240,`pre`)(241,`code`,20),bT(242,`
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.entity.js';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  exports: [SequelizeModule]
})
export class UsersModule {}
`),cf()()(),Aa(243,`p`),bT(244,`Now if we import `),Aa(245,`code`),bT(246,`UsersModule`),cf(),bT(247,` in `),Aa(248,`code`),bT(249,`UserHttpModule`),cf(),bT(250,`, we can use `),Aa(251,`code`),bT(252,`@InjectModel(User)`),cf(),bT(253,` in the providers of the latter module.`),cf(),Aa(254,`app-copy-button`,18)(255,`span`,19),bT(256),LT(257,`extension`),Wa(258,`app-tabs`,null,8),cf(),Aa(260,`pre`)(261,`code`,20),bT(262,`
import { Module } from '@nestjs/common';
import { UsersModule } from './users.module.js';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UserHttpModule {}
`),cf()()(),Aa(263,`h4`,26)(264,`span`),bT(265,`Relations`),cf()(),Aa(266,`p`),bT(267,`Relations are associations established between two or more tables. Relations are based on common fields from each table, often involving primary and foreign keys.`),cf(),Aa(268,`p`),bT(269,`There are three types of relations:`),cf(),Aa(270,`table`)(271,`tr`)(272,`td`)(273,`code`),bT(274,`One-to-one`),cf()(),Aa(275,`td`),bT(276,`Every row in the primary table has one and only one associated row in the foreign table`),cf()(),Aa(277,`tr`)(278,`td`)(279,`code`),bT(280,`One-to-many / Many-to-one`),cf()(),Aa(281,`td`),bT(282,`Every row in the primary table has one or more related rows in the foreign table`),cf()(),Aa(283,`tr`)(284,`td`)(285,`code`),bT(286,`Many-to-many`),cf()(),Aa(287,`td`),bT(288,`Every row in the primary table has many related rows in the foreign table, and every record in the foreign table has many related rows in the primary table`),cf()()(),Aa(289,`p`),bT(290,`To define relations in models, use the corresponding `),Aa(291,`strong`),bT(292,`decorators`),cf(),bT(293,`. For example, to define that each `),Aa(294,`code`),bT(295,`User`),cf(),bT(296,` can have multiple photos, use the `),Aa(297,`code`),bT(298,`@HasMany()`),cf(),bT(299,` decorator.`),cf(),Aa(300,`app-copy-button`,18)(301,`span`,19),bT(302),LT(303,`extension`),Wa(304,`app-tabs`,null,9),cf(),Aa(306,`pre`)(307,`code`,20),bT(308,`
import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Photo } from '../photos/photo.model.js';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => Photo)
  photos: Photo[];
}
`),cf()()(),Aa(309,`blockquote`,23)(310,`strong`),bT(311,`Hint`),cf(),bT(312,` To learn more about associations in Sequelize, read `),Aa(313,`a`,27),bT(314,`this`),cf(),bT(315,` chapter.
`),cf(),Aa(316,`h4`,28)(317,`span`),bT(318,`Auto-load models`),cf()(),Aa(319,`p`),bT(320,`Manually adding models to the `),Aa(321,`code`),bT(322,`models`),cf(),bT(323,` array of the connection options can be tedious. In addition, referencing models from the root module breaks application domain boundaries and causes leaking implementation details to other parts of the application. To solve this issue, automatically load models by setting both `),Aa(324,`code`),bT(325,`autoLoadModels`),cf(),bT(326,` and `),Aa(327,`code`),bT(328,`synchronize`),cf(),bT(329,` properties of the configuration object (passed into the `),Aa(330,`code`),bT(331,`forRoot()`),cf(),bT(332,` method) to `),Aa(333,`code`),bT(334,`true`),cf(),bT(335,`, as shown below:`),cf(),Aa(336,`app-copy-button`,18)(337,`span`,19),bT(338),LT(339,`extension`),Wa(340,`app-tabs`,null,10),cf(),Aa(342,`pre`)(343,`code`,20),bT(344,`
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(345,`p`),bT(346,`With that option specified, every model registered through the `),Aa(347,`code`),bT(348,`forFeature()`),cf(),bT(349,` method will be automatically added to the `),Aa(350,`code`),bT(351,`models`),cf(),bT(352,` array of the configuration object.`),cf(),Aa(353,`blockquote`,25)(354,`strong`),bT(355,`Warning`),cf(),bT(356,` Note that models that aren't registered through the `),Aa(357,`code`),bT(358,`forFeature()`),cf(),bT(359,` method, but are only referenced from the model (via an association), won't be included.
`),cf(),Aa(360,`h4`,29)(361,`span`),bT(362,`Sequelize Transactions`),cf()(),Aa(363,`p`),bT(364,`A database transaction symbolizes a unit of work performed within a database management system against a database, and treated in a coherent and reliable way independent of other transactions. A transaction generally represents any change in a database (`),Aa(365,`a`,30),bT(366,`learn more`),cf(),bT(367,`).`),cf(),Aa(368,`p`),bT(369,`There are many different strategies to handle `),Aa(370,`a`,31),bT(371,`Sequelize transactions`),cf(),bT(372,`. Below is a sample implementation of a managed transaction (auto-callback).`),cf(),Aa(373,`p`),bT(374,`First, we need to inject the `),Aa(375,`code`),bT(376,`Sequelize`),cf(),bT(377,` object into a class in the normal way:`),cf(),Aa(378,`app-copy-button`)(379,`pre`)(380,`code`,20),bT(381,`
@Injectable()
export class UsersService {
  constructor(private sequelize: Sequelize) {}
}
`),cf()()(),Aa(382,`blockquote`,23)(383,`strong`),bT(384,`Hint`),cf(),bT(385,` The `),Aa(386,`code`),bT(387,`Sequelize`),cf(),bT(388,` class is imported from the `),Aa(389,`code`),bT(390,`sequelize-typescript`),cf(),bT(391,` package.
`),cf(),Aa(392,`p`),bT(393,`Now, we can use this object to create a transaction.`),cf(),Aa(394,`app-copy-button`)(395,`pre`)(396,`code`,20),bT(397,`
async createMany() {
  try {
    await this.sequelize.transaction(async t => {
      const transactionHost = { transaction: t };

      await this.userModel.create(
          { firstName: 'Abraham', lastName: 'Lincoln' },
          transactionHost,
      );
      await this.userModel.create(
          { firstName: 'John', lastName: 'Boothe' },
          transactionHost,
      );
    });
  } catch (err) {
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
  }
}
`),cf()()(),Aa(398,`blockquote`,23)(399,`strong`),bT(400,`Hint`),cf(),bT(401,` Note that the `),Aa(402,`code`),bT(403,`Sequelize`),cf(),bT(404,` instance is used only to start the transaction. However, to test this class would require mocking the entire `),Aa(405,`code`),bT(406,`Sequelize`),cf(),bT(407,` object (which exposes several methods). Thus, we recommend using a helper factory class (e.g., `),Aa(408,`code`),bT(409,`TransactionRunner`),cf(),bT(410,`) and defining an interface with a limited set of methods required to maintain transactions. This technique makes mocking these methods pretty straightforward.
`),cf(),Aa(411,`h4`,32)(412,`span`),bT(413,`Migrations`),cf()(),Aa(414,`p`)(415,`a`,33),bT(416,`Migrations`),cf(),bT(417,` provide a way to incrementally update the database schema to keep it in sync with the application's data model while preserving existing data in the database. To generate, run, and revert migrations, Sequelize provides a dedicated `),Aa(418,`a`,34),bT(419,`CLI`),cf(),bT(420,`.`),cf(),Aa(421,`p`),bT(422,`Migration classes are separate from the Nest application source code. Their lifecycle is maintained by the Sequelize CLI. Therefore, you are not able to leverage dependency injection and other Nest specific features with migrations. To learn more about migrations, follow the guide in the `),Aa(423,`a`,34),bT(424,`Sequelize documentation`),cf(),bT(425,`.`),cf(),Aa(426,`p`),Wa(427,`app-banner-courses`),cf(),Aa(428,`h4`,35)(429,`span`),bT(430,`Multiple databases`),cf()(),Aa(431,`p`),bT(432,`Some projects require multiple database connections. This can also be achieved with this module. To work with multiple connections, first create the connections. In this case, connection naming becomes `),Aa(433,`strong`),bT(434,`mandatory`),cf(),bT(435,`.`),cf(),Aa(436,`p`),bT(437,`Suppose you have an `),Aa(438,`code`),bT(439,`Album`),cf(),bT(440,` entity stored in its own database.`),cf(),Aa(441,`app-copy-button`)(442,`pre`)(443,`code`,20),bT(444,`
const defaultOptions = {
  dialect: 'postgres',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  synchronize: true,
};

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...defaultOptions,
      host: 'user_db_host',
      models: [User],
    }),
    SequelizeModule.forRoot({
      ...defaultOptions,
      name: 'albumsConnection',
      host: 'album_db_host',
      models: [Album],
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(445,`blockquote`,25)(446,`strong`),bT(447,`Notice`),cf(),bT(448,` If you don't set the `),Aa(449,`code`),bT(450,`name`),cf(),bT(451,` for a connection, its name is set to `),Aa(452,`code`),bT(453,`default`),cf(),bT(454,`. Please note that you shouldn't have multiple connections without a name, or with the same name, otherwise they will get overridden.
`),cf(),Aa(455,`p`),bT(456,`At this point, you have `),Aa(457,`code`),bT(458,`User`),cf(),bT(459,` and `),Aa(460,`code`),bT(461,`Album`),cf(),bT(462,` models registered with their own connection. With this setup, you have to tell the `),Aa(463,`code`),bT(464,`SequelizeModule.forFeature()`),cf(),bT(465,` method and the `),Aa(466,`code`),bT(467,`@InjectModel()`),cf(),bT(468,` decorator which connection should be used. If you do not pass any connection name, the `),Aa(469,`code`),bT(470,`default`),cf(),bT(471,` connection is used.`),cf(),Aa(472,`app-copy-button`)(473,`pre`)(474,`code`,20),bT(475,`
@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    SequelizeModule.forFeature([Album], 'albumsConnection'),
  ],
})
export class AppModule {}
`),cf()()(),Aa(476,`p`),bT(477,`You can also inject the `),Aa(478,`code`),bT(479,`Sequelize`),cf(),bT(480,` instance for a given connection:`),cf(),Aa(481,`app-copy-button`)(482,`pre`)(483,`code`,20),bT(484,`
@Injectable()
export class AlbumsService {
  constructor(
    @InjectConnection('albumsConnection')
    private sequelize: Sequelize,
  ) {}
}
`),cf()()(),Aa(485,`p`),bT(486,`It's also possible to inject any `),Aa(487,`code`),bT(488,`Sequelize`),cf(),bT(489,` instance to the providers:`),cf(),Aa(490,`app-copy-button`)(491,`pre`)(492,`code`,20),bT(493,`
@Module({
  providers: [
    {
      provide: AlbumsService,
      useFactory: (albumsSequelize: Sequelize) => {
        return new AlbumsService(albumsSequelize);
      },
      inject: [getConnectionToken('albumsConnection')],
    },
  ],
})
export class AlbumsModule {}
`),cf()()(),Aa(494,`h4`,36)(495,`span`),bT(496,`Testing`),cf()(),Aa(497,`p`),bT(498,`When it comes to unit testing an application, we usually want to avoid making a database connection, keeping our test suites independent and their execution process as fast as possible. But our classes might depend on models that are pulled from the connection instance. How do we handle that? The solution is to create mock models. In order to achieve that, we set up `),Aa(499,`a`,37),bT(500,`custom providers`),cf(),bT(501,`. Each registered model is automatically represented by a `),Aa(502,`code`),bT(503,`<ModelName>Model`),cf(),bT(504,` token, where `),Aa(505,`code`),bT(506,`ModelName`),cf(),bT(507,` is the name of your model class.`),cf(),Aa(508,`p`),bT(509,`The `),Aa(510,`code`),bT(511,`@nestjs/sequelize`),cf(),bT(512,` package exposes the `),Aa(513,`code`),bT(514,`getModelToken()`),cf(),bT(515,` function which returns a prepared token based on a given model.`),cf(),Aa(516,`app-copy-button`)(517,`pre`)(518,`code`,20),bT(519,`
@Module({
  providers: [
    UsersService,
    {
      provide: getModelToken(User),
      useValue: mockModel,
    },
  ],
})
export class UsersModule {}
`),cf()()(),Aa(520,`p`),bT(521,`Now a substitute `),Aa(522,`code`),bT(523,`mockModel`),cf(),bT(524,` will be used as the `),Aa(525,`code`),bT(526,`UserModel`),cf(),bT(527,`. Whenever any class asks for `),Aa(528,`code`),bT(529,`UserModel`),cf(),bT(530,` using an `),Aa(531,`code`),bT(532,`@InjectModel()`),cf(),bT(533,` decorator, Nest will use the registered `),Aa(534,`code`),bT(535,`mockModel`),cf(),bT(536,` object.`),cf(),Aa(537,`h4`,38)(538,`span`),bT(539,`Async configuration`),cf()(),Aa(540,`p`),bT(541,`You may want to pass your `),Aa(542,`code`),bT(543,`SequelizeModule`),cf(),bT(544,` options asynchronously instead of statically. In this case, use the `),Aa(545,`code`),bT(546,`forRootAsync()`),cf(),bT(547,` method, which provides several ways to deal with async configuration.`),cf(),Aa(548,`p`),bT(549,`One approach is to use a factory function:`),cf(),Aa(550,`app-copy-button`)(551,`pre`)(552,`code`,20),bT(553,`
SequelizeModule.forRootAsync({
  useFactory: () => ({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    models: [],
  }),
});
`),cf()()(),Aa(554,`p`),bT(555,`Our factory behaves like any other `),Aa(556,`a`,39),bT(557,`asynchronous provider`),cf(),bT(558,` (e.g., it can be `),Aa(559,`code`),bT(560,`async`),cf(),bT(561,` and it's able to inject dependencies through `),Aa(562,`code`),bT(563,`inject`),cf(),bT(564,`).`),cf(),Aa(565,`app-copy-button`)(566,`pre`)(567,`code`,20),bT(568,`
SequelizeModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    dialect: 'mysql',
    host: configService.get('HOST'),
    port: +configService.get('PORT'),
    username: configService.get('USERNAME'),
    password: configService.get('PASSWORD'),
    database: configService.get('DATABASE'),
    models: [],
  }),
  inject: [ConfigService],
});
`),cf()()(),Aa(569,`p`),bT(570,`Alternatively, you can use the `),Aa(571,`code`),bT(572,`useClass`),cf(),bT(573,` syntax:`),cf(),Aa(574,`app-copy-button`)(575,`pre`)(576,`code`,20),bT(577,`
SequelizeModule.forRootAsync({
  useClass: SequelizeConfigService,
});
`),cf()()(),Aa(578,`p`),bT(579,`The construction above will instantiate `),Aa(580,`code`),bT(581,`SequelizeConfigService`),cf(),bT(582,` inside `),Aa(583,`code`),bT(584,`SequelizeModule`),cf(),bT(585,` and use it to provide an options object by calling `),Aa(586,`code`),bT(587,`createSequelizeOptions()`),cf(),bT(588,`. Note that this means that the `),Aa(589,`code`),bT(590,`SequelizeConfigService`),cf(),bT(591,` has to implement the `),Aa(592,`code`),bT(593,`SequelizeOptionsFactory`),cf(),bT(594,` interface, as shown below:`),cf(),Aa(595,`app-copy-button`)(596,`pre`)(597,`code`,20),bT(598,`
@Injectable()
class SequelizeConfigService implements SequelizeOptionsFactory {
  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      models: [],
    };
  }
}
`),cf()()(),Aa(599,`p`),bT(600,`In order to prevent the creation of `),Aa(601,`code`),bT(602,`SequelizeConfigService`),cf(),bT(603,` inside `),Aa(604,`code`),bT(605,`SequelizeModule`),cf(),bT(606,` and use a provider imported from a different module, you can use the `),Aa(607,`code`),bT(608,`useExisting`),cf(),bT(609,` syntax.`),cf(),Aa(610,`app-copy-button`)(611,`pre`)(612,`code`,20),bT(613,`
SequelizeModule.forRootAsync({
  imports: [ConfigModule],
  useExisting: ConfigService,
});
`),cf()()(),Aa(614,`p`),bT(615,`This construction works the same as `),Aa(616,`code`),bT(617,`useClass`),cf(),bT(618,` with one critical difference - `),Aa(619,`code`),bT(620,`SequelizeModule`),cf(),bT(621,` will lookup imported modules to reuse an existing `),Aa(622,`code`),bT(623,`ConfigService`),cf(),bT(624,` instead of instantiating a new one.`),cf(),Aa(625,`h4`,40)(626,`span`),bT(627,`Example`),cf()(),Aa(628,`p`),bT(629,`A working example is available `),Aa(630,`a`,41),bT(631,`here`),cf(),bT(632,`.`),cf()(),Aa(633,`a`,42),Wa(634,`i`,43),Aa(635,`span`),bT(636,`Edit on GitHub`),cf()()()),c&2){let w=tT(37),y=tT(114),k=tT(134),j=tT(175),T=tT(189),v=tT(212),A=tT(239),z=tT(259),R=tT(305),q=tT(341);zC(34),hf(` `,jT(35,18,`app.module`,w.isJsActive),`
`),zC(77),hf(` `,jT(112,21,`app.service`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(13),hf(` `,jT(132,24,`user.model`,k.isJsActive),`
`),zC(41),hf(` `,jT(173,27,`app.module`,j.isJsActive),`
`),zC(14),hf(` `,jT(187,30,`users.module`,T.isJsActive),`
`),zC(23),hf(` `,jT(210,33,`users.service`,v.isJsActive),`
`),zC(4),zy(`hide`,v.isJsActive),zC(3),zy(`hide`,!v.isJsActive),zC(20),hf(` `,jT(237,36,`users.module`,A.isJsActive),`
`),zC(20),hf(` `,jT(257,39,`users-http.module`,z.isJsActive),`
`),zC(46),hf(` `,jT(303,42,`user.model`,R.isJsActive),`
`),zC(36),hf(` `,jT(339,45,`app.module`,q.isJsActive),`
`)}},dependencies:[Jc,ln,u,Lt,l,g],encapsulation:2})}return m})();var Y=(()=>{class m extends xt{static ɵfac=(()=>{let d;return function(u){return(d||(d=im(m)))(u||m)}})();static ɵcmp=ef({type:m,selectors:[[`app-typeorm`]],features:[xy],decls:862,vars:48,consts:[[`contentReference`,``],[`app6f031617ce2e1736de71b9ef743ca9d341e320e0`,``],[`appc88e72293f13837ba09d66b43671d26fbb1b2000`,``],[`app5cb5a98133d95f52c14779592b4565866f4a8c59`,``],[`appf240518fba55b8938b257085917339793f3ab185`,``],[`app2f57b23849418b9fe3e34dfb3478cb8a06b0877f`,``],[`app8709409904feb9c153873b9f75e4ec72f4920f72`,``],[`app2067ada38688091cd3daa6173d67214e5a783df8`,``],[`appbd9115b97f46d9abd3c2c2f233446e991081a6a2`,``],[`app2be54b68623b2e6ec1412e8c3b493559ec0feeab`,``],[`appc0f2766f569cb03b42cd6989ce298d0833e0b98d`,``],[1,`content`],[1,`content-inner`],[`id`,`typeorm`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/typeorm/typeorm`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.mysql.com/`],[1,`language-bash`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/data-source/data-source-options#common-data-source-options`],[`href`,`/data/typeorm#auto-load-entities`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/data-source/data-source-options`],[`appAnchor`,``,`id`,`repository-pattern`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/entity/entities/`],[`appAnchor`,``,`id`,`relations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/relations/relations`],[`appAnchor`,``,`id`,`auto-load-entities`],[`appAnchor`,``,`id`,`separating-entity-definition`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/entity/separating-entity-definition`],[`appAnchor`,``,`id`,`typeorm-transactions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://en.wikipedia.org/wiki/Database_transaction`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/advanced-topics/transactions/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/advanced-topics/transactions/#creating-and-using-transactions`],[`appAnchor`,``,`id`,`subscribers`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/advanced-topics/listeners-and-subscribers#what-is-a-subscriber`],[1,`error`],[`routerLink`,`/fundamentals/injection-scopes`],[`appAnchor`,``,`id`,`migrations`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/advanced-topics/migrations/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://typeorm.io/docs/advanced-topics/migrations/#creating-a-new-migration`],[`appAnchor`,``,`id`,`multiple-databases`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/typeorm/issues/86`],[`appAnchor`,``,`id`,`testing`],[`routerLink`,`/fundamentals/custom-providers`],[`appAnchor`,``,`id`,`async-configuration`],[`routerLink`,`/fundamentals/async-providers`],[`appAnchor`,``,`id`,`custom-datasource-factory`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/05-sql-typeorm`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/data/typeorm.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,u){if(c&1&&(Aa(0,`div`,11,0)(2,`div`,12)(3,`h3`,13),bT(4,`TypeORM`),cf(),Aa(5,`p`),bT(6,`The `),Aa(7,`code`),bT(8,`@nestjs/typeorm`),cf(),bT(9,` package integrates `),Aa(10,`a`,14),bT(11,`TypeORM`),cf(),bT(12,` with Nest. TypeORM is one of the most mature Object Relational Mappers (ORMs) available for TypeScript. Because it's written in TypeScript, it integrates well with Nest.`),cf(),Aa(13,`p`),bT(14,`To get started, install the required dependencies. This chapter uses `),Aa(15,`a`,15),bT(16,`MySQL`),cf(),bT(17,`, but TypeORM supports many other relational databases, such as PostgreSQL, Oracle, Microsoft SQL Server, and SQLite, as well as NoSQL databases like MongoDB. The steps in this chapter are the same for every database TypeORM supports; you only need to install the client library for your database.`),cf(),Aa(18,`pre`)(19,`code`,16),bT(20,`
$ npm install --save @nestjs/typeorm typeorm mysql2
`),cf()(),Aa(21,`p`),bT(22,`Once the installation is complete, import `),Aa(23,`code`),bT(24,`TypeOrmModule`),cf(),bT(25,` into the root `),Aa(26,`code`),bT(27,`AppModule`),cf(),bT(28,`:`),cf(),Aa(29,`app-copy-button`,17)(30,`span`,18),bT(31),LT(32,`extension`),Wa(33,`app-tabs`,null,1),cf(),Aa(35,`pre`)(36,`code`,19),bT(37,`
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(38,`blockquote`,20)(39,`strong`),bT(40,`Warning`),cf(),bT(41,` Don't use `),Aa(42,`code`),bT(43,`synchronize: true`),cf(),bT(44,` in production; otherwise, you can lose production data.
`),cf(),Aa(45,`p`),bT(46,`The `),Aa(47,`code`),bT(48,`forRoot()`),cf(),bT(49,` method accepts all the configuration properties supported by the TypeORM `),Aa(50,`a`,21)(51,`code`),bT(52,`DataSource`),cf(),bT(53,` constructor`),cf(),bT(54,`. It also accepts the following extra properties:`),cf(),Aa(55,`table`)(56,`tr`)(57,`td`)(58,`code`),bT(59,`retryAttempts`),cf()(),Aa(60,`td`),bT(61,`Number of attempts to connect to the database (default: `),Aa(62,`code`),bT(63,`10`),cf(),bT(64,`)`),cf()(),Aa(65,`tr`)(66,`td`)(67,`code`),bT(68,`retryDelay`),cf()(),Aa(69,`td`),bT(70,`Delay between connection retry attempts, in milliseconds (default: `),Aa(71,`code`),bT(72,`3000`),cf(),bT(73,`)`),cf()(),Aa(74,`tr`)(75,`td`)(76,`code`),bT(77,`toRetry`),cf()(),Aa(78,`td`),bT(79,`Function that receives the connection error and returns whether to retry. By default, every error is retried`),cf()(),Aa(80,`tr`)(81,`td`)(82,`code`),bT(83,`verboseRetryLog`),cf()(),Aa(84,`td`),bT(85,`If `),Aa(86,`code`),bT(87,`true`),cf(),bT(88,`, the error message is included in the log entry for each connection retry (default: `),Aa(89,`code`),bT(90,`false`),cf(),bT(91,`)`),cf()(),Aa(92,`tr`)(93,`td`)(94,`code`),bT(95,`autoLoadEntities`),cf()(),Aa(96,`td`),bT(97,`If `),Aa(98,`code`),bT(99,`true`),cf(),bT(100,`, entities are loaded automatically (default: `),Aa(101,`code`),bT(102,`false`),cf(),bT(103,`). See `),Aa(104,`a`,22),bT(105,`Auto-load entities`),cf()()(),Aa(106,`tr`)(107,`td`)(108,`code`),bT(109,`manualInitialization`),cf()(),Aa(110,`td`),bT(111,`If `),Aa(112,`code`),bT(113,`true`),cf(),bT(114,`, the data source isn't initialized during module initialization, so no connection is established and no migrations run. You must call `),Aa(115,`code`),bT(116,`DataSource.initialize()`),cf(),bT(117,` yourself and handle retries if needed (default: `),Aa(118,`code`),bT(119,`false`),cf(),bT(120,`)`),cf()()(),Aa(121,`blockquote`,23)(122,`strong`),bT(123,`Hint`),cf(),bT(124,` Learn more about the available options in the `),Aa(125,`a`,24),bT(126,`TypeORM data source options`),cf(),bT(127,` documentation.
`),cf(),Aa(128,`p`),bT(129,`Once this is done, you can inject the TypeORM `),Aa(130,`code`),bT(131,`DataSource`),cf(),bT(132,` and `),Aa(133,`code`),bT(134,`EntityManager`),cf(),bT(135,` objects anywhere in the project, without importing any modules. For example:`),cf(),Aa(136,`app-copy-button`,17)(137,`span`,18),bT(138),LT(139,`extension`),Wa(140,`app-tabs`,null,2),cf(),Aa(142,`pre`)(143,`code`,19),bT(144,`
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
`),cf()(),Aa(145,`pre`)(146,`code`,19),bT(147,`
import { DataSource } from 'typeorm';

@Dependencies(DataSource)
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
})
export class AppModule {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }
}
`),cf()()(),Aa(148,`h4`,25)(149,`span`),bT(150,`Repository pattern`),cf()(),Aa(151,`p`)(152,`a`,14),bT(153,`TypeORM`),cf(),bT(154,` supports the `),Aa(155,`strong`),bT(156,`repository design pattern`),cf(),bT(157,`, so each entity has its own repository. You obtain these repositories from the data source.`),cf(),Aa(158,`p`),bT(159,`To continue the example, we need at least one entity. Let's define the `),Aa(160,`code`),bT(161,`User`),cf(),bT(162,` entity.`),cf(),Aa(163,`app-copy-button`,17)(164,`span`,18),bT(165),LT(166,`extension`),Wa(167,`app-tabs`,null,3),cf(),Aa(169,`pre`)(170,`code`,19),bT(171,`
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
`),cf()()(),Aa(172,`blockquote`,23)(173,`strong`),bT(174,`Hint`),cf(),bT(175,` Learn more about entities\xA0in the `),Aa(176,`a`,26),bT(177,`TypeORM documentation`),cf(),bT(178,`.
`),cf(),Aa(179,`p`),bT(180,`The `),Aa(181,`code`),bT(182,`User`),cf(),bT(183,` entity file sits in the `),Aa(184,`code`),bT(185,`users`),cf(),bT(186,` directory, which contains all files related to the `),Aa(187,`code`),bT(188,`UsersModule`),cf(),bT(189,`. You can keep your model files wherever you like, but we recommend placing them near their `),Aa(190,`strong`),bT(191,`domain`),cf(),bT(192,`, in the corresponding module directory.`),cf(),Aa(193,`p`),bT(194,`To start using the `),Aa(195,`code`),bT(196,`User`),cf(),bT(197,` entity, let TypeORM know about it by adding it to the `),Aa(198,`code`),bT(199,`entities`),cf(),bT(200,` array in the `),Aa(201,`code`),bT(202,`forRoot()`),cf(),bT(203,` options (unless you use a static glob path):`),cf(),Aa(204,`app-copy-button`,17)(205,`span`,18),bT(206),LT(207,`extension`),Wa(208,`app-tabs`,null,4),cf(),Aa(210,`pre`)(211,`code`,19),bT(212,`
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(213,`p`),bT(214,`Next, let's look at the `),Aa(215,`code`),bT(216,`UsersModule`),cf(),bT(217,`:`),cf(),Aa(218,`app-copy-button`,17)(219,`span`,18),bT(220),LT(221,`extension`),Wa(222,`app-tabs`,null,5),cf(),Aa(224,`pre`)(225,`code`,19),bT(226,`
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { User } from './user.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
`),cf()()(),Aa(227,`p`),bT(228,`This module uses the `),Aa(229,`code`),bT(230,`forFeature()`),cf(),bT(231,` method to define which repositories are registered in the current scope. With that in place, you can inject the `),Aa(232,`code`),bT(233,`User`),cf(),bT(234,` repository into `),Aa(235,`code`),bT(236,`UsersService`),cf(),bT(237,` with the `),Aa(238,`code`),bT(239,`@InjectRepository()`),cf(),bT(240,` decorator:`),cf(),Aa(241,`app-copy-button`,17)(242,`span`,18),bT(243),LT(244,`extension`),Wa(245,`app-tabs`,null,6),cf(),Aa(247,`pre`)(248,`code`,19),bT(249,`
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
`),cf()(),Aa(250,`pre`)(251,`code`,19),bT(252,`
import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity.js';

@Injectable()
@Dependencies(getRepositoryToken(User))
export class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id) {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id) {
    await this.usersRepository.delete(id);
  }
}
`),cf()()(),Aa(253,`blockquote`,20)(254,`strong`),bT(255,`Notice`),cf(),bT(256,` Don't forget to import the `),Aa(257,`code`),bT(258,`UsersModule`),cf(),bT(259,` into the root `),Aa(260,`code`),bT(261,`AppModule`),cf(),bT(262,`.
`),cf(),Aa(263,`p`),bT(264,`To use the repository outside the module that imports `),Aa(265,`code`),bT(266,`TypeOrmModule.forFeature()`),cf(),bT(267,`, re-export the providers it generates. You can do this by exporting the whole module:`),cf(),Aa(268,`app-copy-button`,17)(269,`span`,18),bT(270),LT(271,`extension`),Wa(272,`app-tabs`,null,7),cf(),Aa(274,`pre`)(275,`code`,19),bT(276,`
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule]
})
export class UsersModule {}
`),cf()()(),Aa(277,`p`),bT(278,`Now, if you import `),Aa(279,`code`),bT(280,`UsersModule`),cf(),bT(281,` into `),Aa(282,`code`),bT(283,`UserHttpModule`),cf(),bT(284,`, you can use `),Aa(285,`code`),bT(286,`@InjectRepository(User)`),cf(),bT(287,` in the latter module's providers:`),cf(),Aa(288,`app-copy-button`,17)(289,`span`,18),bT(290),LT(291,`extension`),Wa(292,`app-tabs`,null,8),cf(),Aa(294,`pre`)(295,`code`,19),bT(296,`
import { Module } from '@nestjs/common';
import { UsersModule } from './users.module.js';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UserHttpModule {}
`),cf()()(),Aa(297,`h4`,27)(298,`span`),bT(299,`Relations`),cf()(),Aa(300,`p`),bT(301,`Relations are associations between two or more tables, based on common fields from each table, often involving primary and foreign keys.`),cf(),Aa(302,`p`),bT(303,`There are three types of relations:`),cf(),Aa(304,`table`)(305,`tr`)(306,`td`)(307,`code`),bT(308,`One-to-one`),cf()(),Aa(309,`td`),bT(310,`Every row in the primary table has one and only one associated row in the foreign table. Use the `),Aa(311,`code`),bT(312,`@OneToOne()`),cf(),bT(313,` decorator to define this type of relation.`),cf()(),Aa(314,`tr`)(315,`td`)(316,`code`),bT(317,`One-to-many / Many-to-one`),cf()(),Aa(318,`td`),bT(319,`Every row in the primary table has one or more related rows in the foreign table. Use the `),Aa(320,`code`),bT(321,`@OneToMany()`),cf(),bT(322,` and `),Aa(323,`code`),bT(324,`@ManyToOne()`),cf(),bT(325,` decorators to define this type of relation.`),cf()(),Aa(326,`tr`)(327,`td`)(328,`code`),bT(329,`Many-to-many`),cf()(),Aa(330,`td`),bT(331,`Every row in the primary table has many related rows in the foreign table, and every row in the foreign table has many related rows in the primary table. Use the `),Aa(332,`code`),bT(333,`@ManyToMany()`),cf(),bT(334,` decorator to define this type of relation.`),cf()()(),Aa(335,`p`),bT(336,`To define relations in entities, use the corresponding `),Aa(337,`strong`),bT(338,`decorators`),cf(),bT(339,`. For example, to define that each `),Aa(340,`code`),bT(341,`User`),cf(),bT(342,` can have multiple photos, use the `),Aa(343,`code`),bT(344,`@OneToMany()`),cf(),bT(345,` decorator.`),cf(),Aa(346,`app-copy-button`,17)(347,`span`,18),bT(348),LT(349,`extension`),Wa(350,`app-tabs`,null,9),cf(),Aa(352,`pre`)(353,`code`,19),bT(354,`
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Photo } from '../photos/photo.entity.js';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];
}
`),cf()()(),Aa(355,`blockquote`,23)(356,`strong`),bT(357,`Hint`),cf(),bT(358,` To learn more about relations in TypeORM, visit the `),Aa(359,`a`,28),bT(360,`TypeORM documentation`),cf(),bT(361,`.
`),cf(),Aa(362,`h4`,29)(363,`span`),bT(364,`Auto-load entities`),cf()(),Aa(365,`p`),bT(366,`Manually adding entities to the `),Aa(367,`code`),bT(368,`entities`),cf(),bT(369,` array of the data source options can be tedious. In addition, referencing entities from the root module breaks application domain boundaries and leaks implementation details to other parts of the application. To avoid this, set the `),Aa(370,`code`),bT(371,`autoLoadEntities`),cf(),bT(372,` property of the options object passed to `),Aa(373,`code`),bT(374,`forRoot()`),cf(),bT(375,` to `),Aa(376,`code`),bT(377,`true`),cf(),bT(378,`:`),cf(),Aa(379,`app-copy-button`,17)(380,`span`,18),bT(381),LT(382,`extension`),Wa(383,`app-tabs`,null,10),cf(),Aa(385,`pre`)(386,`code`,19),bT(387,`
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(388,`p`),bT(389,`With this option enabled, every entity registered through the `),Aa(390,`code`),bT(391,`forFeature()`),cf(),bT(392,` method is automatically added to the `),Aa(393,`code`),bT(394,`entities`),cf(),bT(395,` array of the data source options.`),cf(),Aa(396,`blockquote`,20)(397,`strong`),bT(398,`Warning`),cf(),bT(399,` Entities that aren't registered through `),Aa(400,`code`),bT(401,`forFeature()`),cf(),bT(402,`, and are only referenced from another entity (via a relation), aren't included by the `),Aa(403,`code`),bT(404,`autoLoadEntities`),cf(),bT(405,` setting.
`),cf(),Aa(406,`h4`,30)(407,`span`),bT(408,`Separating entity definition`),cf()(),Aa(409,`p`),bT(410,`You can define an entity and its columns directly in the model class, using decorators. Alternatively, you can define entities and their columns in separate files using `),Aa(411,`a`,31),bT(412,`entity schemas`),cf(),bT(413,`.`),cf(),Aa(414,`app-copy-button`)(415,`pre`)(416,`code`,19),bT(417,`
import { EntitySchema } from 'typeorm';
import { User } from './user.entity.js';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  relations: {
    photos: {
      type: 'one-to-many',
      target: 'Photo', // the name of the PhotoSchema
    },
  },
});
`),cf()()(),Aa(418,`blockquote`,20)(419,`strong`),bT(420,`Warning`),cf(),bT(421,` If you provide the `),Aa(422,`code`),bT(423,`target`),cf(),bT(424,` option, the `),Aa(425,`code`),bT(426,`name`),cf(),bT(427,` option must match the name of the target class. If you don't provide `),Aa(428,`code`),bT(429,`target`),cf(),bT(430,`, you can use any name.
`),cf(),Aa(431,`p`),bT(432,`Nest lets you use an `),Aa(433,`code`),bT(434,`EntitySchema`),cf(),bT(435,` instance wherever an entity class is expected. For example:`),cf(),Aa(436,`app-copy-button`)(437,`pre`)(438,`code`,19),bT(439,`
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './user.schema.js';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
`),cf()()(),Aa(440,`h4`,32)(441,`span`),bT(442,`TypeORM Transactions`),cf()(),Aa(443,`p`),bT(444,`A `),Aa(445,`a`,33),bT(446,`database transaction`),cf(),bT(447,` is a unit of work performed against a database and treated in a coherent and reliable way, independent of other transactions. A transaction generally represents any change in a database.`),cf(),Aa(448,`p`),bT(449,`There are several strategies for handling `),Aa(450,`a`,34),bT(451,`TypeORM transactions`),cf(),bT(452,`. We recommend the `),Aa(453,`code`),bT(454,`QueryRunner`),cf(),bT(455,` class, because it gives you full control over the transaction.`),cf(),Aa(456,`p`),bT(457,`First, inject the `),Aa(458,`code`),bT(459,`DataSource`),cf(),bT(460,` object into a class as usual:`),cf(),Aa(461,`app-copy-button`)(462,`pre`)(463,`code`,19),bT(464,`
@Injectable()
export class UsersService {
  constructor(private dataSource: DataSource) {}
}
`),cf()()(),Aa(465,`blockquote`,23)(466,`strong`),bT(467,`Hint`),cf(),bT(468,` The `),Aa(469,`code`),bT(470,`DataSource`),cf(),bT(471,` class is imported from the `),Aa(472,`code`),bT(473,`typeorm`),cf(),bT(474,` package.
`),cf(),Aa(475,`p`),bT(476,`Then use it to create a transaction:`),cf(),Aa(477,`app-copy-button`)(478,`pre`)(479,`code`,19),bT(480,`
async createMany(users: User[]) {
  const queryRunner = this.dataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    await queryRunner.manager.save(users[0]);
    await queryRunner.manager.save(users[1]);

    await queryRunner.commitTransaction();
  } catch (err) {
    // since we have errors, roll back the changes we made
    await queryRunner.rollbackTransaction();
  } finally {
    // you need to release a manually instantiated query runner
    await queryRunner.release();
  }
}
`),cf()()(),Aa(481,`blockquote`,23)(482,`strong`),bT(483,`Hint`),cf(),bT(484,` The `),Aa(485,`code`),bT(486,`dataSource`),cf(),bT(487,` is used only to create the `),Aa(488,`code`),bT(489,`QueryRunner`),cf(),bT(490,`. However, testing this class would require mocking the entire `),Aa(491,`code`),bT(492,`DataSource`),cf(),bT(493,` object, which exposes many methods. Instead, we recommend a helper factory class (e.g., `),Aa(494,`code`),bT(495,`QueryRunnerFactory`),cf(),bT(496,`) that implements an interface with only the methods needed to manage transactions. This makes those methods straightforward to mock.
`),cf(),Aa(497,`p`),Wa(498,`app-banner-observe`),cf(),Aa(499,`p`),bT(500,`Alternatively, you can use the callback-style `),Aa(501,`code`),bT(502,`transaction()`),cf(),bT(503,` method of the `),Aa(504,`code`),bT(505,`DataSource`),cf(),bT(506,` object (see `),Aa(507,`a`,35),bT(508,`Creating and using transactions`),cf(),bT(509,` in the TypeORM documentation):`),cf(),Aa(510,`app-copy-button`)(511,`pre`)(512,`code`,19),bT(513,`
async createMany(users: User[]) {
  await this.dataSource.transaction(async manager => {
    await manager.save(users[0]);
    await manager.save(users[1]);
  });
}
`),cf()()(),Aa(514,`h4`,36)(515,`span`),bT(516,`Subscribers`),cf()(),Aa(517,`p`),bT(518,`With TypeORM `),Aa(519,`a`,37),bT(520,`subscribers`),cf(),bT(521,`, you can listen to specific entity events.`),cf(),Aa(522,`app-copy-button`)(523,`pre`)(524,`code`,19),bT(525,`
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { User } from './user.entity.js';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  beforeInsert(event: InsertEvent<User>) {
    console.log(\`BEFORE USER INSERTED: \`, event.entity);
  }
}
`),cf()()(),Aa(526,`blockquote`,38)(527,`strong`),bT(528,`Warning`),cf(),bT(529,` Event subscribers cannot be `),Aa(530,`a`,39),bT(531,`request-scoped`),cf(),bT(532,`.
`),cf(),Aa(533,`p`),bT(534,`Now, add the `),Aa(535,`code`),bT(536,`UserSubscriber`),cf(),bT(537,` class to the `),Aa(538,`code`),bT(539,`providers`),cf(),bT(540,` array:`),cf(),Aa(541,`app-copy-button`)(542,`pre`)(543,`code`,19),bT(544,`
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity.js';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import { UserSubscriber } from './user.subscriber.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UserSubscriber],
  controllers: [UsersController],
})
export class UsersModule {}
`),cf()()(),Aa(545,`h4`,40)(546,`span`),bT(547,`Migrations`),cf()(),Aa(548,`p`)(549,`a`,41),bT(550,`Migrations`),cf(),bT(551,` provide a way to incrementally update the database schema to keep it in sync with the application's data model while preserving existing data in the database. To generate, run, and revert migrations, TypeORM provides a dedicated `),Aa(552,`a`,42),bT(553,`CLI`),cf(),bT(554,`.`),cf(),Aa(555,`p`),bT(556,`Migration classes are separate from the Nest application source code, and TypeORM manages their lifecycle. Therefore, you can't use dependency injection or other Nest-specific features in migrations. To learn more, see the `),Aa(557,`a`,41),bT(558,`migrations guide`),cf(),bT(559,` in the TypeORM documentation.`),cf(),Aa(560,`h4`,43)(561,`span`),bT(562,`Multiple databases`),cf()(),Aa(563,`p`),bT(564,`Some projects require multiple database connections, which this module also supports. To work with multiple connections, first create them. In this case, every data source other than the default one must have a unique `),Aa(565,`strong`),bT(566,`name`),cf(),bT(567,`.`),cf(),Aa(568,`p`),bT(569,`Suppose you have an `),Aa(570,`code`),bT(571,`Album`),cf(),bT(572,` entity stored in its own database.`),cf(),Aa(573,`app-copy-button`)(574,`pre`)(575,`code`,19),bT(576,`
const defaultOptions = {
  type: 'postgres' as const,
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...defaultOptions,
      host: 'user_db_host',
      entities: [User],
    }),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      name: 'albumsConnection',
      host: 'album_db_host',
      entities: [Album],
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(577,`blockquote`,20)(578,`strong`),bT(579,`Notice`),cf(),bT(580,` If you don't set a `),Aa(581,`code`),bT(582,`name`),cf(),bT(583,` for a data source, its name is `),Aa(584,`code`),bT(585,`default`),cf(),bT(586,`. Don't register multiple data sources without a name, or with the same name; otherwise, they override each other.
`),cf(),Aa(587,`blockquote`,20)(588,`strong`),bT(589,`Notice`),cf(),bT(590,` If you use `),Aa(591,`code`),bT(592,`TypeOrmModule.forRootAsync()`),cf(),bT(593,`, you must `),Aa(594,`strong`),bT(595,`also`),cf(),bT(596,` set the data source name outside `),Aa(597,`code`),bT(598,`useFactory`),cf(),bT(599,`. For example:
`),Aa(600,`app-copy-button`)(601,`pre`)(602,`code`,19),bT(603,`
TypeOrmModule.forRootAsync({
  name: 'albumsConnection',
  useFactory: ...,
  inject: ...,
}),
`),cf()()(),Aa(604,`p`),bT(605,`For more details, see `),Aa(606,`a`,44),bT(607,`nestjs/typeorm issue #86`),cf(),bT(608,`.`),cf()(),Aa(609,`p`),bT(610,`At this point, the `),Aa(611,`code`),bT(612,`User`),cf(),bT(613,` and `),Aa(614,`code`),bT(615,`Album`),cf(),bT(616,` entities are each registered with their own data source. With this setup, you have to tell the `),Aa(617,`code`),bT(618,`TypeOrmModule.forFeature()`),cf(),bT(619,` method and the `),Aa(620,`code`),bT(621,`@InjectRepository()`),cf(),bT(622,` decorator which data source to use. If you don't pass a data source name, the `),Aa(623,`code`),bT(624,`default`),cf(),bT(625,` data source is used.`),cf(),Aa(626,`app-copy-button`)(627,`pre`)(628,`code`,19),bT(629,`
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Album], 'albumsConnection'),
  ],
})
export class AppModule {}
`),cf()()(),Aa(630,`p`),bT(631,`You can also inject the `),Aa(632,`code`),bT(633,`DataSource`),cf(),bT(634,` or `),Aa(635,`code`),bT(636,`EntityManager`),cf(),bT(637,` for a given data source:`),cf(),Aa(638,`app-copy-button`)(639,`pre`)(640,`code`,19),bT(641,`
@Injectable()
export class AlbumsService {
  constructor(
    @InjectDataSource('albumsConnection')
    private dataSource: DataSource,
    @InjectEntityManager('albumsConnection')
    private entityManager: EntityManager,
  ) {}
}
`),cf()()(),Aa(642,`p`),bT(643,`You can also inject any `),Aa(644,`code`),bT(645,`DataSource`),cf(),bT(646,` into a factory provider by using the `),Aa(647,`code`),bT(648,`getDataSourceToken()`),cf(),bT(649,` function:`),cf(),Aa(650,`app-copy-button`)(651,`pre`)(652,`code`,19),bT(653,`
@Module({
  providers: [
    {
      provide: AlbumsService,
      useFactory: (albumsConnection: DataSource) => {
        return new AlbumsService(albumsConnection);
      },
      inject: [getDataSourceToken('albumsConnection')],
    },
  ],
})
export class AlbumsModule {}
`),cf()()(),Aa(654,`h4`,45)(655,`span`),bT(656,`Testing`),cf()(),Aa(657,`p`),bT(658,`When unit testing an application, you usually want to avoid connecting to a database, to keep test suites independent and as fast as possible. However, your classes might depend on repositories obtained from the data source instance. The solution is to create mock repositories using `),Aa(659,`a`,46),bT(660,`custom providers`),cf(),bT(661,`. Each registered repository is automatically represented by an `),Aa(662,`code`),bT(663,`<EntityName>Repository`),cf(),bT(664,` token, where `),Aa(665,`code`),bT(666,`EntityName`),cf(),bT(667,` is the name of your entity class.`),cf(),Aa(668,`p`),bT(669,`The `),Aa(670,`code`),bT(671,`@nestjs/typeorm`),cf(),bT(672,` package exports the `),Aa(673,`code`),bT(674,`getRepositoryToken()`),cf(),bT(675,` function, which returns this token for a given entity. For a named data source, pass the data source name as the second argument.`),cf(),Aa(676,`app-copy-button`)(677,`pre`)(678,`code`,19),bT(679,`
@Module({
  providers: [
    UsersService,
    {
      provide: getRepositoryToken(User),
      useValue: mockRepository,
    },
  ],
})
export class UsersModule {}
`),cf()()(),Aa(680,`p`),bT(681,`Now `),Aa(682,`code`),bT(683,`mockRepository`),cf(),bT(684,` is used as the `),Aa(685,`code`),bT(686,`User`),cf(),bT(687,` repository. Whenever a class injects it with `),Aa(688,`code`),bT(689,`@InjectRepository(User)`),cf(),bT(690,`, Nest provides the registered `),Aa(691,`code`),bT(692,`mockRepository`),cf(),bT(693,` object.`),cf(),Aa(694,`h4`,47)(695,`span`),bT(696,`Async configuration`),cf()(),Aa(697,`p`),bT(698,`You may want to pass the module options asynchronously instead of statically. In this case, use the `),Aa(699,`code`),bT(700,`forRootAsync()`),cf(),bT(701,` method, which supports several ways to provide async configuration.`),cf(),Aa(702,`p`),bT(703,`One approach is to use a factory function:`),cf(),Aa(704,`app-copy-button`)(705,`pre`)(706,`code`,19),bT(707,`
TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [],
    synchronize: true,
  }),
});
`),cf()()(),Aa(708,`p`),bT(709,`The factory behaves like any other `),Aa(710,`a`,48),bT(711,`asynchronous provider`),cf(),bT(712,` (e.g., it can be `),Aa(713,`code`),bT(714,`async`),cf(),bT(715,`, and it can inject dependencies through `),Aa(716,`code`),bT(717,`inject`),cf(),bT(718,`).`),cf(),Aa(719,`app-copy-button`)(720,`pre`)(721,`code`,19),bT(722,`
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('HOST'),
    port: +configService.get('PORT'),
    username: configService.get('USERNAME'),
    password: configService.get('PASSWORD'),
    database: configService.get('DATABASE'),
    entities: [],
    synchronize: true,
  }),
  inject: [ConfigService],
});
`),cf()()(),Aa(723,`p`),bT(724,`Alternatively, you can use the `),Aa(725,`code`),bT(726,`useClass`),cf(),bT(727,` syntax:`),cf(),Aa(728,`app-copy-button`)(729,`pre`)(730,`code`,19),bT(731,`
TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService,
});
`),cf()()(),Aa(732,`p`),bT(733,`The construction above instantiates `),Aa(734,`code`),bT(735,`TypeOrmConfigService`),cf(),bT(736,` inside `),Aa(737,`code`),bT(738,`TypeOrmModule`),cf(),bT(739,` and uses it to create the options object by calling `),Aa(740,`code`),bT(741,`createTypeOrmOptions()`),cf(),bT(742,`. This means that `),Aa(743,`code`),bT(744,`TypeOrmConfigService`),cf(),bT(745,` has to implement the `),Aa(746,`code`),bT(747,`TypeOrmOptionsFactory`),cf(),bT(748,` interface:`),cf(),Aa(749,`app-copy-button`)(750,`pre`)(751,`code`,19),bT(752,`
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    };
  }
}
`),cf()()(),Aa(753,`p`),bT(754,`To reuse a provider imported from a different module instead of creating `),Aa(755,`code`),bT(756,`TypeOrmConfigService`),cf(),bT(757,` inside `),Aa(758,`code`),bT(759,`TypeOrmModule`),cf(),bT(760,`, use the `),Aa(761,`code`),bT(762,`useExisting`),cf(),bT(763,` syntax:`),cf(),Aa(764,`app-copy-button`)(765,`pre`)(766,`code`,19),bT(767,`
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useExisting: ConfigService,
});
`),cf()()(),Aa(768,`p`),bT(769,`This works the same as `),Aa(770,`code`),bT(771,`useClass`),cf(),bT(772,`, with one critical difference: `),Aa(773,`code`),bT(774,`TypeOrmModule`),cf(),bT(775,` looks up imported modules to reuse an existing `),Aa(776,`code`),bT(777,`ConfigService`),cf(),bT(778,` instead of instantiating a new one.`),cf(),Aa(779,`blockquote`,23)(780,`strong`),bT(781,`Hint`),cf(),bT(782,` Define the `),Aa(783,`code`),bT(784,`name`),cf(),bT(785,` property at the same level as the `),Aa(786,`code`),bT(787,`useFactory`),cf(),bT(788,`, `),Aa(789,`code`),bT(790,`useClass`),cf(),bT(791,`, or `),Aa(792,`code`),bT(793,`useExisting`),cf(),bT(794,` property. This lets Nest register the data source under the appropriate injection token.
`),cf(),Aa(795,`h4`,49)(796,`span`),bT(797,`Custom DataSource Factory`),cf()(),Aa(798,`p`),bT(799,`Together with async configuration (`),Aa(800,`code`),bT(801,`useFactory`),cf(),bT(802,`, `),Aa(803,`code`),bT(804,`useClass`),cf(),bT(805,`, or `),Aa(806,`code`),bT(807,`useExisting`),cf(),bT(808,`), you can optionally specify a `),Aa(809,`code`),bT(810,`dataSourceFactory`),cf(),bT(811,` function to provide your own TypeORM data source instead of letting `),Aa(812,`code`),bT(813,`TypeOrmModule`),cf(),bT(814,` create it.`),cf(),Aa(815,`p`)(816,`code`),bT(817,`dataSourceFactory`),cf(),bT(818,` receives the TypeORM `),Aa(819,`code`),bT(820,`DataSourceOptions`),cf(),bT(821,` resolved by the async configuration and returns a `),Aa(822,`code`),bT(823,`Promise`),cf(),bT(824,` that resolves to a TypeORM `),Aa(825,`code`),bT(826,`DataSource`),cf(),bT(827,`. If the returned data source isn't initialized yet, `),Aa(828,`code`),bT(829,`TypeOrmModule`),cf(),bT(830,` initializes it (unless `),Aa(831,`code`),bT(832,`manualInitialization`),cf(),bT(833,` is set).`),cf(),Aa(834,`app-copy-button`)(835,`pre`)(836,`code`,19),bT(837,`
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  // Use useFactory, useClass, or useExisting
  // to configure the DataSourceOptions.
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('HOST'),
    port: +configService.get('PORT'),
    username: configService.get('USERNAME'),
    password: configService.get('PASSWORD'),
    database: configService.get('DATABASE'),
    entities: [],
    synchronize: true,
  }),
  // dataSourceFactory receives the configured DataSourceOptions
  // and returns a Promise<DataSource>.
  dataSourceFactory: async (options) => {
    const dataSource = await new DataSource(options!).initialize();
    return dataSource;
  },
});
`),cf()()(),Aa(838,`blockquote`,23)(839,`strong`),bT(840,`Hint`),cf(),bT(841,` The `),Aa(842,`code`),bT(843,`DataSource`),cf(),bT(844,` class is imported from the `),Aa(845,`code`),bT(846,`typeorm`),cf(),bT(847,` package.
`),cf(),Aa(848,`h4`,50)(849,`span`),bT(850,`Example`),cf()(),Aa(851,`p`),bT(852,`A working example is available in the `),Aa(853,`a`,51),bT(854,`TypeORM sample application`),cf(),bT(855,` in the NestJS repository.`),cf(),Aa(856,`p`),Wa(857,`app-banner-enterprise`),cf()(),Aa(858,`a`,52),Wa(859,`i`,53),Aa(860,`span`),bT(861,`Edit on GitHub`),cf()()()),c&2){let w=tT(34),y=tT(141),k=tT(168),j=tT(209),T=tT(223),v=tT(246),A=tT(273),z=tT(293),R=tT(351),q=tT(384);zC(31),hf(` `,jT(32,18,`app.module`,w.isJsActive),`
`),zC(107),hf(` `,jT(139,21,`app.module`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(20),hf(` `,jT(166,24,`user.entity`,k.isJsActive),`
`),zC(41),hf(` `,jT(207,27,`app.module`,j.isJsActive),`
`),zC(14),hf(` `,jT(221,30,`users.module`,T.isJsActive),`
`),zC(23),hf(` `,jT(244,33,`users.service`,v.isJsActive),`
`),zC(4),zy(`hide`,v.isJsActive),zC(3),zy(`hide`,!v.isJsActive),zC(20),hf(` `,jT(271,36,`users.module`,A.isJsActive),`
`),zC(20),hf(` `,jT(291,39,`users-http.module`,z.isJsActive),`
`),zC(58),hf(` `,jT(349,42,`user.entity`,R.isJsActive),`
`),zC(33),hf(` `,jT(382,45,`app.module`,q.isJsActive),`
`)}},dependencies:[Jc,ln,u,Lt,l$1,l$2,g],encapsulation:2})}return m})();var rt=[{path:`overview`,component:W,data:{title:`Databases`}},{path:`typeorm`,component:Y,data:{title:`TypeORM`}},{path:`sequelize`,component:J,data:{title:`Sequelize`}},{path:`drizzle`,component:N,data:{title:`Drizzle`}},{path:`database`,redirectTo:g$1(`/data/overview`,a)},{path:`mongodb`,component:H,data:{title:`MongoDB`}},{path:`prisma`,component:Q,data:{title:`Prisma`}},{path:`mikroorm`,component:B,data:{title:`MikroORM`}},{path:`caching`,component:F,data:{title:`Caching`}}];export{rt as DATA_ROUTES};