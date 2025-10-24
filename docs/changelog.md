# 🧾 更新日志

> 记录项目每个版本的主要更新内容。

## v1.2.22 · 2025-10-23

> 取货码: 定长8位数字字符串，生成后允许客户在售卖机APP上进行取货，取货数量 1-3个，取货码的订单是免费的。

取货码生成可通过接口生成，管理面板生成功能会在约定时间内关闭。

[GraphQL 获取取货码](/GraphQL/pickup_code) - 适用于 APP

### GRPC 文档

- [20. 获取当前设备取货码(未过期)](/grpc/pickup_codes)
- [21. 通过接口生成取货码](/grpc/create_pickup_codes)

### MQTT 订阅 Subscribe

- [13. 取货码生成后推送](/mqtt/subscribe/client.pickup_codes.create)
- [14. 取货码删除后推送](/mqtt/subscribe/client.pickup_codes.delete)

### MQTT 发布 Publish

- [10. 取货码消费后推至服务端](/mqtt/publish/client.pickup_codes.put)

### 接口推送文档

- [批量上传订单](/standalone/batch_upload_orders) - 需要修改 `pickup_code_id` 取货码 ID

## v1.2.21 · 2025-10-22

- 修改  `_at` 时间类字段，根据 `machine.timezone` 时区转换偏移量

| 字段名          | 字段说明 | 值类型         | 默认值 |
|--------------|------|-------------|-----|
| `created_at` | 创建时间 | datetime(3) | UTC |
| `updated_at` | 更新时间 | datetime(3) | UTC |
| `expired_at` | 过期时间 | datetime(3) | UTC |

即 `GraphQL`, `GRPC` 所有接口请求返回的 `_at` 字段值都是转换时区后的时间，`秒级,毫秒级时间戳` 亦然。

## v1.2.20 · 2025-10-15

- 新增设备配置字段 `languages`

| 字段名         | 字段说明      | 值类型    | 默认值                 |
|-------------|-----------|--------|---------------------|
| `languages` | App可用语言列表 | string | "zh_CN,en_US,zh_HK" |

`languages` 用于 `machine_type` 值为 `6` 拉面机 支持的翻译语种

- 支持 `GraphQL` 获取该字段值
- 设备配置更新 [服务端->客户端](/mqtt/subscribe/machine.config.push)
- 更新设备配置 [客户端->服务端](/mqtt/publish/machine.config.put)

## v1.2.19 · 2025-10-13

- 新增设备配置字段 `payment_wait_timeout`

| 字段名                    | 字段说明        | 值类型    | 默认值         |
|------------------------|-------------|--------|-------------|
| `payment_wait_timeout` | 支付超时(秒)关闭支付 | number | 180 (单位: 秒) |

- 支持 `GraphQL` 获取该字段值
- 设备配置更新 [服务端->客户端](/mqtt/subscribe/machine.config.push)
- 更新设备配置 [客户端->服务端](/mqtt/publish/machine.config.put)
