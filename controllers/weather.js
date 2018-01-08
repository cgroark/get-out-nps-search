var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require("../models");
var request = require('request');



router.post("/", function(req,res){
	db.weather.create(req.body).then(function(newSearch){
		res.render("/weather/" + newSearch.id);
	}).catch(function(err){
		console.log("err", err);
		res.send("oh no");
	});
});

module.exports = router;