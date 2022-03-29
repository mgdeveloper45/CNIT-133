
let us, euro, canada, hongKong, yen, peso;

function dollarExchange() {
    us = parseInt(document.getElementById('us').value);
    console.log(us)
    yen = us * 110.80;
    document.getElementById('yen').value = yen.toFixed(2);
    euro = us * 0.84;
    document.getElementById('euro').value = euro.toFixed(2);
    peso = us * 19.82;
    document.getElementById('peso').value = peso.toFixed(2);
    canada = us * 1.23;
    document.getElementById('canada').value = canada.toFixed(2);
    hongKong = us * 7.76; 
    document.getElementById('hong-kong').value = hongKong.toFixed(2); 
}
$(document).ready(function(){
    $(".exchange-rate").click(function(){
      $(".form3-container").slideToggle("slow");
    });
});