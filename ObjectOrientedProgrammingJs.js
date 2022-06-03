var person = {
    name: 'default',
    lastName: 'default',
    getName: function () {
        return this.name +' '+ this.lastName;
    }
}

var jhon = {
    name: 'jhon',
    lastName: 'Smith'
}
//Don´t do this on production practice, this is just for demonstration only
//There are another ways ti assign prototypes.

jhon.__proto__ = person;

//Now we can use person's methods.

console.log(jhon.getName());
//In this example, both objets have 'name' property. On these cases, the interpreter will return the first property it finds,
//and it won´t keep executing the Prototype Chain.
 

for (var key in jhon){
    console.log(key +": "+jhon[key] ); //shows object key and jhon's key
}// print all, even getName,  that is in it-s proto

for (var key in jhon){
    if(jhon.hasOwnProperty(key)){ //if jhon's variable has the key value then shows proto key and jhon's  key


        console.log(key + ": "+jhon[key]);
    }//print just jhon's object properties
}