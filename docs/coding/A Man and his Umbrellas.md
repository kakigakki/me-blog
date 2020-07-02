---
title: 傘持つ男
date: 2020-06-30
author: kaki
location: Tokyo  
tags: 
  - javascript
  - codewars
---

毎朝、ある男が歩いて仕事に行き、午後は家に帰ります。午前中に雨だと、家に傘をあるなら、雨にぬれないように家から傘を持って出勤します。そして、傘を職場に保管します。 同様に、午後に雨だと、彼の職場に傘があるなら、彼は職場に保管された傘を使います。  

さまざまな気象条件を考慮して、あなたのタスクは、彼が濡れないようにするために、最初に必要な傘の最小数を算出することです。  

彼は家にいくつかの傘と仕事にいくつかの傘で始めることができますが、出力は単一の整数、最小の合計数です。 入力は、連続する半日の天気予報の配列/リストです。 したがって、たとえば 最初値は1日目の朝の天気、2番目の値は1日目の午後の天気です。

オプションは　"clear", "sunny", "cloudy", "rainy", "windy" と　"thunderstorms"  ※彼は雨の日にだけ傘を使います。

例えば、三日間の天気なら、下記6つの値が可能：

`weather = ["rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"]`  

::: ctnr

出入力例：

``` js
minUmbrellas(["rainy", "clear", "rainy", "cloudy"])
// should return 2
// 一日目の朝に家から一本傘を利用、そして、職場に置き、二日目の朝、また家から新しい一本傘を利用する

minUmbrellas(["sunny", "windy", "sunny", "clear"])
// should return 0
// 雨の日はない

minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"])
// should return 1
//　全部雨の日なので、一本でいい
```

:::

コード：
::: click

```js
function minUmbrellas(weather) {
    let home = 0;
    let office = 0;
    for (let i = 0; i < weather.length; i++) {
        if (["thunderstorms", "rainy"].includes(weather[i])) {
            if (i % 2) {
                if (office) {
                    office--;
                }
                home++;
            } else {
                if (home) {
                    home--;
                }
                office++;
            }
        }
    }
    return home + office;
}
```

:::
