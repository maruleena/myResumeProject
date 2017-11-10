 const bio = {

     "name": "Maruschka Germain",
     "role": "Front-End Web Developer/IT Professional",
     "contacts": {
         "mobile": "(305)555-5555",
         "email": "maruschka@gmail.com",
         "github": "maruleena",
         "twiter": "@marvanger25",
         "location": "Miami, FL, US"
     },
     "bioPic": "images/myPic1.png",
     "welcomeMessage": "Do or do not there is no try. -Yoda",
     "skills": ["C#", "HTML", "CSS", "JavaScript", "Python", "Network Troubleshooting"]

 };


 const work = {
     "jobs": [{
             "employer": "Miami Dade College",
             "title": "Idea Center Intern",
             "dates": "2017",
             "location": "Miami, FL, US",
             "description": "Worked part time troubleshooting computer issues and inputing data into Google spreadsheets"
         },

         {
             "employer": "YMCA of Greater Miami",
             "title": "After School Counselor",
             "dates": "2015",
             "location": "Doral, FL, US",
             "description": "Supervised up to 20 children, ages 5-7 years old at a time ;Communicated with parents on a daily basis regarding the behavior of their children"
         }
     ]
 };


 const projects = {
     "projects": [{
             "title": "Build a Portfolio Site",
             "dates": "2017",
             "description": "Given a mockup of a website from a designer, I translated the site to a real responsive website using my HTML and CSS skills",
             "images": ["images/portfolioProject.png"]

         },

         {
             "title": "Animal Trading Cards",
             "dates": "2017",
             "description": "This is a web-based trading card game depicting one of my favorite animals",
             "images": ["images/animalTradingCard.png"]

         }



     ]

 };


 const education = {
     "schools": [{
         "name": "Miami Dade College",
         "city": "Miami, FL, US",
         "degree": "AS",
         "majors": ["Computer Science"],
         "dates": "present"
     }],


     "onlineCourses": [{
         "title": "Front-End Nanodegree",
         "school": "Udacity",
         "dates": "2017-2018",
         "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"

     }, ]
 };

 function displayBio() {

     //Replace %data% with job title
     const formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     $("#header").prepend(formattedRole);

     // Replace %data% with full name
     const formattedName = HTMLheaderName.replace("%data%", bio.name);
     $("#header").prepend(formattedName);

     // Add welcome message
     const formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     $("#header").append(formattedWelcomeMessage);

     //Add picture
     const formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
     $("#header").append(formattedBioPic);

     //Replace %data% with top contact information
     let formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     $("#topContacts").append(formattedMobile);

     let formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     $("#topContacts").append(formattedEmail);

     let formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     $("#topContacts").append(formattedGithub);

     let formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twiter);
     $("#topContacts").append(formattedTwitter);

     let formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     $("#topContacts").append(formattedLocation);



     //Add a loop to iterate through skills
     if (bio.skills.length > 0) {
         
         $("#header").append(HTMLskillsStart);

         let formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
         $("#skills").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
         $("#skills").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
         $("#skills").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
         $("#skills").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
         $("#skills").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
         $("#skills").append(formattedSkill);

     }


     //Replace %data% with footer contact information
     formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     $("#footerContacts").append(formattedMobile);

     formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     $("#footerContacts").append(formattedEmail);

     formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     $("#footerContacts").append(formattedGithub);

     formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twiter);
     $("#footerContacts").append(formattedTwitter);

     formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     $("#footerContacts").append(formattedLocation);


 }

 displayBio();

 //Replace %data% with work information
 work.jobs.forEach(function (displayWork) {

     $("#workExperience").append(HTMLworkStart);
     const formattedEmployer = HTMLworkEmployer.replace("%data%", displayWork.employer);
     const formattedTitle = HTMLworkTitle.replace("%data%", displayWork.title);

     const formattedEmployerTitle = formattedEmployer + formattedTitle;
     $(".work-entry:last").append(formattedEmployerTitle);


     const formattedDates = HTMLworkDates.replace("%data%", displayWork.dates);
     $(".work-entry:last").append(formattedDates);


     const formattedLocations = HTMLworkLocation.replace("%data%", displayWork.location);
     $(".work-entry:last").append(formattedLocations);


     const formattedDescription = HTMLworkDescription.replace("%data%", displayWork.description);

     $(".work-entry:last").append(formattedDescription);

 });



 //Replace %data% with project information
 function displayProjects() {
     for (project in projects.projects) {
         $("#projects").append(HTMLprojectStart);

         const formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
         $(".project-entry:last").append(formattedProjectTitle);


         const formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
         $(".project-entry:last").append(formattedProjectDates);

         const formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
         $(".project-entry:last").append(formattedProjectDescription);

         if (projects.projects[project].images.length > 0) {
             for (image in projects.projects[project].images) {
                 const formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
                 $(".project-entry:last").append(formattedProjectImage);
             }
         }
     }

 }

 displayProjects();


 //Replace %data% with education information
 function displayEducation() {
     for (edu in education.schools) {
         $("#education").append(HTMLschoolStart);
         const formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
         const formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);

         const formattedDegreeName = formattedSchoolName + formattedSchoolDegree;
         $(".education-entry:last").append(formattedDegreeName);

         const formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
         $(".education-entry:last").append(formattedSchoolDates);


         const formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
         $(".education-entry:last").append(formattedSchoolLocation);


         const formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
         $(".education-entry:last").append(formattedSchoolMajor);



     }
     const formattedOnlineClasses = HTMLonlineClasses.replace("%data%", education.schools[edu].title);
     $(".education-entry:last").append(formattedOnlineClasses);



     for (courses in education.onlineCourses) {


         const formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
         const formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);

         const formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
         $(".education-entry:last").append(formattedOnlineSchoolTitle);

         const formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
         $(".education-entry:last").append(formattedOnlineDates);

         const formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
         $(".education-entry:last").append(formattedOnlineUrl);



     }



 }

 displayEducation();



 // Creates the map
 function locationizer(work_obj) {
     const locationArray = [];

     for (job in work_obj.jobs) {
         const newLocation = work_obj.jobs[job].location;
         locationArray.push(newLocation);
     }

     return locationArray;
 }

 function inName(name) {
     name = name.trim().split(" ");
     console.log(name);
     name[1] = name[1].toUppercase();
     name[0] = name[0].slice(0, 1).toUpperCase() +
         name[0].slice(1).toLowerCase();

     return name[0] + " " + name[1];
 }


 $('#main').append(internationalizeButton);

 $('#mapDiv').append(googleMap);