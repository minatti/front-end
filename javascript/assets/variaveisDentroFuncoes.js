let count = 0;

//variavel global

function add () {
    //variavel local
    let count = 0;
    count++;
}


//chamando a funcao 2x
console.log(add());
console.log(add());

//chamando a variavel global
console.log(count);