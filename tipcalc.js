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
    var people = parseInt( $("#people").val() );
    var total = bill * tip / people / 100;
    var split = (bill + total) / people;
    console.log(bill);
    console.log(tip);
    console.log(people);
    if (isNaN(bill)) {
        alert("You must enter a bill amount.");
    }
    if (isNaN(tip)) {
        alert("You must choose a level of service and tip amount.");
    }


    $("#total").val(total);
    $("#perperson").val(split);
    

}


$(function () {
$("#calcbtn").on("click", calc);
});