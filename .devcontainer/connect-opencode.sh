#!/usr/bin/env bash
# Connects OpenCode to FreeLLMAPI. Run this one time, after you add your
# provider keys in the FreeLLMAPI dashboard.
# The key goes into OpenCode's own key file in your home folder
# (~/.local/share/opencode/auth.json). It never goes into the repository.
set -euo pipefail

if ! curl -fsS http://127.0.0.1:3001/api/ping >/dev/null 2>&1; then
  echo "FreeLLMAPI is not running. Run: bash .devcontainer/start-freellmapi.sh" >&2
  exit 1
fi

read -r -s -p "Paste the unified API key (FreeLLMAPI dashboard, Keys page): " FREELLMAPI_API_KEY
echo
if [ -z "$FREELLMAPI_API_KEY" ]; then
  echo "No key. Stopped." >&2
  exit 1
fi
export FREELLMAPI_API_KEY

npx -y freellmapi@latest setup-opencode --url http://localhost:3001
echo "Done. Type 'opencode' to start the coding agent."
