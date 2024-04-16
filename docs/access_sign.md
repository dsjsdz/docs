# 参数加密

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

在声明需要传参的请求api中，参数需要加密处理。

假定你有以下对象(Object)参数, 使用 a-z排序(字典序) 对对象进行排序(需要过滤空值)。

```json
{
  "machine_no":"*****",
  "timestamp":"1713249776",
  "xxxx":"xxxx"
}
```
排序后按照 (key&value)进行字符串拼接

#### 生成字符串如下: 
```
machine_no=xxxx&timestamp=1713249776&xxx=xxx
```

#### 在开发者中心找到 `merchant_id` 商户ID, 可从 [接口认证](authentication.md) 查询得到。

![merchant.png](/images/appid.jpg)

#### 拼接商户  `merchant_id` ID
```
machine_no=xxxx&timestamp=1713249776&xxx=xxx&key={merchant_id}
```

#### 并使用 `md5`进行编码且转成大写字符串，得到 `sign`
```
sign: 4F82D7E4C7B3EAB43CAF9A482A7A8FB2
```

封装的对象如下: 
```
{
  "machine_no":"*****",
  "timestamp":"1713249776",
  "xxxx":"xxxx",
  "sign":"4F82D7E4C7B3EAB43CAF9A482A7A8FB2"
}
```

#### 将以上对象进行 base64 编码，可得到 `Payload`
```
eyJtYWNoaW5lX25vIjoiODY2ODM4MDYyNTM3NTQ5MiIsInNpZ24iOiIxODUzQzNFQUE0N0RGREY5RTJCNDJFRTAzMDcwM0I3NiIsInRpbWVzdGFtcCI6IjE3MTMyNTA5NzQifQ==
```


## 注意事项

::: tip

``sign`` 是不参与排序的！不参与排序的！不参与排序的！
::: code-group