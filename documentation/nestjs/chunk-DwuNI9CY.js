import{C as hf,M as xy,N as zC,P as zy,T as jT,_ as Wa,a as u,b as cf,d as Jc,i as g,k as tT,l as Aa,m as LT,n as ln,p as Ky,r as xt,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var le=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(h){return(m||(m=im(d)))(h||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-idempotency`]],features:[xy],decls:2539,vars:100,consts:[[`contentReference`,``],[`appbce5435b9bf585c525c30d70741281d2c52f0de6`,``],[`app7beabe4a2701e0eb39ee0bc33446a3eca3fcc663`,``],[`app8bb42cd0f6cc2a3bc455fba6dc7629ceafe4a26c`,``],[`appf784f4d247f3bb2b9da5c0b197c62fd898e15b32`,``],[`app03db4b5882f4e97823ec1eedd3eac866e1b04607`,``],[`app3b3bc49ed1a2873524ff97f212391a0b30d38e37`,``],[`app07e4ce6ee860fa77af2e7494d6ee507edfd44d5e`,``],[`appfa43510b727feadbbf4abd07bbbbb872b94972e8`,``],[`appf98e5bf1b72616e59a971a806fe622389e69fe74`,``],[`app5a7aecb134bced2fbc5b629e108b5332a6fec425`,``],[`app5bc09aebe02ff8699e2528a5b55dd7f3b7fc13c2`,``],[`appc85e8b7eab826402f5d608c1618769f4970af793`,``],[`app8289f31bded4d187d0c2e1841f46ca10f8ac7b79`,``],[`appfdcbc142e4f737832f17fdf56fa1396668d8965f`,``],[`app16673aad824d6765835f626b70ee97f8f2049316`,``],[`appd3a94710ac191122a6e6746f2389753b484bfea9`,``],[`appcd2d81e3d8403f01527d8872ffa82237703c9f9b`,``],[`app19fc7fd1b68f1446f0eaa714bd375f83b922d1af`,``],[`appa1dc04aaa17e66eb234f5399d1580cb2291a1076`,``],[`app96ff7277c03669170d03c9f841f3c21253a2bce4`,``],[`apped4f9d78d84dbc97151106e2e9f76a0bae6dcd97`,``],[`app02de9404241c6137ed830759331e4824fabd5f15`,``],[`appd88b6f66ca256dff947747b3ece2d4ad67812c43`,``],[`app09f786e60af5ecc1ab7d57b0b5885aff54d01a98`,``],[`appdef55a6ff56137296d24352c10e18aca0b9c3ea6`,``],[1,`content`],[1,`content-inner`],[`id`,`idempotency-keys`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/`],[`appAnchor`,``,`id`,`prerequisites`],[`href`,`/security/authentication#issue-tokens-to-the-mobile-app`],[`routerLink`,`/data/drizzle`],[`href`,`/reliability/idempotency#store-keys-in-postgresql`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`language-bash`],[`appAnchor`,``,`id`,`make-the-payment-endpoint-idempotent`],[`href`,`/reliability/idempotency#tune-ttls-and-failure-handling`],[`appAnchor`,``,`id`,`send-keys-from-the-mobile-app`],[`appAnchor`,``,`id`,`store-keys-in-postgresql`],[1,`language-sql`],[1,`info`],[`href`,`/reliability/idempotency#the-store-contract`],[`appAnchor`,``,`id`,`store-keys-in-redis-instead`],[`appAnchor`,``,`id`,`encrypt-stored-receipts`],[`appAnchor`,``,`id`,`pay-through-graphql`],[1,`language-graphql`],[1,`language-json`],[`appAnchor`,``,`id`,`deduplicate-orderpaid-events`],[`href`,`/microservices/basics#event-based`],[`appAnchor`,``,`id`,`tune-ttls-and-failure-handling`],[`href`,`/reliability/outbox#prerequisites`],[`appAnchor`,``,`id`,`try-it`],[`appAnchor`,``,`id`,`testing`],[`href`,`/fundamentals/testing#end-to-end-testing`],[`appAnchor`,``,`id`,`production-checklist`],[`appAnchor`,``,`id`,`the-store-contract`],[`appAnchor`,``,`id`,`reference`],[`appAnchor`,``,`id`,`module-options`],[`href`,`/reliability/idempotency#make-the-payment-endpoint-idempotent`],[`href`,`/reliability/idempotency#encrypt-stored-receipts`],[`appAnchor`,``,`id`,`events`],[`appAnchor`,``,`id`,`errors`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/reliability/idempotency.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,26,0)(2,`div`,27)(3,`h3`,28),bT(4,`Idempotency keys`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/idempotency`),cf(),bT(8,` makes routes, GraphQL mutations and message handlers safe to retry: each `),Aa(9,`code`),bT(10,`Idempotency-Key`),cf(),bT(11,` runs the handler once, and retries get its result.`),cf(),Aa(12,`p`),bT(13,`A customer of an online store for cat food and supplies pays for salmon kibble and cat litter in the store's mobile app, on a phone on a train. The app sends `),Aa(14,`code`),bT(15,`POST /orders/ord_1001/pay`),cf(),bT(16,`. The server charges the card through the payment provider, but the response never reaches the phone. The app can't tell a lost request from a lost response, so it retries. Without protection, the retry goes wrong in one of two ways:`),cf(),Aa(17,`ul`)(18,`li`),bT(19,`It arrives after the first request finished. The order is already `),Aa(20,`code`),bT(21,`paid`),cf(),bT(22,`, so the customer gets an error for a payment that went through.`),cf(),Aa(23,`li`),bT(24,`It arrives while the first request is still waiting for the payment provider. Both requests pass the "is the order still pending?" check, and the card is charged twice.`),cf()(),Aa(25,`p`),bT(26,`An `),Aa(27,`strong`),bT(28,`idempotency key`),cf(),bT(29,` fixes both. The client generates a unique key for each payment attempt and sends it in the `),Aa(30,`code`),bT(31,`Idempotency-Key`),cf(),bT(32,` header with every retry. The server runs the handler once per key, stores the result, and answers every retry with that result. `),Aa(33,`code`),bT(34,`@nestjs/idempotency`),cf(),bT(35,` implements this for HTTP routes, GraphQL mutations and microservice handlers with one decorator, `),Aa(36,`code`),bT(37,`@Idempotent()`),cf(),bT(38,`. Its HTTP behavior follows the IETF `),Aa(39,`a`,29),bT(40,`Idempotency-Key header draft`),cf(),bT(41,`.`),cf(),Aa(42,`p`),bT(43,`In this tutorial, you'll make the payment endpoint idempotent, teach the mobile app to retry safely, move the keys to PostgreSQL (or to Redis), encrypt the stored receipts, protect the GraphQL mutation, and deduplicate the `),Aa(44,`code`),bT(45,`order.paid`),cf(),bT(46,` events that the shipping service consumes.`),cf(),Aa(47,`h4`,30)(48,`span`),bT(49,`Prerequisites`),cf()(),Aa(50,`p`),bT(51,`This tutorial starts from the store's order API, which already has:`),cf(),Aa(52,`ul`)(53,`li`),bT(54,`An `),Aa(55,`code`),bT(56,`OrdersModule`),cf(),bT(57,` with an `),Aa(58,`code`),bT(59,`OrdersService`),cf(),bT(60,` and an `),Aa(61,`code`),bT(62,`OrdersController`),cf(),bT(63,`. An `),Aa(64,`code`),bT(65,`Order`),cf(),bT(66,` has an `),Aa(67,`code`),bT(68,`id`),cf(),bT(69,`, a `),Aa(70,`code`),bT(71,`userId`),cf(),bT(72,`, `),Aa(73,`code`),bT(74,`items`),cf(),bT(75,`, a `),Aa(76,`code`),bT(77,`total`),cf(),bT(78,` in cents, and a `),Aa(79,`code`),bT(80,`status`),cf(),bT(81,` of `),Aa(82,`code`),bT(83,`'pending'`),cf(),bT(84,`, `),Aa(85,`code`),bT(86,`'paid'`),cf(),bT(87,`, `),Aa(88,`code`),bT(89,`'shipped'`),cf(),bT(90,` or `),Aa(91,`code`),bT(92,`'refunded'`),cf(),bT(93,`.`),cf(),Aa(94,`li`),bT(95,`A `),Aa(96,`code`),bT(97,`PaymentProviderClient`),cf(),bT(98,` that wraps the payment provider's SDK. It throws a 402 `),Aa(99,`code`),bT(100,`HttpException`),cf(),bT(101,` when a card is declined, and a `),Aa(102,`code`),bT(103,`ServiceUnavailableException`),cf(),bT(104,` (503) when the provider is down.`),cf(),Aa(105,`li`),bT(106,`An `),Aa(107,`code`),bT(108,`AuthGuard`),cf(),bT(109,` that validates the bearer token and sets `),Aa(110,`code`),bT(111,`req.user`),cf(),bT(112,` (see `),Aa(113,`a`,31),bT(114,`Authentication`),cf(),bT(115,`), plus a `),Aa(116,`code`),bT(117,`@CurrentUser()`),cf(),bT(118,` parameter decorator that reads it.`),cf(),Aa(119,`li`),bT(120,`A global `),Aa(121,`code`),bT(122,`ValidationPipe`),cf(),bT(123,`, and a TCP client for the shipping service, registered as `),Aa(124,`code`),bT(125,`SHIPPING_SERVICE`),cf(),bT(126,`.`),cf(),Aa(127,`li`),bT(128,`Its data in PostgreSQL, through Drizzle, with the database registered by `),Aa(129,`code`),bT(130,`@nestjs/drizzle`),cf(),bT(131,` (see `),Aa(132,`a`,32),bT(133,`Drizzle`),cf(),bT(134,`). Using TypeORM? `),Aa(135,`a`,33),bT(136,`Store keys in PostgreSQL`),cf(),bT(137,` ends with the store for TypeORM.`),cf()(),Aa(138,`p`),bT(139,`This is the method we need to protect:`),cf(),Aa(140,`app-copy-button`,34)(141,`span`,35),bT(142),LT(143,`extension`),Wa(144,`app-tabs`,null,1),cf(),Aa(146,`pre`)(147,`code`,36),bT(148,`
async pay(orderId: string, user: User, dto: PayOrderDto): Promise<PaymentReceipt> {
  const order = this.ordersRepository.findOwned(orderId, user.id);
  if (order.status !== 'pending') {
    throw new ConflictException(\`Order \${order.id} is already \${order.status}\`);
  }
  const charge = await this.paymentProviderClient.charge({
    amount: order.total,
    paymentMethod: dto.paymentMethod,
    reference: order.id,
  });
  this.ordersRepository.markPaid(order.id);
  this.shipping.emit('order.paid', {
    eventId: \`order-paid:\${order.id}\`,
    orderId: order.id,
  });

  return {
    orderId: order.id,
    receiptId: charge.id,
    amount: charge.amount,
    cardLast4: charge.cardLast4,
    paidAt: charge.createdAt,
  };
}
`),cf()()(),Aa(149,`p`),bT(150,`The status check can't stop a double charge on its own: two requests that arrive together both see `),Aa(151,`code`),bT(152,`pending`),cf(),bT(153,` before either one reaches `),Aa(154,`code`),bT(155,`markPaid()`),cf(),bT(156,`.`),cf(),Aa(157,`p`),bT(158,`Install the package:`),cf(),Aa(159,`pre`)(160,`code`,37),bT(161,`
$ npm i --save @nestjs/idempotency
`),cf()(),Aa(162,`h4`,38)(163,`span`),bT(164,`Make the payment endpoint idempotent`),cf()(),Aa(165,`p`),bT(166,`Register `),Aa(167,`code`),bT(168,`IdempotencyModule`),cf(),bT(169,` once, in the root module:`),cf(),Aa(170,`app-copy-button`,34)(171,`span`,35),bT(172),LT(173,`extension`),Wa(174,`app-tabs`,null,2),cf(),Aa(176,`pre`)(177,`code`,36),bT(178,`
import { Module } from '@nestjs/common';
import { IdempotencyModule } from '@nestjs/idempotency';
import type { User } from './orders/order.js';
import { OrdersModule } from './orders/orders.module.js';

@Module({
  imports: [
    IdempotencyModule.forRoot({
      // Runs after guards, so req.user is set. Keys never collide across users.
      scope: (req: { user?: User }) => req.user?.id,
    }),
    OrdersModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(179,`p`),bT(180,`The module is global. It registers one app-wide interceptor, which does nothing for handlers that aren't marked with `),Aa(181,`code`),bT(182,`@Idempotent()`),cf(),bT(183,`, so no other route changes behavior.`),cf(),Aa(184,`p`)(185,`code`),bT(186,`scope`),cf(),bT(187,` gives every user's keys their own namespace. Without it, all clients share one namespace, and a key that one user picks could replay another user's receipt. With it, Alice and Bob can both send `),Aa(188,`code`),bT(189,`Idempotency-Key: 1`),cf(),bT(190,` without ever seeing each other's results. Because guards run before interceptors, `),Aa(191,`code`),bT(192,`req.user`),cf(),bT(193,` is already set when `),Aa(194,`code`),bT(195,`scope`),cf(),bT(196,` runs, and an unauthenticated request is rejected before it can use up a key. If a signed-in user calls an `),Aa(197,`code`),bT(198,`@Idempotent()`),cf(),bT(199,` handler that has no `),Aa(200,`code`),bT(201,`scope`),cf(),bT(202,`, the module logs a warning, once for each handler. Where one shared namespace is deliberate, such as a webhook keyed by the provider's event ids, set `),Aa(203,`code`),bT(204,`scope: false`),cf(),bT(205,`.`),cf(),Aa(206,`p`),bT(207,`Now mark the handler:`),cf(),Aa(208,`app-copy-button`,34)(209,`span`,35),bT(210),LT(211,`extension`),Wa(212,`app-tabs`,null,3),cf(),Aa(214,`pre`)(215,`code`,36),bT(216,`
import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { Idempotent } from '@nestjs/idempotency';
import { AuthGuard } from '../auth/auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { PayOrderDto } from './dto/pay-order.dto.js';
import type { User } from './order.js';
import { OrdersService } from './orders.service.js';

@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post(':id/pay')
  @Idempotent({ required: true })
  pay(
    @Param('id') id: string,
    @Body() dto: PayOrderDto,
    @CurrentUser() user: User,
  ) {
    return this.ordersService.pay(id, user, dto);
  }
}
`),cf()()(),Aa(217,`p`)(218,`code`),bT(219,`required: true`),cf(),bT(220,` rejects a request without a key with a 400 `),Aa(221,`code`),bT(222,`IDEMPOTENCY_KEY_REQUIRED`),cf(),bT(223,` error, before the handler runs. A payment without a key can't be retried safely, so it's better to refuse it than to charge the card unprotected.`),cf(),Aa(224,`p`),bT(225,`Here's what happens to a request that carries a key:`),cf(),Aa(226,`ol`)(227,`li`),bT(228,`The interceptor computes a `),Aa(229,`strong`),bT(230,`fingerprint`),cf(),bT(231,` of the request: a SHA-256 hash of the scope, the method, the URL (which includes the order id) and the body, with object keys sorted.`),cf(),Aa(232,`li`),bT(233,`It atomically takes a lock on the `),Aa(234,`strong`),bT(235,`record key`),cf(),Aa(236,`code`),bT(237,`<scope>:<key>`),cf(),bT(238,`, for example `),Aa(239,`code`),bT(240,`usr_alice:5e0f6d0e-…`),cf(),bT(241,`. If a record already exists, the handler doesn't run (see the table below). While the handler runs, the interceptor keeps renewing the lock, so a slow handler never loses it to a retry.`),cf(),Aa(242,`li`),bT(243,`The handler runs. When it finishes, the lock becomes a completed record that holds the response: the status code, the body, and the headers from a short allowlist (`),Aa(244,`code`),bT(245,`Location`),cf(),bT(246,`, `),Aa(247,`code`),bT(248,`Content-Type`),cf(),bT(249,`, `),Aa(250,`code`),bT(251,`Content-Language`),cf(),bT(252,`, `),Aa(253,`code`),bT(254,`Content-Location`),cf(),bT(255,`, `),Aa(256,`code`),bT(257,`ETag`),cf(),bT(258,` and `),Aa(259,`code`),bT(260,`Last-Modified`),cf(),bT(261,`) if the handler or a middleware set them. They describe the stored body, so a retry sent with another `),Aa(262,`code`),bT(263,`Accept-Language`),cf(),bT(264,` still gets the stored body's `),Aa(265,`code`),bT(266,`Content-Language`),cf(),bT(267,`. Cookies, CORS and rate-limit headers belong to the original request and are never replayed.`),cf()(),Aa(268,`p`),bT(269,`Every later request with the same key gets one of these answers:`),cf(),Aa(270,`table`)(271,`thead`)(272,`tr`)(273,`th`),bT(274,`Situation`),cf(),Aa(275,`th`),bT(276,`Response`),cf()()(),Aa(277,`tbody`)(278,`tr`)(279,`td`),bT(280,`The first request is still running`),cf(),Aa(281,`td`),bT(282,`409 `),Aa(283,`code`),bT(284,`IDEMPOTENCY_KEY_IN_USE`),cf(),bT(285,`, with a `),Aa(286,`code`),bT(287,`Retry-After`),cf(),bT(288,` header`),cf()(),Aa(289,`tr`)(290,`td`),bT(291,`The first request completed`),cf(),Aa(292,`td`),bT(293,`The stored status and body, plus `),Aa(294,`code`),bT(295,`Idempotent-Replayed: true`),cf(),bT(296,`. The handler doesn't run.`),cf()(),Aa(297,`tr`)(298,`td`),bT(299,`Same key, but a different body or URL`),cf(),Aa(300,`td`),bT(301,`422 `),Aa(302,`code`),bT(303,`IDEMPOTENCY_KEY_REUSED`),cf()()()()(),Aa(304,`p`),bT(305,`Errors can be stored too. `),Aa(306,`a`,39),bT(307,`Tune TTLs and failure handling`),cf(),bT(308,` covers which ones.`),cf(),Aa(309,`p`),bT(310,`Because the interceptor is global, it runs outside the interceptors of your controllers and handlers. The stored body is exactly what the client received, after serializers and other interceptors ran, and a replay skips all of them. Pipes run inside it, so a `),Aa(311,`code`),bT(312,`ValidationPipe`),cf(),bT(313,` 400 is stored like any other client error. Other global interceptors are a different matter, as the production checklist explains.`),cf(),Aa(314,`p`),bT(315,`Until you `),Aa(316,`a`,33),bT(317,`store keys in PostgreSQL`),cf(),bT(318,`, records live in memory, in the default `),Aa(319,`code`),bT(320,`InMemoryIdempotencyStore`),cf(),bT(321,`. That's fine for a single instance in development, but every instance of the API has its own records, and they're lost on restart. When `),Aa(322,`code`),bT(323,`NODE_ENV`),cf(),bT(324,` is `),Aa(325,`code`),bT(326,`production`),cf(),bT(327,`, the app refuses to start this way, with an error that says how to register a store.`),cf(),Aa(328,`h4`,40)(329,`span`),bT(330,`Send keys from the mobile app`),cf()(),Aa(331,`p`),bT(332,`The server can only deduplicate what the client sends consistently. The app follows two rules:`),cf(),Aa(333,`ul`)(334,`li`),bT(335,`It creates the key when the customer taps `),Aa(336,`strong`),bT(337,`Pay`),cf(),bT(338,`, not once per request. Every retry of that payment sends the same key, even after the app is killed and restarted, so the key is saved with the pending payment.`),cf(),Aa(339,`li`),bT(340,`It creates a new key only for a new decision by the customer, such as choosing another card after a decline. Sending an old key with a different body is a 422.`),cf()(),Aa(341,`app-copy-button`,34)(342,`span`,35),bT(343),LT(344,`extension`),Wa(345,`app-tabs`,null,4),cf(),Aa(347,`pre`)(348,`code`,36),bT(349,`
export interface Receipt {
  orderId: string;
  receiptId: string;
  amount: number;
  cardLast4: string;
  paidAt: string;
}

export interface PendingPayment {
  orderId: string;
  paymentMethod: string;
  idempotencyKey: string;
}

export class PaymentError extends Error {
  constructor(
    readonly status: number,
    readonly body: { code?: string; message?: string },
  ) {
    super(body.message ?? \`Payment failed with status \${status}\`);
  }
}

// Call when the customer taps "Pay", and save the result with the order
// (for example in AsyncStorage). Retries, even after an app restart, reuse it.
export function startPayment(orderId: string, paymentMethod: string): PendingPayment {
  return { orderId, paymentMethod, idempotencyKey: crypto.randomUUID() };
}

export async function payOrder(
  apiUrl: string,
  token: string,
  payment: PendingPayment,
  maxAttempts = 5,
): Promise<Receipt> {
  for (let attempt = 1; ; attempt++) {
    const backoff = 250 * 2 ** (attempt - 1);
    let res: Response;
    try {
      res = await fetch(\`\${apiUrl}/orders/\${payment.orderId}/pay\`, {
        method: 'POST',
        headers: {
          Authorization: \`Bearer \${token}\`,
          'Content-Type': 'application/json',
          'Idempotency-Key': payment.idempotencyKey,
        },
        body: JSON.stringify({ paymentMethod: payment.paymentMethod }),
        signal: AbortSignal.timeout(15_000),
      });
    } catch (err) {
      // No response: the card may or may not have been charged. Same key, try again.
      if (attempt >= maxAttempts) {
        throw err;
      }
      await sleep(backoff);
      continue;
    }
    if (res.ok) {
      return res.json(); // the first result, even if Idempotent-Replayed: true
    }
    const body = await res.json().catch(() => ({})); // a proxy's 502 page isn't JSON
    const retryable =
      res.status >= 500 || // the server released the key
      res.status === 429 ||
      body.code === 'IDEMPOTENCY_KEY_IN_USE'; // the first attempt is still running
    if (!retryable || attempt >= maxAttempts) {
      throw new PaymentError(res.status, body);
    }
    const retryAfter = Number(res.headers.get('Retry-After'));
    await sleep(retryAfter > 0 ? retryAfter * 1000 : backoff);
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
`),cf()()(),Aa(350,`p`)(351,`code`),bT(352,`crypto.randomUUID()`),cf(),bT(353,` is available in browsers and Node.js. In React Native, use a UUID library, such as `),Aa(354,`code`),bT(355,`randomUUID()`),cf(),bT(356,` from `),Aa(357,`code`),bT(358,`expo-crypto`),cf(),bT(359,`.`),cf(),Aa(360,`p`),bT(361,`These are the responses the app can get, and what they mean for a retry:`),cf(),Aa(362,`table`)(363,`thead`)(364,`tr`)(365,`th`),bT(366,`Response`),cf(),Aa(367,`th`),bT(368,`Meaning`),cf(),Aa(369,`th`),bT(370,`Retry with the same key?`),cf()()(),Aa(371,`tbody`)(372,`tr`)(373,`td`),bT(374,`No response (network error, timeout)`),cf(),Aa(375,`td`),bT(376,`The card may or may not have been charged`),cf(),Aa(377,`td`),bT(378,`Yes`),cf()(),Aa(379,`tr`)(380,`td`),bT(381,`2xx`),cf(),Aa(382,`td`),bT(383,`Done. With `),Aa(384,`code`),bT(385,`Idempotent-Replayed: true`),cf(),bT(386,`, it's the first attempt's result`),cf(),Aa(387,`td`),bT(388,`No, show the receipt`),cf()(),Aa(389,`tr`)(390,`td`),bT(391,`409 with the code `),Aa(392,`code`),bT(393,`IDEMPOTENCY_KEY_IN_USE`),cf()(),Aa(394,`td`),bT(395,`The first attempt is still running`),cf(),Aa(396,`td`),bT(397,`Yes, after `),Aa(398,`code`),bT(399,`Retry-After`),cf(),bT(400,` seconds`),cf()(),Aa(401,`tr`)(402,`td`),bT(403,`5xx`),cf(),Aa(404,`td`),bT(405,`The attempt failed, and the server released the key`),cf(),Aa(406,`td`),bT(407,`Yes, with backoff`),cf()(),Aa(408,`tr`)(409,`td`),bT(410,`429`),cf(),Aa(411,`td`),bT(412,`Rate limited before the handler ran`),cf(),Aa(413,`td`),bT(414,`Yes, after `),Aa(415,`code`),bT(416,`Retry-After`),cf(),bT(417,` seconds`),cf()(),Aa(418,`tr`)(419,`td`),bT(420,`422 `),Aa(421,`code`),bT(422,`IDEMPOTENCY_KEY_REUSED`),cf()(),Aa(423,`td`),bT(424,`A bug: the key was reused for a different request`),cf(),Aa(425,`td`),bT(426,`No`),cf()(),Aa(427,`tr`)(428,`td`),bT(429,`Any other 4xx: 400, 402 (declined), 404, 409 (already paid)`),cf(),Aa(430,`td`),bT(431,`Final. Every retry with this key gets the same answer`),cf(),Aa(432,`td`),bT(433,`No. Show the error; a new attempt gets a new key`),cf()()()(),Aa(434,`p`),bT(435,`Check `),Aa(436,`code`),bT(437,`code`),cf(),bT(438,`, not just the status. A 409 can also mean that the order is already paid, and that one is final.`),cf(),Aa(439,`h4`,41)(440,`span`),bT(441,`Store keys in PostgreSQL`),cf()(),Aa(442,`p`),bT(443,`The in-memory store isn't enough in production. Its records vanish whenever the process stops, on every deploy or replaced container, so a retry that arrives afterwards runs the payment again. And once the API runs on more than one instance, a retry that lands on another instance wouldn't find the record, and two instances could both take the lock. The records need a shared store that can "create unless it exists" atomically.`),cf(),Aa(444,`p`)(445,`code`),bT(446,`@nestjs/idempotency`),cf(),bT(447,` doesn't ship one. It defines the contract, the `),Aa(448,`code`),bT(449,`IdempotencyStore`),cf(),bT(450,` interface, and you implement it in a provider of your app, with the database or the Redis client it already has. The interface has four methods. Each one takes the record key and an owner first, and durations arrive in whole milliseconds:`),cf(),Aa(451,`ul`)(452,`li`)(453,`code`),bT(454,`acquire(key, owner, fingerprint, lockTtl)`),cf(),bT(455,` creates the lock, or returns the existing record: in flight, or completed with its response. It must be atomic: of any number of concurrent calls for a free key, exactly one may win.`),cf(),Aa(456,`li`)(457,`code`),bT(458,`complete(key, owner, response, ttl)`),cf(),bT(459,` turns the lock into a completed record, if `),Aa(460,`code`),bT(461,`owner`),cf(),bT(462,` still holds it.`),cf(),Aa(463,`li`)(464,`code`),bT(465,`release(key, owner)`),cf(),bT(466,` deletes the lock, if `),Aa(467,`code`),bT(468,`owner`),cf(),bT(469,` still holds it, so a retry can run the handler again.`),cf(),Aa(470,`li`)(471,`code`),bT(472,`extend(key, owner, lockTtl)`),cf(),bT(473,` resets the lock's expiry to `),Aa(474,`code`),bT(475,`lockTtl`),cf(),bT(476,` from now, if `),Aa(477,`code`),bT(478,`owner`),cf(),bT(479,` still holds it. The interceptor calls it every `),Aa(480,`code`),bT(481,`lockTtl / 3`),cf(),bT(482,` while the handler runs and its result is being stored.`),cf()(),Aa(483,`p`)(484,`code`),bT(485,`owner`),cf(),bT(486,` is a random id for each attempt, known as a fencing token. If an attempt stops renewing its lock (its instance crashed, say) and a retry takes over after `),Aa(487,`code`),bT(488,`lockTtl`),cf(),bT(489,`, the old attempt's `),Aa(490,`code`),bT(491,`extend()`),cf(),bT(492,`, `),Aa(493,`code`),bT(494,`complete()`),cf(),bT(495,` or `),Aa(496,`code`),bT(497,`release()`),cf(),bT(498,` does nothing, instead of overwriting the retry's record. So "if `),Aa(499,`code`),bT(500,`owner`),cf(),bT(501,` still holds it" has to be checked in the same atomic operation that writes: checked in a separate read first, a takeover could slip in between.`),cf(),Aa(502,`p`),bT(503,`This section shows that store twice: first with Drizzle, which is the tutorial's path, and then, under "With TypeORM" at the end of the section, the same store for an application whose ORM is TypeORM. Take one of the two.`),cf(),Aa(504,`p`),bT(505,`The store keeps its data in PostgreSQL, with Drizzle, so the records get a table in its Drizzle schema:`),cf(),Aa(506,`app-copy-button`,34)(507,`span`,35),bT(508),LT(509,`extension`),Wa(510,`app-tabs`,null,5),cf(),Aa(512,`pre`)(513,`code`,36),bT(514,`
import type { IdempotencyStoredPayload } from '@nestjs/idempotency';
import { bigint, index, json, pgTable, text } from 'drizzle-orm/pg-core';

/** One row per idempotency record: an in-flight lock, or a completed response. */
export const idempotencyKeys = pgTable(
  'idempotency_keys',
  {
    // SHA-256 of the record key: keys can be longer than an index entry allows.
    keyHash: text('key_hash').primaryKey(),
    key: text('key').notNull(),
    fingerprint: text('fingerprint').notNull(),
    // The attempt holding the lock; null once the record is completed.
    owner: text('owner'),
    // null while in flight. json, not jsonb: jsonb rejects "\\u0000" in strings.
    response: json('response').$type<IdempotencyStoredPayload>(),
    // Epoch milliseconds.
    expiresAt: bigint('expires_at', { mode: 'number' }).notNull(),
  },
  (table) => [index('idempotency_keys_expires_at_idx').on(table.expiresAt)],
);
`),cf()()(),Aa(515,`p`),bT(516,`The primary key is a SHA-256 hash of the record key, because record keys (a scope, the client's key and, for GraphQL, the field's path) can be longer than PostgreSQL allows in an index entry. The response is `),Aa(517,`code`),bT(518,`json`),cf(),bT(519,` rather than `),Aa(520,`code`),bT(521,`jsonb`),cf(),bT(522,`, because `),Aa(523,`code`),bT(524,`jsonb`),cf(),bT(525,` rejects a `),Aa(526,`code`),bT(527,`\\u0000`),cf(),bT(528,` inside a string, and a response body can contain one. Generate the migration with drizzle-kit, and apply it with `),Aa(529,`code`),bT(530,`npx drizzle-kit migrate`),cf(),bT(531,` as usual:`),cf(),Aa(532,`pre`)(533,`code`,37),bT(534,`
$ npx drizzle-kit generate --name=idempotency
`),cf()(),Aa(535,`app-copy-button`,34)(536,`span`,35),bT(537),LT(538,`extension`),Wa(539,`app-tabs`,null,6),cf(),Aa(541,`pre`)(542,`code`,42),bT(543,`
CREATE TABLE "idempotency_keys" (
	"key_hash" text PRIMARY KEY NOT NULL,
	"key" text NOT NULL,
	"fingerprint" text NOT NULL,
	"owner" text,
	"response" json,
	"expires_at" bigint NOT NULL
);
--> statement-breakpoint
CREATE INDEX "idempotency_keys_expires_at_idx" ON "idempotency_keys" USING btree ("expires_at");
`),cf()()(),Aa(544,`p`),bT(545,`The store implements each method with Drizzle's query builder. It injects the database with `),Aa(546,`code`),bT(547,`@InjectDrizzle()`),cf(),bT(548,` from `),Aa(549,`code`),bT(550,`@nestjs/drizzle`),cf(),bT(551,`, and the constructor registers the store with `),Aa(552,`code`),bT(553,`IdempotencyStorage`),cf(),bT(554,`, a registry that `),Aa(555,`code`),bT(556,`IdempotencyModule`),cf(),bT(557,` exports:`),cf(),Aa(558,`app-copy-button`,34)(559,`span`,35),bT(560),LT(561,`extension`),Wa(562,`app-tabs`,null,7),cf(),Aa(564,`pre`)(565,`code`,36),bT(566,`
import { Injectable } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import {
  IdempotencyStorage,
  type IdempotencyAcquireResult,
  type IdempotencyStore,
  type IdempotencyStoredPayload,
} from '@nestjs/idempotency';
import { and, eq, gt, inArray, lte } from 'drizzle-orm';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createHash } from 'node:crypto';
import { idempotencyKeys } from '../database/schema.js';

export type Database = NodePgDatabase;

const { keyHash, owner: ownerColumn, expiresAt } = idempotencyKeys;

@Injectable()
export class DrizzleIdempotencyStore implements IdempotencyStore {
  constructor(
    @InjectDrizzle() private readonly db: Database,
    storage: IdempotencyStorage,
  ) {
    storage.registerSource(this);
  }

  async acquire(
    key: string,
    owner: string,
    fingerprint: string,
    lockTtl: number,
  ): Promise<IdempotencyAcquireResult> {
    const hash = hashOf(key);
    // A second round only happens when the row was released or expired
    // between the two statements below.
    for (let attempt = 0; attempt < 5; attempt++) {
      const now = Date.now();
      const lock = { fingerprint, owner, response: null, expiresAt: now + lockTtl };
      // Insert the lock, or take over an expired row. Of many concurrent
      // callers, PostgreSQL lets one write, and re-checks \`setWhere\` for the
      // others against the winner's row: they get no row back.
      const taken = await this.db
        .insert(idempotencyKeys)
        .values({ keyHash: hash, key, ...lock })
        .onConflictDoUpdate({
          target: keyHash,
          set: lock,
          setWhere: lte(expiresAt, now),
        })
        .returning({ keyHash });
      if (taken.length) {
        return { state: 'acquired' };
      }

      // Someone else holds the key: report their lock or record.
      const [row] = await this.db
        .select()
        .from(idempotencyKeys)
        .where(eq(keyHash, hash));
      if (row && row.expiresAt > now) {
        return row.response === null
          ? { state: 'in-flight', fingerprint: row.fingerprint }
          : { state: 'completed', fingerprint: row.fingerprint, response: row.response };
      }
    }
    throw new Error(\`The idempotency record for "\${key}" kept changing; try again\`);
  }

  async complete(
    key: string,
    owner: string,
    response: IdempotencyStoredPayload,
    ttl: number,
  ): Promise<boolean> {
    const now = Date.now();
    const done = await this.db
      .update(idempotencyKeys)
      .set({ owner: null, response, expiresAt: now + ttl })
      .where(this.ownedBy(key, owner, now))
      .returning({ keyHash });
    return done.length === 1;
  }

  async release(key: string, owner: string): Promise<boolean> {
    const released = await this.db
      .delete(idempotencyKeys)
      .where(this.ownedBy(key, owner, Date.now()))
      .returning({ keyHash });
    return released.length === 1;
  }

  async extend(key: string, owner: string, lockTtl: number): Promise<boolean> {
    const now = Date.now();
    const extended = await this.db
      .update(idempotencyKeys)
      .set({ expiresAt: now + lockTtl })
      .where(this.ownedBy(key, owner, now))
      .returning({ keyHash });
    return extended.length === 1;
  }

  /**
   * Deletes up to \`limit\` expired rows, for a scheduled job. Expired rows are
   * already ignored, and reused by the next request with the same key.
   */
  async prune(limit = 1000): Promise<number> {
    const now = Date.now();
    const expired = this.db
      .select({ keyHash })
      .from(idempotencyKeys)
      .where(lte(expiresAt, now))
      .limit(limit);
    const deleted = await this.db
      .delete(idempotencyKeys)
      // Checks the expiry again: a row taken over since the subquery read it stays.
      .where(and(inArray(keyHash, expired), lte(expiresAt, now)))
      .returning({ keyHash });
    return deleted.length;
  }

  /** The caller's lock, if it still holds it and it hasn't expired. */
  private ownedBy(key: string, owner: string, now: number) {
    return and(eq(keyHash, hashOf(key)), eq(ownerColumn, owner), gt(expiresAt, now));
  }
}

function hashOf(key: string) {
  return createHash('sha256').update(key).digest('hex');
}
`),cf()()(),Aa(567,`p`),bT(568,`The database is typed as `),Aa(569,`code`),bT(570,`NodePgDatabase`),cf(),bT(571,`, and the tests below cast their PGlite database to it, since the store only uses the query builder both drivers share. Each method is a single statement that PostgreSQL runs atomically, without a transaction:`),cf(),Aa(572,`ul`)(573,`li`)(574,`code`),bT(575,`acquire()`),cf(),bT(576,` inserts the lock, or takes over an expired row, with one `),Aa(577,`code`),bT(578,`INSERT ... ON CONFLICT DO UPDATE ... WHERE expires_at <= now`),cf(),bT(579,`. When several callers race for a key, PostgreSQL lets one of them write and checks the `),Aa(580,`code`),bT(581,`WHERE`),cf(),bT(582,` again for the others against the winner's row, so they get no row back and read the winner's lock instead. If that row disappears in between (released, or expired), `),Aa(583,`code`),bT(584,`acquire()`),cf(),bT(585,` goes round again.`),cf(),Aa(586,`li`)(587,`code`),bT(588,`complete()`),cf(),bT(589,`, `),Aa(590,`code`),bT(591,`extend()`),cf(),bT(592,` and `),Aa(593,`code`),bT(594,`release()`),cf(),bT(595,` check the owner, and that the lock hasn't expired, in the `),Aa(596,`code`),bT(597,`WHERE`),cf(),bT(598,` of the statement that writes. They count the rows that `),Aa(599,`code`),bT(600,`returning()`),cf(),bT(601,` gives back, which works the same on every Drizzle driver.`),cf(),Aa(602,`li`),bT(603,`Expired rows are ignored at once, and the next request with the same key reuses its row. To delete the rest, call `),Aa(604,`code`),bT(605,`prune()`),cf(),bT(606,` from a scheduled job, for example with `),Aa(607,`code`),bT(608,`@Interval()`),cf(),bT(609,` from `),Aa(610,`code`),bT(611,`@nestjs/schedule`),cf(),bT(612,`. It checks the expiry again in the `),Aa(613,`code`),bT(614,`DELETE`),cf(),bT(615,` itself, so a row that a retry took over in the meantime stays.`),cf()(),Aa(616,`p`),bT(617,`Expiry times come from each instance's clock (`),Aa(618,`code`),bT(619,`Date.now()`),cf(),bT(620,`), so keep the clocks in sync, as NTP does. Every idempotent request adds one or two statements to the connection pool, plus an `),Aa(621,`code`),bT(622,`UPDATE`),cf(),bT(623,` every `),Aa(624,`code`),bT(625,`lockTtl / 3`),cf(),bT(626,` while its handler runs.`),cf(),Aa(627,`p`),bT(628,`The store is an ordinary provider. Register the database with `),Aa(629,`code`),bT(630,`DrizzleModule`),cf(),bT(631,` (see `),Aa(632,`a`,32),bT(633,`Drizzle`),cf(),bT(634,`), and add the store to the providers of `),Aa(635,`code`),bT(636,`AppModule`),cf(),bT(637,`:`),cf(),Aa(638,`app-copy-button`,34)(639,`span`,35),bT(640),LT(641,`extension`),Wa(642,`app-tabs`,null,8),cf(),Aa(644,`pre`)(645,`code`,36),bT(646,`
import { Module } from '@nestjs/common';
import { DrizzleModule } from '@nestjs/drizzle';
import { IdempotencyModule } from '@nestjs/idempotency';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DrizzleIdempotencyStore } from './idempotency/drizzle-idempotency.store.js';
import type { User } from './orders/order.js';
import { OrdersModule } from './orders/orders.module.js';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL! }),
    }),
    IdempotencyModule.forRoot({
      scope: (req: { user?: User }) => req.user?.id,
    }),
    OrdersModule,
  ],
  // Registers itself with IdempotencyStorage when Nest creates it.
  providers: [DrizzleIdempotencyStore],
})
export class AppModule {}
`),cf()()(),Aa(647,`blockquote`,43)(648,`strong`),bT(649,`Hint`),cf(),bT(650,` The app reads `),Aa(651,`code`),bT(652,`DATABASE_URL`),cf(),bT(653,`, and, once receipts are encrypted, `),Aa(654,`code`),bT(655,`IDEMPOTENCY_KEYS`),cf(),bT(656,`, from `),Aa(657,`code`),bT(658,`process.env`),cf(),bT(659,`. An application loads its environment through `),Aa(660,`code`),bT(661,`@nestjs/config`),cf(),bT(662,`, with a validation schema that stops startup when a variable is missing, and injects `),Aa(663,`code`),bT(664,`ConfigService`),cf(),bT(665,` into these factories instead.
`),cf(),Aa(666,`p`),bT(667,`At startup, the module logs the store it uses, `),Aa(668,`code`),bT(669,`IdempotencyStorage: DrizzleIdempotencyStore`),cf(),bT(670,`, and then it stops taking registrations:`),cf(),Aa(671,`ul`)(672,`li`),bT(673,`An app has one store. A second `),Aa(674,`code`),bT(675,`registerSource()`),cf(),bT(676,` call throws, naming both classes.`),cf(),Aa(677,`li`),bT(678,`Register from the constructor of a singleton provider. The registry locks when `),Aa(679,`code`),bT(680,`IdempotencyModule`),cf(),bT(681,` initializes, so a store that registers later (from a lifecycle hook, per request, or in a lazy-loaded module) throws instead of being silently ignored.`),cf(),Aa(682,`li`),bT(683,`Without a registered store, the module keeps records in memory. In production (`),Aa(684,`code`),bT(685,`NODE_ENV=production`),cf(),bT(686,`), it refuses to start that way, unless you set `),Aa(687,`code`),bT(688,`allowInMemoryStorage: true`),cf(),bT(689,`, which accepts that every restart or deploy forgets the records.`),cf()(),Aa(690,`p`),bT(691,`Every store is tested with the same contract suite, which `),Aa(692,`code`),bT(693,`@nestjs/idempotency/testing`),cf(),bT(694,` exports as plain test cases for any test runner. It covers each method, the owner checks, expiry, and, with `),Aa(695,`code`),bT(696,`concurrent`),cf(),bT(697,`, the races that a store that reads and then writes gets wrong. The example project runs it against this store on PGlite, and on PostgreSQL through a `),Aa(698,`code`),bT(699,`pg`),cf(),bT(700,` pool, where 32 callers race for each key on up to 16 connections:`),cf(),Aa(701,`app-copy-button`,34)(702,`span`,35),bT(703),LT(704,`extension`),Wa(705,`app-tabs`,null,9),cf(),Aa(707,`pre`)(708,`code`,36),bT(709,`
import { PGlite } from '@electric-sql/pglite';
import { IdempotencyStorage } from '@nestjs/idempotency';
import { idempotencyStoreContract } from '@nestjs/idempotency/testing';
import { drizzle as drizzlePglite } from 'drizzle-orm/pglite';
import { migrate as migratePglite } from 'drizzle-orm/pglite/migrator';
import { DrizzleIdempotencyStore, type Database } from '../src/idempotency/drizzle-idempotency.store.js';

const migrationsFolder = new URL('../drizzle', import.meta.url).pathname;
// ...
describe('DrizzleIdempotencyStore on PGlite', () => {
  let pglite: PGlite;
  let store: DrizzleIdempotencyStore;

  beforeAll(async () => {
    pglite = new PGlite();
    const db = drizzlePglite({ client: pglite });
    await migratePglite(db, { migrationsFolder }); // npx drizzle-kit migrate
    store = new DrizzleIdempotencyStore(db as unknown as Database, new IdempotencyStorage());
  });
  afterAll(() => pglite.close());

  describe('the IdempotencyStore contract', () => {
    // The store reads Date.now(): fake Date alone, so the driver keeps its timers.
    beforeEach(() => vi.useFakeTimers({ toFake: ['Date'] }));
    afterEach(() => vi.useRealTimers());

    // One store and one table for every case: each case uses keys of its own.
    const cases = idempotencyStoreContract(() => store, {
      advanceTime: (ms) => vi.setSystemTime(Date.now() + ms),
      concurrent: true,
    });
    for (const c of cases) {
      it(c.name, c.run);
    }
  });
  // ...
});
`),cf()()(),Aa(710,`p`)(711,`strong`),bT(712,`With TypeORM.`),cf(),bT(713,` The same store for an application whose ORM is TypeORM, on the same table. Drizzle stays the tutorial's path: take this store instead of the one above, not next to it. The table is an entity, and every column states its type, so that the TypeORM CLI, which loads it without decorator metadata, sees the same schema as the application:`),cf(),Aa(714,`app-copy-button`,34)(715,`span`,35),bT(716),LT(717,`extension`),Wa(718,`app-tabs`,null,10),cf(),Aa(720,`pre`)(721,`code`,36),bT(722,`
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

// The idempotency_keys table of the Drizzle schema in src/database/schema.ts, as an entity.
// Every column states its type, so the entity loads the same with or without emitted
// decorator metadata (the TypeORM CLI runs it through tsx, which emits none).

/** Reads a \`bigint\` column as a number: TypeORM returns it as a string. */
const epochMs = {
  to: (value: number) => value,
  from: (value: string) => Number(value),
};

/** One row per idempotency record: an in-flight lock, or a completed response. */
@Entity('idempotency_keys')
@Index('idempotency_keys_expires_at_idx', ['expiresAt'])
export class IdempotencyKeyEntity {
  // SHA-256 of the record key: keys can be longer than an index entry allows.
  @PrimaryColumn({ type: 'text', name: 'key_hash' })
  keyHash: string;

  @Column({ type: 'text' })
  key: string;

  @Column({ type: 'text' })
  fingerprint: string;

  // The attempt holding the lock; null once the record is completed.
  @Column({ type: 'text', nullable: true })
  owner: string | null;

  // null while in flight. json, not jsonb: jsonb rejects "\\u0000" in strings. An
  // IdempotencyStoredPayload, typed \`object\`: its \`unknown\` body doesn't fit TypeORM's insert types.
  @Column({ type: 'json', nullable: true })
  response: object | null;

  // Epoch milliseconds.
  @Column({ type: 'bigint', name: 'expires_at', transformer: epochMs })
  expiresAt: number;
}
`),cf()()(),Aa(723,`p`),bT(724,`TypeORM returns a `),Aa(725,`code`),bT(726,`bigint`),cf(),bT(727,` column as a string, so a transformer reads `),Aa(728,`code`),bT(729,`expiresAt`),cf(),bT(730,` back as a number. The response column is typed `),Aa(731,`code`),bT(732,`object`),cf(),bT(733,` rather than `),Aa(734,`code`),bT(735,`IdempotencyStoredPayload`),cf(),bT(736,`, because the payload's `),Aa(737,`code`),bT(738,`unknown`),cf(),bT(739,` body doesn't fit TypeORM's insert types; the store casts it when it reads a record. The TypeORM CLI and `),Aa(740,`code`),bT(741,`TypeOrmModule`),cf(),bT(742,` share one set of options, in a data source file:`),cf(),Aa(743,`app-copy-button`,34)(744,`span`,35),bT(745),LT(746,`extension`),Wa(747,`app-tabs`,null,11),cf(),Aa(749,`pre`)(750,`code`,36),bT(751,`
import { DataSource, type DataSourceOptions } from 'typeorm';
import { IdempotencyKeyEntity } from './idempotency-key.entity.js';
import { Idempotency1790321611502 } from './migrations/1790321611502-Idempotency.js';

/** What the application's TypeOrmModule and the TypeORM CLI share. */
export const dataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [IdempotencyKeyEntity],
  migrations: [Idempotency1790321611502],
} satisfies DataSourceOptions;

// The TypeORM CLI's data source: \`migration:generate\` compares the entities with this database.
export default new DataSource(dataSourceOptions);
`),cf()()(),Aa(752,`p`),bT(753,`Generate the migration from the entity, apply it, and check that the entity and the database agree. The CLI needs a TypeScript loader for the data source file; this uses `),Aa(754,`code`),bT(755,`tsx`),cf(),bT(756,`:`),cf(),Aa(757,`pre`)(758,`code`,37),bT(759,`
$ npx tsx ./node_modules/typeorm/cli.js migration:generate src/typeorm/migrations/Idempotency -d src/typeorm/data-source.ts --pretty
Migration /store/src/typeorm/migrations/1790321611502-Idempotency.ts has been generated successfully.
$ npx tsx ./node_modules/typeorm/cli.js migration:run -d src/typeorm/data-source.ts
$ npx tsx ./node_modules/typeorm/cli.js migration:generate src/typeorm/migrations/Check -d src/typeorm/data-source.ts --check
No changes in database schema were found
`),cf()(),Aa(760,`p`),bT(761,`The migration it wrote, `),Aa(762,`code`),bT(763,`1790321611502-Idempotency.ts`),cf(),bT(764,`, is the `),Aa(765,`code`),bT(766,`CREATE TABLE`),cf(),bT(767,` and `),Aa(768,`code`),bT(769,`CREATE INDEX`),cf(),bT(770,` statements of the Drizzle migration, and `),Aa(771,`code`),bT(772,`migrations`),cf(),bT(773,` in the data source lists it. Now the store, under the same rules as the Drizzle one:`),cf(),Aa(774,`app-copy-button`,34)(775,`span`,35),bT(776),LT(777,`extension`),Wa(778,`app-tabs`,null,12),cf(),Aa(780,`pre`)(781,`code`,36),bT(782,`
import { Injectable } from '@nestjs/common';
import {
  IdempotencyStorage,
  type IdempotencyAcquireResult,
  type IdempotencyStore,
  type IdempotencyStoredPayload,
} from '@nestjs/idempotency';
import { createHash } from 'node:crypto';
import { DataSource, MoreThan } from 'typeorm';
import { IdempotencyKeyEntity } from './idempotency-key.entity.js';

/**
 * Keeps idempotency records in PostgreSQL, through TypeORM: the Drizzle
 * store, on the same table. Each method is a single statement, so the
 * guarantees hold with any number of API instances.
 */
@Injectable()
export class TypeOrmIdempotencyStore implements IdempotencyStore {
  constructor(
    private readonly dataSource: DataSource,
    storage: IdempotencyStorage,
  ) {
    storage.registerSource(this);
  }

  async acquire(
    key: string,
    owner: string,
    fingerprint: string,
    lockTtl: number,
  ): Promise<IdempotencyAcquireResult> {
    const hash = hashOf(key);
    // A second round only happens when the row was released or expired
    // between the two statements below.
    for (let attempt = 0; attempt < 5; attempt++) {
      const now = Date.now();
      // Insert the lock, or take over an expired row. Of many concurrent
      // callers, PostgreSQL lets one write, and re-checks the overwrite
      // condition for the others against the winner's row: they get no row back.
      const { raw } = await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(IdempotencyKeyEntity)
        .values({ keyHash: hash, key, fingerprint, owner, response: null, expiresAt: now + lockTtl })
        .orUpdate(['fingerprint', 'owner', 'response', 'expires_at'], ['key_hash'], {
          overwriteCondition: { where: 'idempotency_keys.expires_at <= :now', parameters: { now } },
        })
        .returning(['keyHash'])
        .updateEntity(false)
        .execute();
      if ((raw as unknown[]).length === 1) {
        return { state: 'acquired' };
      }

      // Someone else holds the key: report their lock or record.
      const row = await this.dataSource.manager.findOneBy(IdempotencyKeyEntity, { keyHash: hash });
      if (row && row.expiresAt > now) {
        return row.response === null
          ? { state: 'in-flight', fingerprint: row.fingerprint }
          : { state: 'completed', fingerprint: row.fingerprint, response: row.response as IdempotencyStoredPayload };
      }
    }
    throw new Error(\`The idempotency record for "\${key}" kept changing; try again\`);
  }

  async complete(
    key: string,
    owner: string,
    response: IdempotencyStoredPayload,
    ttl: number,
  ): Promise<boolean> {
    const now = Date.now();
    const { affected } = await this.dataSource.manager.update(IdempotencyKeyEntity, ownedBy(key, owner, now), {
      owner: null,
      response,
      expiresAt: now + ttl,
    });
    return affected === 1;
  }

  async release(key: string, owner: string): Promise<boolean> {
    const { affected } = await this.dataSource.manager.delete(IdempotencyKeyEntity, ownedBy(key, owner, Date.now()));
    return affected === 1;
  }

  async extend(key: string, owner: string, lockTtl: number): Promise<boolean> {
    const now = Date.now();
    const { affected } = await this.dataSource.manager.update(IdempotencyKeyEntity, ownedBy(key, owner, now), {
      expiresAt: now + lockTtl,
    });
    return affected === 1;
  }

  /**
   * Deletes up to \`limit\` expired rows, for a scheduled job. Expired rows are
   * already ignored, and reused by the next request with the same key.
   */
  async prune(limit = 1000): Promise<number> {
    const expired = this.dataSource.manager
      .createQueryBuilder(IdempotencyKeyEntity, 'expired')
      .select('expired.keyHash')
      .where('expired.expiresAt <= :now')
      .limit(limit);
    const { affected } = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(IdempotencyKeyEntity)
      .where(\`key_hash IN (\${expired.getQuery()})\`)
      // Checks the expiry again: a row taken over since the subquery read it stays.
      .andWhere('expires_at <= :now', { now: Date.now() })
      .execute();
    return affected ?? 0;
  }
}

/** The caller's lock, if it still holds it and it hasn't expired. */
function ownedBy(key: string, owner: string, now: number) {
  return { keyHash: hashOf(key), owner, expiresAt: MoreThan(now) };
}

function hashOf(key: string) {
  return createHash('sha256').update(key).digest('hex');
}
`),cf()()(),Aa(783,`ul`)(784,`li`)(785,`strong`)(786,`code`),bT(787,`acquire()`),cf()(),bT(788,` is the same `),Aa(789,`code`),bT(790,`INSERT ... ON CONFLICT DO UPDATE ... WHERE expires_at <= now`),cf(),bT(791,`, through the insert query builder: `),Aa(792,`code`),bT(793,`orUpdate()`),cf(),bT(794,` lists the columns a takeover overwrites, its `),Aa(795,`code`),bT(796,`overwriteCondition`),cf(),bT(797,` option is the `),Aa(798,`code`),bT(799,`WHERE`),cf(),bT(800,`, and `),Aa(801,`code`),bT(802,`returning()`),cf(),bT(803,` gives back a row only to the caller that wrote.`),cf(),Aa(804,`li`)(805,`strong`)(806,`code`),bT(807,`complete()`),cf(),bT(808,`, `),Aa(809,`code`),bT(810,`extend()`),cf(),bT(811,` and `),Aa(812,`code`),bT(813,`release()`),cf()(),bT(814,` are `),Aa(815,`code`),bT(816,`update()`),cf(),bT(817,` and `),Aa(818,`code`),bT(819,`delete()`),cf(),bT(820,` on the entity manager, with the owner and `),Aa(821,`code`),bT(822,`MoreThan(now)`),cf(),bT(823,` in their criteria, and they read `),Aa(824,`code`),bT(825,`affected`),cf(),bT(826,`. Never `),Aa(827,`code`),bT(828,`save()`),cf(),bT(829,`: it reads the row first, so a takeover could slip in between.`),cf(),Aa(830,`li`)(831,`strong`)(832,`code`),bT(833,`prune()`),cf()(),bT(834,` builds the subquery that picks the expired rows with a select query builder, and puts its SQL in the `),Aa(835,`code`),bT(836,`WHERE`),cf(),bT(837,` of the `),Aa(838,`code`),bT(839,`DELETE`),cf(),bT(840,`, next to the expiry check.`),cf()(),Aa(841,`p`),bT(842,`The store injects the `),Aa(843,`code`),bT(844,`DataSource`),cf(),bT(845,` that `),Aa(846,`code`),bT(847,`TypeOrmModule`),cf(),bT(848,` provides. Register the module with the data source's options in place of `),Aa(849,`code`),bT(850,`DrizzleModule`),cf(),bT(851,`, and the store in place of `),Aa(852,`code`),bT(853,`DrizzleIdempotencyStore`),cf(),bT(854,`:`),cf(),Aa(855,`app-copy-button`,34)(856,`span`,35),bT(857),LT(858,`extension`),Wa(859,`app-tabs`,null,13),cf(),Aa(861,`pre`)(862,`code`,36),bT(863,`
import { Module } from '@nestjs/common';
import { IdempotencyModule } from '@nestjs/idempotency';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { User } from '../orders/order.js';
import { OrdersModule } from '../orders/orders.module.js';
import { dataSourceOptions } from './data-source.js';
import { TypeOrmIdempotencyStore } from './typeorm-idempotency.store.js';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // The entity and migration the CLI uses; migrations run on deploy (\`migration:run\`).
      useFactory: () => ({ ...dataSourceOptions, url: process.env.DATABASE_URL }),
    }),
    IdempotencyModule.forRoot({
      scope: (req: { user?: User }) => req.user?.id,
    }),
    OrdersModule,
  ],
  // Registers itself with IdempotencyStorage when Nest creates it.
  providers: [TypeOrmIdempotencyStore],
})
export class AppModule {}
`),cf()()(),Aa(864,`p`),bT(865,`The contract suite runs on it unchanged. TypeORM connects through `),Aa(866,`code`),bT(867,`pg`),cf(),bT(868,`, so the suite needs a PostgreSQL server and is skipped without one. One more case checks that the entity and the migration agree, which is what `),Aa(869,`code`),bT(870,`migration:generate --check`),cf(),bT(871,` checks:`),cf(),Aa(872,`app-copy-button`,34)(873,`span`,35),bT(874),LT(875,`extension`),Wa(876,`app-tabs`,null,14),cf(),Aa(878,`pre`)(879,`code`,36),bT(880,`
import { IdempotencyStorage } from '@nestjs/idempotency';
import { idempotencyStoreContract } from '@nestjs/idempotency/testing';
import { DataSource } from 'typeorm';
import { startPostgres } from '../../../test-support/postgres.js';
import { dataSourceOptions } from '../src/typeorm/data-source.js';
import { TypeOrmIdempotencyStore } from '../src/typeorm/typeorm-idempotency.store.js';
// ...
const { postgres, reason } = await startPostgres();
afterAll(() => postgres?.stop());

describe.skipIf(!postgres)(\`TypeOrmIdempotencyStore on PostgreSQL\${postgres ? '' : \` (skipped: \${reason})\`}\`, () => {
  let dataSource: DataSource;
  let url: string;
  let store: TypeOrmIdempotencyStore;

  beforeAll(async () => {
    url = await postgres!.createDatabase('idempotency_typeorm_store');
    dataSource = await new DataSource({ ...dataSourceOptions, url, poolSize: 16 }).initialize();
    await dataSource.runMigrations(); // npx typeorm migration:run
    store = new TypeOrmIdempotencyStore(dataSource, new IdempotencyStorage());
  });
  afterAll(() => dataSource?.destroy());

  describe('the IdempotencyStore contract', () => {
    // The store reads Date.now(): fake Date alone, so the driver keeps its timers.
    beforeEach(() => vi.useFakeTimers({ toFake: ['Date'] }));
    afterEach(() => vi.useRealTimers());

    // One store and one table for every case: each case uses keys of its own.
    // 32 callers per race, on up to 16 connections.
    const cases = idempotencyStoreContract(() => store, {
      advanceTime: (ms) => vi.setSystemTime(Date.now() + ms),
      concurrent: { callers: 32 },
    });
    for (const c of cases) {
      it(c.name, c.run);
    }
  });

  it('has a migration that matches the entity (what \`migration:generate --check\` checks)', async () => {
    const { upQueries } = await dataSource.driver.createSchemaBuilder().log();
    expect(upQueries.map((query) => query.query)).toEqual([]);
  });
  // ...
});
`),cf()()(),Aa(881,`p`)(882,`code`),bT(883,`startPostgres()`),cf(),bT(884,` is a test helper that creates a throwaway database on a PostgreSQL server, or skips the suite without one. The example also runs two instances of the TypeORM `),Aa(885,`code`),bT(886,`AppModule`),cf(),bT(887,` on one database, one charging while the other answers 409.`),cf(),Aa(888,`blockquote`,43)(889,`strong`),bT(890,`Hint`),cf(),bT(891,` Using Prisma? `),Aa(892,`a`,44),bT(893,`The store contract`),cf(),bT(894,`, after the tutorial, shows how Prisma expresses these statements. Check your store with the same suite.
`),cf(),Aa(895,`h4`,45)(896,`span`),bT(897,`Store keys in Redis instead`),cf()(),Aa(898,`p`),bT(899,`If your API already runs Redis, it can keep the records there instead of in PostgreSQL. Redis suits this store well: a record is a small hash that Redis expires on its own, so there's no pruning job, and a hot key, such as a client retrying one payment every second, costs a round trip to memory instead of a row lock in the primary database. The price is a second store to run, protect and back up, and Redis has to be configured never to evict the records (see the production checklist).`),cf(),Aa(900,`p`),bT(901,`Each method is one Lua script, which Redis runs atomically:`),cf(),Aa(902,`app-copy-button`,34)(903,`span`,35),bT(904),LT(905,`extension`),Wa(906,`app-tabs`,null,15),cf(),Aa(908,`pre`)(909,`code`,36),bT(910,`
import { Inject, Injectable } from '@nestjs/common';
import {
  IdempotencyStorage,
  type IdempotencyAcquireResult,
  type IdempotencyStore,
  type IdempotencyStoredPayload,
} from '@nestjs/idempotency';
import { REDIS } from '../redis/redis.module.js';

/** The one ioredis method this store needs. */
export interface RedisClient {
  eval(script: string, numKeys: number, ...args: (string | number)[]): Promise<unknown>;
}

// Creates the lock if no record exists. Otherwise returns the record, in the
// same round trip.
const ACQUIRE = \`
if redis.call('EXISTS', KEYS[1]) == 0 then
  redis.call('HSET', KEYS[1], 'state', 'in-flight', 'fp', ARGV[1], 'owner', ARGV[2])
  redis.call('PEXPIRE', KEYS[1], ARGV[3])
  return {1}
end
local r = redis.call('HMGET', KEYS[1], 'state', 'fp', 'resp')
return {0, r[1], r[2], r[3]}
\`;

// Turns our lock into a completed record, unless another attempt took it over.
const COMPLETE = \`
if redis.call('HGET', KEYS[1], 'owner') ~= ARGV[1] then return 0 end
redis.call('HSET', KEYS[1], 'state', 'completed', 'resp', ARGV[2])
redis.call('HDEL', KEYS[1], 'owner')
redis.call('PEXPIRE', KEYS[1], ARGV[3])
return 1
\`;

// Deletes the lock, but only if it is still ours.
const RELEASE = \`
if redis.call('HGET', KEYS[1], 'owner') == ARGV[1] then
  return redis.call('DEL', KEYS[1])
end
return 0
\`;

// Renews our lock while the handler runs, but only if it is still ours.
const EXTEND = \`
if redis.call('HGET', KEYS[1], 'owner') ~= ARGV[1] then return 0 end
redis.call('PEXPIRE', KEYS[1], ARGV[2])
return 1
\`;

type AcquireReply =
  | [1]
  | [0, 'in-flight' | 'completed', string, string | null];

@Injectable()
export class RedisIdempotencyStore implements IdempotencyStore {
  constructor(
    @Inject(REDIS) private readonly redis: RedisClient,
    storage: IdempotencyStorage,
  ) {
    storage.registerSource(this);
  }

  async acquire(
    key: string,
    owner: string,
    fingerprint: string,
    lockTtl: number,
  ): Promise<IdempotencyAcquireResult> {
    const reply = (await this.redis.eval(
      ACQUIRE, 1, this.key(key), fingerprint, owner, lockTtl,
    )) as AcquireReply;
    if (reply[0] === 1) {
      return { state: 'acquired' };
    }
    const [, state, storedFingerprint, response] = reply;
    return state === 'completed'
      ? { state, fingerprint: storedFingerprint, response: JSON.parse(response!) }
      : { state, fingerprint: storedFingerprint };
  }

  async complete(
    key: string,
    owner: string,
    response: IdempotencyStoredPayload,
    ttl: number,
  ): Promise<boolean> {
    const done = await this.redis.eval(
      COMPLETE, 1, this.key(key), owner, JSON.stringify(response), ttl,
    );
    return done === 1;
  }

  async release(key: string, owner: string): Promise<boolean> {
    const released = await this.redis.eval(RELEASE, 1, this.key(key), owner);
    return released === 1;
  }

  async extend(key: string, owner: string, lockTtl: number): Promise<boolean> {
    const extended = await this.redis.eval(EXTEND, 1, this.key(key), owner, lockTtl);
    return extended === 1;
  }

  private key(key: string) {
    return \`idem:\${key}\`;
  }
}
`),cf()()(),Aa(911,`p`),bT(912,`Each record is a hash at `),Aa(913,`code`),bT(914,`idem:<scope>:<key>`),cf(),bT(915,`, with the fields `),Aa(916,`code`),bT(917,`state`),cf(),bT(918,`, `),Aa(919,`code`),bT(920,`fp`),cf(),bT(921,` (the fingerprint), `),Aa(922,`code`),bT(923,`owner`),cf(),bT(924,` and `),Aa(925,`code`),bT(926,`resp`),cf(),bT(927,` (the stored response as JSON). The hash expires on its own: `),Aa(928,`code`),bT(929,`lockTtl`),cf(),bT(930,` after the last renewal while it's in flight, and after `),Aa(931,`code`),bT(932,`ttl`),cf(),bT(933,` once it's completed, so no cleanup job is needed. Each script touches a single key, so the store also works with Redis Cluster. Redis runs a script atomically, but it doesn't undo the script's writes when a later command fails. `),Aa(934,`code`),bT(935,`PEXPIRE`),cf(),bT(936,`, for one, rejects a fraction of a millisecond, and failing after the `),Aa(937,`code`),bT(938,`HSET`),cf(),bT(939,`, it would leave a lock that never expires. That's why the interceptor hands the store whole milliseconds.`),cf(),Aa(940,`p`),bT(941,`Nest injects the Redis client, and the constructor registers the store, as in the PostgreSQL store. An app has one store, so `),Aa(942,`code`),bT(943,`RedisIdempotencyStore`),cf(),bT(944,` takes the place of the other one in `),Aa(945,`code`),bT(946,`AppModule`),cf(),bT(947,`:`),cf(),Aa(948,`app-copy-button`,34)(949,`span`,35),bT(950),LT(951,`extension`),Wa(952,`app-tabs`,null,16),cf(),Aa(954,`pre`)(955,`code`,36),bT(956,`
import { Module } from '@nestjs/common';
import { IdempotencyModule } from '@nestjs/idempotency';
import { RedisIdempotencyStore } from './idempotency/redis-idempotency.store.js';
import type { User } from './orders/order.js';
import { OrdersModule } from './orders/orders.module.js';
import { RedisModule } from './redis/redis.module.js';

@Module({
  imports: [
    RedisModule,
    IdempotencyModule.forRoot({
      scope: (req: { user?: User }) => req.user?.id,
    }),
    OrdersModule,
  ],
  providers: [RedisIdempotencyStore],
})
export class AppModule {}
`),cf()()(),Aa(957,`p`)(958,`code`),bT(959,`RedisModule`),cf(),bT(960,` stands for your app's Redis module: a global module that provides an ioredis client under the `),Aa(961,`code`),bT(962,`REDIS`),cf(),bT(963,` token, for example with `),Aa(964,`code`),bT(965,`useFactory: () => new Redis(process.env.REDIS_URL!)`),cf(),bT(966,`, and closes it with `),Aa(967,`code`),bT(968,`quit()`),cf(),bT(969,` in its `),Aa(970,`code`),bT(971,`onApplicationShutdown()`),cf(),bT(972,`, after the package has finished the requests in flight. `),Aa(973,`code`),bT(974,`RedisClient`),cf(),bT(975,` asks for nothing but `),Aa(976,`code`),bT(977,`eval()`),cf(),bT(978,`, which an ioredis `),Aa(979,`code`),bT(980,`Redis`),cf(),bT(981,` instance provides as is. At startup, the log line reads `),Aa(982,`code`),bT(983,`IdempotencyStorage: RedisIdempotencyStore`),cf(),bT(984,`, and the registry's rules from the PostgreSQL store apply: one store, registered from a constructor.`),cf(),Aa(985,`p`),bT(986,`The example project runs the contract suite against this store too:`),cf(),Aa(987,`app-copy-button`,34)(988,`span`,35),bT(989),LT(990,`extension`),Wa(991,`app-tabs`,null,17),cf(),Aa(993,`pre`)(994,`code`,36),bT(995,`
import { idempotencyStoreContract } from '@nestjs/idempotency/testing';
// ...
describe('RedisIdempotencyStore, the IdempotencyStore contract (on FakeRedis)', () => {
  let redis: FakeRedis;
  const cases = idempotencyStoreContract(
    () => {
      redis = new FakeRedis();
      return new RedisIdempotencyStore(redis, new IdempotencyStorage());
    },
    // Redis expires keys on its own clock: the fake's.
    { advanceTime: (ms) => redis.advance(ms), concurrent: true },
  );
  for (const c of cases) {
    it(c.name, c.run);
  }
});
`),cf()()(),Aa(996,`blockquote`,43)(997,`strong`),bT(998,`Hint`),cf(),bT(999,` This tutorial's example project has no Redis server, so its tests run the store against an in-process fake that implements the same four scripts in JavaScript. That covers the store's logic and the way it reads replies, but not the Lua itself. Run the contract suite against a real Redis, for example in a container, before you rely on the store. Without `),Aa(1e3,`code`),bT(1001,`advanceTime`),cf(),bT(1002,`, the suite waits for real expiry, which takes about ten seconds.
`),cf(),Aa(1003,`p`),bT(1004,`The remaining steps show `),Aa(1005,`code`),bT(1006,`DrizzleIdempotencyStore`),cf(),bT(1007,` in their module listings. With Redis, register `),Aa(1008,`code`),bT(1009,`RedisIdempotencyStore`),cf(),bT(1010,` in its place: encryption, the shipping service and the tuning options work the same, and with encryption on, the `),Aa(1011,`code`),bT(1012,`resp`),cf(),bT(1013,` field holds the sealed envelope instead of the `),Aa(1014,`code`),bT(1015,`response`),cf(),bT(1016,` column.`),cf(),Aa(1017,`h4`,46)(1018,`span`),bT(1019,`Encrypt stored receipts`),cf()(),Aa(1020,`p`),bT(1021,`The stored response is the whole receipt: the payment provider's receipt id, the amount, and the card's last four digits. They sit in `),Aa(1022,`code`),bT(1023,`idempotency_keys`),cf(),bT(1024,` in plain text, in every backup and every dump of the database, so encrypt the records at rest.`),cf(),Aa(1025,`p`),bT(1026,`The encryption keys are secrets that the app should read when it starts, not when `),Aa(1027,`code`),bT(1028,`app.module.ts`),cf(),bT(1029,` is imported, so switch to `),Aa(1030,`code`),bT(1031,`forRootAsync()`),cf(),bT(1032,`. The store stays as it is, a provider of `),Aa(1033,`code`),bT(1034,`AppModule`),cf(),bT(1035,` that registers itself, and the factory returns the options:`),cf(),Aa(1036,`app-copy-button`,34)(1037,`span`,35),bT(1038),LT(1039,`extension`),Wa(1040,`app-tabs`,null,18),cf(),Aa(1042,`pre`)(1043,`code`,36),bT(1044,`
IdempotencyModule.forRootAsync({
  useFactory: () => ({
    scope: (req: { user?: User }) => req.user?.id,
    encryption: {
      // Newest first: seal with the first key, open with any of them.
      keys: process.env.IDEMPOTENCY_KEYS!.split(','),
    },
  }),
}),
`),cf()()(),Aa(1045,`p`),bT(1046,`Generate a key with `),Aa(1047,`code`),bT(1048,`openssl rand -base64 32`),cf(),bT(1049,`, and store it in your secret manager as `),Aa(1050,`code`),bT(1051,`IDEMPOTENCY_KEYS`),cf(),bT(1052,`. With encryption on, the `),Aa(1053,`code`),bT(1054,`response`),cf(),bT(1055,` column holds a sealed envelope, `),Aa(1056,`code`),bT(1057,`v1.<keyId>.<iv>.<ciphertext>.<tag>`),cf(),bT(1058,`, instead of the receipt:`),cf(),Aa(1059,`ul`)(1060,`li`),bT(1061,`Records are encrypted with AES-256-GCM, with a random IV for each record.`),cf(),Aa(1062,`li`),bT(1063,`The fingerprint stays in plain text. The store has to compare it, and it's a hash anyway.`),cf(),Aa(1064,`li`),bT(1065,`The record key is authenticated along with the data, so a record copied under another user's key fails to open instead of replaying there.`),cf(),Aa(1066,`li`),bT(1067,`While encryption is on, plain-text records are rejected, so nobody with write access to the table can plant a response.`),cf(),Aa(1068,`li`),bT(1069,`A string key must be at least 32 characters, and it's expanded with HKDF-SHA256. That's fine for a random secret like the one above, but it isn't a password hash, so don't use a password that a person chose. A shorter key, or one with spaces around it (`),Aa(1070,`code`),bT(1071,`IDEMPOTENCY_KEYS=new, old`),cf(),bT(1072,` splits into a second key that starts with a space), stops the app at startup, with an error that names it.`),cf()(),Aa(1073,`p`),bT(1074,`Turn encryption on before the endpoint stores its first record. It changes the record format both ways: a plain-text record stored before the switch, like a sealed record after encryption is turned off, fails to open until it expires, and its replays get the 500 described below.`),cf(),Aa(1075,`p`),bT(1076,`To rotate the key without breaking replays:`),cf(),Aa(1077,`ol`)(1078,`li`),bT(1079,`Generate a new key and deploy `),Aa(1080,`code`),bT(1081,`IDEMPOTENCY_KEYS=old-key,new-key`),cf(),bT(1082,`. Instances still seal records with the old key, but they can open records sealed with the new one.`),cf(),Aa(1083,`li`),bT(1084,`Once every instance runs that configuration, deploy `),Aa(1085,`code`),bT(1086,`IDEMPOTENCY_KEYS=new-key,old-key`),cf(),bT(1087,`. New records are sealed with the new key, and old records still open. During the rolling deploy, instances that haven't restarted yet can already open the new records, thanks to the first step.`),cf(),Aa(1088,`li`),bT(1089,`When `),Aa(1090,`code`),bT(1091,`ttl`),cf(),bT(1092,` has passed (48 hours, see `),Aa(1093,`a`,39),bT(1094,`Tune TTLs and failure handling`),cf(),bT(1095,`), every record sealed with the old key has expired. Deploy `),Aa(1096,`code`),bT(1097,`IDEMPOTENCY_KEYS=new-key`),cf(),bT(1098,`.`),cf()(),Aa(1099,`p`),bT(1100,`If you remove a key too early, replays of records sealed with it `),Aa(1101,`strong`),bT(1102,`fail closed`),cf(),bT(1103,`. The client gets a 500 `),Aa(1104,`code`),bT(1105,`IDEMPOTENCY_RECORD_UNREADABLE`),cf(),bT(1106,` error, the failure is logged, and the handler doesn't run again: the record proves that the card was already charged, so running the handler could charge it twice. The error stops when the record expires.`),cf(),Aa(1107,`h4`,47)(1108,`span`),bT(1109,`Pay through GraphQL`),cf()(),Aa(1110,`p`),bT(1111,`The store's website pays through a GraphQL mutation. Register `),Aa(1112,`code`),bT(1113,`GraphQLModule`),cf(),bT(1114,` in `),Aa(1115,`code`),bT(1116,`AppModule`),cf(),bT(1117,`:`),cf(),Aa(1118,`app-copy-button`,34)(1119,`span`,35),bT(1120),LT(1121,`extension`),Wa(1122,`app-tabs`,null,19),cf(),Aa(1124,`pre`)(1125,`code`,36),bT(1126,`
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: true,
}),
`),cf()()(),Aa(1127,`p`),bT(1128,`Then add the mutation to the orders resolver, next to its queries. In GraphQL, the key can come from the `),Aa(1129,`code`),bT(1130,`Idempotency-Key`),cf(),bT(1131,` header, as with REST, or from an argument. An argument puts the key in the schema, where code generators and reviewers can see it. It also suits GraphQL clients, which usually set headers once per connection rather than per operation. `),Aa(1132,`code`),bT(1133,`@Idempotent()`),cf(),bT(1134,` reads a mutation's `),Aa(1135,`code`),bT(1136,`idempotencyKey`),cf(),bT(1137,` argument when it has one, and the header otherwise, so the resolver only has to declare the argument:`),cf(),Aa(1138,`app-copy-button`,34)(1139,`span`,35),bT(1140),LT(1141,`extension`),Wa(1142,`app-tabs`,null,20),cf(),Aa(1144,`pre`)(1145,`code`,36),bT(1146,`
@Mutation(() => PaymentReceipt)
@Idempotent({ required: true })
payOrder(
  @Args('orderId', { type: () => ID }) orderId: string,
  @Args('input') input: PayOrderDto,
  @Args('idempotencyKey') _idempotencyKey: string,
  @CurrentUser() user: User,
) {
  return this.ordersService.pay(orderId, user, input);
}
`),cf()()(),Aa(1147,`p`)(1148,`code`),bT(1149,`PayOrderDto`),cf(),bT(1150,` is the class the REST endpoint uses, with `),Aa(1151,`code`),bT(1152,`@InputType()`),cf(),bT(1153,` and `),Aa(1154,`code`),bT(1155,`@Field()`),cf(),bT(1156,` added, and `),Aa(1157,`code`),bT(1158,`PaymentReceipt`),cf(),bT(1159,` is an `),Aa(1160,`code`),bT(1161,`@ObjectType()`),cf(),bT(1162,` with the receipt's fields. The resolver uses the same `),Aa(1163,`code`),bT(1164,`AuthGuard`),cf(),bT(1165,`, which reads the request from the GraphQL context. The module's `),Aa(1166,`code`),bT(1167,`scope`),cf(),bT(1168,` receives that same request, so keys are per user here too. The argument is a non-null `),Aa(1169,`code`),bT(1170,`String`),cf(),bT(1171,`, so GraphQL validation already rejects an operation without it:`),cf(),Aa(1172,`pre`)(1173,`code`,48),bT(1174,`
mutation PayOrder($orderId: ID!, $paymentMethod: String!, $key: String!) {
  payOrder(orderId: $orderId, input: { paymentMethod: $paymentMethod }, idempotencyKey: $key) {
    receiptId
    amount
    cardLast4
    paidAt
  }
}
`),cf()(),Aa(1175,`p`),bT(1176,`A retry with the same variables returns the stored `),Aa(1177,`code`),bT(1178,`payOrder`),cf(),bT(1179,` result, with the same types the resolver returned, so a `),Aa(1180,`code`),bT(1181,`Date`),cf(),bT(1182,` field replays as a `),Aa(1183,`code`),bT(1184,`Date`),cf(),bT(1185,`. The record key gets the field's path appended, as in `),Aa(1186,`code`),bT(1187,`usr_alice:<key>:payOrder`),cf(),bT(1188,`, because one operation can contain several mutations. Each field is stored and replayed on its own, and aliases are part of the path, so a retry must send the same document.`),cf(),Aa(1189,`p`),bT(1190,`A rejection is an error on that field, not an HTTP status. The response is still a 200, because other fields in the same operation may have succeeded, and the status and the retry delay are in `),Aa(1191,`code`),bT(1192,`extensions`),cf(),bT(1193,` (`),Aa(1194,`code`),bT(1195,`locations`),cf(),bT(1196,` omitted):`),cf(),Aa(1197,`pre`)(1198,`code`,49),bT(1199,`
{
  "errors": [
    {
      "message": "A request with this idempotency key is still being processed.",
      "path": ["payOrder"],
      "extensions": {
        "code": "IDEMPOTENCY_KEY_IN_USE",
        "httpStatus": 409,
        "retryAfter": 2
      }
    }
  ],
  "data": null
}
`),cf()(),Aa(1200,`p`),bT(1201,`For the same reason, GraphQL replays don't set the `),Aa(1202,`code`),bT(1203,`Idempotent-Replayed`),cf(),bT(1204,` header.`),cf(),Aa(1205,`h4`,50)(1206,`span`),bT(1207,`Deduplicate order.paid events`),cf()(),Aa(1208,`p`),bT(1209,`After a payment, `),Aa(1210,`code`),bT(1211,`OrdersService`),cf(),bT(1212,` emits an `),Aa(1213,`code`),bT(1214,`order.paid`),cf(),bT(1215,` event, and the shipping service arranges a courier. In practice, events are delivered at least once. A publisher that retries after a timeout, or a broker (RabbitMQ, Kafka, NATS JetStream) that redelivers an unacknowledged message, can deliver the same event twice, and the customer gets two parcels.`),cf(),Aa(1216,`p`),bT(1217,`Deduplicating events needs an id that's the same for every delivery of an event, so it's derived from the data rather than generated on each send. An order is paid once, so `),Aa(1218,`code`),bT(1219,`OrdersService`),cf(),bT(1220,` uses `),Aa(1221,`code`),bT(1222,`order-paid:`),cf(),bT(1223,` followed by the order id. Mark the `),Aa(1224,`a`,51),bT(1225,`event handler`),cf(),bT(1226,` with `),Aa(1227,`code`),bT(1228,`@Idempotent()`),cf(),bT(1229,`, and point `),Aa(1230,`code`),bT(1231,`keyFrom`),cf(),bT(1232,` at that id:`),cf(),Aa(1233,`app-copy-button`,34)(1234,`span`,35),bT(1235),LT(1236,`extension`),Wa(1237,`app-tabs`,null,21),cf(),Aa(1239,`pre`)(1240,`code`,36),bT(1241,`
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Idempotent } from '@nestjs/idempotency';
import { ShipmentsService } from './shipments.service.js';

export interface OrderPaidEvent {
  eventId: string;
  orderId: string;
}

@Controller()
export class ShippingController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @EventPattern('order.paid')
  @Idempotent({ required: true, keyFrom: { payload: 'eventId' } })
  async onOrderPaid(@Payload() event: OrderPaidEvent) {
    await this.shipmentsService.createFor(event.orderId);
  }
}
`),cf()()(),Aa(1242,`p`),bT(1243,`By default, microservice handlers read the key from the payload's `),Aa(1244,`code`),bT(1245,`idempotencyKey`),cf(),bT(1246,` property, then from a transport header named by the `),Aa(1247,`code`),bT(1248,`header`),cf(),bT(1249,` option. Here, `),Aa(1250,`code`),bT(1251,`keyFrom`),cf(),bT(1252,` reads `),Aa(1253,`code`),bT(1254,`eventId`),cf(),bT(1255,` instead, and `),Aa(1256,`code`),bT(1257,`required: true`),cf(),bT(1258,` rejects events that don't have one.`),cf(),Aa(1259,`p`),bT(1260,`The shipping service is a separate application, with its own database and its own `),Aa(1261,`code`),bT(1262,`IdempotencyModule`),cf(),bT(1263,`, and it registers the same store class:`),cf(),Aa(1264,`app-copy-button`,34)(1265,`span`,35),bT(1266),LT(1267,`extension`),Wa(1268,`app-tabs`,null,22),cf(),Aa(1270,`pre`)(1271,`code`,36),bT(1272,`
import { Module } from '@nestjs/common';
import { DrizzleModule } from '@nestjs/drizzle';
import { IdempotencyModule } from '@nestjs/idempotency';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DrizzleIdempotencyStore } from '../idempotency/drizzle-idempotency.store.js';
import { ShipmentsService } from './shipments.service.js';
import { ShippingController } from './shipping.controller.js';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL! }),
    }),
    IdempotencyModule.forRoot({
      ttl: '7d', // brokers can redeliver long after the first delivery
    }),
  ],
  controllers: [ShippingController],
  providers: [ShipmentsService, DrizzleIdempotencyStore],
})
export class ShippingModule {}
`),cf()()(),Aa(1273,`app-copy-button`,34)(1274,`span`,35),bT(1275),LT(1276,`extension`),Wa(1277,`app-tabs`,null,23),cf(),Aa(1279,`pre`)(1280,`code`,36),bT(1281,`
import { NestFactory } from '@nestjs/core';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';
import { ShippingModule } from './shipping.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ShippingModule, {
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 4001 },
  });
  await app.listen();
}
bootstrap();
`),cf()()(),Aa(1282,`p`),bT(1283,`A few details differ from the API:`),cf(),Aa(1284,`ul`)(1285,`li`),bT(1286,`There's no `),Aa(1287,`code`),bT(1288,`scope`),cf(),bT(1289,`, because event ids are unique across the whole system.`),cf(),Aa(1290,`li`)(1291,`code`),bT(1292,`ttl`),cf(),bT(1293,` is 7 days, because a message can come back from a dead-letter queue long after it was first handled.`),cf(),Aa(1294,`li`),bT(1295,`Records belong to a handler: the record key ends with the handler's class and method, as in `),Aa(1296,`code`),bT(1297,`order-paid%3Aord_1001:ShippingController.onOrderPaid`),cf(),bT(1298,`. Nest runs every handler registered for an event, so a second handler for `),Aa(1299,`code`),bT(1300,`order.paid`),cf(),bT(1301,`, one that emails the tracking number, say, keeps its own records and still handles every event once.`),cf()(),Aa(1302,`p`),bT(1303,`A duplicate event is handled in one of two ways:`),cf(),Aa(1304,`ul`)(1305,`li`),bT(1306,`If the first delivery has completed, the duplicate is skipped. The stored result is "replayed", and since events have no reply, nothing happens.`),cf(),Aa(1307,`li`),bT(1308,`If the first delivery is still running, the duplicate is rejected with `),Aa(1309,`code`),bT(1310,`IDEMPOTENCY_KEY_IN_USE`),cf(),bT(1311,`, and Nest logs the error. With a transport that acknowledges messages, such as RabbitMQ or Kafka, don't acknowledge that delivery as processed. Let the transport redeliver it later, when it'll be skipped.`),cf()(),Aa(1312,`p`),bT(1313,`Either way, the courier is booked once. Retries of the HTTP payment don't produce duplicate events in the first place, because a replayed request never reaches `),Aa(1314,`code`),bT(1315,`OrdersService`),cf(),bT(1316,`.`),cf(),Aa(1317,`h4`,52)(1318,`span`),bT(1319,`Tune TTLs and failure handling`),cf()(),Aa(1320,`p`),bT(1321,`The defaults are a starting point. This is the API's final configuration:`),cf(),Aa(1322,`app-copy-button`,34)(1323,`span`,35),bT(1324),LT(1325,`extension`),Wa(1326,`app-tabs`,null,24),cf(),Aa(1328,`pre`)(1329,`code`,36),bT(1330,`
IdempotencyModule.forRootAsync({
  useFactory: () => ({
    scope: (req: { user?: User }) => req.user?.id,
    encryption: {
      // Newest first: seal with the first key, open with any of them.
      keys: process.env.IDEMPOTENCY_KEYS!.split(','),
    },
    // Longer than the app keeps retrying a queued payment (24 hours).
    ttl: '48h',
    // A crashed instance blocks a key for at most 45 seconds. While a
    // charge runs, its lock is renewed every 15 seconds.
    lockTtl: '45s',
    // How long a client waits after a 409 before it asks again.
    retryAfter: '2s',
  }),
}),
`),cf()()(),Aa(1331,`p`),bT(1332,`Every duration takes milliseconds, or a string such as `),Aa(1333,`code`),bT(1334,`'45s'`),cf(),bT(1335,`, `),Aa(1336,`code`),bT(1337,`'48h'`),cf(),bT(1338,` or `),Aa(1339,`code`),bT(1340,`'7d'`),cf(),bT(1341,`. A value that doesn't parse stops the app at startup, with an error that names the option.`),cf(),Aa(1342,`ul`)(1343,`li`)(1344,`strong`)(1345,`code`),bT(1346,`ttl`),cf()(),bT(1347,` (default: `),Aa(1348,`code`),bT(1349,`'24h'`),cf(),bT(1350,`) is how long a completed result can be replayed. It must be longer than the longest time a client keeps retrying. The app queues payments made offline for up to a day, so it's 48 hours here. After `),Aa(1351,`code`),bT(1352,`ttl`),cf(),bT(1353,`, the key is forgotten, and a retry runs the handler again. In this app, that ends in a 409 "already paid" error rather than a second charge, but the customer doesn't get the receipt.`),cf(),Aa(1354,`li`)(1355,`strong`)(1356,`code`),bT(1357,`lockTtl`),cf()(),bT(1358,` (default: `),Aa(1359,`code`),bT(1360,`'60s'`),cf(),bT(1361,`) is how long an in-flight lock survives after the instance running the handler crashes. While the handler runs, the interceptor renews the lock every `),Aa(1362,`code`),bT(1363,`lockTtl / 3`),cf(),bT(1364,`, here every 15 seconds, so a charge that takes longer than 45 seconds still keeps it, and a retry gets a 409. Once renewals stop, the lock expires and a retry takes over the key. A shorter `),Aa(1365,`code`),bT(1366,`lockTtl`),cf(),bT(1367,` frees keys sooner after a crash, but renews more often. If the store can't be reached to renew a lock, the interceptor logs a warning that the lock was lost.`),cf(),Aa(1368,`li`)(1369,`strong`)(1370,`code`),bT(1371,`retryAfter`),cf()(),bT(1372,` (default: `),Aa(1373,`code`),bT(1374,`'1s'`),cf(),bT(1375,`) is the value of the `),Aa(1376,`code`),bT(1377,`Retry-After`),cf(),bT(1378,` header on a 409, in whole seconds. Card charges usually take a second or two, so the API asks clients to wait 2 seconds rather than check back after one.`),cf()(),Aa(1379,`p`)(1380,`code`),bT(1381,`@Idempotent()`),cf(),bT(1382,` accepts `),Aa(1383,`code`),bT(1384,`required`),cf(),bT(1385,`, `),Aa(1386,`code`),bT(1387,`ttl`),cf(),bT(1388,`, `),Aa(1389,`code`),bT(1390,`lockTtl`),cf(),bT(1391,`, `),Aa(1392,`code`),bT(1393,`retryAfter`),cf(),bT(1394,`, `),Aa(1395,`code`),bT(1396,`keyFrom`),cf(),bT(1397,`, `),Aa(1398,`code`),bT(1399,`scope`),cf(),bT(1400,`, `),Aa(1401,`code`),bT(1402,`fingerprint`),cf(),bT(1403,` and `),Aa(1404,`code`),bT(1405,`storeIf`),cf(),bT(1406,`, which override the module's options for that handler. `),Aa(1407,`code`),bT(1408,`fingerprint`),cf(),bT(1409,` selects what a retry must repeat, for example the body without a client timestamp; the method and the URL always count. The decorator also works on a controller or resolver class, where it covers the handlers that change state: GET routes and GraphQL queries are skipped unless they have their own `),Aa(1410,`code`),bT(1411,`@Idempotent()`),cf(),bT(1412,`. A handler's own `),Aa(1413,`code`),bT(1414,`@Idempotent()`),cf(),bT(1415,` is merged with the class's options, so a class-level `),Aa(1416,`code`),bT(1417,`required: true`),cf(),bT(1418,` still applies to a handler that only sets `),Aa(1419,`code`),bT(1420,`lockTtl`),cf(),bT(1421,`.`),cf(),Aa(1422,`p`),bT(1423,`A `),Aa(1424,`code`),bT(1425,`scope`),cf(),bT(1426,` function runs for every kind of handler, and what it receives depends on the handler: the request for HTTP and GraphQL, but the message payload for a microservice handler. In an app that serves both from one `),Aa(1427,`code`),bT(1428,`IdempotencyModule`),cf(),bT(1429,`, pass `),Aa(1430,`code`),bT(1431,`scope`),cf(),bT(1432,` an object instead, with one function per context under the `),Aa(1433,`code`),bT(1434,`http`),cf(),bT(1435,`, `),Aa(1436,`code`),bT(1437,`graphql`),cf(),bT(1438,` and `),Aa(1439,`code`),bT(1440,`rpc`),cf(),bT(1441,` keys. Each function is typed for what its context passes in, and a context without one isn't scoped.`),cf(),Aa(1442,`p`),bT(1443,`Not every outcome is stored. By default, anything below 500 is:`),cf(),Aa(1444,`table`)(1445,`thead`)(1446,`tr`)(1447,`th`),bT(1448,`Outcome`),cf(),Aa(1449,`th`),bT(1450,`Default`),cf(),Aa(1451,`th`),bT(1452,`Why`),cf()()(),Aa(1453,`tbody`)(1454,`tr`)(1455,`td`),bT(1456,`2xx`),cf(),Aa(1457,`td`),bT(1458,`Stored and replayed`),cf(),Aa(1459,`td`),bT(1460,`The payment succeeded`),cf()(),Aa(1461,`tr`)(1462,`td`),bT(1463,`4xx `),Aa(1464,`code`),bT(1465,`HttpException`),cf(),bT(1466,` (validation 400, declined 402, 404, 409 already paid)`),cf(),Aa(1467,`td`),bT(1468,`Stored, and thrown again on every replay`),cf(),Aa(1469,`td`),bT(1470,`It's deterministic: the same request gets the same answer`),cf()(),Aa(1471,`tr`)(1472,`td`),bT(1473,`Another error with a 4xx `),Aa(1474,`code`),bT(1475,`status`),cf(),bT(1476,` (`),Aa(1477,`code`),bT(1478,`AuthorizationError`),cf(),bT(1479,`, 403)`),cf(),Aa(1480,`td`),bT(1481,`Stored as Nest's exception for that status, and replayed`),cf(),Aa(1482,`td`),bT(1483,`Its package turns it into that status`),cf()(),Aa(1484,`tr`)(1485,`td`),bT(1486,`5xx or an unknown error (payment provider 503, database down)`),cf(),Aa(1487,`td`),bT(1488,`Not stored. The key is released, so a retry runs again`),cf(),Aa(1489,`td`),bT(1490,`Most failures happen before the side effect`),cf()(),Aa(1491,`tr`)(1492,`td`)(1493,`code`),bT(1494,`StreamableFile`),cf(),bT(1495,`, streams, `),Aa(1496,`code`),bT(1497,`@Res()`),cf(),bT(1498,` without `),Aa(1499,`code`),bT(1500,`passthrough`),cf()(),Aa(1501,`td`),bT(1502,`Not stored. The key is released, and a warning is logged`),cf(),Aa(1503,`td`),bT(1504,`They can't be replayed`),cf()()()(),Aa(1505,`p`),bT(1506,`A replayed error is rebuilt as a plain `),Aa(1507,`code`),bT(1508,`HttpException`),cf(),bT(1509,` with the stored status and body, and it passes through your exception filters again. A filter that checks `),Aa(1510,`code`),bT(1511,`instanceof`),cf(),bT(1512,` against a custom exception class sees the base class on a replay.`),cf(),Aa(1513,`p`),bT(1514,`The `),Aa(1515,`code`),bT(1516,`storeIf`),cf(),bT(1517,` option changes the rule. It receives the status and, when the handler threw, the error. For example, `),Aa(1518,`code`),bT(1519,`storeIf: () => true`),cf(),bT(1520,` stores 5xx errors too, as Stripe does. That matters for the one gap the default leaves: a 5xx that happens `),Aa(1521,`strong`),bT(1522,`after`),cf(),bT(1523,` the side effect. If the payment provider charges the card and then `),Aa(1524,`code`),bT(1525,`markPaid()`),cf(),bT(1526,` fails, the key is released, and the retry charges again. There are three ways to close the gap:`),cf(),Aa(1527,`ul`)(1528,`li`),bT(1529,`Pass the payment provider a key derived from the user's id and the idempotency key. Most payment providers accept an idempotency key of their own, so the provider deduplicates the charge too. The idempotency key alone isn't enough, because two users can send the same one.`),cf(),Aa(1530,`li`),bT(1531,`Store 5xx errors for this handler with `),Aa(1532,`code`),bT(1533,`storeIf`),cf(),bT(1534,`, and have the app start a new attempt after a 5xx. To store only the failure that follows a charge, throw a dedicated exception there and check for it: `),Aa(1535,`code`),bT(1536,`storeIf: (status, error) => status < 500 || error instanceof ChargeCapturedError`),cf(),bT(1537,`.`),cf(),Aa(1538,`li`),bT(1539,`Write the payment and the event in one transaction, with a `),Aa(1540,`a`,53),bT(1541,`transactional outbox`),cf(),bT(1542,`.`),cf()(),Aa(1543,`h4`,54)(1544,`span`),bT(1545,`Try it`),cf()(),Aa(1546,`p`),bT(1547,`Start the shipping service, and the API with `),Aa(1548,`code`),bT(1549,`DATABASE_URL`),cf(),bT(1550,` (migrations applied), `),Aa(1551,`code`),bT(1552,`IDEMPOTENCY_KEYS`),cf(),bT(1553,` and the payment provider's sandbox configured. The sandbox takes about half a second to answer. The outputs below are trimmed to the relevant headers.`),cf(),Aa(1554,`p`),bT(1555,`A payment without a key is refused:`),cf(),Aa(1556,`pre`)(1557,`code`,37),bT(1558,`
$ curl -i localhost:3000/orders/ord_1001/pay \\
    -H 'Authorization: Bearer alice-token' \\
    --json '{"paymentMethod":"pm_card_visa"}'
HTTP/1.1 400 Bad Request

{"statusCode":400,"error":"Bad Request","code":"IDEMPOTENCY_KEY_REQUIRED","message":"An idempotency key is required for this operation."}
`),cf()(),Aa(1559,`p`),bT(1560,`The first call with a key charges the card:`),cf(),Aa(1561,`pre`)(1562,`code`,37),bT(1563,`
$ KEY=$(uuidgen)
$ curl -i localhost:3000/orders/ord_1001/pay \\
    -H 'Authorization: Bearer alice-token' \\
    -H "Idempotency-Key: $KEY" \\
    --json '{"paymentMethod":"pm_card_visa"}'
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{"orderId":"ord_1001","receiptId":"ch_0001","amount":4098,"cardLast4":"4242","paidAt":"2026-09-22T11:09:25.813Z"}
`),cf()(),Aa(1564,`p`),bT(1565,`A retry with the same key gets the same receipt, down to `),Aa(1566,`code`),bT(1567,`paidAt`),cf(),bT(1568,`, and the payment provider isn't called:`),cf(),Aa(1569,`pre`)(1570,`code`,37),bT(1571,`
$ curl -i localhost:3000/orders/ord_1001/pay \\
    -H 'Authorization: Bearer alice-token' \\
    -H "Idempotency-Key: $KEY" \\
    --json '{"paymentMethod":"pm_card_visa"}'
HTTP/1.1 201 Created
Idempotent-Replayed: true
Content-Type: application/json; charset=utf-8

{"orderId":"ord_1001","receiptId":"ch_0001","amount":4098,"cardLast4":"4242","paidAt":"2026-09-22T11:09:25.813Z"}
`),cf()(),Aa(1572,`p`),bT(1573,`The same key with a different card is a client bug:`),cf(),Aa(1574,`pre`)(1575,`code`,37),bT(1576,`
$ curl -i localhost:3000/orders/ord_1001/pay \\
    -H 'Authorization: Bearer alice-token' \\
    -H "Idempotency-Key: $KEY" \\
    --json '{"paymentMethod":"pm_card_mastercard"}'
HTTP/1.1 422 Unprocessable Entity

{"statusCode":422,"error":"Unprocessable Entity","code":"IDEMPOTENCY_KEY_REUSED","message":"This idempotency key was already used for a different request."}
`),cf()(),Aa(1577,`p`),bT(1578,`Finally, send two requests with a new key at the same time, for the other order. One is charged, and the other gets a 409 with `),Aa(1579,`code`),bT(1580,`Retry-After: 2`),cf(),bT(1581,` while the payment provider is still working:`),cf(),Aa(1582,`pre`)(1583,`code`,37),bT(1584,`
$ KEY=$(uuidgen)
$ for i in 1 2; do
  curl -s -o /dev/null -w '%{http_code} %header{retry-after}\\n' \\
    localhost:3000/orders/ord_1002/pay \\
    -H 'Authorization: Bearer alice-token' \\
    -H "Idempotency-Key: $KEY" \\
    --json '{"paymentMethod":"pm_card_visa"}' &
done; wait
409 2
201
`),cf()(),Aa(1585,`blockquote`,43)(1586,`strong`),bT(1587,`Hint`),cf(),Aa(1588,`code`),bT(1589,`--json`),cf(),bT(1590,` needs curl 7.82 or later, and `),Aa(1591,`code`),bT(1592,`%header`),cf(),bT(1593,` in `),Aa(1594,`code`),bT(1595,`-w`),cf(),bT(1596,` needs curl 7.84 or later.
`),cf(),Aa(1597,`h4`,55)(1598,`span`),bT(1599,`Testing`),cf()(),Aa(1600,`p`),bT(1601,`In end-to-end tests, keep the app's real configuration, but override the `),Aa(1602,`code`),bT(1603,`DrizzleIdempotencyStore`),cf(),bT(1604,` provider with a plain `),Aa(1605,`code`),bT(1606,`InMemoryIdempotencyStore`),cf(),bT(1607,`. A plain instance doesn't register itself, so the module falls back to its in-memory store, and since Nest never creates `),Aa(1608,`code`),bT(1609,`DrizzleIdempotencyStore`),cf(),bT(1610,`, nothing queries the database (a node-postgres pool connects on the first query, so `),Aa(1611,`code`),bT(1612,`DrizzleModule`),cf(),bT(1613,` opens no connection either). The encryption key still comes from `),Aa(1614,`code`),bT(1615,`IDEMPOTENCY_KEYS`),cf(),bT(1616,`, so set it in the test environment, for example with `),Aa(1617,`code`),bT(1618,`test.env`),cf(),bT(1619,` in `),Aa(1620,`code`),bT(1621,`vitest.config.mts`),cf(),bT(1622,`.`),cf(),Aa(1623,`p`),bT(1624,`Mock the payment provider with a small delay, so that two requests sent together overlap:`),cf(),Aa(1625,`app-copy-button`,34)(1626,`span`,35),bT(1627),LT(1628,`extension`),Wa(1629,`app-tabs`,null,25),cf(),Aa(1631,`pre`)(1632,`code`,36),bT(1633,`
import { ValidationPipe, type INestApplication } from '@nestjs/common';
import { InMemoryIdempotencyStore } from '@nestjs/idempotency';
import { Test } from '@nestjs/testing';
import { setTimeout } from 'node:timers/promises';
import { EMPTY } from 'rxjs';
import request from 'supertest';
import type { MockInstance } from 'vitest';
import { AppModule } from '../src/app.module.js';
import { DrizzleIdempotencyStore } from '../src/idempotency/drizzle-idempotency.store.js';
import { SHIPPING_SERVICE } from '../src/orders/orders.service.js';
import { PaymentProviderClient } from '../src/payments/payment-provider.client.js';

describe('POST /orders/:id/pay', () => {
  let app: INestApplication;
  let charge: MockInstance<PaymentProviderClient['charge']>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(DrizzleIdempotencyStore)
      .useValue(new InMemoryIdempotencyStore())
      .overrideProvider(SHIPPING_SERVICE)
      .useValue({ emit: () => EMPTY })
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.listen(0, '127.0.0.1');

    charge = vi.spyOn(app.get(PaymentProviderClient), 'charge').mockImplementation(async (input) => {
      await setTimeout(100); // slow enough for duplicates to overlap
      return {
        id: 'ch_test',
        amount: input.amount,
        cardLast4: '4242',
        reference: input.reference,
        createdAt: new Date().toISOString(),
      };
    });
  });

  afterEach(() => app.close());

  const pay = (key: string) =>
    request(app.getHttpServer())
      .post('/orders/ord_1001/pay')
      .set('Authorization', 'Bearer alice-token')
      .set('Idempotency-Key', key)
      .send({ paymentMethod: 'pm_card_visa' });

  it('charges once when the app retries', async () => {
    const first = await pay('key-1').expect(201);
    const retry = await pay('key-1').expect(201).expect('Idempotent-Replayed', 'true');

    expect(retry.body).toEqual(first.body);
    expect(charge).toHaveBeenCalledTimes(1);
  });

  it('rejects a duplicate that arrives while the first is in flight', async () => {
    const [a, b] = await Promise.all([pay('key-2'), pay('key-2')]);

    expect([a.status, b.status].sort()).toEqual([201, 409]);
    expect(charge).toHaveBeenCalledTimes(1);
  });
});
`),cf()()(),Aa(1634,`p`),bT(1635,`Once the app is initialized, `),Aa(1636,`code`),bT(1637,`app.get(IdempotencyStorage).source`),cf(),bT(1638,` returns the store in use, here the in-memory one. Its `),Aa(1639,`code`),bT(1640,`peek(key)`),cf(),bT(1641,` method returns the raw record under a record key such as `),Aa(1642,`code`),bT(1643,`usr_alice:key-1`),cf(),bT(1644,` (`),Aa(1645,`code`),bT(1646,`state`),cf(),bT(1647,`, `),Aa(1648,`code`),bT(1649,`fingerprint`),cf(),bT(1650,` and `),Aa(1651,`code`),bT(1652,`response`),cf(),bT(1653,`), for assertions such as "the declined payment was stored". Test your own store separately, with the contract suite from `),Aa(1654,`a`,33),bT(1655,`Store keys in PostgreSQL`),cf(),bT(1656,`, against a real server. To keep the Drizzle store in end-to-end tests instead, replace the database that `),Aa(1657,`code`),bT(1658,`DrizzleModule`),cf(),bT(1659,` registered, with `),Aa(1660,`code`),bT(1661,`overrideProvider(getDrizzleToken()).useValue(db)`),cf(),bT(1662,` (`),Aa(1663,`code`),bT(1664,`getDrizzleToken`),cf(),bT(1665,` comes from `),Aa(1666,`code`),bT(1667,`@nestjs/drizzle`),cf(),bT(1668,`), where `),Aa(1669,`code`),bT(1670,`db`),cf(),bT(1671,` is a Drizzle database on PGlite migrated with your migrations. The example project tests encryption, GraphQL, events and tuning that way.`),cf(),Aa(1672,`p`),bT(1673,`See `),Aa(1674,`a`,56),bT(1675,`End-to-end testing`),cf(),bT(1676,` for more about the testing setup.`),cf(),Aa(1677,`h4`,57)(1678,`span`),bT(1679,`Production checklist`),cf()(),Aa(1680,`ul`)(1681,`li`),bT(1682,`Register a shared store (your database, or Redis), even for a single instance: in-memory records are lost on every restart or deploy, and a retry after one runs the handler again. Run the contract suite against it with `),Aa(1683,`code`),bT(1684,`concurrent`),cf(),bT(1685,` on. In production, the app refuses to start without one, unless `),Aa(1686,`code`),bT(1687,`allowInMemoryStorage`),cf(),bT(1688,` is set. With Redis, configure `),Aa(1689,`code`),bT(1690,`maxmemory-policy noeviction`),cf(),bT(1691,`. A record evicted early is a double charge waiting to happen, and since every idempotency record has a TTL, the `),Aa(1692,`code`),bT(1693,`volatile-*`),cf(),bT(1694,` policies would evict them too.`),cf(),Aa(1695,`li`),bT(1696,`Set `),Aa(1697,`code`),bT(1698,`required: true`),cf(),bT(1699,` on every endpoint that moves money or creates something a customer would notice twice.`),cf(),Aa(1700,`li`),bT(1701,`Set `),Aa(1702,`code`),bT(1703,`scope`),cf(),bT(1704,` for every client-facing endpoint. Without it, one user's key can replay another user's response. The module logs a warning when a signed-in user calls a handler that has none.`),cf(),Aa(1705,`li`),bT(1706,`Keep the idempotency interceptor outside your other global interceptors. Global interceptors run in the order they were registered, and the `),Aa(1707,`code`),bT(1708,`APP_INTERCEPTOR`),cf(),bT(1709,` providers of `),Aa(1710,`code`),bT(1711,`AppModule`),cf(),bT(1712,` register before those of the modules it imports, so they run outside it and see every replay. The module warns about them at startup. It refuses to start when one of them is `),Aa(1713,`code`),bT(1714,`ClassSerializerInterceptor`),cf(),bT(1715,`, because a replay would hand it a plain object and send the fields that `),Aa(1716,`code`),bT(1717,`@Exclude()`),cf(),bT(1718,` hides. Register such interceptors with `),Aa(1719,`code`),bT(1720,`app.useGlobalInterceptors()`),cf(),bT(1721,` in `),Aa(1722,`code`),bT(1723,`main.ts`),cf(),bT(1724,`, or in a module imported after `),Aa(1725,`code`),bT(1726,`IdempotencyModule`),cf(),bT(1727,`.`),cf(),Aa(1728,`li`),bT(1729,`With a database store, create its table through your migrations, size the connection pool for its statements, keep the instances' clocks in sync, and call `),Aa(1730,`code`),bT(1731,`prune()`),cf(),bT(1732,` on a schedule.`),cf(),Aa(1733,`li`),bT(1734,`Keep `),Aa(1735,`code`),bT(1736,`ttl`),cf(),bT(1737,` above the client's retry window. `),Aa(1738,`code`),bT(1739,`lockTtl`),cf(),bT(1740,` only needs to cover a crash, since the lock is renewed while the handler runs.`),cf(),Aa(1741,`li`),bT(1742,`Watch the events. `),Aa(1743,`code`),bT(1744,`IdempotencyEvents`),cf(),bT(1745,` is injectable, and its `),Aa(1746,`code`),bT(1747,`events$`),cf(),bT(1748,` stream reports every replay, every rejection with its `),Aa(1749,`code`),bT(1750,`code`),cf(),bT(1751,`, and every lost lock. The same events are published on the `),Aa(1752,`code`),bT(1753,`nestjs:idempotency:replayed`),cf(),bT(1754,`, `),Aa(1755,`code`),bT(1756,`nestjs:idempotency:rejected`),cf(),bT(1757,` and `),Aa(1758,`code`),bT(1759,`nestjs:idempotency:lock-lost`),cf(),bT(1760,` diagnostics channels for tracing tools. Alert on `),Aa(1761,`code`),bT(1762,`lock-lost`),cf(),bT(1763,`: it means the attempt's outcome isn't in the store, because renewals failed (the store was unreachable, or the event loop was blocked for longer than `),Aa(1764,`code`),bT(1765,`lockTtl`),cf(),bT(1766,`) or because the store failed when the result was written, and a retry may run the handler again.`),cf(),Aa(1767,`li`),bT(1768,`Turn on `),Aa(1769,`code`),bT(1770,`encryption`),cf(),bT(1771,` when responses contain personal or payment data, before the endpoint stores its first record. Keep the keys in a secret manager, rotate them in the three steps above, and never remove a key before `),Aa(1772,`code`),bT(1773,`ttl`),cf(),bT(1774,` has passed.`),cf(),Aa(1775,`li`),bT(1776,`Pass the payment provider a key derived from the user's id and the idempotency key, to cover a failure after the charge.`),cf(),Aa(1777,`li`),bT(1778,`When several services share one Redis, give each one its own key prefix (the `),Aa(1779,`code`),bT(1780,`idem:`),cf(),bT(1781,` in the store) or its own database. Record keys are only unique within one service: two services can each have a handler class with the same name, and a client could send one key to both.`),cf(),Aa(1782,`li`),bT(1783,`Keep the state check in the service, ideally as a conditional database update. An idempotency key deduplicates retries of one attempt, but two taps that create two keys are two attempts.`),cf(),Aa(1784,`li`),bT(1785,`Let browsers send the header. For cross-origin clients, add `),Aa(1786,`code`),bT(1787,`Idempotency-Key`),cf(),bT(1788,` to the CORS `),Aa(1789,`code`),bT(1790,`allowedHeaders`),cf(),bT(1791,`, and `),Aa(1792,`code`),bT(1793,`Idempotent-Replayed`),cf(),bT(1794,` and `),Aa(1795,`code`),bT(1796,`Retry-After`),cf(),bT(1797,` to `),Aa(1798,`code`),bT(1799,`exposedHeaders`),cf(),bT(1800,`.`),cf(),Aa(1801,`li`),bT(1802,`Keep idempotent responses small. The whole response body is stored, and the package has no size limit yet.`),cf()(),Aa(1803,`h4`,58)(1804,`span`),bT(1805,`The store contract`),cf()(),Aa(1806,`p`),bT(1807,`The tutorial wrote the store with Drizzle, with TypeORM, and for Redis. This section sums up what any `),Aa(1808,`code`),bT(1809,`IdempotencyStore`),cf(),bT(1810,` must do, for writing one with another ORM. The package README's "Implementing a store" has every method in detail.`),cf(),Aa(1811,`p`)(1812,`strong`),bT(1813,`Registration.`),cf(),bT(1814,` The store is an ordinary singleton provider that calls `),Aa(1815,`code`),bT(1816,`registerSource(this)`),cf(),bT(1817,` on the injectable `),Aa(1818,`code`),bT(1819,`IdempotencyStorage`),cf(),bT(1820,` in its constructor. The registry checks the shape at once, refuses a second registration unless it passes `),Aa(1821,`code`),bT(1822,`replace: true`),cf(),bT(1823,`, and locks when `),Aa(1824,`code`),bT(1825,`IdempotencyModule`),cf(),bT(1826,` initializes, logging the store in use. With nothing registered, the module uses `),Aa(1827,`code`),bT(1828,`InMemoryIdempotencyStore`),cf(),bT(1829,`, which one instance can't share with another, and which loses its records on restart. With `),Aa(1830,`code`),bT(1831,`NODE_ENV=production`),cf(),bT(1832,`, startup fails instead, unless you set `),Aa(1833,`code`),bT(1834,`allowInMemoryStorage: true`),cf(),bT(1835,`, which accepts losing the records on every restart or deploy.`),cf(),Aa(1836,`p`)(1837,`strong`),bT(1838,`The methods.`),cf(),bT(1839,` All four are atomic: each one decides who holds a key, and a read followed by a separate write lets two requests both run the handler, which is the double charge the package exists to prevent. None takes your transaction: an idempotency record is written on its own, never as part of your business transaction.`),cf(),Aa(1840,`table`)(1841,`thead`)(1842,`tr`)(1843,`th`),bT(1844,`Method`),cf(),Aa(1845,`th`),bT(1846,`What it does`),cf(),Aa(1847,`th`),bT(1848,`How it stays atomic`),cf()()(),Aa(1849,`tbody`)(1850,`tr`)(1851,`td`)(1852,`code`),bT(1853,`acquire(key, owner, fingerprint, lockTtl)`),cf()(),Aa(1854,`td`),bT(1855,`Takes the lock on a free or expired key, or returns the record it found`),cf(),Aa(1856,`td`),bT(1857,`One insert that takes over an expired row in the same statement, so of many concurrent callers exactly one wins; the others read the winner's record`),cf()(),Aa(1858,`tr`)(1859,`td`)(1860,`code`),bT(1861,`complete(key, owner, response, ttl)`),cf()(),Aa(1862,`td`),bT(1863,`Turns the owner's live lock into a completed record`),cf(),Aa(1864,`td`),bT(1865,`A compare-and-set: the owner and expiry checks are in the `),Aa(1866,`code`),bT(1867,`WHERE`),cf(),bT(1868,` of the statement that writes`),cf()(),Aa(1869,`tr`)(1870,`td`)(1871,`code`),bT(1872,`release(key, owner)`),cf()(),Aa(1873,`td`),bT(1874,`Deletes the owner's live lock, so a retry can run the handler`),cf(),Aa(1875,`td`),bT(1876,`A compare-and-set, as `),Aa(1877,`code`),bT(1878,`complete()`),cf()()(),Aa(1879,`tr`)(1880,`td`)(1881,`code`),bT(1882,`extend(key, owner, lockTtl)`),cf()(),Aa(1883,`td`),bT(1884,`Renews the owner's live lock`),cf(),Aa(1885,`td`),bT(1886,`A compare-and-set, as `),Aa(1887,`code`),bT(1888,`complete()`),cf()()()()(),Aa(1889,`p`)(1890,`strong`),bT(1891,`With Prisma.`),cf(),bT(1892,` The Drizzle and TypeORM stores are the model, with the same table:`),cf(),Aa(1893,`ul`)(1894,`li`)(1895,`strong`)(1896,`code`),bT(1897,`acquire()`),cf()(),bT(1898,` is one `),Aa(1899,`code`),bT(1900,`INSERT ... ON CONFLICT (key_hash) DO UPDATE ... WHERE expires_at <= now RETURNING`),cf(),bT(1901,`. Prisma's `),Aa(1902,`code`),bT(1903,`upsert()`),cf(),bT(1904,` has no condition on the update, so use `),Aa(1905,`code`),bT(1906,`$queryRaw`),cf(),bT(1907,`. When no row comes back, read the record, as the other stores do.`),cf(),Aa(1908,`li`)(1909,`strong`)(1910,`code`),bT(1911,`complete()`),cf(),bT(1912,`, `),Aa(1913,`code`),bT(1914,`release()`),cf(),bT(1915,` and `),Aa(1916,`code`),bT(1917,`extend()`),cf()(),bT(1918,` put the owner and the expiry in the `),Aa(1919,`code`),bT(1920,`WHERE`),cf(),bT(1921,` and count the rows: `),Aa(1922,`code`),bT(1923,`updateMany()`),cf(),bT(1924,` or `),Aa(1925,`code`),bT(1926,`deleteMany()`),cf(),bT(1927,` with `),Aa(1928,`code`),bT(1929,`keyHash`),cf(),bT(1930,`, `),Aa(1931,`code`),bT(1932,`owner`),cf(),bT(1933,` and a `),Aa(1934,`code`),bT(1935,`gt: now`),cf(),bT(1936,` filter on `),Aa(1937,`code`),bT(1938,`expiresAt`),cf(),bT(1939,` in `),Aa(1940,`code`),bT(1941,`where`),cf(),bT(1942,`, and `),Aa(1943,`code`),bT(1944,`count === 1`),cf(),bT(1945,`. Not `),Aa(1946,`code`),bT(1947,`update()`),cf(),bT(1948,` after a `),Aa(1949,`code`),bT(1950,`findUnique()`),cf(),bT(1951,`: it reads first.`),cf(),Aa(1952,`li`)(1953,`strong`),bT(1954,`The response column`),cf(),bT(1955,` is `),Aa(1956,`code`),bT(1957,`json`),cf(),bT(1958,` rather than `),Aa(1959,`code`),bT(1960,`jsonb`),cf(),bT(1961,`, in any ORM: `),Aa(1962,`code`),bT(1963,`jsonb`),cf(),bT(1964,` rejects a `),Aa(1965,`code`),bT(1966,`\\u0000`),cf(),bT(1967,` inside a string, and a response body can contain one.`),cf()(),Aa(1968,`p`)(1969,`strong`),bT(1970,`Test it`),cf(),bT(1971,` with the suite from `),Aa(1972,`code`),bT(1973,`@nestjs/idempotency/testing`),cf(),bT(1974,`, as the Drizzle, TypeORM and Redis stores do. `),Aa(1975,`code`),bT(1976,`idempotencyStoreContract()`),cf(),bT(1977,` returns cases for any test runner. `),Aa(1978,`code`),bT(1979,`concurrent: true`),cf(),bT(1980,` races 16 callers for each key; run it against PostgreSQL with a connection pool, where the calls really overlap. `),Aa(1981,`code`),bT(1982,`advanceTime`),cf(),bT(1983,` moves the store's clock for the expiry cases, and without it they wait in real time.`),cf(),Aa(1984,`h4`,59)(1985,`span`),bT(1986,`Reference`),cf()(),Aa(1987,`h5`,60)(1988,`span`),bT(1989,`Module options`),cf()(),Aa(1990,`p`)(1991,`code`),bT(1992,`IdempotencyModule.forRoot()`),cf(),bT(1993,` takes these options. `),Aa(1994,`code`),bT(1995,`forRootAsync()`),cf(),bT(1996,` takes `),Aa(1997,`code`),bT(1998,`isGlobal`),cf(),bT(1999,` and `),Aa(2e3,`code`),bT(2001,`imports`),cf(),bT(2002,` at the top level, next to `),Aa(2003,`code`),bT(2004,`useFactory`),cf(),bT(2005,`, `),Aa(2006,`code`),bT(2007,`useClass`),cf(),bT(2008,` or `),Aa(2009,`code`),bT(2010,`useExisting`),cf(),bT(2011,`, and the factory returns the rest. Every option except `),Aa(2012,`code`),bT(2013,`header`),cf(),bT(2014,`, `),Aa(2015,`code`),bT(2016,`replayHeaders`),cf(),bT(2017,`, `),Aa(2018,`code`),bT(2019,`encryption`),cf(),bT(2020,`, `),Aa(2021,`code`),bT(2022,`allowInMemoryStorage`),cf(),bT(2023,` and `),Aa(2024,`code`),bT(2025,`isGlobal`),cf(),bT(2026,` can also be set per class or handler in `),Aa(2027,`code`),bT(2028,`@Idempotent()`),cf(),bT(2029,`, where it is merged field by field over the module's.`),cf(),Aa(2030,`table`)(2031,`thead`)(2032,`tr`)(2033,`th`),bT(2034,`Option`),cf(),Aa(2035,`th`),bT(2036,`Type`),cf(),Aa(2037,`th`),bT(2038,`Default`),cf(),Aa(2039,`th`),bT(2040,`Description`),cf()()(),Aa(2041,`tbody`)(2042,`tr`)(2043,`td`)(2044,`code`),bT(2045,`required`),cf()(),Aa(2046,`td`)(2047,`code`),bT(2048,`boolean`),cf()(),Aa(2049,`td`)(2050,`code`),bT(2051,`false`),cf()(),Aa(2052,`td`),bT(2053,`Rejects calls without a key with `),Aa(2054,`code`),bT(2055,`IDEMPOTENCY_KEY_REQUIRED`),cf(),bT(2056,`. See `),Aa(2057,`a`,61),bT(2058,`Make the payment endpoint idempotent`),cf(),bT(2059,`.`),cf()(),Aa(2060,`tr`)(2061,`td`)(2062,`code`),bT(2063,`scope`),cf()(),Aa(2064,`td`),bT(2065,`function, object or `),Aa(2066,`code`),bT(2067,`false`),cf()(),Aa(2068,`td`),bT(2069,`none`),cf(),Aa(2070,`td`),bT(2071,`The key namespace, such as the user id. An object has one function per context, under `),Aa(2072,`code`),bT(2073,`http`),cf(),bT(2074,`, `),Aa(2075,`code`),bT(2076,`graphql`),cf(),bT(2077,` and `),Aa(2078,`code`),bT(2079,`rpc`),cf(),bT(2080,`. `),Aa(2081,`code`),bT(2082,`false`),cf(),bT(2083,` shares one namespace on purpose.`),cf()(),Aa(2084,`tr`)(2085,`td`)(2086,`code`),bT(2087,`ttl`),cf()(),Aa(2088,`td`)(2089,`code`),bT(2090,`Duration`),cf()(),Aa(2091,`td`)(2092,`code`),bT(2093,`'24h'`),cf()(),Aa(2094,`td`),bT(2095,`How long a completed result is replayed. See `),Aa(2096,`a`,39),bT(2097,`Tune TTLs and failure handling`),cf(),bT(2098,`.`),cf()(),Aa(2099,`tr`)(2100,`td`)(2101,`code`),bT(2102,`lockTtl`),cf()(),Aa(2103,`td`)(2104,`code`),bT(2105,`Duration`),cf()(),Aa(2106,`td`)(2107,`code`),bT(2108,`'60s'`),cf()(),Aa(2109,`td`),bT(2110,`How long an in-flight lock survives after renewals stop. The lock is renewed every `),Aa(2111,`code`),bT(2112,`lockTtl / 3`),cf(),bT(2113,`.`),cf()(),Aa(2114,`tr`)(2115,`td`)(2116,`code`),bT(2117,`retryAfter`),cf()(),Aa(2118,`td`)(2119,`code`),bT(2120,`Duration`),cf()(),Aa(2121,`td`)(2122,`code`),bT(2123,`'1s'`),cf()(),Aa(2124,`td`),bT(2125,`The wait sent with `),Aa(2126,`code`),bT(2127,`IDEMPOTENCY_KEY_IN_USE`),cf(),bT(2128,`, in whole seconds, rounded up.`),cf()(),Aa(2129,`tr`)(2130,`td`)(2131,`code`),bT(2132,`keyFrom`),cf()(),Aa(2133,`td`),bT(2134,`source, or one source per context`),cf(),Aa(2135,`td`),bT(2136,`see below`),cf(),Aa(2137,`td`),bT(2138,`Where the key comes from: `),Aa(2139,`code`),bT(2140,`header`),cf(),bT(2141,`, `),Aa(2142,`code`),bT(2143,`arg`),cf(),bT(2144,` (GraphQL), `),Aa(2145,`code`),bT(2146,`payload`),cf(),bT(2147,` (microservices) or a function of the `),Aa(2148,`code`),bT(2149,`ExecutionContext`),cf(),bT(2150,`.`),cf()(),Aa(2151,`tr`)(2152,`td`)(2153,`code`),bT(2154,`fingerprint`),cf()(),Aa(2155,`td`)(2156,`code`),bT(2157,`(payload, context) => unknown`),cf()(),Aa(2158,`td`),bT(2159,`the whole payload`),cf(),Aa(2160,`td`),bT(2161,`What a retry must repeat. The method and URL, GraphQL field or message pattern, and the scope always count.`),cf()(),Aa(2162,`tr`)(2163,`td`)(2164,`code`),bT(2165,`storeIf`),cf()(),Aa(2166,`td`)(2167,`code`),bT(2168,`(status, error) => boolean`),cf()(),Aa(2169,`td`)(2170,`code`),bT(2171,`status < 500`),cf()(),Aa(2172,`td`),bT(2173,`Which outcomes are stored and replayed. Others release the key.`),cf()(),Aa(2174,`tr`)(2175,`td`)(2176,`code`),bT(2177,`header`),cf()(),Aa(2178,`td`)(2179,`code`),bT(2180,`string`),cf()(),Aa(2181,`td`)(2182,`code`),bT(2183,`'Idempotency-Key'`),cf()(),Aa(2184,`td`),bT(2185,`The HTTP header, also read by GraphQL, and the transport header name for microservices.`),cf()(),Aa(2186,`tr`)(2187,`td`)(2188,`code`),bT(2189,`replayHeaders`),cf()(),Aa(2190,`td`)(2191,`code`),bT(2192,`string[]`),cf()(),Aa(2193,`td`),bT(2194,`none`),cf(),Aa(2195,`td`),bT(2196,`Response headers replayed in addition to `),Aa(2197,`code`),bT(2198,`Location`),cf(),bT(2199,`, `),Aa(2200,`code`),bT(2201,`Content-Type`),cf(),bT(2202,`, `),Aa(2203,`code`),bT(2204,`Content-Language`),cf(),bT(2205,`, `),Aa(2206,`code`),bT(2207,`Content-Location`),cf(),bT(2208,`, `),Aa(2209,`code`),bT(2210,`ETag`),cf(),bT(2211,` and `),Aa(2212,`code`),bT(2213,`Last-Modified`),cf(),bT(2214,`. `),Aa(2215,`code`),bT(2216,`Set-Cookie`),cf(),bT(2217,` and headers the platform writes for every response are refused at startup.`),cf()(),Aa(2218,`tr`)(2219,`td`)(2220,`code`),bT(2221,`encryption`),cf()(),Aa(2222,`td`),bT(2223,`an object with `),Aa(2224,`code`),bT(2225,`keys`),cf()(),Aa(2226,`td`),bT(2227,`off`),cf(),Aa(2228,`td`),bT(2229,`AES-256-GCM encryption of stored records. `),Aa(2230,`code`),bT(2231,`keys`),cf(),bT(2232,` lists 32-byte `),Aa(2233,`code`),bT(2234,`Buffer`),cf(),bT(2235,`s or strings of at least 32 characters, newest first. See `),Aa(2236,`a`,62),bT(2237,`Encrypt stored receipts`),cf(),bT(2238,`.`),cf()(),Aa(2239,`tr`)(2240,`td`)(2241,`code`),bT(2242,`allowInMemoryStorage`),cf()(),Aa(2243,`td`)(2244,`code`),bT(2245,`boolean`),cf()(),Aa(2246,`td`)(2247,`code`),bT(2248,`false`),cf()(),Aa(2249,`td`),bT(2250,`Lets a production app start without a registered store.`),cf()(),Aa(2251,`tr`)(2252,`td`)(2253,`code`),bT(2254,`isGlobal`),cf()(),Aa(2255,`td`)(2256,`code`),bT(2257,`boolean`),cf()(),Aa(2258,`td`)(2259,`code`),bT(2260,`true`),cf()(),Aa(2261,`td`),bT(2262,`Registers the module globally.`),cf()()()(),Aa(2263,`p`),bT(2264,`Every duration takes milliseconds or a string such as `),Aa(2265,`code`),bT(2266,`'45s'`),cf(),bT(2267,`, `),Aa(2268,`code`),bT(2269,`'48h'`),cf(),bT(2270,` or `),Aa(2271,`code`),bT(2272,`'7d'`),cf(),bT(2273,`.`),cf(),Aa(2274,`p`),bT(2275,`The key comes from these sources by default:`),cf(),Aa(2276,`table`)(2277,`thead`)(2278,`tr`)(2279,`th`),bT(2280,`Context`),cf(),Aa(2281,`th`),bT(2282,`Default source`),cf()()(),Aa(2283,`tbody`)(2284,`tr`)(2285,`td`),bT(2286,`HTTP`),cf(),Aa(2287,`td`),bT(2288,`The `),Aa(2289,`code`),bT(2290,`Idempotency-Key`),cf(),bT(2291,` header (the `),Aa(2292,`code`),bT(2293,`header`),cf(),bT(2294,` option)`),cf()(),Aa(2295,`tr`)(2296,`td`),bT(2297,`GraphQL`),cf(),Aa(2298,`td`),bT(2299,`The mutation's `),Aa(2300,`code`),bT(2301,`idempotencyKey`),cf(),bT(2302,` argument, then the header`),cf()(),Aa(2303,`tr`)(2304,`td`),bT(2305,`Microservices`),cf(),Aa(2306,`td`),bT(2307,`The payload's `),Aa(2308,`code`),bT(2309,`idempotencyKey`),cf(),bT(2310,` property, then the transport header named by `),Aa(2311,`code`),bT(2312,`header`),cf()()()()(),Aa(2313,`p`),bT(2314,`A key is 1 to 255 printable ASCII characters. A number in a payload counts as its digits.`),cf(),Aa(2315,`h5`,63)(2316,`span`),bT(2317,`Events`),cf()(),Aa(2318,`p`)(2319,`code`),bT(2320,`IdempotencyEvents.events$`),cf(),bT(2321,` emits every event, and each is also published on a diagnostics channel. Every payload has `),Aa(2322,`code`),bT(2323,`type`),cf(),bT(2324,`, `),Aa(2325,`code`),bT(2326,`context`),cf(),bT(2327,` (`),Aa(2328,`code`),bT(2329,`'http'`),cf(),bT(2330,`, `),Aa(2331,`code`),bT(2332,`'graphql'`),cf(),bT(2333,` or `),Aa(2334,`code`),bT(2335,`'rpc'`),cf(),bT(2336,`), `),Aa(2337,`code`),bT(2338,`handler`),cf(),bT(2339,` (such as `),Aa(2340,`code`),bT(2341,`OrdersController.pay`),cf(),bT(2342,`), `),Aa(2343,`code`),bT(2344,`key`),cf(),bT(2345,` and, when there is one, `),Aa(2346,`code`),bT(2347,`scope`),cf(),bT(2348,`.`),cf(),Aa(2349,`table`)(2350,`thead`)(2351,`tr`)(2352,`th`),bT(2353,`Type`),cf(),Aa(2354,`th`),bT(2355,`Channel`),cf(),Aa(2356,`th`),bT(2357,`Payload type`),cf(),Aa(2358,`th`),bT(2359,`Other fields`),cf(),Aa(2360,`th`),bT(2361,`When`),cf()()(),Aa(2362,`tbody`)(2363,`tr`)(2364,`td`)(2365,`code`),bT(2366,`replayed`),cf()(),Aa(2367,`td`)(2368,`code`),bT(2369,`nestjs:idempotency:replayed`),cf()(),Aa(2370,`td`)(2371,`code`),bT(2372,`IdempotencyReplayedEvent`),cf()(),Aa(2373,`td`)(2374,`code`),bT(2375,`status`),cf()(),Aa(2376,`td`),bT(2377,`A retry got the stored result, or a duplicate event was skipped`),cf()(),Aa(2378,`tr`)(2379,`td`)(2380,`code`),bT(2381,`rejected`),cf()(),Aa(2382,`td`)(2383,`code`),bT(2384,`nestjs:idempotency:rejected`),cf()(),Aa(2385,`td`)(2386,`code`),bT(2387,`IdempotencyRejectedEvent`),cf()(),Aa(2388,`td`)(2389,`code`),bT(2390,`code`),cf(),bT(2391,`, `),Aa(2392,`code`),bT(2393,`status`),cf()(),Aa(2394,`td`),bT(2395,`A call was refused before its handler ran. There is no `),Aa(2396,`code`),bT(2397,`key`),cf(),bT(2398,` for `),Aa(2399,`code`),bT(2400,`IDEMPOTENCY_KEY_REQUIRED`),cf(),bT(2401,` and `),Aa(2402,`code`),bT(2403,`IDEMPOTENCY_KEY_INVALID`),cf(),bT(2404,`.`),cf()(),Aa(2405,`tr`)(2406,`td`)(2407,`code`),bT(2408,`lock-lost`),cf()(),Aa(2409,`td`)(2410,`code`),bT(2411,`nestjs:idempotency:lock-lost`),cf()(),Aa(2412,`td`)(2413,`code`),bT(2414,`IdempotencyLockLostEvent`),cf()(),Aa(2415,`td`)(2416,`code`),bT(2417,`phase`),cf(),bT(2418,` (`),Aa(2419,`code`),bT(2420,`'extend'`),cf(),bT(2421,`, `),Aa(2422,`code`),bT(2423,`'complete'`),cf(),bT(2424,` or `),Aa(2425,`code`),bT(2426,`'release'`),cf(),bT(2427,`)`),cf(),Aa(2428,`td`),bT(2429,`The attempt's outcome isn't in the store, so a retry may run the handler again`),cf()()()(),Aa(2430,`p`)(2431,`code`),bT(2432,`IdempotencyEvent`),cf(),bT(2433,` is the union of the three payload types.`),cf(),Aa(2434,`h5`,64)(2435,`span`),bT(2436,`Errors`),cf()(),Aa(2437,`p`),bT(2438,`Rejections carry one of these codes, typed as `),Aa(2439,`code`),bT(2440,`IdempotencyErrorCode`),cf(),bT(2441,`. Over HTTP, the code is in the response body. In GraphQL, it's in the field error's `),Aa(2442,`code`),bT(2443,`extensions`),cf(),bT(2444,`, with `),Aa(2445,`code`),bT(2446,`httpStatus`),cf(),bT(2447,` and, for a 409, `),Aa(2448,`code`),bT(2449,`retryAfter`),cf(),bT(2450,`. On microservices, the `),Aa(2451,`code`),bT(2452,`RpcException`),cf(),bT(2453,` payload has `),Aa(2454,`code`),bT(2455,`status`),cf(),bT(2456,`, `),Aa(2457,`code`),bT(2458,`code`),cf(),bT(2459,`, `),Aa(2460,`code`),bT(2461,`statusCode`),cf(),bT(2462,`, `),Aa(2463,`code`),bT(2464,`message`),cf(),bT(2465,` and, for a 409, `),Aa(2466,`code`),bT(2467,`retryAfter`),cf(),bT(2468,`.`),cf(),Aa(2469,`table`)(2470,`thead`)(2471,`tr`)(2472,`th`),bT(2473,`Code`),cf(),Aa(2474,`th`),bT(2475,`Status`),cf(),Aa(2476,`th`),bT(2477,`Message`),cf(),Aa(2478,`th`),bT(2479,`Cause`),cf()()(),Aa(2480,`tbody`)(2481,`tr`)(2482,`td`)(2483,`code`),bT(2484,`IDEMPOTENCY_KEY_REQUIRED`),cf()(),Aa(2485,`td`),bT(2486,`400`),cf(),Aa(2487,`td`),bT(2488,`An idempotency key is required for this operation.`),cf(),Aa(2489,`td`),bT(2490,`No key, with `),Aa(2491,`code`),bT(2492,`required: true`),cf()()(),Aa(2493,`tr`)(2494,`td`)(2495,`code`),bT(2496,`IDEMPOTENCY_KEY_INVALID`),cf()(),Aa(2497,`td`),bT(2498,`400`),cf(),Aa(2499,`td`),bT(2500,`The idempotency key must be 1 to 255 printable ASCII characters.`),cf(),Aa(2501,`td`),bT(2502,`A key that is too long, has other characters, or isn't a string or number`),cf()(),Aa(2503,`tr`)(2504,`td`)(2505,`code`),bT(2506,`IDEMPOTENCY_KEY_IN_USE`),cf()(),Aa(2507,`td`),bT(2508,`409, with `),Aa(2509,`code`),bT(2510,`Retry-After`),cf()(),Aa(2511,`td`),bT(2512,`A request with this idempotency key is still being processed.`),cf(),Aa(2513,`td`),bT(2514,`The first call with the key is still running`),cf()(),Aa(2515,`tr`)(2516,`td`)(2517,`code`),bT(2518,`IDEMPOTENCY_KEY_REUSED`),cf()(),Aa(2519,`td`),bT(2520,`422`),cf(),Aa(2521,`td`),bT(2522,`This idempotency key was already used for a different request.`),cf(),Aa(2523,`td`),bT(2524,`The same key with a different fingerprint`),cf()(),Aa(2525,`tr`)(2526,`td`)(2527,`code`),bT(2528,`IDEMPOTENCY_RECORD_UNREADABLE`),cf()(),Aa(2529,`td`),bT(2530,`500`),cf(),Aa(2531,`td`),bT(2532,`The stored result for this idempotency key could not be read.`),cf(),Aa(2533,`td`),bT(2534,`The stored record fails to decrypt, for example because its key was removed`),cf()()()()(),Aa(2535,`a`,65),Wa(2536,`i`,66),Aa(2537,`span`),bT(2538,`Edit on GitHub`),cf()()()),c&2){let j=tT(145),x=tT(175),u=tT(213),M=tT(346),S=tT(511),P=tT(540),E=tT(563),L=tT(643),f=tT(706),D=tT(719),y=tT(748),_=tT(779),w=tT(860),g=tT(877),z=tT(907),q=tT(953),W=tT(992),N=tT(1041),B=tT(1123),H=tT(1143),Q=tT(1238),F=tT(1269),K=tT(1278),U=tT(1327),J=tT(1630);zC(142),hf(` `,jT(143,25,`orders/orders.service`,j.isJsActive),`
`),zC(30),hf(` `,jT(173,28,`app.module`,x.isJsActive),`
`),zC(38),hf(` `,jT(211,31,`orders/orders.controller`,u.isJsActive),`
`),zC(133),hf(` `,jT(344,34,`mobile/pay-order`,M.isJsActive),`
`),zC(165),hf(` `,jT(509,37,`database/schema`,S.isJsActive),`
`),zC(29),hf(` `,jT(538,40,`drizzle/0000_idempotency.sql`,P.isJsActive),`
`),zC(23),hf(` `,jT(561,43,`idempotency/drizzle-idempotency.store`,E.isJsActive),`
`),zC(80),hf(` `,jT(641,46,`app.module`,L.isJsActive),`
`),zC(63),hf(` `,jT(704,49,`test/step-3.drizzle-store.spec`,f.isJsActive),`
`),zC(13),hf(` `,jT(717,52,`typeorm/idempotency-key.entity`,D.isJsActive),`
`),zC(29),hf(` `,jT(746,55,`typeorm/data-source`,y.isJsActive),`
`),zC(31),hf(` `,jT(777,58,`typeorm/typeorm-idempotency.store`,_.isJsActive),`
`),zC(81),hf(` `,jT(858,61,`typeorm/app.module`,w.isJsActive),`
`),zC(17),hf(` `,jT(875,64,`test/typeorm-idempotency.store.spec`,g.isJsActive),`
`),zC(30),hf(` `,jT(905,67,`idempotency/redis-idempotency.store`,z.isJsActive),`
`),zC(46),hf(` `,jT(951,70,`app.module`,q.isJsActive),`
`),zC(39),hf(` `,jT(990,73,`test/step-4.redis-store.spec`,W.isJsActive),`
`),zC(49),hf(` `,jT(1039,76,`app.module`,N.isJsActive),`
`),zC(82),hf(` `,jT(1121,79,`app.module`,B.isJsActive),`
`),zC(20),hf(` `,jT(1141,82,`orders/orders.resolver`,H.isJsActive),`
`),zC(95),hf(` `,jT(1236,85,`shipping/shipping.controller`,Q.isJsActive),`
`),zC(31),hf(` `,jT(1267,88,`shipping/shipping.module`,F.isJsActive),`
`),zC(9),hf(` `,jT(1276,91,`shipping/main`,K.isJsActive),`
`),zC(49),hf(` `,jT(1325,94,`app.module`,U.isJsActive),`
`),zC(303),hf(` `,jT(1628,97,`test/pay-order.e2e-spec`,J.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return d})();var de=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(h){return(m||(m=im(d)))(h||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-locks`]],features:[xy],decls:2265,vars:154,consts:[[`contentReference`,``],[`appdf4c7ba6d7b683fe58b13e24f4268443831fef72`,``],[`appb60a3826bf2995f34e217adda7212f771a8f9092`,``],[`appb331a4184f942e98863afe6339dd82398da4498f`,``],[`app3a5d633f668aed6569d75f402bb6005f59ec4bdf`,``],[`appa5bfc51ebbc1fc602f2824077193ffc3c1052e58`,``],[`appc7fd7ffe4820c0c7fb408683acda5b43ef1d3fe3`,``],[`appaba24205f3cbef84f45a0aa3a8c3d0bf45e5fc56`,``],[`appe549e4897ded4e9276a7fc5fb8bdfc04bcc016c7`,``],[`app3fa6d1a8df89c36395494956b412913f2e2d5d11`,``],[`app36a570ca5a77fa7db0b3d949b4798a493e03e94d`,``],[`app5489a9b81f8eefcc48ce3f0c3352054f137e1281`,``],[`app712865bf8ed27f3bef1cc5293aadd8f4ef58f098`,``],[`appfd233277d4e05837e00bce8c6b334aae60bf1c06`,``],[`app2dd0f086c6c195c1d7eeda6bf79af7c7d7a63060`,``],[`appaf94c20942b589c4d91c6385e04122b976b8d6ba`,``],[`app74e302dd7f0882b0081eefc3732142ca3c67027e`,``],[`appa1f0941c3d4fe6d9e5080cfe2a61f3a41904036d`,``],[`app7731965b97a075bcd68c1662a0c52d84b8620ae1`,``],[`app3c8f04d80f4e402568bf6b53b58a1f7d9cde926d`,``],[`app0878abd88c598d9b83f1585aea96e4cbed2fb949`,``],[`app32e6a0e484a60d53686298dacfd154076bd40434`,``],[`appaac0f761adcfe719175dbecbca56452c0ebf91a8`,``],[`app1db3e57f3d63b37b298b61ee8ec36090fd2bd309`,``],[`app625ae49bc76e73273491e4c70247c2d1197bbe5c`,``],[`appe4f18a099a7b2ccfac9d0fa9c5e13f9140c1409d`,``],[`app2b5dc0ac882c4487962c06854ba3031f3630889d`,``],[`app7e5f3352d07db62c11a66c4940be6ca0110044b0`,``],[`app76f7b5cc3052e0c8d3a24a644c95c25fa3ec8b1a`,``],[`appbd0aa97865fa9cc3405c696ed1139b485d5d117f`,``],[`app03fd21d1fefc993f7e76625bbe1eecb28644b5cc`,``],[`app9808548e23758f60001e747028dc5bc5ff61b4ed`,``],[`app2960c472d19736d98f06ea7c8f4d8515711ea6e2`,``],[`app30256799d233afd9a5a60e39cccddc04af1f53f0`,``],[`app521cbbf04fe1cdcbfd1c09d75cf4cbaac709c3b9`,``],[`app536afccb31c30e3bf9423b08f029de02d9f63953`,``],[`appb7e77aaf235482a74ff903b29d654fbab593fd44`,``],[`app26c098cb96c1c50761228f6fa78c32b03ab044da`,``],[1,`content`],[1,`content-inner`],[`id`,`distributed-locks`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`appAnchor`,``,`id`,`see-the-problem`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/reliability/locks#try-it`],[1,`info`],[`href`,`/application/configuration`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://pglite.dev`],[`appAnchor`,``,`id`,`keep-locks-in-your-database`],[`href`,`/data/drizzle`],[`href`,`/reliability/locks#the-store-on-redis`],[1,`language-sql`],[`href`,`/reliability/locks#fence-the-writes`],[`href`,`/reliability/locks#the-store-contract`],[`appAnchor`,``,`id`,`run-each-job-on-one-instance`],[`href`,`/reliability/locks#events`],[`href`,`/reliability/locks#see-the-problem`],[`appAnchor`,``,`id`,`dont-let-a-long-run-overlap-itself`],[`appAnchor`,``,`id`,`fence-the-writes`],[`appAnchor`,``,`id`,`run-the-export-by-hand`],[`routerLink`,`/security/authorization`],[`appAnchor`,``,`id`,`the-store-on-redis`],[`appAnchor`,``,`id`,`hold-the-warehouse-feed-on-one-instance`],[`appAnchor`,``,`id`,`try-it`],[`appAnchor`,``,`id`,`testing`],[`href`,`/fundamentals/testing#end-to-end-testing`],[`appAnchor`,``,`id`,`production-checklist`],[`appAnchor`,``,`id`,`the-store-contract`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/locks/blob/master/lib/interfaces/lock-store.interface.ts`],[`href`,`/reliability/locks#keep-locks-in-your-database`],[`appAnchor`,``,`id`,`reference`],[`appAnchor`,``,`id`,`module-options`],[`href`,`/reliability/locks#testing`],[`appAnchor`,``,`id`,`decorators-and-methods`],[`href`,`/reliability/locks#run-each-job-on-one-instance`],[`href`,`/reliability/locks#dont-let-a-long-run-overlap-itself`],[`href`,`/reliability/locks#hold-the-warehouse-feed-on-one-instance`],[`href`,`/reliability/locks#run-the-export-by-hand`],[`appAnchor`,``,`id`,`events`],[1,`warning`],[`appAnchor`,``,`id`,`errors`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/reliability/locks.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,38,0)(2,`div`,39)(3,`h3`,40),bT(4,`Distributed locks`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/locks`),cf(),bT(8,` runs a scheduled job, or any other code, on one instance at a time, with leases that every instance of the application checks in a shared store.`),cf(),Aa(9,`p`),bT(10,`An online store for cat food and supplies runs two scheduled jobs with `),Aa(11,`code`),bT(12,`@nestjs/schedule`),cf(),bT(13,`. Every night at 02:00 an export sends the day's invoices to the accounting system, and every five minutes a reconciliation asks the warehouse for a full stock count and writes it to the products table. Both work on one instance. In production the order API runs on three, and `),Aa(14,`code`),bT(15,`@nestjs/schedule`),cf(),bT(16,` fires every `),Aa(17,`code`),bT(18,`@Cron()`),cf(),bT(19,` on each of them:`),cf(),Aa(20,`ul`)(21,`li`),bT(22,`The accounting system records every invoice three times.`),cf(),Aa(23,`li`),bT(24,`The warehouse is asked for three full counts every five minutes. A full count pages through the whole catalog, and at month end it takes longer than five minutes, so the next tick starts a second count alongside the first, then a third.`),cf()(),Aa(25,`p`),bT(26,`The usual fixes have holes. A `),Aa(27,`code`),bT(28,`RUN_JOBS=true`),cf(),bT(29,` instance works until a rolling deploy has two of them for a minute, or the job instance is the one that dies. A `),Aa(30,`code`),bT(31,`SET NX`),cf(),bT(32,` key in Redis at the top of the job works until its holder pauses for longer than the key's TTL, in a stop-the-world garbage collection or behind a network partition: another instance takes the key, and when the first one wakes up it finishes its run believing it still holds it. Two writers again, and neither knows. `),Aa(33,`code`),bT(34,`waitForCompletion: true`),cf(),bT(35,` on `),Aa(36,`code`),bT(37,`@Cron()`),cf(),bT(38,` stops a job from overlapping itself, on one instance.`),cf(),Aa(39,`p`)(40,`code`),bT(41,`@nestjs/locks`),cf(),bT(42,` turns a job into something one instance holds: a `),Aa(43,`strong`),bT(44,`lease`),cf(),bT(45,` that the holder keeps renewing while it is up, checked in a store every instance shares. Two decorators put it on a scheduled job, `),Aa(46,`code`),bT(47,`@OnOneInstance()`),cf(),bT(48,` and `),Aa(49,`code`),bT(50,`@WithoutOverlapping()`),cf(),bT(51,`, in the spirit of Laravel's `),Aa(52,`code`),bT(53,`onOneServer()`),cf(),bT(54,` and `),Aa(55,`code`),bT(56,`withoutOverlapping()`),cf(),bT(57,`. Under them is a distributed lock you can also take yourself, with the two things a lock needs to be trusted: an `),Aa(58,`code`),bT(59,`AbortSignal`),cf(),bT(60,` that aborts when the lease is lost, and a `),Aa(61,`strong`),bT(62,`fencing token`),cf(),bT(63,` that grows with every acquisition of a key, so a write from a holder that paused past its lease can be refused. A leader election is the same lease, held for as long as the leader lives.`),cf(),Aa(64,`p`),bT(65,`In this tutorial, you'll add it to the store, on PostgreSQL with Drizzle:`),cf(),Aa(66,`ul`)(67,`li`),bT(68,`Prove the duplicate runs with a test, on three instances of the app.`),cf(),Aa(69,`li`),bT(70,`Keep the locks in a table of the application's database.`),cf(),Aa(71,`li`),bT(72,`Run each job on one instance, with a handover when that instance dies.`),cf(),Aa(73,`li`),bT(74,`Keep a long stock count from overlapping itself.`),cf(),Aa(75,`li`),bT(76,`Fence the stock writes, so a paused instance can't overwrite a fresher count.`),cf(),Aa(77,`li`),bT(78,`Run the export by hand from an admin endpoint, never alongside the scheduled run.`),cf(),Aa(79,`li`),bT(80,`Keep the locks in Redis instead.`),cf(),Aa(81,`li`),bT(82,`Hold the warehouse's alert feed on one instance, with a leader election.`),cf()(),Aa(83,`h4`,41)(84,`span`),bT(85,`Installation`),cf()(),Aa(86,`p`),bT(87,`To get started, install the required dependency:`),cf(),Aa(88,`pre`)(89,`code`,42),bT(90,`
$ npm i --save @nestjs/locks
`),cf()(),Aa(91,`h4`,43)(92,`span`),bT(93,`See the problem`),cf()(),Aa(94,`p`),bT(95,`This is the application before the tutorial. The nightly export takes every placed order that has no invoice yet, uploads the batch, and marks the orders with the batch id:`),cf(),Aa(96,`app-copy-button`,44)(97,`span`,45),bT(98),LT(99,`extension`),Wa(100,`app-tabs`,null,1),cf(),Aa(102,`pre`)(103,`code`,46),bT(104,`
import { Injectable, Logger } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { Cron } from '@nestjs/schedule';
import { and, eq, inArray, isNull } from 'drizzle-orm';
import type { Database } from '../database/drizzle.js';
import { orders } from '../database/schema.js';
import { AccountingClient } from './accounting.client.js';

@Injectable()
export class InvoiceExportJob {
  private readonly logger = new Logger(InvoiceExportJob.name);

  constructor(
    @InjectDrizzle() private readonly db: Database,
    private readonly accountingClient: AccountingClient,
  ) {}

  @Cron(process.env.INVOICE_EXPORT_CRON ?? '0 2 * * *', { name: 'invoice-export', timeZone: 'Europe/Warsaw' })
  async exportInvoices() {
    // Every placed order without an invoice, not "yesterday's orders": a night
    // the export didn't run is caught up the next night.
    const pending = await this.db
      .select()
      .from(orders)
      .where(and(eq(orders.status, 'placed'), isNull(orders.invoicedAt)))
      .orderBy(orders.placedAt);
    if (pending.length === 0) {
      return;
    }

    const batch = await this.accountingClient.uploadInvoices(
      pending.map((order) => ({
        orderId: order.id,
        userId: order.userId,
        total: order.total,
        placedAt: order.placedAt.toISOString(),
      })),
    );
    await this.db
      .update(orders)
      .set({ invoicedAt: new Date(), invoiceBatch: batch.batchId })
      .where(inArray(orders.id, pending.map((order) => order.id)));
    this.logger.log(\`Exported \${pending.length} invoices in batch \${batch.batchId}\`);
  }
}
`),cf()()(),Aa(105,`p`),bT(106,`The accounting system records every batch it receives, so a batch uploaded twice is recorded twice. The reconciliation asks the warehouse for the counts and writes them:`),cf(),Aa(107,`app-copy-button`,44)(108,`span`,45),bT(109),LT(110,`extension`),Wa(111,`app-tabs`,null,2),cf(),Aa(113,`pre`)(114,`code`,46),bT(115,`
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StockRepository } from './stock.repository.step-1.js';
import { WarehouseClient } from './warehouse.client.js';

@Injectable()
export class StockReconciliationJob {
  private readonly logger = new Logger(StockReconciliationJob.name);

  constructor(
    private readonly warehouseClient: WarehouseClient,
    private readonly stockRepository: StockRepository,
  ) {}

  @Cron(process.env.STOCK_RECONCILIATION_CRON ?? CronExpression.EVERY_5_MINUTES, { name: 'stock-reconciliation' })
  async reconcileStock() {
    const counts = await this.warehouseClient.stockCounts();
    const written = await this.stockRepository.writeStock(counts);
    this.logger.log(\`Reconciled stock for \${written} products\`);
  }
}
`),cf()()(),Aa(116,`p`),bT(117,`The cron expressions come from the environment, with the real schedule as the default, so the tests and the `),Aa(118,`a`,47),bT(119,`Try it`),cf(),bT(120,` section can speed them up or turn them off. `),Aa(121,`code`),bT(122,`AccountingClient`),cf(),bT(123,` and `),Aa(124,`code`),bT(125,`WarehouseClient`),cf(),bT(126,` stand in for the two external systems; each counts what it was asked to do. The database is the application's, registered with `),Aa(127,`code`),bT(128,`DrizzleModule`),cf(),bT(129,` in `),Aa(130,`code`),bT(131,`app.module.ts`),cf(),bT(132,` and injected with `),Aa(133,`code`),bT(134,`@InjectDrizzle()`),cf(),bT(135,`.`),cf(),Aa(136,`blockquote`,48)(137,`strong`),bT(138,`Hint`),cf(),bT(139,` The tutorial reads `),Aa(140,`code`),bT(141,`process.env`),cf(),bT(142,` directly, to stay short. In an application, load the environment through `),Aa(143,`a`,49)(144,`code`),bT(145,`@nestjs/config`),cf()(),bT(146,` with a validation schema, so a missing variable stops the application at startup rather than at the first request, and read the values from `),Aa(147,`code`),bT(148,`ConfigService`),cf(),bT(149,`.
`),cf(),Aa(150,`p`),bT(151,`Before changing anything, prove the problem. The test starts three instances of the application in one process, on one database (PostgreSQL in-process with `),Aa(152,`a`,50),bT(153,`PGlite`),cf(),bT(154,`, or a PostgreSQL server when one is configured), and fires the schedules on each of them through `),Aa(155,`code`),bT(156,`@nestjs/schedule`),cf(),bT(157,`'s own registry, the way 02:00 would:`),cf(),Aa(158,`app-copy-button`,44)(159,`span`,45),bT(160),LT(161,`extension`),Wa(162,`app-tabs`,null,3),cf(),Aa(164,`pre`)(165,`code`,46),bT(166,`
describe.each(targets)('three instances with plain @Cron() jobs, on %s', (_, target) => {
  let database: TestDatabase;
  let accounting: FakeAccounting;
  let warehouse: FakeWarehouse;
  let instances: TestingModule[];
  let logger: CapturingLogger;

  beforeEach(async (context) => {
    if (!target) {
      return context.skip();
    }
    database = await openDatabase(target, 'locks_step_1');
    accounting = new FakeAccounting();
    warehouse = new FakeWarehouse();
    logger = new CapturingLogger();
    instances = [];
    for (let i = 0; i < 3; i++) {
      instances.push(await startInstance({ database, module: StepOneApp, accounting, warehouse, logger }));
    }
  });
  afterEach(async () => {
    for (const app of instances ?? []) {
      await app.close();
    }
    await database?.close();
  });

  /**
   * 02:00: every instance's scheduler fires the job, through @nestjs/schedule's own
   * callback (which doesn't wait for the job to finish).
   */
  const tick = (name: string) =>
    Promise.all(instances.map((app) => app.get(SchedulerRegistry).getCronJob(name).fireOnTick()));

  it('records every invoice three times', async () => {
    await tick('invoice-export');
    await until(() => logger.matching('Exported 3 invoices').length === 3);
    const orders = ['ord_1001', 'ord_1002', 'ord_1004'];
    expect(booked(accounting)).toEqual([orders, orders, orders]);
    // The orders point at whichever batch wrote last; the accounting system has all three.
    const rows = await database.query<{ invoice_batch: string }>(
      "SELECT DISTINCT invoice_batch FROM orders WHERE status = 'placed'",
    );
    expect(rows).toHaveLength(1);
  });

  it('asks the warehouse for three full counts every five minutes', async () => {
    await tick('stock-reconciliation');
    await until(() => logger.matching('Reconciled stock').length === 3);
    expect(warehouse.counts).toBe(3);
  });
});
`),cf()()(),Aa(167,`p`),bT(168,`Three batches, each with the same three orders, and three full counts. The `),Aa(169,`code`),bT(170,`orders`),cf(),bT(171,` table looks fine afterwards, every order has a batch id, which is why this goes unnoticed until accounting calls.`),cf(),Aa(172,`h4`,51)(173,`span`),bT(174,`Keep locks in your database`),cf()(),Aa(175,`p`)(176,`code`),bT(177,`@nestjs/locks`),cf(),bT(178,` works as soon as you import `),Aa(179,`code`),bT(180,`LocksModule`),cf(),bT(181,`, on an in-memory store. That store excludes callers in one process only: three instances would each have their own, all three would take "the" lock, and nothing would change. The locks need a store every instance shares, and the package doesn't ship one. It defines the contract, the `),Aa(182,`code`),bT(183,`LockStore`),cf(),bT(184,` interface, and you implement it in a provider of your application with the database it already has.`),cf(),Aa(185,`p`),bT(186,`This section shows that store twice: first with Drizzle on PostgreSQL, registered through `),Aa(187,`a`,52)(188,`code`),bT(189,`@nestjs/drizzle`),cf()(),bT(190,` with the `),Aa(191,`code`),bT(192,`pg`),cf(),bT(193,` driver, which is the tutorial's path, and then, under "With TypeORM" at the end of the section, the same store for an application whose ORM is TypeORM. Take one of the two, or keep the locks in Redis with `),Aa(194,`a`,53),bT(195,`the store on Redis`),cf(),bT(196,`. With Drizzle, a lock is one row per key:`),cf(),Aa(197,`app-copy-button`,44)(198,`span`,45),bT(199),LT(200,`extension`),Wa(201,`app-tabs`,null,4),cf(),Aa(203,`pre`)(204,`code`,46),bT(205,`
// The locks, read and written by DrizzleLockStore: one row per lock key.

export const locks = pgTable('locks', {
  key: text('key').primaryKey(),
  /** The holder's id; null once released. */
  owner: text('owner'),
  fencingToken: bigint('fencing_token', { mode: 'number' }).notNull(),
  /** On the database's clock: every instance agrees on it. */
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
});

/** Fencing tokens for every key: a sequence never goes back, so they only grow. */
export const locksFencingTokenSeq = pgSequence('locks_fencing_token_seq');
`),cf()()(),Aa(206,`p`),bT(207,`drizzle-kit writes the migration:`),cf(),Aa(208,`pre`)(209,`code`,42),bT(210,`
$ npx drizzle-kit generate --name=locks
$ npx drizzle-kit migrate
`),cf()(),Aa(211,`app-copy-button`,44)(212,`span`,45),bT(213),LT(214,`extension`),Wa(215,`app-tabs`,null,5),cf(),Aa(217,`pre`)(218,`code`,54),bT(219,`
CREATE SEQUENCE "public"."locks_fencing_token_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE TABLE "locks" (
	"key" text PRIMARY KEY NOT NULL,
	"owner" text,
	"fencing_token" bigint NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
`),cf()()(),Aa(220,`p`),bT(221,`The contract has three methods, and each takes the lock key and an `),Aa(222,`code`),bT(223,`owner`),cf(),bT(224,` first: a random id the package draws for each acquisition. Durations arrive in whole milliseconds.`),cf(),Aa(225,`ul`)(226,`li`)(227,`code`),bT(228,`acquire(key, owner, ttl)`),cf(),bT(229,` takes the key if no live lock holds it, and returns the lock's fencing token, or reports that the key is taken. It must be atomic: of any number of concurrent callers, exactly one may win.`),cf(),Aa(230,`li`)(231,`code`),bT(232,`renew(key, owner, ttl)`),cf(),bT(233,` is the heartbeat. It moves the expiry to `),Aa(234,`code`),bT(235,`ttl`),cf(),bT(236,` from now, if `),Aa(237,`code`),bT(238,`owner`),cf(),bT(239,` still holds a live lock on the key. The package calls it every `),Aa(240,`code`),bT(241,`ttl / 3`),cf(),bT(242,` while a lock is held.`),cf(),Aa(243,`li`)(244,`code`),bT(245,`release(key, owner)`),cf(),bT(246,` gives the lock back, if `),Aa(247,`code`),bT(248,`owner`),cf(),bT(249,` still holds it.`),cf()(),Aa(250,`p`),bT(251,`"If `),Aa(252,`code`),bT(253,`owner`),cf(),bT(254,` still holds it" has to be checked in the same statement that writes: checked in a separate read first, a takeover could slip in between. And the store measures `),Aa(255,`code`),bT(256,`ttl`),cf(),bT(257,` with its own clock, so every instance agrees on when a lock expires whatever their clocks say. With Drizzle, that is one conditional insert and two conditional updates:`),cf(),Aa(258,`app-copy-button`,44)(259,`span`,45),bT(260),LT(261,`extension`),Wa(262,`app-tabs`,null,6),cf(),Aa(264,`pre`)(265,`code`,46),bT(266,`
import { Injectable } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { LocksStorage, type LockAcquireResult, type LockStore } from '@nestjs/locks';
import { and, eq, gt, sql } from 'drizzle-orm';
import type { Database } from './drizzle.js';
import { locks } from './schema.js';

/** \`ttl\` from now, on the database's clock. */
const expiresIn = (ttl: number) => sql\`clock_timestamp() + \${ttl} * interval '1 millisecond'\`;

/** The lock on \`key\`, if \`owner\` still holds it: the compare-and-set of renew() and release(). */
const heldBy = (key: string, owner: string) =>
  and(eq(locks.key, key), eq(locks.owner, owner), gt(locks.expiresAt, sql\`clock_timestamp()\`));

@Injectable()
export class DrizzleLockStore implements LockStore {
  constructor(
    @InjectDrizzle() private readonly db: Database,
    storage: LocksStorage,
  ) {
    storage.registerSource(this);
  }

  async acquire(key: string, owner: string, ttl: number): Promise<LockAcquireResult> {
    // One statement: insert the lock, or take over a released or expired one. Of any number
    // of concurrent callers, one inserts or updates the row; the others find it held.
    const [row] = await this.db
      .insert(locks)
      .values({ key, owner, fencingToken: sql\`nextval('locks_fencing_token_seq')\`, expiresAt: expiresIn(ttl) })
      .onConflictDoUpdate({
        target: locks.key,
        // nextval() here runs after the row is locked: a later holder always gets a
        // greater token than the one before it. The row's own token is the floor, so a
        // sequence that went back (a restore, a failover) can't hand a key an old token.
        set: {
          owner,
          fencingToken: sql\`greatest(nextval('locks_fencing_token_seq'), \${locks.fencingToken} + 1)\`,
          expiresAt: expiresIn(ttl),
        },
        setWhere: sql\`\${locks.owner} is null or \${locks.expiresAt} <= clock_timestamp()\`,
      })
      .returning({ fencingToken: locks.fencingToken });
    return row ? { acquired: true, fencingToken: row.fencingToken } : { acquired: false };
  }

  async renew(key: string, owner: string, ttl: number): Promise<boolean> {
    const rows = await this.db
      .update(locks)
      .set({ expiresAt: expiresIn(ttl) })
      .where(heldBy(key, owner))
      .returning({ key: locks.key });
    return rows.length === 1;
  }

  async release(key: string, owner: string): Promise<boolean> {
    // Keep the row, so the next acquire() always takes the update path above, whose token is
    // drawn after the row is locked.
    const rows = await this.db
      .update(locks)
      .set({ owner: null })
      .where(heldBy(key, owner))
      .returning({ key: locks.key });
    return rows.length === 1;
  }
}
`),cf()()(),Aa(267,`p`),bT(268,`A few things about this store:`),cf(),Aa(269,`ul`)(270,`li`)(271,`strong`)(272,`code`),bT(273,`acquire()`),cf(),bT(274,` is one statement.`),cf(),bT(275,` The insert wins a key that has no row; the `),Aa(276,`code`),bT(277,`ON CONFLICT DO UPDATE`),cf(),bT(278,` with its `),Aa(279,`code`),bT(280,`WHERE`),cf(),bT(281,` takes over a released or expired one, and PostgreSQL re-checks that `),Aa(282,`code`),bT(283,`WHERE`),cf(),bT(284,` against the row after it locked it. Of many callers racing for the same key, one gets a row back and the rest get nothing. A `),Aa(285,`code`),bT(286,`SELECT`),cf(),bT(287,` followed by an `),Aa(288,`code`),bT(289,`INSERT`),cf(),bT(290,` would let several of them in.`),cf(),Aa(291,`li`)(292,`strong`),bT(293,`The fencing token comes from a sequence`),cf(),bT(294,`, drawn inside the statement, after the row lock. A sequence never goes back, so every acquisition of a key gets a greater token than the one before, across releases and expiries. It has gaps, because a caller that lost the race still consumed a value; that doesn't matter. The `),Aa(295,`code`),bT(296,`greatest()`),cf(),bT(297,` makes the row's own token the floor of the next one: if the sequence ever does go back (a restore from a backup, a failover to a replica that lagged), a key still can't get a token it had before. `),Aa(298,`a`,55),bT(299,`Fence the writes`),cf(),bT(300,` shows what the token is for.`),cf(),Aa(301,`li`)(302,`strong`)(303,`code`),bT(304,`release()`),cf(),bT(305,` keeps the row`),cf(),bT(306,` and clears the owner, so the next acquisition always takes the update path. With a delete, an insert that drew its token early could win the key after a later holder had already released it, and hand out a smaller token.`),cf(),Aa(307,`li`)(308,`strong`)(309,`code`),bT(310,`clock_timestamp()`),cf()(),bT(311,`, not `),Aa(312,`code`),bT(313,`now()`),cf(),bT(314,`: `),Aa(315,`code`),bT(316,`now()`),cf(),bT(317,` is the transaction's start time, which is what a lock's expiry must not depend on.`),cf(),Aa(318,`li`),bT(319,`Why a table and not `),Aa(320,`code`),bT(321,`pg_advisory_lock()`),cf(),bT(322,`: an advisory lock is bound to a session, so the holder would have to keep one connection checked out of the pool for the whole critical section, would lose the lock without knowing when that connection drops, can't renew it, and gets no expiry for a paused holder and no fencing token. A row has all of that, through any pool.`),cf()(),Aa(323,`p`),bT(324,`The package ships the contract as a test suite, so you can prove the store before you rely on it. `),Aa(325,`code`),bT(326,`lockStoreContract()`),cf(),bT(327,` returns cases for any test runner, and `),Aa(328,`code`),bT(329,`concurrent: true`),cf(),bT(330,` adds the races:`),cf(),Aa(331,`app-copy-button`,44)(332,`span`,45),bT(333),LT(334,`extension`),Wa(335,`app-tabs`,null,7),cf(),Aa(337,`pre`)(338,`code`,46),bT(339,`
describe('DrizzleLockStore on PGlite, the LockStore contract', () => {
  const client = new PGlite();
  const db = drizzlePglite({ client }) as unknown as Database;
  beforeAll(() => migratePglite(db as never, { migrationsFolder }));
  afterAll(() => client.close());

  // The concurrency cases run too; with one connection, PGlite runs them one statement at a time.
  const cases = lockStoreContract(() => new DrizzleLockStore(db, new LocksStorage()), { concurrent: true });
  for (const c of cases) {
    it(c.name, c.run);
  }
});
`),cf()()(),Aa(340,`p`),bT(341,`The example runs the same suite against a PostgreSQL server with a pool of 20 connections and 32 racing callers, where the statements really overlap. Run it that way in CI, on the PostgreSQL version you run in production.`),cf(),Aa(342,`p`),bT(343,`Now register the module and the store, next to the application's `),Aa(344,`code`),bT(345,`DrizzleModule`),cf(),bT(346,`. The store is a plain provider; its constructor registers it, so there is nothing to configure:`),cf(),Aa(347,`app-copy-button`,44)(348,`span`,45),bT(349),LT(350,`extension`),Wa(351,`app-tabs`,null,8),cf(),Aa(353,`pre`)(354,`code`,46),bT(355,`
import { Module } from '@nestjs/common';
import { DrizzleModule } from '@nestjs/drizzle';
import { LocksModule } from '@nestjs/locks';
import { ScheduleModule } from '@nestjs/schedule';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DrizzleLockStore } from './database/drizzle-lock.store.js';
import * as schema from './database/schema.js';
import { InventoryModule } from './inventory/inventory.module.js';
import { InvoicesModule } from './invoices/invoices.module.js';

@Module({
  imports: [
    // A pg pool on DATABASE_URL, closed in onApplicationShutdown(), after running jobs
    // finished and handed their locks back. The jobs and the store inject it with @InjectDrizzle().
    DrizzleModule.forRootAsync({
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL!, schema }),
    }),
    ScheduleModule.forRoot(),
    LocksModule.forRoot(),
    InvoicesModule,
    InventoryModule,
  ],
  providers: [DrizzleLockStore],
})
export class AppModule {}
`),cf()()(),Aa(356,`p`)(357,`code`),bT(358,`LocksModule.forRoot()`),cf(),bT(359,` takes a `),Aa(360,`code`),bT(361,`ttl`),cf(),bT(362,` (the default is `),Aa(363,`code`),bT(364,`'30s'`),cf(),bT(365,`: how long a lock lives without a renewal, so how soon another instance takes over after a crash), a `),Aa(366,`code`),bT(367,`storeTimeout`),cf(),bT(368,` (the default is `),Aa(369,`code`),bT(370,`'10s'`),cf(),bT(371,`: how long to wait for each store call before it fails, so a store that stops answering can't hang a job, a request or the shutdown), a `),Aa(372,`code`),bT(373,`clock`),cf(),bT(374,` for tests, and `),Aa(375,`code`),bT(376,`allowInMemoryStorage`),cf(),bT(377,`. `),Aa(378,`code`),bT(379,`forRootAsync()`),cf(),bT(380,` takes the same options from a factory. The module is global, so `),Aa(381,`code`),bT(382,`Locks`),cf(),bT(383,`, `),Aa(384,`code`),bT(385,`LocksContext`),cf(),bT(386,` and `),Aa(387,`code`),bT(388,`LocksStorage`),cf(),bT(389,` are available everywhere. When it initializes, it logs the store in use:`),cf(),Aa(390,`pre`)(391,`code`,42),bT(392,`
[Nest] 1270  - 09/24/2026, 9:44:02 AM     LOG [LocksModule] LocksStorage: DrizzleLockStore
`),cf()(),Aa(393,`p`),bT(394,`With nothing registered, the line names `),Aa(395,`code`),bT(396,`InMemoryLockStore`),cf(),bT(397,` and what that means. With `),Aa(398,`code`),bT(399,`NODE_ENV=production`),cf(),bT(400,` and nothing registered, the application doesn't start, because in memory every instance would take the same lock and run the same job:`),cf(),Aa(401,`pre`)(402,`code`,42),bT(403,'\nError: LocksStorage: no LockStore is registered, and NODE_ENV is "production": in memory, a lock only excludes callers in this process, so every instance of the app would take the same lock and run the same job. Implement LockStore in a provider that injects LocksStorage and calls `storage.registerSource(this)` in its constructor, or set `allowInMemoryStorage: true` in the LocksModule options to run in memory anyway (one instance).\n'),cf()(),Aa(404,`p`)(405,`strong`),bT(406,`With TypeORM.`),cf(),bT(407,` The same store for an application whose ORM is TypeORM, on the same table and sequence. Drizzle stays the tutorial's path: take this store instead of the one above, not next to it. The table is an entity, and every column states its type, so that the TypeORM CLI, which loads it without decorator metadata, sees the same schema as the application:`),cf(),Aa(408,`app-copy-button`,44)(409,`span`,45),bT(410),LT(411,`extension`),Wa(412,`app-tabs`,null,9),cf(),Aa(414,`pre`)(415,`code`,46),bT(416,`
import { Column, Entity, PrimaryColumn } from 'typeorm';

// The locks table, read and written by TypeOrmLockStore: the same table as the Drizzle
// schema in src/database/schema.ts. Every column states its type, so the entity loads the
// same with or without emitted decorator metadata (the TypeORM CLI runs it through tsx,
// which emits none).

@Entity('locks')
export class LockEntity {
  @PrimaryColumn({ type: 'text' })
  key: string;

  /** The holder's id; null once released. */
  @Column({ type: 'text', nullable: true })
  owner: string | null;

  /** Drawn from locks_fencing_token_seq, which the migration creates. \`pg\` returns a bigint as a string. */
  @Column({ type: 'bigint', name: 'fencing_token' })
  fencingToken: string;

  /** On the database's clock: every instance agrees on it. */
  @Column({ type: 'timestamptz', name: 'expires_at' })
  expiresAt: Date;
}
`),cf()()(),Aa(417,`p`),bT(418,`The TypeORM CLI and `),Aa(419,`code`),bT(420,`TypeOrmModule`),cf(),bT(421,` share one set of options, in a data source file:`),cf(),Aa(422,`app-copy-button`,44)(423,`span`,45),bT(424),LT(425,`extension`),Wa(426,`app-tabs`,null,10),cf(),Aa(428,`pre`)(429,`code`,46),bT(430,`
import { DataSource, type DataSourceOptions } from 'typeorm';
import { LockEntity } from './lock.entity.js';
import { Locks1790321710846 } from './migrations/1790321710846-Locks.js';

/** What the application's TypeOrmModule and the TypeORM CLI share. */
export const dataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [LockEntity],
  migrations: [Locks1790321710846],
} satisfies DataSourceOptions;

// The TypeORM CLI's data source: \`migration:generate\` compares the entities with this database.
export default new DataSource(dataSourceOptions);
`),cf()()(),Aa(431,`p`),bT(432,`Generate the migration from the entity, against a database with your previous migrations applied. The CLI needs a TypeScript loader for the data source file; this uses `),Aa(433,`code`),bT(434,`tsx`),cf(),bT(435,`:`),cf(),Aa(436,`pre`)(437,`code`,42),bT(438,`
$ npx tsx ./node_modules/typeorm/cli.js migration:generate src/typeorm/migrations/Locks -d src/typeorm/data-source.ts --pretty
Migration /store/src/typeorm/migrations/1790321710846-Locks.ts has been generated successfully.
`),cf()(),Aa(439,`p`),bT(440,`TypeORM has no entity for a sequence, so the migration it writes creates the table alone. Add the sequence to it yourself, before the table, and drop it in `),Aa(441,`code`),bT(442,`down()`),cf(),bT(443,`:`),cf(),Aa(444,`app-copy-button`,44)(445,`span`,45),bT(446),LT(447,`extension`),Wa(448,`app-tabs`,null,11),cf(),Aa(450,`pre`)(451,`code`,46),bT(452,`
import { MigrationInterface, QueryRunner } from "typeorm";

export class Locks1790321710846 implements MigrationInterface {
    name = 'Locks1790321710846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Added by hand: TypeORM has no entity for a sequence, so the CLI doesn't generate it.
        await queryRunner.query(\`
            CREATE SEQUENCE "locks_fencing_token_seq"
        \`);
        await queryRunner.query(\`
            CREATE TABLE "locks" (
                "key" text NOT NULL,
                "owner" text,
                "fencing_token" bigint NOT NULL,
                "expires_at" TIMESTAMP WITH TIME ZONE NOT NULL,
                CONSTRAINT "PK_c6e1e10d298aec42ba087dd57e5" PRIMARY KEY ("key")
            )
        \`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(\`
            DROP TABLE "locks"
        \`);
        await queryRunner.query(\`
            DROP SEQUENCE "locks_fencing_token_seq"
        \`);
    }

}
`),cf()()(),Aa(453,`p`)(454,`code`),bT(455,`migrations`),cf(),bT(456,` in the data source lists it. Apply it, and check that the entity and the database agree. The check doesn't compare sequences, so the one you added doesn't count as a change:`),cf(),Aa(457,`pre`)(458,`code`,42),bT(459,`
$ npx tsx ./node_modules/typeorm/cli.js migration:run -d src/typeorm/data-source.ts
$ npx tsx ./node_modules/typeorm/cli.js migration:generate src/typeorm/migrations/Check -d src/typeorm/data-source.ts --check
No changes in database schema were found
`),cf()(),Aa(460,`p`),bT(461,`Now the store, under the same rules as the Drizzle one:`),cf(),Aa(462,`app-copy-button`,44)(463,`span`,45),bT(464),LT(465,`extension`),Wa(466,`app-tabs`,null,12),cf(),Aa(468,`pre`)(469,`code`,46),bT(470,`
import { Injectable } from '@nestjs/common';
import { LocksStorage, type LockAcquireResult, type LockStore } from '@nestjs/locks';
import { DataSource } from 'typeorm';
import { LockEntity } from './lock.entity.js';

/** \`ttl\` from now, on the database's clock. */
const EXPIRES_IN = "clock_timestamp() + :ttl * interval '1 millisecond'";

/** The lock on \`key\`, if \`owner\` still holds it: the compare-and-set of renew() and release(). */
const HELD_BY = 'key = :key AND owner = :owner AND expires_at > clock_timestamp()';

@Injectable()
export class TypeOrmLockStore implements LockStore {
  constructor(
    private readonly dataSource: DataSource,
    storage: LocksStorage,
  ) {
    storage.registerSource(this);
  }

  async acquire(key: string, owner: string, ttl: number): Promise<LockAcquireResult> {
    // One statement: insert the lock, or take over a released or expired one. It is SQL
    // because the takeover draws its token from the locked row, which orUpdate() can't
    // express: it sets each column from EXCLUDED, whose nextval() ran before the row lock.
    const rows: { fencing_token: string }[] = await this.dataSource.query(
      \`INSERT INTO locks (key, owner, fencing_token, expires_at)
       VALUES ($1, $2, nextval('locks_fencing_token_seq'), clock_timestamp() + $3 * interval '1 millisecond')
       ON CONFLICT (key) DO UPDATE SET
         owner = EXCLUDED.owner,
         fencing_token = greatest(nextval('locks_fencing_token_seq'), locks.fencing_token + 1),
         expires_at = clock_timestamp() + $3 * interval '1 millisecond'
       WHERE locks.owner IS NULL OR locks.expires_at <= clock_timestamp()
       RETURNING fencing_token\`,
      [key, owner, ttl],
    );
    const [row] = rows;
    // \`pg\` returns a bigint as a string; the package takes the token as a number.
    return row ? { acquired: true, fencingToken: Number(row.fencing_token) } : { acquired: false };
  }

  async renew(key: string, owner: string, ttl: number): Promise<boolean> {
    const { affected } = await this.dataSource
      .createQueryBuilder()
      .update(LockEntity)
      .set({ expiresAt: () => EXPIRES_IN })
      .where(HELD_BY, { key, owner, ttl })
      .execute();
    return affected === 1;
  }

  async release(key: string, owner: string): Promise<boolean> {
    // Keep the row, so the next acquire() always takes the update path above, whose token is
    // drawn after the row is locked.
    const { affected } = await this.dataSource
      .createQueryBuilder()
      .update(LockEntity)
      .set({ owner: null })
      .where(HELD_BY, { key, owner })
      .execute();
    return affected === 1;
  }
}
`),cf()()(),Aa(471,`ul`)(472,`li`)(473,`strong`)(474,`code`),bT(475,`acquire()`),cf(),bT(476,` is the one statement written as SQL`),cf(),bT(477,`, through `),Aa(478,`code`),bT(479,`dataSource.query()`),cf(),bT(480,`. The insert query builder's `),Aa(481,`code`),bT(482,`orUpdate()`),cf(),bT(483,` writes an `),Aa(484,`code`),bT(485,`ON CONFLICT DO UPDATE`),cf(),bT(486,`, with the `),Aa(487,`code`),bT(488,`WHERE`),cf(),bT(489,` in its `),Aa(490,`code`),bT(491,`overwriteCondition`),cf(),bT(492,` option, but it sets every column from `),Aa(493,`code`),bT(494,`EXCLUDED`),cf(),bT(495,`: the token would be the one the insert drew before the row was locked, which a later holder of the key may already have passed. The SQL draws it in the `),Aa(496,`code`),bT(497,`SET`),cf(),bT(498,`, after the row lock, as the Drizzle store does.`),cf(),Aa(499,`li`)(500,`strong`)(501,`code`),bT(502,`renew()`),cf(),bT(503,` and `),Aa(504,`code`),bT(505,`release()`),cf()(),bT(506,` are the update query builder with the owner and the expiry in the `),Aa(507,`code`),bT(508,`WHERE`),cf(),bT(509,`, and read `),Aa(510,`code`),bT(511,`affected`),cf(),bT(512,`. Never `),Aa(513,`code`),bT(514,`save()`),cf(),bT(515,`, and no `),Aa(516,`code`),bT(517,`findOneBy()`),cf(),bT(518,` first: a read before the write lets a takeover slip in between.`),cf(),Aa(519,`li`)(520,`strong`),bT(521,`The token is converted with `),Aa(522,`code`),bT(523,`Number()`),cf(),bT(524,`.`),cf(),Aa(525,`code`),bT(526,`pg`),cf(),bT(527,` returns a `),Aa(528,`code`),bT(529,`bigint`),cf(),bT(530,` column as a string, and the package refuses a string token.`),cf(),Aa(531,`li`)(532,`strong`),bT(533,`Use it`),cf(),bT(534,` in place of the Drizzle store: `),Aa(535,`code`),bT(536,`TypeOrmModule.forRoot(dataSourceOptions)`),cf(),bT(537,` in `),Aa(538,`code`),bT(539,`AppModule`),cf(),bT(540,`, and `),Aa(541,`code`),bT(542,`TypeOrmLockStore`),cf(),bT(543,` in its providers instead of `),Aa(544,`code`),bT(545,`DrizzleLockStore`),cf(),bT(546,`. It injects the `),Aa(547,`code`),bT(548,`DataSource`),cf(),bT(549,` that `),Aa(550,`code`),bT(551,`TypeOrmModule`),cf(),bT(552,` provides, and the startup line names `),Aa(553,`code`),bT(554,`TypeOrmLockStore`),cf(),bT(555,`.`),cf()(),Aa(556,`p`),bT(557,`The contract suite runs on it unchanged, with the concurrency cases. TypeORM connects through `),Aa(558,`code`),bT(559,`pg`),cf(),bT(560,`, so the suite needs a PostgreSQL server and is skipped without one. Three more cases check that a key's tokens keep growing after the sequence went back, that the entity and the migration agree (what `),Aa(561,`code`),bT(562,`migration:generate --check`),cf(),bT(563,` checks), and that the store registers itself when provided in a module:`),cf(),Aa(564,`app-copy-button`,44)(565,`span`,45),bT(566),LT(567,`extension`),Wa(568,`app-tabs`,null,13),cf(),Aa(570,`pre`)(571,`code`,46),bT(572,`
/**
 * TypeOrmLockStore against the package's contract suite (\`@nestjs/locks/testing\`), on
 * PostgreSQL (the server in SQL_TEST_PG_URL, else a throwaway local cluster; see
 * test-support/postgres.ts), with the migration the TypeORM CLI generated. A pool, so the
 * concurrency cases race for real. Skipped, with the reason, without a server.
 */
import { Logger } from '@nestjs/common';
import { LocksModule, LocksStorage } from '@nestjs/locks';
import { lockStoreContract } from '@nestjs/locks/testing';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { startPostgres } from '../../../test-support/postgres.js';
import { dataSourceOptions } from '../src/typeorm/data-source.js';
import { TypeOrmLockStore } from '../src/typeorm/typeorm-lock.store.js';

const { postgres, reason } = await startPostgres();
afterAll(() => postgres?.stop());

describe.skipIf(!postgres)(\`TypeOrmLockStore on PostgreSQL\${postgres ? '' : \` (skipped: \${reason})\`}\`, () => {
  let dataSource: DataSource;
  let url: string;

  beforeAll(async () => {
    url = await postgres!.createDatabase('locks_typeorm_store');
    dataSource = await new DataSource({ ...dataSourceOptions, url, poolSize: 20 }).initialize();
    await dataSource.runMigrations();
  });
  afterAll(() => dataSource?.destroy());

  describe('the LockStore contract', () => {
    // The expiry cases wait in real time: the store reads the database's clock.
    const cases = lockStoreContract(() => new TypeOrmLockStore(dataSource, new LocksStorage()), { concurrent: { callers: 32 } });
    for (const c of cases) {
      it(c.name, c.run);
    }
  });

  it("keeps a key's tokens growing after the sequence went back (a restore, a failover to a lagging replica)", async () => {
    const store = new TypeOrmLockStore(dataSource, new LocksStorage());
    const key = \`reset-\${Date.now()}\`;
    await dataSource.query("SELECT setval('locks_fencing_token_seq', 1000)");
    const before = await store.acquire(key, 'a', 5_000);
    expect(before.acquired).toBe(true);
    expect(await store.release(key, 'a')).toBe(true);
    await dataSource.query('ALTER SEQUENCE locks_fencing_token_seq RESTART WITH 1');
    const after = await store.acquire(key, 'b', 5_000);
    expect(after.acquired).toBe(true);
    expect((after as { fencingToken: number }).fencingToken).toBeGreaterThan((before as { fencingToken: number }).fencingToken);
  });

  it('has a migration that matches the entity (what \`migration:generate --check\` checks)', async () => {
    const { upQueries } = await dataSource.driver.createSchemaBuilder().log();
    expect(upQueries.map((query) => query.query)).toEqual([]);
  });

  it('registers itself when provided in a module', async () => {
    const log = vi.spyOn(Logger.prototype, 'log').mockImplementation(() => {});
    const app = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot({ ...dataSourceOptions, url }), LocksModule.forRoot()],
      providers: [TypeOrmLockStore],
    }).compile();
    await app.init();
    try {
      expect(app.get(LocksStorage).source).toBe(app.get(TypeOrmLockStore));
      expect(log).toHaveBeenCalledWith('LocksStorage: TypeOrmLockStore');
    } finally {
      log.mockRestore();
      await app.close();
    }
  });
});
`),cf()()(),Aa(573,`blockquote`,48)(574,`strong`),bT(575,`Hint`),cf(),bT(576,` Using Prisma? `),Aa(577,`a`,56),bT(578,`The store contract`),cf(),bT(579,`, after the tutorial, lists what the store must guarantee and how Prisma expresses the atomic methods. Test your store against the same cases.
`),cf(),Aa(580,`h4`,57)(581,`span`),bT(582,`Run each job on one instance`),cf()(),Aa(583,`p`),bT(584,`Add `),Aa(585,`code`),bT(586,`@OnOneInstance()`),cf(),bT(587,` to both jobs, next to `),Aa(588,`code`),bT(589,`@Cron()`),cf(),bT(590,`:`),cf(),Aa(591,`app-copy-button`,44)(592,`span`,45),bT(593),LT(594,`extension`),Wa(595,`app-tabs`,null,14),cf(),Aa(597,`pre`)(598,`code`,46),bT(599,`
import { OnOneInstance } from '@nestjs/locks';
import { Cron } from '@nestjs/schedule';
`),cf()()(),Aa(600,`app-copy-button`,44)(601,`span`,45),bT(602),LT(603,`extension`),Wa(604,`app-tabs`,null,15),cf(),Aa(606,`pre`)(607,`code`,46),bT(608,`
@Cron(process.env.INVOICE_EXPORT_CRON ?? '0 2 * * *', { name: 'invoice-export', timeZone: 'Europe/Warsaw' })
@OnOneInstance({ key: 'invoices:nightly-export' })
async exportInvoices() {
`),cf()()(),Aa(609,`app-copy-button`,44)(610,`span`,45),bT(611),LT(612,`extension`),Wa(613,`app-tabs`,null,16),cf(),Aa(615,`pre`)(616,`code`,46),bT(617,`
@Cron(process.env.STOCK_RECONCILIATION_CRON ?? CronExpression.EVERY_5_MINUTES, { name: 'stock-reconciliation' })
@OnOneInstance({ key: 'inventory:stock-reconciliation' })
async reconcileStock() {
`),cf()()(),Aa(618,`p`),bT(619,`That is the whole change. What it does:`),cf(),Aa(620,`ul`)(621,`li`)(622,`strong`),bT(623,`The first instance whose scheduler fires the job takes the job's lease`),cf(),bT(624,`, a lock named after the key with an `),Aa(625,`code`),bT(626,`:owner`),cf(),bT(627,` suffix, and keeps renewing it every `),Aa(628,`code`),bT(629,`ttl / 3`),cf(),bT(630,` for as long as it is up. It runs this tick and every tick after it.`),cf(),Aa(631,`li`)(632,`strong`),bT(633,`On the other instances, the tick is skipped`),cf(),bT(634,`: the call resolves without running the method, a debug line says why, and `),Aa(635,`code`),bT(636,`LocksEvents.jobSkips$`),cf(),bT(637,` reports it (`),Aa(638,`a`,58),bT(639,`Events`),cf(),bT(640,`). Nothing is queued; the job's schedule is the schedule.`),cf(),Aa(641,`li`)(642,`strong`),bT(643,`When the owner dies`),cf(),bT(644,`, it stops renewing, the lease expires `),Aa(645,`code`),bT(646,`ttl`),cf(),bT(647,` (30 seconds) later, and the first instance whose tick comes after that takes the job over. When the owner shuts down cleanly, it finishes the runs in progress, hands the lease back, and the next tick anywhere takes it.`),cf(),Aa(648,`li`)(649,`strong`),bT(650,`The decorators wrap the method.`),cf(),Aa(651,`code`),bT(652,`@nestjs/schedule`),cf(),bT(653,` isn't patched, and it doesn't know they are there: its explorer finds the `),Aa(654,`code`),bT(655,`@Cron()`),cf(),bT(656,` metadata on the wrapper, in either decorator order, and calls the wrapper, which asks `),Aa(657,`code`),bT(658,`LocksModule`),cf(),bT(659,` whether this call may run. `),Aa(660,`code`),bT(661,`@Interval()`),cf(),bT(662,` and `),Aa(663,`code`),bT(664,`@Timeout()`),cf(),bT(665,` jobs work the same way, and so does calling the method yourself.`),cf(),Aa(666,`li`)(667,`strong`),bT(668,`The key`),cf(),bT(669,` defaults to `),Aa(670,`code`),bT(671,`ClassName.methodName`),cf(),bT(672,`. Set it on a job that must never run twice: a renamed class or method changes the default, and during a rolling deploy the old and the new instances would each run the job once. Two jobs with the same default key fail at startup, and so does a job whose key is another job's lease (`),Aa(673,`code`),bT(674,`<key>:owner`),cf(),bT(675,`) or an election's key: they would exclude each other silently.`),cf()(),Aa(676,`p`),bT(677,`Ownership is sticky on purpose. A race per tick would be simpler, but a tick isn't an instant: the instances' clocks differ by tens of milliseconds, so a per-tick lock would have to outlive the run by the skew, and a fast job would need a "ran at" record to stop a lagging instance from running the tick again. A lease held between ticks has none of that, at the cost of one instance running all of a job's ticks, which a scheduled job rarely minds.`),cf(),Aa(678,`p`),bT(679,`What about a tick that nobody runs? While the owner is down, up to `),Aa(680,`code`),bT(681,`ttl`),cf(),bT(682,` of ticks are skipped, and the nightly export can fall on those thirty seconds. `),Aa(683,`strong`),bT(684,`Missed ticks aren't caught up`),cf(),bT(685,`: nothing records when a job last ran. Write jobs that do everything that is due rather than "yesterday's". The export takes every order without an invoice, so a night it didn't run is caught up the next night; the reconciliation writes the current counts, so a missed tick costs five minutes of staleness. A job whose ticks each do something distinct keeps that record in its own table.`),cf(),Aa(686,`p`),bT(687,`The test from `),Aa(688,`a`,59),bT(689,`See the problem`),cf(),bT(690,`, with the new jobs and the store, now records every invoice once, and the test that stops an instance from renewing (its clock stands still, as if the process had died) shows the handover:`),cf(),Aa(691,`app-copy-button`,44)(692,`span`,45),bT(693),LT(694,`extension`),Wa(695,`app-tabs`,null,17),cf(),Aa(697,`pre`)(698,`code`,46),bT(699,`
it('records every invoice once, and counts the stock once per tick', async () => {
  const apps = [await start(), await start(), await start()];
  await tick(apps, 'export');
  expect(booked(accounting)).toEqual([['ord_1001', 'ord_1002', 'ord_1004']]);
  await tick(apps, 'reconcile');
  await tick(apps, 'reconcile');
  expect(warehouse.counts).toBe(2);
  expect(logger.matching(/runs on this instance \\(lease "inventory:stock-reconciliation:owner"/)).toHaveLength(1);
  expect(logger.matching('Skipped StockReconciliationJob.reconcileStock: it runs on another instance')).toHaveLength(4);
});
`),cf()()(),Aa(700,`app-copy-button`,44)(701,`span`,45),bT(702),LT(703,`extension`),Wa(704,`app-tabs`,null,18),cf(),Aa(706,`pre`)(707,`code`,46),bT(708,`
it('moves the job to another instance when its owner dies, after ttl', async () => {
  // A's clock stands still: it stops renewing, as if its process died.
  const crashed = await start({ clock: new ManualLockClock(), ttl: '1s' });
  const survivor = await start({ ttl: '1s' });
  await tick([crashed, survivor], 'export');
  expect(booked(accounting)).toHaveLength(1);

  await database.query("INSERT INTO orders (id, user_id, items, total, status, placed_at) VALUES ('ord_1005', 'usr_dave', '[]', 999, 'placed', now())");
  expect(await survivor.get(InvoiceExportJob).exportInvoices()).toBeUndefined(); // the lease is still A's
  await sleep(1_200); // the database's clock passes A's lease
  await survivor.get(InvoiceExportJob).exportInvoices();
  expect(booked(accounting)).toEqual([['ord_1001', 'ord_1002', 'ord_1004'], ['ord_1005']]);
});
`),cf()()(),Aa(709,`p`)(710,`code`),bT(711,`ManualLockClock`),cf(),bT(712,` is the package's clock for tests: it only moves when told to. An instance on it never renews, so the database, on its own clock, expires the instance's locks after `),Aa(713,`code`),bT(714,`ttl`),cf(),bT(715,`.`),cf(),Aa(716,`h4`,60)(717,`span`),bT(718,`Don't let a long run overlap itself`),cf()(),Aa(719,`p`)(720,`code`),bT(721,`@OnOneInstance()`),cf(),bT(722,` puts the reconciliation on one instance. It doesn't stop that instance from starting the next count while the last one is still running, and neither does a plain `),Aa(723,`code`),bT(724,`@Cron()`),cf(),bT(725,`. At month end the count takes longer than five minutes, so the warehouse gets a second full count, then a third. Add `),Aa(726,`code`),bT(727,`@WithoutOverlapping()`),cf(),bT(728,`:`),cf(),Aa(729,`app-copy-button`,44)(730,`span`,45),bT(731),LT(732,`extension`),Wa(733,`app-tabs`,null,19),cf(),Aa(735,`pre`)(736,`code`,46),bT(737,`
@Cron(process.env.STOCK_RECONCILIATION_CRON ?? CronExpression.EVERY_5_MINUTES, { name: 'stock-reconciliation' })
@OnOneInstance({ key: 'inventory:stock-reconciliation' })
@WithoutOverlapping()
async reconcileStock() {
`),cf()()(),Aa(738,`p`),bT(739,`A run now takes a second lock, named after the same key (the two decorators on one method share it), holds it for the whole run, renewing it, and releases it when the run ends. A tick that finds the lock held is skipped, on this instance or any other: the ticks during a long count are dropped, and the first tick after it runs. If the run crashes, the lock expires after `),Aa(740,`code`),bT(741,`ttl`),cf(),bT(742,` and the next tick runs. `),Aa(743,`code`),bT(744,`@WithoutOverlapping()`),cf(),bT(745,` on its own, without `),Aa(746,`code`),bT(747,`@OnOneInstance()`),cf(),bT(748,`, means "any instance, one run at a time".`),cf(),Aa(749,`p`),bT(750,`The test drives two instances on one `),Aa(751,`code`),bT(752,`ManualLockClock`),cf(),bT(753,`, holds a count open, and advances the clock through three ticks:`),cf(),Aa(754,`app-copy-button`,44)(755,`span`,45),bT(756),LT(757,`extension`),Wa(758,`app-tabs`,null,20),cf(),Aa(760,`pre`)(761,`code`,46),bT(762,`
it('with @WithoutOverlapping(), every tick during the run is skipped, then the next one runs', async () => {
  const [owner, other] = [await start(StepFourJob), await start(StepFourJob)];
  const slow = warehouse.pauseNext();
  const first = owner!.reconcileStock();
  await until(() => warehouse.counts === 1);
  for (let tick = 0; tick < 3; tick++) {
    await clock.advance('5m'); // the run goes on, its locks renewed
    await Promise.all([owner!.reconcileStock(), other!.reconcileStock()]);
  }
  expect(warehouse.counts).toBe(1);
  expect(logger.matching('Skipped StockReconciliationJob.reconcileStock: a run is still in progress')).toHaveLength(3);
  expect(logger.matching('Skipped StockReconciliationJob.reconcileStock: it runs on another instance')).toHaveLength(3);
  slow.resume();
  await first;
  await clock.advance('5m');
  await Promise.all([owner!.reconcileStock(), other!.reconcileStock()]);
  expect(warehouse.counts).toBe(2);
});
`),cf()()(),Aa(763,`p`)(764,`code`),bT(765,`clock.advance('5m')`),cf(),bT(766,` fires every renewal that falls due on the way, in order, and waits for each to reach the store, so fifteen minutes of a long run take a moment, with the run's locks renewed the whole time.`),cf(),Aa(767,`h4`,61)(768,`span`),bT(769,`Fence the writes`),cf()(),Aa(770,`p`),bT(771,`A lease can't stop a holder that is paused. Take the reconciliation on instance A: it reads the counts from the warehouse (salmon kibble: 12), and then A stalls, in a stop-the-world garbage collection, a swap, a VM migration, a debugger. It stops renewing. Thirty seconds later the database expires its locks, and B takes the job over at its next tick: it reads fresher counts (three bags were sold and shipped since: salmon kibble: 9) and writes them. Then A wakes up and finishes its run, with the counts it read before the pause. Salmon kibble is back at 12, and the store sells three bags it doesn't have.`),cf(),Aa(772,`p`),bT(773,`A's signal aborts at its next renewal, when the database refuses it, but a write that is already on its way goes through. Note what the lease does and doesn't promise. A holder counts its own deadline, `),Aa(774,`code`),bT(775,`ttl`),cf(),bT(776,` from the moment it sent the last renewal the store confirmed, which is before the store processed it: a holder that is running gives up no later than the store's expiry, so its signal aborts before any other instance can take the key. The window exists only for a holder that isn't running (paused, stopped, its event loop blocked): from the store's expiry until it runs again, it still believes it holds the lock. What stops its write is the `),Aa(777,`strong`),bT(778,`fencing token`),cf(),bT(779,`: every acquisition of a key gets a token greater than every token the key had before, and the resource being written keeps the highest token it has seen and refuses a lower one. A's token is lower than B's, so A's late write updates nothing.`),cf(),Aa(780,`p`),bT(781,`The products table gets a column for it:`),cf(),Aa(782,`app-copy-button`,44)(783,`span`,45),bT(784),LT(785,`extension`),Wa(786,`app-tabs`,null,21),cf(),Aa(788,`pre`)(789,`code`,46),bT(790,`
export const products = pgTable('products', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  /** In cents. */
  price: integer('price').notNull(),
  inStock: integer('in_stock').notNull(),
  /** The fencing token of the stock reconciliation run that last wrote \`inStock\`. */
  stockFencingToken: bigint('stock_fencing_token', { mode: 'number' }).notNull().default(0),
});
`),cf()()(),Aa(791,`pre`)(792,`code`,42),bT(793,`
$ npx drizzle-kit generate --name=stock_fencing_token
$ npx drizzle-kit migrate
`),cf()(),Aa(794,`app-copy-button`,44)(795,`span`,45),bT(796),LT(797,`extension`),Wa(798,`app-tabs`,null,22),cf(),Aa(800,`pre`)(801,`code`,54),bT(802,`
ALTER TABLE "products" ADD COLUMN "stock_fencing_token" bigint DEFAULT 0 NOT NULL;
`),cf()()(),Aa(803,`p`),bT(804,`The repository writes a count only if no run with a greater token has written that product, and records the token it wrote with, in the same statement:`),cf(),Aa(805,`app-copy-button`,44)(806,`span`,45),bT(807),LT(808,`extension`),Wa(809,`app-tabs`,null,23),cf(),Aa(811,`pre`)(812,`code`,46),bT(813,`
import { Injectable } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { and, eq, lte } from 'drizzle-orm';
import type { Database } from '../database/drizzle.js';
import { products } from '../database/schema.js';
import type { StockCount } from './warehouse.client.js';

@Injectable()
export class StockRepository {
  constructor(@InjectDrizzle() private readonly db: Database) {}

  /**
   * Writes the counts a reconciliation run read, fenced by the run's token: a product that a
   * newer run (a greater token) already wrote is left alone.
   */
  async writeStock(counts: StockCount[], fencingToken: number): Promise<{ written: number; stale: number }> {
    let written = 0;
    for (const { productId, count } of counts) {
      const rows = await this.db
        .update(products)
        .set({ inStock: count, stockFencingToken: fencingToken })
        .where(and(eq(products.id, productId), lte(products.stockFencingToken, fencingToken)))
        .returning({ id: products.id });
      written += rows.length;
    }
    return { written, stale: counts.length - written };
  }
}
`),cf()()(),Aa(814,`p`),bT(815,`The job gets its token, and its signal, from `),Aa(816,`code`),bT(817,`LocksContext`),cf(),bT(818,`. `),Aa(819,`code`),bT(820,`@nestjs/schedule`),cf(),bT(821,` calls the method without arguments, so the context carries them, through `),Aa(822,`code`),bT(823,`AsyncLocalStorage`),cf(),bT(824,`, to every service the job calls:`),cf(),Aa(825,`app-copy-button`,44)(826,`span`,45),bT(827),LT(828,`extension`),Wa(829,`app-tabs`,null,24),cf(),Aa(831,`pre`)(832,`code`,46),bT(833,`
import { Injectable, Logger } from '@nestjs/common';
import { LocksContext, OnOneInstance, WithoutOverlapping } from '@nestjs/locks';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StockRepository } from './stock.repository.js';
import { WarehouseClient } from './warehouse.client.js';

@Injectable()
export class StockReconciliationJob {
  private readonly logger = new Logger(StockReconciliationJob.name);

  constructor(
    private readonly warehouseClient: WarehouseClient,
    private readonly stockRepository: StockRepository,
    private readonly locksContext: LocksContext,
  ) {}

  @Cron(process.env.STOCK_RECONCILIATION_CRON ?? CronExpression.EVERY_5_MINUTES, { name: 'stock-reconciliation' })
  @OnOneInstance({ key: 'inventory:stock-reconciliation' })
  @WithoutOverlapping()
  async reconcileStock() {
    const { fencingToken, signal } = this.locksContext;
    // Aborts the count if this run loses its lock...
    const counts = await this.warehouseClient.stockCounts({ signal });
    // ...and the token stops a write that slips through anyway.
    const { written, stale } = await this.stockRepository.writeStock(counts, fencingToken!);
    if (stale > 0) {
      this.logger.warn(\`Skipped \${stale} stale stock writes: a newer run (token > \${fencingToken}) wrote those products\`);
    }
    this.logger.log(\`Reconciled stock for \${written} products (fencing token \${fencingToken})\`);
  }
}
`),cf()()(),Aa(834,`p`),bT(835,`The token is the run lock's, a new and higher one for every run. The signal aborts when the run's lock or the instance's lease is lost, and its reason is a `),Aa(836,`code`),bT(837,`LockLostError`),cf(),bT(838,` that says how the loss was detected: the store refused a renewal, or `),Aa(839,`code`),bT(840,`ttl`),cf(),bT(841,` passed without one reaching the store. Pass the signal to what the job calls, `),Aa(842,`code`),bT(843,`fetch`),cf(),bT(844,`, the database driver, an HTTP client; a job that ignores it keeps running, as it would in any process. Nothing is killed.`),cf(),Aa(845,`p`),bT(846,`The test reproduces the pause against PostgreSQL. Instance A runs on a `),Aa(847,`code`),bT(848,`ManualLockClock`),cf(),bT(849,`, so it stops renewing; the warehouse client holds A's count open after A read it; the shelves change; B takes over 1.2 seconds later (the test's `),Aa(850,`code`),bT(851,`ttl`),cf(),bT(852,` is one second) and writes salmon kibble: 9. Then A's count resumes:`),cf(),Aa(853,`app-copy-button`,44)(854,`span`,45),bT(855),LT(856,`extension`),Wa(857,`app-tabs`,null,25),cf(),Aa(859,`pre`)(860,`code`,46),bT(861,`
it('without fencing, the paused instance overwrites the fresh count with its stale one', async () => {
  const { stale, resume } = await pauseAWhileBTakesOver(UnfencedJob);
  resume(); // A wakes up and writes what it read before the pause
  expect(await stale).toBeUndefined();
  expect(await kibble()).toBe(12); // three bags the store doesn't have
});

it("with the run's fencing token, the database refuses the stale write", async () => {
  const { stale, resume } = await pauseAWhileBTakesOver(StockReconciliationJob);
  resume(); // A wakes up before it noticed it lost its locks, and writes
  expect(await stale).toBeUndefined();
  expect(await kibble()).toBe(9);
  expect(logger.matching(/WARN Skipped 3 stale stock writes: a newer run \\(token > \\d+\\) wrote those products/)).toHaveLength(1);
  const tokens = await database.query<{ stock_fencing_token: string }>('SELECT DISTINCT stock_fencing_token FROM products');
  expect(tokens).toHaveLength(1); // every product carries B's token
});

it('a run that notices it lost its lock stops at its signal, before writing', async () => {
  const { stale, resume } = await pauseAWhileBTakesOver(StockReconciliationJob);
  await clockA.advance('1s'); // A's clock moves: its next renewal is refused
  expect(await stale).toBeInstanceOf(LockLostError);
  resume();
  expect(await kibble()).toBe(9);
  expect(logger.matching(/WARN Lost the lock "inventory:stock-reconciliation(:owner)?"/).length).toBeGreaterThan(0);
});
`),cf()()(),Aa(862,`p`),bT(863,`With the previous section's job, the stale write goes through and salmon kibble is back at 12. With the token, the database refuses it, and the job logs that it skipped three stale writes. And a run that gets to its next renewal before writing stops at the signal, with a `),Aa(864,`code`),bT(865,`LockLostError`),cf(),bT(866,`, and writes nothing. The package logs a warning for every lost lock and emits a `),Aa(867,`code`),bT(868,`lock-lost`),cf(),bT(869,` event, because a lost lock means another instance may be in the same critical section right now: only the token keeps the two apart.`),cf(),Aa(870,`h4`,62)(871,`span`),bT(872,`Run the export by hand`),cf()(),Aa(873,`p`),bT(874,`Accounting sometimes asks for the export before 02:00. An admin endpoint runs it, and it must never run alongside the scheduled run, on any instance. The scheduled run holds the lock named by its key; the endpoint takes the same lock with `),Aa(875,`code`),bT(876,`Locks.withLock()`),cf(),bT(877,`, waiting up to two seconds for a run that is about to finish:`),cf(),Aa(878,`app-copy-button`,44)(879,`span`,45),bT(880),LT(881,`extension`),Wa(882,`app-tabs`,null,26),cf(),Aa(884,`pre`)(885,`code`,46),bT(886,`
import { ConflictException, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { LockNotAcquiredError, Locks } from '@nestjs/locks';
import { AdminGuard } from '../admin/admin.guard.js';
import { INVOICE_EXPORT_LOCK, InvoiceExportJob } from './invoice-export.job.js';

@Controller('admin/invoice-exports')
@UseGuards(AdminGuard)
export class InvoiceExportsController {
  constructor(
    private readonly locks: Locks,
    private readonly invoiceExportJob: InvoiceExportJob,
  ) {}

  /** Runs the export now, unless a run (scheduled or not) holds its lock. */
  @Post()
  @HttpCode(200)
  async exportNow() {
    try {
      return await this.locks.withLock(INVOICE_EXPORT_LOCK, () => this.invoiceExportJob.export(), { wait: '2s' });
    } catch (error) {
      if (error instanceof LockNotAcquiredError) {
        throw new ConflictException('An invoice export is already running. Try again when it has finished.');
      }
      throw error;
    }
  }
}
`),cf()()(),Aa(887,`p`),bT(888,`The job exports the key as a constant, gets `),Aa(889,`code`),bT(890,`@WithoutOverlapping()`),cf(),bT(891,` too, and splits the work out of the scheduled method so the endpoint can call it and return its result:`),cf(),Aa(892,`app-copy-button`,44)(893,`span`,45),bT(894),LT(895,`extension`),Wa(896,`app-tabs`,null,27),cf(),Aa(898,`pre`)(899,`code`,46),bT(900,`
/** The export's lock: held by a run, scheduled or started by hand. */
export const INVOICE_EXPORT_LOCK = 'invoices:nightly-export';

export interface InvoiceExportResult {
  exported: number;
  batchId?: string;
}
`),cf()()(),Aa(901,`app-copy-button`,44)(902,`span`,45),bT(903),LT(904,`extension`),Wa(905,`app-tabs`,null,28),cf(),Aa(907,`pre`)(908,`code`,46),bT(909,`
@Cron(process.env.INVOICE_EXPORT_CRON ?? '0 2 * * *', { name: 'invoice-export', timeZone: 'Europe/Warsaw' })
@OnOneInstance({ key: INVOICE_EXPORT_LOCK })
@WithoutOverlapping()
async exportInvoices() {
  await this.export();
}

/** Call it under the INVOICE_EXPORT_LOCK lock. */
async export(): Promise<InvoiceExportResult> {
`),cf()()(),Aa(910,`p`)(911,`code`),bT(912,`withLock(key, fn, options)`),cf(),bT(913,` runs `),Aa(914,`code`),bT(915,`fn`),cf(),bT(916,` under the lock and releases it whether `),Aa(917,`code`),bT(918,`fn`),cf(),bT(919,` resolves or throws. `),Aa(920,`code`),bT(921,`wait`),cf(),bT(922,` is how long to keep trying, with backoff, before it gives up with a `),Aa(923,`code`),bT(924,`LockNotAcquiredError`),cf(),bT(925,`; the default is to try once. `),Aa(926,`code`),bT(927,`acquire(key, options)`),cf(),bT(928,` is the same without the callback: it resolves a `),Aa(929,`code`),bT(930,`Lock`),cf(),bT(931,`, or `),Aa(932,`code`),bT(933,`null`),cf(),bT(934,` when the key was taken, and you release it yourself, or with `),Aa(935,`code`),bT(936,`await using`),cf(),bT(937,`. A `),Aa(938,`code`),bT(939,`Lock`),cf(),bT(940,` has the `),Aa(941,`code`),bT(942,`fencingToken`),cf(),bT(943,` and the `),Aa(944,`code`),bT(945,`signal`),cf(),bT(946,`, and inside `),Aa(947,`code`),bT(948,`withLock()`),cf(),bT(949,` so does `),Aa(950,`code`),bT(951,`LocksContext`),cf(),bT(952,`, exactly as in a job.`),cf(),Aa(953,`p`),bT(954,`Both also take a `),Aa(955,`code`),bT(956,`signal`),cf(),bT(957,` of their own, the request's for example, which stops the waiting. It stops the wait for the store too: a call still waiting for the store's answer rejects with the signal's reason, `),Aa(958,`code`),bT(959,`fn`),cf(),bT(960,` doesn't run, and a lock the store grants after that goes back to it. `),Aa(961,`code`),bT(962,`wait`),cf(),bT(963,` doesn't cut short a store call already on its way; the module's `),Aa(964,`code`),bT(965,`storeTimeout`),cf(),bT(966,` does, so a call takes at most `),Aa(967,`code`),bT(968,`wait`),cf(),bT(969,` plus `),Aa(970,`code`),bT(971,`storeTimeout`),cf(),bT(972,`. A store that doesn't answer within `),Aa(973,`code`),bT(974,`storeTimeout`),cf(),bT(975,` fails the call with a `),Aa(976,`code`),bT(977,`LockStoreTimeoutError`),cf(),bT(978,`.`),cf(),Aa(979,`p`),bT(980,`Neither `),Aa(981,`code`),bT(982,`LockNotAcquiredError`),cf(),bT(983,` nor `),Aa(984,`code`),bT(985,`LockStoreTimeoutError`),cf(),bT(986,` carries an HTTP status: contention and a stalled store aren't the caller's mistake, so the handler decides. Here a taken lock is a `),Aa(987,`code`),bT(988,`409`),cf(),bT(989,`, and anything else is rethrown. While the export runs by hand, the scheduled tick on any instance finds the lock held and skips.`),cf(),Aa(990,`blockquote`,48)(991,`strong`),bT(992,`Hint`),cf(),Aa(993,`code`),bT(994,`AdminGuard`),cf(),bT(995,` is a placeholder. Protect the route with your application's real `),Aa(996,`a`,63),bT(997,`authorization`),cf(),bT(998,`.
`),cf(),Aa(999,`h4`,64)(1e3,`span`),bT(1001,`The store on Redis`),cf()(),Aa(1002,`p`),bT(1003,`The store is a contract, so it can live wherever your instances already meet. If that is Redis, each method is one Lua script, which Redis runs atomically:`),cf(),Aa(1004,`app-copy-button`,44)(1005,`span`,45),bT(1006),LT(1007,`extension`),Wa(1008,`app-tabs`,null,29),cf(),Aa(1010,`pre`)(1011,`code`,46),bT(1012,`
import { Inject, Injectable } from '@nestjs/common';
import { LocksStorage, type LockAcquireResult, type LockStore } from '@nestjs/locks';
import { REDIS } from './redis.module.js';

/** The one ioredis method this store needs. */
export interface RedisEval {
  eval(script: string, numKeys: number, ...args: (string | number)[]): Promise<unknown>;
}

// Takes the lock if nobody holds it, expiring on Redis's clock, and draws a fencing token
// from a counter that never goes back. Returns the token, or 0.
const ACQUIRE = \`
if redis.call('SET', KEYS[1], ARGV[1], 'NX', 'PX', ARGV[2]) then
  return redis.call('INCR', KEYS[2])
end
return 0
\`;

// Renews the lock, if it is still ours.
const RENEW = \`
if redis.call('GET', KEYS[1]) == ARGV[1] then
  return redis.call('PEXPIRE', KEYS[1], ARGV[2])
end
return 0
\`;

// Deletes the lock, if it is still ours.
const RELEASE = \`
if redis.call('GET', KEYS[1]) == ARGV[1] then
  return redis.call('DEL', KEYS[1])
end
return 0
\`;

/** Where the fencing counter lives; no lock key can be named like it. */
const FENCING_COUNTER = 'locks:fencing-token';

@Injectable()
export class RedisLockStore implements LockStore {
  constructor(
    @Inject(REDIS) private readonly redis: RedisEval,
    storage: LocksStorage,
  ) {
    storage.registerSource(this);
  }

  async acquire(key: string, owner: string, ttl: number): Promise<LockAcquireResult> {
    const token = Number(await this.redis.eval(ACQUIRE, 2, this.key(key), FENCING_COUNTER, owner, ttl));
    return token > 0 ? { acquired: true, fencingToken: token } : { acquired: false };
  }

  async renew(key: string, owner: string, ttl: number): Promise<boolean> {
    return (await this.redis.eval(RENEW, 1, this.key(key), owner, ttl)) === 1;
  }

  async release(key: string, owner: string): Promise<boolean> {
    return (await this.redis.eval(RELEASE, 1, this.key(key), owner)) === 1;
  }

  private key(key: string) {
    return \`locks:key:\${key}\`;
  }
}
`),cf()()(),Aa(1013,`p`)(1014,`code`),bT(1015,`SET NX PX`),cf(),bT(1016,` takes the key only if it is free, expiring on Redis's clock in milliseconds, and the `),Aa(1017,`code`),bT(1018,`INCR`),cf(),bT(1019,` in the same script draws the token from one counter for every key. Fencing is only as durable as that counter. It never expires, and it must never go back: give Redis persistence (AOF, or RDB with a short interval) and `),Aa(1020,`code`),bT(1021,`maxmemory-policy noeviction`),cf(),bT(1022,`, because a counter that restarts at 1 (a restart without persistence, a `),Aa(1023,`code`),bT(1024,`FLUSHALL`),cf(),bT(1025,`) hands out tokens that holders already have, and a lock evicted under memory pressure is a lock lost. A failover to an asynchronous replica can lose the last writes too: a lock taken just before it, which is the paused-holder case the token covers, but also the counter's last increments, after which the next holder may draw a token the previous one already has, and the token no longer tells them apart. Where fencing must hold across a failover, keep the locks in the database, whose sequence is in the same WAL as the rows, or replicate Redis synchronously.`),cf(),Aa(1026,`p`),bT(1027,`On Redis Cluster, `),Aa(1028,`code`),bT(1029,`ACQUIRE`),cf(),bT(1030,` fails with a `),Aa(1031,`code`),bT(1032,`CROSSSLOT`),cf(),bT(1033,` error as written: a cluster runs a script only when all its keys hash to the same slot, and the lock's key and the counter don't. Name both under one hash tag, `),Aa(1034,`code`),bT(1035),cf(),bT(1036,` and `),Aa(1037,`code`),bT(1038),cf(),bT(1039,`: the cluster then hashes only `),Aa(1040,`code`),bT(1041,`locks`),cf(),bT(1042,`, so the counter and every lock share one slot, on one shard. A counter under a new name, or on a new cluster, starts again at 1, which is the restart it must never make. Before the first acquire on it, stop the instances that use the old keys and set the new counter to the old one's value (`),Aa(1043,`code`),bT(1044),cf(),bT(1045,`), so the next token is higher than any already handed out.`),cf(),Aa(1046,`p`),bT(1047,`The `),Aa(1048,`code`),bT(1049,`redis.module`),cf(),bT(1050,` provides the client under the `),Aa(1051,`code`),bT(1052,`REDIS`),cf(),bT(1053,` token; the example uses a minimal client with ioredis's `),Aa(1054,`code`),bT(1055,`eval()`),cf(),bT(1056,` signature, to stay free of dependencies, and in your application it is `),Aa(1057,`code`),bT(1058,`new Redis(process.env.REDIS_URL)`),cf(),bT(1059,`:`),cf(),Aa(1060,`app-copy-button`,44)(1061,`span`,45),bT(1062),LT(1063,`extension`),Wa(1064,`app-tabs`,null,30),cf(),Aa(1066,`pre`)(1067,`code`,46),bT(1068,`
import { Global, Inject, Module, type OnApplicationShutdown } from '@nestjs/common';
import { RedisClient } from './redis.client.js';

export const REDIS = Symbol('REDIS');

@Global()
@Module({
  providers: [
    {
      provide: REDIS,
      // With ioredis: new Redis(process.env.REDIS_URL)
      useFactory: () => new RedisClient(process.env.REDIS_URL ?? 'redis://127.0.0.1:6379'),
    },
  ],
  exports: [REDIS],
})
export class RedisModule implements OnApplicationShutdown {
  constructor(@Inject(REDIS) private readonly redis: RedisClient) {}

  // After onModuleDestroy(), where running jobs finish and hand their locks back.
  async onApplicationShutdown() {
    await this.redis.quit();
  }
}
`),cf()()(),Aa(1069,`p`),bT(1070,`Swap the provider in the application module, and nothing else changes:`),cf(),Aa(1071,`app-copy-button`,44)(1072,`span`,45),bT(1073),LT(1074,`extension`),Wa(1075,`app-tabs`,null,31),cf(),Aa(1077,`pre`)(1078,`code`,46),bT(1079,`
@Module({
  imports: [
    DrizzleModule.forRootAsync({
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL!, schema }),
    }),
    RedisModule,
    ScheduleModule.forRoot(),
    LocksModule.forRoot(),
    InvoicesModule,
    InventoryModule,
  ],
  providers: [RedisLockStore],
})
export class AppModule {}
`),cf()()(),Aa(1080,`p`),bT(1081,`The example runs the contract suite against a real `),Aa(1082,`code`),bT(1083,`redis-server`),cf(),bT(1084,`, on eight connections so the calls overlap, and then three instances of the application on it:`),cf(),Aa(1085,`app-copy-button`,44)(1086,`span`,45),bT(1087),LT(1088,`extension`),Wa(1089,`app-tabs`,null,32),cf(),Aa(1091,`pre`)(1092,`code`,46),bT(1093,`
describe('the LockStore contract', () => {
  // Several connections, so calls really overlap; expiry is Redis's own clock (real time).
  const pool = Array.from({ length: 8 }, () => new RedisLockStore(connect(), new LocksStorage()));
  let next = 0;
  const cases = lockStoreContract(() => pool[next++ % pool.length]!, { concurrent: true });
  for (const c of cases) {
    it(c.name, c.run);
  }
});
`),cf()()(),Aa(1094,`p`),bT(1095,`Close the Redis client in `),Aa(1096,`code`),bT(1097,`onApplicationShutdown()`),cf(),bT(1098,`, as the module does; `),Aa(1099,`code`),bT(1100,`@nestjs/drizzle`),cf(),bT(1101,` closes the database pool in the same phase. Nest runs each shutdown phase for the whole application before the next: the package hands the leases back in `),Aa(1102,`code`),bT(1103,`onModuleDestroy()`),cf(),bT(1104,` and releases every other lock still held in `),Aa(1105,`code`),bT(1106,`beforeApplicationShutdown()`),cf(),bT(1107,`, so by the time any module's `),Aa(1108,`code`),bT(1109,`onApplicationShutdown()`),cf(),bT(1110,` runs, nothing of the package's needs the connection, whatever the import order. A tick or an election still waiting for the store when the shutdown begins stops waiting: the tick is skipped, and a lock the store grants after that goes back to it, so a stalled store doesn't hold up the deploy.`),cf(),Aa(1111,`h4`,65)(1112,`span`),bT(1113,`Hold the warehouse feed on one instance`),cf()(),Aa(1114,`p`),bT(1115,`The warehouse pushes low-stock alerts over a feed that allows one connection per shop. That isn't a scheduled job; it's a connection one instance should hold for as long as it lives, and another should take over when it goes down. That is a leader election, and it is the same lease as a job's ownership, held on purpose:`),cf(),Aa(1116,`app-copy-button`,44)(1117,`span`,45),bT(1118),LT(1119,`extension`),Wa(1120,`app-tabs`,null,33),cf(),Aa(1122,`pre`)(1123,`code`,46),bT(1124,`
import { Injectable, Logger } from '@nestjs/common';
import { LeaderElection, type Lock, type OnLeadershipAcquired, type OnLeadershipLost } from '@nestjs/locks';
import { WarehouseClient } from './warehouse.client.js';

/**
 * The warehouse's alert feed allows one connection per shop, so one instance of the app
 * holds it: the leader. When the leader goes down, another instance connects within the
 * lease's \`ttl\`.
 */
@Injectable()
@LeaderElection('inventory:warehouse-feed')
export class WarehouseFeed implements OnLeadershipAcquired, OnLeadershipLost {
  private readonly logger = new Logger(WarehouseFeed.name);

  constructor(private readonly warehouseClient: WarehouseClient) {}

  onLeadershipAcquired(lock: Lock) {
    this.logger.log(\`Connected to the warehouse feed (fencing token \${lock.fencingToken})\`);
    // The connection ends with the leadership: \`lock.signal\` aborts when the lease is lost
    // or this instance steps down.
    this.warehouseClient.subscribe(
      (alert) => this.logger.warn(\`Low stock: \${alert.count} left of \${alert.productId}\`),
      { signal: lock.signal },
    );
  }

  onLeadershipLost() {
    this.logger.log('Disconnected from the warehouse feed');
  }
}
`),cf()()(),Aa(1125,`app-copy-button`,44)(1126,`span`,45),bT(1127),LT(1128,`extension`),Wa(1129,`app-tabs`,null,34),cf(),Aa(1131,`pre`)(1132,`code`,46),bT(1133,`
import { Module } from '@nestjs/common';
import { StockReconciliationJob } from './stock-reconciliation.job.js';
import { StockRepository } from './stock.repository.js';
import { WarehouseClient } from './warehouse.client.js';
import { WarehouseFeed } from './warehouse-feed.js';

@Module({
  providers: [StockReconciliationJob, StockRepository, WarehouseClient, WarehouseFeed],
})
export class InventoryModule {}
`),cf()()(),Aa(1134,`p`)(1135,`code`),bT(1136,`@LeaderElection(key)`),cf(),bT(1137,` goes on a singleton provider. From `),Aa(1138,`code`),bT(1139,`onApplicationBootstrap`),cf(),bT(1140,`, every instance tries to take the lease on the key, and keeps trying every `),Aa(1141,`code`),bT(1142,`ttl / 3`),cf(),bT(1143,`; the one that has it renews it. `),Aa(1144,`code`),bT(1145,`onLeadershipAcquired(lock)`),cf(),bT(1146,` runs when this instance becomes the leader, with the lease's `),Aa(1147,`code`),bT(1148,`signal`),cf(),bT(1149,` and `),Aa(1150,`code`),bT(1151,`fencingToken`),cf(),bT(1152,`; `),Aa(1153,`code`),bT(1154,`onLeadershipLost(lock)`),cf(),bT(1155,` when it stops leading, because the lease was lost or because it stepped down, at shutdown or after `),Aa(1156,`code`),bT(1157,`onLeadershipAcquired()`),cf(),bT(1158,` threw. The `),Aa(1159,`code`),bT(1160,`ttl`),cf(),bT(1161,` option sets the lease's; the default is the module's 30 seconds, so a crashed leader is replaced within half a minute, and a leader that shuts down cleanly is replaced at the others' next try.`),cf(),Aa(1162,`p`),bT(1163,`The test starts three instances and shows one connection, a handover at shutdown, and the paused leader's blind spot:`),cf(),Aa(1164,`app-copy-button`,44)(1165,`span`,45),bT(1166),LT(1167,`extension`),Wa(1168,`app-tabs`,null,35),cf(),Aa(1170,`pre`)(1171,`code`,46),bT(1172,`
await until(() => connected().length === 2, 10_000); // the lease expired in the database
warehouse.notify({ productId: 'salmon-kibble-2kg', count: 2 });
// Both receive it: the paused leader hasn't noticed yet. Anything it writes on the feed's
// behalf needs its fencing token, which is lower than the new leader's.
expect(logger.matching('WARN Low stock: 2 left of salmon-kibble-2kg')).toHaveLength(2);
// The old leader wakes up: its renewal is refused, and it learns it lost the lease.
await clock.advance('3s');
expect(leading.get(crashed)).toBe(false);
expect(disconnected()).toHaveLength(1);
`),cf()()(),Aa(1173,`p`),bT(1174,`A leader that pauses is still connected until its next renewal fails, and receives what the feed sends in between. That is the same blind spot as in `),Aa(1175,`a`,55),bT(1176,`Fence the writes`),cf(),bT(1177,`, with the same answer: what the leader does on the group's behalf carries the lease's token.`),cf(),Aa(1178,`h4`,66)(1179,`span`),bT(1180,`Try it`),cf()(),Aa(1181,`p`),bT(1182,`Create the database and apply the migrations:`),cf(),Aa(1183,`pre`)(1184,`code`,42),bT(1185,`
$ psql postgres://localhost:5432/postgres -c 'CREATE DATABASE store'
$ DATABASE_URL=postgres://localhost:5432/store npx drizzle-kit migrate
`),cf()(),Aa(1186,`p`),bT(1187,`Start three instances on ports 3001, 3002 and 3003, with `),Aa(1188,`code`),bT(1189,`ADMIN_TOKEN=s3cret`),cf(),bT(1190,` and a stock reconciliation every ten seconds instead of five minutes, so there is something to watch: `),Aa(1191,`code`),bT(1192,`STOCK_RECONCILIATION_CRON='*/10 * * * * *'`),cf(),bT(1193,`. Each logs the lock store it registered. The first one up leads the warehouse feed, and takes the reconciliation at the first tick, before the other two are up:`),cf(),Aa(1194,`pre`)(1195,`code`,42),bT(1196,`
[Nest] 48817  - 09/25/2026, 8:59:26 AM     LOG [LocksModule] LocksStorage: DrizzleLockStore
[Nest] 48817  - 09/25/2026, 8:59:26 AM     LOG [NestApplication] Nest application successfully started +9ms
[Nest] 48817  - 09/25/2026, 8:59:26 AM     LOG [Locks] Leading "inventory:warehouse-feed" (fencing token 1)
[Nest] 48817  - 09/25/2026, 8:59:26 AM     LOG [WarehouseFeed] Connected to the warehouse feed (fencing token 1)
[Nest] 48817  - 09/25/2026, 8:59:30 AM     LOG [Locks] StockReconciliationJob.reconcileStock runs on this instance (lease "inventory:stock-reconciliation:owner", fencing token 2)
[Nest] 48817  - 09/25/2026, 8:59:30 AM     LOG [WarehouseClient] Counted 3 products
[Nest] 48817  - 09/25/2026, 8:59:30 AM     LOG [StockReconciliationJob] Reconciled stock for 3 products (fencing token 3)
[Nest] 48817  - 09/25/2026, 8:59:40 AM     LOG [WarehouseClient] Counted 3 products
[Nest] 48817  - 09/25/2026, 8:59:40 AM     LOG [StockReconciliationJob] Reconciled stock for 3 products (fencing token 9)
`),cf()(),Aa(1197,`p`),bT(1198,`The other two skip every tick, at debug level:`),cf(),Aa(1199,`pre`)(1200,`code`,42),bT(1201,`
[Nest] 48849  - 09/25/2026, 8:59:40 AM   DEBUG [Locks] Skipped StockReconciliationJob.reconcileStock: it runs on another instance
[Nest] 48849  - 09/25/2026, 8:59:50 AM   DEBUG [Locks] Skipped StockReconciliationJob.reconcileStock: it runs on another instance
`),cf()(),Aa(1202,`p`),bT(1203,`The locks table shows the lease, the run lock (released, so its owner is null, and its token grows with every run) and the feed's lease. Every lock expires thirty seconds after its last renewal, on the database's clock:`),cf(),Aa(1204,`pre`)(1205,`code`,42),bT(1206,`
$ psql postgres://localhost:5432/store -c "SELECT key, owner, fencing_token, expires_at - clock_timestamp() AS expires_in FROM locks ORDER BY key"
                 key                  |                owner                 | fencing_token |   expires_in
--------------------------------------+--------------------------------------+---------------+-----------------
 inventory:stock-reconciliation       |                                      |             9 | 00:00:26.026727
 inventory:stock-reconciliation:owner | 1feff401-d3c9-41b1-a559-d7b458e2905f |             2 | 00:00:26.054034
 inventory:warehouse-feed             | a4980740-ae27-4d95-af0b-0935d65fffb9 |             1 | 00:00:22.784351
(3 rows)
`),cf()(),Aa(1207,`p`),bT(1208,`The fencing tokens have gaps: a refused acquisition still consumed a value from the sequence. Run the export by hand. Without the admin token the guard answers `),Aa(1209,`code`),bT(1210,`403`),cf(),bT(1211,`; then send two requests at once, to two different instances:`),cf(),Aa(1212,`pre`)(1213,`code`,42),bT(1214,`
$ curl -s -o /dev/null -w '%{http_code}\\n' -X POST localhost:3002/admin/invoice-exports
403
$ for port in 3002 3003; do (curl -s -X POST localhost:$port/admin/invoice-exports -H 'x-admin-token: s3cret'; echo) & done; wait
{"exported":3,"batchId":"acc_447817af"}
{"exported":0}
`),cf()(),Aa(1215,`p`),bT(1216,`One request took the lock and exported the three pending orders. The other waited for it, took the lock when it was released, and found nothing left. A request that waits more than two seconds gets a `),Aa(1217,`code`),bT(1218,`409`),cf(),bT(1219,`. The instance that ran the export logs the batch:`),cf(),Aa(1220,`pre`)(1221,`code`,42),bT(1222,`
[Nest] 48849  - 09/25/2026, 8:59:44 AM     LOG [AccountingClient] Booked batch acc_447817af: ord_1001, ord_1002, ord_1004
[Nest] 48849  - 09/25/2026, 8:59:44 AM     LOG [InvoiceExportJob] Exported 3 invoices in batch acc_447817af
`),cf()(),Aa(1223,`p`),bT(1224,`Now kill the first instance, which runs the reconciliation and leads the feed, without giving it a chance to clean up:`),cf(),Aa(1225,`pre`)(1226,`code`,42),bT(1227,`
$ kill -9 48817
`),cf()(),Aa(1228,`p`),bT(1229,`Nothing happens for a while: the other two keep skipping, because the leases are still in the table. Thirty seconds after its last renewal each one expires. The feed's lease goes first, since it was renewed on its own schedule, and the next tick takes the job over:`),cf(),Aa(1230,`pre`)(1231,`code`,42),bT(1232,`
[Nest] 48849  - 09/25/2026, 9:00:11 AM     LOG [Locks] Leading "inventory:warehouse-feed" (fencing token 28)
[Nest] 48849  - 09/25/2026, 9:00:11 AM     LOG [WarehouseFeed] Connected to the warehouse feed (fencing token 28)
[Nest] 48849  - 09/25/2026, 9:00:20 AM     LOG [Locks] StockReconciliationJob.reconcileStock runs on this instance (lease "inventory:stock-reconciliation:owner", fencing token 32)
[Nest] 48849  - 09/25/2026, 9:00:20 AM     LOG [WarehouseClient] Counted 3 products
[Nest] 48849  - 09/25/2026, 9:00:20 AM     LOG [StockReconciliationJob] Reconciled stock for 3 products (fencing token 34)
`),cf()(),Aa(1233,`p`),bT(1234,`Stop the new owner with `),Aa(1235,`code`),bT(1236,`Ctrl+C`),cf(),bT(1237,` instead. Its shutdown hooks hand both leases back (`),Aa(1238,`code`),bT(1239,`main.ts`),cf(),bT(1240,` calls `),Aa(1241,`code`),bT(1242,`app.enableShutdownHooks()`),cf(),bT(1243,`):`),cf(),Aa(1244,`pre`)(1245,`code`,42),bT(1246,`
[Nest] 48849  - 09/25/2026, 9:00:35 AM     LOG [Locks] Stepped down from "inventory:warehouse-feed"
[Nest] 48849  - 09/25/2026, 9:00:35 AM     LOG [WarehouseFeed] Disconnected from the warehouse feed
`),cf()(),Aa(1247,`p`),bT(1248,`The last instance takes the job at its next tick, and the feed at its next campaign, seconds later rather than thirty:`),cf(),Aa(1249,`pre`)(1250,`code`,42),bT(1251,`
[Nest] 48859  - 09/25/2026, 9:00:40 AM     LOG [Locks] StockReconciliationJob.reconcileStock runs on this instance (lease "inventory:stock-reconciliation:owner", fencing token 41)
[Nest] 48859  - 09/25/2026, 9:00:40 AM     LOG [WarehouseClient] Counted 3 products
[Nest] 48859  - 09/25/2026, 9:00:40 AM     LOG [StockReconciliationJob] Reconciled stock for 3 products (fencing token 43)
[Nest] 48859  - 09/25/2026, 9:00:41 AM     LOG [Locks] Leading "inventory:warehouse-feed" (fencing token 45)
[Nest] 48859  - 09/25/2026, 9:00:41 AM     LOG [WarehouseFeed] Connected to the warehouse feed (fencing token 45)
`),cf()(),Aa(1252,`p`),bT(1253,`Finally stop the last one with `),Aa(1254,`code`),bT(1255,`Ctrl+C`),cf(),bT(1256,`. It steps down from the feed before it goes:`),cf(),Aa(1257,`pre`)(1258,`code`,42),bT(1259,`
[Nest] 48859  - 09/25/2026, 9:00:50 AM     LOG [Locks] Stepped down from "inventory:warehouse-feed"
[Nest] 48859  - 09/25/2026, 9:00:50 AM     LOG [WarehouseFeed] Disconnected from the warehouse feed
`),cf()(),Aa(1260,`h4`,67)(1261,`span`),bT(1262,`Testing`),cf()(),Aa(1263,`p`),bT(1264,`An application that imports `),Aa(1265,`code`),bT(1266,`LocksModule`),cf(),bT(1267,` and registers no store runs on the in-memory store, so an end-to-end test of one instance needs nothing: every tick runs, once. To keep the Drizzle store out of a test, override its provider with a plain `),Aa(1268,`code`),bT(1269,`InMemoryLockStore`),cf(),bT(1270,`; a plain instance doesn't register itself, so the in-memory default applies.`),cf(),Aa(1271,`p`),bT(1272,`To test what the package is for, run several instances in one process. An instance is a Nest application; instances of one application share a store. The example's helper starts one on the shared database, with the fakes and the test's `),Aa(1273,`code`),bT(1274,`LocksModule`),cf(),bT(1275,` options:`),cf(),Aa(1276,`app-copy-button`,44)(1277,`span`,45),bT(1278),LT(1279,`extension`),Wa(1280,`app-tabs`,null,36),cf(),Aa(1282,`pre`)(1283,`code`,46),bT(1284,`
export async function startInstance(options: InstanceOptions): Promise<TestingModule> {
  if (options.database.url) {
    process.env.DATABASE_URL = options.database.url;
  }
  let builder = Test.createTestingModule({ imports: [options.module] })
    .overrideProvider(AccountingClient)
    .useValue(options.accounting)
    .overrideProvider(WarehouseClient)
    .useValue(options.warehouse);
  if (options.database.pglite) {
    builder = builder.overrideProvider(getDrizzleToken()).useValue(options.database.pglite);
  }
  if (options.locks) {
    builder = builder.overrideProvider(LOCKS_MODULE_OPTIONS).useValue(options.locks);
  }
  const app = await builder.compile();
  app.useLogger(options.logger);
  options.onCompiled?.(app);
  await app.init();
  return app;
}
`),cf()()(),Aa(1285,`ul`)(1286,`li`)(1287,`strong`),bT(1288,`Share the database.`),cf(),bT(1289,` On PGlite, every instance gets the same Drizzle database by overriding the one `),Aa(1290,`code`),bT(1291,`DrizzleModule`),cf(),bT(1292,` registers (`),Aa(1293,`code`),bT(1294,`getDrizzleToken()`),cf(),bT(1295,`), with the real migrations applied; `),Aa(1296,`code`),bT(1297,`DrizzleLockStore`),cf(),bT(1298,` injects it with `),Aa(1299,`code`),bT(1300,`@InjectDrizzle()`),cf(),bT(1301,`, so the instances share the locks table as they share it in production. Against a PostgreSQL server, each instance opens its own pool from the database's URL. Without a database, share one `),Aa(1302,`code`),bT(1303,`InMemoryLockStore`),cf(),bT(1304,` between the instances by registering it in each with `),Aa(1305,`code`),bT(1306,`LocksStorage.registerSource()`),cf(),bT(1307,` and its `),Aa(1308,`code`),bT(1309,`replace`),cf(),bT(1310,` option before `),Aa(1311,`code`),bT(1312,`init()`),cf(),bT(1313,`.`),cf(),Aa(1314,`li`)(1315,`strong`),bT(1316,`Fire the jobs yourself.`),cf(),bT(1317,` Call the method (`),Aa(1318,`code`),bT(1319,`await job.exportInvoices()`),cf(),bT(1320,`) on each instance, or go through `),Aa(1321,`code`),bT(1322,`@nestjs/schedule`),cf(),bT(1323,` with `),Aa(1324,`code`),bT(1325,`schedulerRegistry.getCronJob(name).fireOnTick()`),cf(),bT(1326,`. Both reach the wrapper. Point the real schedules at a date that never comes: the example's `),Aa(1327,`code`),bT(1328,`vitest.config.mts`),cf(),bT(1329,` sets the two cron variables to February 29th at 3 AM.`),cf(),Aa(1330,`li`)(1331,`strong`),bT(1332,`Control time.`),cf(),bT(1333,` Override `),Aa(1334,`code`),bT(1335,`LOCKS_MODULE_OPTIONS`),cf(),bT(1336,` with a `),Aa(1337,`code`),bT(1338,`ManualLockClock`),cf(),bT(1339,`, and every renewal, deadline and `),Aa(1340,`code`),bT(1341,`wait`),cf(),bT(1342,` in that instance moves only when the test advances the clock: `),Aa(1343,`code`),bT(1344,`await clock.advance('5m')`),cf(),bT(1345,` fires what falls due on the way, in order, and waits for each renewal to reach the store. An instance whose clock you don't advance is a paused process. Against PGlite or a server, the store's clock is real time, so a short `),Aa(1346,`code`),bT(1347,`ttl`),cf(),bT(1348,` (`),Aa(1349,`code`),bT(1350,`'1s'`),cf(),bT(1351,`) and a `),Aa(1352,`code`),bT(1353,`sleep`),cf(),bT(1354,` expire a paused instance's locks; with the in-memory store, give it the same `),Aa(1355,`code`),bT(1356,`ManualLockClock`),cf(),bT(1357,` and expiries move with it.`),cf(),Aa(1358,`li`)(1359,`strong`),bT(1360,`Assert on the log`),cf(),bT(1361,` or on `),Aa(1362,`code`),bT(1363,`LocksEvents`),cf(),bT(1364,`: which instance runs a job, every skipped tick (`),Aa(1365,`code`),bT(1366,`jobSkips$`),cf(),bT(1367,`), every lost lock and every leadership change (`),Aa(1368,`code`),bT(1369,`events$`),cf(),bT(1370,`). The events are also published on the `),Aa(1371,`code`),bT(1372,`nestjs:locks:job-skipped`),cf(),bT(1373,`, `),Aa(1374,`code`),bT(1375,`nestjs:locks:lock-lost`),cf(),bT(1376,`, `),Aa(1377,`code`),bT(1378,`nestjs:locks:leadership-acquired`),cf(),bT(1379,` and `),Aa(1380,`code`),bT(1381,`nestjs:locks:leadership-lost`),cf(),bT(1382,` diagnostics channels.`),cf(),Aa(1383,`li`)(1384,`strong`),bT(1385,`Test your store`),cf(),bT(1386,` with the contract suite, as the Drizzle, TypeORM and Redis stores do, against the server you run in production.`),cf()(),Aa(1387,`p`),bT(1388,`See `),Aa(1389,`a`,68),bT(1390,`End-to-end testing`),cf(),bT(1391,` for more about the testing setup.`),cf(),Aa(1392,`h4`,69)(1393,`span`),bT(1394,`Production checklist`),cf()(),Aa(1395,`ul`)(1396,`li`),bT(1397,`Register a shared store, on your database or Redis, and run the contract suite against it with `),Aa(1398,`code`),bT(1399,`concurrent`),cf(),bT(1400,` on, in CI, on the version you run in production. In production the application refuses to start without one, unless `),Aa(1401,`code`),bT(1402,`allowInMemoryStorage`),cf(),bT(1403,` is set, which is only right for a single instance.`),cf(),Aa(1404,`li`),bT(1405,`Set `),Aa(1406,`code`),bT(1407,`key`),cf(),bT(1408,` on every job that must never run twice, so a rename or a minifier can't change it during a rolling deploy.`),cf(),Aa(1409,`li`),bT(1410,`Pick a `),Aa(1411,`code`),bT(1412,`ttl`),cf(),bT(1413,` well above the store's round trip and the longest event-loop stall you accept, and short enough that a crash doesn't skip too many ticks. Renewals go out every `),Aa(1414,`code`),bT(1415,`ttl / 3`),cf(),bT(1416,`; 30 seconds fits most jobs. A long job's run lock is renewed at the same pace, so its `),Aa(1417,`code`),bT(1418,`ttl`),cf(),bT(1419,` doesn't need to cover the run.`),cf(),Aa(1420,`li`),bT(1421,`Leave `),Aa(1422,`code`),bT(1423,`storeTimeout`),cf(),bT(1424,` well above the store's slowest healthy answer: a store call that runs past it fails, so the tick doesn't run and `),Aa(1425,`code`),bT(1426,`acquire()`),cf(),bT(1427,` rejects with `),Aa(1428,`code`),bT(1429,`LockStoreTimeoutError`),cf(),bT(1430,`. The default, 10 seconds, also bounds how long a stalled store (an exhausted pool, a failover, a Redis client queueing commands while offline) holds up a job, a request or a renewal.`),cf(),Aa(1431,`li`),bT(1432,`Write jobs that do what is due, not what the tick was for. Missed ticks aren't caught up: a crashed owner costs up to `),Aa(1433,`code`),bT(1434,`ttl`),cf(),bT(1435,` of ticks, and ticks during a long run are skipped.`),cf(),Aa(1436,`li`),bT(1437,`Pass `),Aa(1438,`code`),bT(1439,`LocksContext.signal`),cf(),bT(1440,` to what a job calls, and fence the writes that can't be undone with `),Aa(1441,`code`),bT(1442,`LocksContext.fencingToken`),cf(),bT(1443,`, in the same statement that writes. Alert on `),Aa(1444,`code`),bT(1445,`lock-lost`),cf(),bT(1446,` from `),Aa(1447,`code`),bT(1448,`LocksEvents`),cf(),bT(1449,` or the diagnostics channel: it means renewals failed for longer than `),Aa(1450,`code`),bT(1451,`ttl`),cf(),bT(1452,`, because the store was unreachable or the event loop was blocked, and another instance may be running the same critical section.`),cf(),Aa(1453,`li`),bT(1454,`Call `),Aa(1455,`code`),bT(1456,`app.enableShutdownHooks()`),cf(),bT(1457,`, so a deploy hands the leases over at once instead of leaving them to expire. Close the Redis client in `),Aa(1458,`code`),bT(1459,`onApplicationShutdown()`),cf(),bT(1460,`, the phase in which `),Aa(1461,`code`),bT(1462,`@nestjs/drizzle`),cf(),bT(1463,` closes the database pool: the package hands the leases back in `),Aa(1464,`code`),bT(1465,`onModuleDestroy()`),cf(),bT(1466,` and releases every other lock in `),Aa(1467,`code`),bT(1468,`beforeApplicationShutdown()`),cf(),bT(1469,`, phases Nest completes for the whole application first. A lease whose job started less than a second before the shutdown is kept for the rest of that second rather than handed back, so that instances firing the same tick skip it instead of running it a second time.`),cf(),Aa(1470,`li`),bT(1471,`With the Redis store, give Redis persistence and `),Aa(1472,`code`),bT(1473,`maxmemory-policy noeviction`),cf(),bT(1474,`. The fencing counter must never go back, and a lock must never be evicted.`),cf(),Aa(1475,`li`),bT(1476,`With the database store, create the table and the sequence through your migrations, and size the connection pool for one short statement per renewal per held lock, plus one per tick per instance.`),cf(),Aa(1477,`li`),bT(1478,`Keep the instances' clocks synchronized with NTP anyway. Expiry is measured on the store's clock, but a holder counts its own deadline, and `),Aa(1479,`code`),bT(1480,`@nestjs/schedule`),cf(),bT(1481,` fires on the instance's clock.`),cf(),Aa(1482,`li`),bT(1483,`Log level: the skipped ticks are logged at `),Aa(1484,`code`),bT(1485,`debug`),cf(),bT(1486,`. Keep that level on for a while after the rollout, to see the jobs settle on one instance. To watch them for good, count `),Aa(1487,`code`),bT(1488,`LocksEvents.jobSkips$`),cf(),bT(1489,` by `),Aa(1490,`code`),bT(1491,`job`),cf(),bT(1492,` and `),Aa(1493,`code`),bT(1494,`reason`),cf(),bT(1495,` instead of parsing the log.`),cf()(),Aa(1496,`h4`,70)(1497,`span`),bT(1498,`The store contract`),cf()(),Aa(1499,`p`),bT(1500,`The tutorial wrote the store with Drizzle, with TypeORM and with Redis. This section sums up what any `),Aa(1501,`code`),bT(1502,`LockStore`),cf(),bT(1503,` must do, for writing one with another database or ORM. The `),Aa(1504,`a`,71)(1505,`code`),bT(1506,`LockStore`),cf(),bT(1507,` interface`),cf(),bT(1508,` documents the full contract and the races each rule prevents.`),cf(),Aa(1509,`p`)(1510,`strong`),bT(1511,`Registration.`),cf(),bT(1512,` The store is an ordinary singleton provider that calls `),Aa(1513,`code`),bT(1514,`registerSource(this)`),cf(),bT(1515,` on the injectable `),Aa(1516,`code`),bT(1517,`LocksStorage`),cf(),bT(1518,` in its constructor. The registry checks the shape at once, refuses a second registration unless it passes `),Aa(1519,`code`),bT(1520,`replace: true`),cf(),bT(1521,`, and locks when `),Aa(1522,`code`),bT(1523,`LocksModule`),cf(),bT(1524,` initializes, logging the store in use. With nothing registered, the module uses `),Aa(1525,`code`),bT(1526,`InMemoryLockStore`),cf(),bT(1527,`, which excludes callers in one process only. With `),Aa(1528,`code`),bT(1529,`NODE_ENV=production`),cf(),bT(1530,`, startup fails instead, unless you set `),Aa(1531,`code`),bT(1532,`allowInMemoryStorage: true`),cf(),bT(1533,`.`),cf(),Aa(1534,`p`)(1535,`strong`),bT(1536,`The methods.`),cf(),bT(1537,` All three are atomic: each decides who holds a key, and a read followed by a separate write lets two callers into the critical section, which is the duplicate run the package exists to prevent.`),cf(),Aa(1538,`table`)(1539,`thead`)(1540,`tr`)(1541,`th`),bT(1542,`Method`),cf(),Aa(1543,`th`),bT(1544,`What it does`),cf(),Aa(1545,`th`),bT(1546,`How it stays atomic`),cf()()(),Aa(1547,`tbody`)(1548,`tr`)(1549,`td`)(1550,`code`),bT(1551,`acquire(key, owner, ttl)`),cf()(),Aa(1552,`td`),bT(1553,`Takes the key if no live lock holds it (none, released, or expired), with a fencing token greater than every token the key had before`),cf(),Aa(1554,`td`),bT(1555,`One insert that takes over a released or expired row in the same statement, re-checking the expiry in the write, so of many concurrent callers exactly one wins; the token is drawn after the check`),cf()(),Aa(1556,`tr`)(1557,`td`)(1558,`code`),bT(1559,`renew(key, owner, ttl)`),cf()(),Aa(1560,`td`),bT(1561,`Moves the owner's live lock's expiry to `),Aa(1562,`code`),bT(1563,`ttl`),cf(),bT(1564,` from now`),cf(),Aa(1565,`td`),bT(1566,`A compare-and-set: the owner and the expiry are in the `),Aa(1567,`code`),bT(1568,`WHERE`),cf(),bT(1569,` of the statement that writes`),cf()(),Aa(1570,`tr`)(1571,`td`)(1572,`code`),bT(1573,`release(key, owner)`),cf()(),Aa(1574,`td`),bT(1575,`Frees the owner's live lock (deletes it, or marks it released), so the next caller takes it at once. Never resets the key's token`),cf(),Aa(1576,`td`),bT(1577,`A compare-and-set, as `),Aa(1578,`code`),bT(1579,`renew()`),cf()()()()(),Aa(1580,`p`)(1581,`strong`),bT(1582,`What else the store must get right`),cf(),bT(1583,`, all of it checked by the suite: an expired lock doesn't exist, for every method, whether or not it has been deleted (`),Aa(1584,`code`),bT(1585,`expires_at > now`),cf(),bT(1586,` in every condition, or let the server expire it); `),Aa(1587,`code`),bT(1588,`ttl`),cf(),bT(1589,` is measured on the store's clock, in milliseconds, and can be weeks (past a 32-bit integer: `),Aa(1590,`code`),bT(1591,`bigint`),cf(),bT(1592,`, `),Aa(1593,`code`),bT(1594,`PEXPIRE`),cf(),bT(1595,`); keys are strings of up to 500 characters, any Unicode, kept apart exactly; tokens are positive safe integers returned as numbers. PostgreSQL returns a `),Aa(1596,`code`),bT(1597,`bigint`),cf(),bT(1598,` column as a string unless the ORM converts it; the package refuses such a token at once, with a message naming the fix, rather than let fencing break silently.`),cf(),Aa(1599,`p`)(1600,`strong`),bT(1601,`With Prisma.`),cf(),bT(1602,` The Drizzle store is the model, with the same table and sequence; `),Aa(1603,`a`,72),bT(1604,`Keep locks in your database`),cf(),bT(1605,` also shows it with TypeORM. `),Aa(1606,`code`),bT(1607,`acquire()`),cf(),bT(1608,` is one `),Aa(1609,`code`),bT(1610,`INSERT ... ON CONFLICT (key) DO UPDATE ... WHERE owner IS NULL OR expires_at <= clock_timestamp() RETURNING fencing_token`),cf(),bT(1611,`, with the token drawn in the `),Aa(1612,`code`),bT(1613,`SET`),cf(),bT(1614,`, after the row lock. Prisma's `),Aa(1615,`code`),bT(1616,`upsert()`),cf(),bT(1617,` has no condition on the update, so use `),Aa(1618,`code`),bT(1619,`$queryRaw`),cf(),bT(1620,`. `),Aa(1621,`code`),bT(1622,`renew()`),cf(),bT(1623,` and `),Aa(1624,`code`),bT(1625,`release()`),cf(),bT(1626,` put the owner and the expiry in the `),Aa(1627,`code`),bT(1628,`WHERE`),cf(),bT(1629,` of `),Aa(1630,`code`),bT(1631,`updateMany()`),cf(),bT(1632,` and check `),Aa(1633,`code`),bT(1634,`count === 1`),cf(),bT(1635,`. Not `),Aa(1636,`code`),bT(1637,`update()`),cf(),bT(1638,` after a `),Aa(1639,`code`),bT(1640,`findUnique()`),cf(),bT(1641,`: it reads first.`),cf(),Aa(1642,`p`)(1643,`strong`),bT(1644,`Test it`),cf(),bT(1645,` with the suite from `),Aa(1646,`code`),bT(1647,`@nestjs/locks/testing`),cf(),bT(1648,`. `),Aa(1649,`code`),bT(1650,`lockStoreContract()`),cf(),bT(1651,` returns cases for any test runner. `),Aa(1652,`code`),bT(1653,`concurrent: true`),cf(),bT(1654,` races 16 callers for each key, and its `),Aa(1655,`code`),bT(1656,`callers`),cf(),bT(1657,` option raises that; run it against a server with a connection pool, where the calls really overlap. `),Aa(1658,`code`),bT(1659,`advanceTime`),cf(),bT(1660,` moves the store's clock for the expiry cases; without it they wait in real time, about twenty-five seconds in total, on locks of `),Aa(1661,`code`),bT(1662,`ttl`),cf(),bT(1663,` (2.5 seconds by default, checked still held halfway through and free a sixth past it: raise it for a store whose round trips are slow).`),cf(),Aa(1664,`h4`,73)(1665,`span`),bT(1666,`Reference`),cf()(),Aa(1667,`h5`,74)(1668,`span`),bT(1669,`Module options`),cf()(),Aa(1670,`p`)(1671,`code`),bT(1672,`LocksModule.forRoot()`),cf(),bT(1673,` takes these options; `),Aa(1674,`code`),bT(1675,`forRootAsync()`),cf(),bT(1676,` takes them from `),Aa(1677,`code`),bT(1678,`useFactory`),cf(),bT(1679,`, `),Aa(1680,`code`),bT(1681,`useClass`),cf(),bT(1682,` or `),Aa(1683,`code`),bT(1684,`useExisting`),cf(),bT(1685,` (a class implementing `),Aa(1686,`code`),bT(1687,`LocksOptionsFactory`),cf(),bT(1688,`). The store isn't an option: register it with `),Aa(1689,`code`),bT(1690,`LocksStorage`),cf(),bT(1691,`, as in `),Aa(1692,`a`,72),bT(1693,`Keep locks in your database`),cf(),bT(1694,`.`),cf(),Aa(1695,`table`)(1696,`thead`)(1697,`tr`)(1698,`th`),bT(1699,`Option`),cf(),Aa(1700,`th`),bT(1701,`Default`),cf(),Aa(1702,`th`),bT(1703,`Meaning`),cf()()(),Aa(1704,`tbody`)(1705,`tr`)(1706,`td`)(1707,`code`),bT(1708,`ttl`),cf()(),Aa(1709,`td`)(1710,`code`),bT(1711,`'30s'`),cf()(),Aa(1712,`td`),bT(1713,`How long a lock lives without a renewal, so how soon another instance takes over after a crash. The default for every lock, lease and election. A duration: milliseconds, or a string such as `),Aa(1714,`code`),bT(1715,`'15s'`),cf(),bT(1716,` or `),Aa(1717,`code`),bT(1718,`'2m'`),cf()()(),Aa(1719,`tr`)(1720,`td`)(1721,`code`),bT(1722,`storeTimeout`),cf()(),Aa(1723,`td`)(1724,`code`),bT(1725,`'10s'`),cf()(),Aa(1726,`td`),bT(1727,`How long to wait for each store call (`),Aa(1728,`code`),bT(1729,`acquire()`),cf(),bT(1730,`, `),Aa(1731,`code`),bT(1732,`renew()`),cf(),bT(1733,`, `),Aa(1734,`code`),bT(1735,`release()`),cf(),bT(1736,`). Past it, the call fails with `),Aa(1737,`code`),bT(1738,`LockStoreTimeoutError`),cf(),bT(1739,`: `),Aa(1740,`code`),bT(1741,`acquire()`),cf(),bT(1742,` rejects, a tick doesn't run, a renewal is tried again at the next beat, and a lock the store grants after that goes back to it`),cf()(),Aa(1743,`tr`)(1744,`td`)(1745,`code`),bT(1746,`clock`),cf()(),Aa(1747,`td`),bT(1748,`The system clock`),cf(),Aa(1749,`td`),bT(1750,`A `),Aa(1751,`code`),bT(1752,`LockClock`),cf(),bT(1753,`. Tests pass a `),Aa(1754,`code`),bT(1755,`ManualLockClock`),cf(),bT(1756,` (`),Aa(1757,`a`,75),bT(1758,`Testing`),cf(),bT(1759,`)`),cf()(),Aa(1760,`tr`)(1761,`td`)(1762,`code`),bT(1763,`allowInMemoryStorage`),cf()(),Aa(1764,`td`)(1765,`code`),bT(1766,`false`),cf()(),Aa(1767,`td`),bT(1768,`With `),Aa(1769,`code`),bT(1770,`NODE_ENV=production`),cf(),bT(1771,` and no registered store, startup fails; `),Aa(1772,`code`),bT(1773,`true`),cf(),bT(1774,` runs on the in-memory store anyway (one instance)`),cf()(),Aa(1775,`tr`)(1776,`td`)(1777,`code`),bT(1778,`isGlobal`),cf()(),Aa(1779,`td`)(1780,`code`),bT(1781,`true`),cf()(),Aa(1782,`td`),bT(1783,`Registers the module globally. Top level of `),Aa(1784,`code`),bT(1785,`forRoot()`),cf(),bT(1786,` and `),Aa(1787,`code`),bT(1788,`forRootAsync()`),cf()()()()(),Aa(1789,`h5`,76)(1790,`span`),bT(1791,`Decorators and methods`),cf()(),Aa(1792,`table`)(1793,`thead`)(1794,`tr`)(1795,`th`),bT(1796,`API`),cf(),Aa(1797,`th`),bT(1798,`Options`),cf(),Aa(1799,`th`),bT(1800,`Notes`),cf()()(),Aa(1801,`tbody`)(1802,`tr`)(1803,`td`)(1804,`code`),bT(1805,`@OnOneInstance()`),cf()(),Aa(1806,`td`)(1807,`code`),bT(1808,`key`),cf(),bT(1809,`, `),Aa(1810,`code`),bT(1811,`ttl`),cf()(),Aa(1812,`td`),bT(1813,`Runs the job on the instance holding the `),Aa(1814,`code`),bT(1815,`<key>:owner`),cf(),bT(1816,` lease; other instances skip the tick. `),Aa(1817,`a`,77),bT(1818,`Run each job on one instance`),cf()()(),Aa(1819,`tr`)(1820,`td`)(1821,`code`),bT(1822,`@WithoutOverlapping()`),cf()(),Aa(1823,`td`)(1824,`code`),bT(1825,`key`),cf(),bT(1826,`, `),Aa(1827,`code`),bT(1828,`ttl`),cf()(),Aa(1829,`td`),bT(1830,`Skips a tick while a run holds the `),Aa(1831,`code`),bT(1832,`<key>`),cf(),bT(1833,` lock, on any instance. `),Aa(1834,`a`,78),bT(1835,`Don't let a long run overlap itself`),cf()()(),Aa(1836,`tr`)(1837,`td`)(1838,`code`),bT(1839,`@LeaderElection(key)`),cf()(),Aa(1840,`td`)(1841,`code`),bT(1842,`ttl`),cf()(),Aa(1843,`td`),bT(1844,`On a singleton provider implementing `),Aa(1845,`code`),bT(1846,`OnLeadershipAcquired`),cf(),bT(1847,`, `),Aa(1848,`code`),bT(1849,`OnLeadershipLost`),cf(),bT(1850,` or both. `),Aa(1851,`a`,79),bT(1852,`Hold the warehouse feed on one instance`),cf()()(),Aa(1853,`tr`)(1854,`td`)(1855,`code`),bT(1856,`Locks.acquire(key, options)`),cf()(),Aa(1857,`td`)(1858,`code`),bT(1859,`ttl`),cf(),bT(1860,`, `),Aa(1861,`code`),bT(1862,`wait`),cf(),bT(1863,`, `),Aa(1864,`code`),bT(1865,`signal`),cf()(),Aa(1866,`td`),bT(1867,`Resolves a `),Aa(1868,`code`),bT(1869,`Lock`),cf(),bT(1870,`, or `),Aa(1871,`code`),bT(1872,`null`),cf(),bT(1873,` when the key stayed taken. `),Aa(1874,`a`,80),bT(1875,`Run the export by hand`),cf()()(),Aa(1876,`tr`)(1877,`td`)(1878,`code`),bT(1879,`Locks.withLock(key, fn, options)`),cf()(),Aa(1880,`td`)(1881,`code`),bT(1882,`ttl`),cf(),bT(1883,`, `),Aa(1884,`code`),bT(1885,`wait`),cf(),bT(1886,`, `),Aa(1887,`code`),bT(1888,`signal`),cf()(),Aa(1889,`td`),bT(1890,`Runs `),Aa(1891,`code`),bT(1892,`fn(lock)`),cf(),bT(1893,` under the lock and releases it; rejects with `),Aa(1894,`code`),bT(1895,`LockNotAcquiredError`),cf(),bT(1896,` when the key stayed taken`),cf()()()(),Aa(1897,`ul`)(1898,`li`)(1899,`code`),bT(1900,`key`),cf(),bT(1901,` defaults to `),Aa(1902,`code`),bT(1903,`ClassName.methodName`),cf(),bT(1904,`, and the two job decorators on one method share it. `),Aa(1905,`code`),bT(1906,`ttl`),cf(),bT(1907,` defaults to the module's.`),cf(),Aa(1908,`li`)(1909,`code`),bT(1910,`wait`),cf(),bT(1911,` defaults to `),Aa(1912,`code`),bT(1913,`0`),cf(),bT(1914,` (try once); a longer wait retries with backoff. `),Aa(1915,`code`),bT(1916,`signal`),cf(),bT(1917,` stops the waiting, also for a store call in flight. Neither `),Aa(1918,`code`),bT(1919,`wait`),cf(),bT(1920,` nor `),Aa(1921,`code`),bT(1922,`ttl`),cf(),bT(1923,` bounds a store call: the module's `),Aa(1924,`code`),bT(1925,`storeTimeout`),cf(),bT(1926,` does.`),cf(),Aa(1927,`li`),bT(1928,`A `),Aa(1929,`code`),bT(1930,`Lock`),cf(),bT(1931,` has `),Aa(1932,`code`),bT(1933,`key`),cf(),bT(1934,`, `),Aa(1935,`code`),bT(1936,`owner`),cf(),bT(1937,`, `),Aa(1938,`code`),bT(1939,`fencingToken`),cf(),bT(1940,`, `),Aa(1941,`code`),bT(1942,`signal`),cf(),bT(1943,`, `),Aa(1944,`code`),bT(1945,`held`),cf(),bT(1946,`, `),Aa(1947,`code`),bT(1948,`release()`),cf(),bT(1949,` and `),Aa(1950,`code`),bT(1951,`[Symbol.asyncDispose]`),cf(),bT(1952,`, so `),Aa(1953,`code`),bT(1954,`await using`),cf(),bT(1955,` releases it.`),cf(),Aa(1956,`li`)(1957,`code`),bT(1958,`LocksContext`),cf(),bT(1959,` has `),Aa(1960,`code`),bT(1961,`lock`),cf(),bT(1962,`, `),Aa(1963,`code`),bT(1964,`fencingToken`),cf(),bT(1965,` and `),Aa(1966,`code`),bT(1967,`signal`),cf(),bT(1968,` inside a job, a `),Aa(1969,`code`),bT(1970,`withLock()`),cf(),bT(1971,` callback, or `),Aa(1972,`code`),bT(1973,`run(lock, fn)`),cf(),bT(1974,`; outside one, they are `),Aa(1975,`code`),bT(1976,`undefined`),cf(),bT(1977,`. `),Aa(1978,`a`,55),bT(1979,`Fence the writes`),cf()()(),Aa(1980,`h5`,81)(1981,`span`),bT(1982,`Events`),cf()(),Aa(1983,`p`)(1984,`code`),bT(1985,`LocksEvents.events$`),cf(),bT(1986,` emits each event, and publishes it on its `),Aa(1987,`code`),bT(1988,`node:diagnostics_channel`),cf(),bT(1989,` channel. Every payload has `),Aa(1990,`code`),bT(1991,`type`),cf(),bT(1992,`, `),Aa(1993,`code`),bT(1994,`key`),cf(),bT(1995,` and `),Aa(1996,`code`),bT(1997,`fencingToken`),cf(),bT(1998,`.`),cf(),Aa(1999,`table`)(2e3,`thead`)(2001,`tr`)(2002,`th`),bT(2003,`Event`),cf(),Aa(2004,`th`),bT(2005,`Channel`),cf(),Aa(2006,`th`),bT(2007,`Other fields`),cf(),Aa(2008,`th`),bT(2009,`When`),cf()()(),Aa(2010,`tbody`)(2011,`tr`)(2012,`td`)(2013,`code`),bT(2014,`lock-lost`),cf()(),Aa(2015,`td`)(2016,`code`),bT(2017,`nestjs:locks:lock-lost`),cf()(),Aa(2018,`td`)(2019,`code`),bT(2020,`detectedBy`),cf(),bT(2021,`: `),Aa(2022,`code`),bT(2023,`'renewal'`),cf(),bT(2024,` or `),Aa(2025,`code`),bT(2026,`'deadline'`),cf()(),Aa(2027,`td`),bT(2028,`A holder lost a lock it was using. Alert on it`),cf()(),Aa(2029,`tr`)(2030,`td`)(2031,`code`),bT(2032,`leadership-acquired`),cf()(),Aa(2033,`td`)(2034,`code`),bT(2035,`nestjs:locks:leadership-acquired`),cf()(),Aa(2036,`td`),bT(2037,`None`),cf(),Aa(2038,`td`),bT(2039,`This instance became the leader of `),Aa(2040,`code`),bT(2041,`key`),cf()()(),Aa(2042,`tr`)(2043,`td`)(2044,`code`),bT(2045,`leadership-lost`),cf()(),Aa(2046,`td`)(2047,`code`),bT(2048,`nestjs:locks:leadership-lost`),cf()(),Aa(2049,`td`)(2050,`code`),bT(2051,`reason`),cf(),bT(2052,`: `),Aa(2053,`code`),bT(2054,`'lost'`),cf(),bT(2055,` or `),Aa(2056,`code`),bT(2057,`'released'`),cf()(),Aa(2058,`td`),bT(2059,`This instance stopped leading: the lease was lost, or it stepped down`),cf()()()(),Aa(2060,`p`)(2061,`code`),bT(2062,`LocksEvents.jobSkips$`),cf(),bT(2063,` emits a `),Aa(2064,`code`),bT(2065,`job-skipped`),cf(),bT(2066,` event for each call to an `),Aa(2067,`code`),bT(2068,`@OnOneInstance()`),cf(),bT(2069,` or `),Aa(2070,`code`),bT(2071,`@WithoutOverlapping()`),cf(),bT(2072,` job that resolved without running before `),Aa(2073,`code`),bT(2074,`onApplicationShutdown()`),cf(),bT(2075,`, and publishes it on `),Aa(2076,`code`),bT(2077,`nestjs:locks:job-skipped`),cf(),bT(2078,`. It is apart from `),Aa(2079,`code`),bT(2080,`events$`),cf(),bT(2081,`: every instance but the owner skips each tick, so these events are for counting, not alerting. The payload has `),Aa(2082,`code`),bT(2083,`type`),cf(),bT(2084,`, `),Aa(2085,`code`),bT(2086,`job`),cf(),bT(2087,` (`),Aa(2088,`code`),bT(2089,`ClassName.methodName`),cf(),bT(2090,`), `),Aa(2091,`code`),bT(2092,`key`),cf(),bT(2093,` (the job's key, not its `),Aa(2094,`code`),bT(2095,`<key>:owner`),cf(),bT(2096,` lease) and `),Aa(2097,`code`),bT(2098,`reason`),cf(),bT(2099,`:`),cf(),Aa(2100,`table`)(2101,`thead`)(2102,`tr`)(2103,`th`)(2104,`code`),bT(2105,`reason`),cf()(),Aa(2106,`th`),bT(2107,`When`),cf()()(),Aa(2108,`tbody`)(2109,`tr`)(2110,`td`)(2111,`code`),bT(2112,`ownership-unavailable`),cf()(),Aa(2113,`td`),bT(2114,`The `),Aa(2115,`code`),bT(2116,`<key>:owner`),cf(),bT(2117,` lease wasn't granted: another instance holds it, or the store granted it too late to use`),cf()(),Aa(2118,`tr`)(2119,`td`)(2120,`code`),bT(2121,`run-lock-unavailable`),cf()(),Aa(2122,`td`),bT(2123,`The `),Aa(2124,`code`),bT(2125,`<key>`),cf(),bT(2126,` run lock wasn't granted: a run is in progress, or the store granted it too late to use`),cf()(),Aa(2127,`tr`)(2128,`td`)(2129,`code`),bT(2130,`shutdown`),cf()(),Aa(2131,`td`),bT(2132,`The application is shutting down`),cf()()()(),Aa(2133,`app-copy-button`,44)(2134,`span`,45),bT(2135),LT(2136,`extension`),Wa(2137,`app-tabs`,null,37),cf(),Aa(2139,`pre`)(2140,`code`,46),bT(2141,`
@Injectable()
export class JobSkipMetrics implements OnModuleInit {
  constructor(private readonly events: LocksEvents) {}

  onModuleInit() {
    // skippedTicks: a counter from your metrics library
    this.events.jobSkips$.subscribe(({ job, reason }) => skippedTicks.add(1, { job, reason }));
  }
}
`),cf()()(),Aa(2142,`p`),bT(2143,`The events are what this instance saw, as it saw it: they don't record a job's last run, and they don't count ticks the scheduler never fired. A store error isn't a skip: the call rejects, as before.`),cf(),Aa(2144,`blockquote`,82)(2145,`strong`),bT(2146,`Warning`),cf(),bT(2147,` A subscriber to `),Aa(2148,`code`),bT(2149,`events$`),cf(),bT(2150,`, `),Aa(2151,`code`),bT(2152,`jobSkips$`),cf(),bT(2153,` or a `),Aa(2154,`code`),bT(2155,`nestjs:locks:*`),cf(),bT(2156,` channel must not throw: rxjs and Node rethrow its error as an `),Aa(2157,`code`),bT(2158,`uncaughtException`),cf(),bT(2159,`. A skip subscriber runs on every tick, so a bug in one shows within a tick.
`),cf(),Aa(2160,`h5`,83)(2161,`span`),bT(2162,`Errors`),cf()(),Aa(2163,`p`),bT(2164,`None of them carries an HTTP status: contention isn't the caller's mistake, so the handler picks the response (`),Aa(2165,`a`,80),bT(2166,`Run the export by hand`),cf(),bT(2167,` answers `),Aa(2168,`code`),bT(2169,`409`),cf(),bT(2170,`).`),cf(),Aa(2171,`table`)(2172,`thead`)(2173,`tr`)(2174,`th`),bT(2175,`Error`),cf(),Aa(2176,`th`),bT(2177,`Properties`),cf(),Aa(2178,`th`),bT(2179,`Raised when`),cf()()(),Aa(2180,`tbody`)(2181,`tr`)(2182,`td`)(2183,`code`),bT(2184,`LocksError`),cf()(),Aa(2185,`td`),bT(2186,`None`),cf(),Aa(2187,`td`),bT(2188,`The base class of the three below`),cf()(),Aa(2189,`tr`)(2190,`td`)(2191,`code`),bT(2192,`LockNotAcquiredError`),cf()(),Aa(2193,`td`)(2194,`code`),bT(2195,`key`),cf(),bT(2196,`, `),Aa(2197,`code`),bT(2198,`waitMs`),cf()(),Aa(2199,`td`)(2200,`code`),bT(2201,`withLock()`),cf(),bT(2202,` couldn't take the lock within `),Aa(2203,`code`),bT(2204,`wait`),cf()()(),Aa(2205,`tr`)(2206,`td`)(2207,`code`),bT(2208,`LockLostError`),cf()(),Aa(2209,`td`)(2210,`code`),bT(2211,`key`),cf(),bT(2212,`, `),Aa(2213,`code`),bT(2214,`fencingToken`),cf(),bT(2215,`, `),Aa(2216,`code`),bT(2217,`detectedBy`),cf()(),Aa(2218,`td`),bT(2219,`The reason a lost lock's `),Aa(2220,`code`),bT(2221,`signal`),cf(),bT(2222,` aborts with: the store refused a renewal (`),Aa(2223,`code`),bT(2224,`'renewal'`),cf(),bT(2225,`), or `),Aa(2226,`code`),bT(2227,`ttl`),cf(),bT(2228,` passed without a confirmed one (`),Aa(2229,`code`),bT(2230,`'deadline'`),cf(),bT(2231,`)`),cf()(),Aa(2232,`tr`)(2233,`td`)(2234,`code`),bT(2235,`LockStoreTimeoutError`),cf()(),Aa(2236,`td`)(2237,`code`),bT(2238,`key`),cf(),bT(2239,`, `),Aa(2240,`code`),bT(2241,`method`),cf(),bT(2242,`, `),Aa(2243,`code`),bT(2244,`timeoutMs`),cf()(),Aa(2245,`td`),bT(2246,`A store call (`),Aa(2247,`code`),bT(2248,`method`),cf(),bT(2249,`: `),Aa(2250,`code`),bT(2251,`'acquire'`),cf(),bT(2252,`, `),Aa(2253,`code`),bT(2254,`'renew'`),cf(),bT(2255,` or `),Aa(2256,`code`),bT(2257,`'release'`),cf(),bT(2258,`) didn't answer within `),Aa(2259,`code`),bT(2260,`storeTimeout`),cf()()()()()(),Aa(2261,`a`,84),Wa(2262,`i`,85),Aa(2263,`span`),bT(2264,`Edit on GitHub`),cf()()()),c&2){let j=tT(101),x=tT(112),u=tT(163),M=tT(202),S=tT(216),P=tT(263),E=tT(336),L=tT(352),f=tT(413),D=tT(427),y=tT(449),_=tT(467),w=tT(569),g=tT(596),z=tT(605),q=tT(614),W=tT(696),N=tT(705),B=tT(734),H=tT(759),Q=tT(787),F=tT(799),K=tT(810),U=tT(830),J=tT(858),Y=tT(883),V=tT(897),X=tT(906),Z=tT(1009),ee=tT(1065),te=tT(1076),ne=tT(1090),ie=tT(1121),re=tT(1130),ae=tT(1169),oe=tT(1281),se=tT(2138);zC(98),hf(` `,jT(99,43,`invoices/invoice-export.job.step-1`,j.isJsActive),`
`),zC(11),hf(` `,jT(110,46,`inventory/stock-reconciliation.job.step-1`,x.isJsActive),`
`),zC(51),hf(` `,jT(161,49,`test/step-1.duplicate-runs.e2e-spec`,u.isJsActive),`
`),zC(39),hf(` `,jT(200,52,`database/schema`,M.isJsActive),`
`),zC(14),hf(` `,jT(214,55,`drizzle/0002_locks.sql`,S.isJsActive),`
`),zC(47),hf(` `,jT(261,58,`database/drizzle-lock.store`,P.isJsActive),`
`),zC(73),hf(` `,jT(334,61,`test/step-2.drizzle-lock-store.e2e-spec`,E.isJsActive),`
`),zC(16),hf(` `,jT(350,64,`app.module`,L.isJsActive),`
`),zC(61),hf(` `,jT(411,67,`typeorm/lock.entity`,f.isJsActive),`
`),zC(14),hf(` `,jT(425,70,`typeorm/data-source`,D.isJsActive),`
`),zC(22),hf(` `,jT(447,73,`typeorm/migrations/1790321710846-Locks`,y.isJsActive),`
`),zC(18),hf(` `,jT(465,76,`typeorm/typeorm-lock.store`,_.isJsActive),`
`),zC(102),hf(` `,jT(567,79,`test/typeorm-lock.store.e2e-spec`,w.isJsActive),`
`),zC(27),hf(` `,jT(594,82,`invoices/invoice-export.job.step-3`,g.isJsActive),`
`),zC(9),hf(` `,jT(603,85,`invoices/invoice-export.job.step-3`,z.isJsActive),`
`),zC(9),hf(` `,jT(612,88,`inventory/stock-reconciliation.job.step-3`,q.isJsActive),`
`),zC(82),hf(` `,jT(694,91,`test/step-3.one-instance.e2e-spec`,W.isJsActive),`
`),zC(9),hf(` `,jT(703,94,`test/step-3.one-instance.e2e-spec`,N.isJsActive),`
`),zC(29),hf(` `,jT(732,97,`inventory/stock-reconciliation.job.step-4`,B.isJsActive),`
`),zC(25),hf(` `,jT(757,100,`test/step-4.without-overlapping.e2e-spec`,H.isJsActive),`
`),zC(28),hf(` `,jT(785,103,`database/schema`,Q.isJsActive),`
`),zC(12),hf(` `,jT(797,106,`drizzle/0003_stock_fencing_token.sql`,F.isJsActive),`
`),zC(11),hf(` `,jT(808,109,`inventory/stock.repository`,K.isJsActive),`
`),zC(20),hf(` `,jT(828,112,`inventory/stock-reconciliation.job`,U.isJsActive),`
`),zC(28),hf(` `,jT(856,115,`test/step-5.fencing.e2e-spec`,J.isJsActive),`
`),zC(25),hf(` `,jT(881,118,`invoices/invoice-exports.controller`,Y.isJsActive),`
`),zC(14),hf(` `,jT(895,121,`invoices/invoice-export.job`,V.isJsActive),`
`),zC(9),hf(` `,jT(904,124,`invoices/invoice-export.job`,X.isJsActive),`
`),zC(103),hf(` `,jT(1007,127,`redis/redis-lock.store`,Z.isJsActive),`
`),zC(29),Ky(``,`{`,`locks`,`}`,`:key:<key>`),zC(3),Ky(``,`{`,`locks`,`}`,`:fencing-token`),zC(6),Ky(`SET `,`{`,`locks`,`}`,`:fencing-token <value>`),zC(18),hf(` `,jT(1063,130,`redis/redis.module`,ee.isJsActive),`
`),zC(11),hf(` `,jT(1074,133,`app.module.step-7`,te.isJsActive),`
`),zC(14),hf(` `,jT(1088,136,`test/step-7.redis-lock-store.e2e-spec`,ne.isJsActive),`
`),zC(31),hf(` `,jT(1119,139,`inventory/warehouse-feed`,ie.isJsActive),`
`),zC(9),hf(` `,jT(1128,142,`inventory/inventory.module`,re.isJsActive),`
`),zC(39),hf(` `,jT(1167,145,`test/step-8.leader-election.e2e-spec`,ae.isJsActive),`
`),zC(112),hf(` `,jT(1279,148,`test/helpers`,oe.isJsActive),`
`),zC(857),hf(` `,jT(2136,151,`metrics/job-skip-metrics`,se.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return d})();var me=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(h){return(m||(m=im(d)))(h||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-outbox`]],features:[xy],decls:3335,vars:96,consts:[[`contentReference`,``],[`app7e14592484a64d96cf2c3cec3e9034554f75798d`,``],[`app16e9839188b94207779148193a7bd00c2c79305b`,``],[`appf9260d7bfbdfaf5cd296283fd007730938e8fca3`,``],[`app573135266f811aa3cb5f9ad79756f8aec9223eeb`,``],[`appa053609938f7a98365068aec6527e4212619c495`,``],[`appec0a1dad3efc1cbd7989f56f5a60e6fe2581ef1e`,``],[`app812c15a8d07ccb4d4f21a5131b0faa4f941b60fd`,``],[`appe34ebaec3292f3977ca8dbcbdc9981f802ec908f`,``],[`app43fb55650e0634e01f72fc42ea8034cdcb4ad1b4`,``],[`app5196111f0a68e2ed3ccfd93aa6c94d290f937fe4`,``],[`app12caa266634f8aac709283a2953b87a24a8e7c64`,``],[`appc8208b3e4537a0195b5acf125cf31ee7c53b16ae`,``],[`app198aaf1e06b4df6a3e0c7be6169f826d3add6570`,``],[`app23471965e4d440e4775dff82b1e45b7bf90a1c0b`,``],[`appd25cfb62e0eb895fdafeeeab2830f7b812f1b065`,``],[`appac836b60a3e215a903ab3abd9e55d5594ccd0944`,``],[`appf1026cccbfbae13e0442df42c6aeeb1d71b2879e`,``],[`app8e7d2e57112e9ee7a891b2e9a559b328353536b1`,``],[`appdc578b19623ebc6b842c55cba064c10dc715d72c`,``],[`app6ec24db39957674774be59747440387afbadd33f`,``],[`appd9b10142ba22d4cf4a4c5fa6850d67237aed6b00`,``],[`app87e3236233a03e8cc341b3e6934d4e42d5d05cb9`,``],[`app1ff3a547cd0e41137fd73a57aa71e8539fca540f`,``],[`appd14387be87f12bb8af0917746b490022643115ad`,``],[1,`content`],[1,`content-inner`],[`id`,`outbox`],[`appAnchor`,``,`id`,`prerequisites`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://orm.drizzle.team`],[`href`,`/data/drizzle`],[`href`,`/reliability/outbox#keep-messages-in-your-database`],[`href`,`/reliability/outbox#publish-to-the-analytics-microservice`],[1,`language-bash`],[`appAnchor`,``,`id`,`keep-messages-in-your-database`],[1,`warning`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/reliability/outbox#save-the-order-and-its-messages-in-one-transaction`],[`appAnchor`,``,`id`,`register-the-outbox`],[`href`,`/reliability/outbox#handle-orderplaced-in-process`],[`href`,`/reliability/outbox#run-several-instances`],[`href`,`/reliability/outbox#retries-and-the-dead-letter-queue`],[1,`info`],[`href`,`/application/configuration`],[`appAnchor`,``,`id`,`save-the-order-and-its-messages-in-one-transaction`],[`href`,`/reliability/outbox#testing`],[`appAnchor`,``,`id`,`handle-orderplaced-in-process`],[`appAnchor`,``,`id`,`publish-to-the-analytics-microservice`],[`appAnchor`,``,`id`,`retries-and-the-dead-letter-queue`],[`routerLink`,`/security/authorization`],[`appAnchor`,``,`id`,`run-several-instances`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/diagnostics_channel.html`],[`appAnchor`,``,`id`,`try-it`],[`href`,`/reliability/outbox#prerequisites`],[1,`language-json`],[`appAnchor`,``,`id`,`testing`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://pglite.dev`],[`appAnchor`,``,`id`,`delivery-guarantees`],[`appAnchor`,``,`id`,`production-checklist`],[`href`,`/reliability/outbox#the-store-contract`],[`href`,`/application/task-scheduling#declarative-cron-jobs`],[`appAnchor`,``,`id`,`the-store-contract`],[`appAnchor`,``,`id`,`using-bullmq-on-postgres-instead`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/37-outbox`],[`appAnchor`,``,`id`,`reference`],[`appAnchor`,``,`id`,`module-options`],[`href`,`/reliability/outbox#register-the-outbox`],[`appAnchor`,``,`id`,`stores`],[`appAnchor`,``,`id`,`messages-and-handlers`],[`appAnchor`,``,`id`,`services`],[`appAnchor`,``,`id`,`events`],[`appAnchor`,``,`id`,`errors`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/reliability/outbox.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,25,0)(2,`div`,26)(3,`h3`,27),bT(4,`Outbox`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/outbox`),cf(),bT(8,` publishes events and messages reliably: each one is saved in the same database transaction as your data, then relayed with retries.`),cf(),Aa(9,`p`),bT(10,`When a customer places an order at an online store for cat food and supplies, the order API saves the order and announces it with an `),Aa(11,`code`),bT(12,`OrderPlaced`),cf(),bT(13,` event. Three things react to that event: a confirmation email goes out, stock is reserved, and a separate analytics service records the sale.`),cf(),Aa(14,`p`),bT(15,`Saving the order and publishing the event are two writes to two different systems, and no transaction spans both:`),cf(),Aa(16,`ul`)(17,`li`)(18,`strong`),bT(19,`Save, then publish.`),cf(),bT(20,` If the process crashes or the broker is down between the two, the order exists but `),Aa(21,`code`),bT(22,`OrderPlaced`),cf(),bT(23,` is lost. The customer gets no email, the stock isn't reserved, and analytics undercounts.`),cf(),Aa(24,`li`)(25,`strong`),bT(26,`Publish, then save.`),cf(),bT(27,` If the insert fails, the customer is thanked for an order that doesn't exist.`),cf(),Aa(28,`li`)(29,`strong`),bT(30,`Retry the publish on error.`),cf(),bT(31,` A timeout after a successful send looks like a failure, so the retry sends it again and the customer gets two emails.`),cf()(),Aa(32,`p`),bT(33,`This is the dual-write problem. `),Aa(34,`code`),bT(35,`ClientProxy.emit()`),cf(),bT(36,`, `),Aa(37,`code`),bT(38,`EventEmitter2`),cf(),bT(39,` and the CQRS `),Aa(40,`code`),bT(41,`EventBus`),cf(),bT(42,` all publish from memory, so they all have it.`),cf(),Aa(43,`p`),bT(44,`A transactional outbox removes it by turning the event into a row. `),Aa(45,`code`),bT(46,`Outbox.add()`),cf(),bT(47,` inserts the message into an outbox table in `),Aa(48,`strong`),bT(49,`the same database transaction as the order`),cf(),bT(50,`, so both commit or neither does. A relay then publishes committed messages. It retries failures with backoff and moves messages that never succeed to a dead-letter table. Retries mean a consumer can see a message twice, so each consumer keeps an `),Aa(51,`strong`),bT(52,`inbox`),cf(),bT(53,` of the message ids it has processed and skips repeats.`),cf(),Aa(54,`p`),bT(55,`In this tutorial, you'll add the outbox to the store's order API, on PostgreSQL with Drizzle:`),cf(),Aa(56,`ul`)(57,`li`)(58,`code`),bT(59,`POST /orders`),cf(),bT(60,` saves the order and its messages in one transaction.`),cf(),Aa(61,`li`),bT(62,`Two in-process handlers send the confirmation email and reserve stock.`),cf(),Aa(63,`li`),bT(64,`A separate analytics microservice, with a database of its own, receives order events over TCP, in order for each order.`),cf(),Aa(65,`li`),bT(66,`Failures are retried, and a small admin API lists, requeues and purges dead letters.`),cf(),Aa(67,`li`),bT(68,`Several instances of the API share the work safely.`),cf()(),Aa(69,`h4`,28)(70,`span`),bT(71,`Prerequisites`),cf()(),Aa(72,`ul`)(73,`li`),bT(74,`PostgreSQL, with `),Aa(75,`a`,29),bT(76,`Drizzle ORM`),cf(),bT(77,` on the `),Aa(78,`code`),bT(79,`pg`),cf(),bT(80,` driver, registered through `),Aa(81,`a`,30)(82,`code`),bT(83,`@nestjs/drizzle`),cf()(),bT(84,`. The outbox's messages commit with your rows, so they live in the database your orders live in, on a database server that outlives any instance of the application. Using TypeORM, Prisma or MySQL? Follow the tutorial for what the application does: `),Aa(85,`a`,31),bT(86,`Keep messages in your database`),cf(),bT(87,` shows the store with each of them.`),cf(),Aa(88,`li`)(89,`code`),bT(90,`@nestjs/microservices`),cf(),bT(91,`, for the TCP link to the analytics service in `),Aa(92,`a`,32),bT(93,`Publish to the analytics microservice`),cf(),bT(94,`.`),cf()(),Aa(95,`p`),bT(96,`Install the package:`),cf(),Aa(97,`pre`)(98,`code`,33),bT(99,`
$ npm i --save @nestjs/outbox
`),cf()(),Aa(100,`p`),bT(101,`The example application, the online store's order API, keeps its products and orders in two tables of its own, which the later sections read and write. They're the example's data, not something the outbox needs: the outbox's tables belong to its store, which creates them, as `),Aa(102,`a`,31),bT(103,`Keep messages in your database`),cf(),bT(104,` shows.`),cf(),Aa(105,`p`)(106,`code`),bT(107,`products`),cf(),bT(108,` is the catalog, and reserving stock for an order moves units from its `),Aa(109,`code`),bT(110,`in_stock`),cf(),bT(111,` to its `),Aa(112,`code`),bT(113,`reserved`),cf(),bT(114,`:`),cf(),Aa(115,`table`)(116,`thead`)(117,`tr`)(118,`th`),bT(119,`Column`),cf(),Aa(120,`th`),bT(121,`Type`),cf(),Aa(122,`th`),bT(123,`Notes`),cf()()(),Aa(124,`tbody`)(125,`tr`)(126,`td`)(127,`code`),bT(128,`id`),cf()(),Aa(129,`td`)(130,`code`),bT(131,`text`),cf()(),Aa(132,`td`),bT(133,`Primary key, such as `),Aa(134,`code`),bT(135,`salmon-kibble-2kg`),cf()()(),Aa(136,`tr`)(137,`td`)(138,`code`),bT(139,`name`),cf()(),Aa(140,`td`)(141,`code`),bT(142,`text`),cf()(),Aa(143,`td`),bT(144,`The display name, such as `),Aa(145,`code`),bT(146,`Salmon kibble, 2 kg`),cf()()(),Aa(147,`tr`)(148,`td`)(149,`code`),bT(150,`price`),cf()(),Aa(151,`td`)(152,`code`),bT(153,`integer`),cf()(),Aa(154,`td`),bT(155,`In cents`),cf()(),Aa(156,`tr`)(157,`td`)(158,`code`),bT(159,`in_stock`),cf()(),Aa(160,`td`)(161,`code`),bT(162,`integer`),cf()(),Aa(163,`td`),bT(164,`The units available to order`),cf()(),Aa(165,`tr`)(166,`td`)(167,`code`),bT(168,`reserved`),cf()(),Aa(169,`td`)(170,`code`),bT(171,`integer`),cf()(),Aa(172,`td`),bT(173,`The units held for placed orders. Defaults to `),Aa(174,`code`),bT(175,`0`),cf()()()()(),Aa(176,`p`)(177,`code`),bT(178,`orders`),cf(),bT(179,` holds the orders that `),Aa(180,`code`),bT(181,`POST /orders`),cf(),bT(182,` saves:`),cf(),Aa(183,`table`)(184,`thead`)(185,`tr`)(186,`th`),bT(187,`Column`),cf(),Aa(188,`th`),bT(189,`Type`),cf(),Aa(190,`th`),bT(191,`Notes`),cf()()(),Aa(192,`tbody`)(193,`tr`)(194,`td`)(195,`code`),bT(196,`id`),cf()(),Aa(197,`td`)(198,`code`),bT(199,`text`),cf()(),Aa(200,`td`),bT(201,`Primary key`),cf()(),Aa(202,`tr`)(203,`td`)(204,`code`),bT(205,`user_id`),cf()(),Aa(206,`td`)(207,`code`),bT(208,`text`),cf()(),Aa(209,`td`),bT(210,`The customer who placed the order`),cf()(),Aa(211,`tr`)(212,`td`)(213,`code`),bT(214,`items`),cf()(),Aa(215,`td`)(216,`code`),bT(217,`jsonb`),cf()(),Aa(218,`td`),bT(219,`The order's lines, as a JSON array: each line's `),Aa(220,`code`),bT(221,`productId`),cf(),bT(222,`, `),Aa(223,`code`),bT(224,`quantity`),cf(),bT(225,` and unit `),Aa(226,`code`),bT(227,`price`),cf(),bT(228,` (in cents)`),cf()(),Aa(229,`tr`)(230,`td`)(231,`code`),bT(232,`total`),cf()(),Aa(233,`td`)(234,`code`),bT(235,`integer`),cf()(),Aa(236,`td`),bT(237,`In cents`),cf()(),Aa(238,`tr`)(239,`td`)(240,`code`),bT(241,`status`),cf()(),Aa(242,`td`)(243,`code`),bT(244,`text`),cf()(),Aa(245,`td`)(246,`code`),bT(247,`placed`),cf(),bT(248,` or `),Aa(249,`code`),bT(250,`cancelled`),cf()()()()(),Aa(251,`p`),bT(252,`No column in either table is nullable.`),cf(),Aa(253,`p`),bT(254,`The catalog has two products: `),Aa(255,`code`),bT(256,`salmon-kibble-2kg`),cf(),bT(257,`, at 2499 cents with 10 in stock, and `),Aa(258,`code`),bT(259,`clumping-litter-10l`),cf(),bT(260,`, at 1599 cents with one in stock.`),cf(),Aa(261,`h4`,34)(262,`span`),bT(263,`Keep messages in your database`),cf()(),Aa(264,`p`),bT(265,`There's nothing to create for the outbox: no tables, entities or Prisma models. Register its store, and the store creates its own schema, `),Aa(266,`code`),bT(267,`nest_outbox`),cf(),bT(268,`, and migrates it: at startup in development and in tests, and in production with `),Aa(269,`code`),bT(270,`npx @nestjs/outbox migrate`),cf(),bT(271,`, or with `),Aa(272,`code`),bT(273,`migrationSql()`),cf(),bT(274,` in your own migrations.`),cf(),Aa(275,`p`),bT(276,`The outbox keeps its messages, its dead letters and the consumers' inboxes in the same database as your own tables, because they must commit with your rows. Until you register a store for them, the outbox keeps them in memory: fine for a first run, but a restart loses every message that wasn't published yet, two instances don't share them, and nothing joins your transactions.`),cf(),Aa(277,`blockquote`,35)(278,`strong`),bT(279,`Warning`),cf(),bT(280,` With `),Aa(281,`code`),bT(282,`NODE_ENV=production`),cf(),bT(283,` and no store registered, startup fails, unless you set `),Aa(284,`code`),bT(285,`allowInMemoryStorage: true`),cf(),bT(286,`.
`),cf(),Aa(287,`p`),bT(288,`On PostgreSQL, register the package's store, `),Aa(289,`code`),bT(290,`PostgresOutboxStore`),cf(),bT(291,` from `),Aa(292,`code`),bT(293,`@nestjs/outbox/postgres`),cf(),bT(294,`. It runs its SQL through the database client your application already has, so it can join your transactions, and it keeps its tables in a schema of its own. It's an ordinary provider, registered once, in the root module, next to `),Aa(295,`code`),bT(296,`OutboxModule`),cf(),bT(297,`: both are application-wide, and every `),Aa(298,`code`),bT(299,`outbox.add()`),cf(),bT(300,` in any module goes through it. The root module creates it with a factory that injects the Drizzle database and the `),Aa(301,`code`),bT(302,`OutboxStorage`),cf(),bT(303,` registry, which the store registers itself with:`),cf(),Aa(304,`app-copy-button`,36)(305,`span`,37),bT(306),LT(307,`extension`),Wa(308,`app-tabs`,null,1),cf(),Aa(310,`pre`)(311,`code`,38),bT(312,`
{
  // Messages and inbox records in your database, in a schema of their own (nest_outbox)
  provide: PostgresOutboxStore,
  inject: [getDrizzleToken(), OutboxStorage],
  useFactory: (db: Database, outboxStorage: OutboxStorage) =>
    new PostgresOutboxStore({ executor: fromDrizzle(db) }, outboxStorage),
},
`),cf()()(),Aa(313,`p`)(314,`code`),bT(315,`fromDrizzle(db)`),cf(),bT(316,` is the store's `),Aa(317,`strong`),bT(318,`executor`),cf(),bT(319,`: it runs the store's statements through your Drizzle database, whichever driver it uses, such as `),Aa(320,`code`),bT(321,`pg`),cf(),bT(322,` or PGlite. `),Aa(323,`code`),bT(324,`fromPg(pool)`),cf(),bT(325,`, `),Aa(326,`code`),bT(327,`fromTypeOrm(dataSource)`),cf(),bT(328,`, `),Aa(329,`code`),bT(330,`fromPrisma(prisma)`),cf(),bT(331,` and `),Aa(332,`code`),bT(333,`fromKysely(db)`),cf(),bT(334,` do the same for a node-postgres pool, TypeORM, Prisma and Kysely. At startup, the module logs `),Aa(335,`code`),bT(336,`OutboxStorage: PostgresOutboxStore`),cf(),bT(337,`.`),cf(),Aa(338,`p`)(339,`strong`),bT(340,`The schema.`),cf(),bT(341,` The store keeps its tables in a schema of its own, `),Aa(342,`code`),bT(343,`nest_outbox`),cf(),bT(344,` (the `),Aa(345,`code`),bT(346,`schema`),cf(),bT(347,` option names another). On MySQL, which has no schemas, they're tables of the connection's database, with the schema's name as their prefix: `),Aa(348,`code`),bT(349,`nest_outbox_messages`),cf(),bT(350,` and so on.`),cf(),Aa(351,`table`)(352,`thead`)(353,`tr`)(354,`th`),bT(355,`Table`),cf(),Aa(356,`th`),bT(357,`What it holds`),cf()()(),Aa(358,`tbody`)(359,`tr`)(360,`td`)(361,`code`),bT(362,`nest_outbox.messages`),cf()(),Aa(363,`td`),bT(364,`Each message from `),Aa(365,`code`),bT(366,`add()`),cf(),bT(367,` until it's published or dead-lettered, with its attempts and lease`),cf()(),Aa(368,`tr`)(369,`td`)(370,`code`),bT(371,`nest_outbox.dead_letters`),cf()(),Aa(372,`td`),bT(373,`The messages that failed, with the reason and the error of every attempt`),cf()(),Aa(374,`tr`)(375,`td`)(376,`code`),bT(377,`nest_outbox.inbox`),cf()(),Aa(378,`td`),bT(379,`The ids of the messages each consumer has processed`),cf()(),Aa(380,`tr`)(381,`td`)(382,`code`),bT(383,`nest_outbox.migrations`),cf()(),Aa(384,`td`),bT(385,`The versions of the store's schema applied`),cf()()()(),Aa(386,`p`),bT(387,`They belong to the store: your migrations don't create them, your ORM's schema doesn't declare them, and your own tables can't collide with them. drizzle-kit and Prisma Migrate work on the `),Aa(388,`code`),bT(389,`public`),cf(),bT(390,` schema unless told otherwise, and TypeORM on its entities' tables, so their tools leave `),Aa(391,`code`),bT(392,`nest_outbox`),cf(),bT(393,` alone.`),cf(),Aa(394,`p`)(395,`strong`),bT(396,`Migrations.`),cf(),bT(397,` The package ships the schema as versioned migrations, and the store applies them itself. With the `),Aa(398,`code`),bT(399,`migrate`),cf(),bT(400,` option, it applies the ones the schema hasn't had yet when the application starts, before the relay runs, in one transaction that holds an advisory lock: of several instances that start together, one migrates, and the others find nothing left to do. `),Aa(401,`code`),bT(402,`migrate`),cf(),bT(403,` defaults to `),Aa(404,`code`),bT(405,`true`),cf(),bT(406,`, except with `),Aa(407,`code`),bT(408,`NODE_ENV=production`),cf(),bT(409,`. So in development and in tests, the store creates its schema on the first start, and your migrations only create your own tables, here `),Aa(410,`code`),bT(411,`products`),cf(),bT(412,` and `),Aa(413,`code`),bT(414,`orders`),cf(),bT(415,`.`),cf(),Aa(416,`p`),bT(417,`In production, apply the migrations before the new version of your application starts, as you apply your own, so that no instance changes the schema while it boots: in the middle of a rolling deploy, that would lock busy tables, and a least-privilege database user can't do it anyway. The package's command line does it from your deploy step, next to `),Aa(418,`code`),bT(419,`npx drizzle-kit migrate`),cf(),bT(420,`. It reads the database from `),Aa(421,`code`),bT(422,`DATABASE_URL`),cf(),bT(423,`, or from `),Aa(424,`code`),bT(425,`--url`),cf(),bT(426,`, and needs `),Aa(427,`code`),bT(428,`pg`),cf(),bT(429,` installed:`),cf(),Aa(430,`pre`)(431,`code`,33),bT(432,`
$ npx @nestjs/outbox status
Schema "nest_outbox" is at version 0; this version of @nestjs/outbox needs version 1.
$ npx @nestjs/outbox migrate
Migrated schema "nest_outbox" to version 1 (applied 1).
`),cf()(),Aa(433,`p`)(434,`code`),bT(435,`status`),cf(),bT(436,` exits with 1 while the schema is behind, which makes it a check for CI. To apply the migrations with your own migration tool instead, take their SQL from `),Aa(437,`code`),bT(438,`npx @nestjs/outbox sql`),cf(),bT(439,`, or from `),Aa(440,`code`),bT(441,`PostgresOutboxStore.migrationSql()`),cf(),bT(442,` in code: the statements of every migration, one per paragraph, with the bookkeeping that records the version. Run them in one transaction, as TypeORM's and Drizzle's migrators do. With TypeORM, that's a migration of your own, next to the ones it generates for your entities:`),cf(),Aa(443,`app-copy-button`,36)(444,`span`,37),bT(445),LT(446,`extension`),Wa(447,`app-tabs`,null,2),cf(),Aa(449,`pre`)(450,`code`,38),bT(451,`
import { PostgresOutboxStore } from '@nestjs/outbox/postgres';
import type { MigrationInterface, QueryRunner } from 'typeorm';

export class OutboxStore1790801276314 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(PostgresOutboxStore.migrationSql());
  }

  // The store's migrations only ever add tables, columns and indexes: it has no down migrations.
  async down(): Promise<void> {}
}
`),cf()()(),Aa(452,`p`),bT(453,`With drizzle-kit, create a custom migration, and fill the file it creates with the SQL, a `),Aa(454,`code`),bT(455,`--> statement-breakpoint`),cf(),bT(456,` line between the statements: Drizzle's migrator then runs them one at a time, which PGlite requires. In code, `),Aa(457,`code`),bT(458,`migrationSql()`),cf(),bT(459,` with `),Aa(460,`code`),bT(461,`statementBreakpoints: true`),cf(),bT(462,` returns the same.`),cf(),Aa(463,`pre`)(464,`code`,33),bT(465,`
$ npx drizzle-kit generate --custom --name=outbox
$ npx @nestjs/outbox sql --statement-breakpoints > drizzle/20261103120000_outbox/migration.sql
`),cf()(),Aa(466,`p`),bT(467,`On MySQL, `),Aa(468,`code`),bT(469,`MySqlOutboxStore.migrationStatements()`),cf(),bT(470,` returns the statements one per string, and a TypeORM migration runs them one per call:`),cf(),Aa(471,`app-copy-button`,36)(472,`span`,37),bT(473),LT(474,`extension`),Wa(475,`app-tabs`,null,3),cf(),Aa(477,`pre`)(478,`code`,38),bT(479,`
for (const statement of MySqlOutboxStore.migrationStatements()) {
  await queryRunner.query(statement);
}
`),cf()()(),Aa(480,`p`),bT(481,`With `),Aa(482,`code`),bT(483,`migrate`),cf(),bT(484,` off, a store whose schema is behind fails the startup with an `),Aa(485,`code`),bT(486,`OutboxSchemaError`),cf(),bT(487,` that names these three ways, and fails every call the same way until the schema catches up, which it notices without a restart. Migrations only ever add tables, columns and indexes, so during a rolling deploy, the previous version of your application keeps running on the migrated schema. There are no down migrations.`),cf(),Aa(488,`p`)(489,`strong`),bT(490,`Transactions.`),cf(),Aa(491,`code`),bT(492,`outbox.add()`),cf(),bT(493,` takes your transaction, as `),Aa(494,`a`,39),bT(495,`Save the order and its messages in one transaction`),cf(),bT(496,` shows, and so does a handler's `),Aa(497,`code`),bT(498,`processInTransaction()`),cf(),bT(499,`: with Drizzle, the `),Aa(500,`code`),bT(501,`tx`),cf(),bT(502,` that `),Aa(503,`code`),bT(504,`db.transaction()`),cf(),bT(505,` hands its callback. The store runs its statements on that transaction, so they commit or roll back with your writes. It refuses the database itself, whose statements would commit on their own, with an `),Aa(506,`code`),bT(507,`OutboxTransactionRequiredError`),cf(),bT(508,` that says what to pass. With the other executors, pass a node-postgres client after `),Aa(509,`code`),bT(510,`BEGIN`),cf(),bT(511,` (not the pool), TypeORM's `),Aa(512,`code`),bT(513,`EntityManager`),cf(),bT(514,` from `),Aa(515,`code`),bT(516,`dataSource.transaction()`),cf(),bT(517,`, Prisma's interactive transaction client, or a Kysely transaction.`),cf(),Aa(518,`p`)(519,`strong`),bT(520,`Isolation.`),cf(),bT(521,` The store's own transactions (claims, dead-letter moves, requeues) rely on READ COMMITTED, PostgreSQL's default isolation level: at startup, the store checks the database's `),Aa(522,`code`),bT(523,`default_transaction_isolation`),cf(),bT(524,`, and fails if it's stricter. Yours may run at any level. `),Aa(525,`code`),bT(526,`add()`),cf(),bT(527,` first takes a lock per key on your transaction, so transactions that add messages with the same key take turns, and a key's messages are numbered in the order their transactions commit. Under REPEATABLE READ or SERIALIZABLE, two deliveries of one message that race to `),Aa(528,`code`),bT(529,`processInTransaction()`),cf(),bT(530,` can fail the second with a serialization error instead of skipping it as a duplicate: its handler fails, and the relay's retry finds the record.`),cf(),Aa(531,`p`)(532,`strong`),bT(533,`With TypeORM.`),cf(),Aa(534,`code`),bT(535,`TypeOrmModule`),cf(),bT(536,` takes the place of `),Aa(537,`code`),bT(538,`DrizzleModule`),cf(),bT(539,` in the root module, and the store runs on the `),Aa(540,`code`),bT(541,`DataSource`),cf(),bT(542,` it provides, through `),Aa(543,`code`),bT(544,`fromTypeOrm()`),cf(),bT(545,`:`),cf(),Aa(546,`app-copy-button`,36)(547,`span`,37),bT(548),LT(549,`extension`),Wa(550,`app-tabs`,null,4),cf(),Aa(552,`pre`)(553,`code`,38),bT(554,`
{
  // Messages and inbox records in your database, in a schema of their own (nest_outbox)
  provide: PostgresOutboxStore,
  inject: [DataSource, OutboxStorage],
  useFactory: (dataSource: DataSource, outboxStorage: OutboxStorage) =>
    new PostgresOutboxStore({ executor: fromTypeOrm(dataSource) }, outboxStorage),
},
`),cf()()(),Aa(555,`p`),bT(556,`Where the tutorial passes Drizzle's `),Aa(557,`code`),bT(558,`tx`),cf(),bT(559,` to `),Aa(560,`code`),bT(561,`outbox.add()`),cf(),bT(562,`, pass the `),Aa(563,`code`),bT(564,`EntityManager`),cf(),bT(565,` that `),Aa(566,`code`),bT(567,`dataSource.transaction()`),cf(),bT(568,` hands its callback, and type the outbox with it. The store refuses `),Aa(569,`code`),bT(570,`dataSource.manager`),cf(),bT(571,`, whose writes would commit on their own. This is the order service with TypeORM:`),cf(),Aa(572,`app-copy-button`,36)(573,`span`,37),bT(574),LT(575,`extension`),Wa(576,`app-tabs`,null,5),cf(),Aa(578,`pre`)(579,`code`,38),bT(580,`
@Injectable()
export class OrdersService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly outbox: Outbox<EntityManager>,
  ) {}

  async placeOrder({ userId, items }: PlaceOrderDto): Promise<Order> {
    if (!items?.length) {
      throw new BadRequestException('An order needs at least one item');
    }

    const order = await this.dataSource.transaction(async (manager) => {
      // ... price the items through manager (an unknown product throws) and build the order
      await manager.insert(OrderEntity, order);

      // The transaction's EntityManager: the message commits or rolls back with the order.
      await this.outbox.add(manager, { topic: 'order.placed', payload: order });
      return order;
    });

    this.outbox.notify(); // publish now instead of at the next poll
    return order;
  }
}
`),cf()()(),Aa(581,`p`)(582,`strong`),bT(583,`With Prisma.`),cf(),bT(584,` Pass your `),Aa(585,`code`),bT(586,`PrismaService`),cf(),bT(587,` to `),Aa(588,`code`),bT(589,`fromPrisma()`),cf(),bT(590,` in the factory, and to `),Aa(591,`code`),bT(592,`outbox.add()`),cf(),bT(593,` the transaction client that `),Aa(594,`code`),bT(595,`prisma.$transaction()`),cf(),bT(596,` hands its callback. Only that interactive form has one to pass: the array form, `),Aa(597,`code`),bT(598,`prisma.$transaction([query1, query2])`),cf(),bT(599,`, can't include an `),Aa(600,`code`),bT(601,`outbox.add()`),cf(),bT(602,`. The store refuses the client itself, whose statements would commit on their own. Its own transactions wait up to 10 seconds for a connection and run for up to a minute, longer than Prisma's defaults: the second argument of `),Aa(603,`code`),bT(604,`fromPrisma()`),cf(),bT(605,` changes that, with `),Aa(606,`code`),bT(607,`maxWait`),cf(),bT(608,` and `),Aa(609,`code`),bT(610,`timeout`),cf(),bT(611,`.`),cf(),Aa(612,`p`)(613,`strong`),bT(614,`With MySQL.`),cf(),bT(615,` For MySQL 8.4 LTS and 9.x, `),Aa(616,`code`),bT(617,`@nestjs/outbox/mysql`),cf(),bT(618,` has `),Aa(619,`code`),bT(620,`MySqlOutboxStore`),cf(),bT(621,`. Import the store and its executor from there: the provider is the same, and so are the options and the executors' names. This is the order API on MySQL, with Drizzle on the `),Aa(622,`code`),bT(623,`mysql2`),cf(),bT(624,` driver:`),cf(),Aa(625,`app-copy-button`,36)(626,`span`,37),bT(627),LT(628,`extension`),Wa(629,`app-tabs`,null,6),cf(),Aa(631,`pre`)(632,`code`,38),bT(633,`
import { Module } from '@nestjs/common';
import { DrizzleModule, getDrizzleToken } from '@nestjs/drizzle';
import { OutboxModule, OutboxStorage } from '@nestjs/outbox';
import { fromDrizzle, MySqlOutboxStore } from '@nestjs/outbox/mysql';
import { drizzle } from 'drizzle-orm/mysql2';
import { NotificationsModule } from '../notifications/notifications.module.js';
import type { Database } from './drizzle.js';
import { OrdersService } from './orders.service.js';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      // A mysql2 pool on DATABASE_URL (mysql://...), whose path names the database
      useFactory: () => ({ drizzle, connection: { uri: process.env.DATABASE_URL! } }),
    }),
    OutboxModule.forRoot({ relay: { pollInterval: '1s' } }),
    NotificationsModule,
  ],
  providers: [
    {
      // Messages and inbox records in your database, in tables of their own (nest_outbox_*)
      provide: MySqlOutboxStore,
      inject: [getDrizzleToken(), OutboxStorage],
      useFactory: (db: Database, outboxStorage: OutboxStorage) =>
        new MySqlOutboxStore({ executor: fromDrizzle(db) }, outboxStorage),
    },
    OrdersService,
  ],
})
export class AppModule {}
`),cf()()(),Aa(634,`p`)(635,`code`),bT(636,`fromMysql2(pool)`),cf(),bT(637,`, `),Aa(638,`code`),bT(639,`fromTypeOrm(dataSource)`),cf(),bT(640,` for a data source of type `),Aa(641,`code`),bT(642,`mysql`),cf(),bT(643,`, `),Aa(644,`code`),bT(645,`fromPrisma(prisma)`),cf(),bT(646,` with the `),Aa(647,`code`),bT(648,`@prisma/adapter-mariadb`),cf(),bT(649,` driver adapter (the one that serves MySQL), and `),Aa(650,`code`),bT(651,`fromKysely(db)`),cf(),bT(652,` serve the other clients. What differs from PostgreSQL:`),cf(),Aa(653,`ul`)(654,`li`)(655,`strong`),bT(656,`Tables, not a schema.`),cf(),bT(657,` A MySQL database has no schemas, so the store keeps its tables in the connection's database, the one the URL's path names, and the `),Aa(658,`code`),bT(659,`schema`),cf(),bT(660,` option is their prefix: `),Aa(661,`code`),bT(662,`nest_outbox_messages`),cf(),bT(663,`, `),Aa(664,`code`),bT(665,`nest_outbox_dead_letters`),cf(),bT(666,` and `),Aa(667,`code`),bT(668,`nest_outbox_inbox`),cf(),bT(669,`, next to `),Aa(670,`code`),bT(671,`nest_outbox_migrations`),cf(),bT(672,` and `),Aa(673,`code`),bT(674,`nest_outbox_locks`),cf(),bT(675,`. It takes lowercase letters, digits and underscores, up to 40 characters. A connection without a database fails the startup.`),cf(),Aa(676,`li`)(677,`strong`),bT(678,`Bounded keys.`),cf(),bT(679,` Ids, topics, keys and consumer names are indexed columns of at most 255 characters, compared byte for byte: `),Aa(680,`code`),bT(681,`order-1`),cf(),bT(682,` and `),Aa(683,`code`),bT(684,`Order-1`),cf(),bT(685,` are two keys. A longer one is refused with a `),Aa(686,`code`),bT(687,`RangeError`),cf(),bT(688,`, before any statement: by `),Aa(689,`code`),bT(690,`add()`),cf(),bT(691,`, and by the inbox before it runs a handler.`),cf(),Aa(692,`li`)(693,`strong`),bT(694,`Your isolation level.`),cf(),bT(695,` Your transactions may run at REPEATABLE READ, MySQL's default, or at READ COMMITTED. A delivery that races another to `),Aa(696,`code`),bT(697,`processInTransaction()`),cf(),bT(698,` waits for it, then skips the handler as a duplicate, at either level.`),cf(),Aa(699,`li`)(700,`strong`),bT(701,`Deadlocks reach your transaction.`),cf(),Aa(702,`code`),bT(703,`add()`),cf(),bT(704,` locks a row per key in your transaction, one of 16,384 that the keys share, which the store creates when it starts: producers of two keys that share a row take turns, as producers of one key do, which slows an unrelated producer only rarely. When MySQL breaks a deadlock in your transaction (error 1213), it rolls the whole transaction back, and the store can't run your work again: the error reaches your code as your client's error, so run the transaction again. With those rows in place, two things can still cause one: three deliveries of one message that race to `),Aa(705,`code`),bT(706,`processInTransaction()`),cf(),bT(707,` while the first rolls back, and transactions of yours that take the same locks in different orders. The store's own transactions retry on deadlock by themselves.`),cf(),Aa(708,`li`)(709,`strong`),bT(710,`Migrations that aren't transactional.`),cf(),bT(711,` MySQL commits each DDL statement on its own, so `),Aa(712,`code`),bT(713,`migrate`),cf(),bT(714,` and `),Aa(715,`code`),bT(716,`npx @nestjs/outbox migrate --url mysql://...`),cf(),bT(717,` apply the statements one at a time under a lock, and a run that stopped halfway resumes where it stopped. Your own tool must send one statement per call too, as the TypeORM migration in `),Aa(718,`strong`),bT(719,`Migrations`),cf(),bT(720,` above does, and a drizzle-kit custom migration takes `),Aa(721,`code`),bT(722,`npx @nestjs/outbox sql --dialect mysql --statement-breakpoints`),cf(),bT(723,`, since its MySQL migrator sends one statement per breakpoint.`),cf()(),Aa(724,`h4`,40)(725,`span`),bT(726,`Register the outbox`),cf()(),Aa(727,`p`),bT(728,`Register `),Aa(729,`code`),bT(730,`OutboxModule`),cf(),bT(731,` in the root module, next to `),Aa(732,`code`),bT(733,`DrizzleModule`),cf(),bT(734,`, which registers the Drizzle database, and with the store from `),Aa(735,`a`,31),bT(736,`Keep messages in your database`),cf(),bT(737,`. The feature modules it imports are built in the next steps:`),cf(),Aa(738,`app-copy-button`,36)(739,`span`,37),bT(740),LT(741,`extension`),Wa(742,`app-tabs`,null,7),cf(),Aa(744,`pre`)(745,`code`,38),bT(746,`
import { Module } from '@nestjs/common';
import { DrizzleModule, getDrizzleToken } from '@nestjs/drizzle';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientProxyTransport, OutboxModule, OutboxStorage } from '@nestjs/outbox';
import { fromDrizzle, PostgresOutboxStore } from '@nestjs/outbox/postgres';
import { drizzle } from 'drizzle-orm/node-postgres';
import type { Database } from './database/drizzle.js';
import * as schema from './database/schema.js';
import { InventoryModule } from './inventory/inventory.module.js';
import { NotificationsModule } from './notifications/notifications.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { OutboxAdminModule } from './outbox-admin/outbox-admin.module.js';

export const ANALYTICS_SERVICE = 'ANALYTICS_SERVICE';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      // A pg pool on DATABASE_URL, closed in onApplicationShutdown(), after the relay drained.
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL!, schema }),
    }),
    OutboxModule.forRootAsync({
      imports: [
        ClientsModule.registerAsync([
          {
            name: ANALYTICS_SERVICE,
            useFactory: () => ({
              transport: Transport.TCP,
              options: {
                host: process.env.ANALYTICS_HOST ?? '127.0.0.1',
                port: Number(process.env.ANALYTICS_PORT ?? 4001),
              },
            }),
          },
        ]),
      ],
      transports: { analytics: ClientProxyTransport(ANALYTICS_SERVICE) },
      useFactory: () => ({
        // Each message goes to exactly one transport; \`local\` runs @OnOutboxMessage() handlers.
        route: (message) => (message.topic.startsWith('analytics.') ? 'analytics' : 'local'),
        relay: {
          enabled: process.env.OUTBOX_RELAY !== 'off',
          pollInterval: '1s',
          lease: '30s',
          publishTimeout: '10s',
        },
        retry: {
          attempts: 10,
          backoff: { delay: '1s', maxDelay: '1m' },
        },
      }),
    }),
    OrdersModule,
    NotificationsModule,
    InventoryModule,
    OutboxAdminModule,
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
`),cf()()(),Aa(747,`p`)(748,`code`),bT(749,`ClientProxyTransport(ANALYTICS_SERVICE)`),cf(),bT(750,` is a class that Nest instantiates inside `),Aa(751,`code`),bT(752,`OutboxModule`),cf(),bT(753,`, so `),Aa(754,`code`),bT(755,`transports`),cf(),bT(756,` sits next to `),Aa(757,`code`),bT(758,`useFactory`),cf(),bT(759,`, where classes go. The factory runs when the application starts and returns the rest of the options:`),cf(),Aa(760,`ul`)(761,`li`)(762,`code`),bT(763,`transports`),cf(),bT(764,` and `),Aa(765,`code`),bT(766,`route`),cf(),bT(767,`: where each message is published. The `),Aa(768,`code`),bT(769,`local`),cf(),bT(770,` transport is built in and runs `),Aa(771,`code`),bT(772,`@OnOutboxMessage()`),cf(),bT(773,` handlers in this process (`),Aa(774,`a`,41),bT(775,`Handle order.placed in-process`),cf(),bT(776,`). `),Aa(777,`code`),bT(778,`ClientProxyTransport(ANALYTICS_SERVICE)`),cf(),bT(779,` publishes through the TCP client that `),Aa(780,`code`),bT(781,`ClientsModule`),cf(),bT(782,` registers under that name, which is why that module is in `),Aa(783,`code`),bT(784,`imports`),cf(),bT(785,` (`),Aa(786,`a`,32),bT(787,`Publish to the analytics microservice`),cf(),bT(788,`). `),Aa(789,`code`),bT(790,`route`),cf(),bT(791,` picks exactly one transport per message.`),cf(),Aa(792,`li`)(793,`code`),bT(794,`relay`),cf(),bT(795,`: the background publisher. It polls every `),Aa(796,`code`),bT(797,`pollInterval`),cf(),bT(798,`, leases what it claims for `),Aa(799,`code`),bT(800,`lease`),cf(),bT(801,`, and gives up on a single publish after `),Aa(802,`code`),bT(803,`publishTimeout`),cf(),bT(804,`. Setting `),Aa(805,`code`),bT(806,`OUTBOX_RELAY=off`),cf(),bT(807,` turns it off in API-only instances (`),Aa(808,`a`,42),bT(809,`Run several instances`),cf(),bT(810,`).`),cf(),Aa(811,`li`)(812,`code`),bT(813,`retry`),cf(),bT(814,`: 10 attempts, with exponential backoff that starts at 1 second and is capped at 1 minute (`),Aa(815,`a`,43),bT(816,`Retries and the dead-letter queue`),cf(),bT(817,`).`),cf()(),Aa(818,`blockquote`,44)(819,`strong`),bT(820,`Hint`),cf(),bT(821,` The tutorial reads `),Aa(822,`code`),bT(823,`process.env`),cf(),bT(824,` directly, to stay short. In an application, load the environment through `),Aa(825,`a`,45)(826,`code`),bT(827,`@nestjs/config`),cf()(),bT(828,` with a validation schema, so a missing `),Aa(829,`code`),bT(830,`DATABASE_URL`),cf(),bT(831,` stops the application at startup, and read the values from `),Aa(832,`code`),bT(833,`ConfigService`),cf(),bT(834,` in the factories.
`),cf(),Aa(835,`p`),bT(836,`Durations are milliseconds or strings such as `),Aa(837,`code`),bT(838,`'30s'`),cf(),bT(839,` and `),Aa(840,`code`),bT(841,`'1m'`),cf(),bT(842,`. `),Aa(843,`code`),bT(844,`OutboxModule`),cf(),bT(845,` is global: `),Aa(846,`code`),bT(847,`Outbox`),cf(),bT(848,`, `),Aa(849,`code`),bT(850,`OutboxStorage`),cf(),bT(851,`, `),Aa(852,`code`),bT(853,`OutboxRelay`),cf(),bT(854,`, `),Aa(855,`code`),bT(856,`OutboxEvents`),cf(),bT(857,`, `),Aa(858,`code`),bT(859,`OutboxDeadLetters`),cf(),bT(860,` and `),Aa(861,`code`),bT(862,`OutboxInbox`),cf(),bT(863,` can be injected anywhere in the application.`),cf(),Aa(864,`h4`,46)(865,`span`),bT(866,`Save the order and its messages in one transaction`),cf()(),Aa(867,`p`),bT(868,`This is the order model:`),cf(),Aa(869,`app-copy-button`,36)(870,`span`,37),bT(871),LT(872,`extension`),Wa(873,`app-tabs`,null,8),cf(),Aa(875,`pre`)(876,`code`,38),bT(877,`
export interface OrderItem {
  productId: string;
  quantity: number;
  /** Unit price in cents, copied from the catalog when the order is placed. */
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  /** In cents. */
  total: number;
  status: 'placed' | 'cancelled';
}

export class PlaceOrderDto {
  userId: string;
  items: { productId: string; quantity: number }[];
}
`),cf()()(),Aa(878,`p`)(879,`code`),bT(880,`OrdersService.placeOrder()`),cf(),bT(881,` opens a Drizzle transaction, prices the items, inserts the order and adds the messages, all through the same `),Aa(882,`code`),bT(883,`tx`),cf(),bT(884,`:`),cf(),Aa(885,`app-copy-button`,36)(886,`span`,37),bT(887),LT(888,`extension`),Wa(889,`app-tabs`,null,9),cf(),Aa(891,`pre`)(892,`code`,38),bT(893,`
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { Outbox } from '@nestjs/outbox';
import type { Database, Transaction } from '../database/drizzle.js';
import { orders, products } from '../database/schema.js';
import type { Order, PlaceOrderDto } from './order.js';

@Injectable()
export class OrdersService {
  constructor(
    @InjectDrizzle() private readonly db: Database,
    private readonly outbox: Outbox<Transaction>,
  ) {}

  async placeOrder({ userId, items }: PlaceOrderDto): Promise<Order> {
    if (!items?.length) {
      throw new BadRequestException('An order needs at least one item');
    }

    const order = await this.db.transaction(async (tx) => {
      // ... price the items through tx (an unknown product throws) and build the order
      await tx.insert(orders).values(order);

      // Drizzle's tx: the messages commit or roll back with the order.
      await this.outbox.add(tx, [
        { topic: 'order.placed', payload: order },
        { topic: 'analytics.order.placed', key: order.id, payload: order },
      ]);
      return order;
    });

    this.outbox.notify(); // publish now instead of at the next poll
    return order;
  }
}
`),cf()()(),Aa(894,`p`)(895,`code`),bT(896,`outbox.add()`),cf(),bT(897,` takes the transaction handle first, then the message or an array of messages. With Drizzle, the handle is the `),Aa(898,`code`),bT(899,`tx`),cf(),bT(900,` that `),Aa(901,`code`),bT(902,`db.transaction()`),cf(),bT(903,` passes its callback, whose type the service gives the outbox: `),Aa(904,`code`),bT(905,`Outbox<Transaction>`),cf(),bT(906,`. The store inserts them through that `),Aa(907,`code`),bT(908,`tx`),cf(),bT(909,`, so the messages commit with the order, or roll back with it. The store is asynchronous, so await `),Aa(910,`code`),bT(911,`add()`),cf(),bT(912,` like any other query. Every API in the package that joins your transaction takes the handle as its first argument.`),cf(),Aa(913,`p`),bT(914,`A few details:`),cf(),Aa(915,`ul`)(916,`li`)(917,`strong`),bT(918,`One message per destination.`),cf(),bT(919,` Each message goes to exactly one transport. The same event goes to the in-process handlers and to the analytics service, so the service adds two messages, `),Aa(920,`code`),bT(921,`order.placed`),cf(),bT(922,` and `),Aa(923,`code`),bT(924,`analytics.order.placed`),cf(),bT(925,`, in the same transaction.`),cf(),Aa(926,`li`)(927,`strong`),bT(928,`Payloads are snapshots.`),cf(),Aa(929,`code`),bT(930,`add()`),cf(),bT(931,` serializes the payload right away, so later changes to the `),Aa(932,`code`),bT(933,`order`),cf(),bT(934,` object aren't published.`),cf(),Aa(935,`li`)(936,`strong`),bT(937,`Ids.`),cf(),bT(938,` Every message gets a time-ordered UUIDv7 `),Aa(939,`code`),bT(940,`id`),cf(),bT(941,`. Consumers deduplicate by it.`),cf(),Aa(942,`li`)(943,`strong`)(944,`code`),bT(945,`notify()`),cf(),bT(946,`.`),cf(),bT(947,` Nothing is published inside the transaction. After the commit, `),Aa(948,`code`),bT(949,`notify()`),cf(),bT(950,` wakes the relay. Without it, the message goes out at the next poll, up to `),Aa(951,`code`),bT(952,`pollInterval`),cf(),bT(953,` later.`),cf()(),Aa(954,`p`),bT(955,`If anything throws inside the transaction, the order and its messages roll back together, and the relay never sees them. That includes an unknown product, a failed insert, and anything that fails after `),Aa(956,`code`),bT(957,`add()`),cf(),bT(958,`. The `),Aa(959,`a`,47),bT(960,`Testing`),cf(),bT(961,` section proves it by failing the transaction after the messages were written.`),cf(),Aa(962,`p`),bT(963,`Pass the transaction, never the database: `),Aa(964,`code`),bT(965,`outbox.add(this.db, message)`),cf(),bT(966,` would write the message on its own, in autocommit mode, which is exactly the dual write you're removing. The store refuses it with `),Aa(967,`code`),bT(968,`OutboxTransactionRequiredError`),cf(),bT(969,`, and so does `),Aa(970,`code`),bT(971,`add()`),cf(),bT(972,` itself when it gets no handle at all.`),cf(),Aa(973,`p`),bT(974,`Expose the service over HTTP:`),cf(),Aa(975,`app-copy-button`,36)(976,`span`,37),bT(977),LT(978,`extension`),Wa(979,`app-tabs`,null,10),cf(),Aa(981,`pre`)(982,`code`,38),bT(983,`
import { Body, Controller, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { PlaceOrderDto } from './order.js';
import { OrdersService } from './orders.service.js';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  place(@Body() dto: PlaceOrderDto) {
    return this.ordersService.placeOrder(dto);
  }

  @Post(':id/cancel')
  @HttpCode(HttpStatus.OK)
  cancel(@Param('id') id: string) {
    return this.ordersService.cancelOrder(id);
  }
}
`),cf()()(),Aa(984,`h4`,48)(985,`span`),bT(986,`Handle order.placed in-process`),cf()(),Aa(987,`p`),bT(988,`The confirmation email is a handler for `),Aa(989,`code`),bT(990,`order.placed`),cf(),bT(991,`. The mailer is a stand-in for your email provider's SDK:`),cf(),Aa(992,`app-copy-button`,36)(993,`span`,37),bT(994),LT(995,`extension`),Wa(996,`app-tabs`,null,11),cf(),Aa(998,`pre`)(999,`code`,38),bT(1e3,`
import { Injectable, Logger } from '@nestjs/common';
import type { Order } from '../orders/order.js';

/** Stand-in for your email provider's SDK. */
@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);

  async sendOrderConfirmation(order: Order): Promise<void> {
    this.logger.log(\`Order confirmation for \${order.id} sent to \${order.userId}\`);
  }
}
`),cf()()(),Aa(1001,`app-copy-button`,36)(1002,`span`,37),bT(1003),LT(1004,`extension`),Wa(1005,`app-tabs`,null,12),cf(),Aa(1007,`pre`)(1008,`code`,38),bT(1009,`
import { Injectable } from '@nestjs/common';
import { OnOutboxMessage } from '@nestjs/outbox';
import type { Order } from '../orders/order.js';
import { MailerService } from './mailer.service.js';

@Injectable()
export class OrderEmailsHandler {
  constructor(private readonly mailerService: MailerService) {}

  // The consumer's inbox skips messages it has already handled.
  @OnOutboxMessage('order.placed', { consumer: 'order-confirmation-email' })
  async sendConfirmation(order: Order) {
    await this.mailerService.sendOrderConfirmation(order);
  }
}
`),cf()()(),Aa(1010,`p`)(1011,`code`),bT(1012,`@OnOutboxMessage()`),cf(),bT(1013,` handlers are discovered on providers, so register `),Aa(1014,`code`),bT(1015,`MailerService`),cf(),bT(1016,` and `),Aa(1017,`code`),bT(1018,`OrderEmailsHandler`),cf(),bT(1019,` as providers of a `),Aa(1020,`code`),bT(1021,`NotificationsModule`),cf(),bT(1022,`. They must be singletons: a handler on a request-scoped provider fails at startup. The handler gets the payload, here the order, and a context as its second argument. The context's `),Aa(1023,`code`),bT(1024,`message`),cf(),bT(1025,` holds the message's `),Aa(1026,`code`),bT(1027,`id`),cf(),bT(1028,`, `),Aa(1029,`code`),bT(1030,`topic`),cf(),bT(1031,`, `),Aa(1032,`code`),bT(1033,`key`),cf(),bT(1034,` and `),Aa(1035,`code`),bT(1036,`headers`),cf(),bT(1037,`.`),cf(),Aa(1038,`p`),bT(1039,`Every handler has an inbox, named by `),Aa(1040,`code`),bT(1041,`consumer`),cf(),bT(1042,`. Before calling the handler, the local transport checks whether the `),Aa(1043,`code`),bT(1044,`order-confirmation-email`),cf(),bT(1045,` consumer has already processed this message id. After the handler succeeds, it records the id. `),Aa(1046,`code`),bT(1047,`consumer`),cf(),bT(1048,` is required, and it must stay stable: a new name makes every past message look new.`),cf(),Aa(1049,`p`),bT(1050,`The inbox has a gap: if the process dies after the email is sent but before the id is recorded, the email is sent again on redelivery. That's acceptable for an email. It isn't for a stock reservation, which lives in the same database as the inbox. The reservation handler closes the gap by recording the id inside its own transaction:`),cf(),Aa(1051,`app-copy-button`,36)(1052,`span`,37),bT(1053),LT(1054,`extension`),Wa(1055,`app-tabs`,null,13),cf(),Aa(1057,`pre`)(1058,`code`,38),bT(1059,`
import { Injectable, Logger } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { NonRetryableMessageError, OnOutboxMessage, type OutboxHandlerContext } from '@nestjs/outbox';
import { and, eq, gte, sql } from 'drizzle-orm';
import type { Database, Transaction } from '../database/drizzle.js';
import { products } from '../database/schema.js';
import type { Order } from '../orders/order.js';

@Injectable()
export class StockReservationHandler {
  private readonly logger = new Logger(StockReservationHandler.name);

  constructor(@InjectDrizzle() private readonly db: Database) {}

  @OnOutboxMessage('order.placed', { consumer: 'stock-reservation' })
  async reserve(order: Order, ctx: OutboxHandlerContext<Transaction>) {
    await this.db.transaction(async (tx) => {
      // Records the message id through tx, then runs the callback only if this consumer
      // hasn't processed it yet. Await it: the record commits with the reservation.
      await ctx.processInTransaction(tx, async () => {
        for (const { productId, quantity } of order.items) {
          const reserved = await tx
            .update(products)
            .set({ inStock: sql\`\${products.inStock} - \${quantity}\`, reserved: sql\`\${products.reserved} + \${quantity}\` })
            .where(and(eq(products.id, productId), gte(products.inStock, quantity)))
            .returning({ id: products.id });
          if (reserved.length === 0) {
            // Retrying won't create stock: dead-letter it now and let a human decide.
            throw new NonRetryableMessageError(\`Not enough stock for "\${productId}" (order \${order.id})\`);
          }
        }
        this.logger.log(\`Reserved stock for order \${order.id}\`);
      });
    });
  }
}
`),cf()()(),Aa(1060,`p`)(1061,`code`),bT(1062,`ctx.processInTransaction(tx, work)`),cf(),bT(1063,` inserts the inbox record through the handler's transaction, then calls `),Aa(1064,`code`),bT(1065,`work`),cf(),bT(1066,` only if this consumer hasn't processed the message yet. Otherwise it skips `),Aa(1067,`code`),bT(1068,`work`),cf(),bT(1069,` and returns a result whose `),Aa(1070,`code`),bT(1071,`duplicate`),cf(),bT(1072,` flag is `),Aa(1073,`code`),bT(1074,`true`),cf(),bT(1075,`. The record and the stock update commit together, so the reservation happens exactly once: a redelivery finds the record and skips the handler, and if `),Aa(1076,`code`),bT(1077,`work`),cf(),bT(1078,` throws, both roll back and the retry starts clean. Await it inside the transaction's callback, so the record is written before `),Aa(1079,`code`),bT(1080,`COMMIT`),cf(),bT(1081,`; the duplicate check happens inside the call, so a missing `),Aa(1082,`code`),bT(1083,`await`),cf(),bT(1084,` can't make it pass. Register the handler in an `),Aa(1085,`code`),bT(1086,`InventoryModule`),cf(),bT(1087,`.`),cf(),Aa(1088,`table`)(1089,`thead`)(1090,`tr`)(1091,`th`),bT(1092,`Handler`),cf(),Aa(1093,`th`),bT(1094,`Behavior`),cf(),Aa(1095,`th`),bT(1096,`Guarantee`),cf()()(),Aa(1097,`tbody`)(1098,`tr`)(1099,`td`),bT(1100,`Default`),cf(),Aa(1101,`td`),bT(1102,`Skips the handler if its inbox has the id, records the id after the handler succeeds`),cf(),Aa(1103,`td`),bT(1104,`Once, unless the process dies between the handler finishing and the record, or another instance delivers the same message at the same time`),cf()(),Aa(1105,`tr`)(1106,`td`),bT(1107,`Calls `),Aa(1108,`code`),bT(1109,`ctx.processInTransaction(tx, work)`),cf()(),Aa(1110,`td`),bT(1111,`Records the id in the handler's own transaction, with its writes`),cf(),Aa(1112,`td`),bT(1113,`Exactly once for writes to the same database`),cf()(),Aa(1114,`tr`)(1115,`td`)(1116,`code`),bT(1117,`inbox: false`),cf()(),Aa(1118,`td`),bT(1119,`Every delivery runs the handler`),cf(),Aa(1120,`td`),bT(1121,`At least once`),cf()()()(),Aa(1122,`p`),bT(1123,`Both handlers run concurrently for each `),Aa(1124,`code`),bT(1125,`order.placed`),cf(),bT(1126,` message. If one of them fails, the publish fails and the whole message is retried. On the retry, each handler that already succeeded is skipped by its inbox.`),cf(),Aa(1127,`p`),bT(1128,`The relay gives the handlers `),Aa(1129,`code`),bT(1130,`publishTimeout`),cf(),bT(1131,` (10 seconds here). If they take longer, the attempt counts as failed and the context's `),Aa(1132,`code`),bT(1133,`signal`),cf(),bT(1134,` aborts: pass `),Aa(1135,`code`),bT(1136,`ctx.signal`),cf(),bT(1137,` to the calls a handler makes, such as the `),Aa(1138,`code`),bT(1139,`signal`),cf(),bT(1140,` option of `),Aa(1141,`code`),bT(1142,`fetch()`),cf(),bT(1143,`, so they stop too. A handler that ignores it keeps running, and if the retry reaches the same process while it does, the inbox waits for it instead of running the handler a second time.`),cf(),Aa(1144,`h4`,49)(1145,`span`),bT(1146,`Publish to the analytics microservice`),cf()(),Aa(1147,`p`),bT(1148,`The API side is already wired. In `),Aa(1149,`code`),bT(1150,`AppModule`),cf(),bT(1151,`, `),Aa(1152,`code`),bT(1153,`ClientProxyTransport(ANALYTICS_SERVICE)`),cf(),bT(1154,` publishes through the `),Aa(1155,`code`),bT(1156,`ClientProxy`),cf(),bT(1157,` that `),Aa(1158,`code`),bT(1159,`ClientsModule`),cf(),bT(1160,` registered under that name, and `),Aa(1161,`code`),bT(1162,`route`),cf(),bT(1163,` sends every `),Aa(1164,`code`),bT(1165,`analytics.*`),cf(),bT(1166,` topic to it. The transport calls `),Aa(1167,`code`),bT(1168,`client.emit(topic, envelope)`),cf(),bT(1169,`, the same call you'd make without an outbox. The envelope has the message's `),Aa(1170,`code`),bT(1171,`id`),cf(),bT(1172,`, `),Aa(1173,`code`),bT(1174,`topic`),cf(),bT(1175,`, `),Aa(1176,`code`),bT(1177,`key`),cf(),bT(1178,`, `),Aa(1179,`code`),bT(1180,`headers`),cf(),bT(1181,`, `),Aa(1182,`code`),bT(1183,`createdAt`),cf(),bT(1184,` and `),Aa(1185,`code`),bT(1186,`payload`),cf(),bT(1187,`.`),cf(),Aa(1188,`p`),bT(1189,`Cancelling an order produces a second analytics event for the same order. Add a `),Aa(1190,`code`),bT(1191,`cancelOrder()`),cf(),bT(1192,` method to `),Aa(1193,`code`),bT(1194,`OrdersService`),cf(),bT(1195,`, and import `),Aa(1196,`code`),bT(1197,`NotFoundException`),cf(),bT(1198,` and `),Aa(1199,`code`),bT(1200,`ConflictException`),cf(),bT(1201,` from `),Aa(1202,`code`),bT(1203,`@nestjs/common`),cf(),bT(1204,`:`),cf(),Aa(1205,`app-copy-button`,36)(1206,`span`,37),bT(1207),LT(1208,`extension`),Wa(1209,`app-tabs`,null,14),cf(),Aa(1211,`pre`)(1212,`code`,38),bT(1213,`
async cancelOrder(id: string): Promise<Order> {
  const order = await this.db.transaction(async (tx) => {
    const [row] = await tx.select().from(orders).where(eq(orders.id, id)).for('update');
    if (!row) {
      throw new NotFoundException(\`Order \${id} not found\`);
    }
    if (row.status !== 'placed') {
      throw new ConflictException(\`Order \${id} is \${row.status}\`);
    }

    await tx.update(orders).set({ status: 'cancelled' }).where(eq(orders.id, id));
    const order: Order = { ...row, status: 'cancelled' };
    await this.outbox.add(tx, { topic: 'analytics.order.cancelled', key: order.id, payload: order });
    return order;
  });

  this.outbox.notify();
  return order;
}
`),cf()()(),Aa(1214,`p`),bT(1215,`The orders controller already routes `),Aa(1216,`code`),bT(1217,`POST /orders/:id/cancel`),cf(),bT(1218,` to it. The `),Aa(1219,`code`),bT(1220,`SELECT ... FOR UPDATE`),cf(),bT(1221,` locks the order's row, so two cancellations of the same order take turns, and the second one sees `),Aa(1222,`code`),bT(1223,`cancelled`),cf(),bT(1224,` and answers `),Aa(1225,`code`),bT(1226,`409`),cf(),bT(1227,`. Both analytics messages use the order id as their `),Aa(1228,`code`),bT(1229,`key`),cf(),bT(1230,`. Messages that share a key are published one at a time, in the order their transactions committed. While `),Aa(1231,`code`),bT(1232,`analytics.order.placed`),cf(),bT(1233,` is being retried, `),Aa(1234,`code`),bT(1235,`analytics.order.cancelled`),cf(),bT(1236,` waits behind it, so analytics doesn't see a cancellation before the order it cancels. Messages with other keys keep flowing. A key waits only as long as the retries last, though: once a message is dead-lettered (see the next section), the messages behind it go out.`),cf(),Aa(1237,`p`),bT(1238,`The `),Aa(1239,`code`),bT(1240,`order.placed`),cf(),bT(1241,` message for the in-process handlers has no key, on purpose. A key is shared by every message that carries it, whatever the topic or transport. If the email message used the order id as well, a mail outage would hold back the analytics events for that order.`),cf(),Aa(1242,`p`),bT(1243,`The analytics service is a separate Nest application, and like any service it owns its data: a PostgreSQL database of its own, with its own schema and migrations. It never reads the order API's tables. It records each order event in a table of its own, again the example's data:`),cf(),Aa(1244,`p`)(1245,`code`),bT(1246,`order_events`),cf(),bT(1247,` has one row per order event, and the revenue is the sum of its `),Aa(1248,`code`),bT(1249,`amount`),cf(),bT(1250,` column:`),cf(),Aa(1251,`table`)(1252,`thead`)(1253,`tr`)(1254,`th`),bT(1255,`Column`),cf(),Aa(1256,`th`),bT(1257,`Type`),cf(),Aa(1258,`th`),bT(1259,`Notes`),cf()()(),Aa(1260,`tbody`)(1261,`tr`)(1262,`td`)(1263,`code`),bT(1264,`seq`),cf()(),Aa(1265,`td`)(1266,`code`),bT(1267,`bigint`),cf(),bT(1268,`, generated identity`),cf(),Aa(1269,`td`),bT(1270,`Primary key, in arrival order`),cf()(),Aa(1271,`tr`)(1272,`td`)(1273,`code`),bT(1274,`order_id`),cf()(),Aa(1275,`td`)(1276,`code`),bT(1277,`text`),cf()(),Aa(1278,`td`),bT(1279,`Indexed`),cf()(),Aa(1280,`tr`)(1281,`td`)(1282,`code`),bT(1283,`event`),cf()(),Aa(1284,`td`)(1285,`code`),bT(1286,`text`),cf()(),Aa(1287,`td`)(1288,`code`),bT(1289,`placed`),cf(),bT(1290,` or `),Aa(1291,`code`),bT(1292,`cancelled`),cf()()(),Aa(1293,`tr`)(1294,`td`)(1295,`code`),bT(1296,`amount`),cf()(),Aa(1297,`td`)(1298,`code`),bT(1299,`integer`),cf()(),Aa(1300,`td`),bT(1301,`The change to revenue, in cents: the order's total when it's placed, minus it when it's cancelled`),cf()(),Aa(1302,`tr`)(1303,`td`)(1304,`code`),bT(1305,`recorded_at`),cf()(),Aa(1306,`td`)(1307,`code`),bT(1308,`timestamptz`),cf()(),Aa(1309,`td`),bT(1310,`Defaults to `),Aa(1311,`code`),bT(1312,`now()`),cf()()()()(),Aa(1313,`p`),bT(1314,`Being an application of its own, it has its own root module, `),Aa(1315,`code`),bT(1316,`AppModule`),cf(),bT(1317,`, which registers `),Aa(1318,`code`),bT(1319,`OutboxModule`),cf(),bT(1320,` and the store once, as the order API's does. The service only consumes, so the relay is turned off, and the store runs on the service's own database. `),Aa(1321,`code`),bT(1322,`OutboxInbox`),cf(),bT(1323,` keeps the service's inbox there, next to `),Aa(1324,`code`),bT(1325,`order_events`),cf(),bT(1326,`, so an event and the record that it was processed commit together. The store's tables for messages stay empty, and with the relay off, nothing polls them:`),cf(),Aa(1327,`app-copy-button`,36)(1328,`span`,37),bT(1329),LT(1330,`extension`),Wa(1331,`app-tabs`,null,15),cf(),Aa(1333,`pre`)(1334,`code`,38),bT(1335,`
import { Module } from '@nestjs/common';
import { DrizzleModule, getDrizzleToken } from '@nestjs/drizzle';
import { OutboxModule, OutboxStorage } from '@nestjs/outbox';
import { fromDrizzle, PostgresOutboxStore } from '@nestjs/outbox/postgres';
import { drizzle } from 'drizzle-orm/node-postgres';
import { AnalyticsController } from './analytics.controller.js';
import type { Database } from './database/drizzle.js';
import * as schema from './database/schema.js';
import { OrderStatsService } from './order-stats.service.js';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      // This service's own database, not the order API's.
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL!, schema }),
    }),
    // Consumer only: no relay runs.
    OutboxModule.forRoot({ relay: { enabled: false } }),
  ],
  controllers: [AnalyticsController],
  providers: [
    {
      // This service's inbox, in its own database (the store's tables for messages stay empty)
      provide: PostgresOutboxStore,
      inject: [getDrizzleToken(), OutboxStorage],
      useFactory: (db: Database, outboxStorage: OutboxStorage) =>
        new PostgresOutboxStore({ executor: fromDrizzle(db) }, outboxStorage),
    },
    OrderStatsService,
  ],
})
export class AppModule {}
`),cf()()(),Aa(1336,`p`)(1337,`code`),bT(1338,`OrderStatsService`),cf(),bT(1339,` records an event and returns the revenue so far. It opens a transaction and calls `),Aa(1340,`code`),bT(1341,`inbox.processInTransaction(tx, 'analytics', messageId, work)`),cf(),bT(1342,`: the inbox record and the `),Aa(1343,`code`),bT(1344,`order_events`),cf(),bT(1345,` row commit together, so a redelivered event changes nothing, even if the service crashes halfway:`),cf(),Aa(1346,`app-copy-button`,36)(1347,`span`,37),bT(1348),LT(1349,`extension`),Wa(1350,`app-tabs`,null,16),cf(),Aa(1352,`pre`)(1353,`code`,38),bT(1354,`
import { Injectable, Logger } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { OutboxInbox } from '@nestjs/outbox';
import type { Database, Transaction } from './database/drizzle.js';
import { orderEvents } from './database/schema.js';

/** The fields of the order API's \`Order\` that this service reads. */
export interface OrderSnapshot {
  id: string;
  total: number;
}

export type OrderEvent = 'placed' | 'cancelled';

@Injectable()
export class OrderStatsService {
  private readonly logger = new Logger(OrderStatsService.name);

  constructor(
    @InjectDrizzle() private readonly db: Database,
    private readonly outboxInbox: OutboxInbox,
  ) {}

  /**
   * Records an order event once per message id. The inbox record and the event commit in
   * one transaction, so a redelivered message changes nothing. \`false\` for a duplicate.
   */
  async record(messageId: string, event: OrderEvent, order: OrderSnapshot): Promise<boolean> {
    const outcome = await this.db.transaction(async (tx) =>
      // Records the message id through tx, then runs the callback only if it is new here.
      this.outboxInbox.processInTransaction(tx, 'analytics', messageId, async () => {
        const amount = event === 'placed' ? order.total : -order.total;
        await tx.insert(orderEvents).values({ orderId: order.id, event, amount });
        return this.revenue(tx);
      }),
    );
    if (outcome.duplicate) {
      return false;
    }
    this.logger.log(\`Order \${order.id} \${event}, revenue is now \${outcome.result}\`);
    return true;
  }

  /** Total revenue in cents. */
  async revenue(db: Database | Transaction = this.db): Promise<number> {
    // ... the sum of amount in order_events, read through db
  }

  // ...
}
`),cf()()(),Aa(1355,`app-copy-button`,36)(1356,`span`,37),bT(1357),LT(1358,`extension`),Wa(1359,`app-tabs`,null,17),cf(),Aa(1361,`pre`)(1362,`code`,38),bT(1363,`
import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import type { OutboxEnvelope } from '@nestjs/outbox';
import { OrderStatsService, type OrderEvent, type OrderSnapshot } from './order-stats.service.js';

@Controller()
export class AnalyticsController {
  private readonly logger = new Logger(AnalyticsController.name);
  /** The last event handled for each key: one order's events run one at a time. */
  private readonly queues = new Map<string, Promise<void>>();

  constructor(private readonly orderStatsService: OrderStatsService) {}

  @EventPattern('analytics.order.placed')
  onPlaced(@Payload() envelope: OutboxEnvelope<OrderSnapshot>) {
    return this.apply('placed', envelope);
  }

  @EventPattern('analytics.order.cancelled')
  onCancelled(@Payload() envelope: OutboxEnvelope<OrderSnapshot>) {
    return this.apply('cancelled', envelope);
  }

  private apply(event: OrderEvent, envelope: OutboxEnvelope<OrderSnapshot>) {
    // Events arrive in the order the relay published them, but handlers are asynchronous:
    // without a queue, a cancellation could commit before the placement it follows.
    return this.inOrder(envelope.key ?? envelope.id, async () => {
      // The envelope id is the outbox message id: stable across redeliveries.
      const recorded = await this.orderStatsService.record(envelope.id, event, envelope.payload);
      if (!recorded) {
        this.logger.warn(\`Skipped duplicate \${envelope.topic} \${envelope.id}\`);
      }
    });
  }

  private inOrder(key: string, work: () => Promise<void>): Promise<void> {
    const next = (this.queues.get(key) ?? Promise.resolve()).then(work, work);
    this.queues.set(key, next);
    const forget = () => {
      if (this.queues.get(key) === next) {
        this.queues.delete(key);
      }
    };
    next.then(forget, forget);
    return next;
  }
}
`),cf()()(),Aa(1364,`p`),bT(1365,`The events for an order arrive in the order the relay published them, but the handlers are asynchronous: two of them can run at once, and a cancellation could commit before the placement it follows. The controller runs one key's events one at a time, in arrival order, and different orders in parallel.`),cf(),Aa(1366,`app-copy-button`,36)(1367,`span`,37),bT(1368),LT(1369,`extension`),Wa(1370,`app-tabs`,null,18),cf(),Aa(1372,`pre`)(1373,`code`,38),bT(1374,`
import { NestFactory } from '@nestjs/core';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: { host: '127.0.0.1', port: Number(process.env.PORT ?? 4001) },
  });
  app.enableShutdownHooks();
  await app.listen();
}
await bootstrap();
`),cf()()(),Aa(1375,`p`)(1376,`code`),bT(1377,`inbox.processInTransaction()`),cf(),bT(1378,` is what an `),Aa(1379,`code`),bT(1380,`@OnOutboxMessage()`),cf(),bT(1381,` handler gets with `),Aa(1382,`code`),bT(1383,`ctx.processInTransaction()`),cf(),bT(1384,`: exactly once for writes to the consumer's own database. When a consumer's side effect is outside its database, such as an email, use `),Aa(1385,`code`),bT(1386,`inbox.process(consumer, id, work)`),cf(),bT(1387,` instead: it skips `),Aa(1388,`code`),bT(1389,`work`),cf(),bT(1390,` if the consumer has seen this id, and records it after `),Aa(1391,`code`),bT(1392,`work`),cf(),bT(1393,` succeeds.`),cf(),Aa(1394,`blockquote`,35)(1395,`strong`),bT(1396,`Warning`),cf(),bT(1397,` Over TCP, "published" only means the bytes left the order API. If the analytics service crashes after receiving an event but before processing it, the event is lost. For events you can't lose, use a transport whose broker acknowledges receipt: Kafka, RabbitMQ with publisher confirms, or NATS JetStream. `),Aa(1398,`code`),bT(1399,`ClientProxyTransport`),cf(),bT(1400,` accepts a `),Aa(1401,`code`),bT(1402,`toPacket`),cf(),bT(1403,` option that maps a message to that transport's record, with its own key and headers.
`),cf(),Aa(1404,`h4`,50)(1405,`span`),bT(1406,`Retries and the dead-letter queue`),cf()(),Aa(1407,`p`),bT(1408,`When a publish fails, because a handler threw, the TCP connection was refused, or the publish took longer than `),Aa(1409,`code`),bT(1410,`publishTimeout`),cf(),bT(1411,`, the relay reschedules the message:`),cf(),Aa(1412,`ul`)(1413,`li`),bT(1414,`Each retry waits longer: 1 s, 2 s, 4 s and so on, capped at `),Aa(1415,`code`),bT(1416,`maxDelay`),cf(),bT(1417,` (1 minute here). Each wait is randomized between half and the full value, so retries don't arrive in lockstep.`),cf(),Aa(1418,`li`),bT(1419,`Each failure is logged as a warning, with the attempt number and the wait before the next one.`),cf(),Aa(1420,`li`),bT(1421,`After `),Aa(1422,`code`),bT(1423,`retry.attempts`),cf(),bT(1424,` failures (10 here), the message moves to the dead-letter table with the reason `),Aa(1425,`code`),bT(1426,`exhausted`),cf(),bT(1427,` and the error of every attempt.`),cf(),Aa(1428,`li`),bT(1429,`A `),Aa(1430,`code`),bT(1431,`NonRetryableMessageError`),cf(),bT(1432,` skips the retries. The message is dead-lettered at once with the reason `),Aa(1433,`code`),bT(1434,`rejected`),cf(),bT(1435,`. So is any error for which the optional `),Aa(1436,`code`),bT(1437,`retry.retryIf(error, attempt, message)`),cf(),bT(1438,` function returns `),Aa(1439,`code`),bT(1440,`false`),cf(),bT(1441,`. When several handlers fail, the message is rejected only if all of them threw `),Aa(1442,`code`),bT(1443,`NonRetryableMessageError`),cf(),bT(1444,`. Otherwise it's retried, the handlers that succeeded are skipped, and it's rejected once only the permanent failures remain.`),cf(),Aa(1445,`li`),bT(1446,`A topic with no `),Aa(1447,`code`),bT(1448,`@OnOutboxMessage()`),cf(),bT(1449,` handler is retried, not dead-lettered. During a rolling deploy, an old instance's relay can see a topic that only the new version handles.`),cf(),Aa(1450,`li`),bT(1451,`A dead-lettered message no longer holds back its key: the later messages with that key are published without it. Size `),Aa(1452,`code`),bT(1453,`retry`),cf(),bT(1454,` so that the outages you expect don't use it up.`),cf()(),Aa(1455,`p`),bT(1456,`The stock handler throws `),Aa(1457,`code`),bT(1458,`NonRetryableMessageError`),cf(),bT(1459,` when there isn't enough stock. Retrying won't create stock, so the message goes straight to the dead-letter table, where a person can decide what to do.`),cf(),Aa(1460,`p`)(1461,`code`),bT(1462,`OutboxDeadLetters`),cf(),bT(1463,` lists, inspects, requeues and purges dead letters. The package doesn't mount any HTTP routes, so expose it behind your own guard. The same controller serves the outbox's stats, from the `),Aa(1464,`code`),bT(1465,`OutboxMetrics`),cf(),bT(1466,` service built in the next section:`),cf(),Aa(1467,`app-copy-button`,36)(1468,`span`,37),bT(1469),LT(1470,`extension`),Wa(1471,`app-tabs`,null,19),cf(),Aa(1473,`pre`)(1474,`code`,38),bT(1475,`
import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OutboxDeadLetters } from '@nestjs/outbox';
import { AdminGuard } from './admin.guard.js';
import { OutboxMetrics } from './outbox-metrics.service.js';

@Controller('admin/outbox')
@UseGuards(AdminGuard)
export class OutboxAdminController {
  constructor(
    private readonly outboxDeadLetters: OutboxDeadLetters,
    private readonly outboxMetrics: OutboxMetrics,
  ) {}

  @Get('dead-letters')
  list(@Query('topic') topic?: string) {
    return this.outboxDeadLetters.list({ topic });
  }

  @Post('dead-letters/:id/requeue')
  @HttpCode(HttpStatus.OK)
  async requeue(@Param('id') id: string) {
    return { requeued: await this.outboxDeadLetters.requeue(id) };
  }

  @Delete('dead-letters/:id')
  async purge(@Param('id') id: string) {
    return { purged: await this.outboxDeadLetters.purge(id) };
  }

  @Get('stats')
  stats() {
    return this.outboxMetrics.snapshot();
  }
}
`),cf()()(),Aa(1476,`app-copy-button`,36)(1477,`span`,37),bT(1478),LT(1479,`extension`),Wa(1480,`app-tabs`,null,20),cf(),Aa(1482,`pre`)(1483,`code`,38),bT(1484,`
import { Injectable, type CanActivate, type ExecutionContext } from '@nestjs/common';
import { createHash, timingSafeEqual } from 'node:crypto';

type HttpRequest = { headers: Record<string, string | string[] | undefined> };

/** Placeholder: protect these routes with your application's real authorization. */
@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<HttpRequest>();
    const token = process.env.ADMIN_TOKEN;
    const given = request.headers['x-admin-token'];
    return !!token && typeof given === 'string' && sameSecret(given, token);
  }
}

/** Compares in constant time, so response times don't give the token away. */
function sameSecret(given: string, expected: string): boolean {
  const digest = (value: string) => createHash('sha256').update(value).digest();
  return timingSafeEqual(digest(given), digest(expected));
}
`),cf()()(),Aa(1485,`blockquote`,44)(1486,`strong`),bT(1487,`Hint`),cf(),Aa(1488,`code`),bT(1489,`AdminGuard`),cf(),bT(1490,` is a placeholder. Dead letters contain full payloads, customer data included, so protect these routes with your application's real `),Aa(1491,`a`,51),bT(1492,`authorization`),cf(),bT(1493,`.
`),cf(),Aa(1494,`p`)(1495,`code`),bT(1496,`requeue()`),cf(),bT(1497,` moves a dead letter back to the outbox with a fresh retry budget and `),Aa(1498,`strong`),bT(1499,`the same id`),cf(),bT(1500,`. Consumers that already processed it skip it through their inbox. So after you restock, requeueing the out-of-stock order reserves the stock without sending a second confirmation email. `),Aa(1501,`code`),bT(1502,`requeue()`),cf(),bT(1503,` and `),Aa(1504,`code`),bT(1505,`purge()`),cf(),bT(1506,` also accept an array of ids, or a filter by `),Aa(1507,`code`),bT(1508,`topic`),cf(),bT(1509,`, `),Aa(1510,`code`),bT(1511,`key`),cf(),bT(1512,` or `),Aa(1513,`code`),bT(1514,`failedBefore`),cf(),bT(1515,`. They refuse an empty filter; pass `),Aa(1516,`code`),bT(1517,`all: true`),cf(),bT(1518,` to target every dead letter.`),cf(),Aa(1519,`h4`,52)(1520,`span`),bT(1521,`Run several instances`),cf()(),Aa(1522,`p`),bT(1523,`Every instance of the order API runs its relay against the same tables, on any number of hosts. The database decides who gets what:`),cf(),Aa(1524,`ul`)(1525,`li`)(1526,`strong`),bT(1527,`Claims.`),cf(),bT(1528,` A relay claims a batch of messages by writing a lease on them for `),Aa(1529,`code`),bT(1530,`lease`),cf(),bT(1531,` (30 s), with a random token for that claim. Claims take turns under the store's claim lock, and `),Aa(1532,`code`),bT(1533,`SKIP LOCKED`),cf(),bT(1534,` passes over rows another relay is writing, so two relays never get the same message. They publish their batches in parallel.`),cf(),Aa(1535,`li`)(1536,`strong`),bT(1537,`Fencing.`),cf(),bT(1538,` Every later write for a message (published, rescheduled, dead-lettered) must present the lease token, so a relay that stalled past its lease can't overwrite the work of the relay that took over.`),cf(),Aa(1539,`li`)(1540,`strong`),bT(1541,`Order across instances.`),cf(),bT(1542,` A key's messages go out in the order their transactions committed, whichever instance added them: `),Aa(1543,`code`),bT(1544,`add()`),cf(),bT(1545,` makes the transactions adding the same key take turns. Keep transactions that add keyed messages short.`),cf(),Aa(1546,`li`)(1547,`strong`),bT(1548,`Exactly-once reservations.`),cf(),bT(1549,` Two deliveries of the same message that run at the same time, on different instances, meet at the inbox's primary key: the second waits for the first transaction, then skips the handler if it committed.`),cf(),Aa(1550,`li`)(1551,`strong`),bT(1552,`Crashes.`),cf(),bT(1553,` If an instance dies while holding a lease, its messages are published by another instance once the lease expires. If it died after publishing but before recording that, the message is published a second time, and the consumers' inboxes drop the duplicate. Nothing is lost with the instance, because nothing lives on it: the messages are rows in the database.`),cf(),Aa(1554,`li`)(1555,`strong`),bT(1556,`Lease budget.`),cf(),bT(1557,` A relay never starts a publish with less than `),Aa(1558,`code`),bT(1559,`publishTimeout`),cf(),bT(1560,` (10 s) of lease left. It releases the rest of the batch instead. Keep `),Aa(1561,`code`),bT(1562,`publishTimeout`),cf(),bT(1563,` well below `),Aa(1564,`code`),bT(1565,`lease`),cf(),bT(1566,`.`),cf(),Aa(1567,`li`)(1568,`strong`),bT(1569,`Clocks.`),cf(),bT(1570,` Leases use the relay's clock, so keep the hosts' clocks synchronized with NTP, well within `),Aa(1571,`code`),bT(1572,`lease`),cf(),bT(1573,`.`),cf(),Aa(1574,`li`)(1575,`strong`),bT(1576,`API-only instances.`),cf(),bT(1577,` Start an instance with `),Aa(1578,`code`),bT(1579,`OUTBOX_RELAY=off`),cf(),bT(1580,` to make it produce messages without publishing them. `),Aa(1581,`code`),bT(1582,`notify()`),cf(),bT(1583,` wakes only the relay of the instance that added the message, so a relay instance picks the messages up within one `),Aa(1584,`code`),bT(1585,`pollInterval`),cf(),bT(1586,`.`),cf(),Aa(1587,`li`)(1588,`strong`),bT(1589,`Relay-only workers.`),cf(),bT(1590,` The reverse also works: a worker started with `),Aa(1591,`code`),bT(1592,`NestFactory.createApplicationContext(AppModule)`),cf(),bT(1593,` and no HTTP server publishes what the API instances add. The relay's poll timer keeps that process alive until a shutdown hook stops it.`),cf()(),Aa(1594,`p`),bT(1595,`Graceful shutdown needs shutdown hooks:`),cf(),Aa(1596,`app-copy-button`,36)(1597,`span`,37),bT(1598),LT(1599,`extension`),Wa(1600,`app-tabs`,null,21),cf(),Aa(1602,`pre`)(1603,`code`,38),bT(1604,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // On SIGTERM the relay stops claiming, finishes in-flight publishes and releases its leases.
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(1605,`p`),bT(1606,`On `),Aa(1607,`code`),bT(1608,`SIGTERM`),cf(),bT(1609,`, the relay stops claiming and waits for in-flight publishes to finish, each for at most `),Aa(1610,`code`),bT(1611,`publishTimeout`),cf(),bT(1612,`. It then releases the leases on messages it claimed but hasn't started, so another instance can take them at once instead of waiting out the lease. This happens in `),Aa(1613,`code`),bT(1614,`onModuleDestroy()`),cf(),bT(1615,`, before `),Aa(1616,`code`),bT(1617,`ClientsModule`),cf(),bT(1618,` closes the TCP client in `),Aa(1619,`code`),bT(1620,`onApplicationShutdown()`),cf(),bT(1621,`.`),cf(),Aa(1622,`p`),bT(1623,`To watch the outbox, subscribe to `),Aa(1624,`code`),bT(1625,`OutboxEvents`),cf(),bT(1626,` and read `),Aa(1627,`code`),bT(1628,`relay.stats()`),cf(),bT(1629,`:`),cf(),Aa(1630,`app-copy-button`,36)(1631,`span`,37),bT(1632),LT(1633,`extension`),Wa(1634,`app-tabs`,null,22),cf(),Aa(1636,`pre`)(1637,`code`,38),bT(1638,`
import { Injectable, type OnModuleInit } from '@nestjs/common';
import { OutboxEvents, OutboxRelay } from '@nestjs/outbox';

@Injectable()
export class OutboxMetrics implements OnModuleInit {
  readonly counters = { published: 0, retried: 0, deadLettered: 0, leaseLost: 0 };
  /** Time from add() to a successful publish, for the latest message. */
  lastPublishLagMs = 0;

  constructor(
    private readonly outboxEvents: OutboxEvents,
    private readonly outboxRelay: OutboxRelay,
  ) {}

  onModuleInit() {
    this.outboxEvents.events$.subscribe((event) => {
      switch (event.type) {
        case 'published':
          this.counters.published++;
          this.lastPublishLagMs = Date.now() - event.message.createdAt;
          break;
        case 'retry-scheduled':
          this.counters.retried++;
          break;
        case 'dead-lettered':
          this.counters.deadLettered++;
          break;
        case 'lease-lost':
          this.counters.leaseLost++;
          break;
      }
    });
  }

  async snapshot() {
    // pending, ready, leased, deadLetters, lagMs (how long the longest-waiting message has waited)...
    const stats = await this.outboxRelay.stats();
    return { ...stats, ...this.counters, lastPublishLagMs: this.lastPublishLagMs };
  }
}
`),cf()()(),Aa(1639,`p`)(1640,`code`),bT(1641,`relay.stats()`),cf(),bT(1642,` reports `),Aa(1643,`code`),bT(1644,`lagMs`),cf(),bT(1645,`, how long the longest-waiting message has waited. It grows while a downstream is down, which makes it the number to alert on, along with `),Aa(1646,`code`),bT(1647,`deadLetters`),cf(),bT(1648,`. A message scheduled with `),Aa(1649,`code`),bT(1650,`delay`),cf(),bT(1651,` doesn't count until it is due. The `),Aa(1652,`code`),bT(1653,`published`),cf(),bT(1654,` event carries the message, so `),Aa(1655,`code`),bT(1656,`Date.now() - message.createdAt`),cf(),bT(1657,` is the end-to-end publish lag. `),Aa(1658,`code`),bT(1659,`OutboxEvents`),cf(),bT(1660,` emits the four events the `),Aa(1661,`code`),bT(1662,`switch`),cf(),bT(1663,` counts. `),Aa(1664,`code`),bT(1665,`lease-lost`),cf(),bT(1666,` means another relay took a message over while this one was publishing it, so that message may reach its consumers twice. Register `),Aa(1667,`code`),bT(1668,`OutboxAdminController`),cf(),bT(1669,`, `),Aa(1670,`code`),bT(1671,`AdminGuard`),cf(),bT(1672,` and `),Aa(1673,`code`),bT(1674,`OutboxMetrics`),cf(),bT(1675,` in an `),Aa(1676,`code`),bT(1677,`OutboxAdminModule`),cf(),bT(1678,`.`),cf(),Aa(1679,`p`),bT(1680,`Each event is also published on a `),Aa(1681,`a`,53)(1682,`code`),bT(1683,`node:diagnostics_channel`),cf()(),bT(1684,` channel, `),Aa(1685,`code`),bT(1686,`nestjs:outbox:published`),cf(),bT(1687,` and so on. Tracing and metrics libraries can subscribe to those without any Nest code, and they see every Nest application in the process.`),cf(),Aa(1688,`p`),bT(1689,`Catch errors inside your subscribers. RxJS and `),Aa(1690,`code`),bT(1691,`diagnostics_channel`),cf(),bT(1692,` both rethrow a subscriber's error as an uncaught exception, which stops the process. The relay has already saved the message's outcome by then, so the message itself is safe.`),cf(),Aa(1693,`p`),bT(1694,`The example application runs this section against a PostgreSQL server: two relays sharing 20 orders, three instances (one of them API-only) placing and cancelling 12 orders with every message published once and each order's events in order, a transaction that waits for another instance's lock on the same key, an instance that crashes holding a lease, and a graceful shutdown.`),cf(),Aa(1695,`h4`,54)(1696,`span`),bT(1697,`Try it`),cf()(),Aa(1698,`p`),bT(1699,`Create the two databases, `),Aa(1700,`code`),bT(1701,`store`),cf(),bT(1702,` for the order API and `),Aa(1703,`code`),bT(1704,`analytics`),cf(),bT(1705,` for the analytics service, and apply each service's own migrations: the order API's create its tables and products from `),Aa(1706,`a`,55),bT(1707,`Prerequisites`),cf(),bT(1708,`, and the analytics service's create `),Aa(1709,`code`),bT(1710,`order_events`),cf(),bT(1711,`.`),cf(),Aa(1712,`p`),bT(1713,`Start the analytics service (TCP port 4001) on `),Aa(1714,`code`),bT(1715,`analytics`),cf(),bT(1716,`, and the order API (port 3000) on `),Aa(1717,`code`),bT(1718,`store`),cf(),bT(1719,`, with `),Aa(1720,`code`),bT(1721,`ADMIN_TOKEN=s3cret`),cf(),bT(1722,` in the API's environment. Each logs the store it registered, and the store creates its schema on the first start:`),cf(),Aa(1723,`pre`)(1724,`code`,33),bT(1725,`
[Nest] 52654  - 09/30/2026, 6:45:43 PM     LOG [OutboxModule] OutboxStorage: PostgresOutboxStore
[Nest] 52654  - 09/30/2026, 6:45:43 PM     LOG [OutboxModule] PostgresOutboxStore: migrated schema "nest_outbox" to version 1.
[Nest] 52743  - 09/30/2026, 6:45:59 PM     LOG [OutboxModule] OutboxStorage: PostgresOutboxStore
[Nest] 52743  - 09/30/2026, 6:46:00 PM     LOG [OutboxModule] PostgresOutboxStore: migrated schema "nest_outbox" to version 1.
`),cf()(),Aa(1726,`p`),bT(1727,`Place an order:`),cf(),Aa(1728,`pre`)(1729,`code`,33),bT(1730,`
$ curl -X POST localhost:3000/orders \\
    -H 'Content-Type: application/json' \\
    -d '{"userId":"user-42","items":[{"productId":"salmon-kibble-2kg","quantity":2}]}'
{"id":"07fafff6-9892-4298-aeef-dc2c3d5d6bf5","userId":"user-42","items":[{"productId":"salmon-kibble-2kg","quantity":2,"price":2499}],"total":4998,"status":"placed"}
`),cf()(),Aa(1731,`p`),bT(1732,`The API's log shows the two in-process handlers:`),cf(),Aa(1733,`pre`)(1734,`code`,33),bT(1735,`
[Nest] 52743  - 09/30/2026, 6:46:07 PM     LOG [MailerService] Order confirmation for 07fafff6-9892-4298-aeef-dc2c3d5d6bf5 sent to user-42
[Nest] 52743  - 09/30/2026, 6:46:07 PM     LOG [StockReservationHandler] Reserved stock for order 07fafff6-9892-4298-aeef-dc2c3d5d6bf5
`),cf()(),Aa(1736,`p`),bT(1737,`And the analytics service's log shows the TCP consumer:`),cf(),Aa(1738,`pre`)(1739,`code`,33),bT(1740,`
[Nest] 52654  - 09/30/2026, 6:46:07 PM     LOG [OrderStatsService] Order 07fafff6-9892-4298-aeef-dc2c3d5d6bf5 placed, revenue is now 4998
`),cf()(),Aa(1741,`p`),bT(1742,`An order for an unknown product fails validation inside the transaction. The response is a `),Aa(1743,`code`),bT(1744,`400`),cf(),bT(1745,`, and nothing reaches the outbox:`),cf(),Aa(1746,`pre`)(1747,`code`,33),bT(1748,`
$ curl -X POST localhost:3000/orders \\
    -H 'Content-Type: application/json' \\
    -d '{"userId":"user-42","items":[{"productId":"catnip-mouse","quantity":1}]}'
{"message":"Unknown product \\"catnip-mouse\\"","error":"Bad Request","statusCode":400}
`),cf()(),Aa(1749,`p`),bT(1750,`Now order two bags of clumping litter (`),Aa(1751,`code`),bT(1752,`clumping-litter-10l`),cf(),bT(1753,`), which has one in stock. The API accepts the order, because stock is reserved asynchronously. The confirmation email goes out, and the reservation is dead-lettered on its first attempt:`),cf(),Aa(1754,`pre`)(1755,`code`,33),bT(1756,`
$ curl -X POST localhost:3000/orders \\
    -H 'Content-Type: application/json' \\
    -d '{"userId":"user-7","items":[{"productId":"clumping-litter-10l","quantity":2}]}'
{"id":"bf4b8bb3-fd47-4c03-9650-ee991cce3dbe","userId":"user-7","items":[{"productId":"clumping-litter-10l","quantity":2,"price":1599}],"total":3198,"status":"placed"}
`),cf()(),Aa(1757,`pre`)(1758,`code`,33),bT(1759,`
[Nest] 52743  - 09/30/2026, 6:46:15 PM     LOG [MailerService] Order confirmation for bf4b8bb3-fd47-4c03-9650-ee991cce3dbe sent to user-7
[Nest] 52743  - 09/30/2026, 6:46:15 PM    WARN [OutboxRelay] Dead-lettered order.placed 01a0f335-aae8-7027-b795-ca9dab21e44d after 1 attempt(s) (rejected): NonRetryableMessageError: Not enough stock for "clumping-litter-10l" (order bf4b8bb3-fd47-4c03-9650-ee991cce3dbe)
`),cf()(),Aa(1760,`p`),bT(1761,`Inspect the dead-letter queue. Without the `),Aa(1762,`code`),bT(1763,`x-admin-token`),cf(),bT(1764,` header, the guard answers `),Aa(1765,`code`),bT(1766,`403`),cf(),bT(1767,`:`),cf(),Aa(1768,`pre`)(1769,`code`,33),bT(1770,`
$ curl localhost:3000/admin/outbox/dead-letters -H 'x-admin-token: s3cret'
`),cf()(),Aa(1771,`pre`)(1772,`code`,56),bT(1773,`
[
  {
    "id": "01a0f335-aae8-7027-b795-ca9dab21e44d",
    "topic": "order.placed",
    "payload": {
      "id": "bf4b8bb3-fd47-4c03-9650-ee991cce3dbe",
      "items": [{ "price": 1599, "quantity": 2, "productId": "clumping-litter-10l" }],
      "total": 3198,
      "status": "placed",
      "userId": "user-7"
    },
    "headers": {},
    "key": null,
    "createdAt": 1790786775784,
    "attempts": 1,
    "lastError": "NonRetryableMessageError: Not enough stock for \\"clumping-litter-10l\\" (order bf4b8bb3-fd47-4c03-9650-ee991cce3dbe)",
    "history": [
      {
        "at": 1790786775809,
        "error": "NonRetryableMessageError: Not enough stock for \\"clumping-litter-10l\\" (order bf4b8bb3-fd47-4c03-9650-ee991cce3dbe)",
        "attempt": 1,
        "transport": "local"
      }
    ],
    "reason": "rejected",
    "failedAt": 1790786775809
  }
]
`),cf()(),Aa(1774,`p`),bT(1775,`The payload is stored as `),Aa(1776,`code`),bT(1777,`jsonb`),cf(),bT(1778,`, which keeps its own key order, so it comes back with its keys in a different order than they were added.`),cf(),Aa(1779,`p`),bT(1780,`Restock, then requeue the message by its id:`),cf(),Aa(1781,`pre`)(1782,`code`,33),bT(1783,`
$ psql postgres://localhost:5432/store -c "UPDATE products SET in_stock = in_stock + 5 WHERE id = 'clumping-litter-10l'"
UPDATE 1
$ curl -X POST localhost:3000/admin/outbox/dead-letters/01a0f335-aae8-7027-b795-ca9dab21e44d/requeue \\
    -H 'x-admin-token: s3cret'
{"requeued":1}
`),cf()(),Aa(1784,`p`),bT(1785,`The reservation goes through. The email handler's inbox already has this message id, so no second email is sent:`),cf(),Aa(1786,`pre`)(1787,`code`,33),bT(1788,`
[Nest] 52743  - 09/30/2026, 6:46:24 PM     LOG [StockReservationHandler] Reserved stock for order bf4b8bb3-fd47-4c03-9650-ee991cce3dbe
`),cf()(),Aa(1789,`p`),bT(1790,`Finally, stop the analytics service with `),Aa(1791,`code`),bT(1792,`Ctrl+C`),cf(),bT(1793,`, then place an order and cancel it:`),cf(),Aa(1794,`pre`)(1795,`code`,33),bT(1796,`
$ curl -X POST localhost:3000/orders \\
    -H 'Content-Type: application/json' \\
    -d '{"userId":"user-42","items":[{"productId":"salmon-kibble-2kg","quantity":1}]}'
{"id":"908139a7-2bab-4dd8-988a-bdde8c087074","userId":"user-42","items":[{"productId":"salmon-kibble-2kg","quantity":1,"price":2499}],"total":2499,"status":"placed"}
$ curl -X POST localhost:3000/orders/908139a7-2bab-4dd8-988a-bdde8c087074/cancel
{"id":"908139a7-2bab-4dd8-988a-bdde8c087074","userId":"user-42","items":[{"price":2499,"quantity":1,"productId":"salmon-kibble-2kg"}],"total":2499,"status":"cancelled"}
$ curl localhost:3000/admin/outbox/stats -H 'x-admin-token: s3cret'
{"pending":2,"ready":0,"leased":0,"deadLetters":0,"oldestDueAt":1790786821554,"lagMs":3351,"inFlight":0,"published":5,"retried":3,"deadLettered":1,"leaseLost":0,"lastPublishLagMs":62}
`),cf()(),Aa(1797,`p`),bT(1798,`Both analytics messages are pending. `),Aa(1799,`code`),bT(1800,`lagMs`),cf(),bT(1801,` grows while the outage lasts, and `),Aa(1802,`code`),bT(1803,`retried`),cf(),bT(1804,` counts the failed attempts. `),Aa(1805,`code`),bT(1806,`ready`),cf(),bT(1807,` is 0: the placement is waiting for its next retry, and the cancellation is due but waits behind it, because they share a key. The API logs each failed attempt:`),cf(),Aa(1808,`pre`)(1809,`code`,33),bT(1810,`
[Nest] 52743  - 09/30/2026, 6:47:01 PM    WARN [OutboxRelay] Retrying analytics.order.placed 01a0f336-5db2-72ad-80c8-17c07908dfa1 in 546ms (attempt 1 of 10 failed): Error: connect ECONNREFUSED 127.0.0.1:4001
[Nest] 52743  - 09/30/2026, 6:47:02 PM    WARN [OutboxRelay] Retrying analytics.order.placed 01a0f336-5db2-72ad-80c8-17c07908dfa1 in 1617ms (attempt 2 of 10 failed): Error: connect ECONNREFUSED 127.0.0.1:4001
[Nest] 52743  - 09/30/2026, 6:47:04 PM    WARN [OutboxRelay] Retrying analytics.order.placed 01a0f336-5db2-72ad-80c8-17c07908dfa1 in 2084ms (attempt 3 of 10 failed): Error: connect ECONNREFUSED 127.0.0.1:4001
`),cf()(),Aa(1811,`p`),bT(1812,`Start the analytics service again. At its next retry, the relay publishes the placement, then the cancellation. The revenue picks up where it was, because it lives in the service's database, not in its memory:`),cf(),Aa(1813,`pre`)(1814,`code`,33),bT(1815,`
[Nest] 53368  - 09/30/2026, 6:47:29 PM     LOG [OrderStatsService] Order 908139a7-2bab-4dd8-988a-bdde8c087074 placed, revenue is now 10695
[Nest] 53368  - 09/30/2026, 6:47:29 PM     LOG [OrderStatsService] Order 908139a7-2bab-4dd8-988a-bdde8c087074 cancelled, revenue is now 8196
`),cf()(),Aa(1816,`h4`,57)(1817,`span`),bT(1818,`Testing`),cf()(),Aa(1819,`p`),bT(1820,`In an e2e test, run PostgreSQL in-process with `),Aa(1821,`a`,58),bT(1822,`PGlite`),cf(),bT(1823,` and your real migrations, turn the poll loop off, and drive the relay yourself. `),Aa(1824,`code`),bT(1825,`relay.runOnce()`),cf(),bT(1826,` claims and processes one batch, and resolves when the batch is done:`),cf(),Aa(1827,`app-copy-button`,36)(1828,`span`,37),bT(1829),LT(1830,`extension`),Wa(1831,`app-tabs`,null,23),cf(),Aa(1833,`pre`)(1834,`code`,38),bT(1835,`
import { PGlite } from '@electric-sql/pglite';
import { getDrizzleToken } from '@nestjs/drizzle';
import { Outbox, OutboxRelay } from '@nestjs/outbox';
import { Test, type TestingModule } from '@nestjs/testing';
import { drizzle } from 'drizzle-orm/pglite';
import { migrate } from 'drizzle-orm/pglite/migrator';
import { fileURLToPath } from 'node:url';
import { of } from 'rxjs';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { ANALYTICS_SERVICE, AppModule } from '../src/app.module.js';
import { MailerService } from '../src/notifications/mailer.service.js';
import { OrdersService } from '../src/orders/orders.service.js';

describe('OrdersService (outbox)', () => {
  const client = new PGlite(); // PostgreSQL, in-process
  const db = drizzle({ client });
  const mailer = { sendOrderConfirmation: vi.fn() };
  const analytics = { emit: vi.fn(() => of(undefined)) };
  let moduleRef: TestingModule;
  let orders: OrdersService;
  let relay: OutboxRelay;

  beforeAll(async () => {
    // Your migrations: the order tables. The outbox's store creates its schema in init().
    await migrate(db, { migrationsFolder: fileURLToPath(new URL('../drizzle', import.meta.url)) });
    process.env.OUTBOX_RELAY = 'off'; // no poll loop: the test drives the relay
    moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(getDrizzleToken())
      .useValue(db) // the outbox's store runs on it too
      .overrideProvider(MailerService)
      .useValue(mailer)
      .overrideProvider(ANALYTICS_SERVICE)
      .useValue(analytics)
      .compile();
    await moduleRef.init();
    orders = moduleRef.get(OrdersService);
    relay = moduleRef.get(OutboxRelay);
  });

  afterAll(async () => {
    await moduleRef.close();
    await client.close();
  });

  it('publishes order events only after the order commits', async () => {
    const order = await orders.placeOrder({ userId: 'user-42', items: [{ productId: 'salmon-kibble-2kg', quantity: 1 }] });
    expect(mailer.sendOrderConfirmation).not.toHaveBeenCalled();

    await relay.runOnce(); // claim and publish one batch

    expect(mailer.sendOrderConfirmation).toHaveBeenCalledWith(order);
    expect(analytics.emit).toHaveBeenCalledWith(
      'analytics.order.placed',
      expect.objectContaining({ key: order.id, payload: order }),
    );
    expect(await relay.stats()).toMatchObject({ pending: 0, deadLetters: 0 });
  });

  it('publishes nothing when the transaction rolls back', async () => {
    const outbox = moduleRef.get(Outbox);
    const add = outbox.add.bind(outbox);
    vi.spyOn(outbox, 'add').mockImplementationOnce(async (tx, messages) => {
      await add(tx, messages); // the messages are written...
      throw new Error('Connection terminated unexpectedly'); // ...then the transaction fails
    });

    await expect(
      orders.placeOrder({ userId: 'user-42', items: [{ productId: 'salmon-kibble-2kg', quantity: 1 }] }),
    ).rejects.toThrow('Connection terminated unexpectedly');

    expect(await relay.stats()).toMatchObject({ pending: 0 });
    expect(await relay.runOnce()).toMatchObject({ claimed: 0 });
  });
});
`),cf()()(),Aa(1836,`ul`)(1837,`li`),bT(1838,`The outbox, its store, the migrations and the in-process dispatch are real. Only the mailer and the analytics client are stubbed.`),cf(),Aa(1839,`li`),bT(1840,`Override the database `),Aa(1841,`code`),bT(1842,`DrizzleModule`),cf(),bT(1843,` registers, whose token `),Aa(1844,`code`),bT(1845,`getDrizzleToken()`),cf(),bT(1846,` returns, with the PGlite one. The store's factory injects the same token, so the orders and the outbox share the database, as they share the pool in production, and the store creates its schema there when the module initializes. The module still opens its `),Aa(1847,`code`),bT(1848,`pg`),cf(),bT(1849,` pool, which never connects.`),cf(),Aa(1850,`li`),bT(1851,`The rollback test lets `),Aa(1852,`code`),bT(1853,`outbox.add()`),cf(),bT(1854,` write the messages, then fails the transaction. The order and its messages disappear together, and `),Aa(1855,`code`),bT(1856,`runOnce()`),cf(),bT(1857,` finds nothing to claim.`),cf(),Aa(1858,`li`),bT(1859,`For behavior that depends on time, such as backoff and lease expiry, move `),Aa(1860,`code`),bT(1861,`Date.now()`),cf(),bT(1862,` forward with `),Aa(1863,`code`),bT(1864,`vi.spyOn(Date, 'now')`),cf(),bT(1865,`. The relay takes the time from it, for itself and for the store, and real timers keep running for sockets and HTTP.`),cf(),Aa(1866,`li`),bT(1867,`PGlite has a single connection, so it runs transactions one at a time. Test races between instances against a PostgreSQL server, the same major version as production, as the example does for `),Aa(1868,`a`,42),bT(1869,`several instances`),cf(),bT(1870,`.`),cf(),Aa(1871,`li`),bT(1872,`To keep the outbox out of a test, replace the store: `),Aa(1873,`code`),bT(1874,`overrideProvider(PostgresOutboxStore).useValue(new InMemoryOutboxStore())`),cf(),bT(1875,`. A plain instance doesn't register itself, so the outbox falls back to its in-memory store, and the store's schema isn't created. It can't join your Drizzle transactions, though: a rolled-back message is still published, and the store logs a warning the first time it gets your transaction.`),cf()(),Aa(1876,`h4`,59)(1877,`span`),bT(1878,`Delivery guarantees`),cf()(),Aa(1879,`p`),bT(1880,`The overall guarantee is `),Aa(1881,`strong`),bT(1882,`at least once`),cf(),bT(1883,`, with consumer inboxes absorbing the duplicates.`),cf(),Aa(1884,`table`)(1885,`thead`)(1886,`tr`)(1887,`th`),bT(1888,`Situation`),cf(),Aa(1889,`th`),bT(1890,`Outcome`),cf()()(),Aa(1891,`tbody`)(1892,`tr`)(1893,`td`),bT(1894,`The order transaction rolls back`),cf(),Aa(1895,`td`),bT(1896,`The message never existed and is never published`),cf()(),Aa(1897,`tr`)(1898,`td`),bT(1899,`The order transaction commits`),cf(),Aa(1900,`td`),bT(1901,`Published eventually, or dead-lettered with its error history`),cf()(),Aa(1902,`tr`)(1903,`td`),bT(1904,`A relay dies after claiming`),cf(),Aa(1905,`td`),bT(1906,`Published by another instance once its lease expires`),cf()(),Aa(1907,`tr`)(1908,`td`),bT(1909,`A relay dies after publishing, before recording it`),cf(),Aa(1910,`td`),bT(1911,`Published twice. Inboxes drop the duplicate`),cf()(),Aa(1912,`tr`)(1913,`td`),bT(1914,`A publish or handler fails`),cf(),Aa(1915,`td`),bT(1916,`Retried with backoff, then dead-lettered (`),Aa(1917,`code`),bT(1918,`exhausted`),cf(),bT(1919,`)`),cf()(),Aa(1920,`tr`)(1921,`td`),bT(1922,`A publish or handler outlives `),Aa(1923,`code`),bT(1924,`publishTimeout`),cf()(),Aa(1925,`td`),bT(1926,`Counted as a failed attempt, and `),Aa(1927,`code`),bT(1928,`ctx.signal`),cf(),bT(1929,` aborts. A handler that ignores it keeps running; a retry in the same process waits for it`),cf()(),Aa(1930,`tr`)(1931,`td`)(1932,`code`),bT(1933,`NonRetryableMessageError`),cf(),bT(1934,`, or `),Aa(1935,`code`),bT(1936,`retryIf`),cf(),bT(1937,` returns `),Aa(1938,`code`),bT(1939,`false`),cf()(),Aa(1940,`td`),bT(1941,`Dead-lettered at once (`),Aa(1942,`code`),bT(1943,`rejected`),cf(),bT(1944,`)`),cf()(),Aa(1945,`tr`)(1946,`td`),bT(1947,`Messages share a `),Aa(1948,`code`),bT(1949,`key`),cf()(),Aa(1950,`td`),bT(1951,`Published in the order they were added. A retrying message holds back the rest of its key`),cf()(),Aa(1952,`tr`)(1953,`td`),bT(1954,`A message is dead-lettered`),cf(),Aa(1955,`td`),bT(1956,`Its key is unblocked, so later messages with that key overtake it`),cf()(),Aa(1957,`tr`)(1958,`td`),bT(1959,`TCP, Redis or core NATS transport`),cf(),Aa(1960,`td`),bT(1961,`"Published" means the write left the process. A consumer crash after that loses the message`),cf()()()(),Aa(1962,`p`),bT(1963,`Order within a key is the order in which the store numbered the messages, not their ids: an id comes from its instance's clock, and clocks differ. PostgreSQL runs transactions concurrently, so the store makes the transactions that add messages with the same key take turns, and the numbering follows commit order (see `),Aa(1964,`a`,31),bT(1965,`Keep messages in your database`),cf(),bT(1966,`).`),cf(),Aa(1967,`h4`,60)(1968,`span`),bT(1969,`Production checklist`),cf()(),Aa(1970,`ul`)(1971,`li`),bT(1972,`Register a store on your application's database, on a database server: `),Aa(1973,`code`),bT(1974,`PostgresOutboxStore`),cf(),bT(1975,`, `),Aa(1976,`code`),bT(1977,`MySqlOutboxStore`),cf(),bT(1978,`, or one of your own (`),Aa(1979,`a`,61),bT(1980,`The store contract`),cf(),bT(1981,`). Never keep the outbox on the instance itself, in memory or in a file database such as SQLite on its disk: a container's filesystem goes away when the task is replaced, and every message that hadn't been published goes with it. The production guard refuses to start without a store; set `),Aa(1982,`code`),bT(1983,`allowInMemoryStorage`),cf(),bT(1984,` only for a process whose messages you can afford to lose.`),cf(),Aa(1985,`li`),bT(1986,`Apply the store's migrations before a new version starts, with `),Aa(1987,`code`),bT(1988,`npx @nestjs/outbox migrate`),cf(),bT(1989,` or your migration tool, and check them in CI with `),Aa(1990,`code`),bT(1991,`npx @nestjs/outbox status`),cf(),bT(1992,`. With `),Aa(1993,`code`),bT(1994,`NODE_ENV=production`),cf(),bT(1995,`, the store doesn't migrate at startup: a schema that's behind fails it instead.`),cf(),Aa(1996,`li`),bT(1997,`On PostgreSQL, keep the database's default isolation level at READ COMMITTED, the default: the store refuses a stricter one at startup.`),cf(),Aa(1998,`li`),bT(1999,`Alert on `),Aa(2e3,`code`),bT(2001,`lagMs`),cf(),bT(2002,` and `),Aa(2003,`code`),bT(2004,`deadLetters`),cf(),bT(2005,` from `),Aa(2006,`code`),bT(2007,`relay.stats()`),cf(),bT(2008,`, and on `),Aa(2009,`code`),bT(2010,`dead-lettered`),cf(),bT(2011,` events, from `),Aa(2012,`code`),bT(2013,`OutboxEvents`),cf(),bT(2014,` or the `),Aa(2015,`code`),bT(2016,`nestjs:outbox:dead-lettered`),cf(),bT(2017,` diagnostics channel.`),cf(),Aa(2018,`li`),bT(2019,`Size `),Aa(2020,`code`),bT(2021,`retry`),cf(),bT(2022,` to how long your downstreams can be down. The package default is 20 attempts, about 30 to 60 minutes in total. This tutorial's 10 attempts capped at 1 minute give up after 2 to 4 minutes, and then a key's later messages overtake the dead-lettered one.`),cf(),Aa(2023,`li`),bT(2024,`Keep `),Aa(2025,`code`),bT(2026,`consumer`),cf(),bT(2027,` names stable. Inbox entries are keyed by them, so a renamed consumer sees every past message as new.`),cf(),Aa(2028,`li`),bT(2029,`Prune inboxes. Nothing calls `),Aa(2030,`code`),bT(2031,`OutboxInbox.prune()`),cf(),bT(2032,` for you. Run it from a `),Aa(2033,`a`,62),bT(2034,`cron job`),cf(),bT(2035,`, for example `),Aa(2036,`code`),bT(2037,`inbox.prune('30d')`),cf(),bT(2038,`, with a window longer than any redelivery, requeues included.`),cf(),Aa(2039,`li`),bT(2040,`Keep handlers shorter than `),Aa(2041,`code`),bT(2042,`publishTimeout`),cf(),bT(2043,`, and pass `),Aa(2044,`code`),bT(2045,`ctx.signal`),cf(),bT(2046,` to the calls they make. A slower handler counts as a failed attempt; leases aren't extended.`),cf(),Aa(2047,`li`),bT(2048,`Call `),Aa(2049,`code`),bT(2050,`app.enableShutdownHooks()`),cf(),bT(2051,`, so deploys drain the relay instead of leaving messages leased. `),Aa(2052,`code`),bT(2053,`DrizzleModule`),cf(),bT(2054,` ends the pool after that, in `),Aa(2055,`code`),bT(2056,`onApplicationShutdown()`),cf(),bT(2057,`.`),cf(),Aa(2058,`li`),bT(2059,`Protect the dead-letter routes. They expose full payloads.`),cf(),Aa(2060,`li`),bT(2061,`Version payloads. A message added by the previous release can still be delivered after a deploy.`),cf(),Aa(2062,`li`),bT(2063,`Give each ordered stream its own key, and don't share a key between messages for different transports.`),cf(),Aa(2064,`li`),bT(2065,`Keep transactions that call `),Aa(2066,`code`),bT(2067,`outbox.add()`),cf(),bT(2068,` short. The per-key lock makes transactions adding messages with the same key take turns. Prisma's interactive transactions time out after 5 seconds by default (`),Aa(2069,`code`),bT(2070,`transactionOptions`),cf(),bT(2071,` on the client, or per call).`),cf(),Aa(2072,`li`),bT(2073,`On MySQL, run a transaction that calls `),Aa(2074,`code`),bT(2075,`outbox.add()`),cf(),bT(2076,` again when it fails with a deadlock (error 1213): MySQL rolled all of it back.`),cf(),Aa(2077,`li`),bT(2078,`Size the connection pool for both your requests and the relay: each claim holds a connection for one short transaction.`),cf(),Aa(2079,`li`),bT(2080,`Run the contract suites with `),Aa(2081,`code`),bT(2082,`concurrent: true`),cf(),bT(2083,` in CI against a store of your own, on a pool, against the database engine and major version you run in production.`),cf()(),Aa(2084,`h4`,63)(2085,`span`),bT(2086,`The store contract`),cf()(),Aa(2087,`p`)(2088,`code`),bT(2089,`PostgresOutboxStore`),cf(),bT(2090,` and `),Aa(2091,`code`),bT(2092,`MySqlOutboxStore`),cf(),bT(2093,` implement the package's two storage interfaces: `),Aa(2094,`code`),bT(2095,`OutboxStore`),cf(),bT(2096,` for the messages and dead letters, and `),Aa(2097,`code`),bT(2098,`OutboxInboxStore`),cf(),bT(2099,` for the consumers' inboxes. For another database, implement them in a provider of your own. The JSDoc of each method on those interfaces says what it must do, and which race each rule prevents.`),cf(),Aa(2100,`p`)(2101,`strong`),bT(2102,`Registration.`),cf(),bT(2103,` The store is an ordinary singleton provider that calls `),Aa(2104,`code`),bT(2105,`registerSource()`),cf(),bT(2106,` on the injectable `),Aa(2107,`code`),bT(2108,`OutboxStorage`),cf(),bT(2109,` in its constructor, for the contracts it implements, by name: `),Aa(2110,`code`),bT(2111,`messages`),cf(),bT(2112,` and `),Aa(2113,`code`),bT(2114,`inbox`),cf(),bT(2115,`. A service that only consumes may register an inbox store alone. The registry checks the shape at once (every method is a function), refuses a second registration unless it passes `),Aa(2116,`code`),bT(2117,`replace: true`),cf(),bT(2118,`, and locks when `),Aa(2119,`code`),bT(2120,`OutboxModule`),cf(),bT(2121,` initializes, logging the store in use. A request-scoped provider, a provider in a lazy-loaded module, or a lifecycle hook registers too late, and throws.`),cf(),Aa(2122,`p`),bT(2123,`With nothing registered, the outbox runs on its in-memory store, and says so at startup:`),cf(),Aa(2124,`pre`)(2125,`code`,33),bT(2126,`
[Nest] 19039  - 09/23/2026, 11:28:45 AM     LOG [OutboxModule] OutboxStorage: InMemoryOutboxStore (the default: state is lost on restart and not shared between instances)
`),cf()(),Aa(2127,`p`),bT(2128,`That is more than a lost-on-restart shortcut. An in-memory store can't join your transaction, so it applies `),Aa(2129,`code`),bT(2130,`add()`),cf(),bT(2131,` at once, and warns the first time it receives a transaction handle. In this run, the order's transaction added its message and then failed, and the confirmation email went out anyway:`),cf(),Aa(2132,`pre`)(2133,`code`,33),bT(2134,`
[Nest] 19039  - 09/23/2026, 11:28:45 AM    WARN [OutboxModule] InMemoryOutboxStore.add() received your transaction handle, and can't join it: the write applies at once, so a rolled-back transaction won't undo it. Register a store for your database with OutboxStorage.registerSource(). (Logged once.)
[Nest] 19039  - 09/23/2026, 11:28:46 AM     LOG [MailerService] Order confirmation for 7435d418-5d9a-48a0-b186-6cfd2e34b9f4 sent to user-7
`),cf()(),Aa(2135,`p`),bT(2136,`With `),Aa(2137,`code`),bT(2138,`NODE_ENV=production`),cf(),bT(2139,`, the same application doesn't start:`),cf(),Aa(2140,`pre`)(2141,`code`,33),bT(2142,'\nError: OutboxStorage: no store is registered for `messages` (OutboxStore) and `inbox` (OutboxInboxStore), and NODE_ENV is "production": in memory, messages and inbox records would be lost on restart and not shared between instances. Register a store on your database: PostgresOutboxStore (@nestjs/outbox/postgres), MySqlOutboxStore (@nestjs/outbox/mysql), or your own OutboxStore and OutboxInboxStore in a provider that injects OutboxStorage and calls `storage.registerSource({ messages: this, inbox: this })` in its constructor. Or set `allowInMemoryStorage: true` in the OutboxModule options to run in memory anyway.\n'),cf()(),Aa(2143,`p`)(2144,`code`),bT(2145,`allowInMemoryStorage: true`),cf(),bT(2146,` in the module's options is the deliberate way out, for a single instance that may lose its state.`),cf(),Aa(2147,`p`)(2148,`strong`),bT(2149,`Atomicity.`),cf(),bT(2150,` Producers, relays and deliveries race each other through the store. `),Aa(2151,`code`),bT(2152,`add()`),cf(),bT(2153,` must number a key's messages in the order their transactions commit, `),Aa(2154,`code`),bT(2155,`claim()`),cf(),bT(2156,` must never lease a message to two relays or run ahead of an older message of its key, a relay's later writes must apply only while its lease holds, and two deliveries of one message must meet at `),Aa(2157,`code`),bT(2158,`recordInbox()`),cf(),bT(2159,`. So every method that changes state is one conditional statement, or one transaction with the right lock, never a read followed by a write. `),Aa(2160,`code`),bT(2161,`add()`),cf(),bT(2162,` and `),Aa(2163,`code`),bT(2164,`recordInbox()`),cf(),bT(2165,` receive your transaction object untouched: they must write through it, and refuse anything that isn't one, such as the database itself, with `),Aa(2166,`code`),bT(2167,`OutboxTransactionRequiredError`),cf(),bT(2168,`.`),cf(),Aa(2169,`p`)(2170,`strong`),bT(2171,`Test it`),cf(),bT(2172,` with the suites from `),Aa(2173,`code`),bT(2174,`@nestjs/outbox/testing`),cf(),bT(2175,`. `),Aa(2176,`code`),bT(2177,`outboxStoreContract()`),cf(),bT(2178,` and `),Aa(2179,`code`),bT(2180,`outboxInboxStoreContract()`),cf(),bT(2181,` return the contracts as test cases for any test runner: each case is a `),Aa(2182,`code`),bT(2183,`name`),cf(),bT(2184,` and a `),Aa(2185,`code`),bT(2186,`run()`),cf(),bT(2187,` function that throws on failure. The tutorial's tests run them against `),Aa(2188,`code`),bT(2189,`PostgresOutboxStore`),cf(),bT(2190,` through Drizzle, as you would against yours, with a function that returns the store on emptied tables, a way to open one of your transactions, and `),Aa(2191,`code`),bT(2192,`notATransaction`),cf(),bT(2193,`, a handle the store must refuse:`),cf(),Aa(2194,`app-copy-button`,36)(2195,`span`,37),bT(2196),LT(2197,`extension`),Wa(2198,`app-tabs`,null,24),cf(),Aa(2200,`pre`)(2201,`code`,38),bT(2202,`
/** A store on emptied tables, built the way Nest builds it: with the database and a registry. */
async function freshStore(db: Database): Promise<OutboxStoreHarness<Transaction> & { store: PostgresOutboxStore }> {
  await db.execute(sql\`TRUNCATE nest_outbox.messages, nest_outbox.dead_letters, nest_outbox.inbox RESTART IDENTITY\`);
  return {
    store: new PostgresOutboxStore({ executor: fromDrizzle(db) }, new OutboxStorage()),
    transaction: (work) => db.transaction(work),
    notATransaction: db,
  };
}

describe('PostgresOutboxStore through fromDrizzle on PGlite: the store contract', () => {
  // ...
  // The concurrency cases run too; with one connection, PGlite runs them one transaction at a time.
  for (const c of outboxStoreContract(() => freshStore(db), { concurrent: true })) {
    it(c.name, c.run);
  }
  describe('the inbox contract', () => {
    for (const c of outboxInboxStoreContract(() => freshStore(db), { concurrent: true })) {
      it(c.name, c.run);
    }
  });
});
`),cf()()(),Aa(2203,`p`)(2204,`code`),bT(2205,`concurrent: true`),cf(),bT(2206,` adds the races a naive store fails: producers of a key whose transactions overlap, relays claiming side by side, producers and relays racing, a stale relay's writes racing a takeover, and two deliveries of one message. On PGlite they pass one transaction at a time, so run them against a server with a pool too, where the transactions really overlap, on the database engine and major version you run in production. The tutorial runs both suites through each of its clients: Drizzle on PGlite and on PostgreSQL, TypeORM and Prisma on PostgreSQL, and Drizzle on MySQL, against `),Aa(2207,`code`),bT(2208,`MySqlOutboxStore`),cf(),bT(2209,`. The package's own tests run them against stores written by hand with Drizzle, TypeORM and Prisma too, as the proof that a store written against the interfaces passes them.`),cf(),Aa(2210,`p`),bT(2211,`Other packages' stores can live elsewhere: the idempotency store fits Redis. The outbox's store can't, because its messages must commit with your rows, in your database.`),cf(),Aa(2212,`h4`,64)(2213,`span`),bT(2214,`Using BullMQ on Postgres instead`),cf()(),Aa(2215,`p`),bT(2216,`BullMQ 6 has a PostgreSQL backend, so it's fair to ask whether its job table could be the outbox. The package's research into BullMQ 6.3.x (from reading its published code, not a live run) says: not today.`),cf(),Aa(2217,`ul`)(2218,`li`)(2219,`code`),bT(2220,`Queue.add()`),cf(),bT(2221,` always runs on BullMQ's own connection pool, in autocommit mode. The backend interface deliberately exposes no connection or transaction type, so an `),Aa(2222,`code`),bT(2223,`add()`),cf(),bT(2224,` can't join the transaction that inserts your order.`),cf(),Aa(2225,`li`),bT(2226,`The enqueue itself is one SQL function, `),Aa(2227,`code`),bT(2228,`bullmq.add_job(...)`),cf(),bT(2229,`. Calling it on your own transaction would be atomic, but the function is internal, its signature changes with BullMQ's schema migrations, and every transaction that calls it would take Postgres's global NOTIFY lock at commit.`),cf(),Aa(2230,`li`)(2231,`code`),bT(2232,`@nestjs/bullmq`),cf(),bT(2233,` 12.0.0 can't select the Postgres backend for a single queue. The only way is BullMQ's process-wide `),Aa(2234,`code`),bT(2235,`setDefaultBackendFactory()`),cf(),bT(2236,`.`),cf()(),Aa(2237,`p`),bT(2238,`What's needed is an upstream option to run `),Aa(2239,`code`),bT(2240,`add()`),cf(),bT(2241,` on a caller-supplied client (so the job commits with the order), plus a backend option in `),Aa(2242,`code`),bT(2243,`@nestjs/bullmq`),cf(),bT(2244,`. With both, the job table would be the outbox, and BullMQ's workers would provide the claims, retries and failed set with no relay in between. Until then, use this outbox and publish to BullMQ from an `),Aa(2245,`code`),bT(2246,`OutboxTransport`),cf(),bT(2247,` that calls `),Aa(2248,`code`),bT(2249,`queue.add(topic, payload)`),cf(),bT(2250,` with the outbox message `),Aa(2251,`code`),bT(2252,`id`),cf(),bT(2253,` as the `),Aa(2254,`code`),bT(2255,`jobId`),cf(),bT(2256,`, so a republished message is ignored while the job still exists.`),cf(),Aa(2257,`h4`,65)(2258,`span`),bT(2259,`Example`),cf()(),Aa(2260,`p`),bT(2261,`A working example is available in the `),Aa(2262,`a`,66),bT(2263,`37-outbox sample`),cf(),bT(2264,`: the order API on PostgreSQL with Drizzle, its in-process handlers, the analytics microservice with a database of its own, the dead-letter admin API, and the tests.`),cf(),Aa(2265,`h4`,67)(2266,`span`),bT(2267,`Reference`),cf()(),Aa(2268,`h5`,68)(2269,`span`),bT(2270,`Module options`),cf()(),Aa(2271,`p`)(2272,`code`),bT(2273,`OutboxModule.forRoot()`),cf(),bT(2274,` takes these options. `),Aa(2275,`code`),bT(2276,`forRootAsync()`),cf(),bT(2277,` takes `),Aa(2278,`code`),bT(2279,`transports`),cf(),bT(2280,` classes, `),Aa(2281,`code`),bT(2282,`imports`),cf(),bT(2283,` and `),Aa(2284,`code`),bT(2285,`isGlobal`),cf(),bT(2286,` at its top level, and the rest from `),Aa(2287,`code`),bT(2288,`useFactory`),cf(),bT(2289,`, `),Aa(2290,`code`),bT(2291,`useClass`),cf(),bT(2292,` or `),Aa(2293,`code`),bT(2294,`useExisting`),cf(),bT(2295,` (a class implementing `),Aa(2296,`code`),bT(2297,`OutboxOptionsFactory`),cf(),bT(2298,`), as in `),Aa(2299,`a`,69),bT(2300,`Register the outbox`),cf(),bT(2301,`. The options token is `),Aa(2302,`code`),bT(2303,`OUTBOX_MODULE_OPTIONS`),cf(),bT(2304,`. The store isn't an option: register it as a provider, as in `),Aa(2305,`a`,31),bT(2306,`Keep messages in your database`),cf(),bT(2307,`. Durations are milliseconds, or strings such as `),Aa(2308,`code`),bT(2309,`'30s'`),cf(),bT(2310,` and `),Aa(2311,`code`),bT(2312,`'1m'`),cf(),bT(2313,`.`),cf(),Aa(2314,`table`)(2315,`thead`)(2316,`tr`)(2317,`th`),bT(2318,`Option`),cf(),Aa(2319,`th`),bT(2320,`Default`),cf(),Aa(2321,`th`),bT(2322,`Meaning`),cf()()(),Aa(2323,`tbody`)(2324,`tr`)(2325,`td`)(2326,`code`),bT(2327,`transports`),cf()(),Aa(2328,`td`),bT(2329,`None`),cf(),Aa(2330,`td`),bT(2331,`Named `),Aa(2332,`code`),bT(2333,`OutboxTransport`),cf(),bT(2334,` classes or instances. `),Aa(2335,`code`),bT(2336,`local`),cf(),bT(2337,`, the `),Aa(2338,`code`),bT(2339,`@OnOutboxMessage()`),cf(),bT(2340,` handlers, is built in and reserved`),cf()(),Aa(2341,`tr`)(2342,`td`)(2343,`code`),bT(2344,`imports`),cf()(),Aa(2345,`td`),bT(2346,`None`),cf(),Aa(2347,`td`),bT(2348,`Modules whose exports the transport classes inject`),cf()(),Aa(2349,`tr`)(2350,`td`)(2351,`code`),bT(2352,`route`),cf()(),Aa(2353,`td`),bT(2354,`The only destination`),cf(),Aa(2355,`td`)(2356,`code`),bT(2357,`(message) => name`),cf(),bT(2358,`: the one transport a message goes to. Required with handlers and transports, or several transports`),cf()(),Aa(2359,`tr`)(2360,`td`)(2361,`code`),bT(2362,`relay.enabled`),cf()(),Aa(2363,`td`)(2364,`code`),bT(2365,`true`),cf()(),Aa(2366,`td`)(2367,`code`),bT(2368,`false`),cf(),bT(2369,` in instances that only produce or only consume`),cf()(),Aa(2370,`tr`)(2371,`td`)(2372,`code`),bT(2373,`relay.pollInterval`),cf()(),Aa(2374,`td`)(2375,`code`),bT(2376,`'1s'`),cf()(),Aa(2377,`td`),bT(2378,`The wait between polls when idle`),cf()(),Aa(2379,`tr`)(2380,`td`)(2381,`code`),bT(2382,`relay.batchSize`),cf()(),Aa(2383,`td`)(2384,`code`),bT(2385,`100`),cf()(),Aa(2386,`td`),bT(2387,`Messages per claim`),cf()(),Aa(2388,`tr`)(2389,`td`)(2390,`code`),bT(2391,`relay.lease`),cf()(),Aa(2392,`td`)(2393,`code`),bT(2394,`'30s'`),cf()(),Aa(2395,`td`),bT(2396,`How long a claim is exclusive`),cf()(),Aa(2397,`tr`)(2398,`td`)(2399,`code`),bT(2400,`relay.concurrency`),cf()(),Aa(2401,`td`)(2402,`code`),bT(2403,`10`),cf()(),Aa(2404,`td`),bT(2405,`Key groups published in parallel within a batch`),cf()(),Aa(2406,`tr`)(2407,`td`)(2408,`code`),bT(2409,`relay.publishTimeout`),cf()(),Aa(2410,`td`),bT(2411,`A third of `),Aa(2412,`code`),bT(2413,`lease`),cf()(),Aa(2414,`td`),bT(2415,`A slower publish counts as a failed attempt, and its `),Aa(2416,`code`),bT(2417,`signal`),cf(),bT(2418,` aborts`),cf()(),Aa(2419,`tr`)(2420,`td`)(2421,`code`),bT(2422,`retry.attempts`),cf()(),Aa(2423,`td`)(2424,`code`),bT(2425,`20`),cf()(),Aa(2426,`td`),bT(2427,`Total attempts, including the first, before the message is dead-lettered. `),Aa(2428,`code`),bT(2429,`retry: 5`),cf(),bT(2430,` means 5 attempts; `),Aa(2431,`code`),bT(2432,`retry: false`),cf(),bT(2433,`, a single attempt`),cf()(),Aa(2434,`tr`)(2435,`td`)(2436,`code`),bT(2437,`retry.backoff`),cf()(),Aa(2438,`td`)(2439,`code`),bT(2440,`'1s'`),cf(),bT(2441,` doubling up to `),Aa(2442,`code`),bT(2443,`'5m'`),cf(),bT(2444,`, equal jitter`),cf(),Aa(2445,`td`),bT(2446,`An object with `),Aa(2447,`code`),bT(2448,`delay`),cf(),bT(2449,`, `),Aa(2450,`code`),bT(2451,`factor`),cf(),bT(2452,`, `),Aa(2453,`code`),bT(2454,`maxDelay`),cf(),bT(2455,` and `),Aa(2456,`code`),bT(2457,`jitter`),cf(),bT(2458,` (`),Aa(2459,`code`),bT(2460,`'equal'`),cf(),bT(2461,`, `),Aa(2462,`code`),bT(2463,`'full'`),cf(),bT(2464,` or `),Aa(2465,`code`),bT(2466,`'none'`),cf(),bT(2467,`), or a function `),Aa(2468,`code`),bT(2469,`(attempt, error, message) => duration`),cf()()(),Aa(2470,`tr`)(2471,`td`)(2472,`code`),bT(2473,`retry.retryIf`),cf()(),Aa(2474,`td`),bT(2475,`Every error`),cf(),Aa(2476,`td`)(2477,`code`),bT(2478,`(error, attempt, message) => boolean`),cf(),bT(2479,`: `),Aa(2480,`code`),bT(2481,`false`),cf(),bT(2482,` dead-letters the message at once`),cf()(),Aa(2483,`tr`)(2484,`td`)(2485,`code`),bT(2486,`allowInMemoryStorage`),cf()(),Aa(2487,`td`)(2488,`code`),bT(2489,`false`),cf()(),Aa(2490,`td`),bT(2491,`With `),Aa(2492,`code`),bT(2493,`NODE_ENV=production`),cf(),bT(2494,` and no registered store, startup fails; `),Aa(2495,`code`),bT(2496,`true`),cf(),bT(2497,` runs on the in-memory store anyway`),cf()(),Aa(2498,`tr`)(2499,`td`)(2500,`code`),bT(2501,`isGlobal`),cf()(),Aa(2502,`td`)(2503,`code`),bT(2504,`true`),cf()(),Aa(2505,`td`),bT(2506,`Registers the module globally`),cf()()()(),Aa(2507,`h5`,70)(2508,`span`),bT(2509,`Stores`),cf()(),Aa(2510,`p`)(2511,`code`),bT(2512,`new PostgresOutboxStore(options, outboxStorage)`),cf(),bT(2513,`, from `),Aa(2514,`code`),bT(2515,`@nestjs/outbox/postgres`),cf(),bT(2516,`, and `),Aa(2517,`code`),bT(2518,`new MySqlOutboxStore(options, outboxStorage)`),cf(),bT(2519,`, from `),Aa(2520,`code`),bT(2521,`@nestjs/outbox/mysql`),cf(),bT(2522,`, take these options. Without `),Aa(2523,`code`),bT(2524,`outboxStorage`),cf(),bT(2525,`, the store registers nowhere, which suits a script or a test.`),cf(),Aa(2526,`table`)(2527,`thead`)(2528,`tr`)(2529,`th`),bT(2530,`Option`),cf(),Aa(2531,`th`),bT(2532,`Default`),cf(),Aa(2533,`th`),bT(2534,`Meaning`),cf()()(),Aa(2535,`tbody`)(2536,`tr`)(2537,`td`)(2538,`code`),bT(2539,`executor`),cf()(),Aa(2540,`td`),bT(2541,`Required`),cf(),Aa(2542,`td`),bT(2543,`How the store reaches the database: one of the executors below, from the same entry point as the store. The other dialect's doesn't compile`),cf()(),Aa(2544,`tr`)(2545,`td`)(2546,`code`),bT(2547,`schema`),cf()(),Aa(2548,`td`)(2549,`code`),bT(2550,`'nest_outbox'`),cf()(),Aa(2551,`td`),bT(2552,`On PostgreSQL, the schema of its tables, which its first migration creates: letters, digits and underscores, not starting with a digit, at most 63 characters. On MySQL, the prefix of its tables in the connection's database: lowercase letters, digits and underscores, not starting with a digit, at most 40 characters`),cf()(),Aa(2553,`tr`)(2554,`td`)(2555,`code`),bT(2556,`migrate`),cf()(),Aa(2557,`td`)(2558,`code`),bT(2559,`true`),cf(),bT(2560,`, except with `),Aa(2561,`code`),bT(2562,`NODE_ENV=production`),cf()(),Aa(2563,`td`),bT(2564,`Apply the pending migrations when the application starts. With `),Aa(2565,`code`),bT(2566,`false`),cf(),bT(2567,`, startup fails with an `),Aa(2568,`code`),bT(2569,`OutboxSchemaError`),cf(),bT(2570,` while the schema is behind`),cf()()()(),Aa(2571,`p`),bT(2572,`Each executor takes your database client, and its own kind of transaction object, which `),Aa(2573,`code`),bT(2574,`outbox.add()`),cf(),bT(2575,` and `),Aa(2576,`code`),bT(2577,`processInTransaction()`),cf(),bT(2578,` then take:`),cf(),Aa(2579,`table`)(2580,`thead`)(2581,`tr`)(2582,`th`),bT(2583,`Executor`),cf(),Aa(2584,`th`),bT(2585,`Takes`),cf(),Aa(2586,`th`),bT(2587,`Transaction object`),cf()()(),Aa(2588,`tbody`)(2589,`tr`)(2590,`td`)(2591,`code`),bT(2592,`fromDrizzle(db)`),cf()(),Aa(2593,`td`),bT(2594,`A Drizzle database: on PostgreSQL, whichever its driver; on MySQL, `),Aa(2595,`code`),bT(2596,`mysql2`),cf()(),Aa(2597,`td`),bT(2598,`The `),Aa(2599,`code`),bT(2600,`tx`),cf(),bT(2601,` that `),Aa(2602,`code`),bT(2603,`db.transaction()`),cf(),bT(2604,` hands its callback`),cf()(),Aa(2605,`tr`)(2606,`td`)(2607,`code`),bT(2608,`fromTypeOrm(dataSource)`),cf()(),Aa(2609,`td`),bT(2610,`A `),Aa(2611,`code`),bT(2612,`DataSource`),cf(),bT(2613,` of type `),Aa(2614,`code`),bT(2615,`postgres`),cf(),bT(2616,` or `),Aa(2617,`code`),bT(2618,`mysql`),cf()(),Aa(2619,`td`),bT(2620,`The `),Aa(2621,`code`),bT(2622,`EntityManager`),cf(),bT(2623,` that `),Aa(2624,`code`),bT(2625,`dataSource.transaction()`),cf(),bT(2626,` hands its callback, or a `),Aa(2627,`code`),bT(2628,`QueryRunner`),cf(),bT(2629,` after `),Aa(2630,`code`),bT(2631,`startTransaction()`),cf()()(),Aa(2632,`tr`)(2633,`td`)(2634,`code`),bT(2635,`fromPrisma(prisma, options)`),cf()(),Aa(2636,`td`),bT(2637,`A Prisma client, through a driver adapter such as `),Aa(2638,`code`),bT(2639,`@prisma/adapter-pg`),cf(),bT(2640,`, or `),Aa(2641,`code`),bT(2642,`@prisma/adapter-mariadb`),cf(),bT(2643,` for MySQL. `),Aa(2644,`code`),bT(2645,`maxWait`),cf(),bT(2646,` (default `),Aa(2647,`code`),bT(2648,`'10s'`),cf(),bT(2649,`) and `),Aa(2650,`code`),bT(2651,`timeout`),cf(),bT(2652,` (default `),Aa(2653,`code`),bT(2654,`'1m'`),cf(),bT(2655,`) limit the store's own transactions`),cf(),Aa(2656,`td`),bT(2657,`The transaction client that `),Aa(2658,`code`),bT(2659,`prisma.$transaction()`),cf(),bT(2660,` hands its callback`),cf()(),Aa(2661,`tr`)(2662,`td`)(2663,`code`),bT(2664,`fromKysely(db)`),cf()(),Aa(2665,`td`),bT(2666,`A `),Aa(2667,`code`),bT(2668,`Kysely`),cf(),bT(2669,` instance with a PostgreSQL or MySQL dialect`),cf(),Aa(2670,`td`),bT(2671,`The transaction that `),Aa(2672,`code`),bT(2673,`db.transaction().execute()`),cf(),bT(2674,` hands its callback`),cf()(),Aa(2675,`tr`)(2676,`td`)(2677,`code`),bT(2678,`fromPg(pool)`),cf()(),Aa(2679,`td`),bT(2680,`PostgreSQL: a node-postgres `),Aa(2681,`code`),bT(2682,`Pool`),cf(),bT(2683,`, or a connected `),Aa(2684,`code`),bT(2685,`Client`),cf()(),Aa(2686,`td`),bT(2687,`A client, such as one from `),Aa(2688,`code`),bT(2689,`pool.connect()`),cf(),bT(2690,`, after `),Aa(2691,`code`),bT(2692,`BEGIN`),cf()()(),Aa(2693,`tr`)(2694,`td`)(2695,`code`),bT(2696,`fromMysql2(pool)`),cf()(),Aa(2697,`td`),bT(2698,`MySQL: a `),Aa(2699,`code`),bT(2700,`mysql2/promise`),cf(),bT(2701,` pool, or a connection`),cf(),Aa(2702,`td`),bT(2703,`A connection, such as one from `),Aa(2704,`code`),bT(2705,`pool.getConnection()`),cf(),bT(2706,`, after `),Aa(2707,`code`),bT(2708,`beginTransaction()`),cf()()()()(),Aa(2709,`p`),bT(2710,`The store's `),Aa(2711,`code`),bT(2712,`migrate()`),cf(),bT(2713,` method applies the pending migrations at once, whatever the `),Aa(2714,`code`),bT(2715,`migrate`),cf(),bT(2716,` option says, and resolves with the versions it applied. The static `),Aa(2717,`code`),bT(2718,`migrationSql()`),cf(),bT(2719,` returns their SQL, with the bookkeeping, and `),Aa(2720,`code`),bT(2721,`MySqlOutboxStore.migrationStatements()`),cf(),bT(2722,` returns the same statements, one per string. They take the `),Aa(2723,`code`),bT(2724,`schema`),cf(),bT(2725,`, the versions to go `),Aa(2726,`code`),bT(2727,`from`),cf(),bT(2728,` (default `),Aa(2729,`code`),bT(2730,`0`),cf(),bT(2731,`, a new database) and `),Aa(2732,`code`),bT(2733,`to`),cf(),bT(2734,` (default: the one the package needs), and `),Aa(2735,`code`),bT(2736,`migrationSql()`),cf(),bT(2737,` takes `),Aa(2738,`code`),bT(2739,`statementBreakpoints`),cf(),bT(2740,` too. From version 0 on PostgreSQL, the SQL starts with `),Aa(2741,`code`),bT(2742,`CREATE SCHEMA IF NOT EXISTS`),cf(),bT(2743,`, which needs the CREATE privilege on the database: leave it out if someone created the schema for you. The static `),Aa(2744,`code`),bT(2745,`schemaVersion`),cf(),bT(2746,` is the version the package needs.`),cf(),Aa(2747,`p`),bT(2748,`The command line, `),Aa(2749,`code`),bT(2750,`npx @nestjs/outbox`),cf(),bT(2751,`, takes `),Aa(2752,`code`),bT(2753,`--url`),cf(),bT(2754,` (default `),Aa(2755,`code`),bT(2756,`DATABASE_URL`),cf(),bT(2757,`) and `),Aa(2758,`code`),bT(2759,`--schema`),cf(),bT(2760,` (default `),Aa(2761,`code`),bT(2762,`nest_outbox`),cf(),bT(2763,`). A `),Aa(2764,`code`),bT(2765,`mysql://`),cf(),bT(2766,` URL picks `),Aa(2767,`code`),bT(2768,`MySqlOutboxStore`),cf(),bT(2769,`'s migrations, and needs `),Aa(2770,`code`),bT(2771,`mysql2`),cf(),bT(2772,` installed:`),cf(),Aa(2773,`table`)(2774,`thead`)(2775,`tr`)(2776,`th`),bT(2777,`Command`),cf(),Aa(2778,`th`),bT(2779,`What it does`),cf()()(),Aa(2780,`tbody`)(2781,`tr`)(2782,`td`)(2783,`code`),bT(2784,`migrate`),cf()(),Aa(2785,`td`),bT(2786,`Applies the pending migrations, as `),Aa(2787,`code`),bT(2788,`migrate: true`),cf(),bT(2789,` does at startup`),cf()(),Aa(2790,`tr`)(2791,`td`)(2792,`code`),bT(2793,`status`),cf()(),Aa(2794,`td`),bT(2795,`Prints the schema's version and the one the package needs, and exits with 1 while the schema is behind`),cf()(),Aa(2796,`tr`)(2797,`td`)(2798,`code`),bT(2799,`sql`),cf()(),Aa(2800,`td`),bT(2801,`Prints the SQL of `),Aa(2802,`code`),bT(2803,`migrationSql()`),cf(),bT(2804,`, from `),Aa(2805,`code`),bT(2806,`--from`),cf(),bT(2807,` to `),Aa(2808,`code`),bT(2809,`--to`),cf(),bT(2810,`, without a database: PostgreSQL's, or MySQL's with `),Aa(2811,`code`),bT(2812,`--dialect mysql`),cf(),bT(2813,`. `),Aa(2814,`code`),bT(2815,`--statement-breakpoints`),cf(),bT(2816,` separates the statements for a drizzle-kit custom migration`),cf()()()(),Aa(2817,`p`),bT(2818,`On MySQL, the store needs MySQL 8.4 LTS or 9.x with a strict `),Aa(2819,`code`),bT(2820,`sql_mode`),cf(),bT(2821,`, MySQL's default: a lax `),Aa(2822,`code`),bT(2823,`sql_mode`),cf(),bT(2824,`, or MariaDB, fails the startup.`),cf(),Aa(2825,`h5`,71)(2826,`span`),bT(2827,`Messages and handlers`),cf()(),Aa(2828,`p`),bT(2829,`A message passed to `),Aa(2830,`code`),bT(2831,`outbox.add(tx, message)`),cf(),bT(2832,` (`),Aa(2833,`a`,39),bT(2834,`Save the order and its messages in one transaction`),cf(),bT(2835,`) has these fields:`),cf(),Aa(2836,`table`)(2837,`thead`)(2838,`tr`)(2839,`th`),bT(2840,`Field`),cf(),Aa(2841,`th`),bT(2842,`Required`),cf(),Aa(2843,`th`),bT(2844,`Meaning`),cf()()(),Aa(2845,`tbody`)(2846,`tr`)(2847,`td`)(2848,`code`),bT(2849,`topic`),cf()(),Aa(2850,`td`),bT(2851,`Yes`),cf(),Aa(2852,`td`),bT(2853,`What `),Aa(2854,`code`),bT(2855,`route`),cf(),bT(2856,` and the handlers match on`),cf()(),Aa(2857,`tr`)(2858,`td`)(2859,`code`),bT(2860,`payload`),cf()(),Aa(2861,`td`),bT(2862,`Yes`),cf(),Aa(2863,`td`),bT(2864,`Serialized to JSON when `),Aa(2865,`code`),bT(2866,`add()`),cf(),bT(2867,` runs`),cf()(),Aa(2868,`tr`)(2869,`td`)(2870,`code`),bT(2871,`key`),cf()(),Aa(2872,`td`),bT(2873,`No`),cf(),Aa(2874,`td`),bT(2875,`The ordering key: messages that share it are published one at a time, in commit order`),cf()(),Aa(2876,`tr`)(2877,`td`)(2878,`code`),bT(2879,`headers`),cf()(),Aa(2880,`td`),bT(2881,`No`),cf(),Aa(2882,`td`),bT(2883,`String headers, passed to transports`),cf()(),Aa(2884,`tr`)(2885,`td`)(2886,`code`),bT(2887,`id`),cf()(),Aa(2888,`td`),bT(2889,`No`),cf(),Aa(2890,`td`),bT(2891,`Your own unique id. The default is a UUIDv7; consumers deduplicate by it`),cf()(),Aa(2892,`tr`)(2893,`td`)(2894,`code`),bT(2895,`delay`),cf(),bT(2896,` or `),Aa(2897,`code`),bT(2898,`availableAt`),cf()(),Aa(2899,`td`),bT(2900,`No`),cf(),Aa(2901,`td`),bT(2902,`Publish no earlier than this long from now, or than this point in time. Not both`),cf()()()(),Aa(2903,`ul`)(2904,`li`)(2905,`code`),bT(2906,`@OnOutboxMessage(topic, options)`),cf(),bT(2907,` takes `),Aa(2908,`code`),bT(2909,`consumer`),cf(),bT(2910,` (required: the name of the handler's inbox) and `),Aa(2911,`code`),bT(2912,`inbox`),cf(),bT(2913,` (default `),Aa(2914,`code`),bT(2915,`true`),cf(),bT(2916,`; `),Aa(2917,`code`),bT(2918,`false`),cf(),bT(2919,` runs every delivery). `),Aa(2920,`a`,41),bT(2921,`Handle order.placed in-process`),cf()(),Aa(2922,`li`),bT(2923,`A handler's context has `),Aa(2924,`code`),bT(2925,`message`),cf(),bT(2926,`, `),Aa(2927,`code`),bT(2928,`consumer`),cf(),bT(2929,`, `),Aa(2930,`code`),bT(2931,`attempt`),cf(),bT(2932,`, `),Aa(2933,`code`),bT(2934,`signal`),cf(),bT(2935,` and `),Aa(2936,`code`),bT(2937,`processInTransaction(tx, work)`),cf(),bT(2938,`.`),cf(),Aa(2939,`li`)(2940,`code`),bT(2941,`ClientProxyTransport(token, options)`),cf(),bT(2942,` emits the topic with an envelope of `),Aa(2943,`code`),bT(2944,`id`),cf(),bT(2945,`, `),Aa(2946,`code`),bT(2947,`topic`),cf(),bT(2948,`, `),Aa(2949,`code`),bT(2950,`key`),cf(),bT(2951,`, `),Aa(2952,`code`),bT(2953,`headers`),cf(),bT(2954,`, `),Aa(2955,`code`),bT(2956,`createdAt`),cf(),bT(2957,` and `),Aa(2958,`code`),bT(2959,`payload`),cf(),bT(2960,` (`),Aa(2961,`code`),bT(2962,`OutboxEnvelope`),cf(),bT(2963,`). Its `),Aa(2964,`code`),bT(2965,`toPacket(message, envelope)`),cf(),bT(2966,` option returns your own `),Aa(2967,`code`),bT(2968,`pattern`),cf(),bT(2969,` and `),Aa(2970,`code`),bT(2971,`data`),cf(),bT(2972,`. `),Aa(2973,`a`,32),bT(2974,`Publish to the analytics microservice`),cf()()(),Aa(2975,`h5`,72)(2976,`span`),bT(2977,`Services`),cf()(),Aa(2978,`table`)(2979,`thead`)(2980,`tr`)(2981,`th`),bT(2982,`Service`),cf(),Aa(2983,`th`),bT(2984,`Methods`),cf()()(),Aa(2985,`tbody`)(2986,`tr`)(2987,`td`)(2988,`code`),bT(2989,`Outbox`),cf()(),Aa(2990,`td`)(2991,`code`),bT(2992,`add(tx, messages)`),cf(),bT(2993,`, `),Aa(2994,`code`),bT(2995,`notify()`),cf()()(),Aa(2996,`tr`)(2997,`td`)(2998,`code`),bT(2999,`OutboxRelay`),cf()(),Aa(3e3,`td`)(3001,`code`),bT(3002,`stats()`),cf(),bT(3003,`: `),Aa(3004,`code`),bT(3005,`pending`),cf(),bT(3006,`, `),Aa(3007,`code`),bT(3008,`ready`),cf(),bT(3009,`, `),Aa(3010,`code`),bT(3011,`leased`),cf(),bT(3012,`, `),Aa(3013,`code`),bT(3014,`deadLetters`),cf(),bT(3015,`, `),Aa(3016,`code`),bT(3017,`oldestDueAt`),cf(),bT(3018,`, `),Aa(3019,`code`),bT(3020,`lagMs`),cf(),bT(3021,`, `),Aa(3022,`code`),bT(3023,`inFlight`),cf(),bT(3024,`. `),Aa(3025,`code`),bT(3026,`runOnce()`),cf(),bT(3027,`: `),Aa(3028,`code`),bT(3029,`claimed`),cf(),bT(3030,`, `),Aa(3031,`code`),bT(3032,`published`),cf(),bT(3033,`, `),Aa(3034,`code`),bT(3035,`retried`),cf(),bT(3036,`, `),Aa(3037,`code`),bT(3038,`deadLettered`),cf(),bT(3039,`, `),Aa(3040,`code`),bT(3041,`released`),cf(),bT(3042,`, `),Aa(3043,`code`),bT(3044,`leaseLost`),cf(),bT(3045,`. Also `),Aa(3046,`code`),bT(3047,`notify()`),cf(),bT(3048,`, `),Aa(3049,`code`),bT(3050,`start()`),cf(),bT(3051,` and `),Aa(3052,`code`),bT(3053,`stop()`),cf()()(),Aa(3054,`tr`)(3055,`td`)(3056,`code`),bT(3057,`OutboxDeadLetters`),cf()(),Aa(3058,`td`)(3059,`code`),bT(3060,`list(query)`),cf(),bT(3061,` (by `),Aa(3062,`code`),bT(3063,`topic`),cf(),bT(3064,`, `),Aa(3065,`code`),bT(3066,`key`),cf(),bT(3067,`, `),Aa(3068,`code`),bT(3069,`limit`),cf(),bT(3070,`, `),Aa(3071,`code`),bT(3072,`offset`),cf(),bT(3073,`; newest first), `),Aa(3074,`code`),bT(3075,`get(id)`),cf(),bT(3076,`, `),Aa(3077,`code`),bT(3078,`requeue(target)`),cf(),bT(3079,`, `),Aa(3080,`code`),bT(3081,`purge(target)`),cf(),bT(3082,`. A target is an id, an array of ids, or a filter by `),Aa(3083,`code`),bT(3084,`ids`),cf(),bT(3085,`, `),Aa(3086,`code`),bT(3087,`topic`),cf(),bT(3088,`, `),Aa(3089,`code`),bT(3090,`key`),cf(),bT(3091,`, `),Aa(3092,`code`),bT(3093,`failedBefore`),cf(),bT(3094,`, or `),Aa(3095,`code`),bT(3096,`all: true`),cf(),bT(3097,`. `),Aa(3098,`a`,43),bT(3099,`Retries and the dead-letter queue`),cf()()(),Aa(3100,`tr`)(3101,`td`)(3102,`code`),bT(3103,`OutboxInbox`),cf()(),Aa(3104,`td`)(3105,`code`),bT(3106,`process(consumer, id, work)`),cf(),bT(3107,`, `),Aa(3108,`code`),bT(3109,`processInTransaction(tx, consumer, id, work)`),cf(),bT(3110,`, `),Aa(3111,`code`),bT(3112,`prune(olderThan)`),cf(),bT(3113,`. Both `),Aa(3114,`code`),bT(3115,`process`),cf(),bT(3116,` methods resolve `),Aa(3117,`code`),bT(3118,`duplicate`),cf(),bT(3119,`, and `),Aa(3120,`code`),bT(3121,`result`),cf(),bT(3122,` when `),Aa(3123,`code`),bT(3124,`work`),cf(),bT(3125,` ran`),cf()()()(),Aa(3126,`h5`,73)(3127,`span`),bT(3128,`Events`),cf()(),Aa(3129,`p`)(3130,`code`),bT(3131,`OutboxEvents.events$`),cf(),bT(3132,` emits each event, and publishes it on its `),Aa(3133,`code`),bT(3134,`node:diagnostics_channel`),cf(),bT(3135,` channel. Every payload has `),Aa(3136,`code`),bT(3137,`type`),cf(),bT(3138,` and the `),Aa(3139,`code`),bT(3140,`message`),cf(),bT(3141,`. `),Aa(3142,`a`,42),bT(3143,`Run several instances`),cf(),bT(3144,` counts them. Catch errors inside your subscribers: RxJS and `),Aa(3145,`code`),bT(3146,`diagnostics_channel`),cf(),bT(3147,` both rethrow a subscriber's error as an uncaught exception.`),cf(),Aa(3148,`table`)(3149,`thead`)(3150,`tr`)(3151,`th`),bT(3152,`Event`),cf(),Aa(3153,`th`),bT(3154,`Channel`),cf(),Aa(3155,`th`),bT(3156,`Other fields`),cf(),Aa(3157,`th`),bT(3158,`When`),cf()()(),Aa(3159,`tbody`)(3160,`tr`)(3161,`td`)(3162,`code`),bT(3163,`published`),cf()(),Aa(3164,`td`)(3165,`code`),bT(3166,`nestjs:outbox:published`),cf()(),Aa(3167,`td`)(3168,`code`),bT(3169,`transport`),cf(),bT(3170,`, `),Aa(3171,`code`),bT(3172,`durationMs`),cf()(),Aa(3173,`td`),bT(3174,`A transport accepted the message`),cf()(),Aa(3175,`tr`)(3176,`td`)(3177,`code`),bT(3178,`retry-scheduled`),cf()(),Aa(3179,`td`)(3180,`code`),bT(3181,`nestjs:outbox:retry-scheduled`),cf()(),Aa(3182,`td`)(3183,`code`),bT(3184,`transport`),cf(),bT(3185,`, `),Aa(3186,`code`),bT(3187,`error`),cf(),bT(3188,`, `),Aa(3189,`code`),bT(3190,`attempt`),cf(),bT(3191,`, `),Aa(3192,`code`),bT(3193,`delayMs`),cf()(),Aa(3194,`td`),bT(3195,`A publish failed and will be retried`),cf()(),Aa(3196,`tr`)(3197,`td`)(3198,`code`),bT(3199,`dead-lettered`),cf()(),Aa(3200,`td`)(3201,`code`),bT(3202,`nestjs:outbox:dead-lettered`),cf()(),Aa(3203,`td`)(3204,`code`),bT(3205,`transport`),cf(),bT(3206,`, `),Aa(3207,`code`),bT(3208,`error`),cf(),bT(3209,`, `),Aa(3210,`code`),bT(3211,`attempt`),cf(),bT(3212,`, `),Aa(3213,`code`),bT(3214,`reason`),cf()(),Aa(3215,`td`),bT(3216,`The message moved to the dead letters. Alert on it`),cf()(),Aa(3217,`tr`)(3218,`td`)(3219,`code`),bT(3220,`lease-lost`),cf()(),Aa(3221,`td`)(3222,`code`),bT(3223,`nestjs:outbox:lease-lost`),cf()(),Aa(3224,`td`),bT(3225,`None`),cf(),Aa(3226,`td`),bT(3227,`Another relay took the message over mid-publish, so it may be published twice`),cf()()()(),Aa(3228,`p`),bT(3229,`A dead letter's `),Aa(3230,`code`),bT(3231,`reason`),cf(),bT(3232,` is `),Aa(3233,`code`),bT(3234,`exhausted`),cf(),bT(3235,` (the retries ran out) or `),Aa(3236,`code`),bT(3237,`rejected`),cf(),bT(3238,` (a `),Aa(3239,`code`),bT(3240,`NonRetryableMessageError`),cf(),bT(3241,`, or `),Aa(3242,`code`),bT(3243,`retryIf`),cf(),bT(3244,` returned `),Aa(3245,`code`),bT(3246,`false`),cf(),bT(3247,`).`),cf(),Aa(3248,`h5`,74)(3249,`span`),bT(3250,`Errors`),cf()(),Aa(3251,`p`),bT(3252,`None of them carries an HTTP status. `),Aa(3253,`code`),bT(3254,`OutboxError`),cf(),bT(3255,` is the base class of the four that the package throws.`),cf(),Aa(3256,`table`)(3257,`thead`)(3258,`tr`)(3259,`th`),bT(3260,`Error`),cf(),Aa(3261,`th`),bT(3262,`Raised when`),cf()()(),Aa(3263,`tbody`)(3264,`tr`)(3265,`td`)(3266,`code`),bT(3267,`OutboxTransactionRequiredError`),cf()(),Aa(3268,`td`)(3269,`code`),bT(3270,`add()`),cf(),bT(3271,` or `),Aa(3272,`code`),bT(3273,`processInTransaction()`),cf(),bT(3274,` got no transaction handle, or a store refused a handle that isn't a transaction`),cf()(),Aa(3275,`tr`)(3276,`td`)(3277,`code`),bT(3278,`OutboxPublishTimeoutError`),cf()(),Aa(3279,`td`),bT(3280,`A publish outlived `),Aa(3281,`code`),bT(3282,`relay.publishTimeout`),cf(),bT(3283,` (`),Aa(3284,`code`),bT(3285,`timeoutMs`),cf(),bT(3286,`). Counted as a failed attempt`),cf()(),Aa(3287,`tr`)(3288,`td`)(3289,`code`),bT(3290,`OutboxNoHandlerError`),cf()(),Aa(3291,`td`),bT(3292,`No `),Aa(3293,`code`),bT(3294,`@OnOutboxMessage()`),cf(),bT(3295,` handler for the topic in this process (`),Aa(3296,`code`),bT(3297,`topic`),cf(),bT(3298,`). Retried`),cf()(),Aa(3299,`tr`)(3300,`td`)(3301,`code`),bT(3302,`OutboxSchemaError`),cf()(),Aa(3303,`td`),bT(3304,`The store's schema is behind the package's migrations while `),Aa(3305,`code`),bT(3306,`migrate`),cf(),bT(3307,` is off, or applying them failed (`),Aa(3308,`code`),bT(3309,`cause`),cf(),bT(3310,`): startup and every call fail until it's fixed. With the `),Aa(3311,`code`),bT(3312,`schema`),cf(),bT(3313,`, its `),Aa(3314,`code`),bT(3315,`version`),cf(),bT(3316,` and the `),Aa(3317,`code`),bT(3318,`requiredVersion`),cf(),bT(3319,`. From `),Aa(3320,`code`),bT(3321,`@nestjs/outbox/postgres`),cf(),bT(3322,` and `),Aa(3323,`code`),bT(3324,`@nestjs/outbox/mysql`),cf()()(),Aa(3325,`tr`)(3326,`td`)(3327,`code`),bT(3328,`NonRetryableMessageError`),cf()(),Aa(3329,`td`),bT(3330,`You throw it from a handler or transport to dead-letter the message without retrying`),cf()()()()(),Aa(3331,`a`,75),Wa(3332,`i`,76),Aa(3333,`span`),bT(3334,`Edit on GitHub`),cf()()()),c&2){let j=tT(309),x=tT(448),u=tT(476),M=tT(551),S=tT(577),P=tT(630),E=tT(743),L=tT(874),f=tT(890),D=tT(980),y=tT(997),_=tT(1006),w=tT(1056),g=tT(1210),z=tT(1332),q=tT(1351),W=tT(1360),N=tT(1371),B=tT(1472),H=tT(1481),Q=tT(1601),F=tT(1635),K=tT(1832),U=tT(2199);zC(306),hf(` `,jT(307,24,`app.module`,j.isJsActive),`
`),zC(139),hf(` `,jT(446,27,`typeorm/migrations/1790801276314-OutboxStore`,x.isJsActive),`
`),zC(28),hf(` `,jT(474,30,`typeorm/mysql-migrations/1790801276314-OutboxStore`,u.isJsActive),`
`),zC(75),hf(` `,jT(549,33,`typeorm/app.module`,M.isJsActive),`
`),zC(26),hf(` `,jT(575,36,`typeorm/orders.service`,S.isJsActive),`
`),zC(53),hf(` `,jT(628,39,`mysql/app.module`,P.isJsActive),`
`),zC(113),hf(` `,jT(741,42,`app.module`,E.isJsActive),`
`),zC(131),hf(` `,jT(872,45,`orders/order`,L.isJsActive),`
`),zC(16),hf(` `,jT(888,48,`orders/orders.service`,f.isJsActive),`
`),zC(90),hf(` `,jT(978,51,`orders/orders.controller`,D.isJsActive),`
`),zC(17),hf(` `,jT(995,54,`notifications/mailer.service`,y.isJsActive),`
`),zC(9),hf(` `,jT(1004,57,`notifications/order-emails.handler`,_.isJsActive),`
`),zC(50),hf(` `,jT(1054,60,`inventory/stock-reservation.handler`,w.isJsActive),`
`),zC(154),hf(` `,jT(1208,63,`orders/orders.service`,g.isJsActive),`
`),zC(122),hf(` `,jT(1330,66,`analytics-service/app.module`,z.isJsActive),`
`),zC(19),hf(` `,jT(1349,69,`analytics-service/order-stats.service`,q.isJsActive),`
`),zC(9),hf(` `,jT(1358,72,`analytics-service/analytics.controller`,W.isJsActive),`
`),zC(11),hf(` `,jT(1369,75,`analytics-service/main`,N.isJsActive),`
`),zC(101),hf(` `,jT(1470,78,`outbox-admin/outbox-admin.controller`,B.isJsActive),`
`),zC(9),hf(` `,jT(1479,81,`outbox-admin/admin.guard`,H.isJsActive),`
`),zC(120),hf(` `,jT(1599,84,`main`,Q.isJsActive),`
`),zC(34),hf(` `,jT(1633,87,`outbox-admin/outbox-metrics.service`,F.isJsActive),`
`),zC(197),hf(` `,jT(1830,90,`test/orders.e2e-spec`,K.isJsActive),`
`),zC(367),hf(` `,jT(2197,93,`test/drizzle-outbox.store.e2e-spec`,U.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return d})();var ce=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(h){return(m||(m=im(d)))(h||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-resilience`]],features:[xy],decls:1836,vars:60,consts:[[`contentReference`,``],[`appcf40a494cc590e46379dde393c64aabf545ad272`,``],[`appc6b7f22903ebce9c13f5b6ca7f09d6b360210e56`,``],[`appb33d9f977f1a753e81418e781722ae9d0a790ee1`,``],[`app5b38f8cfadcede73b2f1862794f38ce611e147fb`,``],[`appf70d034dd28d4c6dfb5d03304daa099bd2e8230c`,``],[`app4c6b3560675489ce9dbecd20010c70a101f81f47`,``],[`app1ff6302e24deefe26bfb85c99a88ad1bd39e49e0`,``],[`appbb04f7fe1b7898115e10ca4a64b1c6ccdfbbaf7f`,``],[`app4ed2dce5aad5ca2d267f003dc8042521164b3624`,``],[`app687fd3e98ea23a1fdb956cc7242c511a533d5ade`,``],[`appf1e2afac7950d89acaf8dfde93ed27c0efacdd97`,``],[`app26ce554ccea75b67dcfea259eabd41238c3ad2d9`,``],[`appba1d6371bea8d7217f4cd007b4268c396b50dede`,``],[`app8391bcfe6546097fe58f0cc66f1adb418deabe14`,``],[`app4b074c2fbb3797b17114f1fccde3122cd275a520`,``],[1,`content`],[1,`content-inner`],[`id`,`resilience`],[`appAnchor`,``,`id`,`prerequisites`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[1,`language-bash`],[`href`,`/reliability/resilience#retry-a-post-safely`],[`routerLink`,`/reliability/idempotency`],[`appAnchor`,``,`id`,`register-the-module`],[`appAnchor`,``,`id`,`put-a-time-budget-on-the-quotes-route`],[1,`language-json`],[1,`info`],[`appAnchor`,``,`id`,`fail-fast-with-a-circuit-breaker`],[`appAnchor`,``,`id`,`cap-concurrent-csv-exports-with-a-bulkhead`],[`appAnchor`,``,`id`,`retry-a-post-safely`],[`appAnchor`,``,`id`,`use-the-same-policies-inside-services`],[`href`,`/application/task-scheduling#declarative-cron-jobs`],[`appAnchor`,``,`id`,`other-transports`],[`href`,`/faq/hybrid-application#sharing-configuration`],[1,`language-graphql`],[`appAnchor`,``,`id`,`observe-breaker-transitions`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://nodejs.org/api/diagnostics_channel.html`],[`href`,`/observability/overview#what-it-offers`],[`href`,`/observability/sdk#database-queries-and-outbound-http`],[`appAnchor`,``,`id`,`try-it`],[`appAnchor`,``,`id`,`testing`],[`href`,`/fundamentals/testing#end-to-end-testing`],[`appAnchor`,``,`id`,`production-checklist`],[`href`,`/reliability/idempotency#store-keys-in-postgresql`],[`appAnchor`,``,`id`,`reference`],[`appAnchor`,``,`id`,`module-options`],[`href`,`/reliability/resilience#register-the-module`],[`appAnchor`,``,`id`,`decorators`],[`href`,`/reliability/resilience#fail-fast-with-a-circuit-breaker`],[`href`,`/reliability/resilience#cap-concurrent-csv-exports-with-a-bulkhead`],[`href`,`/reliability/resilience#use-the-same-policies-inside-services`],[`appAnchor`,``,`id`,`events`],[`href`,`/reliability/resilience#observe-breaker-transitions`],[`appAnchor`,``,`id`,`errors`],[`href`,`/reliability/resilience#other-transports`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/reliability/resilience.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,16,0)(2,`div`,17)(3,`h3`,18),bT(4,`Resilience`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/resilience`),cf(),bT(8,` adds retries, timeouts, circuit breakers, bulkheads and fallbacks to controllers, resolvers, message handlers and gateways, as decorators.`),cf(),Aa(9,`p`),bT(10,`Sooner or later, every application that calls another system meets one that is slow or down. Without a plan, a slow dependency ties up your request handlers, your clients wait until their own timeouts fire, and retries from every layer pile even more load onto the service that is already struggling.`),cf(),Aa(11,`p`)(12,`code`),bT(13,`@nestjs/resilience`),cf(),bT(14,` gives you the usual tools as decorators: `),Aa(15,`strong`),bT(16,`retry`),cf(),bT(17,`, `),Aa(18,`strong`),bT(19,`timeout`),cf(),bT(20,`, `),Aa(21,`strong`),bT(22,`circuit breaker`),cf(),bT(23,`, `),Aa(24,`strong`),bT(25,`bulkhead`),cf(),bT(26,` and `),Aa(27,`strong`),bT(28,`fallback`),cf(),bT(29,`. They apply to your application's `),Aa(30,`strong`),bT(31,`entrypoints`),cf(),bT(32,`, which are controllers, GraphQL resolvers, microservice message handlers and WebSocket gateways. For code inside services, the same settings are available as policy objects. A single global interceptor applies the decorators, so they behave the same on every transport, and each failure becomes that transport's native error. Over HTTP, for example, a timeout answers `),Aa(33,`code`),bT(34,`504 Gateway Timeout`),cf(),bT(35,` and an open breaker answers `),Aa(36,`code`),bT(37,`503 Service Unavailable`),cf(),bT(38,` with a `),Aa(39,`code`),bT(40,`Retry-After`),cf(),bT(41,` header.`),cf(),Aa(42,`p`),bT(43,`In this tutorial you'll harden the order API of an online store for cat food and supplies. Checkout asks the shipping carrier for quotes, and the carrier's quotes API is slow at the best of times and occasionally down. By the end, a slow carrier costs checkout about three seconds at most. Once the carrier is known to be down, checkout stops waiting for it altogether: customers see flat-rate shipping instead of an error, and a background job stops calling the carrier until it recovers.`),cf(),Aa(44,`h4`,19)(45,`span`),bT(46,`Prerequisites`),cf()(),Aa(47,`p`),bT(48,`This tutorial assumes an `),Aa(49,`code`),bT(50,`OrdersModule`),cf(),bT(51,` that exports an `),Aa(52,`code`),bT(53,`OrdersService`),cf(),bT(54,`. The service needs these methods: `),Aa(55,`code`),bT(56,`findOne(id)`),cf(),bT(57,` (which throws `),Aa(58,`code`),bT(59,`NotFoundException`),cf(),bT(60,` for an unknown id), `),Aa(61,`code`),bT(62,`findAll()`),cf(),bT(63,`, `),Aa(64,`code`),bT(65,`update(id, changes)`),cf(),bT(66,` and `),Aa(67,`code`),bT(68,`exportCsv()`),cf(),bT(69,`. Orders look like this:`),cf(),Aa(70,`app-copy-button`,20)(71,`span`,21),bT(72),LT(73,`extension`),Wa(74,`app-tabs`,null,1),cf(),Aa(76,`pre`)(77,`code`,22),bT(78,`
export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'paid' | 'shipped';
}

export function subtotal(order: Order): number {
  return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
`),cf()()(),Aa(79,`p`),bT(80,`Install the package:`),cf(),Aa(81,`pre`)(82,`code`,23),bT(83,`
$ npm i --save @nestjs/resilience
`),cf()(),Aa(84,`p`)(85,`a`,24),bT(86,`Retry a POST safely`),cf(),bT(87,` also uses `),Aa(88,`code`),bT(89,`@nestjs/idempotency`),cf(),bT(90,` (see `),Aa(91,`a`,25),bT(92,`Idempotency keys`),cf(),bT(93,`).`),cf(),Aa(94,`h4`,26)(95,`span`),bT(96,`Register the module`),cf()(),Aa(97,`p`),bT(98,`Import `),Aa(99,`code`),bT(100,`ResilienceModule`),cf(),bT(101,` into the root module. Configure field defaults and one named preset, `),Aa(102,`code`),bT(103,`carrier`),cf(),bT(104,`, that describes how the application should treat the carrier:`),cf(),Aa(105,`app-copy-button`,20)(106,`span`,21),bT(107),LT(108,`extension`),Wa(109,`app-tabs`,null,2),cf(),Aa(111,`pre`)(112,`code`,22),bT(113,`
import { Module } from '@nestjs/common';
import { ResilienceModule } from '@nestjs/resilience';
import { OrdersModule } from './orders/orders.module.js';
import { ShippingModule } from './shipping/shipping.module.js';

@Module({
  imports: [
    ResilienceModule.forRoot({
      defaults: {
        timeout: '5s',
        retry: { attempts: 3, backoff: { delay: '200ms', maxDelay: '2s' } },
      },
      presets: {
        carrier: {
          timeout: '2s',
          retry: { attempts: 2 },
          circuitBreaker: { failureRateThreshold: 50, minimumCalls: 10, openDuration: '30s' },
        },
      },
    }),
    OrdersModule,
    ShippingModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(114,`p`),bT(115,`The two options do different jobs:`),cf(),Aa(116,`ul`)(117,`li`)(118,`code`),bT(119,`defaults`),cf(),bT(120,` fills in the fields of any stage that a decorator or preset turns on. Defaults never turn a stage on themselves. Here, a retry first waits a random time between 0 and 200 ms (the `),Aa(121,`code`),bT(122,`delay`),cf(),bT(123,`), then up to 400 ms, doubling each time up to 2 s (the `),Aa(124,`code`),bT(125,`maxDelay`),cf(),bT(126,`). A bare `),Aa(127,`code`),bT(128,`@Timeout()`),cf(),bT(129,` means 5 seconds.`),cf(),Aa(130,`li`)(131,`code`),bT(132,`presets`),cf(),bT(133,` holds named sets of stages, usually one per dependency. The `),Aa(134,`code`),bT(135,`carrier`),cf(),bT(136,` preset gives each attempt 2 seconds, makes at most 2 attempts, and adds a circuit breaker. That breaker is `),Aa(137,`strong`),bT(138,`shared under the name `),Aa(139,`code`),bT(140,`carrier`),cf()(),bT(141,` by every route, handler and service that uses the preset. The carrier is one dependency, so it gets one breaker.`),cf()(),Aa(142,`p`),bT(143,`Every time-valued option takes milliseconds or a string such as `),Aa(144,`code`),bT(145,`'200ms'`),cf(),bT(146,`, `),Aa(147,`code`),bT(148,`'2s'`),cf(),bT(149,` or `),Aa(150,`code`),bT(151,`'30s'`),cf(),bT(152,`.`),cf(),Aa(153,`p`),bT(154,`The module is global, so import it once, in the root module. It registers one app-wide interceptor, which does nothing for handlers without resilience decorators apart from error mapping. It checks its configuration at bootstrap: an unknown preset name, an invalid duration or number (such as the `),Aa(155,`code`),bT(156,`NaN`),cf(),bT(157,` of an unset environment variable), a missing fallback method or one breaker name configured in two different ways fails the boot instead of the first request. Use `),Aa(158,`code`),bT(159,`ResilienceModule.forRootAsync()`),cf(),bT(160,` to build the options from configuration.`),cf(),Aa(161,`h4`,27)(162,`span`),bT(163,`Put a time budget on the quotes route`),cf()(),Aa(164,`p`),bT(165,`Start with a client for the carrier. Every method takes an `),Aa(166,`code`),bT(167,`AbortSignal`),cf(),bT(168,` and hands it to `),Aa(169,`code`),bT(170,`fetch()`),cf(),bT(171,`:`),cf(),Aa(172,`app-copy-button`,20)(173,`span`,21),bT(174),LT(175,`extension`),Wa(176,`app-tabs`,null,3),cf(),Aa(178,`pre`)(179,`code`,22),bT(180,`
import { Injectable } from '@nestjs/common';
import type { Order } from '../orders/order.js';

export interface ShippingQuote {
  service: string;
  price: number;
  estimatedDays: number;
}

export interface Shipment {
  id: string;
  reference: string;
  trackingNumber: string;
}

export class CarrierError extends Error {
  constructor(readonly status: number) {
    super(\`The carrier answered with status \${status}\`);
  }
}

@Injectable()
export class CarrierClient {
  private readonly baseUrl = process.env.CARRIER_URL ?? 'https://api.carrier.example.com';

  getQuotes(order: Order, signal: AbortSignal): Promise<ShippingQuote[]> {
    return this.post('/v2/quotes', { reference: order.id, items: order.items }, signal);
  }

  /** The carrier returns the existing shipment when it has seen the reference before. */
  createShipment(order: Order, signal: AbortSignal): Promise<Shipment> {
    return this.post('/v2/shipments', { reference: order.id, items: order.items }, signal);
  }

  private async post<T>(path: string, body: unknown, signal: AbortSignal): Promise<T> {
    const response = await fetch(\`\${this.baseUrl}\${path}\`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
      signal,
    });
    if (!response.ok) {
      throw new CarrierError(response.status);
    }
    return (await response.json()) as T;
  }
}
`),cf()()(),Aa(181,`p`),bT(182,`The service passes the signal through. It also has a flat-rate price list and a booking method, which the circuit breaker and the retried POST use below:`),cf(),Aa(183,`app-copy-button`,20)(184,`span`,21),bT(185),LT(186,`extension`),Wa(187,`app-tabs`,null,4),cf(),Aa(189,`pre`)(190,`code`,22),bT(191,`
import { Injectable } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service.js';
import { CarrierClient, type Shipment, type ShippingQuote } from './carrier.client.js';

@Injectable()
export class ShippingService {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly carrierClient: CarrierClient,
  ) {}

  async getQuotes(orderId: string, signal: AbortSignal): Promise<ShippingQuote[]> {
    const order = await this.ordersService.findOne(orderId);
    return this.carrierClient.getQuotes(order, signal);
  }

  flatRateQuotes(): ShippingQuote[] {
    return [{ service: 'flat-rate', price: 4.99, estimatedDays: 5 }];
  }

  async createShipment(orderId: string, signal: AbortSignal): Promise<Shipment> {
    const order = await this.ordersService.findOne(orderId);
    return this.carrierClient.createShipment(order, signal);
  }
}
`),cf()()(),Aa(192,`p`),bT(193,`Now the route. `),Aa(194,`code`),bT(195,`@Resilience('carrier')`),cf(),bT(196,` applies the preset, and `),Aa(197,`code`),bT(198,`@Signal()`),cf(),bT(199,` injects the current attempt's `),Aa(200,`code`),bT(201,`AbortSignal`),cf(),bT(202,`:`),cf(),Aa(203,`app-copy-button`,20)(204,`span`,21),bT(205),LT(206,`extension`),Wa(207,`app-tabs`,null,5),cf(),Aa(209,`pre`)(210,`code`,22),bT(211,`
import { Controller, Get, Query } from '@nestjs/common';
import { Resilience, Signal, Timeout } from '@nestjs/resilience';
import { ShippingService } from './shipping.service.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get('quotes')
  @Resilience('carrier')
  @Timeout('1.5s')
  getQuotes(@Query('orderId') orderId: string, @Signal() signal: AbortSignal) {
    return this.shippingService.getQuotes(orderId, signal);
  }
}
`),cf()()(),Aa(212,`p`),bT(213,`Register `),Aa(214,`code`),bT(215,`CarrierClient`),cf(),bT(216,` and `),Aa(217,`code`),bT(218,`ShippingService`),cf(),bT(219,` as providers, and `),Aa(220,`code`),bT(221,`ShippingController`),cf(),bT(222,` as a controller, of a `),Aa(223,`code`),bT(224,`ShippingModule`),cf(),bT(225,` that imports `),Aa(226,`code`),bT(227,`OrdersModule`),cf(),bT(228,`.`),cf(),Aa(229,`p`),bT(230,`Checkout can't wait long, so `),Aa(231,`code`),bT(232,`@Timeout('1.5s')`),cf(),bT(233,` gives this route a tighter budget than the preset's. Settings resolve `),Aa(234,`strong`),bT(235,`stage by stage`),cf(),bT(236,`: a decorator on the handler wins over the preset for its own stage, and the preset still supplies the retry and the breaker. A bare `),Aa(237,`code`),bT(238,`@Timeout()`),cf(),bT(239,` would take the preset's 2 seconds, and fall back to `),Aa(240,`code`),bT(241,`defaults.timeout`),cf(),bT(242,` only where no preset or class-level `),Aa(243,`code`),bT(244,`@Timeout()`),cf(),bT(245,` sets a duration.`),cf(),Aa(246,`p`),bT(247,`When an attempt runs out of time, three things happen:`),cf(),Aa(248,`ol`)(249,`li`),bT(250,`The attempt is rejected with a `),Aa(251,`code`),bT(252,`ResilienceTimeoutError`),cf(),bT(253,`.`),cf(),Aa(254,`li`),bT(255,`The signal is aborted with that same error. `),Aa(256,`code`),bT(257,`fetch()`),cf(),bT(258,` rejects and closes the connection, so nothing keeps waiting for an answer nobody will read. Cancellation is cooperative: code that ignores the signal keeps running in the background, and its result is dropped.`),cf(),Aa(259,`li`),bT(260,`Because `),Aa(261,`code`),bT(262,`GET`),cf(),bT(263,` is a safe method, the preset's retry makes a second attempt. Only the pipes, inner interceptors and handler run again. Guards and middleware run once per request.`),cf()(),Aa(264,`p`),bT(265,`If the second attempt times out as well, the client gets a `),Aa(266,`code`),bT(267,`504`),cf(),bT(268,`:`),cf(),Aa(269,`pre`)(270,`code`,28),bT(271,`
{
  "statusCode": 504,
  "error": "Gateway Timeout",
  "message": "The operation timed out",
  "code": "TIMEOUT"
}
`),cf()(),Aa(272,`p`),bT(273,`The timeout applies `),Aa(274,`strong`),bT(275,`per attempt`),cf(),bT(276,`, so a carrier that hangs costs this route about 3.2 seconds: two attempts of 1.5 s plus up to 200 ms of backoff. The status is 504 rather than 408 on purpose. A 408 claims that the `),Aa(277,`em`),bT(278,`client`),cf(),bT(279,` was too slow to send its request, and some clients and proxies repeat 408s automatically, even for `),Aa(280,`code`),bT(281,`POST`),cf(),bT(282,` requests.`),cf(),Aa(283,`p`),bT(284,`Client errors are not failures. A request for an unknown order throws `),Aa(285,`code`),bT(286,`NotFoundException`),cf(),bT(287,` before the carrier is called. It answers 404, and it is neither retried nor counted by the breaker.`),cf(),Aa(288,`blockquote`,29)(289,`strong`),bT(290,`Hint`),cf(),bT(291,` Code that can't take the signal as a parameter can inject `),Aa(292,`code`),bT(293,`ResilienceContext`),cf(),bT(294,` and read its `),Aa(295,`code`),bT(296,`signal`),cf(),bT(297,` and `),Aa(298,`code`),bT(299,`attempt`),cf(),bT(300,`. It reads the current attempt from `),Aa(301,`code`),bT(302,`AsyncLocalStorage`),cf(),bT(303,`, so it works in any service the handler calls, on every transport. A policy object used inside the attempt inherits its signal too, so the route's timeout also stops that policy's retries.
`),cf(),Aa(304,`h4`,30)(305,`span`),bT(306,`Fail fast with a circuit breaker`),cf()(),Aa(307,`p`),bT(308,`The preset's breaker records the outcome of every attempt. The `),Aa(309,`code`),bT(310,`carrier`),cf(),bT(311,` breaker opens once it has seen at least `),Aa(312,`code`),bT(313,`minimumCalls`),cf(),bT(314,` (10) calls, and at least `),Aa(315,`code`),bT(316,`failureRateThreshold`),cf(),bT(317,` (50%) of them failed. By default it looks at the last 20 calls. Every error counts as a failure, timeouts included, except client errors and rejections from other policies. A client error is a 4xx `),Aa(318,`code`),bT(319,`HttpException`),cf(),bT(320,`, or any other error with a 4xx `),Aa(321,`code`),bT(322,`status`),cf(),bT(323,` or `),Aa(324,`code`),bT(325,`statusCode`),cf(),bT(326,` property. That covers `),Aa(327,`code`),bT(328,`CarrierError`),cf(),bT(329,`: when the carrier answers `),Aa(330,`code`),bT(331,`422`),cf(),bT(332,` to a malformed request, it isn't down, so the breaker ignores the error and the retry doesn't repeat it. A `),Aa(333,`code`),bT(334,`408`),cf(),bT(335,` or `),Aa(336,`code`),bT(337,`429`),cf(),bT(338,` from the carrier is the exception, because it means the carrier is pushing back, so it counts like a `),Aa(339,`code`),bT(340,`5xx`),cf(),bT(341,`. An `),Aa(342,`code`),bT(343,`HttpException`),cf(),bT(344,` with one of those statuses is still a client error: the handler threw it to answer its own caller, and that says nothing about the carrier. To change what counts, pass a `),Aa(345,`code`),bT(346,`recordIf`),cf(),bT(347,` function in the breaker options.`),cf(),Aa(348,`p`),bT(349,`While the breaker is `),Aa(350,`strong`),bT(351,`open`),cf(),bT(352,`, calls fail immediately and the carrier is not called at all. The client gets a `),Aa(353,`code`),bT(354,`503`),cf(),bT(355,` with a `),Aa(356,`code`),bT(357,`Retry-After`),cf(),bT(358,` header: the number of seconds until the breaker lets a probe call through. The retry wraps the breaker, so a rejection is never retried.`),cf(),Aa(359,`p`),bT(360,`After `),Aa(361,`code`),bT(362,`openDuration`),cf(),bT(363,` (30 s), the breaker is `),Aa(364,`strong`),bT(365,`half-open`),cf(),bT(366,`. It lets one probe call through (see `),Aa(367,`code`),bT(368,`halfOpenMaxCalls`),cf(),bT(369,`). If the probe succeeds, the breaker closes and starts over with an empty window. If it fails, the breaker opens for another 30 seconds. The breaker doesn't use a timer for this. It checks the state on the next call.`),cf(),Aa(370,`p`),bT(371,`A 503 is correct, but checkout can do better. Add a fallback that serves flat-rate quotes while the carrier is known to be down (import `),Aa(372,`code`),bT(373,`Fallback`),cf(),bT(374,` and `),Aa(375,`code`),bT(376,`CircuitOpenError`),cf(),bT(377,` from `),Aa(378,`code`),bT(379,`@nestjs/resilience`),cf(),bT(380,`):`),cf(),Aa(381,`app-copy-button`,20)(382,`span`,21),bT(383),LT(384,`extension`),Wa(385,`app-tabs`,null,6),cf(),Aa(387,`pre`)(388,`code`,22),bT(389,`
@Get('quotes')
@Resilience('carrier')
@Timeout('1.5s')
@Fallback('flatRateQuotes', {
  handleIf: (error) => error instanceof CircuitOpenError,
})
getQuotes(@Query('orderId') orderId: string, @Signal() signal: AbortSignal) {
  return this.shippingService.getQuotes(orderId, signal);
}

flatRateQuotes() {
  return this.shippingService.flatRateQuotes();
}
`),cf()()(),Aa(390,`p`)(391,`code`),bT(392,`@Fallback()`),cf(),bT(393,` takes the name of a method on the same class, or a function. TypeScript checks that the class has a method with that name. The fallback is called with the error and the `),Aa(394,`code`),bT(395,`ExecutionContext`),cf(),bT(396,`, and whatever it returns becomes the response. It can be a value, a `),Aa(397,`code`),bT(398,`Promise`),cf(),bT(399,` or an `),Aa(400,`code`),bT(401,`Observable`),cf(),bT(402,`. Fallback is the outermost stage, so it also sees the breaker's rejections.`),cf(),Aa(403,`p`),bT(404,`By default, a fallback replaces every error except client errors. The `),Aa(405,`code`),bT(406,`handleIf`),cf(),bT(407,` option narrows that down. Flat rates cost the store money on heavy parcels, such as bags of litter, so here they're a last resort: they're served only when the breaker says the carrier is down, and a single slow answer still gets a 504.`),cf(),Aa(408,`blockquote`,29)(409,`strong`),bT(410,`Hint`),cf(),bT(411,` To look at a breaker from your own code, inject `),Aa(412,`code`),bT(413,`ResilienceService`),cf(),bT(414,` and call `),Aa(415,`code`),bT(416,`circuitBreaker('carrier')`),cf(),bT(417,`. The breaker exposes `),Aa(418,`code`),bT(419,`state`),cf(),bT(420,` and `),Aa(421,`code`),bT(422,`stats`),cf(),bT(423,`, and you can force it open or closed with `),Aa(424,`code`),bT(425,`trip()`),cf(),bT(426,` and `),Aa(427,`code`),bT(428,`reset()`),cf(),bT(429,`.
`),cf(),Aa(430,`h4`,31)(431,`span`),bT(432,`Cap concurrent CSV exports with a bulkhead`),cf()(),Aa(433,`p`),bT(434,`The back office downloads all orders as a CSV file. Building the file reads every order and is heavy on both the database and the CPU. Two exports at a time are fine, but twenty would slow checkout down for everyone. A bulkhead caps how many run at the same time:`),cf(),Aa(435,`app-copy-button`,20)(436,`span`,21),bT(437),LT(438,`extension`),Wa(439,`app-tabs`,null,7),cf(),Aa(441,`pre`)(442,`code`,22),bT(443,`
import { Controller, Get, Header } from '@nestjs/common';
import { Bulkhead } from '@nestjs/resilience';
import { OrdersService } from './orders.service.js';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('export')
  @Header('Content-Type', 'text/csv')
  @Bulkhead({ maxConcurrent: 2, maxQueue: 3, queueTimeout: '10s' })
  export() {
    return this.ordersService.exportCsv();
  }
}
`),cf()()(),Aa(444,`p`),bT(445,`Two exports run at a time. Up to three more wait for a slot, for at most 10 seconds each. A sixth request gets a `),Aa(446,`code`),bT(447,`503`),cf(),bT(448,` right away, and so does a waiting request once its 10 seconds are up:`),cf(),Aa(449,`pre`)(450,`code`,28),bT(451,`
{
  "statusCode": 503,
  "error": "Service Unavailable",
  "message": "Server is at capacity",
  "code": "BULKHEAD_FULL"
}
`),cf()(),Aa(452,`p`),bT(453,`This 503 has no `),Aa(454,`code`),bT(455,`Retry-After`),cf(),bT(456,` header, because nobody knows when a slot will free up. The status is 503 rather than 429 because a 429 blames the client's request rate, while a full bulkhead means the server is at capacity for everyone.`),cf(),Aa(457,`p`),bT(458,`A slot stays taken until the handler finishes, or until a timeout on the route gives up on the attempt. A handler that ignores its signal then keeps running in the background, outside the bulkhead's count, which is one more reason to pass the signal to every call that takes one. A bulkhead without a name belongs to its handler, and is registered under the handler's name. To read its load, inject `),Aa(459,`code`),bT(460,`ResilienceService`),cf(),bT(461,` and look at `),Aa(462,`code`),bT(463,`bulkhead('OrdersController.export')`),cf(),bT(464,`, which has `),Aa(465,`code`),bT(466,`active`),cf(),bT(467,` and `),Aa(468,`code`),bT(469,`queued`),cf(),bT(470,` counts. Give the bulkhead a `),Aa(471,`code`),bT(472,`name`),cf(),bT(473,` to share one pool of slots between several handlers.`),cf(),Aa(474,`h4`,32)(475,`span`),bT(476,`Retry a POST safely`),cf()(),Aa(477,`p`),bT(478,`So far, retries have only happened on `),Aa(479,`code`),bT(480,`GET`),cf(),bT(481,`. That's deliberate. On HTTP, a retry applies only to the safe methods `),Aa(482,`code`),bT(483,`GET`),cf(),bT(484,`, `),Aa(485,`code`),bT(486,`HEAD`),cf(),bT(487,` and `),Aa(488,`code`),bT(489,`OPTIONS`),cf(),bT(490,`, and on GraphQL only to queries. Running a `),Aa(491,`code`),bT(492,`POST`),cf(),bT(493,` twice might create two shipments, and the package can't know whether that's harmless. So a preset's retry is simply skipped on a `),Aa(494,`code`),bT(495,`POST`),cf(),bT(496,`. A `),Aa(497,`code`),bT(498,`@Retry()`),cf(),bT(499,` decorator placed directly on a `),Aa(500,`code`),bT(501,`POST`),cf(),bT(502,` handler is skipped too, and bootstrap warns about it:`),cf(),Aa(503,`pre`)(504,`code`,23),bT(505,`
WARN [ResilienceModule] @Retry() on ShippingController.createShipment() is inactive: it only re-runs safe operations (GET, HEAD, OPTIONS, GraphQL queries). If the handler is safe to repeat, use @Retry({ idempotent: true }).
`),cf()(),Aa(506,`p`),bT(507,`Booking a shipment `),Aa(508,`em`),bT(509,`is`),cf(),bT(510,` safe to repeat, because the carrier deduplicates shipments by `),Aa(511,`code`),bT(512,`reference`),cf(),bT(513,`, which is the order id. That matters for another reason too: a booking that timed out may still have gone through on the carrier's side, so the retry has to be safe anyway. Setting `),Aa(514,`code`),bT(515,`idempotent: true`),cf(),bT(516,` on `),Aa(517,`code`),bT(518,`@Retry()`),cf(),bT(519,` is how you state that running the handler twice within one request is fine:`),cf(),Aa(520,`app-copy-button`,20)(521,`span`,21),bT(522),LT(523,`extension`),Wa(524,`app-tabs`,null,8),cf(),Aa(526,`pre`)(527,`code`,22),bT(528,`
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Idempotent } from '@nestjs/idempotency';
import { CircuitOpenError, Fallback, Resilience, Retry, Signal, Timeout } from '@nestjs/resilience';
import { ShippingService } from './shipping.service.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get('quotes')
  @Resilience('carrier')
  @Timeout('1.5s')
  @Fallback('flatRateQuotes', {
    handleIf: (error) => error instanceof CircuitOpenError,
  })
  getQuotes(@Query('orderId') orderId: string, @Signal() signal: AbortSignal) {
    return this.shippingService.getQuotes(orderId, signal);
  }

  flatRateQuotes() {
    return this.shippingService.flatRateQuotes();
  }

  @Post('shipments')
  @Idempotent()
  @Resilience('carrier')
  @Retry({ idempotent: true })
  createShipment(@Body('orderId') orderId: string, @Signal() signal: AbortSignal) {
    return this.shippingService.createShipment(orderId, signal);
  }
}
`),cf()()(),Aa(529,`p`),bT(530,`A handler-level `),Aa(531,`code`),bT(532,`@Retry()`),cf(),bT(533,` merges into the preset's retry, field by field. The fields you set win, and the rest come from the preset, then from `),Aa(534,`code`),bT(535,`defaults.retry`),cf(),bT(536,`. So this route keeps the preset's 2 attempts and adds only `),Aa(537,`code`),bT(538,`idempotent: true`),cf(),bT(539,`. The preset's 2-second timeout and its breaker still apply. Only a decorator can say `),Aa(540,`code`),bT(541,`idempotent: true`),cf(),bT(542,`: a preset can't declare every handler that uses it safe to repeat.`),cf(),Aa(543,`p`)(544,`code`),bT(545,`idempotent: true`),cf(),bT(546,` and `),Aa(547,`code`),bT(548,`@Idempotent()`),cf(),bT(549,` solve two different problems:`),cf(),Aa(550,`ul`)(551,`li`)(552,`code`),bT(553,`idempotent: true`),cf(),bT(554,` lets the `),Aa(555,`strong`),bT(556,`server`),cf(),bT(557,` re-run the handler within one request.`),cf(),Aa(558,`li`)(559,`code`),bT(560,`@Idempotent()`),cf(),bT(561,` deduplicates the `),Aa(562,`strong`),bT(563,`client's`),cf(),bT(564,` retries of the whole request. When a client repeats a request with the same `),Aa(565,`code`),bT(566,`Idempotency-Key`),cf(),bT(567,` header, it gets the stored response back and the handler doesn't run again.`),cf()(),Aa(568,`p`),bT(569,`Register `),Aa(570,`code`),bT(571,`IdempotencyModule`),cf(),Aa(572,`strong`),bT(573,`before`),cf(),Aa(574,`code`),bT(575,`ResilienceModule`),cf(),bT(576,`:`),cf(),Aa(577,`app-copy-button`,20)(578,`span`,21),bT(579),LT(580,`extension`),Wa(581,`app-tabs`,null,9),cf(),Aa(583,`pre`)(584,`code`,22),bT(585,`
import { Module } from '@nestjs/common';
import { IdempotencyModule } from '@nestjs/idempotency';
import { ResilienceModule } from '@nestjs/resilience';
import { OrdersModule } from './orders/orders.module.js';
import { ShippingModule } from './shipping/shipping.module.js';

@Module({
  imports: [
    // Import order matters: the first global interceptor runs outermost.
    IdempotencyModule.forRoot({}),
    ResilienceModule.forRoot({
      defaults: {
        timeout: '5s',
        retry: { attempts: 3, backoff: { delay: '200ms', maxDelay: '2s' } },
      },
      presets: {
        carrier: {
          timeout: '2s',
          retry: { attempts: 2 },
          circuitBreaker: { failureRateThreshold: 50, minimumCalls: 10, openDuration: '30s' },
        },
      },
    }),
    OrdersModule,
    ShippingModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(586,`p`),bT(587,`Both modules register a global interceptor, and the one imported first runs outermost. With this order:`),cf(),Aa(588,`ul`)(589,`li`),bT(590,`A replay, or a `),Aa(591,`code`),bT(592,`409`),cf(),bT(593,` for a key that is still in flight, is answered before any retry, breaker or timeout runs. A booking that already succeeded replays even while the breaker is open.`),cf(),Aa(594,`li`),bT(595,`All the retries of one request happen under a single claimed key.`),cf(),Aa(596,`li`),bT(597,`The stored response is the final outcome, after retries and any fallback.`),cf(),Aa(598,`li`),bT(599,`A `),Aa(600,`code`),bT(601,`503`),cf(),bT(602,` or `),Aa(603,`code`),bT(604,`504`),cf(),bT(605,` is a 5xx response, so the key is released and the client can try again later with the same key.`),cf()(),Aa(606,`p`),bT(607,`Releasing the key on a `),Aa(608,`code`),bT(609,`504`),cf(),bT(610,` has a catch. The key is released as soon as the timeout answers, but the timed-out run may still be in progress, or may already have reached the carrier, so a retry with the same key can overlap it. That's why the side effect has to be safe to repeat downstream, as the carrier makes it with `),Aa(611,`code`),bT(612,`reference`),cf(),bT(613,`. Passing the signal on, as `),Aa(614,`code`),bT(615,`createShipment()`),cf(),bT(616,` does, stops the local work sooner.`),cf(),Aa(617,`h4`,33)(618,`span`),bT(619,`Use the same policies inside services`),cf()(),Aa(620,`p`),bT(621,`Pending orders include a shipping estimate in their `),Aa(622,`code`),bT(623,`total`),cf(),bT(624,`. Every 15 minutes, a background job re-quotes them. The job isn't an entrypoint, so it uses a `),Aa(625,`strong`),bT(626,`policy object`),cf(),bT(627,`, which you get from `),Aa(628,`code`),bT(629,`ResilienceService`),cf(),bT(630,`:`),cf(),Aa(631,`app-copy-button`,20)(632,`span`,21),bT(633),LT(634,`extension`),Wa(635,`app-tabs`,null,10),cf(),Aa(637,`pre`)(638,`code`,22),bT(639,`
import { Injectable, Logger } from '@nestjs/common';
import { CircuitOpenError, ResilienceService, type ResiliencePolicy } from '@nestjs/resilience';
import { subtotal } from '../orders/order.js';
import { OrdersService } from '../orders/orders.service.js';
import { CarrierClient } from './carrier.client.js';

@Injectable()
export class RepricingService {
  private readonly logger = new Logger(RepricingService.name);
  private readonly resiliencePolicy: ResiliencePolicy;

  constructor(
    resilience: ResilienceService,
    private readonly ordersService: OrdersService,
    private readonly carrierClient: CarrierClient,
  ) {
    this.resiliencePolicy = resilience.preset('carrier');
  }

  /** Refreshes the shipping part of every pending order's total. */
  async repricePendingOrders(): Promise<number> {
    const pending = (await this.ordersService.findAll()).filter((order) => order.status === 'pending');
    let repriced = 0;
    for (const order of pending) {
      try {
        const quotes = await this.resiliencePolicy.execute(
          ({ signal }) => this.carrierClient.getQuotes(order, signal),
          { source: 'RepricingService.repricePendingOrders' },
        );
        const shipping = Math.min(...quotes.map((quote) => quote.price));
        await this.ordersService.update(order.id, { total: subtotal(order) + shipping });
        repriced++;
      } catch (error) {
        if (error instanceof CircuitOpenError) {
          this.logger.warn(\`The carrier is unavailable, stopping after \${repriced} of \${pending.length} orders\`);
          break;
        }
        this.logger.error(\`Could not reprice order \${order.id}\`, (error as Error).stack);
      }
    }
    return repriced;
  }
}
`),cf()()(),Aa(640,`p`),bT(641,`Add `),Aa(642,`code`),bT(643,`RepricingService`),cf(),bT(644,` to the providers of `),Aa(645,`code`),bT(646,`ShippingModule`),cf(),bT(647,`, and call `),Aa(648,`code`),bT(649,`repricePendingOrders()`),cf(),bT(650,` from a scheduled job (see `),Aa(651,`a`,34),bT(652,`Task scheduling`),cf(),bT(653,`).`),cf(),Aa(654,`p`)(655,`code`),bT(656,`resilience.preset('carrier')`),cf(),bT(657,` returns the preset as one policy. Its breaker is the `),Aa(658,`strong`),bT(659,`same instance`),cf(),bT(660,` that the routes use, so the job and checkout share what they learn about the carrier in both directions:`),cf(),Aa(661,`ul`)(662,`li`),bT(663,`While the breaker is open, the job gets a `),Aa(664,`code`),bT(665,`CircuitOpenError`),cf(),bT(666,` immediately and stops, instead of spending a timeout on every order.`),cf(),Aa(667,`li`),bT(668,`If the job is the first to find the carrier failing, its failures open the breaker, and checkout serves flat rates without waiting on timeouts first.`),cf()(),Aa(669,`p`),bT(670,`A few details differ from entrypoints:`),cf(),Aa(671,`ul`)(672,`li`)(673,`code`),bT(674,`execute()`),cf(),bT(675,` passes your function the attempt's `),Aa(676,`code`),bT(677,`signal`),cf(),bT(678,` and `),Aa(679,`code`),bT(680,`attempt`),cf(),bT(681,` number. The `),Aa(682,`code`),bT(683,`source`),cf(),bT(684,` option labels the events this call emits.`),cf(),Aa(685,`li`),bT(686,`A policy object has no `),Aa(687,`code`),bT(688,`GET`),cf(),bT(689,` or `),Aa(690,`code`),bT(691,`POST`),cf(),bT(692,` to look at, so the preset's retry `),Aa(693,`strong`),bT(694,`always`),cf(),bT(695,` applies. Only wrap calls that are safe to repeat (a quote is).`),cf(),Aa(696,`li`),bT(697,`The route's `),Aa(698,`code`),bT(699,`@Timeout('1.5s')`),cf(),bT(700,` belongs to the route. The job gets the preset's 2 seconds.`),cf(),Aa(701,`li`),bT(702,`Create the policy once, for example in the constructor, not on every call. For options that aren't a preset, use `),Aa(703,`code`),bT(704,`resilience.create(options, name)`),cf(),bT(705,`.`),cf()(),Aa(706,`p`),bT(707,`Why not put `),Aa(708,`code`),bT(709,`@Retry()`),cf(),bT(710,` on `),Aa(711,`code`),bT(712,`repricePendingOrders()`),cf(),bT(713,`? Resilience decorators are metadata that the global interceptor reads, and interceptors only run around entrypoints. On a provider method, a decorator would do nothing, so bootstrap warns instead:`),cf(),Aa(714,`pre`)(715,`code`,23),bT(716,`
WARN [ResilienceModule] Resilience decorators on RepricingService.repricePendingOrders() have no effect: RepricingService is not a controller, resolver or gateway. They apply to entrypoints only. Inside services, use a policy object (ResilienceService.preset() or create(), or new RetryPolicy() etc.).
`),cf()(),Aa(717,`p`),bT(718,`This is a deliberate choice, for three reasons:`),cf(),Aa(719,`ul`)(720,`li`),bT(721,`Wrapping arbitrary provider methods would miss request-scoped and transient instances, which Nest creates after bootstrap.`),cf(),Aa(722,`li`),bT(723,`Retries hidden deep inside services multiply. A route that makes 3 attempts, calling a service that makes 3 attempts, calling an SDK that makes 3 attempts, sends up to 27 requests to a dependency that is already struggling.`),cf(),Aa(724,`li`),bT(725,`A policy object is visible at the call site, where you can see what it does.`),cf()(),Aa(726,`blockquote`,29)(727,`strong`),bT(728,`Hint`),cf(),bT(729,` An entrypoint without decorators still maps resilience errors. If a service throws a `),Aa(730,`code`),bT(731,`CircuitOpenError`),cf(),bT(732,` inside a plain route, the client gets a `),Aa(733,`code`),bT(734,`503`),cf(),bT(735,` with `),Aa(736,`code`),bT(737,`Retry-After`),cf(),bT(738,`. Set `),Aa(739,`code`),bT(740,`mapErrors: false`),cf(),bT(741,` in the module options to turn this off.
`),cf(),Aa(742,`h4`,35)(743,`span`),bT(744,`Other transports`),cf()(),Aa(745,`p`),bT(746,`The same decorators work on microservice handlers. The warehouse service asks for quotes over TCP when it re-packs an order:`),cf(),Aa(747,`app-copy-button`,20)(748,`span`,21),bT(749),LT(750,`extension`),Wa(751,`app-tabs`,null,11),cf(),Aa(753,`pre`)(754,`code`,22),bT(755,`
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Resilience, Retry, Signal } from '@nestjs/resilience';
import { ShippingService } from './shipping.service.js';

@Controller()
export class ShippingHandlers {
  constructor(private readonly shippingService: ShippingService) {}

  @MessagePattern('shipping.quotes')
  @Resilience('carrier')
  @Retry({ attempts: 3 })
  getQuotes(@Payload() data: { orderId: string }, @Signal() signal: AbortSignal) {
    return this.shippingService.getQuotes(data.orderId, signal);
  }
}
`),cf()()(),Aa(756,`p`),bT(757,`Add `),Aa(758,`code`),bT(759,`ShippingHandlers`),cf(),bT(760,` to the `),Aa(761,`code`),bT(762,`controllers`),cf(),bT(763,` of `),Aa(764,`code`),bT(765,`ShippingModule`),cf(),bT(766,`.`),cf(),Aa(767,`p`),bT(768,`A message has no `),Aa(769,`code`),bT(770,`GET`),cf(),bT(771,` or `),Aa(772,`code`),bT(773,`POST`),cf(),bT(774,` to tell whether it's safe to repeat, so on message, event and WebSocket handlers, only a `),Aa(775,`code`),bT(776,`@Retry()`),cf(),bT(777,` on the handler itself turns retries on. A preset's retry, or a class-level `),Aa(778,`code`),bT(779,`@Retry()`),cf(),bT(780,` without `),Aa(781,`code`),bT(782,`idempotent: true`),cf(),bT(783,`, doesn't apply there on its own, so reusing the `),Aa(784,`code`),bT(785,`carrier`),cf(),bT(786,` preset can't silently re-run a handler with side effects. Here the handler's `),Aa(787,`code`),bT(788,`@Retry()`),cf(),bT(789,` opts in, and its `),Aa(790,`code`),bT(791,`attempts: 3`),cf(),bT(792,` raises the preset's 2 attempts to 3. Only use it on handlers that are safe to run twice. Errors reach the caller as an `),Aa(793,`code`),bT(794,`RpcException`),cf(),bT(795,` with a structured payload:`),cf(),Aa(796,`pre`)(797,`code`,28),bT(798,`
{ "status": "error", "code": "CIRCUIT_OPEN", "statusCode": 503, "message": "Service temporarily unavailable", "retryAfter": 30 }
`),cf()(),Aa(799,`p`),bT(800,`A timeout has `),Aa(801,`code`),bT(802,`"code": "TIMEOUT"`),cf(),bT(803,` and `),Aa(804,`code`),bT(805,`"statusCode": 504`),cf(),bT(806,`, and no `),Aa(807,`code`),bT(808,`retryAfter`),cf(),bT(809,`. In a hybrid application, connect the microservice with `),Aa(810,`code`),bT(811,`inheritAppConfig: true`),cf(),bT(812,`, or the global interceptor won't reach its handlers (see `),Aa(813,`a`,36),bT(814,`Hybrid application`),cf(),bT(815,`):`),cf(),Aa(816,`app-copy-button`,20)(817,`span`,21),bT(818),LT(819,`extension`),Wa(820,`app-tabs`,null,12),cf(),Aa(822,`pre`)(823,`code`,22),bT(824,`
import { NestFactory } from '@nestjs/core';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(
    { transport: Transport.TCP, options: { port: 3001 } },
    { inheritAppConfig: true },
  );
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(825,`p`),bT(826,`GraphQL resolvers work the same way. If your application serves GraphQL, add a resolver to `),Aa(827,`code`),bT(828,`ShippingModule`),cf(),bT(829,`'s providers:`),cf(),Aa(830,`app-copy-button`,20)(831,`span`,21),bT(832),LT(833,`extension`),Wa(834,`app-tabs`,null,13),cf(),Aa(836,`pre`)(837,`code`,22),bT(838,`
import { Args, Field, Float, Int, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { Resilience, Signal, Timeout } from '@nestjs/resilience';
import { ShippingService } from './shipping.service.js';

@ObjectType('ShippingQuote')
export class ShippingQuoteModel {
  @Field() service: string;
  @Field(() => Float) price: number;
  @Field(() => Int) estimatedDays: number;
}

@Resolver(() => ShippingQuoteModel)
export class ShippingResolver {
  constructor(private readonly shippingService: ShippingService) {}

  @Query(() => [ShippingQuoteModel], { nullable: true })
  @Resilience('carrier')
  @Timeout('1.5s')
  shippingQuotes(@Args('orderId') orderId: string, @Signal() signal: AbortSignal) {
    return this.shippingService.getQuotes(orderId, signal);
  }
}
`),cf()()(),Aa(839,`p`),bT(840,`Queries are retried, while mutations need `),Aa(841,`code`),bT(842,`idempotent: true`),cf(),bT(843,`, just like `),Aa(844,`code`),bT(845,`POST`),cf(),bT(846,` requests. A failure fails only its own field. The response still has status 200, and the error carries the code in `),Aa(847,`code`),bT(848,`extensions`),cf(),bT(849,`:`),cf(),Aa(850,`pre`)(851,`code`,37),bT(852,`
{ shippingQuotes(orderId: "1001") { service price } }
`),cf()(),Aa(853,`pre`)(854,`code`,28),bT(855,`
{
  "errors": [
    {
      "message": "The operation timed out",
      "locations": [{ "line": 1, "column": 3 }],
      "path": ["shippingQuotes"],
      "extensions": { "code": "TIMEOUT", "httpStatus": 504 }
    }
  ],
  "data": { "shippingQuotes": null }
}
`),cf()(),Aa(856,`p`),bT(857,`An open breaker reports `),Aa(858,`code`),bT(859,`"code": "CIRCUIT_OPEN"`),cf(),bT(860,`, `),Aa(861,`code`),bT(862,`"httpStatus": 503`),cf(),bT(863,` and `),Aa(864,`code`),bT(865,`"retryAfter"`),cf(),bT(866,` in seconds. The package sets `),Aa(867,`code`),bT(868,`httpStatus`),cf(),bT(869,` rather than Apollo's `),Aa(870,`code`),bT(871,`extensions.http`),cf(),bT(872,`, because Apollo would apply `),Aa(873,`code`),bT(874,`extensions.http`),cf(),bT(875,` to the whole response, although only one field failed.`),cf(),Aa(876,`h4`,38)(877,`span`),bT(878,`Observe breaker transitions`),cf()(),Aa(879,`p`),bT(880,`Every policy emits typed events: `),Aa(881,`code`),bT(882,`retry`),cf(),bT(883,`, `),Aa(884,`code`),bT(885,`timeout`),cf(),bT(886,`, `),Aa(887,`code`),bT(888,`circuit-open`),cf(),bT(889,`, `),Aa(890,`code`),bT(891,`circuit-half-open`),cf(),bT(892,`, `),Aa(893,`code`),bT(894,`circuit-closed`),cf(),bT(895,`, `),Aa(896,`code`),bT(897,`circuit-rejected`),cf(),bT(898,`, `),Aa(899,`code`),bT(900,`bulkhead-rejected`),cf(),bT(901,`, `),Aa(902,`code`),bT(903,`rate-limited`),cf(),bT(904,` and `),Aa(905,`code`),bT(906,`fallback`),cf(),bT(907,`. Each event carries the `),Aa(908,`code`),bT(909,`policy`),cf(),bT(910,` name, and its `),Aa(911,`code`),bT(912,`source`),cf(),bT(913,` when there is one: the entrypoint (such as `),Aa(914,`code`),bT(915,`ShippingController.getQuotes`),cf(),bT(916,`) or the label passed to `),Aa(917,`code`),bT(918,`execute()`),cf(),bT(919,`. Inject `),Aa(920,`code`),bT(921,`ResilienceEvents`),cf(),bT(922,` to get them: its `),Aa(923,`code`),bT(924,`events$`),cf(),bT(925,` is an RxJS stream of every event from this application's policies. Log the ones someone should see:`),cf(),Aa(926,`app-copy-button`,20)(927,`span`,21),bT(928),LT(929,`extension`),Wa(930,`app-tabs`,null,14),cf(),Aa(932,`pre`)(933,`code`,22),bT(934,`
import { Injectable, Logger, type OnModuleInit } from '@nestjs/common';
import { ResilienceEvents } from '@nestjs/resilience';

@Injectable()
export class ResilienceLogger implements OnModuleInit {
  private readonly logger = new Logger('Resilience');

  constructor(private readonly resilienceEvents: ResilienceEvents) {}

  onModuleInit() {
    this.resilienceEvents.events$.subscribe((event) => {
      switch (event.type) {
        case 'circuit-open':
        case 'circuit-half-open':
        case 'circuit-closed':
          this.logger.warn(\`Circuit "\${event.policy}" went from \${event.from} to \${event.to}\`);
          break;
        case 'bulkhead-rejected':
          this.logger.warn(\`\${event.source} is at capacity (\${event.active} running, \${event.queued} queued)\`);
          break;
        case 'fallback':
          this.logger.log(\`\${event.source} answered with its fallback\`);
          break;
      }
    });
  }
}
`),cf()()(),Aa(935,`p`),bT(936,`Add `),Aa(937,`code`),bT(938,`ResilienceLogger`),cf(),bT(939,` to the `),Aa(940,`code`),bT(941,`providers`),cf(),bT(942,` array of `),Aa(943,`code`),bT(944,`AppModule`),cf(),bT(945,`.`),cf(),Aa(946,`p`),bT(947,`Every policy also publishes each event on a `),Aa(948,`a`,39),bT(949,`diagnostics channel`),cf(),bT(950,` of its own, such as `),Aa(951,`code`),bT(952,`nestjs:resilience:timeout`),cf(),bT(953,` or `),Aa(954,`code`),bT(955,`nestjs:resilience:circuit-open`),cf(),bT(956,`, including policies created without the module. Metrics and tracing tools can subscribe without any dependency on this package. `),Aa(957,`code`),bT(958,`ResilienceTimeoutEvent`),cf(),bT(959,` is the type of one channel's messages, and `),Aa(960,`code`),bT(961,`ResilienceEvent`),cf(),bT(962,` the union of them all:`),cf(),Aa(963,`app-copy-button`)(964,`pre`)(965,`code`,22),bT(966,`
import { subscribe } from 'node:diagnostics_channel';
import type { ResilienceTimeoutEvent } from '@nestjs/resilience';

const timeouts = new Map<string, number>();

subscribe('nestjs:resilience:timeout', (message) => {
  const { policy } = message as ResilienceTimeoutEvent;
  timeouts.set(policy, (timeouts.get(policy) ?? 0) + 1);
});
`),cf()()(),Aa(967,`p`)(968,`a`,40),bT(969,`NestJS Observe`),cf(),bT(970,` already reads outbound HTTP from Node's diagnostics channels (see `),Aa(971,`a`,41),bT(972,`Database queries and outbound HTTP`),cf(),bT(973,`). It doesn't subscribe to the `),Aa(974,`code`),bT(975,`nestjs:resilience`),cf(),bT(976,` channels yet. Once it does, it can attach retries and timeouts to the request's span, chart breaker state per name, and alert on bulkhead rejections, with no code in either package that depends on the other.`),cf(),Aa(977,`h4`,42)(978,`span`),bT(979,`Try it`),cf()(),Aa(980,`p`),bT(981,`Start the application with `),Aa(982,`code`),bT(983,`CARRIER_URL`),cf(),bT(984,` pointing at a carrier stub you control, such as a mock server or a few lines of `),Aa(985,`code`),bT(986,`node:http`),cf(),bT(987,`. While the carrier answers, checkout gets live quotes:`),cf(),Aa(988,`pre`)(989,`code`,23),bT(990,`
$ curl "localhost:3000/shipping/quotes?orderId=1001"
[{"service":"ground","price":6.9,"estimatedDays":4},{"service":"express","price":14.5,"estimatedDays":1}]
`),cf()(),Aa(991,`p`),bT(992,`Now make the stub hang. The same request answers `),Aa(993,`code`),bT(994,`504`),cf(),bT(995,` after about 3 seconds, and the stub sees both of its requests cancelled:`),cf(),Aa(996,`pre`)(997,`code`,23),bT(998,`
$ curl "localhost:3000/shipping/quotes?orderId=1001"
{"statusCode":504,"error":"Gateway Timeout","message":"The operation timed out","code":"TIMEOUT"}
`),cf()(),Aa(999,`p`),bT(1e3,`Keep sending it. Each request records two failed attempts. On the fifth slow request, the breaker has 10 calls in its window and 9 of them failed. The breaker opens, the request's second attempt is rejected, and the fallback answers. The application logs:`),cf(),Aa(1001,`pre`)(1002,`code`,23),bT(1003,`
WARN [Resilience] Circuit "carrier" went from closed to open
LOG [Resilience] ShippingController.getQuotes answered with its fallback
`),cf()(),Aa(1004,`p`),bT(1005,`From now on, booking a shipment fails fast without calling the carrier:`),cf(),Aa(1006,`pre`)(1007,`code`,23),bT(1008,`
$ curl -i -X POST localhost:3000/shipping/shipments \\
    -H "Content-Type: application/json" \\
    -H "Idempotency-Key: 5f1c2a9e-shipment-1001" \\
    -d '{"orderId":"1001"}'
HTTP/1.1 503 Service Unavailable
Retry-After: 30

{"statusCode":503,"error":"Service Unavailable","message":"Service temporarily unavailable","code":"CIRCUIT_OPEN"}
`),cf()(),Aa(1009,`p`),bT(1010,`Quotes, meanwhile, answer immediately with the flat rate:`),cf(),Aa(1011,`pre`)(1012,`code`,23),bT(1013,`
$ curl "localhost:3000/shipping/quotes?orderId=1002"
[{"service":"flat-rate","price":4.99,"estimatedDays":5}]
`),cf()(),Aa(1014,`p`),bT(1015,`Let the stub answer again and wait 30 seconds. The next quote request is the probe. It succeeds, so the breaker closes and checkout shows live quotes again:`),cf(),Aa(1016,`pre`)(1017,`code`,23),bT(1018,`
WARN [Resilience] Circuit "carrier" went from open to half-open
WARN [Resilience] Circuit "carrier" went from half-open to closed
`),cf()(),Aa(1019,`p`),bT(1020,`Repeating the booking with the same `),Aa(1021,`code`),bT(1022,`Idempotency-Key`),cf(),bT(1023,` now creates the shipment and returns `),Aa(1024,`code`),bT(1025,`201`),cf(),bT(1026,`. The earlier 503 released the key.`),cf(),Aa(1027,`h4`,43)(1028,`span`),bT(1029,`Testing`),cf()(),Aa(1030,`p`),bT(1031,`Resilience behavior is worth testing, but not by waiting 30 seconds for a breaker. Replace `),Aa(1032,`code`),bT(1033,`CarrierClient`),cf(),bT(1034,` with a fake, and use Vitest's fake timers for the clock. Fake only `),Aa(1035,`code`),bT(1036,`setTimeout`),cf(),bT(1037,`, `),Aa(1038,`code`),bT(1039,`clearTimeout`),cf(),bT(1040,` and `),Aa(1041,`code`),bT(1042,`Date`),cf(),bT(1043,`, so that the HTTP server and supertest keep working with real I/O:`),cf(),Aa(1044,`app-copy-button`,20)(1045,`span`,21),bT(1046),LT(1047,`extension`),Wa(1048,`app-tabs`,null,15),cf(),Aa(1050,`pre`)(1051,`code`,22),bT(1052,`
import type { INestApplication } from '@nestjs/common';
import { ResilienceService } from '@nestjs/resilience';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AppModule } from '../src/app.module.js';
import { CarrierClient } from '../src/shipping/carrier.client.js';

const liveQuotes = [{ service: 'ground', price: 6.9, estimatedDays: 4 }];

/** A carrier call that only ends when its signal aborts. */
const hang = (_order: unknown, signal: AbortSignal) =>
  new Promise((_, reject) => signal.addEventListener('abort', () => reject(signal.reason)));

describe('Shipping quotes', () => {
  let app: INestApplication;
  const carrier = { getQuotes: vi.fn(), createShipment: vi.fn() };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(CarrierClient)
      .useValue(carrier)
      .compile();
    app = moduleRef.createNestApplication({ logger: false });
    await app.listen(0, '127.0.0.1');
    // Fake only timers and Date: the HTTP server and supertest keep real I/O.
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'Date'] });
  });

  afterEach(async () => {
    vi.useRealTimers();
    vi.resetAllMocks();
    await app.close();
  });

  it('answers 504 and cancels the carrier call when the carrier hangs', async () => {
    carrier.getQuotes.mockImplementation(hang);

    // .then() sends the request now; the clock only moves when we advance it.
    const response = request(app.getHttpServer())
      .get('/shipping/quotes?orderId=1001')
      .then((res) => res);
    await vi.waitFor(() => expect(carrier.getQuotes).toHaveBeenCalled());
    await vi.advanceTimersByTimeAsync(5_000); // two attempts of 1.5 s, plus backoff

    expect((await response).status).toBe(504);
    expect(carrier.getQuotes).toHaveBeenCalledTimes(2);
    const [, signal] = carrier.getQuotes.mock.calls[0];
    expect(signal.aborted).toBe(true);
  });

  it('serves flat rates while the breaker is open, then recovers', async () => {
    carrier.getQuotes.mockResolvedValue(liveQuotes);
    const breaker = app.get(ResilienceService).circuitBreaker('carrier');
    breaker.trip();

    const fallback = await request(app.getHttpServer()).get('/shipping/quotes?orderId=1001');
    expect(fallback.body).toEqual([
      { service: 'flat-rate', price: 4.99, estimatedDays: 5 },
    ]);
    expect(carrier.getQuotes).not.toHaveBeenCalled();

    vi.advanceTimersByTime(30_000); // openDuration: the next call is a probe
    const live = await request(app.getHttpServer()).get('/shipping/quotes?orderId=1001');
    expect(live.body).toEqual(liveQuotes);
    expect(breaker.state).toBe('closed');
  });
});
`),cf()()(),Aa(1053,`p`),bT(1054,`A few things make this work:`),cf(),Aa(1055,`ul`)(1056,`li`)(1057,`code`),bT(1058,`vi.waitFor()`),cf(),bT(1059,` waits until the request has actually reached the carrier. Only then are there timers to advance. With fake timers enabled, `),Aa(1060,`code`),bT(1061,`vi.waitFor()`),cf(),bT(1062,` also moves the clock by its polling interval (50 ms), which stays well within the 1.5-second budget.`),cf(),Aa(1063,`li`)(1064,`code`),bT(1065,`vi.advanceTimersByTimeAsync()`),cf(),bT(1066,` fires the timeouts and the backoff in order, and lets the promises in between settle.`),cf(),Aa(1067,`li`)(1068,`code`),bT(1069,`trip()`),cf(),bT(1070,` opens the breaker directly, so you don't have to produce ten failures to test the open state. Because the breaker checks `),Aa(1071,`code`),bT(1072,`openDuration`),cf(),bT(1073,` against `),Aa(1074,`code`),bT(1075,`Date`),cf(),bT(1076,` on the next call, moving the fake clock forward is enough to make that call a probe.`),cf(),Aa(1077,`li`),bT(1078,`Breakers, bulkheads and outbound rate limits belong to the application that created them, so every test application starts with fresh state.`),cf(),Aa(1079,`li`),bT(1080,`To test with different settings, such as a shorter `),Aa(1081,`code`),bT(1082,`openDuration`),cf(),bT(1083,`, override the module's options with `),Aa(1084,`code`),bT(1085,`overrideProvider(RESILIENCE_MODULE_OPTIONS)`),cf(),bT(1086,`.`),cf()(),Aa(1087,`p`),bT(1088,`See `),Aa(1089,`a`,44),bT(1090,`End-to-end testing`),cf(),bT(1091,` for the testing basics.`),cf(),Aa(1092,`h4`,45)(1093,`span`),bT(1094,`Production checklist`),cf()(),Aa(1095,`ul`)(1096,`li`)(1097,`strong`),bT(1098,`Budget time end to end.`),cf(),bT(1099,` Time per attempt times the number of attempts, plus backoff, must fit inside your client's timeout and your load balancer's. For the quotes route, that's about 3.2 seconds.`),cf(),Aa(1100,`li`)(1101,`strong`),bT(1102,`Retry only what is safe.`),cf(),bT(1103,` Set `),Aa(1104,`code`),bT(1105,`idempotent: true`),cf(),bT(1106,` only when a second run within the same request is harmless. Pair it with `),Aa(1107,`code`),bT(1108,`@Idempotent()`),cf(),bT(1109,` to handle client retries.`),cf(),Aa(1110,`li`)(1111,`strong`),bT(1112,`Pass the signal to every I/O call.`),cf(),bT(1113,` Without it, timed-out work keeps running in the background, unseen by the bulkhead that admitted it.`),cf(),Aa(1114,`li`)(1115,`strong`),bT(1116,`Retry at one layer.`),cf(),bT(1117,` Retry at the entrypoint or in the service policy, not both, and turn off retries in SDKs and HTTP clients underneath.`),cf(),Aa(1118,`li`)(1119,`strong`),bT(1120,`Tune each breaker to its dependency.`),cf(),bT(1121,` Make `),Aa(1122,`code`),bT(1123,`minimumCalls`),cf(),bT(1124,` high enough that two errors at night don't open it, set `),Aa(1125,`code`),bT(1126,`openDuration`),cf(),bT(1127,` close to how long the dependency usually takes to recover, and use `),Aa(1128,`code`),bT(1129,`recordIf`),cf(),bT(1130,` to leave out errors that aren't outages.`),cf(),Aa(1131,`li`)(1132,`strong`),bT(1133,`Give every breaker a timeout.`),cf(),bT(1134,` A breaker learns only from calls that finish. A call that hangs is never counted, and a hanging probe keeps a half-open breaker rejecting everything else.`),cf(),Aa(1135,`li`)(1136,`strong`),bT(1137,`Remember that state is per process.`),cf(),bT(1138,` With several instances, each one has its own breakers, bulkheads and outbound rate limits, and a restart starts them fresh. Each breaker opens on its own, bulkhead limits apply per instance, and an outbound rate limit allows `),Aa(1139,`code`),bT(1140,`limit`),cf(),bT(1141,` calls per instance.`),cf(),Aa(1142,`li`)(1143,`strong`),bT(1144,`Keep fallbacks cheap and independent.`),cf(),bT(1145,` A fallback must never call the dependency it stands in for.`),cf(),Aa(1146,`li`)(1147,`strong`),bT(1148,`Alert on transitions.`),cf(),bT(1149,` A breaker opening and bulkheads rejecting requests are the signals to page on.`),cf(),Aa(1150,`li`)(1151,`strong`),bT(1152,`Register an idempotency store.`),cf(),bT(1153,` Without one, `),Aa(1154,`code`),bT(1155,`@Idempotent()`),cf(),bT(1156,` keeps its records in each process's memory, lost on every restart or deploy, and production refuses to start. See `),Aa(1157,`a`,46),bT(1158,`Store keys in PostgreSQL`),cf(),bT(1159,` in the idempotency tutorial.`),cf(),Aa(1160,`li`)(1161,`strong`),bT(1162,`Wire the modules correctly.`),cf(),bT(1163,` Import `),Aa(1164,`code`),bT(1165,`ResilienceModule`),cf(),bT(1166,` once, in the root module, and `),Aa(1167,`code`),bT(1168,`IdempotencyModule`),cf(),bT(1169,` before it. Use `),Aa(1170,`code`),bT(1171,`inheritAppConfig: true`),cf(),bT(1172,` for hybrid applications.`),cf(),Aa(1173,`li`)(1174,`strong`),bT(1175,`Honor Retry-After in your clients.`),cf(),bT(1176,` It tells them when trying again can succeed.`),cf()(),Aa(1177,`h4`,47)(1178,`span`),bT(1179,`Reference`),cf()(),Aa(1180,`h5`,48)(1181,`span`),bT(1182,`Module options`),cf()(),Aa(1183,`p`)(1184,`code`),bT(1185,`ResilienceModule.forRoot()`),cf(),bT(1186,` takes these options. `),Aa(1187,`code`),bT(1188,`forRootAsync()`),cf(),bT(1189,` builds the same object from a factory, a class implementing `),Aa(1190,`code`),bT(1191,`ResilienceOptionsFactory`),cf(),bT(1192,`, or an existing provider.`),cf(),Aa(1193,`table`)(1194,`thead`)(1195,`tr`)(1196,`th`),bT(1197,`Option`),cf(),Aa(1198,`th`),bT(1199,`Type`),cf(),Aa(1200,`th`),bT(1201,`Default`),cf(),Aa(1202,`th`),bT(1203,`Description`),cf()()(),Aa(1204,`tbody`)(1205,`tr`)(1206,`td`)(1207,`code`),bT(1208,`defaults`),cf()(),Aa(1209,`td`)(1210,`code`),bT(1211,`ResilienceDefaults`),cf()(),Aa(1212,`td`),bT(1213,`none`),cf(),Aa(1214,`td`),bT(1215,`Field defaults for `),Aa(1216,`code`),bT(1217,`retry`),cf(),bT(1218,`, `),Aa(1219,`code`),bT(1220,`timeout`),cf(),bT(1221,`, `),Aa(1222,`code`),bT(1223,`circuitBreaker`),cf(),bT(1224,` and `),Aa(1225,`code`),bT(1226,`bulkhead`),cf(),bT(1227,`. They fill in stages that a decorator or preset turns on, and never turn a stage on. See `),Aa(1228,`a`,49),bT(1229,`Register the module`),cf(),bT(1230,`.`),cf()(),Aa(1231,`tr`)(1232,`td`)(1233,`code`),bT(1234,`presets`),cf()(),Aa(1235,`td`)(1236,`code`),bT(1237,`Record<string, ResiliencePreset>`),cf()(),Aa(1238,`td`),bT(1239,`none`),cf(),Aa(1240,`td`),bT(1241,`Named sets of stages: `),Aa(1242,`code`),bT(1243,`retry`),cf(),bT(1244,`, `),Aa(1245,`code`),bT(1246,`timeout`),cf(),bT(1247,`, `),Aa(1248,`code`),bT(1249,`circuitBreaker`),cf(),bT(1250,`, `),Aa(1251,`code`),bT(1252,`bulkhead`),cf(),bT(1253,`, `),Aa(1254,`code`),bT(1255,`outboundRateLimit`),cf(),bT(1256,` and `),Aa(1257,`code`),bT(1258,`fallback`),cf(),bT(1259,`. A preset's breaker, bulkhead and outbound rate limit are shared under the preset's name.`),cf()(),Aa(1260,`tr`)(1261,`td`)(1262,`code`),bT(1263,`mapErrors`),cf()(),Aa(1264,`td`)(1265,`code`),bT(1266,`boolean`),cf()(),Aa(1267,`td`)(1268,`code`),bT(1269,`true`),cf()(),Aa(1270,`td`),bT(1271,`Turns resilience errors thrown by any handler, with or without decorators, into the transport's error, as listed under Errors below.`),cf()(),Aa(1272,`tr`)(1273,`td`)(1274,`code`),bT(1275,`isGlobal`),cf()(),Aa(1276,`td`)(1277,`code`),bT(1278,`boolean`),cf()(),Aa(1279,`td`)(1280,`code`),bT(1281,`true`),cf()(),Aa(1282,`td`),bT(1283,`Registers the module globally. Register it once, in the root module.`),cf()()()(),Aa(1284,`p`),bT(1285,`Every time-valued option takes milliseconds or a string such as `),Aa(1286,`code`),bT(1287,`'200ms'`),cf(),bT(1288,`, `),Aa(1289,`code`),bT(1290,`'2s'`),cf(),bT(1291,` or `),Aa(1292,`code`),bT(1293,`'15m'`),cf(),bT(1294,`. The options' injection token is `),Aa(1295,`code`),bT(1296,`RESILIENCE_MODULE_OPTIONS`),cf(),bT(1297,`.`),cf(),Aa(1298,`h5`,50)(1299,`span`),bT(1300,`Decorators`),cf()(),Aa(1301,`p`),bT(1302,`Each decorator works on a handler or on a class, except `),Aa(1303,`code`),bT(1304,`@Signal()`),cf(),bT(1305,`, which is a parameter decorator.`),cf(),Aa(1306,`table`)(1307,`thead`)(1308,`tr`)(1309,`th`),bT(1310,`Decorator`),cf(),Aa(1311,`th`),bT(1312,`Options (default)`),cf()()(),Aa(1313,`tbody`)(1314,`tr`)(1315,`td`)(1316,`code`),bT(1317,`@Retry(options)`),cf()(),Aa(1318,`td`)(1319,`code`),bT(1320,`attempts`),cf(),bT(1321,` (3, including the first; `),Aa(1322,`code`),bT(1323,`Infinity`),cf(),bT(1324,` retries until the signal aborts), `),Aa(1325,`code`),bT(1326,`backoff`),cf(),bT(1327,`, `),Aa(1328,`code`),bT(1329,`retryIf(error, attempt)`),cf(),bT(1330,` (every error except client errors), `),Aa(1331,`code`),bT(1332,`idempotent`),cf(),bT(1333,` (see `),Aa(1334,`a`,24),bT(1335,`Retry a POST safely`),cf(),bT(1336,`). `),Aa(1337,`code`),bT(1338,`@Retry(5)`),cf(),bT(1339,` sets `),Aa(1340,`code`),bT(1341,`attempts`),cf(),bT(1342,`, and `),Aa(1343,`code`),bT(1344,`@Retry(false)`),cf(),bT(1345,` turns off an inherited retry.`),cf()(),Aa(1346,`tr`)(1347,`td`)(1348,`code`),bT(1349,`backoff`),cf(),bT(1350,` (of `),Aa(1351,`code`),bT(1352,`@Retry()`),cf(),bT(1353,`)`),cf(),Aa(1354,`td`)(1355,`code`),bT(1356,`delay`),cf(),bT(1357,` (`),Aa(1358,`code`),bT(1359,`'200ms'`),cf(),bT(1360,`), `),Aa(1361,`code`),bT(1362,`factor`),cf(),bT(1363,` (2), `),Aa(1364,`code`),bT(1365,`maxDelay`),cf(),bT(1366,` (`),Aa(1367,`code`),bT(1368,`'30s'`),cf(),bT(1369,`), `),Aa(1370,`code`),bT(1371,`jitter`),cf(),bT(1372,`: `),Aa(1373,`code`),bT(1374,`'full'`),cf(),bT(1375,`, `),Aa(1376,`code`),bT(1377,`'equal'`),cf(),bT(1378,` or `),Aa(1379,`code`),bT(1380,`'none'`),cf(),bT(1381,` (`),Aa(1382,`code`),bT(1383,`'full'`),cf(),bT(1384,`, or `),Aa(1385,`code`),bT(1386,`'none'`),cf(),bT(1387,` when `),Aa(1388,`code`),bT(1389,`factor`),cf(),bT(1390,` is 1). Or a function of the failed attempt and its error that returns a duration.`),cf()(),Aa(1391,`tr`)(1392,`td`)(1393,`code`),bT(1394,`@Timeout(duration)`),cf()(),Aa(1395,`td`),bT(1396,`Budget per attempt. Without an argument, the preset's or class's timeout, then `),Aa(1397,`code`),bT(1398,`defaults.timeout`),cf(),bT(1399,`.`),cf()(),Aa(1400,`tr`)(1401,`td`)(1402,`code`),bT(1403,`@CircuitBreaker(options)`),cf()(),Aa(1404,`td`)(1405,`code`),bT(1406,`name`),cf(),bT(1407,`, `),Aa(1408,`code`),bT(1409,`failureRateThreshold`),cf(),bT(1410,` (50, a percentage), `),Aa(1411,`code`),bT(1412,`minimumCalls`),cf(),bT(1413,` (10), `),Aa(1414,`code`),bT(1415,`slidingWindow`),cf(),bT(1416,` (the last 20 calls: `),Aa(1417,`code`),bT(1418,`type`),cf(),bT(1419,` is `),Aa(1420,`code`),bT(1421,`'count'`),cf(),bT(1422,` or `),Aa(1423,`code`),bT(1424,`'time'`),cf(),bT(1425,`, with a `),Aa(1426,`code`),bT(1427,`size`),cf(),bT(1428,`), `),Aa(1429,`code`),bT(1430,`openDuration`),cf(),bT(1431,` (`),Aa(1432,`code`),bT(1433,`'30s'`),cf(),bT(1434,`), `),Aa(1435,`code`),bT(1436,`halfOpenMaxCalls`),cf(),bT(1437,` (1), `),Aa(1438,`code`),bT(1439,`recordIf(error)`),cf(),bT(1440,` (every error except client errors). A string is a breaker name. See `),Aa(1441,`a`,51),bT(1442,`Fail fast with a circuit breaker`),cf(),bT(1443,`.`),cf()(),Aa(1444,`tr`)(1445,`td`)(1446,`code`),bT(1447,`@Bulkhead(options)`),cf()(),Aa(1448,`td`)(1449,`code`),bT(1450,`name`),cf(),bT(1451,`, `),Aa(1452,`code`),bT(1453,`maxConcurrent`),cf(),bT(1454,` (10), `),Aa(1455,`code`),bT(1456,`maxQueue`),cf(),bT(1457,` (0), `),Aa(1458,`code`),bT(1459,`queueTimeout`),cf(),bT(1460,` (no limit). A string is a bulkhead name. See `),Aa(1461,`a`,52),bT(1462,`Cap concurrent CSV exports with a bulkhead`),cf(),bT(1463,`.`),cf()(),Aa(1464,`tr`)(1465,`td`)(1466,`code`),bT(1467,`@Fallback(method, options)`),cf()(),Aa(1468,`td`),bT(1469,`A method name on the same class, or a function, called with the error and the `),Aa(1470,`code`),bT(1471,`ExecutionContext`),cf(),bT(1472,`. `),Aa(1473,`code`),bT(1474,`handleIf(error)`),cf(),bT(1475,` (every error except client errors).`),cf()(),Aa(1476,`tr`)(1477,`td`)(1478,`code`),bT(1479,`@Resilience(preset)`),cf()(),Aa(1480,`td`),bT(1481,`Applies a preset from `),Aa(1482,`code`),bT(1483,`presets`),cf(),bT(1484,`, stage by stage.`),cf()(),Aa(1485,`tr`)(1486,`td`)(1487,`code`),bT(1488,`@Signal()`),cf()(),Aa(1489,`td`),bT(1490,`The current attempt's `),Aa(1491,`code`),bT(1492,`AbortSignal`),cf(),bT(1493,`.`),cf()()()(),Aa(1494,`p`),bT(1495,`A preset's `),Aa(1496,`code`),bT(1497,`outboundRateLimit`),cf(),bT(1498,` takes `),Aa(1499,`code`),bT(1500,`limit`),cf(),bT(1501,` (calls per `),Aa(1502,`code`),bT(1503,`interval`),cf(),bT(1504,`), `),Aa(1505,`code`),bT(1506,`interval`),cf(),bT(1507,` and `),Aa(1508,`code`),bT(1509,`maxWait`),cf(),bT(1510,` (0: reject right away).`),cf(),Aa(1511,`p`)(1512,`code`),bT(1513,`ResilienceService`),cf(),bT(1514,` provides `),Aa(1515,`code`),bT(1516,`preset(name)`),cf(),bT(1517,`, `),Aa(1518,`code`),bT(1519,`create(options, name)`),cf(),bT(1520,`, `),Aa(1521,`code`),bT(1522,`circuitBreaker(name)`),cf(),bT(1523,`, `),Aa(1524,`code`),bT(1525,`bulkhead(name)`),cf(),bT(1526,`, `),Aa(1527,`code`),bT(1528,`circuitBreakers()`),cf(),bT(1529,` and `),Aa(1530,`code`),bT(1531,`bulkheads()`),cf(),bT(1532,`. See `),Aa(1533,`a`,53),bT(1534,`Use the same policies inside services`),cf(),bT(1535,`.`),cf(),Aa(1536,`h5`,54)(1537,`span`),bT(1538,`Events`),cf()(),Aa(1539,`p`),bT(1540,`Every event is published on `),Aa(1541,`code`),bT(1542,`ResilienceEvents.events$`),cf(),bT(1543,` and on the diagnostics channel `),Aa(1544,`code`),bT(1545,`nestjs:resilience:<type>`),cf(),bT(1546,`. Each payload has `),Aa(1547,`code`),bT(1548,`type`),cf(),bT(1549,`, `),Aa(1550,`code`),bT(1551,`policy`),cf(),bT(1552,` and, when there is one, `),Aa(1553,`code`),bT(1554,`source`),cf(),bT(1555,` (see `),Aa(1556,`a`,55),bT(1557,`Observe breaker transitions`),cf(),bT(1558,`).`),cf(),Aa(1559,`table`)(1560,`thead`)(1561,`tr`)(1562,`th`),bT(1563,`Type`),cf(),Aa(1564,`th`),bT(1565,`Payload type`),cf(),Aa(1566,`th`),bT(1567,`Other fields`),cf()()(),Aa(1568,`tbody`)(1569,`tr`)(1570,`td`)(1571,`code`),bT(1572,`retry`),cf()(),Aa(1573,`td`)(1574,`code`),bT(1575,`ResilienceRetryEvent`),cf()(),Aa(1576,`td`)(1577,`code`),bT(1578,`attempt`),cf(),bT(1579,` (the one that failed, 1-based), `),Aa(1580,`code`),bT(1581,`delayMs`),cf(),bT(1582,` (the wait before the next one), `),Aa(1583,`code`),bT(1584,`error`),cf()()(),Aa(1585,`tr`)(1586,`td`)(1587,`code`),bT(1588,`timeout`),cf()(),Aa(1589,`td`)(1590,`code`),bT(1591,`ResilienceTimeoutEvent`),cf()(),Aa(1592,`td`)(1593,`code`),bT(1594,`timeoutMs`),cf()()(),Aa(1595,`tr`)(1596,`td`)(1597,`code`),bT(1598,`circuit-open`),cf()(),Aa(1599,`td`)(1600,`code`),bT(1601,`ResilienceCircuitOpenEvent`),cf()(),Aa(1602,`td`)(1603,`code`),bT(1604,`from`),cf(),bT(1605,`, `),Aa(1606,`code`),bT(1607,`to`),cf()()(),Aa(1608,`tr`)(1609,`td`)(1610,`code`),bT(1611,`circuit-half-open`),cf()(),Aa(1612,`td`)(1613,`code`),bT(1614,`ResilienceCircuitHalfOpenEvent`),cf()(),Aa(1615,`td`)(1616,`code`),bT(1617,`from`),cf(),bT(1618,`, `),Aa(1619,`code`),bT(1620,`to`),cf()()(),Aa(1621,`tr`)(1622,`td`)(1623,`code`),bT(1624,`circuit-closed`),cf()(),Aa(1625,`td`)(1626,`code`),bT(1627,`ResilienceCircuitClosedEvent`),cf()(),Aa(1628,`td`)(1629,`code`),bT(1630,`from`),cf(),bT(1631,`, `),Aa(1632,`code`),bT(1633,`to`),cf()()(),Aa(1634,`tr`)(1635,`td`)(1636,`code`),bT(1637,`circuit-rejected`),cf()(),Aa(1638,`td`)(1639,`code`),bT(1640,`ResilienceCircuitRejectedEvent`),cf()(),Aa(1641,`td`)(1642,`code`),bT(1643,`retryAfterMs`),cf()()(),Aa(1644,`tr`)(1645,`td`)(1646,`code`),bT(1647,`bulkhead-rejected`),cf()(),Aa(1648,`td`)(1649,`code`),bT(1650,`ResilienceBulkheadRejectedEvent`),cf()(),Aa(1651,`td`)(1652,`code`),bT(1653,`reason`),cf(),bT(1654,` (`),Aa(1655,`code`),bT(1656,`'full'`),cf(),bT(1657,` or `),Aa(1658,`code`),bT(1659,`'queue-timeout'`),cf(),bT(1660,`), `),Aa(1661,`code`),bT(1662,`active`),cf(),bT(1663,`, `),Aa(1664,`code`),bT(1665,`queued`),cf()()(),Aa(1666,`tr`)(1667,`td`)(1668,`code`),bT(1669,`rate-limited`),cf()(),Aa(1670,`td`)(1671,`code`),bT(1672,`ResilienceRateLimitedEvent`),cf()(),Aa(1673,`td`)(1674,`code`),bT(1675,`retryAfterMs`),cf()()(),Aa(1676,`tr`)(1677,`td`)(1678,`code`),bT(1679,`fallback`),cf()(),Aa(1680,`td`)(1681,`code`),bT(1682,`ResilienceFallbackEvent`),cf()(),Aa(1683,`td`)(1684,`code`),bT(1685,`error`),cf()()()()(),Aa(1686,`p`),bT(1687,`A breaker's state (`),Aa(1688,`code`),bT(1689,`from`),cf(),bT(1690,` and `),Aa(1691,`code`),bT(1692,`to`),cf(),bT(1693,`) is `),Aa(1694,`code`),bT(1695,`'closed'`),cf(),bT(1696,`, `),Aa(1697,`code`),bT(1698,`'open'`),cf(),bT(1699,` or `),Aa(1700,`code`),bT(1701,`'half-open'`),cf(),bT(1702,`. `),Aa(1703,`code`),bT(1704,`ResilienceEvent`),cf(),bT(1705,` is the union of all payload types.`),cf(),Aa(1706,`h5`,56)(1707,`span`),bT(1708,`Errors`),cf()(),Aa(1709,`p`),bT(1710,`All errors extend `),Aa(1711,`code`),bT(1712,`ResilienceError`),cf(),bT(1713,`, which has a `),Aa(1714,`code`),bT(1715,`code`),cf(),bT(1716,` and the `),Aa(1717,`code`),bT(1718,`policy`),cf(),bT(1719,` name.`),cf(),Aa(1720,`table`)(1721,`thead`)(1722,`tr`)(1723,`th`),bT(1724,`Error`),cf(),Aa(1725,`th`),bT(1726,`Code`),cf(),Aa(1727,`th`),bT(1728,`HTTP`),cf(),Aa(1729,`th`),bT(1730,`Message sent to clients`),cf(),Aa(1731,`th`),bT(1732,`Fields`),cf()()(),Aa(1733,`tbody`)(1734,`tr`)(1735,`td`)(1736,`code`),bT(1737,`ResilienceTimeoutError`),cf()(),Aa(1738,`td`)(1739,`code`),bT(1740,`TIMEOUT`),cf()(),Aa(1741,`td`),bT(1742,`504`),cf(),Aa(1743,`td`),bT(1744,`The operation timed out`),cf(),Aa(1745,`td`)(1746,`code`),bT(1747,`timeoutMs`),cf()()(),Aa(1748,`tr`)(1749,`td`)(1750,`code`),bT(1751,`CircuitOpenError`),cf()(),Aa(1752,`td`)(1753,`code`),bT(1754,`CIRCUIT_OPEN`),cf()(),Aa(1755,`td`),bT(1756,`503, with `),Aa(1757,`code`),bT(1758,`Retry-After`),cf()(),Aa(1759,`td`),bT(1760,`Service temporarily unavailable`),cf(),Aa(1761,`td`)(1762,`code`),bT(1763,`retryAfterMs`),cf()()(),Aa(1764,`tr`)(1765,`td`)(1766,`code`),bT(1767,`BulkheadFullError`),cf()(),Aa(1768,`td`)(1769,`code`),bT(1770,`BULKHEAD_FULL`),cf()(),Aa(1771,`td`),bT(1772,`503`),cf(),Aa(1773,`td`),bT(1774,`Server is at capacity`),cf(),Aa(1775,`td`)(1776,`code`),bT(1777,`reason`),cf()()(),Aa(1778,`tr`)(1779,`td`)(1780,`code`),bT(1781,`OutboundRateLimitError`),cf()(),Aa(1782,`td`)(1783,`code`),bT(1784,`RATE_LIMITED`),cf()(),Aa(1785,`td`),bT(1786,`503, with `),Aa(1787,`code`),bT(1788,`Retry-After`),cf()(),Aa(1789,`td`),bT(1790,`Rate limit of a dependency exceeded`),cf(),Aa(1791,`td`)(1792,`code`),bT(1793,`retryAfterMs`),cf()()()()(),Aa(1794,`p`),bT(1795,`On microservice and WebSocket handlers, the error is an `),Aa(1796,`code`),bT(1797,`RpcException`),cf(),bT(1798,` or `),Aa(1799,`code`),bT(1800,`WsException`),cf(),bT(1801,` whose payload has `),Aa(1802,`code`),bT(1803,`status`),cf(),bT(1804,`, `),Aa(1805,`code`),bT(1806,`code`),cf(),bT(1807,`, `),Aa(1808,`code`),bT(1809,`statusCode`),cf(),bT(1810,`, `),Aa(1811,`code`),bT(1812,`message`),cf(),bT(1813,` and, for rejections that know it, `),Aa(1814,`code`),bT(1815,`retryAfter`),cf(),bT(1816,` in seconds. On GraphQL, the field's error has `),Aa(1817,`code`),bT(1818,`code`),cf(),bT(1819,`, `),Aa(1820,`code`),bT(1821,`httpStatus`),cf(),bT(1822,` and `),Aa(1823,`code`),bT(1824,`retryAfter`),cf(),bT(1825,` in `),Aa(1826,`code`),bT(1827,`extensions`),cf(),bT(1828,` (see `),Aa(1829,`a`,57),bT(1830,`Other transports`),cf(),bT(1831,`).`),cf()(),Aa(1832,`a`,58),Wa(1833,`i`,59),Aa(1834,`span`),bT(1835,`Edit on GitHub`),cf()()()),c&2){let j=tT(75),x=tT(110),u=tT(177),M=tT(188),S=tT(208),P=tT(386),E=tT(440),L=tT(525),f=tT(582),D=tT(636),y=tT(752),_=tT(821),w=tT(835),g=tT(931),z=tT(1049);zC(72),hf(` `,jT(73,15,`orders/order`,j.isJsActive),`
`),zC(35),hf(` `,jT(108,18,`app.module`,x.isJsActive),`
`),zC(67),hf(` `,jT(175,21,`shipping/carrier.client`,u.isJsActive),`
`),zC(11),hf(` `,jT(186,24,`shipping/shipping.service`,M.isJsActive),`
`),zC(20),hf(` `,jT(206,27,`shipping/shipping.controller`,S.isJsActive),`
`),zC(178),hf(` `,jT(384,30,`shipping/shipping.controller`,P.isJsActive),`
`),zC(54),hf(` `,jT(438,33,`orders/orders.controller`,E.isJsActive),`
`),zC(85),hf(` `,jT(523,36,`shipping/shipping.controller`,L.isJsActive),`
`),zC(57),hf(` `,jT(580,39,`app.module`,f.isJsActive),`
`),zC(54),hf(` `,jT(634,42,`shipping/repricing.service`,D.isJsActive),`
`),zC(116),hf(` `,jT(750,45,`shipping/shipping.handlers`,y.isJsActive),`
`),zC(69),hf(` `,jT(819,48,`main`,_.isJsActive),`
`),zC(14),hf(` `,jT(833,51,`shipping/shipping.resolver`,w.isJsActive),`
`),zC(96),hf(` `,jT(929,54,`resilience.logger`,g.isJsActive),`
`),zC(118),hf(` `,jT(1047,57,`test/shipping.e2e-spec`,z.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return d})();var he=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(h){return(m||(m=im(d)))(h||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-terminus`]],features:[xy],decls:960,vars:122,consts:[[`contentReference`,``],[`app82717dafc9c9458c6a8ce677c84234f95be8134e`,``],[`appbb743b55ed679183a1684455e01b741d1f40456b`,``],[`app6ba4b6c58142f53ec3f7f1f73e2bdf17ef6a90d2`,``],[`appf54cc36968e60d5e4e389f9f67bdeaaa4b7ae087`,``],[`app9e5a9cee284880cd8357421aea3e972bb01b30e0`,``],[`appf2157c79773507674298fc7db6d6ab30bef37c09`,``],[`appd09a5b808a7bd096dbaa66157cf3e6b037616456`,``],[`app3c7420d05c7012f6a2a53db1d64979c59db901ce`,``],[`app3a16fe58823a90bde89862f9fdfd5b44099a07d5`,``],[`appc1b897a9996c396eb086e5ec2887a2a66278b9f8`,``],[`app0845a76b80049e9c64185764ffd9f1b31df8b9d5`,``],[`app0eddc6fe72feedb239f9abe05d3333b9c4160fa2`,``],[`app0b0efcdc28141e32b1eb754ff973f36447010c32`,``],[`app65516047448f375ba86117bc7bbe5de6cc8fdcb1`,``],[`appa8e95dbeef96584395831d9b4ada2e5b8d1ed94c`,``],[`appd2b92120157e3adb8072b3548533497dfa7492b2`,``],[`app5fdf17d97d9328f01e9caa3df37f9c8df01855f4`,``],[`app9f6209502814973691195ebf0bb7c320069f9493`,``],[`app49d40a0648b4bffeedf47f3f8e13a21616b5d58a`,``],[`app6144488e2d63b4f9cf5aafafae7a3414d9e76d0a`,``],[`app35cd424dc0eb19d58bec2111eebea09ac880f207`,``],[`app2d363ee9b48de48c84672a9eab6e4315abbeb5b7`,``],[1,`content`],[1,`content-inner`],[`id`,`health-checks`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://kubernetes.io/`],[`appAnchor`,``,`id`,`getting-started`],[1,`language-bash`],[`appAnchor`,``,`id`,`setting-up-a-healthcheck`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/terminus`],[1,`info`],[`routerLink`,`/cli/overview`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`routerLink`,`/controllers`],[`href`,`#graceful-shutdown-timeout`],[`href`,`/fundamentals/lifecycle-events#application-shutdown`],[`appAnchor`,``,`id`,`http-healthcheck`],[1,`language-json`],[`appAnchor`,``,`id`,`check-for-specific-http-response-codes`],[`appAnchor`,``,`id`,`typeorm-health-indicator`],[`routerLink`,`/data/typeorm`],[`href`,`/data/typeorm#multiple-databases`],[`appAnchor`,``,`id`,`disk-health-indicator`],[`appAnchor`,``,`id`,`memory-health-indicator`],[`appAnchor`,``,`id`,`custom-health-indicator`],[`href`,`#timeouts-and-caching`],[`appAnchor`,``,`id`,`explicit-control-with-up-and-down`],[`appAnchor`,``,`id`,`degraded-state`],[1,`warning`],[`appAnchor`,``,`id`,`timeouts-and-caching`],[`appAnchor`,``,`id`,`timeouts`],[`appAnchor`,``,`id`,`caching`],[`appAnchor`,``,`id`,`logging`],[`href`,`/application/logger#injecting-a-custom-logger`],[`align`,`left`],[`src`,`/assets/Terminus_Error_Log_Json.png`],[`src`,`/assets/Terminus_Error_Log_Pretty.png`],[`appAnchor`,``,`id`,`graceful-shutdown-timeout`],[`appAnchor`,``,`id`,`more-examples`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/terminus/tree/master/sample`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/reliability/terminus.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,23,0)(2,`div`,24)(3,`h3`,25),bT(4,`Health checks`),cf(),Aa(5,`p`),bT(6,`The Terminus integration provides `),Aa(7,`strong`),bT(8,`readiness/liveness`),cf(),bT(9,` health checks. Health checks are crucial in complex backend setups. In web development, a health check usually consists of a dedicated address, for example, `),Aa(10,`code`),bT(11,`https://my-website.com/health/readiness`),cf(),bT(12,`.
A service or component of your infrastructure (e.g., `),Aa(13,`a`,26),bT(14,`Kubernetes`),cf(),bT(15,`) checks this address continuously. Depending on the HTTP status code returned from a `),Aa(16,`code`),bT(17,`GET`),cf(),bT(18,` request to this address, the service takes action when it receives an "unhealthy" response.
Because the definition of "healthy" or "unhealthy" varies with the type of service you provide, the `),Aa(19,`strong`),bT(20,`Terminus`),cf(),bT(21,` integration offers a set of `),Aa(22,`strong`),bT(23,`health indicators`),cf(),bT(24,`.`),cf(),Aa(25,`p`),bT(26,`For example, if your web server uses MongoDB to store its data, whether MongoDB is still up and running is vital information.
In that case, you can use the `),Aa(27,`code`),bT(28,`MongooseHealthIndicator`),cf(),bT(29,`. Once configured (as described below), your health check address returns
a healthy or unhealthy HTTP status code, depending on whether MongoDB is running.`),cf(),Aa(30,`h4`,27)(31,`span`),bT(32,`Getting started`),cf()(),Aa(33,`p`),bT(34,`To get started with `),Aa(35,`code`),bT(36,`@nestjs/terminus`),cf(),bT(37,`, install the required dependency:`),cf(),Aa(38,`pre`)(39,`code`,28),bT(40,`
$ npm install --save @nestjs/terminus
`),cf()(),Aa(41,`h4`,29)(42,`span`),bT(43,`Setting up a Healthcheck`),cf()(),Aa(44,`p`),bT(45,`A health check represents a summary of `),Aa(46,`strong`),bT(47,`health indicators`),cf(),bT(48,`. A health indicator checks whether a service is in a healthy or unhealthy state. A health check is positive if all the assigned health indicators are up and running. Because many applications need similar health indicators, `),Aa(49,`a`,30)(50,`code`),bT(51,`@nestjs/terminus`),cf()(),bT(52,` provides a set of predefined indicators:`),cf(),Aa(53,`ul`)(54,`li`)(55,`code`),bT(56,`HttpHealthIndicator`),cf()(),Aa(57,`li`)(58,`code`),bT(59,`TypeOrmHealthIndicator`),cf()(),Aa(60,`li`)(61,`code`),bT(62,`MongooseHealthIndicator`),cf()(),Aa(63,`li`)(64,`code`),bT(65,`SequelizeHealthIndicator`),cf()(),Aa(66,`li`)(67,`code`),bT(68,`MikroOrmHealthIndicator`),cf()(),Aa(69,`li`)(70,`code`),bT(71,`PrismaHealthIndicator`),cf()(),Aa(72,`li`)(73,`code`),bT(74,`MicroserviceHealthIndicator`),cf()(),Aa(75,`li`)(76,`code`),bT(77,`GRPCHealthIndicator`),cf()(),Aa(78,`li`)(79,`code`),bT(80,`MemoryHealthIndicator`),cf()(),Aa(81,`li`)(82,`code`),bT(83,`DiskHealthIndicator`),cf()()(),Aa(84,`p`),bT(85,`To get started with our first health check, let's create the `),Aa(86,`code`),bT(87,`HealthModule`),cf(),bT(88,` and add the `),Aa(89,`code`),bT(90,`TerminusModule`),cf(),bT(91,` to its `),Aa(92,`code`),bT(93,`imports`),cf(),bT(94,` array.`),cf(),Aa(95,`blockquote`,31)(96,`strong`),bT(97,`Hint`),cf(),bT(98,` To create the module using the `),Aa(99,`a`,32),bT(100,`Nest CLI`),cf(),bT(101,`, run the `),Aa(102,`code`),bT(103,`$ nest g module health`),cf(),bT(104,` command.
`),cf(),Aa(105,`app-copy-button`,33)(106,`span`,34),bT(107),LT(108,`extension`),Wa(109,`app-tabs`,null,1),cf(),Aa(111,`pre`)(112,`code`,35),bT(113,`
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule]
})
export class HealthModule {}
`),cf()()(),Aa(114,`p`),bT(115,`Health checks are executed by a `),Aa(116,`a`,36),bT(117,`controller`),cf(),bT(118,`, which you can generate with the `),Aa(119,`a`,32),bT(120,`Nest CLI`),cf(),bT(121,`.`),cf(),Aa(122,`pre`)(123,`code`,28),bT(124,`
$ nest g controller health
`),cf()(),Aa(125,`blockquote`,31)(126,`strong`),bT(127,`Hint`),cf(),bT(128,` We highly recommend enabling shutdown hooks in your application. When they are enabled, the Terminus integration uses this lifecycle event to report the `),Aa(129,`code`),bT(130,`'shutting_down'`),cf(),bT(131,` status and to apply the `),Aa(132,`a`,37),bT(133,`graceful shutdown timeout`),cf(),bT(134,`. Learn more in the `),Aa(135,`a`,38),bT(136,`application shutdown`),cf(),bT(137,` section.
`),cf(),Aa(138,`h4`,39)(139,`span`),bT(140,`HTTP Healthcheck`),cf()(),Aa(141,`p`),bT(142,`Once you have installed `),Aa(143,`code`),bT(144,`@nestjs/terminus`),cf(),bT(145,`, imported the `),Aa(146,`code`),bT(147,`TerminusModule`),cf(),bT(148,`, and created a new controller, you are ready to create a health check.`),cf(),Aa(149,`p`),bT(150,`The `),Aa(151,`code`),bT(152,`HttpHealthIndicator`),cf(),bT(153,` requires the `),Aa(154,`code`),bT(155,`@nestjs/axios`),cf(),bT(156,` package, so make sure it is installed:`),cf(),Aa(157,`pre`)(158,`code`,28),bT(159,`
$ npm i --save @nestjs/axios axios
`),cf()(),Aa(160,`p`),bT(161,`Now set up the `),Aa(162,`code`),bT(163,`HealthController`),cf(),bT(164,`:`),cf(),Aa(165,`app-copy-button`,33)(166,`span`,34),bT(167),LT(168,`extension`),Wa(169,`app-tabs`,null,2),cf(),Aa(171,`pre`)(172,`code`,35),bT(173,`
import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
}
`),cf()(),Aa(174,`pre`)(175,`code`,35),bT(176,`
import { Controller, Dependencies, Get } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus';

@Controller('health')
@Dependencies(HealthCheckService, HttpHealthIndicator)
export class HealthController {
  constructor(health, http) {
    this.health = health;
    this.http = http;
  }

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ])
  }
}
`),cf()()(),Aa(177,`app-copy-button`,33)(178,`span`,34),bT(179),LT(180,`extension`),Wa(181,`app-tabs`,null,3),cf(),Aa(183,`pre`)(184,`code`,35),bT(185,`
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller.js';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
})
export class HealthModule {}
`),cf()(),Aa(186,`pre`)(187,`code`,35),bT(188,`
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller.js';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
})
export class HealthModule {}
`),cf()()(),Aa(189,`p`),bT(190,`The health check now sends a `),Aa(191,`code`),bT(192,`GET`),cf(),bT(193,` request to the `),Aa(194,`code`),bT(195,`https://docs.nestjs.com`),cf(),bT(196,` address. If
that address returns a healthy response, the route at `),Aa(197,`code`),bT(198,`http://localhost:3000/health`),cf(),bT(199,` returns
the following object with a `),Aa(200,`code`),bT(201,`200`),cf(),bT(202,` status code:`),cf(),Aa(203,`pre`)(204,`code`,40),bT(205,`
{
  "status": "ok",
  "info": {
    "nestjs-docs": {
      "status": "up"
    }
  },
  "error": {},
  "details": {
    "nestjs-docs": {
      "status": "up"
    }
  }
}
`),cf()(),Aa(206,`p`),bT(207,`The `),Aa(208,`code`),bT(209,`@nestjs/terminus`),cf(),bT(210,` package exports the type of this response object as `),Aa(211,`code`),bT(212,`HealthCheckResult`),cf(),bT(213,`.`),cf(),Aa(214,`table`),Wa(215,`thead`),Aa(216,`tbody`)(217,`tr`)(218,`td`)(219,`code`),bT(220,`status`),cf()(),Aa(221,`td`),bT(222,`If any health indicator failed, the status is `),Aa(223,`code`),bT(224,`'error'`),cf(),bT(225,`. If no indicator failed but at least one is `),Aa(226,`code`),bT(227,`'degraded'`),cf(),bT(228,`, the status is `),Aa(229,`code`),bT(230,`'degraded'`),cf(),bT(231,`. If the Nest application is shutting down but still accepting HTTP requests, the status is `),Aa(232,`code`),bT(233,`'shutting_down'`),cf(),bT(234,`.`),cf(),Aa(235,`td`)(236,`code`),bT(237,`'error' | 'ok' | 'degraded' | 'shutting_down'`),cf()()(),Aa(238,`tr`)(239,`td`)(240,`code`),bT(241,`info`),cf()(),Aa(242,`td`),bT(243,`Object containing information about each health indicator whose status is `),Aa(244,`code`),bT(245,`'up'`),cf(),bT(246,` or `),Aa(247,`code`),bT(248,`'degraded'`),cf(),bT(249,`, in other words, "still serving".`),cf(),Aa(250,`td`)(251,`code`),bT(252,`object`),cf()()(),Aa(253,`tr`)(254,`td`)(255,`code`),bT(256,`error`),cf()(),Aa(257,`td`),bT(258,`Object containing information about each health indicator whose status is `),Aa(259,`code`),bT(260,`'down'`),cf(),bT(261,`, in other words, "unhealthy".`),cf(),Aa(262,`td`)(263,`code`),bT(264,`object`),cf()()(),Aa(265,`tr`)(266,`td`)(267,`code`),bT(268,`details`),cf()(),Aa(269,`td`),bT(270,`Object containing information about every health indicator.`),cf(),Aa(271,`td`)(272,`code`),bT(273,`object`),cf()()()()(),Aa(274,`h5`,41)(275,`span`),bT(276,`Check for specific HTTP response codes`),cf()(),Aa(277,`p`),bT(278,`In certain cases, you might want to check for specific criteria and validate the response. For example, assume
`),Aa(279,`code`),bT(280,`https://my-external-service.com`),cf(),bT(281,` returns a `),Aa(282,`code`),bT(283,`204`),cf(),bT(284,` response code. With `),Aa(285,`code`),bT(286,`HttpHealthIndicator.responseCheck()`),cf(),bT(287,`, you can
check for that response code specifically and treat all other codes as unhealthy.`),cf(),Aa(288,`p`),bT(289,`In the following example, any response code other than `),Aa(290,`code`),bT(291,`204`),cf(),bT(292,` is unhealthy. The third parameter is a function (sync or async)
that returns a boolean indicating whether the response is considered healthy (`),Aa(293,`code`),bT(294,`true`),cf(),bT(295,`) or unhealthy (`),Aa(296,`code`),bT(297,`false`),cf(),bT(298,`).`),cf(),Aa(299,`app-copy-button`,33)(300,`span`,34),bT(301),LT(302,`extension`),Wa(303,`app-tabs`,null,4),cf(),Aa(305,`pre`)(306,`code`,35),bT(307,`
// Within the \`HealthController\`-class

@Get()
@HealthCheck()
check() {
  return this.health.check([
    () =>
      this.http.responseCheck(
        'my-external-service',
        'https://my-external-service.com',
        (res) => res.status === 204,
      ),
  ]);
}
`),cf()()(),Aa(308,`h4`,42)(309,`span`),bT(310,`TypeOrm health indicator`),cf()(),Aa(311,`p`),bT(312,`Terminus lets you add database checks to your health check. Before using this health indicator, read the
`),Aa(313,`a`,43),bT(314,`database`),cf(),bT(315,` chapter and make sure your application's database connection is established.`),cf(),Aa(316,`blockquote`,31)(317,`strong`),bT(318,`Hint`),cf(),bT(319,` Behind the scenes, the `),Aa(320,`code`),bT(321,`TypeOrmHealthIndicator`),cf(),bT(322,` executes a `),Aa(323,`code`),bT(324,`SELECT 1`),cf(),bT(325,` SQL command, which is commonly used to verify whether the database is still alive. For Oracle databases, it uses `),Aa(326,`code`),bT(327,`SELECT 1 FROM DUAL`),cf(),bT(328,`, and for SAP HANA, `),Aa(329,`code`),bT(330,`SELECT now() FROM dummy`),cf(),bT(331,`.
`),cf(),Aa(332,`app-copy-button`,33)(333,`span`,34),bT(334),LT(335,`extension`),Wa(336,`app-tabs`,null,5),cf(),Aa(338,`pre`)(339,`code`,35),bT(340,`
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database').withTimeout(1000),
    ]);
  }
}
`),cf()(),Aa(341,`pre`)(342,`code`,35),bT(343,`
@Controller('health')
@Dependencies(HealthCheckService, TypeOrmHealthIndicator)
export class HealthController {
  constructor(health, db) {
    this.health = health;
    this.db = db;
  }

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      () => this.db.pingCheck('database').withTimeout(1000),
    ])
  }
}
`),cf()()(),Aa(344,`p`),bT(345,`If your database is reachable, a `),Aa(346,`code`),bT(347,`GET`),cf(),bT(348,` request to `),Aa(349,`code`),bT(350,`http://localhost:3000/health`),cf(),bT(351,` returns the following JSON result:`),cf(),Aa(352,`pre`)(353,`code`,40),bT(354,`
{
  "status": "ok",
  "info": {
    "database": {
      "status": "up",
      "responseTime": 12
    }
  },
  "error": {},
  "details": {
    "database": {
      "status": "up",
      "responseTime": 12
    }
  }
}
`),cf()(),Aa(355,`p`),bT(356,`If your application uses `),Aa(357,`a`,44),bT(358,`multiple databases`),cf(),bT(359,`, inject each
data source into your `),Aa(360,`code`),bT(361,`HealthController`),cf(),bT(362,`. Then, pass the data source reference to the `),Aa(363,`code`),bT(364,`TypeOrmHealthIndicator`),cf(),bT(365,` using the `),Aa(366,`code`),bT(367,`connection`),cf(),bT(368,` option.`),cf(),Aa(369,`app-copy-button`,33)(370,`span`,34),bT(371),LT(372,`extension`),Wa(373,`app-tabs`,null,6),cf(),Aa(375,`pre`)(376,`code`,35),bT(377,`
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    @InjectDataSource('albumsConnection')
    private albumsConnection: DataSource,
    @InjectDataSource()
    private defaultConnection: DataSource,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('albums-database', { connection: this.albumsConnection }).withTimeout(1000),
      () => this.db.pingCheck('database', { connection: this.defaultConnection }).withTimeout(1000),
    ]);
  }
}
`),cf()()(),Aa(378,`h4`,45)(379,`span`),bT(380,`Disk health indicator`),cf()(),Aa(381,`p`),bT(382,`The `),Aa(383,`code`),bT(384,`DiskHealthIndicator`),cf(),bT(385,` checks how much storage is in use. To get started, inject the `),Aa(386,`code`),bT(387,`DiskHealthIndicator`),cf(),bT(388,`
into your `),Aa(389,`code`),bT(390,`HealthController`),cf(),bT(391,`. The following example checks the storage used by the path `),Aa(392,`code`),bT(393,`/`),cf(),bT(394,` (on Windows, use `),Aa(395,`code`),bT(396,`C:\\\\`),cf(),bT(397,`).
If more than 50% of the total storage space is used, the health check reports an unhealthy state.`),cf(),Aa(398,`app-copy-button`,33)(399,`span`,34),bT(400),LT(401,`extension`),Wa(402,`app-tabs`,null,7),cf(),Aa(404,`pre`)(405,`code`,35),bT(406,`
@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly disk: DiskHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.disk.checkStorage('storage', { path: '/', thresholdPercent: 0.5 }),
    ]);
  }
}
`),cf()(),Aa(407,`pre`)(408,`code`,35),bT(409,`
@Controller('health')
@Dependencies(HealthCheckService, DiskHealthIndicator)
export class HealthController {
  constructor(health, disk) {
    this.health = health;
    this.disk = disk;
  }

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      () => this.disk.checkStorage('storage', { path: '/', thresholdPercent: 0.5 }),
    ])
  }
}
`),cf()()(),Aa(410,`p`),bT(411,`The `),Aa(412,`code`),bT(413,`DiskHealthIndicator.checkStorage()`),cf(),bT(414,` method can also check against a fixed amount of space.
The following example is unhealthy if the storage used by the path `),Aa(415,`code`),bT(416,`/`),cf(),bT(417,` exceeds 250GB.`),cf(),Aa(418,`app-copy-button`,33)(419,`span`,34),bT(420),LT(421,`extension`),Wa(422,`app-tabs`,null,8),cf(),Aa(424,`pre`)(425,`code`,35),bT(426,`
// Within the \`HealthController\`-class

@Get()
@HealthCheck()
check() {
  return this.health.check([
    () => this.disk.checkStorage('storage', {  path: '/', threshold: 250 * 1024 * 1024 * 1024, })
  ]);
}
`),cf()()(),Aa(427,`h4`,46)(428,`span`),bT(429,`Memory health indicator`),cf()(),Aa(430,`p`),bT(431,`Use the `),Aa(432,`code`),bT(433,`MemoryHealthIndicator`),cf(),bT(434,` to make sure your process doesn't exceed a certain memory limit.
The following example checks the heap of your process.`),cf(),Aa(435,`blockquote`,31)(436,`strong`),bT(437,`Hint`),cf(),bT(438,` The heap is the portion of memory where dynamically allocated memory resides. `),Aa(439,`code`),bT(440,`checkHeap()`),cf(),bT(441,` compares the `),Aa(442,`code`),bT(443,`heapUsed`),cf(),bT(444,` value reported by `),Aa(445,`code`),bT(446,`process.memoryUsage()`),cf(),bT(447,` (the V8 heap memory currently in use) against the given threshold in bytes.
`),cf(),Aa(448,`app-copy-button`,33)(449,`span`,34),bT(450),LT(451,`extension`),Wa(452,`app-tabs`,null,9),cf(),Aa(454,`pre`)(455,`code`,35),bT(456,`
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
    ]);
  }
}
`),cf()(),Aa(457,`pre`)(458,`code`,35),bT(459,`
@Controller('health')
@Dependencies(HealthCheckService, MemoryHealthIndicator)
export class HealthController {
  constructor(health, memory) {
    this.health = health;
    this.memory = memory;
  }

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
    ])
  }
}
`),cf()()(),Aa(460,`p`),bT(461,`You can also verify the RSS of your process with `),Aa(462,`code`),bT(463,`MemoryHealthIndicator.checkRSS()`),cf(),bT(464,`. The following example
returns an unhealthy response code if your process has more than 150MB allocated.`),cf(),Aa(465,`blockquote`,31)(466,`strong`),bT(467,`Hint`),cf(),bT(468,` RSS (Resident Set Size) shows how much memory is allocated to the process and held in RAM.
It doesn't include memory that is swapped out. It does include memory from shared libraries, as long as the pages from
those libraries are actually in memory, as well as all stack and heap memory.
`),cf(),Aa(469,`app-copy-button`,33)(470,`span`,34),bT(471),LT(472,`extension`),Wa(473,`app-tabs`,null,10),cf(),Aa(475,`pre`)(476,`code`,35),bT(477,`
// Within the \`HealthController\`-class

@Get()
@HealthCheck()
check() {
  return this.health.check([
    () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024),
  ]);
}
`),cf()()(),Aa(478,`h4`,47)(479,`span`),bT(480,`Custom health indicator`),cf()(),Aa(481,`p`),bT(482,`In some cases, the predefined health indicators provided by `),Aa(483,`code`),bT(484,`@nestjs/terminus`),cf(),bT(485,` don't cover all of your health check requirements. In that case, you can create a custom health indicator.`),cf(),Aa(486,`p`),bT(487,`Most health indicators follow the same pattern: run an operation, then mark the indicator as `),Aa(488,`code`),bT(489,`'up'`),cf(),bT(490,` if it succeeds and as `),Aa(491,`code`),bT(492,`'down'`),cf(),bT(493,` if it fails. The `),Aa(494,`code`),bT(495,`HealthIndicatorService`),cf(),bT(496,` implements this pattern with `),Aa(497,`code`),bT(498,`attempt()`),cf(),bT(499,`. To show how an indicator is structured, we will create an example `),Aa(500,`code`),bT(501,`DogHealthIndicator`),cf(),bT(502,`. This service should have the state `),Aa(503,`code`),bT(504,`'up'`),cf(),bT(505,` as long as an external dog API responds within one second.`),cf(),Aa(506,`app-copy-button`,33)(507,`span`,34),bT(508),LT(509,`extension`),Wa(510,`app-tabs`,null,11),cf(),Aa(512,`pre`)(513,`code`,35),bT(514,`
import { Injectable } from '@nestjs/common';
import { HealthIndicatorService } from '@nestjs/terminus';

@Injectable()
export class DogHealthIndicator {
  constructor(
    private readonly healthIndicatorService: HealthIndicatorService
  ) {}

  isHealthy(key: string) {
    return this.healthIndicatorService
      .check(key)
      .attempt(async ({ signal }) => {
        const response = await fetch('https://dog.ceo/api/breeds/list', { signal });
        const { message: breeds } = await response.json();

        return { breeds: breeds.length };
      })
      .withTimeout(1000);
  }
}
`),cf()(),Aa(515,`pre`)(516,`code`,35),bT(517,`
import { Injectable, Dependencies } from '@nestjs/common';
import { HealthIndicatorService } from '@nestjs/terminus';

@Injectable()
@Dependencies(HealthIndicatorService)
export class DogHealthIndicator {
  constructor(healthIndicatorService) {
    this.healthIndicatorService = healthIndicatorService;
  }

  isHealthy(key) {
    return this.healthIndicatorService
      .check(key)
      .attempt(async ({ signal }) => {
        const response = await fetch('https://dog.ceo/api/breeds/list', { signal });
        const { message: breeds } = await response.json();

        return { breeds: breeds.length };
      })
      .withTimeout(1000);
  }
}
`),cf()()(),Aa(518,`p`)(519,`code`),bT(520,`attempt()`),cf(),bT(521,` accepts a sync or async function and marks the indicator as `),Aa(522,`code`),bT(523,`'up'`),cf(),bT(524,` once it resolves. Any data the function returns is appended to the result. If the function throws, the indicator is marked as `),Aa(525,`code`),bT(526,`'down'`),cf(),bT(527,` and the error message is added to the result. In both cases, the time the function took is reported as `),Aa(528,`code`),bT(529,`responseTime`),cf(),bT(530,`. `),Aa(531,`code`),bT(532,`withTimeout()`),cf(),bT(533,` limits the attempt to the given number of milliseconds (see `),Aa(534,`a`,48),bT(535,`Timeouts and caching`),cf(),bT(536,`).`),cf(),Aa(537,`p`),bT(538,`Next, register the health indicator as a provider:`),cf(),Aa(539,`app-copy-button`,33)(540,`span`,34),bT(541),LT(542,`extension`),Wa(543,`app-tabs`,null,12),cf(),Aa(545,`pre`)(546,`code`,35),bT(547,`
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { DogHealthIndicator } from './dog.health.js';
import { HealthController } from './health.controller.js';

@Module({
  controllers: [HealthController],
  imports: [TerminusModule],
  providers: [DogHealthIndicator]
})
export class HealthModule { }
`),cf()()(),Aa(548,`blockquote`,31)(549,`strong`),bT(550,`Hint`),cf(),bT(551,` In a real-world application, the `),Aa(552,`code`),bT(553,`DogHealthIndicator`),cf(),bT(554,` should be provided in a separate module, for example, `),Aa(555,`code`),bT(556,`DogModule`),cf(),bT(557,`, which is then imported by the `),Aa(558,`code`),bT(559,`HealthModule`),cf(),bT(560,`.
`),cf(),Aa(561,`p`),bT(562,`The last step is to add the new health indicator to the health check endpoint. Go back to the `),Aa(563,`code`),bT(564,`HealthController`),cf(),bT(565,` and add it to the `),Aa(566,`code`),bT(567,`healthCheck()`),cf(),bT(568,` method:`),cf(),Aa(569,`app-copy-button`,33)(570,`span`,34),bT(571),LT(572,`extension`),Wa(573,`app-tabs`,null,13),cf(),Aa(575,`pre`)(576,`code`,35),bT(577,`
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';
import { Controller, Get } from '@nestjs/common';
import { DogHealthIndicator } from './dog.health.js';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dogHealthIndicator: DogHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      () => this.dogHealthIndicator.isHealthy('dog'),
    ])
  }
}
`),cf()(),Aa(578,`pre`)(579,`code`,35),bT(580,`
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';
import { Controller, Dependencies, Get } from '@nestjs/common';
import { DogHealthIndicator } from './dog.health.js';

@Controller('health')
@Dependencies(HealthCheckService, DogHealthIndicator)
export class HealthController {
  constructor(
    health,
    dogHealthIndicator
  ) {
    this.health = health;
    this.dogHealthIndicator = dogHealthIndicator;
  }

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      () => this.dogHealthIndicator.isHealthy('dog'),
    ])
  }
}
`),cf()()(),Aa(581,`p`),bT(582,`If the API responds in time, the health check returns the following result:`),cf(),Aa(583,`pre`)(584,`code`,40),bT(585,`
{
  "status": "ok",
  "info": {
    "dog": {
      "status": "up",
      "breeds": 98,
      "responseTime": 143
    }
  },
  "error": {},
  "details": {
    "dog": {
      "status": "up",
      "breeds": 98,
      "responseTime": 143
    }
  }
}
`),cf()(),Aa(586,`blockquote`,31)(587,`strong`),bT(588,`Hint`),cf(),bT(589,` Terminus executes attempts itself, so you can pass an attempt to `),Aa(590,`code`),bT(591,`health.check([...])`),cf(),bT(592,` either directly (`),Aa(593,`code`),bT(594,`this.dogHealthIndicator.isHealthy('dog')`),cf(),bT(595,`) or wrapped in a function, as in the example above.
`),cf(),Aa(596,`h5`,49)(597,`span`),bT(598,`Explicit control with up() and down()`),cf()(),Aa(599,`p`),bT(600,`Sometimes "healthy" means more than "the operation didn't throw". To decide the state yourself, return `),Aa(601,`code`),bT(602,`up()`),cf(),bT(603,` or `),Aa(604,`code`),bT(605,`down()`),cf(),bT(606,` directly instead of using `),Aa(607,`code`),bT(608,`attempt()`),cf(),bT(609,`. Assume the dogs are now stored locally, and the indicator should only be healthy if every `),Aa(610,`code`),bT(611,`Dog`),cf(),bT(612,` has the type `),Aa(613,`code`),bT(614,`'goodboy'`),cf(),bT(615,`.`),cf(),Aa(616,`app-copy-button`,33)(617,`span`,34),bT(618),LT(619,`extension`),Wa(620,`app-tabs`,null,14),cf(),Aa(622,`pre`)(623,`code`,35),bT(624,`
import { Injectable } from '@nestjs/common';
import { HealthIndicatorService } from '@nestjs/terminus';

export interface Dog {
  name: string;
  type: string;
}

@Injectable()
export class DogHealthIndicator {
  constructor(
    private readonly healthIndicatorService: HealthIndicatorService
  ) {}

  private dogs: Dog[] = [
    { name: 'Fido', type: 'goodboy' },
    { name: 'Rex', type: 'badboy' },
  ];

  async isHealthy(key: string) {
    const indicator = this.healthIndicatorService.check(key);
    const badboys = this.dogs.filter(dog => dog.type === 'badboy');

    if (badboys.length > 0) {
      return indicator.down({ badboys: badboys.length });
    }

    return indicator.up();
  }
}
`),cf()(),Aa(625,`pre`)(626,`code`,35),bT(627,`
import { Injectable, Dependencies } from '@nestjs/common';
import { HealthIndicatorService } from '@nestjs/terminus';

@Injectable()
@Dependencies(HealthIndicatorService)
export class DogHealthIndicator {
  constructor(healthIndicatorService) {
    this.healthIndicatorService = healthIndicatorService;
  }

  dogs = [
    { name: 'Fido', type: 'goodboy' },
    { name: 'Rex', type: 'badboy' },
  ];

  async isHealthy(key) {
    const indicator = this.healthIndicatorService.check(key);
    const badboys = this.dogs.filter(dog => dog.type === 'badboy');

    if (badboys.length > 0) {
      return indicator.down({ badboys: badboys.length });
    }

    return indicator.up();
  }
}
`),cf()()(),Aa(628,`p`),bT(629,`Both `),Aa(630,`code`),bT(631,`up()`),cf(),bT(632,` and `),Aa(633,`code`),bT(634,`down()`),cf(),bT(635,` accept either an object with additional data, which is appended to the result, or a string, which is added as the `),Aa(636,`code`),bT(637,`message`),cf(),bT(638,` property.`),cf(),Aa(639,`h5`,50)(640,`span`),bT(641,`Degraded state`),cf()(),Aa(642,`p`),bT(643,`Not every problem justifies taking the application out of rotation. An unreachable cache, for example, slows the application down but doesn't break it. For such cases, an indicator can return `),Aa(644,`code`),bT(645,`degraded()`),cf(),bT(646,`. A degraded indicator doesn't fail the health check: it is listed under `),Aa(647,`code`),bT(648,`info`),cf(),bT(649,`, the overall status becomes `),Aa(650,`code`),bT(651,`'degraded'`),cf(),bT(652,`, and the HTTP status code stays `),Aa(653,`code`),bT(654,`200`),cf(),bT(655,`. Orchestrators keep routing traffic, while the state remains visible in monitoring.`),cf(),Aa(656,`app-copy-button`,33)(657,`span`,34),bT(658),LT(659,`extension`),Wa(660,`app-tabs`,null,15),cf(),Aa(662,`pre`)(663,`code`,35),bT(664,`
@Injectable()
export class CacheHealthIndicator {
  constructor(
    private readonly healthIndicatorService: HealthIndicatorService,
    private readonly cache: CacheService,
  ) {}

  async isHealthy(key: string) {
    const indicator = this.healthIndicatorService.check(key);
    const hasCache = await this.cache.isConnected();

    if (!hasCache) {
      return indicator.degraded('cache unreachable, serving without cache');
    }

    return indicator.up();
  }
}
`),cf()()(),Aa(665,`pre`)(666,`code`,40),bT(667,`
{
  "status": "degraded",
  "info": {
    "cache": {
      "status": "degraded",
      "message": "cache unreachable, serving without cache"
    }
  },
  "error": {},
  "details": {
    "cache": {
      "status": "degraded",
      "message": "cache unreachable, serving without cache"
    }
  }
}
`),cf()(),Aa(668,`p`),bT(669,`Like `),Aa(670,`code`),bT(671,`up()`),cf(),bT(672,` and `),Aa(673,`code`),bT(674,`down()`),cf(),bT(675,`, `),Aa(676,`code`),bT(677,`degraded()`),cf(),bT(678,` accepts either an object with additional data or a message string. As soon as any indicator is `),Aa(679,`code`),bT(680,`'down'`),cf(),bT(681,`, the overall status is `),Aa(682,`code`),bT(683,`'error'`),cf(),bT(684,` regardless of degraded indicators.`),cf(),Aa(685,`blockquote`,51)(686,`strong`),bT(687,`Warning`),cf(),bT(688,` A health indicator built with `),Aa(689,`code`),bT(690,`up()`),cf(),bT(691,`, `),Aa(692,`code`),bT(693,`down()`),cf(),bT(694,`, and `),Aa(695,`code`),bT(696,`degraded()`),cf(),bT(697,` reports its state by returning one of them. An error thrown by such an indicator is treated as a bug, not an unhealthy state: it aborts the whole health check and results in a `),Aa(698,`code`),bT(699,`500`),cf(),bT(700,` response instead of a `),Aa(701,`code`),bT(702,`503`),cf(),bT(703,`. If your indicator wraps an operation that may throw, use `),Aa(704,`code`),bT(705,`attempt()`),cf(),bT(706,`, which translates a thrown error into a `),Aa(707,`code`),bT(708,`'down'`),cf(),bT(709,` state.
`),cf(),Aa(710,`h4`,52)(711,`span`),bT(712,`Timeouts and caching`),cf()(),Aa(713,`p`),bT(714,`Every check built with `),Aa(715,`code`),bT(716,`attempt()`),cf(),bT(717,` returns a `),Aa(718,`code`),bT(719,`HealthCheckAttempt`),cf(),bT(720,`. This includes your custom indicators as well as the built-in database, microservice, and gRPC indicators. Before the attempt is executed, you can configure it by chaining `),Aa(721,`code`),bT(722,`withTimeout()`),cf(),bT(723,` and `),Aa(724,`code`),bT(725,`cacheFor()`),cf(),bT(726,`.`),cf(),Aa(727,`h5`,53)(728,`span`),bT(729,`Timeouts`),cf()(),Aa(730,`p`)(731,`code`),bT(732,`withTimeout()`),cf(),bT(733,` limits the attempt to the given number of milliseconds. Once the time is up, the indicator is marked as `),Aa(734,`code`),bT(735,`'down'`),cf(),bT(736,` and the `),Aa(737,`code`),bT(738,`AbortSignal`),cf(),bT(739,` passed to your function is aborted. Pass that `),Aa(740,`code`),bT(741,`signal`),cf(),bT(742,` to the underlying operation so that it is canceled as well, rather than lingering in the background.`),cf(),Aa(743,`app-copy-button`,33)(744,`span`,34),bT(745),LT(746,`extension`),Wa(747,`app-tabs`,null,16),cf(),Aa(749,`pre`)(750,`code`,35),bT(751,`
// Within the \`HealthController\`-class
@Get()
@HealthCheck()
check() {
  return this.health.check([
    () => this.db.pingCheck('database').withTimeout(1500),
    () => this.dogHealthIndicator.isHealthy('dog'),
  ]);
}
`),cf()()(),Aa(752,`p`),bT(753,`If the dog API from the custom indicator doesn't respond within one second, the health check responds with the following result:`),cf(),Aa(754,`pre`)(755,`code`,40),bT(756,`
{
  "status": "error",
  "info": {
    "database": {
      "status": "up",
      "responseTime": 12
    }
  },
  "error": {
    "dog": {
      "status": "down",
      "message": "timeout of 1000ms exceeded",
      "responseTime": 1001
    }
  },
  "details": {
    "database": {
      "status": "up",
      "responseTime": 12
    },
    "dog": {
      "status": "down",
      "message": "timeout of 1000ms exceeded",
      "responseTime": 1001
    }
  }
}
`),cf()(),Aa(757,`blockquote`,51)(758,`strong`),bT(759,`Warning`),cf(),bT(760,` The `),Aa(761,`code`),bT(762,`timeout`),cf(),bT(763,` option of the built-in indicators (e.g., `),Aa(764,`code`),bT(765),cf(),bT(766,`) is deprecated. Chain `),Aa(767,`code`),bT(768,`.withTimeout()`),cf(),bT(769,` on the returned attempt instead.
`),cf(),Aa(770,`h5`,54)(771,`span`),bT(772,`Caching`),cf()(),Aa(773,`p`),bT(774,`Orchestrators typically poll health checks every few seconds, and some checks are too expensive to run on every request. `),Aa(775,`code`),bT(776,`cacheFor()`),cf(),bT(777,` caches the result of an attempt for the given number of milliseconds. While a fresh result exists, the function isn't executed again, and concurrent health checks share a single in-flight execution. The cache is shared across requests and keyed by the indicator key.`),cf(),Aa(778,`app-copy-button`,33)(779,`span`,34),bT(780),LT(781,`extension`),Wa(782,`app-tabs`,null,17),cf(),Aa(784,`pre`)(785,`code`,35),bT(786,`
// Within the \`HealthController\`-class
@Get()
@HealthCheck()
check() {
  return this.health.check([
    () => this.db.pingCheck('database').withTimeout(1500).cacheFor(5000),
  ]);
}
`),cf()()(),Aa(787,`p`),bT(788,`Results served from the cache are marked with `),Aa(789,`code`),bT(790,`cachedResponse: true`),cf(),bT(791,`:`),cf(),Aa(792,`pre`)(793,`code`,40),bT(794,`
{
  "status": "ok",
  "info": {
    "database": {
      "status": "up",
      "responseTime": 12,
      "cachedResponse": true
    }
  },
  "error": {},
  "details": {
    "database": {
      "status": "up",
      "responseTime": 12,
      "cachedResponse": true
    }
  }
}
`),cf()(),Aa(795,`h4`,55)(796,`span`),bT(797,`Logging`),cf()(),Aa(798,`p`),bT(799,`By default, Terminus logs an error when a health check fails. When a graceful shutdown timeout is configured, it also logs the progress of the shutdown. The `),Aa(800,`code`),bT(801,`TerminusModule.forRoot()`),cf(),bT(802,` method gives you more control over how errors are logged, and lets you take over logging entirely.`),cf(),Aa(803,`p`),bT(804,`This section walks you through creating a custom logger, `),Aa(805,`code`),bT(806,`TerminusLogger`),cf(),bT(807,`. This logger extends the built-in `),Aa(808,`code`),bT(809,`ConsoleLogger`),cf(),bT(810,`,
so you can choose which parts of the logger to override.`),cf(),Aa(811,`blockquote`,31)(812,`strong`),bT(813,`Hint`),cf(),bT(814,` To learn more about custom loggers in Nest, see `),Aa(815,`a`,56),bT(816,`injecting a custom logger`),cf(),bT(817,`.
`),cf(),Aa(818,`app-copy-button`,33)(819,`span`,34),bT(820),LT(821,`extension`),Wa(822,`app-tabs`,null,18),cf(),Aa(824,`pre`)(825,`code`,35),bT(826,`
import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class TerminusLogger extends ConsoleLogger {
  error(message: any, stack?: string, context?: string): void;
  error(message: any, ...optionalParams: any[]): void;
  error(
    message: unknown,
    stack?: unknown,
    context?: unknown,
    ...rest: unknown[]
  ): void {
    // Override how error messages are logged here
  }
}
`),cf()()(),Aa(827,`p`),bT(828,`Once you have created your custom logger, pass it to `),Aa(829,`code`),bT(830,`TerminusModule.forRoot()`),cf(),bT(831,`:`),cf(),Aa(832,`app-copy-button`,33)(833,`span`,34),bT(834),LT(835,`extension`),Wa(836,`app-tabs`,null,19),cf(),Aa(838,`pre`)(839,`code`,35),bT(840,`
@Module({
imports: [
  TerminusModule.forRoot({
    logger: TerminusLogger,
  }),
],
})
export class HealthModule {}
`),cf()()(),Aa(841,`p`),bT(842,`To suppress all log messages from Terminus, including error messages, set the `),Aa(843,`code`),bT(844,`logger`),cf(),bT(845,` option to `),Aa(846,`code`),bT(847,`false`),cf(),bT(848,`:`),cf(),Aa(849,`app-copy-button`,33)(850,`span`,34),bT(851),LT(852,`extension`),Wa(853,`app-tabs`,null,20),cf(),Aa(855,`pre`)(856,`code`,35),bT(857,`
@Module({
imports: [
  TerminusModule.forRoot({
    logger: false,
  }),
],
})
export class HealthModule {}
`),cf()()(),Aa(858,`p`),bT(859,`You can also configure how health check errors are displayed in your logs.`),cf(),Aa(860,`table`)(861,`thead`)(862,`tr`)(863,`th`,57),bT(864,`Error Log Style`),cf(),Aa(865,`th`,57),bT(866,`Description`),cf(),Aa(867,`th`,57),bT(868,`Example`),cf()()(),Aa(869,`tbody`)(870,`tr`)(871,`td`,57)(872,`code`),bT(873,`json`),cf(),bT(874,` (default)`),cf(),Aa(875,`td`,57),bT(876,`Prints a summary of the health check result as a JSON object when a check fails`),cf(),Aa(877,`td`,57)(878,`figure`),Wa(879,`img`,58),cf()()(),Aa(880,`tr`)(881,`td`,57)(882,`code`),bT(883,`pretty`),cf()(),Aa(884,`td`,57),bT(885,`Prints a summary of the health check result in formatted boxes when a check fails, highlighting successful and failed results`),cf(),Aa(886,`td`,57)(887,`figure`),Wa(888,`img`,59),cf()()()()(),Aa(889,`p`),bT(890,`To change the log style, use the `),Aa(891,`code`),bT(892,`errorLogStyle`),cf(),bT(893,` configuration option:`),cf(),Aa(894,`app-copy-button`,33)(895,`span`,34),bT(896),LT(897,`extension`),Wa(898,`app-tabs`,null,21),cf(),Aa(900,`pre`)(901,`code`,35),bT(902,`
@Module({
  imports: [
    TerminusModule.forRoot({
      errorLogStyle: 'pretty',
    }),
  ]
})
export class HealthModule {}
`),cf()()(),Aa(903,`h4`,60)(904,`span`),bT(905,`Graceful shutdown timeout`),cf()(),Aa(906,`p`),bT(907,`If your application needs to postpone its shutdown, Terminus can handle it for you with the `),Aa(908,`code`),bT(909,`gracefulShutdownTimeoutMs`),cf(),bT(910,` option (in milliseconds, `),Aa(911,`code`),bT(912,`0`),cf(),bT(913,` by default).
This setting is particularly useful with an orchestrator such as Kubernetes.
By setting a delay slightly longer than the readiness check interval, you can achieve zero downtime when shutting down containers: as soon as a termination signal is received, the health check reports `),Aa(914,`code`),bT(915,`'shutting_down'`),cf(),bT(916,` with a `),Aa(917,`code`),bT(918,`503`),cf(),bT(919,` status code, so the orchestrator stops routing new traffic while the application finishes in-flight requests during the delay.`),cf(),Aa(920,`app-copy-button`,33)(921,`span`,34),bT(922),LT(923,`extension`),Wa(924,`app-tabs`,null,22),cf(),Aa(926,`pre`)(927,`code`,35),bT(928,`
@Module({
  imports: [
    TerminusModule.forRoot({
      gracefulShutdownTimeoutMs: 1000,
    }),
  ]
})
export class HealthModule {}
`),cf()()(),Aa(929,`blockquote`,51)(930,`strong`),bT(931,`Warning`),cf(),bT(932,` The delay is only applied on `),Aa(933,`code`),bT(934,`SIGTERM`),cf(),bT(935,`, which is the signal orchestrators such as Kubernetes send when stopping a container. Other signals (e.g. `),Aa(936,`code`),bT(937,`SIGINT`),cf(),bT(938,` from `),Aa(939,`code`),bT(940,`Ctrl+C`),cf(),bT(941,`) still switch the health check to `),Aa(942,`code`),bT(943,`'shutting_down'`),cf(),bT(944,` but shut the application down immediately. Make sure `),Aa(945,`a`,38),bT(946,`shutdown hooks`),cf(),bT(947,` are enabled; otherwise, Terminus never receives the signal.
`),cf(),Aa(948,`h4`,61)(949,`span`),bT(950,`More examples`),cf()(),Aa(951,`p`),bT(952,`More working examples are available in the `),Aa(953,`a`,62),bT(954,`Terminus samples directory`),cf(),bT(955,`.`),cf()(),Aa(956,`a`,63),Wa(957,`i`,64),Aa(958,`span`),bT(959,`Edit on GitHub`),cf()()()),c&2){let j=tT(110),x=tT(170),u=tT(182),M=tT(304),S=tT(337),P=tT(374),E=tT(403),L=tT(423),f=tT(453),D=tT(474),y=tT(511),_=tT(544),w=tT(574),g=tT(621),z=tT(661),q=tT(748),W=tT(783),N=tT(823),B=tT(837),H=tT(854),Q=tT(899),F=tT(925);zC(107),hf(` `,jT(108,56,`health.module`,j.isJsActive),`
`),zC(60),hf(` `,jT(168,59,`health.controller`,x.isJsActive),`
`),zC(4),zy(`hide`,x.isJsActive),zC(3),zy(`hide`,!x.isJsActive),zC(5),hf(` `,jT(180,62,`health.module`,u.isJsActive),`
`),zC(4),zy(`hide`,u.isJsActive),zC(3),zy(`hide`,!u.isJsActive),zC(115),hf(` `,jT(302,65,`health.controller`,M.isJsActive),`
`),zC(33),hf(` `,jT(335,68,`health.controller`,S.isJsActive),`
`),zC(4),zy(`hide`,S.isJsActive),zC(3),zy(`hide`,!S.isJsActive),zC(30),hf(` `,jT(372,71,`health.controller`,P.isJsActive),`
`),zC(29),hf(` `,jT(401,74,`health.controller`,E.isJsActive),`
`),zC(4),zy(`hide`,E.isJsActive),zC(3),zy(`hide`,!E.isJsActive),zC(13),hf(` `,jT(421,77,`health.controller`,L.isJsActive),`
`),zC(30),hf(` `,jT(451,80,`health.controller`,f.isJsActive),`
`),zC(4),zy(`hide`,f.isJsActive),zC(3),zy(`hide`,!f.isJsActive),zC(14),hf(` `,jT(472,83,`health.controller`,D.isJsActive),`
`),zC(37),hf(` `,jT(509,86,`dog.health`,y.isJsActive),`
`),zC(4),zy(`hide`,y.isJsActive),zC(3),zy(`hide`,!y.isJsActive),zC(26),hf(` `,jT(542,89,`health.module`,_.isJsActive),`
`),zC(30),hf(` `,jT(572,92,`health.controller`,w.isJsActive),`
`),zC(4),zy(`hide`,w.isJsActive),zC(3),zy(`hide`,!w.isJsActive),zC(40),hf(` `,jT(619,95,`dog.health`,g.isJsActive),`
`),zC(4),zy(`hide`,g.isJsActive),zC(3),zy(`hide`,!g.isJsActive),zC(33),hf(` `,jT(659,98,`cache.health`,z.isJsActive),`
`),zC(87),hf(` `,jT(746,101,`health.controller`,q.isJsActive),`
`),zC(20),Ky(`this.db.pingCheck('database', `,`{`,` timeout: 1500 `,`}`,`)`),zC(15),hf(` `,jT(781,104,`health.controller`,W.isJsActive),`
`),zC(40),hf(` `,jT(821,107,`terminus-logger.service`,N.isJsActive),`
`),zC(14),hf(` `,jT(835,110,`health.module`,B.isJsActive),`
`),zC(17),hf(` `,jT(852,113,`health.module`,H.isJsActive),`
`),zC(45),hf(` `,jT(897,116,`health.module`,Q.isJsActive),`
`),zC(26),hf(` `,jT(923,119,`health.module`,F.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return d})();var pe=(()=>{class d extends xt{static ɵfac=(()=>{let m;return function(h){return(m||(m=im(d)))(h||d)}})();static ɵcmp=ef({type:d,selectors:[[`app-workflows`]],features:[xy],decls:5775,vars:160,consts:[[`contentReference`,``],[`appbfa42dcc7abd946ced0d68918e516ed573db0c78`,``],[`appe7e054cdcf2e1477f7cfb3ce6008fd3034674f59`,``],[`app2d41f9f4ae7f0213ff1b5385f382ea395e853529`,``],[`appc6d0d4db9117f2dcf82b3be89a7c1c5b805b786e`,``],[`app77e25279bd3f9bedeffd282c57fa551f5174fff8`,``],[`app0e16f4746d15d940d6825589f22703e10c2d49f0`,``],[`appd5d656babae00d5026a5fdaa4fa8e923b7b27f9b`,``],[`app0c26d9a3563e5b2b397c0a5d4d952b83ff08877d`,``],[`app7231d2b43cb10d8cb32bb454b05cdc29e91ff86f`,``],[`app730f6259f0882f4098c1e67849ef4dbc92aae9b6`,``],[`appa2db38e571d60c9aac1e31ffb70c0e0601157d4d`,``],[`appe22138b65fc219ead461da21dbcb1f57bf8efeb9`,``],[`app5067f2ef91219d281286b95330eb9c192234cae4`,``],[`app1eb68b99dd7a852028f10e0e6d9a174daa0c7d9a`,``],[`appb8393f248df30f7cc2be8b2e5e2243cda6bfbc6c`,``],[`appd6b0c76789e9062e2803455fe150a2a6d5f659f8`,``],[`app5b0ed444f3ab0705ccd9124759796a55d3f26385`,``],[`app215ce579aa2ef91a378fd1ac98c85c488ee6e1a5`,``],[`appeaf187ce6c82bc4e8e15e0c5043080ba703517e8`,``],[`appebd1f6b814d6000f2683a32510584db6ef3a4918`,``],[`app4cc89498ec46c9297b91a1b3e7135526ed25b6be`,``],[`app971f3fc08af323e6cb03654e2ac7a4fe8551388f`,``],[`appc24a35e3642415b719dc6d16e0e35b1f3efceed9`,``],[`appca7709f2c47a62406b51d50917992e8eb6dae57e`,``],[`app68930262d4d3ef4c88cb0345ebdf71537c9271a6`,``],[`app0fb02d8f68318a6f5c10b77ab4c391c914459a69`,``],[`app87c25b9a6596bd62cf582ddb1b10e76ff5bd2df1`,``],[`appba63ee69d9851df1c49a46f667f6bd23e53bc920`,``],[`app4c34ef1213570128288d6ad3aa8daf4dffb40853`,``],[`appe8c3bd31122cfe9b17445b9750d4b006b36b6f64`,``],[`appbdd587e65a33b95f92de658a81e31f24c6e4d120`,``],[`app660259b93529e410e42532debe373095b9fcf840`,``],[`app51b12fb4f41f1fbaf8c5bf29d7fb523fc4a93c7e`,``],[`appab0e8707397876904137f9936d52a175a9e32b32`,``],[`app6d9bb250b2dc71920713a77010ab5650b2e99c0f`,``],[`app1c016ebd3d2c114a820b941d6dddf1a4b7af589e`,``],[`appce2900002a23594ebd06d48298353a9124e25eb8`,``],[`appff9b3b291935f7879c10347a7730abcd7f956e25`,``],[`app6ea6ece02199fb556837a53267d56e21aea86ad2`,``],[`app2a3afb9ae1e11299fac30abf6c2492f46cd2d87b`,``],[1,`content`],[1,`content-inner`],[`id`,`durable-workflows`],[`appAnchor`,``,`id`,`workflows-queues-or-sagas`],[`href`,`/application/queues#bullmq-installation`],[`href`,`/recipes/cqrs#sagas`],[`href`,`/reliability/workflows#with-cqrs`],[`href`,`/reliability/workflows#sleep-for-a-week-then-ask-for-a-review`],[`href`,`/reliability/workflows#wait-for-the-delivery-webhook`],[`href`,`/reliability/workflows#let-customer-support-cancel-an-order`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[`href`,`/data/drizzle`],[`href`,`/reliability/workflows#keep-workflows-in-your-database`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://pglite.dev`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`register-the-module`],[`routerLink`,`/data/drizzle`],[1,`info`],[`href`,`/application/configuration`],[`appAnchor`,``,`id`,`keep-workflows-in-your-database`],[1,`warning`],[`href`,`/reliability/workflows#start-it-with-the-order`],[`href`,`/reliability/workflows#the-store-contract`],[`appAnchor`,``,`id`,`write-the-workflow`],[`appAnchor`,``,`id`,`start-the-workflow`],[`appAnchor`,``,`id`,`start-it-with-the-order`],[`appAnchor`,``,`id`,`report-its-status`],[`href`,`/reliability/workflows#what-each-status-means`],[`appAnchor`,``,`id`,`wait-for-signals-and-timers`],[`appAnchor`,``,`id`,`wait-for-the-delivery-webhook`],[`appAnchor`,``,`id`,`wait-for-whichever-comes-first`],[`href`,`/reliability/workflows#start-child-workflows`],[`appAnchor`,``,`id`,`sleep-for-a-week-then-ask-for-a-review`],[`appAnchor`,``,`id`,`time-out-the-whole-workflow`],[`appAnchor`,``,`id`,`cancel-and-operate-workflows`],[`appAnchor`,``,`id`,`let-customer-support-cancel-an-order`],[`appAnchor`,``,`id`,`what-each-status-means`],[`appAnchor`,``,`id`,`retry-delete-or-terminate`],[`appAnchor`,``,`id`,`purge-finished-instances`],[`href`,`/reliability/locks`],[`appAnchor`,``,`id`,`limits-children-and-batch-work`],[`appAnchor`,``,`id`,`limit-how-many-run-at-once`],[`href`,`/reliability/workflows#run-workflows-on-a-schedule`],[`appAnchor`,``,`id`,`start-child-workflows`],[`appAnchor`,``,`id`,`long-running-steps`],[`routerLink`,`/application/queues`],[`appAnchor`,``,`id`,`run-workflows-on-a-schedule`],[`appAnchor`,``,`id`,`wait-for-a-result`],[`appAnchor`,``,`id`,`deploy-changes-safely`],[1,`language-text`],[`appAnchor`,``,`id`,`rules-for-workflow-code`],[`appAnchor`,``,`id`,`try-it-and-test-it`],[`appAnchor`,``,`id`,`try-it`],[`appAnchor`,``,`id`,`test-with-a-manual-clock`],[`appAnchor`,``,`id`,`test-crash-recovery`],[`appAnchor`,``,`id`,`with-cqrs`],[`routerLink`,`/recipes/cqrs`],[`appAnchor`,``,`id`,`map-events-to-workflows`],[`appAnchor`,``,`id`,`execute-commands-from-steps`],[`appAnchor`,``,`id`,`what-each-way-of-publishing-guarantees`],[`appAnchor`,``,`id`,`prepare-for-production`],[`appAnchor`,``,`id`,`keep-journals-short`],[`appAnchor`,``,`id`,`encrypt-what-workflows-store`],[`appAnchor`,``,`id`,`production-checklist`],[`href`,`/reliability/workflows#events`],[`href`,`/reliability/workflows#purge-finished-instances`],[`href`,`/reliability/workflows#keep-journals-short`],[`href`,`/reliability/workflows#time-out-the-whole-workflow`],[`href`,`/reliability/workflows#encrypt-what-workflows-store`],[`appAnchor`,``,`id`,`reference`],[`appAnchor`,``,`id`,`module-options`],[`href`,`/reliability/workflows#test-with-a-manual-clock`],[`appAnchor`,``,`id`,`postgresql-store`],[`appAnchor`,``,`id`,`mysql-store`],[`appAnchor`,``,`id`,`command-line`],[`appAnchor`,``,`id`,`the-store-contract`],[`appAnchor`,``,`id`,`call-options`],[`href`,`/reliability/workflows#deploy-changes-safely`],[`href`,`/reliability/workflows#limit-how-many-run-at-once`],[`href`,`/reliability/workflows#write-the-workflow`],[`href`,`/reliability/workflows#long-running-steps`],[`href`,`/reliability/workflows#wait-for-whichever-comes-first`],[`href`,`/reliability/workflows#report-its-status`],[`href`,`/reliability/workflows#wait-for-a-result`],[`href`,`/reliability/workflows#retry-delete-or-terminate`],[`appAnchor`,``,`id`,`events`],[`appAnchor`,``,`id`,`errors`],[`href`,`/reliability/workflows#mysql-store`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/reliability/workflows.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,h){if(c&1&&(Aa(0,`div`,41,0)(2,`div`,42)(3,`h3`,43),bT(4,`Durable workflows`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/workflows`),cf(),bT(8,` runs processes that take days, such as fulfilling an order, as one `),Aa(9,`code`),bT(10,`async`),cf(),bT(11,` method whose steps are kept in your database and survive restarts.`),cf(),Aa(12,`p`),bT(13,`Some business processes take days and span several systems. In an online store for cat food and supplies, fulfilling an order means:`),cf(),Aa(14,`ol`)(15,`li`),bT(16,`Charge the customer's card with the payment provider.`),cf(),Aa(17,`li`),bT(18,`Reserve the items in the warehouse.`),cf(),Aa(19,`li`),bT(20,`Wait up to 3 days for the carrier's `),Aa(21,`code`),bT(22,`shipment.delivered`),cf(),bT(23,` webhook.`),cf(),Aa(24,`li`),bT(25,`If it never arrives, or the carrier brings the parcel back, refund the charge and release the stock. Otherwise, wait 7 days and ask the customer for a review.`),cf()(),Aa(26,`p`),bT(27,`The process must survive deploys and crashes, charge exactly once, undo its work when it fails, and tell support where every order stands. With `),Aa(28,`code`),bT(29,`@nestjs/workflows`),cf(),bT(30,` you write it as one `),Aa(31,`code`),bT(32,`async`),cf(),bT(33,` method on an injectable class. Each side effect runs in a journaled `),Aa(34,`strong`),bT(35,`step`),cf(),bT(36,`. After a restart, the method runs again from the top, and completed steps return their recorded results instead of running twice. Waits and sleeps park the instance in your own database, where any process on any host can pick it up when it's due. There is no workflow server to run.`),cf(),Aa(37,`h4`,44)(38,`span`),bT(39,`Workflows, queues or sagas?`),cf()(),Aa(40,`p`),bT(41,`Nest already has two tools for work that happens later, and each stays the right choice for its job:`),cf(),Aa(42,`ul`)(43,`li`)(44,`strong`)(45,`a`,45),bT(46,`BullMQ`),cf()(),bT(47,` runs one unit of background work at a time, such as sending an email or transcoding a video, with concurrency limits, rate limits, priorities, and delayed or repeatable jobs. A process with a single delayed action ("cancel the order if it isn't paid within an hour") is a delayed job plus a status column.`),cf(),Aa(48,`li`)(49,`strong`)(50,`a`,46),bT(51,`CQRS sagas`),cf()(),bT(52,` turn events into commands inside one process. They fit reactions where losing in-flight state on a restart is acceptable. Where it isn't, the same events can start and signal workflows: see `),Aa(53,`a`,47),bT(54,`With CQRS`),cf(),bT(55,`.`),cf(),Aa(56,`li`)(57,`strong`),bT(58,`Workflows`),cf(),bT(59,` fit a process with several steps that waits hours or days for timers or outside events, must survive restarts and deploys, and must undo its completed steps when it fails or is cancelled. They have concurrency limits, rate limits, priorities and schedules of their own, and a step can still hand heavy work to a BullMQ queue.`),cf()(),Aa(60,`p`),bT(61,`A workflow instance is a row in your application's database, so starting one can be part of the transaction that saves the order: pass the transaction to `),Aa(62,`code`),bT(63,`start()`),cf(),bT(64,` as its `),Aa(65,`code`),bT(66,`transaction`),cf(),bT(67,` option. The order and its fulfilment commit together or not at all. A job queue writes through its own connection (Redis, or BullMQ's own PostgreSQL pool), so saving an order and enqueueing its job are two writes, and a crash between them loses one. The same goes for signals: a webhook can update the order and wake its workflow in one transaction.`),cf(),Aa(68,`p`),bT(69,`The tutorial below shows where queues and sagas run out: code that continues after a durable wait (`),Aa(70,`a`,48),bT(71,`Sleep for a week, then ask for a review`),cf(),bT(72,`), an event racing a deadline (`),Aa(73,`a`,49),bT(74,`Wait for the delivery webhook`),cf(),bT(75,`), and compensation that survives a crash (`),Aa(76,`a`,50),bT(77,`Let customer support cancel an order`),cf(),bT(78,`).`),cf(),Aa(79,`h4`,51)(80,`span`),bT(81,`Installation`),cf()(),Aa(82,`p`),bT(83,`To get started, install the required dependency:`),cf(),Aa(84,`pre`)(85,`code`,52),bT(86,`
$ npm i --save @nestjs/workflows
`),cf()(),Aa(87,`p`),bT(88,`The tutorial keeps its workflows in PostgreSQL, with the package's own store, and uses Drizzle, registered through `),Aa(89,`a`,53)(90,`code`),bT(91,`@nestjs/drizzle`),cf()(),bT(92,`. `),Aa(93,`a`,54),bT(94,`Keep workflows in your database`),cf(),bT(95,` shows the store with TypeORM too, and the package's MySQL store. The tests on this page use `),Aa(96,`a`,55),bT(97,`PGlite`),cf(),bT(98,`, so they need no server.`),cf(),Aa(99,`p`),bT(100,`Orders live in the example application's own table, `),Aa(101,`code`),bT(102,`orders`),cf(),bT(103,`. The tutorial uses in-memory stand-ins for the payment provider's SDK (`),Aa(104,`code`),bT(105,`PaymentProviderClient`),cf(),bT(106,`), the stock table (`),Aa(107,`code`),bT(108,`InventoryService`),cf(),bT(109,`) and the mail provider (`),Aa(110,`code`),bT(111,`MailService`),cf(),bT(112,`). Like the real systems, they deduplicate requests by idempotency key. Orders have this shape:`),cf(),Aa(113,`app-copy-button`,56)(114,`span`,57),bT(115),LT(116,`extension`),Wa(117,`app-tabs`,null,1),cf(),Aa(119,`pre`)(120,`code`,58),bT(121,`
export interface OrderItem {
  productId: string;
  quantity: number;
  /** Unit price in cents. */
  price: number;
}

/** How the carrier ships it. Express orders are fulfilled first. */
export type Shipping = 'standard' | 'express';

export type OrderStatus = 'placed' | 'delivered' | 'returned' | 'cancelled';

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  shipping: Shipping;
  /** In cents. */
  total: number;
  status: OrderStatus;
}

export class PlaceOrderDto {
  userId: string;
  items: OrderItem[];
  /** Default 'standard'. */
  shipping?: Shipping;
}

export interface FulfilmentResult {
  chargeId: string;
  trackingNumber: string;
}
`),cf()()(),Aa(122,`h5`,59)(123,`span`),bT(124,`Register the module`),cf()(),Aa(125,`p`),bT(126,`Import `),Aa(127,`code`),bT(128,`WorkflowsModule`),cf(),bT(129,` once, in the root module, next to `),Aa(130,`a`,60)(131,`code`),bT(132,`DrizzleModule`),cf()(),bT(133,`, which registers the Drizzle database that `),Aa(134,`code`),bT(135,`@InjectDrizzle()`),cf(),bT(136,` injects. Workflow classes are ordinary providers, so they go in `),Aa(137,`code`),bT(138,`providers`),cf(),bT(139,` next to the services they inject. This is the finished module: the workflows and the controllers it lists are written in the following sections, and the first provider is the package's PostgreSQL store, which `),Aa(140,`a`,54),bT(141,`Keep workflows in your database`),cf(),bT(142,` explains.`),cf(),Aa(143,`app-copy-button`,56)(144,`span`,57),bT(145),LT(146,`extension`),Wa(147,`app-tabs`,null,2),cf(),Aa(149,`pre`)(150,`code`,58),bT(151,`
import { Module } from '@nestjs/common';
import { DrizzleModule, getDrizzleToken } from '@nestjs/drizzle';
import { WorkflowsModule, WorkflowStorage } from '@nestjs/workflows';
import { fromDrizzle, PostgresWorkflowStore } from '@nestjs/workflows/postgres';
import { drizzle } from 'drizzle-orm/node-postgres';
import type { Database } from './database/drizzle.js';
import * as schema from './database/schema.js';
import { InventoryService } from './inventory/inventory.service.js';
import { InvoiceBatchWorkflow } from './invoices/invoice-batch.workflow.js';
import { InvoicesController } from './invoices/invoices.controller.js';
import { InvoicesService } from './invoices/invoices.service.js';
import { MailService } from './mail/mail.service.js';
import { OrderFulfilmentWorkflow } from './orders/order-fulfilment.workflow.js';
import { OrdersController } from './orders/orders.controller.js';
import { OrdersService } from './orders/orders.service.js';
import { PaymentProviderClient } from './payments/payment-provider.client.js';
import { PaymentsService } from './payments/payments.service.js';
import { CarrierWebhookController } from './shipping/carrier-webhook.controller.js';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      // Drizzle on PostgreSQL: a pg pool on DATABASE_URL, closed after the worker handed its instances back
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL!, schema }),
    }),
    WorkflowsModule.forRoot({
      worker: {
        concurrency: 10, // instances this process executes at once
        leaseDuration: '30s', // how long a crashed process keeps its instances
        shutdownTimeout: '10s', // how long a deploy waits for running steps
      },
    }),
  ],
  controllers: [OrdersController, CarrierWebhookController, InvoicesController],
  providers: [
    {
      // Instances and journals in your database, in a schema of their own (nest_workflows)
      provide: PostgresWorkflowStore,
      inject: [getDrizzleToken(), WorkflowStorage],
      useFactory: (db: Database, workflowStorage: WorkflowStorage) =>
        new PostgresWorkflowStore({ executor: fromDrizzle(db) }, workflowStorage),
    },
    OrdersService,
    PaymentProviderClient,
    PaymentsService,
    InventoryService,
    MailService,
    InvoicesService,
    OrderFulfilmentWorkflow,
    InvoiceBatchWorkflow,
  ],
})
export class AppModule {}
`),cf()()(),Aa(152,`blockquote`,61)(153,`strong`),bT(154,`Hint`),cf(),bT(155,` The tutorial reads `),Aa(156,`code`),bT(157,`process.env`),cf(),bT(158,` directly, to stay short. In an application, load the environment through `),Aa(159,`a`,62)(160,`code`),bT(161,`@nestjs/config`),cf()(),bT(162,` with a validation schema, so a missing `),Aa(163,`code`),bT(164,`DATABASE_URL`),cf(),bT(165,` stops the application at startup, and read it from `),Aa(166,`code`),bT(167,`ConfigService`),cf(),bT(168,` in the factory.
`),cf(),Aa(169,`p`),bT(170,`Every option is optional: `),Aa(171,`code`),bT(172,`WorkflowsModule.forRoot()`),cf(),bT(173,` works as is. To read them from `),Aa(174,`code`),bT(175,`ConfigService`),cf(),bT(176,`, use `),Aa(177,`code`),bT(178,`forRootAsync()`),cf(),bT(179,` with a factory, or with a `),Aa(180,`code`),bT(181,`useClass`),cf(),bT(182,` class that implements `),Aa(183,`code`),bT(184,`WorkflowsOptionsFactory`),cf(),bT(185,` and its `),Aa(186,`code`),bT(187,`createWorkflowsOptions()`),cf(),bT(188,` method.`),cf(),Aa(189,`p`),bT(190,`The `),Aa(191,`code`),bT(192,`worker`),cf(),bT(193,` runs inside your application process. It polls for due instances every second, and a local `),Aa(194,`code`),bT(195,`start()`),cf(),bT(196,` or `),Aa(197,`code`),bT(198,`signal()`),cf(),bT(199,` wakes it immediately. It claims due instances under a lease and renews the lease every third of `),Aa(200,`code`),bT(201,`leaseDuration`),cf(),bT(202,`. If the process dies, its instances are claimable again once the lease expires. Set `),Aa(203,`code`),bT(204,`worker: false`),cf(),bT(205,` on processes that should only start, signal and inspect workflows, such as API pods. A step gets 3 attempts by default, with a backoff that starts at 1 second and doubles up to 5 minutes. A `),Aa(206,`code`),bT(207,`retry`),cf(),bT(208,` option here changes that default.`),cf(),Aa(209,`p`),bT(210,`In `),Aa(211,`code`),bT(212,`main.ts`),cf(),bT(213,`, enable shutdown hooks. On `),Aa(214,`code`),bT(215,`SIGTERM`),cf(),bT(216,` the worker stops claiming, aborts the `),Aa(217,`code`),bT(218,`signal`),cf(),bT(219,` of running steps, waits up to `),Aa(220,`code`),bT(221,`shutdownTimeout`),cf(),bT(222,`, and hands the instances it stopped back to the store. Another process then picks them up at once instead of waiting for the lease.`),cf(),Aa(223,`app-copy-button`,56)(224,`span`,57),bT(225),LT(226,`extension`),Wa(227,`app-tabs`,null,3),cf(),Aa(229,`pre`)(230,`code`,58),bT(231,`
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // On SIGTERM, stop claiming work and hand running instances back.
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
`),cf()()(),Aa(232,`h5`,63)(233,`span`),bT(234,`Keep workflows in your database`),cf()(),Aa(235,`p`),bT(236,`Workflow instances, their journals, the signals they wait for and the signals sent live in a `),Aa(237,`strong`),bT(238,`store`),cf(),bT(239,`. Until you register one, the module keeps them in memory: fine for a first run, but a restart loses every running order, and two processes don't share them.`),cf(),Aa(240,`blockquote`,64)(241,`strong`),bT(242,`Warning`),cf(),bT(243,` With `),Aa(244,`code`),bT(245,`NODE_ENV=production`),cf(),bT(246,` and no store registered, startup fails, unless you set `),Aa(247,`code`),bT(248,`allowInMemoryStorage: true`),cf(),bT(249,`.
`),cf(),Aa(250,`p`),bT(251,`On PostgreSQL, register the package's store, `),Aa(252,`code`),bT(253,`PostgresWorkflowStore`),cf(),bT(254,` from `),Aa(255,`code`),bT(256,`@nestjs/workflows/postgres`),cf(),bT(257,`. It runs its SQL through the database client your application already has, so it can join your transactions. It's an ordinary provider, registered once, in the root module, next to `),Aa(258,`code`),bT(259,`WorkflowsModule`),cf(),bT(260,`: both are application-wide. In `),Aa(261,`code`),bT(262,`AppModule`),cf(),bT(263,` above, it's the first provider: a factory that injects the Drizzle database and the `),Aa(264,`code`),bT(265,`WorkflowStorage`),cf(),bT(266,` registry, which the store registers itself with.`),cf(),Aa(267,`p`)(268,`code`),bT(269,`fromDrizzle(db)`),cf(),bT(270,` is the store's `),Aa(271,`strong`),bT(272,`executor`),cf(),bT(273,`: it runs the store's statements through your Drizzle database, whichever driver it uses, such as `),Aa(274,`code`),bT(275,`pg`),cf(),bT(276,` or PGlite. `),Aa(277,`code`),bT(278,`fromPg(pool)`),cf(),bT(279,`, `),Aa(280,`code`),bT(281,`fromTypeOrm(dataSource)`),cf(),bT(282,`, `),Aa(283,`code`),bT(284,`fromPrisma(prisma)`),cf(),bT(285,` and `),Aa(286,`code`),bT(287,`fromKysely(db)`),cf(),bT(288,` do the same for a node-postgres pool, TypeORM, Prisma and Kysely. At startup, the module logs `),Aa(289,`code`),bT(290,`WorkflowStorage: PostgresWorkflowStore`),cf(),bT(291,`.`),cf(),Aa(292,`p`)(293,`strong`),bT(294,`The schema.`),cf(),bT(295,` There's nothing to create for workflows: no tables, entities or Prisma models. The store keeps its tables in a schema of its own, `),Aa(296,`code`),bT(297,`nest_workflows`),cf(),bT(298,` (the `),Aa(299,`code`),bT(300,`schema`),cf(),bT(301,` option names another), and creates and migrates it itself. On MySQL, which has no schemas, they're tables of the connection's database, with the schema's name as their prefix: `),Aa(302,`code`),bT(303,`nest_workflows_instances`),cf(),bT(304,` and so on.`),cf(),Aa(305,`table`)(306,`thead`)(307,`tr`)(308,`th`),bT(309,`Table`),cf(),Aa(310,`th`),bT(311,`What it holds`),cf()()(),Aa(312,`tbody`)(313,`tr`)(314,`td`)(315,`code`),bT(316,`nest_workflows.instances`),cf()(),Aa(317,`td`),bT(318,`Each workflow instance: its input, status, output or error, when it's due, and its lease`),cf()(),Aa(319,`tr`)(320,`td`)(321,`code`),bT(322,`nest_workflows.journal`),cf()(),Aa(323,`td`),bT(324,`Each instance's recorded steps, sleeps, waits and compensations, with their results`),cf()(),Aa(325,`tr`)(326,`td`)(327,`code`),bT(328,`nest_workflows.waits`),cf()(),Aa(329,`td`),bT(330,`The signals a suspended instance waits for`),cf()(),Aa(331,`tr`)(332,`td`)(333,`code`),bT(334,`nest_workflows.signals`),cf()(),Aa(335,`td`),bT(336,`The signals sent, until `),Aa(337,`code`),bT(338,`purge()`),cf(),bT(339,` deletes the ones no instance can take any more`),cf()(),Aa(340,`tr`)(341,`td`)(342,`code`),bT(343,`nest_workflows.schedules`),cf()(),Aa(344,`td`),bT(345,`The schedules, with their spec, state and next run`),cf()(),Aa(346,`tr`)(347,`td`)(348,`code`),bT(349,`nest_workflows.rate_limits`),cf()(),Aa(350,`td`),bT(351,`The rate-limit windows, per workflow and key`),cf()(),Aa(352,`tr`)(353,`td`)(354,`code`),bT(355,`nest_workflows.migrations`),cf()(),Aa(356,`td`),bT(357,`The versions of the store's schema applied`),cf()()()(),Aa(358,`p`),bT(359,`They belong to the store: your migrations don't create them, and your own tables can't collide with them.`),cf(),Aa(360,`p`)(361,`strong`),bT(362,`Migrations.`),cf(),bT(363,` The package ships the schema as versioned migrations, and the store applies them itself. With the `),Aa(364,`code`),bT(365,`migrate`),cf(),bT(366,` option, it applies the ones the schema hasn't had yet at startup, before the worker runs, in one transaction that holds an advisory lock: of several processes that start together, one migrates, and the others find nothing left to do. `),Aa(367,`code`),bT(368,`migrate`),cf(),bT(369,` defaults to `),Aa(370,`code`),bT(371,`true`),cf(),bT(372,`, except with `),Aa(373,`code`),bT(374,`NODE_ENV=production`),cf(),bT(375,`. So in development and in tests, the store creates its schema on the first start, and your migrations only create your own tables, here `),Aa(376,`code`),bT(377,`orders`),cf(),bT(378,`.`),cf(),Aa(379,`p`),bT(380,`In production, apply the migrations before the new version of your application starts, as you apply your own, so that no process changes the schema while it boots: in the middle of a rolling deploy, that would lock busy tables, and a least-privilege database user can't do it anyway. The package's command line does it from your deploy step, next to `),Aa(381,`code`),bT(382,`npx drizzle-kit migrate`),cf(),bT(383,`. It reads the database from `),Aa(384,`code`),bT(385,`DATABASE_URL`),cf(),bT(386,`, or from `),Aa(387,`code`),bT(388,`--url`),cf(),bT(389,`, and needs `),Aa(390,`code`),bT(391,`pg`),cf(),bT(392,` installed:`),cf(),Aa(393,`pre`)(394,`code`,52),bT(395,`
$ npx @nestjs/workflows status
Schema "nest_workflows" is at version 0; this version of @nestjs/workflows needs version 1.
$ npx @nestjs/workflows migrate
Migrated schema "nest_workflows" to version 1 (applied 1).
`),cf()(),Aa(396,`p`)(397,`code`),bT(398,`status`),cf(),bT(399,` exits with 1 while the schema is behind, which makes it a check for CI. To apply the migrations with your own migration tool instead, take their SQL from `),Aa(400,`code`),bT(401,`npx @nestjs/workflows sql`),cf(),bT(402,`, or from `),Aa(403,`code`),bT(404,`PostgresWorkflowStore.migrationSql()`),cf(),bT(405,` in code: the statements of every migration, one per paragraph, with the bookkeeping that records the version. Run them in one transaction, as TypeORM's and Drizzle's migrators do. With TypeORM, that's a migration of your own, next to the ones it generates for your entities:`),cf(),Aa(406,`app-copy-button`,56)(407,`span`,57),bT(408),LT(409,`extension`),Wa(410,`app-tabs`,null,4),cf(),Aa(412,`pre`)(413,`code`,58),bT(414,`
import { PostgresWorkflowStore } from '@nestjs/workflows/postgres';
import type { MigrationInterface, QueryRunner } from 'typeorm';

export class WorkflowStore1790801342207 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(PostgresWorkflowStore.migrationSql());
  }

  async down(): Promise<void> {
    throw new Error('The workflow store has no down migrations.');
  }
}
`),cf()()(),Aa(415,`p`),bT(416,`With drizzle-kit, create a custom migration, and fill the file it creates with the SQL, a `),Aa(417,`code`),bT(418,`--> statement-breakpoint`),cf(),bT(419,` line between the statements: Drizzle's migrator then runs them one at a time, which PGlite requires. In code, `),Aa(420,`code`),bT(421,`migrationSql()`),cf(),bT(422,` with `),Aa(423,`code`),bT(424,`statementBreakpoints: true`),cf(),bT(425,` returns the same.`),cf(),Aa(426,`pre`)(427,`code`,52),bT(428,`
$ npx drizzle-kit generate --custom --name=workflows
$ npx @nestjs/workflows sql --statement-breakpoints > drizzle/20261103120000_workflows/migration.sql
`),cf()(),Aa(429,`p`),bT(430,`On MySQL, `),Aa(431,`code`),bT(432,`MySqlWorkflowStore.migrationStatements()`),cf(),bT(433,` returns the statements one per string, and a TypeORM migration runs them one per call:`),cf(),Aa(434,`app-copy-button`,56)(435,`span`,57),bT(436),LT(437,`extension`),Wa(438,`app-tabs`,null,5),cf(),Aa(440,`pre`)(441,`code`,58),bT(442,`
for (const statement of MySqlWorkflowStore.migrationStatements()) {
  await queryRunner.query(statement);
}
`),cf()()(),Aa(443,`p`),bT(444,`With `),Aa(445,`code`),bT(446,`migrate`),cf(),bT(447,` off, a store whose schema is behind fails the startup with a `),Aa(448,`code`),bT(449,`WorkflowSchemaError`),cf(),bT(450,` that names these three ways, and fails every call the same way until the schema catches up, which it notices without a restart. Migrations only ever add tables, columns and indexes, so during a rolling deploy, the previous version of your application keeps running on the migrated schema. There are no down migrations.`),cf(),Aa(451,`p`)(452,`strong`),bT(453,`Transactions.`),cf(),Aa(454,`code`),bT(455,`start()`),cf(),bT(456,` and `),Aa(457,`code`),bT(458,`signal()`),cf(),bT(459,` take your transaction as their `),Aa(460,`code`),bT(461,`transaction`),cf(),bT(462,` option: with Drizzle, the `),Aa(463,`code`),bT(464,`tx`),cf(),bT(465,` that `),Aa(466,`code`),bT(467,`db.transaction()`),cf(),bT(468,` hands its callback, as `),Aa(469,`a`,65),bT(470,`Start it with the order`),cf(),bT(471,` shows. The store runs its statements on that transaction, so they commit or roll back with your writes. It refuses the database itself, whose statements would commit on their own, with a `),Aa(472,`code`),bT(473,`TypeError`),cf(),bT(474,` that says what to pass. With the other executors, pass a node-postgres client after `),Aa(475,`code`),bT(476,`BEGIN`),cf(),bT(477,` (not the pool), TypeORM's `),Aa(478,`code`),bT(479,`EntityManager`),cf(),bT(480,` from `),Aa(481,`code`),bT(482,`dataSource.transaction()`),cf(),bT(483,`, Prisma's interactive transaction client, or a Kysely transaction.`),cf(),Aa(484,`p`)(485,`strong`),bT(486,`Isolation.`),cf(),bT(487,` The store relies on READ COMMITTED, PostgreSQL's default isolation level: its statements race each other, and under a stricter level they would fail with serialization errors. At startup, it checks the database's `),Aa(488,`code`),bT(489,`default_transaction_isolation`),cf(),bT(490,`, and fails if it's stricter. A `),Aa(491,`code`),bT(492,`signal()`),cf(),bT(493,` in your transaction needs a READ COMMITTED transaction too, or its wake-ups could miss waits committed after the transaction's snapshot: it's refused with a `),Aa(494,`code`),bT(495,`TypeError`),cf(),bT(496,` otherwise.`),cf(),Aa(497,`p`)(498,`strong`),bT(499,`With TypeORM.`),cf(),Aa(500,`code`),bT(501,`TypeOrmModule`),cf(),bT(502,` takes the place of `),Aa(503,`code`),bT(504,`DrizzleModule`),cf(),bT(505,` in `),Aa(506,`code`),bT(507,`AppModule`),cf(),bT(508,`, and the store runs on the `),Aa(509,`code`),bT(510,`DataSource`),cf(),bT(511,` it provides, through `),Aa(512,`code`),bT(513,`fromTypeOrm()`),cf(),bT(514,`:`),cf(),Aa(515,`app-copy-button`,56)(516,`span`,57),bT(517),LT(518,`extension`),Wa(519,`app-tabs`,null,6),cf(),Aa(521,`pre`)(522,`code`,58),bT(523,`
{
  // Instances and journals in your database, in a schema of their own (nest_workflows)
  provide: PostgresWorkflowStore,
  inject: [DataSource, WorkflowStorage],
  useFactory: (dataSource: DataSource, workflowStorage: WorkflowStorage) =>
    new PostgresWorkflowStore({ executor: fromTypeOrm(dataSource) }, workflowStorage),
},
`),cf()()(),Aa(524,`p`),bT(525,`Where the tutorial passes Drizzle's `),Aa(526,`code`),bT(527,`tx`),cf(),bT(528,` to `),Aa(529,`code`),bT(530,`start()`),cf(),bT(531,` and `),Aa(532,`code`),bT(533,`signal()`),cf(),bT(534,`, pass the `),Aa(535,`code`),bT(536,`EntityManager`),cf(),bT(537,` that `),Aa(538,`code`),bT(539,`dataSource.transaction()`),cf(),bT(540,` hands its callback. The store refuses `),Aa(541,`code`),bT(542,`dataSource.manager`),cf(),bT(543,`, whose writes would commit on their own. This is the order service's `),Aa(544,`code`),bT(545,`place()`),cf(),bT(546,`, from `),Aa(547,`a`,65),bT(548,`Start it with the order`),cf(),bT(549,`, with TypeORM:`),cf(),Aa(550,`app-copy-button`,56)(551,`span`,57),bT(552),LT(553,`extension`),Wa(554,`app-tabs`,null,7),cf(),Aa(556,`pre`)(557,`code`,58),bT(558,`
return this.dataSource.transaction(async (manager) => {
  await manager.insert(OrderEntity, order);
  // Same transaction: the fulfilment exists if and only if the order does.
  const fulfilment = await this.workflowClient.start(OrderFulfilmentWorkflow, order, {
    id: fulfilmentId(order.id),
    transaction: manager,
  });
  return { ...order, fulfilment };
});
`),cf()()(),Aa(559,`blockquote`,61)(560,`strong`),bT(561,`Hint`),cf(),bT(562,` With Prisma, pass the client to `),Aa(563,`code`),bT(564,`fromPrisma()`),cf(),bT(565,`, and as `),Aa(566,`code`),bT(567,`transaction`),cf(),bT(568,`, the transaction client that `),Aa(569,`code`),bT(570,`prisma.$transaction()`),cf(),bT(571,` hands its callback. The store's own transactions wait up to 10 seconds for a connection and run for up to a minute, longer than Prisma's defaults: the second argument of `),Aa(572,`code`),bT(573,`fromPrisma()`),cf(),bT(574,` changes that, with `),Aa(575,`code`),bT(576,`maxWait`),cf(),bT(577,` and `),Aa(578,`code`),bT(579,`timeout`),cf(),bT(580,`. If your application signals in bursts, give its own transactions a longer `),Aa(581,`code`),bT(582,`maxWait`),cf(),bT(583,` too, since signals queue behind each other.
`),cf(),Aa(584,`p`)(585,`strong`),bT(586,`With MySQL.`),cf(),bT(587,` The package has a store for MySQL 8.4 LTS and 9.x too, `),Aa(588,`code`),bT(589,`MySqlWorkflowStore`),cf(),bT(590,` from `),Aa(591,`code`),bT(592,`@nestjs/workflows/mysql`),cf(),bT(593,`, with executors of the same names. MariaDB isn't supported yet: the store refuses it at startup. The provider is the same, with the MySQL store's class and executor. This is `),Aa(594,`code`),bT(595,`AppModule`),cf(),bT(596,` with Drizzle on a mysql2 pool, where `),Aa(597,`code`),bT(598,`mode: 'default'`),cf(),bT(599,` is Drizzle's setting for a schema on MySQL:`),cf(),Aa(600,`app-copy-button`,56)(601,`span`,57),bT(602),LT(603,`extension`),Wa(604,`app-tabs`,null,8),cf(),Aa(606,`pre`)(607,`code`,58),bT(608,`
import { fromDrizzle, MySqlWorkflowStore } from '@nestjs/workflows/mysql';
import { drizzle } from 'drizzle-orm/mysql2';

@Module({
  imports: [
    DrizzleModule.forRootAsync({
      // Drizzle on MySQL: a mysql2 pool on DATABASE_URL (mysql://...), whose path names the database
      useFactory: () => ({ drizzle, connection: process.env.DATABASE_URL!, schema, mode: 'default' as const }),
    }),
    // ...
  ],
  providers: [
    {
      // Instances and journals in your database, in tables of their own (nest_workflows_*)
      provide: MySqlWorkflowStore,
      inject: [getDrizzleToken(), WorkflowStorage],
      useFactory: (db: Database, workflowStorage: WorkflowStorage) =>
        new MySqlWorkflowStore({ executor: fromDrizzle(db) }, workflowStorage),
    },
    // ...
  ],
})
export class AppModule {}
`),cf()()(),Aa(609,`p`)(610,`code`),bT(611,`fromMysql2(pool)`),cf(),bT(612,`, `),Aa(613,`code`),bT(614,`fromTypeOrm(dataSource)`),cf(),bT(615,`, `),Aa(616,`code`),bT(617,`fromPrisma(prisma)`),cf(),bT(618,` and `),Aa(619,`code`),bT(620,`fromKysely(db)`),cf(),bT(621,` do the same for a mysql2 pool, TypeORM, Prisma (through `),Aa(622,`code`),bT(623,`@prisma/adapter-mariadb`),cf(),bT(624,`) and Kysely. `),Aa(625,`code`),bT(626,`start()`),cf(),bT(627,` and `),Aa(628,`code`),bT(629,`signal()`),cf(),bT(630,` take the same transaction objects as on PostgreSQL, and with mysql2, a connection after `),Aa(631,`code`),bT(632,`beginTransaction()`),cf(),bT(633,`. What differs from PostgreSQL:`),cf(),Aa(634,`ul`)(635,`li`)(636,`strong`),bT(637,`The tables.`),cf(),bT(638,` MySQL has no schemas inside a database, so the store keeps its tables in the connection's database, the one the URL's path names, and the `),Aa(639,`code`),bT(640,`schema`),cf(),bT(641,` option is the prefix of their names: `),Aa(642,`code`),bT(643,`nest_workflows_instances`),cf(),bT(644,`, `),Aa(645,`code`),bT(646,`nest_workflows_signals`),cf(),bT(647,` and so on, next to `),Aa(648,`code`),bT(649,`nest_workflows_migrations`),cf(),bT(650,` and `),Aa(651,`code`),bT(652,`nest_workflows_locks`),cf(),bT(653,`, which hold its versions and its locks.`),cf(),Aa(654,`li`)(655,`strong`),bT(656,`Bounded keys.`),cf(),bT(657,` Ids, names and keys are indexed columns of limited length. An instance id, a workflow or signal name, a signal's `),Aa(658,`code`),bT(659,`key`),cf(),bT(660,` and `),Aa(661,`code`),bT(662,`id`),cf(),bT(663,`, and a concurrency or rate-limit key hold 255 characters, a schedule id 230, and a step, sleep or wait name 512. `),Aa(664,`code`),bT(665,`start()`),cf(),bT(666,` and `),Aa(667,`code`),bT(668,`signal()`),cf(),bT(669,` reject a longer one with a `),Aa(670,`code`),bT(671,`RangeError`),cf(),bT(672,` before anything is written. Keys still compare exactly, as on PostgreSQL.`),cf(),Aa(673,`li`)(674,`strong`),bT(675,`Your transactions.`),cf(),Aa(676,`code`),bT(677,`start()`),cf(),bT(678,` and `),Aa(679,`code`),bT(680,`signal()`),cf(),bT(681,` with the `),Aa(682,`code`),bT(683,`transaction`),cf(),bT(684,` option work at REPEATABLE READ, MySQL's default, and at READ COMMITTED: the wake-up reads the waits with a locking read, which also sees those committed after your transaction's snapshot. Avoid SERIALIZABLE, where MySQL turns plain reads into locking ones: a `),Aa(685,`code`),bT(686,`start()`),cf(),bT(687,` in such a transaction would hold every signal up until the transaction ends.`),cf(),Aa(688,`li`)(689,`strong`),bT(690,`Deadlocks.`),cf(),bT(691,` MySQL breaks a deadlock by rolling back one of the transactions, with error 1213 (`),Aa(692,`code`),bT(693,`ER_LOCK_DEADLOCK`),cf(),bT(694,`). The store runs its own transactions again. In yours, the rollback also took your writes, so the error reaches your code: run the transaction again. A transaction that writes an order and then signals, while another one signals and then writes the same order, deadlocks that way.`),cf(),Aa(695,`li`)(696,`strong`),bT(697,`Migrations.`),cf(),bT(698,` MySQL commits each DDL statement on its own, so the migrations can't run in one transaction. The store and `),Aa(699,`code`),bT(700,`npx @nestjs/workflows migrate`),cf(),bT(701,` apply them one statement at a time, under a lock (`),Aa(702,`code`),bT(703,`GET_LOCK()`),cf(),bT(704,`), so processes that start together still migrate once, and a run that stopped halfway resumes where it stopped. The command line takes a `),Aa(705,`code`),bT(706,`mysql://`),cf(),bT(707,` URL and then needs `),Aa(708,`code`),bT(709,`mysql2`),cf(),bT(710,`, and `),Aa(711,`code`),bT(712,`npx @nestjs/workflows sql --dialect mysql`),cf(),bT(713,` prints the SQL. With your own tool, apply the statements in order, each once, one per call, as the TypeORM migration above does: for drizzle-kit, whose MySQL migrator sends one statement per breakpoint, add `),Aa(714,`code`),bT(715,`--statement-breakpoints`),cf(),bT(716,`.`),cf()(),Aa(717,`p`),bT(718,`For another database, write a store of your own: `),Aa(719,`a`,66),bT(720,`The store contract`),cf(),bT(721,` says what it must do.`),cf(),Aa(722,`h4`,67)(723,`span`),bT(724,`Write the workflow`),cf()(),Aa(725,`p`),bT(726,`Every side effect needs an idempotency key. A step runs `),Aa(727,`strong`),bT(728,`at least once`),cf(),bT(729,`: if the process dies after the payment provider charged the card but before the result reached the journal, the step runs again. The engine hands each step an `),Aa(730,`code`),bT(731,`idempotencyKey`),cf(),bT(732,` that stays the same across attempts and processes (`),Aa(733,`code`),bT(734,`<instance id>:<step name>`),cf(),bT(735,`). Pass it to the system you call, and the effect happens once:`),cf(),Aa(736,`app-copy-button`,56)(737,`span`,57),bT(738),LT(739,`extension`),Wa(740,`app-tabs`,null,9),cf(),Aa(742,`pre`)(743,`code`,58),bT(744,`
import { Injectable } from '@nestjs/common';
import { NonRetryableStepError } from '@nestjs/workflows';
import type { Order } from '../orders/order.js';
import { PaymentProviderClient } from './payment-provider.client.js';

export interface Charge {
  chargeId: string;
  amount: number;
}

@Injectable()
export class PaymentsService {
  constructor(private readonly paymentProviderClient: PaymentProviderClient) {}

  async charge(order: Order, idempotencyKey: string): Promise<Charge> {
    // The payment provider answers a repeated Idempotency-Key with the first response,
    // so a retried step never charges the card twice.
    const charge = await this.paymentProviderClient.createCharge(
      { amount: order.total, currency: 'USD', reference: order.id },
      { idempotencyKey },
    );
    if (charge.status === 'declined') {
      // Retrying won't help. Fail the step now.
      throw new NonRetryableStepError(\`The payment provider declined the card for order \${order.id}.\`);
    }
    return { chargeId: charge.id, amount: charge.amount };
  }

  async refund(chargeId: string, idempotencyKey: string): Promise<void> {
    await this.paymentProviderClient.createRefund({ chargeId }, { idempotencyKey });
  }
}
`),cf()()(),Aa(745,`p`)(746,`code`),bT(747,`InventoryService.reserve()`),cf(),bT(748,` follows the same idea without an external API: it uses the key as the reservation's primary key, so a retry finds the reservation it already made. It throws `),Aa(749,`code`),bT(750,`NonRetryableStepError`),cf(),bT(751,` when a product is out of stock. `),Aa(752,`code`),bT(753,`MailService`),cf(),bT(754,` passes the key to the mail provider as the message id.`),cf(),Aa(755,`p`),bT(756,`Now the workflow. Decorate a class with `),Aa(757,`code`),bT(758,`@Workflow()`),cf(),bT(759,`, give it a name, and implement `),Aa(760,`code`),bT(761,`run()`),cf(),bT(762,`:`),cf(),Aa(763,`app-copy-button`,56)(764,`span`,57),bT(765),LT(766,`extension`),Wa(767,`app-tabs`,null,10),cf(),Aa(769,`pre`)(770,`code`,58),bT(771,`
import { Workflow, type WorkflowContext, type WorkflowRunner } from '@nestjs/workflows';
import { InventoryService } from '../inventory/inventory.service.js';
import { MailService } from '../mail/mail.service.js';
import { PaymentsService } from '../payments/payments.service.js';
import { shipmentDelivered } from '../shipping/carrier-event.js';
import type { FulfilmentResult, Order } from './order.js';

/** One fulfilment per order: the order id is the workflow instance id. */
export const fulfilmentId = (orderId: string) => \`order-\${orderId}\`;

@Workflow('order-fulfilment')
export class OrderFulfilmentWorkflow implements WorkflowRunner<Order, FulfilmentResult> {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly inventoryService: InventoryService,
    private readonly mailService: MailService,
  ) {}

  async run(ctx: WorkflowContext, order: Order): Promise<FulfilmentResult> {
    const charge = await ctx.step(
      'charge-payment',
      ({ idempotencyKey }) => this.paymentsService.charge(order, idempotencyKey),
      {
        retry: { attempts: 5, backoff: { delay: '2s' } },
        compensate: (charge, { idempotencyKey }) => this.paymentsService.refund(charge.chargeId, idempotencyKey),
      },
    );

    await ctx.step(
      'reserve-stock',
      ({ idempotencyKey }) => this.inventoryService.reserve(order.items, idempotencyKey),
      { compensate: ({ reservationId }) => this.inventoryService.release(reservationId) },
    );

    // ...the delivery wait and the review request continue here
  }
}
`),cf()()(),Aa(772,`p`)(773,`code`),bT(774,`ctx.step()`),cf(),bT(775,` runs the function once and writes its result to the journal. Whenever the instance runs again (after a wait, a sleep or a crash), `),Aa(776,`code`),bT(777,`run()`),cf(),bT(778,` starts from the top and `),Aa(779,`code`),bT(780,`charge-payment`),cf(),bT(781,` returns the journaled charge without calling the payment provider. Results must be JSON-serializable, and they come back in their JSON form, on the first run too: a `),Aa(782,`code`),bT(783,`Date`),cf(),bT(784,` is a string. The return type says so (`),Aa(785,`code`),bT(786,`Journaled<Charge>`),cf(),bT(787,`), so TypeScript flags code that treats a journaled value as a live object.`),cf(),Aa(788,`ul`)(789,`li`)(790,`strong`)(791,`code`),bT(792,`retry`),cf()(),bT(793,`: `),Aa(794,`code`),bT(795,`attempts`),cf(),bT(796,` counts the first attempt too, and `),Aa(797,`code`),bT(798,`backoff`),cf(),bT(799,` sets the wait before each retry: a `),Aa(800,`code`),bT(801,`delay`),cf(),bT(802,`, a growth `),Aa(803,`code`),bT(804,`factor`),cf(),bT(805,`, a `),Aa(806,`code`),bT(807,`maxDelay`),cf(),bT(808,` cap and optional `),Aa(809,`code`),bT(810,`jitter`),cf(),bT(811,`. A number is shorthand for the attempts, and `),Aa(812,`code`),bT(813,`false`),cf(),bT(814,` means a single attempt. A failed attempt parks the instance until the backoff has elapsed, so a retry survives a restart too. A `),Aa(815,`code`),bT(816,`NonRetryableStepError`),cf(),bT(817,`, such as a declined card, fails the step at once.`),cf(),Aa(818,`li`)(819,`strong`)(820,`code`),bT(821,`compensate`),cf()(),bT(822,`: registered when the step completes. If the workflow later fails or is cancelled, the compensations of completed steps run in reverse order. Each is journaled and retried like a step, with its own idempotency key. If `),Aa(823,`code`),bT(824,`reserve-stock`),cf(),bT(825,` fails because an item is out of stock, the charge is refunded. `),Aa(826,`a`,48),bT(827,`Sleep for a week, then ask for a review`),cf(),bT(828,` shows how to end this once the order is delivered.`),cf()(),Aa(829,`p`),bT(830,`Steps can also run in parallel. To reserve each item on its own, start one step per item and wait for them together. Each step has its own name, with the item's index in it, and so its own idempotency key and compensation:`),cf(),Aa(831,`app-copy-button`,56)(832,`span`,57),bT(833),LT(834,`extension`),Wa(835,`app-tabs`,null,11),cf(),Aa(837,`pre`)(838,`code`,58),bT(839,`
// One step per item, all at once: each reserves its item under its own key, and
// releases it if the order is undone.
await Promise.all(
  order.items.map((item, i) =>
    ctx.step(
      \`reserve-item-\${i}\`,
      ({ idempotencyKey }) => this.inventoryService.reserve([item], idempotencyKey),
      { compensate: ({ reservationId }) => this.inventoryService.release(reservationId) },
    ),
  ),
);
`),cf()()(),Aa(840,`p`),bT(841,`If one item is out of stock, its step fails, the others finish, and the compensations of the ones that completed run: the reservations are released, then the charge is refunded. Compensations run in the reverse order of the `),Aa(842,`code`),bT(843,`ctx.step()`),cf(),bT(844,` calls, whichever step finished first. The rest of the tutorial keeps the single `),Aa(845,`code`),bT(846,`reserve-stock`),cf(),bT(847,` step.`),cf(),Aa(848,`p`),bT(849,`The class is a singleton shared by every running order, and constructor injection works as usual. Keep per-order state in local variables, never on `),Aa(850,`code`),bT(851,`this`),cf(),bT(852,`.`),cf(),Aa(853,`h4`,68)(854,`span`),bT(855,`Start the workflow`),cf()(),Aa(856,`h5`,69)(857,`span`),bT(858,`Start it with the order`),cf()(),Aa(859,`p`),bT(860,`An order and its fulfilment belong together: an order that nothing fulfils is as bad as a fulfilment charging for an order that was never saved. So `),Aa(861,`code`),bT(862,`OrdersService`),cf(),bT(863,` saves the order and starts the workflow in one Drizzle transaction. `),Aa(864,`code`),bT(865,`WorkflowClient`),cf(),bT(866,` starts instances; pass it the transaction's `),Aa(867,`code`),bT(868,`tx`),cf(),bT(869,`:`),cf(),Aa(870,`app-copy-button`,56)(871,`span`,57),bT(872),LT(873,`extension`),Wa(874,`app-tabs`,null,12),cf(),Aa(876,`pre`)(877,`code`,58),bT(878,`
import { randomUUID } from 'node:crypto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDrizzle } from '@nestjs/drizzle';
import { WorkflowClient } from '@nestjs/workflows';
import { eq } from 'drizzle-orm';
import type { Database } from '../database/drizzle.js';
import { orders } from '../database/schema.js';
import { fulfilmentId, OrderFulfilmentWorkflow } from './order-fulfilment.workflow.js';
import type { Order, PlaceOrderDto } from './order.js';

@Injectable()
export class OrdersService {
  constructor(
    @InjectDrizzle() private readonly db: Database,
    private readonly workflowClient: WorkflowClient,
  ) {}

  async place(dto: PlaceOrderDto) {
    const total = dto.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order: Order = {
      id: randomUUID().slice(0, 8),
      userId: dto.userId,
      items: dto.items,
      shipping: dto.shipping ?? 'standard',
      total,
      status: 'placed',
    };

    return this.db.transaction(async (tx) => {
      await tx.insert(orders).values(order);
      // Same transaction: the fulfilment exists if and only if the order does.
      const fulfilment = await this.workflowClient.start(OrderFulfilmentWorkflow, order, {
        id: fulfilmentId(order.id),
        transaction: tx,
      });
      return { ...order, fulfilment };
    });
  }

  async findOne(id: string): Promise<Order> {
    const [order] = await this.db.select().from(orders).where(eq(orders.id, id));
    if (!order) {
      throw new NotFoundException(\`Order \${id} not found.\`);
    }
    return order;
  }

  // ...markDelivered() is added in the next section
}
`),cf()()(),Aa(879,`p`),bT(880,`With `),Aa(881,`code`),bT(882,`transaction`),cf(),bT(883,`, the store creates the instance through the transaction your ORM handed the callback, so it commits with the order, or rolls back with it if anything later in the callback fails. The worker only ever sees committed instances: it picks this one up at its next poll after the commit. Pass the transaction, not the database, which the store refuses: `),Aa(884,`code`),bT(885,`start()`),cf(),bT(886,` without the option writes on its own, which is the dual write the option removes. With TypeORM, pass the transaction's `),Aa(887,`code`),bT(888,`EntityManager`),cf(),bT(889,`, and with Prisma, the transaction client, as `),Aa(890,`a`,54),bT(891,`Keep workflows in your database`),cf(),bT(892,` shows.`),cf(),Aa(893,`p`),bT(894,`The instance id comes from the order id, which makes `),Aa(895,`code`),bT(896,`start()`),cf(),bT(897,` idempotent. Starting the same id with the same input returns the existing instance with `),Aa(898,`code`),bT(899,`created: false`),cf(),bT(900,`, and a different input throws `),Aa(901,`code`),bT(902,`WorkflowIdConflictError`),cf(),bT(903,`. A reconciliation job can call it again for an order without charging twice.`),cf(),Aa(904,`h5`,70)(905,`span`),bT(906,`Report its status`),cf()(),Aa(907,`p`),bT(908,`The controller places orders and reports where their fulfilment stands:`),cf(),Aa(909,`app-copy-button`,56)(910,`span`,57),bT(911),LT(912,`extension`),Wa(913,`app-tabs`,null,13),cf(),Aa(915,`pre`)(916,`code`,58),bT(917,`
import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { WorkflowClient } from '@nestjs/workflows';
import { fulfilmentId } from './order-fulfilment.workflow.js';
import { PlaceOrderDto } from './order.js';
import { OrdersService } from './orders.service.js';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly workflowClient: WorkflowClient,
  ) {}

  @Post()
  place(@Body() dto: PlaceOrderDto) {
    return this.ordersService.place(dto);
  }

  @Get(':id/fulfilment')
  async fulfilment(@Param('id') id: string) {
    const instance = await this.workflowClient.getStatus(fulfilmentId(id), { journal: true });
    if (!instance) {
      throw new NotFoundException(\`Order \${id} not found.\`);
    }
    return {
      status: instance.status,
      stage: instance.customStatus,
      waitingFor: instance.waits.map((wait) => wait.signal),
      wakeAt: instance.wakeAt === null ? null : new Date(instance.wakeAt).toISOString(),
      steps: Object.fromEntries(instance.journal.map((entry) => [entry.name, entry.status])),
      error: instance.error?.message ?? null,
    };
  }

  // ...cancel() is added for customer support, below
}
`),cf()()(),Aa(918,`p`)(919,`code`),bT(920,`getStatus()`),cf(),bT(921,` returns the instance: its `),Aa(922,`code`),bT(923,`status`),cf(),bT(924,`, `),Aa(925,`code`),bT(926,`wakeAt`),cf(),bT(927,`, the signals it `),Aa(928,`code`),bT(929,`waits`),cf(),bT(930,` for, its `),Aa(931,`code`),bT(932,`error`),cf(),bT(933,` or `),Aa(934,`code`),bT(935,`output`),cf(),bT(936,`, and, with the `),Aa(937,`code`),bT(938,`journal`),cf(),bT(939,` option, every step. The statuses are `),Aa(940,`code`),bT(941,`pending`),cf(),bT(942,`, `),Aa(943,`code`),bT(944,`running`),cf(),bT(945,`, `),Aa(946,`code`),bT(947,`suspended`),cf(),bT(948,`, `),Aa(949,`code`),bT(950,`compensating`),cf(),bT(951,`, `),Aa(952,`code`),bT(953,`completed`),cf(),bT(954,`, `),Aa(955,`code`),bT(956,`failed`),cf(),bT(957,`, `),Aa(958,`code`),bT(959,`cancelled`),cf(),bT(960,` and `),Aa(961,`code`),bT(962,`compensation_failed`),cf(),bT(963,`; `),Aa(964,`a`,71),bT(965,`What each status means`),cf(),bT(966,` says what each one means and what to do about it. The endpoint maps the instance to a small view. Don't return the raw instance to customers, because it includes the input and lease details.`),cf(),Aa(967,`p`),bT(968,`The `),Aa(969,`code`),bT(970,`stage`),cf(),bT(971,` comes from the workflow. `),Aa(972,`code`),bT(973,`ctx.setStatus()`),cf(),bT(974,` sets the instance's `),Aa(975,`strong`),bT(976,`custom status`),cf(),bT(977,`, a JSON value of up to 16 KiB that `),Aa(978,`code`),bT(979,`getStatus()`),cf(),bT(980,` and `),Aa(981,`code`),bT(982,`list()`),cf(),bT(983,` return as `),Aa(984,`code`),bT(985,`customStatus`),cf(),bT(986,`: here, a word for where the order stands. Set it in `),Aa(987,`code`),bT(988,`run()`),cf(),bT(989,` as the order moves on, and to `),Aa(990,`code`),bT(991,`delivered`),cf(),bT(992,` once the carrier has delivered it (in `),Aa(993,`a`,48),bT(994,`Sleep for a week, then ask for a review`),cf(),bT(995,`):`),cf(),Aa(996,`app-copy-button`,56)(997,`span`,57),bT(998),LT(999,`extension`),Wa(1e3,`app-tabs`,null,14),cf(),Aa(1002,`pre`)(1003,`code`,58),bT(1004,`
const charge = await ctx.step(
  'charge-payment',
  // ...the charge, as above
);
ctx.setStatus('paid');

await ctx.step(
  'reserve-stock',
  // ...the reservation, as above
);
ctx.setStatus('awaiting-delivery');
`),cf()()(),Aa(1005,`p`),bT(1006,`The status isn't journaled. Every execution replays `),Aa(1007,`code`),bT(1008,`run()`),cf(),bT(1009,`, and with it the `),Aa(1010,`code`),bT(1011,`setStatus()`),cf(),bT(1012,` calls, so each execution sets the status again on its way through, and a status set in a loop doesn't grow the journal. The workflow never reads it back, so nothing it decides depends on it. It's written with the instance's next write: when the next step starts, when the instance parks, or when it ends. So the endpoint shows `),Aa(1013,`code`),bT(1014,`paid`),cf(),bT(1015,` while `),Aa(1016,`code`),bT(1017,`reserve-stock`),cf(),bT(1018,` waits for a retry, and `),Aa(1019,`code`),bT(1020,`awaiting-delivery`),cf(),bT(1021,` once the instance parks for the carrier. A status the workflow no longer changes stays, such as `),Aa(1022,`code`),bT(1023,`awaiting-delivery`),cf(),bT(1024,` on a cancelled order: `),Aa(1025,`code`),bT(1026,`status`),cf(),bT(1027,` tells what happened. A value that isn't JSON, or takes more than 16 KiB as JSON, fails the instance with a `),Aa(1028,`code`),bT(1029,`TypeError`),cf(),bT(1030,`, and `),Aa(1031,`code`),bT(1032,`undefined`),cf(),bT(1033,` clears the status. Each written change is emitted as a `),Aa(1034,`code`),bT(1035,`custom-status`),cf(),bT(1036,` event.`),cf(),Aa(1037,`h4`,72)(1038,`span`),bT(1039,`Wait for signals and timers`),cf()(),Aa(1040,`h5`,73)(1041,`span`),bT(1042,`Wait for the delivery webhook`),cf()(),Aa(1043,`p`),bT(1044,`Next, the workflow waits for the carrier. The webhook and the workflow share a signal: a name and the type of its payload, defined once, so neither side can misspell the name or send the wrong shape:`),cf(),Aa(1045,`app-copy-button`,56)(1046,`span`,57),bT(1047),LT(1048,`extension`),Wa(1049,`app-tabs`,null,15),cf(),Aa(1051,`pre`)(1052,`code`,58),bT(1053,`
import { WorkflowSignal } from '@nestjs/workflows';

/** The body the carrier POSTs to our webhook. */
export interface CarrierEvent {
  type: 'shipment.in_transit' | 'shipment.delivered' | 'shipment.returned';
  /** The store's order id. */
  reference: string;
  trackingNumber: string;
  occurredAt: string;
}

/** Sent by the webhook, awaited by the fulfilment workflow. The order id is its key. */
export const shipmentDelivered = new WorkflowSignal<CarrierEvent>('shipment.delivered');
`),cf()()(),Aa(1054,`p`),bT(1055,`Add this to `),Aa(1056,`code`),bT(1057,`run()`),cf(),bT(1058,`, after `),Aa(1059,`code`),bT(1060,`reserve-stock`),cf(),bT(1061,`:`),cf(),Aa(1062,`app-copy-button`,56)(1063,`span`,57),bT(1064),LT(1065,`extension`),Wa(1066,`app-tabs`,null,16),cf(),Aa(1068,`pre`)(1069,`code`,58),bT(1070,`
const delivery = await ctx.waitForSignal('await-delivery', shipmentDelivered, {
  key: order.id,
  timeout: '3d',
});
if (!delivery) {
  ctx.fail(\`Order \${order.id} was not delivered within 3 days.\`);
}
`),cf()()(),Aa(1071,`p`)(1072,`code`),bT(1073,`waitForSignal()`),cf(),bT(1074,` records the wait and parks the instance: its status becomes `),Aa(1075,`code`),bT(1076,`suspended`),cf(),bT(1077,` and `),Aa(1078,`code`),bT(1079,`wakeAt`),cf(),bT(1080,` is the deadline. No memory, timer or worker is held for those 3 days. It resolves with the signal's payload, typed as a `),Aa(1081,`code`),bT(1082,`CarrierEvent`),cf(),bT(1083,`, or with `),Aa(1084,`code`),bT(1085,`null`),cf(),bT(1086,` once the timeout passes. `),Aa(1087,`code`),bT(1088,`ctx.fail()`),cf(),bT(1089,` then fails the instance, and the compensations run in reverse: the stock is released, then the charge is refunded. A `),Aa(1090,`code`),bT(1091,`match`),cf(),bT(1092,` option filters the signals further by payload, such as `),Aa(1093,`code`),bT(1094,`match: (event) => event.trackingNumber !== ''`),cf(),bT(1095,`; it runs again on every replay, so it must be a pure function of the payload.`),cf(),Aa(1096,`p`),bT(1097,`The webhook marks the order as delivered and sends the signal. Both happen in a new `),Aa(1098,`code`),bT(1099,`OrdersService.markDelivered()`),cf(),bT(1100,` method, in one transaction, so the order's status and the signal commit together. Add it, and the import of the signal:`),cf(),Aa(1101,`app-copy-button`,56)(1102,`span`,57),bT(1103),LT(1104,`extension`),Wa(1105,`app-tabs`,null,17),cf(),Aa(1107,`pre`)(1108,`code`,58),bT(1109,`
import { shipmentDelivered, type CarrierEvent } from '../shipping/carrier-event.js';

async markDelivered(event: CarrierEvent): Promise<void> {
  await this.db.transaction(async (tx) => {
    const updated = await tx
      .update(orders)
      .set({ status: 'delivered' })
      .where(eq(orders.id, event.reference))
      .returning({ id: orders.id });
    if (updated.length === 0) {
      throw new NotFoundException(\`Order \${event.reference} not found.\`);
    }
    // The order's new status and the signal commit together.
    await this.workflowClient.signal(shipmentDelivered, event, { key: event.reference, transaction: tx });
  });
}
`),cf()()(),Aa(1110,`p`),bT(1111,`The controller verifies the callback and hands it over:`),cf(),Aa(1112,`app-copy-button`,56)(1113,`span`,57),bT(1114),LT(1115,`extension`),Wa(1116,`app-tabs`,null,18),cf(),Aa(1118,`pre`)(1119,`code`,58),bT(1120,`
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service.js';
import type { CarrierEvent } from './carrier-event.js';

@Controller('webhooks/carrier')
export class CarrierWebhookController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @HttpCode(200)
  async handle(@Body() event: CarrierEvent) {
    // Verify the carrier's signature header before trusting the body.
    if (event.type === 'shipment.delivered') {
      await this.ordersService.markDelivered(event);
    }
    return { received: true };
  }
}
`),cf()()(),Aa(1121,`p`)(1122,`code`),bT(1123,`signal()`),cf(),bT(1124,` stores the signal with a correlation `),Aa(1125,`code`),bT(1126,`key`),cf(),bT(1127,` and wakes the instances waiting for that signal and key. Keys match exactly, so the order id keeps one order's delivery from waking another, and a wait without a key only takes signals sent without one. Signals are durable. A webhook that arrives before the workflow reaches the wait still counts, and each signal is consumed at most once per instance, so the carrier's retries are harmless. They still store a signal each, unless you pass an `),Aa(1128,`code`),bT(1129,`id`),cf(),bT(1130,`, such as the tracking number: a signal with the same name and `),Aa(1131,`code`),bT(1132,`id`),cf(),bT(1133,` is stored once, and a repeat returns the first one's `),Aa(1134,`code`),bT(1135,`signalId`),cf(),bT(1136,` with `),Aa(1137,`code`),bT(1138,`created: false`),cf(),bT(1139,`. A delivery recorded after the deadline loses to the timeout, even if no worker was running when the deadline passed.`),cf(),Aa(1140,`p`),bT(1141,`The controller answers `),Aa(1142,`code`),bT(1143,`200`),cf(),bT(1144,` only after the transaction has committed. A delivery for an order the store doesn't know rolls back with a `),Aa(1145,`code`),bT(1146,`404`),cf(),bT(1147,`, leaving no signal behind, and if the database fails, the carrier gets an error and delivers the webhook again. Signals sent in a transaction queue behind each other until it ends, so keep such transactions short. On PostgreSQL, the transaction must use the default READ COMMITTED isolation; the store refuses a stricter one, which could miss a wait registered while it ran. On MySQL, the default REPEATABLE READ works as well.`),cf(),Aa(1148,`h5`,74)(1149,`span`),bT(1150,`Wait for whichever comes first`),cf()(),Aa(1151,`p`),bT(1152,`The carrier doesn't always deliver. When it can't, it brings the parcel back to the warehouse and reports `),Aa(1153,`code`),bT(1154,`shipment.returned`),cf(),bT(1155,`. Declare a second signal, next to the first:`),cf(),Aa(1156,`app-copy-button`,56)(1157,`span`,57),bT(1158),LT(1159,`extension`),Wa(1160,`app-tabs`,null,19),cf(),Aa(1162,`pre`)(1163,`code`,58),bT(1164,`
/** Sent by the webhook when the carrier brings the parcel back to the warehouse. The order id is its key. */
export const shipmentReturned = new WorkflowSignal<CarrierEvent>('shipment.returned');
`),cf()()(),Aa(1165,`p`),bT(1166,`The webhook sends it as it sends the delivery. A new `),Aa(1167,`code`),bT(1168,`OrdersService.markReturned()`),cf(),bT(1169,` sets the order's status to `),Aa(1170,`code`),bT(1171,`returned`),cf(),bT(1172,` and sends the signal, in one transaction, like `),Aa(1173,`code`),bT(1174,`markDelivered()`),cf(),bT(1175,`:`),cf(),Aa(1176,`app-copy-button`,56)(1177,`span`,57),bT(1178),LT(1179,`extension`),Wa(1180,`app-tabs`,null,20),cf(),Aa(1182,`pre`)(1183,`code`,58),bT(1184,`
if (event.type === 'shipment.returned') {
  await this.ordersService.markReturned(event);
}
`),cf()()(),Aa(1185,`p`),bT(1186,`The workflow now waits for the delivery, the return or 3 days, whichever comes first. Replace the `),Aa(1187,`code`),bT(1188,`waitForSignal()`),cf(),bT(1189,` call with `),Aa(1190,`code`),bT(1191,`ctx.waitForAny()`),cf(),bT(1192,`:`),cf(),Aa(1193,`app-copy-button`,56)(1194,`span`,57),bT(1195),LT(1196,`extension`),Wa(1197,`app-tabs`,null,21),cf(),Aa(1199,`pre`)(1200,`code`,58),bT(1201,`
const outcome = await ctx.waitForAny('await-delivery', {
  delivered: ctx.signalWait(shipmentDelivered, { key: order.id }),
  returned: ctx.signalWait(shipmentReturned, { key: order.id }),
  timedOut: ctx.timer('3d'),
});
if (outcome.key === 'returned') {
  ctx.fail(\`The carrier returned order \${order.id} to the warehouse.\`);
}
if (outcome.key === 'timedOut') {
  ctx.fail(\`Order \${order.id} was not delivered within 3 days.\`);
}
const delivery = outcome.value;
`),cf()()(),Aa(1202,`p`)(1203,`code`),bT(1204,`ctx.signalWait()`),cf(),bT(1205,` and `),Aa(1206,`code`),bT(1207,`ctx.timer()`),cf(),bT(1208,` only describe a condition, and `),Aa(1209,`code`),bT(1210,`waitForAny()`),cf(),bT(1211,` waits for them together. It parks the instance once, with every signal it waits for and the earliest deadline, and resolves with the `),Aa(1212,`code`),bT(1213,`key`),cf(),bT(1214,` of the condition that happened first and its `),Aa(1215,`code`),bT(1216,`value`),cf(),bT(1217,`: a signal's payload, or `),Aa(1218,`code`),bT(1219,`null`),cf(),bT(1220,` for a timer. Checking `),Aa(1221,`code`),bT(1222,`key`),cf(),bT(1223,` narrows `),Aa(1224,`code`),bT(1225,`value`),cf(),bT(1226,`, so after the two checks `),Aa(1227,`code`),bT(1228,`delivery`),cf(),bT(1229,` is a `),Aa(1230,`code`),bT(1231,`CarrierEvent`),cf(),bT(1232,`. A returned parcel fails the instance, and the compensations release the stock, which is back in the warehouse, and refund the charge. The status endpoint's `),Aa(1233,`code`),bT(1234,`waitingFor`),cf(),bT(1235,` lists both signals while the instance waits.`),cf(),Aa(1236,`p`),bT(1237,`The outcome is journaled as one entry under the wait's name, so every later execution gets the same winner. When several conditions are ready at once, the signal recorded first wins, whichever condition it matched. A signal sent after a timer's deadline doesn't count, as with `),Aa(1238,`code`),bT(1239,`waitForSignal()`),cf(),bT(1240,`'s `),Aa(1241,`code`),bT(1242,`timeout`),cf(),bT(1243,`, and timers count from when the wait is first reached. Only the winning signal is taken: a return reported after the delivery would stay for a later wait of the same instance. To wait for all of several signals instead, await several `),Aa(1244,`code`),bT(1245,`waitForSignal()`),cf(),bT(1246,` calls with `),Aa(1247,`code`),bT(1248,`Promise.all()`),cf(),bT(1249,`: each is journaled on its own, and the instance parks once for all of them. A child workflow can be a condition too, as `),Aa(1250,`a`,75),bT(1251,`Start child workflows`),cf(),bT(1252,` shows.`),cf(),Aa(1253,`h5`,76)(1254,`span`),bT(1255,`Sleep for a week, then ask for a review`),cf()(),Aa(1256,`p`),bT(1257,`Finish `),Aa(1258,`code`),bT(1259,`run()`),cf(),bT(1260,` with the point of no return, a durable timer and the last step:`),cf(),Aa(1261,`app-copy-button`,56)(1262,`span`,57),bT(1263),LT(1264,`extension`),Wa(1265,`app-tabs`,null,22),cf(),Aa(1267,`pre`)(1268,`code`,58),bT(1269,`
// Point of no return: the parcel arrived, so nothing from here on refunds
// the charge or releases the stock, not a failure and not a cancel.
ctx.commit('delivered');
ctx.setStatus('delivered');

await ctx.sleep('before-review-request', '7d');
await ctx.step('send-review-request', ({ idempotencyKey }) =>
  this.mailService.sendReviewRequest(order, idempotencyKey),
);

return { chargeId: charge.chargeId, trackingNumber: delivery.trackingNumber };
`),cf()()(),Aa(1270,`p`)(1271,`code`),bT(1272,`ctx.sleep()`),cf(),bT(1273,` stores a wake-up time and parks the instance, like the wait. After 7 days, any worker resumes it: never early, and usually within a poll interval of the deadline. When it resumes, `),Aa(1274,`code`),bT(1275,`run()`),cf(),bT(1276,` replays from the top: `),Aa(1277,`code`),bT(1278,`charge-payment`),cf(),bT(1279,` and `),Aa(1280,`code`),bT(1281,`await-delivery`),cf(),bT(1282,` return their journaled values, so `),Aa(1283,`code`),bT(1284,`charge`),cf(),bT(1285,` and `),Aa(1286,`code`),bT(1287,`delivery`),cf(),bT(1288,` are in scope a week later. A delayed job can't give you that continuation. To sleep until a point in time instead, pass an object with `),Aa(1289,`code`),bT(1290,`until`),cf(),bT(1291,`, a `),Aa(1292,`code`),bT(1293,`Date`),cf(),bT(1294,` or epoch milliseconds, computed from journaled values such as `),Aa(1295,`code`),bT(1296,`ctx.now()`),cf(),bT(1297,`.`),cf(),Aa(1298,`p`)(1299,`code`),bT(1300,`ctx.commit()`),cf(),bT(1301,` marks the point of no return. Once the parcel is delivered, refunding the charge would be wrong, whatever happens next. `),Aa(1302,`code`),bT(1303,`commit()`),cf(),bT(1304,` discards the compensations registered so far. If the review email then fails for good, the instance ends as `),Aa(1305,`code`),bT(1306,`failed`),cf(),bT(1307,` with the step's error, and nothing is refunded or released. A cancel past this point doesn't undo anything either. Only the steps after `),Aa(1308,`code`),bT(1309,`commit()`),cf(),bT(1310,` register compensations that can still run. The commit point is journaled under its name, so it replays like a step, and the status endpoint lists it as `),Aa(1311,`code`),bT(1312,`delivered`),cf(),bT(1313,`.`),cf(),Aa(1314,`h5`,77)(1315,`span`),bT(1316,`Time out the whole workflow`),cf()(),Aa(1317,`p`),bT(1318,`A wait's `),Aa(1319,`code`),bT(1320,`timeout`),cf(),bT(1321,` bounds one wait, and a step's `),Aa(1322,`code`),bT(1323,`timeout`),cf(),bT(1324,` one attempt. To bound a whole instance, give the workflow a run timeout:`),cf(),Aa(1325,`app-copy-button`)(1326,`pre`)(1327,`code`,58),bT(1328,`
@Workflow('order-fulfilment', { timeout: '30d' })
`),cf()()(),Aa(1329,`p`),bT(1330,`The deadline is the instance's start plus the timeout, stored with the instance as its `),Aa(1331,`code`),bT(1332,`deadline`),cf(),bT(1333,`, so it holds across restarts and deploys, and a parked instance wakes for it even when its sleep or wait would end later. Once it passes, the instance stops at its next `),Aa(1334,`code`),bT(1335,`ctx`),cf(),bT(1336,` call (a step that is running finishes first), its compensations run, and it ends as `),Aa(1337,`code`),bT(1338,`failed`),cf(),bT(1339,` with a `),Aa(1340,`code`),bT(1341,`WorkflowTimeoutError`),cf(),bT(1342,`. Compensations aren't bound by the deadline. Here the wait gives up after 3 days and the sleep takes 7, so 30 days is a safety net. `),Aa(1343,`code`),bT(1344,`start()`),cf(),bT(1345,` takes a `),Aa(1346,`code`),bT(1347,`timeout`),cf(),bT(1348,` option too, which overrides the decorator's for that instance.`),cf(),Aa(1349,`h4`,78)(1350,`span`),bT(1351,`Cancel and operate workflows`),cf()(),Aa(1352,`h5`,79)(1353,`span`),bT(1354,`Let customer support cancel an order`),cf()(),Aa(1355,`p`),bT(1356,`Add a `),Aa(1357,`code`),bT(1358,`cancel()`),cf(),bT(1359,` route to `),Aa(1360,`code`),bT(1361,`OrdersController`),cf(),bT(1362,`, and `),Aa(1363,`code`),bT(1364,`ConflictException`),cf(),bT(1365,` and `),Aa(1366,`code`),bT(1367,`HttpCode`),cf(),bT(1368,` to its `),Aa(1369,`code`),bT(1370,`@nestjs/common`),cf(),bT(1371,` import. `),Aa(1372,`code`),bT(1373,`OrdersService.markCancelled()`),cf(),bT(1374,` sets the order's status:`),cf(),Aa(1375,`app-copy-button`,56)(1376,`span`,57),bT(1377),LT(1378,`extension`),Wa(1379,`app-tabs`,null,23),cf(),Aa(1381,`pre`)(1382,`code`,58),bT(1383,`
// Customer support only: protect it with your staff guard.
@Post(':id/cancel')
@HttpCode(202)
async cancel(@Param('id') id: string, @Body('reason') reason: string) {
  const order = await this.ordersService.findOne(id);
  if (order.status === 'delivered') {
    throw new ConflictException(\`Order \${id} was delivered. Start a return instead.\`);
  }
  // accepted is false if the fulfilment already ended or was already cancelled.
  const { accepted } = await this.workflowClient.cancel(fulfilmentId(id), reason);
  if (accepted) {
    await this.ordersService.markCancelled(id);
  }
  return { accepted };
}
`),cf()()(),Aa(1384,`p`)(1385,`code`),bT(1386,`cancel()`),cf(),bT(1387,` sets a flag. A parked instance wakes at once. A running one lets its current step finish and stops at its next `),Aa(1388,`code`),bT(1389,`ctx`),cf(),bT(1390,` call. (A running instance in another process notices the flag on its next lease renewal, within a third of `),Aa(1391,`code`),bT(1392,`leaseDuration`),cf(),bT(1393,`.) Either way, the compensations of the completed steps run in reverse, and the instance ends as `),Aa(1394,`code`),bT(1395,`cancelled`),cf(),bT(1396,` with the reason as its error message. `),Aa(1397,`code`),bT(1398,`cancel()`),cf(),bT(1399,` returns the instance with an `),Aa(1400,`code`),bT(1401,`accepted`),cf(),bT(1402,` flag. It's `),Aa(1403,`code`),bT(1404,`false`),cf(),bT(1405,` when the instance had already completed or failed, when it is already compensating a failure, or when a cancel or a terminate was already requested. A second cancel changes nothing, and the first reason is kept.`),cf(),Aa(1406,`p`),bT(1407,`Once the carrier has reported the delivery, the route answers `),Aa(1408,`code`),bT(1409,`409`),cf(),bT(1410,`, because support should start a return instead. The workflow doesn't rely on that check. A cancel that reaches it after `),Aa(1411,`code`),bT(1412,`ctx.commit('delivered')`),cf(),bT(1413,` stops the review request and refunds nothing. A cancel it sees before it has consumed the delivery event still refunds, because it hasn't reached its point of no return yet.`),cf(),Aa(1414,`h5`,80)(1415,`span`),bT(1416,`What each status means`),cf()(),Aa(1417,`p`),bT(1418,`An instance's `),Aa(1419,`code`),bT(1420,`status`),cf(),bT(1421,` says what it's doing, and whether it needs you:`),cf(),Aa(1422,`table`)(1423,`thead`)(1424,`tr`)(1425,`th`),bT(1426,`Status`),cf(),Aa(1427,`th`),bT(1428,`What it means`),cf(),Aa(1429,`th`),bT(1430,`What to do`),cf()()(),Aa(1431,`tbody`)(1432,`tr`)(1433,`td`)(1434,`code`),bT(1435,`pending`),cf()(),Aa(1436,`td`),bT(1437,`Started, and not yet claimed by a worker. One that stays `),Aa(1438,`code`),bT(1439,`pending`),cf(),bT(1440,` waits for a concurrency slot or room in a rate-limit window, or is of a version no running worker registers`),cf(),Aa(1441,`td`),bT(1442,`Nothing while a limit holds it. Otherwise, deploy a worker with that version, or delete the instance`),cf()(),Aa(1443,`tr`)(1444,`td`)(1445,`code`),bT(1446,`running`),cf()(),Aa(1447,`td`),bT(1448,`A worker holds its lease and executes it`),cf(),Aa(1449,`td`),bT(1450,`Nothing. `),Aa(1451,`code`),bT(1452,`cancel()`),cf(),bT(1453,` stops it at its next `),Aa(1454,`code`),bT(1455,`ctx`),cf(),bT(1456,` call, and `),Aa(1457,`code`),bT(1458,`terminate()`),cf(),bT(1459,` without compensating`),cf()(),Aa(1460,`tr`)(1461,`td`)(1462,`code`),bT(1463,`suspended`),cf()(),Aa(1464,`td`),bT(1465,`Parked on a sleep, a wait or a retry's backoff, until `),Aa(1466,`code`),bT(1467,`wakeAt`),cf(),bT(1468,` or a signal`),cf(),Aa(1469,`td`),bT(1470,`Nothing. A signal or `),Aa(1471,`code`),bT(1472,`cancel()`),cf(),bT(1473,` wakes it`),cf()(),Aa(1474,`tr`)(1475,`td`)(1476,`code`),bT(1477,`compensating`),cf()(),Aa(1478,`td`),bT(1479,`Undoing its completed steps after a failure or a cancel`),cf(),Aa(1480,`td`),bT(1481,`Nothing: it ends as `),Aa(1482,`code`),bT(1483,`failed`),cf(),bT(1484,`, `),Aa(1485,`code`),bT(1486,`cancelled`),cf(),bT(1487,` or `),Aa(1488,`code`),bT(1489,`compensation_failed`),cf(),bT(1490,`. `),Aa(1491,`code`),bT(1492,`terminate()`),cf(),bT(1493,` stops the undo`),cf()(),Aa(1494,`tr`)(1495,`td`)(1496,`code`),bT(1497,`completed`),cf()(),Aa(1498,`td`),bT(1499,`Done, with the result of `),Aa(1500,`code`),bT(1501,`run()`),cf(),bT(1502,` as its `),Aa(1503,`code`),bT(1504,`output`),cf()(),Aa(1505,`td`),bT(1506,`Nothing, until retention purges it`),cf()(),Aa(1507,`tr`)(1508,`td`)(1509,`code`),bT(1510,`cancelled`),cf()(),Aa(1511,`td`),bT(1512,`Cancelled, after its compensations ran, or terminated without them (`),Aa(1513,`code`),bT(1514,`error.name`),cf(),bT(1515,` is `),Aa(1516,`code`),bT(1517,`WorkflowTerminatedError`),cf(),bT(1518,`). `),Aa(1519,`code`),bT(1520,`error.message`),cf(),bT(1521,` is the reason`),cf(),Aa(1522,`td`),bT(1523,`Nothing, until retention purges it`),cf()(),Aa(1524,`tr`)(1525,`td`)(1526,`code`),bT(1527,`failed`),cf()(),Aa(1528,`td`),bT(1529,`A step gave up, `),Aa(1530,`code`),bT(1531,`ctx.fail()`),cf(),bT(1532,` was called, the run timeout passed or the journal hit its limit, and then its compensations ran. Or a definition error, such as a deploy that broke replay, failed it without compensating`),cf(),Aa(1533,`td`),bT(1534,`If no compensation ran, fix the cause and retry it. Otherwise it's done: its completed steps were undone`),cf()(),Aa(1535,`tr`)(1536,`td`)(1537,`code`),bT(1538,`compensation_failed`),cf()(),Aa(1539,`td`),bT(1540,`An undo gave up halfway. `),Aa(1541,`code`),bT(1542,`error`),cf(),bT(1543,` is the original failure, with the compensation's own error as `),Aa(1544,`code`),bT(1545,`error.compensation`),cf()(),Aa(1546,`td`),bT(1547,`Fix the cause, such as a warehouse API that was down, and retry it. Or finish the undo by hand and delete the instance`),cf()()()(),Aa(1548,`h5`,81)(1549,`span`),bT(1550,`Retry, delete or terminate`),cf()(),Aa(1551,`p`)(1552,`code`),bT(1553,`WorkflowClient`),cf(),bT(1554,` has the actions for the table's last column. Call them from a staff-only route or a script:`),cf(),Aa(1555,`app-copy-button`)(1556,`pre`)(1557,`code`,58),bT(1558,`
await this.workflowClient.retry(fulfilmentId(orderId));
await this.workflowClient.delete(fulfilmentId(orderId));
await this.workflowClient.terminate(fulfilmentId(orderId), 'Refunded by hand after a chargeback.');
`),cf()()(),Aa(1559,`ul`)(1560,`li`)(1561,`strong`)(1562,`code`),bT(1563,`retry()`),cf()(),bT(1564,` runs a `),Aa(1565,`code`),bT(1566,`failed`),cf(),bT(1567,` instance again from its journal: completed steps return their results, the step that gave up gets its attempts back, and sleeps and waits the instance left behind start over. A deploy that broke replay is retried once the fixed code runs. It refuses an instance whose compensations ran, since resuming would build on undone work: start a new instance instead. An instance past its run timeout needs a new one, as the `),Aa(1568,`code`),bT(1569,`timeout`),cf(),bT(1570,` option (counted from now), or `),Aa(1571,`code`),bT(1572,`false`),cf(),bT(1573,` for none. A `),Aa(1574,`code`),bT(1575,`compensation_failed`),cf(),bT(1576,` instance runs the compensations that didn't complete again, each with its attempts back, and ends as it would have: `),Aa(1577,`code`),bT(1578,`failed`),cf(),bT(1579,` or `),Aa(1580,`code`),bT(1581,`cancelled`),cf(),bT(1582,`.`),cf(),Aa(1583,`li`)(1584,`strong`)(1585,`code`),bT(1586,`delete()`),cf()(),bT(1587,` removes a finished instance with its journal. An unfinished one needs the `),Aa(1588,`code`),bT(1589,`force`),cf(),bT(1590,` option, and goes without running its compensations: use it for an instance no worker can run any more, such as one of a version you no longer deploy.`),cf(),Aa(1591,`li`)(1592,`strong`)(1593,`code`),bT(1594,`cancel()`),cf()(),bT(1595,`, as above, stops an instance that is still running, and runs its compensations.`),cf(),Aa(1596,`li`)(1597,`strong`)(1598,`code`),bT(1599,`terminate()`),cf()(),bT(1600,` stops an instance without running its compensations, for one whose undo mustn't or can't run, such as an order support has already refunded by hand. A parked instance stops at once, a running one at its next `),Aa(1601,`code`),bT(1602,`ctx`),cf(),bT(1603,` call, and a compensating one after the compensation it's running. It ends as `),Aa(1604,`code`),bT(1605,`cancelled`),cf(),bT(1606,`, with a `),Aa(1607,`code`),bT(1608,`WorkflowTerminatedError`),cf(),bT(1609,` whose message is the reason (`),Aa(1610,`code`),bT(1611,`Terminated.`),cf(),bT(1612,` without one). It's accepted after a `),Aa(1613,`code`),bT(1614,`cancel()`),cf(),bT(1615,` too, which it replaces, and a `),Aa(1616,`code`),bT(1617,`cancel()`),cf(),bT(1618,` after it is refused. Its children get their `),Aa(1619,`code`),bT(1620,`parentClose`),cf(),bT(1621,`, as for any end.`),cf()(),Aa(1622,`p`)(1623,`code`),bT(1624,`retry()`),cf(),bT(1625,` and `),Aa(1626,`code`),bT(1627,`delete()`),cf(),bT(1628,` throw a `),Aa(1629,`code`),bT(1630,`WorkflowStateError`),cf(),bT(1631,`, whose `),Aa(1632,`code`),bT(1633,`status`),cf(),bT(1634,` is `),Aa(1635,`code`),bT(1636,`409`),cf(),bT(1637,`, for a status where they make no sense, and when another change to the instance races them. A retry is journaled as `),Aa(1638,`code`),bT(1639,`$retry:1`),cf(),bT(1640,`, `),Aa(1641,`code`),bT(1642,`$retry:2`),cf(),bT(1643,` and so on, with the status and error it retried, and both actions are emitted, as `),Aa(1644,`code`),bT(1645,`workflow-retried`),cf(),bT(1646,` and `),Aa(1647,`code`),bT(1648,`workflow-deleted`),cf(),bT(1649,`.`),cf(),Aa(1650,`h5`,82)(1651,`span`),bT(1652,`Purge finished instances`),cf()(),Aa(1653,`p`),bT(1654,`Finished instances stay, with their journals, until you purge them. `),Aa(1655,`code`),bT(1656,`purge()`),cf(),bT(1657,` deletes the ones that finished longer ago than its `),Aa(1658,`code`),bT(1659,`olderThan`),cf(),bT(1660,` option, a batch at a time, and the signals no instance can take any more. An instance only takes signals sent after it started, so once every unfinished instance started after a signal, and the signal is older than `),Aa(1661,`code`),bT(1662,`olderThan`),cf(),bT(1663,`, it goes; the newest signal always stays. `),Aa(1664,`code`),bT(1665,`compensation_failed`),cf(),bT(1666,` instances wait for a person, so they're purged only when you list them in the `),Aa(1667,`code`),bT(1668,`status`),cf(),bT(1669,` option. Run it every night, on one instance of your application, with `),Aa(1670,`code`),bT(1671,`@Cron()`),cf(),bT(1672,` from `),Aa(1673,`code`),bT(1674,`@nestjs/schedule`),cf(),bT(1675,` and `),Aa(1676,`code`),bT(1677,`@OnOneInstance()`),cf(),bT(1678,` from `),Aa(1679,`a`,83)(1680,`code`),bT(1681,`@nestjs/locks`),cf()(),bT(1682,`:`),cf(),Aa(1683,`app-copy-button`)(1684,`pre`)(1685,`code`,58),bT(1686,`
@Injectable()
export class WorkflowRetentionJob {
  constructor(private readonly workflowClient: WorkflowClient) {}

  @Cron('30 3 * * *')
  @OnOneInstance({ key: 'workflows:purge' })
  async purge() {
    return this.workflowClient.purge({ olderThan: '30d' });
  }
}
`),cf()()(),Aa(1687,`p`)(1688,`code`),bT(1689,`purge()`),cf(),bT(1690,` resolves with the number of `),Aa(1691,`code`),bT(1692,`instances`),cf(),bT(1693,` and `),Aa(1694,`code`),bT(1695,`signals`),cf(),bT(1696,` it deleted, and of the rate-limit windows that ended (`),Aa(1697,`code`),bT(1698,`rateLimits`),cf(),bT(1699,`). A signal's `),Aa(1700,`code`),bT(1701,`id`),cf(),bT(1702,` deduplicates for as long as the signal is stored, so keep `),Aa(1703,`code`),bT(1704,`olderThan`),cf(),bT(1705,` longer than any sender's redelivery window, such as your carrier's webhook retries.`),cf(),Aa(1706,`h4`,84)(1707,`span`),bT(1708,`Limits, children and batch work`),cf()(),Aa(1709,`h5`,85)(1710,`span`),bT(1711,`Limit how many run at once`),cf()(),Aa(1712,`p`),bT(1713,`A worker runs every due instance it has room for. Three options decide what runs, and in what order, across every worker: a concurrency limit, a rate limit and a priority. The fulfilment sets the first two in `),Aa(1714,`code`),bT(1715,`@Workflow()`),cf(),bT(1716,`:`),cf(),Aa(1717,`app-copy-button`,56)(1718,`span`,57),bT(1719),LT(1720,`extension`),Wa(1721,`app-tabs`,null,24),cf(),Aa(1723,`pre`)(1724,`code`,58),bT(1725,`
@Workflow('order-fulfilment', {
  // One execution per customer at a time, so two of their orders never charge their card at once.
  concurrency: { limit: 1, key: (order: Order) => order.userId },
  // Each execution sends the payment provider one request at most: a charge, or a refund.
  rateLimit: { max: 10, duration: '1s' },
})
`),cf()()(),Aa(1726,`p`)(1727,`strong`),bT(1728,`Concurrency.`),cf(),Aa(1729,`code`),bT(1730,`concurrency`),cf(),bT(1731,` caps how many instances run at once: a `),Aa(1732,`code`),bT(1733,`limit`),cf(),bT(1734,` for the workflow, or a `),Aa(1735,`code`),bT(1736,`limit`),cf(),bT(1737,` per key with a `),Aa(1738,`code`),bT(1739,`key`),cf(),bT(1740,` function, here the customer's id. An array takes one of each. An instance holds a slot only while an execution runs it, compensations included, not while it sleeps or waits: a limit protects what the steps call, and an order parked for days holds up nobody. A process that crashes frees its slots once its leases expire. Instances past a limit stay due and wait for a slot, most overdue first, and a full key is passed over, so one busy customer never holds back another's order. The key is computed from the input when the instance starts, and `),Aa(1741,`code`),bT(1742,`start()`),cf(),bT(1743,`'s `),Aa(1744,`code`),bT(1745,`concurrencyKey`),cf(),bT(1746,` option sets another, for a workflow whose limit has a key.`),cf(),Aa(1747,`p`)(1748,`strong`),bT(1749,`Rate limits.`),cf(),Aa(1750,`code`),bT(1751,`rateLimit`),cf(),bT(1752,` caps how many executions start per window: `),Aa(1753,`code`),bT(1754,`max`),cf(),bT(1755,` per `),Aa(1756,`code`),bT(1757,`duration`),cf(),bT(1758,` for the workflow, or per key with a `),Aa(1759,`code`),bT(1760,`key`),cf(),bT(1761,` function, which `),Aa(1762,`code`),bT(1763,`start()`),cf(),bT(1764,`'s `),Aa(1765,`code`),bT(1766,`rateLimitKey`),cf(),bT(1767,` option overrides. Every execution counts, the first one and each resumption after a sleep, a signal, a retry's backoff or a cancel, because each can call what the limit protects. The fulfilment sends the payment provider one request per execution at most, so this caps its requests, and the executions that send none too. A window opens with the first execution after the previous one ended, and admits `),Aa(1768,`code`),bT(1769,`max`),cf(),bT(1770,` executions until it closes, so two windows back to back can admit twice `),Aa(1771,`code`),bT(1772,`max`),cf(),bT(1773,` within one `),Aa(1774,`code`),bT(1775,`duration`),cf(),bT(1776,`. Say the payment provider allows 20 requests a second: allow 10.`),cf(),Aa(1777,`p`)(1778,`strong`),bT(1779,`Priorities.`),cf(),Aa(1780,`code`),bT(1781,`start()`),cf(),bT(1782,`'s `),Aa(1783,`code`),bT(1784,`priority`),cf(),bT(1785,` option decides what is claimed first: the lowest priority, then the most overdue. It's an integer from 1 to 2,097,151, and instances started without one go before every prioritized one. Express orders go first:`),cf(),Aa(1786,`app-copy-button`,56)(1787,`span`,57),bT(1788),LT(1789,`extension`),Wa(1790,`app-tabs`,null,25),cf(),Aa(1792,`pre`)(1793,`code`,58),bT(1794,`
const fulfilment = await this.workflowClient.start(OrderFulfilmentWorkflow, order, {
  id: fulfilmentId(order.id),
  transaction: tx,
  // Lower runs first: express orders before standard ones.
  priority: order.shipping === 'express' ? 1 : 2,
});
`),cf()()(),Aa(1795,`p`),bT(1796,`Since instances without a priority go first, once orders have one, other work needs one to go after them: the invoice batch's schedule gives it 10, in `),Aa(1797,`a`,86),bT(1798,`Run workflows on a schedule`),cf(),bT(1799,`. An instance keeps its priority for every execution, and children inherit their parent's. Priorities are strict: a steady stream of express orders holds the standard ones back. `),Aa(1800,`code`),bT(1801,`@StartOn()`),cf(),bT(1802,` takes the same option, as `),Aa(1803,`a`,47),bT(1804,`With CQRS`),cf(),bT(1805,` shows.`),cf(),Aa(1806,`p`),bT(1807,`Limits come from the highest registered version of the workflow and apply to all its versions, and each process applies the limits of the code it runs, so deploy a change to them everywhere. Claims never admit more than the limits allow, but can admit less for a moment: workers polling at the same time can take a few polls to fill a short window, and with both a concurrency key and a rate-limit key, a candidate that one kind of key passes over waits for the next claim. Claims also sort the due instances by priority, which the index on `),Aa(1808,`code`),bT(1809,`wake_at`),cf(),bT(1810,` doesn't give them: cheap while few instances are due, noticeable with a large backlog. `),Aa(1811,`code`),bT(1812,`drain()`),cf(),bT(1813,` stops when nothing left can start.`),cf(),Aa(1814,`h5`,87)(1815,`span`),bT(1816,`Start child workflows`),cf()(),Aa(1817,`p`),bT(1818,`Shipping grows: book the carrier's pickup, cancel it if the order is undone, then wait for the delivery or the return. It's a process of its own, with its own steps, retries and status, so give it a workflow of its own, and run it as a `),Aa(1819,`strong`),bT(1820,`child`),cf(),bT(1821,` of the fulfilment:`),cf(),Aa(1822,`app-copy-button`,56)(1823,`span`,57),bT(1824),LT(1825,`extension`),Wa(1826,`app-tabs`,null,26),cf(),Aa(1828,`pre`)(1829,`code`,58),bT(1830,`
import { Workflow, type WorkflowContext, type WorkflowRunner } from '@nestjs/workflows';
import type { Order } from '../orders/order.js';
import { shipmentDelivered, shipmentReturned, type CarrierEvent } from './carrier-event.js';
import { CarrierClient } from './carrier.client.js';

/** Books the carrier's pickup, and waits for the delivery: a child of the order's fulfilment. */
@Workflow('shipment')
export class ShipmentWorkflow implements WorkflowRunner<Order, CarrierEvent> {
  constructor(private readonly carrierClient: CarrierClient) {}

  async run(ctx: WorkflowContext, order: Order): Promise<CarrierEvent> {
    await ctx.step(
      'book-pickup',
      ({ idempotencyKey }) => this.carrierClient.bookPickup(order, idempotencyKey),
      { compensate: ({ pickupId }) => this.carrierClient.cancelPickup(pickupId) },
    );

    const outcome = await ctx.waitForAny('await-delivery', {
      delivered: ctx.signalWait(shipmentDelivered, { key: order.id }),
      returned: ctx.signalWait(shipmentReturned, { key: order.id }),
      timedOut: ctx.timer('3d'),
    });
    if (outcome.key === 'returned') {
      ctx.fail(\`The carrier returned order \${order.id} to the warehouse.\`);
    }
    if (outcome.key === 'timedOut') {
      ctx.fail(\`Order \${order.id} was not delivered within 3 days.\`);
    }
    return outcome.value;
  }
}
`),cf()()(),Aa(1831,`p`)(1832,`code`),bT(1833,`CarrierClient`),cf(),bT(1834,` is a stand-in for the carrier's booking API, which, like the payment provider, answers a repeated idempotency key with the first booking. In the fulfilment, the child takes the place of the wait:`),cf(),Aa(1835,`app-copy-button`,56)(1836,`span`,57),bT(1837),LT(1838,`extension`),Wa(1839,`app-tabs`,null,27),cf(),Aa(1841,`pre`)(1842,`code`,58),bT(1843,`
// Starts the shipment, and waits for it to end: its delivery, or a ChildWorkflowFailedError.
const delivery = await ctx.executeChild(ShipmentWorkflow, order);
`),cf()()(),Aa(1844,`p`),bT(1845,`Register `),Aa(1846,`code`),bT(1847,`ShipmentWorkflow`),cf(),bT(1848,` and `),Aa(1849,`code`),bT(1850,`CarrierClient`),cf(),bT(1851,` as providers, next to the fulfilment. The carrier's webhook doesn't change: it signals the order's id, and the shipment is now the instance waiting for it.`),cf(),Aa(1852,`ul`)(1853,`li`)(1854,`strong`)(1855,`code`),bT(1856,`ctx.executeChild()`),cf()(),bT(1857,` starts the child and waits for its end. Both are journaled, as `),Aa(1858,`code`),bT(1859,`$child:<id>`),cf(),bT(1860,` and `),Aa(1861,`code`),bT(1862,`$result:<id>`),cf(),bT(1863,`, so a replay gets the same child back instead of starting another, and the fulfilment parks in the meantime. `),Aa(1864,`code`),bT(1865,`ctx.startChild()`),cf(),bT(1866,` only starts it, and returns a handle: its `),Aa(1867,`code`),bT(1868,`result()`),cf(),bT(1869,` waits for the child, and the handle is a condition of `),Aa(1870,`code`),bT(1871,`waitForAny()`),cf(),bT(1872,`, to race the child against a timer or a signal.`),cf(),Aa(1873,`li`)(1874,`strong`),bT(1875,`Ids.`),cf(),bT(1876,` A child's id defaults to its parent's id, the workflow's name and a count of that workflow's children in this run, such as `),Aa(1877,`code`),bT(1878,`order-71e1973d/shipment#1`),cf(),bT(1879,`. Give children started from parallel branches an `),Aa(1880,`code`),bT(1881,`id`),cf(),bT(1882,` option derived from your data, so that a replay, which can reach them in another order, finds each one.`),cf(),Aa(1883,`li`)(1884,`strong`),bT(1885,`Failures.`),cf(),bT(1886,` If the child fails, is cancelled or is terminated, `),Aa(1887,`code`),bT(1888,`executeChild()`),cf(),bT(1889,` throws a `),Aa(1890,`code`),bT(1891,`ChildWorkflowFailedError`),cf(),bT(1892,`, with its `),Aa(1893,`code`),bT(1894,`status`),cf(),bT(1895,` and its error as `),Aa(1896,`code`),bT(1897,`cause`),cf(),bT(1898,`. Left uncaught, it fails the fulfilment like any error: a returned parcel fails the shipment, whose compensation cancels its booking, and then the fulfilment, whose compensations refund the charge and release the stock. Catch it to try something else, such as another carrier.`),cf(),Aa(1899,`li`)(1900,`strong`)(1901,`code`),bT(1902,`parentClose`),cf()(),bT(1903,` decides what happens to a child that is still running when its parent ends or starts compensating: `),Aa(1904,`code`),bT(1905,`'cancel'`),cf(),bT(1906,`, the default, cancels it, and its compensations run; `),Aa(1907,`code`),bT(1908,`'terminate'`),cf(),bT(1909,` stops it without them; `),Aa(1910,`code`),bT(1911,`'abandon'`),cf(),bT(1912,` leaves it running. When support cancels the order, the shipment is cancelled with it, and the pickup with the shipment.`),cf(),Aa(1913,`li`),bT(1914,`A child inherits its parent's priority, unless `),Aa(1915,`code`),bT(1916,`startChild()`),cf(),bT(1917,` gets one, and takes `),Aa(1918,`code`),bT(1919,`concurrencyKey`),cf(),bT(1920,` and `),Aa(1921,`code`),bT(1922,`rateLimitKey`),cf(),bT(1923,` options as `),Aa(1924,`code`),bT(1925,`start()`),cf(),bT(1926,` does. `),Aa(1927,`code`),bT(1928,`getStatus()`),cf(),bT(1929,` with the `),Aa(1930,`code`),bT(1931,`children`),cf(),bT(1932,` option lists an instance's children, each with its `),Aa(1933,`code`),bT(1934,`parentId`),cf(),bT(1935,`, and `),Aa(1936,`code`),bT(1937,`list()`),cf(),bT(1938,` pages through them by `),Aa(1939,`code`),bT(1940,`parentId`),cf(),bT(1941,`.`),cf()(),Aa(1942,`h5`,88)(1943,`span`),bT(1944,`Long-running steps`),cf()(),Aa(1945,`p`),bT(1946,`A step can run for hours. While it runs, the worker keeps renewing the lease in the background. For long batch work, checkpoint progress so a crash doesn't restart the job from zero. Here, a monthly batch renders invoices one page at a time:`),cf(),Aa(1947,`app-copy-button`,56)(1948,`span`,57),bT(1949),LT(1950,`extension`),Wa(1951,`app-tabs`,null,28),cf(),Aa(1953,`pre`)(1954,`code`,58),bT(1955,`
import { Workflow, type WorkflowContext, type WorkflowRunner, type WorkflowStepContext } from '@nestjs/workflows';
import { InvoicesService } from './invoices.service.js';

interface Checkpoint {
  cursor: number | null;
  rendered: number;
}

@Workflow('invoice-batch')
export class InvoiceBatchWorkflow implements WorkflowRunner<{ month: string }, { rendered: number }> {
  constructor(private readonly invoicesService: InvoicesService) {}

  async run(ctx: WorkflowContext, { month }: { month: string }) {
    return ctx.step(
      'render-invoices',
      async ({ progress, heartbeat, signal }: WorkflowStepContext<Checkpoint>) => {
        // After a crash, the next attempt starts from the last checkpoint.
        let { cursor, rendered } = progress ?? { cursor: 0, rendered: 0 };
        while (cursor !== null) {
          const page = await this.invoicesService.renderPage(month, cursor, signal);
          cursor = page.nextCursor;
          rendered += page.rendered;
          await heartbeat({ cursor, rendered });
        }
        return { rendered };
      },
      { heartbeatTimeout: '2m' },
    );
  }
}
`),cf()()(),Aa(1956,`ul`)(1957,`li`)(1958,`code`),bT(1959,`heartbeat(progress)`),cf(),bT(1960,` writes the checkpoint to the journal. If the attempt dies, the next one receives it as `),Aa(1961,`code`),bT(1962,`progress`),cf(),bT(1963,`. Annotating the parameter as `),Aa(1964,`code`),bT(1965,`WorkflowStepContext<Checkpoint>`),cf(),bT(1966,` types both. The page that was in flight is rendered again, so `),Aa(1967,`code`),bT(1968,`renderPage()`),cf(),bT(1969,` must overwrite rather than append.`),cf(),Aa(1970,`li`)(1971,`code`),bT(1972,`heartbeatTimeout`),cf(),bT(1973,` fails an attempt that stops calling `),Aa(1974,`code`),bT(1975,`heartbeat()`),cf(),bT(1976,`, such as one stuck on a hung socket, while the process is still alive. A `),Aa(1977,`code`),bT(1978,`timeout`),cf(),bT(1979,` option caps the attempt's total duration.`),cf(),Aa(1980,`li`)(1981,`code`),bT(1982,`signal`),cf(),bT(1983,` is aborted on shutdown, on a lost lease and on those timeouts. Pass it to your I/O.`),cf()(),Aa(1984,`p`),bT(1985,`A schedule, below, starts the batch every month. When the work belongs on processes of its own, such as a pool of PDF renderers, hand it to a `),Aa(1986,`a`,89),bT(1987,`BullMQ`),cf(),bT(1988,` queue from a step, and wait for the job to report back with a signal. The job id is the step's `),Aa(1989,`code`),bT(1990,`idempotencyKey`),cf(),bT(1991,`, so a retried step doesn't enqueue it twice:`),cf(),Aa(1992,`app-copy-button`)(1993,`pre`)(1994,`code`,58),bT(1995,`
await ctx.step('enqueue-render', async ({ idempotencyKey }) => {
  await this.invoicesQueue.add('render', { month }, { jobId: idempotencyKey });
});
const rendered = await ctx.waitForSignal('await-render', invoicesRendered, { key: month, timeout: '6h' });
`),cf()()(),Aa(1996,`p`),bT(1997,`The queue's processor reports back when the job is done:`),cf(),Aa(1998,`app-copy-button`)(1999,`pre`)(2e3,`code`,58),bT(2001,`
await this.workflowClient.signal(invoicesRendered, result, { key: job.data.month, id: job.id });
`),cf()()(),Aa(2002,`p`),bT(2003,`The `),Aa(2004,`code`),bT(2005,`id`),cf(),bT(2006,` stores the signal once when BullMQ runs the job again, and a job that finishes before the workflow reaches the wait still counts, because signals are durable.`),cf(),Aa(2007,`h5`,90)(2008,`span`),bT(2009,`Run workflows on a schedule`),cf()(),Aa(2010,`p`),bT(2011,`The invoices are due on the 1st of every month. Instead of a cron job that starts the batch, declare a schedule on the workflow:`),cf(),Aa(2012,`app-copy-button`,56)(2013,`span`,57),bT(2014),LT(2015,`extension`),Wa(2016,`app-tabs`,null,29),cf(),Aa(2018,`pre`)(2019,`code`,58),bT(2020,`
import { Workflow, type WorkflowContext, type WorkflowRunner, type WorkflowStepContext } from '@nestjs/workflows';

/** The month before the one \`at\` falls in, in UTC ('2026-09' in October 2026): 02:00 on the 1st in New York is the 1st in UTC too. */
const lastMonth = (at: number) => new Date(new Date(at).setUTCDate(0)).toISOString().slice(0, 7);

@Workflow('invoice-batch', {
  schedules: [
    {
      id: 'monthly-invoices',
      // At 02:00 on the 1st of every month, in the store's time zone: last month's invoices.
      cron: '0 2 1 * *',
      tz: 'America/New_York',
      // A deploy or an outage at 02:00 delays the batch instead of skipping a month.
      missed: 'once',
      // After the orders (express 1, standard 2): without a priority, it would go before them.
      priority: 10,
      input: ({ at }) => ({ month: lastMonth(at) }),
    },
  ],
})
export class InvoiceBatchWorkflow implements WorkflowRunner<{ month: string }, { rendered: number }> {
  // ...as before
}
`),cf()()(),Aa(2021,`p`),bT(2022,`Every worker whose code declares the schedule starts its occurrences, and each occurrence starts one instance, however many workers there are: its id is the schedule's id and the occurrence's time, such as `),Aa(2023,`code`),bT(2024,`monthly-invoices@2026-10-01T06:00:00.000Z`),cf(),bT(2025,`. The `),Aa(2026,`code`),bT(2027,`input`),cf(),bT(2028,` function receives the occurrence, its schedule's `),Aa(2029,`code`),bT(2030,`id`),cf(),bT(2031,` and its time `),Aa(2032,`code`),bT(2033,`at`),cf(),bT(2034,`, and so does the instance, as `),Aa(2035,`code`),bT(2036,`ctx.schedule`),cf(),bT(2037,`, which is `),Aa(2038,`code`),bT(2039,`null`),cf(),bT(2040,` for an instance started otherwise.`),cf(),Aa(2041,`ul`)(2042,`li`)(2043,`strong`),bT(2044,`When.`),cf(),Aa(2045,`code`),bT(2046,`cron`),cf(),bT(2047,` takes 5 fields, or 6 with the seconds first, `),Aa(2048,`code`),bT(2049,`every`),cf(),bT(2050,` a fixed interval, and `),Aa(2051,`code`),bT(2052,`rrule`),cf(),bT(2053,` an RFC 5545 recurrence rule. Times are wall-clock times in `),Aa(2054,`code`),bT(2055,`tz`),cf(),bT(2056,`, UTC by default, so the batch starts at 02:00 in New York before and after the clocks change. When the clocks go back, a local time that occurs twice runs once, the first time, so an hourly schedule skips the second pass of the repeated hour. When they go forward, a time that doesn't exist still runs, as much later as the clocks jumped: 02:30 runs at 03:30. `),Aa(2057,`code`),bT(2058,`every`),cf(),bT(2059,` takes no `),Aa(2060,`code`),bT(2061,`tz`),cf(),bT(2062,`: it repeats a fixed interval whatever the time zone. `),Aa(2063,`code`),bT(2064,`startAt`),cf(),bT(2065,`, `),Aa(2066,`code`),bT(2067,`endAt`),cf(),bT(2068,` and `),Aa(2069,`code`),bT(2070,`limit`),cf(),bT(2071,` bound a schedule.`),cf(),Aa(2072,`li`)(2073,`strong`)(2074,`code`),bT(2075,`missed`),cf()(),bT(2076,` says what happens to occurrences no worker was up to start, during a deploy or an outage. `),Aa(2077,`code`),bT(2078,`'skip'`),cf(),bT(2079,`, the default, starts one only if a worker finds it within a minute of its time; `),Aa(2080,`code`),bT(2081,`'once'`),cf(),bT(2082,` starts the latest of them; `),Aa(2083,`code`),bT(2084,`'all'`),cf(),bT(2085,` starts each of them, the latest 100 at most, and needs `),Aa(2086,`code`),bT(2087,`overlap: 'allow'`),cf(),bT(2088,`. The occurrences it passes over are reported in a `),Aa(2089,`code`),bT(2090,`schedule-skipped`),cf(),bT(2091,` event.`),cf(),Aa(2092,`li`)(2093,`strong`)(2094,`code`),bT(2095,`overlap`),cf()(),bT(2096,` says what an occurrence does while an instance the schedule started is unfinished: `),Aa(2097,`code`),bT(2098,`'skip'`),cf(),bT(2099,`, the default, passes it over, with a `),Aa(2100,`code`),bT(2101,`schedule-skipped`),cf(),bT(2102,` event; `),Aa(2103,`code`),bT(2104,`'allow'`),cf(),bT(2105,` starts it anyway; `),Aa(2106,`code`),bT(2107,`'cancel-previous'`),cf(),bT(2108,` cancels the running one; `),Aa(2109,`code`),bT(2110,`'buffer-one'`),cf(),bT(2111,` starts it once the running one ends.`),cf()(),Aa(2112,`p`),bT(2113,`A declared schedule belongs to the code, also while a rolling deploy runs the old and the new code side by side. Each process saves the schedules that its workflows declare when it starts, and confirms them every minute while its worker runs. A process leaves a schedule as it is while another process confirms it, if its own code doesn't declare it or a newer version of the workflow declares it differently. Once no process has confirmed it for five minutes, a process deletes a schedule that its code doesn't declare, whether or not it runs the schedule's workflow, and replaces another declaration with its own. So an old pod that restarts mid-rollout leaves alone the schedules that the new code adds or a new version changes, a schedule that a deploy drops goes about five minutes after the last process of the old code stopped, also when the deploy removes its workflow, and a rollback brings the old declaration back.`),cf(),Aa(2114,`p`),bT(2115,`Processes of other code on the same database, such as the workers of other workflows, also delete a schedule when no worker whose code declares it has run for five minutes, as while those workers are scaled to zero. The next process whose code declares it saves it again as it starts, and the schedule starts over: from its next occurrence, unpaused, with its runs counted from zero.`),cf(),Aa(2116,`p`)(2117,`code`),bT(2118,`WorkflowClient.schedules`),cf(),bT(2119,`, also injectable as `),Aa(2120,`code`),bT(2121,`WorkflowSchedules`),cf(),bT(2122,`, handles schedules at runtime. `),Aa(2123,`code`),bT(2124,`trigger('monthly-invoices')`),cf(),bT(2125,` starts an occurrence now, whatever `),Aa(2126,`code`),bT(2127,`overlap`),cf(),bT(2128,` says and even while the schedule is paused, with its time as `),Aa(2129,`code`),bT(2130,`at`),cf(),bT(2131,`. `),Aa(2132,`code`),bT(2133,`pause()`),cf(),bT(2134,` stops the occurrences until `),Aa(2135,`code`),bT(2136,`resume()`),cf(),bT(2137,`, which starts again from the first one after now. `),Aa(2138,`code`),bT(2139,`preview()`),cf(),bT(2140,` returns the next occurrences, in epoch milliseconds, and `),Aa(2141,`code`),bT(2142,`get()`),cf(),bT(2143,` and `),Aa(2144,`code`),bT(2145,`list()`),cf(),bT(2146,` read the schedules. A schedule that isn't in the code, such as one per customer, is saved with `),Aa(2147,`code`),bT(2148,`upsert()`),cf(),bT(2149,`, and `),Aa(2150,`code`),bT(2151,`remove()`),cf(),bT(2152,` deletes it, leaving the instances it started running:`),cf(),Aa(2153,`app-copy-button`)(2154,`pre`)(2155,`code`,58),bT(2156,`
await this.workflowClient.schedules.upsert(\`reorder-reminder-\${user.id}\`, {
  workflow: ReorderReminderWorkflow,
  // Every 4 weeks, on Saturdays at 09:00 in the customer's time zone
  rrule: 'FREQ=WEEKLY;INTERVAL=4;BYDAY=SA;BYHOUR=9;BYMINUTE=0',
  tz: user.timeZone,
  input: { userId: user.id },
});
`),cf()()(),Aa(2157,`p`)(2158,`code`),bT(2159,`upsert()`),cf(),bT(2160,` and `),Aa(2161,`code`),bT(2162,`remove()`),cf(),bT(2163,` refuse a declared schedule, which you change in the code.`),cf(),Aa(2164,`h5`,91)(2165,`span`),bT(2166,`Wait for a result`),cf()(),Aa(2167,`p`),bT(2168,`Most callers start a workflow and move on. Some need its result: an accountant who wants a month's invoices now, before the schedule renders them, calls a route that renders them and answers with the count. `),Aa(2169,`code`),bT(2170,`startAndWait()`),cf(),bT(2171,` starts the instance and waits for it to end:`),cf(),Aa(2172,`app-copy-button`,56)(2173,`span`,57),bT(2174),LT(2175,`extension`),Wa(2176,`app-tabs`,null,30),cf(),Aa(2178,`pre`)(2179,`code`,58),bT(2180,`
import { Controller, HttpCode, Param, Post, Res } from '@nestjs/common';
import { WorkflowClient, WorkflowResultTimeoutError } from '@nestjs/workflows';
import type { Response } from 'express';
import { InvoiceBatchWorkflow } from './invoice-batch.workflow.js';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly workflowClient: WorkflowClient) {}

  // Accounting only: protect it with your staff guard.
  @Post(':month')
  @HttpCode(200)
  async render(@Param('month') month: string, @Res({ passthrough: true }) response: Response) {
    try {
      // One batch per month: calling again, while it runs or after it ended, waits for the same one.
      return await this.workflowClient.startAndWait(InvoiceBatchWorkflow, { month }, { id: \`invoices-\${month}\` }, { timeout: '30s' });
    } catch (error) {
      if (!(error instanceof WorkflowResultTimeoutError)) {
        throw error;
      }
      // The batch keeps running: answer now, and let the accountant call again later.
      response.status(202);
      return { rendering: true };
    }
  }
}
`),cf()()(),Aa(2181,`ul`)(2182,`li`)(2183,`code`),bT(2184,`startAndWait()`),cf(),bT(2185,` is `),Aa(2186,`code`),bT(2187,`start()`),cf(),bT(2188,`, then `),Aa(2189,`code`),bT(2190,`result()`),cf(),bT(2191,`, which waits for an instance to end and resolves with its output. For an id that has an instance already, it waits for that one, so the accountant calling the route again, while the batch runs or after it ended, gets the same batch. The wait's options are the fourth argument: the third one's `),Aa(2192,`code`),bT(2193,`timeout`),cf(),bT(2194,` stays the instance's run timeout.`),cf(),Aa(2195,`li`),bT(2196,`Past the wait's `),Aa(2197,`code`),bT(2198,`timeout`),cf(),bT(2199,`, in wall-clock time rather than the module's clock, it rejects with `),Aa(2200,`code`),bT(2201,`WorkflowResultTimeoutError`),cf(),bT(2202,`, and the instance keeps running: the route answers `),Aa(2203,`code`),bT(2204,`202`),cf(),bT(2205,`. A `),Aa(2206,`code`),bT(2207,`signal`),cf(),bT(2208,` option stops the wait when it's aborted, as when the caller goes away.`),cf(),Aa(2209,`li`),bT(2210,`On shutdown, a wait lasts while the worker finishes its running steps, up to `),Aa(2211,`code`),bT(2212,`shutdownTimeout`),cf(),bT(2213,`, so an instance that ends meanwhile still answers with its result. Then the wait rejects with an `),Aa(2214,`code`),bT(2215,`Error`),cf(),bT(2216,`, before Nest closes the HTTP server, and the route answers at once, here with a `),Aa(2217,`code`),bT(2218,`500`),cf(),bT(2219,`, instead of holding up the shutdown until its wait's `),Aa(2220,`code`),bT(2221,`timeout`),cf(),bT(2222,`.`),cf(),Aa(2223,`li`),bT(2224,`An instance that failed, was cancelled or terminated rejects with a `),Aa(2225,`code`),bT(2226,`WorkflowFailedError`),cf(),bT(2227,`, whose `),Aa(2228,`code`),bT(2229,`status`),cf(),bT(2230,` says how it ended and whose `),Aa(2231,`code`),bT(2232,`cause`),cf(),bT(2233,` is its error. Here, that's a `),Aa(2234,`code`),bT(2235,`500`),cf(),bT(2236,`.`),cf(),Aa(2237,`li`)(2238,`code`),bT(2239,`result()`),cf(),bT(2240,` waits for an instance by its id, such as the one `),Aa(2241,`code`),bT(2242,`trigger()`),cf(),bT(2243,` started, whichever process runs it. `),Aa(2244,`code`),bT(2245,`startAndWait()`),cf(),bT(2246,` refuses the `),Aa(2247,`code`),bT(2248,`transaction`),cf(),bT(2249,` option, since the instance only exists once your transaction commits: call `),Aa(2250,`code`),bT(2251,`start()`),cf(),bT(2252,` in the transaction, and `),Aa(2253,`code`),bT(2254,`result()`),cf(),bT(2255,` after the commit.`),cf()(),Aa(2256,`h4`,92)(2257,`span`),bT(2258,`Deploy changes safely`),cf()(),Aa(2259,`p`),bT(2260,`The journal is keyed by name, so step, sleep and wait names are a contract with every instance that is still running. The name is also part of the idempotency key.`),cf(),Aa(2261,`p`),bT(2262,`Suppose you rename `),Aa(2263,`code`),bT(2264,`charge-payment`),cf(),bT(2265,` to `),Aa(2266,`code`),bT(2267,`charge-card`),cf(),bT(2268,` and deploy. An order that was waiting for the carrier resumes, finds no `),Aa(2269,`code`),bT(2270,`charge-card`),cf(),bT(2271,` entry in its journal, and would charge the card again, under a key the payment provider has never seen. Before the first new step of an execution runs, the engine checks that the code reached every step in the journal. Here it didn't, so the instance fails without charging:`),cf(),Aa(2272,`pre`)(2273,`code`,93),bT(2274,`
Instance "order-6d0f8c06" of workflow "order-fulfilment@1" does not match its journal:
"charge-payment", "reserve-stock", "await-delivery" were recorded by an earlier run but not
reached before the new step "charge-card". A deployed change renamed, removed or reordered steps.
Ship such changes as a new version (@Workflow(name, { version })) and keep the old class
registered until its instances finish.
`),cf()(),Aa(2275,`p`),bT(2276,`Its compensations don't run either, because they're defined by the code that no longer matches. The instance is left for a person to handle. The check doesn't see a step whose name stayed the same but whose body now does something different.`),cf(),Aa(2277,`p`),bT(2278,`Some changes don't need a new version:`),cf(),Aa(2279,`ul`)(2280,`li`),bT(2281,`changing a step's body without changing what it means,`),cf(),Aa(2282,`li`),bT(2283,`adding steps after the last step, sleep or wait that any running instance has reached,`),cf(),Aa(2284,`li`),bT(2285,`changing retry options and timeouts.`),cf()(),Aa(2286,`p`),bT(2287,`Anything else ships as a new version. Say marketing wants an order confirmation right after payment. Inserting a step before `),Aa(2288,`code`),bT(2289,`reserve-stock`),cf(),bT(2290,` changes what a replay sees, so copy the class and bump its version:`),cf(),Aa(2291,`app-copy-button`,56)(2292,`span`,57),bT(2293),LT(2294,`extension`),Wa(2295,`app-tabs`,null,31),cf(),Aa(2297,`pre`)(2298,`code`,58),bT(2299,`
@Workflow('order-fulfilment', {
  version: 2,
  // The limits of the highest registered version apply to every version: keep them.
  concurrency: { limit: 1, key: (order: Order) => order.userId },
  rateLimit: { max: 10, duration: '1s' },
})
export class OrderFulfilmentWorkflowV2 implements WorkflowRunner<Order, FulfilmentResult> {
  // ...same constructor as version 1

  async run(ctx: WorkflowContext, order: Order): Promise<FulfilmentResult> {
    const charge = await ctx.step(
      'charge-payment',
      // ...unchanged
    );
    ctx.setStatus('paid');

    await ctx.step('send-order-confirmation', ({ idempotencyKey }) =>
      this.mailService.sendOrderConfirmation(order, idempotencyKey),
    );

    // ...the rest is unchanged from version 1
  }
}
`),cf()()(),Aa(2300,`p`),bT(2301,`Register both classes. An instance keeps the version it started on, and a worker only claims versions it has registered, so old and new pods can run side by side during a rolling deploy. New instances start on the highest registered version, even when the controller still passes `),Aa(2302,`code`),bT(2303,`OrderFulfilmentWorkflow`),cf(),bT(2304,`, because the class only identifies the workflow's name. To pin one, add `),Aa(2305,`code`),bT(2306,`version: 1`),cf(),bT(2307,` to the `),Aa(2308,`code`),bT(2309,`start()`),cf(),bT(2310,` options. Remove version 1 once `),Aa(2311,`code`),bT(2312,`list()`),cf(),bT(2313,` with the workflow's name, `),Aa(2314,`code`),bT(2315,`version: 1`),cf(),bT(2316,` and the unfinished statuses (`),Aa(2317,`code`),bT(2318,`pending`),cf(),bT(2319,`, `),Aa(2320,`code`),bT(2321,`running`),cf(),bT(2322,`, `),Aa(2323,`code`),bT(2324,`suspended`),cf(),bT(2325,` and `),Aa(2326,`code`),bT(2327,`compensating`),cf(),bT(2328,`) comes back empty.`),cf(),Aa(2329,`h5`,94)(2330,`span`),bT(2331,`Rules for workflow code`),cf()(),Aa(2332,`p`)(2333,`code`),bT(2334,`run()`),cf(),bT(2335,` executes again from the top every time an instance resumes. Code between steps runs on every execution, so it must make the same decisions each time:`),cf(),Aa(2336,`ul`)(2337,`li`),bT(2338,`Put anything that touches or reads the outside world in a step: HTTP calls, database reads and writes, feature flags.`),cf(),Aa(2339,`li`),bT(2340,`Outside steps, use `),Aa(2341,`code`),bT(2342,`ctx.now()`),cf(),bT(2343,`, `),Aa(2344,`code`),bT(2345,`ctx.random()`),cf(),bT(2346,` and `),Aa(2347,`code`),bT(2348,`ctx.uuid()`),cf(),bT(2349,` instead of `),Aa(2350,`code`),bT(2351,`Date.now()`),cf(),bT(2352,`, `),Aa(2353,`code`),bT(2354,`Math.random()`),cf(),bT(2355,` and `),Aa(2356,`code`),bT(2357,`randomUUID()`),cf(),bT(2358,`. They're journaled.`),cf(),Aa(2359,`li`),bT(2360,`In `),Aa(2361,`code`),bT(2362,`run()`),cf(),bT(2363,`, only `),Aa(2364,`code`),bT(2365,`await`),cf(),Aa(2366,`code`),bT(2367,`ctx`),cf(),bT(2368,` operations and pure computation. Never wait on a real timer.`),cf(),Aa(2369,`li`),bT(2370,`Step, sleep and wait names must be unique within a run. In a loop, add the index to the name, such as `),Aa(2371,`code`),bT(2372,`remind-1`),cf(),bT(2373,` and `),Aa(2374,`code`),bT(2375,`remind-2`),cf(),bT(2376,`. Give children started from parallel branches an `),Aa(2377,`code`),bT(2378,`id`),cf(),bT(2379,` of their own.`),cf(),Aa(2380,`li`),bT(2381,`Don't call `),Aa(2382,`code`),bT(2383,`ctx`),cf(),bT(2384,` methods inside a step's function. The function runs once and replays only see its result, so the engine fails the instance when a step calls `),Aa(2385,`code`),bT(2386,`ctx`),cf(),bT(2387,`. Throw a `),Aa(2388,`code`),bT(2389,`NonRetryableStepError`),cf(),bT(2390,` from a step instead of calling `),Aa(2391,`code`),bT(2392,`ctx.fail()`),cf(),bT(2393,` there.`),cf(),Aa(2394,`li`),bT(2395,`If you catch errors in `),Aa(2396,`code`),bT(2397,`run()`),cf(),bT(2398,`, rethrow what you don't handle. `),Aa(2399,`code`),bT(2400,`isWorkflowInterrupt()`),cf(),bT(2401,` identifies the engine's control flow. The engine doesn't depend on it: after a swallowed interrupt no step runs, `),Aa(2402,`code`),bT(2403,`commit()`),cf(),bT(2404,` throws again, and a cancel still cancels. But `),Aa(2405,`code`),bT(2406,`finally`),cf(),bT(2407,` blocks run at every suspension, so keep side effects out of them.`),cf(),Aa(2408,`li`)(2409,`code`),bT(2410,`Promise.all()`),cf(),bT(2411,` over steps is fine, and a step in the same `),Aa(2412,`code`),bT(2413,`Promise.all()`),cf(),bT(2414,` as a sleep or wait starts after it. `),Aa(2415,`code`),bT(2416,`Promise.race()`),cf(),bT(2417,` and `),Aa(2418,`code`),bT(2419,`Promise.any()`),cf(),bT(2420,` are not replay-safe.`),cf(),Aa(2421,`li`),bT(2422,`Inputs, step results and signal payloads must be JSON-serializable. A `),Aa(2423,`code`),bT(2424,`Date`),cf(),bT(2425,` comes back as a string, on the first run and on every replay, and the `),Aa(2426,`code`),bT(2427,`Journaled`),cf(),bT(2428,` types of results and payloads say so.`),cf(),Aa(2429,`li`),bT(2430,`Keep no per-run state on `),Aa(2431,`code`),bT(2432,`this`),cf(),bT(2433,`: one instance of the class serves every order.`),cf()(),Aa(2434,`h4`,95)(2435,`span`),bT(2436,`Try it and test it`),cf()(),Aa(2437,`h5`,96)(2438,`span`),bT(2439,`Try it`),cf()(),Aa(2440,`p`),bT(2441,`Create the database, apply your migrations, and start the application with `),Aa(2442,`code`),bT(2443,`DATABASE_URL`),cf(),bT(2444,` pointing at the database:`),cf(),Aa(2445,`pre`)(2446,`code`,52),bT(2447,`
$ npm run start:dev
...
[Nest] 33662  - 09/30/2026, 1:28:30 PM     LOG [WorkflowsModule] WorkflowStorage: PostgresWorkflowStore
[Nest] 33662  - 09/30/2026, 1:28:30 PM     LOG [WorkflowsModule] PostgresWorkflowStore: migrated schema "nest_workflows" to version 1.
[Nest] 33662  - 09/30/2026, 1:28:30 PM     LOG [NestApplication] Nest application successfully started +8ms
`),cf()(),Aa(2448,`p`),bT(2449,`The log names the store in use, not the in-memory default, and says that the store created its schema: your migrations created `),Aa(2450,`code`),bT(2451,`orders`),cf(),bT(2452,`, and the store its own tables. Place an order, then ask where it is:`),cf(),Aa(2453,`pre`)(2454,`code`,52),bT(2455,`
$ curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" \\
    -d '{"userId": "u_42", "items": [{"productId": "salmon-kibble-2kg", "quantity": 1, "price": 2499}]}'
{"id":"f7e1e1eb","userId":"u_42","items":[{"productId":"salmon-kibble-2kg","quantity":1,"price":2499}],"shipping":"standard","total":2499,"status":"placed","fulfilment":{"id":"order-f7e1e1eb","workflow":"order-fulfilment","version":1,"created":true,"status":"pending"}}

$ curl http://localhost:3000/orders/f7e1e1eb/fulfilment
{"status":"suspended","stage":"awaiting-delivery","waitingFor":["shipment.delivered","shipment.returned"],"wakeAt":"2026-10-03T11:28:42.251Z","steps":{"charge-payment":"completed","reserve-stock":"completed","await-delivery":"pending"},"error":null}
`),cf()(),Aa(2456,`p`),bT(2457,`The order and its fulfilment were committed together, the worker picked the instance up, the card is charged, the kibble is reserved, and the instance is parked until the carrier reports the delivery or the return, or the 3-day deadline in `),Aa(2458,`code`),bT(2459,`wakeAt`),cf(),bT(2460,` passes.`),cf(),Aa(2461,`p`),bT(2462,`Now play the carrier and report the delivery:`),cf(),Aa(2463,`pre`)(2464,`code`,52),bT(2465,`
$ curl -X POST http://localhost:3000/webhooks/carrier -H "Content-Type: application/json" \\
    -d '{"type": "shipment.delivered", "reference": "f7e1e1eb", "trackingNumber": "TRK123456789", "occurredAt": "2026-09-30T14:05:00Z"}'
{"received":true}

$ curl http://localhost:3000/orders/f7e1e1eb/fulfilment
{"status":"suspended","stage":"delivered","waitingFor":[],"wakeAt":"2026-10-07T11:28:58.885Z","steps":{"charge-payment":"completed","reserve-stock":"completed","await-delivery":"completed","delivered":"completed","before-review-request":"pending"},"error":null}
`),cf()(),Aa(2466,`p`),bT(2467,`The instance passed its point of no return and is sleeping until the review request is due in 7 days. Support can no longer cancel the order, and a delivery for an order the store doesn't know is refused:`),cf(),Aa(2468,`pre`)(2469,`code`,52),bT(2470,`
$ curl -X POST http://localhost:3000/orders/f7e1e1eb/cancel -H "Content-Type: application/json" -d '{"reason": "Changed my mind."}'
{"message":"Order f7e1e1eb was delivered. Start a return instead.","error":"Conflict","statusCode":409}

$ curl -X POST http://localhost:3000/webhooks/carrier -H "Content-Type: application/json" \\
    -d '{"type": "shipment.delivered", "reference": "nope", "trackingNumber": "TRK1", "occurredAt": "2026-09-30T14:05:00Z"}'
{"message":"Order nope not found.","error":"Not Found","statusCode":404}
`),cf()(),Aa(2471,`p`),bT(2472,`Place a second order (it gets id `),Aa(2473,`code`),bT(2474,`58b424f5`),cf(),bT(2475,` here) and cancel it while it waits for the carrier:`),cf(),Aa(2476,`pre`)(2477,`code`,52),bT(2478,`
$ curl -X POST http://localhost:3000/orders/58b424f5/cancel -H "Content-Type: application/json" \\
    -d '{"reason": "Customer ordered the wrong size."}'
{"accepted":true}

$ curl http://localhost:3000/orders/58b424f5/fulfilment
{"status":"cancelled","stage":"awaiting-delivery","waitingFor":[],"wakeAt":null,"steps":{"charge-payment":"completed","reserve-stock":"completed","await-delivery":"cancelled","$compensate:reserve-stock":"completed","$compensate:charge-payment":"completed"},"error":"Customer ordered the wrong size."}
`),cf()(),Aa(2479,`p`),bT(2480,`The journal shows both compensations: the stock was released first, then the charge was refunded. The wait never finished, so it's marked `),Aa(2481,`code`),bT(2482,`cancelled`),cf(),bT(2483,`, and the stage stays where the workflow last set it.`),cf(),Aa(2484,`p`),bT(2485,`The instances are rows in your database, in the store's schema, next to the orders:`),cf(),Aa(2486,`pre`)(2487,`code`,52),bT(2488,`
$ psql "$DATABASE_URL" -c "SELECT o.id, o.status, w.status AS fulfilment, w.runs FROM orders o JOIN nest_workflows.instances w ON w.id = 'order-' || o.id ORDER BY w.created_at"
    id    |  status   | fulfilment | runs
----------+-----------+------------+------
 f7e1e1eb | delivered | suspended  |    2
 58b424f5 | cancelled | cancelled  |    2
(2 rows)
`),cf()(),Aa(2489,`p`),bT(2490,`Finally, restart the application and ask for the first order again. Its status hasn't changed, and the store found nothing to migrate. Start a second process on another port against the same database, and the two share the work: each instance runs on one of them at a time. To see the 3-day timeout without waiting 3 days, use a test clock, as the tests below do.`),cf(),Aa(2491,`h5`,97)(2492,`span`),bT(2493,`Test with a manual clock`),cf()(),Aa(2494,`p`),bT(2495,`Two things make workflow tests fast and deterministic:`),cf(),Aa(2496,`ul`)(2497,`li`),bT(2498,`Every timestamp the engine uses (deadlines, retry times, lease expiry and `),Aa(2499,`code`),bT(2500,`ctx.now()`),cf(),bT(2501,`) comes from the module's `),Aa(2502,`code`),bT(2503,`clock`),cf(),bT(2504,`. A `),Aa(2505,`code`),bT(2506,`ManualWorkflowClock`),cf(),bT(2507,` only moves when you call `),Aa(2508,`code`),bT(2509,`advance()`),cf(),bT(2510,`.`),cf(),Aa(2511,`li`),bT(2512,`With the worker disabled, nothing runs in the background. `),Aa(2513,`code`),bT(2514,`WorkflowWorker.drain()`),cf(),bT(2515,` runs every due instance until none is left that can start, and starts the occurrences of schedules that the clock has passed. The clock starts on 1 January 2026 at 00:00 UTC, so a test that moves it by days also starts the invoice batch's first occurrence, at 07:00 UTC.`),cf()(),Aa(2516,`p`),bT(2517,`Run the tests on PGlite, with your real migrations. Override the database `),Aa(2518,`code`),bT(2519,`DrizzleModule`),cf(),bT(2520,` registers (`),Aa(2521,`code`),bT(2522,`getDrizzleToken()`),cf(),bT(2523,` returns its token) with one on PGlite: the workflow store follows, because its factory injects it, and creates its schema there when the application starts. Override `),Aa(2524,`code`),bT(2525,`WORKFLOWS_MODULE_OPTIONS`),cf(),bT(2526,` with a `),Aa(2527,`code`),bT(2528,`ManualWorkflowClock`),cf(),bT(2529,` and a disabled worker. Share the database and the stand-ins for the external APIs between applications, because they outlive a process:`),cf(),Aa(2530,`app-copy-button`,56)(2531,`span`,57),bT(2532),LT(2533,`extension`),Wa(2534,`app-tabs`,null,32),cf(),Aa(2536,`pre`)(2537,`code`,58),bT(2538,`
import { fileURLToPath } from 'node:url';
import { PGlite } from '@electric-sql/pglite';
import { Test } from '@nestjs/testing';
import { ManualWorkflowClock, WORKFLOWS_MODULE_OPTIONS, WorkflowClient, WorkflowWorker } from '@nestjs/workflows';
import { drizzle } from 'drizzle-orm/pglite';
import { migrate } from 'drizzle-orm/pglite/migrator';
// ...AppModule, getDrizzleToken and the stand-in services

/**
 * PostgreSQL in-process (PGlite), with the app's migrations applied: the orders
 * table. The workflow store creates its own tables when the application starts.
 */
export async function createDatabase() {
  const client = new PGlite();
  const db = drizzle({ client });
  await migrate(db, { migrationsFolder: fileURLToPath(new URL('../drizzle', import.meta.url)) });
  return { db, close: () => client.close() };
}

/** Your database and the external APIs. They outlive a process, so every "process" in a test shares them. */
export async function createWorld() {
  const database = await createDatabase();
  return {
    db: database.db,
    paymentProvider: new PaymentProviderClient(),
    inventory: new InventoryService(),
    mail: new MailService(),
    invoices: new InvoicesService(database.db as unknown as Database),
    close: database.close,
  };
}

export type World = Awaited<ReturnType<typeof createWorld>>;

export async function bootApp(clock: ManualWorkflowClock, world: World) {
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
    .overrideProvider(getDrizzleToken())
    .useValue(world.db)
    .overrideProvider(WORKFLOWS_MODULE_OPTIONS)
    .useValue({ clock, worker: { enabled: false, shutdownTimeout: 50 } })
    .overrideProvider(PaymentProviderClient)
    .useValue(world.paymentProvider)
    .overrideProvider(InventoryService)
    .useValue(world.inventory)
    .overrideProvider(MailService)
    .useValue(world.mail)
    .overrideProvider(InvoicesService)
    .useValue(world.invoices)
    .compile();
  const app = moduleRef.createNestApplication({ logger: false });
  await app.listen(0, '127.0.0.1');
  return {
    app,
    url: await app.getUrl(),
    orders: app.get(OrdersService),
    workflows: app.get(WorkflowClient),
    worker: app.get(WorkflowWorker),
    close: () => app.close(),
  };
}

export type App = Awaited<ReturnType<typeof bootApp>>;
`),cf()()(),Aa(2539,`p`),bT(2540,`With a manual clock, the 3-day timeout is one `),Aa(2541,`code`),bT(2542,`advance()`),cf(),bT(2543,` call:`),cf(),Aa(2544,`app-copy-button`,56)(2545,`span`,57),bT(2546),LT(2547,`extension`),Wa(2548,`app-tabs`,null,33),cf(),Aa(2550,`pre`)(2551,`code`,58),bT(2552,`
describe('order fulfilment', () => {
  let clock: ManualWorkflowClock;
  let world: World;
  let node: App;

  beforeEach(async () => {
    clock = new ManualWorkflowClock();
    world = await createWorld();
    node = await bootApp(clock, world);
  });

  afterEach(async () => {
    await node.close();
    await world.close();
  });

  // ...

  it('refunds and releases the stock when the carrier never confirms delivery', async () => {
    const order = await node.orders.place({ userId: 'u_42', items: [{ productId: KIBBLE, quantity: 1, price: 2499 }] });
    await node.worker.drain(); // charge, reserve, then park for up to 3 days

    clock.advance('3d');
    await node.worker.drain(); // the wait times out and the compensations run

    const fulfilment = await node.workflows.getStatus(fulfilmentId(order.id), { journal: true });
    expect(fulfilment).toMatchObject({
      status: 'failed',
      error: { message: \`Order \${order.id} was not delivered within 3 days.\` },
    });
    // Compensations run in reverse: release the stock, then refund.
    expect(fulfilment!.journal.filter((entry) => entry.kind === 'compensation').map((entry) => entry.name)).toEqual([
      '$compensate:reserve-stock',
      '$compensate:charge-payment',
    ]);
    expect(world.paymentProvider.refunds).toHaveLength(1);
    expect(world.inventory.stock.get(KIBBLE)).toBe(25);
  });

  // ...

  it('saves the order and starts its fulfilment together, or neither', async () => {
    // The transaction fails after start(): say, the next statement hits a constraint.
    const original = node.workflows.start.bind(node.workflows);
    vi.spyOn(node.workflows, 'start').mockImplementationOnce(async (...args) => {
      await original(...args); // the instance is created in the transaction...
      throw new Error('insert or update on table "order_lines" violates foreign key constraint');
    });
    await expect(place()).rejects.toThrow('violates foreign key constraint');

    // ...and rolled back with it: no order, no fulfilment for the worker to charge.
    expect(await world.db.select().from(orders)).toEqual([]);
    expect(await node.workflows.list()).toEqual([]);
    expect(await node.worker.drain()).toBe(0);
    expect(world.paymentProvider.requests).toBe(0);
  });
});
`),cf()()(),Aa(2553,`h5`,98)(2554,`span`),bT(2555,`Test crash recovery`),cf()(),Aa(2556,`p`)(2557,`code`),bT(2558,`createWorld()`),cf(),bT(2559,` creates a fresh database per test. Crash safety needs two applications on the same database. Closing an application while a step hangs simulates a crash: the shutdown timeout expires, and the dead process's lease stays in the database until it expires. The second application takes over after that:`),cf(),Aa(2560,`app-copy-button`,56)(2561,`span`,57),bT(2562),LT(2563,`extension`),Wa(2564,`app-tabs`,null,34),cf(),Aa(2566,`pre`)(2567,`code`,58),bT(2568,`
it('survives a crash in the middle of an order', async () => {
  const first = await bootApp(clock, world);
  const order = await first.orders.place({ userId: 'u_42', items: [{ productId: KIBBLE, quantity: 1, price: 2499 }] });

  // The process dies while reserving stock, after the payment provider charged the card.
  const reserve = vi.spyOn(world.inventory, 'reserve').mockImplementationOnce(() => new Promise<never>(() => {}));
  void first.worker.drain();
  await vi.waitFor(() => expect(reserve).toHaveBeenCalled());
  await first.close();

  // Another process on the same database takes over once the dead one's lease expires.
  const second = await bootApp(clock, world);
  clock.advance('31s');
  await second.worker.drain();

  expect(await second.workflows.getStatus(fulfilmentId(order.id))).toMatchObject({
    status: 'suspended',
    waits: [
      { signal: 'shipment.delivered', key: order.id },
      { signal: 'shipment.returned', key: order.id },
    ],
  });
  expect(world.paymentProvider.charges).toHaveLength(1); // journaled: not charged again
  expect(reserve.mock.calls.map(([, key]) => key)).toEqual([
    \`order-\${order.id}:reserve-stock\`, // the attempt that died
    \`order-\${order.id}:reserve-stock\`, // the retry, with the same key
  ]);
  await second.close();
});
`),cf()()(),Aa(2569,`p`),bT(2570,`The same setup covers a crash in the middle of the compensations: the next process replays the journal to rebuild the list of compensations, skips the ones already done, and continues with the rest. PGlite is a single connection, so it can't show two workers racing for the same instance; the tutorial's tests of the store run the contract's races on a PostgreSQL server, along with three applications sharing 30 orders.`),cf(),Aa(2571,`p`),bT(2572,`To give a test its own store without overriding providers, call `),Aa(2573,`code`),bT(2574,`registerSource()`),cf(),bT(2575,` on `),Aa(2576,`code`),bT(2577,`moduleRef.get(WorkflowStorage)`),cf(),bT(2578,` before `),Aa(2579,`code`),bT(2580,`init()`),cf(),bT(2581,`, with `),Aa(2582,`code`),bT(2583,`replace: true`),cf(),bT(2584,`: without it, a second registration throws. The `),Aa(2585,`code`),bT(2586,`clock`),cf(),bT(2587,` option takes any `),Aa(2588,`code`),bT(2589,`WorkflowClock`),cf(),bT(2590,`, an object whose `),Aa(2591,`code`),bT(2592,`now()`),cf(),bT(2593,` returns epoch milliseconds, so a test can drive the engine from a clock it already has.`),cf(),Aa(2594,`h4`,99)(2595,`span`),bT(2596,`With CQRS`),cf()(),Aa(2597,`p`),bT(2598,`If your application follows the `),Aa(2599,`a`,100),bT(2600,`CQRS recipe`),cf(),bT(2601,`, command handlers publish events, and event handlers and sagas react to them. They react in memory: an event published just before the process stops never reaches them, and a saga that waits for a second event forgets the first one on a restart. The `),Aa(2602,`code`),bT(2603,`@nestjs/workflows/cqrs`),cf(),bT(2604,` entry point lets the events themselves start and signal workflows, durably, while your code keeps executing commands and publishing events. It works with `),Aa(2605,`code`),bT(2606,`@nestjs/cqrs`),cf(),bT(2607,` 11 and later, registered with `),Aa(2608,`code`),bT(2609,`CqrsModule.forRoot()`),cf(),bT(2610,` as in the recipe.`),cf(),Aa(2611,`h5`,101)(2612,`span`),bT(2613,`Map events to workflows`),cf()(),Aa(2614,`p`),bT(2615,`Here the fulfilment starts when the order is placed and wakes when the carrier reports the delivery, as before, but the workflow client calls are gone from the application code. Import `),Aa(2616,`code`),bT(2617,`WorkflowsCqrsModule`),cf(),bT(2618,` next to `),Aa(2619,`code`),bT(2620,`CqrsModule`),cf(),bT(2621,` and `),Aa(2622,`code`),bT(2623,`WorkflowsModule`),cf(),bT(2624,`:`),cf(),Aa(2625,`app-copy-button`,56)(2626,`span`,57),bT(2627),LT(2628,`extension`),Wa(2629,`app-tabs`,null,35),cf(),Aa(2631,`pre`)(2632,`code`,58),bT(2633,`
import { CqrsModule } from '@nestjs/cqrs';
import { WorkflowsModule, WorkflowStorage } from '@nestjs/workflows';
import { WorkflowsCqrsModule } from '@nestjs/workflows/cqrs';

@Module({
  imports: [
    // ...DrizzleModule, as before
    CqrsModule.forRoot(),
    WorkflowsModule.forRoot(),
    WorkflowsCqrsModule, // mapped events start and signal workflows
  ],
  controllers: [OrdersController, CarrierWebhookController],
  providers: [
    // ...the store and the services, as before
    PlaceOrderHandler,
    MarkDeliveredHandler,
    ChargePaymentHandler,
    OrderFulfilmentWorkflow,
  ],
})
export class AppModule {}
`),cf()()(),Aa(2634,`p`),bT(2635,`Then map the events on the workflow class. `),Aa(2636,`code`),bT(2637,`@StartOn()`),cf(),bT(2638,` starts the workflow when an event is published, and `),Aa(2639,`code`),bT(2640,`@SignalOn()`),cf(),bT(2641,` sends one of its signals:`),cf(),Aa(2642,`app-copy-button`,56)(2643,`span`,57),bT(2644),LT(2645,`extension`),Wa(2646,`app-tabs`,null,36),cf(),Aa(2648,`pre`)(2649,`code`,58),bT(2650,`
import { SignalOn, StartOn } from '@nestjs/workflows/cqrs';
import { OrderDeliveredEvent } from './order-delivered.event.js';
import { OrderPlacedEvent } from './order-placed.event.js';

@Workflow('order-fulfilment')
@StartOn(OrderPlacedEvent, {
  id: (event) => fulfilmentId(event.order.id),
  input: (event) => event.order,
  // Lower runs first: express orders before standard ones.
  priority: (event) => (event.order.shipping === 'express' ? 1 : 2),
})
@SignalOn(OrderDeliveredEvent, {
  signal: shipmentDelivered,
  key: (event) => event.delivery.reference,
  id: (event) => event.delivery.trackingNumber,
  payload: (event) => event.delivery,
})
export class OrderFulfilmentWorkflow implements WorkflowRunner<Order, FulfilmentResult> {
  // ...the constructor, which now injects CommandBus too, and run()
}
`),cf()()(),Aa(2651,`p`)(2652,`code`),bT(2653,`@StartOn()`),cf(),bT(2654,`'s `),Aa(2655,`code`),bT(2656,`id`),cf(),bT(2657,` is required. It derives the instance id from the business key, as `),Aa(2658,`code`),bT(2659,`start()`),cf(),bT(2660,` does, so an event published twice finds the instance the first one started. It also takes `),Aa(2661,`code`),bT(2662,`start()`),cf(),bT(2663,`'s `),Aa(2664,`code`),bT(2665,`priority`),cf(),bT(2666,`, `),Aa(2667,`code`),bT(2668,`concurrencyKey`),cf(),bT(2669,` and `),Aa(2670,`code`),bT(2671,`rateLimitKey`),cf(),bT(2672,`, each as a value or a function of the event: here, express orders go first, as before. `),Aa(2673,`code`),bT(2674,`@SignalOn()`),cf(),bT(2675,`'s `),Aa(2676,`code`),bT(2677,`id`),cf(),bT(2678,` is optional, and becomes the signal's `),Aa(2679,`code`),bT(2680,`id`),cf(),bT(2681,`: a delivery event published again, say for the carrier's retried webhook, stores no second signal. `),Aa(2682,`code`),bT(2683,`input`),cf(),bT(2684,` defaults to the event itself, and a signal's `),Aa(2685,`code`),bT(2686,`payload`),cf(),bT(2687,` too. TypeScript checks the input against `),Aa(2688,`code`),bT(2689,`run()`),cf(),bT(2690,` and the payload against the signal's type. The events are plain classes, such as `),Aa(2691,`code`),bT(2692,`OrderPlacedEvent`),cf(),bT(2693,` with a `),Aa(2694,`code`),bT(2695,`readonly order: Order`),cf(),bT(2696,` constructor parameter.`),cf(),Aa(2697,`p`),bT(2698,`The command handler saves the order and publishes the event in one transaction:`),cf(),Aa(2699,`app-copy-button`,56)(2700,`span`,57),bT(2701),LT(2702,`extension`),Wa(2703,`app-tabs`,null,37),cf(),Aa(2705,`pre`)(2706,`code`,58),bT(2707,`
import { randomUUID } from 'node:crypto';
import { CommandHandler, EventBus, type ICommandHandler } from '@nestjs/cqrs';
import { InjectDrizzle } from '@nestjs/drizzle';
import type { Database } from '../database/drizzle.js';
import { orders } from '../database/schema.js';
import type { Order } from './order.js';
import { OrderPlacedEvent } from './order-placed.event.js';
import { PlaceOrderCommand } from './place-order.command.js';

@CommandHandler(PlaceOrderCommand)
export class PlaceOrderHandler implements ICommandHandler<PlaceOrderCommand> {
  constructor(
    @InjectDrizzle() private readonly db: Database,
    private readonly eventBus: EventBus,
  ) {}

  async execute({ dto }: PlaceOrderCommand): Promise<Order> {
    const total = dto.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order: Order = {
      id: randomUUID().slice(0, 8),
      userId: dto.userId,
      items: dto.items,
      shipping: dto.shipping ?? 'standard',
      total,
      status: 'placed',
    };

    return this.db.transaction(async (tx) => {
      await tx.insert(orders).values(order);
      // The transaction rides along as the dispatcher context: the fulfilment
      // this event starts commits with the order, or rolls back with it.
      await this.eventBus.publish(new OrderPlacedEvent(order), { transaction: tx });
      return order;
    });
  }
}
`),cf()()(),Aa(2708,`p`),bT(2709,`The second argument of `),Aa(2710,`code`),bT(2711,`publish()`),cf(),bT(2712,` and `),Aa(2713,`code`),bT(2714,`publishAll()`),cf(),bT(2715,` is CQRS's dispatcher context. `),Aa(2716,`code`),bT(2717,`WorkflowsCqrsModule`),cf(),bT(2718,` reads its `),Aa(2719,`code`),bT(2720,`transaction`),cf(),bT(2721,` property and passes it to `),Aa(2722,`code`),bT(2723,`start()`),cf(),bT(2724,` and `),Aa(2725,`code`),bT(2726,`signal()`),cf(),bT(2727,`, so the instance is created through your transaction, exactly as with the `),Aa(2728,`code`),bT(2729,`transaction`),cf(),bT(2730,` option. With TypeORM, the dispatcher context carries the `),Aa(2731,`code`),bT(2732,`EntityManager`),cf(),bT(2733,` that `),Aa(2734,`code`),bT(2735,`dataSource.transaction()`),cf(),bT(2736,` hands its callback, under the same `),Aa(2737,`code`),bT(2738,`transaction`),cf(),bT(2739,` property. `),Aa(2740,`code`),bT(2741,`publish()`),cf(),bT(2742,` resolves once the workflows are started and signalled, and only then does the event reach your event handlers and sagas. Events that no workflow maps go straight through, unchanged. The controllers execute the commands: `),Aa(2743,`code`),bT(2744,`POST /orders`),cf(),bT(2745,` executes `),Aa(2746,`code`),bT(2747,`PlaceOrderCommand`),cf(),bT(2748,`, and the carrier's webhook executes `),Aa(2749,`code`),bT(2750,`MarkDeliveredCommand`),cf(),bT(2751,`, whose `),Aa(2752,`code`),bT(2753,`MarkDeliveredHandler`),cf(),bT(2754,` does the same for the delivery: it updates the order's status and publishes `),Aa(2755,`code`),bT(2756,`OrderDeliveredEvent`),cf(),bT(2757,` in one transaction, so the status and the signal commit together.`),cf(),Aa(2758,`p`),bT(2759,`The module wraps whatever publisher the event bus has, so a publisher you set with `),Aa(2760,`code`),bT(2761,`CqrsModule.forRoot()`),cf(),bT(2762,`'s `),Aa(2763,`code`),bT(2764,`eventPublisher`),cf(),bT(2765,` option (a message broker, for example) still receives every event, after the workflows. Replacing `),Aa(2766,`code`),bT(2767,`EventBus.publisher`),cf(),bT(2768,` after startup would bypass the workflows, so startup fails if something does. It also fails when a workflow maps events but `),Aa(2769,`code`),bT(2770,`WorkflowsCqrsModule`),cf(),bT(2771,` isn't imported, when one class maps the same event twice, or when `),Aa(2772,`code`),bT(2773,`@StartOn()`),cf(),bT(2774,` gives a key to a workflow without a limit per key. When two versions of a workflow are registered, the highest version's `),Aa(2775,`code`),bT(2776,`@StartOn()`),cf(),bT(2777,` decides what starts, and a signal reaches the waiting instances of every version, sent once, so their `),Aa(2778,`code`),bT(2779,`@SignalOn()`),cf(),bT(2780,` declarations must agree on its payload and `),Aa(2781,`code`),bT(2782,`id`),cf(),bT(2783,`: `),Aa(2784,`code`),bT(2785,`publish()`),cf(),bT(2786,` rejects when they don't.`),cf(),Aa(2787,`p`),bT(2788,`The mappings live on the workflow classes, so every process that publishes mapped events registers them, including one that runs no workflows, such as an API that only places orders. Register the classes and the store there as usual, and pass `),Aa(2789,`code`),bT(2790,`worker: false`),cf(),bT(2791,` to `),Aa(2792,`code`),bT(2793,`WorkflowsModule.forRoot()`),cf(),bT(2794,`: the process starts and signals the workflows, and the worker processes execute them. A process that imports `),Aa(2795,`code`),bT(2796,`WorkflowsCqrsModule`),cf(),bT(2797,` but registers no workflow that maps an event starts and signals nothing, and logs a warning at startup saying so.`),cf(),Aa(2798,`h5`,102)(2799,`span`),bT(2800,`Execute commands from steps`),cf()(),Aa(2801,`p`),bT(2802,`A step can execute commands. Pass the step's idempotency key along with the command, and have the handler hand it to the system it calls:`),cf(),Aa(2803,`app-copy-button`,56)(2804,`span`,57),bT(2805),LT(2806,`extension`),Wa(2807,`app-tabs`,null,38),cf(),Aa(2809,`pre`)(2810,`code`,58),bT(2811,`
const charge = await ctx.step(
  'charge-payment',
  ({ idempotencyKey }) => this.commandBus.execute(new ChargePaymentCommand(order, idempotencyKey)),
  {
    retry: { attempts: 5, backoff: { delay: '2s' } },
    compensate: (charge, { idempotencyKey }) => this.paymentsService.refund(charge.chargeId, idempotencyKey),
  },
);
`),cf()()(),Aa(2812,`p`)(2813,`code`),bT(2814,`ChargePaymentHandler`),cf(),bT(2815,` calls `),Aa(2816,`code`),bT(2817,`PaymentsService.charge()`),cf(),bT(2818,` with the key, so a retried step never charges twice, and the command's result is journaled like any step's. A step can publish events and send signals too. It runs at least once, so an event published from a step may be published again. A mapped start finds its instance, and so does a `),Aa(2819,`code`),bT(2820,`start()`),cf(),bT(2821,` without an `),Aa(2822,`code`),bT(2823,`id`),cf(),bT(2824,` in a step: it gets an id derived from the step's `),Aa(2825,`code`),bT(2826,`idempotencyKey`),cf(),bT(2827,`, the workflow's name and its place among the step's starts of that workflow, and a repeat returns the instance as first started, input included. A signal sent from inside a step, directly or through a mapped event, is stored once: without an `),Aa(2828,`code`),bT(2829,`id`),cf(),bT(2830,` of its own, it gets one derived from the step's `),Aa(2831,`code`),bT(2832,`idempotencyKey`),cf(),bT(2833,` and its place among the step's signals with the same name and key. Send those in a fixed order. A step that sends several with one name and key concurrently should give each its own `),Aa(2834,`code`),bT(2835,`id`),cf(),bT(2836,`.`),cf(),Aa(2837,`h5`,103)(2838,`span`),bT(2839,`What each way of publishing guarantees`),cf()(),Aa(2840,`p`),bT(2841,`The guarantee depends on how, and when, the event is published:`),cf(),Aa(2842,`table`)(2843,`thead`)(2844,`tr`)(2845,`th`),bT(2846,`How the event is published`),cf(),Aa(2847,`th`),bT(2848,`The workflow's start or signal`),cf(),Aa(2849,`th`),bT(2850,`If the process dies or a write fails`),cf()()(),Aa(2851,`tbody`)(2852,`tr`)(2853,`td`),bT(2854,`In your transaction, with the transaction in the dispatcher context`),cf(),Aa(2855,`td`),bT(2856,`Commits with your writes, or not at all`),cf(),Aa(2857,`td`),bT(2858,`Nothing is half done. A failed start or signal rejects `),Aa(2859,`code`),bT(2860,`publish()`),cf(),bT(2861,`, and your transaction rolls back`),cf()(),Aa(2862,`tr`)(2863,`td`),bT(2864,`An aggregate's events, from `),Aa(2865,`code`),bT(2866,`commit()`),cf(),bT(2867,` with the transaction in the dispatcher context (`),Aa(2868,`code`),bT(2869,`@nestjs/cqrs`),cf(),bT(2870,` 12.1 or later), or with `),Aa(2871,`code`),bT(2872,`publishAll()`),cf(),bT(2873,` in your transaction, as shown below`),cf(),Aa(2874,`td`),bT(2875,`Commits with your writes, or not at all`),cf(),Aa(2876,`td`),bT(2877,`As above: a failed start or signal rejects `),Aa(2878,`code`),bT(2879,`commit()`),cf(),bT(2880,` or `),Aa(2881,`code`),bT(2882,`publishAll()`),cf(),bT(2883,`, and your transaction rolls back`),cf()(),Aa(2884,`tr`)(2885,`td`),bT(2886,`After your transaction commits`),cf(),Aa(2887,`td`),bT(2888,`Written before `),Aa(2889,`code`),bT(2890,`publish()`),cf(),bT(2891,` resolves`),cf(),Aa(2892,`td`),bT(2893,`A crash between your commit and the publish loses it. Publish again from a reconciliation job: the start's `),Aa(2894,`code`),bT(2895,`id`),cf(),bT(2896,` makes that safe, and so does a signal's, if `),Aa(2897,`code`),bT(2898,`@SignalOn()`),cf(),bT(2899,` sets one`),cf()(),Aa(2900,`tr`)(2901,`td`),bT(2902,`From `),Aa(2903,`code`),bT(2904,`commit()`),cf(),bT(2905,` without a transaction, of an aggregate merged with `),Aa(2906,`code`),bT(2907,`EventPublisher`),cf()(),Aa(2908,`td`),bT(2909,`Written outside your transaction, in the background unless you await `),Aa(2910,`code`),bT(2911,`commit()`),cf(),bT(2912,` (12.1 or later)`),cf(),Aa(2913,`td`),bT(2914,`Lost on a crash while nothing waits for it, and left behind when your transaction rolls back. Failures go to the `),Aa(2915,`code`),bT(2916,`UnhandledExceptionBus`),cf(),bT(2917,` and the log, and the module logs a warning once per event class`),cf()(),Aa(2918,`tr`)(2919,`td`),bT(2920,`From `),Aa(2921,`code`),bT(2922,`commit()`),cf(),bT(2923,` without a transaction, of a `),Aa(2924,`code`),bT(2925,`@Publishable()`),cf(),bT(2926,` aggregate`),cf(),Aa(2927,`td`),bT(2928,`Written outside your transaction, in the background unless you await `),Aa(2929,`code`),bT(2930,`commit()`),cf(),bT(2931,` (12.1 or later)`),cf(),Aa(2932,`td`),bT(2933,`Lost on a crash while nothing waits for it, and left behind when your transaction rolls back. Unawaited, a failure is an unhandled promise rejection, which stops Node.js by default. Nothing tells it apart from a plain `),Aa(2934,`code`),bT(2935,`publish()`),cf(),bT(2936,`, so there's no warning`),cf()(),Aa(2937,`tr`)(2938,`td`),bT(2939,`From a workflow step`),cf(),Aa(2940,`td`),bT(2941,`Once, however often the step runs`),cf(),Aa(2942,`td`),bT(2943,`A retried step starts nothing new, and stores no second signal`),cf()()()(),Aa(2944,`p`),bT(2945,`An aggregate merged with `),Aa(2946,`code`),bT(2947,`EventPublisher.mergeObjectContext()`),cf(),bT(2948,` or `),Aa(2949,`code`),bT(2950,`mergeClassContext()`),cf(),bT(2951,`, or decorated with `),Aa(2952,`code`),bT(2953,`@Publishable()`),cf(),bT(2954,`, publishes its events from `),Aa(2955,`code`),bT(2956,`commit()`),cf(),bT(2957,`. With `),Aa(2958,`code`),bT(2959,`@nestjs/cqrs`),cf(),bT(2960,` 12.1 or later, `),Aa(2961,`code`),bT(2962,`commit()`),cf(),bT(2963,` takes a dispatcher context, as `),Aa(2964,`code`),bT(2965,`publish()`),cf(),bT(2966,` does, and returns what the event bus returns. Pass it your transaction and await it in the command handler's transaction: the aggregate's events then start and signal workflows in that transaction, and `),Aa(2967,`code`),bT(2968,`commit()`),cf(),bT(2969,` rejects when a start or signal fails, which rolls the transaction back:`),cf(),Aa(2970,`app-copy-button`)(2971,`pre`)(2972,`code`,58),bT(2973,`
await order.commit({ transaction: tx });
`),cf()()(),Aa(2974,`p`)(2975,`code`),bT(2976,`commit()`),cf(),bT(2977,` clears the aggregate's events when it hands them over, before the workflows are written, so after a failure, run the command again with a freshly loaded aggregate.`),cf(),Aa(2978,`p`),bT(2979,`Without a dispatcher context, `),Aa(2980,`code`),bT(2981,`commit()`),cf(),bT(2982,` publishes outside your transaction: the workflows still start, but a rollback leaves them behind, and a crash before they're written loses them. Don't let it publish events that start or signal workflows. With `),Aa(2983,`code`),bT(2984,`@nestjs/cqrs`),cf(),bT(2985,` 12.0 or earlier, `),Aa(2986,`code`),bT(2987,`commit()`),cf(),bT(2988,` takes no context and returns nothing to wait for, so publish the aggregate's events yourself, in the command handler's transaction, and then clear them:`),cf(),Aa(2989,`app-copy-button`)(2990,`pre`)(2991,`code`,58),bT(2992,`
await this.eventBus.publishAll(order.getUncommittedEvents(), { transaction: tx });
order.uncommit();
`),cf()()(),Aa(2993,`p`),bT(2994,`The module tells you when a mapped event arrives from a merged aggregate's `),Aa(2995,`code`),bT(2996,`commit()`),cf(),bT(2997,` without a transaction: the first time, it logs a warning naming the event class. A `),Aa(2998,`code`),bT(2999,`@Publishable()`),cf(),bT(3e3,` aggregate's events arrive without any dispatcher context, like an ordinary `),Aa(3001,`code`),bT(3002,`publish()`),cf(),bT(3003,` call, so they get no warning.`),cf(),Aa(3004,`p`),bT(3005,`Your event handlers and sagas still receive every event, in memory, after the workflows. Inside a transaction they run before it commits, as they always did, so they can react to an event whose transaction then rolls back. A saga that turns one event into one command can stay a saga. A saga that remembers events, such as one that waits for the payment after the order and gives up after an hour, is a workflow in disguise: start the workflow from the first event, map the others to signals, and let `),Aa(3006,`code`),bT(3007,`waitForSignal()`),cf(),bT(3008,` with a `),Aa(3009,`code`),bT(3010,`timeout`),cf(),bT(3011,` do the waiting, durably.`),cf(),Aa(3012,`h4`,104)(3013,`span`),bT(3014,`Prepare for production`),cf()(),Aa(3015,`h5`,105)(3016,`span`),bT(3017,`Keep journals short`),cf()(),Aa(3018,`p`),bT(3019,`Every execution loads the instance's whole journal and replays `),Aa(3020,`code`),bT(3021,`run()`),cf(),bT(3022,` from the top. A process with a fixed number of steps keeps its journal small, but a loop with a step or a sleep per round adds entries for as long as it runs, and each execution gets slower. The module warns when a journal reaches 1,000 entries or 1 MB: once per instance, when it crosses the line, in the log and as a `),Aa(3023,`code`),bT(3024,`journal-large`),cf(),bT(3025,` event. Once it holds 10,000 entries or 10 MB, the instance fails before it records another one: its compensations run, which may still record theirs, and it ends as `),Aa(3026,`code`),bT(3027,`failed`),cf(),bT(3028,` with a `),Aa(3029,`code`),bT(3030,`WorkflowJournalLimitError`),cf(),bT(3031,`. The module's `),Aa(3032,`code`),bT(3033,`journal`),cf(),bT(3034,` option moves both lines. Size them to your longest regular workflow with room to spare, and set a limit to `),Aa(3035,`code`),bT(3036,`Infinity`),cf(),bT(3037,` to turn it off:`),cf(),Aa(3038,`app-copy-button`)(3039,`pre`)(3040,`code`,58),bT(3041,`
WorkflowsModule.forRoot({
  journal: { warnEntries: 500, maxEntries: 5_000 },
});
`),cf()()(),Aa(3042,`p`),bT(3043,`A process that goes on for good, such as a monthly litter subscription, continues in a new instance instead. After a year of deliveries, its last step starts the next year's instance, and the current one completes:`),cf(),Aa(3044,`app-copy-button`)(3045,`pre`)(3046,`code`,58),bT(3047,`
async run(ctx: WorkflowContext, subscription: Subscription) {
  for (let month = 1; month <= 12; month++) {
    await ctx.step(\`ship-\${month}\`, ({ idempotencyKey }) => this.subscriptionsService.ship(subscription, idempotencyKey));
    await ctx.sleep(\`wait-\${month}\`, '30d');
  }

  const next = { ...subscription, year: subscription.year + 1 };
  return ctx.step('continue', async () => {
    const { id } = await this.workflowClient.start(LitterSubscriptionWorkflow, next, {
      id: \`subscription-\${subscription.id}-\${next.year}\`,
    });
    return id;
  });
}
`),cf()()(),Aa(3048,`p`),bT(3049,`The step starts the next instance once: a retried step finds the instance it started. The new instance has a fresh journal and its own id, so the finished year stays readable until retention purges it. Continuing under the same id would need every store to replace a journal in place, under the worker's lease; a new id needs nothing new from the store. When each round stands on its own, a schedule is simpler still: it starts an instance per occurrence, each with a journal of its own, as `),Aa(3050,`a`,86),bT(3051,`Run workflows on a schedule`),cf(),bT(3052,` shows.`),cf(),Aa(3053,`h5`,106)(3054,`span`),bT(3055,`Encrypt what workflows store`),cf()(),Aa(3056,`p`),bT(3057,`The store keeps what your workflows handle: orders, charges, deliveries. To keep that unreadable to whoever reads the database or its backups, give the module a `),Aa(3058,`strong`),bT(3059,`payload codec`),cf(),bT(3060,`. `),Aa(3061,`code`),bT(3062,`AesGcmPayloadCodec`),cf(),bT(3063,` encrypts with AES-256-GCM, under keys from your secret manager. Create it in the module's factory, which runs at startup:`),cf(),Aa(3064,`app-copy-button`,56)(3065,`span`,57),bT(3066),LT(3067,`extension`),Wa(3068,`app-tabs`,null,39),cf(),Aa(3070,`pre`)(3071,`code`,58),bT(3072,`
import { AesGcmPayloadCodec, WorkflowsModule, WorkflowStorage } from '@nestjs/workflows';

WorkflowsModule.forRootAsync({
  useFactory: () => ({
    worker: {
      // ...as before
    },
    // Encrypts what the store keeps. The key comes from your secret manager, through the environment.
    codec: new AesGcmPayloadCodec({
      keys: { '2026-09': process.env.WORKFLOWS_KEY_2026_09! },
      current: '2026-09',
    }),
  }),
}),
`),cf()()(),Aa(3073,`p`),bT(3074,`A key is 32 random bytes in base64 (`),Aa(3075,`code`),bT(3076,`openssl rand -base64 32`),cf(),bT(3077,`), under an id of your choice. A key that is missing (an unset environment variable), isn't base64 or isn't 32 bytes fails the startup, with an error that names it.`),cf(),Aa(3078,`ul`)(3079,`li`)(3080,`strong`),bT(3081,`What it encrypts`),cf(),bT(3082,`: everything that holds your data. Inputs and outputs, step results and checkpoints, signal payloads, custom statuses, cancel reasons, schedules' inputs, and the messages and stacks of errors. Each payload is encrypted under a key derived for it, with where it's stored as authenticated data, so a payload that was changed, or moved to another instance or field, fails to decrypt instead of being read. Payloads of 1 KiB or more are compressed first. If payloads mix secrets with data an attacker chooses, and attackers can see stored sizes, turn that off with `),Aa(3083,`code`),bT(3084,`compress: false`),cf(),bT(3085,`.`),cf(),Aa(3086,`li`)(3087,`strong`),bT(3088,`What stays readable`),cf(),bT(3089,`, because the store matches, filters, orders or counts on it: ids, workflow names and versions, statuses, signal names and keys, concurrency and rate-limit keys, priorities, links to parents and schedules, journal entry names, and all times. Errors keep their names, such as `),Aa(3090,`code`),bT(3091,`StepFailedError`),cf(),bT(3092,`. So pick ids and keys that say nothing sensitive: `),Aa(3093,`code`),bT(3094,`order-71e1973d`),cf(),bT(3095,`, not an email address. Here the concurrency key is the customer's id, readable in `),Aa(3096,`code`),bT(3097,`concurrency_key`),cf(),bT(3098,`.`),cf(),Aa(3099,`li`)(3100,`strong`),bT(3101,`Stored form`),cf(),bT(3102,`: `),Aa(3103,`code`),bT(3104,`$wf1:aes-256-gcm:2026-09.`),cf(),bT(3105,` followed by the ciphertext, a string in the same JSON columns, so the store needs no change.`),cf()(),Aa(3106,`p`)(3107,`strong`),bT(3108,`Rotating keys.`),cf(),bT(3109,` Add a key, and make it `),Aa(3110,`code`),bT(3111,`current`),cf(),bT(3112,`. A payload decrypts with the key that encrypted it, and everything written from then on uses the current one. Nothing is re-encrypted in bulk: payloads are rewritten as instances progress, and old ones go with purges. So keep a key listed while anything it encrypted may still be read: unfinished instances, signals not purged yet, and schedules saved under it. A declared schedule's input is saved again under the current key at startup and every minute, but an upserted one's only by its next `),Aa(3113,`code`),bT(3114,`upsert()`),cf(),bT(3115,`: `),Aa(3116,`code`),bT(3117,`pause()`),cf(),bT(3118,` and `),Aa(3119,`code`),bT(3120,`resume()`),cf(),bT(3121,` keep it as stored.`),cf(),Aa(3122,`app-copy-button`)(3123,`pre`)(3124,`code`,58),bT(3125,`
codec: new AesGcmPayloadCodec({
  keys: {
    '2027-03': process.env.WORKFLOWS_KEY_2027_03!,
    '2026-09': process.env.WORKFLOWS_KEY_2026_09!,
  },
  current: '2027-03',
}),
`),cf()()(),Aa(3126,`p`),bT(3127,`An instance whose payloads need a key that isn't listed can't be read: `),Aa(3128,`code`),bT(3129,`getStatus()`),cf(),bT(3130,` throws an error that names the key, `),Aa(3131,`code`),bT(3132,`list()`),cf(),bT(3133,` shows the instance without its payloads, and workers leave it alone until the key is back, then run it.`),cf(),Aa(3134,`p`),bT(3135,`Adding a codec breaks no running instance: payloads stored before it are read as they are, and new writes are encrypted. That is also where the protection ends. Someone who can write to the database can replace an encrypted payload with a plain one, and have it read: the codec protects what it encoded against reading and tampering, not the database against its writers.`),cf(),Aa(3136,`p`),bT(3137,`A codec of your own implements `),Aa(3138,`code`),bT(3139,`WorkflowPayloadCodec`),cf(),bT(3140,`: an `),Aa(3141,`code`),bT(3142,`id`),cf(),bT(3143,`, stored with each payload, and `),Aa(3144,`code`),bT(3145,`encode()`),cf(),bT(3146,` and `),Aa(3147,`code`),bT(3148,`decode()`),cf(),bT(3149,`, which receive the value and where it's stored. Pass its class to `),Aa(3150,`code`),bT(3151,`codec`),cf(),bT(3152,` to have Nest create it, with its dependencies from global modules, such as a KMS client. To replace a codec, list the new one first and the old one after it: the first one encodes, and each payload is decoded by the codec whose id it carries.`),cf(),Aa(3153,`h5`,107)(3154,`span`),bT(3155,`Production checklist`),cf()(),Aa(3156,`ul`)(3157,`li`),bT(3158,`Pass the `),Aa(3159,`code`),bT(3160,`idempotencyKey`),cf(),bT(3161,` to every side effect, including compensations. Steps run at least once.`),cf(),Aa(3162,`li`),bT(3163,`Give signals an `),Aa(3164,`code`),bT(3165,`id`),cf(),bT(3166,` when their sender can run twice, such as a webhook the sender retries or a message consumer. Signals sent from a step get one automatically.`),cf(),Aa(3167,`li`),bT(3168,`Call `),Aa(3169,`code`),bT(3170,`enableShutdownHooks()`),cf(),bT(3171,`, and keep `),Aa(3172,`code`),bT(3173,`shutdownTimeout`),cf(),bT(3174,` below your platform's grace period (30 seconds by default on Kubernetes).`),cf(),Aa(3175,`li`),bT(3176,`Choose `),Aa(3177,`code`),bT(3178,`leaseDuration`),cf(),bT(3179,` deliberately. It's how long a crashed process's instances wait before another process takes over, and a process whose event loop stalls for longer loses its instances. Lease expiry compares timestamps written by different hosts, so keep their clocks in sync (NTP) and `),Aa(3180,`code`),bT(3181,`leaseDuration`),cf(),bT(3182,` well above any skew between them.`),cf(),Aa(3183,`li`),bT(3184,`Register a store on your database: `),Aa(3185,`code`),bT(3186,`PostgresWorkflowStore`),cf(),bT(3187,`, `),Aa(3188,`code`),bT(3189,`MySqlWorkflowStore`),cf(),bT(3190,`, or one of your own. In memory, or in a file on the container's disk, state dies with the instance: the in-memory default loses every running order on restart, and startup refuses it in production. Run the contract suite against a store of your own in CI, on its database, with `),Aa(3191,`code`),bT(3192,`concurrent: true`),cf(),bT(3193,`.`),cf(),Aa(3194,`li`),bT(3195,`Apply the store's migrations before a new version starts, with `),Aa(3196,`code`),bT(3197,`npx @nestjs/workflows migrate`),cf(),bT(3198,` or your migration tool, and check them in CI with `),Aa(3199,`code`),bT(3200,`npx @nestjs/workflows status`),cf(),bT(3201,`. With `),Aa(3202,`code`),bT(3203,`NODE_ENV=production`),cf(),bT(3204,`, the store doesn't migrate at startup: a schema that's behind fails it instead.`),cf(),Aa(3205,`li`),bT(3206,`Run as many workers as you like, on as many hosts. Size the connection pool for them: each running instance renews its lease and writes its journal through the pool, and each poll holds a connection for its claim.`),cf(),Aa(3207,`li`),bT(3208,`Start workflows in the transaction that writes their business rows (`),Aa(3209,`code`),bT(3210,`transaction: tx`),cf(),bT(3211,`, or the `),Aa(3212,`code`),bT(3213,`EntityManager`),cf(),bT(3214,` with TypeORM), so a crash between the two can't leave an order that nothing fulfils. Pass the transaction, never the root database. With CQRS, publish the events inside that transaction, with the transaction in the dispatcher context.`),cf(),Aa(3215,`li`),bT(3216,`Keep transactions that send signals short: signals and the suspensions that register waits queue behind them. On PostgreSQL, keep them READ COMMITTED, and the database's default isolation too: the store refuses a stricter one. On MySQL, keep them REPEATABLE READ or READ COMMITTED, and run a transaction again when it fails with a deadlock (error 1213).`),cf(),Aa(3217,`li`),bT(3218,`Verify webhook signatures, and return `),Aa(3219,`code`),bT(3220,`2xx`),cf(),bT(3221,` only after the transaction with the signal has committed.`),cf(),Aa(3222,`li`),bT(3223,`Alert on instances that need a person. `),Aa(3224,`code`),bT(3225,`compensation_failed`),cf(),bT(3226,` means an undo gave up halfway, and a `),Aa(3227,`code`),bT(3228,`failed`),cf(),bT(3229,` instance with `),Aa(3230,`code`),bT(3231,`WorkflowNonDeterminismError`),cf(),bT(3232,` means a deploy broke replay. `),Aa(3233,`code`),bT(3234,`WorkflowClient.list()`),cf(),bT(3235,` finds them, and `),Aa(3236,`a`,71),bT(3237,`What each status means`),cf(),bT(3238,` says what to do with each: `),Aa(3239,`code`),bT(3240,`retry()`),cf(),bT(3241,` once the cause is fixed, or `),Aa(3242,`code`),bT(3243,`delete()`),cf(),bT(3244,`. For logs and metrics, subscribe to `),Aa(3245,`code`),bT(3246,`WorkflowEvents.events$`),cf(),bT(3247,`, or to the `),Aa(3248,`code`),bT(3249,`nestjs:workflows:*`),cf(),bT(3250,` diagnostics channels that tracing tools read without Nest; `),Aa(3251,`a`,108),bT(3252,`Events`),cf(),bT(3253,` maps them onto a trace.`),cf(),Aa(3254,`li`),bT(3255,`Mark your point of no return with `),Aa(3256,`code`),bT(3257,`ctx.commit()`),cf(),bT(3258,`. Before it, every failure and cancel undoes the completed steps.`),cf(),Aa(3259,`li`),bT(3260,`Purge finished instances every night with `),Aa(3261,`code`),bT(3262,`purge()`),cf(),bT(3263,`, on one instance of the application, as `),Aa(3264,`a`,109),bT(3265,`Purge finished instances`),cf(),bT(3266,` shows. Keep its `),Aa(3267,`code`),bT(3268,`olderThan`),cf(),bT(3269,` longer than any sender's redelivery window: a signal's `),Aa(3270,`code`),bT(3271,`id`),cf(),bT(3272,` deduplicates only as long as the signal is stored.`),cf(),Aa(3273,`li`),bT(3274,`Keep journals short: bound loops, and continue one that never ends in a new instance (`),Aa(3275,`a`,110),bT(3276,`Keep journals short`),cf(),bT(3277,`). Give a process that must give up at some point a run timeout (`),Aa(3278,`a`,111),bT(3279,`Time out the whole workflow`),cf(),bT(3280,`).`),cf(),Aa(3281,`li`),bT(3282,`Size concurrency and rate limits to what the steps call, and deploy a change to them to every process: each applies the limits of the code it runs. Once some instances have a priority, give the rest one too, since instances without one go first.`),cf(),Aa(3283,`li`),bT(3284,`Deploy a declared schedule to every process that registers its workflow: only workers whose code declares it start its occurrences. A schedule that a deploy drops, or whose workflow it removes, keeps starting on the processes of the old code, and goes about five minutes after the last of them stopped. Set `),Aa(3285,`code`),bT(3286,`missed`),cf(),bT(3287,` for work that mustn't be skipped when no worker is up at its time. If processes of other code share the database, don't leave a schedule without a worker whose code declares it for five minutes: they delete it, and it starts over once one starts.`),cf(),Aa(3288,`li`),bT(3289,`Encrypt what the store keeps with a codec, with keys from your secret manager (`),Aa(3290,`a`,112),bT(3291,`Encrypt what workflows store`),cf(),bT(3292,`). Keep an old key listed while anything it encrypted may be read, and pick ids and keys that say nothing sensitive: they stay readable.`),cf()(),Aa(3293,`h4`,113)(3294,`span`),bT(3295,`Reference`),cf()(),Aa(3296,`h5`,114)(3297,`span`),bT(3298,`Module options`),cf()(),Aa(3299,`p`)(3300,`code`),bT(3301,`WorkflowsModule.forRoot()`),cf(),bT(3302,` takes these options; `),Aa(3303,`code`),bT(3304,`forRootAsync()`),cf(),bT(3305,` takes them from `),Aa(3306,`code`),bT(3307,`useFactory`),cf(),bT(3308,`, `),Aa(3309,`code`),bT(3310,`useClass`),cf(),bT(3311,` or `),Aa(3312,`code`),bT(3313,`useExisting`),cf(),bT(3314,` (a class implementing `),Aa(3315,`code`),bT(3316,`WorkflowsOptionsFactory`),cf(),bT(3317,`). The options token is `),Aa(3318,`code`),bT(3319,`WORKFLOWS_MODULE_OPTIONS`),cf(),bT(3320,`. The store isn't an option: register it with `),Aa(3321,`code`),bT(3322,`WorkflowStorage`),cf(),bT(3323,`, as in `),Aa(3324,`a`,54),bT(3325,`Keep workflows in your database`),cf(),bT(3326,`.`),cf(),Aa(3327,`table`)(3328,`thead`)(3329,`tr`)(3330,`th`),bT(3331,`Option`),cf(),Aa(3332,`th`),bT(3333,`Default`),cf(),Aa(3334,`th`),bT(3335,`Meaning`),cf()()(),Aa(3336,`tbody`)(3337,`tr`)(3338,`td`)(3339,`code`),bT(3340,`worker.enabled`),cf()(),Aa(3341,`td`)(3342,`code`),bT(3343,`true`),cf()(),Aa(3344,`td`),bT(3345,`Run the polling loop. `),Aa(3346,`code`),bT(3347,`worker: false`),cf(),bT(3348,` is shorthand for `),Aa(3349,`code`),bT(3350,`enabled: false`),cf(),bT(3351,`: the process starts, signals and inspects workflows, and `),Aa(3352,`code`),bT(3353,`WorkflowWorker.drain()`),cf(),bT(3354,` runs due instances on demand`),cf()(),Aa(3355,`tr`)(3356,`td`)(3357,`code`),bT(3358,`worker.id`),cf()(),Aa(3359,`td`)(3360,`code`),bT(3361,`hostname:pid:random`),cf()(),Aa(3362,`td`),bT(3363,`The worker's name, shown as the instance's `),Aa(3364,`code`),bT(3365,`leaseOwner`),cf()()(),Aa(3366,`tr`)(3367,`td`)(3368,`code`),bT(3369,`worker.concurrency`),cf()(),Aa(3370,`td`)(3371,`code`),bT(3372,`10`),cf()(),Aa(3373,`td`),bT(3374,`Instances this process executes at once`),cf()(),Aa(3375,`tr`)(3376,`td`)(3377,`code`),bT(3378,`worker.pollInterval`),cf()(),Aa(3379,`td`)(3380,`code`),bT(3381,`'1s'`),cf()(),Aa(3382,`td`),bT(3383,`How often to look for due instances. A local `),Aa(3384,`code`),bT(3385,`start()`),cf(),bT(3386,` or `),Aa(3387,`code`),bT(3388,`signal()`),cf(),bT(3389,` wakes the loop at once`),cf()(),Aa(3390,`tr`)(3391,`td`)(3392,`code`),bT(3393,`worker.leaseDuration`),cf()(),Aa(3394,`td`)(3395,`code`),bT(3396,`'30s'`),cf()(),Aa(3397,`td`),bT(3398,`How long a claim is valid without a renewal, so how long a crashed process keeps its instances`),cf()(),Aa(3399,`tr`)(3400,`td`)(3401,`code`),bT(3402,`worker.heartbeatInterval`),cf()(),Aa(3403,`td`),bT(3404,`A third of `),Aa(3405,`code`),bT(3406,`leaseDuration`),cf()(),Aa(3407,`td`),bT(3408,`How often a running instance renews its lease`),cf()(),Aa(3409,`tr`)(3410,`td`)(3411,`code`),bT(3412,`worker.shutdownTimeout`),cf()(),Aa(3413,`td`)(3414,`code`),bT(3415,`'10s'`),cf()(),Aa(3416,`td`),bT(3417,`How long shutdown waits for running executions before handing them back`),cf()(),Aa(3418,`tr`)(3419,`td`)(3420,`code`),bT(3421,`retry`),cf()(),Aa(3422,`td`),bT(3423,`3 attempts, `),Aa(3424,`code`),bT(3425,`'1s'`),cf(),bT(3426,` doubling up to `),Aa(3427,`code`),bT(3428,`'5m'`),cf(),bT(3429,`, no jitter`),cf(),Aa(3430,`td`),bT(3431,`The default for every step. See the retry fields below`),cf()(),Aa(3432,`tr`)(3433,`td`)(3434,`code`),bT(3435,`journal.warnEntries`),cf(),bT(3436,`, `),Aa(3437,`code`),bT(3438,`journal.warnBytes`),cf()(),Aa(3439,`td`)(3440,`code`),bT(3441,`1000`),cf(),bT(3442,`, `),Aa(3443,`code`),bT(3444,`1000000`),cf()(),Aa(3445,`td`),bT(3446,`At either, log a warning and emit `),Aa(3447,`code`),bT(3448,`journal-large`),cf(),bT(3449,`, once per instance (`),Aa(3450,`a`,110),bT(3451,`Keep journals short`),cf(),bT(3452,`)`),cf()(),Aa(3453,`tr`)(3454,`td`)(3455,`code`),bT(3456,`journal.maxEntries`),cf(),bT(3457,`, `),Aa(3458,`code`),bT(3459,`journal.maxBytes`),cf()(),Aa(3460,`td`)(3461,`code`),bT(3462,`10000`),cf(),bT(3463,`, `),Aa(3464,`code`),bT(3465,`10000000`),cf()(),Aa(3466,`td`),bT(3467,`At either, fail the instance with a `),Aa(3468,`code`),bT(3469,`WorkflowJournalLimitError`),cf(),bT(3470,` before it records another entry. `),Aa(3471,`code`),bT(3472,`Infinity`),cf(),bT(3473,` turns a check off`),cf()(),Aa(3474,`tr`)(3475,`td`)(3476,`code`),bT(3477,`clock`),cf()(),Aa(3478,`td`),bT(3479,`The system clock`),cf(),Aa(3480,`td`),bT(3481,`A `),Aa(3482,`code`),bT(3483,`WorkflowClock`),cf(),bT(3484,`. Tests pass a `),Aa(3485,`code`),bT(3486,`ManualWorkflowClock`),cf(),bT(3487,` (`),Aa(3488,`a`,115),bT(3489,`Test with a manual clock`),cf(),bT(3490,`)`),cf()(),Aa(3491,`tr`)(3492,`td`)(3493,`code`),bT(3494,`allowInMemoryStorage`),cf()(),Aa(3495,`td`)(3496,`code`),bT(3497,`false`),cf()(),Aa(3498,`td`),bT(3499,`With `),Aa(3500,`code`),bT(3501,`NODE_ENV=production`),cf(),bT(3502,` and no registered store, startup fails; `),Aa(3503,`code`),bT(3504,`true`),cf(),bT(3505,` runs on the in-memory store anyway`),cf()(),Aa(3506,`tr`)(3507,`td`)(3508,`code`),bT(3509,`codec`),cf()(),Aa(3510,`td`),bT(3511,`None`),cf(),Aa(3512,`td`),bT(3513,`A `),Aa(3514,`code`),bT(3515,`WorkflowPayloadCodec`),cf(),bT(3516,`, its class, or a list of them: the first encodes, and each decodes the payloads it encoded (`),Aa(3517,`a`,112),bT(3518,`Encrypt what workflows store`),cf(),bT(3519,`)`),cf()(),Aa(3520,`tr`)(3521,`td`)(3522,`code`),bT(3523,`isGlobal`),cf()(),Aa(3524,`td`)(3525,`code`),bT(3526,`true`),cf()(),Aa(3527,`td`),bT(3528,`Registers the module globally. Top level of `),Aa(3529,`code`),bT(3530,`forRoot()`),cf(),bT(3531,` and `),Aa(3532,`code`),bT(3533,`forRootAsync()`),cf()()()()(),Aa(3534,`p`),bT(3535,`A `),Aa(3536,`code`),bT(3537,`retry`),cf(),bT(3538,` option (the module's, a step's `),Aa(3539,`code`),bT(3540,`retry`),cf(),bT(3541,` or its `),Aa(3542,`code`),bT(3543,`compensateRetry`),cf(),bT(3544,`) is a number of attempts, `),Aa(3545,`code`),bT(3546,`false`),cf(),bT(3547,` for a single attempt, or an object with these fields. A step's `),Aa(3548,`code`),bT(3549,`retry`),cf(),bT(3550,` merges over the module's field by field.`),cf(),Aa(3551,`table`)(3552,`thead`)(3553,`tr`)(3554,`th`),bT(3555,`Field`),cf(),Aa(3556,`th`),bT(3557,`Default`),cf(),Aa(3558,`th`),bT(3559,`Meaning`),cf()()(),Aa(3560,`tbody`)(3561,`tr`)(3562,`td`)(3563,`code`),bT(3564,`attempts`),cf()(),Aa(3565,`td`)(3566,`code`),bT(3567,`3`),cf()(),Aa(3568,`td`),bT(3569,`Total attempts, including the first`),cf()(),Aa(3570,`tr`)(3571,`td`)(3572,`code`),bT(3573,`backoff.delay`),cf()(),Aa(3574,`td`)(3575,`code`),bT(3576,`'1s'`),cf()(),Aa(3577,`td`),bT(3578,`The wait before the first retry`),cf()(),Aa(3579,`tr`)(3580,`td`)(3581,`code`),bT(3582,`backoff.factor`),cf()(),Aa(3583,`td`)(3584,`code`),bT(3585,`2`),cf()(),Aa(3586,`td`),bT(3587,`Growth per retry; `),Aa(3588,`code`),bT(3589,`1`),cf(),bT(3590,` keeps the wait constant`),cf()(),Aa(3591,`tr`)(3592,`td`)(3593,`code`),bT(3594,`backoff.maxDelay`),cf()(),Aa(3595,`td`)(3596,`code`),bT(3597,`'5m'`),cf()(),Aa(3598,`td`),bT(3599,`The cap for a single wait`),cf()(),Aa(3600,`tr`)(3601,`td`)(3602,`code`),bT(3603,`backoff.jitter`),cf()(),Aa(3604,`td`)(3605,`code`),bT(3606,`'none'`),cf()(),Aa(3607,`td`)(3608,`code`),bT(3609,`'full'`),cf(),bT(3610,` (zero to the wait), `),Aa(3611,`code`),bT(3612,`'equal'`),cf(),bT(3613,` (half to all of it) or `),Aa(3614,`code`),bT(3615,`'none'`),cf()()(),Aa(3616,`tr`)(3617,`td`)(3618,`code`),bT(3619,`retryIf`),cf()(),Aa(3620,`td`),bT(3621,`Every error`),cf(),Aa(3622,`td`)(3623,`code`),bT(3624,`(error, attempt) => boolean`),cf(),bT(3625,`: `),Aa(3626,`code`),bT(3627,`false`),cf(),bT(3628,` fails the step at once`),cf()()()(),Aa(3629,`p`)(3630,`code`),bT(3631,`backoff`),cf(),bT(3632,` can also be a function, `),Aa(3633,`code`),bT(3634,`(attempt, error) => duration`),cf(),bT(3635,`. A `),Aa(3636,`code`),bT(3637,`NonRetryableStepError`),cf(),bT(3638,` never retries.`),cf(),Aa(3639,`h5`,116)(3640,`span`),bT(3641,`PostgreSQL store`),cf()(),Aa(3642,`p`)(3643,`code`),bT(3644,`new PostgresWorkflowStore(options, workflowStorage)`),cf(),bT(3645,`, from `),Aa(3646,`code`),bT(3647,`@nestjs/workflows/postgres`),cf(),bT(3648,`, takes these options:`),cf(),Aa(3649,`table`)(3650,`thead`)(3651,`tr`)(3652,`th`),bT(3653,`Option`),cf(),Aa(3654,`th`),bT(3655,`Default`),cf(),Aa(3656,`th`),bT(3657,`Meaning`),cf()()(),Aa(3658,`tbody`)(3659,`tr`)(3660,`td`)(3661,`code`),bT(3662,`executor`),cf()(),Aa(3663,`td`),bT(3664,`Required`),cf(),Aa(3665,`td`),bT(3666,`How the store reaches the database: `),Aa(3667,`code`),bT(3668,`fromDrizzle(db)`),cf(),bT(3669,`, `),Aa(3670,`code`),bT(3671,`fromTypeOrm(dataSource)`),cf(),bT(3672,`, `),Aa(3673,`code`),bT(3674,`fromPg(pool)`),cf(),bT(3675,`, `),Aa(3676,`code`),bT(3677,`fromPrisma(prisma, options)`),cf(),bT(3678,` or `),Aa(3679,`code`),bT(3680,`fromKysely(db)`),cf()()(),Aa(3681,`tr`)(3682,`td`)(3683,`code`),bT(3684,`schema`),cf()(),Aa(3685,`td`)(3686,`code`),bT(3687,`'nest_workflows'`),cf()(),Aa(3688,`td`),bT(3689,`The schema of its tables, which its first migration creates. Letters, digits and underscores, not starting with a digit, at most 63 characters`),cf()(),Aa(3690,`tr`)(3691,`td`)(3692,`code`),bT(3693,`migrate`),cf()(),Aa(3694,`td`)(3695,`code`),bT(3696,`true`),cf(),bT(3697,`, except with `),Aa(3698,`code`),bT(3699,`NODE_ENV=production`),cf()(),Aa(3700,`td`),bT(3701,`Apply the pending migrations when the application starts. With `),Aa(3702,`code`),bT(3703,`false`),cf(),bT(3704,`, startup fails with a `),Aa(3705,`code`),bT(3706,`WorkflowSchemaError`),cf(),bT(3707,` while the schema is behind`),cf()()()(),Aa(3708,`p`),bT(3709,`Each executor takes your database client, and its own kind of transaction object, which `),Aa(3710,`code`),bT(3711,`start()`),cf(),bT(3712,` and `),Aa(3713,`code`),bT(3714,`signal()`),cf(),bT(3715,` then take as `),Aa(3716,`code`),bT(3717,`transaction`),cf(),bT(3718,`:`),cf(),Aa(3719,`table`)(3720,`thead`)(3721,`tr`)(3722,`th`),bT(3723,`Executor`),cf(),Aa(3724,`th`),bT(3725,`Takes`),cf(),Aa(3726,`th`),bT(3727,`Transaction object`),cf()()(),Aa(3728,`tbody`)(3729,`tr`)(3730,`td`)(3731,`code`),bT(3732,`fromDrizzle(db)`),cf()(),Aa(3733,`td`),bT(3734,`A Drizzle PostgreSQL database, whichever its driver`),cf(),Aa(3735,`td`),bT(3736,`The `),Aa(3737,`code`),bT(3738,`tx`),cf(),bT(3739,` that `),Aa(3740,`code`),bT(3741,`db.transaction()`),cf(),bT(3742,` hands its callback`),cf()(),Aa(3743,`tr`)(3744,`td`)(3745,`code`),bT(3746,`fromTypeOrm(dataSource)`),cf()(),Aa(3747,`td`),bT(3748,`A `),Aa(3749,`code`),bT(3750,`DataSource`),cf(),bT(3751,` of type `),Aa(3752,`code`),bT(3753,`postgres`),cf(),bT(3754,`, or its `),Aa(3755,`code`),bT(3756,`manager`),cf()(),Aa(3757,`td`),bT(3758,`The `),Aa(3759,`code`),bT(3760,`EntityManager`),cf(),bT(3761,` that `),Aa(3762,`code`),bT(3763,`dataSource.transaction()`),cf(),bT(3764,` hands its callback, or a `),Aa(3765,`code`),bT(3766,`QueryRunner`),cf(),bT(3767,` after `),Aa(3768,`code`),bT(3769,`startTransaction()`),cf()()(),Aa(3770,`tr`)(3771,`td`)(3772,`code`),bT(3773,`fromPg(pool)`),cf()(),Aa(3774,`td`),bT(3775,`A node-postgres `),Aa(3776,`code`),bT(3777,`Pool`),cf(),bT(3778,`, or a connected `),Aa(3779,`code`),bT(3780,`Client`),cf()(),Aa(3781,`td`),bT(3782,`A client, such as one from `),Aa(3783,`code`),bT(3784,`pool.connect()`),cf(),bT(3785,`, after `),Aa(3786,`code`),bT(3787,`BEGIN`),cf()()(),Aa(3788,`tr`)(3789,`td`)(3790,`code`),bT(3791,`fromPrisma(prisma, options)`),cf()(),Aa(3792,`td`),bT(3793,`A Prisma client on PostgreSQL, through a driver adapter such as `),Aa(3794,`code`),bT(3795,`@prisma/adapter-pg`),cf(),bT(3796,` or Prisma's engine. `),Aa(3797,`code`),bT(3798,`maxWait`),cf(),bT(3799,` (default `),Aa(3800,`code`),bT(3801,`'10s'`),cf(),bT(3802,`) and `),Aa(3803,`code`),bT(3804,`timeout`),cf(),bT(3805,` (default `),Aa(3806,`code`),bT(3807,`'1m'`),cf(),bT(3808,`) limit the store's own transactions`),cf(),Aa(3809,`td`),bT(3810,`The transaction client that `),Aa(3811,`code`),bT(3812,`prisma.$transaction()`),cf(),bT(3813,` hands its callback`),cf()(),Aa(3814,`tr`)(3815,`td`)(3816,`code`),bT(3817,`fromKysely(db)`),cf()(),Aa(3818,`td`),bT(3819,`A `),Aa(3820,`code`),bT(3821,`Kysely`),cf(),bT(3822,` instance with a PostgreSQL dialect. The store's statements skip its plugins`),cf(),Aa(3823,`td`),bT(3824,`The transaction that `),Aa(3825,`code`),bT(3826,`db.transaction().execute()`),cf(),bT(3827,` hands its callback, or a controlled transaction`),cf()()()(),Aa(3828,`p`),bT(3829,`The store's `),Aa(3830,`code`),bT(3831,`migrate()`),cf(),bT(3832,` method applies the pending migrations at once, whatever the `),Aa(3833,`code`),bT(3834,`migrate`),cf(),bT(3835,` option says, and resolves with the versions it applied. `),Aa(3836,`code`),bT(3837,`PostgresWorkflowStore.migrationSql()`),cf(),bT(3838,` returns their SQL, with the bookkeeping. Its options are the `),Aa(3839,`code`),bT(3840,`schema`),cf(),bT(3841,`, the versions to go `),Aa(3842,`code`),bT(3843,`from`),cf(),bT(3844,` (default `),Aa(3845,`code`),bT(3846,`0`),cf(),bT(3847,`, a new database) and `),Aa(3848,`code`),bT(3849,`to`),cf(),bT(3850,` (default: the one the package needs), and `),Aa(3851,`code`),bT(3852,`statementBreakpoints`),cf(),bT(3853,`, which separates the statements with drizzle-kit's `),Aa(3854,`code`),bT(3855,`--> statement-breakpoint`),cf(),bT(3856,` lines. From version 0, it starts with `),Aa(3857,`code`),bT(3858,`CREATE SCHEMA IF NOT EXISTS`),cf(),bT(3859,`, which needs the CREATE privilege on the database: leave it out if someone created the schema for you. `),Aa(3860,`code`),bT(3861,`PostgresWorkflowStore.schemaVersion`),cf(),bT(3862,` is the version the package needs. A schema's own version is the highest in its `),Aa(3863,`code`),bT(3864,`migrations`),cf(),bT(3865,` table.`),cf(),Aa(3866,`h5`,117)(3867,`span`),bT(3868,`MySQL store`),cf()(),Aa(3869,`p`)(3870,`code`),bT(3871,`new MySqlWorkflowStore(options, workflowStorage)`),cf(),bT(3872,`, from `),Aa(3873,`code`),bT(3874,`@nestjs/workflows/mysql`),cf(),bT(3875,`, runs on MySQL 8.4 LTS and 9.x, and takes these options:`),cf(),Aa(3876,`table`)(3877,`thead`)(3878,`tr`)(3879,`th`),bT(3880,`Option`),cf(),Aa(3881,`th`),bT(3882,`Default`),cf(),Aa(3883,`th`),bT(3884,`Meaning`),cf()()(),Aa(3885,`tbody`)(3886,`tr`)(3887,`td`)(3888,`code`),bT(3889,`executor`),cf()(),Aa(3890,`td`),bT(3891,`Required`),cf(),Aa(3892,`td`),bT(3893,`How the store reaches the database: `),Aa(3894,`code`),bT(3895,`fromDrizzle(db)`),cf(),bT(3896,`, `),Aa(3897,`code`),bT(3898,`fromTypeOrm(dataSource)`),cf(),bT(3899,`, `),Aa(3900,`code`),bT(3901,`fromMysql2(pool)`),cf(),bT(3902,`, `),Aa(3903,`code`),bT(3904,`fromPrisma(prisma, options)`),cf(),bT(3905,` or `),Aa(3906,`code`),bT(3907,`fromKysely(db)`),cf(),bT(3908,`, from `),Aa(3909,`code`),bT(3910,`@nestjs/workflows/mysql`),cf()()(),Aa(3911,`tr`)(3912,`td`)(3913,`code`),bT(3914,`schema`),cf()(),Aa(3915,`td`)(3916,`code`),bT(3917,`'nest_workflows'`),cf()(),Aa(3918,`td`),bT(3919,`The start of its tables' names (`),Aa(3920,`code`),bT(3921,`nest_workflows_instances`),cf(),bT(3922,`...), in the connection's database. Lowercase letters, digits and underscores, not starting with a digit, at most 40 characters`),cf()(),Aa(3923,`tr`)(3924,`td`)(3925,`code`),bT(3926,`migrate`),cf()(),Aa(3927,`td`)(3928,`code`),bT(3929,`true`),cf(),bT(3930,`, except with `),Aa(3931,`code`),bT(3932,`NODE_ENV=production`),cf()(),Aa(3933,`td`),bT(3934,`Apply the pending migrations when the application starts, one statement at a time. With `),Aa(3935,`code`),bT(3936,`false`),cf(),bT(3937,`, startup fails with a `),Aa(3938,`code`),bT(3939,`WorkflowSchemaError`),cf(),bT(3940,` while the tables are behind`),cf()()()(),Aa(3941,`table`)(3942,`thead`)(3943,`tr`)(3944,`th`),bT(3945,`Executor`),cf(),Aa(3946,`th`),bT(3947,`Takes`),cf(),Aa(3948,`th`),bT(3949,`Transaction object`),cf()()(),Aa(3950,`tbody`)(3951,`tr`)(3952,`td`)(3953,`code`),bT(3954,`fromDrizzle(db)`),cf()(),Aa(3955,`td`),bT(3956,`A Drizzle MySQL database (`),Aa(3957,`code`),bT(3958,`drizzle-orm/mysql2`),cf(),bT(3959,`)`),cf(),Aa(3960,`td`),bT(3961,`The `),Aa(3962,`code`),bT(3963,`tx`),cf(),bT(3964,` that `),Aa(3965,`code`),bT(3966,`db.transaction()`),cf(),bT(3967,` hands its callback`),cf()(),Aa(3968,`tr`)(3969,`td`)(3970,`code`),bT(3971,`fromTypeOrm(dataSource)`),cf()(),Aa(3972,`td`),bT(3973,`A `),Aa(3974,`code`),bT(3975,`DataSource`),cf(),bT(3976,` of type `),Aa(3977,`code`),bT(3978,`mysql`),cf(),bT(3979,`, or its `),Aa(3980,`code`),bT(3981,`manager`),cf()(),Aa(3982,`td`),bT(3983,`The `),Aa(3984,`code`),bT(3985,`EntityManager`),cf(),bT(3986,` that `),Aa(3987,`code`),bT(3988,`dataSource.transaction()`),cf(),bT(3989,` hands its callback, or a `),Aa(3990,`code`),bT(3991,`QueryRunner`),cf(),bT(3992,` after `),Aa(3993,`code`),bT(3994,`startTransaction()`),cf()()(),Aa(3995,`tr`)(3996,`td`)(3997,`code`),bT(3998,`fromMysql2(pool)`),cf()(),Aa(3999,`td`),bT(4e3,`A mysql2 pool, or a connection`),cf(),Aa(4001,`td`),bT(4002,`A connection, such as one from `),Aa(4003,`code`),bT(4004,`pool.getConnection()`),cf(),bT(4005,`, after `),Aa(4006,`code`),bT(4007,`beginTransaction()`),cf()()(),Aa(4008,`tr`)(4009,`td`)(4010,`code`),bT(4011,`fromPrisma(prisma, options)`),cf()(),Aa(4012,`td`),bT(4013,`A Prisma client on MySQL, through `),Aa(4014,`code`),bT(4015,`@prisma/adapter-mariadb`),cf(),bT(4016,`. `),Aa(4017,`code`),bT(4018,`maxWait`),cf(),bT(4019,` (default `),Aa(4020,`code`),bT(4021,`'10s'`),cf(),bT(4022,`) and `),Aa(4023,`code`),bT(4024,`timeout`),cf(),bT(4025,` (default `),Aa(4026,`code`),bT(4027,`'1m'`),cf(),bT(4028,`) limit the store's own transactions, `),Aa(4029,`code`),bT(4030,`migrate()`),cf(),bT(4031,` included: raise `),Aa(4032,`code`),bT(4033,`timeout`),cf(),bT(4034,` for it, or migrate from the command line`),cf(),Aa(4035,`td`),bT(4036,`The transaction client that `),Aa(4037,`code`),bT(4038,`prisma.$transaction()`),cf(),bT(4039,` hands its callback`),cf()(),Aa(4040,`tr`)(4041,`td`)(4042,`code`),bT(4043,`fromKysely(db)`),cf()(),Aa(4044,`td`),bT(4045,`A `),Aa(4046,`code`),bT(4047,`Kysely`),cf(),bT(4048,` instance with a `),Aa(4049,`code`),bT(4050,`MysqlDialect`),cf(),bT(4051,`. The store's statements skip its plugins`),cf(),Aa(4052,`td`),bT(4053,`The transaction that `),Aa(4054,`code`),bT(4055,`db.transaction().execute()`),cf(),bT(4056,` hands its callback, or a controlled transaction`),cf()()()(),Aa(4057,`p`),bT(4058,`At startup, the store checks the server and the connection: MySQL, not MariaDB; a strict `),Aa(4059,`code`),bT(4060,`sql_mode`),cf(),bT(4061,` (`),Aa(4062,`code`),bT(4063,`STRICT_TRANS_TABLES`),cf(),bT(4064,`, MySQL's default), without which MySQL would cut a value too long for its column; and a database, where its tables go. It counts the rows an update matched, so keep mysql2's `),Aa(4065,`code`),bT(4066,`FOUND_ROWS`),cf(),bT(4067,` flag, which is on by default (Prisma's adapter calls it `),Aa(4068,`code`),bT(4069,`foundRows`),cf(),bT(4070,`), and leave the `),Aa(4071,`code`),bT(4072,`NO_BACKSLASH_ESCAPES`),cf(),bT(4073,` SQL mode off.`),cf(),Aa(4074,`p`),bT(4075,`Its ids, names and keys are indexed columns of bounded length, in characters:`),cf(),Aa(4076,`table`)(4077,`thead`)(4078,`tr`)(4079,`th`),bT(4080,`Key`),cf(),Aa(4081,`th`),bT(4082,`At most`),cf()()(),Aa(4083,`tbody`)(4084,`tr`)(4085,`td`),bT(4086,`An instance id, including a child's (by default `),Aa(4087,`code`),bT(4088,`<parent id>/<workflow>#<n>`),cf(),bT(4089,`) and that of an instance a schedule starts (`),Aa(4090,`code`),bT(4091,`<schedule id>@<time>`),cf(),bT(4092,`)`),cf(),Aa(4093,`td`),bT(4094,`255`),cf()(),Aa(4095,`tr`)(4096,`td`),bT(4097,`A schedule id`),cf(),Aa(4098,`td`),bT(4099,`230`),cf()(),Aa(4100,`tr`)(4101,`td`),bT(4102,`A workflow's name, a signal's name, `),Aa(4103,`code`),bT(4104,`key`),cf(),bT(4105,` and `),Aa(4106,`code`),bT(4107,`id`),cf(),bT(4108,`, a concurrency key, a rate-limit key`),cf(),Aa(4109,`td`),bT(4110,`255`),cf()(),Aa(4111,`tr`)(4112,`td`),bT(4113,`A journal entry's name: a step's, a sleep's or a wait's, and those the engine adds, such as `),Aa(4114,`code`),bT(4115,`$compensate:<step>`),cf(),bT(4116,` and `),Aa(4117,`code`),bT(4118,`$child:<child id>`),cf()(),Aa(4119,`td`),bT(4120,`512`),cf()()()(),Aa(4121,`p`),bT(4122,`A longer one fails with a `),Aa(4123,`code`),bT(4124,`RangeError`),cf(),bT(4125,` that names it, before any SQL. `),Aa(4126,`code`),bT(4127,`migrate()`),cf(),bT(4128,` and `),Aa(4129,`code`),bT(4130,`MySqlWorkflowStore.schemaVersion`),cf(),bT(4131,` are the PostgreSQL store's. `),Aa(4132,`code`),bT(4133,`MySqlWorkflowStore.migrationSql()`),cf(),bT(4134,` takes the same options and returns the statements to apply in order, each once, and `),Aa(4135,`code`),bT(4136,`MySqlWorkflowStore.migrationStatements()`),cf(),bT(4137,` takes the `),Aa(4138,`code`),bT(4139,`schema`),cf(),bT(4140,`, `),Aa(4141,`code`),bT(4142,`from`),cf(),bT(4143,` and `),Aa(4144,`code`),bT(4145,`to`),cf(),bT(4146,` and returns them one per string, for a tool that runs one statement per call. A schema's own version is the highest one applied in its `),Aa(4147,`code`),bT(4148,`<schema>_migrations`),cf(),bT(4149,` table.`),cf(),Aa(4150,`h5`,118)(4151,`span`),bT(4152,`Command line`),cf()(),Aa(4153,`p`)(4154,`code`),bT(4155,`npx @nestjs/workflows`),cf(),bT(4156,` applies either store's migrations from a deploy step or checks them in CI. It takes `),Aa(4157,`code`),bT(4158,`--url`),cf(),bT(4159,` (default `),Aa(4160,`code`),bT(4161,`DATABASE_URL`),cf(),bT(4162,`) and `),Aa(4163,`code`),bT(4164,`--schema`),cf(),bT(4165,` (default `),Aa(4166,`code`),bT(4167,`nest_workflows`),cf(),bT(4168,`). The URL picks the store: `),Aa(4169,`code`),bT(4170,`postgres://`),cf(),bT(4171,` or `),Aa(4172,`code`),bT(4173,`postgresql://`),cf(),bT(4174,` for PostgreSQL, which needs `),Aa(4175,`code`),bT(4176,`pg`),cf(),bT(4177,` installed, and `),Aa(4178,`code`),bT(4179,`mysql://`),cf(),bT(4180,` for MySQL, which needs `),Aa(4181,`code`),bT(4182,`mysql2`),cf(),bT(4183,`.`),cf(),Aa(4184,`table`)(4185,`thead`)(4186,`tr`)(4187,`th`),bT(4188,`Command`),cf(),Aa(4189,`th`),bT(4190,`What it does`),cf()()(),Aa(4191,`tbody`)(4192,`tr`)(4193,`td`)(4194,`code`),bT(4195,`migrate`),cf()(),Aa(4196,`td`),bT(4197,`Applies the pending migrations, as `),Aa(4198,`code`),bT(4199,`migrate: true`),cf(),bT(4200,` does at startup`),cf()(),Aa(4201,`tr`)(4202,`td`)(4203,`code`),bT(4204,`status`),cf()(),Aa(4205,`td`),bT(4206,`Prints the schema's version and the one the package needs, and exits with 1 while the schema is behind`),cf()(),Aa(4207,`tr`)(4208,`td`)(4209,`code`),bT(4210,`sql`),cf()(),Aa(4211,`td`),bT(4212,`Prints the SQL of `),Aa(4213,`code`),bT(4214,`migrationSql()`),cf(),bT(4215,`, from `),Aa(4216,`code`),bT(4217,`--from`),cf(),bT(4218,` to `),Aa(4219,`code`),bT(4220,`--to`),cf(),bT(4221,`, without a database: PostgreSQL's, or MySQL's with `),Aa(4222,`code`),bT(4223,`--dialect mysql`),cf(),bT(4224,`. `),Aa(4225,`code`),bT(4226,`--statement-breakpoints`),cf(),bT(4227,` separates the statements for drizzle-kit`),cf()()()(),Aa(4228,`h5`,119)(4229,`span`),bT(4230,`The store contract`),cf()(),Aa(4231,`p`)(4232,`code`),bT(4233,`PostgresWorkflowStore`),cf(),bT(4234,` and `),Aa(4235,`code`),bT(4236,`MySqlWorkflowStore`),cf(),bT(4237,` implement the `),Aa(4238,`code`),bT(4239,`WorkflowStore`),cf(),bT(4240,` interface. For another database, implement it in a provider of your own. The JSDoc of each method on `),Aa(4241,`code`),bT(4242,`WorkflowStore`),cf(),bT(4243,` says what the method must do, and which race each rule prevents.`),cf(),Aa(4244,`p`)(4245,`strong`),bT(4246,`Registration.`),cf(),bT(4247,` The store is an ordinary singleton provider that calls `),Aa(4248,`code`),bT(4249,`registerSource(this)`),cf(),bT(4250,` on the injectable `),Aa(4251,`code`),bT(4252,`WorkflowStorage`),cf(),bT(4253,` in its constructor. The registry checks the shape at once, refuses a second registration unless it passes `),Aa(4254,`code`),bT(4255,`replace: true`),cf(),bT(4256,`, and locks when `),Aa(4257,`code`),bT(4258,`WorkflowsModule`),cf(),bT(4259,` initializes, logging the store in use. A request-scoped provider, a provider in a lazy-loaded module, or a lifecycle hook registers too late, and throws. With nothing registered, the module uses `),Aa(4260,`code`),bT(4261,`InMemoryWorkflowStore`),cf(),bT(4262,`: a restart loses every running instance, and two processes don't share them. It can't join your transaction either, so `),Aa(4263,`code`),bT(4264,`start()`),cf(),bT(4265,` and `),Aa(4266,`code`),bT(4267,`signal()`),cf(),bT(4268,` with `),Aa(4269,`code`),bT(4270,`transaction`),cf(),bT(4271,` write at once, and it logs a warning the first time. With `),Aa(4272,`code`),bT(4273,`NODE_ENV=production`),cf(),bT(4274,`, startup fails instead, with an error that names the package's stores and the interface to implement, unless you set `),Aa(4275,`code`),bT(4276,`allowInMemoryStorage: true`),cf(),bT(4277,` in the module options.`),cf(),Aa(4278,`p`)(4279,`strong`),bT(4280,`Atomicity.`),cf(),bT(4281,` Workers, signals, cancels, retries, purges and schedules race each other through the store. `),Aa(4282,`code`),bT(4283,`claim()`),cf(),bT(4284,` must never lease one instance to two workers, `),Aa(4285,`code`),bT(4286,`write()`),cf(),bT(4287,` must write only while the worker's lease holds, and `),Aa(4288,`code`),bT(4289,`signal()`),cf(),bT(4290,` must not slip past an instance that is suspending. So every method that changes state is one conditional statement, or one transaction with the right lock, never a read followed by a write. Two methods are optional: `),Aa(4291,`code`),bT(4292,`createInTransaction()`),cf(),bT(4293,` and `),Aa(4294,`code`),bT(4295,`signalInTransaction()`),cf(),bT(4296,`, which `),Aa(4297,`code`),bT(4298,`start()`),cf(),bT(4299,` and `),Aa(4300,`code`),bT(4301,`signal()`),cf(),bT(4302,` call with your transaction object, untouched. They must write through it, and refuse the root handle, whose writes commit on their own. On PostgreSQL, `),Aa(4303,`code`),bT(4304,`signalInTransaction()`),cf(),bT(4305,` also refuses a transaction that isn't READ COMMITTED, whose wake-up could miss waits committed after its snapshot.`),cf(),Aa(4306,`p`)(4307,`strong`),bT(4308,`Test it`),cf(),bT(4309,` with the suite from `),Aa(4310,`code`),bT(4311,`@nestjs/workflows/testing`),cf(),bT(4312,`. `),Aa(4313,`code`),bT(4314,`workflowStoreContract()`),cf(),bT(4315,` returns the contract as test cases, races included, for any test runner. The tutorial's tests run it against `),Aa(4316,`code`),bT(4317,`PostgresWorkflowStore`),cf(),bT(4318,` through Drizzle, and against `),Aa(4319,`code`),bT(4320,`MySqlWorkflowStore`),cf(),bT(4321,` on MySQL, as you would against yours, with a function that returns a store on emptied tables:`),cf(),Aa(4322,`app-copy-button`,56)(4323,`span`,57),bT(4324),LT(4325,`extension`),Wa(4326,`app-tabs`,null,40),cf(),Aa(4328,`pre`)(4329,`code`,58),bT(4330,`
// The concurrency cases run too; with one connection, PGlite runs them one statement at a time.
const cases = workflowStoreContract(() => freshStore(db), { concurrent: true, transaction: (work) => db.transaction(work) });
for (const c of cases) {
  it(c.name, c.run);
}
`),cf()()(),Aa(4331,`p`),bT(4332,`With `),Aa(4333,`code`),bT(4334,`concurrent: true`),cf(),bT(4335,`, the suite races claims (under limits too), signals, suspensions, children's final writes, cancels and terminates, retries, purges and schedule claims against each other: 60 signals against 60 suspensions, for example. Run it on a database server with a connection pool too, where a store without the right locks fails it. With `),Aa(4336,`code`),bT(4337,`transaction`),cf(),bT(4338,`, a function that opens one of your transactions, the cases of the two optional methods run as well. The package's own tests run the suite against a hand-written Drizzle store, as the proof that a store written against the interface passes it.`),cf(),Aa(4339,`p`),bT(4340,`Packages built on the engine, such as a job queue, take its storage-agnostic parts (clocks, retries, payload codecs, limits, the leased worker loop and schedules) from `),Aa(4341,`code`),bT(4342,`@nestjs/workflows/core`),cf(),bT(4343,`; applications don't need it.`),cf(),Aa(4344,`h5`,120)(4345,`span`),bT(4346,`Call options`),cf()(),Aa(4347,`table`)(4348,`thead`)(4349,`tr`)(4350,`th`),bT(4351,`Call`),cf(),Aa(4352,`th`),bT(4353,`Options`),cf(),Aa(4354,`th`),bT(4355,`Explained in`),cf()()(),Aa(4356,`tbody`)(4357,`tr`)(4358,`td`)(4359,`code`),bT(4360,`@Workflow(name, options)`),cf()(),Aa(4361,`td`)(4362,`code`),bT(4363,`version`),cf(),bT(4364,` (default `),Aa(4365,`code`),bT(4366,`1`),cf(),bT(4367,`), `),Aa(4368,`code`),bT(4369,`timeout`),cf(),bT(4370,` (a run timeout; default none), `),Aa(4371,`code`),bT(4372,`concurrency`),cf(),bT(4373,` (`),Aa(4374,`code`),bT(4375,`limit`),cf(),bT(4376,`, and a `),Aa(4377,`code`),bT(4378,`key`),cf(),bT(4379,` function for a limit per key; one of each in an array), `),Aa(4380,`code`),bT(4381,`rateLimit`),cf(),bT(4382,` (`),Aa(4383,`code`),bT(4384,`max`),cf(),bT(4385,`, `),Aa(4386,`code`),bT(4387,`duration`),cf(),bT(4388,`, and a `),Aa(4389,`code`),bT(4390,`key`),cf(),bT(4391,` function; one of each in an array), `),Aa(4392,`code`),bT(4393,`schedules`),cf(),bT(4394,` (see the schedule options below)`),cf(),Aa(4395,`td`)(4396,`a`,121),bT(4397,`Deploy changes safely`),cf(),bT(4398,`, `),Aa(4399,`a`,111),bT(4400,`Time out the whole workflow`),cf(),bT(4401,`, `),Aa(4402,`a`,122),bT(4403,`Limit how many run at once`),cf(),bT(4404,`, `),Aa(4405,`a`,86),bT(4406,`Run workflows on a schedule`),cf()()(),Aa(4407,`tr`)(4408,`td`)(4409,`code`),bT(4410,`ctx.step(name, fn, options)`),cf()(),Aa(4411,`td`)(4412,`code`),bT(4413,`retry`),cf(),bT(4414,`, `),Aa(4415,`code`),bT(4416,`timeout`),cf(),bT(4417,`, `),Aa(4418,`code`),bT(4419,`heartbeatTimeout`),cf(),bT(4420,`, `),Aa(4421,`code`),bT(4422,`compensate`),cf(),bT(4423,`, `),Aa(4424,`code`),bT(4425,`compensateRetry`),cf()(),Aa(4426,`td`)(4427,`a`,123),bT(4428,`Write the workflow`),cf(),bT(4429,`, `),Aa(4430,`a`,124),bT(4431,`Long-running steps`),cf()()(),Aa(4432,`tr`)(4433,`td`)(4434,`code`),bT(4435,`ctx.waitForSignal(name, signal, options)`),cf()(),Aa(4436,`td`)(4437,`code`),bT(4438,`key`),cf(),bT(4439,`, `),Aa(4440,`code`),bT(4441,`timeout`),cf(),bT(4442,` (resolves `),Aa(4443,`code`),bT(4444,`null`),cf(),bT(4445,` when it passes), `),Aa(4446,`code`),bT(4447,`match`),cf(),bT(4448,` (a pure filter over the payload)`),cf(),Aa(4449,`td`)(4450,`a`,49),bT(4451,`Wait for the delivery webhook`),cf()()(),Aa(4452,`tr`)(4453,`td`)(4454,`code`),bT(4455,`ctx.sleep(name, duration)`),cf()(),Aa(4456,`td`),bT(4457,`A duration, or an object with `),Aa(4458,`code`),bT(4459,`until`),cf(),bT(4460,` (a `),Aa(4461,`code`),bT(4462,`Date`),cf(),bT(4463,` or epoch milliseconds)`),cf(),Aa(4464,`td`)(4465,`a`,48),bT(4466,`Sleep for a week, then ask for a review`),cf()()(),Aa(4467,`tr`)(4468,`td`)(4469,`code`),bT(4470,`ctx.waitForAny(name, conditions)`),cf()(),Aa(4471,`td`),bT(4472,`An object of conditions: `),Aa(4473,`code`),bT(4474,`ctx.signalWait(signal, options)`),cf(),bT(4475,` (`),Aa(4476,`code`),bT(4477,`key`),cf(),bT(4478,`, `),Aa(4479,`code`),bT(4480,`match`),cf(),bT(4481,`), `),Aa(4482,`code`),bT(4483,`ctx.timer(duration)`),cf(),bT(4484,` (a duration, or an object with `),Aa(4485,`code`),bT(4486,`until`),cf(),bT(4487,`), or a child's handle. Resolves with the winner's `),Aa(4488,`code`),bT(4489,`key`),cf(),bT(4490,` and `),Aa(4491,`code`),bT(4492,`value`),cf()(),Aa(4493,`td`)(4494,`a`,125),bT(4495,`Wait for whichever comes first`),cf()()(),Aa(4496,`tr`)(4497,`td`)(4498,`code`),bT(4499,`ctx.startChild(workflow, input, options)`),cf(),bT(4500,`, `),Aa(4501,`code`),bT(4502,`ctx.executeChild(workflow, input, options)`),cf()(),Aa(4503,`td`)(4504,`code`),bT(4505,`id`),cf(),bT(4506,` (default the parent's id, the workflow's name and a count, such as `),Aa(4507,`code`),bT(4508,`order-71e1973d/shipment#1`),cf(),bT(4509,`), `),Aa(4510,`code`),bT(4511,`version`),cf(),bT(4512,`, `),Aa(4513,`code`),bT(4514,`timeout`),cf(),bT(4515,`, `),Aa(4516,`code`),bT(4517,`parentClose`),cf(),bT(4518,` (`),Aa(4519,`code`),bT(4520,`'cancel'`),cf(),bT(4521,`, `),Aa(4522,`code`),bT(4523,`'terminate'`),cf(),bT(4524,` or `),Aa(4525,`code`),bT(4526,`'abandon'`),cf(),bT(4527,`; default `),Aa(4528,`code`),bT(4529,`'cancel'`),cf(),bT(4530,`), `),Aa(4531,`code`),bT(4532,`priority`),cf(),bT(4533,` (default the parent's), `),Aa(4534,`code`),bT(4535,`concurrencyKey`),cf(),bT(4536,`, `),Aa(4537,`code`),bT(4538,`rateLimitKey`),cf()(),Aa(4539,`td`)(4540,`a`,75),bT(4541,`Start child workflows`),cf()()(),Aa(4542,`tr`)(4543,`td`)(4544,`code`),bT(4545,`ctx.setStatus(status)`),cf()(),Aa(4546,`td`),bT(4547,`A JSON value of up to 16 KiB, or `),Aa(4548,`code`),bT(4549,`undefined`),cf(),bT(4550,` to clear it`),cf(),Aa(4551,`td`)(4552,`a`,126),bT(4553,`Report its status`),cf()()(),Aa(4554,`tr`)(4555,`td`)(4556,`code`),bT(4557,`ctx.schedule`),cf()(),Aa(4558,`td`),bT(4559,`Not a call: the `),Aa(4560,`code`),bT(4561,`id`),cf(),bT(4562,` of the schedule and the time `),Aa(4563,`code`),bT(4564,`at`),cf(),bT(4565,` of the occurrence that started the instance, or `),Aa(4566,`code`),bT(4567,`null`),cf()(),Aa(4568,`td`)(4569,`a`,86),bT(4570,`Run workflows on a schedule`),cf()()(),Aa(4571,`tr`)(4572,`td`)(4573,`code`),bT(4574,`WorkflowClient.start(workflow, input, options)`),cf()(),Aa(4575,`td`)(4576,`code`),bT(4577,`id`),cf(),bT(4578,` (default a random UUID, or inside a step one derived from the step), `),Aa(4579,`code`),bT(4580,`version`),cf(),bT(4581,` (default the highest registered), `),Aa(4582,`code`),bT(4583,`timeout`),cf(),bT(4584,` (default the decorator's), `),Aa(4585,`code`),bT(4586,`transaction`),cf(),bT(4587,`, `),Aa(4588,`code`),bT(4589,`priority`),cf(),bT(4590,` (1 to 2,097,151, lower first; default none, which goes before all), `),Aa(4591,`code`),bT(4592,`concurrencyKey`),cf(),bT(4593,`, `),Aa(4594,`code`),bT(4595,`rateLimitKey`),cf(),bT(4596,` (instead of the keys the limits compute)`),cf(),Aa(4597,`td`)(4598,`a`,65),bT(4599,`Start it with the order`),cf(),bT(4600,`, `),Aa(4601,`a`,122),bT(4602,`Limit how many run at once`),cf()()(),Aa(4603,`tr`)(4604,`td`)(4605,`code`),bT(4606,`WorkflowClient.signal(signal, payload, options)`),cf()(),Aa(4607,`td`)(4608,`code`),bT(4609,`key`),cf(),bT(4610,`, `),Aa(4611,`code`),bT(4612,`id`),cf(),bT(4613,` (stores a signal with the same name and id once; derived from the step inside a step), `),Aa(4614,`code`),bT(4615,`transaction`),cf()(),Aa(4616,`td`)(4617,`a`,49),bT(4618,`Wait for the delivery webhook`),cf(),bT(4619,`, `),Aa(4620,`a`,47),bT(4621,`With CQRS`),cf()()(),Aa(4622,`tr`)(4623,`td`)(4624,`code`),bT(4625,`WorkflowClient.startAndWait(workflow, input, options, wait)`),cf()(),Aa(4626,`td`)(4627,`code`),bT(4628,`start()`),cf(),bT(4629,`'s options, but not `),Aa(4630,`code`),bT(4631,`transaction`),cf(),bT(4632,`, and `),Aa(4633,`code`),bT(4634,`result()`),cf(),bT(4635,`'s as `),Aa(4636,`code`),bT(4637,`wait`),cf()(),Aa(4638,`td`)(4639,`a`,127),bT(4640,`Wait for a result`),cf()()(),Aa(4641,`tr`)(4642,`td`)(4643,`code`),bT(4644,`WorkflowClient.result(id, options)`),cf()(),Aa(4645,`td`)(4646,`code`),bT(4647,`timeout`),cf(),bT(4648,` (wall-clock; default none), `),Aa(4649,`code`),bT(4650,`signal`),cf(),bT(4651,` (stops waiting when aborted)`),cf(),Aa(4652,`td`)(4653,`a`,127),bT(4654,`Wait for a result`),cf()()(),Aa(4655,`tr`)(4656,`td`)(4657,`code`),bT(4658,`WorkflowClient.getStatus(id, options)`),cf()(),Aa(4659,`td`)(4660,`code`),bT(4661,`journal`),cf(),bT(4662,`, `),Aa(4663,`code`),bT(4664,`children`),cf()(),Aa(4665,`td`)(4666,`a`,126),bT(4667,`Report its status`),cf(),bT(4668,`, `),Aa(4669,`a`,75),bT(4670,`Start child workflows`),cf()()(),Aa(4671,`tr`)(4672,`td`)(4673,`code`),bT(4674,`WorkflowClient.cancel(id, reason)`),cf(),bT(4675,`, `),Aa(4676,`code`),bT(4677,`terminate(id, reason)`),cf()(),Aa(4678,`td`),bT(4679,`None`),cf(),Aa(4680,`td`)(4681,`a`,50),bT(4682,`Let customer support cancel an order`),cf(),bT(4683,`, `),Aa(4684,`a`,128),bT(4685,`Retry, delete or terminate`),cf()()(),Aa(4686,`tr`)(4687,`td`)(4688,`code`),bT(4689,`WorkflowClient.list(filter)`),cf()(),Aa(4690,`td`)(4691,`code`),bT(4692,`status`),cf(),bT(4693,` (one or a list), `),Aa(4694,`code`),bT(4695,`workflow`),cf(),bT(4696,`, `),Aa(4697,`code`),bT(4698,`version`),cf(),bT(4699,`, `),Aa(4700,`code`),bT(4701,`parentId`),cf(),bT(4702,`, `),Aa(4703,`code`),bT(4704,`scheduleId`),cf(),bT(4705,`, `),Aa(4706,`code`),bT(4707,`limit`),cf(),bT(4708,` (default `),Aa(4709,`code`),bT(4710,`100`),cf(),bT(4711,`), `),Aa(4712,`code`),bT(4713,`offset`),cf()(),Aa(4714,`td`)(4715,`a`,121),bT(4716,`Deploy changes safely`),cf()()(),Aa(4717,`tr`)(4718,`td`)(4719,`code`),bT(4720,`WorkflowClient.retry(id, options)`),cf()(),Aa(4721,`td`)(4722,`code`),bT(4723,`timeout`),cf(),bT(4724,` (a new run timeout from now, or `),Aa(4725,`code`),bT(4726,`false`),cf(),bT(4727,` for none; default the instance's)`),cf(),Aa(4728,`td`)(4729,`a`,128),bT(4730,`Retry, delete or terminate`),cf()()(),Aa(4731,`tr`)(4732,`td`)(4733,`code`),bT(4734,`WorkflowClient.delete(id, options)`),cf()(),Aa(4735,`td`)(4736,`code`),bT(4737,`force`),cf(),bT(4738,` (delete an unfinished instance too; default `),Aa(4739,`code`),bT(4740,`false`),cf(),bT(4741,`)`),cf(),Aa(4742,`td`)(4743,`a`,128),bT(4744,`Retry, delete or terminate`),cf()()(),Aa(4745,`tr`)(4746,`td`)(4747,`code`),bT(4748,`WorkflowClient.purge(options)`),cf()(),Aa(4749,`td`)(4750,`code`),bT(4751,`olderThan`),cf(),bT(4752,` (required), `),Aa(4753,`code`),bT(4754,`status`),cf(),bT(4755,` (default `),Aa(4756,`code`),bT(4757,`completed`),cf(),bT(4758,`, `),Aa(4759,`code`),bT(4760,`failed`),cf(),bT(4761,` and `),Aa(4762,`code`),bT(4763,`cancelled`),cf(),bT(4764,`), `),Aa(4765,`code`),bT(4766,`batchSize`),cf(),bT(4767,` (default `),Aa(4768,`code`),bT(4769,`500`),cf(),bT(4770,`)`),cf(),Aa(4771,`td`)(4772,`a`,109),bT(4773,`Purge finished instances`),cf()()(),Aa(4774,`tr`)(4775,`td`)(4776,`code`),bT(4777,`WorkflowClient.schedules`),cf(),bT(4778,`, or the injectable `),Aa(4779,`code`),bT(4780,`WorkflowSchedules`),cf()(),Aa(4781,`td`)(4782,`code`),bT(4783,`upsert(id, options)`),cf(),bT(4784,` (the schedule options, with `),Aa(4785,`code`),bT(4786,`workflow`),cf(),bT(4787,`, and optionally `),Aa(4788,`code`),bT(4789,`version`),cf(),bT(4790,` and a JSON `),Aa(4791,`code`),bT(4792,`input`),cf(),bT(4793,`), `),Aa(4794,`code`),bT(4795,`get(id)`),cf(),bT(4796,`, `),Aa(4797,`code`),bT(4798,`list(filter)`),cf(),bT(4799,` (`),Aa(4800,`code`),bT(4801,`workflow`),cf(),bT(4802,`, `),Aa(4803,`code`),bT(4804,`limit`),cf(),bT(4805,`, `),Aa(4806,`code`),bT(4807,`offset`),cf(),bT(4808,`), `),Aa(4809,`code`),bT(4810,`remove(id)`),cf(),bT(4811,`, `),Aa(4812,`code`),bT(4813,`pause(id)`),cf(),bT(4814,` and `),Aa(4815,`code`),bT(4816,`resume(id)`),cf(),bT(4817,` (neither re-encrypts the stored input), `),Aa(4818,`code`),bT(4819,`trigger(id)`),cf(),bT(4820,` (in a process that registers the workflow, unless the schedule pins a `),Aa(4821,`code`),bT(4822,`version`),cf(),bT(4823,`), and `),Aa(4824,`code`),bT(4825,`preview(schedule, options)`),cf(),bT(4826,` (a schedule's id or timing; `),Aa(4827,`code`),bT(4828,`from`),cf(),bT(4829,`, and `),Aa(4830,`code`),bT(4831,`count`),cf(),bT(4832,`, default `),Aa(4833,`code`),bT(4834,`10`),cf(),bT(4835,`)`),cf(),Aa(4836,`td`)(4837,`a`,86),bT(4838,`Run workflows on a schedule`),cf()()(),Aa(4839,`tr`)(4840,`td`)(4841,`code`),bT(4842,`@StartOn(event, options)`),cf()(),Aa(4843,`td`)(4844,`code`),bT(4845,`id`),cf(),bT(4846,` (required), `),Aa(4847,`code`),bT(4848,`input`),cf(),bT(4849,` (default the event), `),Aa(4850,`code`),bT(4851,`priority`),cf(),bT(4852,`, `),Aa(4853,`code`),bT(4854,`concurrencyKey`),cf(),bT(4855,`, `),Aa(4856,`code`),bT(4857,`rateLimitKey`),cf(),bT(4858,` (as `),Aa(4859,`code`),bT(4860,`start()`),cf(),bT(4861,`'s: a value, or a function of the event, where `),Aa(4862,`code`),bT(4863,`undefined`),cf(),bT(4864,` leaves the default)`),cf(),Aa(4865,`td`)(4866,`a`,47),bT(4867,`With CQRS`),cf()()(),Aa(4868,`tr`)(4869,`td`)(4870,`code`),bT(4871,`@SignalOn(event, options)`),cf()(),Aa(4872,`td`)(4873,`code`),bT(4874,`signal`),cf(),bT(4875,`, `),Aa(4876,`code`),bT(4877,`key`),cf(),bT(4878,`, `),Aa(4879,`code`),bT(4880,`id`),cf(),bT(4881,`, `),Aa(4882,`code`),bT(4883,`payload`),cf(),bT(4884,` (default the event)`),cf(),Aa(4885,`td`)(4886,`a`,47),bT(4887,`With CQRS`),cf()()(),Aa(4888,`tr`)(4889,`td`)(4890,`code`),bT(4891,`EventBus.publish(event, context)`),cf(),bT(4892,`, `),Aa(4893,`code`),bT(4894,`publishAll(events, context)`),cf(),bT(4895,`, an aggregate's `),Aa(4896,`code`),bT(4897,`commit(context)`),cf(),bT(4898,` (`),Aa(4899,`code`),bT(4900,`@nestjs/cqrs`),cf(),bT(4901,` 12.1 or later)`),cf(),Aa(4902,`td`)(4903,`code`),bT(4904,`transaction`),cf(),bT(4905,`, read from the dispatcher context once `),Aa(4906,`code`),bT(4907,`WorkflowsCqrsModule`),cf(),bT(4908,` is imported`),cf(),Aa(4909,`td`)(4910,`a`,47),bT(4911,`With CQRS`),cf()()()()(),Aa(4912,`p`),bT(4913,`A step's function receives `),Aa(4914,`code`),bT(4915,`idempotencyKey`),cf(),bT(4916,`, `),Aa(4917,`code`),bT(4918,`attempt`),cf(),bT(4919,`, `),Aa(4920,`code`),bT(4921,`signal`),cf(),bT(4922,`, `),Aa(4923,`code`),bT(4924,`progress`),cf(),bT(4925,` and `),Aa(4926,`code`),bT(4927,`heartbeat()`),cf(),bT(4928,`; a compensation receives the same, plus the reason the workflow is being undone.`),cf(),Aa(4929,`p`),bT(4930,`A schedule, declared in `),Aa(4931,`code`),bT(4932,`@Workflow()`),cf(),bT(4933,` or saved with `),Aa(4934,`code`),bT(4935,`upsert()`),cf(),bT(4936,`, takes these options:`),cf(),Aa(4937,`table`)(4938,`thead`)(4939,`tr`)(4940,`th`),bT(4941,`Option`),cf(),Aa(4942,`th`),bT(4943,`Default`),cf(),Aa(4944,`th`),bT(4945,`Meaning`),cf()()(),Aa(4946,`tbody`)(4947,`tr`)(4948,`td`)(4949,`code`),bT(4950,`id`),cf()(),Aa(4951,`td`),bT(4952,`Required in `),Aa(4953,`code`),bT(4954,`@Workflow()`),cf()(),Aa(4955,`td`),bT(4956,`Unique across the application: letters, digits, `),Aa(4957,`code`),bT(4958,`.`),cf(),bT(4959,`, `),Aa(4960,`code`),bT(4961,`:`),cf(),bT(4962,`, `),Aa(4963,`code`),bT(4964,`_`),cf(),bT(4965,` and `),Aa(4966,`code`),bT(4967,`-`),cf(),bT(4968,`. `),Aa(4969,`code`),bT(4970,`upsert()`),cf(),bT(4971,` takes it as its first argument`),cf()(),Aa(4972,`tr`)(4973,`td`)(4974,`code`),bT(4975,`cron`),cf(),bT(4976,`, `),Aa(4977,`code`),bT(4978,`every`),cf(),bT(4979,`, `),Aa(4980,`code`),bT(4981,`rrule`),cf()(),Aa(4982,`td`),bT(4983,`One of the three is required`),cf(),Aa(4984,`td`),bT(4985,`A cron expression of 5 fields, or 6 with the seconds first; an interval of at least a second, counted from `),Aa(4986,`code`),bT(4987,`startAt`),cf(),bT(4988,`; or an RFC 5545 recurrence rule`),cf()(),Aa(4989,`tr`)(4990,`td`)(4991,`code`),bT(4992,`tz`),cf()(),Aa(4993,`td`)(4994,`code`),bT(4995,`'UTC'`),cf()(),Aa(4996,`td`),bT(4997,`The IANA time zone of `),Aa(4998,`code`),bT(4999,`cron`),cf(),bT(5e3,` and `),Aa(5001,`code`),bT(5002,`rrule`),cf(),bT(5003,`. Not with `),Aa(5004,`code`),bT(5005,`every`),cf()()(),Aa(5006,`tr`)(5007,`td`)(5008,`code`),bT(5009,`startAt`),cf(),bT(5010,`, `),Aa(5011,`code`),bT(5012,`endAt`),cf()(),Aa(5013,`td`),bT(5014,`None`),cf(),Aa(5015,`td`),bT(5016,`No occurrence before `),Aa(5017,`code`),bT(5018,`startAt`),cf(),bT(5019,`, or after `),Aa(5020,`code`),bT(5021,`endAt`),cf()()(),Aa(5022,`tr`)(5023,`td`)(5024,`code`),bT(5025,`limit`),cf()(),Aa(5026,`td`),bT(5027,`None`),cf(),Aa(5028,`td`),bT(5029,`How many occurrences it starts before it ends`),cf()(),Aa(5030,`tr`)(5031,`td`)(5032,`code`),bT(5033,`missed`),cf()(),Aa(5034,`td`)(5035,`code`),bT(5036,`'skip'`),cf()(),Aa(5037,`td`),bT(5038,`Occurrences no worker was up to start: `),Aa(5039,`code`),bT(5040,`'skip'`),cf(),bT(5041,`, `),Aa(5042,`code`),bT(5043,`'once'`),cf(),bT(5044,` or `),Aa(5045,`code`),bT(5046,`'all'`),cf()()(),Aa(5047,`tr`)(5048,`td`)(5049,`code`),bT(5050,`overlap`),cf()(),Aa(5051,`td`)(5052,`code`),bT(5053,`'skip'`),cf()(),Aa(5054,`td`),bT(5055,`An occurrence due while an instance it started is unfinished: `),Aa(5056,`code`),bT(5057,`'skip'`),cf(),bT(5058,`, `),Aa(5059,`code`),bT(5060,`'allow'`),cf(),bT(5061,`, `),Aa(5062,`code`),bT(5063,`'cancel-previous'`),cf(),bT(5064,` or `),Aa(5065,`code`),bT(5066,`'buffer-one'`),cf()()(),Aa(5067,`tr`)(5068,`td`)(5069,`code`),bT(5070,`priority`),cf()(),Aa(5071,`td`),bT(5072,`None`),cf(),Aa(5073,`td`),bT(5074,`The priority of the instances it starts`),cf()(),Aa(5075,`tr`)(5076,`td`)(5077,`code`),bT(5078,`input`),cf()(),Aa(5079,`td`),bT(5080,`None`),cf(),Aa(5081,`td`),bT(5082,`The instances' input: a JSON value, or in `),Aa(5083,`code`),bT(5084,`@Workflow()`),cf(),bT(5085,` a function of the occurrence`),cf()()()(),Aa(5086,`h5`,129)(5087,`span`),bT(5088,`Events`),cf()(),Aa(5089,`p`)(5090,`code`),bT(5091,`WorkflowEvents.events$`),cf(),bT(5092,` emits each event, and publishes it on the `),Aa(5093,`code`),bT(5094,`nestjs:workflows:<type>`),cf(),bT(5095,` diagnostics channel, for example `),Aa(5096,`code`),bT(5097,`nestjs:workflows:step-failed`),cf(),bT(5098,`. Every payload has `),Aa(5099,`code`),bT(5100,`type`),cf(),bT(5101,`, `),Aa(5102,`code`),bT(5103,`id`),cf(),bT(5104,` (the instance), `),Aa(5105,`code`),bT(5106,`workflow`),cf(),bT(5107,`, `),Aa(5108,`code`),bT(5109,`version`),cf(),bT(5110,` and `),Aa(5111,`code`),bT(5112,`at`),cf(),bT(5113,` (the engine's time, in milliseconds).`),cf(),Aa(5114,`table`)(5115,`thead`)(5116,`tr`)(5117,`th`),bT(5118,`Event`),cf(),Aa(5119,`th`),bT(5120,`Other fields`),cf(),Aa(5121,`th`),bT(5122,`When`),cf()()(),Aa(5123,`tbody`)(5124,`tr`)(5125,`td`)(5126,`code`),bT(5127,`workflow-started`),cf()(),Aa(5128,`td`),bT(5129,`None`),cf(),Aa(5130,`td`),bT(5131,`The first execution of an instance began`),cf()(),Aa(5132,`tr`)(5133,`td`)(5134,`code`),bT(5135,`workflow-resumed`),cf()(),Aa(5136,`td`)(5137,`code`),bT(5138,`run`),cf()(),Aa(5139,`td`),bT(5140,`A later execution began: after a wait, a sleep, a retry or a crash`),cf()(),Aa(5141,`tr`)(5142,`td`)(5143,`code`),bT(5144,`workflow-suspended`),cf()(),Aa(5145,`td`)(5146,`code`),bT(5147,`wakeAt`),cf(),bT(5148,`, `),Aa(5149,`code`),bT(5150,`waits`),cf()(),Aa(5151,`td`),bT(5152,`An execution parked the instance`),cf()(),Aa(5153,`tr`)(5154,`td`)(5155,`code`),bT(5156,`step-completed`),cf()(),Aa(5157,`td`)(5158,`code`),bT(5159,`step`),cf(),bT(5160,`, `),Aa(5161,`code`),bT(5162,`attempt`),cf(),bT(5163,`, `),Aa(5164,`code`),bT(5165,`durationMs`),cf()(),Aa(5166,`td`),bT(5167,`A step attempt succeeded`),cf()(),Aa(5168,`tr`)(5169,`td`)(5170,`code`),bT(5171,`step-failed`),cf()(),Aa(5172,`td`)(5173,`code`),bT(5174,`step`),cf(),bT(5175,`, `),Aa(5176,`code`),bT(5177,`attempt`),cf(),bT(5178,`, `),Aa(5179,`code`),bT(5180,`error`),cf(),bT(5181,`, `),Aa(5182,`code`),bT(5183,`retryAt`),cf()(),Aa(5184,`td`),bT(5185,`A step attempt failed; `),Aa(5186,`code`),bT(5187,`retryAt`),cf(),bT(5188,` is `),Aa(5189,`code`),bT(5190,`null`),cf(),bT(5191,` when the step gave up`),cf()(),Aa(5192,`tr`)(5193,`td`)(5194,`code`),bT(5195,`signal-received`),cf()(),Aa(5196,`td`)(5197,`code`),bT(5198,`wait`),cf(),bT(5199,`, `),Aa(5200,`code`),bT(5201,`signal`),cf(),bT(5202,`, `),Aa(5203,`code`),bT(5204,`signalId`),cf()(),Aa(5205,`td`),bT(5206,`A wait took a signal`),cf()(),Aa(5207,`tr`)(5208,`td`)(5209,`code`),bT(5210,`signal-timed-out`),cf()(),Aa(5211,`td`)(5212,`code`),bT(5213,`wait`),cf(),bT(5214,`, `),Aa(5215,`code`),bT(5216,`signal`),cf()(),Aa(5217,`td`),bT(5218,`A wait's deadline passed without a matching signal`),cf()(),Aa(5219,`tr`)(5220,`td`)(5221,`code`),bT(5222,`workflow-compensating`),cf()(),Aa(5223,`td`)(5224,`code`),bT(5225,`error`),cf()(),Aa(5226,`td`),bT(5227,`The instance failed or was cancelled, and starts undoing`),cf()(),Aa(5228,`tr`)(5229,`td`)(5230,`code`),bT(5231,`step-compensated`),cf()(),Aa(5232,`td`)(5233,`code`),bT(5234,`step`),cf(),bT(5235,`, `),Aa(5236,`code`),bT(5237,`attempt`),cf()(),Aa(5238,`td`),bT(5239,`A step's compensation completed`),cf()(),Aa(5240,`tr`)(5241,`td`)(5242,`code`),bT(5243,`workflow-completed`),cf()(),Aa(5244,`td`)(5245,`code`),bT(5246,`output`),cf()(),Aa(5247,`td`),bT(5248,`The instance completed`),cf()(),Aa(5249,`tr`)(5250,`td`)(5251,`code`),bT(5252,`workflow-failed`),cf()(),Aa(5253,`td`)(5254,`code`),bT(5255,`error`),cf()(),Aa(5256,`td`),bT(5257,`The instance failed, after its compensations ran`),cf()(),Aa(5258,`tr`)(5259,`td`)(5260,`code`),bT(5261,`workflow-cancelled`),cf()(),Aa(5262,`td`)(5263,`code`),bT(5264,`error`),cf()(),Aa(5265,`td`),bT(5266,`The instance was cancelled, after its compensations ran; `),Aa(5267,`code`),bT(5268,`error.message`),cf(),bT(5269,` is the reason`),cf()(),Aa(5270,`tr`)(5271,`td`)(5272,`code`),bT(5273,`workflow-compensation-failed`),cf()(),Aa(5274,`td`)(5275,`code`),bT(5276,`error`),cf()(),Aa(5277,`td`),bT(5278,`A compensation gave up halfway. Needs a person`),cf()(),Aa(5279,`tr`)(5280,`td`)(5281,`code`),bT(5282,`journal-large`),cf()(),Aa(5283,`td`)(5284,`code`),bT(5285,`entries`),cf(),bT(5286,`, `),Aa(5287,`code`),bT(5288,`bytes`),cf()(),Aa(5289,`td`),bT(5290,`The journal reached `),Aa(5291,`code`),bT(5292,`journal.warnEntries`),cf(),bT(5293,` or `),Aa(5294,`code`),bT(5295,`journal.warnBytes`),cf(),bT(5296,`; once per instance`),cf()(),Aa(5297,`tr`)(5298,`td`)(5299,`code`),bT(5300,`workflow-retried`),cf()(),Aa(5301,`td`)(5302,`code`),bT(5303,`from`),cf(),bT(5304,`, `),Aa(5305,`code`),bT(5306,`error`),cf()(),Aa(5307,`td`)(5308,`code`),bT(5309,`retry()`),cf(),bT(5310,` reopened a `),Aa(5311,`code`),bT(5312,`failed`),cf(),bT(5313,` or `),Aa(5314,`code`),bT(5315,`compensation_failed`),cf(),bT(5316,` instance; `),Aa(5317,`code`),bT(5318,`error`),cf(),bT(5319,` is the one it had`),cf()(),Aa(5320,`tr`)(5321,`td`)(5322,`code`),bT(5323,`workflow-deleted`),cf()(),Aa(5324,`td`)(5325,`code`),bT(5326,`status`),cf()(),Aa(5327,`td`)(5328,`code`),bT(5329,`delete()`),cf(),bT(5330,` removed an instance; `),Aa(5331,`code`),bT(5332,`status`),cf(),bT(5333,` is the one it had`),cf()(),Aa(5334,`tr`)(5335,`td`)(5336,`code`),bT(5337,`custom-status`),cf()(),Aa(5338,`td`)(5339,`code`),bT(5340,`status`),cf()(),Aa(5341,`td`),bT(5342,`A write changed the instance's custom status`),cf()(),Aa(5343,`tr`)(5344,`td`)(5345,`code`),bT(5346,`child-started`),cf()(),Aa(5347,`td`)(5348,`code`),bT(5349,`child`),cf(),bT(5350,`, `),Aa(5351,`code`),bT(5352,`childWorkflow`),cf(),bT(5353,`, `),Aa(5354,`code`),bT(5355,`childVersion`),cf()(),Aa(5356,`td`),bT(5357,`The instance started a child`),cf()(),Aa(5358,`tr`)(5359,`td`)(5360,`code`),bT(5361,`schedule-skipped`),cf()(),Aa(5362,`td`)(5363,`code`),bT(5364,`reason`),cf(),bT(5365,` (`),Aa(5366,`code`),bT(5367,`'missed'`),cf(),bT(5368,` or `),Aa(5369,`code`),bT(5370,`'overlap'`),cf(),bT(5371,`), `),Aa(5372,`code`),bT(5373,`from`),cf(),bT(5374,`, `),Aa(5375,`code`),bT(5376,`to`),cf()(),Aa(5377,`td`),bT(5378,`A schedule passed over occurrences. Its `),Aa(5379,`code`),bT(5380,`id`),cf(),bT(5381,` is the schedule's`),cf()()()(),Aa(5382,`p`),bT(5383,`An instance maps onto one trace, whichever processes run it over its days or weeks, so key the trace by the instance `),Aa(5384,`code`),bT(5385,`id`),cf(),bT(5386,`. The instance is the root span, from `),Aa(5387,`code`),bT(5388,`workflow-started`),cf(),bT(5389,` to its final event (`),Aa(5390,`code`),bT(5391,`workflow-completed`),cf(),bT(5392,`, `),Aa(5393,`code`),bT(5394,`workflow-failed`),cf(),bT(5395,`, `),Aa(5396,`code`),bT(5397,`workflow-cancelled`),cf(),bT(5398,` or `),Aa(5399,`code`),bT(5400,`workflow-compensation-failed`),cf(),bT(5401,`). Each execution is a child span, from `),Aa(5402,`code`),bT(5403,`workflow-started`),cf(),bT(5404,` or `),Aa(5405,`code`),bT(5406,`workflow-resumed`),cf(),bT(5407,` to `),Aa(5408,`code`),bT(5409,`workflow-suspended`),cf(),bT(5410,` or the final event. Each step attempt is a span inside it that ends at `),Aa(5411,`code`),bT(5412,`step-completed`),cf(),bT(5413,`, whose `),Aa(5414,`code`),bT(5415,`durationMs`),cf(),bT(5416,` gives its start, or at `),Aa(5417,`code`),bT(5418,`step-failed`),cf(),bT(5419,`. The other events are events on the execution's span. Tracing tools subscribe to the diagnostics channels, so this needs no code in your application.`),cf(),Aa(5420,`h5`,130)(5421,`span`),bT(5422,`Errors`),cf()(),Aa(5423,`p`),bT(5424,`The package's errors extend `),Aa(5425,`code`),bT(5426,`WorkflowError`),cf(),bT(5427,`, except the two that are control flow or yours to throw. The ones found on a failed instance are there by name, in its `),Aa(5428,`code`),bT(5429,`error`),cf(),bT(5430,`.`),cf(),Aa(5431,`table`)(5432,`thead`)(5433,`tr`)(5434,`th`),bT(5435,`Error`),cf(),Aa(5436,`th`),bT(5437,`HTTP status`),cf(),Aa(5438,`th`),bT(5439,`Raised when`),cf()()(),Aa(5440,`tbody`)(5441,`tr`)(5442,`td`)(5443,`code`),bT(5444,`WorkflowIdConflictError`),cf()(),Aa(5445,`td`)(5446,`code`),bT(5447,`409`),cf()(),Aa(5448,`td`)(5449,`code`),bT(5450,`start()`),cf(),bT(5451,` with an existing id, but a different workflow or input, `),Aa(5452,`code`),bT(5453,`signal()`),cf(),bT(5454,` with an `),Aa(5455,`code`),bT(5456,`id`),cf(),bT(5457,` already used for the same signal with another key, or `),Aa(5458,`code`),bT(5459,`startChild()`),cf(),bT(5460,` with an id that another workflow, parent or input uses`),cf()(),Aa(5461,`tr`)(5462,`td`)(5463,`code`),bT(5464,`WorkflowNotFoundError`),cf()(),Aa(5465,`td`)(5466,`code`),bT(5467,`404`),cf()(),Aa(5468,`td`)(5469,`code`),bT(5470,`cancel()`),cf(),bT(5471,`, `),Aa(5472,`code`),bT(5473,`terminate()`),cf(),bT(5474,`, `),Aa(5475,`code`),bT(5476,`retry()`),cf(),bT(5477,`, `),Aa(5478,`code`),bT(5479,`delete()`),cf(),bT(5480,` or `),Aa(5481,`code`),bT(5482,`result()`),cf(),bT(5483,` of an unknown id, a schedule method with an unknown schedule id, or `),Aa(5484,`code`),bT(5485,`start()`),cf(),bT(5486,` or a schedule's `),Aa(5487,`code`),bT(5488,`trigger()`),cf(),bT(5489,` of a workflow this application can't resolve`),cf()(),Aa(5490,`tr`)(5491,`td`)(5492,`code`),bT(5493,`WorkflowStateError`),cf()(),Aa(5494,`td`)(5495,`code`),bT(5496,`409`),cf()(),Aa(5497,`td`)(5498,`code`),bT(5499,`retry()`),cf(),bT(5500,` of an instance that isn't `),Aa(5501,`code`),bT(5502,`failed`),cf(),bT(5503,` or `),Aa(5504,`code`),bT(5505,`compensation_failed`),cf(),bT(5506,`, or whose compensations ran; `),Aa(5507,`code`),bT(5508,`delete()`),cf(),bT(5509,` of an unfinished instance without `),Aa(5510,`code`),bT(5511,`force`),cf(),bT(5512,`; either racing another change to the instance; `),Aa(5513,`code`),bT(5514,`upsert()`),cf(),bT(5515,` or `),Aa(5516,`code`),bT(5517,`remove()`),cf(),bT(5518,` of a declared schedule`),cf()(),Aa(5519,`tr`)(5520,`td`)(5521,`code`),bT(5522,`NonRetryableStepError`),cf()(),Aa(5523,`td`),bT(5524,`None`),cf(),Aa(5525,`td`),bT(5526,`You throw it from a step to fail the step without retrying`),cf()(),Aa(5527,`tr`)(5528,`td`)(5529,`code`),bT(5530,`StepFailedError`),cf()(),Aa(5531,`td`),bT(5532,`None`),cf(),Aa(5533,`td`),bT(5534,`Inside `),Aa(5535,`code`),bT(5536,`run()`),cf(),bT(5537,`, a step gave up; `),Aa(5538,`code`),bT(5539,`step`),cf(),bT(5540,`, `),Aa(5541,`code`),bT(5542,`attempts`),cf(),bT(5543,`, and the original error's name and message as `),Aa(5544,`code`),bT(5545,`cause`),cf()()(),Aa(5546,`tr`)(5547,`td`)(5548,`code`),bT(5549,`StepTimeoutError`),cf()(),Aa(5550,`td`),bT(5551,`None`),cf(),Aa(5552,`td`),bT(5553,`A step attempt ran past its `),Aa(5554,`code`),bT(5555,`timeout`),cf(),bT(5556,` or `),Aa(5557,`code`),bT(5558,`heartbeatTimeout`),cf(),bT(5559,`. Retried`),cf()(),Aa(5560,`tr`)(5561,`td`)(5562,`code`),bT(5563,`WorkflowFailedError`),cf()(),Aa(5564,`td`),bT(5565,`None`),cf(),Aa(5566,`td`)(5567,`code`),bT(5568,`ctx.fail()`),cf(),bT(5569,` failed the instance. Also what `),Aa(5570,`code`),bT(5571,`result()`),cf(),bT(5572,` and `),Aa(5573,`code`),bT(5574,`startAndWait()`),cf(),bT(5575,` reject with for an instance that ended without completing, with its `),Aa(5576,`code`),bT(5577,`instanceId`),cf(),bT(5578,`, its `),Aa(5579,`code`),bT(5580,`status`),cf(),bT(5581,` and its error as `),Aa(5582,`code`),bT(5583,`cause`),cf()()(),Aa(5584,`tr`)(5585,`td`)(5586,`code`),bT(5587,`ChildWorkflowFailedError`),cf()(),Aa(5588,`td`),bT(5589,`None`),cf(),Aa(5590,`td`),bT(5591,`A child failed, was cancelled or was terminated: what `),Aa(5592,`code`),bT(5593,`ctx.executeChild()`),cf(),bT(5594,` and a child's `),Aa(5595,`code`),bT(5596,`result()`),cf(),bT(5597,` throw in the parent, with the child's `),Aa(5598,`code`),bT(5599,`workflow`),cf(),bT(5600,`, `),Aa(5601,`code`),bT(5602,`instanceId`),cf(),bT(5603,`, `),Aa(5604,`code`),bT(5605,`status`),cf(),bT(5606,` and error as `),Aa(5607,`code`),bT(5608,`cause`),cf(),bT(5609,`. Extends `),Aa(5610,`code`),bT(5611,`WorkflowFailedError`),cf()()(),Aa(5612,`tr`)(5613,`td`)(5614,`code`),bT(5615,`WorkflowResultTimeoutError`),cf()(),Aa(5616,`td`),bT(5617,`None`),cf(),Aa(5618,`td`)(5619,`code`),bT(5620,`result()`),cf(),bT(5621,` or `),Aa(5622,`code`),bT(5623,`startAndWait()`),cf(),bT(5624,` waited past its `),Aa(5625,`code`),bT(5626,`timeout`),cf(),bT(5627,`, with the `),Aa(5628,`code`),bT(5629,`instanceId`),cf(),bT(5630,` and `),Aa(5631,`code`),bT(5632,`timeoutMs`),cf(),bT(5633,`. The instance keeps running`),cf()(),Aa(5634,`tr`)(5635,`td`)(5636,`code`),bT(5637,`WorkflowDefinitionError`),cf()(),Aa(5638,`td`),bT(5639,`None`),cf(),Aa(5640,`td`),bT(5641,`A name used twice in one run, or a `),Aa(5642,`code`),bT(5643,`ctx`),cf(),bT(5644,` call inside a step. The instance fails without compensation`),cf()(),Aa(5645,`tr`)(5646,`td`)(5647,`code`),bT(5648,`WorkflowNonDeterminismError`),cf()(),Aa(5649,`td`),bT(5650,`None`),cf(),Aa(5651,`td`),bT(5652,`A deploy renamed, removed or reordered steps that running instances journaled. Extends `),Aa(5653,`code`),bT(5654,`WorkflowDefinitionError`),cf(),bT(5655,`. `),Aa(5656,`a`,121),bT(5657,`Deploy changes safely`),cf()()(),Aa(5658,`tr`)(5659,`td`)(5660,`code`),bT(5661,`WorkflowInterrupt`),cf()(),Aa(5662,`td`),bT(5663,`None`),cf(),Aa(5664,`td`),bT(5665,`The engine's control flow (a suspension, a cancel). Rethrow it; `),Aa(5666,`code`),bT(5667,`isWorkflowInterrupt()`),cf(),bT(5668,` identifies it`),cf()(),Aa(5669,`tr`)(5670,`td`)(5671,`code`),bT(5672,`WorkflowTimeoutError`),cf()(),Aa(5673,`td`),bT(5674,`None`),cf(),Aa(5675,`td`),bT(5676,`Only by name, on an instance that ran past its run timeout: it compensated and failed`),cf()(),Aa(5677,`tr`)(5678,`td`)(5679,`code`),bT(5680,`WorkflowCancelledError`),cf()(),Aa(5681,`td`),bT(5682,`None`),cf(),Aa(5683,`td`),bT(5684,`Only by name, on a cancelled instance: its message is the reason`),cf()(),Aa(5685,`tr`)(5686,`td`)(5687,`code`),bT(5688,`WorkflowTerminatedError`),cf()(),Aa(5689,`td`),bT(5690,`None`),cf(),Aa(5691,`td`),bT(5692,`Only by name, on a terminated instance, which ends as `),Aa(5693,`code`),bT(5694,`cancelled`),cf(),bT(5695,`: its message is the reason`),cf()(),Aa(5696,`tr`)(5697,`td`)(5698,`code`),bT(5699,`WorkflowDeletedError`),cf()(),Aa(5700,`td`),bT(5701,`None`),cf(),Aa(5702,`td`),bT(5703,`Only by name, as the cause of a parent's `),Aa(5704,`code`),bT(5705,`ChildWorkflowFailedError`),cf(),bT(5706,`, when `),Aa(5707,`code`),bT(5708,`delete()`),cf(),bT(5709,` with `),Aa(5710,`code`),bT(5711,`force`),cf(),bT(5712,` removed the child before it ended`),cf()(),Aa(5713,`tr`)(5714,`td`)(5715,`code`),bT(5716,`WorkflowJournalLimitError`),cf()(),Aa(5717,`td`),bT(5718,`None`),cf(),Aa(5719,`td`),bT(5720,`Only by name, on an instance whose journal reached `),Aa(5721,`code`),bT(5722,`journal.maxEntries`),cf(),bT(5723,` or `),Aa(5724,`code`),bT(5725,`journal.maxBytes`),cf(),bT(5726,`: it compensated and failed`),cf()(),Aa(5727,`tr`)(5728,`td`)(5729,`code`),bT(5730,`WorkflowSchemaError`),cf()(),Aa(5731,`td`),bT(5732,`None`),cf(),Aa(5733,`td`),bT(5734,`The schema of `),Aa(5735,`code`),bT(5736,`PostgresWorkflowStore`),cf(),bT(5737,` or `),Aa(5738,`code`),bT(5739,`MySqlWorkflowStore`),cf(),bT(5740,` is behind the package's migrations while `),Aa(5741,`code`),bT(5742,`migrate`),cf(),bT(5743,` is off, or applying them failed (`),Aa(5744,`code`),bT(5745,`cause`),cf(),bT(5746,`; on MySQL, the message names the statement where the next run resumes): startup and every call fail until it's fixed. With the `),Aa(5747,`code`),bT(5748,`schema`),cf(),bT(5749,`, its `),Aa(5750,`code`),bT(5751,`version`),cf(),bT(5752,` and the `),Aa(5753,`code`),bT(5754,`requiredVersion`),cf(),bT(5755,`. From `),Aa(5756,`code`),bT(5757,`@nestjs/workflows/postgres`),cf(),bT(5758,` and `),Aa(5759,`code`),bT(5760,`@nestjs/workflows/mysql`),cf()()()()(),Aa(5761,`p`)(5762,`code`),bT(5763,`MySqlWorkflowStore`),cf(),bT(5764,` also rejects an id, name or key longer than its column with a `),Aa(5765,`code`),bT(5766,`RangeError`),cf(),bT(5767,`, before any SQL (`),Aa(5768,`a`,131),bT(5769,`MySQL store`),cf(),bT(5770,`). A deadlock in your transaction reaches you as MySQL's error 1213, which the store doesn't retry, since it rolled back your writes too.`),cf()(),Aa(5771,`a`,132),Wa(5772,`i`,133),Aa(5773,`span`),bT(5774,`Edit on GitHub`),cf()()()),c&2){let j=tT(118),x=tT(148),u=tT(228),M=tT(411),S=tT(439),P=tT(520),E=tT(555),L=tT(605),f=tT(741),D=tT(768),y=tT(836),_=tT(875),w=tT(914),g=tT(1001),z=tT(1050),q=tT(1067),W=tT(1106),N=tT(1117),B=tT(1161),H=tT(1181),Q=tT(1198),F=tT(1266),K=tT(1380),U=tT(1722),J=tT(1791),Y=tT(1827),V=tT(1840),X=tT(1952),Z=tT(2017),ee=tT(2177),te=tT(2296),ne=tT(2535),ie=tT(2549),re=tT(2565),ae=tT(2630),oe=tT(2647),se=tT(2704),xe=tT(2808),ue=tT(3069),Se=tT(4327);zC(115),hf(` `,jT(116,40,`orders/order`,j.isJsActive),`
`),zC(30),hf(` `,jT(146,43,`app.module`,x.isJsActive),`
`),zC(80),hf(` `,jT(226,46,`main`,u.isJsActive),`
`),zC(183),hf(` `,jT(409,49,`typeorm/migrations/1790801342207-WorkflowStore`,M.isJsActive),`
`),zC(28),hf(` `,jT(437,52,`typeorm/mysql-migrations/1790801342207-WorkflowStore`,S.isJsActive),`
`),zC(81),hf(` `,jT(518,55,`typeorm/app.module`,P.isJsActive),`
`),zC(35),hf(` `,jT(553,58,`typeorm/orders.service`,E.isJsActive),`
`),zC(50),hf(` `,jT(603,61,`mysql/app.module`,L.isJsActive),`
`),zC(136),hf(` `,jT(739,64,`payments/payments.service`,f.isJsActive),`
`),zC(27),hf(` `,jT(766,67,`orders/order-fulfilment.workflow`,D.isJsActive),`
`),zC(68),hf(` `,jT(834,70,`orders/order-fulfilment.workflow`,y.isJsActive),`
`),zC(39),hf(` `,jT(873,73,`orders/orders.service`,_.isJsActive),`
`),zC(39),hf(` `,jT(912,76,`orders/orders.controller`,w.isJsActive),`
`),zC(87),hf(` `,jT(999,79,`orders/order-fulfilment.workflow`,g.isJsActive),`
`),zC(49),hf(` `,jT(1048,82,`shipping/carrier-event`,z.isJsActive),`
`),zC(17),hf(` `,jT(1065,85,`orders/order-fulfilment.workflow`,q.isJsActive),`
`),zC(39),hf(` `,jT(1104,88,`orders/orders.service`,W.isJsActive),`
`),zC(11),hf(` `,jT(1115,91,`shipping/carrier-webhook.controller`,N.isJsActive),`
`),zC(44),hf(` `,jT(1159,94,`shipping/carrier-event`,B.isJsActive),`
`),zC(20),hf(` `,jT(1179,97,`shipping/carrier-webhook.controller`,H.isJsActive),`
`),zC(17),hf(` `,jT(1196,100,`orders/order-fulfilment.workflow`,Q.isJsActive),`
`),zC(68),hf(` `,jT(1264,103,`orders/order-fulfilment.workflow`,F.isJsActive),`
`),zC(114),hf(` `,jT(1378,106,`orders/orders.controller`,K.isJsActive),`
`),zC(342),hf(` `,jT(1720,109,`orders/order-fulfilment.workflow`,U.isJsActive),`
`),zC(69),hf(` `,jT(1789,112,`orders/orders.service`,J.isJsActive),`
`),zC(36),hf(` `,jT(1825,115,`shipping/shipment.workflow`,Y.isJsActive),`
`),zC(13),hf(` `,jT(1838,118,`orders/order-fulfilment.workflow`,V.isJsActive),`
`),zC(112),hf(` `,jT(1950,121,`invoices/invoice-batch.workflow`,X.isJsActive),`
`),zC(65),hf(` `,jT(2015,124,`invoices/invoice-batch.workflow`,Z.isJsActive),`
`),zC(160),hf(` `,jT(2175,127,`invoices/invoices.controller`,ee.isJsActive),`
`),zC(119),hf(` `,jT(2294,130,`orders/order-fulfilment-v2.workflow`,te.isJsActive),`
`),zC(239),hf(` `,jT(2533,133,`test/support`,ne.isJsActive),`
`),zC(14),hf(` `,jT(2547,136,`test/order-fulfilment.spec`,ie.isJsActive),`
`),zC(16),hf(` `,jT(2563,139,`test/crash-recovery.spec`,re.isJsActive),`
`),zC(65),hf(` `,jT(2628,142,`app.module`,ae.isJsActive),`
`),zC(17),hf(` `,jT(2645,145,`orders/order-fulfilment.workflow`,oe.isJsActive),`
`),zC(57),hf(` `,jT(2702,148,`orders/place-order.handler`,se.isJsActive),`
`),zC(104),hf(` `,jT(2806,151,`orders/order-fulfilment.workflow`,xe.isJsActive),`
`),zC(261),hf(` `,jT(3067,154,`app.module`,ue.isJsActive),`
`),zC(1258),hf(` `,jT(4325,157,`test/drizzle-workflow.store.spec`,Se.isJsActive),`
`)}},dependencies:[Lt,Jc,ln,u,g],encapsulation:2})}return d})();var ct=[{path:`resilience`,component:ce,data:{title:`Resilience`}},{path:`idempotency`,component:le,data:{title:`Idempotency keys`}},{path:`outbox`,component:me,data:{title:`Transactional outbox`}},{path:`workflows`,component:pe,data:{title:`Durable workflows`}},{path:`locks`,component:de,data:{title:`Distributed locks`}},{path:`terminus`,component:he,data:{title:`Health checks`}}];export{ct as RELIABILITY_ROUTES};