# 5. 设备配置信息

:::tip
统一 Header：`token`: `****`, 其中 `token` 值为设备登录后的凭据。
:::

## 返回结果

```graphql
query Machine {
    machine(id: null) {
        id
        name
        # ....
        config {
            id
            app_navbar_logo
        }
    }
}

```

## 返回信息

| 字段名                                              | 类型     | 描述         |
|--------------------------------------------------|--------|------------|
| id                                               | number | 主键         |
| <b style="color: lightgreen">app_navbar_logo</b> | string | App导航栏Logo |

> 备注：`app_navbar_logo` 新增字段
