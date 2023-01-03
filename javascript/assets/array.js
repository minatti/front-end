//array dentro de array (formando duas dimensões)
let lista = ['blabla', ['xx', 'yy']];


let listaIdent = [
    'bla',
    [
    'xx', 
    'yy'
    ]
    ,
    ['abc'
    ,
     'def'
    ]
];


let ingredientes = [];

ingredientes.push('agua', 'farinha', 'ovo', 'corante', 'sal','cebola');
console.log(`Total de ingredientes: ${ingredientes.length}`);


ingredientes.shift(); //remove pri item
ingredientes.pop(); //remove ultimo item do array
