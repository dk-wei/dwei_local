
// Array Iteration
var arr2 = [ 1231, 'wut the hell', '牛逼啊']

console.log(arr2)

// for each 
arr2.forEach(function (item, index) {    //这个也是搞笑，必须前面是item，后面是index
    console.log(index+1000000, "还是牛逼的---" + item)
})

//map
var arr3 = arr2.map(function (item) {
    return "用了map之后： " + item
})
console.log(arr3)

//filter
var arr4 = arr2.filter(function (item) { //保留return为true的items
    return typeof(item) == 'string'
    
})
console.log(arr4)

//reduce
arr2 = [1,2,3,3,4]
var sum = arr2.reduce(function (result, item){
    return result + item

}, 100000)   //100000是初始值
console.log(sum);

//some
var hasNegative = arr2.some(function (item) {    // arr2中是否存在xx的情况
    return item<0 
})

console.log(hasNegative)

arr2 = [2,10]


//every
var all_even = arr2.every(function (item) {    // arr2中是否全部是xx的情况
    return item%2 == 0
})

// define dictionaru
console.log(all_even)
var dict = new Array()   //js中直接用array就能定义字典

dict['one'] = 1
dict['two'] = 222222222
dict['two'] = 32222222222

console.log(dict)
console.log(dict['two'])

// find
var dict2 = [{id : "a", nationality: 'usa'}, {id: 'b'}, {id: 'c', nationality: 'usa'}, {id: 'c'}]

console.log(dict2)
var found = dict2.find(function (item){
    return item.nationality == "usa"

})
console.log(found)    //但是貌似只能找到第一个


// find index
var dict2 = [{id : "a", nationality: 'uk'}, {id: 'b'}, {id: 'c', nationality: 'usa'}, {id: 'c'}]

console.log(dict2)
var found = dict2.findIndex(function (item){
    return item.nationality == "usa"

})
console.log(found)    //但是貌似只能找到第一个