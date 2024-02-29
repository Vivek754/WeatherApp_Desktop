var wind = document.getElementById("wind")
var pressure = document.getElementById("pressure")
var day = document.getElementById("day")
var date = document.getElementById("date")
var city = document.getElementById("city")
var feel = document.getElementById("feel")
var tempMax = document.getElementById("tempMax")
var tempMin = document.getElementById("tempMin")
var humidity = document.getElementById("humidity")
var deg = document.getElementById("deg")
var mainIcon = document.getElementById("mainIcon")
var flexBox1Info = document.getElementById("flexBox1Info")
var flexBox3 = document.getElementById("flexBox3")



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const d = new Date();




let getMonth = months[d.getMonth()];
month.innerHTML = getMonth;

day.innerHTML = days[d.getDay()]

date.innerHTML = d.getDate()
// Day & Night Code

const time = d.getHours();

if (time >= 19 && 6) {
    document.body.style.backgroundColor = "#013c68";
} else {
    document.body.style.backgroundColor = "#87ceeb";
}


city.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=metric&appid=eb77c7baad45f8e4b1fb10c55b8517dc')
            .then(response => response.json())
            .then(data => {
                
                city.value = city.value[0].toUpperCase() + city.value.slice(1);

                if (data['cod'] == "404") {
                    alert("City not found");
                    city.value = "";
                } else {


                    temp.innerHTML = data['main']['temp'].toFixed(1) + "\xB0"
                    feel.innerHTML = data['main']['feels_like'].toFixed(1) + "\xB0"
                    tempMax.innerHTML = data['main']['temp_max'].toFixed(1) + "\xB0"
                    tempMin.innerHTML = data['main']['temp_min'].toFixed(1) + "\xB0"
                    humidity.innerHTML = data['main']['humidity']
                    wind.innerHTML = data['wind']['speed'] + " km/h"
                    deg.innerHTML = data['wind']['deg'] + "\xB0"
                    pressure.innerHTML = data['main']['pressure'] + " mb"
                    flexBox3.style.display = "block"
                    flexBox1Info.style.display = "block"

                    // Icon change code starts here

                    var iconCode = data['weather'][0]['main']
                    console.log(iconCode);

                    if (iconCode == "Clear") {
                        mainIcon.src = "./images/sun.png"
                    } else if (iconCode == "Rain") {
                        mainIcon.src = "./images/rain.png"
                    } else if (iconCode == "Clouds") {
                        mainIcon.src = "./images/clouds.png"
                    } else if (iconCode == "Thunder") {
                        mainIcon.src = "./images/thunder.png"
                    } else if (iconCode == "Smoke") {
                        mainIcon.src = "./images/fog.png"
                    } else if (iconCode == "Snow") {
                        mainIcon.src = "./images/snow.png"
                    } else if (iconCode == "Haze") {
                        mainIcon.src = "./images/fog.png"
                    }

                    // Icon change code ends here


                }
            })
            .catch(err => {
                console.log(err)
            })
    }
})



