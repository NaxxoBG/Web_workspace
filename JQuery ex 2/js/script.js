//Call to function
$("#orangeBoxId").animate({left: "+=200"},"slow",function() {squareMovement(this)}).delay(2000);

//Declaration of function
function squareMovement(IdRef) {
    $(IdRef).animate({top: "+=100"}).delay(2000).animate({left: "+=100"}).delay(2000).animate({top: "-=100"}).delay(2000).animate({left: "-=100"}, function(){squareMovement(IdRef);}).delay(2000);
}


$("stopButtonId").click(function() {
    $("#orangeBoxId").stop(true);
});