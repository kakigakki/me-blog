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

### koa2

1. 下载`npm install koa --save`

#### koa 的 hello world

```js
var Koa = require('koa')
var app = new Koa()
app.use(
  aysnc(ctx => {
    ctx.body = 'hello world'
  })
)
```

#### koa 路由

1. 安装下载`npm install koa-router --save`

1. 使用路由

   ```js
   const Koa = require('koa')
   const router = require('koa-router')() //注意：引入的方式
   const app = new Koa()
   ```

1. 配置路由

   ```js
   router.get('/', function (ctx, next) {
   ctx.body="Hello koa";
   })
   router.get('/news,(ctx,next)=>{
   ctx.body="新闻page"
   });
   app.use(router.routes()); //作用：启动路由
   app.use(router.allowedMethods()); // 作用： 这是官方文档的推荐用法,我们可以
   //看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有
   //路由中间件最后调用.此时根据ctx.status 设置response 响应头
   app.listen(3000,()=>{
   console.log('starting at port 3000');
   });
   ```

1. get 请求与 传值

   ```js
   router.get('/newscontent', (ctx, next) => {
     let url = ctx.url
     //从request 中获取GET 请求
     let request = ctx.request
     let req_query = request.query //相当于ctx.query ,获取obj
     let req_querystring = request.querystring //相当于ctx.querystring 获取字符串
     //从上下文中直接获取
     let ctx_query = ctx.query
     let ctx_querystring = ctx.querystring
     ctx.body = {
       url,
       req_query,
       req_querystring,
       ctx_query,
       ctx_querystring,
     }
   })
   ```

1. post 请求与传值

   ```js
   //利用第三方中间件
   var Koa = require('koa')
   var bodyParser = require('koa-bodyparser')
   var app = new Koa()
   app.use(bodyParser())
   app.use(async ctx => {
     //利用ctx.request.body获取提交数据
     ctx.body = ctx.request.body
   })
   ```

1. 动态路由

   ```js
   //请求方式http://域名/product/123
   router.get('/product/:aid',async (ctx)=>{
   console.log(ctx.params); //{ aid: '123' } //获取动态路由的数据

   //请求方式http://域名/product/123/456
   router.get('/product/:aid/:bid',async (ctx)=>{
   console.log(ctx.params); //{ aid: '123' ,bid:'456'} //获取动态路由的数据
   ```

#### koa 中间件

1. 功能

   - 执行任何代码。
   - 修改请求和响应对象。
   - 终结请求-响应循环。
   - 调用堆栈中的下一个中间件。

1. 类型

   - 应用级中间件
   - 路由级中间件
   - 错误处理中间件
   - 第三方中间件

1. 执行顺序
   koa 中间件执行顺序类似于下图洋葱结构![20210321150958](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210321150958.png)

##### 应用级中间件

```js
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
app.use(async (ctx, next) => {
  console.log(new Date())
  await next() //必须写next()不然就不会往下走了.
}) //当访问所有路由前,会调用此中间件

router.use('/', async (ctx, next) => {
  console.log(new Date())
  await next()
}) //当访问'/'路由前,会调用此中间件
```

##### 路由级中间件

```js
//当匹配到News路由后,可以调用next()方法继续向下匹配
router.get('/news', async (ctx, next) => {
  console.log(1)
  next()
})
router.get('/news', function(ctx) {
  ctx.body = 'Hello koa'
})
```

##### 错误级中间件

```js
app.use(async (ctx, next) => {
  next()
  //注意是在next()后执行. 因为next()前的话,匹配路由到的路由还没执行
  if (ctx.status == 404) {
    ctx.status = 404
    ctx.body = '这是一个404 页面'
  }
})
```

##### 第三方中间件

1. 路由中间件`koa-router` : 接受请求
1. postbody 解析中间件`koa-bodyparser` : 解析 post 参数
1. ejs 模板解析中间件`koa-views` : 可以使用 ejs 进行服务器端渲染
1. 静态资源中间件`koa-static` : 可以让项目处理静态资源

   ```js
   //npm install --save koa-static
   const static = require('koa-static')
   //如果页面中有请求静态资源的话,就会经过此中间件,并且自动next()
   app.use(static(__dirname + ' /static'))
   ```

#### 所有路由共享数据

```js
//在中间件中配置ctx.state的值可以分享到所有模板.比如session之类的
router.get('/add', (ctx, next) => {
  ctx.state = {
    user: 'kaki',
  }
  next()
})
```

#### koa 中使用 ejs 模板

##### 使用

1. 安装
   - `npm install koa-views --save`
   - `npm install ejs --save`
1. 配置

   ```js
   const views = require('koa-views')
   //讲views文件夹中的html文件映射为ejs文件
   app.use(views('views', { map: { html: 'ejs' } }))

   //或者直接将Views文件夹中的ejs文件判定为ejs文件
   app.use(views('views', { extentions: 'ejs' }))
   ```

1. 使用

   ```js
   router.get('/add', async ctx => {
     let title = 'hello koa2'
     await ctx.render('index', {
       title,
     }) //将title传递给index.ejs页面
   })
   ```

##### Ejs 引入模板

`<%- include header.ejs %>`

##### Ejs 绑定数据

`<%=h%>`

##### Ejs 绑定 html 数据

`<%-h%>`

##### Ejs 模板判断语句

```ejs
  <% if(true){ %>
    <div>true</div>
    <%} else{ %>
    <div>false</div>
    <%} %>
```

##### Ejs 模板中循环数据

```ejs
<%for(var i=0;i<list.length;i++)
  { %><li><%=list[i] %></li>
<%}%>
```

#### koa 中使用 art-template 模板引擎

1. 安装

```js
npm install --save art-template
npm install --save koa-art-template
```

1. 使用

```js
const Koa = require('koa')
const render = require('koa-art-template')
const app = new Koa()
//配置模板引擎
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production',
})
//渲染
app.use(async function(ctx) {
  await ctx.render('user')
})
app.listen(8080)
三
```

#### koa 中的 cookie

1. 作用

   - cookie 保存在浏览器客户端
   - 让我们用同一个浏览器访问同一个域名的时候共享数据

1. 设置 cookie

   ```js
   ctx.cookies.set(name, value, [options])
   ```

   ![20210321162649](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210321162649.png)

1. 获取 cookie

   ```js
   ctx.cookies.get(name)
   ```

1. 设置&获取中文 cookie

```js
console.log(new Buffer('hello, world!').toString('base64')) // 转换成base64 字符串：aGVsbG8sIHdvcmxkIQ==
console.log(new Buffer('aGVsbG8sIHdvcmxkIQ==', 'base64').toString()) // 还原base64 字符串：hello, world!
```

#### koa 中的 session

1. 作用

   - session 保存在服务器
   - 让我们用同一个浏览器访问同一个域名的时候共享数据
   - 比 cookie 更安全
   - 基于 cookie

1. 工作流程

   当浏览器访问服务器并发送第一次请求时，服务器端会创建一个 session 对象，生
   成一个类似于 key,value 的键值对， 然后将 key(cookie)返回到浏览器(客户)端，浏览
   器下次再访问时，携带 key(cookie)，找到对应的 session(value)。客户的信息都保存
   在 session 中

1. 安装

   ```js
   //npm install koa-session --save
   //引入express-session
   const session = require('koa-session')
   ```

1. 配置

   ```js
   app.keys = ['some secret hurr']
   const CONFIG = {
     key: 'koa:sess', //cookie key (default is koa:sess)
     maxAge: 86400000, // cookie 的过期时间maxAge in ms (default is 1 days)
     overwrite: true, //是否可以overwrite (默认default true),设置了也没有效果
     httpOnly: true, //cookie 是否只有服务器端可以访问httpOnly or not (default true)
     signed: true, //签名默认true
     rolling: false, //在每次请求时强行设置cookie，这将重置cookie 过期时间（默认：false）
     renew: true, //(boolean) 当快要过期时,重新设置 (默认为fasle,最好设置为true)
   }
   app.use(session(CONFIG, app))
   ```

1. 使用

   ```js
   //设置值
   ctx.session.username = '张三'
   //获取值
   ctx.session.username
   ```
