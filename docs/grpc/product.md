# 8. 产品列表

:::tip
统一 Metadata：`appid`: `****`, 其中 `appid` 值为商户`appid`。
:::

## 请求示例

```json
{
  "addr": "1"
}
```

## 参数说明

| 字段名 | 默认值 | 是否必须 | 描述              |
| ------ | ------ | -------- | ----------------- |
| addr   | -      | -        | 板卡地址, 默认: 1 |

## 返回结果

```json
{
  "data": [
    {
      "id": "1",
      "quantity": "0",
      "machine_id": "1",
      "status": false,
      "is_sticky": false,
      "is_latest": false,
      "sort_id": "1",
      "current_inventory": "0",
      "inventory": "2",
      "floor_status": "ERR_NOT_EXIST",
      "lock_status": "LOCK_NOT_EXIST",
      "channel": {
        "id": "1",
        "model_id": "1",
        "name": "A1",
        "total": "2",
        "sort_id": "0",
        "motor_id": "0",
        "x": "0",
        "y": "0",
        "addr": "1",
        "is_auxiliary": false
      },
      "category": {
        "id": "1",
        "title": "第一层",
        "is_visible": true
      },
      "good": {
        "media": [
          "https://dash.awish.vip/storage/p50v9ggY/617dd1e8-877c-4132-9a42-26322366464d.jpg",
          "https://dash.awish.vip/storage/p50v9ggY/778ac0da-62bb-41c5-a5b9-a70192e4fe58.jpg"
        ],
        "attributes": [
          {
            "label_value": [],
            "id": "1",
            "label_name": "stand_weight",
            "immutable": false
          }
        ],
        "id": "110",
        "name": "茅台",
        "price": "1.00",
        "content": "<p>茅台</p>",
        "updated_at": "2025-07-30 06:49:29",
        "unit": null,
        "age_verification_enabled": false,
        "is_tax_exempt": false,
        "description": "茅台",
        "original_price": "999.00",
        "slug": "obe8GBUWo0rr",
        "age_verification_min": "0",
        "tax_rate": "0.01",
        "thumb": "https://dash.awish.vip/storage/p50v9ggY/617dd1e8-877c-4132-9a42-26322366464d.jpg"
      }
    }
  ]
}
```

## 商品信息(good)

| 字段名                   | 默认值 | 描述             |
| ------------------------ | ------ | ---------------- |
| id                       | 1      | 主键             |
| media                    | []     | 产品图片         |
| attributes               | []     | 产品属性         |
| name                     | -      | 产品名称         |
| price                    | -      | 产品价格         |
| content                  | -      | 产品详情         |
| updated_at               | -      | 更新时间         |
| unit                     | -      | 产品单位         |
| age_verification_enabled | -      | 是否开启年龄限制 |
| is_tax_exempt            | -      | 是否免税         |
| description              | -      | 产品描述         |
| original_price           | -      | 原价             |
| slug                     | -      | 产品 slug        |
| age_verification_min     | -      | 年龄限制         |
| tax_rate                 | -      | 税率             |
| thumb                    | -      | 缩略图           |

## 栏目信息(category)

| 字段名     | 默认值 | 描述     |
| ---------- | ------ | -------- |
| id         | 1      | 主键     |
| title      | -      | 栏目名称 |
| is_visible | -      | 是否显示 |

## 货道信息(channel)

| 字段名       | 默认值 | 描述         |
| ------------ | ------ | ------------ |
| id           | 1      | 主键         |
| model_id     | 1      | 模型 ID      |
| name         | -      | 货道名称     |
| total        | -      | 总数         |
| sort_id      | 0      | 排序         |
| motor_id     | 0      | 电机 ID      |
| x            | 0      | X 坐标       |
| y            | 0      | Y 坐标       |
| addr         | 1      | 地址         |
| is_auxiliary | false  | 是否辅助(锁) |

## 产品信息(product)

| 字段名            | 默认值 | 描述                   |
| ----------------- | ------ | ---------------------- |
| id                | 1      | 主键                   |
| quantity          | 1      | 数量                   |
| machine_id        | 1      | 机器 ID                |
| status            | false  | 状态                   |
| is_sticky         | false  | 是否置顶               |
| is_latest         | false  | 是否最新               |
| sort_id           | 0      | 排序                   |
| floor_status      | -      | floor 状态(电机、履带) |
| lock_status       | -      | 锁状态(含门锁)         |
| current_inventory | 0      | 当前库存               |
| inventory         | 0      | 库存                   |
| channel           | -      | 货道                   |
| category          | -      | 栏目                   |
| good              | -      | 产品                   |
| locker            | -      | 锁                     |
