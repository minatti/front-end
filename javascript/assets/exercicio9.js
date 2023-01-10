function adicionar(e) {
    const tecla = e.code;
    const enter = 'Enter';

    console.log(`Tecla: ${tecla} -- Enter: ${enter}`)

    if(tecla === enter) {
        console.log('entrei if');
        const ul = document.querySelector('ul');
        const newLi = document.createElement('li');
        newLi.innerText = input.value;
        ul.append(newLi);
        input.value = '';

    }

}

const input = document.querySelector('input');
input.addEventListener('keyup', adicionar);
