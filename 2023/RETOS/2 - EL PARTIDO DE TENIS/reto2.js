let P1 = "P1"; let P2 = "P2";
const matchPoints = [P1, P1, P2, P2, P1, P2, P1, P2, P1, P2, P2, P1, P1, P1];

const punctuation = ["Love", "15", "30", "40", "Won"];
const punctuationDeuce = ["Love", "15", "30", "40", "Advantage", "Won"];

let player1 = 0;
let player2 = 0;

let result = (array, player1, player2) => {
  console.log("MATCH SCORE : Player 1 : " + array[player1] + " // " + array[player2] + " : Player 2");
};

const game = (match) => {
  for (let i = 0; i < matchPoints.length; i++) {
    if (matchPoints[i] === P1) player1++;
    if (matchPoints[i] === P2) player2++;

    if (player1 === 4) {
      if (player1 - player2 > 0) {
        console.log("MATCH SCORE : PLAYER 1 HAS WON !!!!");
        return;
      }
    }
    if (player2 === 4) {
      if (player2 - player1 > 0) {
        console.log("MATCH SCORE : PLAYER 2 HAS WON !!!!");
        return;
      }
    }
    if (player1 === 3 && player2 === 3) {
      console.log("MATCH SCORE :   DEUCE");
      return deuce(i);
    }
    result(punctuation, player1, player2);
  }
};

const deuce = (index) => {
  for (let i = index + 1; i < matchPoints.length + 1; i++) {
    if (matchPoints[i] === P1 && player1 === 3 && player2 === 3) {
      player1++;
      result(punctuationDeuce, player1, player2);
      return deuce(i);
    }
    if (matchPoints[i] === P2 && player2 === 3 && player1 === 3) {
      player2++;
      result(punctuationDeuce, player1, player2);
      return deuce(i);
    }

    if (matchPoints[i] === P1 && player1 === 3 && player2 === 4) {
      player2--;
      console.log("MATCH SCORE :   DEUCE");
      return deuce(i);
    }
    if (matchPoints[i] === P2 && player2 === 3 && player1 === 4) {
      player1--;
      console.log("MATCH SCORE :   DEUCE");
      return deuce(i);
    }

    if (matchPoints[i] === P1 && player1 === 4 && player2 === 3) {
      player1++;
      result(punctuationDeuce, player1, player2);
      return deuce(i);
    }
    if (matchPoints[i] === P2 && player2 === 4 && player1 === 3) {
      player2++;
      result(punctuationDeuce, player1, player2);
      return deuce(i);
    }

    if (player1 === 5)
      return console.log("MATCH SCORE :   PLAYER 1 HAS WON !!!");
    if (player2 === 5)
      return console.log("MATCH SCORE :   PLAYER 2 HAS WON !!!");
  }
};

game(matchPoints);
