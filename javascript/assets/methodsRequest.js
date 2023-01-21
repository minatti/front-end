const request = () => {
    // GET (PADRAO), POST, PUT e DELETE

    let url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url).then((response) => {
        return response.json();
        
    })
    .then((json) => {
        alert(`Titulo do primeiro post: ${json[0].title}`);
    })  

}



// Mostrando como fazer o request setando o method de enviar, no caso o POST
const inserir = () => {
    fetch
        ('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })

        }
        )
        .then((response)=> {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        }) 
    
}


document.querySelector('#inserir').addEventListener('click', inserir);





