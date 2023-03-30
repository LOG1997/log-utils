# log-utils
<p><img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/log1997/log-utils"></p>

a collection of common utils by [log1997](https://github.com/LOG1997)

it's can be used with vue,react or other js framework.

## Install

```bash
npm install log1997-utils
```

## Usage

there are some utils in this package.you can use them by import them.
for example:
```js
// this function can be used to get tree data from list data
import { arrayToTree } from 'log1997-utils'
const arrData=[
    {id:1,name:'a',pid:0},
    {id:2,name:'b',pid:1},
    {id:3,name:'c',pid:1},
    {id:4,name:'d',pid:2},
    {id:5,name:'e',pid:2},
    {id:6,name:'f',pid:3},
    {id:7,name:'g',pid:3},
    {id:8,name:'h',pid:4},
]
cosnt treeData=arrayToTree(arrData);
console.log(treeData);
```

## API
<!-- toc -->
* [ArrayFunc](#arrayfunc)
  * [arrayToTree](#arraytotree)
  * [treeToArray](#treetoarray)
* [ColorFunc](#colorfunc)
    * [getRandomGradientColor](#getrandomgradientcolor)
* [MathFunc](#mathfunc)
    * [byteToUnit](#bytetounit)
<!-- tocstop -->
### ArrayFuc
#### `arrayToTree`
there are some params in this function:
**your arrData's item have to have idKey and pidKey.**
* arrData:a array and it's **necessary**.
* idKey:the key of id in arrData,it's default value is 'id',**not necessary**.
* pidKey:the key of pid in arrData,it's default value is 'pid'.**not necessary**.
* childrenKey:the key of children in arrData,it's default value is 'children'.**not necessary**.

there are a return data:
* treeData:it's a tree data.


#### `treeToArray`
there are some params in this function:

* treeData:a tree data and it's **necessary**.
* childrenKey:the key of children in treeData,it's default value is 'children'.**not necessary**.

there are a return data:
* arrData:it's a array data.


### ColorFunc
#### `getRandomGradientColor`
this function can be used to get a random gradient color string.
there are some params in this function:
* hexColor:the number of hexcolor in gradient color string. like:#ffffff.**not necessary**.
* deg:the deg of gradient color,it's tyep is number. like:90.**not necessary**.
* Colorangle:the angle of gradient color,it's type is number. like:90.**not necessary**.
there are a return data:
* color:it's a gradient color string.like:linear-gradient(90deg, #ffffff, #ffffff).

and ther are other functions in this package.

table of contents:

| Function | Description |
| --- | --- |
|rgb2Hsv|rgb to hsv|
|rgb2Hsl|rgb to hsl|
|rgb2Hex|rgb to hex|
|hex2Rgb|hex to rgb|
|hsv2Rgb|hsv to rgb|
|rotateHsv|rotate hsv default angle is 30°|
|randomColor|get a random color|

### MathFunc
#### `byteToUnit`
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