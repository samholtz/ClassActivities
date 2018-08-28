// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:
var inquirer = require("inquirer");

inquirer
    .prompt([

        {
            type: "input",
            message: "What is your username?",
            name: "username"
        },
        {
            type: "confirm",
            message: "are you sure?",
            name: "confirm",
            default: true

        },
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        {
            type: "input",
            message: "Are you hungry",
            name: ["yes", "no"],
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        {
            type: "list",
            message: "What would you like to eat?",
            choices: ["Pizza", "Chicken", "Soup"],
            name: "food"
        },

        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }


    ])

    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {

            console.log("Your " + inquirerResponse.food + " is ready!\n");
        }
        else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
    });
//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
