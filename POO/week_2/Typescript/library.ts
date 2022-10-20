import { Book } from "./book";

export class Library
{
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string)
    {
        this.books = books;
        this.address = address;
        this.manager = manager;

    }

    public getAddress(): string { return this.address};
    public getManager(): string { return this.manager};
    public getBooks(): Book[] {return this.books};

    public setAddress(address) {return this.address = address};
    public setManager(manager) {return this.manager = manager};

    public toString(): string {
        let allBooks: string = "";
        for (let i:number = 0; i < this.books.length; i++) {
            allBooks += "Book" + (i+1) + "\n" + this.books[i].toString() + "\n";
            
        }
        return allBooks;
    }

    public getNumberofBooks(): number {
        return this.books.length;
    }

    public findByAuthor (author:string):Book[]{
        let allBooksOfAuthor: Book[] = [];
        for (let i:number = 0; i < this.books.length; i++) {
            if(this.books[i].getAuthor() == author){
                allBooksOfAuthor.push(this.books[i])
            }
        }
        return allBooksOfAuthor;
    }

}

