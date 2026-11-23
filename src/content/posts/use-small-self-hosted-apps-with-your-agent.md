---
title: You should use small, self-hosted apps with your agent
summary: What I learned after I got tired of explaining my finances to AI, and how you can get started.
published: 2026-11-23
---

I'm planning to move, and I wanted AI to help me figure out how much to save. Before it could give me a useful answer, I had to plug in all of my financial information. Then the next time I wanted to do some financial planning, I had to plug it all in again.

Most of that information was already in my budgeting app. I was on the free tier, and it had all of the reporting I wanted, but I couldn't export my data or connect an agent to it in any way. So I kept doing it myself, and it got frustrating.

## What changed when my agent could see everything

I didn't find anything that already existed that would fix this, so I built [Beka](/projects/beka/) with the help of an agent. It took roughly three days from nothing, and upkeep has been very minimal. Now my agent can look at my complete financial situation before it answers a question. It helped me create an 18-month budgeting plan for the move, and we went through different scenarios on the best way to prepare for it. I didn't have to explain my finances first.

That's when I realized how much value there is in small, self-hosted apps that put the agent first. A lot of people are stuck trying to get their existing solutions to work with their agent. I think they'd get more out of an app that was made for it.

It changed how I think about who an app is for. I expect that a large majority of the time I'll never need to open Beka. I'll ask my agent to pull up some data or update it, and that's the whole interaction. Once you assume that, the screens matter a lot less, and I care more about how straightforward the app is for my agent to use.

## Why small works

A micro app isn't overly complex or confusing to the agent. The work stays scoped to a specific problem and solution, and that's how agents thrive.

It also means the app doesn't have to be a perfect fit when you find it. If you can get to the source code, your agent can strip out the pieces you don't want and add the features you think are missing.

## Why I host them myself

I want my agents to be able to get to the code and the data. It helps when an app has tools made for an agent, but even that isn't required. My recipe app, [Manna](/projects/manna/), doesn't have any, and an agent can still update its data much more easily than it could in a different recipe app.

The other reason is privacy. My finances are important private information, and I'd rather keep them on my own server. A model still sees what my agent reads to answer a question, but I choose what it can reach.

## How to get started

1. **Pick the thing you keep explaining.** If you give AI the same information every time a subject comes up, that information belongs in an app your agent can read. Start with one subject.
2. **Look before you build.** I'm not telling you to go build your own Beka. Search for an open-source, self-hosted app that solves that one problem. If you come up empty, an agent can replicate almost any software nearly perfectly at this point.
3. **Check what your agent can reach.** Before you commit to an app, find out whether your agent can read the data, update it, and get to the source code. An MCP server is the easiest to work with, but an API or a database you control can be enough.
4. **Have your agent set it up.** Point it at the app's setup instructions and let it get things running on a computer you own. For anything private, keep the app off the public internet, and turn on backups before your agent starts changing data.
5. **Keep things small.** When you want help with a new subject, find another small app instead of stretching this one to cover it. Once an app is trying to solve several problems, it starts to get confusing for the agent again.

## Start with one app

All I wanted was a budgeting plan, and I was tired of explaining my finances to get one. I ended up with an app I expect to rarely open and an agent that can look at everything before it answers me. You don't have to change all of the software you use to get that. Set up one small app, and see what you start asking once your agent has the full picture.
