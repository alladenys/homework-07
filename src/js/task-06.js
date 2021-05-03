const chekInput = document.querySelector('#validation-input');
const chekLengthInput = chekInput.getAttribute('data-length');
const countInput = parseInt(chekLengthInput, 10);

chekInput.addEventListener('blur', chekFillInput);
function chekFillInput(){
    if(chekInput.value.length === countInput){
    chekInput.classList.add('valid');
    chekInput.classList.remove('invalid');
    } else {
    chekInput.classList.add('invalid');
    chekInput.classList.remove('valid');
    }
};
