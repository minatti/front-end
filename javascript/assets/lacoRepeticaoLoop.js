for(let i = 0; i < 10; i++){
    console.log(i);

}

// Loop em array

let cores = [
    {nome: 'amarelo', qtd: 10},
    {nome: 'vermelho', qtd: 20},
    {nome: 'azul', qtd: 5}

];


// for classico
for(let i = 0; i < cores.length; i++){
    console.log(`${cores[i].nome}`);

}


// python
for(let i in cores) {
    console.log(`${cores[i].nome}`);
}


// semelhante com o foreach 

for(let cor of cores) {
    console.log(`Nome: ${cor.nome} Qtd: ${cor.qtd}`);
}

 


