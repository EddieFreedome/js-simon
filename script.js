// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//alert
//cinque numeri
//timer 30 secondi
//cinque prompt che raccolgono i numeri in serie
//quanti numeri individuati, quali numeri sono stati individuati

window.addEventListener("DOMContentLoaded", function() {
    console.log('DOM fully loaded and parsed')
    
   
    const arrNumeroRandom = generaAlert();
    const arrNumeroUtente = getUserNum();
    compareNumbers(arrNumeroRandom, arrNumeroUtente);
    //compareNumbers(generaAlert(), getUserNum())


})

function generaAlert(){
    //genera 5 numeri casuali e inserisci in un array
    let arrRandomNum = [];
    
    for (let i = 0; i < 5; i++) {
        console.log('ok');
        let numRandom = generateRandomNum();
        arrRandomNum.push(numRandom);
        console.log(numRandom)
    }
    console.log(arrRandomNum);
    alert(`Ricorda! i tuoi numeri sono: ${arrRandomNum}`)
    return arrRandomNum
}

function getUserNum (){
    let arrUserNum = []
    let arrParole = ["primo", "secondo", "terzo", "quarto", "quinto"]
    for (let i = 0; i < arrParole.length; i++) {
        let userNum = parseInt(prompt(`Inserisci il ${arrParole[i]} numero`));
        arrUserNum.push(userNum);
    }
    console.log(arrUserNum);
    return arrUserNum
}

function compareNumbers (arrayRandom, arrayUser){
    //avendo i due array di numeri, arrRandomNum e arrUserNum, bisogna compararli
    let arrNumCorretti = []
    for (let i = 0; i < arrayRandom.length; i++) {
        let numberUser = arrayUser[i];
        let numberRandom = arrayRandom[i];
        
        if (numberUser === numberRandom){
            arrNumCorretti.push(numberUser)
        }
    }
    //voglio ottenere quanti numeri sono corretti e quali
    alert(`Hai ricordato correttamente ${arrNumCorretti.length} numeri: ${arrNumCorretti}`)
}

function generateRandomNum (minNumber = 1, maxNumber = 100){
    const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return randomNum;
  }