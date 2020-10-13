//console.log("our script.js works");

function populateTable(contacts) {
    contacts.sort();
    let firstLetter = NaN;
    contacts.forEach(contact => {
        //console.log(contact);
        const currentFirstLetter = contact[0];
        if (firstLetter != currentFirstLetter) {
            //console.log("new first letter: " + currentFirstLetter);
            firstLetter = currentFirstLetter;
            const letterRow = table.insertRow();
            letterRow.classList.add("letter");
            letterRow.classList.add("no-hover");
            letterRow.insertCell().innerHTML = firstLetter;
        }
        table.insertRow().insertCell().innerHTML = contact;
    });
}

function searchForSubstring(stringsArray, substring) {
    return stringsArray.filter(str => str.toLowerCase().includes(substring.toLowerCase()));
}

function inputHandler(e) {
    //console.log("in inputHandler() function");
    table.innerHTML = "";
    populateTable(searchForSubstring(contactList, inputElem.value));
}

const inputElem = document.getElementById("inputSearch");
inputElem.addEventListener("input", inputHandler);

const table = document.getElementById("tableContacts");

const contactList = [
    'Halina', 
    'Rayford', 
    'Many', 
    'Hans', 
    'Danuta', 
    'Anisha', 
    'Tijuana', 
    'Wei', 
    'Bob', 
    'Veronique', 
    'Theodora', 
    'Rosita', 
    'Johana', 
    'Micaela', 
    'Owen', 
    'Antwan', 
    'Valeria', 
    'Misty', 
    'Angelina', 
    'Peggy Laporte'
];

populateTable(contactList);