---
name: Beka
summary: "A self-hosted finance app built for AI. It works out paychecks the way payroll does, tracks spending and recurring payments from CSV imports, and gives an agent the data over MCP instead of access to the bank."
order: 3
status: current
tags: [Astro, SQLite, MCP]
links:
  - label: Source on GitHub
    href: https://github.com/zhamann/beka
image: ../../assets/projects/beka.jpg
imageAlt: "Beka’s Dashboard on a laptop, with this month’s spending so far drawn against a usual month, and a phone showing a typical month’s income flowing into recurring payments, spending, and what’s left over."
drawing: "A half-shekel coin with an arch over two bars."
---

[Beka](https://github.com/zhamann/beka) is a self-hosted finance app built for AI, open source under the AGPL. It shows a household's financial picture as it stands today, including what each paycheck deposits, what we spend by category each month, recurring payments, accounts and net worth, loans ranked by interest rate, and which credit card earns the most where. An AI agent reads and updates the same data over MCP.

## Why I built it

I wanted personalized financial advice from AI, without connecting my bank accounts to ChatGPT or Claude to get it.

So I replaced my budgeting app with Beka. My data stays on my home server, and my agent reads it over MCP. Beka shows where things stand and leaves planning to the agent, so a question like "can we afford a house?" gets an answer grounded in our actual paychecks, spending, and debts.

## Built for an agent

- Settings creates agent keys. Each key is shown once, stored only as a hash, reaches nothing but the `/mcp` endpoint, and can be revoked.
- The agent starts from an overview of the month and every reminder about out-of-date data, like an old balance or a month of transactions not imported yet, so it knows what to check before relying on a number.
- Tools return what the app computes, including paychecks, 12-month spending averages, recurring payments, debts ranked by rate, and the best card for each category.
- For anything else, the agent can run SQL. Each query runs in its own process on a read-only connection, with an authorizer that allows only reads, a five-second time limit, and a 500-row cap.
- The agent's write tools are generated from the same operations behind the app's forms, so it can make any change I can, and the change log marks each one "Agent".

## Paychecks

Beka works out each paycheck the way payroll does, covering federal withholding from the Form W-4, Social Security, Medicare, state and local tax, pre-tax deductions like a 401(k) or HSA, employer contributions, and deposit splits. A calendar of every payday this year checks each expected deposit against the transactions I've imported. Each January's release adds that year's federal tax tables.

## Spending and recurring payments

- Transactions come in as a CSV, never through a bank login. The Import page writes instructions for the AI that prepares each upload, including how I've categorized each merchant so far.
- A preview flags problems and rows categorized differently than usual before anything is saved, transactions already imported are skipped, and any import can be undone.
- Beka spots merchants charging on a steady schedule and asks once whether each is recurring. Bills that swing count at their yearly average, and Beka asks when an expected charge stops showing up.
- The Dashboard draws this month's spending day by day against a usual month, and where a typical month goes, as a flow from income into recurring payments, spending, and what's left over.

## Privacy and backups

- Without a password, Beka answers only at addresses that can't belong to another site, like `localhost`, `.local`, or `.ts.net`, so a web page I visit can't use DNS rebinding to read my data. With a household password, each device signs in once.
- It copies its database once a day and keeps 30 days of backups. A restore first backs up the data it replaces, so I can switch back.
- Migrations are versioned in SQLite and applied on startup, so upgrading is a `docker compose pull`.

## Release pipeline

- GitHub Actions runs lint, format checks, type-checking, 130+ Vitest tests, a production build, and a Docker build on every pull request.
- Pushing a version tag reruns those checks and publishes `linux/amd64` and `linux/arm64` images to GitHub Container Registry.

## Stack

- Astro with server rendering, React islands, and Astro Actions
- SQLite through Node's built-in `node:sqlite`, with WAL mode and versioned migrations
- A hand-written MCP server over JSON-RPC, with no SDK
- Recharts, Tailwind CSS, and shadcn/ui
- Vitest, GitHub Actions, and Docker
