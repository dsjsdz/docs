# 13. 栏目列表

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 请求示例

```json
{
  "data": [
    {
      "id": "1",
      "title": "第一层",
      "is_visible": true
    }
  ]
}
```

## 字段说明

| 字段名     | 默认值 | 描述     |
| ---------- | ------ | -------- |
| id         | -      | 主键     |
| title      | -      | 标题     |
| is_visible | -      | 是否可见 |
