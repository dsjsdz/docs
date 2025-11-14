# 3. APP在线升级

:::tip
统一 Header：`token`: `****`, 其中 `token` 值为设备登录后的凭据。
:::

## 返回结果

```graphql
query Upgrade {
    upgrade(input: "1.2.0") {
        id
        title
        version
        download_url
        file_size
        file_md5
        is_force
        release_notes
        published_at
        publisher
        status
    }
}
```

## 参数

| 字段名   | 默认值 | 描述                                   |
|-------|-----|--------------------------------------|
| input | -   | 版本号，如：`1.0.0`, 如果不传值，则查询结果恒定为 `null` |

## 返回参数

```json
{
  "id": 1,
  "title": "售卖机主程序",
  "version": "v1.2.3",
  "download_url": "https://cdn.example.com/vending/v1.2.3.apk",
  "file_size": 31258921,
  "file_md_5": "e3f5a9c1d2b4e6f7a8c9d0e1f2a3b4c5",
  "is_force": false,
  "release_notes": "# v1.2.3 更新内容\n\n- 优化出货逻辑，减少卡货率\n- 支持微信扫码支付\n- 修复网络断连重试失败问题\n- UI 响应速度提升 30%",
  "published_at": "2025-11-14T15:30:00+00:00",
  "publisher": "张工",
  "status": true
}
```

| 字段名           | 默认值 | 描述                       |
|---------------|-----|--------------------------|
| id            | -   | 主键                       |
| title         | -   | 名称                       |
| version       | -   | 版本号                      |
| download_url  | -   | 下载地址                     |
| file_size     | -   | 文件大小（字节）                 |
| file_md5      | -   | 文件md5                    |
| is_force      | -   | 是否强制更新                   |
| release_notes | -   | 更新内容                     |
| published_at  | -   | 发布时间                     |
| publisher     | -   | 发布人                      |
| status        | -   | 状态<br />1: 有效<br />0: 无效 |
