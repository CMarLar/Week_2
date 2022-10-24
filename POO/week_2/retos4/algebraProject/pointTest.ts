import { Point } from "./point";

let myPoint = new Point(64,25);
let myPoint2 = new Point(36,49);
let myPoint3 = new Point(-25,49);
let myPoint4 = new Point(-250,87);
// let myPoint5 = new Point(33.32,4900);
// let myPoint6 = new Point(-1,+1);
// let myPoint7 = new Point(50,50);
// let myPoint8 = new Point(49050,49050);


// //test métodos
// console.log(myPoint.toString());
// console.log(myPoint.distanceToOrigin());

// console.log(myPoint.calculateDistance(myPoint2));

// console.log(myPoint.calculateQuadrant());
// console.log(myPoint3.calculateQuadrant());


/*Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto
de dicho array que esté más cercano al punto actual.
NOTA: Utilizar para ello el método calculateDistance implementado en el reto3.
*/

console.log(myPoint.calculateNearest([myPoint2,myPoint3,myPoint4]));

