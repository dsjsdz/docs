# 11. 货道列表

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 返回结果

```json
{
  "data": [
    {
      "id": "1",
      "model_id": "1",
      "name": "A1",
      "total": "2",
      "sort_id": "1",
      "motor_id": "0",
      "x": "0",
      "y": "0",
      "addr": "1",
      "is_auxiliary": false
    }
  ]
}
```

## channel 信息

| 字段名       | 默认值 | 描述         |
| ------------ | ------ | ------------ |
| id           | -      | 主键         |
| model_id     | -      | 模型 ID      |
| name         | -      | 货道名称     |
| total        | -      | 容量         |
| sort_id      | 0      | 排序         |
| motor_id     | 0      | 电机 ID      |
| x            | 0      | X 坐标       |
| y            | 0      | Y 坐标       |
| addr         | 1      | 地址         |
| is_auxiliary | false  | 是否辅助(锁) |
