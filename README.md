# Hafifa

The training app for new recruits in the fullstack department. Trainees go through the stages of
the stack while building one continuous project, an Instagram-style app. Each stage ends with a
milestone that their trainer code-reviews.

## Quick start

You need Node 20 and a local MongoDB (`mongodb://localhost:27017`).

```bash
npm install      # also builds packages/shared
npm run seed     # sample users and progress
npm start        # site on http://localhost:4300, API on http://localhost:3001/api
```

| Command              | What it does                                               |
| -------------------- | ---------------------------------------------------------- |
| `npm start`          | Runs the site and the API with live reload                 |
| `npm run start:site` | Runs only the site (no database needed)                    |
| `npm run seed`       | Resets the sample users and progress in the local database |
| `npm test`           | Runs the unit tests                                        |
| `npm run check`      | Format check, lint, typecheck, tests and build (pre-MR)    |
| `npm run format`     | Formats all files with Prettier                            |

## Repository layout

```text
apps/
  site/                  Docusaurus site: the training content and its components
    docs/stages/         One folder per stage (this is where content goes)
    docs/authoring/      Guide for content writers (rendered in the site)
    src/components/      Reusable components for .mdx pages
    src/theme/           Docusaurus overrides (keep these small)
  api/                   NestJS + MongoDB API: users and stage progress
packages/
  shared/                Stages, tracks and API types used by both the site and the API
deploy/                  nginx config
Dockerfile               Builds the site into an nginx image
```

## API

Everything is under `/api`. Until SAML is wired in, every request is made as `DEV_USERNAME`
(default `t_michalgo`). To act as someone else, e.g. a seeded trainee, send an
`x-dev-user: <username>` header. Configuration is in [apps/api/.env.example](apps/api/.env.example).

| Endpoint                                           | Who           | What                           |
| -------------------------------------------------- | ------------- | ------------------------------ |
| `GET users/me`                                     | anyone        | The logged-in user             |
| `PUT users/me/track`                               | anyone        | Choose your track              |
| `GET progress/me`                                  | trainee       | Your progress on every stage   |
| `POST progress/me/:stageId/start`                  | trainee       | Start a stage                  |
| `POST progress/me/:stageId/submit`                 | trainee       | Submit the milestone's MR link |
| `GET progress/trainees`                            | trainer, lead | Where each of your trainees is |
| `GET progress/trainees/:username`                  | trainer, lead | One trainee's progress         |
| `POST progress/trainees/:username/:stageId/review` | trainer, lead | Approve or request changes     |

A stage goes `in_progress → submitted → approved`, or `submitted → changes_requested` and back to
`submitted`. The next stage unlocks when the previous one is approved.

## Writing content

Start the site and open **Writing content** in the top bar. It explains the stage structure, shows
every component with its code, and covers tracks and media.

## Deployment

The site is static. The Docker image serves it with nginx on port 8080, and serves the media mount
(videos etc.) under `/media`. Mount the volume at `/mnt/media`.

```bash
docker build --build-arg REGISTRY=<artifactory-docker-remote> -t hafifa .
docker run -p 8080:8080 -v /path/to/media:/mnt/media:ro hafifa
```

### Closed network

- **npm**: point npm at Artifactory (`npm config set registry <artifactory-npm-remote>`). The
  lockfile's `registry.npmjs.org` URLs are swapped for the configured registry automatically.
- **No external resources at runtime**: search runs locally, fonts are system fonts, and media
  comes from the mount. Keep it that way: don't add CDNs, web fonts or external embeds.

See [CONTRIBUTING.md](CONTRIBUTING.md) for code conventions.
