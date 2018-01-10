require("dotenv").config();
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var flash = require("connect-flash");
var app = express();
var parksApi = process.env.PARKS_API;
var weatherApi = process.env.WEATHER_API;
var mapApi = process.env.MAPS_API;
var geocoder = require("geocoder")

//set up middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false }));
app.use(ejsLayouts);
app.use(flash());
app.use(express.static(__dirname + "/public/"));

app.get("/", function(req, res) {
		res.render("homepage")
	});


// set up the homepage route
// app.get("/", function(req, res) {
// 	var weatherData = "http://api.wunderground.com/api/" + weatherApi + "/conditions/q/CA/San_Francisco.json"
// 	request(weatherData, function(error, response, body){
// 		var weather = JSON.parse(body);
// 		// res.render("homepage", {weather: weather});
// 		res.send(weather.current_observation.weather)

// 	});
// });

// app.get("/", function(req, res) {
// 	var weatherData = "http://api.wunderground.com/api/" + weatherApi + "/forecast/q/CA/San_Francisco.json"
// 	request(weatherData, function(error, response, body){
// 		var weather = JSON.parse(body);
// 		res.render("homepage", { weather: weather });
// 		// res.send(weather.forecast.txt_forecast.forecastday[2])
// 	});
// });


// app.get("/", function(req, res) {
// 	var parkData = "https://developer.nps.gov/api/v1/parks?stateCode=" + req.params.state + "&api_key=" + parksApi;
// 	request(parkData, function(error, response, body){
// 		var park = JSON.parse(body);
// 		res.render("homepage")
// 	});
// });

//controllers
app.use("/parks", require("./controllers/parks"));
app.use("/favs", require("./controllers/favs"));



var server = app.listen(process.env.PORT || 3000);

module.exports = server;

