let string = 'Luanel';
let array = 'LuanelRRay';
let personagem = {
    name: 'Aragorn Setth',
    level: 522,
    world: 'Honbra',
    skills: {

        club: 119,
        magicLevel: 12,
    },
    outfit: ['assassin', 'retro warrior'],
    house: [
        {city: 'kazoordoon', owner: 'noobzola'},
        {decoration: 'tipo 1', box: 'chestman' }
        

    ]
}

//prop, valor

console.log
(
    `${personagem.name}, 
    Level: ${personagem.level},
    Mundo: ${personagem.world},
    Skills: ${personagem.skills.club}`
);

// Acessando e alterando objetos;

personagem.skills.club += 5;
personagem.outfit.push('retro paladin');

console.log(`Objeto: ${personagem.outfit}`);
console.log(`${personagem.house[0].city}`);






