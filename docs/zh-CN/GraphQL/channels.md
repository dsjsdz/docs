# 2. 获取货道列表

:::tip
统一 Header：`token`: `****`, 其中 `token` 值为设备登录后的凭据。
:::

## 返回结果

```graphql
query Channels {
    channels(model_id: null, addr: null) {
        id
        model_id
        name
        total
        sort_id
        motor_id
        x
        y
        addr
        is_auxiliary
        is_used
    }
}
```

## channel 信息

| 字段名          | 默认值   | 描述      |
|--------------|-------|---------|
| id           | -     | 主键      |
| model_id     | -     | 模型 ID   |
| name         | -     | 货道名称    |
| total        | -     | 容量      |
| sort_id      | 0     | 排序      |
| motor_id     | 0     | 电机 ID   |
| x            | 0     | X 坐标    |
| y            | 0     | Y 坐标    |
| addr         | 1     | 地址      |
| is_auxiliary | false | 是否辅助(锁) |

💡 `addr` 未传参时，默认查询所有
