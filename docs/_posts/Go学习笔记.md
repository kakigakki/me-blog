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

### 

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
