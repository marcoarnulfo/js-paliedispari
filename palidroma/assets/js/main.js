

//Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// chiedere all'utente di inserire una parola. prompt

const userWord = prompt("inserisci una parola")

const advice = document.querySelector("h1")


// metodo con true and false oppure stampo a schermo direttamente all'interno della funzione

function paliCheck(userWords) {
    let nomeDiviso = userWord.split("");
    console.log(nomeDiviso, "splitto la parola in un array");
    nomeDiviso = nomeDiviso.reverse()
    console.log(nomeDiviso, "inverto le lettere all'interno dell'array");
    nomeDiviso = nomeDiviso.join("")
    console.log(nomeDiviso, "trasformo ogni lettera del mio array in una stringa");
    if (userWords == nomeDiviso) {
        //advice.innerHTML = "Ciao" + " " + userWord + "!" + " La tua parola è palidroma"
        return true
    } else{
        return false
        //advice.innerHTML = "Ciao" + " " + userWord + "!" + " La tua parola non è palidroma"
    }
}

const wordCheck = paliCheck(userWord)

console.log(wordCheck);

if (paliCheck(userWord)) {
    advice.innerHTML = "Ciao" + " " + userWord + "!" + " La tua parola è palidroma"
} else {
    advice.innerHTML = "Ciao" + " " + userWord + "!" + " La tua parola non è palidroma"
}

