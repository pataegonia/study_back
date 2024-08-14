const loginForm = document.querySelector("#login-form")
const logininput = document.querySelector("#login-form input")
const greet = document.querySelector("#greeting");

function paintGreeting(username){
    greet.innerText = `Hello ${username}`;
    greet.classList.remove("hidden");
}


function loginSubmmit(event) {
    event.preventDefault();
    const username = logininput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem("username",username)
    paintGreeting(username);
}

const usernameSaved = localStorage.getItem("username");

if(usernameSaved==null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",loginSubmmit)
}else{
    paintGreeting(usernameSaved)
}