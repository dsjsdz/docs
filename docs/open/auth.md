# 接口认证

:::tip
请求接口`(Header)`必须携带参数，`Appid`、`AppSecret`
:::

#### 假定您已经通过了商户认证{style="text-align: center; color: #f00; margin-top: 30px"}

#### 假定您已经通过了商户认证{style="text-align: center; color: blue"}

#### 假定您已经通过了商户认证{style="text-align: center; color: green; margin-bottom: 30px"}

#### 您可以通过以下方式获取 `Appid`、`AppSecret`

##### 首先，[登录鼎商云管理系统](https://dash.awish.vip/dashboard/login)

> 登录成功后，在您的左侧侧边栏依次点击，【商户管理】-> 【商户信息】，如下图所示:
![merchant.png](/images/merchant.png)

![merchant.png](/images/appid.jpg)

:::details 如果 `Header` 没有携带`Appid`、`AppSecret` 参数进行接口请求，会返回401错误。

```json
{
  "code": 10008,
  "message": "appid or appsecret is empty",
  "data": {}
}

```

> 其中 code 值 `10008`，即表示: 未携带 `Header`参数。

> 开发者可以根据 返回的 `401` 状态码或者 `code` 进行处理。

> 查看所有 [错误代码](../error_code.md)
:::

```
请求方式(METHOD): POST
请求路径(URL): {url}/api/openapi/v1/ping
```

## 接口测试(ping)

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
	req, err := http.NewRequest("POST", "{url}/api/openapi/v1/ping", nil)

	// Headers
	req.Header.Add("Appid", "ds*************")
	req.Header.Add("AppSecret", "*************")

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
        "{url}/api/openapi/v1/ping",
        [
            "Appid" => "ds***************",
            "AppSecret" => "***************",
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
  "data": "pong"
}
```

## 请求结果(失败)

如 `Appid`、`AppSecret` 已经填写，仍然出现接口401错误，可根据返回的 [错误代码](../error_code.md) 进行排查:

```json
{
  "code": 10014,
  "message": "appid is invalid",
  "data": {}
}
```

