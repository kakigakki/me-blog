---
title: Vue3学习笔记
author: kaki
date: 2021-01-14
location: Tokyo
tags:
  - vue
toc: true
---

## 生命周期

### vue3 的生命周期

![20210116123441](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210116123441.png)

- vue3 中的`beforeCreat`和`created`都可以用`setup`替代
- vue3 中的`beforeDestroy`和`destroyed`都已经不存在，用`beforeUnmount`和`unmounted`替代
- vue3 中的推荐使用组合 API 的方式来使用声明周期，因为会 vue2 中的使用方法来得快
  ![20210116124806](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210116124806.png)

  ```js
  import {onMounted} from "vue"

  setup(){
    onMounted(()=>{
      //在此执行操作
    })
  }
  ```

## Composition API

### setup

#### 特性

- 新的 option，所有的组合 API 函数都在此使用，只在初始化时执行一次
- 函数如果返回对象，对象中的属性或者方法，都可以再模板中直接使用
- 组合 API 的入口

#### 细节

- setup 在`beforeCreat`之前执行，即，setup 在执行的时候，组件还没创建出来，即组件的 this 还处于`undefined`状态，无法通过 this 来访问`data/computed/methods/props`

- setup 中`返回对象`中的属性会与`data函数`返回的对象的属性合并为组件对象的属性(如果重名，setup 优先，如果 setup 就别使用 data 了)

- setup 中`返回对象`中的方法会与`methods对象`中的方法合并为组件对象的方法(如果重名，setup 优先,如果 setup 就别使用 methods 了)

#### 参数

setup 中有两个参数`props`与`context`

- `props` : 是一个对象，里面有父级组件向子级组件传递的数据
- `context`：是一个对象，有一个`attrs`对象，`emit`方法，`slots`对象
  - `context.attrs` ： 是一个对象，包含在当前组件中标签中声明的所有属性的对象（不包含 props 中的），
  - `context.emit` ： 跟`vue2`中的`this.emit`
  - `context.slots`

### ref

#### 特性

- 一个定义响应式数据的函数
- 返回一个 Ref 对象，对象中有一个 Value 属性，
  - 如果需要对数据进行操作，需要使用该 Ref 对象调用 value 属性
  - html 模板中不需要使用调用 value 属性
- 一般用于基本类型的响应式设定

#### 细节

- `ref方法`中也可以传一个对象，此时 vue3 会自动将 ref 返回值中的 value 自动包装成`reactive`对象（不推荐使用）

### reactive

- 定义多个数据的响应式（对象响应）
- 将目标对象通过 proxy 代理，实现对象的深层次响应式

### computed

#### 特性

- 使用方法与 vue2 中有所不同,`computed`函数返回的是一个`ref`对象

  ```js
  setup(){
    //计算属性函数中如果只传入一个回调函数，表示get
    const name1 = computed(() => {
      return xxx + xxx
    })
    //计算属性函数中如果传入一个对象，可以有get,set方法
    const name2 = computed({get(){},set(val){}})
    return {
      name,
      name2
    }
  }
  ```

### watch&watchEffect

#### 特性

- `watch`使用方法与 vue2 中有所不同

  ```js
  const user = { name1: 'kaki', age: 18 }
  const name = ref('')
  //第一个参数表示监视内容（可以是对象)
  //第二个参数监视内容改变后的回调函数，回调函数的参数为newVal,oldVal
  //第三个参数可以配置一些监视的属性,immediate表示初始化时执行一次，deep表示对对象的深层次监视
  watch(user,({name1,age})=>{
    name.value = name1+age
  }，{immediate:true,deep:true})

  ```

- `watch`可以指定多个监视内容

  ```js
  watch([user, user1], (newVal, oldVal) => {
    //此时newVal,oldVal也是数组[newUser,newUser1],[oldUser,oldUser1]
  })
  ```

- `watch`监视的数据如果是非响应式的数据，如对象中的属性，那么需要使用回调的方法对它进行一层包装

  ```js
  watch([() => user.name, () => user.age],(new)=>{
    //此时才能监视到name,age
  })
  ```

* `watchEffect`为 vue3 中特有的，
* 不用直接指定要监视的内容，直接在回调函数中操作需要监视的内容
* 不需要像`watch`中配置`immediate`就可以默认执行一次

  ```js
  watchEffect(() => {
    name.value = name1 + age
  })
  ```
