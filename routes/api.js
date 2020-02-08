var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var moment = require('moment');

var d2d = require('degrees-to-direction');


router.get('/cookie', function(req, res, next) {
  res.cookie("lat", req.query.lat);
  res.cookie("lon", req.query.lon);
  console.log("testing this ===============" +req.query.lon);
  next();

});


// get current conditions
router.get('/currently', function(req, res, next) {
  var lat = req.query.lat
  var lon = req.query.lon
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=imperial&appid='+process.env.API)
  .then(response => response.json())
  .then(data => {
      var current_weather = {
        temp: Math.round(data.main.temp),
        high: Math.round(data.main.temp_max),
        low: Math.round(data.main.temp_min),
        humid: data.main.humidity,
        wind: Math.round(data.wind.speed),
        deg: data.wind.deg,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        location: data.name

      }
      res.send(current_weather);
    })
  .catch(err => err)
});



// get hourly forecast
router.get('/forecast', function(req, res, next) {
  var lat = req.query.lat
  var lon = req.query.lon
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=imperial&appid='+process.env.API)
  .then(response => response.json())
  .then(data => {
      var list = data.list;
      var dl = data.list;
      var hourly_forecast = []

      for (i=0; i < 8; i++){
        var date = dl[i].dt_txt
        var time = dl[i].dt
        var x = new Date(time*1000);
        function formatAMPM(date) {
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? '0'+minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
        }
        
        var time = formatAMPM(x)

        var temp = Math.round(dl[i].main.temp)
        var description = dl[i].weather[0].description
        var icon = dl[i].weather[0].icon
        var wind = Math.round(dl[i].wind.speed)
        var angle =  dl[i].wind.deg
        var card = d2d(dl[i].wind.deg)
        var day = {
          time: time,
          date: date,
          temp: temp,
          description: description,
          icon: icon,
          wind: wind,
          deg: angle,
          card: card,
        };
        hourly_forecast.push(day) 
      } 
      res.send(hourly_forecast);
    })
  .catch(err => err)

});


module.exports = router;
