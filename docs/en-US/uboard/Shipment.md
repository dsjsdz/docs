# Shipment

Vending Machine Shipment and Shipment Status Query

## Shipment Command

Vending Machine Shipment

<table>
  <tr>
    <th colspan="11" style="text-align: center">
        Channels List, row is 10, column is 10
    </th>
  </tr>
  <tr>
    <td>Layer 1</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
  </tr>
  <tr>
    <td>Layer 2</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td>13</td>
    <td>14</td>
    <td>15</td>
    <td>16</td>
    <td>17</td>
    <td>18</td>
    <td>19</td>
  </tr>
  <tr>
    <td>Layer 3</td>
    <td>20</td>
    <td>21</td>
    <td>22</td>
    <td>23</td>
    <td>24</td>
    <td>25</td>
    <td>26</td>
    <td>27</td>
    <td>28</td>
    <td>29</td>
  </tr>
  <tr>
    <td>Layer 4</td>
    <td>30</td>
    <td>31</td>
    <td>32</td>
    <td>33</td>
    <td>34</td>
    <td>35</td>
    <td>36</td>
    <td>37</td>
    <td>38</td>
    <td>39</td>
  </tr>
  <tr>
    <td>Layer 5</td>
    <td>40</td>
    <td>41</td>
    <td>42</td>
    <td>43</td>
    <td>44</td>
    <td>45</td>
    <td>46</td>
    <td>47</td>
    <td>48</td>
    <td>49</td>
  </tr>
  <tr>
    <td>Layer 6</td>
    <td>50</td>
    <td>51</td>
    <td>52</td>
    <td>53</td>
    <td>54</td>
    <td>55</td>
    <td>56</td>
    <td>57</td>
    <td>58</td>
    <td>59</td>
  </tr>
  <tr>
    <td>Layer 7</td>
    <td>60</td>
    <td>61</td>
    <td>62</td>
    <td>63</td>
    <td>64</td>
    <td>65</td>
    <td>66</td>
    <td>67</td>
    <td>68</td>
    <td>69</td>
  </tr>
  <tr>
    <td>Layer 8</td>
    <td>70</td>
    <td>71</td>
    <td>72</td>
    <td>73</td>
    <td>74</td>
    <td>75</td>
    <td>76</td>
    <td>77</td>
    <td>78</td>
    <td>79</td>
  </tr>
  <tr>
    <td>Layer 9</td>
    <td>80</td>
    <td>81</td>
    <td>82</td>
    <td>83</td>
    <td>84</td>
    <td>85</td>
    <td>86</td>
    <td>87</td>
    <td>88</td>
    <td>89</td>
  </tr>
  <tr>
    <td>Layer 10</td>
    <td>90</td>
    <td>91</td>
    <td>92</td>
    <td>93</td>
    <td>94</td>
    <td>95</td>
    <td>96</td>
    <td>97</td>
    <td>98</td>
    <td>99</td>
  </tr>
</table>

### The list of channels for the physical vending machine is shown in the image.

![fb4204bf8dad](/images/b7146ef2-bb1c-4dd8-b3bd-fb4204bf8dad.jpg)

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    SReplyPara(
        addr,
        no % 100,
        type,
        check,
        lift,
    ).apply {
        driver.Shipment(this)
    }.apply {
        if (!this.isOK) {
            throw Exception("shipping failed")
        }
    }
}
```

## SReplyPara Attribute Description

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
    <td>Channel number, where 00 corresponds to the motor of the first channel in the first row and first column.</td>
  </tr>
  <tr>
    <td rowspan="6">type</td>
    <td rowspan="6">int</td>
    <td rowspan="6"></td>
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
  <tr>
    <td>0 — Auto recognition (not recommended)</td>
  </tr>
  <tr>
    <td>check</td>
    <td>bool</td>
    <td></td>
    <td>Whether to enable drop detection.</td>
  </tr>
  <tr>
    <td>lift</td>
    <td>bool</td>
    <td></td>
    <td>Whether to enable the elevator.</td>
  </tr>
</table>

Note: The slave addr, by default is 1. If you have a vending machine is combo type, the addr may vary.

If the number of combinations is greater than 1, the address of the second machine will be 2, with a maximum support
for 8 machines.

## GetShipmentStatus

Query the shipment status of the driver board.

```kotlin
val para = SSReplyPara(
    addr
).apply {
    driver.GetShipmentStatus(this)
}.apply {
    if (!this.isOK) {
        throw Exception("get shipment status failed")
    }
}

println("runStatus: ${para.runStatus}")
println("faultCode: ${para.faultCode}")
```

| argument | type | default value | description    |
|----------|------|---------------|----------------|
| addr     | int  |               | Slave address. |

## SSReplyPara Attribute Description

<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Default Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td rowspan="4">runStatus</td>
    <td rowspan="4">int</td>
    <td rowspan="4"></td>
    <td>0 - Idle</td>
  </tr>
  <tr>
    <td>1 - Dispensing (Busy)</td>
  </tr>
  <tr>
    <td>2 - Dispensing Complete (Success)</td>
  </tr>
  <tr>
    <td>3 - Fault Status (Failure)</td>
  </tr>
  <tr>
    <td rowspan="2">faultCode</td>
    <td rowspan="2"></td>
    <td rowspan="2"></td>
    <td>Fault code (refer to the fault code table)</td>
  </tr>
  <tr>
    <td>0 — No error</td>
  </tr>
</table>

## Fault code table

Fault codes and descriptions.


<table>
  <tr>
    <th>Code</th>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>0</td>
    <td>Normal</td>
    <td>No error</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Invalid Function Code</td>
    <td>The slave received a function code that cannot be executed. After issuing a query command, this code indicates no program functionality.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Invalid Data Address</td>
    <td>The received data address is not allowed by the slave.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Invalid Data</td>
    <td>The queried value in the data area is not allowed by the slave.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Checksum Error</td>
    <td>Checksum error, the master should resend the data request as per the slave's requirement.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Slave Device Busy</td>
    <td>The slave is busy processing a long-duration command. The master should send the request when the slave is idle.</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Slave Device Fault</td>
    <td>An unrecoverable error occurred while the slave was executing the master's requested action.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Acknowledgement</td>
    <td>The slave has received the request and is processing the data, but it requires more time. To prevent a timeout error on the master, this acknowledgment response is sent. The master can then send a "query program completion" to determine if the slave has finished processing.</td>
  </tr>
</table>