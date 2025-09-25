# 17. 定时开关机

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 请求示例

```json
{
  "power_on": "",
  "power_off": "",
  "weekdays": []
}
```

## 参数说明

| 字段名    | 默认值                | 是否必须 | 描述     |
| --------- | --------------------- | -------- | -------- |
| power_on  | "yyyy-mm-dd HH:mm:ss" | -        | 开机时间 |
| power_off | "yyyy-mm-dd HH:mm:ss" | -        | 关机时间 |
| weekdays  | [1,0,0,0,0,0,0]       | -        |          |

### `weekdays` 传值时，为重复定时开关机

- 格式为定长 7 位数组，取值为：1/0，从星期一直到星期日，1 表示开机，0 表示关机。
- `power_on` 格式为: `HH:mm:ss`
- `power_off` 格式为: `HH:mm:ss`

### `weekdays` 为空数组，为一次性定时开关机

- `power_on` 格式为: `yyyy-mm-dd HH:mm:ss`
- `power_off` 格式为: `yyyy-mm-dd HH:mm:ss`
