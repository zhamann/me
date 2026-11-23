---
name: Coached
summary: "A multi-tenant SaaS platform for fitness coaches, with organization-scoped roles, reusable program and check-in templates, and separate portals for coaches and clients."
order: 7
status: retired
tags: ["Next.js", Postgres, TypeScript]
image: ../../assets/projects/coached.jpg
imageAlt: "Coached’s Open Graph image, showing the platform’s screens."
drawing: "A stopwatch."
---

Coached was a multi-tenant SaaS platform for fitness and wellness coaches managing remote clients. It consolidated client management, training programs, nutrition plans, check-ins, progress tracking, and community into one system, with separate portals for coaches and clients.

## Features

Everything in Coached started as a template. A coach built a training program, nutrition plan, or check-in form once and assigned it to any number of clients, which kept onboarding fast and let a practice grow without rebuilding the same work for each new client. Every assignment stayed customizable, so coaches could still tailor programs and plans to each client's goals.

Clients had their own portal for workouts, nutrition, check-ins, and progress photos, so the coach's program and the client's day-to-day lived in the same place. Private community feeds and automatic badges for check-in streaks and completed workouts made consistency part of the product instead of something coaches had to chase by hand. Lead tracking and invitation flows covered the step before that, turning prospects into clients.

## Architecture

Each coach's business and client data had to stay completely separate, so all data was scoped to organizations, with separate permissions for coaches, clients, and administrators. Authorization was enforced in protected tRPC procedures, keeping ownership and role checks alongside the business logic. Stripe handled subscriptions and entitlements, and S3-compatible storage handled uploaded media.

## Stack

- Next.js App Router, tRPC, and TanStack Query
- Postgres with Drizzle ORM
- Better Auth, Stripe, and S3-compatible storage
