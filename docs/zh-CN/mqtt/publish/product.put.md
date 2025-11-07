# 6. 产品更新

:::tip
统一推送主题：`/server/app`
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "000",
  "method": "client.product.put",
  "sign": "E8B8A32274EA1EA14A2348A546C6AB98",
  "client_id": "4506173",
  "product_id": "1",
  "lock_id": "1",
  "current_inventory": "0",
  "operation": "1",
  "status": "0"
}
```

## 参数说明

| 字段名               | 默认值                | 是否必须 | 描述                  |
|-------------------|--------------------|------|---------------------|
| timestamp         | -                  | ✅    | 当前时间戳(秒级)           |
| machine_id        | -                  | ✅    | 设备 id(主键)           |
| method            | client.product.put | ✅    | MQTT 方法名            |
| product_id        | -                  | ✅    | 产品 id               |
| current_inventory | -                  | ✅    | 库存                  |
| lock_id           | 0                  | -    | 锁 id                |
| operation         | 1                  | -    | 1 上架，0 下架           |
| sign              | -                  | ✅    | 签名字符串               |
| client_id         | -                  | ✅    | 设备编码，即 `machine_no` |
| status            | 0                  | ✅    | 处理状态，默认：0           |

💡 注意：`lock_id`, `operation` 不传时需要删除字段
