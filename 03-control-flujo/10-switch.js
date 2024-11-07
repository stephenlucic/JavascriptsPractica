let accion = 'guardar';

//siempre es necesario poner un break después de un case
//si no se coloca ejecutará todo lo que viene después del case.
//la librería de Redux le gusta usar case

switch (accion) {
    case 'listar':
        console.log('Acción de listar');
        break;
    case 'guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log ('Acción no reconocida');       
}

//Se podría usar esta forma, pero se decide según como quieras implementarlo
//Puedes usar una o la otra.
if (accion == 'listar') {
    console.log('Acción de listar');
}else if (accion == 'guardar') {
    console.log('Acción de guardar');
}else {
    console.log('Acción no reconocida');
}