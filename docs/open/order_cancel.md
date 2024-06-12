# 取消订单

商户更新订单状态(失效)，同时将原订单的下单数量返回给设备库存(设备需要商户自己主动更新数据)。

参考 [更新订单](order_update.md)，其中参数 `status` 设置 非 `1` 即可。

平台会推送事件到 [`notify_url`](delivery_callback.md)。
