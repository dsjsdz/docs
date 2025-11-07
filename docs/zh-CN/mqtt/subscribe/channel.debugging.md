# 5. 设备测试（h5 发起）

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "10009",
  "method": "client.channel.debugging",
  "sign": "E8B8A32274EA1EA14A2348A546C6AB98",
  "client_id": "16327138",
  "floor_type": "1",
  "is_lp": "0",
  "is_dc": "1",
  "code": "12",
  "addr": "3",
  "order_type": "test",
  "status": "0"
}
```

## 参数说明

| 字段名        | 默认值                      | 是否必须 | 描述                                   |
|------------|--------------------------|------|--------------------------------------|
| timestamp  | -                        | ✅    | 当前时间戳(秒级)                            |
| machine_id | -                        | ✅    | 设备 id(主键)                            |
| method     | client.channel.debugging | ✅    | MQTT 方法名                             |
| floor_type | 1                        | ✅    | 货道类型, 1:弹簧电机 2:电磁锁 3:履带              |
| is_lp      | 0                        | ✅    | 升降台, 0: 无升降台 1: 有升降台                 |
| is_dc      | 0                        | ✅    | 掉货监测, 0: 无掉货监测 1: 有掉货监测              |
| code       | 0                        | ✅    | 货道号, 可对其 %100 取余                     |
| addr       | 1                        | ✅    | 板卡地址，取值范围：1-8                        |
| order_type | test                     | ✅    | 订单类型: `test` 表示测试订单, `normal` 表示正常订单 |
| sign       | -                        | ✅    | 签名字符串                                |
| client_id  | -                        | ✅    | 设备编码，即 `machine_no`                  |
| status     | 0                        | ✅    | 处理状态，默认：0                            |

💡 `order_type` 目前仅支持 `test` 类型，其它类型可拒绝处理，测试货道记录服务端不记录最终结果

本功能的使用场景是： 由 H5 网页发起 -> 服务端包装数据 -> Android 接收数据并处理
