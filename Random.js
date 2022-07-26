/*<------------------------------------ JS Random -------------------------------------------------> */

//returns a random number between 0 and 1
var a = Math.random();
console.log(a)

//Random integers 
var b = Math.floor(Math.random()*10);
console.log(b)

//Returns a random integer  between 0 and 100

var c= Math.floor(Math.random()* 101);
console.log(c);

//Returns a random integer from 1 to 100

var d = Math.floor(Math.random()*100)+1;
console.log(d);

// A PROPER RANDOM FUNCTION

/* It might be a good idea to create a proper random function to use fo al integer purposes.
This JS function will always return a random number between min (included) and max(excluded) */

function getRndInteger(min, max) {
    return console.log( Math.floor(Math.random() * (max - min)) + min);
}
getRndInteger(0, 101)

//This JS function always return s rsndom number between min and max (both included):

function getRndIntegerInclude(min, max){
    return console.log( Math.floor(Math.random()*(max - min + 1))) + min;
}
getRndIntegerInclude(0,100);