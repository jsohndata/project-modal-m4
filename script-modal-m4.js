/*  Note: blurEffect () */
/* ************************************* */
// Set Blur... On or Off
//
// [1] elementFilter: Blur state
//      => blur-on, blur-off
// [2] elementTarget: Class or ID to blur when modal is acticvated
// [3] elementEvent: Source where the request is coming from.
//      => onLoad, button, close



/*  Create Var */
/* ************************************* */

// Button
const buttonModal = document.querySelector('#buttonModal');

/*  Create Var > Parse Data-Search  */
/* ************************************* */
const passVarName  = document.getElementById('passVar');
const passVarValue = passVarName.getAttribute("data-search");

// Split string using comma and put into an arry
const passVarArray = passVarValue.split(",");

// Assign the value to variables
const elementID     = passVarArray[0];

// Convert string into a boolean object
const keyboardState = Boolean(passVarArray[1]);

// Modal
const popModal = new bootstrap.Modal(document.getElementById('popModal'), {
    keyboard: keyboardState  
});



/*  Function */
/* ************************************* */

// ConsoleLog
function consoleLog (consoleLabel, consoleValue) {
    console.log(consoleLabel + ' => ' + consoleValue);
    return true;
}

// Load the modal
function loadModal (elementEvent) {
    popModal.show();

    // Console Log 
    consoleLog(elementEvent, 'modal');
    return true;
}

//  Blur Effect
/* See Note above */
function blurEffect(elementFilter, elementTarget, elementEvent) {

    // Add class
    document.querySelector(elementTarget).classList.add(elementFilter);

    // Console Log
    consoleLog(elementEvent, elementFilter);
    return true;
}

// Clear some of the class such as removing class after adding.
function cleanUpClass(elementTarget) {
    
    // Remove class
    document.querySelector(elementTarget).classList.remove ('blur-off');
    document.querySelector(elementTarget).classList.remove ('blur-on');
    return true;
}


/*  Event */
/* ************************************* */

// Onload
window.addEventListener('load', () => { 
    loadModal('onload'); 
    blurEffect('blur-on','#header','onload');
});


// When the modal close
window.addEventListener('hidden.bs.modal', () => { 
    blurEffect('blur-off','#header','close');
    cleanUpClass ('#header');
});


// Button click
buttonModal.addEventListener('click', () => { 
    loadModal('button'); 
    blurEffect('blur-on','#header','button'); 
});