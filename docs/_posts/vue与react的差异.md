---
title: Css案例集
date: 2022-03-08
author: kaki
location: Tokyo
tags:
  - vue
  - react
toc: true
---

## 双向绑定

- vue中可以直接对vue框架规定好的一些页面元素，如input使用v-model指定，直接完成双向绑定。
- react在这方面就需要自己动手的地方比较多了，首先在`input`的`value`属性绑定一个状态，然后绑定`onChange`事件当value改变时来手动给状态设定值，已完成双向绑定。

## 基础父子通讯

父传子都是差不多的，主要差别在于子传父。

- vue中需要在子组件中emit一个事件，然后父组件监听这个事件，以完成子父通讯。
- react中还是利用父传子时属性传递的思想来完成，但是此时父传给子的是一个回调函数类型的属性，当子完成操作时，调用该函数，就可以触发父组件发生改变。

## 插槽

- vue中通过slot实现，需要学习slot相关语法与知识
- react中还是利用属性的思想完成。只需要在子组件中用`this.props.children`就可以拿到html片段


## 生命周期

如果不使用函数式组件的话，其实React的生命周期和Vue的写法是很像的，都是`mounted``updated`这一套东西，但是如果React使用了函数式编程的话，两者差别就有点大了。
- vue不管是vue2还是vue3其实都是调用生命周期函数。比如：
  - vue2中用`mounted(){}`
  - vue3中用`onMounted(()=>{})`
- React的函数式编程中直接使用`useEffect`来模拟了整个生命周期，十分牛逼。

```ts
//第一个参数为回调函数,当组件初始化或者监听对象发生改变时调用 （mounted,updated）
//回调函数的返回值也是一个函数，用来表示组件销毁时的回调函数。(destroyed)
//第二个参数为监听对象,可以是state或者prop
useEffect(()=>{

    return ()=>{

    }
},[])

```

## css模块化

- vue中应该使用模板,每个模板里都有带着scoped的css标签,不太需要管理css的重复,覆盖问题
- react中需要使用`xxx.module.css`的命名方式对css文件进行命名,将css模块化,然后使用css in js的方式去引用
```js
import cssClass from "./test.module.css"

<div class={cssClass.active}>
 test
</div>

```

## 响应式数据的修改

- vue3中直接使用proxy对由`ref()`,`reactive()`包装过的数据进行深层次的绑定。
- react中如果不适用第三方库的话，每次想要修改`state`都需要深拷贝出一份新的对象，然后再修改这个新对象，再把这个新对象赋给`state`，如此操作特别麻烦
- react中可以使用`immutable`第三方库来修改state，`immutable`优点：
  - 每次修改immutable对象都出创建新对象，所以可以直接修改被immutable包装过的state，可以减少代码量
  - 因为如果只是单纯的深拷贝创建新对象赋值给state，性能损耗很大，所以immutable在性能上也做了优化
  - 
