# ️️7.2 Create / Edit

Merchants can create their own vending machine device types. When creating a device, the corresponding device type can be selected.

<b style="color: red">Once created, board information cannot be changed</b>

![merchant](/images/2025-11-24_163638.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

## 1. Add Board

![merchant](/images/2025-11-24_163708.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

### 1.1 Board Driver

| Name               | Description                     | Max Channels | Supported |
| ------------------ | ------------------------------- | ------------ | --------- |
| Wish-noodle-v1.0   | Noodle Machine                  | 10           |           |
| W50x-v1.0          | W50x Weighing Board             | 32           | ✅        |
| Wish-eLock24P-v1.0 | 24-Channel Electromagnetic Lock | 24           | ✅        |
| Wish-M2301-v1.4    | DingShang Driver Board M2301    | 100          | ✅        |
| Wish-ACH370-v1.0   | DingShang Driver Board ACH370   | 100          |           |

Board series such as `Wish-noodle-v1.0` and `Wish-ACH370-v1.0` require merchants to contact the developer directly.

### 1.2 Select Delivery Method

![merchant](/images/2025-11-24_163754.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

### 1.3 Select Channels

![merchant](/images/2025-11-24_163818.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

⚠️ Channels can be modified later.

### 1.4 Single Channel Capacity

![merchant](/images/2025-11-24_163850.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

⚠️ Maximum number of products that can be placed in this channel.

### 1.5 Drop Detection & Lift Platform

- Drop Detection: Whether the optical sensor is enabled.
- Lift Platform: Whether the channel has a lift platform.

### 1.6 Auxiliary Channels

> For example, door locks. For weighing boards, auxiliary channels can be assigned to generate the corresponding number of locks.

⚠️ <b style="color: red">The first board address cannot be set as an auxiliary channel.</b>

⚠️ <b style="color: lightgreen">Up to 7 auxiliary cabinets can be set.</b>, Please follow the actual prototype used in production.

![merchant](/images/2025-11-24_163937.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

## 2. Edit

![merchant](/images/2025-11-24_163955.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

## 3. Delete

![merchant](/images/2025-11-24_164014.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

> ⚠️ Once deleted, this action cannot be undone.
