# 回调内容

:::tip
在出货成功或失败后，根据订单存在的 `notify_url` 进行通信，将结果推送到指定目标地址。

请求方式 `post`，商户端在收到请求后，需要正确响应（设置状态码 200 或者 其他）。
:::

我们将推送有如下内容: 类型为 `map[string]any{}`, 非固定对象。

```
{
  "deliver_status": "0",
  "error_msg": "Slave Comm Error",
  "floor_status": "3",
  "method": "device.delivery.response",
  "order_id": 60,
  "record_id": 78
}
```

| 参数      | 类型   | 说明                             | 必传 |
| --------- | ------ | -------------------------------- | ---- |
| method    | string | 固定(`device.delivery.response`) | ✓    |
| order_id  | int    | 订单id                           | ✓    |
| record_id | int    | 详单id                           | ✓    |


### <Badge type="danger" text="deliver_status" /> 出货状态

| 取值 | 说明     |
| ---- | -------- |
| 0    | 出货失败 |
| 1    | 出货成功 |


### <Badge type="danger" text="floor_status" /> 货道状态

| 取值 | 说明         |
| ---- | ------------ |
| 0    | 货道不存在   |
| 1    | 正常         |
| 2    | 卡货         |
| 3    | 电机故障     |
| 47   | 通讯串口超时 |


### <Badge type="danger" text="fail_reason" /> 失败原因，出货成功则为空

举例: 

| 取值             | 说明       |
| ---------------- | ---------- |
| Slave Comm Error | 从机不存在 |


## 手动推送回调

在设备详情页，依次点击 「商品信息」 - 「交易记录」

![image](/images/7076E860EFC6C6525761110AF1485E11.png)

点击「查看明细』

![image](/images/732BE1BC06D7BBCCD0AF6A4490B330FA.png)

仅支持已支付订单(包含 取货码订单)。
 