// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function (req, res) {
  res.send("Hello world");
});

// TODO: make two more routes

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)
app.get("/grabData", function (req, res) {
  res.send("Hello from grab");
});
// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?
app.get("/scrape", function (req, res) {
  // Parses our HTML and helps us find elements
  var cheerio = require("cheerio");
  // Makes HTTP request for HTML page
  var request = require("request");

  // First, tell the console what server.js is doing
  console.log("\n***********************************\n" +
    "Grabbing every thread name and link\n" +
    "from reddit's webdev board:" +
    "\n***********************************\n");

  request("https://old.reddit.com/r/webdev/", function (error, response, html) {

    var $ = cheerio.load(html);
    var results = [];
    $("p.title").each(function (i, element) {

      var title = $(this).text();
      var link = $(this).children().attr("href");

      var myCleanObj = {
        title: title,
        link: link
      }

      console.log("this is what we want to save", myCleanObj)
      db.scrapedData.insert(myCleanObj, function (err, thingWeJustSaved) {

      })


      results.push({ myCleanObj });

    });
    res.send("scrapping...check terminal");
  });
});
/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function () {
  console.log("App running on port 3000!");
});