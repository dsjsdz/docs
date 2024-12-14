# setGestureStatusBar

Allow or Disable Swipe to Pull Down the Status Bar.

| value   | description                                |
|---------|--------------------------------------------|
| `true`  | Allow Swipe to Pull Down the Status Bar.   |
| `false` | Disable Swipe to Pull Down the Status Bar. |

```kotlin
class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()

    override fun your_app_method() {
        this.displayer.setGestureStatusBar(true)
        // ....
}
```