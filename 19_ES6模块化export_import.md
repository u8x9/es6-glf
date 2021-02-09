# ES6 模块化 `export` / `import`

## `export`

用于规定模块的对外接口。

一个模块就是一个独立的文件，该文件内部所有变量外部都无法访问。如果希望外部能访问模块内的变量，就必须使用 `export` 将其输出

+ 示例一

```javascript
export var name = '张三';
export var age = 99;
// 等同于
var name = '张三';
var age = 99;
export {name, age};
```

+ 导出函数

```javascript
// 导出函数
export function multiply(x, y) {
    return x * y;
}
```

+ `as` 别名

```javascript
// as 别名
function v1() {
    // ...
}

function v2() {
    // ...
}

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLastVersion
}
```

## `import`

用于导入其它模块提供的功能。

接受一对在括号，里面指定要从其它模块导入的变量名。里面的变量名必须与被导入模块对外接口名称相同。

```javascript
import {name, age} from './filename.js';
console.log(name, age);
```

```javascript
import {foo,bar} from './filename.js';
console.log(foo,bar);
// 或者
import * as data from './filename.js';
console.log(data.foo, data.bar);
```

```javascript
import {name as myName} from './filename.js';
```

## Module 模块化优点

+ 减少命名冲突

+ 避免引入时的层层依赖

+ 可以提升执行效率
