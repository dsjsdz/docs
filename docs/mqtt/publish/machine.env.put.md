# 5. ENV 上报

:::tip
统一推送主题：`/server/app`
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "000",
  "method": "client.machine.env.put",
  "sign": "E8B8A32274EA1EA14A2348A546C6AB98",
  "client_id": "4506173",
  "app_version": "2.3.0",
  "android_version": "12",
  "java_version": "1.8.0_301",
  "sdk_version": "31",
  "device_model": "SCM-BOX-2024",
  "manufacturer": "SCMTech",
  "serial_no": "ABC1234567890",
  "screen_width": "1920",
  "screen_height": "1080",
  "brightness": "80",
  "volume": "60",
  "language": "zh_CN",
  "status": "0"
}
```

## 参数说明

| 字段名          | 默认值                 | 是否必须 | 描述                                                                          |
| --------------- | ---------------------- | -------- | ----------------------------------------------------------------------------- |
| timestamp       | -                      | ✅       | 当前时间戳(秒级)                                                              |
| machine_id      | -                      | ✅       | 设备 id(主键)                                                                 |
| method          | client.machine.env.put | ✅       | MQTT 方法名                                                                   |
| sign            | -                      | ✅       | 签名字符串                                                                    |
| app_version     | -                      | ✅       | APP 版本号                                                                    |
| android_version | -                      | ✅       | 安卓板卡版本，如 7.1.2                                                        |
| java_version    | -                      | ✅       | Java 版本，如 1.8.0_301                                                       |
| sdk_version     | -                      | ✅       | SDK 版本号                                                                    |
| device_model    | -                      | ✅       | 设备编号，如 zc-3288                                                          |
| manufacturer    | -                      | ✅       | 板卡品牌，如 zc                                                               |
| serial_no       | -                      | ✅       | 板卡系列号，如 ABC1234567890                                                  |
| screen_width    | -                      | ✅       | 屏幕宽度                                                                      |
| screen_height   | -                      | ✅       | 屏幕高度                                                                      |
| brightness      | "80"                   | ✅       | 屏幕亮度百分比（0~100）                                                       |
| volume          | "60"                   | ✅       | 当前音量百分比（0~100）                                                       |
| language        | zh_CN                  | ✅       | APP 语言，eg: zh_CN, zh_HK, en_US, <Badge type="danger" text="v1.5.0 新增" /> |
| client_id       | -                      | ✅       | 设备编码，即 `machine_no`                                                     |
| status          | 0                      | ✅       | 处理状态，默认：0                                                             |

💡 注意：在登录后台的时候会推送一次，后续在重启时候触发
