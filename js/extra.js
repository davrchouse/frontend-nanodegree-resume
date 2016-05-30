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


$( "#work0title" ).click(function() {
  $( "#description1" ).animate({ "height": "+=50px" }, "slow" );
});
