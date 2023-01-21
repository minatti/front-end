const request = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url).then((response) => {
        return response.json();
        
    })
    .then((json) => {
        alert(`Titulo do primeiro post: ${json[0].title}`);
    })  

}

const sendCallback = () => {
    return document.querySelector('#button').addEventListener('click', request);
}

console.log(sendCallback());