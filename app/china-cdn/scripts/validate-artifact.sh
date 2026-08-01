#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
worker="${project_root}/dist/server/index.js"
assets="${project_root}/dist/client"

[[ -f "${worker}" ]] || { echo "Missing Worker entry: dist/server/index.js" >&2; exit 66; }
[[ -d "${assets}" ]] || { echo "Missing client assets: dist/client" >&2; exit 66; }

node --input-type=module - "${worker}" <<'NODE'
import { pathToFileURL } from "node:url";
const workerUrl = pathToFileURL(process.argv[2]);
workerUrl.searchParams.set("validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/server/index.js must export default.fetch");
}
NODE

echo "Validated Cloudflare Worker and client assets."
