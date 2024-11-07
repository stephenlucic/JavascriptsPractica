
/**
 * Esto todavía no es un objeto
 * acá declaramos unas variables
 * dirección contiene un objeto 
 * que esta dentro de los {}
 * pero falta juntar los datos
 * para que quede agrupado en un objeto
 * ya que pertenecen al mismo usuario.
 */

let email= 'yerko@hotmail.com';
let name= 'Yerko';
let direccion= {
        calle: 'angol st',
        numero: '3331',
    };

/**
 * Esta es la programación orientada objeto
 * su acronimo es POO o en ingles OOP
 * Object oriented programming
 * En esta parte vemos que la variable user
 * contiente el objeto
 * con sus distintas variables, incluso con dirección que tiene
 * un objeto dentro
 */
let user = {
    email: 'yerko@hotmail.com',
    name: 'Yerko',
    direccion: {
        calle: 'angol st',
        numero: '3331',
    },
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
}