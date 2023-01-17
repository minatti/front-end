// Operador Rest sendo aplicado no ...info
function adicionarInfo(info){

    let newInfo = {
        ...info,
        status: 0,
        token: 'dasdqe908x'
    };

    return newInfo;
}



let printInfo = adicionarInfo({nome: 'Luan', sobrenome: 'Carminatti'});
console.log(printInfo);

