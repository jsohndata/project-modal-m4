
// Const passed var
const passVarName  = document.getElementById('passVar');
const passVarValue = passVarName.getAttribute("data-search");

// Split string using comma
const passVarArray = passVarValue.split(",");

// Assign the value to variables
const elementID     = passVarArray[0];
const keyboardState = Boolean(passVarArray[1]);

// Const for Modal
const popModal = new bootstrap.Modal(document.getElementById('popModal'), {
    keyboard: keyboardState  
});

// Load the modal
function popModalLoad () {
    popModal.show();
    return true;
}

// Set the Blur On
function blurOn() {
    document.querySelector(elementID).classList.add('blur-on');
    return true;
}

// Set the Blur Off
function blurOff() {
    document.querySelector(elementID).classList.add('blur-off');
    return true;
}

// Onload ... 
window.addEventListener('load', (event) => {
    popModalLoad()  ? console.log('modal => 1') : console.log('modal => 0')
    blurOn()        ? console.log('blur-on => 1') : console.log('blur-on => 0')
});        

// When the modal close ... 
window.addEventListener('hidden.bs.modal', (event) => {
    blurOff()       ? console.log('blur-off => 1') : console.log('blur-off => 0')
});