# 回调内容

假定有如下情况，选择性进行推送回调内容。 <Badge type="danger" text="v1.2.4" />

+ 记录不存在，即 `orders.notify_url` 未查询到对应记录。
+ 出货状态不合法，即 `1`, `0` 值之外的其他值。
+ 订单不存在，推送
+ 订单未支付，推送

<hr />

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

| 取值             | 说明                                                        |
| ---------------- | ----------------------------------------------------------- |
| Slot Invalid     | 货道无效                                                    |
| Load No Current  | 货道电机/锁回路中没有电流，可能插头没有插好，也可能是线断了 |
| Over Current     | 货道电机短路，一般是电流过大                                |
| Feedback Error   | 货道电机可以转动，没有反馈信号(电机反馈没接好)              |
| Dlv Detect Error | 开启掉货检测，有商品在升降台或者光眼故障                    |
| Goods are Stuck  | 掉货检测没有检测到商品(卡货)                                |
| Slot Type Error  | 货道类型设置不匹配                                          |
| Slave Comm Error | 从设备通信故障(没接好线或者地址设置错误)                    |
| Lift Comm Error  | 升降控制板，通信超时                                        |
| Lift Limit Up    | 升降台上限位故障                                            |
| Lift Goods       | 升降台有物品，无法出货                                      |
| Lift Limit Dw    | 升降系统下限位开关故障                                      |
| VerMo break      | 升降电机不通电(没有电流，检测线路)                          |
| VerMo short      | 升降电机短路(过载，线路短路或电机烧坏)                      |
| VerMo Encode     | 升降电机编码器故障(检查电机反馈线或者电机损坏)              |

## 手动推送回调

在设备详情页，依次点击 「商品信息」 - 「交易记录」

![image](/images/7076E860EFC6C6525761110AF1485E11.png)

点击「查看明细』

![image](/images/732BE1BC06D7BBCCD0AF6A4490B330FA.png)

仅支持已支付订单(包含 取货码订单)。
