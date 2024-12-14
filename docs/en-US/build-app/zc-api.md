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

| method                                      | description                                         | 
|---------------------------------------------|-----------------------------------------------------|
| [shutdown](#shutdown)                       | Shut down your vending machine                      |
| [reboot](#reboot)                           | Reboot your vending machine                         |
| [setPowetOnOffTime](#setpowetonofftime)     | Scheduled Power On/Off                              |
| [getBuildModel](#getbuildmodel)             | Get the Board Model Number                          |
| [getBuildSerial](#getbuildserial)           | Get the Board Serial Number (SN)                    |
| [setStatusBar](#setstatusBar)               | Hide Or Show the Navigation Bar and Status Bar.     |
| [setGestureStatusBar](#setgesturestatusbar) | Allow or Disable Swipe to Pull Down the Status Bar. |

### shutdown

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

### reboot

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

### setPowetOnOffTime

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

### getBuildModel

Get the Board Mode Number, eg: `ZC-xxx`

```kotlin
class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()

    override fun your_app_method() {
        this.displayer.getBuildModel()
        // ....
}
```

### getBuildSerial

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

### setStatusBar

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

### setGestureStatusBar

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

### For [serial communication](serial-api), you can refer to the initialization of the usdk.