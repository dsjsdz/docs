# Serial Communication

![zc-328](/images/zc-328.png)

As shown in the above image, this hardware has 3 serial ports, and the addresses may be `/dev/ttyS0` to `/dev/ttyS8`.

## How to initialize the serial port.

### A. Identify the serial port address.

```kotlin
import cc.uling.usdk.USDK
import cc.uling.usdk.board.UBoard
import cc.uling.usdk.constants.ErrorConst

class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()
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

    override fun onDestroy() {
        super.onDestroy()
        if (this::driver.isInitialized) {
            this.driver.EF_CloseDev()
        }
    }
}
```

### B. Dynamically query the serial port address.

Dynamically querying the serial port address may cause blocking, so it is necessary to start a separate thread for
querying.

```kotlin
import android.serialport.SerialPortFinder
import android.widget.Toast
import com.zcapi
import cc.uling.usdk.USDK
import cc.uling.usdk.board.UBoard
import cc.uling.usdk.board.wz.para.SVReplyPara
import cc.uling.usdk.constants.ErrorConst

class MainActivity : ComponentActivity() {
    // init zcapi
    private var displayer = zcapi()
    // serial baudrate
    private var baudrate: Int = 9600
    // serial driver
    private lateinit var driver: UBoard

    @OptIn(DelicateCoroutinesApi::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        // setting context
        this.displayer.getContext(applicationContext)

        // initialization of the USDK class
        USDK.getInstance().init(application)

        // initialization of the serial driver
        GlobalScope.launch(Dispatchers.IO) {
            async {
                initSerialDriver()
            }.await()
        }
        // ...
    }

    private fun initSerialDriver(addr: Int = 1) {
        val paths = SerialPortFinder().allDevicesPath.sorted()
        try {
            paths.forEachIndexed { _, path ->
                val board = USDK.getInstance().create(path)
                board.let {
                    val resp = it.EF_OpenDev(path, this.baudrate)
                    if (resp != ErrorConst.MDB_ERR_NO_ERR) {
                        return@forEachIndexed
                    }
                    val para = SVReplyPara(addr)
                    it.GetSoftwareVersion(para)
                    if (para.isOK && !this::driver.isInitialized) {
                        this.driver = it
                    }
                }
            }
            // readHardwareConfig code ...
        } catch (e: Exception) {
            Toast.makeText(application, e.message, Toast.LENGTH_SHORT).show()
            throw e
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        if (this::driver.isInitialized) {
            this.driver.EF_CloseDev()
        }
    }
}

```

![06826bba9f7e](/images/077e18f0-0b98-4ea6-bdde-06826bba9f7e.jpg)

You can now perform vending machine operations using the USDK class.