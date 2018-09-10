const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);

    // RESERVATIONS
    // =============================================================
    var reservations = [
        {
            Name: "Jim",
            partySize: 5,
            Time: "5:30",
            Date: 'Sepstember 7, 2018'
        },
    ];

    // Routes
    // =============================================================

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "restaurant.html"));
    });

    app.get("/view_tables", function (req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
    });

    app.get("/make_reservation", function (req, res) {
        res.sendFile(path.join(__dirname, "reservations.html"));
    });

    // Displays all characters
    app.get("/api/characters", function (req, res) {
        return res.json(characters);
    });

    // Displays a single character, or returns false
    app.get("/api/characters/:character", function (req, res) {
        var chosen = req.params.character;

        console.log(chosen);

        for (var i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                return res.json(characters[i]);
            }
        }

        return res.json(false);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/reservations", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newReservations = req.body;
        console.log(newReservations)
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

        // console.log(newcharacter);

        // characters.push(newcharacter);

        // res.json(newcharacter);
    });

    // Starts the server to begin listening
    // =============================================================

});

