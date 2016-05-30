
// -----Bio object with name, role,profile message, contact info, bio pic, and list of skills
var bio = {
    "name": "David R.C. House",
    "role": "Web Developer",
    "profile": "After many years as a biologist and a neuroscientist, I am now dedicated to a career in education and technology. I love the ability to develop and communicate ideas, engage students with interactive and visual tools, and to bring excitement and first hand research experience to learning.",
    "contacts": {
        "mobile": "925.786.4352",
        "email": ["davrchouse@gmail.com","mailto:davrchouse@gmail.com"],
        "github": ["davrchouse","https://github.com/davrchouse/"],
        "loc": "San Ramon, CA"
        },
    "pic": "images/drch.png",
    "skills": {
        "skillList": ["Course Development","Exam and Lesson Design","Scientific Writing / Editing",
            "Experimental Design","Visual Presentation","Analytic Fundamentals","Breadth of Scientific Knowledge",
            "Illustrator & Photoshop","Python","MATLAB","HTML","CSS","Javascript"],
        "icon": "images/icons/skills_icon.svg"
        },
    "teaching": {
        "subjects": ["Biology", "Molecular & Cell Biology", "Chemistry", "Neurobiology", "Precalculus",
            "Geometry", "Algebra", "Trigonometry", "Cognitive Psychology", "Elementary Math & Science"],
        "icon": "images/icons/apple_icon.svg"
    }
};
// add function to bio to display all data to header section
bio.display = function() {
    //add the name and role to the header
    var formattedName = HTMLheaderName.replace("%data%", bio.name.toUpperCase());
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    //add in contacts info to the top and bottom of the page
    var formattedcontactInfo = HTMLmobile.replace("%data%",bio.contacts.mobile)
    +HTMLemail.replace("%data%",bio.contacts.email[0])
    +HTMLgithub.replace("%data%",bio.contacts.github[0])
    +HTMLlocation.replace("%data%",bio.contacts.loc);
    $("#topContacts").append(formattedcontactInfo);
    $("#footerContacts").append(formattedcontactInfo);
    $(".email").attr("href",bio.contacts.email[1]);
    $(".github").attr("href",bio.contacts.github[1]);

    //add the formatted bio pic to the header
    var formattedPic = HTMLbioPic.replace("%data%",bio.pic);
    $("#header").append(formattedPic);

    //add the new Profile header and formatted profile message to the header section
    $("#header").append(HTMLprofileStart);
    var formattedProfile = HTMLwelcomeMsg.replace("%data%", bio.profile);
    $("#profile").append(formattedProfile);

    //make a function to change color of words in the text
    function changeText(targetElement,textToChange,newClass){
        var oldHTML = $(targetElement).html();
        //console.log(oldHTML);
        var addTextHTML = '<span class="'+newClass+'">'+textToChange+'</span>';
        var newHTML = oldHTML.replace(textToChange,addTextHTML);
        //console.log(newHTML);
        $(targetElement).html(newHTML)
    };
    changeText(".welcome-message","biologist","blue-text");
    changeText(".welcome-message","neuroscientist","blue-text");
    changeText(".welcome-message","education","green-text");
    changeText(".welcome-message","technology","red-text");

    //add the skills icon to the new skillSection
    var formattedSkillsIcon = HTMLiconRight.replace("%data%", bio.skills.icon);
    $("#skillHeader").append(formattedSkillsIcon);
    //add the formatted skills header and empty list to the new skillSection
    var skills_length = bio.skills.skillList.length;
    $("#skillHeader").append(HTMLskillsHeader);
    $("#skillList").append(HTMLskillsStart);

    //format and append the skills into the skillList
    for (var i = 0; i < skills_length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills.skillList[i]);
        $("#skills").append(formattedSkill);
    };
    //add a rating system of diamonds for the programming proficiency levels
    var starsTwo = "&nbsp; &loz; &loz;"
    var starsThree = "&nbsp; &loz; &loz; &loz;"
    var dotsThree = "&bull; &bull; &bull;"
    var dotsTwo = "&bull; &bull;"
    var formmattedTwoStars = HTMLbrownStars.replace("%data%", starsTwo)+HTMLwhiteDots.replace("%data%", dotsThree);
    var formmattedThreeStars = HTMLbrownStars.replace("%data%", starsThree)+HTMLwhiteDots.replace("%data%", dotsTwo);
    function addStars (textAddingTo,starNumber) {
        var formatText = "span:contains('%data%')";
        var selectText =formatText.replace("%data%",textAddingTo);
        $(selectText).html(textAddingTo+starNumber);
    }
    addStars("Python",formmattedTwoStars);
    addStars("MATLAB",formmattedTwoStars);
    addStars("HTML",formmattedThreeStars);
    addStars("CSS",formmattedThreeStars);
    addStars("Javascript",formmattedTwoStars);

   //  //add the teaching header and icon and empty subjects list into the new teaching section
   //  var formattedTeachIcon = HTMLiconRight.replace("%data%", bio.teaching.icon);
   //  $("#teachingHeader").append(formattedTeachIcon);
   //  var subjects_length = bio.teaching.subjects.length;
   //  $("#teachingHeader").append(HTMLteachStart);

   // //format and append the teaching subjects into the subject list
   //  for (var i = 0; i < subjects_length; i++) {
   //      var formattedSkill = HTMLskills.replace("%data%", bio.teaching.subjects[i]);
   //      $("#subjects").append(formattedSkill);
   //  };
}



// -----Work object for each job (employer, title, dates, description, and location)
var work = {
    "jobs": [
        {
            "title": "Independent Math and Science Instructor",
            "employer": "Wyzant Tutoring",
            "location": "Bay Area, CA",
            "dates": "2014 - present",
            "description": "Adaptive and individualized instruction for college, high school, and elementary students."
        },
     {
            "title": "Postdoctoral Fellow in Neuroscience",
            "employer": "University of Geneva",
            "location": "Geneva, Swizterland",
            "dates": "2011 - 2013",
            "description": "Biological research using genetics, behavior, and electrical recordings, to explore the brain circuitry responsible for reward learning."
        },
     {
            "title": "Postdoctoral Fellow in Neuroscience",
            "employer": "University of California, Berkeley",
            "location": "Berkeley, CA",
            "dates": "2010 - 2011",
            "description": "Discovered mechanisms for how sensory neurons process, learn, and adapt to experience."
        }
    ],
    "icon": "images/icons/experience_icon.svg"
};
// add function to work object to display all data to work section
work.display = function() {
    var formattedIcon = HTMLiconLeft.replace("%data%", work.icon);
    var addToElement = $("#workExperience").children(".projectHeader");
    $(addToElement).prepend(formattedIcon);
    for (job in work.jobs) {
        //for each job create a new div with work-entry class
        var formattedWorkDiv = HTMLworkStart.replace("#num#", job);
        $("#workExperience").append(formattedWorkDiv);
        //format, then concat employer and title
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedJobInfo = formattedTitle+formattedEmployer+formattedJobDates+formattedJobLocation;
        //format work dates, location, and description
        var formattedJobDescription1 = HTMLworkDescription1.replace("%data%", work.jobs[job].description);
        var formattedJobDescription2 = HTMLworkDescription2.replace("%data%", work.jobs[job].description);
        var formattedJobDescription3 = HTMLworkDescription3.replace("%data%", work.jobs[job].description);
        //append all formatted items to the last added work-entry div
        var selector = "#work"+job;
        $(selector).children('#leftCol').append(formattedJobInfo);
        $(selector).children('#leftCol').append(formattedJobDescription1);
        $(selector).children('#rightCol').append(formattedJobDescription2);
        $(selector).children('#rightCol').append(formattedJobDescription3);
        //code for switching back and forth work entry layout
        // if (job%2 == 0) {
        //     $(selector).children('#rightCol').append(formattedJobInfo);
        //     $(selector).children('#rightCol').append(formattedJobDescription1);
        //     $(selector).children('#leftCol').append(formattedJobDescription2);
        //     $(selector).children('#leftCol').append(formattedJobDescription3);
        // } else {
        //     $(selector).children('#leftCol').append(formattedJobInfo);
        //     $(selector).children('#leftCol').append(formattedJobDescription1);
        //     $(selector).children('#rightCol').append(formattedJobDescription2);
        //     $(selector).children('#rightCol').append(formattedJobDescription3);
        // };
    };
};


// -----Projects object with personal projects
var projects = {
    "all": [
        {
            "title": "Build a Portfolio",
            "dates": "May 2015",
            "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
            "images": ["images/portfolio_pics/full.jpg"],
            "url": "https://github.com/davrchouse/portfolio_project"
        },
        {
            "title": "Online Resume",
            "dates": "May 2015",
            "description": "Customized an online resume by using Javascript, jQuery, CSS, and HTML; and wrote functions for interactive page events. The page is responsive and works on mobile, tablet, and desktop browsers.",
            "images": ["images/portfolio_pics/full.jpg"],
            "url": "https://github.com/davrchouse/frontend-nanodegree-resume"
        }
    ]
};
// add function to projects to display all data to projects section
projects.display = function() {
    $("#projects").append(HTMLprojectBreakLine);
    for (project in projects.all) {
        //for each project create a new div with project-entry class
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectBox);

        //format and append the project title, dates, description, and images
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.all[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.all[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.all[project].description);
        $(".project-info:last").append(formattedProjectTitle,formattedProjectDates,formattedProjectDescription);
        //format image and append all the images
        for (image in projects.all[project].images) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.all[project].images[image]);
            var nextFormattedProjectImage = formattedProjectImage.replace("%link%", projects.all[project].url);
            $(".project-entry:last").append(nextFormattedProjectImage);
        };
        var selectTitle = $(".project-info:last").children(".title");
        $(selectTitle).attr("href",projects.all[project].url);
        $("#projects").append(HTMLprojectBreakLine);
    };
};
// -----Projects object with personal projects

var education = {
    "schools": [
        {
            "name": "UC San Diego",
            "city": "San Diego, CA",
            "degree": "PhD",
            "major": "Neuroscience",
            "years": "2004 - 2010",
            "url": "http://healthsciences.ucsd.edu/education/neurograd/"
        },
        {
            "name": "UC Berkeley",
            "city": "Berkeley, CA",
            "degree": "BA",
            "major": "Molecular and Cell Biology",
            "years": "1996 - 2000",
            "url": "http://www.berkeley.edu/"
        }
    ],
    "onlineCourses": [
        {
            "school": "Udacity",
            "title": "Front-End Web Developer Nanodegree",
            "courseList":
                    [   "Responsive Web Design Fundamentals",
                        "Intro to HTML and CSS",
                        "Responsive Images",
                        "How to Use Git and Github",
                        "Javascript Basics",
                        "Intro to jQuery"
                    ],
            "coureURL": [
                        "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893",
                        "https://www.udacity.com/course/intro-to-html-and-css--ud304",
                        "https://www.udacity.com/course/responsive-images--ud882",
                        "https://www.udacity.com/course/how-to-use-git-and-github--ud775",
                        "https://www.udacity.com/course/javascript-basics--ud804",
                        "https://www.udacity.com/course/intro-to-jquery--ud245"
                    ],
            "dates": "February 2016 - present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "icon": "images/icons/education_icon.svg"
};
// add function ot education  to display all date to the education section
education.display = function() {

     var formattedIcon = HTMLiconLeft.replace("%data%", education.icon);
    var addToElement = $("#education");
    $(addToElement).prepend(formattedIcon);
    var test = $("#education").children(".icon-left").addClass("ed_icon");

    for (school in education.schools) {
    //for each school create a new div with education-entry class
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName+formattedSchoolDegree;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolNameDegree,formattedSchoolDates,formattedSchoolLocation,formattedSchoolMajor);
        var selectTitle = $(".education-entry:last").children(".title");
        $(selectTitle).attr("href",education.schools[school].url);
    };
    //add an Online Classes header
    $("#education").append(HTMLonlineClasses);
    //for each online School create a new div with all the courses taken
    for (onlineClass in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].school);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].title);
        var formattedOnlineSchoolTitle = formattedOnlineTitle+formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates);
        $(".education-entry:last").append(formattedOnlineSchoolTitle,formattedOnlineDates);
        var selectTitle = $(".education-entry:last").children(".title");
        $(selectTitle).attr("href",education.onlineCourses[onlineClass].url);
       //add the list of all the courses taken at Udacity for the Front End Dev Nanodegree
        for (course in education.onlineCourses[onlineClass].courseList) {
            var formattedOnlineIndivClass = HTMLonlineIndivClass.replace("%data%", education.onlineCourses[onlineClass].courseList[course]);
            var formattedClassWithURL = formattedOnlineIndivClass.replace("%link%", education.onlineCourses[onlineClass].coureURL[course]);
            $(".education-entry:last").append(formattedClassWithURL);
        };
    };
};


function displayMap () {
    $("#mapDiv").append(googleMap);
}

function addBookChart () {
    var findChartBox = $("#content2");
    findChartBox.append(bookChart);
    var formattedTeachIcon = HTMLiconLeft.replace("%data%", bio.teaching.icon);
    $("chart").append(formattedTeachIcon);
     $("chart").append(HTMLteachStart);
}

// -----run all the display functions
projects.display();
work.display();
bio.display();
education.display();
displayMap();
addBookChart();










// function locationizer(_work_) {
//     var locationArray = [];
//     for (job in _work_.jobs) {
//         var jobLocation = _work_.jobs[job].location;
//         locationArray.push(jobLocation);
//     };
//     return locationArray;
// };

// locationizer(work);

// function inName(name) {
//     name = name.trim().split(" ");
//     name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//     name[1] = name[1].toUpperCase();
//     name = name.join(" ");
//     return name;
// };

// formatting and appending each project



