
/*  Create Var */
/* ************************************* */

// Button
const buttonModal = document.querySelector('#buttonModal');

// Modal
const popModal = new bootstrap.Modal(document.getElementById('popModal'), {
    keyboard: keyboardState  
});


/*  Create Var > Parse Data-Search  */
/* ************************************* */
const passVarName  = document.getElementById('passVar');
const passVarValue = passVarName.getAttribute("data-search");

// Split string using comma
const passVarArray = passVarValue.split(",");

// Assign the value to variables
const elementID     = passVarArray[0];
const keyboardState = Boolean(passVarArray[1]);




/*  Function */
/* ************************************* */

// ConsoleLog
function consoleLog2600 (consoleEmoji, consoleLabel, consoleValue) {
    console.log(
        consoleEmoji 
        + ' ' 
        + consoleLabel
        + ' => '
        + consoleValue);
}

// Debugger Session K&D
function bugPowderDust (debugSource, debugThis) { 
    alert (
        '🤯'
        + '\n'
        + 'function =>' + debugSource 
        + '\n' 
        + 'This =>' + debugThis);
    
    return true;
}

// Load the modal
function loadModal (elementSource, stateConsoleLog, stateDebug) {
    popModal.show();

// Console Log 
    stateConsoleLog > 0 ? consoleLog2600('👍🏾', elementSource, 'modal') : null;
    
    return true;
}

// Function: Set Blur... On or Off
// [1] elementFilter: Blur state
//      => blur-on, blur-off
// [2] elementTarget: Class or ID to blur when modal is acticvated
// [3] elementSource: Source where the request is coming from.
//      => onLoad, button, close
// [4] stateConsoleLog:  Boolean
// [5] stateDebug:      Boolean

function blurElement(elementFilter, elementTarget, elementSource, stateConsoleLog, stateDebug) {
    // Create var
    let blurClassList = document.querySelector(elementTarget).classList;

    // Add class
    blurClassList.add(elementFilter);

    // Console Log 
    stateConsoleLog > 0 ? consoleLog2600('👍🏾', elementSource, elementFilter) : null;
    
    // Debugger
    stateDebug > 0 ? bugPowderDust('blur', blurClassList) : null;
}

// Clean up Class
function cleanUpClass(elementTarget, stateDebug) {
    // Create var
    let targetClassList = document.querySelector(elementTarget).classList;
    
    targetClassList.remove ('blur-off');
    targetClassList.remove ('blur-on');

     // debugger
     stateDebug > 0 ? bugPowderDust('blur', targetClassList) : null;
}




/*  Event */
/* ************************************* */
// Onload
window.addEventListener('load', () => { 
    loadModal('onload',0,0); 
    blurElement('blur-on','#header','onload',0,0);
});        


// When the modal close
window.addEventListener('hidden.bs.modal', () => { 
    blurElement('blur-off','#header','close',0,0);
    cleanUpClass ('#header',0,0);
});


// Button click
buttonModal.addEventListener('click', () => { 
    loadModal('button'); 
    blurElement('blur-on','#header','button',0,0); 
});