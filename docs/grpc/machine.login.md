# 1. 设备登录

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 请求示例

```json
{
  "input": "eyJwYXNzd29yZCI6IjEyMzQ1Njc4IiwidXNlcm5hbWUiOiIxNjMyNzEyNyIsInRpbWVzdGFtcCI6IjE3NTg3ODA0NjkiLCJzaWduIjoiOEE2MDI5NTA0QjlFNEUxNjk3RTY4NzU0MTNCOTcwQkYifQ=="
}
```

## 参数说明

| 字段名 | 默认值 | 是否必须 | 描述          |
| ------ | ------ | -------- | ------------- |
| input  | -      | ✅       | base64 字符串 |

### base64 字符串解码

```json
{
  "password": "12345678",
  "username": "16327127",
  "timestamp": "1758780469",
  "sign": "8A6029504B9E4E1697E6875413B970BF"
}
```

### 参数说明(base64 解码)

| 字段名    | 默认值 | 是否必须 | 描述         |
| --------- | ------ | -------- | ------------ |
| username  | -      | ✅       | 设备编号     |
| password  | -      | ✅       | 设备密码     |
| timestamp | -      | ✅       | 时间戳(秒级) |
| sign      | -      | ✅       | 签名         |

💡 `sign` 的计算：签名`app_key` 请使用 商户`appid`

## 返回结果

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiY29tcGFueSI6ImF3aXNoIiwicm9sZSI6Im1hY2hpbmUiLCJleHAiOjE3NTk5MDQ0ODN9.Wnl2nSmUZFcky2nIsZEpoBb_tPrPqeE7oY-Fa--yyKs"
}
```

| 字段名 | 默认值 | 是否必须 | 描述       |
| ------ | ------ | -------- | ---------- |
| token  | -      | ✅       | 登录 token |

## 错误说明

| 信息                       | 描述                 |
| -------------------------- | -------------------- |
| invalid credential         | input 数据格式不正确 |
| missing sign               | input 中确实 sign    |
| invalid signature          | sign 校验失败        |
| missing username           | 设备编号参数丢失     |
| missing password           | password 参数丢失    |
| failed to get machine      | machine(机器)不存在  |
| machine is not serial port | 非串口通信           |
| auth credentials disabled  | 不允许获取 token     |
| failed to encrypt password | 密码解析失败         |
| invalid password           | 无效的密码           |
