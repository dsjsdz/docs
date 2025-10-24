# 20. 获取当前设备取货码(未过期)

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 请求示例

```json
{
  "data": [
    {
      "id": "17",
      "machine_id": "10003",
      "product_id": "402",
      "code": "10788613",
      "quantity": "3",
      "status": false,
      "expired_at": "1761223897334",
      "expired_day": "2025-10-23 20:51:37"
    }
  ]
}
```

## 参数说明

| 字段名         | 默认值 | 是否必须 | 描述                                                       |
|-------------|-----|------|----------------------------------------------------------|
| id          | -   | ✅    | 取货码主键                                                    |
| machine_id  | -   | ✅    | 设备 id(主键)                                                |
| product_id  | -   | ✅    | 对应的商品 `products.id` 主键                                   |
| code        | -   | ✅    | 8位定长数字字符串                                                |
| quantity    | -   | ✅    | 单次出货数量, 1-3个                                             |
| status      | -   | ✅    | 类型:<br /> `0` 未使用<br /> `1` 已使用                          |
| expired_at  | -   | ✅    | 过期时间戳(毫秒级), 使用 `machine.timezone` 时区转换                   |
| expired_day | -   | ✅    | 过期时间字符串, `%Y-%m-%d %H:%M:%S`, 使用 `machine.timezone` 时区转换 |
