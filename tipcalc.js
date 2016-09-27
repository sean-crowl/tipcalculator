function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }

var $ = function (id) {
return document.getElementById(id);
}
var calc = function () {
    var bill = parseInt( $("bill").value );
    var tip = parseInt( $("service").value );
    var people = parseInt( $("people").value );
    var total = bill * tip / people / 100;
    var totalp = (bill + total) / people;

    $("total").value = total.toFixed(2);
    $("perperson").value = totalp.toFixed(2);
} 

onload = function () {
$("calcbtn").onclick = calc;
}