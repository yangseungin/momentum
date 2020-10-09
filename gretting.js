const nameContainer = document.querySelector(".js-name");

    SHOWING_CN = "showing";


function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const currentValue = input.value;
    localStorage.setItem("username", currentValue);
    paintGreeting(currentValue);
}

function paintInput() {
    const input = document.createElement("input");
    input.placeholder = "Hello, what's your name?";
    input.type = "text";
    input.className = "name__input";
    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmit);
    form.appendChild(input);
    nameContainer.appendChild(form);
}
function getGreeting(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if(hours>=5 &&hours<12){
        return "Good morning,";
    }else if(hours>=12 && hours<17){
        return "Good afternoon,";
    }else{
        return "Good evening,";
    }
}

function paintGreeting(name) {
    nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `${getGreeting()} ${name}.`;
  nameContainer.appendChild(title);
}

function loadName() {
    const username = localStorage.getItem("username");
    if (username === null) {
        paintInput();

    } else {
        paintGreeting(username);
    }

}

function init() {
    loadName();
}

init();