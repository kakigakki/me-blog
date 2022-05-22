---
title: vueuse源码阅读笔记
date: 2022-05-22
author: kaki
location: Tokyo
toc: true
---

## useClamp

使用` Math.min(max, Math.max(min, n))`可以让`n`的最小值和最大值不超过`min,max`区间

## useBrowserLocation

当需要结构带链式调用`?.`的值时，会报`undefined`错误，这时可以这样解决
```ts
const { state, length } = window?.history || {}
```
## useMediaQuery

主要使用了`window.matchMedia(query)`[API](https://developer.mozilla.org/ja/docs/Web/API/Window/matchMedia)

## useBase64

`promise`再次resolve一个`promise`对象时，第二个promise对象的resolve后的res也会成为第一个resolve后的res。所以其实`promise`中可以层层嵌套，虽然看起来很乱，但是最内层的resolve后的值其实就等于最外层resolve的值