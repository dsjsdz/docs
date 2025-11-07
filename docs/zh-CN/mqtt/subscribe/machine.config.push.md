# 9. 设备配置更新

服务端 -> 客户端

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "timestamp": "1758849511",
  "language": "zh_CN",
  "languages": "zh_CN,zh_HK",
  "standby_ads_autoplay": "1",
  "price_thousands": "1",
  "sign": "B5AB6EDA39136134377976F413A778D1",
  "price_digits": "2",
  "idle_timeout": "60",
  "payment_wait_timeout": "180",
  "standby_ads_enabled": "1",
  "price_line": "1",
  "machine_id": "10009",
  "method": "client.machine.config.push"
}
```

## 参数说明

| 字段名                                                | 默认值                        | 是否必须 | 描述                             |
|----------------------------------------------------|----------------------------|------|--------------------------------|
| timestamp                                          | -                          | ✅    | 当前时间戳(秒级)                      |
| machine_id                                         | -                          | ✅    | 设备 id(主键)                      |
| method                                             | client.machine.config.push | ✅    | MQTT 方法名                       |
| price_digits                                       | 2                          | -    | 小数位数                           |
| price_thousands                                    | 1                          | -    | 使用千分位<br /> 1: 使用, 0: 不使用      |
| price_line                                         | 1                          | -    | 划线价<br /> 1: 使用, 0: 不使用        |
| language                                           | zh_CN                      | -    | 语言                             |
| languages<Badge type="danger" text="v1.2.20 新增" /> | zh_CN,zh_HK                | -    | App可用语言列表                      |
| idle_timeout                                       | 60                         | -    | 空闲超时(秒)进入播放广告<br /> 取值: 30-180 |
| payment_wait_timeout                               | 180                        | -    | 支付超时(秒)关闭支付<br /> 取值: 30-180   |
| standby_ads_enabled                                | 1                          | -    | 启用待机广告<br /> 1: 开启, 0: 不开启     |
| standby_ads_autoplay                               | 1                          | -    | 自动播放待机广告<br /> 1: 开启, 0: 不开启   |
| sign                                               | -                          | ✅    | 签名字符串                          |
| client_id                                          | -                          | ✅    | 设备编码，即 `machine_no`            |
| status                                             | 0                          | ✅    | 处理状态，默认：0                      |

💡 `standby_ads_enabled` 待机广告禁用时，不自动进入待机广告。
