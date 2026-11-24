import { shade } from "@/lib/shade"
import { cn } from "@/lib/utils"

/** Plain text, one file to a drawing. */
const files = import.meta.glob<string>("../art/*.txt", {
  query: "?raw",
  import: "default",
  eager: true,
})

interface DrawingProps {
  /** A file in `src/art`, without its extension. */
  name: string
  /** What it shows. Leave it out where the words beside it already say. */
  label?: string
  className?: string
}

/** A drawing in characters. Its parent must be a container. */
export function Drawing({ name, label, className }: DrawingProps) {
  const text = files[`../art/${name}.txt`]?.trimEnd()
  if (!text) throw new Error(`No drawing named "${name}".`)
  const cols = Math.max(...text.split("\n").map((line) => line.length))
  return (
    <pre
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("drawing", className)}
      style={{ "--cols": cols } as React.CSSProperties}
    >
      {shade(text).map((run, i) =>
        run.shade < 0 ? (
          run.text
        ) : (
          <i key={i} className={`s${run.shade}`}>
            {run.text}
          </i>
        )
      )}
    </pre>
  )
}
