$(document).ready (function() {
});

    var queryURL = "https://tasty.p.rapidapi.com/recipes/detail";
    $.ajax({
        url: queryURL,
        method: "GET"
    });
    
    
    var unirest = require("unirest");

var req = unirest("GET", "https://tasty.p.rapidapi.com/recipes/detail");

req.query({
	"id": "5586"
});

req.headers({
	"x-rapidapi-host": "tasty.p.rapidapi.com",
	"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
















    
    
    
    
    







