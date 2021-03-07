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

1. `git branch -f [BRANCH_NAME] 提交对象` 可以让 branch 自动在各个 commit 对象间移动
