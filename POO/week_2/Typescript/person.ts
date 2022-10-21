export class Person
{
//Atributos
public name: string;
public age: number;
private address: string;
    constructor(name: string, age: number, address: string)
    {
        this.name = name;
        this.age = age;
        this.address = address;
    }
//Gettes & setters
    public getAddress():string{
        return this.address;
    }
    public setAddress(address:string){
        this.address = address;
    }
//Métodos públicos
    public printName() {
        console.log(this.name);
        
    }

    yearOfBirth(currentYear: number): number{
        return currentYear - this.age;
    }

}
