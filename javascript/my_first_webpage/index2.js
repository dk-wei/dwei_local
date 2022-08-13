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
