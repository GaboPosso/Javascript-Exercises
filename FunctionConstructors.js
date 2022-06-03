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
