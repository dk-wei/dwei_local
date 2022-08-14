// Basic Array Methods
var arr = ["a", "b", 1, "d", "e", "f"]


arr.push('z')
console.log(arr)

var popcorn = arr.pop()
console.log(popcorn)

console.log(arr.pop())  //z has been popped out of arr already
console.log(arr)

var arr2 = [ 1231, 'wut the hell', '牛逼啊']
console.log(arr.concat(arr2)) 
console.log(arr2);

console.log(arr2.join('-'))

console.log(arr2.reverse())
console.log(arr2)

console.log(arr2.shift())
console.log(arr2) 

console.log(arr2.unshift('ppppppppppppppppp'))
console.log(arr2) 


console.log(arr2.slice(1,3))

arr2.push('i')
arr2.push('j')
console.log(arr2.sort())

console.log(arr2)
console.log(arr2.splice(2,3, "JS Nuggets"))
console.log(arr2)

