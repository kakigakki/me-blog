---
title: SpringBoot笔记
date: 2022-02-01
author: kaki
location: Tokyo
tags:
  - java
toc: true
---

# SpringBoot


## 运维

### 发布springboot的jar文件

springboot打包后可以直接使用java运行jar文件完成发布。

```bash
java -jar springboot-demo.jar
```

### 临时属性

发布jar文件时，可以指定临时属性来覆盖掉`application.yaml`中的值

```bash
java -jar springboot-demo.jar --server.port=8080
#如果有多个属性，则空格隔开
```

属性加载优先顺序

![20220209235233](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220209235233.png)

### 配置文件


#### 配置文件分级
Springbott中`application.yml`文件可以分为4级。
- 1级：代码中`resoures`中的`config/application.yml`
- 2级：代码中`resoures`中的`application.yml`
- 3级：部署后`jar`文件所在文件夹中的`config/application.yml`
- 4级：部署后`jar`文件所在文件夹中的`application.yml`

配置文件分级，不仅可以用来控制访问权限，还能分环境设置环境变量

#### 配置文件改名字

配置文件名不止可以用`applicaion`，可以自定义防止他人篡改。

可以通过设置临时变量`--spring.config.location`来改变


#### 多环境配置文件

##### yaml版本
![20220210001122](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210001122.png)

##### properties版本

![20220210001829](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210001829.png)
yaml版本也支持多文件版本。

##### 多环境分组

![20220210002158](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210002158.png)

##### springboot和Maven兼容

springboot和Maven同时对多环境配置文件进行控制时，以Maven为主，Springboot使用`@...@`占位符读取Maven对应的配置属性值。

Maven配置
![20220210002955](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210002955.png)

Springboot的配置文件
![20220210002754](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210002754.png)!


### 日志

日志设置也是通过`application.yaml`进行

#### 日志级别控制
```yaml
debug: true #不推荐

#或者
logging:
  #设置分组
  group:
    kakiDemo: com.kaki.controller,com.kaki.service,com.kaki.dao
  level:
    #实设置所有的代码的日志级别
    root: info
    #设置某个包的日志级别
    com.kaki.controller: debug
    #这是分组的日志级别
    kakiDemo: warn
```

#### 日志使用
代码中使用日志可以使用lombok
![20220210004101](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210004101.png)


#### 日志输出格式控制

```yaml
logging:
  pattern:
    console: "%d %clr(%5p) --- [%16t] %clr(%-40.40c){blue} :  %m %n" 
```


#### 日志文件
```yaml
logging:
  file:
    name: server.log
logback: 
  rollinggpolicy: 
    max-file-size: 4KB
    file-name-pattern:  server.%d{yyyy-MM-dd}.%i.log
```
