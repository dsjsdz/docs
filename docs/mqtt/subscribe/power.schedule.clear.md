# 8. 设备清除开关机

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "method": "client.power.schedule.clear",
  "status": "0",
  "machine_id": "1",
  "client_id": "16327127",
  "timestamp": "1758519471",
  "sign": "6EDCE0702B2D4D3664DE63BDAC90A3F7"
}
```

## 参数说明

| 字段名     | 默认值                      | 是否必须 | 描述                      |
| ---------- | --------------------------- | -------- | ------------------------- |
| timestamp  | -                           | ✅       | 当前时间戳(秒级)          |
| machine_id | -                           | ✅       | 设备 id(主键)             |
| method     | client.power.schedule.clear | ✅       | MQTT 方法名               |
| sign       | -                           | ✅       | 签名字符串                |
| client_id  | -                           | ✅       | 设备编码，即 `machine_no` |
| status     | 0                           | ✅       | 处理状态，默认：0         |
