# 接口约定

`Open API` 需要携带 `Header` 参数，能获取设备信息 以及驱动售货机出货等服务。

:::tip
```{url}/api/openapi/v1/xxx```
:::

#### {url} 默认为提供服务的地址

#### xxx 为请求的具体方法或者动作

## 请求结果(成功)

`code`: 请求成功 数值固定为 `0`

`message`: 请求成功 内容固定为 `ok`

`data`: 请求的数据(使用了protobuf，其中: 零值 或 false 不传)。

```json
{
  "code": 0,
  "message": "ok",
  "data": {}
}
```

## 请求结果(失败)

`code`: 错误代码, 具体可参考 [错误代码明细](../error_code.md)

`message`: 错误信息, 具体可参考 [错误代码明细](../error_code.md)

`data`: 空对象 或者 nil

```json
{
  "code": 10014,
  "message": "*************",
  "data": {}
}
```

