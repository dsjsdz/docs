# 取货码消费/使用

### 参数获取

`产品id` 可从 [产品列表](list_products.md) 获取产品得到，即 `id`;

`code` 可从 [取货码查询](pickup_code_get.md) 获取产品得到，即 `id`;

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/consumes
请求参数(Argsments): payload: base64code
```

### <Badge type="danger" text="Payload" />

| 参数       | 类型   | 说明                                | 必传 |
| ---------- | ------ | ----------------------------------- | ---- |
| machine_no | string | 设备编号(定长8位数字字符串)         | ✓    |
| method     | string | 固定值: `event.consume.pickup_code` | ✓    |
| code       | string | 取货码                              | ✓    |
| product_id | string | 商品id                              | ✓    |
| notify_url | string | 出货结果通知url                     | ✓    |
| trade_id   | string | 商户端订单号                        | ✓    |
| timestamp  | string | 当前时间戳                          | ✓    |

```json
{
	"code": "5288640",
	"machine_no": "************",
	"method": "event.consume.pickup_code",
	"notify_url": "https://**********",
	"product_id": "131",
	"sign": "42D478C881453B8ACD3F953CD5A11AE8",
	"timestamp": "1714353655",
	"trade_id": "800a7e9500d345c8987d3aafa412c77d"
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
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/consumes", body)

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
        "{url}/api/openapi/v1/consumes",
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
    "order_id": 60,
    "trade_id": "800a7e95-00d3-45c8-987d-3aafa412c77d",
    "date": "2024-04-29",
    "amount": "1.00",
    "status": "PICKUPCODE",
    "records": [
      {
        "id": 78,
        "product_id": 131,
        "quantity": 1,
        "price": "1.00",
        "status": "未取货",
        "notify_sent": "0"
      }
    ],
    "pickup_code_id": 1
  }
}
```



:::tip
注意: 因接口返回的字段使用 ``protobuf``, 部分字段值为空 或 false 时，默认不传
:::

### 参数说明

| 参数              | 类型   | 说明           | 必传 |
| ----------------- | ------ | -------------- | ---- |
| order_id          | int    | 订单id         | ✓    |
| trade_id          | string | 自定义订单号   | ✓    |
| date              | string | 下单日期       | ✓    |
| amount            | string | 订单总额       | ✓    |
| status            | string | 状态(参考下表) | ✓    |
| notify_send_count | int    | 出货通知记录数 | -    |
| records           | object | 订单详细记录   | ✓    |
| pickup_code_id    | int    | 取货码id       | ✓    |


```
SUCCESS: 支付成功
REFUND: 转入退款
CLOSED: 已关闭
REVOKED: 已撤销（付款码支付）
USERPAYING: 用户支付中（付款码支付）
PAYERROR: 支付失败(其他原因，如银行返回失败)
PICKUPCODE: 取货码订单
```


## 订单详细记录

| 参数        | 类型   | 说明                   | 必传 |
| ----------- | ------ | ---------------------- | ---- |
| id          | int    | 记录id                 | ✓    |
| product_id  | int    | 产品id                 | ✓    |
| quantity    | int    | 数量                   | ✓    |
| price       | string | 商品总金额             | ✓    |
| status      | string | 状态(订单已支付时显示) | -    |
| notify_sent | string | 是否推送了出货状态     | -    |

```
status: 订单取消 | 已取货 | 未取货
```


## 请求结果(失败)

根据返回的 [错误代码](error_code.md) 进行排查:

```json
{
  "code": 10025,
  "message": "取货码已使用",
  "data": {
    "order_id": 60
  }
}
```

取货码已经使用的情况下，会返回 `data.order_id`，可根据 此 字段[查询订单状态](order_get)

## 出货

接下来，商户可以发送指令进行[订单出货](order_delivery)
