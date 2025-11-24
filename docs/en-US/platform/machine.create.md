# 🖥️ 8.2 Create / Edit

Device Model

![2025-11-23_153307.jpg](/images/2025-11-24_165504.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

Vending Type

![2025-11-23_153418.jpg](/images/2025-11-24_165526.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

| Field         | Description       |
| ------------- | ----------------- |
| Communication | Serial, MQTT, TCP |

![2025-11-23_085533.jpg](/images/2025-11-24_165551.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

⚠️ For MQTT, an IMEI must be provided to uniquely identify the device. It cannot be duplicated. The IMEI is usually obtained from a 4G module.

After saving, the system will create the device according to the selected Device Type and initialize the relevant data.

## 2. Edit

![2025-11-23_085533.jpg](/images/2025-11-24_165616.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

Edit device information:

![2025-11-23_085533.jpg](/images/2025-11-24_165643.jpg){style="background: #fff; padding: 1rem; border-radius: 0.5rem;"}

| Field              | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| Status             | Operating, Under Maintenance, Transferring                        |
| Vending Type       | -                                                                 |
| Communication      | Serial, MQTT, TCP                                                 |
| Currency           | Currency unit or symbol displayed in the App, H5, or Mini Program |
| Contact Person     | Contact to notify in case of dispensing issues                    |
| Contact Phone      | Phone number for dispensing issue notifications                   |
| Front Image        | Photo of the vending machine setup                                |
| Address            | Address information of the vending machine                        |
| Latitude/Longitude | Used in H5 and Mini Program for map location                      |

⚠️ `Transferring` status cannot be selected manually. It only appears when a device is being transferred from one merchant to another.
