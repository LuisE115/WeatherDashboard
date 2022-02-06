// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=7967fdacde126dedab49b6e1e52ecc3f
let cities = [
    {
        "name": "Austin",
        "url": "https://api.openweathermap.org/data/2.5/onecall?lat=25.76&lon=-80.19&units=imperial&appid=7967fdacde126dedab49b6e1e52ecc3f"
    },
    {
        "name": "Chicago",
        "url": "" 
    },
    {
        "name": "New York",
        "url": "" 
    },{
        "name": "Orlando",
        "url": "" 
    },{
        "name": "San Francisco",
        "url": "" 
    },{
        "name": "Seatle",
        "url": "" 
    },{
        "name": "Denver",
        "url": "" 
    },{
        "name": "Atlanta",
        "url": "" 
    }
] 
var cityurl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lan + "&lon=" + lon + "&units=imperial&appid=7967fdacde126dedab49b6e1e52ecc3f"

function lookforcity() {

}

document.getElementById("searchb").addEventListener("click")

fetch(austin).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    })
})