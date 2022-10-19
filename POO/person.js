class Person
{
    constructor(name,gender,yearOfBirth,height,weight)
    {
        this.name = name;
        this.gender = gender;
        this.yearOfBirth = yearOfBirth;
        this.height = height;
        this.weight = weight;
        this.hobbies = ["pintar miniaturas", "aprender Historia", "escuchar Thrash Metal"];
    }

    calcIMC(){
        let imc = this.weight / ((this.height) * (this.height)) * 10000;
        return "IMC - " + imc.toFixed(2);
    }

    currentAge(currentYear){
        return "Edad -" + currentYear - this.yearOfBirth;
    }

    printAll(){
        console.log("Nombre - " + this.name);
        console.log("Sexo - " + this.gender);
        console.log("Año de nacimiento - " + this.yearOfBirth);
        console.log("Altura - " + this.height);
        console.log("Peso - " + this.weight);
    }

    printHobbies(){
        console.log("Hobbies - " + this.hobbies);
    }


};

module.exports = {Person};