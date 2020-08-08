
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kumaraguru",
  title: "Hi all, I'm Guru!",
  subTitle: emoji("A passionate Ethical Hacker and Full Stack Developer 👨‍💻  having an experience of building Web and Mobile apps & breaking security. I also love ML , AI and UI/UX designing. Apart from technology , I love travel and adventure! 🎒 ❤️ "),
  resumeLink: "https://raw.githubusercontent.com/hackyguru/portfolio/master/Kumaraguru%20T-Resume.pdf"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/hackyguru",
  linkedin: "https://www.linkedin.com/in/kumaraguru7/",
  gmail: "19eucs071@skcet.ac.in",
  gitlab: "https://gitlab.com/kumaraguru7",
  facebook: "https://www.facebook.com/kumaraguru7"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "My Skillset",
  subTitle: "I always love to keep myself updated with new technologies! 💪 ",
  skills: [
    emoji("⚡ Develop highly interactive Front end."),
    emoji("⚡ Progressive web applications and cross-platform technologies."),
    emoji("⚡ Integration of third party services for microjobs.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Adobe",
      fontAwesomeClassname: "fab fa-adobe"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Native & Flutter",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Development",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Security",
      progressPercentage: "80%"
    },
    {
      Stack: "Research",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",   
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",  
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "hackyguru", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Appreciations / Hall Of Fames",
  subtitle: "I have been appreciated by the following organizations with a Certificate/Hall of Fame",
  projects: [
    {
      image: "https://i.ibb.co/sHvsxPt/forgesmall.png",
      link: "http://forgeforward.in/"
    },
    {
      image: "https://i.ibb.co/3S5fDm6/huwai.png",
      link: "www.huawei.com"
    },
    {
      image: "https://i.ibb.co/j3RLzsK/nciipc.png",
      link: "https://nciipc.gov.in/"
    },
    {
      image: "https://i.ibb.co/rsHr8BS/harvard.png",
      link: "https://harvard.edu"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Some of my recent achievements!",

  achivementsCards: [
    {
      title: "Winner - RiGathon 2020",
      subtitle: "RiGathon 2020 was a national-level 48-hour agriculture themed hackathon by KCT and Forge.",
      image:
        "https://i.ibb.co/yyMVX1G/rigathon.png",
      footerLink: [
        { name: "Certificate in LinkedIn", url: "https://linkedin.com/in/kumaraguru7" }
      ]
    },
    {
      title: "Winner - JiniHacks",
      subtitle: "JiniHacks is a national level 48-hour hackathon hosted by BookingJini. It is the first hotel-tech hackathon in India.",
      image: "https://media-exp1.licdn.com/dms/image/C510BAQFZXxBifY8pcA/company-logo_200_200/0?e=2159024400&v=beta&t=hl2y9x_21mt2EmVugkJElwIGLOAFwu3b6Fcu88tW7gw",
      footerLink: [{ name: "Certificate in LinkedIn", url: "https://linkedin.com/in/kumaraguru7" }]
    },

    {
      title: "Recepient of CEH Masters Scholarship",
      subtitle: "EC-Council - the global leader in cyber security education provided me a scholarship worth $550 for CEH Masters. ",
      image: "https://mk0resourcesinfm536w.kinstacdn.com/wp-content/uploads/EC-Council-Logo-1-1.jpg",
      footerLink: [
        { name: "Acknowledgement", url: "https://linkedin.com/in/kumaraguru7" },
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://hackyguru.blogspot.com/about",
      title: "Hackyguru - A collection of articles related to cyber security and ethical hacking.",
      description: "Hackyguru is a blog which aims in spreading the knowledge in cyber security."
    },
    {
      url: "https://medium.com/@kumaraguru7",
      title: "My Medium Blogs",
      description: "I have my bug bounty writeups on medium. I make write-ups to make sure others get benefited from my knowledge in security research. Do check them out!"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Webinar on Social Engineering",
      subtitle: "by Sec Army",
      slides_url: "#",
      event_url: "https://sec.army/webcasts",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9486447649",
  email_address: "kumaragurut7@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : ""//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
