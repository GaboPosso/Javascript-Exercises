//Ejercicio 50: Usar el conteniod de una variable en una cadena.

let numero = 6;
let cadena = 'JavaScript numero';
console.log(cadena);
cadena = 'JavaScript numero';

cadena = 'JavaScript ${numero+1}';
console.log(cadena);

console.log();

let persona = {nombre: 'Gabriel', apellido: 'Posso', id: 101};
console.log('Hola, mi nombre es ' + persona.nombre + ' ' + persona.apellido + ' y mi ID es ' + persona.id);
console.log(`Hola, mi nombre es ${persona.nombre} ${persona.apellido}  y mi ID es ${persona.id}.`);