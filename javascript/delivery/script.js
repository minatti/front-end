// o que é map??
// Manipulação de Elementos 
const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);



pizzaJson.map((item, index)=>{
    //console.log(item);
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key', index);
    // preencher as informações em pizzaItem
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault(); //prevenindo a ação padrão
        //colosest pega o item da tag anterior
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        // console.log("Clicou na pizza!");
        console.log(`Data ${pizzaJson[key]}`);

        c('.pizzaBig img').src = pizzaJson[key].img;    
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--price').innerHTML = pizzaJson[key].price;
        // default pizzaWindowArea esta display none para não aparecer;
        // para aparecer na tela vamos alterar este comportamento
         c('.pizzaWindowArea').style.opacity = 0;
         c('.pizzaWindowArea').style.display = 'flex';
         setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
         }, 200);
         c('.pizzaWindowArea').style.opacity = 1;
    })
    //append para adicionar
    c('.pizza-area').append(pizzaItem);


});

