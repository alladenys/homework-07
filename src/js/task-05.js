const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', fillInput);
function fillInput(event) {
    if(nameInput.value === ''){
       nameOutput.innerText  = 'незнакомец'; 
    } else if(nameInput.value === ' '){
        nameOutput.innerText  = 'незнакомец'; 
    }
    else {
    nameOutput.innerText  = nameInput.value;
    }
    return 'Привет, ${nameOutput.innerText}!';
 }