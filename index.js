require("dotenv").config();
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var flash = require("connect-flash");
var app = express();

//set up middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false }));
app.use(ejsLayouts);
app.use(flash());
app.use(express.static(__dirname + "/public/"));

//route to the new search page
app.get("/new", function(req, res){
	res.render("weather/new");
})
//set up the homepage route
// app.get("/", function(req, res) {
// 	var weatherData = "http://api.wunderground.com/api/4777b8d76e2b5feb/conditions/q/CA/San_Francisco.json"
// 	request(weatherData, function(error, response, body){
// 		var weather = JSON.parse(body);
// 		// res.render("homepage", {weather: weather});
// 		res.send(weather.current_observation.weather)

// 	});
// });

app.get("/", function(req, res) {
	var weatherData = "http://api.wunderground.com/api/4777b8d76e2b5feb/forecast/q/CA/San_Francisco.json"
	request(weatherData, function(error, response, body){
		var weather = JSON.parse(body);
		res.render("homepage", { weather: weather });
		// res.send(weather.forecast.txt_forecast.forecastday[2])
	});
});

//controllers
app.use("/weather", require("./controllers/weather"));


var server = app.listen(process.env.PORT || 3000);

module.exports = server;

