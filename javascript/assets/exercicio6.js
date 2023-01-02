/*
Crie uma função que valide usuário e senha.
Essa é clássica para os guri
Usuário correto: pedro
Senha correta: 123
*/



//Case função:

let usuario = 'pedro';
let senha = '123';

//invertendo a lógica ou sei lá, depende do ponto de vista.

function validar(usuario, senha) {
    let validaUser = 'pedro';
    let validaPass = '123'
    if(usuario != validaUser && validaPass != senha) {
        console.log('Acesso Negado Dr!');

    } else {
        console.log("Acesso concedido Dr!");
        
    }
}

let autenticacao = validar(usuario, senha);


console.log(`Status: ${autenticacao}`);


