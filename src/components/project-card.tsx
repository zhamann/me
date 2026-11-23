import { Drawing } from "@/components/drawing"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  id: string
  href: string
  name: string
  summary: string
  tags: string[]
  /** Puts the words beside the drawing on wide screens. */
  wide?: boolean
}

/** A project: its drawing, and a line or two about it. */
export function ProjectCard({
  id,
  href,
  name,
  summary,
  tags,
  wide = false,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group block h-full rounded-4xl outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
    >
      <Card
        className={cn(
          "h-full gap-0 py-0 shadow-none transition-shadow group-hover:ring-ink/40",
          wide && "md:grid md:grid-cols-[minmax(0,8fr)_minmax(0,5fr)]"
        )}
      >
        <div
          className={cn(
            "@container grid h-68 place-items-center overflow-hidden px-4 sm:h-72",
            wide && "md:h-80"
          )}
          style={
            {
              viewTransitionName: `drawing-${id}`,
              "--drawing-size": wide ? "0.7rem" : undefined,
            } as React.CSSProperties
          }
        >
          <Drawing name={id} />
        </div>
        <div
          className={cn(
            "flex flex-1 flex-col gap-5 pb-6",
            wide && "md:justify-center md:py-8"
          )}
        >
          <CardHeader>
            <CardTitle className="text-2xl">
              <h3 className="type-title">{name}</h3>
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {summary}
            </CardDescription>
          </CardHeader>
          <CardFooter className={cn("flex-wrap gap-1.5", !wide && "mt-auto")}>
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </div>
      </Card>
    </a>
  )
}
