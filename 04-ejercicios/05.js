/**
 * Crear algoritmo que devuelva número
 * menor y mayor de un array.
 */

//forma 1 (ejercio de clase)
let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr){
    let menor=arr[0];
    let mayor=arr[0];
    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return[menor, mayor];

}

let numeros = getMenorMayor(array)
console.log(numeros)


//forma 2
function encontrarMayorYMenor(arr) {
    //if (arr.length === 0) return { mayor: null, menor: null }; // Caso cuando el arreglo está vacío
    
    let mayor = arr[0];
    let menor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    
    return { mayor, menor };
}

let variable = encontrarMayorYMenor(array)
console.log(variable)