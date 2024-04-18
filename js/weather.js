let myLocation = {};
const POSITION = "position";
const weatherDiv = document.querySelector("#weather");

function handleClearLocation() {
    if (myLocation !== null) {
        localStorage.removeItem(POSITION);

        //기존 날씨출력 지우기
        const spans = weatherDiv.querySelectorAll('span');
        spans.forEach(span => {span.textContent = ''});

        //위치 재조회 및 날씨출력
        goWeather();
    } else {
        alert("Your location is not saved.");
    }
}
weatherDiv.addEventListener("click", handleClearLocation);

function onGeoOk(position) {
    myLocation.lat = position.coords.latitude;
    myLocation.lon = position.coords.longitude;

    printWeather(myLocation);
}

function onGeoError() {
    alert("Can't find you. No Weather for you.");
}

function printWeather(pos) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&appid=${globalVariable.API_KEY}&units=metric`;

    fetch(url).then((response) => response.json()).then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");

        myLocation.city = data.name;
        myLocation.weather = data.weather[0].description;
        myLocation.temperature = data.main.temp;
        localStorage.setItem(POSITION, JSON.stringify(myLocation));

        city.innerText = myLocation.city;
        weather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
        temp.innerText = `${myLocation.temperature}°C`;
    });
}

function goWeather() {
    savedLocation = localStorage.getItem(POSITION);
    if (savedLocation !== null) {
        myLocation = JSON.parse(savedLocation);
        printWeather(myLocation);
    } else {
        navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    }
}
goWeather();
