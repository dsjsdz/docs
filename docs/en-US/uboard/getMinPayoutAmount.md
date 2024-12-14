# getMinPayoutAmount

Read the minimum denomination supported by the peripheral.

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    MPReplyPara().apply {
        driver.getMinPayoutAmount(this)
    }.let {
        if (it.isOK) {
            println("payout amount: ${it.value}, decimal: ${it.decimal}")
        }
    }
}
```

## SVReplyPara Attribute Description

| Attribute | Type | Default Value | Description                |
|-----------|------|---------------|----------------------------|
| value     | Int  |               | Minimum denomination base. |
| decimal   | Int  |               | Number of decimal places.  |

eg: value is 1, decimal is 2, the minimum payout amount is: 1.00
