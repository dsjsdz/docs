# GetDropStatus

Query the drop detection status.

Note: If the vending machine drop detection switch is not enabled, please reject the response.

<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>addr</td>
    <td>int</td>
    <td></td>
    <td>Slave address. </td>
  </tr>
  <tr>
    <td>check</td>
    <td>bool</td>
    <td></td>
    <td>Whether to enable drop detection.</td>
  </tr>
</table>

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    // addr
    val para = DSReplyPara(
        addr
    ).apply {
        driver.GetDropStatus(this)
    }
    if (!para.isOK) {
        throw Exception("get drop status failed")
    }
}
```

## DSReplyPara Attribute Description

<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td rowspan="2">status</td>
    <td rowspan="2">int</td>
    <td rowspan="2"></td>
    <td>0 - Drop detection not connected or blocked</td>
  </tr>
  <tr>
    <td>1 - Drop detection is normal with unobstructed beam</td>
  </tr>
</table>