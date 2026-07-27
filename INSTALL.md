# WiseWave 企业网站安装说明

本安装包为 WiseWave 企业网站完整源码，包含：

- 深空网络科技风格首页
- AI 大模型融合平台、CDN、云基础设施、专线及安全 CDN 服务内容
- 中文/英文切换
- 隐私政策与服务条款页面
- 蓝色科技版 WiseWave Logo
- 可维护的大模型列表
- 可配置的 AI 平台“立即体验”链接

## 1. 环境要求

- Node.js 22.13.0 或更高版本
- npm

## 2. 安装依赖

在项目目录中执行：

```bash
npm install
```

## 3. 本地运行

```bash
npm run dev
```

默认开发服务由 Vite 启动。终端会显示实际访问地址。

## 4. 修改模型列表和 AI 平台链接

编辑：

```text
public/model-catalog.json
```

示例：

```json
{
  "platform_url": "https://ai.wisewavesg.com",
  "models": [
    {
      "name": "Seedance 2.0",
      "enabled": true,
      "order": 10
    },
    {
      "name": "Claude",
      "enabled": true,
      "order": 20
    }
  ]
}
```

字段说明：

- `platform_url`：AI 服务详情页“立即体验”按钮跳转地址。
- `name`：模型显示名称。
- `enabled`：设为 `true` 时显示，设为 `false` 时隐藏。
- `order`：显示顺序，数字越小越靠前。

修改并保存 JSON 文件后重新构建或发布网站即可，无需改动页面代码。

## 5. 修改网站内容

主要文件：

- `app/page.tsx`：首页内容、产品服务和中英文文案。
- `app/globals.css`：全站样式及响应式布局。
- `app/privacy/page.tsx`：隐私政策。
- `app/terms/page.tsx`：服务条款。
- `public/`：Logo、首屏背景和模型配置文件。

## 6. 构建生产版本

```bash
npm run build
```

构建结果位于：

```text
dist/
```

## 7. 运行生产版本

```bash
npm run start
```

## 8. 发布更新

每次修改网站内容、Logo 或 `public/model-catalog.json` 后，重新执行：

```bash
npm run build
```

然后将新的生产构建发布至支持 Cloudflare Workers/Vinext 的运行环境。

