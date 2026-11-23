import rss from "@astrojs/rss"
import type { APIRoute } from "astro"

import { getPosts, postPath } from "@/lib/posts"
import { site } from "@/lib/site"

export const GET: APIRoute = async () => {
  const posts = await getPosts()
  return rss({
    title: site.name,
    description: site.blog,
    site: site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.published,
      link: postPath(post),
    })),
  })
}
