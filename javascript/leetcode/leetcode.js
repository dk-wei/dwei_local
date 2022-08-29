

const student = {
    firstName: 'John',
    lastName: 'Smith',
    strength: ['music', 'art'],
    exams: {
        midterm: 80,
        final: 90
    },
    greeting: ()=>(console.log("hello world!")),
    talk() {
        console.log("不要说话")
    }
}


let me = Object.create(student)
me.firstName = 'Dave'
console.log(student.talk())


//array = student.exams
//console.log(Object.values(student.exams).reduce((sum, currentSum)  => sum + currentSum) / Object.values(student.exams).reduce((sum, currentSum)  => sum + currentSum))

let shoppingCart = [
    {
        product: 'adidas',
        price: 1000,
        quantity: 1
    },
    {
        product: 'nike',
        price: 2000,
        quantity: 2
    },
    {
        product: 'umbro',
        price: 200,
        quantity: 20
    },


]

console.log(shoppingCart)

//window.alert('haha')
window.addEventListener('load', function(){
    const p1 = document.getElementById('greeting')
    console.log(p1)
    p1.innerText = '大家好，瓦西Dave'
    console.log(p1.textContent)

    const b1 = document.getElementById('donate')
    b1.addEventListener('click', () =>{
        console.log("已捐款")
    })

    const in1 = document.getElementById('input1')
    in1.addEventListener('keyup', (input) =>{
        console.log('input.target.value', input.target.value)
    })





})
