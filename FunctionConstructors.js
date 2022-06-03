//Now tht we know prototype, the prototype chain, and and Object Base
//we may start to talk about the best ways to build objects.
//We already know some, as Objet Literals:

///var object = {
 //   property1: value1,
  //  property2: value2,
  //  method1: function(){}
///}
//but there are various ways to construct it, even more when we talk 
//about setting the proto of created object.

//Let's see an example of the keyword (this) syntax and how it works 
//examining the next code:

function Person() {
    this.firstName = 'Juan';
    this.lastName = 'Perez';
}

var juan = new Person();
console.log(juan);
//Teh function 'person' doesn't return anything 
//furthermore it's not clear to what is referenced the keyword 'this'
//But when 'new' is user, we see that an object with the properties of that function 
//had been build.

//'new' creates an empty object, therefore call upon the function which is passed as an 
//argument, but it binds the new empty object, so that in the new execution context the 
//keyword 'this' make the reference to this new object. Lastly returns that created object
//that had been modified for that executed function.

/*var a = {};
Person().call(a); 
return a;*/

function Person2(firstName2, lastName2){
    this.firstName2 = firstName2 || 'Gabriel';
    this.lastName2 = lastName2 || 'Posso';
}
Person2.prototype.getName = function(){
    return this.firstName2 + ' ' + this.lastName2;
}

var tony = new Person2('Tony', 'Marquez');
var august = new Person2('August', 'Johnson');
var emily = new Person2('Emily', 'Brown');

tony.getName()
august.getName()
emily.getName()

//Add  functions in constructor's prototype, it's a good practice. As the replicated methods on each
// takes a lot of space. Instead, if we add the functions in the proto, everything shares the same.

//Object.create

//Creates a new object, using an existing object as the prototype of the new created object.

var person3 = {
    firstName3: 'default',
    lastName3: 'default',
};

var Mathew = Object.create(person3);
console.log(Mathew)
console.log(Mathew.__proto__)

//Thus, it can access to all the base object's properties an methods 
//Now, if we wat to change some properties, the only thing we must do is to write
//new properties with the same name of the object.
Mathew.firstName3 = "Mathew";
Mathew.lastName3 = "Stevenson";

/*This is possible,thanks to the Prototype Chain, that searches that property first in the object,
and if it finds it, there is no need to search it in the prototype.
*/

//#ES& and Classes

/* In the last version of JS standard, JS has the possibilities to declare Classes,
this is the concept used by other languages to implement inheritance. In any case, in JS 
classes won't be the same as other languages, as Js has the prototypal model.
*/

//Let's watch how the classes are seen in Js

class Person4 {
    constructor (firstName, lastName){
        this.firstName = firstName,
        this.lastName =lastName
    }
    greet(){
        console.log('Hi '+ this.firstName);
    }
}

var gabo = new Person4('Gabriel','Mejia');
gabo.greet();

/* When a class is defined we use the new statement class. Inside it, first we define
its constructor, which is the method that receives all the parameters 
and will create the new objects based in the class. 

To add a prototype to the created class use 'extend' keyword, which is also inspired by 
other languages:
*/
class Employee extends Person4 { //Use Person4 as prototype for Employee
    constructor (firstName, lastName, employment, salary){//receives all parameters
        super(firstName, lastName);//Allow to use the class's constructor from which we're inheriting (Person4)
        this.employment = employment;//Define own class parameters
        this.salary = salary;
    }
}
var Anna = new Employee('Anna', 'Garcia', 'Professor', 1000); //As we see, we can define Employee and Person4
Anna.greet()

//OBJECT ORIENTED PROGRAMMING
/* A programming paradigm represents a particular approach or philosophy for designing solutions. The paradigms
  differ from each other, in the concepts and the way of abstracting the elements involved in a problem, as well
  as in the steps that integrate their solution of the problem, in other words, the computation. 
  OOP (Object Oriented Programming) is a programming paradigm. where the data is encapsulated in objects that 
  have properties and methods, and all the operations that we do are done on these objects.
*/