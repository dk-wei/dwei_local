let classA = ["marry", "dave", "frank"]
console.log(classA)

classA.push("mia")
console.log(classA)

let igPhotos = [
    "http://xx.img.com/p1.png",
    "http://xx.img.com/p2.png",
    "http://xx.img.com/p3.png",
    "http://xx.img.com/p4.png"

]

console.log("igphotos length: ",  igPhotos.length)
console.log("igphotos length: " + igPhotos.length)
console.log(igPhotos[2])

const card = {
    name: "dave",
    age: "23",
    nationality: "china"
}

console.log(card)

const post1 = {
    image: "http://xx.image.com/a1.png",
    desc: "this is a pic",
    date: "2022/2/2",
    comment: ["looks good", "meh"]

}

const post2 = {
    image: "http://xx.image.com/a1.png",
    desc: "this is a pic",
    date: "2022/2/2",
    comment: ["looks good", "meh"]

}

const post3 = {
    image: "http://xx.image.com/a1.png",
    desc: "this is a pic",
    date: "2022/2/2",
    comment: ["looks good", "meh"]

}

const wall = [
    post1,
    post2,
    post3

]

console.log('wall', wall)

console.log("第一笔", igPhotos[1]);

console.log("dave's nationality is", card.nationality);

if (5<7) {
    console.log("正确");

} else {

    console.log("错误");
}

let scoreA = 10
let scoreB = 99
let condition = true && !false
condition = (scoreA === scoreB)
//condition = true || false
console.log('condition', condition);

let score = 10
if (score === 1) {
    console.log("好诶");
} else {
    console.log("还是🙅🏻‍♀️");

}

let key = 999
switch (key) {
    case 101:
        console.log("不幸运");
        break;
    case 100:
        console.log("炒鸡幸运");
        break;
    case 103:
        console.log("还行吧");
        break;
    default:
        console.log("没去考试");
        break;
}
