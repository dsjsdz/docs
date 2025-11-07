# 1. 批量更新库存

:::tip
统一Header 参数：`api-machine-no`, `api-key`
:::

## 请求地址

```bash
/api/app/v1/machine/standaloneUpdateStock
```

## 参数说明

| 字段名               | 类型     | 是否必须 | 描述                            |
|-------------------|--------|------|-------------------------------|
| current_inventory | number | ✅    | 库存数量                          |
| code              | number | ✅    | 货道编号                          |
| addr              | number | ✅    | 板卡地址                          |
| inventory         | number | ✅    | 货道容量                          |
| product_id        | number | -    | 产品 ID（非必传）<br />如果传值，则不考虑货道编号 |

💡 `product_id` , `code` 传值只能使用一个。

## 请求示例

```json
{
  "data": [
    {
      "current_inventory": 10,
      "code": "000",
      "addr": 1,
      "inventory": 10,
      "product_id": 1
    },
    {
      "current_inventory": 10,
      "code": "000",
      "addr": 1,
      "inventory": 10
    }
  ]
}
```

## 请求回参（成功状态码：200）

| 字段名         | 类型     | 是否必须 | 描述            |
|-------------|--------|------|---------------|
| _request_id | string | ✅    | 请求 id         |
| code        | number | ✅    | 1：处理成功，0：处理失败 |
| count       | number | ✅    | 0 或 更新记录数量    |
| data        | array  | ✅    | 空数组（固定值）      |
| msg         | string | ✅    | success（固定值）  |

```json
{
  "_request_id": "2d216506-a498-4fcf-a8e4-f51065021d8c",
  "code": 1,
  "count": 0,
  "data": [],
  "msg": "success"
}
```

## 请求失败（成功状态码：400）

| 字段名         | 类型     | 是否必须 | 描述            |
|-------------|--------|------|---------------|
| _request_id | string | ✅    | 请求 id         |
| code        | number | ✅    | 1：处理成功，0：处理失败 |
| data        | array  | ✅    | 空数组（固定值）      |
| msg         | string | ✅    | success（固定值）  |

```json
{
  "_request_id": "2dda2bdd-7d0b-4686-84a0-0cced2acd18c",
  "code": 0,
  "data": [],
  "msg": "request data is empty"
}
```
