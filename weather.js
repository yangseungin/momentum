const weather = document.querySelector(".js-weather .weather__text");


const API_URL = "https://api.openweathermap.org/data/2.5/weather?";

function getWeather(coords) {
    const API_KEY = localStorage.getItem("API_KEY");    //api key 비공개
    fetch(
        `${API_URL}lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`
    )
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const temperature =Math.ceil(json.main.temp);
            const place = json.name.split('-')[0];
            weather.innerHTML = `${temperature}° <br>${place}`;
        });
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coords = {
        lat,
        lon
    };
    localStorage.setItem("coords", JSON.stringify(coords));
    getWeather(coords);
}

function handleGeoError(position) {
    console.log("There is no location");
}

function loadWeather() {
    const currentCoords = localStorage.getItem("coords");
    if (currentCoords === null) {
        navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    } else {
        const parseCoords = JSON.parse(currentCoords);
        getWeather(parseCoords);
        return;
    }
}

function init() {
    loadWeather();
}

init();