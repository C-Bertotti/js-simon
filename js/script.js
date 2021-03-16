// Un alert() espone 5 numeri generati casualmente.
// 1. Creo una funzione che mi generi i numeri casuali

//Definisco le funzioni
/** 
 * getRndInteger - genera un numero random
 * 
 * @param  {number} min //numero minimo 
 * @param  {number} max //numero massimo
 * @return {number} //un numero randoma tra il numero max e min
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/** 
 * inArray - verifica che un elemento sia contenuto in un array
 * 
 * @param  {var} array //nome dell'array dove vado a cercare 
 * @param  {item} elemento //elemento da cercare all'interno dell'array
 * @return {true / false} //se è contenuto true altrimenti false
*/
function inArray(array, elemento) {
    var i = 0;
    while ( i < array.length ) {
        if (array[i]== elemento ) {
            return true;
        }
        i++;
    }
    return false;
}


var numeroGenerato;
var numeriGenerati = [];


while ( numeriGenerati.length < 5 )  {
    //...genero un numero
    numeroGenerato = getRndInteger(1, 100);
    //verifico che non sia nell'array
    if ( inArray(numeriGenerati, numeroGenerato ) == false) {
        //Lo inserisco nell'array
        numeriGenerati.push(numeroGenerato);
        alert(numeroGenerato);
    }
}

console.log(numeriGenerati);


// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
