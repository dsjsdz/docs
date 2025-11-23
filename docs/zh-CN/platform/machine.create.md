# 🖥️ 8.2 创建/编辑

设备模型

![2025-11-23_153307.jpg](/images/2025-11-23_153307.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

售卖类型

![2025-11-23_153418.jpg](/images/2025-11-23_153418.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

| 字段     | 说明                                |
| -------- | ----------------------------------- |
| 通信方式 | 串口、MQTT、TCP                     |

![2025-11-23_085533.jpg](/images/2025-11-23_153605.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

⚠️ `MQTT` 需要传入一个 IMEI，用于唯一标识设备，不可重复，通常 `IMEI` 可以从4G网卡中获取。

保存后，系统会根据所选的 `设备类型` 进行创建设备，并且初始化相关数据。

## 2. 编辑

![2025-11-23_085533.jpg](/images/2025-11-23_151748.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

编辑

![2025-11-23_085533.jpg](/images/2025-11-23_152051.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

| 字段     | 说明                                |
| -------- | ----------------------------------- |
| 状态     | 运营中、维护中、转移中              |
| 售卖类型 | -                                   |
| 通信方式 | 串口、MQTT、TCP                     |
| 货币     | APP、H5、小程序显示的货币单位或符号 |
| 联系人   | 出货异常时通知的联系人              |
| 联系电话 | 出货异常时通知的联系电话            |
| 门头     | 售卖机的摆放图片                    |
| 地址信息 | 售卖机的地址信息                    |
| 经纬度   | H5、小程序可用，用于地图定位        |

⚠️ `转移状态` 不可选中，在设备从一个商户转移到另一个商户时，才会出现这个状态。
