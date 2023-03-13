/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

const prompt = require("prompt-sync")();

let fibonacci = [0,1];

for (let i = 0; i < 100; i++){
    const length = fibonacci.length;
    const suma = fibonacci[length -1] + fibonacci[length -2];
    fibonacci = [...fibonacci, suma];
}

function primo(num) {
    for (let i = 2; i < num; i++){
        if (num%i === 0){
            return false;
        }
    }
    return true;
}

// console.log(fibonacci);

const number = prompt("¿Qué número quieres evaluar? ");
let isPar = false;
let isFibonacci = false;
const isPrimo = primo(number);

if (number%2 === 0) isPar = true;
if (fibonacci.indexOf(number)) isFibonacci = true;

console.log('El número ' + number + (isPrimo ? "es " : " NO es ") + 'primo, ' + (isFibonacci ? "es " : "NO es ") + 'fibonacci y ' + (isPar ? "es " : "NO es ") + 'par.');