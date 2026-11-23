---
name: Manna
summary: "An open-source, self-hosted recipe app with a color for every section, recipe import from a link, a step-by-step cook mode, and a multi-arch Docker image published from tagged releases."
order: 4
status: current
tags: [Astro, SQLite, Docker]
links:
  - label: Source on GitHub
    href: https://github.com/zhamann/manna
image: ../../assets/projects/manna.jpg
imageAlt: "Manna’s banana bread recipe on a laptop beside its sidebar of color-coded recipe sections, and the same recipe in cook mode on a phone."
drawing: "Flakes falling into a full bowl."
---

[Manna](https://github.com/zhamann/manna) is a simple, fast, self-hosted recipe app, open source under the AGPL. Recipes are organized into color-coded sections in a sidebar, can be imported from a link, and cook mode walks through them step by step on a phone, tablet, or desktop. It runs as a single Docker container with no accounts, no external services, and one SQLite file.

## Why I built it

I built Manna for three reasons.

- I didn't want to pay for an existing recipe app.
- I had old devices lying around the house that I wanted to turn into a home server and a home control panel.
- I wanted an open-source project of my own that I could keep contributing to.

Those reasons shaped the design. Running on spare hardware means a small footprint, with one container, one SQLite file, and images for both `amd64` and `arm64`. Self-hosting means backups, upgrades, and recovery have to work without me watching them. Being open source means anyone else can run it the same way with two commands.

## Cook mode

Cook mode is built for a phone propped up on the counter.

- Every step sits in one scrolling list over a gradient in the section's color, with the current step centered, like song lyrics, so the next step is always in view.
- Tap a step to jump to it, or move with Previous/Next, the arrow keys, or space.
- Ingredients sit beside the steps on wide screens and in a drawer on phones.
- Each device remembers its place in a recipe, and a Keep awake button holds the screen on while cooking.

## Recipes

- Each section gets one of eight colors, and its recipe pages, cook mode, and the sidebar beside them take it on.
- The home page shows the recipes opened most recently and the newest ones added. If cook mode was left partway through a recipe, it offers to pick up at that step.
- Recipes hold a description, servings, prep and cook times, a source link, ingredients, steps, and notes.
- The editor gives each ingredient and step its own row. Enter adds the next row, and pasting a whole list splits it into rows.
- Search matches recipes by title or section, and on phones the sidebar opens and closes with a swipe.

## Import from a link

Pasting a recipe page's address fills in the New recipe form to check before saving.

- Manna reads the schema.org recipe data most recipe sites publish for search engines.
- Importing makes the server fetch a page, so it connects only to public addresses. It refuses `localhost`, private networks, and link-local addresses like cloud metadata services, including through redirects and DNS.
- Some big sites turn away requests that don't come from a browser, and some only add their recipe once the page's scripts run. For those, Manna can hand the page to a Firecrawl API, either Firecrawl Local on the same server or Firecrawl Cloud, to load it in a browser and read the recipe from the result.

## Backups

A self-hosted app is only as good as its recovery story, so backups are part of the product rather than an afterthought.

- Settings exports the whole library as JSON, and a script can fetch the same backup over HTTP.
- Restoring replaces the library and keeps every id, so existing links keep working.
- Backups are capped at 16 MB, and the app refuses any change that would grow the library past what a restore accepts, so every export stays restorable.
- Migrations are versioned in SQLite and applied on startup, so upgrading is a `docker compose pull`.

## Release pipeline

- GitHub Actions runs lint, format checks, type-checking, Vitest, a production build, and a Docker build on every pull request.
- Pushing a version tag reruns those checks, confirms the tag matches `package.json`, and publishes `linux/amd64` and `linux/arm64` images to GitHub Container Registry. Prerelease tags never move `latest`, and each release publishes GitHub release notes listing the pull requests merged since the last one.
- Because the app has no accounts, it sends security headers that block framing, so another site can't trick a click into a restore or delete.

## Stack

- Astro with server rendering, React islands, and Astro Actions
- SQLite through Node's built-in `node:sqlite`, with WAL mode and versioned migrations
- Tailwind CSS and shadcn/ui
- Vitest, GitHub Actions, and Docker
