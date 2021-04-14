---
title: javascript速记
date: 2021-04-14
author: kaki
location: Tokyo
tags:
  - javascript
toc: true
---

## 初识自动化测试

说来惭愧,两年开发经验,却是 0 的测试经验. 借这次机会,好好学习下 Jest 吧.

## 常用用法

### 初始化 demo 构建

1. 安装依赖包

   ```js
   npm install jest -D
   ```

1. 写一个被测试文件`mydemo.js`

   ```js
   function foo(money) {
     return money > 1000 ? 'rich' : 'poor'
   }

   function bar(age) {
     return age > 50 ? 'old' : 'young'
   }

   module.exports = {
     foo,
     bar,
   }
   ```

1. 写一个测试文件`mydemo.test.js`

   ```js
   const { foo, bar } = require('../src/myDemo1')

   test('shold be rich', () => {
     expect(foo(1005)).toBe('rich')
   })
   test('shold be rich', () => {
     expect(foo(10)).toBe('poor')
   })
   ```

1. 运行测试

   ```js
   npx jest
   ```

   或者在`package.json`的`scripts`中配置`test:'jest'`后运行

   ```js
   npm run test
   ```

### 显示测试覆盖率

如果按照上面的配置完后,我们会发现虽然通过了测试,但是没有显示测试覆盖率报告,导致我们无法得知我们写的代码和测试案例是否做到了完美. 所以在添加一点配置来显示覆盖率,从而完善我们的测试案例.

1. 创建`jest.config.js`文件

   ```js
   npx jest --init
   ```

   此时会让我们配置一些选项
   ![20210414230521](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210414230521.png)

1. 然后将`jest.config.js`中下面`collectCoverage`设置为`true`
   ![20210414230628](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210414230628.png)

1. 此时再次运行`npm run test`会发现测试覆盖率只有 50%
   ![20210414230756](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210414230756.png)
   因为我们下面的测试案例只有测试了 if 判断的一半,没测试另一半,所以才会出现 50%的情况

   ```js
   const { foo, bar } = require('../src/myDemo1')

   test('shold be rich', () => {
     expect(foo(1005)).toBe('rich')
   })
   test('shold be rich', () => {
     expect(foo(10)).toBe('poor')
   })
   ```

   我们添加两个下面测试案例然后再运行一次`npm run test`

   ```js
   test('shold be young', () => {
     expect(bar(51)).toBe('old')
   })
   test('shold be young', () => {
     expect(bar(30)).toBe('young')
   })
   ```

   此时就完美的 100%啦!
   ![20210414231123](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210414231123.png)

1. 每次修改完测试案例都需要重新运行`npm run test`有点麻烦,所以可以用下面的命令来自动运行测试

   ```js
   npx jest --watchAll
   //或者
   npx jest --watch
   ```

### 常用匹配器

1. `toBe(xx)` : 绝对相等,相当于`===`,字符串,数字,布尔值时使用
1. `toEqual(xx)` : 对象或者数组之间的内容相等时使用
1. `toBeNull()` :匹配`null`
1. `toBeUndefined()` : 匹配`undefined`
1. `toBedefined()` :只要定义了都能通过
1. `toBeTruthy()` : 只要是 true 就能过
1. `toBeFalsy()`: 只要是 false 就能过
1. `toBeGreaterThan(xx)`: 只要是大于 xx 就能过
1. `toBeLessThan(xx)` : 只要是小于 xx 就能过
1. `toBeGreaterThanOrEqual(xx)`: 只要是大于等于 xx 就能过
1. `toBeLessThanOrEqual(xx)`: 只要是小于等于 xx 就能过
1. `toBeCloseTo(xx)` : 专治 javascript 的浮点数精准问题,如:**为什么 0.1+0.2 不等于 0.3?**,此时就可以用此匹配器让`0.1+0.2=0.3`
1. `toMatch(xx)`: 匹配某字符串中是否有 xx
1. `toContail(xx)` 匹配某数组中是否有 xx **常用!**
1. `toThrow()` : 如果匹配到异常则能通过,参数可以为空也可以为`Error`原型对象,也可以是字符串或者正则
   ![20210414235516](https://raw.githubusercontent.com/kakigakki/picBed/master/imgs/20210414235516.png)
