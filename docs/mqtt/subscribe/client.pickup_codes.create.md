# 13. 取货码生成后推送

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "10009",
  "method": "client.pickup_codes.create",
  "sign": "1234ABCD5678...",
  "client_id": "16327138",
  "id": "1",
  "product_id": "20001",
  "code": "16327138",
  "quantity": "1",
  "expired_at": "1748339999",
  "expired_day": "2025-10-23 20:51:37",
  "used": "0",
  "status": "0"
}
```

## 参数说明

| 字段名         | 默认值                        | 是否必须 | 描述                                                       |
|-------------|----------------------------|------|----------------------------------------------------------|
| timestamp   | -                          | ✅    | 当前时间戳(秒级)                                                |
| machine_id  | -                          | ✅    | 设备 id(主键)                                                |
| method      | client.pickup_codes.create | ✅    | MQTT 方法名                                                 |
| id          | -                          | ✅    | 取货码主键                                                    |
| product_id  | -                          | ✅    | 对应的商品 `products.id` 主键                                   |
| code        | -                          | ✅    | 8位定长数字字符串                                                |
| quantity    | -                          | ✅    | 单次出货数量, 1-3个                                             |
| expired_at  | -                          | ✅    | 过期时间戳(毫秒级), 使用 `machine.timezone` 时区转换                   |
| expired_day | -                          | ✅    | 过期时间字符串, `%Y-%m-%d %H:%M:%S`, 使用 `machine.timezone` 时区转换 |
| used        | -                          | ✅    | 类型:<br /> `0` 未使用<br /> `1` 已使用                          |
| sign        | -                          | ✅    | 签名字符串                                                    |
| client_id   | -                          | ✅    | 设备编码，即 `machine_no`                                      |
| status      | 0                          | ✅    | 处理状态，默认：0                                                |

💡 `expired_at` 使用 `machine.timezone` 时区转换，系统不会主动推送 `expired_at` 相关事件，APP自行处理过期或失效的取货码记录
