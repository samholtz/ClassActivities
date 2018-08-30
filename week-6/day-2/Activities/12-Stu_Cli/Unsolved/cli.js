// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var type = process.argv[2];
var userInput = process.argv.slice(3).join(" ")


if (type === 'show') {
    console.log('type: ' + type + ' name: ' + userInput)
    findtTvShow(userInput);

} else if (type === 'actor') {
    console.log('type: ' + type + ' name: ' + userInput)
    findActor(userInput);

} else {
    console.log(error)
}

function findtTvShow(show) {
    var request = require('request');
    request('http://api.tvmaze.com/singlesearch/shows?q=' + show, function (error, response, body) {
        if (!error) {

            var info = JSON.parse(body);
            var name = info.name;
            var rating = info.rating.average;
            var genre = info.genres.join(', ');
            var network = info.network.name;
            var summary = info.summary;

            console.log("Show name: " + name + "\n" + "Show rating: " + rating + "\n" + "Show genre: " + genre + "\n" + "Show network: " + network + "\n" + "Show summary: " + summary)

        } else {
            console.log(error);
        }

    });
}

function findActor() {
    var request = require('request');
    request('http://api.tvmaze.com/search/people?q=' + userInput, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('name:' + JSON.parse(body)[0].person.name);
        console.log('country: ' + JSON.parse(body)[0].person.country.name);
        console.log('url: ' + JSON.parse(body)[0].person.url);
        console.log('gender: ' + JSON.parse(body)[0].person.gender);
        console.log('birthday: ' + JSON.parse(body)[0].person.birthday);
    });
}