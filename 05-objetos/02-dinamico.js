/**
 * esta constante, no ten deja modificar el tipo de dato
 * pero si este es un objeto, si se puede  modificar su contentido
 * por lo tannto, no podría cambiar el tipo a number o string por ejemplo
 * pero si puedes modificar sus valores, que tiene dentro
 * del objeto
 */

const user = { id: 1}; 

user.name = 'Yerko';
user.guardar = function () {
    console.log('guardando....', user.name);
}
console.log(user);

user.guardar();

delete user.name;
delete user.guardar;
console.log('user');
console.warn('user');//este me entrega un warning en consola

//esta funcion no deja que se cambie el valor del objeto
// const user1 = Object.freeze({id:1}) 

/**
 * esta funcion deja cambiar los datos
 * de la propiedad, pero no agregarle nuevas
 */
const user1 = Object.seal({id:1})
user1.name = 'Yerko';
user1.id=2;
console.log(user1);
