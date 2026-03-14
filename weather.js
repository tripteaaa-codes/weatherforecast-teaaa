document.addEventListener("DOMContentLoaded", () => {

const searchButton = document.querySelector(".searchbar button")
const searchInput = document.querySelector(".searchbar input")

searchButton.addEventListener("click", () => {

const city = searchInput.value

if(city){

fetchWeather(city)

}

})

function fetchWeather(city){

const apiKey = '4d1021d7f99fea75516cca45494711c8';

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

fetch(url)

.then(response => response.json())

.then(data => {

if(data.cod === 200){

updateWeather(data)

}

else{

alert("City not found")

}

})

.catch(error => {

console.log("Error:",error)

})

}

function updateWeather(data){

document.querySelector(".temp").textContent =
data.main.temp + "°C"

document.querySelector(".city").textContent =
data.name

document.querySelector(".humidity").textContent =
data.main.humidity + "%"

document.querySelector(".wind").textContent =
data.wind.speed + " km/h"

document.querySelector(".weather-icon").src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

let weather = data.weather[0].main.toLowerCase()

document.querySelector(".sun").style.opacity="0"
document.querySelector(".cloud-layer").style.opacity="0"
document.querySelector(".rain").style.opacity="0"
document.querySelector(".snow").style.opacity="0"

if(weather.includes("clear")){

document.querySelector(".sun").style.opacity="1"

}

else if(weather.includes("cloud")){

document.querySelector(".cloud-layer").style.opacity="0.6"

}

else if(weather.includes("rain")){

document.querySelector(".rain").style.opacity="0.6"

}

else if(weather.includes("snow")){

document.querySelector(".snow").style.opacity="0.8"

}

}

})