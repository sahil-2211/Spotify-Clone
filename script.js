let inputEmail=document.getElementById('Email or Username');
let inputPassword=document.getElementById('Password');
let link=document.getElementById('link');

let btnLogin=document.getElementById('btn');

btnLogin.addEventListener('click',()=>{
    let Email=inputEmail.value;
    let Password=inputPassword.value;
    if(Email==''||Password==''){
        alert('Please fill all the fields');
    }
    else{
        if(Email=='sahilsh28004@gmail.com' && Password=='sahilsh5831B'){
            alert('Login Successfull');
            inputEmail.value='';
            inputPassword.value='';
            window.location.href='index.html';
            // loginForm.reset();
        }
        else{
            alert('Invalid Credentials');
            inputEmail.value='';
            inputPassword.value='';
            loginForm.reset();
            window.location.href='index2.html';
        }
    }
})