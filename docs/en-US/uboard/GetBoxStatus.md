# GetBoxStatus

Query the current status of the locker.

Note: This method is only applicable to lockers. the vending machine `type` is `2`

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
    <td>no</td>
    <td>int</td>
    <td></td>
    <td>Locker number.</td>
  </tr>
  <tr>
    <td rowspan="5">type</td>
    <td rowspan="5">int</td>
    <td rowspan="5"></td>
    <td>Channel type:</td>
  </tr>
  <tr>
    <td>1 — Spring motor</td>
  </tr>
  <tr>
    <td>2 — Electromagnetic lock</td>
  </tr>
  <tr>
    <td>3 — Conveyor belt channel</td>
  </tr>
  <tr>
    <td>4 — Motor timing control</td>
  </tr>
</table>

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    // addr
    val para = BSReplyPara(
        addr,
        code % 100
    ).apply {
        driver.GetBoxStatus(this)
    }
    if (!para.isOK) {
        throw Exception("get box status failed")
    }
}
```

## TempReplyPara Attribute Description

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
    <td>0 - Open state</td>
  </tr>
  <tr>
    <td>1 - Closed state</td>
  </tr>
  <tr>
    <td>no</td>
    <td>int</td>
    <td></td>
    <td>Locker number.</td>
  </tr>
</table>