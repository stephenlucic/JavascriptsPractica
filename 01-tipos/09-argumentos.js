function suma(a, b) {
    console.log(arguments);//no es lo más recomendable, pero te sirve para revisar los argumentos que se le están pasando a la función
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
