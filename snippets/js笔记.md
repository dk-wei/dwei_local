- string按位置索引

`inputString.charAt(r) // 类似java`

- 对string进行reverse

`inputString.split("").reverse().join("") // reverse strings, 需要先打散为array`

注意，如果是array的话还是直接用方括号 `inputArray[2]`

- century与ceiling

`console.log(Math.ceil(century))    // century就是向上取整`

- power of 2 

`x ** 2`

- 得到array中最大值

`let min = Math.max(...inputArray)`

- 删除位置上的element

`sequence.splice(index, 1)`

- 每次加2

`i+=2`

- 只break内部的loop

里外的loop都加上label
```javascript
loop1:
for (let i=0; i<array[0].length;i++) {
    loop2:
    for (let j=0; j<array.length; j++){
        if (array[j][i] === 0){
        break loop2
    } 
        console.log(array[j][i]) 
```

- 从上往下遍历2d-array

```javascript
loop1:
// columns
for (let i=0; i<array[0].length;i++) {  //注意column数是第一个array的长度   
    // rows
    loop2:
    for (let j=0; j<array.length; j++){
        if (array[j][i] === 0){  //
        break loop2
    } 
        console.log(array[j][i]) 
```

- 不用index，遍历array

```javascript

array = ['dave', 'frank', 'shawna']

for (item of array) {  // 类似python for i in array, js用in的话就成了index
    console.log(item)
}
```


- 得到每个element的freq

来源：https://bobbyhadz.com/blog/javascript-count-occurrences-of-each-element-in-array

```javascript
const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count); // 👉️ {a: 3, b: 1, c: 2}
```

- 对array进行slice

```javascript
    let firstHalf = nString.slice(0,length/2).split('')   //前半拉
    let sectHalf = nString.slice(length/2).split('')    // 后半拉
```


- 对array每一个item进行操作

注意，不能使用`forEach`, 因为这玩意儿不返回任何东西，但是map可以返回
```javascript
firstHalf = firstHalf.map(x => Number(x));
```

- 对array进行累加

  1. 使用`lodash`
  ```javascript
  var lodash = require('lodash');
  var arr = [3, 6, 1, 5, 8];
  var sum = lodash.sum(arr);
  console.log(sum); 
  ```

  2. 使用`reduce`
  ```javascript
  const arr = [1, 2, 3, 4];
  const reducer = (accumulator, curr) => accumulator + curr;
  console.log(arr.reduce(reducer));
  ```


- 对array进行排序
```javascript
array.sort((a, b) =>  a - b).reverse()
```

- 创建一个同元素array

`array = Array(5).fill("*").join("")`


- array里面swap elements

```javascript
let swapArrayElements = function(arr, a, b) {
  let temp = arr[a];  //还是要先创建temp指针
  arr[a] = arr[b];
  arr[b] = temp;
```

- 比较两个array

`a.join("") === b.join("")  // 两个array不能直接比较，只能先转变成string`

- array添加新元素

```javascript
let array = ['red', 'green', 'blue']
array[4] = 'purple' // 牛逼，可以直接按照index添加元素，这点比python都强


```

- object

看起来类似python的dictionary，但是在js里面叫object，但是功能类似，注意keys不叫引号。
  ```javascript
  Object.keys(student)   //查看keys
  Object.values(student) //查看values
  let me = Object.create(student)   //根据已有的object创建新object，类似继承的概念

  for (key in students) {blah}   //遍历keys
  ```

  - JSON
  
  ```javascript
  const jsonFile = JSON.stringify(myObject);
  const parsedJson = JSON.parse(jsonFile);
  ```