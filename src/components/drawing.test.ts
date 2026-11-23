import { describe, expect, it } from "vitest"

import { shade } from "./drawing"

describe("shade", () => {
  it("splits where the ink changes, and not at spaces", () => {
    expect(shade(". :@@ #\n=-")).toEqual([
      { shade: 0, text: ". :" },
      { shade: -1, text: "@@ #\n" },
      { shade: 1, text: "=-" },
    ])
  })

  it("keeps every character, in order", () => {
    const text = "  .:-=\n +xoX#%@ \n\n *"
    const runs = shade(text)
    expect(runs.map((run) => run.text).join("")).toBe(text)
  })
})
