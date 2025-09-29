# 9. 设备广告

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 请求示例

```json
{
  "view_type": "0"
}
```

## 参数说明

| 字段名       | 默认值 | 是否必须 | 描述                   |
|-----------|-----|------|----------------------|
| view_type | 0   | -    | 0: 轮播图<br /> 1: 锁屏广告 |

## 返回结果

```json
{
  "data": [
    {
      "id": "6",
      "status": "0",
      "is_visible": true,
      "is_link": true,
      "is_video": true,
      "sort_id": "1",
      "hit_count": "1",
      "views_count": "1",
      "title": "a",
      "view_type": "0",
      "link_url": "",
      "cover_image": "https://dash.awish.vip/storage/p50v9ggY/81d0fba1-1e7c-4d47-92c6-5e1cda80a4ee.jpg"
    }
  ]
}
```

## banner 信息

| 字段名         | 默认值 | 描述            |
|-------------|-----|---------------|
| id          | -   | 主键            |
| status      | -   | 状态            |
| is_visible  | -   | 是否可见          |
| is_link     | -   | 是否为链接         |
| is_video    | -   | 是否为视频         |
| sort_id     | -   | 排序            |
| hit_count   | -   | 点击次数          |
| views_count | -   | 展现次数          |
| title       | -   | 标题            |
| view_type   | -   | 类型            |
| link_url    | -   | 链接 (H5,小程序可用) |
| cover_image | -   | 封面            |
