#!/usr/bin/env bash
#
# PM2 deploy script for the portfolio (Vite + React static build).
# Builds the app and (re)starts it under PM2.
#
# Usage: ./deploy.sh
set -euo pipefail

cd "$(dirname "$0")"

echo "==> Installing PM2 if missing"
if ! command -v pm2 >/dev/null 2>&1; then
  npm install -g pm2
fi

echo "==> Installing dependencies"
npm ci

echo "==> Building production bundle"
npm run build

echo "==> Starting/reloading app under PM2"
pm2 startOrReload ecosystem.config.cjs

echo "==> Saving PM2 process list"
pm2 save

echo "==> Done. Current status:"
pm2 status portfolio
