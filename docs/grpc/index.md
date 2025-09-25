# GRPC 摘要

proto 文件：[provider.proto](/provider.proto)

## 中间件错误说明

| 信息                              | 描述                     |
|---------------------------------|------------------------|
| appid is missing                | metadata没有设置appid      |
| merchant not found              | appid 没有找到与之匹配的商户      |
| Failed to call inner service：** | 请求的路径需要鉴权(不在白名单)       |
| token is missing                | metadata没有设置 token     |
| sub id is missing               | token没有携带合法的 sub id 字段 |
| permission denied for jwt role  | jwt role 非法            |
| failed to get machine           | machine(机器)不存在         |
