const  request = async () => {
    // GET (PADRAO), POST, PUT e DELETE

    let fetchResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await fetchResponse.json();
    alert(`Titulo do primeiro post: ${json[0].title}`);

    alert('Menino chato vai esperar KKKKKKKKKK');
    

}



const inserir = async () => {
    let response = await
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
        let json = await response.json();
        console.log(json);
    
}

document.querySelector('#request').addEventListener('click', request);

document.querySelector('#inserir').addEventListener('click', inserir);





