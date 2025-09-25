# 7. 订单列表

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
      "order_records": [],
      "id": "53",
      "date": "2024-03-29",
      "amount": "0.02",
      "status": "PAY_SUCCESS",
      "is_free": false,
      "payment_id": "1",
      "machine_id": "1",
      "trade_id": "551995e24c3749879bd93a54ee941bb3",
      "title": "一号店铺 售卖机商品",
      "pay_time": "2024-03-29T20:01:37+08:00",
      "tax_total": "-",
      "pickup_code_id": "0"
    }
  ],
  "total": "15",
  "current_page": "1",
  "per_page": "20"
}
```

## 字段信息

| 字段名         | 默认值 | 描述      |
| -------------- | ------ | --------- |
| id             | 1      | 主键      |
| machine_id     | -      | 设备 id   |
| date           | -      | 日期      |
| amount         | -      | 金额      |
| status         | -      | 状态      |
| is_free        | -      | 是否免单  |
| payment_id     | -      | 支付 id   |
| trade_id       | -      | 交易 id   |
| title          | -      | 标题      |
| pay_time       | -      | 支付时间  |
| tax_total      | -      | 税费      |
| pickup_code_id | -      | 取货码 id |
| order_records  | -      | 订单记录  |
