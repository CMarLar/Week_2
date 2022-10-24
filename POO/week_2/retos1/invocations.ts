//Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es par o impar la suma de los caracteres de cada uno de los siguientes arrays:

let arr1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let arr3: string[] =  ["Venezuela", "Veneno", "Voltaje"];

import { add } from "./buclesFor";
import { isEven } from "./condicionales";


isEven(add(arr1))
isEven(add(arr2))
isEven(add(arr3))

