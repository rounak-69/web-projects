// DOM Elements
const color1Elem = document.getElementById('color-1');
const color2Elem = document.getElementById('color-2');
const codeElem = document.querySelector('.code');
const btn = document.querySelector('.btn');
const generateCodeBtn = document.querySelector('.generate-code-btn');
const infoElem = document.querySelector('.info');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');

// Generate HEX
function getHEX(){
    let randomHex = Math.random().toString(16).substr(-6);
    let hexColor = `#${randomHex}`;
    return hexColor;
}

// Update the UI
function updateUI(){
    if (infoElem) {
        infoElem.remove();
    }

    color1Elem.innerText = getHEX();
    color2Elem.innerText = getHEX();

    color1Elem.style.background = color1Elem.innerText;
    color2Elem.style.background = color2Elem.innerText;

    codeElem.innerText = `background: linear-gradient(90deg, ${color1Elem.innerText}, ${color2Elem.innerText});`;
    document.body.style.background = `linear-gradient(90deg, ${color1Elem.innerText}, ${color2Elem.innerText})`;
}

// Generate and display the gradient code in a pop-up box
function generateCode() {
    const gradientCode = `background: linear-gradient(90deg, ${color1Elem.innerText}, ${color2Elem.innerText});`;
    modalContent.innerText = `Use the following code in your main code:\n\n${gradientCode}`;
    modal.style.display = 'block';
}

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// When the user clicks SPACE or the arrow, then UpdateUI
window.addEventListener('keydown', event => {
    if (event.code === 'Space')
        updateUI();
});

btn.addEventListener('click', updateUI);
generateCodeBtn.addEventListener('click', generateCode);
