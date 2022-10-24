//let classPerson = require("./person");
const {Person} = require("./person");

//name,gender,yearOfBirth,height,weight

let persona = new Person("Carlos","varón",1986,173,90);

//DESCOMENTAR PARA COMPROBAR, COMENTAR PARA QUE NO SE IMPORTE ESTA INFO A contacts.js via importedPerson.
// persona.printAll()
// console.log(persona.calcIMC());
// console.log(persona.currentAge(2022));
// persona.printHobbies();

module.exports = {persona};