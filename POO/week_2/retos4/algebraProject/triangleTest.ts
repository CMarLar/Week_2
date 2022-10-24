import { Triangle } from "./triangle";
import { Point } from "./point";

let myPoint = new Point(64,25);
let myPoint2 = new Point(36,49);
let myPoint3 = new Point(-25,49);

let myTriangle = new Triangle(myPoint,myPoint2,myPoint3);

console.log(myTriangle.calculateLengthSides());
