let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = lowerCaseLetters.toUpperCase();
let numbers = "1234567890";
let symbols = "ºª\!|@·#$%&/()=?¿'¡<>,.;:-_`+^*´¨{}ñç";

const passGenerator = (event) => {

    let length = document.querySelector("#chars").value;
    let lowerCase = document.querySelector("#lower").checked;
    let upperCase = document.querySelector("#upper").checked;
    let numb = document.querySelector("#numbers").checked;
    let symb = document.querySelector("#symbols").checked;
    let password = "";

    if (length < 4 || length > 40) return alert("You must select a valid password length");
    if (!lowerCase && !upperCase && !numb && !symb) return alert("You must select at least one password condition");

    console.log("minúsculas:",lowerCase, "mayúsculas:", upperCase, "símbolos:", symb, "números:", numb);

    password = (lowerCase ? lowerCaseLetters : "") +  (lowerCase ? lowerCaseLetters : "") + 
        (upperCase ? upperCaseLetters : "") + (upperCase ? upperCaseLetters : "") +
        (numb ? numbers : "") + (numb ? numbers : "") + (numb ? numbers : "") + (numb ? numbers : "") +
        (symb ? symbols : "") + (symb ? symbols : "") + (symb ? symbols : "");

    var shuffled = password.split('').sort(function(){return 0.5-Math.random()}).sort(function(){return 0.5-Math.random()}).join('');
    password = "";

    for (let i = 0 ; i < length ; i++){
        password += shuffled[i]
    }

    document.querySelector(".reveal").classList.add("shown");

    document.querySelector("#password").textContent = password;
    console.log(password);

};

const clypboardCopy = () => {
    const toCopy = document.querySelector("#password").textContent;
    navigator.clipboard.writeText(toCopy);
    alert("Your password has been added to your clypboard");
}

const value = document.querySelector("#length")
const input = document.querySelector("#chars")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
})