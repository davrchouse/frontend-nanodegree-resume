$(document).ready(function(){
        $(".description").hide();
 });


$(function() {
    var state = true;

    $("#work1_button").click(function() {
        if ( state ) {
          $(".work1A").show(400,"swing");
          $(".work1B").delay(500).show(400, "swing");
          $(".work1C").delay(1000).show(400, "swing");
        } else {
          $(".work1A").hide(400);
          $(".work1B").hide(400);
          $(".work1C").hide(400);
        }
        state = !state;
      });
    });