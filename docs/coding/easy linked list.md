---
title: 連結リスト問題集 EASY編
date: 2020-07-10
author: kaki
location: Tokyo
tags:
  - javascript
  - leetCode-easy
  - linkedList
toc: true
---

## ２つの昇順連結リストを結合する

2 つの昇順連結リストを結合して、新しい昇順連結リストにして返す。 新しい連結リストは、指定された 2 つの連結リストのすべてのノードで構成されます。

**入力**:
`1->2->4, 1->3->4`

**出力**:
`1->1->2->3->4->4`

::: ctnr

1. ダミー連結リスト`dummy`を利用して、既存の二つの連結リストのノートを進みながら、大小判断
2. 値の小さいノートをダミー連結リストに与え、次のノートに進む。

:::
コード：
::: click

```js
var mergeTwoLists = function(l1, l2) {
  let cur1 = l1
  let cur2 = l2
  let dummy = new ListNode(-1)
  let dummyCur = dummy

  //同时迭代两个链表并比较较小的节点，将其赋值给dummy
  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      dummyCur.next = cur1
      cur1 = cur1.next
    } else {
      dummyCur.next = cur2
      cur2 = cur2.next
    }
    dummyCur = dummyCur.next
  }

  //获得剩下的非空链表，然后赋值给新链表
  dummyCur.next = cur1 || cur2
  //返回新链表的表头
  return dummy.next
}
```

:::

## 重複するノートを削除する

ソートされた連結リストを前提として、重複するノートをすべて削除して、各ノートが 1 回だけ表示されるように

**入力**:
`1->1->2->3->3`

**出力**:
`1->2->3`

コード：
::: click

```js
var deleteDuplicates = function(head) {
  if (!head) return head
  let cur = head
  while (cur.next)
    cur.val == cur.next.val ? (cur.next = cur.next.next) : (cur = cur.next)
  return head
}
```

:::

## 2 つの連結リストが交差するノードを見つける

**入力**:
`listA = [4,1,8,4,5], listB = [5,0,1,8,4,5],intersectVal = 8`

**出力**:
`8->4->5`

コード：
::: click

```js
var getIntersectionNode = function(headA, headB) {
  let a = headA
  let b = headB
  while (a !== b) {
    if (a == null) {
      a = headB
    } else {
      a = a.next
    }
    if (b == null) {
      b = headA
    } else {
      b = b.next
    }
  }
  return a
}
```

:::

## 連結リストの中央ノードを見つける

**入力**:
`[1,2,3,4,5]`

**出力**:
`[3,4,5]`

コード：
::: click

```js
var middleNode = function(head) {
  let fast = head
  let slow = head
  while (fast !== null && fast.next != null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
```

:::

## 回文連結リスト

連結リストが回文連結リストかどうかを確認してください。

**入力**:
`1->2->2->1`

**出力**:
`true`

コード：
::: click

```js
var isPalindrome = function(head) {
  let s1 = ''
  let s2 = ''
  let prev = null
  let cur = head
  let forward = head
  while (cur) {
    s1 += cur.val
    forward = cur.next
    cur.next = prev
    prev = cur
    cur = forward
  }
  while (prev) {
    s2 += prev.val
    prev = prev.next
  }
  return s1 == s2 ? true : false
}
```

:::

## 二進数連結リストを整数に変換

**入力**:
`[1,0,1]`

**出力**:
`5`

コード：
::: click

```js
var getDecimalValue = function(head) {
  let cur = head
  let str = ''
  while (cur) {
    str += cur.val
    cur = cur.next
  }
  return parseInt(str, 2)
}
```

:::

## 連結リストを回転する

**出力**:
`1->2->3->4->5->NULL`

**入力**:
`5->4->3->2->1->NULL`

コード：
::: click

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = head
  let prev = null
  let next = head
  while (current) {
    next = next.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}
```

:::
