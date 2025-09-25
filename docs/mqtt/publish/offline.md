# 4. 离线（遗属消息）

:::tip
统一推送主题：`/server/app`
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "000",
  "method": "client.offline",
  "sign": "E8B8A32274EA1EA14A2348A546C6AB98",
  "client_id": "4506173",
  "reason": "network_timeout",
  "status": "0"
}
```

## 参数说明

| 字段名     | 默认值          | 是否必须 | 描述                         |
| ---------- | --------------- | -------- | ---------------------------- |
| timestamp  | -               | ✅       | 当前时间戳(秒级)             |
| machine_id | -               | ✅       | 设备 id(主键)                |
| method     | client.offline  | ✅       | MQTT 方法名                  |
| reason     | network_timeout | ✅       | 异常原因（枚举类型或字符串） |
| sign       | -               | ✅       | 签名字符串                   |
| client_id  | -               | ✅       | 设备编码，即 `machine_no`    |
| status     | 0               | ✅       | 处理状态，默认：0            |

💡 注意：本主题在抛出异常或假死状态时候需推送
