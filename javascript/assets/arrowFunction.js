// didática complicada, vou anotar uns pontos..
// 1. definimos um nome da função o mais sugestivo possível
// 2. passamos o parametro ao declarar a função (sobrenome)
// 3. dentro da função concatenamos o nome com o sobrenome
// 4. para casos mais simples, que ficará em uma linha só podemos simplesmente utilizar somente a flecha concatenando direto


const nomeSobrenome = (sobrenome) => { 
    let nomeCompleto = 'Luan ' +sobrenome;

    return nomeCompleto;
}




// checkando resultado

console.log(`Nome completo: ${nomeSobrenome('Carminatti')}`);


// veja exemplo de caso, referente ao que falei no 4.

// const sobrenome = sobrenome => 'Luan '+ sobrenome;
// console.log(`Apenas sobrenome ${sobrenome}`);