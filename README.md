# log-utils
<p><img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/log1997/log-utils"></p>

a collection of common utils by [log1997](https://github.com/LOG1997)

it's can be used with vue,react or other js framework.

## Install

```bash
npm install log-utils
```

## Usage

there are some utils in this package.you can use them by import them.
for example:
```js
// this function can be used to get tree data from list data
import { arrayToTree } from 'log-utils'
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

### `arrayToTree`
there are some params in this function:
**your arrData's item have to have idKey and pidKey.**
* arrData:a array and it's **necessary**.
* idKey:the key of id in arrData,it's default value is 'id',**not necessary**.
* pidKey:the key of pid in arrData,it's default value is 'pid'.**not necessary**.
* childrenKey:the key of children in arrData,it's default value is 'children'.**not necessary**.
there are a return data:
* treeData:it's a tree data.


