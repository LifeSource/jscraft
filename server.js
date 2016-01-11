"use strict";

var express = require("express");

var app = express();

app.set("view engine", "jade");
app.set("view", __dirname + "views");

app.use(express.static("./dist"));
app.use("/*", express.static("./dist"));

app.listen(8000, function() {
    console.log("Express server started, listening on port 8000");
});
