# 11. 广告更新

:::tip
统一推送主题：`/clients/{machine_no}`, 其中 `machine_no` 为设备编码。
:::

## 请求示例

```json
{
  "timestamp": "1748330699",
  "machine_id": "10009",
  "method": "client.ads.update",
  "sign": "9F6A233BDA45B73E14F1239AB56D7C3E",
  "client_id": "16327138",
  "id": "16327138",
  "is_visible": "0",
  "title": "新品饮料买一送一",
  "cover_image": "https://cdn.xxx.com/ad/cover1.jpg",
  "video_url": "https://cdn.xxx.com/ad/video1.mp4",
  "link_url": "https://shop.xxx.com/product/123",
  "expired_at": "1748330699",
  "view_type": "0",
  "status": "0"
}
```

## 参数说明

| 字段名         | 默认值               | 是否必须 | 描述                      |
|-------------|-------------------|------|-------------------------|
| timestamp   | -                 | ✅    | 当前时间戳(秒级)               |
| machine_id  | -                 | ✅    | 设备 id(主键)               |
| method      | client.ads.update | ✅    | MQTT 方法名                |
| id          | -                 | ✅    | 广告id                    |
| is_visible  | 0                 | ✅    | 0：不显示<br /> 1：显示        |
| title       | -                 | ✅    | 广告标题                    |
| cover_image | -                 | ✅    | 广告图片                    |
| video_url   | -                 | -    | 视频地址(非必传)               |
| link_url    | -                 | -    | 广告链接(h5，小程序使用，其他客户端忽略)  |
| expired_at  | -                 | -    | 过期时间戳(秒级), 非必传          |
| view_type   | 0                 | ✅    | 类型<br /> 0: 轮播图 1: 锁屏广告 |
| sign        | -                 | ✅    | 签名字符串                   |
| client_id   | -                 | ✅    | 设备编码，即 `machine_no`     |
| status      | 0                 | ✅    | 处理状态，默认：0               |
