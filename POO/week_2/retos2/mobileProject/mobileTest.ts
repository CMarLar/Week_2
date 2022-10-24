//Falta compilar y comprobar antes de subir y hacer merge con rama principal (no puedes por un problema en el directorio)
import {Mobile} from "./mobile";

let mobile1 = new Mobile("Apple iPhone 14","Apple","iPhone 14","Purple",1009);
let mobile2 = new Mobile("Apple iPhone 14","Apple","iPhone 14","Purple",1009);
let mobile3 = new Mobile("Samsung Galaxy S21 FE 5G","Samsung","Galaxy S21 FE 5G","Grafito",799);


// console.log(mobile1.getName);
// console.log(mobile1.getTrademark);
// console.log(mobile1.getModel);
// console.log(mobile1.getColor);
// console.log(mobile1.getPrice);
// console.log("");

mobile1.setName("Xiaomi 12T Pro");
mobile1.setTrademark("Xiaomi");
mobile1.setModel("12T Pro");
mobile1.setColor("Cosmic black");
mobile1.setPrice(849.99);
console.log("");

console.log(mobile1.getName);
console.log(mobile1.getTrademark);
console.log(mobile1.getModel);
console.log(mobile1.getColor);
console.log(mobile1.getPrice);

let myMobiles: Mobile[] = [mobile1,mobile2,mobile3];

for (let i = 0; i < myMobiles.length; i++) {
    myMobiles[i].printInfo;
}