// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var orm = require("../config/orm.js");


// // Routes
// // =============================================================
// module.exports = function (app) {

//   // Search for Specific Character (or all characters) then provides JSON
//   app.get("/api/:characters?", function (req, res) {

//     // If the user provides a specific character in the URL...
//     if (req.params.characters) {

//       // Then display the JSON for ONLY that character.
//       // (Note how we're using the ORM here to run our searches)
//       orm.searchCharacter(req.params.characters, function (data) {
//         res.json(data);
//       });
//     }

//     // Otherwise...
//     else {
//       // Otherwise display the data for all of the characters.
//       // (Note how we're using the ORM here to run our searches)
//       orm.allCharacters(function (data) {
//         res.json(data);
//       });
//     }

//   });

//   // If a user sends data to add a new character...
//   app.post("/api/new", function (req, res) {

//     // Take the request...
//     var character = req.body;

//     // Then send it to the ORM to "save" into the DB.
//     orm.addCharacter(character, function (data) {
//       console.log(data);
//     });

//   });
// };
var Allchar = require("../model/character.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("/api/all", function (req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Allchar.findAll({}).then(function (results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function (req, res) {

    console.log("starwars Data:");
    console.log(req.body);

    Allchar.create({
      routeName: req.body.routeName,
      name: req.body.name,
      role: req.body.role,
      age: req.body.age,
      forcePoints: req.body.forcePoints
    }).then(function (results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};