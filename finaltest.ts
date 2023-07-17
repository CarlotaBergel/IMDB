const fs = require('fs');
var readlineSync = require('readline-sync');
import { Movie } from "./movie";
import { Profesional } from "./profesional";

let nombre = readlineSync.question("ingrese su nombre:  ");
let edad = readlineSync.questionInt("ingrese su edad:  ");
let wel= readlineSync.questionInt("ingrese su peso  ");
let hei = readlineSync.questionInt("ingrese su altura:  ");
let retirado =readlineSync.keyInYN("esta usted retirado:  ");
let nacionalidad = readlineSync.question("cual es su nacionalidad:  ");
let oscar = readlineSync.questionInt("tiene algun Oscar:  ");
let profesion= readlineSync.question("cual es su profesion:  ");

let profesional3: Profesional = new Profesional(nombre, edad, wel, hei, retirado, nacionalidad, oscar, profesion)

console.log(profesional3);

let pelicula:Movie = new Movie("Juana de Arco",2012,"turquia","dramon");

pelicula.director = profesional3;
console.log(pelicula.director);

console.log(pelicula);