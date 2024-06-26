# 获取商品分类

每台设备所售卖的分类都是独一无二的。

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/categories
请求参数(Argsments): payload: base64code
注意: 默认查询条件: 可见状态，默认排序 sort_id desc
```

### <Badge type="danger" text="Payload" />

| 参数         | 类型     | 说明              | 必传 |
|------------|--------|-----------------|----|
| machine_no | string | 设备编号(定长8位数字字符串) | ✓  |
| timestamp  | string    | 当前时间戳           | ✓  |

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
	json := []byte(`{"payload": "eyJtYWNoaW5lX25vIjoiODY2ODM4MDYy*******YxNzM5QiIsInRpbWVzdGFtcCI6IjE3MTMyNTE3MjYifQ=="}`)
	body := bytes.NewBuffer(json)
	
	// Create client
	client := &http.Client{}

	// Create request
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/categories", body)

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
        "{url}/api/openapi/v1/categories",
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
  "data": [
    {
      "id": 1,
      "title": "第一层",
      "sort_id": 100,
      "is_visible": true
    },
    {
      "id": 2,
      "title": "第二层",
      "sort_id": 99,
      "is_visible": true
    },
    {
      "id": 3,
      "title": "第三层",
      "sort_id": 98,
      "is_visible": true
    },
    {
      "id": 4,
      "title": "第四层",
      "sort_id": 97,
      "is_visible": true
    },
    {
      "id": 6,
      "title": "第六层",
      "sort_id": 97,
      "is_visible": true
    },
    {
      "id": 5,
      "title": "第五层",
      "sort_id": 96,
      "is_visible": true
    }
  ]
}
```

:::tip
注意: 因接口返回的字段使用 ``protobuf``, 部分字段值为空 或 false 时，默认不传
:::

| 参数         | 类型      | 说明           | 必传 |
|------------|---------|--------------|----|
| id         | int     | 标识           | ✓  |
| is_visible | boolean | 是否显示, 商户自己设置 | -  |
| title      | string  | 分类名称         | ✓  |
| sort_id    | int     | 排序值          | ✓  |

### 查询结果为空时，data 默认返回空数组

```json
{
  "code": 0,
  "message": "ok",
  "data": []
}
```

## 请求结果(失败)

根据返回的 [错误代码](../error_code.md) 进行排查:

```json
{
  "code": 30002,
  "message": "设备已离线",
  "data": {}
}
```