---
title: 連結リストを逆転する
date: 2020-07-02
author: kaki
location: Tokyo  
tags: 
  - javascript
  - leetCode-easy
  - linkedList
toc : true
---

**出力**:
`1->2->3->4->5->NULL`

**入力**:
`5->4->3->2->1->NULL`

コード：
::: click

``` js
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
    while(current){
        next = next.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};

```

:::