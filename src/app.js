function dispalyTemperature(response){  
    console.log(response.data);    
    document.querySelector("#temperature").innerHTML = Math.round(response.data.temperature.current);
    document.querySelector("#city").innerHTML = response.data.city;    
    document.querySelector("#description").innerHTML = response.data.condition.description;    
    document.querySelector("#humidity").innerHTML = response.data.temperature.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#date").innerHTML = "Friday 5:00";
    
}

let apiKey = "t90dd4fb0b4eobe0b39b7a843048d63e";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(dispalyTemperature);
