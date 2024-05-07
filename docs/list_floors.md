# 获取货道列表

此接口随时可能取消，建议使用 [单台设备](get_machine.md) + [产品查询](list_products.md) 获取详情 。{style="color: red"}

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/floors
请求参数(Argsments): payload: base64code
注意: 默认查询条件: 已上架(产品)，默认排序 sort_id desc，查询所有柜(含组合柜)
```

### <Badge type="danger" text="Payload" />

| 参数       | 类型   | 说明                        | 必传 |
| ---------- | ------ | --------------------------- | ---- |
| machine_no | string | 设备编号(定长8位数字字符串) | ✓    |
| timestamp  | string | 当前时间戳                  | ✓    |

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
	json := []byte(`{"payload": "eyJjYWJpbmV0X25hbWUiOiJCIiwi******lnbiI6IkZBQThEQ0I3QjVGNDk1NEE2RUMwQ0ZENjE2MjRENDRDIiwidGltZXN0YW1wIjoiMTcxNDAxNDY0MiJ9"}`)
    body := bytes.NewBuffer(json)
	
	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/floors", body)

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
        "{url}/api/openapi/v1/floors",
        [
            "Appid" => "ds*******************",
            "AppSecret" => "*******************",
        ],
        "{\"payload\":\"eyJjYWJpbmV0X25hbWUiOiJCIiwiY2F0******jJBMjU5Q0IwMDYxNzM5QiIsInRpbWVzdGFtcCI6IjE3MTMyNTE3MjYifQ==\"}");

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
      "status": "1",
      "good": {
        "id": 121,
        "name": "可乐",
        "description": "可乐",
        "thumb": "http://127.0.0.1:8100/storage/BkAtNYSnD5/28e3ec39-65ee-43ff-bd26-30c38c599fef.png",
        "price": "1.00",
        "original_price": "1.00",
        "content": "<p>可乐</p>",
        "updated_at": "2024-04-25 09:26:52"
      },
      "channel": {
        "id": 213,
        "name": "A1",
        "cabinet_name": "A"
      },
      "max_total": 1,
      "max_stock": 1
    },
    {
      "status": "1",
      "good": {
        "id": 122,
        "name": "雪碧",
        "description": "雪碧",
        "thumb": "{url}/storage/BkAtNYSnD5/28e3ec39-65ee-43ff-bd26-30c38c599fef.png",
        "price": "1.00",
        "original_price": "1.00",
        "content": "<p>雪碧</p>",
        "updated_at": "2024-04-25 09:27:55"
      },
      "channel": {
        "id": 214,
        "name": "A2",
        "cabinet_name": "A"
      },
      "max_total": 1,
      "max_stock": 1
    },
    {
      "status": "1",
      "good": {
        "id": 131,
        "name": "橙汁",
        "description": "橙汁",
        "thumb": "{url}/storage/BkAtNYSnD5/28e3ec39-65ee-43ff-bd26-30c38c599fef.png",
        "price": "1.00",
        "original_price": "1.00",
        "content": "<p>橙汁</p>",
        "updated_at": "2024-04-25 11:11:56"
      },
      "channel": {
        "id": 223,
        "name": "B1",
        "cabinet_name": "B"
      },
      "max_total": 1,
      "max_stock": 1
    }
  ]
}
```

:::tip
注意: 因接口返回的字段使用 ``protobuf``, 部分字段值为空 或 false 时，默认不传
:::

| 参数         | 类型   | 说明                         | 必传 |
| ------------ | ------ | ---------------------------- | ---- |
| floor_status | string | 货道状态                     | ✓    |
| channel      | object | [货道内容](list_products.md) | ✓    |
| good         | object | [商品信息](list_products.md) | ✓    |
| max_total    | int    | 最大容量                     | ✓    |
| max_stock    | int    | 最大库存                     | ✓    |

#### floor_status 货道状态值 参考:

```
'0' => '货道不存在',
'1' => '正常',
'2' => '卡货',
'3' => '电机故障',
'47' => '串口通讯超时',
```

### 查询结果为空时，data 默认返回空数组

```json
{
  "code": 0,
  "message": "ok",
  "data": []
}
```

## 请求结果(失败)

根据返回的 [错误代码](error_code.md) 进行排查:

```json
{
  "code": 30002,
  "message": "设备已离线",
  "data": {}
}
```