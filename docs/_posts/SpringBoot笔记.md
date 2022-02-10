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

## 整合第三方技术

### 整合Junit

springboot初始化时一般会加载整合了Junit的starter，可以直接进行测试

```java

@SpringBootTest
class SpringbootDemoApplicationTests {

    //1. 注入要测试的Bean对象
    @Autowired
    private BooksService booksService;

    @Test
    void contextLoads() {
        //2.执行测试的Bean对象的方法
        booksService.save();
    }

}
```

### 整合Mybaits

只需要选择对应的starter然后配置数据库连接信息就可以了。

![20220208170907](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220208170907.png)

![20220208170936](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220208170936.png)

![20220208171049](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220208171049.png)

### 整合Mybaits-Plus

![20220208172006](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220208172006.png)

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

`springboot`支持三种后缀的配置文件`properties`,`yml`,`yaml`。优先级分别为`properties`>`yml`>`yaml`

#### yaml使用

可以使用${属性名}引用数据

```yml

baseDir: c:\win10

tempDir: ${baseDir}\temp
```

可以使用引号包裹字符串，其中的转义字符可以生效

```yml

baseDir: c:\win10

tempDir: "${baseDir}\temp" #会输出c:\win10 emp
```
#### 配置文件使用
springboot中获取基础变量使用"@Value"

```java

@Value("${baseDir}")
private string baseDir
```

springboot中获取全部配置变量使用"@Autowired"

```java

@Autowired
private Environment env
```

可以自定义对象封装指定的配置变量
![20220208164021](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220208164021.png)


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

## 热部署

### 启动热部署

使用springboot时，需要devtools坐标
![20220210134821](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210134821.png)

### 自动启动热部署

![20220210135057](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210135057.png)

`CTRL+SHIFT+ALT+/`打开
![20220210135113](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210135113.png)

IDEA会在失去焦点5秒后热部署。

### 自定义热部署排除项

```yaml
devtools:
  restart:
    #设置不参与热部署的文件或者文件夹
    exclude: static/**,public/**

```

## 配置高级

### @ConfigurationProperties注解

使用@ConfigurationProperties为第三方Bean绑定属性

![20220210140616](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210140616.png)

使用@@EnableConfigurationProperties可以将对应的类加入Spring容器并且设置值
![20220210140827](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220210140827.png)

### 常用计量单位

springboot支持JDK8提供的计量单位
![
](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/%0D%0A.png)

![20220211003506](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220211003506.png)

### bean属性校验

1. bean校验需要添加JSR303规范和Hibernate校验框架的坐标，springboot中有整合版本，所以不需要指定版本。
![20220211004038](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220211004038.png)

1. 对Bean开启校验功能
![20220211004146](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220211004146.png)

1. 设置校验规则
![20220211004220](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20220211004220.png)