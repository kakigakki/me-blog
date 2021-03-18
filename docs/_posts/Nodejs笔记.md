---
title: c#重学笔记
date: 2021-03-18
author: kaki
location: Tokyo
tags:
  - javascript
toc: true
---

### 优点

1. 擅长高并发处理.
1. 生态也很强
1. 不需要借助`apache,nginx`等服务器,自带 http 服务器
1. 应用范围:![20210318213106](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210318213106.png)

### 内置模块

nodejs 中的方法大部分都是异步的

#### http 模块

```js
var http = require('http')
http
  .createServer(function(request, response) {
    //设置响应头
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    //表示给页面上输出一句话,并且结束响应
    response.end('Hello World')
  })
  .listen(8081)

console.log('Server running at http://127.0.0.1:8081/')
```

1. `request`表示客户端的请求
1. `response`表示给浏览器响应信息

#### URL 模块

```js
const url = require('url')
const api = 'https://www.baidu.com?name=kaki&age=24'
const getValue = url.parse(api, true).query
console.log(getValue.name, getValue.age) //kaki 24
```

#### fs 模块

`const fs = require("fs")`

##### 常用命令

1. `fs.stat` 检测是文件还是目录

   ```js
   const fs = require('fs')
   fs.stat('hello.js', (error, stats) =>{
   if(error){
   console.log(error)
   } else {
   console.log(stats)
   console.log(`文件：${stats.isFile()}`)
   console.log(`目录：\${stats.
   ```

1. `fs.mkdir` 创建文件夹

   ```js
   const fs = require('fs')
   fs.mkdir('logs', error => {
     if (error) {
       console.log(error)
     } else {
       console.log('成功创建目录：logs')
     }
   })
   ```

1. `fs.writeFile` 创建并写入文件(如何已经存在进行替换)

   ```js
   fs.writeFile('logs/hello.log', '您好~ \n', error => {
     if (error) {
       console.log(error)
     } else {
       console.log('成功写入文件')
     }
   })
   ```

1. `fs.appendFile` 如果存在文件,则追加内容,如果文件不存在则创建并写入

   ```js
   fs.appendFile('logs/hello.log', 'hello ~ \n', error => {
     if (error) {
       console.log(error)
     } else {
       console.log('成功写入文件')
     }
   })
   ```

1. `fs.readFile` 读取文件

   ```js
   const fs = require('fs')
   fs.readFile('logs/hello.log', 'utf8', (error, data) => {
     if (error) {
       console.log(error)
     } else {
       console.log(data)
     }
   })
   ```

1. `fs.readdir` 读取目录

   ```js
   const fs = require('fs')
   fs.readdir('logs', (error, files) => {
     if (error) {
       console.log(error)
     } else {
       console.log(files)
     }
   })
   ```

1. `fs.rename` 重命名或者移动文件

   ```js
   const fs = require('fs')
   fs.rename('js/hello.log', 'js/greeting.log', error => {
     if (error) {
       console.log(error)
     } else {
       console.log('重命名成功')
     }
   })
   ```

1. `fs.rmdir` 删除目录

   ```js
   fs.rmdir('logs', error => {
     if (error) {
       console.log(error)
     } else {
       console.log('成功的删除了目录：logs')
     }
   })
   ```

1. `fs.unlink` 删除文件

   ```js
   fs.unlink(`logs/${file}`, error => {
     if (error) {
       console.log(error)
     } else {
       console.log(`成功的删除了文件: ${file}`)
     }
   })
   ```

1. `fs.createReadStream` 以流的方式读取文件

   ```js
   const fs = require('fs')
   var fileReadStream = fs.createReadStream('data.json')
   let count = 0
   var str = ''
   //监听每次写入的数据
   fileReadStream.on('data', chunk => {
     console.log(`${++count} 接收到：${chunk.length}`)
     str += chunk
   })
   //监听结束时
   fileReadStream.on('end', () => {
     console.log('--- 结束---')
     console.log(count)
     console.log(str)
   })
   //监听出错时
   fileReadStream.on('error', error => {
     console.log(error)
   })
   ```

1. `fs.createWriteStream` 以流的方式写入文件

   ```js
   var fs = require('fs')
   var data = '我是从数据库获取的数据，我要保存起来'
   // 创建一个可以写入的流，写入到文件output.txt 中
   var writerStream = fs.createWriteStream('output.txt')
   // 使用utf8 编码写入数据
   writerStream.write(data, 'UTF8')
   // 标记文件末尾
   writerStream.end()
   // 处理流事件--> finish 事件
   writerStream.on('finish', function() {
     /*finish - 所有数据已被写入到底层系统时触发。*/
     console.log('写入完成。')
   })
   writerStream.on('error', function(err) {
     console.log(err.stack)
   })
   console.log('程序执行完毕')
   ```

1. `管道流` 复制大文件时候可以使用

   ```js
   var fs = require('fs')
   // 创建一个可读流
   var readerStream = fs.createReadStream('input.txt')
   // 创建一个可写流
   var writerStream = fs.createWriteStream('output.txt')
   // 管道读写操作
   // 读取input.txt 文件内容，并将内容写入到output.txt 文件中
   readerStream.pipe(writerStream)
   console.log('程序执行完毕')
   ```

1. `mkdirp` 第三方操作文件包

#### supervisor

1. 安装 `npm install -g supervisor`

安装完后就可以用`supervisor`命令替代`node`命令完成热加载

### NPM 包工具

随着 node 安装一起被安装.世界上最大的开源包生态

#### 常用命令行

1. `npm install xxx [--save] [--dev]`
1. `npm uninstall xxx`
1. `npm install xxx@ver`
1. `npm list`
1. `npm info xxx`
