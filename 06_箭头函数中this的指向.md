# 箭头函数中this的指向

## 普通函数中的 `this`

+ `this` 总是代表它的直接调用者(js的this是执行上下文)。例如，`obj.func`，那么 `func`中的`this`就是`obj`

+ 在默认情况下（非严格模式下，未使用`'use strict'`），没找到直接调用者，则`this`指的是`window`

+ 在严格模式下，没有直接调用者的函数中的 `this` 是 `undefined`

+ 使用 `call, apply, bind`(es5新增)绑定的，`this`指的是绑定对象

## 箭头函数中的 `this`

+ 箭头函数没有自己的 `this`，它的 `this` 是继承而来的；默认指向在定义它时所处的宿主对象

```javascript
function Person() {
    this.name = 'foo bar';
    this.age = 188;

    setInterval(() => {
        // 这里 this 指向的是 Person 对象
        console.log(this);
        console.log("我叫" + this.name + ", 今年" + this.age + "岁");
    }, 10000);
}

new Person();
```