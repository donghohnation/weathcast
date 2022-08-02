// f419cd27b5d7777610c83ec9680dce19

// enter city and click search, header2 will show searched city

const enter = document.getElementById("cityInp")
enter.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    getInfo()
  }
}) 

// enter city and click search, header2 will show searched city

const searchbtn = document.getElementById("searchbtn")
searchbtn.addEventListener("click", getInfo);

function getInfo() {
  const searchedCity = document.getElementById("cityInp");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = `${searchedCity.value}`;

  // ______________________________________________

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity.value}&units=imperial&appid=f419cd27b5d7777610c83ec9680dce19`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("currentTemp").innerHTML = `current temp: ${data.main.temp.toFixed(0)}°F`
    document.getElementById("feelsLike").innerHTML = `feels like: ${data.main.feels_like.toFixed(0) }°F`
    document.getElementById("imgM").src = "http://openweathermap.org/img/w/" + data.weather.icon
  })


fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity.value}&units=imperial&appid=f419cd27b5d7777610c83ec9680dce19`)
.then(response => response.json())
.then(data =>{
  for(i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1) + "min").innerHTML = "Min: " + Number(data.list[i].main.temp_min).toFixed(0) + "°F";
  }
  for(i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1) + "max").innerHTML = "Max: " + Number(data.list[i].main.temp_max).toFixed(0) + "°F";
  }
  for(i = 0; i < 5; i++) {
    document.getElementById("img" + (i + 1)).src = " http://openweathermap.org/img/w/" + data.list[i].weather[0].icon+".png";
  }
})

.catch(err =>("something went wrong"))
}

// const cards = document.getElementById("c1");
// cards.addEventListener('mouseover', function () {
//   cards.style.background = "blue";
// });

// cards[0].addEventListener('mouseover', () => {
//   cards[0].style.background = "blue"
// })
// cards[0].addEventListener('mouseleave', () => {
//   cards[0].style.background = "rgb(253, 253, 253)"
// })
// cards[1].addEventListener('mouseover', () => {
//   cards[1].style.background = "#c9fff3"
// })
// cards[1].addEventListener('mouseleave', () => {
//   cards[1].style.background = "rgb(253, 253, 253)"
// })
// cards[2].addEventListener('mouseover', () => {
//   cards[2].style.background = "#c9fff3"
// })
// cards[2].addEventListener('mouseleave', () => {
//   cards[2].style.background = "rgb(253, 253, 253)"
// })
// cards[3].addEventListener('mouseover', () => {
//   cards[3].style.background = "#c9fff3"
// })
// cards[3].addEventListener('mouseleave', () => {
//   cards[3].style.background = "rgb(253, 253, 253)"
// })
// cards[4].addEventListener('mouseover', () => {
//   cards[4].style.background = "#c9fff3"
// })
// cards[4].addEventListener('mouseleave', () => {
//   cards[4].style.background = "rgb(253, 253, 253)"
// })


const d = new Date();
const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function checkDay(day) {
  if(day +d.getDay() > 6){
    return day +d.getDay() - 7;
  }
  else{
    return day +d.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i+1)).innerHTML = weekday[checkDay(i)];
}
