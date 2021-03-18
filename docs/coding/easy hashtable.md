---
title: ハッシュテーブル問題集 EASY編
date: 2020-07-16
author: kaki
location: Tokyo
tags:
  - javascript
  - leetCode-easy
  - hashtable
toc: true
---

## 只出现一次的数字

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

例:

```js
输入: [2, 2, 1]
输出: 1

输入: [4, 1, 2, 1, 2]
输出: 4
```

code:
::: ctnr
使用异或运算符,将出现两次的元素归零,最后剩下的就是只出现了一次的元素
:::

::: click

```js
var singleNumber = function(nums) {
  return nums.reduce((prev, cur) => prev ^ cur)
}
```

:::

## 快乐数

编写一个算法来判断一个数`n`是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为`1`，也可能是 无限循环 但始终变不到 `1`。如果 可以变为`1`，那么这个数就是快乐数。

例:

```js
输入：19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

code:
::: ctnr
用 set 存储结果,如果出现相同结果证明进行死循环,返回`false`
:::

::: click

```js
var isHappy = function(n) {
  let set = new Set()
  let sum = n
  let num
  while (sum != 1) {
    num = sum
    sum = 0
    while (num >= 10) {
      sum = (num % 10) ** 2 + sum
      num = Math.floor(num / 10)
    }
    sum += num ** 2
    if (set.has(sum)) return false
    set.add(sum)
  }
  return true
}
```

:::

## 计数质数

统计所有小于非负整数`n`的质数的数量。

例:

```js
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

code:
::: ctnr
在寻找质数的遍历途中,利用埃拉托斯特尼筛选法,将 2 的倍数,3 的倍数..x 的倍数给筛选掉.提高时间复杂度
:::
::: click

```js
var countPrimes = function(n) {
  let nums = new Array(n)
  let count = 0
  for (let i = 2; i < nums.length; i++) {
    if (!nums[i - 1]) {
      count++
      //将所有当前质数的所有倍数全部筛选
      for (let j = i * i; j < nums.length; j += i) {
        nums[j - 1] = true
      }
    }
  }
  return count
}
```

:::

## 同构字符串

给定两个字符串`s`和`t`，判断它们是否是同构的。

如果`s`中的字符可以被替换得到`t`，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

你可以假设 s 和 t 具有相同的长度。

例:

```js
输入: (s = 'egg'), (t = 'add')
输出: true

输入: (s = 'foo'), (t = 'bar')
输出: false

输入: (s = 'paper'), (t = 'title')
输出: true
```

code:

::: ctnr
使用字符串的方法 indexOf()判断出现过的字符是否在同一位置
:::

::: click

```js
var isIsomorphic = function(s, t) {
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) != t.indexOf(t[i])) return false
  }
  return true
}
```

:::

## 存在重复元素

给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回`true`。如果数组中每个元素都不相同，则返回`false`。

例:

```js
输入: [1, 2, 3, 1]
输出: true

输入: [1, 2, 3, 4]
输出: false

输入: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
输出: true
```

code:

::: ctnr
灵活使用`set`数据结构
:::

::: click

```js
var containsDuplicate = function(nums) {
  return new Set(nums).size != nums.length
}
```

:::

## 存在重复元素 II

给定一个整数数组和一个整数  `k`，判断数组中是否存在两个不同的索引  `i`  和  `j`，
使得  `nums [i] = nums [j]`，并且 `i` 和 `j`  的差的 绝对值 至多为 `k`。

例:

```js
输入: (nums = [1, 2, 3, 1]), (k = 3)
输出: true

输入: (nums = [1, 0, 1, 1]), (k = 1)
输出: true

输入: (nums = [1, 2, 3, 1, 2, 3]), (k = 2)
输出: false
```

code:
::: ctnr
使用哈希表将遍历过的字符的位置存起来,遇到已经出现过的字符时,判断当前字符与上一次出现时字符的位置差,然后与`k`进行比较
:::
::: click

```js
var containsNearbyDuplicate = function(nums, k) {
  let m = {}
  for (let i = 0; i < nums.length; i++) {
    if (!isNaN(m[nums[i]]) && i - m[nums[i]] <= k) {
      return true
    } else {
      m[nums[i]] = i
    }
  }
  return false
}
```

:::

## 有效的字母异位词

给定两个字符串 `s` 和 `t` ，编写一个函数来判断 `t` 是否是 `s` 的字母异位词。

```js
输入: (s = 'anagram'), (t = 'nagaram')
输出: true

输入: (s = 'rat'), (t = 'car')
输出: false
```

code:

::: ctnr
比较简单的方法,使用了两个哈希表,考虑到有各种各样的字符,所以使用`codePointAt`
:::

::: click

```js
var isAnagram = function(s, t) {
  if (s.length != t.length) return false
  let obj = {}
  let obj2 = {}
  for (i = 0; i < s.length; i++) {
    let sCode = s.codePointAt(i)
    let tCode = t.codePointAt(i)
    obj[sCode] ? obj[sCode]++ : (obj[sCode] = 1)
    obj2[tCode] ? obj2[tCode]++ : (obj2[tCode] = 1)
  }
  for (const key in obj) {
    if (obj[key] != obj2[key]) return false
  }
  return true
}
```

:::

## 单词规律

给定一种规律 `pattern`  和一个字符串  `str` ，判断 `str` 是否遵循相同的规律。

这里的遵循指完全匹配，例如，`pattern`  里的每个字母和字符串  `str`中的每个非空单词之间存在着双向连接的对应规律。

例:

```js
输入: (pattern = 'abba'), (str = 'dog cat cat dog')
输出: true

输入: (pattern = 'abba'), (str = 'dog cat cat fish')
输出: false

输入: (pattern = 'aaaa'), (str = 'dog cat cat dog')
输出: false

输入: (pattern = 'abba'), (str = 'dog dog dog dog')
输出: false
```

code:
::: ctnr
此题解法与`同构字符串`相似,利用`indexOf()`
:::

::: click
var wordPattern = function(pattern, str) {
let strArr = str.split(" ")
if(strArr.length!=pattern.length) return false
for(i=0;i<pattern.length;i++){
if(pattern.indexOf(pattern[i])!=strArr.indexOf(strArr[i])) return false
}
return true
};
:::

## 两个数组的交集

给定两个数组，编写一个函数来计算它们的交集。

例:

```js
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
```

code:
::: ctnr
考虑到数组长度可能差别巨大,对数组长度较小的进行循环,就较大的进行去重
:::

::: click

```js
var intersection = function(nums1, nums2) {
  let xiao
  let da
  if (nums2.length >= nums1.length) {
    da = nums2
    xiao = nums1
  } else {
    da = nums1
    xiao = nums2
  }

  let set = new Set(da)
  let set2 = new Set()

  for (const i of xiao) {
    if (set.has(i)) set2.add(i)
  }
  return [...set2]
}
```

:::

## 两个数组的交集 II

给定两个数组，编写一个函数来计算它们的交集。
输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。

例:

```js
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```

code:
::: ctnr
用一个`哈希表`来判断`num1`中重复出现的个数,一个`res`数组来存储交集结果,遍历`num2`当`哈希表`中已经有当前元素的个数,往结果集加入该元素,并在`哈希表`对应该元素的个数减 1,以判断出现次数的最小值
:::

::: click

```js
var intersect = function(nums1, nums2) {
  let obj = {}
  let res = []
  for (const x of nums1) obj[x] ? obj[x]++ : (obj[x] = 1)
  for (const y of nums2) {
    if (obj[y]) {
      res.push(y)
      obj[y]--
    }
  }
  return res
}
```

:::

## 字符串中的第一个唯一字符

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

```js
s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
```

code:
::: ctnr
`哈希表`配合`indexOf`
:::

::: click

```js
var firstUniqChar = function(s) {
  let obj = {}
  for (i = 0; i < s.length; i++) obj[s[i]] ? obj[s[i]]++ : (obj[s[i]] = 1)
  for (const x in obj) if (obj[x] == 1) return s.indexOf(x)
  return -1
}
```

:::

## 找不同

给定两个字符串 `s` 和 `t`，它们只包含小写字母。

字符串 `t` 由字符串 `s` 随机重排，然后在随机位置添加一个字母。

请找出在 `t` 中被添加的字母。

```js
输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。
```

code:
::: ctnr
此题与`只出现一次的数字`类似,一般像这种从重复元素中找唯一不同的元素的,可以使用异或判断
:::

::: click

```js
var findTheDifference = function(s, t) {
  let r = 0
  for (let i = 0; i < s.length; i++) r ^= t.codePointAt(i) ^ s.codePointAt(i)
  return String.fromCodePoint(r ^ t.codePointAt(s.length))
}
```

:::

## 最长回文串

给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 `"Aa"` 不能当做一个回文字符串。

```js
输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
```

code:
::: ctnr
hint:回文字符串的特性:左右两边重复,中间字符只有一个
:::

::: click

```js
var longestPalindrome = function(s) {
  let map = new Map()
  let size1 = 0
  let size2 = 0
  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
  }
  for (const [k, v] of map) {
    if (v % 2 != 0) {
      map.set(k, v - 1)
      size1 -= 1
    }
    size1 += v
    size2 += v
  }
  return size2 == size1 ? size1 : size1 + 1
}
```

:::
