# 11. 更新商品编码slug

:::tip
统一推送主题：`/server/app`
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "10009",
  "method": "client.goods.slug.put",
  "sign": "AB12CD34EF56AB78CD90EF12AB34CD56",
  "client_id": "16327138",
  "good_id": "1",
  "slug": "COLA_330_NEW",
  "is_returnable": "1",
  "status": "0"
}
```

## 参数说明

| 字段名           | 默认值                   | 是否必须 | 描述                  |
|---------------|-----------------------|------|---------------------|
| timestamp     | -                     | ✅    | 当前时间戳(秒级)           |
| machine_id    | -                     | ✅    | 设备 id(主键)           |
| method        | client.goods.slug.put | ✅    | MQTT 方法名            |
| good_id       | -                     | ✅    | 商品 id               |
| slug          | -                     | ✅    | 新商品编码               |
| is_returnable | 1                     | -    | 是否支持退回（0=否，1=是）     |
| sign          | -                     | ✅    | 签名字符串               |
| client_id     | -                     | ✅    | 设备编码，即 `machine_no` |
| status        | 0                     | ✅    | 处理状态，默认：0           |

💡 注意：`is_returnable` 非必填
