let rndm=0;
// This is the functionality of the submit button
const sndBtn = document.querySelector('#sendCode');
sndBtn.onclick = function(){
    generateRandomMessage();
}


// These lines of code prevent the form to be submitted after clicking on the button
const formas = document.querySelector('#loginForm');
function doForm(e) {
    e.preventDefault();
    const usr = catchValue();
    if(usr==rndm){
        generateLoginMessage("You gave me the correct username and password");
    } else{
        generateLoginMessage("Sorry, username or password is incorrect");
    }
    
}

// This function catches the value of the username and password fields from the form
function catchValue() {
    const usrField = document.querySelector("#userField").value;
    return usrField;
}

// Generates a random username and then returns the value
function generateRandomMessage() {
    const alrtField = document.querySelector("#loginCode");
    rndm = Math.floor(Math.random() * 100000);
    alrtField.innerText = `${rndm}`;
}

// Generates a message depending on the username is correct or not
function generateLoginMessage(msg) {
    const alrtField = document.querySelector("#loginMessage");
    alrtField.innerText = msg;
}

formas.addEventListener("submit", doForm);