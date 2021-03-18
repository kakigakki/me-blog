---
title: Linked List辅助函数
date: 2020-07-03
author: kaki
location: Tokyo  
tags: 
  - linkedList
  - leetcode
toc : true
---

最近打算从头学算法，按照标签来刷题，从简单的链表题目开始，但是发现链表这东西因为javascript原生没有，所以调试时就需要转换为数值打印出来，但是转换数组每次手写也比较麻烦，就从网上扒了一些常用的辅助函数来帮助调试。以后做到其他数据结构的题目时，再继续补充其他的辅助函数。

## 链表节点

```js
/**
 * 链表节点
 * @param {*} val
 * @param {ListNode} next
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

```

## 将一个数组转为链表

```js

/**
 * 将一个数组转为链表
 * @param {array} a
 * @return {ListNode}
 */
const getListFromArray = (a) => {
    let dummy = new ListNode()
    let pre = dummy;
    a.forEach(x => pre = pre.next = new ListNode(x));
    return dummy.next;
}

```

## 将一个链表转为数组

``` js
/**
 * @param {ListNode} node
 * @return {array}
 */
const getArrayFromList = (node) => {
    let a = [];
    while (node) {
        a.push(node.val);
        node = node.next;
    }
    return a;
}
```

## 打印一个链表

```js
/**
 * 打印一个链表
 * @param {ListNode} node 
 */
const logList = (node) => {
    let str = 'list: ';
    while (node) {
        str += node.val + '->';
        node = node.next;
    }
    str += 'end';
    console.log(str);
}

```
