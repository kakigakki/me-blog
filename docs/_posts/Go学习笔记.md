---
title: Go学习笔记
date: 2021-11-14
author: kaki
location: Tokyo
tags:
  - Go
toc: true
---

#  特点

2007年发明的21世纪的新语言
开发效率高  
语法简洁  
执行性能好
天生支持并发
支持跨平台编译

# 开发环境搭建

## 安装Go
1. 下载：https://golang.org/dl/
1. 确认下载完成：任意命令行敲`go version`
1. 配置GOPATH(表明你写的go项目存放路径)
     -  添加任意一个目录到系统环境变量，并且命名为`GOPATH`
    ![20211114003714](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20211114003714.png)
     - 在GOPATH下新建三个文件夹，并将bin文件夹添加到path环境变量中
    ![20211114004016](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20211114004016.png)
    - 打开cmd敲`go env`确认GOPATH已经修改完毕

# 基础

## Go语言文件的基本结构

```go
package main  //表明这是一个可执行文件
import "fmt" //导包

//函数外只能声明标识符（变量/常量/函数）
//函数外的语句都必须以关键字开始( var const func)

func main(){
  fmt.Println("hello")
}
```

## 变量

### 声明变量
```go 
var name string = "s"
var age int
var isOk bool
```

### 批量声明
```go
var (
  name string
  age int
  isOk bool
)
```

### 简短变量声明

简短声明只能在函数体中使用
```go
name:="aaa" //相当于var name = "aaa"
```

## 基础包

### fmt占位符

```go
var n=100
fmt.Printf("%T",n) //查看类型
fmt.Printf("%v",n)//查看变量值
fmt.Printf("%b",n)//查看二进制
fmt.Printf("%d",n)//查看十进制
fmt.Printf("%o",n)//查看八进制
fmt.Printf("%x",n)//查看16进制

var s = "hello"
fmt.Printf("%s",n)//查看字符串
```

### 字符串的常用操作

```go
var name = "ka"+"ki" //拼接用+或者fmt.Sprintf(“%s%s”)

var arr = string.Split(name,"a") //分割 -> [k,ki]
string.Contains(name,"k")//true
string.HasPrefix(name,"ka") //true
string.HasSuffix(name,"ki") //true
string.Index(name,"i")//3
string.LastIndex(name,"i")//0\
string.Join(arr,"") //kaki
```

### if语句

if条件判断还有一种特殊的写法，可以在 if 表达式之前添加一个执行语句，再根据变量值进行判断，举个例子：

```go
func ifDemo2() {
	if score := 65; score >= 90 {
		fmt.Println("A")
	} else if score > 75 {
		fmt.Println("B")
	} else {
		fmt.Println("C")
	}
}//此时的score仅存在于第一个if语句的作用域中
```

### for语句

go语句的for语句有三个语句，且三个语句都可以省略

```go
for i:=0;i<10;i++{

}//正常语句

for i<10{
  
}//省略前后语句，保留中间语句，类似于其他语言的while
for{

}//三个语句全部省略，死循环 
```

Go语言中可以使用for range遍历`数组`、`切片`、`字符串`、`map` 及`通道（channel）`。 通过for range遍历的返回值有以下规律：

- 数组、切片、字符串返回索引和值。
- map返回键和值。
- 通道（channel）只返回通道内的值。
```go
	var s2 = "hello王子"
	for i, v := range s2 {
		fmt.Printf("%d  %c\n", i, v)
	}
          /*
          输出：
          0  h
          1  e
          2  l
          3  l
          4  o
          5  王
          8  子
          */
```

### switch

switch用法跟其他语言没有区别。
但是存在`fallthrough`语法，可以执行满足条件的case的下一个case，是为了兼容C语言中的case设计的。
```go
func switchDemo5() {
	s := "a"
	switch {
	case s == "a":
		fmt.Println("a")
		fallthrough
	case s == "b":
		fmt.Println("b")
	default:
		fmt.Println("...")
	}
}
/* 
输出
a
b
*/
```