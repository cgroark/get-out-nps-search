var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require("../models");
var request = require('request');
var isLoggedIn = require("../middleware/isLoggedIn");
var parksApi = process.env.PARKS_API;
var weatherApi = process.env.WEATHER_API;


router.get("/", isLoggedIn, function(req, res) {
    db.nationalpark.findAll().then(function(wishlist){
    	res.render("parks/wishlist", {park: wishlist});
    });
});

router.post("/", function(req, res) {
	db.nationalpark.create(req.body).then(function(){
		res.redirect("/favs")
	}).catch(function(err){
		res.send("error error!", err);
	});
});


module.exports = router;

