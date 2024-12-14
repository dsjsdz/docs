# setPowerOnOffTime

Note: If set to `true`, The set startup and shutdown time must exceed the current time.

If set to `false`, any existing schedule will be canceled.

| argument | type                                              | description      |
|----------|---------------------------------------------------|------------------|
| enable   | boolean                                           | Enable or Cancel |
| onTime   | IntArray <br /> [year, month, day, hour, minutes] | Power-On Time    |
| offTime  | IntArray <br /> [year, month, day, hour, minutes] | Power-Off Time   |

```kotlin
class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()

    override fun your_app_method(args) {
        val enable = args.enable
        // [year, month, day, hour, minutes]
        val onTime = args.onTime.toIntArray()
        val offTime = args.offTime.toIntArray()

        this.displayer.setPowetOnOffTime(enable, onTime, offTime)
        // ....
}
```