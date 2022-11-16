// PROBLEMA

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo.

let input = prompt("inserisci una parola");



// carico la parola nell'array (ogni lettera equivale ad una posizione nell'array)
let j = input.length - 1;



let contatore = 0;


for (let i = 0 ; i<input.length; i++){
    if (input.charAt(i) === input.charAt(j)){

        contatore++;
        j--;


}
}

console.log(contatore);
if(contatore == input.length){
    alert("parola palindroma");

} else {
    alert("parola non palindroma");
}
