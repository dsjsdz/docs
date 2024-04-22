# 主动下单(待完善)

接口不做缓存处理，20分钟内未支付的订单 对应的商品 会自动回退到商户设备。

因不可控因素，无法保证设备能够100%正常出货。

目前的处理逻辑是，用户下单，设备出货；未正常出货会主动通知(商户主动退款，返还用户未出货的金额，且进行排查)

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/orders
请求参数(Argsments): machine_no, products
eg: { machine_no: "xxxx", products: [ { product_id: 1, quantity: 1 } ] }
```

<table>
  <tr>
    <td colspan="2">参数</td>
    <td>类型</td>
    <td>说明</td>
    <td>必传</td>
  </tr>
  <tr>
    <td colspan="2">machine_no</td>
    <td>string</td>
    <td>设备编号(定长8位数字字符串)</td>
    <td>✓</td>
  </tr>
  <tr>
    <td rowspan="3">products</td>
    <td>-</td>
    <td>array</td>
    <td>产品信息</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>product_id</td>
    <td>int</td>
    <td>产品ID</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>quantity</td>
    <td>int</td>
    <td>下单数量</td>
    <td>✓</td>
  </tr>
</table>

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
	json := []byte(`{"imei": "xxxx","products": [{"product_id": 1,"quantity": 1}]}`)
	body := bytes.NewBuffer(json)
	
	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/orders", body)

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
        "{url}/api/openapi/v1/orders",
        [
            "Appid" => "ds*******************",
            "AppSecret" => "*******************",
        ],
        "{\"products\":[{\"product_id\":1,\"quantity\":1}],\"imei\":\"xxxxx\"}");

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
    "order_id": 1111111
  }
}
```

:::tip
注意: 因接口返回的字段使用 ``protobuf``, 部分字段值为空 或 false 时，默认不传
:::

| 参数     | 类型 | 说明   | 必传 |
| -------- | ---- | ------ | ---- |
| order_id | int  | 订单id | ✓    |

## 请求结果(失败)

根据返回的 [错误代码](error_code.md) 进行排查:

```json
{
  "code": 30002,
  "message": "设备已离线",
  "data": {}
}
```