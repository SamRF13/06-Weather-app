
var APIKeY = "e5c8b0668ae11356f8d44b8fdef87fc0"

var URL = 'https://api.openweathermap.org/data/2.5/forecast?q='

var URL2 = '&appid=e5c8b0668ae11356f8d44b8fdef87fc0&units=metric'

var cityName = document.getElementById('cityName') ;
var cityWeather1 = document.getElementById('cityWeather1') ;
var cityWeather2 = document.getElementById('cityWeather2');
var cityWeather3 = document.getElementById('cityWeather3');
var cityWeather4 = document.getElementById('cityWeather4');
var cityWeather5 = document.getElementById('cityWeather5');

var cityWeather1Img = document.getElementById('cityWeather1Img')

const searchHistory= document.getElementById('searchHistory');

var searchList= "";

/*
var searchCity = localStorage.getItem("searchCity");
  $("textarea#search-btn").text(searchCity)
*/

const searcher =document.getElementById("searcher");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.querySelector("input[type='text']");

searchBtn.addEventListener("click", function() {
console.log(URL+searcher.value+URL2);

  fetch(URL+searcher.value+URL2, {

      cache: 'reload',
  })
      .then(function (response) {
      return response.json();
  })
      .then(function (data) {
      console.log(data);
      cityName.textContent = data.city.name;
      cityWeather1.textContent =  data.list[0].dt_txt + ' ' + data.list[0].main.temp + ' °C';
      cityWeather1Img.setAttribute('src', 'https://openweathermap.org/img/wn/'+ data.list[0].weather[0].icon+ '@2x.png')
      cityWeather2.textContent =  data.list[8].dt_txt + ' ' + data.list[8].main.temp + ' °C';
      cityWeather2Img.setAttribute('src', 'https://openweathermap.org/img/wn/'+ data.list[8].weather[0].icon+ '@2x.png')
      cityWeather3.textContent =  data.list[16].dt_txt + ' ' + data.list[16].main.temp + ' °C';
      cityWeather3Img.setAttribute('src', 'https://openweathermap.org/img/wn/'+ data.list[16].weather[0].icon+ '@2x.png')
      cityWeather4.textContent =  data.list[24].dt_txt + ' ' + data.list[24].main.temp + ' °C';
      cityWeather4Img.setAttribute('src', 'https://openweathermap.org/img/wn/'+ data.list[24].weather[0].icon+ '@2x.png')
      cityWeather5.textContent =  data.list[32].dt_txt + ' ' + data.list[32].main.temp + ' °C';
      cityWeather5Img.setAttribute('src', 'https://openweathermap.org/img/wn/'+ data.list[32].weather[0].icon+ '@2x.png')

        if (searchHistory.childNodes.length > 4) searchHistory.removeChild (searchHistory.firstChild);

      searchList= '<button id="'+cityName.textContent+'" value= "'+cityName.textContent+'" onclick="historyFunction(this.id)">'+cityName.textContent+'</button>';
      searchHistory.innerHTML+=searchList;

  });


});


  function historyFunction(buttonID)  {

    fetch(URL+document.getElementById(buttonID).value+URL2, {
  
        cache: 'reload',
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        cityName.textContent = data.city.name;
        cityWeather1.textContent =  data.list[0].dt_txt + ' ' + data.list[0].main.temp + ' °C';
        cityWeather2.textContent =  data.list[8].dt_txt + ' ' + data.list[8].main.temp + ' °C';
        cityWeather3.textContent =  data.list[16].dt_txt + ' ' + data.list[16].main.temp + ' °C';
        cityWeather4.textContent =  data.list[24].dt_txt + ' ' + data.list[24].main.temp + ' °C';
        cityWeather5.textContent =  data.list[32].dt_txt + ' ' + data.list[32].main.temp + ' °C';
  });
  
  }
  





/*
fetch(URL+cityName+URL2, {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
})
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    console.log(data);
    cityName.textContent = data.city.name;
    cityWeather1.textContent =  data.list[0].dt_txt + ' ' + data.list[0].main.temp + ' °C';
    cityWeather2.textContent =  data.list[8].dt_txt + ' ' + data.list[0].main.temp + ' °C';
    cityWeather3.textContent =  data.list[16].dt_txt + ' ' + data.list[0].main.temp + ' °C';
    cityWeather4.textContent =  data.list[24].dt_txt + ' ' + data.list[0].main.temp + ' °C';
    cityWeather5.textContent =  data.list[32].dt_txt + ' ' + data.list[0].main.temp + ' °C';
});

*/
/*
document.getElementById("save9").addEventListener("click", function ()
{
    var message10 = $('textarea#text9').val();
    localStorage.setItem("message9", message10) ;
} ,);

*/

/*
localstorage.setitem('item', item);

localstorage.getitem("item");
*/



