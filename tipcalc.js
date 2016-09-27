function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }

var calc = function () {
    var bill = parseInt( $("#bill").val() );
    var tip = parseInt( $("#service").val() );
    var people = ( $("#people").val() );
    people = people == "" ?"1": people; 
    var total = bill * tip / people / 100;
    var totalfixed = total.toFixed(2);
    var split = (bill + total) / people;
    var splitfixed = split.toFixed(2);
    people = parseInt(people);
    if (isNaN(bill)) {
        alert("You must enter a bill amount.");
    }
    if (isNaN(tip)) {
        alert("You must choose a level of service and tip amount.");
    }

    $("#total").val(totalfixed)
    $("#perperson").val(splitfixed)

}

$(function () {
$("#calcbtn").on("click", calc);
});