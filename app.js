var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
})

var PORT;
var IP;
//Set ENV Vars
if (process.env.PORT) {
	PORT = process.env.PORT;
	console.log(PORT);
} else {
	PORT = 4000;
	console.log(PORT);
}

//Start the server
app.listen(PORT, function(){
    console.log("WebDev path app has started! on " + PORT);
});