# getBuildSerial

Get the Board Mode Number, eg: `xxx`

```kotlin
class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()

    override fun your_app_method() {
        this.displayer.getBuildSerial()
        // ....
}
```