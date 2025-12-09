# 🧾 更新日志

> 记录项目每个版本的主要更新内容。

## v1.2.25-rc.0 · 2025-12-09

> 主要内容：支持线下APP更新商品编码

### 修改 MQTT

- [11. 更新商品编码slug](/zh-CN/mqtt/publish/client.goods.slug.put)

## v1.2.24.22 · 2025-11-22

> 主要内容：订单新增字段

### 修改 单机版

- [2. 批量上传订单](/zh-CN/standalone/batch_upload_orders)

> 新增字段

| 字段名                                                 | 类型     | 是否必须 | 描述            |
|-----------------------------------------------------|--------|------|---------------|
| <b style="color: lightgreen">total_cash_amount</b>  | string | -    | 现金支付总额（纸币+硬币） |
| <b style="color: lightgreen">change_cash_amount</b> | string | -    | 找零金额          |

> 如果找零设备故障，可找零金额: `change_cash_amount` 为 `0.0`

## v1.2.24.20 · 2025-11-20

> 主要内容：更新产品字段

### 修改 GRPC

- [2. 设备信息](/zh-CN/grpc/machine.profile)

> 新增 `coupon_enabled` 字段 => 是否开启【折扣券、满减券、优惠码】功能

原 `temperature`,`humidity` 转移至 [设备配置表中](/zh-CN/grpc/machine.profile#配置信息-config)

PS：`v1.2.25` 将上线【折扣券、满减券、优惠码】功能。

## v1.2.24 · 2025-11-19

> 主要内容：更新产品字段

- [8 产品列表](/zh-CN/grpc/product)

> 废弃字段: <s style='color: red'>sort_id</s>, <s style='color: red'>is_sticky</s>, <s style='color: red'>is_latest</s>
> 本次修改后产品排序依根据货道号电机排序(升序)

### 增加字段 for 设备配置

设备配置 `app_cart_enabled` 是否启用App购物车

> 依据：根据板卡类型是否开启掉货检测自动判断，所有 `未开启购物车` 的设备只能购买1个产品

## v1.2.23 · 2025-11-07

> 主要内容：支持一键清除货道故障。

### 修改 MQTT发布

- [7. 门锁状态上报](/zh-CN/mqtt/publish/doorlock.status)

> 后端在 `v1.2.25` 版本开始，弃用此接口，推荐使用 [7.1 货道与门锁状态上报](/zh-CN/mqtt/publish/client.channel.status.put)。

### 新增 MQTT发布

- [7.1 货道与门锁状态上报](/zh-CN/mqtt/publish/client.channel.status.put)

### 新增 MQTT订阅

- [15. 发起恢复出厂设置](/zh-CN/mqtt/subscribe/client.factory.reset)
- [16. 一键清除货道故障](/zh-CN/mqtt/subscribe/client.channel.fault.clear)

## v1.2.22 · 2025-10-23

> 取货码: 定长8位数字字符串，生成后允许客户在售卖机APP上进行取货，取货数量 1-3个，取货码的订单是免费的。

取货码生成可通过接口生成，管理面板生成功能会在约定时间内关闭。

[GraphQL 获取取货码](/zh-CN/GraphQL/pickup_code) - 适用于 APP

### GRPC 文档

- [20. 获取当前设备取货码(未过期)](/zh-CN/grpc/pickup_codes)
- [21. 通过接口生成取货码](/zh-CN/grpc/create_pickup_codes)

### MQTT 订阅 Subscribe

- [13. 取货码生成后推送](/zh-CN/mqtt/subscribe/client.pickup_codes.create)
- [14. 取货码删除后推送](/zh-CN/mqtt/subscribe/client.pickup_codes.delete)

### MQTT 发布 Publish

- [10. 取货码消费后推至服务端](/zh-CN/mqtt/publish/client.pickup_codes.put)

### 接口推送文档

- [批量上传订单](/zh-CN/standalone/batch_upload_orders) - 需要修改 `pickup_code_id` 取货码 ID

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
- 设备配置更新 [服务端->客户端](/zh-CN/mqtt/subscribe/machine.config.push)
- 更新设备配置 [客户端->服务端](/zh-CN/mqtt/publish/machine.config.put)

## v1.2.19 · 2025-10-13

- 新增设备配置字段 `payment_wait_timeout`

| 字段名                    | 字段说明        | 值类型    | 默认值         |
|------------------------|-------------|--------|-------------|
| `payment_wait_timeout` | 支付超时(秒)关闭支付 | number | 180 (单位: 秒) |

- 支持 `GraphQL` 获取该字段值
- 设备配置更新 [服务端->客户端](/zh-CN/mqtt/subscribe/machine.config.push)
- 更新设备配置 [客户端->服务端](/zh-CN/mqtt/publish/machine.config.put)

## v1.2.18 · Before

- 省略