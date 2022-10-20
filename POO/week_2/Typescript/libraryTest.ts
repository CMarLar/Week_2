import { Book } from "./book";
import { Library } from "./library"
let libro1 = new Book("Drácula",576,"9788408167891","Bram Stoker","Planeta");
let libro2 = new Book("Frankenstein", 304, "9788467043662", "Mary Shelley", "Espasa")

let biblioteca = new Library([libro1,libro2],"Calle Vergara, 24","Alberto Sánchez");
biblioteca

console.log(biblioteca.toString());

//console.log(biblioteca.getNumberofBooks());
//console.log(biblioteca.findByAuthor("Bram Stoker"));





