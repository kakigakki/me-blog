---
title: javascript速记
date: 2020-06-23
author: kaki
location: Tokyo
tags:
  - javascript
toc: true
---

## 深入理解系列

### 执行上下文与作用域

1. js 中的作用域属于静态作用域,当被声明的时候作用域中变量就被决定了
1. 函数上下文的变量对象初始化只包括 Arguments 对象,不包括形参,函数声明,变量声明
1. 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值
1. 在代码执行阶段，会再次修改变量对象的属性值

## 实战系列

### 利用 cheerio 进行网络爬虫

1. cheerio 可以在服务器端操作网络请求回来的 dom 元素,从而达到操作 dom 元素获取数据的效果

### this 的指向

1. 函数直接调用的话,this 就是全局对象
1. 用 new 的话指向新 new 出来对象
1. call,apply,bind 的情况,指向第一个参数的 obj
1. 箭头函数的 this 相当于箭头函数定义时所在作用域的普通函数的 this 注意: **箭头函数不要直接在对象中声明,因为对象没有作用域**
1. 在事件响应函数中,响应函数绑定给谁,this 就指向谁

### typeof 和 instanceof 的不同之处

1. typeof 数组和对象 都是 object
1. typeof 函数 是 function
1. instanceof 数组和对象,能够区别
1. 数组的 this.contructor 是数组函数

### 利用 Object.prototype.valueOf，动态改变函数内容

1. 当需要一个函数，要满足能够无限调用，即可以有无限个`()`，且最后返回的是一个原始值时，就可以使用`valueOf`来修改函数返回的内容为原始值
1. 在 codeWars 上看到了一个有意思的题目，可以利用`valueOf`轻松实现
1. 题目描述如下：

::: ctnr
创建一个函数，该函数满足下面条件：

- 接受任意数量的参数，
- 返回给定的每个参数的总和，
- 任何不能解析为数字的参数都将计为 0。
- 可以无限调用，
- 下一个函数调用将执行相同的操作，且与前一次结果求和，最后返回的数字。

:::

代码：
::: click

```js
function MagicFunction(...args) {
  let sum1 = 0
  let f1 = (...args) => {
    //将能转为数值的转为数值
    sum1 += args
      .map(Number)
      //排除NaN
      .reduce((cur, prev) => {
        return (!isNaN(prev) ? prev : 0) + cur
      }, 0)
    return f1
  }
  f1.valueOf = () => sum1 //利用valueOf重新声明f1函数，此时 f1.valueOf() == f1 为true
  return f1(...args)
}
```

:::

## ES6 系列

### class 与构造函数的区别

- 大部分情况下，class 只是构造函数的语法糖
- class 中直接定义的方法就是定义在`prototype`上的
- class 中直接定义的属性，就是实例属性，相当于`this.xxx`
- class 中定义的方法都是不可枚举的，构造方法的原型方法是可以枚举的
- 在`constuctor`中定义属性`this.xxx = yyy`和在外面定义的`xxx=yyy`中是一样的
- class 不能不带`new`直接调用，会报错
- 类在定义的时候不存在变量提升，这点与构造方法完全不同
- 类中有静态属性/方法`static xxx = yyy` 表示该方法只能由类本身调用，实例中不存在
- 类中有私有属性/属性（提案中）`#xxx = yyy` 表示该属性只能在类内部被调用(实例中虽然也有该属性，但是在类的外部也不能调用，可以通过传参将实例传进类内部调用该私有属性)
- 类中也可以定义静态私有属性`static #xxx =yyy`
- new 命令的新属性`new.target`返回一个通过`new`或者`Reflect.constructor`创建的实例对象的类/构造函数
- 该属性可以判断一个构造函数/类是如何被调用的
- 该属性在子类继承父类时，new.target 返回的是子类，利用这个特点，可以实现父类只能被继承，不能被实例化（有点像抽象类？）

```js
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化')
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super()
    // ...
  }
}

var x = new Shape() // 报错
var y = new Rectangle(3, 4) // 正确
```

### async 知识点

- `async`函数完全可以看作多个异步操作，包装成的一个`Promise`对象，而 await 命令就是内部 then 命令的语法糖。
- `async`总是返回一个`Promise`对象,且 return 后的语句总是作为 then 的回调的参数
- `await`后面如果是 Promise 对象(或 thenable 对象),返回该对象的 `resolve()参数`,如果是数值字符之类的,则就是返回其值
- 任何一个`await`语句后面的`Promise`对象变为`reject`状态，那么整个`async`函数都会中断执行。
