# UBoard Class

The communication class for the channel board serial port. It must be created using `USDK.getInstance().create()`.

```kotlin
// serial address
var commid = "/dev/ttyS0"

USDK.getInstance().create(commid)
```

| method                       | description                 | 
|------------------------------|-----------------------------|
| [EF_OpenDev](./ef-opendev)   | Open the serial port        |
| [EF_CloseDev](./ef-closedev) | Reboot your vending machine |
