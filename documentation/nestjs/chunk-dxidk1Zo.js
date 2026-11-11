import{C as hf,M as xy,N as zC,T as jT,_ as Wa,a as u,b as cf,d as Jc,i as g,k as tT,l as Aa,m as LT,n as ln,p as Ky,r as xt,t as Lt,w as im,x as ef,y as bT}from"./main-MGM3KLFF.js";var O=(()=>{class s extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(s)))(p||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-ai-overview`]],features:[xy],decls:846,vars:32,consts:[[`contentReference`,``],[`appfd0f0e401b92e59fc41181e96a150d83aa720bd8`,``],[`appa0c8e05964ec5c9fb3e309a8f7c83783683d7c22`,``],[`app09e405f94789b9bf1a60c46586c773bbc52e5f65`,``],[`app10499c2d1e0f07bbbfc949e80f2084ac02be02d9`,``],[`app9e7ea76e632c4a98cdd654a9ce58e144afaba2cc`,``],[`app270cfb7ebb6c6af4f28a86732ea1d69ddb2b8c67`,``],[`app87d73dbdf974f6f7c9e2bfb2d1bc7ee915cb3e66`,``],[1,`content`],[1,`content-inner`],[`id`,`ai`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://ai-sdk.dev`],[`href`,`/reliability/resilience`],[`href`,`/ai/overview#structured-output`],[`href`,`/ai/models#retries-timeouts-and-fallback`],[`href`,`/ai/models#usage-cost-and-budgets`],[`routerLink`,`/ai/tools`],[`href`,`/ai/agents#streaming-to-the-browser`],[`href`,`/ai/agents#durable-agent-runs`],[`routerLink`,`/ai/embeddings`],[`routerLink`,`/ai/testing`],[`appAnchor`,``,`id`,`installation`],[1,`language-bash`],[1,`info`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://standardschema.dev`],[`appAnchor`,``,`id`,`register-the-models`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`routerLink`,`/ai/models`],[`href`,`/ai/overview#async-configuration`],[`appAnchor`,``,`id`,`calling-a-model`],[`href`,`/ai/agents#conversations`],[`appAnchor`,``,`id`,`structured-output`],[`appAnchor`,``,`id`,`async-configuration`],[`href`,`/ai/models#calling-the-ai-sdk-yourself`],[`routerLink`,`/fundamentals/lazy-loading-modules`],[`appAnchor`,``,`id`,`one-package-for-many-providers`],[`href`,`/ai/models#model-settings`],[`appAnchor`,``,`id`,`module-options`],[`href`,`/ai/embeddings#embedding-settings`],[`appAnchor`,``,`id`,`example`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://github.com/nestjs/ai/tree/master/sample`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/ai/overview.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,8,0)(2,`div`,9)(3,`h3`,10),bT(4,`AI`),cf(),Aa(5,`p`)(6,`code`),bT(7,`@nestjs/ai`),cf(),bT(8,` brings language models into a Nest application: models registered by name and injected, calls with timeouts, retries and fallback models, answers validated by a schema, and the methods of your providers as agent functions, which the model calls as tools.`),cf(),Aa(9,`p`),bT(10,`The online store for cat food and supplies gets a hundred support emails a day, and its customers would rather ask the website about their orders than write one. Both are jobs for a language model, inside the order API: sort an email and draft a reply, or answer a customer in a chat with what the API knows about their orders.`),cf(),Aa(11,`p`),bT(12,`The package builds on the `),Aa(13,`a`,11),bT(14,`AI SDK`),cf(),bT(15,` (`),Aa(16,`code`),bT(17,`ai`),cf(),bT(18,`) and its provider packages, so any model they support works: Claude, GPT, Gemini, Mistral, or a model behind a gateway. Model calls run on the policies of `),Aa(19,`a`,12)(20,`code`),bT(21,`@nestjs/resilience`),cf()(),bT(22,`. You write an agent function, a method with `),Aa(23,`code`),bT(24,`@AgentFunction()`),cf(),bT(25,`, and the model is offered it as a tool: every call of one goes through the guards, interceptors, pipes and exception filters your routes use, as the user the model acts for.`),cf(),Aa(26,`p`),bT(27,`In this chapter, you'll give the store's order API:`),cf(),Aa(28,`ul`)(29,`li`),bT(30,`A `),Aa(31,`a`,13),bT(32,`triage`),cf(),bT(33,` of support emails into a typed object, and a drafted reply, with a fast and cheap model.`),cf(),Aa(34,`li`)(35,`a`,14),bT(36,`Retries, timeouts and a fallback model`),cf(),bT(37,` around every call, a `),Aa(38,`a`,15),bT(39,`budget`),cf(),bT(40,` per call, and a record of what each one cost.`),cf(),Aa(41,`li`)(42,`a`,16),bT(43,`Agent functions`),cf(),bT(44,` the model calls as the signed-in customer, among them `),Aa(45,`code`),bT(46,`find-order`),cf(),bT(47,`, which the store's MCP server serves too: one method, two consumers.`),cf(),Aa(48,`li`),bT(49,`A `),Aa(50,`a`,17),bT(51,`chat assistant`),cf(),bT(52,` whose answer streams to the browser as it's written.`),cf(),Aa(53,`li`),bT(54,`A `),Aa(55,`a`,18),bT(56,`refund agent`),cf(),bT(57,` that waits for the support team's approval, as a durable workflow.`),cf(),Aa(58,`li`)(59,`a`,19),bT(60,`Embeddings`),cf(),bT(61,` of its product descriptions, for a search that finds products by what they mean.`),cf(),Aa(62,`li`)(63,`a`,20),bT(64,`Tests`),cf(),bT(65,` that run without a model provider.`),cf()(),Aa(66,`h4`,21)(67,`span`),bT(68,`Installation`),cf()(),Aa(69,`p`),bT(70,`Install the package, `),Aa(71,`code`),bT(72,`@nestjs/resilience`),cf(),bT(73,`, whose policies model calls run on, the AI SDK, a provider package, and Zod, for the schemas:`),cf(),Aa(74,`pre`)(75,`code`,22),bT(76,`
$ npm i --save @nestjs/ai @nestjs/resilience ai @ai-sdk/anthropic zod
`),cf()(),Aa(77,`blockquote`,23)(78,`strong`),bT(79,`Hint`),cf(),bT(80,` Every `),Aa(81,`code`),bT(82,`@ai-sdk/*`),cf(),bT(83,` provider package works the same way: `),Aa(84,`code`),bT(85,`@ai-sdk/openai`),cf(),bT(86,`, `),Aa(87,`code`),bT(88,`@ai-sdk/google`),cf(),bT(89,`, `),Aa(90,`code`),bT(91,`@ai-sdk/mistral`),cf(),bT(92,`, `),Aa(93,`code`),bT(94,`@ai-sdk/amazon-bedrock`),cf(),bT(95,` and the others. Schemas can come from any `),Aa(96,`a`,24),bT(97,`Standard Schema`),cf(),bT(98,` library that produces JSON Schema, as for `),Aa(99,`code`),bT(100,`@nestjs/mcp`),cf(),bT(101,`: Zod 4.2 or later and ArkType as they are, Valibot through `),Aa(102,`code`),bT(103,`toStandardJsonSchema()`),cf(),bT(104,`. Each major version of `),Aa(105,`code`),bT(106,`@nestjs/ai`),cf(),bT(107,` supports one major version of the AI SDK, `),Aa(108,`code`),bT(109,`ai`),cf(),bT(110,` 7 for this one, and it needs Node.js 22 or later, as the AI SDK does.
`),cf(),Aa(111,`h4`,25)(112,`span`),bT(113,`Register the models`),cf()(),Aa(114,`p`),bT(115,`Import `),Aa(116,`code`),bT(117,`AiModule`),cf(),bT(118,` in the root module, with the models the application uses, by name. Calls that name no model use `),Aa(119,`code`),bT(120,`default`),cf(),bT(121,`:`),cf(),Aa(122,`app-copy-button`,26)(123,`span`,27),bT(124),LT(125,`extension`),Wa(126,`app-tabs`,null,1),cf(),Aa(128,`pre`)(129,`code`,28),bT(130,`
import { anthropic } from '@ai-sdk/anthropic';
import { Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';
import { SupportModule } from './support/support.module';

@Module({
  imports: [
    AiModule.forRoot({
      isGlobal: true,
      models: {
        default: anthropic('claude-opus-5-5'),
        fast: {
          model: anthropic('claude-haiku-5-5'),
          fallback: 'default',
        },
      },
      defaults: { timeout: '30s', retry: { attempts: 3 } },
    }),
    SupportModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(131,`p`),bT(132,`A model is what a provider package returns, such as `),Aa(133,`code`),bT(134,`anthropic('claude-opus-5-5')`),cf(),bT(135,`, or a definition with it as `),Aa(136,`code`),bT(137,`model`),cf(),bT(138,` and settings of its own: `),Aa(139,`code`),bT(140,`fallback`),cf(),bT(141,`, the models tried when it fails, `),Aa(142,`code`),bT(143,`pricing`),cf(),bT(144,`, `),Aa(145,`code`),bT(146,`timeout`),cf(),bT(147,`, `),Aa(148,`code`),bT(149,`retry`),cf(),bT(150,`, and generation settings such as `),Aa(151,`code`),bT(152,`maxOutputTokens`),cf(),bT(153,`. `),Aa(154,`code`),bT(155,`defaults`),cf(),bT(156,` apply to every call: here, an attempt may take 30 seconds, and each model gets three attempts. `),Aa(157,`a`,29),bT(158,`Models`),cf(),bT(159,` describes every setting.`),cf(),Aa(160,`p`),bT(161,`The provider package reads its API key from the environment, `),Aa(162,`code`),bT(163,`ANTHROPIC_API_KEY`),cf(),bT(164,` for `),Aa(165,`code`),bT(166,`@ai-sdk/anthropic`),cf(),bT(167,`. To pass it from `),Aa(168,`code`),bT(169,`ConfigService`),cf(),bT(170,` instead, create the provider in a factory: see `),Aa(171,`a`,30),bT(172,`Async configuration`),cf(),bT(173,`.`),cf(),Aa(174,`p`)(175,`code`),bT(176,`isGlobal: true`),cf(),bT(177,` lets every module of the application inject `),Aa(178,`code`),bT(179,`AiService`),cf(),bT(180,`. Without it, the module isn't global: `),Aa(181,`code`),bT(182,`AiService`),cf(),bT(183,` is injected only in the module that imports `),Aa(184,`code`),bT(185,`AiModule.forRoot()`),cf(),bT(186,`. To share one configuration with some modules only, import it in a module of your own that exports it, and import that module where models are called:`),cf(),Aa(187,`app-copy-button`,26)(188,`span`,27),bT(189),LT(190,`extension`),Wa(191,`app-tabs`,null,2),cf(),Aa(193,`pre`)(194,`code`,28),bT(195,`
import { anthropic } from '@ai-sdk/anthropic';
import { Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';

@Module({
  imports: [
    AiModule.forRoot({ models: { default: anthropic('claude-opus-5-5') } }),
  ],
  exports: [AiModule],
})
export class LlmModule {}
`),cf()()(),Aa(196,`h4`,31)(197,`span`),bT(198,`Calling a model`),cf()(),Aa(199,`p`)(200,`code`),bT(201,`AiService`),cf(),bT(202,` makes the calls. `),Aa(203,`code`),bT(204,`generateText()`),cf(),bT(205,` sends a prompt, with `),Aa(206,`code`),bT(207,`instructions`),cf(),bT(208,` (the system prompt), and resolves with the answer:`),cf(),Aa(209,`app-copy-button`,26)(210,`span`,27),bT(211),LT(212,`extension`),Wa(213,`app-tabs`,null,3),cf(),Aa(215,`pre`)(216,`code`,28),bT(217,`
import { Injectable } from '@nestjs/common';
import { AiService } from '@nestjs/ai';

@Injectable()
export class RepliesService {
  constructor(private readonly ai: AiService) {}

  async draft(email: string): Promise<string> {
    const { text } = await this.ai.generateText({
      model: 'fast',
      label: 'draft-reply',
      instructions:
        'Draft a short, friendly reply to the customer. ' +
        'Sign it "The Cat Store".',
      prompt: email,
      maxOutputTokens: 400,
    });
    return text;
  }
}
`),cf()()(),Aa(218,`p`)(219,`code`),bT(220,`model`),cf(),bT(221,` names one of the module's models, `),Aa(222,`code`),bT(223,`default`),cf(),bT(224,` when it's left out, and `),Aa(225,`code`),bT(226,`label`),cf(),bT(227,` names the call in `),Aa(228,`a`,15),bT(229,`usage events`),cf(),bT(230,` and in the events of its policies. `),Aa(231,`code`),bT(232,`prompt`),cf(),bT(233,` is the user's message; `),Aa(234,`code`),bT(235,`messages`),cf(),bT(236,` takes a whole conversation instead, as the AI SDK's `),Aa(237,`code`),bT(238,`ModelMessage`),cf(),bT(239,` objects (see `),Aa(240,`a`,32),bT(241,`Conversations`),cf(),bT(242,`). The result has more than the text:`),cf(),Aa(243,`table`)(244,`thead`)(245,`tr`)(246,`th`),bT(247,`Property`),cf(),Aa(248,`th`),bT(249,`What it is`),cf()()(),Aa(250,`tbody`)(251,`tr`)(252,`td`)(253,`code`),bT(254,`text`),cf()(),Aa(255,`td`),bT(256,`The answer: the text of the last model call`),cf()(),Aa(257,`tr`)(258,`td`)(259,`code`),bT(260,`finishReason`),cf()(),Aa(261,`td`),bT(262,`Why the model stopped: `),Aa(263,`code`),bT(264,`'stop'`),cf(),bT(265,`, `),Aa(266,`code`),bT(267,`'length'`),cf(),bT(268,` when it reached `),Aa(269,`code`),bT(270,`maxOutputTokens`),cf(),bT(271,`, or `),Aa(272,`code`),bT(273,`'tool-calls'`),cf(),bT(274,` when it still asked for tools after `),Aa(275,`code`),bT(276,`maxSteps`),cf(),bT(277,` model calls`),cf()(),Aa(278,`tr`)(279,`td`)(280,`code`),bT(281,`usage`),cf()(),Aa(282,`td`),bT(283,`The tokens of every model call, summed: `),Aa(284,`code`),bT(285,`inputTokens`),cf(),bT(286,`, `),Aa(287,`code`),bT(288,`outputTokens`),cf(),bT(289,`, `),Aa(290,`code`),bT(291,`totalTokens`),cf(),bT(292,`, `),Aa(293,`code`),bT(294,`cachedInputTokens`),cf(),bT(295,` and `),Aa(296,`code`),bT(297,`reasoningTokens`),cf()()(),Aa(298,`tr`)(299,`td`)(300,`code`),bT(301,`cost`),cf()(),Aa(302,`td`),bT(303,`What the call cost, for models with `),Aa(304,`code`),bT(305,`pricing`),cf()()(),Aa(306,`tr`)(307,`td`)(308,`code`),bT(309,`steps`),cf()(),Aa(310,`td`),bT(311,`One per model call, with its text, tool calls, usage, and the attempts it took`),cf()(),Aa(312,`tr`)(313,`td`)(314,`code`),bT(315,`toolCalls`),cf(),bT(316,`, `),Aa(317,`code`),bT(318,`toolResults`),cf()(),Aa(319,`td`),bT(320,`The tools the model called, with their input, and what each returned or why it failed`),cf()(),Aa(321,`tr`)(322,`td`)(323,`code`),bT(324,`responseMessages`),cf()(),Aa(325,`td`),bT(326,`The assistant and tool messages of the call, to append to a conversation`),cf()(),Aa(327,`tr`)(328,`td`)(329,`code`),bT(330,`model`),cf()(),Aa(331,`td`),bT(332,`The model that answered: its `),Aa(333,`code`),bT(334,`name`),cf(),bT(335,`, `),Aa(336,`code`),bT(337,`provider`),cf(),bT(338,` and `),Aa(339,`code`),bT(340,`modelId`),cf()()()()(),Aa(341,`p`),bT(342,`A call that names a model the module doesn't configure, an agent function that doesn't exist, or both `),Aa(343,`code`),bT(344,`prompt`),cf(),bT(345,` and `),Aa(346,`code`),bT(347,`messages`),cf(),bT(348,`, is refused with an `),Aa(349,`code`),bT(350,`AiConfigurationError`),cf(),bT(351,` before anything is sent.`),cf(),Aa(352,`h4`,33)(353,`span`),bT(354,`Structured output`),cf()(),Aa(355,`p`),bT(356,`Sorting an email is a job for `),Aa(357,`code`),bT(358,`generateObject()`),cf(),bT(359,`. The model is sent the schema's JSON Schema, and its answer is parsed and validated by the schema, so `),Aa(360,`code`),bT(361,`object`),cf(),bT(362,` is typed by it:`),cf(),Aa(363,`app-copy-button`,26)(364,`span`,27),bT(365),LT(366,`extension`),Wa(367,`app-tabs`,null,4),cf(),Aa(369,`pre`)(370,`code`,28),bT(371,`
import { Injectable } from '@nestjs/common';
import { AiService } from '@nestjs/ai';
import * as z from 'zod';

export const Triage = z.object({
  category: z
    .enum(['shipping', 'billing', 'product', 'other'])
    .describe('What the email is about'),
  orderId: z
    .string()
    .nullable()
    .describe('The order id it mentions, such as ord_123, or null'),
  urgent: z.boolean().describe('Whether the customer needs an answer today'),
});

@Injectable()
export class TriageService {
  constructor(private readonly ai: AiService) {}

  async triage(email: string) {
    const { object } = await this.ai.generateObject({
      model: 'fast',
      label: 'triage',
      schema: Triage,
      instructions:
        'You sort the support email of a store for cat food and supplies.',
      prompt: email,
    });
    return object; // { category, orderId, urgent }
  }
}
`),cf()()(),Aa(372,`p`),bT(373,`The model reads the `),Aa(374,`code`),bT(375,`.describe()`),cf(),bT(376,` texts, as it reads an agent function's: say what each field means, with an example value. `),Aa(377,`code`),bT(378,`schemaName`),cf(),bT(379,` and `),Aa(380,`code`),bT(381,`schemaDescription`),cf(),bT(382,` name and describe the object, for providers that pass them on to the model. Besides `),Aa(383,`code`),bT(384,`object`),cf(),bT(385,`, the result has everything `),Aa(386,`code`),bT(387,`generateText()`),cf(),bT(388,`'s has: `),Aa(389,`code`),bT(390,`usage`),cf(),bT(391,`, `),Aa(392,`code`),bT(393,`cost`),cf(),bT(394,`, `),Aa(395,`code`),bT(396,`steps`),cf(),bT(397,` and the rest.`),cf(),Aa(398,`p`),bT(399,`An answer that isn't JSON, or doesn't match the schema, rejects with `),Aa(400,`code`),bT(401,`AiOutputError`),cf(),bT(402,`, which carries the model's `),Aa(403,`code`),bT(404,`text`),cf(),bT(405,`. It isn't retried, and no fallback model is tried: the model did answer.`),cf(),Aa(406,`p`),bT(407,`The schema's transforms run on the answer, while the model is sent the JSON Schema of its input side. The store also extracts the lines of its suppliers' invoices, and wants the due date as a `),Aa(408,`code`),bT(409,`Date`),cf(),bT(410,`; the model is asked for an ISO date string:`),cf(),Aa(411,`app-copy-button`,26)(412,`span`,27),bT(413),LT(414,`extension`),Wa(415,`app-tabs`,null,5),cf(),Aa(417,`pre`)(418,`code`,28),bT(419,`
import { Injectable } from '@nestjs/common';
import { AiService } from '@nestjs/ai';
import * as z from 'zod';

const Invoice = z.object({
  number: z.string().describe('The invoice number, such as INV-2041'),
  total: z.number().describe('The total, in cents'),
  dueDate: z.iso.date().transform((value) => new Date(\`\${value}T00:00:00Z\`)),
  lines: z.array(
    z.object({
      description: z.string(),
      amount: z.number().describe('In cents'),
    }),
  ),
});

@Injectable()
export class InvoicesService {
  constructor(private readonly ai: AiService) {}

  async extract(email: string) {
    const { object } = await this.ai.generateObject({
      label: 'invoice',
      schema: Invoice,
      schemaName: 'invoice',
      instructions: 'Extract the invoice from the email of a supplier.',
      prompt: email,
    });
    return object; // object.dueDate is a Date
  }
}
`),cf()()(),Aa(420,`p`),bT(421,`The same call works in a queue job, where the store reads its suppliers' mailbox: the code that calls the model doesn't change with where it runs.`),cf(),Aa(422,`p`),bT(423,`With `),Aa(424,`a`,16),bT(425,`tools`),cf(),bT(426,`, the model can look things up before it answers, and the object is the answer of its last model call. A model that is still calling tools after `),Aa(427,`code`),bT(428,`maxSteps`),cf(),bT(429,` model calls has given no object, so the call rejects with `),Aa(430,`code`),bT(431,`AiOutputError`),cf(),bT(432,` too.`),cf(),Aa(433,`h4`,34)(434,`span`),bT(435,`Async configuration`),cf()(),Aa(436,`p`)(437,`code`),bT(438,`forRootAsync()`),cf(),bT(439,` takes the options from a factory, a `),Aa(440,`code`),bT(441,`useClass`),cf(),bT(442,` or a `),Aa(443,`code`),bT(444,`useExisting`),cf(),bT(445,` provider. Here, the factory creates the provider with the API key from `),Aa(446,`code`),bT(447,`ConfigService`),cf(),bT(448,`:`),cf(),Aa(449,`app-copy-button`,26)(450,`span`,27),bT(451),LT(452,`extension`),Wa(453,`app-tabs`,null,6),cf(),Aa(455,`pre`)(456,`code`,28),bT(457,`
import { createAnthropic } from '@ai-sdk/anthropic';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AiModule } from '@nestjs/ai';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AiModule.forRootAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const anthropic = createAnthropic({
          apiKey: config.getOrThrow<string>('ANTHROPIC_API_KEY'),
        });
        return {
          models: {
            default: anthropic('claude-opus-5-5'),
            fast: { model: anthropic('claude-haiku-5-5'), fallback: 'default' },
          },
          defaults: { timeout: '30s' },
        };
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(458,`p`),bT(459,`A `),Aa(460,`code`),bT(461,`useClass`),cf(),bT(462,` provider implements `),Aa(463,`code`),bT(464,`AiOptionsFactory`),cf(),bT(465,`, whose `),Aa(466,`code`),bT(467,`createAiOptions()`),cf(),bT(468,` returns the options. `),Aa(469,`code`),bT(470,`isGlobal`),cf(),bT(471,` stays at the top level, and so do `),Aa(472,`code`),bT(473,`modelNames`),cf(),bT(474,` and `),Aa(475,`code`),bT(476,`embeddingModelNames`),cf(),bT(477,`.`),cf(),Aa(478,`p`)(479,`code`),bT(480,`@InjectModel()`),cf(),bT(481,` (see `),Aa(482,`a`,35),bT(483,`Models`),cf(),bT(484,`) needs a provider for each model name it injects, and `),Aa(485,`code`),bT(486,`forRootAsync()`),cf(),bT(487,` creates them before its factory has run: for the names `),Aa(488,`code`),bT(489,`@InjectModel()`),cf(),bT(490,` was seen asking for when the module was defined, in the classes the application had imported by then. A class loaded later, such as one of a `),Aa(491,`a`,36),bT(492,`lazily loaded module`),cf(),bT(493,`, lists its names in `),Aa(494,`code`),bT(495,`modelNames: ['fast']`),cf(),bT(496,`. A name nothing configures fails at startup, with the name of the class that asked for it.`),cf(),Aa(497,`h4`,37)(498,`span`),bT(499,`One package for many providers`),cf()(),Aa(500,`p`),bT(501,`Each `),Aa(502,`code`),bT(503,`@ai-sdk/*`),cf(),bT(504,` provider package is one more dependency to install and keep in step with `),Aa(505,`code`),bT(506,`ai`),cf(),bT(507,`. Most providers and gateways (OpenAI, Groq, Together, Fireworks, DeepSeek, OpenRouter, LiteLLM, Ollama, vLLM and others) also serve the OpenAI API, so a single package, `),Aa(508,`code`),bT(509,`@ai-sdk/openai-compatible`),cf(),bT(510,`, can reach all of them:`),cf(),Aa(511,`pre`)(512,`code`,22),bT(513,`
$ npm i --save @ai-sdk/openai-compatible
`),cf()(),Aa(514,`p`),bT(515,`The providers then become data rather than dependencies: keep their base URLs, API keys and model IDs in a database table or your configuration, and build the models in the `),Aa(516,`code`),bT(517,`forRootAsync()`),cf(),bT(518,` factory:`),cf(),Aa(519,`app-copy-button`,26)(520,`span`,27),bT(521),LT(522,`extension`),Wa(523,`app-tabs`,null,7),cf(),Aa(525,`pre`)(526,`code`,28),bT(527,`
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';
import { ProvidersModule } from './providers/providers.module';
import { ProvidersService } from './providers/providers.service';

@Module({
  imports: [
    AiModule.forRootAsync({
      isGlobal: true,
      imports: [ProvidersModule],
      inject: [ProvidersService],
      useFactory: async (providers: ProvidersService) => {
        // e.g. rows of { name, baseURL, apiKey, modelId }
        const rows = await providers.findAll();
        const models = Object.fromEntries(
          rows.map((row) => [
            row.name,
            createOpenAICompatible({
              name: row.name,
              baseURL: row.baseURL,
              apiKey: row.apiKey,
            })(row.modelId),
          ]),
        );
        return { models };
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(528,`p`),bT(529,`The factory runs once, at startup, so a new row takes effect when the application restarts. One row has to be named `),Aa(530,`code`),bT(531,`default`),cf(),bT(532,`, for the calls that name no model, and an empty table fails the startup. To use a row without a restart, build the model when you call it and pass it as the call's `),Aa(533,`code`),bT(534,`model`),cf(),bT(535,`, which has `),Aa(536,`a`,38),bT(537,`no settings of its own`),cf(),bT(538,`.`),cf(),Aa(539,`p`)(540,`code`),bT(541,`createOpenAICompatible()`),cf(),bT(542,` assumes the least of a server. Set `),Aa(543,`code`),bT(544,`supportsStructuredOutputs: true`),cf(),bT(545,` for a model that accepts a JSON schema, or `),Aa(546,`a`,13),bT(547,`structured output`),cf(),bT(548,` won't send it the schema, and `),Aa(549,`code`),bT(550,`includeUsage: true`),cf(),bT(551,` to ask for usage on streamed calls, which `),Aa(552,`a`,15),bT(553,`budgets`),cf(),bT(554,` rely on.`),cf(),Aa(555,`p`),bT(556,`Use a dedicated `),Aa(557,`code`),bT(558,`@ai-sdk/*`),cf(),bT(559,` package when you need a feature the OpenAI API does not expose, such as Anthropic's prompt caching or Google's grounding settings.`),cf(),Aa(560,`h4`,39)(561,`span`),bT(562,`Module options`),cf()(),Aa(563,`table`)(564,`thead`)(565,`tr`)(566,`th`),bT(567,`Option`),cf(),Aa(568,`th`),bT(569,`Default`),cf(),Aa(570,`th`),bT(571,`Description`),cf()()(),Aa(572,`tbody`)(573,`tr`)(574,`td`)(575,`code`),bT(576,`models`),cf()(),Wa(577,`td`),Aa(578,`td`),bT(579,`The models, by name: a `),Aa(580,`code`),bT(581,`LanguageModel`),cf(),bT(582,`, or `),Aa(583,`code`),bT(584),cf(),bT(585,` with the settings below. Required unless `),Aa(586,`code`),bT(587,`embeddingModels`),cf(),bT(588,` names a model`),cf()(),Aa(589,`tr`)(590,`td`)(591,`code`),bT(592,`models.*.fallback`),cf()(),Wa(593,`td`),Aa(594,`td`),bT(595,`The names of the models tried, in order, when this one fails`),cf()(),Aa(596,`tr`)(597,`td`)(598,`code`),bT(599,`models.*.pricing`),cf()(),Wa(600,`td`),Aa(601,`td`)(602,`code`),bT(603,`input`),cf(),bT(604,`, `),Aa(605,`code`),bT(606,`output`),cf(),bT(607,` and `),Aa(608,`code`),bT(609,`cachedInput`),cf(),bT(610,`: prices per million tokens`),cf()(),Aa(611,`tr`)(612,`td`)(613,`code`),bT(614,`models.*.timeout`),cf(),bT(615,`, `),Aa(616,`code`),bT(617,`retry`),cf(),bT(618,`, `),Aa(619,`code`),bT(620,`resilience`),cf()(),Wa(621,`td`),Aa(622,`td`),bT(623,`The model's own policies, which win over `),Aa(624,`code`),bT(625,`defaults`),cf(),bT(626,`, as its generation settings do`),cf()(),Aa(627,`tr`)(628,`td`)(629,`code`),bT(630,`defaults.timeout`),cf()(),Aa(631,`td`)(632,`code`),bT(633,`'60s'`),cf()(),Aa(634,`td`),bT(635,`How long an attempt may take; `),Aa(636,`code`),bT(637,`false`),cf(),bT(638,` for no limit`),cf()(),Aa(639,`tr`)(640,`td`)(641,`code`),bT(642,`defaults.retry`),cf()(),Aa(643,`td`),bT(644,`3 attempts, from `),Aa(645,`code`),bT(646,`'1s'`),cf()(),Aa(647,`td`),bT(648,`The options of `),Aa(649,`code`),bT(650,`RetryPolicy`),cf(),bT(651,`: `),Aa(652,`code`),bT(653,`attempts`),cf(),bT(654,`, `),Aa(655,`code`),bT(656,`backoff`),cf(),bT(657,` (`),Aa(658,`code`),bT(659,`delay`),cf(),bT(660,`, `),Aa(661,`code`),bT(662,`factor`),cf(),bT(663,`, `),Aa(664,`code`),bT(665,`maxDelay`),cf(),bT(666,`, `),Aa(667,`code`),bT(668,`jitter`),cf(),bT(669,`, or a function), `),Aa(670,`code`),bT(671,`retryIf`),cf(),bT(672,`; `),Aa(673,`code`),bT(674,`false`),cf(),bT(675,` for none`),cf()(),Aa(676,`tr`)(677,`td`)(678,`code`),bT(679,`defaults.resilience`),cf()(),Wa(680,`td`),Aa(681,`td`),bT(682,`A policy, or the name of a `),Aa(683,`code`),bT(684,`ResilienceService`),cf(),bT(685,` preset, in place of `),Aa(686,`code`),bT(687,`retry`),cf(),bT(688,` and `),Aa(689,`code`),bT(690,`timeout`),cf()()(),Aa(691,`tr`)(692,`td`)(693,`code`),bT(694,`defaults.maxSteps`),cf()(),Aa(695,`td`)(696,`code`),bT(697,`10`),cf()(),Aa(698,`td`),bT(699,`The model calls one call makes while the model asks for tools, and one durable run (whose own default is `),Aa(700,`code`),bT(701,`25`),cf(),bT(702,`)`),cf()(),Aa(703,`tr`)(704,`td`)(705,`code`),bT(706,`defaults.budget`),cf()(),Wa(707,`td`),Aa(708,`td`)(709,`code`),bT(710,`maxTokens`),cf(),bT(711,` and `),Aa(712,`code`),bT(713,`maxCost`),cf(),bT(714,`, per call and per durable run`),cf()(),Aa(715,`tr`)(716,`td`)(717,`code`),bT(718,`defaults.maxOutputTokens`),cf(),bT(719,`, `),Aa(720,`code`),bT(721,`temperature`),cf(),bT(722,`, `),Aa(723,`code`),bT(724,`providerOptions`),cf(),bT(725,`, `),Aa(726,`code`),bT(727,`headers`),cf()(),Wa(728,`td`),Aa(729,`td`),bT(730,`Passed to the model`),cf()(),Aa(731,`tr`)(732,`td`)(733,`code`),bT(734,`onUsage`),cf()(),Wa(735,`td`),Aa(736,`td`),bT(737,`Called after every model call that answered`),cf()(),Aa(738,`tr`)(739,`td`)(740,`code`),bT(741,`embeddingModels`),cf()(),Wa(742,`td`),Aa(743,`td`),bT(744,`The `),Aa(745,`a`,19),bT(746,`embedding models`),cf(),bT(747,`, by name: an `),Aa(748,`code`),bT(749,`EmbeddingModel`),cf(),bT(750,`, or `),Aa(751,`code`),bT(752),cf(),bT(753,` with settings of its own`),cf()(),Aa(754,`tr`)(755,`td`)(756,`code`),bT(757,`embeddingDefaults`),cf()(),Wa(758,`td`),Aa(759,`td`),bT(760,`The `),Aa(761,`a`,40),bT(762,`settings of embedding calls`),cf(),bT(763,`, which `),Aa(764,`code`),bT(765,`defaults`),cf(),bT(766,` don't reach`),cf()(),Aa(767,`tr`)(768,`td`)(769,`code`),bT(770,`onEmbeddingUsage`),cf()(),Wa(771,`td`),Aa(772,`td`),bT(773,`Called after every embedding call that succeeded`),cf()(),Aa(774,`tr`)(775,`td`)(776,`code`),bT(777,`include`),cf()(),Aa(778,`td`),bT(779,`every module`),cf(),Aa(780,`td`),bT(781,`The modules whose providers are searched for agent functions`),cf()(),Aa(782,`tr`)(783,`td`)(784,`code`),bT(785,`isGlobal`),cf()(),Aa(786,`td`)(787,`code`),bT(788,`false`),cf()(),Aa(789,`td`),bT(790,`Whether the module is global. Top level of `),Aa(791,`code`),bT(792,`forRootAsync()`),cf()()(),Aa(793,`tr`)(794,`td`)(795,`code`),bT(796,`modelNames`),cf()(),Wa(797,`td`),Aa(798,`td`),bT(799,`More model names `),Aa(800,`code`),bT(801,`@InjectModel()`),cf(),bT(802,` may inject, for classes loaded after the module is defined. Top level of `),Aa(803,`code`),bT(804,`forRootAsync()`),cf()()(),Aa(805,`tr`)(806,`td`)(807,`code`),bT(808,`embeddingModelNames`),cf()(),Wa(809,`td`),Aa(810,`td`),bT(811,`The same for `),Aa(812,`code`),bT(813,`@InjectEmbeddingModel()`),cf(),bT(814,`. Top level of `),Aa(815,`code`),bT(816,`forRootAsync()`),cf()()()()(),Aa(817,`p`),bT(818,`Every option of `),Aa(819,`code`),bT(820,`defaults`),cf(),bT(821,` is also an option of each call, which wins. `),Aa(822,`code`),bT(823,`timeout`),cf(),bT(824,`, `),Aa(825,`code`),bT(826,`retry`),cf(),bT(827,`, `),Aa(828,`code`),bT(829,`resilience`),cf(),bT(830,` and the generation settings are also settings of a model's definition, which win over `),Aa(831,`code`),bT(832,`defaults`),cf(),bT(833,`.`),cf(),Aa(834,`h4`,41)(835,`span`),bT(836,`Example`),cf()(),Aa(837,`p`),bT(838,`A working example is available `),Aa(839,`a`,42),bT(840,`here`),cf(),bT(841,`.`),cf()(),Aa(842,`a`,43),Wa(843,`i`,44),Aa(844,`span`),bT(845,`Edit on GitHub`),cf()()()),c&2){let y=tT(127),k=tT(192),A=tT(214),T=tT(368),I=tT(416),M=tT(454),j=tT(524);zC(124),hf(` `,jT(125,11,`app.module`,y.isJsActive),`
`),zC(65),hf(` `,jT(190,14,`llm/llm.module`,k.isJsActive),`
`),zC(22),hf(` `,jT(212,17,`support/replies.service`,A.isJsActive),`
`),zC(154),hf(` `,jT(366,20,`support/triage.service`,T.isJsActive),`
`),zC(48),hf(` `,jT(414,23,`suppliers/invoices.service`,I.isJsActive),`
`),zC(38),hf(` `,jT(452,26,`app.module`,M.isJsActive),`
`),zC(70),hf(` `,jT(522,29,`app.module`,j.isJsActive),`
`),zC(63),Ky(``,`{`,` model, ... `,`}`),zC(168),Ky(``,`{`,` model, ... `,`}`)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return s})();var P=(()=>{class s extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(s)))(p||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-ai-models`]],features:[xy],decls:756,vars:26,consts:[[`contentReference`,``],[`appd17741642d457cd7d3b5bd826a06960b4b589c30`,``],[`app9aed96eacc20a205adbdda85a80f5686c16d1a0c`,``],[`appc73578bd513faa21d598ae07fdf03d2dbcc2dc46`,``],[`app33eaec87940d417cda0f3653084be9b6ba57e33a`,``],[`app6c71bef7ac44b1d2bdb5ab0587e33c9b67ffc128`,``],[`app5206f4032196e45b9c0b3f83148fbd2bacd125b6`,``],[1,`content`],[1,`content-inner`],[`id`,`models`],[`appAnchor`,``,`id`,`model-settings`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://vercel.com/docs/ai-gateway`],[`appAnchor`,``,`id`,`calling-the-ai-sdk-yourself`],[`appAnchor`,``,`id`,`retries-timeouts-and-fallback`],[`href`,`/reliability/resilience`],[`appAnchor`,``,`id`,`when-a-call-fails`],[`appAnchor`,``,`id`,`policies-of-your-own`],[`appAnchor`,``,`id`,`usage-cost-and-budgets`],[1,`info`],[`routerLink`,`/observability/overview`],[`href`,`/observability/sdk#model-calls`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/ai/models.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,7,0)(2,`div`,8)(3,`h3`,9),bT(4,`Models`),cf(),Aa(5,`p`),bT(6,`Every model call runs under a timeout, retries and fallback models, built from the settings of the call, of its model and of the module, and reports the tokens it used and what they cost.`),cf(),Aa(7,`h4`,10)(8,`span`),bT(9,`Model settings`),cf()(),Aa(10,`p`),bT(11,`A model in `),Aa(12,`code`),bT(13),cf(),bT(14,` is a `),Aa(15,`code`),bT(16,`LanguageModel`),cf(),bT(17,` from a provider package, or a definition with the `),Aa(18,`code`),bT(19,`LanguageModel`),cf(),bT(20,` as its `),Aa(21,`code`),bT(22,`model`),cf(),bT(23,` and settings of its own. The store's Claude models have their prices, and the default one a fallback from another provider:`),cf(),Aa(24,`app-copy-button`,11)(25,`span`,12),bT(26),LT(27,`extension`),Wa(28,`app-tabs`,null,1),cf(),Aa(30,`pre`)(31,`code`,13),bT(32,`
import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';

@Module({
  imports: [
    AiModule.forRoot({
      isGlobal: true,
      models: {
        default: {
          model: anthropic('claude-opus-5-5'),
          pricing: { input: 4, output: 20, cachedInput: 0.2 },
          maxOutputTokens: 4_000,
          fallback: 'backup',
        },
        fast: {
          model: anthropic('claude-haiku-5-5'),
          pricing: { input: 0.1, output: 0.5 },
          timeout: '15s',
        },
        backup: openai('gpt-5'),
      },
      defaults: { timeout: '45s', maxOutputTokens: 1_000 },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(33,`p`),bT(34,`Each setting comes from the call, else from the model's definition, else from the module's `),Aa(35,`code`),bT(36,`defaults`),cf(),bT(37,`. A call to `),Aa(38,`code`),bT(39,`default`),cf(),bT(40,` above is sent `),Aa(41,`code`),bT(42,`maxOutputTokens: 4000`),cf(),bT(43,`, and one to `),Aa(44,`code`),bT(45,`fast`),cf(),bT(46,` or `),Aa(47,`code`),bT(48,`backup`),cf(),Aa(49,`code`),bT(50,`maxOutputTokens: 1000`),cf(),bT(51,`; a call that sets `),Aa(52,`code`),bT(53,`maxOutputTokens: 200`),cf(),bT(54,` sends that, whichever model answers it. `),Aa(55,`code`),bT(56,`fast`),cf(),bT(57,` gives an attempt 15 seconds, the others 45.`),cf(),Aa(58,`table`)(59,`thead`)(60,`tr`)(61,`th`),bT(62,`Settings`),cf(),Aa(63,`th`),bT(64,`Set on`),cf()()(),Aa(65,`tbody`)(66,`tr`)(67,`td`)(68,`code`),bT(69,`timeout`),cf(),bT(70,`, `),Aa(71,`code`),bT(72,`retry`),cf(),bT(73,`, `),Aa(74,`code`),bT(75,`resilience`),cf()(),Aa(76,`td`),bT(77,`The call, the model, `),Aa(78,`code`),bT(79,`defaults`),cf()()(),Aa(80,`tr`)(81,`td`)(82,`code`),bT(83,`maxOutputTokens`),cf(),bT(84,`, `),Aa(85,`code`),bT(86,`temperature`),cf(),bT(87,`, `),Aa(88,`code`),bT(89,`providerOptions`),cf(),bT(90,`, `),Aa(91,`code`),bT(92,`headers`),cf()(),Aa(93,`td`),bT(94,`The call, the model, `),Aa(95,`code`),bT(96,`defaults`),cf()()(),Aa(97,`tr`)(98,`td`)(99,`code`),bT(100,`maxSteps`),cf(),bT(101,`, `),Aa(102,`code`),bT(103,`budget`),cf()(),Aa(104,`td`),bT(105,`The call, `),Aa(106,`code`),bT(107,`defaults`),cf()()(),Aa(108,`tr`)(109,`td`)(110,`code`),bT(111,`fallback`),cf()(),Aa(112,`td`),bT(113,`The call, the model`),cf()(),Aa(114,`tr`)(115,`td`)(116,`code`),bT(117,`pricing`),cf()(),Aa(118,`td`),bT(119,`The model`),cf()(),Aa(120,`tr`)(121,`td`)(122,`code`),bT(123,`onUsage`),cf()(),Aa(124,`td`),bT(125,`The call, and the module: both are called`),cf()(),Aa(126,`tr`)(127,`td`)(128,`code`),bT(129,`topP`),cf(),bT(130,`, `),Aa(131,`code`),bT(132,`topK`),cf(),bT(133,`, `),Aa(134,`code`),bT(135,`seed`),cf(),bT(136,`, `),Aa(137,`code`),bT(138,`stopSequences`),cf(),bT(139,`, `),Aa(140,`code`),bT(141,`presencePenalty`),cf(),bT(142,`, `),Aa(143,`code`),bT(144,`frequencyPenalty`),cf(),bT(145,`, `),Aa(146,`code`),bT(147,`toolChoice`),cf(),bT(148,`, `),Aa(149,`code`),bT(150,`fallbackIf`),cf(),bT(151,`, `),Aa(152,`code`),bT(153,`abortSignal`),cf()(),Aa(154,`td`),bT(155,`The call`),cf()()()(),Aa(156,`p`)(157,`code`),bT(158,`providerOptions`),cf(),bT(159,` are the provider package's own options, keyed by the provider's name, and `),Aa(160,`code`),bT(161,`headers`),cf(),bT(162,` are HTTP headers sent with each request to the provider.`),cf(),Aa(163,`p`),bT(164,`In `),Aa(165,`code`),bT(166,`models`),cf(),bT(167,`, a model can also be a model id string such as `),Aa(168,`code`),bT(169,`'openai/gpt-5'`),cf(),bT(170,`, which the AI SDK sends through the `),Aa(171,`a`,14),bT(172,`AI Gateway`),cf(),bT(173,`. In a call, a string is always the name of one of the module's models. A call can also take a `),Aa(174,`code`),bT(175,`LanguageModel`),cf(),bT(176,` as its `),Aa(177,`code`),bT(178,`model`),cf(),bT(179,`, or in its `),Aa(180,`code`),bT(181,`fallback`),cf(),bT(182,`: it has no settings of its own, and the result's `),Aa(183,`code`),bT(184,`model.name`),cf(),bT(185,` is `),Aa(186,`code`),bT(187,`undefined`),cf(),bT(188,`.`),cf(),Aa(189,`h4`,15)(190,`span`),bT(191,`Calling the AI SDK yourself`),cf()(),Aa(192,`p`),bT(193,`To call the AI SDK yourself, inject the model. `),Aa(194,`code`),bT(195,`@InjectModel('fast')`),cf(),bT(196,` injects the `),Aa(197,`code`),bT(198,`LanguageModel`),cf(),bT(199,` that `),Aa(200,`code`),bT(201,`fast`),cf(),bT(202,` names, and `),Aa(203,`code`),bT(204,`@InjectModel()`),cf(),bT(205,` the `),Aa(206,`code`),bT(207,`default`),cf(),bT(208,` one:`),cf(),Aa(209,`app-copy-button`,11)(210,`span`,12),bT(211),LT(212,`extension`),Wa(213,`app-tabs`,null,2),cf(),Aa(215,`pre`)(216,`code`,13),bT(217,`
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/ai';
import { generateText, type LanguageModel } from 'ai';

@Injectable()
export class SummariesService {
  constructor(@InjectModel('fast') private readonly model: LanguageModel) {}

  async summarize(thread: string): Promise<string> {
    const { text } = await generateText({
      model: this.model,
      instructions: 'Summarize the support thread in three sentences.',
      prompt: thread,
    });
    return text;
  }
}
`),cf()()(),Aa(218,`p`),bT(219,`A name the module doesn't configure fails at startup, naming the class that asked for it: `),Aa(220,`code`),bT(221,`SummariesService: @InjectModel('fats') asks for a model AiModule does not configure.`),cf(),bT(222,` The model is the provider's `),Aa(223,`code`),bT(224,`LanguageModel`),cf(),bT(225,` as it is, so a call made with it gets none of what `),Aa(226,`code`),bT(227,`AiService`),cf(),bT(228,` adds: no timeouts, fallback models, budgets or usage events, and the AI SDK's own retries (`),Aa(229,`code`),bT(230,`maxRetries`),cf(),bT(231,`, 2 by default) instead of the policies below. `),Aa(232,`code`),bT(233,`AiModels`),cf(),bT(234,` lists the configured models, with `),Aa(235,`code`),bT(236,`names()`),cf(),bT(237,`, `),Aa(238,`code`),bT(239,`has(name)`),cf(),bT(240,` and `),Aa(241,`code`),bT(242,`get(name)`),cf(),bT(243,`.`),cf(),Aa(244,`h4`,16)(245,`span`),bT(246,`Retries, timeouts and fallback`),cf()(),Aa(247,`p`),bT(248,`Model providers fail: they answer 429 when you send too much, 529 when they are overloaded, and now and then take a minute to answer. Every model call runs under the policies of `),Aa(249,`a`,17)(250,`code`),bT(251,`@nestjs/resilience`),cf()(),bT(252,`, built from three settings:`),cf(),Aa(253,`ul`)(254,`li`)(255,`strong`)(256,`code`),bT(257,`timeout`),cf()(),bT(258,`: a `),Aa(259,`code`),bT(260,`TimeoutPolicy`),cf(),bT(261,`, `),Aa(262,`code`),bT(263,`'60s'`),cf(),bT(264,` by default, per attempt: until the whole answer for `),Aa(265,`code`),bT(266,`generateText()`),cf(),bT(267,` and `),Aa(268,`code`),bT(269,`generateObject()`),cf(),bT(270,`, until the first chunk for `),Aa(271,`code`),bT(272,`streamText()`),cf(),bT(273,`. The time tools take doesn't count, since the model has answered by then. `),Aa(274,`code`),bT(275,`false`),cf(),bT(276,` turns it off.`),cf(),Aa(277,`li`)(278,`strong`)(279,`code`),bT(280,`retry`),cf()(),bT(281,`: a `),Aa(282,`code`),bT(283,`RetryPolicy`),cf(),bT(284,`, with its options: `),Aa(285,`code`),bT(286,`attempts`),cf(),bT(287,` (3 by default, the first included), `),Aa(288,`code`),bT(289,`backoff`),cf(),bT(290,` (from `),Aa(291,`code`),bT(292,`'1s'`),cf(),bT(293,`, doubling up to `),Aa(294,`code`),bT(295,`'30s'`),cf(),bT(296,`, with full jitter) and `),Aa(297,`code`),bT(298,`retryIf`),cf(),bT(299,`. What the provider marks retryable is retried, 408, 409, 429 and 5xx responses and failed connections, and so are timeouts. A `),Aa(300,`code`),bT(301,`retry-after`),cf(),bT(302,` header is honored, and one that asks for longer than `),Aa(303,`code`),bT(304,`backoff.maxDelay`),cf(),bT(305,` moves on to the fallback instead. `),Aa(306,`code`),bT(307,`retry: false`),cf(),bT(308,` turns retries off.`),cf(),Aa(309,`li`)(310,`strong`)(311,`code`),bT(312,`fallback`),cf()(),bT(313,`: the models tried, in order, once the model's retries have run out, each under its own policies. A call sets its own with `),Aa(314,`code`),bT(315,`fallback: ['default']`),cf(),bT(316,`, or none with `),Aa(317,`code`),bT(318,`fallback: false`),cf(),bT(319,`, and `),Aa(320,`code`),bT(321,`fallbackIf`),cf(),bT(322,` narrows which failures move on.`),cf()(),Aa(323,`p`),bT(324,`A call can change any of them:`),cf(),Aa(325,`app-copy-button`)(326,`pre`)(327,`code`,13),bT(328,`
const { text } = await this.ai.generateText({
  model: 'fast',
  prompt: email,
  timeout: '10s',
  retry: { attempts: 2, backoff: { delay: '500ms' } },
  fallback: ['default', 'backup'],
  // A request the provider refused (400) would be refused by the next one too
  fallbackIf: (error) =>
    !APICallError.isInstance(error) || error.statusCode !== 400,
});
`),cf()()(),Aa(329,`p`),bT(330,`Only the call's own model has its `),Aa(331,`code`),bT(332,`fallback`),cf(),bT(333,` followed: a fallback model's `),Aa(334,`code`),bT(335,`fallback`),cf(),bT(336,` isn't, so a call that should go on to a third model lists both, as above. `),Aa(337,`code`),bT(338,`APICallError`),cf(),bT(339,` is the AI SDK's error for a provider's response, from `),Aa(340,`code`),bT(341,`ai`),cf(),bT(342,`. Some failures never move on, whatever `),Aa(343,`code`),bT(344,`fallbackIf`),cf(),bT(345,` says: the call's abort, an answer that doesn't match the schema of `),Aa(346,`code`),bT(347,`generateObject()`),cf(),bT(348,`, and the AI SDK's errors for a call it can't send, such as an invalid prompt.`),cf(),Aa(349,`p`),bT(350,`Every fallback is logged as a warning through Nest's `),Aa(351,`code`),bT(352,`Logger`),cf(),bT(353,`, with the model that failed, the model the call moves on to, and the cause: the error's class, its HTTP status and its message. A revoked API key or a refused request can't hide behind a fallback that works: `),Aa(354,`code`),bT(355,`The model "default" failed (APICallError, 401: Invalid API key); falling back to "backup".`),cf()(),Aa(356,`p`),bT(357,`Once a chunk has reached the browser, or the tools of a model call have started, its outcome is committed: no timeout, retry or fallback replaces it, so no answer is sent twice and no tool runs twice.`),cf(),Aa(358,`p`),bT(359,`An `),Aa(360,`code`),bT(361,`abortSignal`),cf(),bT(362,` passed to the call cancels it at once, without a retry or a fallback, and the call rejects with the signal's reason. Inside a resilient route, such as one with `),Aa(363,`code`),bT(364,`@Timeout()`),cf(),bT(365,` from `),Aa(366,`code`),bT(367,`@nestjs/resilience`),cf(),bT(368,`, the route's attempt stops the model calls it makes in the same way.`),cf(),Aa(369,`h4`,18)(370,`span`),bT(371,`When a call fails`),cf()(),Aa(372,`p`),bT(373,`When every attempt fails, on every model tried, the call rejects with `),Aa(374,`code`),bT(375,`AiModelError`),cf(),bT(376,`. Its `),Aa(377,`code`),bT(378,`attempts`),cf(),bT(379,` list each model, attempt and error (a `),Aa(380,`code`),bT(381,`ResilienceTimeoutError`),cf(),bT(382,` for an attempt that ran out of time), and its `),Aa(383,`code`),bT(384,`cause`),cf(),bT(385,` is the last error. The package's errors extend `),Aa(386,`code`),bT(387,`AiError`),cf(),bT(388,`:`),cf(),Aa(389,`table`)(390,`thead`)(391,`tr`)(392,`th`),bT(393,`Error`),cf(),Aa(394,`th`),bT(395,`When`),cf()()(),Aa(396,`tbody`)(397,`tr`)(398,`td`)(399,`code`),bT(400,`AiModelError`),cf()(),Aa(401,`td`),bT(402,`Every attempt failed, on every model tried: `),Aa(403,`code`),bT(404,`attempts`),cf(),bT(405,`, `),Aa(406,`code`),bT(407,`cause`),cf()()(),Aa(408,`tr`)(409,`td`)(410,`code`),bT(411,`AiOutputError`),cf()(),Aa(412,`td`)(413,`code`),bT(414,`generateObject()`),cf(),bT(415,`'s answer isn't JSON or doesn't match the schema, or the model still called tools after `),Aa(416,`code`),bT(417,`maxSteps`),cf(),bT(418,`: `),Aa(419,`code`),bT(420,`text`),cf()()(),Aa(421,`tr`)(422,`td`)(423,`code`),bT(424,`AiBudgetExceededError`),cf()(),Aa(425,`td`),bT(426,`The call has spent its budget, before its next model call: `),Aa(427,`code`),bT(428,`usage`),cf(),bT(429,`, `),Aa(430,`code`),bT(431,`cost`),cf(),bT(432,`, `),Aa(433,`code`),bT(434,`limit`),cf()()(),Aa(435,`tr`)(436,`td`)(437,`code`),bT(438,`AiConfigurationError`),cf()(),Aa(439,`td`),bT(440,`A model, an agent function or an option the package can't use: at startup, or when the call is made, before anything is sent`),cf()(),Aa(441,`tr`)(442,`td`)(443,`code`),bT(444,`AiToolError`),cf()(),Aa(445,`td`),bT(446,`What the model is told about a tool call that failed: `),Aa(447,`code`),bT(448,`toolName`),cf(),bT(449,`, the agent function's name`),cf()()()(),Aa(450,`p`),bT(451,`A route that calls a model answers an `),Aa(452,`code`),bT(453,`AiModelError`),cf(),bT(454,` with 500, as any other error. An exception filter can say the assistant is unavailable instead:`),cf(),Aa(455,`app-copy-button`,11)(456,`span`,12),bT(457),LT(458,`extension`),Wa(459,`app-tabs`,null,3),cf(),Aa(461,`pre`)(462,`code`,13),bT(463,`
import {
  Catch,
  HttpStatus,
  type ArgumentsHost,
  type ExceptionFilter,
} from '@nestjs/common';
import { AiModelError } from '@nestjs/ai';
import type { Response } from 'express';

@Catch(AiModelError)
export class ModelUnavailableFilter implements ExceptionFilter {
  catch(_error: AiModelError, host: ArgumentsHost) {
    host
      .switchToHttp()
      .getResponse<Response>()
      .status(HttpStatus.SERVICE_UNAVAILABLE)
      .json({
        statusCode: HttpStatus.SERVICE_UNAVAILABLE,
        message: 'The assistant is unavailable. Try again in a minute.',
      });
  }
}
`),cf()()(),Aa(464,`h4`,19)(465,`span`),bT(466,`Policies of your own`),cf()(),Aa(467,`p`)(468,`code`),bT(469,`resilience`),cf(),bT(470,` takes a policy, or the name of a preset of `),Aa(471,`code`),bT(472,`ResilienceService`),cf(),bT(473,`, in place of `),Aa(474,`code`),bT(475,`retry`),cf(),bT(476,` and `),Aa(477,`code`),bT(478,`timeout`),cf(),bT(479,`: a circuit breaker or a bulkhead shared with the rest of the application, say. Fallback models are still tried around it, so a call to a model whose breaker is open goes on to the next one:`),cf(),Aa(480,`app-copy-button`,11)(481,`span`,12),bT(482),LT(483,`extension`),Wa(484,`app-tabs`,null,4),cf(),Aa(486,`pre`)(487,`code`,13),bT(488,`
import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';
import { ResilienceModule } from '@nestjs/resilience';

@Module({
  imports: [
    ResilienceModule.forRoot({
      presets: {
        anthropic: {
          retry: { attempts: 3 },
          timeout: '30s',
          circuitBreaker: { name: 'anthropic', failureRateThreshold: 50 },
        },
      },
    }),
    AiModule.forRoot({
      isGlobal: true,
      models: {
        default: {
          model: anthropic('claude-opus-5-5'),
          resilience: 'anthropic',
          fallback: 'backup',
        },
        backup: openai('gpt-5'),
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(489,`p`),bT(490,`A preset replaces the model's `),Aa(491,`code`),bT(492,`retry`),cf(),bT(493,` and `),Aa(494,`code`),bT(495,`timeout`),cf(),bT(496,` with its own: a preset without a `),Aa(497,`code`),bT(498,`timeout`),cf(),bT(499,` leaves the model's calls without one, and a preset's retries honor `),Aa(500,`code`),bT(501,`retry-after`),cf(),bT(502,` only if its `),Aa(503,`code`),bT(504,`backoff`),cf(),bT(505,` does. A rejection of such a policy (`),Aa(506,`code`),bT(507,`CircuitOpenError`),cf(),bT(508,`, `),Aa(509,`code`),bT(510,`BulkheadFullError`),cf(),bT(511,`) that no fallback takes reaches the caller as it is: an error of `),Aa(512,`code`),bT(513,`@nestjs/resilience`),cf(),bT(514,`, which `),Aa(515,`code`),bT(516,`ResilienceModule`),cf(),bT(517,` answers with 503 on an HTTP route. Naming a preset without importing `),Aa(518,`code`),bT(519,`ResilienceModule`),cf(),bT(520,` fails with an `),Aa(521,`code`),bT(522,`AiConfigurationError`),cf(),bT(523,`.`),cf(),Aa(524,`p`),bT(525,`The policies publish the events of `),Aa(526,`code`),bT(527,`@nestjs/resilience`),cf(),bT(528,` on the `),Aa(529,`code`),bT(530,`nestjs:resilience:<type>`),cf(),bT(531,` diagnostics channels: `),Aa(532,`code`),bT(533,`retry`),cf(),bT(534,`, `),Aa(535,`code`),bT(536,`timeout`),cf(),bT(537,` and `),Aa(538,`code`),bT(539,`fallback`),cf(),bT(540,`, named after the model (`),Aa(541,`code`),bT(542,`ai:fast retry`),cf(),bT(543,`, `),Aa(544,`code`),bT(545,`ai:fast fallback`),cf(),bT(546,`), with the call's `),Aa(547,`code`),bT(548,`label`),cf(),bT(549,` as their `),Aa(550,`code`),bT(551,`source`),cf(),bT(552,` (`),Aa(553,`code`),bT(554,`AiService`),cf(),bT(555,` for a call without one). To log the retries of every model call:`),cf(),Aa(556,`app-copy-button`,11)(557,`span`,12),bT(558),LT(559,`extension`),Wa(560,`app-tabs`,null,5),cf(),Aa(562,`pre`)(563,`code`,13),bT(564,`
import { subscribe } from 'node:diagnostics_channel';
import { Logger } from '@nestjs/common';
import type { ResilienceRetryEvent } from '@nestjs/resilience';

const logger = new Logger('Models');

subscribe('nestjs:resilience:retry', (message) => {
  const event = message as ResilienceRetryEvent;
  logger.warn(
    \`\${event.source}: attempt \${event.attempt} of \${event.policy} failed, \` +
      \`retrying in \${Math.round(event.delayMs)} ms\`,
  );
});
`),cf()()(),Aa(565,`h4`,20)(566,`span`),bT(567,`Usage, cost and budgets`),cf()(),Aa(568,`p`),bT(569,`Every model call that answers emits a usage event. With a model's `),Aa(570,`code`),bT(571,`pricing`),cf(),bT(572,`, in a unit of your choice per million tokens, it also has a `),Aa(573,`code`),bT(574,`cost`),cf(),bT(575,`, in the same unit. `),Aa(576,`code`),bT(577,`onUsage`),cf(),bT(578,` receives them:`),cf(),Aa(579,`app-copy-button`,11)(580,`span`,12),bT(581),LT(582,`extension`),Wa(583,`app-tabs`,null,6),cf(),Aa(585,`pre`)(586,`code`,13),bT(587,`
import { anthropic } from '@ai-sdk/anthropic';
import { Logger, Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';

const usage = new Logger('Usage');

@Module({
  imports: [
    AiModule.forRoot({
      isGlobal: true,
      models: {
        // US dollars per million tokens
        default: {
          model: anthropic('claude-opus-5-5'),
          pricing: { input: 4, output: 20, cachedInput: 0.2 },
        },
      },
      onUsage: (event) =>
        usage.log(
          \`\${event.label ?? 'call'} on \${event.model.name}: \` +
            \`\${event.usage.totalTokens} tokens, $\${event.cost?.toFixed(4)}\`,
        ),
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(588,`table`)(589,`thead`)(590,`tr`)(591,`th`),bT(592,`Property`),cf(),Aa(593,`th`),bT(594,`What it is`),cf()()(),Aa(595,`tbody`)(596,`tr`)(597,`td`)(598,`code`),bT(599,`label`),cf()(),Aa(600,`td`),bT(601,`The call's `),Aa(602,`code`),bT(603,`label`),cf(),bT(604,`, to tell calls apart`),cf()(),Aa(605,`tr`)(606,`td`)(607,`code`),bT(608,`model`),cf()(),Aa(609,`td`),bT(610,`The model that answered: `),Aa(611,`code`),bT(612,`name`),cf(),bT(613,`, `),Aa(614,`code`),bT(615,`provider`),cf(),bT(616,`, `),Aa(617,`code`),bT(618,`modelId`),cf()()(),Aa(619,`tr`)(620,`td`)(621,`code`),bT(622,`step`),cf(),bT(623,`, `),Aa(624,`code`),bT(625,`attempt`),cf()(),Aa(626,`td`),bT(627,`The model call's step in the call (from 0), and the attempt of this model for it (from 1)`),cf()(),Aa(628,`tr`)(629,`td`)(630,`code`),bT(631,`fallback`),cf(),bT(632,`, `),Aa(633,`code`),bT(634,`stream`),cf()(),Aa(635,`td`),bT(636,`Whether a fallback model answered, and whether the call was streamed`),cf()(),Aa(637,`tr`)(638,`td`)(639,`code`),bT(640,`usage`),cf()(),Aa(641,`td`)(642,`code`),bT(643,`inputTokens`),cf(),bT(644,` (cached ones included), `),Aa(645,`code`),bT(646,`outputTokens`),cf(),bT(647,`, `),Aa(648,`code`),bT(649,`totalTokens`),cf(),bT(650,`, `),Aa(651,`code`),bT(652,`cachedInputTokens`),cf(),bT(653,`, `),Aa(654,`code`),bT(655,`reasoningTokens`),cf()()(),Aa(656,`tr`)(657,`td`)(658,`code`),bT(659,`cost`),cf()(),Aa(660,`td`),bT(661,`The input tokens not read from the cache at `),Aa(662,`code`),bT(663,`input`),cf(),bT(664,`, the cached ones at `),Aa(665,`code`),bT(666,`cachedInput`),cf(),bT(667,` (default: `),Aa(668,`code`),bT(669,`input`),cf(),bT(670,`), and the output tokens at `),Aa(671,`code`),bT(672,`output`),cf(),bT(673,`; `),Aa(674,`code`),bT(675,`undefined`),cf(),bT(676,` without `),Aa(677,`code`),bT(678,`pricing`),cf()()(),Aa(679,`tr`)(680,`td`)(681,`code`),bT(682,`durationMs`),cf(),bT(683,`, `),Aa(684,`code`),bT(685,`finishReason`),cf()(),Aa(686,`td`),bT(687,`How long the model call took, and why the model stopped`),cf()()()(),Aa(688,`p`),bT(689,`A call can take its own `),Aa(690,`code`),bT(691,`onUsage`),cf(),bT(692,` too, which is called after the module's. What a listener throws is logged, and never fails the call. The store meters the assistant's tokens per customer:`),cf(),Aa(693,`app-copy-button`)(694,`pre`)(695,`code`,13),bT(696,`
const { text } = await this.ai.generateText({
  label: 'assistant',
  prompt: question,
  onUsage: (event) =>
    this.metering.record(customerId, event.usage.totalTokens, event.cost),
});
`),cf()()(),Aa(697,`p`),bT(698,`A `),Aa(699,`code`),bT(700,`budget`),cf(),bT(701,` limits one call: `),Aa(702,`code`),bT(703,`maxTokens`),cf(),bT(704,` and `),Aa(705,`code`),bT(706,`maxCost`),cf(),bT(707,`, over all its model calls. A call that uses tools makes several, and the budget is checked before each one: a call that has spent it rejects, before its next model call, with `),Aa(708,`code`),bT(709,`AiBudgetExceededError`),cf(),bT(710,`, which carries what was spent (`),Aa(711,`code`),bT(712,`usage`),cf(),bT(713,`, `),Aa(714,`code`),bT(715,`cost`),cf(),bT(716,`) and the `),Aa(717,`code`),bT(718,`limit`),cf(),bT(719,`. The check can't stop a model call halfway, so the last one can take a call over its budget. A model without `),Aa(720,`code`),bT(721,`pricing`),cf(),bT(722,` counts as free. `),Aa(723,`code`),bT(724,`defaults.budget`),cf(),bT(725,` applies a budget to every call:`),cf(),Aa(726,`app-copy-button`)(727,`pre`)(728,`code`,13),bT(729,`
const { object } = await this.ai.generateObject({
  model: 'fast',
  schema: Triage,
  prompt: email,
  tools: ['find-order'],
  budget: { maxTokens: 20_000, maxCost: 0.01 },
});
`),cf()()(),Aa(730,`blockquote`,21)(731,`strong`),bT(732,`Hint`),cf(),bT(733,` Since `),Aa(734,`code`),bT(735,`@nestjs/observe`),cf(),bT(736,` 0.3.20, `),Aa(737,`a`,22),bT(738,`NestJS Observe`),cf(),bT(739,` records the model and the tokens of every model call on its outbound span, as it does for any AI SDK call: see `),Aa(740,`a`,23),bT(741,`Model calls`),cf(),bT(742,`. A model named by a gateway id, such as `),Aa(743,`code`),bT(744,`'openai/gpt-5'`),cf(),bT(745,`, is called through the AI Gateway's host, `),Aa(746,`code`),bT(747,`ai-gateway.vercel.sh`),cf(),bT(748,`: add it to `),Aa(749,`code`),bT(750,`outgoing.llm.hosts`),cf(),bT(751,` for Observe to read those calls too.
`),cf()(),Aa(752,`a`,24),Wa(753,`i`,25),Aa(754,`span`),bT(755,`Edit on GitHub`),cf()()()),c&2){let y=tT(29),k=tT(214),A=tT(460),T=tT(485),I=tT(561),M=tT(584);zC(13),Ky(`forRoot(`,`{`,` models `,`}`,`)`),zC(13),hf(` `,jT(27,8,`app.module`,y.isJsActive),`
`),zC(185),hf(` `,jT(212,11,`support/summaries.service`,k.isJsActive),`
`),zC(246),hf(` `,jT(458,14,`assistant/model-unavailable.filter`,A.isJsActive),`
`),zC(25),hf(` `,jT(483,17,`app.module`,T.isJsActive),`
`),zC(76),hf(` `,jT(559,20,`main`,I.isJsActive),`
`),zC(23),hf(` `,jT(582,23,`app.module`,M.isJsActive),`
`)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return s})();var F=(()=>{class s extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(s)))(p||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-ai-tools`]],features:[xy],decls:686,vars:52,consts:[[`contentReference`,``],[`app9fc1cecbc7792118c0b0fce671133673caabafb7`,``],[`app1d9f9f67b8ff6f963f5680902571c2b3199151b2`,``],[`appb1b486045ea24f3e92bd510a00a388a04b10c2c7`,``],[`app70156eedbb183be3278251337735397990771216`,``],[`app208f8808ec4ff3f0f63647410f845a4599d44ee8`,``],[`app1775df70758b8921f910666cb48b1d8e7553d4cb`,``],[`app05ed0db318621e5bcdb33edd047f0a5ea50fd403`,``],[`appb00b5df414635aa59311dd0d6f4d1b68c88d7b50`,``],[`app25d7eb4ec31f6a0a09fb9acded6f5cf37974f9c3`,``],[`app042572eda3de0edceb4ab035dc66bf6abda91884`,``],[`app7cc8b03fcee841d52b442a1cb35541c8233c2d9b`,``],[`app5eea7ca2adbe63eb14fbfe9252abac857983521a`,``],[`appc4f02ba27a77dbb8dbb5cb7fd3a5347c3db8e659`,``],[1,`content`],[1,`content-inner`],[`id`,`tools`],[`appAnchor`,``,`id`,`define-an-agent-function`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/ai/tools#who-the-agent-acts-for`],[`appAnchor`,``,`id`,`give-a-call-its-tools`],[`href`,`/ai/agents#the-agent-loop`],[`appAnchor`,``,`id`,`the-call-context`],[`href`,`/ai/agents#durable-agent-runs`],[`href`,`/ai/agents#streaming-to-the-browser`],[`appAnchor`,``,`id`,`who-the-agent-acts-for`],[`appAnchor`,``,`id`,`guards-interceptors-pipes-and-filters`],[1,`warning`],[`appAnchor`,``,`id`,`serving-mcp-clients-too`],[`routerLink`,`/mcp/overview`],[`href`,`/mcp/primitives#tools`],[`appAnchor`,``,`id`,`with-nestjsauthentication-and-nestjsauthorization`],[`href`,`/security/authentication`],[`href`,`/security/authorization`],[1,`info`],[`appAnchor`,``,`id`,`tools-in-your-own-ai-sdk-calls`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/ai/tools.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,14,0)(2,`div`,15)(3,`h3`,16),bT(4,`Tools`),cf(),Aa(5,`p`),bT(6,`An agent function is a method of one of your providers that the model may call, with arguments it fills in, to look something up or to change something: the model reads what the method returns, then calls more functions or answers. You write an agent function; the model is offered it as a tool.`),cf(),Aa(7,`p`),bT(8,`The store's assistant answers questions about orders, so its model must look orders up. In `),Aa(9,`code`),bT(10,`@nestjs/ai`),cf(),bT(11,`, the method that does it is decorated with `),Aa(12,`code`),bT(13,`@AgentFunction()`),cf(),bT(14,`, and it runs through the guards, interceptors, pipes and exception filters of its class and method, as the user the model acts for. It needs nothing beyond `),Aa(15,`code`),bT(16,`@nestjs/ai`),cf(),bT(17,`.`),cf(),Aa(18,`h4`,17)(19,`span`),bT(20,`Define an agent function`),cf()(),Aa(21,`p`)(22,`code`),bT(23,`inputSchema`),cf(),bT(24,` describes the function's arguments: the model is sent its JSON Schema, and every call is validated against it before the method runs. The model picks a function by its name and description, and fills the arguments in from their `),Aa(25,`code`),bT(26,`.describe()`),cf(),bT(27,` texts:`),cf(),Aa(28,`app-copy-button`,18)(29,`span`,19),bT(30),LT(31,`extension`),Wa(32,`app-tabs`,null,1),cf(),Aa(34,`pre`)(35,`code`,20),bT(36,`
import { Injectable, NotFoundException } from '@nestjs/common';
import { AgentFunction } from '@nestjs/ai';
import * as z from 'zod';
import { OrdersService } from './orders.service';

@Injectable()
export class OrdersTools {
  constructor(private readonly orders: OrdersService) {}

  @AgentFunction({
    name: 'find-order',
    description: 'Find an order by its id, with its status',
    inputSchema: z.object({
      orderId: z.string().describe('The order id, such as ord_123'),
    }),
  })
  async find({ orderId }: { orderId: string }) {
    const order = await this.orders.findById(orderId);
    if (!order) {
      throw new NotFoundException(\`There is no order \${orderId}\`);
    }
    return { id: order.id, status: order.status, total: order.total };
  }
}
`),cf()()(),Aa(37,`p`)(38,`code`),bT(39,`@AgentFunction()`),cf(),bT(40,` takes four options, all of them optional:`),cf(),Aa(41,`ul`)(42,`li`)(43,`strong`)(44,`code`),bT(45,`name`),cf()(),bT(46,`: what calls list the function by, and what the model calls it by. It defaults to the method's name, and must be 1 to 64 characters out of `),Aa(47,`code`),bT(48,`A-Z a-z 0-9 _ -`),cf(),bT(49,`, which is what model providers accept as a tool name.`),cf(),Aa(50,`li`)(51,`strong`)(52,`code`),bT(53,`description`),cf()(),bT(54,`: what the function does, for the model.`),cf(),Aa(55,`li`)(56,`strong`)(57,`code`),bT(58,`inputSchema`),cf()(),bT(59,`: its arguments, as an object schema. Without one, the function takes none.`),cf(),Aa(60,`li`)(61,`strong`)(62,`code`),bT(63,`scopes`),cf()(),bT(64,`: the scopes the caller must hold: see `),Aa(65,`a`,21),bT(66,`Who the agent acts for`),cf(),bT(67,`.`),cf()(),Aa(68,`p`),bT(69,`Register the class as a provider, as any other:`),cf(),Aa(70,`app-copy-button`,18)(71,`span`,19),bT(72),LT(73,`extension`),Wa(74,`app-tabs`,null,2),cf(),Aa(76,`pre`)(77,`code`,20),bT(78,`
@Module({
  providers: [OrdersService, OrdersTools],
  exports: [OrdersService],
})
export class OrdersModule {}
`),cf()()(),Aa(79,`p`)(80,`code`),bT(81,`AiModule`),cf(),bT(82,` finds the agent functions of every module of the application; its own `),Aa(83,`code`),bT(84,`include`),cf(),bT(85,` option limits the search to the modules it lists.`),cf(),Aa(86,`h4`,22)(87,`span`),bT(88,`Give a call its tools`),cf()(),Aa(89,`p`),bT(90,`A call lists, in `),Aa(91,`code`),bT(92,`tools`),cf(),bT(93,`, the agent functions its model may use, by name or by provider class (every agent function of the class), and says who it acts for with `),Aa(94,`code`),bT(95,`caller`),cf(),bT(96,`:`),cf(),Aa(97,`app-copy-button`,18)(98,`span`,19),bT(99),LT(100,`extension`),Wa(101,`app-tabs`,null,3),cf(),Aa(103,`pre`)(104,`code`,20),bT(105,`
import { Body, Controller, Post, Req } from '@nestjs/common';
import { AiService } from '@nestjs/ai';
import type { Request } from 'express';

@Controller('assistant')
export class AssistantController {
  constructor(private readonly ai: AiService) {}

  @Post('questions')
  async ask(@Body() body: { question: string }, @Req() request: Request) {
    const { text } = await this.ai.generateText({
      instructions:
        'You help customers of the cat store with their orders. ' +
        'Look an order up before you answer about it.',
      prompt: body.question,
      tools: ['find-order'],
      caller: { request },
    });
    return { answer: text };
  }
}
`),cf()()(),Aa(106,`p`),bT(107,`The model is offered the functions the call lists, as tools, and no other. When it calls one, the arguments are validated against the function's schema, the method runs, and what it returns is sent back to the model, which calls more functions or answers. Each of the model's answers is one model call, and `),Aa(108,`code`),bT(109,`maxSteps`),cf(),bT(110,`, 10 by default, caps how many a call makes: see `),Aa(111,`a`,23),bT(112,`The agent loop`),cf(),bT(113,`. Arguments the schema refuses never reach the method, nor its guards: the model is told what's wrong, and can try again.`),cf(),Aa(114,`p`),bT(115,`Mistakes fail early:`),cf(),Aa(116,`ul`)(117,`li`),bT(118,`A call that lists an agent function that doesn't exist, or a class without any, is refused before anything is sent: `),Aa(119,`code`),bT(120,`There is no agent function named "find-orders". Agent functions: find-order, change-address.`),cf()(),Aa(121,`li`),bT(122,`A name model providers refuse fails at startup, naming the method. So do two agent functions with one name, and an agent function on a request-scoped provider: pass what a call needs through `),Aa(123,`code`),bT(124,`caller`),cf(),bT(125,` instead.`),cf(),Aa(126,`li`),bT(127,`So does a schema that isn't a Standard Schema with JSON Schema, or doesn't describe an object.`),cf()(),Aa(128,`p`),bT(129,`The model reads what the method returns as JSON: a `),Aa(130,`code`),bT(131,`Date`),cf(),bT(132,` as its ISO string, and `),Aa(133,`code`),bT(134,`undefined`),cf(),bT(135,` as `),Aa(136,`code`),bT(137,`null`),cf(),bT(138,`. A method that also serves MCP clients may return an MCP `),Aa(139,`code`),bT(140,`CallToolResult`),cf(),bT(141,`: the model reads its `),Aa(142,`code`),bT(143,`structuredContent`),cf(),bT(144,`, or else its text blocks, joined. Images, audio and other blocks don't reach the model, and a warning in the log says so. A result with `),Aa(145,`code`),bT(146,`isError: true`),cf(),bT(147,` is a tool error, with its text.`),cf(),Aa(148,`h4`,24)(149,`span`),bT(150,`The call context`),cf()(),Aa(151,`p`),bT(152,`An agent function is called with its arguments and an `),Aa(153,`code`),bT(154,`AgentFunctionContext`),cf(),bT(155,`, from `),Aa(156,`code`),bT(157,`@nestjs/ai`),cf(),bT(158,`:`),cf(),Aa(159,`table`)(160,`thead`)(161,`tr`)(162,`th`),bT(163,`Property`),cf(),Aa(164,`th`),bT(165,`What it is`),cf()()(),Aa(166,`tbody`)(167,`tr`)(168,`td`)(169,`code`),bT(170,`name`),cf()(),Aa(171,`td`),bT(172,`The agent function's name`),cf()(),Aa(173,`tr`)(174,`td`)(175,`code`),bT(176,`request`),cf()(),Aa(177,`td`),bT(178,`The HTTP request the call runs in, `),Aa(179,`code`),bT(180,`caller.request`),cf(),bT(181,`, with its headers and the `),Aa(182,`code`),bT(183,`user`),cf(),bT(184,` your authentication set on it`),cf()(),Aa(185,`tr`)(186,`td`)(187,`code`),bT(188,`user`),cf(),bT(189,`, `),Aa(190,`code`),bT(191,`scopes`),cf()(),Aa(192,`td`)(193,`code`),bT(194,`caller.user`),cf(),bT(195,` and `),Aa(196,`code`),bT(197,`caller.scopes`),cf(),bT(198,`: who the call acts for where there is no request, as in a queue job`),cf()(),Aa(199,`tr`)(200,`td`)(201,`code`),bT(202,`toolCallId`),cf()(),Aa(203,`td`),bT(204,`The model's id for this tool call, to tie the function's logs to the conversation`),cf()(),Aa(205,`tr`)(206,`td`)(207,`code`),bT(208,`idempotencyKey`),cf()(),Aa(209,`td`),bT(210,`In a `),Aa(211,`a`,25),bT(212,`durable run`),cf(),bT(213,`, the same for every attempt of this call; `),Aa(214,`code`),bT(215,`undefined`),cf(),bT(216,` elsewhere`),cf()(),Aa(217,`tr`)(218,`td`)(219,`code`),bT(220,`messages`),cf()(),Aa(221,`td`),bT(222,`The conversation the model had read when it called the function, without the system prompt`),cf()(),Aa(223,`tr`)(224,`td`)(225,`code`),bT(226,`signal`),cf()(),Aa(227,`td`),bT(228,`An `),Aa(229,`code`),bT(230,`AbortSignal`),cf(),bT(231,`, aborted when the call is: pass it on to `),Aa(232,`code`),bT(233,`fetch()`),cf(),bT(234,` and your database`),cf()(),Aa(235,`tr`)(236,`td`)(237,`code`),bT(238,`reportProgress(progress, total?, message?)`),cf()(),Aa(239,`td`),bT(240,`In a `),Aa(241,`a`,26),bT(242,`streamed answer`),cf(),bT(243,`, sends the browser the call's progress; elsewhere, does nothing`),cf()()()(),Aa(244,`p`)(245,`code`),bT(246,`change-address`),cf(),bT(247,` lets the assistant change the delivery address of an order. It passes the call's `),Aa(248,`code`),bT(249,`signal`),cf(),bT(250,` on to the database, and a guard checks that the order is the customer's:`),cf(),Aa(251,`app-copy-button`,18)(252,`span`,19),bT(253),LT(254,`extension`),Wa(255,`app-tabs`,null,4),cf(),Aa(257,`pre`)(258,`code`,20),bT(259,`
import { Injectable, UseGuards } from '@nestjs/common';
import { AgentFunction, type AgentFunctionContext } from '@nestjs/ai';
import * as z from 'zod';
import { OrdersService } from '../orders/orders.service';
import { OrderOwnerGuard } from './order-owner.guard';

@Injectable()
export class AssistantTools {
  constructor(private readonly orders: OrdersService) {}

  @AgentFunction({
    name: 'change-address',
    description:
      'Change the delivery address of an order that has not shipped yet',
    inputSchema: z.object({
      orderId: z.string().describe('The order id, such as ord_123'),
      address: z.string().min(10).describe('The full new address'),
    }),
  })
  @UseGuards(OrderOwnerGuard)
  async changeAddress(
    { orderId, address }: { orderId: string; address: string },
    ctx: AgentFunctionContext,
  ) {
    const order = await this.orders.changeAddress(orderId, address, {
      signal: ctx.signal,
    });
    return { id: order.id, address: order.address };
  }
}
`),cf()()(),Aa(260,`h4`,27)(261,`span`),bT(262,`Who the agent acts for`),cf()(),Aa(263,`p`)(264,`code`),bT(265,`caller`),cf(),bT(266,` says who a call acts for, and the agent functions, their guards and the authentication packages read it from the context:`),cf(),Aa(267,`ul`)(268,`li`)(269,`strong`)(270,`code`),bT(271,`request`),cf()(),bT(272,`: in a route, the HTTP request of Express, Fastify or the Node adapter, as `),Aa(273,`code`),bT(274,`@Req()`),cf(),bT(275,` injects it. The functions see it as `),Aa(276,`code`),bT(277,`ctx.request`),cf(),bT(278,`, with the `),Aa(279,`code`),bT(280,`user`),cf(),bT(281,` your authentication set on it, as a route's guards do.`),cf(),Aa(282,`li`)(283,`strong`)(284,`code`),bT(285,`user`),cf()(),bT(286,` and `),Aa(287,`strong`)(288,`code`),bT(289,`scopes`),cf()(),bT(290,`: where there is no request, as in a queue job or a scheduled task, who the call acts for and what they may do. They are `),Aa(291,`code`),bT(292,`ctx.user`),cf(),bT(293,` and `),Aa(294,`code`),bT(295,`ctx.scopes`),cf(),bT(296,`.`),cf()(),Aa(297,`p`),bT(298,`An agent function whose `),Aa(299,`code`),bT(300,`@AgentFunction()`),cf(),bT(301,` declares `),Aa(302,`code`),bT(303,`scopes`),cf(),bT(304,` runs only for a caller that holds them in `),Aa(305,`code`),bT(306,`caller.scopes`),cf(),bT(307,`: otherwise, the call is refused before any guard runs, and the model reads `),Aa(308,`code`),bT(309,`Forbidden: this tool needs the scope(s) orders:refund`),cf(),bT(310,`. A nightly job reviews the refund requests nobody answered, as the store's refund bot:`),cf(),Aa(311,`app-copy-button`,18)(312,`span`,19),bT(313),LT(314,`extension`),Wa(315,`app-tabs`,null,5),cf(),Aa(317,`pre`)(318,`code`,20),bT(319,`
import { Injectable } from '@nestjs/common';
import { AiService } from '@nestjs/ai';

@Injectable()
export class RefundReviewService {
  constructor(private readonly ai: AiService) {}

  review(ticket: { body: string }) {
    return this.ai.generateText({
      label: 'refund-review',
      instructions:
        'Decide whether the refund request is justified, and refund the ' +
        'order if it is.',
      prompt: ticket.body,
      tools: ['find-order', 'refund'],
      caller: {
        user: { id: 'refund-bot', team: 'support' },
        scopes: ['orders:refund'],
      },
    });
  }
}
`),cf()()(),Aa(320,`p`),bT(321,`Nothing a caller lacks is made up: a call without `),Aa(322,`code`),bT(323,`caller`),cf(),bT(324,` runs its agent functions with no request, no user and no scopes.`),cf(),Aa(325,`h4`,28)(326,`span`),bT(327,`Guards, interceptors, pipes and filters`),cf()(),Aa(328,`p`),bT(329,`Every agent function call runs through Nest's enhancers, bound on the class, on the method or globally, as for a route. Its execution context's type is `),Aa(330,`code`),bT(331,`'ai'`),cf(),bT(332,`, and `),Aa(333,`code`),bT(334,`AiExecutionContext`),cf(),bT(335,` reads the call. A customer may change their own orders only:`),cf(),Aa(336,`app-copy-button`,18)(337,`span`,19),bT(338),LT(339,`extension`),Wa(340,`app-tabs`,null,6),cf(),Aa(342,`pre`)(343,`code`,20),bT(344,`
import {
  Injectable,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common';
import { AiExecutionContext, type AiContextType } from '@nestjs/ai';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class OrderOwnerGuard implements CanActivate {
  constructor(private readonly orders: OrdersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (context.getType<AiContextType>() !== 'ai') {
      return false;
    }
    const call = AiExecutionContext.create(context);
    const { orderId } = call.getInput<{ orderId: string }>();
    const order = await this.orders.findById(orderId);
    return order?.customerId === call.getRequest()?.user?.id;
  }
}
`),cf()()(),Aa(345,`p`)(346,`code`),bT(347,`AiExecutionContext.create(context)`),cf(),bT(348,` has `),Aa(349,`code`),bT(350,`getType()`),cf(),bT(351,`, `),Aa(352,`code`),bT(353,`getInput()`),cf(),bT(354,` (the arguments, also `),Aa(355,`code`),bT(356,`switchToRpc().getData()`),cf(),bT(357,`), `),Aa(358,`code`),bT(359,`getContext()`),cf(),bT(360,` (the `),Aa(361,`code`),bT(362,`AgentFunctionContext`),cf(),bT(363,`), `),Aa(364,`code`),bT(365,`getName()`),cf(),bT(366,` and `),Aa(367,`code`),bT(368,`getRequest()`),cf(),bT(369,`. An agent function call goes through these, in order:`),cf(),Aa(370,`ol`)(371,`li`),bT(372,`The arguments are validated against the function's schema.`),cf(),Aa(373,`li`),bT(374,`The function's `),Aa(375,`code`),bT(376,`scopes`),cf(),bT(377,` are checked against the caller's.`),cf(),Aa(378,`li`),bT(379,`The guards run, global ones first, then the interceptors and the pipes, as around a route handler.`),cf(),Aa(380,`li`),bT(381,`The method runs, with the arguments and the context.`),cf()(),Aa(382,`p`),bT(383,`Pipes see the arguments as the call's `),Aa(384,`code`),bT(385,`body`),cf(),bT(386,`, so a `),Aa(387,`code`),bT(388,`ValidationPipe`),cf(),bT(389,` validates a DTO class you type them with, after the function's schema has, and they see the context as a `),Aa(390,`code`),bT(391,`custom`),cf(),bT(392,` parameter, which `),Aa(393,`code`),bT(394,`ValidationPipe`),cf(),bT(395,` skips. Custom parameter decorators made with `),Aa(396,`code`),bT(397,`createParamDecorator()`),cf(),bT(398,` work after the arguments and the context: `),Aa(399,`code`),bT(400,`changeAddress(input, ctx, @CurrentUser() user)`),cf(),bT(401,`.`),cf(),Aa(402,`p`),bT(403,`Interceptors see the method's return value before the model does. This one logs each call, with the id of the model's tool call:`),cf(),Aa(404,`app-copy-button`,18)(405,`span`,19),bT(406),LT(407,`extension`),Wa(408,`app-tabs`,null,7),cf(),Aa(410,`pre`)(411,`code`,20),bT(412,`
import {
  Injectable,
  Logger,
  type CallHandler,
  type ExecutionContext,
  type NestInterceptor,
} from '@nestjs/common';
import { AiExecutionContext } from '@nestjs/ai';
import { tap, type Observable } from 'rxjs';

@Injectable()
export class ToolAuditInterceptor implements NestInterceptor {
  private readonly logger = new Logger('AgentFunctions');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const call = AiExecutionContext.create(context);
    const { toolCallId } = call.getContext();
    return next
      .handle()
      .pipe(tap(() => this.logger.log(\`\${call.getName()} (\${toolCallId})\`)));
  }
}
`),cf()()(),Aa(413,`p`),bT(414,`What an agent function throws reaches the model as an error it can recover from, and tell the user about: a guard's refusal as `),Aa(415,`code`),bT(416,`Forbidden resource`),cf(),bT(417,`, the message of an `),Aa(418,`code`),bT(419,`HttpException`),cf(),bT(420,` (a `),Aa(421,`code`),bT(422,`BadRequestException('The address has no postcode')`),cf(),bT(423,`), and `),Aa(424,`code`),bT(425,`Internal server error`),cf(),bT(426,` for any other error, which Nest's exception handler logs and whose message never reaches the model. An exception filter can answer instead: what it returns is the function's result.`),cf(),Aa(427,`blockquote`,29)(428,`strong`),bT(429,`Warning`),cf(),bT(430,` Global guards, interceptors and filters (`),Aa(431,`code`),bT(432,`APP_GUARD`),cf(),bT(433,`, `),Aa(434,`code`),bT(435,`app.useGlobalGuards()`),cf(),bT(436,`) run on agent function calls too, as they do on MCP calls. An enhancer written for HTTP routes that reads `),Aa(437,`code`),bT(438,`context.switchToHttp()`),cf(),bT(439,` should check `),Aa(440,`code`),bT(441,`context.getType() === 'http'`),cf(),bT(442,` first.
`),cf(),Aa(443,`h4`,30)(444,`span`),bT(445,`Serving MCP clients too`),cf()(),Aa(446,`p`),bT(447,`The order API already has an `),Aa(448,`a`,31),bT(449,`MCP server`),cf(),bT(450,`, whose clients, the support team's assistants, call `),Aa(451,`code`),bT(452,`find-order`),cf(),bT(453,` too. One method serves both consumers: it carries `),Aa(454,`code`),bT(455,`@Tool()`),cf(),bT(456,` from `),Aa(457,`a`,32)(458,`code`),bT(459,`@nestjs/mcp`),cf()(),bT(460,`, for MCP clients, and `),Aa(461,`code`),bT(462,`@AgentFunction()`),cf(),bT(463,`, for the application's agents, each with options of its own. Neither decorator reads the other's: a method with `),Aa(464,`code`),bT(465,`@Tool()`),cf(),bT(466,` alone is no agent function, and one with `),Aa(467,`code`),bT(468,`@AgentFunction()`),cf(),bT(469,` alone is no MCP tool. A schema constant saves writing the schema twice:`),cf(),Aa(470,`app-copy-button`,18)(471,`span`,19),bT(472),LT(473,`extension`),Wa(474,`app-tabs`,null,8),cf(),Aa(476,`pre`)(477,`code`,20),bT(478,`
import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { AgentFunction } from '@nestjs/ai';
import { Tool } from '@nestjs/mcp';
import * as z from 'zod';
import { OrderVisibilityGuard } from './order-visibility.guard';
import { OrdersService } from './orders.service';

const FindOrderInput = z.object({
  orderId: z.string().describe('The order id, such as ord_123'),
});

@Injectable()
export class OrdersTools {
  constructor(private readonly orders: OrdersService) {}

  @Tool({
    name: 'find-order',
    description: 'Find an order by its id, with its status',
    inputSchema: FindOrderInput,
    annotations: { readOnlyHint: true },
  })
  @AgentFunction({
    name: 'find-order',
    description: 'Find an order by its id, with its status',
    inputSchema: FindOrderInput,
  })
  @UseGuards(OrderVisibilityGuard)
  async find({ orderId }: { orderId: string }) {
    const order = await this.orders.findById(orderId);
    if (!order) {
      throw new NotFoundException(\`There is no order \${orderId}\`);
    }
    return { id: order.id, status: order.status, total: order.total };
  }
}
`),cf()()(),Aa(479,`p`),bT(480,`Each consumer finds its own decorator: `),Aa(481,`code`),bT(482,`McpModule`),cf(),bT(483,` serves the `),Aa(484,`code`),bT(485,`@Tool()`),cf(),bT(486,` methods of the modules its `),Aa(487,`code`),bT(488,`include`),cf(),bT(489,` lists, and `),Aa(490,`code`),bT(491,`AiModule`),cf(),bT(492,` finds the `),Aa(493,`code`),bT(494,`@AgentFunction()`),cf(),bT(495,` methods:`),cf(),Aa(496,`app-copy-button`,18)(497,`span`,19),bT(498),LT(499,`extension`),Wa(500,`app-tabs`,null,9),cf(),Aa(502,`pre`)(503,`code`,20),bT(504,`
@Module({
  imports: [
    AiModule.forRoot({
      isGlobal: true,
      models: { default: anthropic('claude-opus-5-5') },
    }),
    McpModule.forRoot({
      name: 'cat-store',
      version: '1.0.0',
      include: [OrdersModule],
    }),
    OrdersModule,
    AssistantModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(505,`p`),bT(506,`MCP clients get `),Aa(507,`code`),bT(508,`find-order`),cf(),bT(509,`, and the assistant may call `),Aa(510,`code`),bT(511,`find-order`),cf(),bT(512,` and `),Aa(513,`code`),bT(514,`change-address`),cf(),bT(515,`, which has no `),Aa(516,`code`),bT(517,`@Tool()`),cf(),bT(518,`.`),cf(),Aa(519,`p`),bT(520,`The two kinds of call have context types of their own: `),Aa(521,`code`),bT(522,`'mcp'`),cf(),bT(523,` for an MCP client's call, which `),Aa(524,`code`),bT(525,`McpExecutionContext`),cf(),bT(526,` reads, and `),Aa(527,`code`),bT(528,`'ai'`),cf(),bT(529,` for an agent's, which `),Aa(530,`code`),bT(531,`AiExecutionContext`),cf(),bT(532,` reads. The guards, interceptors and filters of a method that serves both see both, and tell them apart with `),Aa(533,`code`),bT(534,`context.getType()`),cf(),bT(535,`. `),Aa(536,`code`),bT(537,`find-order`),cf(),bT(538,` shows a customer only their own orders through the assistant, and the support team's MCP clients every order:`),cf(),Aa(539,`app-copy-button`,18)(540,`span`,19),bT(541),LT(542,`extension`),Wa(543,`app-tabs`,null,10),cf(),Aa(545,`pre`)(546,`code`,20),bT(547,`
import {
  Injectable,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common';
import { AiExecutionContext, type AiContextType } from '@nestjs/ai';
import type { McpContextType } from '@nestjs/mcp';
import { OrdersService } from './orders.service';

@Injectable()
export class OrderVisibilityGuard implements CanActivate {
  constructor(private readonly orders: OrdersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    switch (context.getType<AiContextType | McpContextType>()) {
      case 'mcp':
        return true;
      case 'ai': {
        const call = AiExecutionContext.create(context);
        const { orderId } = call.getInput<{ orderId: string }>();
        const order = await this.orders.findById(orderId);
        return !order || order.customerId === call.getRequest()?.user?.id;
      }
      default:
        return false;
    }
  }
}
`),cf()()(),Aa(548,`p`),bT(549,`The method's second argument is an `),Aa(550,`code`),bT(551,`McpContext`),cf(),bT(552,` for an MCP client's call, and an `),Aa(553,`code`),bT(554,`AgentFunctionContext`),cf(),bT(555,` for an agent's. Custom parameter decorators, made with `),Aa(556,`code`),bT(557,`createParamDecorator()`),cf(),bT(558,`, run for both kinds of call as well, and the `),Aa(559,`code`),bT(560,`ExecutionContext`),cf(),bT(561,` they receive has the type of the call they run for.`),cf(),Aa(562,`h4`,33)(563,`span`),bT(564,`With `),Aa(565,`code`),bT(566,`@nestjs/authentication`),cf(),bT(567,` and `),Aa(568,`code`),bT(569,`@nestjs/authorization`),cf()()(),Aa(570,`p`)(571,`a`,34)(572,`code`),bT(573,`@nestjs/authentication`),cf()(),bT(574,` and `),Aa(575,`a`,35)(576,`code`),bT(577,`@nestjs/authorization`),cf()(),bT(578,` read agent function calls as they read MCP clients' calls: from their arguments, with the request the call runs in. In a route, the global authentication guard authenticates each call from the request it runs in (once: the route's result is reused), `),Aa(579,`code`),bT(580,`@CurrentUser()`),cf(),bT(581,` and `),Aa(582,`code`),bT(583,`AuthenticationContext`),cf(),bT(584,` work in agent functions, and `),Aa(585,`code`),bT(586,`@Can()`),cf(),bT(587,` policies decide each call. An agent function that declares no `),Aa(588,`code`),bT(589,`@Can()`),cf(),bT(590,` is denied, as a route is, and the model reads `),Aa(591,`code`),bT(592,`Forbidden`),cf(),bT(593,`:`),cf(),Aa(594,`app-copy-button`,18)(595,`span`,19),bT(596),LT(597,`extension`),Wa(598,`app-tabs`,null,11),cf(),Aa(600,`pre`)(601,`code`,20),bT(602,`
@AgentFunction({
  name: 'cancel-order',
  description: 'Cancel an order that has not shipped yet',
  inputSchema: z.object({ orderId: z.string() }),
})
@Can(OrderPolicy, 'cancel')
cancel(
  { orderId }: { orderId: string },
  ctx: AgentFunctionContext,
  @CurrentUser() customer: Customer,
) {
  return this.orders.cancel(orderId, customer.id);
}
`),cf()()(),Aa(603,`p`),bT(604,`In a job, there is no request. `),Aa(605,`code`),bT(606,`@Can()`),cf(),bT(607,` finds the caller's `),Aa(608,`code`),bT(609,`user`),cf(),bT(610,` on the context, and the authentication guard treats the call as anonymous, as it does over stdio, so mark the providers of the agent functions that jobs call `),Aa(611,`code`),bT(612,`@Public()`),cf(),bT(613,`:`),cf(),Aa(614,`app-copy-button`,18)(615,`span`,19),bT(616),LT(617,`extension`),Wa(618,`app-tabs`,null,12),cf(),Aa(620,`pre`)(621,`code`,20),bT(622,`
@Injectable()
@Public()
export class RefundTools {
  constructor(private readonly orders: OrdersService) {}

  @AgentFunction({
    name: 'refund',
    description: 'Refund an order to the card it was paid with',
    inputSchema: z.object({ orderId: z.string() }),
    scopes: ['orders:refund'],
  })
  @Can(OrderPolicy, 'refund')
  refund({ orderId }: { orderId: string }) {
    return this.orders.refund(orderId);
  }
}
`),cf()()(),Aa(623,`p`),bT(624,`A refusal is Nest's `),Aa(625,`code`),bT(626,`UnauthorizedException`),cf(),bT(627,` or `),Aa(628,`code`),bT(629,`ForbiddenException`),cf(),bT(630,`, as on a route, and the model reads it as the tool's error: `),Aa(631,`code`),bT(632,`Unauthorized`),cf(),bT(633,`, or `),Aa(634,`code`),bT(635,`Forbidden`),cf(),bT(636,`.`),cf(),Aa(637,`blockquote`,36)(638,`strong`),bT(639,`Hint`),cf(),bT(640,` This needs `),Aa(641,`code`),bT(642,`@nestjs/authentication`),cf(),bT(643,` 0.1.4 and `),Aa(644,`code`),bT(645,`@nestjs/authorization`),cf(),bT(646,` 0.1.2 or later, the first versions that know the `),Aa(647,`code`),bT(648,`'ai'`),cf(),bT(649,` context type.
`),cf(),Aa(650,`h4`,37)(651,`span`),bT(652,`Tools in your own AI SDK calls`),cf()(),Aa(653,`p`)(654,`code`),bT(655,`AiTools`),cf(),bT(656,` turns agent functions into the AI SDK's tools: `),Aa(657,`code`),bT(658,`select()`),cf(),bT(659,` takes the same list a call's `),Aa(660,`code`),bT(661,`tools`),cf(),bT(662,` does, and the `),Aa(663,`code`),bT(664,`caller`),cf(),bT(665,` their calls run as, for code that calls the AI SDK itself. The functions keep their schemas, scopes and enhancers:`),cf(),Aa(666,`app-copy-button`,18)(667,`span`,19),bT(668),LT(669,`extension`),Wa(670,`app-tabs`,null,13),cf(),Aa(672,`pre`)(673,`code`,20),bT(674,`
@Injectable()
export class SummariesService {
  constructor(
    @InjectModel('fast') private readonly model: LanguageModel,
    private readonly tools: AiTools,
  ) {}

  summarize(thread: string, request: Request) {
    return generateText({
      model: this.model,
      prompt: thread,
      tools: this.tools.select(['find-order'], { caller: { request } }),
      stopWhen: stepCountIs(3),
    });
  }
}
`),cf()()(),Aa(675,`p`)(676,`code`),bT(677,`stopWhen`),cf(),bT(678,` and `),Aa(679,`code`),bT(680,`stepCountIs()`),cf(),bT(681,` are the AI SDK's: it runs its own loop here, as it does any of its calls.`),cf()(),Aa(682,`a`,38),Wa(683,`i`,39),Aa(684,`span`),bT(685,`Edit on GitHub`),cf()()()),c&2){let y=tT(33),k=tT(75),A=tT(102),T=tT(256),I=tT(316),M=tT(341),j=tT(409),C=tT(475),q=tT(501),W=tT(544),L=tT(599),J=tT(619),N=tT(671);zC(30),hf(` `,jT(31,13,`orders/orders.tools`,y.isJsActive),`
`),zC(42),hf(` `,jT(73,16,`orders/orders.module`,k.isJsActive),`
`),zC(27),hf(` `,jT(100,19,`assistant/assistant.controller`,A.isJsActive),`
`),zC(154),hf(` `,jT(254,22,`assistant/assistant.tools`,T.isJsActive),`
`),zC(60),hf(` `,jT(314,25,`refunds/refund-review.service`,I.isJsActive),`
`),zC(25),hf(` `,jT(339,28,`assistant/order-owner.guard`,M.isJsActive),`
`),zC(68),hf(` `,jT(407,31,`common/tool-audit.interceptor`,j.isJsActive),`
`),zC(66),hf(` `,jT(473,34,`orders/orders.tools`,C.isJsActive),`
`),zC(26),hf(` `,jT(499,37,`app.module`,q.isJsActive),`
`),zC(43),hf(` `,jT(542,40,`orders/order-visibility.guard`,W.isJsActive),`
`),zC(55),hf(` `,jT(597,43,`orders/orders.tools`,L.isJsActive),`
`),zC(20),hf(` `,jT(617,46,`refunds/refund.tools`,J.isJsActive),`
`),zC(52),hf(` `,jT(669,49,`support/summaries.service`,N.isJsActive),`
`)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return s})();var _=(()=>{class s extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(s)))(p||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-ai-agents`]],features:[xy],decls:685,vars:40,consts:[[`contentReference`,``],[`appc43108054e28a9e0c4c28124bb10130f650616d4`,``],[`app30a1f3e1762ba25405131b0ed71169ab44fc8e6b`,``],[`appdbe964398c0f98635caca7534d006bb2bd09a744`,``],[`app500ef253fc58c717adacb67f09f6b9e473ab615a`,``],[`app931a0893c0a16ca313ef6241be66e94aa00a3ed9`,``],[`app7c1219ecf488bf3e4c1382ff0b206812a0003cbe`,``],[`app1a73e3a4ed81fe1d7c58324534c0d9156e59666c`,``],[`app133cf885f109f5fb3919ed2075883e391534dcab`,``],[`appd0cf1c15a21075a7d0634050a24d309990bc19d0`,``],[1,`content`],[1,`content-inner`],[`id`,`agents`],[`routerLink`,`/ai/tools`],[`appAnchor`,``,`id`,`the-agent-loop`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`appAnchor`,``,`id`,`conversations`],[`href`,`/ai/agents#streaming-to-the-browser`],[`appAnchor`,``,`id`,`streaming-to-the-browser`],[`appAnchor`,``,`id`,`durable-agent-runs`],[`href`,`/reliability/workflows`],[1,`language-bash`],[`href`,`/reliability/workflows#keep-workflows-in-your-database`],[`href`,`/ai/tools#with-nestjsauthentication-and-nestjsauthorization`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/ai/agents.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,10,0)(2,`div`,11)(3,`h3`,12),bT(4,`Agents`),cf(),Aa(5,`p`),bT(6,`An agent is a model that calls tools in a loop: it reads what each tool returns, then calls more tools or answers, until it has answered or reached its limit of model calls.`),cf(),Aa(7,`p`),bT(8,`Every `),Aa(9,`code`),bT(10,`AiService`),cf(),bT(11,` call with `),Aa(12,`a`,13),bT(13,`tools`),cf(),bT(14,`, your agent functions, runs that loop, inside your process: there is nothing else to deploy. This page covers what comes with it: the loop and its limits, conversations, answers streamed to the browser as they are written, and durable runs that survive restarts and wait for a person's approval.`),cf(),Aa(15,`h4`,14)(16,`span`),bT(17,`The agent loop`),cf()(),Aa(18,`p`),bT(19,`A call with tools makes a model call, runs the tools the model asked for, and makes the next model call with their results, until the model answers without asking for a tool. Each model call is a `),Aa(20,`strong`),bT(21,`step`),cf(),bT(22,`, and the result lists them:`),cf(),Aa(23,`app-copy-button`,15)(24,`span`,16),bT(25),LT(26,`extension`),Wa(27,`app-tabs`,null,1),cf(),Aa(29,`pre`)(30,`code`,17),bT(31,`
import { Injectable, Logger } from '@nestjs/common';
import { AiService } from '@nestjs/ai';

@Injectable()
export class AssistantService {
  private readonly logger = new Logger(AssistantService.name);

  constructor(private readonly ai: AiService) {}

  async answer(question: string, request: unknown) {
    const result = await this.ai.generateText({
      label: 'assistant',
      prompt: question,
      tools: ['find-order', 'change-address'],
      caller: { request },
      maxSteps: 5,
    });
    for (const step of result.steps) {
      const tools = step.toolCalls.map((call) => call.toolName).join(', ');
      this.logger.log(
        \`Step \${step.index}: \${tools || 'answered'}, \` +
          \`\${step.usage.totalTokens} tokens, \${step.attempts} attempt(s)\`,
      );
    }
    return result.text;
  }
}
`),cf()()(),Aa(32,`p`),bT(33,`Each step has its `),Aa(34,`code`),bT(35,`text`),cf(),bT(36,`, `),Aa(37,`code`),bT(38,`toolCalls`),cf(),bT(39,`, `),Aa(40,`code`),bT(41,`toolResults`),cf(),bT(42,` (what each tool returned as `),Aa(43,`code`),bT(44,`output`),cf(),bT(45,`, or the `),Aa(46,`code`),bT(47,`error`),cf(),bT(48,` the model was told), `),Aa(49,`code`),bT(50,`finishReason`),cf(),bT(51,`, `),Aa(52,`code`),bT(53,`usage`),cf(),bT(54,`, `),Aa(55,`code`),bT(56,`cost`),cf(),bT(57,`, the `),Aa(58,`code`),bT(59,`model`),cf(),bT(60,` that answered and the `),Aa(61,`code`),bT(62,`attempts`),cf(),bT(63,` it took.`),cf(),Aa(64,`p`)(65,`code`),bT(66,`maxSteps`),cf(),bT(67,` caps the model calls of one call, 10 by default (`),Aa(68,`code`),bT(69,`defaults.maxSteps`),cf(),bT(70,` changes it for every call). When it runs out while the model still asks for tools, `),Aa(71,`code`),bT(72,`generateText()`),cf(),bT(73,` resolves with what it has, and its `),Aa(74,`code`),bT(75,`finishReason`),cf(),bT(76,` is `),Aa(77,`code`),bT(78,`'tool-calls'`),cf(),bT(79,`; `),Aa(80,`code`),bT(81,`generateObject()`),cf(),bT(82,` rejects with `),Aa(83,`code`),bT(84,`AiOutputError`),cf(),bT(85,`, since it has no object to give. Tools run inside their step: their time doesn't count against the model's `),Aa(86,`code`),bT(87,`timeout`),cf(),bT(88,`, and a step whose tools have started is never retried, so no tool runs twice.`),cf(),Aa(89,`p`)(90,`code`),bT(91,`toolChoice`),cf(),bT(92,` is passed to the model as the AI SDK's: `),Aa(93,`code`),bT(94,`'auto'`),cf(),bT(95,`, the default, lets the model choose, and `),Aa(96,`code`),bT(97,`'none'`),cf(),bT(98,` offers the tools but lets it call none. `),Aa(99,`code`),bT(100,`'required'`),cf(),bT(101,` and `),Aa(102,`code`),bT(103),cf(),bT(104,` make it call one, which not every model accepts.`),cf(),Aa(105,`p`),bT(106,`An `),Aa(107,`code`),bT(108,`abortSignal`),cf(),bT(109,` cancels a call: the model call in flight, the wait before a retry, and the agent functions running, through their context's `),Aa(110,`code`),bT(111,`signal`),cf(),bT(112,`. A job that must not take more than two minutes passes `),Aa(113,`code`),bT(114,`abortSignal: AbortSignal.timeout(120_000)`),cf(),bT(115,`, and the call rejects with the signal's reason, without a retry or a fallback.`),cf(),Aa(116,`h4`,18)(117,`span`),bT(118,`Conversations`),cf()(),Aa(119,`p`)(120,`code`),bT(121,`messages`),cf(),bT(122,` takes a whole conversation, as the AI SDK's `),Aa(123,`code`),bT(124,`ModelMessage`),cf(),bT(125,` objects, in place of `),Aa(126,`code`),bT(127,`prompt`),cf(),bT(128,`. A call's `),Aa(129,`code`),bT(130,`responseMessages`),cf(),bT(131,` are the messages it added: the model's answers and tool calls, and the tools' results. Append them to the conversation, and send it with the customer's next message:`),cf(),Aa(132,`app-copy-button`,15)(133,`span`,16),bT(134),LT(135,`extension`),Wa(136,`app-tabs`,null,2),cf(),Aa(138,`pre`)(139,`code`,17),bT(140,`
import { Injectable } from '@nestjs/common';
import { AiService } from '@nestjs/ai';
import type { ModelMessage } from 'ai';

@Injectable()
export class ConversationsService {
  // Keep conversations in your database: this one is lost on a restart.
  private readonly conversations = new Map<string, ModelMessage[]>();

  constructor(private readonly ai: AiService) {}

  async reply(conversationId: string, message: string, request: unknown) {
    const messages: ModelMessage[] = [
      ...(this.conversations.get(conversationId) ?? []),
      { role: 'user', content: message },
    ];
    const { text, responseMessages } = await this.ai.generateText({
      instructions: 'You help customers of the cat store with their orders.',
      messages,
      tools: ['find-order', 'change-address'],
      caller: { request },
    });
    this.conversations.set(conversationId, [...messages, ...responseMessages]);
    return text;
  }
}
`),cf()()(),Aa(141,`p`),bT(142,`The `),Aa(143,`code`),bT(144,`instructions`),cf(),bT(145,` aren't part of the conversation: each call sends its own. A chat in the browser keeps the conversation itself, and sends it with each message: see `),Aa(146,`a`,19),bT(147,`Streaming to the browser`),cf(),bT(148,`.`),cf(),Aa(149,`h4`,20)(150,`span`),bT(151,`Streaming to the browser`),cf()(),Aa(152,`p`),bT(153,`The assistant answers as it thinks, so the browser shows the answer as it's written. `),Aa(154,`code`),bT(155,`streamText()`),cf(),bT(156,` starts the call and returns its stream at once, and `),Aa(157,`code`),bT(158,`pipeUIMessageStreamToResponse()`),cf(),bT(159,` sends it, as server-sent events in the AI SDK's UI message stream protocol, on the response that `),Aa(160,`code`),bT(161,`@Res()`),cf(),bT(162,` injects:`),cf(),Aa(163,`app-copy-button`,15)(164,`span`,16),bT(165),LT(166,`extension`),Wa(167,`app-tabs`,null,3),cf(),Aa(169,`pre`)(170,`code`,17),bT(171,`
import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AiService } from '@nestjs/ai';
import { convertToModelMessages, type UIMessage } from 'ai';
import type { Request, Response } from 'express';

@Controller('assistant')
export class AssistantController {
  constructor(private readonly ai: AiService) {}

  @Post('chat')
  async chat(
    @Body() { messages }: { messages: UIMessage[] },
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const answer = this.ai.streamText({
      label: 'assistant',
      instructions:
        'You help customers of the cat store with their orders. ' +
        'Look an order up before you answer about it.',
      messages: await convertToModelMessages(messages),
      tools: ['find-order', 'change-address'],
      caller: { request },
    });
    await answer.pipeUIMessageStreamToResponse(response);
  }
}
`),cf()()(),Aa(172,`p`),bT(173,`The route works the same on Fastify and on the Node adapter: `),Aa(174,`code`),bT(175,`pipeUIMessageStreamToResponse()`),cf(),bT(176,` takes the platform's response, a `),Aa(177,`code`),bT(178,`FastifyReply`),cf(),bT(179,` on Fastify, whose headers set before the stream starts, such as CORS headers, are kept. `),Aa(180,`code`),bT(181,`convertToModelMessages()`),cf(),bT(182,`, from `),Aa(183,`code`),bT(184,`ai`),cf(),bT(185,`, turns the `),Aa(186,`code`),bT(187,`UIMessage`),cf(),bT(188,` objects the browser posts into the model messages the call takes.`),cf(),Aa(189,`p`),bT(190,`In the browser, `),Aa(191,`code`),bT(192,`useChat()`),cf(),bT(193,` from `),Aa(194,`code`),bT(195,`@ai-sdk/react`),cf(),bT(196,`, or the AI SDK's packages for Vue, Svelte and Angular, posts the conversation to the route and builds the answer as it arrives:`),cf(),Aa(197,`app-copy-button`)(198,`pre`)(199,`code`,17),bT(200,`
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

const { messages, sendMessage, status } = useChat({
  transport: new DefaultChatTransport({ api: '/assistant/chat' }),
});
`),cf()()(),Aa(201,`p`),bT(202,`Each message's `),Aa(203,`code`),bT(204,`parts`),cf(),bT(205,` hold its text (`),Aa(206,`code`),bT(207,`type: 'text'`),cf(),bT(208,`) and the tool calls the model made, as `),Aa(209,`code`),bT(210,`tool-find-order`),cf(),bT(211,` parts with their `),Aa(212,`code`),bT(213,`state`),cf(),bT(214,`, `),Aa(215,`code`),bT(216,`input`),cf(),bT(217,` and `),Aa(218,`code`),bT(219,`output`),cf(),bT(220,`. The answer of every model call of the call streams as one message, its tool calls and their results included.`),cf(),Aa(221,`ul`)(222,`li`)(223,`strong`),bT(224,`Errors.`),cf(),bT(225,` A call that fails before its first chunk rejects, with nothing sent, so the route's exception filters answer it. Until then, the stream is retried, and falls back to another model, as any call. A failure after it ends the stream with an error chunk that says `),Aa(226,`code`),bT(227,`An error occurred.`),cf(),bT(228,`, so that no detail of the server leaks: the `),Aa(229,`code`),bT(230,`errorText`),cf(),bT(231,` option says more.`),cf(),Aa(232,`li`)(233,`strong`),bT(234,`Keep-alive.`),cf(),bT(235,` When 15 seconds pass without a chunk, as while a tool works, a comment line (`),Aa(236,`code`),bT(237,`: keep-alive`),cf(),bT(238,`) goes out, so that proxies and load balancers don't close the connection as idle. `),Aa(239,`code`),bT(240,`useChat()`),cf(),bT(241,` skips it. The `),Aa(242,`code`),bT(243,`keepAlive`),cf(),bT(244,` option sets the interval, or `),Aa(245,`code`),bT(246,`false`),cf(),bT(247,` turns it off.`),cf(),Aa(248,`li`)(249,`strong`),bT(250,`A browser that goes away.`),cf(),bT(251,` When the browser closes the connection, the model call is aborted, and so is the `),Aa(252,`code`),bT(253,`signal`),cf(),bT(254,` of the agent functions running.`),cf(),Aa(255,`li`)(256,`strong`),bT(257,`Headers.`),cf(),bT(258,` The response is `),Aa(259,`code`),bT(260,`text/event-stream`),cf(),bT(261,` with `),Aa(262,`code`),bT(263,`x-accel-buffering: no`),cf(),bT(264,`, which tells nginx not to buffer it. `),Aa(265,`code`),bT(266,`status`),cf(),bT(267,` and `),Aa(268,`code`),bT(269,`headers`),cf(),bT(270,` add your own.`),cf()(),Aa(271,`app-copy-button`)(272,`pre`)(273,`code`,17),bT(274,`
await answer.pipeUIMessageStreamToResponse(response, {
  keepAlive: '10s',
  errorText: (error) =>
    error instanceof AiModelError
      ? 'The assistant is unavailable. Try again in a minute.'
      : 'Something went wrong.',
});
`),cf()()(),Aa(275,`p`),bT(276,`An agent function's `),Aa(277,`code`),bT(278,`ctx.reportProgress()`),cf(),bT(279,` reaches the browser as a transient `),Aa(280,`code`),bT(281,`data-tool-progress`),cf(),bT(282,` chunk, which `),Aa(283,`code`),bT(284,`useChat()`),cf(),bT(285,` hands to its `),Aa(286,`code`),bT(287,`onData`),cf(),bT(288,` callback without adding it to the message:`),cf(),Aa(289,`app-copy-button`,15)(290,`span`,16),bT(291),LT(292,`extension`),Wa(293,`app-tabs`,null,4),cf(),Aa(295,`pre`)(296,`code`,17),bT(297,`
@AgentFunction({
  name: 'check-stock',
  description: 'Check the stock of a product in every warehouse',
  inputSchema: z.object({
    sku: z.string().describe('The product SKU, such as SKU-1042'),
  }),
})
async checkStock({ sku }: { sku: string }, ctx: AgentFunctionContext) {
  const warehouses = await this.stock.warehouses();
  const counts: Record<string, number> = {};
  for (const [index, warehouse] of warehouses.entries()) {
    counts[warehouse.name] = await this.stock.count(warehouse.id, sku, {
      signal: ctx.signal,
    });
    await ctx.reportProgress(index + 1, warehouses.length, warehouse.name);
  }
  return counts;
}
`),cf()()(),Aa(298,`app-copy-button`)(299,`pre`)(300,`code`,17),bT(301,`
const { messages, sendMessage } = useChat({
  transport: new DefaultChatTransport({ api: '/assistant/chat' }),
  onData: (part) => {
    if (part.type === 'data-tool-progress') {
      // { toolCallId, toolName, progress, total, message }
      console.log(part.data);
    }
  },
});
`),cf()()(),Aa(302,`p`),bT(303,`The stream has other readers. `),Aa(304,`code`),bT(305,`pipeTextStreamToResponse(response)`),cf(),bT(306,` sends the text alone, as `),Aa(307,`code`),bT(308,`text/plain`),cf(),bT(309,`; `),Aa(310,`code`),bT(311,`textStream`),cf(),bT(312,` iterates it; `),Aa(313,`code`),bT(314,`toUIMessageStream()`),cf(),bT(315,` is the UI message stream as a `),Aa(316,`code`),bT(317,`ReadableStream`),cf(),bT(318,`, and `),Aa(319,`code`),bT(320,`toUIMessageStreamResponse()`),cf(),bT(321,` as a web-standard `),Aa(322,`code`),bT(323,`Response`),cf(),bT(324,`. `),Aa(325,`code`),bT(326,`text`),cf(),bT(327,`, `),Aa(328,`code`),bT(329,`usage`),cf(),bT(330,`, `),Aa(331,`code`),bT(332,`steps`),cf(),bT(333,`, `),Aa(334,`code`),bT(335,`finishReason`),cf(),bT(336,` and `),Aa(337,`code`),bT(338,`responseMessages`),cf(),bT(339,` are promises that settle when the call ends, and `),Aa(340,`code`),bT(341,`result`),cf(),bT(342,` has all of them; they reject with the call's error. The call runs once, whatever reads it, and each reader gets the whole stream from its start. `),Aa(343,`code`),bT(344,`abort()`),cf(),bT(345,` cancels it. Mistakes in the options, such as an agent function that doesn't exist, throw from `),Aa(346,`code`),bT(347,`streamText()`),cf(),bT(348,` at once.`),cf(),Aa(349,`app-copy-button`)(350,`pre`)(351,`code`,17),bT(352,`
@Post('summary')
async summary(
  @Body() { thread }: { thread: string },
  @Res() response: Response,
) {
  const answer = this.ai.streamText({
    model: 'fast',
    instructions: 'Summarize the support thread in three sentences.',
    prompt: thread,
  });
  await answer.pipeTextStreamToResponse(response);
}
`),cf()()(),Aa(353,`h4`,21)(354,`span`),bT(355,`Durable agent runs`),cf()(),Aa(356,`p`),bT(357,`A refund request takes a person: the agent looks the order up and asks to refund it, and someone in the support team approves, maybe the next morning, maybe after a deploy. `),Aa(358,`code`),bT(359,`@nestjs/ai/workflows`),cf(),bT(360,` runs the agent loop on `),Aa(361,`a`,22)(362,`code`),bT(363,`@nestjs/workflows`),cf()(),bT(364,`, with each model call as a step and each tool call as another. A run that a restart interrupts resumes where it was, and what its journal holds is read back, not done again. Install the package:`),cf(),Aa(365,`pre`)(366,`code`,23),bT(367,`
$ npm i --save @nestjs/workflows
`),cf()(),Aa(368,`p`),bT(369,`Import `),Aa(370,`code`),bT(371,`AiWorkflowsModule`),cf(),bT(372,` in the module of your workflows. The application imports `),Aa(373,`code`),bT(374,`WorkflowsModule`),cf(),bT(375,`, with a store in your database as `),Aa(376,`a`,24),bT(377,`Durable workflows`),cf(),bT(378,` describes, and `),Aa(379,`code`),bT(380,`AiModule`),cf(),bT(381,`, as usual:`),cf(),Aa(382,`app-copy-button`,15)(383,`span`,16),bT(384),LT(385,`extension`),Wa(386,`app-tabs`,null,5),cf(),Aa(388,`pre`)(389,`code`,17),bT(390,`
import { Module } from '@nestjs/common';
import { AiWorkflowsModule } from '@nestjs/ai/workflows';
import { OrdersModule } from '../orders/orders.module';
import { PaymentsModule } from '../payments/payments.module';
import { ApprovalsController } from './approvals.controller';
import { RefundRequest } from './refund-request.workflow';
import { RefundTools } from './refund.tools';
import { RefundsService } from './refunds.service';

@Module({
  imports: [AiWorkflowsModule, OrdersModule, PaymentsModule],
  controllers: [ApprovalsController],
  providers: [RefundRequest, RefundTools, RefundsService],
})
export class RefundsModule {}
`),cf()()(),Aa(391,`p`),bT(392,`Run the agent from a workflow of your own, with `),Aa(393,`code`),bT(394,`AiAgents`),cf(),bT(395,`:`),cf(),Aa(396,`app-copy-button`,15)(397,`span`,16),bT(398),LT(399,`extension`),Wa(400,`app-tabs`,null,6),cf(),Aa(402,`pre`)(403,`code`,17),bT(404,`
import { AiAgents } from '@nestjs/ai/workflows';
import { Workflow, type WorkflowContext } from '@nestjs/workflows';

export interface RefundRequestInput {
  email: string;
  customerId: string;
}

@Workflow('refund-request')
export class RefundRequest {
  constructor(private readonly agents: AiAgents) {}

  run(ctx: WorkflowContext, input: RefundRequestInput) {
    return this.agents.run(ctx, {
      label: 'refund-request',
      instructions:
        'You handle the refund requests of the cat store. Look the order ' +
        'up, and refund it when the customer is right.',
      prompt: input.email,
      tools: ['find-order', 'refund'],
      approve: ['refund'],
      caller: { user: { id: input.customerId } },
    });
  }
}
`),cf()()(),Aa(405,`p`),bT(406,`Start it as any workflow, with an id from the ticket, which makes starting it again for the same ticket return the run that exists:`),cf(),Aa(407,`app-copy-button`,15)(408,`span`,16),bT(409),LT(410,`extension`),Wa(411,`app-tabs`,null,7),cf(),Aa(413,`pre`)(414,`code`,17),bT(415,`
import { Injectable } from '@nestjs/common';
import { WorkflowClient } from '@nestjs/workflows';
import { RefundRequest } from './refund-request.workflow';

@Injectable()
export class RefundsService {
  constructor(private readonly workflows: WorkflowClient) {}

  async request(ticket: { id: string; body: string; customerId: string }) {
    await this.workflows.start(
      RefundRequest,
      { email: ticket.body, customerId: ticket.customerId },
      { id: \`refund-\${ticket.id}\` },
    );
  }
}
`),cf()()(),Aa(416,`p`),bT(417,`A call of an agent function named in `),Aa(418,`code`),bT(419,`approve`),cf(),bT(420,` waits for a person before it runs, for as long as it takes; `),Aa(421,`code`),bT(422,`approvalTimeout`),cf(),bT(423,` bounds the wait. `),Aa(424,`code`),bT(425,`pendingApprovals(runId)`),cf(),bT(426,` lists the calls waiting, each with its `),Aa(427,`code`),bT(428,`key`),cf(),bT(429,`, `),Aa(430,`code`),bT(431,`toolName`),cf(),bT(432,` and `),Aa(433,`code`),bT(434,`input`),cf(),bT(435,`, and `),Aa(436,`code`),bT(437,`approve(key)`),cf(),bT(438,` or `),Aa(439,`code`),bT(440),cf(),bT(441,` answers one, from wherever the support team works:`),cf(),Aa(442,`app-copy-button`,15)(443,`span`,16),bT(444),LT(445,`extension`),Wa(446,`app-tabs`,null,8),cf(),Aa(448,`pre`)(449,`code`,17),bT(450,`
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AiAgents } from '@nestjs/ai/workflows';

@Controller('refunds')
export class ApprovalsController {
  constructor(private readonly agents: AiAgents) {}

  @Get(':runId/approvals')
  pending(@Param('runId') runId: string) {
    return this.agents.pendingApprovals(runId);
  }

  @Post('approvals/:key')
  answer(
    @Param('key') key: string,
    @Body() body: { approved: boolean; reason?: string },
  ) {
    return body.approved
      ? this.agents.approve(key)
      : this.agents.reject(key, { reason: body.reason });
  }
}
`),cf()()(),Aa(451,`p`),bT(452,`A rejected call doesn't run: the model is told it was rejected, and why, and answers the customer. A call nobody answered within `),Aa(453,`code`),bT(454,`approvalTimeout`),cf(),bT(455,` doesn't run either. The first answer for a call counts, and `),Aa(456,`code`),bT(457,`approve()`),cf(),bT(458,` and `),Aa(459,`code`),bT(460,`reject()`),cf(),bT(461,` take `),Aa(462,`code`),bT(463,`by`),cf(),bT(464,`, who answered, which is kept with the answer. While a run waits, its workflow instance is suspended, and holds no process.`),cf(),Aa(465,`p`),bT(466,`What a run needs to resume is stored with it, so its options are data: models by name, agent functions by name or by provider class, which the run stores as names, and the `),Aa(467,`code`),bT(468,`caller`),cf(),bT(469,` as the `),Aa(470,`code`),bT(471,`user`),cf(),bT(472,` and `),Aa(473,`code`),bT(474,`scopes`),cf(),bT(475,` the agent functions need, since there is no request to read after a restart. The agent functions get them as `),Aa(476,`code`),bT(477,`ctx.user`),cf(),bT(478,` and `),Aa(479,`code`),bT(480,`ctx.scopes`),cf(),bT(481,`; with `),Aa(482,`code`),bT(483,`@nestjs/authentication`),cf(),bT(484,`, their providers are `),Aa(485,`a`,25)(486,`code`),bT(487,`@Public()`),cf()(),bT(488,`, as for any call without a request. A run's model calls use their model's and the module's `),Aa(489,`code`),bT(490,`timeout`),cf(),bT(491,`, `),Aa(492,`code`),bT(493,`retry`),cf(),bT(494,` and generation settings, and its `),Aa(495,`code`),bT(496,`maxSteps`),cf(),bT(497,` and `),Aa(498,`code`),bT(499,`budget`),cf(),bT(500,` fall back to the module's `),Aa(501,`code`),bT(502,`defaults`),cf(),bT(503,`, as a call's do.`),cf(),Aa(504,`p`),bT(505,`An agent function call runs at least once: a process that dies while it runs makes it again after the restart, with the same `),Aa(506,`code`),bT(507,`ctx.idempotencyKey`),cf(),bT(508,`. A function that changes something passes the key on, so the change happens once:`),cf(),Aa(509,`app-copy-button`,15)(510,`span`,16),bT(511),LT(512,`extension`),Wa(513,`app-tabs`,null,9),cf(),Aa(515,`pre`)(516,`code`,17),bT(517,`
import { Injectable, NotFoundException } from '@nestjs/common';
import { AgentFunction, type AgentFunctionContext } from '@nestjs/ai';
import * as z from 'zod';
import { OrdersService } from '../orders/orders.service';
import { PaymentsService } from '../payments/payments.service';

@Injectable()
export class RefundTools {
  constructor(
    private readonly orders: OrdersService,
    private readonly payments: PaymentsService,
  ) {}

  @AgentFunction({
    name: 'refund',
    description: 'Refund an order to the card it was paid with',
    inputSchema: z.object({ orderId: z.string() }),
  })
  async refund({ orderId }: { orderId: string }, ctx: AgentFunctionContext) {
    const order = await this.orders.findById(orderId);
    if (!order) {
      throw new NotFoundException(\`There is no order \${orderId}\`);
    }
    await this.payments.refund(order.paymentId, order.total, {
      idempotencyKey: ctx.idempotencyKey,
    });
    return { refunded: order.id, amount: order.total };
  }
}
`),cf()()(),Aa(518,`p`),bT(519,`An agent function's failure is a result the model reads, as in any call, not the failure of its step. A model call keeps its retries, timeouts and fallback models; one that still fails is retried as a step of the workflow, which waits durably between attempts (three attempts by default). After `),Aa(520,`code`),bT(521,`stepsPerInstance`),cf(),bT(522,` model calls (10), a run goes on in a child workflow, so that no instance's journal grows long: each resume replays it in full, and it is capped. `),Aa(523,`code`),bT(524,`maxSteps`),cf(),bT(525,` (25) caps the model calls of a run.`),cf(),Aa(526,`p`),bT(527,`The run resolves with what `),Aa(528,`code`),bT(529,`generateText()`),cf(),bT(530,` resolves with, `),Aa(531,`code`),bT(532,`text`),cf(),bT(533,`, `),Aa(534,`code`),bT(535,`steps`),cf(),bT(536,`, `),Aa(537,`code`),bT(538,`toolResults`),cf(),bT(539,` and the rest, as JSON: it is the workflow's output, which `),Aa(540,`code`),bT(541,`WorkflowClient`),cf(),bT(542,`'s `),Aa(543,`code`),bT(544,`getStatus(runId)`),cf(),bT(545,` reads too.`),cf(),Aa(546,`p`),bT(547,`The options of `),Aa(548,`code`),bT(549,`run()`),cf(),bT(550,`:`),cf(),Aa(551,`table`)(552,`thead`)(553,`tr`)(554,`th`),bT(555,`Option`),cf(),Aa(556,`th`),bT(557,`Default`),cf(),Aa(558,`th`),bT(559,`Description`),cf()()(),Aa(560,`tbody`)(561,`tr`)(562,`td`)(563,`code`),bT(564,`model`),cf(),bT(565,`, `),Aa(566,`code`),bT(567,`fallback`),cf()(),Aa(568,`td`)(569,`code`),bT(570,`'default'`),cf(),bT(571,`, the model's`),cf(),Aa(572,`td`),bT(573,`Models, by name`),cf()(),Aa(574,`tr`)(575,`td`)(576,`code`),bT(577,`instructions`),cf(),bT(578,`, `),Aa(579,`code`),bT(580,`prompt`),cf(),bT(581,`, `),Aa(582,`code`),bT(583,`messages`),cf()(),Wa(584,`td`),Aa(585,`td`),bT(586,`As for a call`),cf()(),Aa(587,`tr`)(588,`td`)(589,`code`),bT(590,`tools`),cf()(),Wa(591,`td`),Aa(592,`td`),bT(593,`Agent function names and provider classes, stored as names`),cf()(),Aa(594,`tr`)(595,`td`)(596,`code`),bT(597,`approve`),cf()(),Aa(598,`td`)(599,`code`),bT(600,`[]`),cf()(),Aa(601,`td`),bT(602,`The agent functions, among `),Aa(603,`code`),bT(604,`tools`),cf(),bT(605,`, whose calls wait for a person's approval`),cf()(),Aa(606,`tr`)(607,`td`)(608,`code`),bT(609,`approvalTimeout`),cf()(),Aa(610,`td`),bT(611,`until answered`),cf(),Aa(612,`td`),bT(613,`How long a call waits for its approval`),cf()(),Aa(614,`tr`)(615,`td`)(616,`code`),bT(617,`caller`),cf()(),Wa(618,`td`),Aa(619,`td`),bT(620,`The `),Aa(621,`code`),bT(622,`user`),cf(),bT(623,` and `),Aa(624,`code`),bT(625,`scopes`),cf(),bT(626,` the agent functions run as`),cf()(),Aa(627,`tr`)(628,`td`)(629,`code`),bT(630,`maxSteps`),cf()(),Aa(631,`td`)(632,`code`),bT(633,`defaults.maxSteps`),cf(),bT(634,`, else `),Aa(635,`code`),bT(636,`25`),cf()(),Aa(637,`td`),bT(638,`The model calls of the run`),cf()(),Aa(639,`tr`)(640,`td`)(641,`code`),bT(642,`stepsPerInstance`),cf()(),Aa(643,`td`)(644,`code`),bT(645,`10`),cf()(),Aa(646,`td`),bT(647,`The model calls of one workflow instance, before the run goes on in a child`),cf()(),Aa(648,`tr`)(649,`td`)(650,`code`),bT(651,`budget`),cf()(),Aa(652,`td`)(653,`code`),bT(654,`defaults.budget`),cf()(),Aa(655,`td`)(656,`code`),bT(657,`maxTokens`),cf(),bT(658,` and `),Aa(659,`code`),bT(660,`maxCost`),cf(),bT(661,`, over the run`),cf()(),Aa(662,`tr`)(663,`td`)(664,`code`),bT(665,`label`),cf(),bT(666,`, `),Aa(667,`code`),bT(668,`toolChoice`),cf(),bT(669,`, `),Aa(670,`code`),bT(671,`maxOutputTokens`),cf(),bT(672,`, `),Aa(673,`code`),bT(674,`temperature`),cf(),bT(675,`, `),Aa(676,`code`),bT(677,`providerOptions`),cf()(),Wa(678,`td`),Aa(679,`td`),bT(680,`As for a call`),cf()()()()(),Aa(681,`a`,26),Wa(682,`i`,27),Aa(683,`span`),bT(684,`Edit on GitHub`),cf()()()),c&2){let y=tT(28),k=tT(137),A=tT(168),T=tT(294),I=tT(387),M=tT(401),j=tT(412),C=tT(447),q=tT(514);zC(25),hf(` `,jT(26,13,`assistant/assistant.service`,y.isJsActive),`
`),zC(78),Ky(``,`{`,` type: 'tool', toolName `,`}`),zC(31),hf(` `,jT(135,16,`assistant/conversations.service`,k.isJsActive),`
`),zC(31),hf(` `,jT(166,19,`assistant/assistant.controller`,A.isJsActive),`
`),zC(126),hf(` `,jT(292,22,`catalog/catalog.tools`,T.isJsActive),`
`),zC(93),hf(` `,jT(385,25,`refunds/refunds.module`,I.isJsActive),`
`),zC(14),hf(` `,jT(399,28,`refunds/refund-request.workflow`,M.isJsActive),`
`),zC(11),hf(` `,jT(410,31,`refunds/refunds.service`,j.isJsActive),`
`),zC(31),Ky(`reject(key, `,`{`,` reason `,`}`,`)`),zC(4),hf(` `,jT(445,34,`refunds/approvals.controller`,C.isJsActive),`
`),zC(67),hf(` `,jT(512,37,`refunds/refund.tools`,q.isJsActive),`
`)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return s})();var B=(()=>{class s extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(s)))(p||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-ai-embeddings`]],features:[xy],decls:671,vars:24,consts:[[`contentReference`,``],[`app6a4c6f7ef5825c8fdd5cdb2fdd7cdf238fb14c1e`,``],[`appe6f0a6af484d2eae9e0677d793afc9b8b9cbf850`,``],[`app12dcddeebe2053c52212faa84526fd92932c00ea`,``],[`app153afb5b7ddcb30577559a36b615ae9c7f4fb596`,``],[`app48a376c6d8857366db11bc6ec776f28fbdd13698`,``],[`app7c305d37d9e3f3d589365b537a44626503544ef5`,``],[1,`content`],[1,`content-inner`],[`id`,`embeddings`],[`appAnchor`,``,`id`,`register-the-models`],[1,`language-bash`],[1,`with-heading`],[1,`filename`],[1,`language-typescript`],[`href`,`/ai/embeddings#embedding-settings`],[`rel`,`nofollow`,`target`,`_blank`,`href`,`https://vercel.com/docs/ai-gateway`],[`appAnchor`,``,`id`,`calling-an-embedding-model`],[`href`,`/ai/embeddings#usage-and-cost`],[`appAnchor`,``,`id`,`embedding-settings`],[`appAnchor`,``,`id`,`batches`],[`appAnchor`,``,`id`,`retries-timeouts-and-cancellation`],[`href`,`/reliability/resilience`],[`href`,`/ai/models#retries-timeouts-and-fallback`],[`href`,`/ai/models#when-a-call-fails`],[`routerLink`,`/reliability/workflows`],[`appAnchor`,``,`id`,`policies-of-your-own`],[`href`,`/ai/models#policies-of-your-own`],[`appAnchor`,``,`id`,`usage-and-cost`],[`appAnchor`,``,`id`,`calling-the-ai-sdk-yourself`],[`href`,`/ai/overview#async-configuration`],[1,`info`],[`href`,`/ai/testing#testing-embeddings`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/ai/embeddings.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,7,0)(2,`div`,8)(3,`h3`,9),bT(4,`Embeddings`),cf(),Aa(5,`p`),bT(6,`An embedding model turns a text into a vector, so that an application can compare texts by what they mean: `),Aa(7,`code`),bT(8,`AiService`),cf(),bT(9,` calls embedding models registered by name, with timeouts, retries and usage events, as it calls language models.`),cf(),Aa(10,`p`),bT(11,`A customer of the store searches for "my cat won't eat", and the search finds nothing: no product says that, and the one they want is a "gentle appetite support for picky eaters". Compared as vectors, the two are close. The store embeds the descriptions of its products once, keeps the vectors next to the products, and embeds each search as it comes in.`),cf(),Aa(12,`p`),bT(13,`The package stops at the vectors. Your application stores them, in PostgreSQL with `),Aa(14,`code`),bT(15,`pgvector`),cf(),bT(16,` or in a vector database, and splits long documents into chunks if it needs to.`),cf(),Aa(17,`h4`,10)(18,`span`),bT(19,`Register the models`),cf()(),Aa(20,`p`),bT(21,`Embedding models have a registry of their own, `),Aa(22,`code`),bT(23,`embeddingModels`),cf(),bT(24,`, next to `),Aa(25,`code`),bT(26,`models`),cf(),bT(27,`. The store's come from OpenAI, through its provider package:`),cf(),Aa(28,`pre`)(29,`code`,11),bT(30,`
$ npm i --save @ai-sdk/openai
`),cf()(),Aa(31,`app-copy-button`,12)(32,`span`,13),bT(33),LT(34,`extension`),Wa(35,`app-tabs`,null,1),cf(),Aa(37,`pre`)(38,`code`,14),bT(39,`
import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [
    AiModule.forRoot({
      isGlobal: true,
      models: { default: anthropic('claude-opus-5-5') },
      embeddingModels: {
        default: openai.embeddingModel('text-embedding-3-small'),
      },
    }),
    CatalogModule,
  ],
})
export class AppModule {}
`),cf()()(),Aa(40,`p`),bT(41,`An embedding model is what a provider package returns, as above, or a definition with it as `),Aa(42,`code`),bT(43,`model`),cf(),bT(44,` and `),Aa(45,`a`,15),bT(46,`settings of its own`),cf(),bT(47,`. A model id string, such as `),Aa(48,`code`),bT(49,`'openai/text-embedding-3-small'`),cf(),bT(50,`, is sent through the `),Aa(51,`a`,16),bT(52,`AI Gateway`),cf(),bT(53,`, as it is in `),Aa(54,`code`),bT(55,`models`),cf(),bT(56,`.`),cf(),Aa(57,`p`),bT(58,`Calls that name no model use `),Aa(59,`code`),bT(60,`default`),cf(),bT(61,`, and the first model registered is never picked in its place. The two registries don't share names: `),Aa(62,`code`),bT(63,`default`),cf(),bT(64,` above is one model for `),Aa(65,`code`),bT(66,`generateText()`),cf(),bT(67,` and another for `),Aa(68,`code`),bT(69,`embed()`),cf(),bT(70,`. An application that only embeds leaves `),Aa(71,`code`),bT(72,`models`),cf(),bT(73,` out, and one with no model in either fails at startup.`),cf(),Aa(74,`h4`,17)(75,`span`),bT(76,`Calling an embedding model`),cf()(),Aa(77,`p`)(78,`code`),bT(79,`embed()`),cf(),bT(80,` embeds one text, and `),Aa(81,`code`),bT(82,`embedMany()`),cf(),bT(83,` a list of them:`),cf(),Aa(84,`app-copy-button`,12)(85,`span`,13),bT(86),LT(87,`extension`),Wa(88,`app-tabs`,null,2),cf(),Aa(90,`pre`)(91,`code`,14),bT(92,`
import { Injectable } from '@nestjs/common';
import { AiService } from '@nestjs/ai';
import { ProductsRepository, type Product } from './products.repository';

@Injectable()
export class SearchService {
  constructor(
    private readonly ai: AiService,
    private readonly products: ProductsRepository,
  ) {}

  async index(products: Product[]): Promise<void> {
    const { embeddings } = await this.ai.embedMany({
      label: 'index-products',
      values: products.map((product) => product.description),
    });
    await this.products.saveEmbeddings(products, embeddings);
  }

  async search(query: string): Promise<Product[]> {
    const { embedding } = await this.ai.embed({
      label: 'search-products',
      value: query,
    });
    return this.products.findNearest(embedding, 10);
  }
}
`),cf()()(),Aa(93,`p`)(94,`code`),bT(95,`model`),cf(),bT(96,` names one of `),Aa(97,`code`),bT(98,`embeddingModels`),cf(),bT(99,`, `),Aa(100,`code`),bT(101,`default`),cf(),bT(102,` when it's left out, and `),Aa(103,`code`),bT(104,`label`),cf(),bT(105,` names the call in `),Aa(106,`a`,18),bT(107,`usage events`),cf(),bT(108,` and in the events of its policies. A call can also take an `),Aa(109,`code`),bT(110,`EmbeddingModel`),cf(),bT(111,` as its `),Aa(112,`code`),bT(113,`model`),cf(),bT(114,`: it has no settings of its own, and the result's `),Aa(115,`code`),bT(116,`model.name`),cf(),bT(117,` is `),Aa(118,`code`),bT(119,`undefined`),cf(),bT(120,`. The result has more than the vectors:`),cf(),Aa(121,`table`)(122,`thead`)(123,`tr`)(124,`th`),bT(125,`Property`),cf(),Aa(126,`th`),bT(127,`What it is`),cf()()(),Aa(128,`tbody`)(129,`tr`)(130,`td`)(131,`code`),bT(132,`embedding`),cf(),bT(133,`, `),Aa(134,`code`),bT(135,`embeddings`),cf()(),Aa(136,`td`),bT(137,`The vector of `),Aa(138,`code`),bT(139,`embed()`),cf(),bT(140,`, and the vectors of `),Aa(141,`code`),bT(142,`embedMany()`),cf(),bT(143,`, in the order of `),Aa(144,`code`),bT(145,`values`),cf()()(),Aa(146,`tr`)(147,`td`)(148,`code`),bT(149,`value`),cf(),bT(150,`, `),Aa(151,`code`),bT(152,`values`),cf()(),Aa(153,`td`),bT(154,`The texts that were embedded`),cf()(),Aa(155,`tr`)(156,`td`)(157,`code`),bT(158,`usage`),cf()(),Aa(159,`td`),bT(160,`The tokens the provider reported, summed over its requests: `),Aa(161,`code`),bT(162,`tokens`),cf()()(),Aa(163,`tr`)(164,`td`)(165,`code`),bT(166,`cost`),cf()(),Aa(167,`td`),bT(168,`What the call cost, for a model with `),Aa(169,`code`),bT(170,`pricing`),cf()()(),Aa(171,`tr`)(172,`td`)(173,`code`),bT(174,`attempts`),cf()(),Aa(175,`td`),bT(176,`The provider requests the call made, retries included`),cf()(),Aa(177,`tr`)(178,`td`)(179,`code`),bT(180,`model`),cf()(),Aa(181,`td`),bT(182,`The model that answered: its `),Aa(183,`code`),bT(184,`name`),cf(),bT(185,`, `),Aa(186,`code`),bT(187,`provider`),cf(),bT(188,` and `),Aa(189,`code`),bT(190,`modelId`),cf()()(),Aa(191,`tr`)(192,`td`)(193,`code`),bT(194,`warnings`),cf(),bT(195,`, `),Aa(196,`code`),bT(197,`providerMetadata`),cf()(),Aa(198,`td`),bT(199,`What the provider added to its answers`),cf()(),Aa(200,`tr`)(201,`td`)(202,`code`),bT(203,`response`),cf(),bT(204,`, `),Aa(205,`code`),bT(206,`responses`),cf()(),Aa(207,`td`),bT(208,`The provider's HTTP response to `),Aa(209,`code`),bT(210,`embed()`),cf(),bT(211,`, and one for each request of `),Aa(212,`code`),bT(213,`embedMany()`),cf()()()()(),Aa(214,`p`),bT(215,`A value that isn't a string, or a model the module doesn't configure, is refused with an `),Aa(216,`code`),bT(217,`AiConfigurationError`),cf(),bT(218,` before anything is sent.`),cf(),Aa(219,`p`),bT(220,`To compare two vectors in memory, `),Aa(221,`code`),bT(222,`cosineSimilarity()`),cf(),bT(223,` from `),Aa(224,`code`),bT(225,`ai`),cf(),bT(226,` takes them and answers a number from -1 to 1. Beyond a few hundred texts, let the database find the nearest ones, with an index.`),cf(),Aa(227,`h4`,19)(228,`span`),bT(229,`Embedding settings`),cf()(),Aa(230,`p`),bT(231,`A definition gives a model settings of its own, and `),Aa(232,`code`),bT(233,`embeddingDefaults`),cf(),bT(234,` applies settings to every embedding call. Each setting comes from the call, else from the model's definition, else from `),Aa(235,`code`),bT(236,`embeddingDefaults`),cf(),bT(237,`:`),cf(),Aa(238,`app-copy-button`,12)(239,`span`,13),bT(240),LT(241,`extension`),Wa(242,`app-tabs`,null,3),cf(),Aa(244,`pre`)(245,`code`,14),bT(246,`
import { openai } from '@ai-sdk/openai';
import { Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';

@Module({
  imports: [
    AiModule.forRoot({
      isGlobal: true,
      embeddingModels: {
        default: openai.embeddingModel('text-embedding-3-small'),
        documents: {
          model: openai.embeddingModel('text-embedding-3-large'),
          providerOptions: { openai: { dimensions: 1024 } },
          maxParallelCalls: 2,
        },
      },
      embeddingDefaults: { timeout: '30s', retry: { attempts: 5 } },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(247,`table`)(248,`thead`)(249,`tr`)(250,`th`),bT(251,`Settings`),cf(),Aa(252,`th`),bT(253,`Set on`),cf()()(),Aa(254,`tbody`)(255,`tr`)(256,`td`)(257,`code`),bT(258,`timeout`),cf(),bT(259,`, `),Aa(260,`code`),bT(261,`retry`),cf(),bT(262,`, `),Aa(263,`code`),bT(264,`resilience`),cf()(),Aa(265,`td`),bT(266,`The call, the model, `),Aa(267,`code`),bT(268,`embeddingDefaults`),cf()()(),Aa(269,`tr`)(270,`td`)(271,`code`),bT(272,`maxParallelCalls`),cf(),bT(273,`, `),Aa(274,`code`),bT(275,`providerOptions`),cf(),bT(276,`, `),Aa(277,`code`),bT(278,`headers`),cf()(),Aa(279,`td`),bT(280,`The call, the model, `),Aa(281,`code`),bT(282,`embeddingDefaults`),cf()()(),Aa(283,`tr`)(284,`td`)(285,`code`),bT(286,`pricing`),cf()(),Aa(287,`td`),bT(288,`The model`),cf()(),Aa(289,`tr`)(290,`td`)(291,`code`),bT(292,`onEmbeddingUsage`),cf()(),Aa(293,`td`),bT(294,`The call, and the module: both are called`),cf()(),Aa(295,`tr`)(296,`td`)(297,`code`),bT(298,`abortSignal`),cf(),bT(299,`, `),Aa(300,`code`),bT(301,`label`),cf()(),Aa(302,`td`),bT(303,`The call`),cf()()()(),Aa(304,`p`),bT(305,`The module's `),Aa(306,`code`),bT(307,`defaults`),cf(),bT(308,` are for language models, and nothing in them reaches an embedding call: not their timeouts, their headers or their provider options. `),Aa(309,`code`),bT(310,`budget`),cf(),bT(311,` and `),Aa(312,`code`),bT(313,`fallback`),cf(),bT(314,` are settings of language models only.`),cf(),Aa(315,`p`)(316,`code`),bT(317,`providerOptions`),cf(),bT(318,` are the provider package's own options, keyed by the provider's name, and `),Aa(319,`code`),bT(320,`headers`),cf(),bT(321,` are HTTP headers sent with each request to the provider. The number of dimensions of a vector is such an option, for the models that let you choose it, as `),Aa(322,`code`),bT(323,`documents`),cf(),bT(324,` does above.`),cf(),Aa(325,`h4`,20)(326,`span`),bT(327,`Batches`),cf()(),Aa(328,`p`)(329,`code`),bT(330,`embedMany()`),cf(),bT(331,` takes as many values as you have. The AI SDK splits them into provider requests, with as many values in each as the provider allows, and sends `),Aa(332,`code`),bT(333,`maxParallelCalls`),cf(),bT(334,` of those at a time: 4 by default, or one at a time for a model that can't take parallel calls. Whichever request answers first, `),Aa(335,`code`),bT(336,`embeddings`),cf(),bT(337,` keeps the order of `),Aa(338,`code`),bT(339,`values`),cf(),bT(340,`.`),cf(),Aa(341,`h4`,21)(342,`span`),bT(343,`Retries, timeouts and cancellation`),cf()(),Aa(344,`p`),bT(345,`Every provider request runs under the policies of `),Aa(346,`a`,22)(347,`code`),bT(348,`@nestjs/resilience`),cf()(),bT(349,`, built from the same settings as `),Aa(350,`a`,23),bT(351,`a language model's`),cf(),bT(352,`: `),Aa(353,`code`),bT(354,`timeout`),cf(),bT(355,`, `),Aa(356,`code`),bT(357,`'60s'`),cf(),bT(358,` by default, and `),Aa(359,`code`),bT(360,`retry`),cf(),bT(361,`, 3 attempts by default, which retries what the provider marks retryable and timeouts, and honors a `),Aa(362,`code`),bT(363,`retry-after`),cf(),bT(364,` header.`),cf(),Aa(365,`p`),bT(366,`They apply to each request, not to the whole call. `),Aa(367,`code`),bT(368,`timeout`),cf(),bT(369,` is how long one request may take, so a call with 20,000 values can run for as long as it needs, and a request that fails is retried alone, without sending the others again.`),cf(),Aa(370,`p`),bT(371,`When a request runs out of attempts, the call rejects with `),Aa(372,`a`,24)(373,`code`),bT(374,`AiModelError`),cf()(),bT(375,`, whose `),Aa(376,`code`),bT(377,`attempts`),cf(),bT(378,` are that request's, and the requests still running are aborted. `),Aa(379,`code`),bT(380,`embedMany()`),cf(),bT(381,` returns every vector or none, so what the finished requests embedded is lost with them. To keep the progress of a big job, send it in groups and save each one, in a queue job or a step of a `),Aa(382,`a`,25),bT(383,`workflow`),cf(),bT(384,`:`),cf(),Aa(385,`app-copy-button`)(386,`pre`)(387,`code`,14),bT(388,`
const GROUP_SIZE = 500;

for (let start = 0; start < products.length; start += GROUP_SIZE) {
  await this.search.index(products.slice(start, start + GROUP_SIZE));
}
`),cf()()(),Aa(389,`p`),bT(390,`An `),Aa(391,`code`),bT(392,`abortSignal`),cf(),bT(393,` passed to the call cancels the requests in flight and the backoff of a retry, and the call rejects with the signal's reason. Since `),Aa(394,`code`),bT(395,`timeout`),cf(),bT(396,` covers one request, this is also how to give the whole call a deadline:`),cf(),Aa(397,`app-copy-button`)(398,`pre`)(399,`code`,14),bT(400,`
const { embeddings } = await this.ai.embedMany({
  values: descriptions,
  abortSignal: AbortSignal.timeout(300_000),
});
`),cf()()(),Aa(401,`p`),bT(402,`Inside a resilient route, such as one with `),Aa(403,`code`),bT(404,`@Timeout()`),cf(),bT(405,` from `),Aa(406,`code`),bT(407,`@nestjs/resilience`),cf(),bT(408,`, the route's attempt stops the requests in the same way.`),cf(),Aa(409,`p`),bT(410,`An embedding call has no fallback models. Vectors of different models can't be compared, even when they have the same number of dimensions, so a search index written with one model can't be read with another.`),cf(),Aa(411,`h4`,26)(412,`span`),bT(413,`Policies of your own`),cf()(),Aa(414,`p`)(415,`code`),bT(416,`resilience`),cf(),bT(417,` takes a policy, or the name of a preset of `),Aa(418,`code`),bT(419,`ResilienceService`),cf(),bT(420,`, in place of `),Aa(421,`code`),bT(422,`retry`),cf(),bT(423,` and `),Aa(424,`code`),bT(425,`timeout`),cf(),bT(426,`, as it does `),Aa(427,`a`,27),bT(428,`for a language model`),cf(),bT(429,`. It runs around each provider request, so an outbound rate limit or a bulkhead counts requests, across every call that shares it. The store keeps its embedding requests within its quota at the provider:`),cf(),Aa(430,`app-copy-button`,12)(431,`span`,13),bT(432),LT(433,`extension`),Wa(434,`app-tabs`,null,4),cf(),Aa(436,`pre`)(437,`code`,14),bT(438,`
import { openai } from '@ai-sdk/openai';
import { Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';
import { ResilienceModule } from '@nestjs/resilience';

@Module({
  imports: [
    ResilienceModule.forRoot({
      presets: {
        embeddings: {
          retry: { attempts: 3 },
          timeout: '30s',
          outboundRateLimit: { limit: 3_000, interval: '1m', maxWait: '1m' },
        },
      },
    }),
    AiModule.forRoot({
      isGlobal: true,
      embeddingModels: {
        default: {
          model: openai.embeddingModel('text-embedding-3-small'),
          resilience: 'embeddings',
        },
      },
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(439,`p`),bT(440,`Give such a policy room for the requests of a call to wait. A request that finds no token rejects the whole call with `),Aa(441,`code`),bT(442,`OutboundRateLimitError`),cf(),bT(443,` once it has waited `),Aa(444,`code`),bT(445,`maxWait`),cf(),bT(446,`, which is 0 by default, and one that finds a full bulkhead rejects it with `),Aa(447,`code`),bT(448,`BulkheadFullError`),cf(),bT(449,` unless the bulkhead has a `),Aa(450,`code`),bT(451,`maxQueue`),cf(),bT(452,` to hold it.`),cf(),Aa(453,`p`),bT(454,`The policies publish the events of `),Aa(455,`code`),bT(456,`@nestjs/resilience`),cf(),bT(457,` on the `),Aa(458,`code`),bT(459,`nestjs:resilience:<type>`),cf(),bT(460,` diagnostics channels, named after the model (`),Aa(461,`code`),bT(462,`ai:embedding:default retry`),cf(),bT(463,`), with the call's `),Aa(464,`code`),bT(465,`label`),cf(),bT(466,` as their `),Aa(467,`code`),bT(468,`source`),cf(),bT(469,`.`),cf(),Aa(470,`h4`,28)(471,`span`),bT(472,`Usage and cost`),cf()(),Aa(473,`p`),bT(474,`A call that succeeds emits one usage event, with the tokens its requests reported. With a model's `),Aa(475,`code`),bT(476,`pricing`),cf(),bT(477,`, its price per million input tokens in a unit of your choice, the event also has a `),Aa(478,`code`),bT(479,`cost`),cf(),bT(480,`, in the same unit. `),Aa(481,`code`),bT(482,`onEmbeddingUsage`),cf(),bT(483,` receives them:`),cf(),Aa(484,`app-copy-button`,12)(485,`span`,13),bT(486),LT(487,`extension`),Wa(488,`app-tabs`,null,5),cf(),Aa(490,`pre`)(491,`code`,14),bT(492,`
import { openai } from '@ai-sdk/openai';
import { Logger, Module } from '@nestjs/common';
import { AiModule } from '@nestjs/ai';

const usage = new Logger('Embeddings');

@Module({
  imports: [
    AiModule.forRoot({
      isGlobal: true,
      embeddingModels: {
        default: {
          model: openai.embeddingModel('text-embedding-3-small'),
          // Your provider's price, per million input tokens
          pricing: { input: 0.02 },
        },
      },
      onEmbeddingUsage: (event) =>
        usage.log(
          \`\${event.label ?? 'call'}: \${event.inputCount} values, \` +
            \`\${event.usage.tokens} tokens, $\${event.cost?.toFixed(6)}\`,
        ),
    }),
  ],
})
export class AppModule {}
`),cf()()(),Aa(493,`table`)(494,`thead`)(495,`tr`)(496,`th`),bT(497,`Property`),cf(),Aa(498,`th`),bT(499,`What it is`),cf()()(),Aa(500,`tbody`)(501,`tr`)(502,`td`)(503,`code`),bT(504,`operation`),cf()(),Aa(505,`td`)(506,`code`),bT(507,`'embed'`),cf(),bT(508,` or `),Aa(509,`code`),bT(510,`'embedMany'`),cf()()(),Aa(511,`tr`)(512,`td`)(513,`code`),bT(514,`label`),cf()(),Aa(515,`td`),bT(516,`The call's `),Aa(517,`code`),bT(518,`label`),cf(),bT(519,`, to tell calls apart`),cf()(),Aa(520,`tr`)(521,`td`)(522,`code`),bT(523,`model`),cf()(),Aa(524,`td`),bT(525,`The model that answered: `),Aa(526,`code`),bT(527,`name`),cf(),bT(528,`, `),Aa(529,`code`),bT(530,`provider`),cf(),bT(531,`, `),Aa(532,`code`),bT(533,`modelId`),cf()()(),Aa(534,`tr`)(535,`td`)(536,`code`),bT(537,`inputCount`),cf()(),Aa(538,`td`),bT(539,`How many values the call embedded`),cf()(),Aa(540,`tr`)(541,`td`)(542,`code`),bT(543,`usage`),cf()(),Aa(544,`td`),bT(545,`The tokens the provider reported: `),Aa(546,`code`),bT(547,`tokens`),cf()()(),Aa(548,`tr`)(549,`td`)(550,`code`),bT(551,`attempts`),cf()(),Aa(552,`td`),bT(553,`The provider requests the call made, retries included`),cf()(),Aa(554,`tr`)(555,`td`)(556,`code`),bT(557,`durationMs`),cf()(),Aa(558,`td`),bT(559,`How long the call took, with its retries and backoff`),cf()(),Aa(560,`tr`)(561,`td`)(562,`code`),bT(563,`cost`),cf()(),Aa(564,`td`),bT(565,`The tokens at `),Aa(566,`code`),bT(567,`pricing.input`),cf(),bT(568,`; `),Aa(569,`code`),bT(570,`undefined`),cf(),bT(571,` without `),Aa(572,`code`),bT(573,`pricing`),cf()()()()(),Aa(574,`p`),bT(575,`A call can take its own `),Aa(576,`code`),bT(577,`onEmbeddingUsage`),cf(),bT(578,` too, which is called after the module's. `),Aa(579,`code`),bT(580,`onUsage`),cf(),bT(581,` is for language models, and isn't called. What a listener throws is logged, and never fails the call. The event carries neither the texts nor the vectors, so it's safe to log.`),cf(),Aa(582,`p`),bT(583,`The events aren't a billing ledger: a provider may bill a request that timed out, and a call that fails emits nothing, even for the requests it completed.`),cf(),Aa(584,`h4`,29)(585,`span`),bT(586,`Calling the AI SDK yourself`),cf()(),Aa(587,`p`),bT(588,`To call the AI SDK yourself, inject the model. `),Aa(589,`code`),bT(590,`@InjectEmbeddingModel('documents')`),cf(),bT(591,` injects the `),Aa(592,`code`),bT(593,`EmbeddingModel`),cf(),bT(594,` that `),Aa(595,`code`),bT(596,`documents`),cf(),bT(597,` names, and `),Aa(598,`code`),bT(599,`@InjectEmbeddingModel()`),cf(),bT(600,` the `),Aa(601,`code`),bT(602,`default`),cf(),bT(603,` one:`),cf(),Aa(604,`app-copy-button`,12)(605,`span`,13),bT(606),LT(607,`extension`),Wa(608,`app-tabs`,null,6),cf(),Aa(610,`pre`)(611,`code`,14),bT(612,`
import { Injectable } from '@nestjs/common';
import { InjectEmbeddingModel } from '@nestjs/ai';
import { embed, type EmbeddingModel } from 'ai';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectEmbeddingModel('documents')
    private readonly model: EmbeddingModel,
  ) {}

  async vectorOf(text: string): Promise<number[]> {
    const { embedding } = await embed({ model: this.model, value: text });
    return embedding;
  }
}
`),cf()()(),Aa(613,`p`),bT(614,`A name the module doesn't configure fails at startup, naming the class that asked for it. The model is the provider's `),Aa(615,`code`),bT(616,`EmbeddingModel`),cf(),bT(617,` as it is, so a call made with it gets none of what `),Aa(618,`code`),bT(619,`AiService`),cf(),bT(620,` adds: no policies or usage events, and the AI SDK's own retries (`),Aa(621,`code`),bT(622,`maxRetries`),cf(),bT(623,`, 2 by default). `),Aa(624,`code`),bT(625,`AiEmbeddingModels`),cf(),bT(626,` lists the configured models, with `),Aa(627,`code`),bT(628,`names()`),cf(),bT(629,`, `),Aa(630,`code`),bT(631,`has(name)`),cf(),bT(632,` and `),Aa(633,`code`),bT(634,`get(name)`),cf(),bT(635,`.`),cf(),Aa(636,`p`),bT(637,`Under `),Aa(638,`code`),bT(639,`forRootAsync()`),cf(),bT(640,`, its factory returns `),Aa(641,`code`),bT(642,`embeddingModels`),cf(),bT(643,` as it returns `),Aa(644,`code`),bT(645,`models`),cf(),bT(646,`, and `),Aa(647,`code`),bT(648,`@InjectEmbeddingModel()`),cf(),bT(649,` needs what `),Aa(650,`a`,30)(651,`code`),bT(652,`@InjectModel()`),cf(),bT(653,` does`),cf(),bT(654,`: a class loaded after the module is defined lists its names in `),Aa(655,`code`),bT(656,`embeddingModelNames`),cf(),bT(657,`, at the top level.`),cf(),Aa(658,`blockquote`,31)(659,`strong`),bT(660,`Hint`),cf(),Aa(661,`a`,32),bT(662,`Testing`),cf(),bT(663,` describes `),Aa(664,`code`),bT(665,`FakeEmbeddingModel`),cf(),bT(666,`, an embedding model for tests that calls no provider.
`),cf()(),Aa(667,`a`,33),Wa(668,`i`,34),Aa(669,`span`),bT(670,`Edit on GitHub`),cf()()()),c&2){let y=tT(36),k=tT(89),A=tT(243),T=tT(435),I=tT(489),M=tT(609);zC(33),hf(` `,jT(34,6,`app.module`,y.isJsActive),`
`),zC(53),hf(` `,jT(87,9,`catalog/search.service`,k.isJsActive),`
`),zC(154),hf(` `,jT(241,12,`app.module`,A.isJsActive),`
`),zC(192),hf(` `,jT(433,15,`app.module`,T.isJsActive),`
`),zC(54),hf(` `,jT(487,18,`app.module`,I.isJsActive),`
`),zC(120),hf(` `,jT(607,21,`catalog/documents.service`,M.isJsActive),`
`)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return s})();var D=(()=>{class s extends xt{static ɵfac=(()=>{let m;return function(p){return(m||(m=im(s)))(p||s)}})();static ɵcmp=ef({type:s,selectors:[[`app-ai-testing`]],features:[xy],decls:619,vars:48,consts:[[`contentReference`,``],[`app41f6591657aeb7b2fc4cb0cc8f8cafcbcfd98700`,``],[`app294c5f79b4643c228620a57a1188a5211e4e2433`,``],[`app3cb2fde08899f36ce7698730504432fcf02920f3`,``],[`appd8d86ede9397dd1ee670c710bb02f833753116b2`,``],[`app13ca488377cfdaabc24adca9f4c7493ec7182482`,``],[`app86fab9ceae7a9b211a84400076e49ea5103fb7d6`,``],[`app2b57ef8179d5509e89cf92908933f3019c1ee92f`,``],[`app0384605cdfde38ae17eed8897f66f1abab0df74c`,``],[1,`content`],[1,`content-inner`],[`id`,`testing`],[`appAnchor`,``,`id`,`the-fake-model`],[1,`language-typescript`],[`appAnchor`,``,`id`,`testing-a-service`],[1,`with-heading`],[1,`filename`],[`appAnchor`,``,`id`,`retries-timeouts-and-fallback`],[`appAnchor`,``,`id`,`overriding-models-in-end-to-end-tests`],[`appAnchor`,``,`id`,`testing-agent-functions`],[`routerLink`,`/mcp/testing`],[`href`,`/ai/agents#durable-agent-runs`],[`appAnchor`,``,`id`,`testing-streams`],[`appAnchor`,``,`id`,`testing-durable-runs`],[`href`,`/reliability/workflows#test-crash-recovery`],[`appAnchor`,``,`id`,`testing-embeddings`],[`routerLink`,`/ai/embeddings`],[`href`,`https://github.com/nestjs/docs.nestjs.com/edit/master/content/ai/testing.md`,`target`,`_blank`,`rel`,`noopener`,1,`github-links`],[`aria-hidden`,`true`,1,`ph`,`ph-pencil-simple-line`]],template:function(c,p){if(c&1&&(Aa(0,`div`,9,0)(2,`div`,10)(3,`h3`,11),bT(4,`Testing`),cf(),Aa(5,`p`),bT(6,`Tests of code that calls models don't call a model provider: `),Aa(7,`code`),bT(8,`FakeModel`),cf(),bT(9,`, from `),Aa(10,`code`),bT(11,`@nestjs/ai/testing`),cf(),bT(12,`, is a language model that answers each call with the next of the answers you give it, and records every call it receives.`),cf(),Aa(13,`p`),bT(14,`The fake model is a real `),Aa(15,`code`),bT(16,`LanguageModel`),cf(),bT(17,`, so everything around it runs as in production: the module's settings, retries, timeouts and fallback models, schemas, agent functions and their enhancers, and streaming. Only the network is left out.`),cf(),Aa(18,`h4`,12)(19,`span`),bT(20,`The fake model`),cf()(),Aa(21,`p`),bT(22,`A `),Aa(23,`code`),bT(24,`FakeModel`),cf(),bT(25,` takes its answers in order:`),cf(),Aa(26,`app-copy-button`)(27,`pre`)(28,`code`,13),bT(29,`
import { FakeModel, providerError } from '@nestjs/ai/testing';

const model = new FakeModel([
  // 1. Text
  'Your order has shipped.',
  // 2. A tool call, and the answer after it, a function of the call
  { toolCalls: [{ name: 'find-order', input: { orderId: 'ord_123' } }] },
  (call) => \`The order is \${JSON.stringify(call.toolResults[0].output)}\`,
  // 3. An object, for generateObject()
  { object: { category: 'shipping', orderId: 'ord_123', urgent: false } },
  // 4. A provider's error: overloaded
  providerError(529),
]);
`),cf()()(),Aa(30,`table`)(31,`thead`)(32,`tr`)(33,`th`),bT(34,`Answer`),cf(),Aa(35,`th`),bT(36,`What the model does`),cf()()(),Aa(37,`tbody`)(38,`tr`)(39,`td`),bT(40,`A string`),cf(),Aa(41,`td`),bT(42,`Answers with that text`),cf()(),Aa(43,`tr`)(44,`td`)(45,`code`),bT(46),cf()(),Aa(47,`td`),bT(48,`The same, with the options below`),cf()(),Aa(49,`tr`)(50,`td`)(51,`code`),bT(52),cf()(),Aa(53,`td`),bT(54,`Calls tools, each with its `),Aa(55,`code`),bT(56,`name`),cf(),bT(57,`, `),Aa(58,`code`),bT(59,`input`),cf(),bT(60,` (default `),Aa(61,`code`),bT(62),cf(),bT(63,`) and `),Aa(64,`code`),bT(65,`id`),cf(),bT(66,` (default `),Aa(67,`code`),bT(68,`call-1`),cf(),bT(69,`, `),Aa(70,`code`),bT(71,`call-2`),cf(),bT(72,`, ...)`),cf()(),Aa(73,`tr`)(74,`td`)(75,`code`),bT(76),cf()(),Aa(77,`td`),bT(78,`Answers with the object as JSON, which `),Aa(79,`code`),bT(80,`generateObject()`),cf(),bT(81,` reads`),cf()(),Aa(82,`tr`)(83,`td`),bT(84,`An `),Aa(85,`code`),bT(86,`Error`),cf()(),Aa(87,`td`),bT(88,`Fails with it, as a provider's request does`),cf()(),Aa(89,`tr`)(90,`td`),bT(91,`A function of the call`),cf(),Aa(92,`td`),bT(93,`Answers with what it returns, any of the above, or a promise of it`),cf()()()(),Aa(94,`p`),bT(95,`An answer object also takes:`),cf(),Aa(96,`table`)(97,`thead`)(98,`tr`)(99,`th`),bT(100,`Option`),cf(),Aa(101,`th`),bT(102,`What it does`),cf()()(),Aa(103,`tbody`)(104,`tr`)(105,`td`)(106,`code`),bT(107,`usage`),cf()(),Aa(108,`td`),bT(109,`The tokens the answer reports: `),Aa(110,`code`),bT(111,`inputTokens`),cf(),bT(112,` and `),Aa(113,`code`),bT(114,`outputTokens`),cf(),bT(115,` (10 each by default), `),Aa(116,`code`),bT(117,`cachedInputTokens`),cf(),bT(118,`, `),Aa(119,`code`),bT(120,`reasoningTokens`),cf()()(),Aa(121,`tr`)(122,`td`)(123,`code`),bT(124,`finishReason`),cf()(),Aa(125,`td`),bT(126,`Default `),Aa(127,`code`),bT(128,`'tool-calls'`),cf(),bT(129,` with tool calls, else `),Aa(130,`code`),bT(131,`'stop'`),cf()()(),Aa(132,`tr`)(133,`td`)(134,`code`),bT(135,`delay`),cf()(),Aa(136,`td`),bT(137,`Milliseconds before it answers, or before a stream opens. The call's abort, and its timeout, cut it short`),cf()(),Aa(138,`tr`)(139,`td`)(140,`code`),bT(141,`chunkDelay`),cf()(),Aa(142,`td`),bT(143,`Milliseconds between the chunks of a stream, which sends its text in word-sized chunks`),cf()(),Aa(144,`tr`)(145,`td`)(146,`code`),bT(147,`streamError`),cf()(),Aa(148,`td`),bT(149,`An error the stream fails with after its text, as a connection that breaks`),cf()()()(),Aa(150,`p`),bT(151,`Given a function instead of a list, `),Aa(152,`code`),bT(153,`new FakeModel((call) => ...)`),cf(),bT(154,` answers every call with it. `),Aa(155,`code`),bT(156,`reply(...answers)`),cf(),bT(157,` adds answers after the ones not used yet, and `),Aa(158,`code`),bT(159,`fakeModel(...answers)`),cf(),bT(160,` is `),Aa(161,`code`),bT(162,`new FakeModel(answers)`),cf(),bT(163,`. A call it has no answer left for fails: `),Aa(164,`code`),bT(165,`FakeModel: no answer left for call 4. Give it more answers.`),cf()(),Aa(166,`p`)(167,`code`),bT(168),cf(),bT(169,` is the error an `),Aa(170,`code`),bT(171,`@ai-sdk/*`),cf(),bT(172,` provider throws for an HTTP error: an `),Aa(173,`code`),bT(174,`APICallError`),cf(),bT(175,`, retryable for 408, 409, 429 and 5xx, with a `),Aa(176,`code`),bT(177,`retry-after`),cf(),bT(178,` header when `),Aa(179,`code`),bT(180,`retryAfter`),cf(),bT(181,` (in seconds) is set.`),cf(),Aa(182,`p`)(183,`code`),bT(184,`calls`),cf(),bT(185,` lists what the model received, and `),Aa(186,`code`),bT(187,`lastCall`),cf(),bT(188,` is the last one:`),cf(),Aa(189,`table`)(190,`thead`)(191,`tr`)(192,`th`),bT(193,`Property`),cf(),Aa(194,`th`),bT(195,`What it is`),cf()()(),Aa(196,`tbody`)(197,`tr`)(198,`td`)(199,`code`),bT(200,`instructions`),cf()(),Aa(201,`td`),bT(202,`The system prompt`),cf()(),Aa(203,`tr`)(204,`td`)(205,`code`),bT(206,`lastUserMessage`),cf()(),Aa(207,`td`),bT(208,`The text of the last user message`),cf()(),Aa(209,`tr`)(210,`td`)(211,`code`),bT(212,`toolResults`),cf()(),Aa(213,`td`),bT(214,`What the tools of the previous step returned, as the model reads them: `),Aa(215,`code`),bT(216,`toolName`),cf(),bT(217,`, `),Aa(218,`code`),bT(219,`toolCallId`),cf(),bT(220,` and `),Aa(221,`code`),bT(222,`output`),cf(),bT(223,`, which is the error's message for a tool that failed`),cf()(),Aa(224,`tr`)(225,`td`)(226,`code`),bT(227,`tools`),cf()(),Aa(228,`td`),bT(229,`The names of the tools the model was offered`),cf()(),Aa(230,`tr`)(231,`td`)(232,`code`),bT(233,`stream`),cf()(),Aa(234,`td`),bT(235,`Whether the call was streamed`),cf()(),Aa(236,`tr`)(237,`td`)(238,`code`),bT(239,`options`),cf()(),Aa(240,`td`),bT(241,`Everything the model was sent, as the AI SDK's provider-level call options: `),Aa(242,`code`),bT(243,`prompt`),cf(),bT(244,`, `),Aa(245,`code`),bT(246,`tools`),cf(),bT(247,`, `),Aa(248,`code`),bT(249,`responseFormat`),cf(),bT(250,`, `),Aa(251,`code`),bT(252,`maxOutputTokens`),cf(),bT(253,`, `),Aa(254,`code`),bT(255,`headers`),cf(),bT(256,` and the rest`),cf()()()(),Aa(257,`h4`,14)(258,`span`),bT(259,`Testing a service`),cf()(),Aa(260,`p`),bT(261,`Register `),Aa(262,`code`),bT(263,`AiModule`),cf(),bT(264,` in a testing module, with fake models under the names the service uses:`),cf(),Aa(265,`app-copy-button`,15)(266,`span`,16),bT(267),LT(268,`extension`),Wa(269,`app-tabs`,null,1),cf(),Aa(271,`pre`)(272,`code`,13),bT(273,`
import { Test } from '@nestjs/testing';
import { AiModule } from '@nestjs/ai';
import { FakeModel } from '@nestjs/ai/testing';
import { TriageService } from './triage.service';

describe('TriageService', () => {
  it('sorts an email', async () => {
    const fast = new FakeModel([
      { object: { category: 'shipping', orderId: 'ord_123', urgent: true } },
    ]);
    const moduleRef = await Test.createTestingModule({
      imports: [
        AiModule.forRoot({ models: { default: new FakeModel(), fast } }),
      ],
      providers: [TriageService],
    }).compile();

    const triage = await moduleRef
      .get(TriageService)
      .triage('Where is ord_123? It was due on Monday.');

    expect(triage).toEqual({
      category: 'shipping',
      orderId: 'ord_123',
      urgent: true,
    });
    expect(fast.lastCall?.instructions).toContain('support email');
    expect(fast.lastCall?.lastUserMessage).toBe(
      'Where is ord_123? It was due on Monday.',
    );
    expect(fast.lastCall?.options.responseFormat).toMatchObject({
      type: 'json',
    });
  });
});
`),cf()()(),Aa(274,`p`),bT(275,`An answer that doesn't match the schema tests the service's handling of `),Aa(276,`code`),bT(277,`AiOutputError`),cf(),bT(278,`: give the model `),Aa(279,`code`),bT(280,`'Sure! Here it is.'`),cf(),bT(281,`, or an object with a field missing.`),cf(),Aa(282,`h4`,17)(283,`span`),bT(284,`Retries, timeouts and fallback`),cf()(),Aa(285,`p`)(286,`code`),bT(287,`providerError()`),cf(),bT(288,` and `),Aa(289,`code`),bT(290,`delay`),cf(),bT(291,` test what happens when a provider fails, or takes too long. Give the module's retries no backoff, and its attempts a short timeout, so the test doesn't wait:`),cf(),Aa(292,`app-copy-button`,15)(293,`span`,16),bT(294),LT(295,`extension`),Wa(296,`app-tabs`,null,2),cf(),Aa(298,`pre`)(299,`code`,13),bT(300,`
import { Test } from '@nestjs/testing';
import { AiModelError, AiModule } from '@nestjs/ai';
import { FakeModel, providerError } from '@nestjs/ai/testing';
import { ResilienceTimeoutError } from '@nestjs/resilience';
import { RepliesService } from './replies.service';

async function createReplies(fast: FakeModel, main: FakeModel) {
  const moduleRef = await Test.createTestingModule({
    imports: [
      AiModule.forRoot({
        models: { default: main, fast: { model: fast, fallback: 'default' } },
        defaults: {
          timeout: 50,
          retry: { attempts: 2, backoff: { delay: 0 } },
        },
      }),
    ],
    providers: [RepliesService],
  }).compile();
  return moduleRef.get(RepliesService);
}

describe('RepliesService', () => {
  it('falls back to the default model when the fast one fails', async () => {
    const fast = new FakeModel([providerError(529), providerError(529)]);
    const main = new FakeModel(['Thanks for writing in!']);
    const replies = await createReplies(fast, main);

    await expect(replies.draft('Hello')).resolves.toBe(
      'Thanks for writing in!',
    );
    expect(fast.calls).toHaveLength(2);
  });

  it('gives up when every model fails', async () => {
    const fast = new FakeModel(() => providerError(500));
    const main = new FakeModel(() => ({ text: 'Too late', delay: 1_000 }));
    const replies = await createReplies(fast, main);

    const error = await replies.draft('Hello').catch((error: unknown) => error);

    expect(error).toBeInstanceOf(AiModelError);
    expect((error as AiModelError).attempts).toHaveLength(4);
    expect((error as AiModelError).cause).toBeInstanceOf(
      ResilienceTimeoutError,
    );
  });
});
`),cf()()(),Aa(301,`p`),bT(302,`The fast model fails twice, and the default one takes longer than the 50 milliseconds each attempt has, twice: four attempts in all, and the last one's error is the `),Aa(303,`code`),bT(304,`cause`),cf(),bT(305,`.`),cf(),Aa(306,`h4`,18)(307,`span`),bT(308,`Overriding models in end-to-end tests`),cf()(),Aa(309,`p`)(310,`code`),bT(311,`overrideModels()`),cf(),bT(312,` puts fake models in place of the application's own, by name, and keeps the rest of their definitions: their pricing, fallback models, timeouts and retries. A name the module doesn't configure fails when the testing module compiles. The models `),Aa(313,`code`),bT(314,`@InjectModel()`),cf(),bT(315,` injects are replaced too:`),cf(),Aa(316,`app-copy-button`,15)(317,`span`,16),bT(318),LT(319,`extension`),Wa(320,`app-tabs`,null,3),cf(),Aa(322,`pre`)(323,`code`,13),bT(324,`
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import { FakeModel, overrideModels } from '@nestjs/ai/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('the assistant', () => {
  let app: INestApplication;
  const model = new FakeModel();

  beforeAll(async () => {
    const moduleRef = await overrideModels(
      Test.createTestingModule({ imports: [AppModule] }),
      { default: model },
    ).compile();
    app = await moduleRef.createNestApplication().init();
  });

  afterAll(() => app.close());

  it('looks the order up before it answers', async () => {
    model.reply(
      { toolCalls: [{ name: 'find-order', input: { orderId: 'ord_123' } }] },
      (call) => {
        const order = call.toolResults[0].output as { status: string };
        return \`Your order has \${order.status}.\`;
      },
    );

    const response = await request(app.getHttpServer())
      .post('/assistant/questions')
      .send({ question: 'Where is ord_123?' })
      .expect(201);

    expect(response.body).toEqual({ answer: 'Your order has shipped.' });
    expect(model.calls.map((call) => call.tools)).toEqual([
      ['find-order'],
      ['find-order'],
    ]);
  });
});
`),cf()()(),Aa(325,`p`),bT(326,`The agent functions run for real, with their schemas, guards and filters: a function's failure reaches the model as the tool's result, which the test reads in the next call's `),Aa(327,`code`),bT(328,`toolResults`),cf(),bT(329,`:`),cf(),Aa(330,`app-copy-button`)(331,`pre`)(332,`code`,13),bT(333,`
it('tells the model when there is no such order', async () => {
  model.reply(
    { toolCalls: [{ name: 'find-order', input: { orderId: 'ord_999' } }] },
    'I could not find that order.',
  );

  await request(app.getHttpServer())
    .post('/assistant/questions')
    .send({ question: 'Where is ord_999?' })
    .expect(201);

  expect(model.lastCall?.toolResults).toEqual([
    expect.objectContaining({
      toolName: 'find-order',
      output: 'There is no order ord_999',
    }),
  ]);
});
`),cf()()(),Aa(334,`h4`,19)(335,`span`),bT(336,`Testing agent functions`),cf()(),Aa(337,`p`)(338,`code`),bT(339,`callTool()`),cf(),bT(340,` runs an agent function as a model's tool call does, with no model: the arguments validated by its schema, its scopes checked, then its guards, interceptors, pipes and filters, and the method. It resolves with what the model would read, and rejects with the `),Aa(341,`code`),bT(342,`AiToolError`),cf(),bT(343,` the model would read about a failure:`),cf(),Aa(344,`app-copy-button`,15)(345,`span`,16),bT(346),LT(347,`extension`),Wa(348,`app-tabs`,null,4),cf(),Aa(350,`pre`)(351,`code`,13),bT(352,`
import { Test, type TestingModule } from '@nestjs/testing';
import { AiModule } from '@nestjs/ai';
import { callTool, FakeModel } from '@nestjs/ai/testing';
import { OrdersModule } from '../orders/orders.module';
import { AssistantModule } from './assistant.module';

describe('change-address', () => {
  let moduleRef: TestingModule;
  const alice = { request: { user: { id: 'cus_alice' } } };
  const bob = { request: { user: { id: 'cus_bob' } } };

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        AiModule.forRoot({
          isGlobal: true,
          models: { default: new FakeModel() },
        }),
        OrdersModule,
        AssistantModule,
      ],
    }).compile();
  });

  afterAll(() => moduleRef.close());

  it("changes the address of the customer's own order", async () => {
    const address = { orderId: 'ord_123', address: '12 Whisker Lane, Leeds' };
    await expect(
      callTool(moduleRef, 'change-address', address, { caller: alice }),
    ).resolves.toEqual({ id: 'ord_123', address: '12 Whisker Lane, Leeds' });
  });

  it("refuses another customer's order", async () => {
    const address = { orderId: 'ord_123', address: '12 Whisker Lane, Leeds' };
    await expect(
      callTool(moduleRef, 'change-address', address, { caller: bob }),
    ).rejects.toThrow('Forbidden resource');
  });

  it('validates the address', async () => {
    const address = { orderId: 'ord_123', address: 'Leeds' };
    await expect(
      callTool(moduleRef, 'change-address', address, { caller: alice }),
    ).rejects.toThrow('Too small');
  });
});
`),cf()()(),Aa(353,`p`)(354,`code`),bT(355,`caller`),cf(),bT(356,` is what a call's `),Aa(357,`code`),bT(358,`caller`),cf(),bT(359,` is: a `),Aa(360,`code`),bT(361,`request`),cf(),bT(362,`, as the route's, or a `),Aa(363,`code`),bT(364,`user`),cf(),bT(365,` and `),Aa(366,`code`),bT(367,`scopes`),cf(),bT(368,`. `),Aa(369,`code`),bT(370,`callTool()`),cf(),bT(371,` initializes the testing module if it isn't yet. A method that serves MCP clients too is tested as an MCP tool with the `),Aa(372,`a`,20),bT(373,`in-memory client`),cf(),bT(374,` of `),Aa(375,`code`),bT(376,`@nestjs/mcp/testing`),cf(),bT(377,`, whose calls have the context type `),Aa(378,`code`),bT(379,`'mcp'`),cf(),bT(380,`.`),cf(),Aa(381,`p`),bT(382,`A unit test calls the method itself, with the context it needs. A direct call skips everything around the method: the schema, the scopes and the enhancers. The refund of a `),Aa(383,`a`,21),bT(384,`durable run`),cf(),bT(385,` passes its call's `),Aa(386,`code`),bT(387,`idempotencyKey`),cf(),bT(388,` on to the payment provider:`),cf(),Aa(389,`app-copy-button`,15)(390,`span`,16),bT(391),LT(392,`extension`),Wa(393,`app-tabs`,null,5),cf(),Aa(395,`pre`)(396,`code`,13),bT(397,`
import type { AgentFunctionContext } from '@nestjs/ai';
import { OrdersService } from '../orders/orders.service';
import { PaymentsService } from '../payments/payments.service';
import { RefundTools } from './refund.tools';

describe('RefundTools', () => {
  const orders = {
    findById: vi.fn().mockResolvedValue({
      id: 'ord_123',
      paymentId: 'pay_123',
      total: 4200,
    }),
  };
  const payments = { refund: vi.fn() };
  const tools = new RefundTools(
    orders as unknown as OrdersService,
    payments as unknown as PaymentsService,
  );
  const ctx = {
    idempotencyKey: 'refund-1:tool-1-call-2',
    signal: new AbortController().signal,
  } as AgentFunctionContext;

  it("refunds the order with the call's idempotency key", async () => {
    await expect(tools.refund({ orderId: 'ord_123' }, ctx)).resolves.toEqual({
      refunded: 'ord_123',
      amount: 4200,
    });
    expect(payments.refund).toHaveBeenCalledWith('pay_123', 4200, {
      idempotencyKey: 'refund-1:tool-1-call-2',
    });
  });

  it("doesn't refund an order that doesn't exist", async () => {
    orders.findById.mockResolvedValueOnce(undefined);
    await expect(tools.refund({ orderId: 'ord_999' }, ctx)).rejects.toThrow(
      'There is no order ord_999',
    );
  });
});
`),cf()()(),Aa(398,`h4`,22)(399,`span`),bT(400,`Testing streams`),cf()(),Aa(401,`p`),bT(402,`The fake model streams its text in word-sized chunks, so a stream reads as it would from a provider. In an end-to-end test, the response of a chat route is a server-sent events body, whose events are the UI message stream's chunks:`),cf(),Aa(403,`app-copy-button`)(404,`pre`)(405,`code`,13),bT(406,`
it('streams the answer, with the tool call', async () => {
  model.reply(
    { toolCalls: [{ name: 'find-order', input: { orderId: 'ord_123' } }] },
    'Your order has shipped.',
  );

  const response = await request(app.getHttpServer())
    .post('/assistant/chat')
    .send({
      messages: [
        {
          id: 'msg_1',
          role: 'user',
          parts: [{ type: 'text', text: 'Where is ord_123?' }],
        },
      ],
    })
    .expect(200)
    .expect('content-type', 'text/event-stream');

  const chunks = response.text
    .split('\\n\\n')
    .filter((event) => event.startsWith('data: {'))
    .map((event) => JSON.parse(event.slice('data: '.length)));
  expect(chunks).toContainEqual(
    expect.objectContaining({
      type: 'tool-output-available',
      output: { id: 'ord_123', status: 'shipped', total: 4200 },
    }),
  );
  const text = chunks
    .filter((chunk) => chunk.type === 'text-delta')
    .map((chunk) => chunk.delta)
    .join('');
  expect(text).toBe('Your order has shipped.');
});
`),cf()()(),Aa(407,`p`)(408,`code`),bT(409,`streamError`),cf(),bT(410,` tests a stream that breaks after its first chunk, `),Aa(411,`code`),bT(412),cf(),bT(413,`: the body then ends with an `),Aa(414,`code`),bT(415,`error`),cf(),bT(416,` chunk that says `),Aa(417,`code`),bT(418,`An error occurred.`),cf(),bT(419,`. Outside HTTP, read the stream of `),Aa(420,`code`),bT(421,`streamText()`),cf(),bT(422,` itself, as `),Aa(423,`code`),bT(424,`textStream`),cf(),bT(425,`, or its `),Aa(426,`code`),bT(427,`text`),cf(),bT(428,` promise.`),cf(),Aa(429,`h4`,23)(430,`span`),bT(431,`Testing durable runs`),cf()(),Aa(432,`p`),bT(433,`A durable run is tested with the workflows engine running in the test, on its in-memory store, with a `),Aa(434,`code`),bT(435,`ManualWorkflowClock`),cf(),bT(436,` and its worker turned off: `),Aa(437,`code`),bT(438,`WorkflowWorker.drain()`),cf(),bT(439,` runs the instances that are due, until none is left that can run, so the test decides when the run moves on:`),cf(),Aa(440,`app-copy-button`,15)(441,`span`,16),bT(442),LT(443,`extension`),Wa(444,`app-tabs`,null,6),cf(),Aa(446,`pre`)(447,`code`,13),bT(448,`
import { Test, type TestingModule } from '@nestjs/testing';
import { AiModule } from '@nestjs/ai';
import { FakeModel } from '@nestjs/ai/testing';
import { AiAgents } from '@nestjs/ai/workflows';
import {
  ManualWorkflowClock,
  WorkflowClient,
  WorkflowsModule,
  WorkflowWorker,
} from '@nestjs/workflows';
import { PaymentsService } from '../payments/payments.service';
import { RefundRequest } from './refund-request.workflow';
import { RefundsModule } from './refunds.module';

describe('RefundRequest', () => {
  let moduleRef: TestingModule;
  const payments = { refund: vi.fn() };
  const model = new FakeModel([
    { toolCalls: [{ name: 'find-order', input: { orderId: 'ord_123' } }] },
    { toolCalls: [{ name: 'refund', input: { orderId: 'ord_123' } }] },
    'Your order ord_123 is refunded.',
  ]);

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        WorkflowsModule.forRoot({
          clock: new ManualWorkflowClock(),
          worker: false,
        }),
        AiModule.forRoot({ isGlobal: true, models: { default: model } }),
        RefundsModule,
      ],
    })
      .overrideProvider(PaymentsService)
      .useValue(payments)
      .compile();
    await moduleRef.init();
  });

  afterAll(() => moduleRef.close());

  it('refunds the order once the support team approves', async () => {
    const workflows = moduleRef.get(WorkflowClient);
    const worker = moduleRef.get(WorkflowWorker);
    const agents = moduleRef.get(AiAgents);

    await workflows.start(
      RefundRequest,
      { email: 'Please refund ord_123', customerId: 'cus_alice' },
      { id: 'refund-1' },
    );
    await worker.drain();

    const [pending] = await agents.pendingApprovals('refund-1');
    expect(pending).toMatchObject({
      toolName: 'refund',
      input: { orderId: 'ord_123' },
    });
    expect(payments.refund).not.toHaveBeenCalled();

    await agents.approve(pending.key);
    await worker.drain();

    expect(payments.refund).toHaveBeenCalledTimes(1);
    expect(await workflows.getStatus('refund-1')).toMatchObject({
      status: 'completed',
      output: { text: 'Your order ord_123 is refunded.' },
    });
  });
});
`),cf()()(),Aa(449,`p`),bT(450,`The model calls and the tool calls the run made before the approval are read back from the journal when it resumes: the fake model is called three times in all. To test a restart, boot a second application on the same store, as `),Aa(451,`a`,24),bT(452,`Test crash recovery`),cf(),bT(453,` shows for any workflow.`),cf(),Aa(454,`h4`,25)(455,`span`),bT(456,`Testing embeddings`),cf()(),Aa(457,`p`)(458,`code`),bT(459,`FakeEmbeddingModel`),cf(),bT(460,` is the fake model for `),Aa(461,`a`,26),bT(462,`embedding calls`),cf(),bT(463,`: a real `),Aa(464,`code`),bT(465,`EmbeddingModel`),cf(),bT(466,`, which answers each provider request with the next of the answers you give it, and records the request. It makes up no vectors: an answer has one for each value of the request.`),cf(),Aa(467,`app-copy-button`,15)(468,`span`,16),bT(469),LT(470,`extension`),Wa(471,`app-tabs`,null,7),cf(),Aa(473,`pre`)(474,`code`,13),bT(475,`
import { Test } from '@nestjs/testing';
import { AiModule } from '@nestjs/ai';
import { FakeEmbeddingModel, providerError } from '@nestjs/ai/testing';
import { ProductsRepository } from './products.repository';
import { SearchService } from './search.service';

describe('SearchService', () => {
  const products = { saveEmbeddings: vi.fn(), findNearest: vi.fn() };

  async function createSearch(model: FakeEmbeddingModel) {
    const moduleRef = await Test.createTestingModule({
      imports: [
        AiModule.forRoot({
          embeddingModels: { default: model },
          embeddingDefaults: {
            retry: { attempts: 2, backoff: { delay: 0 } },
          },
        }),
      ],
      providers: [
        SearchService,
        { provide: ProductsRepository, useValue: products },
      ],
    }).compile();
    return moduleRef.get(SearchService);
  }

  it('finds the products nearest to the search', async () => {
    const model = new FakeEmbeddingModel([{ embeddings: [[0.1, 0.2]] }]);
    const search = await createSearch(model);

    await search.search("my cat won't eat");

    expect(model.lastCall?.values).toEqual(["my cat won't eat"]);
    expect(products.findNearest).toHaveBeenCalledWith([0.1, 0.2], 10);
  });

  it('sends a failed request again, and only that one', async () => {
    const model = new FakeEmbeddingModel(
      [{ embeddings: [[1]] }, providerError(429), { embeddings: [[2]] }],
      { maxEmbeddingsPerCall: 1, supportsParallelCalls: false },
    );
    const search = await createSearch(model);
    const catalog = [
      { id: 'prd_1', description: 'Salmon pate' },
      { id: 'prd_2', description: 'Catnip mouse' },
    ];

    await search.index(catalog);

    expect(model.calls.map((call) => call.values)).toEqual([
      ['Salmon pate'],
      ['Catnip mouse'],
      ['Catnip mouse'],
    ]);
    expect(products.saveEmbeddings).toHaveBeenCalledWith(catalog, [[1], [2]]);
  });
});
`),cf()()(),Aa(476,`p`),bT(477,`The second argument says how the AI SDK splits values, as a provider's model does: here each value is a request of its own, and they are sent one at a time, so the test knows their order. It also takes `),Aa(478,`code`),bT(479,`provider`),cf(),bT(480,` and `),Aa(481,`code`),bT(482,`modelId`),cf(),bT(483,`. Without it, the model has no limit, and `),Aa(484,`code`),bT(485,`embedMany()`),cf(),bT(486,` makes one request.`),cf(),Aa(487,`table`)(488,`thead`)(489,`tr`)(490,`th`),bT(491,`Answer`),cf(),Aa(492,`th`),bT(493,`What the model does`),cf()()(),Aa(494,`tbody`)(495,`tr`)(496,`td`)(497,`code`),bT(498),cf()(),Aa(499,`td`),bT(500,`Answers with the vectors, one for each value of the request`),cf()(),Aa(501,`tr`)(502,`td`),bT(503,`An `),Aa(504,`code`),bT(505,`Error`),cf()(),Aa(506,`td`),bT(507,`Fails with it, as a provider's request does`),cf()(),Aa(508,`tr`)(509,`td`),bT(510,`A function of the call`),cf(),Aa(511,`td`),bT(512,`Answers with what it returns, any of the above, or a promise of it`),cf()()()(),Aa(513,`p`),bT(514,`An answer object also takes:`),cf(),Aa(515,`table`)(516,`thead`)(517,`tr`)(518,`th`),bT(519,`Option`),cf(),Aa(520,`th`),bT(521,`What it does`),cf()()(),Aa(522,`tbody`)(523,`tr`)(524,`td`)(525,`code`),bT(526,`usage`),cf()(),Aa(527,`td`),bT(528,`The tokens the answer reports: `),Aa(529,`code`),bT(530),cf(),bT(531,`, 10 per value by default`),cf()(),Aa(532,`tr`)(533,`td`)(534,`code`),bT(535,`delay`),cf()(),Aa(536,`td`),bT(537,`Milliseconds before it answers. The call's abort, and its timeout, cut it short`),cf()(),Aa(538,`tr`)(539,`td`)(540,`code`),bT(541,`warnings`),cf(),bT(542,`, `),Aa(543,`code`),bT(544,`providerMetadata`),cf(),bT(545,`, `),Aa(546,`code`),bT(547,`response`),cf()(),Aa(548,`td`),bT(549,`What the provider adds to its vectors`),cf()()()(),Aa(550,`p`),bT(551,`Given a function instead of a list, `),Aa(552,`code`),bT(553,`new FakeEmbeddingModel((call) => ...)`),cf(),bT(554,` answers every request with it, which suits a test that doesn't care how the values are split. `),Aa(555,`code`),bT(556,`reply(...answers)`),cf(),bT(557,` adds answers after the ones not used yet, and `),Aa(558,`code`),bT(559,`fakeEmbeddingModel(...answers)`),cf(),bT(560,` is `),Aa(561,`code`),bT(562,`new FakeEmbeddingModel(answers)`),cf(),bT(563,`. A request it has no answer left for fails: `),Aa(564,`code`),bT(565,`FakeEmbeddingModel: no answer left for call 3. Give it more answers.`),cf()(),Aa(566,`p`)(567,`code`),bT(568,`calls`),cf(),bT(569,` lists what the model received, each with its `),Aa(570,`code`),bT(571,`values`),cf(),bT(572,` and its `),Aa(573,`code`),bT(574,`options`),cf(),bT(575,`, the AI SDK's provider-level call options such as `),Aa(576,`code`),bT(577,`abortSignal`),cf(),bT(578,`, `),Aa(579,`code`),bT(580,`headers`),cf(),bT(581,` and `),Aa(582,`code`),bT(583,`providerOptions`),cf(),bT(584,`, and `),Aa(585,`code`),bT(586,`lastCall`),cf(),bT(587,` is the last one.`),cf(),Aa(588,`p`)(589,`code`),bT(590,`overrideEmbeddingModels()`),cf(),bT(591,` does for embedding models what `),Aa(592,`code`),bT(593,`overrideModels()`),cf(),bT(594,` does for language models: it puts fake models in place of the application's own, by name, and keeps the rest of their definitions, their settings and pricing. A name the module doesn't configure fails when the testing module compiles. The models `),Aa(595,`code`),bT(596,`@InjectEmbeddingModel()`),cf(),bT(597,` injects are replaced too:`),cf(),Aa(598,`app-copy-button`,15)(599,`span`,16),bT(600),LT(601,`extension`),Wa(602,`app-tabs`,null,8),cf(),Aa(604,`pre`)(605,`code`,13),bT(606,`
import { Test } from '@nestjs/testing';
import {
  FakeEmbeddingModel,
  overrideEmbeddingModels,
} from '@nestjs/ai/testing';
import { AppModule } from '../src/app.module';

const model = new FakeEmbeddingModel(({ values }) => ({
  embeddings: values.map(() => [0.1, 0.2]),
}));

const moduleRef = await overrideEmbeddingModels(
  Test.createTestingModule({ imports: [AppModule] }),
  { default: model },
).compile();
`),cf()()(),Aa(607,`p`),bT(608,`To replace language models in the same test, pass what `),Aa(609,`code`),bT(610,`overrideEmbeddingModels()`),cf(),bT(611,` returns to `),Aa(612,`code`),bT(613,`overrideModels()`),cf(),bT(614,`.`),cf()(),Aa(615,`a`,27),Wa(616,`i`,28),Aa(617,`span`),bT(618,`Edit on GitHub`),cf()()()),c&2){let y=tT(270),k=tT(297),A=tT(321),T=tT(349),I=tT(394),M=tT(445),j=tT(472),C=tT(603);zC(46),Ky(``,`{`,` text `,`}`),zC(6),Ky(``,`{`,` toolCalls `,`}`),zC(10),Ky(``,`{`,``,`}`),zC(14),Ky(``,`{`,` object `,`}`),zC(92),Ky(`providerError(status, `,`{`,` message, retryAfter `,`}`,`)`),zC(99),hf(` `,jT(268,24,`support/triage.service.spec`,y.isJsActive),`
`),zC(27),hf(` `,jT(295,27,`support/replies.service.spec`,k.isJsActive),`
`),zC(24),hf(` `,jT(319,30,`test/assistant.e2e-spec`,A.isJsActive),`
`),zC(28),hf(` `,jT(347,33,`assistant/assistant.tools.spec`,T.isJsActive),`
`),zC(45),hf(` `,jT(392,36,`refunds/refund.tools.spec`,I.isJsActive),`
`),zC(21),Ky(``,`{`,` text: 'Your order', streamError: providerError(500) `,`}`),zC(30),hf(` `,jT(443,39,`refunds/refund-request.workflow.spec`,M.isJsActive),`
`),zC(27),hf(` `,jT(470,42,`catalog/search.service.spec`,j.isJsActive),`
`),zC(29),Ky(``,`{`,` embeddings `,`}`),zC(32),Ky(``,`{`,` tokens `,`}`),zC(70),hf(` `,jT(601,45,`test/search.e2e-spec`,C.isJsActive),`
`)}},dependencies:[Lt,ln,u,Jc,g],encapsulation:2})}return s})();var Be=[{path:``,redirectTo:`overview`,pathMatch:`full`},{path:`overview`,component:O,data:{title:`AI - Overview`}},{path:`models`,component:P,data:{title:`AI - Models`}},{path:`tools`,component:F,data:{title:`AI - Tools`}},{path:`agents`,component:_,data:{title:`AI - Agents`}},{path:`embeddings`,component:B,data:{title:`AI - Embeddings`}},{path:`testing`,component:D,data:{title:`AI - Testing`}}];export{Be as AI_ROUTES};