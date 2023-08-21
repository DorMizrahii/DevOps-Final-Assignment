const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError")

const user = {
    userName: "admin",
    password: "admin"
} 

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(userName.value === user.userName && password.value === user.password){
        loginForm.submit();
    }else{
       const markup = `<div class="alert alert--${type}">${msg}</div>}`;
       document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    }
})