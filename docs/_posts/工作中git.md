---
title: GIT实战
date: 2021-11-17
author: kaki
location: Tokyo
tags:
  - git
toc: true
---

# 常用命令

- `git rebase -i HEAD~x` 可以整理commit,也可以用来删除commit
- `git rebase xxx` 与目标分支合并
- `git rebase --continue` 合并中发生冲突时解决完冲突后继续rebase
- `git reset --soft xxxx` 撤销xxxx到暂存区
- `git reset --hard xxxx` 撤销xxxx到工作区
- `git reset --no-edit xxxx` 创建一个不带有xxxx的新commit
- `git rebase --abort` 放弃本次rebase
- `git pull --rebase` 通过rebase的方式来获得最新代码
- `git push --force` 可以用本地分支覆盖掉远程分支，慎用！
- `git checkout -b xxxx` 创建并切换到目标分支
- `git branch -D xxxx` 强制删除分支
- `git reset --hard 远程分支` 强制将本地分支变成远程分支
