# 4. Query Goods

:::tip
统一 Header：`token`: `****`, 其中 `token` 值为设备登录后的凭据。
:::

## 返回结果

```graphql
query Goods {
    goods(input: null) {
        total
        currentPage
        perPage
        lastPage
        data {
            id
            name
            description
            price
            original_price
            thumb
            media
            content
            slug
            updated_at
            age_verification_enabled
            age_verification_min
            is_tax_exempt
            tax_rate
            is_returnable
            unit {
                id
                name
                display_name
                multiplier
                base_unit
                description
                immutable
            }
            attributes {
                id
                label_name
                label_value
                immutable
            }
        }
    }
}

```

## 补充信息

| 字段名           | 默认值 | 描述     |
|---------------|-----|--------|
| is_returnable | -   | 是否支持退回 |

💡 表示该商品是否支持退回或回收（如桶装水的大桶、押物、容器等可回收物品）
