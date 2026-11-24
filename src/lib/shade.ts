/** The characters set in lighter ink, from the darkest up. */
const SHADES = [".:", "-=", "+x", "oX"]

/** Splits a drawing wherever the strength of its ink changes. */
export function shade(text: string) {
  const runs: { shade: number; text: string }[] = []
  for (const char of text) {
    const last = runs.at(-1)
    const at = SHADES.findIndex((shade) => shade.includes(char))
    // Spaces and line breaks have no ink, so they join whatever is before them.
    if (last && (/\s/.test(char) || last.shade === at)) last.text += char
    else runs.push({ shade: at, text: char })
  }
  return runs
}
