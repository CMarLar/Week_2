//FALTA POR COMPILAR 

//Realizar una función que imprima los números impares existentes hasta el número indicado como parámetro de entrada. La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num).

function evenNumbers (num: number) {
    for (let i:number = 0; i < num; i++) {
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
evenNumbers(10)


//Realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido. No se puede utilizar el método revert de la clase array. La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr).

let arr: string[] = ["hola","qué","tal","amigo"];

function myRevert(myArr:string[]) : string[] {//parece ser que la definición del tipo de salida es omitible.
    let arr2:string[] = [];
    for (let i: number = 0; i < arr.length; i++) {
    arr2.unshift(arr[arr.length-arr.length + (i)])
    }
return arr2
}
console.log(myRevert(arr));

//Realizar una función que reciba como parámetro un array de strings que contenga nombres de colores y te imprima en cada caso si el color está en el arcoíris o no. La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors).

let colors: string[] = ["rojo", "verde", "negro", "blanco"];

function isRainbow (array: string[]){
const rainbow : string[]= ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
for (let i: number = 0; i < array.length; i++) {
    for (let j = 0; j < rainbow.length; j++) {
        if(rainbow[j] == array[i]){
            console.log(`El color ${array[i]} es uno de los colores del arcoiris`);
        }
    }
}
}
isRainbow(colors)

//Realizar una función que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array. La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

let word: string[] = ["moneda", "botella", "saxo"];

export function add (myWords: string[]) :number {
let sum :number = 0;
for (let i: number = 0; i < myWords.length; i++) {
    sum += myWords[i].length
}

return sum;
}

console.log(add(word));
