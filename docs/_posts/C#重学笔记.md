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

### 委托

c 语言中的函数指针的升级版，委托也是一种类

#### c#中有两种存在委托

- Action 委托：对没有返回值的的函数进行委托
- Func 委托：对有返回值的函数进行委托

#### c#中的自定义委托

声明委托时，必须与目标参数方法的参数与返回值类型一致

```c#
//创建自定义委托
public delegate double Calc(double x,double y)

//进行委托
Calc calc1 = new Calc(func.add)
//执行委托
calc1(1.0,2.0)

```

#### 委托的使用

一般就是用委托类型的参数封装一个外部方法，把这个方法传进方法的内部再进行间接调用，即能将方法作为参数进行传递

1. 模板方法，`借用`指定的外部方法来产生结果，委托有返回值
2. 回调方法：调用指定的外部方法，委托没有返回值

#### 委托的注意事项

1. 方法级别的紧耦合，现实工作中慎之又慎
2. 可读性下降
3. 使用不当，造成内存泄漏

#### 委托的高级使用

1. 多播委托：一个委托内部，封装多个委托方法

```c#
action1 +=action2
action1 +=action3

action1.invoke()//此时，123会按顺序执行

```

1. 隐式异步调用:使用`beginInvoke()`

```c#
action1.beginInvoke()
action2.beginInvoke()
action3.beginInvoke()

```

#### 委托的替代

项目中最好使用`接口`代替`委托`

#### 事件

事件多用于桌面，手机，web 等开发的客户端编程。
`MVP,MVC,MVVM`都是从事件驱动模型烟花过来的

![20210217222834](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210217222834.png)

```c#

 //事件拥有者timer
 Timer timer = new Timer();
 //事件订阅者为boy
 Boy boy = new Boy();
 //事件为Elapsed ，事件订阅为+= ，事件处理器为action
  timer.Elapsed += boy.action;

  private void action(Object sender,EventArgs e){
    //处理逻辑
  }

```

还可以使用`lanmda`表达式挂事件响应器

```c#
//简单快捷，且参数不需要再写类型
timer.Elapsed += (sender,e)=>{
  //处理逻辑
}
```

#### 自定义事件

1. 使用事件必须先声明委托类型

```c#
    //想要自定义事件，必须要有委托类型，可以声明下面的自定义委托
    public delegate void OrderEventHandler(Customer c, OrderEventArgs e);

    //也可以用c#提供的万能委托
    public delegate void EventHandler(Object Sender, EventArgs e);

```

1.声明事件

```c#
//先声明委托字段
private OrderEventHandler orderEventHandler
//再声明事件
public event OrderEventHandler Order{
  add{
    this.orderEventHandler +=value;
  }
  remove{
    this.orderEventHandler -=value;
  }
}
```

1. 事件委托的参数一般有两个

- 第一个是 Object 类型，就是事件的拥有者
- 第二个是 EventArgs 类的派生类，就是事件参数

### VS 的使用技巧

1. F2 可以重命名所有同名内容
1. 创建事件响应器时:`+=`后 Tab 两次会自动创建响应器方法
