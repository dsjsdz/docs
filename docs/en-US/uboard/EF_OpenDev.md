# EF_OpenDev

Open the serial port

| argument | type   | default value | description              |
|----------|--------|---------------|--------------------------|
| commid   | string | -             | serial port name or path |
| baudrate | int    | 9600          | serial baudrate          |

```kotlin
// serial baudrate
private var baudrate: Int = 9600
// serial driver
private lateinit var driver: UBoard
// serial address
var commid = "/dev/ttyS0"

override fun onCreate(savedInstanceState: Bundle?) {
    // setting context
    this.displayer.getContext(applicationContext)

    // initialization of the USDK class
    USDK.getInstance().init(application)

    // Initialize the serial port and keep it resident in memory.
    this.driver = USDK.getInstance().create(this.commid).apply {
        this.EF_OpenDev(commid, baudrate)
    }
}
```