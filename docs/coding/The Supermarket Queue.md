---
title: スーパー行列
date: 2020-07-02
author: kaki
location: Tokyo  
tags: 
  - javascript
  - codewars
toc : true
---

スーパーにはセルフレジがあります。あなたの仕事は、すべての顧客が会計するのに必要な合計時間を計算する関数を書くことです！

**入力**:

- **customers**: 行列を表す正整数の配列。 各整数は顧客を表しており、その値は顧客が会計するのに必要な時間です。
- **n**: 正整数、セルフレジの数。

**出力**:

この関数は、必要な合計時間を返す

**制限**:

- 行列は1つだけです。
- 行列の順番は決して変更されません。
- 行列の先頭の人（つまり、配列/リストの最初の要素）は、空きがな- くなるとすぐにレジに進みます。

**注意事項**:

以下の例と説明を参照して、タスクを正しく理解してください

例：

``` js
queueTime([5,3,4], 1)
// should return 12
// セルフレジが一個だけなので、合計時間は全部の顧客の会計時間です

queueTime([10,2,3,3], 2)
// should return 10
// ここではn = 2で、2番目、3番目、4番目の顧客は一番目の顧客が終わるまでに終わる

queueTime([2,3,10], 2)
// should return 12
```

::: ctnr

1. `Array.fill()`で最初に各レジの合計時間を`0`に設定する
1. `Array.sort()`で利用完了のレジを配列の先頭に移動し、次の顧客の会計時間を入れる

:::

コード：
::: click

```js

function queueTime(customers, n) {
    //使用fill填充数据，就不用再一次循环了。
    let tills = new Array(n).fill(0)
    while (customers.length) {
        tills[0] += customers.shift()
        tills = tills.sort((a, b) => a - b)
    }
    return Math.max(...tills)
}

```

:::
