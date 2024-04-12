# 获取单台设备

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/rent/machines/imei  // 即: 4G设备 IMEI, 必传
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
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/rent/machines/*****", nil)

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
        "{url}/api/openapi/v1/rent/machines/xxxxxx",
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
  "data": {
    "name": "******",
    "address": "未知",
    "lng_lat": "116.549815,39.922273",
    "is_online": true,
    "qrcode": "{url}/storage/qrcodes/3146276CB9B4D.png",
    "model_id": 1,
    "machine_type": 1,
    "title": "拼多多",
    "description": "拼多多创立于2015年4月，是上海本土成长的互联网企业。生于移动年代，拼多多以农产品零售平台起家，深耕农业，开创了以拼为特色的农产品零售的新模式，逐步发展成为以农副产品为鲜明特色的全品类综合性电商平台，是全球具备规模的纯移动电商平台。",
    "categories": [
      {
        "id": 1,
        "title": "第一层"
      },
      {
        "id": 2,
        "title": "第二层"
      },
      {
        "id": 3,
        "title": "第三层"
      },
      {
        "id": 4,
        "title": "第四层"
      },
      {
        "id": 6,
        "title": "第六层"
      },
      {
        "id": 5,
        "title": "第五层"
      }
    ],
    "logo": "{url}/storage/BqovIre6NE/0dfe0286-88c1-4eb0-89a2-7019820a9118.png",
    "announcement": {
      "title": "866838062537549"
    }
  }
}
```

:::tip
注意: 因接口返回的字段使用 ``protobuf``, 部分字段值为空 或 false 时，默认不传
:::

| 参数           | 类型      | 说明                   | 必传 |
|--------------|---------|----------------------|----|
| name         | string  | 设备名称                 | ✓  |
| address      | string  | 设备地址, 该字段不存在时 则 没有设置 | -  |
| lng_lat      | string  | 经纬度, 该字段不存在时 则 没有设置  | -  |
| is_online    | boolean | 是否在线, 该字段不存在时 则 离线   | -  |
| qrcode       | string  | 二维码, 扫码可进入下单页面       | -  |
| model_id     | int     | 设备类型                 | -  |
| machine_type | int     | 售卖类型                 | -  |
| title        | string  | 商户名称                 | -  |
| description  | string  | 商户介绍                 | -  |
| logo         | string  | 商户LOGO               | -  |
| categories   | object  | 商品分类                 | -  |
| announcement | object  | 轮播广告                 | -  |

## 售卖类型说明

| 值 | 说明  | 
|---|-----|
| 1 | 售卖机 |
| 2 | 娱乐机 |
| 3 | 娃娃机 |
| 4 | 借用柜 |
| 5 | 归还柜 |
| 6 | 格子柜 |

## 请求结果(失败)

根据返回的 [错误代码](error_code.md) 进行排查:

```json
{
  "code": 30002,
  "message": "设备已离线",
  "data": {}
}
```