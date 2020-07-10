---
title: 連結リスト問題集 MEDIUM編
date: 2020-07-10
author: kaki
location: Tokyo
tags:
  - javascript
  - leetCode-medium
  - linkedList
toc: true
---

## 两数相加

给出两个非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0  开头。

**入力**:
`(2 -> 4 -> 3) + (5 -> 6 -> 4)`

**出力**:
`7 -> 0 -> 8`

※原因：342 + 465 = 807

コード：
::: click

```js
var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(0)
  let cur = l3
  while (l1 || l2) {
    let Vals = (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
    let addedVal = Vals + cur.val
    if (addedVal >= 10) {
      cur.val = addedVal % 10
      cur.next = new ListNode(Math.floor(addedVal / 10))
    } else {
      cur.val += Vals
      if ((l1 && l1.next) || (l2 && l2.next)) {
        cur.next = new ListNode(0)
      }
    }
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    cur = cur.next
  }
  return l3
}
```

:::

## 两两交换链表中的节点

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

```js
给定 1->2->3->4, 你应该返回 2->1->4->3.
```

コード：
::: click

```js
var swapPairs = function(head) {
  let prehold = new ListNode(-1)
  let holdhead = prehold
  holdhead.next = head
  while (holdhead.next && holdhead.next.next) {
    //保存第一个节点
    let start = holdhead.next
    //保存第二个节点
    let end = holdhead.next.next

    //第一个节点指向第三个节点
    start.next = end.next
    //第二个节点指向旧的第一个节点
    end.next = start
    //新的第一个节点指向旧的第二个节点
    holdhead.next = end

    //当前节点前进两步
    holdhead = holdhead.next.next
  }
  return prehold.next
}
```

:::

## 分隔链表

```js
输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5
```

コード：
::: click

```js
var partition = function(head, x) {
  let hold1 = new ListNode(-1)
  let hold2 = new ListNode(-1)
  let hold1H = hold1
  let hold2H = hold2
  let cur = head
  while (cur) {
    if (cur.val < x) {
      hold1H.next = cur
      hold1H = hold1H.next
    } else {
      hold2H.next = cur
      hold2H = hold2H.next
    }
    cur = cur.next
  }
  hold1H.next ? (hold1H.next = null) : (hold2H.next = null)
  hold1H.next = hold2.next
  return hold1.next
}
```

:::

## 排序链表

**入力**:
`-1->5->3->4->0`

**出力**:
`-1->0->3->4->5`

コード：
::: click

```js
//归并排序
var sortList = function(head) {
  //如果只有一个就停止分裂
  if (!head || !head.next) {
    return head
  }

  //获取分裂后的前后两段的链表
  let { left, right } = twoPart(head)
  //继续分裂(前后两段各自递归)
  let l1 = sortList(right)
  let l2 = sortList(left)
  //合并
  return concat(l1, l2)
}

//分裂链表
var twoPart = function(head) {
  let fast = head
  let slow = head
  //设置一个哨兵,用于获取前半段链表
  let temphead = new ListNode(-1)
  let temp = temphead
  while (fast && fast.next) {
    temp.next = slow
    temp = temp.next
    slow = slow.next
    fast = fast.next.next
  }
  temp.next = null
  return { left: slow, right: temphead.next }
}

//合并链表
var concat = function(l1, l2) {
  //设置一个哨兵,用于获取合并后的链表
  let prehold = new ListNode(-1)
  let hold = prehold
  while (l1 && l2) {
    if (l1.val < l2.val) {
      hold.next = l1
      l1 = l1.next
    } else {
      hold.next = l2
      l2 = l2.next
    }
    hold = hold.next
  }
  hold.next = l1 || l2
  return prehold.next
}
```

:::
