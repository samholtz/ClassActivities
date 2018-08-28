var inquirer = require("inquirer");

function Player(name, position, offense, defense, goodGame, badGame) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    this.goodGame = function coinFlip() {
        if (Math.floor((Math.random() * 2)) === 1) {
            this.offense++;
        }
    }
    this.badGame = function coinFlip2() {
        if (Math.floor((Math.random() * 2)) === 1) {
            this.defense++;
        }
    }

    this.printStats = function () {
        console.log(this)
    }
}
var count = 0;
function starterCreation() {

    if (count < 2) {

        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your current position?"
            }, {
                name: "offense",
                message: "How good are you at offense, between 1-10?"
            }, {
                name: "defense",
                message: "How good are you at defense, between 1-10?"
            }
        ]).then(function (starter) {
            var newPlayer = new Player(starter.name, starter.position, starter.offense, starter.defense);
            newPlayer.printStats();
            count++;
            starterCreation();
        });
    }
}
starterCreation();

function subCreation() {

    if (counter < 1) {


        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your current position?"
            }, {
                name: "offense",
                message: "How good are you at offense, between 1-10?"
            }, {
                name: "defense",
                message: "How good are you at defense, between 1-10?"
            }
        ]).then(function (sub) {
            var newPlayer = new Player(sub.name, sub.position, sub.offense, sub.defense);
            newPlayer.printStats();
            counter++;
            subCreation();
        });
    }
}
subCreation();
var starterSum = 0;


function playGame() {
    var run = 0;
    if (run < 6) {
        (Math.floor((Math.random() * 20)) + 1)
    }
    run++;

}