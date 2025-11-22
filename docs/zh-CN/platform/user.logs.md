# 1.3 登录日志

显示当前已登录用户近 20 条登录日志

![logs](/images/user-logs.png){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

## 示例

```json
[
  {
    "id": 409,
    "login_at": "2025-10-24 15:20:42",
    "logout_at": null,
    "ip": "38.71.127.41",
    "city": "Laguna Verde",
    "country": "HK",
    "login_type": "PASSWORD"
  },
  {
    "id": 395,
    "login_at": "2025-10-20 16:35:37",
    "logout_at": "2025-10-20 16:35:48",
    "ip": "38.71.127.41",
    "city": "Laguna Verde",
    "country": "HK",
    "login_type": "GOOGLE"
  }
]
```

## 参数说明

| 字段名     | 描述      | 是否必须 |
| ---------- | --------- | -------- |
| login_at   | 登录时间  | ✅       |
| ip         | IP 地址   | ✅       |
| city       | 城市      | ✅       |
| country    | 国家/地区 | ✅       |
| login_type | 登录方式  | ✅       |
| logout_at  | 退出时间  | -        |
