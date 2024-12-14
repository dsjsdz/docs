# ResetLift

Elevator reset.

Note: If the elevator is not enabled, please reject the response.

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
    <td>lift</td>
    <td>bool</td>
    <td></td>
    <td>Whether to enable the elevator.</td>
  </tr>
</table>

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    // addr
    val para = ResetReplyPara(
        addr
    ).apply {
        driver.ResetLift(this)
    }
    if (!para.isOK) {
        throw Exception("reset lift failed")
    }
}
```
