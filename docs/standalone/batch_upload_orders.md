# 2. 批量上传订单

:::tip
统一Header 参数：`api-machine-no`, `api-key`
:::

## 请求地址

```curl
/api/app/v1/batchUploadOrders
```

## 出货日志 delivery_logs

| 字段名            | 类型     | 是否必须 | 描述                                                                                                  |
|----------------|--------|------|-----------------------------------------------------------------------------------------------------|
| code           | string | ✅    | 货道名称，如：A01                                                                                          |
| delivery_no    | string | ✅    | 订单号+详单 id+下标索引                                                                                      |
| delivery_index | number | ✅    | 下标索引（默认从 0 开始，直到达到 quantity）                                                                        |
| status         | number | ✅    | 出货状态 <br />-1: 待掉货 <br />0: 出货失败 <br />1: 出货成功 <br />2: 已取消 <br />3: 出货中 <br />4: 已取货 <br />5: 出货超时 |
| fail_reason    | string | ✅    | 失败信息                                                                                                |
| created_at     | string | -    | 出货时间：2025-08-06 18:45:00（使用UTC时区时）                                                                  |
| updated_at     | string | -    | 更新时间：2025-08-06 18:45:00（使用UTC时区时）                                                                  |

## 详单 records

| 字段名           | 类型     | 是否必须 | 描述                 |
|---------------|--------|------|--------------------|
| product_id    | number | ✅    | 产品 ID              |
| quantity      | number | ✅    | 下单数量               |
| price         | string | ✅    | 价格                 |
| tax_amount    | string | ✅    | 税额                 |
| delivery_logs | array  | ✅    | 出货日志，长度等于 quantity |

## 订单 order

| 字段名            | 类型     | 是否必须 | 描述                                                                                                                                                                |
|----------------|--------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| date           | string | ✅    | 产品 ID                                                                                                                                                             |
| trade_id       | string | ✅    | 下单日期：2025-08-06                                                                                                                                                   |
| title          | string | ✅    | 订单编号，25070814420439119 <br />年月日时分秒+随机时间戳                                                                                                                         |
| amount         | string | ✅    | 总价格（含税）                                                                                                                                                           |
| trade_type     | number | ✅    | 固定值：2，即售卖机 APP 订单                                                                                                                                                 |
| ip             | string | -    | 可空                                                                                                                                                                |
| address        | string | -    | 可空                                                                                                                                                                |
| created_at     | string | ✅    | 下单时间：2025-08-06 18:45:00                                                                                                                                          |
| updated_at     | string | ✅    | 更新时间：2025-08-06 18:45:00                                                                                                                                          |
| pay_time       | string | ✅    | 支付时间：2025-08-06 18:45:00                                                                                                                                          |
| status         | number | ✅    | 0：未支付<br />1：支付成功<br />2：转入退款<br />3：已关闭（用户侧关闭）<br />4：已撤销（付款码支付）<br />5：用户支付中（付款码支付）<br />6：支付失败(其他原因，如银行返回失败)<br />7：取货码订单<br />8：测试订单<br />9：超时关闭（超过关闭时间，自动关闭） |
| pickup_code_id | number | ✅    | 取货码 ID                                                                                                                                                            |
| payment_id     | number | ✅    | 支付类型<br />0：未知方式<br />1：微信支付<br />2：支付宝支付<br />3：投币（硬币）<br />4：纸币<br />5：POS 机刷卡<br />6：纸币 + 硬币<br />7：网上支付（如第三方在线支付）<br />8：余额支付（如用户账户余额）                        |
| tax_total      | string | ✅    | 总税额                                                                                                                                                               |
| records        | array  | ✅    | 详单                                                                                                                                                                |

## 请求示例

```json
[
  {
    "date": "2025-08-06",
    "trade_id": "25070814420439119",
    "title": "订单标题 C",
    "amount": "150.00",
    "trade_type": 1,
    "ip": "10.0.0.1",
    "address": "上海市浦东新区",
    "created_at": "2025-08-06 18:45:00",
    "updated_at": "2025-08-06 18:45:00",
    "pay_time": "2025-08-06 18:45:00",
    "status": 2,
    "pickup_code_id": 0,
    "payment_id": 3,
    "tax_total": "15.00",
    "records": [
      {
        "product_id": 303,
        "quantity": 3,
        "price": "50.00",
        "tax_amount": "5.00",
        "delivery_logs": [
          {
            "code": "B2",
            "delivery_no": "D999",
            "delivery_index": 1,
            "status": 1,
            "fail_reason": ""
          },
          {
            "code": "B2",
            "delivery_no": "D999",
            "delivery_index": 2,
            "status": 0,
            "fail_reason": "卡货"
          }
        ]
      }
    ]
  }
]
```

## 请求回参（成功状态码：200）

| 字段名         | 类型     | 是否必须 | 描述    |
|-------------|--------|------|-------|
| _request_id | string | ✅    | 请求 id |

```json
{
  "_request_id": "2d216506-a498-4fcf-a8e4-f51065021d8c"
}
```

## 请求失败（成功状态码：400）

| 字段名         | 类型     | 是否必须 | 描述           |
|-------------|--------|------|--------------|
| _request_id | string | ✅    | 请求 id        |
| msg         | string | ✅    | success（固定值） |

```json
{
  "_request_id": "2dda2bdd-7d0b-4686-84a0-0cced2acd18c",
  "msg": "request data is empty"
}
```

💡 注：请求参数数组为空，或数组长度超过 50 则拒绝处理。

- 出货日志可包含开门日志。
