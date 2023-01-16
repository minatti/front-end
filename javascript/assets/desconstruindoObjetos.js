// Objeto
let pessoa = {
    nome: 'Luan',
    sobrenome: 'Carminatti',
    idade: 100,
    social: {
        facebook: 'desativado',
        instagram: {
            url: '@itsmecarminatti',
            seguidores: 300
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }

};

// Desconstruindo ...

// let {nome, idade, social:{instagram:{url, seguidores}}} = pessoa;
// console.log(nome, idade, url,seguidores);

function pegarNomeCompleto({nome, sobrenome = 'Silva', social:{instagram: {url:instagram}}}) {
    
    return `${nome} ${sobrenome} (Siga em ${instagram})`;

}

console.log(pegarNomeCompleto(pessoa));