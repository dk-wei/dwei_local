
function add(num1, num2){
    return num1 + num2

}

function subtract(num1, num2){
    return num1 - num2
}

// module.exports.add = add
// module.exports.subtract = subtract

// exports.add = add
// exports.subtract = subtract

module.exports = {   // 可以简化到全部放到一个dictionary
    // add:add,
    // subtract:subtract
    add, subtract

}
