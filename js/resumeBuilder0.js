var nam = "David House"
var formattedName = HTMLheaderName.replace("%data%", nam);

var rol = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", rol);

var pic = "images/drch.png";
var formattedPic = HTMLbioPic.replace("%data%",pic);

var mobile = "925.786.4352";
var email = "davrchouse@gmail.com";
var github = "davrchouse";
var loc = "San Ramon, CA";
var formattedcontactInfo = HTMLmobile.replace("%data%",mobile)+HTMLemail.replace("%data%",email)
+HTMLgithub.replace("%data%",github)+HTMLlocation.replace("%data%",loc);

var skillz = ["smart", "funny", "handsome", "silly"];
var formattedSkills = HTMLskillsStart+HTMLskills.replace("%data%",skillz[0])+HTMLskills.replace("%data%",skillz[1])
+HTMLskills.replace("%data%",skillz[2])+HTMLskills.replace("%data%",skillz[3]);

var bio = {
    "name": formattedName,
    "role": formattedRole,
    "contact": formattedcontactInfo,
    "pictureURL": formattedPic,
    "skills": formattedSkills
};

$("#header").prepend(bio.role);
$("#header").prepend(bio.name);
$("#topContacts").prepend(bio.contact);
$("#header").append(bio.pictureURL);
$("#header").append(bio.skills);


///work object using dot notation
var work = {};
work.position = "Independent Tutor";
work.employer = "Self-Employed";
work.years = "2015 - present";
work.area = "San Ramon Valley";

$("#main").append(work["position"]);

///education object using bracket notation
var education = {
    "schools": [
        {
            "name": "UC Berkeley",
            "city": "Berkeley, CA",
            "degree": "BA",
            "major": "Molecular and Cell Biology",
            "years": "1996 - 2000"
        },
        {
            "name": "UC San Diego",
            "city": "San Diego, CA",
            "degree": "PhD",
            "major": "Neuroscience",
            "years": "2004 - 2010"
        }
    ],
    "online courses": [
        {
            "school": "Udacity",
            "courses": [
                "Intro to HTML and CSS",
                "Responsive Web Design Fundamentals",
                "Responsive Images",
                "How to Use Git and Github",
                "Javascript Basics",
                "Programming Foundations with Python"
            ],
            "url": "https://www.udacity.com/courses/web-development"
        }
    ]
};








