---
title: ハッシュテーブル問題集 MEDIUM編
date: 2020-08-20
author: kaki
location: Tokyo
tags:
  - javascript
  - leetCode-medium
  - hashtable
toc: true
---

## 无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

例:

```js
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

code:
::: ctnr
利用一个 str 保存当前不重复的字符串,然后循环对比，找出最大值
:::

::: click

```js
var lengthOfLongestSubstring = function(s) {
  //利用一个str保存当前不重复的字符串
  let str = ''
  //保存当前的最长子字符串
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let idx = str.indexOf(s[i])
    if (idx != -1) str = str.slice(idx + 1, i)
    str += s[i]
    max = Math.max(str.length, max)
  }
  return max
}
```

:::

## 四数之和

给定一个包含  n 个整数的数组  nums  和一个目标值  target，
判断  nums  中是否存在四个元素 a，b，c  和 d ，使得  a + b + c + d  的值与  target  相等？找出所有满足条件且不重复的四元组。

例:

```js
给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

code:
::: ctnr
在三数之和的解法上再套一层循环。利用滑动窗口的方式
:::

::: click

```js
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (target > 0 && nums[i] > target) return res
    if (nums[i - 1] == nums[i]) continue

    for (let secondPos = i + 1; secondPos <= nums.length - 3; secondPos++) {
      if (nums[secondPos] == nums[secondPos - 1] && secondPos - 1 != i) continue
      let startPos = secondPos + 1
      let endPos = nums.length - 1

      while (startPos < endPos) {
        let first = nums[i]
        let second = nums[secondPos]
        let start = nums[startPos]
        let end = nums[endPos]
        let total = first + second + start + end
        if (total > target) {
          endPos--
        } else if (total < target) {
          startPos++
        } else {
          res.push([first, second, start, end])
          while (nums[endPos] == nums[endPos - 1]) endPos--
          while (nums[startPos] == nums[startPos + 1]) startPos++
          endPos--
          startPos++
        }
      }
    }
  }
  return res
}
```

:::

## 有效的数独

判断一个  9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字  1-9  在每一行只能出现一次。
数字  1-9  在每一列只能出现一次。
数字  1-9  在每一个以粗实线分隔的  3x3  宫内只能出现一次。

例:

```js
输入: [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
输出: true
```

code:
::: ctnr
通过`let k = Math.floor(i / 3) + Math.floor(j / 3) * 3`算出每个块的内容，接下来就好办了
:::

::: click

```js
var isValidSudoku = function(board) {
  //所有列的二维数组
  let col = []
  //所有9宫格的二维数组
  let block = []
  //所有行的二维数组
  let row = []
  //遍历每一行
  for (let i = 0; i < board.length; i++) {
    //初始化每一列
    col[i] = []
    //初始化每一行
    row[i] = []
    //遍历每一行的值
    for (let j = 0; j < board[i].length; j++) {
      //通过行和列算出每个块
      let k = Math.floor(i / 3) + Math.floor(j / 3) * 3
      block[k] = block[k] || []
      //当前要插入列中的元素
      let colElement = board[j][i]
      //当前要插入块中和行中的元素
      let rowAndBlockElement = board[i][j]
      if (
        (col[i].includes(colElement) && colElement != '.') ||
        (row[i].includes(rowAndBlockElement) && rowAndBlockElement != '.') ||
        (block[k].includes(rowAndBlockElement) && rowAndBlockElement != '.')
      ) {
        return false
      } else {
        row[i].push(rowAndBlockElement)
        col[i].push(colElement)
        block[k].push(rowAndBlockElement)
      }
    }
  }
  return true
}
```

:::

## 字母异位词分组

给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

例:

```js
输入: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
输出: [['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']]
```

code:
::: ctnr
用 26 个质数来代表 26 个字母,这样当字母乘积是一样的时候,字母也肯定也是一样的了.
算术基本定理，又称为正整数的唯一分解定理，即：每个大于 1 的自然数，
要么本身就是质数，要么可以写为 2 个以上的质数的积，而且这些质因子按大小排列之后，写法仅有一种方式。
:::

::: click

```js
var groupAnagrams = function(strs) {
  let prime = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
  ]

  let map = new Map()
  // for (const str of strs) {
  //   let temp = str
  //     .split("")
  //     .reduce((prev, cur) => prev * prime[cur.codePointAt() - 97], 1);
  //   map.has(temp) ? map.get(temp).push(str) : map.set(temp, [str]);
  // }
  // return [...map.values()];

  for (const str of strs) {
    let temp = 1
    for (const s of str) {
      temp *= prime[s.codePointAt() - 97]
    }
    map.has(temp) ? map.get(temp).push(str) : map.set(temp, [str])
  }
  return [...map.values()]
}
```

:::

## 重复的 DNA 序列

所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

编写一个函数来查找目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。

例:

```js
输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC", "CCCCCAAAAA"]
```

code:
::: ctnr
滑动窗口解法
:::

::: click

```js
var findRepeatedDnaSequences = function(s) {
  let map = {}
  let set = new Set()
  if (s <= 9) return []
  for (let i = 0; i < s.length; i++) {
    const subStr = s.slice(i, i + 10)
    if (map[subStr]) {
      set.add(subStr)
    } else {
      map[subStr] = 1
    }

    if (s[i + 10] == undefined) break
  }
  return [...set]
}
```

:::

## 前 K 个高频元素

给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

例:

```js
输入: (nums = [1, 1, 1, 2, 2, 3]), (k = 2)
输出: [1, 2]

输入: (nums = [1]), (k = 1)
输出: [1]
```

code:
::: ctnr
滑动窗口解法
:::

::: click

```js
var topKFrequent = function(nums, k) {
  let map = {}
  let res = []
  nums.forEach(x => (map[x] ? map[x]++ : (map[x] = 1)))
  nums = Object.entries(map).sort((a, b) => b[1] - a[1])
  for (let i = 0; i < k; i++) {
    res.push(+nums[i][0])
  }
  return res
}
```

:::

## 找到字符串中所有字母异位词

给定一个字符串  s  和一个非空字符串  p，找到  s  中所有是  p  的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串  s  和 p  的长度都不超过 20100。

例:

```js
输入:
s: "cbaebabacd" p: "abc"

输出:
[0, 6]

解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。

```

code:
::: ctnr
滑动窗口解法
:::

::: click

```js
var findAnagrams = function(s, p) {
  let res = []
  let pSorted = p
    .split('')
    .sort()
    .join('')
  for (let i = 0; i < s.length - (p.length - 1); i++) {
    let windowStr = ''
    windowStr = s.substr(i, p.length)
    if (
      windowStr
        .split('')
        .sort()
        .join('') == pSorted
    ) {
      res.push(i)
    }
  }
  return res
}
```

:::

## 和为 K 的子数组

给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

例:

```js
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。

```

code:
::: ctnr
前缀和数组解法
:::

::: click

```js
var subarraySum = function(nums, k) {
  let preSum = [0]
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    preSum.push(preSum[i] + nums[i])
  }
  for (let i = 1; i < preSum.length; i++) {
    for (let j = i; j < preSum.length; j++) {
      if (preSum[j] - preSum[i - 1] === k) {
        res++
      }
    }
  }
  return res
}
```

:::

## 每日温度

请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用  0 来代替。

例如，给定一个列表  temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是  [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是  [1, 30000]。每个气温的值的均为华氏度，都是在  [30, 100]  范围内的整数。

code:
::: ctnr
利用滑动窗口模板
:::

::: click

```js
var findSubstring = function(s, words) {
  let left = 0,
    right = 0,
    match = 0,
    window = {},
    target = {},
    res = []
  let wordLength
  if (words[0]) {
    wordLength = words[0].length
  } else {
    return res
  }
  for (const x of words) {
    target[x] ? target[x]++ : (target[x] = 1)
  }
  const targetLen = Object.keys(target).length
  //按需要查找的单词长度分成多次去滑动窗口，每次都让指针前进单词的长度。保证能够遍历到所有的情况
  for (let i = 0; i < wordLength; i++) {
    right = left = i
    //正常的滑动窗口的形式
    while (right <= s.length - wordLength) {
      const rightWord = s.substr(right, wordLength)
      if (target[rightWord]) {
        window[rightWord] ? window[rightWord]++ : (window[rightWord] = 1)
        if (window[rightWord] === target[rightWord]) match++
      }
      right += wordLength
      while (match === targetLen) {
        const leftWord = s.substr(left, wordLength)
        if (right - left == words.length * wordLength) {
          res.push(left)
        }
        if (target[leftWord]) {
          window[leftWord]--
          if (window[leftWord] < target[leftWord]) match--
        }
        left += wordLength
      }
    }
    window = {}
    match = 0
  }
  return res
}
```

:::
