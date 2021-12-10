// api.openweathermap.org/data/2.5/weather?q={city name}&appid=bd20d14798c81ad1ecb0c2d5be70b497
// let wm = document.querySelector(".weather")
var cityName = document.querySelector(".cityname");
var cityname=document.querySelector("#City");
var btn =document.querySelector(".btn")
let data =document.querySelector(".date")
let tem= document.querySelector(".tem")
let discription = document.querySelector(".discription");
let humidit = document.querySelector(".humiditly")
// console.log(s)
btn.addEventListener("click",e=>{
    
    let date =new Date();
    var currentVal =cityname.value;
    // data.textContent = `${date.getDay()} ${date.getMonth()} ${date.getFullYear()}` ;
    data.textContent = date.toDateString();
    cityName.textContent = cityname.value;
    weather(currentVal)
    
})

function myfn(json) {
    console.log(json)
    // console.log(json.weath)
    // content.innerText = json.weather[0].main
    // content.textContent = json.weather[0].description
    // let mainContent =  json.weather[0].main
    // wm.innerText +=json.weather[0].description;
    // let cilicus=Math.round(((json.main.temp)-32 / 1.8)) 
    tem.textContent =Math.round(json.main.temp) + " C" ; 
    discription.textContent =json.weather[0].description ;
    humidit.textContent = json.main.humidity + "%"

    

}
// let key = "bd20d14798c81ad1ecb0c2d5be70b497"
// if(key="")document.getElementById("pictgher").innerText = "key is not true"
function weather(cityname) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityname +" &appid=bd20d14798c81ad1ecb0c2d5be70b497&units=metric")
// .then(function(x){
// // console.log(x)
// return x.json();
// })
.then(response => response.json())
.then(myfn).catch(function () {
    console.log("warning somthing is wrong")
})
}


