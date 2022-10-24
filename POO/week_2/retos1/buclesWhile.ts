//Realizar una función que te devuelva si existe un numero par en el array de números que introduces como parámetro de entrada. La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

function hasEven(myNums: number[]): string {
let i : number = 0;
let impares: number[] = []
while(i < myNums.length && myNums[i] % 2 !== 0)
{
    impares.push(myNums[i]);
    i++;
}
if (impares.length == myNums.length){return "Todos los números del array son impares";}
else{ return "Hay números pares en el array";}
}

console.log(hasEven([9,1,5,7,3]));
console.log(hasEven([9,9,2,3,9,9,9,3]));

//Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M. La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

const namesArray: string[] = ["Marta", "María", "Mario", "Mortadelo", "Carlota"];
const namesArray2: string[] = ["Marta", "María", "Mario", "Mortadelo"];


function startWithM(myNames: string[]) : boolean{
let i: number = 0;
let namesWM: string[] = [];
while(i < myNames.length && (myNames[i][0] == "M" || myNames[i][0] == "m")){
    namesWM.push(myNames[i])
    i++
}
if (namesWM.length == myNames.length){return true;}
else{ return false;}
}

console.log(startWithM(namesArray));
console.log(startWithM(namesArray2));