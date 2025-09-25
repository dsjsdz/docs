# 4. 货币列表

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 返回结果

```json
{
  "data": [
    {
      "id": "1",
      "name": "Chinese Yuan",
      "code": "CNY",
      "symbol": "¥"
    },
    {
      "id": "2",
      "name": "United States Dollar",
      "code": "USD",
      "symbol": "$"
    },
    {
      "id": "3",
      "name": "Euro",
      "code": "EUR",
      "symbol": "€"
    },
    {
      "id": "4",
      "name": "Japanese Yen",
      "code": "JPY",
      "symbol": "¥"
    },
    {
      "id": "5",
      "name": "British Pound",
      "code": "GBP",
      "symbol": "£"
    },
    {
      "id": "6",
      "name": "Hong Kong Dollar",
      "code": "HKD",
      "symbol": "HK$"
    }
  ]
}
```

## 字段信息
 
| 字段名    | 默认值 | 描述   |
|--------|-----|------|
| id     | 1   | 主键   |
| name   | -   | 货币名称 |
| code   | -   | 货币代码 |
| symbol | -   | 货币符号 |
