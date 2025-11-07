# 1. 获取当前设备取货码(未过期)

:::tip
统一 Header：`token`: `****`, 其中 `token` 值为设备登录后的凭据。
:::

## 返回结果

```graphql
query PickupCodes {
    pickupCodes(machine_id: null) {
        id
        machine_id
        expired_at
        status
        product_id
        code
        quantity
        expired_day
    }
}
```

## 返回信息

| 字段名         | 类型      | 描述                                                      |
|-------------|---------|---------------------------------------------------------|
| id          | number  | 主键                                                      |
| machine_id  | number  | 机器 ID                                                   |
| expired_at  | number  | 过期秒级时间戳 (使用`machine.timezone`时区转换)                      |
| status      | boolean | 使用状态                                                    |
| product_id  | number  | 产品id                                                    |
| code        | number  | 8位定长数字字符串                                               |
| quantity    | number  | 1-3 取货数量/次                                              |
| expired_day | string  | 过期时间字符串, `%Y-%m-%d %H:%M:%S` (使用`machine.timezone`时区转换) |

> 备注：取货码有效期 2小时，自动过期。

## 消费

💡 `machine.pickup_code_enabled` 未开启时，不显示取货码相关按钮，此功能开启只允许在web管理面板进行。

下单数量为取货码数量，如果不足，则不允许消费

![2025-10-24_093110.jpg](/images/2025-10-24_093110.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem"}

[取货码状态MQTT事件推送](/zh-CN/mqtt/publish/client.pickup_codes.put)

[上传订单记录](/zh-CN/standalone/batch_upload_orders)
