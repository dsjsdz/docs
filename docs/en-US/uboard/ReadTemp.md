# ReadTemp

Read temperature and humidity.

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    // addr
    val para = TempReplyPara(addr)
    this.driver.ReadTemp(para)
    if (para.isOK) {
        println("temp: ${para.temp}")
        println("humi: ${para.humi}")
    }
}
```

## TempReplyPara Attribute Description

| Attribute | Type | Default Value | Description |
|-----------|------|---------------|-------------|
| temp      | int  |               | temperature |
| humi      | int  |               | humidity    |

Temperature: The actual temperature is calculated as temperature / 10.

Humidity is calculated in the same way: the actual humidity is humidity / 10.
