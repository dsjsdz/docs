# 🧾 更新日志

> 记录项目每个版本的主要更新内容。

## v1.2.21 · 2025-10-22

- 修改  `_at` 时间类字段，根据 `machine.timezone` 时区转换偏移量

| 字段名          | 字段说明 | 值类型         | 默认值 |
|--------------|------|-------------|-----|
| `created_at` | 创建时间 | datetime(3) | UTC |
| `updated_at` | 更新时间 | datetime(3) | UTC |
| `expired_at` | 过期时间 | datetime(3) | UTC |

即 `graphQL`, `GRPC` 所有接口请求返回的 `_at` 字段值都是转换时区后的时间，`秒级,毫秒级时间戳` 亦然。

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
