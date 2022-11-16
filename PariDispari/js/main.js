// PROBLEMA

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let input = prompt("inserisci un numero");
let pariDispari = prompt("inserisci pari o dispari");



function sommaNumeri(input){
    let numerRandom = Math.floor(Math.random() * 5)+1;
    let somma = input + numerRandom;
    let risultato ;
    if (somma % 2 == 0){
        risultato = "pari";
    }else{
        risultato = "dispari"
    }

    return risultato;
}

let risultato = 0;

risultato = sommaNumeri(input);
console.log(risultato);

if (risultato == pariDispari){
    alert("hai vinto");
}else{
    alert("hai perso");
}

