function formatDtae(timetemp){
    let date = new Date(timetemp);
    let hours = date.getHours();
    if (hours<10){
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();   
    if (minutes<10){
        minutes = `0${minutes}`;
    } 
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function dispalyTemperature(response){  
    console.log(response.data);    
    document.querySelector("#temperature").innerHTML = Math.round(response.data.temperature.current);
    document.querySelector("#city").innerHTML = response.data.city;    
    document.querySelector("#description").innerHTML = response.data.condition.description;    
    document.querySelector("#humidity").innerHTML = response.data.temperature.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#date").innerHTML = formatDtae(response.data.time);
    
}

let apiKey = "t90dd4fb0b4eobe0b39b7a843048d63e";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Tehran&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(dispalyTemperature);
