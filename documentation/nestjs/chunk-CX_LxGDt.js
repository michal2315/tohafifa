import{C as hf,M as xy,N as zC,P as zy,T as jT,_ as Wa,a as u,b as cf,c as l,d as Jc,i as g,k as tT,l as Aa,m as LT,n as ln,p as Ky,r as xt,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var G=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(c){return(l||(l=im(a)))(c||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-adapter`]],features:[xy],decls:219,vars:12,consts:[[`contentReference`,``],[`appaa6bf22f9a3b70df21fd5cccc9043664cb50d5a6`,``],[`appa26da6ae07895f552388e2919fce1b730447e475`,``],[1,`content`],[1,`content-inner`],[`id`,`adapters`],[`appAnchor`,``,`id`,`extend-socketio`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/socketio/socket.io`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://socket.io/docs/v4/using-multiple-nodes/#enabling-sticky-session`],[1,`language-bash`],[1,`language-typescript`],[`appAnchor`,``,`id`,`ws-library`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/websockets/ws`],[1,`info`],[`appAnchor`,``,`id`,`advanced-custom-adapter`],[1,`with-heading`],[1,`filename`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/16-gateways-ws`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/adapter.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,c){if(d&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`Adapters`),cf(),Aa(5,`p`),bT(6,`The WebSockets module is platform-agnostic, so you can bring your own library (or even a native implementation) by implementing the `),Aa(7,`code`),bT(8,`WebSocketAdapter`),cf(),bT(9,` interface. The interface requires the methods described in the following table:`),cf(),Aa(10,`table`)(11,`tr`)(12,`td`)(13,`code`),bT(14,`create`),cf()(),Aa(15,`td`),bT(16,`Creates a socket server instance based on the passed arguments`),cf()(),Aa(17,`tr`)(18,`td`)(19,`code`),bT(20,`bindClientConnect`),cf()(),Aa(21,`td`),bT(22,`Binds the client connection event`),cf()(),Aa(23,`tr`)(24,`td`)(25,`code`),bT(26,`bindClientDisconnect`),cf()(),Aa(27,`td`),bT(28,`Binds the client disconnection event (optional)`),cf()(),Aa(29,`tr`)(30,`td`)(31,`code`),bT(32,`bindMessageHandlers`),cf()(),Aa(33,`td`),bT(34,`Binds the incoming message to the corresponding message handler`),cf()(),Aa(35,`tr`)(36,`td`)(37,`code`),bT(38,`close`),cf()(),Aa(39,`td`),bT(40,`Terminates a server instance`),cf()()(),Aa(41,`h4`,6)(42,`span`),bT(43,`Extend socket.io`),cf()(),Aa(44,`p`),bT(45,`The `),Aa(46,`a`,7),bT(47,`socket.io`),cf(),bT(48,` package is wrapped in an `),Aa(49,`code`),bT(50,`IoAdapter`),cf(),bT(51,` class. You can extend this class to enhance the adapter's basic functionality. For example, suppose your application must broadcast events across multiple load-balanced instances of your web service. To support this, extend `),Aa(52,`code`),bT(53,`IoAdapter`),cf(),bT(54,` and override the single method responsible for instantiating new socket.io servers. First, install the required packages.`),cf(),Aa(55,`blockquote`,8)(56,`strong`),bT(57,`Warning`),cf(),bT(58,` To use socket.io with multiple load-balanced instances, you must either disable polling by setting `),Aa(59,`code`),bT(60,`transports: ['websocket']`),cf(),bT(61,` in your clients' socket.io configuration, or enable cookie-based routing (sticky sessions) in your load balancer. Redis alone is not enough. See `),Aa(62,`a`,9),bT(63,`Enabling sticky session`),cf(),bT(64,` in the socket.io documentation for more information.
`),cf(),Aa(65,`pre`)(66,`code`,10),bT(67,`
$ npm i --save redis socket.io @socket.io/redis-adapter
`),cf()(),Aa(68,`p`),bT(69,`Once the packages are installed, create a `),Aa(70,`code`),bT(71,`RedisIoAdapter`),cf(),bT(72,` class.`),cf(),Aa(73,`app-copy-button`)(74,`pre`)(75,`code`,11),bT(76,`
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

export class RedisIoAdapter extends IoAdapter {
  private adapterConstructor: ReturnType<typeof createAdapter>;

  async connectToRedis(): Promise<void> {
    const pubClient = createClient({ url: \`redis://localhost:6379\` });
    const subClient = pubClient.duplicate();

    await Promise.all([pubClient.connect(), subClient.connect()]);

    this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    server.adapter(this.adapterConstructor);
    return server;
  }
}
`),cf()()(),Aa(77,`p`),bT(78,`Then switch to your newly created Redis adapter.`),cf(),Aa(79,`app-copy-button`)(80,`pre`)(81,`code`,11),bT(82,`
const app = await NestFactory.create(AppModule);
const redisIoAdapter = new RedisIoAdapter(app);
await redisIoAdapter.connectToRedis();

app.useWebSocketAdapter(redisIoAdapter);
`),cf()()(),Aa(83,`h4`,12)(84,`span`),bT(85,`Ws library`),cf()(),Aa(86,`p`),bT(87,`Another available adapter is `),Aa(88,`code`),bT(89,`WsAdapter`),cf(),bT(90,`, which acts as a proxy between the framework and the fast, thoroughly tested `),Aa(91,`a`,13),bT(92,`ws`),cf(),bT(93,` library. This adapter is fully compatible with native browser WebSockets and is faster than the socket.io package. However, it offers significantly fewer features out of the box, which many applications don't need.`),cf(),Aa(94,`blockquote`,14)(95,`strong`),bT(96,`Hint`),cf(),bT(97,` The `),Aa(98,`code`),bT(99,`ws`),cf(),bT(100,` library doesn't support namespaces (communication channels popularized by `),Aa(101,`code`),bT(102,`socket.io`),cf(),bT(103,`), and `),Aa(104,`code`),bT(105,`WsAdapter`),cf(),bT(106,` throws an error if you set the `),Aa(107,`code`),bT(108,`namespace`),cf(),bT(109,` option. To mimic this feature, mount multiple `),Aa(110,`code`),bT(111,`ws`),cf(),bT(112,` servers on different paths (e.g., `),Aa(113,`code`),bT(114),cf(),bT(115,`).
`),cf(),Aa(116,`p`),bT(117,`To use `),Aa(118,`code`),bT(119,`ws`),cf(),bT(120,`, first install the required package:`),cf(),Aa(121,`pre`)(122,`code`,10),bT(123,`
$ npm i --save @nestjs/platform-ws
`),cf()(),Aa(124,`p`),bT(125,`Once the package is installed, switch the adapter:`),cf(),Aa(126,`app-copy-button`)(127,`pre`)(128,`code`,11),bT(129,`
const app = await NestFactory.create(AppModule);
app.useWebSocketAdapter(new WsAdapter(app));
`),cf()()(),Aa(130,`blockquote`,14)(131,`strong`),bT(132,`Hint`),cf(),bT(133,` The `),Aa(134,`code`),bT(135,`WsAdapter`),cf(),bT(136,` is imported from `),Aa(137,`code`),bT(138,`@nestjs/platform-ws`),cf(),bT(139,`.
`),cf(),Aa(140,`p`),bT(141,`The `),Aa(142,`code`),bT(143,`WsAdapter`),cf(),bT(144,` handles messages in the `),Aa(145,`code`),bT(146),cf(),bT(147,` format. To receive and process messages in a different format, configure a message parser that converts them into this format.`),cf(),Aa(148,`app-copy-button`)(149,`pre`)(150,`code`,11),bT(151,`
const wsAdapter = new WsAdapter(app, {
  // To handle messages in the [event, data] format
  messageParser: (data) => {
    const [event, payload] = JSON.parse(data.toString());
    return { event, data: payload };
  },
});
`),cf()()(),Aa(152,`p`),bT(153,`Alternatively, you can set the message parser after creating the adapter with the `),Aa(154,`code`),bT(155,`setMessageParser()`),cf(),bT(156,` method.`),cf(),Aa(157,`h4`,15)(158,`span`),bT(159,`Advanced (custom adapter)`),cf()(),Aa(160,`p`),bT(161,`For demonstration purposes, we'll integrate the `),Aa(162,`a`,13),bT(163,`ws`),cf(),bT(164,` library manually. As mentioned, an adapter for this library already exists: the `),Aa(165,`code`),bT(166,`WsAdapter`),cf(),bT(167,` class exposed from the `),Aa(168,`code`),bT(169,`@nestjs/platform-ws`),cf(),bT(170,` package. A simplified implementation could look like this:`),cf(),Aa(171,`app-copy-button`,16)(172,`span`,17),bT(173),LT(174,`extension`),Wa(175,`app-tabs`,null,1),cf(),Aa(177,`pre`)(178,`code`,11),bT(179,`
import WebSocket, { WebSocketServer } from 'ws';
import { WebSocketAdapter, INestApplicationContext } from '@nestjs/common';
import { MessageMappingProperties } from '@nestjs/websockets';
import { Observable, fromEvent, EMPTY } from 'rxjs';
import { mergeMap, filter } from 'rxjs/operators';

export class WsAdapter implements WebSocketAdapter {
  constructor(private app: INestApplicationContext) {}

  create(port: number, options: any = {}): any {
    return new WebSocketServer({ port, ...options });
  }

  bindClientConnect(server: WebSocketServer, callback: (...args: any[]) => void) {
    server.on('connection', callback);
  }

  bindMessageHandlers(
    client: WebSocket,
    handlers: MessageMappingProperties[],
    process: (data: any) => Observable<any>,
  ) {
    fromEvent(client, 'message')
      .pipe(
        mergeMap(data => this.bindMessageHandler(data, handlers, process)),
        filter(result => result),
      )
      .subscribe(response => client.send(JSON.stringify(response)));
  }

  bindMessageHandler(
    buffer: any,
    handlers: MessageMappingProperties[],
    process: (data: any) => Observable<any>,
  ): Observable<any> {
    const message = JSON.parse(buffer.data);
    const messageHandler = handlers.find(
      handler => handler.message === message.event,
    );
    if (!messageHandler) {
      return EMPTY;
    }
    return process(messageHandler.callback(message.data));
  }

  close(server: WebSocketServer) {
    server.close();
  }
}
`),cf()()(),Aa(180,`blockquote`,14)(181,`strong`),bT(182,`Hint`),cf(),bT(183,` To use the `),Aa(184,`a`,13),bT(185,`ws`),cf(),bT(186,` library, use the built-in `),Aa(187,`code`),bT(188,`WsAdapter`),cf(),bT(189,` instead of creating your own.
`),cf(),Aa(190,`p`),bT(191,`Then set up the custom adapter with the `),Aa(192,`code`),bT(193,`useWebSocketAdapter()`),cf(),bT(194,` method:`),cf(),Aa(195,`app-copy-button`,16)(196,`span`,17),bT(197),LT(198,`extension`),Wa(199,`app-tabs`,null,2),cf(),Aa(201,`pre`)(202,`code`,11),bT(203,`
const app = await NestFactory.create(AppModule);
app.useWebSocketAdapter(new WsAdapter(app));
`),cf()()(),Aa(204,`h4`,18)(205,`span`),bT(206,`Example`),cf()(),Aa(207,`p`),bT(208,`A working example that uses `),Aa(209,`code`),bT(210,`WsAdapter`),cf(),bT(211,` is available in the `),Aa(212,`a`,19),bT(213,`16-gateways-ws sample`),cf(),bT(214,`.`),cf()(),Aa(215,`a`,20),Wa(216,`i`,21),Aa(217,`span`),bT(218,`Edit on GitHub`),cf()()()),d&2){let p=tT(176),w=tT(200);zC(114),Ky(`@WebSocketGateway(`,`{`,` path: '/users' `,`}`,`)`),zC(32),Ky(``,`{`,` event: string, data: any `,`}`),zC(27),hf(` `,jT(174,6,`ws-adapter`,p.isJsActive),`
`),zC(24),hf(` `,jT(198,9,`main`,w.isJsActive),`
`)}},dependencies:[Lt,ln,u,g],encapsulation:2})}return a})();var F=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(c){return(l||(l=im(a)))(c||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-exception-filters`]],features:[xy],decls:136,vars:6,consts:[[`contentReference`,``],[`app8544c97f2b388bc15c3f37e5f478673f478a71ea`,``],[1,`content`],[1,`content-inner`],[`id`,`exception-filters`],[`routerLink`,`/exception-filters`],[1,`language-typescript`],[1,`info`],[`appAnchor`,``,`id`,`filters`],[1,`warning`],[`appAnchor`,``,`id`,`inheritance`],[1,`with-heading`],[1,`filename`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/exception-filters.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,c){if(d&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Exception filters`),cf(),Aa(5,`p`),bT(6,`The WebSockets exceptions layer works like the HTTP `),Aa(7,`a`,5),bT(8,`exception filter`),cf(),bT(9,` layer, with one difference: instead of throwing `),Aa(10,`code`),bT(11,`HttpException`),cf(),bT(12,`, throw `),Aa(13,`code`),bT(14,`WsException`),cf(),bT(15,`.`),cf(),Aa(16,`app-copy-button`)(17,`pre`)(18,`code`,6),bT(19,`
throw new WsException('Invalid credentials.');
`),cf()()(),Aa(20,`blockquote`,7)(21,`strong`),bT(22,`Hint`),cf(),bT(23,` The `),Aa(24,`code`),bT(25,`WsException`),cf(),bT(26,` class is imported from the `),Aa(27,`code`),bT(28,`@nestjs/websockets`),cf(),bT(29,` package.
`),cf(),Aa(30,`p`),bT(31,`When a handler throws the exception above, Nest catches it and emits an `),Aa(32,`code`),bT(33,`exception`),cf(),bT(34,` message to the client with the following structure:`),cf(),Aa(35,`app-copy-button`)(36,`pre`)(37,`code`,6),bT(38,`
{
  status: 'error',
  message: 'Invalid credentials.',
  cause: {
    pattern: 'events', // pattern of the message that caused the exception
    data: { name: 'Nest' }, // payload of that message
  },
}
`),cf()()(),Aa(39,`p`),bT(40,`The `),Aa(41,`code`),bT(42,`cause`),cf(),bT(43,` property lets the client associate the error with the message that triggered it. If you pass an object (rather than a string) to the `),Aa(44,`code`),bT(45,`WsException`),cf(),bT(46,` constructor, Nest emits that object as is. Any exception that isn't a `),Aa(47,`code`),bT(48,`WsException`),cf(),bT(49,` produces the same structure, with `),Aa(50,`code`),bT(51,`'Internal server error'`),cf(),bT(52,` as the message. With the `),Aa(53,`code`),bT(54,`ws`),cf(),bT(55,` adapter, which has no named events, the client receives a JSON string of the form `),Aa(56,`code`),bT(57),cf(),bT(58,` instead.`),cf(),Aa(59,`h4`,8)(60,`span`),bT(61,`Filters`),cf()(),Aa(62,`p`),bT(63,`WebSocket exception filters behave the same way as HTTP exception filters. The following example uses a manually instantiated method-scoped filter. As with HTTP-based applications, you can also use gateway-scoped filters (i.e., decorate the gateway class with `),Aa(64,`code`),bT(65,`@UseFilters()`),cf(),bT(66,`).`),cf(),Aa(67,`app-copy-button`)(68,`pre`)(69,`code`,6),bT(70,`
@UseFilters(new WsExceptionFilter())
@SubscribeMessage('events')
onEvent(client, data: any): WsResponse<any> {
  const event = 'events';
  return { event, data };
}
`),cf()()(),Aa(71,`blockquote`,9)(72,`strong`),bT(73,`Warning`),cf(),bT(74,` Global exception filters (registered with `),Aa(75,`code`),bT(76,`app.useGlobalFilters()`),cf(),bT(77,` or the `),Aa(78,`code`),bT(79,`APP_FILTER`),cf(),bT(80,` token) don't apply to gateways. Bind WebSocket exception filters at the gateway or method level with `),Aa(81,`code`),bT(82,`@UseFilters()`),cf(),bT(83,`.
`),cf(),Aa(84,`h4`,10)(85,`span`),bT(86,`Inheritance`),cf()(),Aa(87,`p`),bT(88,`Typically, you'll create fully customized exception filters tailored to your application requirements. However, sometimes you may want to extend the `),Aa(89,`strong`),bT(90,`core exception filter`),cf(),bT(91,` and override its behavior based on certain factors.`),cf(),Aa(92,`p`),bT(93,`To delegate exception processing to the base filter, extend `),Aa(94,`code`),bT(95,`BaseWsExceptionFilter`),cf(),bT(96,` and call the inherited `),Aa(97,`code`),bT(98,`catch()`),cf(),bT(99,` method.`),cf(),Aa(100,`app-copy-button`,11)(101,`span`,12),Wa(102,`app-tabs`,null,1),cf(),Aa(104,`pre`)(105,`code`,6),bT(106,`
import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseWsExceptionFilter } from '@nestjs/websockets';

@Catch()
export class AllExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}
`),cf()(),Aa(107,`pre`)(108,`code`,6),bT(109,`
import { Catch } from '@nestjs/common';
import { BaseWsExceptionFilter } from '@nestjs/websockets';

@Catch()
export class AllExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception, host) {
    super.catch(exception, host);
  }
}
`),cf()()(),Aa(110,`p`),bT(111,`The implementation above is only a shell that demonstrates the approach. A real extended exception filter would add your own `),Aa(112,`strong`),bT(113,`business logic`),cf(),bT(114,` (e.g., handling various conditions).`),cf(),Aa(115,`p`),bT(116,`The `),Aa(117,`code`),bT(118,`BaseWsExceptionFilter`),cf(),bT(119,` constructor accepts an options object. Set `),Aa(120,`code`),bT(121,`includeCause`),cf(),bT(122,` to `),Aa(123,`code`),bT(124,`false`),cf(),bT(125,` to omit the `),Aa(126,`code`),bT(127,`cause`),cf(),bT(128,` property from error messages, or pass a `),Aa(129,`code`),bT(130,`causeFactory(pattern, data)`),cf(),bT(131,` function to control its shape.`),cf()(),Aa(132,`a`,13),Wa(133,`i`,14),Aa(134,`span`),bT(135,`Edit on GitHub`),cf()()()),d&2){let p=tT(103);zC(57),Ky(``,`{`,` "event": "exception", "data": ... `,`}`),zC(47),zy(`hide`,p.isJsActive),zC(3),zy(`hide`,!p.isJsActive)}},dependencies:[Jc,ln,Lt,u],encapsulation:2})}return a})();var H=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(c){return(l||(l=im(a)))(c||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-gateways`]],features:[xy],decls:521,vars:72,consts:[[`contentReference`,``],[`app39efdbf2536620d5efef99d4d1d83c3ff362478c`,``],[`appe311814351ce5c89ed27552835e3f86f8d311c94`,``],[`app005ba902fb9b4a2d03ebe0169ec86e2693a14206`,``],[`app243985cc0eb8f2570fe68b8a2d6e7a177c8151bc`,``],[`app4590e78e4127ab852f0dde26934d8bf484817aa8`,``],[`app2a293f64e6979ec05ae2df21e1771d00d4a0f70b`,``],[`app30944dbd4b94aba2042ad6bb05ca831ca009e5c6`,``],[`app62490c63f9af9d70d1eb3dc046d1f56cdc8ebdb6`,``],[`appf9d56d8e6234bf8c25c03e853b7533875cc12893`,``],[`app8d8c97121008a3a2fef953e2d6c59de6931d1b60`,``],[`appee0096f726a006c6decbaaba3734161d86a4ab1f`,``],[1,`content`],[1,`content-inner`],[`id`,`gateways`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/socketio/socket.io`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/websockets/ws`],[`routerLink`,`/websockets/adapter`],[`src`,`/assets/Gateways_1.png`,1,`illustrative-image`],[1,`info`],[`routerLink`,`/providers`],[`appAnchor`,``,`id`,`installation`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`overview`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://socket.io/docs/v4/namespaces/`],[1,`warning`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://socket.io/docs/v4/server-options/`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://socket.io/docs/v4/server-api/#socket`],[`appAnchor`,``,`id`,`multiple-responses`],[`appAnchor`,``,`id`,`asynchronous-responses`],[`appAnchor`,``,`id`,`lifecycle-hooks`],[`routerLink`,`/websockets/guards`],[`appAnchor`,``,`id`,`server-and-namespace`],[`appAnchor`,``,`id`,`request-scoped-gateways`],[`routerLink`,`/fundamentals/injection-scopes`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/nest/tree/master/sample/02-gateways`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/gateways.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,c){if(d&1&&(Aa(0,`div`,12,0)(2,`div`,13)(3,`h3`,14),bT(4,`Gateways`),cf(),Aa(5,`p`),bT(6,`Most of the concepts discussed elsewhere in this documentation, such as dependency injection, decorators, exception filters, pipes, guards, and interceptors, apply equally to gateways. Wherever possible, Nest abstracts implementation details so that the same components can run across HTTP-based platforms, WebSockets, and microservices. This section covers the aspects of Nest that are specific to WebSockets.`),cf(),Aa(7,`p`),bT(8,`In Nest, a gateway is a class annotated with the `),Aa(9,`code`),bT(10,`@WebSocketGateway()`),cf(),bT(11,` decorator. Gateways are platform-agnostic, so they work with any WebSockets library once an adapter exists for it. Nest supports two WebSocket platforms out of the box: `),Aa(12,`a`,15),bT(13,`socket.io`),cf(),bT(14,` and `),Aa(15,`a`,16),bT(16,`ws`),cf(),bT(17,`. Choose the one that best suits your needs. You can also build your own adapter by following the `),Aa(18,`a`,17),bT(19,`adapters guide`),cf(),bT(20,`.`),cf(),Aa(21,`figure`),Wa(22,`img`,18),cf(),Aa(23,`blockquote`,19)(24,`strong`),bT(25,`Hint`),cf(),bT(26,` Gateways are `),Aa(27,`a`,20),bT(28,`providers`),cf(),bT(29,`: they can inject dependencies through the class constructor, and other classes (providers and controllers) can inject them.
`),cf(),Aa(30,`h4`,21)(31,`span`),bT(32,`Installation`),cf()(),Aa(33,`p`),bT(34,`To start building WebSockets-based applications, first install the required package:`),cf(),Aa(35,`app-copy-button`,22)(36,`span`,23),Wa(37,`app-tabs`,null,1),cf(),Aa(39,`pre`)(40,`code`,24),bT(41,`
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
`),cf()(),Aa(42,`pre`)(43,`code`,24),bT(44,`
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
`),cf()()(),Aa(45,`h4`,25)(46,`span`),bT(47,`Overview`),cf()(),Aa(48,`p`),bT(49,`By default, each gateway listens on the same port as the `),Aa(50,`strong`),bT(51,`HTTP server`),cf(),bT(52,`. To use a different port, pass it as the first argument to the decorator, e.g., `),Aa(53,`code`),bT(54,`@WebSocketGateway(80)`),cf(),bT(55,`, where `),Aa(56,`code`),bT(57,`80`),cf(),bT(58,` is the chosen port number. You can also set the `),Aa(59,`a`,26),bT(60,`namespace`),cf(),bT(61,` used by the gateway:`),cf(),Aa(62,`app-copy-button`)(63,`pre`)(64,`code`,24),bT(65,`
@WebSocketGateway(80, { namespace: 'events' })
`),cf()()(),Aa(66,`blockquote`,27)(67,`strong`),bT(68,`Warning`),cf(),bT(69,` Gateways are not instantiated until they are referenced in the providers array of an existing module.
`),cf(),Aa(70,`p`),bT(71,`The second argument of the `),Aa(72,`code`),bT(73,`@WebSocketGateway()`),cf(),bT(74,` decorator passes any supported `),Aa(75,`a`,28),bT(76,`server option`),cf(),bT(77,` to the socket server constructor. If you don't need a custom port, pass the options object as the only argument.`),cf(),Aa(78,`app-copy-button`)(79,`pre`)(80,`code`,24),bT(81,`
@WebSocketGateway(81, { transports: ['websocket'] })
`),cf()()(),Aa(82,`p`),bT(83,`The gateway is now listening, but it doesn't subscribe to any incoming messages yet. Let's create a handler that subscribes to `),Aa(84,`code`),bT(85,`events`),cf(),bT(86,` messages and responds to the client with the same data.`),cf(),Aa(87,`app-copy-button`,22)(88,`span`,23),bT(89),LT(90,`extension`),Wa(91,`app-tabs`,null,2),cf(),Aa(93,`pre`)(94,`code`,24),bT(95,`
@SubscribeMessage('events')
handleEvent(@MessageBody() data: string): string {
  return data;
}
`),cf()(),Aa(96,`pre`)(97,`code`,24),bT(98,`
@Bind(MessageBody())
@SubscribeMessage('events')
handleEvent(data) {
  return data;
}
`),cf()()(),Aa(99,`blockquote`,19)(100,`strong`),bT(101,`Hint`),cf(),bT(102,` The `),Aa(103,`code`),bT(104,`@SubscribeMessage()`),cf(),bT(105,` and `),Aa(106,`code`),bT(107,`@MessageBody()`),cf(),bT(108,` decorators are imported from the `),Aa(109,`code`),bT(110,`@nestjs/websockets`),cf(),bT(111,` package.
`),cf(),Aa(112,`p`),bT(113,`Once the gateway is created, register it in a module.`),cf(),Aa(114,`app-copy-button`,22)(115,`span`,23),bT(116),LT(117,`extension`),Wa(118,`app-tabs`,null,3),cf(),Aa(120,`pre`)(121,`code`,24),bT(122,`
import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway.js';

@Module({
  providers: [EventsGateway]
})
export class EventsModule {}
`),cf()()(),Aa(123,`p`),bT(124,`You can also pass a property key to the `),Aa(125,`code`),bT(126,`@MessageBody()`),cf(),bT(127,` decorator to extract that property from the incoming message body:`),cf(),Aa(128,`app-copy-button`,22)(129,`span`,23),bT(130),LT(131,`extension`),Wa(132,`app-tabs`,null,4),cf(),Aa(134,`pre`)(135,`code`,24),bT(136,`
@SubscribeMessage('events')
handleEvent(@MessageBody('id') id: number): number {
  // id === messageBody.id
  return id;
}
`),cf()(),Aa(137,`pre`)(138,`code`,24),bT(139,`
@Bind(MessageBody('id'))
@SubscribeMessage('events')
handleEvent(id) {
  // id === messageBody.id
  return id;
}
`),cf()()(),Aa(140,`p`),bT(141,`If you prefer not to use decorators, the following code is functionally equivalent:`),cf(),Aa(142,`app-copy-button`,22)(143,`span`,23),bT(144),LT(145,`extension`),Wa(146,`app-tabs`,null,5),cf(),Aa(148,`pre`)(149,`code`,24),bT(150,`
@SubscribeMessage('events')
handleEvent(client: Socket, data: string): string {
  return data;
}
`),cf()(),Aa(151,`pre`)(152,`code`,24),bT(153,`
@SubscribeMessage('events')
handleEvent(client, data) {
  return data;
}
`),cf()()(),Aa(154,`p`),bT(155,`In the example above, the `),Aa(156,`code`),bT(157,`handleEvent()`),cf(),bT(158,` method takes two arguments. The first is a platform-specific `),Aa(159,`a`,29),bT(160,`socket instance`),cf(),bT(161,`, and the second is the data received from the client. This approach isn't recommended, because it requires mocking the `),Aa(162,`code`),bT(163,`socket`),cf(),bT(164,` instance in each unit test.`),cf(),Aa(165,`p`),bT(166,`When the `),Aa(167,`code`),bT(168,`events`),cf(),bT(169,` message is received, the handler sends an acknowledgment with the same data that was sent over the network. You can also emit messages with a library-specific API, e.g., the `),Aa(170,`code`),bT(171,`client.emit()`),cf(),bT(172,` method. To access the connected socket instance, use the `),Aa(173,`code`),bT(174,`@ConnectedSocket()`),cf(),bT(175,` decorator.`),cf(),Aa(176,`app-copy-button`,22)(177,`span`,23),bT(178),LT(179,`extension`),Wa(180,`app-tabs`,null,6),cf(),Aa(182,`pre`)(183,`code`,24),bT(184,`
@SubscribeMessage('events')
handleEvent(
  @MessageBody() data: string,
  @ConnectedSocket() client: Socket,
): string {
  return data;
}
`),cf()(),Aa(185,`pre`)(186,`code`,24),bT(187,`
@Bind(MessageBody(), ConnectedSocket())
@SubscribeMessage('events')
handleEvent(data, client) {
  return data;
}
`),cf()()(),Aa(188,`blockquote`,19)(189,`strong`),bT(190,`Hint`),cf(),bT(191,` The `),Aa(192,`code`),bT(193,`@ConnectedSocket()`),cf(),bT(194,` decorator is imported from the `),Aa(195,`code`),bT(196,`@nestjs/websockets`),cf(),bT(197,` package.
`),cf(),Aa(198,`p`),bT(199,`However, messages you emit directly through the socket bypass interceptors, which only see the handler's return value. If you don't want to respond to the client, omit the `),Aa(200,`code`),bT(201,`return`),cf(),bT(202,` statement (or return `),Aa(203,`code`),bT(204,`null`),cf(),bT(205,` or `),Aa(206,`code`),bT(207,`undefined`),cf(),bT(208,`). Other falsy values, such as `),Aa(209,`code`),bT(210,`false`),cf(),bT(211,` or `),Aa(212,`code`),bT(213,`0`),cf(),bT(214,`, are still sent as a response.`),cf(),Aa(215,`p`),bT(216,`When a client emits the message as follows, the `),Aa(217,`code`),bT(218,`handleEvent()`),cf(),bT(219,` method is executed:`),cf(),Aa(220,`app-copy-button`)(221,`pre`)(222,`code`,24),bT(223,`
socket.emit('events', { name: 'Nest' });
`),cf()()(),Aa(224,`p`),bT(225,`To receive the response sent by the handler above, the client must attach a corresponding acknowledgment callback:`),cf(),Aa(226,`app-copy-button`)(227,`pre`)(228,`code`,24),bT(229,`
socket.emit('events', { name: 'Nest' }, (data) => console.log(data));
`),cf()()(),Aa(230,`p`),bT(231,`Returning a value from a message handler implicitly sends an acknowledgment, but advanced scenarios often require direct control over the acknowledgment callback.`),cf(),Aa(232,`p`),bT(233,`The `),Aa(234,`code`),bT(235,`@Ack()`),cf(),bT(236,` parameter decorator injects the `),Aa(237,`code`),bT(238,`ack`),cf(),bT(239,` callback function directly into a message handler. When you use it, Nest doesn't send an acknowledgment based on the return value, so you must call `),Aa(240,`code`),bT(241,`ack()`),cf(),bT(242,` yourself. Without the decorator, the callback is passed as the third argument of the method.`),cf(),Aa(243,`app-copy-button`,22)(244,`span`,23),bT(245),LT(246,`extension`),Wa(247,`app-tabs`,null,7),cf(),Aa(249,`pre`)(250,`code`,24),bT(251,`
@SubscribeMessage('events')
handleEvent(
  @MessageBody() data: string,
  @Ack() ack: (response: { status: string; data: string }) => void,
) {
  ack({ status: 'received', data });
}
`),cf()(),Aa(252,`pre`)(253,`code`,24),bT(254,`
@Bind(MessageBody(), Ack())
@SubscribeMessage('events')
handleEvent(data, ack) {
  ack({ status: 'received', data });
}
`),cf()()(),Aa(255,`h4`,30)(256,`span`),bT(257,`Multiple responses`),cf()(),Aa(258,`p`),bT(259,`The acknowledgment is dispatched only once, and native WebSocket implementations don't support it. To work around these limitations, return an object with two properties: `),Aa(260,`code`),bT(261,`event`),cf(),bT(262,`, the name of the emitted event, and `),Aa(263,`code`),bT(264,`data`),cf(),bT(265,`, the payload to forward to the client.`),cf(),Aa(266,`app-copy-button`,22)(267,`span`,23),bT(268),LT(269,`extension`),Wa(270,`app-tabs`,null,8),cf(),Aa(272,`pre`)(273,`code`,24),bT(274,`
@SubscribeMessage('events')
handleEvent(@MessageBody() data: unknown): WsResponse<unknown> {
  const event = 'events';
  return { event, data };
}
`),cf()(),Aa(275,`pre`)(276,`code`,24),bT(277,`
@Bind(MessageBody())
@SubscribeMessage('events')
handleEvent(data) {
  const event = 'events';
  return { event, data };
}
`),cf()()(),Aa(278,`blockquote`,19)(279,`strong`),bT(280,`Hint`),cf(),bT(281,` The `),Aa(282,`code`),bT(283,`WsResponse`),cf(),bT(284,` interface is imported from the `),Aa(285,`code`),bT(286,`@nestjs/websockets`),cf(),bT(287,` package.
`),cf(),Aa(288,`blockquote`,27)(289,`strong`),bT(290,`Warning`),cf(),bT(291,` If your `),Aa(292,`code`),bT(293,`data`),cf(),bT(294,` field relies on `),Aa(295,`code`),bT(296,`ClassSerializerInterceptor`),cf(),bT(297,`, return a class instance that implements `),Aa(298,`code`),bT(299,`WsResponse`),cf(),bT(300,`, because the interceptor ignores plain JavaScript object responses.
`),cf(),Aa(301,`p`),bT(302,`To receive the incoming response(s), the client must add another event listener.`),cf(),Aa(303,`app-copy-button`)(304,`pre`)(305,`code`,24),bT(306,`
socket.on('events', (data) => console.log(data));
`),cf()()(),Aa(307,`h4`,31)(308,`span`),bT(309,`Asynchronous responses`),cf()(),Aa(310,`p`),bT(311,`Message handlers can respond either synchronously or `),Aa(312,`strong`),bT(313,`asynchronously`),cf(),bT(314,`, so `),Aa(315,`code`),bT(316,`async`),cf(),bT(317,` methods are supported. A message handler can also return an `),Aa(318,`code`),bT(319,`Observable`),cf(),bT(320,`, in which case each emitted value is sent to the client until the stream completes.`),cf(),Aa(321,`app-copy-button`,22)(322,`span`,23),bT(323),LT(324,`extension`),Wa(325,`app-tabs`,null,9),cf(),Aa(327,`pre`)(328,`code`,24),bT(329,`
@SubscribeMessage('events')
onEvent(@MessageBody() data: unknown): Observable<WsResponse<number>> {
  const event = 'events';
  const response = [1, 2, 3];

  return from(response).pipe(
    map(data => ({ event, data })),
  );
}
`),cf()(),Aa(330,`pre`)(331,`code`,24),bT(332,`
@Bind(MessageBody())
@SubscribeMessage('events')
onEvent(data) {
  const event = 'events';
  const response = [1, 2, 3];

  return from(response).pipe(
    map(data => ({ event, data })),
  );
}
`),cf()()(),Aa(333,`p`),bT(334,`In the example above, the message handler responds `),Aa(335,`strong`),bT(336,`3 times`),cf(),bT(337,` (once for each item in the array).`),cf(),Aa(338,`h4`,32)(339,`span`),bT(340,`Lifecycle hooks`),cf()(),Aa(341,`p`),bT(342,`Gateways support three lifecycle hooks. Each has a corresponding interface, described in the following table:`),cf(),Aa(343,`table`)(344,`tr`)(345,`td`)(346,`code`),bT(347,`OnGatewayInit`),cf()(),Aa(348,`td`),bT(349,` Requires the `),Aa(350,`code`),bT(351,`afterInit()`),cf(),bT(352,` method, which receives the library-specific server instance as an argument. `),cf()(),Aa(353,`tr`)(354,`td`)(355,`code`),bT(356,`OnGatewayConnection`),cf()(),Aa(357,`td`),bT(358,` Requires the `),Aa(359,`code`),bT(360,`handleConnection()`),cf(),bT(361,` method, which receives the library-specific client socket instance as its first argument. `),cf()(),Aa(362,`tr`)(363,`td`)(364,`code`),bT(365,`OnGatewayDisconnect`),cf()(),Aa(366,`td`),bT(367,` Requires the `),Aa(368,`code`),bT(369,`handleDisconnect()`),cf(),bT(370,` method, which receives the library-specific client socket instance as its first argument. `),cf()()(),Aa(371,`blockquote`,19)(372,`strong`),bT(373,`Hint`),cf(),bT(374,` Each lifecycle interface is exposed from the `),Aa(375,`code`),bT(376,`@nestjs/websockets`),cf(),bT(377,` package.
`),cf(),Aa(378,`blockquote`,27)(379,`strong`),bT(380,`Warning`),cf(),bT(381,` Nest doesn't wait for an async `),Aa(382,`code`),bT(383,`handleConnection()`),cf(),bT(384,` to finish before it handles the client's messages, so the hook isn't a gate: messages that arrive before it disconnects the client are still handled. To check each message, bind `),Aa(385,`a`,33),bT(386,`guards`),cf(),bT(387,` to the message handlers. To reject a client before any of its messages are handled, use connection-level middleware instead: socket.io's `),Aa(388,`code`),bT(389,`server.use()`),cf(),bT(390,` in `),Aa(391,`code`),bT(392,`afterInit()`),cf(),bT(393,`, or, with `),Aa(394,`code`),bT(395,`WsAdapter`),cf(),bT(396,`, a `),Aa(397,`code`),bT(398,`verifyClient`),cf(),bT(399,` function in the `),Aa(400,`code`),bT(401,`@WebSocketGateway()`),cf(),bT(402,` options.
`),cf(),Aa(403,`h4`,34)(404,`span`),bT(405,`Server and Namespace`),cf()(),Aa(406,`p`),bT(407,`Occasionally, you may need direct access to the native, `),Aa(408,`strong`),bT(409,`platform-specific`),cf(),bT(410,` server instance. Nest passes it as an argument to the `),Aa(411,`code`),bT(412,`afterInit()`),cf(),bT(413,` method (`),Aa(414,`code`),bT(415,`OnGatewayInit`),cf(),bT(416,` interface). Alternatively, use the `),Aa(417,`code`),bT(418,`@WebSocketServer()`),cf(),bT(419,` decorator.`),cf(),Aa(420,`app-copy-button`)(421,`pre`)(422,`code`,24),bT(423,`
@WebSocketServer()
server: Server;
`),cf()()(),Aa(424,`p`),bT(425,`You can also retrieve the corresponding namespace:`),cf(),Aa(426,`app-copy-button`)(427,`pre`)(428,`code`,24),bT(429,`
@WebSocketGateway({ namespace: 'my-namespace' })
export class EventsGateway {
  @WebSocketServer()
  namespace: Namespace;
}
`),cf()()(),Aa(430,`p`),bT(431,`The `),Aa(432,`code`),bT(433,`@WebSocketServer()`),cf(),bT(434,` decorator injects a server instance based on the metadata stored by the `),Aa(435,`code`),bT(436,`@WebSocketGateway()`),cf(),bT(437,` decorator. If you pass the `),Aa(438,`code`),bT(439,`namespace`),cf(),bT(440,` option to `),Aa(441,`code`),bT(442,`@WebSocketGateway()`),cf(),bT(443,`, `),Aa(444,`code`),bT(445,`@WebSocketServer()`),cf(),bT(446,` injects a `),Aa(447,`code`),bT(448,`Namespace`),cf(),bT(449,` instance instead of a `),Aa(450,`code`),bT(451,`Server`),cf(),bT(452,` instance.`),cf(),Aa(453,`blockquote`,27)(454,`strong`),bT(455,`Notice`),cf(),bT(456,` The `),Aa(457,`code`),bT(458,`@WebSocketServer()`),cf(),bT(459,` decorator is imported from the `),Aa(460,`code`),bT(461,`@nestjs/websockets`),cf(),bT(462,` package.
`),cf(),Aa(463,`p`),bT(464,`Nest assigns the server instance to this property once it's ready to use.`),cf(),Aa(465,`p`),Wa(466,`app-banner-enterprise`),cf(),Aa(467,`h4`,35)(468,`span`),bT(469,`Request-scoped gateways`),cf()(),Aa(470,`p`),bT(471,`Starting with NestJS v12, gateways support `),Aa(472,`a`,36),bT(473,`request-scoped`),cf(),bT(474,` providers. Nest creates a new instance of every request-scoped dependency per connected socket. That instance lives as long as the connection does, so it can safely hold per-connection state.`),cf(),Aa(475,`p`),bT(476,`Inject the socket itself with the `),Aa(477,`code`),bT(478,`REQUEST`),cf(),bT(479,` token, the same way you inject the HTTP request into a request-scoped HTTP provider:`),cf(),Aa(480,`app-copy-button`,22)(481,`span`,23),bT(482),LT(483,`extension`),Wa(484,`app-tabs`,null,10),cf(),Aa(486,`pre`)(487,`code`,24),bT(488,`
import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Socket } from 'socket.io';

@Injectable({ scope: Scope.REQUEST })
export class ConnectionStateService {
  private sequence = 0;

  constructor(@Inject(REQUEST) private readonly client: Socket) {}

  next() {
    return { clientId: this.client.id, sequence: ++this.sequence };
  }
}
`),cf()()(),Aa(489,`p`),bT(490,`The gateway then injects it like any other provider:`),cf(),Aa(491,`app-copy-button`,22)(492,`span`,23),bT(493),LT(494,`extension`),Wa(495,`app-tabs`,null,11),cf(),Aa(497,`pre`)(498,`code`,24),bT(499,`
@WebSocketGateway()
export class EventsGateway {
  constructor(private readonly connectionState: ConnectionStateService) {}

  handleConnection(client: Socket) {
    client.emit('connected', this.connectionState.next());
  }

  @SubscribeMessage('state')
  onState() {
    return { event: 'state', data: this.connectionState.next() };
  }
}
`),cf()()(),Aa(500,`p`),bT(501,`Because the scope is tied to the connection rather than to a single message, the `),Aa(502,`code`),bT(503,`sequence`),cf(),bT(504,` counter above increments across every message received on that socket, while a second client gets its own independent instance. Nest tears the request-scoped instances down when the socket disconnects.`),cf(),Aa(505,`blockquote`,27)(506,`strong`),bT(507,`Notice`),cf(),bT(508,` As with HTTP, request-scoped providers add per-connection instantiation overhead. Use the default singleton scope unless you need per-connection state.
`),cf(),Aa(509,`h4`,37)(510,`span`),bT(511,`Example`),cf()(),Aa(512,`p`),bT(513,`A working example is available in the `),Aa(514,`a`,38),bT(515,`02-gateways sample`),cf(),bT(516,`.`),cf()(),Aa(517,`a`,39),Wa(518,`i`,40),Aa(519,`span`),bT(520,`Edit on GitHub`),cf()()()),d&2){let p=tT(38),w=tT(92),_=tT(119),W=tT(133),C=tT(147),P=tT(181),I=tT(248),M=tT(271),B=tT(326),D=tT(485),N=tT(496);zC(39),zy(`hide`,p.isJsActive),zC(3),zy(`hide`,!p.isJsActive),zC(47),hf(` `,jT(90,42,`events.gateway`,w.isJsActive),`
`),zC(4),zy(`hide`,w.isJsActive),zC(3),zy(`hide`,!w.isJsActive),zC(20),hf(` `,jT(117,45,`events.module`,_.isJsActive),`
`),zC(14),hf(` `,jT(131,48,`events.gateway`,W.isJsActive),`
`),zC(4),zy(`hide`,W.isJsActive),zC(3),zy(`hide`,!W.isJsActive),zC(7),hf(` `,jT(145,51,`events.gateway`,C.isJsActive),`
`),zC(4),zy(`hide`,C.isJsActive),zC(3),zy(`hide`,!C.isJsActive),zC(27),hf(` `,jT(179,54,`events.gateway`,P.isJsActive),`
`),zC(4),zy(`hide`,P.isJsActive),zC(3),zy(`hide`,!P.isJsActive),zC(60),hf(` `,jT(246,57,`events.gateway`,I.isJsActive),`
`),zC(4),zy(`hide`,I.isJsActive),zC(3),zy(`hide`,!I.isJsActive),zC(16),hf(` `,jT(269,60,`events.gateway`,M.isJsActive),`
`),zC(4),zy(`hide`,M.isJsActive),zC(3),zy(`hide`,!M.isJsActive),zC(48),hf(` `,jT(324,63,`events.gateway`,B.isJsActive),`
`),zC(4),zy(`hide`,B.isJsActive),zC(3),zy(`hide`,!B.isJsActive),zC(152),hf(` `,jT(483,66,`connection-state.service`,D.isJsActive),`
`),zC(11),hf(` `,jT(494,69,`events.gateway`,N.isJsActive),`
`)}},dependencies:[Jc,Lt,ln,u,l,g],encapsulation:2})}return a})();var J=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(c){return(l||(l=im(a)))(c||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-guards`]],features:[xy],decls:63,vars:4,consts:[[`contentReference`,``],[`app8f6d5057aace37dfe13b3cda068f73597e014101`,``],[1,`content`],[1,`content-inner`],[`id`,`guards`],[`routerLink`,`/guards`],[1,`info`],[`appAnchor`,``,`id`,`binding-guards`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/guards.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,c){if(d&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Guards`),cf(),Aa(5,`p`),bT(6,`There is no fundamental difference between WebSocket guards and `),Aa(7,`a`,5),bT(8,`regular HTTP application guards`),cf(),bT(9,`. The only difference is that instead of throwing `),Aa(10,`code`),bT(11,`HttpException`),cf(),bT(12,`, you should throw `),Aa(13,`code`),bT(14,`WsException`),cf(),bT(15,`. If a guard returns `),Aa(16,`code`),bT(17,`false`),cf(),bT(18,`, Nest throws a `),Aa(19,`code`),bT(20,`WsException`),cf(),bT(21,` with the message `),Aa(22,`code`),bT(23,`'Forbidden resource'`),cf(),bT(24,`.`),cf(),Aa(25,`blockquote`,6)(26,`strong`),bT(27,`Hint`),cf(),bT(28,` The `),Aa(29,`code`),bT(30,`WsException`),cf(),bT(31,` class is exposed from the `),Aa(32,`code`),bT(33,`@nestjs/websockets`),cf(),bT(34,` package.
`),cf(),Aa(35,`h4`,7)(36,`span`),bT(37,`Binding guards`),cf()(),Aa(38,`p`),bT(39,`The following example uses a method-scoped guard. As with HTTP-based applications, you can also use gateway-scoped guards (i.e., decorate the gateway class with `),Aa(40,`code`),bT(41,`@UseGuards()`),cf(),bT(42,`). Global guards registered with `),Aa(43,`code`),bT(44,`app.useGlobalGuards()`),cf(),bT(45,` or the `),Aa(46,`code`),bT(47,`APP_GUARD`),cf(),bT(48,` token apply to gateways as well.`),cf(),Aa(49,`app-copy-button`,8)(50,`span`,9),Wa(51,`app-tabs`,null,1),cf(),Aa(53,`pre`)(54,`code`,10),bT(55,`
@UseGuards(AuthGuard)
@SubscribeMessage('events')
handleEvent(client: Client, data: unknown): WsResponse<unknown> {
  const event = 'events';
  return { event, data };
}
`),cf()(),Aa(56,`pre`)(57,`code`,10),bT(58,`
@UseGuards(AuthGuard)
@SubscribeMessage('events')
handleEvent(client, data) {
  const event = 'events';
  return { event, data };
}
`),cf()()()(),Aa(59,`a`,11),Wa(60,`i`,12),Aa(61,`span`),bT(62,`Edit on GitHub`),cf()()()),d&2){let p=tT(52);zC(53),zy(`hide`,p.isJsActive),zC(3),zy(`hide`,!p.isJsActive)}},dependencies:[Jc,Lt,ln,u],encapsulation:2})}return a})();var q=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(c){return(l||(l=im(a)))(c||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-interceptors`]],features:[xy],decls:33,vars:4,consts:[[`contentReference`,``],[`appd469c228265c8c3c7d6b88d470f493e316ca1bf8`,``],[1,`content`],[1,`content-inner`],[`id`,`interceptors`],[`routerLink`,`/interceptors`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/interceptors.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,c){if(d&1&&(Aa(0,`div`,2,0)(2,`div`,3)(3,`h3`,4),bT(4,`Interceptors`),cf(),Aa(5,`p`),bT(6,`There is no difference between `),Aa(7,`a`,5),bT(8,`regular interceptors`),cf(),bT(9,` and WebSocket interceptors. The following example uses a manually instantiated method-scoped interceptor. As with HTTP-based applications, you can also use gateway-scoped interceptors (i.e., decorate the gateway class with `),Aa(10,`code`),bT(11,`@UseInterceptors()`),cf(),bT(12,`). Global interceptors registered with `),Aa(13,`code`),bT(14,`app.useGlobalInterceptors()`),cf(),bT(15,` or the `),Aa(16,`code`),bT(17,`APP_INTERCEPTOR`),cf(),bT(18,` token apply to gateways as well.`),cf(),Aa(19,`app-copy-button`,6)(20,`span`,7),Wa(21,`app-tabs`,null,1),cf(),Aa(23,`pre`)(24,`code`,8),bT(25,`
@UseInterceptors(new TransformInterceptor())
@SubscribeMessage('events')
handleEvent(client: Client, data: unknown): WsResponse<unknown> {
  const event = 'events';
  return { event, data };
}
`),cf()(),Aa(26,`pre`)(27,`code`,8),bT(28,`
@UseInterceptors(new TransformInterceptor())
@SubscribeMessage('events')
handleEvent(client, data) {
  const event = 'events';
  return { event, data };
}
`),cf()()()(),Aa(29,`a`,9),Wa(30,`i`,10),Aa(31,`span`),bT(32,`Edit on GitHub`),cf()()()),d&2){let p=tT(22);zC(23),zy(`hide`,p.isJsActive),zC(3),zy(`hide`,!p.isJsActive)}},dependencies:[Jc,ln,u],encapsulation:2})}return a})();var R=(()=>{class a extends xt{static ɵfac=(()=>{let l;return function(c){return(l||(l=im(a)))(c||a)}})();static ɵcmp=ef({type:a,selectors:[[`app-pipes`]],features:[xy],decls:106,vars:10,consts:[[`contentReference`,``],[`appf433e086e5afc0d20724ae786f5be92fdbe977f0`,``],[`appf3ea2d69fb59317e55e9e7f711a7724b11459062`,``],[1,`content`],[1,`content-inner`],[`id`,`pipes`],[`routerLink`,`/pipes`],[1,`info`],[`appAnchor`,``,`id`,`binding-pipes`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`schema-based-validation`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev/`],[`href`,`/application/validation#schema-based-validation`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/pipes.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(d,c){if(d&1&&(Aa(0,`div`,3,0)(2,`div`,4)(3,`h3`,5),bT(4,`Pipes`),cf(),Aa(5,`p`),bT(6,`There is no fundamental difference between `),Aa(7,`a`,6),bT(8,`regular pipes`),cf(),bT(9,` and WebSocket pipes. The only difference is that instead of throwing `),Aa(10,`code`),bT(11,`HttpException`),cf(),bT(12,`, you should throw `),Aa(13,`code`),bT(14,`WsException`),cf(),bT(15,`. Only a `),Aa(16,`code`),bT(17,`WsException`),cf(),bT(18,` reaches the client with its own message. Any other exception, including the `),Aa(19,`code`),bT(20,`BadRequestException`),cf(),bT(21,` that the built-in validation pipes throw by default, is reported to the client as `),Aa(22,`code`),bT(23,`'Internal server error'`),cf(),bT(24,`.`),cf(),Aa(25,`blockquote`,7)(26,`strong`),bT(27,`Hint`),cf(),bT(28,` The `),Aa(29,`code`),bT(30,`WsException`),cf(),bT(31,` class is exposed from the `),Aa(32,`code`),bT(33,`@nestjs/websockets`),cf(),bT(34,` package.
`),cf(),Aa(35,`h4`,8)(36,`span`),bT(37,`Binding pipes`),cf()(),Aa(38,`p`),bT(39,`The following example uses a manually instantiated method-scoped pipe. As with HTTP-based applications, you can also use gateway-scoped pipes (i.e., decorate the gateway class with `),Aa(40,`code`),bT(41,`@UsePipes()`),cf(),bT(42,`). Global pipes registered with `),Aa(43,`code`),bT(44,`app.useGlobalPipes()`),cf(),bT(45,` or the `),Aa(46,`code`),bT(47,`APP_PIPE`),cf(),bT(48,` token apply to gateways as well.`),cf(),Aa(49,`app-copy-button`,9)(50,`span`,10),Wa(51,`app-tabs`,null,1),cf(),Aa(53,`pre`)(54,`code`,11),bT(55,`
@UsePipes(new ValidationPipe({ exceptionFactory: (errors) => new WsException(errors) }))
@SubscribeMessage('events')
handleEvent(client: Client, data: unknown): WsResponse<unknown> {
  const event = 'events';
  return { event, data };
}
`),cf()(),Aa(56,`pre`)(57,`code`,11),bT(58,`
@UsePipes(new ValidationPipe({ exceptionFactory: (errors) => new WsException(errors) }))
@SubscribeMessage('events')
handleEvent(client, data) {
  const event = 'events';
  return { event, data };
}
`),cf()()(),Aa(59,`p`),bT(60,`Method-, gateway-, and global-scoped pipes run for every parameter of the message handler. To transform or validate only the message payload, bind the pipe at the parameter level instead, e.g., `),Aa(61,`code`),bT(62,`@MessageBody(new ParseIntPipe())`),cf(),bT(63,` or `),Aa(64,`code`),bT(65,`@MessageBody('id', ParseIntPipe)`),cf(),bT(66,`.`),cf(),Aa(67,`h4`,12)(68,`span`),bT(69,`Schema-based validation`),cf()(),Aa(70,`p`),bT(71,`Like the HTTP parameter decorators, `),Aa(72,`code`),bT(73,`@MessageBody()`),cf(),bT(74,` accepts an options object with a `),Aa(75,`code`),bT(76,`schema`),cf(),bT(77,` property. The schema can come from any `),Aa(78,`a`,13),bT(79,`Standard Schema`),cf(),bT(80,` compatible library, such as Zod, Valibot, or ArkType. The built-in `),Aa(81,`code`),bT(82,`StandardSchemaValidationPipe`),cf(),bT(83,` validates the payload against that schema, and passes parameters without a schema through unchanged. See `),Aa(84,`a`,14),bT(85,`Schema-based validation`),cf(),bT(86,` for details.`),cf(),Aa(87,`app-copy-button`,9)(88,`span`,10),Wa(89,`app-tabs`,null,2),cf(),Aa(91,`pre`)(92,`code`,11),bT(93,`
@UsePipes(
  new StandardSchemaValidationPipe({
    exceptionFactory: (issues) => new WsException(issues),
  }),
)
@SubscribeMessage('events')
handleEvent(@MessageBody({ schema: createEventSchema }) data: CreateEventDto) {
  return data;
}
`),cf()(),Aa(94,`pre`)(95,`code`,11),bT(96,`
@UsePipes(
  new StandardSchemaValidationPipe({
    exceptionFactory: (issues) => new WsException(issues),
  }),
)
@Bind(MessageBody({ schema: createEventSchema }))
@SubscribeMessage('events')
handleEvent(data) {
  return data;
}
`),cf()()(),Aa(97,`p`),bT(98,`To extract a single property and validate it, pass the property key first: `),Aa(99,`code`),bT(100),cf(),bT(101,`.`),cf()(),Aa(102,`a`,15),Wa(103,`i`,16),Aa(104,`span`),bT(105,`Edit on GitHub`),cf()()()),d&2){let p=tT(52),w=tT(90);zC(53),zy(`hide`,p.isJsActive),zC(3),zy(`hide`,!p.isJsActive),zC(35),zy(`hide`,w.isJsActive),zC(3),zy(`hide`,!w.isJsActive),zC(6),Ky(`@MessageBody('id', `,`{`,` schema: z.number() `,`}`,`)`)}},dependencies:[Jc,Lt,ln,u],encapsulation:2})}return a})();var Be=[{path:`gateways`,component:H,data:{title:`Gateways`}},{path:`pipes`,component:R,data:{title:`Pipes - Gateways`}},{path:`exception-filters`,component:F,data:{title:`Exception Filters - Gateways`}},{path:`guards`,component:J,data:{title:`Guards - Gateways`}},{path:`interceptors`,component:q,data:{title:`Interceptors - Gateways`}},{path:`adapter`,component:G,data:{title:`Adapter - Gateways`}}];export{Be as WEBSOCKETS_ROUTES};