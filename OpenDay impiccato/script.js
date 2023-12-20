const parola = document.querySelector("#parola");
let arr = [];

function memorizzaValore() {
    const inputVal = document.getElementById("inputParola").value;
    arr = [...inputVal];
    generaTrattini();
}

function generaTrattini(){
    parola.innerHTML = " ";
    document.getElementById("inputParola").value = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ' '){
            parola.innerHTML += " ";
        }
        else {
            parola.innerHTML += "_";
        }
    }
}