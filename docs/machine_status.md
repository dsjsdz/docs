# 设备状态

物联网设备一般根据硬件支持云端在线。

我们使用 `is_online` 字段来表示设备是否在线，使用 `status` 表示该设备的使用状态，取值范围可参考下表。


### 是否在线 `is_online`
<table style="width:100%">
    <thead>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>必传</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>is_online</code></td>
            <td>boolean</td>
            <td><code>true</code> 即: 在线状态。</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

### 可用状态 `status`
<table style="width:100%">
    <thead>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>必传</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3"><code>status</code></td>
            <td rowspan="3">string</td>
            <td><code>MAINTENANCE</code> 即: 维护中</td>
            <td rowspan="3">✓</td>
        </tr>
        <tr>
            <td><code>OPERATIONAL</code> 即: 运营中</td>
        </tr>
        <tr>
            <td><code>TRANSFER</code> 即: 转移中</td>
        </tr>
    </tbody>
</table>

当 `status` 值为 `TRANSFER` 时，即 该设备可用状态发生了转移(另外一个商户)，仅当接收方商户处理之后才能获取最终的状态，否则保持当前 `TRANSFER` 状态。
