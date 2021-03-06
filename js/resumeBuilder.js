
// -----Bio object with name, role,profile message, contact info, bio pic, and list of skills
var bio = {
    "name": "David R.C. House",
    "role": "Web Developer",
    "contacts": {
        "mobile": "925.786.4352",
        "email": "davrchouse@gmail.com",
        "github": "davrchouse",
        "location": "San Ramon, CA"
        },
    "welcomeMessage": "After many years as a biologist and neuroscientist, I am now dedicated to a career in education and technology. I love the ability to develop and communicate ideas, engage students with interactive and visual tools, and to bring excitement and first hand research experience to learning.",
    "skills": ["Course Development","Exam and Lesson Design","Scientific Writing / Editing",
            "Experimental Design","Visual Presentation","Analytic Fundamentals","Breadth of Scientific Knowledge",
            "Illustrator & Photoshop","Python","MATLAB","HTML","CSS","Javascript"],
    "biopic": "images/drch.png",
    "icon": "images/icons/skills_icon.svg"
};
// add function to bio to display all data to header section
bio.display = function() {
    //add the name and role to the header
    var formattedName = HTMLheaderName.replace("%data%", bio.name.toUpperCase());
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName,formattedRole);
    // $("#header").prepend(formattedName);

    //add in contacts info to the top and bottom of the page
    var formattedcontactInfo = HTMLmobile.replace("%data%",bio.contacts.mobile)+HTMLemail.replace("%link%",bio.contacts.email).replace("%data%",bio.contacts.email)+HTMLgithub.replace("%link%",bio.contacts.github).replace("%data%",bio.contacts.github)+HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedcontactInfo);
    $("#footerContacts").append(formattedcontactInfo);
    // $(".email").attr("href",bio.contacts.email[1]);
    // $(".github").attr("href",bio.contacts.github[1]);

    //add the formatted bio pic to the header
    var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedPic);

    //add the new Profile header and formatted profile message to the header section
    $("#header").append(HTMLprofileStart);
    var formattedProfile = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#profile").append(formattedProfile);

    // changeText(".welcome-message","biologist","blue-text");
    // changeText(".welcome-message","neuroscientist","blue-text");
    // changeText(".welcome-message","education","green-text");
    // changeText(".welcome-message","technology","red-text");

    //add the skills icon to the new skillSection
    var formattedSkillsIcon = HTMLiconRight.replace("%data%", bio.icon);
    $("#skillHeader").append(formattedSkillsIcon);
    //add the formatted skills header and empty list to the new skillSection
    var skills_length = bio.skills.length;
    $("#skillHeader").append(HTMLskillsHeader);
    $("#skillList").append(HTMLskillsStart);

    //format and append the skills into the skillList
    for (var i = 0; i < skills_length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
    //add a rating system of diamonds for the programming proficiency levels
    var starsTwo = "&nbsp; &loz; &loz;";
    var starsThree = "&nbsp; &loz; &loz; &loz;";
    var dotsThree = "&bull; &bull; &bull;";
    var dotsTwo = "&bull; &bull;";
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
};



/*
Code I wrote to change the color of certain text words in any span.
Uses class names that change font color...
*/

function changeText(targetElement,textToChange,newClass){
    var oldHTML = $(targetElement).html();
    var addTextHTML = '<span class="'+newClass+'">'+textToChange+'</span>';
    var newHTML = oldHTML.replace(textToChange,addTextHTML);
    $(targetElement).html(newHTML);
    }



var education = {
    "schools": [
        {
            "name": "UC San Diego",
            "location": "San Diego, CA",
            "degree": "PhD",
            "majors": ["Neuroscience"],
            "dates": "2004 - 2010",
            "url": "http://healthsciences.ucsd.edu/education/neurograd/"
        },
        {
            "name": "UC Berkeley",
            "location": "Berkeley, CA",
            "degree": "BA",
            "majors": ["Molecular and Cell Biology"],
            "dates": "1996 - 2000",
            "url": "http://www.berkeley.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "February 2016 - present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
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
                    ]
        }
    ],
    "icon": "images/icons/education_icon.svg"
};
// add function ot education  to display all date to the education section
education.display = function() {
    var EdSection = $("#education");
    var formattedIcon = HTMLiconLeft.replace("%data%", education.icon);
    $("#education .projectHeader").prepend(formattedIcon);

    // var test = EdSection.children(".icon-left").addClass("ed_icon");

    for (var school = 0; school < education.schools.length; school++) {
    //for each school create a new div with education-entry class
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName+formattedSchoolDegree;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolNameDegree,formattedSchoolDates,formattedSchoolLocation,formattedSchoolMajor);
        var selectTitle2 = $(".education-entry:last").children(".title");
        $(selectTitle2).attr("href",education.schools[school].url);
    }
    //add an Online Classes header
    $("#education").append(HTMLonlineClasses);
    //for each online School create a new div with all the courses taken
    for (var onlineClass = 0; onlineClass < education.onlineCourses.length; onlineClass++) {
        $("#education").append(HTMLonlineSchoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].school);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].title);
        var formattedOnlineSchoolTitle = formattedOnlineTitle+formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date);
        $(".online-education-entry:last").append(formattedOnlineSchoolTitle,formattedOnlineDates);
        var selectTitle = $(".online-education-entry:last").children(".title");
        $(selectTitle).attr("href",education.onlineCourses[onlineClass].url);
       //add the list of all the courses taken at Udacity for the Front End Dev Nanodegree
        for (var course = 0; course < education.onlineCourses[onlineClass].courseList.length; course++) {
            var formattedOnlineIndivClass = HTMLonlineIndivClass.replace("%data%", education.onlineCourses[onlineClass].courseList[course]);
            var formattedClassWithURL = formattedOnlineIndivClass.replace("%link%", education.onlineCourses[onlineClass].coureURL[course]);
            $(".online-education-entry:last").append(formattedClassWithURL);
        }
    }
};

// -----Work object for each job (employer, title, dates, description, and location)
var work = {
    "jobs": [
        {
            "employer": "Wyzant Tutoring",
            "title": "Independent Math and Science Instructor",
            "location": "Bay Area, CA",
            "dates": "2014 - present",
            "description": "Individualized instruction in math and science to college, high school, and elementary students.",
            "moreInfo":
                [
                "• Strong background to teach a wide range of science and mathematics with special emphasis on project-based and experimental learning models.",
                "• Created adaptive and individualized instruction for college, high school, and elementary students with over 500 hours of one on one teaching.",
                "• Currently learning front-end web development at Udacity to create interactive educational content for students."
                ],
            "infoType": ["blue","green","red"],
            "url": "https://www.wyzant.com/",
            "icon": "images/icons/sci_ed_tech_icon.svg"
        },
     {
            "title": "Postdoctoral Fellow in Neuroscience",
            "employer": "University of Geneva",
            "location": "Geneva, Swizterland",
            "dates": "2011 - 2013",
            "description": "Scientific research into the neurobiological mechanisms of reward learning and addiction.",
            "moreInfo":
                [
                "• Biological research to understand how the brain encodes reward and motivation during learning.",
                "• Offered advanced lectures, seminars on topics ranging from physiology to mechanisms of addiction.",
                "• Independently developed unique electrical, optical, and analytical tools (MATLAB) for electrical recordings."
                ],
            "infoType": ["blue","green","red"],
            "url": "http://www.addictionscience.unige.ch/",
            "icon": "images/icons/postdoc_icon.svg"
        },
     {
            "title": "Graduate Student in Neuroscience",
            "employer": "UC San Diego",
            "location": "San Diego, CA",
            "dates": "2004 - 2010",
            "description": "Graduate student research on how sensory experience changes cortical brain circuitry.",
            "moreInfo":
                [
                "• Student instructor for courses at UCSD and Woods Hole Marine Biological Laboratory. Composed outstanding class exams, visual presentations of concepts, and lectures.",
                "• Gained extensive expertise in experimental design and techniques including molecular biology, microscopy, and electrophysiology. <br>• Coded complex acquistion and analysis software for electrical recording data (IGOR)",
                "• Discovered mechanisms of learning and information processing at the level of synapses and brain circuits.",
                ],
             "infoType": ["green","red","blue"],
            "url": "http://mcb.berkeley.edu/labs/feldman/index.html",
            "icon": "images/icons/grad_icon.svg"
        }
    ],
    "icon": "images/icons/experience_icon.svg"
};
// add function to work object to display all data to work section
work.display = function() {
    var formattedIcon = HTMLiconLeft.replace("%data%", work.icon);
    var addToElement = $("#workExperience").children(".projectHeader");
    $(addToElement).prepend(formattedIcon);

    for (var job = 0; job < work.jobs.length; job++) {
        //for each job create a new div with work-entry class
        var formattedWorkDiv = HTMLworkStart.replace("#num#", job);
        $("#workExperience").append(formattedWorkDiv);
        //format title, employer
        var formattedTitle = HTMLworkTitle.replace("#num#", job).replace("%data%", work.jobs[job].title);
        var formattedEmployer = HTMLworkEmployer.replace("%link%", work.jobs[job].url).replace("%data%", work.jobs[job].employer);
        //format work dates, location, and description
        var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        // then concat all into html
        var formattedJobInfo = formattedTitle+formattedEmployer+formattedJobDates+formattedJobLocation;

        var formattedJobIcon = HTMLicon.replace("#num#", "icon"+job).replace("%data%",work.jobs[job].icon);

        var formattedJobDescription1 = HTMLworkDescription1.replace("#num#", "desc"+job+"A").replace("%color%", work.jobs[job].infoType[0]).replace("%data%", work.jobs[job].moreInfo[0]);
        var formattedJobDescription2 = HTMLworkDescription2.replace("#num#", "desc"+job+"B").replace("%color%", work.jobs[job].infoType[1]).replace("%data%", work.jobs[job].moreInfo[1]);
        var formattedJobDescription3 = HTMLworkDescription3.replace("#num#", "desc"+job+"C").replace("%color%", work.jobs[job].infoType[2]).replace("%data%", work.jobs[job].moreInfo[2]);

        var selector = "#work"+job;
        if (job%2 === 0) {
            $(selector).children('#rightCol').append(formattedJobInfo);
            $(selector).children('#rightCol').append(formattedJobDescription1);
            $(selector).children('#leftCol').append(formattedJobIcon);
            $(selector).children('#leftCol').append(formattedJobDescription2);
            $(selector).children('#leftCol').append(formattedJobDescription3);
        } else {
            $(selector).children('#leftCol').append(formattedJobInfo);
            $(selector).children('#leftCol').append(formattedJobDescription1);
            $(selector).children('#rightCol').append(formattedJobIcon);
            $(selector).children('#rightCol').append(formattedJobDescription2);
            $(selector).children('#rightCol').append(formattedJobDescription3);
        }
    }
    // highlight some text in the descriptions section with white text
    changeText("#desc0B", "college, high school, and elementary","white-text-no-padding");
    changeText("#desc0B", "over 500 hours","white-text-no-padding");
    changeText("#desc0C", "interactive educational content","white-text-no-padding");
    changeText("#desc0C", "front-end web development","white-text-no-padding");
    changeText("#desc0A", "science and mathematics","white-text-no-padding");
    changeText("#desc0A", "project-based and experimental learning","white-text-no-padding");
    changeText("#desc1C", "Independently developed","white-text-no-padding");
    changeText("#desc1C", "electrical, optical, and analytical tools","white-text-no-padding");
    changeText("#desc1B", "lectures, seminars","white-text-no-padding");
    changeText("#desc1A", "Biological research","white-text-no-padding");
    changeText("#desc1A", "encodes reward and motivation","white-text-no-padding");
    changeText("#desc1A", "mechanisms of learning","white-text-no-padding");
    changeText("#desc2C", "mechanisms of learning","white-text-no-padding");
    changeText("#desc2C", "information processing","white-text-no-padding");
    changeText("#desc2B", "expertise in experimental design and techniques","white-text-no-padding");
    changeText("#desc2B", "complex acquistion and analysis software","white-text-no-padding");
    changeText("#desc2A", "instructor for courses","white-text-no-padding");
    changeText("#desc2A", "visual presentations of concepts","white-text-no-padding");
};



// -----Projects object with personal projects
var projects = {
    "projects": [
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
            "images": ["images/resume_pics/full2.jpg"],
            "url": "https://github.com/davrchouse/frontend-nanodegree-resume"
        }
    ]
};
// add function to projects to display all data to projects section
projects.display = function() {
    $("#projects").append(HTMLprojectBreakLine1);
    for (var project = 0; project < projects.projects.length; project++) {
        //for each project create a new div with project-entry class
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectBox);

        //format and append the project title, dates, description, and images
        var formattedProjectTitle = HTMLprojectTitle.replace("%link%", projects.projects[project].url).replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-info:last").append(formattedProjectTitle,formattedProjectDates,formattedProjectDescription);
        //format image and append all the images
        for (var image = 0; image < projects.projects[project].images.length; image++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            var nextFormattedProjectImage = formattedProjectImage.replace("%link%", projects.projects[project].url);
            $(".project-entry:last").append(nextFormattedProjectImage);
        }
        var selectTitle = $(".project-info:last").children(".title");
        $(selectTitle).attr("href",projects.projects[project].url);
        $("#projects").append(HTMLprojectBreakLine);
    }
};
// -----Projects object with personal projects






var teaching = {
        "subjects": ["Biology       ", "Molecular Cell Biology", "Chemistry ", "Neurobiology", "Precalculus",
            "Geometry  ", "Algebra  ", "Trigonometry","Cognitive Psychology", "Elementary Math", "Elementary Science"],
        "icon": "images/icons/apple_icon.svg"
};

teaching.display = function (){
    var findChartBox = $("#content2");
    findChartBox.append(bookChart);
    var formattedTeachIcon = HTMLiconCenter.replace("%data%", teaching.icon);
    $("#chart").append(HTMLteachStart);
    $("#subjectsHead").prepend(formattedTeachIcon);
};


function displayMap () {
    $("#mapDiv").append(googleMap);
}





// -----run all the display functions
bio.display();
projects.display();
education.display();
work.display();
teaching.display();
displayMap();



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



