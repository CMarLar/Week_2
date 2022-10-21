import { Vector } from "./vector";

//Falta compilar typescript
let nuevoVector = new Vector(10,10);
let nuevoVector2 = new Vector(10,10);

nuevoVector.print();
console.log(nuevoVector.add(nuevoVector2));
nuevoVector.print();
console.log(nuevoVector.subs(nuevoVector2));
nuevoVector.print();
console.log(nuevoVector.mult(nuevoVector2));
nuevoVector.print();
console.log(nuevoVector.multNumber(5));


