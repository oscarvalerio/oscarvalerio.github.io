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
        console.log("welcome "+usr);
    } else{
        console.log("sorry you're not allowed to login")
    }
    
}

// This function catches the value of the username and password fields from the form
function catchValue() {
    const usrField = document.querySelector("#userField").value;
    return usrField;
}

// Generates a random username and then returns the value
function generateRandomMessage() {
    const alrtField = document.querySelector("#textAlert");
    rndm = Math.floor(Math.random() * 100000);
    alrtField.innerText = `The username you have to type is:  ${rndm}`;
}


formas.addEventListener("submit", doForm);