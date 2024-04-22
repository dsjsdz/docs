# 获取商户设备列表

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/rent/machines
```

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

	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/rent/machines", nil)

	// Headers
	req.Header.Add("Appid", "ds************")
	req.Header.Add("AppSecret", "************")

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
        "{url}/api/openapi/v1/rent/machines",
        [
            "Appid" => "ds************",
            "AppSecret" => "************",
        ],
        "");

$response = $client->send($request);
echo "Response HTTP : " . $response->getStatusCode() ;
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
      "machine_name": "******",
      "machine_no": "******",
      "is_online": true,
      "status": true,
      "address": "未知",
      "notify_message": "[系统检测]: 设备已连接至服务器，设备目前在线!",
      "lng_lat": "116.549815,39.922273",
      "created_at": "2024-03-18 20:48:23"
    }
  ]
}
```

:::tip
注意: 因接口返回的字段使用 ``protobuf``, 部分字段值为空 或 false 时，默认不传
:::

| 参数           | 类型    | 说明                                   | 必传 |
| -------------- | ------- | -------------------------------------- | ---- |
| machine_name   | string  | 设备名称                               | ✓    |
| machine_no     | string  | 设备编号(定长8位数字字符串)            | ✓    |
| is_online      | boolean | 是否在线, 该字段不存在时 则 离线       | -    |
| status         | boolean | 在运营中, 该字段不存在时 则 非运营中   | -    |
| address        | string  | 设备地址, 该字段不存在时 则 没有设置   | -    |
| notify_message | string  | 当前设备最后一次系统通知信息           | ✓    |
| lng_lat        | string  | 经纬度, 该字段不存在时 则 没有设置     | -    |
| created_at     | string  | 设备添加日期                           | ✓    |
| contact        | string  | 设备负责人, 该字段不存在时 则 没有设置 | -    |
| tel            | string  | 负责人电话, 该字段不存在时 则 没有设置 | -    |

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
  "code": 30001,
  "message": "没有关联的设备号",
  "data": {}
}
```