let value = '124';

const normalizeContract = (value) => {
    //let contract = '89879778';
    contract = value;
    const qtdPattern = (10-contract.length)+contract.length;
    console.log(qtdPattern);
    //const last4Digits = fullNumber.slice(-4);
    const addDigit = contract.padStart(qtdPattern, '0');

    console.log(addDigit);
    return addDigit;
}

console.log(normalizeContract(value));
