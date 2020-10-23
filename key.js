const API_KEY = "Your OpenWeatherMap Key";

function getApiKey(){
    localStorage.setItem("API_KEY",API_KEY);
    return API_KEY;
}

export {API_KEY,getApiKey}