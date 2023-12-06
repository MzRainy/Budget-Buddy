
    
    const loginBtn =document.querySelector('#loginBtn');
    const signUpBtn = document.querySelector('#signUpBtn');


function loginDirect (){
    document.location.replace('/login');

    console.log("This button kinda workeded");
}

function signUpDirect (){
    document.location.replace('/signUp');
}

loginBtn.addEventListener("click", loginDirect);
signUpBtn.addEventListener("click", signUpDirect);