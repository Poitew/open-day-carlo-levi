const trattini = document.querySelector("#trattini");
const immagine = document.getElementById("impiccato");
const lettereSbagliate = document.getElementById("lettereSbagliate");
let letteraGiusta;
let arr = [];
let arrTrattini = [];
let conta = 0;

function memorizzaValore() {
    const inputVal = document.getElementById("inputParola").value;
    arr = [...inputVal];
    arrTrattini = new Array(arr.length).fill('_'); // crea un nuovo array di trattini con la lunghezza della parola inserita
    generaTrattini();
}

function generaTrattini(){
    trattini.innerHTML = arrTrattini.join(''); // fa comparire i trattini
    document.getElementById("inputParola").value = "";
}

function indovinaLettera(){
    const letteraVal = document.getElementById("inputLettera").value;
    document.getElementById("inputLettera").value = "";
    letteraGiusta = false;
    for(let i = 0; i < arr.length; i++){
        if(letteraVal === arr[i]){
            arrTrattini[i] = letteraVal;
            letteraGiusta = true;
        }   
    }
    if(!letteraGiusta){    
        lettereSbagliate.innerHTML += letteraVal + " ";
        if(conta >= 6){
            immagine.setAttribute("src", "image/impiccato/impiccato1.png");
            arrTrattini = new Array(arr.length).fill(" ");
            lettereSbagliate.innerHTML = " ";
            generaTrattini();
        }
        else {
            switch (conta) {
                case 0:
                    immagine.setAttribute("src", "image/impiccato/impiccato2.png");
                    break;
                case 1:
                    immagine.setAttribute("src", "image/impiccato/impiccato3.png");
                    break;
                case 2:
                    immagine.setAttribute("src", "image/impiccato/impiccato4.png");
                    break;
                case 3:
                    immagine.setAttribute("src", "image/impiccato/impiccato5.png");
                    break;
                case 4:
                    immagine.setAttribute("src", "image/impiccato/impiccato6.png");
                    break;
                case 5:
                    immagine.setAttribute("src", "image/impiccato/impiccato7.png");
                    break;
            }
        }
        conta++;
    }
    generaTrattini();
}