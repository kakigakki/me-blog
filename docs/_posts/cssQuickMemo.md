---
title: Css速记
date: 2020-06-23
author: kaki
location: Tokyo
tags:
  - css
  - html
toc: true
---

## 容易混淆

### display,visibility,opacity 的区别

1. display: none (不占空间，不能点击)（场景，显示出原来这里不存在的结构）

- 会被子元素继承，毕竟子类也不会被渲染；

1. visibility: hidden（占据空间，不能点击）（场景：显示不会导致页面结构发生变动，不会撑开）

- 会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏；

1. opacity: 0（占据空间，可以点击）（场景：可以跟 transition 搭配）

- 会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；

## 小技巧

### 文本超出省略号

- 单行

```css
.multiline-ellipsis {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

- 多行

```css
.multiline-ellipsis {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; //需要显示的行数
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 用 css 禁止用户操作

- 禁止选中 : `user-select:none`
- 禁止 DOM 的一切事件 : `pointer-events:none`
- 禁止 input 操作: `<input disabled></input>`
  - input 元素，不可编辑，不可复制，不可选择，不能接收焦点,，后台不能接收到传值

### 原地按比例缩放背景图片

```css
/* 按10比7的比例缩小图片 */
.bg {
  width: 100%;
  height: 0;
  padding-top: 70%;
  background-size: cover;
}
```

### 任意位置插入带图标,文本小部件的方案

```css
.play-wrapper {
  position: absolute;
  bottom: 20px;
  z-index: 10;
  width: 100%;

  .play {
    box-sizing: border-box;
    width: 135px;
    padding: 7px 0;
    margin: 0 auto;
    text-align: center;
    border: 1px solid blue;
    color: blue;
    border-radius: 100px;
    font-size: 0;

    .icon-play {
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;
      font-size: 18px;
    }

    .text {
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
    }
  }
}
```
