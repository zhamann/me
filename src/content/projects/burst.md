---
name: Burst
summary: "An iOS writing coach for X, Reddit, LinkedIn, and Medium. It scored the draft you wrote and returned prioritized feedback instead of writing the post for you."
order: 9
status: retired
tags: [React Native, Expo, "Next.js"]
image: ../../assets/projects/burst.jpg
imageAlt: "Burst’s Open Graph image, showing the app’s screens."
drawing: "A burst of rays."
---

Burst was an iOS writing coach for X, Reddit, LinkedIn, and Medium. It guided users from a rough idea to a draft and returned structured feedback on the draft they wrote.

## Approach

Most AI writing tools generate the post. Burst deliberately didn't. It scored the user's own draft and limited feedback to a few prioritized suggestions, so the writing stayed theirs.

- Guided questions to narrow an idea into a platform-specific draft
- Draft review covering clarity, structure, tone, and platform fit
- Separate guidance for each supported platform

## Stack

- Expo and React Native with Expo Router, Sign in with Apple, secure storage, and RevenueCat
- Next.js for the API and public site
- Vercel AI SDK with OpenAI for schema-validated feedback
- PostHog LLM tracing and Upstash Redis
