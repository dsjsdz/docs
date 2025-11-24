# 8.3.8 Coupon

v1.25.0 后支持

## 1. 模板

<table>
<thead>
<tr>
<th>序号</th>
<th>名称</th>
<th>coupon_type</th>
<th>discount_type</th>
<th>amount</th>
<th>discount</th>
<th>max_discount_amount</th>
<th>min_amount</th>
<th>every_amount</th>
<th>reduce_amount</th>
<th>计算公式（优惠金额）</th>
<th>典型运营</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>普通满减券</td>
<td>1</td>
<td>1</td>
<td>20.00</td>
<td>NULL</td>
<td>NULL</td>
<td>100.00</td>
<td>NULL</td>
<td>NULL</td>
<td>MIN(amount, 订单金额) 如果订单≥min_amount</td>
<td>满100减20</td>
</tr>
<tr>
<td>2</td>
<td>无门槛直减券</td>
<td>3</td>
<td>1</td>
<td>10.00</td>
<td>NULL</td>
<td>NULL</td>
<td>0.00</td>
<td>NULL</td>
<td>NULL</td>
<td>amount（直接减）</td>
<td>立减10元</td>
</tr>
<tr>
<td>3</td>
<td>折扣券（打折）</td>
<td>2</td>
<td>3</td>
<td>NULL</td>
<td>9.5</td>
<td>50.00（可选）</td>
<td>0 或 299</td>
<td>NULL</td>
<td>NULL</td>
<td>订单×(10-discount)/10 → 再取 MIN( , max_discount_amount)</td>
<td>95折最高优惠50</td>
</tr>
<tr>
<td>4</td>
<td>每满减（阶梯满减）</td>
<td>1</td>
<td>2</td>
<td>NULL</td>
<td>NULL</td>
<td>NULL</td>
<td>NULL</td>
<td>300.00</td>
<td>50.00</td>
<td>FLOOR(订单/every_amount) × reduce_amount</td>
<td>每满300减50</td>
</tr>
<tr>
<td>5</td>
<td>固定金额随机券</td>
<td>4</td>
<td>4</td>
<td>5~50</td>
<td>NULL</td>
<td>NULL</td>
<td>0 或 99</td>
<td>NULL</td>
<td>NULL</td>
<td>领取时随机一个 amount（落 user_coupon.amount）</td>
<td>随机5-50元红包</td>
</tr>
<tr>
<td>6</td>
<td>随机折扣券</td>
<td>4</td>
<td>3</td>
<td>NULL</td>
<td>8.5~9.8</td>
<td>100.00（可选）</td>
<td>199.00</td>
<td>NULL</td>
<td>NULL</td>
<td>领取时随机一个 discount</td>
<td>随机85-98折</td>
</tr>
<tr>
<td>7</td>
<td>每满减 + 封顶（高级玩法）</td>
<td>1</td>
<td>2</td>
<td>NULL</td>
<td>NULL</td>
<td>100.00</td>
<td>NULL</td>
<td>300.00</td>
<td>80.00</td>
<td>MIN( FLOOR(订单/300)×80 , 100 )</td>
<td>每满300减80，最高优惠100</td>
</tr>
<tr>
<td>8</td>
<td>无门槛折扣券</td>
<td>2</td>
<td>3</td>
<td>NULL</td>
<td>8.8</td>
<td>NULL</td>
<td>0.00</td>
<td>NULL</td>
<td>NULL</td>
<td>订单×(10-8.8)/10</td>
<td>全场88折无门槛</td>
</tr>
</tbody>
</table>
