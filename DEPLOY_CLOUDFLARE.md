# Cloudflare Workers 发布指南

## 首次发布

```bash
unzip WiseWave-Website-v1.1.0-China-CDN.zip
cd WiseWave-Website-v1.1.0-China-CDN
node --version
npm install
npx wrangler login
npx wrangler whoami
npm run deploy
```

Node.js 版本需要 `22.13.0` 或更高。

## 在线更新

在项目目录中替换或修改代码后运行：

```bash
npm install
npm run deploy
```

## 自定义域名

Cloudflare 控制台进入：

`Workers & Pages → wisewave-website → Settings → Domains & Routes → Add → Custom Domain`

绑定：

- `wisewavesg.com`
- `www.wisewavesg.com`

## 检查发布

```bash
npx wrangler deployments list --name wisewave-website
npx wrangler tail wisewave-website
```

## 注意

- 使用 `npm run deploy`，不要使用 `npx wrangler pages deploy`。
- `nodejs_compat` 已在 `wrangler.jsonc` 中配置一次，不要在命令行重复传入。
- 项目不依赖 `.openai/hosting.json`，也不依赖 GNU `timeout`。
