var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function doSomething(str, callback) {
    console.log(str);
    callback();
}


// Write a function that runs a function argument if
// its other argument is truthy.
function runSomething(arg, cb) {
    if (arg === true) {
        cb();
    }
}


// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function accept(F, V) {

    return function () {
        return F(V);
    }

}


// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?




// Interview question
sum(5)(10);
function sum(a) {
    return function (b) {
        return a + b;
    }
}