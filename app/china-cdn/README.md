# WiseWave Website v1.1.3 — China Acceleration CDN

Cloudflare Worker-ready WiseWave corporate website. This release includes a bilingual China Acceleration CDN page at `/china-cdn`, configurable pricing, and an optional Block-Resistant CDN product that is hidden by default.

## Requirements

- Node.js 22.13 or newer
- npm
- A Cloudflare account

## Local build

```bash
npm install
npm run build
```

## Deploy

```bash
npx wrangler login
npm run deploy
```

This is a Worker application. Do not use `wrangler pages deploy`.

See `CHINA_CDN_CONFIG.md` for pricing configuration and `DEPLOY_CLOUDFLARE.md` for full deployment instructions.
