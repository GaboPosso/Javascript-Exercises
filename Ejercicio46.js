//Ejercicio 46: Recorrer un arreglo por medio del ciclo for...in.
let animales = ['perro', 'gato', 'vaca', 'cerdo', 'pato'];

for (let i in animales){
    console.log(i);
}
for (let i in animales){
    console.log(i, '.' ,animales[i]);
}