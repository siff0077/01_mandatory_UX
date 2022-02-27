"use strict"

const convert = function convertTemperature(value, fromValue, toValue) {
    switch (fromUnit){
        case "fahrenheit":
            if (toValue === "celsius") { return 5*(Number(value)-32) / 9; }
            if (toValue === "kelvin") { return (Number(value)-32)/1.8+273.15; }
        case "kelvin":
            if (toValue === "celsius") { return Number(value)-273.15; }
            if (toValue === "fahrenheit") { return (9*(Number(value)-273.15)/5)+32; }
        case "celsius":
            if (toValue === "fahrenheit") { return (Number(value)*1.8)*+32; }
            if (toValue === "kelvin") { return Number(value)+273.15; }
        default:
            return null;
    }
}

function getShortUnit(valueName) {
    return valueName === "kelvin" ? "K" : valueName === "celsius" ? "°C" : "F";
}

function formSubmission(event) {
    event.preventDefault();

    
    const value = event.target.querySelector("#convertion_value").value;
    
    const fromValue = event.target.querySelector("#from_temperature_value").value;
    const toValue = event.target.querySelector("#to_temperature_value").value;

    displayResult(value, fromValue, toValue, result);
}

    
function loadFirst() {
    document.querySelector("form").addEventListener("submit", (event) => formSubmission(event));
}
        
window.addEventListener("load", loadFirst());