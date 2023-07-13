import { Imdb } from "./imdb";
import { Movie } from "./movie";

let movie1 = new Movie("La cenicienta", 1999, "inglesa", "infantil");
let movie2 = new Movie("La sirenita", 1978, "londinense", "infantil");
let movie3 = new Movie("La dama y el vagabundo", 2000, "inglesa", "infantil");
let arrMovie = [movie1, movie2, movie3];

let myImdb = new Imdb(arrMovie);

console.log(myImdb)

let imdbJSON: string = JSON.stringify(myImdb);

console.log(imdbJSON);

let fs = require ("fs");

// stringify para pasarlo a sting
fs.writeFileSync("imdbBBDD.json", JSON.stringify(imdbJSON));
let JSONretorno = fs.readFileSync("imdbBBDD.json");
let objeto = JSON.parse(JSONretorno);
console.log(objeto);

