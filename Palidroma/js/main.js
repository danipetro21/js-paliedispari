// PROBLEMA

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo.

let input = prompt("inserisci una parola");



function palindroma(input) {
    let contatore = 0;
    let j = input.length - 1;

    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === input.charAt(j)) {
            contatore++;
            j--;
        }
    }

    return contatore;
}



if (palindroma(input) == input.length) {
    alert("parola palindroma");

} else {
    alert("parola non palindroma");
}
