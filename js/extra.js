// $(document).ready(function(){
//         $(".description").hide();
//  });



var state = true;

function WorkSectionClick(e) {
    //pull the section number from the div id info
    var thisDiv = $(e);
    var number = thisDiv.attr('id').replace(/[^0-9\.]+/g, "");
    console.log(number);
    var boxA = "#desc"+number+"A";
    var boxB = "#desc"+number+"B";
    var boxC = "#desc"+number+"C";
        if ( state ) {
          $(boxA).show(400,"swing");
          $(boxB).delay(250).show(400, "swing");
          $(boxC).delay(500).show(400, "swing");
        } else {
          $(boxA).hide(400);
          $(boxB).hide(400);
          $(boxC).hide(400);
        }
        state = !state;
    }


//  if (thisDiv.hasClass('openable')) {
//         if (thisDiv.hasClass('closed')) {
//             thisDiv.siblings().find("p.toggleText").removeClass("show").addClass("none");
//             thisDiv.find("p.toggleText").removeClass("none").addClass("show");
//         } else {
//             thisDiv.siblings().find("p.toggleText").addClass("none").removeClass("show");
//             thisDiv.find("p.toggleText").removeClass("none").addClass("show");
//         }
//         thisDiv.removeClass('openable').addClass("open").removeClass('closed');
//         thisDiv.animate({width: '70%'}, 'slow');
//         thisDiv.siblings().addClass('closed').addClass("openable").removeClass("open").animate({width: '15%'}, 'slow');
//         thisDiv.siblings().find(".jobInfo").css('position','relative').css('top', '+70px');
//         thisDiv.find(".jobInfo").css('position','relative').css('top', '0px');
//     }
// else if (thisDiv.hasClass('open'))
//     {
//     thisDiv.removeClass('open').removeClass("openable");
//     thisDiv.animate({width: '33.3%'}, 'slow');
//     thisDiv.siblings().animate({width: '33.3%'}, 'slow');
//     thisDiv.siblings().find("p.toggleText").removeClass("none").addClass("show");
//     thisDiv.siblings().find(".jobInfo").css('position','relative').css('top', '0px');
//     }
// }


