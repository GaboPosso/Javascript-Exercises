const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = '';
for(let i = 0; i < cars.length; i++){
    text += cars[i] + "<br>"
}

document.getElementById("demo").innerHTML = text;

/*------------------------Different Kinds of Loops-----------------------------
JavaScript supports different kinds of loops:

* for - loops through a block of code a number of times
* for/in - loops through the properties of an object
* for/of - loops through the values of an iterable object
* while - loops through a block of code while a specified condition is true
* do/while - also loops through a block of code while a specified condition is true
 */

function forinloop(person){
    let text = '';
    for (let x in person){
        text += person[x]
    }
    return text;
}

document.getElementById("person").innerHTML = text;