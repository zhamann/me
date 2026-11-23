import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "*.md" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /** One or two sentences, for the home page and search engines. */
      summary: z.string(),
      order: z.number(),
      status: z.enum(["current", "retired"]),
      tags: z.array(z.string()),
      links: z
        .array(z.object({ label: z.string(), href: z.url() }))
        .default([]),
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** What the drawing in `src/art` shows. */
      drawing: z.string(),
    }),
})

export const collections = { projects }
