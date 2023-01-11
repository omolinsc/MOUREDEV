let P1 = "P1";
let P2 = "P2";
const matchPoints = [P1, P1, P2, P2, P1, P1];

const punctuation = ["Love", "15", "30", "40", "Advantage", "Won"];


const game = (match) => {
    let player1 = 0;
    let player2 = 0;
    for (const points of match){

        console.log("player1:",player1 , " - player2:",player2)
        
        if (points == P1 && player1 === 3){
            if (player2 == 4) player2--;
            if (player2 == 3) player1++; //adv - 40
        }
        
        if (points == P2 && player2 === 3){
            if (player1 == 4) player1--;
            if (player1 == 3) player2++;
        } 

        if (points == P1 && player1 === 4){
            if (player2 == 4) player2--;
            if (player2 == 3) player1++;
        }
        
        if (points == P2 && player2 === 5){
            return console.log("PLAYER 2 WON !!!")
        } 

        if (points == P1 && player1 === 5){
            return console.log("PLAYER 2 WON !!!")
        } 
        
        if (points == P1 && player1 < 3) player1++;
        if (points == P2 && player2 < 3) player2++;
        if (player1 && player2 === 3) console.log("DEUCE")
        
        console.log("RESULTADO: Player 1 : " + punctuation[player1] + " // " + punctuation[player2] + " : Player 2");
    }
}

game(matchPoints);