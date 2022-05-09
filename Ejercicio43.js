// Ejercicio 43: Usa el método forEach para recorrer un arreglo

let lenguajes = ['Javascript', 'c#', 'PHP', 'Java', 'Python'];
//Recorrido usual con una función anónima
lenguajes.forEach(function(valor, indice, lenguajes){
    console.log('El ' + valor + ' se encuentra en la posición ' + indice+ '.');
});

console.log();

//Recorrido con una función creada

function recorridoArreglo(valor, indice, lenguajes){
    console.log('El ' + valor + ' se encuentra en la posición ' + indice+ '.');    
}
lenguajes.forEach(recorridoArreglo);
console.log();
//Recorrido por un expresión lambda
lenguajes.forEach((valor, indice, lenguaje) => {
    console.log('El ' + valor + ' se encuentra en la posición ' + indice+ '.')
});
