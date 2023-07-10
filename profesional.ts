class Profesional{
    public name: string;
    public age: number;
    public welght: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor (nam:string, age:number, wel: number, hei: number, retired: boolean, nati: string, oscar: number, prof: string){
        this.name = nam;
        this.age = age;
        this.welght = wel;
        this.height = hei;
        this.isRetired = retired;
        this.nationality = nati;
        this.oscarsNumber = oscar;
        this.profession = prof;
    }

    toString(): string{
        return "name: "+ this.name+ ", age: "+ this.age+ ", welght: "+ this. welght + ", height: "+ this.height + ", retirado: "+ this.isRetired + ", nationality: "+ this.nationality + ", oscar Number: "+ this.oscarsNumber + ", profesion: "+ this.profession;
    }
}

