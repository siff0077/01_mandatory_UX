"use strict"

// REMOVES CD INFO FROM THE TABLE
function removeCDInfoFromTable(event) {
    document.querySelector("#cd_information_table").removeChild(event.target.parentElement);
}

function addCDInfoToTable(CDInfo) {
    // CLONES TEMPLATE
    const clone = document.querySelector("#cd_information_template").cloneNode(true).content;

    // ADDS CD INFO TO THE TEMPLATE
    clone.querySelector(".author").textContent = CDInfo.author;
    clone.querySelector(".title").textContent = CDInfo.title;
    clone.querySelector(".year").textContent = CDInfo.year;
    clone.querySelector(".delete").addEventListener("click", (event) => {removeCDInfoFromTable(event)})

    // APPENDS TEMPLATE TO THE TABLE
    document.querySelector("#cd_information_table").appendChild(clone);
}

function formSubmission(event) {
    event.preventDefault();
    
    // GETS THE VALUES
    const newCDInfo = {}
    newCDInfo.author = event.target.querySelector("#author").value;
    newCDInfo.title = event.target.querySelector("#title").value;
    newCDInfo.year = event.target.querySelector("#year").value;
    
    addCDInfoToTable(newCDInfo)
}

    // LISTENS FOR SUBMISSION
function loadFirst() {
    document.querySelector("#cd_information_form").addEventListener("submit", (event) => formSubmission(event));
}

window.addEventListener("load", loadFirst());