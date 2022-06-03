var a ={}; //Empty object
var b = function() { }; //Empty function
var c = []; //Empty Array

a.__proto__ //It has Object{} proto that is 'base object'
a.__proto__.toString //it contains this method

//function b
b.__proto__ //function Empty()
b.__proto__.bind //function bind

//array
c.__proto__ // Empty Array
c.__proto__.push // push Function

// and the proto's proto?

a.__proto__.__proto__ // Object {}
b.__proto__.__proto__ //Object {}
c.__proto__.__proto__
