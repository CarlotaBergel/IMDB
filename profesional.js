var Professional = /** @class */ (function () {
    function Professional(nam, age, wel, hei, retired, nati, oscar, prof) {
        this.name = nam;
        this.age = age;
        this.welght = wel;
        this.height = hei;
        this.isRetired = retired;
        this.nationality = nati;
        this.oscarsNumber = oscar;
        this.profession = prof;
    }
    Professional.prototype.toString = function () {
        return "name: " + this.name + ", age: " + this.age + ", welght: " + this.welght + ", height: " + this.height + ", retirado: " + this.isRetired + ", nationality: " + this.nationality + ", oscar Number: " + this.oscarsNumber + ", profesion: " + this.profession;
    };
    return Professional;
}());
var pelicula1 = new Professional("Nombre", 23, 58, 89, false, "española", 0, "actor");
console.log(pelicula1.toString());
