var person = {
    name: 'default',
    lastName: 'default',
    getName: function () {
        return this.name +' '+ this.lastName;
    }
}

var john = {
    name: 'john',
    lastName: 'Smith'
}
//Don´t do this on production practice, this is just for demonstration only
//There are another ways ti assign prototypes.

john.__proto__ = person;

//Now we can use person's methods.

console.log(john.getName());
//In this example, both objects have 'name' property. On these cases, the interpreter will return the first property it finds,
//and it won´t keep executing the Prototype Chain.
 

for (var key in john){
    console.log(key +": "+john[key] ); //shows object key and john's key
}// print all, even getName,  that is in it-s proto

for (var key in john){
    if(john.hasOwnProperty(key)){ //if john's variable has the key value then shows proto key and john's  key
        console.log(key + ": "+john[key]);
    }//print just john's object properties
}
//Extend
var ed = {
    address : 'Bogota 485 8th B',
    getFormalName : function(){
        return this.lastName +', '+this.name;
    }
}
var laura = {
    getFirstName : function() {
        return this.name;
    }
}
//_.extend(john, ed, laura);
//Extend shallowly copy all of the properties in the source objects (ed, laura) over to the 
//destination object (john), Any nested objects or arrays will be copied by reference, 
// not duplicated. It's in-order, so the last source will override properties 
// of the same name in previous arguments.