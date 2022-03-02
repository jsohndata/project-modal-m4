// Create var
const popModal = new bootstrap.Modal(document.getElementById('popModal'), {
keyboard: true  });



// Load the modal
function popModalLoad () {
    popModal.show();
    return true;
}

// Set the Blur On
function blurOn() {
    document.querySelector('#section').classList.add('blur-on');
    return true;
}

// Set the Blur Off
function blurOff() {
    document.querySelector('#section').classList.add('blur-off');
    return true;
}



// Onload ... 
window.addEventListener('load', (event) => {
    if (popModalLoad() )  { console.log('modal => 1'); }
    else                  { console.log('modal => 0'); }

    if (blurOn() )  { console.log('blur-on => 1'); }
    else            { console.log('blur-on => 0'); }
});        

// When the modal close ... 
window.addEventListener('hidden.bs.modal', (event) => {
    if (blurOff() ) { console.log('blur-off => 1'); }
    else            { console.log('blur-off => 0'); }
});