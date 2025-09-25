# 告警配置

在商户后台中，可配置 管理员、成员列表 告警通知。目前支持以下平台与事件的告警通知:

<table>
<tbody>
<tr>
<td rowspan="2">平台</td>
<td colspan="6">支持事件</td>
<td rowspan="2">是否默认</td>
</tr>
<tr>
<td>设备掉线</td>
<td>出货失败</td>
<td>设备缺货</td>
<td>温度异常</td>
<td>商品小票</td>
<td>支付异常</td>
</tr>
<tr>
<td>邮件</td>
<td>√</td>
<td>√</td>
<td>√</td>
<td>√</td>
<td>x</td>
<td>x</td>
<td>x</td>
</tr>
<tr>
<td>微信</td>
<td>√</td>
<td>√</td>
<td>√</td>
<td>√</td>
<td>x</td>
<td>x</td>
<td>x</td>
</tr>
<tr>
<td>SMS</td>
<td>√</td>
<td>√</td>
<td>√</td>
<td>√</td>
<td>x</td>
<td>x</td>
<td>x</td>
</tr>
</tbody>
</table>

如果没有设置默认的告警通知，系统不会推送任何告警信息。其中，邮箱推送仅支持已认证的用户邮箱，未认证的用户邮箱不会推送告警信息。
