/*  Note: blurEffect () */
/* ************************************* */
// Set Blur... On or Off
//
// [1] elementFilter: Blur state
//      => blur-on, blur-off
// [2] elementTarget: Class or ID to blur when modal is acticvated
// [3] elementSource: Source where the request is coming from.
//      => onLoad, button, close
// [4] stateConsoleLog:  Boolean
// [5] stateDebug:      Boolean


// Note: Clean up Class
/* ************************************* */
// Clear some of the class such as removing class after adding.
//
// [1] elementTarget: Target element for the class to be reset
// [5] stateDebug:      Boolean





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
function consoleLog (consoleEmoji, consoleLabel, consoleValue) {
    console.log(
        consoleEmoji 
        + ' ' 
        + consoleLabel
        + ' => '
        + consoleValue);
    return true;
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
    stateConsoleLog > 0 ? consoleLog('👍🏾', elementSource, 'modal') : null;
    return true;
}

//  Blur Effect
/* See Note above */
function blurEffect(elementFilter, elementTarget, elementSource, stateConsoleLog, stateDebug) {
    // Create var
    let blurClassList = document.querySelector(elementTarget).classList;

    // Add class
    blurClassList.add(elementFilter);

    // Console Log + Debugger
    stateConsoleLog > 0 ? consoleLog('👍🏾', elementSource, elementFilter) : null;
    stateDebug      > 0 ? bugPowderDust('blur', blurClassList) : null;
    return true;
}

// Clean up Class
/* See Note above */
function cleanUpClass(elementTarget, stateDebug) {

    // Create var
    let targetClassList = document.querySelector(elementTarget).classList;
    
    // Remove class
    targetClassList.remove ('blur-off');
    targetClassList.remove ('blur-on');

     // Debugger
     stateDebug > 0 ? bugPowderDust('blur', targetClassList) : null;
     return true;
}


/*  Event */
/* ************************************* */

// Onload
window.addEventListener('load', () => { 
    loadModal('onload',0,0); 
    blurEffect('blur-on','#header','onload',0,0);
});        


// When the modal close
window.addEventListener('hidden.bs.modal', () => { 
    blurEffect('blur-off','#header','close',0,0);
    cleanUpClass ('#header',0,0);
});


// Button click
buttonModal.addEventListener('click', () => { 
    loadModal('button'); 
    blurEffect('blur-on','#header','button',0,0); 
});