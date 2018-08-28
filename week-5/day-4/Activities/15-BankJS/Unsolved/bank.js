var fs = require("fs");
// create 2 variables to hold the transactions and the amount if we have it

var transaction = process.argv[2];
var amount = process.argv[3];

// calculate total

if (transaction === 'total') {

} else if (transaction === 'withdraw') {

} else if (transaction === 'deposit') {

} else if (transaction === 'lotto') {

}

function calculateTotal() {
    // split what is in the file

}

fs.readFile("bank.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }

    var output = data.split(", ")


    function getSum(total, num) {

        return parseFloat(total) + parseFloat(num);
    }

    console.log(output.reduce(getSum).toFixed(2));


});

// deposit --> append a positive number to the file

// withdraw --> add a negative amount to the bank balance

// Lotto --> subtract from bank balance, unless a random number is hit, then add back a larger amount