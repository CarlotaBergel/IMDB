import { Movie } from "./movie";
import { Profesional } from "./profesional";

let movie1 = new Movie("La cenicienta", 1999, "inglesa", "infantil");
let profesional1 = new Profesional("Juan Carlos", 39, 45, 8, false,"España", 1, "director");
let profesional2 = new Profesional("Macarena", 41, 42, 84, true, "España", 4, "escritor");

let actores1 = ["Sandra", " Julio", " Francisco", " Julian", " Marta"];

movie1.director = profesional1;
movie1.actors = actores1;
movie1.writer = profesional2;
movie1.plataforma = "HBO";
movie1.isMCU = false;
movie1.mainCharacterName = "Cenicienta";
movie1.producer = "Raul Fernandez";
movie1.distributor = "Pepito Diaz";

console.log(movie1.toString())