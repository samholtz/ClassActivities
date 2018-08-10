$(document).ready(function () {


    var studentEnrollmentCount = 0;

    function updateStudentEnrollmentCount() {
        // studentEnrollmentCount runs from the outer scope, not global
        studentEnrollmentCount++;
        $("h2").text("Student Enrollment: " + studentEnrollmentCount);
    };

    $("button").on("click", function (event) {
        event.preventDefault();
        console.log("cicked")

        // capture the input
        var studentName = $("input").val();

        // append input to the screeen
        // create tr
        var tr = $("<tr>");
        // create td
        var td = $("<td>");
        // set contents of the td
        td.text(studentName);
        // append td to the tr
        tr.append(td);
        // append the tr to the screen
        $("table").append(tr);
        // clear input
        $("input").val("");
        // update student enrollment count

        updateStudentEnrollmentCount();

    });





















});