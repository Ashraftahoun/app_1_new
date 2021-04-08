let userName= document.querySelector('#username');
let password= document.querySelector('#password');
let loginBtn= document.querySelector('#sign');
let getUser= localStorage.getItem('username');
let getpass= localStorage.getItem('password');

loginBtn.addEventListener('click', function(e){
    e.preventDefault();
    if (userName.value==='' || password.value===''){
        alert('plz inter data');
    }else{
        if ( ( getUser && getUser===userName.value ) && ( getpass &&      getpass===password.value)){
            setTimeout( ()=> {
                window.location='index.html';
            },2000);
        }else{
            console.log('there is something wrong');
        }
    }
});