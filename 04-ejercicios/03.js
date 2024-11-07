/**
 * Indice validar que no se menor a cero y que el elemento exista
 * en el array
 */

function getbyIdx(arr, idx){
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe';
    }

    return arr[idx];
}

let resultado = getbyIdx([23,44,100], 2);
console.log(resultado);