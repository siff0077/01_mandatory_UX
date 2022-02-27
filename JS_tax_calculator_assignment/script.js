"use strict";

const calculate = function calculateTaxAmountAndPercentage(amount, percentage) {
    return amount / 100 * percentage;
}

function formSubmission(event) {
    event.preventDefault();

    // GETS THE VALUES
    const moneratyAmount = event.target.querySelector("#monetary_amount").value;
    const taxPercentage = event.target.querySelector("#tax_percentage").value;

    // CALCULATES THE VALUES
    const finalTaxResult = calculate(moneratyAmount, taxPercentage);
    const finalResult = moneratyAmount - finalTaxResult;

    // DISPLAYS THE RESULTS
    document.querySelector("#final_tax_amount").textContent = finalTaxResult.toFixed(2);
    document.querySelector("#final_amount").textContent = finalResult.toFixed(2);

}

    // LISTENS FOR SUBMISSION
function loadFirst() {
    document.querySelector("form").addEventListener("submit", (event) => formSubmission(event));
}
    
window.addEventListener("load", loadFirst());