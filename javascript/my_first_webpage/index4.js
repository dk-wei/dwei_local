for (let i = 10; i <20; i++) {
    console.log(i%3);

}

let a = 100
a+=20
console.log("a", a);


let classA = [1,22,333,444]
for (let i = 0; i<classA.length+1; i++) {

    console.log(classA[i]);
}


let i = 10
let j = 1
while (j<i) {
    j+=3
    console.log(j);

}


function hello(x) {

    console.log("hello", x)
}

hello("dave")

function addMoney(x, y) {
    let result = x+y  //只要是新的variable，就需要let
    let message = "普通会员"

    if (result > 20) {
        message = ("高级会员");
    }   else  {

        message = ("初级会员");
    }


    return message
}

console.log(addMoney(12, 33));

let total = addMoney(12, 33)
console.log("total", total);


// 构造函数, 用函数来创造class
function createNameCard(initName, initAge){
    this.name = initName
    this.age = initAge

}

const a1 = new createNameCard("dave", 18)
const a2 = new createNameCard("marry", 20)

console.log(a2);
console.log(a2.age);

console.log("introduce class");

class Card {
    constructor(initName, initAge) {
        this.name = initName
        this.age = initAge

    }
    hello(){
        console.log('hello', this.name)
    }

    hello2 = () => {
        console.log('hello', this.name)
    }


}

const c1 = new Card("Dave", 18)
console.log(c1);
console.log(c1.age);
console.log(c1.hello());

const aa = { name: "hary" }

aa.helloooooo = c1.hello
aa.helloooooo ()