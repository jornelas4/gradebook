let studentArray = [];

$(document).ready(function(){


    $("#submit").click(results);
    $("#sortpercent").click(sortPercentage);
    $("#sortName").click(sortName);


    function results(event) {
        event.preventDefault();

        var possiblepoints =
            {
                firstName: "",
                lastName: "",
                pointsEarned: 0,
                pointsPossible: 0,
                calculation: 0

            };

        possiblepoints.firstName = $("#fname").val();
        possiblepoints.lastName = $("#lname").val();
        possiblepoints.pointsEarned = $("#pointsEarned").val();
        possiblepoints.pointsPossible = $("#pointsPossible").val();


        var calculation = Math.round(possiblepoints.pointsEarned / possiblepoints.pointsPossible * 100);

        $("#resultsOutput").text(`${possiblepoints.firstName} 
    ${possiblepoints.lastName} results are: ${calculation.toFixed()}%`);

        possiblepoints.calculation = calculation;

        if (calculation < 60) {
            $('#letterOutput').text("C");
        } else if (calculation < 80) {
            $("#letterOutput").text("B");
        } else {
            $("#letterOutput").text("A");
        }

        studentArray.push(possiblepoints);

        var output = "";

        for (var studentInfo of studentArray){

            output += studentInfo.firstName;
        }

        $("#letterOutput").text(output);

        var poutput = "";

        for (var studentInfo of studentArray){

            poutput += studentInfo.calculation;
        }

        $("#percentOutput").text(poutput);

    }

    function sortPercentage() {
        studentArray.sort(function (a, b) {
            if (a.calculation < b.calculation) {
                return -1;
            } else if (a.calculation < b.calculation) {
                return 1;
            } else {
                return 0;
            }
        });

        let poutput = "";

        for (let studentInfo of studentArray) {

            poutput += studentInfo.calculation;

        }

        $("#percentOutput").text(poutput);
    }

    function sortName() {
        studentArray.sort(function (a, b) {
            if (a.firstName < b.firstName) {
                return -1;
            } else if (a.firstName < b.firstName) {
                return 1;
            } else {
                return 0;
            }
        });

        let output = "";

        for (let studentInfo of studentArray) {

            output += studentInfo.firstName + "  ";

        }

        $("#letterOutput").text(output);
    }




});