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


const addNewPost = async (title, body) => {

    await fetch('https://jsonplaceholder.typicode.com/posts', 
    {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
    });
    
    document.querySelector('#title').value = '';
    document.querySelector('#txtPost').value = '';


    readPosts();

}

    document.querySelector('#insertBtn').addEventListener('click', ()=>{
        let title = document.querySelector('#title').value;
        let body = document.querySelector('#txtPost').value;

        if(title && body) {
             addNewPost(title, body);

        } else {
            alert('Preencha todos os campos!');
        } 
    });



readPosts();