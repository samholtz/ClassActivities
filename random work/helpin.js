var sporty = ['Baseball', 'Football', 'Soccer', 'Golf', 'Rugby', 'Ping Pong', 'Sumo Wrestling', 'Tennis', 'Volleyball'];


$(document).ready(function () {
    renderButtons();


    for (var i = 0; i < sporty.length; i++) {

        var a = $("<button>");
        a.addClass("sports");
        a.attr("data-name", sporty[i]);
        a.text(sporty[i]);
        $("#buttonDrop").append(a);
    }
});


function renderButtons() {

    $("button").on("click", function () {
        var sportyClick = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            sportyClick + "&api_key=eCFtcFHLuNicjTk0HN6k8w5APAQTCWB1";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;
            console.log(results);
            for (var i = 0; i < 10; i++) {

                var gifDiv = $("<div class='item'>");
                var para = $('<p>');

                $('item').text(results[i].rating)
                var sportGif = $('<img>');
                sportGif.attr('src', results[i].images.fixed_height_still.url);
                sportGif.attr('data-still', results[i].images.fixed_height_still.url);
                sportGif.attr('data-animate', results[i].images.fixed_height.url);
                sportGif.attr('data-state', 'still');
                sportGif.addClass('gif')
                $('#sports-view').prepend(sportGif);
            }
            $(".gif").on("click", function () {
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        });

    })
}


$("#add-sports").on("click", function (event) {
    event.preventDefault();

    var sport = $("#sports-input").val().trim();
    sporty.push(sport);

    renderButtons();

});