# promise

+ 简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果

+ ES6规定，Promise对象是一个构造函数，用来生成 Promise 实例

```javascript
const p = new Promise((resolve, reject) => {
    //... some code
    if (异步操作成功) {
        resolve(value);
    } else {
        reject(error);
    }
});
```

+ Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由JavaScript 引擎提供，不用自己部署

+ resolve函数的作用是，将Promise对象的状态从"未完成"变成"成功"，在异步操作成功时调用，并将异步操作的结果作为参数传递过去

+ reject函数的作用是，将Promise对象的状态从"未完成"变成"失败"，在异步操作失败时调用，并将异步操作报出的错误作为参数传递过去