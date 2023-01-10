// pegar todos os elementos

const input = document.querySelector('input');
const ulList = document.querySelector('ul');  


// Funções

function handleKeyUp(e) {
    e.key = null;
    if(e.key === 'Enter') {
        // console.log(input.value);
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        ulList.appendChild(newLi);
        input.value = '';
    } else {
        console.log('errou a tecla');
    }
}


// Eventos

input.addEventListener('keyup', handleKeyUp);