/* Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi. 
Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati 

Fare un alert con 5 numeri casuali
Fare una function con dentro un prompt che si ripete per 5 volte
Fare un setTimeOut che avvii la funzione dopo 30 secondi*/

function memoria() {
    var numeriInseriti = []; //Array per i numeri che inserirà l'utente
    for(var x = 0; x < 5; x++) {
        var richiesta = parseInt(prompt("Digita uno dei numeri che hai visto prima!"));
        numeriInseriti.push(richiesta);
        console.log(numeriInseriti);
    }
}


var listaNumeri = []; //Array per i numeri casuali da memorizzare

for(var i = 0; i < 5; i++) { //Qui genero per 5 volte dei numeri casuali e li pusho nell'array listaNumeri
listaNumeri.push(Math.floor(Math.random() * 30) + 1);
}

console.log(listaNumeri);


alert("Memorizza i seguenti numeri! " + listaNumeri); //Faccio un alert che permetta di visualizzare i numeri da memorizzare

var secondi = 30 * 1000; //converto i millisecondi in secondi

setTimeout(memoria, secondi); //settimeout







