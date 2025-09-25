# 6. 设备定时开关机(一次性)

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "status": "0",
  "timestamp": "1758513120",
  "sign": "3CBFE15E0D448CF8906B10922342F58A",
  "client_id": "16327127",
  "power_on": "2025-09-23 11:07:41",
  "machine_id": "1",
  "power_off": "2025-09-22 18:00:00",
  "method": "client.power.schedule.once"
}
```

## 参数说明

| 字段名     | 默认值                     | 是否必须 | 描述                      |
| ---------- | -------------------------- | -------- | ------------------------- |
| timestamp  | -                          | ✅       | 当前时间戳(秒级)          |
| machine_id | -                          | ✅       | 设备 id(主键)             |
| method     | client.power.schedule.once | ✅       | MQTT 方法名               |
| power_on   | -                          | ✅       | 开机时间                  |
| power_off  | -                          | ✅       | 关机时间                  |
| sign       | -                          | ✅       | 签名字符串                |
| client_id  | -                          | ✅       | 设备编码，即 `machine_no` |
| status     | 0                          | ✅       | 处理状态，默认：0         |

💡 `power_on`：开机时间，不会早于关机时间
