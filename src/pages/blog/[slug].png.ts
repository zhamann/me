import { readFile } from "node:fs/promises"
import { createRequire } from "node:module"
import type { APIRoute } from "astro"
import { createElement as h } from "react"
import satori from "satori"
import sharp from "sharp"

import { getPosts, type Post } from "@/lib/posts"
import { site } from "@/lib/site"

const require = createRequire(import.meta.url)

// Satori can't read woff2, the only format the site's variable font comes in.
function plexSans(weight: 400 | 600) {
  return readFile(
    require.resolve(
      `@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-${weight}-normal.woff`
    )
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }))
}

/** A post's link preview: its title, ending in the site's amber cursor. */
export const GET: APIRoute<{ post: Post }> = async ({ props }) => {
  const [regular, semibold] = await Promise.all([plexSans(400), plexSans(600)])
  const words = props.post.data.title.split(" ")
  const last = words.pop()
  const word = (text?: string) =>
    h("span", { style: { marginRight: 24 } }, text)

  const svg = await satori(
    h(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#f4f4f3",
          fontFamily: "IBM Plex Sans",
        },
      },
      h(
        "div",
        {
          style: {
            display: "flex",
            flexWrap: "wrap",
            fontSize: 92,
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: "-0.035em",
          },
        },
        ...words.map(word),
        // The cursor stays with the last word, so it's never alone on a line.
        h(
          "div",
          { style: { display: "flex", alignItems: "center" } },
          word(last),
          h("div", { style: { width: 44, height: 84, background: "#ffb86b" } })
        )
      ),
      h("div", { style: { fontSize: 36, color: "#a3a3a8" } }, site.name)
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "IBM Plex Sans", data: regular, weight: 400 },
        { name: "IBM Plex Sans", data: semibold, weight: 600 },
      ],
    }
  )

  const png = await sharp(Buffer.from(svg)).png().toBuffer()
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  })
}
