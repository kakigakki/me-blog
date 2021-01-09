---
title: TypeScript学习笔记
author: kaki
date: 2021-01-07
location: Tokyo
tags:
  - TypeScript
toc: true
---

## 简介

### 定义

- Javascript 的一个超集
- Typescript 扩展了 Javascript，并添加了类型
- 可以在任何支持 Javascript 的平台中执行（不过需要将.ts 文件编译成.js 执行）

### 增加了什么？

- 类型
- 支持 ES 的新特性
- 添加 ES 不具备的新特性
- 丰富的配置选项

### 有什么好处？

- 可以将 ts 文件编译成任意版本的 js
- 类型检测

### 安装 Typescript

- npm i -g typescript

## 基本类型

### 类型种类

- **number**

- **string**
- **boolean**
- **字面量** （一般用于联合类型）

  ```ts
  let a: number | string
  ```

- **any**(相当于对该变量关闭了 ts 的类型检测，一般不用)
- **unknown** 表示未知类型的值

  - 一个类型安全的 any
  - unknown 类型的变量，不能直接赋值给其他类型的变量，但 any 可以（这很可怕）

- **void** 用来表示空，表示没有返回值的函数
- **never** 表示永远并不会返回结果

  ```ts
  function fn(): never {
    throw new Error('error')
  }
  ```

- **object** 表示一个 js 对象（一般不这么用）
- **`{prop:类型}`** 定义对象类型一般用这种方法

  ```ts
  //obj对象创建时只能有两个属性，且属性名与类型必须满足下列要求
  let obj: { name: string; age: number }
  //obj对象创建时age可以省略
  let obj2: { name: string; age?: number }
  //obj对象创建时，除了第一个属性必须是string，其他属性可以为任意属性
  let obj2: { name: string; [prop: string]: any }
  ```

- **Array**

  ```ts
  //第一种
  let a: number[]

  //第二种
  let a: Array<number>
  ```

- **元组**：固定长度的数组

  ```ts
  let a: [stirng, stirng, number]
  ```

- **枚举**

  ```ts
  enum Gender {
    Male = 0,
    Female = 1,
  }
  ```

### 类型特点

- 如果变量的声明和赋值时同时进行的，ts 可以自动对变量进行类型检测

- 函数的参数也可以定义类型，返回值也可以定义类型

  ```ts
  function sum(a: number, b: number): number {
    return a + b
  }
  ```

- 类型断言：可以告诉解析器变量的实际类型

  ```ts
  let a = 10
  let b: unknown
  b = 20
  a = b as number // a = <number> b
  ```

### 联合类型

- `|`

  ```ts
  let a: string | number
  ```

- `&`

  ```ts
  let a: { name: string } & { age: number }
  let a = { name: 'heyi', age: 12 }
  ```

### 类型声明

如果联合类型太长，可以把类型取个别名

```ts
type myType = string | number | boolean
let a: myType
```

或者可以用别名来描述一个对象的类型

```ts
type student = { name: string; age: number }

const stu1: student = { name: 'kaki', age: 18 }
```

## 基本配置

### 基本配置文件

根目录下可以配置`tsconfig.json`,ts 编译器的配置文件，ts 编译器可以根据它的信息来进行编译

属性：

- include : 可以指定选择哪些路径下的 ts 文件进行编译
- exclude ：指定不进行编译的 ts
- extends ：定义被继承的配置文件
- **compilerOotions**

  - target : 编译后的 js 的版本（默认 ES3）

    ```js
    target: 'ES6'
    ```

  - module : 指定要使用的模块化的规范

    ```js
    module: 'ES6' //commonjs,amd,es6
    ```

  - lib : 指定项目中要使用的库（一般不需要设置）
  - outDir : 编译后的 js 的输出目录
  - outFile : 将全局作用域的代码的多个文件合并成一个文件
  - allowJs :是否对 js 进行编译，默认是 false
  - checkJs : 是否检查 js 代码的语法，默认是 false
  - removeComment : 编译后是否删除注释，默认 false
  - noEmit : 不生成编译后的文件，默认 false
  - noEmitOnError:当编译错误时，不生产编译后的文件，默认 false
  - alwaysStrict : 设置编译后的文件是否使用严格模式，默认 false
  - noImplicitAny : 不允许隐式的 any 类型
  - noImplicitThis : 不允许不明确的 this

## 面向对象

### 抽象类

Typescript 中可以定义抽象类:不能创建实例，只能被继承

```ts
abstract class Animal(){

  //抽象中可以定义抽象方法
  //子类必须对抽象方法进行抽象
  abstract run():void
}
```

### 接口

Typescript 中也可以定义接口:用来定义一个类中应该包含哪些属性与方法，同时接口也可以当作类型声明`type`使用

- 接口中的所有属性都不能有实际的值
- 接口只定义对象的结构，而不考虑实际值

```ts
interface people {
  name: string
  gender: string
  speak():void
}

//实现一个接口，必须实现接口的所有属性与方法
class student implements people{
  name:string,
  gender:string
  speak(){
    console.log("speak")
  }
}
```

### 修饰符

Typescript 跟其他后端语言一样，也能对类中的属性和方法进行修饰

- private ： 内部属性，只能类的内部访问修改
- protected: 能在当前类，和当前类的子类中访问修改
- public(默认)

Typescript 提供了创建类的语法糖

```ts
class People {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

//下面这种写法等于上面
class People {
  constructor(public name: string, public age: number) {}
}
```

### 泛型

定义函数或者类时，如果遇到类型不明确，就可以使用泛型

```ts
function fn<T>(a: T): T {
  return a
}

class People<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}

//不指定泛型调用时，ts可以自动对类型进行推断
let res = fn(10)

//也指定泛型调用
let res = fn<string>('kaki')
```
