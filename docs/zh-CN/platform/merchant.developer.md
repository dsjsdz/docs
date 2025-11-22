# 2.4 开发者中心

![merchant](/images/2025-11-22_161451.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

| 平台        | 说明    | 
|-----------|-------|
| AppId     | 开发者ID |
| AppSecret | 开发者密码 | 
| AppKey    | 商户Key | 

以上三个字段可以组合在 [GRPC接口](/zh-CN/grpc/)、[MQTT接口](/zh-CN/mqtt/) 中使用。

## 拓展配置

![merchant](/images/2025-11-22_162409.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

## 1. 调试模式

> 开启调试后，无论设备状态(在线、离线)都可以调用接口。

## 2. 税控功能

> 开启后，订单将会计算税额并显示在订单详情

## 3. 时区设置

> 开启后，订单相关的日期将以该时区为基准，若设备也同时设置了时区，则以设备参数为基准，否则以UTC时区显示时间类数据。
