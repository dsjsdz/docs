# 15. 设备日志

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 请求示例

```json
{
  "current_page": "1",
  "per_page": "20"
}
```

## 参数说明

| 字段名       | 默认值 | 是否必须 | 描述                 |
| ------------ | ------ | -------- | -------------------- |
| current_page | -      | -        | 当前页码, 默认: 1    |
| per_page     | -      | -        | 每页条数, 最大值: 20 |

## 返回结果

```json
{
  "data": [
    {
      "id": "6310",
      "machine_id": "1",
      "method": "device.rssi.upload",
      "created_at": "2024-04-22 16:47:24",
      "payload": "{\"client_id\":\"866838062537549\",\"method\":\"device.rssi.upload\",\"msg_id\":\"1\",\"rssi\":\"23\",\"timestamp\":\"1713775644\"}"
    }
  ],
  "total": "15",
  "current_page": "1",
  "per_page": "20"
}
```

## 字段信息

| 字段名     | 默认值              | 描述      |
| ---------- | ------------------- | --------- |
| id         | 1                   | 主键      |
| machine_id | 1                   | 设备 ID   |
| method     | device.rssi.upload  | mqtt 方法 |
| created_at | 2024-04-22 16:47:24 | 创建时间  |
| payload    | {}                  | 参数      |
