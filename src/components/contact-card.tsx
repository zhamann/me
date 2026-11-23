import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

import { Drawing } from "@/components/drawing"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

/** How every page ends: an invitation, and an address to send it to. */
export function ContactCard() {
  return (
    <Card className="gap-0 py-0 shadow-none md:grid md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div className="flex flex-col gap-8 py-10 sm:px-4 sm:py-14">
        <CardHeader className="gap-4">
          <CardTitle>
            <h2 className="type-display text-4xl sm:text-5xl">
              {site.contact.heading}
            </h2>
          </CardTitle>
          <CardDescription className="max-w-[48ch] text-lg leading-relaxed">
            {site.contact.text}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-7">
          <a
            href={`mailto:${site.email}`}
            className="group w-fit rounded-md font-mono text-lg text-ink outline-none focus-visible:ring-3 focus-visible:ring-ring/60 sm:text-2xl"
          >
            <span aria-hidden="true" className="text-muted-foreground">
              $ mail{" "}
            </span>
            <span className="decoration-ink/60 underline-offset-6 group-hover:underline">
              {site.email}
            </span>
            <span aria-hidden="true" className="caret" />
          </a>
          <div className="flex flex-wrap gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <IconBrandGithub data-icon="inline-start" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <IconBrandLinkedin data-icon="inline-start" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </CardContent>
      </div>
      <div className="@container grid place-items-center px-6 max-md:hidden">
        <Drawing name="contact" />
      </div>
    </Card>
  )
}
