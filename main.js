//Calculator
const display = document.getElementById("display")

function appendToDisplay(input){
    //funkcija rodyti ka vartotojas ivede
    display.value += input;
}

function clearDisplay(){
    //isvalo skaciuotuvo lauka
    display.value = "";
}

function calculate(){
    //leidimas skaiciuoti ivilktas i apsauga nuo nelogisku klaidu
    try{
        display.value = eval(display.value);     
    }catch(error){
        display.value = "Error";
    }
}