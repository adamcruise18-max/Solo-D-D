#!/usr/bin/env bash
# Starts the FreeLLMAPI server in a Docker container on port 3001.
# The Codespace runs this script each time it starts. You can also run it by hand.
set -euo pipefail

IMAGE="ghcr.io/tashfeenahmed/freellmapi:latest"
NAME="freellmapi"
DIR="$HOME/.freellmapi"

# 1. Make the encryption key one time. It encrypts your provider keys.
#    It stays in your home folder, not in the repository.
mkdir -p "$DIR"
chmod 700 "$DIR"
if [ ! -f "$DIR/.env" ]; then
  KEY="$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")"
  (umask 077; printf 'ENCRYPTION_KEY=%s\nPORT=3001\n' "$KEY" > "$DIR/.env")
  echo "FreeLLMAPI: made a new encryption key in $DIR/.env"
fi

# 2. Wait for Docker (it can start a few seconds after the Codespace).
for _ in $(seq 1 30); do
  docker info >/dev/null 2>&1 && break
  sleep 2
done
if ! docker info >/dev/null 2>&1; then
  echo "FreeLLMAPI: Docker did not start. Run 'bash .devcontainer/start-freellmapi.sh' again." >&2
  exit 1
fi

# 3. Start the container (or make it the first time).
if docker ps -a --format '{{.Names}}' | grep -qx "$NAME"; then
  docker start "$NAME" >/dev/null
else
  docker run -d --name "$NAME" --restart unless-stopped \
    --env-file "$DIR/.env" -e NODE_ENV=production \
    -p 127.0.0.1:3001:3001 \
    -v freellmapi-data:/app/server/data \
    "$IMAGE" >/dev/null
fi

# 4. Wait until the server answers.
for _ in $(seq 1 60); do
  if curl -fsS http://127.0.0.1:3001/api/ping >/dev/null 2>&1; then
    echo "FreeLLMAPI: running on port 3001. Open the PORTS tab to see the dashboard."
    exit 0
  fi
  sleep 2
done
echo "FreeLLMAPI: the server did not answer. See 'docker logs $NAME'." >&2
exit 1
