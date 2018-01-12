var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require("../models");
var request = require('request');
var isLoggedIn = require("../middleware/isLoggedIn");
var parksApi = process.env.PARKS_API;
var weatherApi = process.env.WEATHER_API;


router.get("/", isLoggedIn, function(req, res) {
    db.user.findOne({
    	where: {id: req.user.id},
    	include: [db.nationalpark]
    }).then(function(wishlist){
        console.log(wishlist);
    	res.render("parks/wishlist", {user: wishlist});
    });
});

router.post("/", function(req, res) {
    console.log(req.body.name,"###########");
	db.nationalpark.create(req.body).then(function(){
		res.redirect("/favs")
	}).catch(function(err){
		res.send("error error!", err);
	});
});


module.exports = router;

 // name: req.body.name,
 //        state: req.body.state,
 //        Latlong: req.body.latLong,
 //        designation: req.body.designation,
 //        url: req.body.url,
 //        userId: req.body.userId,
 //        description: req.body.description,
 //        weatherInfo: req.body.weatherInfo


