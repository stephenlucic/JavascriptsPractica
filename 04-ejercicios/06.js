/**
 * Crear algoritmo que devuelva cantidad
 * de números positivos de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

//forma 1(hecho por mi)
function cuantosPositivos(arr){
    let cont = 0;
    for (numeros of arr){
        if (numeros >= 0){
            cont += 1;
        }     
    }
    return cont;
}

let resultado = cuantosPositivos(array);
console.log(resultado);

//forma 2 (ejercicio de clase)
function cuantosPositivos2(arr){
    let cantidad = 0;
    for (elemento of arr){
        if (elemento > 0){
            cantidad++;
        }     
    }
    return cantidad;
}

let resultado2 = cuantosPositivos2(array);
console.log(resultado2);