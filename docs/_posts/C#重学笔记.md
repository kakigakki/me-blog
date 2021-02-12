---
title: C#重学笔记
date: 2021-02-08
author: kaki
location: Tokyo
tags:
  - C#
toc: true
---

### 数据类型

跟 java 中的数据类型大致一样.c#中有无符号类型，只表示正数
![20210209000103](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210209000103.png)

### 操作符

c#中的操作符本质是函数

### 属性

c++和 java 中只有字段，没有属性这个东西。对字段进行封装一般用 set,get 方法。但是 c#中有属性。相当于 set,get 的语法糖。永远使用属性而不是字段来暴露内容。即字段最好永远是`protected`或者`private`

- 可以使用`propfull`快速创建上面的属性的完整声明模板

  ```c#
  private int age //字段用驼峰
  public int Age{ //属性用首字母大写
  get{
    return this.age
  }

  set{
    ...
  }
  }
  ```

- 使用`prop`快速属性的简略声明模板

  ```c#
  public int Age{get;set;}
  ```

### 索引器

使用`ind`来快速创建索引器

```c#
public object this[int index]{
  get{}
  set{}
}
```

### 常量

常量跟静态变量一样，都是属于类，而不是实例的。因为他不会变，所以如果属于实例，影响性能.常量的目的一般就是提高执行效率与可读性

```c#
public const double PI= 3.1415926
```

### 参数

- 传值参数

  - 值类型 ： 传变量副本
  - 引用类型 ： 传变量的内存地址

- 引用参数：不论时值类型还是引用类型参数都与变量指向内存中的同一个地址，即使引用参数在方法体中被换成另一个引用，方法体外的引用变量也会变。

- 输出参数
  方法体内给输出参数赋值且必须赋值，否则编译过不去

- 数组参数:params 参数
  参数列表中只能有一个，且必须在最后

  ```c#
  public int testArrParams(params int[] array)

  testArrParams(1,2,3,4)
  ```

- 具名参数
  可以增加代码的可读性，使用具名参数，参数可以不按顺序写

  ```c#
  public int test(string name,int age)

  test(age:18,name:"kaki")

  ```

- 扩展方法（this 参数）

  ```c#
  static class DoubleExtension{
    public static double Round(this double input,int digits)
  }

  static void Main(string[] args){
    double x = 3.14159
    //此时x可以用Round是因为上文拓展方法的定义
    double y = x.Round(4)
  }
  ```

  注意点：

  - 方法必须是共有，静态的。即被`public static`修饰的
  - 必须是形参列表中的第一个，由 this 修饰
  - 必须由一个静态类（一般类名为 someTypeExtension）来统一收纳对 some type 类型的拓展方法
  - 经典例子：`LINQ`
