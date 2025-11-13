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
      "sort_id": "1",
      "hit_count": "1",
      "views_count": "1",
      "title": "a",
      "view_type": "0",
      "link_url": "",
      "cover_image": "https://dash.awish.vip/storage/p50v9ggY/81d0fba1-1e7c-4d47-92c6-5e1cda80a4ee.jpg",
      "media_type": "0"
    }
  ]
}
```

## banner 信息

| 字段名                                        | 默认值 | 描述                                      |
|--------------------------------------------|-----|-----------------------------------------|
| id                                         | -   | 主键                                      |
| <s style='color: red'>status</s>           | -   | 状态                                      |
| is_visible                                 | -   | 是否可见                                    |
| <s style='color: red'>is_link</s>          | -   | 是否为链接                                   |
| <s style='color: red'>is_video</s>         | -   | 是否为视频                                   |
| sort_id                                    | -   | 排序                                      |
| hit_count                                  | -   | 点击次数                                    |
| views_count                                | -   | 展现次数                                    |
| title                                      | -   | 标题                                      |
| view_type                                  | -   | 0: 轮播图<br /> 1: 锁屏广告                    |
| link_url                                   | -   | 链接 (H5,小程序可用)                           |
| cover_image                                | -   | 封面(恒定有值)                                |
| <b style='color: lightblue'>media_type</b> | -   | 媒体类型: <br />0: 图片<br />1: 视频<br />2: 链接 |

废弃字段: <s style='color: red'>status</s>, <s style='color: red'>is_link</s>, <s style='color: red'>is_video</s>

新增字段: <b style='color: lightblue'>media_type</b>

## 创建广告

```proto
message CreateBannerRequest {
    optional string link_url = 2;
    optional string video_url = 4;
    optional string cover_image = 5;
    optional string title = 6;
    optional int64 expired_at = 7;
    optional int64 view_type = 8;
    optional int64 media_type = 9;
}
```

💡 `cover_image` 必须传值

## 更新广告

```proto
message UpdateBannerRequest {
    optional string link_url = 2;
    optional string video_url = 4;
    optional string cover_image = 5;
    optional string title = 6;
    optional int64 expired_at = 7;
    optional int64 view_type = 8;
    uint64 id = 9;
    optional int64 media_type = 10;
}
```

💡 `cover_image` 必须传值
