const inputFeeld = document.querySelector('input');
const createBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');
const makeBox = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(inputFeeld.value));
clearBtn.addEventListener('click', deleteEl);
clearBtn.addEventListener('click', () => inputFeeld.value = 0);

const randomRgb = () =>{
    const rgbNum = () => Math.floor(Math.random() * 256);
    const r = rgbNum();
    const g = rgbNum();
    const b = rgbNum();
    return `rgb(${r},${g},${b})`;
};

const createBoxes = (amount) => {
    let newBoxes = [];
    for (let i = 0; i< amount; i++){
        const newBox = document.createElement('div');
        newBox.style.width = `${30 + i * 10}px`;
        newBox.style.height = `${30 + i * 10}px`;
        newBox.style.backgroundColor = randomRgb();
        newBoxes.push(newBox);
    };
    makeBox.append(...newBoxes);
    
};


function deleteEl(){
     makeBox.innerHTML = '';
};

