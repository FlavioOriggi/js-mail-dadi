// Generare un numero random da 1 a 6, sia per il giocatore sia 
// per il computer. Stabilire il vincitore, in base a chi fa il 
// punteggio più alto.


// function Gioca(){  
    // 1 generare 2 numeri random 
    var utente = Math.floor(Math.random()*6+1);

    var pc = Math.floor(Math.random()*6+1);

    // condizioni
    if (utente > pc){
        messaggio = 'Complimenti! Hai vinto';
    } else if (utente == pc){
        messaggio = 'Pareggio! Riprova';
    } else {
        messaggio = 'Hai perso.';
    }

    // a video
    document.getElementById('esito').innerHTML = messaggio;
// }