var msg = " This is my \n 'first msg     "

console.log(msg)
console.log(msg[2])
console.log(msg.includes('my'))
console.log(msg.startsWith('This'))
console.log(msg.indexOf('my'));
console.log(msg.split(' '));
console.log(msg.split(' ')[1]);

var msg1 = " This is my \n 'java and javascript world     "
var msg2 = " hope you will like it it it  "

console.log(msg1.charAt(9));
console.log(msg1.charCodeAt(9));
console.log(msg1.concat(msg2));
console.log(msg1+'---'+msg2);


console.log(String.fromCharCode(114));
console.log(msg2.indexOf('it'));
console.log(msg2.lastIndexOf('it'));
console.log(msg1.match(/java/g));
console.log(msg1.repeat(3));
console.log(msg1.replace(/java/g, 'JAVA'));
console.log(msg1.search("java"));

console.log(msg1.slice(2,10));

for (var i=0; i<3; i++) (
    console.log(i)

) 

console.log(msg1.substr(2, 10)) // deprecated
console.log(msg1.substring(2,10));
