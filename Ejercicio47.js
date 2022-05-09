//Ejercicio 47: Averuiguar la diferencia entre un objeto y un arreglo.

var lenguajes = ['Javascript', 'c#', 'PHP', 'Java', 'Python'];
console.log(lenguajes[0]); //Javascript
var persona = {nombre: 'Gabriel', apellido:'Posso', codigo: 123456};
console.log(persona.nombre); //Gabriel

//Object.keys
console.log(Object.keys(persona));//[ 'nombre', 'apellido', 'codigo' ]