
let cities = []; 
var cityid = 0;
// var cityurl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cities.lat + "&lon=" + cities.lon + "&units=imperial&appid=7967fdacde126dedab49b6e1e52ecc3f"

function lookforcity() {
    cityid++;
    var cityname = document.getElementById("searcharea").value;
    var citycoords = "http://www.mapquestapi.com/geocoding/v1/address?key=YYCexb1D4aTNStxA70Weai9GVqLtrZ9Q&location=" + cityname;
    console.log(citycoords);
    fetch(citycoords).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            var lat = data.results[0].locations[0].latLng.lat;
            var lon = data.results[0].locations[0].latLng.lng;
            let city = {
                "name": cityname,
                "lat": lat,
                "lon": lon
            }
            cities.push(city);
            console.log(cities);
            localStorage.setItem(cityid, JSON.stringify(city));
        })
    getcityweather();
    })
}

document.getElementById("searchb").addEventListener("click", lookforcity);

function getcityweather() {
    
}

