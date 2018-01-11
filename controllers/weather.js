var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require("../models");
var isLoggedIn = require("../middleware/isLoggedIn");

var request = require('request');
var parksApi = process.env.PARKS_API;
var weatherApi = process.env.WEATHER_API;


router.post("/", isLoggedIn, function(req, res){
	db.nationalpark.find({
		where: {
			name: req.body.name
			}
		}).then(function(info){
			var latlong = info.Latlong;
			var learning = latlong.split(":").splice(1);
			var enoughAlready = learning[0].split(",")[0] + "," + learning[1];
			var weatherUrl = "http://api.wunderground.com/api/" + weatherApi + "/forecast10day/q/" + enoughAlready + ".json";
			request(weatherUrl, function(error, response, body){
				var weatherData = JSON.parse(body).forecast;
				weatherData.parkStuff = info;
				console.log(weatherData);
				res.render("parks/park", {weatherData: weatherData});
			});
	});
});


module.exports = router;
