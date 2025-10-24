# 客户端推送 摘要

## Header 参数说明

| 字段名            | 类型     | 是否必须 | 描述                      |
|----------------|--------|------|-------------------------|
| api-machine-no | string | ✅    | 设备编码，8 位定长数字字符串         |
| api-key        | string | ✅    | 签名：MD5(设备编号+app key) 小写 |

💡 `app_key` 获取方式，通过 查询 Machine 获取

示例：

```json
{
  "machine": {
    "id": 10009,
    "name": "卖水啊",
    "client_id": "",
    "machine_no": "16327138",
    "password": "",
    "purchase_limit": 3,
    "timezone": "Asia/Shanghai",
    "merchant": {
      "id": 10000,
      "title": "鼎商云商城",
      "keywords": "鼎商云商城",
      "description": "鼎商云商城",
      "config": {
        "debug": true,
        "is_dev": true,
        "appid": "-",
        "app_secret": "-",
        "app_key": "kva",
        "timezone": "Asia/Shanghai",
        "tax_enabled": true
      }
    },
    "is_online": true,
    "status": "OPERATIONAL"
  }
}
```
