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

//controllers
app.use("/parks", require("./controllers/parks"));
app.use("/favs", require("./controllers/favs"));
app.use("/weather", require("./controllers/weather"));




var server = app.listen(process.env.PORT || 3000);

module.exports = server;

