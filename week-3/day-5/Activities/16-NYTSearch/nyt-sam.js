$(document).ready(function () {

    $("#run-search").on("click", function (event) {
        event.preventDefault();

        var searchTerm = $("#search-term").val().trim();
        var numRecords = $("#article-count").val().trim();
        var startYear = $("#start-year").val().trim();
        var endYear = $("#end-year").val().trim();

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "xxx",
            'q': $('#q').text(),
            // 'fq':
            //     'begin_date': ,
            // 'end_date':
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result);
        }).fail(function (err) {
            throw err;
        });

    });



});