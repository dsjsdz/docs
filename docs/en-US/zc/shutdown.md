# shutdown

Shut down your vending machine. The next startup will require manual activation of the vending machine.

```kotlin
class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()

    override fun your_app_method() {
        this.displayer.shutDown()
        // ....
}
```