# 主动下单

接口不做缓存处理，20分钟内未支付的订单 对应的商品 会自动回退到商户设备。

因不可控因素，无法保证设备能够100%正常出货。

```
处理逻辑: 
【商户端】 用户下单 - 用户付款 - 出货 - 结单
【平台端】 商户订单 - 更新订单(用户已付款) - 主动出货 - 反馈出货结果
```

![order.png](/images/order.png)

## 订单情况说明

#### A、用户已付款

> 商户更新订单状态，支付成功后商户可以推送指令到设备进行出货，出货结果反馈给商户(未正常出货的，需商户自行处理，如:
> 主动退款)。

带掉货检测的履带柜，光眼被遮挡每次出货只能出一个，不然第二个没法检测。{style="color:red; font-size: 13px"}

#### B、用户取消订单

> 商户更新订单状态(失效)，同时将原订单的下单数量返回给设备库存(需要商户自己主动更新数据)。

#### C、订单20分钟未支付

> 平台将订单状态更新(失效)，同时将原订单的下单数量返回给设备库存(设备需要商户自己主动更新数据)。

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

注意: 本请求 参数 不加密

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/orders
请求参数(Argsments): machine_no, products, trade_id, notify_url
eg: 
{ 
    machine_no: "xxxx", 
    notify_url: "xxxx", 
    trade_id: "xxxx", 
    products: [ 
        { 
            product_id: 1, 
            quantity: 1 
        } 
    ] 
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
    <td colspan="2">machine_no</td>
    <td>string</td>
    <td>设备编号(定长8位数字字符串)</td>
    <td>✓</td>
  </tr>
  <tr>
    <td colspan="2">notify_url</td>
    <td>string</td>
    <td>出货结果通知url</td>
    <td>✓</td>
  </tr>
  <tr>
    <td colspan="2">trade_id</td>
    <td>string</td>
    <td>商户端订单号(尽量使用数字字符串,长度: 20-32位)</td>
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

`trade_id` 传入非空 且具有唯一性 的字符串内容， 参考 uuid。

`notify_url` 可访问的公网URL地址，请求方式 `post`，接收出货结果。

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
	json := []byte(`{"machine_no": "xxxxxx","notify_url": "https://xxxxx","trade_id": "3f2a58ad69b74e86b8a1a3da6fd75cc1","products": [{"product_id": 121,"quantity": 1},{"product_id": 122,"quantity": 1},{"product_id": 131,"quantity": 1}]}`)
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
        "{\"machine_no\":\"xxxx\",\"notify_url\":\"https://xxxxxx\",\"products\":[{\"product_id\":121,\"quantity\":1},{\"product_id\":122,\"quantity\":1},{\"product_id\":131,\"quantity\":1}],\"trade_id\":\"3f2a58ad69b74e86b8a1a3da6fd75cc1\"}");

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

| 参数       | 类型  | 说明   | 必传 |
|----------|-----|------|----|
| order_id | int | 订单id | ✓  |

## 请求结果(失败)

根据返回的 [错误代码](../error_code.md) 进行排查:

```json
{
  "code": 60002,
  "message": "商品已下架",
  "data": {}
}
```