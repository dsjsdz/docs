# 6. 今日销售

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 返回结果

```json
{
  "data": [
    {
      "id": "20107",
      "machine_id": "1",
      "date": "2025-09-03",
      "total_amount": "0.00",
      "total_orders": "0",
      "unpaid_count": "0",
      "paid_count": "0"
    }
  ]
}
```

## 字段信息

| 字段名          | 默认值 | 描述       |
|--------------|-----|----------|
| id           | 1   | 主键       |
| machine_id   | 1   | 设备 id    |
| date         | -   | 日期(最近一期) |
| total_amount | -   | 总金额      |
| total_orders | -   | 总订单数     |
| unpaid_count | -   | 未支付订单数   |
| paid_count   | -   | 已支付订单数   |

