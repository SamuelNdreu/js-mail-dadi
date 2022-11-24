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
else {
    console.log("The Pc Has Won This Time!");
    userNumber.append(randomUserN);
    pcNumber.append(randomPcN);
    diceResult.append("The Pc Has Won This Time!")
}

console.log(randomUserN);
console.log(randomPcN);


//? Chiedi all’utente la sua email, 
//? controlla che sia nella lista di chi può accedere 
//? stampa un messaggio appropriato sull’esito del controllo
const emailArray = ["pigpack@mail.it", "samsuing@gmail.com", "samuel@hotmail.com", "domenico@mail.net", "lorenzo@mail.com", "giulia@gmail.it", "mercedesbenz@live.net", "v8engine@gmail.it", "prietro@gmail.com", "giulio@live.it"]
const button = document.getElementById('button-addon2')




