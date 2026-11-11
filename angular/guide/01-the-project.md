---
title: "The project: Instagram in Angular"
sidebar_position: 1
mdx:
  format: md
tags: [guide, required]
---

**Required reading.** Start here.

## The exercise

> Replace the vanilla frontend with a component-based architecture using Angular. On top of that, build a profile page component alongside the existing feed, implement a comments section for each post, keep strictly to the CSS layouts defined earlier, and consume the NestJS API endpoints with proper state management.

In practice:

- **Same look.** The feed you built in the HTML & SCSS stage is the design. Your Angular version must look the same, using your SCSS and our conventions.
- **Components.** The page is split into components that each do one job (see [Smart and presentational components](./02-smart-and-presentational.md)).
- **Two pages.** The feed (`/`) and a profile page (`/profile/:username`), with routing between them.
- **Comments.** Every post has a comments section: show comments and add a new one with a form.
- **Real data.** Posts, comments and profiles come from the NestJS API you built.
- **NgRx Store.** All data goes through the store. **No component calls `HttpClient` or an API service directly. Only effects do.**
- **PrimeNG** for ready-made UI components (buttons, dialogs, avatars…), styled to match our design.

## The four weeks

The project is built in layers. Each week ends with a **mini boss**: a code review with your trainer, where you walk through what you built and explain your choices.

| Week | What you build | Read and watch |
|---|---|---|
| **1. Components** | Presentational components for the feed (post card, header, actions, comments list) with `input()` and `output()`. A container component feeds them with **mock data**. Routing for feed and profile. Write the API service, but don't call it yet. | Modules 1–9 of the reading, [the component tree](./03-instagram-component-tree.md) |
| **2. Store: posts** | Together with your trainer: the posts slice (actions, reducer, selectors, effect). The effect calls the API service. The container switches from mock data to the store, and the presentational components don't change at all. | Modules 10–13, [Store data flow](./04-store-data-flow.md) |
| **3. On your own** | The comments slice and the profile slice, built alone using the posts slice as the example. PrimeNG components, styled to the design. | [PrimeNG](./06-primeng-styled-mode.md), the offline PrimeNG docs |
| **4. Polish** | Loading and error states, empty states, edge cases, code review fixes. Demo. | |

## Why mock data first?

In week 1 you only think about components: how to split the page, what each component receives and what it emits. In week 2 you only think about state. Because presentational components only get data through inputs, connecting the store changes **one line per container**, from the mock array to `store.selectSignal(...)`. If that change ripples into your presentational components, they weren't presentational enough.

## Where to find things

| What | Where |
|---|---|
| Reading (13 modules) | `angular/reading` |
| Quizzes, one per topic | `angular/quizzes` |
| Videos | `angular/videos.md` |
| RxJS playgrounds | `angular/games` |
| Full docs, offline: Angular, NgRx, PrimeNG, NestJS | `documentation` (run `node serve.mjs angular`) |
| Your team's own rules | Your team's folder, e.g. `tavor` |
