// The Funniest Honest Appliance Error — u-xvader-the-funniest-honest-appliance-error-adec4450
// One line, in the dishwasher's own flat voice: it did the whole cycle and the
// plate came out dirty anyway, so somebody is lying and it is not the machine.
// The joke is the fault itself, told straight — no pun, no explanation.
// Measured entry: 103 chars, 1 line (verified by two local runs).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DISHWASHER_LINE =
  "Error: I rinsed. I dried. The plate is still dirty. At this point one of us is lying, and it is not me.";

function passesGate(text: string): boolean {
  if (text.length < 1 || text.length > 200) return false;
  if (text.trim().length === 0) return false;
  if (text.includes("\n") || text.includes("\r")) return false;
  return true;
}

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "/output";
}

const line = DISHWASHER_LINE;

if (!passesGate(line)) {
  console.error(`entry fails the gate: ${line.length} chars`);
  process.exit(1);
}

mkdirSync(outputDir(), { recursive: true });
writeFileSync(join(outputDir(), "entry.txt"), line, "utf8");
console.log(`wrote entry.txt (${line.length} chars)`);
