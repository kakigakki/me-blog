---
title: git学习笔记
date: 2020-06-23
author: kaki
location: Tokyo
tags:
  - javascript
  - git
toc: true
---

### 分布式的版本控制系统

1. 每个客户端本地都储存了项目的所有历史版本（git 人员对其进行极致的压缩）
2. git 中有区域和对象的概念
   - 区域：
     - 工作区
     - 暂存区
     - 版本库
   - 对象
     - git 对象：所有的文件的每个版本的内容都是以哈希值名的压缩文件保存在.git 文件夹下的 objects 文件夹里。git 对象代表文件的一次次版本
       - `git hash-obejct -w fileUrl` ：生成一个键值对存到 .git/objects
     - 树对象：代表项目的一次次版本
       - `git update-index - -add - -cacheinfo 100644 hash text.txt` ：往暂存区添加一条记录，（让 git 对象对应文件名）
     - 提交对象： 我们需要知道的对象，能看到有谁提交了版本，每一个代表项目的一次版本
       - `Echo “first commit” | git commit-tree treehash` :生成一个提交对象存到.git/objects
   - 对以上对象的查询
     - `git cat-file -p hash` : 拿到对应对象的内容
     - `git cat-file -t hash` ：拿到对应对象的类型

### git 初始化配置

1. 初始化配置 git，用来说明你是谁。

```git
git config --global user.name “xxxx”
git config --global user.email xxxxx
```

除--global 还--system（对该电脑所有用户都适用），还有啥都不写（只对当前项目有用）

1. git config –list 查看当前的配置
1. 删除初始化的全局配置

```git
git config --global --unset user.name
git config --global --unset user.email
```

1. 修改初始化的全局配置

```git
git config --global  user.name "xxxx"
git config --global  user.email "xxxx"
```

### git 的底层命令

1. `git init` 初始化仓库
2. .git 隐藏文件夹中的文件夹分别为
   ![20200430005432](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20200430005432.png)
3. `clear` 清屏
4. `echo ‘xxxx’` 往控制台输出信息
   - `echo ‘xxx’ > test.txt` 创建 test 文件，且输入 xxx
5. `ll` 遍历当前文件夹
6. `find` 目录名 ：打印对应目录下的子孙文件和目录
7. `find` 目录名 -type f 打印对应目录下的子孙文件
8. `Rm` 文件
9. `Mv` 文件 剪切（重命名）
10. `Cat` 文件，查看文件的内容
11. `Vim` 文件
    - 按 i 进入编辑模式
    - 按 esc 退出 i 模式后， :wq 后保存退出
12. `git cat-file -p hash` : 拿到对应对象的内容
13. `git cat-file -t hash` ：拿到对应对象的类型
14. `git ls-files -s` 查看暂存区的内容

### git 的高层命令

1. `git add ./` 将修改添加到暂存区（其实是提到版本库，再拉回暂存区）
   - `git hash-object -w 文件名`（修改了多少个工作目录中的文件，这个命令就被执行多少次）
   - `git update-index …`
2. `git commit -m “xxxx”` 将暂存区提交到版本库
   - `git write-tree`
   - `git commit-tree`
3. `git init` 初始化新仓库
4. `git status` 检查当前文件的状态
   - git 中的文件有两种状态
     - 已跟踪 （被 git add 过的文件）
       - 已修改 `modified`
       - 已暂存 `staged`
       - 已提交 `commited`
     - 未跟踪 （未被 git add 过的文件）
5. `git diff` 查看哪些还没有暂存
6. `git diff –staged` 查看哪些修改已经被暂存了，还没提交的
7. `git commit -m "xxx"` 提交+注释
8. `git commit -a` 跳过暂存区直接提交
9. `git commit -a -m "xxx"` 跳过暂存区直接提交
10. `git mv xxxx xxxx` ：此步骤相当于下面三步
    - `Mv`
    - `Rm`
    - `git add`
11. `git rm xxx` ： 此步骤相当于下面两步
    - `Rm`
    - `git add`
12. `git log` 查看提交记录
    - `git log -- oneline` 可以简略显示。显示的 hash 值是提交对象
    - `git log --oneline --decorate --graph --all` 查看所有的分支的历史记录
    - 太长的命令可以用配别名
      - `git config --global alias.xxx "git log --oneline --decorate --graph --all"`
13. `git reflog` 查看完整操作记录
    - 查看所有分支的记录，我在本地上配置了 alllog

### git 分支操作

1. 分支的本质就是一个提交对象
1. HEAD : 是一个指针，它默认指向 master 分支，切换分支时就是让 HEAD 指向不同的分支，每次有新的提交时，HEAD 就会带着当前的分支往前移动（HEAD 移动，分支不会移动）。
1. `git/refs`目录中保存了所有的分支，及其对应的提交对象的 hash 值（每次提交对象被新提交时，hash 值都会改变）
1. 切换分支会改变 workspace 中的文件。
   - 每次切换分支前，当前分支一定得是干净的（已提交状态）
   - 因为在切换分支时，当前分支有未暂存的新创建的 modified 的文件 或者有未提交的的新创建的 staged 的文件的时候，会把此文件一次带到切换的分支上，会污染切换的分支
1. 操作命令
   - `git branch xxx` ：在当前提交对象上创建一个新的分支
   - `git branch xxx Hash值` ：在指定的提交对象上创建新的分支（时光机）
   - `git branch` ：查看分支列表
   - `git checkout branch` 切换分支
   - `git checkout -b xxx` 创建新的分支，并切换至此分支
   - `git branch -d xxx` :删除一个合并了的分支
   - `git branch -D xxx`：强制删除一个分支（不管合并了否）
   - `git branch -v` 可以查看所有分支的最后一次提交

### git 存储

1. 当你大工作做一半，但是有其他小工作要做，又不想提交当前分支的话，可以用存储
1. 常用命令
   - `git stash` 将未完成的 modified 保存到一个栈上
   - `git stash list` 查看栈上有哪些修改
   - `git stash apply` 将保存到栈上的第一个 modified 重新取出
   - `git stash apply stash@{x}` 指定取出哪个 modified
   - `git statsh drop` 删除第一个
   - `git statsh pop` 取出修改，删除栈上的第一个

### git 撤销和重置（主要用下面三个命令

1. `git checkout -- filename :` 撤回自己在工作区的修改
1. `git reset filename` 撤回自己在暂存区的修改
   - 相当于 reset 第二步曲的缩写
1. `git commit --amend` 再次提交暂存区内已修改的文件(类似撤回自己在版本库的提交，再提交一次)

### reset

1. 三步曲
   - 第一步：`git reset --soft HEAD~`
     - 一步：
       - 动 HEAD，带着当前 branch 一起往前一版本后退（撤销）
     - (类似`git commit --amend`，不过`--amend`撤回然后提交了）
       `git reset --soft 提交对象的hash值` ：HEAD 带着 branch 去指定的提交对象上
   - 第二步：`git reset [--mixed] HEAD~`
     - 两步：
       - 动 HEAD ,带着当前 branch 一起撤退
       - 动了暂存区。
     - `git reset --mixed` 提交对象的 hash 值 ：HEAD 带着 branch 去指定的提交对象上
     - 可缩写成：`git reset`
   - 第三步：`git reset --hard HEAD~`（reset 命令唯一的危险用法）
     - 三步：
       - 动 HEAD ,带着当前 branch 一起撤退
       - 动了暂存区
       - 动了工作区（会将工作区的内容覆盖）
     - 一般撤销工作区用：`git checkout --filename`
     - 跳过第一步，第二步，
     - 只做第三步：动了工作区

### 标签

1. 标签跟分支很像，只是分支能动，标签不能动
1. 常用命令
   - `git tag` 查看当前标签名
   - `git tag <标签名>` [可选：提交对象的 hash 值] 新建标签
   - `git show <标签名>` :查看标签
   - `git tag -d <标签名>` ：删除标签
   - `git checkout <标签名>` ：切换到 tag
   - 如果当前标签没有分支时，会产生头部分离。需要在当前标签上创建分支
   - `git checkout -b <分支名>`

### 远程仓库

1. `git remote add <别名> url` ： 让本地仓库跟远程仓库连起来
2. `git remote -v` ：查看远程仓库
3. `git remote show 别名` ：查看远程仓库的更多信息
4. `git remote rename 旧别名 新别名` ：重命名远程仓库
5. `git remote rm 别名` ：删除远程仓库
6. `git push 远程仓库别名 分支名`
7. `git clone 远程仓url` ：将远程仓库拉到本地
   - `git clone`下来的远程仓库的别名，自动设置成 origin
8. 自己创建的仓库，可以进行 push,但是如果是从别人的仓库 clone 下来的话，如果没有那个人的成员邀请的话，无法进行 push

### 团队协作流程

1. 项目经理初始化远程仓库
   - 在 github 上初始化一个空的仓库
2. 项目经理创建本地仓库
   - `git init`
   - 将源码复制进来
   - 修改用户名，修改邮箱
3. 项目经理将本地仓库跟远程仓库链接起来
   - `git remote add 别名 url`
4. 项目经理将本地仓库推送到远程仓库
   - 清理 windows 凭据
   - `git push 别名 分支` （输入 github 的用户名，密码，输完后会附带生成远程跟踪分支 xxx/xxx）
5. 项目成员在自己本地克隆远程仓库
   - `git clone 仓库地址`
     - 默认为远程仓库配了别名 origin
     - 附带生成远程跟踪分支 xxx/xxx
6. 项目成员做出贡献
   - `git add`
   - `git commit`
   - `git push` 别名 分支（输入 github 的用户名，密码）
7. 项目经理更新修改
   - `git fetch 别名`（将修改同步到远程跟踪分支上）
   - `git merge远程跟踪分支`（将同步了的远程跟踪分支与本地分支合并）

### 深入理解远程库

#### 远程跟踪分支

1. 远程跟踪分支是远程分支状态的引用，它们是不能自己移动的，在每次网络通信操作时，自动移动
2. 如果本地分支没有跟踪任何远程跟踪分支的话，是无法进行网络通信操作的
3. 一个本地分支怎么去跟踪一个远程跟踪分支
   - 当克隆的时候，会自动生成一个 master 本地分支（已经跟踪了对应的远程跟踪分支）
   - 在新建其他分支的时候，可以指定想要跟踪的远程跟踪分支
     - `git checkout -b`本地分支名 远程跟踪分支名
     - 或者 `git checkout --track` 远程跟踪分支名（创建一个跟远程分支同一个名字的本地分支和远程跟踪分支，并让本地分支跟踪远程跟踪分支）
4. 如果没有对应的远程跟踪分支的话，可以用`git fetch`去远程仓库拿
   - 将一个已经存在的本地分支名，跟踪一个远程跟踪分支
     - `git branch -u 远程跟踪分支名`
     - 没有远程跟踪分支的话，无法进行`git push`,`git pull`操作
     - 可以用`gir branch -vv`查看当前分支所跟踪的远程跟踪分支

#### 冲突

1. 当`git pull`的时候，没有将暂存区的内容提交时，会冲突
2. 当`git push`的时候，远程仓库的内容已经被修改的时候，会冲突

#### 删除远程分支

1. `git push 仓库别名 --delete 远程分支`
1. `git remote prune 仓库别名--dry-run` ：列出已经不存在的运程仓库上，仍在跟踪的无用分支
1. `git remote prune 仓库别名` : 清楚上面列出的无用分支

#### Pull request

1. 可以通过`fork`别人的项目，修别人的 bug，给别人提 request。（此步骤可以用 github 操作，不需要命令行）
1. 一般只有大神才会用到。。

### 学习过程笔记

1. `git checkout`后面也可以跟提交对象的 hash 值，让 HEAD 移动到对应提交对象
2. `git branch -f xxxx HEAD~3` 强制移动分支 xxxx 到前三个提交对象身上
3. `git branch -f xxxx 提交对象hash` 强制移动分支 xxxx 到某个提交对象
4. `git checkout HEAD^[HEAD~]` 移动 HEAD 到上一个提交对象上
   - ~后面跟数字表示移动几个提交对象
   - ^后面跟数字表示移动第几个父提交（当前提交类型为合并提交的情况下）
   - 如 `git checkout HEAD~2^2` 表示向上移动两个提交对象，然后在二叉口，移动到第二个父提交对象
     - 正如你所见，此命令支持链式调用
5. `git reset HEAD^` 将提交对象重置回上一次提交对象
6. `git revert HEAD^` 创建一个新的提交对象，这个提交对象是上一个提交对象的复刻，此方法比较安全。
7. `git cherry-pick [hash或者分支名] [hash或者分支名]` 此命令可以在当前分支获取其它分支的正在进行的代码，可以接多个 commitHash，命令中接了几个 commitHash,就会获得几个提交对象。
   - `cherry-pick`还可以让 master 分支直接去拿多个分支，合成大分支
8. `git rebase branchName` 将当前的分支线上的若干个目标分支线上不存在的提交对象的 code 与目标分支的 code 结合，并在目标分支下面生成若干个提交对象，提交对象上的还是当前分支
   - 情景：假如自己开发的分支开发到一半，然后之前的 master 分支已经被提交过，这时需要提交完的 master 分支中自己分支里没有的代码时，就可以用这个命令，轻松获得
   - `git rebase 分支1 分支2` 在分支 2 下生成分支 1 和分支 2 结合的提交对象
9. `git rebase -i HEAD~4` 可以指定当前提交对象之前的若干个提交对象，
   - 这些提交对象可以排序，也可以删减。来构建自己想要 rebase 的提交对象顺序和个数
   - `git cherry-pick`在知道 hash 的情况下牛逼，相反，这个命令是在不知道 hash 的情况下牛逼，总之两个挺像的
10. `git rebase xxxx master` 当处在 xxxx 分支上，且想要与 master 合并时，此步骤可以代替下面两步
    - `git checkout master`
    - `git merge xxxx`
11. 一般能用 hash 值直接定位的地方，也能用`HEAD~`配合`HEAD^`来找该地方（相对位置找法）
12. 一般能用 hash 值的命令也能用分支名字

### 学习过程笔记 2

1. 远程跟踪分支是无法进行手动更新的，只能保持上一次通信时的状态。
2. 如果`git checkout 远程跟踪分支`的话，会产生 HEAD 分离
   - 即变成了`git checkout HEAD`
3. `git fetch`
   - 与远程仓库进行通信
   - 更新远程跟踪分支
   - **注意**：`git fetch` 并不会去改变本地仓库分支的位置。就是单纯的更新远程跟踪分支。
   - 即：把远程分支上的内容给下载到了远程跟踪分支上而已。没有再进行其他的操作了。
4. `git pull`
   - `git fetch` + `git merge`
   - `git fetch`只是下载。`git pull`是下载+合并
5. `git pull --rebase`
   - `git fetch` + `git rebase`
6. `git merge` 与`git rebase`的优缺点
   - `git merge` 保留提交树的历史，有时候可能看起来很乱
   - `git rebase` 所有提交都在一条树上，不保留历史。看起来更简洁

### 速记

1. `ssh-keygen -t rsa -C "gitHub上注册时用的邮箱"` :注册 ssh
