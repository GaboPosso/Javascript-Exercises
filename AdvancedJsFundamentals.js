//##Single Threaded and Synchronic

/*In computer science a Thread is the smallest instruction sequences that can be managed by a 
resource planner of Operative System.

JavaScript is Synchronic and Single Threaded, this means that it can only do one command or 
instruction each time and it make it in order, it start the next instruction when it ends the
last one.

##SYNTAX PARSER

A program that reads your code and determines what this program makes, and if its syntax is valid.
If everything is fine, it generates legible code by the PC and after this, the code is executed as 
instructions. The interesting thing about this, is that the interpreter may add certain behaviors

##Lexical Environment

The lexical environment is related to Where are declares certain statements or expressions in a 
code, i.e. the behavior of JavScript may change according to where the code was written.  */

function hi() {
    var foo = 'Hi!'; //Statement inside the function
}
var bar = 'Bye'; //Declared outside the function

/*##Execution Context

It contains information about what code is running at all time. Beside keeping the code that must run,
it also keeps more information about from where the code was called, from where lexical environment the
code is.

##Global Environment

Every time that something is executed in JavaScript, it runs inside an Execution Context. As all the code
run inside a context, if we don't specify that context, then the code will be running inside the global 
context, that is the base context that is created automatically in the interpreter.

*BASICALLY, WE CAN TELL THAT ANY CODE BLOCK NOT DECLARED INSIDE A FUNCTION, IS DECLARED IN THE GLOBAL 
ENVIRONMENT 

Besides executing the code that its passed, also creates a global object and in addition creates a 
variable called **this**.*/

//global context
var sayHello = 'Hello';

function person() {  //execution context
    var first = 'David',
        last = 'Shariff';
    
        function firstName() { //execution context
            return first; // 'David'
        }
        
        function lastName() {  //execution context
            return last; //'Shariff'
        }

        console.log(sayHello + firstName() +' '+ lastName());
}
person()

/* ##Hoisting

Let's see how the interpreter creates the global execution context. When the interpreter reads a code 
block makes a process called **Hoisting**. Basically read all the code searching for variable and
function statements, and reserves a memory slot for it-
*/

/* ##Execution Stack

##Functions and Objects

there is something very important in Js is that functions are "First Class"  type, this means that functions
can be treated as any typo of value. It refers to, we can pass a function as an argument, we can assign a 
function as a variable, we can save it inside an array , etc. 

Functions in JavaScript are a special kind of objects. This object, besides have any property inside, it has two
main properties: the first one, is 'name', which is optional (anonymous functions), second one is the so called
'code' property and inside it the code wrote is saved for the function. */

function sayHi() { //declare the function 
    console.log('Hi');  //code inside the function
}

sayHi.greetings = 'Good Morning';    //Add a property to the function    
console.log(sayHi); // [Function: sayHi] { greetings: 'Good Morning' }, returns the code inside the function.
sayHi();// Hi

/* ##Expression

A expression is a code unit which evaluates a value

##Statement

Statement doesn't produce a value directly, but **do something**, generally it expressions inside. According to
he statement used, we're going to have a different behavior. Some examples of statements  are: if, while, for, etc.

In Js, in terms of functions we can have both, *function statements* and *function expressions*, let's see the 
difference between this both.*/

function greeting() { //This is a function Statement, when this is executed by the interpreter it doesn't return  
    console.log('Hello');// anything, but it does something: reserves a space in memory for the function we define. 
}

console.log(function(){// 'function Expression'm in which we're creating an object function type (anonymous) and 
    
    //Hi;
})//[Function (anonymous)]

/* ##PASSING VARIABLES BY REFERENCE OR BY VALUE

There are two ways of passing variables in an programming language, in some of them we can choose the way ourselves,
but in JS the interpreter choose the way itself. Thw two ways are, by reference or by value.

BY REFERENCE: we're passing a reference or a pointe to the object. Thus, any change we make to this reference, will be 
reflected on the original object.

Instead, when we pass something by value, we're passing the element by itself, or a copy of it*/

var  a = 1, b = 2;

a = b; //passed the value of a and not the reference when we change b 
b = 1;

console.log(a);//when we change b doesn't impact the value of a

var a;
var b = {name : 'Hello'};

a = b;
b.name = 'Bye';

console.log(a.name); //bye

//When the assign was made, the reference of b was passed, thus when we change the 'name' property of b, it is reflected 
//in a, because both variables 'point' the same object in memory.