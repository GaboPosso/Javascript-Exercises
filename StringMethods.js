let text = "5";
let padded = text.padStart(4,"x")
console.log(padded)//0005
let text1 = "5";
let padded1 = text1.padEnd(4,"0")
console.log(padded1)//5000

let text2 = 'Hello';
console.log(text2.charAt(0));//H
console.log(text2.charCodeAt(3));//073
console.log(text2.split(","));//[H,e,l,l,o]
console.log(text2.split(""));//[Hello]
console.log(text2.split("|"));//[H|e|l|l|o]

let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");//7
str.lastIndexOf("locate");//21
str.search("locate");//7

let str2 = "The rain in Spain stays mainly in the plain"
str2.match(/ain/g);//[ain ain ain ain]
str2.includes('rain');//True
str2.startsWith('The',0);//True
str2.endsWith('plain');//True