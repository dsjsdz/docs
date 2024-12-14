# ZCAPI

## zc init

```kotlin
import com.zcapi

class MainActivity : ComponentActivity() {
    // init zcapi
    // public or private
    private var displayer = zcapi()

    override fun onCreate(savedInstanceState: Bundle?) {
        // setting context
        this.displayer.getContext(applicationContext)
        // ...
    }
}
```

## Methods of System Control

| method                                           | description                                         | 
|--------------------------------------------------|-----------------------------------------------------|
| [shutdown](../zc/shutdown)                       | Shut down your vending machine                      |
| [reboot](../zc/reboot)                           | Reboot your vending machine                         |
| [setPowerOnOffTime](../zc/setpoweronofftime)     | Scheduled Power On/Off                              |
| [getBuildModel](../zc/getbuildmodel)             | Get the Board Model Number                          |
| [getBuildSerial](../zc/getbuildserial)           | Get the Board Serial Number (SN)                    |
| [setStatusBar](../zc/setstatusBar)               | Hide Or Show the Navigation Bar and Status Bar.     |
| [setGestureStatusBar](../zc/setgesturestatusbar) | Allow or Disable Swipe to Pull Down the Status Bar. |

The above are the commonly used methods. For more details on other methods, you can click the JAR file to view further
information.

## Production Environment

we recommend that the app hides the navigation bar and status bar upon startup, as well as disables the
swipe-to-pull-down feature for the status bar.

```kotlin
class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        this.displayer.setStatusBar(false)
        this.displayer.setGestureStatusBar(false)
        // ....
    }
}
```

### For [serial communication](../build-app/serial-api), you can refer to the initialization of the usdk.