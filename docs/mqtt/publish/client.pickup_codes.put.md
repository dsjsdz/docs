# 10. 取货码消费后推至服务端

:::tip
统一推送主题：`/server/app`
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "10009",
  "method": "client.pickup_codes.put",
  "sign": "AB12CD34EF56...",
  "client_id": "16327138",
  "id": "16327138",
  "used": "1",
  "status": "0"
}
```

## 参数说明

| 字段名        | 默认值                        | 是否必须 | 描述                  |
|------------|----------------------------|------|---------------------|
| timestamp  | -                          | ✅    | 当前时间戳(秒级)           |
| machine_id | -                          | ✅    | 设备 id(主键)           |
| method     | client.pickup_codes.create | ✅    | MQTT 方法名            |
| id         | -                          | ✅    | 取货码主键               |
| used       | -                          | ✅    | 类型: `1` 已使用         |
| sign       | -                          | ✅    | 签名字符串               |
| client_id  | -                          | ✅    | 设备编码，即 `machine_no` |
| status     | 0                          | ✅    | 处理状态，默认：0           |
