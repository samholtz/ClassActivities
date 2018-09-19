var Todo = require("../models/todo")

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/all", function (req, res) {
    Todo.findAll({}).then(function (results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function (req, res) {

    console.log("starwars Data:");
    console.log(req.body);

    Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });
};
