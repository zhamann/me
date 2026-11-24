// @ts-check

import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

/**
 * The Unicode range Fontsource gives its latin-ext files.
 * @type {[string, ...string[]]}
 */
const latinExt = [
  "U+0100-02BA",
  "U+02BD-02C5",
  "U+02C7-02CC",
  "U+02CE-02D7",
  "U+02DD-02FF",
  "U+0304",
  "U+0308",
  "U+0329",
  "U+1D00-1DBF",
  "U+1E00-1E9F",
  "U+1EF2-1EFF",
  "U+2020",
  "U+20A0-20AB",
  "U+20AD-20C0",
  "U+2113",
  "U+2C60-2C7F",
  "U+A720-A7FF",
]

// https://astro.build/config
export default defineConfig({
  site: "https://zhamann.com",
  trailingSlash: "always",
  integrations: [react(), sitemap()],
  // Preloaded in the layout and `optional`, so text never changes font after it's
  // drawn. Files come from the installed packages, so builds download nothing.
  // latin-ext is a family of its own because preloading can't pick one file
  // from several of the same weight and style.
  fonts: [
    {
      name: "IBM Plex Sans",
      cssVariable: "--font-ibm-plex-sans",
      provider: fontProviders.local(),
      display: "optional",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: [
              "@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2",
            ],
            weight: "100 700",
            style: "normal",
          },
        ],
      },
    },
    {
      name: "IBM Plex Sans Extended",
      cssVariable: "--font-ibm-plex-sans-extended",
      provider: fontProviders.local(),
      display: "optional",
      fallbacks: [],
      options: {
        variants: [
          {
            src: [
              "@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-ext-wght-normal.woff2",
            ],
            weight: "100 700",
            style: "normal",
            unicodeRange: latinExt,
          },
        ],
      },
    },
    {
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      provider: fontProviders.local(),
      display: "optional",
      fallbacks: ["ui-monospace", "monospace"],
      options: {
        variants: [
          {
            src: [
              "@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
            ],
            weight: "400",
            style: "normal",
          },
          {
            src: [
              "@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2",
            ],
            weight: "600",
            style: "normal",
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
