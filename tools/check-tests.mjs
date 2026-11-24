// `bun test` passes a test file that has no tests in it.
import { readFileSync } from "node:fs"

const files = [
  ...new Bun.Glob(
    "{src,convex,scripts,test}/**/*.test.{ts,tsx,mjs}"
  ).scanSync(),
]
const empty = files.filter(
  (file) => !/\b(?:test|it)\b\s*[.(]/.test(readFileSync(file, "utf8"))
)

if (files.length === 0 || empty.length > 0) {
  console.error(["No tests in:", ...empty].join("\n"))
  process.exit(1)
}
