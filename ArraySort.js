//-------------------------------JAVASCRIPT SORTING ARRAYS----------------------------------------------
//SORTING AN ARRAY
//The sort() method sorts an array alphabetically:

const fruits2 = [ 'apple', 'banana', 'strawberry', 'blueberry', 'orange', 'lemon', 'kiwi' ];
fruits2.sort();//[ 'apple', 'banana', 'blueberry', 'kiwi', 'lemon', 'orange', 'strawberry' ]

//REVERSING AN ARRAY
fruits2.reverse();//[ 'strawberry', 'orange', 'lemon', 'kiwi', 'blueberry', 'banana', 'apple' ]

//-------------------------------JAVASCRIPT SORTING ARRAYS----------------------------------------------
//SORTING AN ARRAY
//The sort() method sorts an array alphabetically:

const fruits3 = [ 'apple', 'banana', 'strawberry', 'blueberry', 'orange', 'lemon', 'kiwi' ];
fruits2.sort();//[ 'apple', 'banana', 'blueberry', 'kiwi', 'lemon', 'orange', 'strawberry' ]

//-----------------------------------REVERSING AN ARRA-Y------------------------------------------------
fruits3.reverse();//[ 'strawberry', 'orange', 'lemon', 'kiwi', 'blueberry', 'banana', 'apple' ]

//---------------------------------------NUMERIC SORT---------------------------------------------------

//By default the sort() function sorts values as Strings. This works well for strings ("Apple" comes befores bananas)
//However,  if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigget than "1"
//Because of this, the sort() method will produce incorrect result when sorting numbers.
//You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});//[ 1, 5, 10, 25, 40, 100 ]
//Use the same trick to sort an array descending
points.sort(function(a, b){return b - a});//[ 100, 40, 25, 10, 5, 1 ]

//Math.max() Math.min()
//You can use Math.max.apply to find the highest number in an array
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
myArrayMax(points);//100
myArrayMin(points);//1

//---------------------------------SORTING OBJECT ARRAYS-----------------------------------------------
const cars4 = [{type:"Volvo",year:2016},
               {type:"Saab", year: 2001},
               {type:"BMW", year: 2010}];

cars4.sort(function (a, b) {return a.year - b.year})//[  { type: 'Saab', year: 2001 },  { type: 'BMW', year: 2010 },  { type: 'Volvo', year: 2016 }]

//---------------------------SORTING AN ARRAY IN RANDOM ORDER------------------------------------------

const points3 = [40, 100, 1, 5, 25, 10];
points3
const random = points3.sort(function(a, b){return 0.5 -Math.random()});//[ 25, 40, 100, 5, 10, 1 ]
points3
const upwards = points3.sort(function(a, b) {return a - b;});
points3

//--------------------------------------FUNCTION EXPRESSIONS------------------------------------------
//Allow us to create an anonymous function which doesn't hav any function name wich is the main difference between Function expressions and Function Declaration. A function expression can be used as an IIFE (immediately Invoked Function Expressions) whixh runs as soon as it is defined. A function expression has to be stored in a variable and can be accesed using the variableName. With ES6 feature introducin Arrow Fucntion , it becomes easier to declare function expressions.

//Syntax for function declaratio:
// function functionName(x, y) {statements... return (z)};

//Syntax for function Expressions:
// let variableName = function(x, y) {statements ... return(z)};

//Syntax for Arrow Functions:
//let variableName = (x, y) => {statement ... return(z)};
//Function declaration:
function callAdd(x, y) {
  let z = x + y;
  return z;
}
console.log("Addition : " + callAdd(7, 4));
//Code for Function Expression(Anonymous):

let callSub = function(x, y) {
  return x - y;
}
console.log("Substraction: " + callSub(7, 4));

//Code for arrow Function:

let callDiv = (x, y) => {
  return x / y;
}
console.log("Division: " + callDiv(12, 2));

//------------------------------------THE FISHER YATES METHOD------------------------------------------
for ( let i = points3.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points3[i];
  points3[i] = points3[j];
  points3[j] = k
}
