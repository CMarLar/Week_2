const {Contacts} = require ("./contacts");
const { Person } = require("./Person");

let contactos = new Contacts();


contactos.people.push(new Person("Pepe","varón",1980,173,80));

contactos.printPersons();

