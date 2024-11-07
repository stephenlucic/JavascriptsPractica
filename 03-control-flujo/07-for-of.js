//while
//do while
//for

/**
 * Acá utilizamos el for-of, que nos permite
 * iterar una lista de forma más fácil
 */

let animales = ['Chanchito feliz','Dragón','Perrito'];

for (let animal of animales) {
    console.log(animal)
}

/**
 * se generá la misma acción anterior
 * pero con un ciclo while
 * para iterar todo los elementos de la lista o array
 */
let i = 0;
while (i < animales.length){
    console.log(animales[i]);
    i++;
}