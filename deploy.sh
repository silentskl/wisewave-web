rm -rf dist
npm run build
npx wrangler deploy --config wrangler.jsonc
