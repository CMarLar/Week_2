import { Point } from "./point";

let myPoint = new Point(64,25);
let myPoint2 = new Point(36,49);
let myPoint3 = new Point(-25,49);
// let myPoint4 = new Point(-250,87);
// let myPoint5 = new Point(33.32,4900);
// let myPoint6 = new Point(-1,+1);
// let myPoint7 = new Point(50,50);
// let myPoint8 = new Point(49050,49050);



console.log(myPoint.toString());
console.log(myPoint.distanceToOrigin());

console.log(myPoint.calculateDistance(myPoint2));

console.log(myPoint.calculateQuadrant());
console.log(myPoint3.calculateQuadrant());


// console.log(myPoint.calculateDistance(myPoint));
// console.log(myPoint.calculateDistance(myPoint2));
// console.log(myPoint.calculateDistance(myPoint3));
// console.log(myPoint.calculateDistance(myPoint4));
// console.log(myPoint.calculateDistance(myPoint5));
// console.log(myPoint.calculateDistance(myPoint6));
// console.log(myPoint.calculateDistance(myPoint7));
// console.log(myPoint.calculateDistance(myPoint8));


