// Personajes de tv
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personajes={
    nombre: "Tanjiro",
    anime:"Demon Slayer",
    edad: 16,
};
console.log(personajes);
console.log(personajes.nombre);
console.log(personajes['anime']);

personajes.edad= 13;

personajes['edad'] = 16;


let llave = 'edad';
personajes[llave] = 16;

delete personajes.anime;

console.log(personajes);

