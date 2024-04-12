# 获取轮播图

单设备允许上传5张图片资源，即接口最多返回给你5张图片。

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/banners?imei=xxx  // 即: 4G设备 IMEI, 必传
注意: 默认查询条件: 已审核且可显示
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
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/banners?imei=xxx", nil)

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
        "{url}/api/openapi/v1/banners?imei=xxx",
        [
            "Appid" => "ds*******************",
            "AppSecret" => "*******************",
        ],
        "");

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
      "id": 2,
      "status": "已审核",
      "is_visible": true,
      "cover_image": "{url}/storage/BqoydfZzlk/8834b4af-5a50-45ca-ab07-1b376b2c0160.jpg",
      "sort_id": 2,
      "hit_count": 1,
      "views_count": 1
    },
    {
      "id": 11,
      "status": "已审核",
      "is_visible": true,
      "cover_image": "{url}/storage/BqoydfZzlk/8834b4af-5a50-45ca-ab07-1b376b2c0160.jpg",
      "sort_id": 1,
      "hit_count": 1,
      "views_count": 1
    }
  ]
}
```

:::tip
注意: 因接口返回的字段使用 ``protobuf``, 部分字段值为空 或 false 时，默认不传
:::

| 参数          | 类型      | 说明            | 必传 |
|-------------|---------|---------------|----|
| id          | int     | 标识            | ✓  |
| status      | string  | 审核状态(待审核,已审核) | -  |
| is_visible  | boolean | 是否显示, 商户自己设置  | -  |
| cover_image | string  | 附件的实际URL      | ✓  |
| sort_id     | int     | 排序值           | ✓  |
| hit_count   | int     | 点击数           | ✓  |
| views_count | int     | 展现数           | ✓  |

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