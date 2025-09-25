# 4. 设备密码更新

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "000",
  "method": "client.machine.password.modified",
  "sign": "E8B8A32274EA1EA14A2348A546C6AB98",
  "password": "12345678",
  "client_id": "4506173",
  "status": "0"
}
```

## 参数说明

| 字段名     | 默认值                           | 是否必须 | 描述                      |
| ---------- | -------------------------------- | -------- | ------------------------- |
| timestamp  | -                                | ✅       | 当前时间戳(秒级)          |
| machine_id | -                                | ✅       | 设备 id(主键)             |
| method     | client.machine.password.modified | ✅       | MQTT 方法名               |
| password   | -                                | ✅       | 新密码（明文）            |
| sign       | -                                | ✅       | 签名字符串                |
| client_id  | -                                | ✅       | 设备编码，即 `machine_no` |
| status     | 0                                | ✅       | 处理状态，默认：0         |

💡 密码更新推送到客户端（app），需要更新本地 sqlite 数据（需要加密，加密方式：bcrypt）
