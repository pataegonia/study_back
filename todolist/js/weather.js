const API_KEY = "2a5d84016752a284caaece45e85d7ea3"


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url).then((response) => response.json()).then((data)=>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText =data.name;
        const temp = (data.main.temp-273.15).toFixed(1);
        weather.innerText = `${data.weather[0].main} / ${temp}`
    })
}

function onGeoErr(){
    alert("Cannot Find Your Location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);