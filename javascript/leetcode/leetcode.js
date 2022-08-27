console.log('hello world!')

let s = "   fly me   to   the moon  ";

let s2 = s.split(' ').filter((item)=> (item != ""))

let lastWord = s2[s2.length -1].length



console.log(lastWord)

let year = 1905;
let century = year/100;

console.log(Math.ceil(century))    // century就是向上取整


let a = "abac"
let b = a.split('').reverse()
console.log(b, a.split(''));

console.log(a==b);



//inputString.split("").reverse().join("") // reverse strings



let inputArray = [6, 2, 3, 8]
let min = Math.max(...inputArray)
console.log(min);

let sequence =  [10,0,1,2,3,4,5]

let maxPos = 1
for (let i=1; i<sequence.length;i++){
    if (sequence[i]>sequence[i+1]) {
        break
    } else {
        maxPos++
    }}

sequence.splice(0, 1);
// return (sequence.length - maxPos)<1

let w2 = [Math.NEGATIVE_INFINITY]
console.log(w2)


// for (let i=5; i<10;i++){
//     console.log(i)

// }


let twoDarray = [[8,1,1,2], 
[0,5,0,3], 
[2,0,3,3]]

console.log(twoDarray[0].length) 

loop1:
for (let i=0; i<twoDarray[0].length;i++) {
    loop2:
    for (let j=0; j<twoDarray.length; j++){
        if (twoDarray[j][i] === 0){
        break loop2
    } 
        console.log(twoDarray[j][i]) 
    

    }
    
}

let dict = {1:[1,2]}
dict[1].push(3)
console.log(dict)

let array = ['abc', 'def', 'sdfsdfsd']
console.log(dict)




array = ['dave', 'frank', 'shawna']

for (item of array) {
    console.log(item)

}

s = "adcaa"
let freq = {}
let sString = s.split("")
console.log(sString)

for (let ele of sString) {
    if(freq[ele]) {
        freq[ele]+=1
    }
    else{
        freq[ele] = 1
    }
    

}

console.log(freq)


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

for (ele in count){
    console.log(ele)
}


let num = 902312367+''
console.log(num.slice(3)) 

let firstHalf = num.slice(0,3).split('')
firstHalf.forEach((x)=>(parseInt(x)))
console.log(firstHalf.forEach((x)=>(Number(x)))) //
// const sum = firstHalf.reduce((accumulator, value) => {
//     return accumulator + value;
//   }, 0);

// console.log(sum)

array = [32,1,283,4]
array[0] = -10
array.sort((a, b) =>  a - b).reverse()

console.log(array)