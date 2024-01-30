let inputEmail=document.getElementById('Email or Username');
let inputPassword=document.getElementById('Password');
let link=document.getElementById('link');

let btnLogin=document.getElementById('btn');

btnLogin.addEventListener('click',()=>{
    let email=inputEmail.value;
    let password=inputPassword.value;
    if(email==''||password==''){
        alert('Please fill all the fields');
    }
    else{
        if(email=='sahilsh28004@gmail.com' && password=='sahilsh5831B'){
            alert('Login Successfull');
            inputEmail.value='';
            inputPassword.value='';
            window.location.href='index.html';
        }
        else{
            alert('Invalid Credentials');
            inputEmail.value='';
            inputPassword.value='';
            window.location.href='index2.html';
        
        }
    }
})