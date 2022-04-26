---
title: react学习笔记
date: 2022-04-14
author: kaki
location: Tokyo
tags:
  - javaScript
  - react
toc: true
---

## JSX 语法与组件

### JSX 语法

JSX 将 HTML 语法直接加入到 JavaScript 代码中，再通过翻译器转换到纯 JavaScript 后由浏览器执行。在实际开发中，JSX 在产品打包阶段都已经编译成纯 JavaScript，不会带来任何副作用，反而会让代码更加直观并易于维护。 编译过程由 Babel 的 JSX 编译器实现。

### Class 组件

ES6 的加入让 JavaScript 直接支持使用 class 来定义一个类，react 创建组件的方式就是使用的类的继承，ES6 class 是目前官方推荐的使用方式，它使用了 ES6 标准语法来构建，看以下代码

```js
import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  render() {
    return <h1>欢迎进入React的世界</h1>
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
```

es6 class 组件其实就是一个构造器,每次使用组件都相当于在实例化组件.

### 函数式组件

```js
import ReactDOM from 'react-dom'
const App = props => <h1>欢迎进入React的世界</h1>
ReactDOM.render(
  // React组件的调用方式
  <App />,
  document.getElementById('root')
)
```

这样一个完整的函数式组件就定义好了。但要注意！注意！注意！组件名必须大写，否则报错

### 组件的样式

1. 行内样式
   想给虚拟 dom 添加行内样式，需要使用表达式传入样式对象的方式来实现：行内样式需要写入一个样式对象，而这个样式对象的位置可以放在很多地方，例如 render 函数里、组件原型上、外链 js 文件中

1. 使用 class
   其实我们大多数情况下还是大量的在为元素添加类名，但是需要注意的是， class 需要写成className （因为毕竟是在写类 js 代码，会收到 js 规则的现在，而 class 是关键字

### 事件处理

1. 绑定事件
   采用 on+事件名的方式来绑定一个事件，注意，这里和原生的事件是有区别的，原生的事件全是小写onclick , React 里的事件是驼峰 onClick ，React 的事件并不是原生事件，而是合成事件。

1. 事件 handler 的写法

- 直接在 render 里写行内的箭头函数(不推荐)
- 在组件内使用箭头函数定义一个方法(**推荐**)
- 直接在组件内定义一个非箭头函数的方法，然后在 render 里直接使用 onClick={this.handleClick.bind(this)} (不推荐)
- 直接在组件内定义一个非箭头函数的方法，然后在 constructor 里 bind(this)(**推荐**)

3. Event 对象
   和普通浏览器一样，事件 handler 会被自动传入一个 event 对象，这个对象和普通的浏览器 event 对象所包含的方法和属性都基本一致。不同的是 React 中的 event 对象并不是浏览器提供的，而是它自己内部所构建的。它同样具有 event.stopPropagation 、event.preventDefault 这种常用的方法

### Ref 的应用

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

## 组件的数据挂载方式

### 状态（state）

状态就是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护，使用状态的目的就是为了在不同的状态下使组件的显示不同(自己管理)

### 属性（props）

props 是正常是外部传入的，组件内部也可以通过一些方式来初始化的设置，属性不能被组件自己更改，但是你可以通过父组件主动重新渲染的方式来传入新的 props属性是描述性质、特点的，组件自己不能随意更改。之前的组件代码里面有 props 的简单使用，总的来说，在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为组件 props 对象的键值。通箭头函数创建的组件，需要通过函数的参数来接收 props

### 属性 vs 状态

相似点：都是纯 js 对象，都会触发 render 更新，都具有确定性（状态/属性相同，结果相同）
不同点：

1. 属性能从父组件获取，状态不能
2. 属性可以由父组件修改，状态不能
3. 属性能在内部设置默认值，状态也可以，设置方式不一样
4. 属性不在组件内部修改，状态要在组件内部修改
5. 属性能设置子组件初始值，状态不可以
6. 属性可以修改子组件的值，状态不可以

**state** 的主要作用是用于组件保存、控制、修改自己的可变状态。state 在组件内部初始化，可以被
组件自身修改，而外部不能访问也不能修改。你可以认为 state 是一个局部的、只能被组件自身控制
的数据源。state 中状态可以通过 this.setState 方法进行更新， setState 会导致组件的重新渲
染。
**props** 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。它是外部传进来的配置参数，组件内部无法控制无法修改。除非外部组件主动传入新的 props ，否则组件的 props 永远保持不变。没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件（stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。

#### 渲染数据

1. 条件渲染

```js
{
  condition ? '渲染列表的代码' : '空空如也'
}
```

2. 列表渲染

```js
// 数据
const people = [
  {
    id: 1,
    name: 'Leo',
    age: 35,
  },
  {
    id: 2,
    name: 'XiaoMing',
    age: 16,
  },
]
// 渲染列表
{
  people.map(person => {
    return (
      <dl key={person.id}>
        <dt>{person.name}</dt>
        <dd>age: {person.age}</dd>
      </dl>
    )
  })
}
```

## .组件通信的方式

### 父子组件通信方式

1. 传递数据(父传子)与传递方法(子传父)
1. ref 标记 (父组件拿到子组件的引用，从而调用子组件的方法)
   如：在父组件中清除子组件的 input 输入框的 value 值。this.refs.form.reset()

### 非父子组件通信方式

1. 状态提升(中间人模式)
React 中的状态提升概括来说,就是将多个组件需要共享的状态提升到它们最近的父组件上.在父组件上改变这个状态然后通过 props 分发给子组件.

1. 发布订阅模式实现

2. context 状态树传参

```js
//a. 先定义全局context对象
import React from 'react'
const GlobalContext = React.createContext()
export default GlobalContext

//b. 根组件引入GlobalContext，并使用GlobalContext.Provider（生产者）
//重新包装根组件 class App {}
<GlobalContext.Provider
  value={{
    name:"kerwin",
    age:100,
    content:this.state.content,
    show:this.show.bind(this),
    hide:this.hide.bind(this)
  }}
  >
  <之前的根组件></之前的根组件>
</GlobalContext.Provider>


//c. 任意组件引入GlobalContext并调用context，使用GlobalContext.Consumer（消费者）
<GlobalContext.Consumer>
{
context => {
  this.myshow = context.show; //可以在当前组件任意函数触发
  this.myhide = context.hide;//可以在当前组件任意函数触发
  return (
    <div>
    {context.name}-{context.age}-{context.content}
    </div>
  )
}
}
</GlobalContext.Consumer>
```
注意：GlobalContext.Consumer内必须是回调函数，通过context方法改变根组件状态
context优缺点：
- 优点：跨组件访问数据
- 缺点：react组件树种某个上级组件shouldComponetUpdate 返回false,当context更新时，不会引起下级组件更新

## React Hooks

### 使用hooks理由
1. 高阶组件为了复用，导致代码层级复杂
2. 生命周期的复杂
3. 写成functional组件,无状态组件 ，因为需要状态，又改成了class,成本高

### useState(保存组件状态)
```js
const [state,setState] = useState(initialState)
```

### useEffect(处理副作用)和useLayoutEffect (同步执行副作用)
Function Component 不存在生命周期，所以不要把 Class Component 的生命周期概念搬过来试图对号入座。
```js
useEffect(() => {
//effect
return () => {
//cleanup
};
}, [依赖的状态;空数组,表示不依赖])
//不要对 Dependencies 撒谎, 如果你明明使用了某个变量，却没有申明在依赖中，你等于向 React 撒了谎，后果就是，当依赖的变量改变时，useEffect 也不会再次执行, eslint会报警告
```

#### useEffect和useLayoutEffect有什么区别
简单来说就是调用时机不同， useLayoutEffect 和原来componentDidMount & componentDidUpdate 一致，在react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。而useEffect 是会在整个页面渲染完才会调用的代码。**官方建议优先使用useEffect**


### useCallback(记忆函数)

防止因为组件重新渲染，导致方法被重新创建 ，起到缓存作用; 只有第二个参数 变化了，才重新声明一次
```js
var handleClick = useCallback(()=>{
  console.log(name)
},[name])
<button onClick={()=>handleClick()}>hello</button>
//只有name改变后， 这个函数才会重新声明一次，
//如果传入空数组， 那么就是第一次创建后就被缓存， 如果name后期改变了,拿到的还是老的name。
//如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name.
```

### useMemo 记忆组件
useCallback 的功能完全可以由 useMemo 所取代，如果你想通过使用 useMemo 返回一个记忆函数也是完全可以的。
**唯一的区别是：useCallback 不会执行第一个参数函数，而是将它返回给你，而 useMemo 会执行第一个函数并
且将函数执行结果返回给你。**
所以在前面的例子中，可以返回 handleClick 来达到存储函数的目的。所以 useCallback 常用记忆事件函数，生成记忆后的事件函数并传递给子组件使用。而 useMemo 更适合经过函数计算得到一个确定的值，比如记忆组件.

### useRef(保存引用值)

```js
const myswiper = useRef(null);
<Swiper ref={myswiper}/>
```


### useReducer和useContext(减少组件层级)

```js
import React from 'react'
var GlobalContext= React.createContext()
// 注意此时的reduecer 返回值是一个对象 {isShow:false,list:[]}
function App(props){
  let [state,dispatch] = useReducer(reducer,{isShow:true,list:[]})
  return <GlobalContext.Provider value={{
    dispatch
  }}>
  <div>
    {
    state.isShow
      ?<div >我是选项卡</div>
      :null
    }
    {props.children}
  </div>
  </GlobalContext.Provider>
}
function Detail(){
  var {dispatch} = useContext(GlobalContext)
  useEffect(() => {
    //隐藏
    dispatch({
      type:"Hide",
      payload:false
    })
    return () => {
      //显示
      dispatch({
      type:"Show",
      payload:true
      })
    };
  }, [])
  return <div>
        detail
        </div>
}
```