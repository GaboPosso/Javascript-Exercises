//Javascript Map Methods
/* 
--METHOD-----|-----------DESCRIPTION-------------------------------------|
- new Map()  |- creates a new map 
- set()      |- Sets the value for a key in a Map
- get()      |- gets the value for a key in a Map
- delete ()  |- Removes a Map element specified byt the key
- has()      |- Returns true if a key exists in a Map
- forEach()  |- Calls a function for each key/value pair in a Map
- entries()  |- Returns an iterator with the [key, value] pairs in a Map.
-------------------------------------------------------------------------|
PROPERTY-----|DESCRIPTION------------------------------------------------|
- size       |- Returns the number of elements in Map
 */
//-----------------------HOW TO CREATE A MAP-----------------------------|
/* 
A Map can be creates using:
* Passing an Array to new Map() 
* Create  a Map using Map.set()
*/

const { keys } = require("underscore");

//Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.get("apples"))//500

//The set() Method
//You can add elements to a Map with the set() method

//Set Map values
fruits.set("Mangoes", 100)
fruits.set("strawberries", 150)

console.log(fruits)//Map(5) {
                //     'apples' => 500,
                //     'bananas' => 300,
                //     'oranges' => 200,
                //     'Mangoes' => 100,
                //     'strawberries' => 150
                //   }

//The set() method can also be used to change the existing Map values:

fruits.set('bananas', 230);
console.log(fruits) //Map(5) {
                //     'apples' => 500,
                //     'bananas' => 230,
                //     'oranges' => 200,
                //     'Mangoes' => 100,
                //     'strawberries' => 150
                //   }
//--------------------------THE get() METHOD---------------------------------|
/*  The get() method gets the value of a key in a Map: */

console.log(fruits.get("strawberries"))//150

//-------------------------THE size PROPERTY----------------------------------|
//Returns the number of elements in a Map.
console.log(fruits.size)//5

//--------------------------THE delete() METHOD ------------------------------|
//Removes a Map element
fruits.delete("apples");
console.log(fruits.size);//4

//--------------------------THE has() METHOD----------------------------------|
//Returns true if the key exists in the map
console.log(fruits.has("apples"));//false
console.log(fruits.has("bananas"));//true

//--------------------------THE forEach() METHOD------------------------------|
// Calls a function for each key/value pair in Map:

//list all entries:
let txt = '';
fruits.forEach((value, keys) =>{
    txt += keys +' = ' + value + ', ';    
});
console.log(txt); //bananas = 230, oranges = 200, Mangoes = 100, strawberries = 150,

//--------------------------THE entries() METHOD-------------------------------|
//Returns an iterator object with the [key, values] in a Map:

let text = '';
for(const fruit of fruits.entries()) {
    text += fruit;
}
console.log(text); //bananas,230oranges,200Mangoes,100strawberries,150