function adicionar() {
    const getValue = document.querySelector('#teste');
    const ul = getValue.querySelector('ul');

    let newLi = document.createElement("li");
    newLi.innerText = "Novo item";

    // ul.append(newLi);
    ul.prepend(newLi);
}

