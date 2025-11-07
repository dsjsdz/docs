# 7. 门锁状态上报

:::tip
统一推送主题：`/server/app`
:::

<Badge type="danger" text="v1.2.25 弃用" />

> 后端在 `v1.2.25` 版本开始，弃用此接口，推荐使用 [7.1 货道与门锁状态上报](/zh-CN/mqtt/publish/client.channel.status.put)。

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "000",
  "method": "client.doorlock.status",
  "sign": "E8B8A32274EA1EA14A2348A546C6AB98",
  "client_id": "4506173",
  "product_id": "200",
  "operation": "1",
  "status": "0"
}
```

## 参数说明

| 字段名        | 默认值                    | 是否必须 | 描述                  |
|------------|------------------------|------|---------------------|
| timestamp  | -                      | ✅    | 当前时间戳(秒级)           |
| machine_id | -                      | ✅    | 设备 id(主键)           |
| method     | client.doorlock.status | ✅    | MQTT 方法名            |
| product_id | -                      | ✅    | 产品 id               |
| operation  | 1                      | ✅    | 0 开锁，1 关锁，2 故障      |
| sign       | -                      | ✅    | 签名字符串               |
| client_id  | -                      | ✅    | 设备编码，即 `machine_no` |
| status     | 0                      | ✅    | 处理状态，默认：0           |

💡 注意：`lock_id`, `operation` 不传时需要删除字段
