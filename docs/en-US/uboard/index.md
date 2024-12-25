# BaseClsPara Class

The base class for all UBoard communication parameter data.

## BaseClsPar.isOK()

| Return value | description                                                                              |
|--------------|------------------------------------------------------------------------------------------|
| True         | Indicates that the data request is normal.                                               |
| False        | Indicates that the data transmission failed or there was an exception during processing. |

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    // addr
    val para = Children of BaseClsPar()
    if (!para.isOK) {
        throw Exception("unknown failed")
    }
    println("isOK: ${para.isOK}")
    println("resultCode: ${para.resultCode}")
}
```

### BaseClsPar.getResultCode()

| Return value | description                                              |
|--------------|----------------------------------------------------------|
| 0            | The request is normal with no errors.                    |
| 201          | Failed to open the serial port.                          |
| 202          | Failed to close the serial port.                         |
| 203          | Data transmission error.                                 |
| 204          | Timeout for data returned by the driver board.           |
| 205          | Driver board returned data with incorrect starting flag. |
| 206          | Driver board returned data with an excessive length.     |
| 207          | Incorrect checksum for the returned data.                |
| 208          | The received data frame command is incorrect.            |
| 209          | Incorrect address for the returned data.                 |
| 210          | Processing, data transmission failed.                    |
| 211          | System processing exception.                             |
| 212          | Driver board returned an exception error.                |
| 213          | Data stream is abnormal or has been closed.              |
| 214          | Serial port is not open, communication failed.           |
| 215          | Driver board processing failed, returning fault code.    |

## UBoard Class

The communication class for the channel board serial port. It must be created using `USDK.getInstance().create()`.

```kotlin
// serial address
var commid = "/dev/ttyS0"

USDK.getInstance().create(commid)
```

| method                                        | description                                                |
|-----------------------------------------------|------------------------------------------------------------|
| [EF_OpenDev](./EF_OpenDev)                    | Open the serial port                                       |
| [EF_CloseDev](./EF_CloseDev)                  | Reboot your vending machine                                |
| [readHardwareConfig](./readHardwareConfig)    | Read the hardware configuration                            |
| [ReadHardwareConfig](./readHardwareConfig#v2) | Query the hardware version of the driver board.            |
| [GetSoftwareVersion](./GetSoftwareVersion)    | Query the driver board software version.                   |
| [getMinPayoutAmount](./getMinPayoutAmount)    | Read the minimum denomination supported by the peripheral. |
| [getPayAmount](./getPayAmount)                | todo                                                       |
| [initPayment](./initPayment)                  | todo                                                       |
| [notifyPayment](./notifyPayment)              | todo                                                       |
| [notifyResult](./notifyResult)                | todo                                                       |
| [changeBalance](./changeBalance)              | todo                                                       |
| [getChangeStatus](./getChangeStatus)          | todo                                                       |
| [findChangeResult](./findChangeResult)        | todo                                                       |
| [setAcceptMoney](./setAcceptMoney)            | todo                                                       |
| [getAcceptUnit](./getAcceptUnit)              | todo                                                       |
| [getMoneyBalance](./getMoneyBalance)          | todo                                                       |
| [syncSystemTime](./syncSystemTime)            | todo                                                       |
| [ageVerification](./ageVerification)          | age verification                                           |
| [setWorkMode](./setWorkMode)                  | todo                                                       |
| [setPayChannel](./setPayChannel)              | todo                                                       |
| [pulseBalance](./pulseBalance)                | todo                                                       |
| [GetBoxStatus](./GetBoxStatus)                | Query the current status of the locker.                    |
| [GetYPos](./GetYPos)                          | todo                                                       |
| [GetXPos](./GetXPos)                          | todo                                                       |
| [GetDropStatus](./GetDropStatus)              | Query the drop detection status.                           |
| [GetArrayStatus](./GetArrayStatus)            | todo                                                       |
| [GetIOStatus](./GetIOStatus)                  | todo                                                       |
| [GetYIOStatus](./GetYIOStatus)                | todo                                                       |
| [GetXIOStatus](./GetXIOStatus)                | todo                                                       |
| [GetYStatus](./GetYStatus)                    | todo                                                       |
| [GetXStatus](./GetXStatus)                    | todo                                                       |
| [ResetLift](./ResetLift)                      | Elevator reset.                                            |
| [RunMoto](./RunMoto)                          | todo                                                       |
| [MotoTimeout](./MotoTimeout)                  | todo                                                       |
| [SetPickY](./SetPickY)                        | todo                                                       |
| [SetPickX](./SetPickX)                        | todo                                                       |
| [ToY](./ToY)                                  | todo                                                       |
| [ToX](./ToX)                                  | todo                                                       |
| [SeYPos](./SeYPos)                            | todo                                                       |
| [SeXPos](./SeXPos)                            | todo                                                       |
| [Shipment](./Shipment)                        | Vending Machine Shipment and Shipment Status Query         |
| [ReadTemp](./ReadTemp)                        | Read temperature and humidity.                             |
| [DriveOutput](./DriveOutput)                  | todo                                                       |
| [ArrayOutput](./ArrayOutput)                  | todo                                                       |
| [GetXStatus](./GetXStatus)                    | todo                                                       |
| [GetXStatus](./GetXStatus)                    | todo                                                       |
