---
title: 連結リストを逆転する2
date: 2020-07-02
author: kaki
location: Tokyo  
tags: 
  - javascript
  - leetCode-medium
  - linkedList
toc : true
---
位置mからnまでのリストを逆転する。連結リストを1回だけをスキャンしてください。

**説明**:
`1 ≤ m ≤ n ≤ リスト長さ`

**出力**:
`1->2->3->4->5->NULL, m = 2, n = 4`

**入力**:
`1->4->3->2->5->NULL`

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
     let prev = null
     let cur = head
     let next = head
     let prev2 = null
     let cur2 = null
     for(i=1;i<m;i++){
         prev=cur
         cur =cur.next
         next=cur
     }

     for(i=m;i<=n;i++){
         if(i==m) {
             prev2 = prev
             cur2 = cur
         }
         next = cur.next
         cur.next = prev
         prev = cur
         cur = next
     }

     if(m==1){
        head=prev
     }else{
        prev2.next = prev
     }
     cur2.next = cur

     return head
};

```

:::