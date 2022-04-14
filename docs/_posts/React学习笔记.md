---
title: react学习笔记
date: 2022-04-14
author: kaki
location: Tokyo  
tags: 
  - javaScript
  - react
toc : true
---

## JSX语法与组件

### JSX语法
JSX 将 HTML 语法直接加入到 JavaScript 代码中，再通过翻译器转换到纯 JavaScript 后由浏览器执行。
在实际开发中，JSX 在产品打包阶段都已经编译成纯 JavaScript，不会带来任何副作用，反而会让代码
更加直观并易于维护。 编译过程由Babel 的 JSX 编译器实现。

### Class组件

ES6的加入让JavaScript直接支持使用class来定义一个类，react创建组件的方式就是使用的类的继承，
ES6 class 是目前官方推荐的使用方式，它使用了ES6标准语法来构建，看以下代码

```js
import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
render () {
return (
<h1>欢迎进入React的世界</h1>
)
}
}
ReactDOM.render(
<App />,
document.getElementById('root')
)
```

es6 class 组件其实就是一个构造器,每次使用组件都相当于在实例化组件.

### 函数式组件

```js
import ReactDOM from 'react-dom'
const App = (props) => <h1>欢迎进入React的世界</h1>
ReactDOM.render(
// React组件的调用方式
<App />,
document.getElementById('root')
)
```
这样一个完整的函数式组件就定义好了。但要注意！注意！注意！组件名必须大写，否则报错

### 组件的样式

1. 行内样式
想给虚拟dom添加行内样式，需要使用表达式传入样式对象的方式来实现：
行内样式需要写入一个样式对象，而这个样式对象的位置可以放在很多地方，例如render 函数里、组
件原型上、外链js文件中

1. 使用class
其实我们大多数情况下还是大量的在为元素添加类名，但是需要注意的是， class 需要写成
className （因为毕竟是在写类js代码，会收到js规则的现在，而class 是关键字

### 事件处理

1. 绑定事件
采用on+事件名的方式来绑定一个事件，注意，这里和原生的事件是有区别的，原生的事件全是小写
onclick , React里的事件是驼峰onClick ，React的事件并不是原生事件，而是合成事件。

1. 事件handler的写法
- 直接在render里写行内的箭头函数(不推荐)
- 在组件内使用箭头函数定义一个方法(**推荐**)
- 直接在组件内定义一个非箭头函数的方法，然后在render里直接使用onClick={this.handleClick.bind(this)} (不推荐)
- 直接在组件内定义一个非箭头函数的方法，然后在constructor里bind(this)(**推荐**)

3. Event 对象
和普通浏览器一样，事件handler会被自动传入一个 event 对象，这个对象和普通的浏览器 event 对
象所包含的方法和属性都基本一致。不同的是 React中的 event 对象并不是浏览器提供的，而是它自己内部所构建的。它同样具有event.stopPropagation 、event.preventDefault 这种常用的方法

### Ref的应用

1. 类组件写法
```js
myRef = React.createRef()
<div ref={this.myRef}>hello</div>
//访问this.myRef.current
```

2. 函数组件写法
```js
myRef = useRef()
<div ref={myRef}>hello</div>
//访问this.myRef.current
```
