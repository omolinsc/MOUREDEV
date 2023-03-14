/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

var prompt = require('prompt-sync')();

const choice = ["tijeras", "papel", "piedra", "lagarto", "spock"];

function playGame() {
    let player1 = prompt("Jugador 1 : Escoje => Piedra || Papel || Tijeras || Lagarto || Spock :  ").toLowerCase();
        if (!choice.includes(player1)) return console.log("Se ha escrito mal la elección");
    let player2 = prompt("Jugador 2 : Escoje => Piedra || Papel || Tijeras || Lagarto || Spock :  ").toLowerCase();
        if (!choice.includes(player2)) return console.log("Se ha escrito mal la elección");
    if (player1 === player2) return console.log("¡¡ EMPATE !! " + player1 + " === " + player2);

    switch (player1) {
        case "tijeras":
            if (player2 === "papel") console.log("¡¡ Player 1 WIN !! " + player1 + " corta a " + player2);
            if (player2 === "lagarto") console.log("¡¡ Player 1 WIN !! " + player1 + " decapita a " + player2);

            if (player2 === "piedra") console.log("¡¡ Player 2 WIN !! " + player1 + " destrozadas por " + player2);
            if (player2 === "spock") console.log("¡¡ Player 2 WIN !! " + player1 + " rotas por " + player2);
            break;
        case "papel":        
            if (player2 === "piedra") console.log("¡¡ Player 1 WIN !! " + player1 + " envuelve a " + player2);
            if (player2 === "spock") console.log("¡¡ Player 1 WIN !! " + player1 + " desautoriza a " + player2);

            if (player2 === "lagarto") console.log("¡¡ Player 2 WIN !! " + player1 + " devorado por " + player2);
            if (player2 === "tijeras") console.log("¡¡ Player 2 WIN !! " + player1 + " cortado por " + player2);
            break;
        case "piedra":        
            if (player2 === "lagarto") console.log("¡¡ Player 1 WIN !! " + player1 + " aplasta a " + player2);
            if (player2 === "tijeras") console.log("¡¡ Player 1 WIN !! " + player1 + " destroza a " + player2);

            if (player2 === "papel") console.log("¡¡ Player 2 WIN !! " + player1 + " envuelta por " + player2);
            if (player2 === "spock") console.log("¡¡ Player 2 WIN !! " + player1 + " vaporizada por " + player2);
            break;
        case "lagarto":        
            if (player2 === "spock") console.log("¡¡ Player 1 WIN !! " + player1 + " corta a " + player2);
            if (player2 === "papel") console.log("¡¡ Player 1 WIN !! " + player1 + " decapita a " + player2);

            if (player2 === "piedra") console.log("¡¡ Player 2 WIN !! " + player1 + " aplastado por " + player2);
            if (player2 === "tijeras") console.log("¡¡ Player 2 WIN !! " + player1 + " decapitado por " + player2);
            break;
        case "spock":        
            if (player2 === "tijeras") console.log("¡¡ Player 1 WIN !! " + player1 + " rompe a " + player2);
            if (player2 === "piedra") console.log("¡¡ Player 1 WIN !! " + player1 + " vaporiza a " + player2);

            if (player2 === "lagarto") console.log("¡¡ Player 2 WIN !! " + player1 + " envenenado por " + player2);
            if (player2 === "papel") console.log("¡¡ Player 2 WIN !! " + player1 + " desautorizado por " + player2);
            break;
        default:
            console.log("¡¡ EMPATE !! " + player1 + " === " + player2);
            break;
    }
}

playGame();