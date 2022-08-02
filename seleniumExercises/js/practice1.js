console.log('this is working');

// These lines of code prevent the form to be submitted after clicking on the button
const formas = document.querySelector('#loginForm');
function doForm(e) {
    e.preventDefault();
    catchValue();
    generateRandomMessage();
}

// This function catches the value of the username and password fields from the form
function catchValue() {
    const usrField = document.querySelector("#userField").value;
    const pswField = document.querySelector("#passwordField").value;
    console.log(usrField);
    console.log(pswField);
}

function generateRandomMessage() {
    const alrtField = document.querySelector("#textAlert");
    alrtField.classList.toggle('invField')
}


formas.addEventListener("submit", doForm);