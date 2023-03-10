//! ASKING con el método de READLINE de NODE.js
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const passsGenerator = async () => {

//     let length = 0;

//     await rl.question("Elige una longitud de contraseña entre 8 y 16 carácteres: ", function (answer) {
//         if (answer >= 8 && answer <= 16){
//             length = answer;
//             console.log(`Así que quieres una contraseña de ${length} carácteres`);
//         } else {
//             console.log(`No seleccionaste una longitud válida`);
//         }

//         rl.close();
//     })
// };


//* ASKING con el metodo de PROMPT-SYNC de NODE.js
const prompt = require("prompt-sync")();

let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = lowerCaseLetters.toUpperCase();
let numbers = "1234567890";
let symbols = "ºª\!|@·#$%&/()=?¿'¡<>,.;:-_`+^*´¨{}ñç";
let password = "";

const passGenerator = async () => {

    const length = prompt("Elige una longitud de contraseña entre 8 y 16 carácteres: ");
    
    if (length >= 8 && length <= 16){
        console.log(`Así que quieres una contraseña de ${length} carácteres`);
    } else {
        console.log("No seleccionaste una longitud válida");
        return console.log("VUELVE A INICIAR EL GENERADOR DE CONTRASEÑAS");
    }

    let lowerCase = prompt("Quieres que contenga letras minúsculas? (SI o NO) ");

    if (lowerCase.toLowerCase() === "si"){
        lowerCase = true;
        console.log("Seleccionaste que SI quieres minúsculas");
    } else if (lowerCase.toLowerCase() === "no") {
        lowerCase = false;
        console.log("Seleccionaste que NO quieres minúsculas");
    } else {
        console.log("No seleccionaste una opción válida");
        return console.log("VUELVE A INICIAR EL GENERADOR DE CONTRASEÑAS");
    }

    let upperCase = prompt("Quieres que contenga letras MAYÚSCULAS? (SI o NO) ");

    if (upperCase.toLowerCase() === "si"){
        upperCase = true;
        console.log("Seleccionaste que SI quieres MAYÚSCULAS");
    } else if (upperCase.toLowerCase() === "no") {
        upperCase = false;
        console.log("Seleccionaste que NO quieres MAYÚSCULAS");
    } else {
        console.log("No seleccionaste una opción válida");
        return console.log("VUELVE A INICIAR EL GENERADOR DE CONTRASEÑAS");
    }

    let numb = prompt("Quieres que contenga números? (SI o NO) ");

    if (numb.toLowerCase() === "si"){
        numb = true;
        console.log("Seleccionaste que SI quieres números");
    } else if (numb.toLowerCase() === "no") {
        numb = false;
        console.log("Seleccionaste que NO quieres números");
    } else {
        console.log("No seleccionaste una opción válida");
        return console.log("VUELVE A INICIAR EL GENERADOR DE CONTRASEÑAS");
    }

    let symb = prompt("Quieres que contenga símbolos? (SI o NO) ");

    if (symb.toLowerCase() === "si"){
        symb = true;
        console.log("Seleccionaste que SI quieres símbolos");
    } else if (symb.toLowerCase() === "no") {
        symb = false;
        console.log("Seleccionaste que NO quieres símbolos");
    } else {
        console.log("No seleccionaste una opción válida");
        return console.log("VUELVE A INICIAR EL GENERADOR DE CONTRASEÑAS");
    }
    console.log("minúsculas:",lowerCase, "mayúsculas:", upperCase, "símbolos:", symb, "números:", numb);

    password += (lowerCase ? lowerCaseLetters : "") +  
        (upperCase ? upperCaseLetters : "") +
        (numb ? numbers : "") +
        (symb ? symbols : "");

    var shuffled = password.split('').sort(function(){return 0.5-Math.random()}).sort(function(){return 0.5-Math.random()}).join('');
    password = "";
    for (let i = 0 ; i < length ; i++){
        password += shuffled[i]
    }

    console.log(password);

};

passGenerator();
