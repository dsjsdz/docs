# 2.4 Developer Center

![merchant](/images/2025-11-24_154514.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

| Field     | Description      |
| --------- | ---------------- |
| AppId     | Developer ID     |
| AppSecret | Developer Secret |
| AppKey    | Merchant Key     |

These three fields can be used together in the [GRPC API](/zh-CN/grpc/) and [MQTT API](/zh-CN/mqtt/) 。

## Advanced Settings

![merchant](/images/2025-11-24_154552.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

## 1. Debug Mode

> When enabled, API calls can be made regardless of the device status (online or offline).

## 2. Tax Control

> When enabled, orders will calculate and display tax amounts in the order details.

## 3. Time Zone Settings

> When enabled, order-related dates will use the configured time zone. If the device also has a time zone set, the device time zone takes priority; otherwise, times will be displayed based on the UTC time zone.
