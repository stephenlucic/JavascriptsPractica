let user = {
    id:1,
    name:'Chanchito feliz',
    age:25,
};

//prop = propiedad
for (let prop in user) {
    //console.log(prop);
    //console.log(user['age']);
    console.log(prop,user[prop]);
}


//esto ya no se utiliza por que existe for of
let animales = ['Chanchicto feliz', 'Dragón', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}