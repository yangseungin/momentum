const API_KEY = "ad9e279f6585f9a34aca4fbde7cc1682";

function getApiKey(){
    return API_KEY;
}
function init(){
    localStorage.setItem("API_KEY",API_KEY);
}
init();