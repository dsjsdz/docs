# 出货结果查询

本接口不支持 `debug` 调试模式。

`出货事件id`, 即 [订单出货](delivery_put.md) `delivery_id`

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/deliveries/{delivery_id}
请求参数(Argsments): payload: base64code
注意:
```

### <Badge type="danger" text="Payload" />

| 参数         | 类型     | 说明              | 必传 |
|------------|--------|-----------------|----|
| machine_no | string | 设备编号(定长8位数字字符串) | ✓  |
| timestamp  | string | 当前时间戳           | ✓  |

#### 注意 (payload参数类型: 字符串)

```json
{
  "machine_no": "********",
  "sign": "2457E8CE3CB49D31EC2054365FC8AD90",
  "timestamp": "1714373688"
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
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/deliveries/{delivery_id}", body)

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
        "{url}/api/openapi/v1/deliveries/{delivery_id}",
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
  "data": {
    "delivered_at": "2024-05-04 16:18:06",
    "status": "出货完成"
  }
}
```

### <Badge type="danger" text="Payload" />

| 参数           | 类型     | 说明     | 必传 |
|--------------|--------|--------|----|
| delivered_at | string | 出货时间   | ✓  |
| status       | string | 状态说明   | ✓  |
| pickup_at    | string | 出货完成时间 | -  |
| fail_reason  | string | 出货失败原因 | -  |

## 请求结果(失败)

根据返回的 [错误代码](../error_code.md) 进行排查:

```json
{
  "code": 404,
  "message": "Not Found",
  "data": {}
}
```
