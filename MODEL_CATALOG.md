# 模型列表维护

首页展示的模型列表来自：

```text
public/model-catalog.json
```

AI 大模型卡片的“查看能力”跳转地址也由该文件维护：

```json
{
  "platform_url": "https://ai.wisewavesg.com"
}
```

修改 `platform_url` 后重新构建并发布即可。仅接受以 `https://` 或 `http://` 开头的地址；地址缺失或无效时，按钮会回退到站内 AI 服务详情。

每个模型包含三个字段：

```json
{
  "name": "Claude",
  "enabled": true,
  "order": 30
}
```

- `name`：页面显示的模型名称。
- `enabled`：设为 `true` 时显示；设为 `false` 时隐藏。
- `order`：数字越小，显示位置越靠前。

## 增加模型

在 `models` 数组中增加一个对象：

```json
{
  "name": "New Model",
  "enabled": true,
  "order": 50
}
```

## 删除或隐藏模型

- 永久删除：从数组中删除该模型对象。
- 临时隐藏：将 `enabled` 改成 `false`。

修改后重新构建并发布网站即可生效。若配置文件无法读取或格式错误，页面会自动显示内置的安全回退列表。
