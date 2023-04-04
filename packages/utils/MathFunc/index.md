# MathFunc
## byteToUnit
this function can be used to convert byte to unit.
for example,if you want to convert 1024 byte to kb, you can use this function like this:
```js
import { byteToUnit } from 'log1997-utils'
const kb=byteToUnit(1025,'kb'); //100.10KB
```
params:
* byte:the number of byte.**necessary**.
* unit:the unit of byte.default value is ''**not necessary**.
* fixed:the number of fixed.default value is 2.**not necessary**.

return:
* unitByte:the string of unit data.