$(document).ready(function(){

    $("#submit").click(results);

    function results(event) {
        event.preventDefault();

        var possiblepoints =
            {
                firstName: "",
                lastName: "",
                pointsEarned: 0,
                pointsPossible: 0

            };

        possiblepoints.firstName = $("#fname").val();
        possiblepoints.lastName = $("#lname").val();
        possiblepoints.pointsEarned = $("#pointsEarned").val();
        possiblepoints.pointsPossible = $("#pointsPossible").val();


        var calculation = Math.round(possiblepoints.pointsEarned / possiblepoints.pointsPossible * 100);

        $("#resultsOutput").text(`${possiblepoints.firstName} 
    ${possiblepoints.lastName} results are: ${calculation.toFixed()}%`);

        if (calculation < 60) {
            $('#letterOutput').text("C");
        } else if (calculation < 80) {
            $("#letterOutput").text("B");
        } else {
            $("#letterOutput").text("A");
        }
    }

});