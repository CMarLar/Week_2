import { Contacts } from "./contacts";
import { Person } from "./person";
let persona2: Person = new Person("Marta",30,"Calle del Alcalá, 108");
let persona3: Person = new Person("José Luis",43,"Calle de los Pintores,25");

let contactos = new Contacts();

contactos.printCalendar();
contactos.people.push(persona2,persona3);
contactos.printCalendar();
