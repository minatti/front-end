// criar função para calcular o preço do imovel
// // params: (metragem, quartos);
// regras:

// Se tiver 1 quarto, o m2 é 1x
// Se tiver 2 quartos, o m2 é 1.2x
// Se tiver 3 quartos, o m2 é 1.5x

// Uso função:

// let metragem = 123;
// let quartos = 3;


let metragem = 123;
let quartos = 3;

function calcularImovel(metragem, quartos) {
    var m2 = 3.000;

    switch(quartos) {
        case 1:
                var preco = (metragem * m2);

        break;
        
        case 2:
                 var valorM2 = (m2 * 1.2);
                 var preco = (metragem * valorM2);
        
            break;
        case 3:
                var valorM2 = (m2 * 1.5);
                var preco = (metragem * valorM2);
            break;
    }


    return preco
}

let preco = calcularImovel(metragem, quartos);

console.log(`A casa custa ${preco}`);



