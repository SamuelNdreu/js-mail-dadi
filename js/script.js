//* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
let randomUserN = Math.floor(Math.random() * 6);
let randomPcN = Math.floor(Math.random() * 6);
const userNumber = document.getElementById('userNumber');
const pcNumber = document.getElementById('pcNumber');
const diceResult = document.getElementById('diceResult');

//* Stabilire il vincitore, in base a chi fa il punteggio più alto
if (randomUserN > randomPcN) {
    console.log("You Won!");
    userNumber.append(randomUserN);
    pcNumber.append(randomPcN);
    diceResult.append("You Won!")
}


