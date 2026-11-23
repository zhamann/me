---
name: ChatAvatars
summary: "A multi-tenant platform for shared AI assistants, with per-organization prompts, model settings, PDF knowledge bases, and access controls."
order: 8
status: retired
tags: ["Next.js", Postgres]
image: ../../assets/projects/chatavatars.jpg
imageAlt: "ChatAvatars’ Open Graph image, showing the platform’s screens."
drawing: "A robot’s face."
---

ChatAvatars was a multi-tenant platform that let an organization build a shared set of AI assistants once, instead of every employee writing their own prompts and setup from scratch. Administrators configured each assistant's instructions, model settings, and PDF knowledge base, then controlled which members could access it.

## Architecture

Most of the engineering effort went into the platform around the chat interface, including organizations, roles, access control, billing, and per-organization configuration and documents. WorkOS managed authentication, organizations, roles, and plan-based entitlements, and Stripe handled billing.

## Stack

- Next.js, tRPC, and TanStack Query
- Neon Postgres with Drizzle ORM
- WorkOS AuthKit and Stripe
- Vercel AI SDK with OpenAI and PDF parsing for knowledge uploads
