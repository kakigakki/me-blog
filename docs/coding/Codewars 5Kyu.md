---
title: Codewars 5kyu問題集
date: 2020-07-16
author: kaki
location: Tokyo
tags:
  - javascript
  - codewars
toc: true
---

## javascript 魔法関数

1. 関数が無限連続に実行されることができる、かつ、最後にプリミティブ値が返却されるという条件の場合に、`Object.prototype.valueOf`を利用するのは最適だと思います。
1. 問題詳細：

::: ctnr
下記条件を満たす関数を作る：

- 任意数のパラメータを受け入れます，
- 指定されたすべてのパラメーターの合計を返します
- 数値として解析できないすべてのパラメーターは 0 としてカウントされます
- 無限に呼び出すことができます。
- 次の関数呼び出しは同じことを行いますが、前回の関数結果も合計します

:::

コード：
::: click

```js
function MagicFunction(...args) {
  let sum1 = 0
  let f1 = (...args) => {
    //将能转为数值的转为数值
    sum1 += args
      .map(Number)
      //排除NaN
      .reduce((cur, prev) => {
        return (!isNaN(prev) ? prev : 0) + cur
      }, 0)
    return f1
  }
  f1.valueOf = () => sum1 //利用valueOf重新声明f1函数，此时 f1.valueOf() == f1 为true
  return f1(...args)
}
```

:::

## A Chain adding function

連続して呼び出されたときに数値を足す関数を作成してください。

例：

```js
add(1)(2)
// returns 3

add(1)(2)(3) // 6
add(1)(2)(3)(4) // 10
add(1)(2)(3)(4)(5) // 15

var addTwo = add(2)
addTwo // 2
addTwo + 5 // 7
addTwo(3) // 5
addTwo(3)(5) // 10
```

::: ctnr
コツ：Object.prototype.valueOf を利用
:::

コード：
::: click

```js
function add(n) {
  let res = 0
  res += n
  let fn = n => {
    res += n
    return fn
  }
  fn.valueOf = () => res
  return fn
}
```

:::
