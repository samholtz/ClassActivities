// Dependencies
// =============================================================

// Require the sequelize library
// Require the connection to the database (connection.js)
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// Create a "Book" model with the following configuration
var allBooks = sequelize.define("allbooks", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER
});
// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB
allBooks.sync();
// Export the book model for other files to use
module.exports = allBooks;