function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    let newUl = document.createElement('ul');
    ul.after(newUl);



    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item add" + (i+1);
        newUl.append(newLi);
    }
}