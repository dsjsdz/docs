# 16. 设备控制

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 请求示例

```json
{
  "method": "REBOOT"
}
```

## 参数说明

| 字段名 | 默认值 | 是否必须 | 描述                         |
| ------ | ------ | -------- | ---------------------------- |
| method | REBOOT | -        | REBOOT: 重启, SHUTDOWN: 关机 |
