# 出货测试

根据货道名 `channel_name` 进行出货测试。

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/deliveries/debug
请求参数(Argsments): payload: base64code
注意: method 为固定值内容: device.delivery.put
```

`channel_name` 参数获取: [产品列表](products#商品项说明) 商品项说明 中的 `channel`.`name` 。

### <Badge type="danger" text="Payload" />

| 参数           | 类型     | 说明                         | 必传 |
|--------------|--------|----------------------------|----|
| machine_no   | string | 设备编号(定长8位数字字符串)            | ✓  |
| method       | string | 固定值: `device.delivery.put` | ✓  |
| channel_name | string | 货道名                        | ✓  |
| notify_url   | string | 回调地址(接收内容)                 | ✓  |
| timestamp    | string | 当前时间戳                      | ✓  |

#### 注意 (payload参数类型: 字符串)

```json
{
  "channel_name": "A20",
  "machine_no": "16327129",
  "method": "device.delivery.put",
  "notify_url": "https://******/notify",
  "sign": "AE6FAEF145ED228CFE2BC25D198E3950",
  "timestamp": "1714813742"
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
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/deliveries/debug", body)

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
        "{url}/api/openapi/v1/deliveries/debug",
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
    "delivery_id": "5121763043809673",
    "delivered_at": "2024-05-04 16:16:49",
    "status": "未取货或正在出货"
  }
}
```

### <Badge type="danger" text="Payload" />

| 参数           | 类型     | 说明     | 必传 |
|--------------|--------|--------|----|
| delivery_id  | string | 出货事件id | ✓  |
| delivered_at | string | 出货时间   | ✓  |
| status       | string | 状态说明   | ✓  |
| pickup_at    | string | 出货完成时间 | -  |
| fail_reason  | string | 出货失败原因 | -  |

## 出货停留时间(针对出货状态)

> 整个运行状态大概 500ms-1000ms

部分机型不支持同时出货，因此会存在出货停留时间，即: 一台机器 从出货开始 到 出货结束 的生命周期内，无法触发下一个出货指令(包含
Message Queue Job)。

在出货结束(包含出货成功、出货失败)后，自动删除锁定状态，可以再次进入出货状态。

默认: 45 秒

| 类型  | 停留时间 | 说明         |
|-----|------|------------|
| 电子锁 | 15秒  | 出货成功或失败即清除 |
| 电机  | 30秒  | 出货成功或失败即清除 |
| 履带  | 90秒  | 出货成功或失败即清除 |

### 出货成功或失败(必触发)

在提交订单时，如果 `notify_url` 有值，则在状态变更时 会主动发送 `post` 请求到目标地址。

[notify_url 回调](delivery_callback)

## 订单失败

商户主动退款，平台5分钟内会将订单的下单数量返回给库存。

## 请求结果(失败)

根据返回的 [错误代码](../error_code.md) 进行排查:

```json
{
  "code": 60003,
  "message": "商品库存不足",
  "data": {}
}
```
