// criar conta
// https://github.com/felipemotarocha/formulario-js-dicasparadevs
let users = [
    {
    id: '1',
    username: 'luan',
    password: '123luan'
    },
    {
    id: '2',
    username: 'xdLara',
    password: 'luPenel'
    },
    {
    id: '3',
    username: 'abdx',
    password: 'xxx'
    }    
];

const form = document.querySelector(".credencial");
const username = document.getElementById("username");
const password = document.getElementById("password");


form.addEventListener('submit', (e)=>{

    e.preventDefault();

    
    if(checkLogin(username, password)){
        console.log('k');
    } else {
        clearErrors();
    }

});



function checkLogin(username, password) {
    input = document.querySelector('.credencial input');
    idUser = document.getElementById('error-user');
    idPass = document.getElementById('error-pass');
    error = document.getElementById('error');
    errorNull = document.getElementById('errorNull');
    usernameInput = document.getElementById('username');
    passwordInput = document.getElementById('password');

    vUsername = username.value;
    vPass = password.value;
    
    if(vUsername === '' || vPass === '') {
        errorNull.style.display = 'block';
        errorNull.innerText = 'digite usuario e/ou senha para entrar';
    return false    
    }


    // console.log(`${vUsername};${vPass}`);

    for(let i=0;i<users.length;i++) {

        // console.log(`Lista: ${users[i]}`);
    
        obj = users[i];
        username = obj.username;
        password = obj.password;


    if(vUsername != username && vPass != password){

        error.style.display = 'block';
        error.innerText = 'usuário não cadastrado';

        usernameInput.value = '';
        passwordInput.value = '';

        
    return false

    }else if(vUsername === username && vPass === password){
        
        window.location.href = 'index.html';     

    return true
    }else if(vUsername === username && vPass !== password){ 

        idPass.style.display = 'block';
        idPass.innerText = 'senha inválida';
        passwordInput.value = '';
    return false      
    } else if(vUsername === null || vPass === null) {
        error.style.display = 'block';
        error.innerText = 'digite usuario e senha para entrar';

        if(vUsername === null){
            usernameInput.value = '';
        } else {
            passwordInput.value = '';
        }

    return false   
    } else {
        
    };
    


    }


}


function clearErrors(){
    const callErrors = setTimeout(beforeUpErrors, 3000);


    function beforeUpErrors() {
        idUser = document.getElementById('error-user');
        idPass = document.getElementById('error-pass');
        error = document.getElementById('error');
        errorNull = document.getElementById('errorNull');
        


        idUser.style.display = 'none';
        idPass.style.display = 'none';
        error.style.display = 'none';
        errorNull.style.display = 'none';

    }
   

}




