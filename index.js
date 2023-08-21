const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.querySelector(".loginBtn");
const userNameMarkUp = document.querySelector(".userNameMarkUp");
const passMarkUp = document.querySelector(".passMarkUp")
const from = document.querySelector('.login-form')
const welcomMessage = document.querySelector('.welcom')

const user = {
    userName: "admin",
    password: "admin"
} 

from.addEventListener("submit", (e) => {
    e.preventDefault();
    userNameMarkUp.textContent='';
    passMarkUp.textContent='';

    if(userName.value === user.userName && password.value === user.password){
        from.classList.add('hidden');
        welcomMessage.classList.remove('hidden')

    }else{
       if(userName.value!=user.userName){
        userNameMarkUp.textContent="the user name isnt currect!"
       }
       if(password.value!=user.password){
        passMarkUp.textContent="the password isnt currect!"
       }

    }
})