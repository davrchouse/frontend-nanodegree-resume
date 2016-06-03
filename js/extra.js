$(document).ready(function(){
        $(".description").hide();
 });


var state = true;

function WorkSectionClick(e) {
    //pull the section number from the div id info
    var thisDiv = $(e);
    var number = thisDiv.attr('id').replace(/[^0-9\.]+/g, "");
    console.log(number);
    var boxA = "#desc"+number+"A";
    var boxB = "#desc"+number+"B";
    var boxC = "#desc"+number+"C";
    var icon = "#icon"+number;
        if ( state ) {
          $(icon).hide();
          $(boxA).show(400,"swing");
          $(boxB).delay(250).show(400, "swing");
          $(boxC).delay(500).show(400, "swing");
        } else {
          $(boxA).hide(400);
          $(boxB).hide(400);
          $(boxC).hide(400);
          $(icon).show(400, "swing");
        }
        state = !state;
    }


$(document).ready(function(){
      $('.icon').tooltip({title: "Click for More Info", animation: true, placement: "bottom", delay: {show: 2000, hide: 0} });
   });

