---
title: git笔记
date: 2021-02-15
author: kaki
location: Tokyo
tags:
  - javascript
  - git
toc: true
---

## git 简介与配置

- 全局配置信息

```bash
 git config --global user.name "Your Name"
 git config --global user.email "email@example.com"
```

- 创建版本库

```bash
git init
```

- 添加文件到仓库

```bash
git add readme.txt
```

- 把文件提交到仓库

```bash
git commit -m "wrote a readme file"
```

## LearnGitBranch 学习

### 本地操作篇

1. `git checkout 哈希值/tag名` 都可以让 HEAD 分离
1. `git checkout -b 分支名 哈希值/tag名` 可以在指定位置创建新的分支并 checkout
1. `git branch -f [BRANCH_NAME] 提交对象` 可以让 branch 自动在各个 commit 对象间移动

1. `git branch 分支名 HEAD^` 和`git branch HEAD~层数` 可以在指定提交对象上创建分支

   - `HEAD^2`表示如果有两条路的情况下，走第二条
   - `HEAD^^~2^2`支持此类链式调用以便快速找到提交对象

1. `git reset HEAD^` 不会新建分支，直接从当前分支回到上个分支。本地分支可用，远程分支不用了

1. `git revert HEAD^` 创建一个与`希望回到的分支`一模一样的分支在当前分支下。远程分支也能使用

1. `git cherry-pick 哈希值 哈希值 哈希值` 在知道提交对象哈希值的情况下 可以在当前分支下获取到任何分支的任何一个版本。十分牛逼啊。

1. `git rebase -i HEAD~层数` 在不知道提交对象哈希值的情况下，可以用这个命令合并或删除一连串的提交对象，比如当你修一个 bug 提交了好几次但是只希望最后提交的`bugfix`分支跟`master`分支合并时就可以通过这个命令直接删除之前提交的哪些无用的分支并且直接找到`master`分支进行合并

1. `git rebase 分支1 分支2` 在提交对象 1 下 生成合并了提交对象 2 的新分支,且 合并后 checkout 分支 2

   - 与`git merge 分支2`的区别：`merge`会保留原有的分支 2，然后变成合并树

   - `rebase`用得好，可以把脏兮兮得树变成整齐得单支树

1. `git commit --amend` 新建 saro 一个新的平行分支

1. `git describe 哈希值/标签名/分支名` 可以查看当前分支的`最近标签,离最近标签的距离，哈希值`

### 远程操作篇

1. `git clone` 当进行克隆的时候，会拉取远程仓库`origin/matser`。

   - 如果我们尝试去`git checkout origin/master`的话，会导致 HEAD 分离，因为远程仓库无法检出且进行修改

1. `git fetch` 拉取远程仓库的最新的远程分支，并且与本地上的远程分支合并。注意是**本地的远程分支**与**远程分支**的合并

   - `git fetch origin main`到远程仓库“origin”中找到“main”分支，将本地仓库中的`o/main`中没有的提交记录都添加上去(本地仓库与远程仓库分支同名)

   - `git fetch origin bar:foo`到远程仓库“origin”中找到`bar`分支，将本地仓库中的`foo`中没有的提交记录都添加上去(本地仓库与远程仓库分支艺名)

   - `git fetch origin :foo` 在本地仓库上新建一个 fetch 分支

   - `git fetch`如果没有任何参数,就是把远程仓库的所有分支都更新到本地上

1. `git pull` 相当于`git fetch`的基础上再加一个`git merge`

   - `git pull --rebase` 相当于`git fetch`的基础上再加一个`git rebase o/master`

   - `git pull origin foo` 相当于`git fetch origin foo`+`git merge o/foo`

   - `git pull origin bug^:bugFix`相当于`git fetch origin bug^:bugFix` + `git merge bugFix`

1. `git push` 会让`远程仓库的分支`同步我们`本地的作业分支`，并且让`本地的远程分支`也同时获取到最新的`远程仓库的分支`,至此，远程仓库与本地仓库，完全同步！

   - `git push origin main` 表示 切到本地仓库中的“main”分支，获取所有的提交，再到远程仓库“origin”中找到“main”分支，将远程仓库中没有的提交记录都添加上去(本地仓库与远程仓库分支同名)

   - `git push origin foo(提交对象/标签名):main` 切到本地仓库中的`foo(提交对象/标签名)`对象上，获取所有的提交，再到远程仓库“origin”中找到“main”分支，将远程仓库中没有的提交记录都添加上去(本地仓库与远程仓库分支异名),如果远程仓库中不存在`main`的话就会在远程仓库上创建一个新分支

   - `git push origin :foo` 会删除远程仓库的`foo`分支(慎用啊)

1. `git checkout -b 分支名 o/main` 通过远程分支创建一个新分支，让这个新分支跟踪远程分支。这就意味着这个新分支的`git pull`和`git push`都会与远程仓库的分支挂钩

   - 还可以用`git branch -u o/main 分支名`来让一个本地分支跟踪远程分支.如果当前已经在此分支上,则可以用`git branch -u o/main`
