$(document).ready(function () {
    $("#find").click(function () {
        //Clear Existing Details
        $("#error").html("");
        $("#gender").html("");
        $("#year").html("");
        $("#month").html("");
        $("#day").html("");

        var NICNo = $("#nic").val();
        var dayText = 0;
        var year = "";
        var month = "";
        var day = "";
        var gender = "";
        if (NICNo.length != 10 && NICNo.length != 12) {
            $("#error").html("Invalid NIC NO");
        } else if (NICNo.length == 10 && !$.isNumeric(NICNo.substr(0, 9))) {
            $("#error").html("Invalid NIC NO");
        }
        else {
            // Year
            if (NICNo.length == 10) {
                year = "19" + NICNo.substr(0, 2);
                dayText = parseInt(NICNo.substr(2, 3));
            } else {
                year = NICNo.substr(0, 4);
                dayText = parseInt(NICNo.substr(4, 3));
            }

            // Gender
            if (dayText > 500) {
                gender = "Female";
                dayText = dayText - 500;
            } else {
                gender = "Male";
            }

            // Day Digit Validation
            if (dayText < 1 && dayText > 366) {
                $("#error").html("Invalid NIC NO");
            } else {

                //Month
                if (dayText > 335) {
                    day = dayText - 335;
                    month = "December";
                }
                else if (dayText > 305) {
                    day = dayText - 305;
                    month = "November";
                }
                else if (dayText > 274) {
                    day = dayText - 274;
                    month = "October";
                }
                else if (dayText > 244) {
                    day = dayText - 244;
                    month = "September";
                }
                else if (dayText > 213) {
                    day = dayText - 213;
                    month = "Auguest";
                }
                else if (dayText > 182) {
                    day = dayText - 182;
                    month = "July";
                }
                else if (dayText > 152) {
                    day = dayText - 152;
                    month = "June";
                }
                else if (dayText > 121) {
                    day = dayText - 121;
                    month = "May";
                }
                else if (dayText > 91) {
                    day = dayText - 91;
                    month = "April";
                }
                else if (dayText > 60) {
                    day = dayText - 60;
                    month = "March";
                }
                else if (dayText < 32) {
                    month = "January";
                    day = dayText;
                }
                else if (dayText > 31) {
                    day = dayText - 31;
                    month = "Febuary";
                }
                dob.value = (year+"-"+month+"-"+day);

                // Age
                var today = new Date();
                var birthday = new Date(dob.value);
                var YearsOld =  Number(today.getTime()-birthday.getTime())/(365*24*3600*1000);
                var x= Math.trunc(YearsOld);
                age.value = ("You are " + x + " years old.");

                // Show Details
                $("#gender").html(gender);
                $("#dob").html(dob.value);
                $("#age").html(age.value);

            }
        }
    });
});