
// -----Bio object with name, role,profile message, contact info, bio pic, and list of skills
var bio = {
    "name": "David R.C. House",
    "role": "Web Developer",
    "profile": "After many years as a biologist and a neuroscientist, I am now dedicated to a career in education and technology. I love the ability to develop and communicate ideas, engage students with interactive and visual tools, and to bring excitement and first hand research experience to learning",
    "contacts": {
        "mobile": "925.786.4352",
        "email": ["davrchouse@gmail.com","mailto:davrchouse@gmail.com"],
        "github": ["davrchouse","https://github.com/davrchouse/"],
        "loc": "San Ramon, CA"
        },
    "pic": "images/drch.png",
    "skills": ["Course Development","Exam and Lesson Design","Scientific Writing / Editing","Experimental Design",
            "Visual Presentation","Analytic Fundamentals","Breadth of Scientific Knowledge","Illustrator & Photoshop",
            "Python","MATLAB","HTML","CSS", "Javascript"]
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
    //add the formatted profile message to the header
    var formattedProfile = HTMLwelcomeMsg.replace("%data%", bio.profile);
    $("#header").append(formattedProfile);
    //add the formatted skills list to the header
    var skills_length = bio.skills.length;
    if (skills_length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < skills_length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        };
    };
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
    ]
};
// add function to work object to display all data to work section
work.display = function() {
    for (job in work.jobs) {
        //for each job create a new div with work-entry class
        $("#workExperience").append(HTMLworkStart);
        //format, then concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer+formattedTitle;
        //format work dates, location, and description
        var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        //append all formatted items to the last added work-entry div
        $(".work-entry:last").append(formattedEmployerTitle,formattedJobDates,formattedJobLocation,formattedJobDescription);
    };
};

// -----Projects object with personal projects
var projects = {
    "all": [
        {
            "title": "Build a Portfolio",
            "dates": "May 2015",
            "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
            "images": ["images/portfolio_pics/full.jpg", "images/portfolio_pics/ipad.jpg", "images/portfolio_pics/mobile.jpg"]
        },
       {
            "title": "Build a Portfolio2",
            "dates": "May 2015 2",
            "description": "2 Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
            "images": ["images/portfolio_pics/full.jpg", "images/portfolio_pics/ipad.jpg", "images/portfolio_pics/mobile.jpg"]
        }
    ]
};
// add function to projects to display all data to projects section
projects.display = function() {
    for (project in projects.all) {
        //for each project create a new div with project-entry class
        $("#projects").append(HTMLprojectStart);
        //format and append the project title, dates, description, and images
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.all[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.all[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.all[project].description);
        $(".project-entry:last").append(formattedProjectTitle,formattedProjectDates,formattedProjectDescription);
        //format image and append all the images
        for (image in projects.all[project].images) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.all[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);
        };
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
            "courses": [
                "Responsive Web Design Fundamentals",
                "Intro to HTML and CSS",
                "Responsive Images",
                "How to Use Git and Github",
                "Javascript Basics"
            ],
            "dates": "February 2016 - present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};
// add function ot education  to display all date to the education section
education.display = function() {
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
    };
    $("#education").append(HTMLonlineClasses);
    //for each school create a new div with education-entry class
    for (onlineClass in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].school);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].title);
        var formattedOnlineSchoolTitle = formattedOnlineTitle+formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates);
        $(".education-entry:last").append(formattedOnlineSchoolTitle,formattedOnlineDates);
       //add the list of all the courses taken at Udacity for the Front End Dev Nanodegree
        for (course in education.onlineCourses[onlineClass].courses) {
            var formattedOnlineIndivClass = HTMLonlineIndivClass.replace("%data%", education.onlineCourses[onlineClass].courses[course]);
            $(".education-entry:last").append(formattedOnlineIndivClass);
        };

        // for (image in projects.all[project].images) {
        //     var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.all[project].images[image]);
        //     $(".project-entry:last").append(formattedProjectImage);
        // };

        // for (blah in education.onlineCourses[onlineClass].courses) {
        //     var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.all[project].images[image]);
        //     $(".project-entry:last").append(formattedProjectImage);
        // };

        // for (course in education.onlineCourses.courses) {
        //     var formattedOnlineIndivClass = HTMLonlineIndivClass.replace("%data%", education.onlineCourses[onlineClass].courses[course]);
        //     $(".education-entry:last").append(formattedOnlineIndivClass);
        // };
        };
};


// -----run all the display functions
projects.display();
work.display();
bio.display();
education.display();









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


$("#mapDiv").append(googleMap);
