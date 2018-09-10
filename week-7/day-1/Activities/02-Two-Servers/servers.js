// p1
var http = require("http");

const server1 = http.createserver(function (request, response) {
    response.end("You look great today")
});
const server2 = http.createserver(function (request, response) {
    response.end("You look terrible today")
});

server1.listen(7000, function () {
    console.log("listening on 7000")
});

server2.listen(7500, function () {
    console.log("listening on 7500")
});