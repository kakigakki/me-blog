---
title: Docker笔记
date: 2021-03-07
author: kaki
location: Tokyo
tags:
  - docker
toc: true
---

### 作用

#### 与传统虚拟器技术的不同

1. 传统虚拟器会虚拟出一整个完整的系统
2. docker 容器内的应用直接运行在宿主机的内容。没有自己的内核，也没有虚拟硬件

#### DevOps

1. 更快速的交付与部署
   使用 Docker 可以打包镜像发布测试，一键运行
1. 更便捷的升级和扩缩容
   将项目打包成一个镜像。
1. 更简单的系统运维
   容器化后，开发，测试环境都是高度一致的
1. 更高效的计算资源利用。
   可以同时在一个物理机器上运行很多的容器实例，服务器的性能可以被压榨到极致

### 组成

#### 镜像

通过镜像可以创建多个容器,有点像类与对象的关系。最终服务运行或者项目运行就是在容器中。

#### 容器

独立运行一个或一组应用，通过镜像来创建的。可以理解为一个简易的 Linux 系统

#### 仓库

存在镜像的地方。
仓库也分为私有和共有的。类似与 Github

### 安装与卸载

[安装地址](https://docs.docker.com/engine/install/centos/)

#### 国内服务器需要换国内镜像

```c
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

#### 执行镜像

`docker run 镜像名`
执行已下工作
![20210308000639](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210308000639.png)

### 底层原理

#### 如何工作的

docker 是一个 client-server 结构的系统，守护进程运行在主机上。通过 socket 从客户端访问。dockerServer 接受到 dockerClient 的指令时，就会执行这个命令。

### 常用命令

[文档地址](https://docs.docker.com/engine/reference/run/)

#### 帮助命令

- `docker version`
- `docker info`
- `docker [命令名] --help`

#### 镜像命令

- `docker search 镜像名` 搜索镜像
- `docker pull 镜像名[:标签名]` 下载镜像
- `docker rmi [-f] 镜像名(或id)` 删除镜像
  - `docker rmi [-f] $(docker images -aq)` 删除全部镜像

#### 容器常用命令

- `docker run [可选参数] image` 运行容器
  - `--name="Name"`指定容器名字，用来区别同一镜像下不同容器的时候使用
  - `-d` 后台方式运行（需要容器后台运行，必须需要前台有个容器正在运行，否则此容器会自动销毁）
  - `-it` 使用交互方式运行，进入容器查看内容
  - `-p` 指定容器的端口
    - `-p ip:主机端口：容器端口`
    - `-p 主机端口：容器端口`(常用)
    - `-p 容器端口`、
  - `-p` 随机指定端口
- `docker ps` 查看运行中的容器
  - `-a` 运行中+历史
  - `-n=?` 最近创建的容器
  - `-q`只显示容器 id
- `exit` 停止容器并退出容器
  - `Ctrl+P+Q` 容器不停止退出容器
- `docker rm 容器id` 删除容器
  - `docker rm [-f] $(docker ps -aq)` 删除全部容器
- `docker start 容器id`
- `docker restart 容器id`
- `docker stop 容器id`
- `docker kill 容器id` 强制停止

#### 其他常用

`docker logs -tf --tail 条数 容器id` 产看日志
`docker top 容器id` 查看进程
`docker inspect 容器id` 查看元数据
`docker exec -it 容器id bashshell` 进入容器后开启一个新的终端
`docker attach 容器id` 进入容器正在执行的终端，不会启动新的进程

`docker cp 容器id：容器内文件地址 其他容器（包括主机）文件夹` 拷贝容器内的文件到主机上

#### 常用命令图

![20210308010718](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210308010718.png)
