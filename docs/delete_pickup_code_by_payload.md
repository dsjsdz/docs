# 取货码取消

支持2种取消方式，[`取消单个`](#single) 和 [`取消全部`](#muilt)

## 取消单个{id=single}

`取货码id` 可从 [取货码查询](get_pickup_code_by_payload.md) 获取产品得到，即 `id`;

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

本请求方式(METHOD): PUT

```
请求方式(METHOD): PUT
请求路径(URL): {url}/api/openapi/v1/pickup_codes
请求参数(Argsments): payload: base64code
```

### <Badge type="danger" text="Payload" />

| 参数       | 类型   | 说明                            | 必传 |
| ---------- | ------ | ------------------------------- | ---- |
| machine_no | string | 设备编号(定长8位数字字符串)     | ✓    |
| method     | string | 固定值: `pickup_code.delete.id` | ✓    |
| id         | string | 取货码记录id                    | ✓    |
| timestamp  | string | 当前时间戳                      | ✓    |

```json
{
	"machine_no": "********",
    "method": "pickup_code.delete.id",
    "id": "1122223",
	"sign": "6C73E1EE2B92089A61DC721E72BB3139",
	"timestamp": "1714185061"
}
```

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
	json := []byte(`{"payload": "eyJjb2RlX2x******dGltZXN0YW1wIjoiMTcxNDE4OTI5OCJ9"}`)
	body := bytes.NewBuffer(json)
	
	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("PUT", "{url}/api/openapi/v1/pickup_codes", body)

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
        "PUT",
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

根据返回的 [错误代码](error_code.md) 进行排查:

```json
{
  "code": 80002,
  "message": "查不到对应记录",
  "data": {}
}
```

## 取消所有{id=muilt}

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): PUT
请求路径(URL): {url}/api/openapi/v1/pickup_codes
请求参数(Argsments): payload: base64code
注意: method 为固定值内容: pickup_code.delete.all
```

### <Badge type="danger" text="Payload" />

| 参数       | 类型   | 说明                             | 必传 |
| ---------- | ------ | -------------------------------- | ---- |
| machine_no | string | 设备编号(定长8位数字字符串)      | ✓    |
| method     | string | 固定值: `pickup_code.delete.all` | ✓    |
| timestamp  | string | 当前时间戳                       | ✓    |

[参数加密](access_sign.md)

对接示例参考单个取消
