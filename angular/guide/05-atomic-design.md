---
title: "Atomic design (optional)"
sidebar_position: 5
mdx:
  format: md
tags: [guide, optional]
---

**Optional.** Read this if your team organizes components with atomic design. If it doesn't, the split in [The component tree](./03-instagram-component-tree.md) is enough.

Atomic design sorts presentational components by size, from the smallest piece to a whole page:

| Level | What it is | Instagram examples |
|---|---|---|
| **Atom** | One element that can't be split further | avatar, like button, username link |
| **Molecule** | A few atoms that work together | post header (avatar + username + date), comment form (input + button) |
| **Organism** | A full section of the page | post card, comments section, profile header |
| **Template** | The layout of a page, with no real data | feed layout: top bar + column of posts |
| **Page** | The template filled with real data | the feed page container |

In Angular, atoms, molecules and organisms are presentational components. The page is the container that talks to the store.

## Folder example

```text
feed/
├── components/
│   ├── atoms/        avatar, like-button
│   ├── molecules/    post-header, comment-form
│   └── organisms/    post-card, comments-section
└── feed-page/
```

## Rules of thumb

- A component may use components from its own level or lower, never higher. An atom never contains a molecule.
- If you can't decide between two levels, pick the lower one and move it later. The level is a guide, not a law.
- Atoms are the most reused, so keep them the most generic: `app-avatar` takes an image and a size, not a whole `Post`.

## Read more

- [Atomic Design, chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) by Brad Frost, who came up with the idea. It's free to read online.
