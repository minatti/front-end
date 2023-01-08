function soltou(e) {
    console.log('TECLA APERTADA: ' + e.code);
    console.log('SHIFT?' + e.shiftKey);
    console.log('CTRL?' + e.ctrlKey);
    console.log('ALT?' + e.altKey);
    console.log('--');
}


const tagInput = document.querySelector('input');
tagInput.addEventListener('keyup', soltou);



