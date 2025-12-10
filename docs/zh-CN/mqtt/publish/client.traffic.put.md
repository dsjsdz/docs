# 12. 设备上传使用流量

:::tip
统一推送主题：`/server/app`
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "10009",
  "method": "client.traffic.put",
  "sign": "E8B8A32274EA1EA14A2348A546C6AB98",
  "network_type": "1",
  "upload_bytes": "1234567",
  "download_bytes": "2345678",
  "upload_packets": "3456",
  "download_packets": "4567",
  "status": "0",
  "client_id": "16327138"
}
```

## 参数说明

| 字段名              | 默认值                | 是否必须 | 描述                         |
|------------------|--------------------|------|----------------------------|
| timestamp        | -                  | ✅    | 当前时间戳(秒级)                  |
| machine_id       | -                  | ✅    | 设备 id(主键)                  |
| method           | client.traffic.put | ✅    | MQTT 方法名                   |
| id               | -                  | ✅    | 取货码主键                      |
| network_type     | 1                  | ✅    | 网络类型：1=WiFi, 2=蜂窝网络, 3=以太网 |
| upload_bytes     | -                  | ✅    | 上行字节数                      |
| download_bytes   | -                  | ✅    | 下行字节数                      |
| upload_packets   | -                  | ✅    | 上行包数                       |
| download_packets | -                  | ✅    | 下行包数                       |
| sign             | -                  | ✅    | 签名字符串                      |
| client_id        | -                  | ✅    | 设备编码，即 `machine_no`        |
| status           | 0                  | ✅    | 处理状态，默认：0                  |

## 补充

| 字段名                | 含义             | 举例                       |
 |--------------------|----------------|--------------------------|
| `upload_bytes`     | 设备发送出去的数据量（字节） | 心跳、上传库存、上传日志             |
| `download_bytes`   | 设备接收的数据量（字节）   | 下发命令、OTA更新、拉广告图片         |
| `upload_packets`   | 设备发出的包数        | MQTT publish 次数、HTTP 请求包 |
| `download_packets` | 设备收到的包数        | MQTT 下发次数、HTTP 响应包       |

💡 注意：每次上报的值都是“最终累计值”（absolute value），而不是“新增增量（delta）”
