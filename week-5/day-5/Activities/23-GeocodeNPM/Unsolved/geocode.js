// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)

var geocoder = require('geocoder');
var userInput = process.argv[2];
// Geocoding
geocoder.geocode(userInput, function (err, data) {
    // do something with data
    console.log(data);
});

// Reverse Geocoding
geocoder.reverseGeocode(33.7489, -84.3789, function (err, data) {
    // do something with data
});

// Setting sensor to true
geocoder.reverseGeocode(33.7489, -84.3789, function (err, data) {
    // do something with data
}, { sensor: true });

// Setting language to German
geocoder.reverseGeocode(33.7489, -84.3789, function (err, data) {
    // do something with data
}, { language: 'de' });


// Selecting another provider to do reverse geocoding
// Currently only geonames and yahoo placefinder are supported
geocoder.selectProvider("geonames", { "username": "demo" });

// Output will be roughly in the same format as Google's
geocoder.reverseGeocode(33.7489, -84.3789, function (err, data) {
    // do something with data
});

// see http://developer.yahoo.com/geo/placefinder/guide/index.html
geocoder.selectProvider("yahoo", { "appid": "xxx" });

// Output will be roughly in the same format as Google's
geocoder.reverseGeocode(33.7489, -84.3789, function (err, data) {
    // do something with data
});


// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address
