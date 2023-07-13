import { Movie } from "./movie";

export class Imdb{
    public peliculas: Movie[];
    
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }

//     escribirEnFicheroJSON(nombreFichero:string):void{

//         // toma el nombre de un fichero como parámetro de entrada y genera un fichero .json con toda la inform
//         //guardada en el objeto Imdb.

//     }
    
//     ObtenerInstanciaIMDB(nombreFichero:string):Imdb{
//         //Devuelve un objeto de la clase Imdb creado a partir del fichero

//         // return 
//     }


}