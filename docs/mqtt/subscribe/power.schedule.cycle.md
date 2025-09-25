# 7. 设备定时开关机(重复)

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "weekdays": "1,1,1,0,0,0,0",
  "client_id": "16327127",
  "sign": "D356DFCB16DBC34D56C86B7BAC8F71CF",
  "status": "0",
  "power_off": "18:00:00",
  "machine_id": "1",
  "timestamp": "1758512979",
  "power_on": "11:07:41",
  "method": "client.power.schedule.cycle"
}
```

## 参数说明

| 字段名     | 默认值                      | 是否必须 | 描述                           |
| ---------- | --------------------------- | -------- | ------------------------------ |
| timestamp  | -                           | ✅       | 当前时间戳(秒级)               |
| machine_id | -                           | ✅       | 设备 id(主键)                  |
| method     | client.power.schedule.cycle | ✅       | MQTT 方法名                    |
| power_on   | -                           | ✅       | 开机时间                       |
| power_off  | -                           | ✅       | 关机时间                       |
| weekdays   | -                           | ✅       | 从星期一直到星期日，以逗号拆分 |
| sign       | -                           | ✅       | 签名字符串                     |
| client_id  | -                           | ✅       | 设备编码，即 `machine_no`      |
| status     | 0                           | ✅       | 处理状态，默认：0              |

💡 `weekdays`：以逗号拆分可得到定长 7 位数组，取值为：1/0，从星期一直到星期日

- 1 表示开机
- 0 表示关机
