import { writeFile, readFile } from "node:fs/promises";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const destination = `${base}/en/`;
await writeFile(
  "out/index.html",
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${destination}"><title>Nima Zandian — Portfolio</title><link rel="canonical" href="${destination}"></head><body><p><a href="${destination}">Open Nima Zandian’s portfolio</a></p></body></html>`,
);
await writeFile("out/.nojekyll", "");
