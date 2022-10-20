import { Person } from "./person";



export class Contacts 
{
    public people: Person[];

    constructor()
    {
        this.people = [];
    }

    printCalendar(){
        console.log(this.people);
        
    }

}

