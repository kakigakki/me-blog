---
title: vue cli3 项目部署
date: 2020-12-05
author: kaki
location: Tokyo
tags:
  - linux
  - vue
  - nginx
toc: true
---

### 准备工作

干了一年多的后端了，这还是第一次有机会在 linux 上通过 nginx 部署项目。
首先需要的东西就是

- 服务器（我用的腾讯云，618 买的一年 100）
- 域名 （有是最好的）
- 一个前端项目（废话）

### 前端项目工作

#### 后端接口配置

首先接口的代理路径，生产环境需要需要配置成`你的域名/linux代理地址/...` 其中`...`部分就是开发环境配置的路径
其中`你的域名`就是你的服务器 ip 或者域名，`linux代理地址`是下文 Nginx 配置文件中，`location`中的转发代理名字

因为服务端请求数据使用 node.js 写的，前端需要在根目录写一个`prod.server.js`文件，
![20201205120952](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20201205120952.png)
里面请求的 api 跟`vue.config.js`中配置的`devServer`里的 api 是一样的，最后通过`express`监听需要部署的端口，然后在服务端通过`pm2`来启动这个文件时，就能监听到`9123`接口，从而访问到 api 接口。我这项目这边是监听`9123`

```js
module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
```

需要注意的因为现在 vue-cli3 默认的路由方式时`history`（就是 Url 不带#的）,所以当你直接访问项目的非首页时，因为访问不到，会报 404 的错，这时候需要配置一下这个文件，从而让用户访问非首页地址时也能跳转到首页。
具体配置方法官网也有写，要么就是修改服务端的 Nginx 的配置文件，要么就直接在`prod.server.js`中添加一个中间件`connect-history-api-fallback`,然后使用

```js
var history = require('connect-history-api-fallback')
app.use(history())
```

#### 路径问题

`history`模式时，生产环境的路径需要在`vue.config.js`中配置为绝对路径（别问为什么，问就是踩过的坑，掉过的泪）

```js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/kakiMuisc' : '/',
  //kakiMuisc为nginx配置文件中的代理地址
}
```

### linux 端工作

#### 环境搭建

需要的工具有：

- 安装 nginx

```js

rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
yum install -y nginx
systemctl start nginx.service
systemctl enable nginx.service
```

- 卸载 nginx(有时候需要重装时使用)

```js
./nginx -s stop
whereis nginx
find / -name nginx //找到所有需要删除的文件
rm -rf 上面找到的文件
yum remove nginx

```

- node.js

```js
  wget https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-x64.tar.xz    // 下载
  tar xf  node-v10.9.0-linux-x64.tar.xz       // 解压
  cd node-v10.9.0-linux-x64/                  // 进入解压目录
  ln -s /node安装路径/bin/npm   /usr/local/bin/
  ln -s /node安装路径/software/nodejs/bin/node   /usr/local/bin/
  node -v                               // 执行node命令 查看版本
```

- pm2

```js
npm install pm2 -g
pm2 -v
```

- git

```js
yum install git
git --version
```

#### 拉取项目

从 github 上拉取需要部署的项目

- 先配置下全局 git

```js
git config --global user.name "xxxx"
git config --global user.email "xxxx"
```

- 拉取

```js
git clone xxx
```

- 安装项目的所有依赖

```js
npm install
```

- 打包

```JS
npm run build
```

#### 使用 pm2 执行 node 应用

```js
pm2 start prod.server.js - i 0
//prod.server.js为上文配置的api接口地址
//0为负载均衡实例，这里不需要，所谓0
//此时访问127.0.0.1:9123 就可以访问到这个项目，但是后端接口是请求不到的，所以需要通过下文配置nginx代理转发
```

#### 配置 nginx 文件

找到 nginx 配置文件的所在地址，版本不一样，可能文件不一样
通过找`server`字段，可以快速找到需要配置的文件在哪，然后进去配置

```js
grep -rn "server" *
```

找到 nginx 配置文件的 server 区域后，配置如下：

```vim
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location /kakiMusic/ {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://127.0.0.1:9123/;

    }
```

需要注意的是下面的部分 location 后面字段的就是上文提到的`linux代理地址`
`127.0.0.1:9123`中的端口号就是上文`prod.server.js`中通过`express`监听的端口号。
因为我们已经通过`pm2`打开了 node 服务，所以其实访问 127.0.0.1:9123 就是访问这个项目，所以通过配置代理地址`location /kakiMusic/`将端口号转发代理成`/kakiMusic/`时，访问`你的域名/kakiMusic`时就相当于访问`你的域名:9123`
![20201205123659](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20201205123659.png)

配置完成后重启下`nginx`

```js
nginx -s reload
```

然后访问：`你的域名/kakiMusic`就应该可以看到项目了
