var express = require("express");

var bodyParser = require('body-parser');

var serve = express();

// serve.use(bodyParser.json());
serve.use(bodyParser.urlencoded({ extended: true }))


serve.post("/", function (request, response) {
    console.log(request.body);
    var msg = "Welcome " + request.body.uname;
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.end(msg);
});

serve.get("/", function (request, response) {
    console.log(request.query);
    var msg = "Welcome " + request.query.uname;
    // response.setHeader("Access-Control-Allow-Origin", "*");
    response.jsonp(request.query);
    response.end();
});

serve.listen(7000);