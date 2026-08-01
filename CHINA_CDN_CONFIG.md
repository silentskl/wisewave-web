# 中国回国加速 CDN 配置

独立页面地址：`/china-cdn`

## 配置文件

编辑 `public/china-cdn-config.json`：

- `price_factor`：默认价格系数，当前为 `1.2`
- `contact_url`：产品咨询链接
- `products[].base_price`：三种产品的目录基础单价

页面展示价格计算方式：

```text
展示单价 = base_price × price_factor
```

默认显示：

- 纯回国加速 CDN：35 × 1.2 = 42 USD/Mbps
- 满血回国加速 CDN：45 × 1.2 = 54 USD/Mbps
- 防中国移动屏蔽 CDN：55 × 1.2 = 66 USD/Mbps

## Cloudflare Worker 后台覆盖

Cloudflare 控制台进入：

`Workers & Pages → wisewave-website → Settings → Variables and Secrets`

新增文本变量：

```text
变量名：CDN_PRICE_FACTOR
变量值：1.2
```

保存并部署后，Worker 后台变量会覆盖配置文件中的 `price_factor`。删除该变量后，页面重新使用 `public/china-cdn-config.json` 的值。

变量必须是大于 0 的数字。接口 `/api/china-cdn-config` 最长缓存约 60 秒，因此修改后短时间内看到旧价格属于正常现象。
