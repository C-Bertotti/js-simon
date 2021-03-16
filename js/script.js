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
 * yourNumber - chiede per un tot di volte all'utente di inserire un numero, lo insrisce in un array e verifica che questo non sia stato ancora inserito
 * 
 * @param  {number} volteMax //inserire il numero di volte max che voglio chiedere all'utente;
*/
function yourNumber(dato, dati, volteMax) {
   while ( dati.length < volteMax )  {
        //...chiedo un numero
        dato = parseInt(prompt('Inserisci uno dei numeri che hai visualizzato poco fa'));      ;
        //verifico che non sia nell'array
        if ( dati.includes(dato) == false) {
            //Lo inserisco nell'array
            dati.push(dato);
        } else {
            alert('Hai già inserito questo numero, riprova');
        }
    }
}

/** 
 * compareArray - mette a confronto due array di diversa lunghezza e trova gli elementi che sono uguali e li inserisce all'interno di un array.
 * 
 * @param  {var} array1 //nome dell'array dove vado a cercare 
 * @param  {var} array2 //elemento da cercare all'interno dell'array
 * @param  {var} array3 //array in cui verranno salvati i dati inseriti
*/
function compareArray(array1, array2, array3) {
    for ( var y = 0; y < array1.length; y++ ) {
        if ( (array2.includes(array1[y])) == true ) {
            if ( (array3.includes(array1[y])) == false ) {
                array3.push(array1[y]);
            }
        }
    }
    for ( var x = 0; x < array2.length; x++ ) {
        if ( (array1.includes(array2[x])) == true ) {
            if ( (array3.includes(array2[x])) == false ) {
                array3.push(array2[x]);
            }
        }
    }
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
var numeroInserito;
var numeriInseriti = [];
var quanteVolte = 5;
setTimeout(yourNumber, 5000, numeroInserito, numeriInseriti, quanteVolte);

//3. Comparo i due array e verifico quanti numeri sono uguali e quanti diversi
var numeriUguali = [];
sameItems = compareArray(numeriGenerati, numeriInseriti, numeriUguali);

console.log('I numeri che hai indovinato sono: ' + numeriUguali);
console.log('Hai indovinato ' + numeriUguali.length + ' numeri');







