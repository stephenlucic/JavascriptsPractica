// cuales son los números pares

let i = 2;

/**
 * While válida primero la condición
 * en este caso como la variable ya es 2
 * no mostrará resultados en la página
 * a diferencia de do-while
 */

while (i < 2) {
    if (i % 2 == 0) {
        console.log('Numero Par ', i);
    }
    i++;
}

/**
 * Do-While ejecuta la porción de cógigo
 * luego válida el while
 * en este caso mostrará un resultado
 * en la página con 2
 */


do {
    if (i % 2 == 0) {
        console.log('Numero Par ', i);
    }
    i++;
} while (i < 2);