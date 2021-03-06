---
title: c#重学笔记
date: 2021-02-08
author: kaki
location: Tokyo
tags:
  - c#
toc: true
---

### 数据类型

跟 java 中的数据类型大致一样.csharp 中有无符号类型，只表示正数
![20210209000103](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210209000103.png)

### 操作符

csharp 中的操作符本质是函数

### 属性

c++和 java 中只有字段，没有属性这个东西。对字段进行封装一般用 set,get 方法。但是 csharp 中有属性。相当于 set,get 的语法糖。永远使用属性而不是字段来暴露内容。即字段最好永远是`protected`或者`private`

- 可以使用`propfull`快速创建上面的属性的完整声明模板

  ```csharp
  private int age; //字段用驼峰
  public int Age{ //属性用首字母大写
  get{
    return this.age;
  }

  set{
    ...
  }
  }
  ```

- 使用`prop`快速属性的简略声明模板

  ```csharp
  public int Age{get;set;}
  ```

### 索引器

使用`ind`来快速创建索引器

```csharp
public object this[int index]{
  get{};
  set{};
}
```

### 常量

常量跟静态变量一样，都是属于类，而不是实例的。因为他不会变，所以如果属于实例，影响性能.常量的目的一般就是提高执行效率与可读性

```csharp
public const double PI= 3.1415926;
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

  ```csharp
  public int testArrParams(params int[] array);

  testArrParams(1,2,3,4)
  ```

- 具名参数
  可以增加代码的可读性，使用具名参数，参数可以不按顺序写

  ```csharp
  public int test(string name,int age);

  test(age:18,name:"kaki")

  ```

- 扩展方法（this 参数）

  ```csharp
  static class DoubleExtension{
    public static double Round(this double input,int digits);
  }

  static void Main(string[] args){
    double x = 3.14159;
    //此时x可以用Round是因为上文拓展方法的定义
    double y = x.Round(4);
  }
  ```

  注意点：

  - 方法必须是共有，静态的。即被`public static`修饰的
  - 必须是形参列表中的第一个，由 this 修饰
  - 必须由一个静态类（一般类名为 someTypeExtension）来统一收纳对 some type 类型的拓展方法
  - 经典例子：`LINQ`

### 委托

c 语言中的函数指针的升级版，委托也是一种类

#### csharp 中有两种存在委托

- Action 委托：对没有返回值的的函数进行委托
- Func 委托：对有返回值的函数进行委托

#### csharp 中的自定义委托

声明委托时，必须与目标参数方法的参数与返回值类型一致

```csharp
//创建自定义委托
public delegate double Calc(double x,double y);

//进行委托
Calc calc1 = new Calc(func.add);
//执行委托
calc1(1.0,2.0);

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

   ```csharp
   action1 +=action2;
   action1 +=action3;

   action1.invoke();//此时，123会按顺序执行

   ```

1. 隐式异步调用:使用`beginInvoke()`

   ```csharp
   action1.beginInvoke();
   action2.beginInvoke();
   action3.beginInvoke();

   ```

#### 委托的替代

项目中最好使用`接口`代替`委托`

#### 事件

事件多用于桌面，手机，web 等开发的客户端编程。
`MVP,MVC,MVVM`都是从事件驱动模型烟花过来的

![20210217222834](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210217222834.png)

```csharp

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

```csharp
//简单快捷，且参数不需要再写类型
timer.Elapsed += (sender,e)=>{
  //处理逻辑
};
```

#### 自定义事件

1. 使用事件必须先声明委托类型

   ```csharp
       //想要自定义事件，必须要有委托类型，可以声明下面的自定义委托
       public delegate void OrderEventHandler(Customer c, OrderEventArgs e);

       //也可以用csharp提供的万能委托
       public delegate void EventHandler(Object Sender, EventArgs e);

   ```

1. 声明事件

   ```csharp
   //先声明委托字段
   private OrderEventHandler orderEventHandler;
   //再声明事件
   public event OrderEventHandler Order{
     add{
       this.orderEventHandler +=value;
     };
     remove{
       this.orderEventHandler -=value;
     };
   }
   ```

1. 事件委托的参数一般有两个

- 第一个是 Object 类型，就是事件的拥有者
- 第二个是 EventArgs 类的派生类，就是事件参数

### 类

#### 类的访问级别

- `public` 可以被其他的项目引用
- `internal` 只能在被项目

### 泛型

1. 泛型在面向对象的编程中无处不在。
1. 动态语言如 Js 中因为类型是动态的，所以不需要泛型，就默认所有类型于泛型了，但是静态语言中，同一个方法或者属性想要同时给不同的类型使用的话，就需要用到泛型

   ```csharp

   main(){
     int id = 100;
     Student<int> student = new Student();
     student.id = 100;

     //或者
     ulong id = 1000000000000000000;
     Student<ulong> student = new Student();
     student.id = 100;

   };
    public class Student<T>{
    Tid id {get;set}
   };
   ```

1. 泛型可以配合类，接口，方法时候。其中泛型接口使用非常广泛，因为静态语言的接口想要支持所有类型就必须使用泛型

   ```csharp
   //csharp中的集合就是实现了IList泛型接口，保证了集合中能放任何类型的数据
   IList<int> list = new List<int>();
   IList<ulong> list = new List<int>();
   ```

1. 泛型方法也用的很频繁

   ```csharp
   main(){
     int a = 100;
     int b = 200;
     double c = 100.01;
     double d = 200.02;
     add(a,b);
     //或者
     add(c,d);
   };

   public  T add<T>(T a,T b){
     return a+b
   }
   ```

1. 泛型方法也可以配合委托使用,

   ```csharp
   main(){
     Func<int,int,int> func1 = Add;
     int c = func1(1,2);
     Action<string> action1 = Print;
     action1("print something");
   };

   public static int Add(int a ,int b){
     return a+b;
   }
   public void Print(string b){
     Console.WriteLine(b)
   }
   ```

1. 泛型委托`Func`和`Action`相当于下列委托内容的语法糖

   ```csharp
    main(){
     Add<int> func1 = Add;
     int c = func1(1,2);
     Print<string> action1 = Print;
     action1("print something");
   };

   delegate T Add<T>(T a,T b);
   delegate void Print<T>(T a)
   ```

1. 泛型方法配合 Lamda 表达式就可以变成类似 js 的箭头方法声明

   ```csharp
   Func<int,int,int> Add = (a,b)=>a+b;
   int c = Add(1,2);
   ```

### 枚举类型

1. 枚举类型的本质就是一连串数字。用来约束代码。
1. 枚举类型可以运用位运算符进行判断

### 结构体

1. 结构体长得跟类很像，但是本质却是个值类型
2. 结构体也可以实现接口，但是不能有父类（即不能被继承）
3. 不允许显式的无参构造器，但是可以有显式的有参构造器

### Lambda 表达式

Lambda 来自希腊单词
Lambda 表达式的作用：

1. 匿名方法的调用
1. Inline 的方法 （简洁，方便）

Lambda 表达式中比较经典的应用

```csharp

main(){
  DoSomeCal<int>((int a,int b)=>{return a+b;},100,200);
  //上面表达式会自动进行泛型委托的类型推断，所以可以写成下面
  DoSomeCal((a,b)=>{return a+b;},100,200);
}
static void DoSomeCal<T>(Func<T,T,T> func,T a,T b){
  T res = func(a,b);
  Console.WriteLine(res);
}
```

### LINQ

LINQ：.NET Language Integrated Query.
配合 EF 使用，增删改查十分无敌。

### c#6 新语法

1. 方法定义直接使用 lambda 表达式
1. 支持`using static` 可以引入静态类，从而调用该类的属性方法
1. Null 条件运算符 `?.` 或者`??`（只能为可空类型服务）
1. 字符串内插，语法：`$"{xxx}"`
1. 异常筛选器

   ```csharp
   try{

   }catch() when(){ //当异常Try中的异常满足when中的条件时才catch

   }
   ```

### c#7 新语法

1. `out`可以直接声明成变量 如`main(int out name)`
1. 进制用下划线声明
1. 可以用命名实参，如：

   ```csharp
   main(name:"kaki",age:13)
   ```

1. 枚举可以作为泛型的约束
1. 约束不能为空

### c#8 新语法

1. 默认接口方法，接口中可以定义方法体。。
1. switch 可以用 lambda 表达式（很酷）
1. 静态本地函数。有点像 Js 中方法定义方法
1. 异步流`awati` 还是跟 js 有点像

### c#9 新语法

1. 记录：`record`关键字可以让类中的属性无法被修改

   ```csharp

   public record Person{
     public string name{get;set;};
   };

   Person person = new Person("kaki");
   //如果要想修改记录的话，需要用到with关键字来复制一个新的记录
   var otherPerson = person with{};

   ```

1. 简化对象声明

   ```csharp
   Person person = new();
   ```

1. 静态修饰，Lambda 表达式也可以声明静态方法

   ```csharp
   Func<int> func = static ()=>1;
   ```

1. 模式匹配，可以用`is`关键字进行判断

   ```csharp
   if(a is (>=1 and <=3) or (>=10  and <=120)){
     ...
   }
   if(a is not null){
   ...
   }
   ```

1. lambda 的参数弃元 `(_,_)=>1`

### VS 的使用技巧

1. F2 可以重命名所有同名内容
1. 创建事件响应器时:`+=`后 Tab 两次会自动创建响应器方法
1. `ctor`快速创建构造器

```

```
