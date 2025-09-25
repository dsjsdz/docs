# 5. 补货记录

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

| 字段名          | 默认值 | 是否必须 | 描述            |
|--------------|-----|------|---------------|
| current_page | -   | -    | 当前页码, 默认: 1   |
| per_page     | -   | -    | 每页条数, 最大值: 20 |

## 返回结果

```json
{
  "data": [
    {
      "id": "15",
      "machine_id": "1",
      "addr": "1",
      "code": "A1",
      "prev_inventory": "1",
      "current_inventory": "0",
      "description": "单个商品补/撤货",
      "transaction_type": "WITHDRAWAL",
      "source_type": "MWEB",
      "created_at": "2025-05-23 09:48:05",
      "operator": {
        "id": "3",
        "username": "maus"
      }
    }
  ],
  "total": "15",
  "current_page": "1",
  "per_page": "20"
}
```

## 字段信息

| 字段名               | 默认值 | 描述         |
|-------------------|-----|------------|
| id                | 1   | 主键         |
| machine_id        | -   | 设备 id      |
| addr              | -   | 板卡地址       |
| code              | -   | 货道地址       |
| prev_inventory    | -   | 补货前数量      |
| current_inventory | -   | 补货后数据      |
| description       | -   | 描述         |
| transaction_type  | -   | 补货类型，补货 撤货 |
| source_type       | -   | 操作来源       |
| created_at        | -   | 创建时间       |
| operator          | -   | 操作人信息      |
