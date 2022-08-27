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