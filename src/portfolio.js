/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Foryoung Junior Ngu",
  title: "Hi all, I'm Junior (DCoder)",
  subTitle: emoji(
    "A passionate, faith-driven technologist 🚀 building practical, impactful solutions across AI, Web, IoT, and Blockchain Technology. I love turning ideas into working systems, leading teams, and mentoring the next generation of developers."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kUwu6HasMfrlegi94bkZuf-wWA3jfRDN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JuniorDCoder",
  linkedin: "https://linkedin.com/in/juniordcoder",
  gmail: "foryoungjuniorngu@gmail.com",
  medium: "https://medium.com/@foryoungjuniorngu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FULL STACK DEVELOPER & TECH LEADER BUILDING IMPACTFUL SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build modern, responsive web applications with Vue, React, Next.js, Nuxt.js, Laravel, Django, and FastAPI"
    ),
    emoji(
      "⚡ Design and develop AI-powered voice assistants, blockchain solutions (Solidity), and conversational interfaces"
    ),
    emoji(
      "⚡ Create IoT solutions with embedded systems (ESP32, Raspberry Pi) and mobile apps with React Native, Flutter & Ionic"
    ),
    emoji(
      "⚡ Lead engineering teams, mentor developers, and transform ideas into production-ready products with modern DevOps practices"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fas fa-arrow-circle-right"
    },
    {
      skillName: "nuxtjs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "express",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "ionic",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "solidity",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "raspberry-pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Bamenda (NAHPI)",
      logo: require("./assets/images/uba.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "2022 - 2026 (Present)",
      desc: "Pursuing a comprehensive degree in Computer Engineering with focus on software development, embedded systems, AI, and IoT solutions.",
      descBullets: [
        "Building practical projects in AI, voice technology, and IoT",
        "Leading engineering initiatives and mentoring fellow students",
        "Developed multiple award-winning projects including AI interviewers and IoT safety systems"
      ]
    },
    {
      schoolName: "Reunification Bilingual College, Bafoussam",
      logo: require("./assets/images/rbc.png"),
      subHeader: "Secondary & High School Education",
      duration: "2018 - 2022",
      desc: "Completed secondary and high school education with strong foundation in sciences and technology.",
      descBullets: [
        "Developed early interest in programming and technology",
        "Participated in various tech-related extracurricular activities"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend & Firebase",
      progressPercentage: "95%"
    },
    {
      Stack: "Blockchain Development",
      progressPercentage: "90%"
    },
    {
      Stack: "AI & Voice Tech",
      progressPercentage: "85%"
    },
    {
      Stack: "IoT & Embedded Systems",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Head of Technologies / CTO",
      company: "Traitz Tech",
      companylogo: require("./assets/images/traitz.jpeg"),
      date: "2023 – Present",
      desc: "Leading engineering strategy, supervising product builds, and coordinating implementation across multiple projects.",
      descBullets: [
        "Architect and oversee technical solutions for client projects including AI voice systems and web applications",
        "Lead development teams and establish best practices for code quality and project delivery",
        "Drive innovation in AI, IoT, and web technologies to deliver impactful solutions"
      ]
    },
    {
      role: "Mentor",
      company: "Oppnergy",
      companylogo: require("./assets/images/oppnergy.png"),
      date: "2024 – Present",
      desc: "Mentoring youths through structured personal and professional development programs focused on opportunities, leadership, and sustainability.",
      descBullets: [
        "Support mentees in developing confidence, communication, presentation skills, and personal discipline",
        "Guide fellows through goal setting, opportunity readiness, and real-life projects tied to the UN SDGs",
        "Help members prepare for scholarships, jobs, and entrepreneurship through mentorship and community learning",
        "Contribute to Oppnergy’s mission of empowering young people to maximize opportunities and create social impact"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Elifesaver",
      companylogo: require("./assets/images/elifesaver.jpeg"),
      date: "—",
      desc: "Contributed to platform development across both backend and frontend.",
      descBullets: [
        "Implemented responsive UI features and backend endpoints",
        "Worked closely with product teams to translate requirements into working solutions",
        "Helped improve stability, debugging workflows, and deployment processes"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "INNOVATIVE SOLUTIONS ACROSS AI, WEB, AND IOT DOMAINS",
  projects: [
    {
      image: require("./assets/images/asapchop.jpeg"),
      projectName: "AsapChop",
      projectDesc:
        "Food ordering and delivery platform with advanced routing strategy, Firebase backend, real-time tracking, and seamless user experience.",
      footerLink: [
        {
          name: "View Project",
          url: "https://asapchop.com"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "AI Interviewer",
      projectDesc:
        "Next.js application powered by Vapi, Gemini AI, and Firebase for conducting intelligent job interviews with natural conversation flow.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/JuniorDCoder/ai-mock-interview"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "MedSync Voice Assistant",
      projectDesc:
        "Voice-powered medication companion for elderly users, providing reminders, dosage information, and health tracking through conversational AI.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://foryoungjuniorngu.site"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Smart Pipe Leakage Detection",
      projectDesc:
        "IoT solution using ESP32 and dual sensors for real-time pipeline monitoring, leak detection, and automatic blocking with web-based dashboard.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/JuniorDCoder"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Pharmacy Management System",
      projectDesc:
        "Complete Vue.js + Firebase solution with authentication, role-based access, analytics dashboard, inventory management, and image uploads.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/JuniorDCoder"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Money Dey",
      projectDesc:
        "Personal AI powered finance management app built with React Native and Firebase, featuring expense tracking, budgeting, and financial insights.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://money-dey-financial-peace.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Recognition 🏆 "),
  subtitle:
    "Key accomplishments, competition wins, and impactful contributions to the tech community",

  achievementsCards: [
    {
      title: "Summer of Bitcoin Participant",
      subtitle:
        "Selected to participate in the prestigious Summer of Bitcoin program, contributing to Bitcoin and blockchain technology projects.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Summer of Bitcoin Logo",
      footerLink: [
        {
          name: "Program Details",
          url: "https://www.summerofbitcoin.org/"
        }
      ]
    },
    {
      title: "AI Voice Innovation Projects",
      subtitle:
        "Built multiple award-worthy AI and voice technology projects including JobCall Voice AI Job Coach and MedSync for elderly care.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "AI Voice Projects Logo",
      footerLink: [
        {
          name: "View Projects",
          url: "https://github.com/JuniorDCoder"
        }
      ]
    },
    {
      title: "IoT Safety Solutions",
      subtitle:
        "Designed and deployed real-world IoT prototypes for pipeline leakage detection and safety monitoring systems used in production environments.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "IoT Projects Logo",
      footerLink: [
        {name: "GitHub Profile", url: "https://github.com/JuniorDCoder"}
      ]
    },
    {
      title: "Engineering Leadership at Traitz Tech",
      subtitle:
        "Successfully led multiple engineering initiatives, established technical standards, and mentored development teams to deliver high-quality products.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Leadership Logo",
      footerLink: [{name: "Traitz Tech", url: "https://traitz.tech"}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs & Articles",
  subtitle:
    "Sharing knowledge, experiences, and insights on software development, AI, IoT, and tech leadership.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@foryoungjuniorngu",
      title: "Building AI Voice Assistants with Vapi and Gemini",
      description:
        "A practical guide to creating conversational AI applications that provide real value to users."
    },
    {
      url: "https://medium.com/@foryoungjuniorngu",
      title: "IoT Solutions for Real-World Safety",
      description:
        "How embedded systems like ESP32 and Raspberry Pi can be used to create impactful safety monitoring solutions."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "MENTORSHIP & SPEAKING",
  subtitle: emoji("I LOVE TO SHARE KNOWLEDGE AND HELP OTHERS GROW IN TECH 🚀"),

  talks: [
    {
      title: "Mentoring Module 1: Personal Development & Opportunity Readiness",
      subtitle:
        "Building confidence, communication skills, and preparing for scholarships and jobs",
      slides_url: "http://oppnergy.com/level-1/",
      event_url: "http://oppnergy.com/level-1/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Tech Content & Teaching 🎙️"),
  subtitle: "CREATING INSPIRATIONAL AND EDUCATIONAL TECH CONTENT",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project, explore collaboration opportunities, or just say hi? My inbox is always open!",
  number: "+237 677 802 114",
  email_address: "foryoungjuniorngu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "JuniorDCoder", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
