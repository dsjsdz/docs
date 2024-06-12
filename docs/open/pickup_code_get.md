# 取货码查询

默认使用 {product_id} 进行查询，须知一个产品数量可能大于1

即: 一个产品会存在多个取货码 (默认一个取货码只能取一件商品)。

## {product_id}获取

`产品id` 可从 [产品列表](products.md) 获取产品得到，即 `id`;

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/products/{product_id}/pickup_code
请求参数(Argsments): payload: base64code
查询条件: 未使用 且 未过期
```

### <Badge type="danger" text="Payload" />

| 参数         | 类型     | 说明              | 必传 |
|------------|--------|-----------------|----|
| machine_no | string | 设备编号(定长8位数字字符串) | ✓  |
| timestamp  | string | 当前时间戳           | ✓  |

```json
{
  "machine_no": "********",
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
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/products/{product_id}/pickup_code", body)

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
        "{url}/api/openapi/v1/products/{product_id}/pickup_code",
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
  "data": [
    {
      "id": 2111,
      "code": "9388106",
      "status": "UNUSED",
      "created_at": "2024-04-27 14:00:08",
      "expired_at": "2024-04-28 14:00:08",
      "quantity": 1
    },
    {
      "id": 2113,
      "code": "9388116",
      "status": "UNUSED",
      "created_at": "2024-04-27 14:00:08",
      "expired_at": "2024-04-28 14:00:08",
      "quantity": 1
    }
  ]
}
```

| 参数         | 类型     | 说明               | 必传 |
|------------|--------|------------------|----|
| id         | int    | 取货码id            | ✓  |
| code       | string | 取货码(定长字符串 6-10位) | ✓  |
| status     | string | 使用状态             | ✓  |
| code       | string | 取货码(定长字符串 6-10位) | ✓  |
| created_at | string | 创建时间             | ✓  |
| expired_at | string | 过期时间, 为空则长期有效    | -  |
| quantity   | int    | 兑换的数量，默认1        | ✓  |

### status: 取值范围

```
UNUSED: 未使用
USED: 已使用
EXPIRED: 过期了
UNKNOWN: 未知的 (通常不会出现)
```

## 请求结果(失败)

根据返回的 [错误代码](../error_code.md) 进行排查:

```json
{
  "code": 30003,
  "message": "设备不存在",
  "data": {}
}
```