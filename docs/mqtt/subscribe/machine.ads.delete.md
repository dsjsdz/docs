# 12. 广告删除

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "10009",
  "method": "client.ads.delete",
  "sign": "9F6A233BDA45B73E14F1239AB56D7C3E",
  "client_id": "16327138",
  "id": "16327138",
  "status": "0"
}
```

## 参数说明

| 字段名        | 默认值               | 是否必须 | 描述                  |
|------------|-------------------|------|---------------------|
| timestamp  | -                 | ✅    | 当前时间戳(秒级)           |
| machine_id | -                 | ✅    | 设备 id(主键)           |
| method     | client.ads.delete | ✅    | MQTT 方法名            |
| id         | -                 | ✅    | 广告id                |
| sign       | -                 | ✅    | 签名字符串               |
| client_id  | -                 | ✅    | 设备编码，即 `machine_no` |
| status     | 0                 | ✅    | 处理状态，默认：0           |

