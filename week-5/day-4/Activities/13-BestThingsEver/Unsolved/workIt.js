// require fs package
var fs = require("fs");

// use fs to read the file
fs.readFile("best_things_ever.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }

    console.log(data);
});

// parse through the file content splitting them by coma separation and store contents into output array
var output = data.split(",");

// Loop Through the newly created output array
for (var i = 0; i < output.length; i++) {

    // Print each element (item) of the array/
    console.log(output[i]);
};