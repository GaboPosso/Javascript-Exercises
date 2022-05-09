//Ejercicio 47: Obtener y recorrer las llaves de un objeto-

let persona = {id: 101, nombre:"Gabriel", apellido:"Posso", correo: 'gab@email.com'};
console.log(typeof Object.keys(persona)); //object
console.log(Object.keys(persona))// [ 'id', 'nombre', 'apellido', 'correo' ]
console.log(Object.keys(persona)instanceof Array);//True
console.log();

Object.keys(persona).forEach((valor, indice, ) => {
    console.log(valor);
});