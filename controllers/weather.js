var express = require('express');
var router = express.Router();
var async = require("async");
var bodyParser = require('body-parser');
var db = require("../models");
var isLoggedIn = require("../middleware/isLoggedIn");

var request = require('request');
var parksApi = process.env.PARKS_API;
var weatherApi = process.env.WEATHER_API;

router.post("/", isLoggedIn, function (req, res){
	var info;
	var weatherData;

	function fn1(callback){
		console.log("nnnnnnammmmm", req.body.name)
		db.nationalpark.find({
		where: {
			name: req.body.name
			}
		}).then (function (info){
			callback(null, info);
		})
	}
	function fn2(info, callback){
		var latlong = info.Latlong;
		var learning = latlong.split(":").splice(1);
		var enoughAlready = learning[0].split(",")[0] + "," + learning[1];
		var weatherUrl = "http://api.wunderground.com/api/" + weatherApi + "/forecast10day/q/" + enoughAlready + ".json";
		request(weatherUrl, function (error, response, body){
			weatherData = JSON.parse(body).forecast;
			weatherData.parkStuff = info;
			callback(null, weatherData)
		})
	}
	async.waterfall([fn1, fn2], function(err, results) {
	  res.render("parks/park", {weatherData: weatherData});
	});

});
module.exports = router;

