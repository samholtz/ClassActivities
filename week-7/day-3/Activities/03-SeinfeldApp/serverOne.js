const express = require("express");
var mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "seinfeld"
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.get("/actors", function (req, res) {

    connection.query("SELECT * FROM actors order by id", function (err, result) {
        var html = "<h1>Actors Ordered BY ID<\h1>";
        html += "<ul\>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "<\p>";
            html += "<p> Name: " + result[i].name + "<\p>";
            html += "<p> Coolness Points: " + result[i].coolness_points + "<\p>";
            html += "<p> Attitude: " + result[i].attitude + "<\p>";
        }

        res.send(html);
    });
});


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});