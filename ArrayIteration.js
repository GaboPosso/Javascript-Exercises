//-----------------------------JS ARRAY ITERATION-----------------------------------------------
//The foreach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];
let txt = "";
console.log(numbers.forEach(myFunction));

function myFunction(value) {
  return txt += value + "<br>"
}
console.log(numbers.forEach(myFunction));
//------------------------------- JS ARRAY MAP--------------------------------------------------
//the map() method creates a new array by performing a function on each array element, 
//does not execute the function for array elements without values. 
//The map () does not change the original array. 
//This example multiply each array value by 2:

const numbers2 = numbers.map(function afunction(value) {
  return value * 2;
})
console.log(numbers2);//[ 90, 8, 18, 32, 50 ]

//-----------------------------------JS ARRAY filter()--------------------------------------------
//The filter() method creates a new array with array elements that passes a test.
//This example creates a new array  from elements with a value larger than 18:

const over18 = numbers.filter( function(value){
  return value > 18;
})
console.log(over18);//[ 45, 25 ]
//------------------------------------JS ARRAY REDUCE--------------------------------------------
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//The reduce() method works from left-to-right in array. See also reduceRight()
//The reduce() method does not reduce the original array.
//This example finds the sum of all numbers in an array.

let sum = numbers.reduce(function(total, value) {
  return total + value;
})
console.log(sum);//99

//-----------------------------------reduceRight()---------------------------------------------------
//The reduceRight() method runs a function on each array element to produce(reduce to) a single value.
//The reduceRight() works from right-to-left in the array.
//The reduceRight() method does not reduce the original array.

let sum1 = numbers.reduceRight(function(total, value) {
  return total + value;
})
console.log(sum);//99

//------------------------------------every()---------------------------------------------------------
//The every() method check if all array values pass  test.
//This example check if al array values are largest than 18:

let allOver18 = numbers.every(function(value) {
  return value > 18;
})
console.log(allOver18);//False

//-----------------------------------------some()-----------------------------------------------------
//The some() method check if some array values pass a test 

//This example check if some array values are larger than 18
let someOver18 = numbers.some(function(value) { return value > 18});
console.log(someOver18); //True

//--------------------------------------indexOf()------------------------------------------------------
//The indexOf() method searches an array for an element value and returns its position.

let position = numbers.indexOf(45) + 1;//1
console.log(position);//1

//---------------------------------------JS find()-----------------------------------------------------
//The find() method returns the value of the first array elements that passes a test function.
//This example finds the first element that is larger than 18:

numbers.find(function(value) {
  return value > 18;
})//45

//---------------------------------------findIndex()---------------------------------------------------
//The findIndex() method returns the index of the first array element that passes a test function.

numbers.findIndex(function(value) {
  return value > 18;
})//0
//---------------------------------------from()--------------------------------------------------------
//Returns an Array object from any object with length property or any iterable object.
Array.from('ABCDEFG');//[ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]

//------------------------------------------keys()-----------------------------------------------------
//returns an Array iterator object with the keys of an array.
const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
const keys = letters.keys();
console.log(keys);

//-----------------------------------------entries()---------------------------------------------------
//Create an Array Iterator, and the iterate over the key/value pairs:
const f = letters.entries();
for (let x of f) {
  f += x;
};