---
name: RaceThere
summary: "A U.S. running-race directory with 1,000+ weekly users. It has location-first search, an indexable page for every race, an AI-assisted content pipeline, and an MCP server so assistants can answer race questions."
order: 2
status: current
tags: ["Next.js", Postgres, OpenRouter]
links:
  - label: racethere.com
    href: https://racethere.com
image: ../../assets/projects/racethere.jpg
imageAlt: "RaceThere’s race directory with location and distance filters, upcoming events, and the orange bib logo."
drawing: "A race bib."
---

[RaceThere](https://racethere.com) is a U.S. running-race directory serving 1,000+ weekly users. It started from a frustration. Searching a location on existing directories rarely returned races in and around that area, and most of those sites look like they haven't been updated in years. RaceThere is built to fix both, with location-first search across surrounding areas in a fast, modern interface.

## Search

- Location search that includes races in surrounding areas
- Instant filters for distance, date, and race type in a desktop sidebar and a mobile bottom sheet
- Date options that show the number of weeks available to train
- Race cards with date, location, matching distances, entry fee, and event logo
- Suggestions to loosen filters when a search returns no results

## SEO as the growth strategy

Search engines bring in most of RaceThere's traffic, and much of the product is designed around that.

- Filter state lives in the URL, so each location and filter combination becomes its own indexable results page instead of one directory homepage.
- Every race has an indexable event page with distances, registration details, location, and a link to the organizer, backed by structured data and state-level sitemaps.
- An AI-assisted pipeline running on durable workflows generates race guides at scale.
- 16 calculators for pace, finish time, training paces, heart-rate zones, tapering, VO₂ max, calories, and elevation bring in runners searching while they plan their training.

## MCP server

RaceThere also runs an MCP server, so AI assistants like Claude can answer race questions with live RaceThere data. It extends the SEO strategy to a new channel. As more runners ask an assistant where to race instead of searching for it, RaceThere is the source behind the answer.

- `search_races` finds races by city or ZIP and radius, distance or custom distance range, date window, trail or virtual, and race name.
- `get_race` returns one race's events, start times, current fees, registration status, and the organizer's description.
- `predict_race_time` estimates finish times and paces at other distances from a recent result.

In clients that support MCP Apps, results render as RaceThere race cards. Every result links back to RaceThere with tagged URLs, so assistant traffic can be measured separately from search, and each search returns a link to the matching location results page on the site.

## Architecture

Race listings and event details come from RunSignup, with server-side caching and server-rendered results so every page is fully crawlable. Guide content is stored in Postgres, and PostHog tracks searches, filter changes, event views, and registration clicks.

## Operations

RaceThere is self-hosted on a VPS, so monitoring and recovery are part of the product.

- A watchdog checks every scheduled job, the public pages, and backups every 15 minutes, and reports failures explicitly instead of letting them go quiet.
- Postgres is backed up daily, with 30 days of off-site copies in a private, access-restricted bucket.
- Vitest covers search, location parsing, running calculations, the RunSignup integration, and MCP analytics.
- GitHub Actions validates the location dataset, generated calculator tools, and the guide pipeline before changes merge, and builds the production Docker image on deploy.

## Stack

- Next.js, React, tRPC, and TanStack Query
- Postgres with Drizzle ORM
- Vercel AI SDK with OpenRouter and durable workflows
- RunSignup and PostHog
- Model Context Protocol server with MCP Apps race cards
