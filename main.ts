// Warning label for humans: one line, big laugh.
// The joke lands on recognition: everyone knows someone who says this,
// and the turn arrives in the last few words — towel, keys, still at home.
const fs = require("node:fs");
const path = require("node:path");

const LINE = "WARNING: This human says 'I'm five minutes away' while still at home, in a towel, hunting for its keys.";

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
}

main();
