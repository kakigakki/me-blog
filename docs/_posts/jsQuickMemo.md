---
title: javascript速记
date: 2020-06-23
author: kaki
location: Tokyo  
tags: 
  - javascript
toc : true
---

## 深入理解系列

### 执行上下文与作用域

1. js中的作用域属于静态作用域,当被声明的时候作用域中变量就被决定了
1. 函数上下文的变量对象初始化只包括 Arguments 对象,不包括形参,函数声明,变量声明
1. 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值
1. 在代码执行阶段，会再次修改变量对象的属性值

## 实战系列

### 利用cheerio进行网络爬虫

1. cheerio可以在服务器端操作网络请求回来的dom元素,从而达到操作dom元素获取数据的效果

### this的指向

1. 函数直接调用的话,this就是全局对象
1. 用new的话指向新new出来对象
1. call,apply,bind的情况,指向第一个参数的obj
1. 箭头函数的this相当于箭头函数定义时所在作用域的普通函数的this 注意: **箭头函数不要直接在对象中声明,因为对象没有作用域**
1. 在事件响应函数中,响应函数绑定给谁,this就指向谁

### typeof 和instanceof的不同之处

1. typeof 数组和对象 都是object
1. typeof 函数 是function
1. instanceof 数组和对象,能够区别
1. 数组的this.contructor是数组函数

### 利用Object.prototype.valueOf，动态改变函数内容

1. 当需要一个函数，要满足能够无限调用，即可以有无限个`()`，且最后返回的是一个原始值时，就可以使用`valueOf`来修改函数返回的内容为原始值
1. 在codeWars上看到了一个有意思的题目，可以利用`valueOf`轻松实现
1. 题目描述如下：
::: tip
创建一个函数，该函数满足下面条件：
接受任意数量的参数，
返回给定的每个参数的总和，
任何不能解析为数字的参数都将计为0。
可以无限调用，
下一个函数调用将执行相同的操作，且与前一次结果求和，最后返回的数字。
:::
1. 代码：

```js
function MagicFunction(...args) {
    let sum1 = 0
    let f1 = (...args) => {
        //将能转为数值的转为数值
        sum1 += args.map(Number)
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
