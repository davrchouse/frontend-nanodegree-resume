$(document).ready(function(){
        $(".description").hide();
 });


$(function() {
    var state = true;
    $("#work1_button").click(function() {
        if ( state ) {
          $("#desc0A").show(400,"swing");
          $("#desc0B").delay(500).show(400, "swing");
          $("#desc0C").delay(1000).show(400, "swing");
        } else {
          $("#desc0A").hide(400);
          $("#desc0B").hide(400);
          $("#desc0C").hide(400);
        }
        state = !state;
      });
    });



