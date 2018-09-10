const http = require("http");
const fs = require("fs");

const PORT = 8080;
const server = http.createServer(function (req, res) {
    const route = req.url;


    if (route === '/') {
        displayPage("index.html", res, 200)
    } else if (route === '/foods') {
        displayPage("foods.html", res, 200);
    } else if (route === '/movies') {
        displayPage("movies.html", res, 200);
    } else if (route === '/frameworks')
        displayPage("frameworks.html", res, 200);
    else {
        displayPage("404.html", res, 404);
    }
});

const displayPage = function (page, res, status) {
    fs.readFile(__dirname + "/" + page, function (err, html) {
        res.writeHead(200, { "content-type": "text/html" })
        res.end(html);
    })
}


server.listen(PORT, function () {


});
