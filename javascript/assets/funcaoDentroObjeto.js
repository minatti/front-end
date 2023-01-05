let pessoa =  {
    nome: 'Jusbileu',
    sobrenome: 'Hala',
    idade: 90,
    nomeCompleto: function () {
        return `${this.nome}, ${this.idade}`
    }
}

console.log(pessoa.nomeCompleto());