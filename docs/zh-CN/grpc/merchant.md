# 3. 商户信息

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 返回结果

```json
{
  "data": {
    "id": "10000",
    "title": "鼎商云商城",
    "keywords": "鼎商云商城",
    "description": "鼎商云商城",
    "status": "APPROVED",
    "created_at": "2024-04-18 07:48:27",
    "logo": "https://dash.awish.vip/storage/BdM2H1tkuD/1e60370a-b097-4665-ad36-704cb4ba8363.png",
    "verified_at": "2024-04-18 07:48:54",
    "expired_at": "2030-04-18 07:48:54",
    "config": {
      "debug": true,
      "is_dev": true,
      "appid": "dsaaa73cee5b4efce9",
      "app_key": "kva",
      "timezone": "Asia/Shanghai",
      "tax_enabled": false
    }
  }
}
```

### 配置信息(config)

| 字段名         | 默认值   | 描述         |
|-------------|-------|------------|
| id          | 1     | 主键         |
| debug       | false | 调试模式       |
| is_dev      | false | 开发模式       |
| appid       | -     | 商户 APP ID  |
| app_key     | -     | 商户 APP KEY |
| timezone    | -     | 时区         |
| tax_enabled | false | 是否启用税费     |

### 商户信息(merchant)

| 字段名         | 默认值 | 描述      |
|-------------|-----|---------|
| id          | 1   | 主键      |
| title       | -   | 商户名称    |
| keywords    | -   | 商户关键词   |
| description | -   | 商户描述    |
| logo        | -   | 商户 Logo |
| status      | -   | 商户状态    |
| created_at  | -   | 创建时间    |
| verified_at | -   | 审核时间    |
| expired_at  | -   | 过期时间    |
| config      | -   | 商户配置信息  |
