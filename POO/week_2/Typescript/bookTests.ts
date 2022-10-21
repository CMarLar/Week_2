import { Book } from "./book"

//title: string, nPages: number, isbn: string, author: string, editorial: string

let libro1 = new Book("Drácula",576,"9788408167891","Bram Stoker","Planeta");
let libro2 = new Book("Frankenstein", 304, "9788467043662", "Mary Shelley", "Espasa")

console.log(libro1.getTitle());
console.log(libro1.getNPages());
console.log(libro1.getIsbn());
console.log(libro1.getAuthor());
console.log(libro1.getEditorial());
console.log((libro1.toString()));

