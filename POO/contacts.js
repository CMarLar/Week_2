let importedPerson = require("./personTest");//persona importada de personTest para probar en array

class Contacts
{
    constructor()
    {
        this.people = [];//array de obj de clase Person
    }

    printPersons(){
        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);         
        }
    }

}


module.exports = {Contacts};