import { getCollection, type CollectionEntry } from "astro:content"

export type Project = CollectionEntry<"projects">

/** Every project, in the order they're shown. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection("projects")
  return projects.sort((a, b) => a.data.order - b.data.order)
}

export function projectPath(project: Project) {
  return `/projects/${project.id}/`
}
