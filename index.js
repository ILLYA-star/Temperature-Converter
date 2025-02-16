const measureFrom = document.getElementById("measureFrom");
const measureTo = document.getElementById("measureTo");
const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("button");

let measureFromValue;
let measureToValue;
let inputData;
let outputData;

button.onclick = function(){
    measureFromValue = measureFrom.value;
    measureToValue = measureTo.value;
    inputData = input.value;
    inputData = Number(inputData);

    if(isNaN(inputData)){
        window.alert("You entered incorrect data");
    }
    else if(measureFromValue === measureToValue){
        outputData = inputData;
    }
    else if(measureFromValue === "°C"){
        if(measureToValue === "°F"){
            outputData = CtoF(inputData);
        }
        else if(measureToValue === "K"){
            outputData = CtoK(inputData);
        }
    }
    else if(measureFromValue === "°F"){
        if(measureToValue === "°C"){
            outputData = FtoC(inputData);
        }
        else if(measureToValue === "K"){
            outputData = FtoK(inputData);
        }
    }
    else if(measureFromValue === "K"){
        if(measureToValue === "°C"){
            outputData = KtoC(inputData);
        }
        else if(measureToValue === "°F"){
            outputData = KtoF(inputData);
        }
    }
    output.value = outputData;
    copyOutput();
}

function FtoK(f){
    return (f - 32) * 5/9 + 273.15;
}

function FtoC(f){
    return (f - 32) * 5/9;
}

function CtoF(c){
    return (c * 9/5) + 32;
}

function CtoK(c){
    return c + 273.15;
}

function KtoF(k){
    return (k - 273.15) * 1.8 + 32;
}

function KtoC(k){
    return k - 273.15;
}

function copyOutput(){
    navigator.clipboard.writeText(outputData);
}
