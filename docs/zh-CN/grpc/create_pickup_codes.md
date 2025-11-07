# 21. 通过接口生成取货码

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 请求示例

```json
{
  "expired_at": "0",
  "product_id": 360,
  "quantity": 3,
  "status": true
}
```

## 参数说明

| 字段名        | 默认值              | 是否必须 | 描述                              |
|------------|------------------|------|---------------------------------|
| expired_at | (UTC 时区)当前时间+2小时 | -    | 过期时间戳(毫秒级), 使用 UTC 时区           |
| product_id | -                | ✅    | 对应的商品 `products.id` 主键          |
| quantity   | -                | ✅    | 单次出货数量, 1-3个                    |
| status     | false            | -    | 类型:<br /> `0` 未使用<br /> `1` 已使用 |

注: `expired_at`, `status` 即使传值也不会被采用。

> `products.id` 可以通过 商品列表 获取

> `quantity`: 取值范围 1-3

## 返回参数

```json
{
  "code": "200",
  "message": "ok",
  "data": null
}
```

[取货码生成后推送](/zh-CN/mqtt/subscribe/client.pickup_codes.create)
