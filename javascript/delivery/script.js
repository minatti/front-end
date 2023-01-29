// o que é map??
// Manipulação de Elementos 
const query = (el)=>document.querySelector(el);
const queryAll = (el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    console.log(item);
    let pizzaItem = query('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzaItem

    //append para adicionar
    queryAll('pizza-area').append(pizzaItem);
    for(let i;i<pizzaItem.length;i++) {

    }

});

