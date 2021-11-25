---
title: NodeJs事件循环机制
date: 2021-11-24
author: kaki
location: Tokyo
tags:
  - nodejs
toc: true
---

## 初始化

当Nodejs启动时会初始化event loop ，每一个event loop都会包含如下顺序6个循环阶段。
![20211124223833](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20211124223833.png)

>图中每个方框被称为事件循环的一个阶段(phase),六个阶段合为一个循环。

### 6个阶段概览

#### timers（定时器）
此阶段执行那些有`setTimeout()`和`setInterval()`调度的回调函数

#### I/O callbakcs （挂起的回调）
此阶段执行延迟到下一个循环迭代的 I/O回调函数，除了`close callbacks`和那些由`timer`与`setImmediate()`调度的回调

#### idle(空转),prepare

此阶段只在内部使用。跟我们写的代码没关系

#### poll(轮询)
检索新的I/O事件，执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由`timer`和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞(假如poll队列为空，此时io有一个du)。

#### check
`setImmediate()` 回调函数在这里执行。

#### close callbacks
一些关闭的回调函数，如：`socket.on('close', ...)`。用得比较少。


### 6个阶段详细介绍

#### timers（定时器）

> **注意：轮询 阶段 控制何时定时器执行。poll队列中不再有回调，因此事件循环机制将查看最快到达阈值的timer，然后将回到 timer 阶段，**


例如，调度了一个在 100 毫秒后超时的定时器，脚本开始异步读取会耗费 95 毫秒的文件:

```js
const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
```

此代码的执行流程为下：
-`poll`95毫秒
-`poll`10毫秒
- 定时器 0毫秒
  
解释：
当事件循环进入`poll`阶段时，它有一个空队列（此时 fs.readFile() 尚未完成），因此它将等待剩下的毫秒数，直到达到最快的一个`timer`阈值为止。当它等待 95 毫秒过后时，fs.readFile() 完成读取文件，如何此时读取文件后没有其他回调的话，那么轮询继续等待5毫秒则会回到`timer`去执行`setTimeout()`，这时候脚本总耗时就是最快的一个`timer`阙值。但是因为有一个需要 10 毫秒才能完成的回调，此回调在95毫秒读取文件完成后，将被添加到`poll`队列中并执行。当回调完成时，队列中不再有回调，因此事件循环机制将查看最快到达阈值的`timer`，然后将回到 `timer` 阶段，以执行定时器的回调。在本示例中，您将看到调度`timer`到它的回调被执行之间的总延迟将为 105 毫秒。

#### I/O callbacks （挂起的回调函数）

此阶段对某些系统操作（如 TCP 错误类型）执行回调。例如，如果 TCP 套接字在尝试连接时接收到 ECONNREFUSED，则某些 *nix 的系统希望等待报告错误。这将被排队以在 挂起的回调 阶段执行。

#### poll （轮询）

轮询 阶段有两个重要的功能：

1.  计算应该阻塞和`poll`I/O 的时间。
1.  然后，处理`poll`队列里的事件，回调。

当事件循环进入`poll`阶段且 没有被调度的`timer`时 ，将发生以下两种情况之一：
- 如果`poll`队列不是空的。事件循环将循环访问回调队列并同步执行它们，直到队列已用尽，或者达到了与系统相关的硬性限制。
- 如果`poll`队列 是空的 ，还有两件事发生：
  - 如果脚本被`setImmediate()`调度，则事件循环将结束`poll`阶段，并继续`check`阶段以执行那些被调度的脚本。
  - `poll`队列为空(没有进去`check`阶段，且全部的I/O事件，回调执行完毕)，事件循环将检查 _已达到时间阈值的`timer`_。如果一个或多个`timer`已准备就绪，则事件循环将绕回`timer`阶段以执行这些`timer`的回调。
  - 如果脚本未被`setImmediate()`调度，则事件循环将等待回调被添加到队列中，然后立即执行。

#### check（检查阶段）

`setImmediate()` 回调函数在这里执行。
一般来说如果`poll`队列在执行完毕后，会进入阻塞等待下一个事件I/O进来。但是如果`poll`队列为空时，此时`check`不为空，则会进入`check`阶段执行`setImmediate()` 

#### close callbacks（关闭的回调函数）

如果套接字或处理函数突然关闭（例如 `socket.destroy()`），则`'close'`事件将在这个阶段发出。否则它将通过 `process.nextTick()` 发出。


### 对比

#### `setImmediate()` 对比 `setTimeout()`

`setImmediate()` 和 `setTimeout()` 很类似，但是基于被调用的时机，他们也有不同表现。

- `setImmediate()` 设计为一旦在当前`poll`阶段完成， 就执行脚本。
- `setTimeout()` `poll`队列为空时，且存在_已达到时间阈值的`timer`_过后运行脚本。

执行计时器的顺序将根据调用它们的上下文而异。如果二者都从主模块内调用，则计时器将受进程性能的约束（这可能会受到计算机上其他正在运行应用程序的影响）。

例如，如果运行以下不在 I/O 周期（即主模块）内的脚本，则执行两个计时器的顺序是非确定性的，因为它受进程性能的约束：
```js
// timeout_vs_immediate.js
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
```
```bash
$ node timeout_vs_immediate.js
timeout
immediate

$ node timeout_vs_immediate.js
immediate
timeout
```

但是，如果你把这两个函数放入一个 I/O 循环内调用，setImmediate 总是被优先调用：
```js
// timeout_vs_immediate.js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
```

```bash
$ node timeout_vs_immediate.js
immediate
timeout

$ node timeout_vs_immediate.js
immediate
timeout
```
使用`setImmediate()`相对于`setTimeout()`的主要优势是，如果`setImmediate()`是在 I/O 周期内`check`阶段被调度的，那它将会在其中任何的定时器之前执行，跟这里存在多少个定时器无关

#### `process.nextTick()` 对比 `setImmediate()`

`process.nextTick()`并不属于事件循环的某个阶段，而是在每个阶段执行前执行。
![20211124233635](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20211124233635.png)

上图代码执行顺序
```bash
nextTick1
nextTick2
setImmediate
nextTick3
setTimeout
```

实质上， `process.nextTick()`  `setImmediate()`这两个名称应该交换，因为`process.nextTick()` 比 `setImmediate()` 触发得更快，但这是过去遗留问题，因此不太可能改变。如果贸然进行名称交换，将破坏 npm 上的大部分软件包。每天都有更多新的模块在增加，这意味着我们要多等待每一天，则更多潜在破坏会发生。尽管这些名称使人感到困惑，但它们本身名字不会改变。
_建议开发人员在所有情况下都使用 setImmediate()，因为它更容易理解。_

