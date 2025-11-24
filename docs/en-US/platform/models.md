# ️7.1 Type List

Merchants can create their own vending machine device types. When creating a device, the corresponding device type can be selected.

![merchant](/images/2025-11-24_162448.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

Vending types are created based on the actual vending machines. For example, a single board in a vending machine may support a 10-layer × 10-column channel motor type. In actual production, fully loaded channels may not occur, so device types are configured for association.

## 1. Channel Usage

![merchant](/images/2025-11-24_162746.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

As shown in the diagram, only the channels with black buttons are valid for this device type. Other buttons are invalid. In the bound products, invalid channel numbers do not exist on the physical vending machine.

## 2. Board Selection

![merchant](/images/2025-11-24_163210.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

⚠️ Currently, multiple board types are supported. Additional types may be added based on actual requirements.

| Name               | Description                     | Max Channels | Supported |
| ------------------ | ------------------------------- | ------------ | --------- |
| Wish-noodle-v1.0   | Noodle Machine                  | 10           |           |
| W50x-v1.0          | W50x Weighing Board             | 32           | ✅        |
| Wish-eLock24P-v1.0 | 24-Channel Electromagnetic Lock | 24           | ✅        |
| Wish-M2301-v1.4    | DingShang Driver Board M2301    | 100          | ✅        |
| Wish-ACH370-v1.0   | DingShang Driver Board ACH370   | 100          |           |

Board series such as `Wish-noodle-v1.0` and `Wish-ACH370-v1.0` require merchants to contact the developer directly.

Merchants must manually add `machine_types` to the supported machine type list; otherwise, the type cannot be selected.
