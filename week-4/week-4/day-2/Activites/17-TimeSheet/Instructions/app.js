$("button").on("click", function () {
    var employeeName = $("#employeeName").val();
    var role = $("#role").val();
    var startDate = $("#startDate").val();
    var monthlyRate = $("#monthlyRate").val();


    // clear these fields
    $("#employeeName").val("");
    $("#role").val("");
    $("#startDate").val("");
    $("#monthlyRate").val("");

    console.log(employeeName, role, startDate, monthlyRate);

});