---
name: Kilo
summary: "An AI strength coach you text. It writes the program, sends each day’s workout over iMessage, and remembers your training, combining structured records with source-linked conversation history. In beta."
order: 1
status: current
tags: ["Next.js", Astro, Convex]
links:
  - label: textkilo.com
    href: https://textkilo.com
image: ../../assets/projects/kilo.jpg
imageAlt: "Kilo’s workout logger and iMessage coaching conversation shown on two phones."
drawing: "A loaded barbell."
---

[Kilo](https://textkilo.com) is an AI coaching agent for strength and hybrid athletes, delivered over iMessage. It builds training programs, sends daily workouts, records logged sessions, and adjusts the plan based on results. Kilo is currently in beta, with users onboarded in small groups.

## Coaching workflow

Kilo is iMessage-first because that's how athletes already communicate with a coach, and texting is the most direct, native way to stay in touch. The web app handles only signup, account management, and workout logging, the tasks that need structure.

The workflow is built around the work between sessions, where most training plans fall apart.

- Onboarding over text captures goals, schedule, equipment, and constraints, so the first program fits the athlete's actual life.
- Workout messages put each day's session in front of the athlete on training days.
- Logging by text or through the web logger turns every session into data the next decision can use.
- Check-ins and weekly reviews compare the plan with what actually happened and set the next week's direction.

## Memory

Memory is what makes Kilo feel like a coach. A good coach remembers the rough training block last month, the knee that limits squat depth, and the goal behind the current program, and every recommendation accounts for them. Kilo draws on structured records of the current program, goals, sessions, and commitments, along with recent messages and past coaching conversations. Users don't have to re-explain their situation, advice reflects their full training history instead of a single message, and the coaching gets more specific the longer someone trains with it.

## Reliability

Kilo acts on what athletes text it, so a dropped or duplicated message means a missing workout log or a check-in counted twice.

- Messages that log workouts or resolve check-ins are processed with idempotency keys, and failed side effects are recorded and retried instead of silently lost.
- Scheduled jobs deliver workouts and check-ins, close out inactive coaching conversations, and consolidate observations into long-term memory every day.
- 30+ Vitest suites cover the backend, including the agent's tools, context assembly, access rules, and iMessage payload handling.
- GitHub Actions runs type-checking, linting, and the full test suite before every backend deploy, and nothing ships if a step fails.

## Stack

- Turborepo with an Astro marketing site and a Next.js web app on a shared Convex backend
- Coaching agent built with the Vercel AI SDK and Convex's agent tooling
- iMessage delivery through SendBlue and web authentication through Clerk
- Scheduled jobs for workout delivery, check-ins, and weekly reviews
