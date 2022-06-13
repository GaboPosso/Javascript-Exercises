//ARRAY METHODS

//----------------------------CREATING AN ARRAY-------------------------------------------

const arrayName = ['item1', 'item2', '...', 'itemN']; //1-Array Literal
const cars = ["Saab", 
              "Volvo", 
              "BMW"];//A declaration can span multiple lines

const cars0 = []; //2- Create an Array and then provide the elements.
cars0[0] = 'Saab';
cars0[1] = 'Volvo';
cars0[2] = 'BMW';

const cars1 = new Array ("Saab", "Volvo", "BMW"); //3- Using the new Array

//-------------------------length: returns the number of array elements.-------------------
cars.length; //3
//------------------Accessing the first Array Element--------------------------------------
cars0[0];//Saab
//-------------------------Accessing the Last Array Element-------------------------------
cars0[cars0.length - 1]//'BMW'
//-----------------------Looping Array Elements------------------------------------------
let text = "<ul>";
for (let i = 0; i < cars0.length; i++) {
  text = "<li>" + cars0[i] + "</li>";
}
text += "</ul>"
//--------------------------Adding Array Element-------------------------------------------
//----------------------------push() Method-------------------------------------------------

const fruits = ['apple', 'banana', 'orange'];
fruits.push("lemon");
console.log(fruits);//[ 'apple', 'banana', 'orange', 'lemon' ]
// -------New element can also be added to an array using the length property:--------------
fruits[fruits.length] = "Coconut";
console.log(fruits); //[ 'apple', 'banana', 'orange', 'lemon', 'Coconut' ]

//------------------The difference between Arrays and Objects: ----------------------------
//In JavaScript, arrays use numbered indexes.
//objects use named indexes

//--------------------When to use Arrays. When to use objects-------------------------------
//- JS does not support associative arrays.
//- You should use -objects- when you want the element names to be -strings- (text).
//- You should use -arrays- when you want the element names to be -numbers-.

//-------------------------CONVERTING ARRAYS TO STRINGS--------------------------------------
//toString()
const fruits = [ 'apple', 'banana', 'orange', 'lemon', 'Coconut' ];
fruits.toString(); //'apple,banana,orange,lemon,Coconut'
//the *join()* method also joins all array elements into string.
// It behaves just like *toString()*,  but in addition you can specify the separator.
fruits.join(' * ')//'apple * banana * orange * lemon * Coconut'

//-----------------------------POPPING AND PUSHING--------------------------------------------
//The *pop()* method removes the last element from array, and returns the element that was popped.
fruits.pop();
console.log(fruits);// [ 'apple', 'banana', 'orange', 'lemon' ]
//push() adds a new element to an array (at the end),  and returns the new array length;
fruits.push('kiwi');//5
console.log(fruits);//[ 'apple', 'banana', 'orange', 'lemon', 'kiwi' ]

//------------------------------SHIFTING ELEMENTS----------------------------------------------
//The *shift()* method removes the first array element and 'shifts' all other elements to a lower index.
//the *shift()* method returns the value that was shifted out.
fruits.shift();//apple
console.log(fruits);//[ 'banana', 'orange', 'lemon', 'kiwi' ]
//*unshift()* method adds a new element to an array at the beginning, and 'unshift' older elements,and return the new array length.
fruits.unshift('apple');//5
console.log(fruits);//[ 'apple', 'banana', 'orange', 'lemon', 'kiwi' ]

//-------------------------------CHANGING ELEMENTS--------------------------------------------------
// delete() Array elements can be deleted using the JS operator delete, using delete leaves undefined
// holes in the array. Use pop() or shift().
fruits0 = [ 'apple', 'banana', 'orange', 'lemon', 'kiwi' ];
delete fruits0[0];
console.log(fruits0);

//-------------------------------MERGING (CONCATENATING ARRAYS)---------------------------------------
// the *concat()* method creates a new array by merging existing arrays. This method doesn't change the 
//existing arrays. It always returns a new array.
const myGirls = ['Cecile', 'Angie'];
const myBoys = ['Emil', 'Tobias'];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);//[ 'Cecile', 'Angie', 'Emil', 'Tobias' ]
//The concat() method can also take strings as arguments.
const arr1 = ['Emil', 'Tobias'];
const myNewChildren = arr1.concat('Peter');
console.log(myNewChildren);//[ 'Emil', 'Tobias', 'Peter' ]

//-------------------------------SPLICING AND SLICING ARRAYS ------------------------------------------
//The splice() method can be used to add new items to an array:
fruits.splice(2, 0, "Watermelon", "Mango");//[]
console.log(fruits);//[ 'apple', 'banana', 'Watermelon', 'Mango', 'orange', 'lemon', 'kiwi' ]
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest if the parameters ("Lemon", "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items.

fruits.splice(2, 2, 'Strawberry', 'Blueberry');//[ 'Watermelon', 'Mango' ]
console.log(fruits);//[ 'apple', 'banana', 'Strawberry', 'Blueberry', 'orange', 'lemon', 'kiwi' ]


//Using splice() to Remove Elements
const fruits1 = [ 'apple', 'banana', 'Strawberry', 'Blueberry', 'orange', 'lemon', 'kiwi' ]
fruits1.splice(0, 1); //[ 'apple' ]

//slice() method slices out a piece of an array into a new array.
//this example slices out a part of an array starting from an array element 1 ("banana");
//NOTE: the slice() method creates a new array, it does not remove any elements fro the source array;
fruits1.slice(1);//[ 'Strawberry', 'Blueberry', 'orange', 'lemon', 'kiwi' ]
fruits1.slice(2);//[ 'Blueberry', 'orange', 'lemon', 'kiwi' ]//

const citrus = fruits1.slice(3,5);
console.log(citrus); //[ 'orange', 'lemon' ]

