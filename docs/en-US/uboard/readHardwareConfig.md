# readHardwareConfig

Read the hardware configuration

```kotlin
// serial driver
private lateinit var driver: UBoard

fun your_method() {
    cc.uling.usdk.board.mdb.para.HCReplyPara().apply {
        driver.readHardwareConfig(this)
    }.let {
        if (it.isOK) {
            println("isWithCoin: ${it.isWithCoin}, isWithCash: ${it.isWithCash}, isWithPOS: ${it.isWithPOS}, isWithPulse: ${it.isWithPulse}, isWithIdentify: ${it.isWithIdentify}, code: ${it.code}")
        }
    }
}
```

## HCReplyPara Attribute Description

| Attribute    | Type | Default Value | Description                                                         |
|--------------|------|---------------|---------------------------------------------------------------------|
| version      | Int  |               | Hardware Version                                                    |
| withCoin     | bool |               | Coin Acceptor                                                       |
| withCash     | bool |               | Bill Validator                                                      |
| withPOS      | bool |               | POS Machine                                                         |
| withPulse    | bool |               | Pulse Payment                                                       |
| withIdentify | bool |               | Identity Recognition                                                |
| code         | bool |               | Currency Code, e.g., Chinese Yuan (CNY) 0086, US Dollar (USD) 0001. |

Note: Fields starting with `with*` may have a value of false, indicating that the current vending machine is not
equipped with this hardware device.

If the payment hardware device is not equipped, you can use a QR code or other payment systems.

## ReadHardwareConfig{id=v2}

Query the hardware version of the driver board.

```kotlin
// The slave addr, by default, is 1. 
// If you have a vending machine is combo type, the addr may vary.
var addr = 1
HCReplyPara(addr).apply {
    driver.ReadHardwareConfig(this)
}.apply {
    if (this.isOK) {
        println("row: ${this.row}, col: ${this.col}")
    }
}
```

## HCReplyPara Attribute Description

| Attribute | Type   | Default Value | Description             |
|-----------|--------|---------------|-------------------------|
| version   | string |               | Hardware Version Number |
| row       | int    |               | Number of Channels      |
| column    | int    |               | Number of Columns       |

This refers to the maximum number of channels supported by the current hardware.
By default, it starts from 0, and the maximum value is (row * column -1).

eg: row is 10, column is 10, it starts from 0, the maximum value is 99.

<table>
  <tr>
    <th colspan="11" style="text-align: center">Channels List</th>
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
