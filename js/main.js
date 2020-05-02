/* Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi. 
Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati 

Fare un alert con 5 numeri casuali
Fare una function con dentro un prompt che si ripete per 5 volte
Fare un setTimeOut che avvii la funzione dopo 30 secondi*/

function memoria() {
    var numeriInseriti = []; //Array per i numeri che inserirà l'utente
    var counter = 0;
    for(var x = 0; x < 5; x++) {
        do{
            var richiesta = parseInt(prompt("Digita uno dei numeri che hai visto prima!"));
            var richiestaTrovata = ricerca(richiesta, numeriInseriti)
        } while(isNaN(richiesta) || richiestaTrovata == true);
        numeriInseriti.push(richiesta);
        console.log(numeriInseriti);
        var trovato = ricerca(richiesta, listaNumeri);
        console.log(trovato);
        if(trovato == true) {
            console.log("trovato");
            counter += 1;
            console.log(counter);
        }
    }
    alert("Hai indovinato " + counter + " numeri su 5!");
}

function ricerca(stringa1, array2) {
    var trovato = false;
    for(var y = 0; y < array2.length; y++) {
        if(stringa1 == array2[y]) {
            trovato = true;
        }
    }
    return trovato;
}




var listaNumeri = []; //Array per i numeri casuali da memorizzare
for(var i = 0; i < 5; i++) { //Qui genero per 5 volte dei numeri casuali e li pusho nell'array listaNumeri
    do {
        var numeroGenerato = Math.floor(Math.random() * 30) + 1;
        var trovato = ricerca(numeroGenerato,listaNumeri)
    } while (trovato == true);
    listaNumeri.push(numeroGenerato);
}

console.log(listaNumeri);


alert("Memorizza i seguenti numeri! " + listaNumeri); //Faccio un alert che permetta di visualizzare i numeri da memorizzare

var secondi = 3 * 1000; //converto i millisecondi in secondi

setTimeout(memoria, secondi); //settimeout







