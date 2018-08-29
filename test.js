var express = require("express");
var bodyParser = require("body-parser");

var app = express();
// создаем парсер для данных в формате json
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

app.post("/user", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.json(request.body.userName+ " " +request.body.userAge);
});

app.get("/", function(request, response){


});

app.listen(3000);