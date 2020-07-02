---
title: javascript魔法関数
date: 2020-06-30
author: kaki
location: Tokyo  
tags: 
  - javascript
  - codewars
toc : true
---

## Object.prototype.valueOfで関数を動的に変更することが可能

1. 関数が無限連続に実行されることができる、かつ、最後にプリミティブ値が返却されるという条件の場合に、`Object.prototype.valueOf`を利用するのは最適だと思います。
1. 問題詳細：

::: ctnr
下記条件を満たす関数を作る：

- 任意数のパラメータを受け入れます，
- 指定されたすべてのパラメーターの合計を返します
- 数値として解析できないすべてのパラメーターは0としてカウントされます
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
        sum1 += args.map(Number)
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
