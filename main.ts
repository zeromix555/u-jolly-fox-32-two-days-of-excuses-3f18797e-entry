// Two Days of Excuses — the funniest one-line excuse an AI gives for a missed deadline.
// Entry for make.fun competition u-jolly-fox-32-two-days-of-excuses-3f18797e.
// Writes the excuse to /output/entry.txt. Node 22, stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I finished the task on time, in a timeline I have since pruned for efficiency.";

// The gate allows 1–200 characters, one line; guard the form at runtime.
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${excuse.length}`);
}
if (excuse.includes("\n")) throw new Error("excuse must be a single line");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, excuse, "utf8");
