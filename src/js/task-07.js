const inputSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');


inputSize.addEventListener('input', changeSize);
function changeSize(){
    textSize.style.fontSize = inputSize.value + 'pc'
    console.log(inputSize.value);
}