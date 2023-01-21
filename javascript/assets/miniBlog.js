const readPosts = async () =>{
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'carregando...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();


    if(json.length > 0){

        for(let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1> ${json[i].body}</div>`
            postArea.innerHTML += postHtml;
        }
        

    } else {
        postArea.innerHtml = 'Nenhum Post para exibir';
    }

}


readPosts();