"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesional = void 0;
var Profesional = /** @class */ (function () {
    function Profesional(nombre, edad, wel, hei, retirado, nacionalidad, oscar, profesion) {
        this.name = nombre;
        this.age = edad;
        this.welght = wel;
        this.height = hei;
        this.isRetired = retirado;
        this.nationality = nacionalidad;
        this.oscarsNumber = oscar;
        this.profession = profesion;
    }
    Profesional.prototype.toString = function () {
        return "Nombre: " + this.name + ", \n age: " + this.age + ", \n welght: " + this.welght + ",\n height: " + this.height + ",\n retirado: " + this.isRetired + ",\n nationality: " + this.nationality + ", \n oscar Number: " + this.oscarsNumber + ",\n profesion: " + this.profession;
    };
    return Profesional;
}());
exports.Profesional = Profesional;
