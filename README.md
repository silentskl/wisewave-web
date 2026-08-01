# WiseWave Website v1.1.1 — China Acceleration CDN

Cloudflare Worker-ready WiseWave corporate website. This release adds a dedicated bilingual China Acceleration CDN page at `/china-cdn`, three configurable product plans, and a pricing-factor override for Cloudflare Workers.

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
