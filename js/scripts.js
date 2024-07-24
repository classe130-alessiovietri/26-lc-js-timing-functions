// elemento.addEventListener(
//     EVENTO DA INTERCETTARE,                                                                     -> es. 'click'
//     DEFINIZIONE DI UNA FUNZIONE CHE VERRA ESEGUITA QUANDO SI VERIFICA L'EVENTO INTERCETTATO     -> es. function() { ... }
// )

// elemento.addEventListener('click', function() {
//     // ...
// });

// elemento.addEventListener('click', miaFunz);            // NON esegue miaFunz perché sto solo facendo riferimento alla sua definizione
// elemento.addEventListener('click', miaFunz());          // Esegue miaFunz, quindi non è una definizione

// function miaFunz() {
//     // ...
// }

// setTimeout(DEFINIZIONE DI UNA FUNZIONE, MILLISECONDI DOPO I QUALI ESEGUIRE IL PRIMO ARGOMENTO);

// console.log('PRIMA DI TUTTI I SETTIMEOUT');

// for (let i = 0; i < 10000; i++) {
//     console.log(i);
// }

// setTimeout(function () {
//     console.log('E\' passato 1 millisecondo');
// }, 1);

// console.log('DOPO IL PRIMO SETTIMEOUT');

// setTimeout(miaFunz, 2000);
// // setTimeout(miaFunz(), 4000); // NON COSI'

// function miaFunz() {
//     console.log('Sono passati 2 secondi');
// }


// /* 
//     Se voglio utilizzare una funzione che ha degli argomenti/parametri...
// */
// function miaFunzConArgomenti(uno, due, tre) {
//     console.log('Sono passati 3 secondi', uno, due, tre);
// }

// /* 
//     ...devo necessariamente utilizzare una funzione che mi richiama la mia funzione con argomenti
// */
// setTimeout(function () {
//     miaFunzConArgomenti('a', 'b', 'c');
// }, 3000);

/* 
    ---------------------------------------
*/

// setInterval(DEFINIZIONE DI UNA FUNZIONE, MILLISECONDI DOPO I QUALI ESEGUIRE IL PRIMO ARGOMENTO (MA PIU VOLTE));

// let counter = 3;
// let counterTwo = 3;

// let clock = setInterval(function () {
//     console.log(counter);        // Questo console.log verrà eseguito OGNI 2000 millisecondi a partire da quando è stato caricato
    
//     if (counter == 0) {
//         console.log('Stoppa il timer 1');

//         clearInterval(clock);
//         clock = null;
//         console.log('clock POST clearInterval', clock);
//     }
//     else {
//         counter--;
//     }
// }, 1000);

// console.log('clock', clock);

// let clockTwo = setInterval(function () {
//     console.log(counterTwo);        // Questo console.log verrà eseguito OGNI 2000 millisecondi a partire da quando è stato caricato
    
//     if (counterTwo == 0) {
//         console.log('Stoppa il timer 2');

//         clearInterval(clockTwo);
//         clockTwo = null;
//         console.log('clockTwo POST clearInterval', clockTwo);
//     }
//     else {
//         counterTwo--;
//     }
// }, 1000);

// console.log('clockTwo', clockTwo);

let clock = null;

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function () {
    clock = setInterval(function () {
        let currentTime = parseInt(document.getElementById('time').innerText);
        currentTime++;
        console.log(currentTime);

        document.getElementById('time').innerHTML = currentTime;
    }, 1000);

    console.log('New clock:', clock);
});

const stopBtn = document.getElementById('stop-btn');
stopBtn.addEventListener('click', function () {
    clearInterval(clock);

    clock = null;
});

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', function () {
    document.getElementById('time').innerHTML = 0;
});