// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


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

/** 
 * compareArray - mette a confronto due array di diversa lunghezza e trova gli elementi che sono uguali e li inserisce all'interno di un array.
 * 
 * @param  {var} array1 //nome dell'array dove vado a cercare 
 * @param  {var} array2 //elemento da cercare all'interno dell'array
 * @return {array} //restituisce un array con i numeri uguali tra loro

*/
function compareArray(array1, array2) {
    var arrayMatched = [];
    for ( var y = 0; y < array1.length; y++ ) {
        if ( (array2.includes(array1[y])) == true ) {
            if ( (arrayMatched.includes(array1[y])) == false ) {
                arrayMatched.push(array1[y]);
            }
        }
    }
    return arrayMatched;
}


// 1. Creo un ciclo che mi generi i numeri casuali
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

//2. Dopo i 30 secondi chiedo all'utente i 5 numeri, uno alla volta.

var quanteVolte = 5;

setTimeout(function () {
    var numeriInseriti = [];
    while ( numeriInseriti.length < quanteVolte ) {
        //...Chiedo di inserire un numero
        var numeroUtente = parseInt(prompt('Inserisci uno dei numeri che hai visualizzato poco fa'));
        //verifico che non sia nell'array
        if ( inArray(numeriInseriti, numeroUtente ) == false) {
            //Lo inserisco nell'array
            numeriInseriti.push(numeroUtente);
        }
    }

    //3. Comparo i due array e verifico quanti numeri sono uguali e quanti diversi
    var numeriUguali = compareArray(numeriGenerati, numeriInseriti);

    console.log('I numeri che hai indovinato sono: ' + numeriUguali);
    console.log('Hai indovinato ' + numeriUguali.length + ' numeri');

}, 3000);




