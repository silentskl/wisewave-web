#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
vinext="${project_root}/node_modules/.bin/vinext"

if [[ ! -x "${vinext}" ]]; then
  echo "Dependencies are missing. Run npm install first." >&2
  exit 69
fi

echo "Building WiseWave for Cloudflare Workers..."
cd "${project_root}"
"${vinext}" build
"${project_root}/scripts/validate-artifact.sh"
