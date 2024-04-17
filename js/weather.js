function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${globalVariable.API_KEY}&units=metric`;

    fetch(url).then((response) => response.json()).then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        const tempture = data.main.temp;
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${tempture}°C`;
    });
}

function onGeoError() {
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);