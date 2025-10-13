# 🧾 更新日志

> 记录项目每个版本的主要更新内容。

## v1.2.19 · 2025-10-13

- 新增设备配置字段 `payment_wait_timeout`

| 字段名                    | 字段说明        | 值类型    | 默认值         |
|------------------------|-------------|--------|-------------|
| `payment_wait_timeout` | 支付超时(秒)关闭支付 | number | 180 (单位: 秒) |

- 支持 `GraphQL` 获取该字段值
- 设备配置更新 [服务端->客户端](/mqtt/subscribe/machine.config.push)
- 更新设备配置 [客户端->服务端](/mqtt/publish/machine.config.put)
