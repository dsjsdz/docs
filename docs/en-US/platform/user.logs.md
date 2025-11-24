# 1.3 Login Logs

Displays the most recent 20 login logs of the currently logged-in user.

![logs](/images/user-logs.png){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

## Example

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

## Field Description

| Field Name     | Description      | Required |
| ---------- | --------- | -------- |
| login_at   | Login time  | ✅       |
| ip         | IP address   | ✅       |
| city       | City      | ✅       |
| country    | Country/Region | ✅       |
| login_type | Login method  | ✅       |
| logout_at  | Logout time  | -        |
