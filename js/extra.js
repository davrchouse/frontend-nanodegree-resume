// $(document).ready(function(){
//         $(".description").hide();
//  });


// $(function() {
//     var state = true;

//     $("#work1_button").click(function() {
//         if ( state ) {
//           $(".work1A").show(400,"swing");
//           $(".work1B").delay(500).show(400, "swing");
//           $(".work1C").delay(1000).show(400, "swing");
//         } else {
//           $(".work1A").hide(400);
//           $(".work1B").hide(400);
//           $(".work1C").hide(400);
//         }
//         state = !state;
//       });
//     });


// $( "#work1_button" ).click(function(){
//   $( ".work1A" ).animate({ "up": "-=50px" }, "slow" );
// });





// $( "#right" ).click(function() {
//   $( ".block" ).animate({ "left": "+=50px" }, "slow" );
// });

// $( "#left" ).click(function(){
//   $( ".block" ).animate({ "left": "-=50px" }, "slow" );
// });
// $( "#shrink" ).click(function(){
//   $( ".block" ).animate({ "height": "-=50px" }, "slow" );
// });
// $( "#grow" ).click(function(){
//   $( ".block" ).animate({ "height": "+=50px" }, "slow" );
// });


$('#trigger').toggle(function() {
        $('#work0').animate({width: '50%'});
        $('#work1').animate({width: '20%'});
        $('#work2').animate({width: '30%'});
    },function() {
        $('#work0').animate({width: '33.3%'});
        $('#work1').animate({width: '33.3%'});
        $('#work2').animate({width: '33.3%'});
    });


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
