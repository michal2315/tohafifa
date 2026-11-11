import{C as hf,M as xy,N as zC,P as zy,T as jT,_ as Wa,a as u,b as cf,c as l,d as Jc,i as g,k as tT,l as Aa,m as LT,n as ln,p as Ky,r as xt,s as l$1,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var B=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-basics`]],features:[xy],decls:1004,vars:46,consts:[[`contentReference`,``],[`app46e63a71c3e53f7faa885989690aed0c5bc5a76c`,``],[`app64dd590552bd5a77c5376b21e85e024ba06f6188`,``],[`app65df9f17ff0ecdc1a6c9fd576cad7ff87e80c67f`,``],[`app3cc0ca8461673b0b22f0afc4c3a28a948371ab9e`,``],[`appbda4192cb9f1d6678c514b4e0c5e5a39b12e1b0f`,``],[`app0ad9eea457c9c8802937eb7e1ae10b5930ecf5f1`,``],[`appc7b769679f91ce651a296ddfce6e33be4f8b054d`,``],[`appcccc62debdf7461abfed0fc81029b884f64642f2`,``],[`app49f9e82e9bd367209cce42d295d78138036f308c`,``],[`app0378712fddeaed6a0b16f0d37a97f99da2b9fd7b`,``],[1,`content`],[1,`content-inner`],[`id`,`overview`],[`src`,`/assets/Microservices_1.png`,1,`illustrative-image`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`getting-started`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`href`,`https://github.com/nestjs/nest/blob/master/packages/microservices/interfaces/serializer.interface.ts`,`target`,`_blank`],[`href`,`https://github.com/nestjs/nest/blob/master/packages/microservices/interfaces/deserializer.interface.ts`,`target`,`_blank`],[`href`,`/microservices/basics#tls-support`],[`appAnchor`,``,`id`,`message-and-event-patterns`],[`appAnchor`,``,`id`,`request-response`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.confluent.io/3.0.0/streams/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.nats.io/nats-concepts/jetstream`],[`href`,`/microservices/basics#event-based`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nats.io/`],[`routerLink`,`/controllers`],[`appAnchor`,``,`id`,`asynchronous-responses`],[`appAnchor`,``,`id`,`event-based`],[`appAnchor`,``,`id`,`additional-request-details`],[`routerLink`,`/microservices/pipes`],[`appAnchor`,``,`id`,`client-producer-class`],[`href`,`/fundamentals/custom-providers#non-class-based-provider-tokens`],[`routerLink`,`/fundamentals/custom-providers`],[`appAnchor`,``,`id`,`sending-messages`],[`appAnchor`,``,`id`,`publishing-events`],[`appAnchor`,``,`id`,`request-scoping`],[`routerLink`,`/fundamentals/injection-scopes`],[`appAnchor`,``,`id`,`instance-status-updates`],[`appAnchor`,``,`id`,`listening-to-internal-events`],[`appAnchor`,``,`id`,`underlying-driver-access`],[`appAnchor`,``,`id`,`handling-timeouts`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://rxjs.dev`],[`appAnchor`,``,`id`,`tracing-a-request-across-services`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.observe.nestjs.com/`,`title`,`NestJS Observe`],[`src`,`https://www.observe.nestjs.com/docs/telemetry/service-flow.webp`,`alt`,`Trace correlation across services`],[`routerLink`,`/observability/distributed-tracing`],[`routerLink`,`/observability/overview`],[`appAnchor`,``,`id`,`tls-support`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/tls.html`],[`appAnchor`,``,`id`,`dynamic-configuration`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/basics.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,11,0)(2,`div`,12)(3,`h3`,13),bT(4,`Overview`),cf(),Aa(5,`p`),bT(6,`In addition to traditional (sometimes called monolithic) application architectures, Nest natively supports the microservice architectural style of development. Most of the concepts discussed elsewhere in this documentation, such as dependency injection, decorators, exception filters, pipes, guards, and interceptors, apply equally to microservices. Wherever possible, Nest abstracts implementation details so that the same components can run across HTTP-based platforms, WebSockets, and microservices. This section covers the aspects of Nest that are specific to microservices.`),cf(),Aa(7,`p`),bT(8,`In Nest, a microservice is fundamentally an application that uses a different `),Aa(9,`strong`),bT(10,`transport`),cf(),bT(11,` layer than HTTP.`),cf(),Aa(12,`figure`),Wa(13,`img`,14),cf(),Aa(14,`p`),bT(15,`Nest supports several built-in transport layer implementations, called `),Aa(16,`strong`),bT(17,`transporters`),cf(),bT(18,`, which are responsible for transmitting messages between different microservice instances. Most transporters natively support both `),Aa(19,`strong`),bT(20,`request-response`),cf(),bT(21,` and `),Aa(22,`strong`),bT(23,`event-based`),cf(),bT(24,` message styles. Nest abstracts the implementation details of each transporter behind a canonical interface for both styles. This lets you switch from one transport layer to another (e.g., to take advantage of the reliability or performance features of a particular transport layer) without changing your application code.`),cf(),Aa(25,`h4`,15)(26,`span`),bT(27,`Installation`),cf()(),Aa(28,`p`),bT(29,`To start building microservices, first install the required package:`),cf(),Aa(30,`pre`)(31,`code`,16),bT(32,`
$ npm i --save @nestjs/microservices
`),cf()(),Aa(33,`h4`,17)(34,`span`),bT(35,`Getting started`),cf()(),Aa(36,`p`),bT(37,`To instantiate a microservice, use the `),Aa(38,`code`),bT(39,`createMicroservice()`),cf(),bT(40,` method of the `),Aa(41,`code`),bT(42,`NestFactory`),cf(),bT(43,` class:`),cf(),Aa(44,`app-copy-button`,18)(45,`span`,19),bT(46),LT(47,`extension`),Wa(48,`app-tabs`,null,1),cf(),Aa(50,`pre`)(51,`code`,20),bT(52,`
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
await bootstrap();
`),cf()(),Aa(53,`pre`)(54,`code`,20),bT(55,`
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
  });
  await app.listen();
}
await bootstrap();
`),cf()()(),Aa(56,`blockquote`,21)(57,`strong`),bT(58,`Hint`),cf(),bT(59,` Microservices use the `),Aa(60,`strong`),bT(61,`TCP`),cf(),bT(62,` transport layer by default.
`),cf(),Aa(63,`p`),bT(64,`The second argument of the `),Aa(65,`code`),bT(66,`createMicroservice()`),cf(),bT(67,` method is an `),Aa(68,`code`),bT(69,`options`),cf(),bT(70,` object with two members:`),cf(),Aa(71,`table`)(72,`tr`)(73,`td`)(74,`code`),bT(75,`transport`),cf()(),Aa(76,`td`),bT(77,`Specifies the transporter (e.g., `),Aa(78,`code`),bT(79,`Transport.NATS`),cf(),bT(80,`)`),cf()(),Aa(81,`tr`)(82,`td`)(83,`code`),bT(84,`options`),cf()(),Aa(85,`td`),bT(86,`A transporter-specific options object that determines transporter behavior`),cf()()(),Aa(87,`p`),bT(88,` The `),Aa(89,`code`),bT(90,`options`),cf(),bT(91,` object is specific to the chosen transporter. The `),Aa(92,`strong`),bT(93,`TCP`),cf(),bT(94,` transporter exposes the properties described below. For other transporters (e.g., Redis or MQTT), see the relevant chapter for a description of the available options.
`),cf(),Aa(95,`table`)(96,`tr`)(97,`td`)(98,`code`),bT(99,`host`),cf()(),Aa(100,`td`),bT(101,`Connection hostname`),cf()(),Aa(102,`tr`)(103,`td`)(104,`code`),bT(105,`port`),cf()(),Aa(106,`td`),bT(107,`Connection port`),cf()(),Aa(108,`tr`)(109,`td`)(110,`code`),bT(111,`retryAttempts`),cf()(),Aa(112,`td`),bT(113,`Number of times the server tries to listen again after it closes unexpectedly (default: `),Aa(114,`code`),bT(115,`0`),cf(),bT(116,`)`),cf()(),Aa(117,`tr`)(118,`td`)(119,`code`),bT(120,`retryDelay`),cf()(),Aa(121,`td`),bT(122,`Delay between those attempts (ms) (default: `),Aa(123,`code`),bT(124,`0`),cf(),bT(125,`)`),cf()(),Aa(126,`tr`)(127,`td`)(128,`code`),bT(129,`serializer`),cf()(),Aa(130,`td`),bT(131,`Custom `),Aa(132,`a`,22),bT(133,`serializer`),cf(),bT(134,` for outgoing messages`),cf()(),Aa(135,`tr`)(136,`td`)(137,`code`),bT(138,`deserializer`),cf()(),Aa(139,`td`),bT(140,`Custom `),Aa(141,`a`,23),bT(142,`deserializer`),cf(),bT(143,` for incoming messages`),cf()(),Aa(144,`tr`)(145,`td`)(146,`code`),bT(147,`socketClass`),cf()(),Aa(148,`td`),bT(149,`A custom Socket that extends `),Aa(150,`code`),bT(151,`TcpSocket`),cf(),bT(152,` (default: `),Aa(153,`code`),bT(154,`JsonSocket`),cf(),bT(155,`)`),cf()(),Aa(156,`tr`)(157,`td`)(158,`code`),bT(159,`tlsOptions`),cf()(),Aa(160,`td`),bT(161,`Options to configure the TLS protocol (see `),Aa(162,`a`,24),bT(163,`TLS support`),cf(),bT(164,`)`),cf()(),Aa(165,`tr`)(166,`td`)(167,`code`),bT(168,`maxBufferSize`),cf()(),Aa(169,`td`),bT(170,`Maximum size of the buffer for incoming messages, in characters (default: `),Aa(171,`code`),bT(172,`(512 * 1024 * 1024) / 4`),cf(),bT(173,`)`),cf()(),Aa(174,`tr`)(175,`td`)(176,`code`),bT(177,`incompleteMessageTimeout`),cf()(),Aa(178,`td`),bT(179,`How long (ms) a peer may stay silent in the middle of a packet before the connection is dropped. Set to `),Aa(180,`code`),bT(181,`0`),cf(),bT(182,` to disable (default: `),Aa(183,`code`),bT(184,`30000`),cf(),bT(185,`)`),cf()(),Aa(186,`tr`)(187,`td`)(188,`code`),bT(189,`maxSendBufferSize`),cf()(),Aa(190,`td`),bT(191,`Maximum number of response bytes that may be queued for a peer that isn't reading them before the connection is dropped. Set to `),Aa(192,`code`),bT(193,`0`),cf(),bT(194,` to disable (default: 128MB)`),cf()()(),Aa(195,`h4`,25)(196,`span`),bT(197,`Message and Event Patterns`),cf()(),Aa(198,`p`),bT(199,`Microservices recognize both messages and events by `),Aa(200,`strong`),bT(201,`patterns`),cf(),bT(202,`. A pattern is a plain value, e.g., a literal object or a string. Patterns are automatically serialized and sent over the network along with the data portion of a message. This way, message senders and consumers can coordinate which requests are consumed by which handlers.`),cf(),Aa(203,`h4`,26)(204,`span`),bT(205,`Request-response`),cf()(),Aa(206,`p`),bT(207,`The request-response message style is useful when you need to `),Aa(208,`strong`),bT(209,`exchange`),cf(),bT(210,` messages between services. It ensures that the service has actually received the message, without requiring you to implement an acknowledgment protocol manually. However, request-response isn't always the best fit. For example, streaming platforms that use log-based persistence, such as `),Aa(211,`a`,27),bT(212,`Kafka`),cf(),bT(213,` or `),Aa(214,`a`,28),bT(215,`NATS JetStream`),cf(),bT(216,`, are optimized for a different set of challenges, more aligned with the event messaging paradigm (see `),Aa(217,`a`,29),bT(218,`event-based messaging`),cf(),bT(219,` for more details).`),cf(),Aa(220,`p`),bT(221,`To enable the request-response message type, Nest creates two logical channels: one for transferring data and another for waiting for incoming responses. For some underlying transports, like `),Aa(222,`a`,30),bT(223,`NATS`),cf(),bT(224,`, this dual-channel support is provided out of the box. For others, Nest compensates by creating separate channels manually, which can introduce some overhead. If you don't need the request-response message style, consider using the event-based method instead.`),cf(),Aa(225,`p`),bT(226,`To create a message handler based on the request-response paradigm, use the `),Aa(227,`code`),bT(228,`@MessagePattern()`),cf(),bT(229,` decorator, which is imported from the `),Aa(230,`code`),bT(231,`@nestjs/microservices`),cf(),bT(232,` package. Use this decorator only within `),Aa(233,`a`,31),bT(234,`controller`),cf(),bT(235,` classes, as they serve as the entry points for your application. The Nest runtime ignores it in providers.`),cf(),Aa(236,`app-copy-button`,18)(237,`span`,19),bT(238),LT(239,`extension`),Wa(240,`app-tabs`,null,2),cf(),Aa(242,`pre`)(243,`code`,20),bT(244,`
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MathController {
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
`),cf()(),Aa(245,`pre`)(246,`code`,20),bT(247,`
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MathController {
  @MessagePattern({ cmd: 'sum' })
  accumulate(data) {
    return (data || []).reduce((a, b) => a + b);
  }
}
`),cf()()(),Aa(248,`p`),bT(249,`In the above code, the `),Aa(250,`code`),bT(251,`accumulate()`),cf(),Aa(252,`strong`),bT(253,`message handler`),cf(),bT(254,` listens for messages that match the `),Aa(255,`code`),bT(256),cf(),bT(257,` message pattern. The message handler takes a single argument, the `),Aa(258,`code`),bT(259,`data`),cf(),bT(260,` passed from the client. In this case, the data is an array of numbers to be accumulated.`),cf(),Aa(261,`h4`,32)(262,`span`),bT(263,`Asynchronous responses`),cf()(),Aa(264,`p`),bT(265,`Message handlers can respond either synchronously or `),Aa(266,`strong`),bT(267,`asynchronously`),cf(),bT(268,`, so `),Aa(269,`code`),bT(270,`async`),cf(),bT(271,` methods are supported.`),cf(),Aa(272,`app-copy-button`,18)(273,`span`,19),Wa(274,`app-tabs`,null,3),cf(),Aa(276,`pre`)(277,`code`,20),bT(278,`
@MessagePattern({ cmd: 'sum' })
async accumulate(data: number[]): Promise<number> {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()(),Aa(279,`pre`)(280,`code`,20),bT(281,`
@MessagePattern({ cmd: 'sum' })
async accumulate(data) {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()()(),Aa(282,`p`),bT(283,`A message handler can also return an `),Aa(284,`code`),bT(285,`Observable`),cf(),bT(286,`, in which case the result values are emitted until the stream completes.`),cf(),Aa(287,`app-copy-button`,18)(288,`span`,19),Wa(289,`app-tabs`,null,4),cf(),Aa(291,`pre`)(292,`code`,20),bT(293,`
@MessagePattern({ cmd: 'sum' })
accumulate(data: number[]): Observable<number> {
  return from([1, 2, 3]);
}
`),cf()(),Aa(294,`pre`)(295,`code`,20),bT(296,`
@MessagePattern({ cmd: 'sum' })
accumulate(data) {
  return from([1, 2, 3]);
}
`),cf()()(),Aa(297,`p`),bT(298,`In the example above, the message handler responds `),Aa(299,`strong`),bT(300,`three times`),cf(),bT(301,`, once for each item in the array.`),cf(),Aa(302,`h4`,33)(303,`span`),bT(304,`Event-based`),cf()(),Aa(305,`p`),bT(306,`While the request-response method works well for exchanging messages between services, it is less suited to event-based messaging, where you want to publish `),Aa(307,`strong`),bT(308,`events`),cf(),bT(309,` without waiting for a response. In such cases, the overhead of maintaining two channels for request-response is unnecessary.`),cf(),Aa(310,`p`),bT(311,`For example, if you want to notify another service that a specific condition has occurred in this part of the system, use the event-based message style.`),cf(),Aa(312,`p`),bT(313,`To create an event handler, use the `),Aa(314,`code`),bT(315,`@EventPattern()`),cf(),bT(316,` decorator, which is imported from the `),Aa(317,`code`),bT(318,`@nestjs/microservices`),cf(),bT(319,` package.`),cf(),Aa(320,`app-copy-button`,18)(321,`span`,19),Wa(322,`app-tabs`,null,5),cf(),Aa(324,`pre`)(325,`code`,20),bT(326,`
@EventPattern('user_created')
async handleUserCreated(data: Record<string, unknown>) {
  // business logic
}
`),cf()(),Aa(327,`pre`)(328,`code`,20),bT(329,`
@EventPattern('user_created')
async handleUserCreated(data) {
  // business logic
}
`),cf()()(),Aa(330,`blockquote`,21)(331,`strong`),bT(332,`Hint`),cf(),bT(333,` You can register multiple event handlers for a `),Aa(334,`strong`),bT(335,`single`),cf(),bT(336,` event pattern, and Nest triggers all of them in parallel.
`),cf(),Aa(337,`p`),bT(338,`The `),Aa(339,`code`),bT(340,`handleUserCreated()`),cf(),Aa(341,`strong`),bT(342,`event handler`),cf(),bT(343,` listens for the `),Aa(344,`code`),bT(345,`'user_created'`),cf(),bT(346,` event. The event handler takes a single argument, the `),Aa(347,`code`),bT(348,`data`),cf(),bT(349,` passed from the client (in this case, an event payload sent over the network).`),cf(),Aa(350,`p`),Wa(351,`app-banner-enterprise`),cf(),Aa(352,`h4`,34)(353,`span`),bT(354,`Additional request details`),cf()(),Aa(355,`p`),bT(356,`In more advanced scenarios, you might need additional details about the incoming request. For instance, when using NATS with wildcard subscriptions, you may want to retrieve the original subject that the producer sent the message to. Similarly, with Kafka, you may need to access the message headers. To do so, use the built-in decorators shown below:`),cf(),Aa(357,`app-copy-button`,18)(358,`span`,19),Wa(359,`app-tabs`,null,6),cf(),Aa(361,`pre`)(362,`code`,20),bT(363,`
@MessagePattern('time.us.*')
getDate(@Payload() data: number[], @Ctx() context: NatsContext) {
  console.log(\`Subject: \${context.getSubject()}\`); // e.g. "time.us.east"
  return new Date().toLocaleTimeString(...);
}
`),cf()(),Aa(364,`pre`)(365,`code`,20),bT(366,`
@Bind(Payload(), Ctx())
@MessagePattern('time.us.*')
getDate(data, context) {
  console.log(\`Subject: \${context.getSubject()}\`); // e.g. "time.us.east"
  return new Date().toLocaleTimeString(...);
}
`),cf()()(),Aa(367,`blockquote`,21)(368,`strong`),bT(369,`Hint`),cf(),Aa(370,`code`),bT(371,`@Payload()`),cf(),bT(372,`, `),Aa(373,`code`),bT(374,`@Ctx()`),cf(),bT(375,`, and `),Aa(376,`code`),bT(377,`NatsContext`),cf(),bT(378,` are imported from `),Aa(379,`code`),bT(380,`@nestjs/microservices`),cf(),bT(381,`.
`),cf(),Aa(382,`blockquote`,21)(383,`strong`),bT(384,`Hint`),cf(),bT(385,` You can also pass a property key to the `),Aa(386,`code`),bT(387,`@Payload()`),cf(),bT(388,` decorator to extract a specific property from the incoming payload object, e.g., `),Aa(389,`code`),bT(390,`@Payload('id')`),cf(),bT(391,`. To validate the payload against a schema, see `),Aa(392,`a`,35),bT(393,`microservice pipes`),cf(),bT(394,`.
`),cf(),Aa(395,`h4`,36)(396,`span`),bT(397,`Client (producer class)`),cf()(),Aa(398,`p`),bT(399,`A client Nest application can exchange messages with, or publish events to, a Nest microservice using the `),Aa(400,`code`),bT(401,`ClientProxy`),cf(),bT(402,` class. This class provides several methods for communicating with a remote microservice, such as `),Aa(403,`code`),bT(404,`send()`),cf(),bT(405,` (for request-response messaging) and `),Aa(406,`code`),bT(407,`emit()`),cf(),bT(408,` (for event-driven messaging). You can obtain an instance of this class in the following ways.`),cf(),Aa(409,`p`),bT(410,`One approach is to import the `),Aa(411,`code`),bT(412,`ClientsModule`),cf(),bT(413,`, which exposes the static `),Aa(414,`code`),bT(415,`register()`),cf(),bT(416,` method. This method takes an array of objects representing microservice transporters. Each object must include a `),Aa(417,`code`),bT(418,`name`),cf(),bT(419,` property, and can include a `),Aa(420,`code`),bT(421,`transport`),cf(),bT(422,` property (if omitted, Nest uses `),Aa(423,`code`),bT(424,`Transport.TCP`),cf(),bT(425,`) and an `),Aa(426,`code`),bT(427,`options`),cf(),bT(428,` property.`),cf(),Aa(429,`p`),bT(430,`The `),Aa(431,`code`),bT(432,`name`),cf(),bT(433,` property acts as an `),Aa(434,`strong`),bT(435,`injection token`),cf(),bT(436,`, which you can use to inject an instance of `),Aa(437,`code`),bT(438,`ClientProxy`),cf(),bT(439,` wherever needed. Its value can be any string or JavaScript symbol, as described in `),Aa(440,`a`,37),bT(441,`non-class-based provider tokens`),cf(),bT(442,`.`),cf(),Aa(443,`p`),bT(444,`The `),Aa(445,`code`),bT(446,`options`),cf(),bT(447,` property is an object with the same properties we saw in the `),Aa(448,`code`),bT(449,`createMicroservice()`),cf(),bT(450,` method earlier.`),cf(),Aa(451,`app-copy-button`)(452,`pre`)(453,`code`,20),bT(454,`
@Module({
  imports: [
    ClientsModule.register([
      { name: 'MATH_SERVICE', transport: Transport.TCP },
    ]),
  ],
})
`),cf()()(),Aa(455,`p`),bT(456,`Alternatively, use the `),Aa(457,`code`),bT(458,`registerAsync()`),cf(),bT(459,` method if you need to provide configuration or perform other asynchronous processes during setup.`),cf(),Aa(460,`app-copy-button`)(461,`pre`)(462,`code`,20),bT(463,`
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        name: 'MATH_SERVICE',
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('HOST'),
            port: configService.get('PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
})
`),cf()()(),Aa(464,`p`),bT(465,`Once the module has been imported, use the `),Aa(466,`code`),bT(467,`@Inject()`),cf(),bT(468,` decorator to inject the `),Aa(469,`code`),bT(470,`ClientProxy`),cf(),bT(471,` instance configured for the `),Aa(472,`code`),bT(473,`'MATH_SERVICE'`),cf(),bT(474,` transporter.`),cf(),Aa(475,`app-copy-button`)(476,`pre`)(477,`code`,20),bT(478,`
constructor(
  @Inject('MATH_SERVICE') private client: ClientProxy,
) {}
`),cf()()(),Aa(479,`blockquote`,21)(480,`strong`),bT(481,`Hint`),cf(),bT(482,` The `),Aa(483,`code`),bT(484,`ClientsModule`),cf(),bT(485,` and `),Aa(486,`code`),bT(487,`ClientProxy`),cf(),bT(488,` classes are imported from the `),Aa(489,`code`),bT(490,`@nestjs/microservices`),cf(),bT(491,` package.
`),cf(),Aa(492,`p`),bT(493,`At times, you may need to fetch the transporter configuration from another service (such as a `),Aa(494,`code`),bT(495,`ConfigService`),cf(),bT(496,`) rather than hard-coding it in your client application. To do so, register a `),Aa(497,`a`,38),bT(498,`custom provider`),cf(),bT(499,` using the `),Aa(500,`code`),bT(501,`ClientProxyFactory`),cf(),bT(502,` class. This class provides a static `),Aa(503,`code`),bT(504,`create()`),cf(),bT(505,` method that accepts a transporter options object and returns a customized `),Aa(506,`code`),bT(507,`ClientProxy`),cf(),bT(508,` instance.`),cf(),Aa(509,`app-copy-button`)(510,`pre`)(511,`code`,20),bT(512,`
@Module({
  providers: [
    {
      provide: 'MATH_SERVICE',
      useFactory: (configService: ConfigService) => {
        const mathSvcOptions = configService.getMathSvcOptions();
        return ClientProxyFactory.create(mathSvcOptions);
      },
      inject: [ConfigService],
    }
  ]
  ...
})
`),cf()()(),Aa(513,`blockquote`,21)(514,`strong`),bT(515,`Hint`),cf(),bT(516,` The `),Aa(517,`code`),bT(518,`ClientProxyFactory`),cf(),bT(519,` class is imported from the `),Aa(520,`code`),bT(521,`@nestjs/microservices`),cf(),bT(522,` package.
`),cf(),Aa(523,`p`),bT(524,`Another option is to use the `),Aa(525,`code`),bT(526,`@Client()`),cf(),bT(527,` property decorator.`),cf(),Aa(528,`app-copy-button`)(529,`pre`)(530,`code`,20),bT(531,`
@Client({ transport: Transport.TCP })
client: ClientProxy;
`),cf()()(),Aa(532,`blockquote`,21)(533,`strong`),bT(534,`Hint`),cf(),bT(535,` The `),Aa(536,`code`),bT(537,`@Client()`),cf(),bT(538,` decorator is imported from the `),Aa(539,`code`),bT(540,`@nestjs/microservices`),cf(),bT(541,` package.
`),cf(),Aa(542,`p`),bT(543,`The `),Aa(544,`code`),bT(545,`@Client()`),cf(),bT(546,` decorator isn't the preferred technique, because a client created this way is harder to test and harder to share.`),cf(),Aa(547,`p`),bT(548,`The `),Aa(549,`code`),bT(550,`ClientProxy`),cf(),bT(551,` is `),Aa(552,`strong`),bT(553,`lazy`),cf(),bT(554,`. It doesn't initiate a connection immediately. Instead, the connection is established before the first microservice call and reused for each subsequent call. If you want to delay the application bootstrapping process until a connection is established, initiate the connection manually with the `),Aa(555,`code`),bT(556,`ClientProxy`),cf(),bT(557,` object's `),Aa(558,`code`),bT(559,`connect()`),cf(),bT(560,` method inside the `),Aa(561,`code`),bT(562,`onApplicationBootstrap()`),cf(),bT(563,` lifecycle hook.`),cf(),Aa(564,`app-copy-button`,18)(565,`span`,19),Wa(566,`app-tabs`,null,7),cf(),Aa(568,`pre`)(569,`code`,20),bT(570,`
async onApplicationBootstrap() {
  await this.client.connect();
}
`),cf()()(),Aa(571,`p`),bT(572,`If the connection can't be created, the `),Aa(573,`code`),bT(574,`connect()`),cf(),bT(575,` method rejects with the corresponding error object.`),cf(),Aa(576,`h4`,39)(577,`span`),bT(578,`Sending messages`),cf()(),Aa(579,`p`),bT(580,`The `),Aa(581,`code`),bT(582,`ClientProxy`),cf(),bT(583,` exposes a `),Aa(584,`code`),bT(585,`send()`),cf(),bT(586,` method, which calls the microservice and returns an `),Aa(587,`code`),bT(588,`Observable`),cf(),bT(589,` with its response.`),cf(),Aa(590,`app-copy-button`,18)(591,`span`,19),Wa(592,`app-tabs`,null,8),cf(),Aa(594,`pre`)(595,`code`,20),bT(596,`
accumulate(): Observable<number> {
  const pattern = { cmd: 'sum' };
  const payload = [1, 2, 3];
  return this.client.send<number>(pattern, payload);
}
`),cf()(),Aa(597,`pre`)(598,`code`,20),bT(599,`
accumulate() {
  const pattern = { cmd: 'sum' };
  const payload = [1, 2, 3];
  return this.client.send(pattern, payload);
}
`),cf()()(),Aa(600,`p`),bT(601,`The `),Aa(602,`code`),bT(603,`send()`),cf(),bT(604,` method takes two arguments, `),Aa(605,`code`),bT(606,`pattern`),cf(),bT(607,` and `),Aa(608,`code`),bT(609,`payload`),cf(),bT(610,`. The `),Aa(611,`code`),bT(612,`pattern`),cf(),bT(613,` should match one defined in a `),Aa(614,`code`),bT(615,`@MessagePattern()`),cf(),bT(616,` decorator. The `),Aa(617,`code`),bT(618,`payload`),cf(),bT(619,` is the message to transmit to the remote microservice. This method returns a `),Aa(620,`strong`),bT(621,`cold `),Aa(622,`code`),bT(623,`Observable`),cf()(),bT(624,`, which means that you have to subscribe to it explicitly before the message is sent.`),cf(),Aa(625,`h4`,40)(626,`span`),bT(627,`Publishing events`),cf()(),Aa(628,`p`),bT(629,`To send an event, use the `),Aa(630,`code`),bT(631,`ClientProxy`),cf(),bT(632,` object's `),Aa(633,`code`),bT(634,`emit()`),cf(),bT(635,` method. This method publishes an event to the message broker.`),cf(),Aa(636,`app-copy-button`,18)(637,`span`,19),Wa(638,`app-tabs`,null,9),cf(),Aa(640,`pre`)(641,`code`,20),bT(642,`
async publish() {
  this.client.emit<number>('user_created', new UserCreatedEvent());
}
`),cf()(),Aa(643,`pre`)(644,`code`,20),bT(645,`
async publish() {
  this.client.emit('user_created', new UserCreatedEvent());
}
`),cf()()(),Aa(646,`p`),bT(647,`The `),Aa(648,`code`),bT(649,`emit()`),cf(),bT(650,` method takes two arguments, `),Aa(651,`code`),bT(652,`pattern`),cf(),bT(653,` and `),Aa(654,`code`),bT(655,`payload`),cf(),bT(656,`. The `),Aa(657,`code`),bT(658,`pattern`),cf(),bT(659,` should match one defined in an `),Aa(660,`code`),bT(661,`@EventPattern()`),cf(),bT(662,` decorator, while the `),Aa(663,`code`),bT(664,`payload`),cf(),bT(665,` is the event data to transmit to the remote microservice. This method returns a `),Aa(666,`strong`),bT(667,`hot `),Aa(668,`code`),bT(669,`Observable`),cf()(),bT(670,` (in contrast to the cold `),Aa(671,`code`),bT(672,`Observable`),cf(),bT(673,` returned by `),Aa(674,`code`),bT(675,`send()`),cf(),bT(676,`), which means that the proxy immediately attempts to deliver the event, whether or not you subscribe to the observable.`),cf(),Aa(677,`p`),Wa(678,`app-banner-observe`),cf(),Aa(679,`h4`,41)(680,`span`),bT(681,`Request-scoping`),cf()(),Aa(682,`p`),bT(683,`If you come from a different programming language background, it may be surprising that in Nest, most things are shared across incoming requests. This includes the database connection pool, singleton services with global state, and more. Node.js doesn't follow the request/response multi-threaded stateless model, in which each request is processed by a separate thread. As a result, using singleton instances is `),Aa(684,`strong`),bT(685,`safe`),cf(),bT(686,` for your applications.`),cf(),Aa(687,`p`),bT(688,`However, there are edge cases where a request-based lifetime for the handler might be desirable, such as per-request caching in GraphQL applications, request tracking, or multi-tenancy. Learn how to control scopes in the `),Aa(689,`a`,42),bT(690,`injection scopes`),cf(),bT(691,` chapter.`),cf(),Aa(692,`p`),bT(693,`Request-scoped handlers and providers can inject `),Aa(694,`code`),bT(695,`RequestContext`),cf(),bT(696,` using the `),Aa(697,`code`),bT(698,`@Inject()`),cf(),bT(699,` decorator in combination with the `),Aa(700,`code`),bT(701,`CONTEXT`),cf(),bT(702,` token:`),cf(),Aa(703,`app-copy-button`)(704,`pre`)(705,`code`,20),bT(706,`
import { Injectable, Scope, Inject } from '@nestjs/common';
import { CONTEXT, type RequestContext } from '@nestjs/microservices';

@Injectable({ scope: Scope.REQUEST })
export class CatsService {
  constructor(@Inject(CONTEXT) private ctx: RequestContext) {}
}
`),cf()()(),Aa(707,`p`),bT(708,`This provides access to the `),Aa(709,`code`),bT(710,`RequestContext`),cf(),bT(711,` object, which has the following shape:`),cf(),Aa(712,`app-copy-button`)(713,`pre`)(714,`code`,20),bT(715,`
export interface RequestContext<TData = any, TContext extends BaseRpcContext = any> {
  pattern: string | Record<string, any>;
  data: TData;
  context?: TContext;
  getData(): TData;
  getPattern(): string | Record<string, any>;
  getContext(): TContext;
}
`),cf()()(),Aa(716,`p`),bT(717,`The `),Aa(718,`code`),bT(719,`data`),cf(),bT(720,` property is the message payload sent by the message producer. The `),Aa(721,`code`),bT(722,`pattern`),cf(),bT(723,` property is the pattern used to identify the handler for the incoming message. The `),Aa(724,`code`),bT(725,`context`),cf(),bT(726,` property holds the transporter-specific context object (e.g., `),Aa(727,`code`),bT(728,`NatsContext`),cf(),bT(729,`), the same object that the `),Aa(730,`code`),bT(731,`@Ctx()`),cf(),bT(732,` decorator injects.`),cf(),Aa(733,`h4`,43)(734,`span`),bT(735,`Instance status updates`),cf()(),Aa(736,`p`),bT(737,`To get real-time updates on the connection and the state of the underlying driver instance, subscribe to the `),Aa(738,`code`),bT(739,`status`),cf(),bT(740,` stream. This stream provides status updates specific to the chosen driver. For instance, with the TCP transporter (the default), the `),Aa(741,`code`),bT(742,`status`),cf(),bT(743,` stream emits `),Aa(744,`code`),bT(745,`connected`),cf(),bT(746,` and `),Aa(747,`code`),bT(748,`disconnected`),cf(),bT(749,` events.`),cf(),Aa(750,`app-copy-button`)(751,`pre`)(752,`code`,20),bT(753,`
this.client.status.subscribe((status: TcpStatus) => {
  console.log(status);
});
`),cf()()(),Aa(754,`blockquote`,21)(755,`strong`),bT(756,`Hint`),cf(),bT(757,` The `),Aa(758,`code`),bT(759,`TcpStatus`),cf(),bT(760,` type is imported from the `),Aa(761,`code`),bT(762,`@nestjs/microservices`),cf(),bT(763,` package.
`),cf(),Aa(764,`p`),bT(765,`Similarly, you can subscribe to the server's `),Aa(766,`code`),bT(767,`status`),cf(),bT(768,` stream to receive notifications about the server's status.`),cf(),Aa(769,`app-copy-button`)(770,`pre`)(771,`code`,20),bT(772,`
const server = app.connectMicroservice<MicroserviceOptions>(...);
server.status.subscribe((status: TcpStatus) => {
  console.log(status);
});
`),cf()()(),Aa(773,`h4`,44)(774,`span`),bT(775,`Listening to internal events`),cf()(),Aa(776,`p`),bT(777,`In some cases, you might want to listen to internal events emitted by the microservice. For example, you could listen for the `),Aa(778,`code`),bT(779,`error`),cf(),bT(780,` event to trigger additional operations when an error occurs. To do this, use the `),Aa(781,`code`),bT(782,`on()`),cf(),bT(783,` method:`),cf(),Aa(784,`app-copy-button`)(785,`pre`)(786,`code`,20),bT(787,`
this.client.on('error', (err) => {
  console.error(err);
});
`),cf()()(),Aa(788,`p`),bT(789,`Similarly, you can listen to the server's internal events:`),cf(),Aa(790,`app-copy-button`)(791,`pre`)(792,`code`,20),bT(793,`
server.on<TcpEvents>('error', (err) => {
  console.error(err);
});
`),cf()()(),Aa(794,`blockquote`,21)(795,`strong`),bT(796,`Hint`),cf(),bT(797,` The `),Aa(798,`code`),bT(799,`TcpEvents`),cf(),bT(800,` type is imported from the `),Aa(801,`code`),bT(802,`@nestjs/microservices`),cf(),bT(803,` package.
`),cf(),Aa(804,`p`),bT(805,`With the TCP transporter, starting with NestJS v12.1.1, listeners registered with the client's `),Aa(806,`code`),bT(807,`on()`),cf(),bT(808,` method stay registered until you call `),Aa(809,`code`),bT(810,`close()`),cf(),bT(811,`, so they are also attached to the new socket the client opens on the next `),Aa(812,`code`),bT(813,`send()`),cf(),bT(814,` or `),Aa(815,`code`),bT(816,`emit()`),cf(),bT(817,` call after the connection was closed. Registrations are not deduplicated, so register each listener once rather than again from its callback or after each reconnect.`),cf(),Aa(818,`h4`,45)(819,`span`),bT(820,`Underlying driver access`),cf()(),Aa(821,`p`),bT(822,`For more advanced use cases, you may need to access the underlying driver instance, for example, to close the connection manually or to use driver-specific methods. In most cases, however, you `),Aa(823,`strong`),bT(824,`shouldn't need`),cf(),bT(825,` to access the driver directly.`),cf(),Aa(826,`p`),bT(827,`To do so, use the `),Aa(828,`code`),bT(829,`unwrap()`),cf(),bT(830,` method, which returns the underlying driver instance. The generic type parameter specifies the type of driver instance you expect.`),cf(),Aa(831,`app-copy-button`)(832,`pre`)(833,`code`,20),bT(834,`
const netSocket = this.client.unwrap<Socket>();
`),cf()()(),Aa(835,`p`),bT(836,`Here, `),Aa(837,`code`),bT(838,`Socket`),cf(),bT(839,` is a type imported from the `),Aa(840,`code`),bT(841,`net`),cf(),bT(842,` module.`),cf(),Aa(843,`p`),bT(844,`Similarly, you can access the server's underlying driver instance:`),cf(),Aa(845,`app-copy-button`)(846,`pre`)(847,`code`,20),bT(848,`
const netServer = server.unwrap<Server>();
`),cf()()(),Aa(849,`h4`,46)(850,`span`),bT(851,`Handling timeouts`),cf()(),Aa(852,`p`),bT(853,`In distributed systems, microservices are sometimes down or unavailable. To avoid waiting indefinitely, apply a timeout to your microservice calls with the `),Aa(854,`a`,47),bT(855,`RxJS`),cf(),Aa(856,`code`),bT(857,`timeout`),cf(),bT(858,` operator. If the microservice doesn't respond within the specified time, an error is thrown, which you can catch and handle appropriately.`),cf(),Aa(859,`p`),bT(860,`Apply the `),Aa(861,`code`),bT(862,`timeout`),cf(),bT(863,` operator within the pipe:`),cf(),Aa(864,`app-copy-button`,18)(865,`span`,19),Wa(866,`app-tabs`,null,10),cf(),Aa(868,`pre`)(869,`code`,20),bT(870,`
this.client
  .send<TResult, TInput>(pattern, data)
  .pipe(timeout(5000));
`),cf()(),Aa(871,`pre`)(872,`code`,20),bT(873,`
this.client
  .send(pattern, data)
  .pipe(timeout(5000));
`),cf()()(),Aa(874,`blockquote`,21)(875,`strong`),bT(876,`Hint`),cf(),bT(877,` The `),Aa(878,`code`),bT(879,`timeout`),cf(),bT(880,` operator is imported from the `),Aa(881,`code`),bT(882,`rxjs/operators`),cf(),bT(883,` package.
`),cf(),Aa(884,`p`),bT(885,`If the microservice doesn't respond within 5 seconds, the `),Aa(886,`code`),bT(887,`Observable`),cf(),bT(888,` errors with a `),Aa(889,`code`),bT(890,`TimeoutError`),cf(),bT(891,`.`),cf(),Aa(892,`h4`,48)(893,`span`),bT(894,`Tracing a request across services`),cf()(),Aa(895,`p`),bT(896,`Timeouts tell you that a call failed to come back in time. They don't tell you `),Aa(897,`em`),bT(898,`where`),cf(),bT(899,` the time went, and in a system of five services talking over TCP, NATS, and Kafka, that is the question that matters. A gateway request that takes 3 seconds might spend 2.9 of them in a downstream service that nobody suspected, while each service's own logs show that everything looked fine.`),cf(),Aa(900,`p`),bT(901,`The usual fix is to propagate a correlation ID by hand through every transport, then stitch the timelines back together after the fact. `),Aa(902,`a`,49),bT(903,`NestJS Observe`),cf(),bT(904,` does that stitching for you. Instrument each service with the `),Aa(905,`code`),bT(906,`@nestjs/observe`),cf(),bT(907,` SDK and forward the trace ID on whatever channel the transport already has (a Kafka header, a NATS header, or a field on the TCP payload), and the dashboard reassembles one waterfall spanning every service that participated:`),cf(),Aa(908,`figure`),Wa(909,`img`,50),cf(),Aa(910,`p`),bT(911,`From there, the timeout stops being a mystery. You can see the gateway's `),Aa(912,`code`),bT(913,`send()`),cf(),bT(914,` waiting, the consumer picking up the message (and how long the message waited before that), the query inside the handler that ran long, and the error it eventually threw, with its source lines, all on one clock. Message and event handlers are instrumented automatically, so `),Aa(915,`code`),bT(916,`@MessagePattern()`),cf(),bT(917,` and `),Aa(918,`code`),bT(919,`@EventPattern()`),cf(),bT(920,` handlers show up as operations without any manual span wiring.`),cf(),Aa(921,`p`),bT(922,`Forwarding the trace ID is the one piece that requires application code, because only you know which channel your transport leaves free. See `),Aa(923,`a`,51),bT(924,`Distributed tracing`),cf(),bT(925,` for the pattern per transport, and the `),Aa(926,`a`,52),bT(927,`Observability`),cf(),bT(928,` chapter to get set up.`),cf(),Aa(929,`h4`,53)(930,`span`),bT(931,`TLS support`),cf()(),Aa(932,`p`),bT(933,`When communicating outside of a private network, encrypt the traffic. The TCP transporter has built-in support for TLS, based on Node's `),Aa(934,`a`,54),bT(935,`TLS`),cf(),bT(936,` module, which lets you encrypt communication between microservices and their clients.`),cf(),Aa(937,`p`),bT(938,`To enable TLS for a TCP server, you need both a private key and a certificate in PEM format. Add them to the server's options with the `),Aa(939,`code`),bT(940,`tlsOptions`),cf(),bT(941,` property:`),cf(),Aa(942,`app-copy-button`)(943,`pre`)(944,`code`,20),bT(945,`
import * as fs from 'node:fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const key = fs.readFileSync('<pathToKeyFile>', 'utf8').toString();
  const cert = fs.readFileSync('<pathToCertFile>', 'utf8').toString();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        tlsOptions: {
          key,
          cert,
        },
      },
    },
  );

  await app.listen();
}
await bootstrap();
`),cf()()(),Aa(946,`p`),bT(947,`For a client to communicate securely over TLS, define the `),Aa(948,`code`),bT(949,`tlsOptions`),cf(),bT(950,` object as well, this time with the CA certificate, i.e., the certificate of the authority that signed the server's certificate. This ensures that the client trusts the server's certificate and can establish a secure connection.`),cf(),Aa(951,`app-copy-button`)(952,`pre`)(953,`code`,20),bT(954,`
import * as fs from 'node:fs';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.TCP,
        options: {
          tlsOptions: {
            ca: [fs.readFileSync('<pathToCaFile>', 'utf-8').toString()],
          },
        },
      },
    ]),
  ],
})
export class AppModule {}
`),cf()()(),Aa(955,`p`),bT(956,`The `),Aa(957,`code`),bT(958,`ca`),cf(),bT(959,` property accepts an array, so you can list several CAs if your setup involves multiple trusted authorities.`),cf(),Aa(960,`p`),bT(961,`Once everything is set up, inject the `),Aa(962,`code`),bT(963,`ClientProxy`),cf(),bT(964,` as usual with the `),Aa(965,`code`),bT(966,`@Inject()`),cf(),bT(967,` decorator. Communication between your microservices is then encrypted, with Node's TLS module handling the encryption details.`),cf(),Aa(968,`p`),bT(969,`For more information, refer to Node's `),Aa(970,`a`,54),bT(971,`TLS documentation`),cf(),bT(972,`.`),cf(),Aa(973,`h4`,55)(974,`span`),bT(975,`Dynamic configuration`),cf()(),Aa(976,`p`),bT(977,`A microservice's transport options are passed to `),Aa(978,`code`),bT(979,`createMicroservice()`),cf(),bT(980,`, before any provider (such as the `),Aa(981,`code`),bT(982,`ConfigService`),cf(),bT(983,` from the `),Aa(984,`code`),bT(985,`@nestjs/config`),cf(),bT(986,` package) can be injected. To configure the microservice with injected providers, pass `),Aa(987,`code`),bT(988,`AsyncMicroserviceOptions`),cf(),bT(989,` instead: Nest resolves the providers listed in `),Aa(990,`code`),bT(991,`inject`),cf(),bT(992,` and passes them to the `),Aa(993,`code`),bT(994,`useFactory`),cf(),bT(995,` function, which returns the transport options.`),cf(),Aa(996,`app-copy-button`)(997,`pre`)(998,`code`,20),bT(999,`
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AsyncMicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<AsyncMicroserviceOptions>(
    AppModule,
    {
      useFactory: (configService: ConfigService) => ({
        transport: Transport.TCP,
        options: {
          host: configService.get<string>('HOST'),
          port: configService.get<number>('PORT'),
        },
      }),
      inject: [ConfigService],
    },
  );

  await app.listen();
}
await bootstrap();
`),cf()()()(),Aa(1e3,`a`,56),Wa(1001,`i`,57),Aa(1002,`span`),bT(1003,`Edit on GitHub`),cf()()()),c&2){let x=tT(49),u=tT(241),y=tT(275),k=tT(290),T=tT(323),M=tT(360),R=tT(593),q=tT(639),j=tT(867);zC(46),hf(` `,jT(47,40,`main`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(185),hf(` `,jT(239,43,`math.controller`,u.isJsActive),`
`),zC(4),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive),zC(11),Ky(``,`{`,` cmd: 'sum' `,`}`),zC(20),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(12),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(30),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive),zC(34),zy(`hide`,M.isJsActive),zC(3),zy(`hide`,!M.isJsActive),zC(230),zy(`hide`,R.isJsActive),zC(3),zy(`hide`,!R.isJsActive),zC(43),zy(`hide`,q.isJsActive),zC(3),zy(`hide`,!q.isJsActive),zC(225),zy(`hide`,j.isJsActive),zC(3),zy(`hide`,!j.isJsActive)}},dependencies:[Lt,ln,u,l,Jc,l$1,g],encapsulation:2})}return s})();var K=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-custom-transport`]],features:[xy],decls:428,vars:8,consts:[[`contentReference`,``],[`app3d2e04e4a1cf559ecd80388e186d9e219e5906c7`,``],[`app593cd10859f1676c139cd8bfbce8dc6bb5498d01`,``],[1,`content`],[1,`content-inner`],[`id`,`custom-transporters`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://dev.to/nestjs/integrate-nestjs-with-external-services-using-microservice-transporters-part-1-p3`],[1,`info`],[`routerLink`,`/standalone-applications`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mqttjs/MQTT.js/blob/master/README.md#qos`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://dev.to/johnbiundo/series/4724`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://dev.to/nestjs/part-1-introduction-and-setup-1a2l`],[`appAnchor`,``,`id`,`creating-a-strategy`],[1,`language-typescript`],[1,`warning`],[1,`language-text`],[`routerLink`,`/interceptors`],[`appAnchor`,``,`id`,`reporting-event-handler-errors`],[`appAnchor`,``,`id`,`client-proxy`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://dev.to/nestjs/part-4-basic-client-component-16f9`],[`appAnchor`,``,`id`,`message-serialization`],[1,`with-heading`],[1,`filename`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/custom-transport.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`Custom transporters`),cf(),Aa(5,`p`),bT(6,`Nest provides a variety of `),Aa(7,`strong`),bT(8,`transporters`),cf(),bT(9,` out of the box, as well as an API for building custom transport strategies.
Transporters let you connect components over a network using a pluggable communications layer and a simple application-level message protocol (see the `),Aa(10,`a`,6),bT(11,`full article`),cf(),bT(12,`).`),cf(),Aa(13,`blockquote`,7)(14,`strong`),bT(15,`Hint`),cf(),bT(16,` Building a microservice with Nest doesn't necessarily mean you must use the `),Aa(17,`code`),bT(18,`@nestjs/microservices`),cf(),bT(19,` package. For example, if you want to communicate with external services (e.g., other microservices written in different languages), you may not need all the features provided by the `),Aa(20,`code`),bT(21,`@nestjs/microservices`),cf(),bT(22,` library.
If you don't need the decorators that let you define subscribers declaratively (`),Aa(23,`code`),bT(24,`@EventPattern`),cf(),bT(25,` or `),Aa(26,`code`),bT(27,`@MessagePattern`),cf(),bT(28,`), running a `),Aa(29,`a`,8),bT(30,`standalone application`),cf(),bT(31,` and managing connections and channel subscriptions manually is enough for most use cases, and gives you more flexibility.
`),cf(),Aa(32,`p`),bT(33,`With a custom transporter, you can integrate any messaging system or protocol (including Google Cloud Pub/Sub, Amazon Kinesis, and others), or extend an existing one with extra features (for example, `),Aa(34,`a`,9),bT(35,`QoS`),cf(),bT(36,` for MQTT).`),cf(),Aa(37,`blockquote`,7)(38,`strong`),bT(39,`Hint`),cf(),bT(40,` To better understand how Nest microservices work and how you can extend the capabilities of existing transporters, we recommend reading the `),Aa(41,`a`,10),bT(42,`NestJS Microservices in Action`),cf(),bT(43,` and `),Aa(44,`a`,11),bT(45,`Advanced NestJS Microservices`),cf(),bT(46,` article series.
`),cf(),Aa(47,`h4`,12)(48,`span`),bT(49,`Creating a strategy`),cf()(),Aa(50,`p`),bT(51,`First, let's define a class representing our custom transporter:`),cf(),Aa(52,`app-copy-button`)(53,`pre`)(54,`code`,13),bT(55,`
import { CustomTransportStrategy, Server } from '@nestjs/microservices';

class GoogleCloudPubSubServer
  extends Server
  implements CustomTransportStrategy
{
  /**
   * Triggered when you run "app.listen()".
   */
  listen(callback: () => void) {
    callback();
  }

  /**
   * Triggered on application shutdown.
   */
  close() {}

  /**
   * You can ignore this method if you don't want transporter users
   * to be able to register event listeners. Most custom implementations
   * will not need this.
   */
  on(event: string, callback: Function) {
    throw new Error('Method not implemented.');
  }

  /**
   * You can ignore this method if you don't want transporter users
   * to be able to retrieve the underlying native server. Most custom implementations
   * will not need this.
   */
  unwrap<T = never>(): T {
    throw new Error('Method not implemented.');
  }
}
`),cf()()(),Aa(56,`blockquote`,14)(57,`strong`),bT(58,`Warning`),cf(),bT(59,` This chapter doesn't implement a fully-featured Google Cloud Pub/Sub server, as that would require diving into transporter-specific technical details.
`),cf(),Aa(60,`p`),bT(61,`In the example above, we declared the `),Aa(62,`code`),bT(63,`GoogleCloudPubSubServer`),cf(),bT(64,` class and provided the `),Aa(65,`code`),bT(66,`listen()`),cf(),bT(67,` and `),Aa(68,`code`),bT(69,`close()`),cf(),bT(70,` methods enforced by the `),Aa(71,`code`),bT(72,`CustomTransportStrategy`),cf(),bT(73,` interface.
Our class also extends the `),Aa(74,`code`),bT(75,`Server`),cf(),bT(76,` class from the `),Aa(77,`code`),bT(78,`@nestjs/microservices`),cf(),bT(79,` package, which provides several useful methods, such as the ones the Nest runtime uses to register message handlers. Alternatively, to extend the capabilities of an existing transport strategy, you can extend the corresponding server class, for example, `),Aa(80,`code`),bT(81,`ServerRedis`),cf(),bT(82,`.
By convention, we added the `),Aa(83,`code`),bT(84,`"Server"`),cf(),bT(85,` suffix to the class name, because the class is responsible for subscribing to messages and events (and responding to them, if necessary).`),cf(),Aa(86,`p`),bT(87,`With this in place, we can use our custom strategy instead of a built-in transporter:`),cf(),Aa(88,`app-copy-button`)(89,`pre`)(90,`code`,13),bT(91,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  AppModule,
  {
    strategy: new GoogleCloudPubSubServer(),
  },
);
`),cf()()(),Aa(92,`p`),bT(93,`Instead of passing the usual transporter options object with the `),Aa(94,`code`),bT(95,`transport`),cf(),bT(96,` and `),Aa(97,`code`),bT(98,`options`),cf(),bT(99,` properties, we pass a single property, `),Aa(100,`code`),bT(101,`strategy`),cf(),bT(102,`, whose value is an instance of our custom transporter class.`),cf(),Aa(103,`p`),bT(104,`Back to the `),Aa(105,`code`),bT(106,`GoogleCloudPubSubServer`),cf(),bT(107,` class. In a real-world application, the `),Aa(108,`code`),bT(109,`listen()`),cf(),bT(110,` method would establish a connection to the message broker or external service and register subscribers or listen to specific channels (and the `),Aa(111,`code`),bT(112,`close()`),cf(),bT(113,` teardown method would remove the subscriptions and close the connection).
Since this requires a good understanding of how Nest microservices communicate with each other, we recommend reading the `),Aa(114,`a`,11),bT(115,`Advanced NestJS Microservices article series`),cf(),bT(116,`.
This chapter instead focuses on the capabilities the `),Aa(117,`code`),bT(118,`Server`),cf(),bT(119,` class provides and how you can use them to build custom strategies.`),cf(),Aa(120,`p`),bT(121,`For example, let's say that the following message handler is defined somewhere in our application:`),cf(),Aa(122,`app-copy-button`)(123,`pre`)(124,`code`,13),bT(125,`
@MessagePattern('echo')
echo(@Payload() data: object) {
  return data;
}
`),cf()()(),Aa(126,`p`),bT(127,`The Nest runtime registers this message handler automatically. With the `),Aa(128,`code`),bT(129,`Server`),cf(),bT(130,` class, you can see which message patterns have been registered, and access and execute the methods assigned to them.
To test this out, let's add a `),Aa(131,`code`),bT(132,`console.log`),cf(),bT(133,` call inside the `),Aa(134,`code`),bT(135,`listen()`),cf(),bT(136,` method, before the `),Aa(137,`code`),bT(138,`callback`),cf(),bT(139,` function is called:`),cf(),Aa(140,`app-copy-button`)(141,`pre`)(142,`code`,13),bT(143,`
listen(callback: () => void) {
  console.log(this.messageHandlers);
  callback();
}
`),cf()()(),Aa(144,`p`),bT(145,`After your application restarts, you'll see the following log in your terminal:`),cf(),Aa(146,`pre`)(147,`code`,15),bT(148,`
Map(1) {
  'echo' => [AsyncFunction (anonymous)] { isEventHandler: false, extras: {} }
}
`),cf()(),Aa(149,`blockquote`,7)(150,`strong`),bT(151,`Hint`),cf(),bT(152,` With the `),Aa(153,`code`),bT(154,`@EventPattern`),cf(),bT(155,` decorator, you would see the same output, but with the `),Aa(156,`code`),bT(157,`isEventHandler`),cf(),bT(158,` property set to `),Aa(159,`code`),bT(160,`true`),cf(),bT(161,`.
`),cf(),Aa(162,`p`),bT(163,`The `),Aa(164,`code`),bT(165,`messageHandlers`),cf(),bT(166,` property is a `),Aa(167,`code`),bT(168,`Map`),cf(),bT(169,` of all message (and event) handlers, keyed by pattern.
You can use a key (for example, `),Aa(170,`code`),bT(171,`"echo"`),cf(),bT(172,`) to get a reference to the message handler:`),cf(),Aa(173,`app-copy-button`)(174,`pre`)(175,`code`,13),bT(176,`
async listen(callback: () => void) {
  const echoHandler = this.messageHandlers.get('echo');
  console.log(await echoHandler('Hello world!'));
  callback();
}
`),cf()()(),Aa(177,`p`),bT(178,`When we execute `),Aa(179,`code`),bT(180,`echoHandler`),cf(),bT(181,` with an arbitrary string as the argument (`),Aa(182,`code`),bT(183,`"Hello world!"`),cf(),bT(184,` here), we should see it in the console:`),cf(),Aa(185,`pre`)(186,`code`,15),bT(187,`
Hello world!
`),cf()(),Aa(188,`p`),bT(189,`This means that our handler method was executed correctly.`),cf(),Aa(190,`p`),bT(191,`When you use a `),Aa(192,`code`),bT(193,`CustomTransportStrategy`),cf(),bT(194,` with `),Aa(195,`a`,16),bT(196,`interceptors`),cf(),bT(197,`, the handlers are wrapped in RxJS streams. This means you need to subscribe to them to execute the streams' underlying logic (e.g., to continue into the controller logic after an interceptor has run).`),cf(),Aa(198,`p`),bT(199,`For example:`),cf(),Aa(200,`app-copy-button`)(201,`pre`)(202,`code`,13),bT(203,`
async listen(callback: () => void) {
  const echoHandler = this.messageHandlers.get('echo');
  const streamOrResult = await echoHandler('Hello World');
  if (isObservable(streamOrResult)) {
    streamOrResult.subscribe();
  }
  callback();
}
`),cf()()(),Aa(204,`h4`,17)(205,`span`),bT(206,`Reporting event handler errors`),cf()(),Aa(207,`p`),bT(208,`An event handler has no response stream, so an error thrown inside one has nowhere to go. Nest logs it instead, but only after your exception filters run. If one of your filters matches the exception, that filter is the only report.`),cf(),Aa(209,`p`),bT(210,`Some transporters await the event stream themselves and hand the failure to their client library, which reports it. `),Aa(211,`code`),bT(212,`ServerKafka`),cf(),bT(213,` does this: `),Aa(214,`code`),bT(215,`kafkajs`),cf(),bT(216,` logs the rejection, so a second report from Nest would duplicate it. Set `),Aa(217,`code`),bT(218,`propagatesEventHandlerErrors`),cf(),bT(219,` to `),Aa(220,`code`),bT(221,`true`),cf(),bT(222,` in that case:`),cf(),Aa(223,`app-copy-button`)(224,`pre`)(225,`code`,13),bT(226,`
class GoogleCloudPubSubServer
  extends Server
  implements CustomTransportStrategy
{
  /**
   * The client library reports an event handler failure, so Nest must not
   * log it a second time.
   */
  public override readonly propagatesEventHandlerErrors = true;
}
`),cf()()(),Aa(227,`p`),bT(228,`The default is `),Aa(229,`code`),bT(230,`false`),cf(),bT(231,`, which suits a transporter that uses the inherited `),Aa(232,`code`),bT(233,`handleEvent`),cf(),bT(234,`. Nothing subscribes to the event stream there, so Nest is the only thing that can report the failure.`),cf(),Aa(235,`h4`,18)(236,`span`),bT(237,`Client proxy`),cf()(),Aa(238,`p`),bT(239,`As mentioned in the first section, you don't necessarily need the `),Aa(240,`code`),bT(241,`@nestjs/microservices`),cf(),bT(242,` package to create microservices. However, if you use it and need to integrate a custom strategy, you also need to provide a "client" class.`),cf(),Aa(243,`blockquote`,7)(244,`strong`),bT(245,`Hint`),cf(),bT(246,` Implementing a fully-featured client class compatible with all `),Aa(247,`code`),bT(248,`@nestjs/microservices`),cf(),bT(249,` features (e.g., streaming) requires a good understanding of the communication techniques the framework uses. To learn more, see the `),Aa(250,`a`,19),bT(251,`basic client component article`),cf(),bT(252,`.
`),cf(),Aa(253,`p`),bT(254,`To communicate with an external service and publish messages (or emit events), you can either use a library-specific SDK package or implement a custom client class that extends `),Aa(255,`code`),bT(256,`ClientProxy`),cf(),bT(257,`:`),cf(),Aa(258,`app-copy-button`)(259,`pre`)(260,`code`,13),bT(261,`
import { ClientProxy, ReadPacket, WritePacket } from '@nestjs/microservices';

class GoogleCloudPubSubClient extends ClientProxy {
  async connect(): Promise<any> {}
  async close() {}
  async dispatchEvent(packet: ReadPacket<any>): Promise<any> {}
  publish(
    packet: ReadPacket<any>,
    callback: (packet: WritePacket<any>) => void,
  ): () => void {}
  unwrap<T = never>(): T {
    throw new Error('Method not implemented.');
  }
}
`),cf()()(),Aa(262,`blockquote`,14)(263,`strong`),bT(264,`Warning`),cf(),bT(265,` This chapter doesn't implement a fully-featured Google Cloud Pub/Sub client, as that would require diving into transporter-specific technical details.
`),cf(),Aa(266,`p`),bT(267,`The `),Aa(268,`code`),bT(269,`ClientProxy`),cf(),bT(270,` class requires you to implement methods for establishing and closing the connection, and for publishing messages (`),Aa(271,`code`),bT(272,`publish()`),cf(),bT(273,`) and events (`),Aa(274,`code`),bT(275,`dispatchEvent()`),cf(),bT(276,`).
If you don't need to support the request-response communication style, you can leave the `),Aa(277,`code`),bT(278,`publish()`),cf(),bT(279,` method empty. Likewise, if you don't need to support event-based communication, leave the `),Aa(280,`code`),bT(281,`dispatchEvent()`),cf(),bT(282,` method empty.`),cf(),Aa(283,`p`),bT(284,`To observe which of these methods run, and when, let's add several `),Aa(285,`code`),bT(286,`console.log`),cf(),bT(287,` calls:`),cf(),Aa(288,`app-copy-button`)(289,`pre`)(290,`code`,13),bT(291,`
class GoogleCloudPubSubClient extends ClientProxy {
  async connect(): Promise<any> {
    console.log('connect');
  }

  async close() {
    console.log('close');
  }

  async dispatchEvent(packet: ReadPacket<any>): Promise<any> {
    return console.log('event to dispatch: ', packet);
  }

  publish(
    packet: ReadPacket<any>,
    callback: (packet: WritePacket<any>) => void,
  ): () => void {
    console.log('message:', packet);

    // In a real-world application, the "callback" function should be executed
    // with the payload sent back from the responder. Here, we simulate a response
    // (after a 5-second delay) by passing back the same "data" we originally sent.
    //
    // The "isDisposed" flag on the WritePacket signals that no further data is
    // expected. If it's omitted or false, the data is emitted to the Observable.
    setTimeout(() => callback({ 
      response: packet.data,
      isDisposed: true,
    }), 5000);

    return () => console.log('teardown');
  }

  unwrap<T = never>(): T {
    throw new Error('Method not implemented.');
  }
}
`),cf()()(),Aa(292,`p`),bT(293,`With this in place, let's create an instance of the `),Aa(294,`code`),bT(295,`GoogleCloudPubSubClient`),cf(),bT(296,` class and call the `),Aa(297,`code`),bT(298,`send()`),cf(),bT(299,` method (which you might have seen in earlier chapters), subscribing to the returned observable stream:`),cf(),Aa(300,`app-copy-button`)(301,`pre`)(302,`code`,13),bT(303,`
const googlePubSubClient = new GoogleCloudPubSubClient();
googlePubSubClient
  .send('pattern', 'Hello world!')
  .subscribe((response) => console.log(response));
`),cf()()(),Aa(304,`p`),bT(305,`You should see the following output in your terminal:`),cf(),Aa(306,`app-copy-button`)(307,`pre`)(308,`code`,13),bT(309,`
connect
message: { pattern: 'pattern', data: 'Hello world!' }
Hello world! // <-- after 5 seconds
`),cf()()(),Aa(310,`p`),bT(311,`To test whether the teardown function (which our `),Aa(312,`code`),bT(313,`publish()`),cf(),bT(314,` method returns) runs, let's apply the `),Aa(315,`code`),bT(316,`timeout`),cf(),bT(317,` operator to the stream, set to 2 seconds so that it throws before our `),Aa(318,`code`),bT(319,`setTimeout`),cf(),bT(320,` calls the `),Aa(321,`code`),bT(322,`callback`),cf(),bT(323,` function:`),cf(),Aa(324,`app-copy-button`)(325,`pre`)(326,`code`,13),bT(327,`
const googlePubSubClient = new GoogleCloudPubSubClient();
googlePubSubClient
  .send('pattern', 'Hello world!')
  .pipe(timeout(2000))
  .subscribe({
    next: (response) => console.log(response),
    error: (error) => console.error(error.message),
  });
`),cf()()(),Aa(328,`blockquote`,7)(329,`strong`),bT(330,`Hint`),cf(),bT(331,` The `),Aa(332,`code`),bT(333,`timeout`),cf(),bT(334,` operator is imported from the `),Aa(335,`code`),bT(336,`rxjs/operators`),cf(),bT(337,` package.
`),cf(),Aa(338,`p`),bT(339,`With the `),Aa(340,`code`),bT(341,`timeout`),cf(),bT(342,` operator applied, your terminal output should look as follows:`),cf(),Aa(343,`app-copy-button`)(344,`pre`)(345,`code`,13),bT(346,`
connect
message: { pattern: 'pattern', data: 'Hello world!' }
teardown // <-- teardown
Timeout has occurred
`),cf()()(),Aa(347,`p`),bT(348,`To dispatch an event (instead of sending a message), use the `),Aa(349,`code`),bT(350,`emit()`),cf(),bT(351,` method:`),cf(),Aa(352,`app-copy-button`)(353,`pre`)(354,`code`,13),bT(355,`
googlePubSubClient.emit('event', 'Hello world!');
`),cf()()(),Aa(356,`p`),bT(357,`You should see the following in the console:`),cf(),Aa(358,`app-copy-button`)(359,`pre`)(360,`code`,13),bT(361,`
connect
event to dispatch:  { pattern: 'event', data: 'Hello world!' }
`),cf()()(),Aa(362,`h4`,20)(363,`span`),bT(364,`Message serialization`),cf()(),Aa(365,`p`),bT(366,`To add custom logic around the serialization of responses on the client side, use a custom class that extends the `),Aa(367,`code`),bT(368,`ClientProxy`),cf(),bT(369,` class or one of its child classes. To modify successful responses, override the `),Aa(370,`code`),bT(371,`serializeResponse()`),cf(),bT(372,` method; to modify any errors that go through this client, override the `),Aa(373,`code`),bT(374,`serializeError()`),cf(),bT(375,` method. To use this custom class, pass the class itself to the `),Aa(376,`code`),bT(377,`ClientsModule.register()`),cf(),bT(378,` method using the `),Aa(379,`code`),bT(380,`customClass`),cf(),bT(381,` property. Below is an example of a custom `),Aa(382,`code`),bT(383,`ClientProxy`),cf(),bT(384,` that serializes each error into an `),Aa(385,`code`),bT(386,`RpcException`),cf(),bT(387,`.`),cf(),Aa(388,`app-copy-button`,21)(389,`span`,22),bT(390),LT(391,`extension`),Wa(392,`app-tabs`,null,1),cf(),Aa(394,`pre`)(395,`code`,13),bT(396,`
import { ClientTCP, RpcException } from '@nestjs/microservices';

class ErrorHandlingProxy extends ClientTCP {
  serializeError(err: Error) {
    return new RpcException(err);
  }
}
`),cf()()(),Aa(397,`p`),bT(398,`Then use it in the `),Aa(399,`code`),bT(400,`ClientsModule`),cf(),bT(401,`:`),cf(),Aa(402,`app-copy-button`,21)(403,`span`,22),bT(404),LT(405,`extension`),Wa(406,`app-tabs`,null,2),cf(),Aa(408,`pre`)(409,`code`,13),bT(410,`
@Module({
  imports: [
    ClientsModule.register([{
      name: 'CustomProxy',
      customClass: ErrorHandlingProxy,
    }]),
  ]
})
export class AppModule {}
`),cf()()(),Aa(411,`blockquote`,7)(412,`strong`),bT(413,`Hint`),cf(),bT(414,` You pass the class itself to `),Aa(415,`code`),bT(416,`customClass`),cf(),bT(417,`, not an instance of the class. Nest creates the instance for you and passes any options given in the `),Aa(418,`code`),bT(419,`options`),cf(),bT(420,` property to the new `),Aa(421,`code`),bT(422,`ClientProxy`),cf(),bT(423,`.
`),cf()(),Aa(424,`a`,23),Wa(425,`i`,24),Aa(426,`span`),bT(427,`Edit on GitHub`),cf()()()),c&2){let x=tT(393),u=tT(407);zC(390),hf(` `,jT(391,2,`error-handling.proxy`,x.isJsActive),`
`),zC(14),hf(` `,jT(405,5,`app.module`,u.isJsActive),`
`)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return s})();var G=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-exception-filters`]],features:[xy],decls:136,vars:16,consts:[[`contentReference`,``],[`app4130a0e81babf1daaf7a17b236802081bb5d3609`,``],[`appada7bcdd045d539309ef989435e1cd5c61dcddb1`,``],[`app15d8c6c295c943f9038195ea191fcfe09fd86cef`,``],[1,`content`],[1,`content-inner`],[`id`,`exception-filters`],[`routerLink`,`/exception-filters`],[1,`language-typescript`],[1,`info`],[1,`language-json`],[1,`warning`],[`appAnchor`,``,`id`,`filters`],[1,`with-heading`],[1,`filename`],[`routerLink`,`/faq/hybrid-application`],[`href`,`/faq/hybrid-application#sharing-configuration`],[`appAnchor`,``,`id`,`inheritance`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/exception-filters.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,4,0)(2,`div`,5)(3,`h3`,6),bT(4,`Exception filters`),cf(),Aa(5,`p`),bT(6,`The only difference between the HTTP `),Aa(7,`a`,7),bT(8,`exception filter`),cf(),bT(9,` layer and the corresponding microservices layer is that microservices should throw `),Aa(10,`code`),bT(11,`RpcException`),cf(),bT(12,` instead of `),Aa(13,`code`),bT(14,`HttpException`),cf(),bT(15,`.`),cf(),Aa(16,`app-copy-button`)(17,`pre`)(18,`code`,8),bT(19,`
throw new RpcException('Invalid credentials.');
`),cf()()(),Aa(20,`blockquote`,9)(21,`strong`),bT(22,`Hint`),cf(),bT(23,` The `),Aa(24,`code`),bT(25,`RpcException`),cf(),bT(26,` class is imported from the `),Aa(27,`code`),bT(28,`@nestjs/microservices`),cf(),bT(29,` package.
`),cf(),Aa(30,`p`),bT(31,`Nest handles the thrown exception and returns an `),Aa(32,`code`),bT(33,`error`),cf(),bT(34,` object with the following structure:`),cf(),Aa(35,`pre`)(36,`code`,10),bT(37,`
{
  "status": "error",
  "message": "Invalid credentials."
}
`),cf()(),Aa(38,`p`),bT(39,`If you pass an object to the `),Aa(40,`code`),bT(41,`RpcException`),cf(),bT(42,` constructor instead of a string, Nest returns that object as is.`),cf(),Aa(43,`blockquote`,11)(44,`strong`),bT(45,`Warning`),cf(),bT(46,` An event handler has no response stream. An error that a filter rethrows for an `),Aa(47,`code`),bT(48,`@EventPattern()`),cf(),bT(49,` handler never reaches the producer, so handle the error inside the filter.
`),cf(),Aa(50,`h4`,12)(51,`span`),bT(52,`Filters`),cf()(),Aa(53,`p`),bT(54,`Microservice exception filters behave like HTTP exception filters, with one difference: the `),Aa(55,`code`),bT(56,`catch()`),cf(),bT(57,` method must return an `),Aa(58,`code`),bT(59,`Observable`),cf(),bT(60,`.`),cf(),Aa(61,`app-copy-button`,13)(62,`span`,14),bT(63),LT(64,`extension`),Wa(65,`app-tabs`,null,1),cf(),Aa(67,`pre`)(68,`code`,8),bT(69,`
import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class ExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    return throwError(() => exception.getError());
  }
}
`),cf()(),Aa(70,`pre`)(71,`code`,8),bT(72,`
import { Catch } from '@nestjs/common';
import { throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class ExceptionFilter {
  catch(exception, host) {
    return throwError(() => exception.getError());
  }
}
`),cf()()(),Aa(73,`blockquote`,11)(74,`strong`),bT(75,`Warning`),cf(),bT(76,` Global exception filters registered on the main HTTP application don't apply to microservices connected to a `),Aa(77,`a`,15),bT(78,`hybrid application`),cf(),bT(79,` unless you set the `),Aa(80,`code`),bT(81,`inheritAppConfig`),cf(),bT(82,` option. See `),Aa(83,`a`,16),bT(84,`sharing configuration`),cf(),bT(85,`.
`),cf(),Aa(86,`p`),bT(87,`The following example uses a manually instantiated method-scoped filter. As with HTTP-based applications, you can also use controller-scoped filters (i.e., prefix the controller class with a `),Aa(88,`code`),bT(89,`@UseFilters()`),cf(),bT(90,` decorator).`),cf(),Aa(91,`app-copy-button`,13)(92,`span`,14),Wa(93,`app-tabs`,null,2),cf(),Aa(95,`pre`)(96,`code`,8),bT(97,`
@UseFilters(new ExceptionFilter())
@MessagePattern({ cmd: 'sum' })
accumulate(data: number[]): number {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()(),Aa(98,`pre`)(99,`code`,8),bT(100,`
@UseFilters(new ExceptionFilter())
@MessagePattern({ cmd: 'sum' })
accumulate(data) {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()()(),Aa(101,`h4`,17)(102,`span`),bT(103,`Inheritance`),cf()(),Aa(104,`p`),bT(105,`Typically, you'll create fully customized exception filters tailored to your application's requirements. In some cases, however, you may want to extend the `),Aa(106,`strong`),bT(107,`core exception filter`),cf(),bT(108,` and override its behavior based on certain factors.`),cf(),Aa(109,`p`),bT(110,`To delegate exception processing to the base filter, extend `),Aa(111,`code`),bT(112,`BaseRpcExceptionFilter`),cf(),bT(113,` and call the inherited `),Aa(114,`code`),bT(115,`catch()`),cf(),bT(116,` method.`),cf(),Aa(117,`app-copy-button`,13)(118,`span`,14),Wa(119,`app-tabs`,null,3),cf(),Aa(121,`pre`)(122,`code`,8),bT(123,`
import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseRpcExceptionFilter } from '@nestjs/microservices';

@Catch()
export class AllExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    return super.catch(exception, host);
  }
}
`),cf()(),Aa(124,`pre`)(125,`code`,8),bT(126,`
import { Catch } from '@nestjs/common';
import { BaseRpcExceptionFilter } from '@nestjs/microservices';

@Catch()
export class AllExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception, host) {
    return super.catch(exception, host);
  }
}
`),cf()()(),Aa(127,`p`),bT(128,`The above implementation is only a shell that demonstrates the approach. Your implementation of the extended exception filter would include your own `),Aa(129,`strong`),bT(130,`business logic`),cf(),bT(131,` (e.g., handling various conditions).`),cf()(),Aa(132,`a`,18),Wa(133,`i`,19),Aa(134,`span`),bT(135,`Edit on GitHub`),cf()()()),c&2){let x=tT(66),u=tT(94),y=tT(120);zC(63),hf(` `,jT(64,13,`rpc-exception.filter`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(25),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive),zC(23),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive)}},dependencies:[Jc,ln,Lt,u,g],encapsulation:2})}return s})();var Q=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-grpc`]],features:[xy],decls:1097,vars:64,consts:[[`contentReference`,``],[`app5771e2273722f1e183dfcb52ff5d70465b72c48b`,``],[`app030c0c369e6afcacb54763de07c0a3aa96de936f`,``],[`app6504d6cf8a6748e45e33861bfc5ea556394ee158`,``],[`appc487b5f56e09c058533b6b9522cb6bf716383acd`,``],[`app5500afe744698bfdbbf5b77000bb892610a699c3`,``],[`appb46fc0eec7305b3f11331d610b0cb3b40e4cb5dd`,``],[`app4f0c1bea5aa50abf980cebfe789f70df2077b4a7`,``],[`appb8b79cec88d3228f768c8db36570e6f10ccda306`,``],[`appb4aa5398e98ff18d7c7f2a0419eeea2b9226852d`,``],[`app717f9b46ec42233039d7f749408aac57b2ad97de`,``],[1,`content`],[1,`content-inner`],[`id`,`grpc`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/grpc/grpc-node`],[`href`,`https://protobuf.dev`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`overview`],[`href`,`/microservices/grpc#options`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[1,`language-json`],[`appAnchor`,``,`id`,`options`],[`href`,`https://github.com/grpc/grpc-node/blob/master/packages/proto-loader/README.md`,`rel`,`nofollow`,`target`,`_blank`],[`href`,`https://grpc.io/grpc/node/grpc.ServerCredentials.html`,`rel`,`nofollow`,`target`,`_blank`],[`appAnchor`,``,`id`,`sample-grpc-service`],[`href`,`https://developers.google.com/protocol-buffers`],[`href`,`/microservices/basics#request-response`],[`appAnchor`,``,`id`,`client`],[1,`error`],[`href`,`/microservices/basics#client-producer-class`],[`appAnchor`,``,`id`,`exception-handling`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/04-grpc`],[`appAnchor`,``,`id`,`grpc-reflection`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://grpc.io/docs/guides/reflection/#overview`],[`appAnchor`,``,`id`,`grpc-streaming`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://grpc.io/docs/guides/concepts/`],[`appAnchor`,``,`id`,`streaming-sample`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/stephenh/ts-proto`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/stephenh/ts-proto/blob/main/NESTJS.markdown`],[`appAnchor`,``,`id`,`subject-strategy`],[1,`warning`],[`appAnchor`,``,`id`,`call-stream-handler`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://grpc.github.io/grpc/node/grpc-ClientDuplexStream.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://grpc.github.io/grpc/node/grpc-ServerReadableStream.html`],[`appAnchor`,``,`id`,`health-checks`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://grpc.io/docs/guides/health-checking/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/grpc/grpc-node/tree/master/packages/grpc-health-check`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/grpc-ecosystem/grpc-health-probe`],[`appAnchor`,``,`id`,`grpc-metadata`],[`href`,`/microservices/grpc#subject-strategy`],[`href`,`/microservices/grpc#call-stream-handler`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/grpc.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,11,0)(2,`div`,12)(3,`h3`,13),bT(4,`gRPC`),cf(),Aa(5,`p`)(6,`a`,14),bT(7,`gRPC`),cf(),bT(8,` is a modern, open source, high-performance RPC framework that can run in any environment. It connects services in and across data centers, with pluggable support for load balancing, tracing, health checking, and authentication.`),cf(),Aa(9,`p`),bT(10,`Like many RPC systems, gRPC is based on defining a service in terms of functions (methods) that can be called remotely. For each method, you define the parameters and return types. Services, parameters, and return types are defined in `),Aa(11,`code`),bT(12,`.proto`),cf(),bT(13,` files using Google's open source, language-neutral `),Aa(14,`a`,15),bT(15,`protocol buffers`),cf(),bT(16,` mechanism.`),cf(),Aa(17,`p`),bT(18,`With the gRPC transporter, Nest uses `),Aa(19,`code`),bT(20,`.proto`),cf(),bT(21,` files to dynamically bind clients and servers, which makes remote procedure calls straightforward to implement and serializes and deserializes structured data automatically.`),cf(),Aa(22,`h4`,16)(23,`span`),bT(24,`Installation`),cf()(),Aa(25,`p`),bT(26,`To start building gRPC-based microservices, first install the required packages:`),cf(),Aa(27,`pre`)(28,`code`,17),bT(29,`
$ npm i --save @grpc/grpc-js @grpc/proto-loader
`),cf()(),Aa(30,`h4`,18)(31,`span`),bT(32,`Overview`),cf()(),Aa(33,`p`),bT(34,`As with other Nest microservice transport layer implementations, you select the gRPC transporter using the `),Aa(35,`code`),bT(36,`transport`),cf(),bT(37,` property of the options object passed to the `),Aa(38,`code`),bT(39,`createMicroservice()`),cf(),bT(40,` method. In the following example, we'll set up a hero service. The `),Aa(41,`code`),bT(42,`options`),cf(),bT(43,` property provides metadata about that service; its properties are described in `),Aa(44,`a`,19),bT(45,`Options`),cf(),bT(46,` below.`),cf(),Aa(47,`app-copy-button`,20)(48,`span`,21),bT(49),LT(50,`extension`),Wa(51,`app-tabs`,null,1),cf(),Aa(53,`pre`)(54,`code`,22),bT(55,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(import.meta.dirname, 'hero/hero.proto'),
  },
});
`),cf()(),Aa(56,`pre`)(57,`code`,22),bT(58,`
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(import.meta.dirname, 'hero/hero.proto'),
  },
});
`),cf()()(),Aa(59,`blockquote`,23)(60,`strong`),bT(61,`Hint`),cf(),bT(62,` The `),Aa(63,`code`),bT(64,`join()`),cf(),bT(65,` function is imported from the `),Aa(66,`code`),bT(67,`path`),cf(),bT(68,` package, and the `),Aa(69,`code`),bT(70,`Transport`),cf(),bT(71,` enum from the `),Aa(72,`code`),bT(73,`@nestjs/microservices`),cf(),bT(74,` package.
`),cf(),Aa(75,`p`),bT(76,`In the `),Aa(77,`code`),bT(78,`nest-cli.json`),cf(),bT(79,` file, add the `),Aa(80,`code`),bT(81,`assets`),cf(),bT(82,` property to distribute non-TypeScript files, and `),Aa(83,`code`),bT(84,`watchAssets`),cf(),bT(85,` to watch all non-TypeScript assets. In this case, we want `),Aa(86,`code`),bT(87,`.proto`),cf(),bT(88,` files to be copied to the `),Aa(89,`code`),bT(90,`dist`),cf(),bT(91,` folder automatically.`),cf(),Aa(92,`pre`)(93,`code`,24),bT(94,`
{
  "compilerOptions": {
    "assets": ["**/*.proto"],
    "watchAssets": true
  }
}
`),cf()(),Aa(95,`h4`,25)(96,`span`),bT(97,`Options`),cf()(),Aa(98,`p`),bT(99,`The `),Aa(100,`strong`),bT(101,`gRPC`),cf(),bT(102,` transporter options object exposes the following properties.`),cf(),Aa(103,`table`)(104,`tr`)(105,`td`)(106,`code`),bT(107,`package`),cf()(),Aa(108,`td`),bT(109,`Protobuf package name (matches the `),Aa(110,`code`),bT(111,`package`),cf(),bT(112,` setting in the `),Aa(113,`code`),bT(114,`.proto`),cf(),bT(115,` file). Also accepts an array of package names. Required`),cf()(),Aa(116,`tr`)(117,`td`)(118,`code`),bT(119,`protoPath`),cf()(),Aa(120,`td`),bT(121,` Absolute (or relative to the current working directory) path to the `),Aa(122,`code`),bT(123,`.proto`),cf(),bT(124,` file, or an array of paths. Required unless you pass a preloaded `),Aa(125,`code`),bT(126,`packageDefinition`),cf(),bT(127,` instead `),cf()(),Aa(128,`tr`)(129,`td`)(130,`code`),bT(131,`url`),cf()(),Aa(132,`td`),bT(133,`Connection URL. A string in the format `),Aa(134,`code`),bT(135,`ip address/dns name:port`),cf(),bT(136,` (e.g., `),Aa(137,`code`),bT(138,`'0.0.0.0:50051'`),cf(),bT(139,` for a Docker server) that defines the address and port on which the transporter establishes a connection. Optional. Defaults to `),Aa(140,`code`),bT(141,`'localhost:5000'`),cf()()(),Aa(142,`tr`)(143,`td`)(144,`code`),bT(145,`protoLoader`),cf()(),Aa(146,`td`),bT(147,`NPM package name for the utility to load `),Aa(148,`code`),bT(149,`.proto`),cf(),bT(150,` files. Optional. Defaults to `),Aa(151,`code`),bT(152,`'@grpc/proto-loader'`),cf()()(),Aa(153,`tr`)(154,`td`)(155,`code`),bT(156,`loader`),cf()(),Aa(157,`td`)(158,`code`),bT(159,`@grpc/proto-loader`),cf(),bT(160,` options, which control how `),Aa(161,`code`),bT(162,`.proto`),cf(),bT(163,` files are loaded. Optional. See the `),Aa(164,`a`,26),bT(165,`proto-loader README`),cf(),bT(166,` for details `),cf()(),Aa(167,`tr`)(168,`td`)(169,`code`),bT(170,`credentials`),cf()(),Aa(171,`td`),bT(172,` Server credentials (channel credentials when used by a client). Optional. Defaults to insecure credentials. See the `),Aa(173,`a`,27)(174,`code`),bT(175,`ServerCredentials`),cf(),bT(176,` reference`),cf()()()(),Aa(177,`h4`,28)(178,`span`),bT(179,`Sample gRPC service`),cf()(),Aa(180,`p`),bT(181,`Let's define a sample gRPC service called `),Aa(182,`code`),bT(183,`HeroesService`),cf(),bT(184,`. In the `),Aa(185,`code`),bT(186,`options`),cf(),bT(187,` object above, the `),Aa(188,`code`),bT(189,`protoPath`),cf(),bT(190,` property sets the path to the `),Aa(191,`code`),bT(192,`hero.proto`),cf(),bT(193,` definitions file. The `),Aa(194,`code`),bT(195,`hero.proto`),cf(),bT(196,` file is structured using `),Aa(197,`a`,29),bT(198,`protocol buffers`),cf(),bT(199,`:`),cf(),Aa(200,`app-copy-button`)(201,`pre`)(202,`code`,22),bT(203,`
// hero/hero.proto
syntax = "proto3";

package hero;

service HeroesService {
  rpc FindOne (HeroById) returns (Hero) {}
}

message HeroById {
  int32 id = 1;
}

message Hero {
  int32 id = 1;
  string name = 2;
}
`),cf()()(),Aa(204,`p`)(205,`code`),bT(206,`HeroesService`),cf(),bT(207,` exposes a `),Aa(208,`code`),bT(209,`FindOne()`),cf(),bT(210,` method. This method expects an input argument of type `),Aa(211,`code`),bT(212,`HeroById`),cf(),bT(213,` and returns a `),Aa(214,`code`),bT(215,`Hero`),cf(),bT(216,` message (protocol buffers use `),Aa(217,`code`),bT(218,`message`),cf(),bT(219,` elements to define both parameter types and return types).`),cf(),Aa(220,`p`),bT(221,`Next, implement the service. To define a handler that fulfills this definition, use the `),Aa(222,`code`),bT(223,`@GrpcMethod()`),cf(),bT(224,` decorator in a controller, as shown below. This decorator provides the metadata needed to declare a method as a gRPC service method.`),cf(),Aa(225,`blockquote`,23)(226,`strong`),bT(227,`Hint`),cf(),bT(228,` The `),Aa(229,`code`),bT(230,`@MessagePattern()`),cf(),bT(231,` decorator (see `),Aa(232,`a`,30),bT(233,`request-response`),cf(),bT(234,`) introduced in previous microservices chapters is not used with gRPC-based microservices. The `),Aa(235,`code`),bT(236,`@GrpcMethod()`),cf(),bT(237,` decorator takes its place.
`),cf(),Aa(238,`app-copy-button`,20)(239,`span`,21),bT(240),LT(241,`extension`),Wa(242,`app-tabs`,null,2),cf(),Aa(244,`pre`)(245,`code`,22),bT(246,`
@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
`),cf()(),Aa(247,`pre`)(248,`code`,22),bT(249,`
@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data, metadata, call) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
`),cf()()(),Aa(250,`blockquote`,23)(251,`strong`),bT(252,`Hint`),cf(),bT(253,` The `),Aa(254,`code`),bT(255,`@GrpcMethod()`),cf(),bT(256,` decorator is imported from the `),Aa(257,`code`),bT(258,`@nestjs/microservices`),cf(),bT(259,` package, while `),Aa(260,`code`),bT(261,`Metadata`),cf(),bT(262,` and `),Aa(263,`code`),bT(264,`ServerUnaryCall`),cf(),bT(265,` are imported from the `),Aa(266,`code`),bT(267,`@grpc/grpc-js`),cf(),bT(268,` package.
`),cf(),Aa(269,`p`),bT(270,`The decorator takes two arguments. The first is the service name (e.g., `),Aa(271,`code`),bT(272,`'HeroesService'`),cf(),bT(273,`), corresponding to the `),Aa(274,`code`),bT(275,`HeroesService`),cf(),bT(276,` service definition in `),Aa(277,`code`),bT(278,`hero.proto`),cf(),bT(279,`. The second (the string `),Aa(280,`code`),bT(281,`'FindOne'`),cf(),bT(282,`) corresponds to the `),Aa(283,`code`),bT(284,`FindOne()`),cf(),bT(285,` rpc method defined within `),Aa(286,`code`),bT(287,`HeroesService`),cf(),bT(288,` in `),Aa(289,`code`),bT(290,`hero.proto`),cf(),bT(291,`.`),cf(),Aa(292,`p`),bT(293,`The `),Aa(294,`code`),bT(295,`findOne()`),cf(),bT(296,` handler method takes three arguments: the `),Aa(297,`code`),bT(298,`data`),cf(),bT(299,` passed from the caller, the `),Aa(300,`code`),bT(301,`metadata`),cf(),bT(302,` that stores gRPC request metadata, and the `),Aa(303,`code`),bT(304,`call`),cf(),bT(305,` object, which exposes members such as `),Aa(306,`code`),bT(307,`sendMetadata()`),cf(),bT(308,` for sending metadata to the client.`),cf(),Aa(309,`p`),bT(310,`Both `),Aa(311,`code`),bT(312,`@GrpcMethod()`),cf(),bT(313,` decorator arguments are optional. If you omit the second argument (e.g., `),Aa(314,`code`),bT(315,`'FindOne'`),cf(),bT(316,`), Nest associates the handler with the `),Aa(317,`code`),bT(318,`.proto`),cf(),bT(319,` rpc method whose name matches the handler name with its first letter capitalized (e.g., the `),Aa(320,`code`),bT(321,`findOne`),cf(),bT(322,` handler is associated with the `),Aa(323,`code`),bT(324,`FindOne`),cf(),bT(325,` rpc definition), as shown below.`),cf(),Aa(326,`app-copy-button`,20)(327,`span`,21),bT(328),LT(329,`extension`),Wa(330,`app-tabs`,null,3),cf(),Aa(332,`pre`)(333,`code`,22),bT(334,`
@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
`),cf()(),Aa(335,`pre`)(336,`code`,22),bT(337,`
@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService')
  findOne(data, metadata, call) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
`),cf()()(),Aa(338,`p`),bT(339,`You can also omit the first `),Aa(340,`code`),bT(341,`@GrpcMethod()`),cf(),bT(342,` argument. In this case, Nest associates the handler with the service definition in the `),Aa(343,`code`),bT(344,`.proto`),cf(),bT(345,` file based on the name of the `),Aa(346,`strong`),bT(347,`class`),cf(),bT(348,` where the handler is defined. For example, in the following code, the `),Aa(349,`code`),bT(350,`HeroesService`),cf(),bT(351,` class associates its handler methods with the `),Aa(352,`code`),bT(353,`HeroesService`),cf(),bT(354,` service definition in `),Aa(355,`code`),bT(356,`hero.proto`),cf(),bT(357,` because the names match.`),cf(),Aa(358,`app-copy-button`,20)(359,`span`,21),bT(360),LT(361,`extension`),Wa(362,`app-tabs`,null,4),cf(),Aa(364,`pre`)(365,`code`,22),bT(366,`
@Controller()
export class HeroesService {
  @GrpcMethod()
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
`),cf()(),Aa(367,`pre`)(368,`code`,22),bT(369,`
@Controller()
export class HeroesService {
  @GrpcMethod()
  findOne(data, metadata, call) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
`),cf()()(),Aa(370,`h4`,31)(371,`span`),bT(372,`Client`),cf()(),Aa(373,`p`),bT(374,`Nest applications can act as gRPC clients, consuming services defined in `),Aa(375,`code`),bT(376,`.proto`),cf(),bT(377,` files. You access remote services through a `),Aa(378,`code`),bT(379,`ClientGrpc`),cf(),bT(380,` object, which you can obtain in several ways.`),cf(),Aa(381,`p`),bT(382,`The preferred technique is to import the `),Aa(383,`code`),bT(384,`ClientsModule`),cf(),bT(385,`. Use its `),Aa(386,`code`),bT(387,`register()`),cf(),bT(388,` method to bind a package of services defined in a `),Aa(389,`code`),bT(390,`.proto`),cf(),bT(391,` file to an injection token, and to configure the service. The `),Aa(392,`code`),bT(393,`name`),cf(),bT(394,` property is the injection token. For gRPC services, use `),Aa(395,`code`),bT(396,`transport: Transport.GRPC`),cf(),bT(397,`. The `),Aa(398,`code`),bT(399,`options`),cf(),bT(400,` property is an object with the same properties described in `),Aa(401,`a`,19),bT(402,`Options`),cf(),bT(403,` above.`),cf(),Aa(404,`app-copy-button`)(405,`pre`)(406,`code`,22),bT(407,`
imports: [
  ClientsModule.register([
    {
      name: 'HERO_PACKAGE',
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        protoPath: join(import.meta.dirname, 'hero/hero.proto'),
      },
    },
  ]),
];
`),cf()()(),Aa(408,`blockquote`,23)(409,`strong`),bT(410,`Hint`),cf(),bT(411,` The `),Aa(412,`code`),bT(413,`register()`),cf(),bT(414,` method takes an array of objects. To register multiple packages, provide a comma-separated list of registration objects.
`),cf(),Aa(415,`p`),bT(416,`Once registered, inject the configured `),Aa(417,`code`),bT(418,`ClientGrpc`),cf(),bT(419,` object with `),Aa(420,`code`),bT(421,`@Inject()`),cf(),bT(422,`. Then use the `),Aa(423,`code`),bT(424,`ClientGrpc`),cf(),bT(425,` object's `),Aa(426,`code`),bT(427,`getService()`),cf(),bT(428,` method to retrieve the service instance, as shown below.`),cf(),Aa(429,`app-copy-button`)(430,`pre`)(431,`code`,22),bT(432,`
@Injectable()
export class AppService implements OnModuleInit {
  private heroesService: HeroesService;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
  }

  getHero(): Observable<string> {
    return this.heroesService.findOne({ id: 1 });
  }
}
`),cf()()(),Aa(433,`blockquote`,32)(434,`strong`),bT(435,`Warning`),cf(),bT(436,` The gRPC client does not send fields that contain an underscore (`),Aa(437,`code`),bT(438,`_`),cf(),bT(439,`) in their names unless the `),Aa(440,`code`),bT(441,`keepCase`),cf(),bT(442,` option is set to `),Aa(443,`code`),bT(444,`true`),cf(),bT(445,` in the proto loader configuration (`),Aa(446,`code`),bT(447,`options.loader.keepCase`),cf(),bT(448,` in the microservice transporter configuration).
`),cf(),Aa(449,`p`),bT(450,`This differs slightly from the technique used with other microservice transporters. Instead of the `),Aa(451,`code`),bT(452,`ClientProxy`),cf(),bT(453,` class, you use the `),Aa(454,`code`),bT(455,`ClientGrpc`),cf(),bT(456,` class, which provides the `),Aa(457,`code`),bT(458,`getService()`),cf(),bT(459,` method. The generic `),Aa(460,`code`),bT(461,`getService()`),cf(),bT(462,` method takes a service name as an argument and returns its instance (if available).`),cf(),Aa(463,`p`),bT(464,`Alternatively, you can use the `),Aa(465,`code`),bT(466,`@Client()`),cf(),bT(467,` decorator to instantiate a `),Aa(468,`code`),bT(469,`ClientGrpc`),cf(),bT(470,` object, as follows:`),cf(),Aa(471,`app-copy-button`)(472,`pre`)(473,`code`,22),bT(474,`
@Injectable()
export class AppService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(import.meta.dirname, 'hero/hero.proto'),
    },
  })
  client: ClientGrpc;

  private heroesService: HeroesService;

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
  }

  getHero(): Observable<string> {
    return this.heroesService.findOne({ id: 1 });
  }
}
`),cf()()(),Aa(475,`p`),bT(476,`Finally, for more complex scenarios, you can inject a dynamically configured client using the `),Aa(477,`code`),bT(478,`ClientProxyFactory`),cf(),bT(479,` class, as described in the `),Aa(480,`a`,33),bT(481,`client section of the microservices overview`),cf(),bT(482,`.`),cf(),Aa(483,`p`),bT(484,`In each case, you end up with a reference to the `),Aa(485,`code`),bT(486,`HeroesService`),cf(),bT(487,` proxy object, which exposes the same set of methods that are defined in the `),Aa(488,`code`),bT(489,`.proto`),cf(),bT(490,` file. When you call this proxy object (i.e., `),Aa(491,`code`),bT(492,`heroesService`),cf(),bT(493,`), gRPC serializes the request, forwards it to the remote system, returns a response, and deserializes the response. Because gRPC shields you from these network communication details, `),Aa(494,`code`),bT(495,`heroesService`),cf(),bT(496,` looks and acts like a local provider.`),cf(),Aa(497,`p`),bT(498,`All service methods are `),Aa(499,`strong`),bT(500,`lower camel cased`),cf(),bT(501,`, following the natural convention of the language. For example, while the `),Aa(502,`code`),bT(503,`HeroesService`),cf(),bT(504,` definition in the `),Aa(505,`code`),bT(506,`.proto`),cf(),bT(507,` file contains the `),Aa(508,`code`),bT(509,`FindOne()`),cf(),bT(510,` function, the `),Aa(511,`code`),bT(512,`heroesService`),cf(),bT(513,` instance provides the `),Aa(514,`code`),bT(515,`findOne()`),cf(),bT(516,` method.`),cf(),Aa(517,`app-copy-button`)(518,`pre`)(519,`code`,22),bT(520,`
interface HeroesService {
  findOne(data: { id: number }): Observable<any>;
}
`),cf()()(),Aa(521,`p`),bT(522,`A handler can also return an `),Aa(523,`code`),bT(524,`Observable`),cf(),bT(525,`, in which case the result values are emitted until the stream completes.`),cf(),Aa(526,`app-copy-button`,20)(527,`span`,21),bT(528),LT(529,`extension`),Wa(530,`app-tabs`,null,5),cf(),Aa(532,`pre`)(533,`code`,22),bT(534,`
@Get()
call(): Observable<any> {
  return this.heroesService.findOne({ id: 1 });
}
`),cf()(),Aa(535,`pre`)(536,`code`,22),bT(537,`
@Get()
call() {
  return this.heroesService.findOne({ id: 1 });
}
`),cf()()(),Aa(538,`p`),bT(539,`To send gRPC metadata along with the request, pass a second argument, as follows:`),cf(),Aa(540,`app-copy-button`)(541,`pre`)(542,`code`,22),bT(543,`
call(): Observable<any> {
  const metadata = new Metadata();
  metadata.add('Set-Cookie', 'yummy_cookie=choco');

  return this.heroesService.findOne({ id: 1 }, metadata);
}
`),cf()()(),Aa(544,`blockquote`,23)(545,`strong`),bT(546,`Hint`),cf(),bT(547,` The `),Aa(548,`code`),bT(549,`Metadata`),cf(),bT(550,` class is imported from the `),Aa(551,`code`),bT(552,`@grpc/grpc-js`),cf(),bT(553,` package.
`),cf(),Aa(554,`p`),bT(555,`This requires updating the `),Aa(556,`code`),bT(557,`HeroesService`),cf(),bT(558,` interface defined earlier to accept the second argument.`),cf(),Aa(559,`h4`,34)(560,`span`),bT(561,`Exception handling`),cf()(),Aa(562,`p`),bT(563,`gRPC handlers can throw `),Aa(564,`code`),bT(565,`RpcException`),cf(),bT(566,`, but a plain `),Aa(567,`code`),bT(568,`RpcException`),cf(),bT(569,` does not carry a gRPC status code, so clients receive `),Aa(570,`code`),bT(571,`UNKNOWN`),cf(),bT(572,` for every failure. Starting with NestJS v12, the `),Aa(573,`code`),bT(574,`@nestjs/microservices`),cf(),bT(575,` package ships dedicated gRPC exceptions and a `),Aa(576,`code`),bT(577,`GrpcExceptionFilter`),cf(),bT(578,` that maps them to proper gRPC error objects.`),cf(),Aa(579,`p`),bT(580,`Throw one of the status-specific exceptions from your handler:`),cf(),Aa(581,`app-copy-button`,20)(582,`span`,21),bT(583),LT(584,`extension`),Wa(585,`app-tabs`,null,6),cf(),Aa(587,`pre`)(588,`code`,22),bT(589,`
import { GrpcAlreadyExistsException } from '@nestjs/microservices';

@GrpcMethod('HeroesService')
create(data: Hero): Hero {
  if (this.heroes.has(data.id)) {
    throw new GrpcAlreadyExistsException('Hero already exists');
  }
  return this.heroes.add(data);
}
`),cf()()(),Aa(590,`p`),bT(591,`Then register the filter so those exceptions are serialized into gRPC errors:`),cf(),Aa(592,`app-copy-button`,20)(593,`span`,21),bT(594),LT(595,`extension`),Wa(596,`app-tabs`,null,7),cf(),Aa(598,`pre`)(599,`code`,22),bT(600,`
import { GrpcExceptionFilter } from '@nestjs/microservices';

const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(import.meta.dirname, 'hero/hero.proto'),
  },
});
app.useGlobalFilters(new GrpcExceptionFilter());
`),cf()()(),Aa(601,`p`),bT(602,`With the filter in place, the client receives `),Aa(603,`code`),bT(604,`ALREADY_EXISTS`),cf(),bT(605,` instead of `),Aa(606,`code`),bT(607,`UNKNOWN`),cf(),bT(608,`.`),cf(),Aa(609,`p`),bT(610,`You can also use the generic `),Aa(611,`code`),bT(612,`GrpcException`),cf(),bT(613,` and pass a status explicitly:`),cf(),Aa(614,`app-copy-button`)(615,`pre`)(616,`code`,22),bT(617,`
import { GrpcException, GrpcStatus } from '@nestjs/microservices';

throw new GrpcException('Rate limit exceeded', GrpcStatus.RESOURCE_EXHAUSTED);
`),cf()()(),Aa(618,`p`),bT(619,`The following status-specific exception classes are available. Each corresponds to a member of the `),Aa(620,`code`),bT(621,`GrpcStatus`),cf(),bT(622,` enum:`),cf(),Aa(623,`table`)(624,`tr`)(625,`td`)(626,`code`),bT(627,`GrpcCancelledException`),cf()(),Aa(628,`td`)(629,`code`),bT(630,`GrpcUnknownException`),cf()(),Aa(631,`td`)(632,`code`),bT(633,`GrpcInvalidArgumentException`),cf()(),Aa(634,`td`)(635,`code`),bT(636,`GrpcDeadlineExceededException`),cf()()(),Aa(637,`tr`)(638,`td`)(639,`code`),bT(640,`GrpcNotFoundException`),cf()(),Aa(641,`td`)(642,`code`),bT(643,`GrpcAlreadyExistsException`),cf()(),Aa(644,`td`)(645,`code`),bT(646,`GrpcPermissionDeniedException`),cf()(),Aa(647,`td`)(648,`code`),bT(649,`GrpcResourceExhaustedException`),cf()()(),Aa(650,`tr`)(651,`td`)(652,`code`),bT(653,`GrpcFailedPreconditionException`),cf()(),Aa(654,`td`)(655,`code`),bT(656,`GrpcAbortedException`),cf()(),Aa(657,`td`)(658,`code`),bT(659,`GrpcOutOfRangeException`),cf()(),Aa(660,`td`)(661,`code`),bT(662,`GrpcUnimplementedException`),cf()()(),Aa(663,`tr`)(664,`td`)(665,`code`),bT(666,`GrpcInternalException`),cf()(),Aa(667,`td`)(668,`code`),bT(669,`GrpcUnavailableException`),cf()(),Aa(670,`td`)(671,`code`),bT(672,`GrpcDataLossException`),cf()(),Aa(673,`td`)(674,`code`),bT(675,`GrpcUnauthenticatedException`),cf()()()(),Aa(676,`blockquote`,23)(677,`strong`),bT(678,`Hint`),cf(),Aa(679,`code`),bT(680,`GrpcExceptionFilter`),cf(),bT(681,` also handles `),Aa(682,`code`),bT(683,`RpcException`),cf(),bT(684,`. If the error object passed to the `),Aa(685,`code`),bT(686,`RpcException`),cf(),bT(687,` constructor carries a numeric `),Aa(688,`code`),bT(689,`code`),cf(),bT(690,` or `),Aa(691,`code`),bT(692,`status`),cf(),bT(693,` property, that value is used as the gRPC status; otherwise, the error is reported as `),Aa(694,`code`),bT(695,`UNKNOWN`),cf(),bT(696,`. Any other exception is reported as `),Aa(697,`code`),bT(698,`UNKNOWN`),cf(),bT(699,` with a generic message.
`),cf(),Aa(700,`h4`,35)(701,`span`),bT(702,`Example`),cf()(),Aa(703,`p`),bT(704,`A working example is available in the `),Aa(705,`a`,36),bT(706,`gRPC sample`),cf(),bT(707,` of the NestJS repository.`),cf(),Aa(708,`h4`,37)(709,`span`),bT(710,`gRPC Reflection`),cf()(),Aa(711,`p`),bT(712,`The `),Aa(713,`a`,38),bT(714,`gRPC Server Reflection Specification`),cf(),bT(715,` is a standard that allows gRPC clients to request details about the API the server exposes, similar to exposing an OpenAPI document for a REST API. This makes it easier to work with debugging tools such as grpc-ui or Postman.`),cf(),Aa(716,`p`),bT(717,`To add gRPC reflection support to your server, first install the implementation package:`),cf(),Aa(718,`pre`)(719,`code`,17),bT(720,`
$ npm i --save @grpc/reflection
`),cf()(),Aa(721,`p`),bT(722,`Then hook it into the gRPC server using the `),Aa(723,`code`),bT(724,`onLoadPackageDefinition`),cf(),bT(725,` hook in your gRPC server options, as follows:`),cf(),Aa(726,`app-copy-button`,20)(727,`span`,21),bT(728),LT(729,`extension`),Wa(730,`app-tabs`,null,8),cf(),Aa(732,`pre`)(733,`code`,22),bT(734,`
import { ReflectionService } from '@grpc/reflection';

const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(import.meta.dirname, 'hero/hero.proto'),
    onLoadPackageDefinition: (pkg, server) => {
      new ReflectionService(pkg).addToServer(server);
    },
  },
});
`),cf()()(),Aa(735,`p`),bT(736,`Your server now responds to reflection requests for API details.`),cf(),Aa(737,`h4`,39)(738,`span`),bT(739,`gRPC Streaming`),cf()(),Aa(740,`p`),bT(741,`gRPC supports long-lived connections, conventionally known as `),Aa(742,`code`),bT(743,`streams`),cf(),bT(744,`. Streams are useful for cases such as chat, observation, or chunked data transfers. See the `),Aa(745,`a`,40),bT(746,`gRPC core concepts guide`),cf(),bT(747,` for details.`),cf(),Aa(748,`p`),bT(749,`Nest supports gRPC stream handlers in two ways:`),cf(),Aa(750,`ul`)(751,`li`),bT(752,`RxJS `),Aa(753,`code`),bT(754,`Subject`),cf(),bT(755,` + `),Aa(756,`code`),bT(757,`Observable`),cf(),bT(758,` handler: useful for writing responses directly inside a controller method, or for passing them to a `),Aa(759,`code`),bT(760,`Subject`),cf(),bT(761,`/`),Aa(762,`code`),bT(763,`Observable`),cf(),bT(764,` consumer`),cf(),Aa(765,`li`),bT(766,`Pure gRPC call stream handler: useful for passing the call to an executor that handles the rest of the dispatch for the standard Node.js `),Aa(767,`code`),bT(768,`Duplex`),cf(),bT(769,` stream`),cf()(),Aa(770,`p`),Wa(771,`app-banner-enterprise`),cf(),Aa(772,`h4`,41)(773,`span`),bT(774,`Streaming sample`),cf()(),Aa(775,`p`),bT(776,`Let's define a new sample gRPC service called `),Aa(777,`code`),bT(778,`HelloService`),cf(),bT(779,`. The `),Aa(780,`code`),bT(781,`hello.proto`),cf(),bT(782,` file is structured using `),Aa(783,`a`,29),bT(784,`protocol buffers`),cf(),bT(785,`:`),cf(),Aa(786,`app-copy-button`)(787,`pre`)(788,`code`,22),bT(789,`
// hello/hello.proto
syntax = "proto3";

package hello;

service HelloService {
  rpc BidiHello(stream HelloRequest) returns (stream HelloResponse);
  rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse);
}

message HelloRequest {
  string greeting = 1;
}

message HelloResponse {
  string reply = 1;
}
`),cf()()(),Aa(790,`blockquote`,23)(791,`strong`),bT(792,`Hint`),cf(),Aa(793,`code`),bT(794,`LotsOfGreetings`),cf(),bT(795,` streams requests but returns a single response. Because its requests are streamed, it can't be implemented with `),Aa(796,`code`),bT(797,`@GrpcMethod()`),cf(),bT(798,`; use `),Aa(799,`code`),bT(800,`@GrpcStreamMethod()`),cf(),bT(801,` (the last value the returned `),Aa(802,`code`),bT(803,`Observable`),cf(),bT(804,` emits is sent as the response) or `),Aa(805,`code`),bT(806,`@GrpcStreamCall()`),cf(),bT(807,` (respond through the callback), both shown below.
`),cf(),Aa(808,`p`),bT(809,`Based on this `),Aa(810,`code`),bT(811,`.proto`),cf(),bT(812,` file, define the `),Aa(813,`code`),bT(814,`HelloService`),cf(),bT(815,` interface:`),cf(),Aa(816,`app-copy-button`)(817,`pre`)(818,`code`,22),bT(819,`
interface HelloService {
  bidiHello(upstream: Observable<HelloRequest>): Observable<HelloResponse>;
  lotsOfGreetings(
    upstream: Observable<HelloRequest>,
  ): Observable<HelloResponse>;
}

interface HelloRequest {
  greeting: string;
}

interface HelloResponse {
  reply: string;
}
`),cf()()(),Aa(820,`blockquote`,23)(821,`strong`),bT(822,`Hint`),cf(),bT(823,` The proto interface can be generated automatically by the `),Aa(824,`a`,42),bT(825,`ts-proto`),cf(),bT(826,` package. See the `),Aa(827,`a`,43),bT(828,`ts-proto NestJS guide`),cf(),bT(829,` to learn more.
`),cf(),Aa(830,`h4`,44)(831,`span`),bT(832,`Subject strategy`),cf()(),Aa(833,`p`),bT(834,`The `),Aa(835,`code`),bT(836,`@GrpcStreamMethod()`),cf(),bT(837,` decorator provides the function parameter as an RxJS `),Aa(838,`code`),bT(839,`Observable`),cf(),bT(840,`, so the handler can receive and process multiple messages.`),cf(),Aa(841,`app-copy-button`)(842,`pre`)(843,`code`,22),bT(844,`
@GrpcStreamMethod()
bidiHello(messages: Observable<any>, metadata: Metadata, call: ServerDuplexStream<any, any>): Observable<any> {
  const subject = new Subject();

  const onNext = message => {
    console.log(message);
    subject.next({
      reply: 'Hello, world!'
    });
  };
  const onComplete = () => subject.complete();
  messages.subscribe({
    next: onNext,
    complete: onComplete,
  });


  return subject.asObservable();
}
`),cf()()(),Aa(845,`blockquote`,45)(846,`strong`),bT(847,`Warning`),cf(),bT(848,` To support full-duplex interaction with the `),Aa(849,`code`),bT(850,`@GrpcStreamMethod()`),cf(),bT(851,` decorator, the controller method must return an RxJS `),Aa(852,`code`),bT(853,`Observable`),cf(),bT(854,`.
`),cf(),Aa(855,`blockquote`,23)(856,`strong`),bT(857,`Hint`),cf(),bT(858,` The `),Aa(859,`code`),bT(860,`Metadata`),cf(),bT(861,` class and the `),Aa(862,`code`),bT(863,`ServerDuplexStream`),cf(),bT(864,` interface are imported from the `),Aa(865,`code`),bT(866,`@grpc/grpc-js`),cf(),bT(867,` package.
`),cf(),Aa(868,`p`),bT(869,`According to the service definition in the `),Aa(870,`code`),bT(871,`.proto`),cf(),bT(872,` file, the `),Aa(873,`code`),bT(874,`BidiHello`),cf(),bT(875,` method streams requests to the service. To send multiple asynchronous messages to the stream from a client, use an RxJS `),Aa(876,`code`),bT(877,`ReplaySubject`),cf(),bT(878,`.`),cf(),Aa(879,`app-copy-button`)(880,`pre`)(881,`code`,22),bT(882,`
const helloService = this.client.getService<HelloService>('HelloService');
const helloRequest$ = new ReplaySubject<HelloRequest>();

helloRequest$.next({ greeting: 'Hello (1)!' });
helloRequest$.next({ greeting: 'Hello (2)!' });
helloRequest$.complete();

return helloService.bidiHello(helloRequest$);
`),cf()()(),Aa(883,`p`),bT(884,`In the example above, we wrote two messages to the stream (the `),Aa(885,`code`),bT(886,`next()`),cf(),bT(887,` calls) and notified the service that we finished sending data (the `),Aa(888,`code`),bT(889,`complete()`),cf(),bT(890,` call).`),cf(),Aa(891,`h4`,46)(892,`span`),bT(893,`Call stream handler`),cf()(),Aa(894,`p`),bT(895,`When the method's response is defined as a `),Aa(896,`code`),bT(897,`stream`),cf(),bT(898,`, the `),Aa(899,`code`),bT(900,`@GrpcStreamCall()`),cf(),bT(901,` decorator provides the function parameter as a `),Aa(902,`code`),bT(903,`grpc.ServerDuplexStream`),cf(),bT(904,`, which supports standard methods such as `),Aa(905,`code`),bT(906,`.on('data', callback)`),cf(),bT(907,`, `),Aa(908,`code`),bT(909,`.write(message)`),cf(),bT(910,`, and `),Aa(911,`code`),bT(912,`.end()`),cf(),bT(913,`. See the `),Aa(914,`a`,47),bT(915,`gRPC Node.js API reference`),cf(),bT(916,` for the full list of methods.`),cf(),Aa(917,`p`),bT(918,`When the method's response is not a `),Aa(919,`code`),bT(920,`stream`),cf(),bT(921,`, the `),Aa(922,`code`),bT(923,`@GrpcStreamCall()`),cf(),bT(924,` decorator provides two function parameters: a `),Aa(925,`code`),bT(926,`grpc.ServerReadableStream`),cf(),bT(927,` (see the `),Aa(928,`a`,48)(929,`code`),bT(930,`ServerReadableStream`),cf(),bT(931,` reference`),cf(),bT(932,`) and a `),Aa(933,`code`),bT(934,`callback`),cf(),bT(935,`.`),cf(),Aa(936,`p`),bT(937,`Let's start by implementing `),Aa(938,`code`),bT(939,`BidiHello`),cf(),bT(940,`, which supports full-duplex interaction.`),cf(),Aa(941,`app-copy-button`)(942,`pre`)(943,`code`,22),bT(944,`
@GrpcStreamCall()
bidiHello(requestStream: any) {
  requestStream.on('data', message => {
    console.log(message);
    requestStream.write({
      reply: 'Hello, world!'
    });
  });
}
`),cf()()(),Aa(945,`blockquote`,23)(946,`strong`),bT(947,`Hint`),cf(),bT(948,` This decorator doesn't require the handler to return anything. You handle the stream as you would any other standard stream.
`),cf(),Aa(949,`p`),bT(950,`In the example above, we used the `),Aa(951,`code`),bT(952,`write()`),cf(),bT(953,` method to write objects to the response stream. The callback passed to the `),Aa(954,`code`),bT(955,`.on()`),cf(),bT(956,` method as the second parameter is called every time the service receives a new chunk of data.`),cf(),Aa(957,`p`),bT(958,`Next, implement the `),Aa(959,`code`),bT(960,`LotsOfGreetings`),cf(),bT(961,` method.`),cf(),Aa(962,`app-copy-button`)(963,`pre`)(964,`code`,22),bT(965,`
@GrpcStreamCall()
lotsOfGreetings(requestStream: any, callback: (err: unknown, value: HelloResponse) => void) {
  requestStream.on('data', message => {
    console.log(message);
  });
  requestStream.on('end', () => callback(null, { reply: 'Hello, world!' }));
}
`),cf()()(),Aa(966,`p`),bT(967,`Here, the `),Aa(968,`code`),bT(969,`callback`),cf(),bT(970,` function sends the response once the `),Aa(971,`code`),bT(972,`requestStream`),cf(),bT(973,` has been fully processed.`),cf(),Aa(974,`h4`,49)(975,`span`),bT(976,`Health checks`),cf()(),Aa(977,`p`),bT(978,`When you run a gRPC application in an orchestrator such as Kubernetes, the orchestrator needs to know whether the application is running and healthy. The `),Aa(979,`a`,50),bT(980,`gRPC Health Check specification`),cf(),bT(981,` is a standard that lets gRPC servers expose their health status so that the orchestrator can act accordingly.`),cf(),Aa(982,`p`),bT(983,`To add gRPC health check support, first install the `),Aa(984,`a`,51),bT(985,`grpc-health-check`),cf(),bT(986,` package:`),cf(),Aa(987,`pre`)(988,`code`,17),bT(989,`
$ npm i --save grpc-health-check
`),cf()(),Aa(990,`p`),bT(991,`Then hook it into the gRPC service using the `),Aa(992,`code`),bT(993,`onLoadPackageDefinition`),cf(),bT(994,` hook in your gRPC server options, as follows. The `),Aa(995,`code`),bT(996,`protoPath`),cf(),bT(997,` must include both the health check and the hero `),Aa(998,`code`),bT(999,`.proto`),cf(),bT(1e3,` files.`),cf(),Aa(1001,`app-copy-button`,20)(1002,`span`,21),bT(1003),LT(1004,`extension`),Wa(1005,`app-tabs`,null,9),cf(),Aa(1007,`pre`)(1008,`code`,22),bT(1009,`
import { HealthImplementation, protoPath as healthCheckProtoPath } from 'grpc-health-check';

const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: [
      healthCheckProtoPath,
      join(import.meta.dirname, 'hero/hero.proto'),
    ],
    onLoadPackageDefinition: (pkg, server) => {
      const healthImpl = new HealthImplementation({
        '': 'UNKNOWN',
      });

      healthImpl.addToServer(server);
      healthImpl.setStatus('', 'SERVING');
    },
  },
});
`),cf()()(),Aa(1010,`blockquote`,23)(1011,`strong`),bT(1012,`Hint`),cf(),bT(1013,` The `),Aa(1014,`a`,52),bT(1015,`gRPC health probe`),cf(),bT(1016,` is a CLI for testing gRPC health checks in a containerized environment.
`),cf(),Aa(1017,`h4`,53)(1018,`span`),bT(1019,`gRPC Metadata`),cf()(),Aa(1020,`p`),bT(1021,`Metadata is information about a particular RPC call in the form of a list of key-value pairs, where the keys are strings and the values are typically strings but can be binary data. Metadata is opaque to gRPC itself: it lets the client provide information associated with the call to the server, and vice versa. Metadata may include authentication tokens, request identifiers and tags for monitoring purposes, and data information such as the number of records in a data set.`),cf(),Aa(1022,`p`),bT(1023,`To read the metadata in a `),Aa(1024,`code`),bT(1025,`@GrpcMethod()`),cf(),bT(1026,` handler, use the second argument (`),Aa(1027,`code`),bT(1028,`metadata`),cf(),bT(1029,`), which is of type `),Aa(1030,`code`),bT(1031,`Metadata`),cf(),bT(1032,` (imported from the `),Aa(1033,`code`),bT(1034,`@grpc/grpc-js`),cf(),bT(1035,` package).`),cf(),Aa(1036,`p`),bT(1037,`To send metadata back from the handler, use the `),Aa(1038,`code`),bT(1039,`ServerUnaryCall#sendMetadata()`),cf(),bT(1040,` method (on the third handler argument).`),cf(),Aa(1041,`app-copy-button`,20)(1042,`span`,21),bT(1043),LT(1044,`extension`),Wa(1045,`app-tabs`,null,10),cf(),Aa(1047,`pre`)(1048,`code`,22),bT(1049,`
@Controller()
export class HeroesService {
  @GrpcMethod()
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    const serverMetadata = new Metadata();
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];

    serverMetadata.add('Set-Cookie', 'yummy_cookie=choco');
    call.sendMetadata(serverMetadata);

    return items.find(({ id }) => id === data.id);
  }
}
`),cf()(),Aa(1050,`pre`)(1051,`code`,22),bT(1052,`
@Controller()
export class HeroesService {
  @GrpcMethod()
  findOne(data, metadata, call) {
    const serverMetadata = new Metadata();
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];

    serverMetadata.add('Set-Cookie', 'yummy_cookie=choco');
    call.sendMetadata(serverMetadata);

    return items.find(({ id }) => id === data.id);
  }
}
`),cf()()(),Aa(1053,`p`),bT(1054,`Likewise, to read the metadata in handlers annotated with the `),Aa(1055,`code`),bT(1056,`@GrpcStreamMethod()`),cf(),bT(1057,` decorator (see `),Aa(1058,`a`,54),bT(1059,`Subject strategy`),cf(),bT(1060,`), use the second argument (`),Aa(1061,`code`),bT(1062,`metadata`),cf(),bT(1063,`), which is of type `),Aa(1064,`code`),bT(1065,`Metadata`),cf(),bT(1066,` (imported from the `),Aa(1067,`code`),bT(1068,`@grpc/grpc-js`),cf(),bT(1069,` package).`),cf(),Aa(1070,`p`),bT(1071,`To send metadata back from the handler, use the `),Aa(1072,`code`),bT(1073,`ServerDuplexStream#sendMetadata()`),cf(),bT(1074,` method (on the third handler argument).`),cf(),Aa(1075,`p`),bT(1076,`To read metadata from within `),Aa(1077,`a`,55),bT(1078,`call stream handlers`),cf(),bT(1079,` (handlers annotated with the `),Aa(1080,`code`),bT(1081,`@GrpcStreamCall()`),cf(),bT(1082,` decorator), listen to the `),Aa(1083,`code`),bT(1084,`metadata`),cf(),bT(1085,` event on the `),Aa(1086,`code`),bT(1087,`requestStream`),cf(),bT(1088,` reference, as follows:`),cf(),Aa(1089,`app-copy-button`)(1090,`pre`)(1091,`code`,22),bT(1092,`
requestStream.on('metadata', (metadata: Metadata) => {
  const meta = metadata.get('X-Meta');
});
`),cf()()()(),Aa(1093,`a`,56),Wa(1094,`i`,57),Aa(1095,`span`),bT(1096,`Edit on GitHub`),cf()()()),c&2){let x=tT(52),u=tT(243),y=tT(331),k=tT(363),T=tT(531),M=tT(586),R=tT(597),q=tT(731),j=tT(1006),I=tT(1046);zC(49),hf(` `,jT(50,34,`main`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(184),hf(` `,jT(241,37,`heroes.controller`,u.isJsActive),`
`),zC(4),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive),zC(81),hf(` `,jT(329,40,`heroes.controller`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(25),hf(` `,jT(361,43,`heroes.controller`,k.isJsActive),`
`),zC(4),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(161),hf(` `,jT(529,46,`heroes.controller`,T.isJsActive),`
`),zC(4),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive),zC(48),hf(` `,jT(584,49,`heroes.controller`,M.isJsActive),`
`),zC(11),hf(` `,jT(595,52,`main`,R.isJsActive),`
`),zC(134),hf(` `,jT(729,55,`main`,q.isJsActive),`
`),zC(275),hf(` `,jT(1004,58,`main`,j.isJsActive),`
`),zC(40),hf(` `,jT(1044,61,`heroes.controller`,I.isJsActive),`
`),zC(4),zy(`hide`,I.isJsActive),zC(3),zy(`hide`,!I.isJsActive)}},dependencies:[Lt,ln,u,l,g],encapsulation:2})}return s})();var L=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-guards`]],features:[xy],decls:70,vars:4,consts:[[`contentReference`,``],[`app1723253abcd94f2d6008a1dd487f79541e0483bb`,``],[1,`content`],[1,`content-inner`],[`id`,`guards`],[`routerLink`,`/guards`],[1,`info`],[`appAnchor`,``,`id`,`binding-guards`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`routerLink`,`/faq/hybrid-application`],[`href`,`/faq/hybrid-application#sharing-configuration`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/guards.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Guards`),cf(),Aa(5,`p`),bT(6,`Microservice guards work the same way as `),Aa(7,`a`,5),bT(8,`regular HTTP application guards`),cf(),bT(9,`. The only difference is that they should throw `),Aa(10,`code`),bT(11,`RpcException`),cf(),bT(12,` instead of `),Aa(13,`code`),bT(14,`HttpException`),cf(),bT(15,`. When a guard returns `),Aa(16,`code`),bT(17,`false`),cf(),bT(18,`, Nest throws an `),Aa(19,`code`),bT(20,`RpcException`),cf(),bT(21,` with the `),Aa(22,`code`),bT(23,`Forbidden resource`),cf(),bT(24,` message.`),cf(),Aa(25,`blockquote`,6)(26,`strong`),bT(27,`Hint`),cf(),bT(28,` The `),Aa(29,`code`),bT(30,`RpcException`),cf(),bT(31,` class is exposed from the `),Aa(32,`code`),bT(33,`@nestjs/microservices`),cf(),bT(34,` package.
`),cf(),Aa(35,`h4`,7)(36,`span`),bT(37,`Binding guards`),cf()(),Aa(38,`p`),bT(39,`The following example uses a method-scoped guard. As with HTTP-based applications, you can also use controller-scoped guards (i.e., prefix the controller class with a `),Aa(40,`code`),bT(41,`@UseGuards()`),cf(),bT(42,` decorator).`),cf(),Aa(43,`app-copy-button`,8)(44,`span`,9),Wa(45,`app-tabs`,null,1),cf(),Aa(47,`pre`)(48,`code`,10),bT(49,`
@UseGuards(AuthGuard)
@MessagePattern({ cmd: 'sum' })
accumulate(data: number[]): number {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()(),Aa(50,`pre`)(51,`code`,10),bT(52,`
@UseGuards(AuthGuard)
@MessagePattern({ cmd: 'sum' })
accumulate(data) {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()()(),Aa(53,`blockquote`,6)(54,`strong`),bT(55,`Hint`),cf(),bT(56,` Global guards registered on the main HTTP application don't apply to microservices connected to a `),Aa(57,`a`,11),bT(58,`hybrid application`),cf(),bT(59,` unless you set the `),Aa(60,`code`),bT(61,`inheritAppConfig`),cf(),bT(62,` option. See `),Aa(63,`a`,12),bT(64,`sharing configuration`),cf(),bT(65,`.
`),cf()(),Aa(66,`a`,13),Wa(67,`i`,14),Aa(68,`span`),bT(69,`Edit on GitHub`),cf()()()),c&2){let x=tT(46);zC(47),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive)}},dependencies:[Jc,Lt,ln,u],encapsulation:2})}return s})();var U=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-interceptors`]],features:[xy],decls:40,vars:4,consts:[[`contentReference`,``],[`app731f0aeca097476faab267c330a0053c670da9df`,``],[1,`content`],[1,`content-inner`],[`id`,`interceptors`],[`routerLink`,`/interceptors`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`routerLink`,`/faq/hybrid-application`],[`href`,`/faq/hybrid-application#sharing-configuration`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/interceptors.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Interceptors`),cf(),Aa(5,`p`),bT(6,`Microservice interceptors work the same way as `),Aa(7,`a`,5),bT(8,`regular interceptors`),cf(),bT(9,`. The following example uses a manually instantiated method-scoped interceptor. As with HTTP-based applications, you can also use controller-scoped interceptors (i.e., prefix the controller class with a `),Aa(10,`code`),bT(11,`@UseInterceptors()`),cf(),bT(12,` decorator).`),cf(),Aa(13,`app-copy-button`,6)(14,`span`,7),Wa(15,`app-tabs`,null,1),cf(),Aa(17,`pre`)(18,`code`,8),bT(19,`
@UseInterceptors(new TransformInterceptor())
@MessagePattern({ cmd: 'sum' })
accumulate(data: number[]): number {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()(),Aa(20,`pre`)(21,`code`,8),bT(22,`
@UseInterceptors(new TransformInterceptor())
@MessagePattern({ cmd: 'sum' })
accumulate(data) {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()()(),Aa(23,`blockquote`,9)(24,`strong`),bT(25,`Hint`),cf(),bT(26,` Global interceptors registered on the main HTTP application don't apply to microservices connected to a `),Aa(27,`a`,10),bT(28,`hybrid application`),cf(),bT(29,` unless you set the `),Aa(30,`code`),bT(31,`inheritAppConfig`),cf(),bT(32,` option. See `),Aa(33,`a`,11),bT(34,`sharing configuration`),cf(),bT(35,`.
`),cf()(),Aa(36,`a`,12),Wa(37,`i`,13),Aa(38,`span`),bT(39,`Edit on GitHub`),cf()()()),c&2){let x=tT(16);zC(17),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive)}},dependencies:[Jc,ln,u],encapsulation:2})}return s})();var z=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-mqtt`]],features:[xy],decls:447,vars:36,consts:[[`contentReference`,``],[`app98bfb3b139f062c4fee39519649c7684b42701dd`,``],[`app5cc5e862635210f10be478c4211271db556149f4`,``],[`app5ead17b2a9e72cf1ba77e2711ba9ec442ed1f8e8`,``],[`app1d0ae427bf939712acfc1c7466bf21c57525a4b7`,``],[`app2f61afee6d58a43b7c2432719265bcc1ac9c7b61`,``],[`app92f20254b90ea91a3d089c13375249c089f5cb9a`,``],[`appa9e297d56ce8d59c8457ecb74cbe7a2dabf3bd5e`,``],[1,`content`],[1,`content-inner`],[`id`,`mqtt`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://mqtt.org/`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`overview`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`options`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mqttjs/MQTT.js/#mqttclientstreambuilder-options`],[`href`,`#quality-of-service-qos`],[`href`,`#record-builders`],[`appAnchor`,``,`id`,`client`],[`href`,`/microservices/basics#client-producer-class`],[`appAnchor`,``,`id`,`context`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/mqttjs/mqtt-packet`],[`appAnchor`,``,`id`,`wildcards`],[`appAnchor`,``,`id`,`quality-of-service-qos`],[`appAnchor`,``,`id`,`per-pattern-qos`],[`appAnchor`,``,`id`,`record-builders`],[`appAnchor`,``,`id`,`instance-status-updates`],[`appAnchor`,``,`id`,`listening-to-mqtt-events`],[`appAnchor`,``,`id`,`underlying-driver-access`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/mqtt.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,8,0)(2,`div`,9)(3,`h3`,10),bT(4,`MQTT`),cf(),Aa(5,`p`)(6,`a`,11),bT(7,`MQTT`),cf(),bT(8,` (Message Queuing Telemetry Transport) is an open source, lightweight messaging protocol optimized for low latency. It provides a scalable and cost-efficient way to connect devices using a `),Aa(9,`strong`),bT(10,`publish/subscribe`),cf(),bT(11,` model. A communication system built on MQTT consists of the publishing server, a broker, and one or more clients. The protocol is designed for constrained devices and for low-bandwidth, high-latency, or unreliable networks.`),cf(),Aa(12,`h4`,12)(13,`span`),bT(14,`Installation`),cf()(),Aa(15,`p`),bT(16,`To start building MQTT-based microservices, first install the required package:`),cf(),Aa(17,`pre`)(18,`code`,13),bT(19,`
$ npm i --save mqtt
`),cf()(),Aa(20,`h4`,14)(21,`span`),bT(22,`Overview`),cf()(),Aa(23,`p`),bT(24,`To use the MQTT transporter, pass the following options object to the `),Aa(25,`code`),bT(26,`createMicroservice()`),cf(),bT(27,` method:`),cf(),Aa(28,`app-copy-button`,15)(29,`span`,16),bT(30),LT(31,`extension`),Wa(32,`app-tabs`,null,1),cf(),Aa(34,`pre`)(35,`code`,17),bT(36,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.MQTT,
  options: {
    url: 'mqtt://localhost:1883',
  },
});
`),cf()(),Aa(37,`pre`)(38,`code`,17),bT(39,`
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.MQTT,
  options: {
    url: 'mqtt://localhost:1883',
  },
});
`),cf()()(),Aa(40,`blockquote`,18)(41,`strong`),bT(42,`Hint`),cf(),bT(43,` The `),Aa(44,`code`),bT(45,`Transport`),cf(),bT(46,` enum is imported from the `),Aa(47,`code`),bT(48,`@nestjs/microservices`),cf(),bT(49,` package.
`),cf(),Aa(50,`h4`,19)(51,`span`),bT(52,`Options`),cf()(),Aa(53,`p`),bT(54,`The `),Aa(55,`code`),bT(56,`options`),cf(),bT(57,` object is specific to the chosen transporter. The `),Aa(58,`strong`),bT(59,`MQTT`),cf(),bT(60,` transporter exposes the `),Aa(61,`a`,20),bT(62,`MQTT.js client options`),cf(),bT(63,`, as well as the `),Aa(64,`code`),bT(65,`url`),cf(),bT(66,`, `),Aa(67,`code`),bT(68,`subscribeOptions`),cf(),bT(69,` (see `),Aa(70,`a`,21),bT(71,`Quality of Service`),cf(),bT(72,`), and `),Aa(73,`code`),bT(74,`userProperties`),cf(),bT(75,` (see `),Aa(76,`a`,22),bT(77,`record builders`),cf(),bT(78,`) properties. On the server, the `),Aa(79,`code`),bT(80,`maxConnectionAttempts`),cf(),bT(81,` property limits the number of attempts to establish the initial connection (default: `),Aa(82,`code`),bT(83,`-1`),cf(),bT(84,`, i.e., unlimited). The limit doesn't apply to reconnections after the server has connected.`),cf(),Aa(85,`h4`,23)(86,`span`),bT(87,`Client`),cf()(),Aa(88,`p`),bT(89,`As with other microservice transporters, you have `),Aa(90,`a`,24),bT(91,`several options`),cf(),bT(92,` for creating an MQTT `),Aa(93,`code`),bT(94,`ClientProxy`),cf(),bT(95,` instance.`),cf(),Aa(96,`p`),bT(97,`One way to create an instance is to use the `),Aa(98,`code`),bT(99,`ClientsModule`),cf(),bT(100,`. Import it and use its `),Aa(101,`code`),bT(102,`register()`),cf(),bT(103,` method to pass an options object with the same properties shown above for the `),Aa(104,`code`),bT(105,`createMicroservice()`),cf(),bT(106,` method, plus a `),Aa(107,`code`),bT(108,`name`),cf(),bT(109,` property to use as the injection token. Read more about the `),Aa(110,`code`),bT(111,`ClientsModule`),cf(),bT(112,` in the `),Aa(113,`a`,24),bT(114,`client section of the overview`),cf(),bT(115,`.`),cf(),Aa(116,`app-copy-button`)(117,`pre`)(118,`code`,17),bT(119,`
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
        }
      },
    ]),
  ]
  ...
})
`),cf()()(),Aa(120,`p`),bT(121,`You can also create a client with `),Aa(122,`code`),bT(123,`ClientProxyFactory`),cf(),bT(124,` or the `),Aa(125,`code`),bT(126,`@Client()`),cf(),bT(127,` decorator. Both are described in the `),Aa(128,`a`,24),bT(129,`client section of the overview`),cf(),bT(130,`.`),cf(),Aa(131,`h4`,25)(132,`span`),bT(133,`Context`),cf()(),Aa(134,`p`),bT(135,`In more complex scenarios, you may need additional information about the incoming request. With the MQTT transporter, you can access the `),Aa(136,`code`),bT(137,`MqttContext`),cf(),bT(138,` object.`),cf(),Aa(139,`app-copy-button`,15)(140,`span`,16),Wa(141,`app-tabs`,null,2),cf(),Aa(143,`pre`)(144,`code`,17),bT(145,`
@MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {
  console.log(\`Topic: \${context.getTopic()}\`);
}
`),cf()(),Aa(146,`pre`)(147,`code`,17),bT(148,`
@Bind(Payload(), Ctx())
@MessagePattern('notifications')
getNotifications(data, context) {
  console.log(\`Topic: \${context.getTopic()}\`);
}
`),cf()()(),Aa(149,`blockquote`,18)(150,`strong`),bT(151,`Hint`),cf(),Aa(152,`code`),bT(153,`@Payload()`),cf(),bT(154,`, `),Aa(155,`code`),bT(156,`@Ctx()`),cf(),bT(157,` and `),Aa(158,`code`),bT(159,`MqttContext`),cf(),bT(160,` are imported from the `),Aa(161,`code`),bT(162,`@nestjs/microservices`),cf(),bT(163,` package.
`),cf(),Aa(164,`p`),bT(165,`To access the original MQTT `),Aa(166,`a`,26),bT(167,`packet`),cf(),bT(168,`, use the `),Aa(169,`code`),bT(170,`getPacket()`),cf(),bT(171,` method of the `),Aa(172,`code`),bT(173,`MqttContext`),cf(),bT(174,` object:`),cf(),Aa(175,`app-copy-button`,15)(176,`span`,16),Wa(177,`app-tabs`,null,3),cf(),Aa(179,`pre`)(180,`code`,17),bT(181,`
@MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {
  console.log(context.getPacket());
}
`),cf()(),Aa(182,`pre`)(183,`code`,17),bT(184,`
@Bind(Payload(), Ctx())
@MessagePattern('notifications')
getNotifications(data, context) {
  console.log(context.getPacket());
}
`),cf()()(),Aa(185,`h4`,27)(186,`span`),bT(187,`Wildcards`),cf()(),Aa(188,`p`),bT(189,`A subscription can target an explicit topic, or it can include wildcards. Two wildcards are available: `),Aa(190,`code`),bT(191,`+`),cf(),bT(192,` matches a single topic level, and `),Aa(193,`code`),bT(194,`#`),cf(),bT(195,` matches multiple topic levels.`),cf(),Aa(196,`app-copy-button`,15)(197,`span`,16),Wa(198,`app-tabs`,null,4),cf(),Aa(200,`pre`)(201,`code`,17),bT(202,`
@MessagePattern('sensors/+/temperature/+')
getTemperature(@Ctx() context: MqttContext) {
  console.log(\`Topic: \${context.getTopic()}\`);
}
`),cf()(),Aa(203,`pre`)(204,`code`,17),bT(205,`
@Bind(Ctx())
@MessagePattern('sensors/+/temperature/+')
getTemperature(context) {
  console.log(\`Topic: \${context.getTopic()}\`);
}
`),cf()()(),Aa(206,`h4`,28)(207,`span`),bT(208,`Quality of Service (QoS)`),cf()(),Aa(209,`p`),bT(210,`By default, subscriptions created with the `),Aa(211,`code`),bT(212,`@MessagePattern()`),cf(),bT(213,` and `),Aa(214,`code`),bT(215,`@EventPattern()`),cf(),bT(216,` decorators use QoS 0. If you need a higher QoS, set it globally with the `),Aa(217,`code`),bT(218,`subscribeOptions`),cf(),bT(219,` block when establishing the connection:`),cf(),Aa(220,`app-copy-button`,15)(221,`span`,16),bT(222),LT(223,`extension`),Wa(224,`app-tabs`,null,5),cf(),Aa(226,`pre`)(227,`code`,17),bT(228,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.MQTT,
  options: {
    url: 'mqtt://localhost:1883',
    subscribeOptions: {
      qos: 2
    },
  },
});
`),cf()(),Aa(229,`pre`)(230,`code`,17),bT(231,`
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.MQTT,
  options: {
    url: 'mqtt://localhost:1883',
    subscribeOptions: {
      qos: 2
    },
  },
});
`),cf()()(),Aa(232,`h4`,29)(233,`span`),bT(234,`Per-pattern QoS`),cf()(),Aa(235,`p`),bT(236,`You can override the subscription QoS for an individual pattern by passing a `),Aa(237,`code`),bT(238,`qos`),cf(),bT(239,` property in the extras object, the second argument of the `),Aa(240,`code`),bT(241,`@MessagePattern()`),cf(),bT(242,` or `),Aa(243,`code`),bT(244,`@EventPattern()`),cf(),bT(245,` decorator. Patterns without their own `),Aa(246,`code`),bT(247,`qos`),cf(),bT(248,` use the global `),Aa(249,`code`),bT(250,`subscribeOptions.qos`),cf(),bT(251,` value.`),cf(),Aa(252,`app-copy-button`,15)(253,`span`,16),Wa(254,`app-tabs`,null,6),cf(),Aa(256,`pre`)(257,`code`,17),bT(258,`
@EventPattern('critical-events', { qos: 2 })
handleCriticalEvent(@Payload() data: any) {
  // This subscription uses QoS 2
}

@EventPattern('metrics', { qos: 0 })
handleMetrics(@Payload() data: any) {
  // This subscription uses QoS 0
}
`),cf()(),Aa(259,`pre`)(260,`code`,17),bT(261,`
@Bind(Payload())
@EventPattern('critical-events', { qos: 2 })
handleCriticalEvent(data) {
  // This subscription uses QoS 2
}

@Bind(Payload())
@EventPattern('metrics', { qos: 0 })
handleMetrics(data) {
  // This subscription uses QoS 0
}
`),cf()()(),Aa(262,`h4`,30)(263,`span`),bT(264,`Record builders`),cf()(),Aa(265,`p`),bT(266,`To configure message options (adjust the QoS level, set the Retain or DUP flags, or add properties to the payload), use the `),Aa(267,`code`),bT(268,`MqttRecordBuilder`),cf(),bT(269,` class. For example, the following record sets QoS to `),Aa(270,`code`),bT(271,`1`),cf(),bT(272,` with the `),Aa(273,`code`),bT(274,`setQoS()`),cf(),bT(275,` method and adds a user property with the `),Aa(276,`code`),bT(277,`setProperties()`),cf(),bT(278,` method:`),cf(),Aa(279,`app-copy-button`)(280,`pre`)(281,`code`,17),bT(282,`
const userProperties = { 'x-version': '1.0.0' };
const record = new MqttRecordBuilder(':cat:')
  .setProperties({ userProperties })
  .setQoS(1)
  .build();
client.send('replace-emoji', record).subscribe(...);
`),cf()()(),Aa(283,`blockquote`,18)(284,`strong`),bT(285,`Hint`),cf(),bT(286,` The `),Aa(287,`code`),bT(288,`MqttRecordBuilder`),cf(),bT(289,` class is exported from the `),Aa(290,`code`),bT(291,`@nestjs/microservices`),cf(),bT(292,` package.
`),cf(),Aa(293,`p`),bT(294,`On the server side, you can read these options through the `),Aa(295,`code`),bT(296,`MqttContext`),cf(),bT(297,`:`),cf(),Aa(298,`app-copy-button`,15)(299,`span`,16),Wa(300,`app-tabs`,null,7),cf(),Aa(302,`pre`)(303,`code`,17),bT(304,`
@MessagePattern('replace-emoji')
replaceEmoji(@Payload() data: string, @Ctx() context: MqttContext): string {
  const { properties: { userProperties } } = context.getPacket();
  return userProperties['x-version'] === '1.0.0' ? '\u{1F431}' : '\u{1F408}';
}
`),cf()(),Aa(305,`pre`)(306,`code`,17),bT(307,`
@Bind(Payload(), Ctx())
@MessagePattern('replace-emoji')
replaceEmoji(data, context) {
  const { properties: { userProperties } } = context.getPacket();
  return userProperties['x-version'] === '1.0.0' ? '\u{1F431}' : '\u{1F408}';
}
`),cf()()(),Aa(308,`p`),bT(309,`To configure user properties for all requests sent by a client, pass them as options to the `),Aa(310,`code`),bT(311,`ClientProxyFactory`),cf(),bT(312,`:`),cf(),Aa(313,`app-copy-button`)(314,`pre`)(315,`code`,17),bT(316,`
import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  providers: [
    {
      provide: 'API_v1',
      useFactory: () =>
        ClientProxyFactory.create({
          transport: Transport.MQTT,
          options: {
            url: 'mqtt://localhost:1883',
            userProperties: { 'x-version': '1.0.0' },
          },
        }),
    },
  ],
})
export class ApiModule {}
`),cf()()(),Aa(317,`p`),bT(318,`Starting with NestJS v12.1.3, a message handler can also return a record. Nest sends the record data as the reply and applies the record options (for example, the QoS level and the properties) to the reply message:`),cf(),Aa(319,`app-copy-button`)(320,`pre`)(321,`code`,17),bT(322,`
@MessagePattern('replace-emoji')
replaceEmoji() {
  return new MqttRecordBuilder(':cat:')
    .setProperties({ userProperties: { 'x-version': '1.0.0' } })
    .setQoS(1)
    .build();
}
`),cf()()(),Aa(323,`h4`,31)(324,`span`),bT(325,`Instance status updates`),cf()(),Aa(326,`p`),bT(327,`To get real-time updates on the connection and the state of the underlying driver instance, subscribe to the `),Aa(328,`code`),bT(329,`status`),cf(),bT(330,` stream. This stream provides status updates specific to the chosen driver. For the MQTT driver, the `),Aa(331,`code`),bT(332,`status`),cf(),bT(333,` stream emits `),Aa(334,`code`),bT(335,`connected`),cf(),bT(336,`, `),Aa(337,`code`),bT(338,`disconnected`),cf(),bT(339,`, `),Aa(340,`code`),bT(341,`reconnecting`),cf(),bT(342,`, and `),Aa(343,`code`),bT(344,`closed`),cf(),bT(345,` events.`),cf(),Aa(346,`app-copy-button`)(347,`pre`)(348,`code`,17),bT(349,`
this.client.status.subscribe((status: MqttStatus) => {
  console.log(status);
});
`),cf()()(),Aa(350,`blockquote`,18)(351,`strong`),bT(352,`Hint`),cf(),bT(353,` The `),Aa(354,`code`),bT(355,`MqttStatus`),cf(),bT(356,` type is imported from the `),Aa(357,`code`),bT(358,`@nestjs/microservices`),cf(),bT(359,` package.
`),cf(),Aa(360,`p`),bT(361,`Similarly, you can subscribe to the server's `),Aa(362,`code`),bT(363,`status`),cf(),bT(364,` stream to receive notifications about the server's status.`),cf(),Aa(365,`app-copy-button`)(366,`pre`)(367,`code`,17),bT(368,`
const server = app.connectMicroservice<MicroserviceOptions>(...);
server.status.subscribe((status: MqttStatus) => {
  console.log(status);
});
`),cf()()(),Aa(369,`h4`,32)(370,`span`),bT(371,`Listening to MQTT events`),cf()(),Aa(372,`p`),bT(373,`In some cases, you might want to listen to internal events emitted by the microservice. For example, you could listen for the `),Aa(374,`code`),bT(375,`error`),cf(),bT(376,` event to trigger additional operations when an error occurs. To do this, use the `),Aa(377,`code`),bT(378,`on()`),cf(),bT(379,` method, as shown below:`),cf(),Aa(380,`app-copy-button`)(381,`pre`)(382,`code`,17),bT(383,`
this.client.on('error', (err) => {
  console.error(err);
});
`),cf()()(),Aa(384,`p`),bT(385,`Similarly, you can listen to the server's internal events:`),cf(),Aa(386,`app-copy-button`)(387,`pre`)(388,`code`,17),bT(389,`
server.on<MqttEvents>('error', (err) => {
  console.error(err);
});
`),cf()()(),Aa(390,`blockquote`,18)(391,`strong`),bT(392,`Hint`),cf(),bT(393,` The `),Aa(394,`code`),bT(395,`MqttEvents`),cf(),bT(396,` type is imported from the `),Aa(397,`code`),bT(398,`@nestjs/microservices`),cf(),bT(399,` package.
`),cf(),Aa(400,`p`),bT(401,`Starting with NestJS v12.1.2, listeners registered with the client's `),Aa(402,`code`),bT(403,`on()`),cf(),bT(404,` method stay registered until you call `),Aa(405,`code`),bT(406,`close()`),cf(),bT(407,`, so they are also attached to the new MQTT client created on the next `),Aa(408,`code`),bT(409,`send()`),cf(),bT(410,` or `),Aa(411,`code`),bT(412,`emit()`),cf(),bT(413,` call after the previous one closed without reconnecting (for example, when `),Aa(414,`code`),bT(415,`reconnectPeriod`),cf(),bT(416,` is `),Aa(417,`code`),bT(418,`0`),cf(),bT(419,`). Registrations are not deduplicated, so register each listener once rather than again from its callback or after each reconnect.`),cf(),Aa(420,`h4`,33)(421,`span`),bT(422,`Underlying driver access`),cf()(),Aa(423,`p`),bT(424,`For more advanced use cases, you may need to access the underlying driver instance, for example, to close the connection manually or to use driver-specific methods. In most cases, however, you `),Aa(425,`strong`),bT(426,`shouldn't need`),cf(),bT(427,` to access the driver directly.`),cf(),Aa(428,`p`),bT(429,`To do so, use the `),Aa(430,`code`),bT(431,`unwrap()`),cf(),bT(432,` method, which returns the underlying driver instance. The generic type parameter specifies the type of driver instance you expect.`),cf(),Aa(433,`app-copy-button`)(434,`pre`)(435,`code`,17),bT(436,`
const mqttClient = this.client.unwrap<import('mqtt').MqttClient>();
`),cf()()(),Aa(437,`p`),bT(438,`Similarly, you can access the server's underlying driver instance:`),cf(),Aa(439,`app-copy-button`)(440,`pre`)(441,`code`,17),bT(442,`
const mqttClient = server.unwrap<import('mqtt').MqttClient>();
`),cf()()()(),Aa(443,`a`,34),Wa(444,`i`,35),Aa(445,`span`),bT(446,`Edit on GitHub`),cf()()()),c&2){let x=tT(33),u=tT(142),y=tT(178),k=tT(199),T=tT(225),M=tT(255),R=tT(301);zC(30),hf(` `,jT(31,30,`main`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(106),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive),zC(33),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(18),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(19),hf(` `,jT(223,33,`main`,T.isJsActive),`
`),zC(4),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive),zC(27),zy(`hide`,M.isJsActive),zC(3),zy(`hide`,!M.isJsActive),zC(43),zy(`hide`,R.isJsActive),zC(3),zy(`hide`,!R.isJsActive)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return s})();var W=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-nats`]],features:[xy],decls:465,vars:24,consts:[[`contentReference`,``],[`appf7e37bcf1e0314da0303bb35f48c796c67869a03`,``],[`app245defd1ba022039e9780b40c3812fc87793e359`,``],[`appd9b1018caeb614b51738f99141fd11a987df4a4a`,``],[`app6acd8c5e7d9301d363c487def207b6110fbddef3`,``],[`app70dc1942099ff718a0248304c5fea78d28b0dce4`,``],[1,`content`],[1,`content-inner`],[`id`,`nats`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nats.io`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[1,`warning`],[`href`,`/migration-guide#nats-v3`],[`appAnchor`,``,`id`,`overview`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`options`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nats-io/nats.js/blob/main/core/README.md#connecting-to-a-nats-server`],[`href`,`/microservices/nats#queue-groups`],[`href`,`/microservices/nats#record-builders`],[`appAnchor`,``,`id`,`client`],[`href`,`/microservices/basics#client-producer-class`],[`appAnchor`,``,`id`,`request-response`],[`href`,`/microservices/basics#request-response`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.nats.io/nats-concepts/reqreply`],[`appAnchor`,``,`id`,`event-based`],[`href`,`/microservices/basics#event-based`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.nats.io/nats-concepts/pubsub`],[`href`,`#wildcards`],[`appAnchor`,``,`id`,`queue-groups`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.nats.io/nats-concepts/queue`],[`appAnchor`,``,`id`,`context`],[`appAnchor`,``,`id`,`wildcards`],[`appAnchor`,``,`id`,`record-builders`],[`appAnchor`,``,`id`,`custom-serializers-and-deserializers`],[`appAnchor`,``,`id`,`instance-status-updates`],[`appAnchor`,``,`id`,`listening-to-nats-events`],[`appAnchor`,``,`id`,`underlying-driver-access`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/nats.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,6,0)(2,`div`,7)(3,`h3`,8),bT(4,`NATS`),cf(),Aa(5,`p`)(6,`a`,9),bT(7,`NATS`),cf(),bT(8,` is a simple, secure, and high-performance open source messaging system for cloud native applications, IoT messaging, and microservices architectures. The NATS server is written in Go, and client libraries are available for dozens of major programming languages. NATS supports both `),Aa(9,`strong`),bT(10,`At Most Once`),cf(),bT(11,` and `),Aa(12,`strong`),bT(13,`At Least Once`),cf(),bT(14,` delivery. It runs anywhere, from large servers and cloud instances to edge gateways and Internet of Things devices.`),cf(),Aa(15,`h4`,10)(16,`span`),bT(17,`Installation`),cf()(),Aa(18,`p`),bT(19,`To start building NATS-based microservices, first install the required package:`),cf(),Aa(20,`pre`)(21,`code`,11),bT(22,`
$ npm i --save @nats-io/transport-node
`),cf()(),Aa(23,`blockquote`,12)(24,`strong`),bT(25,`Warning`),cf(),bT(26,` As of NestJS v12, the NATS transporter targets `),Aa(27,`strong`),bT(28,`NATS v3`),cf(),bT(29,` and uses the `),Aa(30,`code`),bT(31,`@nats-io/transport-node`),cf(),bT(32,` driver. If you are upgrading from an earlier version, uninstall the legacy `),Aa(33,`code`),bT(34,`nats`),cf(),bT(35,` package (`),Aa(36,`code`),bT(37,`npm uninstall nats`),cf(),bT(38,`) and install `),Aa(39,`code`),bT(40,`@nats-io/transport-node`),cf(),bT(41,` instead. See the `),Aa(42,`a`,13),bT(43,`migration guide`),cf(),bT(44,` for details.
`),cf(),Aa(45,`h4`,14)(46,`span`),bT(47,`Overview`),cf()(),Aa(48,`p`),bT(49,`To use the NATS transporter, pass the following options object to the `),Aa(50,`code`),bT(51,`createMicroservice()`),cf(),bT(52,` method:`),cf(),Aa(53,`app-copy-button`,15)(54,`span`,16),bT(55),LT(56,`extension`),Wa(57,`app-tabs`,null,1),cf(),Aa(59,`pre`)(60,`code`,17),bT(61,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.NATS,
  options: {
    servers: ['nats://localhost:4222'],
  },
});
`),cf()(),Aa(62,`pre`)(63,`code`,17),bT(64,`
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.NATS,
  options: {
    servers: ['nats://localhost:4222'],
  },
});
`),cf()()(),Aa(65,`blockquote`,18)(66,`strong`),bT(67,`Hint`),cf(),bT(68,` The `),Aa(69,`code`),bT(70,`Transport`),cf(),bT(71,` enum is imported from the `),Aa(72,`code`),bT(73,`@nestjs/microservices`),cf(),bT(74,` package.
`),cf(),Aa(75,`h4`,19)(76,`span`),bT(77,`Options`),cf()(),Aa(78,`p`),bT(79,`The `),Aa(80,`code`),bT(81,`options`),cf(),bT(82,` object is specific to the chosen transporter. The `),Aa(83,`strong`),bT(84,`NATS`),cf(),bT(85,` transporter exposes the `),Aa(86,`a`,20),bT(87,`NATS connection options`),cf(),bT(88,`, as well as the following properties:`),cf(),Aa(89,`table`)(90,`tr`)(91,`td`)(92,`code`),bT(93,`queue`),cf()(),Aa(94,`td`),bT(95,`Queue group that your server subscribes with (leave `),Aa(96,`code`),bT(97,`undefined`),cf(),bT(98,` to ignore this setting). Read more about NATS queue groups `),Aa(99,`a`,21),bT(100,`below`),cf(),bT(101,`.`),cf()(),Aa(102,`tr`)(103,`td`)(104,`code`),bT(105,`gracefulShutdown`),cf()(),Aa(106,`td`),bT(107,`Enables graceful shutdown. When enabled, the server first unsubscribes from all subjects, then waits for `),Aa(108,`code`),bT(109,`gracePeriod`),cf(),bT(110,` before closing the connection. Default is `),Aa(111,`code`),bT(112,`false`),cf(),bT(113,`.`),cf()(),Aa(114,`tr`)(115,`td`)(116,`code`),bT(117,`gracePeriod`),cf()(),Aa(118,`td`),bT(119,`Time in milliseconds to wait after unsubscribing from all subjects when `),Aa(120,`code`),bT(121,`gracefulShutdown`),cf(),bT(122,` is enabled. Default is `),Aa(123,`code`),bT(124,`10000`),cf(),bT(125,` ms.`),cf()(),Aa(126,`tr`)(127,`td`)(128,`code`),bT(129,`headers`),cf()(),Aa(130,`td`),bT(131,`Headers added to every message a client sends (see `),Aa(132,`a`,22),bT(133,`record builders`),cf(),bT(134,`).`),cf()()(),Aa(135,`h4`,23)(136,`span`),bT(137,`Client`),cf()(),Aa(138,`p`),bT(139,`As with other microservice transporters, you have `),Aa(140,`a`,24),bT(141,`several options`),cf(),bT(142,` for creating a NATS `),Aa(143,`code`),bT(144,`ClientProxy`),cf(),bT(145,` instance.`),cf(),Aa(146,`p`),bT(147,`One way to create an instance is to use the `),Aa(148,`code`),bT(149,`ClientsModule`),cf(),bT(150,`. Import it and use its `),Aa(151,`code`),bT(152,`register()`),cf(),bT(153,` method to pass an options object with the same properties shown above for the `),Aa(154,`code`),bT(155,`createMicroservice()`),cf(),bT(156,` method, plus a `),Aa(157,`code`),bT(158,`name`),cf(),bT(159,` property to use as the injection token. Read more about the `),Aa(160,`code`),bT(161,`ClientsModule`),cf(),bT(162,` in the `),Aa(163,`a`,24),bT(164,`client section of the overview`),cf(),bT(165,`.`),cf(),Aa(166,`app-copy-button`)(167,`pre`)(168,`code`,17),bT(169,`
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        }
      },
    ]),
  ]
  ...
})
`),cf()()(),Aa(170,`p`),bT(171,`You can also create a client with `),Aa(172,`code`),bT(173,`ClientProxyFactory`),cf(),bT(174,` or the `),Aa(175,`code`),bT(176,`@Client()`),cf(),bT(177,` decorator. Both are described in the `),Aa(178,`a`,24),bT(179,`client section of the overview`),cf(),bT(180,`.`),cf(),Aa(181,`h4`,25)(182,`span`),bT(183,`Request-response`),cf()(),Aa(184,`p`),bT(185,`For the `),Aa(186,`a`,26),bT(187,`request-response`),cf(),bT(188,` message style, the NATS transporter doesn't use the built-in NATS `),Aa(189,`a`,27),bT(190,`Request-Reply`),cf(),bT(191,` API. Instead, the client publishes a "request" on a given subject with the `),Aa(192,`code`),bT(193,`publish()`),cf(),bT(194,` method and a unique reply subject name. Responders listen on that subject and send responses to the reply subject. Reply subjects are routed back to the requester dynamically, regardless of the location of either party.`),cf(),Aa(195,`h4`,28)(196,`span`),bT(197,`Event-based`),cf()(),Aa(198,`p`),bT(199,`For the `),Aa(200,`a`,29),bT(201,`event-based`),cf(),bT(202,` message style, the NATS transporter uses the built-in NATS `),Aa(203,`a`,30),bT(204,`Publish-Subscribe`),cf(),bT(205,` mechanism. A publisher sends a message on a subject, and every active subscriber listening on that subject receives the message. Subscribers can also register interest in `),Aa(206,`a`,31),bT(207,`wildcard`),cf(),bT(208,` subjects. This one-to-many pattern is sometimes called fan-out.`),cf(),Aa(209,`h4`,32)(210,`span`),bT(211,`Queue groups`),cf()(),Aa(212,`p`),bT(213,`NATS provides a built-in load balancing feature called `),Aa(214,`a`,33),bT(215,`distributed queues`),cf(),bT(216,`. To create a queue subscription, use the `),Aa(217,`code`),bT(218,`queue`),cf(),bT(219,` property as follows:`),cf(),Aa(220,`app-copy-button`,15)(221,`span`,16),bT(222),LT(223,`extension`),Wa(224,`app-tabs`,null,2),cf(),Aa(226,`pre`)(227,`code`,17),bT(228,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.NATS,
  options: {
    servers: ['nats://localhost:4222'],
    queue: 'cats_queue',
  },
});
`),cf()()(),Aa(229,`h4`,34)(230,`span`),bT(231,`Context`),cf()(),Aa(232,`p`),bT(233,`In more complex scenarios, you may need additional information about the incoming request. With the NATS transporter, you can access the `),Aa(234,`code`),bT(235,`NatsContext`),cf(),bT(236,` object.`),cf(),Aa(237,`app-copy-button`,15)(238,`span`,16),Wa(239,`app-tabs`,null,3),cf(),Aa(241,`pre`)(242,`code`,17),bT(243,`
@MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: NatsContext) {
  console.log(\`Subject: \${context.getSubject()}\`);
}
`),cf()(),Aa(244,`pre`)(245,`code`,17),bT(246,`
@Bind(Payload(), Ctx())
@MessagePattern('notifications')
getNotifications(data, context) {
  console.log(\`Subject: \${context.getSubject()}\`);
}
`),cf()()(),Aa(247,`blockquote`,18)(248,`strong`),bT(249,`Hint`),cf(),Aa(250,`code`),bT(251,`@Payload()`),cf(),bT(252,`, `),Aa(253,`code`),bT(254,`@Ctx()`),cf(),bT(255,` and `),Aa(256,`code`),bT(257,`NatsContext`),cf(),bT(258,` are imported from the `),Aa(259,`code`),bT(260,`@nestjs/microservices`),cf(),bT(261,` package.
`),cf(),Aa(262,`h4`,35)(263,`span`),bT(264,`Wildcards`),cf()(),Aa(265,`p`),bT(266,`A subscription can target an explicit subject, or it can include wildcards.`),cf(),Aa(267,`app-copy-button`,15)(268,`span`,16),Wa(269,`app-tabs`,null,4),cf(),Aa(271,`pre`)(272,`code`,17),bT(273,`
@MessagePattern('time.us.*')
getDate(@Payload() data: number[], @Ctx() context: NatsContext) {
  console.log(\`Subject: \${context.getSubject()}\`); // e.g. "time.us.east"
  return new Date().toLocaleTimeString(...);
}
`),cf()(),Aa(274,`pre`)(275,`code`,17),bT(276,`
@Bind(Payload(), Ctx())
@MessagePattern('time.us.*')
getDate(data, context) {
  console.log(\`Subject: \${context.getSubject()}\`); // e.g. "time.us.east"
  return new Date().toLocaleTimeString(...);
}
`),cf()()(),Aa(277,`h4`,36)(278,`span`),bT(279,`Record builders`),cf()(),Aa(280,`p`),bT(281,`To configure message options, use the `),Aa(282,`code`),bT(283,`NatsRecordBuilder`),cf(),bT(284,` class. It works for both request-response and event-based flows. For example, to add an `),Aa(285,`code`),bT(286,`x-version`),cf(),bT(287,` header, use the `),Aa(288,`code`),bT(289,`setHeaders()`),cf(),bT(290,` method:`),cf(),Aa(291,`app-copy-button`)(292,`pre`)(293,`code`,17),bT(294,`
import * as nats from '@nats-io/nats-core';

// somewhere in your code
const headers = nats.headers();
headers.set('x-version', '1.0.0');

const record = new NatsRecordBuilder(':cat:').setHeaders(headers).build();
this.client.send('replace-emoji', record).subscribe(...);
`),cf()()(),Aa(295,`blockquote`,18)(296,`strong`),bT(297,`Hint`),cf(),bT(298,` The `),Aa(299,`code`),bT(300,`NatsRecordBuilder`),cf(),bT(301,` class is exported from the `),Aa(302,`code`),bT(303,`@nestjs/microservices`),cf(),bT(304,` package.
`),cf(),Aa(305,`p`),bT(306,`On the server side, you can read these headers through the `),Aa(307,`code`),bT(308,`NatsContext`),cf(),bT(309,`:`),cf(),Aa(310,`app-copy-button`,15)(311,`span`,16),Wa(312,`app-tabs`,null,5),cf(),Aa(314,`pre`)(315,`code`,17),bT(316,`
@MessagePattern('replace-emoji')
replaceEmoji(@Payload() data: string, @Ctx() context: NatsContext): string {
  const headers = context.getHeaders();
  return headers?.get('x-version') === '1.0.0' ? '\u{1F431}' : '\u{1F408}';
}
`),cf()(),Aa(317,`pre`)(318,`code`,17),bT(319,`
@Bind(Payload(), Ctx())
@MessagePattern('replace-emoji')
replaceEmoji(data, context) {
  const headers = context.getHeaders();
  return headers?.get('x-version') === '1.0.0' ? '\u{1F431}' : '\u{1F408}';
}
`),cf()()(),Aa(320,`p`),bT(321,`To configure headers for all requests sent by a client, pass them as options to the `),Aa(322,`code`),bT(323,`ClientProxyFactory`),cf(),bT(324,`:`),cf(),Aa(325,`app-copy-button`)(326,`pre`)(327,`code`,17),bT(328,`
import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  providers: [
    {
      provide: 'API_v1',
      useFactory: () =>
        ClientProxyFactory.create({
          transport: Transport.NATS,
          options: {
            servers: ['nats://localhost:4222'],
            headers: { 'x-version': '1.0.0' },
          },
        }),
    },
  ],
})
export class ApiModule {}
`),cf()()(),Aa(329,`p`),bT(330,`Headers set on a record take precedence over the client-level `),Aa(331,`code`),bT(332,`headers`),cf(),bT(333,` option.`),cf(),Aa(334,`p`),bT(335,`Starting with NestJS v12.1.3, a message handler can also return a record. Nest sends the record data as the reply and the record headers as the headers of the reply message:`),cf(),Aa(336,`app-copy-button`)(337,`pre`)(338,`code`,17),bT(339,`
import * as nats from '@nats-io/nats-core';

@MessagePattern('replace-emoji')
replaceEmoji() {
  const headers = nats.headers();
  headers.set('x-version', '1.0.0');

  return new NatsRecordBuilder(':cat:').setHeaders(headers).build();
}
`),cf()()(),Aa(340,`h4`,37)(341,`span`),bT(342,`Custom serializers and deserializers`),cf()(),Aa(343,`p`),bT(344,`Starting with NestJS v12, Nest serializes NATS packets as JSON strings, and custom NATS deserializers receive the full NATS message object instead of a raw `),Aa(345,`code`),bT(346,`Uint8Array`),cf(),bT(347,`. If you have written a custom deserializer, read the payload through `),Aa(348,`code`),bT(349,`msg.json()`),cf(),bT(350,` rather than decoding bytes manually:`),cf(),Aa(351,`app-copy-button`)(352,`pre`)(353,`code`,17),bT(354,`
import { Deserializer, IncomingRequest } from '@nestjs/microservices';

export class CustomNatsDeserializer implements Deserializer {
  deserialize(msg: any): IncomingRequest {
    // Previously: JSON.parse(new TextDecoder().decode(msg));
    return msg.json();
  }
}
`),cf()()(),Aa(355,`h4`,38)(356,`span`),bT(357,`Instance status updates`),cf()(),Aa(358,`p`),bT(359,`To get real-time updates on the connection and the state of the underlying driver instance, subscribe to the `),Aa(360,`code`),bT(361,`status`),cf(),bT(362,` stream. This stream provides status updates specific to the chosen driver. For the NATS driver, the `),Aa(363,`code`),bT(364,`status`),cf(),bT(365,` stream emits `),Aa(366,`code`),bT(367,`connected`),cf(),bT(368,`, `),Aa(369,`code`),bT(370,`disconnected`),cf(),bT(371,`, and `),Aa(372,`code`),bT(373,`reconnecting`),cf(),bT(374,` events.`),cf(),Aa(375,`app-copy-button`)(376,`pre`)(377,`code`,17),bT(378,`
this.client.status.subscribe((status: NatsStatus) => {
  console.log(status);
});
`),cf()()(),Aa(379,`blockquote`,18)(380,`strong`),bT(381,`Hint`),cf(),bT(382,` The `),Aa(383,`code`),bT(384,`NatsStatus`),cf(),bT(385,` type is imported from the `),Aa(386,`code`),bT(387,`@nestjs/microservices`),cf(),bT(388,` package.
`),cf(),Aa(389,`p`),bT(390,`Similarly, you can subscribe to the server's `),Aa(391,`code`),bT(392,`status`),cf(),bT(393,` stream to receive notifications about the server's status.`),cf(),Aa(394,`app-copy-button`)(395,`pre`)(396,`code`,17),bT(397,`
const server = app.connectMicroservice<MicroserviceOptions>(...);
server.status.subscribe((status: NatsStatus) => {
  console.log(status);
});
`),cf()()(),Aa(398,`h4`,39)(399,`span`),bT(400,`Listening to NATS events`),cf()(),Aa(401,`p`),bT(402,`In some cases, you might want to listen to internal events emitted by the microservice. The NATS transporter emits the `),Aa(403,`code`),bT(404,`disconnect`),cf(),bT(405,`, `),Aa(406,`code`),bT(407,`reconnect`),cf(),bT(408,`, and `),Aa(409,`code`),bT(410,`update`),cf(),bT(411,` (cluster servers added or removed) events. For example, you could listen for the `),Aa(412,`code`),bT(413,`disconnect`),cf(),bT(414,` event to trigger additional operations when the connection is lost. To do this, use the `),Aa(415,`code`),bT(416,`on()`),cf(),bT(417,` method, as shown below:`),cf(),Aa(418,`app-copy-button`)(419,`pre`)(420,`code`,17),bT(421,`
this.client.on('disconnect', (serverUrl) => {
  console.error(\`Disconnected from \${serverUrl}\`);
});
`),cf()()(),Aa(422,`p`),bT(423,`Similarly, you can listen to the server's internal events:`),cf(),Aa(424,`app-copy-button`)(425,`pre`)(426,`code`,17),bT(427,`
server.on<NatsEvents>('disconnect', (serverUrl) => {
  console.error(\`Disconnected from \${serverUrl}\`);
});
`),cf()()(),Aa(428,`blockquote`,18)(429,`strong`),bT(430,`Hint`),cf(),bT(431,` The `),Aa(432,`code`),bT(433,`NatsEvents`),cf(),bT(434,` type is imported from the `),Aa(435,`code`),bT(436,`@nestjs/microservices`),cf(),bT(437,` package.
`),cf(),Aa(438,`h4`,40)(439,`span`),bT(440,`Underlying driver access`),cf()(),Aa(441,`p`),bT(442,`For more advanced use cases, you may need to access the underlying driver instance, for example, to close the connection manually or to use driver-specific methods. In most cases, however, you `),Aa(443,`strong`),bT(444,`shouldn't need`),cf(),bT(445,` to access the driver directly.`),cf(),Aa(446,`p`),bT(447,`To do so, use the `),Aa(448,`code`),bT(449,`unwrap()`),cf(),bT(450,` method, which returns the underlying driver instance. The generic type parameter specifies the type of driver instance you expect.`),cf(),Aa(451,`app-copy-button`)(452,`pre`)(453,`code`,17),bT(454,`
const natsConnection =
  this.client.unwrap<import('@nats-io/transport-node').NatsConnection>();
`),cf()()(),Aa(455,`p`),bT(456,`Similarly, you can access the server's underlying driver instance:`),cf(),Aa(457,`app-copy-button`)(458,`pre`)(459,`code`,17),bT(460,`
const natsConnection =
  server.unwrap<import('@nats-io/transport-node').NatsConnection>();
`),cf()()()(),Aa(461,`a`,41),Wa(462,`i`,42),Aa(463,`span`),bT(464,`Edit on GitHub`),cf()()()),c&2){let x=tT(58),u=tT(225),y=tT(240),k=tT(270),T=tT(313);zC(55),hf(` `,jT(56,18,`main`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(160),hf(` `,jT(223,21,`main`,u.isJsActive),`
`),zC(19),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(27),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(40),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return s})();var $=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-pipes`]],features:[xy],decls:112,vars:8,consts:[[`contentReference`,``],[`app40b7f266a39966d36820e5e62e173f92d1275471`,``],[`appb58902cbb9774104c5af20051ea4a41a66acee17`,``],[1,`content`],[1,`content-inner`],[`id`,`pipes`],[`routerLink`,`/pipes`],[1,`info`],[`appAnchor`,``,`id`,`binding-pipes`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/application/validation#schema-based-validation`],[`routerLink`,`/faq/hybrid-application`],[`href`,`/faq/hybrid-application#sharing-configuration`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/pipes.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`Pipes`),cf(),Aa(5,`p`),bT(6,`Microservice pipes work the same way as `),Aa(7,`a`,6),bT(8,`regular pipes`),cf(),bT(9,`. The only difference is that they should throw `),Aa(10,`code`),bT(11,`RpcException`),cf(),bT(12,` instead of `),Aa(13,`code`),bT(14,`HttpException`),cf(),bT(15,`. Unless a custom exception filter handles it, an `),Aa(16,`code`),bT(17,`HttpException`),cf(),bT(18,` thrown during message handling reaches the client as a generic `),Aa(19,`code`),bT(20,`Internal server error`),cf(),bT(21,` message.`),cf(),Aa(22,`blockquote`,7)(23,`strong`),bT(24,`Hint`),cf(),bT(25,` The `),Aa(26,`code`),bT(27,`RpcException`),cf(),bT(28,` class is exposed from the `),Aa(29,`code`),bT(30,`@nestjs/microservices`),cf(),bT(31,` package.
`),cf(),Aa(32,`h4`,8)(33,`span`),bT(34,`Binding pipes`),cf()(),Aa(35,`p`),bT(36,`The following example uses a manually instantiated method-scoped pipe. The `),Aa(37,`code`),bT(38,`exceptionFactory`),cf(),bT(39,` option makes `),Aa(40,`code`),bT(41,`ValidationPipe`),cf(),bT(42,` throw an `),Aa(43,`code`),bT(44,`RpcException`),cf(),bT(45,` instead of its default `),Aa(46,`code`),bT(47,`BadRequestException`),cf(),bT(48,`. As with HTTP-based applications, you can also use controller-scoped pipes (i.e., prefix the controller class with a `),Aa(49,`code`),bT(50,`@UsePipes()`),cf(),bT(51,` decorator).`),cf(),Aa(52,`app-copy-button`,9)(53,`span`,10),Wa(54,`app-tabs`,null,1),cf(),Aa(56,`pre`)(57,`code`,11),bT(58,`
@UsePipes(new ValidationPipe({ exceptionFactory: (errors) => new RpcException(errors) }))
@MessagePattern({ cmd: 'sum' })
accumulate(data: number[]): number {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()(),Aa(59,`pre`)(60,`code`,11),bT(61,`
@UsePipes(new ValidationPipe({ exceptionFactory: (errors) => new RpcException(errors) }))
@MessagePattern({ cmd: 'sum' })
accumulate(data) {
  return (data || []).reduce((a, b) => a + b);
}
`),cf()()(),Aa(62,`p`),bT(63,`The `),Aa(64,`code`),bT(65,`@Payload()`),cf(),bT(66,` decorator also accepts a `),Aa(67,`code`),bT(68,`schema`),cf(),bT(69,` option, which lets `),Aa(70,`code`),bT(71,`StandardSchemaValidationPipe`),cf(),bT(72,` (exported from `),Aa(73,`code`),bT(74,`@nestjs/common`),cf(),bT(75,`) validate the payload against a `),Aa(76,`a`,12),bT(77,`Standard Schema`),cf(),bT(78,` (e.g., a Zod schema). Configure its `),Aa(79,`code`),bT(80,`exceptionFactory`),cf(),bT(81,` option in the same way, so that validation errors are thrown as `),Aa(82,`code`),bT(83,`RpcException`),cf(),bT(84,`:`),cf(),Aa(85,`app-copy-button`,9)(86,`span`,10),Wa(87,`app-tabs`,null,2),cf(),Aa(89,`pre`)(90,`code`,11),bT(91,`
@UsePipes(new StandardSchemaValidationPipe({ exceptionFactory: (issues) => new RpcException(issues) }))
@MessagePattern({ cmd: 'sum' })
accumulate(@Payload({ schema: z.array(z.number()) }) data: number[]): number {
  return data.reduce((a, b) => a + b, 0);
}
`),cf()(),Aa(92,`pre`)(93,`code`,11),bT(94,`
@UsePipes(new StandardSchemaValidationPipe({ exceptionFactory: (issues) => new RpcException(issues) }))
@Bind(Payload({ schema: z.array(z.number()) }))
@MessagePattern({ cmd: 'sum' })
accumulate(data) {
  return data.reduce((a, b) => a + b, 0);
}
`),cf()()(),Aa(95,`blockquote`,7)(96,`strong`),bT(97,`Hint`),cf(),bT(98,` Global pipes registered on the main HTTP application don't apply to microservices connected to a `),Aa(99,`a`,13),bT(100,`hybrid application`),cf(),bT(101,` unless you set the `),Aa(102,`code`),bT(103,`inheritAppConfig`),cf(),bT(104,` option. See `),Aa(105,`a`,14),bT(106,`sharing configuration`),cf(),bT(107,`.
`),cf()(),Aa(108,`a`,15),Wa(109,`i`,16),Aa(110,`span`),bT(111,`Edit on GitHub`),cf()()()),c&2){let x=tT(55),u=tT(88);zC(56),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(30),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive)}},dependencies:[Jc,Lt,ln,u],encapsulation:2})}return s})();var Y=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-rabbitmq`]],features:[xy],decls:639,vars:28,consts:[[`contentReference`,``],[`appa9d30fb09d0aef288bb87a16b495029787591fa7`,``],[`app8ba51446ad64623f60f5fedc03e19a1bac51b963`,``],[`app000fdb7697549278eee1ef68a1b73b769e1c6723`,``],[`appe4626a138402a1fa368d2525e4ae1aad71a4e24d`,``],[`app475954de41bef5eb4c22a6be94cc3ec99c2cbe2b`,``],[`app888a935b0937928ebee2452ff216180a45563e05`,``],[1,`content`],[1,`content-inner`],[`id`,`rabbitmq`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.rabbitmq.com/`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`overview`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`options`],[`href`,`https://amqp-node.github.io/amqplib/channel_api.html#channel_consume`,`rel`,`nofollow`,`target`,`_blank`],[`href`,`https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue`,`rel`,`nofollow`,`target`,`_blank`],[`href`,`https://amqp-node.github.io/amqplib/channel_api.html#connect`,`rel`,`nofollow`,`target`,`_blank`],[`appAnchor`,``,`id`,`client`],[`href`,`/microservices/basics#client-producer-class`],[`appAnchor`,``,`id`,`context`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.rabbitmq.com/channels.html`],[`appAnchor`,``,`id`,`message-acknowledgement`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.rabbitmq.com/confirms.html`],[`appAnchor`,``,`id`,`record-builders`],[`appAnchor`,``,`id`,`instance-status-updates`],[`appAnchor`,``,`id`,`listening-to-rabbitmq-events`],[`appAnchor`,``,`id`,`underlying-driver-access`],[`appAnchor`,``,`id`,`wildcards`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/rabbitmq.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,7,0)(2,`div`,8)(3,`h3`,9),bT(4,`RabbitMQ`),cf(),Aa(5,`p`)(6,`a`,10),bT(7,`RabbitMQ`),cf(),bT(8,` is an open-source, lightweight message broker that supports multiple messaging protocols. It can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements, and it is one of the most widely deployed message brokers, used by small startups and large enterprises alike.`),cf(),Aa(9,`h4`,11)(10,`span`),bT(11,`Installation`),cf()(),Aa(12,`p`),bT(13,`To start building RabbitMQ-based microservices, first install the required packages:`),cf(),Aa(14,`pre`)(15,`code`,12),bT(16,`
$ npm i --save amqplib amqp-connection-manager
`),cf()(),Aa(17,`h4`,13)(18,`span`),bT(19,`Overview`),cf()(),Aa(20,`p`),bT(21,`To use the RabbitMQ transporter, pass the following options object to the `),Aa(22,`code`),bT(23,`createMicroservice()`),cf(),bT(24,` method:`),cf(),Aa(25,`app-copy-button`,14)(26,`span`,15),bT(27),LT(28,`extension`),Wa(29,`app-tabs`,null,1),cf(),Aa(31,`pre`)(32,`code`,16),bT(33,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'cats_queue',
    queueOptions: {
      durable: false
    },
  },
});
`),cf()(),Aa(34,`pre`)(35,`code`,16),bT(36,`
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'cats_queue',
    queueOptions: {
      durable: false
    },
  },
});
`),cf()()(),Aa(37,`blockquote`,17)(38,`strong`),bT(39,`Hint`),cf(),bT(40,` The `),Aa(41,`code`),bT(42,`Transport`),cf(),bT(43,` enum is imported from the `),Aa(44,`code`),bT(45,`@nestjs/microservices`),cf(),bT(46,` package.
`),cf(),Aa(47,`h4`,18)(48,`span`),bT(49,`Options`),cf()(),Aa(50,`p`),bT(51,`The `),Aa(52,`code`),bT(53,`options`),cf(),bT(54,` property is specific to the chosen transporter. The `),Aa(55,`strong`),bT(56,`RabbitMQ`),cf(),bT(57,` transporter exposes the following properties.`),cf(),Aa(58,`table`)(59,`tr`)(60,`td`)(61,`code`),bT(62,`urls`),cf()(),Aa(63,`td`),bT(64,`An array of connection URLs to try in order`),cf()(),Aa(65,`tr`)(66,`td`)(67,`code`),bT(68,`queue`),cf()(),Aa(69,`td`),bT(70,`Name of the queue your server listens to`),cf()(),Aa(71,`tr`)(72,`td`)(73,`code`),bT(74,`prefetchCount`),cf()(),Aa(75,`td`),bT(76,`Sets the prefetch count for the channel`),cf()(),Aa(77,`tr`)(78,`td`)(79,`code`),bT(80,`isGlobalPrefetchCount`),cf()(),Aa(81,`td`),bT(82,`If `),Aa(83,`code`),bT(84,`true`),cf(),bT(85,`, applies the prefetch count per channel instead of per consumer`),cf()(),Aa(86,`tr`)(87,`td`)(88,`code`),bT(89,`noAck`),cf()(),Aa(90,`td`),bT(91,`If `),Aa(92,`code`),bT(93,`false`),cf(),bT(94,`, enables manual acknowledgment mode. Defaults to `),Aa(95,`code`),bT(96,`true`),cf()()(),Aa(97,`tr`)(98,`td`)(99,`code`),bT(100,`consumerTag`),cf()(),Aa(101,`td`),bT(102,`A name the server uses to distinguish message deliveries for the consumer; it must not already be in use on the channel. It's usually easier to omit it, in which case the server creates a random name and supplies it in the reply (see `),Aa(103,`a`,19)(104,`code`),bT(105,`channel.consume()`),cf(),bT(106,` in the amqplib documentation`),cf(),bT(107,`)`),cf()(),Aa(108,`tr`)(109,`td`)(110,`code`),bT(111,`queueOptions`),cf()(),Aa(112,`td`),bT(113,`Additional queue options (see `),Aa(114,`a`,20)(115,`code`),bT(116,`channel.assertQueue()`),cf(),bT(117,` in the amqplib documentation`),cf(),bT(118,`)`),cf()(),Aa(119,`tr`)(120,`td`)(121,`code`),bT(122,`socketOptions`),cf()(),Aa(123,`td`),bT(124,`Additional socket options (see `),Aa(125,`a`,21)(126,`code`),bT(127,`connect()`),cf(),bT(128,` in the amqplib documentation`),cf(),bT(129,`)`),cf()(),Aa(130,`tr`)(131,`td`)(132,`code`),bT(133,`headers`),cf()(),Aa(134,`td`),bT(135,`Headers to send with every message. Applies only to the producer (client) configuration`),cf()(),Aa(136,`tr`)(137,`td`)(138,`code`),bT(139,`replyQueue`),cf()(),Aa(140,`td`),bT(141,`Reply queue for the producer. Defaults to `),Aa(142,`code`),bT(143,`amq.rabbitmq.reply-to`),cf()()(),Aa(144,`tr`)(145,`td`)(146,`code`),bT(147,`persistent`),cf()(),Aa(148,`td`),bT(149,`If truthy, messages survive broker restarts, provided they are in a queue that also survives restarts`),cf()(),Aa(150,`tr`)(151,`td`)(152,`code`),bT(153,`noAssert`),cf()(),Aa(154,`td`),bT(155,`If `),Aa(156,`code`),bT(157,`true`),cf(),bT(158,`, the queue is not asserted before consuming. Defaults to `),Aa(159,`code`),bT(160,`false`),cf()()(),Aa(161,`tr`)(162,`td`)(163,`code`),bT(164,`wildcards`),cf()(),Aa(165,`td`),bT(166,`Set to `),Aa(167,`code`),bT(168,`true`),cf(),bT(169,` only if you want to use a topic exchange to route messages to queues. Enabling it lets you use wildcards (`),Aa(170,`code`),bT(171,`*`),cf(),bT(172,`, `),Aa(173,`code`),bT(174,`#`),cf(),bT(175,`) in message and event patterns`),cf()(),Aa(176,`tr`)(177,`td`)(178,`code`),bT(179,`exchange`),cf()(),Aa(180,`td`),bT(181,`Name of the exchange. Defaults to the queue name when `),Aa(182,`code`),bT(183,`wildcards`),cf(),bT(184,` is set to `),Aa(185,`code`),bT(186,`true`),cf()()(),Aa(187,`tr`)(188,`td`)(189,`code`),bT(190,`exchangeType`),cf()(),Aa(191,`td`),bT(192,`Type of the exchange. Defaults to `),Aa(193,`code`),bT(194,`topic`),cf(),bT(195,`. Accepts the standard AMQP types `),Aa(196,`code`),bT(197,`direct`),cf(),bT(198,`, `),Aa(199,`code`),bT(200,`fanout`),cf(),bT(201,`, `),Aa(202,`code`),bT(203,`topic`),cf(),bT(204,`, and `),Aa(205,`code`),bT(206,`headers`),cf(),bT(207,`, or the name of a custom exchange type`),cf()(),Aa(208,`tr`)(209,`td`)(210,`code`),bT(211,`exchangeArguments`),cf()(),Aa(212,`td`),bT(213,`Additional arguments passed when asserting the exchange`),cf()(),Aa(214,`tr`)(215,`td`)(216,`code`),bT(217,`routingKey`),cf()(),Aa(218,`td`),bT(219,`Additional routing key for the topic exchange`),cf()(),Aa(220,`tr`)(221,`td`)(222,`code`),bT(223,`maxConnectionAttempts`),cf()(),Aa(224,`td`),bT(225,`Maximum number of connection attempts. Applies only to the consumer configuration. Defaults to `),Aa(226,`code`),bT(227,`-1`),cf(),bT(228,` (infinite)`),cf()()(),Aa(229,`h4`,22)(230,`span`),bT(231,`Client`),cf()(),Aa(232,`p`),bT(233,`As with other microservice transporters, you have `),Aa(234,`a`,23),bT(235,`several options`),cf(),bT(236,` for creating a RabbitMQ `),Aa(237,`code`),bT(238,`ClientProxy`),cf(),bT(239,` instance.`),cf(),Aa(240,`p`),bT(241,`One way to create an instance is to use the `),Aa(242,`code`),bT(243,`ClientsModule`),cf(),bT(244,`. Import it and call its `),Aa(245,`code`),bT(246,`register()`),cf(),bT(247,` method, passing an options object with the same properties shown above for the `),Aa(248,`code`),bT(249,`createMicroservice()`),cf(),bT(250,` method, plus a `),Aa(251,`code`),bT(252,`name`),cf(),bT(253,` property to use as the injection token. Read more about `),Aa(254,`code`),bT(255,`ClientsModule`),cf(),bT(256,` in the `),Aa(257,`a`,23),bT(258,`microservices overview`),cf(),bT(259,`.`),cf(),Aa(260,`app-copy-button`)(261,`pre`)(262,`code`,16),bT(263,`
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'cats_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ]
  ...
})
`),cf()()(),Aa(264,`p`),bT(265,`You can also create a client with `),Aa(266,`code`),bT(267,`ClientProxyFactory`),cf(),bT(268,` or `),Aa(269,`code`),bT(270,`@Client()`),cf(),bT(271,`, as described in the `),Aa(272,`a`,23),bT(273,`microservices overview`),cf(),bT(274,`.`),cf(),Aa(275,`h4`,24)(276,`span`),bT(277,`Context`),cf()(),Aa(278,`p`),bT(279,`In more complex scenarios, you may need additional information about the incoming request. When using the RabbitMQ transporter, you can access the `),Aa(280,`code`),bT(281,`RmqContext`),cf(),bT(282,` object.`),cf(),Aa(283,`app-copy-button`,14)(284,`span`,15),Wa(285,`app-tabs`,null,2),cf(),Aa(287,`pre`)(288,`code`,16),bT(289,`
@MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
  console.log(\`Pattern: \${context.getPattern()}\`);
}
`),cf()(),Aa(290,`pre`)(291,`code`,16),bT(292,`
@Bind(Payload(), Ctx())
@MessagePattern('notifications')
getNotifications(data, context) {
  console.log(\`Pattern: \${context.getPattern()}\`);
}
`),cf()()(),Aa(293,`blockquote`,17)(294,`strong`),bT(295,`Hint`),cf(),Aa(296,`code`),bT(297,`@Payload()`),cf(),bT(298,`, `),Aa(299,`code`),bT(300,`@Ctx()`),cf(),bT(301,` and `),Aa(302,`code`),bT(303,`RmqContext`),cf(),bT(304,` are imported from the `),Aa(305,`code`),bT(306,`@nestjs/microservices`),cf(),bT(307,` package.
`),cf(),Aa(308,`p`),bT(309,`To access the original RabbitMQ message (with its `),Aa(310,`code`),bT(311,`properties`),cf(),bT(312,`, `),Aa(313,`code`),bT(314,`fields`),cf(),bT(315,`, and `),Aa(316,`code`),bT(317,`content`),cf(),bT(318,`), use the `),Aa(319,`code`),bT(320,`getMessage()`),cf(),bT(321,` method of the `),Aa(322,`code`),bT(323,`RmqContext`),cf(),bT(324,` object:`),cf(),Aa(325,`app-copy-button`,14)(326,`span`,15),Wa(327,`app-tabs`,null,3),cf(),Aa(329,`pre`)(330,`code`,16),bT(331,`
@MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
  console.log(context.getMessage());
}
`),cf()(),Aa(332,`pre`)(333,`code`,16),bT(334,`
@Bind(Payload(), Ctx())
@MessagePattern('notifications')
getNotifications(data, context) {
  console.log(context.getMessage());
}
`),cf()()(),Aa(335,`p`),bT(336,`To retrieve a reference to the RabbitMQ `),Aa(337,`a`,25),bT(338,`channel`),cf(),bT(339,`, use the `),Aa(340,`code`),bT(341,`getChannelRef()`),cf(),bT(342,` method of the `),Aa(343,`code`),bT(344,`RmqContext`),cf(),bT(345,` object:`),cf(),Aa(346,`app-copy-button`,14)(347,`span`,15),Wa(348,`app-tabs`,null,4),cf(),Aa(350,`pre`)(351,`code`,16),bT(352,`
@MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
  console.log(context.getChannelRef());
}
`),cf()(),Aa(353,`pre`)(354,`code`,16),bT(355,`
@Bind(Payload(), Ctx())
@MessagePattern('notifications')
getNotifications(data, context) {
  console.log(context.getChannelRef());
}
`),cf()()(),Aa(356,`h4`,26)(357,`span`),bT(358,`Message acknowledgement`),cf()(),Aa(359,`p`),bT(360,`To make sure a message is never lost, RabbitMQ supports `),Aa(361,`a`,27),bT(362,`message acknowledgements`),cf(),bT(363,`. The consumer sends an acknowledgement back to tell RabbitMQ that a particular message has been received and processed, and that RabbitMQ is free to delete it. If a consumer dies (its channel is closed, its connection is closed, or the TCP connection is lost) without sending an ack, RabbitMQ assumes the message wasn't fully processed and re-queues it.`),cf(),Aa(364,`p`),bT(365,`By default, the RabbitMQ transporter doesn't expect acknowledgements (`),Aa(366,`code`),bT(367,`noAck`),cf(),bT(368,` is `),Aa(369,`code`),bT(370,`true`),cf(),bT(371,`). To enable manual acknowledgment mode, set the `),Aa(372,`code`),bT(373,`noAck`),cf(),bT(374,` property to `),Aa(375,`code`),bT(376,`false`),cf(),bT(377,`:`),cf(),Aa(378,`app-copy-button`)(379,`pre`)(380,`code`,16),bT(381,`
options: {
  urls: ['amqp://localhost:5672'],
  queue: 'cats_queue',
  noAck: false,
  queueOptions: {
    durable: false
  },
},
`),cf()()(),Aa(382,`p`),bT(383,`When manual consumer acknowledgements are turned on, you must send an acknowledgement from the worker to signal that it has finished the task:`),cf(),Aa(384,`app-copy-button`,14)(385,`span`,15),Wa(386,`app-tabs`,null,5),cf(),Aa(388,`pre`)(389,`code`,16),bT(390,`
@MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
  const channel = context.getChannelRef();
  const originalMsg = context.getMessage();

  channel.ack(originalMsg);
}
`),cf()(),Aa(391,`pre`)(392,`code`,16),bT(393,`
@Bind(Payload(), Ctx())
@MessagePattern('notifications')
getNotifications(data, context) {
  const channel = context.getChannelRef();
  const originalMsg = context.getMessage();

  channel.ack(originalMsg);
}
`),cf()()(),Aa(394,`h4`,28)(395,`span`),bT(396,`Record builders`),cf()(),Aa(397,`p`),bT(398,`To configure message options, use the `),Aa(399,`code`),bT(400,`RmqRecordBuilder`),cf(),bT(401,` class (this works for event-based flows as well). For example, to set the `),Aa(402,`code`),bT(403,`headers`),cf(),bT(404,` and `),Aa(405,`code`),bT(406,`priority`),cf(),bT(407,` properties, use the `),Aa(408,`code`),bT(409,`setOptions()`),cf(),bT(410,` method:`),cf(),Aa(411,`app-copy-button`)(412,`pre`)(413,`code`,16),bT(414,`
const message = ':cat:';
const record = new RmqRecordBuilder(message)
  .setOptions({
    headers: {
      ['x-version']: '1.0.0',
    },
    priority: 3,
  })
  .build();

this.client.send('replace-emoji', record).subscribe(...);
`),cf()()(),Aa(415,`blockquote`,17)(416,`strong`),bT(417,`Hint`),cf(),bT(418,` The `),Aa(419,`code`),bT(420,`RmqRecordBuilder`),cf(),bT(421,` class is exported from the `),Aa(422,`code`),bT(423,`@nestjs/microservices`),cf(),bT(424,` package.
`),cf(),Aa(425,`p`),bT(426,`You can read these values on the server side as well, by accessing the `),Aa(427,`code`),bT(428,`RmqContext`),cf(),bT(429,`:`),cf(),Aa(430,`app-copy-button`,14)(431,`span`,15),Wa(432,`app-tabs`,null,6),cf(),Aa(434,`pre`)(435,`code`,16),bT(436,`
@MessagePattern('replace-emoji')
replaceEmoji(@Payload() data: string, @Ctx() context: RmqContext): string {
  const { properties: { headers } } = context.getMessage();
  return headers['x-version'] === '1.0.0' ? '\u{1F431}' : '\u{1F408}';
}
`),cf()(),Aa(437,`pre`)(438,`code`,16),bT(439,`
@Bind(Payload(), Ctx())
@MessagePattern('replace-emoji')
replaceEmoji(data, context) {
  const { properties: { headers } } = context.getMessage();
  return headers['x-version'] === '1.0.0' ? '\u{1F431}' : '\u{1F408}';
}
`),cf()()(),Aa(440,`p`),bT(441,`Starting with NestJS v12.1.3, a message handler can also return a record. Nest sends the record data as the reply and applies the record options (for example, the `),Aa(442,`code`),bT(443,`headers`),cf(),bT(444,` and `),Aa(445,`code`),bT(446,`priority`),cf(),bT(447,` properties) to the reply message:`),cf(),Aa(448,`app-copy-button`)(449,`pre`)(450,`code`,16),bT(451,`
@MessagePattern('replace-emoji')
replaceEmoji() {
  return new RmqRecordBuilder(':cat:')
    .setOptions({
      headers: {
        ['x-version']: '1.0.0',
      },
      priority: 3,
    })
    .build();
}
`),cf()()(),Aa(452,`p`),bT(453,`The reply always carries the correlation id of the request, so the client can match it to the request.`),cf(),Aa(454,`h4`,29)(455,`span`),bT(456,`Instance status updates`),cf()(),Aa(457,`p`),bT(458,`To get real-time updates on the connection and the state of the underlying driver instance, subscribe to the `),Aa(459,`code`),bT(460,`status`),cf(),bT(461,` stream. This stream provides status updates specific to the chosen driver. For the RMQ driver, the `),Aa(462,`code`),bT(463,`status`),cf(),bT(464,` stream emits `),Aa(465,`code`),bT(466,`connected`),cf(),bT(467,`, `),Aa(468,`code`),bT(469,`disconnected`),cf(),bT(470,`, `),Aa(471,`code`),bT(472,`blocked`),cf(),bT(473,`, and `),Aa(474,`code`),bT(475,`unblocked`),cf(),bT(476,` events.`),cf(),Aa(477,`app-copy-button`)(478,`pre`)(479,`code`,16),bT(480,`
this.client.status.subscribe((status: RmqStatus) => {
  console.log(status);
});
`),cf()()(),Aa(481,`blockquote`,17)(482,`strong`),bT(483,`Hint`),cf(),bT(484,` The `),Aa(485,`code`),bT(486,`RmqStatus`),cf(),bT(487,` type is imported from the `),Aa(488,`code`),bT(489,`@nestjs/microservices`),cf(),bT(490,` package.
`),cf(),Aa(491,`p`),bT(492,`Similarly, you can subscribe to the server's `),Aa(493,`code`),bT(494,`status`),cf(),bT(495,` stream to receive notifications about the server's status:`),cf(),Aa(496,`app-copy-button`)(497,`pre`)(498,`code`,16),bT(499,`
const server = app.connectMicroservice<MicroserviceOptions>(...);
server.status.subscribe((status: RmqStatus) => {
  console.log(status);
});
`),cf()()(),Aa(500,`h4`,30)(501,`span`),bT(502,`Listening to RabbitMQ events`),cf()(),Aa(503,`p`),bT(504,`In some cases, you might want to listen to internal events emitted by the microservice. For example, you could listen for the `),Aa(505,`code`),bT(506,`error`),cf(),bT(507,` event to trigger additional operations when an error occurs. To do this, use the `),Aa(508,`code`),bT(509,`on()`),cf(),bT(510,` method:`),cf(),Aa(511,`app-copy-button`)(512,`pre`)(513,`code`,16),bT(514,`
this.client.on('error', (err) => {
  console.error(err);
});
`),cf()()(),Aa(515,`p`),bT(516,`Similarly, you can listen to the server's internal events:`),cf(),Aa(517,`app-copy-button`)(518,`pre`)(519,`code`,16),bT(520,`
server.on<RmqEvents>('error', (err) => {
  console.error(err);
});
`),cf()()(),Aa(521,`blockquote`,17)(522,`strong`),bT(523,`Hint`),cf(),bT(524,` The `),Aa(525,`code`),bT(526,`RmqEvents`),cf(),bT(527,` type is imported from the `),Aa(528,`code`),bT(529,`@nestjs/microservices`),cf(),bT(530,` package.
`),cf(),Aa(531,`p`),bT(532,`Starting with NestJS v12.1.2, listeners registered with the client's `),Aa(533,`code`),bT(534,`on()`),cf(),bT(535,` method stay registered until you call `),Aa(536,`code`),bT(537,`close()`),cf(),bT(538,`, so they are also attached to the new connection the client creates on the next `),Aa(539,`code`),bT(540,`send()`),cf(),bT(541,` or `),Aa(542,`code`),bT(543,`emit()`),cf(),bT(544,` call after a connection attempt failed. Registrations are not deduplicated, so register each listener once rather than again after a failed attempt.`),cf(),Aa(545,`h4`,31)(546,`span`),bT(547,`Underlying driver access`),cf()(),Aa(548,`p`),bT(549,`For more advanced use cases, you may need to access the underlying driver instance, for example, to close the connection manually or to use driver-specific methods. However, in most cases you `),Aa(550,`strong`),bT(551,`shouldn't need`),cf(),bT(552,` to access the driver directly.`),cf(),Aa(553,`p`),bT(554,`To do so, use the `),Aa(555,`code`),bT(556,`unwrap()`),cf(),bT(557,` method, which returns the underlying driver instance. Use the generic type parameter to specify the type of driver instance you expect.`),cf(),Aa(558,`app-copy-button`)(559,`pre`)(560,`code`,16),bT(561,`
const managerRef =
  this.client.unwrap<import('amqp-connection-manager').AmqpConnectionManager>();
`),cf()()(),Aa(562,`p`),bT(563,`Similarly, you can access the server's underlying driver instance:`),cf(),Aa(564,`app-copy-button`)(565,`pre`)(566,`code`,16),bT(567,`
const managerRef =
  server.unwrap<import('amqp-connection-manager').AmqpConnectionManager>();
`),cf()()(),Aa(568,`h4`,32)(569,`span`),bT(570,`Wildcards`),cf()(),Aa(571,`p`),bT(572,`RabbitMQ supports the use of wildcards in routing keys to allow for flexible message routing. The `),Aa(573,`code`),bT(574,`#`),cf(),bT(575,` wildcard matches zero or more words, while the `),Aa(576,`code`),bT(577,`*`),cf(),bT(578,` wildcard matches exactly one word.`),cf(),Aa(579,`p`),bT(580,`For example, the routing key `),Aa(581,`code`),bT(582,`cats.#`),cf(),bT(583,` matches `),Aa(584,`code`),bT(585,`cats`),cf(),bT(586,`, `),Aa(587,`code`),bT(588,`cats.meow`),cf(),bT(589,`, and `),Aa(590,`code`),bT(591,`cats.meow.purr`),cf(),bT(592,`. The routing key `),Aa(593,`code`),bT(594,`cats.*`),cf(),bT(595,` matches `),Aa(596,`code`),bT(597,`cats.meow`),cf(),bT(598,` but not `),Aa(599,`code`),bT(600,`cats.meow.purr`),cf(),bT(601,`.`),cf(),Aa(602,`p`),bT(603,`To enable wildcard support in your RabbitMQ microservice, set the `),Aa(604,`code`),bT(605,`wildcards`),cf(),bT(606,` configuration option to `),Aa(607,`code`),bT(608,`true`),cf(),bT(609,` in the options object:`),cf(),Aa(610,`app-copy-button`)(611,`pre`)(612,`code`,16),bT(613,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  AppModule,
  {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cats_queue',
      wildcards: true,
    },
  },
);
`),cf()()(),Aa(614,`p`),bT(615,`With this configuration, you can use wildcards in your routing keys when subscribing to events and messages. For example, to listen for messages with the routing key `),Aa(616,`code`),bT(617,`cats.#`),cf(),bT(618,`:`),cf(),Aa(619,`app-copy-button`)(620,`pre`)(621,`code`,16),bT(622,`
@MessagePattern('cats.#')
getCats(@Payload() data: { message: string }, @Ctx() context: RmqContext) {
  console.log(\`Received message with routing key: \${context.getPattern()}\`);

  return {
    message: 'Hello from the cats service!',
  }
}
`),cf()()(),Aa(623,`p`),bT(624,`To send a message with a specific routing key, use the `),Aa(625,`code`),bT(626,`send()`),cf(),bT(627,` method of the `),Aa(628,`code`),bT(629,`ClientProxy`),cf(),bT(630,` instance:`),cf(),Aa(631,`app-copy-button`)(632,`pre`)(633,`code`,16),bT(634,`
this.client.send('cats.meow', { message: 'Meow!' }).subscribe((response) => {
  console.log(response);
});
`),cf()()()(),Aa(635,`a`,33),Wa(636,`i`,34),Aa(637,`span`),bT(638,`Edit on GitHub`),cf()()()),c&2){let x=tT(30),u=tT(286),y=tT(328),k=tT(349),T=tT(387),M=tT(433);zC(27),hf(` `,jT(28,25,`main`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(253),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive),zC(39),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(18),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive),zC(35),zy(`hide`,T.isJsActive),zC(3),zy(`hide`,!T.isJsActive),zC(43),zy(`hide`,M.isJsActive),zC(3),zy(`hide`,!M.isJsActive)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return s})();var V=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-kafka`]],features:[xy],decls:942,vars:84,consts:[[`contentReference`,``],[`app00e7c478036da1b28df0c5c2c36fa9907433e80a`,``],[`appe7b462484246b43c204a0767cb4524d0e1e7480a`,``],[`app05299e65f8829aaaa1b7fd322aa121844b575591`,``],[`app29366930ef1c4b67f729ec7d64a059701b4c91f9`,``],[`app7583f648ad8f3d4bde2dda1d8875ce0bcef8faf7`,``],[`appae6087e5315f62cd73b20f342152d50dd053431b`,``],[`appde634d48e91546fa8dc55b8e74e6a58422418df5`,``],[`app98a823d88a48ca390aa1519a3cf8d70af3a06929`,``],[`app8cbea71156680d88ef08cf3e9da39d15235e4c2a`,``],[`app0839e84008ef3865857dfb164df0226f5ef56390`,``],[`app79c108335f920f9c638f342d185ae0627c015539`,``],[`app7084b3f91612ddfca1f5fd0cbec75b608ee9e038`,``],[`app4f5b6a21991e968c03ed8fe4ca1382a759365ee4`,``],[`app1fe1a367a6c2aa8633565d7c1721ed0d5a14fb2b`,``],[`appdcc154f13f243981eed40afcfb19786884c7883a`,``],[`appe2786fbe7b9a6e29b19c32e6a0e9849fece8d18b`,``],[`app626c1516da0daaa8885b6a51509883a1e0882b25`,``],[`app64f3e626a61a546ac73809ba663d90711815d85f`,``],[1,`content`],[1,`content-inner`],[`id`,`kafka`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://kafka.apache.org/`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`overview`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`options`],[`href`,`https://kafka.js.org/docs/configuration`,`rel`,`nofollow`,`target`,`_blank`],[`href`,`https://kafka.js.org/docs/consuming#a-name-options-a-options`,`rel`,`nofollow`,`target`,`_blank`],[`href`,`https://kafka.js.org/docs/consuming`,`rel`,`nofollow`,`target`,`_blank`],[`href`,`https://kafka.js.org/docs/consuming#frombeginning`,`rel`,`nofollow`,`target`,`_blank`],[`href`,`https://kafka.js.org/docs/producing#options`,`rel`,`nofollow`,`target`,`_blank`],[`appAnchor`,``,`id`,`client`],[`href`,`/microservices/basics#client-producer-class`],[`appAnchor`,``,`id`,`message-pattern`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.enterpriseintegrationpatterns.com/patterns/messaging/ReturnAddress.html`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://www.enterpriseintegrationpatterns.com/patterns/messaging/CorrelationIdentifier.html`],[`appAnchor`,``,`id`,`regular-expression-patterns`],[`appAnchor`,``,`id`,`message-response-subscription`],[1,`warning`],[`href`,`/microservices/basics#request-response`],[`href`,`/microservices/basics#event-based`],[`appAnchor`,``,`id`,`incoming`],[`appAnchor`,``,`id`,`outgoing`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://docs.confluent.io/current/ksql/docs/developer-guide/partition-data.html#co-partitioning-requirements`],[`appAnchor`,``,`id`,`event-based`],[`href`,`/microservices/basics#publishing-events`],[`appAnchor`,``,`id`,`context`],[`appAnchor`,``,`id`,`naming-conventions`],[`appAnchor`,``,`id`,`retriable-exceptions`],[`appAnchor`,``,`id`,`custom-exception-handling`],[`appAnchor`,``,`id`,`commit-offsets`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://kafka.js.org/docs/consuming#autocommit`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://kafka.js.org/docs/consuming#manual-committing`],[`appAnchor`,``,`id`,`instance-status-updates`],[`appAnchor`,``,`id`,`underlying-producer-and-consumer`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/kafka.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,19,0)(2,`div`,20)(3,`h3`,21),bT(4,`Kafka`),cf(),Aa(5,`p`)(6,`a`,22),bT(7,`Kafka`),cf(),bT(8,` is an open source, distributed streaming platform with three key capabilities:`),cf(),Aa(9,`ul`)(10,`li`),bT(11,`Publish and subscribe to streams of records, similar to a message queue or enterprise messaging system.`),cf(),Aa(12,`li`),bT(13,`Store streams of records in a fault-tolerant durable way.`),cf(),Aa(14,`li`),bT(15,`Process streams of records as they occur.`),cf()(),Aa(16,`p`),bT(17,`The Kafka project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds. It integrates with Apache Storm and Spark for real-time streaming data analysis.`),cf(),Aa(18,`h4`,23)(19,`span`),bT(20,`Installation`),cf()(),Aa(21,`p`),bT(22,`To start building Kafka-based microservices, first install the required package:`),cf(),Aa(23,`pre`)(24,`code`,24),bT(25,`
$ npm i --save kafkajs
`),cf()(),Aa(26,`h4`,25)(27,`span`),bT(28,`Overview`),cf()(),Aa(29,`p`),bT(30,`As with other Nest microservice transport layer implementations, you select the Kafka transporter using the `),Aa(31,`code`),bT(32,`transport`),cf(),bT(33,` property of the options object passed to the `),Aa(34,`code`),bT(35,`createMicroservice()`),cf(),bT(36,` method, along with an optional `),Aa(37,`code`),bT(38,`options`),cf(),bT(39,` property, as shown below:`),cf(),Aa(40,`app-copy-button`,26)(41,`span`,27),bT(42),LT(43,`extension`),Wa(44,`app-tabs`,null,1),cf(),Aa(46,`pre`)(47,`code`,28),bT(48,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    }
  }
});
`),cf()(),Aa(49,`pre`)(50,`code`,28),bT(51,`
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    }
  }
});
`),cf()()(),Aa(52,`blockquote`,29)(53,`strong`),bT(54,`Hint`),cf(),bT(55,` The `),Aa(56,`code`),bT(57,`Transport`),cf(),bT(58,` enum is imported from the `),Aa(59,`code`),bT(60,`@nestjs/microservices`),cf(),bT(61,` package.
`),cf(),Aa(62,`h4`,30)(63,`span`),bT(64,`Options`),cf()(),Aa(65,`p`),bT(66,`The `),Aa(67,`code`),bT(68,`options`),cf(),bT(69,` property is specific to the chosen transporter. The `),Aa(70,`strong`),bT(71,`Kafka`),cf(),bT(72,` transporter exposes the following properties.`),cf(),Aa(73,`table`)(74,`tr`)(75,`td`)(76,`code`),bT(77,`client`),cf()(),Aa(78,`td`),bT(79,`Client configuration options (see the `),Aa(80,`a`,31),bT(81,`KafkaJS client configuration`),cf(),bT(82,`)`),cf()(),Aa(83,`tr`)(84,`td`)(85,`code`),bT(86,`consumer`),cf()(),Aa(87,`td`),bT(88,`Consumer configuration options (see the `),Aa(89,`a`,32),bT(90,`KafkaJS consumer options`),cf(),bT(91,`)`),cf()(),Aa(92,`tr`)(93,`td`)(94,`code`),bT(95,`run`),cf()(),Aa(96,`td`),bT(97,`Options passed to the consumer's `),Aa(98,`code`),bT(99,`run()`),cf(),bT(100,` method (see `),Aa(101,`a`,33),bT(102,`KafkaJS consuming messages`),cf(),bT(103,`)`),cf()(),Aa(104,`tr`)(105,`td`)(106,`code`),bT(107,`subscribe`),cf()(),Aa(108,`td`),bT(109,`Options passed to the consumer's `),Aa(110,`code`),bT(111,`subscribe()`),cf(),bT(112,` method, except `),Aa(113,`code`),bT(114,`topics`),cf(),bT(115,`, which Nest derives from the registered patterns (see `),Aa(116,`a`,34),bT(117,`KafkaJS fromBeginning`),cf(),bT(118,`)`),cf()(),Aa(119,`tr`)(120,`td`)(121,`code`),bT(122,`producer`),cf()(),Aa(123,`td`),bT(124,`Producer configuration options (see the `),Aa(125,`a`,35),bT(126,`KafkaJS producer options`),cf(),bT(127,`)`),cf()(),Aa(128,`tr`)(129,`td`)(130,`code`),bT(131,`send`),cf()(),Aa(132,`td`),bT(133,`Options passed to the producer's `),Aa(134,`code`),bT(135,`send()`),cf(),bT(136,` method, except `),Aa(137,`code`),bT(138,`topic`),cf(),bT(139,` and `),Aa(140,`code`),bT(141,`messages`),cf(),bT(142,` (see the `),Aa(143,`a`,35),bT(144,`KafkaJS producing messages`),cf(),bT(145,`)`),cf()(),Aa(146,`tr`)(147,`td`)(148,`code`),bT(149,`parser`),cf()(),Aa(150,`td`),bT(151,`Options of the parser that decodes incoming messages: `),Aa(152,`code`),bT(153,`keepBinary`),cf(),bT(154,` passes message values to handlers as buffers instead of decoding them (`),Aa(155,`code`),bT(156,`boolean`),cf(),bT(157,`), and `),Aa(158,`code`),bT(159,`maxMessageSize`),cf(),bT(160,` is the size in bytes, after decompression, above which a message is skipped instead of decoded. Defaults to `),Aa(161,`code`),bT(162,`16777216`),cf(),bT(163,` (16 MiB) (`),Aa(164,`code`),bT(165,`number`),cf(),bT(166,`)`),cf()(),Aa(167,`tr`)(168,`td`)(169,`code`),bT(170,`producerOnlyMode`),cf()(),Aa(171,`td`),bT(172,`Client only. Skips consumer group registration so the client acts only as a producer (`),Aa(173,`code`),bT(174,`boolean`),cf(),bT(175,`)`),cf()(),Aa(176,`tr`)(177,`td`)(178,`code`),bT(179,`postfixId`),cf()(),Aa(180,`td`),bT(181,`Suffix appended to the `),Aa(182,`code`),bT(183,`clientId`),cf(),bT(184,` and `),Aa(185,`code`),bT(186,`groupId`),cf(),bT(187,` values. Defaults to `),Aa(188,`code`),bT(189,`'-server'`),cf(),bT(190,` on the server and `),Aa(191,`code`),bT(192,`'-client'`),cf(),bT(193,` on the client (`),Aa(194,`code`),bT(195,`string`),cf(),bT(196,`)`),cf()()(),Aa(197,`h4`,36)(198,`span`),bT(199,`Client`),cf()(),Aa(200,`p`),bT(201,`Kafka differs slightly from other microservice transporters: instead of the `),Aa(202,`code`),bT(203,`ClientProxy`),cf(),bT(204,` type, you use `),Aa(205,`code`),bT(206,`ClientKafkaProxy`),cf(),bT(207,`.`),cf(),Aa(208,`p`),bT(209,`As with other microservice transporters, you have `),Aa(210,`a`,37),bT(211,`several options`),cf(),bT(212,` for creating a `),Aa(213,`code`),bT(214,`ClientKafkaProxy`),cf(),bT(215,` instance.`),cf(),Aa(216,`p`),bT(217,`One option is the `),Aa(218,`code`),bT(219,`ClientsModule`),cf(),bT(220,`. Import it and use its `),Aa(221,`code`),bT(222,`register()`),cf(),bT(223,` method to pass an options object with the same properties shown above for the `),Aa(224,`code`),bT(225,`createMicroservice()`),cf(),bT(226,` method, plus a `),Aa(227,`code`),bT(228,`name`),cf(),bT(229,` property used as the injection token. See the `),Aa(230,`a`,37),bT(231,`client section of the microservices overview`),cf(),bT(232,` to learn more about `),Aa(233,`code`),bT(234,`ClientsModule`),cf(),bT(235,`.`),cf(),Aa(236,`app-copy-button`)(237,`pre`)(238,`code`,28),bT(239,`
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'hero-consumer'
          }
        }
      },
    ]),
  ]
  ...
})
`),cf()()(),Aa(240,`p`),bT(241,`You can also create a client with `),Aa(242,`code`),bT(243,`ClientProxyFactory`),cf(),bT(244,` or the `),Aa(245,`code`),bT(246,`@Client()`),cf(),bT(247,` decorator, both described in the `),Aa(248,`a`,37),bT(249,`microservices overview`),cf(),bT(250,`.`),cf(),Aa(251,`p`),bT(252,`Use the `),Aa(253,`code`),bT(254,`@Client()`),cf(),bT(255,` decorator as follows:`),cf(),Aa(256,`app-copy-button`)(257,`pre`)(258,`code`,28),bT(259,`
@Client({
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'hero',
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'hero-consumer'
    }
  }
})
client: ClientKafkaProxy;
`),cf()()(),Aa(260,`h4`,38)(261,`span`),bT(262,`Message pattern`),cf()(),Aa(263,`p`),bT(264,`The Kafka microservice message pattern uses two topics for the request and reply channels. The `),Aa(265,`code`),bT(266,`ClientKafkaProxy.send()`),cf(),bT(267,` method sends messages with a `),Aa(268,`a`,39),bT(269,`return address`),cf(),bT(270,` by associating a `),Aa(271,`a`,40),bT(272,`correlation id`),cf(),bT(273,`, reply topic, and reply partition with the request message. This requires the `),Aa(274,`code`),bT(275,`ClientKafkaProxy`),cf(),bT(276,` instance to be subscribed to the reply topic and assigned to at least one partition before sending a message.`),cf(),Aa(277,`p`),bT(278,`As a result, you need at least one reply topic partition for every running Nest application. For example, if you run 4 Nest applications but the reply topic has only 3 partitions, 1 of the Nest applications will fail when it tries to send a message.`),cf(),Aa(279,`p`),bT(280,`When new `),Aa(281,`code`),bT(282,`ClientKafkaProxy`),cf(),bT(283,` instances launch, they join the consumer group and subscribe to their respective topics. This triggers a rebalance of the topic partitions assigned to the consumers in the group.`),cf(),Aa(284,`p`),bT(285,`Normally, topic partitions are assigned using the round-robin assigner, which assigns topic partitions to a collection of consumers sorted by consumer names that are randomly set on application launch. However, when a new consumer joins the consumer group, it can be positioned anywhere within that collection. Pre-existing consumers positioned after the new consumer can then be assigned different partitions, and those consumers lose the response messages of requests sent before the rebalance.`),cf(),Aa(286,`p`),bT(287,`To prevent `),Aa(288,`code`),bT(289,`ClientKafkaProxy`),cf(),bT(290,` consumers from losing response messages, Nest uses a built-in custom partition assigner. During a rebalance, it lets each existing consumer keep the reply partition it was previously assigned, and distributes the remaining partitions among the other consumers.`),cf(),Aa(291,`h4`,41)(292,`span`),bT(293,`Regular expression patterns`),cf()(),Aa(294,`p`),bT(295,`KafkaJS supports subscribing to topics by regular expression. Starting with NestJS v12, you can pass a `),Aa(296,`code`),bT(297,`RegExp`),cf(),bT(298,` directly to `),Aa(299,`code`),bT(300,`@MessagePattern()`),cf(),bT(301,` or `),Aa(302,`code`),bT(303,`@EventPattern()`),cf(),bT(304,`. Nest preserves the pattern, forwards it to the KafkaJS `),Aa(305,`code`),bT(306,`subscribe()`),cf(),bT(307,` call, and falls back to regular expression matching when resolving a handler for an incoming topic.`),cf(),Aa(308,`app-copy-button`,26)(309,`span`,27),Wa(310,`app-tabs`,null,2),cf(),Aa(312,`pre`)(313,`code`,28),bT(314,`
@EventPattern(/^hero\\..+$/)
handleHeroEvents(@Payload() data: any, @Ctx() context: KafkaContext) {
  console.log(\`Topic: \${context.getTopic()}\`);
}
`),cf()(),Aa(315,`pre`)(316,`code`,28),bT(317,`
@Bind(Payload(), Ctx())
@EventPattern(/^hero\\..+$/)
handleHeroEvents(data, context) {
  console.log(\`Topic: \${context.getTopic()}\`);
}
`),cf()()(),Aa(318,`p`),bT(319,`This subscribes the handler to every topic matching the expression (`),Aa(320,`code`),bT(321,`hero.kill.dragon`),cf(),bT(322,`, `),Aa(323,`code`),bT(324,`hero.rescue.villager`),cf(),bT(325,`, and so on) without registering each one explicitly. Use `),Aa(326,`code`),bT(327,`context.getTopic()`),cf(),bT(328,` to find out which topic delivered the message.`),cf(),Aa(329,`blockquote`,29)(330,`strong`),bT(331,`Hint`),cf(),bT(332,` Regular expression patterns are a Kafka-specific capability; other transporters continue to match patterns by exact value. Nest resets `),Aa(333,`code`),bT(334,`lastIndex`),cf(),bT(335,` before matching, so global (`),Aa(336,`code`),bT(337,`/g`),cf(),bT(338,`) and sticky (`),Aa(339,`code`),bT(340,`/y`),cf(),bT(341,`) expressions do not produce stateful misses.
`),cf(),Aa(342,`h4`,42)(343,`span`),bT(344,`Message response subscription`),cf()(),Aa(345,`blockquote`,43)(346,`strong`),bT(347,`Note`),cf(),bT(348,` This section is relevant only if you use the `),Aa(349,`a`,44),bT(350,`request-response`),cf(),bT(351,` message style (the `),Aa(352,`code`),bT(353,`@MessagePattern()`),cf(),bT(354,` decorator and the `),Aa(355,`code`),bT(356,`ClientKafkaProxy.send()`),cf(),bT(357,` method). Subscribing to the response topic is not necessary for `),Aa(358,`a`,45),bT(359,`event-based`),cf(),bT(360,` communication (the `),Aa(361,`code`),bT(362,`@EventPattern()`),cf(),bT(363,` decorator and the `),Aa(364,`code`),bT(365,`ClientKafkaProxy.emit()`),cf(),bT(366,` method).
`),cf(),Aa(367,`p`)(368,`code`),bT(369,`ClientKafkaProxy`),cf(),bT(370,` provides the `),Aa(371,`code`),bT(372,`subscribeToResponseOf()`),cf(),bT(373,` method, which takes a request's topic name as an argument and adds the derived reply topic name to a collection of reply topics. This method is required when implementing the message pattern.`),cf(),Aa(374,`app-copy-button`,26)(375,`span`,27),bT(376),LT(377,`extension`),Wa(378,`app-tabs`,null,3),cf(),Aa(380,`pre`)(381,`code`,28),bT(382,`
onModuleInit() {
  this.client.subscribeToResponseOf('hero.kill.dragon');
}
`),cf()()(),Aa(383,`p`),bT(384,`If the `),Aa(385,`code`),bT(386,`ClientKafkaProxy`),cf(),bT(387,` instance is created asynchronously, call the `),Aa(388,`code`),bT(389,`subscribeToResponseOf()`),cf(),bT(390,` method before calling the `),Aa(391,`code`),bT(392,`connect()`),cf(),bT(393,` method.`),cf(),Aa(394,`app-copy-button`,26)(395,`span`,27),bT(396),LT(397,`extension`),Wa(398,`app-tabs`,null,4),cf(),Aa(400,`pre`)(401,`code`,28),bT(402,`
async onModuleInit() {
  this.client.subscribeToResponseOf('hero.kill.dragon');
  await this.client.connect();
}
`),cf()()(),Aa(403,`h4`,46)(404,`span`),bT(405,`Incoming`),cf()(),Aa(406,`p`),bT(407,`Nest receives incoming Kafka messages as objects with `),Aa(408,`code`),bT(409,`key`),cf(),bT(410,`, `),Aa(411,`code`),bT(412,`value`),cf(),bT(413,`, and `),Aa(414,`code`),bT(415,`headers`),cf(),bT(416,` properties whose values are of type `),Aa(417,`code`),bT(418,`Buffer`),cf(),bT(419,`. Nest parses these values by converting the buffers into strings. If a string is "object-like" (i.e., it starts with a curly brace or a square bracket), Nest attempts to parse it as JSON, except for the `),Aa(420,`code`),bT(421,`kafka_correlationId`),cf(),bT(422,`, `),Aa(423,`code`),bT(424,`kafka_replyTopic`),cf(),bT(425,` and `),Aa(426,`code`),bT(427,`kafka_replyPartition`),cf(),bT(428,` headers it routes replies with, which are always kept as strings. The `),Aa(429,`code`),bT(430,`value`),cf(),bT(431,` is then passed to the associated handler.`),cf(),Aa(432,`p`),bT(433,`Nest does not decode a message larger than 16 MiB after decompression, counting its key, its headers and, unless `),Aa(434,`code`),bT(435,`parser.keepBinary`),cf(),bT(436,` is set, its value. It logs and skips the message, so that its offset is committed, and a `),Aa(437,`code`),bT(438,`ClientKafkaProxy`),cf(),bT(439,` fails the request that such a reply answers. To change the limit, set the `),Aa(440,`code`),bT(441,`parser.maxMessageSize`),cf(),bT(442,` option.`),cf(),Aa(443,`h4`,47)(444,`span`),bT(445,`Outgoing`),cf()(),Aa(446,`p`),bT(447,`Nest serializes outgoing Kafka messages before publishing events or sending messages. Serialization applies to the arguments passed to the `),Aa(448,`code`),bT(449,`ClientKafkaProxy`),cf(),Aa(450,`code`),bT(451,`emit()`),cf(),bT(452,` and `),Aa(453,`code`),bT(454,`send()`),cf(),bT(455,` methods, and to the values returned from a `),Aa(456,`code`),bT(457,`@MessagePattern()`),cf(),bT(458,` method. It "stringifies" values that are not strings or buffers by using `),Aa(459,`code`),bT(460,`JSON.stringify()`),cf(),bT(461,` or the `),Aa(462,`code`),bT(463,`toString()`),cf(),bT(464,` prototype method.`),cf(),Aa(465,`app-copy-button`,26)(466,`span`,27),bT(467),LT(468,`extension`),Wa(469,`app-tabs`,null,5),cf(),Aa(471,`pre`)(472,`code`,28),bT(473,`
@Controller()
export class HeroesController {
  @MessagePattern('hero.kill.dragon')
  killDragon(@Payload() message: KillDragonMessage): any {
    const dragonId = message.dragonId;
    const items = [
      { id: 1, name: 'Mythical Sword' },
      { id: 2, name: 'Key to Dungeon' },
    ];
    return items;
  }
}
`),cf()()(),Aa(474,`blockquote`,29)(475,`strong`),bT(476,`Hint`),cf(),Aa(477,`code`),bT(478,`@Payload()`),cf(),bT(479,` is imported from the `),Aa(480,`code`),bT(481,`@nestjs/microservices`),cf(),bT(482,` package.
`),cf(),Aa(483,`p`),bT(484,`You can also key outgoing messages by passing an object with the `),Aa(485,`code`),bT(486,`key`),cf(),bT(487,` and `),Aa(488,`code`),bT(489,`value`),cf(),bT(490,` properties. Keying messages is important for meeting the `),Aa(491,`a`,48),bT(492,`co-partitioning requirement`),cf(),bT(493,`.`),cf(),Aa(494,`app-copy-button`,26)(495,`span`,27),bT(496),LT(497,`extension`),Wa(498,`app-tabs`,null,6),cf(),Aa(500,`pre`)(501,`code`,28),bT(502,`
@Controller()
export class HeroesController {
  @MessagePattern('hero.kill.dragon')
  killDragon(@Payload() message: KillDragonMessage): any {
    const realm = 'Nest';
    const heroId = message.heroId;
    const dragonId = message.dragonId;

    const items = [
      { id: 1, name: 'Mythical Sword' },
      { id: 2, name: 'Key to Dungeon' },
    ];

    return {
      headers: {
        realm
      },
      key: heroId,
      value: items
    }
  }
}
`),cf()()(),Aa(503,`p`),bT(504,`Messages passed in this format can also contain custom headers set in the `),Aa(505,`code`),bT(506,`headers`),cf(),bT(507,` property. Header values must be of type `),Aa(508,`code`),bT(509,`string`),cf(),bT(510,` or `),Aa(511,`code`),bT(512,`Buffer`),cf(),bT(513,`, and a message can carry at most 10,000 of them, an array value counting once per item. Nest does not send a message with more: `),Aa(514,`code`),bT(515,`emit()`),cf(),bT(516,` and `),Aa(517,`code`),bT(518,`send()`),cf(),bT(519,` fail, and a `),Aa(520,`code`),bT(521,`@MessagePattern()`),cf(),bT(522,` reply is logged and dropped.`),cf(),Aa(523,`app-copy-button`,26)(524,`span`,27),bT(525),LT(526,`extension`),Wa(527,`app-tabs`,null,7),cf(),Aa(529,`pre`)(530,`code`,28),bT(531,`
@Controller()
export class HeroesController {
  @MessagePattern('hero.kill.dragon')
  killDragon(@Payload() message: KillDragonMessage): any {
    const realm = 'Nest';
    const heroId = message.heroId;
    const dragonId = message.dragonId;

    const items = [
      { id: 1, name: 'Mythical Sword' },
      { id: 2, name: 'Key to Dungeon' },
    ];

    return {
      headers: {
        kafka_nestRealm: realm
      },
      key: heroId,
      value: items
    }
  }
}
`),cf()()(),Aa(532,`h4`,49)(533,`span`),bT(534,`Event-based`),cf()(),Aa(535,`p`),bT(536,`While the request-response method is ideal for exchanging messages between services, it is less suitable when your message style is event-based (which is ideal for Kafka), that is, when you want to publish events `),Aa(537,`strong`),bT(538,`without waiting for a response`),cf(),bT(539,`. In that case, you don't want the overhead of maintaining two topics that request-response requires.`),cf(),Aa(540,`p`),bT(541,`See `),Aa(542,`a`,45),bT(543,`Overview: Event-based`),cf(),bT(544,` and `),Aa(545,`a`,50),bT(546,`Overview: Publishing events`),cf(),bT(547,` to learn more.`),cf(),Aa(548,`h4`,51)(549,`span`),bT(550,`Context`),cf()(),Aa(551,`p`),bT(552,`In more complex scenarios, you may need additional information about the incoming request. When using the Kafka transporter, you can access the `),Aa(553,`code`),bT(554,`KafkaContext`),cf(),bT(555,` object.`),cf(),Aa(556,`app-copy-button`,26)(557,`span`,27),Wa(558,`app-tabs`,null,8),cf(),Aa(560,`pre`)(561,`code`,28),bT(562,`
@MessagePattern('hero.kill.dragon')
killDragon(@Payload() message: KillDragonMessage, @Ctx() context: KafkaContext) {
  console.log(\`Topic: \${context.getTopic()}\`);
}
`),cf()(),Aa(563,`pre`)(564,`code`,28),bT(565,`
@Bind(Payload(), Ctx())
@MessagePattern('hero.kill.dragon')
killDragon(message, context) {
  console.log(\`Topic: \${context.getTopic()}\`);
}
`),cf()()(),Aa(566,`blockquote`,29)(567,`strong`),bT(568,`Hint`),cf(),Aa(569,`code`),bT(570,`@Payload()`),cf(),bT(571,`, `),Aa(572,`code`),bT(573,`@Ctx()`),cf(),bT(574,` and `),Aa(575,`code`),bT(576,`KafkaContext`),cf(),bT(577,` are imported from the `),Aa(578,`code`),bT(579,`@nestjs/microservices`),cf(),bT(580,` package.
`),cf(),Aa(581,`p`),bT(582,`To access the original Kafka `),Aa(583,`code`),bT(584,`IncomingMessage`),cf(),bT(585,` object, use the `),Aa(586,`code`),bT(587,`getMessage()`),cf(),bT(588,` method of the `),Aa(589,`code`),bT(590,`KafkaContext`),cf(),bT(591,` object, as follows:`),cf(),Aa(592,`app-copy-button`,26)(593,`span`,27),Wa(594,`app-tabs`,null,9),cf(),Aa(596,`pre`)(597,`code`,28),bT(598,`
@MessagePattern('hero.kill.dragon')
killDragon(@Payload() message: KillDragonMessage, @Ctx() context: KafkaContext) {
  const originalMessage = context.getMessage();
  const partition = context.getPartition();
  const { headers, timestamp } = originalMessage;
}
`),cf()(),Aa(599,`pre`)(600,`code`,28),bT(601,`
@Bind(Payload(), Ctx())
@MessagePattern('hero.kill.dragon')
killDragon(message, context) {
  const originalMessage = context.getMessage();
  const partition = context.getPartition();
  const { headers, timestamp } = originalMessage;
}
`),cf()()(),Aa(602,`p`),bT(603,`The `),Aa(604,`code`),bT(605,`IncomingMessage`),cf(),bT(606,` object fulfills the following interface:`),cf(),Aa(607,`app-copy-button`)(608,`pre`)(609,`code`,28),bT(610,`
interface IncomingMessage {
  topic: string;
  partition: number;
  timestamp: string;
  size: number;
  attributes: number;
  offset: string;
  key: any;
  value: any;
  headers: Record<string, any>;
}
`),cf()()(),Aa(611,`p`),bT(612,`If your handler takes a long time to process each message, consider using the `),Aa(613,`code`),bT(614,`heartbeat`),cf(),bT(615,` callback. To retrieve the `),Aa(616,`code`),bT(617,`heartbeat`),cf(),bT(618,` function, use the `),Aa(619,`code`),bT(620,`getHeartbeat()`),cf(),bT(621,` method of the `),Aa(622,`code`),bT(623,`KafkaContext`),cf(),bT(624,`, as follows:`),cf(),Aa(625,`app-copy-button`,26)(626,`span`,27),Wa(627,`app-tabs`,null,10),cf(),Aa(629,`pre`)(630,`code`,28),bT(631,`
@MessagePattern('hero.kill.dragon')
async killDragon(@Payload() message: KillDragonMessage, @Ctx() context: KafkaContext) {
  const heartbeat = context.getHeartbeat();

  // Do some slow processing
  await doWorkPart1();

  // Send heartbeat to not exceed the sessionTimeout
  await heartbeat();

  // Do some slow processing again
  await doWorkPart2();
}
`),cf()()(),Aa(632,`h4`,52)(633,`span`),bT(634,`Naming conventions`),cf()(),Aa(635,`p`),bT(636,`The Kafka microservice components append a description of their role to the `),Aa(637,`code`),bT(638,`client.clientId`),cf(),bT(639,` and `),Aa(640,`code`),bT(641,`consumer.groupId`),cf(),bT(642,` options to prevent collisions between Nest microservice client and server components. By default, the `),Aa(643,`code`),bT(644,`ClientKafkaProxy`),cf(),bT(645,` components append `),Aa(646,`code`),bT(647,`-client`),cf(),bT(648,` and the `),Aa(649,`code`),bT(650,`ServerKafka`),cf(),bT(651,` components append `),Aa(652,`code`),bT(653,`-server`),cf(),bT(654,` to both options. The comments below show how the provided values are transformed.`),cf(),Aa(655,`app-copy-button`,26)(656,`span`,27),bT(657),LT(658,`extension`),Wa(659,`app-tabs`,null,11),cf(),Aa(661,`pre`)(662,`code`,28),bT(663,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'hero', // hero-server
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'hero-consumer' // hero-consumer-server
    },
  }
});
`),cf()()(),Aa(664,`p`),bT(665,`And for the client:`),cf(),Aa(666,`app-copy-button`,26)(667,`span`,27),bT(668),LT(669,`extension`),Wa(670,`app-tabs`,null,12),cf(),Aa(672,`pre`)(673,`code`,28),bT(674,`
@Client({
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'hero', // hero-client
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'hero-consumer' // hero-consumer-client
    }
  }
})
client: ClientKafkaProxy;
`),cf()()(),Aa(675,`blockquote`,29)(676,`strong`),bT(677,`Hint`),cf(),bT(678,` To change the appended suffix, set the `),Aa(679,`code`),bT(680,`postfixId`),cf(),bT(681,` option. For further customization of the client and consumer naming conventions, extend the `),Aa(682,`code`),bT(683,`ClientKafka`),cf(),bT(684,` and `),Aa(685,`code`),bT(686,`ServerKafka`),cf(),bT(687,` classes in your own custom provider and override the constructor.
`),cf(),Aa(688,`p`),bT(689,`Because the Kafka microservice message pattern uses two topics for the request and reply channels, the reply pattern is derived from the request topic. By default, the name of the reply topic is the request topic name with `),Aa(690,`code`),bT(691,`.reply`),cf(),bT(692,` appended.`),cf(),Aa(693,`app-copy-button`,26)(694,`span`,27),bT(695),LT(696,`extension`),Wa(697,`app-tabs`,null,13),cf(),Aa(699,`pre`)(700,`code`,28),bT(701,`
onModuleInit() {
  this.client.subscribeToResponseOf('hero.get'); // hero.get.reply
}
`),cf()()(),Aa(702,`blockquote`,29)(703,`strong`),bT(704,`Hint`),cf(),bT(705,` To customize the reply topic naming convention, extend the `),Aa(706,`code`),bT(707,`ClientKafka`),cf(),bT(708,` class in your own custom provider and override the `),Aa(709,`code`),bT(710,`getResponsePatternName()`),cf(),bT(711,` method.
`),cf(),Aa(712,`h4`,53)(713,`span`),bT(714,`Retriable exceptions`),cf()(),Aa(715,`p`),bT(716,`As with other transporters, unhandled exceptions are automatically converted to a "user-friendly" format. However, in some edge cases you might want to bypass this mechanism and let the `),Aa(717,`code`),bT(718,`kafkajs`),cf(),bT(719,` driver consume exceptions instead. Throwing an exception while processing a message instructs `),Aa(720,`code`),bT(721,`kafkajs`),cf(),bT(722,` to `),Aa(723,`strong`),bT(724,`retry`),cf(),bT(725,` it (redeliver it), which means that even though the message (or event) handler was triggered, the offset won't be committed to Kafka.`),cf(),Aa(726,`blockquote`,43)(727,`strong`),bT(728,`Warning`),cf(),bT(729,` For event handlers (event-based communication), all unhandled exceptions are considered `),Aa(730,`strong`),bT(731,`retriable exceptions`),cf(),bT(732,` by default.
`),cf(),Aa(733,`p`),bT(734,`For message handlers, use the dedicated `),Aa(735,`code`),bT(736,`KafkaRetriableException`),cf(),bT(737,` class, as follows:`),cf(),Aa(738,`app-copy-button`)(739,`pre`)(740,`code`,28),bT(741,`
throw new KafkaRetriableException('...');
`),cf()()(),Aa(742,`blockquote`,29)(743,`strong`),bT(744,`Hint`),cf(),bT(745,` The `),Aa(746,`code`),bT(747,`KafkaRetriableException`),cf(),bT(748,` class is exported from the `),Aa(749,`code`),bT(750,`@nestjs/microservices`),cf(),bT(751,` package.
`),cf(),Aa(752,`blockquote`,43)(753,`strong`),bT(754,`Warning`),cf(),bT(755,` Nest handles a message as a request only when it carries the `),Aa(756,`code`),bT(757,`kafka_correlationId`),cf(),bT(758,` and `),Aa(759,`code`),bT(760,`kafka_replyTopic`),cf(),bT(761,` headers that `),Aa(762,`code`),bT(763,`ClientKafkaProxy.send()`),cf(),bT(764,` adds. Any other message, such as one written by a producer other than Nest, is handled as an event, even when it reaches a `),Aa(765,`code`),bT(766,`@MessagePattern()`),cf(),bT(767,` handler: its unhandled exceptions are retriable, and the next message of the partition is only processed once the stream the handler returns completes. For topics that other producers write to, make sure message handlers return streams that complete, and handle the messages they cannot process instead of throwing, unless these should be redelivered.
`),cf(),Aa(768,`h4`,54)(769,`span`),bT(770,`Custom exception handling`),cf()(),Aa(771,`p`),bT(772,`Along with the default error handling mechanisms, you can create a custom exception filter for Kafka events to manage retry logic. For example, the filter below skips a problematic event after a configurable number of retries:`),cf(),Aa(773,`app-copy-button`)(774,`pre`)(775,`code`,28),bT(776,`
import { Catch, ArgumentsHost, ExceptionFilter, Logger } from '@nestjs/common';
import { KafkaContext } from '@nestjs/microservices';
import type { Producer } from 'kafkajs';

@Catch()
export class KafkaMaxRetryExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(KafkaMaxRetryExceptionFilter.name);

  constructor(
    private readonly producer: Producer,
    private readonly maxRetries: number,
    // Optional custom function executed when max retries are exceeded
    private readonly skipHandler?: (message: any) => Promise<void>,
  ) {}

  async catch(exception: unknown, host: ArgumentsHost) {
    const kafkaContext = host.switchToRpc().getContext<KafkaContext>();
    const message = kafkaContext.getMessage();
    const currentRetryCount = this.getRetryCountFromContext(kafkaContext);

    if (currentRetryCount >= this.maxRetries) {
      this.logger.warn(
        \`Max retries (\${
          this.maxRetries
        }) exceeded for message: \${JSON.stringify(message)}\`,
      );

      if (this.skipHandler) {
        try {
          await this.skipHandler(message);
        } catch (err) {
          this.logger.error('Error in skipHandler:', err);
        }
      }

      try {
        await this.commitOffset(kafkaContext);
      } catch (commitError) {
        this.logger.error('Failed to commit offset:', commitError);
      }
      return; // Stop propagating the exception
    }

    // Republish the message to the same topic with incremented retry count
    try {
      await this.republishWithRetry(kafkaContext, currentRetryCount + 1);
      await this.commitOffset(kafkaContext);
    } catch (republishError) {
      this.logger.error(
        'Failed to republish message for retry:',
        republishError,
      );
      // Rethrow so that KafkaJS retries the message
      throw exception;
    }
  }

  private getRetryCountFromContext(context: KafkaContext): number {
    const headers = context.getMessage().headers || {};
    const retryHeader = headers['retry-count'];
    if (!retryHeader) {
      return 0;
    }
    // Header values are Buffers, so convert to string first
    const value = Buffer.isBuffer(retryHeader)
      ? retryHeader.toString()
      : String(retryHeader);
    return parseInt(value, 10) || 0;
  }

  private async republishWithRetry(
    context: KafkaContext,
    retryCount: number,
  ): Promise<void> {
    const topic = context.getTopic();
    const message = context.getMessage();

    await this.producer.send({
      topic,
      messages: [
        {
          key: message.key,
          value: message.value,
          headers: {
            ...message.headers,
            'retry-count': retryCount.toString(),
          },
        },
      ],
    });
  }

  private async commitOffset(context: KafkaContext): Promise<void> {
    const consumer = context.getConsumer();
    if (!consumer) {
      throw new Error('Consumer instance is not available from KafkaContext.');
    }

    const topic = context.getTopic();
    const partition = context.getPartition();
    const message = context.getMessage();
    const offset = message.offset;

    if (!topic || partition === undefined || offset === undefined) {
      throw new Error(
        'Incomplete Kafka message context for committing offset.',
      );
    }

    await consumer.commitOffsets([
      {
        topic,
        partition,
        // When committing an offset, commit the next number (i.e., current offset + 1)
        offset: (Number(offset) + 1).toString(),
      },
    ]);
  }
}
`),cf()()(),Aa(777,`p`),bT(778,`This filter retries processing a Kafka event up to a configurable number of times. When an exception occurs, it republishes the message to the same topic with an incremented `),Aa(779,`code`),bT(780,`retry-count`),cf(),bT(781,` header, then commits the current offset. Once the maximum number of retries is reached, it calls the custom `),Aa(782,`code`),bT(783,`skipHandler`),cf(),bT(784,` (if provided) and commits the offset, skipping the problematic event. This allows subsequent events to be processed without interruption.`),cf(),Aa(785,`p`),bT(786,`You can register this filter globally or at the controller level. It requires a Kafka producer instance:`),cf(),Aa(787,`app-copy-button`,26)(788,`span`,27),bT(789),LT(790,`extension`),Wa(791,`app-tabs`,null,14),cf(),Aa(793,`pre`)(794,`code`,28),bT(795,`
import { Inject, Injectable } from '@nestjs/common';
import type { Producer } from 'kafkajs';

@Injectable()
export class AppKafkaRetryFilter extends KafkaMaxRetryExceptionFilter {
  constructor(@Inject('KAFKA_PRODUCER') producer: Producer) {
    super(producer, 5); // maxRetries = 5
  }
}
`),cf()(),Aa(796,`pre`)(797,`code`,28),bT(798,`
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppKafkaRetryFilter extends KafkaMaxRetryExceptionFilter {
  constructor(@Inject('KAFKA_PRODUCER') producer) {
    super(producer, 5); // maxRetries = 5
  }
}
`),cf()()(),Aa(799,`app-copy-button`,26)(800,`span`,27),bT(801),LT(802,`extension`),Wa(803,`app-tabs`,null,15),cf(),Aa(805,`pre`)(806,`code`,28),bT(807,`
@Controller()
@UseFilters(AppKafkaRetryFilter)
export class MyEventHandler {
  @EventPattern('your-topic')
  async handleEvent(@Payload() data: any, @Ctx() context: KafkaContext) {
    // Your event processing logic...
  }
}
`),cf()(),Aa(808,`pre`)(809,`code`,28),bT(810,`
@Controller()
@UseFilters(AppKafkaRetryFilter)
export class MyEventHandler {
  @Bind(Payload(), Ctx())
  @EventPattern('your-topic')
  async handleEvent(data, context) {
    // Your event processing logic...
  }
}
`),cf()()(),Aa(811,`p`),bT(812,`Make sure to provide the Kafka producer in your module:`),cf(),Aa(813,`app-copy-button`,26)(814,`span`,27),bT(815),LT(816,`extension`),Wa(817,`app-tabs`,null,16),cf(),Aa(819,`pre`)(820,`code`,28),bT(821,`
import { Kafka } from 'kafkajs';

@Module({
  providers: [
    AppKafkaRetryFilter,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async () => {
        const kafka = new Kafka({ brokers: ['localhost:9092'] });
        const producer = kafka.producer();
        await producer.connect();
        return producer;
      },
    },
  ],
})
export class AppModule {}
`),cf()()(),Aa(822,`h4`,55)(823,`span`),bT(824,`Commit offsets`),cf()(),Aa(825,`p`),bT(826,`Committing offsets is essential when working with Kafka. By default, messages are committed automatically after a specific time (see the `),Aa(827,`a`,56),bT(828,`KafkaJS autocommit documentation`),cf(),bT(829,`). `),Aa(830,`code`),bT(831,`KafkaContext`),cf(),bT(832,` gives you access to the active consumer for committing offsets manually. The consumer is the KafkaJS consumer and works like the `),Aa(833,`a`,57),bT(834,`native KafkaJS implementation`),cf(),bT(835,`.`),cf(),Aa(836,`app-copy-button`,26)(837,`span`,27),Wa(838,`app-tabs`,null,17),cf(),Aa(840,`pre`)(841,`code`,28),bT(842,`
@EventPattern('user.created')
async handleUserCreated(@Payload() data: IncomingMessage, @Ctx() context: KafkaContext) {
  // business logic

  const { offset } = context.getMessage();
  const partition = context.getPartition();
  const topic = context.getTopic();
  const consumer = context.getConsumer();
  // Commit the next offset to consume (i.e., current offset + 1)
  await consumer.commitOffsets([
    { topic, partition, offset: (Number(offset) + 1).toString() },
  ]);
}
`),cf()(),Aa(843,`pre`)(844,`code`,28),bT(845,`
@Bind(Payload(), Ctx())
@EventPattern('user.created')
async handleUserCreated(data, context) {
  // business logic

  const { offset } = context.getMessage();
  const partition = context.getPartition();
  const topic = context.getTopic();
  const consumer = context.getConsumer();
  // Commit the next offset to consume (i.e., current offset + 1)
  await consumer.commitOffsets([
    { topic, partition, offset: (Number(offset) + 1).toString() },
  ]);
}
`),cf()()(),Aa(846,`p`),bT(847,`To disable auto-committing, set `),Aa(848,`code`),bT(849,`autoCommit: false`),cf(),bT(850,` in the `),Aa(851,`code`),bT(852,`run`),cf(),bT(853,` configuration, as follows:`),cf(),Aa(854,`app-copy-button`,26)(855,`span`,27),bT(856),LT(857,`extension`),Wa(858,`app-tabs`,null,18),cf(),Aa(860,`pre`)(861,`code`,28),bT(862,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
    run: {
      autoCommit: false
    }
  }
});
`),cf()(),Aa(863,`pre`)(864,`code`,28),bT(865,`
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
    run: {
      autoCommit: false
    }
  }
});
`),cf()()(),Aa(866,`h4`,58)(867,`span`),bT(868,`Instance status updates`),cf()(),Aa(869,`p`),bT(870,`To get real-time updates on the connection and the state of the underlying driver instance, subscribe to the `),Aa(871,`code`),bT(872,`status`),cf(),bT(873,` stream. This stream provides status updates specific to the chosen driver. For the Kafka driver, the `),Aa(874,`code`),bT(875,`status`),cf(),bT(876,` stream emits `),Aa(877,`code`),bT(878,`connected`),cf(),bT(879,`, `),Aa(880,`code`),bT(881,`disconnected`),cf(),bT(882,`, `),Aa(883,`code`),bT(884,`rebalancing`),cf(),bT(885,`, `),Aa(886,`code`),bT(887,`crashed`),cf(),bT(888,`, and `),Aa(889,`code`),bT(890,`stopped`),cf(),bT(891,` events.`),cf(),Aa(892,`app-copy-button`)(893,`pre`)(894,`code`,28),bT(895,`
this.client.status.subscribe((status: KafkaStatus) => {
  console.log(status);
});
`),cf()()(),Aa(896,`blockquote`,29)(897,`strong`),bT(898,`Hint`),cf(),bT(899,` The `),Aa(900,`code`),bT(901,`KafkaStatus`),cf(),bT(902,` type is imported from the `),Aa(903,`code`),bT(904,`@nestjs/microservices`),cf(),bT(905,` package.
`),cf(),Aa(906,`p`),bT(907,`Similarly, you can subscribe to the server's `),Aa(908,`code`),bT(909,`status`),cf(),bT(910,` stream to receive notifications about the server's status:`),cf(),Aa(911,`app-copy-button`)(912,`pre`)(913,`code`,28),bT(914,`
const server = app.connectMicroservice<MicroserviceOptions>(...);
server.status.subscribe((status: KafkaStatus) => {
  console.log(status);
});
`),cf()()(),Aa(915,`h4`,59)(916,`span`),bT(917,`Underlying producer and consumer`),cf()(),Aa(918,`p`),bT(919,`For more advanced use cases, you may need to access the underlying producer and consumer instances, for example, to close the connection manually or to use driver-specific methods. In most cases, however, you `),Aa(920,`strong`),bT(921,`shouldn't need`),cf(),bT(922,` to access the driver directly.`),cf(),Aa(923,`p`),bT(924,`To do so, use the `),Aa(925,`code`),bT(926,`producer`),cf(),bT(927,` and `),Aa(928,`code`),bT(929,`consumer`),cf(),bT(930,` properties exposed by the `),Aa(931,`code`),bT(932,`ClientKafkaProxy`),cf(),bT(933,` instance.`),cf(),Aa(934,`app-copy-button`)(935,`pre`)(936,`code`,28),bT(937,`
const producer = this.client.producer;
const consumer = this.client.consumer;
`),cf()()()(),Aa(938,`a`,60),Wa(939,`i`,61),Aa(940,`span`),bT(941,`Edit on GitHub`),cf()()()),c&2){let x=tT(45),u=tT(311),y=tT(379),k=tT(399),T=tT(470),M=tT(499),R=tT(528),q=tT(559),j=tT(595),I=tT(660),ee=tT(671),te=tT(698),F=tT(792),N=tT(804),ne=tT(818),D=tT(839),O=tT(859);zC(42),hf(` `,jT(43,45,`main`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(263),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive),zC(61),hf(` `,jT(377,48,`heroes.controller`,y.isJsActive),`
`),zC(20),hf(` `,jT(397,51,`heroes.controller`,k.isJsActive),`
`),zC(71),hf(` `,jT(468,54,`heroes.controller`,T.isJsActive),`
`),zC(29),hf(` `,jT(497,57,`heroes.controller`,M.isJsActive),`
`),zC(29),hf(` `,jT(526,60,`heroes.controller`,R.isJsActive),`
`),zC(35),zy(`hide`,q.isJsActive),zC(3),zy(`hide`,!q.isJsActive),zC(33),zy(`hide`,j.isJsActive),zC(3),zy(`hide`,!j.isJsActive),zC(58),hf(` `,jT(658,63,`main`,I.isJsActive),`
`),zC(11),hf(` `,jT(669,66,`heroes.controller`,ee.isJsActive),`
`),zC(27),hf(` `,jT(696,69,`heroes.controller`,te.isJsActive),`
`),zC(94),hf(` `,jT(790,72,`kafka-retry.filter`,F.isJsActive),`
`),zC(4),zy(`hide`,F.isJsActive),zC(3),zy(`hide`,!F.isJsActive),zC(5),hf(` `,jT(802,75,`my-event.handler`,N.isJsActive),`
`),zC(4),zy(`hide`,N.isJsActive),zC(3),zy(`hide`,!N.isJsActive),zC(7),hf(` `,jT(816,78,`app.module`,ne.isJsActive),`
`),zC(25),zy(`hide`,D.isJsActive),zC(3),zy(`hide`,!D.isJsActive),zC(13),hf(` `,jT(857,81,`main`,O.isJsActive),`
`),zC(4),zy(`hide`,O.isJsActive),zC(3),zy(`hide`,!O.isJsActive)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return s})();var X=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-redis`]],features:[xy],decls:370,vars:12,consts:[[`contentReference`,``],[`appcd26ab6c405ab9677b17c3c4efb2e273a0609271`,``],[`app1c7e23d05bf3707ed54fc6d9ee5f859f5fa28638`,``],[1,`content`],[1,`content-inner`],[`id`,`redis`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://redis.io/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://redis.io/topics/pubsub`],[`src`,`/assets/Redis_1.png`,1,`illustrative-image`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`overview`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`options`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://redis.github.io/ioredis/index.html#RedisOptions`],[`appAnchor`,``,`id`,`client`],[`href`,`/microservices/basics#client-producer-class`],[`appAnchor`,``,`id`,`context`],[`appAnchor`,``,`id`,`wildcards`],[`appAnchor`,``,`id`,`instance-status-updates`],[`appAnchor`,``,`id`,`listening-to-redis-events`],[`href`,`#underlying-driver-access`],[`appAnchor`,``,`id`,`underlying-driver-access`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/redis.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`Redis`),cf(),Aa(5,`p`),bT(6,`The `),Aa(7,`a`,6),bT(8,`Redis`),cf(),bT(9,` transporter implements the publish/subscribe messaging paradigm and uses the `),Aa(10,`a`,7),bT(11,`Pub/Sub`),cf(),bT(12,` feature of Redis. Published messages are categorized in channels, without the publisher knowing which subscribers (if any) will receive them. Each microservice can subscribe to any number of channels, and a single message can be received by multiple subscribers. Messages exchanged through channels are `),Aa(13,`strong`),bT(14,`fire-and-forget`),cf(),bT(15,`: if a message is published and no subscriber is interested in it, the message is removed and can't be recovered. As a result, there is no guarantee that a message or event is handled by at least one service.`),cf(),Aa(16,`figure`),Wa(17,`img`,8),cf(),Aa(18,`h4`,9)(19,`span`),bT(20,`Installation`),cf()(),Aa(21,`p`),bT(22,`To start building Redis-based microservices, first install the required package:`),cf(),Aa(23,`pre`)(24,`code`,10),bT(25,`
$ npm i --save ioredis
`),cf()(),Aa(26,`h4`,11)(27,`span`),bT(28,`Overview`),cf()(),Aa(29,`p`),bT(30,`To use the Redis transporter, pass the following options object to the `),Aa(31,`code`),bT(32,`createMicroservice()`),cf(),bT(33,` method:`),cf(),Aa(34,`app-copy-button`,12)(35,`span`,13),bT(36),LT(37,`extension`),Wa(38,`app-tabs`,null,1),cf(),Aa(40,`pre`)(41,`code`,14),bT(42,`
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.REDIS,
  options: {
    host: 'localhost',
    port: 6379,
  },
});
`),cf()(),Aa(43,`pre`)(44,`code`,14),bT(45,`
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.REDIS,
  options: {
    host: 'localhost',
    port: 6379,
  },
});
`),cf()()(),Aa(46,`blockquote`,15)(47,`strong`),bT(48,`Hint`),cf(),bT(49,` The `),Aa(50,`code`),bT(51,`Transport`),cf(),bT(52,` enum is imported from the `),Aa(53,`code`),bT(54,`@nestjs/microservices`),cf(),bT(55,` package.
`),cf(),Aa(56,`h4`,16)(57,`span`),bT(58,`Options`),cf()(),Aa(59,`p`),bT(60,`The `),Aa(61,`code`),bT(62,`options`),cf(),bT(63,` property is specific to the chosen transporter. The `),Aa(64,`strong`),bT(65,`Redis`),cf(),bT(66,` transporter exposes the properties described below.`),cf(),Aa(67,`table`)(68,`tr`)(69,`td`)(70,`code`),bT(71,`host`),cf()(),Aa(72,`td`),bT(73,`Connection hostname`),cf()(),Aa(74,`tr`)(75,`td`)(76,`code`),bT(77,`port`),cf()(),Aa(78,`td`),bT(79,`Connection port`),cf()(),Aa(80,`tr`)(81,`td`)(82,`code`),bT(83,`retryAttempts`),cf()(),Aa(84,`td`),bT(85,`Number of times to retry the connection (default: `),Aa(86,`code`),bT(87,`0`),cf(),bT(88,`, i.e., no retries)`),cf()(),Aa(89,`tr`)(90,`td`)(91,`code`),bT(92,`retryDelay`),cf()(),Aa(93,`td`),bT(94,`Delay between connection retry attempts (ms) (default: `),Aa(95,`code`),bT(96,`5000`),cf(),bT(97,`)`),cf()(),Aa(98,`tr`)(99,`td`)(100,`code`),bT(101,`wildcards`),cf()(),Aa(102,`td`),bT(103,`Enables Redis wildcard subscriptions, instructing the transporter to use `),Aa(104,`code`),bT(105,`psubscribe`),cf(),bT(106,`/`),Aa(107,`code`),bT(108,`pmessage`),cf(),bT(109,` under the hood (default: `),Aa(110,`code`),bT(111,`false`),cf(),bT(112,`)`),cf()()(),Aa(113,`p`),bT(114,`The transporter also supports all the properties of the official `),Aa(115,`a`,17),bT(116,`ioredis`),cf(),bT(117,` client.`),cf(),Aa(118,`h4`,18)(119,`span`),bT(120,`Client`),cf()(),Aa(121,`p`),bT(122,`As with other microservice transporters, you have `),Aa(123,`a`,19),bT(124,`several options`),cf(),bT(125,` for creating a Redis `),Aa(126,`code`),bT(127,`ClientProxy`),cf(),bT(128,` instance.`),cf(),Aa(129,`p`),bT(130,`One way to create an instance is to use the `),Aa(131,`code`),bT(132,`ClientsModule`),cf(),bT(133,`. Import it and use its `),Aa(134,`code`),bT(135,`register()`),cf(),bT(136,` method to pass an options object with the same properties shown above for the `),Aa(137,`code`),bT(138,`createMicroservice()`),cf(),bT(139,` method, plus a `),Aa(140,`code`),bT(141,`name`),cf(),bT(142,` property to use as the injection token. Read more about the `),Aa(143,`code`),bT(144,`ClientsModule`),cf(),bT(145,` in the `),Aa(146,`a`,19),bT(147,`client section of the overview`),cf(),bT(148,`.`),cf(),Aa(149,`app-copy-button`)(150,`pre`)(151,`code`,14),bT(152,`
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        }
      },
    ]),
  ]
  ...
})
`),cf()()(),Aa(153,`p`),bT(154,`You can also create a client with `),Aa(155,`code`),bT(156,`ClientProxyFactory`),cf(),bT(157,` or the `),Aa(158,`code`),bT(159,`@Client()`),cf(),bT(160,` decorator. Both are described in the `),Aa(161,`a`,19),bT(162,`client section of the overview`),cf(),bT(163,`.`),cf(),Aa(164,`h4`,20)(165,`span`),bT(166,`Context`),cf()(),Aa(167,`p`),bT(168,`In more complex scenarios, you may need additional information about the incoming request. With the Redis transporter, you can access the `),Aa(169,`code`),bT(170,`RedisContext`),cf(),bT(171,` object.`),cf(),Aa(172,`app-copy-button`,12)(173,`span`,13),Wa(174,`app-tabs`,null,2),cf(),Aa(176,`pre`)(177,`code`,14),bT(178,`
@MessagePattern('notifications')
getNotifications(@Payload() data: number[], @Ctx() context: RedisContext) {
  console.log(\`Channel: \${context.getChannel()}\`);
}
`),cf()(),Aa(179,`pre`)(180,`code`,14),bT(181,`
@Bind(Payload(), Ctx())
@MessagePattern('notifications')
getNotifications(data, context) {
  console.log(\`Channel: \${context.getChannel()}\`);
}
`),cf()()(),Aa(182,`blockquote`,15)(183,`strong`),bT(184,`Hint`),cf(),Aa(185,`code`),bT(186,`@Payload()`),cf(),bT(187,`, `),Aa(188,`code`),bT(189,`@Ctx()`),cf(),bT(190,` and `),Aa(191,`code`),bT(192,`RedisContext`),cf(),bT(193,` are imported from the `),Aa(194,`code`),bT(195,`@nestjs/microservices`),cf(),bT(196,` package.
`),cf(),Aa(197,`h4`,21)(198,`span`),bT(199,`Wildcards`),cf()(),Aa(200,`p`),bT(201,`To enable wildcard support, set the `),Aa(202,`code`),bT(203,`wildcards`),cf(),bT(204,` option to `),Aa(205,`code`),bT(206,`true`),cf(),bT(207,`. This instructs the transporter to use `),Aa(208,`code`),bT(209,`psubscribe`),cf(),bT(210,` and `),Aa(211,`code`),bT(212,`pmessage`),cf(),bT(213,` under the hood.`),cf(),Aa(214,`app-copy-button`)(215,`pre`)(216,`code`,14),bT(217,`
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.REDIS,
  options: {
    // Other options
    wildcards: true,
  },
});
`),cf()()(),Aa(218,`p`),bT(219,`Pass the `),Aa(220,`code`),bT(221,`wildcards`),cf(),bT(222,` option when creating a client instance as well.`),cf(),Aa(223,`p`),bT(224,`With this option enabled, you can use wildcards in your message and event patterns. For example, to subscribe to all channels starting with `),Aa(225,`code`),bT(226,`notifications.`),cf(),bT(227,`, use the following pattern:`),cf(),Aa(228,`app-copy-button`)(229,`pre`)(230,`code`,14),bT(231,`
@EventPattern('notifications.*')
`),cf()()(),Aa(232,`h4`,22)(233,`span`),bT(234,`Instance status updates`),cf()(),Aa(235,`p`),bT(236,`To get real-time updates on the connection and the state of the underlying driver instance, subscribe to the `),Aa(237,`code`),bT(238,`status`),cf(),bT(239,` stream. This stream provides status updates specific to the chosen driver. For the Redis driver, the `),Aa(240,`code`),bT(241,`status`),cf(),bT(242,` stream emits `),Aa(243,`code`),bT(244,`connected`),cf(),bT(245,`, `),Aa(246,`code`),bT(247,`disconnected`),cf(),bT(248,`, and `),Aa(249,`code`),bT(250,`reconnecting`),cf(),bT(251,` events.`),cf(),Aa(252,`app-copy-button`)(253,`pre`)(254,`code`,14),bT(255,`
this.client.status.subscribe((status: RedisStatus) => {
  console.log(status);
});
`),cf()()(),Aa(256,`blockquote`,15)(257,`strong`),bT(258,`Hint`),cf(),bT(259,` The `),Aa(260,`code`),bT(261,`RedisStatus`),cf(),bT(262,` type is imported from the `),Aa(263,`code`),bT(264,`@nestjs/microservices`),cf(),bT(265,` package.
`),cf(),Aa(266,`p`),bT(267,`Similarly, you can subscribe to the server's `),Aa(268,`code`),bT(269,`status`),cf(),bT(270,` stream to receive notifications about the server's status.`),cf(),Aa(271,`app-copy-button`)(272,`pre`)(273,`code`,14),bT(274,`
const server = app.connectMicroservice<MicroserviceOptions>(...);
server.status.subscribe((status: RedisStatus) => {
  console.log(status);
});
`),cf()()(),Aa(275,`h4`,23)(276,`span`),bT(277,`Listening to Redis events`),cf()(),Aa(278,`p`),bT(279,`In some cases, you might want to listen to internal events emitted by the microservice. For example, you could listen for the `),Aa(280,`code`),bT(281,`error`),cf(),bT(282,` event to trigger additional operations when an error occurs. To do this, use the `),Aa(283,`code`),bT(284,`on()`),cf(),bT(285,` method. Because the Redis transporter uses two connections (see `),Aa(286,`a`,24),bT(287,`underlying driver access`),cf(),bT(288,`), the callback receives the connection that emitted the event (`),Aa(289,`code`),bT(290,`'pub'`),cf(),bT(291,` or `),Aa(292,`code`),bT(293,`'sub'`),cf(),bT(294,`) as its first argument:`),cf(),Aa(295,`app-copy-button`)(296,`pre`)(297,`code`,14),bT(298,`
this.client.on('error', (client, err) => {
  console.error(client, err);
});
`),cf()()(),Aa(299,`p`),bT(300,`Similarly, you can listen to the server's internal events:`),cf(),Aa(301,`app-copy-button`)(302,`pre`)(303,`code`,14),bT(304,`
server.on<RedisEvents>('error', (client, err) => {
  console.error(client, err);
});
`),cf()()(),Aa(305,`blockquote`,15)(306,`strong`),bT(307,`Hint`),cf(),bT(308,` The `),Aa(309,`code`),bT(310,`RedisEvents`),cf(),bT(311,` type is imported from the `),Aa(312,`code`),bT(313,`@nestjs/microservices`),cf(),bT(314,` package.
`),cf(),Aa(315,`p`),bT(316,`Starting with NestJS v12.1, listeners registered with the client's `),Aa(317,`code`),bT(318,`on()`),cf(),bT(319,` method stay registered until you call `),Aa(320,`code`),bT(321,`close()`),cf(),bT(322,`, so they are also attached to the new `),Aa(323,`code`),bT(324,`pub`),cf(),bT(325,` and `),Aa(326,`code`),bT(327,`sub`),cf(),bT(328,` connections the client creates on the next `),Aa(329,`code`),bT(330,`send()`),cf(),bT(331,` or `),Aa(332,`code`),bT(333,`emit()`),cf(),bT(334,` call after the connection ended (once any configured `),Aa(335,`code`),bT(336,`retryAttempts`),cf(),bT(337,` are exhausted). Registrations are not deduplicated, so register each listener once rather than again from its callback or after each reconnect.`),cf(),Aa(338,`h4`,25)(339,`span`),bT(340,`Underlying driver access`),cf()(),Aa(341,`p`),bT(342,`For more advanced use cases, you may need to access the underlying driver instance, for example, to close the connection manually or to use driver-specific methods. In most cases, however, you `),Aa(343,`strong`),bT(344,`shouldn't need`),cf(),bT(345,` to access the driver directly.`),cf(),Aa(346,`p`),bT(347,`To do so, use the `),Aa(348,`code`),bT(349,`unwrap()`),cf(),bT(350,` method, which returns the underlying driver instance. The generic type parameter specifies the type of driver instance you expect.`),cf(),Aa(351,`app-copy-button`)(352,`pre`)(353,`code`,14),bT(354,`
const [pub, sub] =
  this.client.unwrap<[import('ioredis').Redis, import('ioredis').Redis]>();
`),cf()()(),Aa(355,`p`),bT(356,`Similarly, you can access the server's underlying driver instance:`),cf(),Aa(357,`app-copy-button`)(358,`pre`)(359,`code`,14),bT(360,`
const [pub, sub] =
  server.unwrap<[import('ioredis').Redis, import('ioredis').Redis]>();
`),cf()()(),Aa(361,`p`),bT(362,`Unlike other transporters, the Redis transporter returns a tuple of two `),Aa(363,`code`),bT(364,`ioredis`),cf(),bT(365,` instances: the first one publishes messages, and the second one subscribes to them.`),cf()(),Aa(366,`a`,26),Wa(367,`i`,27),Aa(368,`span`),bT(369,`Edit on GitHub`),cf()()()),c&2){let x=tT(39),u=tT(175);zC(36),hf(` `,jT(37,9,`main`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(133),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return s})();var Z=(()=>{class s extends xt{static ɵfac=(()=>{let l;return function(h){return(l||(l=im(s)))(h||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-pre-request-hooks`]],features:[xy],decls:158,vars:32,consts:[[`contentReference`,``],[`app4c7c5960d52bd05519791794cc4a9b25b4f1a0ee`,``],[`app130f2008be9f29e1a2b73c9573173750cff455c5`,``],[`appee288f3f446b41665cbf811154012ad39d736ae3`,``],[`app469999f109dc04172d118d583e69e31aaa42f405`,``],[1,`content`],[1,`content-inner`],[`id`,`pre-request-hooks`],[1,`info`],[`routerLink`,`/microservices/exception-filters`],[`appAnchor`,``,`id`,`binding-hooks`],[1,`warning`],[`routerLink`,`/faq/hybrid-application`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`asynclocalstorage-propagation`],[`appAnchor`,``,`id`,`logging-and-metrics`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/pre-request-hooks.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,5,0)(2,`div`,6)(3,`h3`,7),bT(4,`Pre-request hooks`),cf(),Aa(5,`p`),bT(6,`Pre-request hooks are functions that run before all enhancers (guards, interceptors, and pipes) on every invocation of a pattern handler. They are the microservices equivalent of HTTP middleware: a place to establish per-request context that must be visible to guards and the rest of the pipeline.`),cf(),Aa(7,`blockquote`,8)(8,`strong`),bT(9,`Hint`),cf(),bT(10,` The `),Aa(11,`code`),bT(12,`PreRequestHook`),cf(),bT(13,` interface is exported from the `),Aa(14,`code`),bT(15,`@nestjs/common`),cf(),bT(16,` package.
`),cf(),Aa(17,`p`),bT(18,`Hooks run at the start of the following sequence:`),cf(),Aa(19,`pre`)(20,`code`),bT(21,`
Incoming message
  \u2514\u2500 Pre-request hooks  (registration order)
       \u2514\u2500 Guards
            \u2514\u2500 Interceptors
                 \u2514\u2500 Pipes
                      \u2514\u2500 Handler
`),cf()(),Aa(22,`p`),bT(23,`Exceptions thrown inside a hook are caught by the same wrapper that covers the rest of the pipeline, so your existing `),Aa(24,`a`,9),bT(25,`exception filters`),cf(),bT(26,` handle them without extra configuration.`),cf(),Aa(27,`h4`,10)(28,`span`),bT(29,`Binding hooks`),cf()(),Aa(30,`p`),bT(31,`Register hooks on the microservice instance with the `),Aa(32,`code`),bT(33,`registerPreRequestHook()`),cf(),bT(34,` method, before the microservice is initialized (i.e., before calling `),Aa(35,`code`),bT(36,`app.listen()`),cf(),bT(37,` or `),Aa(38,`code`),bT(39,`app.init()`),cf(),bT(40,`). Hooks registered after initialization are ignored, and Nest logs a warning. Multiple calls accumulate hooks in registration order.`),cf(),Aa(41,`p`),bT(42,`Each hook receives an `),Aa(43,`code`),bT(44,`ExecutionContext`),cf(),bT(45,` and a `),Aa(46,`code`),bT(47,`next`),cf(),bT(48,` function. Calling `),Aa(49,`code`),bT(50,`next()`),cf(),bT(51,` advances to the next hook or, when no hooks remain, to the guard → interceptor → pipe → handler pipeline. The hook must return an `),Aa(52,`code`),bT(53,`Observable`),cf(),bT(54,`: either the one produced by `),Aa(55,`code`),bT(56,`next()`),cf(),bT(57,`, or one that wraps it.`),cf(),Aa(58,`blockquote`,11)(59,`strong`),bT(60,`Warning`),cf(),bT(61,` If a hook doesn't call `),Aa(62,`code`),bT(63,`next()`),cf(),bT(64,`, the handler never runs. This is the same contract as HTTP middleware.
`),cf(),Aa(65,`blockquote`,8)(66,`strong`),bT(67,`Note`),cf(),bT(68,` In a `),Aa(69,`a`,12),bT(70,`hybrid application`),cf(),bT(71,`, `),Aa(72,`code`),bT(73,`connectMicroservice()`),cf(),bT(74,` initializes the connected microservice immediately (unless you pass `),Aa(75,`code`),bT(76,`deferInitialization: true`),cf(),bT(77,` in its second argument), so hooks registered on the returned instance afterward are not applied.
`),cf(),Aa(78,`app-copy-button`,13)(79,`span`,14),bT(80),LT(81,`extension`),Wa(82,`app-tabs`,null,1),cf(),Aa(84,`pre`)(85,`code`,15),bT(86,`
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    { transport: Transport.TCP },
  );

  app.registerPreRequestHook((ctx, next) => {
    return next();
  });

  await app.listen();
}
await bootstrap();
`),cf()(),Aa(87,`pre`)(88,`code`,15),bT(89,`
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
  });

  app.registerPreRequestHook((ctx, next) => {
    return next();
  });

  await app.listen();
}
await bootstrap();
`),cf()()(),Aa(90,`h4`,16)(91,`span`),bT(92,`AsyncLocalStorage propagation`),cf()(),Aa(93,`p`),bT(94,`A common use case is initializing `),Aa(95,`code`),bT(96,`AsyncLocalStorage`),cf(),bT(97,` before guards run, which makes the store available throughout the entire pipeline:`),cf(),Aa(98,`app-copy-button`,13)(99,`span`,14),bT(100),LT(101,`extension`),Wa(102,`app-tabs`,null,2),cf(),Aa(104,`pre`)(105,`code`,15),bT(106,`
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AsyncLocalStorage } from 'async_hooks';
import { randomUUID } from 'crypto';
import { AppModule } from './app.module.js';

export const als = new AsyncLocalStorage<{ correlationId: string }>();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    { transport: Transport.TCP },
  );

  app.registerPreRequestHook((ctx, next) => {
    return new Observable(subscriber => {
      als.run({ correlationId: randomUUID() }, () => {
        next().subscribe(subscriber);
      });
    });
  });

  await app.listen();
}
await bootstrap();
`),cf()(),Aa(107,`pre`)(108,`code`,15),bT(109,`
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AsyncLocalStorage } from 'async_hooks';
import { randomUUID } from 'crypto';
import { AppModule } from './app.module.js';

export const als = new AsyncLocalStorage();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
  });

  app.registerPreRequestHook((ctx, next) => {
    return new Observable(subscriber => {
      als.run({ correlationId: randomUUID() }, () => {
        next().subscribe(subscriber);
      });
    });
  });

  await app.listen();
}
await bootstrap();
`),cf()()(),Aa(110,`p`),bT(111,`Because the hook runs before the guards, `),Aa(112,`code`),bT(113,`als.getStore()`),cf(),bT(114,` returns the initialized store in any guard, interceptor, or handler:`),cf(),Aa(115,`app-copy-button`,13)(116,`span`,14),bT(117),LT(118,`extension`),Wa(119,`app-tabs`,null,3),cf(),Aa(121,`pre`)(122,`code`,15),bT(123,`
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { als } from './main.js';

@Injectable()
export class CorrelationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { correlationId } = als.getStore()!;
    return true;
  }
}
`),cf()(),Aa(124,`pre`)(125,`code`,15),bT(126,`
import { Injectable } from '@nestjs/common';
import { als } from './main.js';

@Injectable()
export class CorrelationGuard {
  canActivate(context) {
    const { correlationId } = als.getStore();
    return true;
  }
}
`),cf()()(),Aa(127,`h4`,17)(128,`span`),bT(129,`Logging and metrics`),cf()(),Aa(130,`p`),bT(131,`You can apply RxJS operators to the `),Aa(132,`code`),bT(133,`Observable`),cf(),bT(134,` returned by `),Aa(135,`code`),bT(136,`next()`),cf(),bT(137,` to observe the full handler lifecycle:`),cf(),Aa(138,`app-copy-button`,13)(139,`span`,14),bT(140),LT(141,`extension`),Wa(142,`app-tabs`,null,4),cf(),Aa(144,`pre`)(145,`code`,15),bT(146,`
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

app.registerPreRequestHook((ctx, next) => {
  const handler = ctx.getHandler().name;
  const start = Date.now();

  return next().pipe(
    tap(() => console.log(\`[\${handler}] completed in \${Date.now() - start}ms\`)),
    catchError(err => {
      console.error(\`[\${handler}] failed:\`, err.message);
      return throwError(() => err);
    }),
  );
});
`),cf()(),Aa(147,`pre`)(148,`code`,15),bT(149,`
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

app.registerPreRequestHook((ctx, next) => {
  const handler = ctx.getHandler().name;
  const start = Date.now();

  return next().pipe(
    tap(() => console.log(\`[\${handler}] completed in \${Date.now() - start}ms\`)),
    catchError(err => {
      console.error(\`[\${handler}] failed:\`, err.message);
      return throwError(() => err);
    }),
  );
});
`),cf()()(),Aa(150,`blockquote`,8)(151,`strong`),bT(152,`Hint`),cf(),bT(153,` Pre-request hooks are global: you can't register them for individual patterns. When no hooks are registered, Nest skips the hook chain entirely, so the feature adds no overhead. Pre-request hooks don't apply to WebSocket gateways.
`),cf()(),Aa(154,`a`,18),Wa(155,`i`,19),Aa(156,`span`),bT(157,`Edit on GitHub`),cf()()()),c&2){let x=tT(83),u=tT(103),y=tT(120),k=tT(143);zC(80),hf(` `,jT(81,20,`main`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(13),hf(` `,jT(101,23,`main`,u.isJsActive),`
`),zC(4),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive),zC(10),hf(` `,jT(118,26,`correlation.guard`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(16),hf(` `,jT(141,29,`main`,k.isJsActive),`
`),zC(4),zy(`hide`,k.isJsActive),zC(3),zy(`hide`,!k.isJsActive)}},dependencies:[Jc,Lt,ln,u,g],encapsulation:2})}return s})();var Ut=[{path:`basics`,component:B,data:{title:`Microservices`}},{path:`redis`,component:X,data:{title:`Redis - Microservices`}},{path:`mqtt`,component:z,data:{title:`MQTT - Microservices`}},{path:`nats`,component:W,data:{title:`NATS - Microservices`}},{path:`grpc`,component:Q,data:{title:`gRPC - Microservices`}},{path:`rabbitmq`,component:Y,data:{title:`RabbitMQ - Microservices`}},{path:`kafka`,component:V,data:{title:`Kafka - Microservices`}},{path:`pipes`,component:$,data:{title:`Pipes - Microservices`}},{path:`exception-filters`,component:G,data:{title:`Exception Filters - Microservices`}},{path:`guards`,component:L,data:{title:`Guards - Microservices`}},{path:`interceptors`,component:U,data:{title:`Interceptors - Microservices`}},{path:`pre-request-hooks`,component:Z,data:{title:`Pre-request hooks - Microservices`}},{path:`custom-transport`,component:K,data:{title:`Custom transporters - Microservices`}}];export{Ut as MICROSERVICES_ROUTES};