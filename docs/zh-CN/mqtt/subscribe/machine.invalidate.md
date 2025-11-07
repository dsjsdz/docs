# 1. 设备字段更新

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "000",
  "method": "client.machine.invalidate",
  "sign": "E8B8A32274EA1EA14A2348A546C6AB98",
  "client_id": "4506173",
  "status": "0"
}
```

## 参数说明

| 字段名        | 默认值                       | 是否必须 | 描述                  |
|------------|---------------------------|------|---------------------|
| timestamp  | -                         | ✅    | 当前时间戳(秒级)           |
| machine_id | -                         | ✅    | 设备 id(主键)           |
| method     | client.machine.invalidate | ✅    | MQTT 方法名            |
| sign       | -                         | ✅    | 签名字符串               |
| client_id  | -                         | ✅    | 设备编码，即 `machine_no` |
| status     | 0                         | ✅    | 处理状态，默认：0           |
