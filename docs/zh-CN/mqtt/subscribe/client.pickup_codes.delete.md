# 14. 取货码删除后推送

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
 {
  "timestamp": "1748330699",
  "machine_id": "10009",
  "method": "client.pickup_codes.delete",
  "sign": "EF56AB12CD34...",
  "client_id": "16327138",
  "id": "16327138",
  "status": "0"
}
```

## 参数说明

| 字段名        | 默认值                        | 是否必须 | 描述                  |
|------------|----------------------------|------|---------------------|
| timestamp  | -                          | ✅    | 当前时间戳(秒级)           |
| machine_id | -                          | ✅    | 设备 id(主键)           |
| method     | client.pickup_codes.delete | ✅    | MQTT 方法名            |
| id         | -                          | ✅    | 取货码主键               |
| sign       | -                          | ✅    | 签名字符串               |
| client_id  | -                          | ✅    | 设备编码，即 `machine_no` |
| status     | 0                          | ✅    | 处理状态，默认：0           |
