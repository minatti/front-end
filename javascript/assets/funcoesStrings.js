const nroContratoPadrao = () => {
    let qtdDigitos = 10;
    let nroContrato = 89879778;
    let verificarQtd = nroContrato.toString().length;
    // console.log(verificarQtd);
    let qtdNumerica = parseInt(verificarQtd);
    console.log(`TOTAL DE DIGITO: ${qtdDigitos} ----- ADICIONAR X DIGITOS: ${qtdNumerica}`)
    var totDigits = qtdDigitos-qtdNumerica;
    console.log(totDigits);
    let resultado = totDigits;
    console.log(`RESULTADO: ${resultado}`);
    return nroContrato.padStart(2, '0');
}

console.log(nroContratoPadrao());