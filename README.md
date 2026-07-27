# WiseWave 企业官网

WiseWave Pte. Ltd. 双语企业网站，包含：

- AI 大模型融合平台
- 内容分发网络（CDN）
- 云基础设施
- 专线与云连接
- 安全 CDN（SCDN）
- 中英文切换
- 隐私政策与服务条款
- 响应式桌面与移动端布局

## 环境要求

- Node.js 22.13 或更高版本
- npm
- Linux 部署环境建议安装 `bash`、`curl`、`flock` 与 GNU `timeout`

## 本地安装

```bash
unzip wisewave-website-complete.zip
cd wisewave-website
npm ci
npm run dev
```

开发服务启动后，按终端显示的地址访问。

## 生产构建

```bash
npm ci
npm run build
npm run start
```

构建结果位于 `dist/`。项目使用 Vinext，并输出 Cloudflare Worker 兼容的服务端入口。

## 维护模型列表

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
    }
  ]
}
```

- 增加模型：向 `models` 数组增加对象。
- 删除模型：从数组删除对象。
- 临时隐藏：将 `enabled` 改成 `false`。
- 调整顺序：修改 `order`，数字越小越靠前。
- 修改 AI 平台链接：更新顶层 `platform_url`。

修改配置后重新构建并发布。详细说明见 `MODEL_CATALOG.md`。

## 主要文件

```text
app/page.tsx              首页与中英文内容
app/globals.css           全站视觉与响应式样式
app/privacy/page.tsx      隐私政策
app/terms/page.tsx        服务条款
public/model-catalog.json 可维护模型列表
public/wisewave-globe.png 首屏全球网络图
```

## 联系信息

- Email：info@wisewavesg.com
- 电话：+65 80331679
- 地址：10 Anson Road, #13-09, International Plaza, Singapore 079903
