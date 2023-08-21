const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.querySelector(".loginBtn");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError")
const from = document.querySelector('.login-form')
const welcomMessage = document.querySelector('.welcom')

const user = {
    userName: "admin",
    password: "admin"
} 

from.addEventListener("submit", (e) => {
    e.preventDefault();
    if(userName.value === user.userName && password.value === user.password){
        from.classList.add('hidden');
        welcomMessage.classList.remove('hidden')

    }else{
       const markup = `<div class="alert alert--${type}">${msg}</div>}`;
       document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    }
})