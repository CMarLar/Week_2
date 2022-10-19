let importedPerson = require("./personTest");//persona importada de personTest para probar en array

class Contacts
{
    constructor()
    {
        this.contacts = [];//array de obj de clase Person
    }

    printPersons(){
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);         
        }
    }

}


module.exports = {Contacts};