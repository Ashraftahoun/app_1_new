let userName= document.querySelector('#username');
let email= document.querySelector('#email');
let password= document.querySelector('#password');
let registerButn= document.querySelector('#sign');

registerButn.addEventListener('click', function(e){
        e.preventDefault();
    if ( userName.value==='' || email.value==='' || password.value===''){
        alert('plz inter data');
    }else{
        localStorage.setItem('username',userName.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);
        
        setTimeout( ()=>{
            window.location='login.html';
        },2000);
    }
    
});

