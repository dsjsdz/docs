# 签名校验

假定你有以下对象(Object)参数, 使用 a-z 排序(字典序) 对对象进行排序(需要过滤空值)。

```json
{
  "x": "*****",
  "y": "1713249776",
  "z": "xxxx"
}
```

排序后按照 (key&value)进行字符串拼接，其中 xxx 表示任意对象(Object)参数key

#### 生成字符串如下:

```
x=xxxx&y=1713249776&z=xxx
```

#### 在开发者中心找到 `AppKey` 商户ID

![merchant.png](/images/appid.jpg)

#### 拼接商户  `AppKey` ID

```
x=xxxx&y=1713249776&z=xxx&key={AppKey}
```

#### 并使用 `md5`进行编码且转成大写字符串，得到 `sign`

```
sign: 4F82D7E4C7B3EAB43CAF9A482A7A8FB2
```

封装的对象如下:

```json
{
  "video_url": "https://dash.awish.vip/storage/p50v9ggY/7c4a2139-38fc-4e42-933a-57ccd841e5db.jpg",
  "machine_id": "10003",
  "view_type": "0",
  "method": "client.ads.push",
  "id": "10",
  "expired_at": "0",
  "client_id": "16327132",
  "sign": "354D2CA0D6173F088E6993DFE2A11D5E",
  "timestamp": "1759112028",
  "title": "abc",
  "is_visible": "0",
  "cover_image": "https://dash.awish.vip/storage/p50v9ggY/7c4a2139-38fc-4e42-933a-57ccd841e5db.jpg"
}
```

#### 将以上对象进行 base64 编码，可得到 `Payload`

```base64
eyJ2aWRlb191cmwiOiJodHRwczovL2Rhc2guYXdpc2gudmlwL3N0b3JhZ2UvcDUwdjlnZ1kvN2M0YTIxMzktMzhmYy00ZTQyLTkzM2EtNTdjY2Q4NDFlNWRiLmpwZyIsIm1hY2hpbmVfaWQiOiIxMDAwMyIsInZpZXdfdHlwZSI6IjAiLCJtZXRob2QiOiJjbGllbnQuYWRzLnB1c2giLCJpZCI6IjEwIiwiZXhwaXJlZF9hdCI6IjAiLCJjbGllbnRfaWQiOiIxNjMyNzEzMiIsInNpZ24iOiIzNTREMkNBMEQ2MTczRjA4OEU2OTkzREZFMkExMUQ1RSIsInRpbWVzdGFtcCI6IjE3NTkxMTIwMjgiLCJ0aXRsZSI6ImFiYyIsImlzX3Zpc2libGUiOiIwIiwiY292ZXJfaW1hZ2UiOiJodHRwczovL2Rhc2guYXdpc2gudmlwL3N0b3JhZ2UvcDUwdjlnZ1kvN2M0YTIxMzktMzhmYy00ZTQyLTkzM2EtNTdjY2Q4NDFlNWRiLmpwZyJ9
```

[在线解析base64编码](https://tool.chinaz.com/tools/base64.aspx)

## 开源库

Kotlin

- [signature](https://central.sonatype.com/artifact/io.github.cakioe/signature)
- [项目地址](https://github.com/cakioe/signature)

## 注意事项

::: tip

``sign`` 是不参与排序的！不参与排序的！不参与排序的！
::: code-group

- 参数名ASCII码从小到大排序（字典序）
- 如果参数的值为空不参与签名
- 参数名区分大小写
- sign参数不参与签名，将生成的签名与传参中的sign值作校验

- 可参考 [微信支付文档的验签算法](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3)
- 亦可 [使用微信验签在线工具测试生成的签名是否正确](https://pay.weixin.qq.com/wiki/tools/signverify/)

