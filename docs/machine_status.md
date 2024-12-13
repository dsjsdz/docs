# 设备状态

约定使用 `is_online` 字段来表示设备是否在线，使用 `status`
表示该设备的可用状态，取值范围可参考下表。

### 在线状态

| 字段名         | 字段说明 | 值类型     | 必定传值 |
|-------------|------|---------|------|
| `is_online` | 在线状态 | boolean | -    |

> 说明：使用 4G/WI-FI
> 网络时，网络模块会周期性上报心跳，因此服务端会主动更新设备的状态信息；

> 仅当设备在规定的时间内未上报心跳或服务端处理心跳异常(几率很小)，系统将设备归纳 `离线` 状态。

当设备离线时，`is_online` 值为 `false`，即不传值 (使用到protobuf)。

<hr />

### 运营状态

<table style="width:100%">
    <thead>
        <tr>
            <th>值类型</th>
            <th>类型</th>
            <th>字段说明</th>
            <th>必传</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3"><code>status</code></td>
            <td rowspan="3">string</td>
            <td><code>MAINTENANCE</code> 即: 维护中</td>
            <td rowspan="3">Y</td>
        </tr>
        <tr>
            <td><code>OPERATIONAL</code> 即: 运营中</td>
        </tr>
        <tr>
            <td><code>TRANSFER</code> 即: 转移中</td>
        </tr>
    </tbody>
</table>

+ 当 `status` 值为 `TRANSFER` 时，即 该设备可用状态发生了转移(另外一个商户)，不提供任何服务，仅当接收方确认后可提供服务。
+ 当 `status` 值为 `MAINTENANCE` 时，即 允许当前设备进行货道测试等相关操作。
