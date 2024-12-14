# GetSoftwareVersion

Query the driver board software version.

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    // The slave addr, by default, is 1. 
    // If you have a vending machine is combo type, the addr may vary.
    val para = SVReplyPara(1)
    this.driver.GetSoftwareVersion(para)
    if (para.isOK) {
        println("version: ${para.version}")
    }
}
```

## SVReplyPara Attribute Description

| Attribute | Type   | Default Value | Description      |
|-----------|--------|---------------|------------------|
| version   | string |               | Software Version |
