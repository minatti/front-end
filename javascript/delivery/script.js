// o que é map??
// Manipulação de Elementos 
const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    console.log(item);
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzaItem

    //append para adicionar
    cs('pizza-area').append(pizzaItem);
    for(let i;i<pizzaItem.length;i++) {

    }

});

