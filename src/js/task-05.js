const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', fillInput);
function fillInput(event) {
    if(nameInput.value !== ' '){
    nameOutput.innerText  = event.currentTarget.value;
    } else {
        nameOutput.innerText  = 'незнакомец'; 
        return;
    }
}