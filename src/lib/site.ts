/** The words on the site, kept apart from the markup that sets them. */

export const site = {
  name: "Zac Hamann",
  url: "https://zhamann.com",
  title: "Zac Hamann, full-stack software engineer",
  description:
    "Zac Hamann is a full-stack software engineer working in TypeScript, React, Next.js, SQL, and Azure, and the maker of RaceThere, Kilo, Beka, Manna, and Yehi.",
  role: "Full-stack software engineer",
  intro: [
    "I work at an investment advisory firm, where I went from intern to owner of the firm’s software platform in five years. I design, test, and run its internal and client-facing applications.",
    "After hours I ship my own products. They include a race directory with 1,000+ weekly users, a strength coach you text, and open-source tools for money, recipes, and video.",
  ],
  contact: {
    heading: "Ask me how any of it works.",
    text: "I’m happy to get into the details, whether that’s a design decision, a tool I picked, a bug you found, or something you’d like to build. Email is the best way to reach me.",
  },
  email: "hi@zhamann.com",
  github: "https://github.com/zhamann",
  linkedin: "https://www.linkedin.com/in/zhamann",
  artios: "https://artios.dev",
}

export interface Role {
  title: string
  period: string
  description: string
}

/** One employer or institution, with one or more roles, newest first. */
export interface Tenure {
  org: string
  place: string
  roles: Role[]
}

export const experience: Tenure[] = [
  {
    org: "Archford Capital Strategies",
    place: "Swansea, Illinois",
    roles: [
      {
        title: "Software Solutions Manager",
        period: "June 2026 to now",
        description:
          "Own architecture, development, and operations as the firm’s sole developer, including internal applications used by all 50 employees and client-facing applications serving about 300 clients. Ship releases through GitHub Actions with Vitest, type-check, and lint gates. Maintain monitoring and alerting, handle incident response, and run migrations against production client data on Azure. Partner with advisors and operations to prioritize work, and coordinate with outside vendors to scope and build integrations.",
      },
      {
        title: "Software Developer",
        period: "June 2023 to June 2026",
        description:
          "Led the move of the firm’s client portal, for sharing documents and managing entities, from a vendor-built SharePoint site to a custom Next.js application on Azure, replacing a paid platform and contributing to annual savings in the tens of thousands of dollars. Added RAG-based search and question answering to the portal for staff and clients. Built scheduled syncs and webhook processing for third-party integrations, with recovery from upstream failures, and developed portfolio management tools and internal applications in Next.js, React, and TypeScript on SQL data models I designed.",
      },
      {
        title: "Business Analyst",
        period: "June 2022 to June 2023",
        description:
          "Translated advisory and operations workflows into software requirements.",
      },
      {
        title: "Intern",
        period: "May 2021 to June 2022",
        description:
          "Supported internal technology, data, and process-improvement work.",
      },
    ],
  },
  {
    org: "Illinois Army National Guard",
    place: "Sparta, Illinois",
    roles: [
      {
        title: "Horizontal Construction Engineer, Team Leader",
        period: "July 2017 to July 2023",
        description:
          "Led a five-person team operating heavy equipment on horizontal construction projects, maintaining schedule and quality standards.",
      },
    ],
  },
]

export const education: Tenure[] = [
  {
    org: "University of Illinois at Urbana-Champaign",
    place: "Champaign, Illinois",
    roles: [
      {
        title: "B.S. in Econometrics and Quantitative Economics",
        period: "January 2019 to May 2022",
        description:
          "Bachelor of Science in Liberal Arts and Sciences, with coursework in econometrics, statistics, and quantitative analysis.",
      },
    ],
  },
  {
    org: "Project Management Institute",
    place: "Professional certifications",
    roles: [
      {
        title: "Project Management Professional (PMP)®",
        period: "November 2025",
        description:
          "Certification in planning and delivering projects across predictive, agile, and hybrid approaches.",
      },
      {
        title: "Certified Associate in Project Management (CAPM)®",
        period: "August 2024",
        description:
          "Foundational PMI certification in project management principles, earned before the PMP.",
      },
    ],
  },
]

export interface Skill {
  name: string
  /** A file in `src/icons`, without its extension. */
  icon: string
}

export const skills: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React Native", icon: "react-native" },
      { name: "Expo", icon: "expo" },
      { name: "Astro", icon: "astro" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "Postgres", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "NoSQL", icon: "mongodb" },
      { name: "Convex", icon: "convex" },
      { name: "SQL Server", icon: "sql-server" },
    ],
  },
]

/** Work that spans tools, with what it's done in. */
export const systems: { name: string; tools: string[] }[] = [
  {
    name: "Process automation",
    tools: ["Azure Functions", "Power Automate", "n8n"],
  },
  { name: "Identity and access", tools: ["Entra ID", "Clerk", "WorkOS"] },
  {
    name: "Cloud infrastructure",
    tools: ["Azure", "App Services", "Blob Storage", "Vercel"],
  },
  {
    name: "AI integration",
    tools: ["RAG", "AI SDK", "OpenRouter", "Replicate"],
  },
  { name: "Testing and CI", tools: ["Vitest", "GitHub Actions", "Docker"] },
  {
    name: "Production operations",
    tools: ["Monitoring", "Incident response", "Migrations", "Backups"],
  },
]
