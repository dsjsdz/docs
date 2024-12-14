# EF_CloseDev

Close the serial port

```kotlin
// serial driver
private lateinit var driver: UBoard

override fun onDestroy() {
    super.onDestroy()
    if (this::driver.isInitialized) {
        this.driver.EF_CloseDev()
    }
}
```