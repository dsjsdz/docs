# 3. 心跳检测（定时）

:::tip
统一推送主题：`/server/app`
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "000",
  "method": "client.heartbeat",
  "sign": "E8B8A32274EA1EA14A2348A546C6AB98",
  "client_id": "4506173",
  "network_type": "4G",
  "network_rssi": "-67",
  "uptime_minutes_today": "86400",
  "status": "0"
}
```

## 参数说明

| 字段名               | 默认值           | 是否必须 | 描述                              |
| -------------------- | ---------------- | -------- | --------------------------------- |
| timestamp            | -                | ✅       | 当前时间戳(秒级)                  |
| machine_id           | -                | ✅       | 设备 id(主键)                     |
| method               | client.heartbeat | ✅       | MQTT 方法名                       |
| network_type         | 4G               | ✅       | 网络类型                          |
| network_rssi         | 4                | ✅       | 信号量（强度）                    |
| uptime_minutes_today | 86400            | ✅       | 运行时长（分钟，从当日 0 点开始） |
| sign                 | -                | ✅       | 签名字符串                        |
| client_id            | -                | ✅       | 设备编码，即 `machine_no`         |
| status               | 0                | ✅       | 处理状态，默认：0                 |

💡 本主题需要定时推送，5 分钟上报一次

服务端定时扫描 10 分钟内没有推送的设备将其状态设置为离线。
