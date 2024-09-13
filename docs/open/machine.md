:::tip 注意
已安装 `DingShang Vending App` 设备，可通过接口进行[设备管理](../graphql/machine.md)，如:
<code>设备重启</code>,
<code>设备关机</code>,
<code>设备定时开关机</code> 等等。
:::

# 设备详情

:::tip 注意
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/rent/machines/{machine_no}  // 即: 设备编号, 必传
```

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
    "machine_name": "******",
    "address": "未知",
    "lng_lat": "116.549815,39.922273",
    "is_online": true,
    "model": {
      "cabinet_names": [
        "A"
      ]
    },
    "machine_type": 1,
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
    "announcement": {
      "title": "**********"
    },
    "merchant": {
      "title": "拼多多",
      "description": "拼多多创立于2015年4月，是上海本土成长的互联网企业。生于移动年代，拼多多以农产品零售平台起家，深耕农业，开创了以拼为特色的农产品零售的新模式，逐步发展成为以农副产品为鲜明特色的全品类综合性电商平台，是全球具备规模的纯移动电商平台。",
      "logo": "{url}/storage/BqovIre6NE/0dfe0286-88c1-4eb0-89a2-7019820a9118.png",
      "store_id": "505390*******",
      "status": "VERIFIED",
      "created_at": "2024-03-18 20:41:17"
    },
    "currency": {
      "id": 3,
      "name": "Euro",
      "code": "EUR",
      "symbol": "€"
    }
  }
}
```

:::tip
注意: 因接口返回的字段使用 ``protobuf``, 部分字段值为空 或 false 时，默认不传
:::

| 参数         | 类型    | 说明                                                      | 必传 |
| ------------ | ------- | --------------------------------------------------------- | ---- |
| machine_name | string  | 设备名称                                                  | ✓    |
| address      | string  | 设备地址, 该字段不存在时 则 没有设置                      | -    |
| lng_lat      | string  | 经纬度, 该字段不存在时 则 没有设置                        | -    |
| is_online    | boolean | 是否在线, 该字段不存在时 则 离线                          | -    |
| model_id     | int     | 设备类型id (v1.13.0删除，可使用model){style="color: red"} | -    |
| model        | object  | 设备类型对象(v1.13.0新增) {style="color: green"}          | -    |
| machine_type | int     | 售卖类型                                                  | -    |
| cover_image  | string  | 门店图片                                                  | -    |
| categories   | array   | 商品分类                                                  | -    |
| announcement | object  | 轮播广告                                                  | -    |
| merchant     | object  | 商户信息                                                  | -    |

## 售卖类型说明

| 值  | 说明   |
| --- | ------ |
| 1   | 售卖机 |
| 2   | 娱乐机 |
| 3   | 娃娃机 |
| 4   | 借用柜 |
| 5   | 归还柜 |
| 6   | 格子柜 |

## 设备类型

| 参数          | 类型  | 说明       | 必传 |
| ------------- | ----- | ---------- | ---- |
| id            | int   | 类型id     | -    |
| cabinet_names | array | (各个)柜名 | ✓    |

> `cabinet_names` 如果存在组合柜型(子母柜)等，则依次值为 `A`,`B` ...`Z`;

> 最多支持7个组合柜(含主柜);

> 其中`A`表示 主柜，简单柜子至少存在一个 `A`，此参数可使用在查询产品列表 [使用说明](products.md)。

## 币种信息 <Badge type="danger" text="v1.22.1.240905 新增" />

| 参数   | 类型   | 说明                   | 必传 |
| ------ | ------ | ---------------------- | ---- |
| id     | int    | 类型id                 | ✓    |
| name   | string | 名称, 如: Chinese Yuan | ✓    |
| code   | string | 代码, 如: CNY          | ✓    |
| symbol | string | 符号, 如: ¥            | ✓    |

## 请求结果(失败)

根据返回的 [错误代码](../error_code.md) 进行排查:

```json
{
  "code": 30002,
  "message": "设备已离线",
  "data": {}
}
```