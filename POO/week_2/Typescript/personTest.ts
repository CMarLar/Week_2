import { Person } from "./person";

let persona1: Person = new Person("Carlos",36,"Calle del Santo Ángel, 48");

persona1.printName();
console.log(persona1.yearOfBirth(2022));
console.log(persona1.getAddress());
persona1.setAddress("Calle Mayor, 12");
console.log(persona1.getAddress());

