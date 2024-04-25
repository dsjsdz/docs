# 整柜商品补货

:::tip
[前往后台补货](https://dash.awish.vip/dashboard/machines/)
:::

## 接口补货

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/replenishments
请求参数(Argsments): payload: base64code
注意: method 为固定值内容: replenishment.machine.all
```

### <Badge type="danger" text="Payload" />

| 参数         | 类型     | 说明                               | 必传 |
|------------|--------|----------------------------------|----|
| machine_no | string | 设备编号(定长8位数字字符串)                  | ✓  |
| method     | string | 固定值: `replenishment.machine.all` | ✓  |
| timestamp  | int    | 当前时间戳                            | ✓  |


```json
{
  "machine_no": "16****29",
  "method": "replenishment.category.id",
  "timestamp": "1714030791"
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
	json := []byte(`{"payload": "eyJtYWNoaW5lX25vIjoiODY2ODM4MDYy*******YxNzM5QiIsInRpbWVzdGFtcCI6IjE3MTMyNTE3MjYifQ=="}`)
	body := bytes.NewBuffer(json)
	
	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/replenishments", body)

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
        "{url}/api/openapi/v1/replenishments",
        [
            "Appid" => "ds*******************",
            "AppSecret" => "*******************",
        ],
        "{\"payload\":\"eyJtYWNoaW5lX25vIjoiODY2******jJBMjU5Q0IwMDYxNzM5QiIsInRpbWVzdGFtcCI6IjE3MTMyNTE3MjYifQ==\"}");

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
  "code": 0,
  "message": "具体信息",
  "data": {}
}
```