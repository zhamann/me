import { getCollection, type CollectionEntry } from "astro:content"

export type Post = CollectionEntry<"posts">

/** Every post, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts")
  return posts.sort(
    (a, b) => b.data.published.getTime() - a.data.published.getTime()
  )
}

export function postPath(post: Post) {
  return `/blog/${post.id}/`
}
