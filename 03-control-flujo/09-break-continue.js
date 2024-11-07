//break y continue se pueden usar con todos los ciclos que hemos visto
//Como for, for in, for of, do while y while
let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue; //si la condicion se cumple, el continue reiniciará el loop saltandose lo que viene del código
    }
    if (i === 4) {
        break; //esto detiene la ejecución del loop al cumplir la condición que colocamos
    }
    console.log(i);//este no se imprime si la condición se cumple
}