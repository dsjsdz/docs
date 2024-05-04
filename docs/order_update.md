# 更新订单

商户更新订单状态，支付成功后商户可以推送指令到设备进行出货。

出货结果反馈给商户(未正常出货的，需商户自行处理，如: 主动退款)。


:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

注意: 本请求 `method`，使用 `PUT`

```
请求方式(METHOD): PUT
请求路径(URL): {url}/api/openapi/v1/orders/{order_id}
请求参数(Argsments): payload: base64code
```

### <Badge type="danger" text="Payload" />

| 参数       | 类型   | 说明                        | 必传 |
| ---------- | ------ | --------------------------- | ---- |
| machine_no | string | 设备编号(定长8位数字字符串) | ✓    |
| status     | int    | 订单状态                    | ✓    |
| timestamp  | int    | 当前时间戳                  | ✓    |

[参数加密](access_sign.md)


### status 值范围
```
1: 支付成功
2: 转入退款
3: 已关闭
4: 已撤销（付款码支付）
5: 用户支付中（付款码支付）
6: 支付失败(其他原因，如银行返回失败)
```

### 付款成功

`status` 值为 `1`, 即 付款成功，平台更新状态后，商户可以推送 `出货指令` 到设备，设备出货结果会推送到 `notify_url` URL地址，请求方式 `post`，商户需要主动接收出货结果。

### 付款失败

`status` 值 非 `1`, 即 付款失败，平台会将下单的商品数量返回到对应的记录。

### 超时付款

订单超过20分钟，不受理订单出货请求。


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
	json := []byte(`{"payload": "eyJtYWNoaW5lX25vIjoiMTYzMjcxMjkiLCJzaWduIjoiOUM4NEZEMUNFMkM3Njg0OUU3Nzc4QUNGMkM1MEZGRjAiLCJzdGF0dXMiOjIsInRpbWVzdGFtcCI6IjE3MTQxMjgzNTgifQ=="}`)
	body := bytes.NewBuffer(json)

	
	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("PUT", "{url}/api/openapi/v1/orders/{order_id}", body)

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
        "{url}/api/openapi/v1/orders/{order_id}",
        [
            "Appid" => "ds*******************",
            "AppSecret" => "*******************",
        ],
        "{\"payload\":\"eyJtYWNoaW5lX25vIjoiMTYzMjcxMjkiLCJzaWduIjoiOUM4NEZEMUNFMkM3Njg0OUU3Nzc4QUNGMkM1MEZGRjAiLCJzdGF0dXMiOjIsInRpbWVzdGFtcCI6IjE3MTQxMjgzNTgifQ==\"}");

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
  "data": ""
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
  "code": 40006,
  "message": "订单状态无效",
  "data": {}
}
```

## 出货

订单已支付 / 订单类型是取货码 则商户可以发送指令进行[订单出货](delivery_put)