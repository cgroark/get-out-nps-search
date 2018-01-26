var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require("../models");
var request = require('request');
var isLoggedIn = require("../middleware/isLoggedIn");
var parksApi = process.env.PARKS_API;
var weatherApi = process.env.WEATHER_API;

//render favorites page for specific users
router.get("/", isLoggedIn, function(req, res) {
    db.user.findOne({
    	where: {id: req.user.id},
    	include: [db.nationalpark]
    }).then(function(wishlist){
    	res.render("parks/wishlist", {user: wishlist});
    });
});

//add favorite parks to db for specific user
router.post("/", isLoggedIn, function(req, res) {
	db.nationalpark.findOrCreate({
        where: {
            name: req.body.name,
        },
        defaults: {
            userId: req.user.id,
            name: req.body.name,
            designation: req.body.designation,
            state: req.body.state,
            Latlong: req.body.Latlong,
            url: req.body.url,
            weatherInfo: req.body.weatherInfo,
            description: req.body.description
        }
    }).spread(function(park, wasCreated){
        if(wasCreated){
            res.redirect("/favs")
        } else {
            res.redirect("/favs")
        }
    }).catch(function(err){
		console.log("error error!", err);
        res.status(500).send("An error occurred!");
	});
});

//delete route to remove favorited parks

router.delete("/:id", function(req, res){
    db.nationalpark.destroy({
        where: {id: req.params.id}
    }).then(function(deleted){
        console.log("delete=", deleted);
        res.send("success");
    });
})

module.exports = router;
