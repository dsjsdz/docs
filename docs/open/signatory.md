# 参数加密

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

在声明需要传参的请求api中，参数需要加密处理。

假定你有以下对象(Object)参数, 使用 a-z排序(字典序) 对对象进行排序(需要过滤空值)。

```json
{
  "machine_no": "*****",
  "timestamp": "1713249776",
  "xxxx": "xxxx"
}
```

排序后按照 (key&value)进行字符串拼接，其中 xxx 表示任意对象(Object)参数key

#### 生成字符串如下:

```
machine_no=xxxx&timestamp=1713249776&xxx=xxx
```

#### 在开发者中心找到 `merchant_id` 商户ID, 可从 [接口认证](auth.md) 查询得到。

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
ewogICJtYWNoaW5lX25vIjoiODY2ODM4MDYyNTM3NTQiLAogICJzaWduIjoiMTg1M0MzRUFBNDdERkRGOUUyQjQyRUUwMzA3MDNCNzYiLAogICJ0aW1lc3RhbXAiOiIxNzEzMjUwOTc0Igp9
```

[在线解析base64编码](https://tool.chinaz.com/tools/base64.aspx)

```json
{
  "machine_no": "86683806253754",
  "sign": "1853C3EAA47DFDF9E2B42EE030703B76",
  "timestamp": "1713250974"
}
```

> `machine_no` 一般为 定长8位字符串数字, 8位以上字符串数字为特殊商户保留设备编号

## 注意事项

::: tip

``sign`` 是不参与排序的！不参与排序的！不参与排序的！
::: code-group

+ 参数名ASCII码从小到大排序（字典序）
+ 如果参数的值为空不参与签名
+ 参数名区分大小写
+ sign参数不参与签名，将生成的签名与传参中的sign值作校验

> 可参考[微信支付文档的验签算法](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3)
> 亦可[使用微信验签在线工具测试生成的签名是否正确](https://pay.weixin.qq.com/wiki/tools/signverify/)
