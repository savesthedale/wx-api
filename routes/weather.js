var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
var cookieParser = require('cookie-parser');
var session = require('express-session');


// GET request to create cookie
router.get('/', function(req, res, next) {
  console.log("my lat: " + req.query.lat);
  console.log("my long: " + req.query.lon);
  res.cookie("lat", req.query.lat);
  res.cookie("lon", req.query.lon);
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+req.query.lat+'&lon='+req.query.lon+'&units=imperial&appid='+process.env.API)
  .then(response => response.json())
  .then(data => {
      var weather = data.weather;
      var main = data.main;
      var desc = weather[0].description;
      var icon = weather[0].icon; 
      var temp = Math.round(data.main.temp);
      var s = new Date(data.sys.sunrise).toLocaleDateString("en-US")
      var sys = data.sys;    
      res.render('weather', {display: "none", icon: icon, temp:temp, weatherdisplay: "flex", desc:desc , data: data, main:main, weather: weather[0]});
    })
  .catch(err => err)

});
module.exports = router;
