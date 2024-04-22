# 获取产品列表

接口不做缓存处理，若有特殊场景: 秒杀、同设备多单抢购等可以定制。

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/products
请求参数(Argsments): payload: base64code
```

### <Badge type="danger" text="Payload" />

| 参数        | 类型   | 说明                        | 必传 |
| ----------- | ------ | --------------------------- | ---- |
| machine_no  | string | 设备编号(定长8位数字字符串) | ✓    |
| page        | int    | 分页, 默认: 1               | ✓    |
| per_page    | int    | 分页大小, 默认: 10          | -    |
| category_id | int    | 商品分类, 默认: 0, 即查所有 | -    |
| timestamp   | int    | 当前时间戳                  | ✓    |

[参数加密](access_sign.md)

## 对接示例

我们为您提供了2种语言 `GO`,`PHP` 的对接示例，如果您需要其他语言示例，请 [联系我们](support.md)。

::: tip

`{url}`默认为提供服务的地址
::: code-group

```sh [GO]
package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {	
    json := []byte(`{"payload": "eyJjYXRlZ29yeV9pZCI6MSwibWFjaGluZV*****iLCJwYWdlIjoxLCJwZXJfcGFnZSI6MTAsInNpZ24iOiIyMTlDMTZCREY0MkQzNjY4RkY1Qjg1QTMwRkU5N0Y1NCIsInRpbWVzdGFtcCI6IjE3MTMyNTU0MTEifQ=="}`)
	body := bytes.NewBuffer(json)
	
	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/products", body)

	// Headers
	req.Header.Add("Appid", "ds*******")
	req.Header.Add("AppSecret", "********")

	parseFormErr := req.ParseForm()
	if parseFormErr != nil {
	  fmt.Println(parseFormErr)    
	}

	// Fetch Request
	resp, err := client.Do(req)
	
	if err != nil {
		fmt.Println("Failure : ", err)
	}

	// Read Response Body
	respBody, _ := io.ReadAll(resp.Body)

	// Display Results
	fmt.Println("response Status : ", resp.Status)
	fmt.Println("response Headers : ", resp.Header)
	fmt.Println("response Body : ", string(respBody))
}
```

```php [PHP]
<?php

// Include Guzzle. If using Composer:
// require 'vendor/autoload.php';

use GuzzleHttp\Pool;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

$client = new Client();

$request = new Request(
        "POST",
        "{url}/api/openapi/v1/products",
        [
            "Appid" => "ds*******************",
            "AppSecret" => "*******************",
        ],
        "{\"payload\":\"eyJjYXRlZ29yeV9pZCI6MSwibWFjaGluZV9ubyI6Ijg2NjgzODA2MjUzNzU0OTIiLCJwYWdlIjoxLCJwZXJ*****sInRpbWVzdGFtcCI6IjE3MTMyNTU0MTEifQ==\"}");

$response = $client->send($request);
echo "Response HTTP : " . $response->getStatusCode();
```

:::

## 请求结果(成功)

将以上 `Appid`、`AppSecret` 进行修改成您商户的内容，运行结果:

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "data": [
      {
        "id": 20,
        "category": {
          "id": 2,
          "title": "第二层"
        },
        "good": {
          "name": "可乐",
          "description": "可乐",
          "thumb": "{url}/storage/BkGv6Ij4Am/80b306a1-52db-4694-8de9-45181cc590be.png",
          "price": "0.10",
          "original_price": "0.00",
          "content": "<p>可口可乐</p>"
        },
        "channel": {
          "name": "A20"
        }
      }
    ],
    "total": 6,
    "current_page": 1,
    "last_page": 1,
    "per_page": 10
  }
}
```

:::tip
注意: 因接口返回的字段使用 ``protobuf``, 部分字段值为空 或 false 时，默认不传
:::

| 参数         | 类型   | 说明     | 必传 |
| ------------ | ------ | -------- | ---- |
| data         | object | 产品内容 | ✓    |
| total        | int    | 总记录数 | ✓    |
| current_page | int    | 当前页码 | ✓    |
| last_page    | int    | 最后一页 | ✓    |
| per_page     | int    | 分页数   | ✓    |

### 查询结果为空时，data 默认返回空数组

```json
{
  "code": 0,
  "message": "ok",
  "data": []
}
```

## 商品项说明

```json
{
  "id": 20,
  "category": {
    "id": 2,
    "title": "第二层"
  },
  "good": {
    "name": "可乐",
    "description": "可乐",
    "thumb": "{url}/storage/BkGv6Ij4Am/80b306a1-52db-4694-8de9-45181cc590be.png",
    "price": "0.10",
    "original_price": "0.00",
    "content": "<p>可口可乐</p>"
  },
  "channel": {
    "name": "A20"
  }
}
```

<table>
  <tr>
    <td colspan="2">参数</td>
    <td>类型</td>
    <td>说明</td>
    <td>必传</td>
  </tr>
  <tr>
    <td colspan="2">id</td>
    <td>int</td>
    <td>产品ID</td>
    <td>✓</td>
  </tr>
  <tr>
    <td rowspan="3">category</td>
    <td>-</td>
    <td>object</td>
    <td>商品分类</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>id</td>
    <td>int</td>
    <td>分类ID</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td>分类名称</td>
    <td>✓</td>
  </tr>
  <tr>
    <td rowspan="8">good</td>
    <td>-</td>
    <td>object</td>
    <td>产品内容</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>名称</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td>介绍</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>thumb</td>
    <td>string</td>
    <td>封面</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>price</td>
    <td>string</td>
    <td>价格</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>original_price</td>
    <td>string</td>
    <td>原价</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>content</td>
    <td>string</td>
    <td>富文本内容</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>media</td>
    <td>array</td>
    <td>图片轮播图</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="2">channel</td>
    <td>-</td>
    <td>object</td>
    <td>货道信息</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>货道号</td>
    <td>✓</td>
  </tr>
</table>

## 请求结果(失败)

根据返回的 [错误代码](error_code.md) 进行排查:

```json
{
  "code": 30002,
  "message": "设备已离线",
  "data": {}
}
```