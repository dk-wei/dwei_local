console.log("hello world!");

const calculator = require("./calculator.js");
//console.log(calculator);

let test_num1 = 1000123 
let test_num2 = 123124
let addResult = calculator.add(test_num1, test_num2)
let subtractResult = calculator.subtract(test_num1, test_num2)

console.log(`${test_num1} + ${test_num2} is ${addResult}`)
console.log(`${test_num1} - ${test_num2} is ${subtractResult}`)