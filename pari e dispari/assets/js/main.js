/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// L'utente sceglie pari o dispari prompt 
//e inserisce un numero da 1 a 5. number prompt

const theWinner = document.querySelector("h1")

const userChoise = prompt("A te la scelta... Pari o Dispari?")
const userNumber = Number(prompt("Ora, scegli un numero tra 1 e 5!"))

console.log(userChoise);
console.log(userNumber, "Numero utente!");

// generiamo un numero random (da 1 a 5) math.random per il computer usando una funzione


function computerNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const pcNumber = computerNumberGenerator(1, 5)
console.log(pcNumber, "Numero pc");

// sommiamo il numero utente + il numero computer e stabiliamo se la somma dei numeri è pari o dispari % 

const sum = userNumber + pcNumber
console.log(sum, "Somma");



// if(sum % 2 == 0){
//     pari = true
//     console.log("pari!");
// } else {
//     console.log("Dispari!");
// }


// let vincitore;

// usando una funzione, dichiariamo chi ha vinto

function winner(){
    if(sum % 2 == 0 && userChoise == "pari"){
        console.log("Pari,hai vinto!");
        theWinner.innerHTML = "Pari, hai vinto!"
    } else if(sum % 2 !== 0 && userChoise == "dispari") {
        console.log("Dispari, hai vinto!");
        theWinner.innerHTML = "Dispari, hai vinto!"
    } else{
        console.log("hai perso");
        theWinner.innerHTML = "Hai perso =("
    }
}

console.log(winner());


