---
title: Codewars 4kyu Kata
date: 2022-04-13
author: kaki
location: Tokyo
tags:
  - javascript
  - codewars
toc: true
---


## Adding Big Numbers
[Link](https://www.codewars.com/kata/525f4206b73515bffb000b21)
```js
function add(a, b) {// Fix me!
  if(b.length>a.length){
    [a,b]=[b,a]
  }
  let overTen = false
  let res = ''
  for(let i = a.length - 1 ;i >= 0 ; i--){
    const aNum = a[i]
    const bNum = b[i - (a.length - b.length)] || 0
    const temp = +aNum + +bNum 
    const cur  = overTen ? temp + 1 :temp
    res = cur%10 + res
    overTen = cur > 9 ? true : false
  }
  if(overTen){
    res = '1' + res
  }
  return res
}
```

## One Line Task: Remove Zeros
[Link](https://www.codewars.com/kata/58fecb82f3dff0a347000018)

```js
removeZeros=a=>eval(`[${/[1-9].*[1-9]/.exec(a)}]`)
```

## Pyramid Slide Down
[Link](https://www.codewars.com/kata/551f23362ff852e2ab000037)

```js
function longestSlideDown (pyramid) {
  for (var i = pyramid.length - 2; i > -1; i--) {
    for (var j = 0; j < pyramid[i].length; j++) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
    }
  }
  return pyramid[0][0];
}
```

## Nesting Structure Comparison
[Link](https://www.codewars.com/kata/520446778469526ec0000001)
```js
Array.prototype.sameStructureAs = function (other) {
   const helper = (cur,other)=>{
     if(cur.length !== other.length){
       return false
     }
     let flg = true
     for(let i = 0; i< cur.length;i++){
        console.log(cur[i],other[i])
       if(Array.isArray(cur[i]) && Array.isArray(other[i])){
         flg = flg &&  helper(cur[i],other[i])
       }else if(!Array.isArray(cur[i]) && !Array.isArray(other[i])){
         continue
       }else{
         return false
       }
      }
     return flg
   }
   return helper(this,other)
};
```

## Twice linear
[Link](https://www.codewars.com/kata/5672682212c8ecf83e000050)
```js
function dblLinear(n) {
  var ai = 0, bi = 0, eq = 0;
  var sequence = [1];
  while (ai + bi < n + eq) {
    var y = 2 * sequence[ai] + 1;
    var z = 3 * sequence[bi] + 1;
    if (y < z) { sequence.push(y); ai++; }
    else if (y > z) { sequence.push(z); bi++; }
    else { sequence.push(y); ai++; bi++; eq++; }
  }
  return sequence.pop();
}
```

## Strings Mix

[Link](https://www.codewars.com/kata/5629db57620258aa9d000014)
```js
function mix(s1, s2) {
  const aCode = "a".charCodeAt()
  s1 = s1.replace(/[^a-z]+/g,"")
  s2 = s2.replace(/[^a-z]+/g,"")
  
  const createStringArr = (s) =>{
    const sMap = s.split('').reduce((map,letter) =>{
      map[letter] = (map[letter] || 0) + 1
      return map
    },{})
    const sArr = Object.keys(sMap)
      .map(item=>item.repeat(sMap[item]))
      .filter(item=>item.length!=1)
      .sort((a,b)=>{
      if(a.length===b.length){
        return a[0].charCodeAt() - b[0].charCodeAt()
      }
      return b.length - a.length
      })
    return sArr
  }
  
  const s1Arr = createStringArr(s1)
  const s2Arr = createStringArr(s2)
  let s1Pointer = 0
  let s2Pointer = 0
  let result = []
  const hasVisited = new Set()
  while(s1Arr[s1Pointer] && s2Arr[s2Pointer]){
    s1Letters = s1Arr[s1Pointer]
    s2Letters = s2Arr[s2Pointer]
    if(hasVisited.has(s1Letters[0])){
      s1Pointer++
      continue
    }
    else if(hasVisited.has(s2Letters[0])){
      s2Pointer++
      continue
    }
    
    if(s1Arr[s1Pointer].length > s2Arr[s2Pointer].length){
      result.push(`1:${s1Letters}`)
      s1Pointer++
      hasVisited.add(s1Letters[0])
    }
    else if(s1Arr[s1Pointer].length < s2Arr[s2Pointer].length){
      result.push(`2:${s2Letters}`)
      s2Pointer++
      hasVisited.add(s2Letters[0])
    }
    else{
      if(s1Letters[0] === s2Letters[0]){
        result.push(`=:${s1Letters}`)
        s1Pointer++
        s2Pointer++
        hasVisited.add(s1Letters[0])
      }
      else if(s1Letters[0] > s2Letters[0]){
        result.push(`2:${s2Letters}`)
        s2Pointer++
        hasVisited.add(s2Letters[0])
      }
      else {
        result.push(`1:${s1Letters}`)
        s1Pointer++
        hasVisited.add(s1Letters[0])
      }
    }
  }
  while(s1Arr[s1Pointer]){
    s1Letters = s1Arr[s1Pointer]
    if(hasVisited.has(s1Letters[0])){
      s1Pointer++
      continue
    }
    result.push(`1:${s1Letters}`)
    s1Pointer++
  }
  while(s2Arr[s2Pointer]){
    s2Letters = s2Arr[s2Pointer]
    if(hasVisited.has(s2Letters[0])){
      s2Pointer++
      continue
    }
    result.push(`2:${s2Letters}`)
    s2Pointer++
  }
  result.sort((a,b)=>{
    if(a.length===b.length && a.startsWith("2:")){
      return 1
    }
  })
  .sort((a,b)=>{
    if(a.length===b.length && a.startsWith("=:")){
      return 1
    }
  })
  .sort((a,b)=>{
    if(
      a.length===b.length && 
      a.startsWith("=:") && 
      b.startsWith("=:")
      ){
        return a[2].charCodeAt() - b[2].charCodeAt()
      }
        })
  .sort((a,b)=>{
    if(
      a.length===b.length && 
      a.startsWith("1:") && 
      b.startsWith("1:")
      ){
        return a[2].charCodeAt() - b[2].charCodeAt()
      }
        })
  .sort((a,b)=>{
    if(
      a.length===b.length && 
      a.startsWith("2:") && 
      b.startsWith("2:")
      ){
        return a[2].charCodeAt() - b[2].charCodeAt()
      }
        })
  return result.join("/")
}
```

## Sum Strings as Numbers

[Link](https://www.codewars.com/kata/5324945e2ece5e1f32000370)
```js
function sumStrings(a,b) { 
  return BigInt(a)+BigInt(b)+""
}

```

## Sum of Intervals

[Link](https://www.codewars.com/kata/52b7ed099cdc285c300001cd)
```js
function sumIntervals(intervals) {
  const secVals = []
  let length = 0
  intervals.sort((a,b)=>a[0]-b[0])
  a:for(let i = 0 ;i<intervals.length ; i++){
    const interval = intervals[i]
    for(let j = 0 ;j<secVals.length ; j++){
      if(secVals[j]>interval[0] && secVals[j]<interval[1]){
        interval[0] = secVals.splice(j,1)
        break
      }else if(secVals[j] >= interval[1]){
        continue a;
      }
    }
    length += interval[1]-interval[0]
    secVals.push(interval[1])
  }
  return length
}
```

## Strip Comments
[Link](https://www.codewars.com/kata/51c8e37cee245da6b40000bd)
```js
function solution(input, markers) {
  const inputArr = input.split("\n")
  for(let i = 0;i<inputArr.length;i++){
    for(let j = 0 ;j<inputArr[i].length;j++){
      if(markers.includes(inputArr[i][j])){
        inputArr[i] = inputArr[i].substring(0,j).replace(/\s$/g,"")
        break
      }
    }
  }
  return inputArr.join("\n")
};
```

## Permutations
[Link](https://www.codewars.com/kata/5254ca2719453dcc0b00027d)

```js
function permutations(string) {
    let res = []
    let visited = new Array(string.length)
    let helper = (path) => {
        if (path.length === string.length) {
            res.push(path.join(''))
            return
        }
        let duplicated = []
        for (let i = 0; i < string.length; i++) {
            if (duplicated[string[i]] || visited[i]) continue
            visited[i] = true
            duplicated[string[i]] = true
            path.push(string[i])
            helper(path)
            path.pop()
            visited[i] = false
        }
    }
    helper([])
    return res
  
}
```

## Next bigger number with the same digits

[Link](https://www.codewars.com/kata/55983863da40caa2c900004e)
```js
function nextBigger(n){
  const arr = (n+"").split("")
  const stack = []
  for(let i =arr.length-1 ;i>=1;i--){
    
    stack.push(+arr[i])
    if(+arr[i] <= +arr[i-1]){
      continue
    }
    stack.push(+arr[i-1])
    stack.sort()
    
    //switch value
    let index = stack.indexOf(+arr[i-1])
    while(stack[index]===stack[++index]){
    }
    const target = stack[index]
    arr[i-1] = target
    stack.splice(index,1)
    
    for(let j =i ;j<arr.length;j++){
      arr[j] = stack[j-i]
    }
    return +arr.join("")
  }
  
  return -1
}

```

## Range Extraction

[Link](https://www.codewars.com/kata/51ba717bb08c1cd60f00002f)
```js
function solution(list){
  
 const doFormat = (i)=>{
   const tmp = i
   while( list[i] + 1 ===  list[i+1]){
      i++
   }
   
   const length = i - tmp
   if(length>1){
      list[tmp] = list[tmp] + '-' + list[i]
      list.splice(tmp+1,length)
   }
 }
 
 for(let i = 0;i<list.length;i++){
    doFormat(i)
 }
  return list.join(",")
}
```

## Sudoku Solution Validator
[Link](https://www.codewars.com/kata/529bf0e9bdf7657179000008)
```js
function validSolution(board){
  //所有列的二维数组
  let col = [];
  //所有9宫格的二维数组
  let block = [];
  //所有行的二维数组
  let row = [];
  //遍历每一行
  for (let i = 0; i < board.length; i++) {
    //初始化每一列
    col[i] = [];
    //初始化每一行
    row[i] = [];
    //遍历每一行的值
    for (let j = 0; j < board[i].length; j++) {
      let k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      block[k] = block[k] || [];
      let colElement = board[j][i];
      let rowAndBlockElement = board[i][j];
      if (
        colElement==="0"||
        rowAndBlockElement==="0" ||
        col[i].includes(colElement) ||
        row[i].includes(rowAndBlockElement)||
        block[k].includes(rowAndBlockElement))
       {
        return false;
      } else {
        row[i].push(rowAndBlockElement);
        col[i].push(colElement);
        block[k].push(rowAndBlockElement);
      }
    }
  }
  return true;
}
```

## Snail

[Link](https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1)
```js
snail = function(array) {
  const result = []
  while(array.length){
    // first 
    array.length &&  result.push(...array.shift())
    console.log(result)
    //second 
    array.forEach(row=>result.push(row.pop()))

    //third
    array.length && result.push(...(array.pop().reverse()))

    //forth
    for(let i =array.length-1;i>0;i--){
      result.push(array[i].shift())
    }
  }
  return result
}
```

## Path Finder #1: can you reach the exit?

[Link](https://www.codewars.com/kata/5765870e190b1472ec0022a2)

```js
function pathFinder(maze){
  const mazeArr = maze.split('\n').map(str=>str.split(""))
  const n = mazeArr.length
  const m = mazeArr[0].length
  const dire = [[0,1],[0,-1],[1,0],[-1,0]]
  const queue = [[0, 0]]
  while (queue.length) {
      const [x, y] = queue.shift()
      if (x >= n || x < 0 || y >= m || y < 0 || mazeArr[x][y] === "W") continue
      if(x===n-1 && y===m-1){
        return true
      }
      mazeArr[x][y] = "W";
      dire.forEach(move => {
          const newX = move[0] + x
          const newY = move[1] + y
          queue.push([newX, newY])
      })
  }
  return false
}
```