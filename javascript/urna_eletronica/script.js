let voto = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let iterarNumbers = document.querySelector('.d-1-3');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');

let etapaAtual = 0;
let numero = '';

const comecarEtapa = ()=>{
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0;i<etapa.numeros;i++){
        numeroHtml +='<div class="numero"></div>';
    }

    voto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    iterarNumbers.innerHTML = numeroHtml;
}

const atualizaInterface = ()=>{
    alert('Finalizou de digitar o voto');

}

const clicou = (n)=>{
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = '${numero}${n}';

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}


const branco = ()=>{
    alert("Clicou em BRANCO!");
}

const corrige = ()=>{
    alert("Clicou em CORRIGE!");
}

const confirma = ()=>{
    alert("Clicou em CONFIRMA!");
}


comecarEtapa();