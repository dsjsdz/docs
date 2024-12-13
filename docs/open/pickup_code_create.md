# 取货码生成

按需生成取货码，或者 [一键生成所有取货码](#oneKey)。

:::tip
一键生成所有商品取货码, 即根据设备所有商品(默认一个取货码取一个商品)。
:::

## 按需生成(单产品)

`产品id` 可从 [产品列表](products.md) 获取产品得到，即 `id`;

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/pickup_codes
请求参数(Argsments): payload: base64code
注意: method 为固定值内容: pickup_code.product.id
```

### <Badge type="danger" text="Payload" />

| 参数              | 类型     | 说明                                                  | 必传 |
|-----------------|--------|-----------------------------------------------------|----|
| machine_no      | string | 设备编号(定长8位数字字符串)                                     | ✓  |
| method          | string | 固定值: `pickup_code.product.id`                       | ✓  |
| product_id      | string | 产品id                                                | ✓  |
| expired_at      | string | 过期时间(格式: '2024-12-24 13:00:00', 默认时区是GMT+8)，空值则长期有效 | ✓  |
| <s>quantity</s> | string | 取货码使用可以取货数量，默认1，取值范围: [1, 产品最大容量]                   | -  |
| code_length     | string | 取货码生成长度，默认6，取值范围: [6-10]                            | -  |
| count           | string | 生成取货码个数，默认1，取值范围: [1, 产品最大容量]                       | -  |
| timestamp       | string | 当前时间戳                                               | ✓  |

### <Badge type="danger" text="更新" />

> 过期时间(格式: '2024-12-24 13:00:00', 原默认时区是UTC)，现时区已经修复为: GTM+8，传递时间即存储时间。

#### 注意 (payload参数类型: 字符串)

因存在柜型不一致， `quantity` 目前仅为占用字段，传参不会被使用。

`expired_at`: 长期有效时，可不传参数，如果传参。

```json
{
  "code_length": "7",
  "count": "2",
  "expired_at": "2024-12-31 23:59:59",
  "machine_no": "********",
  "method": "pickup_code.product.id",
  "product_id": "1323442",
  "quantity": "1",
  "sign": "6C73E1EE2B92089A61DC721E72BB3139",
  "timestamp": "1714185061"
}
```

[参数加密](signatory.md)

## 对接示例

我们为您提供了2种语言 `GO`,`PHP` 的对接示例，如果您需要其他语言示例，请 [联系我们](../support.md)。

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
	json := []byte(`{"payload": "eyJjb2RlX2x******dGltZXN0YW1wIjoiMTcxNDE4OTI5OCJ9"}`)
	body := bytes.NewBuffer(json)
	
	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/pickup_codes", body)

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
        "{url}/api/openapi/v1/pickup_codes",
        [
            "Appid" => "ds*******************",
            "AppSecret" => "*******************",
        ],
        "{\"payload\":\"eyJjb2RlX2x*******UE2IiwidGltZXN0YW1wIjoiMTcxNDE4OTI5OCJ9\"}");

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
  "data": {}
}
```

## 请求结果(失败)

根据返回的 [错误代码](../error_code.md) 进行排查:

```json
{
  "code": 10023,
  "message": "取货码功能尚未开启",
  "data": {}
}
```

## 一键生成取货码{id="oneKey"}

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/pickup_codes
请求参数(Argsments): payload: base64code
注意: method 为固定值内容: pickup_code.product.all
```

### <Badge type="danger" text="Payload" />

| 参数              | 类型     | 说明                                                  | 必传 |
|-----------------|--------|-----------------------------------------------------|----|
| machine_no      | string | 设备编号(定长8位数字字符串)                                     | ✓  |
| method          | string | 固定值: `pickup_code.product.all`                      | ✓  |
| expired_at      | string | 过期时间(格式: '2024-12-24 13:00:00', 默认时区是GMT+8)，空值则长期有效 | ✓  |
| <s>quantity</s> | string | 取货码使用可以取货数量，默认1，取值范围: [1, 产品最大容量]                   | -  |
| code_length     | string | 取货码生成长度，默认6，取值范围: [6-10]                            | -  |
| timestamp       | string | 当前时间戳                                               | ✓  |

#### 注意 (payload参数类型: 字符串)

因存在柜型不一致， `quantity` 目前仅为占用字段，传参不会被使用。

`expired_at`: 长期有效时，可不传参数。

```json
{
  "code_length": "7",
  "expired_at": "2024-12-31 23:59:59",
  "machine_no": "********",
  "method": "pickup_code.product.all",
  "quantity": "1",
  "sign": "6C73E1EE2B92089A61DC721E72BB3139",
  "timestamp": "1714185061"
}
```

[参数加密](signatory.md)

对接示例参考单个生成
