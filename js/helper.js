/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="brown-text" id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="brown-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="brown-text">mobile</span><span class="phone">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="brown-text">email</span><a href="#" class="email">%data%</a></li>';
var HTMLtwitter = '<li class="flex-item"><span class="brown-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="brown-text">github</span><a href="#" class="github">%data%</a></li>';
var HTMLblog = '<li class="flex-item"><span class="brown-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="brown-text">location</span><span class="location">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLprofileStart = '<div id="profile"><h2>Profile</h2></div>';
var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>';
var HTMLblueText = '<span class="blue">%data%</span>'

var HTMLskillsHeader = '<h2 id="skills-h2">Skills</h2>'
var HTMLskillsStart = '<ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="right">%data%</span></li>';
var HTMLbrownStars = '<span class="brown-star">%data%<span>'
var HTMLwhiteDots = '<span class="white-dot">%data%<span>'

var HTMLworkStart = '<div id="work#num#" class="flex-box gray"><div id="leftCol" class="flex-box"></div><div class="separator brown"><div class="trackball dark-gray"></div></div><div id="rightCol" class="flex-box"></div></div>';
var HTMLworkTitle = '<div id="work#num#_button" class="work-entry"><div class="dark-gray white-title">%data%</div>';
var HTMLworkEmployer = '<div class="gray center-text flex-box"><a class="black-title" href="%link%">%data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div></div></div>';
// var HTMLworkOverview = '<div id="#num#" class="workOverview">%data%</div>';
var HTMLworkDescription1 = '<div id="#num#" class="description %color% round" onclick="WorkSectionClick(this)">%data%</div>';
var HTMLworkDescription2 = '<div id="#num#" class="description %color% round" onclick="WorkSectionClick(this)">%data%</div>';
var HTMLworkDescription3 = '<div id="#num#" class="description %color% round" onclick="WorkSectionClick(this)">%data%</div>';
var HTMLicon = '<img id="#num#" src="%data%" class="icon" onclick="WorkSectionClick(this)">';





var HTMLprojectStart = '<div class="project-entry flex-box"></div>';
var HTMLprojectBox = '<div class="project-info"></div>';
var HTMLprojectTitle = '<div class="limitLinkLength"><a class="title" href="%link%">%data%</a></div>';

var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<div class="project-border flex-box"><a href="%link%"><img src="%data%" class="project-image"></a><div>';
var HTMLprojectBreakLine1 = '<div class="breakerOne brown"><div>';
var HTMLprojectBreakLine = '<div class="breaker brown"><div>';


var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a class="title" href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<p class="white-text subtitle">Major: %data%</p>';

var HTMLonlineSchoolStart = '<div class="online-education-entry"></div>';
var HTMLonlineClasses = '<h3 id="onlineHeader">Online Classes</h3>';
var HTMLonlineTitle = '<a class="title" href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
var HTMLonlineIndivClass = '<div class="subtitle"><a class="white-text" href="%link%">%data%</a></div>';

var HTMLiconLeft = '<img src="%data%" class="icon-left">';
var HTMLiconRight = '<img src="%data%" class="icon-right">';
var HTMLiconCenter = '<img src="%data%" class="icon-center">';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

var bookChart = '<div id="chart" class="dark-gray"><div class="chartBox"></div></div>';
var HTMLteachStart = '<div id="subjectsHead"><h2 id="teach-h2">Teaching Subjects</h2><ul id="subjects"></ul></div>';



/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});


/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
// clickLocations = [];

// function logClicks(x,y) {
//   clickLocations.push(
//     {
//       x: x,
//       y: y
//     }
//   );
//   console.log('x location: ' + x + '; y location: ' + y);
// }

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.loc);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.city);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
