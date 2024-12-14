# ageVerification

Note: Age identity authentication requires hardware support.
If your vending machine does not have this device (you can check if it is included based on the order), you can skip
this step.

## setAgeScope

Set age restriction.

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    // eg: You can drink at 18
    val para = ASReplyPara(18)
    this.driver.setAgeScope(para)
}
```

## ASReplyPara Attribute Description

| Attribute | Type | Default Value | Description   |
|-----------|------|---------------|---------------|
| age       | Int  |               | Restrict age. |

## getAuthResult

Check if identity authentication was successful.

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    val para = ARReplyPara()
    this.driver.getAuthResult(para)
    println("para status: ${para.status}")
}
```

## ARReplyPara Attribute Description

<table>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Default Value</th>
        <th>Description</th>
    </tr>
    <tr>
        <td rowspan="4">status</td>
        <td rowspan="4">int</td>
        <td rowspan="4"></td>
        <td>0 - No card swiped</td>
    </tr>
    <tr>
        <td>1 - Identity authentication successful</td>
    </tr>
    <tr>
        <td>2 - Identity authentication failed</td>
    </tr>
    <tr>
        <td>3 - Error (e.g., device not connected)</td>
    </tr>
</table>