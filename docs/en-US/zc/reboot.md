# reboot

Restart your device. It will reboot within 15 seconds.

```kotlin
class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()

    override fun your_app_method() {
        this.displayer.reboot()
        // ....
}
```