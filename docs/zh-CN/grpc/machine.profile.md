# 2. 设备信息

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 返回结果

```json
{
  "data": {
    "id": "1",
    "name": "鼎商测试1号",
    "merchant_id": "10000",
    "status": "OPERATIONAL",
    "is_online": true,
    "connect_type": 3,
    "machine_type": 1,
    "media_type": 0,
    "device_state": 1,
    "machine_no": "16327127",
    "pickup_code_enabled": false,
    "coupon_enabled": false,
    "free_purchase_enabled": false,
    "purchase_limit": "3",
    "timezone": "Asia/Shanghai",
    "cover_image": "",
    "contact": "寒少",
    "tel": "",
    "lng_lat": "116.549815,39.922273",
    "address": "未知",
    "qrcode": "",
    "currency": {
      "id": "1",
      "name": "Chinese Yuan",
      "code": "CNY",
      "symbol": "¥"
    },
    "config": {
      "id": "6",
      "price_digits": 2,
      "price_thousands": false,
      "price_line": false,
      "volume": 100,
      "brightness": 100,
      "language": "zh-CN",
      "app_version": "",
      "android_version": "",
      "java_version": "",
      "sdk_version": "",
      "device_model": "",
      "manufacturer": "",
      "serial_no": "",
      "screen_width": 0,
      "screen_height": 0,
      "network_type": "",
      "network_sim_iccid": "",
      "network_rssi": 0,
      "temperature": "0",
      "humidity": "0",
      "uptime_minutes_today": 0
    },
    "model": {
      "drivers": [
        {
          "is_dc": false,
          "is_lp": false,
          "floor_type": "1",
          "addr": "1",
          "driver_id": "5",
          "per_channel_capacity": "0",
          "total_channel_slots": "0",
          "lock_only": false
        },
        {
          "is_dc": false,
          "is_lp": false,
          "floor_type": "1",
          "addr": "2",
          "driver_id": "5",
          "per_channel_capacity": "0",
          "total_channel_slots": "0",
          "lock_only": false
        }
      ],
      "id": "1",
      "name": "60货道饮料机",
      "description": "60个货道",
      "updated_at": "",
      "has_lock_feature": false
    }
  }
}
```

### 驱动信息(drivers)

| 字段名                  | 默认值   | 描述                  |
|----------------------|-------|---------------------|
| is_dc                | false | 掉货检测                |
| is_lp                | false | 升降开启                |
| floor_type           | -     | 出货类型                |
| addr                 | -     | 地址                  |
| driver_id            | -     | 驱动 ID               |
| per_channel_capacity | -     | 每个货道容量              |
| total_channel_slots  | -     | 总货道数(已生成的货道，非板卡最大值) |
| lock_only            | false | 是否门锁(辅助货道时生效)       |

### 模型信息(model)

| 字段名              | 默认值   | 描述     |
|------------------|-------|--------|
| id               | 1     | 主键     |
| name             | -     | 掉货检测   |
| description      | -     | 升降开启   |
| updated_at       | -     | 升降开启   |
| has_lock_feature | false | 支持设置门锁 |

### 配置信息(config)

| 字段名                                          | 默认值   | 描述          |
|----------------------------------------------|-------|-------------|
| id                                           | 1     | 主键          |
| price_digits                                 | 2     | 小数位数        |
| price_thousands                              | false | 使用千分位       |
| price_line                                   | false | 划线价         |
| volume                                       | 100   | 音量          |
| brightness                                   | 100   | 亮度          |
| language                                     | zh_CN | 语言          |
| app_version                                  |       | APP 版本      |
| android_version                              |       | Android 版本  |
| java_version                                 |       | Java 版本     |
| sdk_version                                  |       | SDK 版本      |
| device_model                                 |       | 设备型号        |
| manufacturer                                 |       | 制造商         |
| serial_no                                    |       | 序列号         |
| screen_width                                 | 0     | 屏幕宽         |
| screen_height                                | 0     | 屏幕高         |
| network_type                                 |       | 网络类型        |
| network_sim_iccid                            |       | SIM 卡 ICCID |
| network_rssi                                 | 0     | 网络信号强度      |
| <b style="color: lightgreen">temperature</b> | -     | 温度          |
| <b style="color: lightgreen">humidity</b>    | -     | 湿度          |
| uptime_minutes_today                         |       | 今日运行时间(分钟)  |

### 货币信息(currency)

| 字段名    | 默认值 | 描述   |
|--------|-----|------|
| id     | 1   | 主键   |
| name   | -   | 货币名称 |
| code   | -   | 货币代码 |
| symbol | -   | 货币符号 |

### 机器信息(machine)

| 字段名                                             | 默认值 | 描述                  |
|-------------------------------------------------|-----|---------------------|
| id                                              | 1   | 主键                  |
| name                                            | -   | 机器名称                |
| merchant_id                                     | -   | 商户 ID               |
| status                                          | -   | 状态                  |
| is_online                                       | -   | 是否在线                |
| connect_type                                    | -   | 连接类型                |
| machine_type                                    | -   | 机器类型                |
| <s style="color: red">media_type</s>            | -   | 媒体类型(预留字段)          |
| device_state                                    | -   | 设备状态                |
| machine_no                                      | -   | 机器编号                |
| pickup_code_enabled                             | -   | 是否启用取货码             |
| <b style="color: lightgreen">coupon_enabled</b> | -   | 是否开启[折扣券、满减券、优惠码]功能 |
| free_purchase_enabled                           | -   | 是否启用免费购买            |
| purchase_limit                                  | -   | 购买限制                |
| timezone                                        | -   | 时区                  |
| cover_image                                     | -   | 封面图片                |
| contact                                         | -   | 联系人                 |
| tel                                             | -   | 联系电话                |
| lng_lat                                         | -   | 经纬度                 |
| address                                         | -   | 地址                  |
| qrcode                                          | -   | 二维码                 |
| <s style="color: red">temperature</s>           | -   | 温度, ps: 参考配置表       |
| <s style="color: red">humidity</s>              | -   | 湿度, ps: 参考配置表       |
