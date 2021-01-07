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
  let a = { name: string } & { age: number }
  let a = { name: 'heyi', age: 12 }
  ```

### 类型别名

如果联合类型太长，可以把类型取个别名

```ts
type myType = string | number | boolean
let a: myType
```
