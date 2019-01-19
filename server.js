var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded( { extended: true}));
app.use(express.json());

require("./app/routing/apiRoute")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT)
});