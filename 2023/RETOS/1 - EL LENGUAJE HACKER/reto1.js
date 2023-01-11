const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const leet = ["4", "l3", "[", "|)", "3", "|=", "6", "#", "1", ",_|", "|<", "|_", "[V]", "/V", "0", "?", "9", "|2", "5", "7", "(_)", "\/", "\\/", "><", "j", "2", "l", "R", "E", "A", "S", "G", "T", "B", "q", "o"];

const fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat. 1985"

let arrayLowerText = [];
let arrayLeet = [];

const textToArray = (text) => {
    const lowerLetter = text.toLowerCase();
    for (const letter of lowerLetter){
        arrayLowerText = [...arrayLowerText, letter]
    }
    return arrayLowerText
};

const textToLeet = (text) => {
    for ( let i = 0; i < text.length; i++) {   
        if (alphabet.includes(text[i])){
            const indexLetter = alphabet.indexOf(text[i]);
            const letterLeet = leet[indexLetter];
            arrayLeet = [...arrayLeet, letterLeet];
        } else {
            arrayLeet = [...arrayLeet, text[i]];
        }
    }
    arrayLeet = arrayLeet.join("");
    console.log("El texto en formato 1337 (leet) es:");
    console.log(arrayLeet);
    return arrayLeet;
}

textToLeet(textToArray(fullText));

