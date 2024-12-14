# setStatusBar

Hide Or Show the Navigation Bar and Status Bar.

| value   | description                             |
|---------|-----------------------------------------|
| `true`  | Show the Navigation Bar and Status Bar. |
| `false` | Hide the Navigation Bar and Status Bar. |

```kotlin
class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()

    override fun your_app_method() {
        this.displayer.setStatusBar(true)
        // ....
}
```