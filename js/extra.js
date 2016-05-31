//WORKING FUNCITON FOR EXPANDING CLICKED SECTION BY 70 VS 15 & 15%

function WorkSectionClick(e) {
    var thisDiv = $(e);
    var number = thisDiv.attr('id').replace(/[^0-9\.]+/g, "");
 if (thisDiv.hasClass('openable')) {
        if (thisDiv.hasClass('closed')) {
            thisDiv.siblings().find("p.toggleText").removeClass("show").addClass("none");
            thisDiv.find("p.toggleText").removeClass("none").addClass("show");
        } else {
            thisDiv.siblings().find("p.toggleText").addClass("none").removeClass("show");
            thisDiv.find("p.toggleText").removeClass("none").addClass("show");
        }
        thisDiv.removeClass('openable').addClass("open").removeClass('closed');
        thisDiv.animate({width: '70%'}, 'slow');
        thisDiv.siblings().addClass('closed').addClass("openable").removeClass("open").animate({width: '15%'}, 'slow');
        thisDiv.siblings().find(".jobInfo").css('position','relative').css('top', '+70px');
        thisDiv.find(".jobInfo").css('position','relative').css('top', '0px');
    }
else if (thisDiv.hasClass('open'))
    {
    thisDiv.removeClass('open').removeClass("openable");
    thisDiv.animate({width: '33.3%'}, 'slow');
    thisDiv.siblings().animate({width: '33.3%'}, 'slow');
    thisDiv.siblings().find("p.toggleText").removeClass("none").addClass("show");
    thisDiv.siblings().find(".jobInfo").css('position','relative').css('top', '0px');
    }
}



// function WorkSectionClick(e) {
//     var thisDiv = $(e);
//     var number = thisDiv.attr('id').replace(/[^0-9\.]+/g, "");
//  if (thisDiv.hasClass('openable')) {
     
//         thisDiv.removeClass('openable').addClass("open").removeClass('closed');
//         thisDiv.animate({width: '70%'}, 'slow');
//         thisDiv.siblings().animate({width: '15%'}, 'slow');

//         // thisDiv.siblings().addClass('closed').addClass("openable").removeClass("open").animate({width: '15%'}, 'slow');
//         // thisDiv.siblings().find(".jobInfo").css('position','relative').css('top', '+70px');
//         // thisDiv.find(".jobInfo").css('position','relative').css('top', '0px');
//     }
// else if (thisDiv.hasClass('open'))
//     {
//     thisDiv.removeClass('open').removeClass("openable");
//     thisDiv.animate({width: '33.3%'}, 'slow');
//         thisDiv.siblings().animate({width: '33.3%'}, 'slow');

  
//     }
// }




//TO ADD FOR INTERNAL CHANGES TO EACH WORK SECTION

// $( "#testgrey" ).click(function() {
//     if ($("#testblue3").css("display") == 'none') {
//       $( "#testblue" ).slideToggle("slow");
//       $( "#testblue" ).slideToggle("slow");
//        $( "#testblue2" ).slideToggle("slow");
//         $( "#testblue3" ).delay(500).slideToggle("slow");
//          $('#testgreen').toggle('slide',{ direction: "up" }, 500);
//     }
//     else {

//       $( "#testblue" ).slideToggle("slow");
//       $( "#testblue" ).slideToggle("slow");
//        $( "#testblue3" ).slideToggle("slow");
//         $( "#testblue2" ).delay(500).slideToggle("slow");
//     }
// });


// TOGGLE SLIDE ATTEMPTS
    // $('#work1').animate('slide',{ direction: "down" }, 'slow');
    // console.log($('#work0').css('width'));
    // $('#work2').toggle('slide',{ direction: "down" }, 'slow');
    // $('#work0').toggle('slide',{ direction: "left" }, 'slow');
    // console.log($('#work0').css('width'));
    // $('#work0').toggle('slide',{ direction: "left" }, 'slow');
    // $('#work0').delay(1000).animate({width: '500px'}, 5000);

// $("#testgrey").click(function() {

//   $('#work0upper').toggle('slide',{ direction: "left" }, 600);
//   $('#work0lower').toggle('slide',{ direction: "left" }, 600);
//   $('#work0upper').css({ width: "80%" });
//   $('#work0lower').css({ width: "80%" });
//   $('#work0upper').toggle('slide',{ direction: "left" }, 1000);
//   $('#work0lower').toggle('slide',{ direction: "left" }, 1000);
//   $('#work1upper').toggle('slide',{ direction: "right" }, 1000);
//   $('#work1lower').toggle('slide',{ direction: "right" }, 1000);
//   $('#work2upper').toggle('slide',{ direction: "right" }, 1000);
//   $('#work2lower').toggle('slide',{ direction: "right" }, 1000);

// });


// IF USING ANIMATE
// var test = 30

// $('#work0').click(function() {
//       if (test == 30) {
//         $('#work0').animate({width: '100%'});
//         $('#work1').animate({width: '0px'});
//         $('#work2').animate({width: '0px'});
//         test = 70;
//         console.log(test);
//     }
//     else {
//         $('#work0').animate({width: '33.3%'});
//         $('#work1').delay(500).animate({width: '33.3%'});
//         $('#work2').delay(1000).animate({width: '33.3%'});
//         test = 30;
//         console.log(test);
//     }
// });





