"use strict"

const convert = function convertTemperature(value, fromValue, toValue) {
    switch (fromValue){
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

function getShortenedValueName(valueName) {
    return valueName === "kelvin" ? "K" : valueName === "celsius" ? "°C" : "F";
}

function showErrorField(text, errorField) {
    errorField.classList = '';
    errorField.textContent = text;
    document.querySelector("#result").classList = 'hide';
}

function showConvertionResult(value=0, fromValue=none, toValue=none, result=0, errorField) {
    
    errorField.classList = 'hide';
    errorField.textContent = "";
    
    document.querySelector("#result").classList = '';
    document.querySelector("#result #convert_from_value").textContent = value + " " + getShortenedValueName(fromValue);
    document.querySelector("#result #convert_to_value").textContent = result.toFixed(2) + " " + getShortenedValueName(toValue);

}

function formSubmission(event) {
    event.preventDefault();

    
    const value = event.target.querySelector("#convertion_value").value;
    
    const fromValue = event.target.querySelector("#from_temperature_value").value;
    const toValue = event.target.querySelector("#to_temperature_value").value;

    const errorField = document.querySelector("#error_field");

    
    if (fromValue === toValue) {
        showErrorField("Not possible to convert to similar values, please choose 2 different ones", errorField);
    } else {
        
        const result = convert(value, fromValue, toValue);
        if (result === null) {
            showErrorField("An error occurred in the convertion!", errorField);
        }
        
        showConvertionResult(value, fromValue, toValue, result, errorField);
    }

}

    
function loadFirst() {
    document.querySelector("form").addEventListener("submit", (event) => formSubmission(event));
}
        
window.addEventListener("load", loadFirst());