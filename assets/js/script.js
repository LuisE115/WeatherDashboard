
var cities = []; 
var cityid = 0;
const timeElapsed = new Date();
const today = new Date(timeElapsed);


function lookforcity() {
    cityid++;
    var cityname = document.getElementById("searcharea").value;
    var citycoords = "http://www.mapquestapi.com/geocoding/v1/address?key=YYCexb1D4aTNStxA70Weai9GVqLtrZ9Q&location=" + cityname;
    fetch(citycoords).then(function(response) {
        response.json().then(function(data) {
            var lat = data.results[0].locations[0].latLng.lat;
            var lon = data.results[0].locations[0].latLng.lng;
            let city = {
                "name": cityname,
                "lat": lat,
                "lon": lon
            }
            cities.unshift(city);
            getcityweather();

            localStorage.setItem(cityid, JSON.stringify(city));
            
        })
    })
}

document.getElementById("searchb").addEventListener("click", lookforcity);

 function getcityweather() {
    var lat = cities[0].lat;
    var lon =cities[0].lon;
    var cityurl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=7967fdacde126dedab49b6e1e52ecc3f"
    
    fetch(cityurl).then(function(response) {
        response.json().then(function(data) {
            document.getElementById("city").innerHTML = cities[0].name +"(" + today.toLocaleDateString() + ")";
            var iconid = data.current.weather[0].icon;
            var img = document.createElement("img");
            img.src = "http://openweathermap.org/img/wn/" + iconid + "@2x.png";
            var curname = document.getElementById("city");
            curname.appendChild(img);
            document.getElementById("currentTemp").innerHTML = data.current.temp;
            document.getElementById("currentWind").innerHTML = data.current.wind_speed;
            document.getElementById("currentHum").innerHTML = data.current.humidity;
            var uvi =data.current.uvi;
            document.getElementById("currentUV").innerHTML = uvi;

            if (uvi < 2) {
                document.getElementById("currentUV").style.backgroundColor = "green";
            } else if (uvi >= 2 && uvi < 5) {
                document.getElementById("currentUV").style.backgroundColor = "orange"; 
            } else {
                document.getElementById("currentUV").style.backgroundColor = "red";
            }
            for (var i = 0; i <5; i++) {
                var id = i + 1;
                var day = new Date(today);
                day.setDate(today.getDate() + i);
                document.getElementById("date" +id).innerHTML = day.toLocaleDateString();
                var img = document.createElement("img");
                var forecasticon = data.daily[i].weather[0].icon;
                img.src = "http://openweathermap.org/img/wn/" + forecasticon + "@2x.png";
                var iconfc = document.getElementById("img" +id);
                iconfc.appendChild(img);
                document.getElementById("temp" +id).innerHTML = data.daily[i].temp.day;
                document.getElementById("wind" +id).innerHTML = data.daily[i].wind_speed;
                document.getElementById("hum" +id).innerHTML = data.daily[i].humidity;
            }
            

        })
    })
}


function savedCities() {
    for (var i = 0; i < cityid; i++){
        const newelement = document.createElement("p");
        newelement.appendChild(localStorage.getItem(i));
    }
}


