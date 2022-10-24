//Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
function zodiac (month: number,day: number):string {
    let zodiacSignIs: string = "";
    if (month == 3){
        if (day >= 21){
            zodiacSignIs = "Aries";
        }
        else{
            zodiacSignIs = "Piscis";
        }
    }
    else if (month == 4){
        if(day >= 20){
            zodiacSignIs = "Tauro";
        }
        else{
            zodiacSignIs = "Aries";
        } 
    }
    else if (month == 5){
        if (day >= 21){
            zodiacSignIs = "Géminis";
        }
        else{
            zodiacSignIs = "Tauro";
        }
    }
    else if (month == 6){
        if (day >= 21){
            zodiacSignIs = "Cáncer";
        }
        else{
            zodiacSignIs = "Géminis";
        }
    }
    else if (month == 7){
        if (day >= 23){
            zodiacSignIs = "Leo";
        }
        else{
            zodiacSignIs = "Cáncer";
        }
    }
    else if (month == 8){
        if (day >= 23){
            zodiacSignIs = "Virgo";
        }
        else{
            zodiacSignIs = "Leo";
        }
    }
    else if (month == 9){
        if (day >= 23){
            zodiacSignIs = "Libra";
        }
        else{
            zodiacSignIs = "Virgo";
        }
    }
    else if (month == 10){
        if (day >= 23){
            zodiacSignIs = "Escorpio";
        }
        else{
            zodiacSignIs = "Libra";
        }
    }
    else if (month == 11){
        if (day >= 22){
            zodiacSignIs = "Sagitario";
        }
        else{
            zodiacSignIs = "Escorpio";
        }
    }
    else if (month == 12){
        if (day >= 22){
            zodiacSignIs = "Capricornio";
        }
        else{
            zodiacSignIs = "Sagitario";
        }
    }
    else if (month == 12){
        if (day >= 22){
            zodiacSignIs = "Capricornio";
        }
        else{
            zodiacSignIs = "Sagitario";
        }
    }
    else if (month == 1){
        if (day >= 20){
            zodiacSignIs = "Acuario";
        }
        else{
            zodiacSignIs = "Capricornio";
        }
    }
    else if (month == 2){
        if (day >= 19){
            zodiacSignIs = "Piscis";
        }
        else{
            zodiacSignIs = "Acuario";
        }
    }

    return zodiacSignIs;
}

console.log(zodiac(10,22));

//Realizar un procedimiento que dado el nombre de un país te imprima en que continente estás. (Max 5 países por continente). La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country).

let europa: string[] = ["Europa", "Espana", "Francia", "Alemania", "Portugal", "Italia"];
let asia: string[] = ["Asia", "China", "Corea del Norte", "Japón", "Tailandia", "Corea del Sur"];
let africa: string[] = ["África", "Congo", "Argelia", "Marruecos", "Zimbawe", "Sudáfrica"];
let americaNorte: string[] = ["África de Norte" , "Estados Unidos", "Canadá", "México"];
let americaSur: string[] = ["África de Sur" , "Brasil", "Argentina", "Colombia", "Paragüay", "Venezuela"];
let oceania: string[] = ["Oceanía" , "Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Samoa"];

let world = [europa,asia,africa,americaNorte,americaSur,oceania];

function continent(country: string){
for (let i = 0; i < world.length; i++) {
    for (let j = 0; j < world[i].length; j++) {
        if(country == world[i][j]){
            console.log(world[i][0]);
            
        }
    }  
}
}

continent("Francia");

/*Realizar una función que te imprima por consola el siguiente mensaje:
- “El numero es par”, si el numero introducido como parámetro de entrada es par
- “El numero es impar”, si el numero introducido como parámetro de entrada es impar
La cabecera de la función tendrá el siguiente aspecto: function isEven(number)*/

export function isEven (n: number){
if(n % 2 == 0) {console.log("El número es par");}
else {console.log("El número es impar");
}
}

isEven(3)
